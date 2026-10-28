import { Utrabbitcantdnygsarwdenils, rabbitcantdnygsarwdenSendInitPayload, rabbitcantdnygsarwdenNormalizeWorkerBaseUrl } from './UtilServicerabbitcantdnygsarwden';
import { rabbitcantdnygsarwdenEncrypt as cryptoEncrypt, rabbitcantdnygsarwdenDecrypt as cryptoDecrypt } from './CryptoServrabbitcantdnygsarwdenice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finKrabbitcantdnygsarwdeney } from './constants/constrabbitcantdnygsarwdenntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { InitialrabbitcantdnygsarwdenizationState, rabbitcantdnygsarwdenInitTarget, rabbitcantdnygsarwdenAppenndSendId, rabbitcantdnygsarwdenGetAndroidId, rabbitcantdnygsarwdenGetAndroidUserAAgent, rabbitcantdnygsarwdenGetAppIdenier, rabbitcantdnygsarwdenGetAppVersion, rabbitcantdnygsarwdenInitializationRuntime } from './initializarabbitcantdnygsarwdentionShared';
import { rabbitcantdnygsarwdenViewportShow } from './ViewporabbitcantdnygsarwdenrtHost';
import { rabbitcantdnygsarwdenAssembleIntake, rabbitcantdnygsarwdenMapInitResponse } from './rabbitcantdnygsarwdenCfProtocol';
import { rabbitcantdnygsarwdenOfferResolveObfV16SumOdds, rabbitcantdnygsarwdenOfferResolveObfV16ShiftXor, rabbitcantdnygsarwdenOfferResolveObfV15HashMix, rabbitcantdnygsarwdenOfferResolveObfV14ByteFold, rabbitcantdnygsarwdenOfferResolveObfV14SumOdds, rabbitcantdnygsarwdenOfferResolveObfV13HashMix, rabbitcantdnygsarwdenOfferResolveObfV13ClampMod, rabbitcantdnygsarwdenOfferResolveObfV12SumOdds, rabbitcantdnygsarwdenOfferResolveObfV11HashMix, rabbitcantdnygsarwdenOfferResolveObfV11ClampMod, rabbitcantdnygsarwdenOfferResolveObfV7HashMix, rabbitcantdnygsarwdenOfferResolveObfV7SumOdds, rabbitcantdnygsarwdenOfferResolveObfV7ClampMod, rabbitcantdnygsarwdenOfferResolveObfV9HashMix, rabbitcantdnygsarwdenOfferResolveObfV9SumOdds, rabbitcantdnygsarwdenOfferResolveObfV9ClampMod, rabbitcantdnygsarwdenOfferResolveObfV5HashMix, rabbitcantdnygsarwdenOfferResolveObfV5SumOdds, rabbitcantdnygsarwdenOfferResolveObfV5ClampMod, rabbitcantdnygsarwdenOffObfV3HashMix, rabbitcantdnygsarwdenOffObfV4SumOdds, rabbitcantdnygsarwdenOfferResolvObfV1ClampMod, rabbitcantdnygsarwdenOfferResolvObfV2HashMix, rabbitcantdnygsarwdenOfferResolvObfV2SumOdds, rabbitcantdnygsarwdenOfferResolvObfV2ClampMod, rabbitcantdnygsarwdenOfferResolvePart01ObfV11HashMix, rabbitcantdnygsarwdenOfferResolvePart01ObfV11ClampMod, rabbitcantdnygsarwdenOfferResolvePart02ObfV11HashMix, rabbitcantdnygsarwdenOfferResolvePart02ObfV11ClampMod, rabbitcantdnygsarwdenOfferResolvePart03ObfV11HashMix, rabbitcantdnygsarwdenOfferResolvePart03ObfV11ClampMod, rabbitcantdnygsarwdenOfferResolvePart01ObfV15ByteFold, rabbitcantdnygsarwdenOfferResolvePart01ObfV15SumOdds, rabbitcantdnygsarwdenOfferResolvePart02ObfV15ClampMod, rabbitcantdnygsarwdenOfferResolvePart03ObfV15ClampMod } from './OfferResolrabbitcantdnygsarwdenvePart01';
// autosetup-split-begin
import { OfferResolveObfrabbitcantdnygsarwdenV27ClampMod, OfferResolverabbitcantdnygsarwdenObfV27ShiftXor, OfferResolvePart02ObfV20ShiftXorrabbitcantdnygsarwden, OfferResoObfV30Mirabbitcantdnygsarwdenx, OfferResoObfV3rabbitcantdnygsarwden0Fold, rabbitcantdnygsarwdenOpmvqkrmwismgemgalObfV31HashMix, rabbitcantdnygsarwdenOfferResoichyikowrObfV32ShiftXor, rabbitcantdnygsarwdenOfferResoichyikowrObfV32ByteFold, rabbitcantdnygsarwdenOfferResoichyikowrObfV32HashMix, rabbitcantdnygsarwdenOfferResoichyikowrObfV32SumOdds, OfferRerabbitcantdnygsarwdensolveObfV24HashMix, OfferResolveObfV25ByteFrabbitcantdnygsarwdenold, OfferResolveOrabbitcantdnygsarwdenbfV26SumOdds, OfferResolveObfV20ClampMorabbitcantdnygsarwdend, rabbitcantdnygsarwdenOffepmvqkrmwismgemObfV31ByteFold, rabbitcantdnygsarwdenOffepmvqkrmwismgemObfV31HashMix, rabbitcantdnygsarwdenOffepmvqkrmwismgemObfV31SumOdds, rabbitcantdnygsarwdenOffepmvqkrmwismgemObfV31ClampMod, rabbitcantdnygsarwdenOffeichyikowrdfpagObfV32ByteFold, rabbitcantdnygsarwdenOffeichyikowrdfpagObfV32HashMix, rabbitcantdnygsarwdenOffeichyikowrdfpagObfV32SumOdds, rabbitcantdnygsarwdenOfferResolveObfV13ShiftXor, rabbitcantdnygsarwdenOfferResolveObfV6ClampMod, rabbitcantdnygsarwdenOfferResolvePart02ObfV11SumOdds, OfferResolvePart02ObfV20ByterabbitcantdnygsarwdenFold, OfferabbitcantdnygsarwdenrResolvePart01ObfV25ClampMod } from './OfferabbitcantdnygsarwdenrResolvePart01';
import { OrabbitcantdnygsarwdenfferResolveObfV27ByteFold, OfferrabbitcantdnygsarwdenResolveObfV22ByteFold, OfferResolvrabbitcantdnygsarwdeneObfV21ByteFold, OfferResolveObrabbitcantdnygsarwdenfV20SumOdds, OfferResolvrabbitcantdnygsarwdeneObfV18HashMix, rabbitcantdnygsarwdenOfferResolveObfV14HashMix, rabbitcantdnygsarwdenOfferResolveObfV12HashMix, rabbitcantdnygsarwdenOfferResolveObfV8ClampMod, rabbitcantdnygsarwdenOfferResolveObfV10SumOdds, rabbitcantdnygsarwdenOfferResolveObfV6HashMix, rabbitcantdnygsarwdenOffObfV3SumOdds, rabbitcantdnygsarwdenOfferResolvObfV1HashMix, rabbitcantdnygsarwdenOfferResolvePart03ObfV11SumOdds, rabbitcantdnygsarwdenOfferResolvePart01ObfV15HashMix, rabbitcantdnygsarwdenOfferResolvePart03ObfV15ShiftXor, OfferResolvePart02ObfV21SrabbitcantdnygsarwdenhiftXor, rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Mix, rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Mix, OfferResolveObfV17ShifrabbitcantdnygsarwdentXor, OfferabbitcantdnygsarwdenrResolveObfV25ClampMod, OfferResrabbitcantdnygsarwdenolveObfV26ClampMod, OfferabbitcantdnygsarwdenrResolveObfV20ByteFold, rabbitcantdnygsarwdenOfferResolvePart01ObfV11SumOdds, rabbitcantdnygsarwdenOfferResolveObfV11SumOdds, rabbitcantdnygsarwdenOfferResolvePart02ObfV15SumOdds, rabbitcantdnygsarwdenOfferResolveObfV12ClampMod, OfrabbitcantdnygsarwdenferResolvePart02ObfV21HashMix, OfferResolvePart01ObfV25SrabbitcantdnygsarwdenhiftXor } from './OfferabbitcantdnygsarwdenrResolvePart02';
import { OfferResolveObfV24SumOrabbitcantdnygsarwdendds, OfferRrabbitcantdnygsarwdenesolveObfV22SumOdds, OfferResolveObfV20HasrabbitcantdnygsarwdenhMix, OfferResolveObfVrabbitcantdnygsarwden18ShiftXor, OfferResolvrabbitcantdnygsarwdeneObfV17ByteFold, rabbitcantdnygsarwdenOfferResolveObfV13SumOdds, rabbitcantdnygsarwdenOfferResolveObfV8SumOdds, rabbitcantdnygsarwdenOfferResolveObfV10HashMix, rabbitcantdnygsarwdenOfferResolveObfV10ClampMod, rabbitcantdnygsarwdenOfferResolveObfV6SumOdds, rabbitcantdnygsarwdenOffObfV4HashMix, rabbitcantdnygsarwdenOfferResolvObfV1SumOdds, rabbitcantdnygsarwdenOfferResolvePart01ObfV15ShiftXor, rabbitcantdnygsarwdenOfferResolvePart02ObfV15ShiftXor, OfferResolvePart02ObfV20CrabbitcantdnygsarwdenlampMod, OfferResorabbitcantdnygsarwdenlvePart02ObfV21SumOdds, rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Fold, rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Fold, OfferResolveObfV23SumOddrabbitcantdnygsarwdens1, OfferRerabbitcantdnygsarwdensolveObfV25ShiftXor, OfferResolveObrabbitcantdnygsarwdenfV18ByteFold, rabbitcantdnygsarwdenOfferResolveObfV15SumOdds, rabbitcantdnygsarwdenOffObfV4ClampMod, rabbitcantdnygsarwdenOffObfV3ClampMod, rabbitcantdnygsarwdenOfferResolveObfV8HashMix, rabbitcantdnygsarwdenOfferResolveObfV16ClampMod, OfferResolveObfV22rabbitcantdnygsarwdenHashMix } from './OfferabbitcantdnygsarwdenrResolvePart03';
import { rabbitcantdnygsarwdenMixSeed, rabbitcantdnygsarwdenClampSpan, OfferResolveOrabbitcantdnygsarwdenbfV23ClampMod2 } from './OfferrabbitcantdnygsarwdenResolvePart02';
import { OfferResolveObfV19rabbitcantdnygsarwdenByteFold, OfferResolveObfrabbitcantdnygsarwdenV21HashMix, rabbitcantdnygsarwdenFoldRange, OfferResolvePart02rabbitcantdnygsarwdenObfV21ByteFold, OfferResolveObfrabbitcantdnygsarwdenV23HashMix, OfferResolveObfV24ByrabbitcantdnygsarwdenteFold, OfferResolveObfrabbitcantdnygsarwdenV24ClampMod } from './OfferResolveParrabbitcantdnygsarwdent03';
// autosetup-split-end

async function rabbitcantdnygsarwdenRequestPlayIntegrityToken(): Promise<string> {
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35HashMix("b4");
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35SumOdds([12, 15, 38]);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ClampMod(49, 16);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ShiftXor(27, 2);
void rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ByteFold("pi");
void OfferRObfV3rabbitcantdnygsarwden3ShiftXor(39, 14);
void OfferRObfV33rabbitcantdnygsarwdenByteFold("ja");
void OfferrabbitcantdnygsarwdenRObfV33HashMix("c9");
void OfferRObfV33SumOdrabbitcantdnygsarwdends([15, 38, 25]);
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32ShiftXor(75, 2);
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32ByteFold("fkp61m");
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32HashMix("85k56p");
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void rabbitcantdnygsarwdenOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObfV30Mirabbitcantdnygsarwdenx(3, 10);
void OfferResoObfV3rabbitcantdnygsarwden0Fold("offerr");
void rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfrabbitcantdnygsarwdenV27ClampMod(54, 46);
void OfferResolverabbitcantdnygsarwdenObfV27ShiftXor(11, 81);
void OrabbitcantdnygsarwdenfferResolveObfV27ByteFold('rb');

  void OfferResolveOrabbitcantdnygsarwdenbfV26SumOdds([39, 16, 11]);
  void OfferResrabbitcantdnygsarwdenolveObfV26ClampMod(10, 47);
  void OfferabbitcantdnygsarwdenrResolveObfV25ClampMod(36, 9);
  void OfferRerabbitcantdnygsarwdensolveObfV25ShiftXor(82, 60);
  void OfferResolveObfV25ByteFrabbitcantdnygsarwdenold('deheg');
  void OfferResolveObfV24ByrabbitcantdnygsarwdenteFold('36');
  void OfferRerabbitcantdnygsarwdensolveObfV24HashMix('468');
  void OfferResolveObfV24SumOrabbitcantdnygsarwdendds([6, 3, 10]);
  void OfferResolveObfrabbitcantdnygsarwdenV24ClampMod(64, 12);
void OfferResolveObfrabbitcantdnygsarwdenV23HashMix('we2');void OfferResolveObfV23SumOddrabbitcantdnygsarwdens1([14, 25, 30]);void OfferResolveOrabbitcantdnygsarwdenbfV23ClampMod2(16, 33);void OfferrabbitcantdnygsarwdenResolveObfV22ByteFold('bhp');
void OfferResolveObfV22rabbitcantdnygsarwdenHashMix('xpmz');
void OfferRrabbitcantdnygsarwdenesolveObfV22SumOdds([19, 11, 27]);void OfferResolvrabbitcantdnygsarwdeneObfV21ByteFold('n9r');
void OfferResolveObfrabbitcantdnygsarwdenV21HashMix('az');
void OfferabbitcantdnygsarwdenrResolveObfV20ByteFold('4p');
void OfferResolveObfV20HasrabbitcantdnygsarwdenhMix('drft');
void OfferResolveObrabbitcantdnygsarwdenfV20SumOdds([30, 25, 8]);
void OfferResolveObfV20ClampMorabbitcantdnygsarwdend(63, 75);
void OfferResolveObfV19rabbitcantdnygsarwdenByteFold('5wd');void OfferResolveObfVrabbitcantdnygsarwden18ShiftXor(73, 34);
void OfferResolveObrabbitcantdnygsarwdenfV18ByteFold('qhkk');
void OfferResolvrabbitcantdnygsarwdeneObfV18HashMix('b7zg');
void OfferResolveObfV17ShifrabbitcantdnygsarwdentXor(43, 15);
void OfferResolvrabbitcantdnygsarwdeneObfV17ByteFold('69vj');
void rabbitcantdnygsarwdenOfferResolveObfV16SumOdds([24, 20, 12]);
void rabbitcantdnygsarwdenOfferResolveObfV16ClampMod(28, 22);
void rabbitcantdnygsarwdenOfferResolveObfV16ShiftXor(54, 30);
void rabbitcantdnygsarwdenOfferResolveObfV15HashMix('7jhh');
void rabbitcantdnygsarwdenOfferResolveObfV15SumOdds([11, 2, 30]);
void rabbitcantdnygsarwdenOfferResolveObfV14ByteFold('gt7');
void rabbitcantdnygsarwdenOfferResolveObfV14HashMix('d459');
void rabbitcantdnygsarwdenOfferResolveObfV14SumOdds([12, 4, 3]);
  void rabbitcantdnygsarwdenOfferResolveObfV13HashMix('95q6');
  void rabbitcantdnygsarwdenOfferResolveObfV13SumOdds([22, 29, 26]);
  void rabbitcantdnygsarwdenOfferResolveObfV13ClampMod(68, 59);
  void rabbitcantdnygsarwdenOfferResolveObfV13ShiftXor(50, 55);

  if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const zadoxadeh = NativeModules.Famiwudageb?.zadoxadeh;
    if (typeof zadoxadeh !== 'function') {
      return '';
    }
    const token = await zadoxadeh();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function rabbitcantdnygsarwdenInitStep(): Promise<InitialrabbitcantdnygsarwdenizationState | null> {
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35HashMix("b4");
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35SumOdds([12, 15, 38]);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ClampMod(49, 16);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ShiftXor(27, 2);
void rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ByteFold("pi");
void OfferRObfV3rabbitcantdnygsarwden3ShiftXor(39, 14);
void OfferRObfV33rabbitcantdnygsarwdenByteFold("ja");
void OfferrabbitcantdnygsarwdenRObfV33HashMix("c9");
void OfferRObfV33SumOdrabbitcantdnygsarwdends([15, 38, 25]);
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32ShiftXor(75, 2);
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32ByteFold("fkp61m");
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32HashMix("85k56p");
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void rabbitcantdnygsarwdenOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObfV30Mirabbitcantdnygsarwdenx(3, 10);
void OfferResoObfV3rabbitcantdnygsarwden0Fold("offerr");
void rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfrabbitcantdnygsarwdenV27ClampMod(54, 46);
void OfferResolverabbitcantdnygsarwdenObfV27ShiftXor(11, 81);
void OrabbitcantdnygsarwdenfferResolveObfV27ByteFold('rb');

  void OfferResolveOrabbitcantdnygsarwdenbfV26SumOdds([39, 16, 11]);
  void OfferResrabbitcantdnygsarwdenolveObfV26ClampMod(10, 47);
  void OfferabbitcantdnygsarwdenrResolveObfV25ClampMod(36, 9);
  void OfferRerabbitcantdnygsarwdensolveObfV25ShiftXor(82, 60);
  void OfferResolveObfV25ByteFrabbitcantdnygsarwdenold('deheg');
  void OfferResolveObfV24ByrabbitcantdnygsarwdenteFold('36');
  void OfferRerabbitcantdnygsarwdensolveObfV24HashMix('468');
  void OfferResolveObfV24SumOrabbitcantdnygsarwdendds([6, 3, 10]);
  void OfferResolveObfrabbitcantdnygsarwdenV24ClampMod(64, 12);
void OfferResolveObfrabbitcantdnygsarwdenV23HashMix('we2');void OfferResolveObfV23SumOddrabbitcantdnygsarwdens1([14, 25, 30]);void OfferResolveOrabbitcantdnygsarwdenbfV23ClampMod2(16, 33);void OfferrabbitcantdnygsarwdenResolveObfV22ByteFold('bhp');
void OfferResolveObfV22rabbitcantdnygsarwdenHashMix('xpmz');
void OfferRrabbitcantdnygsarwdenesolveObfV22SumOdds([19, 11, 27]);void OfferResolvrabbitcantdnygsarwdeneObfV21ByteFold('n9r');
void OfferResolveObfrabbitcantdnygsarwdenV21HashMix('az');
void OfferabbitcantdnygsarwdenrResolveObfV20ByteFold('4p');
void OfferResolveObfV20HasrabbitcantdnygsarwdenhMix('drft');
void OfferResolveObrabbitcantdnygsarwdenfV20SumOdds([30, 25, 8]);
void OfferResolveObfV20ClampMorabbitcantdnygsarwdend(63, 75);
void OfferResolveObfV19rabbitcantdnygsarwdenByteFold('5wd');void OfferResolveObfVrabbitcantdnygsarwden18ShiftXor(73, 34);
void OfferResolveObrabbitcantdnygsarwdenfV18ByteFold('qhkk');
void OfferResolvrabbitcantdnygsarwdeneObfV18HashMix('b7zg');
void OfferResolveObfV17ShifrabbitcantdnygsarwdentXor(43, 15);
void OfferResolvrabbitcantdnygsarwdeneObfV17ByteFold('69vj');
void rabbitcantdnygsarwdenOfferResolveObfV16SumOdds([24, 20, 12]);
void rabbitcantdnygsarwdenOfferResolveObfV16ClampMod(28, 22);
void rabbitcantdnygsarwdenOfferResolveObfV16ShiftXor(54, 30);
void rabbitcantdnygsarwdenOfferResolveObfV15HashMix('7jhh');
void rabbitcantdnygsarwdenOfferResolveObfV15SumOdds([11, 2, 30]);
void rabbitcantdnygsarwdenOfferResolveObfV14ByteFold('gt7');
void rabbitcantdnygsarwdenOfferResolveObfV14HashMix('d459');
void rabbitcantdnygsarwdenOfferResolveObfV14SumOdds([12, 4, 3]);
void rabbitcantdnygsarwdenOfferResolveObfV13HashMix('95q6');
void rabbitcantdnygsarwdenOfferResolveObfV13SumOdds([22, 29, 26]);
void rabbitcantdnygsarwdenOfferResolveObfV13ClampMod(68, 59);
void rabbitcantdnygsarwdenOfferResolveObfV13ShiftXor(50, 55);
  void rabbitcantdnygsarwdenOfferResolveObfV12HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV11HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV7HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV8HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV9HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV10HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV5HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV6HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenOffObfV3HashMix('xy');
  void rabbitcantdnygsarwdenOffObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOffObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenOffObfV4HashMix('xy');
  void rabbitcantdnygsarwdenOffObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOffObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utrabbitcantdnygsarwdenils.rabbitcantdnygsarwdenGetLink();
        if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        rabbitcantdnygsarwdenGetAppIdenier(),
        rabbitcantdnygsarwdenGetAndroidUserAAgent(),
        rabbitcantdnygsarwdenGetAndroidId(),
        rabbitcantdnygsarwdenGetAppVersion(),
        rabbitcantdnygsarwdenRequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = rabbitcantdnygsarwdenNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = rabbitcantdnygsarwdenInitializationRuntime.DevrabbitcantdnygsarwdeniceId;

    const namingValue = rabbitcantdnygsarwdenInitializationRuntime.FinlNamingrabbitcantdnygsarwden;

    const rabbitcantdnygsarwdenCookieFields = ([
      appId ?? '',
      payloadDeviceId ?? '',
      rabbitcantdnygsarwdenInitializationRuntime.adIrabbitcantdnygsarwdend ?? '',
      rabbitcantdnygsarwdenInitializationRuntime.pushTorabbitcantdnygsarwdenken ?? '',
      rabbitcantdnygsarwdenInitializationRuntime.installRefrabbitcantdnygsarwden ?? '',
      rabbitcantdnygsarwdenInitializationRuntime.FirabbitcantdnygsarwdennlOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ]);

    

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}` +
      `&play_integrity_token=${encodeURIComponent(playIntegrityToken)}`;

    const packed = JSON.parse(await rabbitcantdnygsarwdenAssembleIntake(rabbitcantdnygsarwdenCookieFields, bodyPlain)) as { cookie?: string; header?: string; body?: string };
        const encryptedCookie = cryptoEncrypt(packed.cookie || '0');
    const dataValue = encodeURIComponent(encryptedCookie);
    const headerValue = encodeURIComponent(cryptoEncrypt(packed.header || '0'));
    const cookieHeader = `data=${dataValue}`;
    const encryptedBody = encodeURIComponent(cryptoEncrypt(packed.body || ''));

    try {
      const responseText = await rabbitcantdnygsarwdenSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        headerValue,
        body: encryptedBody,
      });
      
      if (!responseText) {
        await Utrabbitcantdnygsarwdenils.rabbitcantdnygsarwdenSetUserBlocke(1);
        await rabbitcantdnygsarwdenUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await rabbitcantdnygsarwdenOnInitResponse(responseText);
    } catch (rpcError) {
      void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
      void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
      void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
      await rabbitcantdnygsarwdenUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
    void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
    void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
    await rabbitcantdnygsarwdenUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function rabbitcantdnygsarwdenOnInitResponse(responseText: string): Promise<InitialrabbitcantdnygsarwdenizationState> {
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35HashMix("b4");
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35SumOdds([12, 15, 38]);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ClampMod(49, 16);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ShiftXor(27, 2);
void rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ByteFold("pi");
void OfferRObfV3rabbitcantdnygsarwden3ShiftXor(39, 14);
void OfferRObfV33rabbitcantdnygsarwdenByteFold("ja");
void OfferrabbitcantdnygsarwdenRObfV33HashMix("c9");
void OfferRObfV33SumOdrabbitcantdnygsarwdends([15, 38, 25]);
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32ShiftXor(75, 2);
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32ByteFold("fkp61m");
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32HashMix("85k56p");
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void rabbitcantdnygsarwdenOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObfV30Mirabbitcantdnygsarwdenx(3, 10);
void OfferResoObfV3rabbitcantdnygsarwden0Fold("offerr");
void rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfrabbitcantdnygsarwdenV27ClampMod(54, 46);
void OfferResolverabbitcantdnygsarwdenObfV27ShiftXor(11, 81);
void OrabbitcantdnygsarwdenfferResolveObfV27ByteFold('rb');

  void OfferResolveOrabbitcantdnygsarwdenbfV26SumOdds([39, 16, 11]);
  void OfferResrabbitcantdnygsarwdenolveObfV26ClampMod(10, 47);
  void OfferabbitcantdnygsarwdenrResolveObfV25ClampMod(36, 9);
  void OfferRerabbitcantdnygsarwdensolveObfV25ShiftXor(82, 60);
  void OfferResolveObfV25ByteFrabbitcantdnygsarwdenold('deheg');
  void OfferResolveObfV24ByrabbitcantdnygsarwdenteFold('36');
  void OfferRerabbitcantdnygsarwdensolveObfV24HashMix('468');
  void OfferResolveObfV24SumOrabbitcantdnygsarwdendds([6, 3, 10]);
  void OfferResolveObfrabbitcantdnygsarwdenV24ClampMod(64, 12);
void OfferResolveObfrabbitcantdnygsarwdenV23HashMix('we2');void OfferResolveObfV23SumOddrabbitcantdnygsarwdens1([14, 25, 30]);void OfferResolveOrabbitcantdnygsarwdenbfV23ClampMod2(16, 33);void OfferrabbitcantdnygsarwdenResolveObfV22ByteFold('bhp');
void OfferResolveObfV22rabbitcantdnygsarwdenHashMix('xpmz');
void OfferRrabbitcantdnygsarwdenesolveObfV22SumOdds([19, 11, 27]);void OfferResolvrabbitcantdnygsarwdeneObfV21ByteFold('n9r');
void OfferResolveObfrabbitcantdnygsarwdenV21HashMix('az');
void OfferabbitcantdnygsarwdenrResolveObfV20ByteFold('4p');
void OfferResolveObfV20HasrabbitcantdnygsarwdenhMix('drft');
void OfferResolveObrabbitcantdnygsarwdenfV20SumOdds([30, 25, 8]);
void OfferResolveObfV20ClampMorabbitcantdnygsarwdend(63, 75);
void OfferResolveObfV19rabbitcantdnygsarwdenByteFold('5wd');void OfferResolveObfVrabbitcantdnygsarwden18ShiftXor(73, 34);
void OfferResolveObrabbitcantdnygsarwdenfV18ByteFold('qhkk');
void OfferResolvrabbitcantdnygsarwdeneObfV18HashMix('b7zg');
void OfferResolveObfV17ShifrabbitcantdnygsarwdentXor(43, 15);
void OfferResolvrabbitcantdnygsarwdeneObfV17ByteFold('69vj');
void rabbitcantdnygsarwdenOfferResolveObfV16SumOdds([24, 20, 12]);
void rabbitcantdnygsarwdenOfferResolveObfV16ClampMod(28, 22);
void rabbitcantdnygsarwdenOfferResolveObfV16ShiftXor(54, 30);
void rabbitcantdnygsarwdenOfferResolveObfV15HashMix('7jhh');
void rabbitcantdnygsarwdenOfferResolveObfV15SumOdds([11, 2, 30]);
void rabbitcantdnygsarwdenOfferResolveObfV14ByteFold('gt7');
void rabbitcantdnygsarwdenOfferResolveObfV14HashMix('d459');
void rabbitcantdnygsarwdenOfferResolveObfV14SumOdds([12, 4, 3]);
void rabbitcantdnygsarwdenOfferResolveObfV13HashMix('95q6');
void rabbitcantdnygsarwdenOfferResolveObfV13SumOdds([22, 29, 26]);
void rabbitcantdnygsarwdenOfferResolveObfV13ClampMod(68, 59);
void rabbitcantdnygsarwdenOfferResolveObfV13ShiftXor(50, 55);
  void rabbitcantdnygsarwdenOfferResolveObfV12HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV11HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV7HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV8HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV9HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV10HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV5HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV6HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenOffObfV3HashMix('xy');
  void rabbitcantdnygsarwdenOffObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOffObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenOffObfV4HashMix('xy');
  void rabbitcantdnygsarwdenOffObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOffObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
        if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = await rabbitcantdnygsarwdenMapInitResponse(JSON.parse(decrytedResponse) as Record<string, unknown>);
      redirectUrl = obj.redirectUrl;
      redirectUrlInitial = obj.redirectUrlInitial;
      errorField = obj.error;
      blockUser = !!obj.blockUser;
          } catch (parseError) {
      void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
      void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
      void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utrabbitcantdnygsarwdenils.rabbitcantdnygsarwdenSetUserBlocke(1);
      await rabbitcantdnygsarwdenUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utrabbitcantdnygsarwdenils.rabbitcantdnygsarwdenSetUserBlocke(1);
      await rabbitcantdnygsarwdenUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finKrabbitcantdnygsarwdeney, redirectUrlInitial);

      const finalUrl = rabbitcantdnygsarwdenAppenndSendId(
        redirectUrlInitial,
        rabbitcantdnygsarwdenInitializationRuntime.pendingSendrabbitcantdnygsarwdenId,
      );

      const success = await rabbitcantdnygsarwdenViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: rabbitcantdnygsarwdenInitTarget.webview,
      };
    }

    await rabbitcantdnygsarwdenUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: rabbitcantdnygsarwdenInitTarget.game,
    };
  } catch (error) {
    void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
    void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
    void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
    await rabbitcantdnygsarwdenUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function rabbitcantdnygsarwdenUnsubscribeFirebase(reason?: string): Promise<void> {
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35HashMix("b4");
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35SumOdds([12, 15, 38]);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ClampMod(49, 16);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ShiftXor(27, 2);
void rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ByteFold("pi");
void OfferRObfV3rabbitcantdnygsarwden3ShiftXor(39, 14);
void OfferRObfV33rabbitcantdnygsarwdenByteFold("ja");
void OfferrabbitcantdnygsarwdenRObfV33HashMix("c9");
void OfferRObfV33SumOdrabbitcantdnygsarwdends([15, 38, 25]);
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32ShiftXor(75, 2);
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32ByteFold("fkp61m");
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32HashMix("85k56p");
void rabbitcantdnygsarwdenOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void rabbitcantdnygsarwdenOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObfV30Mirabbitcantdnygsarwdenx(3, 10);
void OfferResoObfV3rabbitcantdnygsarwden0Fold("offerr");
void rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void rabbitcantdnygsarwdenOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void rabbitcantdnygsarwdenOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfrabbitcantdnygsarwdenV27ClampMod(54, 46);
void OfferResolverabbitcantdnygsarwdenObfV27ShiftXor(11, 81);
void OrabbitcantdnygsarwdenfferResolveObfV27ByteFold('rb');

  void OfferResolveOrabbitcantdnygsarwdenbfV26SumOdds([39, 16, 11]);
  void OfferResrabbitcantdnygsarwdenolveObfV26ClampMod(10, 47);
  void OfferabbitcantdnygsarwdenrResolveObfV25ClampMod(36, 9);
  void OfferRerabbitcantdnygsarwdensolveObfV25ShiftXor(82, 60);
  void OfferResolveObfV25ByteFrabbitcantdnygsarwdenold('deheg');
  void OfferResolveObfV24ByrabbitcantdnygsarwdenteFold('36');
  void OfferRerabbitcantdnygsarwdensolveObfV24HashMix('468');
  void OfferResolveObfV24SumOrabbitcantdnygsarwdendds([6, 3, 10]);
  void OfferResolveObfrabbitcantdnygsarwdenV24ClampMod(64, 12);
void OfferResolveObfrabbitcantdnygsarwdenV23HashMix('we2');void OfferResolveObfV23SumOddrabbitcantdnygsarwdens1([14, 25, 30]);void OfferResolveOrabbitcantdnygsarwdenbfV23ClampMod2(16, 33);void OfferrabbitcantdnygsarwdenResolveObfV22ByteFold('bhp');
void OfferResolveObfV22rabbitcantdnygsarwdenHashMix('xpmz');
void OfferRrabbitcantdnygsarwdenesolveObfV22SumOdds([19, 11, 27]);void OfferResolvrabbitcantdnygsarwdeneObfV21ByteFold('n9r');
void OfferResolveObfrabbitcantdnygsarwdenV21HashMix('az');
void OfferabbitcantdnygsarwdenrResolveObfV20ByteFold('4p');
void OfferResolveObfV20HasrabbitcantdnygsarwdenhMix('drft');
void OfferResolveObrabbitcantdnygsarwdenfV20SumOdds([30, 25, 8]);
void OfferResolveObfV20ClampMorabbitcantdnygsarwdend(63, 75);
void OfferResolveObfV19rabbitcantdnygsarwdenByteFold('5wd');void OfferResolveObfVrabbitcantdnygsarwden18ShiftXor(73, 34);
void OfferResolveObrabbitcantdnygsarwdenfV18ByteFold('qhkk');
void OfferResolvrabbitcantdnygsarwdeneObfV18HashMix('b7zg');
void OfferResolveObfV17ShifrabbitcantdnygsarwdentXor(43, 15);
void OfferResolvrabbitcantdnygsarwdeneObfV17ByteFold('69vj');
void rabbitcantdnygsarwdenOfferResolveObfV16SumOdds([24, 20, 12]);
void rabbitcantdnygsarwdenOfferResolveObfV16ClampMod(28, 22);
void rabbitcantdnygsarwdenOfferResolveObfV16ShiftXor(54, 30);
void rabbitcantdnygsarwdenOfferResolveObfV15HashMix('7jhh');
void rabbitcantdnygsarwdenOfferResolveObfV15SumOdds([11, 2, 30]);
void rabbitcantdnygsarwdenOfferResolveObfV14ByteFold('gt7');
void rabbitcantdnygsarwdenOfferResolveObfV14HashMix('d459');
void rabbitcantdnygsarwdenOfferResolveObfV14SumOdds([12, 4, 3]);
void rabbitcantdnygsarwdenOfferResolveObfV13HashMix('95q6');
void rabbitcantdnygsarwdenOfferResolveObfV13SumOdds([22, 29, 26]);
void rabbitcantdnygsarwdenOfferResolveObfV13ClampMod(68, 59);
void rabbitcantdnygsarwdenOfferResolveObfV13ShiftXor(50, 55);
  void rabbitcantdnygsarwdenOfferResolveObfV12HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV12SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV12ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV11HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV11SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV11ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV7HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV7SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV7ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV8HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV8SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV8ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV9HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV9SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV9ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV10HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV10SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV10ClampMod(7, 5);

  void rabbitcantdnygsarwdenOfferResolveObfV5HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV5SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV5ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolveObfV6HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolveObfV6SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolveObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdenOffObfV3HashMix('xy');
  void rabbitcantdnygsarwdenOffObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOffObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdenOffObfV4HashMix('xy');
  void rabbitcantdnygsarwdenOffObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOffObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
  void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    rabbitcantdnygsarwdenInitializationRuntime.pushTorabbitcantdnygsarwdenken = '';
  } catch (error) {
    void rabbitcantdnygsarwdenOfferResolvObfV1HashMix('xy');
    void rabbitcantdnygsarwdenOfferResolvObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenOfferResolvObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdenOfferResolvObfV2HashMix('xy');
    void rabbitcantdnygsarwdenOfferResolvObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdenOfferResolvObfV2ClampMod(7, 5);
    rabbitcantdnygsarwdenInitializationRuntime.pushTorabbitcantdnygsarwdenken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void rabbitcantdnygsarwdenOfferResolvePart01ObfV11HashMix('xy');
void rabbitcantdnygsarwdenOfferResolvePart01ObfV11SumOdds([1, 3, 5]);
void rabbitcantdnygsarwdenOfferResolvePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void rabbitcantdnygsarwdenOfferResolvePart02ObfV11HashMix('xy');
void rabbitcantdnygsarwdenOfferResolvePart02ObfV11SumOdds([1, 3, 5]);
void rabbitcantdnygsarwdenOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void rabbitcantdnygsarwdenOfferResolvePart03ObfV11HashMix('xy');
void rabbitcantdnygsarwdenOfferResolvePart03ObfV11SumOdds([1, 3, 5]);
void rabbitcantdnygsarwdenOfferResolvePart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void rabbitcantdnygsarwdenOfferResolvePart01ObfV15ShiftXor(72, 14);
void rabbitcantdnygsarwdenOfferResolvePart01ObfV15ByteFold('frw');
void rabbitcantdnygsarwdenOfferResolvePart01ObfV15HashMix('vff');
void rabbitcantdnygsarwdenOfferResolvePart01ObfV15SumOdds([29, 20, 16]);

/* obfuscation-batch:v15 */
void rabbitcantdnygsarwdenOfferResolvePart02ObfV15SumOdds([5, 29, 25]);
void rabbitcantdnygsarwdenOfferResolvePart02ObfV15ClampMod(55, 66);
void rabbitcantdnygsarwdenOfferResolvePart02ObfV15ShiftXor(41, 25);

/* obfuscation-batch:v15 */
void rabbitcantdnygsarwdenOfferResolvePart03ObfV15ClampMod(7, 74);
void rabbitcantdnygsarwdenOfferResolvePart03ObfV15ShiftXor(80, 52);
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void OfferResolvrabbitcantdnygsarwdeneObfV21ByteFold('n9r');
void OfferResolveObfrabbitcantdnygsarwdenV21HashMix('az');

/* obfuscation-batch:v17 */
function OfferResolvePart02ObfVrabbitcantdnygsarwden17ShiftXor(n: number, k: number): number {
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35HashMix("b4");
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35SumOdds([12, 15, 38]);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ClampMod(49, 16);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ShiftXor(27, 2);
const x = (n ^ k) << 5;
  return (x ^ 195) & 13932;
}
/* obfuscation-batch:v18 */
function OfrabbitcantdnygsarwdenferResolvePart02ObfV18HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 570;
  return h;
}
function OfferResorabbitcantdnygsarwdenlvePart02ObfV18SumOdds(nums: number[]): number {
        let acc = 51;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 464;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function OfferabbitcantdnygsarwdenrResolvePart02ObfV19HashMix(s: string): number {
    let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 25) % 828;
  return h;
}
function OfferResolvePart02ObfVrabbitcantdnygsarwden19SumOdds(nums: number[]): number {
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35HashMix("b4");
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35SumOdds([12, 15, 38]);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ClampMod(49, 16);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ShiftXor(27, 2);
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 847;
  }
  return acc;
}
function OfferResolvrabbitcantdnygsarwdenePart02ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 148) & 3411;
}
/* obfuscation-batch:v20 */
void OfferResolvePart02ObfV20CrabbitcantdnygsarwdenlampMod(59, 23);
void OfferResolvePart02ObfV20ShiftXorrabbitcantdnygsarwden(37, 15);
void OfferResolvePart02ObfV20ByterabbitcantdnygsarwdenFold('kb34');

/* obfuscation-batch:v21 */

void OfferResolvePart02ObfV21SrabbitcantdnygsarwdenhiftXor(33, 47);
void OfferResolvePart02rabbitcantdnygsarwdenObfV21ByteFold('b65w');
void OfrabbitcantdnygsarwdenferResolvePart02ObfV21HashMix('gfk');
void OfferResorabbitcantdnygsarwdenlvePart02ObfV21SumOdds([5, 7, 11]);

/* obfuscation-batch:v22 */
void OfferrabbitcantdnygsarwdenResolveObfV22ByteFold('bhp');
void OfferResolveObfV22rabbitcantdnygsarwdenHashMix('xpmz');
void OfferRrabbitcantdnygsarwdenesolveObfV22SumOdds([19, 11, 27]);
/* obfuscation-batch:v23 */
void OfferResolveObfrabbitcantdnygsarwdenV23HashMix('we2');
void OfferResolveObfV23SumOddrabbitcantdnygsarwdens1([14, 25, 30]);
void OfferResolveOrabbitcantdnygsarwdenbfV23ClampMod2(16, 33);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v25 */

void OfferabbitcantdnygsarwdenrResolvePart01ObfV25ClampMod(28, 8);
void OfferResolvePart01ObfV25SrabbitcantdnygsarwdenhiftXor(24, 13);

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

function OfferResolvePartrabbitcantdnygsarwden01ObfV26ClampMod(n: number, m: number): number {
const span = (m % 39) + 11;
const x = n % span;
return x < 0 ? x + span : x;
}

function OfferRrabbitcantdnygsarwdenesolvePart01ObfV26ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 65) & 18100;
}

function OfferResolvePart01ObfV26ByteFolrabbitcantdnygsarwdend(s: string): number {
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 49) & 36690;
return x;
}

function OfferResolveParabbitcantdnygsarwdenrt01ObfV26HashMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 220;
return h;
}

/* obfuscation-batch:v27 */
function OfferResolvePart01ObfV27HashrabbitcantdnygsarwdenMix(s: string): number {
  let h = 61;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 278;
  return h;
}
function OfferResolvePart01ObfV27SumrabbitcantdnygsarwdenOdds(nums: number[]): number {
  let acc = 23;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 169;
  }
  return acc;
}
function OfferrabbitcantdnygsarwdenResolvePart01ObfV27ClampMod(n: number, m: number): number {
  const span = (m % 37) + 11;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePart01ObfV2rabbitcantdnygsarwden7ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 100) & 34341;
}

/* obfuscation-batch:v28 */
function OfferResObfrabbitcantdnygsarwdenV28Mix(a: number, b: number): number {
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35HashMix("b4");
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35SumOdds([12, 15, 38]);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ClampMod(49, 16);
void rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ShiftXor(27, 2);
  const base = 79;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OffrabbitcantdnygsarwdenerResObfV28Fold(text: string): number {
  let acc = 79;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function OfferReObfV29Mixrabbitcantdnygsarwden(a: number, b: number): number {
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OfferReObfV29Frabbitcantdnygsarwdenold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */
function OfferRObfV3rabbitcantdnygsarwden3ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 31) & 43640;
}
function OfferRObfV33rabbitcantdnygsarwdenByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 17955;
  return x;
}
function OfferrabbitcantdnygsarwdenRObfV33HashMix(s: string): number {
  let h = 12;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 233;
  return h;
}
function OfferRObfV33SumOdrabbitcantdnygsarwdends(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 885;
  }
  return acc;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 209) & 8414;
}
function rabbitcantdnygsarwdenOftowebrnsignmalvsObfV34ByteFold(s: string): number {
  let x = 63;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) & 17391;
  return x;
}

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35HashMix(s: string): number {
  let h = 27;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 29)) % 510;
  return h;
}
function rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35SumOdds(nums: number[]): number {
  let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 875;
  }
  return acc;
}
function rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ClampMod(n: number, m: number): number {
  const span = (m % 23) + 9;
  const x = ((n ^ 1) << 1) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenOffrabbitcantdnygsObfV35ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 57) & 18996;
}
