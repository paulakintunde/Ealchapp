// Phase 7 — the Den narrated-lesson walker. Pure, zero-import beyond schema.ts
// (itself import-free), so this runs under `node --test` with no device, no
// bundler, no TTS engine. The player (app/narrated.tsx) is the thin runtime
// shell around this: it owns timers and `tts.speak` calls, this module owns
// the sequencing logic that decides what step comes next and how long a
// pause should last.
//
// A `LessonNarration` is a tree (stages → segments/interactions); a player
// walks it linearly, one step at a time, pausing at interactions. Flattening
// the tree once into an ordered `NarrationStep[]` — rather than having the
// player re-derive "what's next" from nested indices on every advance — is
// what keeps the player a dumb index-increment loop instead of its own
// re-implementation of this sequencing.

import { isNarrationInteraction, type LessonNarration, type NarrationInteraction, type NarrationSegment, type NarrationStageKind } from './schema.ts';

export type NarrationStep =
  | { kind: 'segment'; stageIndex: number; stage: NarrationStageKind; segment: NarrationSegment }
  | { kind: 'interaction'; stageIndex: number; stage: NarrationStageKind; interaction: NarrationInteraction };

/** Flattens a narration's stages into one ordered walk. Stage order is
 *  trusted as-authored (validateNarration already rejects an out-of-order
 *  stage list at publish time) rather than re-sorted here. */
export function flattenNarration(n: LessonNarration): NarrationStep[] {
  const steps: NarrationStep[] = [];
  n.stages.forEach((st, stageIndex) => {
    st.segments.forEach((seg) => {
      if (isNarrationInteraction(seg)) {
        steps.push({ kind: 'interaction', stageIndex, stage: st.stage, interaction: seg });
      } else {
        steps.push({ kind: 'segment', stageIndex, stage: st.stage, segment: seg });
      }
    });
  });
  return steps;
}

/** One entry per stage that actually has steps, with the flattened index
 *  range it owns — what a stage progress rail ("2 of 7") reads from, without
 *  re-walking `steps` on every render. */
export type StageRange = { stage: NarrationStageKind; stageIndex: number; startStep: number; endStep: number };

export function stageRanges(steps: NarrationStep[]): StageRange[] {
  const ranges: StageRange[] = [];
  steps.forEach((step, i) => {
    const last = ranges[ranges.length - 1];
    if (last && last.stageIndex === step.stageIndex) {
      last.endStep = i;
    } else {
      ranges.push({ stage: step.stage, stageIndex: step.stageIndex, startStep: i, endStep: i });
    }
  });
  return ranges;
}

/** `NarrationSegment.voice` is the authoring-time shorthand; the player needs
 *  a real BCP-47 tag to hand `tts.speak`. Kept as a one-line map rather than
 *  inlined at call sites so there is exactly one place that knows fr → fr-FR. */
export function langForVoice(voice: 'fr' | 'en'): 'fr-FR' | 'en-US' {
  return voice === 'fr' ? 'fr-FR' : 'en-US';
}

// A fixed pause reads as dead air after a one-word cue and as too short a
// window to compose a real PRODUCE answer after a long one (folded panel
// improvement, Phase 7 "Narration pause timing"). Scaling off the preceding
// segment's word count is a cheap proxy for "how long was the prompt" that
// needs no audio duration metadata — real per-segment timing (`startMs`/
// `endMs`) refines this once Phase 4 audio exists, but this floor+scale
// heuristic is what runs before then and remains the floor after.
const INTERACTION_PAUSE_FLOOR_MS = 1500;
const INTERACTION_PAUSE_PER_WORD_MS = 550;
const INTERACTION_PAUSE_CEILING_MS = 8000;

/** How long the player should hold at an interaction before either auto-
 *  advancing (a `repeat`/`check` with no learner input required yet) or
 *  giving up waiting for one (a `produce`/`check` capture timeout).
 *  `precedingText` is the segment the learner is reacting to — `undefined`
 *  when an interaction opens a stage with nothing said yet, which still gets
 *  the floor, not zero. */
export function interactionPauseMs(precedingText?: string): number {
  if (!precedingText) return INTERACTION_PAUSE_FLOOR_MS;
  const words = precedingText.trim().split(/\s+/).filter(Boolean).length;
  const scaled = words * INTERACTION_PAUSE_PER_WORD_MS;
  return Math.min(INTERACTION_PAUSE_CEILING_MS, Math.max(INTERACTION_PAUSE_FLOOR_MS, scaled));
}

/** The nearest preceding segment's text, walking backward from `stepIndex` —
 *  what `interactionPauseMs` scales off, and what a `repeat` interaction
 *  asks the learner to echo. Stops at the interaction itself (never looks
 *  forward) since an interaction reacts to what was just said. */
export function precedingSegmentText(steps: NarrationStep[], stepIndex: number): string | undefined {
  for (let i = stepIndex - 1; i >= 0; i--) {
    const s = steps[i];
    if (s.kind === 'segment') return s.segment.text;
    // Ran into an earlier interaction with nothing spoken between it and
    // this one — there is no text to echo or scale a pause off.
    return undefined;
  }
  return undefined;
}
