// autosetup-split-begin
import { VierabbitcantdnygsarwdenwportHostPart01ObfV27ByteFold, rabbitcantdnygsarwdenViewportHostPart01ObfV31SumOdds, rabbitcantdnygsarwdenViewportHostPart01ObfV31ClampMod, rabbitcantdnygsarwdenViewportHostPart01ObfV31ShiftXor } from './ViewportHostPart0rabbitcantdnygsarwden1Part01';
// autosetup-split-end

export function rabbitcantdnygsarwdenViewportHostObfV15SumOdds(nums: number[]): number {
  let acc = 4;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 173;
  }
  return acc;
}

export function rabbitcantdnygsarwdenViewportHostObfV14ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 41) & 29117;
}

export function rabbitcantdnygsarwdenViewportHostObfV11ClampMod(n: number, m: number): number {
  const span = (m % 27) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function rabbitcantdnygsarwdenViewportHostObfV7SumOdds(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 211;
  }
  return acc;
}

export function rabbitcantdnygsarwdenViewportHostObfV8HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 307;
  return h;
}

export function rabbitcantdnygsarwdenViewportHostObfV6ClampMod(n: number, m: number): number {
  const span = (m % 19) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v27 */

void VierabbitcantdnygsarwdenwportHostPart01ObfV27ByteFold('k8');

/* obfuscation-batch:v28 */
function rabbitcantdnygsarwdenViewportHostPart01prissmgecmObfV28Mix(a: number, b: number): number {
  const base = 51;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenViewportHostPart01prissmgecmObfV28Fold(text: string): number {
  let acc = 51;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function rabbitcantdnygsarwdenViewportHostPart01pzurisymgeObfV29Mix(a: number, b: number): number {
  const base = 22;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenViewportHostPart01pzurisymgeObfV29Fold(text: string): number {
  let acc = 22;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function rabbitcantdnygsarwdenViewportHostPart01dgpnrismgeObfV30Mix(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenViewportHostPart01dgpnrismgeObfV30Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
void rabbitcantdnygsarwdenViewportHostPart01ObfV31SumOdds([30, 25, 24]);
void rabbitcantdnygsarwdenViewportHostPart01ObfV31ClampMod(67, 42);
void rabbitcantdnygsarwdenViewportHostPart01ObfV31ShiftXor(29, 60);

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdenViewportHostPart01ObfV32ClampMod(n: number, m: number): number {
  const span = (m % 27) + 9;
  const x = ((n ^ 1) << 5) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 9) & 47061;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV32ByteFold(s: string): number {
  let x = 31;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) & 42266;
  return x;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV32HashMix(s: string): number {
  let h = 81;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 26)) % 722;
  return h;
}
void rabbitcantdnygsarwdenViewportHostPart01ObfV32ClampMod(47, 54);
void rabbitcantdnygsarwdenViewportHostPart01ObfV32ShiftXor(9, 40);
void rabbitcantdnygsarwdenViewportHostPart01ObfV32ByteFold("f0d");
void rabbitcantdnygsarwdenViewportHostPart01ObfV32HashMix("fk");

/* obfuscation-batch:v33 */
function rabbitcantdnygsarwdenViewportHostPart01ObfV33ByteFold(s: string): number {
  let x = 68;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) & 25008;
  return x;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV33HashMix(s: string): number {
  let h = 66;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 29)) % 112;
  return h;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV33SumOdds(nums: number[]): number {
  let acc = 74;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 23) % 146;
  }
  return acc;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV33ClampMod(n: number, m: number): number {
  const span = (m % 66) + 11;
  const x = ((n ^ 43) << 4) % span;
  return x < 0 ? x + span : x;
}
void rabbitcantdnygsarwdenViewportHostPart01ObfV33ByteFold("92");
void rabbitcantdnygsarwdenViewportHostPart01ObfV33HashMix("a5i");
void rabbitcantdnygsarwdenViewportHostPart01ObfV33SumOdds([12, 15, 30]);
void rabbitcantdnygsarwdenViewportHostPart01ObfV33ClampMod(33, 16);

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenViewportHostPart01ObfV34SumOdds(nums: number[]): number {
  let acc = 63;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 428;
  }
  return acc;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV34ClampMod(n: number, m: number): number {
  const span = (m % 63) + 9;
  const x = ((n ^ 216) << 2) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 152) & 3301;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV34ByteFold(s: string): number {
  let x = 50;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) & 13454;
  return x;
}
void rabbitcantdnygsarwdenViewportHostPart01ObfV34SumOdds([31, 22, 25]);
void rabbitcantdnygsarwdenViewportHostPart01ObfV34ClampMod(24, 59);
void rabbitcantdnygsarwdenViewportHostPart01ObfV34ShiftXor(74, 69);
void rabbitcantdnygsarwdenViewportHostPart01ObfV34ByteFold("g1g3o");

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdenViewportHostPart01ObfV35ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 135) & 11780;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV35ByteFold(s: string): number {
  let x = 8;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 40453;
  return x;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV35HashMix(s: string): number {
  let h = 82;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 20)) % 119;
  return h;
}
function rabbitcantdnygsarwdenViewportHostPart01ObfV35SumOdds(nums: number[]): number {
  let acc = 88;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 466;
  }
  return acc;
}
void rabbitcantdnygsarwdenViewportHostPart01ObfV35ShiftXor(27, 50);
void rabbitcantdnygsarwdenViewportHostPart01ObfV35ByteFold("dc");
void rabbitcantdnygsarwdenViewportHostPart01ObfV35HashMix("0h6p");
void rabbitcantdnygsarwdenViewportHostPart01ObfV35SumOdds([29, 4, 31]);
