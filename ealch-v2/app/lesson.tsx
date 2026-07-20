import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Badge, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import { lessonSkill } from '@/content/curriculum';
import { sound, tts } from '@/services';
import { content } from '@/services/content';
import type { Lesson, LessonSection } from '@/content/schema';

// Callers written before the corpus used short keys; map them to the real ids so
// existing links (home's weak-spots row, etc.) keep working until they're updated.
const LEGACY: Record<string, string> = {
  sons3: 'sons.03.l1',
  a1_4: 'a1.04.l1',
  a2_1: 'a2.01.l1',
};

function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <TX font="semi" role="meta" ls={2.4} color={color} style={{ marginBottom: 10 }}>
      {text}
    </TX>
  );
}

/** Renders one typed lesson section. The quiz section is handled by the screen's
 *  quiz phase, not here. */
function SectionView({
  s,
  onPlay,
  playingId,
  onGrade,
  graded,
}: {
  s: LessonSection;
  onPlay: (id: string, text: string) => void;
  playingId: string | null;
  /** Practice items only: self-rated recall, "Got it" / "Missed it". */
  onGrade: (itemId: string, correct: boolean) => void;
  /** itemIds graded at least once this visit, so a re-tap doesn't look ignored. */
  graded: ReadonlySet<string>;
}) {
  const t = useTheme();
  const T = useT();
  const label = <SectionLabel text={s.title} color={s.type === 'commonErrors' ? t.danger : t.accTx} />;

  switch (s.type) {
    case 'teach':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <TX role="body" color={t.txSecondary} lhMult={1.5}>
            {s.body}
          </TX>
        </View>
      );

    case 'steps':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.steps.map((step, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
                <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: t.accA(12), alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                  <TX font="serif" role="label" color={t.accTx}>{i + 1}</TX>
                </View>
                <TX role="body" color={t.txSecondary} lhMult={1.45} style={{ flex: 1 }}>{step}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'focus':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 8 }}>
            {s.points.map((p, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
                <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: t.acc, marginTop: 9 }} />
                <TX role="body" color={t.txSecondary} lhMult={1.4} style={{ flex: 1 }}>{p}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'examples':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.examples.map((ex, i) => (
              <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 14, paddingHorizontal: 16 }}>
                <TX font="serifI" role="titleLg" size={19} style={{ marginBottom: 4 }}>« {ex.fr} »</TX>
                <TX role="label" color={t.txMuted}>{ex.en}</TX>
                {ex.note ? <TX role="meta" color={t.txSubtle} style={{ marginTop: 6 }}>{ex.note}</TX> : null}
              </View>
            ))}
          </View>
        </View>
      );

    case 'useCases':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.cases.map((c, i) => (
              <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 14, paddingHorizontal: 16 }}>
                <TX font="semi" role="meta" ls={1.4} color={t.txSubtle} style={{ marginBottom: 6 }}>{c.situation}</TX>
                <TX font="serifI" role="titleLg" size={18} style={{ marginBottom: 3 }}>« {c.fr} »</TX>
                <TX role="label" color={t.txMuted}>{c.en}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'hacks':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.hacks.map((h, i) => (
              <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), padding: 14, paddingHorizontal: 16 }}>
                <TX font="semi" role="bodySm" style={{ marginBottom: 4 }}>{h.hack}</TX>
                <TX role="label" color={t.txSecondary} lhMult={1.5}>{h.why}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'cheatSheet':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 16, gap: 10 }}>
            {s.rows.map((r, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 12 }}>
                <TX font="serif" role="bodySm" color={t.accTx} style={{ width: 90 }}>{r.k}</TX>
                <TX role="bodySm" color={t.txSecondary} style={{ flex: 1 }}>{r.v}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'commonErrors':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.errors.map((er, i) => (
              <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.dangerA(25), backgroundColor: t.card, padding: 14, paddingHorizontal: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                  <TX font="serifI" role="titleSm" color={t.danger} style={{ textDecorationLine: 'line-through' }}>{er.wrong}</TX>
                  <Icon name="arrowRight" size={13} color={t.txNonText} strokeWidth={1.4} />
                  <TX font="serifI" role="titleSm" color={t.accTx}>{er.right}</TX>
                </View>
                <TX role="label" color={t.txMuted}>{er.why}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'table':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 16, gap: 10 }}>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              {s.cols.map((c, ci) => (
                <TX key={ci} font="semi" role="meta" ls={1.4} color={t.accTx} style={{ flex: 1 }}>{c}</TX>
              ))}
            </View>
            {s.rows.map((row, ri) => (
              <View key={ri} style={{ flexDirection: 'row', gap: 12 }}>
                {row.map((cell, ci) => (
                  <TX key={ci} role="bodySm" color={t.txSecondary} style={{ flex: 1 }}>{cell}</TX>
                ))}
              </View>
            ))}
          </View>
        </View>
      );

    case 'audio':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 8 }}>
            {s.lines.map((str, i) => {
              const id = `${s.title}-${i}`;
              const on = playingId === id;
              return (
                <Press key={i} cue={null} onPress={() => onPlay(id, str)} style={{ minHeight: 56, paddingVertical: 6, borderRadius: 14, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, flexDirection: 'row', alignItems: 'center', gap: 13, paddingHorizontal: 15 }}>
                  <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="play" size={12} color={t.acc} />
                  </View>
                  <TX font="serifI" role="titleSm" style={{ flex: 1 }}>{str}</TX>
                  <Waveform count={14} height={16} barWidth={2.5} gap={3} active={on} color={on ? t.acc : t.txNonText} />
                </Press>
              );
            })}
          </View>
        </View>
      );

    case 'practice':
      // itemIds resolved against the corpus; a tap speaks the French. Self-rated
      // recall (the flashcards.tsx pattern: no mic, no typed answer, the learner
      // grades their own recognition) turns listening here into a real graded
      // attempt — the join that lets lesson study feed Le Rapport and the SRS,
      // not just a listening pass.
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 8 }}>
            {s.itemIds.map((id) => {
              const it = content.item(id);
              if (!it) return null;
              const on = playingId === id;
              const isGraded = graded.has(id);
              return (
                <View key={id} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, paddingHorizontal: 15, paddingVertical: 6 }}>
                  <Press cue={null} onPress={() => onPlay(id, it.fr)} style={{ minHeight: 52, flexDirection: 'row', alignItems: 'center', gap: 13 }}>
                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: t.accA(12), alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="speaker" size={14} color={t.acc} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <TX font="serifI" role="titleSm">{it.fr}</TX>
                      <TX role="meta" color={t.txMuted}>{it.en}</TX>
                    </View>
                    <Waveform count={10} height={14} barWidth={2.5} gap={3} active={on} color={on ? t.acc : t.txNonText} />
                  </Press>
                  <View style={{ flexDirection: 'row', gap: 8, paddingBottom: 8, paddingTop: 2 }}>
                    <Press
                      cue={null}
                      onPress={() => onGrade(id, false)}
                      style={{ flex: 1, minHeight: 38, borderRadius: 10, borderWidth: 1, borderColor: isGraded ? t.line(8) : t.dangerA(30), backgroundColor: t.dangerA(isGraded ? 4 : 8), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                    >
                      <Icon name="x" size={12} color={t.danger} />
                      <TX font="semi" role="meta" color={t.danger}>{T.practiceMissed}</TX>
                    </Press>
                    <Press
                      cue={null}
                      onPress={() => onGrade(id, true)}
                      style={{ flex: 1, minHeight: 38, borderRadius: 10, borderWidth: 1, borderColor: isGraded ? t.line(8) : t.accA(30), backgroundColor: t.accA(isGraded ? 4 : 8), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                    >
                      <Icon name="check" size={12} color={t.accTx} />
                      <TX font="semi" role="meta" color={t.accTx}>{T.practiceGotIt}</TX>
                    </Press>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      );

    case 'quiz':
      return null; // driven by the quiz phase
  }
}

export default function LessonScreen() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string; at?: string }>();

  const raw = Array.isArray(params.key) ? params.key[0] : params.key;
  const id = raw ? LEGACY[raw] ?? raw : '';
  // Fall back to the first available lesson if the id is unknown, so a bad link
  // shows real content rather than crashing.
  const L: Lesson | null = content.lesson(id) ?? content.units('sons').flatMap((u) => content.lessonsOf(u.id))[0] ?? null;

  const logSession = useSessionLog();
  const setResume = useProgress((s) => s.setResume);
  const clearResume = useProgress((s) => s.clearResume);
  const logError = useProgress((s) => s.logError);
  const logAttempt = useProgress((s) => s.logAttempt);

  const [phase, setPhase] = useState<'content' | 'quiz' | 'done'>('content');
  const [quizIx, setQuizIx] = useState(0);
  const [quizSel, setQuizSel] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  // itemIds self-rated this visit — purely a UI dim/highlight cue, never read
  // back for logic. Re-grading is allowed and expected (that's how repetition
  // works elsewhere in this app); this only stops a re-tap looking ignored.
  const [gradedIds, setGradedIds] = useState<ReadonlySet<string>>(new Set());

  // Deep-link landing (Phase 2.E consumer): an anchor in `?at=` names the exact
  // section a review flow wants this visit to open on. `pendingScrollIx` is set
  // once the anchor resolves against the loaded lesson; the section wrapper's
  // onLayout below fires the actual scroll once that section's y is known
  // (layout is async, so this cannot be done synchronously on mount) and then
  // clears it, so a later re-layout (rotation, font-scale change) never
  // re-triggers an unwanted jump. `highlightIx` stays set for the visit so the
  // landing spot stays visually findable after the scroll finishes.
  const scrollRef = useRef<ScrollView>(null);
  const [pendingScrollIx, setPendingScrollIx] = useState<number | null>(null);
  const [highlightIx, setHighlightIx] = useState<number | null>(null);

  useEffect(() => () => tts.stop(), []);

  // Mark this lesson resumable the moment it opens, so a mid-lesson exit leaves
  // the home hero offering it by its real title. The completion handlers below
  // clear it; unmount deliberately does not (leaving = not finishing). Store the
  // caller's key so the route round-trips through the same LEGACY resolution.
  useEffect(() => {
    if (L) setResume({ route: `/lesson?key=${raw ?? id}`, title: L.title, activity: 'lesson' });
  }, [L?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const atRaw = Array.isArray(params.at) ? params.at[0] : params.at;
    if (!atRaw || !L) return;
    const resolved = content.resolveAnchorStr(atRaw);
    // A stale or foreign anchor (wrong lesson, or the corpus moved on since it
    // was minted) fails closed here exactly as resolveAnchor promises — the
    // lesson still opens normally, it just doesn't jump anywhere.
    if (!resolved || resolved.lesson.id !== L.id) return;
    const sections = L.sections.filter((sec) => sec.type !== 'quiz');
    const ix = sections.findIndex((sec) => (sec as LessonSection) === resolved.section);
    if (ix !== -1) {
      setPendingScrollIx(ix);
      setHighlightIx(ix);
    }
  }, [L?.id, params.at]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!L) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <TX role="body" color={t.txMuted} center>{T.lessonSoon}</TX>
        </View>
      </View>
    );
  }

  const contentSections = L.sections.filter((s) => s.type !== 'quiz');
  const quizSection = L.sections.find((s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz');
  const quiz = quizSection?.questions ?? [];
  const passMark = Math.ceil(quiz.length * 0.6);

  const play = (pid: string, text: string) => {
    sound.play('flip');
    setPlayingId(pid);
    tts.speak(text, { onDone: () => setPlayingId((p) => (p === pid ? null : p)), onError: () => setPlayingId((p) => (p === pid ? null : p)) });
  };

  // Self-rated recall on a practice item — the flashcards.tsx pattern (no mic,
  // no typed answer, the learner's own "I knew it" / "Again"). This is the
  // real prerequisite the deep-link anchors needed: until a lesson's practice
  // section produced graded attempts, there was nothing for an anchor to be
  // attached to. `anchorFor` re-derives the item's position in THIS lesson's
  // sections every time (never stored), so it can never point at a stale
  // block even if `L` gets re-authored between visits.
  const gradeItem = (itemId: string, correct: boolean) => {
    const it = content.item(itemId);
    if (!it) return;
    sound.play(correct ? 'success' : 'tap');
    setGradedIds((g) => new Set(g).add(itemId));
    logAttempt({
      activity: 'lesson',
      itemId,
      expected: it.fr,
      heard: '',
      score: correct ? 1 : 0,
      verdict: correct ? 'good' : 'off',
      correct,
      modality: 'recognise',
      anchor: content.anchorFor(L, itemId) ?? undefined,
    });
  };

  const startQuiz = () => {
    sound.play('tap');
    if (quiz.length === 0) {
      // No quiz on this lesson: sitting the content is the completion.
      logSession('lesson');
      clearResume();
      router.back();
      return;
    }
    setPhase('quiz');
    setQuizIx(0);
    setQuizSel(null);
    setQuizScore(0);
  };

  const quizPick = (i: number) => {
    if (quizSel !== null) return;
    const ok = i === quiz[quizIx].correct;
    sound.play(ok ? 'success' : 'error');
    setQuizSel(i);
    if (ok) setQuizScore((s) => s + 1);
    else {
      // A wrong answer in a skill-mapped lesson is a real, named weak spot —
      // the one honest producer available while the corpus carries no tags and
      // speech recognition is stubbed. Unmapped lessons record nothing.
      const skill = lessonSkill[L.id];
      if (skill) logError({ skill, source: 'lesson' });
    }
  };

  const quizNext = () => {
    if (quizIx + 1 >= quiz.length) {
      sound.play(quizScore >= passMark ? 'ding' : 'tap');
      setPhase('done');
      // Logged on a fail too: the streak records showing up, not scoring.
      logSession('lesson');
      // Reaching the end of the quiz is finishing the lesson, pass or fail — the
      // hero should stop offering to resume what you just completed.
      clearResume();
    } else {
      sound.play('tap');
      setQuizIx((q) => q + 1);
      setQuizSel(null);
    }
  };

  const retry = () => {
    sound.play('tap');
    setPhase('quiz');
    setQuizIx(0);
    setQuizSel(null);
    setQuizScore(0);
  };

  const pass = quizScore >= passMark;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={L.tag} />
      </View>

      <ScrollView ref={scrollRef} contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: insets.bottom + 50, paddingTop: 8 }} showsVerticalScrollIndicator={false}>
        {phase === 'content' ? (
          <View>
            <TX font="serif" size={36} role="display" style={{ marginBottom: 12 }}>
              {L.title}
            </TX>
            <TX role="body" color={t.txSecondary} style={{ marginBottom: 26 }} lhMult={1.5}>
              {L.intro}
            </TX>

            {contentSections.map((s, i) => (
              <View
                key={i}
                onLayout={(e) => {
                  if (pendingScrollIx === i) {
                    scrollRef.current?.scrollTo({ y: Math.max(0, e.nativeEvent.layout.y - 16), animated: true });
                    setPendingScrollIx(null);
                  }
                }}
                style={
                  highlightIx === i
                    ? { borderRadius: 18, borderWidth: 1.5, borderColor: t.accA(40), backgroundColor: t.accA(5), padding: 10 }
                    : undefined
                }
              >
                <SectionView s={s} onPlay={play} playingId={playingId} onGrade={gradeItem} graded={gradedIds} />
              </View>
            ))}

            <Press cue={null} onPress={startQuiz} style={{ minHeight: 56, paddingVertical: 6, borderRadius: 28, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="bodyLg" color={t.accInk}>
                {quiz.length > 0 ? T.startQuiz : T.lessonDone}
              </TX>
            </Press>
          </View>
        ) : null}

        {phase === 'quiz' && quiz.length > 0 ? (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
              <TX font="semi" role="meta" ls={2.6} color={t.accTx}>QUIZ</TX>
              <TX role="label" color={t.txMuted}>{quizIx + 1} / {quiz.length}</TX>
            </View>
            <TX font="serif" size={26} role="display" lhMult={1.27} style={{ marginBottom: 24, minHeight: 66 }}>
              {quiz[quizIx].q}
            </TX>
            <View style={{ gap: 10, marginBottom: 18 }}>
              {quiz[quizIx].opts.map((o, i) => {
                const answered = quizSel !== null;
                const isCorrect = i === quiz[quizIx].correct;
                const isSel = quizSel === i;
                const border = answered ? (isCorrect ? t.acc : isSel ? t.danger : t.line(9)) : t.line(9);
                const bg = answered && isCorrect ? t.accA(10) : answered && isSel && !isCorrect ? t.dangerA(10) : t.card;
                const color = answered && isSel && !isCorrect ? t.danger : t.txPrimary;
                return (
                  <Press key={i} cue={null} onPress={() => quizPick(i)} style={{ minHeight: 58, borderRadius: 16, borderWidth: 1.5, borderColor: border, backgroundColor: bg, justifyContent: 'center', paddingHorizontal: 18, paddingVertical: 12 }}>
                    <TX font="med" role="bodyLg" color={color}>{o}</TX>
                  </Press>
                );
              })}
            </View>
            {/* Explain the answer when the content provides one. */}
            {quizSel !== null && quiz[quizIx].why ? (
              <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), padding: 14, marginBottom: 18 }}>
                <TX role="label" color={t.txSecondary} lhMult={1.5}>{quiz[quizIx].why}</TX>
              </View>
            ) : null}
            {quizSel !== null ? (
              <Press cue={null} onPress={quizNext} style={{ minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <TX font="semi" role="body" color={t.accInk}>{T.qNext}</TX>
              </Press>
            ) : null}
          </View>
        ) : null}

        {phase === 'done' ? (
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            {pass ? (
              <Badge label={T.quizPassed} color={t.acc} bg="transparent" style={{ minHeight: 34, paddingVertical: 6, paddingHorizontal: 18, borderRadius: 17, borderWidth: 1.5, borderColor: t.acc, justifyContent: 'center', marginBottom: 20, transform: [{ rotate: '-3deg' }] }} />
            ) : (
              <TX font="semi" role="label" ls={2} color={t.txMuted} style={{ marginBottom: 20 }}>{T.quizFailed}</TX>
            )}
            <TX font="serif" size={64} role="display" color={t.accTx}>
              {quizScore} / {quiz.length}
            </TX>
            <TX font="serifI" size={24} role="display" style={{ marginTop: 12, marginBottom: 34 }}>
              {L.title}
            </TX>
            {pass ? (
              <Press cue={null} onPress={() => { sound.play('tap'); router.back(); }} style={{ minHeight: 52, paddingVertical: 6, paddingHorizontal: 34, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <TX font="semi" role="body" color={t.accInk}>{T.backToDen}</TX>
              </Press>
            ) : null}
            <Press cue={null} onPress={retry} style={{ marginTop: 16 }}>
              <TX role="bodySm" color={t.txMuted}>{T.retry}</TX>
            </Press>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
