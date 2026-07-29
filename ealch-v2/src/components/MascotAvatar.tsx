import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, View } from 'react-native';
import { useTheme } from '@/theme/useTheme';
import { useStore } from '@/store/useStore';
import { avatarSrc } from '@/content/avatars';
import { useReduceMotion } from '@/utils/reduceMotion';

// The coach's voice avatar (mascot pivot, 2026-07-25, replaces the photoreal
// Camille direction; user-selectable roster — Settings → Appearance →
// Avatar, `AVATARS` in content/avatars.ts). Animated via React Native's
// built-in Animated API, not Rive: Rive is a native module and the Brix
// Mascot amendment locks it to wait until expo-speech-recognition's first
// production release (the "one unproven native module per release" rule).
// Squash-and-stretch (the Playfulness addendum's locked house style —
// everything rubbery/bouncy, never a rigid hold) is straightforward with
// Animated's scaleX/scaleY, so the fun ships now; Rive slots in later for
// the richer amplitude-driven glow the base amendment describes.
//
// Every roster image: full body head to feet, background-removed
// (fal-ai/birefnet), transparent, 200×200, 7-14 KB each.
export type MascotState = 'static' | 'idle' | 'thinking' | 'celebrate';
export type CelebrateTier = 'micro' | 'medium';

export function MascotAvatar({
  size = 56,
  rounded = true,
  state = 'static',
  tier = 'micro',
  celebrateKey,
}: {
  size?: number;
  rounded?: boolean;
  state?: MascotState;
  tier?: CelebrateTier;
  // Bump this (e.g. an incrementing counter) each time state="celebrate"
  // should replay — React needs a changing value to know "trigger again".
  celebrateKey?: number | string;
}) {
  const t = useTheme();
  const avatarId = useStore((s) => s.avatarId);
  const src = avatarSrc(avatarId);
  // Accessibility Gate amendment: reduce-motion is a hard always-on default
  // for the mascot, not a tier option — checked once here so every call
  // site inherits it for free instead of re-implementing the check.
  const reduceMotion = useReduceMotion();

  const scaleX = useRef(new Animated.Value(1)).current;
  const scaleY = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    scaleX.setValue(1);
    scaleY.setValue(1);
    translateY.setValue(0);
    rotate.setValue(0);
    if (reduceMotion || (state !== 'idle' && state !== 'thinking')) return;

    const loop =
      state === 'idle'
        ? // Gentle rubbery breathing — the ambient, most-of-the-time state.
          Animated.loop(
            Animated.sequence([
              Animated.parallel([
                Animated.timing(scaleY, { toValue: 1.05, duration: 900, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
                Animated.timing(scaleX, { toValue: 0.96, duration: 900, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
              ]),
              Animated.parallel([
                Animated.timing(scaleY, { toValue: 1, duration: 900, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
                Animated.timing(scaleX, { toValue: 1, duration: 900, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
              ]),
            ])
          )
        : // "thinking" — a slow curious sway. Doubles as the app's universal
          // loading cue (Playfulness addendum, phase 2): never discouraged,
          // never a spinner.
          Animated.loop(
            Animated.sequence([
              Animated.timing(rotate, { toValue: 1, duration: 1000, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
              Animated.timing(rotate, { toValue: -1, duration: 1400, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
              Animated.timing(rotate, { toValue: 0, duration: 900, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
            ])
          );
    loop.start();
    return () => loop.stop();
  }, [state, reduceMotion]);

  useEffect(() => {
    if (state !== 'celebrate' || reduceMotion || celebrateKey === undefined) return;
    const big = tier === 'medium';
    // Small circular avatars clip a big vertical jump against their frame,
    // so the hop is mostly squash-and-stretch in place; full-body (rounded=
    // false) contexts get the fuller bounce.
    const jump = (big ? -18 : -8) * (rounded ? 0.25 : 1);
    const seq = Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleY, { toValue: big ? 0.78 : 0.85, duration: 90, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(scaleX, { toValue: big ? 1.22 : 1.15, duration: 90, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(scaleY, { toValue: big ? 1.28 : 1.18, duration: 140, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(scaleX, { toValue: big ? 0.82 : 0.88, duration: 140, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(translateY, { toValue: jump, duration: 140, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.spring(scaleY, { toValue: 1, useNativeDriver: true, friction: 4, tension: 90 }),
        Animated.spring(scaleX, { toValue: 1, useNativeDriver: true, friction: 4, tension: 90 }),
        Animated.spring(translateY, { toValue: 0, useNativeDriver: true, friction: 4, tension: 90 }),
      ]),
    ]);
    seq.start();
    return () => seq.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [celebrateKey]);

  return (
    <View
      // Decorative: the voice line/state it sits beside is what a screen
      // reader should announce, not "mascot avatar" (Accessibility Gate
      // amendment). Hidden from the accessibility tree entirely rather than
      // given an empty label, so it never becomes a focus stop either.
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={
        rounded
          ? {
              width: size,
              height: size,
              borderRadius: size / 2,
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: t.line(16),
            }
          : { width: size, height: size }
      }
    >
      <Animated.View
        style={{
          width: size,
          height: size,
          transform: [
            { scaleX },
            { scaleY },
            { translateY },
            { rotate: rotate.interpolate({ inputRange: [-1, 1], outputRange: ['-6deg', '6deg'] }) },
          ],
        }}
      >
        <Image source={src} resizeMode={rounded ? 'cover' : 'contain'} style={{ width: size, height: size }} />
      </Animated.View>
    </View>
  );
}
