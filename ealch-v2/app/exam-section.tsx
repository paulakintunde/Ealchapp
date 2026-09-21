// One épreuve, under one clock.
//
// Renders all four épreuves: compréhension orale (E3), compréhension écrite
// and expression écrite (E2), production orale (E4).
//
// PO records the candidate rather than asking them to type. There is no text
// fallback: an unreachable microphone is reported as unscored, because scoring
// silence as a bad answer blames the candidate for our hardware.
//
// ── Two rules that are structural, not cosmetic ─────────────────────────────
//
// 1. NOTHING IS REVEALED DURING A SECTION. The old runner marked each task on
//    submit and showed the right answer immediately. That is study behaviour:
//    it turns question 3 into a hint for question 4, and it makes the score
//    meaningless. Reveal moves to the report (E5). There is no code path here
//    that can show a key.
//
// 2. THE CLOCK STOPS THE SECTION. When it expires the section submits whatever
//    exists, including nothing. An unanswered question is wrong, not skipped
//    (see scoreClosedTask), which is how both exam bodies score and the only
//    honest way to treat a candidate who ran out of time.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AppState, ScrollView, TextInput, View } from 'react-native';
import { ExamAudioQueue } from '@/components/ExamAudioQueue';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { ExamClock } from '@/components/ExamClock';
import { ExamAudioPart } from '@/components/ExamAudioPart';
import { ExamSpeakTask, type SpokenAnswer } from '@/components/ExamSpeakTask';
import { ExamInterlocutorTask } from '@/components/ExamInterlocutorTask';
import { ExamDebateTask } from '@/components/ExamDebateTask';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { PLACEMENT_PASS, type ExamResultInput } from '@/store/progress.logic';
import { content, useContent } from '@/services/content';
import { taskQuestions, scoreClosedTask, type ExamQuestion } from '@/services/content.logic';
import { examGrader, startExamAttempt } from '@/services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DRAFT_DEBOUNCE_MS, draftKey, buildDraft, serializeDraft, parseDraft, restoreState,
  isGraded, markGraded, hasContent, type ExamDraft,
} from '@/services/examDraft.logic';
import { startClock, type ClockState } from '@/utils/examClock.logic';
import { deliveryNote } from '@/utils/deliverySignals.logic';
import { coverageNote, type Coverage } from '@/utils/interlocutor.logic';
import { surfaceFor } from '@/utils/examDispatch.logic';
import type { DebateReport } from '@/utils/debate.logic';
import {
  EXAM_MODES, OPEN_TASK_TYPES, SCORE_BANDS,
  type ExamMode, type ExamPart, type ExamSkill, type ExamTask,
} from '@/content/schema';

const isOpen = (t: ExamTask) => (OPEN_TASK_TYPES as readonly string[]).includes(t.taskType);

/** Every épreuve renders honestly now. Kept as an explicit list rather than
 *  deleted: it is the one place a future format's unsupported skill can be
 *  refused instead of silently faked. */
const RENDERABLE: ExamSkill[] = ['CO', 'CE', 'PE', 'PO'];

type Answers = Record<string, Record<string, number | null>>; // taskId -> qKey -> option
type Texts = Record<string, string>; // taskId -> response
type Phase = 'answering' | 'submitting' | 'done';

export default function ExamSectionScreen() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang) === 'en' ? 'en' : 'fr';
  const logSession = useSessionLog();
  const logExamResult = useProgress((s) => s.logExamResult);

  const params = useLocalSearchParams<{ paperId?: string; skill?: string; mode?: string }>();
  const paperId = params.paperId;
  const skill = params.skill as ExamSkill | undefined;
  const mode: ExamMode = (EXAM_MODES as readonly string[]).includes(params.mode ?? '')
    ? (params.mode as ExamMode)
    : 'exam';

  // The corpus is a REAL dependency here — see the note in app/exam.tsx. These
  // memos read it imperatively through content.*, which calls getState(), so
  // before this they never re-ran when the OTA snapshot landed. Exam content
  // ships only in that snapshot, so any exam screen mounted during launch
  // memoised an empty result and kept it.
  const corpus = useContent((s) => s.corpus);
  const paper = useMemo(() => (paperId ? content.examPaper(paperId) : null), [paperId, corpus]);
  const section = useMemo(
    () => paper?.sections.find((s) => s.skill === skill) ?? null,
    [paper, skill]
  );
  const tasks = useMemo(() => (section ? content.examTasksOfSection(section) : []), [section, corpus]);

  const [answers, setAnswers] = useState<Answers>({});
  // Parts whose audio produced no sound at all. Their questions cannot be
  // scored as listening, so the section says so rather than quietly counting
  // them wrong — the candidate did not fail to understand, we failed to speak.
  const [unplayable, setUnplayable] = useState<Set<string>>(() => new Set());
  const [texts, setTexts] = useState<Texts>({});
  const [spoken, setSpoken] = useState<Record<string, SpokenAnswer>>({});
  const [phase, setPhase] = useState<Phase>('answering');
  const [confirming, setConfirming] = useState(false);

  // Started once, on mount, from the wall clock. Not restarted on re-render:
  // that would hand the candidate the whole épreuve again every repaint.
  const [clock, setClock] = useState<ClockState | null>(null);
  useEffect(() => {
    if (section && clock === null) setClock(startClock(section.timingS, Date.now()));
  }, [section, clock]);

  // The authorization is normally created on the paper screen, before this
  // screen exists. This re-issue covers the case where that call could not be
  // answered (a blip, a dead tunnel) but this screen mounts with connectivity:
  // the endpoint is an idempotent upsert keyed on (uid, paperId, skill), so a
  // second call costs one round trip and cannot double-grant.
  //
  // Resetting the window on mount is correct, not a leak: this screen restarts
  // its own wall-clock on mount too (startClock above), so the authorization
  // window and the épreuve's clock begin together, which is exactly what
  // expires_at means.
  //
  // Fire-and-forget: a refusal here cannot be acted on (the candidate is
  // already in the runner, having been let in by the paper screen), and the
  // server's grade-time check is the real boundary.
  useEffect(() => {
    if (!paperId || !skill) return;
    void startExamAttempt({ paperId, skill, mode });
  }, [paperId, skill, mode]);

  // Submission must happen exactly once, whichever way it is triggered — the
  // candidate tapping finish, or the clock expiring underneath them. Without
  // this both can fire and every task is logged twice.
  /** Interaction tasks only. Kept apart from `spoken` because it is not a
   *  speech signal: it is what the candidate obtained. */
  const [coverage, setCoverage] = useState<Record<string, Coverage>>({});
  /** Debate tasks only. Replaces coverage for those: what the candidate HELD,
   *  not what they extracted. A candidate who met every objection by agreeing
   *  covered them all and argued badly, which is why the two cannot share a
   *  measure. */
  const [debate, setDebate] = useState<Record<string, DebateReport>>({});
  const submitted = useRef(false);

  // ── BUG-02: the section's answers survive process death ─────────────────────
  //
  // D-02 asks for a checkpoint "on step/question-transition". This screen has no
  // steps: every task of the section renders at once inside one ScrollView, so
  // there is no next-task handler to hang a write on. The faithful equivalent is
  // below — DISCRETE answer commits (MCQ select, a finished recording, coverage,
  // a debate report) write immediately because they fire a handful of times per
  // task, and only free typing is debounced, because it is the one writer D-01
  // forbids running per keystroke.
  //
  // The store is a dedicated AsyncStorage key, not useProgress's persisted
  // zustand store (D-07): the draft's whole lifetime is one sitting, and that
  // store's partialize re-serialises several other keys on every set.
  const key = paperId && skill ? draftKey(paperId, skill) : null;
  /** Live mirror of the five answer stores plus this sitting's graded list, so a
   *  flush from an unmount cleanup or an AppState handler is never reading a
   *  stale closure. */
  const draftRef = useRef({
    answers: {} as Answers,
    texts: {} as Texts,
    spoken: {} as Record<string, SpokenAnswer>,
    coverage: {} as Record<string, Coverage>,
    debate: {} as Record<string, DebateReport>,
    graded: [] as string[],
  });
  /** Nothing is written until the mount-time read has finished. Without this the
   *  first render's empty state overwrites the very draft we are about to read. */
  const restored = useRef(false);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const writeDraft = useCallback(async () => {
    if (!key || !paperId || !skill || !restored.current) return;
    const d = buildDraft({ paperId, skill, ...draftRef.current });
    if (!hasContent(d)) return;
    try {
      await AsyncStorage.setItem(key, serializeDraft(d));
    } catch {
      // A draft that cannot be written must never block the épreuve — same
      // contract as config.ts's cache write.
    }
  }, [key, paperId, skill]);

  useEffect(() => {
    draftRef.current = { ...draftRef.current, answers, texts, spoken, coverage, debate };
  }, [answers, texts, spoken, coverage, debate]);

  // Restore on mount, silent (D-10 — no banner, no toast, no prompt; this
  // matches how resumeByMode already restores position silently in lesson.tsx).
  useEffect(() => {
    let alive = true;
    (async () => {
      if (!key || !paperId || !skill) return;
      let raw: string | null = null;
      try {
        raw = await AsyncStorage.getItem(key);
      } catch {
        // No draft is a normal state, not an error.
      }
      const d = parseDraft(raw, paperId, skill);
      if (d && alive) {
        const s = restoreState(d);
        draftRef.current = { ...s, graded: d.graded };
        setAnswers(s.answers);
        setTexts(s.texts);
        setSpoken(s.spoken);
        setCoverage(s.coverage);
        setDebate(s.debate);
      }
      restored.current = true;
    })();
    return () => { alive = false; };
    // Do NOT call submit() from here. D-03 is explicit: the candidate finishes
    // the section and submits themselves; a silent background re-submit to
    // grade-exam is forbidden.
  }, [key, paperId, skill]);

  // An answer that was committed, not typed. Immediate.
  useEffect(() => { // CHECKPOINT_DISCRETE — see the note above submit()'s draft, too.
    void writeDraft();
  }, [answers, spoken, coverage, debate, writeDraft]);

  // Free typing: D-01 forbids a write per keystroke, D-02 asks for ~1.5s of
  // quiet. DRAFT_DEBOUNCE_MS is the single source of that number.
  useEffect(() => {
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => { void writeDraft(); }, DRAFT_DEBOUNCE_MS);
    return () => { if (typingTimer.current) clearTimeout(typingTimer.current); };
  }, [texts, writeDraft]);

  // The last chance before the OS can take the process. Reads draftRef, not
  // the closure, so a pending debounce is never lost.
  useEffect(() => { // FLUSH_ON_UNMOUNT: flush on backgrounding and on unmount.
    const sub = AppState.addEventListener('change', (state) => {
      if (state !== 'active') void writeDraft();
    });
    return () => {
      sub.remove();
      void writeDraft();
    };
  }, [writeDraft]);

  // The side the candidate argued in phase 1, for the debate to open against.
  // By TASK TYPE, not by array position: a section that ever carries two
  // speaking tasks in another order must not hand the debate the wrong one.
  const monologueTranscript = useMemo(() => {
    const mono = tasks.find((x) => x.taskType === 'po_monologue');
    return mono ? spoken[mono.id]?.transcript : undefined;
  }, [tasks, spoken]);

  const submit = useCallback(async () => {
    if (submitted.current || !paperId || !section) return;
    submitted.current = true;
    setPhase('submitting');

    // BUG-02's literal requirement: an open task waits 7-9 seconds on the
    // model, one at a time, so this loop is the longest window in the app in
    // which the OS can take the process.
    await writeDraft(); // FLUSH_BEFORE_GRADING: the response is on disk before the first grade request.
    let draft: ExamDraft | null = null;
    if (key && paperId && skill) {
      try {
        draft = parseDraft(await AsyncStorage.getItem(key), paperId, skill);
      } catch {
        // No draft just means nothing to skip.
      }
      // A section submitted without interruption has no draft on disk yet —
      // seed one in memory so recordGraded below still has something to mark.
      if (!draft) {
        draft = buildDraft({ paperId, skill, ...draftRef.current });
      }
    }

    const recordGraded = async (taskId: string) => {
      if (!key || !draft) return;
      draft = markGraded(draft, taskId);
      draftRef.current = { ...draftRef.current, graded: draft.graded };
      try {
        await AsyncStorage.setItem(key, serializeDraft(draft));
      } catch {
        // Worst case this task is graded twice on a retry — no worse than today.
      }
    };

    for (const task of tasks) {
      // D-04: a crash can land mid-loop with some tasks already graded and
      // logged. Re-grading one of those double-spends the coach_bump daily
      // grading quota AND puts a duplicate result in the report —
      // grade-exam's attemptAuthorized() checks only expires_at and has no
      // content idempotency of its own, so this client-side skip is the only
      // thing preventing it.
      //
      // Scoped to THIS SITTING via the draft's own list, deliberately NOT to
      // useProgress's logged-results history: that store is cross-sitting
      // history, so a candidate legitimately re-sitting a paper they sat last
      // week would match every task and have the whole section skipped.
      if (isGraded(draft, task.id)) continue;

      const base: ExamResultInput = {
        taskId: task.id,
        paperId,
        format: task.format,
        taskType: task.taskType,
        skill: task.skill,
        band: task.level,
        passed: false,
        mode,
      };

      if (!isOpen(task)) {
        // A listening task with a document that made no sound cannot be scored
        // as listening. The result is still LOGGED — dropping it would lose the
        // attempt entirely — but flagged, so the report says "audio
        // unavailable" rather than reporting our failure as the candidate's.
        const audioFailed = [...unplayable].some((k) => k.startsWith(`${task.id}:`));
        const { correct, total, points, pointsTotal } = scoreClosedTask(task, answers[task.id] ?? {});
        // Pass/fail reads the WEIGHTED proportion, which is the candidate's
        // actual share of the marks. On a format with equal weights the two are
        // the same number; on one without, counting questions would pass a
        // candidate who got the cheap questions and miss one who got the dear
        // ones.
        const passed = !audioFailed && pointsTotal > 0 && points / pointsTotal >= PLACEMENT_PASS;
        // The question counts ride along: the report's scoring map is indexed
        // by questions, and `passed` alone cannot produce "31/40". The points
        // pair rides along too, but only when it says something the counts do
        // not — otherwise every TEF and TCF result would carry two identical
        // copies of the same number for the rest of time.
        const weighted = pointsTotal !== total || points !== correct;
        logExamResult(
          {
            ...base,
            passed,
            correct,
            askedTotal: total,
            ...(weighted ? { points, pointsTotal } : {}),
            ...(audioFailed ? { audioFailed: true } : {}),
          },
          task
        );
        await recordGraded(task.id);
        continue;
      }

      // Open task. The grader is rubric-grounded and never fabricates a band;
      // when it cannot reach one, the attempt is logged conservatively rather
      // than dropped, and the report shows "non corrigé" with a retry. A
      // client-side fallback grade is exactly what the retired "examiner v1"
      // lesson forbids.
      //
      // A SPOKEN task's body is its transcript, and its delivery signals ride
      // alongside as labelled pacing proxies — never as a pronunciation score.
      // A task whose microphone never worked is flagged like a dead listening
      // document: logged, excluded from every number, and reported as ours.
      const spokenAnswer = task.skill === 'PO' ? spoken[task.id] : undefined;
      if (task.skill === 'PO' && spokenAnswer?.unavailable) {
        logExamResult({ ...base, audioFailed: true }, task);
        await recordGraded(task.id);
        continue;
      }
      const body = task.skill === 'PO'
        ? (spokenAnswer?.transcript ?? '').trim()
        : (texts[task.id] ?? '').trim();
      if (!body) {
        logExamResult(base, task);
        await recordGraded(task.id);
        continue;
      }
      const res = await examGrader.grade({
        stimulus: task.prompt,
        candidateResponse: body,
        rubric: task.rubric!,
        modelAnswer: task.modelAnswer!,
        targetBand: task.level,
        // Ties this grade to the attempt start-exam-attempt authorized.
        paperId,
        skill: task.skill,
        lang,
        // Null when nothing was measured, so no delivery line is sent at all
        // rather than an empty one inviting the grader to speculate.
        ...(spokenAnswer ? { delivery: deliveryNote(spokenAnswer.signals, lang) ?? undefined } : {}),
        // Always sent for an interaction, including 0/6: the transcript is the
        // candidate's questions alone, so silence about coverage would read as
        // a complete task rather than an empty one.
        ...(coverage[task.id] ? { coverage: coverageNote(coverage[task.id], lang) } : {}),
      });
      if (res.live) {
        const passed = SCORE_BANDS.indexOf(res.band) >= SCORE_BANDS.indexOf(task.level);
        logExamResult({ ...base, passed, aiGrade: { band: res.band, feedback: res.feedback } }, task);
      } else {
        logExamResult(base, task);
      }
      await recordGraded(task.id);
    }

    logSession('exam');
    setPhase('done');
    // D-08: the draft exists only between a crash and the candidate finishing.
    if (key) {
      try {
        await AsyncStorage.removeItem(key);
      } catch {
        // A stale draft is harmless: parseDraft rejects it once this paper+skill
        // is reopened with different content, and a fresh sitting overwrites it.
      }
    }
    // Straight to Le Rapport: nothing was shown while the section ran, so this
    // is the first moment the candidate learns anything.
    router.replace({ pathname: '/exam-report', params: { paperId } });
  }, [answers, texts, spoken, coverage, debate, tasks, unplayable, paperId, skill, section, mode, lang, key, writeDraft, logExamResult, logSession, router]);

  if (!paper || !section || !skill) {
    return (
      <Shell title={T.examiner} onClose={() => router.replace('/home')}>
        <TX role="label" color={t.txSecondary}>{T.examNone}</TX>
      </Shell>
    );
  }

  if (!RENDERABLE.includes(section.skill)) {
    // Honest refusal, not a silent text fallback. See RENDERABLE.
    return (
      <Shell title={T.examSkillNames[section.skill]} onClose={() => router.back()}>
        <TX role="label" color={t.txSecondary} lhMult={1.5}>{T.examNone}</TX>
      </Shell>
    );
  }

  const answeredCount = tasks.reduce((n, task) => {
    if (task.skill === 'PO') return n + (spoken[task.id] ? 1 : 0);
    if (isOpen(task)) return n + ((texts[task.id] ?? '').trim() ? 1 : 0);
    const a = answers[task.id] ?? {};
    return n + taskQuestions(task).filter((q) => a[q.key] != null).length;
  }, 0);
  const totalCount = tasks.reduce(
    (n, task) => n + (isOpen(task) ? 1 : taskQuestions(task).length),
    0
  );

  return (
    <View style={{ flex: 1, backgroundColor: t.bgDeep }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader
          onClose={() => router.replace({ pathname: '/exam-paper', params: { paperId } })}
          title={T.examSkillNames[section.skill]}
          extra={
            clock ? (
              <ExamClock
                clock={clock}
                onChange={setClock}
                onExpire={submit}
                mode={mode}
                lang={lang}
              />
            ) : null
          }
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <TX role="meta" color={t.txMuted}>{answeredCount}/{totalCount} {T.examAnswered}</TX>
          {mode === 'practice' ? (
            <TX font="semi" role="meta" color={t.txMuted}>· {T.examUnscored}</TX>
          ) : null}
          {unplayable.size > 0 ? (
            <TX font="semi" role="meta" color={t.danger}>· {T.examAudioFailed}</TX>
          ) : null}
        </View>

        {/* The one thing a candidate is told about marking, up front, so the
            absence of feedback reads as the design rather than a failure. */}
        <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 20 }}>
          {T.examNoReveal}
        </TX>

        {/* And the one thing they are told about the AUDIO, for the same reason.
            A listening paper is mostly silence: a read window before the first
            play, a pause between the two plays, and a pause between documents.
            On DELF that is 60s + 60s + 30s around a three-minute recording, so
            a candidate meets a still screen and no sound long before they meet
            the voice.

            Nothing on the screen said that was deliberate. The per-part line
            underneath announces the current phase, but it arrives with the part
            and is easy to miss while the eye is on the questions — and by then
            the candidate is already tapping the player, which does nothing,
            because the audio starts on its own. Told once, at the top, silence
            reads as the format instead of as a fault.

            CO only: nothing else in the paper has a playback phase to explain,
            and a notice about waiting for a voice on a reading paper is noise. */}
        {section.skill === 'CO' ? (
          <TX role="meta" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 20 }}>
            {T.examSilenceNotice}
          </TX>
        ) : null}

        {/* One playback owner for the whole paper. Without it every audio part
            ran its own autoplay timer from mount, so parts sharing a
            readWindowS all started together into the single shared player and
            the later ones ate the earlier. */}
        <ExamAudioQueue>
        {tasks.map((task) => {
          // DISPATCH BY SURFACE, never by skill.
          //
          // This was a ternary chain that tested `taskType === 'po_interaction'`
          // and then fell through on `skill === 'PO'` to the plain recorder.
          // `po_debate` carries skill 'PO', so a DELF débat rendered as a task
          // where the candidate talks and the examiner never objects — the bank
          // authored, validated, rendered to twenty-nine clips, published, and
          // never read, while the prompt promised the challenge.
          //
          // `surfaceFor` is exhaustive over ExamTaskType with a `never` check,
          // so a new task type is now a COMPILE ERROR until it is given a
          // surface, and the switch below is a compile error until that surface
          // is drawn. See utils/examDispatch.logic.ts.
          const surface = surfaceFor(task);
          switch (surface) {
            case 'interaction':
              return (
            <ExamInterlocutorTask
              key={task.id}
              task={task}
              lang={lang}
              editable={phase === 'answering'}
              onAnswer={(a) => {
                setSpoken((p) => ({
                  ...p,
                  [task.id]: {
                    transcript: a.transcript,
                    signals: a.signals,
                    audioUri: null,
                    unavailable: a.unavailable,
                  },
                }));
                setCoverage((p) => ({ ...p, [task.id]: a.coverage }));
              }}
            />
              );
            case 'debate':
              return (
                <ExamDebateTask
                  key={task.id}
                  task={task}
                  lang={lang}
                  editable={phase === 'answering'}
                  // The examiner heard phase 1. Ours reads the side off the
                  // monologue when this section carried one, and asks when it
                  // did not — never guesses.
                  priorTranscript={monologueTranscript}
                  onAnswer={(a) => {
                    setSpoken((p) => ({
                      ...p,
                      [task.id]: {
                        transcript: a.transcript,
                        signals: a.signals,
                        audioUri: null,
                        unavailable: a.unavailable,
                      },
                    }));
                    setDebate((p) => ({ ...p, [task.id]: a.report }));
                  }}
                />
              );
            case 'speak':
              return (
            <ExamSpeakTask
              key={task.id}
              task={task}
              lang={lang}
              editable={phase === 'answering'}
              onAnswer={(a) => setSpoken((p) => ({ ...p, [task.id]: a }))}
            />
              );
            case 'listening':
              return (
            <ListeningTask
              key={task.id}
              task={task}
              mode={mode}
              answers={answers[task.id] ?? {}}
              onAnswer={(qKey, opt) =>
                setAnswers((p) => ({ ...p, [task.id]: { ...(p[task.id] ?? {}), [qKey]: opt } }))
              }
              onUnplayable={(partKey) => setUnplayable((p) => new Set(p).add(`${task.id}:${partKey}`))}
              editable={phase === 'answering'}
            />
              );
            case 'open':
              return (
            <OpenTask
              key={task.id}
              task={task}
              value={texts[task.id] ?? ''}
              onChange={(v) => setTexts((p) => ({ ...p, [task.id]: v }))}
              editable={phase === 'answering'}
            />
              );
            case 'closed':
              return (
            <ClosedTask
              key={task.id}
              task={task}
              answers={answers[task.id] ?? {}}
              onAnswer={(qKey, opt) =>
                setAnswers((p) => ({ ...p, [task.id]: { ...(p[task.id] ?? {}), [qKey]: opt } }))
              }
              editable={phase === 'answering'}
            />
              );
          }
        })}
        </ExamAudioQueue>
      </ScrollView>

      <View style={{ paddingHorizontal: 20, paddingBottom: insets.bottom + 20 }}>
        {confirming ? (
          <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(12), backgroundColor: t.card, padding: 16 }}>
            <TX font="semi" role="label" style={{ marginBottom: 4 }}>{T.examConfirmSubmit}</TX>
            <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginBottom: 14 }}>
              {T.examConfirmSubmitBody}
            </TX>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Press
                onPress={() => setConfirming(false)}
                style={{ flex: 1, alignItems: 'center', minHeight: 46, justifyContent: 'center', borderRadius: 14, borderWidth: 1, borderColor: t.line(14) }}
              >
                <TX font="semi" role="label" color={t.txSecondary}>{T.examStay}</TX>
              </Press>
              <Press
                onPress={submit}
                style={{ flex: 1, alignItems: 'center', minHeight: 46, justifyContent: 'center', borderRadius: 14, backgroundColor: t.acc }}
              >
                <TX font="semi" role="label" color={t.accInk}>{T.examSubmit}</TX>
              </Press>
            </View>
          </View>
        ) : (
          <>
            <Press
              onPress={() => setConfirming(true)}
              disabled={phase !== 'answering'}
              style={{
                alignItems: 'center', minHeight: 50, justifyContent: 'center', borderRadius: 16,
                backgroundColor: t.acc, opacity: phase === 'answering' ? 1 : 0.6,
              }}
            >
              <TX font="semi" role="label" color={t.accInk}>
                {phase === 'submitting' ? T.examGrading : T.examSubmit}
              </TX>
            </Press>
            {/* SAY THAT THE WAIT IS THE WORK, not a hang.
             *
             *  An open answer is marked by a model, measured at 7 to 9 seconds
             *  each, and the loop above grades them ONE AT A TIME — so a
             *  speaking paper with a monologue and a débat waits the better
             *  part of twenty seconds. Until now the only signal was this
             *  button dimming to 60% and its label changing, which on a phone
             *  with no spinner and no moving part is indistinguishable from a
             *  frozen app. The obvious thing a candidate then does is leave,
             *  which is the one action that loses the grade. */}
            {phase === 'submitting' ? (
              <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginTop: 10, textAlign: 'center' }}>
                {T.examGradingNote}
              </TX>
            ) : null}
          </>
        )}
      </View>
    </View>
  );
}

function Shell({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  const t = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: t.bgDeep, paddingTop: insets.top }}>
      <FocusHeader onClose={onClose} title={title} />
      <View style={{ padding: 24 }}>{children}</View>
    </View>
  );
}

/* ─── Compréhension orale ────────────────────────────────────────────────── */

/**
 * A listening task: each part plays its own audio, then its own questions.
 *
 * The questions are NOT withheld until the audio finishes. Both boards give a
 * reading window before each recording precisely so the candidate can read them
 * first, and they stay readable throughout — see the note on PartPhase. What is
 * constrained is the audio: it starts on its own, plays a fixed number of times
 * and is then gone.
 */
function ListeningTask({
  task, mode, answers, onAnswer, onUnplayable, editable,
}: {
  task: ExamTask;
  mode: ExamMode;
  answers: Record<string, number | null>;
  onAnswer: (qKey: string, opt: number) => void;
  onUnplayable: (partKey: string) => void;
  editable: boolean;
}) {
  const t = useTheme();
  const questions = useMemo(() => taskQuestions(task), [task]);

  // A listening task without parts has no audio to play, which means it is a
  // reading task wearing a CO label. Refuse it rather than render it silently.
  if (!task.parts?.length) {
    return (
      <View style={{ marginBottom: 22 }}>
        <TX role="label" color={t.danger}>{T_AUDIO_MISSING}</TX>
      </View>
    );
  }

  return (
    <View style={{ marginBottom: 26 }}>
      {task.label ? (
        <TX font="semi" role="eyebrow" ls={2} color={t.accTx} style={{ marginBottom: 8 }}>
          {task.label.toUpperCase()}
        </TX>
      ) : null}

      <Instruction body={task.prompt} />

      {task.parts.map((part, pi) => (
        <ExamAudioPart
          key={`${task.id}-p${pi}`}
          queueId={`${task.id}-p${pi}`}
          part={part}
          mode={mode}
          onUnplayable={() => onUnplayable(`p${pi}`)}
        >
          {(partEditable) => (
            <>
              {questions
                .filter((q) => q.partIx === pi)
                .map((q) => (
                  <Question
                    key={q.key}
                    q={q}
                    selected={answers[q.key] ?? null}
                    onSelect={(opt) => editable && partEditable && onAnswer(q.key, opt)}
                    editable={editable && partEditable}
                  />
                ))}
            </>
          )}
        </ExamAudioPart>
      ))}
    </View>
  );
}

/** Deliberately not an i18n key: a CO task with no parts is an authoring error
 *  that must never ship, not a state a candidate is meant to read about. */
const T_AUDIO_MISSING = 'Audio manquant pour cette épreuve.';

/* ─── Compréhension écrite ───────────────────────────────────────────────── */

function ClosedTask({
  task, answers, onAnswer, editable,
}: {
  task: ExamTask;
  answers: Record<string, number | null>;
  onAnswer: (qKey: string, opt: number) => void;
  editable: boolean;
}) {
  const t = useTheme();
  const questions = useMemo(() => taskQuestions(task), [task]);
  const byPart = useMemo(() => {
    const groups = new Map<number | null, ExamQuestion[]>();
    for (const q of questions) {
      const g = groups.get(q.partIx);
      if (g) g.push(q);
      else groups.set(q.partIx, [q]);
    }
    return [...groups.entries()];
  }, [questions]);

  return (
    <View style={{ marginBottom: 26 }}>
      {task.label ? (
        <TX font="semi" role="eyebrow" ls={2} color={t.accTx} style={{ marginBottom: 8 }}>
          {task.label.toUpperCase()}
        </TX>
      ) : null}

      {/* A task with `parts` puts its stimulus on each part, so its own prompt
          is the INSTRUCTION and belongs above them. A flat task puts the
          stimulus on the prompt itself, and that is a document. Rendering
          nothing in the first case is what dropped the instruction from twelve
          of the paper's fourteen tasks. */}
      {task.parts?.length
        ? <Instruction body={task.prompt} />
        : <Document body={task.prompt} />}

      {byPart.map(([partIx, qs]) => {
        const part: ExamPart | undefined = partIx == null ? undefined : task.parts?.[partIx];
        return (
          <View key={String(partIx)}>
            {part ? (
              <>
                <TX font="semi" role="meta" color={t.txMuted} style={{ marginTop: 14, marginBottom: 6 }}>
                  {part.label}
                </TX>
                {part.text ? <Document body={part.text} /> : null}
              </>
            ) : null}
            {qs.map((q) => (
              <Question
                key={q.key}
                q={q}
                selected={answers[q.key] ?? null}
                onSelect={(opt) => editable && onAnswer(q.key, opt)}
                editable={editable}
              />
            ))}
          </View>
        );
      })}
    </View>
  );
}

/** What the candidate is told to DO — "Vous allez entendre deux
 *  micros-trottoirs...". Deliberately not a `Document`: an instruction is not
 *  part of the stimulus, and giving it the same bordered card makes it read as
 *  something to answer questions about. */
function Instruction({ body }: { body?: string | null }) {
  const t = useTheme();
  if (!body) return null;
  return (
    <TX role="label" color={t.txSecondary} lhMult={1.5} style={{ marginBottom: 12 }}>
      {body}
    </TX>
  );
}

/** A reading document. Rendered as its own surface rather than body copy, so a
 *  notice reads as a notice and an article reads as an article. */
function Document({ body }: { body: string }) {
  const t = useTheme();
  return (
    <View
      style={{
        borderRadius: 14, borderWidth: 1, borderColor: t.line(9),
        backgroundColor: t.card, padding: 16, marginBottom: 14,
      }}
    >
      <TX role="label" color={t.txPrimary} lhMult={1.6}>{body}</TX>
    </View>
  );
}

function Question({
  q, selected, onSelect, editable,
}: {
  q: ExamQuestion;
  selected: number | null;
  onSelect: (opt: number) => void;
  editable: boolean;
}) {
  const t = useTheme();
  return (
    <View style={{ marginBottom: 18 }}>
      <TX font="semi" role="label" style={{ marginBottom: 8 }}>{q.item.q}</TX>
      {q.item.opts.map((opt, oIx) => {
        const on = selected === oIx;
        return (
          <Press
            key={oIx}
            disabled={!editable}
            onPress={() => onSelect(oIx)}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
            style={{
              flexDirection: 'row', alignItems: 'center', gap: 8,
              borderRadius: 12, borderWidth: 1,
              borderColor: on ? t.acc : t.line(10),
              // No correctness colour anywhere in this component. There is no
              // variable here that knows the key, and that is deliberate.
              backgroundColor: on ? t.accA(12) : 'transparent',
              padding: 12, marginBottom: 8,
            }}
          >
            <TX role="label" color={t.txPrimary}>{opt}</TX>
          </Press>
        );
      })}
    </View>
  );
}

/* ─── Expression écrite ──────────────────────────────────────────────────── */

function OpenTask({
  task, value, onChange, editable,
}: {
  task: ExamTask;
  value: string;
  onChange: (v: string) => void;
  editable: boolean;
}) {
  const t = useTheme();
  const T = useT();

  // Words, not characters: every published length instruction on both papers is
  // in words ("60 à 120 mots", "environ 250 mots"), so a character counter would
  // be measuring something the candidate was never asked about.
  const words = value.trim() ? value.trim().split(/\s+/).length : 0;
  const min = task.responseSpec?.minWords;
  const max = task.responseSpec?.maxWords;
  const under = min != null && words < min;
  const over = max != null && words > max;

  return (
    <View style={{ marginBottom: 26 }}>
      {task.label ? (
        <TX font="semi" role="eyebrow" ls={2} color={t.accTx} style={{ marginBottom: 8 }}>
          {task.label.toUpperCase()}
        </TX>
      ) : null}
      <TX font="serifI" role="title" lhMult={1.4} style={{ marginBottom: 14 }}>
        « {task.prompt} »
      </TX>

      <TextInput
        value={value}
        onChangeText={onChange}
        editable={editable}
        multiline
        textAlignVertical="top"
        accessibilityLabel={T.dcYours}
        style={{
          minHeight: 180, borderRadius: 14, borderWidth: 1, borderColor: t.line(12),
          backgroundColor: t.card, padding: 14, color: t.tx,
        }}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 8 }}>
        <TX role="meta" color={under || over ? t.danger : t.txMuted}>
          {words} {T.examWords}
        </TX>
        {min != null || max != null ? (
          <TX role="meta" color={t.txMuted}>
            · {min ?? 0}{max != null ? `–${max}` : '+'}
          </TX>
        ) : null}
      </View>
    </View>
  );
}
