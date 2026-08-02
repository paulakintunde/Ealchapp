// The scene player — Lesson Architecture v2, section 5.
//
// The old `story` section renders a fixed array of bubbles all at once, which
// is a screenplay on a screen: the learner's eye reaches the punchline before
// the setup. This walks the same material one beat at a time, so the story
// happens at the learner's pace and can INTERRUPT itself at the moment their
// instinct causes the failure.
//
// Reused by mission 1 (where it goes wrong) and mission 13 (where it goes
// right) of every lesson in the product, which is why it is a component rather
// than something the muettes lesson owns.
//
// All sequencing lives in scene.logic.ts and is unit-tested. This file is
// rendering and gestures only. In particular, the rule that the BREAK PLAYS ON
// A CORRECT CHOICE is enforced there, not here — see the note in that file.

import { useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { TX } from '@/components/Type';
import { Press, Button } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { RichImage } from '@/components/LessonRich';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { sound } from '@/services';
import {
  advance,
  breakFraming,
  choose,
  followUpFor,
  initialSceneState,
  isBlocked,
  isComplete,
  sceneProgress,
} from '@/content/scene.logic';
import type { SceneBeat, SceneSetting } from '@/content/schema';

type PlayFn = (id: string, text: string) => void;

export function ScenePlayer({
  title,
  setting,
  beats,
  closing,
  onPlay,
  playingId,
  onComplete,
}: {
  title: string;
  setting?: SceneSetting;
  beats: SceneBeat[];
  closing?: { text: string };
  onPlay?: PlayFn;
  playingId?: string | null;
  /** Fires once the learner walks past the final beat. */
  onComplete?: () => void;
}) {
  const t = useTheme();
  const T = useT();
  // The establishing card sits before beat 0: place, time, and the illustration.
  const [onSetting, setOnSetting] = useState(!!setting);
  const [state, setState] = useState(initialSceneState);

  const beat = beats[state.index];
  const blocked = isBlocked(beats, state);
  const done = isComplete(beats, state);

  const next = () => {
    if (blocked) return;
    if (done) {
      onComplete?.();
      return;
    }
    sound.play('tap');
    setState((s) => advance(beats, s));
  };

  const pick = (optionIndex: number) => {
    const opt = beat.kind === 'choice' ? beat.options[optionIndex] : undefined;
    // Both outcomes get the same sound. A wrong pick here is the instinct the
    // scene is built to surface, not a mistake to buzz at.
    sound.play('flip');
    if (opt && onPlay) onPlay(`scene-opt-${state.index}-${optionIndex}`, opt.fr);
    setState((s) => choose(s, state.index, optionIndex));
  };

  if (onSetting && setting) {
    return <SettingCard title={title} setting={setting} onStart={() => { sound.play('tap'); setOnSetting(false); }} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <SceneProgress value={sceneProgress(beats, state)} />

      {/* NOT a Press wrapping the whole beat.
          The beat's own content is interactive — a bubble plays its audio, a
          choice takes a pick — and a nested Press swallows the tap before the
          outer one sees it. So "tap anywhere to continue" was true only of the
          empty margins beside the bubble: the learner had to find the dead
          space to move on, and tapping the thing they were reading did nothing
          that looked like progress.

          An explicit button is what the screen was already pretending to be,
          and it can say whether it is available. */}
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 20 }}>
        <BeatView
          beat={beat}
          index={state.index}
          state={state}
          beats={beats}
          onPlay={onPlay}
          playingId={playingId}
          onPick={pick}
        />
      </View>

      {done && closing ? (
        <View style={{ paddingHorizontal: 24, paddingBottom: 8 }}>
          <TX role="body" color={t.txSecondary} center>{closing.text}</TX>
        </View>
      ) : null}

      <View style={{ paddingHorizontal: 24, paddingBottom: 16, paddingTop: 8 }}>
        <Button
          label={done ? T.sceneEnd : T.continueT}
          variant={blocked ? 'outline' : 'primary'}
          icon={blocked ? undefined : 'chevronRight'}
          disabled={blocked}
          onPress={next}
        />
        {blocked ? (
          <TX role="meta" color={t.txSubtle} center style={{ marginTop: 8 }}>
            {T.sceneChooseFirst}
          </TX>
        ) : null}
      </View>
    </View>
  );
}

/** The thin bar at the top. No step counter: "4 of 11" turns a story into a
 *  form to complete. */
function SceneProgress({ value }: { value: number }) {
  const t = useTheme();
  return (
    <View style={{ height: 3, backgroundColor: t.line(8) }}>
      <View style={{ height: 3, width: `${Math.round(value * 100)}%`, backgroundColor: t.acc }} />
    </View>
  );
}

function SettingCard({ title, setting, onStart }: { title: string; setting: SceneSetting; onStart: () => void }) {
  const t = useTheme();
  const T = useT();
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 12, gap: 18 }}>
      {setting.image ? <RichImage refKey={setting.image} /> : null}
      <View style={{ gap: 6 }}>
        <TX role="titleLg" font="semi">{title}</TX>
        <TX role="body" color={t.txSecondary}>{setting.place}</TX>
        {setting.city || setting.time ? (
          <TX role="bodySm" color={t.txMuted}>
            {[setting.city, setting.time].filter(Boolean).join(' · ')}
          </TX>
        ) : null}
      </View>
      <View style={{ flex: 1 }} />
      <View style={{ paddingBottom: 16 }}>
        {/* OUTLINE, not primary. The pager's own Next bar sits directly beneath
            this, so two full-width accent buttons appeared ~200dp apart doing
            different things — one plays the scene, one skips it — with nothing
            saying which was the way forward. The scene's control is the
            optional one, so it is the one that steps back. */}
        <Button label={T.sceneStart} variant="outline" icon="play" onPress={onStart} />
      </View>
    </View>
  );
}

/* ─── Beats ──────────────────────────────────────────────────────────────── */

function BeatView({
  beat,
  index,
  state,
  beats,
  onPlay,
  playingId,
  onPick,
}: {
  beat: SceneBeat;
  index: number;
  state: ReturnType<typeof initialSceneState>;
  beats: SceneBeat[];
  onPlay?: PlayFn;
  playingId?: string | null;
  onPick: (i: number) => void;
}) {
  switch (beat.kind) {
    case 'narration':
      return <NarrationBeat text={beat.text} />;
    case 'bubble':
      return <BubbleBeat beat={beat} id={`scene-b${index}`} onPlay={onPlay} playingId={playingId} />;
    case 'choice':
      return <ChoiceBeat beat={beat} index={index} state={state} beats={beats} onPick={onPick} />;
    case 'break':
      return <BreakBeat beat={beat} index={index} state={state} beats={beats} id={`scene-brk${index}`} onPlay={onPlay} playingId={playingId} />;
    case 'resolve':
      return <ResolveBeat text={beat.text} />;
  }
}

function NarrationBeat({ text }: { text: string }) {
  const t = useTheme();
  return <TX role="titleSm" color={t.txSecondary} style={{ lineHeight: 27 }}>{text}</TX>;
}

function ResolveBeat({ text }: { text: string }) {
  const t = useTheme();
  return (
    <View style={{ gap: 10 }}>
      <View style={{ height: 1, backgroundColor: t.line(12), marginBottom: 6 }} />
      <TX role="titleSm" font="med" style={{ lineHeight: 27 }}>{text}</TX>
    </View>
  );
}

function BubbleBeat({
  beat,
  id,
  onPlay,
  playingId,
}: {
  beat: Extract<SceneBeat, { kind: 'bubble' }>;
  id: string;
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  const t = useTheme();
  const mine = beat.from === 'you';
  const on = playingId === id;
  return (
    <View style={{ alignItems: mine ? 'flex-end' : 'flex-start', gap: 6 }}>
      {beat.speaker ? (
        <TX role="meta" color={t.txSubtle}>{beat.speaker}</TX>
      ) : null}
      <Press
        cue={null}
        onPress={() => onPlay?.(id, beat.fr)}
        accessibilityLabel={beat.fr}
        style={{
          maxWidth: '92%',
          borderRadius: 18,
          borderWidth: 1,
          // A full border, never a single coloured edge: the theme's card
          // treatment throughout the app.
          borderColor: on ? t.accA(45) : t.line(10),
          backgroundColor: mine ? t.accA(8) : t.card,
          paddingHorizontal: 16,
          paddingVertical: 13,
          gap: 5,
        }}
      >
        {/* flexShrink: 1, NOT flex: 1.
            The bubble hugs its content, so `flex: 1` asked the text to fill a
            width nobody had decided yet — RN resolved that against the shortest
            word and clipped the rest, which is why "Pardon ?" rendered as "Pa".
            Shrink-only lets the text measure itself first and give way only when
            the bubble really is at its 92% ceiling. Same failure the XL word
            card hit; see the LAYOUT RULE note in LessonRich. */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TX font="serifI" role="titleSm" style={{ flexShrink: 1 }}>{beat.fr}</TX>
          <Icon name="speaker" size={15} color={on ? t.acc : t.txNonText} />
        </View>
        <TX role="bodySm" color={t.txMuted}>{beat.en}</TX>
        {beat.ipa ? <TX role="meta" color={t.txSubtle}>{beat.ipa}</TX> : null}
      </Press>
      {beat.stage ? (
        <TX role="meta" color={t.txSubtle} style={{ fontStyle: 'italic', maxWidth: '92%' }}>{beat.stage}</TX>
      ) : null}
    </View>
  );
}

/** The commitment beat. Both options are plausible and neither is marked until
 *  the learner picks, so the choice is real rather than cued by styling. */
function ChoiceBeat({
  beat,
  index,
  state,
  beats,
  onPick,
}: {
  beat: Extract<SceneBeat, { kind: 'choice' }>;
  index: number;
  state: ReturnType<typeof initialSceneState>;
  beats: SceneBeat[];
  onPick: (i: number) => void;
}) {
  const t = useTheme();
  const picked = state.choices[index];
  const answered = picked !== undefined;
  const follow = answered ? followUpFor(beats, state, index) : null;

  return (
    <View style={{ gap: 16 }}>
      <TX role="titleLg" font="semi">{beat.prompt}</TX>
      <View style={{ gap: 10 }}>
        {beat.options.map((o, i) => {
          const isPicked = picked === i;
          return (
            <Press
              key={i}
              cue={null}
              onPress={() => onPick(i)}
              disabled={answered}
              accessibilityLabel={`${o.fr} ${o.respell ?? ''}`}
              style={{
                borderRadius: 16,
                borderWidth: 1,
                borderColor: isPicked ? t.acc : t.line(10),
                backgroundColor: isPicked ? t.accA(8) : t.card,
                opacity: answered && !isPicked ? 0.5 : 1,
                paddingHorizontal: 16,
                paddingVertical: 14,
                gap: 4,
              }}
            >
              <TX font="serifI" role="title">{o.fr}</TX>
              {o.respell ? <TX role="body" color={t.txSecondary}>{o.respell}</TX> : null}
              <TX role="bodySm" color={t.txMuted}>{o.en}</TX>
            </Press>
          );
        })}
      </View>
      {follow ? <TX role="body" color={t.txSecondary}>{follow}</TX> : null}
    </View>
  );
}

/** The full-screen interrupt. The conversation stops, and what the learner
 *  would have said sits against what exists, both in large type.
 *
 *  This renders after a CORRECT choice too, with a confirming lead-in instead
 *  of a corrective one. See scene.logic.ts.
 *
 *  Audio-first: the recording plays before the reading resolves, so the ear
 *  answers the question the eye would otherwise answer for it. */
function BreakBeat({
  beat,
  index,
  state,
  beats,
  id,
  onPlay,
  playingId,
}: {
  beat: Extract<SceneBeat, { kind: 'break' }>;
  index: number;
  state: ReturnType<typeof initialSceneState>;
  beats: SceneBeat[];
  id: string;
  onPlay?: PlayFn;
  playingId?: string | null;
}) {
  const t = useTheme();
  const framing = breakFraming(beats, state, index);

  // Audio-first: hold the text back briefly on entry while the model plays.
  const reveal = useRef(new Animated.Value(beat.audio?.audioFirst ? 0 : 1)).current;
  const started = useRef(false);
  if (!started.current) {
    started.current = true;
    if (beat.audio?.audioFirst) {
      onPlay?.(id, beat.right.fr);
      Animated.timing(reveal, { toValue: 1, duration: 260, delay: 900, useNativeDriver: true }).start();
    }
  }

  return (
    <View style={{ gap: 18 }}>
      <TX role="meta" color={t.txSubtle} ls={0.8} style={{ textTransform: 'uppercase' }}>
        {framing.mode === 'confirmation' ? 'You got it. Here is what the other option does' : 'What they heard'}
      </TX>

      <TX role="display" font="semi" style={{ lineHeight: 38 }}>{beat.heading}</TX>

      <Animated.View style={{ opacity: reveal, gap: 12 }}>
        <ReadingRow tone="wrong" side={beat.wrong} />
        <ReadingRow tone="right" side={beat.right} onPlay={() => onPlay?.(id, beat.right.fr)} playing={playingId === id} />
      </Animated.View>

      <TX role="body" color={t.txSecondary} style={{ lineHeight: 24 }}>{beat.body}</TX>
      {beat.coach ? (
        <TX role="body" font="med" color={t.txPrimary} style={{ lineHeight: 24 }}>{beat.coach}</TX>
      ) : null}
    </View>
  );
}

function ReadingRow({
  tone,
  side,
  onPlay,
  playing,
}: {
  tone: 'wrong' | 'right';
  side: { fr: string; ipa: string; respell?: string; en: string };
  onPlay?: () => void;
  playing?: boolean;
}) {
  const t = useTheme();
  // The app's existing right/wrong pair (see MissionRich's verdict colours):
  // the accent as text for correct, danger for wrong. Both are contrast-safe
  // in either mode, which a hardcoded green would not be on the dark surface.
  const c = tone === 'right' ? t.accTx : t.danger;
  return (
    <Press
      cue={null}
      onPress={onPlay}
      disabled={!onPlay}
      accessibilityRole={onPlay ? 'button' : 'text'}
      // The tick and cross are icons, and the two rows are told apart by
      // colour. Neither reaches a screen reader, so the verdict is said.
      accessibilityLabel={`${tone === 'right' ? 'Correct' : 'Incorrect'}: ${side.fr}, ${side.en}`}
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(10),
        backgroundColor: t.card,
        paddingHorizontal: 16,
        paddingVertical: 14,
        gap: 4,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Icon name={tone === 'right' ? 'check' : 'x'} size={14} color={c} />
        <TX font="serifI" role="titleLg" style={{ flex: 1 }}>{side.fr}</TX>
        {onPlay ? <Icon name="speaker" size={15} color={playing ? t.acc : t.txNonText} /> : null}
      </View>
      <TX role="body" color={t.txSecondary}>{side.ipa}</TX>
      {side.respell ? <TX role="bodySm" color={t.txMuted}>{side.respell}</TX> : null}
      <TX role="bodySm" color={t.txMuted}>{side.en}</TX>
    </Press>
  );
}
