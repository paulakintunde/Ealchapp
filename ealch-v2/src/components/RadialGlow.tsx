import { useRef } from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

let uid = 0;

export type RadialGlowProps = {
  /** Glow color (hex, e.g. theme accent). */
  color: string;
  /** Peak opacity at the gradient center (0..1). */
  opacity?: number;
  /** Height of the glow field in px. */
  height?: number;
  /** Gradient center / radii, as SVG percentage strings. */
  cx?: string;
  cy?: string;
  rx?: string;
  ry?: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * True radial gradient glow (SVG-based — identical on iOS, Android and web).
 * Defaults to a soft halo bleeding down from the top edge of the screen.
 */
export function RadialGlow({
  color,
  opacity = 0.12,
  height = 320,
  cx = '50%',
  cy = '0%',
  rx = '75%',
  ry = '105%',
  style,
}: RadialGlowProps) {
  const id = useRef(`radial-glow-${++uid}`).current;
  return (
    <View
      pointerEvents="none"
      style={[{ position: 'absolute', top: 0, left: 0, right: 0, height }, style]}
    >
      <Svg width="100%" height="100%">
        <Defs>
          <RadialGradient id={id} cx={cx} cy={cy} rx={rx} ry={ry} fx={cx} fy={cy}>
            <Stop offset="0" stopColor={color} stopOpacity={opacity} />
            <Stop offset="0.55" stopColor={color} stopOpacity={opacity * 0.45} />
            <Stop offset="1" stopColor={color} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill={`url(#${id})`} />
      </Svg>
    </View>
  );
}
