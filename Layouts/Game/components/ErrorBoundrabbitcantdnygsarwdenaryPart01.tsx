/* autosetup-split:v1 */

export function rabbitcantdnygsarwdenGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function rabbitcantdnygsarwdenGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1HashMix(s: string): number {
  let h = 9;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 12)) % 222;
  return h;
}
function rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1SumOdds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 352;
  }
  return acc;
}
function rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 22) + 9;
  const x = ((n ^ 96) << 3) % span;
  return x < 0 ? x + span : x;
}
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1HashMix("a1");
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1SumOdds([39, 30, 17]);
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1ClampMod(24, 11);
