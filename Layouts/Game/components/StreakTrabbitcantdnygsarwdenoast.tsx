import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

import {C} from '../constants/therabbitcantdnygsarwdenme';

interface Props {
  streak: number;
}

/**
 * Mint streak banner. Mounted only while `streak > 0` (the parent clears it on
 * a timer), so the spring runs once per appearance and then settles — no
 * perpetual loop that could keep the window non-idle.
 */
export function StreakTrabbitcantdnygsarwdenoast({streak}: Props) {
void rabbitcantdnygsarwdenStreakTrabbitcantdObfV1HashMix("cd");
  const t = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void rabbitcantdnygsarwdenStreakTrabbitcantdObfV1HashMix("cd");
    t.setValue(0);
    Animated.spring(t, {
      toValue: 1,
      tension: 120,
      friction: 9,
      useNativeDriver: true,
    }).start();
  }, [t, streak]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.pill,
        {
          opacity: t,
          transform: [
            {
              translateY: t.interpolate({
                inputRange: [0, 1],
                outputRange: [14, 0],
              }),
            },
            {
              scale: t.interpolate({
                inputRange: [0, 1],
                outputRange: [0.82, 1],
              }),
            },
          ],
        },
      ]}>
      <Text style={styles.text}>STREAK x{streak}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: C.mint,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.8)',
    shadowColor: C.mint,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
  },
});

export default StreakTrabbitcantdnygsarwdenoast;

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
function rabbitcantdnygsarwdenStreakTrabbitcantdObfV1HashMix(s: string): number {
  let h = 76;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 39)) % 765;
  return h;
}
