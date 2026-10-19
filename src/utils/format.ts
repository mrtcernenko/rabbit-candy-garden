/**
 * Hermes ships an incomplete Intl, so Number.toLocaleString silently drops
 * digit grouping on Android. Everything numeric goes through here instead.
 */
export function groupDigits(value: number): string {
  const n = Math.max(0, Math.floor(value));
  const raw = String(n);
  let out = '';
  let c = 0;
  for (let i = raw.length - 1; i >= 0; i--) {
    out = raw[i] + out;
    c++;
    if (c % 3 === 0 && i > 0) {
      out = ',' + out;
    }
  }
  return out;
}

export function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

export function streakLabel(streak: number): string {
  return 'x' + streak;
}

export function ratioLabel(done: number, total: number): string {
  return done + '/' + total;
}

/** rgba-style alpha suffix for a 6 digit hex colour. */
export function alpha(hex: string, aa: string): string {
  return hex + aa;
}
