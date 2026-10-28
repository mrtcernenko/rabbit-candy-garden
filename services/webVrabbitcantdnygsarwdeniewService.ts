import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  AppState,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LrabbitcantdnygsarwdenAST_KEY,
  STORAGE_KEYrabbitcantdnygsarwdenS,
  rabbitcantdnygsarwdenConstTouch,
} from './constants/constrabbitcantdnygsarwdenntsVariable';
// autosetup-split-begin
import { webViewServiceObfV5SumOddrabbitcantdnygsarwdens, webViewSrabbitcantdnygsarwdenervicePart02ObfV11SumOdds, webViewServiceObrabbitcantdnygsarwdenfV19HashMix, webViewServicerabbitcantdnygsarwdenObfV21HashMix, webViewSerrabbitcantdnygsarwdenviceObfV14HashMix, webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod, webrabbitcantdnygsarwdenViewServiceObfV13ByteFold, webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod, webViewServrabbitcantdnygsarwdeniceObfV7ClampMod, webViewServiceObfV9ClrabbitcantdnygsarwdenampMod, webViewServiceObfVrabbitcantdnygsarwden6SumOdds, webObfV3HarabbitcantdnygsarwdenshMix, wrabbitcantdnygsarwdenebObfV3ClampMod, wrabbitcantdnygsarwdenebObfV4SumOdds, werabbitcantdnygsarwdenbViewServObfV1ClampMod, swefgdetguhjhoioesMixSeed, swefgdetguhjhoioesClampSpan, webViewServicePart01ObfV11SurabbitcantdnygsarwdenmOdds, webViewServicePart02ObfV27ByteForabbitcantdnygsarwdenld, webViewSrabbitcantdnygsarwdenervicePart02ObfV27HashMix, webViewServicePart02ObfV27SrabbitcantdnygsarwdenumOdds, rabbitcantdnygsarwdenwebViewServicePart0prissmgecObfV28Mix, rabbitcantdnygsarwdenwebViewServicePart0prissmgecObfV28Fold, webViewOrabbitcantdnygsarwdenbfV29Mix, webViewObfV29Foldrabbitcantdnygsarwden, rabbitcantdnygsarwdenwebViewSerdgpnrismgemgalleryObfV30Mix, rabbitcantdnygsarwdenwebViewSerdgpnrismgemgalleryObfV30Fold, webViewServicrabbitcantdnygsarwdeneObfV19ByteFold, webrabbitcantdnygsarwdenViewServiceObfV21ClampMod, werabbitcantdnygsarwdenbViewServiceObfV13ClampMod, webViewSerabbitcantdnygsarwdenrviceObfV7HashMix, webViewServiceObfV10SumOdrabbitcantdnygsarwdends, webViewSerrabbitcantdnygsarwdenvObfV1HashMix, webViewServiceParrabbitcantdnygsarwdent02ObfV11HashMix, webViewSrabbitcantdnygsarwdenervicePart03ObfV13ClampMod, webViewSrabbitcantdnygsarwdenervicePart01ObfV15SumOdds, webViewrabbitcantdnygsarwdenServicePart02ObfV22ShiftXor } from './webViewServrabbitcantdnygsarwdenicePart01';
import { webViewServiceObfV23HashrabbitcantdnygsarwdenMix, webViewServiceObfV24HashMrabbitcantdnygsarwdenix, webViewServrabbitcantdnygsarwdeniceObfV24SumOdds, webrabbitcantdnygsarwdenViewServiceObfV25SumOdds, webViewServrabbitcantdnygsarwdeniceObfV25ClampMod, webVierabbitcantdnygsarwdenwServiceObfV26SumOdds, webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod, webViewServicerabbitcantdnygsarwdenObfV27ClampMod, webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor, rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix, rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold, rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix, rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold, webViewSeObfrabbitcantdnygsarwdenV29Mix, webViewSeOrabbitcantdnygsarwdenbfV29Fold, webViewServiceObfVrabbitcantdnygsarwden22ShiftXor, webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1, webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2, webrabbitcantdnygsarwdenViewServiceObfV24ByteFold, webrabbitcantdnygsarwdenViewServiceObfV24ClampMod, webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor, webViewServicePrabbitcantdnygsarwdenart02ObfV11ClampMod, webViewServiceObfV12SumOddrabbitcantdnygsarwdens, webViewServicePart02OrabbitcantdnygsarwdenbfV15ClampMod, webViewServiceObfrabbitcantdnygsarwdenV16SumOdds, werabbitcantdnygsarwdenbViewServiceObfV17HashMix, webViewServiceObfV18ShifrabbitcantdnygsarwdentXor, webViewServiceObfV20SumOddrabbitcantdnygsarwdens, webViewServiceObfVrabbitcantdnygsarwden16ClampMod, webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds, werabbitcantdnygsarwdenbViewServiceObfV8SumOdds, webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod, webViewServObfV2rabbitcantdnygsarwdenSumOdds, webViewServrabbitcantdnygsarwdenicePart01ObfV13HashMix, webViewrabbitcantdnygsarwdenServicePart03ObfV13ByteFold, webViewServicePart01ObrabbitcantdnygsarwdenfV15ShiftXor, webViewServicePartrabbitcantdnygsarwden02ObfV23SumOdds } from './webViewSerabbitcantdnygsarwdenrvicePart02';
// autosetup-split-end
import { swefgdetguhjhoioesFoldRange, webVirabbitcantdnygsarwdenewServiceObfV21ByteFold, webViewServiceObfV21SumOrabbitcantdnygsarwdendds, webViewServiceObfV20HashMirabbitcantdnygsarwdenx, webViewServiceObfV19SumOrabbitcantdnygsarwdendds, webVirabbitcantdnygsarwdenewServiceObfV18ClampMod, webViewServiceObfrabbitcantdnygsarwdenV18ByteFold, webrabbitcantdnygsarwdenViewServiceObfV17ByteFold, webViewServiceObfV16HashrabbitcantdnygsarwdenMix, webViewServiceObfV15SumOddsrabbitcantdnygsarwden, webVirabbitcantdnygsarwdenewServiceObfV15ClampMod, webVierabbitcantdnygsarwdenwServiceObfV14SumOdds, webViewServiceObfV13rabbitcantdnygsarwdenSumOdds, webViewServiceObfV13ShirabbitcantdnygsarwdenftXor, webVirabbitcantdnygsarwdenewServiceObfV12HashMix, webViewServiceObfV11HrabbitcantdnygsarwdenashMix, webViewServiceObfVrabbitcantdnygsarwden11ClampMod, webViewServirabbitcantdnygsarwdenceObfV7SumOdds, webViewServiceObfV8rabbitcantdnygsarwdenHashMix, webViewServiceObfVrabbitcantdnygsarwden8ClampMod, webViewServirabbitcantdnygsarwdenceObfV9HashMix, webViewServirabbitcantdnygsarwdenceObfV9SumOdds, webViewServiceObfV10HashMirabbitcantdnygsarwdenx, webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod, webViewServiceObfV5HrabbitcantdnygsarwdenashMix, werabbitcantdnygsarwdenbViewServiceObfV6HashMix, webViewServiceObfV6ClrabbitcantdnygsarwdenampMod, wrabbitcantdnygsarwdenebObfV3SumOdds, webObfV4HashrabbitcantdnygsarwdenMix, webObfV4ClarabbitcantdnygsarwdenmpMod, webViewServObrabbitcantdnygsarwdenfV1SumOdds, webViewrabbitcantdnygsarwdenServObfV2HashMix, webViewServObfV2ClrabbitcantdnygsarwdenampMod, webViewServicePart0rabbitcantdnygsarwden1ObfV11HashMix, wrabbitcantdnygsarwdenebViewServicePart01ObfV11ClampMod, webViewServicePart01ObfV13ByteFolrabbitcantdnygsarwdend, webViewServicePart02ObfV13SumOrabbitcantdnygsarwdendds, webViewSrabbitcantdnygsarwdenervicePart03ObfV13ShiftXor, webVirabbitcantdnygsarwdenewServicePart03ObfV13HashMix, wrabbitcantdnygsarwdenebViewServicePart01ObfV15HashMix, webVrabbitcantdnygsarwdeniewServicePart01ObfV15ClampMod, webrabbitcantdnygsarwdenViewServicePart02ObfV15ShiftXor, wrabbitcantdnygsarwdenebViewServicePart02ObfV15ByteFold } from './webViewServirabbitcantdnygsarwdencePart01';

type ViewporabbitcantdnygsarwdenrtBannanaModule = {
  gotolavalec: (url: string) => Promise<boolean>;
  vulimatejodaso: () => Promise<boolean>;
};

function viewporabbitcantdnygsarwdenrtBridge(): ViewporabbitcantdnygsarwdenrtBannanaModule | undefined {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

  void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
  void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');

  return NativeModules.Wefixuwewiwi;
}
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  /** System permission sheet is on screen. Its own pause must not count as a new launch. */
  private swefgdetguhjhoioesPushUiInFlight = false;
  /** Ignore the resume that follows closing the system sheet. */
  private swefgdetguhjhoioesPushUiQuietUntil = 0;
  /** User left the app (Home / recents), not the permission dialog. */
  private swefgdetguhjhoioesLeftAppForReal = false;
  _dummypicklfo5409vb33 = 0;

  constructor() {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
    void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
    void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');

    void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
    void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
    this.swefgdetguhjhoioesBindPushLaunchWatcher();
  }

  rabbitcantdnygsarwdenubscribe(listener: swefgdetguhjhoioesListener): () => void {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

      void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
      void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
        void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
        void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
        void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
    void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
    void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');    void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
    void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
    void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
    void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
    void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
    void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
    void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
    void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
    void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
    void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
    void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
    void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
    void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
    void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
    void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
    void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
    void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

      void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
      void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
      void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
      void webObfV3HarabbitcantdnygsarwdenshMix('xy');
      void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
      void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
      void webObfV4HashrabbitcantdnygsarwdenMix('xy');
      void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
      void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
      void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
      void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
      void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
      void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
      void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
      void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void rabbitcantdnygsarwdenConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

      void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
      void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
        void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
        void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
        void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
    void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
    void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');    void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
    void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
    void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
    void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
    void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
    void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
    void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
    void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
    void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
    void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
    void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
    void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
    void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
    void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
    void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
    void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
    void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

      void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
      void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
      void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
      return (l(this.state));
    });
  }

  /**
   * A second app open is not always a new process. Home → icon keeps JS alive,
   * so the one-shot session flag would skip the repeat native ask. The system
   * sheet itself also backgrounds the activity; that pause is not a launch.
   */
  private swefgdetguhjhoioesBindPushLaunchWatcher(): void {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
    void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
    void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');

    void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
    void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);

    AppState.addEventListener('change', (next) => {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

      void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
      void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
        void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
        void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
        void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
    void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
    void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');    void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
    void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
    void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
      void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
      void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');

      void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
      void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);

      const quiet = Date.now() < this.swefgdetguhjhoioesPushUiQuietUntil;
      if (next === 'background') {
        if (!this.swefgdetguhjhoioesPushUiInFlight && !quiet) {
          this.swefgdetguhjhoioesLeftAppForReal = true;
        }
        return;
      }
      if (next !== 'active') {
        return;
      }
      if (this.swefgdetguhjhoioesPushUiInFlight || quiet) {
        this.swefgdetguhjhoioesLeftAppForReal = false;
        return;
      }
      if (!this.swefgdetguhjhoioesLeftAppForReal) {
        return;
      }
      this.swefgdetguhjhoioesLeftAppForReal = false;
      this.swefgdetguhjhoioesNativePushAskedThisSession = false;
      this.swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
      if (this.state.visible || this.openingInProgress) {
        void this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
    });
  }

  private swefgdetguhjhoioesBeginPushUi(): void {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
    void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
    void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');

    void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = true;
  }

  private swefgdetguhjhoioesEndPushUi(): void {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
    void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
    void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');

    void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = false;
    this.swefgdetguhjhoioesPushUiQuietUntil = Date.now() + 1200;
  }

  private async swefgdetguhjhoioesOpenPushSettings(): Promise<void> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
    void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
    void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');

    void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
    void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);

    try {
      if (Platform.OS === 'android') {
        const { Ginixajozijuj } = NativeModules;
        const packageName =
          Ginixajozijuj && typeof Ginixajozijuj.xuzelulitomace === 'function'
            ? await Ginixajozijuj.xuzelulitomace()
            : '';
        if (packageName) {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            {
              key: 'android.provider.extra.APP_PACKAGE',
              value: String(packageName),
            },
          ]);
          return;
        }
      }
    } catch {
      // Fall through to the app details screen.
    }
    try {
      await Linking.openSettings();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

  void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
  void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
  void webObfV3HarabbitcantdnygsarwdenshMix('xy');
  void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
  void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
  void webObfV4HashrabbitcantdnygsarwdenMix('xy');
  void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
  void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
                if (alreadyGranted) {
          return true;
        }
        this.swefgdetguhjhoioesBeginPushUi();
        try {
          const result = await PermissionsAndroid.request(permission);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } finally {
          this.swefgdetguhjhoioesEndPushUi();
        }
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
                const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          this.swefgdetguhjhoioesBeginPushUi();
          try {
            const newStatus = await requestPermission(messaging);
            return (
              newStatus === AuthorizationStatus.AUTHORIZED ||
              newStatus === AuthorizationStatus.PROVISIONAL
            );
          } finally {
            this.swefgdetguhjhoioesEndPushUi();
          }
        }
        return false;
      }
    } catch (error) {
      void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
      void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
      void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
      void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
      void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
      void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
            void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

            void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
            void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
              void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
              void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
              void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
          void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
          void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');          void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
          void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
          void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
          void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
          void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
          void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
          void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
          void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
          void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
          void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
          void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
          void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
          void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
          void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
          void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
          void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
          void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

            void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
            void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
            void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
            void webObfV3HarabbitcantdnygsarwdenshMix('xy');
            void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
            void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
            void webObfV4HashrabbitcantdnygsarwdenMix('xy');
            void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
            void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
            void this.swefgdetguhjhoioesOpenPushSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_KEYrabbitcantdnygsarwdenS.PrabbitcantdnygsarwdenUSH_MAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native dialog per launch. The 2nd native ask waits until the user leaves and opens the app again.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: first launch. askCount === 1: second launch, ask again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_KEYrabbitcantdnygsarwdenS.PrabbitcantdnygsarwdenUSH_MAIN_ASKED,
        String(nextCount),
      );

      // Second denial → custom prompt (later launches hit askCount >= 2 above).
      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

  void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
  void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
  void webObfV3HarabbitcantdnygsarwdenshMix('xy');
  void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
  void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
  void webObfV4HashrabbitcantdnygsarwdenMix('xy');
  void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
  void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewporabbitcantdnygsarwdenrtBridge()?.gotolavalec) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await viewporabbitcantdnygsarwdenrtBridge().gotolavalec(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewporabbitcantdnygsarwdenrtBridge()?.vulimatejodaso) {
      return;
    }

    try {
      await viewporabbitcantdnygsarwdenrtBridge().vulimatejodaso();
    } catch {
      // silent
    }
  }

  async shrabbitcantdnygsarwdenow(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

  void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
  void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
  void webObfV3HarabbitcantdnygsarwdenshMix('xy');
  void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
  void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
  void webObfV4HashrabbitcantdnygsarwdenMix('xy');
  void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
  void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.rabbitcantdnygsarwdenaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async rabbitcantdnygsarwdenaveLastUrl(url: string): Promise<boolean> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.rabbitcantdnygsarwdenaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async rabbitcantdnygsarwdenaveLastUrlToStorage(url: string): Promise<void> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LrabbitcantdnygsarwdenAST_KEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix("6n6d");
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVierabbitcantdnygsarwdenObfV33SumOdds([33, 40, 35]);
void webVieObfV33ClrabbitcantdnygsarwdenampMod(58, 37);
void rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix("ofanm7");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix("jc56");
void rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObfrabbitcantdnygsarwdenV29Mix(9, 16);
void webViewSeOrabbitcantdnygsarwdenbfV29Fold("wedgpn");
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void rabbitcantdnygsarwdenwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void rabbitcantdnygsarwdenwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServicerabbitcantdnygsarwdenObfV27ClampMod(4, 8);
void webViewSerrabbitcantdnygsarwdenviceObfV27ShiftXor(61, 62);

    void webVierabbitcantdnygsarwdenwServiceObfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV26ClamrabbitcantdnygsarwdenpMod(50, 22);
  void webrabbitcantdnygsarwdenViewServiceObfV25SumOdds([29, 25, 9]);
  void webViewServrabbitcantdnygsarwdeniceObfV25ClampMod(61, 21);
  void webViewSerrabbitcantdnygsarwdenviceObfV25ShiftXor(38, 58);
  void webrabbitcantdnygsarwdenViewServiceObfV24ByteFold('ntt');
  void webViewServiceObfV24HashMrabbitcantdnygsarwdenix('u2c39');
  void webViewServrabbitcantdnygsarwdeniceObfV24SumOdds([83, 15, 11]);
  void webrabbitcantdnygsarwdenViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV23HashrabbitcantdnygsarwdenMix('zat');void webrabbitcantdnygsarwdenViewServiceObfV23SumOdds1([31, 25, 32]);void webViewServiceOrabbitcantdnygsarwdenbfV23ClampMod2(15, 27);void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMirabbitcantdnygsarwdenx('7v');
  void webViewServiceObfV20SumOddrabbitcantdnygsarwdens([21, 27, 16]);
void webViewServiceObrabbitcantdnygsarwdenfV19HashMix('pmqf');void webViewServiceObfV19SumOrabbitcantdnygsarwdendds([24, 28, 16]);void webViewServicrabbitcantdnygsarwdeneObfV19ByteFold('xhp');  void webVirabbitcantdnygsarwdenewServiceObfV18ClampMod(39, 8);
  void webViewServiceObfV18ShifrabbitcantdnygsarwdentXor(76, 79);
  void webViewServiceObfrabbitcantdnygsarwdenV18ByteFold('rrrh');
  void webrabbitcantdnygsarwdenViewServiceObfV17ByteFold('fv9f');
  void werabbitcantdnygsarwdenbViewServiceObfV17HashMix('fv2');
  void webViewServiceObfV16HashrabbitcantdnygsarwdenMix('h3tb');
  void webViewServiceObfrabbitcantdnygsarwdenV16SumOdds([26, 28, 24]);
  void webViewServiceObfVrabbitcantdnygsarwden16ClampMod(54, 53);
  void webViewServiceObfV15SumOddsrabbitcantdnygsarwden([19, 18, 23]);
  void webVirabbitcantdnygsarwdenewServiceObfV15ClampMod(42, 62);
  void webViewSerrabbitcantdnygsarwdenviceObfV14HashMix('hq9');
  void webVierabbitcantdnygsarwdenwServiceObfV14SumOdds([18, 16, 22]);
  void webVrabbitcantdnygsarwdeniewServiceObfV14ClampMod(65, 12);
  void webViewServiceObfV13rabbitcantdnygsarwdenSumOdds([2, 22, 2]);
  void werabbitcantdnygsarwdenbViewServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShirabbitcantdnygsarwdenftXor(6, 23);
  void webrabbitcantdnygsarwdenViewServiceObfV13ByteFold('9k6');
  void webVirabbitcantdnygsarwdenewServiceObfV12HashMix('xy');
  void webViewServiceObfV12SumOddrabbitcantdnygsarwdens([1, 3, 5]);
  void webViewServiceOrabbitcantdnygsarwdenbfV12ClampMod(7, 5);

  void webViewServiceObfV11HrabbitcantdnygsarwdenashMix('xy');
  void webViewSrabbitcantdnygsarwdenerviceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden11ClampMod(7, 5);

  void webViewSerabbitcantdnygsarwdenrviceObfV7HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void webViewServrabbitcantdnygsarwdeniceObfV7ClampMod(7, 5);
  void webViewServiceObfV8rabbitcantdnygsarwdenHashMix('xy');
  void werabbitcantdnygsarwdenbViewServiceObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVrabbitcantdnygsarwden8ClampMod(7, 5);
  void webViewServirabbitcantdnygsarwdenceObfV9HashMix('xy');
  void webViewServirabbitcantdnygsarwdenceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClrabbitcantdnygsarwdenampMod(7, 5);
  void webViewServiceObfV10HashMirabbitcantdnygsarwdenx('xy');
  void webViewServiceObfV10SumOdrabbitcantdnygsarwdends([1, 3, 5]);
  void webViewSerabbitcantdnygsarwdenrviceObfV10ClampMod(7, 5);

    void webViewServiceObfV5HrabbitcantdnygsarwdenashMix('xy');
    void webViewServiceObfV5SumOddrabbitcantdnygsarwdens([1, 3, 5]);
    void webViewSerrabbitcantdnygsarwdenviceObfV5ClampMod(7, 5);
  void werabbitcantdnygsarwdenbViewServiceObfV6HashMix('xy');
  void webViewServiceObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClrabbitcantdnygsarwdenampMod(7, 5);
    void webObfV3HarabbitcantdnygsarwdenshMix('xy');
    void wrabbitcantdnygsarwdenebObfV3SumOdds([1, 3, 5]);
    void wrabbitcantdnygsarwdenebObfV3ClampMod(7, 5);
    void webObfV4HashrabbitcantdnygsarwdenMix('xy');
    void wrabbitcantdnygsarwdenebObfV4SumOdds([1, 3, 5]);
    void webObfV4ClarabbitcantdnygsarwdenmpMod(7, 5);
    void webViewSerrabbitcantdnygsarwdenvObfV1HashMix('xy');
    void webViewServObrabbitcantdnygsarwdenfV1SumOdds([1, 3, 5]);
    void werabbitcantdnygsarwdenbViewServObfV1ClampMod(7, 5);
    void webViewrabbitcantdnygsarwdenServObfV2HashMix('xy');
    void webViewServObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void webViewServObfV2ClrabbitcantdnygsarwdenampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LrabbitcantdnygsarwdenAST_KEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void webViewServicePart0rabbitcantdnygsarwden1ObfV11HashMix('xy');
void webViewServicePart01ObfV11SurabbitcantdnygsarwdenmOdds([1, 3, 5]);
void wrabbitcantdnygsarwdenebViewServicePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void webViewServiceParrabbitcantdnygsarwdent02ObfV11HashMix('xy');
void webViewSrabbitcantdnygsarwdenervicePart02ObfV11SumOdds([1, 3, 5]);
void webViewServicePrabbitcantdnygsarwdenart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
void webViewServicePart01ObfV13ByteFolrabbitcantdnygsarwdend('dzzw');
void webViewServrabbitcantdnygsarwdenicePart01ObfV13HashMix('fs');

/* obfuscation-batch:v13 */
void webViewServicePart02ObfV13SumOrabbitcantdnygsarwdendds([18, 4, 4]);

/* obfuscation-batch:v13 */
void webViewSrabbitcantdnygsarwdenervicePart03ObfV13ClampMod(9, 24);
void webViewSrabbitcantdnygsarwdenervicePart03ObfV13ShiftXor(6, 10);
void webViewrabbitcantdnygsarwdenServicePart03ObfV13ByteFold('rwq');
void webVirabbitcantdnygsarwdenewServicePart03ObfV13HashMix('kbw');
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void wrabbitcantdnygsarwdenebViewServicePart01ObfV15HashMix('96nm');
void webViewSrabbitcantdnygsarwdenervicePart01ObfV15SumOdds([24, 26, 30]);
void webVrabbitcantdnygsarwdeniewServicePart01ObfV15ClampMod(30, 11);
void webViewServicePart01ObrabbitcantdnygsarwdenfV15ShiftXor(4, 31);

/* obfuscation-batch:v15 */
void webViewServicePart02OrabbitcantdnygsarwdenbfV15ClampMod(14, 63);
void webrabbitcantdnygsarwdenViewServicePart02ObfV15ShiftXor(41, 49);
void wrabbitcantdnygsarwdenebViewServicePart02ObfV15ByteFold('8f');
/* obfuscation-batch:v16 */

/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void webVirabbitcantdnygsarwdenewServiceObfV21ByteFold('2m');
void webViewServicerabbitcantdnygsarwdenObfV21HashMix('7am4');
void webViewServiceObfV21SumOrabbitcantdnygsarwdendds([17, 15, 13]);
void webrabbitcantdnygsarwdenViewServiceObfV21ClampMod(81, 10);

/* obfuscation-batch:v22 */
void webViewServiceObfVrabbitcantdnygsarwden22ShiftXor(89, 68);
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v22 */
void webViewrabbitcantdnygsarwdenServicePart02ObfV22ShiftXor(83, 4);
/* obfuscation-batch:v23 */
void webViewServicePartrabbitcantdnygsarwden02ObfV23SumOdds([23, 29, 8]);
/* obfuscation-batch:v24 */
function webViewServicePart02OrabbitcantdnygsarwdenbfV24ByteFold(s: string): number {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
          let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 55769;
  return x;
}
function webViewServicerabbitcantdnygsarwdenPart02ObfV24HashMix(s: string): number {

  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 3) % 92;
  return h;
}
function webViewServicePart02ObfrabbitcantdnygsarwdenV24SumOdds(nums: number[]): number {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
          let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 428;
  }
  return acc;
}

/* obfuscation-batch:v25 */
function webViewServicePart02ObrabbitcantdnygsarwdenfV25ShiftXor(n: number, k: number): number {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
  const x = (n ^ k) << 5;
  return (x ^ 129) & 43284;
}

function webViewServicePart02ObfVrabbitcantdnygsarwden25ByteFold(s: string): number {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 50908;
  return x;
}

function webViewServicePart02ObfVrabbitcantdnygsarwden25HashMix(s: string): number {
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix("jo");
void rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds([38, 1, 24]);
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 779;
  return h;
}

function webViewServicePart02ObfV25SumOddrabbitcantdnygsarwdens(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 681;
  }
  return acc;
}

/* obfuscation-batch:v26 */
function webViewSerabbitcantdnygsarwdenrvicePart02ObfV26HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 37) % 610;
  return h;
}

function webViewServicePart02ObfV26SumrabbitcantdnygsarwdenOdds(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 211;
  }
  return acc;
}

function webVirabbitcantdnygsarwdenewServicePart02ObfV26ClampMod(n: number, m: number): number {
  const span = (m % 59) + 13;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function wrabbitcantdnygsarwdenebViewServicePart02ObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 115) & 34227;
}

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31HashMix(s: string): number {
  let h = 89;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 749;
  return h;
}
function rabbitcantdnygsarwdenwebViewServpmvqkrmObfV31SumOdds(nums: number[]): number {
  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 348;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdenwichyikowrdfpagthmObfV32HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 37)) % 829;
  return h;
}

/* obfuscation-batch:v33 */
function webVierabbitcantdnygsarwdenObfV33SumOdds(nums: number[]): number {
  let acc = 13;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 816;
  }
  return acc;
}
function webVieObfV33ClrabbitcantdnygsarwdenampMod(n: number, m: number): number {
  const span = (m % 53) + 5;
  const x = ((n ^ 154) << 7) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenwebVietowebrnsignmObfV34HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 264;
  return h;
}
function rabbitcantdnygsarwdenwebVietowebrnsignmObfV34SumOdds(nums: number[]): number {
  let acc = 85;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 842;
  }
  return acc;
}
function rabbitcantdnygsarwdenwebVietowebrnsignmObfV34ClampMod(n: number, m: number): number {
  const span = (m % 39) + 12;
  const x = ((n ^ 22) << 4) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35HashMix(s: string): number {
  let h = 18;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 8)) % 330;
  return h;
}
function rabbitcantdnygsarwdenwebVrabbitcantdnygObfV35SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 502;
  }
  return acc;
}
