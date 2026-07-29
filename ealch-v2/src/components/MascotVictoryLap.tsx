import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, View } from 'react-native';
import { useStore } from '@/store/useStore';
import { avatarSrc } from '@/content/avatars';
import { useReduceMotion } from '@/utils/reduceMotion';

// celebrate:major — the "victory lap" tier from the Playfulness addendum.
// Reserved for genuinely rare moments (an exam passed is the flagship case);
// firing this often defeats the point, so it is deliberately its own
// component rather than a MascotAvatar prop — a caller has to reach for it
// on purpose. Brix runs across the screen with a confetti trail, then calls
// onDone so the caller can reveal the score/result underneath.
const { width: SCREEN_W } = Dimensions.get('window');
const CONFETTI_COLORS = ['#FF6B5C', '#2FD6C1', '#D9B36C', '#8FA7FF'];
const CONFETTI_COUNT = 10;

export function MascotVictoryLap({ active, onDone, size = 88 }: { active: boolean; onDone?: () => void; size?: number }) {
  const avatarId = useStore((s) => s.avatarId);
  const src = avatarSrc(avatarId);
  const reduceMotion = useReduceMotion();

  const x = useRef(new Animated.Value(-size)).current;
  const y = useRef(new Animated.Value(0)).current;
  const scaleX = useRef(new Animated.Value(1)).current;
  const scaleY = useRef(new Animated.Value(1)).current;
  const confetti = useRef(Array.from({ length: CONFETTI_COUNT }, () => new Animated.Value(0))).current;

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      // No travel, no confetti — the score reveal beneath still proceeds,
      // just without the run (Accessibility Gate: reduce-motion freezes to
      // a static presentation, it never blocks the flow).
      const id = setTimeout(() => onDone?.(), 300);
      return () => clearTimeout(id);
    }

    x.setValue(-size);
    y.setValue(0);
    confetti.forEach((v) => v.setValue(0));

    const bounce = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(y, { toValue: -22, duration: 220, easing: Easing.out(Easing.quad), useNativeDriver: true }),
          Animated.timing(scaleY, { toValue: 1.15, duration: 220, useNativeDriver: true }),
          Animated.timing(scaleX, { toValue: 0.9, duration: 220, useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(y, { toValue: 0, duration: 220, easing: Easing.in(Easing.quad), useNativeDriver: true }),
          Animated.timing(scaleY, { toValue: 0.9, duration: 100, useNativeDriver: true }),
          Animated.timing(scaleX, { toValue: 1.12, duration: 100, useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(scaleY, { toValue: 1, duration: 120, useNativeDriver: true }),
          Animated.timing(scaleX, { toValue: 1, duration: 120, useNativeDriver: true }),
        ]),
      ])
    );
    bounce.start();

    Animated.stagger(
      40,
      confetti.map((v) =>
        Animated.timing(v, { toValue: 1, duration: 900 + Math.random() * 400, easing: Easing.out(Easing.quad), useNativeDriver: true })
      )
    ).start();

    Animated.timing(x, {
      toValue: SCREEN_W + size,
      duration: 1600,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start(() => {
      bounce.stop();
      onDone?.();
    });

    return () => bounce.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;

  return (
    <View pointerEvents="none" style={{ position: 'absolute', left: 0, right: 0, top: '38%', height: size + 60, overflow: 'hidden' }}>
      {confetti.map((v, i) => {
        const left = (i / CONFETTI_COUNT) * SCREEN_W + (((i * 37) % 30) - 15);
        return (
          <Animated.View
            key={i}
            style={{
              position: 'absolute',
              left,
              top: 0,
              width: 8,
              height: 8,
              borderRadius: 2,
              backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              opacity: v.interpolate({ inputRange: [0, 0.15, 1], outputRange: [0, 1, 0] }),
              transform: [
                { translateY: v.interpolate({ inputRange: [0, 1], outputRange: [0, size + 60] }) },
                { rotate: v.interpolate({ inputRange: [0, 1], outputRange: ['0deg', `${180 + i * 40}deg`] }) },
              ],
            }}
          />
        );
      })}
      <Animated.Image
        source={src}
        resizeMode="contain"
        style={{
          position: 'absolute',
          width: size,
          height: size,
          transform: [{ translateX: x }, { translateY: y }, { scaleX }, { scaleY }],
        }}
      />
    </View>
  );
}
