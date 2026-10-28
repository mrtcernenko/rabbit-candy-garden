/* autosetup-split:v1 */

export function ViewporrabbitcantdnygsarwdentHObfV30Fold(text: string): number {
let acc = 25;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function rabbitcantdnygsarwdenViewportHtxvwrkrxuObfV33SumOdds(nums: number[]): number {
let acc = 44;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 33) % 434;
}
return acc;
}

export function rabbitcantdnygsarwdenViewporttowebrnsigObfV34ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 63) & 21932;
}

export function rabbitcantdnygsarwdenViewporttowebrnsigObfV34ByteFold(s: string): number {
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 24388;
return x;
}

export function VrabbitcantdnygsarwdeniewportHObfV30Mix(a: number, b: number): number {
const base = 25;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function rabbitcantdnygsarwdenMixSeed(a: number, b: number): number {
  
return ((a % (b || 1)) + b) % (b || 1);
}

export function rabbitcantdnygsarwdenViewportHostObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function rabbitcantdnygsarwdenViewportHostObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function rabbitcantdnygsarwdenViewportHostObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenViewportHostObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function rabbitcantdnygsarwdenViewportHostObfV15ClampMod(n: number, m: number): number {
const span = (m % 52) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function ViewportHostPart0rabbitcantdnygsarwden2ObfV21ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 81) & 58679;
}

export function ViewrabbitcantdnygsarwdenportHostPart02ObfV22ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 83) & 51655;
}

export function ViewportHostPart02ObfV2rabbitcantdnygsarwden4HashMix(s: string): number {
let h = 56;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 23) % 728;
return h;
}

export function ViewportHostPart02ObfV2rabbitcantdnygsarwden5SumOdds(nums: number[]): number {
let acc = 46;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 43) % 789;
}
return acc;
}

export function ViewrabbitcantdnygsarwdenportHostPart02ObfV25ByteFold(s: string): number {
let x = 62;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 28180;
return x;
}

export function rabbitcantdnygsarwdenViewportHostxvwrkrObfV33ClampMod(n: number, m: number): number {
const span = (m % 57) + 5;
const x = ((n ^ 59) << 3) % span;
return x < 0 ? x + span : x;
}

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdenViewportHosrabbitcObfV35HashMix(s: string): number {
  let h = 41;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 460;
  return h;
}
function rabbitcantdnygsarwdenViewportHosrabbitcObfV35SumOdds(nums: number[]): number {
  let acc = 65;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 685;
  }
  return acc;
}
function rabbitcantdnygsarwdenViewportHosrabbitcObfV35ClampMod(n: number, m: number): number {
  const span = (m % 64) + 8;
  const x = ((n ^ 107) << 7) % span;
  return x < 0 ? x + span : x;
}
