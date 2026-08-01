import { useState } from 'react';
import { View } from 'react-native';
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
import { Icon } from '@/components/Icon';
import { Press } from '@/components/ui';
import { content } from '@/services/content';
import { useTheme } from '@/theme/useTheme';
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
}: {
  error: { wrong: string; right: string; why: string };
  onPlay: (id: string, text: string, audioRef?: string | null) => void;
  playingId: string | null;
}) {
  const t = useTheme();
  const rid = `err-right-${error.right}`;
  // Chrome: eyebrow, deck hint, dots row, page padding.
  const h = useCardHeight(300);
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
}) {
  const hero = showHero ? <RichImage refKey={s.imageRef} /> : null;
  const label = SELF_LABELLED.has(s.type) ? null : <MissionLabel text={s.title} />;

  // The term chips this section surfaces. Rendered under the heading on every
  // mission that declares them, so the lesson's jargon is explainable at the
  // point of use rather than defined once and then assumed. This is what lets
  // CaReFuL be explained on all eleven missions that use it without any of
  // them carrying the definition in their body copy.
  const chips = s.terms?.length && terms ? (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
      {s.terms.map((key) => {
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
        <View>
          {label}
          {chips}
          <InhibitionDrillView
            intro={s.intro}
            targets={s.targets}
            closing={s.closing}
            onPlay={onPlay}
            playingId={playingId}
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
      return (
        <View>
          {label}
          {chips}
          {hero}
          <GroupDrillView s={s} />
        </View>
      );
    case 'trapDrill':
      return (
        <View>
          {hero}
          <TrapDrillView s={s} />
        </View>
      );

    // Eight "everyone gets this wrong" cards stacked is eight failures shown
    // at once, which reads as a list of ways to be bad at French. One at a
    // time, each with room for its explanation, is a correction the learner
    // can actually take in.
    case 'commonErrors':
      if (s.swipe) {
        return (
          <View>
            {label}
            {chips}
            <SwipeDeck
              items={s.errors}
              hint="One at a time. Each of these is a good instinct pointed at the wrong language."
              keyFor={(_e: unknown, i: number) => `err-${i}`}
              renderItem={(er: { wrong: string; right: string; why: string }) => (
                <CommonErrorCard error={er} onPlay={onPlay} playingId={playingId} />
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
    case 'scenario':
      return <ScenarioView s={s} />;
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
        <View>
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
      // Every pre-existing section type (teach, steps, examples, useCases,
      // hacks, cheatSheet, commonErrors, focus, table, audio, practice, quiz,
      // letterGrid, cardDeck, tapTable, vocabThemes, flashcards, roundup):
      // unchanged behavior, unchanged component. The term chips are additive
      // and render above it when the section declares any.
      return (
        <View>
          {chips}
          <SectionView s={s} onPlay={onPlay} playingId={playingId} onGrade={onGrade} graded={graded} showHero={showHero} />
        </View>
      );
  }
}
