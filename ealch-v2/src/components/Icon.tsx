import Svg, { Path, Circle, Line, Polygon, Rect } from 'react-native-svg';
import { useTheme } from '@/theme/useTheme';

export type IconName =
  | 'x'
  | 'trash'
  | 'gear'
  | 'chevronRight'
  | 'chevronDown'
  | 'chevronUp'
  | 'chevronLeft'
  | 'arrowLeft'
  | 'arrowRight'
  | 'mic'
  | 'play'
  | 'pause'
  | 'check'
  | 'plus'
  | 'flame'
  | 'star'
  | 'lock'
  | 'bell'
  | 'moon'
  | 'sun'
  | 'globe'
  | 'heart'
  | 'download'
  | 'wifi'
  | 'card'
  | 'speaker'
  | 'skipBack'
  | 'skipForward'
  | 'book'
  | 'user'
  | 'pencil'
  | 'clock'
  | 'eye'
  | 'eyeOff'
  | 'apple'
  | 'google'
  // Voice Flash glyphs (52x52)
  | 'cup'
  | 'house'
  | 'vfBook'
  | 'vfSun'
  | 'car';

type Spec = { vb: number; stroke?: string[]; fill?: string[]; sw?: number };

const ICONS: Record<IconName, Spec> = {
  x: { vb: 24, stroke: ['M6 6l12 12', 'M18 6L6 18'] },
  // Feather/Lucide "settings" cog — smooth teeth, reads cleanly at 16–22 px.
  gear: {
    vb: 24,
    stroke: [
      'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
      'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
    ],
  },
  chevronRight: { vb: 24, stroke: ['M9 6l6 6-6 6'] },
  chevronDown: { vb: 24, stroke: ['M6 9l6 6 6-6'] },
  chevronUp: { vb: 24, stroke: ['M6 15l6-6 6 6'] },
  chevronLeft: { vb: 24, stroke: ['M15 6l-6 6 6 6'] },
  arrowLeft: { vb: 24, stroke: ['M19 12H5', 'M11 6l-6 6 6 6'] },
  arrowRight: { vb: 24, stroke: ['M5 12h14', 'M13 6l6 6-6 6'] },
  mic: { vb: 24, stroke: ['M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z', 'M5 11a7 7 0 0 0 14 0', 'M12 18v3'] },
  play: { vb: 24, fill: ['M7 5v14l12-7z'] },
  pause: { vb: 24, fill: ['M7 5h4v14H7z', 'M14 5h4v14h-4z'] },
  check: { vb: 24, stroke: ['M5 13l4 4L19 7'] },
  plus: { vb: 24, stroke: ['M12 5v14', 'M5 12h14'] },
  flame: { vb: 24, fill: ['M12 2c1.5 4-2.5 5-2.5 8a2.5 2.5 0 0 0 5 0c0-1 .8-1.6.8-1.6.7 1 1.7 2.4 1.7 4.1a5 5 0 1 1-10 0C4.7 10.3 9 8 12 2z'] },
  star: { vb: 24, fill: ['M12 3l2.6 5.6 6 .7-4.5 4 1.3 6-5.4-3.1L6.6 19l1.3-6L3.4 9.3l6-.7z'] },
  lock: { vb: 24, stroke: ['M6 11h12v9H6z', 'M9 11V8a3 3 0 0 1 6 0v3'] },
  bell: { vb: 24, stroke: ['M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z', 'M10 20a2 2 0 0 0 4 0'] },
  moon: { vb: 24, fill: ['M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z'] },
  sun: { vb: 24, stroke: ['M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2'] },
  globe: { vb: 24, stroke: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M3 12h18', 'M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z'] },
  heart: { vb: 24, fill: ['M12 20s-7-4.5-9.5-9C.9 8 2.5 4.5 6 4.5c2 0 3 1 4 2.5 1-1.5 2-2.5 4-2.5 3.5 0 5.1 3.5 3.5 6.5C19 15.5 12 20 12 20z'] },
  download: { vb: 24, stroke: ['M12 3v11', 'M8 11l4 4 4-4', 'M5 20h14'] },
  wifi: { vb: 24, stroke: ['M2 9a15 15 0 0 1 20 0', 'M5 12.5a10 10 0 0 1 14 0', 'M8.5 16a5 5 0 0 1 7 0'], fill: ['M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'] },
  card: { vb: 24, stroke: ['M3 6h18v12H3z', 'M3 10h18'] },
  speaker: { vb: 24, stroke: ['M4 9v6h4l5 4V5L8 9H4z', 'M17 8a5 5 0 0 1 0 8'] },
  skipBack: { vb: 24, fill: ['M18 6v12l-8-6z'], stroke: ['M6 6v12'] },
  skipForward: { vb: 24, fill: ['M6 6v12l8-6z'], stroke: ['M18 6v12'] },
  book: { vb: 24, stroke: ['M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1V5z', 'M12 6v13'] },
  user: { vb: 24, stroke: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M4 21a8 8 0 0 1 16 0'] },
  pencil: { vb: 24, stroke: ['M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'] },
  clock: { vb: 24, stroke: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 7v5l3.5 2'] },
  trash: { vb: 24, stroke: ['M4 7h16', 'M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2', 'M6 7l1 13h10l1-13', 'M10 11v6', 'M14 11v6'] },
  eye: { vb: 24, stroke: ['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'] },
  eyeOff: {
    vb: 24,
    stroke: [
      'M10.6 5.1A9.9 9.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-2.4 3.3M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 4.5-1',
      'M9.9 9.9a3 3 0 0 0 4.2 4.2',
      'M3 3l18 18',
    ],
  },
  apple: {
    vb: 24,
    fill: [
      'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701',
    ],
  },
  google: {
    vb: 24,
    fill: [
      'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
    ],
  },

  // Voice Flash glyphs — ported from the prototype (52x52 viewBox).
  cup: { vb: 52, sw: 2.4, stroke: ['M8 16h32v18a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V16z', 'M40 20h6a6 6 0 0 1 0 12h-6', 'M14 8c0 3-2 3-2 6M22 8c0 3-2 3-2 6M30 8c0 3-2 3-2 6'] },
  house: { vb: 52, sw: 2.4, stroke: ['M6 26L26 8l20 18', 'M12 24v20h28V24', 'M22 44V32h8v12'] },
  vfBook: { vb: 52, sw: 2.4, stroke: ['M26 12c-5-4-13-4-18-2v30c5-2 13-2 18 2 5-4 13-4 18-2V10c-5-2-13-2-18 2z', 'M26 12v30'] },
  vfSun: { vb: 52, sw: 2.4, stroke: ['M26 36a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M26 4v6M26 42v6M4 26h6M42 26h6M10 10l4 4M38 38l4 4M42 10l-4 4M14 38l-4 4'] },
  car: { vb: 52, sw: 2.4, stroke: ['M6 30l4-12a4 4 0 0 1 4-3h24a4 4 0 0 1 4 3l4 12', 'M4 30h44v10h-6M4 40h6M18 40h16', 'M13 40a4 4 0 1 0 0-1M39 40a4 4 0 1 0 0-1'] },
};

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export function Icon({ name, size = 22, color, strokeWidth }: IconProps) {
  const t = useTheme();
  const c = color ?? t.tx;
  const spec = ICONS[name];
  const sw = strokeWidth ?? spec.sw ?? 2;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${spec.vb} ${spec.vb}`} fill="none">
      {spec.stroke?.map((d, i) => (
        <Path
          key={`s${i}`}
          d={d}
          stroke={c}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ))}
      {spec.fill?.map((d, i) => (
        <Path key={`f${i}`} d={d} fill={c} />
      ))}
    </Svg>
  );
}

// re-export raw svg primitives for ad-hoc use
export { Svg, Path, Circle, Line, Polygon, Rect };
