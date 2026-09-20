import { useEffect, useMemo, useRef, useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { MascotAvatar } from '@/components/MascotAvatar';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { sound, tts, stt, type SttResult } from '@/services';
import { content, contentAssetUrl, useContent } from '@/services/content';
import { LEVELS, type Level, type Item } from '@/content/schema';
import { domainMeta } from '@/content/domainMeta';
import { themeMeta } from '@/content/themeMeta';
import { answerMatches, markWords, barsForLevel } from '@/utils/score';
import { displayIpa } from '@/services/content.logic';

type Phase = 'ask' | 'listening' | 'result';
/** One card of the deck: an item plus which way it's being drilled. Every item
 *  appears twice — production, then recognition — so a word can no longer be
 *  called "learned" from only one direction. */
type VfEntry = { item: Item; isFr: boolean };

export default function VoiceFlash() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const logSession = useSessionLog();
  const logAttempt = useProgress((s) => s.logAttempt);
  const setResume = useProgress((s) => s.setResume);
  const clearResume = useProgress((s) => s.clearResume);

  // Items now come from the corpus, snapshotted at mount. `?theme=&level=`
  // narrows the run to one parcours step (theme detail's Prononcer, or a
  // sub-theme deck opened from /voicethemes).
  const { theme, level, item: resumeItem, dir: resumeDir } = useLocalSearchParams<{
    theme?: string;
    level?: string;
    item?: string;
    dir?: string;
  }>();
  const items = useMemo(
    () =>
      content.itemsFor(
        'voiceflash',
        theme ? { theme, ...(LEVELS.includes(level as Level) ? { level: level as Level } : {}) } : undefined
      ),
    [theme, level]
  );

  // Round one is production (see the English, say the French); round two is
  // recognition (see/hear the French, give the English back). Block order, not
  // interleaved per word, so a learner isn't asked to translate a word back
  // seconds after saying it — that would just be echoing, not recall.
  const entries = useMemo<VfEntry[]>(
    () => [...items.map((it) => ({ item: it, isFr: true })), ...items.map((it) => ({ item: it, isFr: false }))],
    [items]
  );

  // Resume landing: `?item=&dir=` names the exact card a resumed visit should
  // reopen on. Deck order is deterministic, so the (item id, direction) pair
  // reliably locates the same card even though each word now appears twice.
  const [vfIx, setVfIx] = useState(() => {
    const raw = Array.isArray(resumeItem) ? resumeItem[0] : resumeItem;
    if (!raw) return 0;
    const rawDir = Array.isArray(resumeDir) ? resumeDir[0] : resumeDir;
    const found = entries.findIndex((e) => e.item.id === raw && (rawDir ? (rawDir === 'fr') === e.isFr : true));
    return found >= 0 ? found : 0;
  });
  const [vfPhase, setVfPhase] = useState<Phase>('ask');
  const [vfTyped, setVfTyped] = useState('');
  const [vfCorrect, setVfCorrect] = useState<boolean | null>(null);
  const [vfScore, setVfScore] = useState(0);
  const [vfPartial, setVfPartial] = useState('');
  const [vfHeard, setVfHeard] = useState<SttResult | null>(null);
  const [promptOn, setPromptOn] = useState(false);
  // Image refs that failed to load this session — those items fall back to the
  // glyph chain instead of rendering a broken source. Keyed by URL, so moving
  // to the next item never needs a reset.
  const [badImgs, setBadImgs] = useState<Set<string>>(() => new Set());
  const promptTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Theme → domain, for the no-photo icon fallback below: the same 12-domain
  // icon/color set flashcards' hub already uses, instead of guessing a glyph
  // from the French word. One consistent glyph per domain, everywhere.
  const catThemes = useContent((s) => s.corpus.themes);
  const themeDomain = useMemo(() => {
    const m = new Map<string, string>();
    for (const th of catThemes ?? []) m.set(th.slug, th.domain);
    return m;
  }, [catThemes]);

  // Leaving mid-drill must not leave the recognizer listening, TTS speaking, or
  // the prompt timer firing setState after unmount.
  useEffect(() => {
    return () => {
      if (promptTimer.current) clearTimeout(promptTimer.current);
      stt.abort();
      tts.stop();
    };
  }, []);

  const total = entries.length;
  const finished = vfIx >= total;
  const ix = Math.min(vfIx, Math.max(total - 1, 0));
  // The cast branch is only ever assigned when total === 0, a state the render
  // below short-circuits to the honest empty screen and never reads `item`
  // from — same guarantee the plain corpus-order index gave before entries
  // existed.
  const item = total > 0 ? entries[ix].item : (undefined as unknown as Item);
  const vfIsFr = total > 0 ? entries[ix].isFr : true;

  // Keeps voiceflash resumable at the exact item, re-firing every time vfIx
  // changes so leaving mid-theme still lands the home hero on this card.
  useEffect(() => {
    if (finished || total === 0) return;
    const params = new URLSearchParams({ item: item.id, dir: vfIsFr ? 'fr' : 'en' });
    if (theme) params.set('theme', theme);
    if (level) params.set('level', level);
    setResume('voiceflash', {
      route: `/voiceflash?${params.toString()}`,
      title: theme ? themeMeta(theme).fr : T.vfTitle,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vfIx, theme, level, finished, total]);

  const playPrompt = () => {
    sound.play('flip');
    tts.speak(item.fr);
    setPromptOn(true);
    if (promptTimer.current) clearTimeout(promptTimer.current);
    promptTimer.current = setTimeout(() => setPromptOn(false), 1400);
  };

  // Spoken path: the recognizer scores the utterance against the target.
  // If it heard nothing usable (no mic, denied, silence) vfCorrect stays null
  // and the user self-assesses, exactly as before — the score stays honest
  // either way; it is never awarded for a recording that didn't happen.
  const vfMic = async () => {
    if (vfPhase === 'listening') {
      stt.stop();
      return;
    }
    if (vfPhase !== 'ask') return;
    sound.play('tap');
    setVfPartial('');
    setVfPhase('listening');

    const target = vfIsFr ? item.fr : item.en;
    // Strictness scales to the item's CEFR band, same as Speak and the Den
    // lessons: a "sons" beginner and a C1 speaker should not be graded on the
    // same bar.
    const res = await stt.listen(target, {
      maxMs: 6000,
      lang: vfIsFr ? 'fr-FR' : 'en-US',
      onPartial: setVfPartial,
      bars: barsForLevel(item.level),
    });

    setVfPartial('');
    setVfHeard(res);

    if (res.ok) {
      const got = res.verdict === 'good';
      sound.play(got ? 'success' : 'error');
      setVfCorrect(got);
      if (got) setVfScore((v) => v + 1);
      // The recognizer graded a real utterance — record it with what it heard.
      logAttempt({
        activity: 'voiceflash',
        itemId: item.id,
        expected: target,
        heard: res.transcript,
        score: res.score,
        verdict: res.verdict,
        correct: got,
        // The deck alternates direction (vfIsFr). Saying the French is
        // production; being shown the French and giving the English back is
        // recognition, even though both arrive through the mic. The surface is
        // not the memory.
        modality: vfIsFr ? 'produce' : 'recognise',
      });
    } else {
      // Nothing was heard — fall back to self-assessment (vfSelf logs the attempt
      // once the learner rates themselves, so nothing is recorded here).
      sound.play('flip');
      setVfCorrect(null);
    }
    setVfPhase('result');
  };

  const vfSelf = (got: boolean) => {
    sound.play(got ? 'success' : 'tap');
    if (got) setVfScore((v) => v + 1);
    // Self-rated: nothing was captured, so `heard` is empty and the score is the
    // learner's own verdict, honestly labelled as such.
    logAttempt({
      activity: 'voiceflash',
      itemId: item.id,
      expected: vfIsFr ? item.fr : item.en,
      heard: '',
      score: got ? 1 : 0,
      verdict: got ? 'good' : 'off',
      correct: got,
      modality: vfIsFr ? 'produce' : 'recognise',
    });
    if (got) {
      vfNext();
    } else {
      // A self-admitted miss deserves the same second try a mic- or
      // typed-graded miss gets, instead of marching straight to the next
      // card. Reuses the vfCorrect === false branch below.
      setVfCorrect(false);
    }
  };

  const vfCheck = () => {
    if (!vfTyped.trim()) return;
    // Match against the same target the mic scores against — the full word/phrase,
    // article-insensitive but junk-rejecting.
    const target = vfIsFr ? item.fr : item.en;
    const ok = answerMatches(target, vfTyped);
    sound.play(ok ? 'success' : 'error');
    setVfCorrect(ok);
    if (ok) setVfScore((v) => v + 1);
    logAttempt({
      activity: 'voiceflash',
      itemId: item.id,
      expected: target,
      heard: vfTyped.trim(),
      score: ok ? 1 : 0,
      verdict: ok ? 'good' : 'off',
      correct: ok,
      modality: vfIsFr ? 'produce' : 'recognise',
    });
    setVfPhase('result');
  };

  const vfNext = () => {
    sound.play('tap');
    const lastItem = vfIx + 1 >= total;
    setVfIx((i) => i + 1);
    setVfPhase('ask');
    setVfTyped('');
    setVfCorrect(null);
    setVfHeard(null);
    setVfPartial('');
    if (lastItem) {
      logSession('voiceflash');
      clearResume('voiceflash');
    }
  };

  // Re-attempt the SAME card right now — distinct from `restart` (whole deck)
  // and from `vfNext` (moves on). Deliberately leaves vfIx and vfScore alone:
  // this is another try at the word just missed, not a new card and not a
  // do-over of the whole session. The retry attempt logs normally through
  // whichever path the learner uses next (mic, typed, or self-rated) — no
  // special-cased logging here, same as any other attempt at this item.
  const retryItem = () => {
    sound.play('tap');
    setVfPhase('ask');
    setVfTyped('');
    setVfCorrect(null);
    setVfHeard(null);
    setVfPartial('');
  };

  const restart = () => {
    sound.play('tap');
    setVfIx(0);
    setVfPhase('ask');
    setVfTyped('');
    setVfCorrect(null);
    setVfHeard(null);
    setVfPartial('');
    setVfScore(0);
  };

  const listening = vfPhase === 'listening';
  const micActive = listening;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[t.accA(11), 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}
      />
      <FocusHeader
        onClose={() => (theme ? router.back() : router.replace('/home'))}
        onSettings={() => router.push('/settings')}
        title={T.vfTitle}
      />

      <View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: insets.bottom + 24 }}>
        {/* Progress */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 6, marginBottom: 20 }}>
          <View style={{ flex: 1 }}>
            <ProgressBar pct={Math.min(100, (vfIx / total) * 100)} height={3} color={t.acc} track={t.line(10)} />
          </View>
          <TX role="meta" color={t.txMuted}>
            {Math.min(vfIx + 1, total)} / {total}
          </TX>
        </View>

        {total === 0 ? (
          // Honest empty state: no items reached this deck (a stale deep
          // link, or a theme with no voiceflash-tagged words), so there is
          // nothing to score. The finished screen below (0/0, a Redo that
          // just re-renders the same empty deck) would misreport a session
          // that never ran.
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="serifI" size={26} role="display" center style={{ marginTop: 10, marginBottom: 6 }}>
              {T.vfEmptyT}
            </TX>
            <TX role="bodySm" center color={t.txMuted} style={{ marginBottom: 32, maxWidth: 260 }}>
              {T.vfEmptyS}
            </TX>
            <Press onPress={() => router.replace('/home')} style={{ marginTop: 16 }}>
              <TX role="bodySm" color={t.txMuted}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : finished ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="serif" size={64} role="display" color={t.accTx}>
              {vfScore} / {total}
            </TX>
            <TX font="serifI" size={26} role="display" center style={{ marginTop: 10, marginBottom: 32 }}>
              {T.vfDoneT}
            </TX>
            <Press
              onPress={restart}
              cue={null}
              style={{ minHeight: 52, paddingVertical: 8, paddingHorizontal: 34, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
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
            {/* Prompt card */}
            <View
              style={{
                borderRadius: 24,
                borderWidth: 1,
                borderColor: t.line(10),
                backgroundColor: t.card2,
                paddingVertical: 40,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}
            >
              {vfIsFr ? (
                <View
                  style={{
                    width: 132,
                    height: 132,
                    borderRadius: 66,
                    backgroundColor: t.accA(10),
                    borderWidth: 1,
                    borderColor: t.accA(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 22,
                    overflow: 'hidden',
                  }}
                >
                  {(() => {
                    // imageRef → domain glyph. A failed load joins badImgs and
                    // drops to the glyph on the next render, so a dead URL
                    // costs one frame, never a broken image. The glyph itself
                    // is the item's domain icon — the same 12-icon set
                    // flashcards' hub uses — never a guess from the word.
                    const imgUrl = contentAssetUrl(item.imageRef);
                    const domMeta = domainMeta(themeDomain.get(item.theme) ?? '');
                    return imgUrl && !badImgs.has(imgUrl) ? (
                      <Image
                        source={{ uri: imgUrl }}
                        resizeMode="cover"
                        style={{ width: 132, height: 132 }}
                        onError={() => setBadImgs((s) => new Set(s).add(imgUrl))}
                        accessibilityLabel={item.en}
                      />
                    ) : (
                      <Icon name={domMeta.icon} size={72} color={t.acc} />
                    );
                  })()}
                </View>
              ) : null}
              <TX font="serifI" size={30} role="display" center style={{ marginBottom: vfIsFr || (!item.ipa && !item.respell) ? 16 : 4 }}>
                {vfIsFr ? item.en : item.fr}
              </TX>
              {/* IPA + respell — only when the French word is already the
                  visible question (recognise direction). When vfIsFr, the
                  French is what the mic is testing, so showing its
                  pronunciation here would hand over the answer; the reveal
                  below is where that direction gets it instead. */}
              {!vfIsFr && item.ipa ? (
                <TX font="notation" role="bodySm" center color={t.txMuted} style={{ marginBottom: item.respell ? 2 : 16 }}>
                  {displayIpa(item.ipa)}
                </TX>
              ) : null}
              {!vfIsFr && item.respell ? (
                <TX font="notation" role="bodySm" ls={0.8} center color={t.accTx} style={{ marginBottom: 16, fontWeight: '600' }}>
                  {item.respell}
                </TX>
              ) : null}
              {/* Audio chip — plays the French word */}
              <Press
                onPress={playPrompt}
                cue={null}
                accessibilityRole="button"
                accessibilityLabel={T.playAudioA11y}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 14,
                  height: 56,
                  paddingHorizontal: 22,
                  borderRadius: 28,
                  borderWidth: 1,
                  borderColor: t.accA(40),
                  marginBottom: 18,
                }}
              >
                <Icon name="play" size={17} color={t.acc} />
                <Waveform count={14} height={19} color={promptOn ? t.acc : t.txNonText} active={promptOn} barWidth={3.25} gap={3} />
              </Press>
              <TX font="semi" role="meta" ls={2.6} color={t.accTx}>
                {vfIsFr ? T.sayFr : T.transEn}
              </TX>
            </View>

            {vfPhase === 'result' ? (
              <View
                style={{
                  marginTop: 18,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: vfCorrect === null ? t.accA(45) : vfCorrect ? t.acc : t.danger,
                  backgroundColor: t.card,
                  padding: 18,
                  alignItems: 'center',
                }}
              >
                {/* Correct: micro celebrate. Wrong: thinking, never sad. */}
                <View style={{ marginBottom: 8 }}>
                  <MascotAvatar
                    size={44}
                    rounded={false}
                    state={vfCorrect ? 'celebrate' : 'thinking'}
                    tier="micro"
                    celebrateKey={vfCorrect ? `vf-${item.fr}` : undefined}
                  />
                </View>
                <TX
                  font="bold"
                  role="meta"
                  ls={1.8}
                  color={vfCorrect === null || vfCorrect ? t.accTx : t.danger}
                  style={{ marginBottom: 8, textTransform: 'uppercase' }}
                >
                  {vfCorrect === null ? T.vfSelfT : vfCorrect ? T.correctT : T.incorrectT}
                </TX>
                <TX font="serifI" size={24} role="display" center>
                  « {vfIsFr ? item.fr : item.en} »
                </TX>
                {/* What the recognizer heard — shown whenever it heard anything,
                    so a wrong verdict is always explained rather than asserted. */}
                {vfHeard?.ok ? (
                  <TX role="label" center color={t.txMuted} style={{ marginTop: 10 }}>
                    {T.micHeard}: « {vfHeard.transcript} » · {Math.round(vfHeard.score * 100)}%
                  </TX>
                ) : null}
                {vfHeard && !vfHeard.ok ? (
                  <TX role="meta" center color={t.txSubtle} style={{ marginTop: 10 }}>
                    {vfHeard.error === 'not-allowed'
                      ? T.micDenied
                      : !vfHeard.available
                        ? T.micUnavail
                        : T.micNoSpeech}
                  </TX>
                ) : null}
                {/* Which word(s) missed, not just an overall score — spoken or
                    typed, same marking rule the score used. */}
                {vfCorrect === false
                  ? (() => {
                      const target = vfIsFr ? item.fr : item.en;
                      const heardText = vfHeard?.ok ? vfHeard.transcript : vfTyped;
                      if (!heardText.trim()) return null;
                      const marks = markWords(target, heardText);
                      if (!marks.some((m) => !m.hit)) return null;
                      return (
                        <View style={{ marginTop: 12, alignItems: 'center' }}>
                          <TX font="semi" role="eyebrow" ls={1.8} color={t.danger} style={{ marginBottom: 6 }}>
                            {T.speakFocusOn.toUpperCase()}
                          </TX>
                          <View
                            style={{
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              gap: 6,
                              paddingHorizontal: 8,
                            }}
                          >
                            {marks.map((m, i) => (
                              <TX
                                key={`${m.word}-${i}`}
                                role="meta"
                                font={m.hit ? undefined : 'semi'}
                                color={m.hit ? t.txSubtle : t.danger}
                              >
                                {m.word}
                              </TX>
                            ))}
                          </View>
                        </View>
                      );
                    })()
                  : null}
                {vfCorrect === null ? (
                  <View style={{ flexDirection: 'row', gap: 10, marginTop: 16, alignSelf: 'stretch' }}>
                    <Press
                      onPress={() => vfSelf(false)}
                      cue={null}
                      style={{
                        flex: 1,
                        minHeight: 46,
                        paddingVertical: 6,
                        borderRadius: 23,
                        borderWidth: 1,
                        borderColor: t.line(16),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TX font="semi" role="body">
                        {T.vfMissed}
                      </TX>
                    </Press>
                    <Press
                      onPress={() => vfSelf(true)}
                      cue={null}
                      style={{
                        flex: 1,
                        minHeight: 46,
                        paddingVertical: 6,
                        borderRadius: 23,
                        backgroundColor: t.acc,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TX font="semi" role="body" color={t.accInk}>
                        {T.vfGot}
                      </TX>
                    </Press>
                  </View>
                ) : vfCorrect === false ? (
                  // A real miss (mic-scored or typed, not self-assessed — that
                  // path is vfCorrect === null above): offer another go at
                  // THIS card, not just moving on past it.
                  <View style={{ flexDirection: 'row', gap: 10, marginTop: 16, alignSelf: 'stretch' }}>
                    <Press
                      onPress={retryItem}
                      cue={null}
                      style={{
                        flex: 1,
                        minHeight: 46,
                        paddingVertical: 6,
                        borderRadius: 23,
                        borderWidth: 1,
                        borderColor: t.line(16),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TX font="semi" role="body">
                        {T.retry}
                      </TX>
                    </Press>
                    <Press
                      onPress={vfNext}
                      cue={null}
                      style={{
                        flex: 1,
                        minHeight: 46,
                        paddingVertical: 6,
                        borderRadius: 23,
                        backgroundColor: t.acc,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TX font="semi" role="body" color={t.accInk}>
                        {T.nextCard}
                      </TX>
                    </Press>
                  </View>
                ) : (
                  <Press
                    onPress={vfNext}
                    cue={null}
                    style={{
                      minHeight: 46,
                      paddingVertical: 6,
                      borderRadius: 23,
                      backgroundColor: t.acc,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 16,
                      alignSelf: 'stretch',
                    }}
                  >
                    <TX font="semi" role="body" color={t.accInk}>
                      {T.nextCard}
                    </TX>
                  </Press>
                )}
              </View>
            ) : (
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', gap: 14 }}>
                {listening ? (
                  <Waveform count={26} height={28} color={t.acc} active barWidth={3} gap={4} />
                ) : null}
                <Press
                  onPress={vfMic}
                  cue={null}
                  accessibilityRole="button"
                  accessibilityLabel={T.micA11y}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 36,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: micActive ? t.acc : t.line(4),
                    borderWidth: 1,
                    borderColor: micActive ? t.acc : t.line(20),
                  }}
                >
                  <Icon name="mic" size={26} color={micActive ? t.accInk : t.tx} />
                </Press>
                {listening ? null : (
                  <>
                    <TX font="semi" role="meta" ls={1.6} center color={t.txSubtle} style={{ textTransform: 'uppercase' }}>
                      {T.orTypeT}
                    </TX>
                    <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'stretch' }}>
                      <TextInput
                        value={vfTyped}
                        onChangeText={setVfTyped}
                        onSubmitEditing={vfCheck}
                        placeholder="…"
                        placeholderTextColor={t.txSubtle}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="done"
                        style={{
                          flex: 1,
                          height: 48,
                          borderRadius: 24,
                          borderWidth: 1,
                          borderColor: t.line(12),
                          backgroundColor: t.input,
                          color: t.txPrimary,
                          paddingHorizontal: 18,
                          fontSize: 14,
                        }}
                      />
                      <Press
                        onPress={vfCheck}
                        cue={null}
                        style={{
                          minHeight: 48,
                          paddingVertical: 6,
                          paddingHorizontal: 20,
                          borderRadius: 24,
                          borderWidth: 1,
                          borderColor: t.accA(60),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <TX font="semi" role="bodySm" color={t.accTx}>
                          {T.checkT}
                        </TX>
                      </Press>
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}
