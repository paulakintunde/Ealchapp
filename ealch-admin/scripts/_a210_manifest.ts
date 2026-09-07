/* Regenerates data/verbes-ir-rows.gen.ts, the recorded read behind a2.10.
 *
 * a2.10 authors NO infinitive. All ten regular -IR verbs it teaches already exist
 * in Postgres, most of them several times over, so the lesson IMPORTS them by id.
 * Two things need the whole row rather than the id:
 *
 *   1. author-verbes-ir-batch.ts verifies the manifest field by field before it
 *      opens a transaction, because a stale manifest puts the lesson ahead of
 *      rows nobody has looked at.
 *   2. merge-verbes-ir-into-seed.ts has to CARRY these rows into seed.json. The
 *      seed is a CUT: `verbes` shows 65 rows in the seed and holds 419 in
 *      Postgres, and eight of these ten live in themes further outside the cut
 *      still. A lesson whose itemIds resolve to nothing renders empty cards on a
 *      device. a2.01 hit the same wall with 30 rows and a2.09 with 17.
 *
 *     pnpm tsx scripts/_a210_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
// ONE implementation of "row -> Item literal", shared with _a201_manifest.ts and
// _a209_manifest.ts. Do not go back to a hand-listed field set: the version that
// emitted fifteen of an Item's twenty-seven fields is how a2.09's merge stripped
// `example`, `skill` and `register` from fr.a1.dictee.099. See manifest-item.ts.
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/verbes-ir-rows.gen.ts');

/** verb -> the row this lesson imports, in the order the learner meets them.
 *
 *  Chosen the way a2.01 and a2.09 chose: a home in `verbes` or
 *  `verbes-essentiels` where one exists, a respelling present, and NO `gender` —
 *  a gendered single-word row joins a1.03's measured ending population and moves
 *  twenty printed figures in a1-03-genre.test.ts.
 *
 *  Three of these carry a respelling that closes a nasal vowel with a plain n,
 *  and this build repairs all three. See RESPELL_REPAIRS in the corpus. Two of
 *  them carry no `flashcard` drill and this build adds it, because all ten are
 *  released into the flashcard hub. See DRILL_ADDITIONS.
 *
 *  `finir` and `choisir` were the two the brief said `author-verbes-batch.ts` had
 *  placed. Neither is in `verbes` as a headword: they are in
 *  `verbes-essentiels`, and `verbes` holds finir SENTENCES instead
 *  (fr.a2.verbes.003, .006, .012). Probed 2026-08-11. */
const VERBS: [string, string][] = [
  ['finir', 'fr.sons.verbes-essentiels.037'],
  ['choisir', 'fr.sons.verbes-essentiels.038'],
  ['réussir', 'fr.sons.verbes-essentiels.112'],
  ['réfléchir', 'fr.sons.verbes-essentiels.230'],
  ['remplir', 'fr.a2.verbes.021'],
  ['grandir', 'fr.a2.famille.007'],
  ['guérir', 'fr.a2.verbes.036'],
  ['obéir', 'fr.a2.animaux-domestiques.078'],
  ['applaudir', 'fr.a2.cinema.051'],
  ['ralentir', 'fr.a2.transports-quotidiens.043'],
];

/** Sentences this lesson teaches FROM rather than teaching.
 *
 *  None. `verbes` already holds three `finir` sentences (fr.a2.verbes.003 "Nous
 *  finissons nos devoirs.", .006 and .012) and the corpus holds twenty-odd more
 *  across other themes, but every one of them was written for its own theme and
 *  carries its own object. The one thing this lesson has to show is six sentences
 *  in which NOTHING moves but the person, so none of them can be a paradigm row.
 *  See the corpus header; a2.01 could reuse one and this lesson cannot. */
const REUSED_SENTENCES: string[] = [];

/** The row shape the generator reasons about directly. Every OTHER column is
 *  carried through by manifest-item.ts rather than named here. */
type Row = Record<string, unknown> & { id: string; fr: string; gender: string | null; status: string };

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const ids = [...VERBS.map((t) => t[1]), ...REUSED_SENTENCES];
  const r = await c.query<Row>('select * from content_items where id = any($1)', [ids]);
  const by = new Map(r.rows.map((x) => [x.id, x]));

  const missing = ids.filter((i) => !by.has(i));
  if (missing.length) { console.error('MISSING FROM POSTGRES:', missing.join(', ')); process.exit(1); }
  const unpublished = r.rows.filter((x) => x.status !== 'published');
  if (unpublished.length) { console.error('NOT PUBLISHED:', unpublished.map((x) => `${x.id} (${x.status})`).join(', ')); process.exit(1); }

  /* THE COLUMN THIS GENERATOR DOES NOT KNOW ABOUT. A manifest is a recorded read
     that a merge later writes back into the seed, so a field this file fails to
     emit is a field the merge STRIPS from every row it carries. Stop rather than
     drop. */
  const unknown = [...new Set(r.rows.flatMap((x) => unknownPopulatedColumns(x as Record<string, unknown>)))];
  if (unknown.length) {
    console.error(
      [
        `!! content_items has populated column(s) this generator does not map: ${unknown.join(', ')}`,
        '   Add them to ITEM_FIELD_TO_COLUMN (if they belong on an Item) or to NON_ITEM_COLUMNS',
        '   (if they are workflow) in scripts/manifest-item.ts.',
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
  const body = `// GENERATED by scripts/_a210_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${ids.length} rows a2.10 imports rather than authors. Two
// consumers need the whole row and not just the id:
//
//   author-verbes-ir-batch.ts verifies every field against Postgres before it
//   opens a transaction, so a stale manifest cannot put the lesson ahead of rows
//   nobody has looked at.
//
//   merge-verbes-ir-into-seed.ts CARRIES these into seed.json. The seed is a CUT,
//   so without the carry the verb cards would draw empty.
//
// Regenerate with: pnpm tsx scripts/_a210_manifest.ts

import type { Item } from '../../ealch-v2/src/content/schema.ts';

/** The ${VERBS.length} infinitives, in learner order. */
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
    console.log(`    ${verb.padEnd(12)} ${id.padEnd(36)} respell=${(x.respell as string | null) ?? '-'}  drills=${String(x.drills)}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
