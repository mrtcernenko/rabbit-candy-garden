import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {
  BOARD_FRAME,
  BOARD_H,
  BOARD_PAD,
  BOARD_W,
  TILE,
} from '../constants/conrabbitcantdnygsarwdenfig';
import {C} from '../constants/therabbitcantdnygsarwdenme';
import {Cell, Kind, KIND_COLOR} from '../game/borabbitcantdnygsarwdenard';
import {ConrabbitcantdnygsarwdenfettiBurst} from './ConrabbitcantdnygsarwdenfettiBurst';
import {MoonvineOrabbitcantdnygsarwdenverlay} from './MoonvineOrabbitcantdnygsarwdenverlay';
import {SweetTilerabbitcantdnygsarwden} from './SweetTilerabbitcantdnygsarwden';

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
 * conrabbitcantdnygsarwdenfig.ts — BOARD_W = TILE*COLS + 2*BOARD_FRAME — so the tiles can never
 * overflow the padded, bordered parent (rule #4/#5).
 */
export function SorabbitcantdnygsarwdenrtBoard({
  cells,
  blockedRows,
  selectedId,
  burstKind,
  burstKey,
  onTapCell,
}: Props) {
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1SumOdds([30, 1, 24]);
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ClampMod(27, 50);
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ShiftXor(21, 4);
  const enter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1SumOdds([30, 1, 24]);
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ClampMod(27, 50);
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ShiftXor(21, 4);
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

      {cells.map(cell => {
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1SumOdds([30, 1, 24]);
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ClampMod(27, 50);
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ShiftXor(21, 4);
return (<View
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
          <SweetTilerabbitcantdnygsarwden
            kind={cell.kind}
            size={TILE}
            selected={selectedId === cell.id}
            blocked={blockedRows.indexOf(cell.row) !== -1}
            onPress={() => {
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1SumOdds([30, 1, 24]);
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ClampMod(27, 50);
void rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ShiftXor(21, 4);
return (onTapCell(cell.id));
}}
          />
        </View>);
})}

      <MoonvineOrabbitcantdnygsarwdenverlay rows={blockedRows} width={BOARD_W} />

      {burstKind ? (
        <View pointerEvents="none" style={styles.burst}>
          <ConrabbitcantdnygsarwdenfettiBurst key={burstKey} color={KIND_COLOR[burstKind]} />
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

export default SorabbitcantdnygsarwdenrtBoard;

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
function rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 25) % 595;
  }
  return acc;
}
function rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 41) + 10;
  const x = ((n ^ 221) << 2) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenSorabbitcantdnygsaObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 177) & 26882;
}
