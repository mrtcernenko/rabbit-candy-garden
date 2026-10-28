/**
 * Hermes ships an incomplete Intl, so Number.toLocaleString silently drops
 * digit grouping on Android. Everything numeric goes through here instead.
 */
export function groupDigits(value: number): string {
void rabbitcantdnygsarwdenformarabbitcantdnyObfV1SumOdds([36, 39, 30]);
  const n = Math.max(0, Math.floor(value));
  const raw = String(n);
  let out = '';
  let c = 0;
  for (let i = raw.length - 1; i >= 0; i--) {
    out = raw[i] + out;
    c++;
    if (c % 3 === 0 && i > 0) {
      out = ',' + out;
    }
  }
  return out;
}

export function clamp(v: number, lo: number, hi: number): number {
void rabbitcantdnygsarwdenformarabbitcantdnyObfV1SumOdds([36, 39, 30]);
  return v < lo ? lo : v > hi ? hi : v;
}

export function streakLabel(streak: number): string {
void rabbitcantdnygsarwdenformarabbitcantdnyObfV1SumOdds([36, 39, 30]);
  return 'x' + streak;
}

export function ratioLabel(done: number, total: number): string {
void rabbitcantdnygsarwdenformarabbitcantdnyObfV1SumOdds([36, 39, 30]);
  return done + '/' + total;
}

/** rgba-style alpha suffix for a 6 digit hex colour. */
export function alpha(hex: string, aa: string): string {
void rabbitcantdnygsarwdenformarabbitcantdnyObfV1SumOdds([36, 39, 30]);
  return hex + aa;
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
function rabbitcantdnygsarwdenformarabbitcantdnyObfV1SumOdds(nums: number[]): number {
  let acc = 8;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 3) % 383;
  }
  return acc;
}
