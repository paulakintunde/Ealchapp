import { useMemo, useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { PLACEMENT_PASS, dueExamSkills, type DueExamSkill, type ExamResult, type ExamResultInput } from '@/store/progress.logic';
import { content, useContent } from '@/services/content';
import { examGrader } from '@/services';
import { SCORE_BANDS, type ExamTask } from '@/content/schema';

const OPEN_TASK_TYPES = new Set(['po_monologue', 'po_interaction', 'pe_short', 'pe_essay']);

type Phase = 'answering' | 'grading' | 'revealed';

/** One task's worth of local UI state, reset whenever the current task
 *  changes — never carried across tasks. */
function useTaskState(task: ExamTask | undefined) {
  const isOpen = !!task && OPEN_TASK_TYPES.has(task.taskType);
  const [answers, setAnswers] = useState<Array<number | null>>(() => (task?.items ?? []).map(() => null));
  const [responseText, setResponseText] = useState('');
  const [phase, setPhase] = useState<Phase>('answering');
  const [aiGrade, setAiGrade] = useState<{ band: string; feedback: string } | null>(null);
  const [ungraded, setUngraded] = useState(false);

  const reset = (next: ExamTask | undefined) => {
    setAnswers((next?.items ?? []).map(() => null));
    setResponseText('');
    setPhase('answering');
    setAiGrade(null);
    setUngraded(false);
  };

  return { isOpen, answers, setAnswers, responseText, setResponseText, phase, setPhase, aiGrade, setAiGrade, ungraded, setUngraded, reset };
}

export default function ExamTaskRunner() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const logSession = useSessionLog();
  const logExamResult = useProgress((s) => s.logExamResult);
  const lessons = useContent((s) => s.corpus.lessons);

  const { seriesId } = useLocalSearchParams<{ seriesId?: string }>();
  const tasks = useMemo(() => (seriesId ? content.examTasksOf(seriesId) : []), [seriesId]);

  const [ix, setIx] = useState(0);
  const task = tasks[ix];
  const st = useTaskState(task);
  // Open-task misses this session, so the summary can deep-link a due skill —
  // see dueExamSkills. Closed misses need no local tracking: they already
  // reached the SRS via decomposeExamMiss inside logExamResult.
  const [openMisses, setOpenMisses] = useState<ExamResult[]>([]);

  const goToTask = (nextIx: number) => {
    setIx(nextIx);
    st.reset(tasks[nextIx]);
  };

  const finish = () => {
    logSession('exam');
    router.replace('/feedback');
  };

  if (!seriesId || tasks.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bgDeep, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} title={T.examiner} />
        <View style={{ padding: 24 }}>
          <TX role="label" color={t.txSecondary}>{T.examNone}</TX>
        </View>
      </View>
    );
  }

  // ── Series complete: the summary ──
  if (ix >= tasks.length) {
    const due: DueExamSkill[] = dueExamSkills(openMisses, lessons);
    return (
      <View style={{ flex: 1, backgroundColor: t.bgDeep }}>
        <View style={{ paddingTop: insets.top }}>
          <FocusHeader onClose={finish} title={T.examSeriesDone} />
        </View>
        <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 30 }}>
          <TX font="serif" size={22} role="display" style={{ marginBottom: 16 }}>
            {T.examSeriesDone}
          </TX>
          {due.length > 0 && (
            <View style={{ marginBottom: 20 }}>
              {due.map((d) => (
                <View
                  key={`${d.format}-${d.skill}-${d.band}`}
                  style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14, marginBottom: 10 }}
                >
                  <TX role="label" color={t.txMuted} style={{ marginBottom: 6 }}>
                    {d.skill} · {d.band.toUpperCase()}
                  </TX>
                  {d.prepLessonId ? (
                    <Press onPress={() => router.push({ pathname: '/lesson', params: { id: d.prepLessonId! } })}>
                      <TX font="semi" role="label" color={t.accTx}>{T.examReviewLesson}</TX>
                    </Press>
                  ) : null}
                </View>
              ))}
            </View>
          )}
          <Press
            onPress={finish}
            style={{ alignSelf: 'center', minHeight: 44, paddingVertical: 10, paddingHorizontal: 22, borderRadius: 22, borderWidth: 1, borderColor: t.line(16) }}
          >
            <TX font="semi" role="label" color={t.txSecondary}>{T.end} · Le Rapport →</TX>
          </Press>
        </ScrollView>
      </View>
    );
  }

  const buildResult = (passed: boolean, aiGrade?: { band: string; feedback: string }): ExamResultInput => ({
    taskId: task.id,
    seriesId,
    format: task.format,
    taskType: task.taskType,
    skill: task.skill,
    band: task.level,
    passed,
    ...(aiGrade ? { aiGrade: aiGrade as ExamResultInput['aiGrade'] } : {}),
  });

  const submitClosed = () => {
    const items = task.items ?? [];
    const correctCount = items.filter((qi, i) => st.answers[i] === qi.correct).length;
    const passed = items.length > 0 && correctCount / items.length >= PLACEMENT_PASS;
    logExamResult(buildResult(passed), task);
    st.setPhase('revealed');
  };

  const submitOpen = async () => {
    st.setPhase('grading');
    const res = await examGrader.grade({
      stimulus: task.prompt,
      candidateResponse: st.responseText,
      rubric: task.rubric!,
      modelAnswer: task.modelAnswer!,
      targetBand: task.level,
      lang: lang === 'en' ? 'en' : 'fr',
    });
    if (res.live) {
      const passed = SCORE_BANDS.indexOf(res.band) >= SCORE_BANDS.indexOf(task.level);
      const result = buildResult(passed, { band: res.band, feedback: res.feedback });
      logExamResult(result, task);
      st.setAiGrade({ band: res.band, feedback: res.feedback });
      st.setUngraded(false);
      if (!passed) setOpenMisses((m) => [...m, { ...result, id: `local-${task.id}`, date: '' }]);
    } else {
      // Grading failed: log conservatively (passed: false, no aiGrade) so the
      // attempt is never silently dropped — see the module note. No band is
      // fabricated; the candidate can retry grading below.
      const result = buildResult(false);
      logExamResult(result, task);
      st.setUngraded(true);
      setOpenMisses((m) => [...m, { ...result, id: `local-${task.id}`, date: '' }]);
    }
    st.setPhase('revealed');
  };

  const submit = st.isOpen ? submitOpen : submitClosed;
  const canSubmit = st.isOpen ? st.responseText.trim().length > 0 : st.answers.every((a) => a !== null) && (task.items?.length ?? 0) > 0;

  return (
    <View style={{ flex: 1, backgroundColor: t.bgDeep }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} title={`${task.skill} · ${ix + 1}/${tasks.length}`} />
      </View>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 30 }}>
        <TX role="label" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 18 }}>
          {T.examDisclaimer}
        </TX>

        <TX font="serifI" role="title" lhMult={1.4} style={{ marginBottom: 20 }}>
          « {task.prompt} »
        </TX>

        {!st.isOpen && (
          <View>
            {(task.items ?? []).map((qi, qIx) => (
              <View key={qIx} style={{ marginBottom: 18 }}>
                <TX font="semi" role="label" style={{ marginBottom: 8 }}>{qi.q}</TX>
                {qi.opts.map((opt, oIx) => {
                  const selected = st.answers[qIx] === oIx;
                  const showResult = st.phase === 'revealed';
                  const isCorrect = oIx === qi.correct;
                  const bg = showResult
                    ? isCorrect ? t.accA(16) : selected ? t.blend(t.danger, t.bg, 85) : 'transparent'
                    : selected ? t.accA(12) : 'transparent';
                  return (
                    <Press
                      key={oIx}
                      disabled={st.phase !== 'answering'}
                      onPress={() => st.setAnswers((prev) => prev.map((v, i) => (i === qIx ? oIx : v)))}
                      style={{
                        flexDirection: 'row', alignItems: 'center', gap: 8, borderRadius: 12, borderWidth: 1,
                        borderColor: selected ? t.acc : t.line(10), backgroundColor: bg, padding: 12, marginBottom: 8,
                      }}
                    >
                      {showResult && isCorrect ? <Icon name="check" size={16} color={t.accTx} /> : null}
                      <TX role="label" color={t.txPrimary}>{opt}</TX>
                    </Press>
                  );
                })}
              </View>
            ))}
          </View>
        )}

        {st.isOpen && (
          <View>
            <TX role="label" color={t.txMuted} style={{ marginBottom: 8 }}>{T.dcYours}</TX>
            <TextInput
              value={st.responseText}
              onChangeText={st.setResponseText}
              editable={st.phase === 'answering'}
              multiline
              style={{
                minHeight: 140, borderRadius: 14, borderWidth: 1, borderColor: t.line(12),
                backgroundColor: t.card, padding: 14, color: t.tx, textAlignVertical: 'top',
              }}
            />

            {st.phase === 'grading' && (
              <TX role="label" color={t.txMuted} style={{ marginTop: 14 }}>{T.examGrading}</TX>
            )}

            {st.phase === 'revealed' && (
              <View style={{ marginTop: 18, borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 16 }}>
                {st.aiGrade ? (
                  <>
                    <TX font="semi" role="meta" color={t.accTx} style={{ marginBottom: 4 }}>
                      {st.aiGrade.band.toUpperCase()} · {T.examPracticeEstimate}
                    </TX>
                    <TX role="label" color={t.txSecondary} lhMult={1.5}>{st.aiGrade.feedback}</TX>
                  </>
                ) : (
                  <View>
                    <TX role="label" color={t.danger} style={{ marginBottom: 10 }}>{T.examUngraded}</TX>
                    <Press onPress={submitOpen}>
                      <TX font="semi" role="label" color={t.accTx}>{T.examSubmit}</TX>
                    </Press>
                  </View>
                )}
                <TX role="label" color={t.txMuted} style={{ marginTop: 12 }}>{T.examModelAnswer}</TX>
                <TX role="label" color={t.txSecondary} lhMult={1.5} style={{ marginTop: 4 }}>{task.modelAnswer}</TX>
              </View>
            )}
          </View>
        )}
      </ScrollView>

      <View style={{ paddingHorizontal: 20, paddingBottom: insets.bottom + 20 }}>
        {st.phase === 'revealed' ? (
          <Press
            onPress={() => goToTask(ix + 1)}
            style={{ alignItems: 'center', minHeight: 50, justifyContent: 'center', borderRadius: 16, backgroundColor: t.acc }}
          >
            <TX font="semi" role="label" color={t.accInk}>{T.cont}</TX>
          </Press>
        ) : (
          <Press
            onPress={submit}
            disabled={!canSubmit || st.phase === 'grading'}
            style={{
              alignItems: 'center', minHeight: 50, justifyContent: 'center', borderRadius: 16,
              backgroundColor: canSubmit ? t.acc : t.line(10), opacity: st.phase === 'grading' ? 0.6 : 1,
            }}
          >
            <TX font="semi" role="label" color={canSubmit ? t.accInk : t.txSecondary}>{T.examSubmit}</TX>
          </Press>
        )}
      </View>
    </View>
  );
}
