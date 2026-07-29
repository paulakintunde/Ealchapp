import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { useRouter } from 'expo-router';
import { RadialGlow } from '@/components/RadialGlow';
import { MascotAvatar } from '@/components/MascotAvatar';
import { TX } from '@/components/Type';
import { useTheme } from '@/theme/useTheme';

/** Animated "E." splash — plays for returning users and as the loading screen. */
export default function Splash() {
  const t = useTheme();
  const router = useRouter();
  const spin = useRef(new Animated.Value(0)).current;
  const pop = useRef(new Animated.Value(0)).current;
  const dots = [useRef(new Animated.Value(0.25)).current, useRef(new Animated.Value(0.25)).current, useRef(new Animated.Value(0.25)).current];

  useEffect(() => {
    Animated.loop(
      Animated.timing(spin, { toValue: 1, duration: 1300, easing: Easing.linear, useNativeDriver: true })
    ).start();
    Animated.spring(pop, { toValue: 1, friction: 6, tension: 60, useNativeDriver: true }).start();
    dots.forEach((d, i) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 200),
          Animated.timing(d, { toValue: 1, duration: 480, useNativeDriver: true }),
          Animated.timing(d, { toValue: 0.25, duration: 480, useNativeDriver: true }),
        ])
      ).start();
    });
    const id = setTimeout(() => router.replace('/home'), 2400);
    return () => clearTimeout(id);
  }, [spin, pop, router]);

  const rotate = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  const scale = pop.interpolate({ inputRange: [0, 1], outputRange: [0.82, 1] });

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, alignItems: 'center', justifyContent: 'center' }}>
      <RadialGlow
        color={t.acc}
        opacity={0.16}
        cx="50%"
        cy="50%"
        rx="50%"
        ry="50%"
        style={{ top: '10%', height: 440 }}
      />
      <View style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginBottom: 26 }}>
        <Animated.View
          style={{
            position: 'absolute',
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 1.5,
            borderColor: 'transparent',
            borderTopColor: t.acc,
            borderRightColor: t.accA(30),
            transform: [{ rotate }],
          }}
        />
        <View style={{ position: 'absolute', width: 130, height: 130, borderRadius: 65, borderWidth: 1, borderColor: t.line(10) }} />
        <Animated.View style={{ transform: [{ scale }], opacity: pop }}>
          <TX font="serifI" size={76} role="display" color={t.txPrimary}>
            E<TX font="serifI" size={76} role="display" color={t.accTx}>.</TX>
          </TX>
        </Animated.View>
      </View>
      <TX font="semi" role="label" ls={7} color={t.txSecondary} style={{ marginLeft: 7 }}>
        EALCH
      </TX>
      {/* The mascot pops in on the same spring as the wordmark, then
          breathes — the splash's first character moment (Playfulness
          addendum, phase 4). */}
      <Animated.View style={{ marginTop: 18, transform: [{ scale }], opacity: pop }}>
        <MascotAvatar size={64} rounded={false} state="idle" />
      </Animated.View>
      <View style={{ flexDirection: 'row', gap: 6, marginTop: 22 }}>
        {dots.map((d, i) => (
          <Animated.View key={i} style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: t.acc, opacity: d }} />
        ))}
      </View>
    </View>
  );
}
