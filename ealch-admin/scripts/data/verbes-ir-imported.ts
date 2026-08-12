// What a2.10 imports rather than authors.
//
// The rows themselves are in verbes-ir-rows.gen.ts, a recorded read of Postgres
// taken by scripts/_a210_manifest.ts. This file is the meaning laid over them:
// which verb is which row, and how a verb reaches a screen.
//
// ── THE TEN ARE ALL IMPORTED ───────────────────────────────────────────────
//
// Every one of the ten regular -IR verbs this lesson teaches already exists in
// Postgres. Not one is authored. The brief said `author-verbes-batch.ts` claims
// `finir` and `choisir` were placed and asked for a probe; the probe found both,
// in other themes, plus eight more.
//
// The row chosen for each verb is the one with: a home in `verbes` or
// `verbes-essentiels` where one exists, a respelling present, and NO `gender`.
// That last one is not fussiness. A single-word row carrying `gender` joins
// a1.03's measured ending population, and `a1-03-genre.test.ts` re-measures
// twenty printed figures from the seed on every run. The generator refuses to
// emit a gendered row at all, and none of these ten carries one.
//
// ── THE SEED IS A CUT AND THIS IS WHY THE MERGE IS BIG ────────────────────
//
// Measured 2026-08-11: `verbes` shows 65 rows in the seed and holds 419 in
// Postgres; `verbes-essentiels` shows 25 and holds 535. Eight of these ten rows
// are NOT in seed.json today. A lesson whose itemIds resolve to nothing renders
// empty cards on a device, so the merge CARRIES all ten. a2.01 hit the same wall
// with thirty, a2.09 with seventeen, a1.22 with forty.
//
// ── Three levels appear here and that is correct ──────────────────────────
//
// Four of the ten live at level `sons` and one at `a1`. A row's level is a fact
// about where it was authored, not about who may reference it. Doctrine §C's
// "everything you author is A2" binds the twenty-five rows in verbes-ir-corpus.ts,
// and all twenty-five are `level: 'a2'`.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS, VERB_ROW_IDS } from './verbes-ir-rows.gen.ts';

export { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS };

/** One imported verb: the pairing, plus the row it points at. */
export type ImportedVerb = { verb: string; id: string; row: Item };

const ROW_BY_ID = new Map(IMPORTED_VERB_ROWS.map((r) => [r.id, r] as const));

/** The ten, in the order the learner meets them. */
export const IMPORTED_VERBS: ImportedVerb[] = VERB_ROW_IDS.map(([verb, id]) => {
  const row = ROW_BY_ID.get(id);
  if (!row) throw new Error(`verbes-ir: ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`verbes-ir: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

/** Every row this lesson carries into the seed without owning it. */
export const IMPORTED_ROWS: Item[] = [...IMPORTED_VERB_ROWS, ...IMPORTED_SENTENCE_ROWS];

/** Every imported id, verbs then sentences. */
export const IMPORTED_IDS: string[] = IMPORTED_ROWS.map((r) => r.id);

/** verb -> its imported row. The lesson builds every verb card through this, so
 *  no screen restates a gloss or a respelling. */
export const VERB_BY_NAME: ReadonlyMap<string, ImportedVerb> = new Map(IMPORTED_VERBS.map((v) => [v.verb, v]));

const lookup = (verb: string): ImportedVerb => {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-ir: "${verb}" is not one of the ten`);
  return v;
};

/** The id carrying one verb. */
export const verbId = (verb: string): string => lookup(verb).id;

/** The English gloss of one verb, from the row rather than retyped. */
export const verbEn = (verb: string): string => lookup(verb).row.en;

/** The respelling STORED for one verb, BEFORE this build's repairs. Screens go
 *  through verbes-ir-display.ts instead; this is for the verification path. */
export const verbStoredRespell = (verb: string): string | null => lookup(verb).row.respell ?? null;
