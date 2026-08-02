// The scene player's state model — the pure island behind ScenePlayer.tsx.
//
// A scene walks beats one at a time. Most beats just advance on tap, but two
// carry real rules, and both are easy to get subtly wrong in a component:
//
//   1. A `choice` beat blocks until the learner picks. That commitment is what
//      makes the correction land: being shown why an answer is wrong after
//      choosing it is a different experience from being told in advance.
//
//   2. The `break` that follows plays WHETHER OR NOT the choice was correct.
//      On a right answer it is framed as "that is right, and here is what the
//      other option would have done to you". This is the one rule most likely
//      to be optimised away by someone later reading it as a penalty screen,
//      so it is encoded here, named, and tested. The break IS the teaching;
//      skipping it for a lucky guess removes the reason the scene exists.
//
// Keeping this out of the component means both rules are verifiable with
// `node --test` instead of by tapping through a bakery on a phone.

import type { SceneBeat } from './schema.ts';

export type SceneState = {
  /** Index of the beat currently on screen. */
  index: number;
  /** What the learner picked at each choice beat, keyed by beat index. */
  choices: Record<number, number>;
};

export const initialSceneState = (): SceneState => ({ index: 0, choices: {} });

/** What the player is waiting for. A `choice` beat waits for input; every
 *  other beat waits for a tap. */
export function isBlocked(beats: SceneBeat[], s: SceneState): boolean {
  const b = beats[s.index];
  return !!b && b.kind === 'choice' && s.choices[s.index] === undefined;
}

/** Advance one beat. A no-op while a choice is unanswered — that is what
 *  "commit before being corrected" means mechanically — and at the end. */
export function advance(beats: SceneBeat[], s: SceneState): SceneState {
  if (isBlocked(beats, s)) return s;
  if (s.index >= beats.length - 1) return s;
  return { ...s, index: s.index + 1 };
}

/** Record a choice. Does NOT advance: the option the learner picked stays on
 *  screen with its follow-up line, and the next tap moves on. */
export function choose(s: SceneState, beatIndex: number, optionIndex: number): SceneState {
  if (s.choices[beatIndex] !== undefined) return s; // first answer stands
  return { ...s, choices: { ...s.choices, [beatIndex]: optionIndex } };
}

/** Whether a given choice beat was answered with the option that works. */
export function choseCorrectly(beats: SceneBeat[], s: SceneState, beatIndex: number): boolean | null {
  const b = beats[beatIndex];
  if (!b || b.kind !== 'choice') return null;
  const picked = s.choices[beatIndex];
  if (picked === undefined) return null;
  return b.options[picked]?.outcome === 'works';
}

/** The coach's line after a choice, which differs by outcome but is never a
 *  scolding: a wrong pick is the instinct almost every English reader has, and
 *  the copy says so. */
export function followUpFor(beats: SceneBeat[], s: SceneState, beatIndex: number): string | null {
  const b = beats[beatIndex];
  if (!b || b.kind !== 'choice') return null;
  const ok = choseCorrectly(beats, s, beatIndex);
  if (ok === null) return null;
  return (ok ? b.followUp?.works : b.followUp?.breaks) ?? null;
}

/** How a break beat should be framed, given what the learner chose before it.
 *
 *  Both framings show the SAME content. The difference is the lead-in, and
 *  `shown` is true in both cases — see the note at the top of this file. */
export type BreakFraming = {
  /** Always true. Named rather than implied so that a future edit removing the
   *  break has to delete this field and explain itself. */
  shown: true;
  /** 'correction' after a wrong pick, 'confirmation' after a right one (or
   *  when the break does not follow a choice at all). */
  mode: 'correction' | 'confirmation';
};

/** The framing for the break beat at `beatIndex`, based on the nearest choice
 *  beat before it. */
export function breakFraming(beats: SceneBeat[], s: SceneState, beatIndex: number): BreakFraming {
  for (let i = beatIndex - 1; i >= 0; i--) {
    if (beats[i].kind !== 'choice') continue;
    const ok = choseCorrectly(beats, s, i);
    // An unanswered choice cannot happen before a later beat (the player
    // blocks), but treat it as a correction rather than skipping the screen.
    return { shown: true, mode: ok === true ? 'confirmation' : 'correction' };
  }
  return { shown: true, mode: 'correction' };
}

/** Progress through the scene, 0..1, for the thin bar at the top. */
export function sceneProgress(beats: SceneBeat[], s: SceneState): number {
  if (beats.length <= 1) return 1;
  return Math.min(1, (s.index + 1) / beats.length);
}

/** Whether the scene has been walked to its final beat. */
export function isComplete(beats: SceneBeat[], s: SceneState): boolean {
  return s.index >= beats.length - 1 && !isBlocked(beats, s);
}

/** The beats a learner has already seen, for the resume recap. */
export function seenBeats(beats: SceneBeat[], s: SceneState): SceneBeat[] {
  return beats.slice(0, s.index + 1);
}
