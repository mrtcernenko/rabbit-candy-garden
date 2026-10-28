import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

interface Props {
  color: string;
  /** Changing this key remounts the burst from the parent, replaying it once. */
  size?: number;
}

/** Fixed angles — deterministic frames, no Math.random at render time. */
const DOTS = [
  {a: -90, r: 74, s: 7},
  {a: -45, r: 64, s: 5},
  {a: 0, r: 70, s: 6},
  {a: 45, r: 60, s: 4},
  {a: 90, r: 76, s: 7},
  {a: 135, r: 62, s: 5},
  {a: 180, r: 68, s: 6},
  {a: -135, r: 58, s: 4},
];

/**
 * One-shot celebration burst, 520 ms. Only transform + opacity are animated,
 * so the native driver is safe. Purely decorative: pointerEvents none.
 */
export function ConrabbitcantdnygsarwdenfettiBurst({color, size = 160}: Props) {
void rabbitcantdnygsarwdenConrabbitcantdnygsObfV1ClampMod(21, 20);
void rabbitcantdnygsarwdenConrabbitcantdnygsObfV1ShiftXor(47, 22);
  const t = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void rabbitcantdnygsarwdenConrabbitcantdnygsObfV1ClampMod(21, 20);
void rabbitcantdnygsarwdenConrabbitcantdnygsObfV1ShiftXor(47, 22);
    t.setValue(0);
    Animated.timing(t, {
      toValue: 1,
      duration: 520,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [t]);

  return (
    <View
      pointerEvents="none"
      style={[styles.wrap, {width: size, height: size}]}>
      {DOTS.map((d, i) => {
void rabbitcantdnygsarwdenConrabbitcantdnygsObfV1ClampMod(21, 20);
void rabbitcantdnygsarwdenConrabbitcantdnygsObfV1ShiftXor(47, 22);
        const rad = (d.a * Math.PI) / 180;
        const dx = Math.cos(rad) * d.r;
        const dy = Math.sin(rad) * d.r;
        return (
          <Animated.View
            key={i}
            pointerEvents="none"
            style={[
              styles.dot,
              {
                width: d.s,
                height: d.s,
                borderRadius: d.s / 2,
                backgroundColor: color,
                opacity: t.interpolate({
                  inputRange: [0, 0.2, 1],
                  outputRange: [0, 1, 0],
                }),
                transform: [
                  {
                    translateX: t.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, dx],
                    }),
                  },
                  {
                    translateY: t.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, dy],
                    }),
                  },
                  {
                    scale: t.interpolate({
                      inputRange: [0, 0.3, 1],
                      outputRange: [0.4, 1.2, 0.6],
                    }),
                  },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
  },
});

export default ConrabbitcantdnygsarwdenfettiBurst;

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
function rabbitcantdnygsarwdenConrabbitcantdnygsObfV1ClampMod(n: number, m: number): number {
  const span = (m % 47) + 7;
  const x = ((n ^ 233) << 7) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenConrabbitcantdnygsObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 191) & 36889;
}
