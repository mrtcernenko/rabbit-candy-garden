import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

/**
 * Shared press feedback. The Pressable stays the PARENT and drives this from
 * onPressIn / onPressOut; the Animated.View lives INSIDE it (rule #8), so the
 * native-driver transform never swallows the touch on Android release.
 */
export function usePressScale(to: number = 0.955) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: to,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale, to]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}

export default usePressScale;
