/**
 * Visual preset: CANDY_SWEET (design-system preset id "candy-sweet").
 * Only the accent hexes are overridden with the brief colours; the preset
 * name field itself is kept verbatim (rule #11b).
 */
export const theme = {
  name: 'CANDY_SWEET',
  presetId: 'candy-sweet',
  style: 'CLAYMORPHISM',

  colors: {
    bg: '#FFF2F7',
    surface: '#FFF9F0',
    surfaceAlt: '#F8E8F0',
    surfaceSunken: '#EFE2E9',

    berry: '#D95D9F',
    berryLight: '#F06BAE',
    berryDeep: '#B8407F',
    mint: '#65C7B0',
    mintLight: '#7FDCC4',
    honey: '#F6C85F',
    lilac: '#9B59B6',

    night: '#38283A',
    nightMid: '#4A2A50',
    nightDeep: '#2A1B33',

    text: '#38283A',
    textSoft: '#7A6378',
    textMuted: '#9A869C',
    onDark: '#FFF2F7',

    border: 'rgba(217,93,159,0.18)',
    borderSoft: 'rgba(217,93,159,0.26)',
    highlight: 'rgba(255,255,255,0.9)',
    tintBerry: 'rgba(217,93,159,0.10)',
    scrim: 'rgba(56,40,58,0.55)',
  },

  gradients: {
    primary: ['#F06BAE', '#D95D9F'],
    mint: ['#7FDCC4', '#65C7B0'],
    honey: ['#FFE39A', '#F6C85F'],
    moon: ['#FFF9F0', '#F6C85F'],
    night: ['#2A1B33', '#4A2A50', '#38283A'],
    menuWash: ['rgba(255,242,247,0)', 'rgba(255,242,247,0.55)', '#FFF2F7'],
    gameWash: ['rgba(255,242,247,0.86)', 'rgba(248,232,240,0.94)'],
    winSky: ['#4A2A50', '#D95D9F', '#F6C85F'],
    loseSky: ['#54405C', '#7A5C78', '#38283A'],
    loaderBar: ['#D95D9F', '#F6C85F'],
    sunken: ['#EFE2E9', '#E4D3DD'],
  },

  radius: {
    chip: 20,
    button: 24,
    panel: 28,
    sheet: 32,
    pill: 999,
  },

  space: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 20,
    xl: 28,
  },

  font: {
    hero: 40,
    title: 30,
    heading: 26,
    value: 22,
    cta: 19,
    body: 15,
    caption: 11,
    micro: 9,
  },
} as const;

export const C = theme.colors;

/**
 * Gradient colour arrays must stay plain string[] for the LinearGradient
 * `colors` prop — a readonly tuple from `as const` is not assignable.
 */
export const G: Record<keyof typeof theme.gradients, string[]> = {
  primary: [...theme.gradients.primary],
  mint: [...theme.gradients.mint],
  honey: [...theme.gradients.honey],
  moon: [...theme.gradients.moon],
  night: [...theme.gradients.night],
  menuWash: [...theme.gradients.menuWash],
  gameWash: [...theme.gradients.gameWash],
  winSky: [...theme.gradients.winSky],
  loseSky: [...theme.gradients.loseSky],
  loaderBar: [...theme.gradients.loaderBar],
  sunken: [...theme.gradients.sunken],
};

export default theme;
