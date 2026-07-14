import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, ProgressBar, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useSessionLog } from '@/store/useProgress';
import { sound, tts } from '@/services';
import { speeds } from '@/content';

const PHRASE = 'Un bon vin blanc';

export default function Player() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const logSession = useSessionLog();

  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speedIx, setSpeedIx] = useState(0);
  const [queued, setQueued] = useState(false);

  const trackPlaylist = T.playerPlaylist;

  // Advance the scrubber while playing (prototype tick loop).
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + speeds[speedIx].v * 0.55;
        if (next >= 100) {
          setPlaying(false);
          return 100;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [playing, speedIx]);

  useEffect(() => () => tts.stop(), []);

  // Track finish. The tick loop above is a state updater, so the log lives here
  // rather than inside it; the ref makes a finished track log exactly once no
  // matter how many renders observe progress at 100.
  const trackLogged = useRef(false);
  useEffect(() => {
    if (progress >= 100 && !trackLogged.current) {
      trackLogged.current = true;
      logSession('player', 1);
    }
  }, [progress, logSession]);

  const mm = Math.floor((progress / 100) * 124);
  const curTime = `${Math.floor(mm / 60)}:${String(mm % 60).padStart(2, '0')}`;

  const togglePlay = () => {
    sound.play('tap');
    const nowPlaying = !playing;
    if (nowPlaying) {
      setProgress((cur) => (cur >= 100 ? 0 : cur));
      tts.speak(PHRASE);
    } else {
      tts.stop();
    }
    setPlaying(nowPlaying);
  };

  const skipBack = () => {
    sound.play('tap');
    setProgress((p) => Math.max(0, p - 12));
  };
  const skipForward = () => {
    sound.play('tap');
    setProgress((p) => Math.min(100, p + 12));
  };
  const cycleSpeed = () => {
    sound.play('tap');
    setSpeedIx((i) => (i + 1) % speeds.length);
  };
  const toggleQueue = () => {
    sound.play(queued ? 'tap' : 'success');
    setQueued((q) => !q);
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      {/* top glow */}
      <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 240, alignItems: 'center' }}>
        <LinearGradient colors={[t.accA(12), 'transparent']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={{ width: '160%', height: 240 }} />
      </View>

      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={trackPlaylist} />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 26, paddingBottom: insets.bottom + 20 }}>
        {/* Hero art */}
        <View style={{ aspectRatio: 1, borderRadius: 22, borderWidth: 1, borderColor: t.line(8), overflow: 'hidden', marginBottom: 24, backgroundColor: t.isDark ? '#12100E' : t.card2, ...t.cardShadow }}>
          <LinearGradient colors={[t.accA(34), 'transparent']} start={{ x: 0.85, y: 0 }} end={{ x: 0.25, y: 0.62 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <LinearGradient colors={['transparent', t.blend(t.isDark ? '#16211E' : '#DCE7E2', t.bg, 60)]} start={{ x: 0.2, y: 0.4 }} end={{ x: 0.2, y: 1 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <TX font="semi" role="eyebrow" ls={2.4} color={t.txMuted} style={{ position: 'absolute', top: 18, left: 20 }}>
            ÉPISODE 03
          </TX>
          <TX font="serifI" role="display" size={44} style={{ position: 'absolute', left: 20, right: 20, top: '32%' }}>
            on · en · in
          </TX>
          <View style={{ position: 'absolute', left: 20, bottom: 20 }}>
            <Waveform count={22} height={22} barWidth={2.5} gap={3.5} active={playing} color={t.txNonText} />
          </View>
        </View>

        {/* Title + meta + queue toggle */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, marginBottom: 18 }}>
          <View style={{ flex: 1 }}>
            <TX font="semi" role="titleLg" size={19}>
              {T.trackTitle}
            </TX>
            <TX role="bodySm" color={t.txMuted} style={{ marginTop: 3 }}>
              {T.trackMeta}
            </TX>
          </View>
          <Press
            onPress={toggleQueue}
            cue={null}
            style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: queued ? t.accA(55) : t.line(16), backgroundColor: queued ? t.accCard(8) : 'transparent', alignItems: 'center', justifyContent: 'center' }}
          >
            {queued ? (
              <Icon name="check" size={17} color={t.acc} />
            ) : (
              <Icon name="plus" size={18} color={t.txNonText} />
            )}
          </Press>
        </View>

        {/* Scrubber */}
        <View style={{ paddingVertical: 6 }}>
          <ProgressBar pct={progress} height={4} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4, marginBottom: 18 }}>
          <TX role="meta" color={t.txSubtle}>
            {curTime}
          </TX>
          <TX role="meta" color={t.txSubtle}>
            2:04
          </TX>
        </View>

        {/* Transport */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 34, marginBottom: 22 }}>
          <Press onPress={skipBack} cue={null} style={{ minWidth: 48, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="skipBack" size={22} color={t.txNonText} />
            <TX font="semi" role="eyebrow" ls={0.8} color={t.txMuted} style={{ marginTop: 3 }} numberOfLines={1}>
              {T.phrase}
            </TX>
          </Press>
          <Press onPress={togglePlay} cue={null} scale={0.94} style={{ width: 74, height: 74, borderRadius: 37, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={playing ? 'pause' : 'play'} size={26} color={t.accInk} />
          </Press>
          <Press onPress={skipForward} cue={null} style={{ minWidth: 48, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="skipForward" size={22} color={t.txNonText} />
            <TX font="semi" role="eyebrow" ls={0.8} color={t.txMuted} style={{ marginTop: 3 }} numberOfLines={1}>
              {T.next}
            </TX>
          </Press>
        </View>

        {/* Speed + queue label */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 'auto' }}>
          <Press onPress={cycleSpeed} cue={null} style={{ minHeight: 34, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 17, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="label" color={t.txSecondary}>
              {speeds[speedIx].label}
            </TX>
          </Press>
          <View style={{ minHeight: 34, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 17, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center' }}>
            <TX role="label" color={queued ? t.accTx : t.txMuted}>
              {queued ? T.queueOn : T.queueOff}
            </TX>
          </View>
        </View>

        {/* Practice out loud → Speak Mode */}
        <Press onPress={() => router.push('/speak')} style={{ minHeight: 54, paddingVertical: 6, borderRadius: 27, borderWidth: 1, borderColor: t.accA(60), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 18 }}>
          <TX font="semi" role="bodyLg" color={t.accTx}>
            {T.practice}
          </TX>
          <Svg width={14} height={10} viewBox="0 0 14 10" fill="none">
            <Path d="M1 5h11M9 1l4 4-4 4" stroke={t.acc} strokeWidth={1.6} strokeLinecap="round" />
          </Svg>
        </Press>
      </View>
    </View>
  );
}
