/* autosetup-split:v1 */

export function rabbitcantdnygsarwdenGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function rabbitcantdnygsarwdenGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function rabbitcantdnygsarwdenGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenGameScreenrabbitcaObfV1SumOdds(nums: number[]): number {
  let acc = 46;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 452;
  }
  return acc;
}
function rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 32) + 10;
  const x = ((n ^ 153) << 7) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 43) & 46538;
}
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1SumOdds([6, 9, 16]);
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ClampMod(27, 66);
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ShiftXor(69, 52);
