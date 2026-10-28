// autosetup-split-begin
import { rabbitcantdnygsarwdenGameMixSeed, rabbitcantdnygsarwdenGameClampSpan } from './scorirabbitcantdnygsarwdenngPart01';
import { rabbitcantdnygsarwdenGameFoldRange } from './scorirabbitcantdnygsarwdenngPart02';
// autosetup-split-end

export const SORT_BASE = 100;
export const STREAK_STEP = 25;
export const SORT_CAP = 400;

export function sortScore(streak: number): number {
void rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ShiftXor(73, 8);
void rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ByteFold("52");
  return Math.min(SORT_CAP, SORT_BASE + streak * STREAK_STEP);
}

export function stageBonus(stage: number, bestStreakInStage: number): number {
void rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ShiftXor(73, 8);
void rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ByteFold("52");
  return 250 * stage + 50 * bestStreakInStage;
}

export interface RoundResult {
  won: boolean;
  score: number;
  streak: number;
  sorted: number;
  total: number;
  stage: number;
}

/* autosetup-game-stamp:v1 */
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 57) & 47763;
}
function rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ByteFold(s: string): number {
  let x = 37;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 12943;
  return x;
}
