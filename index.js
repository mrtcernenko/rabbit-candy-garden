/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Aprabbitcantdnygsarwdenp from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Aprabbitcantdnygsarwdenp);

setImmediate(() => {
  const { getMessaging, setBackgroundMessageHandler } = require('@react-native-firebase/messaging');
  const { rabbitcantdnygsarwdenOnMessageRecieved } = require('./services/initializarabbitcantdnygsarwdentionShared');
  const messaging = getMessaging();
  setBackgroundMessageHandler(messaging, async remoteMessage => {
    await rabbitcantdnygsarwdenOnMessageRecieved(remoteMessage);
  });
});
