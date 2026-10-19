import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {bgGame} from '../assets';
import {BasketCup} from '../components/BasketCup';
import {HeartsRow} from '../components/HeartsRow';
import {HelperBar} from '../components/HelperBar';
import {ScreenHeader} from '../components/ScreenHeader';
import {SortBoard} from '../components/SortBoard';
import {StatCard} from '../components/StatCard';
import {StreakToast} from '../components/StreakToast';
import {BASKET_GAP, BOARD_W} from '../constants/config';
import {C, G} from '../constants/theme';
import {KINDS} from '../game/board';
import {RoundResult} from '../game/scoring';
import {useGameState} from '../hooks/useGameState';
import {groupDigits, ratioLabel} from '../utils/format';

interface Props {
  stage: number;
  hintsOn: boolean;
  onExit: () => void;
  onGameOver: (result: RoundResult) => void;
}

/**
 * G3 Split Panel: header / tray / basket row / stat strip / helper controls.
 * No ScrollView wraps the screen — every band is a fixed or flex box, so the
 * board can never be pushed out of frame.
 */
export function GameScreen({stage, hintsOn, onExit, onGameOver}: Props) {
  const {state, tapCell, tapBasket, useHelper, highlightKind} = useGameState(
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

        <ScreenHeader
          title={'STAGE ' + state.stage}
          subtitle={'SORTED ' + ratioLabel(state.sorted, state.total)}
          onBack={onExit}
          backLabel="LEAVE STAGE"
          rightSlot={
            <View style={styles.headerRight}>
              <HeartsRow hearts={state.hearts} />
              <Text style={styles.headerScore}>{groupDigits(state.score)}</Text>
            </View>
          }
        />

        <View style={styles.arena}>
          <SortBoard
            cells={state.cells}
            blockedRows={state.blockedRows}
            selectedId={state.selectedId}
            burstKind={state.burstKind}
            burstKey={state.burstKey}
            onTapCell={tapCell}
          />

          <View style={styles.toastSlot} pointerEvents="none">
            {state.banner > 0 ? <StreakToast streak={state.banner} /> : null}
          </View>

          <View style={styles.baskets}>
            {KINDS.map(kind => (
              <BasketCup
                key={kind}
                kind={kind}
                count={state.counts[kind]}
                capacity={capacity[kind]}
                highlighted={highlightKind === kind}
                shaking={state.shakeKind === kind}
                onPress={() => tapBasket(kind)}
              />
            ))}
          </View>
        </View>

        <View style={styles.strip}>
          <View style={styles.statSlot}>
            <StatCard
              compact
              value={String(state.streak)}
              label="STREAK"
              color={C.berry}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              compact
              value={ratioLabel(state.sorted, state.total)}
              label="SORTED"
              color={C.mint}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
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
          <HelperBar
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

export default GameScreen;
