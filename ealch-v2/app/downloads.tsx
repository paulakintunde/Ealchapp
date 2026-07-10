import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, Toggle } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { sound } from '@/services';

const TOTAL_MB = 2048; // 2 GB device allowance

export default function Downloads() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);

  // Store has no dlWifi field — keep the Wi-Fi-only preference local.
  const [wifiOnly, setWifiOnly] = useState(true);

  const cats = [
    { label: lang === 'fr' ? 'Playlists' : 'Playlists', mb: 420, color: t.acc },
    { label: lang === 'fr' ? 'Leçons' : 'Lessons', mb: 180, color: t.accA(45) },
    { label: lang === 'fr' ? 'Audio du coach' : 'Coach audio', mb: 60, color: t.accA(22) },
  ];
  const usedMb = cats.reduce((a, c) => a + c.mb, 0);
  const usedLabel = `${(usedMb / 1024).toFixed(1)} GB`;
  const totalLabel = '2 GB';

  const collections = [
    {
      id: 'voix',
      title: 'La Voix · nasal vowels',
      sub: lang === 'fr' ? '12 leçons · 210 Mo' : '12 lessons · 210 MB',
    },
    {
      id: 'argot',
      title: 'Argot parisien',
      sub: lang === 'fr' ? 'playlist · 160 Mo' : 'playlist · 160 MB',
    },
    {
      id: 'a1',
      title: 'A1 · Découverte',
      sub: lang === 'fr' ? '24 leçons · 340 Mo' : '24 lessons · 340 MB',
    },
  ];
  const [got, setGot] = useState<Record<string, boolean>>({ voix: true, a1: true });

  const toggleCollection = (id: string) => {
    setGot((g) => {
      const next = !g[id];
      sound.play(next ? 'success' : 'tap');
      return { ...g, [id]: next };
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: insets.bottom + 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Tag row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <TX font="semi" size={9} ls={2.4} color={t.txA(45)}>
            {lang === 'fr' ? 'HORS LIGNE' : 'OFFLINE'}
          </TX>
          <View style={{ height: 22, paddingHorizontal: 10, borderRadius: 11, backgroundColor: t.accA(15), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="bold" size={9} ls={1.2} color={t.acc}>
              PREMIÈRE
            </TX>
          </View>
        </View>

        {/* Title + subtitle */}
        <TX font="serifI" size={36} style={{ marginBottom: 4 }}>
          {T.downloadsT}
        </TX>
        <TX size={13} color={t.txA(55)} style={{ marginBottom: 20 }}>
          {T.downloadsS}
        </TX>

        {/* Storage breakdown card */}
        <View
          style={{
            borderRadius: 18,
            borderWidth: 1,
            borderColor: t.line(8),
            backgroundColor: t.card,
            padding: 16,
            paddingHorizontal: 18,
            marginBottom: 12,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
            <TX font="semi" size={13}>
              {T.storage}
            </TX>
            <TX size={12} color={t.txA(50)}>
              <TX font="semi" size={12} color={t.acc}>
                {usedLabel}
              </TX>{' '}
              / {totalLabel}
            </TX>
          </View>
          {/* Segmented usage bar */}
          <View style={{ height: 8, borderRadius: 4, backgroundColor: t.line(8), overflow: 'hidden', flexDirection: 'row' }}>
            {cats.map((c) => (
              <View key={c.label} style={{ width: `${(c.mb / TOTAL_MB) * 100}%`, height: '100%', backgroundColor: c.color }} />
            ))}
          </View>
          {/* Legend */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 14, marginTop: 10 }}>
            {cats.map((c) => (
              <View key={c.label} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <View style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: c.color }} />
                <TX size={10.5} color={t.txA(50)}>
                  {c.label} {c.mb} MB
                </TX>
              </View>
            ))}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <View style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: t.line(12) }} />
              <TX size={10.5} color={t.txA(50)}>
                {lang === 'fr' ? 'Espace libre' : 'Free space'} {((TOTAL_MB - usedMb) / 1024).toFixed(1)} GB
              </TX>
            </View>
          </View>
        </View>

        {/* Wi-Fi only */}
        <View
          style={{
            minHeight: 58,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.line(8),
            backgroundColor: t.card,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
            paddingHorizontal: 16,
            paddingVertical: 12,
            marginBottom: 26,
          }}
        >
          <View style={{ flex: 1 }}>
            <TX font="semi" size={13.5}>
              {T.wifiOnly}
            </TX>
            <TX size={11} color={t.txA(45)} style={{ marginTop: 1 }}>
              {lang === 'fr' ? 'Pause des téléchargements en données mobiles' : 'Pause downloads on cellular'}
            </TX>
          </View>
          <Toggle value={wifiOnly} onChange={setWifiOnly} />
        </View>

        {/* Available collections */}
        <TX font="semi" size={10} ls={2.4} color={t.txA(40)} style={{ marginBottom: 12 }}>
          {lang === 'fr' ? 'DISPONIBLE' : 'AVAILABLE'}
        </TX>
        <View style={{ gap: 10, marginBottom: 18 }}>
          {collections.map((c) => {
            const on = !!got[c.id];
            return (
              <View
                key={c.id}
                style={{
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: t.line(7),
                  backgroundColor: t.card,
                  padding: 14,
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <View style={{ flex: 1, minWidth: 0 }}>
                  <TX font="semi" size={13.5}>
                    {c.title}
                  </TX>
                  <TX size={11} color={t.txA(45)} style={{ marginTop: 2 }}>
                    {c.sub}
                  </TX>
                </View>
                <Press
                  onPress={() => toggleCollection(c.id)}
                  cue={null}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 19,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: on ? t.acc : 'transparent',
                    borderWidth: on ? 0 : 1,
                    borderColor: t.line(16),
                  }}
                >
                  <Icon name={on ? 'check' : 'download'} size={17} color={on ? t.accInk : t.txA(60)} strokeWidth={on ? 2.4 : 1.8} />
                </Press>
              </View>
            );
          })}
        </View>

        {/* Footer note */}
        <TX size={11} center color={t.txA(35)} style={{ fontStyle: 'italic' }}>
          {lang === 'fr'
            ? 'Les progrès hors ligne se synchronisent au retour du réseau.'
            : 'Progress made offline syncs when you’re back online.'}
        </TX>
      </ScrollView>
    </View>
  );
}
