import { useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { useProgress } from '@/store/useProgress';
import { foldCards, itemsPracticed, masteredItems } from '@/store/progress.logic';
import { lessonEyebrow, missionLabel } from '@/content/missions';
import { releaseLine } from '@/content/trail.logic';
import { audio, sound } from '@/services';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

// The act screen (D-03): the act is a destination now, not a section of the
// lesson screen. Replaces missions.tsx's job — the mission list, the intro
// player and the version-guarded done set are reused verbatim (D-04's
// mission deep-link contract is untouched); new here are the act stepper,
// the release card (D-05/D-45, from trail.logic.ts — do not author a second
// version of it) and the two honest progress numbers (D-05, moved from
// den.tsx:60-72 with its own comment intact: MET drives the bar so it fills
// from the first correct answer instead of reading 0/N for three weeks).
//
// missions.tsx stays live and registered until plan 08 deletes it.

export default function Act() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string; act?: string }>();
  const rawKey = Array.isArray(params.key) ? params.key[0] : params.key;
  const rawAct = Array.isArray(params.act) ? params.act[0] : params.act;
  const L = rawKey ? content.lesson(rawKey) : null;

  // V5: `?act=` is bounds-checked against acts.length before it indexes
  // anything. A deep link can name act 99, a negative number or garbage —
  // clamp to a real index, and fall back to 0 when the lesson carries no
  // acts at all (plan 01 removed the only four lessons that had none, but a
  // corpus arriving over OTA can still land here without them).
  const actsLen = L?.acts?.length ?? 0;
  const actIx = actsLen > 0 ? Math.min(Math.max(0, Number(rawAct ?? 0) || 0), actsLen - 1) : 0;

  // A dead link backs out to wherever opened this screen — router.back()
  // preserves the den/trail entry the way router.replace('/den') never does.
  // replace('/den') is the last resort, only when there is nowhere to go
  // back to (missions.tsx's own dead-link verb, carried forward per D-41).
  useEffect(() => {
    if (!L) {
      if (router.canGoBack()) router.back();
      else router.replace('/den');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L]);

  // Leaving this screen silences the intro speech — BOTH an unmount teardown
  // and a focus teardown, or audio leaks across the trail-to-act-to-mission
  // hop (missions.tsx's own pattern, needed again for the inline "Ecouter
  // l'ouverture" player below).
  useEffect(() => () => audio.stop(), []);
  useFocusEffect(useCallback(() => () => audio.stop(), []));

  const rec = useProgress((s) => (L ? s.lessonMissions[L.id] : undefined));
  const attempts = useProgress((s) => s.attempts);
  const [introPlaying, setIntroPlaying] = useState(false);

  // The bare themed placeholder — the same fallback missions.tsx:44 renders
  // while the effect above resolves the dead link.
  if (!L) return <View style={{ flex: 1, backgroundColor: t.bg }} />;

  // L.acts absent or empty: treat the whole lesson as one unnamed act rather
  // than rendering nothing.
  const acts = L.acts && L.acts.length > 0 ? L.acts : null;
  const act = acts ? acts[actIx] : null;

  // The mission list resolves against L.sections BY ID — the section index
  // used in the deep link below is the index into L.sections, not into
  // act.sections. Get this wrong and every mission after act 1 opens the
  // wrong page.
  const sectionIds = act ? act.sections : L.sections.map((s) => s.id);
  const rows = sectionIds
    .map((id) => L.sections.findIndex((s) => s.id === id))
    .filter((ix) => ix >= 0)
    .map((ix) => ({ ix, section: L.sections[ix] }));

  const ov = L.overview;
  // A record from an older authoring of this lesson shows nothing — the
  // reset happens on the next write (markMission), display just ignores it
  // (D-25's teeth, missions.tsx:50).
  const validRec = rec && rec.v === L.version ? rec : undefined;
  const done = validRec ? new Set(validRec.done) : new Set<number>();
  const xp = validRec ? validRec.xp : 0;

  // The two numbers (D-05), moved from den.tsx:60-72. If the bar were driven
  // by mastery alone it would read 0/N for the first three weeks of daily
  // practice — the exact D1-D14 window where a blank bar makes people quit —
  // so MET drives the bar and the mastered count rides alongside it.
  const met = itemsPracticed(attempts);
  const mastered = masteredItems(foldCards(attempts));
  const lessonItemIds = new Set(L.itemIds);
  let metN = 0;
  let masteredN = 0;
  for (const id of lessonItemIds) {
    if (met.has(id)) metN += 1;
    if (mastered.has(id)) masteredN += 1;
  }

  // D-45: never a fabricated zero-word line — the trail helper already
  // handles the empty-tranche case (about a quarter of the shipped seed's
  // acts); this call does not author a second version of it.
  const tranche = acts ? L.deckTranche?.[actIx] : undefined;
  const release = releaseLine(tranche, T);

  const listenIntro = () => {
    if (!ov?.introFr) return;
    sound.play('tap');
    audio.stop();
    setIntroPlaying(true);
    audio.speakItem(
      { fr: ov.introFr, audioRef: null },
      { onDone: () => setIntroPlaying(false), onError: () => setIntroPlaying(false) }
    );
  };

  const openMission = (ix: number) => {
    const s = L.sections[ix];
    sound.play('tap');
    if (s.type === 'quiz') {
      router.push({ pathname: '/lesson', params: { key: L.id, at: 'quiz' } });
    } else {
      router.push({ pathname: '/lesson', params: { key: L.id, at: `${L.id}#s${ix}.0` } });
    }
  };

  const goPrev = () => {
    if (!acts || actIx <= 0) return;
    router.push({ pathname: '/act', params: { key: L.id, act: String(actIx - 1) } });
  };
  const goNext = () => {
    if (!acts || actIx >= acts.length - 1) return;
    router.push({ pathname: '/act', params: { key: L.id, act: String(actIx + 1) } });
  };
  const goFiche = () => router.push({ pathname: '/fiche', params: { key: L.id } });

  const title = act ? act.title : L.title;
  // D-03's fallback: 0 of 431 acts carry `opener` today, so this `??` branch
  // is the only path that ever runs against the real corpus. Never render a
  // blank description.
  const description = act ? (act.opener?.line ?? act.milestone) : L.intro;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 8, paddingHorizontal: 24, paddingBottom: insets.bottom + 28 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Press onPress={() => router.back()} style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          <TX font="semi" role="meta" ls={2.2} color={t.txSecondary}>{lessonEyebrow(L, content.unit(L.unitId))}</TX>
          <Press onPress={goFiche} style={{ width: 44, height: 44, marginRight: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="book" size={18} color={t.txNonText} />
          </Press>
        </View>

        {/* The act stepper: previous / current / next. Absent at the ends,
            never disabled-looking. */}
        {acts ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            {actIx > 0 ? (
              <Press onPress={goPrev} hitSlop={8} style={{ width: 32, height: 32, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="chevronLeft" size={16} color={t.accTx} strokeWidth={1.7} />
              </Press>
            ) : (
              <View style={{ width: 32, height: 32 }} />
            )}
            <TX font="bold" role="eyebrow" ls={1.4} color={t.txSubtle}>{`${actIx + 1} / ${acts.length}`}</TX>
            {actIx < acts.length - 1 ? (
              <Press onPress={goNext} hitSlop={8} style={{ width: 32, height: 32, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="chevronRight" size={16} color={t.accTx} strokeWidth={1.7} />
              </Press>
            ) : (
              <View style={{ width: 32, height: 32 }} />
            )}
          </View>
        ) : null}

        {/* Title + description (D-03's opener/milestone fallback) */}
        <TX font="serifI" role="display">{title}</TX>
        <TX role="body" color={t.txSecondary} style={{ marginTop: 10 }}>{description}</TX>

        {/* Listen to the opener — only when authored */}
        {ov?.introFr ? (
          <Press
            cue={null}
            onPress={listenIntro}
            style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 9, marginTop: 16, minHeight: 37, paddingHorizontal: 15, borderRadius: 18.5, borderWidth: 1, borderColor: introPlaying ? t.acc : t.accA(45), backgroundColor: introPlaying ? t.accA(12) : 'transparent' }}
          >
            <Icon name="speaker" size={16} color={t.acc} />
            <TX font="semi" role="meta" ls={1} color={t.accTx}>{T.moListen}</TX>
          </Press>
        ) : null}

        {/* The two numbers (D-05): MET drives the bar, MASTERED rides
            alongside it — never blended into one. */}
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <ProgressBar pct={(done.size / Math.max(1, rows.length)) * 100} height={4} color={t.acc} track={t.line(10)} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 }}>
            <TX role="meta" color={t.txSubtle}>{`${done.size} / ${rows.length}`}</TX>
            <TX font="semi" role="meta" color={t.accTx}>{T.moXp.replace('{n}', String(xp))}</TX>
          </View>
          <TX role="eyebrow" color={t.txSubtle} style={{ marginTop: 6 }}>
            {T.denLearnedPct.replace('{p}', String(Math.round((metN / Math.max(1, lessonItemIds.size)) * 100)))}
            {masteredN > 0 ? '  ·  ' + T.denMastered.replace('{k}', String(masteredN)) : ''}
          </TX>
        </View>

        {/* The release card (D-05/D-45): what leaves for spaced review on
            completion. Never a fabricated zero-word line. */}
        <View style={{ borderRadius: 14, backgroundColor: t.accA(9), borderWidth: 1, borderColor: t.accA(25), padding: 14, paddingHorizontal: 16, marginBottom: 18 }}>
          <TX role="bodySm" color={t.txSecondary}>{release}</TX>
        </View>

        {/* Mission rows — the act's real sections, quiz included */}
        <View style={{ gap: 9 }}>
          {rows.map(({ ix, section: s }) => {
            const isDone = done.has(ix);
            return (
              <Press
                key={ix}
                cue="tap"
                scale={0.99}
                onPress={() => openMission(ix)}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 13, borderRadius: 16, borderWidth: 1, borderColor: isDone ? t.accA(55) : t.line(8), backgroundColor: t.card, padding: 13, paddingHorizontal: 15 }}
              >
                <View style={{ width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: isDone ? t.acc : t.accA(40), backgroundColor: isDone ? t.acc : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                  {isDone ? (
                    <Icon name="check" size={15} color={t.accInk} strokeWidth={2.4} />
                  ) : (
                    <TX font="serif" role="label" color={t.accTx}>{String(ix + 1).padStart(2, '0')}</TX>
                  )}
                </View>
                <View style={{ flex: 1, minWidth: 0 }}>
                  <TX font="semi" role="body" numberOfLines={1}>{s.title}</TX>
                  {s.frSub ? (
                    <TX font="serifI" role="eyebrow" color={t.txSubtle} style={{ marginTop: 2 }} numberOfLines={1}>{s.frSub}</TX>
                  ) : null}
                </View>
                <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>{missionLabel(s)}</TX>
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
