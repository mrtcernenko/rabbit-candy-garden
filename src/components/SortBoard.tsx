import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {
  BOARD_FRAME,
  BOARD_H,
  BOARD_PAD,
  BOARD_W,
  TILE,
} from '../constants/config';
import {C} from '../constants/theme';
import {Cell, Kind, KIND_COLOR} from '../game/board';
import {ConfettiBurst} from './ConfettiBurst';
import {MoonvineOverlay} from './MoonvineOverlay';
import {SweetTile} from './SweetTile';

interface Props {
  cells: Cell[];
  blockedRows: number[];
  selectedId: number | null;
  burstKind: Kind | null;
  burstKey: number;
  onTapCell: (id: number) => void;
}

/**
 * The sorting tray. Geometry comes straight from the BOARD_FRAME formula in
 * config.ts — BOARD_W = TILE*COLS + 2*BOARD_FRAME — so the tiles can never
 * overflow the padded, bordered parent (rule #4/#5).
 */
export function SortBoard({
  cells,
  blockedRows,
  selectedId,
  burstKind,
  burstKey,
  onTapCell,
}: Props) {
  const enter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(enter, {
      toValue: 1,
      tension: 50,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }, [enter]);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.tray,
        {
          width: BOARD_W,
          height: BOARD_H,
          opacity: enter,
          transform: [
            {
              translateY: enter.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 0],
              }),
            },
          ],
        },
      ]}>
      <View pointerEvents="none" style={styles.innerLight} />

      {cells.map(cell => (
        <View
          key={cell.id}
          style={[
            styles.slot,
            {
              left: BOARD_FRAME + cell.col * TILE,
              top: BOARD_FRAME + cell.row * TILE,
              width: TILE,
              height: TILE,
            },
          ]}>
          <SweetTile
            kind={cell.kind}
            size={TILE}
            selected={selectedId === cell.id}
            blocked={blockedRows.indexOf(cell.row) !== -1}
            onPress={() => onTapCell(cell.id)}
          />
        </View>
      ))}

      <MoonvineOverlay rows={blockedRows} width={BOARD_W} />

      {burstKind ? (
        <View pointerEvents="none" style={styles.burst}>
          <ConfettiBurst key={burstKey} color={KIND_COLOR[burstKind]} />
        </View>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tray: {
    alignSelf: 'center',
    backgroundColor: C.surface,
    borderRadius: 28,
    borderWidth: 3,
    borderColor: 'rgba(246,200,95,0.45)',
    shadowColor: C.berry,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 8,
  },
  innerLight: {
    position: 'absolute',
    top: BOARD_PAD,
    left: 14,
    right: 14,
    height: 2,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.75)',
  },
  slot: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  burst: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SortBoard;
