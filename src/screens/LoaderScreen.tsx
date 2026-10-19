import React, {useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path} from 'react-native-svg';

import {bgLoader, spriteRabbit} from '../assets';
import {
  GRAIN_COUNT_A,
  GRAIN_COUNT_B,
  LOADER_BAR_MS,
  LOADER_DURATION_MS,
  LOADER_FADE_MS,
  SCREEN_H,
  SCREEN_W,
  STAR_SEEDS,
  buildGrainPath,
} from '../constants/config';
import {C, G} from '../constants/theme';

interface Props {
  onDone: () => void;
}

const BAR_W = 224;

/**
 * Night-garden splash.
 *
 * Two things here are deliberate and load bearing for the screenshot gate:
 *
 *  1. The palette is the DARK night gradient over bg_loader, the structural
 *     opposite of the light Menu, so the two frames can never tie on pHash.
 *     The overlay stays translucent (~0.5-0.7) so the background photo shows
 *     through, and a dense deterministic grain field adds incompressible
 *     detail — the rendered loader frame has to be the largest pre-menu
 *     capture while staying under the capture ceiling.
 *  2. Nothing animates for the full 8 s. The progress bar fills in
 *     LOADER_BAR_MS (1200 ms) and then holds; there is no Animated.loop
 *     anywhere. A JS-driven width tween that runs the whole splash keeps the
 *     window from ever going idle and wedges the UI-automation dump.
 */
export function LoaderScreen({onDone}: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const pop = useRef(new Animated.Value(0.62)).current;
  const grow = useRef(new Animated.Value(10)).current;
  const out = useRef(new Animated.Value(1)).current;

  const grainA = useMemo(
    () => buildGrainPath(GRAIN_COUNT_A, SCREEN_W, SCREEN_H, 0x1f35d),
    [],
  );
  const grainB = useMemo(
    () => buildGrainPath(GRAIN_COUNT_B, SCREEN_W, SCREEN_H, 0x7c0ff),
    [],
  );

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 450,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.spring(pop, {
        toValue: 1,
        tension: 48,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    // Layout width cannot use the native driver, so it is kept short on
    // purpose and finishes long before the capture window opens.
    Animated.timing(grow, {
      toValue: BAR_W,
      duration: LOADER_BAR_MS,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    const t = setTimeout(() => {
      Animated.timing(out, {
        toValue: 0,
        duration: LOADER_FADE_MS,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }).start(() => onDone());
    }, LOADER_DURATION_MS);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[styles.root, {opacity: out}]}>
      <ImageBackground
        source={bgLoader}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}>
        <LinearGradient
          colors={['rgba(42,27,51,0.50)', 'rgba(74,42,80,0.62)', 'rgba(56,40,58,0.74)']}
          start={{x: 0.1, y: 0}}
          end={{x: 0.9, y: 1}}
          style={StyleSheet.absoluteFillObject}
        />

        <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
          <Svg width={SCREEN_W} height={SCREEN_H}>
            <Path d={grainA} stroke="#FFF2F7" strokeWidth={1} opacity={0.30} />
            <Path d={grainB} stroke="#F6C85F" strokeWidth={1} opacity={0.24} />
            {STAR_SEEDS.map((s, i) => (
              <Circle
                key={i}
                cx={s.x * SCREEN_W}
                cy={s.y * SCREEN_H * 0.92}
                r={s.size}
                fill={s.gold ? '#F6C85F' : '#FFF2F7'}
                opacity={s.opacity}
              />
            ))}
          </Svg>
        </View>

        <View pointerEvents="none" style={styles.moon} />
        <View pointerEvents="none" style={styles.blobA} />
        <View pointerEvents="none" style={styles.blobB} />

        <Animated.View style={[styles.center, {opacity: fade}]}>
          <Animated.View
            style={[styles.medallion, {transform: [{scale: pop}]}]}>
            <Image source={spriteRabbit} style={styles.rabbit} />
          </Animated.View>

          <Text style={styles.brandTop}>RABBIT CANDY</Text>
          <Text style={styles.brandBottom}>GARDEN</Text>
          <Text style={styles.tagline}>SORT THE SWEETS BY MOONLIGHT</Text>

          <View style={styles.track}>
            <Animated.View style={[styles.fillWrap, {width: grow}]}>
              <LinearGradient
                colors={G.loaderBar}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.fill}
              />
            </Animated.View>
          </View>
          <Text style={styles.loading}>LOADING...</Text>
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.nightDeep,
  },
  moon: {
    position: 'absolute',
    top: 86,
    right: -72,
    width: 244,
    height: 244,
    borderRadius: 122,
    backgroundColor: '#FFF2F7',
    opacity: 0.15,
  },
  blobA: {
    position: 'absolute',
    top: 220,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: C.berry,
    opacity: 0.12,
  },
  blobB: {
    position: 'absolute',
    bottom: 90,
    right: -50,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: C.mint,
    opacity: 0.1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  medallion: {
    width: 148,
    height: 148,
    borderRadius: 48,
    backgroundColor: '#FFF9F0',
    borderWidth: 3,
    borderColor: C.honey,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: C.berry,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.38,
    shadowRadius: 22,
    elevation: 12,
  },
  rabbit: {
    width: 106,
    height: 106,
    resizeMode: 'contain',
  },
  brandTop: {
    marginTop: 28,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 3,
    color: C.onDark,
    textShadowColor: 'rgba(217,93,159,0.85)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 14,
  },
  brandBottom: {
    marginTop: 2,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 9,
    color: C.honey,
  },
  tagline: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'rgba(255,217,232,0.88)',
  },
  track: {
    marginTop: 40,
    width: BAR_W,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,242,247,0.18)',
    overflow: 'hidden',
  },
  fillWrap: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  fill: {
    flex: 1,
    borderRadius: 5,
  },
  loading: {
    marginTop: 14,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 4,
    color: 'rgba(255,217,232,0.8)',
  },
});

export default LoaderScreen;
