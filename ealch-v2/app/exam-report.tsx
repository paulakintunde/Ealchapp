// Le Rapport: what a candidate actually came for.
//
// ── Three rules this screen enforces structurally ───────────────────────────
//
// 1. THE LOWEST SKILL GOVERNS, and it says so on screen. IRCC sets a level
//    skill by skill; the weakest épreuve decides the file. The arithmetic is
//    in nclc.logic.ts, which cannot average even if a caller asked it to.
//
// 2. EVERY NUMBER IS A RANGE, beside its raw count. We cannot equate raw marks
//    the way the boards do, so a point estimate would claim a precision we do
//    not have about a number somebody may act on.
//
// 3. NOTHING IS FABRICATED. A section that was not graded says so and offers a
//    retry. One whose audio never played says that instead, because that
//    failure is ours and reads as a broken app if it is presented as a bad
//    result. Neither is ever rendered as a zero.
//
// The disclaimer and the practice-estimate label are not footnotes here. They
// sit with the numbers, because this is the one screen where somebody might
// mistake an estimate for a result.
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { MascotAvatar } from '@/components/MascotAvatar';
import { MascotVictoryLap } from '@/components/MascotVictoryLap';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { sectionRaw, sectionStatusFor, dueExamSkills, type DueExamSkill } from '@/store/progress.logic';
import { content, useContent } from '@/services/content';
import { formatNclc, paperOutcome, sectionOutcome, type SectionOutcome } from '@/utils/nclc.logic';
import { useState } from 'react';

export default function ExamReportScreen() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang) === 'en' ? 'en' : 'fr';
  const results = useProgress((s) => s.examResults);
  const lessons = useContent((s) => s.corpus.lessons);
  const logSession = useSessionLog();
  const [lapRunning, setLapRunning] = useState(true);

  const { paperId } = useLocalSearchParams<{ paperId?: string }>();
  const paper = useMemo(() => (paperId ? content.examPaper(paperId) : null), [paperId]);

  const outcome = useMemo(() => {
    if (!paper || !paperId) return null;
    const sections: SectionOutcome[] = paper.sections.map((sec) => {
      const status = sectionStatusFor(sec.taskIds, results, paperId);
      // The band profile is only gathered when the section actually weights by
      // band, so nothing changes for a format that does not — and the lookup
      // reads each task's own level, which on a band-shaped épreuve is the band
      // of every question inside it.
      const counts = sectionRaw(
        sec.taskIds,
        results,
        paperId,
        sec.scoring?.weights ? (taskId) => content.examTask(taskId)?.level : undefined
      );
      return sectionOutcome({
        skill: sec.skill,
        status,
        raw: counts?.raw ?? null,
        total: counts?.total ?? 0,
        scoring: sec.scoring,
        byBand: counts?.byBand,
      });
    });
    return paperOutcome(sections);
  }, [paper, paperId, results]);

  // Open-task misses for this paper, so the report can send the candidate to a
  // prep lesson. dueExamSkills returns prepLessonId: null when no lesson exists
  // at that band — a real gap, surfaced rather than silently dropped.
  const due: DueExamSkill[] = useMemo(() => {
    if (!paperId) return [];
    const mine = results.filter((r) => r.paperId === paperId && !r.passed);
    return dueExamSkills(mine, lessons);
  }, [paperId, results, lessons]);

  if (!paper || !paperId || !outcome) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bgDeep, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} title={T.examReport} />
        <View style={{ padding: 24 }}>
          <TX role="label" color={t.txSecondary}>{T.examNone}</TX>
        </View>
      </View>
    );
  }

  const clean = outcome.overallStatus === 'complete';

  return (
    <View style={{ flex: 1, backgroundColor: t.bgDeep }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader
          onClose={() => { logSession('exam'); router.replace({ pathname: '/exam-paper', params: { paperId } }); }}
          title={T.examReport}
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 30 }}>
        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <MascotAvatar
            size={84}
            rounded={false}
            state={clean ? 'celebrate' : 'thinking'}
            tier="medium"
            celebrateKey={clean && !lapRunning ? `exam-${paperId}` : undefined}
          />
        </View>

        {/* ── The headline ── */}
        <View
          style={{
            borderRadius: 18, borderWidth: 1, borderColor: t.line(12), backgroundColor: t.card,
            padding: 20, marginBottom: 8, alignItems: 'center',
          }}
        >
          <TX font="semi" role="eyebrow" ls={2.2} color={t.txMuted} style={{ marginBottom: 8 }}>
            {T.examEstimate}
          </TX>
          {outcome.overall ? (
            <>
              <TX font="serif" size={34} role="display" color={t.accTx}>
                {formatNclc(outcome.overall, lang)}
              </TX>
              {/* Rule 1, said out loud. Without this the range looks like an
                  average, which is the reading that would mislead. */}
              <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginTop: 8, textAlign: 'center' }}>
                {T.examLowestGoverns}
              </TX>
            </>
          ) : (
            <>
              <TX font="semi" role="title" color={t.txSecondary} style={{ textAlign: 'center' }}>
                {outcome.overallStatus === 'none' ? T.examNothingSat : T.examNoOverall}
              </TX>
              {outcome.missing.length > 0 ? (
                <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginTop: 8, textAlign: 'center' }}>
                  {T.examMissingSkills}: {outcome.missing.map((s) => T.examSkillNames[s]).join(', ')}
                </TX>
              ) : null}
            </>
          )}
        </View>

        {/* Rule 2's justification, next to the number rather than in a footer. */}
        <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 20 }}>
          {T.examParallelNotEquated}
        </TX>

        {/* ── Per-épreuve ── */}
        {outcome.sections.map((s) => (
          <SectionRow key={s.skill} s={s} lang={lang} />
        ))}

        {/* ── What to do next ── */}
        {due.length > 0 ? (
          <View style={{ marginTop: 16 }}>
            <TX font="semi" role="label" style={{ marginBottom: 10 }}>{T.examWhatNext}</TX>
            {due.map((d) => (
              <View
                key={`${d.format}-${d.skill}-${d.band}`}
                style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14, marginBottom: 10 }}
              >
                <TX role="meta" color={t.txMuted} style={{ marginBottom: 6 }}>
                  {T.examSkillNames[d.skill]} · {d.band.toUpperCase()}
                </TX>
                {d.prepLessonId ? (
                  <Press onPress={() => router.push({ pathname: '/lesson', params: { id: d.prepLessonId! } })}>
                    <TX font="semi" role="label" color={t.accTx}>{T.examReviewLesson}</TX>
                  </Press>
                ) : (
                  // No lesson exists at that band. A real gap in the corpus,
                  // said plainly rather than rendered as a dead row.
                  <TX role="meta" color={t.txMuted}>{T.examNoPrepLesson}</TX>
                )}
              </View>
            ))}
          </View>
        ) : null}

        {/* Gate H, on the screen most likely to be screenshotted and shared. */}
        <TX role="label" color={t.txMuted} lhMult={1.5} style={{ marginTop: 20 }}>
          {T.examDisclaimer}
        </TX>
      </ScrollView>

      <MascotVictoryLap active={clean && lapRunning} onDone={() => setLapRunning(false)} />
    </View>
  );
}

function SectionRow({ s, lang }: { s: SectionOutcome; lang: 'fr' | 'en' }) {
  const t = useTheme();
  const T = useT();

  // Each non-scored state gets its OWN wording. Collapsing them into one
  // "unavailable" would hide whether the gap is the candidate's or ours.
  const note =
    s.status === 'scored' ? null
    : s.status === 'audio-failed' ? T.examAudioFailed
    : s.status === 'not-graded' ? T.examUngraded
    : s.status === 'practice' ? T.examUnscored
    : s.status === 'no-scoring' ? T.examNoScoring
    : T.examNotSat;

  const noteColour = s.status === 'audio-failed' || s.status === 'not-graded' ? t.danger : t.txMuted;

  return (
    <View
      style={{
        flexDirection: 'row', alignItems: 'center', gap: 12,
        borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card,
        padding: 16, marginBottom: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <TX font="semi" role="label" style={{ marginBottom: 4 }}>{T.examSkillNames[s.skill]}</TX>
        {/* The raw count is ALWAYS shown, scored or not, so an absent estimate
            still shows what the candidate actually did. */}
        <TX role="meta" color={t.txMuted}>
          {s.raw !== null && s.total > 0 ? `${s.raw}/${s.total}` : '—'}
          {s.scaled !== null ? ` · ${s.scaled}` : ''}
        </TX>
      </View>
      {s.nclc ? (
        <TX font="semi" role="label" color={t.accTx}>{formatNclc(s.nclc, lang)}</TX>
      ) : (
        <TX font="semi" role="meta" color={noteColour} style={{ maxWidth: 140, textAlign: 'right' }}>
          {note}
        </TX>
      )}
    </View>
  );
}
