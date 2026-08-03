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
import { View } from 'react-native';
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

      <View style={{ flex: 1, paddingHorizontal: 24, justifyContent: 'center' }}>
        <QuestionCard
          key={`${phase.roundIx}-${phase.questionIx}`}
          question={question}
          id={`q-${phase.roundIx}-${phase.questionIx}`}
          onAnswer={(ok) => record(question, ok)}
          onPlay={onPlay}
          playingId={playingId}
        />
      </View>

      {answered ? (
        <View style={{ paddingHorizontal: 24, paddingBottom: 16, gap: 10 }}>
          {question.ref && onJumpToRef ? (
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
      <TX role="titleLg" font="semi" style={{ lineHeight: 29 }}>{question.q}</TX>
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
 *  about which rule to look at again. */
function ResultCard({
  score,
  pass,
  rounds,
  onFinish,
  finishLabel,
}: {
  score: number;
  pass: boolean;
  rounds: { label: string; score: number }[];
  onFinish?: () => void;
  finishLabel?: string;
}) {
  const t = useTheme();
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 20, gap: 20 }}>
      <View style={{ gap: 6 }}>
        <TX role="display" font="semi">{score}%</TX>
        <TX role="body" color={t.txSecondary}>
          {pass ? 'You have the system.' : 'Worth another pass through the rules.'}
        </TX>
      </View>

      <View style={{ gap: 10 }}>
        {rounds.map((r) => (
          <View key={r.label} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <TX role="bodySm" color={t.txSecondary} style={{ flex: 1 }}>{r.label}</TX>
            <View style={{ width: 90, height: 4, borderRadius: 2, backgroundColor: t.line(8) }}>
              <View style={{ width: `${r.score}%`, height: 4, borderRadius: 2, backgroundColor: r.score >= 60 ? t.acc : t.danger }} />
            </View>
            <TX role="meta" color={t.txMuted} style={{ width: 38, textAlign: 'right' }}>{r.score}%</TX>
          </View>
        ))}
      </View>

      <View style={{ flex: 1 }} />
      {onFinish ? <Button label={finishLabel ?? 'Done'} onPress={onFinish} /> : null}
    </View>
  );
}
