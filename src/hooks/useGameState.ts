import {useCallback, useEffect, useReducer, useRef} from 'react';

import {
  AUTO_SORT_INTERVAL_MS,
  HELPER_CHARGE_MAX,
  IDLE_BACKSTOP_MS,
  IDLE_ENGAGED_MS,
  IDLE_MIN_FROM_MOUNT_MS,
  SETTLE_DELAY_MS,
  SHAKE_MS,
  START_HEARTS,
  STREAK_BANNER_AT,
  STREAK_BANNER_MS,
  TOAST_MS,
} from '../constants/config';
import {
  Cell,
  Kind,
  buildStage,
  firstPlayable,
  remainingSweets,
} from '../game/board';
import {RoundResult, sortScore} from '../game/scoring';

export interface GameSnapshot {
  stage: number;
  cells: Cell[];
  blockedRows: number[];
  totals: Record<Kind, number>;
  counts: Record<Kind, number>;
  selectedId: number | null;
  hearts: number;
  streak: number;
  bestStreak: number;
  score: number;
  charge: number;
  sorted: number;
  total: number;
  toast: string | null;
  banner: number;
  shakeKind: Kind | null;
  burstKind: Kind | null;
  burstKey: number;
  over: boolean;
  auto: boolean;
}

function makeInitial(stage: number): GameSnapshot {
  const built = buildStage(stage);
  return {
    stage,
    cells: built.cells,
    blockedRows: built.blockedRows.slice(),
    totals: built.totals,
    counts: {berry: 0, mint: 0, honey: 0, lilac: 0},
    selectedId: null,
    hearts: START_HEARTS,
    streak: 0,
    bestStreak: 0,
    score: 0,
    charge: 0,
    sorted: 0,
    total: built.totalSweets,
    toast: null,
    banner: 0,
    shakeKind: null,
    burstKind: null,
    burstKey: 0,
    over: false,
    auto: false,
  };
}

export interface GameApi {
  state: GameSnapshot;
  tapCell: (id: number) => void;
  tapBasket: (kind: Kind) => void;
  useHelper: () => void;
  restart: () => void;
  highlightKind: Kind | null;
}

export function useGameState(
  stage: number,
  hintsOn: boolean,
  onGameOver: (result: RoundResult) => void,
): GameApi {
  // Lazy seed: useRef evaluates its argument on every render, so the stage is
  // built once instead of being re-shuffled on each commit.
  const seedRef = useRef<GameSnapshot | null>(null);
  if (seedRef.current === null) {
    seedRef.current = makeInitial(stage);
  }
  const stateRef = useRef<GameSnapshot>(seedRef.current);
  const [, bump] = useReducer((n: number) => n + 1, 0);

  const mountedAt = useRef<number>(Date.now());
  const finishedRef = useRef(false);
  const resolvingRef = useRef(false);
  const overCbRef = useRef(onGameOver);
  overCbRef.current = onGameOver;

  const backstopRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const toastRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bannerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shakeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const settleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const commit = useCallback(() => bump(), []);

  const clearAll = useCallback(() => {
    [backstopRef, toastRef, bannerRef, shakeRef, settleRef].forEach(r => {
      if (r.current) {
        clearTimeout(r.current);
        r.current = null;
      }
    });
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }, []);

  /* ---------------------------------------------------------------- */

  const finish = useCallback(
    (won: boolean) => {
      if (finishedRef.current) {
        return;
      }
      finishedRef.current = true;
      const s = stateRef.current;
      s.over = true;
      s.selectedId = null;
      commit();
      if (autoRef.current) {
        clearInterval(autoRef.current);
        autoRef.current = null;
      }
      if (backstopRef.current) {
        clearTimeout(backstopRef.current);
        backstopRef.current = null;
      }
      settleRef.current = setTimeout(() => {
        overCbRef.current({
          won,
          score: s.score,
          streak: s.bestStreak,
          sorted: s.sorted,
          total: s.total,
          stage: s.stage,
        });
      }, SETTLE_DELAY_MS);
    },
    [commit],
  );

  const showToast = useCallback(
    (text: string) => {
      stateRef.current.toast = text;
      commit();
      if (toastRef.current) {
        clearTimeout(toastRef.current);
      }
      toastRef.current = setTimeout(() => {
        stateRef.current.toast = null;
        commit();
      }, TOAST_MS);
    },
    [commit],
  );

  /** Applies one CORRECT sort of the given cell. Shared by tap, drag, helper and backstop. */
  const sortCell = useCallback(
    (cell: Cell) => {
      const s = stateRef.current;
      const kind = cell.kind;
      if (!kind || s.over) {
        return;
      }
      s.score += sortScore(s.streak);
      s.streak += 1;
      s.bestStreak = Math.max(s.bestStreak, s.streak);
      s.charge = Math.min(HELPER_CHARGE_MAX, s.charge + 1);
      s.counts[kind] += 1;
      s.sorted += 1;
      s.cells = s.cells.map(c => (c.id === cell.id ? {...c, kind: null} : c));
      s.selectedId = null;
      s.burstKind = kind;
      s.burstKey += 1;

      if (s.streak > 0 && s.streak % STREAK_BANNER_AT === 0) {
        s.banner = s.streak;
        if (bannerRef.current) {
          clearTimeout(bannerRef.current);
        }
        bannerRef.current = setTimeout(() => {
          stateRef.current.banner = 0;
          commit();
        }, STREAK_BANNER_MS);
      }

      commit();

      if (remainingSweets(s.cells) === 0) {
        finish(true);
        return;
      }

      // Deadlock guard: if every sweet left sits under the moonvine and the
      // helper is not charged yet, the vine withers on its own rather than
      // leaving the player with no legal move.
      if (!firstPlayable(s.cells, s.blockedRows) && s.blockedRows.length > 0) {
        s.blockedRows = s.blockedRows.slice(1);
        showToast('THE MOONVINE WITHERS');
        commit();
      }
    },
    [commit, finish, showToast],
  );

  /* ----------------------------- backstop --------------------------- */

  const startAuto = useCallback(() => {
    if (stateRef.current.over || autoRef.current) {
      return;
    }
    stateRef.current.auto = true;
    commit();
    autoRef.current = setInterval(() => {
      const s = stateRef.current;
      if (s.over) {
        return;
      }
      let next = firstPlayable(s.cells, s.blockedRows);
      if (!next && s.blockedRows.length > 0) {
        s.blockedRows = s.blockedRows.slice(1);
        next = firstPlayable(s.cells, s.blockedRows);
      }
      if (!next) {
        finish(true);
        return;
      }
      sortCell(next);
    }, AUTO_SORT_INTERVAL_MS);
  }, [commit, finish, sortCell]);

  const armBackstop = useCallback(
    (ms: number) => {
      if (backstopRef.current) {
        clearTimeout(backstopRef.current);
      }
      const sinceMount = Date.now() - mountedAt.current;
      const delay = Math.max(ms, IDLE_MIN_FROM_MOUNT_MS - sinceMount);
      backstopRef.current = setTimeout(startAuto, Math.max(500, delay));
    },
    [startAuto],
  );

  useEffect(() => {
    mountedAt.current = Date.now();
    armBackstop(IDLE_BACKSTOP_MS);
    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------------------------ input ----------------------------- */

  const tapCell = useCallback(
    (id: number) => {
      const s = stateRef.current;
      if (s.over || s.auto || resolvingRef.current) {
        return;
      }
      const cell = s.cells[id];
      if (!cell || cell.kind === null) {
        return;
      }
      if (s.blockedRows.indexOf(cell.row) !== -1) {
        showToast('THE MOONVINE BLOCKS THIS ROW');
        return;
      }
      s.selectedId = s.selectedId === id ? null : id;
      commit();
    },
    [commit, showToast],
  );

  const tapBasket = useCallback(
    (kind: Kind) => {
      const s = stateRef.current;
      if (s.over || s.auto || resolvingRef.current) {
        return;
      }
      if (s.selectedId === null) {
        showToast('TAP A SWEET FIRST');
        return;
      }
      const cell = s.cells[s.selectedId];
      if (!cell || cell.kind === null) {
        s.selectedId = null;
        commit();
        return;
      }

      if (cell.kind === kind) {
        sortCell(cell);
        armBackstop(IDLE_ENGAGED_MS);
        return;
      }

      // wrong basket
      s.streak = 0;
      s.charge = 0;
      s.hearts -= 1;
      s.selectedId = null;
      s.shakeKind = kind;
      commit();
      if (shakeRef.current) {
        clearTimeout(shakeRef.current);
      }
      shakeRef.current = setTimeout(() => {
        stateRef.current.shakeKind = null;
        commit();
      }, SHAKE_MS * 2);

      if (s.hearts <= 0) {
        finish(false);
      }
    },
    [armBackstop, commit, finish, showToast, sortCell],
  );

  const useHelper = useCallback(() => {
    const s = stateRef.current;
    if (s.over || s.auto || s.charge < HELPER_CHARGE_MAX) {
      return;
    }
    s.charge = 0;
    if (s.blockedRows.length > 0) {
      s.blockedRows = s.blockedRows.slice(1);
      showToast('THE RABBIT CLEARS THE MOONVINE');
      commit();
      return;
    }
    showToast('THE RABBIT SORTS TWO SWEETS');
    for (let i = 0; i < 2; i++) {
      const next = firstPlayable(stateRef.current.cells, stateRef.current.blockedRows);
      if (next) {
        sortCell(next);
      }
    }
  }, [commit, showToast, sortCell]);

  const restart = useCallback(() => {
    clearAll();
    finishedRef.current = false;
    resolvingRef.current = false;
    stateRef.current = makeInitial(stage);
    mountedAt.current = Date.now();
    commit();
    armBackstop(IDLE_BACKSTOP_MS);
  }, [armBackstop, clearAll, commit, stage]);

  const s = stateRef.current;
  const selected = s.selectedId !== null ? s.cells[s.selectedId] : null;
  const highlightKind = hintsOn && selected ? selected.kind : null;

  return {state: s, tapCell, tapBasket, useHelper, restart, highlightKind};
}

export default useGameState;
