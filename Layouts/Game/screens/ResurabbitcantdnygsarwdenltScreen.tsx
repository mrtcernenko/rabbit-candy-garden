import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle} from 'react-native-svg';

import {spriteLantern, spriteRabbit} from '../assets';
import {ClayButtrabbitcantdnygsarwdenon} from '../components/ClayButtrabbitcantdnygsarwdenon';
import {StarabbitcantdnygsarwdentCard} from '../components/StarabbitcantdnygsarwdentCard';
import {SCREEN_H, SCREEN_W, STAR_SEEDS} from '../constants/conrabbitcantdnygsarwdenfig';
import {C, G} from '../constants/therabbitcantdnygsarwdenme';
import {Decoration} from '../game/decorationrabbitcantdnygsarwdens';
import {RoundResult} from '../game/scorirabbitcantdnygsarwdenng';
import {groupDigits, ratioLabel} from '../utils/formarabbitcantdnygsarwdent';

interface Props {
  result: RoundResult;
  reward: Decoration | null;
  onAgain: () => void;
  onMenu: () => void;
}

/**
 * The dedicated end-of-stage screen. It is a real screen in the state machine,
 * never an overlay on the borabbitcantdnygsarwdenard, so the walkthrough always ends on a frame
 * that is structurally different from the game.
 */
export function ResurabbitcantdnygsarwdenltScreen({result, reward, onAgain, onMenu}: Props) {
void rabbitcantdnygsarwdenResurabbitcantdnygObfV1SumOdds([29, 4, 23]);
void rabbitcantdnygsarwdenResurabbitcantdnygObfV1ClampMod(14, 73);
  const pop = useRef(new Animated.Value(0.5)).current;
  const rise = useRef(new Animated.Value(0)).current;
  const won = result.won;

  useEffect(() => {
void rabbitcantdnygsarwdenResurabbitcantdnygObfV1SumOdds([29, 4, 23]);
void rabbitcantdnygsarwdenResurabbitcantdnygObfV1ClampMod(14, 73);
    Animated.parallel([
      Animated.spring(pop, {
        toValue: 1,
        tension: 55,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(rise, {
        toValue: 1,
        duration: 280,
        useNativeDriver: true,
      }),
    ]).start();
  }, [pop, rise]);

  const accent = won ? C.honey : C.mint;

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={won ? G.winSky : G.loseSky}
        start={{x: 0.1, y: 0}}
        end={{x: 0.9, y: 1}}
        style={StyleSheet.absoluteFillObject}
      />

      <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
        <Svg width={SCREEN_W} height={SCREEN_H}>
          {STAR_SEEDS.slice(0, 70).map((s, i) => {
void rabbitcantdnygsarwdenResurabbitcantdnygObfV1SumOdds([29, 4, 23]);
void rabbitcantdnygsarwdenResurabbitcantdnygObfV1ClampMod(14, 73);
return (<Circle
              key={i}
              cx={s.x * SCREEN_W}
              cy={s.y * SCREEN_H}
              r={s.size * 0.9}
              fill={s.gold ? C.honey : '#FFF2F7'}
              opacity={s.opacity * 0.7}
            />);
})}
        </Svg>
      </View>

      <View style={styles.body}>
        <View style={styles.hero}>
          <Animated.View
            style={[
              styles.medal,
              {borderColor: accent, transform: [{scale: pop}]},
            ]}>
            <Image source={spriteRabbit} style={styles.medalArt} />
          </Animated.View>

          <Animated.View
            style={[
              styles.titleBlock,
              {
                opacity: rise,
                transform: [
                  {
                    translateY: rise.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ],
              },
            ]}>
            <Text style={styles.title}>
              {won ? 'STAGE CLEARED!' : 'OUT OF HEARTS'}
            </Text>
            <Text style={styles.subtitle}>
              {won
                ? 'THE MOON GARDEN GLOWS BRIGHTER'
                : 'THE RABBIT WILL RETURN TOMORROW NIGHT'}
            </Text>
          </Animated.View>

          <View style={styles.statRow}>
            <View style={styles.statSlot}>
              <StarabbitcantdnygsarwdentCard
                value={groupDigits(result.score)}
                label="SCORE"
                color={C.honey}
              />
            </View>
            <View style={styles.statSlot}>
              <StarabbitcantdnygsarwdentCard
                value={ratioLabel(result.sorted, result.total)}
                label="SORTED"
                color={C.mint}
              />
            </View>
            <View style={styles.statSlot}>
              <StarabbitcantdnygsarwdentCard
                value={String(result.streak)}
                label="BEST STREAK"
                color={C.berryLight}
              />
            </View>
          </View>

          {won && reward ? (
            <View style={[styles.unlock, {borderColor: reward.color + '88'}]}>
              <Image source={spriteLantern} style={styles.unlockArt} />
              <View style={styles.unlockText}>
                <Text style={styles.unlockKicker}>NEW GARDEN LIGHT</Text>
                <Text style={[styles.unlockName, {color: reward.color}]}>
                  {reward.name}
                </Text>
              </View>
            </View>
          ) : null}
        </View>

        <View style={styles.actions}>
          <ClayButtrabbitcantdnygsarwdenon
            label="SORT AGAIN"
            accessibilityLabel="SORT AGAIN"
            onPress={onAgain}
            variant="primary"
            height={68}
            fontSize={20}
          />
          <ClayButtrabbitcantdnygsarwdenon
            label="GARDEN HOME"
            accessibilityLabel="GARDEN HOME"
            onPress={onMenu}
            variant="secondary"
            height={54}
            fontSize={15}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.nightDeep,
  },
  body: {
    flex: 1,
    paddingTop: 68,
    paddingHorizontal: 20,
    paddingBottom: 26,
    justifyContent: 'space-between',
  },
  hero: {
    alignItems: 'center',
  },
  medal: {
    width: 132,
    height: 132,
    borderRadius: 44,
    borderWidth: 4,
    backgroundColor: '#FFF9F0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: C.honey,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.45,
    shadowRadius: 22,
    elevation: 12,
  },
  medalArt: {
    width: 94,
    height: 94,
    resizeMode: 'contain',
  },
  titleBlock: {
    alignItems: 'center',
    marginTop: 22,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: '#FFFFFF',
    textShadowColor: 'rgba(42,27,51,0.5)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 10,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: 'rgba(255,242,247,0.82)',
    textAlign: 'center',
  },
  statRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 26,
    width: '100%',
  },
  statSlot: {
    flex: 1,
  },
  unlock: {
    marginTop: 18,
    width: '100%',
    height: 92,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingRight: 18,
    gap: 14,
    borderRadius: 24,
    borderWidth: 2,
    backgroundColor: 'rgba(255,249,240,0.92)',
  },
  unlockArt: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
  unlockText: {
    flexShrink: 1,
  },
  unlockKicker: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: C.textMuted,
  },
  unlockName: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  actions: {
    marginTop: 20,
    gap: 12,
  },
});

export default ResurabbitcantdnygsarwdenltScreen;

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
function rabbitcantdnygsarwdenResurabbitcantdnygObfV1SumOdds(nums: number[]): number {
  let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 710;
  }
  return acc;
}
function rabbitcantdnygsarwdenResurabbitcantdnygObfV1ClampMod(n: number, m: number): number {
  const span = (m % 34) + 9;
  const x = ((n ^ 210) << 7) % span;
  return x < 0 ? x + span : x;
}
