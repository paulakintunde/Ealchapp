// Type metrics — the PURE half of Type.tsx.
//
// Same spirit as content.logic.ts and progress.logic.ts: this file imports
// nothing from react-native, so `node --test` executes it directly and the one
// rule that matters here — the glyphs and the line box scale together — is
// tested without a device.

/**
 * Type roles. The small end of the ramp is lifted hardest (9 -> 11, +22%)
 * because that is where legibility failed; display sizes are unchanged.
 *
 * `lh` is a MULTIPLIER, not a pixel value, so the line box is recomputed
 * against the size actually rendered. An absolute lineHeight does not scale, so
 * lines collide once Dynamic Type grows the glyphs past it.
 *
 * `max` is the per-role font-scale cap. Small functional text may grow the
 * most; display text is capped tightest so a 64px headline cannot blow the
 * layout apart.
 */
export const ROLE = {
  eyebrow: { size: 11, lh: 1.3, max: 1.8 },
  meta: { size: 12, lh: 1.35, max: 1.8 },
  label: { size: 13, lh: 1.4, max: 1.7 },
  bodySm: { size: 14, lh: 1.45, max: 1.7 },
  body: { size: 15, lh: 1.5, max: 1.6 },
  bodyLg: { size: 16, lh: 1.45, max: 1.6 },
  titleSm: { size: 17, lh: 1.35, max: 1.5 },
  title: { size: 18, lh: 1.3, max: 1.4 },
  titleLg: { size: 21, lh: 1.25, max: 1.35 },
  display: { size: 34, lh: 1.1, max: 1.25 },
  /** The XL word card's hero line: one French word, and nothing else on the
   *  screen. Capped tightest of all (1.15) because at 56pt even a small OS
   *  font scale pushes a long word like « printemps » past the viewport, and
   *  the card has no second line to reflow into. The renderer shrinks to fit
   *  rather than wrapping — see WordCardXL. */
  display2: { size: 56, lh: 1.05, max: 1.15 },
} as const;

export type RoleKey = keyof typeof ROLE;

export type MetricsInput = {
  role: RoleKey;
  /** The OS font scale, from PixelRatio.getFontScale(). */
  fontScale: number;
  /** Overrides ROLE[role].size. */
  size?: number;
  /** Tighter cap than the role allows. */
  maxScale?: number;
  /** Line-height multiplier, overriding ROLE[role].lh. */
  lhMult?: number;
  /** Absolute px line height. Legacy: deliberately does NOT scale. */
  lh?: number;
};

/**
 * The rendered font size and line height for one piece of text.
 *
 * THE RULE: the OS font scale is applied to the GLYPHS and the LINE BOX
 * together, here, once — and React Native's own `allowFontScaling` is switched
 * off at the call site, so nothing scales the text a second time by a different
 * amount.
 *
 * ── The bug this closes, measured on a Pixel 9 ────────────────────────────
 *
 * Before this, `fontSize` was handed to Android unscaled and `lineHeight` was
 * pre-multiplied by the capped font scale, with `allowFontScaling` left on and
 * `maxFontSizeMultiplier` set per role — three parties with three ideas of how
 * big the text was.
 *
 * At OS font scale 1.3, display-role text (cap 1.25) did not grow at all: the
 * glyphs measured pixel-identical to font scale 1.0, while the line box grew
 * from 34.3dp to 43.0dp. Text then no longer fitted the line it had been
 * measured for, and the tail was silently dropped — a flashcard front read
 * « À » for the card « À bientôt ! », and a conjugation prompt rendered
 * « prendre · présent · », losing the pronoun that was the entire question.
 * Eight of nine cards in one deck lost text. The same gap made multi-line
 * blocks overflow the card holding them.
 *
 * It is font-scale dependent and NOT monotonic: absent at 1.0, 1.15 and 1.8,
 * present at 1.3. Roles whose cap did not bind at 1.3 (respell, buttons) scaled
 * normally and kept their text, which is what points at the cap.
 *
 * Rather than model which of the three parties wins at which scale, this
 * function takes the decision away from all of them: one capped scale, applied
 * once, to both numbers.
 */
export function typeMetrics(input: MetricsInput): { fontSize: number; lineHeight: number } {
  const r = ROLE[input.role];
  const baseSize = input.size ?? r.size;
  const max = input.maxScale ?? r.max;
  // A font scale below 1 is honoured as-is; only growth is capped.
  const scale = Math.min(input.fontScale, max);
  const fontSize = baseSize * scale;
  const lineHeight = input.lh ?? Math.round(fontSize * (input.lhMult ?? r.lh));
  return { fontSize, lineHeight };
}
