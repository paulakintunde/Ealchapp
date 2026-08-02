// The v2 card types the silent-letter lesson needs and the app did not have.
//
//   SilentLetterGrid   the ending-by-ending verdict table, as a deck in the
//                      flow and the full table in a reference sheet
//   InhibitionDrillView  training the stop: physical routines, with a mic
//   TapSilentCard      tap the letters you do not say
//   ListenChooseCard   hear one word, pick which it was
//   ErrorSpotCard      here is a wrong reading, fix it
//
// The last three are QUESTION FORMATS rather than sections: they appear inside
// the quiz and inside in-flow checks, so they take a question and report a
// verdict rather than owning any progression. Answer checking lives in
// answer.logic.ts and is tested there — these files never compare strings.

import { useMemo, useState } from 'react';
import { View, TextInput } from 'react-native';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { CardFrame, SwipeDeck, useCardHeight } from '@/components/LessonDeck';
import { SilentText } from '@/components/WordCardXL';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { sound } from '@/services';
import { checkAnswer } from '@/content/answer.logic';
import { content } from '@/services/content';
import { glyphs } from '@/content/silent.logic';
import type { GridLetter, InhibitionTarget, QuizQuestion } from '@/content/schema';

import type { PlayFn } from '@/components/LessonDeck';

/* ─── Silent letter grid ─────────────────────────────────────────────────── */

/** The verdict badge: what happens to this ending.
 *
 *  Colour-coded, but never colour-ONLY — each carries its word, because a
 *  learner who cannot distinguish the hues still has to be able to read the
 *  table. That is also why the badge is a full outline rather than a coloured
 *  left edge. */
function VerdictBadge({ verdict }: { verdict: NonNullable<GridLetter['verdict']> }) {
  const t = useTheme();
  const tone =
    verdict === 'sounded' ? t.accTx : verdict === 'silent' ? t.txMuted : t.txSecondary;
  const label = verdict === 'sounded' ? 'sounded' : verdict === 'silent' ? 'silent' : 'it depends';
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: t.line(12),
        paddingHorizontal: 9,
        paddingVertical: 3,
      }}
    >
      <TX role="meta" font="med" color={tone}>{label}</TX>
    </View>
  );
}

/** The rule text that means "nothing overrides the default here".
 *
 *  Matched on the authored phrase rather than a flag, because that is what the
 *  content actually carries and adding a field would mean re-authoring sixteen
 *  rows to say something the text already says. Deliberately narrow: a row
 *  reading "not a CaReFuL letter, and this covers every plural" adds real
 *  information after the comma and keeps its line. */
export function isDefaultSilentRule(rule: string): boolean {
  return rule.trim().toLowerCase() === 'not a careful letter';
}

/** One ending's full card: the letter, its verdict, the rule, and one example
 *  with its silent characters greyed. */
export function SilentLetterRow({
  letter,
  onPlay,
  playingId,
  id,
}: {
  letter: GridLetter;
  onPlay?: PlayFn;
  playingId?: string | null;
  id: string;
}) {
  const t = useTheme();
  const on = playingId === id;
  // Does this row merely restate the default the grid already announced?
  const isDefaultRule = !!letter.rule && isDefaultSilentRule(letter.rule);
  return (
    <Press
      cue={null}
      onPress={() => onPlay?.(id, letter.ex)}
      // The rule is dropped from the row's ink, never from what a screen reader
      // hears: someone navigating by voice has no "stated once above" to rely
      // on, because they meet rows one at a time with no glance at the header.
      accessibilityLabel={`${letter.ch}, ${letter.verdict ?? ''}${letter.rule ? `, ${letter.rule}` : ''}, ${letter.ex}`}
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(10),
        backgroundColor: t.card,
        padding: 16,
        gap: 10,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <TX role="titleLg" font="semi" style={{ minWidth: 62 }}>{letter.ch}</TX>
        {letter.verdict ? <VerdictBadge verdict={letter.verdict} /> : null}
        <View style={{ flex: 1 }} />
        <Icon name="speaker" size={16} color={on ? t.acc : t.txNonText} />
      </View>

      {/* The rule line only appears on rows that BREAK the default.
          Five of the eight preview rows read "not a CaReFuL letter" verbatim,
          so the one row that differs looked identical to the ones that did not
          — and the rule the learner should notice was the hardest to spot. The
          default is now stated once above the grid; a row carrying it says
          nothing, and a row overriding it says why. */}
      {letter.rule && !isDefaultRule ? (
        <TX role="bodySm" color={t.txSecondary}>{letter.rule}</TX>
      ) : null}

      <View style={{ gap: 3 }}>
        <SilentText fr={letter.ex} silent={letter.silent} font="serifI" role="title" />
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
          {letter.ipa ? <TX role="bodySm" color={t.txSecondary}>{letter.ipa}</TX> : null}
          {letter.respell ? <TX role="bodySm" color={t.txMuted}>{letter.respell}</TX> : null}
        </View>
        {letter.en ? <TX role="bodySm" color={t.txMuted}>{letter.en}</TX> : null}
      </View>

      {letter.exception ? (
        <TX role="meta" color={t.txSubtle}>Exceptions: {letter.exception}</TX>
      ) : null}
      {letter.memo ? <TX role="meta" color={t.txSubtle}>{letter.memo}</TX> : null}
    </Press>
  );
}

/** The grid.
 *
 *  `preview` splits one authored list into two audiences: the rows marked
 *  preview walk the flow one at a time, and the whole list renders as a
 *  scrollable table in the reference sheet. One source, two densities — which
 *  is the point of the layer model, and why the sheet is allowed to be dense
 *  while the flow is not. */
export function SilentLetterGrid({
  letters,
  mode,
  onPlay,
  playingId,
  onOpenSheet,
}: {
  letters: GridLetter[];
  /** 'preview' shows only the flow rows; 'full' shows every row. */
  mode: 'preview' | 'full';
  onPlay?: PlayFn;
  playingId?: string | null;
  /** Opens the reference sheet holding the complete table. */
  onOpenSheet?: () => void;
}) {
  const t = useTheme();
  const T = useT();
  const shown = mode === 'preview' ? letters.filter((l) => l.preview) : letters;
  const hidden = letters.length - shown.length;
  // The count names the WHOLE table, not the previewed subset — the promise is
  // what the sheet contains, which is what the learner is deciding to open.
  const seeAll = T.gridSeeAll.replace('{n}', String(letters.length));

  // Stated once, at the top, instead of repeated on five of the eight rows.
  // Only worth saying when a row actually leans on it.
  const anyDefault = shown.some((l) => l.rule && isDefaultSilentRule(l.rule));

  return (
    <View style={{ gap: 12 }}>
      {anyDefault ? (
        <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 2 }}>
          {T.gridDefaultNote}
        </TX>
      ) : null}
      {shown.map((l, i) => (
        <SilentLetterRow key={`${l.ch}-${i}`} letter={l} id={`grid-${l.ch}-${i}`} onPlay={onPlay} playingId={playingId} />
      ))}
      {mode === 'preview' && hidden > 0 && onOpenSheet ? (
        <Press
          cue="tap"
          onPress={onOpenSheet}
          accessibilityRole="button"
          accessibilityLabel={seeAll}
          accessibilityHint={T.gridSeeAllHint}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            paddingVertical: 14,
            minHeight: 44,
          }}
        >
          <TX role="body" font="med" color={t.accTx}>{seeAll}</TX>
          <Icon name="chevronRight" size={15} color={t.accTx} />
        </Press>
      ) : null}
    </View>
  );
}

/* ─── Inhibition drill ───────────────────────────────────────────────────── */

/** Training the stop.
 *
 *  Unlike pronunciationLab there is no mouth position to teach, so each target
 *  is a numbered physical routine the learner PERFORMS. That is exactly why it
 *  cannot be a stack: three routines of four or five steps is fourteen
 *  instructions on one screen, which reads as a wall and gets skimmed rather
 *  than done. One routine per full-height card, swiped, is the same content at
 *  the pace the body can actually follow.
 *
 *  The closing line gets its own card for the same reason. It is the reflex
 *  the whole mission is building toward ("do this on the first three French
 *  words you see tomorrow"), and squeezed under the last target's step four it
 *  reads as a footnote to that step instead of the takeaway. */
export function InhibitionDrillView({
  intro,
  targets,
  closing,
  onPlay,
  playingId,
  renderMic,
  onIndexChange,
  initialIndex,
  onEdgeSwipe,
  active,
}: {
  intro?: string;
  targets: InhibitionTarget[];
  closing?: { text: string };
  onPlay?: PlayFn;
  playingId?: string | null;
  /** The mic row for one target, supplied by the caller so this component
   *  stays free of the speech service and remains testable. */
  renderMic?: (target: InhibitionTarget, index: number) => React.ReactNode;
  /** The card the learner has swiped to, 0-based over the composed deck
   *  (intro, then the routines, then the closing) — NOT over `targets`.
   *
   *  That distinction is the whole contract: the pager turns this into the
   *  sub-mission number, so it has to count what is actually swiped. Numbering
   *  the routines alone would make the second routine report 2 while sitting on
   *  card 3, and subMission.logic's subCount() mirrors this composition for the
   *  same reason. */
  onIndexChange?: (index: number) => void;
  /** The card to open on, over the same composed deck `onIndexChange` counts. */
  initialIndex?: number | null;
  /** Swiping past the first/last routine leaves the mission. */
  onEdgeSwipe?: (dir: 'next' | 'prev') => void;
  /** Is this mission on screen? False rewinds the deck to card 1. */
  active?: boolean;
}) {
  // Cards: an optional opener, then TWO per routine — the steps, then the words
  // it is performed on — and finally the closing reflex.
  //
  // The split is the point. A five-step routine plus four practice words plus a
  // mic is more than one screen holds: it overflowed CardFrame's scroller, so
  // the words and the mic sat below the fold looking exactly like the missing
  // content they were added to fix. It also broke the rule the rest of this
  // lesson keeps — one idea per screen — by putting "here is the routine" and
  // "here is the material" on the same card.
  //
  // Read it, then do it. That is also the honest reading order: the steps tell
  // you what to do, and turning the page to find the words is the moment you
  // start doing it.
  type Card =
    | { kind: 'intro'; text: string }
    | { kind: 'target'; target: InhibitionTarget; index: number }
    | { kind: 'practice'; target: InhibitionTarget; index: number }
    | { kind: 'closing'; text: string };

  const cards: Card[] = [
    ...(intro ? [{ kind: 'intro' as const, text: intro }] : []),
    ...targets.flatMap((target, index) => [
      { kind: 'target' as const, target, index },
      // Only when the routine actually names words. A target authored without
      // `practiceOn` keeps the single card it has always had rather than
      // gaining an empty second one.
      ...(target.practiceOn?.length ? [{ kind: 'practice' as const, target, index }] : []),
    ]),
    ...(closing ? [{ kind: 'closing' as const, text: closing.text }] : []),
  ];

  return (
    <SwipeDeck
      items={cards}
      hint="Do each one out loud before you swipe."
      onIndexChange={onIndexChange}
      initialIndex={initialIndex}
      onEdgeSwipe={onEdgeSwipe}
      active={active}
      // MEASURED, not guessed. useCardHeight subtracts a constant from the
      // WINDOW height and floors the result at 300 / caps it at 620 — it cannot
      // see the box this deck was actually handed, so on a tall phone the
      // guessed card ran past the bottom of the section and painted over the
      // outline beneath it. `fill` makes the deck measure its own row and hand
      // each card the real leftover height, so the card can never be taller
      // than the space it is in.
      fill
      keyFor={(c, i) => (c.kind === 'target' || c.kind === 'practice' ? `${c.kind}-${c.target.label}` : `${c.kind}-${i}`)}
      renderItem={(c, _i, height) => {
        if (c.kind === 'intro') return <InhibitionIntroCard text={c.text} height={height} />;
        if (c.kind === 'closing') return <InhibitionClosingCard text={c.text} height={height} />;
        if (c.kind === 'practice') {
          return (
            <InhibitionPracticeCard
              target={c.target}
              index={c.index}
              total={targets.length}
              onPlay={onPlay}
              playingId={playingId}
              renderMic={renderMic}
              height={height}
            />
          );
        }
        return (
          <InhibitionTargetCard
            target={c.target}
            index={c.index}
            total={targets.length}
            onPlay={onPlay}
            playingId={playingId}
            height={height}
          />
        );
      }}
    />
  );
}

/** The card every routine shares.
 *
 *  Sized against the real viewport rather than a fixed 460, and scrolling
 *  inside itself when a five-step routine at a large font scale does not fit.
 *  A fixed height here pushed the deck's dots and the page's own controls
 *  below the fold on shorter phones. */
function DrillCardShell({
  children,
  fill = true,
  height,
}: {
  children: React.ReactNode;
  /** The height the deck measured for this card. When present it WINS over the
   *  window-derived guess below, because it is the only number that knows how
   *  much room the section actually left — the guess is what let a card paint
   *  over the outline beneath it. */
  height?: number | null;
  /** Fill the frame's height (the steps card, whose numbered list wants the
   *  room spread through it) or hug the content (the practice card, which is
   *  short and lets CardFrame centre it).
   *
   *  This matters because CardFrame only centres content that FITS: a card that
   *  fills on purpose is by definition not centred, and anything after the
   *  filler — the mic row — lands past the bottom edge. */
  fill?: boolean;
}) {
  // Chrome on this mission: pager header, section eyebrow, term chips, the
  // deck hint row, the dots row, page padding.
  // The hook still runs unconditionally (hook order must not vary), and its
  // value is the fallback for the first frame before the row has been measured.
  // A floor of 160 stops a mid-layout measurement of 0 collapsing the card to
  // nothing — the same guard OneGroup uses.
  const fallback = useCardHeight(300);
  const h = height != null && height > 160 ? height : fallback;
  return (
    <CardFrame height={h}>
      <View style={[{ gap: 16 }, fill ? { flex: 1 } : null]}>{children}</View>
    </CardFrame>
  );
}

function InhibitionIntroCard({ text, height }: { text: string; height?: number | null }) {
  const t = useTheme();
  return (
    <DrillCardShell height={height}>
      <TX role="eyebrow" font="med" color={t.txMuted} ls={1.4} style={{ textTransform: 'uppercase' }}>
        Why this is physical
      </TX>
      <TX role="titleSm" color={t.txSecondary} style={{ lineHeight: 27 }}>{text}</TX>
    </DrillCardShell>
  );
}

/** The words a routine is performed ON.
 *
 *  `practiceOn` has been authored, schema-validated and resolvable since this
 *  section shipped, and rendered nowhere — so the card said "Read the word
 *  silently, all the way to the end" with no word on it. That is the whole
 *  mission failing quietly: an inhibition drill is a physical routine, and a
 *  routine with nothing to perform on is a paragraph about a routine.
 *
 *  Named by ITEM ID rather than restated in the section, which is why the
 *  words are resolved here at the point of use: the corpus already holds the
 *  spelling, the gloss and the transcription, and a second copy in the lesson
 *  body would be one more thing to keep in step.
 *
 *  Tappable, because hearing the stop is the point — the steps describe a
 *  sound the learner cannot check against anything they can read. */
function PracticeWords({
  itemIds,
  audio,
  onPlay,
  playingId,
}: {
  itemIds: readonly string[];
  /** The routine's own recording spec, so a word plays the authored clip when
   *  one has been delivered and falls back to TTS until then. */
  audio?: InhibitionTarget['audio'];
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  const t = useTheme();
  // Unresolvable ids are dropped rather than rendered as blanks: a corpus that
  // has moved on should cost the card a word, never a hole in the row.
  const words = itemIds
    .map((id) => ({ id, item: content.item(id) }))
    .filter((w): w is { id: string; item: NonNullable<ReturnType<typeof content.item>> } => !!w.item);
  if (!words.length) return null;

  return (
    <View style={{ gap: 10 }}>
      <TX role="eyebrow" font="med" color={t.accTx} ls={1.4} style={{ textTransform: 'uppercase' }}>
        Do it on these
      </TX>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {words.map(({ id, item }) => {
          const pid = `prac-${id}`;
          const on = playingId === pid;
          return (
            <Press
              key={id}
              cue={null}
              onPress={() => onPlay?.(pid, item.fr, audio ? undefined : item.audioRef)}
              accessibilityRole="button"
              accessibilityLabel={`${item.fr}, ${item.en ?? ''}`}
              accessibilityHint="Play this word"
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: on ? t.acc : t.line(12),
                backgroundColor: on ? t.accA(10) : t.card,
                paddingHorizontal: 13,
                paddingVertical: 10,
                // A tap target that clears the 44px minimum without forcing the
                // row to two lines on a narrow screen.
                minHeight: 44,
              }}
            >
              <View style={{ gap: 1 }}>
                <TX font="serifI" role="title">{item.fr}</TX>
                {item.respell ? <TX role="meta" color={t.txSubtle}>{item.respell}</TX> : null}
              </View>
              <Icon name="speaker" size={14} color={on ? t.acc : t.txNonText} />
            </Press>
          );
        })}
      </View>
    </View>
  );
}

/** The words a routine is performed on, plus the mic — the second half of a
 *  routine, on its own screen.
 *
 *  It repeats the routine's LABEL rather than standing alone unlabelled: the
 *  learner has just swiped away from the steps, and a screen of four words with
 *  no heading does not say which routine they belong to. */
function InhibitionPracticeCard({
  target,
  index,
  total,
  onPlay,
  playingId,
  renderMic,
  height,
}: {
  target: InhibitionTarget;
  index: number;
  total: number;
  onPlay?: PlayFn;
  playingId?: string | null;
  renderMic?: (target: InhibitionTarget, index: number) => React.ReactNode;
  height?: number | null;
}) {
  const t = useTheme();
  return (
    <DrillCardShell fill={false} height={height}>
      <View style={{ gap: 6 }}>
        <TX role="eyebrow" font="med" color={t.txMuted} ls={1.4} style={{ textTransform: 'uppercase' }}>
          Drill {index + 1} of {total}
        </TX>
        <TX role="titleLg" font="semi">{target.label}</TX>
      </View>

      {/* Deliberately no flex filler between the title and the words.
          CardFrame CENTRES content that fits and only pins to the top once it
          overflows — so a `flex: 1` spacer here made the card's content taller
          than its box on purpose, which defeated that centring and pushed the
          mic past the bottom edge. Letting the card hug its content lets the
          frame do the vertical placement it already knows how to do. */}
      <PracticeWords
        itemIds={target.practiceOn ?? []}
        audio={target.audio}
        onPlay={onPlay}
        playingId={playingId}
      />

      {target.mic && renderMic ? renderMic(target, index) : null}
    </DrillCardShell>
  );
}

/** One routine, full height. The steps are the content, so they get the space:
 *  numbered, generously spaced, and never competing with another routine. */
function InhibitionTargetCard({
  target,
  index,
  total,
  onPlay,
  playingId,
  height,
}: {
  target: InhibitionTarget;
  index: number;
  total: number;
  onPlay?: PlayFn;
  playingId?: string | null;
  height?: number | null;
}) {
  const t = useTheme();
  return (
    <DrillCardShell height={height}>
      <View style={{ gap: 6 }}>
        <TX role="eyebrow" font="med" color={t.txMuted} ls={1.4} style={{ textTransform: 'uppercase' }}>
          Drill {index + 1} of {total}
        </TX>
        <TX role="titleLg" font="semi">{target.label}</TX>
        {target.sub ? <TX role="bodySm" color={t.txMuted}>{target.sub}</TX> : null}
      </View>

      {/* flex: 1 again, and correctly this time: the words moved to their own
          card, so the steps ARE the last thing here and claiming the spare
          height is what keeps them evenly spread rather than bunched at the
          top. */}
      <View style={{ gap: 14, flex: 1 }}>
        {target.steps.map((step, si) => (
          <View key={si} style={{ flexDirection: 'row', gap: 13 }}>
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: t.line(14),
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 1,
              }}
            >
              <TX role="meta" font="med" color={t.txSecondary}>{si + 1}</TX>
            </View>
            <TX role="body" color={t.txSecondary} style={{ flex: 1, lineHeight: 23 }}>{step}</TX>
          </View>
        ))}
      </View>

      {/* The words and the mic live on the NEXT card — see the deck
          composition above. */}
    </DrillCardShell>
  );
}

/** The closing reflex, on its own card.
 *
 *  This is the instruction the learner takes out of the app and into the
 *  street, which is the whole point of an inhibition drill: the reflex is
 *  built by repetition in the world, not by finishing a screen. */
function InhibitionClosingCard({ text, height }: { text: string; height?: number | null }) {
  const t = useTheme();
  return (
    <DrillCardShell height={height}>
      <TX role="eyebrow" font="med" color={t.accTx} ls={1.4} style={{ textTransform: 'uppercase' }}>
        Take this with you
      </TX>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TX role="titleLg" font="semi" style={{ lineHeight: 32 }}>{text}</TX>
      </View>
    </DrillCardShell>
  );
}

/* ─── tapSilent ──────────────────────────────────────────────────────────── */

/** Tap the letters you do not say.
 *
 *  The word renders as individual letter targets. Multi-letter answers ('ent')
 *  need several taps, and order does not matter — see tapSilentCorrect. */
export function TapSilentCard({
  question,
  onAnswer,
}: {
  question: QuizQuestion;
  onAnswer?: (correct: boolean) => void;
}) {
  const t = useTheme();
  const word = question.word ?? '';
  const letters = useMemo(() => glyphs(word), [word]);
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);

  const expected = typeof question.correct === 'string' ? question.correct : '';
  // How many taps the answer needs, so the card knows when to auto-check.
  const needed = useMemo(() => new Set(expected.toLowerCase().split('')).size, [expected]);

  const toggle = (i: number) => {
    if (checked !== null) return;
    sound.play('tap');
    setPicked((p) => {
      const next = p.includes(i) ? p.filter((x) => x !== i) : [...p, i];
      if (next.length === needed) {
        const res = checkAnswer(question, next.map((ix) => letters[ix].ch));
        const ok = res?.correct ?? false;
        setChecked(ok);
        sound.play(ok ? 'success' : 'error');
        onAnswer?.(ok);
      }
      return next;
    });
  };

  return (
    <View style={{ gap: 18 }}>
      <TX role="titleLg" font="semi">{question.q}</TX>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {letters.map((g, i) => {
          const on = picked.includes(i);
          const border = checked === null ? (on ? t.acc : t.line(12)) : on ? (checked ? t.accTx : t.danger) : t.line(8);
          return (
            <Press
              key={`${i}-${g.ch}`}
              cue={null}
              onPress={() => toggle(i)}
              disabled={checked !== null || g.ch === ' '}
              // The entire task is "which letters did you mark silent", and
              // being marked was communicated only by a border colour.
              accessibilityRole="checkbox"
              accessibilityLabel={g.ch}
              accessibilityState={{ checked: on, disabled: checked !== null || g.ch === ' ' }}
              style={{
                minWidth: 46,
                height: 58,
                paddingHorizontal: 6,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: g.ch === ' ' ? 'transparent' : border,
                backgroundColor: on ? t.accA(10) : g.ch === ' ' ? 'transparent' : t.card,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX role="titleLg" font="semi" color={on ? t.accTx : t.txPrimary}>{g.ch}</TX>
            </Press>
          );
        })}
      </View>

      {checked !== null ? (
        <View style={{ gap: 6 }}>
          <TX role="body" font="med" color={checked ? t.accTx : t.danger}>
            {checked ? 'Correct' : `The silent letters are: ${expected}`}
          </TX>
          {question.why ? <TX role="bodySm" color={t.txSecondary}>{question.why}</TX> : null}
        </View>
      ) : (
        <TX role="meta" color={t.txSubtle} center>
          {needed > 1 ? `Tap ${needed} letters` : 'Tap one letter'}
        </TX>
      )}
    </View>
  );
}

/* ─── listenChoose ───────────────────────────────────────────────────────── */

/** Hear one word, pick which it was.
 *
 *  Audio-first by construction: the options are hidden until the clip has been
 *  played at least once. This is the format no mcq can replace, because the
 *  whole question is whether the learner can HEAR a difference, and showing
 *  the spellings first lets the eye answer instead of the ear. */
export function ListenChooseCard({
  question,
  onAnswer,
  onPlay,
  playingId,
  id,
}: {
  question: QuizQuestion;
  onAnswer?: (correct: boolean) => void;
  onPlay?: PlayFn;
  playingId?: string | null;
  id: string;
}) {
  const t = useTheme();
  const [heard, setHeard] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const on = playingId === id;
  const opts = question.opts ?? [];

  const play = () => {
    setHeard(true);
    // The clip is named by the question's audio spec; the caller resolves it
    // to a recording or falls back to TTS on the answer text.
    onPlay?.(id, question.audio?.clip ?? opts[typeof question.correct === 'number' ? question.correct : 0] ?? '');
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    const res = checkAnswer(question, i);
    const ok = res?.correct ?? false;
    setPicked(i);
    sound.play(ok ? 'success' : 'error');
    onAnswer?.(ok);
  };

  return (
    <View style={{ gap: 18 }}>
      <TX role="titleLg" font="semi">{question.q}</TX>

      <Press
        cue={null}
        onPress={play}
        accessibilityLabel="Play the audio"
        style={{ alignSelf: 'center', alignItems: 'center', gap: 12, paddingVertical: 8 }}
      >
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            borderWidth: 1,
            borderColor: on ? t.acc : t.accA(45),
            backgroundColor: on ? t.accA(12) : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="speaker" size={26} color={t.acc} />
        </View>
        <Waveform count={14} height={20} barWidth={3} gap={3} active={on} color={on ? t.acc : t.txNonText} />
      </Press>

      {!heard ? (
        <TX role="meta" color={t.txSubtle} center>Listen first</TX>
      ) : (
        <View style={{ gap: 10 }}>
          {opts.map((o, i) => {
            const isPicked = picked === i;
            const isRight = typeof question.correct === 'number' && i === question.correct;
            const border =
              picked === null ? t.line(12) : isRight ? t.accTx : isPicked ? t.danger : t.line(8);
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
                <TX font="serifI" role="title">{o}</TX>
              </Press>
            );
          })}
        </View>
      )}

      {picked !== null && question.why ? (
        <TX role="bodySm" color={t.txSecondary}>{question.why}</TX>
      ) : null}
    </View>
  );
}

/* ─── errorSpot ──────────────────────────────────────────────────────────── */

/** Here is a wrong reading. Fix it.
 *
 *  Production rather than recognition: the learner types the correction, and
 *  any of the authored accepted forms counts. A near-miss is shown the
 *  canonical answer rather than simply marked wrong. */
export function ErrorSpotCard({
  question,
  onAnswer,
}: {
  question: QuizQuestion;
  onAnswer?: (correct: boolean) => void;
}) {
  const t = useTheme();
  const [text, setText] = useState('');
  const [checked, setChecked] = useState<boolean | null>(null);

  const submit = () => {
    if (checked !== null || !text.trim()) return;
    const res = checkAnswer(question, text);
    const ok = res?.correct ?? false;
    setChecked(ok);
    sound.play(ok ? 'success' : 'error');
    onAnswer?.(ok);
  };

  return (
    <View style={{ gap: 18 }}>
      <TX role="titleLg" font="semi">{question.q}</TX>

      <TextInput
        value={text}
        onChangeText={setText}
        editable={checked === null}
        placeholder="Type the correction"
        placeholderTextColor={t.txSubtle}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={submit}
        style={{
          borderRadius: 14,
          borderWidth: 1,
          borderColor: checked === null ? t.line(12) : checked ? t.accTx : t.danger,
          backgroundColor: t.input,
          paddingHorizontal: 16,
          paddingVertical: 14,
          fontSize: 18,
          color: t.txPrimary,
        }}
      />

      {checked === null ? (
        <Button label="Check" onPress={submit} disabled={!text.trim()} />
      ) : (
        <View style={{ gap: 6 }}>
          <TX role="body" font="med" color={checked ? t.accTx : t.danger}>
            {checked ? 'Correct' : question.answer ?? ''}
          </TX>
          {question.why ? <TX role="bodySm" color={t.txSecondary}>{question.why}</TX> : null}
        </View>
      )}
    </View>
  );
}
