import { Text, type TextProps, type TextStyle } from 'react-native';
import { F } from '@/theme/fonts';

type FontKey = 'serif' | 'serifI' | 'sans' | 'med' | 'semi' | 'bold';

const FAMILY: Record<FontKey, string> = {
  serif: F.serif,
  serifI: F.serifItalic,
  sans: F.sans,
  med: F.sansMed,
  semi: F.sansSemi,
  bold: F.sansBold,
};

export type TXProps = TextProps & {
  font?: FontKey;
  size?: number;
  color?: string;
  lh?: number; // line height
  ls?: number; // letter spacing
  center?: boolean;
  style?: TextStyle | TextStyle[];
};

/** Themed text primitive. Defaults to Instrument Sans. */
export function TX({
  font = 'sans',
  size = 15,
  color,
  lh,
  ls,
  center,
  style,
  children,
  ...rest
}: TXProps) {
  const base: TextStyle = {
    fontFamily: FAMILY[font],
    fontSize: size,
    color: color ?? '#F4F2ED',
  };
  if (lh != null) base.lineHeight = lh;
  if (ls != null) base.letterSpacing = ls;
  if (center) base.textAlign = 'center';
  return (
    <Text style={[base, style as TextStyle]} {...rest}>
      {children}
    </Text>
  );
}
