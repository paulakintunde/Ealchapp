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
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          <View style={{ gap: 10 }}>
            {s.examples.map((ex, i) => (
              <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 14, paddingHorizontal: 16 }}>
                <TX font="serifI" role="titleLg" size={19} style={{ marginBottom: 4 }}>« {ex.fr} »</TX>
                <TX role="label" color={t.txMuted}>{ex.en}</TX>
                {ex.note ? <TX role="meta" color={t.txSubtle} style={{ marginTop: 6 }}>{ex.note}</TX> : null}
              </View>
            ))}
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
                <TX font="serifI" role="titleLg" size={18} style={{ marginBottom: 3 }}>« {c.fr} »</TX>
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

    case 'practice':
      // itemIds resolved against the corpus, run as a Voice Flash style pass
      // (one prompt card at a time, audio chip, self-graded) so the lesson
      // drill looks and feels like the drill the learner knows from home.
      // Grading still flows through onGrade — the join that lets lesson study
      // feed Le Rapport and the SRS is unchanged.
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          {hero}
          <PracticeVFView itemIds={s.itemIds} sectionTitle={s.title} onPlay={onPlay} playingId={playingId} onGrade={onGrade} />
        </View>
      );

    case 'letterGrid':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          {hero}
          <LetterGridView letters={s.letters} sectionTitle={s.title} onPlay={onPlay} playingId={playingId} />
        </View>
      );

    case 'cardDeck':
      return (
        <View style={{ marginBottom: 26 }}>
          {label}
          {hero}
          <CardDeckView s={s} onPlay={onPlay} playingId={playingId} />
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
      return (
        <View style={{ marginBottom: 26 }}>
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
