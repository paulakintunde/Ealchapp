import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import { QuizRoundsView } from '@/components/QuizRoundsView';
import type { PlayFn } from '@/components/LessonDeck';
import { narrationOf, type LessonAct, type LessonDrill, type LessonSection, type LessonTerm, type QuizQuestion as SchemaQuizQuestion } from '@/content/schema';
import { quizQuestions as flattenRounds } from '@/content/schema';
import { a11yMissionLabel, formatMissionLabel, subCount } from '@/content/subMission.logic';
import type { QuizConfig } from '@/content/quizRounds.logic';

/** The flat index of a question inside a round-based quiz.
 *
 *  `onQuizAnswer` is the screen's weak-spot logger and has always taken a
 *  position in the flat question list. Rounds group the same questions, so
 *  this maps one back to the other rather than changing a callback the
 *  pre-v2 lessons still use. */
function quizIndexOf(cfg: QuizConfig, q: SchemaQuizQuestion): number {
  return flattenRounds({ rounds: cfg.rounds }).indexOf(q);
}

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
  /** How many missions the lesson has in total, for the "MISSION n / N" label.
   *
   *  This is NOT `sections.length`. The pager is handed the teaching sections
   *  with the quiz removed (it renders as its own page), so counting its own
   *  array made the label read n / 20 while the missions hub — which lists the
   *  quiz as a row, tappable and checkable like any other — read n / 21 for the
   *  same section. Two denominators for one lesson reads as a bug to a learner
   *  and there is no way for them to tell which is right.
   *
   *  The hub's model is the honest one: sitting the quiz is work. So the total
   *  comes in from the screen, which can see the unfiltered list. Optional, and
   *  falls back to the old behaviour for any caller that does not pass it. */
  missionTotal?: number;
  /** Maps a `sections` index (this component's filtered list) to the mission
   *  NUMBER the missions hub shows for it — i.e. its 1-based position in the
   *  lesson's full section list, quiz included.
   *
   *  Required for the same reason `missionTotal` is: the quiz is removed from
   *  `sections` but counted as a mission everywhere else, so every section past
   *  it is off by one and the pager has no way to see that from here. Optional,
   *  falling back to the raw index, which is correct for any lesson whose quiz
   *  is last (every pre-v2 lesson). */
  missionNumberOf?: (sectionIx: number) => number;
  /** The lesson's glossary, for the term chips its sections declare. Absent
   *  on every pre-v2 lesson, which simply renders no chips. */
  terms?: Record<string, LessonTerm>;
  /** Opens a reference sheet from a section that previews one. */
  onOpenSheet?: (sheetId: string) => void;
  /** The round-based quiz configuration, when the lesson declares rounds.
   *  Absent on every pre-v2 lesson, which keeps the flat deck below. */
  quizCfg?: QuizConfig | null;
  /** Remediation drills the round engine fires on a failed round. */
  drills?: LessonDrill[];
  /** Opens the section a quiz question refers to, so a wrong answer can offer
   *  "see this again" rather than only a verdict. */
  onJumpToRef?: (sectionId: string) => void;
  /** The lesson's acts. No longer rendered as interstitial pages — they are
   *  kept because an act BOUNDARY is what releases that act's SRS tranche. */
  acts?: LessonAct[];
  /** Fires when the learner finishes an act (reaches its last section, or the
   *  quiz for an act that ends there). The screen releases the tranche. */
  onCheckpointReached?: (actIndex: number) => void;
  onPlay: PlayFn;
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
  /** Deep-link straight to the quiz page (the missions page's quiz row —
   *  the quiz is not section-anchor-addressable, see app/lesson.tsx). No-op
   *  for a quiz-less lesson. */
  initialQuiz?: boolean;
  /** A section index to keep visually flagged after a deep-link jump. */
  highlightIndex?: number | null;
  /** Fires whenever the current page changes, with the section index (0-based
   *  over `sections`) of a content page, or null while on the cover, an image
   *  page, or the quiz — pages a resume anchor cannot honestly land on. The
   *  screen uses this to keep the lesson's resume position current as the
   *  learner swipes, not just at mount. */
  onIndexChange?: (sectionIx: number | null) => void;
  /** Fires as the learner moves between CARDS inside one mission, with the
   *  1-based card number (the same one the header shows as 15.2) or null when
   *  the current page has no sub-position.
   *
   *  Separate from onIndexChange because the two change independently: swiping
   *  a deck moves the card without moving the section, and the screen needs
   *  both to write a resume that returns to the right card. */
  onSubIndexChange?: (sub: number | null) => void;
  /** The card to open the current deck on, 0-based — a resume or deep link
   *  landing inside a mission rather than at its first card. */
  initialSub?: number | null;
  /** Safe-area bottom inset, so the nav bar clears the home indicator. */
  bottomInset: number;
};

/** A card's vertical scroller plus the "there is more below" chevron that
 *  floats over the bottom edge until the learner reaches the end. */
/**
 * Does this section manage its own height, so the page must NOT wrap it in a
 * vertical scroller?
 *
 * Two kinds qualify:
 *   - anything showing a swipe deck, because a horizontal pager inside a
 *     vertical scroller fights for the gesture and neither wins on Android
 *   - the paged reading mission, which fills the screen and pages itself
 *
 * Everything else keeps the scrolling page it has always had. Getting this
 * wrong in either direction is visible immediately: a scrolling page around a
 * fixed card hides that card's action below the fold, and a fixed page around
 * long prose clips it with no way to reach the rest.
 */
function ownsLayout(s: LessonSection): boolean {
  if ((s as { swipe?: boolean }).swipe) return true;
  if (s.type === 'reading' && (s as { questionsInModal?: boolean }).questionsInModal) return true;
  // A cardDeck IS a swipe deck — it just never set the `swipe` flag, so it fell
  // through to the scrolling page and became the case the comment above warns
  // about: a vertical scroller wrapped around a fixed-height card, so the card
  // sat below the fold and the two scrollers fought for the gesture. The deck
  // sizes itself through useCardHeight; letting it own the viewport is what
  // makes it fit on screen without scrolling.
  if (s.type === 'cardDeck') return true;
  // An XL groupDrill is the same case, and was missed for the same reason.
  // GroupDrillView renders one word per swiped hero card at size 'xl' (see
  // MissionRich's OneGroup) — a 460px card inside a scrolling page, which put
  // the drill's CONTRÔLE question and its "next group" button below the fold on
  // a Pixel 6 and left the two scrollers fighting for the drag.
  //
  // Deliberately NOT every groupDrill: at any other size the drill is a plain
  // stack of rows with no horizontal scroller in it, and that genuinely needs
  // the scrolling page — sons.02 and sons.03 both render that shape, and
  // pinning them to the viewport would clip their lower rows with no way to
  // reach them.
  if (s.type === 'groupDrill' && (s as { size?: string }).size === 'xl') return true;
  // A stepped trapDrill is the same case again. It walks its content one job
  // per screen (the traps, the audio, the reflex check) with a Continuer button
  // pinned below, and its cards step is a filling swipe deck — so it must own
  // the viewport or the deck measures nothing and the button sits below the
  // fold, which is the bug that made RÉFLEXE unreachable in the stacked render.
  //
  // Deliberately NOT every trapDrill: without `steps` the section is a plain
  // column of flip cards and needs the scrolling page, and the four lessons
  // that authored it that way keep it.
  if (s.type === 'trapDrill' && ((s as { steps?: unknown[] }).steps?.length ?? 0) > 0) return true;
  // A flashcard deck and a review deck are the same case as the cardDeck above:
  // each draws ONE full-height card with its answer controls pinned below, and
  // both sized that card by guessing at the surrounding chrome. The guess came
  // out ~70-110dp taller than the room a lesson page actually leaves, so the
  // card ran past the bottom of the screen and took its Again / I know it row
  // (and the review deck's rating buttons) with it. Owning the viewport is what
  // lets them MEASURE instead — see useMeasuredCardHeight.
  if (s.type === 'flashcards' || s.type === 'reviewDeck') return true;
  // A `practice` section runs the Voice Flash shape: one full-height prompt
  // card with Missed it / I knew it pinned below. It sized that card from the
  // window guess AND used minHeight, so it could only grow — the card ran off
  // the bottom of the screen and took the grade buttons with it, leaving the
  // mission impossible to advance.
  if (s.type === 'practice') return true;
  return false;
}

function PageScroll({
  children,
  contentStyle,
  fixed = false,
}: {
  children: React.ReactNode;
  contentStyle?: ViewStyle;
  /** The section manages its own height and scrolling (a swipe deck, a paged
   *  reading mission). Wrapping one of those in a vertical scroller is what
   *  made cards unreachable: the page scrolled AROUND a fixed-height card,
   *  pushing its action below the fold, and on Android the two scrollers
   *  fought over the gesture so neither moved. When fixed, this renders a
   *  plain flex container and the section owns the viewport. */
  fixed?: boolean;
}) {
  const t = useTheme();
  const [more, setMore] = useState(false);
  const layoutH = useRef(0);
  const contentH = useRef(0);
  const update = () => setMore(contentH.current > layoutH.current + 24);

  // A plain flex container: the section fills it and does its own scrolling.
  if (fixed) {
    return <View style={[{ flex: 1 }, contentStyle as ViewStyle]}>{children}</View>;
  }

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
  missionTotal,
  missionNumberOf,
  terms,
  onOpenSheet,
  quizCfg,
  drills,
  onJumpToRef,
  acts,
  onCheckpointReached,
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
  initialQuiz,
  highlightIndex,
  onIndexChange,
  onSubIndexChange,
  initialSub,
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

  // Which act each section CLOSES. The interstitial checkpoint PAGES are gone
  // (six "Act N / milestone / continue or stop" screens through a lesson read
  // as interruptions, not milestones), but the act boundary itself still
  // matters: crossing one is what releases that act's SRS tranche, so an
  // hour-long lesson does not dump sixty new cards into review at the end.
  // The release now fires when the learner reaches the LAST SECTION of an act
  // rather than a screen that followed it.
  const closesAct = useMemo(() => {
    const m = new Map<number, number>();
    (acts ?? []).forEach((a, ai) => {
      const last = a.sections[a.sections.length - 1];
      if (!last) return;
      const ix = sections.findIndex((s) => (s as { id?: string }).id === last);
      // An act closing on the quiz has no section page of its own; it releases
      // on the quiz page instead (handled below).
      if (ix >= 0) m.set(ix, ai);
    });
    return m;
  }, [sections, acts]);

  /** The act that ends on the quiz, if any — `sections` has the quiz removed. */
  const actEndingOnQuiz = useMemo(() => {
    const i = (acts ?? []).findIndex((a) => {
      const last = a.sections[a.sections.length - 1];
      return !!last && !sections.some((s) => (s as { id?: string }).id === last);
    });
    return i >= 0 ? i : null;
  }, [sections, acts]);
  const pageCount = pages.length;
  const lastPage = pageCount - 1;
  const quizPage = hasQuiz ? lastPage : -1;
  const currentEntry = pages[page];
  const currentSection =
    currentEntry?.kind === 'image' || currentEntry?.kind === 'section' ? sections[currentEntry.sectionIx] : undefined;

  // The mission NUMBER, in the same terms the missions hub counts in.
  //
  // `sections` has the quiz removed, so an index into it is NOT a mission
  // number: every section after the quiz's original slot is off by one. sons.06
  // puts its quiz at section 20 of 21, so its roundup rendered "MISSION 20 / 21"
  // while the hub listed it as 21 — the same two-denominators-for-one-lesson
  // problem `missionTotal` was added to fix, left half-done because only the
  // denominator was corrected.
  //
  // The pager cannot derive the quiz's original position from its own filtered
  // list, so the screen supplies the mapping (it holds the full list). Falls
  // back to the raw index for any caller that does not pass one, which is what
  // every pre-v2 lesson does.
  const missionNumber = (sectionIx: number): number =>
    missionNumberOf ? missionNumberOf(sectionIx) : sectionIx + 1;

  // The SUB-mission: which card of a swipe deck the learner is on, so mission
  // 15 reads 15.1 … 15.5 as they move through it rather than freezing on 15.
  //
  // Held here rather than inside the deck because the header is the pager's,
  // and a deck cannot address a lesson it knows nothing about. Zero means "no
  // sub-position" — every non-deck section, plus the cover and the quiz — and
  // formatMissionLabel prints no fraction for it.
  //
  // Reset on every page change: swiping to a new mission must not inherit the
  // last one's card number, and a section swiped back into the window remounts
  // its deck at card 0 anyway (see the PAGE_WINDOW spacer below), so a stale
  // sub would disagree with what is actually on screen.
  const [sub, setSub] = useState(0);
  useEffect(() => {
    setSub(0);
  }, [page]);

  // Whether the section on screen is holding the learner.
  //
  // Keyed BY PAGE rather than reset in an effect. A reset effect here runs
  // AFTER the child's effect that raises the block — parents' effects fire last
  // — so it clobbered the signal on the very render that set it and the gate
  // never appeared. Storing the page alongside the flag makes a stale block
  // from a section swiped away simply not match, with no ordering to get wrong.
  const [blockedOn, setBlockedOn] = useState<number | null>(null);
  const sectionBlocked = blockedOn === page;
  const setSectionBlocked = useCallback(
    (blocked: boolean) => setBlockedOn((prev) => (blocked ? page : prev === page ? null : prev)),
    [page],
  );

  // Tell the screen where inside the mission we are, so a resume written now
  // returns to this card rather than to the top of the mission. Null on a page
  // with no sub-position, which is what clears a stale card from the URL when
  // the learner swipes on to a plain section.
  useEffect(() => {
    onSubIndexChange?.(sub > 1 ? sub : null);
    // onSubIndexChange is redefined every render by the screen; depending on it
    // would fire this effect on every render rather than on every real move.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sub]);

  // A resume or deep link that named a card opens the deck there ONCE, on the
  // page it was meant for. Consumed on arrival (`landedSub`) so that swiping
  // away and back returns to card 1 like any other visit — the anchor names
  // where this VISIT starts, not a position the mission is pinned to.
  const landedSub = useRef(false);
  const openAtSub =
    !landedSub.current && initialSub != null && initialIndex != null && page === initialIndex + 1
      ? initialSub
      : undefined;
  useEffect(() => {
    if (openAtSub != null) landedSub.current = true;
  }, [openAtSub]);

  // How many cards the CURRENT mission has. Drives the "part 2 of 5" spoken
  // label and is what a11yMissionLabel needs to say anything useful; the
  // visible decimal does not need it.
  const currentSubCount = currentSection ? subCount(currentSection) : 1;

  // Voice is entirely user-triggered now — nothing here ever auto-starts, so
  // a swipe can never interrupt narration that only exists because the
  // learner asked for it. The Listen chip always (re)starts from the top on
  // tap, which doubles as "replay" with no separate control.
  const [sayPlaying, setSayPlaying] = useState(false);
  // `say` is a bare string on the shipped lessons and a {text, voice, timing}
  // object on v2 ones. narrationOf() normalises both so the chip and the
  // player below never have to know which shape this section used.
  const sayText = currentSection ? (narrationOf(currentSection)?.text ?? null) : null;
  const say = sayText;
  useEffect(() => {
    setSayPlaying(false);
  }, [page]);

  useEffect(() => {
    onIndexChange?.(currentEntry?.kind === 'section' ? currentEntry.sectionIx : null);
    // Finishing an act is what releases that act's SRS cards. It used to fire
    // on the checkpoint page; with those pages gone it fires on the act's last
    // SECTION, which is the same moment in the learner's terms — they reached
    // the end of the act. Reaching it is enough, exactly as before: someone who
    // stops there still banks what they earned, because the cards are the
    // record of having been taught the material, not a reward for pressing on.
    if (currentEntry?.kind === 'section') {
      const actIx = closesAct.get(currentEntry.sectionIx);
      if (actIx !== undefined) onCheckpointReached?.(actIx);
    }
    // The act that ends on the quiz releases when the quiz page is reached.
    if (currentEntry?.kind === 'quiz' && actEndingOnQuiz !== null) {
      onCheckpointReached?.(actEndingOnQuiz);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const listen = () => {
    if (!say) return;
    sound.play('tap');
    audio.stop();
    setSayPlaying(true);
    audio.speakItem(
      { fr: sayText, audioRef: currentSection?.audioRef },
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
    if (initialQuiz && hasQuiz) {
      requestAnimationFrame(() => {
        ref.current?.scrollTo({ x: quizPage * measured, animated: false });
        setPage(quizPage);
      });
    } else if (initialIndex != null && initialIndex >= 0) {
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
  // A section can hold the learner in place — today only an unanswered control
  // page (see GroupDrillView). Cleared on every page change so a block can
  // never outlive the section that raised it and strand the deck.
  const nextBlocked = !onLast && sectionBlocked;

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      {/* Progress + position */}
      <View style={{ paddingHorizontal: 24, paddingBottom: 14 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <TX
            font="semi"
            role="meta"
            ls={2}
            color={t.accTx}
            // "15.2" is read as a number by a screen reader ("fifteen point
            // two"), which is not a position. The spoken form says "Mission 15
            // of 28, part 2 of 5" instead — same information, in the terms the
            // decimal is standing in for.
            accessibilityLabel={
              onFirst || page === quizPage
                ? undefined
                : a11yMissionLabel(
                    missionNumber(currentEntry?.kind === 'image' || currentEntry?.kind === 'section' ? currentEntry.sectionIx : 0),
                    sub,
                    currentSubCount,
                    missionTotal ?? sections.length,
                  )
            }
          >
            {onFirst
              ? T.lessonOverview
              : page === quizPage
                ? T.quizWord
                : formatMissionLabel(
                    missionNumber(currentEntry?.kind === 'image' || currentEntry?.kind === 'section' ? currentEntry.sectionIx : 0),
                    sub,
                    missionTotal ?? sections.length,
                  )}
          </TX>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              // The page counter used to sit to the RIGHT of the Listen chip and
              // was quietly holding it clear of the floating settings button
              // that overlays this corner. Removing the counter let the chip
              // slide under the gear, so the space it was occupying is now
              // reserved explicitly rather than by accident.
              paddingRight: 44,
            }}
          >
            {say ? <ListenChip onPress={listen} playing={sayPlaying} /> : null}
            {/* The page counter is gone. It sat beside "MISSION 6 / 27" reading
                "7 / 28" — two counters, two denominators, one screen, and no way
                for a learner to tell which is the real one. They count different
                things (pager PAGES including the cover and the quiz, versus
                MISSIONS), and only the mission number means anything to someone
                working through a lesson. The progress bar below already carries
                position continuously, so nothing is lost. */}
          </View>
        </View>
        <ProgressBar pct={(page / lastPage) * 100} height={4} color={t.acc} track={t.line(10)} />
      </View>

      {/* Swipeable cards */}
      <ScrollView
        ref={ref}
        horizontal
        nestedScrollEnabled
        directionalLockEnabled
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        onScrollBeginDrag={onDragStart}
        onMomentumScrollEnd={onMomentumEnd}
        style={{ flex: 1 }}
      >
        {pages.map((entry, i) => {
          const key =
            entry.kind === 'cover'
              ? 'cover'
              : entry.kind === 'quiz'
              ? 'quiz'
              : `${entry.kind}-${entry.sectionIx}`;

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
            // A lesson that declares ROUNDS gets the round engine: every
            // question format renders, a failed round fires its drill before
            // the next one starts, and a wrong answer offers a jump back to
            // the section that taught it.
            //
            // Without rounds, the shipped flat deck is used exactly as before.
            // That is what keeps the six pre-v2 lessons untouched: they carry
            // no `rounds`, so they cannot take this branch.
            if (quizCfg) {
              return (
                <View key={key} style={{ width }}>
                  {/* The engine paces itself (one question per screen, drills
                      between rounds), so it owns the viewport rather than
                      scrolling inside a page. */}
                  <PageScroll fixed contentStyle={{ paddingTop: 8, paddingBottom: 24 }}>
                    <QuizRoundsView
                      cfg={quizCfg}
                      drills={drills ?? []}
                      onAnswer={(q, correct) => onQuizAnswer(quizIndexOf(quizCfg, q), correct)}
                      onComplete={onQuizComplete}
                      onFinish={onFinish}
                      finishLabel={finishLabel}
                      onJumpToRef={onJumpToRef}
                      onPlay={onPlay}
                      playingId={playingId}
                    />
                  </PageScroll>
                </View>
              );
            }
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
          const selfLaid = ownsLayout(s);
          return (
            // `flex: 1` so a self-laid section (a deck) actually receives the
            // page's height. Without it this page box hugs its content, the
            // deck inside measures ~0 and renders zero-height cards — the
            // fixed=selfLaid branch below can only hand down height it has.
            <View key={key} style={{ width, flex: 1 }}>
              <PageScroll fixed={selfLaid} contentStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 24 }}>
                <View
                  style={[
                    // A self-laid section must fill the page whether or not it
                    // is also the deep-link highlight; the two are independent.
                    selfLaid ? { flex: 1 } : null,
                    highlighted
                      ? { borderRadius: 18, borderWidth: 1.5, borderColor: t.accA(40), backgroundColor: t.accA(5), padding: 10 }
                      : null,
                  ]}
                >
                  <MissionSectionView
                    s={s}
                    onPlay={onPlay}
                    playingId={playingId}
                    onGrade={onGrade}
                    graded={graded}
                    showHero={!hasOwnImagePage}
                    terms={terms}
                    onOpenSheet={onOpenSheet}
                    // Only the page in view drives the header. Neighbouring
                    // pages stay mounted inside PAGE_WINDOW, and their decks
                    // fire an index on mount — without this guard the mission
                    // to the right would overwrite the sub-number of the one
                    // actually being read.
                    onSubIndexChange={i === page ? (ix) => setSub(ix + 1) : undefined}
                    initialSub={i === page ? openAtSub : undefined}
                    // Only the page in view may block the deck. Neighbours stay
                    // mounted inside PAGE_WINDOW, and an unanswered check two
                    // pages ahead must not disable Next on the page being read.
                    onBlockedChange={i === page ? setSectionBlocked : undefined}
                  />
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
          onPress={onLast ? (finishBlocked ? undefined : onFinish) : nextBlocked ? undefined : () => goTo(page + 1)}
          accessibilityRole="button"
          accessibilityState={{ disabled: finishBlocked || nextBlocked }}
          accessibilityHint={nextBlocked ? T.checkAnswerFirst : undefined}
          style={{
            flex: 1,
            minHeight: 52,
            borderRadius: 26,
            backgroundColor: t.acc,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            opacity: finishBlocked || nextBlocked ? 0.35 : 1,
          }}
        >
          <TX font="semi" role="bodyLg" color={t.accInk}>{onLast ? finishLabel : T.lessonNext}</TX>
          {onLast ? null : <Icon name="chevronRight" size={15} color={t.accInk} strokeWidth={2} />}
        </Press>
      </View>
    </View>
  );
}
