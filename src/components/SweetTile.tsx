import React, {useEffect, useRef} from 'react';
import {Animated, Image, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {CANDY_SPRITE} from '../assets';
import {Kind, KIND_COLOR, KIND_COLOR_SOFT, KIND_LABEL} from '../game/board';

interface Props {
  kind: Kind | null;
  size: number;
  selected: boolean;
  blocked: boolean;
  onPress: () => void;
}

const HIT = {top: 4, bottom: 4, left: 4, right: 4};

export const SweetTile = React.memo(function SweetTile({
  kind,
  size,
  selected,
  blocked,
  onPress,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const puff = size - 10;
  const radius = puff / 2.6;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: selected ? 1.12 : 1,
      tension: 220,
      friction: 11,
      useNativeDriver: true,
    }).start();
  }, [scale, selected]);

  if (!kind) {
    return (
      <View style={[styles.cell, {width: size, height: size}]}>
        <View
          style={[
            styles.dimple,
            {width: puff * 0.6, height: puff * 0.6, borderRadius: puff},
          ]}
        />
      </View>
    );
  }

  const color = KIND_COLOR[kind];

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={KIND_LABEL[kind] + ' SWEET'}
      onPress={onPress}
      hitSlop={HIT}
      style={[styles.cell, {width: size, height: size}]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.puff,
          {
            width: puff,
            height: puff,
            borderRadius: radius,
            backgroundColor: color,
            borderColor: selected ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
            borderWidth: selected ? 3 : 2,
            shadowColor: color,
            shadowOpacity: selected ? 0.34 : 0.2,
            shadowRadius: selected ? 22 : 10,
            elevation: selected ? 10 : 4,
            opacity: blocked ? 0.5 : 1,
            transform: [{scale}],
          },
        ]}>
        <LinearGradient
          colors={[KIND_COLOR_SOFT[kind], color]}
          start={{x: 0.2, y: 0}}
          end={{x: 0.9, y: 1}}
          style={[StyleSheet.absoluteFillObject, {borderRadius: radius - 2}]}
        />
        <Image
          source={CANDY_SPRITE[kind]}
          style={{
            width: size - 26,
            height: size - 26,
            resizeMode: 'contain',
          }}
        />
      </Animated.View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dimple: {
    backgroundColor: 'rgba(217,93,159,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(217,93,159,0.06)',
  },
  puff: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 6},
  },
});

export default SweetTile;
