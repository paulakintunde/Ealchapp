/* Regenerates data/verbes-er-exceptions-rows.gen.ts, the recorded read behind a2.09.
 *
 * a2.09 authors NO infinitive. Twelve of the thirteen verbs its brief names
 * already exist in Postgres, and so does every other verb this lesson wanted, so
 * the lesson IMPORTS them by id. Two things need the whole row rather than the id:
 *
 *   1. author-verbes-er-exceptions-batch.ts verifies the manifest field by field
 *      before it opens a transaction, because a stale manifest puts the lesson
 *      ahead of rows nobody has looked at.
 *   2. merge-verbes-er-exceptions-into-seed.ts has to CARRY these rows into
 *      seed.json. The seed is a CUT: `verbes` shows 35 rows in the seed and holds
 *      393 in Postgres, and a lesson whose itemIds resolve to nothing renders
 *      empty cards on a device. a2.01 hit the same wall with 30 rows.
 *
 *     pnpm tsx scripts/_a209_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
// ONE implementation of "row -> Item literal", shared with _a201_manifest.ts.
// This file used to carry its own, emitting fifteen of the twenty-seven fields an
// Item has and dropping the rest in silence — which is how a2.09's merge stripped
// `example`, `skill` and `register` from fr.a1.dictee.099. See manifest-item.ts.
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/verbes-er-exceptions-rows.gen.ts');

/** verb -> the row this lesson imports, grouped by pattern and in the order the
 *  learner meets them.
 *
 *  Chosen the way a2.01 chose: a home in `verbes` or `verbes-essentiels` where
 *  one exists, a respelling present, and NO `gender` — a gendered single-word row
 *  joins a1.03's measured ending population and moves twenty printed figures in
 *  a1-03-genre.test.ts.
 *
 *  Three of these carry a respelling that closes a nasal with a plain n, and this
 *  build repairs all three. See RESPELL_REPAIRS in the corpus. */
const VERBS: [string, string][] = [
  // -ger: the e that keeps the g soft before o
  ['manger', 'fr.a1.routines.185'],
  ['nager', 'fr.sons.verbes-essentiels.088'],
  ['voyager', 'fr.sons.verbes-essentiels.130'],
  ['ranger', 'fr.a1.routines.033'],
  ['partager', 'fr.a2.communaute.052'],
  // -cer: the cedilla that keeps the c soft before o
  ['commencer', 'fr.sons.verbes-essentiels.036'],
  ['lancer', 'fr.sons.verbes-essentiels.132'],
  ['effacer', 'fr.a1.dictee.099'],
  // -eler / -eter, the ones that DOUBLE
  ['appeler', 'fr.a2.verbes.050'],
  ['rappeler', 'fr.a2.verbes.051'],
  ['jeter', 'fr.sons.verbes-essentiels.069'],
  // -eler / -eter, the ones that take the ACCENT
  ['acheter', 'fr.a2.verbes.026'],
  ['geler', 'fr.a1.meteo.167'],
  // é_er: the é that opens to è
  ['préférer', 'fr.sons.verbes-essentiels.108'],
  ['espérer', 'fr.sons.verbes-essentiels.107'],
  ['répéter', 'fr.sons.verbes-essentiels.209'],
  ['protéger', 'fr.a2.verbes.055'],
];

/** Sentences this lesson teaches FROM rather than teaching.
 *
 *  None. a2.01 reused `fr.a2.verbes.001` because its paradigm frame already had a
 *  `je` row published. Nothing in this corpus is a minimal pair in one frame — the
 *  30 existing `nous mangeons` sentences and the 40 `je préfère` ones were each
 *  written for their own theme, so comparing two of them compares their subject
 *  matter as well as their person. That is the whole authoring case; see the
 *  corpus header. */
const REUSED_SENTENCES: string[] = [];

/** The row shape the generator needs to reason about directly. Every OTHER
 *  column is carried through by manifest-item.ts rather than named here: a
 *  hand-listed row type is how the old itemLiteral came to emit fifteen of an
 *  Item's twenty-seven fields and drop the rest without saying so. */
type Row = Record<string, unknown> & { id: string; fr: string; gender: string | null; status: string };

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const ids = [...VERBS.map((t) => t[1]), ...REUSED_SENTENCES];
  const r = await c.query<Row>(
    `select * from content_items where id = any($1)`,
    [ids],
  );
  const by = new Map(r.rows.map((x) => [x.id, x]));

  const missing = ids.filter((i) => !by.has(i));
  if (missing.length) { console.error('MISSING FROM POSTGRES:', missing.join(', ')); process.exit(1); }
  const unpublished = r.rows.filter((x) => x.status !== 'published');
  if (unpublished.length) { console.error('NOT PUBLISHED:', unpublished.map((x) => `${x.id} (${x.status})`).join(', ')); process.exit(1); }

  /* THE COLUMN THIS GENERATOR DOES NOT KNOW ABOUT.
   *
   * A manifest is a recorded read that a merge later writes back into the seed,
   * so a field this file fails to emit is a field the merge STRIPS from every row
   * it carries. That is not hypothetical: `example`, `skill` and `register` were
   * dropped this way until content:publish put them back. Rather than trust the
   * map in manifest-item.ts to stay complete, stop when a populated column is
   * neither an Item field nor a known workflow column. */
  const unknown = [...new Set(r.rows.flatMap((x) => unknownPopulatedColumns(x as Record<string, unknown>)))];
  if (unknown.length) {
    console.error(
      [
        `!! content_items has populated column(s) this generator does not map: ${unknown.join(', ')}`,
        '   Add them to ITEM_FIELD_TO_COLUMN (if they belong on an Item) or to NON_ITEM_COLUMNS',
        '   (if they are workflow) in scripts/manifest-item.ts. Emitting the manifest without them',
        '   would make every merge that carries these rows strip the column silently.',
      ].join('\n'),
    );
    process.exit(1);
  }
  for (const [verb, id] of VERBS) {
    const x = by.get(id)!;
    if (x.fr !== verb) { console.error(`!! ${id} fr is ${JSON.stringify(x.fr)}, expected ${JSON.stringify(verb)}`); process.exit(1); }
    if (x.gender) { console.error(`!! ${id} "${verb}" carries gender ${JSON.stringify(x.gender)}. An infinitive is not a noun.`); process.exit(1); }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const body = `// GENERATED by scripts/_a209_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${ids.length} rows a2.09 imports rather than authors. Two
// consumers need the whole row and not just the id:
//
//   author-verbes-er-exceptions-batch.ts verifies every field against Postgres
//   before it opens a transaction, so a stale manifest cannot put the lesson
//   ahead of rows nobody has looked at.
//
//   merge-verbes-er-exceptions-into-seed.ts CARRIES these into seed.json. The
//   seed is a CUT, so without the carry the verb cards would draw empty.
//
// Regenerate with: pnpm tsx scripts/_a209_manifest.ts

import type { Item } from '../../ealch-v2/src/content/schema.ts';

/** The ${VERBS.length} infinitives, grouped by pattern, in learner order. */
export const IMPORTED_VERB_ROWS: Item[] = [
${VERBS.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The published sentences this lesson teaches from rather than teaching. */
export const IMPORTED_SENTENCE_ROWS: Item[] = [
${REUSED_SENTENCES.map((id) => itemLiteral(by.get(id)!)).join('\n')}
];

/** verb -> id, in learner order. The only place this pairing is written down. */
export const VERB_ROW_IDS: [string, string][] = [
${VERBS.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${VERBS.length} verbs, ${REUSED_SENTENCES.length} sentences, all published, none carrying a gender`);
  for (const [verb, id] of VERBS) {
    const x = by.get(id)!;
    console.log(`    ${verb.padEnd(12)} ${id.padEnd(36)} respell=${(x.respell as string | null) ?? '-'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
