import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {bgGame} from '../assets';
import {BasketCrabbitcantdnygsarwdenup} from '../components/BasketCrabbitcantdnygsarwdenup';
import {HerabbitcantdnygsarwdenartsRow} from '../components/HerabbitcantdnygsarwdenartsRow';
import {HelperabbitcantdnygsarwdenrBar} from '../components/HelperabbitcantdnygsarwdenrBar';
import {ScreenHrabbitcantdnygsarwdeneader} from '../components/ScreenHrabbitcantdnygsarwdeneader';
import {SorabbitcantdnygsarwdenrtBoard} from '../components/SorabbitcantdnygsarwdenrtBoard';
import {StarabbitcantdnygsarwdentCard} from '../components/StarabbitcantdnygsarwdentCard';
import {StreakTrabbitcantdnygsarwdenoast} from '../components/StreakTrabbitcantdnygsarwdenoast';
import {BASKET_GAP, BOARD_W} from '../constants/conrabbitcantdnygsarwdenfig';
import {C, G} from '../constants/therabbitcantdnygsarwdenme';
import {KINDS} from '../game/borabbitcantdnygsarwdenard';
import {RoundResult} from '../game/scorirabbitcantdnygsarwdenng';
import {useGameStrabbitcantdnygsarwdenate} from '../hooks/useGameStrabbitcantdnygsarwdenate';
import {groupDigits, ratioLabel} from '../utils/formarabbitcantdnygsarwdent';
// autosetup-split-begin
import { rabbitcantdnygsarwdenGameMixSeed, rabbitcantdnygsarwdenGameFoldRange, rabbitcantdnygsarwdenGameClampSpan } from './GameScreenrabbitcantdnygsarwdenPart01';
// autosetup-split-end

interface Props {
  stage: number;
  hintsOn: boolean;
  onExit: () => void;
  onGameOver: (result: RoundResult) => void;
}

/**
 * G3 Split Panel: header / tray / basket row / stat strip / helper controls.
 * No ScrollView wraps the screen — every band is a fixed or flex box, so the
 * borabbitcantdnygsarwdenard can never be pushed out of frame.
 */
export function GameScreenrabbitcantdnygsarwden({stage, hintsOn, onExit, onGameOver}: Props) {
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1SumOdds([6, 9, 16]);
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ClampMod(27, 66);
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ShiftXor(69, 52);
  const {state, tapCell, tapBasket, useHelper, highlightKind} = useGameStrabbitcantdnygsarwdenate(
    stage,
    hintsOn,
    onGameOver,
  );

  const capacity = state.totals;

  return (
    <View style={styles.root}>
      <ImageBackground
        source={bgGame}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}>
        <LinearGradient
          colors={G.gameWash}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={StyleSheet.absoluteFillObject}
        />

        <ScreenHrabbitcantdnygsarwdeneader
          title={'STAGE ' + state.stage}
          subtitle={'SORTED ' + ratioLabel(state.sorted, state.total)}
          onBack={onExit}
          backLabel="LEAVE STAGE"
          rightSlot={
            <View style={styles.headerRight}>
              <HerabbitcantdnygsarwdenartsRow hearts={state.hearts} />
              <Text style={styles.headerScore}>{groupDigits(state.score)}</Text>
            </View>
          }
        />

        <View style={styles.arena}>
          <SorabbitcantdnygsarwdenrtBoard
            cells={state.cells}
            blockedRows={state.blockedRows}
            selectedId={state.selectedId}
            burstKind={state.burstKind}
            burstKey={state.burstKey}
            onTapCell={tapCell}
          />

          <View style={styles.toastSlot} pointerEvents="none">
            {state.banner > 0 ? <StreakTrabbitcantdnygsarwdenoast streak={state.banner} /> : null}
          </View>

          <View style={styles.baskets}>
            {KINDS.map(kind => {
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1SumOdds([6, 9, 16]);
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ClampMod(27, 66);
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ShiftXor(69, 52);
return (<BasketCrabbitcantdnygsarwdenup
                key={kind}
                kind={kind}
                count={state.counts[kind]}
                capacity={capacity[kind]}
                highlighted={highlightKind === kind}
                shaking={state.shakeKind === kind}
                onPress={() => {
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1SumOdds([6, 9, 16]);
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ClampMod(27, 66);
void rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ShiftXor(69, 52);
return (tapBasket(kind));
}}
              />);
})}
          </View>
        </View>

        <View style={styles.strip}>
          <View style={styles.statSlot}>
            <StarabbitcantdnygsarwdentCard
              compact
              value={String(state.streak)}
              label="STREAK"
              color={C.berry}
            />
          </View>
          <View style={styles.statSlot}>
            <StarabbitcantdnygsarwdentCard
              compact
              value={ratioLabel(state.sorted, state.total)}
              label="SORTED"
              color={C.mint}
            />
          </View>
          <View style={styles.statSlot}>
            <StarabbitcantdnygsarwdentCard
              compact
              value={groupDigits(state.score)}
              label="SCORE"
              color={C.honey}
            />
          </View>
        </View>

        <View style={styles.controls}>
          <Text numberOfLines={1} style={styles.statusLine}>
            {state.toast
              ? state.toast
              : state.selectedId !== null
              ? 'NOW TAP THE MATCHING BASKET'
              : 'TAP A SWEET TO LIFT IT'}
          </Text>
          <HelperabbitcantdnygsarwdenrBar
            charge={state.charge}
            onUse={useHelper}
            width={BOARD_W}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  headerRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  headerScore: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.6,
    color: C.berry,
  },
  arena: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  toastSlot: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baskets: {
    width: BOARD_W,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: BASKET_GAP,
  },
  strip: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: C.surfaceAlt,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1.5,
    borderTopColor: C.border,
  },
  statSlot: {
    flex: 1,
  },
  controls: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderTopWidth: 1.5,
    borderTopColor: C.border,
  },
  statusLine: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: C.textMuted,
    marginBottom: 10,
  },
});

export default GameScreenrabbitcantdnygsarwden;

/* autosetup-game-stamp:v1 */
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenGameScreenrabbitcaObfV1SumOdds(nums: number[]): number {
  let acc = 46;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 452;
  }
  return acc;
}
function rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 32) + 10;
  const x = ((n ^ 153) << 7) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenGameScreenrabbitcaObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 43) & 46538;
}
