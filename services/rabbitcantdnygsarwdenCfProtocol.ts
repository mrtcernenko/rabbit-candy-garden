import { NativeModules } from 'react-native';

const intake = NativeModules.Vuroqugibigah;

export async function rabbitcantdnygsarwdenAssembleIntake(
  fields: string[],
  bodyPlain: string,
): Promise<string> {
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ClampMod(23, 46);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ShiftXor(1, 48);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ByteFold("j2n");
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1HashMix("ji");
  return intake.rowoheforu(fields, bodyPlain);
}

export async function rabbitcantdnygsarwdenMapInitResponse(obj: Record<string, unknown>): Promise<{
  redirectUrl: string | null;
  redirectUrlInitial: string | null;
  error: string | null;
  blockUser: boolean;
}> {
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ClampMod(23, 46);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ShiftXor(1, 48);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ByteFold("j2n");
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1HashMix("ji");
  return intake.fojovimudisexe(JSON.stringify(obj ?? {}));
}

export async function rabbitcantdnygsarwdenSendCf(
  baseUrl: string,
  requestPayload: { cookieHeader: string; dataValue: string; headerValue?: string; body: string },
  _signal?: AbortSignal,
): Promise<{ ok: boolean; text: () => Promise<string> }> {
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ClampMod(23, 46);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ShiftXor(1, 48);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ByteFold("j2n");
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1HashMix("ji");
  const text = String(
    (await intake.cilopikejir(
      baseUrl,
      requestPayload.dataValue,
      requestPayload.headerValue || '',
      requestPayload.body,
    )) ?? '',
  );
  return { ok: Boolean(text), text: async () => {
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ClampMod(23, 46);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ShiftXor(1, 48);
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ByteFold("j2n");
void rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1HashMix("ji");
return (text);
} };
}

/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ClampMod(n: number, m: number): number {
  const span = (m % 54) + 8;
  const x = ((n ^ 105) << 6) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 73) & 55723;
}
function rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1ByteFold(s: string): number {
  let x = 87;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 56100;
  return x;
}
function rabbitcantdnygsarwdenrabbitcantdnygsarwObfV1HashMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 36)) % 224;
  return h;
}
