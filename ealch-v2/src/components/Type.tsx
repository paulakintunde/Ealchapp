import { useState } from 'react';
import { PixelRatio, Text, useWindowDimensions, type TextProps, type TextStyle } from 'react-native';
import { F } from '@/theme/fonts';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { typeMetrics, type RoleKey as RK } from './type.logic';
import { useEnglishMode } from './GlossContext';
import { enTailOf, stripEnTail } from '@/content/english.logic';

type FontKey = 'serif' | 'serifI' | 'sans' | 'med' | 'semi' | 'bold' | 'notation';

/**
 * `notation` is the absence of a family, on purpose: IPA and the house
 * respelling render in the PLATFORM font.
 *
 * Instrument Sans and Instrument Serif carry 343 and 333 glyphs, and almost no
 * IPA among them. No ɑ, ə, ɛ, ɔ, ʁ, ʒ, no U+207F superscript n, no U+203F
 * undertie. Every one of those characters already falls back to a system font,
 * so an IPA line set in Instrument was being drawn in two fonts at once.
 *
 * Worse, it broke exactly one sequence. œ̃ is œ plus a combining tilde, and
 * Instrument happens to have BOTH — so that pair alone stayed in Instrument,
 * which has no mark-positioning rule for it, and the tilde landed beside the
 * ligature instead of over it, or on the following letter. Measured on a Pixel
 * 9: ɑ̃ composed correctly (ɑ is absent, so the run fell back) and œ̃ did not
 * (both present, so it did not). 954 published cards carry œ̃ in their IPA, and
 * it is the vowel in un, brun, lundi, parfum.
 *
 * Handing the whole notation run to the platform font fixes the composition and
 * makes the line one font instead of two.
 */
const FAMILY: Record<FontKey, string | undefined> = {
  serif: F.serif,
  serifI: F.serifItalic,
  sans: F.sans,
  med: F.sansMed,
  semi: F.sansSemi,
  bold: F.sansBold,
  notation: undefined,
};

export { ROLE } from './type.logic';
export type { RoleKey } from './type.logic';

// RN's TextProps already carries an ARIA `role`; intersecting it with our own
// collapses to never. Nothing passes an ARIA role to TX (accessibilityRole is
// still available), so we take the name.
export type TXProps = Omit<TextProps, 'role'> & {
  font?: FontKey;
  /** Semantic role. Sets size, lineHeight and the font-scaling cap together. */
  role?: RK;
  /** Escape hatch for one-off display sizes. Overrides role.size. */
  size?: number;
  color?: string;
  /** Line-height multiplier. Overrides role.lh. */
  lhMult?: number;
  /** Absolute px line height. Legacy: does not scale. Avoid in new code. */
  lh?: number;
  /** Tighter font-scaling cap than the role allows, for text in a box that
   *  cannot grow (tab labels, clock digits, fixed-width chips). */
  maxScale?: number;
  /** Announce this text as French to a screen reader (UDL 08).
   *
   *  In a pronunciation app, French read aloud in the interface voice is the
   *  core content delivered wrong to the learners who depend on it most. One
   *  prop on the primitive every string already flows through is the whole
   *  mechanism -- the alternative is a prop sprinkled over 33 components.
   *
   *  WHAT IT DOES, precisely, because the two platforms differ:
   *    iOS      accessibilityLanguage switches the VoiceOver voice. Real.
   *    Android  TalkBack does not read this prop. It is inert, not harmful,
   *             and the Android mechanism is NOT yet established -- see the
   *             note in a11y-language.test.ts. Do not read a `lang` prop as
   *             proof that TalkBack says it in French.
   *
   *  Only ever 'fr'. The respelling and the IPA take the OPPOSITE treatment:
   *  they are pronunciation aids written in English-ish orthography, so they
   *  must stay in the interface voice. Tagging those French makes them
   *  gibberish, which is why the guard checks for it.
   */
  lang?: 'fr';
  ls?: number; // letter spacing
  center?: boolean;
  style?: TextStyle | TextStyle[];
  /** This line IS an English translation of the French beside it. Hidden when
   *  the lesson's English toggle is off (B1 and above, content/english.logic.ts).
   *  Never set it on an answer: a flashcard back is what the learner asked for. */
  gloss?: boolean;
};

/** Themed text primitive. Defaults to Instrument Sans at the body role. */
export function TX({
  font = 'sans',
  role = 'body',
  size,
  color,
  lhMult,
  lh,
  maxScale,
  lang,
  ls,
  center,
  style,
  gloss,
  children,
  ...rest
}: TXProps) {
  const t = useTheme();
  const T = useT();
  // SUBSCRIBED, not read once: MainActivity handles fontScale|density itself
  // (plugins/withConfigChanges.js, D-20), so the activity is no longer recreated
  // when the learner changes the OS font scale and PixelRatio.getFontScale() in
  // render would never re-run. useWindowDimensions re-renders on the change.
  // Same value PixelRatio.getFontScale() returns, same fallback.
  const { fontScale: windowFontScale } = useWindowDimensions();
  const osFontScale = windowFontScale || PixelRatio.get();
  // The three-valued English mode (B1+, content/english.logic.ts). Read
  // before any early return so the hook order never changes. 'fr' hides a
  // gloss entirely; 'onDemand' hides it behind a tap; 'both' (and every
  // screen outside a lesson, where nothing provides a value) shows it unasked.
  const mode = useEnglishMode();
  const showEnglish = mode !== 'fr';
  // The on-demand reveal's own local state (D-35). Declared unconditionally,
  // like every hook above: this is ONE TX instance's own hook order, never
  // shared with or affected by any other TX instance's props.
  const [revealed, setRevealed] = useState(false);

  // The OS font scale is applied to the glyphs and the line box together, once,
  // in typeMetrics — and React Native's own scaling is switched off below, so
  // measurement and paint use a single size. See type.logic.ts for the bug this
  // closes (text silently losing its tail on a Pixel 9 at font scale 1.3).
  const { fontSize, lineHeight } = typeMetrics({
    role,
    fontScale: osFontScale,
    size,
    maxScale,
    lhMult,
    lh,
  });

  const base: TextStyle = {
    fontSize,
    lineHeight,
    color: color ?? t.txPrimary,
  };
  // Only set a family when there is one. `fontFamily: undefined` in a style
  // object is not the same as leaving it out on every RN version, and the
  // notation font depends on the platform default actually being used.
  const family = FAMILY[font];
  if (family) base.fontFamily = family;
  if (ls != null) base.letterSpacing = ls;
  if (center) base.textAlign = 'center';

  if (gloss && mode === 'fr') return null;

  // D-35, the tap target. `gloss` marks a translation, never an answer (the
  // header rule above, and answers-not-glosses.test.ts, D-36) — so nothing
  // hides HOW it is asked for in 'onDemand', only whether it is on screen
  // before a tap. Rendered as a nested `<Text onPress>`, not a Pressable
  // wrapper: TX must still be usable as a child of another Text (several call
  // sites nest one TX inside another — MissionRich.tsx:453 is one), which a
  // View-based Pressable cannot be. `Text` in this RN version (0.86) has no
  // `hitSlop` prop (Pressable-only), so the affordance's tap area is its own
  // rendered glyph box rather than a padded target — a real, if untested-for-
  // 44dp, reveal.
  if (gloss && mode === 'onDemand' && !revealed) {
    return (
      <Text
        style={[base, style as TextStyle, { color: t.txSubtle }]}
        allowFontScaling={false}
        onPress={() => setRevealed(true)}
        accessibilityRole="button"
        accessibilityLabel={T.langRevealLabel}
        accessibilityState={{ expanded: false }}
        {...rest}
      >
        {T.langRevealLabel}
      </Text>
    );
  }

  // An authored `EN: …` tail inside a French string. Hidden entirely in 'fr',
  // shown unasked in 'both' as its own line under the French, and in
  // 'onDemand' rendered as a SEPARATE trailing element behind its own tap —
  // never a press handler on a substring of the same run.
  const tail = typeof children === 'string' ? enTailOf(children) : null;
  const body = tail
    ? mode === 'fr'
      ? stripEnTail(children as string)
      : mode === 'both'
        ? [
            stripEnTail(children as string),
            <Text key="en" style={{ color: t.txSubtle }}>{`\n${tail}`}</Text>,
          ]
        : [
            stripEnTail(children as string),
            <Text
              key="en"
              style={{ color: t.txSubtle }}
              onPress={() => setRevealed(true)}
              accessibilityRole="button"
              accessibilityLabel={T.langRevealLabel}
              accessibilityState={{ expanded: revealed }}
            >
              {revealed ? `\n${tail}` : `\n${T.langRevealLabel}`}
            </Text>,
          ]
    : showEnglish
      ? children
      : Array.isArray(children)
        ? children.map((c) => (typeof c === 'string' ? stripEnTail(c) : c))
        : children;

  return (
    <Text
      style={[base, style as TextStyle]}
      // The scale is already baked into `fontSize` above, and the cap with it.
      // Letting RN scale again would apply it twice.
      allowFontScaling={false}
      // 'fr-FR' rather than 'fr': iOS wants a BCP-47 tag and picks the
      // regional voice from it. Left off entirely when unset, so nothing
      // that has not opted in changes voice.
      accessibilityLanguage={lang === 'fr' ? 'fr-FR' : undefined}
      {...rest}
    >
      {body}
    </Text>
  );
}
