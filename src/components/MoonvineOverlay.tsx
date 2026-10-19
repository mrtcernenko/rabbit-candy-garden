import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Sprout} from 'lucide-react-native';

import {BOARD_FRAME, COLS, TILE} from '../constants/config';
import {C} from '../constants/theme';

interface Props {
  rows: number[];
  width: number;
}

/**
 * The moonvine wash over the blocked rows of the tray. Purely decorative and
 * non-interactive — the tap rejection lives in the game reducer.
 */
export function MoonvineOverlay({rows, width}: Props) {
  if (rows.length === 0) {
    return null;
  }
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
      {rows.map(row => (
        <View
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
          {Array.from({length: COLS}).map((_, i) => (
            <View key={i} style={[styles.slot, {width: TILE, height: TILE}]}>
              <Sprout size={22} color={C.mint} strokeWidth={2.6} />
            </View>
          ))}
        </View>
      ))}
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

export default MoonvineOverlay;
