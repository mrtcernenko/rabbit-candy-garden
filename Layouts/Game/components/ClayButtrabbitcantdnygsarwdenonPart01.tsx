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
function rabbitcantdnygsarwdenClayButtrabbitcantObfV1ByteFold(s: string): number {
  let x = 38;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) & 55218;
  return x;
}
function rabbitcantdnygsarwdenClayButtrabbitcantObfV1HashMix(s: string): number {
  let h = 18;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 40)) % 364;
  return h;
}
function rabbitcantdnygsarwdenClayButtrabbitcantObfV1SumOdds(nums: number[]): number {
  let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 896;
  }
  return acc;
}
void rabbitcantdnygsarwdenClayButtrabbitcantObfV1ByteFold("2h");
void rabbitcantdnygsarwdenClayButtrabbitcantObfV1HashMix("p8h63c");
void rabbitcantdnygsarwdenClayButtrabbitcantObfV1SumOdds([16, 35, 34]);
