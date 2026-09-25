import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { SheetGrabber, SHEET_CONTENT_PADDING } from '@/components/SheetChrome';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { cefrLabel, lessonEyebrow, missionStats } from '@/content/missions';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

// The unit Fiche (D-02): a pull-up sheet, not a screen. Replaces
// lessonoverview.tsx's job — everything that page rendered (minutes,
// difficulty, prerequisites, the blurb, the stats card, the sibling rows for
// a two-lesson unit) moves here verbatim. lessonoverview.tsx stays live and
// registered until plan 08 deletes it in the same commit that retargets
// lesson-siblings.test.ts (that test still reads lessonoverview.tsx today —
// deliberately, see spine-routes.test.ts's header).
//
// D-38 verdict (07.1-VALIDATION.md, measured on the Pixel 6, pre-settled
// before this plan ran): formSheet IS a real Android bottom sheet. This is
// the formSheet path, registered in _layout.tsx with the three measured
// defects (the unpainted detent, the 0.92 top-detent cap, font-scale-1.3
// tail-dropping) handled at the registration and in this body.
//
// Android's fitToContents formSheet does not support flex: 1 on the root, so
// this screen sizes its content explicitly and lets the inner ScrollView
// handle overflow — unlike every other screen in this app.

export default function Fiche() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const params = useLocalSearchParams<{ key?: string }>();
  const raw = Array.isArray(params.key) ? params.key[0] : params.key;
  const L = content.lesson(raw ?? '');

  // A dead link backs out to wherever opened this sheet — router.back()
  // preserves the den entry the way router.replace('/den') never does.
  // replace('/den') is the last resort, only when there is nowhere to go
  // back to (missions.tsx's own dead-link verb, carried forward per D-41).
  useEffect(() => {
    if (!L) {
      if (router.canGoBack()) router.back();
      else router.replace('/den');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L]);

  // A dead link renders a real (if bare) sheet, never a white one, while the
  // effect above resolves.
  if (!L) {
    return (
      <View style={{ backgroundColor: t.sheet, minHeight: 200 }}>
        <SheetGrabber />
      </View>
    );
  }

  const ov = L.overview;
  const stats = missionStats(L.sections);
  const unit = content.unit(L.unitId);
  const prereqTitles = (unit?.prereqUnitIds ?? [])
    .map((uid) => content.unit(uid)?.title ?? uid)
    .join(', ');

  const goAct = () => router.push({ pathname: '/act', params: { key: L.id, act: '0' } });

  // A unit may carry more than one lesson (a1.30, a2.10, a2.35 today):
  // a1.30.l2 is the A1 exam and has no other route once its first lesson is
  // finished. lessonsOf sorts by seq, so siblings list in curriculum order.
  const siblings = content.lessonsOf(L.unitId).filter((x) => x.id !== L.id);

  const statPairs: [number, string][] = [
    [stats.required, T.ovStatRequired],
    [stats.gates, T.ovStatGates],
    [stats.milestones, T.ovStatMilestones],
    [stats.badge, T.ovStatBadge],
  ];

  return (
    <View style={{ backgroundColor: t.sheet }}>
      <SheetGrabber />
      <ScrollView contentContainerStyle={SHEET_CONTENT_PADDING} showsVerticalScrollIndicator={false}>
        {/* Eyebrow */}
        <TX font="semi" role="meta" ls={2.2} color={t.txSecondary} style={{ marginBottom: 14 }}>
          {lessonEyebrow(L, unit)}
        </TX>

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
            <Press cue="tap" onPress={goAct} hitSlop={8}>
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

        {/* Sibling lessons — the only route to the second lesson of a unit.
            Tapping the row swaps this sheet's own subject (a1.30.l2, the A1
            exam, is otherwise unretakeable); the chevron opens the sibling's
            act 0 directly. */}
        {siblings.length ? (
          <View style={{ marginTop: 22 }}>
            <TX font="semi" role="eyebrow" ls={1.2} color={t.txSubtle}>{T.ovAlsoHere}</TX>
            {siblings.map((s) => (
              <View
                key={s.id}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10, borderRadius: 16, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, paddingVertical: 14, paddingHorizontal: 16 }}
              >
                <Press
                  cue="tap"
                  onPress={() => router.push({ pathname: '/fiche', params: { key: s.id } })}
                  style={{ flex: 1, minWidth: 0, flexDirection: 'row', alignItems: 'center', gap: 12 }}
                >
                  {/* flex lives on the wrapper, never on a TX, or the title clips */}
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <TX font="semi" role="label">{s.overview?.titleEn ?? s.title}</TX>
                    <TX role="eyebrow" color={t.txSubtle} style={{ marginTop: 3 }}>
                      {String(missionStats(s.sections).missions) + ' ' + T.ovMissionsWord}
                    </TX>
                  </View>
                </Press>
                <Press
                  cue="tap"
                  onPress={() => router.push({ pathname: '/act', params: { key: s.id, act: '0' } })}
                  hitSlop={8}
                  style={{ padding: 6 }}
                >
                  <Icon name="chevronRight" size={16} color={t.txNonText} strokeWidth={1.7} />
                </Press>
              </View>
            ))}
          </View>
        ) : null}

        {/* CTA */}
        <Press cue="tap" onPress={goAct} style={{ marginTop: 26, height: 54, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
          <TX font="bold" role="body" color={t.accInk}>{T.ovStart}</TX>
        </Press>
        <Press cue={null} onPress={goAct} style={{ marginTop: 16, alignItems: 'center' }}>
          <TX font="semi" role="label" color={t.accTx}>{T.ovSeeAll.replace('{n}', String(stats.missions))}</TX>
        </Press>
      </ScrollView>
    </View>
  );
}
