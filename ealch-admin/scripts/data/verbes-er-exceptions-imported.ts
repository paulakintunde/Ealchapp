// What a2.09 imports rather than authors.
//
// The rows themselves are in verbes-er-exceptions-rows.gen.ts, a recorded read of
// Postgres taken by scripts/_a209_manifest.ts. This file is the meaning laid over
// them: which verb is which row, and how a verb reaches a screen.
//
// ── ALL SEVENTEEN ARE IMPORTED ─────────────────────────────────────────────
//
// Every verb this lesson teaches already exists in Postgres. Not one is authored.
// The brief's UNVERIFIED note asked whether any of them already existed; twelve
// of the thirteen it named do, several times over, and so does every other verb
// this lesson wanted. `placer` is the single absence in the brief's list and this
// lesson does not teach it: `commencer`, `lancer` and `effacer` carry -cer, and
// adding a headword nobody needs is how a theme fills up with rows no lesson
// releases.
//
// The row chosen for each verb is the one with: a home in `verbes` or
// `verbes-essentiels` where one exists, a respelling present, and NO `gender`.
// That last one is not fussiness. A single-word row carrying `gender` joins
// a1.03's measured ending population, and `a1-03-genre.test.ts` re-measures
// twenty printed figures from the seed on every run. The generator refuses to
// emit a gendered row at all.
//
// Three of the seventeen carry a respelling that closes a nasal vowel with a
// plain n. All three are repaired by this build, and the one that matters is
// `commencer`: the lesson prints it on the same screen as `nous commençons`, and
// `koh-mahn-SAY` beside `koh-mahⁿ-SOHⁿ` would teach a difference in the vowel
// that does not exist.
//
// ── THE SEED IS A CUT AND THIS IS WHY THE MERGE CARRIES ROWS ──────────────
//
// `verbes` shows 35 rows in the seed and holds 393 in Postgres, and most of the
// themes these verbs live in are outside the cut too. A lesson whose itemIds
// resolve to nothing renders empty cards on a device, so the merge CARRIES every
// imported row through the cut. a2.01 did the same with thirty and a1.22 with
// forty.
//
// ── Three levels appear here and that is correct ──────────────────────────
//
// Nine of the seventeen live at level `sons` or `a1`. A row's level is a fact
// about where it was authored, not about who may reference it. Doctrine §C's
// "everything you author is A2" binds the twenty-six rows in
// verbes-er-exceptions-corpus.ts, and all twenty-six are `level: 'a2'`.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS, VERB_ROW_IDS } from './verbes-er-exceptions-rows.gen.ts';

export { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS };

/** One imported verb: the pairing, plus the row it points at. */
export type ImportedVerb = { verb: string; id: string; row: Item };

const ROW_BY_ID = new Map(IMPORTED_VERB_ROWS.map((r) => [r.id, r] as const));

/** The seventeen, in the order the learner meets them. */
export const IMPORTED_VERBS: ImportedVerb[] = VERB_ROW_IDS.map(([verb, id]) => {
  const row = ROW_BY_ID.get(id);
  if (!row) throw new Error(`verbes-er-exceptions: ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`verbes-er-exceptions: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

/** Every row this lesson carries into the seed without owning it. */
export const IMPORTED_ROWS: Item[] = [...IMPORTED_VERB_ROWS, ...IMPORTED_SENTENCE_ROWS];

/** Every imported id. */
export const IMPORTED_IDS: string[] = IMPORTED_ROWS.map((r) => r.id);

/** verb -> its imported row. The lesson builds every verb card through this, so
 *  no screen restates a gloss or a respelling. */
export const VERB_BY_NAME: ReadonlyMap<string, ImportedVerb> = new Map(IMPORTED_VERBS.map((v) => [v.verb, v]));

const lookup = (verb: string): ImportedVerb => {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-er-exceptions: "${verb}" is not one of the seventeen`);
  return v;
};

/** The id carrying one verb. */
export const verbId = (verb: string): string => lookup(verb).id;

/** The English gloss of one verb, from the row rather than retyped. */
export const verbEn = (verb: string): string => lookup(verb).row.en;

/** The respelling STORED for one verb, before this build's repairs. Screens go
 *  through verbes-er-exceptions-display.ts instead; this is for the verification
 *  path. */
export const verbStoredRespell = (verb: string): string | null => lookup(verb).row.respell ?? null;
