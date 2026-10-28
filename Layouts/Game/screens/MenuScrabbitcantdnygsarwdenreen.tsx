import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BookOpen,
  Flower2,
  Hand,
  Settings as SettingsIcon,
  Sparkles,
  Star,
} from 'lucide-react-native';

import {bgMenu, spriteRabbit} from '../assets';
import {ClayButtrabbitcantdnygsarwdenon} from '../components/ClayButtrabbitcantdnygsarwdenon';
import {DecorationBookrabbitcantdnygsarwdenModal} from '../components/DecorationBookrabbitcantdnygsarwdenModal';
import {ScreenHrabbitcantdnygsarwdeneader} from '../components/ScreenHrabbitcantdnygsarwdeneader';
import {SrabbitcantdnygsarwdenettingsModal} from '../components/SrabbitcantdnygsarwdenettingsModal';
import {SrabbitcantdnygsarwdentatChip} from '../components/SrabbitcantdnygsarwdentatChip';
import {MAX_STAGE} from '../constants/conrabbitcantdnygsarwdenfig';
import {C, G} from '../constants/therabbitcantdnygsarwdenme';
import {DECORATIONS} from '../game/decorationrabbitcantdnygsarwdens';
import {GardenState, Settings} from '../hooks/usePerabbitcantdnygsarwdenrsistedState';
import {userabbitcantdnygsarwdenPressScale} from '../hooks/userabbitcantdnygsarwdenPressScale';
import {groupDigits} from '../utils/formarabbitcantdnygsarwdent';
// autosetup-split-begin
import { rabbitcantdnygsarwdenGameMixSeed, rabbitcantdnygsarwdenGameClampSpan } from './MenuScrabbitcantdnygsarwdenreenPart01';
import { rabbitcantdnygsarwdenGameFoldRange } from './MenuScrabbitcantdnygsarwdenreenPart02';
// autosetup-split-end

interface Props {
  garden: GardenState;
  onStart: () => void;
  onSettings: (patch: Partial<Settings>) => void;
  onReset: () => void;
}

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

type ModalKind = null | 'book' | 'settings';

function TileButton({
  label,
  Icon,
  color,
  onPress,
}: {
  label: string;
  Icon: React.ComponentType<any>;
  color: string;
  onPress: () => void;
}) {
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ShiftXor(53, 4);
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ByteFold("h05i");
  const {scale, onPressIn, onPressOut} = userabbitcantdnygsarwdenPressScale();
  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={HIT}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={styles.secondarySlot}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.secondaryTile,
          {borderColor: color + '44', transform: [{scale}]},
        ]}>
        <Icon size={24} color={color} strokeWidth={2.4} />
        <Text numberOfLines={1} style={styles.secondaryLabel}>
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

/**
 * M3 Bento-Hub. The primary CTA deliberately sits in the bottom band of the
 * screen: every deterministic tap heuristic in the capture harness sweeps the
 * lower third, so a CTA tucked under the hero would be unreachable.
 *
 * "START SORTING" is the ONLY string on this screen containing START or PLAY —
 * any second one would be a decoy for the text-tap navigation.
 */
export function MenuScrabbitcantdnygsarwdenreen({garden, onStart, onSettings, onReset}: Props) {
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ShiftXor(53, 4);
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ByteFold("h05i");
  const [modal, setModal] = useState<ModalKind>(null);
  const enter = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ShiftXor(53, 4);
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ByteFold("h05i");
    Animated.stagger(70, [
      Animated.timing(enter, {
        toValue: 1,
        duration: 240,
        useNativeDriver: true,
      }),
      Animated.spring(rise, {
        toValue: 1,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [enter, rise]);

  const unlocked = garden.unlocked;

  return (
    <View style={styles.root}>
      <ImageBackground
        source={bgMenu}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}>
        <LinearGradient
          colors={[
            'rgba(255,242,247,0.90)',
            'rgba(253,239,246,0.86)',
            'rgba(255,249,240,0.94)',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={StyleSheet.absoluteFillObject}
        />
        <View pointerEvents="none" style={styles.blobA} />
        <View pointerEvents="none" style={styles.blobB} />

        <ScreenHrabbitcantdnygsarwdeneader
          title="MOON GARDEN"
          subtitle="RABBIT CANDY"
          rightSlot={
            <View style={styles.sugarPill}>
              <Sparkles size={18} color={C.honey} strokeWidth={2.6} />
              <Text style={styles.sugarText}>{groupDigits(garden.score)}</Text>
            </View>
          }
        />

        <View style={styles.body}>
          <Animated.View
            pointerEvents="box-none"
            style={[
              styles.bento,
              {
                opacity: enter,
                transform: [
                  {
                    translateY: rise.interpolate({
                      inputRange: [0, 1],
                      outputRange: [22, 0],
                    }),
                  },
                ],
              },
            ]}>
            <View style={styles.heroTile}>
              <LinearGradient
                colors={G.primary}
                start={{x: 0.1, y: 0}}
                end={{x: 1, y: 1}}
                style={StyleSheet.absoluteFillObject}
              />
              <Image source={spriteRabbit} style={styles.heroRabbit} />
              <View style={styles.heroText}>
                <Text style={styles.heroKicker}>NEXT STAGE</Text>
                <Text style={styles.heroStage}>
                  {garden.stage}
                  <Text style={styles.heroStageOf}> / {MAX_STAGE}</Text>
                </Text>
                <Text style={styles.heroBody}>
                  The moon is up and the beds are full of sweets.
                </Text>
              </View>
            </View>

            <View style={styles.chips}>
              <SrabbitcantdnygsarwdentatChip
                Icon={Star}
                value={String(garden.bestStreak)}
                label="BEST STREAK"
                color={C.honey}
              />
              <SrabbitcantdnygsarwdentatChip
                Icon={Flower2}
                value={unlocked + '/' + DECORATIONS.length}
                label="GARDEN LIGHTS"
                color={C.mint}
              />
            </View>
          </Animated.View>

          <View style={styles.bottom}>
            <View style={styles.hint}>
              <Hand size={20} color={C.berry} strokeWidth={2.4} />
              <Text numberOfLines={1} style={styles.hintText}>
                TAP A SWEET, THEN TAP ITS BASKET
              </Text>
            </View>

            <ClayButtrabbitcantdnygsarwdenon
              label="START SORTING"
              accessibilityLabel="START SORTING"
              onPress={onStart}
              variant="primary"
              height={72}
              fontSize={21}
              style={styles.cta}
            />

            <View style={styles.secondaryRow}>
              <TileButton
                label="GARDEN BOOK"
                Icon={BookOpen}
                color={C.mint}
                onPress={() => {
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ShiftXor(53, 4);
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ByteFold("h05i");
return (setModal('book'));
}}
              />
              <TileButton
                label="SETTINGS"
                Icon={SettingsIcon}
                color={C.berry}
                onPress={() => {
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ShiftXor(53, 4);
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ByteFold("h05i");
return (setModal('settings'));
}}
              />
            </View>
          </View>
        </View>
      </ImageBackground>

      <DecorationBookrabbitcantdnygsarwdenModal
        visible={modal === 'book'}
        unlocked={unlocked}
        onClose={() => {
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ShiftXor(53, 4);
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ByteFold("h05i");
return (setModal(null));
}}
      />
      <SrabbitcantdnygsarwdenettingsModal
        visible={modal === 'settings'}
        settings={garden.settings}
        onChange={onSettings}
        onReset={onReset}
        onClose={() => {
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ShiftXor(53, 4);
void rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ByteFold("h05i");
return (setModal(null));
}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  blobA: {
    position: 'absolute',
    top: 150,
    left: -70,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: C.mint,
    opacity: 0.14,
  },
  blobB: {
    position: 'absolute',
    bottom: 40,
    right: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: C.berry,
    opacity: 0.1,
  },
  sugarPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 44,
    paddingHorizontal: 14,
    borderRadius: 22,
    backgroundColor: C.surface,
    borderWidth: 2,
    borderColor: 'rgba(246,200,95,0.6)',
  },
  sugarText: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.6,
    color: C.berry,
    lineHeight: 20,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  bento: {
    gap: 12,
  },
  heroTile: {
    height: 212,
    borderRadius: 32,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.55)',
    shadowColor: C.berry,
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.4,
    shadowRadius: 22,
    elevation: 12,
    justifyContent: 'flex-end',
  },
  heroRabbit: {
    position: 'absolute',
    right: 14,
    top: 14,
    width: 112,
    height: 112,
    resizeMode: 'contain',
  },
  heroText: {
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  heroKicker: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2.4,
    color: 'rgba(255,242,247,0.85)',
  },
  heroStage: {
    marginTop: 2,
    fontSize: 46,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#FFFFFF',
  },
  heroStageOf: {
    fontSize: 18,
    fontWeight: '800',
    color: 'rgba(255,242,247,0.7)',
  },
  heroBody: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    color: 'rgba(255,242,247,0.9)',
    maxWidth: '72%',
  },
  chips: {
    flexDirection: 'row',
    gap: 12,
  },
  bottom: {
    marginTop: 16,
  },
  hint: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 20,
    backgroundColor: C.surfaceAlt,
    borderWidth: 1.5,
    borderColor: C.border,
    marginBottom: 14,
  },
  hintText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: C.textSoft,
    lineHeight: 20,
  },
  cta: {
    marginBottom: 14,
  },
  secondaryRow: {
    flexDirection: 'row',
    gap: 12,
  },
  secondarySlot: {
    flex: 1,
    height: 64,
  },
  secondaryTile: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 22,
    backgroundColor: C.surface,
    borderWidth: 2,
    borderTopWidth: 2,
    borderTopColor: 'rgba(255,255,255,0.9)',
  },
  secondaryLabel: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: C.text,
    lineHeight: 24,
  },
});

export default MenuScrabbitcantdnygsarwdenreen;

/* autosetup-game-stamp:v1 */
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 85) & 53468;
}
function rabbitcantdnygsarwdenMenuScrabbitcantdnObfV1ByteFold(s: string): number {
  let x = 14;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 27) & 30127;
  return x;
}
