// What a2.11 imports rather than authors, and what it names without importing.
//
// The rows themselves are in verbes-re-rows.gen.ts, a recorded read of Postgres
// taken by scripts/_a211_manifest.ts. This file is the meaning laid over them.
//
// ── THE SEVEN ARE ALL IMPORTED ─────────────────────────────────────────────
//
// Every one of the seven regular -RE verbs this lesson teaches already exists in
// Postgres, and so do both verbs it names as exceptions. Not one is authored. The
// brief said `author-verbes-batch.ts` claims vendre, attendre and répondre were
// placed and asked for a probe; the probe found all three, none of them where the
// brief implied, plus six more.
//
//   vendre 5 rows · attendre 8 · répondre 7 · entendre 1 · perdre 2
//   rendre 1 · descendre 3 · prendre 3 · mettre 1
//
// The row chosen for each verb is the one with: a home in `verbes` or
// `verbes-essentiels` where one exists, a respelling present, and NO `gender`.
// That last one is not fussiness. A single-word row carrying `gender` joins
// a1.03's measured ending population, and `a1-03-genre.test.ts` re-measures
// twenty printed figures from the seed on every run. The generator refuses to
// emit a gendered row at all, and none of these nine carries one.
//
// `descendre` has no row in either verb theme, so it comes from
// `transports-quotidiens`, which is where the corpus actually uses it.
//
// ── THE BOUNDARY VERBS ARE READ AND NOT IMPORTED ──────────────────────────
//
// `prendre` and `mettre` are NAMED on one card and conjugated nowhere. They are
// in the manifest so the batch can prove they exist and so this decision was
// taken with the rows in front of it, and they are deliberately absent from
// IMPORTED_ROWS, from IMPORTED_IDS and from the lesson's itemIds.
//
// a2.10 settled the rule for the band and its wording is worth keeping: context
// is a display string, not a released row. Releasing `prendre` here would put a
// card in the flashcard hub for a verb whose paradigm no lesson has taught, five
// units before the one that will.
//
// ── THE SEED IS A CUT AND THIS IS WHY THE MERGE CARRIES ROWS ──────────────
//
// Measured 2026-08-11: `verbes` shows 119 rows in the seed and holds 470 in
// Postgres; `verbes-essentiels` shows 39 and holds 535. NEITHER
// `fr.a2.verbes.027` (vendre) NOR `fr.a2.verbes.020` (répondre) is in seed.json
// today, and those two are the headline verb and the second-triple verb. A lesson
// whose itemIds resolve to nothing renders empty cards on a device, so the merge
// CARRIES all seven. a2.01 hit the same wall with thirty, a2.09 with seventeen,
// a2.10 with ten, a1.22 with forty.
//
// ── Three levels appear here and that is correct ──────────────────────────
//
// Four of the seven live at level `sons` and one at `a1`. A row's level is a fact
// about where it was authored, not about who may reference it. Doctrine §C's
// "everything you author is A2" binds the twenty-four rows in verbes-re-corpus.ts,
// and all twenty-four are `level: 'a2'`.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  BOUNDARY_ROW_IDS,
  BOUNDARY_VERB_ROWS,
  IMPORTED_SENTENCE_ROWS,
  IMPORTED_VERB_ROWS,
  VERB_ROW_IDS,
} from './verbes-re-rows.gen.ts';

export { BOUNDARY_VERB_ROWS, IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS };

/** One imported verb: the pairing, plus the row it points at. */
export type ImportedVerb = { verb: string; id: string; row: Item };

const ROW_BY_ID = new Map(IMPORTED_VERB_ROWS.map((r) => [r.id, r] as const));

/** The seven, in the order the learner meets them. */
export const IMPORTED_VERBS: ImportedVerb[] = VERB_ROW_IDS.map(([verb, id]) => {
  const row = ROW_BY_ID.get(id);
  if (!row) throw new Error(`verbes-re: ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`verbes-re: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

const BOUNDARY_BY_ID = new Map(BOUNDARY_VERB_ROWS.map((r) => [r.id, r] as const));

/** The two this lesson names and refuses to build. Read, never released. */
export const BOUNDARY_VERBS: ImportedVerb[] = BOUNDARY_ROW_IDS.map(([verb, id]) => {
  const row = BOUNDARY_BY_ID.get(id);
  if (!row) throw new Error(`verbes-re: boundary ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`verbes-re: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

/** Every row this lesson carries into the seed without owning it.
 *
 *  THE BOUNDARY ROWS ARE NOT HERE, and that is the whole point of the split. */
export const IMPORTED_ROWS: Item[] = [...IMPORTED_VERB_ROWS, ...IMPORTED_SENTENCE_ROWS];

/** Every imported id, verbs then sentences. */
export const IMPORTED_IDS: string[] = IMPORTED_ROWS.map((r) => r.id);

/** verb -> its imported row. The lesson builds every verb card through this, so
 *  no screen restates a gloss or a respelling. */
export const VERB_BY_NAME: ReadonlyMap<string, ImportedVerb> = new Map(IMPORTED_VERBS.map((v) => [v.verb, v]));

const lookup = (verb: string): ImportedVerb => {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-re: "${verb}" is not one of the seven`);
  return v;
};

/** The id carrying one verb. */
export const verbId = (verb: string): string => lookup(verb).id;

/** The English gloss of one verb, from the row rather than retyped. */
export const verbEn = (verb: string): string => lookup(verb).row.en;

/** The respelling STORED for one verb, BEFORE this build's repairs. Screens go
 *  through verbes-re-display.ts instead; this is for the verification path. */
export const verbStoredRespell = (verb: string): string | null => lookup(verb).row.respell ?? null;
