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
} from '../constants/conrabbitcantdnygsarwdenfig';
import {
  Cell,
  Kind,
  buildStage,
  firstPlayable,
  remainingSweets,
} from '../game/borabbitcantdnygsarwdenard';
import {RoundResult, sortScore} from '../game/scorirabbitcantdnygsarwdenng';

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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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

export function useGameStrabbitcantdnygsarwdenate(
  stage: number,
  hintsOn: boolean,
  onGameOver: (result: RoundResult) => void,
): GameApi {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
  // Lazy seed: useRef evaluates its argument on every render, so the stage is
  // built once instead of being re-shuffled on each commit.
  const seedRef = useRef<GameSnapshot | null>(null);
  if (seedRef.current === null) {
    seedRef.current = makeInitial(stage);
  }
  const stateRef = useRef<GameSnapshot>(seedRef.current);
  const [, bump] = useReducer((n: number) => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
return (n + 1);
}, 0);

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

  const commit = useCallback(() => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
return (bump());
}, []);

  const clearAll = useCallback(() => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
    [backstopRef, toastRef, bannerRef, shakeRef, settleRef].forEach(r => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
      stateRef.current.toast = text;
      commit();
      if (toastRef.current) {
        clearTimeout(toastRef.current);
      }
      toastRef.current = setTimeout(() => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
        stateRef.current.toast = null;
        commit();
      }, TOAST_MS);
    },
    [commit],
  );

  /** Applies one CORRECT sort of the given cell. Shared by tap, drag, helper and backstop. */
  const sortCell = useCallback(
    (cell: Cell) => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
      s.cells = s.cells.map(c => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
return (c.id === cell.id ? {...c, kind: null} : c);
});
      s.selectedId = null;
      s.burstKind = kind;
      s.burstKey += 1;

      if (s.streak > 0 && s.streak % STREAK_BANNER_AT === 0) {
        s.banner = s.streak;
        if (bannerRef.current) {
          clearTimeout(bannerRef.current);
        }
        bannerRef.current = setTimeout(() => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
    if (stateRef.current.over || autoRef.current) {
      return;
    }
    stateRef.current.auto = true;
    commit();
    autoRef.current = setInterval(() => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
    mountedAt.current = Date.now();
    armBackstop(IDLE_BACKSTOP_MS);
    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------------------------ input ----------------------------- */

  const tapCell = useCallback(
    (id: number) => {
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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
void rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(28, 15);
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

export default useGameStrabbitcantdnygsarwdenate;

/* autosetup-game-stamp:v1 */
function rabbitcantdnygsarwdenGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function rabbitcantdnygsarwdenGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function rabbitcantdnygsarwdenGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenuseGameStrabbitcanObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 52) & 48532;
}
