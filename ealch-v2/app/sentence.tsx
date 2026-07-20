import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, ScrollView, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LEVELS, type Level } from '@/content/schema';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { useStore } from '@/store/useStore';
import { introEligible } from '@/store/progress.logic';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import { sound, tts, stt, type SttResult } from '@/services';
import { content } from '@/services/content';
import { mergeArticleTiles } from '@/services/content.logic';
import { dayOfYear } from '@/content/wordOfDay';
import { normalizeFr } from '@/utils/score';

type Phase = 'learn' | 'arrange' | 'say' | 'write' | 'passed';
type Tile = { w: string; t: string };

const STEP: Record<Phase, string> = { learn: '1', arrange: '2', say: '3', write: '4', passed: '✓' };

/** Display-only guard for the arrange bubbles. Android's draw-time line
 *  breaker can disagree with layout measurement by a fraction of a pixel on
 *  the italic serif, wrapping a multi-word tile's last word onto a second line
 *  the single-line bubble then clips — « un café » drew as « un ». A
 *  non-breaking space removes the break opportunity. The DATA keeps real
 *  spaces: verify() joins sbWords[i].w, never this. */
const noWrap = (w: string) => w.replace(/ /g, String.fromCharCode(160));

/** The word tiles for the sentence. The port stored them as JSON in the item's
 *  notes; if that is ever missing, fall back to splitting the sentence. Either
 *  way the tiles pass through mergeArticleTiles, so « un café » is one bubble:
 *  authored splits and naive whitespace splits both used to detach the article
 *  from its noun, teaching exactly the wrong instinct (Phase 6b panel note). */
function tilesFor(fr: string, notes?: string): Tile[] {
  let tiles: Tile[] | null = null;
  try {
    const parsed = JSON.parse(notes ?? '{}');
    if (Array.isArray(parsed.tiles) && parsed.tiles.length) tiles = parsed.tiles as Tile[];
  } catch {
    // fall through
  }
  return mergeArticleTiles(tiles ?? fr.split(/\s+/).map((w) => ({ w, t: '' })));
}

export default function Sentence() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const logSession = useSessionLog();
  const logAttempt = useProgress((s) => s.logAttempt);

  // The deck is every sentence-eligible item at or below the learner's level
  // (all of them if the level line leaves nothing — a thin corpus must not kill
  // the drill). It used to be `itemsFor('sentence')[0]`: one fixed sentence,
  // forever. The day picks the starting sentence, deterministically, and
  // "next sentence" walks the deck from there.
  // `?theme=&level=` narrows the deck to one parcours step (theme detail's
  // Construire); the themed cut skips the level line, which is the filter.
  const { theme, level } = useLocalSearchParams<{ theme?: string; level?: string }>();
  const deck = useMemo(() => {
    if (theme) {
      return content.itemsFor(
        'sentence',
        { theme, ...(LEVELS.includes(level as Level) ? { level: level as Level } : {}) }
      );
    }
    const all = content.itemsFor('sentence');
    const lined = introEligible(all, useStore.getState().level);
    return lined.length ? lined : all;
  }, [theme, level]);
  const [deckIx, setDeckIx] = useState(() => (deck.length ? dayOfYear() % deck.length : 0));
  const item = deck.length ? deck[deckIx % deck.length] : undefined;
  const sbTarget = item?.fr ?? '';
  const sbWords = useMemo(() => (item ? tilesFor(item.fr, item.notes) : []), [item]);
  const sbShuffle = useMemo(() => {
    const idx = sbWords.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  }, [sbWords]);

  const [phase, setPhase] = useState<Phase>('learn');
  const [picked, setPicked] = useState<number[]>([]);
  const [typed, setTyped] = useState('');
  const [err, setErr] = useState(false);
  const [saying, setSaying] = useState(false);
  const [openWord, setOpenWord] = useState<number | null>(null);
  const [playW, setPlayW] = useState<number | null>(null);
  const [practiceW, setPracticeW] = useState<number | null>(null);
  const [saidPartial, setSaidPartial] = useState('');
  const [said, setSaid] = useState<SttResult | null>(null);

  // Timer / lifecycle bookkeeping so nothing fires after unmount.
  const mounted = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const later = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));
  useEffect(() => {
    return () => {
      mounted.current = false;
      timers.current.forEach(clearTimeout);
      tts.stop();
      stt.abort();
    };
  }, []);

  const shake = useRef(new Animated.Value(0)).current;
  const triggerShake = () => {
    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, { toValue: 1, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -1, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 1, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 0, duration: 60, useNativeDriver: true }),
    ]).start();
  };
  const shakeX = shake.interpolate({ inputRange: [-1, 1], outputRange: [-8, 8] });

  // ── LEARN ──
  const playWord = (i: number) => {
    sound.play('flip');
    setOpenWord(i);
    setPlayW(i);
    tts.speak(sbWords[i].w, { onDone: () => mounted.current && setPlayW((p) => (p === i ? null : p)) });
    later(() => mounted.current && setPlayW((p) => (p === i ? null : p)), 1600);
  };
  // Per-word drill: recorded and scored, but a miss is never punished here —
  // this is the "hear yourself say it" step, so the cue stays encouraging.
  const practiceWord = async (i: number) => {
    if (practiceW === i) {
      stt.stop();
      return;
    }
    sound.play('tap');
    setPracticeW(i);
    const res = await stt.listen(sbWords[i].w, { maxMs: 4000 });
    if (!mounted.current) return;
    sound.play(res.ok && res.verdict !== 'off' ? 'success' : 'flip');
    setPracticeW(null);
  };

  // ── ARRANGE ──
  const verify = () => {
    const order = picked.map((i) => sbWords[i].w).join(' ');
    if (order === sbTarget) {
      sound.play('success');
      setErr(false);
      setPhase('say');
    } else {
      sound.play('error');
      setErr(true);
      triggerShake();
      later(() => {
        if (!mounted.current) return;
        setErr(false);
        setPicked([]);
      }, 900);
    }
  };

  // ── SAY ──
  const mic = async () => {
    if (saying) {
      stt.stop();
      return;
    }
    sound.play('tap');
    setSaid(null);
    setSaying(true);
    setSaidPartial('');
    const res = await stt.listen(sbTarget, { maxMs: 6000, onPartial: setSaidPartial });
    if (!mounted.current) return;
    setSaidPartial('');
    // Show the result instead of discarding it: before this, `said` was captured
    // and never rendered, so a denied mic looked identical to a perfect utterance
    // (review §sentence). The step still gates nothing — the write step checks —
    // but the learner now sees what the recognizer actually heard.
    setSaid(res);
    sound.play(res.ok && res.verdict === 'good' ? 'success' : 'flip');
    setSaying(false);
  };

  // ── WRITE ──
  const checkWrite = () => {
    if (!item) return; // unreachable in the write phase, but narrows item for the log
    // Compare against the ITEM, order- and accent-insensitive but complete: the
    // old check hardcoded "je voudrais un cafe" and did not even require "s'il
    // vous plaît", so it silently diverged from the content (review §sentence).
    if (normalizeFr(typed) === normalizeFr(sbTarget)) {
      sound.play('ding');
      setPhase('passed');
      logSession('sentence');
      // One attempt per completion. The write step is what gates the pass, so it
      // is always correct here; but if the SAY step captured a real utterance,
      // carry ITS transcript/score as the signal — it is the graded response.
      // Otherwise the typed line is the evidence and the score is a clean 1.
      logAttempt({
        activity: 'sentence',
        itemId: item.id,
        expected: sbTarget,
        heard: said?.ok ? said.transcript : typed.trim(),
        score: said?.ok ? said.score : 1,
        verdict: said?.ok ? said.verdict : 'good',
        correct: true,
        // Building the sentence is production whether it was spoken or typed.
        modality: 'produce',
      });
    } else {
      sound.play('error');
      setErr(true);
      triggerShake();
      later(() => mounted.current && setErr(false), 900);
    }
  };

  // With more than one sentence in the deck, finishing rotates to the next one
  // (the rotating set CF-24 asks for); with one, it honestly replays.
  const restart = () => {
    sound.play('tap');
    if (deck.length > 1) setDeckIx((i) => (i + 1) % deck.length);
    setPicked([]);
    setTyped('');
    setErr(false);
    setOpenWord(null);
    setSaid(null);
    setSaidPartial('');
    setPhase('learn');
  };

  const primaryBtn = (label: string, onPress: () => void) => (
    <Press cue={null} onPress={onPress} style={{ minHeight: 54, paddingVertical: 6, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
      <TX font="semi" role="bodyLg" color={t.accInk}>
        {label}
      </TX>
    </Press>
  );

  if (!item) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <TX role="body" color={t.txMuted} center>{T.lessonSoon}</TX>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <LinearGradient colors={[t.accA(11), 'transparent']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.5 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260 }} />
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={`${T.builderTag} · ${STEP[phase]} / 4`} />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingTop: 12, paddingBottom: insets.bottom + 28 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {/* ── LEARN ── */}
        {phase === 'learn' ? (
          <View style={{ flex: 1 }}>
            <TX font="serif" size={30} role="display" style={{ marginBottom: 20 }}>
              {T.learnT}
            </TX>
            <View style={{ gap: 10, marginBottom: 24 }}>
              {sbWords.map((w, i) => {
                const active = playW === i || practiceW === i;
                return (
                  <Press
                    key={i}
                    cue={null}
                    onPress={() => {
                      sound.play('tap');
                      setOpenWord((o) => (o === i ? null : i));
                    }}
                    scale={1}
                    style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 12, paddingHorizontal: 16 }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 13 }}>
                      <Press cue={null} onPress={() => playWord(i)} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="play" size={12} color={t.acc} />
                      </Press>
                      <TX font="serifI" role="titleLg" size={20} style={{ flex: 1 }}>
                        {w.w}
                      </TX>
                      <TX role="label" color={t.txMuted}>
                        {w.t}
                      </TX>
                    </View>
                    {openWord === i ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginTop: 12, borderTopWidth: 1, borderTopColor: t.line(7), paddingTop: 12 }}>
                        <Waveform count={16} height={16} barWidth={2.5} gap={3} active={active} color={active ? t.acc : t.txNonText} />
                        <Press
                          cue={null}
                          onPress={() => practiceWord(i)}
                          style={{ flexDirection: 'row', alignItems: 'center', gap: 8, minHeight: 34, paddingVertical: 6, paddingHorizontal: 15, borderRadius: 17, borderWidth: 1, borderColor: t.accA(50), backgroundColor: practiceW === i ? t.acc : 'transparent' }}
                        >
                          <Icon name="mic" size={14} color={practiceW === i ? t.accInk : t.acc} />
                          <TX font="semi" role="label" color={practiceW === i ? t.accInk : t.accTx}>
                            {practiceW === i ? '…' : T.repeatWord}
                          </TX>
                        </Press>
                      </View>
                    ) : null}
                  </Press>
                );
              })}
            </View>
            <View style={{ marginTop: 'auto' }}>{primaryBtn(T.cont, () => { sound.play('tap'); setPicked([]); setPhase('arrange'); })}</View>
          </View>
        ) : null}

        {/* ── ARRANGE ── */}
        {phase === 'arrange' ? (
          <View style={{ flex: 1 }}>
            <TX font="serif" size={30} role="display" style={{ marginBottom: 20 }}>
              {T.arrangeT}
            </TX>
            <Animated.View
              style={{ transform: [{ translateX: shakeX }], minHeight: 104, borderRadius: 18, borderWidth: 1.5, borderStyle: 'dashed', borderColor: err ? t.danger : t.line(10), padding: 14, flexDirection: 'row', flexWrap: 'wrap', gap: 8, alignItems: 'flex-start', alignContent: 'flex-start', marginBottom: 20 }}
            >
              {picked.map((i, ix) => (
                <Press
                  key={`${i}-${ix}`}
                  cue={null}
                  onPress={() => {
                    sound.play('tap');
                    setPicked((p) => p.filter((_, xi) => xi !== ix));
                  }}
                  style={{ minHeight: 40, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20, backgroundColor: t.accA(15), borderWidth: 1, borderColor: t.accA(45), alignItems: 'center', justifyContent: 'center' }}
                >
                  <TX font="serifI" role="titleSm" color={t.accTx}>
                    {noWrap(sbWords[i].w)}
                  </TX>
                </Press>
              ))}
            </Animated.View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {sbShuffle
                .filter((i) => !picked.includes(i))
                .map((i) => (
                  <Press
                    key={i}
                    cue={null}
                    onPress={() => {
                      sound.play('tap');
                      setPicked((p) => [...p, i]);
                    }}
                    style={{ minHeight: 40, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20, backgroundColor: t.card2, borderWidth: 1, borderColor: t.line(12), alignItems: 'center', justifyContent: 'center' }}
                  >
                    <TX font="serifI" role="titleSm">
                      {noWrap(sbWords[i].w)}
                    </TX>
                  </Press>
                ))}
            </View>
            <View style={{ marginTop: 'auto' }}>{primaryBtn(T.checkT, verify)}</View>
          </View>
        ) : null}

        {/* ── SAY ── */}
        {phase === 'say' ? (
          <View style={{ flex: 1 }}>
            <TX font="serif" size={30} role="display" style={{ marginBottom: 20 }}>
              {T.sayItT}
            </TX>
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.input, padding: 26, paddingHorizontal: 22, marginBottom: 24 }}>
              <TX font="serifI" size={25} role="display" lhMult={1.36}>
                « {sbTarget} »
              </TX>
            </View>
            {/* What the recognizer heard — rendered so the say step means
                something. Empty until the mic returns. */}
            {saidPartial ? (
              <TX font="serifI" role="titleSm" color={t.txMuted} center style={{ marginBottom: 10 }}>
                « {saidPartial} »
              </TX>
            ) : null}
            {said ? (
              <View style={{ borderRadius: 16, borderWidth: 1, borderColor: said.ok ? t.accA(45) : t.line(12), backgroundColor: t.card, padding: 16, marginBottom: 8, alignItems: 'center' }}>
                {said.ok ? (
                  <>
                    <TX font="semi" role="meta" ls={1.8} color={said.verdict === 'good' ? t.accTx : t.txMuted} style={{ marginBottom: 6, textTransform: 'uppercase' }}>
                      {T.micHeard} · {Math.round(said.score * 100)}%
                    </TX>
                    <TX font="serifI" role="titleSm" center>« {said.transcript} »</TX>
                  </>
                ) : (
                  <TX role="label" center color={t.txSubtle}>
                    {said.error === 'not-allowed' ? T.micDenied : !said.available ? T.micUnavail : T.micNoSpeech}
                  </TX>
                )}
              </View>
            ) : null}
            <View style={{ marginTop: 'auto', alignItems: 'center' }}>
              <View style={{ marginBottom: 18 }}>
                <Waveform count={26} height={28} barWidth={3} gap={4} active={saying} color={t.acc} />
              </View>
              <Press cue={null} onPress={mic} scale={0.94} style={{ width: 76, height: 76, borderRadius: 38, alignItems: 'center', justifyContent: 'center', backgroundColor: saying ? t.acc : t.line(4), borderWidth: 1, borderColor: saying ? t.acc : t.line(20) }}>
                <Icon name="mic" size={27} color={saying ? t.accInk : t.txNonText} />
              </Press>
              {/* Advance is a separate, deliberate step now — not an automatic
                  side effect of the mic returning. */}
              <View style={{ alignSelf: 'stretch', marginTop: 22 }}>
                {primaryBtn(said ? T.cont : T.sbSkipSay, () => { sound.play('tap'); setPhase('write'); })}
              </View>
            </View>
          </View>
        ) : null}

        {/* ── WRITE ── */}
        {phase === 'write' ? (
          <View style={{ flex: 1 }}>
            <TX font="serif" size={30} role="display" style={{ marginBottom: 8 }}>
              {T.writeItT}
            </TX>
            <TX font="serifI" role="bodySm" color={t.txMuted} style={{ marginBottom: 24 }}>
              « {item?.en ?? ''} »
            </TX>
            <Animated.View style={{ transform: [{ translateX: shakeX }], marginBottom: 24 }}>
              <TextInput
                value={typed}
                onChangeText={setTyped}
                onSubmitEditing={checkWrite}
                placeholder="Écrivez la phrase…"
                placeholderTextColor={t.txSubtle}
                autoCapitalize="none"
                style={{ minHeight: 56, paddingVertical: 6, borderRadius: 18, borderWidth: 1.5, borderColor: err ? t.danger : t.line(10), backgroundColor: t.input, color: t.txPrimary, paddingHorizontal: 18, fontSize: 16, fontFamily: 'InstrumentSerif' }}
              />
            </Animated.View>
            <View style={{ marginTop: 'auto' }}>{primaryBtn(T.checkT, checkWrite)}</View>
          </View>
        ) : null}

        {/* ── PASSED ── */}
        {phase === 'passed' ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 88, height: 88, borderRadius: 44, backgroundColor: t.accA(15), borderWidth: 1, borderColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
              <Icon name="check" size={38} color={t.acc} strokeWidth={3} />
            </View>
            <TX font="serifI" size={27} role="display" center style={{ marginBottom: 8 }}>
              {T.wellDone}
            </TX>
            <TX font="serif" role="titleLg" size={19} color={t.accTx} center style={{ marginBottom: 34 }}>
              « {sbTarget} »
            </TX>
            <Press cue={null} onPress={restart} style={{ minHeight: 52, paddingVertical: 6, paddingHorizontal: 34, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>
                {deck.length > 1 ? T.sbNextSentence : T.redo}
              </TX>
            </Press>
            <Press cue={null} onPress={() => router.replace('/home')} style={{ marginTop: 16 }}>
              <TX role="bodySm" color={t.txMuted}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
