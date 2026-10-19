import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Heart} from 'lucide-react-native';

import {C} from '../constants/theme';

interface Props {
  hearts: number;
  max?: number;
}

function Pip({alive}: {alive: boolean}) {
  const scale = useRef(new Animated.Value(1)).current;
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (alive) {
      return;
    }
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.35,
        duration: 110,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 110,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        tension: 220,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, [alive, scale]);

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <Heart
        size={18}
        color={alive ? C.berry : '#E2D2DC'}
        fill={alive ? C.berry : '#E2D2DC'}
        strokeWidth={2}
      />
    </Animated.View>
  );
}

export function HeartsRow({hearts, max = 3}: Props) {
  return (
    <View
      style={styles.row}
      accessible
      accessibilityLabel={'HEARTS ' + hearts + ' OF ' + max}>
      {Array.from({length: max}).map((_, i) => (
        <Pip key={i} alive={i < hearts} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});

export default HeartsRow;
