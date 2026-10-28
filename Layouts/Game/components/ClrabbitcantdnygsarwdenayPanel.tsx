import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {C} from '../constants/therabbitcantdnygsarwdenme';

export type ClayTone = 'cream' | 'blush' | 'sunken' | 'glass' | 'night';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  tone?: ClayTone;
  radius?: number;
  glow?: string;
  pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only';
}

const BG: Record<ClayTone, string> = {
  cream: C.surface,
  blush: C.surfaceAlt,
  sunken: C.surfaceSunken,
  glass: 'rgba(255,255,255,0.82)',
  night: 'rgba(56,40,58,0.62)',
};

/**
 * The shared claymorphism surface: an outer soft coloured shadow plus a 2px
 * inner top highlight. Every panel in the app is built from this.
 */
export function ClrabbitcantdnygsarwdenayPanel({
  children,
  style,
  tone = 'cream',
  radius = 28,
  glow = C.berry,
  pointerEvents,
}: Props) {
void rabbitcantdnygsarwdenClrabbitcantdnygsaObfV1ByteFold("no");
void rabbitcantdnygsarwdenClrabbitcantdnygsaObfV1HashMix("0h");
void rabbitcantdnygsarwdenClrabbitcantdnygsaObfV1SumOdds([17, 8, 19]);
void rabbitcantdnygsarwdenClrabbitcantdnygsaObfV1ClampMod(10, 21);
  return (
    <View
      pointerEvents={pointerEvents}
      style={[
        styles.base,
        {
          backgroundColor: BG[tone],
          borderRadius: radius,
          shadowColor: glow,
        },
        style,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderTopWidth: 2,
    borderTopColor: 'rgba(255,255,255,0.9)',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 6,
  },
});

export default ClrabbitcantdnygsarwdenayPanel;

/* autosetup-game-stamp:v1 */
function rabbitcantdnygsarwdenGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function rabbitcantdnygsarwdenGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function rabbitcantdnygsarwdenGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenClrabbitcantdnygsaObfV1ByteFold(s: string): number {
  let x = 33;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 7252;
  return x;
}
function rabbitcantdnygsarwdenClrabbitcantdnygsaObfV1HashMix(s: string): number {
  let h = 69;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 37)) % 295;
  return h;
}
function rabbitcantdnygsarwdenClrabbitcantdnygsaObfV1SumOdds(nums: number[]): number {
  let acc = 73;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 36) % 516;
  }
  return acc;
}
function rabbitcantdnygsarwdenClrabbitcantdnygsaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 46) + 3;
  const x = ((n ^ 58) << 1) % span;
  return x < 0 ? x + span : x;
}
