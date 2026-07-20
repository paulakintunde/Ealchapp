import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { useProgress } from '@/store/useProgress';
import { foldCards, itemsPracticed, masteredItems } from '@/store/progress.logic';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import type { Track } from '@/content/schema';
import { FREE_BANDS } from '@/store/entitlement.logic';
import { useFeature } from '@/store/useEntitlement';
import { track as trackEvent } from '@/services/analytics';

// Den progress is REAL and now honest about the difference between MET and
// MASTERED (Phase 5, CF-03). The bar and the "learned" count track MET — items
// answered correctly at least once — so it fills from the first right answer.
// The mastered count (recognise AND produce held for weeks) rides alongside, and
// the completion check is reserved for the real milestone: every item mastered.
// No fabricated bars: a unit reads 0/N until the learner actually earns it.

export default function Den() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [denTab, setDenTab] = useState<Track>('sons');

  // The Phase 10 level gate: sons and A1 are free forever; everything past A1
  // is Première ('levels.all'). The gate sits on the press, not the render —
  // locked units stay fully visible (what you would get), they just route to
  // the paywall instead of the lesson.
  const levelsAll = useFeature('levels.all');
  const tabLocked = !levelsAll && !(FREE_BANDS as readonly string[]).includes(denTab);

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

  // Two honest numbers per unit, not one. MET is "you got it right at least
  // once" (early progress — it fills from the first correct answer). MASTERED is
  // retention: recognise AND produce both held for weeks (progress.logic). If the
  // bar were driven by mastery alone it would read 0/N for the first three weeks
  // of daily practice — the exact D1–D14 window where a blank bar makes people
  // quit — so MET drives the bar and the mastered count rides alongside it. The
  // check is reserved for the real milestone: every item mastered.
  const attempts = useProgress((s) => s.attempts);
  const met = useMemo(() => itemsPracticed(attempts), [attempts]);
  const mastered = useMemo(() => masteredItems(foldCards(attempts)), [attempts]);
  const progressOf = (unitId: string) => {
    const ids = new Set(content.lessonsOf(unitId).flatMap((l) => l.itemIds));
    let metN = 0;
    let masteredN = 0;
    for (const id of ids) {
      if (met.has(id)) metN += 1;
      if (mastered.has(id)) masteredN += 1;
    }
    return { total: ids.size, met: metN, mastered: masteredN };
  };

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
            const prog = hasLesson ? progressOf(u.id) : { total: 0, met: 0, mastered: 0 };
            const done = prog.total > 0 && prog.mastered === prog.total;
            const started = prog.met > 0;
            const onPress = () => {
              if (!hasLesson) return;
              if (tabLocked) {
                trackEvent('gate_blocked', { feature: 'levels.all', from: 'den' });
                router.push({ pathname: '/paywall', params: { from: 'gate:levels' } });
                return;
              }
              router.push({ pathname: '/lesson', params: { key: u.lessonIds[0] } });
            };
            // A unit can declare 'narrated' before its script is written (schema.ts's
            // own comment on Lesson.narration) — only offer the Den's spoken mode once
            // a lesson actually carries both the feature flag and the script.
            const narratedLesson = hasLesson
              ? content.lessonsOf(u.id).find((l) => l.narration && l.features?.includes('narrated'))
              : undefined;
            return (
              <Press
                key={u.id}
                onPress={onPress}
                cue={hasLesson ? 'tap' : null}
                scale={hasLesson ? 0.99 : 1}
                style={{ borderRadius: 16, borderWidth: 1, borderColor: done ? t.accA(55) : hasLesson ? t.accA(30) : t.line(7), backgroundColor: t.card, padding: 14, paddingHorizontal: 16, opacity: hasLesson ? 1 : 0.6 }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 13 }}>
                  <View style={{ width: 36, minHeight: 36, paddingVertical: 6, borderRadius: 18, borderWidth: 1, borderColor: done ? t.acc : hasLesson ? t.accA(45) : t.line(14), backgroundColor: done ? t.acc : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                    {done ? (
                      <Icon name="check" size={16} color={t.accInk} strokeWidth={2.4} />
                    ) : (
                      <TX font="serif" role="body" color={hasLesson ? t.accTx : t.txMuted}>
                        {String(u.seq).padStart(2, '0')}
                      </TX>
                    )}
                  </View>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <TX font="semi" role="body">{u.title}</TX>
                    <TX font="serifI" role="label" color={t.txSubtle} style={{ marginTop: 2 }} numberOfLines={1}>
                      {u.sub}
                    </TX>
                    {/* Real per-unit progress, only once it has words to track. */}
                    {hasLesson && prog.total > 0 && !done ? (
                      <View style={{ marginTop: 9, gap: 5 }}>
                        {/* The bar tracks MET, so it fills from the first correct
                            answer instead of staying empty for three weeks. */}
                        <ProgressBar pct={(prog.met / prog.total) * 100} height={3} color={t.acc} track={t.line(10)} />
                        <TX role="meta" color={started ? t.accTx : t.txSubtle}>
                          {T.denLearned.replace('{n}', String(prog.met)).replace('{m}', String(prog.total))}
                          {prog.mastered > 0 ? '  ·  ' + T.denMastered.replace('{k}', String(prog.mastered)) : ''}
                        </TX>
                      </View>
                    ) : null}
                  </View>
                  {!hasLesson ? (
                    <TX font="semi" role="eyebrow" ls={1.4} color={t.txSubtle}>
                      {T.uSoon}
                    </TX>
                  ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                      {narratedLesson && !tabLocked ? (
                        <Press
                          cue="tap"
                          onPress={() => router.push({ pathname: '/narrated', params: { key: narratedLesson.id } })}
                          style={{ paddingVertical: 6, paddingHorizontal: 10, borderRadius: 12, borderWidth: 1, borderColor: t.accA(45), backgroundColor: t.accA(10) }}
                        >
                          <TX font="semi" role="eyebrow" ls={1.2} color={t.accTx}>
                            {T.narrCta}
                          </TX>
                        </Press>
                      ) : null}
                      {tabLocked ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingVertical: 5, paddingHorizontal: 9, borderRadius: 11, backgroundColor: t.accA(12) }}>
                          <Icon name="lock" size={11} color={t.accTx} strokeWidth={2} />
                          <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>
                            {T.premLockTag}
                          </TX>
                        </View>
                      ) : (
                        <Icon name="chevronRight" size={13} color={t.accTx} strokeWidth={1.6} />
                      )}
                    </View>
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
