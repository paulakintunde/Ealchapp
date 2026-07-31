import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

export type WaveformProps = {
  count?: number;
  height?: number;
  color: string;
  active?: boolean;
  barWidth?: number;
  gap?: number;
  /** Live mic input, 0..1. When set (and active), the bars track the real
   *  level instead of looping — so silence visibly reads as silence. */
  level?: number;
};

/** Animated spectrum bars — the prototype's makeWave(). Loops while `active`. */
export function Waveform({
  count = 24,
  height = 40,
  color,
  active = false,
  barWidth = 3,
  gap = 3,
  level,
}: WaveformProps) {
  const bases = useMemo(
    () => Array.from({ length: count }, (_, i) => 0.18 + 0.72 * Math.abs(Math.sin(i * 0.85 + 1.2))),
    [count]
  );
  const values = useRef(bases.map((b) => new Animated.Value(b * 0.42))).current;

  useEffect(() => {
    // Metered mode: each bar chases the live level. A tiny floor keeps the
    // bars from vanishing entirely, but near-silence stays visibly flat.
    if (active && level !== undefined) {
      const lv = Math.max(0.06, Math.min(1, level));
      const anims = values.map((v, i) =>
        Animated.timing(v, {
          toValue: bases[i] * (0.14 + 0.86 * lv),
          duration: 120,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        })
      );
      anims.forEach((a) => a.start());
      return () => anims.forEach((a) => a.stop());
    }
    const loops = values.map((v, i) => {
      const base = bases[i];
      if (!active) {
        Animated.timing(v, {
          toValue: base * 0.42,
          duration: 400,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
        return null;
      }
      const dur = (0.45 + (i % 5) * 0.14) * 1000;
      const anim = Animated.loop(
        Animated.sequence([
          Animated.timing(v, { toValue: base, duration: dur, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(v, { toValue: base * 0.28, duration: dur, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        ])
      );
      anim.start();
      return anim;
    });
    return () => loops.forEach((l) => l?.stop());
  }, [active, level, bases, values]);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', height, gap }}>
      {values.map((v, i) => (
        <Animated.View
          key={i}
          style={{
            width: barWidth,
            height,
            borderRadius: barWidth,
            backgroundColor: color,
            transform: [{ scaleY: v }],
          }}
        />
      ))}
    </View>
  );
}
