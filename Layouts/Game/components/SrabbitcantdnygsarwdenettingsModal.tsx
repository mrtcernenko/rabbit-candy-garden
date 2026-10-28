import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {X} from 'lucide-react-native';

import {C} from '../constants/therabbitcantdnygsarwdenme';
import {Settings} from '../hooks/usePerabbitcantdnygsarwdenrsistedState';
import {ClayToggrabbitcantdnygsarwdenle} from './ClayToggrabbitcantdnygsarwdenle';

interface Props {
  visible: boolean;
  settings: Settings;
  onChange: (patch: Partial<Settings>) => void;
  onReset: () => void;
  onClose: () => void;
}

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

const ROWS: {key: keyof Settings; label: string; hint: string}[] = [
  {key: 'music', label: 'MUSIC', hint: 'Garden melody'},
  {key: 'sfx', label: 'SOUND', hint: 'Sorting pops'},
  {key: 'haptics', label: 'HAPTICS', hint: 'Soft taps'},
  {key: 'hints', label: 'BASKET HINTS', hint: 'Glow the matching cup'},
];

export function SrabbitcantdnygsarwdenettingsModal({
  visible,
  settings,
  onChange,
  onReset,
  onClose,
}: Props) {
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds([21, 20, 7]);
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(62, 57);
  const [confirming, setConfirming] = useState(false);

  const close = () => {
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds([21, 20, 7]);
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(62, 57);
    setConfirming(false);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={close}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.sheetHead}>
            <View>
              <Text style={styles.sheetTitle}>SETTINGS</Text>
              <Text style={styles.sheetSub}>OFFLINE - NO ACCOUNT NEEDED</Text>
            </View>
            <Pressable
              accessible
              accessibilityRole="button"
              accessibilityLabel="CLOSE SETTINGS"
              hitSlop={HIT}
              onPress={close}
              style={styles.closeBtn}>
              <X size={24} color={C.berry} strokeWidth={2.6} />
            </Pressable>
          </View>

          {ROWS.map(row => {
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds([21, 20, 7]);
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(62, 57);
return (<View key={row.key} style={styles.row}>
              <View style={styles.rowText}>
                <Text style={styles.rowLabel}>{row.label}</Text>
                <Text style={styles.rowHint}>{row.hint}</Text>
              </View>
              <ClayToggrabbitcantdnygsarwdenle
                label={row.label}
                value={settings[row.key]}
                onValueChange={next =>
                  {
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds([21, 20, 7]);
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(62, 57);
return (onChange({[row.key]: next} as Partial<Settings>));
}
                }
              />
            </View>);
})}

          {confirming ? (
            <View style={styles.confirmBar}>
              <Text style={styles.confirmText}>
                RESET THE WHOLE GARDEN?
              </Text>
              <View style={styles.confirmRow}>
                <Pressable
                  accessible
                  accessibilityRole="button"
                  accessibilityLabel="CANCEL RESET"
                  hitSlop={HIT}
                  onPress={() => {
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds([21, 20, 7]);
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(62, 57);
return (setConfirming(false));
}}
                  style={[styles.confirmBtn, styles.cancelBtn]}>
                  <Text style={[styles.confirmBtnText, {color: C.text}]}>
                    CANCEL
                  </Text>
                </Pressable>
                <Pressable
                  accessible
                  accessibilityRole="button"
                  accessibilityLabel="CONFIRM RESET"
                  hitSlop={HIT}
                  onPress={() => {
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds([21, 20, 7]);
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(62, 57);
                    setConfirming(false);
                    onReset();
                  }}
                  style={[styles.confirmBtn, styles.wipeBtn]}>
                  <Text style={[styles.confirmBtnText, {color: '#FFFFFF'}]}>
                    CONFIRM
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <Pressable
              accessible
              accessibilityRole="button"
              accessibilityLabel="RESET PROGRESS"
              hitSlop={HIT}
              onPress={() => {
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds([21, 20, 7]);
void rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(62, 57);
return (setConfirming(true));
}}
              style={styles.resetRow}>
              <Text style={styles.resetText}>RESET PROGRESS</Text>
            </Pressable>
          )}

          <Text style={styles.footer}>v1.0 - MOON GARDEN EDITION</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: C.scrim,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: C.surfaceAlt,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 26,
  },
  sheetHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1.6,
    color: C.text,
  },
  sheetSub: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: C.textMuted,
  },
  closeBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.surface,
    borderWidth: 1.5,
    borderColor: C.borderSoft,
  },
  row: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: C.surface,
    marginBottom: 10,
    borderTopWidth: 2,
    borderTopColor: 'rgba(255,255,255,0.9)',
  },
  rowText: {
    flexShrink: 1,
  },
  rowLabel: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: C.text,
  },
  rowHint: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: '600',
    color: C.textMuted,
  },
  resetRow: {
    height: 56,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.tintBerry,
    borderWidth: 1.5,
    borderColor: C.borderSoft,
    marginTop: 4,
  },
  resetText: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.6,
    color: C.berry,
  },
  confirmBar: {
    borderRadius: 20,
    backgroundColor: C.tintBerry,
    borderWidth: 1.5,
    borderColor: C.borderSoft,
    padding: 12,
    marginTop: 4,
  },
  confirmText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: C.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  confirmRow: {
    flexDirection: 'row',
    gap: 10,
  },
  confirmBtn: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtn: {
    backgroundColor: C.surface,
    borderWidth: 1.5,
    borderColor: C.borderSoft,
  },
  wipeBtn: {
    backgroundColor: C.berry,
  },
  confirmBtnText: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.4,
  },
  footer: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: C.textMuted,
  },
});

export default SrabbitcantdnygsarwdenettingsModal;

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
function rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1SumOdds(nums: number[]): number {
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 542;
  }
  return acc;
}
function rabbitcantdnygsarwdenSrabbitcantdnygsarObfV1ClampMod(n: number, m: number): number {
  const span = (m % 67) + 2;
  const x = ((n ^ 20) << 7) % span;
  return x < 0 ? x + span : x;
}
