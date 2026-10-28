/* autosetup-split:v1 */

export function OfferResolveObfV24SumOrabbitcantdnygsarwdendds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function OfferRrabbitcantdnygsarwdenesolveObfV22SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function OfferResolveObfV20HasrabbitcantdnygsarwdenhMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function OfferResolveObfVrabbitcantdnygsarwden18ShiftXor(n: number, k: number): number {
void rabbitcantdnygsarwdenOfferabbitcantdnygObfV32ByteFold("kjkh");
return ((n ^ k) << 2) & 65535;
}

export function OfferResolvrabbitcantdnygsarwdeneObfV17ByteFold(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function rabbitcantdnygsarwdenOfferResolveObfV13SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function rabbitcantdnygsarwdenOfferResolveObfV8SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function rabbitcantdnygsarwdenOfferResolveObfV10HashMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function rabbitcantdnygsarwdenOfferResolveObfV10ClampMod(n: number, k: number): number {
return ((n ^ k) << 2) & 65535;
}

export function rabbitcantdnygsarwdenOfferResolveObfV6SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function rabbitcantdnygsarwdenOffObfV4HashMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function rabbitcantdnygsarwdenOfferResolvObfV1SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function rabbitcantdnygsarwdenOfferResolvePart01ObfV15ShiftXor(n: number, k: number): number {
return ((n ^ k) << 2) & 65535;
}

export function rabbitcantdnygsarwdenOfferResolvePart02ObfV15ShiftXor(n: number, k: number): number {
return ((n ^ k) << 2) & 65535;
}

export function OfferResolvePart02ObfV20CrabbitcantdnygsarwdenlampMod(n: number, k: number): number {
return ((n ^ k) << 2) & 65535;
}

export function OfferResorabbitcantdnygsarwdenlvePart02ObfV21SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Fold(text: string): number {
let acc = 59;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Fold(text: string): number {
let acc = 46;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function OfferResolveObfV23SumOddrabbitcantdnygsarwdens1(nums: number[]): number {
let acc = 86;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 28) % 707;
}
return acc;
}

export function OfferRerabbitcantdnygsarwdensolveObfV25ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 173) & 13067;
}

export function OfferResolveObrabbitcantdnygsarwdenfV18ByteFold(s: string): number {
void rabbitcantdnygsarwdenOfferabbitcantdnygObfV32ByteFold("kjkh");
let x = 52;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 4) ^ 129;
return x & 50880;
}

export function rabbitcantdnygsarwdenOfferResolveObfV15SumOdds(nums: number[]): number {
let acc = 78;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 30) % 243;
}
return acc;
}

export function rabbitcantdnygsarwdenOffObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolveObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function rabbitcantdnygsarwdenOfferResolveObfV16ClampMod(n: number, m: number): number {
const span = (m % 16) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function OfferResolveObfV22rabbitcantdnygsarwdenHashMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 277;
return h;
}

/* obfuscation-batch:v30 */
function OfferRObfV30ClrabbitcantdnygsarwdenampMod(n: number, m: number): number {
  const span = (m % 66) + 4;
  const x = ((n ^ 238) << 7) % span;
  return x < 0 ? x + span : x;
}
function OfferRObfV30ShiftXorabbitcantdnygsarwdenr(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 76) & 29532;
}
function OfferROrabbitcantdnygsarwdenbfV30ByteFold(s: string): number {
void rabbitcantdnygsarwdenOfferabbitcantdnygObfV32ByteFold("kjkh");
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 13570;
  return x;
}

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdenOffetowebrnsignmalObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 110) & 14319;
}

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdenOfferabbitcantdnygObfV32ByteFold(s: string): number {
  let x = 87;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 4) & 59412;
  return x;
}
