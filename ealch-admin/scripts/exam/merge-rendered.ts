// Carry the RENDERER's writes across an authoring upsert.
//
// `parts` and `interlocutor` are each ONE jsonb column, so writing the authored
// value replaces everything in it — including the `audioRef` and measured
// `durationS` that exist only because render-audio.ts put them there.
//
// This happened once already, on `parts`: re-running the authoring script after
// a render silently wiped all thirty clips off blanc-01. The bytes were still in
// R2; nothing pointed at them.
//
// THE SAME HOLE WAS STILL OPEN ON `interlocutor`, which the fix at the time did
// not cover. The renderer writes a clip onto each of the bank's thirteen turns
// with jsonb_set, and `interlocutor = excluded.interlocutor` writes the authored
// bank straight over them. blanc-01 is published with those thirteen clips, so
// re-running its authoring script would have dropped them from a live paper.
//
// In both cases a unit keeps its clip only when its TEXT is unchanged: an edited
// transcript makes the old recording wrong, and its assetKey would not match
// anyway, so the next render picks it up.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';

type Parts = NonNullable<ExamTask['parts']>;
type Bank = NonNullable<ExamTask['interlocutor']>;
type Turn = Bank['opening'];
type Debate = NonNullable<ExamTask['debate']>;

/** Keep a rendered clip when the text it was rendered from has not moved. */
function keepClip<T extends { text?: string; audioRef?: string | null; durationS?: number }>(
  authored: T,
  existing: T | undefined
): T {
  if (!existing || existing.text !== authored.text || !existing.audioRef) return authored;
  return {
    ...authored,
    audioRef: existing.audioRef,
    ...(existing.durationS ? { durationS: existing.durationS } : {}),
  };
}

export function mergeRenderedParts(authored: Parts, existing: Parts | null): Parts {
  if (!existing) return authored;
  return authored.map((part, i) => keepClip(part, existing[i]));
}

/**
 * The same carry, for the recorded interlocutor.
 *
 * Matched by ID rather than by position: the answer bank is a set of facts and
 * reordering it is an ordinary edit, whereas the parts array is a document in
 * sequence. Matching turns positionally would attach a clip of "le prix" to
 * "l'horaire" the first time an answer moved.
 */
export function mergeRenderedBank(authored: Bank, existing: Bank | null): Bank {
  if (!existing) return authored;
  const byId = new Map<string, Turn>();
  for (const t of [existing.opening, existing.catchAll, existing.closing, ...existing.answers]) {
    byId.set(t.id, t);
  }
  return {
    opening: keepClip(authored.opening, byId.get(authored.opening.id)),
    catchAll: keepClip(authored.catchAll, byId.get(authored.catchAll.id)),
    closing: keepClip(authored.closing, byId.get(authored.closing.id)),
    answers: authored.answers.map((a) => keepClip(a, byId.get(a.id))),
  };
}

/**
 * The same carry again, for the DELF debate bank.
 *
 * A THIRD jsonb column with the identical hole. It was opened on `parts`, where
 * it wiped thirty clips off a rendered paper; the fix at the time did not cover
 * `interlocutor`, and that had to be closed separately once thirteen more clips
 * were at risk on a published paper. `debate` is new, holds twenty-six turns,
 * and is written the same way — so it is closed here before it can cost
 * anything rather than after.
 *
 * Matched by ID like the interlocutor bank, and for the same reason: axes and
 * their moves are a set, and reordering them is an ordinary edit. Matching
 * positionally would attach the recording of one objection to another the first
 * time an axis moved.
 */
export function mergeRenderedDebate(authored: Debate, existing: Debate | null): Debate {
  if (!existing) return authored;
  const byId = new Map<string, Turn>();
  for (const t of [existing.opening, existing.clarify, existing.closing]) byId.set(t.id, t);
  for (const axis of existing.axes) for (const m of axis.moves) byId.set(m.id, m as unknown as Turn);
  return {
    ...authored,
    opening: keepClip(authored.opening, byId.get(authored.opening.id)),
    clarify: keepClip(authored.clarify, byId.get(authored.clarify.id)),
    closing: keepClip(authored.closing, byId.get(authored.closing.id)),
    axes: authored.axes.map((axis) => ({
      ...axis,
      moves: axis.moves.map((m) => keepClip(m, byId.get(m.id) as typeof m | undefined)),
    })),
  };
}
