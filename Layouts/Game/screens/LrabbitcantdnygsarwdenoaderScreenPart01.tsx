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
function rabbitcantdnygsarwdenLrabbitcantdnygsarObfV1ByteFold(s: string): number {
  let x = 3;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) & 2147;
  return x;
}
function rabbitcantdnygsarwdenLrabbitcantdnygsarObfV1HashMix(s: string): number {
  let h = 31;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 28)) % 136;
  return h;
}
function rabbitcantdnygsarwdenLrabbitcantdnygsarObfV1SumOdds(nums: number[]): number {
  let acc = 45;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 320;
  }
  return acc;
}
void rabbitcantdnygsarwdenLrabbitcantdnygsarObfV1ByteFold("eb");
void rabbitcantdnygsarwdenLrabbitcantdnygsarObfV1HashMix("j6pi30");
void rabbitcantdnygsarwdenLrabbitcantdnygsarObfV1SumOdds([8, 11, 18]);
