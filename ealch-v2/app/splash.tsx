import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
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
      <LinearGradient
        colors={[t.accA(12), 'transparent']}
        style={{ position: 'absolute', top: '18%', width: 320, height: 320, borderRadius: 160 }}
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
          <TX font="serifI" size={76} color={t.tx} style={{ lineHeight: 78 }}>
            E<TX font="serifI" size={76} color={t.acc}>.</TX>
          </TX>
        </Animated.View>
      </View>
      <TX font="semi" size={12} ls={7} color={t.txA(60)} style={{ marginLeft: 7 }}>
        EALCH
      </TX>
      <View style={{ flexDirection: 'row', gap: 6, marginTop: 22 }}>
        {dots.map((d, i) => (
          <Animated.View key={i} style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: t.acc, opacity: d }} />
        ))}
      </View>
    </View>
  );
}
