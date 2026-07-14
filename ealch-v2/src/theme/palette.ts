// Design tokens ported 1:1 from the Ealch v2 prototype CSS variables.
import { alpha, blend } from './color';

export type Mode = 'dark' | 'light';

export type AccentOption = { c: string; n: string };

// Accent options (Brand · theme changer) — value + display name.
export const ACCENTS: AccentOption[] = [
  { c: '#2FD6C1', n: 'Riviera' },
  { c: '#FF6B5C', n: 'Corail' },
  { c: '#D9B36C', n: 'Champagne' },
  { c: '#8FA7FF', n: 'Nuit' },
];

export const ACCENT_INK = '#0B100F';

const DARK = {
  bg: '#0B0C0E',
  bgDeep: '#060708',
  card: '#101216',
  card2: '#14171C',
  sheet: '#13161B',
  input: '#111318',
  tx: '#F4F2ED',
  lnc: '#FFFFFF',
  desk1: '#141519',
  desk2: '#0A0B0D',
  knob: '#F4F2ED',
  danger: '#FF6B5C',
};

const LIGHT = {
  bg: '#F5F3EE',
  bgDeep: '#ECE9E1',
  card: '#FFFFFF',
  card2: '#FBF9F4',
  sheet: '#FFFFFF',
  input: '#FFFFFF',
  tx: '#17181B',
  lnc: '#17181B',
  desk1: '#E8E5DD',
  desk2: '#DCD8CE',
  knob: '#FFFFFF',
  danger: '#C2412F', // darker red than dark-mode coral so it passes contrast on cream
};

export type Palette = typeof DARK;

/** Semantic tag/chip tone, resolved to { bg, c } per mode via Theme.tag(). */
export type TagTone = 'gold' | 'accent' | 'grammar' | 'info' | 'neutral' | 'danger';

export type Theme = Palette & {
  acc: string;
  accInk: string;
  mode: Mode;
  isDark: boolean;
  /** lnc at opacity pct (0..100) → rgba, used for hairlines/overlays. */
  line: (pct: number) => string;
  /** accent at opacity pct → rgba. */
  accA: (pct: number) => string;
  /** text at opacity pct → rgba. */
  txA: (pct: number) => string;
  /** danger at opacity pct → rgba. */
  dangerA: (pct: number) => string;
  /** blend pct% of accent into card. */
  accCard: (pct: number) => string;
  /** semantic tag colors (pill bg + text) for the current mode. */
  tag: (tone: TagTone) => { bg: string; c: string };
  /** soft elevation for card surfaces — empty in dark mode (hairlines suffice). */
  cardShadow: object;
  /** blend two colors. */
  blend: (top: string, base: string, pct: number) => string;
  alpha: (hex: string, pct: number) => string;
};

export function buildTheme(accent: string, mode: Mode): Theme {
  const P = mode === 'light' ? LIGHT : DARK;
  const isDark = mode === 'dark';
  return {
    ...P,
    acc: accent,
    accInk: ACCENT_INK,
    mode,
    isDark,
    // Light mode floors: hairlines below 12% vanish on cream; functional text
    // below 45% fails contrast (decorative fills < 25% are left untouched).
    line: (pct: number) => alpha(P.lnc, isDark ? pct : Math.max(pct, 12)),
    accA: (pct: number) => alpha(accent, pct),
    txA: (pct: number) => alpha(P.tx, isDark || pct < 25 ? pct : Math.max(pct, 45)),
    dangerA: (pct: number) => alpha(P.danger, pct),
    accCard: (pct: number) => blend(accent, P.card, pct),
    tag: (tone: TagTone) => {
      switch (tone) {
        case 'gold':
          return isDark
            ? { bg: 'rgba(214,160,96,0.16)', c: '#E6BB7C' }
            : { bg: 'rgba(214,160,96,0.20)', c: '#8A6127' };
        case 'accent':
          return { bg: alpha(accent, 14), c: isDark ? accent : blend(accent, P.tx, 55) };
        case 'grammar':
          return isDark
            ? { bg: 'rgba(139,116,190,0.20)', c: '#B7A3E3' }
            : { bg: 'rgba(139,116,190,0.16)', c: '#63549B' };
        case 'info':
          return isDark
            ? { bg: 'rgba(96,126,160,0.22)', c: '#9FBEDF' }
            : { bg: 'rgba(96,126,160,0.18)', c: '#48607D' };
        case 'danger':
          return { bg: alpha(P.danger, 14), c: isDark ? '#FF9A8E' : P.danger };
        case 'neutral':
          return { bg: alpha(P.lnc, 8), c: alpha(P.tx, 60) };
      }
    },
    cardShadow: isDark
      ? {}
      : { shadowColor: '#17181B', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.06, shadowRadius: 12, elevation: 2 },
    blend,
    alpha,
  };
}
