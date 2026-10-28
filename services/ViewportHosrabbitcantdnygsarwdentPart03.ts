/* autosetup-split:v1 */

export function VierabbitcantdnygsarwdenwportObfV28Mix(a: number, b: number): number {
const base = 27;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function ViewprabbitcantdnygsarwdenortObfV28Fold(text: string): number {
let acc = 27;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function VierabbitcantdnygsarwdenwporObfV29Mix(a: number, b: number): number {
const base = 19;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function ViewporObfV29Forabbitcantdnygsarwdenld(text: string): number {
let acc = 19;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function rabbitcantdnygsarwdenViewpmvqkrmwismgemObfV31ClampMod(n: number, m: number): number {
const span = (m % 49) + 8;
const x = ((n ^ 132) << 2) % span;
return x < 0 ? x + span : x;
}

export function rabbitcantdnygsarwdenViewportHostObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function rabbitcantdnygsarwdenVieObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenViewportHosObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function rabbitcantdnygsarwdenViewportHostObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function rabbitcantdnygsarwdenViewportHostObfV13HashMix(s: string): number {
let h = 83;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 6) % 724;
return h;
}

export function rabbitcantdnygsarwdenViewportHostObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 70) & 6927;
}

export function ViewportHrabbitcantdnygsarwdenostPart02ObfV21ByteFold(s: string): number {
let x = 69;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 65535;
return x;
}

export function VirabbitcantdnygsarwdenewportHostPart02ObfV23ByteFold(s: string): number {
let x = 41;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 32766;
return x;
}

export function ViewportHostPart02ObfV2rabbitcantdnygsarwden4SumOdds(nums: number[]): number {
    let acc = 40;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 38) % 514;
}
return acc;
}

export function ViewportHostPart02ObfV25CrabbitcantdnygsarwdenlampMod(n: number, m: number): number {
const span = (m % 17) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function rabbitcantdnygsarwdenViewportHostxvwrkrObfV33HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 37)) % 346;
return h;
}

export function rabbitcantdnygsarwdenViewportHostxvwrkrObfV33ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 183) & 52443;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenViewportHosrabbitcObfV34ByteFold(s: string): number {
  let x = 77;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 5) & 24734;
  return x;
}
function rabbitcantdnygsarwdenViewportHosrabbitcObfV34HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 29)) % 686;
  return h;
}
void rabbitcantdnygsarwdenViewportHosrabbitcObfV34ByteFold("9cn4h");
void rabbitcantdnygsarwdenViewportHosrabbitcObfV34HashMix("bknglg");
