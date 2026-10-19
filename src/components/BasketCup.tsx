import React, {useEffect, useRef} from 'react';
import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {CANDY_SPRITE} from '../assets';
import {BASKET_H, BASKET_W} from '../constants/config';
import {C} from '../constants/theme';
import {Kind, KIND_COLOR, KIND_LABEL} from '../game/board';

interface Props {
  kind: Kind;
  count: number;
  capacity: number;
  highlighted: boolean;
  shaking: boolean;
  onPress: () => void;
}

const HIT = {top: 8, bottom: 8, left: 6, right: 6};

export const BasketCup = React.memo(function BasketCup({
  kind,
  count,
  capacity,
  highlighted,
  shaking,
  onPress,
}: Props) {
  const pulse = useRef(new Animated.Value(1)).current;
  const shake = useRef(new Animated.Value(0)).current;
  const color = KIND_COLOR[kind];

  useEffect(() => {
    let loop: Animated.CompositeAnimation | null = null;
    if (highlighted) {
      // Bounded on purpose: a perpetual loop keeps the window from reaching
      // idle, which breaks the UI-automation dump this screen is tapped from.
      loop = Animated.loop(
        Animated.sequence([
          Animated.timing(pulse, {
            toValue: 1.05,
            duration: 420,
            useNativeDriver: true,
          }),
          Animated.timing(pulse, {
            toValue: 1,
            duration: 420,
            useNativeDriver: true,
          }),
        ]),
        {iterations: 4},
      );
      loop.start();
    } else {
      pulse.setValue(1);
    }
    return () => {
      if (loop) {
        loop.stop();
      }
    };
  }, [highlighted, pulse]);

  useEffect(() => {
    if (!shaking) {
      return;
    }
    Animated.sequence([
      Animated.timing(shake, {toValue: 1, duration: 50, useNativeDriver: true}),
      Animated.timing(shake, {toValue: -1, duration: 50, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 1, duration: 50, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 0, duration: 50, useNativeDriver: true}),
    ]).start();
  }, [shaking, shake]);

  const translateX = shake.interpolate({
    inputRange: [-1, 1],
    outputRange: [-6, 6],
  });

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={KIND_LABEL[kind] + ' BASKET'}
      onPress={onPress}
      hitSlop={HIT}
      style={{width: BASKET_W, height: BASKET_H}}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.cup,
          {
            width: BASKET_W,
            height: BASKET_H,
            borderColor: color,
            shadowColor: color,
            transform: [{scale: pulse}, {translateX}],
          },
        ]}>
        <View style={[styles.rim, {backgroundColor: color}]} />
        <View style={[styles.well, {backgroundColor: color + '22'}]}>
          <Image source={CANDY_SPRITE[kind]} style={styles.art} />
        </View>
        <Text style={[styles.count, {color: C.text}]}>
          {count}/{capacity}
        </Text>
        <Text numberOfLines={1} style={styles.name}>
          {KIND_LABEL[kind]}
        </Text>
      </Animated.View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  cup: {
    backgroundColor: C.surface,
    borderWidth: 3,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.26,
    shadowRadius: 12,
    elevation: 5,
  },
  rim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    opacity: 0.35,
  },
  well: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  art: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  count: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  name: {
    marginTop: 1,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1,
    color: C.textMuted,
  },
});

export default BasketCup;
