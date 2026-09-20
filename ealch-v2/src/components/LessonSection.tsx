import { View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import {
  CardDeckView,
  CheatSheetView,
  FlashcardsView,
  LetterGridView,
  PracticeVFView,
  PracticeWriteView,
  RichImage,
  RoundupView,
  TableView,
  TapTableView,
  VocabThemesView,
} from '@/components/LessonRich';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import type { LessonSection } from '@/content/schema';

// The section renderer, lifted out of app/lesson.tsx so both the scrolling
// reader (history) and the swipeable LessonPager render identical section
// bodies from one place. A single switch over the typed section union: add a
// section type in schema.ts, handle it here, and every surface that shows a
// lesson picks it up. The 'quiz' section is deliberately null here — it is
// driven by the screen's quiz phase, not rendered inline.

function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <TX font="semi" role="meta" ls={2.4} color={color} style={{ marginBottom: 10 }}>
      {text}
    </TX>
  );
}

/** Renders one typed lesson section. */
export function SectionView({
  s,
  onPlay,
  playingId,
  onGrade,
  graded,
  showHero = true,
  onSubIndexChange,
  onEdgeSwipe,
}: {
  s: LessonSection;
  onPlay: (id: string, text: string, audioRef?: string | null) => void;
  playingId: string | null;
  /** Practice items only: self-rated recall, "Got it" / "Missed it". */
  onGrade: (itemId: string, correct: boolean) => void;
  /** itemIds graded at least once this visit, so a re-tap doesn't look ignored. */
  graded: ReadonlySet<string>;
  /** False when the pager already gave this section's image its own page
   *  (LessonPager's hero-split) — the section body must not render it twice. */
  showHero?: boolean;
  /** The card the learner has swiped to inside a cardDeck, 0-based over the
   *  deck's ENTRIES. Feeds the pager's sub-mission number (15.1, 15.2 …).
   *  Ignored by every other section type, all of which are a single screen. */
  onSubIndexChange?: (index: number) => void;
  /** Swiping past the cardDeck's first/last card leaves the mission. */
  onEdgeSwipe?: (dir: 'next' | 'prev') => void;
}) {
  const t = useTheme();
  const T = useT();
  const label = <SectionLabel text={s.title} color={s.type === 'commonErrors' ? t.danger : t.accTx} />;
  // Every section may carry an illustration; it sits between the label and the
  // section body on all types (the rich views that place it themselves receive
  // no `hero` below).
  const hero = showHero ? <RichImage refKey={s.imageRef} /> : null;

  switch (s.type) {
    case 'teach':
      // Paragraph-split rather than one text block: authored copy separates
      // paragraphs with a blank line, and the visible gap between them is what
      // keeps a long teach card from reading as a wall.
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          {hero}
          {s.body.split(/\n\n+/).map((para, i, all) => (
            <TX key={i} role="body" color={t.txSecondary} lhMult={1.62} style={{ marginBottom: i === all.length - 1 ? 0 : 16 }}>
              {para}
            </TX>
          ))}
        </View>
      );

    case 'steps':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 16 }}>
            {s.steps.map((step, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 14, alignItems: 'flex-start' }}>
                <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: t.accA(12), alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                  <TX font="serif" role="label" color={t.accTx}>{i + 1}</TX>
                </View>
                <TX role="body" color={t.txSecondary} lhMult={1.55} style={{ flex: 1 }}>{step}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'focus':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 13 }}>
            {s.points.map((p, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
                <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: t.acc, marginTop: 9 }} />
                <TX role="body" color={t.txSecondary} lhMult={1.5} style={{ flex: 1 }}>{p}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'examples':
      // Every `ex.fr` is a French sentence the learner is meant to SAY, and
      // until now the card showed it silently: the row was a plain View, so a
      // section could author an `audio` spec and get no control to trigger it.
      // sons.06 worked around that by authoring no audio here at all, which
      // reads as a decision and was really the absence of an affordance.
      //
      // The whole row is the tap target, matching the `audio` case below, and
      // the gloss and the note stay exactly where they were.
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.examples.map((ex, i) => {
              const id = `${s.title}-ex-${i}`;
              const on = playingId === id;
              return (
                <Press
                  key={i}
                  cue={null}
                  onPress={() => onPlay(id, ex.fr)}
                  accessibilityRole="button"
                  accessibilityLabel={`${ex.fr}. ${ex.en}`}
                  accessibilityHint="Plays the French sentence"
                  style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 14, paddingHorizontal: 16 }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <View style={{ flex: 1 }}>
                      <TX font="serifI" role="titleLg" size={19} style={{ marginBottom: 4 }}>« {ex.fr} »</TX>
                      <TX role="label" color={t.txMuted}>{ex.en}</TX>
                    </View>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="play" size={15} color={t.acc} />
                    </View>
                  </View>
                  {ex.note ? <TX role="meta" color={t.txSubtle} style={{ marginTop: 6 }}>{ex.note}</TX> : null}
                  {on ? (
                    <View style={{ marginTop: 8 }}>
                      <Waveform count={14} height={18} barWidth={3.25} gap={3.5} active color={t.acc} />
                    </View>
                  ) : null}
                </Press>
              );
            })}
          </View>
        </View>
      );

    case 'useCases':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.cases.map((c, i) => (
              <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 14, paddingHorizontal: 16 }}>
                <TX font="semi" role="meta" ls={1.4} color={t.txSubtle} style={{ marginBottom: 6 }}>{c.situation}</TX>
                <TX font="serifI" role="titleLg" size={18} lang="fr" style={{ marginBottom: 3 }}>« {c.fr} »</TX>
                <TX role="label" color={t.txMuted}>{c.en}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'hacks':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.hacks.map((h, i) => (
              <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), padding: 14, paddingHorizontal: 16 }}>
                <TX font="semi" role="bodySm" style={{ marginBottom: 4 }}>{h.hack}</TX>
                <TX role="label" color={t.txSecondary} lhMult={1.5}>{h.why}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'cheatSheet':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <CheatSheetView s={s} onPlay={onPlay} playingId={playingId} />
        </View>
      );

    case 'commonErrors':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          {/* commonErrors was the one section type that built a hero and never
              drew it: `showHero` was threaded all the way down and dropped, so
              an authored imageRef resolved, registered and rendered nowhere.
              Same class as the BeatRow bug — authored, valid, and drawn by
              nothing. Found on sons.08 mission 22 (Paul, device walk). */}
          {hero}
          <View style={{ gap: 10 }}>
            {s.errors.map((er, i) => (
              <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.dangerA(25), backgroundColor: t.card, padding: 14, paddingHorizontal: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                  <TX font="serifI" role="titleSm" color={t.danger} style={{ textDecorationLine: 'line-through' }}>{er.wrong}</TX>
                  <Icon name="arrowRight" size={13} color={t.txNonText} strokeWidth={1.4} />
                  <TX font="serifI" role="titleSm" color={t.accTx}>{er.right}</TX>
                </View>
                <TX role="label" color={t.txMuted}>{er.why}</TX>
              </View>
            ))}
          </View>
        </View>
      );

    case 'table':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <TableView s={s} onPlay={onPlay} playingId={playingId} />
        </View>
      );

    case 'audio':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 8 }}>
            {s.lines.map((str, i) => {
              const id = `${s.title}-${i}`;
              const on = playingId === id;
              return (
                <Press key={i} cue={null} onPress={() => onPlay(id, str)} style={{ minHeight: 66, paddingVertical: 8, borderRadius: 14, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, flexDirection: 'row', alignItems: 'center', gap: 13, paddingHorizontal: 15 }}>
                  <View style={{ width: 45, height: 45, borderRadius: 22.5, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="play" size={17} color={t.acc} />
                  </View>
                  <TX font="serifI" role="titleSm" style={{ flex: 1 }}>{str}</TX>
                  <Waveform count={14} height={22} barWidth={3.25} gap={3.5} active={on} color={on ? t.acc : t.txNonText} />
                </Press>
              );
            })}
          </View>
        </View>
      );

    case 'practice': {
      // itemIds resolved against the corpus, run one prompt card at a time and
      // graded through onGrade — the join that lets lesson study feed Le
      // Rapport and the SRS. That join is the same whichever surface runs.
      //
      // ROUTING ON THE DECLARED SKILL (UDL 11). The four PRACTICE_SKILLS used
      // to collapse to one renderer: every section, whatever it declared, drew
      // the Voice Flash speaking pass. A section titled "The bon/bonne trap,
      // in writing" asked the learner to say it out loud. The skill field was
      // authored, schema-validated, and read by nothing.
      //
      //   write            the writing surface — type the French from the
      //                    English. Real production, and the non-speaking
      //                    route through a producing section.
      //   speak            the Voice Flash pass. Unchanged.
      //   listen / read    DECIDED, deliberately, to share the speaking
      //                    surface for now. Both already put the audio chip
      //                    and the written French in front of the learner, so
      //                    neither is silent about its skill; splitting them
      //                    means designing two more surfaces and re-proving
      //                    13 shipped sections, which is a content decision
      //                    and not this one. Recorded here because this
      //                    switch is where the next person will look.
      //
      // flex: 1 rather than a bottom margin: both prompt cards MEASURE the
      // room they are handed, so every wrapper between the page and them must
      // pass the height down. A hug-content box puts the card back on a guess.
      const Practice = s.skill === 'write' ? PracticeWriteView : PracticeVFView;
      return (
        <View style={{ flex: 1 }}>
          {label}
          {hero}
          <Practice itemIds={s.itemIds} sectionTitle={s.title} onPlay={onPlay} playingId={playingId} onGrade={onGrade} />
        </View>
      );
    }

    case 'letterGrid':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          {hero}
          <LetterGridView letters={s.letters} sectionTitle={s.title} onPlay={onPlay} playingId={playingId} />
        </View>
      );

    case 'cardDeck':
      // flex: 1, not a bottom margin. The deck measures the room it is handed
      // to size its cards, so every wrapper between the page and it has to pass
      // the height down — a hug-content box here made the deck measure ~0 and
      // render zero-height cards. The label and hero still take their natural
      // height above it; the deck takes the rest.
      return (
        <View style={{ flex: 1 }}>
          {label}
          {hero}
          <CardDeckView s={s} onPlay={onPlay} playingId={playingId} onIndexChange={onSubIndexChange} onEdgeSwipe={onEdgeSwipe} />
        </View>
      );

    case 'tapTable':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          {hero}
          <TapTableView s={s} onPlay={onPlay} playingId={playingId} />
        </View>
      );

    case 'vocabThemes':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          {hero}
          <VocabThemesView themes={s.themes} sectionTitle={s.title} onPlay={onPlay} playingId={playingId} />
        </View>
      );

    case 'flashcards':
      // flex: 1, not a bottom margin — same reason as the cardDeck below. The
      // deck measures the room it is handed to size its card, so every wrapper
      // between the page and it has to pass the height down.
      return (
        <View style={{ flex: 1 }}>
          {label}
          {hero}
          <FlashcardsView s={s} onPlay={onPlay} playingId={playingId} />
        </View>
      );

    case 'roundup':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <RoundupView s={s} />
        </View>
      );

    case 'quiz':
      return null; // driven by the quiz phase
  }
}
