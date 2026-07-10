import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { usePathname, useRouter } from 'expo-router';
import { TX } from './Type';
import { Press } from './ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';

type Tab = { key: string; label: string; route: string };

export function TabBar() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const path = usePathname();

  const tabs: Tab[] = [
    { key: 'home', label: T.tabListen, route: '/home' },
    { key: 'speak', label: T.tabSpeak, route: '/speak' },
    { key: 'coach', label: 'COACH', route: '/chat' },
    { key: 'profile', label: T.tabProfile, route: '/profile' },
  ];

  const active = (route: string) => path === route || (route === '/home' && path === '/');

  return (
    <LinearGradient
      colors={['transparent', t.alpha(t.bg, 92)]}
      locations={[0, 0.34]}
      style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingTop: 14, paddingBottom: 30, paddingHorizontal: 10 }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        {tabs.map((tab) => {
          const on = active(tab.route);
          return (
            <Press
              key={tab.key}
              onPress={() => router.replace(tab.route as never)}
              scale={0.92}
              style={{ alignItems: 'center', gap: 6, minWidth: 64, paddingVertical: 6 }}
            >
              <View
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: on ? t.acc : 'transparent',
                }}
              />
              <TX font="semi" size={10.5} ls={2.2} color={on ? t.tx : t.txA(45)}>
                {tab.label}
              </TX>
            </Press>
          );
        })}
      </View>
    </LinearGradient>
  );
}
