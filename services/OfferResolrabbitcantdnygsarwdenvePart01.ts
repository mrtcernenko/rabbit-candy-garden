/* autosetup-split:v1 */

export function rabbitcantdnygsarwdenOfferResolveObfV15HashMix(s: string): number {
let h = 67;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 632;
return h;
}

export function rabbitcantdnygsarwdenOfferResolveObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolveObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function rabbitcantdnygsarwdenOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function rabbitcantdnygsarwdenOfferResolveObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function rabbitcantdnygsarwdenOfferResolvePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolvePart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function rabbitcantdnygsarwdenOfferResolveObfV13HashMix(s: string): number {
let h = 88;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 539;
return h;
}

export function rabbitcantdnygsarwdenOfferResolveObfV14SumOdds(nums: number[]): number {
let acc = 49;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 36) % 335;
}
return acc;
}

export function rabbitcantdnygsarwdenOfferResolvePart01ObfV15ByteFold(s: string): number {
let x = 80;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 133;
return x & 13916;
}

export function rabbitcantdnygsarwdenOfferResolvePart01ObfV15SumOdds(nums: number[]): number {
let acc = 70;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 269;
}
return acc;
}

export function rabbitcantdnygsarwdenOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function rabbitcantdnygsarwdenOfferResolveObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function rabbitcantdnygsarwdenOfferResolvePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function rabbitcantdnygsarwdenOfferResolvePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function rabbitcantdnygsarwdenOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function rabbitcantdnygsarwdenOfferResolveObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolveObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function rabbitcantdnygsarwdenOfferResolveObfV14ByteFold(s: string): number {
let x = 71;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 143;
return x & 39056;
}

export function rabbitcantdnygsarwdenOfferResolvePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 44) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function rabbitcantdnygsarwdenOfferResolveObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function rabbitcantdnygsarwdenOfferResolvePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function rabbitcantdnygsarwdenOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function rabbitcantdnygsarwdenOfferResolveObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolveObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolvePart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function rabbitcantdnygsarwdenOfferResolveObfV13ClampMod(n: number, m: number): number {
const span = (m % 44) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function rabbitcantdnygsarwdenOfferResolvePart03ObfV15ClampMod(n: number, m: number): number {
const span = (m % 54) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function rabbitcantdnygsarwdenOfferResolveObfV16SumOdds(nums: number[]): number {
let acc = 90;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 34) % 294;
}
return acc;
}

export function rabbitcantdnygsarwdenOfferResolveObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 129) & 6985;
}
/* obfuscation-batch:v17 */
function OfferResolvePart01ObfV17ByteForabbitcantdnygsarwdenld(s: string): number {
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) ^ 229;
  return x & 48430;
}
function OfferResolvePart01OrabbitcantdnygsarwdenbfV17HashMix(s: string): number {
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34HashMix("9i50jo");
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34SumOdds([12, 7, 38]);
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34ClampMod(65, 32);
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34ShiftXor(59, 2);
  let h = 75;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 43) % 419;
  return h;
}
function OfferResolvePart01ObfV17SurabbitcantdnygsarwdenmOdds(nums: number[]): number {
        let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 237;
  }
  return acc;
}
function OfferResolvePart01ObfV17ClarabbitcantdnygsarwdenmpMod(n: number, m: number): number {
        const span = (m % 21) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void OfferResolvePart01ObfV17ByteForabbitcantdnygsarwdenld('w7g');
void OfferResolvePart01OrabbitcantdnygsarwdenbfV17HashMix('fzq3');
void OfferResolvePart01ObfV17SurabbitcantdnygsarwdenmOdds([16, 9, 18]);
void OfferResolvePart01ObfV17ClarabbitcantdnygsarwdenmpMod(76, 54);
/* obfuscation-batch:v18 */
function OfferResolrabbitcantdnygsarwdenvePart01ObfV18SumOdds(nums: number[]): number {
        let acc = 58;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 29) % 171;
  }
  return acc;
}
function OfferResolveParrabbitcantdnygsarwdent01ObfV18ClampMod(n: number, m: number): number {
const span = (m % 25) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferRerabbitcantdnygsarwdensolvePart01ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 216) & 48530;
}
void OfferResolrabbitcantdnygsarwdenvePart01ObfV18SumOdds([20, 25, 23]);
void OfferResolveParrabbitcantdnygsarwdent01ObfV18ClampMod(10, 75);
void OfferRerabbitcantdnygsarwdensolvePart01ObfV18ShiftXor(17, 43);
/* obfuscation-batch:v19 */
function OfferResolvePart0rabbitcantdnygsarwden1ObfV19HashMix(s: string): number {
let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 782;
  return h;
}
function OfferResorabbitcantdnygsarwdenlvePart01ObfV19SumOdds(nums: number[]): number {
        let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 801;
  }
  return acc;
}
function OfferResolvePart01ObfV19ByrabbitcantdnygsarwdenteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 165;
  return x & 3000;
}
/* obfuscation-batch:v20 */
function OfferResolvePart01ObrabbitcantdnygsarwdenfV20ClampMod(n: number, m: number): number {
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34HashMix("9i50jo");
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34SumOdds([12, 7, 38]);
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34ClampMod(65, 32);
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34ShiftXor(59, 2);
      const span = (m % 24) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePartrabbitcantdnygsarwden01ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 138) & 63074;
}
function OfferResolvePart01ObfV20BrabbitcantdnygsarwdenyteFold(s: string): number {
  let x = 82;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) ^ 230;
  return x & 20568;
}
function OfferResolverabbitcantdnygsarwdenPart01ObfV20HashMix(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 484;
  return h;
}
void OfferResolvePart01ObrabbitcantdnygsarwdenfV20ClampMod(63, 40);
void OfferResolvePartrabbitcantdnygsarwden01ObfV20ShiftXor(34, 42);
void OfferResolvePart01ObfV20BrabbitcantdnygsarwdenyteFold('zfj8');
void OfferResolverabbitcantdnygsarwdenPart01ObfV20HashMix('p4mm');

/* obfuscation-batch:v21 */
function OfferResolvePrabbitcantdnygsarwdenart01ObfV21ClampMod(n: number, m: number): number {
const span = (m % 61) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function OfrabbitcantdnygsarwdenferResolvePart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 88) & 9537;
}

function OfferRerabbitcantdnygsarwdensolvePart01ObfV21ByteFold(s: string): number {

  let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) & 65535;
  return x;
}

function OfferResolvePart01ObfV21HashrabbitcantdnygsarwdenMix(s: string): number {

  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 683;
  return h;
}
void OfferResolvePrabbitcantdnygsarwdenart01ObfV21ClampMod(47, 74);
void OfrabbitcantdnygsarwdenferResolvePart01ObfV21ShiftXor(77, 21);
void OfferRerabbitcantdnygsarwdensolvePart01ObfV21ByteFold('wha');
void OfferResolvePart01ObfV21HashrabbitcantdnygsarwdenMix('kha');

/* obfuscation-batch:v22 */
function OfferResolverabbitcantdnygsarwdenPart01ObfV22ClampMod(n: number, m: number): number {
      const span = (m % 14) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolveParrabbitcantdnygsarwdent01ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 200) & 47488;
}
function OfferResolvePart01ObfV22ByteFoldrabbitcantdnygsarwden(s: string): number {
        let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 65535;
  return x;
}
function OfrabbitcantdnygsarwdenferResolvePart01ObfV22HashMix(s: string): number {
let h = 27;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 35) % 742;
  return h;
}
void OfferResolverabbitcantdnygsarwdenPart01ObfV22ClampMod(53, 13);
void OfferResolveParrabbitcantdnygsarwdent01ObfV22ShiftXor(9, 72);
void OfferResolvePart01ObfV22ByteFoldrabbitcantdnygsarwden('97f5');
void OfrabbitcantdnygsarwdenferResolvePart01ObfV22HashMix('w6ck');
/* obfuscation-batch:v23 */
function OfrabbitcantdnygsarwdenferResolvePart01ObfV23SumOdds(nums: number[]): number {
      let acc = 79;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 748;
  }
  return acc;
}
function OfferResolvePart01ObfV2rabbitcantdnygsarwden3ClampMod1(n: number, m: number): number {

  const span = (m % 23) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferRrabbitcantdnygsarwdenesolvePart01ObfV23ShiftXor2(n: number, k: number): number {
        const x = (n ^ k) << 3;
  return (x ^ 31) & 29843;
}
function OfferResolvePart01ObfV23rabbitcantdnygsarwdenByteFold3(s: string): number {
  let x = 38;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 37700;
  return x;
}
void OfrabbitcantdnygsarwdenferResolvePart01ObfV23SumOdds([12, 7, 23]);
void OfferResolvePart01ObfV2rabbitcantdnygsarwden3ClampMod1(5, 63);
void OfferRrabbitcantdnygsarwdenesolvePart01ObfV23ShiftXor2(84, 52);
void OfferResolvePart01ObfV23rabbitcantdnygsarwdenByteFold3('n0');
void OffrabbitcantdnygsarwdenerResolvePart01ObfV24ByteFold('d8');
void OfferResolvePart01ObfV24HashMixrabbitcantdnygsarwden('ap6yb');
/* obfuscation-batch:v24 */
function OffrabbitcantdnygsarwdenerResolvePart01ObfV24ByteFold(s: string): number {
  let x = 76;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 35387;
  return x;
}
function OfferResolvePart01ObfV24HashMixrabbitcantdnygsarwden(s: string): number {
        let h = 26;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 325;
  return h;
}


/* obfuscation-batch:v25 */
function OfferabbitcantdnygsarwdenrResolvePart01ObfV25ClampMod(n: number, m: number): number {
  const span = (m % 44) + 10;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function OfferResolvePart01ObfV25SrabbitcantdnygsarwdenhiftXor(n: number, k: number): number {

  const x = (n ^ k) << 1;
  return (x ^ 210) & 29824;
}
void OfferabbitcantdnygsarwdenrResolvePart01ObfV25ClampMod(20, 21);
void OfferResolvePart01ObfV25SrabbitcantdnygsarwdenhiftXor(24, 35);


/* obfuscation-batch:v26 */
function OfferRrabbitcantdnygsarwdenesolvePart01ObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 148) & 25268;
}

function OfferResolvePart01ObfV26ByteFolrabbitcantdnygsarwdend(s: string): number {
  let x = 89;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 48) & 24906;
  return x;
}

function OfferResolveParabbitcantdnygsarwdenrt01ObfV26HashMix(s: string): number {
  let h = 59;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 43) % 123;
  return h;
}

/* obfuscation-batch:v27 */
function OfferResolvePart01ObfrabbitcantdnygsarwdenV27ByteFold(s: string): number {
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34HashMix("9i50jo");
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34SumOdds([12, 7, 38]);
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34ClampMod(65, 32);
void rabbitcantdnygsarwdenOfferResolrabbitcaObfV34ShiftXor(59, 2);
  let x = 73;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 46317;
  return x;
}

/* obfuscation-batch:v27 */
function rabbitcantdnygsarwdenOfferResolprissmgecmsgallierObfV27Mix(a: number, b: number): number {
  const base = 55;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenOfferResolprissmgecmsgallierObfV27Fold(text: string): number {
  let acc = 55;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v28 */
function rabbitcantdnygsarwdenOfferResolpzurisymgeqmgallseObfV28Mix(a: number, b: number): number {
  const base = 29;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenOfferResolpzurisymgeqmgallseObfV28Fold(text: string): number {
  let acc = 29;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function rabbitcantdnygsarwdenOfferResoldgpnrismgemgalleryObfV29Mix(a: number, b: number): number {
  const base = 38;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenOfferResoldgpnrismgemgalleryObfV29Fold(text: string): number {
  let acc = 38;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function rabbitcantdnygsarwdenOfferResolpmvqkrmwObfV30ByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) & 45967;
  return x;
}
function rabbitcantdnygsarwdenOfferResolpmvqkrmwObfV30HashMix(s: string): number {
  let h = 33;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 22)) % 543;
  return h;
}
function rabbitcantdnygsarwdenOfferResolpmvqkrmwObfV30SumOdds(nums: number[]): number {
  let acc = 65;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 319;
  }
  return acc;
}
function rabbitcantdnygsarwdenOfferResolpmvqkrmwObfV30ClampMod(n: number, m: number): number {
  const span = (m % 20) + 3;
  const x = ((n ^ 78) << 1) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdenOfferResolichyikowObfV31SumOdds(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 175;
  }
  return acc;
}
function rabbitcantdnygsarwdenOfferResolichyikowObfV31ClampMod(n: number, m: number): number {
  const span = (m % 37) + 2;
  const x = ((n ^ 85) << 6) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenOfferResolichyikowObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 129) & 30843;
}

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdenOfferResoltxvwrkrxObfV32SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 617;
  }
  return acc;
}
function rabbitcantdnygsarwdenOfferResoltxvwrkrxObfV32ClampMod(n: number, m: number): number {
  const span = (m % 69) + 9;
  const x = ((n ^ 34) << 3) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v33 */
function rabbitcantdnygsarwdenOfferResoltowebrnsObfV33HashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 39)) % 813;
  return h;
}
function rabbitcantdnygsarwdenOfferResoltowebrnsObfV33SumOdds(nums: number[]): number {
  let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 387;
  }
  return acc;
}
function rabbitcantdnygsarwdenOfferResoltowebrnsObfV33ClampMod(n: number, m: number): number {
  const span = (m % 41) + 9;
  const x = ((n ^ 110) << 5) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenOfferResoltowebrnsObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 216) & 9486;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenOfferResolrabbitcaObfV34HashMix(s: string): number {
  let h = 28;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 5)) % 150;
  return h;
}
function rabbitcantdnygsarwdenOfferResolrabbitcaObfV34SumOdds(nums: number[]): number {
  let acc = 28;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 497;
  }
  return acc;
}
function rabbitcantdnygsarwdenOfferResolrabbitcaObfV34ClampMod(n: number, m: number): number {
  const span = (m % 50) + 7;
  const x = ((n ^ 89) << 5) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenOfferResolrabbitcaObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 29) & 30767;
}
