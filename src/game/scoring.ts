export const SORT_BASE = 100;
export const STREAK_STEP = 25;
export const SORT_CAP = 400;

export function sortScore(streak: number): number {
  return Math.min(SORT_CAP, SORT_BASE + streak * STREAK_STEP);
}

export function stageBonus(stage: number, bestStreakInStage: number): number {
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
