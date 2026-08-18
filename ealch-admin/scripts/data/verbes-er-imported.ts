// What a2.01 imports rather than authors.
//
// The rows themselves are in verbes-er-rows.gen.ts, a recorded read of Postgres
// taken by scripts/_a201_manifest.ts. This file is the meaning laid over them:
// which verb is which row, what is reading-only, and how a verb reaches a screen.
//
// ── The thirty are ALL imported ────────────────────────────────────────────
//
// Every one of the thirty verbs this lesson teaches already exists in Postgres.
// Not one is authored. The brief warned that "if the probe says a theme holds
// rows, you are importing, not authoring", and that turned out to hold for the
// whole set rather than for the eight the brief predicted.
//
// The row chosen for each verb is the one with: a home in `verbes` or
// `verbes-essentiels` where one exists, a respelling present, and NO `gender`.
// That last one is not fussiness. A single-word row carrying `gender` joins
// a1.03's measured ending population, and `a1-03-genre.test.ts` re-measures
// twenty printed figures from the seed on every run. `fr.a1.ecole.050` is
// `écouter` WITH `gender: 'm'` on it, which is a data defect in somebody else's
// theme; this lesson routes around it to `fr.sons.verbes-essentiels.025` rather
// than referencing it. The defect is recorded here and is not this build's to
// repair. The generator refuses to emit a gendered row at all.
//
// ── THE SEED IS A CUT AND THIS IS WHY THE MERGE IS BIG ────────────────────
//
// 30 of these 32 rows are published in Postgres and ARE NOT IN seed.json today:
// `verbes` shows 5 rows in the seed and holds 368 in the database. A lesson
// whose itemIds resolve to nothing renders empty cards on a device, so the merge
// CARRIES all thirty through the cut. a1.22 hit the same wall with forty rows
// and the same answer.
//
// ── Two levels appear here and that is correct ────────────────────────────
//
// Sixteen of the thirty live at level `sons` or `a1`. A row's level is a fact
// about where it was authored, not about who may reference it; a1.06 references
// `fr.a1.cafe.*` from a lesson two units later for the same reason. Doctrine §C's
// "everything you author is A2" binds the twenty-five rows in
// verbes-er-corpus.ts, and all twenty-five are `level: 'a2'`.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS, VERB_ROW_IDS } from './verbes-er-rows.gen.ts';
import { unitRef } from './_unit-ref.ts';

export { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS };

/** One imported verb: the pairing, plus the row it points at. */
export type ImportedVerb = { verb: string; id: string; row: Item };

const ROW_BY_ID = new Map(IMPORTED_VERB_ROWS.map((r) => [r.id, r] as const));

/** The thirty, in the order the learner meets them. */
export const IMPORTED_VERBS: ImportedVerb[] = VERB_ROW_IDS.map(([verb, id]) => {
  const row = ROW_BY_ID.get(id);
  if (!row) throw new Error(`verbes-er: ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`verbes-er: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

/** Every row this lesson carries into the seed without owning it. */
export const IMPORTED_ROWS: Item[] = [...IMPORTED_VERB_ROWS, ...IMPORTED_SENTENCE_ROWS];

/** Sentences already published that this lesson teaches FROM rather than
 *  teaching.
 *
 *  `.001` is the `je` row of this lesson's own paradigm, which is why the frame
 *  costs five authored rows rather than six; its respelling is repaired by this
 *  build. `.061` is the one existing sentence in the theme that puts an -ent
 *  ending in front of a learner in a real context, and it is READING ONLY: it
 *  uses `depuis`, which is a2.18, so it is never a card the learner produces. */
export const REUSED_SENTENCES = IMPORTED_SENTENCE_ROWS.map((r) => ({
  id: r.id,
  fr: r.fr,
  en: r.en,
  theme: r.theme,
  respell: r.respell ?? null,
  drills: r.drills ?? [],
  why: r.id === 'fr.a2.verbes.001'
    ? 'the je row of the paradigm; its respelling is repaired by this build'
    : `reading only: an -ent ending in the wild, and depuis belongs to ${unitRef('a2.18')}`,
}));

/** Reading-only ids: named by a section the learner READS and by no surface the
 *  learner produces into. Asserted, so a later edit that drops one into the
 *  speak deck or the dictée goes red. */
export const READING_ONLY_IDS: string[] = ['fr.a2.verbes.061'];

/** Every imported id, verbs then sentences. */
export const IMPORTED_IDS: string[] = IMPORTED_ROWS.map((r) => r.id);

/** verb -> its imported row. The lesson builds every verb card through this, so
 *  no screen restates a gloss or a respelling. */
export const VERB_BY_NAME: ReadonlyMap<string, ImportedVerb> = new Map(IMPORTED_VERBS.map((v) => [v.verb, v]));

const lookup = (verb: string): ImportedVerb => {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-er: "${verb}" is not one of the thirty`);
  return v;
};

/** The id carrying one verb. */
export const verbId = (verb: string): string => lookup(verb).id;

/** The English gloss of one verb, from the row rather than retyped. */
export const verbEn = (verb: string): string => lookup(verb).row.en;

/** The respelling STORED for one verb, before this build's repairs. Screens go
 *  through verbes-er-display.ts instead; this is for the verification path. */
export const verbStoredRespell = (verb: string): string | null => lookup(verb).row.respell ?? null;
