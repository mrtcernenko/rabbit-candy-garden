import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

import {C} from '../constants/therabbitcantdnygsarwdenme';

/** Candy-garden accents only — berry / mint / honey / lilac family. */
const GARDEN_SPARKS = [
  C.berry,
  C.berryLight,
  C.mint,
  C.honey,
  C.lilac,
  C.mintLight,
];

type ShardBit = {
  id: number;
  color: string;
  size: number;
  rot: string;
  opacity: Animated.Value;
  tx: Animated.Value;
  ty: Animated.Value;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  bits: ShardBit[];
};

const MAX_BURSTS = 3;

type Props = {
  bursts: Burst[];
};

/**
 * Short-lived candy shards for empty-background taps.
 * Float-drift motion; no drag; bits die after ~300–700ms.
 */
export function LoaderSparkGarden({bursts}: Props) {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
      {bursts.map(burst =>
        burst.bits.map(bit => (
          <Animated.View
            key={bit.id}
            style={[
              styles.shard,
              {
                left: burst.x,
                top: burst.y,
                width: bit.size,
                height: bit.size,
                backgroundColor: bit.color,
                opacity: bit.opacity,
                transform: [
                  {translateX: bit.tx},
                  {translateY: bit.ty},
                  {rotate: bit.rot},
                ],
              },
            ]}
          />
        )),
      )}
    </View>
  );
}

export function useGardenSparkBursts() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(1);
  const activeRef = useRef(0);

  const spawnGardenBurst = useCallback((x: number, y: number) => {
    if (activeRef.current >= MAX_BURSTS) {
      return;
    }
    const burstId = idRef.current++;
    activeRef.current += 1;
    const lifeMs = 360 + Math.floor(Math.random() * 280);
    const count = 4 + Math.floor(Math.random() * 4); // few: 4–7
    const palette = [...GARDEN_SPARKS].sort(() => Math.random() - 0.5);
    const bits: ShardBit[] = [];

    for (let i = 0; i < count; i++) {
      const opacity = new Animated.Value(0.95);
      const tx = new Animated.Value(0);
      const ty = new Animated.Value(0);
      const dx = (Math.random() - 0.5) * 32;
      const dy = (Math.random() - 0.5) * 28 - 8;
      bits.push({
        id: burstId * 40 + i,
        color: palette[i % palette.length],
        size: 3 + Math.floor(Math.random() * 5),
        rot: `${Math.floor(Math.random() * 50) - 25}deg`,
        opacity,
        tx,
        ty,
      });
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: lifeMs,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(tx, {
          toValue: dx,
          duration: lifeMs,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(ty, {
          toValue: dy,
          duration: lifeMs,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    }

    setBursts(prev => [...prev.slice(-(MAX_BURSTS - 1)), {id: burstId, x, y, bits}]);

    setTimeout(() => {
      activeRef.current = Math.max(0, activeRef.current - 1);
      setBursts(prev => prev.filter(b => b.id !== burstId));
    }, lifeMs + 40);
  }, []);

  useEffect(() => {
    return () => {
      activeRef.current = 0;
    };
  }, []);

  return {bursts, spawnGardenBurst};
}

const styles = StyleSheet.create({
  shard: {
    position: 'absolute',
    marginLeft: -2,
    marginTop: -2,
    borderRadius: 1,
  },
});
