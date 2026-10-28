/**
 * Asset re-exports. icon_1024 / button_cta are intentionally NOT required
 * here: the launcher icon is installed into mipmap-* by the pipeline and the
 * CTA background is drawn with a gradient, so requiring them would only add
 * ~1.4 MB of dead weight to the bundle.
 *
 * Asset re-exports. The pipeline writes every PNG below (FLUX, or the
 * procedural gradient fallback) before the build, so each require() resolves.
 */
import type {Kind} from '../game/borabbitcantdnygsarwdenard';

export const bgLoader = require('../../../assets/bg_loader.png');
export const bgMenu = require('../../../assets/bg_menu.png');
export const bgGame = require('../../../assets/bg_game.png');
export const spriteRabbit = require('../../../assets/sprite_rabbit.png');
export const spriteLantern = require('../../../assets/sprite_lantern.png');
export const spriteCandyBerry = require('../../../assets/sprite_candy_berry.png');
export const spriteCandyMint = require('../../../assets/sprite_candy_mint.png');
export const spriteCandyHoney = require('../../../assets/sprite_candy_honey.png');
export const spriteCandyLilac = require('../../../assets/sprite_candy_lilac.png');

export const CANDY_SPRITE: Record<Kind, any> = {
  berry: spriteCandyBerry,
  mint: spriteCandyMint,
  honey: spriteCandyHoney,
  lilac: spriteCandyLilac,
};

/* obfuscation-batch:v1 */
function rabbitcantdnygsarwdenindexObfV1ClampMod(n: number, m: number): number {
  const span = (m % 31) + 8;
  const x = ((n ^ 22) << 5) % span;
  return x < 0 ? x + span : x;
}
function rabbitcantdnygsarwdenindexObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 120) & 2998;
}
function rabbitcantdnygsarwdenindexObfV1ByteFold(s: string): number {
  let x = 81;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) & 11134;
  return x;
}
void rabbitcantdnygsarwdenindexObfV1ClampMod(70, 65);
void rabbitcantdnygsarwdenindexObfV1ShiftXor(40, 75);
void rabbitcantdnygsarwdenindexObfV1ByteFold("2jc54d");
