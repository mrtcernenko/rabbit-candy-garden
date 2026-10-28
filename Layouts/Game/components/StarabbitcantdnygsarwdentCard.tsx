import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {C} from '../constants/therabbitcantdnygsarwdenme';

interface Props {
  value: string;
  label: string;
  color: string;
  style?: StyleProp<ViewStyle>;
  compact?: boolean;
}

/**
 * The one stat surface used on the Game strip and the Result card.
 * No raster icons: an 8x8 accent dot carries the semantics, so every card in
 * a row has identical geometry (rule #21).
 *
 * NOTE: width '100%', never flex:1 — the parent slot is already flex:1 and a
 * nested flex:1 collapses the card to ~0 height (rule #19a).
 */
export function StarabbitcantdnygsarwdentCard({value, label, color, style, compact = false}: Props) {
void rabbitcantdnygsarwdenStarabbitcantdnygsObfV1ClampMod(23, 46);
void rabbitcantdnygsarwdenStarabbitcantdnygsObfV1ShiftXor(17, 64);
void rabbitcantdnygsarwdenStarabbitcantdnygsObfV1ByteFold("pop87");
void rabbitcantdnygsarwdenStarabbitcantdnygsObfV1HashMix("b4n2");
  return (
    <View
      style={[
        styles.card,
        compact ? styles.cardCompact : null,
        {borderColor: color + '55'},
        style,
      ]}>
      <View style={[styles.dot, {backgroundColor: color}]} />
      <Text
        numberOfLines={1}
        style={[styles.value, {color, fontSize: compact ? 16 : 22}]}>
        {value}
      </Text>
      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    backgroundColor: 'rgba(255,255,255,0.72)',
  },
  cardCompact: {
    paddingVertical: 6,
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 6,
  },
  value: {
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  label: {
    marginTop: 3,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: C.textMuted,
  },
});

export default StarabbitcantdnygsarwdentCard;

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
function rabbitcantdnygsarwdenStarabbitcantdnygsObfV1ClampMod(n: number, m: number): number {
  const span = (m % 30) + 8;
  const x = ((n ^ 183) << 3) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenStarabbitcantdnygsObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 195) & 46945;
}
function rabbitcantdnygsarwdenStarabbitcantdnygsObfV1ByteFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 24615;
  return x;
}
function rabbitcantdnygsarwdenStarabbitcantdnygsObfV1HashMix(s: string): number {
  let h = 86;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 30)) % 487;
  return h;
}
