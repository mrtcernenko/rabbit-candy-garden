/**
 * Rabbit Candy Garden — app shell.
 *
 * This file is the state machine and nothing else (rule #2): a plain union of
 * screen ids with conditional rendering, no navigation library. All gameplay
 * lives in src/screens/GameScreen.tsx and src/hooks/useGameState.ts.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';

import {ErrorBoundary} from './src/components/ErrorBoundary';
import {MAX_STAGE} from './src/constants/config';
import {C} from './src/constants/theme';
import {Decoration, rewardFor} from './src/game/decorations';
import {RoundResult, stageBonus} from './src/game/scoring';
import {GameScreen} from './src/screens/GameScreen';
import {LoaderScreen} from './src/screens/LoaderScreen';
import {MenuScreen} from './src/screens/MenuScreen';
import {ResultScreen} from './src/screens/ResultScreen';
import {useGarden} from './src/hooks/usePersistedState';

type Screen = 'loader' | 'menu' | 'game' | 'result';

function App(): React.JSX.Element {
  const [screen, setScreen] = useState<Screen>('loader');
  const [runKey, setRunKey] = useState(0);
  const [result, setResult] = useState<RoundResult | null>(null);
  const [reward, setReward] = useState<Decoration | null>(null);

  const {state: garden, update, setSettings, resetAll} = useGarden();

  // Read inside the hardware-back listener, which is registered once.
  const screenRef = useRef<Screen>(screen);
  screenRef.current = screen;

  const goMenu = useCallback(() => {
    setScreen('menu');
  }, []);

  const startStage = useCallback(() => {
    setResult(null);
    setReward(null);
    setRunKey(k => k + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback(
    (r: RoundResult) => {
      let earned: Decoration | null = null;

      if (r.won) {
        const bonus = stageBonus(r.stage, r.streak);
        earned = rewardFor(r.stage);
        update({
          stage: Math.min(MAX_STAGE, r.stage + 1),
          score: garden.score + r.score + bonus,
          bestStreak: Math.max(garden.bestStreak, r.streak),
          unlocked: Math.max(garden.unlocked, r.stage),
        });
      } else {
        update({
          score: garden.score + Math.floor(r.score / 2),
          bestStreak: Math.max(garden.bestStreak, r.streak),
        });
      }

      setReward(earned);
      setResult(r);
      setScreen('result');
    },
    [garden.bestStreak, garden.score, garden.unlocked, update],
  );

  /**
   * Without this, a hardware back press on the game or result screen finishes
   * the activity and the capture walkthrough photographs the launcher.
   */
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      const current = screenRef.current;
      if (current === 'game' || current === 'result') {
        setScreen('menu');
      }
      // ALWAYS consume. Returning false on menu/loader lets Android finish the
      // activity, and the capture walkthrough photographs the launcher — a
      // Tier-1 catastrophic gate failure (08_BackScreen.png, cycle ac728784).
      return true;
    });
    return () => sub.remove();
  }, []);

  return (
    <ErrorBoundary>
      <View style={styles.root}>
        <StatusBar
          barStyle={
            screen === 'loader' || screen === 'result'
              ? 'light-content'
              : 'dark-content'
          }
          backgroundColor="transparent"
          translucent
        />

        {screen === 'loader' ? <LoaderScreen onDone={goMenu} /> : null}

        {screen === 'menu' ? (
          <MenuScreen
            garden={garden}
            onStart={startStage}
            onSettings={setSettings}
            onReset={resetAll}
          />
        ) : null}

        {screen === 'game' ? (
          <GameScreen
            key={runKey}
            stage={garden.stage}
            hintsOn={garden.settings.hints}
            onExit={goMenu}
            onGameOver={handleGameOver}
          />
        ) : null}

        {screen === 'result' && result ? (
          <ResultScreen
            result={result}
            reward={reward}
            onAgain={startStage}
            onMenu={goMenu}
          />
        ) : null}
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
});

export default App;
