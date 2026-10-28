import React from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C, G} from '../constants/therabbitcantdnygsarwdenme';
import {userabbitcantdnygsarwdenPressScale} from '../hooks/userabbitcantdnygsarwdenPressScale';
// autosetup-split-begin
import { rabbitcantdnygsarwdenGameMixSeed, rabbitcantdnygsarwdenGameFoldRange, rabbitcantdnygsarwdenGameClampSpan } from './ClayButtrabbitcantdnygsarwdenonPart01';
// autosetup-split-end

export type ButtonVariant = 'primary' | 'secondary' | 'mint' | 'disabled';

interface Props {
  label: string;
  onPress: () => void;
  Icon?: React.ComponentType<any>;
  variant?: ButtonVariant;
  disabled?: boolean;
  height?: number;
  fontSize?: number;
  style?: StyleProp<ViewStyle>;
  /** 0..1 — draws a thin charge bar along the bottom edge of the button. */
  progress?: number;
  /** Numeric width of the button, needed for the pixel-width progress bar. */
  width?: number;
  accessibilityLabel?: string;
}

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * Pressable is the PARENT and drives the spring; the Animated.View lives
 * INSIDE it (rule #8). Icons are always exactly 24x24 with a 24 lineHeight
 * label and a uniform gap of 10 (rule #20).
 */
export function ClayButtrabbitcantdnygsarwdenon({
  label,
  onPress,
  Icon,
  variant = 'primary',
  disabled = false,
  height = 60,
  fontSize = 17,
  style,
  progress,
  width,
  accessibilityLabel,
}: Props) {
void rabbitcantdnygsarwdenClayButtrabbitcantObfV1ByteFold("2h");
void rabbitcantdnygsarwdenClayButtrabbitcantObfV1HashMix("p8h63c");
void rabbitcantdnygsarwdenClayButtrabbitcantObfV1SumOdds([16, 35, 34]);
  const {scale, onPressIn, onPressOut} = userabbitcantdnygsarwdenPressScale();
  const tone: ButtonVariant = disabled ? 'disabled' : variant;

  const gradient =
    tone === 'primary' ? G.primary : tone === 'mint' ? G.mint : null;

  const fg =
    tone === 'primary' || tone === 'mint'
      ? C.surface
      : tone === 'disabled'
      ? '#B6A5B8'
      : C.berry;

  const flat =
    tone === 'secondary'
      ? C.tintBerry
      : tone === 'disabled'
      ? C.surfaceSunken
      : 'transparent';

  const glow = tone === 'mint' ? C.mint : C.berry;
  const barW = width ? Math.max(0, Math.min(1, progress ?? 0)) * (width - 24) : 0;

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{disabled}}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={HIT}
      style={[{width: '100%', height}, style]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.inner,
          {
            height,
            backgroundColor: flat,
            borderRadius: height >= 56 ? 24 : 18,
            shadowColor: glow,
            transform: [{scale}],
            borderWidth: tone === 'secondary' ? 1.5 : 0,
            borderColor: C.borderSoft,
            shadowOpacity: tone === 'disabled' ? 0 : 0.4,
            elevation: tone === 'disabled' ? 0 : 7,
          },
        ]}>
        {gradient ? (
          <LinearGradient
            colors={gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[
              StyleSheet.absoluteFillObject,
              {borderRadius: height >= 56 ? 24 : 18},
            ]}
          />
        ) : null}

        <View style={styles.row}>
          {Icon ? <Icon size={24} color={fg} strokeWidth={2.4} /> : null}
          <Text
            numberOfLines={1}
            style={[styles.label, {color: fg, fontSize}]}>
            {label}
          </Text>
        </View>

        {progress !== undefined && width ? (
          <View style={[styles.track, {width: width - 24}]}>
            <View
              style={[
                styles.fill,
                {width: barW, backgroundColor: 'rgba(255,255,255,0.92)'},
              ]}
            />
          </View>
        ) : null}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 16,
    borderTopWidth: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontWeight: '900',
    letterSpacing: 1.6,
    lineHeight: 24,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  track: {
    position: 'absolute',
    bottom: 7,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.28)',
    overflow: 'hidden',
  },
  fill: {
    height: 5,
    borderRadius: 3,
  },
});

export default ClayButtrabbitcantdnygsarwdenon;

/* autosetup-game-stamp:v1 */
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenClayButtrabbitcantObfV1ByteFold(s: string): number {
  let x = 38;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) & 55218;
  return x;
}
function rabbitcantdnygsarwdenClayButtrabbitcantObfV1HashMix(s: string): number {
  let h = 18;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 40)) % 364;
  return h;
}
function rabbitcantdnygsarwdenClayButtrabbitcantObfV1SumOdds(nums: number[]): number {
  let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 896;
  }
  return acc;
}
