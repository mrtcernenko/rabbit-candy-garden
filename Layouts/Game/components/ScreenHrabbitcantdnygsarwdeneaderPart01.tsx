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
function rabbitcantdnygsarwdenScreenHrabbitcantdObfV1ClampMod(n: number, m: number): number {
  const span = (m % 53) + 4;
  const x = ((n ^ 124) << 2) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenScreenHrabbitcantdObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 146) & 29738;
}
function rabbitcantdnygsarwdenScreenHrabbitcantdObfV1ByteFold(s: string): number {
  let x = 33;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 57094;
  return x;
}
void rabbitcantdnygsarwdenScreenHrabbitcantdObfV1ClampMod(2, 45);
void rabbitcantdnygsarwdenScreenHrabbitcantdObfV1ShiftXor(36, 71);
void rabbitcantdnygsarwdenScreenHrabbitcantdObfV1ByteFold("g58");
