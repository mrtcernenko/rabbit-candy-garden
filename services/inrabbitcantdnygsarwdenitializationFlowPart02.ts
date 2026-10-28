/* autosetup-split:v1 */

export function initializationFlowObfV16HasrabbitcantdnygsarwdenhMix(s: string): number {
let h = 47;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 34) % 386;
return h;
}

export function rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(n: number, m: number): number {
const span = (m % 45) + 2;
const x = ((n ^ 239) << 2) % span;
return x < 0 ? x + span : x;
}

export function rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 61) & 58465;
}

export function rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold(s: string): number {
let x = 75;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) & 58371;
return x;
}

export function rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix(s: string): number {
let h = 31;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 798;
return h;
}

export function rabbitcantdnygsarwdeninitialpmvqkrmwismObfV29ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 81) & 24740;
}

export function rabbitcantdnygsarwdeninitialpmvqkrmwismObfV29ByteFold(s: string): number {
let x = 16;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 5) & 21432;
return x;
}

export function rabbitcantdnygsarwdeninitialpmvqkrmwismObfV29HashMix(s: string): number {
let h = 15;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 33)) % 346;
return h;
}

export function rabbitcantdnygsarwdeninitialpmvqkrmwismObfV29SumOdds(nums: number[]): number {
let acc = 49;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 18) % 899;
}
return acc;
}

export function rabbitcantdnygsarwdeninitializationFichObfV30ClampMod(n: number, m: number): number {
const span = (m % 20) + 8;
const x = ((n ^ 4) << 1) % span;
return x < 0 ? x + span : x;
}

export function rabbitcantdnygsarwdeninitializationFlotObfV32ClampMod(n: number, m: number): number {
const span = (m % 66) + 12;
const x = ((n ^ 16) << 2) % span;
return x < 0 ? x + span : x;
}

export function initializationFlowObfV24ShiftXorabbitcantdnygsarwdenr(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 148) & 39889;
}

export function initializationFlowrabbitcantdnygsarwdenObfV25SumOdds(nums: number[]): number {
let acc = 62;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 26) % 234;
}
return acc;
}

export function initializationrabbitcantdnygsarwdenFlowObfV26HashMix(s: string): number {
let h = 92;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 45) % 308;
return h;
}

export function initializationFlowObfV27BytrabbitcantdnygsarwdeneFold(s: string): number {
let x = 51;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) & 18941;
return x;
}

export function initializationFlrabbitcantdnygsarwdenowObfV18ShiftXor(n: number, k: number): number {
                const x = (n ^ k) << 5;
return (x ^ 196) & 1306;
}

export function initialrabbitcantdnygsarwdenizationFlowObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function inrabbitcantdnygsarwdenitializationFlowObfV8ClampMod(n: number, m: number): number {
    
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function initirabbitcantdnygsarwdenalizationFlowObfV7ClampMod(n: number, m: number): number {
    const span = (m % 17) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFrabbitcantdnygsarwdenlowPart01ObfV21ByteFold(s: string): number {
let x = 37;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 65535;
return x;
}

export function initializatiorabbitcantdnygsarwdennFlowPart01ObfV25ClampMod(n: number, m: number): number {
const span = (m % 58) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initialiOrabbitcantdnygsarwdenbfV28Fold(text: string): number {
void rabbitcantdnygsarwdeninrabbitcantdnygsaObfV35ByteFold("49");
let acc = 14;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdeninrabbitcantdnygsaObfV35ByteFold(s: string): number {
  let x = 42;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) & 45180;
  return x;
}
