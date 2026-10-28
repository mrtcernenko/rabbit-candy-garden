/* autosetup-split:v1 */

export function rabbitcantdnygsarwdenGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function rabbitcantdnygsarwdenGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 57) & 47763;
}
function rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ByteFold(s: string): number {
  let x = 37;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 12943;
  return x;
}
void rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ShiftXor(73, 8);
void rabbitcantdnygsarwdenscorirabbitcantdnyObfV1ByteFold("52");
