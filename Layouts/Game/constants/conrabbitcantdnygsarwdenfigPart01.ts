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
function rabbitcantdnygsarwdenconrabbitcantdnygsObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 1) & 39200;
}
function rabbitcantdnygsarwdenconrabbitcantdnygsObfV1ByteFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 35800;
  return x;
}
void rabbitcantdnygsarwdenconrabbitcantdnygsObfV1ShiftXor(5, 68);
void rabbitcantdnygsarwdenconrabbitcantdnygsObfV1ByteFold("fo");
