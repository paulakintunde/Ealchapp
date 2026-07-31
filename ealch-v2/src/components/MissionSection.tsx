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
import { useTheme } from '@/theme/useTheme';
import type { LessonSection } from '@/content/schema';

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

const SELF_LABELLED = new Set<LessonSection['type']>(['story', 'scenario']);

function MissionLabel({ text }: { text: string }) {
  const t = useTheme();
  return (
    <TX font="semi" role="meta" ls={2.4} color={t.accTx} style={{ marginBottom: 10 }}>
      {text}
    </TX>
  );
}

export function MissionSectionView({
  s,
  onPlay,
  playingId,
  onGrade,
  graded,
  showHero = true,
}: {
  s: LessonSection;
  onPlay: (id: string, text: string, audioRef?: string | null) => void;
  playingId: string | null;
  onGrade: (itemId: string, correct: boolean) => void;
  graded: ReadonlySet<string>;
  showHero?: boolean;
}) {
  const hero = showHero ? <RichImage refKey={s.imageRef} /> : null;
  const label = SELF_LABELLED.has(s.type) ? null : <MissionLabel text={s.title} />;

  switch (s.type) {
    case 'story':
      return <StoryView s={s} />;
    case 'goals':
      return (
        <View>
          {label}
          {hero}
          <GoalsView s={s} />
        </View>
      );
    case 'soundGrid':
      return (
        <View>
          {label}
          {hero}
          <SoundGridView s={s} />
        </View>
      );
    case 'groupDrill':
      return (
        <View>
          {label}
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
    case 'pronunciationLab':
      return (
        <View>
          {label}
          {hero}
          <PronunciationLabView s={s} />
        </View>
      );
    case 'dictation':
      return (
        <View>
          {label}
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
          {hero}
          <ListeningView s={s} />
        </View>
      );
    case 'reading':
      return (
        <View>
          {label}
          {hero}
          <ReadingView s={s} />
        </View>
      );
    case 'reviewDeck':
      return (
        <View>
          {label}
          {hero}
          <ReviewDeckView s={s} />
        </View>
      );
    case 'progressCheck':
      return (
        <View>
          {label}
          {hero}
          <ProgressCheckView s={s} />
        </View>
      );
    default:
      // Every pre-existing section type (teach, steps, examples, useCases,
      // hacks, cheatSheet, commonErrors, focus, table, audio, practice, quiz,
      // letterGrid, cardDeck, tapTable, vocabThemes, flashcards, roundup):
      // unchanged behavior, unchanged component.
      return <SectionView s={s} onPlay={onPlay} playingId={playingId} onGrade={onGrade} graded={graded} showHero={showHero} />;
  }
}
