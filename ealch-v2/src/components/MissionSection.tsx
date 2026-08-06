import { useState } from 'react';
import { Modal, View } from 'react-native';
import { TX } from '@/components/Type';
import { SectionView } from '@/components/LessonSection';
import { RichImage } from '@/components/LessonRich';
import {
  StoryView,
  GoalsView,
  SoundGridView,
  GroupDrillView,
  TrapDrillView,
  PronunciationLabView,
  DictationView,
  ScenarioView,
  ListeningView,
  ReadingView,
  ReviewDeckView,
  ProgressCheckView,
} from '@/components/MissionRich';
import { ScenePlayer } from '@/components/ScenePlayer';
import { InhibitionDrillView, SilentLetterGrid } from '@/components/SilentCards';
import { CardFrame, SwipeDeck, TermChip, useCardHeight } from '@/components/LessonDeck';
import { PassagePage, ReadingQuestionsPage } from '@/components/ReadingPages';
import { WordPractice } from '@/components/WordPractice';
import { Icon } from '@/components/Icon';
import { Press } from '@/components/ui';
import { content } from '@/services/content';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import type { LessonSection, LessonTerm } from '@/content/schema';

// The mission-journey dispatcher. It has the exact same contract as
// SectionView (LessonSection.tsx) so MissionPager can swap one for the other
// with no prop changes anywhere else — for the 12 mission-only types it
// renders the new MissionRich views, and for every pre-existing type
// (teach, letterGrid, cardDeck, flashcards, quiz, roundup…) it falls straight
// through to the original SectionView, unchanged.
//
// A couple of mission types (story, scenario) paint their own eyebrow/title
// inside the view itself, so the shared label below is skipped for those —
// everything else gets the same eyebrow treatment every section has always had.

// 'scene' joins this list for the same reason story does: it paints its own
// setting card and walks its own beats, so a shared eyebrow above it would
// sit over the top of a story that has already introduced itself.
const SELF_LABELLED = new Set<LessonSection['type']>(['story', 'scenario', 'scene']);

/** How many term chips a mission shows before collapsing the rest behind "+N".
 *  Three fits one row at every supported width and font scale; four wraps. */
const CHIP_CAP = 3;

function MissionLabel({ text }: { text: string }) {
  const t = useTheme();
  return (
    <TX font="semi" role="meta" ls={2.4} color={t.accTx} style={{ marginBottom: 10 }}>
      {text}
    </TX>
  );
}

/** One common error, full height: what the learner says, what to say instead,
 *  and why the wrong version is a reasonable thing to have said.
 *
 *  The `why` is the point of the card, so it gets the room. Both readings are
 *  playable, because hearing the difference is what fixes it. */
function CommonErrorCard({
  error,
  onPlay,
  playingId,
  height,
}: {
  error: { wrong: string; right: string; why: string };
  onPlay: (id: string, text: string, audioRef?: string | null) => void;
  playingId: string | null;
  /** The height the deck measured. Wins over the guess below. */
  height?: number | null;
}) {
  const t = useTheme();
  const rid = `err-right-${error.right}`;
  // Chrome: eyebrow, deck hint, dots row, page padding. The guess serves the
  // first frame; the deck's measurement replaces it as soon as it lands.
  const fallback = useCardHeight(300);
  const h = height != null && height > 160 ? height : fallback;
  return (
    <CardFrame height={h}>
      <View style={{ gap: 18, flex: 1 }}>
      <View style={{ gap: 10 }}>
        <TX role="eyebrow" font="med" color={t.txMuted} ls={1.4} style={{ textTransform: 'uppercase' }}>
          Commonly said
        </TX>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}>
          <Icon name="x" size={15} color={t.danger} />
          <TX font="serifI" role="titleLg" color={t.txSecondary} style={{ flex: 1 }}>{error.wrong}</TX>
        </View>
      </View>

      <View style={{ height: 1, backgroundColor: t.line(9) }} />

      <View style={{ gap: 10 }}>
        <TX role="eyebrow" font="med" color={t.accTx} ls={1.4} style={{ textTransform: 'uppercase' }}>
          Say instead
        </TX>
        <Press
          cue={null}
          onPress={() => onPlay(rid, error.right)}
          accessibilityLabel={error.right}
          style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}
        >
          <Icon name="check" size={15} color={t.accTx} />
          <TX font="serifI" role="titleLg" style={{ flex: 1 }}>{error.right}</TX>
          <Icon name="speaker" size={16} color={playingId === rid ? t.acc : t.txNonText} />
        </Press>
      </View>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TX role="body" color={t.txSecondary} style={{ lineHeight: 24 }}>{error.why}</TX>
        </View>
      </View>
    </CardFrame>
  );
}

/** The "say it and be heard" control at the foot of a routine card. */
function InhibitionMicRow({ onPress }: { onPress: () => void }) {
  const t = useTheme();
  return (
    <Press
      cue="tap"
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Say these words"
      accessibilityHint="Opens the microphone to score your pronunciation"
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
        minHeight: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: t.accA(45),
        paddingHorizontal: 18,
      }}
    >
      <Icon name="mic" size={16} color={t.acc} />
      <TX font="med" role="body" color={t.accTx}>Say these words</TX>
    </Press>
  );
}

/** The inhibition drill plus the mic its targets declare.
 *
 *  Every target in sons.06 sets `mic: true`, and nothing rendered a mic: the
 *  flag reached a `renderMic` prop that no caller ever passed, so the condition
 *  was always false. A drill that says "say it out loud" and then offers no way
 *  to be heard is a promise the section makes and does not keep.
 *
 *  The mic opens WordPractice over the lesson — the same scored, per-word sheet
 *  the Speak path uses, on this routine's practice words. Reusing it rather
 *  than growing a second recogniser here keeps one implementation of "was that
 *  right", and it is already sized as a sheet, so a card holding five steps
 *  does not have to find room for a waveform too. */
function InhibitionMission({
  s,
  onPlay,
  playingId,
  onIndexChange,
  initialIndex,
  onEdgeSwipe,
  active,
}: {
  s: Extract<LessonSection, { type: 'inhibitionDrill' }>;
  onPlay: (id: string, text: string, audioRef?: string | null) => void;
  playingId: string | null;
  onIndexChange?: (index: number) => void;
  initialIndex?: number | null;
  onEdgeSwipe?: (dir: 'next' | 'prev') => void;
  active?: boolean;
}) {
  // Which target's mic is open, or null. Held here rather than in the deck so
  // that swiping between routines closes nothing by accident.
  const [micTarget, setMicTarget] = useState<number | null>(null);
  const target = micTarget == null ? undefined : s.targets[micTarget];
  const words = (target?.practiceOn ?? [])
    .map((id) => content.item(id)?.fr)
    .filter((w): w is string => !!w);

  return (
    <>
      <InhibitionDrillView
        intro={s.intro}
        targets={s.targets}
        closing={s.closing}
        onPlay={onPlay}
        playingId={playingId}
        onIndexChange={onIndexChange}
        initialIndex={initialIndex}
        active={active}
        renderMic={(_t, i) => <InhibitionMicRow onPress={() => setMicTarget(i)} />}
      />
      {/* In a MODAL, not inline. WordPractice positions itself absolutely
          against its parent and pages its words with a horizontal FlatList —
          mounted inside the card, that FlatList lands inside the pager's
          ScrollView and React Native warns ("VirtualizedLists should never be
          nested inside plain ScrollViews"), because the two scrollers share a
          gesture and the list loses its virtualisation. A modal hosts it at the
          window level, which is where a sheet belongs anyway. */}
      <Modal
        visible={!!target && words.length > 0}
        transparent
        animationType="none"
        onRequestClose={() => setMicTarget(null)}
      >
        {target && words.length ? (
          <WordPractice
            words={words}
            initialIx={0}
            // sons.06 is a `sons` lesson, and the lenient band is what the rest
            // of the product uses for foundation material — a beginner shaping
            // a silent ending should not be failed by a recogniser's
            // strictness.
            level="sons"
            onClose={() => setMicTarget(null)}
          />
        ) : null}
      </Modal>
    </>
  );
}

/** The reading mission as two pages: the passage, then its questions.
 *
 *  The passage page holds the whole screen and nothing else, which is what
 *  makes tap-a-word useful — there is room for the gloss to open over it. The
 *  questions follow only once the learner says they are ready, and they can
 *  always go back. */
function ReadingMission({
  s,
  onPlay,
  playingId,
}: {
  s: Extract<LessonSection, { type: 'reading' }>;
  onPlay: (id: string, text: string, audioRef?: string | null) => void;
  playingId: string | null;
}) {
  const [page, setPage] = useState<'text' | 'questions'>('text');

  if (page === 'questions') {
    return <ReadingQuestionsPage questions={s.questions ?? []} onBack={() => setPage('text')} />;
  }

  return (
    <PassagePage
      text={s.text}
      glossary={s.glossary}
      onPlay={onPlay}
      playingId={playingId}
      eyebrow={s.frSub}
      onContinue={() => setPage('questions')}
    />
  );
}

export function MissionSectionView({
  s,
  onPlay,
  playingId,
  onGrade,
  graded,
  showHero = true,
  onOpenSheet,
  terms,
  onSubIndexChange,
  initialSub,
  onBlockedChange,
  onEdgeSwipe,
  active,
}: {
  s: LessonSection;
  onPlay: (id: string, text: string, audioRef?: string | null) => void;
  playingId: string | null;
  onGrade: (itemId: string, correct: boolean) => void;
  graded: ReadonlySet<string>;
  showHero?: boolean;
  /** Opens the reference sheet a section previews. Absent means the lesson
   *  declares no sheets, and the "see all" link is simply not offered. */
  onOpenSheet?: (sheetId: string) => void;
  /** The lesson's glossary, for the term chips a section declares. */
  terms?: Record<string, LessonTerm>;
  /** The card the learner has swiped to inside this section, 0-based.
   *
   *  Wired only on the sections that are genuinely SWIPE decks — the pager
   *  turns this into the sub-mission number in its header (15.1, 15.2 …), so a
   *  section whose index the pager cannot observe must not report one. The
   *  tap-advanced decks (flashcards, reviewDeck) deliberately do not: they draw
   *  their own counter and advance on a button, and subMission.logic's
   *  subCount() returns 1 for them to match. */
  onSubIndexChange?: (index: number) => void;
  /** The card to open on, 0-based — a resume landing inside this mission.
   *  Undefined means the first card, which is every ordinary visit. */
  initialSub?: number | null;
  /** Raised while this section is holding the learner — today only an
   *  unanswered control page. The pager dims Next while it is true. */
  onBlockedChange?: (blocked: boolean) => void;
  /** Swiping past this mission's first/last card leaves the mission. Wired only
   *  to the sections that ARE a deck; everything else has no edge to swipe. */
  onEdgeSwipe?: (dir: 'next' | 'prev') => void;
  /** Is this the mission on screen? Decks rewind to card 1 when it is not. */
  active?: boolean;
}) {
  const t = useTheme();
  const T = useT();
  const [chipsOpen, setChipsOpen] = useState(false);
  const hero = showHero ? <RichImage refKey={s.imageRef} /> : null;
  const label = SELF_LABELLED.has(s.type) ? null : <MissionLabel text={s.title} />;

  // The term chips this section surfaces. Rendered under the heading on every
  // mission that declares them, so the lesson's jargon is explainable at the
  // point of use rather than defined once and then assumed. This is what lets
  // CaReFuL be explained on all eleven missions that use it without any of
  // them carrying the definition in their body copy.
  //
  // Capped at CHIP_CAP. Five missions declared four or more, which wraps to two
  // rows and pushes the content ~120dp down the screen before the learner has
  // read a word of it — on mission 3, six chips above a card. The rest stay one
  // tap away rather than being cut: a term a mission genuinely uses should not
  // become unexplainable because it was fourth in the list.
  const shownTerms = chipsOpen ? (s.terms ?? []) : (s.terms ?? []).slice(0, CHIP_CAP);
  const hiddenTerms = (s.terms?.length ?? 0) - shownTerms.length;
  const chips = s.terms?.length && terms ? (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      {shownTerms.map((key) => {
        const def = terms[key];
        if (!def) return null;
        return (
          <TermChip
            key={key}
            term={def.term}
            title={def.title}
            body={def.body}
            examples={(def.examples ?? [])
              .map((ex: NonNullable<LessonTerm['examples']>[number]) => {
                const it = content.item(ex.itemId);
                return { fr: it?.fr ?? '', ipa: it?.ipa, en: ex.note ?? it?.en };
              })
              .filter((ex: { fr: string }) => ex.fr)}
            onPlay={(id, text) => onPlay(id, text)}
            playingId={playingId}
          />
        );
      })}
      {hiddenTerms > 0 ? (
        <Press
          cue="tap"
          onPress={() => setChipsOpen(true)}
          accessibilityRole="button"
          accessibilityLabel={T.termsMore.replace('{n}', String(hiddenTerms))}
          accessibilityHint="Shows the rest of this mission's terms"
          style={{
            minHeight: 34,
            paddingHorizontal: 12,
            justifyContent: 'center',
            borderRadius: 17,
            borderWidth: 1,
            borderColor: t.line(12),
          }}
        >
          <TX role="meta" font="med" color={t.txMuted}>{T.termsMore.replace('{n}', String(hiddenTerms))}</TX>
        </Press>
      ) : null}
    </View>
  ) : null;

  switch (s.type) {
    case 'story':
      return <StoryView s={s} />;

    // ── Lesson Architecture v2 ──────────────────────────────────────────
    case 'scene':
      return (
        <ScenePlayer
          title={s.title}
          setting={s.setting}
          beats={s.beats}
          closing={s.closing}
          onPlay={onPlay}
          playingId={playingId}
        />
      );
    case 'inhibitionDrill':
      return (
        // flex: 1 so the deck receives the page's height. The pager already
        // hands this section the viewport (`swipe: true` -> ownsLayout), but a
        // hug-content wrapper here gives the deck nothing to MEASURE — which is
        // what made its cards fall back to the window-derived guess and paint
        // over the section outline beneath them. Same fix the cardDeck and the
        // XL group drill already carry.
        <View style={{ flex: 1 }}>
          {label}
          {chips}
          <InhibitionMission
            s={s}
            onPlay={onPlay}
            playingId={playingId}
            onIndexChange={onSubIndexChange}
            initialIndex={initialSub}
            onEdgeSwipe={onEdgeSwipe}
            active={active}
          />
        </View>
      );

    // A letterGrid whose rows carry a `verdict` is a SILENT-letter grid: one
    // ending, one verdict, one example with its silent characters greyed. The
    // alphabet grid (26 glyphs, no verdict) keeps the original renderer, so
    // both shapes ship from the one section type. `render: 'sheet'` means the
    // flow shows only the preview rows and the full table lives in a
    // reference sheet.
    case 'letterGrid':
      if (s.letters.some((l) => l.verdict)) {
        return (
          <View>
            {label}
          {chips}
            <SilentLetterGrid
              letters={s.letters}
              mode={s.render === 'sheet' ? 'preview' : 'full'}
              onPlay={onPlay}
              playingId={playingId}
              onOpenSheet={onOpenSheet ? () => onOpenSheet(s.sheetId ?? '') : undefined}
            />
          </View>
        );
      }
      break;
    case 'goals':
      return (
        <View>
          {label}
          {chips}
          {hero}
          <GoalsView s={s} />
        </View>
      );
    case 'soundGrid':
      return (
        <View>
          {label}
          {chips}
          {hero}
          <SoundGridView s={s} />
        </View>
      );
    case 'groupDrill':
      // Same fill as the cardDeck below: at size xl this drill measures the
      // room it is given rather than guessing chrome, so a hug-content wrapper
      // leaves it nothing to measure. Any other size keeps the plain box, and
      // its scrolling page with it.
      return (
        <View style={s.size === 'xl' ? { flex: 1 } : undefined}>
          {label}
          {chips}
          {hero}
          {/* The sub-position is forwarded the same way the cardDeck and the
              swipe-flagged commonErrors below forward theirs. Without it an XL
              drill's header froze on the mission number while the learner
              swiped eleven cards, because this was the one self-paging section
              type that never reported its index. subCount() now counts these to
              match; the two have to move together or the header would print a
              denominator for a position nothing sends. */}
          <GroupDrillView
            s={s}
            onBlockedChange={onBlockedChange}
            onIndexChange={onSubIndexChange}
            initialIndex={initialSub}
          />
        </View>
      );
    // A STEPPED trapDrill walks its three jobs one screen at a time and needs
    // the fill for the same reason the groupDrill above does: its cards step is
    // a swipe deck that MEASURES its room, and a hug-content wrapper gives it
    // nothing to measure, so the cards render at zero height. An unstepped
    // trapDrill is the original stack inside a scrolling page, unchanged.
    case 'trapDrill':
      return (
        <View style={s.steps?.length ? { flex: 1 } : undefined}>
          {hero}
          {/* Only a STEPPED trap reports a position; without steps it is one
              stacked screen, and subCount() returns 1 to match. */}
          <TrapDrillView s={s} onIndexChange={s.steps?.length ? onSubIndexChange : undefined} />
        </View>
      );

    // Eight "everyone gets this wrong" cards stacked is eight failures shown
    // at once, which reads as a list of ways to be bad at French. One at a
    // time, each with room for its explanation, is a correction the learner
    // can actually take in.
    //
    // This type was also the one that BUILT a hero and never drew it, so an
    // authored imageRef resolved, registered, and rendered nowhere. It now
    // draws one above the deck. (Found on sons.08 mission 22, which shipped
    // without `swipe` and so took the unstepped fallthrough: the deck asked
    // flex:1 of a hug-content wrapper, measured 0, and the whole mission came
    // out BLANK. Author commonErrors as `swipe: true, size: 'lg'`, which is
    // what every other lesson does.)
    case 'commonErrors':
      if (s.swipe) {
        return (
          // flex: 1 is REQUIRED by `fill` below. A filling deck inside a
          // hug-content wrapper measures 0 and renders zero-height cards.
          <View style={{ flex: 1 }}>
            {label}
            {chips}
            {/* Above the deck and outside its flex:1, so the deck measures what
                is left. 21:9, not the 16:9 default: a full-height card sits
                below and a taller band would eat ~200dp of it. See the note
                above this case. */}
            {showHero ? <RichImage refKey={s.imageRef} ratio={21 / 9} /> : null}
            <SwipeDeck
              items={s.errors}
              hint="One at a time. Each of these is a good instinct pointed at the wrong language."
              onIndexChange={onSubIndexChange}
              initialIndex={initialSub}
              onEdgeSwipe={onEdgeSwipe}
              active={active}
              // MEASURED: without `fill` the card guessed a height taller than
              // this page leaves and ran over the deck's dots beneath it.
              fill
              keyFor={(_e: unknown, i: number) => `err-${i}`}
              renderItem={(er: { wrong: string; right: string; why: string }, _i: number, height: number | null) => (
                <CommonErrorCard error={er} onPlay={onPlay} playingId={playingId} height={height} />
              )}
            />
          </View>
        );
      }
      break;
    case 'pronunciationLab':
      return (
        <View>
          {label}
          {chips}
          {hero}
          <PronunciationLabView s={s} />
        </View>
      );
    case 'dictation':
      return (
        <View>
          {label}
          {chips}
          {hero}
          <DictationView s={s} />
        </View>
      );
    // `active` matters here and nowhere else in this switch: the scenario's
    // first beat SPEAKS. Neighbouring missions stay mounted inside the pager's
    // window, so without this the next conversation's opening line talks over
    // the one being read.
    case 'scenario':
      return <ScenarioView s={s} active={active !== false} />;
    case 'listening':
      return (
        <View>
          {label}
          {chips}
          {hero}
          <ListeningView s={s} />
        </View>
      );
    // The passage and its questions are separate PAGES when the section asks
    // for it. Stacked, the learner scans back and forth and answers by
    // pattern-matching against the visible text, which is a far easier
    // exercise than the comprehension the mission intended.
    case 'reading':
      if (s.questionsInModal && s.questions?.length) {
        return (
          <View style={{ flex: 1 }}>
            {label}
            {chips}
            <ReadingMission s={s} onPlay={onPlay} playingId={playingId} />
          </View>
        );
      }
      return (
        <View>
          {label}
          {chips}
          {hero}
          <ReadingView s={s} />
        </View>
      );
    case 'reviewDeck':
      return (
        // Fills, because the pager now hands this section the viewport so the
        // card can measure it — a hug-content wrapper would leave it nothing to
        // measure and put it straight back on the guess.
        <View style={{ flex: 1 }}>
          {label}
          {chips}
          {hero}
          <ReviewDeckView s={s} />
        </View>
      );
    case 'progressCheck':
      return (
        <View>
          {label}
          {chips}
          {hero}
          <ProgressCheckView s={s} />
        </View>
      );
    default:
      break;
  }

  // The shared fallback, and it MUST live after the switch rather than inside
  // `default:`.
  //
  // Two cases above are conditional — `letterGrid` renders its own grid only
  // when the letters carry verdicts, `commonErrors` renders its own deck only
  // when the section sets `swipe` — and both end in `break`. When this block
  // was the body of `default:`, a `break` exited the switch and fell off the
  // end of the function, which returns undefined and draws NOTHING. A learner
  // got a blank mission with working Back/Next either side of it.
  //
  // That shipped twice: sons.08 mission 22 (fixed by adding `swipe` to the
  // content, commit d8f4ca6) and a1.01 mission 5, reported on a device. Four
  // more lessons were one publish away from the same thing — sons.02, sons.03,
  // a2.01 and a1.04 all author commonErrors without `swipe`.
  //
  // Adding the flag to each lesson treats the symptom. A switch whose fallback
  // is unreachable by `break` is the bug, so the fallback moved out here where
  // every `break` lands on it.
  //
  // Every pre-existing section type (teach, steps, examples, useCases, hacks,
  // cheatSheet, commonErrors, focus, table, audio, practice, quiz, letterGrid,
  // cardDeck, tapTable, vocabThemes, flashcards, roundup): unchanged behavior,
  // unchanged component. The term chips are additive and render above it when
  // the section declares any.
  //
  // The cardDeck is the one type here that SIZES ITSELF from the room it is
  // given (it measures its rail rather than guessing chrome). This wrapper was
  // a plain View, so it hugged its content: the deck asked for `flex: 1` of a
  // parent that had no height to give, measured ~0 and rendered cards of zero
  // height. Passing the fill down is what lets the measurement see the real
  // viewport. Every other type keeps the hug-content box it had.
  return (
    <View style={s.type === 'cardDeck' || s.type === 'flashcards' || s.type === 'practice' ? { flex: 1 } : undefined}>
      {chips}
      <SectionView
        s={s}
        onPlay={onPlay}
        playingId={playingId}
        onGrade={onGrade}
        graded={graded}
        showHero={showHero}
        // Reaches the cardDeck only — SectionView hands it to that one branch.
        // Every other type here is a single screen, so there is no sub-position
        // for it to report.
        onSubIndexChange={onSubIndexChange}
        onEdgeSwipe={onEdgeSwipe}
      />
    </View>
  );
}
