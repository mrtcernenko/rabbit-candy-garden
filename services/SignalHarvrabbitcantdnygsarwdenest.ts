import { getInitialNotification, getMessaging, onMessage, onNotificationOpenedApp, onTokenRefresh } from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, Platform } from 'react-native';
import { rabbitcantdnygsarwdenInitializationRuntime, rabbitcantdnygsarwdenWaitForPushToken, rabbitcantdnygsarwdenOnMessageRecieved, rabbitcantdnygsarwdenTryOpenPushExternalUrl } from './initializarabbitcantdnygsarwdentionShared';
import { rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod, rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold, rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor, rabbitcantdnygsarwdenSignalHarvestObfV14HashMix, rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod, rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor, rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold, rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV11HashMix, rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod, rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod, rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod, rabbitcantdnygsarwdenSignalHarvestObfV9HashMix, rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod, rabbitcantdnygsarwdenSignalHarvestObfV5HashMix, rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod, rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds, rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix, rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod, rabbitcantdnygsarwdenSigObfV3SumOdds, rabbitcantdnygsarwdenSigObfV4HashMix, rabbitcantdnygsarwdenSigObfV4SumOdds, rabbitcantdnygsarwdenSignalHarveObfV1ClampMod, rabbitcantdnygsarwdenSignalHarveObfV2HashMix, rabbitcantdnygsarwdenSignalHarveObfV2SumOdds, rabbitcantdnygsarwdenFoldRange, rabbitcantdnygsarwdenSignalHarvestPart01ObfV5HashMix, rabbitcantdnygsarwdenSignalHarvestPart01ObfV5SumOdds, rabbitcantdnygsarwdenSignalHarvestPart01ObfV11HashMix, rabbitcantdnygsarwdenSignalHarvestPart02ObfV11SumOdds, rabbitcantdnygsarwdenSignalHarvestPart03ObfV11HashMix, rabbitcantdnygsarwdenSignalHarvestPart03ObfV11ClampMod, rabbitcantdnygsarwdenSignalHarvestPart01ObfV14SumOdds } from './SignalHarvesrabbitcantdnygsarwdentPart01';

import { SignalHarvestObfV23SumOddsrabbitcantdnygsarwden, SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold, SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds, SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold, SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden, SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold, SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod, rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV10HashMix, rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds, rabbitcantdnygsarwdenSignalHarvestObfV6HashMix, rabbitcantdnygsarwdenSigObfV3ClampMod, rabbitcantdnygsarwdenSignalHarveObfV1HashMix, rabbitcantdnygsarwdenSignalHarveObfV2ClampMod, rabbitcantdnygsarwdenMixSeed, rabbitcantdnygsarwdenSignalHarvestPart01ObfV5ClampMod, rabbitcantdnygsarwdenSignalHarvestPart02ObfV11ClampMod, rabbitcantdnygsarwdenSignalHarvestPart03ObfV11SumOdds, rabbitcantdnygsarwdenSignalHarvestPart01ObfV14HashMix, SignalHarvestPart02ObfV20ClamprabbitcantdnygsarwdenMod, SignalHarvestPart02ObfV2rabbitcantdnygsarwden0ByteFold, SignalHarvestPartrabbitcantdnygsarwden02ObfV21ClampMod, SignalHarvestPart02ObrabbitcantdnygsarwdenfV22ByteFold, SignalHarvesrabbitcantdnygsarwdentPart02ObfV23ClampMod, SignalHarvestPrabbitcantdnygsarwdenart02ObfV23ByteFold2, SignalHarvestParrabbitcantdnygsarwdent02ObfV24SumOdds, SignalHarvestParabbitcantdnygsarwdenrt02ObfV24ShiftXor } from './SignalrabbitcantdnygsarwdenHarvestPart02';

import { SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor, SignalHarvestPart01ObrabbitcantdnygsarwdenfV24ByteFold, SignalHarvestPart01ObrabbitcantdnygsarwdenfV25SumOdds, SignalHarvestPart01OrabbitcantdnygsarwdenbfV25ClampMod, SignalObfrabbitcantdnygsarwdenV33ByteFold } from './SignalHarvesrabbitcantdnygsarwdentPart01';
/** Ensure the foreground FCM handler is registered exactly once. */
let rabbitcantdnygsarwdenForegroundHandlerRegistered = false;
function rabbitcantdnygsarwdenEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  if (rabbitcantdnygsarwdenForegroundHandlerRegistered) {
    return;
  }
  rabbitcantdnygsarwdenForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

      void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
      void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
        void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
        void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
        void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
    void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);    void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
    void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
    void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
    void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
    void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
    void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
    void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
    void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

      void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
      await rabbitcantdnygsarwdenOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
    rabbitcantdnygsarwdenForegroundHandlerRegistered = false;
      }
}

export async function rabbitcantdnygsarwdenGetAdvertisingId(): Promise<string> {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { Pimakupisik } = NativeModules;

    if (!Pimakupisik) {
            return '';
    }
    const adId: string = await Pimakupisik.sipaxegoqov();
    return adId || '';
  } catch (error) {
    void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
        return '';
  }
}

export async function rabbitcantdnygsarwdenPushStep(): Promise<void> {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();

    rabbitcantdnygsarwdenEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

      void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
      void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
        void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
        void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
        void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
    void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);    void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
    void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
    void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
    void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
    void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
    void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
    void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
    void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

      void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
            rabbitcantdnygsarwdenInitializationRuntime.pushTorabbitcantdnygsarwdenken = token;
    });

    const token = await rabbitcantdnygsarwdenWaitForPushToken(10);

    if (token) {
      rabbitcantdnygsarwdenInitializationRuntime.pushTorabbitcantdnygsarwdenken = token;
    }
  } catch (error) {
    void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
      }
}

export async function rabbitcantdnygsarwdenReferrerStep(): Promise<void> {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

      void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
      void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
        void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
        void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
        void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
    void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);    void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
    void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
    void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
    void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
    void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
    void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
    void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
    void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

      void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

          void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
          void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
            void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
            void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
            void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
        void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);        void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
        void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
        void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
        void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
        void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
        void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
        void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
        void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
        void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
        void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
        void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
        void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
        void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
        void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
        void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
        void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
        void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

          void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
          void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
          void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
          void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
          void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
          void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
          void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
          void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
          void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
          void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
          void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
          void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
          void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
          void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
          void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            rabbitcantdnygsarwdenInitializationRuntime.installRefrabbitcantdnygsarwden = info.installReferrer;
                      } else {
            rabbitcantdnygsarwdenInitializationRuntime.installRefrabbitcantdnygsarwden = '';
            if (error) {
                          } else {
                          }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
        void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
        void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
        void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
        void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
        void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

                    rabbitcantdnygsarwdenInitializationRuntime.installRefrabbitcantdnygsarwden = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);

        rabbitcantdnygsarwdenInitializationRuntime.installRefrabbitcantdnygsarwden = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function rabbitcantdnygsarwdenProcessDirectDeepLink(url: string): void {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (rabbitcantdnygsarwdenInitializationRuntime.firstParameterrabbitcantdnygsarwdenReceived) return;
  rabbitcantdnygsarwdenInitializationRuntime.firstParameterrabbitcantdnygsarwdenReceived = true;
  rabbitcantdnygsarwdenInitializationRuntime.FirabbitcantdnygsarwdennlOneLink = url.trim();
  rabbitcantdnygsarwdenInitializationRuntime.FinlNamingrabbitcantdnygsarwden = '';
}

export async function rabbitcantdnygsarwdenDataCollectStep(): Promise<void> {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    rabbitcantdnygsarwdenInitializationRuntime.firstParameterrabbitcantdnygsarwdenReceived = false;
    rabbitcantdnygsarwdenInitializationRuntime.oranicWaitingrabbitcantdnygsarwden = false;
    rabbitcantdnygsarwdenInitializationRuntime.orabbitcantdnygsarwdenrgnicWaitResolve = null;
    rabbitcantdnygsarwdenInitializationRuntime.DevrabbitcantdnygsarwdeniceId = '';
    rabbitcantdnygsarwdenInitializationRuntime.FirabbitcantdnygsarwdennlOneLink = '';
    rabbitcantdnygsarwdenInitializationRuntime.FinlNamingrabbitcantdnygsarwden = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      rabbitcantdnygsarwdenProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

      void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
      void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
        void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
        void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
        void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
    void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);    void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
    void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
    void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
    void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
    void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
    void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
    void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
    void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

      void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
      void rabbitcantdnygsarwdenMixSeed(3, 7);
      void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
      void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

      void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        rabbitcantdnygsarwdenProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !rabbitcantdnygsarwdenInitializationRuntime.firstParameterrabbitcantdnygsarwdenReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

        void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
        void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
          void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
          void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
          void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
      void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);      void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
      void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
      void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
      void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
      void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
      void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
      void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
      void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
      void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
      void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
      void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
      void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
      void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
      void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
      void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
      void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
      void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

        void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
        void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
        void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

          void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
          void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
            void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
            void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
            void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
        void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);        void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
        void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
        void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
        void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
        void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
        void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
        void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
        void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
        void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
        void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
        void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
        void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
        void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
        void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
        void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
        void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
        void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

        void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
        void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
        void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    rabbitcantdnygsarwdenInitializationRuntime.FinlNamingrabbitcantdnygsarwden = '';
  } catch (error) {
    void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
    rabbitcantdnygsarwdenInitializationRuntime.DevrabbitcantdnygsarwdeniceId = '';
    rabbitcantdnygsarwdenInitializationRuntime.FirabbitcantdnygsarwdennlOneLink = '';
    rabbitcantdnygsarwdenInitializationRuntime.FinlNamingrabbitcantdnygsarwden = '';
  }
}

let rabbitcantdnygsarwdenNotificationOpenHandlerRegistered = false;
function rabbitcantdnygsarwdenEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  if (rabbitcantdnygsarwdenNotificationOpenHandlerRegistered) {
    return;
  }
  rabbitcantdnygsarwdenNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

      void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
      void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
        void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
        void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
        void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
    void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);    void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
    void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
    void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
    void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
    void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
    void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
    void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
    void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
    void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
    void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
    void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

      void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
      void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
      void rabbitcantdnygsarwdenMixSeed(3, 7);
      void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
      void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

      void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
      void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await rabbitcantdnygsarwdenTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
    rabbitcantdnygsarwdenNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function rabbitcantdnygsarwdenSetupPushOpenHandlers(): Promise<void> {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    rabbitcantdnygsarwdenEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await rabbitcantdnygsarwdenTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
    void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface rabbitcantdnygsarwdenParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function rabbitcantdnygsarwdenParallelCollectStep(): Promise<rabbitcantdnygsarwdenParallelCollectResult> {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(67, 42);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(29, 44);
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold("7c1");
void rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix("jgj4lo");
void SignalObfV33rabbitcantdnygsarwdenShiftXor(3, 74);
void SignalObfrabbitcantdnygsarwdenV33ByteFold("p2");
void SignrabbitcantdnygsarwdenalObfV33HashMix("c1");
void SignarabbitcantdnygsarwdenlObfV33SumOdds([3, 34, 5]);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(41, 72);
void rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(51, 58);
void rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold("apid");
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignalHaObfV28Mirabbitcantdnygsarwdenx(8, 3);
void SirabbitcantdnygsarwdengnalHaObfV28Fold("spriss");
void SignalHarvestObrabbitcantdnygsarwdenfV27ShiftXor(52, 15);
void SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold('a8');

  void SignalHarrabbitcantdnygsarwdenvestObfV26HashMix('w0');
  void SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds([11, 20, 7]);
  void SignalHarvestObfV25SumOddsrabbitcantdnygsarwden([28, 37, 8]);
  void SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(48, 18);
  void SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(57, 53);
  void SirabbitcantdnygsarwdengnalHarvestObfV24HashMix('epvc');
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');
void SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(50, 8);
void SignalHarvestObfV19ShiftXorrabbitcantdnygsarwden(84, 82);void SignarabbitcantdnygsarwdenlHarvestObfV18ByteFold('3mpw');
void SigrabbitcantdnygsarwdennalHarvestObfV18HashMix('r6');
void SignarabbitcantdnygsarwdenlHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(63, 5);
void SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(71, 76);
void rabbitcantdnygsarwdenSignalHarvestObfV16SumOdds([15, 4, 5]);
void rabbitcantdnygsarwdenSignalHarvestObfV16ClampMod(47, 73);
void rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(5, 18);
void rabbitcantdnygsarwdenSignalHarvestObfV16ByteFold('r7');
void rabbitcantdnygsarwdenSignalHarvestObfV15ShiftXor(28, 78);
void rabbitcantdnygsarwdenSignalHarvestObfV14HashMix('97rz');
void rabbitcantdnygsarwdenSignalHarvestObfV14SumOdds([14, 11, 16]);
void rabbitcantdnygsarwdenSignalHarvestObfV14ClampMod(81, 8);
void rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(4, 20);
void rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(5, 53);
void rabbitcantdnygsarwdenSignalHarvestObfV13ShiftXor(44, 27);
void rabbitcantdnygsarwdenSignalHarvestObfV13ByteFold('jgbs');
  void rabbitcantdnygsarwdenSignalHarvestObfV12HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV11HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV7HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV8HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV9HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV10HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenSignalHarvestObfV5HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarvestPart01ObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV3HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenSigObfV4HashMix('xy');
  void rabbitcantdnygsarwdenSigObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSigObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenSignalHarveObfV1HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenSignalHarveObfV2HashMix('xy');
  void rabbitcantdnygsarwdenSignalHarveObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenSignalHarveObfV2ClampMod(7, 5);
  await rabbitcantdnygsarwdenReferrerStep();

  const [, advertisingId] = await Promise.all([
    rabbitcantdnygsarwdenPushStep(),
    rabbitcantdnygsarwdenGetAdvertisingId(),
    rabbitcantdnygsarwdenDataCollectStep(),
  ]);

  rabbitcantdnygsarwdenInitializationRuntime.adIrabbitcantdnygsarwdend = advertisingId ?? '';

  return {
    advertisingId: rabbitcantdnygsarwdenInitializationRuntime.adIrabbitcantdnygsarwdend,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void rabbitcantdnygsarwdenSignalHarvestPart01ObfV5HashMix('xy');
void rabbitcantdnygsarwdenSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void rabbitcantdnygsarwdenSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function rabbitcantdnygsarwdenSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function rabbitcantdnygsarwdenSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function rabbitcantdnygsarwdenSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void rabbitcantdnygsarwdenSignalHarvestPart01ObfV11HashMix('xy');
void rabbitcantdnygsarwdenSignalHarvestPart01ObfV11SumOdds([1, 3, 5]);
void rabbitcantdnygsarwdenSignalHarvestPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void rabbitcantdnygsarwdenSignalHarvestPart02ObfV11HashMix('xy');
void rabbitcantdnygsarwdenSignalHarvestPart02ObfV11SumOdds([1, 3, 5]);
void rabbitcantdnygsarwdenSignalHarvestPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void rabbitcantdnygsarwdenSignalHarvestPart03ObfV11HashMix('xy');
void rabbitcantdnygsarwdenSignalHarvestPart03ObfV11SumOdds([1, 3, 5]);
void rabbitcantdnygsarwdenSignalHarvestPart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void rabbitcantdnygsarwdenSignalHarvestPart01ObfV14HashMix('hm');
void rabbitcantdnygsarwdenSignalHarvestPart01ObfV14SumOdds([11, 22, 3]);

/* obfuscation-batch:v14 */
void rabbitcantdnygsarwdenSignalHarvestPart02ObfV14SumOdds([21, 29, 13]);
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void SignalHarvestObfV21ByteFrabbitcantdnygsarwdenold('sk');
void SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix('65k');

/* obfuscation-batch:v22 */
void SignrabbitcantdnygsarwdenalHarvestObfV22ByteFold('f7rt');
void SignalHarrabbitcantdnygsarwdenvestObfV22HashMix('c82w');
void SignalrabbitcantdnygsarwdenHarvestObfV22SumOdds([29, 8, 24]);
void SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(59, 53);
/* obfuscation-batch:v23 */
void SignalHarvestObfV23SumOddsrabbitcantdnygsarwden([16, 23, 14]);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v17 */
function SignalHarvestPart02ObfV17SumOrabbitcantdnygsarwdendds(nums: number[]): number {
  let acc = 91;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 503;
  }
  return acc;
}
function SignalHarvestPart02ObfV17ClamrabbitcantdnygsarwdenpMod(n: number, m: number): number {

      const span = (m % 34) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function SignalHarvestParabbitcantdnygsarwdenrt02ObfV18ShiftXor(n: number, k: number): number {

        const x = (n ^ k) << 6;
  return (x ^ 143) & 37374;
}
/* obfuscation-batch:v19 */
function SignalHarvestPart02ObrabbitcantdnygsarwdenfV19ShiftXor(n: number, k: number): number {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);

  const x = (n ^ k) << 5;
  return (x ^ 128) & 8971;
}
function SrabbitcantdnygsarwdenignalHarvestPart02ObfV19ByteFold(s: string): number {
  let x = 64;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 138;
  return x & 8976;
}
function SignalHarvestPart02ObfV19HashrabbitcantdnygsarwdenMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 747;
  return h;
}
function SignalrabbitcantdnygsarwdenHarvestPart02ObfV19SumOdds(nums: number[]): number {
let acc = 25;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 767;
  }
  return acc;
}
/* obfuscation-batch:v20 */
void SignalHarvestPart02ObfV20ClamprabbitcantdnygsarwdenMod(15, 62);
void SignalHarvestPart02ObrabbitcantdnygsarwdenfV20ShiftXor(34, 44);
void SignalHarvestPart02ObfV2rabbitcantdnygsarwden0ByteFold('g5s');
void SignalHarvestPart02ObfV20HasrabbitcantdnygsarwdenhMix('bs');

/* obfuscation-batch:v21 */

void SignalHarvestPartrabbitcantdnygsarwden02ObfV21ClampMod(16, 17);
void SignalHarvestPart02ObrabbitcantdnygsarwdenfV21ShiftXor(74, 77);

/* obfuscation-batch:v22 */
void SignalHarvestPart02ObrabbitcantdnygsarwdenfV22ByteFold('7tp');
void SignalHarvestrabbitcantdnygsarwdenPart02ObfV22HashMix('53zr');
/* obfuscation-batch:v23 */
void SignalHarvesrabbitcantdnygsarwdentPart02ObfV23ClampMod(84, 89);
void SignalHarvestPart02ObfV23ShiftrabbitcantdnygsarwdenXor1(89, 60);
void SignalHarvestPrabbitcantdnygsarwdenart02ObfV23ByteFold2('t3');
void SignrabbitcantdnygsarwdenalHarvestPart02ObfV24HashMix('sey9');
void SignalHarvestParrabbitcantdnygsarwdent02ObfV24SumOdds([12, 63, 34]);
void SirabbitcantdnygsarwdengnalHarvestPart02ObfV24ClampMod(76, 36);
void SignalHarvestParabbitcantdnygsarwdenrt02ObfV24ShiftXor(35, 72);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v17 */
function SignalHarvestPart01ObfV17ClrabbitcantdnygsarwdenampMod(n: number, m: number): number {

              const span = (m % 44) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarrabbitcantdnygsarwdenvestPart01ObfV17ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
  return (x ^ 184) & 4634;
}
function SignalHarvestPart0rabbitcantdnygsarwden1ObfV17ByteFold(s: string): number {
  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 62;
  return x & 31693;
}
/* obfuscation-batch:v18 */
function SignalHarvestParabbitcantdnygsarwdenrt01ObfV18HashMix(s: string): number {

  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 646;
  return h;
}
function SignalHarvestPart01ObfV18SumOddrabbitcantdnygsarwdens(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 581;
  }
  return acc;
}
function SignalHarvestPart01ObfV18ClampMorabbitcantdnygsarwdend(n: number, m: number): number {
      const span = (m % 24) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvestParabbitcantdnygsarwdenrt01ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 73) & 12846;
}
/* obfuscation-batch:v19 */
function SignalHarrabbitcantdnygsarwdenvestPart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 131) & 11443;
}
function SignalHarabbitcantdnygsarwdenrvestPart01ObfV19ByteFold(s: string): number {

  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 141;
  return x & 11448;
}
/* obfuscation-batch:v20 */
void SignalHarvestPart01ObfV2rabbitcantdnygsarwden0ByteFold('27');

/* obfuscation-batch:v21 */

void SignalHarvestPart01ObfV21HashMrabbitcantdnygsarwdenix('va');
void SignalHarvestPart01ObfV21SrabbitcantdnygsarwdenumOdds([23, 18, 25]);
void SignalHarvrabbitcantdnygsarwdenestPart01ObfV21ClampMod(31, 72);

/* obfuscation-batch:v22 */
void SignalHarvestPart0rabbitcantdnygsarwden1ObfV22ShiftXor(15, 30);
/* obfuscation-batch:v23 */
void SirabbitcantdnygsarwdengnalHarvestPart01ObfV23ClampMod(40, 49);
void SignalHarvestPart01ObfV23ShiftXorrabbitcantdnygsarwden1(38, 32);
void SignalHarvestPart01ObrabbitcantdnygsarwdenfV24ByteFold('252cy');
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

void SignarabbitcantdnygsarwdenlHarvestPart01ObfV25HashMix('j3');
void SignalHarvestPart01ObrabbitcantdnygsarwdenfV25SumOdds([3, 17, 10]);
void SignalHarvestPart01OrabbitcantdnygsarwdenbfV25ClampMod(25, 31);

/* obfuscation-batch:v26 */
function SignalHarvestPart01ObrabbitcantdnygsarwdenfV26HashMix(s: string): number {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
  let h = 62;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 596;
  return h;
}

function SignalHarvestPart01ObfV26SumOdrabbitcantdnygsarwdends(nums: number[]): number {
  let acc = 27;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 239;
  }
  return acc;
}

function SignalHarverabbitcantdnygsarwdenstPart01ObfV26ClampMod(n: number, m: number): number {
  const span = (m % 56) + 14;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v27 */
function SignalHarvestPart01ObfV2rabbitcantdnygsarwden7ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 150) & 49042;
}

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenSignalHarvestowebrObfV34ClampMod(n: number, m: number): number {
  const span = (m % 61) + 8;
  const x = ((n ^ 81) << 6) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenSignalHarvestowebrObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 191) & 45752;
}
function rabbitcantdnygsarwdenSignalHarvestowebrObfV34ByteFold(s: string): number {
  let x = 42;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 25650;
  return x;
}
function rabbitcantdnygsarwdenSignalHarvestowebrObfV34HashMix(s: string): number {
  let h = 30;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 8)) % 559;
  return h;
}

function SignalrabbitcantdnygsarwdenHarvestObfV17ShiftXor(n: number, k: number): number {
        const x = (n ^ k) << 1;
return (x ^ 122) & 14366;
}

function SigrabbitcantdnygsarwdennalHarvestObfV18HashMix(s: string): number {
let h = 53;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 39) % 578;
return h;
}

function SignalHarabbitcantdnygsarwdenrvestObfV18ClampMod(n: number, m: number): number {
const span = (m % 37) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

function SignalHarvestObfV20ShrabbitcantdnygsarwdeniftXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 15) & 16882;
}

function SignalHarvestOrabbitcantdnygsarwdenbfV21HashMix(s: string): number {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
let h = 66;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 479;
return h;
}

function SignalHarrabbitcantdnygsarwdenvestObfV22HashMix(s: string): number {
let h = 59;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 670;
return h;
}

function SignalHarvestOrabbitcantdnygsarwdenbfV22ClampMod(n: number, m: number): number {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
const span = (m % 42) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

function SirabbitcantdnygsarwdengnalHarvestObfV24HashMix(s: string): number {
let h = 50;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 217;
return h;
}

function rabbitcantdnygsarwdenSignalHarvestObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 163) & 4216;
}

function rabbitcantdnygsarwdenSignalHarvestPart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function rabbitcantdnygsarwdenSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function rabbitcantdnygsarwdenSignalHarvestObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function rabbitcantdnygsarwdenClampSpan(n: number, lo: number, hi: number): number {
      
return n < lo ? lo : n > hi ? hi : n;
}

function rabbitcantdnygsarwdenSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function rabbitcantdnygsarwdenSignalHarvestPart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

function rabbitcantdnygsarwdenSignalHarvestObfV13ClampMod(n: number, m: number): number {
const span = (m % 64) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

function rabbitcantdnygsarwdenSignalHarvestObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function rabbitcantdnygsarwdenSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function rabbitcantdnygsarwdenSignalHarvestObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

function rabbitcantdnygsarwdenSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function rabbitcantdnygsarwdenSignalHarvestObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function rabbitcantdnygsarwdenSignalHarvestPart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function rabbitcantdnygsarwdenSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function rabbitcantdnygsarwdenSignalHarvestPart02ObfV14SumOdds(nums: number[]): number {
let acc = 50;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 32) % 757;
}
return acc;
}

function rabbitcantdnygsarwdenSignalHarvestObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 149) & 23102;
}

function SignalHarvestPart02ObrabbitcantdnygsarwdenfV20ShiftXor(n: number, k: number): number {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
      const x = (n ^ k) << 3;
return (x ^ 215) & 32668;
}

function SignalHarvestPart02ObfV20HasrabbitcantdnygsarwdenhMix(s: string): number {
let h = 32;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 755;
return h;
}

function SignalHarvestPart02ObrabbitcantdnygsarwdenfV21ShiftXor(n: number, k: number): number {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
      const x = (n ^ k) << 1;
return (x ^ 52) & 61013;
}

function SignalHarvestrabbitcantdnygsarwdenPart02ObfV22HashMix(s: string): number {
let h = 86;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 34) % 405;
return h;
}

function SignalHarvestPart02ObfV23ShiftrabbitcantdnygsarwdenXor1(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 132) & 16166;
}

function SignrabbitcantdnygsarwdenalHarvestPart02ObfV24HashMix(s: string): number {

let h = 71;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 15) % 636;
return h;
}

function SirabbitcantdnygsarwdengnalHarvestPart02ObfV24ClampMod(n: number, m: number): number {

const span = (m % 28) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}


/* obfuscation-batch:v25 */
function SignalHarvestPart01ObfVrabbitcantdnygsarwden25ByteFold(s: string): number {
void rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(28, 31);
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 18587;
  return x;
}

function SignarabbitcantdnygsarwdenlHarvestPart01ObfV25HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 666;
  return h;
}
void SignalHarvestPart01ObfVrabbitcantdnygsarwden25ByteFold('e4');
void SignarabbitcantdnygsarwdenlHarvestPart01ObfV25HashMix('l3');


/* obfuscation-batch:v26 */
function SignalHarvestPart01ObfV26ShiftrabbitcantdnygsarwdenXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 70) & 48013;
}

function SignalHarvesrabbitcantdnygsarwdentPart01ObfV26ByteFold(s: string): number {
  let x = 51;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 43863;
  return x;
}


/* obfuscation-batch:v27 */
function SignalHarvestPart01ObfV27ByteFrabbitcantdnygsarwdenold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 13894;
  return x;
}
function SignalHarverabbitcantdnygsarwdenstPart01ObfV27HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 12)) % 388;
  return h;
}
function SignarabbitcantdnygsarwdenlHarvestPart01ObfV27SumOdds(nums: number[]): number {
  let acc = 54;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 463;
  }
  return acc;
}
function SignalHarverabbitcantdnygsarwdenstPart01ObfV27ClampMod(n: number, m: number): number {
  const span = (m % 47) + 10;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v28 */
function rabbitcantdnygsarwdenSignalHarvprissmgecmsgallierObfV28Mix(a: number, b: number): number {
  const base = 47;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenSignalHarvprissmgecmsgallierObfV28Fold(text: string): number {
  let acc = 47;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function rabbitcantdnygsarwdenSignalHarvpzurisymgeqmgallseObfV29Mix(a: number, b: number): number {
  const base = 21;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenSignalHarvpzurisymgeqmgallseObfV29Fold(text: string): number {
  let acc = 21;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function rabbitcantdnygsarwdenSignalHarvdgpnrismgemgalleryObfV30Mix(a: number, b: number): number {
  const base = 30;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenSignalHarvdgpnrismgemgalleryObfV30Fold(text: string): number {
  let acc = 30;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdenSignalHarvpmvqkrmwObfV31SumOdds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 460;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdenSignalHarvichyikowObfV32ByteFold(s: string): number {
  let x = 83;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 35952;
  return x;
}
function rabbitcantdnygsarwdenSignalHarvichyikowObfV32HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 697;
  return h;
}
function rabbitcantdnygsarwdenSignalHarvichyikowObfV32SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 232;
  }
  return acc;
}
function rabbitcantdnygsarwdenSignalHarvichyikowObfV32ClampMod(n: number, m: number): number {
  const span = (m % 43) + 12;
  const x = ((n ^ 116) << 6) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v33 */
function rabbitcantdnygsarwdenSignalHarvtxvwrkrxObfV33ClampMod(n: number, m: number): number {
  const span = (m % 67) + 12;
  const x = ((n ^ 186) << 1) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenSignalHarvtxvwrkrxObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 200) & 52044;
}
function rabbitcantdnygsarwdenSignalHarvtxvwrkrxObfV33ByteFold(s: string): number {
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 45171;
  return x;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenSignalHarvtowebrnsObfV34ClampMod(n: number, m: number): number {
  const span = (m % 20) + 9;
  const x = ((n ^ 40) << 3) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenSignalHarvtowebrnsObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 146) & 29662;
}
function rabbitcantdnygsarwdenSignalHarvtowebrnsObfV34ByteFold(s: string): number {
  let x = 11;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) & 35766;
  return x;
}

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdenSignalHarvrabbitcaObfV35ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 198) & 54429;
}

/* obfuscation-repair-stubs */

function SignalObfV33rabbitcantdnygsarwdenShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function SignrabbitcantdnygsarwdenalObfV33HashMix(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function SignarabbitcantdnygsarwdenlObfV33SumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function rabbitcantdnygsarwdenSignalHarichyikowrObfV32ClampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function rabbitcantdnygsarwdenSignalHarichyikowrObfV32ShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function rabbitcantdnygsarwdenSignalHarvepmvqkrmObfV31ByteFold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Mix(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function rabbitcantdnygsarwdenSignalHarvedgpnrismgemgallerObfV30Fold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Mix(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function rabbitcantdnygsarwdenSignalHapzurisymgeqmgallsefrObfV29Fold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function SignalHaObfV28Mirabbitcantdnygsarwdenx(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function SirabbitcantdnygsarwdengnalHaObfV28Fold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function SignalrabbitcantdnygsarwdenHarvestObfV27ByteFold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function SignalHarrabbitcantdnygsarwdenvestObfV26HashMix(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function SignalHarvestObfV26rabbitcantdnygsarwdenSumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function SignalHarvestObfV25SumOddsrabbitcantdnygsarwden(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function SignalHarvestObfV25ClarabbitcantdnygsarwdenmpMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function SigrabbitcantdnygsarwdennalHarvestObfV25ShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function SignalHarvestPart01ObfV2rabbitcantdnygsarwden0ByteFold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function SignalHarvestPart01ObfV21HashMrabbitcantdnygsarwdenix(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function SignalHarvestPart01ObfV21SrabbitcantdnygsarwdenumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function SignalHarvrabbitcantdnygsarwdenestPart01ObfV21ClampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function SignalHarvestPart0rabbitcantdnygsarwden1ObfV22ShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function SirabbitcantdnygsarwdengnalHarvestPart01ObfV23ClampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function SignalHarvestPart01ObfV23ShiftXorrabbitcantdnygsarwden1(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}
