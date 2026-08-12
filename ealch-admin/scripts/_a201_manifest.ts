/* Regenerates data/verbes-er-rows.gen.ts, the recorded read behind a2.01.
 *
 * a2.01 authors no infinitive. All thirty already exist in Postgres, so the
 * lesson IMPORTS them by id. Two things need the row rather than the id:
 *
 *   1. author-verbes-er-batch.ts verifies the manifest field by field before it
 *      opens a transaction, because a stale manifest puts the lesson ahead of
 *      rows nobody has looked at.
 *   2. merge-verbes-er-into-seed.ts has to CARRY these rows into seed.json.
 *      The seed is a CUT: 30 of the 32 rows this lesson imports are in Postgres
 *      and NOT in the seed today, and a lesson whose itemIds resolve to nothing
 *      renders empty cards on a device. a1.22 hit the same wall with 40 rows.
 *
 *     pnpm tsx scripts/_a201_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
// ONE implementation of "row -> Item literal", shared with _a209_manifest.ts.
// This file used to carry its own, emitting fifteen of the twenty-seven fields an
// Item has and dropping the rest in silence. See manifest-item.ts.
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/verbes-er-rows.gen.ts');

/** verb -> the row this lesson imports, in the order the learner meets them.
 *  Chosen for: a home in `verbes` or `verbes-essentiels` where one exists, a
 *  respelling present, and NO `gender` (a gendered single-word row joins a1.03's
 *  measured ending population). */
const THIRTY: [string, string][] = [
  ['parler', 'fr.sons.verbes-essentiels.015'],
  ['regarder', 'fr.sons.verbes-essentiels.024'],
  ['écouter', 'fr.sons.verbes-essentiels.025'],
  ['aimer', 'fr.sons.verbes-essentiels.016'],
  ['habiter', 'fr.sons.verbes-essentiels.026'],
  ['travailler', 'fr.a2.verbes.031'],
  ['chercher', 'fr.a2.verbes.017'],
  ['trouver', 'fr.a2.verbes.018'],
  ['demander', 'fr.a2.verbes.019'],
  ['arriver', 'fr.a2.verbes.013'],
  ['rester', 'fr.a2.verbes.015'],
  ['rentrer', 'fr.a2.verbes.016'],
  ['gagner', 'fr.a2.verbes.032'],
  ['donner', 'fr.sons.consonnes.140'],
  ['aider', 'fr.a1.amis.024'],
  ['porter', 'fr.sons.verbes-essentiels.141'],
  ['entrer', 'fr.sons.verbes-essentiels.043'],
  ['montrer', 'fr.sons.verbes-essentiels.054'],
  ['jouer', 'fr.a1.amis.023'],
  ['chanter', 'fr.a1.evenements-familiaux.059'],
  ['danser', 'fr.a1.evenements-familiaux.060'],
  ['visiter', 'fr.sons.verbes-essentiels.129'],
  ['inviter', 'fr.a1.amis.019'],
  ['étudier', 'fr.a1.verbes-essentiels.001'],
  ['adorer', 'fr.sons.verbes-essentiels.110'],
  ['détester', 'fr.sons.verbes-essentiels.109'],
  ['fermer', 'fr.sons.verbes-essentiels.035'],
  ['marcher', 'fr.a1.routines.108'],
  ['téléphoner', 'fr.a1.verbes-essentiels.003'],
  ['oublier', 'fr.sons.verbes-essentiels.055'],
];

/** Sentences this lesson teaches FROM rather than teaching. */
const REUSED_SENTENCES = ['fr.a2.verbes.001', 'fr.a2.verbes.061'];

/** The row shape the generator needs to reason about directly. Every OTHER
 *  column is carried through by manifest-item.ts rather than named here: a
 *  hand-listed row type is how the old itemLiteral came to emit fifteen of an
 *  Item's twenty-seven fields and drop the rest without saying so. */
type Row = Record<string, unknown> & { id: string; fr: string; gender: string | null; status: string };

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const ids = [...THIRTY.map((t) => t[1]), ...REUSED_SENTENCES];
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
  for (const [verb, id] of THIRTY) {
    const x = by.get(id)!;
    if (x.fr !== verb) { console.error(`!! ${id} fr is ${JSON.stringify(x.fr)}, expected ${JSON.stringify(verb)}`); process.exit(1); }
    if (x.gender) { console.error(`!! ${id} "${verb}" carries gender ${JSON.stringify(x.gender)}. An infinitive is not a noun.`); process.exit(1); }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const body = `// GENERATED by scripts/_a201_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${ids.length} rows a2.01 imports rather than authors. Two
// consumers need the whole row and not just the id:
//
//   author-verbes-er-batch.ts verifies every field against Postgres before it
//   opens a transaction, so a stale manifest cannot put the lesson ahead of rows
//   nobody has looked at.
//
//   merge-verbes-er-into-seed.ts CARRIES these into seed.json. The seed is a CUT
//   and ${ids.length - 2} of these ${ids.length} rows are in Postgres and not in the seed, so
//   without the carry every one of the thirty verb cards would draw empty.
//
// Regenerate with: pnpm tsx scripts/_a201_manifest.ts

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** The thirty infinitives, in the order the learner meets them. */
export const IMPORTED_VERB_ROWS: Item[] = [
${THIRTY.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The published sentences this lesson teaches from rather than teaching. */
export const IMPORTED_SENTENCE_ROWS: Item[] = [
${REUSED_SENTENCES.map((id) => itemLiteral(by.get(id)!)).join('\n')}
];

/** verb -> id, in learner order. The only place this pairing is written down. */
export const VERB_ROW_IDS: [string, string][] = [
${THIRTY.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${THIRTY.length} verbs, ${REUSED_SENTENCES.length} sentences, all published, none carrying a gender`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
