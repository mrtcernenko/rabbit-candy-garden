import { AppState, NativeModules } from 'react-native';


/**
 * No-auth HTTPS endpoints from https://github.com/public-apis/public-apis
 * Auth column is "No" for each of these.
 */
import { PublicPinrabbitcantdnygsarwdengObfV24HashMix, PublicPingObfV23BytrabbitcantdnygsarwdeneFold, PublicPinrabbitcantdnygsarwdengObfV21HashMix, PublicPinrabbitcantdnygsarwdengObfV20SumOdds, PublicPingObfV18rabbitcantdnygsarwdenShiftXor, PublicPingObfrabbitcantdnygsarwdenV18SumOdds, rabbitcantdnygsarwdenPublicPingObfV15ShiftXor, rabbitcantdnygsarwdenPublicPingObfV14SumOdds, PublicPingPart0rabbitcantdnygsarwden1ObfV17ShiftXor, PrabbitcantdnygsarwdenublicPingPart01ObfV18SumOdds, PublicPingParabbitcantdnygsarwdenrt01ObfV18ByteFold, PublicrabbitcantdnygsarwdenPingPart01ObfV21SumOdds, PublicPingPrabbitcantdnygsarwdenart01ObfV23ByteFold, PublicPingPart01ObfV23ClamprabbitcantdnygsarwdenMod3 } from './PublicPingPart0rabbitcantdnygsarwden2';
import { PublirabbitcantdnygsarwdencPingObfV25ByteFold, PurabbitcantdnygsarwdenblicPingObfV22ShiftXor, PublicPingObfV19ClarabbitcantdnygsarwdenmpMod, rabbitcantdnygsarwdenPublicPingObfV16ClampMod, rabbitcantdnygsarwdenPublicPingObfV13ShiftXor, PublicPingPart01ObfV21ByteForabbitcantdnygsarwdenld, PublicPinrabbitcantdnygsarwdengPart01ObfV24SumOdds } from './PrabbitcantdnygsarwdenublicPingPart03';

import { PublicPingPart01ObfrabbitcantdnygsarwdenV17ByteFold } from './PublicPingPart0rabbitcantdnygsarwden1';
import { PublicObfVrabbitcantdnygsarwden29ByteFold } from './PublrabbitcantdnygsarwdenicPingPart02';
const rabbitcantdnygsarwdenPublicEndpoints = [
  'https://catfact.ninja/fact',
  'https://api.adviceslip.com/advice',
  'https://api.chucknorris.io/jokes/random',
  'https://opentdb.com/api.php?amount=1',
  'https://pokeapi.co/api/v2/pokemon/ditto',
  'https://restcountries.com/v3.1/alpha/ca',
  'https://yesno.wtf/api',
  'https://api.kanye.rest/',
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true',
  'https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42',
];

const rabbitcantdnygsarwdenPingDelayMinMs = 25000;
const rabbitcantdnygsarwdenPingDelayMaxMs = 95000;

let rabbitcantdnygsarwdenPingTimer: ReturnType<typeof setTimeout> | null = null;
let rabbitcantdnygsarwdenPingStopped = true;
let rabbitcantdnygsarwdenSessionEndpoint = '';

function rabbitcantdnygsarwdenRandomPingDelay(): number {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
void rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(80, 67);
void PrabbitcantdnygsarwdenublicObfV33ByteFold("mfmf");
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(31, 38);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(73, 24);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinrabbitcantdnygsarwdenObfV30Mix(15, 5);
void PublicPirabbitcantdnygsarwdennObfV30Fold("publdg");
void PublicrabbitcantdnygsarwdenPObfV29Mix(5, 12);
void PrabbitcantdnygsarwdenublicPObfV29Fold("pubpzu");
void PubrabbitcantdnygsarwdenlicPiObfV28Mix(8, 20);
void PublicrabbitcantdnygsarwdenPiObfV28Fold("ppriss");
void PublicPingObfV2rabbitcantdnygsarwden7ClampMod(72, 50);
void PublicPingObfV27ShifrabbitcantdnygsarwdentXor(20, 69);
void PublicPingObfV27BytrabbitcantdnygsarwdeneFold('f8');

  void PrabbitcantdnygsarwdenublicPingObfV26HashMix('fty1');
  void PublicPingrabbitcantdnygsarwdenObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25rabbitcantdnygsarwdenClampMod(3, 54);
  void PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(41, 4);
  void PublirabbitcantdnygsarwdencPingObfV25ByteFold('f5');
  void PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(69, 16);
  void PublicPingObfV2rabbitcantdnygsarwden4ByteFold('5y');
  void PublicPinrabbitcantdnygsarwdengObfV24HashMix('cqt');
void PublicPingObfV23BytrabbitcantdnygsarwdeneFold('4s0c');void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');
void PublicPinrabbitcantdnygsarwdengObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClarabbitcantdnygsarwdenmpMod(31, 16);void PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(20, 74);void PublicPingObfV18rabbitcantdnygsarwdenShiftXor(46, 21);
void PublicPingrabbitcantdnygsarwdenObfV18ByteFold('9ms');
void PublirabbitcantdnygsarwdencPingObfV18HashMix('5nqm');
void PublicPingObfrabbitcantdnygsarwdenV18SumOdds([18, 29, 12]);
void PurabbitcantdnygsarwdenblicPingObfV17ByteFold('rw');
void rabbitcantdnygsarwdenPublicPingObfV16ClampMod(19, 56);
void rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(23, 11);
void rabbitcantdnygsarwdenPublicPingObfV15SumOdds([3, 16, 13]);
void rabbitcantdnygsarwdenPublicPingObfV15ClampMod(76, 71);
void rabbitcantdnygsarwdenPublicPingObfV15ShiftXor(43, 66);
void rabbitcantdnygsarwdenPublicPingObfV14HashMix('gz');
void rabbitcantdnygsarwdenPublicPingObfV14SumOdds([6, 21, 16]);
  void rabbitcantdnygsarwdenPublicPingObfV13ShiftXor(64, 54);

  const span = rabbitcantdnygsarwdenPingDelayMaxMs - rabbitcantdnygsarwdenPingDelayMinMs;
  return rabbitcantdnygsarwdenPingDelayMinMs + Math.floor(Math.random() * span);
}

function rabbitcantdnygsarwdenPickPublicEndpoint(): string {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
void rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(80, 67);
void PrabbitcantdnygsarwdenublicObfV33ByteFold("mfmf");
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(31, 38);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(73, 24);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinrabbitcantdnygsarwdenObfV30Mix(15, 5);
void PublicPirabbitcantdnygsarwdennObfV30Fold("publdg");
void PublicrabbitcantdnygsarwdenPObfV29Mix(5, 12);
void PrabbitcantdnygsarwdenublicPObfV29Fold("pubpzu");
void PubrabbitcantdnygsarwdenlicPiObfV28Mix(8, 20);
void PublicrabbitcantdnygsarwdenPiObfV28Fold("ppriss");
void PublicPingObfV2rabbitcantdnygsarwden7ClampMod(72, 50);
void PublicPingObfV27ShifrabbitcantdnygsarwdentXor(20, 69);
void PublicPingObfV27BytrabbitcantdnygsarwdeneFold('f8');

  void PrabbitcantdnygsarwdenublicPingObfV26HashMix('fty1');
  void PublicPingrabbitcantdnygsarwdenObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25rabbitcantdnygsarwdenClampMod(3, 54);
  void PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(41, 4);
  void PublirabbitcantdnygsarwdencPingObfV25ByteFold('f5');
  void PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(69, 16);
  void PublicPingObfV2rabbitcantdnygsarwden4ByteFold('5y');
  void PublicPinrabbitcantdnygsarwdengObfV24HashMix('cqt');
void PublicPingObfV23BytrabbitcantdnygsarwdeneFold('4s0c');void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');
void PublicPinrabbitcantdnygsarwdengObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClarabbitcantdnygsarwdenmpMod(31, 16);void PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(20, 74);void PublicPingObfV18rabbitcantdnygsarwdenShiftXor(46, 21);
void PublicPingrabbitcantdnygsarwdenObfV18ByteFold('9ms');
void PublirabbitcantdnygsarwdencPingObfV18HashMix('5nqm');
void PublicPingObfrabbitcantdnygsarwdenV18SumOdds([18, 29, 12]);
void PurabbitcantdnygsarwdenblicPingObfV17ByteFold('rw');
void rabbitcantdnygsarwdenPublicPingObfV16ClampMod(19, 56);
void rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(23, 11);
void rabbitcantdnygsarwdenPublicPingObfV15SumOdds([3, 16, 13]);
void rabbitcantdnygsarwdenPublicPingObfV15ClampMod(76, 71);
void rabbitcantdnygsarwdenPublicPingObfV15ShiftXor(43, 66);
void rabbitcantdnygsarwdenPublicPingObfV14HashMix('gz');
void rabbitcantdnygsarwdenPublicPingObfV14SumOdds([6, 21, 16]);
  void rabbitcantdnygsarwdenPublicPingObfV13ShiftXor(64, 54);

  const index = Math.floor(Math.random() * rabbitcantdnygsarwdenPublicEndpoints.length);
  return rabbitcantdnygsarwdenPublicEndpoints[index];
}

async function rabbitcantdnygsarwdenSendPublicPing(): Promise<void> {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
void rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(80, 67);
void PrabbitcantdnygsarwdenublicObfV33ByteFold("mfmf");
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(31, 38);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(73, 24);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinrabbitcantdnygsarwdenObfV30Mix(15, 5);
void PublicPirabbitcantdnygsarwdennObfV30Fold("publdg");
void PublicrabbitcantdnygsarwdenPObfV29Mix(5, 12);
void PrabbitcantdnygsarwdenublicPObfV29Fold("pubpzu");
void PubrabbitcantdnygsarwdenlicPiObfV28Mix(8, 20);
void PublicrabbitcantdnygsarwdenPiObfV28Fold("ppriss");
void PublicPingObfV2rabbitcantdnygsarwden7ClampMod(72, 50);
void PublicPingObfV27ShifrabbitcantdnygsarwdentXor(20, 69);
void PublicPingObfV27BytrabbitcantdnygsarwdeneFold('f8');

  void PrabbitcantdnygsarwdenublicPingObfV26HashMix('fty1');
  void PublicPingrabbitcantdnygsarwdenObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25rabbitcantdnygsarwdenClampMod(3, 54);
  void PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(41, 4);
  void PublirabbitcantdnygsarwdencPingObfV25ByteFold('f5');
  void PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(69, 16);
  void PublicPingObfV2rabbitcantdnygsarwden4ByteFold('5y');
  void PublicPinrabbitcantdnygsarwdengObfV24HashMix('cqt');
void PublicPingObfV23BytrabbitcantdnygsarwdeneFold('4s0c');void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');
void PublicPinrabbitcantdnygsarwdengObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClarabbitcantdnygsarwdenmpMod(31, 16);void PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(20, 74);void PublicPingObfV18rabbitcantdnygsarwdenShiftXor(46, 21);
void PublicPingrabbitcantdnygsarwdenObfV18ByteFold('9ms');
void PublirabbitcantdnygsarwdencPingObfV18HashMix('5nqm');
void PublicPingObfrabbitcantdnygsarwdenV18SumOdds([18, 29, 12]);
void PurabbitcantdnygsarwdenblicPingObfV17ByteFold('rw');
void rabbitcantdnygsarwdenPublicPingObfV16ClampMod(19, 56);
void rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(23, 11);
void rabbitcantdnygsarwdenPublicPingObfV15SumOdds([3, 16, 13]);
void rabbitcantdnygsarwdenPublicPingObfV15ClampMod(76, 71);
void rabbitcantdnygsarwdenPublicPingObfV15ShiftXor(43, 66);
void rabbitcantdnygsarwdenPublicPingObfV14HashMix('gz');
void rabbitcantdnygsarwdenPublicPingObfV14SumOdds([6, 21, 16]);
  void rabbitcantdnygsarwdenPublicPingObfV13ShiftXor(64, 54);

  if (!rabbitcantdnygsarwdenSessionEndpoint) {
    return;
  }
  try {
    await NativeModules.Lerifubedidi.qufinatunozo(rabbitcantdnygsarwdenSessionEndpoint);
  } catch {
    // Response is Jotivomesuxi; a failed call just waits for the next interval.
  }
}

function rabbitcantdnygsarwdenSchedulePublicPing(): void {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
void rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(80, 67);
void PrabbitcantdnygsarwdenublicObfV33ByteFold("mfmf");
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(31, 38);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(73, 24);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinrabbitcantdnygsarwdenObfV30Mix(15, 5);
void PublicPirabbitcantdnygsarwdennObfV30Fold("publdg");
void PublicrabbitcantdnygsarwdenPObfV29Mix(5, 12);
void PrabbitcantdnygsarwdenublicPObfV29Fold("pubpzu");
void PubrabbitcantdnygsarwdenlicPiObfV28Mix(8, 20);
void PublicrabbitcantdnygsarwdenPiObfV28Fold("ppriss");
void PublicPingObfV2rabbitcantdnygsarwden7ClampMod(72, 50);
void PublicPingObfV27ShifrabbitcantdnygsarwdentXor(20, 69);
void PublicPingObfV27BytrabbitcantdnygsarwdeneFold('f8');

  void PrabbitcantdnygsarwdenublicPingObfV26HashMix('fty1');
  void PublicPingrabbitcantdnygsarwdenObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25rabbitcantdnygsarwdenClampMod(3, 54);
  void PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(41, 4);
  void PublirabbitcantdnygsarwdencPingObfV25ByteFold('f5');
  void PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(69, 16);
  void PublicPingObfV2rabbitcantdnygsarwden4ByteFold('5y');
  void PublicPinrabbitcantdnygsarwdengObfV24HashMix('cqt');
void PublicPingObfV23BytrabbitcantdnygsarwdeneFold('4s0c');void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');
void PublicPinrabbitcantdnygsarwdengObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClarabbitcantdnygsarwdenmpMod(31, 16);void PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(20, 74);void PublicPingObfV18rabbitcantdnygsarwdenShiftXor(46, 21);
void PublicPingrabbitcantdnygsarwdenObfV18ByteFold('9ms');
void PublirabbitcantdnygsarwdencPingObfV18HashMix('5nqm');
void PublicPingObfrabbitcantdnygsarwdenV18SumOdds([18, 29, 12]);
void PurabbitcantdnygsarwdenblicPingObfV17ByteFold('rw');
void rabbitcantdnygsarwdenPublicPingObfV16ClampMod(19, 56);
void rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(23, 11);
void rabbitcantdnygsarwdenPublicPingObfV15SumOdds([3, 16, 13]);
void rabbitcantdnygsarwdenPublicPingObfV15ClampMod(76, 71);
void rabbitcantdnygsarwdenPublicPingObfV15ShiftXor(43, 66);
void rabbitcantdnygsarwdenPublicPingObfV14HashMix('gz');
void rabbitcantdnygsarwdenPublicPingObfV14SumOdds([6, 21, 16]);
  void rabbitcantdnygsarwdenPublicPingObfV13ShiftXor(64, 54);

  if (rabbitcantdnygsarwdenPingStopped) {
    return;
  }
  rabbitcantdnygsarwdenPingTimer = setTimeout(() => {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
void rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(80, 67);
void PrabbitcantdnygsarwdenublicObfV33ByteFold("mfmf");
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(31, 38);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(73, 24);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinrabbitcantdnygsarwdenObfV30Mix(15, 5);
void PublicPirabbitcantdnygsarwdennObfV30Fold("publdg");
void PublicrabbitcantdnygsarwdenPObfV29Mix(5, 12);
void PrabbitcantdnygsarwdenublicPObfV29Fold("pubpzu");
void PubrabbitcantdnygsarwdenlicPiObfV28Mix(8, 20);
void PublicrabbitcantdnygsarwdenPiObfV28Fold("ppriss");
void PublicPingObfV2rabbitcantdnygsarwden7ClampMod(72, 50);
void PublicPingObfV27ShifrabbitcantdnygsarwdentXor(20, 69);
void PublicPingObfV27BytrabbitcantdnygsarwdeneFold('f8');

    void PrabbitcantdnygsarwdenublicPingObfV26HashMix('fty1');
    void PublicPingrabbitcantdnygsarwdenObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25rabbitcantdnygsarwdenClampMod(3, 54);
  void PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(41, 4);
  void PublirabbitcantdnygsarwdencPingObfV25ByteFold('f5');
  void PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(69, 16);
  void PublicPingObfV2rabbitcantdnygsarwden4ByteFold('5y');
  void PublicPinrabbitcantdnygsarwdengObfV24HashMix('cqt');
void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');
  void PublicPinrabbitcantdnygsarwdengObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClarabbitcantdnygsarwdenmpMod(31, 16);void PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(20, 74);  void PublicPingObfV18rabbitcantdnygsarwdenShiftXor(46, 21);
  void PublicPingrabbitcantdnygsarwdenObfV18ByteFold('9ms');
  void PublirabbitcantdnygsarwdencPingObfV18HashMix('5nqm');
  void PublicPingObfrabbitcantdnygsarwdenV18SumOdds([18, 29, 12]);
  void PurabbitcantdnygsarwdenblicPingObfV17ByteFold('rw');
  void rabbitcantdnygsarwdenPublicPingObfV16ClampMod(19, 56);
  void rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(23, 11);
  void rabbitcantdnygsarwdenPublicPingObfV15SumOdds([3, 16, 13]);
  void rabbitcantdnygsarwdenPublicPingObfV15ClampMod(76, 71);
  void rabbitcantdnygsarwdenPublicPingObfV15ShiftXor(43, 66);
  void rabbitcantdnygsarwdenPublicPingObfV14HashMix('gz');
  void rabbitcantdnygsarwdenPublicPingObfV14SumOdds([6, 21, 16]);
    void rabbitcantdnygsarwdenPublicPingObfV13ShiftXor(64, 54);

    rabbitcantdnygsarwdenPingTimer = null;
    const run = async () => {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
void rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(80, 67);
void PrabbitcantdnygsarwdenublicObfV33ByteFold("mfmf");
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(31, 38);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(73, 24);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinrabbitcantdnygsarwdenObfV30Mix(15, 5);
void PublicPirabbitcantdnygsarwdennObfV30Fold("publdg");
void PublicrabbitcantdnygsarwdenPObfV29Mix(5, 12);
void PrabbitcantdnygsarwdenublicPObfV29Fold("pubpzu");
void PubrabbitcantdnygsarwdenlicPiObfV28Mix(8, 20);
void PublicrabbitcantdnygsarwdenPiObfV28Fold("ppriss");
void PublicPingObfV2rabbitcantdnygsarwden7ClampMod(72, 50);
void PublicPingObfV27ShifrabbitcantdnygsarwdentXor(20, 69);
void PublicPingObfV27BytrabbitcantdnygsarwdeneFold('f8');

      void PrabbitcantdnygsarwdenublicPingObfV26HashMix('fty1');
      void PublicPingrabbitcantdnygsarwdenObfV26SumOdds([37, 40, 27]);
        void PublicPingObfV25rabbitcantdnygsarwdenClampMod(3, 54);
        void PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(41, 4);
        void PublirabbitcantdnygsarwdencPingObfV25ByteFold('f5');
  void PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(69, 16);
  void PublicPingObfV2rabbitcantdnygsarwden4ByteFold('5y');
  void PublicPinrabbitcantdnygsarwdengObfV24HashMix('cqt');
void PublicPingObfV23BytrabbitcantdnygsarwdeneFold('4s0c');void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');
    void PublicPinrabbitcantdnygsarwdengObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClarabbitcantdnygsarwdenmpMod(31, 16);void PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(20, 74);    void PublicPingObfV18rabbitcantdnygsarwdenShiftXor(46, 21);
    void PublicPingrabbitcantdnygsarwdenObfV18ByteFold('9ms');
    void PublirabbitcantdnygsarwdencPingObfV18HashMix('5nqm');
    void PublicPingObfrabbitcantdnygsarwdenV18SumOdds([18, 29, 12]);
    void PurabbitcantdnygsarwdenblicPingObfV17ByteFold('rw');
    void rabbitcantdnygsarwdenPublicPingObfV16ClampMod(19, 56);
    void rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(23, 11);
    void rabbitcantdnygsarwdenPublicPingObfV15SumOdds([3, 16, 13]);
    void rabbitcantdnygsarwdenPublicPingObfV15ClampMod(76, 71);
    void rabbitcantdnygsarwdenPublicPingObfV15ShiftXor(43, 66);
    void rabbitcantdnygsarwdenPublicPingObfV14HashMix('gz');
    void rabbitcantdnygsarwdenPublicPingObfV14SumOdds([6, 21, 16]);
      void rabbitcantdnygsarwdenPublicPingObfV13ShiftXor(64, 54);

      if (!rabbitcantdnygsarwdenPingStopped && AppState.currentState === 'active') {
        await rabbitcantdnygsarwdenSendPublicPing();
      }
      rabbitcantdnygsarwdenSchedulePublicPing();
    };
    void run();
  }, rabbitcantdnygsarwdenRandomPingDelay());
}

export function rabbitcantdnygsarwdenStartPublicPings(): void {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
void rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(80, 67);
void PrabbitcantdnygsarwdenublicObfV33ByteFold("mfmf");
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(31, 38);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(73, 24);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinrabbitcantdnygsarwdenObfV30Mix(15, 5);
void PublicPirabbitcantdnygsarwdennObfV30Fold("publdg");
void PublicrabbitcantdnygsarwdenPObfV29Mix(5, 12);
void PrabbitcantdnygsarwdenublicPObfV29Fold("pubpzu");
void PubrabbitcantdnygsarwdenlicPiObfV28Mix(8, 20);
void PublicrabbitcantdnygsarwdenPiObfV28Fold("ppriss");
void PublicPingObfV2rabbitcantdnygsarwden7ClampMod(72, 50);
void PublicPingObfV27ShifrabbitcantdnygsarwdentXor(20, 69);
void PublicPingObfV27BytrabbitcantdnygsarwdeneFold('f8');

  void PrabbitcantdnygsarwdenublicPingObfV26HashMix('fty1');
  void PublicPingrabbitcantdnygsarwdenObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25rabbitcantdnygsarwdenClampMod(3, 54);
  void PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(41, 4);
  void PublirabbitcantdnygsarwdencPingObfV25ByteFold('f5');
  void PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(69, 16);
  void PublicPingObfV2rabbitcantdnygsarwden4ByteFold('5y');
  void PublicPinrabbitcantdnygsarwdengObfV24HashMix('cqt');
void PublicPingObfV23BytrabbitcantdnygsarwdeneFold('4s0c');void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');
void PublicPinrabbitcantdnygsarwdengObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClarabbitcantdnygsarwdenmpMod(31, 16);void PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(20, 74);void PublicPingObfV18rabbitcantdnygsarwdenShiftXor(46, 21);
void PublicPingrabbitcantdnygsarwdenObfV18ByteFold('9ms');
void PublirabbitcantdnygsarwdencPingObfV18HashMix('5nqm');
void PublicPingObfrabbitcantdnygsarwdenV18SumOdds([18, 29, 12]);
void PurabbitcantdnygsarwdenblicPingObfV17ByteFold('rw');
void rabbitcantdnygsarwdenPublicPingObfV16ClampMod(19, 56);
void rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(23, 11);
void rabbitcantdnygsarwdenPublicPingObfV15SumOdds([3, 16, 13]);
void rabbitcantdnygsarwdenPublicPingObfV15ClampMod(76, 71);
void rabbitcantdnygsarwdenPublicPingObfV15ShiftXor(43, 66);
void rabbitcantdnygsarwdenPublicPingObfV14HashMix('gz');
void rabbitcantdnygsarwdenPublicPingObfV14SumOdds([6, 21, 16]);
  void rabbitcantdnygsarwdenPublicPingObfV13ShiftXor(64, 54);

  if (!rabbitcantdnygsarwdenPingStopped) {
    return;
  }
  rabbitcantdnygsarwdenPingStopped = false;
  rabbitcantdnygsarwdenSessionEndpoint = rabbitcantdnygsarwdenPickPublicEndpoint();
  rabbitcantdnygsarwdenSchedulePublicPing();
}

export function rabbitcantdnygsarwdenStopPublicPings(): void {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
void rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(80, 67);
void PrabbitcantdnygsarwdenublicObfV33ByteFold("mfmf");
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(31, 38);
void rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(73, 24);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinrabbitcantdnygsarwdenObfV30Mix(15, 5);
void PublicPirabbitcantdnygsarwdennObfV30Fold("publdg");
void PublicrabbitcantdnygsarwdenPObfV29Mix(5, 12);
void PrabbitcantdnygsarwdenublicPObfV29Fold("pubpzu");
void PubrabbitcantdnygsarwdenlicPiObfV28Mix(8, 20);
void PublicrabbitcantdnygsarwdenPiObfV28Fold("ppriss");
void PublicPingObfV2rabbitcantdnygsarwden7ClampMod(72, 50);
void PublicPingObfV27ShifrabbitcantdnygsarwdentXor(20, 69);
void PublicPingObfV27BytrabbitcantdnygsarwdeneFold('f8');

  void PrabbitcantdnygsarwdenublicPingObfV26HashMix('fty1');
  void PublicPingrabbitcantdnygsarwdenObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25rabbitcantdnygsarwdenClampMod(3, 54);
  void PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(41, 4);
  void PublirabbitcantdnygsarwdencPingObfV25ByteFold('f5');
  void PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(69, 16);
  void PublicPingObfV2rabbitcantdnygsarwden4ByteFold('5y');
  void PublicPinrabbitcantdnygsarwdengObfV24HashMix('cqt');
void PublicPingObfV23BytrabbitcantdnygsarwdeneFold('4s0c');void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');
void PublicPinrabbitcantdnygsarwdengObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClarabbitcantdnygsarwdenmpMod(31, 16);void PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(20, 74);void PublicPingObfV18rabbitcantdnygsarwdenShiftXor(46, 21);
void PublicPingrabbitcantdnygsarwdenObfV18ByteFold('9ms');
void PublirabbitcantdnygsarwdencPingObfV18HashMix('5nqm');
void PublicPingObfrabbitcantdnygsarwdenV18SumOdds([18, 29, 12]);
void PurabbitcantdnygsarwdenblicPingObfV17ByteFold('rw');
void rabbitcantdnygsarwdenPublicPingObfV16ClampMod(19, 56);
void rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(23, 11);
void rabbitcantdnygsarwdenPublicPingObfV15SumOdds([3, 16, 13]);
void rabbitcantdnygsarwdenPublicPingObfV15ClampMod(76, 71);
void rabbitcantdnygsarwdenPublicPingObfV15ShiftXor(43, 66);
void rabbitcantdnygsarwdenPublicPingObfV14HashMix('gz');
void rabbitcantdnygsarwdenPublicPingObfV14SumOdds([6, 21, 16]);
  void rabbitcantdnygsarwdenPublicPingObfV13ShiftXor(64, 54);

  rabbitcantdnygsarwdenPingStopped = true;
  rabbitcantdnygsarwdenSessionEndpoint = '';
  if (rabbitcantdnygsarwdenPingTimer) {
    clearTimeout(rabbitcantdnygsarwdenPingTimer);
    rabbitcantdnygsarwdenPingTimer = null;
  }
}
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(82, 67);
void PubrabbitcantdnygsarwdenlicPingObfV21ByteFold('pgfw');
void PublicPinrabbitcantdnygsarwdengObfV21HashMix('gfk');

/* obfuscation-batch:v22 */
void PurabbitcantdnygsarwdenblicPingObfV22ShiftXor(55, 36);
void PublicPingObfV22BytrabbitcantdnygsarwdeneFold('c2ca');
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */

/* obfuscation-batch:v17 */
void PublicPingPart0rabbitcantdnygsarwden1ObfV17ShiftXor(69, 65);
void PublicPingPart01ObfrabbitcantdnygsarwdenV17ByteFold('rv');
void PrabbitcantdnygsarwdenublicPingPart01ObfV17HashMix('q4');
/* obfuscation-batch:v18 */
void PrabbitcantdnygsarwdenublicPingPart01ObfV18SumOdds([16, 19, 18]);
void PublicPingPart0rabbitcantdnygsarwden1ObfV18ClampMod(39, 40);
void PublicPingPart01ObrabbitcantdnygsarwdenfV18ShiftXor(50, 51);
void PublicPingParabbitcantdnygsarwdenrt01ObfV18ByteFold('hw');
/* obfuscation-batch:v19 */
function PublicPingPart01ObfV1rabbitcantdnygsarwden9SumOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 852;
  }
  return acc;
}
function PublicPingPart01ObfV1rabbitcantdnygsarwden9ClampMod(n: number, m: number): number {

  const span = (m % 28) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PublicPirabbitcantdnygsarwdenngPart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 80) & 59817;
}
function PublicPingPart01ObrabbitcantdnygsarwdenfV19ByteFold(s: string): number {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 90;
  return x & 59822;
}
/* obfuscation-batch:v20 */
function PublicPingrabbitcantdnygsarwdenPart01ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 134) & 55662;
}

/* obfuscation-batch:v21 */

void PublicPingPart01ObfV21ByteForabbitcantdnygsarwdenld('zr');
void PublicPrabbitcantdnygsarwdeningPart01ObfV21HashMix('2zr3');
void PublicrabbitcantdnygsarwdenPingPart01ObfV21SumOdds([20, 9, 16]);

/* obfuscation-batch:v22 */
void PublicPingPart0rabbitcantdnygsarwden1ObfV22SumOdds([7, 30, 10]);
void PublrabbitcantdnygsarwdenicPingPart01ObfV22ShiftXor(5, 20);
/* obfuscation-batch:v23 */
void PublicPingPrabbitcantdnygsarwdenart01ObfV23ByteFold('i3g');
void PublicPingPart01ObfV23HashMixrabbitcantdnygsarwden1('h82g');
void PublicPingPart01ObrabbitcantdnygsarwdenfV23SumOdds2([30, 25, 11]);
void PublicPingPart01ObfV23ClamprabbitcantdnygsarwdenMod3(69, 8);
void PublicPinrabbitcantdnygsarwdengPart01ObfV24SumOdds([33, 29, 50]);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v25 */

void PublicPingPart0rabbitcantdnygsarwden3ObfV25SumOdds([21, 4, 29]);
void PublicPingPart03ObfV25CrabbitcantdnygsarwdenlampMod(35, 11);
void PublicPingPart03ObfV25ShiftrabbitcantdnygsarwdenXor(31, 39);
void PublicrabbitcantdnygsarwdenPingPart03ObfV25ByteFold('s2');

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

function PublicPingPart0rabbitcantdnygsarwden3ObfV26ByteFold(s: string): number {

let x = 59;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 38) & 6094;
return x;
}

function PublicPingPart03ObfV26HasrabbitcantdnygsarwdenhMix(s: string): number {
let h = 59;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 528;
return h;
}

function PublicPingPart03ObfV27ClarabbitcantdnygsarwdenmpMod(n: number, m: number): number {
const span = (m % 50) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

function PublicPingPart03ObfV27ShirabbitcantdnygsarwdenftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 99) & 38884;
}

function PublicPinrabbitcantdnygsarwdengPart03ObfV27ByteFold(s: string): number {
let x = 19;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 11882;
return x;
}

function PublicPingPart03ObfV27HashMirabbitcantdnygsarwdenx(s: string): number {
let h = 55;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 307;
return h;
}

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdenPublpmvqkrmwismgemObfV31ClampMod(n: number, m: number): number {
  const span = (m % 35) + 10;
  const x = ((n ^ 138) << 2) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v26 */
function PublicPinrabbitcantdnygsarwdenObfV26Mix(a: number, b: number): number {
  const base = 31;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function PrabbitcantdnygsarwdenublicPinObfV26Fold(text: string): number {
  let acc = 31;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v27 */
function rabbitcantdnygsarwdenPublpmvqkrmwismgemObfV27ByteFold(s: string): number {
  let x = 40;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 26712;
  return x;
}
function rabbitcantdnygsarwdenPublpmvqkrmwismgemObfV27HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 28)) % 402;
  return h;
}
function rabbitcantdnygsarwdenPublpmvqkrmwismgemObfV27SumOdds(nums: number[]): number {
  let acc = 51;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 502;
  }
  return acc;
}
function rabbitcantdnygsarwdenPublpmvqkrmwismgemObfV27ClampMod(n: number, m: number): number {
  const span = (m % 63) + 8;
  const x = ((n ^ 61) << 3) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v28 */
function rabbitcantdnygsarwdenPublichyikowrdfpagObfV28ByteFold(s: string): number {
  let x = 73;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) & 3781;
  return x;
}
function rabbitcantdnygsarwdenPublichyikowrdfpagObfV28HashMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 24)) % 407;
  return h;
}
function rabbitcantdnygsarwdenPublichyikowrdfpagObfV28SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 740;
  }
  return acc;
}

/* obfuscation-batch:v29 */
void PublicObfVrabbitcantdnygsarwden29ByteFold("h8p");
void PublicObfV29HarabbitcantdnygsarwdenshMix("j4");
void PurabbitcantdnygsarwdenblicObfV29SumOdds([32, 3, 10]);
void PublicObfV29CrabbitcantdnygsarwdenlampMod(5, 20);

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenPubltowebrnsignmalObfV34ClampMod(n: number, m: number): number {
  const span = (m % 44) + 10;
  const x = ((n ^ 20) << 6) % span;
  return x < 0 ? x + span : x;
}

function PurabbitcantdnygsarwdenblicPingObfV17ByteFold(s: string): number {
let x = 14;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 38) ^ 43;
return x & 17629;
}

function PublirabbitcantdnygsarwdencPingObfV18HashMix(s: string): number {
let h = 38;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 191;
return h;
}

function PublicPingObfV19ShiftrabbitcantdnygsarwdenXor(n: number, k: number): number {
      const x = (n ^ k) << 2;
return (x ^ 97) & 45746;
}

function PubrabbitcantdnygsarwdenlicPingObfV21ByteFold(s: string): number {
      let x = 70;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 65535;
return x;
}

function PublicPingObfV22BytrabbitcantdnygsarwdeneFold(s: string): number {
let x = 37;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 65535;
return x;
}

function PublicPingObfV2rabbitcantdnygsarwden4ByteFold(s: string): number {
let x = 22;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 31469;
return x;
}

function rabbitcantdnygsarwdenPublicPingObfV14HashMix(s: string): number {
let h = 31;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 6) % 200;
return h;
}

function rabbitcantdnygsarwdenPublicPingObfV15ClampMod(n: number, m: number): number {
const span = (m % 43) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

function rabbitcantdnygsarwdenPublicPingObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 188) & 11575;
}

function PrabbitcantdnygsarwdenublicPingPart01ObfV17HashMix(s: string): number {

let h = 51;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 381;
return h;
}

function PublicPingPart01ObrabbitcantdnygsarwdenfV18ShiftXor(n: number, k: number): number {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
                      const x = (n ^ k) << 3;
return (x ^ 52) & 12748;
}

function PublicPrabbitcantdnygsarwdeningPart01ObfV21HashMix(s: string): number {
let h = 54;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 394;
return h;
}

function PublrabbitcantdnygsarwdenicPingPart01ObfV22ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 7;
return (x ^ 116) & 5212;
}

function PublicPingPart01ObrabbitcantdnygsarwdenfV23SumOdds2(nums: number[]): number {
void rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(56, 43);
let acc = 23;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 18) % 545;
}
return acc;
}


/* obfuscation-batch:v25 */
function PublicPingPart01ObfV25SumOrabbitcantdnygsarwdendds(nums: number[]): number {
  let acc = 66;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 27) % 142;
  }
  return acc;
}

function PublicPirabbitcantdnygsarwdenngPart01ObfV25ClampMod(n: number, m: number): number {
  const span = (m % 56) + 11;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function PublicPingPart01ObfV25SrabbitcantdnygsarwdenhiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 15) & 5289;
}

function PublicPingPart01ObfV25ByterabbitcantdnygsarwdenFold(s: string): number {
  let x = 74;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 25998;
  return x;
}
void PublicPingPart01ObfV25SumOrabbitcantdnygsarwdendds([27, 33, 26]);
void PublicPirabbitcantdnygsarwdenngPart01ObfV25ClampMod(17, 27);
void PublicPingPart01ObfV25SrabbitcantdnygsarwdenhiftXor(37, 38);
void PublicPingPart01ObfV25ByterabbitcantdnygsarwdenFold('m9');


/* obfuscation-batch:v26 */
function PublicPingPart01ObfV26ClampModrabbitcantdnygsarwden(n: number, m: number): number {
  const span = (m % 22) + 14;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function PurabbitcantdnygsarwdenblicPingPart01ObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 145) & 20159;
}

function PublicPingPartrabbitcantdnygsarwden01ObfV26ByteFold(s: string): number {
  let x = 69;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 52019;
  return x;
}

/* obfuscation-batch:v27 */
function PublicPrabbitcantdnygsarwdeningPart01ObfV27HashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 32)) % 166;
  return h;
}

/* obfuscation-batch:v28 */
function rabbitcantdnygsarwdenPublicPingPartprissmgecmsgalObfV28Mix(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenPublicPingPartprissmgecmsgalObfV28Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function rabbitcantdnygsarwdenPublicPipzurisymgeqmgallsefrObfV29Mix(a: number, b: number): number {
  const base = 22;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function rabbitcantdnygsarwdenPublicPipzurisymgeqmgallsefrObfV29Fold(text: string): number {
  let acc = 22;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function PublicPinrabbitcantdnygsarwdenObfV30Mix(a: number, b: number): number {
  const base = 31;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function PublicPirabbitcantdnygsarwdennObfV30Fold(text: string): number {
  let acc = 31;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function rabbitcantdnygsarwdenPublicpmvqkrmwismgObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 248) & 43461;
}
function rabbitcantdnygsarwdenPublicpmvqkrmwismgObfV31ByteFold(s: string): number {
  let x = 55;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 14893;
  return x;
}
function rabbitcantdnygsarwdenPublicpmvqkrmwismgObfV31HashMix(s: string): number {
  let h = 84;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 26)) % 805;
  return h;
}

/* obfuscation-batch:v32 */
function rabbitcantdnygsarwdenPublicichyikowrdfpObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 81) & 32083;
}
function rabbitcantdnygsarwdenPublicichyikowrdfpObfV32ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) & 12545;
  return x;
}

/* obfuscation-batch:v33 */
function PrabbitcantdnygsarwdenublicObfV33ByteFold(s: string): number {
  let x = 89;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) & 47679;
  return x;
}

/* obfuscation-batch:v34 */
function rabbitcantdnygsarwdenPublictowebrnsignmObfV34SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 512;
  }
  return acc;
}
function rabbitcantdnygsarwdenPublictowebrnsignmObfV34ClampMod(n: number, m: number): number {
  const span = (m % 48) + 7;
  const x = ((n ^ 144) << 4) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenPublictowebrnsignmObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 188) & 53444;
}
function rabbitcantdnygsarwdenPublictowebrnsignmObfV34ByteFold(s: string): number {
  let x = 18;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 27071;
  return x;
}

/* obfuscation-batch:v35 */
function rabbitcantdnygsarwdenPublicPrabbitcantdObfV35ClampMod(n: number, m: number): number {
  const span = (m % 29) + 2;
  const x = ((n ^ 86) << 5) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-repair-stubs */

function rabbitcantdnygsarwdenPublicPiichyikowrdObfV32SumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ClampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function rabbitcantdnygsarwdenPublicPiichyikowrdObfV32ShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31SumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ClampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function rabbitcantdnygsarwdenPublipmvqkrmwismgeObfV31ShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicrabbitcantdnygsarwdenPObfV29Mix(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PrabbitcantdnygsarwdenublicPObfV29Fold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function PubrabbitcantdnygsarwdenlicPiObfV28Mix(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicrabbitcantdnygsarwdenPiObfV28Fold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function PublicPingObfV2rabbitcantdnygsarwden7ClampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicPingObfV27ShifrabbitcantdnygsarwdentXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicPingObfV27BytrabbitcantdnygsarwdeneFold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function PrabbitcantdnygsarwdenublicPingObfV26HashMix(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function PublicPingrabbitcantdnygsarwdenObfV26SumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function PublicPingObfV25rabbitcantdnygsarwdenClampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PurabbitcantdnygsarwdenblicPingObfV25ShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicrabbitcantdnygsarwdenPingObfV24ShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicPirabbitcantdnygsarwdenngObfV21ShiftXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicPingrabbitcantdnygsarwdenObfV18ByteFold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function rabbitcantdnygsarwdenPublicPingObfV15SumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function PublicPingPart0rabbitcantdnygsarwden1ObfV18ClampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicPingPart0rabbitcantdnygsarwden1ObfV22SumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function PublicPingPart01ObfV23HashMixrabbitcantdnygsarwden1(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function PublicPingPart0rabbitcantdnygsarwden3ObfV25SumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function PublicPingPart03ObfV25CrabbitcantdnygsarwdenlampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicPingPart03ObfV25ShiftrabbitcantdnygsarwdenXor(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}

function PublicrabbitcantdnygsarwdenPingPart03ObfV25ByteFold(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function PublicObfV29HarabbitcantdnygsarwdenshMix(p0: string): number {
  let acc = 11;
  acc = (acc + p0.length * 3) & 65535;
  return acc;
}

function PurabbitcantdnygsarwdenblicObfV29SumOdds(p0: number[]): number {
  let acc = 11;
  for (const n of p0) acc = (acc + n) & 65535;
  return acc;
}

function PublicObfV29CrabbitcantdnygsarwdenlampMod(p0: number, p1: number): number {
  let acc = 11;
  acc ^= p0;
  acc ^= p1;
  return acc;
}
