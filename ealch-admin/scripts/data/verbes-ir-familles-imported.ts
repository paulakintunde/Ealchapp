// What a2.10.l2 imports rather than authors.
//
// The rows are in verbes-ir-familles-rows.gen.ts, a recorded read of Postgres
// taken by scripts/_a210l2_manifest.ts. This file is the meaning laid over them.
//
// ── ALL TWELVE ARE IMPORTED ────────────────────────────────────────────────
//
// Every verb this lesson teaches already exists, most of them several times over,
// which is exactly the point of the hole it closes: the class has been in the
// flashcard hub all along with no unit explaining any of it.
//
// The row chosen for each is the one with a home in `verbes` or
// `verbes-essentiels` where one exists, a respelling present, no `gender`, and a
// `flashcard` drill — all twelve are released into the hub, and a released row
// without that drill is a card the hub never serves. All twelve already have it,
// measured rather than assumed, so DRILL_ADDITIONS is empty.
//
// `partir` deliberately does NOT take fr.a2.verbes.014, which is in this lesson's
// own theme. That row respells `pahr-TEER` while the other seven partir rows all
// say `par-TEER`, so it is the minority variant. Invariants §9 says a variant is
// not a violation, so it is neither repaired nor displayed.
//
// ── THE SEED IS A CUT ──────────────────────────────────────────────────────
//
// `verbes` holds 419 rows in Postgres against 65 in the seed and
// `verbes-essentiels` 535 against 25, so most of these are not in seed.json. A
// lesson whose itemIds resolve to nothing renders empty cards, so the merge
// CARRIES all of them.
//
// ── The two reused sentences are a2.10.l1's ───────────────────────────────
//
// fr.a2.verbes.202 and .198 are l1's own plural rows for `ralentir` and `guérir`.
// They are reused, not twinned, because the pair that proves the infinitive
// ending predicts nothing has to contradict the learner's own memory of the last
// lesson rather than a fresh example built to make the point.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS, VERB_ROW_IDS } from './verbes-ir-familles-rows.gen.ts';

export { IMPORTED_SENTENCE_ROWS, IMPORTED_VERB_ROWS };

export type ImportedVerb = { verb: string; id: string; row: Item };

const ROW_BY_ID = new Map(IMPORTED_VERB_ROWS.map((r) => [r.id, r] as const));

/** The twelve, in the order the learner meets them. */
export const IMPORTED_VERBS: ImportedVerb[] = VERB_ROW_IDS.map(([verb, id]) => {
  const row = ROW_BY_ID.get(id);
  if (!row) throw new Error(`verbes-ir-familles: ${id} is paired with "${verb}" and is not in the generated rows`);
  if (row.fr !== verb) throw new Error(`verbes-ir-familles: ${id} holds ${JSON.stringify(row.fr)}, paired with ${JSON.stringify(verb)}`);
  return { verb, id, row };
});

/** Every row this lesson carries into the seed without owning it. */
export const IMPORTED_ROWS: Item[] = [...IMPORTED_VERB_ROWS, ...IMPORTED_SENTENCE_ROWS];
export const IMPORTED_IDS: string[] = IMPORTED_ROWS.map((r) => r.id);

/** a2.10.l1's rows, by id, so a screen can name them without restating them. */
export const L1_ROW_BY_ID: ReadonlyMap<string, Item> = new Map(IMPORTED_SENTENCE_ROWS.map((r) => [r.id, r] as const));

/** The French of one of l1's reused sentences. */
export const l1Fr = (id: string): string => {
  const r = L1_ROW_BY_ID.get(id);
  if (!r) throw new Error(`verbes-ir-familles: ${id} is not one of a2.10.l1's reused rows`);
  return r.fr;
};
/** And its bracketed respelling, which l1 authored and this lesson only shows. */
export const l1Sub = (id: string): string => {
  const r = L1_ROW_BY_ID.get(id);
  if (!r) throw new Error(`verbes-ir-familles: ${id} is not one of a2.10.l1's reused rows`);
  return r.respell ? `[${r.respell}]` : '';
};

export const VERB_BY_NAME: ReadonlyMap<string, ImportedVerb> = new Map(IMPORTED_VERBS.map((v) => [v.verb, v]));

const lookup = (verb: string): ImportedVerb => {
  const v = VERB_BY_NAME.get(verb);
  if (!v) throw new Error(`verbes-ir-familles: "${verb}" is not one of the twelve`);
  return v;
};

export const verbId = (verb: string): string => lookup(verb).id;
export const verbEn = (verb: string): string => lookup(verb).row.en;
export const verbStoredRespell = (verb: string): string | null => lookup(verb).row.respell ?? null;
