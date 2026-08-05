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
import { lessonEyebrow, missionLabel, missionStats } from '@/content/missions';
import { audio, sound } from '@/services';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

// The missions hub (spec 2026-07-30): one row per REAL section of the lesson,
// free navigation (every row tappable, always — Paul's call), checks from the
// progress store, lesson-local XP. Rows and stats are derived; only frSub and
// the intro speech are authored. Tapping a row deep-links the pager via the
// existing anchor param; the quiz row rides `at=quiz` (no section anchor).

export default function Missions() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string }>();
  const key = Array.isArray(params.key) ? params.key[0] : params.key;
  const L = key ? content.lesson(key) : null;

  useEffect(() => {
    if (!L) router.replace('/den');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L]);

  // Leaving this screen silences the intro speech, the lesson.tsx pattern.
  useEffect(() => () => audio.stop(), []);
  useFocusEffect(useCallback(() => () => audio.stop(), []));

  const rec = useProgress((s) => (L ? s.lessonMissions[L.id] : undefined));
  const [introPlaying, setIntroPlaying] = useState(false);

  if (!L) return <View style={{ flex: 1, backgroundColor: t.bg }} />;

  const ov = L.overview;
  const stats = missionStats(L.sections);
  // A record from an older authoring of this lesson shows nothing — the reset
  // happens on the next write (markMission), display just ignores it.
  const done = rec && rec.v === L.version ? new Set(rec.done) : new Set<number>();
  const xp = rec && rec.v === L.version ? rec.xp : 0;

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

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 8, paddingHorizontal: 24, paddingBottom: insets.bottom + 28 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Press onPress={() => router.back()} style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          {/* The eyebrow already opens with the band (SONS, A1), so appending
              cefrLabel here said it twice: 'A1 · LEÇON 01 · A1'. The overview
              page is the one that carries the CEFR chip; this header just
              places the lesson. */}
          <TX font="semi" role="meta" ls={2.2} color={t.txSecondary}>{lessonEyebrow(L, content.unit(L.unitId))}</TX>
          <View style={{ width: 44 }} />
        </View>

        {/* Title (French) + sub copy */}
        <TX font="serifI" role="display">{ov?.subFr ?? L.title}</TX>
        <TX role="label" color={t.txMuted} style={{ marginTop: 10 }}>
          {(stats.badge > 0 ? T.moSub : T.moSubNoBadge).replace('{n}', String(stats.missions))}
        </TX>

        {/* Listen to the intro — only when authored */}
        {ov?.introFr ? (
          <Press
            cue={null}
            onPress={listenIntro}
            style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 9, marginTop: 16, height: 37, paddingHorizontal: 15, borderRadius: 18.5, borderWidth: 1, borderColor: introPlaying ? t.acc : t.accA(45), backgroundColor: introPlaying ? t.accA(12) : 'transparent' }}
          >
            <Icon name="speaker" size={16} color={t.acc} />
            <TX font="semi" role="meta" ls={1} color={t.accTx}>{T.moListen}</TX>
          </Press>
        ) : null}

        {/* Progress + XP */}
        <View style={{ marginTop: 20, marginBottom: 18 }}>
          <ProgressBar pct={(done.size / Math.max(1, stats.missions)) * 100} height={4} color={t.acc} track={t.line(10)} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 }}>
            <TX role="meta" color={t.txSubtle}>{`${done.size} / ${stats.missions}`}</TX>
            <TX font="semi" role="meta" color={t.accTx}>{T.moXp.replace('{n}', String(xp))}</TX>
          </View>
        </View>

        {/* Mission rows — the FULL sections array, quiz included */}
        <View style={{ gap: 9 }}>
          {L.sections.map((s, ix) => {
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
