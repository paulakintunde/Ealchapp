import { PixelRatio, Text, type TextProps, type TextStyle } from 'react-native';
import { F } from '@/theme/fonts';
import { useTheme } from '@/theme/useTheme';

type FontKey = 'serif' | 'serifI' | 'sans' | 'med' | 'semi' | 'bold';

const FAMILY: Record<FontKey, string> = {
  serif: F.serif,
  serifI: F.serifItalic,
  sans: F.sans,
  med: F.sansMed,
  semi: F.sansSemi,
  bold: F.sansBold,
};

/**
 * Type roles. The small end of the ramp is lifted hardest (9 -> 11, +22%)
 * because that is where legibility failed; display sizes are unchanged.
 *
 * `lh` is a MULTIPLIER, not a pixel value, so the line box can be recomputed
 * against the user's OS font scale. An absolute lineHeight does not scale, so
 * lines collide once Dynamic Type grows the glyphs past it.
 *
 * `max` is the per-role maxFontSizeMultiplier. Small functional text may grow
 * the most; display text is capped tightest so a 64px headline cannot blow the
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
} as const;

export type RoleKey = keyof typeof ROLE;

// RN's TextProps already carries an ARIA `role`; intersecting it with our own
// collapses to never. Nothing passes an ARIA role to TX (accessibilityRole is
// still available), so we take the name.
export type TXProps = Omit<TextProps, 'role'> & {
  font?: FontKey;
  /** Semantic role. Sets size, lineHeight and the font-scaling cap together. */
  role?: RoleKey;
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
  const r = ROLE[role];
  const fontSize = size ?? r.size;
  const max = maxScale ?? r.max;

  // Clamp the OS font scale to this role's cap, then derive lineHeight from the
  // scaled size so the line box grows with the glyphs.
  const scale = Math.min(PixelRatio.getFontScale(), max);
  const lineHeight = lh ?? Math.round(fontSize * scale * (lhMult ?? r.lh));

  const base: TextStyle = {
    fontFamily: FAMILY[font],
    fontSize,
    lineHeight,
    color: color ?? t.txPrimary,
  };
  if (ls != null) base.letterSpacing = ls;
  if (center) base.textAlign = 'center';

  return (
    <Text
      style={[base, style as TextStyle]}
      allowFontScaling
      maxFontSizeMultiplier={max}
      {...rest}
    >
      {children}
    </Text>
  );
}
