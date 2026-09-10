import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, ScrollView, View } from 'react-native';
import { TX } from '@/components/Type';
import { Press, Badge } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { LessonModal } from '@/components/LessonModal';
import { useTheme } from '@/theme/useTheme';
import { CardFrame, QuestionModal, SwipeDeck } from '@/components/LessonDeck';
import { WordCardXL } from '@/components/WordCardXL';
import { useCardHeight, useMeasuredCardHeight } from '@/hooks/useCardHeight';
import { useT } from '@/i18n/useT';
import { sound, tts, stt, type SttResult } from '@/services';
import { content } from '@/services/content';
import { useProgress } from '@/store/useProgress';
import { normalizeFr, barsForLevel } from '@/utils/score';
import { resolveAudio, speedsFor, NORMAL_RATE } from '@/content/lessonAudio.logic';
import { dicteeMode, dicteeTarget, dicteeWords, wordDecoys } from '@/content/dictee.logic';
import {
  BEAT,
  acceptedReplies,
  bestReply,
  transcriptOf,
  unheardReason,
  type Attempt,
  type Reply,
  type TurnPhase,
} from '@/content/scenario.logic';
import type {
  LessonSection,
  GridSound,
  SoundGroup,
  TrapCard,
  LabSound,
  ScenarioTurn,
  SectionAudio,
} from '@/content/schema';

// The mission-journey renderers: the 12 section types that only exist for the
// Sons v2 rebuild (story, goals, soundGrid, groupDrill, trapDrill,
// pronunciationLab, dictation, scenario, listening, reading, reviewDeck,
// progressCheck). MissionSection.tsx delegates here for exactly these types
// and falls back to the pre-existing SectionView for everything else, so the
// old lesson content (letterGrid, cardDeck, tapTable, vocabThemes,
// flashcards, quiz, commonErrors, roundup…) keeps rendering unchanged.
//
// Same layout rule as LessonRich.tsx: French text never shares a flex row
// with a fixed-width sibling inside a horizontal-scrolling ancestor — it gets
// its own full-width line, the control goes on the row below.

type Story = Extract<LessonSection, { type: 'story' }>;
type Goals = Extract<LessonSection, { type: 'goals' }>;
type SoundGridSec = Extract<LessonSection, { type: 'soundGrid' }>;
type GroupDrillSec = Extract<LessonSection, { type: 'groupDrill' }>;
type TrapDrillSec = Extract<LessonSection, { type: 'trapDrill' }>;
type PronunciationLabSec = Extract<LessonSection, { type: 'pronunciationLab' }>;
type DictationSec = Extract<LessonSection, { type: 'dictation' }>;
type ScenarioSec = Extract<LessonSection, { type: 'scenario' }>;
type ListeningSec = Extract<LessonSection, { type: 'listening' }>;
type ReadingSec = Extract<LessonSection, { type: 'reading' }>;
type ReviewDeckSec = Extract<LessonSection, { type: 'reviewDeck' }>;
type ProgressCheckSec = Extract<LessonSection, { type: 'progressCheck' }>;

/** Small circular play button, the one control every mission view uses to
 *  hear a French line — always via the real tts service, never auto-played. */
function PlayDot({ text, size = 34 }: { text: string; size?: number }) {
  const t = useTheme();
  const [playing, setPlaying] = useState(false);
  const go = () => {
    if (playing) return;
    sound.play('tap');
    setPlaying(true);
    tts.speak(text, { onDone: () => setPlaying(false), onError: () => setPlaying(false) });
  };
  return (
    <Press
      cue={null}
      onPress={go}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 1,
        borderColor: playing ? t.acc : t.accA(45),
        backgroundColor: playing ? t.accA(14) : 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name={playing ? 'pause' : 'play'} size={size * 0.4} color={t.acc} />
    </Press>
  );
}

function OptRow({
  label,
  onPress,
  state,
}: {
  label: string;
  onPress: () => void;
  /** undefined = unanswered; 'correct' | 'wrong' | 'other' once picked. */
  state?: 'correct' | 'wrong' | 'other';
}) {
  const t = useTheme();
  const bg = state === 'correct' ? t.accA(10) : state === 'wrong' ? t.dangerA(8) : t.card;
  const bd = state === 'correct' ? t.accA(60) : state === 'wrong' ? t.dangerA(55) : t.line(12);
  const fg = state === 'other' ? t.txSubtle : t.txPrimary;
  return (
    <Press
      cue={state ? null : 'tap'}
      onPress={state ? undefined : onPress}
      style={{
        minHeight: 50,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: bd,
        backgroundColor: bg,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <TX role="body" color={fg} style={{ flex: 1 }}>{label}</TX>
      {state === 'correct' ? <Icon name="check" size={16} color={t.acc} /> : null}
      {state === 'wrong' ? <Icon name="x" size={14} color={t.danger} /> : null}
    </Press>
  );
}

/* ─── 1. Story ────────────────────────────────────────────────────────────── */

export function StoryView({ s }: { s: Story }) {
  const t = useTheme();
  return (
    <View style={{ gap: 12 }}>
      <View
        style={{
          borderRadius: 18,
          borderWidth: 1,
          borderColor: t.line(8),
          backgroundColor: t.card2,
          padding: 16,
        }}
      >
        <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 6 }}>{s.setting}</TX>
        <TX font="serifI" role="titleLg" lhMult={1.15}>{s.title}</TX>
      </View>
      {s.bubbles.map((b, i) => {
        const mine = b.from === 'user';
        return (
          <View key={i} style={{ alignItems: mine ? 'flex-end' : 'flex-start' }}>
            <View
              style={{
                maxWidth: '86%',
                borderRadius: mine ? 18 : 4,
                borderTopLeftRadius: mine ? 18 : 4,
                borderWidth: 1,
                borderColor: mine ? t.accA(30) : t.line(8),
                backgroundColor: mine ? t.accA(10) : t.card,
                padding: 13,
              }}
            >
              {b.warn ? (
                <TX font="bold" role="meta" ls={2} color={t.danger} style={{ marginBottom: 6 }}>{b.warn}</TX>
              ) : null}
              <TX role="body" lhMult={1.4}>{b.fr}</TX>
              <TX font="serifI" role="bodySm" color={t.txMuted} style={{ marginTop: 4 }}>{b.en}</TX>
              <View style={{ marginTop: 8 }}>
                <PlayDot text={b.fr} size={28} />
              </View>
            </View>
          </View>
        );
      })}
      <View
        style={{
          borderRadius: 18,
          borderWidth: 1,
          borderColor: t.accA(40),
          backgroundColor: t.accCard(9),
          padding: 16,
          marginTop: 4,
        }}
      >
        <TX font="serifI" role="titleSm" lhMult={1.3}>{s.closing.fr}</TX>
        <TX role="bodySm" color={t.txMuted} style={{ marginTop: 6 }}>{s.closing.en}</TX>
      </View>
    </View>
  );
}

/* ─── 2. Goals ────────────────────────────────────────────────────────────── */

export function GoalsView({ s }: { s: Goals }) {
  const t = useTheme();
  return (
    <View style={{ gap: 10 }}>
      {s.goals.map((g, i) => (
        <View
          key={i}
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.line(8),
            backgroundColor: t.card,
            padding: 14,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 13,
          }}
        >
          <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="check" size={14} color={t.accInk} />
          </View>
          <View style={{ flex: 1 }}>
            <TX font="semi" role="body">{g.t}</TX>
            <TX role="bodySm" color={t.txMuted} style={{ marginTop: 2 }}>{g.s}</TX>
          </View>
        </View>
      ))}
    </View>
  );
}

/* ─── 3. Sound grid ───────────────────────────────────────────────────────── */

function SoundCell({ snd, onPress }: { snd: GridSound; onPress: () => void }) {
  const t = useTheme();
  return (
    <Press
      cue="tap"
      onPress={onPress}
      style={{
        width: '23%',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: snd.trap ? t.dangerA(35) : t.line(10),
        backgroundColor: snd.trap ? t.dangerA(6) : t.card,
        paddingVertical: 10,
        alignItems: 'center',
        gap: 2,
        marginBottom: 8,
      }}
    >
      <TX font="notation" role="titleSm" color={snd.trap ? t.danger : t.txPrimary}>{snd.ipa}</TX>
      <TX role="meta" color={t.txSubtle}>{snd.graphemes[0]}</TX>
    </Press>
  );
}

export function SoundGridView({ s }: { s: SoundGridSec }) {
  const t = useTheme();
  const [sel, setSel] = useState<GridSound | null>(null);
  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {s.sounds.map((snd, i) => (
          <SoundCell key={i} snd={snd} onPress={() => setSel(snd)} />
        ))}
      </View>
      <LessonModal open={!!sel} onClose={() => setSel(null)} size="full">
        {sel ? (
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 12 }}>
              <View style={{ width: 66, height: 66, borderRadius: 16, borderWidth: 1.5, borderColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <TX font="notation" role="titleLg" color={t.acc}>{sel.ipa}</TX>
              </View>
              <View style={{ flex: 1 }}>
                <TX font="serifI" role="titleLg">{sel.graphemes.join(', ')}</TX>
                <TX role="bodySm" color={t.txMuted} style={{ marginTop: 3 }}>{sel.sound}</TX>
              </View>
            </View>
            <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14, marginBottom: 10 }}>
              <TX role="body">{sel.ex}</TX>
              {sel.exNote ? <TX role="bodySm" color={t.txMuted} style={{ marginTop: 3 }}>{sel.exNote}</TX> : null}
              <View style={{ marginTop: 8 }}>
                <PlayDot text={sel.ex} />
              </View>
            </View>
            {sel.memo ? (
              <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accCard(7), padding: 14 }}>
                <TX role="bodySm" lhMult={1.5}>{sel.memo}</TX>
              </View>
            ) : null}
          </View>
        ) : null}
      </LessonModal>
    </View>
  );
}

/* ─── 4. Group drill ──────────────────────────────────────────────────────── */

function OneGroup({
  g,
  xl,
  hideLabel,
  onAnswered,
  onIndexChange,
  initialIndex,
}: {
  g: SoundGroup;
  xl?: boolean;
  hideLabel?: boolean;
  /** Fires once the control has been answered, so the page can stop letting
   *  the learner swipe past a check they never took. */
  onAnswered?: () => void;
  /** Which word of this group is on screen, so the pager can address it as
   *  10.1, 10.2 … Passed only for the single-group XL shape: with several
   *  groups the position is (group, card) and a lone index would name the wrong
   *  thing. See the note in subMission.logic's `groupDrill` case. */
  onIndexChange?: (index: number) => void;
  /** Open on this card rather than the first, for a resume or a deep link. */
  initialIndex?: number | null;
}) {
  const t = useTheme();
  const [picked, setPicked] = useState(-1);

  // A group carries words, a check, or both. At size xl sons.06 splits them
  // onto separate missions, so each half has to render alone.
  //
  // `items` is OPTIONAL on a SoundGroup and absent on every control page: the
  // schema says a group carries EITHER items OR a check, and the xl branch
  // below already renders the check-only case deliberately ("a check with no
  // words is the whole mission"). This line contradicted both and read
  // `.length` off undefined, so a control page crashed the whole mission with
  // "Cannot read property 'length' of undefined" instead of rendering.
  //
  // Found on a device walk of sons.09 mission 4. It was already latent in
  // sons.07 s05-drill-trigger, which ships the same shape and has the same
  // crash; no test caught it because every guard in the suite reads the
  // CONTENT and this is a renderer that never handled what the content is
  // allowed to say. Pinned now by subMission.logic.test.ts.
  const q = g.check;
  const hasWords = (g.items?.length ?? 0) > 0;

  const check = q ? (
    <View style={{ marginTop: 6, borderRadius: 16, borderWidth: 1, borderColor: t.accA(25), backgroundColor: t.card2, padding: 14 }}>
      {/* No "CONTRÔLE" label here. The section eyebrow above already says it,
          and on the four split control pages the word appeared three times on
          one screen — eyebrow, subtitle, and this. */}
      <TX role="body" style={{ marginBottom: 10 }}>{q.q}</TX>
      <View style={{ gap: 8 }}>
        {q.opts.map((o, i) => (
          <OptRow
            key={i}
            label={o}
            onPress={() => {
              if (picked >= 0) return; // answered once; the verdict is the point
              sound.play(i === q.correct ? 'success' : 'error');
              setPicked(i);
              onAnswered?.();
            }}
            state={picked < 0 ? undefined : i === q.correct ? 'correct' : i === picked ? 'wrong' : 'other'}
          />
        ))}
      </View>
      {/* The reason, once they have committed to an answer. A control that only
          recolours two rows tells someone they were wrong without telling them
          why — and being wrong is the moment the rule was most likely to land. */}
      {picked >= 0 && q.why ? (
        <View style={{ marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: t.line(9) }}>
          <TX role="bodySm" color={t.txSecondary} style={{ lineHeight: 22 }}>{q.why}</TX>
        </View>
      ) : null}
    </View>
  ) : null;

  // At size xl each word is its own hero card, swiped: 56pt French, IPA and
  // respelling beneath, and the silent letters greyed and faded from the
  // `silent` indices the corpus carries. Stacked as small rows the word is a
  // label beside a play button and the silent letters are invisible, which is
  // the one thing this mission exists to show.
  if (xl) {
    // Fills the page rather than hugging its content: the pager hands this
    // mission the whole viewport (ownsLayout), and the deck absorbs it.
    //
    // The words and the CONTRÔLE are now SEPARATE missions (see the split in
    // sons.06's seed), and that is what makes this layout honest. Stacking
    // both in one fixed viewport meant two competing floors: flex alone let
    // the four-option check take what it wanted and squeezed the deck to
    // nothing, so the hero card — the one thing this mission exists to show —
    // rendered at zero height. Giving each a floor only moved the failure to
    // the page scroll, which then fought the deck's own drag.
    //
    // One thing per page removes the competition rather than refereeing it:
    // whichever half this group carries gets the entire viewport.
    return (
      <View style={{ gap: 10, flex: 1 }}>
        {/* The group label is suppressed when it only repeats the mission's own
            title. sons.06 splits each family onto its own mission and names the
            mission after the family, so the section eyebrow and this label are
            the same string — "CaReFuL: the four that stay awake" drawn twice,
            once by MissionSection and once here. The heading still exists for
            the multi-group case, where it is the only thing naming which family
            you are looking at. */}
        {hideLabel ? null : <TX font="semi" role="label" ls={1.6} color={t.accTx}>{g.label}</TX>}
        {hasWords ? (
          <View style={{ flex: 1, minHeight: 0 }}>
            {/* No hint row. This is the one deck that cannot afford one: the
                XL card is a full-viewport hero whose play button sits at the
                bottom, and a hint row above the deck is height the card never
                gets. The instruction it carried ("the grey letters are the
                ones you do not say") is also the one thing this card teaches
                by ITSELF — the silent letters visibly recede from ink over
                400ms on every card. Saying it in prose above the animation is
                the caption on a picture of itself.

                It survives for screen readers as the deck's accessibilityHint
                below, which costs no layout height. */}
            <SwipeDeck
              fill
              items={g.items ?? []}
              a11yHint="One word at a time. The grey letters are the ones you do not say."
              keyFor={(it, i) => `${g.label}-${it.fr}-${i}`}
              renderItem={(it, _i, cardH) => <GroupWordCard item={it} height={cardH} />}
              onIndexChange={onIndexChange}
              initialIndex={initialIndex}
            />
          </View>
        ) : null}
        {/* A check with no words is the whole mission: centre it rather than
            letting it sit against the label with dead space underneath. */}
        {check ? <View style={hasWords ? undefined : { flex: 1, justifyContent: 'center' }}>{check}</View> : null}
      </View>
    );
  }

  return (
    <View style={{ gap: 8 }}>
      <TX font="semi" role="label" ls={1.6} color={t.accTx}>{g.label}</TX>
      {/* Same optional-`items` contract as the xl branch above. No shipped
          content reaches a check-only group at this size today, but the schema
          permits one and an unguarded `.map` here would crash it exactly as
          line 306 did. */}
      {(g.items ?? []).map((it, i) => (
        <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ flex: 1 }}>
            {/* MIXED CHILDREN, and the one case UDL 08 says needs a device.
                The French is the content, so the outer TX is tagged French.
                What is NOT established is what a screen reader does with the
                nested notation run inside a French-tagged parent: it may
                inherit the French voice, which is the wrong voice for a
                transcription. Tagging the parent is still better than the
                status quo (everything in the interface voice), but this
                specific line is what the TalkBack/VoiceOver walk should look
                at first. */}
            <TX role="body" lang="fr">{it.fr} {it.ipa ? <TX font="notation" role="bodySm" color={t.txMuted}>{it.ipa}</TX> : null}</TX>
            {/* THE SECOND LINE, AND `note` IS NOT THE ONLY THING THAT BELONGS ON IT.
             *
             *  Until 2026-08-13 this drew `note` alone. `respell` and `en` were
             *  documented as XL-only (schema.ts:899) and dropped here in
             *  silence — so a card carrying them and no note rendered as a bare
             *  French string: no pronunciation, no meaning, just the word and a
             *  play button.
             *
             *  Measured across the shipped seed when a2.13's device pass found
             *  it: 591 OF 730 `lg` GROUP-DRILL CARDS, ACROSS 28 LESSONS. a1.08
             *  ships 39 of them, a1.09 and a1.10 forty each. The data was there
             *  and correct in every one; only this line was lossy.
             *
             *  Fixing it HERE rather than in the content is what makes it stay
             *  fixed: 28 lessons would each have needed a source edit, a version
             *  bump, a re-apply and a re-merge, and every future lesson would
             *  have had to remember. The renderer is the one place that knows
             *  what it can draw.
             *
             *  `note` still wins when present, because a lesson that wrote one
             *  chose its wording deliberately (a2.13 pairs the respelling with
             *  the gloss in exactly this shape). Otherwise the two fields are
             *  joined the same way, so both paths look identical on glass. */}
            {(() => {
              const second = it.note ?? [it.respell, it.en].filter(Boolean).join(' · ');
              return second ? <TX role="bodySm" color={t.txMuted} style={{ marginTop: 2 }}>{second}</TX> : null;
            })()}
          </View>
          <PlayDot text={it.fr} size={30} />
        </View>
      ))}
      {check}
    </View>
  );
}

/** One word of a group drill, as the XL hero card.
 *
 *  Owns its own playback state rather than taking the section's `onPlay`,
 *  because the group drill renders inside MissionRich where every other
 *  control speaks through the local tts service (PlayDot). Keeping to that
 *  convention means the card behaves like its neighbours instead of
 *  introducing a second audio path through the same screen. */
function GroupWordCard({
  item,
  height,
}: {
  item: NonNullable<SoundGroup['items']>[number];
  /** The height the deck measured for this card, in `fill` mode. Null means
   *  the old behaviour: guess the surrounding chrome via useCardHeight. A
   *  measured value is always better — the guess is what put the drill's
   *  CONTRÔLE question below the fold, because 340 did not account for the
   *  question box and the button underneath it. */
  height?: number | null;
}) {
  const [playing, setPlaying] = useState(false);
  // Hook order is unconditional; the measured height simply wins when present.
  const fallback = useCardHeight(340);
  // A floor stops a mid-layout measurement of 0 collapsing the card to nothing.
  const h = height != null && height > 160 ? height : fallback;

  const speak = (slow?: boolean) => {
    if (playing) return;
    sound.play('tap');
    setPlaying(true);
    tts.speak(item.fr, {
      slow,
      onDone: () => setPlaying(false),
      onError: () => setPlaying(false),
    });
  };

  return (
    <CardFrame height={h} padded={false}>
      <WordCardXL
        fr={item.fr}
        ipa={item.ipa}
        respell={item.respell}
        en={item.en}
        silent={item.silent}
        note={item.note}
        playing={playing}
        fadeKey={item.itemId ?? item.fr}
        onPlay={() => speak(false)}
        onPlaySlow={() => speak(true)}
      />
    </CardFrame>
  );
}

export function GroupDrillView({
  s,
  onBlockedChange,
  onIndexChange,
  initialIndex,
}: {
  s: GroupDrillSec;
  /** Reports whether this mission is holding the learner. True while a control
   *  page's question is unanswered — a check you can swipe past was never a
   *  check. Only ever true for a group that carries a check and no words, which
   *  is the split shape sons.06 authored; every other drill reports false and
   *  behaves exactly as before. */
  onBlockedChange?: (blocked: boolean) => void;
  /** Which card of this drill is on screen, so the pager's header can read
   *  10.1 … 10.11 instead of freezing on 10 for the whole deck.
   *
   *  Reported ONLY for the single-group XL shape, which is the one that
   *  paginates as one flat deck. subCount() returns 1 for every other shape, so
   *  passing an index from them would send a position the header has no
   *  denominator for and no anchor could restore. */
  onIndexChange?: (index: number) => void;
  initialIndex?: number | null;
}) {
  const t = useTheme();
  const T = useT();
  const [ix, setIx] = useState(0);
  const last = ix >= s.groups.length - 1;
  // At size xl the pager gives this mission the whole viewport, so the chain
  // from here down to the card has to flex or the deck cannot claim the
  // leftover space. Any other size keeps the hugging box it has always had,
  // inside the scrolling page sons.02 and sons.03 still rely on.
  const xl = s.size === 'xl';

  // An XL drill now ships ONE group per mission (sons.06 splits its four
  // families, and each family's check, into their own pages). With a single
  // group there is nothing to page between here, so the in-section progress
  // row and the "Groupe suivant" button below are not just redundant — they
  // are the chrome that pushed the word card past the bottom of the screen.
  // The pager's own dots and swipe already do this job, one level up.
  // ONE group means there is nothing to page between, whatever the card size.
  //
  // This used to be `xl && groups.length === 1`, so a single-group drill at
  // size md fell through to the multi-group render and drew its chrome: a dots
  // row with exactly one dot, and a "Every group seen. Swipe to continue."
  // footer. On a control page that footer is actively wrong — the learner has
  // answered, the pager's Next has un-greyed, and the card is telling them to
  // swipe instead. Reported on missions 9 and 14 (Paul, device walk).
  //
  // The size only ever mattered because at xl the dots and the "next group"
  // button pushed the hero card off the bottom. One group has no next group at
  // any size, so the size is not the condition.
  const single = s.groups.length === 1;

  // Compared loosely (case and surrounding space ignored) because the point is
  // whether the learner READS the same line twice, not whether two strings are
  // byte-equal.
  const sameAsTitle = (label: string) =>
    label.trim().toLowerCase() === (s.title ?? '').trim().toLowerCase();

  // A CONTROL PAGE is a group carrying a question and no words — the shape
  // sons.06 split its four families into. That page, and only that page, holds
  // the learner until they answer. A drill that also carries words is teaching
  // material with a check attached and must stay swipeable.
  // `items` may be ABSENT rather than empty on a control page — five groups in
  // the seed omit the key entirely (sons.09's four checks, sons.07's Contrôle).
  // Reading `.length` off those would throw; it has never fired only because
  // the `groups.length === 1` test short-circuits before reaching it, which is
  // luck rather than design.
  const controlOnly = s.groups.length === 1 && !!s.groups[0].check && (s.groups[0].items?.length ?? 0) === 0;
  const [answered, setAnswered] = useState(false);
  // Hooks run unconditionally and above the early return, so hook order cannot
  // vary with `single`.
  useEffect(() => {
    onBlockedChange?.(controlOnly && !answered);
    // Reporting false on unmount matters: swiping away from an unanswered check
    // must not leave the pager blocked on a section that is no longer on screen.
    return () => onBlockedChange?.(false);
    // onBlockedChange IS a dependency, deliberately. The pager passes it only to
    // the page in view (`i === page ? setSectionBlocked : undefined`), and this
    // section is already mounted by the time it BECOMES that page — inside
    // PAGE_WINDOW its neighbours render ahead of being swiped to. Without the
    // callback in the deps the effect never re-runs on that transition, so the
    // block was raised while the prop was still undefined and the gate never
    // appeared. eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlOnly, answered, onBlockedChange]);

  if (single) {
    return (
      // `xl` passes the AUTHORED size through rather than forcing the hero
      // layout: a control page is prose and options, and rendering it as a
      // 56pt word card would be wrong. A filling wrapper only when the hero
      // layout actually needs the height.
      // Only the XL word deck has cards to count, so only it reports an index.
      // A control page is one screen and a non-XL group is a stacked column,
      // and subCount() returns 1 for both — reporting a position either would
      // send the header a number it has no denominator for.
      //
      // Kept OUTSIDE the JSX element on purpose: a comment inside the tag puts
      // slashes in it, and the pin in subMission.logic.test.ts matches call
      // sites with `/<OneGroup[^/]*\/>/`. Weakening that regex to fit a comment
      // would be trading a real guard for a formatting preference.
      <View style={xl ? { flex: 1 } : undefined}>
        <OneGroup
          g={s.groups[0]}
          xl={xl}
          hideLabel={sameAsTitle(s.groups[0].label)}
          onAnswered={() => setAnswered(true)}
          onIndexChange={xl ? onIndexChange : undefined}
          initialIndex={xl ? initialIndex : undefined}
        />
      </View>
    );
  }

  return (
    <View style={xl ? { flex: 1 } : undefined}>
      <View style={{ flexDirection: 'row', gap: 6, marginBottom: 14 }}>
        {s.groups.map((g, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              backgroundColor: i <= ix ? t.acc : t.line(10),
            }}
          />
        ))}
      </View>
      {/* The flexing middle: the group takes the space the progress row and
          the button below it do not, and the deck inside it does the same
          again. Without this box the `flex: 1` chain breaks here and the card
          falls back to its guessed height.

          It SCROLLS because the two things inside it both have floors now (a
          minimum deck height, and a check block whose size is set by its option
          count). On a tall screen they both fit and this never moves; on a
          short one, or at a large font scale, the learner scrolls a little
          instead of the card collapsing or the question dropping off. */}
      {xl ? (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          nestedScrollEnabled
          directionalLockEnabled
          showsVerticalScrollIndicator={false}
        >
          <OneGroup key={ix} g={s.groups[ix]} xl hideLabel={sameAsTitle(s.groups[ix].label)} />
        </ScrollView>
      ) : (
        <OneGroup key={ix} g={s.groups[ix]} xl={false} hideLabel={sameAsTitle(s.groups[ix].label)} />
      )}
      {!last ? (
        <Press
          cue="tap"
          onPress={() => setIx((n) => n + 1)}
          style={{ height: 48, borderRadius: 24, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginTop: 14 }}
        >
          <TX font="semi" role="body" color={t.accInk}>{T.nextGroup}</TX>
        </Press>
      ) : (
        <View style={{ marginTop: 14, alignItems: 'center' }}>
          <TX role="bodySm" color={t.txMuted}>{T.allGroupsSeen}</TX>
        </View>
      )}
    </View>
  );
}

/* ─── 5. Trap drill ───────────────────────────────────────────────────────── */

/** `height` is the measured room a filling SwipeDeck hands each card. Null in
 *  the stacked render, where the card hugs its content as it always did. */
function TrapFlipCard({ c, height = null }: { c: TrapCard; height?: number | null }) {
  const t = useTheme();
  const T = useT();
  const [flipped, setFlipped] = useState(false);
  const face = {
    borderRadius: 20,
    borderWidth: 1,
    padding: 22,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    gap: 8,
    ...(height ? { height } : null),
  };
  return (
    <Press
      cue="flip"
      onPress={() => setFlipped((f) => !f)}
      accessibilityRole="button"
      accessibilityLabel={flipped ? `${c.fr}. ${c.tip}` : `${c.promptLabel}. ${T.tapToFlip}.`}
      style={height ? { flex: 1 } : { marginBottom: 10 }}
    >
      {!flipped ? (
        <View style={[face, { borderColor: t.dangerA(35), backgroundColor: t.dangerA(6) }]}>
          <TX font="semi" role="meta" ls={2} color={t.txSubtle}>{c.promptLabel}</TX>
          <TX font="serif" size={64} role="display">{c.promptSound}</TX>
          <TX role="bodySm" color={t.txSubtle}>{T.tapToFlip}</TX>
        </View>
      ) : (
        <View style={[face, { borderColor: t.accA(45), backgroundColor: t.accCard(10) }]}>
          <TX font="serifI" role="titleLg" color={t.acc} lang="fr">{c.fr}</TX>
          <TX font="notation" role="body" color={t.txMuted}>{c.ipa}</TX>
          <TX role="bodySm" center lhMult={1.5} style={{ marginTop: 4 }}>{c.tip}</TX>
        </View>
      )}
    </Press>
  );
}

/** The drill's options.
 *
 *  Deliberately NOT a single flex row. Four options across a Pixel 6 gave each
 *  one ~70px, so a word like "bonjour" wrapped mid-row, and picking one added
 *  border and background weight that reflowed the whole already-overflowing
 *  line — the "broken shape on tap". Two per row above three options, one per
 *  row below, so every option keeps a readable width whatever it holds. */
function TrapOptions({
  q,
  picked,
  onPick,
}: {
  q: { opts: string[]; correct: number };
  picked: number | undefined;
  onPick: (oi: number) => void;
}) {
  const grid = q.opts.length > 3;
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {q.opts.map((o, oi) => {
        const state = picked === undefined ? undefined : oi === q.correct ? 'correct' : oi === picked ? 'wrong' : 'other';
        return (
          <View key={oi} style={grid ? { width: '48%', flexGrow: 1 } : { width: '100%' }}>
            <OptRow
              label={o}
              onPress={() => onPick(oi)}
              state={state as 'correct' | 'wrong' | 'other' | undefined}
            />
          </View>
        );
      })}
    </View>
  );
}

/** The rule this drill tests, as the drill's opening step.
 *
 *  It was its own `teach` mission: 76 words of prose on an otherwise empty
 *  screen, in a lesson where every neighbouring mission is a card or a deck. It
 *  also carried the single most important exception in the lesson, so it was
 *  the material given the least treatment. Here it is the thing you read
 *  immediately before being tested on it, on a card that looks like the rest of
 *  the lesson. */
function TrapRuleStep({ rule }: { rule: { title: string; body: string } }) {
  const t = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View
        style={{
          borderRadius: 20,
          borderWidth: 1,
          borderColor: t.accA(30),
          backgroundColor: t.accCard(8),
          padding: 22,
          gap: 12,
        }}
      >
        {/* No title here. The step already overrides the section heading with
            it one level up, and printing it again put the same sentence on the
            screen twice — the same duplicate the group labels had. */}
        <TX role="body" color={t.txSecondary} style={{ lineHeight: 26 }}>{rule.body}</TX>
      </View>
    </View>
  );
}

/** Step 14.1: the traps, one per screen.
 *
 *  A swipe deck rather than a column for the same reason commonErrors is one:
 *  six traps stacked is six ways to be wrong shown at once, and the learner
 *  scrolls past them. One at a time, each with room for its tip. */
function TrapCardsStep({ cards }: { cards: TrapCard[] }) {
  const T = useT();
  return (
    <SwipeDeck
      items={cards}
      // The step owns the viewport (see the pager's ownsLayout), so the deck
      // measures the leftover height rather than sizing to a fixed card and
      // pushing the Continuer button off screen.
      fill
      hint={T.trapHint}
      a11yHint={T.trapHintA11y}
      keyFor={(_c: unknown, i: number) => `trap-${i}`}
      renderItem={(c: TrapCard, _i: number, height: number | null) => <TrapFlipCard c={c} height={height} />}
    />
  );
}

/** Step 14.2: hear the pair.
 *
 *  The section has always declared `audio` (a recorded set, 1.0 and 0.65) and
 *  the stacked render never played a note of it. Speeds come from the authored
 *  spec via speedsFor, and resolveAudio decides recording-or-TTS per word, so
 *  this starts playing real clips the day the studio delivers with no content
 *  edit. */
function TrapAudioStep({ s }: { s: TrapDrillSec }) {
  const t = useTheme();
  const spec = (s as { audio?: SectionAudio }).audio;
  const rates = speedsFor(spec);
  const [playing, setPlaying] = useState<string | null>(null);

  const say = (text: string, rate: number) => {
    if (playing) return;
    sound.play('tap');
    const r = resolveAudio(text, spec, { slow: rate < NORMAL_RATE });
    setPlaying(`${text}@${rate}`);
    tts.speak(r.text, {
      rate: r.rate,
      onDone: () => setPlaying(null),
      onError: () => setPlaying(null),
    });
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      // Clears the footer slot below this step.
      //
      // The last row used to scroll underneath the "swipe to continue" line,
      // which sat over live answer buttons. It was easy to miss while the
      // footer was a bare ~20px of text; giving the footer a fixed 48px slot
      // (so the step controls stop moving between steps) made the overlap
      // plain. The scroll has to end above that slot, not behind it.
      contentContainerStyle={{ paddingBottom: STEP_FOOTER_H + 8 }}
      showsVerticalScrollIndicator={false}
    >
      {/* GENERIC ON PURPOSE, and it used to name a sound.
        *
        * This line read « Écoutez la paire. Le R sonne, puis le R se tait. »
        * and was printed on EVERY stepped trapDrill audio step in the product:
        * measured 2026-08-16, 46 steps across 34 lessons, and NOT ONE of them
        * teaches the French R. It was written for one screen and rendered on
        * all of them, telling a learner working on politeness registers,
        * verb endings or preposition folds to listen for a consonant that is
        * not in the exercise.
        *
        * (A first sweep reported one lesson as genuinely about the R. It was a
        * false positive: the pattern `le R\b` matched « Le réflexe », because
        * JavaScript's \b is ASCII-only and é is not a word character. That is
        * A2-BRIEF-CORRECTIONS.md §14.3 in a new place.)
        *
        * Every one of the 46 already renders its own authored step title
        * directly above this line, so this is the instruction and not the
        * heading. It has to be true everywhere or say nothing. All 46 authored
        * audio specs carry more than one speed, so the speed clause holds.
        *
        * If a step ever needs its own wording, add `hint?: string` to TrapStep
        * and fall back to this. Do not put a sound back in it. */}
      <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 12 }}>
        Écoutez chaque paire, à vitesse normale puis lentement.
      </TX>
      {s.cards.map((c, i) => (
        <View
          key={i}
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.line(9),
            backgroundColor: t.card,
            padding: 14,
            marginBottom: 10,
          }}
        >
          <TX font="serifI" role="titleSm" lang="fr">{c.fr}</TX>
          <TX font="notation" role="bodySm" color={t.txMuted} style={{ marginBottom: 10 }}>{c.ipa}</TX>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {rates.map((rate) => {
              const on = playing === `${c.fr}@${rate}`;
              return (
                <Press
                  key={rate}
                  cue="tap"
                  onPress={() => say(c.fr, rate)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                    height: 38,
                    paddingHorizontal: 14,
                    borderRadius: 19,
                    borderWidth: 1,
                    borderColor: on ? t.acc : t.accA(45),
                    backgroundColor: on ? t.accA(14) : 'transparent',
                  }}
                >
                  <Icon name={on ? 'pause' : 'play'} size={13} color={t.acc} />
                  <TX role="bodySm" color={t.accTx}>
                    {rate < NORMAL_RATE ? 'Lent' : 'Normal'}
                  </TX>
                </Press>
              );
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

/** Step 14.3: the reflex check, with the whole screen to itself. */
function TrapDrillStep({
  s,
  answers,
  setAnswers,
}: {
  s: TrapDrillSec;
  answers: Record<number, number>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<number, number>>>;
}) {
  const t = useTheme();
  const scored = Object.keys(answers).length;
  const correct = Object.entries(answers).filter(([qi, oi]) => oi === s.drill[Number(qi)].correct).length;
  return (
    <ScrollView
      style={{ flex: 1 }}
      // Clears the footer slot below this step.
      //
      // The last row used to scroll underneath the "swipe to continue" line,
      // which sat over live answer buttons. It was easy to miss while the
      // footer was a bare ~20px of text; giving the footer a fixed 48px slot
      // (so the step controls stop moving between steps) made the overlap
      // plain. The scroll has to end above that slot, not behind it.
      contentContainerStyle={{ paddingBottom: STEP_FOOTER_H + 8 }}
      showsVerticalScrollIndicator={false}
    >
      {/* No "RÉFLEXE" label here, for exactly the reason the control page drops
          "CONTRÔLE" a few hundred lines up: in the STEPPED render the drill step
          already carries its own label and title in the header above, so this
          drew the same word twice, one line apart, in two languages. Seen on
          sons.09 mission 5.4 as "REFLEX" sitting directly over "RÉFLEXE".

          It was invisible on sons.06 and sons.07 only because both name their
          step "Réflexe" in French, which hid the duplication behind an exact
          match and put a French UI label in authored content to do it.

          The score stays: it is the one thing here the header does not say.
          The STACKED render below keeps its label, because there is no step
          header there and it is the only thing naming that block. */}
      {scored > 0 ? (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 12 }}>
          <TX role="meta" color={t.accTx}>{correct} / {scored}</TX>
        </View>
      ) : null}
      {s.drill.map((q, qi) => (
        <View key={qi} style={{ marginBottom: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <TX font="serifI" role="titleSm" style={{ marginBottom: 8 }}>{q.promptSay}</TX>
            <PlayDot text={q.promptSay} size={28} />
          </View>
          <TrapOptions
            q={q}
            picked={answers[qi]}
            onPick={(oi) => {
              sound.play(oi === q.correct ? 'success' : 'error');
              setAnswers((a) => ({ ...a, [qi]: oi }));
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

/** How long a step body takes to fade in. Short enough that the learner never
 *  waits on it, long enough to read as motion rather than as a cut. Matches
 *  the pager's own label fade in feel, deliberately shorter because this is a
 *  step inside a mission rather than a whole new mission. */
const STEP_FADE_MS = 180;

/** The height the step-title row holds open whether or not the step has a
 *  title, and the height of the footer's control slot. Both exist for the same
 *  reason: a row that collapses when its content is absent moves everything
 *  below it, and a stepped mission changes what is present on every advance. */
const STEP_TITLE_H = 34;
const STEP_FOOTER_H = 48;

export function TrapDrillView({
  s,
  onIndexChange,
}: {
  s: TrapDrillSec;
  /** The step the learner has advanced to, 0-based. Drives the pager's
   *  sub-mission number (14.1, 14.2, 14.3) — which is what the section's own
   *  counter used to say, one level down. */
  onIndexChange?: (index: number) => void;
}) {
  const t = useTheme();
  const T = useT();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [step, setStep] = useState(0);
  const steps = s.steps;

  // The step body's cross-fade. Declared HERE, above the early return for the
  // unstepped shape, because hooks may not sit behind a conditional return:
  // a trapDrill with no `steps` would otherwise change the hook count and
  // throw "rendered fewer hooks than expected" the moment one was authored.
  const stepFade = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    stepFade.setValue(0);
    const anim = Animated.timing(stepFade, {
      toValue: 1,
      duration: STEP_FADE_MS,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [step, stepFade]);

  // No `steps` authored: the original stacked render, unchanged, which is what
  // the four trapDrills authored before stepping existed still get.
  if (!steps?.length) {
    const scored = Object.keys(answers).length;
    const correct = Object.entries(answers).filter(([qi, oi]) => oi === s.drill[Number(qi)].correct).length;
    return (
      <View>
        <TX font="semi" role="meta" ls={2} color={t.danger} style={{ marginBottom: 10 }}>LES PIÈGES</TX>
        {s.cards.map((c, i) => (
          <TrapFlipCard key={i} c={c} />
        ))}
        <View style={{ marginTop: 16, borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card2, padding: 14 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <TX font="semi" role="meta" ls={2} color={t.txSubtle}>RÉFLEXE</TX>
            {scored > 0 ? <TX role="meta" color={t.accTx}>{correct} / {scored}</TX> : null}
          </View>
          {s.drill.map((q, qi) => (
            <View key={qi} style={{ marginBottom: 14 }}>
              <View style={{ marginBottom: 8 }}>
                <TX font="serifI" role="titleSm" style={{ marginBottom: 8 }}>{q.promptSay}</TX>
                <PlayDot text={q.promptSay} size={28} />
              </View>
              <TrapOptions
                q={q}
                picked={answers[qi]}
                onPick={(oi) => {
                  sound.play(oi === q.correct ? 'success' : 'error');
                  setAnswers((a) => ({ ...a, [qi]: oi }));
                }}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }

  const cur = steps[Math.min(step, steps.length - 1)];
  const last = step >= steps.length - 1;
  // A gated drill step holds the learner until every question is answered: a
  // reflex you can swipe past was never tested.
  const held = cur.kind === 'drill' && cur.gate === true && Object.keys(answers).length < s.drill.length;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <TX font="semi" role="meta" ls={2} color={t.danger}>{cur.label.toUpperCase()}</TX>
        {/* The position used to be drawn here as "2 / 3". The pager's header
            now carries it as the sub-mission number (14.2 / 28), which says the
            same thing and also says WHICH mission it is a part of. Two counters
            on one screen invite the reader to work out how they relate, and
            they relate in no useful way. */}
      </View>
      {/* The title ROW is always drawn, even when the step has no title.
          Steps carry titles individually (sons.05's rule step has none, its
          cards and drill steps do), so a conditional row meant the body moved
          up ~40px on one step and back down on the next, every time the
          learner advanced. Reserving the row costs one empty line on the steps
          without a title and holds everything below it still. */}
      <View style={{ minHeight: STEP_TITLE_H, marginBottom: 12, justifyContent: 'center' }}>
        {cur.title ? <TX font="serif" role="titleLg">{cur.title}</TX> : null}
      </View>

      {/* The step body cross-fades rather than cutting.
          Every other sub-dividing mission in a lesson is a SwipeDeck, whose
          cards slide under the finger on a paging ScrollView. This one swapped
          its body on a setState, so a learner who had just swiped smoothly
          into the mission tapped Continue and the content changed with no
          motion at all. The fade is short on purpose: it is there to connect
          two screens, not to make the learner wait for it. */}
      <Animated.View style={{ flex: 1, opacity: stepFade }}>
        {cur.kind === 'rule' && s.rule ? <TrapRuleStep rule={s.rule} /> : null}
        {cur.kind === 'cards' ? <TrapCardsStep cards={s.cards} /> : null}
        {cur.kind === 'audio' ? <TrapAudioStep s={s} /> : null}
        {cur.kind === 'drill' ? <TrapDrillStep s={s} answers={answers} setAnswers={setAnswers} /> : null}
      </Animated.View>

      {/* One slot for the footer, whichever control is in it. */}
      <View style={{ height: STEP_FOOTER_H, marginTop: 14 }}>
      {!last ? (
        <Press
          cue="tap"
          // `onIndexChange` is called HERE, not inside a setState updater.
          // React runs updaters during render, and this callback reaches the
          // lesson's progress writes — the same "Cannot update a component
          // (`Home`) while rendering a different component" the quiz logged.
          // An updater may also run twice, which would have reported two step
          // advances for one tap. `step` is what this button already renders
          // from, and `held` gates re-entry, so reading it directly is safe.
          onPress={() => {
            if (held) return;
            const next = step + 1;
            setStep(next);
            onIndexChange?.(next);
          }}
          accessibilityRole="button"
          accessibilityState={{ disabled: held }}
          accessibilityLabel={held ? T.answerAllToContinue : T.continueT}
          // OUTLINE, not a filled accent. The pager's own Next bar sits a few
          // hundred dp below this doing a DIFFERENT thing — this advances the
          // step inside the mission, Next skips the whole mission — and two
          // identical full-width accent buttons gave the learner no way to tell
          // which was the way forward. The mission's internal control is
          // subordinate to the lesson's, so it is the one that steps back.
          style={{
            height: STEP_FOOTER_H,
            borderRadius: 24,
            borderWidth: 1.5,
            borderColor: held ? t.line(12) : t.accA(50),
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TX font="semi" role="body" color={held ? t.txSubtle : t.accTx}>
            {held ? T.answerToContinue : T.continueT}
          </TX>
        </Press>
      ) : (
        // The last step swaps the button for a hint, and the two used to be
        // different heights: a 48px control became a ~20px line, so the body
        // grew on the final step of every stepped mission. Both now sit in the
        // same slot (see the wrapper below), so the swap changes what the
        // footer SAYS and never where it is.
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TX role="bodySm" color={t.txMuted}>{T.swipeToContinue}</TX>
        </View>
      )}
      </View>
    </View>
  );
}

/* ─── 6. Pronunciation lab (real STT scoring) ────────────────────────────── */

function LabWordRow({ itemId }: { itemId: string }) {
  const t = useTheme();
  const item = content.item(itemId);
  const logAttempt = useProgress((st) => st.logAttempt);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<SttResult | null>(null);
  if (!item) return null;

  const mic = async () => {
    if (listening) {
      stt.stop();
      return;
    }
    sound.play('tap');
    setHeard(null);
    setListening(true);
    const res = await stt.listen(item.fr, { maxMs: 6000, bars: barsForLevel('sons') });
    setListening(false);
    setHeard(res);
    sound.play(res.ok && res.verdict === 'good' ? 'success' : 'flip');
    if (res.ok) {
      logAttempt({
        activity: 'lesson',
        itemId: item.id,
        expected: item.fr,
        heard: res.transcript,
        score: res.score,
        verdict: res.verdict,
        correct: res.verdict === 'good',
        modality: 'produce',
      });
    }
  };

  const verdictColor = !heard ? t.txSubtle : heard.verdict === 'good' ? t.accTx : heard.verdict === 'close' ? t.txSecondary : t.danger;
  const verdictLabel = !heard ? '' : heard.verdict === 'good' ? 'Bien dit' : heard.verdict === 'close' ? 'Presque' : heard.verdict === 'off' ? 'Pas tout à fait' : "Pas entendu";

  return (
    <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14, marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <View style={{ flex: 1 }}>
          <TX font="serifI" role="titleSm" lang="fr">{item.fr}</TX>
          {item.ipa ? <TX font="notation" role="bodySm" color={t.txMuted}>{item.ipa}</TX> : null}
        </View>
        <PlayDot text={item.fr} />
        <Press
          cue={null}
          onPress={mic}
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            backgroundColor: listening ? t.dangerA(16) : t.accA(14),
            borderWidth: 1,
            borderColor: listening ? t.dangerA(45) : t.accA(45),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="mic" size={17} color={listening ? t.danger : t.acc} />
        </Press>
      </View>
      {listening ? (
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Waveform count={16} height={20} barWidth={3} gap={2} active color={t.acc} />
        </View>
      ) : null}
      {heard ? (
        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TX font="semi" role="bodySm" color={verdictColor}>{verdictLabel}</TX>
          {heard.ok ? <TX role="bodySm" color={verdictColor}>{Math.round(heard.score * 100)}%</TX> : null}
        </View>
      ) : null}
    </View>
  );
}

export function PronunciationLabView({ s }: { s: PronunciationLabSec }) {
  const t = useTheme();
  const [tab, setTab] = useState(0);
  const snd = s.sounds[tab];
  return (
    <View>
      {s.sounds.length > 1 ? (
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 14 }}>
          {s.sounds.map((so, i) => (
            <Press
              key={i}
              cue="tap"
              onPress={() => setTab(i)}
              style={{
                flex: 1,
                height: 34,
                borderRadius: 17,
                borderWidth: 1,
                borderColor: i === tab ? t.acc : t.line(12),
                backgroundColor: i === tab ? t.accA(12) : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX font="semi" role="meta" color={i === tab ? t.accTx : t.txSecondary}>{so.label}</TX>
            </Press>
          ))}
        </View>
      ) : null}
      <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
        <TX font="serif" size={54} role="display">{snd.label}</TX>
        <TX font="notation" role="titleSm" color={t.accTx}>{snd.ipa}</TX>
      </View>
      <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 12 }}>{snd.sub}</TX>
      <View style={{ gap: 8, marginBottom: 16 }}>
        {snd.steps.map((st, i) => (
          <View key={i} style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, borderWidth: 1, borderColor: t.accA(45), alignItems: 'center', justifyContent: 'center' }}>
              <TX role="meta" color={t.accTx}>{i + 1}</TX>
            </View>
            <TX role="bodySm" style={{ flex: 1 }} lhMult={1.5}>{st}</TX>
          </View>
        ))}
      </View>
      {snd.itemIds.map((id) => (
        <LabWordRow key={id} itemId={id} />
      ))}
    </View>
  );
}

/* ─── 7. Dictation (spelling by ear) ──────────────────────────────────────── */

function buildTileBank(word: string): { ch: string; id: number }[] {
  const decoyPool = 'ABDEGILMNORSTU';
  const upper = word.toUpperCase();
  const decoys: string[] = [];
  for (const ch of decoyPool) {
    if (decoys.length >= 3) break;
    if (!upper.includes(ch)) decoys.push(ch);
  }
  const letters = (upper + decoys.join('')).split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.map((ch, id) => ({ ch, id }));
}

/** The word-tile bank: one tile per word of the sentence, plus decoy words that
 *  do NOT belong, all shuffled. Case is preserved, because with words on the
 *  tiles the capital is a legitimate clue to where the sentence starts.
 *
 *  The decoys are the point. Without them every tile belonged to the answer, so
 *  "place all of them" solved the exercise without the learner ever judging
 *  whether a word was in what they heard — an ordering puzzle rather than a
 *  dictée. See wordDecoys in dictee.logic.ts, where the choice is made so it
 *  can be tested; the shuffle stays here because it is presentation. */
function buildWordBank(fr: string): { ch: string; id: number }[] {
  const shuffled = [...dicteeWords(fr), ...wordDecoys(fr)];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.map((ch, id) => ({ ch, id }));
}

function OneDictationWord({ itemId, voice, onDone }: { itemId: string; voice: 'amelie' | 'leo'; onDone: (ok: boolean) => void }) {
  const t = useTheme();
  const T = useT();
  const item = content.item(itemId);
  const logAttempt = useProgress((st) => st.logAttempt);
  // Long targets assemble from WORDS, short ones spell from letters. See
  // dicteeMode: past 16 letters a letter bank stops being a spelling exercise.
  const mode = item ? dicteeMode(item.fr) : 'letters';
  const [bank] = useState(() =>
    !item
      ? []
      : mode === 'words'
        ? buildWordBank(item.fr)
        : buildTileBank(item.fr.replace(/[^A-Za-zÀ-ÿ]/gu, ''))
  );
  const [used, setUsed] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [plays, setPlays] = useState(3);
  const [speaking, setSpeaking] = useState(false);
  if (!item) return null;

  const target =
    mode === 'words'
      ? dicteeTarget(item.fr)
      : item.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').toUpperCase();
  // Word tiles join with a space so the answer reads as a sentence; letter
  // tiles butt together as they always did.
  const filled = used
    .map((id) => bank.find((b) => b.id === id)!.ch)
    .join(mode === 'words' ? ' ' : '');

  const play = () => {
    if (speaking || plays <= 0) {
      if (plays <= 0) sound.play('error');
      return;
    }
    sound.play('tap');
    setSpeaking(true);
    tts.speak(item.fr, {
      voice,
      onDone: () => { setSpeaking(false); setPlays((p) => p - 1); },
      onError: () => setSpeaking(false),
    });
  };

  const tap = (id: number) => {
    if (checked) return;
    sound.play('tap');
    setUsed((u) => [...u, id]);
  };
  const del = () => {
    if (checked) return;
    setUsed((u) => u.slice(0, -1));
  };
  const check = () => {
    const ok = normalizeFr(filled) === normalizeFr(target);
    sound.play(ok ? 'success' : 'error');
    setChecked(ok);
    logAttempt({
      activity: 'lesson',
      itemId: item.id,
      expected: item.fr,
      heard: filled,
      score: ok ? 1 : 0,
      verdict: ok ? 'good' : 'off',
      correct: ok,
      modality: 'produce',
    });
  };

  return (
    <View>
      <Press
        cue={null}
        onPress={play}
        style={{
          height: 58,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: t.accA(40),
          backgroundColor: t.accA(8),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 10,
          marginBottom: 18,
        }}
      >
        <Icon name={speaking ? 'pause' : 'play'} size={16} color={t.acc} />
        <TX font="semi" role="body" color={t.accTx}>Écouter le mot {plays > 0 ? `(${plays})` : ''}</TX>
      </Press>
      {/* The answer so far.
          In LETTER mode this is one fixed slot per character, as it always was.
          In WORD mode a slot per character would draw thirty boxes for a
          sentence, so the answer renders as a single growing line instead: the
          words are the units, and they are variable width. */}
      {mode === 'words' ? (
        <View
          style={{
            minHeight: 60,
            borderRadius: 14,
            borderWidth: 1.5,
            borderColor: checked === null ? t.line(16) : checked ? t.accA(55) : t.dangerA(55),
            backgroundColor: checked === null ? t.card2 : checked ? t.accA(10) : t.dangerA(8),
            paddingHorizontal: 14,
            paddingVertical: 12,
            justifyContent: 'center',
            marginBottom: 22,
          }}
        >
          <TX font="serifI" role="titleSm" center lhMult={1.4}>
            {filled || ' '}
          </TX>
        </View>
      ) : (
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
          {Array.from({ length: target.length }).map((_, i) => (
            <View
              key={i}
              style={{
                width: 40,
                height: 50,
                borderRadius: 11,
                borderWidth: 1.5,
                borderColor: checked === null ? t.line(16) : checked ? t.accA(55) : t.dangerA(55),
                backgroundColor: checked === null ? t.card2 : checked ? t.accA(10) : t.dangerA(8),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX font="serif" size={22} role="display">{filled[i] ?? ''}</TX>
            </View>
          ))}
        </View>
      )}
      {checked === false ? (
        <TX role="bodySm" color={t.danger} center style={{ marginBottom: 12 }}>Ce n'est pas ça — la bonne réponse est {target}.</TX>
      ) : null}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
        {bank.map((b) => (
          <Press
            key={b.id}
            cue={null}
            onPress={() => tap(b.id)}
            style={{
              // A word tile sizes to its word; a letter tile stays the square
              // it always was. minWidth keeps a two-letter word ("le", "on")
              // from becoming a tap target too small to hit.
              ...(mode === 'words'
                ? { minWidth: 46, paddingHorizontal: 12 }
                : { width: 42 }),
              height: 46,
              borderRadius: 11,
              borderWidth: 1,
              borderColor: t.line(12),
              backgroundColor: t.card2,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: used.includes(b.id) ? 0.28 : 1,
            }}
          >
            <TX font="serif" size={mode === 'words' ? 17 : 19} role="display" numberOfLines={1}>
              {b.ch}
            </TX>
          </Press>
        ))}
        <Press
          cue={null}
          onPress={del}
          style={{ width: 42, height: 46, borderRadius: 11, borderWidth: 1, borderColor: t.dangerA(35), alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name="x" size={15} color={t.danger} />
        </Press>
      </View>
      {checked === null ? (
        <Press
          cue={null}
          onPress={filled.length > 0 ? check : undefined}
          style={{ height: 50, borderRadius: 25, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', opacity: filled.length > 0 ? 1 : 0.35 }}
        >
          <TX font="semi" role="body" color={t.accInk}>Vérifier</TX>
        </Press>
      ) : (
        <Press
          cue="tap"
          onPress={() => onDone(!!checked)}
          style={{ height: 50, borderRadius: 25, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
        >
          <TX font="semi" role="body" color={t.accInk}>{T.continueT}</TX>
        </Press>
      )}
    </View>
  );
}

export function DictationView({ s }: { s: DictationSec }) {
  const t = useTheme();
  const [ix, setIx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const total = s.itemIds.length;
  if (done) {
    return (
      <View style={{ alignItems: 'center', gap: 10, paddingVertical: 20 }}>
        <TX font="serifI" role="display" color={t.accTx}>{score} / {total}</TX>
        <TX role="bodySm" color={t.txMuted}>mots correctement épelés.</TX>
      </View>
    );
  }
  return (
    <View>
      <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 14 }}>DICTÉE · MOT {ix + 1} / {total}</TX>
      <OneDictationWord
        key={ix}
        itemId={s.itemIds[ix]}
        voice={ix % 2 === 0 ? 'amelie' : 'leo'}
        onDone={(ok) => {
          if (ok) setScore((sc) => sc + 1);
          if (ix + 1 >= total) setDone(true);
          else setIx((i) => i + 1);
        }}
      />
    </View>
  );
}

/* ─── 8. Scenario (a paced conversation, with answers that vary) ─────────── */

// The learner is asked, tries it (aloud or in their head), and then sees what
// works — one turn at a time, with everything already said still on screen.
//
// Three rules this screen exists to keep, all of which it used to break. The
// reasoning is in scenario.logic.ts; the short version:
//   · the conversation STAYS VISIBLE, or the section demonstrates no flow
//   · MORE THAN ONE ANSWER works, or dialogue reads as a cloze test
//   · there is a BEAT before the learner is asked to speak, or it is a form

/** A bubble in the scrollback. Quieter than the live turn: this is context the
 *  learner reads past, not the thing they are being asked to do. */
function TurnBubble({
  fr,
  en,
  mine,
  muted,
  note,
  playable,
}: {
  fr: string;
  en?: string;
  mine?: boolean;
  muted?: boolean;
  note?: string;
  playable?: boolean;
}) {
  const t = useTheme();
  return (
    <View style={{ alignItems: mine ? 'flex-end' : 'flex-start', gap: 4 }}>
      <View
        style={{
          maxWidth: '86%',
          borderRadius: 18,
          borderTopLeftRadius: mine ? 18 : 4,
          borderTopRightRadius: mine ? 4 : 18,
          borderWidth: 1,
          borderColor: mine ? t.accA(30) : t.line(8),
          backgroundColor: mine ? t.accA(10) : t.card,
          padding: 13,
          opacity: muted ? 0.85 : 1,
        }}
      >
        {/* The flex lives on a wrapper View, never on the TX — a hugging bubble
            measures its text unwrapped and clips the tail otherwise. Same rule
            as ScenePlayer's BubbleBeat. */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <View style={{ flexShrink: 1 }}>
            <TX role="body" lhMult={1.4} style={muted ? { fontStyle: 'italic' } : undefined}>{fr}</TX>
          </View>
        </View>
        {en ? <TX font="serifI" role="bodySm" color={t.txMuted} style={{ marginTop: 4 }}>{en}</TX> : null}
        {playable ? (
          <View style={{ marginTop: 8 }}>
            <PlayDot text={fr} size={28} />
          </View>
        ) : null}
      </View>
      {note ? <TX role="meta" color={t.txSubtle}>{note}</TX> : null}
    </View>
  );
}

/** What the learner ended up contributing on a finished turn.
 *
 *  A turn they chose to be shown still renders as their line, in the model's
 *  words and marked as such. Leaving a gap there would break the one thing the
 *  scrollback is for: read back, it has to look like a conversation. */
function AttemptBubble({ attempt, turn }: { attempt: Attempt; turn: ScenarioTurn }) {
  const T = useT();
  if (attempt.kind === 'spoke') {
    return <TurnBubble mine fr={attempt.heard} en={attempt.matched.en} />;
  }
  const label = attempt.kind === 'unheard' ? T.rpUnheardShort : T.rpModel;
  return <TurnBubble mine muted fr={turn.user} en={turn.userEn} note={label} />;
}

/** The reveal: every reply that would have worked, model first. */
function AnswerCard({ turn, matched }: { turn: ScenarioTurn; matched?: Reply }) {
  const t = useTheme();
  const T = useT();
  const replies = acceptedReplies(turn);
  return (
    <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card2, padding: 14, gap: 12 }}>
      {replies.map((r, i) => {
        // The reply the learner actually said is marked, so a learner who used
        // an alternative sees THEIR sentence confirmed rather than reading the
        // model and assuming they got it wrong.
        const hit = !!matched && matched.fr === r.fr;
        return (
          <View key={i} style={i > 0 ? { borderTopWidth: 1, borderTopColor: t.line(8), paddingTop: 12 } : undefined}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <TX font="semi" role="eyebrow" ls={1.8} color={hit ? t.accTx : t.txSubtle}>
                {i === 0 ? T.rpModel : T.rpAlsoWorks}
              </TX>
              {hit ? <Icon name="check" size={12} color={t.accTx} /> : null}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ flexShrink: 1 }}>
                <TX font="serifI" role="body" lhMult={1.4}>« {r.fr} »</TX>
              </View>
              <PlayDot text={r.fr} size={26} />
            </View>
            {r.en ? <TX role="bodySm" color={t.txMuted} style={{ marginTop: 3 }}>{r.en}</TX> : null}
          </View>
        );
      })}
    </View>
  );
}

function ScenarioTurnView({
  turn,
  scrollback,
  onDone,
  onNext,
  isLast,
  active,
}: {
  turn: ScenarioTurn;
  /** The conversation so far, rendered. It lives INSIDE this component's
   *  scroller rather than above it, so the pinned controls below stay put
   *  while the dialogue grows past the viewport. */
  scrollback: React.ReactNode;
  onDone: (a: Attempt) => void;
  onNext: () => void;
  isLast: boolean;
  active: boolean;
}) {
  const t = useTheme();
  const T = useT();
  const logAttempt = useProgress((st) => st.logAttempt);
  const [phase, setPhase] = useState<TurnPhase>('ask');
  const [asked, setAsked] = useState(false);
  const [listening, setListening] = useState(false);
  const [attempt, setAttempt] = useState<Attempt | null>(null);

  const mounted = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const fade = useRef(new Animated.Value(0)).current;
  const revealFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  // The beat. The coach's line lands and SPEAKS ITSELF, and only after a pause
  // is the learner asked for anything.
  //
  // Gated on `active` because neighbouring missions stay mounted inside the
  // pager's window: without it, the next mission's coach starts talking over
  // the one the learner is still reading.
  useEffect(() => {
    if (!active || asked) return;
    tts.speak(turn.ai, { onDone: () => {}, onError: () => {} });
    const id = setTimeout(() => {
      if (!mounted.current) return;
      setAsked(true);
      Animated.timing(fade, { toValue: 1, duration: 260, useNativeDriver: true }).start();
    }, BEAT.prompt);
    timers.current.push(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const settle = (a: Attempt) => {
    setAttempt(a);
    onDone(a);
    const id = setTimeout(() => {
      if (!mounted.current) return;
      setPhase('reveal');
      Animated.timing(revealFade, { toValue: 1, duration: 260, useNativeDriver: true }).start();
    }, BEAT.reveal);
    timers.current.push(id);
  };

  // Speaking is OFFERED, never required — the section teaches what a French
  // exchange sounds like, and a learner on a bus with no mic has to be able to
  // walk the whole conversation. `Show me` is a first-class exit, not a skip.
  const show = () => {
    if (phase === 'reveal' || listening) return;
    sound.play('tap');
    settle({ kind: 'shown' });
  };

  const mic = async () => {
    if (phase === 'reveal' || listening) return;
    sound.play('tap');
    setListening(true);
    // The recognizer only ever hears one utterance, so it is pointed at the
    // model line; the transcript is then re-scored against every accepted
    // reply and the best one wins. Sons bars throughout: this is a
    // conversation drill, and a learner mid-dialogue gets the beginner's
    // leniency whatever band the lesson sits in.
    const bars = barsForLevel('sons');
    const res = await stt.listen(turn.user, { maxMs: 7000, bars });
    if (!mounted.current) return;
    setListening(false);

    const heardOk = res.ok && res.verdict !== 'none';
    if (!heardOk) {
      sound.play('flip');
      // WHY the transcript is missing decides what the learner is told. Saying
      // "not heard" when the recognizer never ran blames them for their phone.
      settle({ kind: 'unheard', reason: unheardReason(res.error) });
      return;
    }

    const best = bestReply(turn, res.transcript, bars);
    sound.play(best.verdict !== 'off' ? 'success' : 'flip');
    logAttempt({
      activity: 'lesson',
      itemId: `scenario.${turn.user.slice(0, 12)}`,
      // The reply actually matched, not the model — logging the model against a
      // learner who correctly used an alternative records a miss that was not
      // one, and Le Rapport would then coach them away from a right answer.
      expected: best.matched.fr,
      heard: res.transcript,
      score: best.score,
      verdict: best.verdict,
      correct: best.verdict === 'good',
      modality: 'produce',
    });
    settle({ kind: 'spoke', heard: res.transcript, score: best.score, verdict: best.verdict, matched: best.matched });
  };

  const spoke = attempt?.kind === 'spoke' ? attempt : null;

  // Keep the newest turn in view as the conversation grows past the viewport.
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View style={{ flex: 1, minHeight: 0 }}>
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        contentContainerStyle={{ gap: 12, paddingBottom: 12 }}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      >
        {scrollback}
        <TurnBubble fr={turn.ai} en={turn.en} playable />

        {/* The reveal scrolls WITH the dialogue — it is the answer to the line
            above it, and reading it means reading them together. Only the
            controls are pinned. */}
        {phase === 'reveal' && attempt ? (
          <Animated.View style={{ opacity: revealFade, gap: 10 }}>
            {spoke ? (
              <View style={{ alignItems: 'flex-end', gap: 4 }}>
                <TurnBubble mine fr={spoke.heard} />
                <TX role="meta" color={spoke.verdict === 'good' ? t.accTx : spoke.verdict === 'close' ? t.txSecondary : t.danger}>
                  {spoke.verdict === 'good' ? T.micGood : spoke.verdict === 'close' ? T.micClose : T.micOff} · {Math.round(spoke.score * 100)}%
                </TX>
              </View>
            ) : attempt.kind === 'unheard' ? (
              <View style={{ alignItems: attempt.reason === 'silent' ? 'flex-end' : 'stretch' }}>
                <TX
                  role="meta"
                  color={t.txSubtle}
                  // A recognizer that never ran gets a full-width line, not a
                  // right-aligned aside: it is a message about the phone, not
                  // a verdict on what the learner just said.
                  style={attempt.reason === 'silent' ? undefined : { lineHeight: 19 }}
                >
                  {attempt.reason === 'silent'
                    ? T.rpNotHeard
                    : attempt.reason === 'denied'
                      ? T.micDenied
                      : T.rpMicBlocked}
                </TX>
              </View>
            ) : null}
            <AnswerCard turn={turn} matched={spoke?.matched} />
          </Animated.View>
        ) : null}
      </ScrollView>

      {/* ── Pinned. Whatever the learner is meant to do next is always here,
             and never below the fold competing with the pager's Next. ── */}
      <View style={{ paddingTop: 10 }}>
        {phase === 'reveal' && attempt ? (
          <Press
            cue="tap"
            onPress={onNext}
            style={{ height: 48, borderRadius: 24, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
          >
            <TX font="semi" role="body" color={t.accInk}>{isLast ? T.sceneEnd : T.continueT}</TX>
          </Press>
        ) : asked ? (
          <Animated.View style={{ opacity: fade, gap: 10 }}>
            <View style={{ alignItems: 'center' }}>
              <TX font="semi" role="eyebrow" ls={2.4} color={t.accTx}>{T.rpYourTurn}</TX>
              <TX role="meta" color={t.txSubtle} style={{ marginTop: 4 }}>{T.rpRespond}</TX>
            </View>
            {listening ? (
              <View style={{ alignItems: 'center' }}>
                <Waveform count={18} height={20} color={t.acc} active barWidth={3} gap={3.5} />
              </View>
            ) : null}
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Press
                cue={null}
                onPress={mic}
                style={{ flex: 1, height: 48, borderRadius: 24, backgroundColor: listening ? t.dangerA(16) : t.accA(14), borderWidth: 1, borderColor: listening ? t.dangerA(45) : t.accA(45), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}
              >
                <Icon name="mic" size={16} color={listening ? t.danger : t.acc} />
                <TX font="semi" role="body" color={listening ? t.danger : t.accTx}>
                  {listening ? T.rpListening : T.rpSpeak}
                </TX>
              </Press>
              <Press
                cue={null}
                onPress={show}
                disabled={listening}
                style={{ flex: 1, height: 48, borderRadius: 24, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center', opacity: listening ? 0.5 : 1 }}
              >
                <TX font="semi" role="body" color={t.txSecondary}>{T.rpShowMe}</TX>
              </Press>
            </View>
          </Animated.View>
        ) : null}
      </View>
    </View>
  );
}

export function ScenarioView({ s, active = true }: { s: ScenarioSec; active?: boolean }) {
  const t = useTheme();
  const T = useT();
  const [ix, setIx] = useState(0);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const done = ix >= s.turns.length;
  // Everything already said, still on screen. This is the whole point of the
  // section: turn 4 is answered with turns 1-3 visible above it.
  const scrollback = transcriptOf(s.turns, attempts, ix);

  const record = (a: Attempt) =>
    setAttempts((prev) => {
      const next = [...prev];
      next[ix] = a;
      return next;
    });

  const lines = (
    <>
      {scrollback.map((l, i) =>
        l.who === 'ai' ? (
          <TurnBubble key={i} fr={l.fr} en={l.en} />
        ) : (
          <AttemptBubble key={i} attempt={l.attempt} turn={l.turn} />
        )
      )}
    </>
  );

  // This section OWNS THE VIEWPORT (see ownsLayout in LessonPager). It grows
  // by two bubbles a turn, so in the scrolling page its controls slid below
  // the fold and the pager's Next became the obvious button to press.
  return (
    <View style={{ flex: 1, minHeight: 0 }}>
      <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 4 }}>{s.setting}</TX>
      <TX font="serifI" role="titleSm" style={{ marginBottom: 12 }}>{s.title}</TX>

      {done ? (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: 12, paddingBottom: 12 }} showsVerticalScrollIndicator={false}>
          {lines}
          <View style={{ alignItems: 'center', paddingVertical: 20 }}>
            <TX font="semi" role="body" color={t.accTx}>{T.rpSceneDone}</TX>
          </View>
        </ScrollView>
      ) : (
        <ScenarioTurnView
          key={ix}
          turn={s.turns[ix]}
          scrollback={lines}
          isLast={ix === s.turns.length - 1}
          active={active}
          onDone={record}
          onNext={() => setIx((n) => n + 1)}
        />
      )}
    </View>
  );
}

/* ─── 9. Listening ────────────────────────────────────────────────────────── */

export function ListeningView({ s }: { s: ListeningSec }) {
  const t = useTheme();
  const T = useT();
  const [answers, setAnswers] = useState<Record<number, number>>({});

  // `hideLines`: the passage stays masked until every question is answered,
  // then reveals. Without it this component prints `fr` and `en` beside the
  // PlayDot, so a section whose questions are about what the EAR caught is
  // answerable by reading and tests nothing.
  //
  // The reveal is deliberately NOT gated on answering correctly. A learner who
  // guessed wrong is exactly the one who needs to see what was actually said,
  // and withholding it turns a comprehension exercise into a punishment.
  //
  // Absent (the shipped default) means today's behaviour, so all 63 existing
  // listening sections render unchanged.
  const answered = Object.keys(answers).length;
  const masked = s.hideLines === true && answered < s.questions.length;

  return (
    <View>
      <View style={{ gap: 8, marginBottom: 18 }}>
        {s.lines.map((l, i) => (
          <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            {/* The flex belongs on this WRAPPER, never on the TX: a flexed Text
                drops its last words while the audio speaks them in full. */}
            <View style={{ flex: 1 }}>
              {masked ? (
                // ONE ROW, AND IT SAYS WHY IT IS EMPTY.
                //
                // The first version drew two anonymous grey bars per card. On a
                // Pixel 6 that is the universal "content failed to load" signal
                // repeated six times down the screen, with nothing anywhere
                // saying the words were withheld deliberately or that they come
                // back. The label removes that ambiguity in one word.
                //
                // The number keeps the six clips distinguishable, which the
                // questions rely on: they refer to a line by number precisely so
                // they do not have to reprint it.
                //
                // MEASURED, so the next person does not repeat the reasoning:
                // this does NOT make the card shorter. The PlayDot is ~44dp and
                // is the tallest thing in the row, so card height is set by the
                // control and not by the text, and it is identical masked or
                // revealed. That is the reason the reveal does not make the list
                // jump — not the two-line placeholder the first version used.
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
                  accessibilityLabel={`Line ${i + 1}, hidden until you have answered`}
                >
                  <TX role="bodySm" color={t.txSubtle}>{i + 1}</TX>
                  <TX role="bodySm" color={t.txMuted} style={{ fontStyle: 'italic' }}>{T.lsHidden}</TX>
                  <View style={{ flex: 1, height: 1, backgroundColor: t.line(10) }} />
                </View>
              ) : (
                <>
                  <TX role="body">{l.fr}</TX>
                  <TX role="bodySm" color={t.txMuted} style={{ marginTop: 2 }}>{l.en}</TX>
                </>
              )}
            </View>
            <PlayDot text={l.fr} />
          </View>
        ))}
      </View>
      {/* Questions open ONE AT A TIME when the section asks for it. Listed
          under the passage, a learner reads all six first and then listens FOR
          the answers, which quietly turns a comprehension exercise into a
          reading exercise. Behind a modal, they answer about what they
          actually heard. */}
      {s.questionsInModal ? (
        <ListeningQuestionLauncher questions={s.questions} answers={answers} setAnswers={setAnswers} />
      ) : (
        s.questions.map((q, qi) => (
          <View key={qi} style={{ marginBottom: 14 }}>
            <TX role="body" style={{ marginBottom: 8 }}>{q.q}</TX>
            <View style={{ gap: 8 }}>
              {q.opts.map((o, oi) => {
                const picked = answers[qi];
                return (
                  <OptRow
                    key={oi}
                    label={o}
                    onPress={() => {
                      sound.play(oi === q.correct ? 'success' : 'error');
                      setAnswers((a) => ({ ...a, [qi]: oi }));
                    }}
                    state={picked === undefined ? undefined : oi === q.correct ? 'correct' : oi === picked ? 'wrong' : 'other'}
                  />
                );
              })}
            </View>
          </View>
        ))
      )}
    </View>
  );
}

/** The question rail: one row per question, each opening its own modal, with
 *  the ones already answered marked. Compact on the page so the passage keeps
 *  the screen, and one question at a time once tapped. */
function ListeningQuestionLauncher({
  questions,
  answers,
  setAnswers,
}: {
  questions: { q: string; opts: string[]; correct: number; why?: string }[];
  answers: Record<number, number>;
  setAnswers: (fn: (a: Record<number, number>) => Record<number, number>) => void;
}) {
  const t = useTheme();
  const [open, setOpen] = useState<number | null>(null);
  const done = Object.keys(answers).length;

  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <TX role="bodySm" color={t.txMuted} style={{ flex: 1 }}>
          Listen first, then answer.
        </TX>
        <TX role="meta" color={t.txSubtle}>{done} / {questions.length}</TX>
      </View>

      {questions.map((q, qi) => {
        const picked = answers[qi];
        const answered = picked !== undefined;
        const right = answered && picked === q.correct;
        return (
          <Press
            key={qi}
            cue="tap"
            onPress={() => setOpen(qi)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 11,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: answered ? (right ? t.accA(35) : t.dangerA(30)) : t.line(10),
              backgroundColor: t.card,
              paddingHorizontal: 15,
              paddingVertical: 13,
            }}
          >
            <TX role="meta" font="med" color={t.txSubtle} style={{ width: 16 }}>{qi + 1}</TX>
            <TX role="bodySm" color={answered ? t.txMuted : t.txPrimary} style={{ flex: 1 }} numberOfLines={2}>
              {q.q}
            </TX>
            {answered ? (
              <Icon name={right ? 'check' : 'x'} size={14} color={right ? t.accTx : t.danger} />
            ) : (
              <Icon name="chevronRight" size={15} color={t.txNonText} />
            )}
          </Press>
        );
      })}

      <QuestionModal
        open={open !== null}
        question={open !== null ? questions[open] : null}
        index={open ?? undefined}
        total={questions.length}
        onClose={() => setOpen(null)}
        onAnswer={(_correct: boolean, pickedIndex: number) => {
          if (open === null) return;
          setAnswers((a) => ({ ...a, [open]: pickedIndex }));
        }}
      />
    </View>
  );
}

/* ─── 10. Reading ─────────────────────────────────────────────────────────── */

export function ReadingView({ s }: { s: ReadingSec }) {
  const t = useTheme();
  const T = useT();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <View>
      <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 16, marginBottom: 16 }}>
        <TX role="body" lhMult={1.7}>{s.text}</TX>
        <View style={{ marginTop: 12 }}>
          <PlayDot text={s.text} />
        </View>
      </View>
      {s.questions?.map((q, i) => (
        <Press
          key={i}
          cue="tap"
          onPress={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
          style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card2, padding: 13, marginBottom: 8 }}
        >
          <TX role="body">{q.q}</TX>
          {open[i] ? <TX role="bodySm" color={t.accTx} style={{ marginTop: 6 }}>{q.a}</TX> : (
            <TX role="bodySm" color={t.txSubtle} style={{ marginTop: 4 }}>{T.tapToReveal}</TX>
          )}
        </Press>
      ))}
    </View>
  );
}

/* ─── 11. Review deck (leitner) ───────────────────────────────────────────── */

export function ReviewDeckView({ s }: { s: ReviewDeckSec }) {
  const t = useTheme();
  const T = useT();
  const [ix, setIx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [buckets, setBuckets] = useState({ again: 0, hard: 0, easy: 0 });
  // MEASURED, not guessed. The guess subtracted a constant from the window and
  // came out taller than the room a lesson page leaves, so the card ran past
  // the bottom and took the Encore / Difficile / Facile row with it — the row
  // that is the only way to rate the card and advance.
  //
  // Reserved: the counter above (~30) and the rating row below (46 + 14). The
  // row is reserved even while the card is face down, so revealing an answer
  // never resizes the card under the learner's finger.
  const [onBoxLayout, cardH] = useMeasuredCardHeight(300, 30 + 60);
  const done = ix >= s.cards.length;
  if (done) {
    return (
      <View style={{ alignItems: 'center', gap: 8, paddingVertical: 20 }}>
        <TX font="serifI" role="display" color={t.accTx}>{T.reviewDone}</TX>
        <TX role="bodySm" color={t.txMuted}>Encore {buckets.again} · Difficile {buckets.hard} · Facile {buckets.easy}</TX>
      </View>
    );
  }
  const c = s.cards[ix];
  const bump = (k: keyof typeof buckets) => {
    setBuckets((b) => ({ ...b, [k]: b[k] + 1 }));
    setFlipped(false);
    setIx((n) => n + 1);
  };
  return (
    <View style={{ flex: 1 }} onLayout={onBoxLayout}>
      <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 12 }}>{ix + 1} / {s.cards.length}</TX>
      <Press cue="flip" onPress={() => setFlipped((f) => !f)}>
        {/* Sized to the viewport, not fixed: the Encore / Difficile / Facile
            row sits BELOW this card, and a fixed height pushed it under the
            fold on shorter phones, so the learner had to scroll to rate a card
            they could already read. */}
        <View style={{ height: cardH, borderRadius: 22, borderWidth: 1, borderColor: flipped ? t.accA(40) : t.line(10), backgroundColor: flipped ? t.accCard(8) : t.card, alignItems: 'center', justifyContent: 'center', padding: 28 }}>
          <TX font="serifI" role="display" size={flipped ? 26 : 30} center color={flipped ? t.accTx : t.txPrimary} style={{ lineHeight: flipped ? 36 : 40 }}>{flipped ? c.back : c.front}</TX>
          {!flipped ? <TX role="bodySm" color={t.txSubtle} style={{ marginTop: 18 }}>{T.tapToReveal}</TX> : null}
        </View>
      </Press>
      {flipped ? (
        <View style={{ flexDirection: 'row', gap: 8, marginTop: 14 }}>
          <Press cue={null} onPress={() => bump('again')} style={{ flex: 1, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.dangerA(40), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="bodySm" color={t.danger}>Encore</TX>
          </Press>
          <Press cue={null} onPress={() => bump('hard')} style={{ flex: 1, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="bodySm" color={t.txSecondary}>Difficile</TX>
          </Press>
          <Press cue={null} onPress={() => bump('easy')} style={{ flex: 1, height: 46, borderRadius: 23, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="bodySm" color={t.accInk}>Facile</TX>
          </Press>
        </View>
      ) : null}
    </View>
  );
}

/* ─── 12. Progress check ──────────────────────────────────────────────────── */

export function ProgressCheckView({ s }: { s: ProgressCheckSec }) {
  const t = useTheme();
  return (
    <View>
      <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.accA(35), backgroundColor: t.accCard(9), padding: 18, marginBottom: 14 }}>
        <TX role="body" lhMult={1.6}>{s.body}</TX>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {s.stats.map((st, i) => (
          <View key={i} style={{ flexBasis: '48%', borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14 }}>
            <TX font="serif" size={23} role="display" color={t.accTx}>{st.v}</TX>
            <TX role="meta" color={t.txMuted} style={{ marginTop: 3 }}>{st.k}</TX>
          </View>
        ))}
      </View>
    </View>
  );
}
