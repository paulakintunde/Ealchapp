import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { cefrLabel, missionStats } from '@/content/missions';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

// The den lesson's front door (spec 2026-07-30): the ENGLISH overview card.
// Structure (mission counts, stats) is derived from the lesson's real
// sections; copy (overview block) is authored and optional — an element with
// no authored copy is hidden, never faked. The paywall chokepoint stays in
// lesson.tsx: this page is viewable for any lesson the den let the user tap.

export default function LessonOverview() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string }>();
  const key = Array.isArray(params.key) ? params.key[0] : params.key;
  const L = key ? content.lesson(key) : null;

  // A dead link renders nothing useful — back to the den (spec fallback rule).
  useEffect(() => {
    if (!L) router.replace('/den');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L]);
  if (!L) return <View style={{ flex: 1, backgroundColor: t.bg }} />;

  const ov = L.overview;
  const stats = missionStats(L.sections);
  const unit = content.unit(L.unitId);
  const prereqTitles = (unit?.prereqUnitIds ?? [])
    .map((uid) => content.unit(uid)?.title ?? uid)
    .join(', ');
  const goMissions = () => router.push({ pathname: '/missions', params: { key: L.id } });

  const statPairs: [number, string][] = [
    [stats.required, T.ovStatRequired],
    [stats.gates, T.ovStatGates],
    [stats.milestones, T.ovStatMilestones],
    [stats.badge, T.ovStatBadge],
  ];

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 8, paddingHorizontal: 24, paddingBottom: insets.bottom + 28 }} showsVerticalScrollIndicator={false}>
        {/* Header: back + eyebrow, the den pattern */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <Press onPress={() => router.back()} style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          <TX font="semi" role="meta" ls={2.2} color={t.txSecondary}>{L.tag}</TX>
          <View style={{ width: 44 }} />
        </View>

        {/* Glyph tile */}
        {ov?.glyph ? (
          <View style={{ width: 56, height: 56, borderRadius: 14, borderWidth: 1, borderColor: t.accA(45), alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
            <TX font="serifI" role="title" color={t.accTx}>{ov.glyph}</TX>
          </View>
        ) : null}

        {/* Title + French subtitle */}
        <TX font="serifI" role="display">{ov?.titleEn ?? L.title}</TX>
        {ov?.subFr ? (
          <TX font="serifI" role="body" color={t.txMuted} style={{ marginTop: 8 }}>
            {'« ' + ov.subFr + ' »'}
          </TX>
        ) : null}

        {/* Chips: CEFR · minutes · difficulty */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
          <View style={{ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 14, backgroundColor: t.accA(14) }}>
            <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>CEFR {cefrLabel(L.level)}</TX>
          </View>
          {ov ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 14, borderWidth: 1, borderColor: t.line(10) }}>
              <Icon name="clock" size={12} color={t.txMuted} />
              <TX font="semi" role="eyebrow" color={t.txSecondary}>{T.ovMin.replace('{n}', String(ov.minutes))}</TX>
            </View>
          ) : null}
          {ov ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 14, borderWidth: 1, borderColor: t.line(10) }}>
              <TX font="semi" role="eyebrow" color={t.txSecondary}>{T.ovDiff}</TX>
              <View style={{ flexDirection: 'row', gap: 3 }}>
                {[1, 2, 3, 4, 5].map((d) => (
                  <View key={d} style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: d <= ov.difficulty ? t.acc : t.line(14) }} />
                ))}
              </View>
              <TX role="eyebrow" color={t.txSubtle}>{ov.difficulty}/5</TX>
            </View>
          ) : null}
        </View>

        {/* Description: EN (existing intro), then authored FR translation */}
        <TX role="body" color={t.txSecondary} style={{ marginTop: 20 }}>{L.intro}</TX>
        {ov?.introFr ? (
          <TX font="serifI" role="label" color={t.txMuted} style={{ marginTop: 12 }}>{ov.introFr}</TX>
        ) : null}

        {/* Missions summary card — fully derived */}
        <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 18, marginTop: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
              <TX font="serif" role="title">{String(stats.missions)}</TX>
              <TX font="semi" role="body">{T.ovMissionsWord}</TX>
            </View>
            <Press cue="tap" onPress={goMissions} hitSlop={8}>
              <TX font="semi" role="label" color={t.accTx}>{T.ovSeeList + ' →'}</TX>
            </Press>
          </View>
          <View style={{ flexDirection: 'row', gap: 22, marginTop: 14, flexWrap: 'wrap' }}>
            {statPairs.map(([n, label]) =>
              n > 0 ? (
                <View key={label}>
                  <TX font="serif" role="body" color={t.accTx}>{String(n)}</TX>
                  <TX role="eyebrow" color={t.txSubtle} style={{ marginTop: 2 }}>{label}</TX>
                </View>
              ) : null
            )}
          </View>
        </View>

        {/* Prerequisites — derived from the unit graph */}
        <TX role="label" color={t.txSubtle} style={{ marginTop: 18 }}>
          {'✓ ' + (prereqTitles ? T.ovPrereqSome.replace('{t}', prereqTitles) : T.ovPrereqNone)}
        </TX>

        {/* CTA */}
        <Press cue="tap" onPress={goMissions} style={{ marginTop: 26, height: 54, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
          <TX font="bold" role="body" color={t.accInk}>{T.ovStart}</TX>
        </Press>
        <Press cue={null} onPress={goMissions} style={{ marginTop: 16, alignItems: 'center' }}>
          <TX font="semi" role="label" color={t.accTx}>{T.ovSeeAll.replace('{n}', String(stats.missions))}</TX>
        </Press>
      </ScrollView>
    </View>
  );
}
