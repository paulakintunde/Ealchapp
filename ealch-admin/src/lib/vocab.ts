// Shared French tokenizer + recycled-vocab pool builder — the authoring
// guide's §2 rule ("≥30% recycled vocab at a1/a2/b1... a generator or
// reviewer can compute it") made real in one place, used by both the
// Sentences dashboard (live, informational) and the publish-time gate
// (publish-content.ts, hard fail). One copy: a second tokenizer drifting
// from this one is how a sentence could pass the dashboard and fail publish,
// or the reverse, for no reason a reviewer could see.

// Strip combining diacritics (U+0300-U+036F) left behind by NFD
// normalization, so "café" and "cafe" tokenize the same way. Built via
// String.fromCharCode rather than a literal /[̀-ͯ]/ — a literal
// here has round-tripped corrupted through editors before (an invisible
// combining-character encoding artifact), so this construction is the fix,
// not a stylistic choice.
const COMBINING_MARKS = new RegExp(
  String.fromCharCode(0x5b, 0x5c, 0x75, 0x30, 0x33, 0x30, 0x30, 0x2d, 0x5c, 0x75, 0x30, 0x33, 0x36, 0x66, 0x5d),
  'g'
);

const STOPWORDS = new Set(['un', 'une', 'le', 'la', 'les', 'de', 'du', 'des', 'et']);

export function tokenize(fr: string): string[] {
  return fr
    .toLowerCase()
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
    .split(/[^a-z0-9']+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

export function themeLevelKey(level: string, theme: string): string {
  return `${level}::${theme}`;
}

/** Builds the (level, theme) → token-set pool from any list of non-sentence
 *  vocab items. Pure — callers supply the rows (from Drizzle or from an
 *  already-assembled in-memory corpus), so this has no DB/env dependency and
 *  runs the same in an admin route and in publish-content.ts. */
export function buildVocabPoolFromItems(
  vocabItems: { level: string; theme: string; fr: string }[]
): Map<string, Set<string>> {
  const pool = new Map<string, Set<string>>();
  for (const v of vocabItems) {
    const key = themeLevelKey(v.level, v.theme);
    const set = pool.get(key) ?? new Set<string>();
    for (const tok of tokenize(v.fr)) set.add(tok);
    pool.set(key, set);
  }
  return pool;
}

/** Fraction (0..1) of `tokens` found in `pool`. Empty token list recycles
 *  nothing by definition (an empty sentence is not "100% recycled"). */
export function recycledShare(tokens: string[], pool: Set<string> | undefined): number {
  if (tokens.length === 0) return 0;
  const p = pool ?? new Set<string>();
  const recycled = tokens.filter((t) => p.has(t)).length;
  return recycled / tokens.length;
}

// The authoring guide's §2 table, verbatim: recycled-vocab floor per level.
// `sons` has no lexical content (phonics only) and carries no floor.
export const RECYCLED_VOCAB_FLOOR: Record<string, number> = {
  a1: 0.3,
  a2: 0.3,
  b1: 0.3,
  b2: 0.25,
  c1: 0.2,
};
