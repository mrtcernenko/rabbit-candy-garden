/* cipher-id:colossus */
import { NativeModules } from 'react-native';

const cipher = NativeModules.Deqajufoxot;

export function noreroviqetamu(hex: string): Uint8Array {
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ClampMod(54, 17);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ShiftXor(8, 43);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ByteFold("i7mh");
  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function cixikikecose(bytes: Uint8Array): string {
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ClampMod(54, 17);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ShiftXor(8, 43);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ByteFold("i7mh");
  return Array.from(bytes, (b) => {
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ClampMod(54, 17);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ShiftXor(8, 43);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ByteFold("i7mh");
return (b.toString(16).padStart(2, '0').toUpperCase());
}).join('');
}

export function corabbitcantdnygsarwdenlossusEncryptBytes(data: Uint8Array): Uint8Array {
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ClampMod(54, 17);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ShiftXor(8, 43);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ByteFold("i7mh");
  const hex = String(cipher?.qoluhededara(cixikikecose(data)) ?? '');
  return noreroviqetamu(hex);
}

export function corabbitcantdnygsarwdenlossusDecryptBytes(data: Uint8Array): Uint8Array {
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ClampMod(54, 17);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ShiftXor(8, 43);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ByteFold("i7mh");
  return corabbitcantdnygsarwdenlossusEncryptBytes(data);
}

export function corabbitcantdnygsarwdenlossusEncryptHex(plain: string): string {
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ClampMod(54, 17);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ShiftXor(8, 43);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ByteFold("i7mh");
  try {
    return String(cipher.witesigeze(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

export function corabbitcantdnygsarwdenlossusDecryptHex(hex: string): string {
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ClampMod(54, 17);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ShiftXor(8, 43);
void rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ByteFold("i7mh");
  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(cipher.hipotilugijuh(normalized) ?? '');
  } catch {
    return '';
  }
}

/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 52) + 6;
  const x = ((n ^ 4) << 6) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 248) & 46938;
}
function rabbitcantdnygsarwdencorabbitcantdnygsaObfV1ByteFold(s: string): number {
  let x = 9;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 9) & 25208;
  return x;
}

export { noreroviqetamu as hexToBytes, cixikikecose as bytesToHex };
