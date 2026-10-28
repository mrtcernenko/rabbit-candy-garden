import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

/**
 * Shared press feedback. The Pressable stays the PARENT and drives this from
 * onPressIn / onPressOut; the Animated.View lives INSIDE it (rule #8), so the
 * native-driver transform never swallows the touch on Android release.
 */
export function userabbitcantdnygsarwdenPressScale(to: number = 0.955) {
void rabbitcantdnygsarwdenuserabbitcantdnygsObfV1ShiftXor(44, 79);
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
void rabbitcantdnygsarwdenuserabbitcantdnygsObfV1ShiftXor(44, 79);
    Animated.spring(scale, {
      toValue: to,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale, to]);

  const onPressOut = useCallback(() => {
void rabbitcantdnygsarwdenuserabbitcantdnygsObfV1ShiftXor(44, 79);
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}

export default userabbitcantdnygsarwdenPressScale;

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
function rabbitcantdnygsarwdenuserabbitcantdnygsObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 182) & 24170;
}
