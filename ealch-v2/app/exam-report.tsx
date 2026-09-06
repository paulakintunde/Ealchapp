// Le Rapport: what a candidate actually came for.
//
// ── Three rules this screen enforces structurally ───────────────────────────
//
// 1. THE LOWEST SKILL GOVERNS, and it says so on screen. IRCC sets a level
//    skill by skill; the weakest épreuve decides the file. The arithmetic is
//    in nclc.logic.ts, which cannot average even if a caller asked it to.
//
//    This rule belongs to the CANADIAN formats, and saying so matters: DELF B2
//    is a diploma, not a profile. Its épreuves are marked out of 25 and SUMMED,
//    it passes at 50/100, and a floor of 5/25 applies to each one — so a
//    candidate can clear the total and still fail. Which instrument a paper
//    reports on comes from instrumentFor(), an exhaustive switch, so a new
//    format cannot inherit a rule written for its neighbours the way a débat
//    once inherited a plain recorder.
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
import { sectionBands, sectionRaw, sectionStatusFor, dueExamSkills, type DueExamSkill } from '@/store/progress.logic';
import { content, useContent } from '@/services/content';
import { formatNclc, paperOutcome, sectionOutcome, type NoBandReason, type SectionOutcome } from '@/utils/nclc.logic';
import {
  DELF_EPREUVE_MAX, DELF_TOTAL_MAX, delfEpreuve, delfOutcome, formatMark, type DelfEpreuve,
} from '@/utils/delf.logic';
import { instrumentFor } from '@/utils/examInstrument.logic';
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

  // DELF reads the same logged results through a different instrument. Built
  // beside the NCLC fold rather than inside it: a mark out of 25 and a level
  // range are not the same kind of number, and one function returning either
  // would be a flag deciding which — the shape this screen already got wrong.
  const delf = useMemo(() => {
    if (!paper || !paperId || instrumentFor(paper.format) !== 'delf') return null;
    return delfOutcome(
      paper.sections.map((sec) => {
        const status = sectionStatusFor(sec.taskIds, results, paperId);
        // Comprehension carries authored per-question points that already total
        // 25; production carries graded bands. Each épreuve reads whichever it
        // actually has, and an épreuve with neither gets no mark.
        const counts = sectionRaw(sec.taskIds, results, paperId);
        const bands = sectionBands(sec.taskIds, results, paperId);
        return delfEpreuve({
          skill: sec.skill,
          status,
          points: bands ? undefined : counts?.raw ?? null,
          bands,
        });
      })
    );
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

  const clean = delf ? delf.verdict === 'pass' : outcome.overallStatus === 'complete';

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
        {delf ? (
          <DelfHeadline out={delf} lang={lang} />
        ) : (

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

        )}

        {/* Rule 2's justification, next to the number rather than in a footer.
            NCLC only: it explains why an estimate is a RANGE, and a DELF mark
            is not one. The DELF card carries the floor rule instead. */}
        {delf ? null : (
          <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 20 }}>
            {T.examParallelNotEquated}
          </TX>
        )}

        {/* ── Per-épreuve ── */}
        {delf
          ? delf.epreuves.map((e) => <DelfRow key={e.skill} e={e} lang={lang} />)
          : outcome.sections.map((s) => <SectionRow key={s.skill} s={s} lang={lang} />)}

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

  // Each reason gets its OWN wording, and the wording is chosen from the
  // REASON rather than the status. Those used to be read independently: the
  // status said 'scored', the band was null anyway, and the chain fell through
  // to a note of null, which React renders as nothing at all. A candidate below
  // 16 of 40 on TEF listening saw an empty cell where the explanation belonged.
  //
  // noBandNote is exhaustive over NoBandReason, so a new reason is a compile
  // error here rather than another blank.
  const note = s.noBand ? noBandNote(s.noBand, T) : null;
  const noteColour = s.noBand === 'audio-failed' || s.noBand === 'not-graded' ? t.danger : t.txMuted;

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

/**
 * The DELF headline: a total, a verdict, and the floor.
 *
 * The floor rule is printed WITH the number rather than under it, because
 * BLUEPRINT-delf-b2 §8 names the exact confusion it prevents: a candidate who
 * scores 60/100 with 4/25 on one épreuve has failed, and a display that shows
 * only the total tells them they passed when they did not. So a fail states its
 * reasons, and when the floor is one of them the épreuve is named.
 */
function DelfHeadline({ out, lang }: { out: ReturnType<typeof delfOutcome>; lang: 'fr' | 'en' }) {
  const t = useTheme();
  const T = useT();
  const passed = out.verdict === 'pass';
  const tone = out.verdict === 'incomplete' ? t.txSecondary : passed ? t.accTx : t.danger;

  return (
    <View
      style={{
        borderRadius: 18, borderWidth: 1, borderColor: t.line(12), backgroundColor: t.card,
        padding: 20, marginBottom: 8, alignItems: 'center',
      }}
    >
      <TX font="semi" role="eyebrow" ls={2.2} color={t.txMuted} style={{ marginBottom: 8 }}>
        {T.delfResult}
      </TX>

      {out.total !== null ? (
        <>
          <TX font="serif" size={34} role="display" color={tone}>
            {formatMark(out.total, DELF_TOTAL_MAX, lang)}
          </TX>
          <TX font="semi" role="title" color={tone} style={{ marginTop: 4 }}>
            {passed ? T.delfResultPass : T.delfResultFail}
          </TX>
          {/* Why, when it is a fail. Both reasons can be true at once. */}
          {out.failedOn.map((why) => (
            <TX
              key={why}
              role="meta"
              color={t.danger}
              lhMult={1.5}
              style={{ marginTop: 6, textAlign: 'center' }}
            >
              {why === 'total' ? T.delfFailedTotal : T.delfFailedFloor}
              {why === 'floor' && out.floored.length > 0
                ? ` (${out.floored.map((sk) => T.examSkillNames[sk]).join(', ')})`
                : ''}
            </TX>
          ))}
        </>
      ) : (
        <>
          <TX font="semi" role="title" color={t.txSecondary} style={{ textAlign: 'center' }}>
            {out.missing.length === out.epreuves.length ? T.examNothingSat : T.examNoOverall}
          </TX>
          {out.missing.length > 0 ? (
            <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginTop: 8, textAlign: 'center' }}>
              {T.examMissingSkills}: {out.missing.map((sk) => T.examSkillNames[sk]).join(', ')}
            </TX>
          ) : null}
        </>
      )}

      {/* The rule itself, always, pass or fail. A candidate reading a 62 needs
          to know the floor exists even on a paper where it did not bite. */}
      <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginTop: 10, textAlign: 'center' }}>
        {T.delfFloor}
      </TX>
    </View>
  );
}

/** One DELF épreuve: its mark out of 25, and whether it fell under the floor. */
function DelfRow({ e, lang }: { e: DelfEpreuve; lang: 'fr' | 'en' }) {
  const t = useTheme();
  const T = useT();

  // Same discipline as SectionRow, through the same exhaustive helper. DELF
  // has no scale to fall below, so a scored épreuve always has a mark and
  // 'no-scoring' stands for the one remaining way a mark can be absent.
  const note = e.mark === null ? noBandNote(e.status === 'scored' ? 'no-scoring' : e.status, T) : null;

  return (
    <View
      style={{
        flexDirection: 'row', alignItems: 'center', gap: 12,
        borderRadius: 14, borderWidth: 1,
        borderColor: e.belowFloor ? t.danger : t.line(9),
        backgroundColor: t.card, padding: 16, marginBottom: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <TX font="semi" role="label" style={{ marginBottom: 4 }}>{T.examSkillNames[e.skill]}</TX>
        {e.belowFloor ? (
          <TX role="meta" color={t.danger}>{T.delfBelowFloor}</TX>
        ) : null}
      </View>
      {e.mark !== null ? (
        <TX font="semi" role="label" color={e.belowFloor ? t.danger : t.accTx}>
          {formatMark(e.mark, DELF_EPREUVE_MAX, lang)}
        </TX>
      ) : (
        <TX
          font="semi"
          role="meta"
          color={e.status === 'audio-failed' || e.status === 'not-graded' ? t.danger : t.txMuted}
          style={{ maxWidth: 140, textAlign: 'right' }}
        >
          {note}
        </TX>
      )}
    </View>
  );
}

/**
 * The wording for a section with no band, one branch per reason.
 *
 * Exhaustive on purpose. This was a ternary chain keyed on the section's
 * STATUS, and it had no branch for the case where a cleanly scored section
 * produced no band anyway — so it returned null and the row rendered blank.
 * Written as a switch with a `never` assignment, a new reason cannot be added
 * without the build stopping here first.
 */
function noBandNote(reason: NoBandReason, T: ReturnType<typeof useT>): string {
  switch (reason) {
    case 'audio-failed': return T.examAudioFailed;
    case 'not-graded': return T.examUngraded;
    case 'practice': return T.examUnscored;
    case 'not-sat': return T.examNotSat;
    case 'no-scoring': return T.examNoScoring;
    case 'below-scale': return T.examBelowScale;
    default: {
      const unreachable: never = reason;
      throw new Error(`no wording for a section with no band: "${String(unreachable)}"`);
    }
  }
}
