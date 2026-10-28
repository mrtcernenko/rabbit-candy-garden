import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  PanResponder,
  Pressable,
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
  LOADER_DURATION_MS,
  SCREEN_H,
  SCREEN_W,
  STAR_SEEDS,
  buildGrainPath,
} from '../constants/conrabbitcantdnygsarwdenfig';
import {C, G} from '../constants/therabbitcantdnygsarwdenme';
import {
  LoaderSparkGarden,
  useGardenSparkBursts,
} from './LoaderSparkGarden';
// autosetup-split-begin
import {
  rabbitcantdnygsarwdenGameMixSeed,
  rabbitcantdnygsarwdenGameFoldRange,
  rabbitcantdnygsarwdenGameClampSpan,
} from './LrabbitcantdnygsarwdenoaderScreenPart01';
// autosetup-split-end

interface Props {
  onDone?: () => void;
  /** Obfuscated App.tsx binding — same as onDone. */
  onDonerabbitcantdnygsarwden?: () => void;
  doneOnFirstCycle?: boolean;
  /** Obfuscated App.tsx binding — fire after first fill, keep looping. */
  doneOnFirstCycrabbitcantdnygsarwdenle?: boolean;
}

const BAR_W = 224;
const COMBO_MS = 280;
const LABEL_CYCLE = ['LOADING…', 'SORTING…', 'SWEETENING…'] as const;

/**
 * Night-garden splash — interactive idle play while init / WebView runs.
 *
 * Persona (Rabbit Candy Garden fingerprint):
 *  tap-combo · spin-settle · shards · float-drift · meter-notches
 *  hint screen / under-loading · lazy bar · drop-in · few sparks
 *
 * Loading never waits on hero or particles. No fade-out — host unmounts.
 */
export function LrabbitcantdnygsarwdenoaderScreen({
  onDone,
  onDonerabbitcantdnygsarwden,
  doneOnFirstCycle,
  doneOnFirstCycrabbitcantdnygsarwdenle,
}: Props) {
  const notifyDone = onDonerabbitcantdnygsarwden ?? onDone;
  const armOnFirstFill =
    doneOnFirstCycrabbitcantdnygsarwdenle === true || doneOnFirstCycle === true;

  const fade = useRef(new Animated.Value(0)).current;
  const dropY = useRef(new Animated.Value(-12)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const heroScale = useRef(new Animated.Value(1)).current;
  const heroRotate = useRef(new Animated.Value(0)).current;

  const [barLabel, setBarLabel] = useState<string>(LABEL_CYCLE[0]);
  const labelIdx = useRef(0);
  const firstFillDone = useRef(false);
  const heroTouched = useRef(false);
  const lastTapAt = useRef(0);
  const pendingSingle = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reactionIdx = useRef(0);

  const {bursts, spawnGardenBurst} = useGardenSparkBursts();

  const grainA = useMemo(
    () => buildGrainPath(GRAIN_COUNT_A, SCREEN_W, SCREEN_H, 0x1f35d),
    [],
  );
  const grainB = useMemo(
    () => buildGrainPath(GRAIN_COUNT_B, SCREEN_W, SCREEN_H, 0x7c0ff),
    [],
  );

  const playHeroReaction = (kind: 'tick' | 'combo' | 'idle') => {
    heroTouched.current = true;
    const rot = heroRotate;
    const sc = heroScale;
    rot.stopAnimation();
    sc.stopAnimation();
    rot.setValue(0);
    sc.setValue(1);

    const pick = kind === 'idle' ? 0 : reactionIdx.current++ % 3;

    if (kind === 'combo' || pick === 2) {
      // ±180° settle
      const dir = Math.random() > 0.5 ? 1 : -1;
      Animated.sequence([
        Animated.timing(rot, {
          toValue: dir * 180,
          duration: 320,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(rot, {
          toValue: dir * 360,
          duration: 220,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start(({finished}) => {
        if (finished) rot.setValue(0);
      });
      Animated.sequence([
        Animated.timing(sc, {
          toValue: 1.08,
          duration: 140,
          useNativeDriver: true,
        }),
        Animated.timing(sc, {
          toValue: 1,
          duration: 260,
          useNativeDriver: true,
        }),
      ]).start();
      return;
    }

    if (pick === 1) {
      // short spin with friction
      Animated.timing(rot, {
        toValue: 90 + Math.floor(Math.random() * 50),
        duration: 380,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }).start(({finished}) => {
        if (!finished) return;
        Animated.timing(rot, {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }).start();
      });
      return;
    }

    // kick-then-settle
    Animated.sequence([
      Animated.timing(rot, {
        toValue: -18,
        duration: 70,
        useNativeDriver: true,
      }),
      Animated.timing(rot, {
        toValue: 14,
        duration: 110,
        useNativeDriver: true,
      }),
      Animated.timing(rot, {
        toValue: 0,
        duration: 160,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
    Animated.sequence([
      Animated.timing(sc, {
        toValue: 0.92,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(sc, {
        toValue: 1,
        tension: 160,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onHeroPress = () => {
    const now = Date.now();
    if (now - lastTapAt.current < COMBO_MS) {
      if (pendingSingle.current) {
        clearTimeout(pendingSingle.current);
        pendingSingle.current = null;
      }
      lastTapAt.current = 0;
      playHeroReaction('combo');
      return;
    }
    lastTapAt.current = now;
    if (pendingSingle.current) clearTimeout(pendingSingle.current);
    pendingSingle.current = setTimeout(() => {
      pendingSingle.current = null;
      playHeroReaction('tick');
    }, COMBO_MS);
  };

  const heroPan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dx) > 10 || Math.abs(g.dy) > 10,
      onPanResponderRelease: (_, g) => {
        if (Math.abs(g.dx) < 12 && Math.abs(g.dy) < 12) return;
        heroTouched.current = true;
        const tilt = Math.max(-12, Math.min(12, g.dx * 0.08));
        heroRotate.stopAnimation();
        heroRotate.setValue(tilt);
        Animated.spring(heroRotate, {
          toValue: 0,
          tension: 80,
          friction: 7,
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  useEffect(() => {
    // drop-in entrance (fade + Y), never fade-out
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 420,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(dropY, {
        toValue: 0,
        duration: 480,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();

    let stopped = false;
    const fillOnce = () => {
      if (stopped) return;
      progress.setValue(0);
      const ms = 1800 + Math.floor(Math.random() * 1001); // lazy band
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start(({finished}) => {
        if (!finished || stopped) return;
        if (armOnFirstFill && !firstFillDone.current) {
          firstFillDone.current = true;
          notifyDone?.();
        }
        labelIdx.current = (labelIdx.current + 1) % LABEL_CYCLE.length;
        setBarLabel(LABEL_CYCLE[labelIdx.current]);
        fillOnce();
      });
    };
    fillOnce();

    // In-game shell (GameInit): leave after original duration, no fade.
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;
    if (!armOnFirstFill && notifyDone) {
      leaveTimer = setTimeout(() => {
        notifyDone();
      }, LOADER_DURATION_MS);
    }

    // Idle one-shot nudge if the rabbit is never touched
    const idleMs = 2000 + Math.floor(Math.random() * 2000);
    const idleTimer = setTimeout(() => {
      if (!heroTouched.current) playHeroReaction('idle');
    }, idleMs);

    return () => {
      stopped = true;
      progress.stopAnimation();
      if (leaveTimer) clearTimeout(leaveTimer);
      clearTimeout(idleTimer);
      if (pendingSingle.current) clearTimeout(pendingSingle.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fillWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, BAR_W],
  });

  const onFieldPress = (evt: {
    nativeEvent: {locationX: number; locationY: number};
  }) => {
    const {locationX, locationY} = evt.nativeEvent;
    spawnGardenBurst(locationX, locationY);
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={bgLoader}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}>
        <LinearGradient
          colors={[
            'rgba(42,27,51,0.50)',
            'rgba(74,42,80,0.62)',
            'rgba(56,40,58,0.74)',
          ]}
          start={{x: 0.1, y: 0}}
          end={{x: 0.9, y: 1}}
          style={StyleSheet.absoluteFillObject}
        />

        <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
          <Svg width={SCREEN_W} height={SCREEN_H}>
            <Path d={grainA} stroke="#FFF2F7" strokeWidth={1} opacity={0.3} />
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

        {/* Background tap layer — under center column */}
        <Pressable
          style={StyleSheet.absoluteFillObject}
          onPress={onFieldPress}
        />

        <Animated.View
          style={[
            styles.center,
            {opacity: fade, transform: [{translateY: dropY}]},
          ]}
          pointerEvents="box-none">
          <View {...heroPan.panHandlers}>
            <Pressable onPress={onHeroPress} hitSlop={12}>
              <Animated.View
                style={[
                  styles.medallion,
                  {
                    transform: [
                      {scale: heroScale},
                      {
                        rotate: heroRotate.interpolate({
                          inputRange: [-360, 360],
                          outputRange: ['-360deg', '360deg'],
                        }),
                      },
                    ],
                  },
                ]}>
                <Image source={spriteRabbit} style={styles.rabbit} />
              </Animated.View>
            </Pressable>
          </View>

          <Text style={styles.brandTop}>RABBIT CANDY</Text>
          <Text style={styles.brandBottom}>GARDEN</Text>
          <Text style={styles.tagline}>SORT THE SWEETS BY MOONLIGHT</Text>

          <View style={styles.barRow} pointerEvents="none">
            <View style={styles.notch} />
            <View style={styles.track}>
              <Animated.View style={[styles.fillWrap, {width: fillWidth}]}>
                <LinearGradient
                  colors={G.loaderBar}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.fill}
                />
              </Animated.View>
            </View>
            <View style={styles.notch} />
          </View>
          <Text style={styles.loading}>{barLabel}</Text>
          <Text style={styles.hint} pointerEvents="none">
            SPARK THE GARDEN
          </Text>
        </Animated.View>

        {/* Shards above center so they read over the night wash */}
        <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
          <LoaderSparkGarden bursts={bursts} />
        </View>
      </ImageBackground>
    </View>
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
  barRow: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notch: {
    width: 3,
    height: 14,
    borderRadius: 1,
    backgroundColor: 'rgba(246,200,95,0.55)',
    marginHorizontal: 4,
  },
  track: {
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
  hint: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    color: 'rgba(255,217,232,0.55)',
  },
});

export default LrabbitcantdnygsarwdenoaderScreen;

/* autosetup-game-stamp:v1 */
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);
