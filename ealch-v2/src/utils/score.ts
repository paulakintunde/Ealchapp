// Pronunciation/utterance scoring against an expected French phrase.
//
// The native recognizer returns a transcript, not phonemes, so we score how
// closely what it heard matches what we asked for. Two signals, blended:
//   - character similarity (normalized Levenshtein) catches near-misses and
//     word-order noise;
//   - word coverage catches "said half the sentence, but said it perfectly".
// Neither alone is enough: "bonjour" vs "bonjour je m'appelle Paul" scores 1.0
// on coverage of the short side, and a transposed word tanks pure Levenshtein.

export type Verdict = 'good' | 'close' | 'off' | 'none';

/**
 * Fold a French utterance down to what actually matters for a match:
 * lowercase, strip diacritics (a recognizer writing "francais" for "français"
 * is not a pronunciation error), drop punctuation and the guillemets/elisions
 * the content uses, collapse whitespace.
 */
export function normalizeFr(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // combining diacritics
    .replace(/['’‘`]/g, ' ') // elisions: j'apprends → j apprends
    .replace(/[«»"“”.,!?;:()[\]…\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokens(s: string): string[] {
  const n = normalizeFr(s);
  return n ? n.split(' ') : [];
}

/** Levenshtein edit distance. Two-row DP — the phrases here are short. */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  let cur = new Array<number>(b.length + 1);

  for (let i = 1; i <= a.length; i += 1) {
    cur[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(
        prev[j] + 1, // deletion
        cur[j - 1] + 1, // insertion
        prev[j - 1] + cost // substitution
      );
    }
    [prev, cur] = [cur, prev];
  }
  return prev[b.length];
}

/** 1.0 = identical, 0.0 = nothing in common. */
export function similarity(a: string, b: string): number {
  const max = Math.max(a.length, b.length);
  if (max === 0) return 1;
  return 1 - levenshtein(a, b) / max;
}

/**
 * Fraction of the expected words that appear in what was heard. Each expected
 * word is consumed at most once, so repeating one word cannot cover the phrase.
 * A heard word counts if it is within one edit of the expected word (recognizer
 * spelling wobble on inflections: "apprends" / "apprend").
 */
export function wordCoverage(expected: string, heard: string): number {
  const want = tokens(expected);
  if (!want.length) return 1;
  const got = tokens(heard);
  if (!got.length) return 0;

  const unused = [...got];
  let hit = 0;

  for (const w of want) {
    const ix = unused.findIndex(
      (g) => g === w || (Math.max(w.length, g.length) > 3 && levenshtein(w, g) <= 1)
    );
    if (ix >= 0) {
      hit += 1;
      unused.splice(ix, 1);
    }
  }
  return hit / want.length;
}

export type Score = { score: number; verdict: Verdict };

/**
 * Blend the two signals into a 0..1 score and a verdict the UI can act on.
 * Coverage is weighted slightly higher: for a learner, saying every word of the
 * phrase matters more than the recognizer's exact spelling of each one.
 */
export function scoreUtterance(expected: string, heard: string): Score {
  if (!heard.trim()) return { score: 0, verdict: 'none' };

  const e = normalizeFr(expected);
  const h = normalizeFr(heard);
  if (!e) return { score: 1, verdict: 'good' };

  const chars = similarity(e, h);
  const words = wordCoverage(expected, heard);
  const score = 0.45 * chars + 0.55 * words;

  return { score, verdict: verdictFor(score) };
}

export function verdictFor(score: number): Verdict {
  if (score >= 0.82) return 'good';
  if (score >= 0.55) return 'close';
  return 'off';
}

/**
 * Exact-answer matching for TYPED input (Voice Flash, and any drill that types a
 * short target word or phrase). This is not fuzzy like scoreUtterance — typing
 * has no recognizer noise, so it demands the exact significant words.
 *
 * Articles carry no meaning for the match, so they are dropped: "café" and "un
 * café" both satisfy "un café". But every OTHER word must line up exactly — the
 * significant-word SETS must be equal — so "je voudrais un café to go" does NOT
 * match "un café". This replaces a `typed.includes(headword)` check that scored
 * any string containing the headword as correct.
 */
const ARTICLES = new Set(['un', 'une', 'le', 'la', 'les', 'l', 'des', 'du', 'de', 'd', 'a', 'an', 'the']);

export function significantWords(s: string): Set<string> {
  return new Set(tokens(normalizeFr(s)).filter((w) => !ARTICLES.has(w)));
}

export function answerMatches(target: string, typed: string): boolean {
  const want = significantWords(target);
  const got = significantWords(typed);
  if (want.size === 0 || want.size !== got.size) return false;
  for (const w of want) if (!got.has(w)) return false;
  return true;
}
