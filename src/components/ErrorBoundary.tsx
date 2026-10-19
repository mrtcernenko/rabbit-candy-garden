import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/theme';
import {ClayButton} from './ClayButton';

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
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {failed: false};

  static getDerivedStateFromError(): State {
    return {failed: true};
  }

  handleReset = () => {
    this.setState({failed: false});
  };

  render() {
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
          <ClayButton
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

export default ErrorBoundary;
