import Svg, { Path, Circle, Line, Polygon, Rect } from 'react-native-svg';

export type IconName =
  | 'x'
  | 'gear'
  | 'chevronRight'
  | 'chevronDown'
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
  // Voice Flash glyphs (52x52)
  | 'cup'
  | 'house'
  | 'vfBook'
  | 'vfSun'
  | 'car';

type Spec = { vb: number; stroke?: string[]; fill?: string[]; sw?: number };

const ICONS: Record<IconName, Spec> = {
  x: { vb: 24, stroke: ['M6 6l12 12', 'M18 6L6 18'] },
  gear: {
    vb: 24,
    stroke: [
      'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
      'M19.4 13a7.9 7.9 0 0 0 0-2l2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.3 2.5a8 8 0 0 0-1.7 1l-2.4-1-2 3.5L2.6 11a7.9 7.9 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a8 8 0 0 0 1.7 1l.3 2.5h5l.3-2.5a8 8 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5z',
    ],
  },
  chevronRight: { vb: 24, stroke: ['M9 6l6 6-6 6'] },
  chevronDown: { vb: 24, stroke: ['M6 9l6 6 6-6'] },
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

export function Icon({ name, size = 22, color = '#F4F2ED', strokeWidth }: IconProps) {
  const spec = ICONS[name];
  const sw = strokeWidth ?? spec.sw ?? 2;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${spec.vb} ${spec.vb}`} fill="none">
      {spec.stroke?.map((d, i) => (
        <Path
          key={`s${i}`}
          d={d}
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ))}
      {spec.fill?.map((d, i) => (
        <Path key={`f${i}`} d={d} fill={color} />
      ))}
    </Svg>
  );
}

// re-export raw svg primitives for ad-hoc use
export { Svg, Path, Circle, Line, Polygon, Rect };
