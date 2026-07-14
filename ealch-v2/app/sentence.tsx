import { useEffect, useRef, useState } from 'react';
import { Animated, ScrollView, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { sound, tts, stt } from '@/services';
import { sbWords, sbShuffle, sbTarget } from '@/content';

type Phase = 'learn' | 'arrange' | 'say' | 'write' | 'passed';

const STEP: Record<Phase, string> = { learn: '1', arrange: '2', say: '3', write: '4', passed: '✓' };

const normWrite = (s: string) => s.toLowerCase().replace(/[.,!’']/g, ' ').replace(/\s+/g, ' ').trim();

export default function Sentence() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [phase, setPhase] = useState<Phase>('learn');
  const [picked, setPicked] = useState<number[]>([]);
  const [typed, setTyped] = useState('');
  const [err, setErr] = useState(false);
  const [saying, setSaying] = useState(false);
  const [openWord, setOpenWord] = useState<number | null>(null);
  const [playW, setPlayW] = useState<number | null>(null);
  const [practiceW, setPracticeW] = useState<number | null>(null);

  // Timer / lifecycle bookkeeping so nothing fires after unmount.
  const mounted = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const later = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));
  useEffect(() => {
    return () => {
      mounted.current = false;
      timers.current.forEach(clearTimeout);
      tts.stop();
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
  const practiceWord = async (i: number) => {
    sound.play('tap');
    setPracticeW(i);
    await stt.listen(sbWords[i].w, { durationMs: 1900 });
    if (!mounted.current) return;
    // Neutral cue — the pause is a speaking-aloud pacing aid, nothing is scored.
    sound.play('flip');
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
    if (saying) return;
    sound.play('tap');
    setSaying(true);
    await stt.listen(sbTarget, { durationMs: 2000 });
    if (!mounted.current) return;
    // Neutral cue — saying it aloud is unscored; the write step does the checking.
    sound.play('flip');
    setSaying(false);
    setPhase('write');
  };

  // ── WRITE ──
  const checkWrite = () => {
    const n = normWrite(typed);
    if (n.includes('je voudrais un cafe') || n.includes('je voudrais un café')) {
      sound.play('ding');
      setPhase('passed');
    } else {
      sound.play('error');
      setErr(true);
      triggerShake();
      later(() => mounted.current && setErr(false), 900);
    }
  };

  const restart = () => {
    sound.play('tap');
    setPicked([]);
    setTyped('');
    setErr(false);
    setOpenWord(null);
    setPhase('learn');
  };

  const primaryBtn = (label: string, onPress: () => void) => (
    <Press cue={null} onPress={onPress} style={{ height: 54, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
      <TX font="semi" size={15} color={t.accInk}>
        {label}
      </TX>
    </Press>
  );

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <LinearGradient colors={[t.accA(11), 'transparent']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.5 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260 }} />
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={`CONSTRUCTEUR · ${STEP[phase]} / 4`} />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingTop: 12, paddingBottom: insets.bottom + 28 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {/* ── LEARN ── */}
        {phase === 'learn' ? (
          <View style={{ flex: 1 }}>
            <TX font="serif" size={30} style={{ marginBottom: 20 }}>
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
                      <TX font="serifI" size={19} style={{ flex: 1 }}>
                        {w.w}
                      </TX>
                      <TX size={12.5} color={t.txA(50)}>
                        {w.t}
                      </TX>
                    </View>
                    {openWord === i ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginTop: 12, borderTopWidth: 1, borderTopColor: t.line(7), paddingTop: 12 }}>
                        <Waveform count={16} height={16} barWidth={2.5} gap={3} active={active} color={active ? t.acc : t.txA(30)} />
                        <Press
                          cue={null}
                          onPress={() => practiceWord(i)}
                          style={{ flexDirection: 'row', alignItems: 'center', gap: 8, height: 34, paddingHorizontal: 15, borderRadius: 17, borderWidth: 1, borderColor: t.accA(50), backgroundColor: practiceW === i ? t.acc : 'transparent' }}
                        >
                          <Icon name="mic" size={14} color={practiceW === i ? t.accInk : t.acc} />
                          <TX font="semi" size={12} color={practiceW === i ? t.accInk : t.acc}>
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
            <TX font="serif" size={30} style={{ marginBottom: 20 }}>
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
                  style={{ height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: t.accA(15), borderWidth: 1, borderColor: t.accA(45), alignItems: 'center', justifyContent: 'center' }}
                >
                  <TX font="serifI" size={16} color={t.acc}>
                    {sbWords[i].w}
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
                    style={{ height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: t.card2, borderWidth: 1, borderColor: t.line(12), alignItems: 'center', justifyContent: 'center' }}
                  >
                    <TX font="serifI" size={16}>
                      {sbWords[i].w}
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
            <TX font="serif" size={30} style={{ marginBottom: 20 }}>
              {T.sayItT}
            </TX>
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.input, padding: 26, paddingHorizontal: 22, marginBottom: 24 }}>
              <TX font="serifI" size={25} lh={34}>
                « {sbTarget} »
              </TX>
            </View>
            <View style={{ marginTop: 'auto', alignItems: 'center' }}>
              <View style={{ marginBottom: 18 }}>
                <Waveform count={26} height={28} barWidth={3} gap={4} active={saying} color={t.acc} />
              </View>
              <Press cue={null} onPress={mic} scale={0.94} style={{ width: 76, height: 76, borderRadius: 38, alignItems: 'center', justifyContent: 'center', backgroundColor: saying ? t.acc : t.line(4), borderWidth: 1, borderColor: saying ? t.acc : t.line(20) }}>
                <Icon name="mic" size={27} color={saying ? t.accInk : t.tx} />
              </Press>
            </View>
          </View>
        ) : null}

        {/* ── WRITE ── */}
        {phase === 'write' ? (
          <View style={{ flex: 1 }}>
            <TX font="serif" size={30} style={{ marginBottom: 8 }}>
              {T.writeItT}
            </TX>
            <TX font="serifI" size={13} color={t.txA(50)} style={{ marginBottom: 24 }}>
              « I would like a coffee, please. »
            </TX>
            <Animated.View style={{ transform: [{ translateX: shakeX }], marginBottom: 24 }}>
              <TextInput
                value={typed}
                onChangeText={setTyped}
                onSubmitEditing={checkWrite}
                placeholder="Écrivez la phrase…"
                placeholderTextColor={t.txA(30)}
                autoCapitalize="none"
                style={{ height: 56, borderRadius: 18, borderWidth: 1.5, borderColor: err ? t.danger : t.line(10), backgroundColor: t.input, color: t.tx, paddingHorizontal: 18, fontSize: 16, fontFamily: 'InstrumentSerif' }}
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
            <TX font="serifI" size={27} center style={{ marginBottom: 8 }}>
              {T.wellDone}
            </TX>
            <TX font="serif" size={18} color={t.acc} center style={{ marginBottom: 34 }}>
              « {sbTarget} »
            </TX>
            <Press cue={null} onPress={restart} style={{ height: 52, paddingHorizontal: 34, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" size={14} color={t.accInk}>
                {T.redo}
              </TX>
            </Press>
            <Press cue={null} onPress={() => router.replace('/home')} style={{ marginTop: 16 }}>
              <TX size={13} color={t.txA(50)}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
