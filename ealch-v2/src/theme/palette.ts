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
};

export type Palette = typeof DARK;

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
  /** blend pct% of accent into card. */
  accCard: (pct: number) => string;
  /** blend two colors. */
  blend: (top: string, base: string, pct: number) => string;
  alpha: (hex: string, pct: number) => string;
};

export function buildTheme(accent: string, mode: Mode): Theme {
  const P = mode === 'light' ? LIGHT : DARK;
  return {
    ...P,
    acc: accent,
    accInk: ACCENT_INK,
    mode,
    isDark: mode === 'dark',
    line: (pct: number) => alpha(P.lnc, pct),
    accA: (pct: number) => alpha(accent, pct),
    txA: (pct: number) => alpha(P.tx, pct),
    accCard: (pct: number) => blend(accent, P.card, pct),
    blend,
    alpha,
  };
}
