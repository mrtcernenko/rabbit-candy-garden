import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {C} from '../constants/therabbitcantdnygsarwdenme';

interface Props {
  Icon: React.ComponentType<any>;
  value: string;
  label: string;
  color: string;
  style?: StyleProp<ViewStyle>;
}

/**
 * Compact pill for the menu sheet. Every chip has the same 44x44 icon well,
 * the same padding and the same radius — only the colour, the glyph and the
 * numbers differ, so a row of them reads as one set.
 */
export function SrabbitcantdnygsarwdentatChip({Icon, value, label, color, style}: Props) {
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds([21, 20, 7]);
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(62, 57);
  return (
    <View style={[styles.chip, {borderColor: color + '55'}, style]}>
      <View style={[styles.iconWrap, {backgroundColor: color + '22'}]}>
        <Icon size={22} color={color} strokeWidth={2.4} />
      </View>
      <View style={styles.texts}>
        <Text numberOfLines={1} style={[styles.value, {color}]}>
          {value}
        </Text>
        <Text numberOfLines={1} style={styles.label}>
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 22,
    borderWidth: 1.5,
    backgroundColor: 'rgba(255,255,255,0.86)',
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    flexShrink: 1,
  },
  value: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  label: {
    marginTop: 1,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: C.textMuted,
  },
});

export default SrabbitcantdnygsarwdentatChip;

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
function rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds(nums: number[]): number {
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 542;
  }
  return acc;
}
function rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(n: number, m: number): number {
  const span = (m % 67) + 2;
  const x = ((n ^ 20) << 7) % span;
  return x < 0 ? x + span : x;
}
