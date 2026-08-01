// Checkpoints, rest points, recaps and the warm-back — the screens that make
// a 241-screen lesson feel like six short ones.
//
// The architecture doc is specific about tone and it is worth honouring
// exactly: one line of text, a progress bar, continue or stop. No confetti, no
// streak, no badge. A celebration every eleven minutes stops meaning anything,
// and the reward for finishing an act is knowing where you are.
//
// All arithmetic (which act, what it releases, where to resume) is in
// acts.logic.ts and tested there.

import { useState } from 'react';
import { View } from 'react-native';
import { TX } from '@/components/Type';
import { Button, Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { sound } from '@/services';
import { checkAnswer } from '@/content/answer.logic';
import type { Checkpoint } from '@/content/acts.logic';
import type { LessonAct, LessonSection, QuizQuestion } from '@/content/schema';

/* ─── Act checkpoint ──────────────────────────────────────────────────────── */

export function ActCheckpointCard({
  checkpoint,
  onContinue,
  onStop,
  nextActTitle,
}: {
  checkpoint: Checkpoint;
  onContinue: () => void;
  onStop: () => void;
  nextActTitle?: string;
}) {
  const t = useTheme();
  const { act, actIndex, progress, releases, isFinal } = checkpoint;

  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 28, gap: 22 }}>
      <View style={{ gap: 10 }}>
        <TX role="eyebrow" font="med" color={t.txMuted} ls={0.8} style={{ textTransform: 'uppercase' }}>
          {isFinal ? 'Lesson complete' : `Act ${actIndex + 1}`}
        </TX>
        {/* The milestone. One line, authored, and the only congratulation. */}
        <TX role="titleLg" font="semi" style={{ lineHeight: 29 }}>{act.milestone}</TX>
      </View>

      {/* A 3px bar, no step counter: "4 of 17" turns a lesson into a form.
          Sighted learners read progress off the bar's width; a screen reader
          gets nothing from it, so the percentage is spoken instead. That is
          not the step counter this deliberately avoids — it is the same
          information the bar already carries, in the only form speech has. */}
      <View
        accessibilityRole="progressbar"
        accessibilityLabel={`${Math.round(progress * 100)} percent through the lesson`}
        style={{ height: 3, borderRadius: 2, backgroundColor: t.line(8) }}
      >
        <View style={{ height: 3, borderRadius: 2, width: `${Math.round(progress * 100)}%`, backgroundColor: t.acc }} />
      </View>

      {releases.length ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}>
          <Icon name="restart" size={15} color={t.txNonText} />
          <TX role="bodySm" color={t.txMuted}>
            {releases.length} {releases.length === 1 ? 'word' : 'words'} added to your review
          </TX>
        </View>
      ) : null}

      <View style={{ flex: 1 }} />

      <View style={{ gap: 10 }}>
        <Button
          label={isFinal ? 'Finish' : nextActTitle ? `Continue: ${nextActTitle}` : 'Continue'}
          onPress={() => {
            sound.play('tap');
            onContinue();
          }}
        />
        {!isFinal ? (
          <Press
            cue="tap"
            onPress={onStop}
            accessibilityRole="button"
            accessibilityLabel="Stop here"
            accessibilityHint="Leaves the lesson, keeping your place"
            style={{ alignItems: 'center', paddingVertical: 12 }}
          >
            <TX role="body" color={t.txSecondary}>Stop here</TX>
          </Press>
        ) : null}
      </View>
    </View>
  );
}

/* ─── Rest point ──────────────────────────────────────────────────────────── */

/** A mid-act stopping place. Deliberately quieter than a checkpoint: it saves
 *  and offers an exit without the milestone language reserved for act ends. */
export function RestPointCard({
  actTitle,
  onContinue,
  onStop,
}: {
  actTitle: string;
  onContinue: () => void;
  onStop: () => void;
}) {
  const t = useTheme();
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 28, gap: 18 }}>
      <TX role="eyebrow" font="med" color={t.txMuted} ls={0.8} style={{ textTransform: 'uppercase' }}>
        {actTitle}
      </TX>
      <TX role="title" style={{ lineHeight: 26 }}>Saved. Carry on when you are ready.</TX>
      <View style={{ flex: 1 }} />
      <View style={{ gap: 10 }}>
        <Button label="Continue" onPress={() => { sound.play('tap'); onContinue(); }} />
        <Press
          cue="tap"
          onPress={onStop}
          accessibilityRole="button"
          accessibilityLabel="Stop here"
          accessibilityHint="Leaves the lesson, keeping your place"
          style={{ alignItems: 'center', paddingVertical: 12 }}
        >
          <TX role="body" color={t.txSecondary}>Stop here</TX>
        </Press>
      </View>
    </View>
  );
}

/* ─── Resume recap ────────────────────────────────────────────────────────── */

/** The one screen a returning learner sees before dropping back in.
 *
 *  Built from the section TITLES of the act so far rather than authored
 *  separately, so it cannot go stale when a section is added or renamed. */
export function ResumeRecapCard({
  act,
  sectionsSoFar,
  onContinue,
}: {
  act: LessonAct | null;
  sectionsSoFar: LessonSection[];
  onContinue: () => void;
}) {
  const t = useTheme();
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 28, gap: 20 }}>
      <View style={{ gap: 8 }}>
        <TX role="eyebrow" font="med" color={t.txMuted} ls={0.8} style={{ textTransform: 'uppercase' }}>
          Where you were
        </TX>
        {act ? <TX role="titleLg" font="semi">{act.title}</TX> : null}
      </View>

      <View style={{ gap: 10 }}>
        {sectionsSoFar.map((s, i) => (
          <View key={(s as { id?: string }).id ?? i} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Icon name="check" size={14} color={t.accTx} />
            <TX role="bodySm" color={t.txSecondary} style={{ flex: 1 }}>{s.title}</TX>
          </View>
        ))}
      </View>

      <View style={{ flex: 1 }} />
      <Button label="Pick up where you left off" onPress={() => { sound.play('tap'); onContinue(); }} />
    </View>
  );
}

/* ─── Warm-back ───────────────────────────────────────────────────────────── */

/** Three questions from the act just completed, for a learner returning after
 *  more than three days.
 *
 *  Not scored and not gated: getting one wrong shows the answer and moves on.
 *  The purpose is to reactivate the material, and failing someone at the door
 *  after a week away is the fastest way to make the week permanent. */
export function WarmBackCard({
  act,
  questions,
  onDone,
}: {
  act: LessonAct;
  questions: QuizQuestion[];
  onDone: () => void;
}) {
  const t = useTheme();
  const [ix, setIx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const q = questions[ix];

  if (!q) {
    return (
      <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 28, justifyContent: 'flex-end' }}>
        <Button label="Continue" onPress={onDone} />
      </View>
    );
  }

  const next = () => {
    setPicked(null);
    if (ix >= questions.length - 1) onDone();
    else setIx((i) => i + 1);
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    const ok = checkAnswer(q, i)?.correct ?? false;
    setPicked(i);
    sound.play(ok ? 'success' : 'tap');
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 28, gap: 20 }}>
      <View style={{ gap: 8 }}>
        <TX role="eyebrow" font="med" color={t.txMuted} ls={0.8} style={{ textTransform: 'uppercase' }}>
          Back after a break
        </TX>
        <TX role="body" color={t.txSecondary}>
          Three quick ones from {act.title}, then straight on.
        </TX>
      </View>

      <TX role="title" font="semi" style={{ lineHeight: 27 }}>{q.q}</TX>

      <View style={{ gap: 10 }}>
        {(q.opts ?? []).map((o, i) => {
          const isPicked = picked === i;
          const isRight = typeof q.correct === 'number' && i === q.correct;
          const border = picked === null ? t.line(12) : isRight ? t.accTx : isPicked ? t.danger : t.line(8);
          return (
            <Press
              key={i}
              cue={null}
              onPress={() => pick(i)}
              disabled={picked !== null}
              accessibilityRole="button"
              accessibilityLabel={o}
              accessibilityState={{ selected: isPicked, disabled: picked !== null }}
              accessibilityHint={
                picked === null ? undefined : isRight ? 'Correct answer' : isPicked ? 'Your answer, incorrect' : undefined
              }
              style={{
                borderRadius: 14,
                borderWidth: 1,
                borderColor: border,
                backgroundColor: t.card,
                paddingHorizontal: 16,
                paddingVertical: 13,
                opacity: picked !== null && !isPicked && !isRight ? 0.5 : 1,
              }}
            >
              <TX role="body">{o}</TX>
            </Press>
          );
        })}
      </View>

      {picked !== null ? (
        <>
          {q.why ? <TX role="bodySm" color={t.txSecondary}>{q.why}</TX> : null}
          <View style={{ flex: 1 }} />
          <Button label={ix >= questions.length - 1 ? 'Start' : 'Next'} onPress={next} />
        </>
      ) : (
        <View style={{ flex: 1 }} />
      )}
    </View>
  );
}
