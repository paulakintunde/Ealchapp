// The round-based quiz — Lesson Architecture v2, section 7.
//
// Four rounds of eight, a format mix inside each so no round is eight of the
// same screen, and a remediation drill that fires between rounds when one is
// failed. All sequencing and scoring lives in quizRounds.logic.ts and is
// tested there; this file renders.
//
// The `ref` jump is what makes a wrong answer teach: every question names the
// section that taught it, and a miss offers "see this again", which returns to
// the same question afterwards rather than restarting the round.

import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { TapSilentCard, ListenChooseCard, ErrorSpotCard } from '@/components/SilentCards';
import { useTheme } from '@/theme/useTheme';
import { sound } from '@/services';
import { checkAnswer, isClosedFormat } from '@/content/answer.logic';
import {
  advanceQuiz,
  answerQuestion,
  initialQuizState,
  passed,
  quizProgress,
  roundScore,
  totalScore,
  type QuizConfig,
} from '@/content/quizRounds.logic';
import type { LessonDrill, QuizQuestion } from '@/content/schema';

import type { PlayFn } from '@/components/LessonDeck';

export function QuizRoundsView({
  cfg,
  drills,
  onAnswer,
  onComplete,
  onFinish,
  finishLabel,
  onJumpToRef,
  onPlay,
  playingId,
}: {
  cfg: QuizConfig;
  drills: LessonDrill[];
  /** Per-question, for weak-spot logging. */
  onAnswer?: (question: QuizQuestion, correct: boolean) => void;
  /** Once, when the last round is answered. */
  onComplete?: (score: number, total: number) => void;
  onFinish?: () => void;
  finishLabel?: string;
  /** Opens the section a question refers to, then returns here. */
  onJumpToRef?: (sectionId: string) => void;
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  const t = useTheme();
  const [state, setState] = useState(initialQuizState);
  const [answered, setAnswered] = useState(false);
  const drillById = useMemo(() => new Map(drills.map((d) => [d.id, d])), [drills]);

  const { phase } = state;
  const progress = quizProgress(cfg, state);

  const next = () => {
    setAnswered(false);
    setState((s) => {
      const nextState = advanceQuiz(cfg, s);
      if (nextState.phase.kind === 'result' && s.phase.kind !== 'result') {
        onComplete?.(totalScore(cfg, nextState), progress.total);
      }
      return nextState;
    });
  };

  const record = (q: QuizQuestion, correct: boolean) => {
    setAnswered(true);
    onAnswer?.(q, correct);
    setState((s) => answerQuestion(s, correct));
  };

  if (phase.kind === 'result') {
    return (
      <ResultCard
        score={totalScore(cfg, state)}
        pass={passed(cfg, state)}
        rounds={cfg.rounds.map((r, i) => ({ label: r.label, score: roundScore(cfg, state, i) }))}
        // Under exam conditions nothing was explained as it happened, so the
        // whole teaching payload is handed over here instead. Deferred, not
        // withheld: a1.30.l2 is the only lesson that takes this branch.
        review={
          cfg.exam
            ? cfg.rounds.flatMap((r, ri) =>
                r.questions.map((q, qi) => ({
                  q: q.q,
                  why: q.why,
                  correct: state.answers[ri]?.[qi] === true,
                }))
              )
            : undefined
        }
        onFinish={onFinish}
        finishLabel={finishLabel}
      />
    );
  }

  if (phase.kind === 'drill' || phase.kind === 'retest') {
    const drill = drillById.get(phase.kind === 'drill' ? phase.drillId : (cfg.retestForDrill?.[phase.drillId] ?? phase.drillId));
    return <DrillCard drill={drill} kind={phase.kind} onDone={next} />;
  }

  const round = cfg.rounds[phase.roundIx];
  const question = round?.questions[phase.questionIx];
  if (!round || !question) return null;

  return (
    <View style={{ flex: 1, gap: 16 }}>
      <View style={{ height: 3, backgroundColor: t.line(8) }}>
        <View style={{ height: 3, width: `${Math.round((progress.done / Math.max(1, progress.total)) * 100)}%`, backgroundColor: t.acc }} />
      </View>

      <View style={{ paddingHorizontal: 24 }}>
        <TX role="eyebrow" font="med" color={t.txMuted} ls={0.8} style={{ textTransform: 'uppercase' }}>
          {round.label}
        </TX>
      </View>

      {/* A SCROLLER, not a centred fixed box.
          It was `flex: 1 + justifyContent: 'center'` with nothing to scroll,
          which is fine until the answer is revealed: the card then grows by the
          explanation AND the "See this again" row, outgrows the box, and a
          CENTRED child that overflows spills past BOTH ends at once. That is
          the text overlap on reveal (Paul, device walk) and no line height can
          fix it, because the content is simply taller than the space.

          `flexGrow: 1 + justifyContent: 'center'` on the CONTENT keeps the
          question optically centred while it still fits, and lets it scroll the
          moment it does not. */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 24,
          paddingVertical: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Exam conditions strip the explanation off the COPY handed to the
            card, never off `question` itself: `record` and the weak-spot
            logger behind it identify a question by object identity against
            the flattened round list, so the original has to stay intact. */}
        <QuestionCard
          key={`${phase.roundIx}-${phase.questionIx}`}
          question={cfg.exam ? { ...question, why: undefined } : question}
          id={`q-${phase.roundIx}-${phase.questionIx}`}
          onAnswer={(ok) => record(question, ok)}
          onPlay={onPlay}
          playingId={playingId}
        />
      </ScrollView>

      {answered ? (
        <View style={{ paddingHorizontal: 24, paddingBottom: 16, gap: 10 }}>
          {question.ref && onJumpToRef && !cfg.exam ? (
            <Press
              cue="tap"
              onPress={() => onJumpToRef(question.ref!)}
              accessibilityRole="button"
              accessibilityLabel="See this again"
              accessibilityHint="Opens the mission that taught this"
              hitSlop={8}
              style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 7, paddingVertical: 8 }}
            >
              <Icon name="book" size={15} color={t.accTx} />
              <TX role="bodySm" font="med" color={t.accTx}>See this again</TX>
            </Press>
          ) : null}
          <Button label="Continue" onPress={next} />
        </View>
      ) : null}
    </View>
  );
}

/** Dispatches one question to the renderer its format needs. */
function QuestionCard({
  question,
  id,
  onAnswer,
  onPlay,
  playingId,
}: {
  question: QuizQuestion;
  id: string;
  onAnswer: (correct: boolean) => void;
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  switch (question.format) {
    case 'tapSilent':
      return <TapSilentCard question={question} onAnswer={onAnswer} />;
    case 'listenChoose':
      return <ListenChooseCard question={question} id={id} onAnswer={onAnswer} onPlay={onPlay} playingId={playingId} />;
    case 'errorSpot':
    case 'typeIn':
      return <ErrorSpotCard question={question} onAnswer={onAnswer} />;
    case 'speak':
      return <SpeakQuestionCard question={question} onAnswer={onAnswer} onPlay={onPlay} playingId={playingId} id={id} />;
    case 'mcq':
    default:
      return <McqCard question={question} onAnswer={onAnswer} />;
  }
}

function McqCard({ question, onAnswer }: { question: QuizQuestion; onAnswer: (correct: boolean) => void }) {
  const t = useTheme();
  const [picked, setPicked] = useState<number | null>(null);
  const opts = question.opts ?? [];

  const pick = (i: number) => {
    if (picked !== null) return;
    const ok = checkAnswer(question, i)?.correct ?? false;
    setPicked(i);
    sound.play(ok ? 'success' : 'error');
    onAnswer(ok);
  };

  return (
    <View style={{ gap: 18 }}>
      {/* `title` not `titleLg`, and the regular weight rather than semi.
          A quiz question is a sentence to read, not a headline: at titleLg/semi
          it competed with the options for weight and pushed the card taller,
          which is what made the reveal overflow in the first place. `lineHeight`
          was also absolute and did not scale with the OS font size. */}
      <TX role="title" lhMult={1.4}>{question.q}</TX>
      <View style={{ gap: 10 }}>
        {opts.map((o, i) => {
          const isPicked = picked === i;
          const isRight = typeof question.correct === 'number' && i === question.correct;
          const border = picked === null ? t.line(12) : isRight ? t.accTx : isPicked ? t.danger : t.line(8);
          return (
            <Press
              key={i}
              cue={null}
              onPress={() => pick(i)}
              disabled={picked !== null}
              // Colour alone carries the verdict here: a right answer turns
              // accent, a wrong pick turns danger. A screen reader sees none of
              // that, so the outcome is said in words instead.
              accessibilityRole="button"
              accessibilityLabel={o}
              accessibilityState={{ selected: isPicked, disabled: picked !== null }}
              accessibilityHint={
                picked === null
                  ? undefined
                  : isRight
                    ? 'Correct answer'
                    : isPicked
                      ? 'Your answer, incorrect'
                      : undefined
              }
              style={{
                borderRadius: 14,
                borderWidth: 1,
                borderColor: border,
                backgroundColor: t.card,
                paddingHorizontal: 16,
                paddingVertical: 14,
                opacity: picked !== null && !isPicked && !isRight ? 0.5 : 1,
              }}
            >
              {/* Options wrap: several are full sentences. bodyLg ships 1.45,
                  which is close but sat lines together once an option ran to
                  three. */}
              <TX role="bodyLg" lhMult={1.5}>{o}</TX>
            </Press>
          );
        })}
      </View>
      {picked !== null && question.why ? (
        // `lineHeight: 21` was ABSOLUTE, so it did not grow with the OS font
        // scale: at 1.3x the glyphs outgrew their line box and the explanation
        // overlapped itself. lhMult scales with the text, which is the whole
        // reason TX prefers it (see the note on ROLE in Type.tsx).
        <TX role="bodySm" color={t.txSecondary} lhMult={1.55} style={{ marginTop: 4 }}>
          {question.why}
        </TX>
      ) : null}
    </View>
  );
}

/** Production by voice. Scored by the recogniser, so this card records the
 *  attempt and accepts it: the quiz is not the place to fail someone on an
 *  accent, and the speak drills elsewhere already coach it. */
function SpeakQuestionCard({
  question,
  onAnswer,
  onPlay,
  playingId,
  id,
}: {
  question: QuizQuestion;
  onAnswer: (correct: boolean) => void;
  onPlay?: PlayFn;
  playingId?: string | null;
  id: string;
}) {
  const t = useTheme();
  const [said, setSaid] = useState(false);
  const target = question.target ?? '';

  return (
    <View style={{ gap: 18 }}>
      <TX role="titleLg" font="semi" style={{ lineHeight: 29 }}>{question.q}</TX>
      <Press
        cue={null}
        onPress={() => onPlay?.(id, target)}
        onLongPress={onPlay ? () => onPlay(id, target, null, true) : undefined}
        accessibilityRole="button"
        accessibilityLabel={`Play ${target}`}
        accessibilityHint="Long press for the slow reading"
        style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(10), backgroundColor: t.card, padding: 16, gap: 6 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TX font="serifI" role="title" style={{ flex: 1 }}>{target}</TX>
          <Icon name="speaker" size={16} color={playingId === id ? t.acc : t.txNonText} />
        </View>
        {question.ipa ? <TX role="bodySm" color={t.txSecondary}>{question.ipa}</TX> : null}
      </Press>

      {!said ? (
        <Button
          label="I said it"
          icon="mic"
          onPress={() => {
            setSaid(true);
            sound.play('success');
            onAnswer(true);
          }}
        />
      ) : question.why ? (
        <TX role="bodySm" color={t.txSecondary}>{question.why}</TX>
      ) : null}
    </View>
  );
}

/** A remediation drill between rounds. Deliberately short and framed as help:
 *  the copy never says "you failed", because the learner already knows how the
 *  round went and being told twice does not teach anything. */
function DrillCard({
  drill,
  kind,
  onDone,
}: {
  drill?: LessonDrill;
  kind: 'drill' | 'retest';
  onDone: () => void;
}) {
  const t = useTheme();
  const [answered, setAnswered] = useState<number | null>(null);

  if (!drill) {
    // Nothing to show. Move on rather than stranding the learner.
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <Button label="Continue" onPress={onDone} />
      </View>
    );
  }

  const hasInlineQuestion = !!drill.q && !!drill.opts?.length;

  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 16, gap: 18 }}>
      <TX role="eyebrow" font="med" color={t.txMuted} ls={0.8} style={{ textTransform: 'uppercase' }}>
        {kind === 'retest' ? 'One more time' : 'Quick practice'}
      </TX>
      <TX role="titleLg" font="semi">{drill.title}</TX>
      {drill.coach ? <TX role="body" color={t.txSecondary} style={{ lineHeight: 24 }}>{drill.coach}</TX> : null}

      {drill.pairs?.length ? (
        <View style={{ gap: 8 }}>
          {drill.pairs.map(([a, b], i) => (
            <View
              key={i}
              style={{ flexDirection: 'row', gap: 12, borderRadius: 14, borderWidth: 1, borderColor: t.line(10), backgroundColor: t.card, paddingHorizontal: 16, paddingVertical: 12 }}
            >
              <TX font="serifI" role="titleSm" style={{ flex: 1 }}>{a}</TX>
              <TX font="serifI" role="titleSm" color={t.txMuted} style={{ flex: 1 }}>{b}</TX>
            </View>
          ))}
        </View>
      ) : null}

      {hasInlineQuestion ? (
        <View style={{ gap: 12 }}>
          <TX role="body" font="med">{drill.q}</TX>
          <View style={{ gap: 8 }}>
            {drill.opts!.map((o, i) => {
              const isRight = i === drill.correct;
              const border = answered === null ? t.line(12) : isRight ? t.accTx : answered === i ? t.danger : t.line(8);
              return (
                <Press
                  key={i}
                  cue={null}
                  disabled={answered !== null}
                  onPress={() => {
                    setAnswered(i);
                    sound.play(isRight ? 'success' : 'error');
                  }}
                  accessibilityRole="button"
                  accessibilityLabel={o}
                  accessibilityState={{ selected: answered === i, disabled: answered !== null }}
                  accessibilityHint={
                    answered === null ? undefined : isRight ? 'Correct answer' : answered === i ? 'Your answer, incorrect' : undefined
                  }
                  style={{ borderRadius: 14, borderWidth: 1, borderColor: border, backgroundColor: t.card, paddingHorizontal: 16, paddingVertical: 13 }}
                >
                  <TX role="body">{o}</TX>
                </Press>
              );
            })}
          </View>
          {answered !== null && drill.why ? <TX role="bodySm" color={t.txSecondary}>{drill.why}</TX> : null}
        </View>
      ) : null}

      <View style={{ flex: 1 }} />
      <Button label="Continue" onPress={onDone} disabled={hasInlineQuestion && answered === null} />
    </View>
  );
}

/** The closing card. Per-round scores, because "70%" tells a learner nothing
 *  about which rule to look at again.
 *
 *  The list SCROLLS. It did not need to when a quiz was four rounds and the
 *  card was a fixed box with a spacer, but a1.30.l1 reviews all twenty-nine A1
 *  lessons in one run: twenty-nine rows plus a heading plus a button is taller
 *  than a phone, and the fixed layout silently clipped the tail — the same
 *  overflow-past-a-fixed-box failure the question card above was fixed for.
 *  `review` adds a per-question pass under it, populated only under exam
 *  conditions, where nothing was explained at the time it was answered. */
function ResultCard({
  score,
  pass,
  rounds,
  review,
  onFinish,
  finishLabel,
}: {
  score: number;
  pass: boolean;
  rounds: { label: string; score: number }[];
  review?: { q: string; why?: string; correct: boolean }[];
  onFinish?: () => void;
  finishLabel?: string;
}) {
  const t = useTheme();
  const missed = review?.filter((r) => !r.correct) ?? [];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 20, gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 6 }}>
          <TX role="display" font="semi">{score}%</TX>
          <TX role="body" color={t.txSecondary}>
            {pass ? 'You have the system.' : 'Worth another pass through the rules.'}
          </TX>
        </View>

        <View style={{ gap: 10 }}>
          {rounds.map((r, i) => (
            // Keyed by index, not label: twenty-nine authored labels are
            // unique today, but a duplicate would silently drop a row.
            <View key={`${i}-${r.label}`} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <TX role="bodySm" color={t.txSecondary} style={{ flex: 1 }}>{r.label}</TX>
              <View style={{ width: 90, height: 4, borderRadius: 2, backgroundColor: t.line(8) }}>
                <View style={{ width: `${r.score}%`, height: 4, borderRadius: 2, backgroundColor: r.score >= 60 ? t.acc : t.danger }} />
              </View>
              <TX role="meta" color={t.txMuted} style={{ width: 38, textAlign: 'right' }}>{r.score}%</TX>
            </View>
          ))}
        </View>

        {missed.length ? (
          <View style={{ gap: 14, paddingTop: 4 }}>
            <TX role="eyebrow" font="med" color={t.txMuted} ls={0.8} style={{ textTransform: 'uppercase' }}>
              {missed.length === 1 ? 'The one you missed' : `The ${missed.length} you missed`}
            </TX>
            {missed.map((r, i) => (
              <View key={i} style={{ gap: 4 }}>
                <TX role="bodySm" font="med">{r.q}</TX>
                {r.why ? (
                  <TX role="bodySm" color={t.txSecondary} lhMult={1.55}>{r.why}</TX>
                ) : null}
              </View>
            ))}
          </View>
        ) : null}
      </ScrollView>

      {onFinish ? (
        <View style={{ paddingHorizontal: 24, paddingBottom: 16, paddingTop: 8 }}>
          <Button label={finishLabel ?? 'Done'} onPress={onFinish} />
        </View>
      ) : null}
    </View>
  );
}
