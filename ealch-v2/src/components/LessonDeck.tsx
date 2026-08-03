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
  a11yHint,
  onIndexChange,
  onEdgeSwipe,
  active,
  initialIndex,
  fill = false,
}: {
  items: T[];
  renderItem: (item: T, index: number, height: number | null) => React.ReactNode;
  keyFor: (item: T, index: number) => string;
  /** One line above the deck: what to do with it. Costs a row of height for
   *  the life of the deck, so a deck whose cards need every pixel (the XL
   *  word card) should pass `a11yHint` alone instead. */
  hint?: string;
  /** The same instruction, spoken but never drawn.
   *
   *  Defaults to `hint`, so a caller that sets only `hint` keeps today's
   *  behaviour. Set it ALONE to give screen-reader users the instruction
   *  without spending any layout height on it. */
  a11yHint?: string;
  onIndexChange?: (index: number) => void;
  /** Fires when the learner swipes PAST the deck's first or last card — the
   *  gesture that used to do nothing at all. The owner decides what "past the
   *  end" means; in a lesson it is the next or previous mission. */
  onEdgeSwipe?: (dir: 'next' | 'prev') => void;
  /** Is this deck's page the one on screen? False rewinds it to card 1, so a
   *  mission always opens at its first card rather than wherever it was left.
   *  Undefined means "the owner does not track this" and never rewinds. */
  active?: boolean;
  /** Open on this card rather than the first — a resume or deep link landing
   *  inside the mission. 0-based, clamped, and applied ONCE: after that the
   *  deck is the learner's to swipe. */
  initialIndex?: number | null;
  /** Fill the height the parent gives instead of hugging the cards.
   *
   *  Off by default: every existing caller sizes its own cards through
   *  useCardHeight and lays out inside a scrolling page, and making them flex
   *  would collapse them to nothing. On means the parent has already claimed
   *  the viewport (see the pager's ownsLayout) and the deck should hand the
   *  MEASURED leftover height to each card — so whatever sits below the deck
   *  stays on screen rather than being pushed off by a fixed card height. */
  fill?: boolean;
}) {
  const t = useTheme();
  // MEASURED, never assumed. The deck sits inside a page inset 24px each side,
  // so initialising from useWindowDimensions() made every card 48px too wide:
  // page two started just off-screen and the swipe read as dead. Null until
  // the first layout, and nothing renders before then, because a paging
  // ScrollView whose children are the wrong width silently mis-snaps.
  const [w, setW] = useState<number | null>(null);
  // Only used in `fill` mode: the height the row actually got, handed to each
  // card so it sizes against real leftover space rather than a guess at the
  // surrounding chrome.
  const [h, setH] = useState<number | null>(null);
  const [ix, setIx] = useState(0);
  const last = useRef(0);
  const railRef = useRef<ScrollView>(null);

  /** Return to card 1 when this deck's page stops being the one on screen.
   *
   *  PAGE_WINDOW keeps the neighbouring pages MOUNTED, so a deck left at card 6
   *  kept card 6 if the learner stepped back one mission — but reset if they
   *  stepped back two, because that page had been unmounted. Same action, two
   *  different answers, decided by an implementation detail nobody can see.
   *
   *  Resetting makes it predictable in the direction the rest of the lesson
   *  already promises: a mission opens at its first card. The one intentional
   *  exception is `initialIndex`, which a resume passes explicitly and which
   *  runs once on mount before this can fire. */
  useEffect(() => {
    if (active !== false) return;
    if (last.current === 0) return;
    last.current = 0;
    setIx(0);
    if (w) railRef.current?.scrollTo({ x: 0, animated: false });
  }, [active, w]);

  // Land on the requested card once the rail has a real width.
  //
  // It has to wait for `w`: a paging ScrollView measured at 0 snaps every
  // offset to 0, so scrolling before the first layout silently lands on card 1
  // — which looks exactly like the resume having been ignored. Runs once
  // (`jumped`), so the deck is the learner's the moment they touch it.
  const jumped = useRef(false);
  useEffect(() => {
    if (jumped.current || !w || initialIndex == null) return;
    const target = Math.max(0, Math.min(items.length - 1, Math.trunc(initialIndex)));
    if (target <= 0) return;
    jumped.current = true;
    railRef.current?.scrollTo({ x: target * w, animated: false });
    // The scroll is programmatic, so onScroll does not fire for it on every
    // platform. Report the landing ourselves, or the header would say 15.1
    // while the deck shows card 3.
    last.current = target;
    setIx(target);
    onIndexChange?.(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w, initialIndex, items.length]);

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

  /** How far past the last (or before the first) card a drag has to travel
   *  before it counts as "I am trying to leave this deck" rather than a
   *  bounce. A third of a card is past any accidental overshoot and well short
   *  of a deliberate full swipe. */
  const EDGE_HANDOFF = 0.33;

  /** The deck's edges are where the learner's model breaks.
   *
   *  A paging ScrollView simply STOPS at its content edge, so on the last card
   *  another swipe did nothing at all — no movement, no sound, no message. The
   *  learner has just built up seven swipes of momentum, and the rule silently
   *  changes to "now use the button", with only the breathing arrow's absence
   *  as a hint (and that says "no more cards", not "press Next").
   *
   *  So an over-drag at either edge hands off to whatever owns the deck. The
   *  gesture keeps meaning the same thing everywhere in the lesson: swipe moves
   *  you forward.
   *
   *  Read on END DRAG, not on scroll: at the edge the offset is already pinned,
   *  so the only evidence of intent is how far the finger travelled, which is
   *  what `velocity` and the drag's end offset carry. */
  const onEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!w || !onEdgeSwipe) return;
    const ne = e.nativeEvent;
    const maxX = Math.max(0, ne.contentSize.width - ne.layoutMeasurement.width);
    // Android pins the offset at the edge and reports the intent as velocity;
    // iOS lets the content bounce past it. Accept either signal.
    const vx = ne.velocity?.x ?? 0;
    const overStart = ne.contentOffset.x <= 0 && (vx > 0.3 || ne.contentOffset.x < -w * EDGE_HANDOFF);
    const overEnd =
      ne.contentOffset.x >= maxX - 1 && (vx < -0.3 || ne.contentOffset.x > maxX + w * EDGE_HANDOFF);
    if (overEnd && ix >= items.length - 1) onEdgeSwipe('next');
    else if (overStart && ix <= 0) onEdgeSwipe('prev');
  };

  // The hint is instruction, and instruction has a shelf life: it tells you
  // what to do with a deck you have not used yet. Once you have swiped you
  // have demonstrated you know, so it FADES OUT after the first swipe.
  //
  // It fades rather than unmounting, and the row keeps its height either way.
  // Unmounting looks like the bigger win — in `fill` mode the row sits outside
  // the measured box, so dropping it would hand the cards a taller box — but
  // that measurement feeds the card height, and changing it on swipe 0 -> 1
  // resizes every card mid-gesture. A card that jumps while you are dragging
  // it is worse than a card that is one line shorter, and the codebase already
  // holds the opposite line elsewhere ("a card that appears at the right size
  // is better than one that jumps"). So the space is reserved for the life of
  // the deck and only the ink goes away.
  //
  // Reclaiming that row for real means not rendering it on this deck at all,
  // which is the caller's decision to make — see the XL word card, which now
  // passes no hint.
  const hintFade = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (!hint) return;
    Animated.timing(hintFade, {
      toValue: ix === 0 ? 1 : 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [hint, hintFade, ix]);

  return (
    <View style={[{ gap: 14 }, fill ? { flex: 1 } : null]}>
      {hint ? (
        <Animated.View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, opacity: hintFade }}>
          <TX role="bodySm" color={t.txMuted} style={{ flex: 1 }}>{hint}</TX>
        </Animated.View>
      ) : null}

      <View
        // minHeight 0 so this row can SHRINK below its content's natural size.
        // Without it a flex child in RN refuses to go under its content height
        // and the card pushes the rest of the mission off-screen anyway, which
        // is the whole bug.
        style={fill ? { flex: 1, minHeight: 0 } : undefined}
        // The visible hint fades after the first swipe, and the XL deck draws
        // none at all. A screen reader user never "saw" either, so hiding the
        // instruction from the people most reliant on it is the wrong trade:
        // it lives here for the whole life of the deck, costing no height.
        accessibilityHint={a11yHint ?? hint}
        onLayout={(e) => {
          setW(e.nativeEvent.layout.width);
          if (fill) setH(e.nativeEvent.layout.height);
        }}
      >
        {w ? (
          <ScrollView
            ref={railRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            onScrollEndDrag={onEndDrag}
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
                {renderItem(item, i, fill ? h : null)}
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
    <View
      // Dots carry position visually and say nothing to a screen reader. That
      // was survivable while a text counter sat in the hint row above; now
      // that this row is the only statement of position, it has to speak.
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={`Card ${index + 1} of ${total}`}
      accessibilityValue={{ min: 1, max: total, now: index + 1 }}
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, minHeight: 18 }}
    >
      {/* Past ten, dots stop being countable and start being a smear, so the
          position becomes a number instead — the same threshold the lesson
          deck's own footer uses. This row is the ONLY place the deck states
          position now: the hint row above used to carry a duplicate counter
          and a whole line of height with it. */}
      {total <= 10 ? (
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
      ) : (
        <TX role="meta" color={t.txSubtle}>{index + 1} / {total}</TX>
      )}
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

        {/* lhMult, not an absolute lineHeight: an absolute one does not grow
            with the OS font scale, so at a large Dynamic Type setting the
            glyphs outgrow the line box and the explanation overlaps itself.
            Same defect as the one fixed in QuizRoundsView. */}
        {picked !== null && question.why ? (
          <TX role="bodySm" color={t.txSecondary} lhMult={1.55}>{question.why}</TX>
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
