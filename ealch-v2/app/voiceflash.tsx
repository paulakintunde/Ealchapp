import { useRef, useState } from 'react';
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
import { useStore } from '@/store/useStore';
import { sound, tts, stt } from '@/services';
import { vfItems, type VfIcon } from '@/content';

const ICON_MAP: Record<VfIcon, IconName> = {
  cup: 'cup',
  house: 'house',
  book: 'vfBook',
  sun: 'vfSun',
  car: 'car',
};



type Phase = 'ask' | 'listening' | 'result';

export default function VoiceFlash() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [vfIx, setVfIx] = useState(0);
  const [vfPhase, setVfPhase] = useState<Phase>('ask');
  const [vfTyped, setVfTyped] = useState('');
  const [vfCorrect, setVfCorrect] = useState<boolean | null>(null);
  const [vfScore, setVfScore] = useState(0);
  const [promptOn, setPromptOn] = useState(false);
  const promptTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = vfItems.length;
  const finished = vfIx >= total;
  const item = vfItems[Math.min(vfIx, total - 1)];
  const vfIsFr = vfIx % 2 === 0;

  const playPrompt = () => {
    sound.play('flip');
    tts.speak(item.fr);
    setPromptOn(true);
    if (promptTimer.current) clearTimeout(promptTimer.current);
    promptTimer.current = setTimeout(() => setPromptOn(false), 1400);
  };

  // Spoken path: nothing is recorded or scored — the pause is a pacing aid.
  // The answer is then revealed and the user self-assesses (vfCorrect stays
  // null until they do), so the session score is honest.
  const vfMic = async () => {
    if (vfPhase !== 'ask') return;
    sound.play('tap');
    setVfPhase('listening');
    await stt.listen(vfIsFr ? item.fr : item.en, { durationMs: 1800 });
    sound.play('flip');
    setVfCorrect(null);
    setVfPhase('result');
  };

  const vfSelf = (got: boolean) => {
    sound.play(got ? 'success' : 'tap');
    if (got) setVfScore((v) => v + 1);
    vfNext();
  };

  const vfCheck = () => {
    if (!vfTyped.trim()) return;
    const key = (vfIsFr ? item.key : item.keyEn).toLowerCase();
    const ok = vfTyped.toLowerCase().includes(key);
    sound.play(ok ? 'success' : 'error');
    setVfCorrect(ok);
    if (ok) setVfScore((v) => v + 1);
    setVfPhase('result');
  };

  const vfNext = () => {
    sound.play('tap');
    setVfIx((i) => i + 1);
    setVfPhase('ask');
    setVfTyped('');
    setVfCorrect(null);
  };

  const restart = () => {
    sound.play('tap');
    setVfIx(0);
    setVfPhase('ask');
    setVfTyped('');
    setVfCorrect(null);
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
          <TX size={12} color={t.txA(50)}>
            {Math.min(vfIx + 1, total)} / {total}
          </TX>
        </View>

        {finished ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="serif" size={64} lh={64} color={t.acc}>
              {vfScore} / {total}
            </TX>
            <TX font="serifI" size={26} center style={{ marginTop: 10, marginBottom: 32 }}>
              {T.vfDoneT}
            </TX>
            <Press
              onPress={restart}
              cue={null}
              style={{ height: 52, paddingHorizontal: 34, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
            >
              <TX font="semi" size={14} color={t.accInk}>
                {T.redo}
              </TX>
            </Press>
            <Press onPress={() => router.replace('/home')} style={{ marginTop: 16 }}>
              <TX size={13} color={t.txA(50)}>
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
                  <Icon name={ICON_MAP[item.icon]} size={72} color={t.acc} />
                </View>
              ) : null}
              <TX font="serifI" size={30} center style={{ marginBottom: 12 }}>
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
                <Waveform count={14} height={14} color={promptOn ? t.acc : t.txA(30)} active={promptOn} barWidth={2.5} gap={3} />
              </Press>
              <TX font="semi" size={10} ls={2.6} color={t.acc}>
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
                  size={11}
                  ls={1.8}
                  color={vfCorrect === null || vfCorrect ? t.acc : t.danger}
                  style={{ marginBottom: 8, textTransform: 'uppercase' }}
                >
                  {vfCorrect === null ? T.vfSelfT : vfCorrect ? T.correctT : T.incorrectT}
                </TX>
                <TX font="serifI" size={24} center>
                  « {vfIsFr ? item.fr : item.en} »
                </TX>
                {vfCorrect === null ? (
                  <View style={{ flexDirection: 'row', gap: 10, marginTop: 16, alignSelf: 'stretch' }}>
                    <Press
                      onPress={() => vfSelf(false)}
                      cue={null}
                      style={{
                        flex: 1,
                        height: 46,
                        borderRadius: 23,
                        borderWidth: 1,
                        borderColor: t.line(16),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TX font="semi" size={14}>
                        {T.vfMissed}
                      </TX>
                    </Press>
                    <Press
                      onPress={() => vfSelf(true)}
                      cue={null}
                      style={{
                        flex: 1,
                        height: 46,
                        borderRadius: 23,
                        backgroundColor: t.acc,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TX font="semi" size={14} color={t.accInk}>
                        {T.vfGot}
                      </TX>
                    </Press>
                  </View>
                ) : (
                  <Press
                    onPress={vfNext}
                    cue={null}
                    style={{
                      height: 46,
                      borderRadius: 23,
                      backgroundColor: t.acc,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 16,
                      alignSelf: 'stretch',
                    }}
                  >
                    <TX font="semi" size={14} color={t.accInk}>
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
                    <TX font="semi" size={10.5} ls={1.6} center color={t.txA(40)} style={{ textTransform: 'uppercase' }}>
                      {T.orTypeT}
                    </TX>
                    <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'stretch' }}>
                      <TextInput
                        value={vfTyped}
                        onChangeText={setVfTyped}
                        onSubmitEditing={vfCheck}
                        placeholder="…"
                        placeholderTextColor={t.txA(35)}
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
                          color: t.tx,
                          paddingHorizontal: 18,
                          fontSize: 14,
                        }}
                      />
                      <Press
                        onPress={vfCheck}
                        cue={null}
                        style={{
                          height: 48,
                          paddingHorizontal: 20,
                          borderRadius: 24,
                          borderWidth: 1,
                          borderColor: t.accA(60),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <TX font="semi" size={13} color={t.acc}>
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
