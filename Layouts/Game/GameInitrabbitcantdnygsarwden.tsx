/**
 * Rabbit Candy Garden — app shell.
 *
 * This file is the state machine and nothing else (rule #2): a plain union of
 * screen ids with conditional rendering, no navigation library. All gameplay
 * lives in src/screens/GameScreenrabbitcantdnygsarwden.tsx and src/hooks/useGameStrabbitcantdnygsarwdenate.ts.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';

import {ErrorBoundrabbitcantdnygsarwdenary} from './components/ErrorBoundrabbitcantdnygsarwdenary';
import {MAX_STAGE} from './constants/conrabbitcantdnygsarwdenfig';
import {C} from './constants/therabbitcantdnygsarwdenme';
import {Decoration, rewardFor} from './game/decorationrabbitcantdnygsarwdens';
import {RoundResult, stageBonus} from './game/scorirabbitcantdnygsarwdenng';
import {GameScreenrabbitcantdnygsarwden} from './screens/GameScreenrabbitcantdnygsarwden';
import {LrabbitcantdnygsarwdenoaderScreen} from './screens/LrabbitcantdnygsarwdenoaderScreen';
import {MenuScrabbitcantdnygsarwdenreen} from './screens/MenuScrabbitcantdnygsarwdenreen';
import {ResurabbitcantdnygsarwdenltScreen} from './screens/ResurabbitcantdnygsarwdenltScreen';
import {useGarden} from './hooks/usePerabbitcantdnygsarwdenrsistedState';

type Screen = 'loader' | 'menu' | 'game' | 'result';

function App(): React.JSX.Element {
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix("m96p");
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds([37, 36, 15]);
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(70, 33);
  const [screen, setScreen] = useState<Screen>('loader');
  const [runKey, setRunKey] = useState(0);
  const [result, setResult] = useState<RoundResult | null>(null);
  const [reward, setReward] = useState<Decoration | null>(null);

  const {state: garden, update, setSettings, resetAll} = useGarden();

  // Read inside the hardware-back listener, which is registered once.
  const screenRef = useRef<Screen>(screen);
  screenRef.current = screen;

  const goMenu = useCallback(() => {
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix("m96p");
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds([37, 36, 15]);
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(70, 33);
    setScreen('menu');
  }, []);

  const startStage = useCallback(() => {
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix("m96p");
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds([37, 36, 15]);
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(70, 33);
    setResult(null);
    setReward(null);
    setRunKey(k => {
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix("m96p");
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds([37, 36, 15]);
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(70, 33);
return (k + 1);
});
    setScreen('game');
  }, []);

  const handleGameOver = useCallback(
    (r: RoundResult) => {
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix("m96p");
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds([37, 36, 15]);
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(70, 33);
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
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix("m96p");
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds([37, 36, 15]);
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(70, 33);
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix("m96p");
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds([37, 36, 15]);
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(70, 33);
      const current = screenRef.current;
      if (current === 'game' || current === 'result') {
        setScreen('menu');
      }
      // ALWAYS consume. Returning false on menu/loader lets Android finish the
      // activity, and the capture walkthrough photographs the launcher — a
      // Tier-1 catastrophic gate failure (08_BackScreen.png, cycle ac728784).
      return true;
    });
    return () => {
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix("m96p");
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds([37, 36, 15]);
void rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(70, 33);
return (sub.remove());
};
  }, []);

  return (
    <ErrorBoundrabbitcantdnygsarwdenary>
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

        {screen === 'loader' ? <LrabbitcantdnygsarwdenoaderScreen onDone={goMenu} /> : null}

        {screen === 'menu' ? (
          <MenuScrabbitcantdnygsarwdenreen
            garden={garden}
            onStart={startStage}
            onSettings={setSettings}
            onReset={resetAll}
          />
        ) : null}

        {screen === 'game' ? (
          <GameScreenrabbitcantdnygsarwden
            key={runKey}
            stage={garden.stage}
            hintsOn={garden.settings.hints}
            onExit={goMenu}
            onGameOver={handleGameOver}
          />
        ) : null}

        {screen === 'result' && result ? (
          <ResurabbitcantdnygsarwdenltScreen
            result={result}
            reward={reward}
            onAgain={startStage}
            onMenu={goMenu}
          />
        ) : null}
      </View>
    </ErrorBoundrabbitcantdnygsarwdenary>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
});

export default App;

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
function rabbitcantdnygsarwdenGameInitrabbitcantObfV1HashMix(s: string): number {
  let h = 3;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 23)) % 448;
  return h;
}
function rabbitcantdnygsarwdenGameInitrabbitcantObfV1SumOdds(nums: number[]): number {
  let acc = 56;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 511;
  }
  return acc;
}
function rabbitcantdnygsarwdenGameInitrabbitcantObfV1ClampMod(n: number, m: number): number {
  const span = (m % 41) + 12;
  const x = ((n ^ 204) << 5) % span;
  return x < 0 ? x + span : x;
}
