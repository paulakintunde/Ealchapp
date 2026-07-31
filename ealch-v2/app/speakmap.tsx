import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, ScrollView, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Icon } from '@/components/Icon';
import { MascotAvatar } from '@/components/MascotAvatar';
import { Press } from '@/components/ui';
import { TabBar } from '@/components/TabBar';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress } from '@/store/useProgress';
import {
  speakPassedIds, speakPathPosition, speakStageState, type SpeakStageState,
} from '@/store/progress.logic';
import { useContent } from '@/services/content';
import { speakStages } from '@/services/content.logic';
import { useReduceMotion } from '@/utils/reduceMotion';
import type { SpeakStage } from '@/content/schema';

import { WORLD_TITLES } from '@/content/speakWorlds';

const ROW_H = 118;
const NODE = 58;
// The winding: node x-offsets cycle through a gentle S. Index is per-world so
// every world starts back at the spine.
const WAVE = [-64, 8, 64, -8];

function StationPulse({ color, active }: { color: string; active: boolean }) {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!active) {
      v.setValue(0);
      return;
    }
    const loop = Animated.loop(
      Animated.timing(v, { toValue: 1, duration: 1600, easing: Easing.out(Easing.ease), useNativeDriver: true })
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
        width: NODE,
        height: NODE,
        borderRadius: NODE / 2,
        borderWidth: 1.5,
        borderColor: color,
        opacity: v.interpolate({ inputRange: [0, 1], outputRange: [0.55, 0] }),
        transform: [{ scale: v.interpolate({ inputRange: [0, 1], outputRange: [1, 1.65] }) }],
      }}
    />
  );
}

// Completion ring around the active station: the full-strength arc is the
// share of cards already said well, the lighter track is what remains. Starts
// at 12 o'clock and fills clockwise.
const RING = NODE + 12;
const RING_STROKE = 3;

function ProgressRing({ pct, track, color }: { pct: number; track: string; color: string }) {
  const r = (RING - RING_STROKE) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(1, pct));
  return (
    <Svg
      width={RING}
      height={RING}
      pointerEvents="none"
      style={{ position: 'absolute', left: -(RING - NODE) / 2, top: -(RING - NODE) / 2 }}
    >
      <Circle cx={RING / 2} cy={RING / 2} r={r} stroke={track} strokeWidth={RING_STROKE} fill="none" />
      {clamped > 0 ? (
        <Circle
          cx={RING / 2}
          cy={RING / 2}
          r={r}
          stroke={color}
          strokeWidth={RING_STROKE}
          fill="none"
          strokeDasharray={`${c}`}
          strokeDashoffset={c * (1 - clamped)}
          strokeLinecap="round"
          transform={`rotate(-90 ${RING / 2} ${RING / 2})`}
        />
      ) : null}
    </Svg>
  );
}

type NodeState = 'cleared' | 'current' | 'locked';

function WorldSection({
  world, stations, states, nodeStates, onOpen, reduceMotion,
}: {
  world: number;
  stations: SpeakStage[];
  states: SpeakStageState[];
  nodeStates: NodeState[];
  onOpen: (stage: SpeakStage) => void;
  reduceMotion: boolean;
}) {
  const t = useTheme();
  const T = useT();
  const { width } = useWindowDimensions();
  const cx = width / 2;
  const canvasH = stations.length * ROW_H;

  // One smooth path through the stations of this world, drawn behind the
  // nodes. Cubic segments with vertical control points read as a trail, not
  // a zig-zag.
  const pts = stations.map((_, i) => ({
    x: cx + WAVE[i % WAVE.length],
    y: i * ROW_H + ROW_H / 2,
  }));
  let d = '';
  if (pts.length > 1) {
    d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i += 1) {
      const a = pts[i - 1];
      const b = pts[i];
      const my = (a.y + b.y) / 2;
      d += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
    }
  }

  return (
    <View style={{ marginBottom: 26 }}>
      <View style={{ alignItems: 'center', marginBottom: 8 }}>
        <TX font="semi" role="eyebrow" ls={2.6} color={t.accTx}>
          {T.speakWorld.replace('{n}', String(world))} · {stations[0]?.level.toUpperCase()}
        </TX>
        <TX font="serifI" size={23} role="display" center style={{ marginTop: 4 }}>
          {WORLD_TITLES[world] ?? ''}
        </TX>
        {/* The name alone is poetry; the meaning line says what the world IS. */}
        {T.speakWorldMeanings[world - 1] ? (
          <TX role="label" color={t.txMuted} center style={{ marginTop: 3, paddingHorizontal: 30 }}>
            {T.speakWorldMeanings[world - 1]}
          </TX>
        ) : null}
      </View>

      <View style={{ height: canvasH }}>
        {pts.length > 1 ? (
          <Svg width={width} height={canvasH} style={{ position: 'absolute' }} pointerEvents="none">
            <Path d={d} stroke={t.line(14)} strokeWidth={2} strokeDasharray="1 7" strokeLinecap="round" fill="none" />
          </Svg>
        ) : null}

        {stations.map((s, i) => {
          const st = states[i];
          const ns = nodeStates[i];
          const x = pts[i].x;
          const y = pts[i].y;
          const locked = ns === 'locked';
          const current = ns === 'current';
          const cleared = ns === 'cleared';
          const pct = st.totalCount ? st.passedCount / st.totalCount : 0;
          return (
            <View key={s.id} style={{ position: 'absolute', top: y - NODE / 2, left: 0, right: 0 }}>
              {/* The avatar stands to the RIGHT of the current station, level
                  with the circle — the map's whole point is seeing where you
                  are. */}
              {current ? (
                <View pointerEvents="none" style={{ position: 'absolute', left: x + NODE / 2 + 6, top: (NODE - 60) / 2, zIndex: 2 }}>
                  <MascotAvatar size={60} rounded={false} state="idle" />
                </View>
              ) : null}
              <View style={{ position: 'absolute', left: x - NODE / 2, width: NODE, height: NODE, alignItems: 'center', justifyContent: 'center' }}>
                <StationPulse color={t.acc} active={current && !reduceMotion} />
                {current ? <ProgressRing pct={pct} track={t.accA(18)} color={t.acc} /> : null}
                <Press
                  onPress={() => (locked ? undefined : onOpen(s))}
                  cue={locked ? null : 'tap'}
                  scale={locked ? 1 : 0.94}
                  accessibilityRole="button"
                  accessibilityState={{ disabled: locked }}
                  accessibilityLabel={s.title}
                  style={{
                    width: NODE,
                    height: NODE,
                    borderRadius: NODE / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: cleared ? t.acc : current ? t.accA(14) : t.line(5),
                    borderWidth: 1.5,
                    borderColor: cleared ? t.acc : current ? t.acc : t.line(14),
                  }}
                >
                  {cleared ? (
                    <Icon name="check" size={22} color={t.accInk} strokeWidth={2} />
                  ) : locked ? (
                    <Icon name="lock" size={18} color={t.txNonText} strokeWidth={1.6} />
                  ) : (
                    <TX font="serif" role="title" color={t.accTx}>
                      {s.seq}
                    </TX>
                  )}
                </Press>
              </View>
              {/* Label under the node, centered on it. */}
              <View style={{ position: 'absolute', left: x - 86, top: NODE + 4, width: 172, alignItems: 'center' }}>
                <TX font="semi" role="label" center numberOfLines={1} color={locked ? t.txSubtle : t.txPrimary}>
                  {s.title}
                </TX>
                <TX role="eyebrow" color={locked ? t.txNonText : t.txMuted} style={{ marginTop: 2 }}>
                  {cleared ? '✓' : current ? `${st.coreCleared}/${st.coreTotal} · ${Math.round(pct * 100)}%` : `${s.blocks.length} × 33`}
                </TX>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default function SpeakMap() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const reduceMotion = useReduceMotion();

  const corpus = useContent((s) => s.corpus);
  const attempts = useProgress((s) => s.attempts);
  const stages = useMemo(() => speakStages(corpus), [corpus]);
  const passed = useMemo(() => speakPassedIds(attempts), [attempts]);
  const posIx = useMemo(() => speakPathPosition(stages, passed), [stages, passed]);
  const states = useMemo(() => stages.map((s) => speakStageState(s, passed)), [stages, passed]);

  const worlds = useMemo(() => {
    const by = new Map<number, { stages: SpeakStage[]; ixs: number[] }>();
    stages.forEach((s, ix) => {
      if (!by.has(s.world)) by.set(s.world, { stages: [], ixs: [] });
      by.get(s.world)!.stages.push(s);
      by.get(s.world)!.ixs.push(ix);
    });
    return [...by.entries()].sort((a, b) => a[0] - b[0]);
  }, [stages]);

  // Land the viewport on the avatar, not at world 1 forever: cumulative
  // section heights up to the current station, once, on mount.
  const scrollRef = useRef<ScrollView>(null);
  const scrolled = useRef(false);
  const targetY = useMemo(() => {
    const HEADER = 96; // world eyebrow + title + meaning line + margins
    let y = 0;
    for (const [, w] of worlds) {
      const here = w.ixs.indexOf(posIx);
      if (here >= 0) return Math.max(0, y + HEADER + here * ROW_H - 180);
      y += HEADER + w.stages.length * ROW_H + 26;
    }
    return 0;
  }, [worlds, posIx]);

  const openStage = (s: SpeakStage) => router.push(`/speak?stage=${s.id}`);

  if (!stages.length) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, gap: 18 }}>
          <MascotAvatar size={80} rounded={false} state="thinking" />
          <TX role="body" color={t.txMuted} center>{T.lessonSoon}</TX>
        </View>
        <TabBar />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <LinearGradient colors={[t.accA(10), 'transparent']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.5 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300 }} />
      <ScrollView
        ref={scrollRef}
        onContentSizeChange={() => {
          if (scrolled.current) return;
          scrolled.current = true;
          scrollRef.current?.scrollTo({ y: targetY, animated: false });
        }}
        contentContainerStyle={{ paddingTop: insets.top + 18, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center', marginBottom: 24, paddingHorizontal: 24 }}>
          <TX font="semi" role="meta" ls={3} color={t.txSubtle}>
            {T.tabSpeak.toUpperCase()}
          </TX>
          <TX font="serifI" size={30} role="display" center style={{ marginTop: 6 }}>
            {T.speakMapT}
          </TX>
        </View>

        {worlds.map(([world, w]) => (
          <WorldSection
            key={world}
            world={world}
            stations={w.stages}
            states={w.ixs.map((ix) => states[ix])}
            nodeStates={w.ixs.map((ix): NodeState => (states[ix].cleared ? 'cleared' : ix === posIx ? 'current' : ix < posIx ? 'cleared' : 'locked'))}
            onOpen={openStage}
            reduceMotion={reduceMotion}
          />
        ))}
      </ScrollView>
      <TabBar />
    </View>
  );
}
