import { PixelRatio, Text, type TextProps, type TextStyle } from 'react-native';
import { F } from '@/theme/fonts';
import { useTheme } from '@/theme/useTheme';
import { typeMetrics, type RoleKey as RK } from './type.logic';

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
  ls?: number; // letter spacing
  center?: boolean;
  style?: TextStyle | TextStyle[];
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
  ls,
  center,
  style,
  children,
  ...rest
}: TXProps) {
  const t = useTheme();

  // The OS font scale is applied to the glyphs and the line box together, once,
  // in typeMetrics — and React Native's own scaling is switched off below, so
  // measurement and paint use a single size. See type.logic.ts for the bug this
  // closes (text silently losing its tail on a Pixel 9 at font scale 1.3).
  const { fontSize, lineHeight } = typeMetrics({
    role,
    fontScale: PixelRatio.getFontScale(),
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

  return (
    <Text
      style={[base, style as TextStyle]}
      // The scale is already baked into `fontSize` above, and the cap with it.
      // Letting RN scale again would apply it twice.
      allowFontScaling={false}
      {...rest}
    >
      {children}
    </Text>
  );
}
