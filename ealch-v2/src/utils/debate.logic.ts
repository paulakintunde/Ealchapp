// The DELF B2 débat: phase 2 of Production orale.
//
// ── Why this is not interlocutor.logic.ts ──────────────────────────────────
//
// That module models an INFORMATION EXCHANGE. The candidate rings an agency and
// asks about a document that withholds facts; the bank hands them out one at a
// time; `coverageOf` reports which facts were extracted, and that coverage is
// direct evidence for the grader. It is the right model for TEF and TCF.
//
// DELF inverts every part of it. The examiner challenges rather than answers.
// The bank holds objections rather than facts. It runs 10 to 13 minutes against
// about three. And it branches on which side the candidate argued, which is not
// known until they have spoken for five to seven minutes.
//
// The one that settles it is not length. It is that COVERAGE WOULD MISREPORT: a
// candidate who met every objection by agreeing with it has argued badly, and
// `coverageOf` would score them full marks for having heard all of them. So the
// success measure changes, not just the bank size.
//
// See ealch-admin/DESIGN-delf-debate.md for the design this implements.
//
// Pure logic, no device, no I/O — same contract as interlocutor.logic.ts.

import { cueMatches } from './interlocutor.logic.ts';
import type { InterlocutorTurn } from './interlocutor.logic.ts';
// The debate SHAPES live in the schema, not here.
//
// schema.ts imports nothing on purpose: it is the standalone contract both
// repos type their content from, and ealch-admin reads it cross-repo. That is
// why ExamInterlocutor is declared there AND again in interlocutor.logic.ts,
// two definitions that can drift apart with nothing to notice.
//
// This module does not repeat that. It owns the state machine and imports the
// shapes, so there is one declaration of what a debate is.
import type {
  DebateAxis,
  DebateMove,
  DebateMoveKind,
  DebateSide,
  ExamDebate,
} from '../content/schema.ts';

export type { DebateAxis, DebateMove, DebateMoveKind, DebateSide, ExamDebate };

/* ── Side detection ───────────────────────────────────────────────────────── */

/**
 * Which side the candidate argued.
 *
 * Deliberately conservative. Attacking the wrong side is the worst failure
 * available here, because the candidate's correct answer then looks like a
 * non-answer and they lose marks for our mistake. So a tie, or nothing matched,
 * or both sides matched equally, all return `unclear` — and `unclear` has a
 * move of its own rather than a default guess.
 */
export function detectSide(transcript: string, cues: ExamDebate['sideCues']): DebateSide {
  const score = (list: string[]) => list.filter((c) => cueMatches(transcript, c)).length;
  const pour = score(cues.pour);
  const contre = score(cues.contre);
  if (pour === contre) return 'unclear';
  return pour > contre ? 'pour' : 'contre';
}

/* ── The state machine ────────────────────────────────────────────────────── */

export type DebateState = {
  side: DebateSide;
  /** Axis currently open, by id. */
  axisId: string | null;
  /** How deep the open axis has been pushed. */
  depth: 0 | 1 | 2 | 3;
  /** Every move already played, so nothing repeats. */
  playedIds: string[];
  /** Axes closed, either exhausted or abandoned. */
  closedAxisIds: string[];
  /** Seconds elapsed in phase 2. The debate ends on this, never on exhaustion. */
  elapsedS: number;
};

export const openingState = (): DebateState => ({
  side: 'unclear',
  axisId: null,
  depth: 0,
  playedIds: [],
  closedAxisIds: [],
  elapsedS: 0,
});

/** The blueprint's window: 10 to 13 minutes. We close at the top of it. */
export const DEBATE_MAX_S = 13 * 60;
/** Below this the examiner keeps going even if the axes are spent — a silent
 *  examiner is a broken exam, and re-opening the worst-handled axis is what a
 *  real one does. */
export const DEBATE_MIN_S = 10 * 60;

export type DebateSelection =
  | { kind: 'clarify'; turn: InterlocutorTurn }
  | { kind: 'move'; turn: DebateMove; axis: DebateAxis }
  | { kind: 'closing'; turn: InterlocutorTurn };

/**
 * Did the candidate engage with what was just put to them?
 *
 * The distinction the depth rule turns on. Engaging advances the axis; not
 * engaging re-puts the same point differently, because pushing deeper against
 * someone who did not answer the shallow version produces a debate that is
 * hard for the wrong reason.
 *
 * A LENGTH heuristic, and named as one. It cannot tell a good answer from a
 * bad one and does not try — that is the grader's job, and the grader has the
 * transcript. What it can tell is a substantive turn from "oui" or silence,
 * which is all the state machine needs.
 */
export function engaged(reply: string): boolean {
  return reply.trim().split(/\s+/).filter(Boolean).length >= 12;
}

/**
 * Has the candidate abandoned the position they started from?
 *
 * Not "did they concede a point" — conceding is the B2 skill, and the
 * descriptor is *confirmer et nuancer*. This fires when the side they are now
 * arguing is the opposite of the one they opened with, which is a different
 * thing from qualifying.
 */
export function hasRetreated(state: DebateState, reply: string, cues: ExamDebate['sideCues']): boolean {
  if (state.side === 'unclear') return false;
  const now = detectSide(reply, cues);
  return now !== 'unclear' && now !== state.side;
}

/**
 * The examiner's next turn.
 *
 * Order of decision, and each step exists for a reason:
 *   1. Out of time     → close. The clock ends the debate, never the bank.
 *   2. Side unclear    → ask. Never guess; see detectSide.
 *   3. Retreated       → a retreat move, if one is left. Asks WHY, because a
 *                        reasoned change of mind is not a fault and an
 *                        unreasoned one is.
 *   4. Axis open       → deeper if they engaged, same depth re-put if not.
 *   5. Otherwise       → open the next axis against their side.
 *   6. Axes spent      → re-open the worst-handled axis rather than fall silent.
 */
export function selectDebateMove(
  state: DebateState,
  reply: string,
  bank: ExamDebate
): DebateSelection {
  if (state.elapsedS >= DEBATE_MAX_S) return { kind: 'closing', turn: bank.closing };
  if (state.side === 'unclear') return { kind: 'clarify', turn: bank.clarify };

  const played = new Set(state.playedIds);
  const usable = bank.axes.filter((a) => a.against === state.side);
  // A retreat move is reachable ONLY from the retreat branch below. It sits at
  // a depth like any other move, so a ladder that selected on depth alone
  // served it to a candidate who had not retreated — asking "what changed your
  // mind?" of someone who has not changed it. Nonsense to a real candidate, and
  // it cost them a turn.
  const find = (a: DebateAxis, d: number) =>
    a.moves.find((m) => m.depth === d && m.kind !== 'retreat' && !played.has(m.id));

  // 3. A retreat is answered before anything else: the position they were
  //    defending has changed, so pushing the open axis deeper would be pushing
  //    against something they no longer hold.
  if (hasRetreated(state, reply, bank.sideCues)) {
    for (const axis of usable) {
      const r = axis.moves.find((m) => m.kind === 'retreat' && !played.has(m.id));
      if (r) return { kind: 'move', turn: r, axis };
    }
  }

  // 4. An axis is open.
  const open = state.axisId ? usable.find((a) => a.id === state.axisId) : undefined;
  if (open && !state.closedAxisIds.includes(open.id)) {
    const want = engaged(reply) ? state.depth + 1 : state.depth;
    const next = find(open, want) ?? find(open, state.depth + 1);
    if (next) return { kind: 'move', turn: next, axis: open };
  }

  // 5. Open the next axis that has a depth-1 move left.
  for (const axis of usable) {
    if (state.closedAxisIds.includes(axis.id)) continue;
    const first = find(axis, 1);
    if (first) return { kind: 'move', turn: first, axis };
  }

  // 6. Everything is spent and there is still time.
  //
  //    Closing here is what the first version did and it is wrong: a bank of
  //    two axes at three depths is six turns, about four and a half minutes,
  //    and the blueprint's FLOOR is ten. An examiner who stops at four has cut
  //    the épreuve in half, and the candidate loses the marks they would have
  //    earned in the minutes that never happened.
  //
  //    So re-open rather than close, and re-open where the candidate was
  //    weakest — the axis whose deepest engaged move was shallowest. That is
  //    what a real examiner does, it is the most informative use of the
  //    remaining time, and repeating a point the candidate handled badly is a
  //    fair thing to do to them.
  const deepestOn = (a: DebateAxis) => {
    const hit = a.moves.filter((m) => played.has(m.id) && m.kind !== 'retreat');
    return hit.length ? Math.max(...hit.map((m) => m.depth)) : 0;
  };
  const weakest = [...usable]
    .filter((a) => a.moves.some((m) => m.kind !== 'retreat'))
    .sort((a, b) => deepestOn(a) - deepestOn(b))[0];

  if (weakest) {
    // Its deepest non-retreat move: re-putting the hardest version is the
    // point, not walking the ladder again from the bottom.
    const again = [...weakest.moves]
      .filter((m) => m.kind !== 'retreat')
      .sort((a, b) => b.depth - a.depth)[0];
    if (again) return { kind: 'move', turn: again, axis: weakest };
  }

  return { kind: 'closing', turn: bank.closing };
}

/** Fold a played turn back into the state. */
export function advance(state: DebateState, sel: DebateSelection, spentS: number): DebateState {
  const elapsedS = state.elapsedS + spentS;
  if (sel.kind !== 'move') return { ...state, elapsedS };
  const closing = sel.axis.moves.every(
    (m) => m.id === sel.turn.id || state.playedIds.includes(m.id)
  );
  return {
    ...state,
    elapsedS,
    axisId: sel.axis.id,
    depth: sel.turn.depth,
    playedIds: [...state.playedIds, sel.turn.id],
    closedAxisIds: closing ? [...state.closedAxisIds, sel.axis.id] : state.closedAxisIds,
  };
}

/* ── What the grader is given ─────────────────────────────────────────────── */

export type DebateReport = {
  /** The side they opened with, and whether they still held it at the end. */
  side: DebateSide;
  held: boolean;
  /** Deepest depth engaged with, per axis that was opened. */
  depthByAxis: Record<string, number>;
  /** Concession probes that drew a substantive answer rather than a collapse. */
  concessionsAnswered: number;
  /** Retreat moves that had to fire at all. */
  retreatsTriggered: number;
  /** Axes opened, of those available against their side. */
  axesOpened: number;
  axesAvailable: number;
};

/**
 * The report handed to the grader, replacing `coverageOf`.
 *
 * Direct evidence, not proxy: whether a concession probe drew an answer is a
 * fact about what happened, the same way "did they ask about the price" was.
 *
 * NOTE FOR THE GRADER PROMPT: a retreat is not automatically a fault. B2's
 * descriptor is *confirmer et nuancer ses idées* — nuancing under a good
 * objection is the skill being tested. What distinguishes a candidate is
 * whether they gave a reason, which is why the retreat move asks for one. A
 * grader told only "retreated: 1" will mark that wrongly.
 */
export function debateReport(
  state: DebateState,
  bank: ExamDebate,
  endSide: DebateSide,
  concessionsAnswered: number
): DebateReport {
  const played = new Set(state.playedIds);
  const usable = bank.axes.filter((a) => a.against === state.side);
  const depthByAxis: Record<string, number> = {};
  let retreats = 0;
  let opened = 0;

  for (const axis of usable) {
    const hit = axis.moves.filter((m) => played.has(m.id));
    if (hit.length === 0) continue;
    opened += 1;
    depthByAxis[axis.id] = Math.max(...hit.map((m) => m.depth));
    retreats += hit.filter((m) => m.kind === 'retreat').length;
  }

  return {
    side: state.side,
    held: state.side !== 'unclear' && (endSide === state.side || endSide === 'unclear'),
    depthByAxis,
    concessionsAnswered,
    retreatsTriggered: retreats,
    axesOpened: opened,
    axesAvailable: usable.length,
  };
}
