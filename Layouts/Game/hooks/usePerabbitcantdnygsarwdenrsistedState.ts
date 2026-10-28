import {useCallback, useState} from 'react';

export interface Settings {
  music: boolean;
  sfx: boolean;
  haptics: boolean;
  hints: boolean;
}

export interface GardenState {
  stage: number;
  score: number;
  bestStreak: number;
  unlocked: number;
  settings: Settings;
}

export const DEFAULT_STATE: GardenState = {
  stage: 1,
  score: 0,
  bestStreak: 0,
  unlocked: 0,
  settings: {music: true, sfx: true, haptics: true, hints: true},
};

/**
 * Session store. The app is fully offline and adds no native storage module
 * (the allowed dependency set is linear-gradient / svg / lucide only), so the
 * garden lives in a module level record that survives screen switches for the
 * whole app session.
 */
let memory: GardenState = {...DEFAULT_STATE, settings: {...DEFAULT_STATE.settings}};

export function readGarden(): GardenState {
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ShiftXor(35, 26);
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ByteFold("5i3");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1HashMix("j8l");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1SumOdds([13, 36, 7]);
  return memory;
}

export function useGarden() {
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ShiftXor(35, 26);
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ByteFold("5i3");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1HashMix("j8l");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1SumOdds([13, 36, 7]);
  const [state, setState] = useState<GardenState>(memory);

  const update = useCallback((patch: Partial<GardenState>) => {
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ShiftXor(35, 26);
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ByteFold("5i3");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1HashMix("j8l");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1SumOdds([13, 36, 7]);
    memory = {...memory, ...patch};
    setState(memory);
  }, []);

  const setSettings = useCallback((patch: Partial<Settings>) => {
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ShiftXor(35, 26);
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ByteFold("5i3");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1HashMix("j8l");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1SumOdds([13, 36, 7]);
    memory = {...memory, settings: {...memory.settings, ...patch}};
    setState(memory);
  }, []);

  const resetAll = useCallback(() => {
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ShiftXor(35, 26);
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ByteFold("5i3");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1HashMix("j8l");
void rabbitcantdnygsarwdenusePerabbitcantdnyObfV1SumOdds([13, 36, 7]);
    memory = {...DEFAULT_STATE, settings: {...DEFAULT_STATE.settings}};
    setState(memory);
  }, []);

  return {state, update, setSettings, resetAll};
}

export default useGarden;

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
function rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 41) & 11855;
}
function rabbitcantdnygsarwdenusePerabbitcantdnyObfV1ByteFold(s: string): number {
  let x = 86;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) & 44851;
  return x;
}
function rabbitcantdnygsarwdenusePerabbitcantdnyObfV1HashMix(s: string): number {
  let h = 36;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 20)) % 677;
  return h;
}
function rabbitcantdnygsarwdenusePerabbitcantdnyObfV1SumOdds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 23) % 740;
  }
  return acc;
}
