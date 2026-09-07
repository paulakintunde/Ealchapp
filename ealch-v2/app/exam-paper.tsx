// One mock paper: its four épreuves, and where the candidate has got to.
//
// ── Why this screen exists at all ───────────────────────────────────────────
//
// A TEF Canada sitting is two hours fifty-five minutes. Nobody completes that
// on a phone in one go on their first attempt, and a runner that insisted on it
// would make the whole feature unusable. So this is the RESUME point: listening
// on the bus, writing that evening, each épreuve keeping its own clock. Sitting
// mode is here for people two weeks out from the real thing who want the
// unbroken run.
//
// Nothing is locked. The four sections are four doors, in the order the real
// paper runs them but not gated on each other — see the note on sectionProgress
// in progress.logic.ts.
import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import { paperProgress, type SectionProgress } from '@/store/progress.logic';
import { content, useContent } from '@/services/content';
import { examTasksOfSection, taskQuestions } from '@/services/content.logic';
import { preflightClips, type AudioPreflight } from '@/services/audio';
import { EXAM_MODES, type ExamMode, type ExamSection, type ExamSkill } from '@/content/schema';

const FORMAT_LABEL: Record<string, string> = {
  delf_b2: 'DELF B2',
  tef_canada: 'TEF Canada',
  tcf_canada: 'TCF Canada',
};

export default function ExamPaperScreen() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang) === 'en' ? 'en' : 'fr';
  const results = useProgress((s) => s.examResults);

  const { paperId } = useLocalSearchParams<{ paperId?: string }>();
  // The corpus is a REAL dependency here — see the note in app/exam.tsx. These
  // memos read it imperatively through content.*, which calls getState(), so
  // before this they never re-ran when the OTA snapshot landed. Exam content
  // ships only in that snapshot, so any exam screen mounted during launch
  // memoised an empty result and kept it.
  const corpus = useContent((s) => s.corpus);
  const paper = useMemo(() => (paperId ? content.examPaper(paperId) : null), [paperId, corpus]);

  // The mode is chosen HERE, before a section opens, and travels to the runner
  // as a route param. Deliberately not persisted: it is a decision about this
  // sitting, and a candidate who practised yesterday should not silently start
  // today's real attempt in practice mode.
  const [mode, setMode] = useState<ExamMode>('exam');

  // The audio preflight: `checking` while the probe is in flight (it is a
  // network call between a tap and a screen), `warn` holding the answer when it
  // is one the candidate has to decide about.
  const [checking, setChecking] = useState(false);
  const [warn, setWarn] = useState<(AudioPreflight & { skill: ExamSkill }) | null>(null);

  const progress = useMemo(
    () => (paper && paperId ? paperProgress(paper.sections, results, paperId) : []),
    [paper, paperId, results]
  );

  if (!paper || !paperId) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bgDeep, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} title={T.examiner} />
        <View style={{ padding: 24 }}>
          <TX role="label" color={t.txSecondary}>{T.examNone}</TX>
        </View>
      </View>
    );
  }

  const go = (skill: ExamSkill) =>
    router.push({ pathname: '/exam-section', params: { paperId, skill, mode } });

  /**
   * Open a section, asking about the audio FIRST when there is audio to ask
   * about.
   *
   * In exam mode a clip plays once and is then gone: a download that fails
   * mid-paper raises `onUnplayable`, those questions become unanswerable, and
   * the attempt is logged `audioFailed` and left out of the pass check. The
   * handling is right; the timing was not. A candidate met it partway through
   * a paper, on a clock they could not stop, having already committed the hour.
   *
   * So the question moves in front of the clock. Only for listening, only when
   * clips are actually missing, and never for a candidate whose clips are all
   * cached — they are fine with no connection at all, and warning them would
   * teach them to dismiss the warning that matters.
   */
  const openSection = async (skill: ExamSkill) => {
    if (skill !== 'CO' || checking) return void go(skill);
    const co = paper.sections.find((sec) => sec.skill === 'CO');
    const refs = (co ? examTasksOfSection(corpus, co) : [])
      .flatMap((task) => task.parts ?? [])
      .flatMap((part) => (part.audioRef ? [{ path: part.audioRef }] : []));
    if (refs.length === 0) return void go(skill);

    setChecking(true);
    const pre = await preflightClips(refs);
    setChecking(false);
    if (pre.missing === 0 || pre.reachable) return void go(skill);
    setWarn({ skill, ...pre });
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bgDeep }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader
          onClose={() => router.replace({ pathname: '/exam', params: { format: paper.format } })}
          title={`${FORMAT_LABEL[paper.format] ?? paper.format} · ${T.examPaperTitle} ${paper.paperNo}`}
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 30 }}>
        {/* Gate H: the disclaimer renders before any exam content. */}
        <TX role="label" color={t.txMuted} lhMult={1.5} style={{ marginBottom: 20 }}>
          {T.examDisclaimer}
        </TX>

        {/* ── Mode ── */}
        <View style={{ marginBottom: 22 }}>
          {EXAM_MODES.map((m) => {
            const on = mode === m;
            const title = m === 'exam' ? T.examModeExam : T.examModePractice;
            const sub = m === 'exam' ? T.examModeExamSub : T.examModePracticeSub;
            return (
              <Press
                key={m}
                onPress={() => setMode(m)}
                accessibilityRole="radio"
                accessibilityState={{ selected: on }}
                style={{
                  flexDirection: 'row', alignItems: 'flex-start', gap: 12,
                  borderRadius: 14, borderWidth: 1,
                  borderColor: on ? t.acc : t.line(9),
                  backgroundColor: on ? t.accA(10) : t.card,
                  padding: 14, marginBottom: 8,
                }}
              >
                <View style={{ paddingTop: 2 }}>
                  <Icon name={on ? 'check' : 'clock'} size={16} color={on ? t.accTx : t.txMuted} />
                </View>
                <View style={{ flex: 1 }}>
                  <TX font="semi" role="label" color={on ? t.accTx : t.txPrimary}>{title}</TX>
                  <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginTop: 3 }}>{sub}</TX>
                </View>
              </Press>
            );
          })}
        </View>

        {/* ── Sitting mode ── */}
        <Press
          onPress={() => {
            const first = paper.sections[0];
            if (first) openSection(first.skill);
          }}
          style={{
            borderRadius: 16, borderWidth: 1, borderColor: t.line(12), backgroundColor: t.card,
            padding: 16, marginBottom: 22,
          }}
        >
          <TX font="semi" role="label" style={{ marginBottom: 3 }}>{T.examSitting}</TX>
          <TX role="meta" color={t.txMuted} lhMult={1.45}>{T.examSittingSub}</TX>
        </Press>

        {/* ── One épreuve at a time ── */}
        <TX font="semi" role="label" style={{ marginBottom: 3 }}>{T.examSectionOne}</TX>
        <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginBottom: 12 }}>{T.examSectionOneSub}</TX>

        {progress.some((p) => p.answered > 0) ? (
          <Press
            onPress={() => router.push({ pathname: '/exam-report', params: { paperId } })}
            style={{
              alignItems: 'center', minHeight: 48, justifyContent: 'center', borderRadius: 14,
              borderWidth: 1, borderColor: t.acc, backgroundColor: t.accA(8), marginBottom: 14,
            }}
          >
            <TX font="semi" role="label" color={t.accTx}>{T.examReport} →</TX>
          </Press>
        ) : null}

        {/* The audio preflight's answer, when it is one the candidate has to
            decide about. Deliberately a decision and not a block: a paper is
            still worth sitting for its other three épreuves, and refusing to
            open it would be us choosing for them. What changes is that they
            choose BEFORE the clock, knowing the count. */}
        {warn ? (
          <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(12), backgroundColor: t.card, padding: 16, marginBottom: 14 }}>
            <TX font="semi" role="label" color={t.danger} style={{ marginBottom: 4 }}>
              {T.examAudioOffline}
            </TX>
            <TX role="meta" color={t.txMuted} lhMult={1.45} style={{ marginBottom: 14 }}>
              {T.examAudioOfflineBody
                .replace('{n}', String(warn.missing))
                .replace('{total}', String(warn.total))}
            </TX>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Press
                onPress={() => setWarn(null)}
                style={{ flex: 1, alignItems: 'center', minHeight: 46, justifyContent: 'center', borderRadius: 14, borderWidth: 1, borderColor: t.line(14) }}
                accessibilityRole="button"
                accessibilityLanguage={lang}
              >
                <TX font="semi" role="label" color={t.txSecondary}>{T.examStay}</TX>
              </Press>
              <Press
                onPress={() => { const s = warn.skill; setWarn(null); go(s); }}
                style={{ flex: 1, alignItems: 'center', minHeight: 46, justifyContent: 'center', borderRadius: 14, backgroundColor: t.acc }}
                accessibilityRole="button"
                accessibilityLanguage={lang}
              >
                <TX font="semi" role="label" color={t.accInk}>{T.examAudioStartAnyway}</TX>
              </Press>
            </View>
          </View>
        ) : null}

        {paper.sections.map((section, i) => (
          <SectionRow
            key={`${section.skill}-${i}`}
            section={section}
            progress={progress[i]}
            lang={lang}
            onPress={() => openSection(section.skill)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function SectionRow({
  section, progress, lang, onPress,
}: {
  section: ExamSection;
  progress: SectionProgress | undefined;
  lang: 'fr' | 'en';
  onPress: () => void;
}) {
  const t = useTheme();
  const T = useT();

  // Question count is derived from the tasks, not stored on the section: a
  // stored count is a second source of truth that goes stale the moment a task
  // gains a question.
  //
  // Its own corpus subscription, because this row is a separate component and
  // the parent's cannot reach it. Deriving from the corpus without depending on
  // it is what left every exam screen showing whatever it computed at mount.
  const rowCorpus = useContent((s) => s.corpus);
  const questions = useMemo(
    () => content.examTasksOfSection(section).reduce((n, task) => n + taskQuestions(task).length, 0),
    [section, rowCorpus]
  );
  const minutes = Math.max(1, Math.round(section.timingS / 60));
  const status = progress?.status ?? 'available';
  const done = status === 'done';
  const started = status === 'in-progress';

  const statusLabel =
    done ? T.examStatusDone : started ? T.examStatusInProgress : T.examStatusAvailable;

  return (
    <Press
      onPress={onPress}
      style={{
        flexDirection: 'row', alignItems: 'center', gap: 12,
        borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card,
        padding: 16, marginBottom: 10,
      }}
      accessibilityRole="button"
      accessibilityLanguage={lang}
    >
      <View style={{ flex: 1 }}>
        <TX font="serif" size={19} role="display" style={{ marginBottom: 4 }}>
          {T.examSkillNames[section.skill]}
        </TX>
        <TX role="meta" color={t.txMuted}>
          {questions > 0 ? `${questions} ${T.examQuestionCount} · ` : ''}{minutes} {T.examMinutes}
        </TX>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 }}>
          <TX font="semi" role="meta" color={done ? t.accTx : started ? t.txSecondary : t.txMuted}>
            {statusLabel}
          </TX>
          {progress && progress.total > 0 && started ? (
            <TX role="meta" color={t.txMuted}>{progress.answered}/{progress.total}</TX>
          ) : null}
          {/* A practice attempt is marked wherever its numbers appear, so a
              paused-clock replay can never be mistaken for a real sitting. */}
          {progress?.practice ? (
            <TX font="semi" role="meta" color={t.txMuted}>· {T.examUnscored}</TX>
          ) : null}
        </View>
      </View>
      <TX font="semi" role="label" color={t.accTx}>
        {started ? T.examResume : T.examStart}
      </TX>
    </Press>
  );
}
