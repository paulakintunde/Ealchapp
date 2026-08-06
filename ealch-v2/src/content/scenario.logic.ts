// The role-play turn's state model — the pure island behind ScenarioView.
//
// WHY THIS FILE EXISTS
//
// The in-lesson role play used to be a single component holding a mic call, a
// reveal flag and an index, and it got three things wrong that no test could
// see because none of it was separable:
//
//   1. It scored the learner against ONE sentence. A conversation does not
//      have one right answer, and marking "Je voudrais un sac, s'il vous
//      plaît" as "not quite" because the author wrote "Oui, je cherche un sac"
//      teaches the learner that French is a cloze test.
//   2. It threw the conversation away. Each turn remounted and the previous
//      one vanished, so a learner walked five isolated cards and never saw the
//      back-and-forth the scenario existed to demonstrate.
//   3. It had no beat. The coach's line, the prompt to answer and the controls
//      all appeared in the same frame, which reads as a form to fill in rather
//      than someone waiting for you to speak.
//
// (1) is `bestReply` below, (2) is `transcriptOf`, (3) is the BEAT timings.
// All three are pure and unit-tested; ScenarioView.tsx is rendering only.

// Relative, with the extension: this island is run directly by `node --test`,
// which does not read the bundler's `@/` alias. Same rule as scene.logic.ts.
import { scoreUtterance, type Verdict, type VerdictBars } from '../utils/score.ts';
import type { ScenarioTurn } from './schema.ts';

/** One thing the learner could have said, with its meaning. */
export type Reply = { fr: string; en?: string };

/**
 * Where a turn is. The learner is asked, tries (aloud or in their head), and
 * only then sees what works — never the other way round, or the reveal answers
 * the question for them.
 */
export type TurnPhase = 'ask' | 'reveal';

/** What the learner did to get to the reveal. */
export type Attempt =
  /** Spoke, and the recognizer produced a transcript. */
  | { kind: 'spoke'; heard: string; score: number; verdict: Verdict; matched: Reply }
  /** Tried to speak, but nothing usable came back. `reason` is what to SAY
   *  about it — see unheardReason. */
  | { kind: 'unheard'; reason: UnheardReason }
  /** Asked to see the answers without speaking. This is a first-class way
   *  through the turn, not a failure — see the note on `revealOnly` below. */
  | { kind: 'shown' };

/* ─── Why there was no transcript ─────────────────────────────────────────── */

/**
 * 'silent'  the recognizer listened and heard nothing. The learner's problem.
 * 'denied'  microphone permission is refused. Fixable, in Settings.
 * 'blocked' the recognizer never ran at all. NOT the learner's problem.
 */
export type UnheardReason = 'silent' | 'denied' | 'blocked';

/**
 * Which of those happened, from `SttResult.error`.
 *
 * WHY THIS EXISTS, found on a Pixel 6 rather than in a test:
 *
 * Tapping Speak opened the mic for 84ms and gave up. The device was in
 * airplane mode, so Google's network recognizer failed with
 * ERR_INTERNET_DISCONNECTED; it fell back to the on-device recognizer, which
 * reported LANGUAGE_PACK_ERROR (code 13) because the FRENCH SPEECH PACK IS NOT
 * DOWNLOADED. The app received 'language-not-supported' and told the learner
 * "Not heard, your line is shown."
 *
 * That sentence blames the learner for the phone's missing download. They will
 * say it again, louder, and it will fail again, because nothing they can do
 * with their voice will fix it. A learner offline on a train is the ordinary
 * case for this app, not an edge one.
 *
 * So: a hard error code means the recognizer did not do its job, and the app
 * must say so. Only 'no-speech' (or no code at all) means it genuinely
 * listened and heard nothing.
 */
export function unheardReason(error?: string): UnheardReason {
  if (!error || error === 'no-speech') return 'silent';
  if (error === 'not-allowed') return 'denied';
  return 'blocked';
}

/* ─── Accepted answers ────────────────────────────────────────────────────── */

/**
 * Every reply that counts as correct at this turn, model first.
 *
 * The model line leads because it is the one the author chose to teach; the
 * alternatives follow in authored order. Deduplicated loosely so a scenario
 * that repeats the model inside `alts` (which the schema validator also
 * rejects) cannot render the same sentence twice on the reveal.
 */
export function acceptedReplies(turn: ScenarioTurn): Reply[] {
  const out: Reply[] = [{ fr: turn.user, en: turn.userEn }];
  const seen = new Set([fold(turn.user)]);
  for (const a of turn.alts ?? []) {
    const key = fold(a.fr);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ fr: a.fr, en: a.en });
  }
  return out;
}

/**
 * Score a transcript against every accepted reply and keep the best.
 *
 * Best-of, not model-only: the learner is answering a person, so any reply
 * that works IS the right answer and must be graded as one. Ties keep the
 * earliest reply, which means an exact-scoring match on the model wins over an
 * equally-scoring alternative and the reveal stays anchored to what was taught.
 *
 * An empty transcript scores 0 against everything, so this returns the model
 * with verdict 'none' rather than picking an arbitrary alternative.
 */
export function bestReply(
  turn: ScenarioTurn,
  heard: string,
  bars: VerdictBars
): { score: number; verdict: Verdict; matched: Reply } {
  const replies = acceptedReplies(turn);
  let best = { score: -1, verdict: 'none' as Verdict, matched: replies[0] };
  for (const r of replies) {
    const s = scoreUtterance(r.fr, heard, bars);
    if (s.score > best.score) best = { score: s.score, verdict: s.verdict, matched: r };
  }
  return best;
}

/* ─── The conversation so far ─────────────────────────────────────────────── */

/** A line in the visible transcript. */
export type Line =
  | { who: 'ai'; fr: string; en: string }
  | { who: 'me'; attempt: Attempt; turn: ScenarioTurn };

/**
 * The scrollback for a conversation stopped at `index`, given what the learner
 * did on each completed turn.
 *
 * This is what makes the section show a CONVERSATION rather than a stack of
 * flashcards: turn 4 is read with turns 1-3 still above it, which is the only
 * way the shape of the exchange is visible at all.
 *
 * Completed turns only — the turn at `index` is live and rendered separately,
 * because it has controls and a phase and the ones behind it do not.
 */
export function transcriptOf(turns: ScenarioTurn[], attempts: Attempt[], index: number): Line[] {
  const out: Line[] = [];
  for (let i = 0; i < Math.min(index, turns.length); i++) {
    const t = turns[i];
    out.push({ who: 'ai', fr: t.ai, en: t.en });
    const a = attempts[i];
    if (a) out.push({ who: 'me', attempt: a, turn: t });
  }
  return out;
}

/* ─── Pacing ──────────────────────────────────────────────────────────────── */

/**
 * The beats, in milliseconds.
 *
 * A conversation has silence in it. The coach's line lands and speaks, and
 * then there is a pause before the learner is asked for anything — long enough
 * to read and hear the line, short enough that it never feels like the app has
 * stalled. The reveal has its own smaller beat so the answers do not slam in
 * on the same frame the learner stopped talking.
 *
 * Deliberately NOT auto-advancing past the reveal. The learner reads two or
 * three alternative answers there; a timer would take that away from whoever
 * reads slowest, which is exactly the learner the alternatives are for.
 */
export const BEAT = {
  /** Coach's bubble on screen (and speaking) before "your turn" appears. */
  prompt: 1200,
  /** Attempt finished before the answers fade in. */
  reveal: 400,
} as const;

/* ─── helpers ─────────────────────────────────────────────────────────────── */

/** Same fold the schema validator uses for "is this the same line". */
function fold(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
