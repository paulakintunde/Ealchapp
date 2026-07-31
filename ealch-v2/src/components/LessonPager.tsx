import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ScrollView,
  View,
  useWindowDimensions,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ViewStyle,
} from 'react-native';
import { TX } from '@/components/Type';
import { Press, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { MissionSectionView } from '@/components/MissionSection';
import { QuizDeckView, RichImage, type QuizQuestion } from '@/components/LessonRich';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { sound, audio } from '@/services';
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
  onPlay: (id: string, text: string, audioRef?: string | null) => void;
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
  /** Fires whenever the current page changes, with the section index (0-based
   *  over `sections`) of a content page, or null while on the cover, an image
   *  page, or the quiz — pages a resume anchor cannot honestly land on. The
   *  screen uses this to keep the lesson's resume position current as the
   *  learner swipes, not just at mount. */
  onIndexChange?: (sectionIx: number | null) => void;
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

/** The persistent, tap-to-play control that replaces auto-narration: it never
 *  starts itself, it stays visible on the page the whole time it is relevant,
 *  and a tap always (re)starts the section's `say` script from the top —
 *  which doubles as "replay" with no separate control needed. */
function ListenChip({ onPress, playing }: { onPress: () => void; playing: boolean }) {
  const t = useTheme();
  const T = useT();
  return (
    <Press
      cue={null}
      onPress={onPress}
      accessibilityLabel={T.lessonListen}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
        height: 37,
        paddingHorizontal: 15,
        borderRadius: 18.5,
        borderWidth: 1,
        borderColor: playing ? t.acc : t.accA(45),
        backgroundColor: playing ? t.accA(12) : 'transparent',
      }}
    >
      <Icon name="speaker" size={16} color={t.acc} />
      <TX font="semi" role="meta" ls={1} color={t.accTx}>{playing ? T.lessonListening : T.lessonListen}</TX>
      {playing ? <Waveform count={8} height={14} barWidth={2.5} gap={2} active color={t.acc} /> : null}
    </Press>
  );
}

// Section types whose body is a horizontal deck or a tall wrapped grid — the
// concrete "an image pushes the interactive content below the fold" cases.
// A section of one of these types that also carries an image gets split into
// two pager pages (image, then content) instead of stacking both vertically
// on one page; every other type keeps the image inline as before (its body is
// short prose or a short list, which never gets pushed meaningfully far).
const HERO_SPLIT_TYPES = new Set<LessonSection['type']>([
  'cardDeck',
  'letterGrid',
  'tapTable',
  'vocabThemes',
  'flashcards',
]);

type PageEntry =
  | { kind: 'cover' }
  | { kind: 'image'; sectionIx: number }
  | { kind: 'section'; sectionIx: number }
  | { kind: 'quiz' };

// How many pages either side of the current one stay mounted. 1 covers every
// page reachable by a single swipe (pagingEnabled snaps one page at a time),
// so content is already there the instant a swipe lands — a lesson the size
// of L'alphabet (30 pages, ~140 cards/rows across it) otherwise mounts all of
// it in one synchronous pass just to show the cover.
const PAGE_WINDOW = 1;

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
  onIndexChange,
  bottomInset,
}: LessonPagerProps) {
  const t = useTheme();
  const T = useT();
  // The window's width, NOT the pager's actual rendered width: on web,
  // AppFrame clips the app to a 430px phone-width column on wider viewports,
  // so paging math must use the pager's own measured layout width (below),
  // falling back to the window width only until that first layout fires.
  const { width: windowWidth } = useWindowDimensions();
  const [width, setWidth] = useState(windowWidth);
  const ref = useRef<ScrollView>(null);
  const [page, setPage] = useState(0);
  const hasQuiz = quiz.length > 0;

  // Cover, then each section contributes one page — or two, image first, when
  // its image would otherwise push a deck/grid below the fold (HERO_SPLIT_TYPES)
  // — then the quiz page when the lesson has one.
  const pages = useMemo<PageEntry[]>(() => {
    const out: PageEntry[] = [{ kind: 'cover' }];
    sections.forEach((s, i) => {
      if (s.imageRef && HERO_SPLIT_TYPES.has(s.type)) out.push({ kind: 'image', sectionIx: i });
      out.push({ kind: 'section', sectionIx: i });
    });
    if (hasQuiz) out.push({ kind: 'quiz' });
    return out;
  }, [sections, hasQuiz]);
  const pageCount = pages.length;
  const lastPage = pageCount - 1;
  const quizPage = hasQuiz ? lastPage : -1;
  const currentEntry = pages[page];
  const currentSection =
    currentEntry?.kind === 'image' || currentEntry?.kind === 'section' ? sections[currentEntry.sectionIx] : undefined;

  // Voice is entirely user-triggered now — nothing here ever auto-starts, so
  // a swipe can never interrupt narration that only exists because the
  // learner asked for it. The Listen chip always (re)starts from the top on
  // tap, which doubles as "replay" with no separate control.
  const [sayPlaying, setSayPlaying] = useState(false);
  const say = currentSection?.say;
  useEffect(() => {
    setSayPlaying(false);
  }, [page]);

  useEffect(() => {
    onIndexChange?.(currentEntry?.kind === 'section' ? currentEntry.sectionIx : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const listen = () => {
    if (!say) return;
    sound.play('tap');
    audio.stop();
    setSayPlaying(true);
    audio.speakItem(
      { fr: say, audioRef: currentSection?.audioRef },
      { lang: 'en-US', onDone: () => setSayPlaying(false), onError: () => setSayPlaying(false) }
    );
  };

  // Deep-link jump, once, after the pager knows its width. requestAnimationFrame
  // defers the scroll to after the first paint so the offset lands on a laid-out
  // content view rather than a zero-width one.
  const didInit = useRef(false);
  const onLayout = (e: LayoutChangeEvent) => {
    const measured = e.nativeEvent.layout.width;
    if (measured && measured !== width) setWidth(measured);
    if (didInit.current) return;
    didInit.current = true;
    if (initialIndex != null && initialIndex >= 0) {
      // Land on the section's CONTENT page, never its (optional) image page.
      const found = pages.findIndex((p) => p.kind === 'section' && p.sectionIx === initialIndex);
      const target = found >= 0 ? found : Math.min(lastPage, initialIndex + 1);
      requestAnimationFrame(() => {
        ref.current?.scrollTo({ x: target * measured, animated: false });
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

  // A card's voice belongs to that card — killing it the instant the learner
  // starts dragging the pager makes leaving the card and silencing it the
  // same gesture. (Inner decks and vertical scrolling never reach this
  // handler, so reading around a card leaves its audio alone.)
  const onDragStart = () => {
    audio.stop();
    setSayPlaying(false);
  };

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
          <TX font="semi" role="meta" ls={2} color={t.accTx}>
            {onFirst
              ? T.lessonOverview
              : page === quizPage
                ? T.quizWord
                : `MISSION ${(currentEntry?.kind === 'image' || currentEntry?.kind === 'section' ? currentEntry.sectionIx : 0) + 1} / ${sections.length}`}
          </TX>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            {say ? <ListenChip onPress={listen} playing={sayPlaying} /> : null}
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
        {pages.map((entry, i) => {
          const key = entry.kind === 'cover' ? 'cover' : entry.kind === 'quiz' ? 'quiz' : `${entry.kind}-${entry.sectionIx}`;

          // Out of the window: an empty same-width spacer. Keeps the
          // ScrollView's total content width (and every scrollTo/paging
          // offset) exactly what it would be with real content there, at
          // near-zero mount cost. Swiping this page back into the window
          // remounts its content fresh — scroll position within it resets,
          // an accepted tradeoff of windowing rather than a bug.
          if (Math.abs(i - page) > PAGE_WINDOW) {
            return <View key={key} style={{ width }} />;
          }

          if (entry.kind === 'cover') {
            return (
              <View key={key} style={{ width }}>
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
            );
          }

          if (entry.kind === 'quiz') {
            return (
              <View key={key} style={{ width }}>
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
            );
          }

          const s = sections[entry.sectionIx];

          // The section's own image page — full-bleed-ish, its own moment,
          // ahead of the deck/grid/table that would otherwise start below the
          // fold on the same page (HERO_SPLIT_TYPES).
          if (entry.kind === 'image') {
            return (
              <View key={key} style={{ width }}>
                <PageScroll contentStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 24, flexGrow: 1, justifyContent: 'center' }}>
                  <RichImage refKey={s.imageRef} ratio={4 / 3} />
                  <TX font="serif" size={28} role="display" lhMult={1.2} style={{ marginTop: 18 }}>{s.title}</TX>
                </PageScroll>
              </View>
            );
          }

          const highlighted = highlightIndex === entry.sectionIx;
          // Its image already got its own page above — the content page must
          // not render it a second time.
          const hasOwnImagePage = !!s.imageRef && HERO_SPLIT_TYPES.has(s.type);
          return (
            <View key={key} style={{ width }}>
              <PageScroll contentStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 24 }}>
                <View
                  style={
                    highlighted
                      ? { borderRadius: 18, borderWidth: 1.5, borderColor: t.accA(40), backgroundColor: t.accA(5), padding: 10 }
                      : undefined
                  }
                >
                  <MissionSectionView s={s} onPlay={onPlay} playingId={playingId} onGrade={onGrade} graded={graded} showHero={!hasOwnImagePage} />
                </View>
              </PageScroll>
            </View>
          );
        })}
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
