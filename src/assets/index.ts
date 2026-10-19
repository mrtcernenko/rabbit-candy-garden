/**
 * Asset re-exports. icon_1024 / button_cta are intentionally NOT required
 * here: the launcher icon is installed into mipmap-* by the pipeline and the
 * CTA background is drawn with a gradient, so requiring them would only add
 * ~1.4 MB of dead weight to the bundle.
 *
 * Asset re-exports. The pipeline writes every PNG below (FLUX, or the
 * procedural gradient fallback) before the build, so each require() resolves.
 */
import type {Kind} from '../game/board';

export const bgLoader = require('../../assets/bg_loader.png');
export const bgMenu = require('../../assets/bg_menu.png');
export const bgGame = require('../../assets/bg_game.png');
export const spriteRabbit = require('../../assets/sprite_rabbit.png');
export const spriteLantern = require('../../assets/sprite_lantern.png');
export const spriteCandyBerry = require('../../assets/sprite_candy_berry.png');
export const spriteCandyMint = require('../../assets/sprite_candy_mint.png');
export const spriteCandyHoney = require('../../assets/sprite_candy_honey.png');
export const spriteCandyLilac = require('../../assets/sprite_candy_lilac.png');

export const CANDY_SPRITE: Record<Kind, any> = {
  berry: spriteCandyBerry,
  mint: spriteCandyMint,
  honey: spriteCandyHoney,
  lilac: spriteCandyLilac,
};
