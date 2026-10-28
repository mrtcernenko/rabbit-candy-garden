/* autosetup-split:v1 */

export function initializationFlowObfV17ShrabbitcantdnygsarwdeniftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 230) & 383;
}

export function initializationFlowObfV17SurabbitcantdnygsarwdenmOdds(nums: number[]): number {
let acc = 6;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 8) % 759;
}
return acc;
}

export function initialrabbitcantdnygsarwdenizationFlowObfV21HashMix(s: string): number {
let h = 71;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 805;
return h;
}

export function initializationrabbitcantdnygsarwdenFlowObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => {
void rabbitcantdnygsarwdenipmvqkrmwismgemgalObfV26ShiftXor(26, 53);
void rabbitcantdnygsarwdenipmvqkrmwismgemgalObfV26ByteFold("cl");
void rabbitcantdnygsarwdenipmvqkrmwismgemgalObfV26HashMix("1g3a9m");
return ((a + c.charCodeAt(0) * 41) % 989);
}, 0);
}

export function initirabbitcantdnygsarwdenalizationFlowObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function initializationFlowPart01ObfV12ClampMorabbitcantdnygsarwdend(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function initializationFrabbitcantdnygsarwdenlowObfV9SumOdds(nums: number[]): number {
      return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function rabbitcantdnygsarwdeninitbchlipsoqiyrodObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function initializationFlowObfV14ByteForabbitcantdnygsarwdenld(s: string): number {
let x = 28;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) ^ 9;
return x & 5400;
}

export function initializationrabbitcantdnygsarwdenFlowObfV15ClampMod(n: number, m: number): number {

const span = (m % 46) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFlowPart02ObfVrabbitcantdnygsarwden12ClampMod(n: number, m: number): number {
void rabbitcantdnygsarwdenirabbitcantdnygsarObfV30ByteFold("noj");
void rabbitcantdnygsarwdenirabbitcantdnygsarObfV30HashMix("3gdkhi");
void rabbitcantdnygsarwdenirabbitcantdnygsarObfV30SumOdds([36, 7, 22]);
void rabbitcantdnygsarwdenirabbitcantdnygsarObfV30ClampMod(33, 64);
const span = (m % 17) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationrabbitcantdnygsarwdenFlowPart03ObfV12HashMix(s: string): number {
            let h = 19;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
return h;
}

export function rabbitcantdnygsarwdeninitbchlipsoqiyrodObfV4SumOdds(nums: number[]): number {
let acc = 0;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
return acc;
}

export function initializationrabbitcantdnygsarwdenFlowPart03ObfV12SumOdds(nums: number[]): number {
let acc = 0;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
return acc;
}

export function initialirabbitcantdnygsarwdenzationFlowPart01ObfV12HashMix(s: string): number {
      let h = 19;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
return h;
}

export function initializationFlowPart0rabbitcantdnygsarwden1ObfV21ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 207) & 16338;
}

export function initializrabbitcantdnygsarwdenationFlowPart01ObfV22HashMix(s: string): number {
let h = 23;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 806;
return h;
}

export function initializationFlowPart02ObfV24rabbitcantdnygsarwdenByteFold(s: string): number {
let x = 75;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 15390;
return x;
}

/* obfuscation-batch:v23 */
function inirabbitcantdnygsarwdentialObfV23Mix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function irabbitcantdnygsarwdennitialObfV23Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v25 */
function initialrabbitcantdnygsarwdenizObfV25Mix(a: number, b: number): number {
  const base = 62;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function initializObfV2rabbitcantdnygsarwden5Fold(text: string): number {
  let acc = 62;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v26 */
function rabbitcantdnygsarwdenipmvqkrmwismgemgalObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 144) & 11811;
}
function rabbitcantdnygsarwdenipmvqkrmwismgemgalObfV26ByteFold(s: string): number {
  let x = 7;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 53465;
  return x;
}
function rabbitcantdnygsarwdenipmvqkrmwismgemgalObfV26HashMix(s: string): number {
  let h = 40;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 26)) % 126;
  return h;
}

/* obfuscation-batch:v27 */
function rabbitcantdnygsarwdeniichyikowrdfpagthmObfV27ByteFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 35) & 30013;
  return x;
}

/* obfuscation-batch:v28 */
function initiaObfV28ShiftXrabbitcantdnygsarwdenor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 27) & 18673;
}
function initirabbitcantdnygsarwdenaObfV28ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 45649;
  return x;
}
function initiaObfV28rabbitcantdnygsarwdenHashMix(s: string): number {
  let h = 35;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 15)) % 470;
  return h;
}
function initirabbitcantdnygsarwdenaObfV28SumOdds(nums: number[]): number {
  let acc = 55;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 551;
  }
  return acc;
}

/* obfuscation-batch:v29 */
function rabbitcantdnygsarwdenitowebrnsignmalvsnObfV29ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 167) & 5996;
}
function rabbitcantdnygsarwdenitowebrnsignmalvsnObfV29ByteFold(s: string): number {
  let x = 83;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 35) & 50422;
  return x;
}
function rabbitcantdnygsarwdenitowebrnsignmalvsnObfV29HashMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 20)) % 436;
  return h;
}
function rabbitcantdnygsarwdenitowebrnsignmalvsnObfV29SumOdds(nums: number[]): number {
  let acc = 5;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 328;
  }
  return acc;
}

/* obfuscation-batch:v30 */
function rabbitcantdnygsarwdenirabbitcantdnygsarObfV30ByteFold(s: string): number {
  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) & 15921;
  return x;
}
function rabbitcantdnygsarwdenirabbitcantdnygsarObfV30HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 23)) % 366;
  return h;
}
function rabbitcantdnygsarwdenirabbitcantdnygsarObfV30SumOdds(nums: number[]): number {
  let acc = 33;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 500;
  }
  return acc;
}
function rabbitcantdnygsarwdenirabbitcantdnygsarObfV30ClampMod(n: number, m: number): number {
  const span = (m % 43) + 7;
  const x = ((n ^ 127) << 1) % span;
  return x < 0 ? x + span : x;
}
