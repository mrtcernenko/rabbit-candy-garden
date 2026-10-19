import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {C} from '../constants/theme';

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
export function StatChip({Icon, value, label, color, style}: Props) {
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

export default StatChip;
