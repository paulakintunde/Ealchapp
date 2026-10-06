// Typed answers in an exam's comprehension épreuves (DALF C1). Pure, no React.
//
// ── The rule we are copying ────────────────────────────────────────────────
//
// The FEI corrigé for the DALF C1 demo paper: « l'orthographe et la syntaxe ne
// sont pas prises en compte, sauf si elles altèrent gravement la compréhension.
// Le correcteur acceptera les réponses données ci-dessous et toute reformulation
// ou réponse cohérente avec la question posée. »
//
// So a typed answer is right when it MEANS the corrigé, however it is spelled
// or worded. Two passes (Paul, C1 build log decision 32):
//
//   1. Key words. Every group of `keywords` must be met by one word in the
//      answer, accent- and case-blind, from the start of a word (so a stem
//      covers its family). Met: right, instantly, offline, free.
//   2. Not met: UNSURE, never wrong outright. A reworded right answer misses
//      the author's words, so the AI grader decides (examGrader.checkShort).
//      With no verdict (offline, grader down) an unsure answer scores 0 and the
//      report says it was not checked, rather than inventing a mark.
//
// Vrai/faux with a justification is all-or-nothing on the paper: the choice
// AND a copied passage. A wrong choice is wrong. A right choice with a quote
// that matches an accepted passage is right; with some other non-empty quote
// it is unsure (it may justify the choice from a passage the author did not
// list), and the AI grader decides.

import type { QcmItem } from '../content/schema.ts';

/** What a candidate entered for one question. A number for a tick, a string
 *  for a typed answer, a pair for vrai/faux with its quote. */
export type ExamAnswer = number | string | { choice: number | null; text: string };

export type Mark = 'right' | 'wrong' | 'unsure';

/** Accent-, case- and punctuation-blind, one space between words. Apostrophes
 *  split words (« l'économie » → « l economie ») so « économie » still starts a
 *  word. */
export function fold(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Key words cannot see a negation: « l'oubli n'est pas légitime » meets every
 * group of « l'oubli est légitime » (DALF blanc-01 review, 2026-10-06). An answer
 * that negates is therefore never marked right on key words alone; it goes to
 * the AI grader, which reads the meaning. A right answer phrased negatively
 * costs nothing extra (one batch per task), a wrong one no longer slips through.
 */
export function negates(answer: string): boolean {
  const f = ` ${fold(answer)} `;
  return /\s(ne|n)\s/.test(f) || /\s(pas|jamais|aucun|aucune|nullement|guere)\s/.test(f) || /\snon\s/.test(f) || /\ssans\s/.test(f);
}

/** Every group met by one keyword that starts a word of the answer. */
export function keywordsMet(answer: string, groups: string[][]): boolean {
  const hay = ` ${fold(answer)} `;
  if (hay.trim() === '') return false;
  return groups.every((g) => g.some((w) => {
    const k = fold(w);
    return k !== '' && hay.includes(` ${k}`);
  }));
}

/** A copied quote matches an accepted passage when most of the passage's words
 *  are in it, or it is a run of at least four words lifted from the passage.
 *  Candidates copy part of a sentence, drop the guillemets, misspell a word. */
export function quoteMatches(text: string, quotes: string[]): boolean {
  const t = fold(text);
  if (t.split(' ').filter(Boolean).length < 3) return false;
  return quotes.some((q) => {
    const qf = fold(q);
    if (qf === '') return false;
    if (qf.includes(t) && t.split(' ').length >= 4) return true;
    const want = qf.split(' ');
    const have = new Set(t.split(' '));
    return want.filter((w) => have.has(w)).length / want.length >= 0.6;
  });
}

/** Mark one question from its answer, before any AI verdict. */
export function markAnswer(item: QcmItem, answer: ExamAnswer | null | undefined): Mark {
  const kind = item.kind ?? 'mcq';
  if (kind === 'mcq') return answer === item.correct ? 'right' : 'wrong';
  if (kind === 'short') {
    if (typeof answer !== 'string' || answer.trim() === '') return 'wrong';
    return keywordsMet(answer, item.keywords ?? []) && !negates(answer) ? 'right' : 'unsure';
  }
  // tfj
  if (typeof answer !== 'object' || answer === null || answer.choice !== item.correct) return 'wrong';
  if (answer.text.trim() === '') return 'wrong';
  return quoteMatches(answer.text, item.quotes ?? []) ? 'right' : 'unsure';
}

/** Whether a question has been answered at all (for the progress count). */
export function isAnswered(answer: ExamAnswer | null | undefined): boolean {
  if (answer == null) return false;
  if (typeof answer === 'number') return true;
  if (typeof answer === 'string') return answer.trim() !== '';
  return answer.choice != null && answer.text.trim() !== '';
}
