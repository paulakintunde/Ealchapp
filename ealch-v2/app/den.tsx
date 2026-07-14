import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { sound } from '@/services';
import { currSons, currA1, currA2, a2Subs, extendedLesson, type Unit } from '@/content/curriculum';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

type TabId = 'sons' | 'a1' | 'a2';



export default function Den() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [denTab, setDenTab] = useState<TabId>('sons');
  const [a2Open, setA2Open] = useState<number | null>(null);

  const tracks: Record<TabId, { list: Unit[]; done: number; active: number }> = {
    sons: { list: currSons, done: 2, active: 2 },
    a1: { list: currA1, done: 3, active: 3 },
    a2: { list: currA2, done: 0, active: 0 },
  };
  const track = tracks[denTab];
  const isA2 = denTab === 'a2';

  const tabs: { id: TabId; name: string; count: string }[] = [
    { id: 'sons', name: 'SONS', count: '9' },
    { id: 'a1', name: 'A1', count: '26' },
    { id: 'a2', name: 'A2', count: '8' },
  ];

  const banT = T.denBanT;
  const banS = T.denBanS;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: insets.top + 14, paddingHorizontal: 24, paddingBottom: insets.bottom + 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Press
            onPress={() => router.replace('/home')}
            style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle}>
            {T.denTag}
          </TX>
          <Press
            onPress={() => router.push('/settings')}
            style={{ width: 44, height: 44, marginRight: -12, alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name="gear" size={18} color={t.txNonText} />
          </Press>
        </View>

        {/* Title + intro */}
        <TX font="serif" role="display" size={38} style={{ marginBottom: 8 }}>
          {T.denT}
        </TX>
        <TX role="bodySm" color={t.txMuted} style={{ maxWidth: 310, marginBottom: 16 }}>
          {T.denIntro}
        </TX>

        {/* Placement banner */}
        <Press
          onPress={() => router.push('/placement')}
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.accA(35),
            backgroundColor: t.accA(6),
            padding: 14,
            paddingHorizontal: 16,
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 13,
          }}
        >
          <View
            style={{
              width: 34,
              height: 34,
              borderRadius: 17,
              backgroundColor: t.accA(14),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TX font="bold" role="label" color={t.accTx}>
              A?
            </TX>
          </View>
          <View style={{ flex: 1 }}>
            <TX font="semi" role="bodySm">
              {banT}
            </TX>
            <TX role="meta" color={t.txMuted} style={{ marginTop: 2 }}>
              {banS}
            </TX>
          </View>
          <Icon name="chevronRight" size={13} color={t.acc} strokeWidth={1.6} />
        </Press>

        {/* Track tabs */}
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 20 }}>
          {tabs.map((tab) => {
            const on = denTab === tab.id;
            return (
              <Press
                key={tab.id}
                onPress={() => {
                  setDenTab(tab.id);
                  setA2Open(null);
                }}
                style={{
                  flex: 1,
                  minHeight: 44,
                  paddingVertical: 6,
                  borderRadius: 22,
                  borderWidth: 1,
                  borderColor: on ? t.accA(60) : t.line(10),
                  backgroundColor: on ? t.accA(12) : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="bold" role="meta" ls={1.4} color={on ? t.accTx : t.txMuted}>
                  {tab.name}
                </TX>
                <TX role="eyebrow" color={on ? t.accA(70) : t.txSubtle} style={{ marginTop: 1 }}>
                  {tab.count}
                </TX>
              </Press>
            );
          })}
        </View>

        {/* Track summary */}
        <View
          style={{
            borderRadius: 18,
            borderWidth: 1,
            borderColor: t.line(8),
            backgroundColor: t.card,
            padding: 18,
            marginBottom: 22,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <TX font="semi" role="meta" ls={2.2} color={t.tag('gold').c}>
              {T.trackLabels[denTab]}
            </TX>
            <TX role="label" color={t.txMuted}>
              {track.done} / {track.list.length}
            </TX>
          </View>
          <ProgressBar pct={(track.done / track.list.length) * 100} />
          <TX role="label" color={t.txSubtle} style={{ marginTop: 10 }}>
            {T.trackDescs[denTab]}
          </TX>
        </View>

        {/* Units */}
        <View style={{ gap: 9 }}>
          {track.list.map((u, i) => {
            const st: 'done' | 'now' | 'lock' = i < track.done ? 'done' : i === track.active ? 'now' : 'lock';
            const lessonKey = extendedLesson[`${denTab}-${i}`];
            const open = isA2 && a2Open === i;

            const onPress = () => {
              if (lessonKey) {
                router.push({ pathname: '/lesson', params: { key: lessonKey } });
                return;
              }
              if (isA2) {
                setA2Open((o) => (o === i ? null : i));
                return;
              }
              if (st !== 'lock') router.push('/player');
            };

            const stateLabel = st === 'done' ? T.uDone : st === 'lock' ? T.uLock : '';

            return (
              <Press
                key={i}
                onPress={onPress}
                scale={0.99}
                style={{
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: st === 'now' ? t.accA(45) : t.line(7),
                  backgroundColor: st === 'now' ? t.accCard(6) : t.card,
                  padding: 14,
                  paddingHorizontal: 16,
                  opacity: st === 'lock' ? 0.55 : 1,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 13 }}>
                  <View
                    style={{
                      width: 36,
                      minHeight: 36,
                      paddingVertical: 6,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: st === 'now' ? t.acc : t.line(14),
                      backgroundColor: st === 'done' ? t.accA(14) : 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TX font="serif" role="body" color={st === 'done' || st === 'now' ? t.accTx : t.txMuted}>
                      {st === 'done' ? '✓' : String(i + 1).padStart(2, '0')}
                    </TX>
                  </View>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <TX font="semi" role="body">
                      {u.title}
                    </TX>
                    <TX font="serifI" role="label" color={t.txSubtle} style={{ marginTop: 2 }} numberOfLines={1}>
                      {u.sub}
                    </TX>
                  </View>
                  {isA2 ? (
                    lessonKey ? (
                      <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
                    ) : (
                      <View style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}>
                        <Icon name="chevronDown" size={14} color={t.txNonText} strokeWidth={1.6} />
                      </View>
                    )
                  ) : stateLabel ? (
                    <TX font="semi" role="eyebrow" ls={1.4} color={st === 'done' ? t.accTx : t.txSubtle}>
                      {stateLabel}
                    </TX>
                  ) : null}
                </View>

                {st === 'now' ? (
                  <View style={{ marginTop: 13 }}>
                    <View style={{ marginBottom: 11 }}>
                      <ProgressBar pct={55} height={3} />
                    </View>
                    <View
                      style={{
                        minHeight: 42,
                        paddingVertical: 6,
                        borderRadius: 21,
                        backgroundColor: t.acc,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TX font="semi" role="label" color={t.accInk}>
                        {T.denCont}
                      </TX>
                    </View>
                  </View>
                ) : null}

                {open ? (
                  <View
                    style={{
                      marginTop: 12,
                      borderTopWidth: 1,
                      borderTopColor: t.line(8),
                      paddingTop: 12,
                      gap: 7,
                    }}
                  >
                    {a2Subs[i].map((nm, si) => (
                      <View key={si} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: t.accA(60) }} />
                        <TX role="label" color={t.txSecondary}>
                          {nm}
                        </TX>
                      </View>
                    ))}
                  </View>
                ) : null}

                {isA2 ? (
                  <TX font="semi" role="meta" ls={1.2} color={t.accTx} style={{ marginTop: 8 }}>
                    {a2Subs[i].length} {T.subLessonsWord}
                  </TX>
                ) : null}
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
