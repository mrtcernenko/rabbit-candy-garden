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
function rabbitcantdnygsarwdenHelperabbitcantdnyObfV1SumOdds(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 900;
  }
  return acc;
}
function rabbitcantdnygsarwdenHelperabbitcantdnyObfV1ClampMod(n: number, m: number): number {
  const span = (m % 64) + 2;
  const x = ((n ^ 180) << 2) % span;
  return x < 0 ? x + span : x;
}
void rabbitcantdnygsarwdenHelperabbitcantdnyObfV1SumOdds([13, 12, 15]);
void rabbitcantdnygsarwdenHelperabbitcantdnyObfV1ClampMod(14, 41);
