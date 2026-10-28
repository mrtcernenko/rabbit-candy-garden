/* autosetup-split:v1 */

export function ViewportHostPart03ObfV27ShiftXrabbitcantdnygsarwdenor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 53) & 31807;
}

export function ViewprabbitcantdnygsarwdenortObfV15Mix(a: number, b: number): number {
const base = 27;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function ViewportObfV15Frabbitcantdnygsarwdenold(text: string): number {
let acc = 27;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function rabbitcantdnygsarwdenViewportHostPartdgpnrismgemgObfV29Mix(a: number, b: number): number {
const base = 19;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function rabbitcantdnygsarwdenViewportHostPartdgpnrismgemgObfV29Fold(text: string): number {
let acc = 19;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

/* obfuscation-batch:v30 */
function rabbitcantdnygsarwdenViewportHostPpmvqkObfV30ByteFold(s: string): number {
  let x = 83;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 41021;
  return x;
}
function rabbitcantdnygsarwdenViewportHostPpmvqkObfV30HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 33)) % 898;
  return h;
}
function rabbitcantdnygsarwdenViewportHostPpmvqkObfV30SumOdds(nums: number[]): number {
  let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 215;
  }
  return acc;
}

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdenViewportHostPart03ObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 52) & 4114;
}

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdenViewportHostPartxvObfV32ClampMod(n: number, m: number): number {
  const span = (m % 39) + 12;
  const x = ((n ^ 13) << 7) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenViewportHostPartxvObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 157) & 39435;
}
function rabbitcantdnygsarwdenViewportHostPartxvObfV32ByteFold(s: string): number {
  let x = 63;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 5) & 43603;
  return x;
}
function rabbitcantdnygsarwdenViewportHostPartxvObfV32HashMix(s: string): number {
  let h = 62;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 3)) % 539;
  return h;
}

/* obfuscation-batch:v33 */
function rabbitcantdnygsarwdenViewportHostPart03ObfV33SumOdds(nums: number[]): number {
  let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 253;
  }
  return acc;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenViewportHostPart03ObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 116) & 22913;
}
function rabbitcantdnygsarwdenViewportHostPart03ObfV34ByteFold(s: string): number {
  let x = 89;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) & 40332;
  return x;
}
function rabbitcantdnygsarwdenViewportHostPart03ObfV34HashMix(s: string): number {
  let h = 36;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 41)) % 137;
  return h;
}
