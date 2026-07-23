import { useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  View,
  useWindowDimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ViewStyle,
} from 'react-native';
import { TX } from '@/components/Type';
import { Press, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { SectionView } from '@/components/LessonSection';
import { QuizDeckView, type QuizQuestion } from '@/components/LessonRich';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { sound, tts } from '@/services';
import type { LessonSection } from '@/content/schema';

// The swipeable lesson reader. Where the old lesson body was one long vertical
// scroll, this paginates it: a cover slide, one card per section, then — when
// the lesson has an exam — a QUIZ page whose question deck lives inside the
// reader (lessonPager.logic.ts is the tested page model). Each card scrolls
// vertically on its own, with a scroll-more indicator whenever a card's
// content runs past the fold, so a long table never reads as complete when it
// is not.
//
// The screen (app/lesson.tsx) still owns completion logging, the level gate,
// resume tracking, deep-link anchoring and SRS grading — this component
// reaches back through the props it is handed rather than re-implementing any
// of it.

type LessonPagerProps = {
  title: string;
  intro: string;
  sections: LessonSection[];
  onPlay: (id: string, text: string) => void;
  playingId: string | null;
  onGrade: (itemId: string, correct: boolean) => void;
  graded: ReadonlySet<string>;
  /** The exam questions; empty for a quiz-less lesson (no quiz page). */
  quiz: QuizQuestion[];
  onQuizAnswer: (qIndex: number, correct: boolean) => void;
  onQuizComplete: (score: number, total: number) => void;
  /** True once the quiz has been completed this visit — gates the finish CTA. */
  quizDone: boolean;
  /** Completes the lesson (the final page's button, and the result card's). */
  onFinish: () => void;
  finishLabel: string;
  /** Result-card hand-off: restart this lesson from the cover, or open the
   *  next lesson in the curriculum (absent on the last lesson). */
  onRestartLesson?: () => void;
  onNextLesson?: () => void;
  nextTitle?: string;
  /** Deep-link landing: a section index (0-based over `sections`) to open on.
   *  Page 0 is the cover, so the target page is this + 1. */
  initialIndex?: number | null;
  /** A section index to keep visually flagged after a deep-link jump. */
  highlightIndex?: number | null;
  /** Safe-area bottom inset, so the nav bar clears the home indicator. */
  bottomInset: number;
};

/** A card's vertical scroller plus the "there is more below" chevron that
 *  floats over the bottom edge until the learner reaches the end. */
function PageScroll({ children, contentStyle }: { children: React.ReactNode; contentStyle?: ViewStyle }) {
  const t = useTheme();
  const [more, setMore] = useState(false);
  const layoutH = useRef(0);
  const contentH = useRef(0);
  const update = () => setMore(contentH.current > layoutH.current + 24);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        onLayout={(e) => {
          layoutH.current = e.nativeEvent.layout.height;
          update();
        }}
        onContentSizeChange={(_, h) => {
          contentH.current = h;
          update();
        }}
        onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
          const ne = e.nativeEvent;
          setMore(ne.contentOffset.y + ne.layoutMeasurement.height < ne.contentSize.height - 24);
        }}
        scrollEventThrottle={64}
        contentContainerStyle={contentStyle}
      >
        {children}
      </ScrollView>
      {more ? (
        <View
          pointerEvents="none"
          style={{ position: 'absolute', bottom: 6, alignSelf: 'center', width: 28, height: 28, borderRadius: 14, backgroundColor: t.alpha(t.bgDeep, 35), alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name="chevronDown" size={15} color={t.txSecondary} strokeWidth={2} />
        </View>
      ) : null}
    </View>
  );
}

export function LessonPager({
  title,
  intro,
  sections,
  onPlay,
  playingId,
  onGrade,
  graded,
  quiz,
  onQuizAnswer,
  onQuizComplete,
  quizDone,
  onFinish,
  finishLabel,
  onRestartLesson,
  onNextLesson,
  nextTitle,
  initialIndex,
  highlightIndex,
  bottomInset,
}: LessonPagerProps) {
  const t = useTheme();
  const T = useT();
  const { width } = useWindowDimensions();
  const ref = useRef<ScrollView>(null);
  const [page, setPage] = useState(0);
  // Cover (0) + one page per section + the quiz page when the lesson has one.
  const hasQuiz = quiz.length > 0;
  const pageCount = sections.length + 1 + (hasQuiz ? 1 : 0);
  const lastPage = pageCount - 1;
  const quizPage = hasQuiz ? lastPage : -1;

  // Guided narration: landing on a card auto-speaks its authored `say` script
  // (English scaffolding, en-US voice). Session-scoped toggle, on by default;
  // the speaker button mutes it, the replay button re-performs the card.
  const [narrOn, setNarrOn] = useState(true);
  const say = page > 0 && page <= sections.length ? sections[page - 1]?.say : undefined;
  useEffect(() => {
    if (!narrOn || !say) return;
    // A beat after the swipe settles, so the card is visually there before the
    // voice starts and a fast swipe-through never queues stale narration.
    const h = setTimeout(() => tts.speak(say, { lang: 'en-US' }), 400);
    return () => {
      clearTimeout(h);
      tts.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, narrOn]);
  const toggleNarr = () => {
    sound.play('tap');
    setNarrOn((v) => {
      if (v) tts.stop();
      return !v;
    });
  };
  const replay = () => {
    if (!say) return;
    sound.play('tap');
    tts.speak(say, { lang: 'en-US' });
  };

  // Deep-link jump, once, after the pager knows its width. requestAnimationFrame
  // defers the scroll to after the first paint so the offset lands on a laid-out
  // content view rather than a zero-width one.
  const didInit = useRef(false);
  const onLayout = () => {
    if (didInit.current) return;
    didInit.current = true;
    if (initialIndex != null && initialIndex >= 0) {
      const target = Math.min(lastPage, initialIndex + 1);
      requestAnimationFrame(() => {
        ref.current?.scrollTo({ x: target * width, animated: false });
        setPage(target);
      });
    }
  };

  // Keep the current page aligned when the width changes (rotation, font-scale
  // driven relayout): re-pin to page * width without animation.
  useEffect(() => {
    if (didInit.current) ref.current?.scrollTo({ x: page * width, animated: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(lastPage, i));
    if (clamped === page) return;
    sound.play('flip');
    ref.current?.scrollTo({ x: clamped * width, animated: true });
    setPage(clamped);
  };

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const p = Math.round(e.nativeEvent.contentOffset.x / width);
    if (p !== page) setPage(p);
  };

  // A card's voice belongs to that card. The narration effect above stops it
  // when `page` settles on a new value, but that fires only at momentum END —
  // the voice would keep talking across the whole swipe transition. Killing it
  // the instant the learner starts dragging the pager makes leaving the card
  // and silencing it the same gesture. (Inner decks and vertical scrolling
  // never reach this handler, so reading around a card stays narrated.)
  const onDragStart = () => tts.stop();

  const onFirst = page === 0;
  const onLast = page === lastPage;
  // On the quiz page the lesson can only finish once the quiz is done; the
  // result card inside the deck carries its own finish button too.
  const finishBlocked = onLast && hasQuiz && !quizDone;

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      {/* Progress + position */}
      <View style={{ paddingHorizontal: 24, paddingBottom: 14 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <TX font="semi" role="meta" ls={2} color={t.txSubtle}>
            {onFirst ? T.lessonOverview : page === quizPage ? T.quizWord : `${page} / ${sections.length}`}
          </TX>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
            {say && narrOn ? (
              <Press cue={null} onPress={replay} hitSlop={8} accessibilityLabel={T.lessonReplay}>
                <Icon name="restart" size={15} color={t.txSubtle} strokeWidth={1.8} />
              </Press>
            ) : null}
            <Press cue={null} onPress={toggleNarr} hitSlop={8} accessibilityLabel={T.lessonNarration}>
              <Icon name="speaker" size={16} color={narrOn ? t.accTx : t.txNonText} strokeWidth={1.8} />
            </Press>
            <TX role="meta" color={t.txSubtle}>{page + 1} / {pageCount}</TX>
          </View>
        </View>
        <ProgressBar pct={(page / lastPage) * 100} height={4} color={t.acc} track={t.line(10)} />
      </View>

      {/* Swipeable cards */}
      <ScrollView
        ref={ref}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        onScrollBeginDrag={onDragStart}
        onMomentumScrollEnd={onMomentumEnd}
        style={{ flex: 1 }}
      >
        {/* Cover */}
        <View style={{ width }}>
          <PageScroll contentStyle={{ paddingHorizontal: 24, paddingTop: 20, paddingBottom: 30, flexGrow: 1, justifyContent: 'center' }}>
            <TX font="serif" size={38} role="display" style={{ marginBottom: 16 }}>
              {title}
            </TX>
            <TX role="body" color={t.txSecondary} lhMult={1.6}>
              {intro}
            </TX>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 26 }}>
              <TX font="semi" role="label" ls={1.6} color={t.accTx}>{T.lessonSwipeHint}</TX>
              <Icon name="chevronRight" size={14} color={t.accTx} strokeWidth={1.8} />
            </View>
          </PageScroll>
        </View>

        {/* One card per section */}
        {sections.map((s, i) => {
          const highlighted = highlightIndex === i;
          return (
            <View key={i} style={{ width }}>
              <PageScroll contentStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 24 }}>
                <View
                  style={
                    highlighted
                      ? { borderRadius: 18, borderWidth: 1.5, borderColor: t.accA(40), backgroundColor: t.accA(5), padding: 10 }
                      : undefined
                  }
                >
                  <SectionView s={s} onPlay={onPlay} playingId={playingId} onGrade={onGrade} graded={graded} />
                </View>
              </PageScroll>
            </View>
          );
        })}

        {/* The quiz page */}
        {hasQuiz ? (
          <View style={{ width }}>
            <PageScroll contentStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 24 }}>
              <TX font="semi" role="meta" ls={2.4} color={t.accTx} style={{ marginBottom: 10 }}>
                {T.quizWord}
              </TX>
              <QuizDeckView
                questions={quiz}
                onAnswer={onQuizAnswer}
                onComplete={onQuizComplete}
                onFinish={onFinish}
                finishLabel={finishLabel}
                onRestart={onRestartLesson}
                onNextLesson={onNextLesson}
                nextTitle={nextTitle}
              />
            </PageScroll>
          </View>
        ) : null}
      </ScrollView>

      {/* Prev / Next nav */}
      <View
        style={{
          flexDirection: 'row',
          gap: 12,
          paddingHorizontal: 24,
          paddingTop: 12,
          paddingBottom: bottomInset + 12,
          borderTopWidth: 1,
          borderTopColor: t.line(8),
        }}
      >
        <Press
          cue={null}
          onPress={onFirst ? undefined : () => goTo(page - 1)}
          style={{
            minHeight: 52,
            paddingHorizontal: 20,
            borderRadius: 26,
            borderWidth: 1.5,
            borderColor: t.line(12),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            opacity: onFirst ? 0.35 : 1,
          }}
        >
          <Icon name="chevronLeft" size={15} color={t.txSecondary} strokeWidth={1.8} />
          <TX font="semi" role="body" color={t.txSecondary}>{T.lessonPrev}</TX>
        </Press>

        <Press
          cue={null}
          onPress={onLast ? (finishBlocked ? undefined : onFinish) : () => goTo(page + 1)}
          style={{
            flex: 1,
            minHeight: 52,
            borderRadius: 26,
            backgroundColor: t.acc,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            opacity: finishBlocked ? 0.35 : 1,
          }}
        >
          <TX font="semi" role="bodyLg" color={t.accInk}>{onLast ? finishLabel : T.lessonNext}</TX>
          {onLast ? null : <Icon name="chevronRight" size={15} color={t.accInk} strokeWidth={2} />}
        </Press>
      </View>
    </View>
  );
}
