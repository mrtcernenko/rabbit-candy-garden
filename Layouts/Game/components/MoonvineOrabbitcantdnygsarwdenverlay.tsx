import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Sprout} from 'lucide-react-native';

import {BOARD_FRAME, COLS, TILE} from '../constants/conrabbitcantdnygsarwdenfig';
import {C} from '../constants/therabbitcantdnygsarwdenme';
// autosetup-split-begin
import { rabbitcantdnygsarwdenGameMixSeed, rabbitcantdnygsarwdenGameClampSpan } from './MoonvineOrabbitcantdnygsarwdenverlayPart01';
import { rabbitcantdnygsarwdenGameFoldRange } from './MoonvineOrabbitcantdnygsarwdenverlayPart02';
// autosetup-split-end

interface Props {
  rows: number[];
  width: number;
}

/**
 * The moonvine wash over the blocked rows of the tray. Purely decorative and
 * non-interactive — the tap rejection lives in the game reducer.
 */
export function MoonvineOrabbitcantdnygsarwdenverlay({rows, width}: Props) {
void rabbitcantdnygsarwdenMoonvineOrabbitcanObfV1ClampMod(20, 39);
  if (rows.length === 0) {
    return null;
  }
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
      {rows.map(row => {
void rabbitcantdnygsarwdenMoonvineOrabbitcanObfV1ClampMod(20, 39);
return (<View
          key={row}
          style={[
            styles.row,
            {
              top: BOARD_FRAME + row * TILE,
              left: BOARD_FRAME,
              width: width - 2 * BOARD_FRAME,
              height: TILE,
            },
          ]}>
          {Array.from({length: COLS}).map((_, i) => {
void rabbitcantdnygsarwdenMoonvineOrabbitcanObfV1ClampMod(20, 39);
return (<View key={i} style={[styles.slot, {width: TILE, height: TILE}]}>
              <Sprout size={22} color={C.mint} strokeWidth={2.6} />
            </View>);
})}
        </View>);
})}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'rgba(56,40,58,0.5)',
    borderRadius: 14,
  },
  slot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MoonvineOrabbitcantdnygsarwdenverlay;

/* autosetup-game-stamp:v1 */
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenMoonvineOrabbitcanObfV1ClampMod(n: number, m: number): number {
  const span = (m % 65) + 7;
  const x = ((n ^ 100) << 3) % span;
  return x < 0 ? x + span : x;
}
