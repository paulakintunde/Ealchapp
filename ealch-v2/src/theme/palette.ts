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
  // "Practice this" amber — softer than danger, for early-level speech misses.
  warn: '#F2A65A',
  // Live-and-working green. Added for the speaking indicator, which needs a
  // third state alongside warn and danger: a voice IS being heard right now.
  // Deliberately not an accent — the accent is user-selectable (Corail is the
  // same hue as danger), and a status colour that a theme choice can turn into
  // its own opposite is not a status colour.
  good: '#4FBF8B',
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
  warn: '#9A5A10', // darker amber for contrast on cream, same role as dark warn
  good: '#1B6340', // darker green for contrast on cream, same role as dark good
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
  /** text at opacity pct → rgba. Floored to the AA minimum in both modes. */
  txA: (pct: number) => string;
  /** Headings, values, answers. */
  txPrimary: string;
  /** Body copy, descriptions. */
  txSecondary: string;
  /** Row subtitles, meta, hints. */
  txMuted: string;
  /** The floor: AA (4.5:1) for normal text. Nothing may be fainter than this. */
  txSubtle: string;
  /** Non-text UI only (icons, strokes). WCAG 1.4.11, 3:1. Never use for text. */
  txNonText: string;
  /** Accent, safe as TEXT in both modes. Darkened on light surfaces. */
  accTx: string;
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
    // Hairlines below 12% vanish on cream.
    line: (pct: number) => alpha(P.lnc, isDark ? pct : Math.max(pct, 12)),
    accA: (pct: number) => alpha(accent, pct),
    // Contrast floors, computed against the worst-case surface in each mode.
    // DARK  (#F4F2ED on #14171C): 3:1 needs 36%, 4.5:1 needs 48%.
    // LIGHT (#17181B on #FFFFFF): 3:1 needs 47%, 4.5:1 needs 61%.
    // Below 25% we assume a decorative fill rather than text, and leave it be.
    // Prefer the named roles below; this is the safety net for one-off blends.
    txA: (pct: number) => alpha(P.tx, pct < 25 ? pct : Math.max(pct, isDark ? 48 : 61)),

    txPrimary: P.tx,
    txSecondary: alpha(P.tx, isDark ? 72 : 78),
    txMuted: alpha(P.tx, isDark ? 58 : 66),
    txSubtle: alpha(P.tx, isDark ? 48 : 61),
    txNonText: alpha(P.tx, isDark ? 40 : 50),
    // The raw accent is unreadable as text on cream (Riviera lands at 1.65:1).
    // 50% is the deepest blend that still reads as the accent; above ~52% every
    // accent drops back under 4.5:1 on white. Worst case here is 4.81:1.
    accTx: isDark ? accent : blend(accent, P.tx, 50),
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
