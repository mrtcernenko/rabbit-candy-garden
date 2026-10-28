/* autosetup-decoy:v1 */

export function rabbitcantdnygsarwdenplait10Touch(seed: number): number {
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ClampMod(23, 46);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ShiftXor(1, 48);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ByteFold("j2n");
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1HashMix("ji");
  let x = (seed ^ 36782) | 0;
  x = (x >>> 6) ^ 3975;
  x = Math.imul(x, 35) & 0xffff;
  return x;
}

/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ClampMod(n: number, m: number): number {
  const span = (m % 54) + 8;
  const x = ((n ^ 105) << 6) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 73) & 55723;
}
function rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ByteFold(s: string): number {
  let x = 87;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 56100;
  return x;
}
function rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1HashMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 36)) % 224;
  return h;
}
