/* autosetup-split:v1 */

export function rabbitcantdnygsarwdenGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function rabbitcantdnygsarwdenGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenMoonvineOrabbitcanObfV1ClampMod(n: number, m: number): number {
  const span = (m % 65) + 7;
  const x = ((n ^ 100) << 3) % span;
  return x < 0 ? x + span : x;
}
void rabbitcantdnygsarwdenMoonvineOrabbitcanObfV1ClampMod(20, 39);
