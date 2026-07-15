import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import type { Track } from '@/content/schema';

// Den progress (which units are done / in progress) needs the attempt log, which
// lands with the SRS phase. Until then this screen shows the HONEST state: what
// content exists, which units have a lesson you can open, and which are still to
// come — no fabricated "2 done" or 55% bars (review §den).

export default function Den() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [denTab, setDenTab] = useState<Track>('sons');

  const byTrack = useMemo(
    () => ({
      sons: content.units('sons'),
      a1: content.units('a1'),
      a2: content.units('a2'),
    }),
    []
  );
  const list = byTrack[denTab];
  const ready = list.filter((u) => u.lessonIds.length > 0).length;

  const tabs: { id: Track; name: string }[] = [
    { id: 'sons', name: 'SONS' },
    { id: 'a1', name: 'A1' },
    { id: 'a2', name: 'A2' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: insets.top + 14, paddingHorizontal: 24, paddingBottom: insets.bottom + 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Press onPress={() => router.replace('/home')} style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle}>
            {T.denTag}
          </TX>
          <Press onPress={() => router.push('/settings')} style={{ width: 44, height: 44, marginRight: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="gear" size={18} color={t.txNonText} />
          </Press>
        </View>

        <TX font="serif" role="display" size={38} style={{ marginBottom: 8 }}>
          {T.denT}
        </TX>
        <TX role="bodySm" color={t.txMuted} style={{ maxWidth: 310, marginBottom: 16 }}>
          {T.denIntro}
        </TX>

        {/* Placement banner */}
        <Press
          onPress={() => router.push('/placement')}
          style={{ borderRadius: 16, borderWidth: 1, borderColor: t.accA(35), backgroundColor: t.accA(6), padding: 14, paddingHorizontal: 16, marginBottom: 20, flexDirection: 'row', alignItems: 'center', gap: 13 }}
        >
          <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="bold" role="label" color={t.accTx}>A?</TX>
          </View>
          <View style={{ flex: 1 }}>
            <TX font="semi" role="bodySm">{T.denBanT}</TX>
            <TX role="meta" color={t.txMuted} style={{ marginTop: 2 }}>{T.denBanS}</TX>
          </View>
          <Icon name="chevronRight" size={13} color={t.acc} strokeWidth={1.6} />
        </Press>

        {/* Track tabs — counts are real (from the corpus) */}
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 20 }}>
          {tabs.map((tab) => {
            const on = denTab === tab.id;
            return (
              <Press
                key={tab.id}
                onPress={() => setDenTab(tab.id)}
                style={{ flex: 1, minHeight: 44, paddingVertical: 6, borderRadius: 22, borderWidth: 1, borderColor: on ? t.accA(60) : t.line(10), backgroundColor: on ? t.accA(12) : 'transparent', alignItems: 'center', justifyContent: 'center' }}
              >
                <TX font="bold" role="meta" ls={1.4} color={on ? t.accTx : t.txMuted}>{tab.name}</TX>
                <TX role="eyebrow" color={on ? t.accA(70) : t.txSubtle} style={{ marginTop: 1 }}>
                  {byTrack[tab.id].length}
                </TX>
              </Press>
            );
          })}
        </View>

        {/* Track summary — content availability, not a fabricated completion count */}
        <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 18, marginBottom: 22 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <TX font="semi" role="meta" ls={2.2} color={t.tag('gold').c}>
              {T.trackLabels[denTab]}
            </TX>
            <TX role="label" color={t.txMuted}>
              {T.denLessonsReady.replace('{n}', String(ready))}
            </TX>
          </View>
          <TX role="label" color={t.txSubtle}>
            {T.trackDescs[denTab]}
          </TX>
        </View>

        {/* Units */}
        <View style={{ gap: 9 }}>
          {list.map((u) => {
            const hasLesson = u.lessonIds.length > 0;
            const onPress = () => {
              if (hasLesson) router.push({ pathname: '/lesson', params: { key: u.lessonIds[0] } });
            };
            return (
              <Press
                key={u.id}
                onPress={onPress}
                cue={hasLesson ? 'tap' : null}
                scale={hasLesson ? 0.99 : 1}
                style={{ borderRadius: 16, borderWidth: 1, borderColor: hasLesson ? t.accA(30) : t.line(7), backgroundColor: t.card, padding: 14, paddingHorizontal: 16, opacity: hasLesson ? 1 : 0.6 }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 13 }}>
                  <View style={{ width: 36, minHeight: 36, paddingVertical: 6, borderRadius: 18, borderWidth: 1, borderColor: hasLesson ? t.accA(45) : t.line(14), alignItems: 'center', justifyContent: 'center' }}>
                    <TX font="serif" role="body" color={hasLesson ? t.accTx : t.txMuted}>
                      {String(u.seq).padStart(2, '0')}
                    </TX>
                  </View>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <TX font="semi" role="body">{u.title}</TX>
                    <TX font="serifI" role="label" color={t.txSubtle} style={{ marginTop: 2 }} numberOfLines={1}>
                      {u.sub}
                    </TX>
                  </View>
                  {hasLesson ? (
                    <Icon name="chevronRight" size={13} color={t.accTx} strokeWidth={1.6} />
                  ) : (
                    <TX font="semi" role="eyebrow" ls={1.4} color={t.txSubtle}>
                      {T.uSoon}
                    </TX>
                  )}
                </View>
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
