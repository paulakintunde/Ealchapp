import { useEffect, useMemo, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar } from '@/components/ui';
import { Icon, type IconName } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { sound, tts, stt, type SttResult } from '@/services';
import { content } from '@/services/content';
import { answerMatches } from '@/utils/score';

// The corpus carries no per-item icon (it is app chrome, not content), so derive
// one from the French word, with a neutral fallback for future vocab.
function iconFor(fr: string): IconName {
  const n = fr.toLowerCase();
  if (n.includes('café')) return 'cup';
  if (n.includes('maison')) return 'house';
  if (n.includes('livre')) return 'vfBook';
  if (n.includes('soleil')) return 'vfSun';
  if (n.includes('voiture')) return 'car';
  return 'vfBook';
}

type Phase = 'ask' | 'listening' | 'result';

export default function VoiceFlash() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const logSession = useSessionLog();
  const logAttempt = useProgress((s) => s.logAttempt);

  const [vfIx, setVfIx] = useState(0);
  const [vfPhase, setVfPhase] = useState<Phase>('ask');
  const [vfTyped, setVfTyped] = useState('');
  const [vfCorrect, setVfCorrect] = useState<boolean | null>(null);
  const [vfScore, setVfScore] = useState(0);
  const [vfPartial, setVfPartial] = useState('');
  const [vfHeard, setVfHeard] = useState<SttResult | null>(null);
  const [promptOn, setPromptOn] = useState(false);
  const promptTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Items now come from the corpus, snapshotted at mount.
  const items = useMemo(() => content.itemsFor('voiceflash'), []);

  // Leaving mid-drill must not leave the recognizer listening, TTS speaking, or
  // the prompt timer firing setState after unmount.
  useEffect(() => {
    return () => {
      if (promptTimer.current) clearTimeout(promptTimer.current);
      stt.abort();
      tts.stop();
    };
  }, []);

  const total = items.length;
  const finished = vfIx >= total;
  const item = items[Math.min(vfIx, total - 1)];
  const vfIsFr = vfIx % 2 === 0;

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
    const res = await stt.listen(target, {
      maxMs: 6000,
      lang: vfIsFr ? 'fr-FR' : 'en-US',
      onPartial: setVfPartial,
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
    });
    vfNext();
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
    if (lastItem) logSession('voiceflash', total);
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
        onClose={() => router.replace('/home')}
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

        {finished ? (
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
                paddingVertical: 26,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}
            >
              {vfIsFr ? (
                <View
                  style={{
                    width: 112,
                    height: 112,
                    borderRadius: 56,
                    backgroundColor: t.accA(10),
                    borderWidth: 1,
                    borderColor: t.accA(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Icon name={iconFor(item.fr)} size={72} color={t.acc} />
                </View>
              ) : null}
              <TX font="serifI" size={30} role="display" center style={{ marginBottom: 12 }}>
                {vfIsFr ? item.en : item.fr}
              </TX>
              {/* Audio chip — plays the French word */}
              <Press
                onPress={playPrompt}
                cue={null}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  height: 36,
                  paddingHorizontal: 15,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: t.accA(40),
                  marginBottom: 14,
                }}
              >
                <Icon name="play" size={12} color={t.acc} />
                <Waveform count={14} height={14} color={promptOn ? t.acc : t.txNonText} active={promptOn} barWidth={2.5} gap={3} />
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
