// Shared surfaces for the v2 lesson missions: a swipeable card deck, a French
// audio row, and the question modal.
//
// All three exist because of the same finding: several missions were carrying
// their whole content on one screen. A seven-step routine, an eight-word
// vocabulary set and a twelve-card review deck are all things a learner should
// meet ONE AT A TIME, and a modal or a swipe is what makes that possible
// without cutting the material.
//
// The audio row is here rather than in each mission because of the
// architecture doc's baseline rule: every French string in the product is
// playable. Modal content was the gap — a word could be spoken on the card
// behind the modal and silent inside it, which is the wrong way round, since
// the modal is where the learner has stopped to look closely.

import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { LessonModal } from '@/components/LessonModal';
import { SilentText } from '@/components/WordCardXL';
import { useTheme } from '@/theme/useTheme';
import { sound } from '@/services';
import { checkAnswer } from '@/content/answer.logic';
import type { QuizQuestion } from '@/content/schema';

/** Play some French. `slow` asks for the 0.65 comprehension pass, which the
 *  lesson screen resolves against whatever the section authored — so a card
 *  never has to know whether a slow reading exists, only that the learner
 *  long-pressed. The trailing params are optional at every call site. */
export type PlayFn = (id: string, text: string, audioRef?: string | null, slow?: boolean) => void;

/* ─── Card sizing ─────────────────────────────────────────────────────────── */

// The sizing rule lives in hooks/useCardHeight.ts so the lesson-rich views and
// these v2 cards share exactly one definition. Re-exported because most
// callers want the hook and CardFrame together.
export { useCardHeight } from '@/hooks/useCardHeight';

/**
 * A card that fills its allotted height and scrolls INSIDE itself when its
 * content genuinely does not fit (a long routine, a large OS font scale).
 *
 * This is the other half of the responsive-height fix. Letting the PAGE scroll
 * around a fixed card means the card's action moves off-screen; letting the
 * CARD scroll internally means the frame stays put and only the overflowing
 * content moves, so the button below it never leaves the viewport.
 */
export function CardFrame({
  children,
  height,
  padded = true,
  tone = 'card',
  style,
}: {
  children: React.ReactNode;
  height: number;
  padded?: boolean;
  tone?: 'card' | 'plain';
  style?: object;
}) {
  const t = useTheme();
  const [overflows, setOverflows] = useState(false);
  const boxH = useRef(0);

  return (
    <View
      style={[
        {
          height,
          borderRadius: 22,
          borderWidth: tone === 'card' ? 1 : 0,
          borderColor: t.line(10),
          backgroundColor: tone === 'card' ? t.card : 'transparent',
          overflow: 'hidden',
        },
        style,
      ]}
    >
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        // Only scrollable when there is genuinely something below the fold, so
        // a card that fits does not absorb the parent's swipe gesture.
        scrollEnabled={overflows}
        onLayout={(e) => {
          boxH.current = e.nativeEvent.layout.height;
        }}
        onContentSizeChange={(_w, h) => setOverflows(h > boxH.current + 8)}
        contentContainerStyle={{
          padding: padded ? 22 : 0,
          flexGrow: 1,
          // When the content fits, centre it rather than pinning it to the top
          // with dead space beneath.
          justifyContent: overflows ? 'flex-start' : 'center',
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
}

/* ─── French audio row ────────────────────────────────────────────────────── */

/**
 * One French line with a play button. The unit of "every French string is
 * playable", used everywhere a word or phrase appears, including inside
 * modals.
 *
 * Long-press gives the slow (0.65) reading wherever the caller supports it —
 * the architecture doc's rule for every word card in the product.
 */
export function FrenchLine({
  fr,
  ipa,
  respell,
  en,
  silent,
  id,
  onPlay,
  onPlaySlow,
  playingId,
  size = 'md',
  note,
}: {
  fr: string;
  ipa?: string;
  respell?: string;
  en?: string;
  silent?: number[];
  id: string;
  onPlay?: PlayFn;
  onPlaySlow?: PlayFn;
  playingId?: string | null;
  /** 'lg' for a hero line inside a modal, 'md' for a list row. */
  size?: 'lg' | 'md';
  note?: string;
}) {
  const t = useTheme();
  const on = playingId === id;
  const big = size === 'lg';
  const slowFn: PlayFn | undefined =
    onPlaySlow ?? (onPlay ? (i, fr2) => onPlay(i, fr2, null, true) : undefined);

  return (
    <Press
      cue={null}
      onPress={() => onPlay?.(id, fr)}
      // Long-press is the slow reading everywhere in the product, so it comes
      // free from onPlay rather than needing its own prop threaded down. An
      // explicit onPlaySlow still overrides, for callers that speak directly.
      onLongPress={slowFn ? () => slowFn(id, fr) : undefined}
      accessibilityLabel={fr}
      accessibilityHint={slowFn ? 'Long press for the slow reading' : undefined}
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: on ? t.accA(45) : t.line(10),
        backgroundColor: t.card,
        paddingHorizontal: 16,
        paddingVertical: big ? 16 : 13,
        gap: big ? 6 : 3,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <View style={{ flex: 1 }}>
          <SilentText fr={fr} silent={silent} font="serifI" role={big ? 'titleLg' : 'titleSm'} />
        </View>
        <View
          style={{
            width: big ? 44 : 34,
            height: big ? 44 : 34,
            borderRadius: big ? 22 : 17,
            borderWidth: 1,
            borderColor: on ? t.acc : t.accA(40),
            backgroundColor: on ? t.accA(12) : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="speaker" size={big ? 18 : 14} color={t.acc} />
        </View>
      </View>

      {ipa || respell ? (
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
          {ipa ? <TX role="bodySm" color={t.txSecondary}>{ipa}</TX> : null}
          {respell ? <TX role="bodySm" color={t.txMuted}>{respell}</TX> : null}
        </View>
      ) : null}
      {en ? <TX role="bodySm" color={t.txMuted}>{en}</TX> : null}
      {note ? <TX role="meta" color={t.txSubtle} style={{ marginTop: 2 }}>{note}</TX> : null}
      {on ? (
        <View style={{ marginTop: 6 }}>
          <Waveform count={12} height={16} barWidth={3} gap={3} active color={t.acc} />
        </View>
      ) : null}
    </Press>
  );
}

/* ─── Swipeable deck ──────────────────────────────────────────────────────── */

/**
 * A horizontally paged deck: one card per screen, swipe to advance.
 *
 * Used where a mission's content is a SEQUENCE of equal things — steps in a
 * routine, words in a set, cards in a review deck. Stacking them vertically
 * turns "one idea per screen" into "nine ideas per scroll", which is exactly
 * the density failure the architecture is built to prevent, and it is why
 * these missions were restyled.
 */
export function SwipeDeck<T>({
  items,
  renderItem,
  keyFor,
  hint,
  onIndexChange,
}: {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyFor: (item: T, index: number) => string;
  /** One line above the deck: what to do with it. */
  hint?: string;
  onIndexChange?: (index: number) => void;
}) {
  const t = useTheme();
  // MEASURED, never assumed. The deck sits inside a page inset 24px each side,
  // so initialising from useWindowDimensions() made every card 48px too wide:
  // page two started just off-screen and the swipe read as dead. Null until
  // the first layout, and nothing renders before then, because a paging
  // ScrollView whose children are the wrong width silently mis-snaps.
  const [w, setW] = useState<number | null>(null);
  const [ix, setIx] = useState(0);
  const last = useRef(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!w) return;
    const next = Math.round(e.nativeEvent.contentOffset.x / w);
    if (next !== last.current) {
      last.current = next;
      setIx(next);
      onIndexChange?.(next);
      sound.play('flip');
    }
  };

  return (
    <View style={{ gap: 14 }}>
      {hint ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TX role="bodySm" color={t.txMuted} style={{ flex: 1 }}>{hint}</TX>
          <TX role="meta" color={t.txSubtle}>{ix + 1} / {items.length}</TX>
        </View>
      ) : null}

      <View onLayout={(e) => setW(e.nativeEvent.layout.width)}>
        {w ? (
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={32}
            // The parent page is a VERTICAL ScrollView. Without these, Android
            // hands the whole gesture to whichever scroller claims it first
            // and a vertical drag inside a card does nothing at all.
            nestedScrollEnabled
            directionalLockEnabled
            decelerationRate="fast"
          >
            {items.map((item, i) => (
              <View key={keyFor(item, i)} style={{ width: w }}>
                {renderItem(item, i)}
              </View>
            ))}
          </ScrollView>
        ) : null}
      </View>

      <SwipeAffordance index={ix} total={items.length} />
    </View>
  );
}

/** Dots plus a breathing arrow.
 *
 *  The dots say where you are; the arrow says the deck MOVES, which is the
 *  part a static row of dots does not communicate. It animates only while
 *  there is somewhere left to go, so it stops nagging on the last card. */
export function SwipeAffordance({ index, total }: { index: number; total: number }) {
  const t = useTheme();
  const more = index < total - 1;
  const drift = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!more) {
      drift.setValue(0);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(drift, { toValue: 1, duration: 900, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(drift, { toValue: 0, duration: 900, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [drift, more]);

  const x = drift.interpolate({ inputRange: [0, 1], outputRange: [0, 6] });
  const fade = drift.interpolate({ inputRange: [0, 1], outputRange: [0.45, 1] });

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, minHeight: 18 }}>
      <View style={{ flexDirection: 'row', gap: 6 }}>
        {Array.from({ length: total }, (_, i) => (
          <View
            key={i}
            style={{
              width: i === index ? 18 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: i === index ? t.acc : t.line(16),
            }}
          />
        ))}
      </View>
      {more ? (
        <Animated.View style={{ transform: [{ translateX: x }], opacity: fade }}>
          <Icon name="chevronRight" size={15} color={t.accTx} strokeWidth={2} />
        </Animated.View>
      ) : null}
    </View>
  );
}

/* ─── Question modal ──────────────────────────────────────────────────────── */

/**
 * A comprehension question in a modal.
 *
 * Used by the listening and speak missions, where the questions were competing
 * with the passage for the same screen. Opening one at a time means the
 * learner answers about what they heard rather than reading four questions and
 * then listening for the answers, which is a different (easier, less useful)
 * exercise.
 */
export function QuestionModal({
  open,
  question,
  onClose,
  onAnswer,
  onPlay,
  playingId,
  index,
  total,
}: {
  open: boolean;
  question: QuizQuestion | null;
  onClose: () => void;
  /** Reports both the verdict and WHICH option was picked, so a caller that
   *  keeps its own answer map records what the learner actually chose rather
   *  than reconstructing an index from the verdict. */
  onAnswer?: (correct: boolean, pickedIndex: number) => void;
  onPlay?: PlayFn;
  playingId?: string | null;
  index?: number;
  total?: number;
}) {
  const t = useTheme();
  const [picked, setPicked] = useState<number | null>(null);

  const close = () => {
    setPicked(null);
    onClose();
  };

  if (!question) return null;

  const pick = (i: number) => {
    if (picked !== null) return;
    const ok = checkAnswer(question, i)?.correct ?? false;
    setPicked(i);
    sound.play(ok ? 'success' : 'error');
    onAnswer?.(ok, i);
  };

  return (
    <LessonModal open={open} onClose={close} size="sheet">
      <View style={{ gap: 18 }}>
        {index != null && total != null ? (
          <TX role="meta" color={t.txSubtle} ls={0.6} style={{ textTransform: 'uppercase' }}>
            Question {index + 1} of {total}
          </TX>
        ) : null}

        <TX role="titleLg" font="semi" style={{ lineHeight: 29 }}>{question.q}</TX>

        {question.audio ? (
          <Press
            cue={null}
            onPress={() => onPlay?.('qmodal', question.audio?.clip ?? question.q)}
            accessibilityRole="button"
            accessibilityLabel="Play the audio"
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10, alignSelf: 'flex-start' }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                borderWidth: 1,
                borderColor: t.accA(45),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name="speaker" size={18} color={t.acc} />
            </View>
            <Waveform count={12} height={18} barWidth={3} gap={3} active={playingId === 'qmodal'} color={playingId === 'qmodal' ? t.acc : t.txNonText} />
          </Press>
        ) : null}

        <View style={{ gap: 10 }}>
          {(question.opts ?? []).map((o, i) => {
            const isPicked = picked === i;
            const isRight = typeof question.correct === 'number' && i === question.correct;
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
                  paddingVertical: 14,
                  opacity: picked !== null && !isPicked && !isRight ? 0.5 : 1,
                }}
              >
                <TX role="body">{o}</TX>
              </Press>
            );
          })}
        </View>

        {picked !== null && question.why ? (
          <TX role="bodySm" color={t.txSecondary} style={{ lineHeight: 21 }}>{question.why}</TX>
        ) : null}
      </View>
    </LessonModal>
  );
}

/* ─── Term explainer ──────────────────────────────────────────────────────── */

/**
 * A tappable term that opens its own explanation.
 *
 * Jargon a lesson uses more than once ("CaReFuL", "H aspiré", "liaison",
 * "the -er ending") should be explainable at the point of use, every time,
 * without the author repeating the definition on nine cards. The learner who
 * remembers taps nothing; the learner who does not gets the same clear answer
 * wherever they are.
 */
export function TermChip({
  term,
  title,
  body,
  examples,
  onPlay,
  playingId,
}: {
  term: string;
  title: string;
  body: string;
  examples?: { fr: string; ipa?: string; en?: string; silent?: number[] }[];
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  const t = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Press
        cue="tap"
        onPress={() => setOpen(true)}
        accessibilityLabel={`What is ${term}`}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          alignSelf: 'flex-start',
          borderRadius: 999,
          borderWidth: 1,
          borderColor: t.line(14),
          backgroundColor: t.card,
          paddingHorizontal: 11,
          paddingVertical: 5,
        }}
      >
        <TX role="meta" font="med" color={t.accTx}>{term}</TX>
        <Icon name="chevronRight" size={11} color={t.txNonText} />
      </Press>

      <LessonModal open={open} onClose={() => setOpen(false)} size="sheet">
        <View style={{ gap: 16 }}>
          <TX role="titleLg" font="semi">{title}</TX>
          <TX role="body" color={t.txSecondary} style={{ lineHeight: 24 }}>{body}</TX>
          {examples?.length ? (
            <View style={{ gap: 10 }}>
              {examples.map((ex, i) => (
                <FrenchLine
                  key={`${ex.fr}-${i}`}
                  id={`term-${term}-${i}`}
                  fr={ex.fr}
                  ipa={ex.ipa}
                  en={ex.en}
                  silent={ex.silent}
                  onPlay={onPlay}
                  playingId={playingId}
                />
              ))}
            </View>
          ) : null}
        </View>
      </LessonModal>
    </>
  );
}
