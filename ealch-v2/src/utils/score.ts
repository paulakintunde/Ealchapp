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

/** One display word of the expected phrase, marked hit/missed against what was
 *  heard. Same matching rule as wordCoverage (exact, or within one edit above
 *  3 chars), consuming each heard token at most once — so the highlight and
 *  the score never disagree about which words landed. A display word with
 *  several normalized tokens ("j'apprends" → j + apprends) only hits when all
 *  of them do: half an elision is still a miss. */
export type WordMark = { word: string; hit: boolean };

export function markWords(expected: string, heard: string): WordMark[] {
  const unused = tokens(heard);
  const take = (w: string): boolean => {
    const ix = unused.findIndex(
      (g) => g === w || (Math.max(w.length, g.length) > 3 && levenshtein(w, g) <= 1)
    );
    if (ix >= 0) {
      unused.splice(ix, 1);
      return true;
    }
    return false;
  };
  return expected
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const toks = tokens(word);
      // filter-then-length, not every(): every() short-circuits and would skip
      // consuming the later tokens of a partially-heard word.
      const hits = toks.filter(take).length;
      return { word, hit: toks.length > 0 && hits === toks.length };
    });
}

/** Words the learner keeps missing, folded from expected/heard pairs (the
 *  attempt log stores both). Purely word-frequency: no store dependency, so
 *  screens can scope the pairs however they like (a block, a stage, all time).
 *  Articles are skipped — "missed le" is recognizer noise, not a focus word. */
export function focusWordsFrom(
  pairs: { expected: string; heard: string }[],
  limit = 8
): { word: string; misses: number }[] {
  const misses = new Map<string, { word: string; misses: number }>();
  for (const p of pairs) {
    for (const m of markWords(p.expected, p.heard)) {
      if (m.hit) continue;
      const key = normalizeFr(m.word);
      if (!key || ARTICLES.has(key)) continue;
      const cur = misses.get(key);
      if (cur) cur.misses += 1;
      else misses.set(key, { word: m.word.replace(/[«»"“”.,!?;:()[\]…]/g, ''), misses: 1 });
    }
  }
  return [...misses.values()].sort((a, b) => b.misses - a.misses).slice(0, limit);
}

export type Score = { score: number; verdict: Verdict };

/** The score→verdict cut lines. The SCORE is always the same honest number;
 *  only where "good" begins moves with the learner's level. */
export type VerdictBars = { good: number; close: number };

export const DEFAULT_BARS: VerdictBars = { good: 0.82, close: 0.55 };

/** Strictness scaled to the CEFR band. A beginner shadowing their first
 *  sounds gets credit for a recognizable attempt; a C1 speaker is held to
 *  near-native transcription. Unknown levels get the historical default. */
export function barsForLevel(level?: string | null): VerdictBars {
  switch (level) {
    case 'sons': return { good: 0.72, close: 0.45 };
    case 'a1': return { good: 0.75, close: 0.48 };
    case 'a2': return { good: 0.78, close: 0.52 };
    case 'b1': return DEFAULT_BARS;
    case 'b2': return { good: 0.85, close: 0.58 };
    case 'c1': return { good: 0.88, close: 0.62 };
    default: return DEFAULT_BARS;
  }
}

/** Early bands mark speech misses as "practice this" (amber), not failure
 *  (red). The verdict logic is barsForLevel; this is its color counterpart. */
export function isLenientLevel(level?: string | null): boolean {
  return level === 'sons' || level === 'a1' || level === 'a2';
}

/**
 * Blend the two signals into a 0..1 score and a verdict the UI can act on.
 * Coverage is weighted slightly higher: for a learner, saying every word of the
 * phrase matters more than the recognizer's exact spelling of each one.
 */
export function scoreUtterance(expected: string, heard: string, bars: VerdictBars = DEFAULT_BARS): Score {
  if (!heard.trim()) return { score: 0, verdict: 'none' };

  const e = normalizeFr(expected);
  const h = normalizeFr(heard);
  if (!e) return { score: 1, verdict: 'good' };

  const chars = similarity(e, h);
  const words = wordCoverage(expected, heard);
  const score = 0.45 * chars + 0.55 * words;

  return { score, verdict: verdictFor(score, bars) };
}

export function verdictFor(score: number, bars: VerdictBars = DEFAULT_BARS): Verdict {
  if (score >= bars.good) return 'good';
  if (score >= bars.close) return 'close';
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
