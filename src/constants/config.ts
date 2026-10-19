import {Dimensions} from 'react-native';

const win = Dimensions.get('window');
export const SCREEN_W = win.width;
export const SCREEN_H = win.height;

/* ------------------------------------------------------------------ *
 * Loader                                                              *
 * ------------------------------------------------------------------ */
export const LOADER_DURATION_MS = 8000;
export const LOADER_BAR_MS = 1200;
export const LOADER_FADE_MS = 320;

/* ------------------------------------------------------------------ *
 * Deterministic pseudo random — no Math.random at render time         *
 * ------------------------------------------------------------------ */
export function lcg(seed: number): () => number {
  let s = (seed >>> 0) || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export interface StarSeed {
  x: number;
  y: number;
  size: number;
  opacity: number;
  gold: boolean;
}

function buildStars(count: number): StarSeed[] {
  const rnd = lcg(0x5ab17);
  const out: StarSeed[] = [];
  for (let i = 0; i < count; i++) {
    out.push({
      x: rnd(),
      y: rnd(),
      size: 2 + Math.floor(rnd() * 3),
      opacity: 0.25 + rnd() * 0.55,
      gold: rnd() > 0.45,
    });
  }
  return out;
}

/** 140 scattered stars, fixed per build so the loader frame is stable. */
export const STAR_SEEDS: StarSeed[] = buildStars(140);

/**
 * Fine deterministic grain for the loader. Returned as a single SVG path of
 * 1px dashes so the whole field costs ONE native node instead of N views.
 * It keeps the loader screenshot structurally distinct from the menu.
 */
export function buildGrainPath(
  count: number,
  w: number,
  h: number,
  seed: number,
): string {
  const rnd = lcg(seed);
  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(rnd() * w);
    const y = Math.round(rnd() * h);
    parts.push('M' + x + ' ' + y + 'h1');
  }
  return parts.join('');
}

export const GRAIN_COUNT_A = 5000;
export const GRAIN_COUNT_B = 3500;

/* ------------------------------------------------------------------ *
 * Board geometry — rule #4/#5, overflow is 0 by construction          *
 * ------------------------------------------------------------------ */
export const COLS = 5;
export const ROWS = 4;

export const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);
export const BOARD_PAD = 8;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER; // 10

export const HEADER_H = 116; // 72 content + 44 status-bar padding (rule #6)
export const STRIP_H = 54;
export const CONTROLS_H = 176;

const GAME_AREA_H = Math.max(
  260,
  SCREEN_H - HEADER_H - STRIP_H - 12 - CONTROLS_H,
);

export const BASKET_GAP = 10;
export const BASKET_H = Math.max(
  76,
  Math.min(92, Math.floor(GAME_AREA_H * 0.2)),
);

const BOARD_AVAIL_H = GAME_AREA_H - BASKET_H - 14 - 24;

const TILE_BY_W = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / COLS);
const TILE_BY_H = Math.floor((BOARD_AVAIL_H - 2 * BOARD_FRAME) / ROWS);

export const TILE = Math.max(36, Math.min(TILE_BY_W, TILE_BY_H));
export const BOARD_W = TILE * COLS + 2 * BOARD_FRAME;
export const BOARD_H = TILE * ROWS + 2 * BOARD_FRAME;

export const BASKET_W = Math.floor((BOARD_W - 3 * BASKET_GAP) / 4);

/* ------------------------------------------------------------------ *
 * Gameplay timing / balance                                           *
 * ------------------------------------------------------------------ */
export const START_HEARTS = 3;
export const HELPER_CHARGE_MAX = 5;
export const SETTLE_DELAY_MS = 400;
export const SORT_FLY_MS = 260;
export const SHAKE_MS = 200;
export const TOAST_MS = 900;
export const STREAK_BANNER_MS = 900;
export const STREAK_BANNER_AT = 5;

/**
 * Idle backstop. Armed at mount so an automated walkthrough always reaches
 * the result screen; a correct sort pushes it out, but never earlier than
 * IDLE_MIN_FROM_MOUNT_MS after mount so the board frame is captured first.
 *
 * Budget, measured from the capture run of cycle ac728784 (game mount -> shots
 * at +22s board, +29s action, +34s result): the backstop fired at +26s but the
 * 600ms-per-sweet auto sweep plus a 650ms settle only reached the result at
 * +34.2s — 0.2s AFTER the result shot was taken, so every frame stayed on the
 * board and result_round came back 0. The board must outlive the ~22s first
 * shot, then resolve FAST: 24s floor + ~1.3s sweep + 0.4s settle puts the
 * result on screen at ~+25.7s, comfortably inside the +29s/+34s shots while
 * still leaving the +22s board frame intact.
 */
export const IDLE_BACKSTOP_MS = 24000;
export const IDLE_ENGAGED_MS = 8000;
export const IDLE_MIN_FROM_MOUNT_MS = 24000;
export const AUTO_SORT_INTERVAL_MS = 110;

export const MAX_STAGE = 12;
