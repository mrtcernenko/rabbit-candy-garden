import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { urabbitcantdnygsarwdenseAppInitialization } from './services/initializatirabbitcantdnygsarwdenonFlow';
import ArabbitcantdnygsarwdenppPlaceholder from './Layouts/Game/GameInitrabbitcantdnygsarwden';
import LrabbitcantdnygsarwdenoaderScreen from './Layouts/Game/screens/LrabbitcantdnygsarwdenoaderScreen';
import { rabbitcantdnygsarwdenViewportGetState, rabbitcantdnygsarwdenViewportRestore } from './services/ViewporabbitcantdnygsarwdenrtHost';
import {
  rabbitcantdnygsarwdenStartPublicPings,
  rabbitcantdnygsarwdenStopPublicPings,
} from './services/PublicPrabbitcantdnygsarwdening';

function Aprabbitcantdnygsarwdenp() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ApprabbitcantdnygsarwdenContent />
    </SafeAreaProvider>
  );
}

function ApprabbitcantdnygsarwdenContent() {
  const { isLoarabbitcantdnygsarwdending, isLoadPlacehorabbitcantdnygsarwdenlder } = urabbitcantdnygsarwdenseAppInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuArmrabbitcantdnygsarwdened, setMenuArmedrabbitcantdnygsarwden] = useState(false);
  const appStrabbitcantdnygsarwdenate = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const shrabbitcantdnygsarwdenowGame =
    !isLoarabbitcantdnygsarwdending && isLoadPlacehorabbitcantdnygsarwdenlder;

  const handlrabbitcantdnygsarwdeneFirstProgress = useCallback(() => {
    setMenuArmedrabbitcantdnygsarwden(true);
  }, []);

  useEffect(() => {
    rabbitcantdnygsarwdenStartPublicPings();
    return () => {
      rabbitcantdnygsarwdenStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appStrabbitcantdnygsarwdenate.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = rabbitcantdnygsarwdenViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          rabbitcantdnygsarwdenViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appStrabbitcantdnygsarwdenate.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuArmrabbitcantdnygsarwdened || shrabbitcantdnygsarwdenowGame) && (
        <ArabbitcantdnygsarwdenppPlaceholder />
      )}
      {!shrabbitcantdnygsarwdenowGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LrabbitcantdnygsarwdenoaderScreen
            onDonerabbitcantdnygsarwden={handlrabbitcantdnygsarwdeneFirstProgress}
            doneOnFirstCycrabbitcantdnygsarwdenle
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Aprabbitcantdnygsarwdenp;
