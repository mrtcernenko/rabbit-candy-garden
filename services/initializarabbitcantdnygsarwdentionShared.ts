import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rabbitcantdnygsarwdenDecrypt } from './CryptoServrabbitcantdnygsarwdenice';
import { finKrabbitcantdnygsarwdeney } from './constants/constrabbitcantdnygsarwdenntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  rabbitcantdnygsarwdenViewportGetState,
  rabbitcantdnygsarwdenViewportShow,
} from './ViewporabbitcantdnygsarwdenrtHost';
import { Utrabbitcantdnygsarwdenils } from './UtilServicerabbitcantdnygsarwden';

let rabbitcantdnygsarwdenLastOpenedPushExternalUrl = '';
let rabbitcantdnygsarwdenLastOpenedPushExternalAt = 0;

export const rabbitcantdnygsarwdenInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarabbitcantdnygsarwdenrget = (typeof rabbitcantdnygsarwdenInitTarget)[keyof typeof rabbitcantdnygsarwdenInitTarget];

export interface InitialrabbitcantdnygsarwdenizationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarabbitcantdnygsarwdenrget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface rabbitcantdnygsarwdenInitializationRuntime {
  pushTorabbitcantdnygsarwdenken: string;
  installRefrabbitcantdnygsarwden: string;
  DevrabbitcantdnygsarwdeniceId: string;
  FirabbitcantdnygsarwdennlOneLink: string;
  FinlNamingrabbitcantdnygsarwden: string;
  adIrabbitcantdnygsarwdend: string;
  firstParameterrabbitcantdnygsarwdenReceived: boolean;
  oranicWaitingrabbitcantdnygsarwden: boolean;
  orabbitcantdnygsarwdenrgnicWaitResolve: (() => void) | null;
  pendingSendrabbitcantdnygsarwdenId: string;
}

export const rabbitcantdnygsarwdenInitializationRuntime: rabbitcantdnygsarwdenInitializationRuntime = {
  pushTorabbitcantdnygsarwdenken: '',
  installRefrabbitcantdnygsarwden: '',
  DevrabbitcantdnygsarwdeniceId: '',
  FirabbitcantdnygsarwdennlOneLink: '',
  FinlNamingrabbitcantdnygsarwden: '',
  adIrabbitcantdnygsarwdend: '',
  firstParameterrabbitcantdnygsarwdenReceived: false,
  oranicWaitingrabbitcantdnygsarwden: false,
  orabbitcantdnygsarwdenrgnicWaitResolve: null,
  pendingSendrabbitcantdnygsarwdenId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function rabbitcantdnygsarwdenResetInitializationRuntime(): void {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  rabbitcantdnygsarwdenInitializationRuntime.pushTorabbitcantdnygsarwdenken = '';
  rabbitcantdnygsarwdenInitializationRuntime.installRefrabbitcantdnygsarwden = '';
  rabbitcantdnygsarwdenInitializationRuntime.DevrabbitcantdnygsarwdeniceId = '';
  rabbitcantdnygsarwdenInitializationRuntime.FirabbitcantdnygsarwdennlOneLink = '';
  rabbitcantdnygsarwdenInitializationRuntime.FinlNamingrabbitcantdnygsarwden = '';
  rabbitcantdnygsarwdenInitializationRuntime.adIrabbitcantdnygsarwdend = '';
  rabbitcantdnygsarwdenInitializationRuntime.firstParameterrabbitcantdnygsarwdenReceived = false;
  rabbitcantdnygsarwdenInitializationRuntime.oranicWaitingrabbitcantdnygsarwden = false;
  rabbitcantdnygsarwdenInitializationRuntime.orabbitcantdnygsarwdenrgnicWaitResolve = null;
}

export function rabbitcantdnygsarwdenAppenndSendId(url: string, sendId: string): string {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function rabbitcantdnygsarwdenSynncPendingSendIdFromNative(): Promise<void> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Ginixajozijuj } = NativeModules;
    if (!Ginixajozijuj || typeof Ginixajozijuj.taqejegivazaf !== 'function') {
      return;
    }
    const sendId = await Ginixajozijuj.taqejegivazaf();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      rabbitcantdnygsarwdenInitializationRuntime.pendingSendrabbitcantdnygsarwdenId = sendId.trim();
    }
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function rabbitcantdnygsarwdenTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === rabbitcantdnygsarwdenLastOpenedPushExternalUrl &&
    now - rabbitcantdnygsarwdenLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    rabbitcantdnygsarwdenLastOpenedPushExternalUrl = url;
    rabbitcantdnygsarwdenLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    rabbitcantdnygsarwdenLastOpenedPushExternalUrl = '';
    rabbitcantdnygsarwdenLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function rabbitcantdnygsarwdenSynncPendingPushUrlFromNative(): Promise<void> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Ginixajozijuj } = NativeModules;
    if (
      !Ginixajozijuj ||
      typeof Ginixajozijuj.kibegobecis !== 'function'
    ) {
      return;
    }
    const pushUrl = await Ginixajozijuj.kibegobecis();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await rabbitcantdnygsarwdenTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function rabbitcantdnygsarwdenGetAppIdenier(): Promise<string> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { Ginixajozijuj } = NativeModules;

    if (!Ginixajozijuj) {
            return '';
    }

    const packageName = await Ginixajozijuj.xuzelulitomace();
        return packageName || '';
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

export async function rabbitcantdnygsarwdenGetAppVersion(): Promise<string> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function rabbitcantdnygsarwdenGetAndroidId(): Promise<string> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function rabbitcantdnygsarwdenGetAndroidUserAAgent(): Promise<string> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { Jowobelapede } = NativeModules;

    if (!Jowobelapede) {
            return '';
    }

    const userAgent: string = await Jowobelapede.relemonejebub();
    return userAgent || '';
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const rabbitcantdnygsarwdenINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let rabbitcantdnygsarwdenInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function rabbitcantdnygsarwdenWaitForInitPush(timeoutMs: number): Promise<string | null> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

    void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
    void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
    void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
  void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);  void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
  void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
  void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
  void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
  void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
  void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
  void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
  void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
  void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
  void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
  void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
  void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
  void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

    void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
    void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
    void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void rabbitcantdnygsarwdenMixSeed(3, 7);
    void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
    void rabbitcantdnygsarwdenClampSpan(5, 0, 10);

    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

      void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
      void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
      void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
        void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
        void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
        void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
    void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);    void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
    void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
    void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
    void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
    void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
    void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
    void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
    void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
    void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
    void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
    void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
    void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

      void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
      void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
      void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (rabbitcantdnygsarwdenInitPushResolver === deliver) {
        rabbitcantdnygsarwdenInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

      void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
      void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
      void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
        void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
        void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
        void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
    void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);    void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
    void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
    void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
    void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
    void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
    void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
    void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
    void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
    void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
    void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
    void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
    void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

      void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
      void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
      void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(encryptedBody);
    };

    const timer = setTimeout(() => {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

      void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
      void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
      void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
        void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
        void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
        void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
    void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);    void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
    void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
    void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
    void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
    void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
    void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
    void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
    void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
    void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
    void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
    void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
    void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

      void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
      void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
      void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(null);
    }, timeoutMs);

        rabbitcantdnygsarwdenInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function rabbitcantdnygsarwdenDeliverInitPush(encryptedBody: string): boolean {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!rabbitcantdnygsarwdenInitPushResolver) {
        return false;
  }
  const resolver = rabbitcantdnygsarwdenInitPushResolver;
  rabbitcantdnygsarwdenInitPushResolver = null;
    resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function rabbitcantdnygsarwdenHandleInitPushBackground(encryptedBody: string): Promise<void> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    try {
    const decrypted = rabbitcantdnygsarwdenDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
            return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    
    if (redirectUrlInitial) {
      const finalUrl = rabbitcantdnygsarwdenAppenndSendId(
        redirectUrlInitial,
        rabbitcantdnygsarwdenInitializationRuntime.pendingSendrabbitcantdnygsarwdenId,
      );
      await AsyncStorage.setItem(finKrabbitcantdnygsarwdeney, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = rabbitcantdnygsarwdenViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await rabbitcantdnygsarwdenViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
            return;
    }

    if (redirectUrl) {
      await Utrabbitcantdnygsarwdenils.rabbitcantdnygsarwdenSetUserBlocke(1);
          }
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function rabbitcantdnygsarwdenExtractInitPushBody(data: Record<string, any>): string {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of rabbitcantdnygsarwdenINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function rabbitcantdnygsarwdenWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

    void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
    void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
    void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
  void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);  void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
  void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
  void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
  void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
  void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
  void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
  void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
  void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
  void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
  void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
  void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
  void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
  void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

    void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
    void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
    void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

      void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
      void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
      void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
        void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
        void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
        void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
    void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);    void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
    void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
    void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
    void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
    void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
    void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
    void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
    void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
    void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
    void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
    void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
    void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

      void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
      void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
      void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
            resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
                await rabbitcantdnygsarwdenOnTokenReceived(token);
        resolve(token);
        return;
      }
          } catch (error) {
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
          }
  });
}

async function rabbitcantdnygsarwdenOnTokenReceived(token: string): Promise<void> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
        rabbitcantdnygsarwdenInitializationRuntime.pushTorabbitcantdnygsarwdenken = token;
  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

export async function rabbitcantdnygsarwdenOnMessageRecieved(remoteMessage: any): Promise<void> {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV2rabbitcantdnygsarwden7HashMix('nz');

  void initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold('90');
  void initializationSrabbitcantdnygsarwdenharedObfV26HashMix('uj');
  void initializationSharerabbitcantdnygsarwdendObfV26SumOdds([1, 27, 27]);
  void initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold('b5a');
  void irabbitcantdnygsarwdennitializationSharedObfV25HashMix('fza');
  void initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds([38, 2, 26]);
  void initializationSharedObfV24BytrabbitcantdnygsarwdeneFold('3c3fu');
void initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(44, 66);void initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1('1n9');void initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2('zl');void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);
void initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(47, 36);
void initializationSharedObfV19SurabbitcantdnygsarwdenmOdds([5, 18, 11]);void initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(74, 25);void initializationrabbitcantdnygsarwdenSharedObfV18SumOdds([19, 29, 28]);
void initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(50, 10);
void initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteForabbitcantdnygsarwdenld('2r');
void initializationSharabbitcantdnygsarwdenredObfV17HashMix('kpg7');
void initializationSrabbitcantdnygsarwdenharedObfV16HashMix('vq');
void initializationSharrabbitcantdnygsarwdenedObfV16SumOdds([19, 26, 24]);
void initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds([27, 4, 14]);
void initializationSharedObfVrabbitcantdnygsarwden15ClampMod(53, 73);
void initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(52, 20);
void initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(69, 51);
void initializationSharerabbitcantdnygsarwdendObfV14ByteFold('6hmp');
void initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(77, 7);
  void initializationSharabbitcantdnygsarwdenredObfV12HashMix('xy');
  void initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(7, 5);

  void initializationSharedObfV11HashMixrabbitcantdnygsarwden('xy');
  void initializationSharedObfV11SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HrabbitcantdnygsarwdenashMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV7SumOdds([1, 3, 5]);
  void initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8rabbitcantdnygsarwdenHashMix('xy');
  void initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(7, 5);
  void initializrabbitcantdnygsarwdenationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumOrabbitcantdnygsarwdendds([1, 3, 5]);
  void initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(7, 5);
  void initializationSharedObfV10HrabbitcantdnygsarwdenashMix('xy');
  void initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharedObfV10rabbitcantdnygsarwdenClampMod(7, 5);

  void initializationSharedObfV5HashrabbitcantdnygsarwdenMix('xy');
  void initializationrabbitcantdnygsarwdenSharedObfV5SumOdds([1, 3, 5]);
  void initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(7, 5);
  void initializationSharedObfV6rabbitcantdnygsarwdenHashMix('xy');
  void initializationSharerabbitcantdnygsarwdendObfV6SumOdds([1, 3, 5]);
  void irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV3HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV3SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharObfV4HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharObfV4SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void rabbitcantdnygsarwdenMixSeed(3, 7);
  void rabbitcantdnygsarwdenFoldRange([1, 2, 3]);
  void rabbitcantdnygsarwdenClampSpan(5, 0, 10);


  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    
    if (!remoteMessage || !remoteMessage.data) {
      return;
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = rabbitcantdnygsarwdenExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
            const delivered = rabbitcantdnygsarwdenDeliverInitPush(initPushBody);
      if (!delivered) {
                await rabbitcantdnygsarwdenHandleInitPushBackground(initPushBody);
      }
      return;
    }

    
    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
            rabbitcantdnygsarwdenInitializationRuntime.pendingSendrabbitcantdnygsarwdenId = sendId;
      const finalUrl = await AsyncStorage.getItem(finKrabbitcantdnygsarwdeney);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = rabbitcantdnygsarwdenAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = rabbitcantdnygsarwdenViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await rabbitcantdnygsarwdenViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix('xy');
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function rabbitcantdnygsarwdenMixSeed(a: number, b: number): number {
      
  return ((a % (b || 1)) + b) % (b || 1);
}

function rabbitcantdnygsarwdenFoldRange(nums: number[]): number {
      return nums.filter((n) => {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
return (n % 2 !== 0);
}).reduce((a, n) => {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(71, 78);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(65, 32);
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold("dihc");
void rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix("2fgp6");
void initiaObfV33HashMrabbitcantdnygsarwdenix("f618");
void initiarabbitcantdnygsarwdenObfV33SumOdds([38, 25, 24]);
void initiaObfV33rabbitcantdnygsarwdenClampMod(27, 2);
void initiaObfV33ShirabbitcantdnygsarwdenftXor(69, 52);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void rabbitcantdnygsarwdeninitializationShapObfV31HashMix("6d8jen");
void rabbitcantdnygsarwdeninitializationShapObfV31SumOdds([31, 22, 17]);
void rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(16, 3);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(17, 7);
void rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold("initia");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(16, 6);
void rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold("initia");
return (a + n * 13);
}, 0);
}

function irabbitcantdnygsarwdennitializationSharedObfV6ClampMod(n: number, m: number): number {

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharedObfV5HashrabbitcantdnygsarwdenMix(s: string): number {
  return Array.from(s).reduce((a, c) => {
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
return ((a + c.charCodeAt(0) * 31) % 971);
}, 0);
}

function initializationrabbitcantdnygsarwdenSharedObfV5SumOdds(nums: number[]): number {
      return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function initializationSharedObfV10rabbitcantdnygsarwdenClampMod(n: number, m: number): number {
        const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function initializationSharedObfV11HashMixrabbitcantdnygsarwden(s: string): number {
        return Array.from(s).reduce((acc, ch) => {
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
return ((acc + ch.charCodeAt(0) * 59) % 983);
}, 0);
}
function initializationSharedObfV11SumOddrabbitcantdnygsarwdens(nums: number[]): number {
            return nums.filter((n) => {
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
return (n % 2 !== 0);
}).reduce((acc, n) => {
void rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(57, 40);
void rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold("5cj4");
void initialObfV29rabbitcantdnygsarwdenMix(1, 20);
void initialrabbitcantdnygsarwdenObfV29Fold("ipzuri");
return (acc + n * 37);
}, 0);
}
function initiarabbitcantdnygsarwdenlizationSharedObfV12ClampMod(n: number, m: number): number {

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function initializationSharedObfV13ShrabbitcantdnygsarwdeniftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 179) & 24622;
}
/* obfuscation-batch:v14 */
function initializationSharedObfV14SrabbitcantdnygsarwdenhiftXor(n: number, k: number): number {
            
  const x = (n ^ k) << 7;
  return (x ^ 53) & 52513;
}
function initializationSharerabbitcantdnygsarwdendObfV14ByteFold(s: string): number {
            
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 29;
  return x & 17866;
}
/* obfuscation-batch:v15 */
function initialrabbitcantdnygsarwdenizationSharedObfV15SumOdds(nums: number[]): number {


  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 43) % 723;
  }
  return acc;
}
function initializationSharedObfVrabbitcantdnygsarwden15ClampMod(n: number, m: number): number {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");
  const span = (m % 6) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializationSharerabbitcantdnygsarwdendObfV15ShiftXor(n: number, k: number): number {
                  const x = (n ^ k) << 2;
  return (x ^ 109) & 34306;
}
/* obfuscation-batch:v16 */
function initializationSrabbitcantdnygsarwdenharedObfV16HashMix(s: string): number {

  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 288;
  return h;
}
function initializationSharrabbitcantdnygsarwdenedObfV16SumOdds(nums: number[]): number {


  let acc = 59;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 708;
  }
  return acc;
}
/* obfuscation-batch:v17 */
function initializationSharabbitcantdnygsarwdenredObfV17HashMix(s: string): number {
  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 536;
  return h;
}
/* obfuscation-batch:v18 */
function initializationrabbitcantdnygsarwdenSharedObfV18SumOdds(nums: number[]): number {
let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 428;
  }
  return acc;
}
function initialrabbitcantdnygsarwdenizationSharedObfV18ClampMod(n: number, m: number): number {

        const span = (m % 64) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializarabbitcantdnygsarwdentionSharedObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 81) & 18545;
}
function initializationSharedObfV18ByteForabbitcantdnygsarwdenld(s: string): number {
        let x = 9;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 221;
  return x & 39631;
}
/* obfuscation-batch:v19 */
function initializationSharedObfV19SurabbitcantdnygsarwdenmOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 297;
  }
  return acc;
}
function initializationSharerabbitcantdnygsarwdendObfV19ShiftXor(n: number, k: number): number {
        const x = (n ^ k) << 6;
  return (x ^ 113) & 28674;
}
/* obfuscation-batch:v20 */
function initializationSharedObfV20ShiftrabbitcantdnygsarwdenXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 12) & 24125;
}



/* obfuscation-batch:v21 */
function initializationSharedObfrabbitcantdnygsarwdenV21SumOdds(nums: number[]): number {
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(27, 2);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(69, 4);
void rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold("he9");
void rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix("fopc");

  let acc = 52;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 480;
  }
  return acc;
}

function initializationSharedObfV21ClampModrabbitcantdnygsarwden(n: number, m: number): number {
  const span = (m % 53) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(n: number, k: number): number {

  const x = (n ^ k) << 7;
  return (x ^ 218) & 40236;
}
void initializationSharedObfrabbitcantdnygsarwdenV21SumOdds([23, 6, 16]);
void initializationSharedObfV21ClampModrabbitcantdnygsarwden(56, 8);
void initializationSharedObfV21ShirabbitcantdnygsarwdenftXor(48, 15);

function initializationSharabbitcantdnygsarwdenredObfV12HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 567;
  return h;
}

function initiarabbitcantdnygsarwdenlizationSharedObfV12SumOdds(nums: number[]): number {
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 706;
  }
  return acc;
}

function initialrabbitcantdnygsarwdenizationSharedObfV11ClampMod(n: number, m: number): number {
        const span = (m % 10) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV7HrabbitcantdnygsarwdenashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 367;
  return h;
}

function initializationrabbitcantdnygsarwdenSharedObfV7SumOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 458;
  }
  return acc;
}

function initiarabbitcantdnygsarwdenlizationSharedObfV7ClampMod(n: number, m: number): number {
  const span = (m % 20) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV8rabbitcantdnygsarwdenHashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 150;
  return h;
}

function initialrabbitcantdnygsarwdenizationSharedObfV8SumOdds(nums: number[]): number {
  let acc = 57;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 751;
  }
  return acc;
}

function initializationSharedObfV8ClarabbitcantdnygsarwdenmpMod(n: number, m: number): number {
  const span = (m % 4) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializrabbitcantdnygsarwdenationSharedObfV9HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 161;
  return h;
}

function initializationSharedObfV9SumOrabbitcantdnygsarwdendds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 728;
  }
  return acc;
}

function initializationrabbitcantdnygsarwdenSharedObfV9ClampMod(n: number, m: number): number {
      const span = (m % 7) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV10HrabbitcantdnygsarwdenashMix(s: string): number {

  let h = 67;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 681;
  return h;
}

function initializatrabbitcantdnygsarwdenionSharedObfV10SumOdds(nums: number[]): number {
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 432;
  }
  return acc;
}

function initializationSharedObfV5CrabbitcantdnygsarwdenlampMod(n: number, m: number): number {
  const span = (m % 9) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV6rabbitcantdnygsarwdenHashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 156;
  return h;
}

function initializationSharerabbitcantdnygsarwdendObfV6SumOdds(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 265;
  }
  return acc;
}

function rabbitcantdnygsarwdeninitializationSharObfV3HashMix(s: string): number {
  let h = 34;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 188;
  return h;
}

function rabbitcantdnygsarwdeninitializationSharObfV3SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 585;
  }
  return acc;
}

function rabbitcantdnygsarwdeninitializationSharObfV3ClampMod(n: number, m: number): number {
  const span = (m % 8) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function rabbitcantdnygsarwdeninitializationSharObfV4HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 349;
  return h;
}

function rabbitcantdnygsarwdeninitializationSharObfV4SumOdds(nums: number[]): number {
  let acc = 22;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 796;
  }
  return acc;
}

function rabbitcantdnygsarwdeninitializationSharObfV4ClampMod(n: number, m: number): number {
  const span = (m % 12) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1HashMix(s: string): number {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 205;
  return h;
}

function rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 496;
  }
  return acc;
}

function rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const span = (m % 18) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 436;
  return h;
}

function rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  let acc = 15;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 629;
  }
  return acc;
}

function rabbitcantdnygsarwdeninitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const span = (m % 24) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function rabbitcantdnygsarwdenClampSpan(n: number, lo: number, hi: number): number {
        const span = hi > lo ? hi - lo : 17;
  const x = ((n - lo) % span + span) % span;
  return lo + x;
}

/* obfuscation-batch:v22 */
function initializationSharedObfV22SurabbitcantdnygsarwdenmOdds(nums: number[]): number {
        let acc = 37;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 752;
  }
  return acc;
}
function initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(n: number, m: number): number {

  const span = (m % 41) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 44) & 51204;
}
void initializationSharedObfV22SurabbitcantdnygsarwdenmOdds([19, 26, 18]);
void initializationShrabbitcantdnygsarwdenaredObfV22ClampMod(41, 47);
void initializatrabbitcantdnygsarwdenionSharedObfV22ShiftXor(27, 60);
/* obfuscation-batch:v23 */
function initializationSharedObfV23ShiftXorabbitcantdnygsarwdenr(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 24) & 58516;
}
function initializatiorabbitcantdnygsarwdennSharedObfV23ByteFold1(s: string): number {

  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 46638;
  return x;
}
function initiarabbitcantdnygsarwdenlizationSharedObfV23HashMix2(s: string): number {
              let h = 45;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 333;
  return h;
}
/* obfuscation-batch:v24 */
function initializationSharedObfV24BytrabbitcantdnygsarwdeneFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 6402;
  return x;
}


/* obfuscation-batch:v25 */
function initializatirabbitcantdnygsarwdenonSharedObfV25ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 59383;
  return x;
}

function irabbitcantdnygsarwdennitializationSharedObfV25HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 489;
  return h;
}

function initiarabbitcantdnygsarwdenlizationSharedObfV25SumOdds(nums: number[]): number {
  let acc = 80;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 400;
  }
  return acc;
}


/* obfuscation-batch:v26 */
function initializatiorabbitcantdnygsarwdennSharedObfV26ByteFold(s: string): number {
  let x = 39;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 42) & 46291;
  return x;
}

function initializationSrabbitcantdnygsarwdenharedObfV26HashMix(s: string): number {
  let h = 70;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 978;
  return h;
}

function initializationSharerabbitcantdnygsarwdendObfV26SumOdds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 283;
  }
  return acc;
}

/* obfuscation-batch:v27 */
function initializationSharedObfV2rabbitcantdnygsarwden7HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 201;
  return h;
}

/* obfuscation-batch:v28 */
function rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Mix(a: number, b: number): number {
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdeninitializatprissmgecmsgallieObfV28Fold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function initialObfV29rabbitcantdnygsarwdenMix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function initialrabbitcantdnygsarwdenObfV29Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Mix(a: number, b: number): number {
  const base = 33;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdeninitializationShdgpnrismgemgObfV30Fold(text: string): number {
  let acc = 33;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdeninitializationShapObfV31HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 529;
  return h;
}
function rabbitcantdnygsarwdeninitializationShapObfV31SumOdds(nums: number[]): number {
  let acc = 70;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 832;
  }
  return acc;
}
function rabbitcantdnygsarwdeninitializationShapObfV31ClampMod(n: number, m: number): number {
  const span = (m % 30) + 4;
  const x = ((n ^ 2) << 2) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdeninitializichyikowrObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 189) & 10449;
}
function rabbitcantdnygsarwdeninitializichyikowrObfV32ByteFold(s: string): number {
  let x = 77;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 4270;
  return x;
}

/* obfuscation-batch:v33 */
function initiaObfV33HashMrabbitcantdnygsarwdenix(s: string): number {
  let h = 68;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 35)) % 180;
  return h;
}
function initiarabbitcantdnygsarwdenObfV33SumOdds(nums: number[]): number {
  let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 541;
  }
  return acc;
}
function initiaObfV33rabbitcantdnygsarwdenClampMod(n: number, m: number): number {
  const span = (m % 60) + 7;
  const x = ((n ^ 155) << 4) % span;
  return x < 0 ? x + span : x;
}
function initiaObfV33ShirabbitcantdnygsarwdenftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 71) & 27729;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ClampMod(n: number, m: number): number {
  const span = (m % 45) + 2;
  const x = ((n ^ 239) << 2) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 61) & 58465;
}
function rabbitcantdnygsarwdenintowebrnsignmalvsObfV34ByteFold(s: string): number {
  let x = 75;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) & 58371;
  return x;
}
function rabbitcantdnygsarwdenintowebrnsignmalvsObfV34HashMix(s: string): number {
  let h = 31;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 798;
  return h;
}

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdeninitializarabbitcaObfV35ClampMod(n: number, m: number): number {
  const span = (m % 46) + 8;
  const x = ((n ^ 31) << 3) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdeninitializarabbitcaObfV35ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 123) & 10511;
}
function rabbitcantdnygsarwdeninitializarabbitcaObfV35ByteFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 9) & 20976;
  return x;
}
function rabbitcantdnygsarwdeninitializarabbitcaObfV35HashMix(s: string): number {
  let h = 8;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 217;
  return h;
}
