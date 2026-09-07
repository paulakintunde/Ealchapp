// The recorded interlocutor: which answer a candidate's question earns.
//
// ── Why recorded, and why matched ───────────────────────────────────────────
//
// TEF EO Section A and TCF EO tâche 2 are candidate-LED: the candidate reads an
// advert and questions the examiner to extract what they need. The examiner
// reacts. Two consequences shape everything here.
//
// FIRST, this cannot reuse the role-play engine. A role-play turn carries a
// TARGET line (`ScenarioTurn.user`) and scores the learner against it. That is
// a recite drill, and applying it here would turn "obtain information" into
// "say this sentence" — the same defect the TextInput was for speaking.
// Nothing in this module knows what the candidate is supposed to say, because
// the exam does not either.
//
// SECOND, the examiner is RECORDED, not generated. A live model would be slow,
// non-deterministic, unavailable offline, and free to say things no rubric
// anticipates. Instead a task carries an authored answer bank, and the
// candidate's transcript selects from it. That keeps the interaction offline,
// repeatable across candidates (two people sitting the same paper meet the
// same examiner), and inside what was reviewed.
//
// ── Coverage is the real score ──────────────────────────────────────────────
//
// The blueprint is explicit that Section A is judged partly on whether the
// questions were APPROPRIATE AND COMPLETE. The answer bank is therefore not
// just a script: it IS the definition of full coverage, and which answers a
// candidate unlocked is a direct measure of task completion — unlike the
// delivery signals, which are proxies. It is the strongest evidence this task
// produces, and it goes to the grader as such.

import { normalizeFr } from './score.ts';

export type InterlocutorTurn = {
  /** Stable within the task. */
  id: string;
  /** What the examiner says. Rendered by E8; spoken by device TTS until then. */
  text: string;
  audioRef?: string | null;
  durationS?: number;
  /**
   * Phrases that select this answer, matched against the candidate's
   * transcript. Authored as things a candidate would actually say, not as
   * single keywords: "combien" alone would match a question about numbers of
   * places just as readily as one about price.
   */
  cues: string[];
  /** What this answer is FOR, in the author's words. Shown to the grader as
   *  the coverage checklist, never to the candidate mid-task. */
  covers: string;
};

export type ExamInterlocutor = {
  /** Played once, before the candidate speaks. */
  opening: InterlocutorTurn;
  /** The answer bank. Every entry is a fact the document withholds. */
  answers: InterlocutorTurn[];
  /** Played when nothing matches — what a real examiner does when asked
   *  something not on their sheet. */
  catchAll: InterlocutorTurn;
  /** Played when the bank is exhausted or the clock runs down. */
  closing: InterlocutorTurn;
};

/** A cue matches when every one of its words appears in the transcript, in any
 *  order. Word-level rather than substring, so "prix" does not match "surpris",
 *  and multi-word so a cue can be specific without demanding exact phrasing. */
export function cueMatches(transcript: string, cue: string): boolean {
  const hay = ` ${normalizeFr(transcript)} `;
  const needles = normalizeFr(cue).split(' ').filter(Boolean);
  if (needles.length === 0) return false;
  return needles.every((w) => hay.includes(` ${w} `));
}

export type Selection =
  | { kind: 'answer'; turn: InterlocutorTurn }
  /** Nothing matched, or everything that matched was already given. */
  | { kind: 'catch-all' }
  /** Every answer has been given: the candidate covered the document. */
  | { kind: 'closing' };

/**
 * Which turn plays next.
 *
 * An answer already given is never repeated: a real examiner does not state
 * the price twice, and repeating would let a candidate coast by asking the
 * same question in different words. When everything has been covered the
 * examiner closes rather than looping.
 */
export function selectTurn(
  transcript: string,
  bank: ExamInterlocutor,
  playedIds: readonly string[]
): Selection {
  const played = new Set(playedIds);
  const remaining = bank.answers.filter((a) => !played.has(a.id));
  if (remaining.length === 0) return { kind: 'closing' };

  // Score by how many distinct cues hit. More matched cues is a more specific
  // question, and specificity should win over authoring order.
  let best: { turn: InterlocutorTurn; hits: number } | null = null;
  for (const turn of remaining) {
    const hits = turn.cues.filter((c) => cueMatches(transcript, c)).length;
    if (hits === 0) continue;
    if (!best || hits > best.hits) best = { turn, hits };
  }
  // Ties keep the authored order, which is the order the author judged most
  // natural for the document.
  return best ? { kind: 'answer', turn: best.turn } : { kind: 'catch-all' };
}

export type Coverage = {
  covered: string[];
  missed: string[];
  total: number;
};

/** What the candidate got out of the document, for the coverage criterion. */
export function coverageOf(bank: ExamInterlocutor, playedIds: readonly string[]): Coverage {
  const played = new Set(playedIds);
  const covered = bank.answers.filter((a) => played.has(a.id)).map((a) => a.covers);
  const missed = bank.answers.filter((a) => !played.has(a.id)).map((a) => a.covers);
  return { covered, missed, total: bank.answers.length };
}

/**
 * The coverage line handed to the grader.
 *
 * Unlike the delivery signals this is DIRECT evidence, not a proxy: the
 * candidate either asked about the price or did not, and the answer bank is
 * the document's own list of what there was to ask. So it is stated plainly,
 * with none of the hedging deliveryNote needs.
 */
export function coverageNote(c: Coverage, lang: 'fr' | 'en'): string {
  const head =
    lang === 'fr'
      ? `Couverture du document : ${c.covered.length}/${c.total} informations obtenues.`
      : `Coverage of the document: ${c.covered.length}/${c.total} facts obtained.`;
  const got = c.covered.length
    ? (lang === 'fr' ? `Obtenues : ${c.covered.join(', ')}.` : `Obtained: ${c.covered.join(', ')}.`)
    : (lang === 'fr' ? 'Aucune information obtenue.' : 'No facts obtained.');
  const lost = c.missed.length
    ? (lang === 'fr' ? `Non demandées : ${c.missed.join(', ')}.` : `Not asked: ${c.missed.join(', ')}.`)
    : '';
  return [head, got, lost].filter(Boolean).join(' ');
}
