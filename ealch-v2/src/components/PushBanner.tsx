import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useRouter } from 'expo-router';
import { TX } from './Type';
import { Press } from './ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useUI } from '@/store/useUI';
import { useStore } from '@/store/useStore';
import { avatarName } from '@/content/avatars';
import { formatTime } from '@/utils/time';

/** Drops in a Spotify/iOS-style push banner; tap → Speak Mode. */
export function PushBanner() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const { bannerVisible, bannerAt, hideBanner } = useUI();
  const clock24 = useStore((s) => s.clock24);
  const coachName = avatarName(useStore((s) => s.avatarId));
  const y = useRef(new Animated.Value(-140)).current;

  useEffect(() => {
    Animated.timing(y, {
      toValue: bannerVisible ? 0 : -140,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [bannerVisible, y]);

  const text = T.bannerText.replace('{t}', formatTime(bannerAt, clock24)).replace('{name}', coachName);

  return (
    <Animated.View
      pointerEvents={bannerVisible ? 'auto' : 'none'}
      style={{
        position: 'absolute',
        top: 58,
        left: 12,
        right: 12,
        zIndex: 70,
        transform: [{ translateY: y }],
      }}
    >
      <Press
        cue={null}
        scale={0.98}
        onPress={() => {
          hideBanner();
          router.push('/speak');
        }}
        style={{
          borderRadius: 20,
          backgroundColor: t.card2,
          borderWidth: 1,
          borderColor: t.line(12),
          padding: 13,
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          shadowColor: '#000',
          shadowOpacity: 0.55,
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 14 },
          elevation: 12,
        }}
      >
        <View
          style={{
            width: 38,
            minHeight: 38,
            paddingVertical: 6,
            borderRadius: 10,
            backgroundColor: t.acc,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TX font="serifI" role="titleLg" size={21} color={t.accInk}>
            E
          </TX>
        </View>
        <View style={{ flex: 1, minWidth: 0 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <TX font="bold" role="label" ls={0.4}>
              EALCH
            </TX>
            <TX role="meta" color={t.txSubtle}>
              {T.now}
            </TX>
          </View>
          <TX role="label" color={t.txSecondary} style={{ marginTop: 2 }}>
            {text}
          </TX>
        </View>
      </Press>
    </Animated.View>
  );
}
