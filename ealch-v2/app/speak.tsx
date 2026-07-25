import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, Rect } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Icon } from '@/components/Icon';
import { Press } from '@/components/ui';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useSessionLog } from '@/store/useProgress';
import { sound, tts, stt, type SttResult } from '@/services';
import { coachLines } from '@/content';

type Phase = 'idle' | 'listening' | 'analysed';

// Blinking status dot (prototype blinkDot)
function BlinkDot({ color }: { color: string }) {
  const op = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(op, { toValue: 0.2, duration: 800, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(op, { toValue: 1, duration: 800, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [op]);
  return <Animated.View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: color, opacity: op }} />;
}

// Expanding pulse ring behind the mic while listening (prototype pulseRing)
function PulseRing({ color, active }: { color: string; active: boolean }) {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!active) {
      v.setValue(0);
      return;
    }
    const loop = Animated.loop(
      Animated.timing(v, { toValue: 1, duration: 1400, easing: Easing.out(Easing.ease), useNativeDriver: true })
    );
    loop.start();
    return () => loop.stop();
  }, [active, v]);
  if (!active) return null;
  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1.5,
        borderColor: color,
        opacity: v.interpolate({ inputRange: [0, 1], outputRange: [0.5, 0] }),
        transform: [{ scale: v.interpolate({ inputRange: [0, 1], outputRange: [1, 1.7] }) }],
      }}
    />
  );
}

export default function Speak() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const logSession = useSessionLog();

  const [coachIx, setCoachIx] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [speaking, setSpeaking] = useState(false);
  const [partial, setPartial] = useState('');
  const [heard, setHeard] = useState<SttResult | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const speakLabel = T.speakScene;
  const coach = coachLines[Math.min(coachIx, coachLines.length - 1)];
  const listening = phase === 'listening';
  const analysed = phase === 'analysed';
  const waveActive = listening || speaking;

  // Coach "speaks" a line: real French TTS + a ~2.6s speaking state for the wave.
  const speakLine = useCallback((ix: number) => {
    const line = coachLines[Math.min(ix, coachLines.length - 1)];
    setSpeaking(true);
    tts.speak(line.fr);
    const id = setTimeout(() => setSpeaking(false), 2600);
    timers.current.push(id);
  }, []);

  // On entry: Camille speaks the first line.
  useEffect(() => {
    speakLine(0);
    return () => {
      tts.stop();
      stt.abort();
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [speakLine]);

  // Tap once to record; the recognizer finalises on end-of-speech (or at 7s).
  // Tap again while listening to finish early.
  const micTap = async () => {
    if (listening) {
      stt.stop();
      return;
    }
    sound.play('tap');
    setPartial('');
    setHeard(null);
    setPhase('listening');

    const res = await stt.listen(coach.fr, {
      maxMs: 7000,
      onPartial: setPartial,
    });

    setPartial('');
    setHeard(res);
    // Only claim success when the recognizer actually agreed with the target.
    sound.play(res.ok && res.verdict === 'good' ? 'success' : 'flip');
    setPhase('analysed');
  };

  const coachNext = () => {
    sound.play('tap');
    const next = Math.min(coachIx + 1, coachLines.length - 1);
    setCoachIx(next);
    setPhase('idle');
    setPartial('');
    setHeard(null);
    speakLine(next);
  };

  const replayCoach = () => {
    sound.play('tap');
    speakLine(coachIx);
  };

  const endSession = () => {
    sound.play('tap');
    logSession('speak');
    router.push('/feedback');
  };

  const micIcon = listening ? t.accInk : t.txNonText;

  // The caption tells the truth about what the recognizer did — it never
  // implies a success the mic did not actually hear.
  const micCaption = (() => {
    if (listening) return partial || T.micRec;
    if (!analysed || !heard) return T.micIdle;
    if (heard.ok) return T.micDone;
    if (heard.error === 'not-allowed') return T.micDenied;
    if (!heard.available) return T.micUnavail;
    return T.micNoSpeech;
  })();

  const verdictColor =
    heard?.verdict === 'good' ? t.accTx : heard?.verdict === 'close' ? t.txPrimary : t.danger;
  const verdictLabel =
    heard?.verdict === 'good' ? T.micGood : heard?.verdict === 'close' ? T.micClose : T.micOff;

  return (
    <View style={{ flex: 1, backgroundColor: t.bgDeep }}>
      {/* Aura glow */}
      <View pointerEvents="none" style={{ position: 'absolute', top: -60, left: 0, right: 0, height: 420, alignItems: 'center' }}>
        <LinearGradient
          colors={[t.accA(17), 'transparent']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{ width: 420, height: 420, borderRadius: 210 }}
        />
      </View>

      {/* Header: X → home, status label, gear → settings */}
      <View style={{ paddingTop: insets.top }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 12 }}>
          <Press onPress={() => router.replace('/home')} style={{ width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', backgroundColor: t.line(6) }}>
            <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
              <Path d="M2 2l11 11M13 2L2 13" stroke={t.txNonText} strokeWidth={1.7} strokeLinecap="round" />
            </Svg>
          </Press>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginHorizontal: 8 }}>
            <BlinkDot color={t.acc} />
            <TX font="semi" role="meta" ls={2.6} color={t.txSecondary} numberOfLines={1} style={{ flexShrink: 1 }}>
              {speakLabel}
            </TX>
          </View>
          <Press onPress={() => router.push('/settings')} style={{ width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', backgroundColor: t.line(6) }}>
            <Icon name="gear" size={18} color={t.txNonText} strokeWidth={1.7} />
          </Press>
        </View>
      </View>

      {/* AI tutor silhouette + live waveform */}
      <View style={{ alignItems: 'center', marginTop: 26 }}>
        <View style={{ width: 210, height: 190 }}>
          {/* head */}
          <LinearGradient
            colors={[t.blend(t.isDark ? '#20242B' : '#AEB7C2', t.card, 70), t.card]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ position: 'absolute', left: 57, top: 0, width: 96, height: 110, borderRadius: 48, borderTopWidth: 1, borderColor: t.accA(40) }}
          />
          {/* body */}
          <LinearGradient
            colors={[t.blend(t.isDark ? '#1B1F25' : '#B8C0CA', t.bg, 70), t.bg]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ position: 'absolute', left: 7, bottom: 0, width: 196, height: 84, borderTopLeftRadius: 98, borderTopRightRadius: 98, borderBottomLeftRadius: 22, borderBottomRightRadius: 22, borderTopWidth: 1, borderColor: t.accA(26) }}
          />
        </View>
        <View style={{ marginTop: 26, height: 56, alignItems: 'center', justifyContent: 'center' }}>
          <Waveform count={40} height={54} barWidth={3} gap={4} active={waveActive} color={listening ? t.acc : t.blend(t.acc, t.tx, 70)} />
        </View>
      </View>

      {/* Coach line */}
      <View style={{ paddingHorizontal: 30, paddingTop: 26, alignItems: 'center' }}>
        <TX font="semi" role="meta" ls={3} color={t.accTx} style={{ marginBottom: 12 }}>
          CAMILLE
        </TX>
        <TX font="serifI" size={25} role="display" lhMult={1.32} center style={{ minHeight: 66 }}>
          « {coach.fr} »
        </TX>
        <TX role="label" color={t.txSubtle} center style={{ marginTop: 10 }}>
          {coach.en}
        </TX>
        {/* Hear the line on demand — the same replay as the transport bar, but
            right under the words so it is actually found. */}
        <Press
          onPress={replayCoach}
          cue={null}
          style={{ marginTop: 16, width: 64, height: 64, borderRadius: 32, borderWidth: 1, borderColor: speaking ? t.acc : t.accA(50), backgroundColor: speaking ? t.accA(12) : 'transparent', alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name="speaker" size={26} color={t.acc} />
        </Press>
        {/* Say what the drill actually does: the mic scores your utterance
            against Camille's line, so this is shadowing, not a free reply. */}
        <TX font="semi" role="meta" ls={1.6} color={t.accTx} center style={{ marginTop: 14, textTransform: 'uppercase' }}>
          {T.speakRepeat}
        </TX>
      </View>

      {/* Model reply for self-comparison + end */}
      <View style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 26, paddingBottom: 18 }}>
        {analysed ? (
          <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.blend(t.card2, t.bgDeep, 85), padding: 18 }}>
            {heard?.ok ? (
              // What the learner ACTUALLY said, scored against Camille's line.
              // No model reply is invented: the target is Camille's line above,
              // shown again here for a direct compare. The old block hardcoded
              // « Je voudrais un café allongé… » regardless of the line or what
              // was heard — a fabrication (review §speak).
              <>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                  <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle}>
                    {T.speakYouSaid}
                  </TX>
                  <TX font="semi" role="meta" color={verdictColor}>
                    · {verdictLabel} · {Math.round(heard.score * 100)}%
                  </TX>
                </View>
                <TX font="serifI" role="title" color={t.txPrimary}>
                  « {heard.transcript} »
                </TX>
                <TX role="meta" color={t.txSubtle} style={{ marginTop: 10 }}>
                  {T.speakModelWas} : « {coach.fr} »
                </TX>
              </>
            ) : (
              // Nothing usable was heard — say why, honestly, instead of showing
              // a score for a recording that did not happen.
              <TX role="label" color={t.txSecondary} lhMult={1.5}>
                {heard?.error === 'not-allowed'
                  ? T.micDenied
                  : heard && !heard.available
                    ? T.micUnavail
                    : T.micNoSpeech}
              </TX>
            )}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
              <Press onPress={coachNext} cue="tap" style={{ marginLeft: 'auto', paddingVertical: 4 }}>
                <TX font="semi" role="label" color={t.accTx}>
                  {T.cont}
                </TX>
              </Press>
            </View>
          </View>
        ) : null}
        <Press onPress={endSession} style={{ alignSelf: 'center', marginTop: 14, minHeight: 34, paddingVertical: 6, paddingHorizontal: 18, borderRadius: 17, borderWidth: 1, borderColor: t.line(16), flexDirection: 'row', alignItems: 'center' }}>
          <TX font="semi" role="meta" color={t.txSecondary}>
            {T.end} · Le Rapport →
          </TX>
        </Press>
      </View>

      {/* Transport: replay · mic · next */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 38, paddingBottom: 20 }}>
        <Press onPress={replayCoach} style={{ width: 46, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center' }}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <Path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6" stroke={t.txNonText} strokeWidth={1.7} strokeLinecap="round" />
          </Svg>
        </Press>
        <View style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center' }}>
          <PulseRing color={t.acc} active={listening} />
          <Press
            onPress={micTap}
            cue={null}
            scale={0.94}
            style={{ width: 80, height: 80, borderRadius: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: listening ? t.acc : t.line(4), borderWidth: 1, borderColor: listening ? t.acc : t.line(20) }}
          >
            <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
              <Rect x={9} y={3} width={6} height={11} rx={3} stroke={micIcon} strokeWidth={1.8} />
              <Path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke={micIcon} strokeWidth={1.8} strokeLinecap="round" />
            </Svg>
          </Press>
        </View>
        <Press onPress={coachNext} style={{ width: 46, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center' }}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <Path d="M12 5V2l5 4-5 4V7a6 6 0 1 0 6 6" stroke={t.txNonText} strokeWidth={1.7} strokeLinecap="round" />
          </Svg>
        </Press>
      </View>

      {/* Mic caption */}
      <View style={{ paddingBottom: insets.bottom + 20, alignItems: 'center' }}>
        <TX font="semi" role="meta" ls={1.6} color={t.txSubtle} style={{ textTransform: 'uppercase' }}>
          {micCaption}
        </TX>
      </View>
    </View>
  );
}
