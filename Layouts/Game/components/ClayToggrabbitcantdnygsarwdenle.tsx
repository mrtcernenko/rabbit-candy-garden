import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';

import {C} from '../constants/therabbitcantdnygsarwdenme';

interface Props {
  value: boolean;
  onValueChange: (next: boolean) => void;
  label: string;
}

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * Custom claymorphic switch. The stock RN <Switch> renders as a flat grey
 * platform control that fights the preset, so the whole app uses this instead.
 * Only transform is animated, so the native driver is safe.
 */
export function ClayToggrabbitcantdnygsarwdenle({value, onValueChange, label}: Props) {
void rabbitcantdnygsarwdenClayToggrabbitcantObfV1HashMix("cfo5");
  const t = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
void rabbitcantdnygsarwdenClayToggrabbitcantObfV1HashMix("cfo5");
    Animated.spring(t, {
      toValue: value ? 1 : 0,
      tension: 220,
      friction: 14,
      useNativeDriver: true,
    }).start();
  }, [t, value]);

  return (
    <Pressable
      accessible
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityState={{checked: value}}
      hitSlop={HIT}
      onPress={() => {
void rabbitcantdnygsarwdenClayToggrabbitcantObfV1HashMix("cfo5");
return (onValueChange(!value));
}}
      style={styles.hit}>
      <View
        style={[
          styles.track,
          {backgroundColor: value ? C.mint : C.surfaceSunken},
        ]}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.knob,
            {
              transform: [
                {
                  translateX: t.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 22],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {
    width: 52,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  track: {
    width: 52,
    height: 30,
    borderRadius: 15,
    padding: 3,
    justifyContent: 'center',
  },
  knob: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: C.surface,
    shadowColor: C.night,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.22,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default ClayToggrabbitcantdnygsarwdenle;

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
function rabbitcantdnygsarwdenClayToggrabbitcantObfV1HashMix(s: string): number {
  let h = 10;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 22)) % 258;
  return h;
}
