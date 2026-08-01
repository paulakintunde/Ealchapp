// The v2 card types the silent-letter lesson needs and the app did not have.
//
//   SilentLetterGrid   the ending-by-ending verdict table, as a deck in the
//                      flow and the full table in a reference sheet
//   InhibitionDrillView  training the stop: physical routines, with a mic
//   TapSilentCard      tap the letters you do not say
//   ListenChooseCard   hear one word, pick which it was
//   ErrorSpotCard      here is a wrong reading, fix it
//
// The last three are QUESTION FORMATS rather than sections: they appear inside
// the quiz and inside in-flow checks, so they take a question and report a
// verdict rather than owning any progression. Answer checking lives in
// answer.logic.ts and is tested there — these files never compare strings.

import { useMemo, useState } from 'react';
import { View, TextInput } from 'react-native';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { CardFrame, SwipeDeck, useCardHeight } from '@/components/LessonDeck';
import { SilentText } from '@/components/WordCardXL';
import { useTheme } from '@/theme/useTheme';
import { sound } from '@/services';
import { checkAnswer } from '@/content/answer.logic';
import { glyphs } from '@/content/silent.logic';
import type { GridLetter, InhibitionTarget, QuizQuestion } from '@/content/schema';

import type { PlayFn } from '@/components/LessonDeck';

/* ─── Silent letter grid ─────────────────────────────────────────────────── */

/** The verdict badge: what happens to this ending.
 *
 *  Colour-coded, but never colour-ONLY — each carries its word, because a
 *  learner who cannot distinguish the hues still has to be able to read the
 *  table. That is also why the badge is a full outline rather than a coloured
 *  left edge. */
function VerdictBadge({ verdict }: { verdict: NonNullable<GridLetter['verdict']> }) {
  const t = useTheme();
  const tone =
    verdict === 'sounded' ? t.accTx : verdict === 'silent' ? t.txMuted : t.txSecondary;
  const label = verdict === 'sounded' ? 'sounded' : verdict === 'silent' ? 'silent' : 'it depends';
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: t.line(12),
        paddingHorizontal: 9,
        paddingVertical: 3,
      }}
    >
      <TX role="meta" font="med" color={tone}>{label}</TX>
    </View>
  );
}

/** One ending's full card: the letter, its verdict, the rule, and one example
 *  with its silent characters greyed. */
export function SilentLetterRow({
  letter,
  onPlay,
  playingId,
  id,
}: {
  letter: GridLetter;
  onPlay?: PlayFn;
  playingId?: string | null;
  id: string;
}) {
  const t = useTheme();
  const on = playingId === id;
  return (
    <Press
      cue={null}
      onPress={() => onPlay?.(id, letter.ex)}
      accessibilityLabel={`${letter.ch}, ${letter.verdict ?? ''}, ${letter.ex}`}
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(10),
        backgroundColor: t.card,
        padding: 16,
        gap: 10,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <TX role="titleLg" font="semi" style={{ minWidth: 62 }}>{letter.ch}</TX>
        {letter.verdict ? <VerdictBadge verdict={letter.verdict} /> : null}
        <View style={{ flex: 1 }} />
        <Icon name="speaker" size={16} color={on ? t.acc : t.txNonText} />
      </View>

      {letter.rule ? <TX role="bodySm" color={t.txSecondary}>{letter.rule}</TX> : null}

      <View style={{ gap: 3 }}>
        <SilentText fr={letter.ex} silent={letter.silent} font="serifI" role="title" />
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
          {letter.ipa ? <TX role="bodySm" color={t.txSecondary}>{letter.ipa}</TX> : null}
          {letter.respell ? <TX role="bodySm" color={t.txMuted}>{letter.respell}</TX> : null}
        </View>
        {letter.en ? <TX role="bodySm" color={t.txMuted}>{letter.en}</TX> : null}
      </View>

      {letter.exception ? (
        <TX role="meta" color={t.txSubtle}>Exceptions: {letter.exception}</TX>
      ) : null}
      {letter.memo ? <TX role="meta" color={t.txSubtle}>{letter.memo}</TX> : null}
    </Press>
  );
}

/** The grid.
 *
 *  `preview` splits one authored list into two audiences: the rows marked
 *  preview walk the flow one at a time, and the whole list renders as a
 *  scrollable table in the reference sheet. One source, two densities — which
 *  is the point of the layer model, and why the sheet is allowed to be dense
 *  while the flow is not. */
export function SilentLetterGrid({
  letters,
  mode,
  onPlay,
  playingId,
  onOpenSheet,
}: {
  letters: GridLetter[];
  /** 'preview' shows only the flow rows; 'full' shows every row. */
  mode: 'preview' | 'full';
  onPlay?: PlayFn;
  playingId?: string | null;
  /** Opens the reference sheet holding the complete table. */
  onOpenSheet?: () => void;
}) {
  const t = useTheme();
  const shown = mode === 'preview' ? letters.filter((l) => l.preview) : letters;
  const hidden = letters.length - shown.length;

  return (
    <View style={{ gap: 12 }}>
      {shown.map((l, i) => (
        <SilentLetterRow key={`${l.ch}-${i}`} letter={l} id={`grid-${l.ch}-${i}`} onPlay={onPlay} playingId={playingId} />
      ))}
      {mode === 'preview' && hidden > 0 && onOpenSheet ? (
        <Press
          cue="tap"
          onPress={onOpenSheet}
          accessibilityRole="button"
          accessibilityLabel={`See all ${letters.length} endings`}
          accessibilityHint="Opens the reference sheet"
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 14 }}
        >
          <TX role="body" font="med" color={t.accTx}>See all {letters.length} endings</TX>
          <Icon name="chevronRight" size={15} color={t.accTx} />
        </Press>
      ) : null}
    </View>
  );
}

/* ─── Inhibition drill ───────────────────────────────────────────────────── */

/** Training the stop.
 *
 *  Unlike pronunciationLab there is no mouth position to teach, so each target
 *  is a numbered physical routine the learner PERFORMS. That is exactly why it
 *  cannot be a stack: three routines of four or five steps is fourteen
 *  instructions on one screen, which reads as a wall and gets skimmed rather
 *  than done. One routine per full-height card, swiped, is the same content at
 *  the pace the body can actually follow.
 *
 *  The closing line gets its own card for the same reason. It is the reflex
 *  the whole mission is building toward ("do this on the first three French
 *  words you see tomorrow"), and squeezed under the last target's step four it
 *  reads as a footnote to that step instead of the takeaway. */
export function InhibitionDrillView({
  intro,
  targets,
  closing,
  onPlay,
  playingId,
  renderMic,
}: {
  intro?: string;
  targets: InhibitionTarget[];
  closing?: { text: string };
  onPlay?: PlayFn;
  playingId?: string | null;
  /** The mic row for one target, supplied by the caller so this component
   *  stays free of the speech service and remains testable. */
  renderMic?: (target: InhibitionTarget, index: number) => React.ReactNode;
}) {
  // Cards: an optional opener, one per routine, then the closing reflex.
  type Card =
    | { kind: 'intro'; text: string }
    | { kind: 'target'; target: InhibitionTarget; index: number }
    | { kind: 'closing'; text: string };

  const cards: Card[] = [
    ...(intro ? [{ kind: 'intro' as const, text: intro }] : []),
    ...targets.map((target, index) => ({ kind: 'target' as const, target, index })),
    ...(closing ? [{ kind: 'closing' as const, text: closing.text }] : []),
  ];

  return (
    <SwipeDeck
      items={cards}
      hint="Do each one out loud before you swipe."
      keyFor={(c, i) => (c.kind === 'target' ? c.target.label : `${c.kind}-${i}`)}
      renderItem={(c) => {
        if (c.kind === 'intro') return <InhibitionIntroCard text={c.text} />;
        if (c.kind === 'closing') return <InhibitionClosingCard text={c.text} />;
        return (
          <InhibitionTargetCard
            target={c.target}
            index={c.index}
            total={targets.length}
            onPlay={onPlay}
            playingId={playingId}
            renderMic={renderMic}
          />
        );
      }}
    />
  );
}

/** The card every routine shares.
 *
 *  Sized against the real viewport rather than a fixed 460, and scrolling
 *  inside itself when a five-step routine at a large font scale does not fit.
 *  A fixed height here pushed the deck's dots and the page's own controls
 *  below the fold on shorter phones. */
function DrillCardShell({ children }: { children: React.ReactNode }) {
  // Chrome on this mission: pager header, section eyebrow, term chips, the
  // deck hint row, the dots row, page padding.
  const h = useCardHeight(300);
  return (
    <CardFrame height={h}>
      <View style={{ gap: 16, flex: 1 }}>{children}</View>
    </CardFrame>
  );
}

function InhibitionIntroCard({ text }: { text: string }) {
  const t = useTheme();
  return (
    <DrillCardShell>
      <TX role="eyebrow" font="med" color={t.txMuted} ls={1.4} style={{ textTransform: 'uppercase' }}>
        Why this is physical
      </TX>
      <TX role="titleSm" color={t.txSecondary} style={{ lineHeight: 27 }}>{text}</TX>
    </DrillCardShell>
  );
}

/** One routine, full height. The steps are the content, so they get the space:
 *  numbered, generously spaced, and never competing with another routine. */
function InhibitionTargetCard({
  target,
  index,
  total,
  onPlay,
  playingId,
  renderMic,
}: {
  target: InhibitionTarget;
  index: number;
  total: number;
  onPlay?: PlayFn;
  playingId?: string | null;
  renderMic?: (target: InhibitionTarget, index: number) => React.ReactNode;
}) {
  const t = useTheme();
  return (
    <DrillCardShell>
      <View style={{ gap: 6 }}>
        <TX role="eyebrow" font="med" color={t.txMuted} ls={1.4} style={{ textTransform: 'uppercase' }}>
          Drill {index + 1} of {total}
        </TX>
        <TX role="titleLg" font="semi">{target.label}</TX>
        {target.sub ? <TX role="bodySm" color={t.txMuted}>{target.sub}</TX> : null}
      </View>

      <View style={{ gap: 14, flex: 1 }}>
        {target.steps.map((step, si) => (
          <View key={si} style={{ flexDirection: 'row', gap: 13 }}>
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: t.line(14),
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 1,
              }}
            >
              <TX role="meta" font="med" color={t.txSecondary}>{si + 1}</TX>
            </View>
            <TX role="body" color={t.txSecondary} style={{ flex: 1, lineHeight: 23 }}>{step}</TX>
          </View>
        ))}
      </View>

      {target.mic && renderMic ? renderMic(target, index) : null}
    </DrillCardShell>
  );
}

/** The closing reflex, on its own card.
 *
 *  This is the instruction the learner takes out of the app and into the
 *  street, which is the whole point of an inhibition drill: the reflex is
 *  built by repetition in the world, not by finishing a screen. */
function InhibitionClosingCard({ text }: { text: string }) {
  const t = useTheme();
  return (
    <DrillCardShell>
      <TX role="eyebrow" font="med" color={t.accTx} ls={1.4} style={{ textTransform: 'uppercase' }}>
        Take this with you
      </TX>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TX role="titleLg" font="semi" style={{ lineHeight: 32 }}>{text}</TX>
      </View>
    </DrillCardShell>
  );
}

/* ─── tapSilent ──────────────────────────────────────────────────────────── */

/** Tap the letters you do not say.
 *
 *  The word renders as individual letter targets. Multi-letter answers ('ent')
 *  need several taps, and order does not matter — see tapSilentCorrect. */
export function TapSilentCard({
  question,
  onAnswer,
}: {
  question: QuizQuestion;
  onAnswer?: (correct: boolean) => void;
}) {
  const t = useTheme();
  const word = question.word ?? '';
  const letters = useMemo(() => glyphs(word), [word]);
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);

  const expected = typeof question.correct === 'string' ? question.correct : '';
  // How many taps the answer needs, so the card knows when to auto-check.
  const needed = useMemo(() => new Set(expected.toLowerCase().split('')).size, [expected]);

  const toggle = (i: number) => {
    if (checked !== null) return;
    sound.play('tap');
    setPicked((p) => {
      const next = p.includes(i) ? p.filter((x) => x !== i) : [...p, i];
      if (next.length === needed) {
        const res = checkAnswer(question, next.map((ix) => letters[ix].ch));
        const ok = res?.correct ?? false;
        setChecked(ok);
        sound.play(ok ? 'success' : 'error');
        onAnswer?.(ok);
      }
      return next;
    });
  };

  return (
    <View style={{ gap: 18 }}>
      <TX role="titleLg" font="semi">{question.q}</TX>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {letters.map((g, i) => {
          const on = picked.includes(i);
          const border = checked === null ? (on ? t.acc : t.line(12)) : on ? (checked ? t.accTx : t.danger) : t.line(8);
          return (
            <Press
              key={`${i}-${g.ch}`}
              cue={null}
              onPress={() => toggle(i)}
              disabled={checked !== null || g.ch === ' '}
              // The entire task is "which letters did you mark silent", and
              // being marked was communicated only by a border colour.
              accessibilityRole="checkbox"
              accessibilityLabel={g.ch}
              accessibilityState={{ checked: on, disabled: checked !== null || g.ch === ' ' }}
              style={{
                minWidth: 46,
                height: 58,
                paddingHorizontal: 6,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: g.ch === ' ' ? 'transparent' : border,
                backgroundColor: on ? t.accA(10) : g.ch === ' ' ? 'transparent' : t.card,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX role="titleLg" font="semi" color={on ? t.accTx : t.txPrimary}>{g.ch}</TX>
            </Press>
          );
        })}
      </View>

      {checked !== null ? (
        <View style={{ gap: 6 }}>
          <TX role="body" font="med" color={checked ? t.accTx : t.danger}>
            {checked ? 'Correct' : `The silent letters are: ${expected}`}
          </TX>
          {question.why ? <TX role="bodySm" color={t.txSecondary}>{question.why}</TX> : null}
        </View>
      ) : (
        <TX role="meta" color={t.txSubtle} center>
          {needed > 1 ? `Tap ${needed} letters` : 'Tap one letter'}
        </TX>
      )}
    </View>
  );
}

/* ─── listenChoose ───────────────────────────────────────────────────────── */

/** Hear one word, pick which it was.
 *
 *  Audio-first by construction: the options are hidden until the clip has been
 *  played at least once. This is the format no mcq can replace, because the
 *  whole question is whether the learner can HEAR a difference, and showing
 *  the spellings first lets the eye answer instead of the ear. */
export function ListenChooseCard({
  question,
  onAnswer,
  onPlay,
  playingId,
  id,
}: {
  question: QuizQuestion;
  onAnswer?: (correct: boolean) => void;
  onPlay?: PlayFn;
  playingId?: string | null;
  id: string;
}) {
  const t = useTheme();
  const [heard, setHeard] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const on = playingId === id;
  const opts = question.opts ?? [];

  const play = () => {
    setHeard(true);
    // The clip is named by the question's audio spec; the caller resolves it
    // to a recording or falls back to TTS on the answer text.
    onPlay?.(id, question.audio?.clip ?? opts[typeof question.correct === 'number' ? question.correct : 0] ?? '');
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    const res = checkAnswer(question, i);
    const ok = res?.correct ?? false;
    setPicked(i);
    sound.play(ok ? 'success' : 'error');
    onAnswer?.(ok);
  };

  return (
    <View style={{ gap: 18 }}>
      <TX role="titleLg" font="semi">{question.q}</TX>

      <Press
        cue={null}
        onPress={play}
        accessibilityLabel="Play the audio"
        style={{ alignSelf: 'center', alignItems: 'center', gap: 12, paddingVertical: 8 }}
      >
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            borderWidth: 1,
            borderColor: on ? t.acc : t.accA(45),
            backgroundColor: on ? t.accA(12) : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="speaker" size={26} color={t.acc} />
        </View>
        <Waveform count={14} height={20} barWidth={3} gap={3} active={on} color={on ? t.acc : t.txNonText} />
      </Press>

      {!heard ? (
        <TX role="meta" color={t.txSubtle} center>Listen first</TX>
      ) : (
        <View style={{ gap: 10 }}>
          {opts.map((o, i) => {
            const isPicked = picked === i;
            const isRight = typeof question.correct === 'number' && i === question.correct;
            const border =
              picked === null ? t.line(12) : isRight ? t.accTx : isPicked ? t.danger : t.line(8);
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
                  paddingVertical: 14,
                  opacity: picked !== null && !isPicked && !isRight ? 0.5 : 1,
                }}
              >
                <TX font="serifI" role="title">{o}</TX>
              </Press>
            );
          })}
        </View>
      )}

      {picked !== null && question.why ? (
        <TX role="bodySm" color={t.txSecondary}>{question.why}</TX>
      ) : null}
    </View>
  );
}

/* ─── errorSpot ──────────────────────────────────────────────────────────── */

/** Here is a wrong reading. Fix it.
 *
 *  Production rather than recognition: the learner types the correction, and
 *  any of the authored accepted forms counts. A near-miss is shown the
 *  canonical answer rather than simply marked wrong. */
export function ErrorSpotCard({
  question,
  onAnswer,
}: {
  question: QuizQuestion;
  onAnswer?: (correct: boolean) => void;
}) {
  const t = useTheme();
  const [text, setText] = useState('');
  const [checked, setChecked] = useState<boolean | null>(null);

  const submit = () => {
    if (checked !== null || !text.trim()) return;
    const res = checkAnswer(question, text);
    const ok = res?.correct ?? false;
    setChecked(ok);
    sound.play(ok ? 'success' : 'error');
    onAnswer?.(ok);
  };

  return (
    <View style={{ gap: 18 }}>
      <TX role="titleLg" font="semi">{question.q}</TX>

      <TextInput
        value={text}
        onChangeText={setText}
        editable={checked === null}
        placeholder="Type the correction"
        placeholderTextColor={t.txSubtle}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={submit}
        style={{
          borderRadius: 14,
          borderWidth: 1,
          borderColor: checked === null ? t.line(12) : checked ? t.accTx : t.danger,
          backgroundColor: t.input,
          paddingHorizontal: 16,
          paddingVertical: 14,
          fontSize: 18,
          color: t.txPrimary,
        }}
      />

      {checked === null ? (
        <Button label="Check" onPress={submit} disabled={!text.trim()} />
      ) : (
        <View style={{ gap: 6 }}>
          <TX role="body" font="med" color={checked ? t.accTx : t.danger}>
            {checked ? 'Correct' : question.answer ?? ''}
          </TX>
          {question.why ? <TX role="bodySm" color={t.txSecondary}>{question.why}</TX> : null}
        </View>
      )}
    </View>
  );
}
