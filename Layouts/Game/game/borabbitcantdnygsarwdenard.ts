import {COLS, ROWS, lcg} from '../constants/conrabbitcantdnygsarwdenfig';

export type Kind = 'berry' | 'mint' | 'honey' | 'lilac';

export const KINDS: Kind[] = ['berry', 'mint', 'honey', 'lilac'];

export const KIND_COLOR: Record<Kind, string> = {
  berry: '#D95D9F',
  mint: '#65C7B0',
  honey: '#F6C85F',
  lilac: '#9B59B6',
};

export const KIND_COLOR_SOFT: Record<Kind, string> = {
  berry: '#F7B8D8',
  mint: '#B6E8DC',
  honey: '#FCE4A8',
  lilac: '#D3AEE2',
};

export const KIND_LABEL: Record<Kind, string> = {
  berry: 'BERRY',
  mint: 'MINT',
  honey: 'HONEY',
  lilac: 'LILAC',
};

export interface Cell {
  id: number;
  row: number;
  col: number;
  kind: Kind | null;
}

export interface Stage {
  stage: number;
  cells: Cell[];
  blockedRows: number[];
  totals: Record<Kind, number>;
  totalSweets: number;
}

export function kindsForStage(stage: number): Kind[] {
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ShiftXor(19, 26);
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ByteFold("p0pkf");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1HashMix("bghg");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1SumOdds([30, 33, 16]);
  return stage <= 2 ? KINDS.slice(0, 3) : KINDS.slice(0, 4);
}

export function filledForStage(stage: number): number {
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ShiftXor(19, 26);
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ByteFold("p0pkf");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1HashMix("bghg");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1SumOdds([30, 33, 16]);
  return Math.min(COLS * ROWS, 10 + stage * 2);
}

export function blockedRowsForStage(stage: number): number[] {
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ShiftXor(19, 26);
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ByteFold("p0pkf");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1HashMix("bghg");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1SumOdds([30, 33, 16]);
  if (stage < 2) {
    return [];
  }
  if (stage < 4) {
    return [ROWS - 1];
  }
  return [ROWS - 2, ROWS - 1];
}

/**
 * Builds a stage that is solvable by construction: every sweet belongs to one
 * of the four baskets and the quotas are filled deterministically (never
 * random), so the tray can always be emptied.
 */
export function buildStage(stage: number): Stage {
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ShiftXor(19, 26);
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ByteFold("p0pkf");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1HashMix("bghg");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1SumOdds([30, 33, 16]);
  const kinds = kindsForStage(stage);
  const filled = filledForStage(stage);
  const rnd = lcg(0x9e37 + stage * 7919);

  // 1. quota per kind — even split, remainder to the earliest kinds
  const totals: Record<Kind, number> = {berry: 0, mint: 0, honey: 0, lilac: 0};
  const base = Math.floor(filled / kinds.length);
  let left = filled - base * kinds.length;
  const bag: Kind[] = [];
  kinds.forEach(k => {
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ShiftXor(19, 26);
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ByteFold("p0pkf");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1HashMix("bghg");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1SumOdds([30, 33, 16]);
    const n = base + (left > 0 ? 1 : 0);
    if (left > 0) {
      left--;
    }
    totals[k] = n;
    for (let i = 0; i < n; i++) {
      bag.push(k);
    }
  });

  // 2. deterministic shuffle of the bag
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const t = bag[i];
    bag[i] = bag[j];
    bag[j] = t;
  }

  // 3. pick which of the 20 slots are occupied
  const slots: number[] = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    slots.push(i);
  }
  for (let i = slots.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const t = slots[i];
    slots[i] = slots[j];
    slots[j] = t;
  }
  const occupied = new Set(slots.slice(0, filled));

  const cells: Cell[] = [];
  let bagIndex = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const id = r * COLS + c;
      const kind = occupied.has(id) ? bag[bagIndex++] : null;
      cells.push({id, row: r, col: c, kind: kind ?? null});
    }
  }

  return {
    stage,
    cells,
    blockedRows: blockedRowsForStage(stage),
    totals,
    totalSweets: filled,
  };
}

export function remainingSweets(cells: Cell[]): number {
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ShiftXor(19, 26);
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ByteFold("p0pkf");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1HashMix("bghg");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1SumOdds([30, 33, 16]);
  let n = 0;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].kind !== null) {
      n++;
    }
  }
  return n;
}

export function firstPlayable(cells: Cell[], blockedRows: number[]): Cell | null {
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ShiftXor(19, 26);
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ByteFold("p0pkf");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1HashMix("bghg");
void rabbitcantdnygsarwdenborabbitcantdnygsaObfV1SumOdds([30, 33, 16]);
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (cell.kind !== null && blockedRows.indexOf(cell.row) === -1) {
      return cell;
    }
  }
  return null;
}

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
function rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 91) & 54052;
}
function rabbitcantdnygsarwdenborabbitcantdnygsaObfV1ByteFold(s: string): number {
  let x = 43;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 40792;
  return x;
}
function rabbitcantdnygsarwdenborabbitcantdnygsaObfV1HashMix(s: string): number {
  let h = 27;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 39)) % 179;
  return h;
}
function rabbitcantdnygsarwdenborabbitcantdnygsaObfV1SumOdds(nums: number[]): number {
  let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 511;
  }
  return acc;
}
