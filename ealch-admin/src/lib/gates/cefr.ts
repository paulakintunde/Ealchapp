// CEFR-fit heuristic gate (Workstream 4) — a Tier-1 stand-in, NOT the "real"
// classifier the master build doc calls for ("a frequency corpus + a real
// classifier, not a heuristic," EALCH-MASTER-BUILD.md Phase 2.D). This scores
// a sentence's level-fit from data (Lexique383 frequency + the corpus's own
// already-published vocabulary), but it is still a heuristic: every warning
// this module produces is labeled `[CEFR heuristic v1]` so nobody mistakes
// an advisory score here for a validated level assessment. Advisory only —
// see the wiring in publish-content.ts's 4c block; it never blocks publish.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { tokenize } from '../vocab';

export type ItemLevel = 'sons' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

const LEVEL_ORDER: ItemLevel[] = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

// Translated from the authoring guide's §2 prose ceilings ("short, single
// clause" / "medium, subordinate clauses appear" / "native-length") into
// token-count bands. These exact numbers are NOT in the guide — they are
// this heuristic's own calibration, chosen as a reasonable first cut and
// worth revisiting once real generated output has been scored against them.
// c1/c2 are intentionally uncapped ("native-length").
const SENTENCE_LENGTH_CEILING: Partial<Record<ItemLevel, number>> = {
  a1: 8,
  a2: 12,
  b1: 18,
  b2: 24,
};

// Below this share of vocabulary already taught at or below the sentence's
// own level, its difficulty looks out of step with its declared level. The
// floor loosens as level rises, mirroring the §2 table's own new-item
// allowance (a1-b1 ≤8 new/lesson, b2/c1 ≤10) — more new vocabulary is
// expected to be introduced the higher the level.
const VOCAB_IN_LEVEL_FLOOR: Partial<Record<ItemLevel, number>> = {
  a1: 0.6,
  a2: 0.55,
  b1: 0.5,
  b2: 0.4,
  c1: 0.3,
};

const TAG = '[CEFR heuristic v1 — not the ML classifier]';

export interface CefrScoreInput {
  fr: string;
  level: ItemLevel;
}

export interface CefrScore {
  vocabInLevelPct: number;
  avgFreqRank: number | null;
  sentenceLength: number;
  withinCeiling: boolean;
  flags: string[];
}

/** `headwordPoolsAtOrBelow.get(level)` must already be the CUMULATIVE pool
 *  (every word published at `level` or any level below it) — the caller
 *  builds this once per publish run via buildLevelPools(), not per item. */
export function scoreCefrFit(
  input: CefrScoreInput,
  headwordPoolsAtOrBelow: Map<ItemLevel, Set<string>>,
  freqRank: Map<string, number>
): CefrScore {
  const tokens = tokenize(input.fr);
  const flags: string[] = [];

  const ceiling = SENTENCE_LENGTH_CEILING[input.level];
  const withinCeiling = ceiling === undefined || tokens.length <= ceiling;
  if (!withinCeiling) {
    flags.push(`${TAG} ${tokens.length} tokens, over the ${input.level} band's ~${ceiling}-token ceiling`);
  }

  const pool = headwordPoolsAtOrBelow.get(input.level) ?? new Set<string>();
  const inLevel = tokens.filter((t) => pool.has(t)).length;
  const vocabInLevelPct = tokens.length === 0 ? 1 : inLevel / tokens.length;
  const floor = VOCAB_IN_LEVEL_FLOOR[input.level];
  if (floor !== undefined && vocabInLevelPct < floor) {
    flags.push(
      `${TAG} only ${Math.round(vocabInLevelPct * 100)}% of vocabulary already taught at/below ${input.level} (target ≥${Math.round(floor * 100)}%)`
    );
  }

  const ranks = tokens.map((t) => freqRank.get(t)).filter((r): r is number => r !== undefined);
  const avgFreqRank = ranks.length ? ranks.reduce((a, b) => a + b, 0) / ranks.length : null;

  return { vocabInLevelPct, avgFreqRank, sentenceLength: tokens.length, withinCeiling, flags };
}

/** Cumulative headword pools: pool(level) = every token in `vocabItems` at
 *  `level` or any level ORDERED BEFORE it in LEVEL_ORDER. A b1 sentence is
 *  scored against everything taught at sons/a1/a2/b1, not b1 alone — a
 *  learner at b1 is assumed to still know their a1 vocabulary.
 *
 *  Callers MUST build this from non-sentence items only (word/phrase — the
 *  same scope buildVocabPoolFromItems in lib/vocab.ts uses for the recycled-
 *  vocab gate) and score only sentence-kind items against it. A word item
 *  IS a piece of vocabulary, not something built FROM vocabulary — scoring
 *  one against a pool that includes itself trivially "recognizes" every
 *  word as 100% in-level, which defeats the check entirely. */
export function buildLevelPools(
  vocabItems: { level: string; fr: string }[]
): Map<ItemLevel, Set<string>> {
  const byLevel = new Map<ItemLevel, Set<string>>();
  for (const v of vocabItems) {
    const level = v.level as ItemLevel;
    if (!LEVEL_ORDER.includes(level)) continue;
    const set = byLevel.get(level) ?? new Set<string>();
    for (const tok of tokenize(v.fr)) set.add(tok);
    byLevel.set(level, set);
  }
  const cumulative = new Map<ItemLevel, Set<string>>();
  const running = new Set<string>();
  for (const level of LEVEL_ORDER) {
    for (const tok of byLevel.get(level) ?? []) running.add(tok);
    cumulative.set(level, new Set(running));
  }
  return cumulative;
}

let cachedFreqRank: Map<string, number> | null = null;

/** Loads gates/data/lexique-freq.csv once per process and converts raw
 *  frequency into a RANK (1 = most frequent lemma) — a rank is what a
 *  "words familiar to a beginner tend to be high-frequency" heuristic
 *  actually wants, not the raw per-million float. Memoized: this file
 *  never changes mid-run. */
export function loadLexiconFreqRank(path?: string): Map<string, number> {
  if (cachedFreqRank) return cachedFreqRank;
  const csvPath = path ?? resolve(process.cwd(), 'gates/data/lexique-freq.csv');
  const raw = readFileSync(csvPath, 'utf8');
  const lines = raw.split('\n').slice(1).filter(Boolean);
  const entries: [string, number][] = lines.map((line) => {
    const idx = line.lastIndexOf(',');
    return [line.slice(0, idx), Number(line.slice(idx + 1))];
  });
  entries.sort((a, b) => b[1] - a[1]);
  const rank = new Map<string, number>();
  entries.forEach(([lemma], i) => rank.set(lemma, i + 1));
  cachedFreqRank = rank;
  return rank;
}
