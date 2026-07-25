import { useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, ProgressBar, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useSessionLog } from '@/store/useProgress';
import { sound, tts } from '@/services';
import { content } from '@/services/content';
import { playlist } from '@/content/playlists';
import { SpeedPicker } from '@/components/SpeedPicker';

// An honest LISTENING pass over real corpus phrases, spoken by device TTS.
//
// There is no recorded track yet (Item.audioRef is null until Phase 7), so there
// is no seekable timeline: progress is "line N of M", not a fabricated 2:04
// scrubber, and every transport does something real. Was a setInterval filling a
// fake bar against a hardcoded 2:04 duration while ~1.5s of one hardcoded phrase
// played, with dead skip and speed controls (review §1.4). A real time scrubber
// returns with real audio in Phase 7.

export default function Player() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const logSession = useSessionLog();

  // With ?playlist=<id> the player plays that set's real tracks (their lines feed
  // TTS exactly as a corpus item does); without it, the default listening pass
  // over corpus phrases. The two share every transport below — a line is a line.
  const params = useLocalSearchParams<{ playlist?: string; track?: string }>();
  const pl = useMemo(() => {
    const id = Array.isArray(params.playlist) ? params.playlist[0] : params.playlist;
    return id ? playlist(id) : undefined;
  }, [params.playlist]);

  const lines = useMemo<{ fr: string; en: string }[]>(
    () => (pl ? pl.tracks.flatMap((tk) => tk.lines) : content.itemsFor('flashcard')),
    [pl]
  );
  const total = lines.length;

  // ?track=N starts the flattened line sequence at the first line of track N.
  const startIx = useMemo(() => {
    if (!pl) return 0;
    const raw = Array.isArray(params.track) ? params.track[0] : params.track;
    const n = Math.max(0, Math.min(pl.tracks.length - 1, parseInt(raw ?? '0', 10) || 0));
    return pl.tracks.slice(0, n).reduce((sum, tk) => sum + tk.lines.length, 0);
  }, [pl, params.track]);

  const [ix, setIx] = useState(startIx);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  // The async TTS callbacks must read live play state and speed, not a stale
  // closure — so changing speed mid-listen applies from the next line.
  const playingRef = useRef(false);
  const speedRef = useRef(1);
  const logged = useRef(false);

  const setSpeedLive = (v: number) => {
    sound.play('tap');
    speedRef.current = v;
    setSpeed(v);
  };

  const cur = lines[Math.min(ix, Math.max(0, total - 1))];

  // In playlist mode the header names the track the current line belongs to, so
  // skipping through the set is legible; otherwise it's the plain listen title.
  const headerTitle = useMemo(() => {
    if (!pl) return T.playerListen;
    let acc = 0;
    for (const tk of pl.tracks) {
      acc += tk.lines.length;
      if (ix < acc) return tk.title;
    }
    return pl.word;
  }, [pl, ix, T.playerListen]);

  useEffect(
    () => () => {
      playingRef.current = false;
      tts.stop();
    },
    []
  );

  // Speak a line; when it finishes, auto-advance to the next while still playing.
  // The last line ends the session (logged exactly once).
  const speakLine = (i: number) => {
    const item = lines[i];
    if (!item) return;
    tts.speak(item.fr, {
      rate: speedRef.current,
      onDone: () => {
        if (!playingRef.current) return;
        if (i + 1 < total) {
          setIx(i + 1);
          speakLine(i + 1);
        } else {
          playingRef.current = false;
          setPlaying(false);
          if (!logged.current) {
            logged.current = true;
            logSession('player');
          }
        }
      },
      onError: () => {
        playingRef.current = false;
        setPlaying(false);
      },
    });
  };

  const togglePlay = () => {
    sound.play('tap');
    if (playing) {
      playingRef.current = false;
      setPlaying(false);
      tts.stop();
    } else {
      playingRef.current = true;
      setPlaying(true);
      speakLine(ix);
    }
  };

  // Seek. If playing, jump and keep going from the new line; if paused, preview
  // the line once so the control is never dead.
  const go = (target: number) => {
    const next = Math.max(0, Math.min(total - 1, target));
    sound.play('tap');
    // Seeking back into the track re-arms the session log: a genuine second
    // play-through to the end should count, but `logged` only clears on restart,
    // so without this a skip-back-then-replay would finish silently.
    if (next < total - 1) logged.current = false;
    setIx(next);
    tts.stop();
    if (playingRef.current) speakLine(next);
    else tts.speak(lines[next]?.fr ?? '', { rate: speedRef.current });
  };

  // Back to the first phrase and play from the top.
  const restart = () => {
    sound.play('tap');
    tts.stop();
    logged.current = false;
    setIx(0);
    playingRef.current = true;
    setPlaying(true);
    speakLine(0);
  };

  if (total === 0 || !cur) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={headerTitle} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <TX role="body" color={t.txMuted} center>
            {T.playerEmpty}
          </TX>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      {/* top glow */}
      <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 240, alignItems: 'center' }}>
        <LinearGradient colors={[t.accA(12), 'transparent']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={{ width: '160%', height: 240 }} />
      </View>

      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={headerTitle} />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 26, paddingBottom: insets.bottom + 20 }}>
        {/* Now playing — the real phrase currently being spoken */}
        <View style={{ aspectRatio: 1, borderRadius: 22, borderWidth: 1, borderColor: t.line(8), overflow: 'hidden', marginBottom: 24, backgroundColor: t.isDark ? '#12100E' : t.card2, ...t.cardShadow, justifyContent: 'center', padding: 26 }}>
          <LinearGradient colors={[t.accA(34), 'transparent']} start={{ x: 0.85, y: 0 }} end={{ x: 0.25, y: 0.62 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <LinearGradient colors={['transparent', t.blend(t.isDark ? '#16211E' : '#DCE7E2', t.bg, 60)]} start={{ x: 0.2, y: 0.4 }} end={{ x: 0.2, y: 1 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <TX font="semi" role="eyebrow" ls={2.4} color={t.txMuted} style={{ position: 'absolute', top: 18, left: 20 }}>
            {T.playerNow}
          </TX>
          <TX font="serifI" role="display" size={40} lhMult={1.15}>
            {cur.fr}
          </TX>
          <TX role="body" color={t.txSecondary} style={{ marginTop: 12 }}>
            {cur.en}
          </TX>
          <View style={{ position: 'absolute', left: 20, bottom: 20 }}>
            <Waveform count={22} height={30} barWidth={3.25} gap={4} active={playing} color={playing ? t.acc : t.txNonText} />
          </View>
        </View>

        {/* Progress — real line position, not a fabricated timeline */}
        <View style={{ paddingVertical: 6 }}>
          <ProgressBar pct={((ix + 1) / total) * 100} height={4} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4, marginBottom: 20 }}>
          <TX role="meta" color={t.txSubtle}>
            {T.phrase} {ix + 1}
          </TX>
          <TX role="meta" color={t.txSubtle}>
            {ix + 1} / {total}
          </TX>
        </View>

        {/* Transport */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 34, marginBottom: 22 }}>
          <Press onPress={() => go(ix - 1)} cue={null} disabled={ix === 0} style={{ minWidth: 48, alignItems: 'center', justifyContent: 'center', opacity: ix === 0 ? 0.35 : 1 }}>
            <Icon name="skipBack" size={22} color={t.txNonText} />
          </Press>
          <Press onPress={togglePlay} cue={null} scale={0.94} style={{ width: 74, height: 74, borderRadius: 37, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={playing ? 'pause' : 'play'} size={26} color={t.accInk} />
          </Press>
          <Press onPress={() => go(ix + 1)} cue={null} disabled={ix >= total - 1} style={{ minWidth: 48, alignItems: 'center', justifyContent: 'center', opacity: ix >= total - 1 ? 0.35 : 1 }}>
            <Icon name="skipForward" size={22} color={t.txNonText} />
          </Press>
        </View>

        {/* Speed + restart — every control here is real (rate reaches the TTS) */}
        <View style={{ marginBottom: 'auto', gap: 12 }}>
          <SpeedPicker value={speed} onChange={setSpeedLive} />
          <Press
            onPress={restart}
            cue={null}
            style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', gap: 8, minHeight: 36, paddingVertical: 6, paddingHorizontal: 18, borderRadius: 18, borderWidth: 1, borderColor: t.line(14) }}
          >
            <Icon name="restart" size={15} color={t.txSecondary} strokeWidth={1.8} />
            <TX font="semi" role="label" color={t.txSecondary}>
              {T.restart}
            </TX>
          </Press>
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
