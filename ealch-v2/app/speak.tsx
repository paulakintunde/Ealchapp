import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, Rect } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Icon } from '@/components/Icon';
import { MascotAvatar } from '@/components/MascotAvatar';
import { avatarName } from '@/content/avatars';
import { Press } from '@/components/ui';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress, useSessionLog } from '@/store/useProgress';
import {
  speakNextBlock, speakPassedIds, speakPathPosition, speakStageState,
} from '@/store/progress.logic';
import { useContent } from '@/services/content';
import { getItem, speakStages } from '@/services/content.logic';
import {
  parseTrackParam, playerRouteFor, playlistDeck, playlistStartIx, playlistTrackAt,
  playlistPool, resolvePlaylistParam, type SpeakCard,
} from '@/utils/speakDeck.logic';
import { sound, tts, stt, type SttResult } from '@/services';
import { markWords, focusWordsFrom, barsForLevel, isLenientLevel } from '@/utils/score';
import { WORLD_TITLES } from '@/content/speakWorlds';
import type { Level } from '@/content/schema';
import { WordPractice } from '@/components/WordPractice';

type Phase = 'idle' | 'listening' | 'analysed' | 'blockdone';

// Speak is a practice tool, not a slideshow: a card advances on a 'good' take,
// and only unlocks an optional skip after this many real (transcribed) tries.
const SKIP_AFTER = 5;

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
  const logAttempt = useProgress((s) => s.logAttempt);
  const setResume = useProgress((s) => s.setResume);
  const attempts = useProgress((s) => s.attempts);

  // The Speak trail (SPEAK-PATH-BLUEPRINT.md): the corpus speakPath in walk
  // order, progress derived from the attempt log — nothing about the trail is
  // persisted separately, so wiping the log honestly resets the avatar and a
  // restored log restores it. The old screen looped 3 hardcoded café lines;
  // the deck is now the current station's current block.
  const corpus = useContent((s) => s.corpus);
  const stages = useMemo(() => speakStages(corpus), [corpus]);
  const passed = useMemo(() => speakPassedIds(attempts), [attempts]);
  const posIx = useMemo(() => speakPathPosition(stages, passed), [stages, passed]);

  // `?stage=&block=` land a resume or a revisit. A stage BEYOND the avatar is
  // locked and clamps to the frontier — the path is linear, that is the point.
  // Earlier (cleared) stations stay enterable for their bonus blocks.
  //
  // `?playlist=&track=` is the OTHER way in, and it does not touch the trail at
  // all: it drills that playlist's own lines. The player used to push a bare
  // `/speak`, so every one of the nineteen playlists opened whatever station
  // the avatar happened to be standing on. Listening was playlist-specific and
  // speaking was not.
  const params = useLocalSearchParams<{ stage?: string; block?: string; playlist?: string; track?: string }>();
  // Corpus playlists when any are published, the bundled set otherwise.
  const pool = playlistPool(useContent((s) => s.corpus.playlists));
  const asked = useMemo(() => resolvePlaylistParam(params.playlist, pool), [params.playlist, pool]);
  const pl = asked.kind === 'found' ? asked.playlist : undefined;
  // Any playlist REQUEST, found or not, means this screen is not the trail. The
  // guards below key on this rather than on `pl`, so a link to a playlist that
  // no longer exists cannot quietly write a trail resume from an empty state.
  const playlistMode = asked.kind !== 'none';
  const reqStage = Array.isArray(params.stage) ? params.stage[0] : params.stage;
  const reqIx = reqStage ? stages.findIndex((s) => s.id === reqStage) : -1;
  const stageIx = reqIx >= 0 && reqIx <= posIx ? reqIx : posIx;
  const stage = stages[stageIx];
  const stageState = useMemo(
    () => (stage ? speakStageState(stage, passed) : null),
    [stage, passed]
  );

  const [blockIx, setBlockIx] = useState(() => {
    if (!stage) return 0;
    const raw = Array.isArray(params.block) ? params.block[0] : params.block;
    const asked = raw === undefined ? NaN : Number(raw);
    if (Number.isInteger(asked) && asked >= 0 && asked < stage.blocks.length) return asked;
    return speakNextBlock(stage, passed);
  });
  const block = stage?.blocks[Math.min(blockIx, Math.max(0, (stage?.blocks.length ?? 1) - 1))];
  const items = useMemo(
    () => (block ? block.itemIds.map((id) => getItem(corpus, id)).filter((i) => i !== null) : []),
    [corpus, block]
  );

  // What this session actually drills, resolved once so the chrome below never
  // has to ask which mode it is in. Trail mode is the station's current block;
  // playlist mode is the whole playlist, flattened by the same function the
  // player flattens it with.
  //
  // `level` matters: it sets the scoring bars and whether a miss is amber or
  // red. A playlist declares `minLevel`, which is exactly that judgement,
  // recorded at authoring time.
  const deck = useMemo<{ mode: 'trail' | 'playlist'; title: string; level: Level | undefined; cards: SpeakCard[]; celebrateKey: string }>(
    () =>
      asked.kind === 'found'
        ? { mode: 'playlist', title: asked.playlist.word, level: asked.playlist.minLevel, cards: playlistDeck(asked.playlist), celebrateKey: `speak-pl-${asked.playlist.id}` }
        // Named but absent: an empty PLAYLIST deck, so the guard below shows the
        // empty state. Falling through to the trail branch here would open a
        // station the learner did not ask for and say nothing about it.
        : asked.kind === 'missing'
          ? { mode: 'playlist', title: '', level: undefined, cards: [], celebrateKey: '' }
          : { mode: 'trail', title: stage?.title ?? '', level: stage?.level, cards: items, celebrateKey: `speak-${stage?.id ?? 'none'}-${blockIx}` },
    [asked, stage, items, blockIx]
  );

  // Playlist mode enters on the track the player was hearing, so tapping the
  // mic mid-set starts where you are rather than at the top.
  const [cardIx, setCardIx] = useState(() =>
    pl ? playlistStartIx(pl, parseTrackParam(pl, params.track)) : 0
  );
  const [phase, setPhase] = useState<Phase>('idle');
  const [speaking, setSpeaking] = useState(false);
  const [partial, setPartial] = useState('');
  const [heard, setHeard] = useState<SttResult | null>(null);
  // Transcribed-but-not-good takes on the current card. Only real transcripts
  // count: "didn't catch that" never walks a learner toward the skip.
  const [tries, setTries] = useState(0);
  // Consecutive captures that produced NO transcript at all (mic present and
  // permitted, recognizer heard nothing). Three in a row is treated as "the
  // mic cannot hear this learner right now" and unlocks Continue — otherwise
  // a deaf mic loops "didn't catch that" forever with no way out. Nothing is
  // logged for these: the escape hatch never fakes an attempt.
  const [noHear, setNoHear] = useState(0);
  // Live input level 0..1 while listening — drives the waveform so silence
  // looks like silence instead of a decorative dance.
  const [micLevel, setMicLevel] = useState(0);
  // The card was said well at least once this visit — Continue is earned.
  const [passedCard, setPassedCard] = useState(false);
  // Which missed word the practice sheet is open on; null = closed.
  const [practiceIx, setPracticeIx] = useState<number | null>(null);
  // Bumped whenever the card changes. A listen() that resolves after the
  // learner moved on compares against this and drops its stale result instead
  // of painting the old transcript over the new card.
  const cardToken = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // The map can push a different `?stage=` while this screen is mounted, and
  // the blockdone CTA advances the stage in place. `blockIx`'s initializer
  // only ran on mount, so a stage change must reset the session state itself.
  // Playlist mode is exempt: `stage` is still computed there (the frontier),
  // and resetting to card 0 on a frontier wobble would throw away the set.
  const prevStageId = useRef(stage?.id);
  useEffect(() => {
    if (playlistMode || !stage || prevStageId.current === stage.id) return;
    prevStageId.current = stage.id;
    stt.abort();
    cardToken.current += 1;
    setBlockIx(speakNextBlock(stage, passed));
    setCardIx(0);
    setPartial('');
    setHeard(null);
    setTries(0);
    setNoHear(0);
    setPassedCard(false);
    setPhase('idle');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage?.id]);

  const avatarId = useStore((s) => s.avatarId);
  const coachName = avatarName(avatarId);
  const item = deck.cards[cardIx];
  // Strictness follows the deck's band: forgiving bars and amber "practice
  // this" marks early on, tighter bars and red misses at the advanced levels.
  const bars = barsForLevel(deck.level);
  const missColor = isLenientLevel(deck.level) ? t.warn : t.danger;
  const listening = phase === 'listening';
  const analysed = phase === 'analysed';
  const waveActive = listening || speaking;

  // Coach "speaks" a line: real French TTS + a ~2.6s speaking state for the wave.
  const speakLine = useCallback((fr: string) => {
    setSpeaking(true);
    tts.speak(fr);
    const id = setTimeout(() => setSpeaking(false), 2600);
    timers.current.push(id);
  }, []);

  // On entry and on every new card: the coach reads the line first.
  useEffect(() => {
    if (item && phase !== 'blockdone') speakLine(item.fr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.id]);

  useEffect(() => {
    return () => {
      tts.stop();
      stt.abort();
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  // Keeps the trail resumable at the exact station AND block. Card position
  // inside a block is deliberately not persisted: blocks are the session
  // unit, and re-entering one from its top is a feature, not a loss.
  //
  // Playlist mode writes NOTHING here. There is one resume slot per activity,
  // so a playlist route in it would erase the learner's place on the trail and
  // make the home hero offer a playlist as "resume Speak". A playlist is one
  // sitting; losing its place costs less than losing the trail's.
  useEffect(() => {
    if (playlistMode || !stage || phase === 'blockdone') return;
    setResume('speak', {
      route: `/speak?stage=${stage.id}&block=${blockIx}`,
      title: stage.title,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage?.id, blockIx]);

  // Tap once to record; the recognizer finalises on end-of-speech (or at 7s).
  // Tap again while listening to finish early.
  const micTap = async () => {
    if (!item) return;
    if (listening) {
      stt.stop();
      return;
    }
    sound.play('tap');
    setPartial('');
    setHeard(null);
    setMicLevel(0);
    setPhase('listening');

    const token = cardToken.current;
    const res = await stt.listen(item.fr, {
      maxMs: 7000,
      onPartial: setPartial,
      // Recognizer reports -2..10; below 0 is inaudible. Fold to 0..1.
      onVolume: (v) => {
        if (token === cardToken.current) setMicLevel(Math.max(0, Math.min(1, (v + 2) / 12)));
      },
      bars,
    });
    if (token !== cardToken.current) return;

    setPartial('');
    setHeard(res);
    // Only a REAL transcript is signal. 'good' passes the card (and the fold
    // in progress.logic counts it toward the block); 'close' logs as an
    // honest non-pass; no transcript logs nothing at all.
    if (res.ok) {
      logAttempt({
        activity: 'speak',
        itemId: item.id,
        expected: item.fr,
        heard: res.transcript,
        score: res.score,
        verdict: res.verdict,
        correct: res.verdict === 'good',
        modality: 'produce',
      });
      if (res.verdict === 'good') setPassedCard(true);
      else setTries((n) => n + 1);
      setNoHear(0);
    } else if (res.available && res.error !== 'not-allowed') {
      // Mic present and permitted, yet nothing was transcribed. Track the
      // streak; a real transcript above resets it.
      setNoHear((n) => n + 1);
    }
    sound.play(res.ok && res.verdict === 'good' ? 'success' : 'flip');
    setPhase('analysed');
  };

  const nextCard = () => {
    sound.play('tap');
    stt.abort();
    cardToken.current += 1;
    setPartial('');
    setHeard(null);
    setTries(0);
    setNoHear(0);
    setPassedCard(false);
    setPracticeIx(null);
    if (cardIx + 1 < deck.cards.length) {
      setCardIx(cardIx + 1);
      setPhase('idle');
    } else {
      // End of block: one session logged per block, not per card.
      logSession('speak');
      tts.stop();
      setPhase('blockdone');
    }
  };

  const replayCoach = () => {
    if (!item) return;
    sound.play('tap');
    speakLine(item.fr);
  };

  const endSession = () => {
    sound.play('tap');
    logSession('speak');
    router.push('/feedback');
  };

  const startBlock = (ix: number) => {
    sound.play('tap');
    cardToken.current += 1;
    setBlockIx(ix);
    setCardIx(0);
    setPartial('');
    setHeard(null);
    setTries(0);
    setNoHear(0);
    setPassedCard(false);
    setPhase('idle');
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
    // Escalate with the streak: hint on the 2nd consecutive silence, and an
    // exit once the mic is declared stuck.
    if (noHear >= 3) return T.micCantHear;
    if (noHear >= 2) return T.micNoSpeechHint;
    return T.micNoSpeech;
  })();

  const verdictColor =
    heard?.verdict === 'good' ? t.accTx : heard?.verdict === 'close' ? t.txPrimary : missColor;
  const verdictLabel =
    heard?.verdict === 'good' ? T.micGood : heard?.verdict === 'close' ? T.micClose : T.micOff;

  // The practice contract. A failed take demands a retry; the mic being
  // genuinely unusable (denied, or no recognizer on this build) falls back to
  // self-assessment and may continue. "Didn't catch that" retries — but three
  // in a row with no transcript at all means the mic cannot hear this learner
  // right now, and that unlocks Continue too (micStuck) instead of a dead end.
  const failedTry = analysed && !!heard?.ok && heard.verdict !== 'good';
  const micBlocked =
    analysed && !!heard && !heard.ok && (heard.error === 'not-allowed' || !heard.available);
  const micStuck = noHear >= 3;
  const canSkip = tries >= SKIP_AFTER;
  const canAdvance = passedCard || micBlocked || micStuck || canSkip;
  // Word-level diff of the target against the take, for highlighting what to
  // fix. Only meaningful on a real transcript.
  const marks = analysed && heard?.ok && item ? markWords(item.fr, heard.transcript) : null;
  // Bare words (punctuation stripped) — these are chips AND practice targets,
  // so they must be sayable on their own.
  const missedWords = marks
    ? marks
        .filter((m) => !m.hit)
        .map((m) => m.word.replace(/[«»"“”.,!?;:()[\]…]/g, ''))
        .filter(Boolean)
    : [];

  // An empty path (a snapshot from before speakPath shipped), a dangling block,
  // or an unknown `?playlist=` id: all three are a plain "coming soon".
  if (!deck.cards.length || (deck.mode === 'trail' && (!stage || !block))) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bgDeep, paddingTop: insets.top }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20, paddingVertical: 12 }}>
          <Press onPress={() => router.replace('/home')} style={{ width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', backgroundColor: t.line(6) }}>
            <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
              <Path d="M2 2l11 11M13 2L2 13" stroke={t.txNonText} strokeWidth={1.7} strokeLinecap="round" />
            </Svg>
          </Press>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, gap: 18 }}>
          <MascotAvatar size={80} rounded={false} state="thinking" />
          <TX role="body" color={t.txMuted} center>{T.lessonSoon}</TX>
        </View>
      </View>
    );
  }

  // Trail mode counts blocks; a playlist has none, so it names the track the
  // current line belongs to instead. Either way the line answers "where am I".
  const blockMeta =
    deck.mode === 'playlist' && pl
      ? (pl.tracks[playlistTrackAt(pl, cardIx)]?.title ?? pl.word)
      : T.speakBlock.replace('{a}', String(blockIx + 1)).replace('{b}', String(stage?.blocks.length ?? 0));

  // Lines of this playlist said well at least once, ever — folded from the same
  // attempt log the trail's own count comes from, so it is a fact rather than a
  // session tally that resets when you leave.
  const deckPassed = deck.mode === 'playlist' ? deck.cards.filter((c) => passed.has(c.id)).length : 0;

  // ── Block complete ──
  if (phase === 'blockdone') {
    const blockCleared = stageState?.blocks[blockIx] ?? false;
    const stationCleared = stageState?.cleared ?? false;
    const nextIx = stageState ? stageState.blocks.findIndex((c) => !c) : -1;
    // The trail is progressive: a cleared station hands straight to the next
    // one, and the next world when the station was its last. Bonus blocks stay
    // reachable from the map, they just stop being the default.
    const nextStage = deck.mode === 'trail' && stationCleared ? stages[stageIx + 1] : undefined;
    // What this session exposed: the words the recognizer kept missing across
    // this deck's failed takes, folded from the same log everything else is.
    const deckIds = new Set(deck.cards.map((c) => c.id));
    const focus = focusWordsFrom(
      attempts
        .filter((a) => a.activity === 'speak' && !a.correct && a.heard && deckIds.has(a.itemId))
        .map((a) => ({ expected: a.expected, heard: a.heard })),
      6
    );
    return (
      <View style={{ flex: 1, backgroundColor: t.bgDeep, paddingTop: insets.top }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <View style={{ marginBottom: 22 }}>
            <MascotAvatar
              size={110}
              rounded={false}
              state={(deck.mode === 'playlist' ? deckPassed > 0 : blockCleared) ? 'celebrate' : 'idle'}
              tier={deck.mode === 'trail' && stationCleared ? 'medium' : 'micro'}
              celebrateKey={deck.celebrateKey}
            />
          </View>
          <TX font="serifI" size={27} role="display" center style={{ marginBottom: 8 }}>
            {deck.mode === 'playlist'
              ? deckPassed > 0
                ? T.speakSetDone
                : T.wellDone
              : stationCleared
                ? T.speakStationDone
                : blockCleared
                  ? T.speakBlockDone
                  : T.wellDone}
          </TX>
          <TX font="semi" role="meta" ls={2} color={t.accTx} center style={{ marginBottom: 6 }}>
            {deck.title.toUpperCase()}
          </TX>
          {/* A playlist has no station to report against, so it reports what it
              honestly can: how many of its own lines have been said well. The
              trail keeps its station tally. */}
          <TX role="label" color={t.txSubtle} center style={{ marginBottom: focus.length ? 16 : 34 }}>
            {deck.mode === 'playlist'
              ? `${deckPassed}/${deck.cards.length} ✓`
              : `${blockMeta} · ${stageState?.passedCount ?? 0}/${stageState?.totalCount ?? 0} ✓`}
          </TX>
          {focus.length ? (
            <View style={{ alignItems: 'center', marginBottom: 26, paddingHorizontal: 10 }}>
              <TX font="semi" role="eyebrow" ls={2.2} color={t.txSubtle}>
                {T.speakFocusWordsT.toUpperCase()}
              </TX>
              <TX font="semi" role="label" color={missColor} center style={{ marginTop: 6 }}>
                {focus.map((f) => f.word).join(' · ')}
              </TX>
            </View>
          ) : null}
          {nextStage ? (
            <Press
              cue={null}
              onPress={() => {
                sound.play('tap');
                router.setParams({ stage: nextStage.id });
              }}
              style={{ minHeight: 52, paddingVertical: 8, paddingHorizontal: 34, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
            >
              <TX font="semi" role="body" color={t.accInk}>
                {nextStage.world !== stage.world
                  ? T.speakNextWorld.replace('{w}', WORLD_TITLES[nextStage.world] ?? '')
                  : T.speakNextStation}{' '}
                →
              </TX>
            </Press>
          ) : deck.mode === 'playlist' && pl ? (
            <Press
              cue={null}
              onPress={() => {
                sound.play('tap');
                // navigate, not replace: the player is usually still under this
                // screen, and replace would stack a second copy of it.
                router.navigate(playerRouteFor(pl.id, 0));
              }}
              style={{ minHeight: 52, paddingVertical: 8, paddingHorizontal: 34, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
            >
              <TX font="semi" role="body" color={t.accInk}>
                {T.speakBackPlaylist}
              </TX>
            </Press>
          ) : nextIx >= 0 ? (
            <Press cue={null} onPress={() => startBlock(nextIx)} style={{ minHeight: 52, paddingVertical: 6, paddingHorizontal: 34, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.cont}
              </TX>
            </Press>
          ) : null}
          <Press cue={null} onPress={endSession} style={{ marginTop: 16 }}>
            <TX role="bodySm" color={t.txMuted}>
              {T.end} · Le Rapport →
            </TX>
          </Press>
          {/* A playlist is not on the trail, so it does not offer a door back
              to a map it never left. */}
          {deck.mode === 'trail' ? (
            <Press cue={null} onPress={() => router.replace('/speakmap')} style={{ marginTop: 12 }}>
              <TX role="bodySm" color={t.txMuted}>
                {T.speakBackMap}
              </TX>
            </Press>
          ) : null}
        </View>
      </View>
    );
  }

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

      {/* Header: X → home, station + block, gear → settings */}
      <View style={{ paddingTop: insets.top }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 12 }}>
          <Press onPress={() => router.replace('/home')} style={{ width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', backgroundColor: t.line(6) }}>
            <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
              <Path d="M2 2l11 11M13 2L2 13" stroke={t.txNonText} strokeWidth={1.7} strokeLinecap="round" />
            </Svg>
          </Press>
          <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <BlinkDot color={t.acc} />
              <TX font="semi" role="meta" ls={2.6} color={t.txSecondary} numberOfLines={1} style={{ flexShrink: 1 }}>
                {deck.title.toUpperCase()}
              </TX>
            </View>
            <TX font="semi" role="eyebrow" ls={1.8} color={t.txSubtle} numberOfLines={1} style={{ marginTop: 3 }}>
              {blockMeta} · {cardIx + 1}/{deck.cards.length}
            </TX>
          </View>
          <Press onPress={() => router.push('/settings')} style={{ width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', backgroundColor: t.line(6) }}>
            <Icon name="gear" size={18} color={t.txNonText} strokeWidth={1.7} />
          </Press>
        </View>
      </View>

      {/* Brix, full body + live waveform */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <MascotAvatar
          size={170}
          rounded={false}
          state={analysed && heard?.ok && heard.verdict === 'good' ? 'celebrate' : listening ? 'thinking' : 'idle'}
          tier="micro"
          celebrateKey={analysed && heard ? `${heard.transcript}-${heard.score}` : undefined}
        />
        <View style={{ marginTop: 22, height: 56, alignItems: 'center', justifyContent: 'center' }}>
          <Waveform count={40} height={54} barWidth={3} gap={4} active={waveActive} level={listening ? micLevel : undefined} color={listening ? t.acc : t.blend(t.acc, t.tx, 70)} />
        </View>
      </View>

      {/* The line to shadow: French leads, English muted underneath */}
      <View style={{ paddingHorizontal: 30, paddingTop: 22, alignItems: 'center' }}>
        <TX font="semi" role="meta" ls={3} color={t.accTx} style={{ marginBottom: 12 }}>
          {coachName.toUpperCase()}
        </TX>
        <TX font="serifI" size={24} role="display" lhMult={1.32} center style={{ minHeight: 66 }}>
          « {item.fr} »
        </TX>
        <TX role="label" color={t.txSubtle} center style={{ marginTop: 10 }}>
          {item.en}
        </TX>
        {/* Hear the line on demand — the same replay as the transport bar, but
            right under the words so it is actually found. */}
        <Press
          onPress={replayCoach}
          cue={null}
          style={{ marginTop: 14, width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: speaking ? t.acc : t.accA(50), backgroundColor: speaking ? t.accA(12) : 'transparent', alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name="speaker" size={24} color={t.acc} />
        </Press>
        <TX font="semi" role="meta" ls={1.6} color={t.accTx} center style={{ marginTop: 12, textTransform: 'uppercase' }}>
          {T.speakRepeat.replace('{name}', coachName)}
        </TX>
      </View>

      {/* What was heard, scored against the line + end */}
      <View style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 26, paddingBottom: 18 }}>
        {analysed ? (
          <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.blend(t.card2, t.bgDeep, 85), padding: 18 }}>
            {heard?.ok ? (
              // What the learner ACTUALLY said, scored against the line. No
              // model reply is invented — the target is the line above.
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
                {/* The model line, word by word: what landed stays quiet, what
                    was missed is loud — that is the thing to fix on the retry. */}
                <TX role="meta" color={t.txSubtle} style={{ marginTop: 10 }} lhMult={1.5}>
                  {T.speakModelWas.replace('{name}', coachName)} : «{' '}
                  {(marks ?? []).map((m, i, arr) => (
                    <TX
                      key={`${m.word}-${i}`}
                      role="meta"
                      font={m.hit ? undefined : 'semi'}
                      color={m.hit ? t.txSubtle : missColor}
                    >
                      {m.word}
                      {i < arr.length - 1 ? ' ' : ''}
                    </TX>
                  ))}{' '}
                  »
                </TX>
                {failedTry && missedWords.length ? (
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                      <TX font="semi" role="eyebrow" ls={1.8} color={missColor}>
                        {T.speakFocusOn.toUpperCase()} :
                      </TX>
                      {/* Each missed word is a door into word-level practice. */}
                      {missedWords.map((w, i) => (
                        <Press
                          key={`${w}-${i}`}
                          cue="tap"
                          onPress={() => setPracticeIx(i)}
                          style={{ paddingVertical: 5, paddingHorizontal: 12, borderRadius: 14, borderWidth: 1, borderColor: missColor, backgroundColor: t.alpha(missColor, 10) }}
                        >
                          <TX font="semi" role="label" color={missColor}>
                            {w}
                          </TX>
                        </Press>
                      ))}
                    </View>
                    <TX role="eyebrow" color={t.txSubtle} style={{ marginTop: 6 }}>
                      {T.speakWordTap}
                    </TX>
                  </View>
                ) : null}
              </>
            ) : (
              // Nothing usable was heard — say why, honestly, instead of showing
              // a score for a recording that did not happen.
              <TX role="label" color={t.txSecondary} lhMult={1.5}>
                {heard?.error === 'not-allowed'
                  ? T.micDenied
                  : heard && !heard.available
                    ? T.micUnavail
                    : micStuck
                      ? T.micCantHear
                      : noHear >= 2
                        ? T.micNoSpeechHint
                        : T.micNoSpeech}
              </TX>
            )}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
              {failedTry ? (
                <TX font="semi" role="eyebrow" ls={1.4} color={t.txSubtle}>
                  {T.speakTryN.replace('{n}', String(Math.min(tries, SKIP_AFTER)))} / {SKIP_AFTER}
                </TX>
              ) : null}
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 22, marginLeft: 'auto' }}>
                {/* Retry is always on the table while the mic works — a good
                    take can still be polished. */}
                {!micBlocked ? (
                  <Press onPress={micTap} cue="tap" style={{ paddingVertical: 4 }}>
                    <TX font="semi" role="label" color={passedCard ? t.txMuted : t.accTx}>
                      {T.speakRetry}
                    </TX>
                  </Press>
                ) : null}
                {passedCard || micBlocked || micStuck ? (
                  <Press onPress={nextCard} cue="tap" style={{ paddingVertical: 4 }}>
                    <TX font="semi" role="label" color={t.accTx}>
                      {T.cont}
                    </TX>
                  </Press>
                ) : canSkip ? (
                  <Press onPress={nextCard} cue={null} style={{ paddingVertical: 4 }}>
                    <TX font="semi" role="label" color={t.txMuted}>
                      {T.speakSkip}
                    </TX>
                  </Press>
                ) : null}
              </View>
            </View>
          </View>
        ) : null}
        <Press onPress={endSession} style={{ alignSelf: 'center', marginTop: 14, minHeight: 34, paddingVertical: 6, paddingHorizontal: 18, borderRadius: 17, borderWidth: 1, borderColor: t.line(16), flexDirection: 'row', alignItems: 'center' }}>
          <TX font="semi" role="meta" color={t.txSecondary}>
            {T.end} · Le Rapport →
          </TX>
        </Press>
      </View>

      {/* Transport: replay · mic · next card */}
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
        {/* Next is earned, not free: a good take, five real tries, or a mic
            that genuinely cannot record. Otherwise this card is the work. */}
        <Press
          onPress={() => {
            if (canAdvance) nextCard();
          }}
          cue={canAdvance ? 'tap' : null}
          accessibilityState={{ disabled: !canAdvance }}
          style={{ width: 46, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center', opacity: canAdvance ? 1 : 0.35 }}
        >
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

      {/* Word-level practice sheet, opened from a missed-word chip. Closing it
          lands back on this card, ready to retry the whole line. */}
      {practiceIx !== null && missedWords.length ? (
        <WordPractice
          words={missedWords}
          initialIx={practiceIx}
          level={deck.level}
          onClose={() => setPracticeIx(null)}
        />
      ) : null}
    </View>
  );
}
