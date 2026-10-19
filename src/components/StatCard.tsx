import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {C} from '../constants/theme';

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
export function StatCard({value, label, color, style, compact = false}: Props) {
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

export default StatCard;
