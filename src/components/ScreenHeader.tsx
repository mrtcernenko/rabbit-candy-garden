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
import {ChevronLeft} from 'lucide-react-native';

import {C} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

interface Props {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  backLabel?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  tone?: 'light' | 'dark';
  style?: StyleProp<ViewStyle>;
}

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * The single header used by every screen (rule: cross-screen consistency).
 * paddingTop 44 keeps the content clear of the status bar (rule #6).
 */
export function ScreenHeader({
  title,
  subtitle,
  onBack,
  backLabel = 'BACK',
  leftSlot,
  rightSlot,
  tone = 'light',
  style,
}: Props) {
  const {scale, onPressIn, onPressOut} = usePressScale(0.9);
  const dark = tone === 'dark';

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: dark ? 'rgba(42,27,51,0.42)' : 'rgba(255,255,255,0.72)',
          borderBottomColor: dark
            ? 'rgba(255,242,247,0.16)'
            : 'rgba(217,93,159,0.16)',
        },
        style,
      ]}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            accessible
            accessibilityRole="button"
            accessibilityLabel={backLabel}
            onPress={onBack}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            hitSlop={HIT}
            style={styles.roundBtn}>
            <Animated.View
              pointerEvents="box-none"
              style={[
                styles.roundInner,
                {
                  backgroundColor: dark
                    ? 'rgba(255,242,247,0.14)'
                    : 'rgba(255,255,255,0.92)',
                  transform: [{scale}],
                },
              ]}>
              <ChevronLeft size={24} color={C.berry} strokeWidth={2.6} />
            </Animated.View>
          </Pressable>
        ) : (
          leftSlot ?? <View style={styles.spacer} />
        )}
      </View>

      <View style={styles.center} pointerEvents="none">
        {title ? (
          <Text
            numberOfLines={1}
            style={[styles.title, {color: dark ? C.onDark : C.text}]}>
            {title}
          </Text>
        ) : null}
        {subtitle ? (
          <Text
            numberOfLines={1}
            style={[
              styles.subtitle,
              {color: dark ? 'rgba(255,242,247,0.7)' : C.textMuted},
            ]}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.sideRight}>
        {rightSlot ?? <View style={styles.spacer} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 44,
    height: 116,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
  },
  side: {
    width: 104,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideRight: {
    width: 104,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  spacer: {
    width: 44,
    height: 44,
  },
  roundBtn: {
    width: 44,
    height: 44,
  },
  roundInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(217,93,159,0.22)',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginTop: 2,
  },
});

export default ScreenHeader;
