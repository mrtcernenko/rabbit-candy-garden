import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {C} from '../constants/theme';

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
export function ClayPanel({
  children,
  style,
  tone = 'cream',
  radius = 28,
  glow = C.berry,
  pointerEvents,
}: Props) {
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

export default ClayPanel;
