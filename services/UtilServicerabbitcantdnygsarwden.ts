import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  STORAGE_KEYrabbitcantdnygsarwdenS,
  lirabbitcantdnygsarwdennk,
  rabbitcantdnygsarwdenConstTouch,
} from './constants/constrabbitcantdnygsarwdenntsVariable';
import {
  rabbitcantdnygsarwdenEncrypt,
  rabbitcantdnygsarwdenDecrypt,
} from './CryptoServrabbitcantdnygsarwdenice';
import { rabbitcantdnygsarwdenSendCf } from './rabbitcantdnygsarwdenCfProtocol';
import {
  rabbitcantdnygsarwdenSumSquares,
  rabbitcantdnygsarwdenAverageAbsoluteDeviation,
  rabbitcantdnygsarwdenGcdPair,
  rabbitcantdnygsarwdenXorFold,
  rabbitcantdnygsarwdenModSpan,
  rabbitcantdnygsarwdenStrLenSum,
  rabbitcantdnygsarwdenLcmPair,
  rabbitcantdnygsarwdenAbsDiff,
  rabbitcantdnygsarwdenDotFold,
  rabbitcantdnygsarwdenMinPair,
  rabbitcantdnygsarwdenMaxPair,
  rabbitcantdnygsarwdenSignVal,
  rabbitcantdnygsarwdenRevStr,
  rabbitcantdnygsarwdenSumDiff,
  rabbitcantdnygsarwdenConcatLen,
  rabbitcantdnygsarwdenNormMod,
  rabbitcantdnygsarwdenPairAvg,
  rabbitcantdnygsarwdenCharCodeSum,
  rabbitcantdnygsarwdenEvenCount,
  rabbitcantdnygsarwdenTrimLen,
  rabbitcantdnygsarwdenOddCount,
  rabbitcantdnygsarwdenMidAvg,
  rabbitcantdnygsarwdenStrHash,
  rabbitcantdnygsarwdenFloorDiv,
  rabbitcantdnygsarwdenPowSum,
  rabbitcantdnygsarwdenPrefixLen,
  rabbitcantdnygsarwdenJoinLen,
  rabbitcantdnygsarwdenIsEven,
  rabbitcantdnygsarwdenRangeSpan,
  rabbitcantdnygsarwdenHalfSum,
  rabbitcantdnygsarwdenDigitSum,
  rabbitcantdnygsarwdenBoolOr,
  rabbitcantdnygsarwdenSqDiff,
  rabbitcantdnygsarwdenLerpVal,
  rabbitcantdnygsarwdenWrapIndex,
  rabbitcantdnygsarwdenCountTruthy,
} from './UtilServrabbitcantdnygsarwdenicePart02';
// autosetup-split-begin
import { UtilServiceObfV17SrabbitcantdnygsarwdenhiftXor, UtilServiceObfV18ShiftrabbitcantdnygsarwdenXor, UrabbitcantdnygsarwdentilServiceObfV20HashMix, UtilServiceObfV23HasrabbitcantdnygsarwdenhMix1, UtilServicrabbitcantdnygsarwdeneObfV25ClampMod, UtirabbitcantdnygsarwdenlServiceObfV26HashMix, rabbitcantdnygsarwdenMinValue, UtilServicePart02ObfVrabbitcantdnygsarwden6SumOdds, rabbitcantdnygsarwdenMaxValue, rabbitcantdnygsarwdenRangeValue, UtilServicrabbitcantdnygsarwdeneObfV6HashMix, UtilrabbitcantdnygsarwdenServiceObfV10SumOdds, UtilServiceObfV16rabbitcantdnygsarwdenByteFold, rabbitcantdnygsarwdenBitMix, rabbitcantdnygsarwdenBoolAnd, rabbitcantdnygsarwdenBoolXor, rabbitcantdnygsarwdenMeanVal, rabbitcantdnygsarwdenRotSum, rabbitcantdnygsarwdenProductFold, UtiObfV4SrabbitcantdnygsarwdenumOdds, UtilSrabbitcantdnygsarwdenervicePart01ObfV22ShiftXor, UtilServicePart01ObfV22rabbitcantdnygsarwdenByteFold, UtilServicePart01ObrabbitcantdnygsarwdenfV22HashMix, UtilServicePartrabbitcantdnygsarwden01ObfV23HashMix, UtilServicePart01ObrabbitcantdnygsarwdenfV23SumOdds1, UtilServicePart01ObfV23ClarabbitcantdnygsarwdenmpMod2, UtilServicePart01ObfV23ShiftXor3rabbitcantdnygsarwden, UtilServicePart01ObfV24SumOdrabbitcantdnygsarwdends, UtilServicePart01ObrabbitcantdnygsarwdenfV25ClampMod, UtilServicePrabbitcantdnygsarwdenart01ObfV25ShiftXor, UtilServicerabbitcantdnygsarwdenPart01ObfV25ByteFold, UrabbitcantdnygsarwdentilServicePart01ObfV26SumOdds, UtilServicePartrabbitcantdnygsarwden01ObfV26ClampMod, UtilServicePart01ObfV26ShiftXrabbitcantdnygsarwdenor, UtilServrabbitcantdnygsarwdenicePart01ObfV26ByteFold, UtilServiceObfV27ByteForabbitcantdnygsarwdenld, UtilServiceObfV27HarabbitcantdnygsarwdenshMix, UtilSrabbitcantdnygsarwdenerviceObfV17SumOdds, UrabbitcantdnygsarwdentilServiceObfV17ClampMod, UtilServiceObfVrabbitcantdnygsarwden18ClampMod, UtilServiceObfV18BrabbitcantdnygsarwdenyteFold, UtilServiceObfV1rabbitcantdnygsarwden8HashMix, UtilrabbitcantdnygsarwdenServiceObfV19ShiftXor, UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor, UtirabbitcantdnygsarwdenlServiceObfV21ByteFold, UtilServicrabbitcantdnygsarwdeneObfV21HashMix, UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds, UtilServiceObrabbitcantdnygsarwdenfV22SumOdds, UtilServicerabbitcantdnygsarwdenObfV22ShiftXor, UtilServiceObfV23rabbitcantdnygsarwdenByteFold, UtilServiceObfV23SrabbitcantdnygsarwdenumOdds2, UtilServiceOrabbitcantdnygsarwdenbfV23ClampMod3, UtrabbitcantdnygsarwdenilServiceObfV24HashMix, UtilServiceObfV24SumOddrabbitcantdnygsarwdens, UtilServirabbitcantdnygsarwdenceObfV24ClampMod, UrabbitcantdnygsarwdentilServiceObfV25ByteFold, UtilServiceObfV25rabbitcantdnygsarwdenHashMix, UtilServiceOrabbitcantdnygsarwdenbfV25SumOdds, UtilServirabbitcantdnygsarwdenceObfV26SumOdds, UtilServiceObfVrabbitcantdnygsarwden26ClampMod, UrabbitcantdnygsarwdentilServiceObfV5HashMix, UtilServiceObfV5rabbitcantdnygsarwdenSumOdds, UtilServrabbitcantdnygsarwdeniceObfV5ClampMod, UtilServiceObrabbitcantdnygsarwdenfV6SumOdds, UtilSerrabbitcantdnygsarwdenviceObfV6ClampMod, UtilServicerabbitcantdnygsarwdenObfV8HashMix, UtilServiceObfVrabbitcantdnygsarwden8SumOdds, UtilSerabbitcantdnygsarwdenrviceObfV8ClampMod, UrabbitcantdnygsarwdentilServiceObfV9HashMix, UtirabbitcantdnygsarwdenlServiceObfV9SumOdds, UtilServiceObfV9ClamprabbitcantdnygsarwdenMod, UtilServiceObrabbitcantdnygsarwdenfV10HashMix, UtilServiceObfV10ClarabbitcantdnygsarwdenmpMod, UtirabbitcantdnygsarwdenlServiceObfV12HashMix, UtilServiceObfVrabbitcantdnygsarwden12SumOdds, UtilServiceObfrabbitcantdnygsarwdenV12ClampMod, UtilServiceObfV15HashMirabbitcantdnygsarwdenx, UtilServrabbitcantdnygsarwdeniceObfV16HashMix, UtilServiceObfrabbitcantdnygsarwdenV11HashMix, UtilServirabbitcantdnygsarwdenceObfV7SumOdds, UtiObfVrabbitcantdnygsarwden4HashMix, UtilServiceObfV1SumOddsrabbitcantdnygsarwden, UtilServicrabbitcantdnygsarwdeneObfV1HashMix, UtilServrabbitcantdnygsarwdenicePart02ObfV6ClampMod, UtilServicerabbitcantdnygsarwdenObfV7HashMix, UtiObfV3HashrabbitcantdnygsarwdenMix, UtilSerabbitcantdnygsarwdenrviceObfV1ClampMod, UtilServicePart01ObfV21ByterabbitcantdnygsarwdenFold, UtilServicePart01ObfVrabbitcantdnygsarwden21HashMix, UtilServiceObfV14SumOdrabbitcantdnygsarwdends, UtilServiceObfV14ClampMrabbitcantdnygsarwdenod, UtilServiceObfV14ShirabbitcantdnygsarwdenftXor, UtilServiceOrabbitcantdnygsarwdenbfV14ByteFold, UrabbitcantdnygsarwdentilServiceObfV13ShiftXor, UtilServicrabbitcantdnygsarwdeneObfV11SumOdds, UtilSerabbitcantdnygsarwdenrviceObfV11ClampMod, UtilServiceObfV7ClrabbitcantdnygsarwdenampMod, UtiOrabbitcantdnygsarwdenbfV3SumOdds, UtiObfV3ClampMrabbitcantdnygsarwdenod, UtiObfV4ClamprabbitcantdnygsarwdenMod, UtilServiceObfV2HashMixrabbitcantdnygsarwden, UtilServiceObfV2rabbitcantdnygsarwdenSumOdds, UtilServiceObfV2ClampMrabbitcantdnygsarwdenod, UtilServiceParrabbitcantdnygsarwdent02ObfV6HashMix, UtilServicePart02ObfVrabbitcantdnygsarwden14HashMix } from './UtilSerabbitcantdnygsarwdenrvicePart01';
// autosetup-split-end

export class Utrabbitcantdnygsarwdenils {

  static async rabbitcantdnygsarwdenGetLink(): Promise<string> {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34ByteFold("7kbc");
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34HashMix("cfmdm");
void UrabbitcantdnygsarwdentilSeObfV33SumOdds([3, 18, 21]);
void UtilSerabbitcantdnygsarwdenObfV33ClampMod(60, 31);
void UtilSerabbitcantdnygsarwdenObfV33ShiftXor(46, 41);
void UtilSeObfVrabbitcantdnygsarwden33ByteFold("k5");
void rabbitcantdnygsarwdenUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ClampMod(7, 62);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ShiftXor(1, 80);
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31HashMix("lehib");
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Mirabbitcantdnygsarwdenx(8, 27);
void UtirabbitcantdnygsarwdenlServiObfV30Fold("udgpnr");
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteForabbitcantdnygsarwdenld('nsf');
void UtilServiceObfV27HarabbitcantdnygsarwdenshMix('4m');

    void UtirabbitcantdnygsarwdenlServiceObfV26HashMix('9a');
    void UtilServirabbitcantdnygsarwdenceObfV26SumOdds([35, 10, 27]);
    void UtilServiceObfVrabbitcantdnygsarwden26ClampMod(76, 82);
  void UrabbitcantdnygsarwdentilServiceObfV25ByteFold('mb28');
  void UtilServiceObfV25rabbitcantdnygsarwdenHashMix('sa4');
  void UtilServiceOrabbitcantdnygsarwdenbfV25SumOdds([22, 25, 31]);
  void UtilServicrabbitcantdnygsarwdeneObfV25ClampMod(12, 46);
  void UtrabbitcantdnygsarwdenilServiceObfV24HashMix('wv');
  void UtilServiceObfV24SumOddrabbitcantdnygsarwdens([88, 17, 34]);
  void UtilServirabbitcantdnygsarwdenceObfV24ClampMod(54, 15);
void UtilServiceObfV23HasrabbitcantdnygsarwdenhMix1('3c');void UtilServiceObfV23SrabbitcantdnygsarwdenumOdds2([33, 25, 18]);void UtilServiceOrabbitcantdnygsarwdenbfV23ClampMod3(82, 89);void UtilServiceObrabbitcantdnygsarwdenfV22SumOdds([9, 20, 16]);
void UtilServicerabbitcantdnygsarwdenObfV22ShiftXor(49, 56);void UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor(72, 39);
void UtirabbitcantdnygsarwdenlServiceObfV21ByteFold('r3gf');
void UtilServicrabbitcantdnygsarwdeneObfV21HashMix('pg');
void UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds([25, 15, 11]);
  void UrabbitcantdnygsarwdentilServiceObfV20HashMix('6f5s');
void UtilrabbitcantdnygsarwdenServiceObfV19ShiftXor(24, 86);  void UtilServiceObfVrabbitcantdnygsarwden18ClampMod(76, 32);
  void UtilServiceObfV18ShiftrabbitcantdnygsarwdenXor(52, 6);
  void UtilServiceObfV18BrabbitcantdnygsarwdenyteFold('gdf');
  void UtilServiceObfV1rabbitcantdnygsarwden8HashMix('4n');
  void UtilSrabbitcantdnygsarwdenerviceObfV17SumOdds([11, 14, 27]);
  void UrabbitcantdnygsarwdentilServiceObfV17ClampMod(42, 44);
  void UtilServiceObfV17SrabbitcantdnygsarwdenhiftXor(45, 6);
  void UtilServiceObfV16rabbitcantdnygsarwdenByteFold('vktf');
  void UtilServrabbitcantdnygsarwdeniceObfV16HashMix('fz');
  void UtilServiceObfV15HashMirabbitcantdnygsarwdenx('bv99');
  void UtilServiceObfV14SumOdrabbitcantdnygsarwdends([12, 9, 18]);
  void UtilServiceObfV14ClampMrabbitcantdnygsarwdenod(24, 55);
  void UtilServiceObfV14ShirabbitcantdnygsarwdenftXor(80, 79);
  void UtilServiceOrabbitcantdnygsarwdenbfV14ByteFold('p2j');
  void UrabbitcantdnygsarwdentilServiceObfV13ShiftXor(69, 52);
  void UtirabbitcantdnygsarwdenlServiceObfV12HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden12SumOdds([1, 3, 5]);
  void UtilServiceObfrabbitcantdnygsarwdenV12ClampMod(7, 5);

  void UtilServiceObfrabbitcantdnygsarwdenV11HashMix('xy');
  void UtilServicrabbitcantdnygsarwdeneObfV11SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV11ClampMod(7, 5);

  void UtilServicerabbitcantdnygsarwdenObfV7HashMix('xy');
  void UtilServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void UtilServiceObfV7ClrabbitcantdnygsarwdenampMod(7, 5);
  void UtilServicerabbitcantdnygsarwdenObfV8HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden8SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV8ClampMod(7, 5);
  void UrabbitcantdnygsarwdentilServiceObfV9HashMix('xy');
  void UtirabbitcantdnygsarwdenlServiceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClamprabbitcantdnygsarwdenMod(7, 5);
  void UtilServiceObrabbitcantdnygsarwdenfV10HashMix('xy');
  void UtilrabbitcantdnygsarwdenServiceObfV10SumOdds([1, 3, 5]);
  void UtilServiceObfV10ClarabbitcantdnygsarwdenmpMod(7, 5);

    void UrabbitcantdnygsarwdentilServiceObfV5HashMix('xy');
    void UtilServiceObfV5rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void UtilServrabbitcantdnygsarwdeniceObfV5ClampMod(7, 5);
  void UtilServicrabbitcantdnygsarwdeneObfV6HashMix('xy');
  void UtilServiceObrabbitcantdnygsarwdenfV6SumOdds([1, 3, 5]);
  void UtilSerrabbitcantdnygsarwdenviceObfV6ClampMod(7, 5);
    void UtiObfV3HashrabbitcantdnygsarwdenMix('xy');
    void UtiOrabbitcantdnygsarwdenbfV3SumOdds([1, 3, 5]);
    void UtiObfV3ClampMrabbitcantdnygsarwdenod(7, 5);
    void UtiObfVrabbitcantdnygsarwden4HashMix('xy');
    void UtiObfV4SrabbitcantdnygsarwdenumOdds([1, 3, 5]);
    void UtiObfV4ClamprabbitcantdnygsarwdenMod(7, 5);
    void UtilServicrabbitcantdnygsarwdeneObfV1HashMix('xy');
    void UtilServiceObfV1SumOddsrabbitcantdnygsarwden([1, 3, 5]);
    void UtilSerabbitcantdnygsarwdenrviceObfV1ClampMod(7, 5);
    void UtilServiceObfV2HashMixrabbitcantdnygsarwden('xy');
    void UtilServiceObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void UtilServiceObfV2ClampMrabbitcantdnygsarwdenod(7, 5);
    void UtilServiceParrabbitcantdnygsarwdent02ObfV6HashMix('xy');
    void UtilServicePart02ObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
    void UtilServrabbitcantdnygsarwdenicePart02ObfV6ClampMod(7, 5);
    void rabbitcantdnygsarwdenConstTouch();
    void rabbitcantdnygsarwdenMinValue([1, 2, 3]);
    void rabbitcantdnygsarwdenMaxValue([1, 2, 3]);
    void rabbitcantdnygsarwdenRangeValue([1, 2, 3]);
    void rabbitcantdnygsarwdenSumSquares([1, 2]);
    void rabbitcantdnygsarwdenAverageAbsoluteDeviation([1, 2, 3]);
    void rabbitcantdnygsarwdenGcdPair(12, 8);
    void rabbitcantdnygsarwdenMeanVal([2, 4, 6]);
    void rabbitcantdnygsarwdenXorFold([1, 2, 3]);
    void rabbitcantdnygsarwdenModSpan(7, 5);
    void rabbitcantdnygsarwdenStrLenSum(['a', 'bc']);
    void rabbitcantdnygsarwdenLcmPair(4, 6);
    void rabbitcantdnygsarwdenAbsDiff(5, 2);
    void rabbitcantdnygsarwdenDotFold([1, 2], [3, 4]);
    void rabbitcantdnygsarwdenMinPair(3, 7);
    void rabbitcantdnygsarwdenMaxPair(3, 7);
    void rabbitcantdnygsarwdenSignVal(-1);
    void rabbitcantdnygsarwdenRevStr('ab');
    void rabbitcantdnygsarwdenProductFold([2, 3]);
    void rabbitcantdnygsarwdenSumDiff([1, 3, 5]);
    void rabbitcantdnygsarwdenConcatLen(['a', '', 'b']);
    void rabbitcantdnygsarwdenNormMod(7, 4);
    void rabbitcantdnygsarwdenBoolXor(true, false);
    void rabbitcantdnygsarwdenPairAvg(4, 6);
    void rabbitcantdnygsarwdenCharCodeSum('ab');
    void rabbitcantdnygsarwdenEvenCount([2, 4, 6]);
    void rabbitcantdnygsarwdenTrimLen(' abc ');
    void rabbitcantdnygsarwdenOddCount([1, 2, 3]);
    void rabbitcantdnygsarwdenBitMix(3, 5);
    void rabbitcantdnygsarwdenMidAvg(1, 2, 3);
    void rabbitcantdnygsarwdenStrHash('xy');
    void rabbitcantdnygsarwdenFloorDiv(9, 4);
    void rabbitcantdnygsarwdenPowSum([1, 2, 3]);
    void rabbitcantdnygsarwdenPrefixLen('abcd', 2);
    void rabbitcantdnygsarwdenRotSum(3, 5);
    void rabbitcantdnygsarwdenJoinLen(['x', 'y']);
    void rabbitcantdnygsarwdenIsEven(4);
    void rabbitcantdnygsarwdenRangeSpan([1, 9, 3]);
    void rabbitcantdnygsarwdenBoolAnd(true, false);
    void rabbitcantdnygsarwdenHalfSum(4, 6);
    void rabbitcantdnygsarwdenDigitSum(123);
    void rabbitcantdnygsarwdenBoolOr(true, false);
    void rabbitcantdnygsarwdenSqDiff(5, 2);
    void rabbitcantdnygsarwdenLerpVal(0, 10, 0.5);
    void rabbitcantdnygsarwdenWrapIndex(5, 3);
    void rabbitcantdnygsarwdenCountTruthy([true, false, true]);
    try {
      const encryptedLink: string = lirabbitcantdnygsarwdennk;
            if (!encryptedLink || encryptedLink === '') {
                return '';
      }
      const decryptedLink = rabbitcantdnygsarwdenDecrypt(encryptedLink);
            if (!decryptedLink || decryptedLink === '') {
        return '';
      }
      try {
        await AsyncStorage.setItem(
          STORAGE_KEYrabbitcantdnygsarwdenS.LIrabbitcantdnygsarwden_,
          rabbitcantdnygsarwdenEncrypt(decryptedLink),
        );
      } catch {
        // Cache write is best-effort.
      }
      return decryptedLink;
    } catch {
      return '';
    }
  }

  static async rabbitcantdnygsarwdenGetUserBlocke(): Promise<number> {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34ByteFold("7kbc");
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34HashMix("cfmdm");
void UrabbitcantdnygsarwdentilSeObfV33SumOdds([3, 18, 21]);
void UtilSerabbitcantdnygsarwdenObfV33ClampMod(60, 31);
void UtilSerabbitcantdnygsarwdenObfV33ShiftXor(46, 41);
void UtilSeObfVrabbitcantdnygsarwden33ByteFold("k5");
void rabbitcantdnygsarwdenUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ClampMod(7, 62);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ShiftXor(1, 80);
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31HashMix("lehib");
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Mirabbitcantdnygsarwdenx(8, 27);
void UtirabbitcantdnygsarwdenlServiObfV30Fold("udgpnr");
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteForabbitcantdnygsarwdenld('nsf');
void UtilServiceObfV27HarabbitcantdnygsarwdenshMix('4m');

    void UtirabbitcantdnygsarwdenlServiceObfV26HashMix('9a');
    void UtilServirabbitcantdnygsarwdenceObfV26SumOdds([35, 10, 27]);
    void UtilServiceObfVrabbitcantdnygsarwden26ClampMod(76, 82);
  void UrabbitcantdnygsarwdentilServiceObfV25ByteFold('mb28');
  void UtilServiceObfV25rabbitcantdnygsarwdenHashMix('sa4');
  void UtilServiceOrabbitcantdnygsarwdenbfV25SumOdds([22, 25, 31]);
  void UtilServicrabbitcantdnygsarwdeneObfV25ClampMod(12, 46);
  void UtrabbitcantdnygsarwdenilServiceObfV24HashMix('wv');
  void UtilServiceObfV24SumOddrabbitcantdnygsarwdens([88, 17, 34]);
  void UtilServirabbitcantdnygsarwdenceObfV24ClampMod(54, 15);
void UtilServiceObfV23HasrabbitcantdnygsarwdenhMix1('3c');void UtilServiceObfV23SrabbitcantdnygsarwdenumOdds2([33, 25, 18]);void UtilServiceOrabbitcantdnygsarwdenbfV23ClampMod3(82, 89);void UtilServiceObrabbitcantdnygsarwdenfV22SumOdds([9, 20, 16]);
void UtilServicerabbitcantdnygsarwdenObfV22ShiftXor(49, 56);void UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor(72, 39);
void UtirabbitcantdnygsarwdenlServiceObfV21ByteFold('r3gf');
void UtilServicrabbitcantdnygsarwdeneObfV21HashMix('pg');
void UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds([25, 15, 11]);
  void UrabbitcantdnygsarwdentilServiceObfV20HashMix('6f5s');
void UtilrabbitcantdnygsarwdenServiceObfV19ShiftXor(24, 86);  void UtilServiceObfVrabbitcantdnygsarwden18ClampMod(76, 32);
  void UtilServiceObfV18ShiftrabbitcantdnygsarwdenXor(52, 6);
  void UtilServiceObfV18BrabbitcantdnygsarwdenyteFold('gdf');
  void UtilServiceObfV1rabbitcantdnygsarwden8HashMix('4n');
  void UtilSrabbitcantdnygsarwdenerviceObfV17SumOdds([11, 14, 27]);
  void UrabbitcantdnygsarwdentilServiceObfV17ClampMod(42, 44);
  void UtilServiceObfV17SrabbitcantdnygsarwdenhiftXor(45, 6);
  void UtilServiceObfV16rabbitcantdnygsarwdenByteFold('vktf');
  void UtilServrabbitcantdnygsarwdeniceObfV16HashMix('fz');
  void UtilServiceObfV15HashMirabbitcantdnygsarwdenx('bv99');
  void UtilServiceObfV14SumOdrabbitcantdnygsarwdends([12, 9, 18]);
  void UtilServiceObfV14ClampMrabbitcantdnygsarwdenod(24, 55);
  void UtilServiceObfV14ShirabbitcantdnygsarwdenftXor(80, 79);
  void UtilServiceOrabbitcantdnygsarwdenbfV14ByteFold('p2j');
  void UrabbitcantdnygsarwdentilServiceObfV13ShiftXor(69, 52);
  void UtirabbitcantdnygsarwdenlServiceObfV12HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden12SumOdds([1, 3, 5]);
  void UtilServiceObfrabbitcantdnygsarwdenV12ClampMod(7, 5);

  void UtilServiceObfrabbitcantdnygsarwdenV11HashMix('xy');
  void UtilServicrabbitcantdnygsarwdeneObfV11SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV11ClampMod(7, 5);

  void UtilServicerabbitcantdnygsarwdenObfV7HashMix('xy');
  void UtilServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void UtilServiceObfV7ClrabbitcantdnygsarwdenampMod(7, 5);
  void UtilServicerabbitcantdnygsarwdenObfV8HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden8SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV8ClampMod(7, 5);
  void UrabbitcantdnygsarwdentilServiceObfV9HashMix('xy');
  void UtirabbitcantdnygsarwdenlServiceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClamprabbitcantdnygsarwdenMod(7, 5);
  void UtilServiceObrabbitcantdnygsarwdenfV10HashMix('xy');
  void UtilrabbitcantdnygsarwdenServiceObfV10SumOdds([1, 3, 5]);
  void UtilServiceObfV10ClarabbitcantdnygsarwdenmpMod(7, 5);

    void UrabbitcantdnygsarwdentilServiceObfV5HashMix('xy');
    void UtilServiceObfV5rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void UtilServrabbitcantdnygsarwdeniceObfV5ClampMod(7, 5);
  void UtilServicrabbitcantdnygsarwdeneObfV6HashMix('xy');
  void UtilServiceObrabbitcantdnygsarwdenfV6SumOdds([1, 3, 5]);
  void UtilSerrabbitcantdnygsarwdenviceObfV6ClampMod(7, 5);
    void UtiObfV3HashrabbitcantdnygsarwdenMix('xy');
    void UtiOrabbitcantdnygsarwdenbfV3SumOdds([1, 3, 5]);
    void UtiObfV3ClampMrabbitcantdnygsarwdenod(7, 5);
    void UtiObfVrabbitcantdnygsarwden4HashMix('xy');
    void UtiObfV4SrabbitcantdnygsarwdenumOdds([1, 3, 5]);
    void UtiObfV4ClamprabbitcantdnygsarwdenMod(7, 5);
    void UtilServicrabbitcantdnygsarwdeneObfV1HashMix('xy');
    void UtilServiceObfV1SumOddsrabbitcantdnygsarwden([1, 3, 5]);
    void UtilSerabbitcantdnygsarwdenrviceObfV1ClampMod(7, 5);
    void UtilServiceObfV2HashMixrabbitcantdnygsarwden('xy');
    void UtilServiceObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void UtilServiceObfV2ClampMrabbitcantdnygsarwdenod(7, 5);
    void UtilServiceParrabbitcantdnygsarwdent02ObfV6HashMix('xy');
    void UtilServicePart02ObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
    void UtilServrabbitcantdnygsarwdenicePart02ObfV6ClampMod(7, 5);
    void rabbitcantdnygsarwdenMinValue([1, 2, 3]);
    void rabbitcantdnygsarwdenMaxValue([1, 2, 3]);
    void rabbitcantdnygsarwdenRangeValue([1, 2, 3]);
    void rabbitcantdnygsarwdenSumSquares([1, 2]);
    void rabbitcantdnygsarwdenAverageAbsoluteDeviation([1, 2, 3]);
    void rabbitcantdnygsarwdenGcdPair(12, 8);
    void rabbitcantdnygsarwdenMeanVal([2, 4, 6]);
    void rabbitcantdnygsarwdenXorFold([1, 2, 3]);
    void rabbitcantdnygsarwdenModSpan(7, 5);
    void rabbitcantdnygsarwdenStrLenSum(['a', 'bc']);
    void rabbitcantdnygsarwdenLcmPair(4, 6);
    void rabbitcantdnygsarwdenAbsDiff(5, 2);
    void rabbitcantdnygsarwdenDotFold([1, 2], [3, 4]);
    void rabbitcantdnygsarwdenMinPair(3, 7);
    void rabbitcantdnygsarwdenMaxPair(3, 7);
    void rabbitcantdnygsarwdenSignVal(-1);
    void rabbitcantdnygsarwdenRevStr('ab');
    void rabbitcantdnygsarwdenProductFold([2, 3]);
    void rabbitcantdnygsarwdenSumDiff([1, 3, 5]);
    void rabbitcantdnygsarwdenConcatLen(['a', '', 'b']);
    void rabbitcantdnygsarwdenNormMod(7, 4);
    void rabbitcantdnygsarwdenBoolXor(true, false);
    void rabbitcantdnygsarwdenPairAvg(4, 6);
    void rabbitcantdnygsarwdenCharCodeSum('ab');
    void rabbitcantdnygsarwdenEvenCount([2, 4, 6]);
    void rabbitcantdnygsarwdenTrimLen(' abc ');
    void rabbitcantdnygsarwdenOddCount([1, 2, 3]);
    void rabbitcantdnygsarwdenBitMix(3, 5);
    void rabbitcantdnygsarwdenMidAvg(1, 2, 3);
    void rabbitcantdnygsarwdenStrHash('xy');
    void rabbitcantdnygsarwdenFloorDiv(9, 4);
    void rabbitcantdnygsarwdenPowSum([1, 2, 3]);
    void rabbitcantdnygsarwdenPrefixLen('abcd', 2);
    void rabbitcantdnygsarwdenRotSum(3, 5);
    void rabbitcantdnygsarwdenJoinLen(['x', 'y']);
    void rabbitcantdnygsarwdenIsEven(4);
    void rabbitcantdnygsarwdenRangeSpan([1, 9, 3]);
    void rabbitcantdnygsarwdenBoolAnd(true, false);
    void rabbitcantdnygsarwdenHalfSum(4, 6);
    void rabbitcantdnygsarwdenDigitSum(123);
    void rabbitcantdnygsarwdenBoolOr(true, false);
    void rabbitcantdnygsarwdenSqDiff(5, 2);
    void rabbitcantdnygsarwdenLerpVal(0, 10, 0.5);
    void rabbitcantdnygsarwdenWrapIndex(5, 3);
    void rabbitcantdnygsarwdenCountTruthy([true, false, true]);
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEYrabbitcantdnygsarwdenS.US_BLOCKrabbitcantdnygsarwden);
      return value ? parseInt(value, 10) : 0;
    } catch {
      return 0;
    }
  }

  static async rabbitcantdnygsarwdenSetUserBlocke(value: number): Promise<void> {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34ByteFold("7kbc");
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34HashMix("cfmdm");
void UrabbitcantdnygsarwdentilSeObfV33SumOdds([3, 18, 21]);
void UtilSerabbitcantdnygsarwdenObfV33ClampMod(60, 31);
void UtilSerabbitcantdnygsarwdenObfV33ShiftXor(46, 41);
void UtilSeObfVrabbitcantdnygsarwden33ByteFold("k5");
void rabbitcantdnygsarwdenUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ClampMod(7, 62);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ShiftXor(1, 80);
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31HashMix("lehib");
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Mirabbitcantdnygsarwdenx(8, 27);
void UtirabbitcantdnygsarwdenlServiObfV30Fold("udgpnr");
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteForabbitcantdnygsarwdenld('nsf');
void UtilServiceObfV27HarabbitcantdnygsarwdenshMix('4m');

    void UtirabbitcantdnygsarwdenlServiceObfV26HashMix('9a');
    void UtilServirabbitcantdnygsarwdenceObfV26SumOdds([35, 10, 27]);
    void UtilServiceObfVrabbitcantdnygsarwden26ClampMod(76, 82);
  void UrabbitcantdnygsarwdentilServiceObfV25ByteFold('mb28');
  void UtilServiceObfV25rabbitcantdnygsarwdenHashMix('sa4');
  void UtilServiceOrabbitcantdnygsarwdenbfV25SumOdds([22, 25, 31]);
  void UtilServicrabbitcantdnygsarwdeneObfV25ClampMod(12, 46);
  void UtrabbitcantdnygsarwdenilServiceObfV24HashMix('wv');
  void UtilServiceObfV24SumOddrabbitcantdnygsarwdens([88, 17, 34]);
  void UtilServirabbitcantdnygsarwdenceObfV24ClampMod(54, 15);
void UtilServiceObfV23HasrabbitcantdnygsarwdenhMix1('3c');void UtilServiceObfV23SrabbitcantdnygsarwdenumOdds2([33, 25, 18]);void UtilServiceOrabbitcantdnygsarwdenbfV23ClampMod3(82, 89);void UtilServiceObrabbitcantdnygsarwdenfV22SumOdds([9, 20, 16]);
void UtilServicerabbitcantdnygsarwdenObfV22ShiftXor(49, 56);void UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor(72, 39);
void UtirabbitcantdnygsarwdenlServiceObfV21ByteFold('r3gf');
void UtilServicrabbitcantdnygsarwdeneObfV21HashMix('pg');
void UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds([25, 15, 11]);
  void UrabbitcantdnygsarwdentilServiceObfV20HashMix('6f5s');
void UtilrabbitcantdnygsarwdenServiceObfV19ShiftXor(24, 86);  void UtilServiceObfVrabbitcantdnygsarwden18ClampMod(76, 32);
  void UtilServiceObfV18ShiftrabbitcantdnygsarwdenXor(52, 6);
  void UtilServiceObfV18BrabbitcantdnygsarwdenyteFold('gdf');
  void UtilServiceObfV1rabbitcantdnygsarwden8HashMix('4n');
  void UtilSrabbitcantdnygsarwdenerviceObfV17SumOdds([11, 14, 27]);
  void UrabbitcantdnygsarwdentilServiceObfV17ClampMod(42, 44);
  void UtilServiceObfV17SrabbitcantdnygsarwdenhiftXor(45, 6);
  void UtilServiceObfV16rabbitcantdnygsarwdenByteFold('vktf');
  void UtilServrabbitcantdnygsarwdeniceObfV16HashMix('fz');
  void UtilServiceObfV15HashMirabbitcantdnygsarwdenx('bv99');
  void UtilServiceObfV14SumOdrabbitcantdnygsarwdends([12, 9, 18]);
  void UtilServiceObfV14ClampMrabbitcantdnygsarwdenod(24, 55);
  void UtilServiceObfV14ShirabbitcantdnygsarwdenftXor(80, 79);
  void UtilServiceOrabbitcantdnygsarwdenbfV14ByteFold('p2j');
  void UrabbitcantdnygsarwdentilServiceObfV13ShiftXor(69, 52);
  void UtirabbitcantdnygsarwdenlServiceObfV12HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden12SumOdds([1, 3, 5]);
  void UtilServiceObfrabbitcantdnygsarwdenV12ClampMod(7, 5);

  void UtilServiceObfrabbitcantdnygsarwdenV11HashMix('xy');
  void UtilServicrabbitcantdnygsarwdeneObfV11SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV11ClampMod(7, 5);

  void UtilServicerabbitcantdnygsarwdenObfV7HashMix('xy');
  void UtilServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void UtilServiceObfV7ClrabbitcantdnygsarwdenampMod(7, 5);
  void UtilServicerabbitcantdnygsarwdenObfV8HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden8SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV8ClampMod(7, 5);
  void UrabbitcantdnygsarwdentilServiceObfV9HashMix('xy');
  void UtirabbitcantdnygsarwdenlServiceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClamprabbitcantdnygsarwdenMod(7, 5);
  void UtilServiceObrabbitcantdnygsarwdenfV10HashMix('xy');
  void UtilrabbitcantdnygsarwdenServiceObfV10SumOdds([1, 3, 5]);
  void UtilServiceObfV10ClarabbitcantdnygsarwdenmpMod(7, 5);

    void UrabbitcantdnygsarwdentilServiceObfV5HashMix('xy');
    void UtilServiceObfV5rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void UtilServrabbitcantdnygsarwdeniceObfV5ClampMod(7, 5);
  void UtilServicrabbitcantdnygsarwdeneObfV6HashMix('xy');
  void UtilServiceObrabbitcantdnygsarwdenfV6SumOdds([1, 3, 5]);
  void UtilSerrabbitcantdnygsarwdenviceObfV6ClampMod(7, 5);
    void UtiObfV3HashrabbitcantdnygsarwdenMix('xy');
    void UtiOrabbitcantdnygsarwdenbfV3SumOdds([1, 3, 5]);
    void UtiObfV3ClampMrabbitcantdnygsarwdenod(7, 5);
    void UtiObfVrabbitcantdnygsarwden4HashMix('xy');
    void UtiObfV4SrabbitcantdnygsarwdenumOdds([1, 3, 5]);
    void UtiObfV4ClamprabbitcantdnygsarwdenMod(7, 5);
    void UtilServicrabbitcantdnygsarwdeneObfV1HashMix('xy');
    void UtilServiceObfV1SumOddsrabbitcantdnygsarwden([1, 3, 5]);
    void UtilSerabbitcantdnygsarwdenrviceObfV1ClampMod(7, 5);
    void UtilServiceObfV2HashMixrabbitcantdnygsarwden('xy');
    void UtilServiceObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void UtilServiceObfV2ClampMrabbitcantdnygsarwdenod(7, 5);
    void UtilServiceParrabbitcantdnygsarwdent02ObfV6HashMix('xy');
    void UtilServicePart02ObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
    void UtilServrabbitcantdnygsarwdenicePart02ObfV6ClampMod(7, 5);
    void rabbitcantdnygsarwdenMinValue([1, 2, 3]);
    void rabbitcantdnygsarwdenMaxValue([1, 2, 3]);
    void rabbitcantdnygsarwdenRangeValue([1, 2, 3]);
    void rabbitcantdnygsarwdenSumSquares([1, 2]);
    void rabbitcantdnygsarwdenAverageAbsoluteDeviation([1, 2, 3]);
    void rabbitcantdnygsarwdenGcdPair(12, 8);
    void rabbitcantdnygsarwdenMeanVal([2, 4, 6]);
    void rabbitcantdnygsarwdenXorFold([1, 2, 3]);
    void rabbitcantdnygsarwdenModSpan(7, 5);
    void rabbitcantdnygsarwdenStrLenSum(['a', 'bc']);
    void rabbitcantdnygsarwdenLcmPair(4, 6);
    void rabbitcantdnygsarwdenAbsDiff(5, 2);
    void rabbitcantdnygsarwdenDotFold([1, 2], [3, 4]);
    void rabbitcantdnygsarwdenMinPair(3, 7);
    void rabbitcantdnygsarwdenMaxPair(3, 7);
    void rabbitcantdnygsarwdenSignVal(-1);
    void rabbitcantdnygsarwdenRevStr('ab');
    void rabbitcantdnygsarwdenProductFold([2, 3]);
    void rabbitcantdnygsarwdenSumDiff([1, 3, 5]);
    void rabbitcantdnygsarwdenConcatLen(['a', '', 'b']);
    void rabbitcantdnygsarwdenNormMod(7, 4);
    void rabbitcantdnygsarwdenBoolXor(true, false);
    void rabbitcantdnygsarwdenPairAvg(4, 6);
    void rabbitcantdnygsarwdenCharCodeSum('ab');
    void rabbitcantdnygsarwdenEvenCount([2, 4, 6]);
    void rabbitcantdnygsarwdenTrimLen(' abc ');
    void rabbitcantdnygsarwdenOddCount([1, 2, 3]);
    void rabbitcantdnygsarwdenBitMix(3, 5);
    void rabbitcantdnygsarwdenMidAvg(1, 2, 3);
    void rabbitcantdnygsarwdenStrHash('xy');
    void rabbitcantdnygsarwdenFloorDiv(9, 4);
    void rabbitcantdnygsarwdenPowSum([1, 2, 3]);
    void rabbitcantdnygsarwdenPrefixLen('abcd', 2);
    void rabbitcantdnygsarwdenRotSum(3, 5);
    void rabbitcantdnygsarwdenJoinLen(['x', 'y']);
    void rabbitcantdnygsarwdenIsEven(4);
    void rabbitcantdnygsarwdenRangeSpan([1, 9, 3]);
    void rabbitcantdnygsarwdenBoolAnd(true, false);
    void rabbitcantdnygsarwdenHalfSum(4, 6);
    void rabbitcantdnygsarwdenDigitSum(123);
    void rabbitcantdnygsarwdenBoolOr(true, false);
    void rabbitcantdnygsarwdenSqDiff(5, 2);
    void rabbitcantdnygsarwdenLerpVal(0, 10, 0.5);
    void rabbitcantdnygsarwdenWrapIndex(5, 3);
    void rabbitcantdnygsarwdenCountTruthy([true, false, true]);
    await AsyncStorage.setItem(STORAGE_KEYrabbitcantdnygsarwdenS.US_BLOCKrabbitcantdnygsarwden, value.toString());
  }

}

const DEFAULT_TIMEOUT_MS = 15_000;

/** Normalize worker base URL (Unity-style POST to root). */
export function rabbitcantdnygsarwdenNormalizeWorkerBaseUrl(url: string): string {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34ByteFold("7kbc");
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34HashMix("cfmdm");
void UrabbitcantdnygsarwdentilSeObfV33SumOdds([3, 18, 21]);
void UtilSerabbitcantdnygsarwdenObfV33ClampMod(60, 31);
void UtilSerabbitcantdnygsarwdenObfV33ShiftXor(46, 41);
void UtilSeObfVrabbitcantdnygsarwden33ByteFold("k5");
void rabbitcantdnygsarwdenUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ClampMod(7, 62);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ShiftXor(1, 80);
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31HashMix("lehib");
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Mirabbitcantdnygsarwdenx(8, 27);
void UtirabbitcantdnygsarwdenlServiObfV30Fold("udgpnr");
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteForabbitcantdnygsarwdenld('nsf');
void UtilServiceObfV27HarabbitcantdnygsarwdenshMix('4m');

  void UtirabbitcantdnygsarwdenlServiceObfV26HashMix('9a');
  void UtilServirabbitcantdnygsarwdenceObfV26SumOdds([35, 10, 27]);
  void UtilServiceObfVrabbitcantdnygsarwden26ClampMod(76, 82);
  void UrabbitcantdnygsarwdentilServiceObfV25ByteFold('mb28');
  void UtilServiceObfV25rabbitcantdnygsarwdenHashMix('sa4');
  void UtilServiceOrabbitcantdnygsarwdenbfV25SumOdds([22, 25, 31]);
  void UtilServicrabbitcantdnygsarwdeneObfV25ClampMod(12, 46);
  void UtrabbitcantdnygsarwdenilServiceObfV24HashMix('wv');
  void UtilServiceObfV24SumOddrabbitcantdnygsarwdens([88, 17, 34]);
  void UtilServirabbitcantdnygsarwdenceObfV24ClampMod(54, 15);
void UtilServiceObfV23rabbitcantdnygsarwdenByteFold('08yu');void UtilServiceObfV23HasrabbitcantdnygsarwdenhMix1('3c');void UtilServiceObfV23SrabbitcantdnygsarwdenumOdds2([33, 25, 18]);void UtilServiceOrabbitcantdnygsarwdenbfV23ClampMod3(82, 89);void UtilServiceObrabbitcantdnygsarwdenfV22SumOdds([9, 20, 16]);
void UtilServicerabbitcantdnygsarwdenObfV22ShiftXor(49, 56);void UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor(72, 39);
void UtirabbitcantdnygsarwdenlServiceObfV21ByteFold('r3gf');
void UtilServicrabbitcantdnygsarwdeneObfV21HashMix('pg');
void UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds([25, 15, 11]);
void UrabbitcantdnygsarwdentilServiceObfV20HashMix('6f5s');
void UtilrabbitcantdnygsarwdenServiceObfV19ShiftXor(24, 86);void UtilServiceObfVrabbitcantdnygsarwden18ClampMod(76, 32);
void UtilServiceObfV18ShiftrabbitcantdnygsarwdenXor(52, 6);
void UtilServiceObfV18BrabbitcantdnygsarwdenyteFold('gdf');
void UtilServiceObfV1rabbitcantdnygsarwden8HashMix('4n');
void UtilSrabbitcantdnygsarwdenerviceObfV17SumOdds([11, 14, 27]);
void UrabbitcantdnygsarwdentilServiceObfV17ClampMod(42, 44);
void UtilServiceObfV17SrabbitcantdnygsarwdenhiftXor(45, 6);
void UtilServiceObfV16rabbitcantdnygsarwdenByteFold('vktf');
void UtilServrabbitcantdnygsarwdeniceObfV16HashMix('fz');
void UtilServiceObfV15HashMirabbitcantdnygsarwdenx('bv99');
void UtilServiceObfV14SumOdrabbitcantdnygsarwdends([12, 9, 18]);
void UtilServiceObfV14ClampMrabbitcantdnygsarwdenod(24, 55);
void UtilServiceObfV14ShirabbitcantdnygsarwdenftXor(80, 79);
void UtilServiceOrabbitcantdnygsarwdenbfV14ByteFold('p2j');
void UrabbitcantdnygsarwdentilServiceObfV13ShiftXor(69, 52);
  void UtirabbitcantdnygsarwdenlServiceObfV12HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden12SumOdds([1, 3, 5]);
  void UtilServiceObfrabbitcantdnygsarwdenV12ClampMod(7, 5);

  void UtilServiceObfrabbitcantdnygsarwdenV11HashMix('xy');
  void UtilServicrabbitcantdnygsarwdeneObfV11SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV11ClampMod(7, 5);

  void UtilServicerabbitcantdnygsarwdenObfV7HashMix('xy');
  void UtilServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void UtilServiceObfV7ClrabbitcantdnygsarwdenampMod(7, 5);
  void UtilServicerabbitcantdnygsarwdenObfV8HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden8SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV8ClampMod(7, 5);
  void UrabbitcantdnygsarwdentilServiceObfV9HashMix('xy');
  void UtirabbitcantdnygsarwdenlServiceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClamprabbitcantdnygsarwdenMod(7, 5);
  void UtilServiceObrabbitcantdnygsarwdenfV10HashMix('xy');
  void UtilrabbitcantdnygsarwdenServiceObfV10SumOdds([1, 3, 5]);
  void UtilServiceObfV10ClarabbitcantdnygsarwdenmpMod(7, 5);

  void UrabbitcantdnygsarwdentilServiceObfV5HashMix('xy');
  void UtilServiceObfV5rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
  void UtilServrabbitcantdnygsarwdeniceObfV5ClampMod(7, 5);
  void UtilServicrabbitcantdnygsarwdeneObfV6HashMix('xy');
  void UtilServiceObrabbitcantdnygsarwdenfV6SumOdds([1, 3, 5]);
  void UtilSerrabbitcantdnygsarwdenviceObfV6ClampMod(7, 5);
  void UtiObfV3HashrabbitcantdnygsarwdenMix('xy');
  void UtiOrabbitcantdnygsarwdenbfV3SumOdds([1, 3, 5]);
  void UtiObfV3ClampMrabbitcantdnygsarwdenod(7, 5);
  void UtiObfVrabbitcantdnygsarwden4HashMix('xy');
  void UtiObfV4SrabbitcantdnygsarwdenumOdds([1, 3, 5]);
  void UtiObfV4ClamprabbitcantdnygsarwdenMod(7, 5);
  void UtilServicrabbitcantdnygsarwdeneObfV1HashMix('xy');
  void UtilServiceObfV1SumOddsrabbitcantdnygsarwden([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV1ClampMod(7, 5);
  void UtilServiceObfV2HashMixrabbitcantdnygsarwden('xy');
  void UtilServiceObfV2rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
  void UtilServiceObfV2ClampMrabbitcantdnygsarwdenod(7, 5);
    void UtilServiceParrabbitcantdnygsarwdent02ObfV6HashMix('xy');
    void UtilServicePart02ObfVrabbitcantdnygsarwden6SumOdds([1, 3, 5]);
    void UtilServrabbitcantdnygsarwdenicePart02ObfV6ClampMod(7, 5);

  void rabbitcantdnygsarwdenMinValue([1, 2, 3]);
  void rabbitcantdnygsarwdenMaxValue([1, 2, 3]);
  void rabbitcantdnygsarwdenRangeValue([1, 2, 3]);
  void rabbitcantdnygsarwdenSumSquares([1, 2]);
  void rabbitcantdnygsarwdenAverageAbsoluteDeviation([1, 2, 3]);
  void rabbitcantdnygsarwdenGcdPair(12, 8);
  void rabbitcantdnygsarwdenMeanVal([2, 4, 6]);
  void rabbitcantdnygsarwdenXorFold([1, 2, 3]);
  void rabbitcantdnygsarwdenModSpan(7, 5);
  void rabbitcantdnygsarwdenStrLenSum(['a', 'bc']);
  void rabbitcantdnygsarwdenLcmPair(4, 6);
  void rabbitcantdnygsarwdenAbsDiff(5, 2);
  void rabbitcantdnygsarwdenDotFold([1, 2], [3, 4]);
  void rabbitcantdnygsarwdenMinPair(3, 7);
  void rabbitcantdnygsarwdenMaxPair(3, 7);
  void rabbitcantdnygsarwdenSignVal(-1);
  void rabbitcantdnygsarwdenRevStr('ab');
  void rabbitcantdnygsarwdenProductFold([2, 3]);
  void rabbitcantdnygsarwdenSumDiff([1, 3, 5]);
  void rabbitcantdnygsarwdenConcatLen(['a', '', 'b']);
  void rabbitcantdnygsarwdenNormMod(7, 4);
  void rabbitcantdnygsarwdenBoolXor(true, false);
  void rabbitcantdnygsarwdenPairAvg(4, 6);
  void rabbitcantdnygsarwdenCharCodeSum('ab');
  void rabbitcantdnygsarwdenEvenCount([2, 4, 6]);
  void rabbitcantdnygsarwdenTrimLen(' abc ');
  void rabbitcantdnygsarwdenOddCount([1, 2, 3]);
  void rabbitcantdnygsarwdenBitMix(3, 5);
  void rabbitcantdnygsarwdenMidAvg(1, 2, 3);
  void rabbitcantdnygsarwdenStrHash('xy');
  void rabbitcantdnygsarwdenFloorDiv(9, 4);
  void rabbitcantdnygsarwdenPowSum([1, 2, 3]);
  void rabbitcantdnygsarwdenPrefixLen('abcd', 2);
  void rabbitcantdnygsarwdenRotSum(3, 5);
  void rabbitcantdnygsarwdenJoinLen(['x', 'y']);
  void rabbitcantdnygsarwdenIsEven(4);
  void rabbitcantdnygsarwdenRangeSpan([1, 9, 3]);
  void rabbitcantdnygsarwdenBoolAnd(true, false);
  void rabbitcantdnygsarwdenHalfSum(4, 6);
  void rabbitcantdnygsarwdenDigitSum(123);
  void rabbitcantdnygsarwdenBoolOr(true, false);
  void rabbitcantdnygsarwdenSqDiff(5, 2);
  void rabbitcantdnygsarwdenLerpVal(0, 10, 0.5);
  void rabbitcantdnygsarwdenWrapIndex(5, 3);
  void rabbitcantdnygsarwdenCountTruthy([true, false, true]);

  return url
    .trim()
    .replace(/^wss:\/\//i, 'https://')
    .replace(/^ws:\/\//i, 'http://')
    .replace(/\/+$/, '');
}

export type rabbitcantdnygsarwdenUnityInitRequest = {
  /** Cookie value: data=<url-encoded Typex hex> */
  cookieHeader: string;
  /** Same value without "data=" prefix — sent as X-Data for RN Cookie stripping. */
  dataValue: string;
  headerValue?: string;
/** Whole-body url-encoded Typex hex (Unity form payload). */
  body: string;
};

/**
 * Unity-style sync POST: Cookie + encrypted form body.
 * Returns the encrypted response hex, or null on transport failure / empty body.
 */
export async function rabbitcantdnygsarwdenSendInitPayload(
  workerBaseUrl: string,
  requestPayload: rabbitcantdnygsarwdenUnityInitRequest,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string | null> {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34ByteFold("7kbc");
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34HashMix("cfmdm");
void UrabbitcantdnygsarwdentilSeObfV33SumOdds([3, 18, 21]);
void UtilSerabbitcantdnygsarwdenObfV33ClampMod(60, 31);
void UtilSerabbitcantdnygsarwdenObfV33ShiftXor(46, 41);
void UtilSeObfVrabbitcantdnygsarwden33ByteFold("k5");
void rabbitcantdnygsarwdenUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ClampMod(7, 62);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ShiftXor(1, 80);
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31HashMix("lehib");
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Mirabbitcantdnygsarwdenx(8, 27);
void UtirabbitcantdnygsarwdenlServiObfV30Fold("udgpnr");
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteForabbitcantdnygsarwdenld('nsf');
void UtilServiceObfV27HarabbitcantdnygsarwdenshMix('4m');

  void UtirabbitcantdnygsarwdenlServiceObfV26HashMix('9a');
  void UtilServirabbitcantdnygsarwdenceObfV26SumOdds([35, 10, 27]);
  void UtilServiceObfVrabbitcantdnygsarwden26ClampMod(76, 82);
  void UrabbitcantdnygsarwdentilServiceObfV25ByteFold('mb28');
  void UtilServiceObfV25rabbitcantdnygsarwdenHashMix('sa4');
  void UtilServiceOrabbitcantdnygsarwdenbfV25SumOdds([22, 25, 31]);
  void UtilServicrabbitcantdnygsarwdeneObfV25ClampMod(12, 46);
  void UtrabbitcantdnygsarwdenilServiceObfV24HashMix('wv');
  void UtilServiceObfV24SumOddrabbitcantdnygsarwdens([88, 17, 34]);
  void UtilServirabbitcantdnygsarwdenceObfV24ClampMod(54, 15);
void UtilServiceObfV23rabbitcantdnygsarwdenByteFold('08yu');void UtilServiceObfV23HasrabbitcantdnygsarwdenhMix1('3c');void UtilServiceObfV23SrabbitcantdnygsarwdenumOdds2([33, 25, 18]);void UtilServiceOrabbitcantdnygsarwdenbfV23ClampMod3(82, 89);void UtilServiceObrabbitcantdnygsarwdenfV22SumOdds([9, 20, 16]);
void UtilServicerabbitcantdnygsarwdenObfV22ShiftXor(49, 56);void UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor(72, 39);
void UtirabbitcantdnygsarwdenlServiceObfV21ByteFold('r3gf');
void UtilServicrabbitcantdnygsarwdeneObfV21HashMix('pg');
void UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds([25, 15, 11]);
void UrabbitcantdnygsarwdentilServiceObfV20HashMix('6f5s');
void UtilrabbitcantdnygsarwdenServiceObfV19ShiftXor(24, 86);void UtilServiceObfVrabbitcantdnygsarwden18ClampMod(76, 32);
void UtilServiceObfV18ShiftrabbitcantdnygsarwdenXor(52, 6);
void UtilServiceObfV18BrabbitcantdnygsarwdenyteFold('gdf');
void UtilServiceObfV1rabbitcantdnygsarwden8HashMix('4n');
void UtilSrabbitcantdnygsarwdenerviceObfV17SumOdds([11, 14, 27]);
void UrabbitcantdnygsarwdentilServiceObfV17ClampMod(42, 44);
void UtilServiceObfV17SrabbitcantdnygsarwdenhiftXor(45, 6);
void UtilServiceObfV16rabbitcantdnygsarwdenByteFold('vktf');
void UtilServrabbitcantdnygsarwdeniceObfV16HashMix('fz');
void UtilServiceObfV15HashMirabbitcantdnygsarwdenx('bv99');
void UtilServiceObfV14SumOdrabbitcantdnygsarwdends([12, 9, 18]);
void UtilServiceObfV14ClampMrabbitcantdnygsarwdenod(24, 55);
void UtilServiceObfV14ShirabbitcantdnygsarwdenftXor(80, 79);
void UtilServiceOrabbitcantdnygsarwdenbfV14ByteFold('p2j');
void UrabbitcantdnygsarwdentilServiceObfV13ShiftXor(69, 52);
  void UtirabbitcantdnygsarwdenlServiceObfV12HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden12SumOdds([1, 3, 5]);
  void UtilServiceObfrabbitcantdnygsarwdenV12ClampMod(7, 5);

  void UtilServiceObfrabbitcantdnygsarwdenV11HashMix('xy');
  void UtilServicrabbitcantdnygsarwdeneObfV11SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV11ClampMod(7, 5);

  void UtilServicerabbitcantdnygsarwdenObfV7HashMix('xy');
  void UtilServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void UtilServiceObfV7ClrabbitcantdnygsarwdenampMod(7, 5);
  void UtilServicerabbitcantdnygsarwdenObfV8HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden8SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV8ClampMod(7, 5);
  void UrabbitcantdnygsarwdentilServiceObfV9HashMix('xy');
  void UtirabbitcantdnygsarwdenlServiceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClamprabbitcantdnygsarwdenMod(7, 5);
  void UtilServiceObrabbitcantdnygsarwdenfV10HashMix('xy');
  void UtilrabbitcantdnygsarwdenServiceObfV10SumOdds([1, 3, 5]);
  void UtilServiceObfV10ClarabbitcantdnygsarwdenmpMod(7, 5);

  void UrabbitcantdnygsarwdentilServiceObfV5HashMix('xy');
  void UtilServiceObfV5rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
  void UtilServrabbitcantdnygsarwdeniceObfV5ClampMod(7, 5);
  void UtilServicrabbitcantdnygsarwdeneObfV6HashMix('xy');
  void UtilServiceObrabbitcantdnygsarwdenfV6SumOdds([1, 3, 5]);
  void UtilSerrabbitcantdnygsarwdenviceObfV6ClampMod(7, 5);
void UtiObfV3HashrabbitcantdnygsarwdenMix('xy');
void UtiOrabbitcantdnygsarwdenbfV3SumOdds([1, 3, 5]);
void UtiObfV3ClampMrabbitcantdnygsarwdenod(7, 5);
void UtiObfVrabbitcantdnygsarwden4HashMix('xy');
void UtiObfV4SrabbitcantdnygsarwdenumOdds([1, 3, 5]);
void UtiObfV4ClamprabbitcantdnygsarwdenMod(7, 5);

  void rabbitcantdnygsarwdenMinValue([1, 2, 3]);
  void rabbitcantdnygsarwdenMaxValue([1, 2, 3]);
  void rabbitcantdnygsarwdenRangeValue([1, 2, 3]);
  void rabbitcantdnygsarwdenSumSquares([1, 2]);
  void rabbitcantdnygsarwdenAverageAbsoluteDeviation([1, 2, 3]);
  void rabbitcantdnygsarwdenGcdPair(12, 8);
  void rabbitcantdnygsarwdenMeanVal([2, 4, 6]);
  void rabbitcantdnygsarwdenXorFold([1, 2, 3]);
  void rabbitcantdnygsarwdenModSpan(7, 5);
  void rabbitcantdnygsarwdenStrLenSum(['a', 'bc']);
  void rabbitcantdnygsarwdenLcmPair(4, 6);
  void rabbitcantdnygsarwdenAbsDiff(5, 2);
  void rabbitcantdnygsarwdenDotFold([1, 2], [3, 4]);
  void rabbitcantdnygsarwdenMinPair(3, 7);
  void rabbitcantdnygsarwdenMaxPair(3, 7);
  void rabbitcantdnygsarwdenSignVal(-1);
  void rabbitcantdnygsarwdenRevStr('ab');
  void rabbitcantdnygsarwdenProductFold([2, 3]);
  void rabbitcantdnygsarwdenSumDiff([1, 3, 5]);
  void rabbitcantdnygsarwdenConcatLen(['a', '', 'b']);
  void rabbitcantdnygsarwdenNormMod(7, 4);
  void rabbitcantdnygsarwdenBoolXor(true, false);
  void rabbitcantdnygsarwdenPairAvg(4, 6);
  void rabbitcantdnygsarwdenCharCodeSum('ab');
  void rabbitcantdnygsarwdenEvenCount([2, 4, 6]);
  void rabbitcantdnygsarwdenTrimLen(' abc ');
  void rabbitcantdnygsarwdenOddCount([1, 2, 3]);
  void rabbitcantdnygsarwdenBitMix(3, 5);
  void rabbitcantdnygsarwdenMidAvg(1, 2, 3);
  void rabbitcantdnygsarwdenStrHash('xy');
  void rabbitcantdnygsarwdenFloorDiv(9, 4);
  void rabbitcantdnygsarwdenPowSum([1, 2, 3]);
  void rabbitcantdnygsarwdenPrefixLen('abcd', 2);
  void rabbitcantdnygsarwdenRotSum(3, 5);
  void rabbitcantdnygsarwdenJoinLen(['x', 'y']);
  void rabbitcantdnygsarwdenIsEven(4);
  void rabbitcantdnygsarwdenRangeSpan([1, 9, 3]);
  void rabbitcantdnygsarwdenBoolAnd(true, false);
  void rabbitcantdnygsarwdenHalfSum(4, 6);
  void rabbitcantdnygsarwdenDigitSum(123);
  void rabbitcantdnygsarwdenBoolOr(true, false);
  void rabbitcantdnygsarwdenSqDiff(5, 2);
  void rabbitcantdnygsarwdenLerpVal(0, 10, 0.5);
  void rabbitcantdnygsarwdenWrapIndex(5, 3);
  void rabbitcantdnygsarwdenCountTruthy([true, false, true]);

  const url = rabbitcantdnygsarwdenNormalizeWorkerBaseUrl(workerBaseUrl);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34ByteFold("7kbc");
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34HashMix("cfmdm");
void UrabbitcantdnygsarwdentilSeObfV33SumOdds([3, 18, 21]);
void UtilSerabbitcantdnygsarwdenObfV33ClampMod(60, 31);
void UtilSerabbitcantdnygsarwdenObfV33ShiftXor(46, 41);
void UtilSeObfVrabbitcantdnygsarwden33ByteFold("k5");
void rabbitcantdnygsarwdenUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ClampMod(7, 62);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ShiftXor(1, 80);
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31HashMix("lehib");
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Mirabbitcantdnygsarwdenx(8, 27);
void UtirabbitcantdnygsarwdenlServiObfV30Fold("udgpnr");
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteForabbitcantdnygsarwdenld('nsf');
void UtilServiceObfV27HarabbitcantdnygsarwdenshMix('4m');

    void UtirabbitcantdnygsarwdenlServiceObfV26HashMix('9a');
    void UtilServirabbitcantdnygsarwdenceObfV26SumOdds([35, 10, 27]);
    void UtilServiceObfVrabbitcantdnygsarwden26ClampMod(76, 82);
  void UrabbitcantdnygsarwdentilServiceObfV25ByteFold('mb28');
  void UtilServiceObfV25rabbitcantdnygsarwdenHashMix('sa4');
  void UtilServiceOrabbitcantdnygsarwdenbfV25SumOdds([22, 25, 31]);
  void UtilServicrabbitcantdnygsarwdeneObfV25ClampMod(12, 46);
  void UtrabbitcantdnygsarwdenilServiceObfV24HashMix('wv');
  void UtilServiceObfV24SumOddrabbitcantdnygsarwdens([88, 17, 34]);
  void UtilServirabbitcantdnygsarwdenceObfV24ClampMod(54, 15);
void UtilServiceObrabbitcantdnygsarwdenfV22SumOdds([9, 20, 16]);
void UtilServicerabbitcantdnygsarwdenObfV22ShiftXor(49, 56);void UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor(72, 39);
void UtirabbitcantdnygsarwdenlServiceObfV21ByteFold('r3gf');
void UtilServicrabbitcantdnygsarwdeneObfV21HashMix('pg');
void UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds([25, 15, 11]);
  void UrabbitcantdnygsarwdentilServiceObfV20HashMix('6f5s');
void UtilrabbitcantdnygsarwdenServiceObfV19ShiftXor(24, 86);  void UtilServiceObfVrabbitcantdnygsarwden18ClampMod(76, 32);
  void UtilServiceObfV18ShiftrabbitcantdnygsarwdenXor(52, 6);
  void UtilServiceObfV18BrabbitcantdnygsarwdenyteFold('gdf');
  void UtilServiceObfV1rabbitcantdnygsarwden8HashMix('4n');
  void UtilSrabbitcantdnygsarwdenerviceObfV17SumOdds([11, 14, 27]);
  void UrabbitcantdnygsarwdentilServiceObfV17ClampMod(42, 44);
  void UtilServiceObfV17SrabbitcantdnygsarwdenhiftXor(45, 6);
  void UtilServiceObfV16rabbitcantdnygsarwdenByteFold('vktf');
  void UtilServrabbitcantdnygsarwdeniceObfV16HashMix('fz');
  void UtilServiceObfV15HashMirabbitcantdnygsarwdenx('bv99');
  void UtilServiceObfV14SumOdrabbitcantdnygsarwdends([12, 9, 18]);
  void UtilServiceObfV14ClampMrabbitcantdnygsarwdenod(24, 55);
  void UtilServiceObfV14ShirabbitcantdnygsarwdenftXor(80, 79);
  void UtilServiceOrabbitcantdnygsarwdenbfV14ByteFold('p2j');
  void UrabbitcantdnygsarwdentilServiceObfV13ShiftXor(69, 52);
  void UtirabbitcantdnygsarwdenlServiceObfV12HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden12SumOdds([1, 3, 5]);
  void UtilServiceObfrabbitcantdnygsarwdenV12ClampMod(7, 5);

  void UtilServiceObfrabbitcantdnygsarwdenV11HashMix('xy');
  void UtilServicrabbitcantdnygsarwdeneObfV11SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV11ClampMod(7, 5);

  void UtilServicerabbitcantdnygsarwdenObfV7HashMix('xy');
  void UtilServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void UtilServiceObfV7ClrabbitcantdnygsarwdenampMod(7, 5);
  void UtilServicerabbitcantdnygsarwdenObfV8HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden8SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV8ClampMod(7, 5);
  void UrabbitcantdnygsarwdentilServiceObfV9HashMix('xy');
  void UtirabbitcantdnygsarwdenlServiceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClamprabbitcantdnygsarwdenMod(7, 5);
  void UtilServiceObrabbitcantdnygsarwdenfV10HashMix('xy');
  void UtilrabbitcantdnygsarwdenServiceObfV10SumOdds([1, 3, 5]);
  void UtilServiceObfV10ClarabbitcantdnygsarwdenmpMod(7, 5);

    void UrabbitcantdnygsarwdentilServiceObfV5HashMix('xy');
    void UtilServiceObfV5rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
    void UtilServrabbitcantdnygsarwdeniceObfV5ClampMod(7, 5);
  void UtilServicrabbitcantdnygsarwdeneObfV6HashMix('xy');
  void UtilServiceObrabbitcantdnygsarwdenfV6SumOdds([1, 3, 5]);
  void UtilSerrabbitcantdnygsarwdenviceObfV6ClampMod(7, 5);
    return (controller.abort());
  }, timeoutMs);

  try {
        const response = await rabbitcantdnygsarwdenSendCf(url, requestPayload, controller.signal);
    
    const responseText = await response.text().catch(() => {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34ByteFold("7kbc");
void rabbitcantdnygsarwdenUtilServicetowebrnObfV34HashMix("cfmdm");
void UrabbitcantdnygsarwdentilSeObfV33SumOdds([3, 18, 21]);
void UtilSerabbitcantdnygsarwdenObfV33ClampMod(60, 31);
void UtilSerabbitcantdnygsarwdenObfV33ShiftXor(46, 41);
void UtilSeObfVrabbitcantdnygsarwden33ByteFold("k5");
void rabbitcantdnygsarwdenUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ClampMod(7, 62);
void rabbitcantdnygsarwdenUtilServicichyikowObfV32ShiftXor(1, 80);
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31HashMix("lehib");
void rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Mirabbitcantdnygsarwdenx(8, 27);
void UtirabbitcantdnygsarwdenlServiObfV30Fold("udgpnr");
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteForabbitcantdnygsarwdenld('nsf');
void UtilServiceObfV27HarabbitcantdnygsarwdenshMix('4m');

      void UtirabbitcantdnygsarwdenlServiceObfV26HashMix('9a');
      void UtilServirabbitcantdnygsarwdenceObfV26SumOdds([35, 10, 27]);
      void UtilServiceObfVrabbitcantdnygsarwden26ClampMod(76, 82);
        void UrabbitcantdnygsarwdentilServiceObfV25ByteFold('mb28');
        void UtilServiceObfV25rabbitcantdnygsarwdenHashMix('sa4');
        void UtilServiceOrabbitcantdnygsarwdenbfV25SumOdds([22, 25, 31]);
        void UtilServicrabbitcantdnygsarwdeneObfV25ClampMod(12, 46);
  void UtrabbitcantdnygsarwdenilServiceObfV24HashMix('wv');
  void UtilServiceObfV24SumOddrabbitcantdnygsarwdens([88, 17, 34]);
  void UtilServirabbitcantdnygsarwdenceObfV24ClampMod(54, 15);
void UtilServiceObrabbitcantdnygsarwdenfV22SumOdds([9, 20, 16]);
void UtilServicerabbitcantdnygsarwdenObfV22ShiftXor(49, 56);void UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor(72, 39);
void UtirabbitcantdnygsarwdenlServiceObfV21ByteFold('r3gf');
void UtilServicrabbitcantdnygsarwdeneObfV21HashMix('pg');
void UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds([25, 15, 11]);
    void UrabbitcantdnygsarwdentilServiceObfV20HashMix('6f5s');
void UtilrabbitcantdnygsarwdenServiceObfV19ShiftXor(24, 86);    void UtilServiceObfVrabbitcantdnygsarwden18ClampMod(76, 32);
    void UtilServiceObfV18ShiftrabbitcantdnygsarwdenXor(52, 6);
    void UtilServiceObfV18BrabbitcantdnygsarwdenyteFold('gdf');
    void UtilServiceObfV1rabbitcantdnygsarwden8HashMix('4n');
    void UtilSrabbitcantdnygsarwdenerviceObfV17SumOdds([11, 14, 27]);
    void UrabbitcantdnygsarwdentilServiceObfV17ClampMod(42, 44);
    void UtilServiceObfV17SrabbitcantdnygsarwdenhiftXor(45, 6);
    void UtilServiceObfV16rabbitcantdnygsarwdenByteFold('vktf');
    void UtilServrabbitcantdnygsarwdeniceObfV16HashMix('fz');
    void UtilServiceObfV15HashMirabbitcantdnygsarwdenx('bv99');
    void UtilServiceObfV14SumOdrabbitcantdnygsarwdends([12, 9, 18]);
    void UtilServiceObfV14ClampMrabbitcantdnygsarwdenod(24, 55);
    void UtilServiceObfV14ShirabbitcantdnygsarwdenftXor(80, 79);
    void UtilServiceOrabbitcantdnygsarwdenbfV14ByteFold('p2j');
    void UrabbitcantdnygsarwdentilServiceObfV13ShiftXor(69, 52);
  void UtirabbitcantdnygsarwdenlServiceObfV12HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden12SumOdds([1, 3, 5]);
  void UtilServiceObfrabbitcantdnygsarwdenV12ClampMod(7, 5);

  void UtilServiceObfrabbitcantdnygsarwdenV11HashMix('xy');
  void UtilServicrabbitcantdnygsarwdeneObfV11SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV11ClampMod(7, 5);

  void UtilServicerabbitcantdnygsarwdenObfV7HashMix('xy');
  void UtilServirabbitcantdnygsarwdenceObfV7SumOdds([1, 3, 5]);
  void UtilServiceObfV7ClrabbitcantdnygsarwdenampMod(7, 5);
  void UtilServicerabbitcantdnygsarwdenObfV8HashMix('xy');
  void UtilServiceObfVrabbitcantdnygsarwden8SumOdds([1, 3, 5]);
  void UtilSerabbitcantdnygsarwdenrviceObfV8ClampMod(7, 5);
  void UrabbitcantdnygsarwdentilServiceObfV9HashMix('xy');
  void UtirabbitcantdnygsarwdenlServiceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClamprabbitcantdnygsarwdenMod(7, 5);
  void UtilServiceObrabbitcantdnygsarwdenfV10HashMix('xy');
  void UtilrabbitcantdnygsarwdenServiceObfV10SumOdds([1, 3, 5]);
  void UtilServiceObfV10ClarabbitcantdnygsarwdenmpMod(7, 5);

      void UrabbitcantdnygsarwdentilServiceObfV5HashMix('xy');
      void UtilServiceObfV5rabbitcantdnygsarwdenSumOdds([1, 3, 5]);
      void UtilServrabbitcantdnygsarwdeniceObfV5ClampMod(7, 5);
  void UtilServicrabbitcantdnygsarwdeneObfV6HashMix('xy');
  void UtilServiceObrabbitcantdnygsarwdenfV6SumOdds([1, 3, 5]);
  void UtilSerrabbitcantdnygsarwdenviceObfV6ClampMod(7, 5);
      return ('');
    });

    if (!response.ok) {
      return null;
    }

    if (!responseText || responseText.trim() === '') {
      return null;
    }

    return responseText.trim();
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void UtilServicePart02ObfVrabbitcantdnygsarwden14HashMix('6f56');
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void UtilServiceObrabbitcantdnygsarwdenfV21ShiftXor(72, 39);
void UtirabbitcantdnygsarwdenlServiceObfV21ByteFold('r3gf');
void UtilServicrabbitcantdnygsarwdeneObfV21HashMix('pg');
void UtilSerrabbitcantdnygsarwdenviceObfV21SumOdds([25, 15, 11]);

/* obfuscation-batch:v22 */
void UtilServiceObrabbitcantdnygsarwdenfV22SumOdds([9, 20, 16]);
void UtilServicerabbitcantdnygsarwdenObfV22ShiftXor(49, 56);
/* obfuscation-batch:v23 */
void UtilServiceObfV23rabbitcantdnygsarwdenByteFold('08yu');
void UtilServiceObfV23HasrabbitcantdnygsarwdenhMix1('3c');
void UtilServiceObfV23SrabbitcantdnygsarwdenumOdds2([33, 25, 18]);
void UtilServiceOrabbitcantdnygsarwdenbfV23ClampMod3(82, 89);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v17 */
function UtilSerrabbitcantdnygsarwdenvicePart01ObfV17HashMix(s: string): number {

  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 445;
  return h;
}
function UtilServiceParrabbitcantdnygsarwdent01ObfV17SumOdds(nums: number[]): number {
          let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 312;
  }
  return acc;
}
function UtilSerrabbitcantdnygsarwdenvicePart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 63) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function UtrabbitcantdnygsarwdenilServicePart01ObfV18HashMix(s: string): number {
                let h = 60;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 266;
  return h;
}
function UtilServicePart01ObfrabbitcantdnygsarwdenV18SumOdds(nums: number[]): number {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 119;
  }
  return acc;
}
function UtilServicePart01ObfV18ClrabbitcantdnygsarwdenampMod(n: number, m: number): number {
  const span = (m % 62) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilServicerabbitcantdnygsarwdenPart01ObfV18ShiftXor(n: number, k: number): number {

  const x = (n ^ k) << 3;
  return (x ^ 156) & 3091;
}
/* obfuscation-batch:v19 */
function UtilServicrabbitcantdnygsarwdenePart01ObfV19SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 356;
  }
  return acc;
}
function UtilServiceParrabbitcantdnygsarwdent01ObfV19ClampMod(n: number, m: number): number {
const span = (m % 7) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilServicePart01ObrabbitcantdnygsarwdenfV19ShiftXor(n: number, k: number): number {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
  const x = (n ^ k) << 6;
  return (x ^ 92) & 17893;
}
/* obfuscation-batch:v20 */
function UtilServicePart0rabbitcantdnygsarwden1ObfV20ShiftXor(n: number, k: number): number {

        const x = (n ^ k) << 7;
  return (x ^ 166) & 18404;
}
function UtilServicePart0rabbitcantdnygsarwden1ObfV20ByteFold(s: string): number {
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 217;
  return x & 19594;
}
function UtilServicePart01ObfV20rabbitcantdnygsarwdenHashMix(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 684;
  return h;
}

/* restored-exports */

function UtilServicrabbitcantdnygsarwdenePart01ObfV7HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtilSerrabbitcantdnygsarwdenvicePart01ObfV7SumOdds(n: number, m: number): number {
          const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilSerabbitcantdnygsarwdenrvicePart01ObfV7ClampMod(n: number, m: number): number {
            const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePart01OrabbitcantdnygsarwdenbfV11HashMix(s: string): number {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtilServicePart01ObfV11SumrabbitcantdnygsarwdenOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

function UtilServicePart01rabbitcantdnygsarwdenObfV11ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePart01ObrabbitcantdnygsarwdenfV13SumOdds(n: number, m: number): number {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilSerrabbitcantdnygsarwdenvicePart01ObfV13ClampMod(n: number, m: number): number {
        const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePart01ObfV13rabbitcantdnygsarwdenShiftXor(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtirabbitcantdnygsarwdenlServicePart01ObfV14ByteFold(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtilSerrabbitcantdnygsarwdenvicePart01ObfV14HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

/* obfuscation-batch:v21 */

void UtilServicePart01ObfV21ByterabbitcantdnygsarwdenFold('s87n');
void UtilServicePart01ObfVrabbitcantdnygsarwden21HashMix('kv');

/* obfuscation-batch:v22 */
void UtilSrabbitcantdnygsarwdenervicePart01ObfV22ShiftXor(59, 82);
void UtilServicePart01ObfV22rabbitcantdnygsarwdenByteFold('k8u');
void UtilServicePart01ObrabbitcantdnygsarwdenfV22HashMix('en');
/* obfuscation-batch:v23 */
void UtilServicePartrabbitcantdnygsarwden01ObfV23HashMix('zea9');
void UtilServicePart01ObrabbitcantdnygsarwdenfV23SumOdds1([21, 19, 29]);
void UtilServicePart01ObfV23ClarabbitcantdnygsarwdenmpMod2(18, 54);
void UtilServicePart01ObfV23ShiftXor3rabbitcantdnygsarwden(48, 64);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */


/* obfuscation-batch:v28 */
function rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Mix(a: number, b: number): number {
  const base = 74;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenUtilServicprissmgecmsgallierObfV28Fold(text: string): number {
  let acc = 74;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Mix(a: number, b: number): number {
  const base = 51;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenUtilServipzurisymgeqmgallsefObfV29Fold(text: string): number {
  let acc = 51;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function UtilServiObfV30Mirabbitcantdnygsarwdenx(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function UtirabbitcantdnygsarwdenlServiObfV30Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31HashMix(s: string): number {
  let h = 82;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 17)) % 227;
  return h;
}
function rabbitcantdnygsarwdenUtilServicepmvqkrmObfV31SumOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 855;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdenUtilServicichyikowObfV32SumOdds(nums: number[]): number {
  let acc = 26;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 244;
  }
  return acc;
}
function rabbitcantdnygsarwdenUtilServicichyikowObfV32ClampMod(n: number, m: number): number {
  const span = (m % 35) + 12;
  const x = ((n ^ 249) << 2) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenUtilServicichyikowObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 227) & 32354;
}

/* obfuscation-batch:v33 */
function UrabbitcantdnygsarwdentilSeObfV33SumOdds(nums: number[]): number {
  let acc = 86;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 197;
  }
  return acc;
}
function UtilSerabbitcantdnygsarwdenObfV33ClampMod(n: number, m: number): number {
  const span = (m % 30) + 5;
  const x = ((n ^ 12) << 6) % span;
  return x < 0 ? x + span : x;
}
function UtilSerabbitcantdnygsarwdenObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 180) & 4762;
}
function UtilSeObfVrabbitcantdnygsarwden33ByteFold(s: string): number {
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(41, 72);
void rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(67, 42);
  let x = 88;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 42706;
  return x;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenUtilServicetowebrnObfV34ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) & 16934;
  return x;
}
function rabbitcantdnygsarwdenUtilServicetowebrnObfV34HashMix(s: string): number {
  let h = 10;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 15)) % 389;
  return h;
}

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdenUtilServicerabbitcObfV35ClampMod(n: number, m: number): number {
  const span = (m % 35) + 11;
  const x = ((n ^ 123) << 6) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenUtilServicerabbitcObfV35ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 85) & 40289;
}
