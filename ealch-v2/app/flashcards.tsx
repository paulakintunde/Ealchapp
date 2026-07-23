import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { useStore } from '@/store/useStore';
import { composeSession, introEligible, localDay } from '@/store/progress.logic';
import { sound, tts } from '@/services';
import { content, useContent } from '@/services/content';
import { CARD_TYPES, LEVELS, type CardType, type Level } from '@/content/schema';
import { themeMeta } from '@/content/themeMeta';
import { domainMeta } from '@/content/domainMeta';

export default function Flashcards() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const logSession = useSessionLog();
  const logAttempt = useProgress((s) => s.logAttempt);

  // The deck is a view over the corpus, snapshotted once at mount (content is
  // already hydrated — _layout gates paint on it). `?deck=new` plays the
  // composed session's FRESH slice instead of the whole eligible set: the
  // never-attempted items at or below the learner's level, theme-interleaved,
  // capped by what today's review load left room for (composeSession). Grading
  // a card logs an attempt, which is exactly how a new word enters the SRS —
  // so home's "new words" hero leads here.
  // `?theme=&level=` narrows the deck to one parcours step (theme detail's
  // Découvrir); without it the deck is the whole flashcard-eligible corpus.
  // `?domain=&ctype=&dir=` narrows the deck to one hub deck (flashhub →
  // flashtypes → here): the domain's themes come from the corpus catalogue,
  // the same join the hub's counts display, and an unknown ctype is ignored
  // rather than yielding a silently empty deck. `dir` presets the vocab
  // direction (the EN → FR entry point); the toggle can still flip it.
  const { deck: deckMode, theme, level, domain, ctype, dir } = useLocalSearchParams<{
    deck?: string; theme?: string; level?: string; domain?: string; ctype?: string; dir?: string;
  }>();
  const cardType = (CARD_TYPES as readonly string[]).includes(ctype ?? '') ? (ctype as CardType) : undefined;
  // The catalogue's French theme titles, for the sub-theme deck header. The
  // catalogue wins over themeMeta the same way it does everywhere else: the
  // corpus row is OTA-updatable, the map is the bundled fallback.
  const catThemes = useContent((s) => s.corpus.themes);
  const deck = useMemo(() => {
    const q = theme
      ? { theme, ...(LEVELS.includes(level as Level) ? { level: level as Level } : {}) }
      : domain
        ? {
            themes: (useContent.getState().corpus.themes ?? []).filter((th) => th.domain === domain).map((th) => th.slug),
            ...(cardType ? { cardType } : {}),
            ...(LEVELS.includes(level as Level) ? { level: level as Level } : {}),
          }
        : undefined;
    const fetched = content.itemsFor('flashcard', q);
    // A hub deck with no level filter plays easiest-first: sorted by band
    // (LEVELS order), stable within a band, so "all levels" is a ramp rather
    // than a shuffle of sons cards into b2 sentences.
    const all = domain && !LEVELS.includes(level as Level)
      ? [...fetched].sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level))
      : fetched;
    if (deckMode !== 'new') return all;
    const { attempts } = useProgress.getState();
    return composeSession(attempts, introEligible(all, useStore.getState().level), localDay()).fresh;
  }, [deckMode, theme, level, domain, cardType]);

  const [cardIx, setCardIx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [cardDir, setCardDir] = useState<'fr' | 'en'>(dir === 'en' ? 'en' : 'fr');

  // Cleanup: without this, closing mid-card leaves the answer timer to fire
  // setState on an unmounted component, and any in-flight TTS keeps speaking.
  const answerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Guards the 220ms window between answerCard's tap and cardIx actually
  // advancing: a second tap in that window (fast double-tap, or two fingers)
  // re-answered the SAME card against the SRS log and advanced the index
  // twice, silently skipping the next card. A ref (not state) so the check
  // is synchronous within the same event, not deferred to a re-render.
  const answeringRef = useRef(false);
  useEffect(() => {
    return () => {
      if (answerTimer.current) clearTimeout(answerTimer.current);
      tts.stop();
    };
  }, []);

  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, {
      toValue: flipped ? 1 : 0,
      duration: 550,
      easing: Easing.bezier(0.32, 0.72, 0.35, 1),
      useNativeDriver: true,
    }).start();
  }, [flipped, anim]);

  const deckLen = deck.length;
  const deckOver = cardIx >= deckLen;
  const card = deck[Math.min(cardIx, deckLen - 1)];
  const frFront = cardDir === 'fr';

  // Prompt behavior is PER CARD, not per deck: a sub-theme deck mixes every
  // card type, and a gap-fill card must ask with its prompt there too — keyed
  // off the deck's ctype param it would show its answer on the front. The
  // FR/EN toggle hides only when the whole deck is one non-vocab type
  // (direction is meaningless for a deck with no vocab cards in it).
  const deckTypeLocked = cardType !== undefined && cardType !== 'vocab';
  const cardCT: CardType = card ? card.cardType ?? 'vocab' : 'vocab';
  const promptMode = cardCT !== 'vocab';
  const typeLabels: Record<CardType, string> = {
    vocab: frFront ? T.ctVocabFrEn : T.ctVocabEnFr,
    gapfill: T.ctGapfill,
    conjugation: T.ctConjugation,
    error: T.ctError,
    grammar: T.ctGrammar,
    register: T.ctRegister,
  };
  // The front's task line. A flashcard front carries the QUESTION, the IPA,
  // an instruction, and the audio symbol; the answer lives behind the flip,
  // always — a front that shows the answer is not a flashcard.
  const instr = promptMode
    ? ({
        vocab: '',
        gapfill: T.instrGapfill,
        conjugation: T.instrConjugation,
        error: T.instrError,
        grammar: T.instrGrammar,
        register: T.instrRegister,
      } as Record<CardType, string>)[cardCT]
    : frFront
      ? T.instrVocabFr
      : T.instrVocabEn;

  const flipCard = () => {
    sound.play('flip');
    setFlipped((f) => !f);
  };

  const answerCard = (know: boolean) => {
    if (answeringRef.current) return;
    answeringRef.current = true;
    sound.play(know ? 'success' : 'tap');
    setFlipped(false);
    setKnown((k) => (know ? k + 1 : k));
    // Self-rated recall: nothing is captured, so `heard` is empty and the score
    // is the learner's own "I knew it" / "again". The French is what's being
    // learned, so it is the expected value regardless of which way the card faced.
    logAttempt({
      activity: 'flashcards',
      itemId: card.id,
      expected: card.fr,
      heard: '',
      score: know ? 1 : 0,
      verdict: know ? 'good' : 'off',
      correct: know,
      // Direction decides the memory, and this deck knows its direction — it
      // prints it on the card (FR → EN / EN → FR). Seeing the French and
      // recalling the English is recognition; being shown the English and having
      // to come up with the French is production, self-rated but production.
      // Prompt decks are production drills by construction (the front asks you
      // to come up with the French form) except grammar, which is a rule you
      // recognise rather than a form you produce.
      modality: promptMode
        ? cardCT === 'grammar'
          ? 'recognise'
          : 'produce'
        : frFront
          ? 'recognise'
          : 'produce',
    });
    const lastCard = cardIx + 1 >= deckLen;
    answerTimer.current = setTimeout(() => {
      answeringRef.current = false;
      setCardIx((i) => i + 1);
    }, 220);
    if (lastCard) logSession('flashcards');
  };

  const flipDir = () => {
    sound.play('tap');
    setFlipped(false);
    setCardDir((d) => (d === 'fr' ? 'en' : 'fr'));
  };

  const restart = () => {
    sound.play('tap');
    if (answerTimer.current) clearTimeout(answerTimer.current);
    answeringRef.current = false;
    setCardIx(0);
    setFlipped(false);
    setKnown(0);
  };

  const frontRotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
  // Faces are a top-to-bottom COLUMN now, not a centered blob: eyebrow at the
  // top, the question/answer card flex-centered in the free space, the audio
  // pill below it, the instruction at the foot. Vertical order carries the
  // reading order: what kind of card, what is asked, hear it, what to do.
  const faceBase = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
    alignItems: 'center' as const,
    backfaceVisibility: 'hidden' as const,
    overflow: 'hidden' as const,
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[t.accA(11), 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}
      />
      <FocusHeader
        onClose={() => (theme || domain ? router.back() : router.replace('/home'))}
        onSettings={() => router.push('/settings')}
        title={
          theme
            ? domain
              // A sub-theme deck from the hub: just the theme's name. The
              // DÉCOUVRIR suffix belongs to the theme parcours' Découvrir
              // step, which is the only route that arrives with theme alone.
              ? (catThemes?.find((th) => th.slug === theme)?.title ?? themeMeta(theme).fr).toUpperCase()
              : `${themeMeta(theme).fr.toUpperCase()} · ${T.stepNames.decouvrir.toUpperCase()}`
            : domain
              ? (cardType ? typeLabels[cardType] : domainMeta(domain).fr).toUpperCase()
              : T.cardsTag
        }
      />

      <View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: insets.bottom + 24 }}>
        {/* Direction toggle — hidden only for single-type prompt decks; a
            mixed deck keeps it, it governs the vocab cards inside. */}
        {deckTypeLocked ? null : (
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 14 }}>
            <Press
              onPress={flipDir}
              cue={null}
              style={{
                minHeight: 32,
                paddingVertical: 4,
                paddingHorizontal: 13,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: t.accA(50),
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TX font="semi" role="meta" ls={0.9} color={t.accTx}>
                {frFront ? 'FR → EN' : 'EN → FR'}
              </TX>
            </Press>
          </View>
        )}

        {/* Progress */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 22 }}>
          <View style={{ flex: 1 }}>
            {/* deckLen can be 0 (a deep link to ?deck=new with nothing fresh);
                0/0 must render an idle bar, not a NaN width. */}
            <ProgressBar pct={deckLen ? Math.min(100, (cardIx / deckLen) * 100) : 0} height={3} color={t.acc} track={t.line(10)} />
          </View>
          <TX role="meta" color={t.txMuted}>
            {Math.min(cardIx + 1, deckLen)} / {deckLen}
          </TX>
        </View>

        {deckLen === 0 ? (
          // An honest empty state: no cards were ever offered, so there is
          // nothing to score and nothing to "complete." Showing the
          // deckDone screen here (0/0, a working Redo that re-renders the
          // same empty deck) would read as a finished session that never
          // happened.
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
            <TX font="serifI" size={26} role="display" center style={{ marginTop: 10, marginBottom: 6 }}>
              {T.deckEmptyT}
            </TX>
            <TX role="bodySm" center color={t.txMuted} style={{ marginBottom: 36, maxWidth: 260 }}>
              {T.deckEmptyS}
            </TX>
            <Press onPress={() => router.replace('/home')} style={{ marginTop: 16 }}>
              <TX role="bodySm" color={t.txMuted}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : deckOver ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
            <TX font="serif" size={64} role="display" color={t.accTx}>
              {known}/{deckLen}
            </TX>
            <TX font="serifI" size={26} role="display" center style={{ marginTop: 10, marginBottom: 6 }}>
              {T.deckDone}
            </TX>
            <TX role="bodySm" center color={t.txMuted} style={{ marginBottom: 36, maxWidth: 260 }}>
              {T.deckSub}
            </TX>
            <Press
              onPress={restart}
              cue={null}
              style={{
                minHeight: 52,
                paddingVertical: 8,
                paddingHorizontal: 34,
                borderRadius: 26,
                backgroundColor: t.acc,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX font="semi" role="body" color={t.accInk}>
                {T.redo}
              </TX>
            </Press>
            <Press onPress={() => router.replace('/home')} style={{ marginTop: 16 }}>
              <TX role="bodySm" color={t.txMuted}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            {/* Flip card */}
            <Press
              onPress={flipCard}
              cue={null}
              scale={1}
              accessibilityRole="button"
              accessibilityLabel={T.flipCardA11y}
              style={{ flex: 1, maxHeight: 480 }}
            >
              {/* Front. Both faces stay mounted and stacked; backfaceVisibility
                  hides the turned-away one VISUALLY only — on Android it still
                  captures touches, and the back face renders later so it sits
                  on top of the front in touch order. pointerEvents gates each
                  face so only the visible one is ever interactive; without it,
                  the hidden face's speaker button silently swallows taps meant
                  for the visible face. */}
              <Animated.View
                pointerEvents={flipped ? 'none' : 'auto'}
                style={[
                  faceBase,
                  {
                    borderColor: t.line(10),
                    backgroundColor: t.card2,
                    transform: [{ perspective: 1200 }, { rotateY: frontRotate }],
                  },
                ]}
              >
                <TX font="semi" role="eyebrow" ls={2.8} color={t.accTx} center style={{ marginTop: 4 }}>
                  {(promptMode ? typeLabels[cardCT].toUpperCase() : frFront ? T.frontFr : T.frontEn) +
                    ' · ' + card.level.toUpperCase()}
                </TX>
                {/* Question container — the word/prompt (with its IPA) in its
                    own inset card, flex-centered in the free space. IPA only
                    when the French is the question; the English NEVER prints
                    on a front — recall means answering before the flip. */}
                <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', paddingVertical: 14 }}>
                  <View style={{ alignSelf: 'stretch', borderRadius: 18, borderWidth: 1, borderColor: t.accA(20), backgroundColor: t.accA(6), paddingVertical: 20, paddingHorizontal: 16, alignItems: 'center', gap: 8 }}>
                    <TX font="serifI" size={promptMode ? 23 : 31} role="display" center>
                      {promptMode ? card.prompt ?? card.fr : frFront ? card.fr : card.en}
                    </TX>
                    {!promptMode && frFront && card.ipa ? (
                      <TX role="bodySm" center color={t.txMuted}>
                        {card.ipa}
                      </TX>
                    ) : null}
                    {/* The respelling — the word rewritten in English-friendly
                        syllables, under the IPA: the IPA is exact, this is the
                        one a learner can actually read aloud. */}
                    {!promptMode && frFront && card.respell ? (
                      <TX font="semi" role="bodySm" ls={0.8} center color={t.accTx}>
                        {card.respell}
                      </TX>
                    ) : null}
                  </View>
                </View>
                {/* Audio pill — its own container, sitting between the
                    question (IPA) and the instruction. Only where the French
                    is already the question: on EN → FR and prompt fronts the
                    French is part of the answer, so no audio there. */}
                {!promptMode && frFront ? (
                  <View style={{ minHeight: 52, borderRadius: 26, borderWidth: 1, borderColor: t.line(12), backgroundColor: t.card, flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 18, paddingVertical: 6, marginBottom: 16 }}>
                    <Waveform count={16} height={16} color={t.accA(55)} barWidth={2.5} gap={3.5} />
                    <Press
                      onPress={() => tts.speak(card.fr)}
                      cue={null}
                      // No accessibilityRole="button" here: this Press sits
                      // inside the card's own Flip-card button (:345), and on
                      // web RN renders role="button" as a real <button> tag —
                      // nesting one <button> in another is invalid HTML (React
                      // warns) and a WCAG nested-interactive-controls violation.
                      // accessibilityLabel alone still announces it to AT.
                      accessibilityLabel={T.playAudioA11y}
                      style={{ width: 38, height: 38, borderRadius: 19, borderWidth: 1, borderColor: t.accA(50), alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Icon name="speaker" size={16} color={t.acc} />
                    </Press>
                  </View>
                ) : null}
                <TX font="semi" role="meta" ls={1.7} color={t.txSubtle} center style={{ marginBottom: 4, textTransform: 'uppercase' }}>
                  {instr || T.flipHint}
                </TX>
              </Animated.View>

              {/* Back */}
              <Animated.View
                pointerEvents={flipped ? 'auto' : 'none'}
                style={[
                  faceBase,
                  {
                    borderColor: t.accA(40),
                    backgroundColor: t.accCard(10),
                    transform: [{ perspective: 1200 }, { rotateY: backRotate }],
                  },
                ]}
              >
                <TX font="semi" role="eyebrow" ls={2.8} color={t.txMuted} center style={{ marginTop: 4 }}>
                  {promptMode ? T.frontFr : frFront ? T.frontEn : T.frontFr}
                </TX>
                {/* Answer container — mirrors the front's question card so the
                    flip reads as the same object turning over. The gloss and
                    the teaching note live with the answer, inside it. */}
                <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', paddingVertical: 14 }}>
                  <View style={{ alignSelf: 'stretch', borderRadius: 18, borderWidth: 1, borderColor: t.accA(35), backgroundColor: t.accA(8), paddingVertical: 20, paddingHorizontal: 16, alignItems: 'center', gap: 10 }}>
                    <TX font="serif" size={promptMode ? 23 : 28} role="display" center>
                      {promptMode ? card.fr : frFront ? card.en : card.fr}
                    </TX>
                    {promptMode ? (
                      <TX role="bodySm" center color={t.txSecondary}>
                        {card.en}
                      </TX>
                    ) : null}
                    {card.notes ? (
                      <TX font="serifI" role="bodySm" center color={t.txMuted}>
                        {card.notes}
                      </TX>
                    ) : null}
                  </View>
                </View>
                {/* Audio pill in the same slot as the front's, so the control
                    stays under the thumb through the flip. The back always
                    speaks the French — here it is the answer, revealed. */}
                <View style={{ minHeight: 52, borderRadius: 26, borderWidth: 1, borderColor: t.accA(30), flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 18, paddingVertical: 6, marginBottom: 16 }}>
                  <Waveform count={16} height={16} color={t.accA(55)} barWidth={2.5} gap={3.5} />
                  <Press
                    onPress={() => tts.speak(card.fr)}
                    cue={null}
                    // See the matching front-face Press above: no
                    // accessibilityRole="button" — this one nests inside the
                    // Flip-card button too, and a nested <button> is invalid
                    // HTML on web (and an AT anti-pattern either platform).
                    accessibilityLabel={T.playAudioA11y}
                    style={{ width: 38, height: 38, borderRadius: 19, borderWidth: 1, borderColor: t.accA(50), alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Icon name="speaker" size={18} color={t.acc} />
                  </Press>
                </View>
              </Animated.View>
            </Press>

            {/* Actions */}
            <View style={{ flexDirection: 'row', gap: 12, marginTop: 26 }}>
              <Press
                onPress={() => answerCard(false)}
                cue={null}
                style={{
                  flex: 1,
                  minHeight: 54,
                  paddingVertical: 8,
                  borderRadius: 27,
                  borderWidth: 1,
                  borderColor: t.line(16),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="semi" role="body" color={t.txSecondary}>
                  {T.again}
                </TX>
              </Press>
              <Press
                onPress={() => answerCard(true)}
                cue={null}
                style={{
                  flex: 1,
                  minHeight: 54,
                  paddingVertical: 8,
                  borderRadius: 27,
                  backgroundColor: t.acc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="semi" role="body" color={t.accInk}>
                  {T.know}
                </TX>
              </Press>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
