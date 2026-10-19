import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rabbit} from 'lucide-react-native';

import {HELPER_CHARGE_MAX} from '../constants/config';
import {C} from '../constants/theme';
import {ClayButton} from './ClayButton';

interface Props {
  charge: number;
  onUse: () => void;
  width: number;
}

export function HelperBar({charge, onUse, width}: Props) {
  const ready = charge >= HELPER_CHARGE_MAX;
  return (
    <View style={styles.wrap}>
      <View style={styles.capRow}>
        <Text
          style={[styles.cap, {color: ready ? C.mint : C.textMuted}]}
          numberOfLines={1}>
          {ready ? 'HELPER READY' : 'CHARGING HELPER'}
        </Text>
        <Text style={styles.cap} numberOfLines={1}>
          CHARGE {charge}/{HELPER_CHARGE_MAX}
        </Text>
      </View>
      <ClayButton
        label="RABBIT HELPER"
        accessibilityLabel="RABBIT HELPER"
        Icon={Rabbit}
        variant="mint"
        disabled={!ready}
        onPress={onUse}
        height={60}
        fontSize={17}
        width={width}
        progress={charge / HELPER_CHARGE_MAX}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
  },
  capRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
    paddingHorizontal: 4,
  },
  cap: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: C.textMuted,
  },
});

export default HelperBar;
