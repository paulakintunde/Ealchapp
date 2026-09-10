import { PixelRatio, Text, type TextProps, type TextStyle } from 'react-native';
import { F } from '@/theme/fonts';
import { useTheme } from '@/theme/useTheme';
import { typeMetrics, type RoleKey as RK } from './type.logic';

type FontKey = 'serif' | 'serifI' | 'sans' | 'med' | 'semi' | 'bold';

const FAMILY: Record<FontKey, string> = {
  serif: F.serif,
  serifI: F.serifItalic,
  sans: F.sans,
  med: F.sansMed,
  semi: F.sansSemi,
  bold: F.sansBold,
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
      // The scale is already baked into `fontSize` above, and the cap with it.
      // Letting RN scale again would apply it twice.
      allowFontScaling={false}
      {...rest}
    >
      {children}
    </Text>
  );
}
