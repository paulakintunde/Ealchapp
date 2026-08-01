// The reading mission, as pages rather than one scroll.
//
// The shape being fixed: a stimulus and its questions were stacked on one
// page. That is worse than ordinary crowding, because the questions are ABOUT
// the stimulus. With both visible the learner scans back and forth and answers
// by pattern-matching against the text rather than from comprehension, which
// is a different and much easier exercise than the one the mission intended.
//
// So: the passage gets its own page, with tappable words that pop their own
// detail. Then the questions get their own, one per swipeable card.

import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { LessonModal } from '@/components/LessonModal';
import { CardFrame, SwipeDeck, useCardHeight } from '@/components/LessonDeck';
import { useTheme } from '@/theme/useTheme';
import { sound } from '@/services';

import type { PlayFn } from '@/components/LessonDeck';

/** A word inside the passage the lesson can say something about. */
export type Glossed = {
  /** The word exactly as it appears in the passage. */
  word: string;
  en: string;
  ipa?: string;
  /** Why this word is here: the rule it demonstrates. */
  note?: string;
};

/* ─── The passage page ────────────────────────────────────────────────────── */

/**
 * The passage, alone on its page, with tappable glossed words.
 *
 * Sentences are individually playable (the lesson declares per-sentence stems
 * for exactly this), so a learner can read along one line at a time rather
 * than replaying a 70-word block to hear the fourth sentence again.
 */
export function PassagePage({
  text,
  glossary,
  onPlay,
  playingId,
  onContinue,
  continueLabel = 'Text understood',
  eyebrow,
}: {
  text: string;
  glossary?: Glossed[];
  onPlay?: PlayFn;
  playingId?: string | null;
  onContinue?: () => void;
  continueLabel?: string;
  eyebrow?: string;
}) {
  const t = useTheme();
  const [open, setOpen] = useState<Glossed | null>(null);

  // Split into sentences so each can be played on its own. The lookbehind
  // keeps the delimiter, so « Merci beaucoup. » stays one unit with its stop.
  const sentences = useMemo(
    () => text.split(/(?<=[.!?»])\s+/).filter((s) => s.trim().length),
    [text]
  );

  const byWord = useMemo(() => {
    const m = new Map<string, Glossed>();
    for (const g of glossary ?? []) m.set(g.word.toLowerCase(), g);
    return m;
  }, [glossary]);

  return (
    <View style={{ flex: 1, gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        {eyebrow ? (
          <TX role="eyebrow" font="med" color={t.txMuted} ls={1.4} style={{ flex: 1, textTransform: 'uppercase' }}>
            {eyebrow}
          </TX>
        ) : (
          <View style={{ flex: 1 }} />
        )}
        <Press
          cue={null}
          onPress={() => onPlay?.('passage', text)}
          accessibilityLabel="Play the whole passage"
          accessibilityRole="button"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 7,
            minHeight: 44,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: t.line(14),
            paddingHorizontal: 14,
          }}
        >
          <Icon name="play" size={12} color={t.txPrimary} />
          <TX role="meta" font="med">Écouter</TX>
        </Press>
      </View>

      {/* The passage itself. Serif, generously leaded: this is the one screen
          in the lesson meant to be READ rather than scanned. */}
      <ScrollView
        style={{ flex: 1 }}
        nestedScrollEnabled
        contentContainerStyle={{
          borderRadius: 20,
          borderWidth: 1,
          borderColor: t.line(10),
          backgroundColor: t.card,
          padding: 22,
        }}
      >
        <TX font="serif" role="titleSm" style={{ lineHeight: 34 }}>
          {sentences.map((sentence, si) => (
            <TX key={si} font="serif" role="titleSm" style={{ lineHeight: 34 }}>
              <Sentence
                sentence={sentence}
                byWord={byWord}
                onWord={(g) => {
                  sound.play('tap');
                  setOpen(g);
                }}
              />
              {si < sentences.length - 1 ? ' ' : ''}
            </TX>
          ))}
        </TX>
      </ScrollView>

      {byWord.size ? (
        <TX role="meta" color={t.txSubtle} center>Tap an underlined word for its translation</TX>
      ) : null}

      {/* Per-sentence replay: what makes reading ALONG with the recording
          possible rather than only listening to it. */}
      <ScrollView horizontal nestedScrollEnabled directionalLockEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
        {sentences.map((s, i) => (
          <Press
            key={i}
            cue={null}
            onPress={() => onPlay?.(`sentence-${i}`, s)}
            accessibilityLabel={`Play sentence ${i + 1}`}
            accessibilityRole="button"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              minHeight: 44,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: playingId === `sentence-${i}` ? t.acc : t.line(12),
              paddingHorizontal: 14,
            }}
          >
            <Icon name="speaker" size={12} color={playingId === `sentence-${i}` ? t.acc : t.txNonText} />
            <TX role="meta" color={t.txMuted}>{i + 1}</TX>
          </Press>
        ))}
      </ScrollView>

      {onContinue ? <Button label={`${continueLabel} →`} onPress={onContinue} /> : null}

      <LessonModal open={!!open} onClose={() => setOpen(null)} size="sheet">
        {open ? (
          <View style={{ gap: 14 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <TX font="serifI" role="display" size={30} style={{ flex: 1 }}>{open.word}</TX>
              <Press
                cue={null}
                onPress={() => onPlay?.('gloss', open.word)}
                accessibilityLabel={`Play ${open.word}`}
                accessibilityRole="button"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  borderWidth: 1,
                  borderColor: t.accA(45),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="speaker" size={19} color={t.acc} />
              </Press>
            </View>
            {open.ipa ? <TX role="body" color={t.txSecondary}>{open.ipa}</TX> : null}
            <TX role="titleSm" color={t.txSecondary}>{open.en}</TX>
            {open.note ? (
              <TX role="bodySm" color={t.txMuted} style={{ lineHeight: 22 }}>{open.note}</TX>
            ) : null}
            {playingId === 'gloss' ? (
              <Waveform count={12} height={16} barWidth={3} gap={3} active color={t.acc} />
            ) : null}
          </View>
        ) : null}
      </LessonModal>
    </View>
  );
}

/** One sentence, with its glossed words underlined and tappable. */
function Sentence({
  sentence,
  byWord,
  onWord,
}: {
  sentence: string;
  byWord: Map<string, Glossed>;
  onWord: (g: Glossed) => void;
}) {
  const t = useTheme();
  // Split on whitespace but keep it, so the passage reflows exactly as written.
  const parts = sentence.split(/(\s+)/);
  return (
    <>
      {parts.map((part, i) => {
        // Punctuation is stripped for the lookup but kept in the output, so
        // "gentil." still matches the entry for "gentil".
        const bare = part.replace(/[.,!?;:«»"']/g, '').toLowerCase();
        const g = byWord.get(bare);
        if (!g) return part;
        const lead = part.match(/^[«"']*/)?.[0] ?? '';
        const trail = part.match(/[.,!?;:»"']*$/)?.[0] ?? '';
        const core = part.slice(lead.length, part.length - trail.length);
        return (
          <TX key={i} font="serif" role="titleSm" style={{ lineHeight: 34 }}>
            {lead}
            <TX
              font="serif"
              role="titleSm"
              color={t.accTx}
              onPress={() => onWord(g)}
              accessibilityLabel={`${core}, tap for translation`}
              style={{ lineHeight: 34, textDecorationLine: 'underline' }}
            >
              {core}
            </TX>
            {trail}
          </TX>
        );
      })}
    </>
  );
}

/* ─── The questions page ──────────────────────────────────────────────────── */

/**
 * Short-answer comprehension, one per swipeable card, after the passage.
 *
 * These are open questions with an authored answer rather than options, so the
 * card is reveal-on-tap: the learner commits to an answer in their head, taps,
 * and checks. Showing the answer inline would make the whole thing a reading
 * comprehension of the answer key.
 */
export function ReadingQuestionsPage({
  questions,
  onBack,
}: {
  questions: { q: string; a: string }[];
  onBack?: () => void;
}) {
  const t = useTheme();
  return (
    <View style={{ flex: 1, gap: 14 }}>
      {onBack ? (
        <Press
          cue="tap"
          onPress={onBack}
          accessibilityLabel="Back to the text"
          accessibilityRole="button"
          style={{ flexDirection: 'row', alignItems: 'center', gap: 7, alignSelf: 'flex-start', minHeight: 44 }}
        >
          <Icon name="arrowLeft" size={15} color={t.txSecondary} />
          <TX role="bodySm" color={t.txSecondary}>Back to the text</TX>
        </Press>
      ) : null}

      <SwipeDeck
        items={questions}
        hint="Answer out loud, then tap to check."
        keyFor={(_q: { q: string; a: string }, i: number) => `rq-${i}`}
        renderItem={(q: { q: string; a: string }, i: number) => (
          <ReadingQuestionCard question={q} index={i} total={questions.length} />
        )}
      />
    </View>
  );
}

function ReadingQuestionCard({
  question,
  index,
  total,
}: {
  question: { q: string; a: string };
  index: number;
  total: number;
}) {
  const t = useTheme();
  const [shown, setShown] = useState(false);
  // Sized to the viewport rather than fixed: the answers run to two or three
  // lines, and a fixed card pushed the deck's dots past the fold on shorter
  // phones so the learner scrolled to find the swipe.
  const h = useCardHeight(280);

  return (
    <Press
      cue="flip"
      onPress={() => {
        sound.play('flip');
        setShown((s) => !s);
      }}
      accessibilityLabel={shown ? `Answer: ${question.a}` : `Question ${index + 1}. ${question.q}. Tap to reveal the answer.`}
      accessibilityRole="button"
    >
      <CardFrame
        height={h}
        style={{
          borderColor: shown ? t.accA(35) : t.line(10),
          backgroundColor: shown ? t.accCard(6) : t.card,
        }}
      >
        <View style={{ gap: 18, flex: 1 }}>
          <TX role="eyebrow" font="med" color={t.txMuted} ls={1.4} style={{ textTransform: 'uppercase' }}>
            Question {index + 1} of {total}
          </TX>

          <TX role="titleLg" font="semi" style={{ lineHeight: 30 }}>{question.q}</TX>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            {shown ? (
              <TX role="titleSm" color={t.accTx} style={{ lineHeight: 28 }}>{question.a}</TX>
            ) : (
              <TX role="bodySm" color={t.txSubtle} center>Touchez pour révéler</TX>
            )}
          </View>
        </View>
      </CardFrame>
    </Press>
  );
}
