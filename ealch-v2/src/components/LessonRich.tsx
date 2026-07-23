import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  Modal,
  Pressable,
  ScrollView,
  View,
  useWindowDimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { TX } from '@/components/Type';
import { Press, Badge, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { sound, tts } from '@/services';
import { content } from '@/services/content';
import { noteFor } from '@/services/content.logic';
import { lessonImage } from '@/content/lessonImages';
import type { GridLetter, LessonSection, TapRow, VocabTheme } from '@/content/schema';

// The rich course renderers behind the Sons rebuild: tappable letter grids,
// nested swipe decks, tap-to-open tables, themed vocab hubs, embedded
// flashcards, the in-lesson quiz deck and the round-up card. LessonSection.tsx
// delegates here so its switch stays one line per type. Everything speaks
// through the same onPlay(id, text) the plain sections use.
//
// LAYOUT RULE (learned the hard way): inside a horizontal deck, French text is
// NEVER laid out in a flex row beside a fixed-width element (waveform, icon).
// Horizontal ScrollViews measure children loosely and the text clips instead
// of wrapping — words like "la girafe" or the "le café" at the end of a line
// simply vanished on device. Text always gets its own full-width line; the
// listen control sits on its own row below.

type PlayProps = {
  onPlay: (id: string, text: string) => void;
  playingId: string | null;
};

/** Bundled illustration, resolved through the lesson image map, clipped to a
 *  rounded frame (the wrapper is what guarantees the bitmap can never paint
 *  outside it). A ref the map does not know renders NOTHING rather than a
 *  broken image: content can ship ahead of its art. */
export function RichImage({ refKey, ratio = 16 / 9 }: { refKey?: string; ratio?: number }) {
  const t = useTheme();
  if (!refKey) return null;
  const src = lessonImage(refKey);
  if (!src) return null;
  return (
    <View style={{ width: '100%', aspectRatio: ratio, borderRadius: 18, marginBottom: 14, overflow: 'hidden', backgroundColor: t.line(6) }}>
      <Image source={src} resizeMode="cover" accessibilityIgnoresInvertColors style={{ width: '100%', height: '100%' }} />
    </View>
  );
}

/** The one-line deck header: authored hint, the swipe affordance arrows, and
 *  the position counter. Every horizontal deck renders this so "this thing
 *  swipes sideways" always looks the same. */
function DeckHint({ hint, ix, total }: { hint?: string; ix: number; total: number }) {
  const t = useTheme();
  const T = useT();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <TX role="meta" color={t.txSubtle} style={{ flexShrink: 1 }}>{hint ?? T.lessonSwipe}</TX>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="chevronRight" size={12} color={t.accTx} strokeWidth={2} />
        <View style={{ marginLeft: -5 }}>
          <Icon name="chevronRight" size={12} color={t.accA(45)} strokeWidth={2} />
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <TX role="meta" color={t.txSubtle}>{Math.min(ix + 1, total)} / {total}</TX>
    </View>
  );
}

/** The tap-to-listen control: a proper speaker button plus the waveform that
 *  animates while its id is playing. Sits on its own row, never beside text. */
function ListenButton({ id, text, onPlay, playingId, size = 44 }: { id: string; text: string; size?: number } & PlayProps) {
  const t = useTheme();
  const on = playingId === id;
  return (
    <Press
      cue={null}
      onPress={() => onPlay(id, text)}
      accessibilityLabel={text}
      style={{ flexDirection: 'row', alignItems: 'center', gap: 12, alignSelf: 'flex-start', minHeight: size }}
    >
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 1,
          borderColor: on ? t.acc : t.accA(45),
          backgroundColor: on ? t.accA(12) : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name="speaker" size={size * 0.4} color={t.acc} />
      </View>
      <Waveform count={14} height={16} barWidth={2.5} gap={3} active={on} color={on ? t.acc : t.txNonText} />
    </Press>
  );
}

/* ─── Detail sheet ───────────────────────────────────────────────────────── */

// A local modal bottom sheet for the tap-to-open detail cards. RN Modal rather
// than an absolutely-positioned overlay because these open from deep inside
// nested ScrollViews, where an absolute overlay would clip to its card.
function DetailSheet({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  const t = useTheme();
  // Opening a sheet leaves the card's context, so whatever voice that context
  // owned (the page narration, a playing word) hard-stops here — the sheet's
  // own play buttons are the only audio that belongs inside it.
  useEffect(() => {
    if (open) tts.stop();
  }, [open]);
  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable onPress={onClose} style={{ flex: 1, backgroundColor: t.alpha(t.bgDeep, 60) }} />
      <View
        style={{
          maxHeight: '78%',
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          backgroundColor: t.sheet,
          borderTopWidth: 1,
          borderColor: t.line(10),
        }}
      >
        <View style={{ alignItems: 'center', paddingTop: 12 }}>
          <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: t.line(18) }} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
          {children}
        </ScrollView>
      </View>
    </Modal>
  );
}

/** The speak row used inside sheets: a pill that plays `text` and shows the
 *  waveform while it is the playing id. */
function SpeakRow({ id, text, label, onPlay, playingId }: { id: string; text: string; label: string } & PlayProps) {
  const t = useTheme();
  const on = playingId === id;
  return (
    <Press
      cue={null}
      onPress={() => onPlay(id, text)}
      style={{ minHeight: 56, borderRadius: 16, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, flexDirection: 'row', alignItems: 'center', gap: 13, paddingHorizontal: 16, paddingVertical: 8 }}
    >
      <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="play" size={12} color={t.acc} />
      </View>
      <TX font="serifI" role="titleSm" style={{ flex: 1 }}>{label}</TX>
      <Waveform count={12} height={15} barWidth={2.5} gap={3} active={on} color={on ? t.acc : t.txNonText} />
    </Press>
  );
}

/* ─── Letter grid ────────────────────────────────────────────────────────── */

/** The French word inside an example like "ami [ah-MEE]": everything before
 *  the respelling bracket. */
function exWord(ex: string): string {
  return ex.split(' [')[0];
}

export function LetterGridView({ letters, sectionTitle, onPlay, playingId }: { letters: GridLetter[]; sectionTitle: string } & PlayProps) {
  const t = useTheme();
  const T = useT();
  const { width } = useWindowDimensions();
  const [sel, setSel] = useState<GridLetter | null>(null);
  // 5 columns across the card's content width (page pad 24 each side), with
  // 8px gutters. Floor so rounding never wraps the fifth cell.
  const cell = Math.floor((width - 48 - 4 * 8) / 5);

  return (
    <View>
      <TX role="meta" color={t.txSubtle} style={{ marginBottom: 12 }}>{T.lessonTapLetter}</TX>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {letters.map((l) => (
          <Press
            key={l.ch}
            cue={null}
            onPress={() => {
              sound.play('flip');
              setSel(l);
            }}
            style={{ width: cell, height: cell + 14, borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, alignItems: 'center', justifyContent: 'center', gap: 2 }}
          >
            <TX font="serif" size={26} role="titleLg">{l.ch}</TX>
            <TX role="meta" color={t.txMuted} maxScale={1.2} numberOfLines={1}>{l.name}</TX>
          </Press>
        ))}
      </View>

      <DetailSheet open={sel !== null} onClose={() => setSel(null)}>
        {sel ? (
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 14, marginBottom: 6 }}>
              <TX font="serif" size={72} role="display" color={t.accTx}>{sel.ch}</TX>
              <View style={{ paddingBottom: 12 }}>
                <TX font="semi" role="titleLg" ls={0.5}>{sel.name}</TX>
                {sel.ipa ? <TX role="label" color={t.txMuted}>{sel.ipa}</TX> : null}
              </View>
            </View>
            <TX role="body" color={t.txSecondary} lhMult={1.55} style={{ marginBottom: 16 }}>{sel.sound}</TX>
            <View style={{ gap: 10 }}>
              <SpeakRow id={`${sectionTitle}-name-${sel.ch}`} text={sel.ch} label={`${sel.ch} ${sel.name}`} onPlay={onPlay} playingId={playingId} />
              <SpeakRow
                id={`${sectionTitle}-ex-${sel.ch}`}
                text={exWord(sel.ex)}
                label={sel.exNote ? `${sel.ex} · ${sel.exNote}` : sel.ex}
                onPlay={onPlay}
                playingId={playingId}
              />
            </View>
            {sel.memo ? (
              <View style={{ marginTop: 16, borderRadius: 14, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), padding: 14 }}>
                <TX font="semi" role="meta" ls={1.6} color={t.accTx} style={{ marginBottom: 5 }}>{T.lessonMemo}</TX>
                <TX role="label" color={t.txSecondary} lhMult={1.55}>{sel.memo}</TX>
              </View>
            ) : null}
          </View>
        ) : null}
      </DetailSheet>
    </View>
  );
}

/* ─── Nested swipe deck ──────────────────────────────────────────────────── */

type DeckSection = Extract<LessonSection, { type: 'cardDeck' }>;

export function CardDeckView({ s, onPlay, playingId }: { s: DeckSection } & PlayProps) {
  const t = useTheme();
  const { width, height } = useWindowDimensions();
  const [ix, setIx] = useState(0);
  // Card width leaves a peek of the next card so the deck reads as swipeable
  // at a glance; snap keeps one card centered. Cards run at least half the
  // screen tall so the deck feels like a real card, not a strip.
  const cardW = width - 48 - 28;
  const step = cardW + 12;
  const cardH = Math.max(300, Math.round(height * 0.5));

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / step);
    if (i !== ix) setIx(Math.max(0, Math.min(s.cards.length - 1, i)));
  };

  return (
    <View>
      <DeckHint hint={s.hint} ix={ix} total={s.cards.length} />
      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={step}
        decelerationRate="fast"
        onMomentumScrollEnd={onScroll}
        contentContainerStyle={{ paddingRight: 28 }}
      >
        {s.cards.map((c, i) => {
          const pid = `${s.title}-card-${i}`;
          return (
            <View
              key={i}
              style={{ width: cardW, marginRight: 12, borderRadius: 20, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 20, minHeight: cardH }}
            >
              <RichImage refKey={c.imageRef} />
              {c.label ? (
                <TX font="semi" role="meta" ls={2} color={t.accTx} style={{ marginBottom: 10 }}>{c.label}</TX>
              ) : null}
              {c.head ? (
                <TX font="semi" role="titleLg" size={20} lhMult={1.3} style={{ width: '100%', marginBottom: 10 }}>{c.head}</TX>
              ) : null}
              {c.fr ? (
                <TX font="serifI" size={26} role="titleLg" ls={0.4} lhMult={1.3} color={t.txPrimary} style={{ width: '100%', marginBottom: 6 }}>
                  {c.fr}
                </TX>
              ) : null}
              {c.sub ? (
                <TX role="label" color={t.txMuted} ls={0.3} lhMult={1.5} style={{ width: '100%', marginBottom: 10 }}>{c.sub}</TX>
              ) : null}
              {c.fr ? (
                <View style={{ marginBottom: c.body ? 14 : 0 }}>
                  <ListenButton id={pid} text={c.fr} onPlay={onPlay} playingId={playingId} size={40} />
                </View>
              ) : null}
              {c.body ? (
                <TX role="bodySm" color={t.txSecondary} lhMult={1.6} style={{ width: '100%' }}>{c.body}</TX>
              ) : null}
            </View>
          );
        })}
      </ScrollView>
      {/* Position: dots for short decks, a counter once dots would crowd. */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 12 }}>
        {s.cards.length <= 10 ? (
          s.cards.map((_, i) => (
            <View key={i} style={{ width: i === ix ? 16 : 5, height: 5, borderRadius: 3, backgroundColor: i === ix ? t.acc : t.line(14) }} />
          ))
        ) : (
          <TX role="meta" color={t.txSubtle}>{ix + 1} / {s.cards.length}</TX>
        )}
      </View>
    </View>
  );
}

/* ─── Tap table ──────────────────────────────────────────────────────────── */

type TapTableSection = Extract<LessonSection, { type: 'tapTable' }>;

export function TapTableView({ s, onPlay, playingId }: { s: TapTableSection } & PlayProps) {
  const t = useTheme();
  const [sel, setSel] = useState<TapRow | null>(null);

  return (
    <View>
      <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, paddingHorizontal: 16, paddingVertical: 14 }}>
        <View style={{ flexDirection: 'row', gap: 12, paddingBottom: 10 }}>
          {s.cols.map((c, ci) => (
            <TX key={ci} font="semi" role="meta" ls={1.4} color={t.accTx} style={{ flex: 1 }}>{c}</TX>
          ))}
          <View style={{ width: 14 }} />
        </View>
        {s.rows.map((row, ri) => (
          <Press
            key={ri}
            cue={null}
            onPress={() => {
              sound.play('flip');
              if (row.detail) setSel(row);
              else if (row.say) onPlay(`${s.title}-row-${ri}`, row.say);
            }}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 58, paddingVertical: 8, borderTopWidth: 1, borderTopColor: t.line(6) }}
          >
            {row.cells.map((cell, ci) => (
              <TX key={ci} role="bodySm" lhMult={1.45} color={ci === 0 ? t.txPrimary : t.txSecondary} font={ci === 0 ? 'semi' : 'sans'} style={{ flex: 1 }}>
                {cell}
              </TX>
            ))}
            <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
          </Press>
        ))}
      </View>

      <DetailSheet open={sel !== null} onClose={() => setSel(null)}>
        {sel?.detail ? (
          <View>
            <TX font="serif" size={28} role="display" lhMult={1.2} style={{ marginBottom: 12 }}>{sel.detail.title}</TX>
            <TX role="body" color={t.txSecondary} lhMult={1.6} style={{ marginBottom: 16 }}>{sel.detail.body}</TX>
            {sel.detail.say || sel.say ? (
              <SpeakRow
                id={`${s.title}-detail-${sel.detail.title}`}
                text={(sel.detail.say ?? sel.say)!}
                label={sel.detail.say ?? sel.say!}
                onPlay={onPlay}
                playingId={playingId}
              />
            ) : null}
          </View>
        ) : null}
      </DetailSheet>
    </View>
  );
}

/* ─── Vocab themes ───────────────────────────────────────────────────────── */

// The theme browser look (app/themes.tsx): a vertical 2-up grid of compact
// cards, so 6-8 sit on screen before any scrolling. The image is clipped to
// the card top with the "tap to open" chip overlaid on it; tapping opens the
// theme's own swipe deck in a sheet.
export function VocabThemesView({ themes, sectionTitle, onPlay, playingId }: { themes: VocabTheme[]; sectionTitle: string } & PlayProps) {
  const t = useTheme();
  const T = useT();
  const { width, height } = useWindowDimensions();
  const [sel, setSel] = useState<VocabTheme | null>(null);
  const [ix, setIx] = useState(0);
  const sheetCardW = width - 48 - 28;
  const sheetCardH = Math.max(240, Math.round(height * 0.34));
  const step = sheetCardW + 12;

  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {themes.map((th) => {
          const img = th.imageRef ? lessonImage(th.imageRef) : undefined;
          return (
            <Press
              key={th.title}
              cue={null}
              scale={0.98}
              onPress={() => {
                sound.play('flip');
                setIx(0);
                setSel(th);
              }}
              style={{ width: '47.5%', borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, overflow: 'hidden' }}
            >
              <View style={{ width: '100%', height: 68, overflow: 'hidden', backgroundColor: t.accA(8) }}>
                {img ? (
                  <Image source={img} resizeMode="cover" accessibilityIgnoresInvertColors style={{ width: '100%', height: '100%' }} />
                ) : (
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TX font="serifI" size={26} role="display" color={t.accTx}>{th.title.charAt(0)}.</TX>
                  </View>
                )}
                <View style={{ position: 'absolute', right: 6, bottom: 6, borderRadius: 10, backgroundColor: t.alpha(t.bgDeep, 55), paddingHorizontal: 8, paddingVertical: 3 }}>
                  <TX font="semi" role="eyebrow" size={9} ls={0.8} color="#fff">{T.lessonTapOpen}</TX>
                </View>
              </View>
              <View style={{ padding: 12 }}>
                <TX font="semi" role="bodySm" lhMult={1.3} numberOfLines={2} style={{ marginBottom: 3 }}>{th.title}</TX>
                <TX role="meta" color={t.txMuted}>{th.cards.length} {T.wordsWord}</TX>
              </View>
            </Press>
          );
        })}
      </View>

      <DetailSheet open={sel !== null} onClose={() => setSel(null)}>
        {sel ? (
          <View>
            <TX font="serif" size={26} role="display" lhMult={1.2} style={{ marginBottom: 4 }}>{sel.title}</TX>
            <View style={{ marginBottom: 4 }}>
              <DeckHint hint={`${sel.cards.length} ${T.wordsWord} · ${T.tapHear}`} ix={ix} total={sel.cards.length} />
            </View>
            <ScrollView
              horizontal
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              snapToInterval={step}
              decelerationRate="fast"
              onMomentumScrollEnd={(e) => setIx(Math.max(0, Math.min(sel.cards.length - 1, Math.round(e.nativeEvent.contentOffset.x / step))))}
              contentContainerStyle={{ paddingRight: 28 }}
            >
              {sel.cards.map((c, i) => {
                const pid = `${sectionTitle}-${sel.title}-${i}`;
                return (
                  <View
                    key={i}
                    style={{ width: sheetCardW, marginRight: 12, borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 20, minHeight: sheetCardH, justifyContent: 'center' }}
                  >
                    <TX font="serifI" size={27} role="titleLg" ls={0.4} lhMult={1.3} style={{ width: '100%' }}>{c.fr}</TX>
                    {c.sub ? <TX role="label" color={t.txMuted} ls={0.3} lhMult={1.5} style={{ width: '100%', marginTop: 6 }}>{c.sub}</TX> : null}
                    <TX role="bodySm" color={t.txSecondary} lhMult={1.5} style={{ width: '100%', marginTop: 8, marginBottom: 14 }}>{c.en}</TX>
                    <ListenButton id={pid} text={c.fr} onPlay={onPlay} playingId={playingId} size={40} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        ) : null}
      </DetailSheet>
    </View>
  );
}

/* ─── Flashcards (the home Flashcards look, embedded) ────────────────────── */

type FlashSection = Extract<LessonSection, { type: 'flashcards' }>;

// One card at a time with the same 3D flip, eyebrow labels, flip hint and
// Again / I knew it actions as app/flashcards.tsx — the lesson's sample deck
// should feel like the drill the learner already knows from home.
export function FlashcardsView({ s, onPlay, playingId }: { s: FlashSection } & PlayProps) {
  const t = useTheme();
  const T = useT();
  const { height } = useWindowDimensions();
  const [ix, setIx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const cardH = Math.max(300, Math.round(height * 0.42));

  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, {
      toValue: flipped ? 1 : 0,
      duration: 550,
      easing: Easing.bezier(0.32, 0.72, 0.35, 1),
      useNativeDriver: true,
    }).start();
  }, [flipped, anim]);

  const over = ix >= s.cards.length;
  const card = s.cards[Math.min(ix, s.cards.length - 1)];

  const flip = () => {
    sound.play('flip');
    setFlipped((f) => !f);
  };
  const answer = (know: boolean) => {
    sound.play(know ? 'success' : 'tap');
    setFlipped(false);
    if (know) setKnown((k) => k + 1);
    setTimeout(() => setIx((i) => i + 1), 220);
  };
  const restart = () => {
    sound.play('tap');
    setIx(0);
    setFlipped(false);
    setKnown(0);
  };

  const frontRotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
  const faceBase = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
    borderWidth: 1,
    padding: 26,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    backfaceVisibility: 'hidden' as const,
    overflow: 'hidden' as const,
  };
  const pid = `${s.title}-flash-${ix}`;

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <ProgressBar pct={s.cards.length ? Math.min(100, (ix / s.cards.length) * 100) : 0} height={3} color={t.acc} track={t.line(10)} />
        </View>
        <TX role="meta" color={t.txMuted}>{Math.min(ix + 1, s.cards.length)} / {s.cards.length}</TX>
      </View>

      {over ? (
        <View style={{ minHeight: cardH, alignItems: 'center', justifyContent: 'center', borderRadius: 24, borderWidth: 1, borderColor: t.line(10), backgroundColor: t.card2, padding: 26 }}>
          <TX font="serif" size={56} role="display" color={t.accTx}>{known}/{s.cards.length}</TX>
          <TX font="serifI" size={24} role="display" center style={{ width: '100%', marginTop: 8, marginBottom: 24 }}>{T.deckDone}</TX>
          <Press cue={null} onPress={restart} style={{ minHeight: 48, paddingVertical: 8, paddingHorizontal: 30, borderRadius: 24, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.accInk}>{T.redo}</TX>
          </Press>
        </View>
      ) : (
        <View>
          <Press onPress={flip} cue={null} scale={1} style={{ height: cardH }}>
            {/* Front: the question */}
            <Animated.View style={[faceBase, { borderColor: t.line(10), backgroundColor: t.card2, transform: [{ perspective: 1200 }, { rotateY: frontRotate }] }]}>
              <TX font="semi" role="eyebrow" ls={2.8} color={t.accTx} style={{ marginBottom: 18 }}>{T.flashQuestion}</TX>
              <TX font="serifI" size={22} role="titleLg" lhMult={1.35} center style={{ width: '100%' }}>{card.front}</TX>
              <TX font="semi" role="meta" ls={1.7} color={t.txSubtle} style={{ position: 'absolute', bottom: 20, textTransform: 'uppercase' }}>
                {T.flipHint}
              </TX>
            </Animated.View>
            {/* Back: the answer */}
            <Animated.View style={[faceBase, { borderColor: t.accA(40), backgroundColor: t.accCard(10), transform: [{ perspective: 1200 }, { rotateY: backRotate }] }]}>
              <TX font="semi" role="eyebrow" ls={2.8} color={t.txMuted} style={{ marginBottom: 18 }}>{T.flashAnswer}</TX>
              <TX font="serif" size={24} role="titleLg" lhMult={1.35} center style={{ width: '100%' }}>{card.back}</TX>
              {card.say ? (
                <Press
                  cue={null}
                  onPress={() => onPlay(pid, card.say!)}
                  style={{ marginTop: 22, width: 44, height: 44, borderRadius: 22, borderWidth: 1, borderColor: t.accA(50), alignItems: 'center', justifyContent: 'center' }}
                >
                  <Icon name="speaker" size={18} color={playingId === pid ? t.accTx : t.acc} />
                </Press>
              ) : null}
            </Animated.View>
          </Press>

          <View style={{ flexDirection: 'row', gap: 12, marginTop: 18 }}>
            <Press cue={null} onPress={() => answer(false)} style={{ flex: 1, minHeight: 50, paddingVertical: 8, borderRadius: 25, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.txSecondary}>{T.again}</TX>
            </Press>
            <Press cue={null} onPress={() => answer(true)} style={{ flex: 1, minHeight: 50, paddingVertical: 8, borderRadius: 25, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>{T.know}</TX>
            </Press>
          </View>
        </View>
      )}
    </View>
  );
}

/* ─── Practice (the Voice Flash look, embedded) ──────────────────────────── */

// The speaking drill as a Voice Flash style run (app/voiceflash.tsx): one
// prompt card at a time — visual, the French line, an audio chip, a SAY IT
// prompt — then a self-graded Missed it / I knew it that flows into the same
// SRS grading the plain list used (onGrade is unchanged).
export function PracticeVFView({
  itemIds,
  sectionTitle,
  onPlay,
  playingId,
  onGrade,
}: {
  itemIds: string[];
  sectionTitle: string;
  onGrade: (itemId: string, correct: boolean) => void;
} & PlayProps) {
  const t = useTheme();
  const T = useT();
  const { height } = useWindowDimensions();
  const [ix, setIx] = useState(0);
  const [score, setScore] = useState(0);
  const items = itemIds.map((id) => content.item(id)).filter((x): x is NonNullable<typeof x> => !!x);
  const total = items.length;
  const over = ix >= total;
  const item = items[Math.min(ix, total - 1)];
  const cardH = Math.max(300, Math.round(height * 0.42));

  if (total === 0) return null;

  const grade = (got: boolean) => {
    onGrade(item.id, got);
    if (got) setScore((v) => v + 1);
    setTimeout(() => setIx((i) => i + 1), 220);
  };
  const restart = () => {
    sound.play('tap');
    setIx(0);
    setScore(0);
  };
  const pid = `${sectionTitle}-${item.id}`;
  const on = playingId === pid;

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <ProgressBar pct={total ? Math.min(100, (ix / total) * 100) : 0} height={3} color={t.acc} track={t.line(10)} />
        </View>
        <TX role="meta" color={t.txMuted}>{Math.min(ix + 1, total)} / {total}</TX>
      </View>

      {over ? (
        <View style={{ minHeight: cardH, alignItems: 'center', justifyContent: 'center', borderRadius: 24, borderWidth: 1, borderColor: t.line(10), backgroundColor: t.card2, padding: 26 }}>
          <TX font="serif" size={56} role="display" color={t.accTx}>{score} / {total}</TX>
          <TX font="serifI" size={24} role="display" center style={{ width: '100%', marginTop: 8, marginBottom: 24 }}>{T.vfDoneT}</TX>
          <Press cue={null} onPress={restart} style={{ minHeight: 48, paddingVertical: 8, paddingHorizontal: 30, borderRadius: 24, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.accInk}>{T.redo}</TX>
          </Press>
        </View>
      ) : (
        <View>
          {/* Prompt card, the Voice Flash shape */}
          <View style={{ minHeight: cardH, borderRadius: 24, borderWidth: 1, borderColor: t.line(10), backgroundColor: t.card2, paddingVertical: 26, paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 96, height: 96, borderRadius: 48, backgroundColor: t.accA(10), borderWidth: 1, borderColor: t.accA(30), alignItems: 'center', justifyContent: 'center', marginBottom: 16, overflow: 'hidden' }}>
              <TX font="serifI" size={40} role="display" color={t.accTx}>
                {item.fr.replace(/^(le |la |les |l')/i, '').charAt(0).toUpperCase()}
              </TX>
            </View>
            {/* width '100%' + textAlign center, NEVER center-by-intrinsic-width:
                self-measured text inside the nested pager clips the second word
                of multi-word items on Android ("la rue" showed only "la"). Full
                width makes RN wrap inside a known box instead of clipping. */}
            <TX font="serifI" size={28} role="display" center lhMult={1.25} style={{ width: '100%', marginBottom: 6 }}>{item.fr}</TX>
            <TX role="label" color={t.txMuted} center lhMult={1.5} style={{ width: '100%', marginBottom: 12 }}>
              {item.en}{noteFor(item) ? ` · ${noteFor(item)}` : ''}
            </TX>
            {/* Audio chip — plays the French word */}
            <Press
              cue={null}
              onPress={() => onPlay(pid, item.fr)}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10, height: 36, paddingHorizontal: 15, borderRadius: 18, borderWidth: 1, borderColor: t.accA(40), marginBottom: 14 }}
            >
              <Icon name="play" size={12} color={t.acc} />
              <Waveform count={14} height={14} color={on ? t.acc : t.txNonText} active={on} barWidth={2.5} gap={3} />
            </Press>
            <TX font="semi" role="meta" ls={2.6} color={t.accTx}>{T.sayFr}</TX>
          </View>

          <View style={{ flexDirection: 'row', gap: 12, marginTop: 18 }}>
            <Press cue={null} onPress={() => grade(false)} style={{ flex: 1, minHeight: 50, paddingVertical: 8, borderRadius: 25, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.txSecondary}>{T.vfMissed}</TX>
            </Press>
            <Press cue={null} onPress={() => grade(true)} style={{ flex: 1, minHeight: 50, paddingVertical: 8, borderRadius: 25, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>{T.vfGot}</TX>
            </Press>
          </View>
        </View>
      )}
    </View>
  );
}

/* ─── Quiz deck ──────────────────────────────────────────────────────────── */

export type QuizQuestion = { q: string; opts: string[]; correct: number; why?: string };

// The proper quiz: a swipeable deck of question cards ending in a result card.
// Options are shuffled per question per attempt (the authored `correct` index
// never moves — selection uses original indices, only the display order is
// permuted). Answering locks the question; the result card shows the score,
// offers a retry (new shuffle), and carries the finish button.
export function QuizDeckView({
  questions,
  onAnswer,
  onComplete,
  onFinish,
  finishLabel,
  onRestart,
  onNextLesson,
  nextTitle,
}: {
  questions: QuizQuestion[];
  /** Fires once per answered question, with correctness — the screen logs
   *  weak spots off this exactly as the old quiz phase did. */
  onAnswer: (qIndex: number, correct: boolean) => void;
  /** Fires the first time every question is answered, with the score. */
  onComplete: (score: number, total: number) => void;
  onFinish: () => void;
  finishLabel: string;
  /** Sends the reader back to the cover for a fresh pass of this lesson. */
  onRestart?: () => void;
  /** Opens the next lesson in the curriculum; absent on the last lesson, in
   *  which case the primary button falls back to plain finish. */
  onNextLesson?: () => void;
  /** The next lesson's real title, shown under the primary button label. */
  nextTitle?: string;
}) {
  const t = useTheme();
  const T = useT();
  const { width, height } = useWindowDimensions();
  const ref = useRef<ScrollView>(null);
  const [ix, setIx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [orders, setOrders] = useState<number[][]>(() => questions.map((q) => shuffle(q.opts.length)));
  const completedRef = useRef(false);

  const cardW = width - 48 - 28;
  const step = cardW + 12;
  const cardH = Math.max(340, Math.round(height * 0.52));
  const total = questions.length;
  const answered = answers.filter((a) => a !== null).length;
  const score = answers.filter((a, i) => a === questions[i].correct).length;
  const done = answered === total;
  const passMark = Math.ceil(total * 0.6);

  function shuffle(n: number): number[] {
    const idx = Array.from({ length: n }, (_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  }

  const pick = (qi: number, oi: number) => {
    if (answers[qi] !== null) return;
    const ok = oi === questions[qi].correct;
    sound.play(ok ? 'success' : 'error');
    const next = answers.slice();
    next[qi] = oi;
    setAnswers(next);
    onAnswer(qi, ok);
    const nowAnswered = next.filter((a) => a !== null).length;
    if (nowAnswered === total && !completedRef.current) {
      completedRef.current = true;
      const finalScore = next.filter((a, i) => a === questions[i].correct).length;
      sound.play(finalScore >= passMark ? 'ding' : 'tap');
      onComplete(finalScore, total);
    }
  };

  const retry = () => {
    sound.play('tap');
    setAnswers(questions.map(() => null));
    setOrders(questions.map((q) => shuffle(q.opts.length)));
    setIx(0);
    ref.current?.scrollTo({ x: 0, animated: true });
  };

  const deckLen = total + 1; // + result card

  return (
    <View>
      <DeckHint hint={T.quizHint} ix={Math.min(ix, deckLen - 1)} total={deckLen} />
      <ScrollView
        ref={ref}
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={step}
        decelerationRate="fast"
        onMomentumScrollEnd={(e) => setIx(Math.max(0, Math.min(deckLen - 1, Math.round(e.nativeEvent.contentOffset.x / step))))}
        contentContainerStyle={{ paddingRight: 28 }}
      >
        {questions.map((q, qi) => {
          const selKey = answers[qi];
          const isAnswered = selKey !== null;
          return (
            <View key={qi} style={{ width: cardW, marginRight: 12, borderRadius: 20, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 20, minHeight: cardH }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                <TX font="semi" role="meta" ls={2.4} color={t.accTx}>QUIZ</TX>
                <TX role="meta" color={t.txMuted}>{qi + 1} / {total}</TX>
              </View>
              <TX font="serif" size={20} role="titleLg" lhMult={1.35} style={{ width: '100%', marginBottom: 16 }}>{q.q}</TX>
              <View style={{ gap: 10 }}>
                {orders[qi].map((oi) => {
                  const isCorrect = oi === q.correct;
                  const isSel = selKey === oi;
                  const border = isAnswered ? (isCorrect ? t.acc : isSel ? t.danger : t.line(9)) : t.line(9);
                  const bg = isAnswered && isCorrect ? t.accA(10) : isAnswered && isSel && !isCorrect ? t.dangerA(10) : t.card2;
                  const color = isAnswered && isSel && !isCorrect ? t.danger : t.txPrimary;
                  return (
                    <Press key={oi} cue={null} onPress={() => pick(qi, oi)} style={{ minHeight: 52, borderRadius: 14, borderWidth: 1.5, borderColor: border, backgroundColor: bg, justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 10 }}>
                      <TX font="med" role="body" lhMult={1.35} color={color}>{q.opts[oi]}</TX>
                    </Press>
                  );
                })}
              </View>
              {isAnswered && q.why ? (
                <View style={{ marginTop: 14, borderRadius: 14, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), padding: 14 }}>
                  <TX role="label" color={t.txSecondary} lhMult={1.55}>{q.why}</TX>
                </View>
              ) : null}
              {isAnswered && qi < total - 1 ? (
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 14, alignSelf: 'flex-end' }}>
                  <TX font="semi" role="meta" ls={1.4} color={t.accTx}>{T.lessonSwipe}</TX>
                  <Icon name="chevronRight" size={13} color={t.accTx} strokeWidth={2} />
                </View>
              ) : null}
            </View>
          );
        })}

        {/* Result card */}
        <View style={{ width: cardW, marginRight: 12, borderRadius: 20, borderWidth: 1.5, borderColor: done ? t.accA(40) : t.line(9), backgroundColor: done ? t.accA(5) : t.card, padding: 24, minHeight: cardH, alignItems: 'center', justifyContent: 'center' }}>
          {done ? (
            <>
              {score >= passMark ? (
                <Badge label={T.quizPassed} color={t.acc} bg="transparent" style={{ minHeight: 34, paddingVertical: 6, paddingHorizontal: 18, borderRadius: 17, borderWidth: 1.5, borderColor: t.acc, justifyContent: 'center', marginBottom: 18, transform: [{ rotate: '-3deg' }] }} />
              ) : (
                <TX font="semi" role="label" ls={2} color={t.txMuted} style={{ marginBottom: 18 }}>{T.quizFailed}</TX>
              )}
              <TX font="serif" size={58} role="display" color={t.accTx}>{score} / {total}</TX>
              {/* Primary: on to the next lesson when there is one; plain
                  finish otherwise. Restart and quiz-retry sit below. */}
              <Press
                cue={null}
                onPress={onNextLesson ?? onFinish}
                style={{ marginTop: 26, minHeight: 56, paddingVertical: 10, paddingHorizontal: 30, borderRadius: 28, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }}
              >
                <TX font="semi" role="body" color={t.accInk} center style={{ width: '100%' }}>
                  {onNextLesson ? T.lessonNextUp : finishLabel}
                </TX>
                {onNextLesson && nextTitle ? (
                  <TX font="serifI" role="meta" color={t.accInk} center style={{ width: '100%', marginTop: 2, opacity: 0.85 }}>
                    {nextTitle}
                  </TX>
                ) : null}
              </Press>
              {onRestart ? (
                <Press
                  cue={null}
                  onPress={onRestart}
                  style={{ marginTop: 12, minHeight: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', paddingVertical: 6 }}
                >
                  <TX font="semi" role="bodySm" color={t.txSecondary}>{T.lessonRestart}</TX>
                </Press>
              ) : null}
              <Press cue={null} onPress={retry} style={{ marginTop: 14 }}>
                <TX role="bodySm" color={t.txMuted}>{T.retry}</TX>
              </Press>
            </>
          ) : (
            <>
              <TX font="serif" size={44} role="display" color={t.txSubtle}>{answered} / {total}</TX>
              <TX role="bodySm" color={t.txMuted} center lhMult={1.5} style={{ width: '100%', maxWidth: 240, marginTop: 12 }}>{T.quizAnswerAll}</TX>
            </>
          )}
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 12 }}>
        {Array.from({ length: deckLen }, (_, i) => (
          <View key={i} style={{ width: i === ix ? 16 : 5, height: 5, borderRadius: 3, backgroundColor: i === ix ? t.acc : answers[i] !== undefined && i < total && answers[i] !== null ? t.accA(50) : t.line(14) }} />
        ))}
      </View>
    </View>
  );
}

/* ─── Round-up ───────────────────────────────────────────────────────────── */

type RoundupSection = Extract<LessonSection, { type: 'roundup' }>;

export function RoundupView({ s }: { s: RoundupSection }) {
  const t = useTheme();
  return (
    <View style={{ borderRadius: 22, borderWidth: 1.5, borderColor: t.accA(35), backgroundColor: t.accA(5), padding: 20 }}>
      <RichImage refKey={s.imageRef} />
      <TX role="body" color={t.txSecondary} lhMult={1.6} style={{ marginBottom: 18 }}>{s.body}</TX>
      <View style={{ gap: 12 }}>
        {s.points.map((p, i) => (
          <View key={i} style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
            <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
              <Icon name="check" size={11} color={t.accTx} strokeWidth={2} />
            </View>
            <TX role="bodySm" color={t.txSecondary} lhMult={1.55} style={{ flex: 1 }}>{p}</TX>
          </View>
        ))}
      </View>
    </View>
  );
}
