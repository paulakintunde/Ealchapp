import { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { sound, tts, stt, type SttResult } from '@/services';
import { content } from '@/services/content';
import type { Level } from '@/content/schema';

// A user turn carries what the recognizer actually heard and how it scored, so
// the bubble can show the real utterance and its verdict — never the scripted
// line dressed up as the user's speech.
type Msg = { who: 'ai' | 'me'; fr: string; en?: string; score?: number; verdict?: SttResult['verdict']; heardOk?: boolean; model?: string };
type RpLevel = 'A1' | 'A2' | 'B1' | 'B2';
const LEVELS: RpLevel[] = ['A1', 'A2', 'B1', 'B2'];

const LEVEL_DESC: Record<'fr' | 'en', Record<RpLevel, string>> = {
  en: {
    A1: 'Short, slow phrases. The vendor is patient.',
    A2: 'Prices, quantities, origins — real transactions.',
    B1: 'Advice, opinions, past mishaps.',
    B2: 'Banter, negotiation, and a vendor with opinions.',
  },
  fr: {
    A1: 'Des phrases courtes et lentes. Le marchand est patient.',
    A2: 'Prix, quantités, origines — de vraies transactions.',
    B1: 'Conseils, opinions, mésaventures passées.',
    B2: 'Répartie, négociation, et un marchand qui a du caractère.',
  },
};

export default function Roleplay() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);

  const logSession = useSessionLog();
  const logAttempt = useProgress((s) => s.logAttempt);

  // `?theme=&level=` opens the parcours scene for that theme/band directly;
  // without params this stays the standalone marché role play.
  const { theme: themeQ, level: levelQ } = useLocalSearchParams<{ theme?: string; level?: string }>();
  const rpTheme = themeQ || 'marche';
  const [level, setLevel] = useState<RpLevel>(() => {
    const up = (levelQ ?? '').toUpperCase() as RpLevel;
    return LEVELS.includes(up) ? up : 'A1';
  });
  const [live, setLive] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [ix, setIx] = useState(0);
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  // After an attempt: the model line is revealed and the conversation waits for
  // an explicit Continue, so the learner can compare before moving on.
  const [revealed, setRevealed] = useState(false);

  // Scenarios come from the corpus now (the "Au marché" role play, one per level).
  // B1/B2 ship over the air, so a seed-only install may not have them yet.
  const scenarios = useMemo(() => content.scenarios({ theme: rpTheme }), [rpTheme]);
  const scenario = useMemo(
    () => scenarios.find((s) => s.level === (level.toLowerCase() as Level)),
    [scenarios, level]
  );
  const turns = scenario?.turns ?? [];
  const nTurns = turns.length;

  const mounted = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    return () => {
      mounted.current = false;
      timers.current.forEach(clearTimeout);
      tts.stop();
      stt.abort();
    };
  }, []);

  const speak = (fr: string) => tts.speak(fr);

  const start = () => {
    if (!nTurns) return;
    sound.play('tap');
    const first = turns[0];
    setMsgs([{ who: 'ai', fr: first.ai, en: first.en }]);
    setIx(0);
    setBusy(false);
    setLive(true);
    speak(first.ai);
  };

  // Hide-then-reveal: the target line is NOT shown before you speak. You respond
  // in French from what you understood of Camille's line; the recognizer scores
  // your real utterance against the model line (turns[ix].user), which is then
  // revealed on your bubble so you can compare. A tap while listening stops
  // early; a mic that hears nothing still reveals the model, so nothing traps
  // the dialogue. Advancing waits for an explicit Continue.
  const mic = async () => {
    if (ix >= nTurns || revealed) return;
    if (listening) {
      stt.stop();
      return;
    }
    if (busy) return;
    const line = turns[ix];
    sound.play('tap');
    setBusy(true);
    setListening(true);
    setPartial('');

    const res = await stt.listen(line.user, { maxMs: 7000, onPartial: setPartial });
    if (!mounted.current) return;
    setListening(false);
    setPartial('');
    setBusy(false);

    const heardOk = res.ok && res.verdict !== 'none';
    sound.play(heardOk && res.verdict !== 'off' ? 'success' : 'flip');
    // Log a real recognized turn so the suggested response (the model line) can
    // surface in Le Rapport's review list. Keyed by scenario + turn, not a corpus
    // item id — so it feeds the report but not the SRS card deck (a dialogue line
    // has no recall-card form). A not-heard turn logs nothing: no signal.
    if (heardOk) {
      logAttempt({
        activity: 'roleplay',
        itemId: `${scenario?.id ?? 'rp'}.t${ix}`,
        expected: line.user,
        heard: res.transcript,
        score: res.score,
        verdict: res.verdict,
        correct: res.verdict === 'good',
        // Speaking a scripted line is production, and this is recorded honestly
        // as such — but note the itemId above is a synthetic turn id, not a
        // corpus item. The scheduler skips it for that reason, not because
        // roleplay is somehow not real practice. See the SCHEDULABLE predicate.
        modality: 'produce',
      });
    }
    setMsgs((m) => [
      ...m,
      heardOk
        ? { who: 'me', fr: res.transcript, score: res.score, verdict: res.verdict, heardOk: true, model: line.user }
        : { who: 'me', fr: '', heardOk: false, model: line.user },
    ]);
    setRevealed(true);
  };

  // Move to Camille's next line after the learner has seen the reveal.
  const continueTurn = () => {
    if (!revealed) return;
    sound.play('tap');
    setRevealed(false);
    const next = ix + 1;
    if (next < nTurns) {
      const nx = turns[next];
      setMsgs((m) => [...m, { who: 'ai', fr: nx.ai, en: nx.en }]);
      setIx(next);
      speak(nx.ai);
    } else {
      setIx(nTurns);
      sound.play('success');
      logSession('roleplay');
    }
  };

  const restart = () => {
    sound.play('tap');
    setMsgs([]);
    setIx(0);
    setBusy(false);
    setListening(false);
    setPartial('');
    setRevealed(false);
    setLive(false);
  };

  const finished = nTurns > 0 && ix >= nTurns && live && !busy;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <LinearGradient colors={[t.accA(11), 'transparent']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.5 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260 }} />
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={`${T.rpTag} · ${level}`} />
      </View>

      {/* ── SETUP ── */}
      {!live ? (
        <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 12, paddingBottom: insets.bottom + 28 }}>
          <TX font="serifI" size={40} role="display" style={{ marginBottom: 8 }}>
            {scenario?.title ?? 'Au marché'}
          </TX>
          <TX role="body" color={t.txMuted} style={{ marginBottom: 28 }}>
            {LEVEL_DESC[lang][level]}
          </TX>
          <TX font="semi" role="meta" ls={2.6} color={t.txSubtle} style={{ marginBottom: 12 }}>
            {T.chooseLevel}
          </TX>
          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
            {LEVELS.map((l) => {
              const on = level === l;
              return (
                <Press
                  key={l}
                  cue={null}
                  onPress={() => {
                    sound.play('tap');
                    setLevel(l);
                  }}
                  style={{ flex: 1, minHeight: 54, paddingVertical: 8, borderRadius: 16, borderWidth: 1, borderColor: on ? t.acc : t.line(12), backgroundColor: on ? t.accA(12) : 'transparent', alignItems: 'center', justifyContent: 'center' }}
                >
                  <TX font="serif" size={20} role="titleLg" color={on ? t.accTx : t.txSecondary}>
                    {l}
                  </TX>
                </Press>
              );
            })}
          </View>
          <TX role="meta" color={t.txSubtle}>
            {nTurns ? T.rpLevelNote : T.lessonSoon}
          </TX>
          <View style={{ marginTop: 'auto' }}>
            <Press
              cue={nTurns ? 'tap' : null}
              onPress={start}
              style={{ minHeight: 54, paddingVertical: 8, borderRadius: 27, backgroundColor: nTurns ? t.acc : t.line(10), alignItems: 'center', justifyContent: 'center' }}
            >
              <TX font="semi" role="bodyLg" color={nTurns ? t.accInk : t.txSubtle}>
                {T.startRp}
              </TX>
            </Press>
          </View>
        </View>
      ) : null}

      {/* ── LIVE ── */}
      {live ? (
        <View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: insets.bottom + 20, minHeight: 0 }}>
          <ScrollView
            ref={scrollRef}
            style={{ flex: 1 }}
            contentContainerStyle={{ gap: 10, paddingVertical: 12 }}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
          >
            {msgs.map((m, i) => {
              const me = m.who === 'me';
              return (
                <View key={i} style={{ alignItems: me ? 'flex-end' : 'flex-start' }}>
                  <View
                    style={{
                      maxWidth: '82%',
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomLeftRadius: me ? 16 : 5,
                      borderBottomRightRadius: me ? 5 : 16,
                      backgroundColor: me ? t.accCard(20) : t.card2,
                      borderWidth: 1,
                      borderColor: me ? t.accA(35) : t.line(7),
                    }}
                  >
                    {me && m.heardOk === false ? (
                      <TX font="serifI" role="titleSm" color={t.txMuted} style={{ fontStyle: 'italic' }}>
                        {T.rpNotHeard}
                      </TX>
                    ) : (
                      <TX font="serifI" role="titleSm">
                        {m.fr}
                      </TX>
                    )}
                    {m.en ? (
                      <TX role="meta" color={t.txSubtle} style={{ marginTop: 5 }}>
                        {m.en}
                      </TX>
                    ) : null}
                    {/* Real recognizer verdict on the user's own turn. */}
                    {me && m.heardOk && m.verdict ? (
                      <TX
                        font="semi"
                        role="meta"
                        style={{ marginTop: 6 }}
                        color={m.verdict === 'good' ? t.accTx : m.verdict === 'close' ? t.txSecondary : t.danger}
                      >
                        {m.verdict === 'good' ? T.micGood : m.verdict === 'close' ? T.micClose : T.micOff} · {Math.round((m.score ?? 0) * 100)}%
                      </TX>
                    ) : null}
                    {/* The model line, revealed only after the attempt so the
                        turn is produce-from-comprehension, then compare. */}
                    {me && m.model ? (
                      <View style={{ marginTop: 8, paddingTop: 8, borderTopWidth: 1, borderTopColor: t.line(12) }}>
                        <TX font="semi" role="eyebrow" ls={1.8} color={t.accTx} style={{ marginBottom: 3 }}>
                          {T.rpModel}
                        </TX>
                        <TX font="serifI" role="label" color={t.txSecondary}>
                          « {m.model} »
                        </TX>
                      </View>
                    ) : null}
                  </View>
                </View>
              );
            })}
          </ScrollView>

          {finished ? (
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.accA(40), backgroundColor: t.accA(7), padding: 20, alignItems: 'center' }}>
              <TX font="serifI" size={24} role="display" center style={{ marginBottom: 6 }}>
                {T.rpDoneT}
              </TX>
              <TX role="label" color={t.txSecondary} center style={{ marginBottom: 16 }}>
                {T.rpDoneS}
              </TX>
              <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'stretch' }}>
                <Press cue={null} onPress={restart} style={{ flex: 1, minHeight: 46, paddingVertical: 6, borderRadius: 23, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="semi" role="bodySm">
                    {T.redo}
                  </TX>
                </Press>
                <Press cue={null} onPress={() => router.push('/feedback')} style={{ flex: 1, minHeight: 46, paddingVertical: 6, borderRadius: 23, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="semi" role="bodySm" color={t.accInk}>
                    {T.rpReport}
                  </TX>
                </Press>
              </View>
              <Press cue={null} onPress={() => router.replace('/home')} style={{ marginTop: 14 }}>
                <TX role="bodySm" color={t.txMuted}>
                  {T.backFeed}
                </TX>
              </Press>
            </View>
          ) : revealed ? (
            // Attempt made and the model line revealed on the bubble above.
            // Advance only on an explicit tap, so the learner can compare first.
            <View style={{ paddingTop: 10 }}>
              <Press cue="tap" onPress={continueTurn} style={{ minHeight: 54, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <TX font="semi" role="bodyLg" color={t.accInk}>
                  {T.cont}
                </TX>
              </Press>
            </View>
          ) : (
            <View style={{ paddingTop: 10, gap: 14 }}>
              {/* No line is shown: respond in French from what Camille said. The
                  model is revealed only after you speak (produce, then check). */}
              <View style={{ alignItems: 'center' }}>
                <TX font="semi" role="eyebrow" ls={2.4} color={t.accTx}>
                  {T.rpYourTurn}
                </TX>
                <TX role="meta" color={t.txSubtle} style={{ marginTop: 5 }}>
                  {T.rpRespond}
                </TX>
              </View>
              {/* What the recognizer is hearing, live. */}
              {partial ? (
                <TX font="serifI" role="titleSm" color={t.txMuted} center>
                  « {partial} »
                </TX>
              ) : null}
              <View style={{ alignItems: 'center', gap: 12 }}>
                {listening ? <Waveform count={22} height={22} color={t.acc} active barWidth={3} gap={3.5} /> : null}
                <Press cue={null} onPress={mic} scale={0.94} style={{ width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: listening ? t.acc : t.line(4), borderWidth: 1, borderColor: listening ? t.acc : t.line(20) }}>
                  <Icon name="mic" size={26} color={listening ? t.accInk : t.tx} />
                </Press>
              </View>
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
}
