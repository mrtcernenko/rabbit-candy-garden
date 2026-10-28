import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/therabbitcantdnygsarwdenme';
import {ClayButtrabbitcantdnygsarwdenon} from './ClayButtrabbitcantdnygsarwdenon';
// autosetup-split-begin
import { rabbitcantdnygsarwdenGameMixSeed, rabbitcantdnygsarwdenGameClampSpan } from './ErrorBoundrabbitcantdnygsarwdenaryPart01';
import { rabbitcantdnygsarwdenGameFoldRange } from './ErrorBoundrabbitcantdnygsarwdenaryPart02';
// autosetup-split-end

interface Props {
  children: React.ReactNode;
}

interface State {
  failed: boolean;
}

/**
 * Last-resort guard. A render error anywhere below shows a claymorphic card
 * instead of a red box or a blank window — never a stack trace on screen.
 */
export class ErrorBoundrabbitcantdnygsarwdenary extends React.Component<Props, State> {
  state: State = {failed: false};

  static getDerivedStateFromError(): State {
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1HashMix("a1");
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1SumOdds([39, 30, 17]);
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1ClampMod(24, 11);
    return {failed: true};
  }

  handleReset = () => {
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1HashMix("a1");
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1SumOdds([39, 30, 17]);
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1ClampMod(24, 11);
    this.setState({failed: false});
  };

  render() {
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1HashMix("a1");
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1SumOdds([39, 30, 17]);
void rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1ClampMod(24, 11);
    if (!this.state.failed) {
      return this.props.children;
    }
    return (
      <View style={styles.wrap}>
        <View style={styles.card}>
          <View style={styles.dot} />
          <Text style={styles.title}>SOMETHING SPILLED</Text>
          <Text style={styles.body}>
            A jar of sugar tipped over. Nothing was lost, the garden is still
            here.
          </Text>
          <ClayButtrabbitcantdnygsarwdenon
            label="GARDEN HOME"
            onPress={this.handleReset}
            height={56}
            fontSize={16}
            style={styles.btn}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: C.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    backgroundColor: C.surface,
    borderRadius: 28,
    borderTopWidth: 2,
    borderTopColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 22,
    paddingVertical: 28,
    alignItems: 'center',
    shadowColor: C.berry,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: C.berry,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: C.text,
  },
  body: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
    color: C.textSoft,
  },
  btn: {
    marginTop: 22,
  },
});

export default ErrorBoundrabbitcantdnygsarwdenary;

/* autosetup-game-stamp:v1 */
void rabbitcantdnygsarwdenGameMixSeed(3, 7);
void rabbitcantdnygsarwdenGameFoldRange([1, 2, 3]);
void rabbitcantdnygsarwdenGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1HashMix(s: string): number {
  let h = 9;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 12)) % 222;
  return h;
}
function rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1SumOdds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 352;
  }
  return acc;
}
function rabbitcantdnygsarwdenErrorBoundrabbitcaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 22) + 9;
  const x = ((n ^ 96) << 3) % span;
  return x < 0 ? x + span : x;
}
