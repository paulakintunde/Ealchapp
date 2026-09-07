/* Regenerates data/verbes-re-rows.gen.ts, the recorded read behind a2.11.
 *
 * a2.11 authors NO infinitive. All seven regular -RE verbs it teaches already
 * exist in Postgres, and so do both verbs it names as exceptions and refuses to
 * conjugate. Two things need the whole row rather than the id:
 *
 *   1. author-verbes-re-batch.ts verifies the manifest field by field before it
 *      opens a transaction, because a stale manifest puts the lesson ahead of
 *      rows nobody has looked at.
 *   2. merge-verbes-re-into-seed.ts has to CARRY these rows into seed.json. The
 *      seed is a CUT: measured 2026-08-11, `verbes` shows 119 rows in the seed
 *      and holds 470 in Postgres, and NEITHER `fr.a2.verbes.027` (vendre) nor
 *      `fr.a2.verbes.020` (répondre) is in the seed today. A lesson whose
 *      itemIds resolve to nothing renders empty cards on a device.
 *
 *     pnpm tsx scripts/_a211_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
// ONE implementation of "row -> Item literal", shared with _a201_manifest.ts,
// _a209_manifest.ts and _a210_manifest.ts. Do not go back to a hand-listed field
// set: the version that emitted fifteen of an Item's twenty-seven fields is how
// a2.09's merge stripped `example`, `skill` and `register` from
// fr.a1.dictee.099. See manifest-item.ts.
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/verbes-re-rows.gen.ts');

/** verb -> the row this lesson imports, in the order the learner meets them.
 *
 *  Chosen the way a2.01, a2.09 and a2.10 chose: a home in `verbes` or
 *  `verbes-essentiels` where one exists, a respelling present, and NO `gender` —
 *  a gendered single-word row joins a1.03's measured ending population and moves
 *  twenty printed figures in a1-03-genre.test.ts.
 *
 *  SIX OF THE SEVEN CARRY A RESPELLING THIS BUILD REPAIRS, and four of those six
 *  are INVISIBLE to `hasPlainNasalFor`. Measured 2026-08-11: the checker needs
 *  the n or m to END a token, and a regular -RE stem puts a d straight after the
 *  nasal, so `VAHNDR`, `ray-PONDR`, `ah-TAHNDR` and `RAHNDR` all sail through it
 *  while being wrong. See RESPELL_REPAIRS_INVISIBLE in the corpus.
 *
 *  All seven already carry a `flashcard` drill, so this build adds none. That was
 *  measured rather than assumed; a2.10 had to add two. */
const VERBS: [string, string][] = [
  ['vendre', 'fr.a2.verbes.027'],
  ['attendre', 'fr.sons.verbes-essentiels.028'],
  ['répondre', 'fr.a2.verbes.020'],
  ['entendre', 'fr.sons.verbes-essentiels.029'],
  ['perdre', 'fr.sons.verbes-essentiels.032'],
  ['rendre', 'fr.sons.verbes-essentiels.128'],
  ['descendre', 'fr.a1.transports-quotidiens.045'],
];

/** The two verbs this lesson NAMES as exceptions and conjugates nowhere.
 *
 *  READ, NOT IMPORTED. They are here so the batch can prove they exist and can
 *  print what the corpus already holds for them, and so a later author can see
 *  that the decision not to import them was taken with the rows in front of it.
 *  a2.10 settled the rule for the band: a boundary verb is a display string, not
 *  a released row, because releasing it puts a card in the flashcard hub for a
 *  verb no unit has taught yet.
 *
 *  `fr.sons.consonnes.107` is worth noting for a second reason: it already holds
 *  `PRAHⁿDR`, the house form. This build's repairs are therefore not an invention
 *  — the correct convention is already in the corpus, in another theme. */
const NAMED_NOT_TAUGHT: [string, string][] = [
  ['prendre', 'fr.sons.consonnes.107'],
  ['mettre', 'fr.sons.verbes-essentiels.014'],
];

/** Sentences this lesson teaches FROM rather than teaching.
 *
 *  None, and the reason is a2.10's reason with one addition. The published -RE
 *  sentences were each written for their own theme and carry their own object, so
 *  comparing two of them compares their subject matter as well as their person.
 *
 *  The addition is the measurement that decided this build's whole authoring
 *  case. Counted across all 27,499 published sentences on 2026-08-11:
 *
 *    je vends 0 · tu vends 0 · elle vend 0 · on vend 0 · vous vendez 0
 *    elles vendent 0 · ils répondent 0 · ils entendent 0 · ils rendent 0
 *    il rend 0 · ils descendent 0
 *
 *  The forms the ear can settle are attested (il vend 3, ils vendent 3,
 *  elle attend 36, nous attendons 21). THE SINGULAR TRIPLE THIS LESSON EXISTS TO
 *  INSTALL HAS NO EVIDENCE ANYWHERE. Two of its three members do not occur once
 *  in the corpus. */
const REUSED_SENTENCES: string[] = [];

/** The row shape the generator reasons about directly. Every OTHER column is
 *  carried through by manifest-item.ts rather than named here. */
type Row = Record<string, unknown> & { id: string; fr: string; gender: string | null; status: string };

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const ids = [...VERBS.map((t) => t[1]), ...NAMED_NOT_TAUGHT.map((t) => t[1]), ...REUSED_SENTENCES];
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
  for (const [verb, id] of [...VERBS, ...NAMED_NOT_TAUGHT]) {
    const x = by.get(id)!;
    if (x.fr !== verb) { console.error(`!! ${id} fr is ${JSON.stringify(x.fr)}, expected ${JSON.stringify(verb)}`); process.exit(1); }
    if (x.gender) { console.error(`!! ${id} "${verb}" carries gender ${JSON.stringify(x.gender)}. An infinitive is not a noun.`); process.exit(1); }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const body = `// GENERATED by scripts/_a211_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${VERBS.length} rows a2.11 imports rather than authors, plus the
// ${NAMED_NOT_TAUGHT.length} it NAMES as exceptions and conjugates nowhere. Two consumers need the
// whole row and not just the id:
//
//   author-verbes-re-batch.ts verifies every field against Postgres before it
//   opens a transaction, so a stale manifest cannot put the lesson ahead of rows
//   nobody has looked at.
//
//   merge-verbes-re-into-seed.ts CARRIES the imported ones into seed.json. The
//   seed is a CUT, and neither fr.a2.verbes.027 (vendre) nor fr.a2.verbes.020
//   (répondre) is in it today, so without the carry the verb cards would draw
//   empty.
//
// THE NAMED-NOT-TAUGHT ROWS ARE NOT CARRIED AND NOT RELEASED. They are read so
// the batch can prove the boundary verbs exist and so a later author can see the
// decision was taken with the rows in front of it. a2.10 settled the rule: a
// boundary verb is a display string, not a row in the hub.
//
// Regenerate with: pnpm tsx scripts/_a211_manifest.ts

import type { Item } from '../../ealch-v2/src/content/schema.ts';

/** The ${VERBS.length} infinitives this lesson teaches, in learner order. */
export const IMPORTED_VERB_ROWS: Item[] = [
${VERBS.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${NAMED_NOT_TAUGHT.length} it names and refuses to conjugate. READ ONLY: never carried, never
 *  released, never in itemIds. */
export const BOUNDARY_VERB_ROWS: Item[] = [
${NAMED_NOT_TAUGHT.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The published sentences this lesson teaches from rather than teaching. */
export const IMPORTED_SENTENCE_ROWS: Item[] = [
${REUSED_SENTENCES.map((id) => itemLiteral(by.get(id)!)).join('\n')}
];

/** verb -> id, in learner order. The only place this pairing is written down. */
export const VERB_ROW_IDS: [string, string][] = [
${VERBS.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** And the boundary pairing, kept apart so nothing can iterate both by accident. */
export const BOUNDARY_ROW_IDS: [string, string][] = [
${NAMED_NOT_TAUGHT.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${VERBS.length} verbs imported, ${NAMED_NOT_TAUGHT.length} named-not-taught, ${REUSED_SENTENCES.length} sentences, all published, none carrying a gender`);
  for (const [verb, id] of VERBS) {
    const x = by.get(id)!;
    console.log(`    ${verb.padEnd(11)} ${id.padEnd(34)} respell=${(x.respell as string | null) ?? '-'}  drills=${String(x.drills)}`);
  }
  for (const [verb, id] of NAMED_NOT_TAUGHT) {
    const x = by.get(id)!;
    console.log(`    (named) ${verb.padEnd(9)} ${id.padEnd(30)} respell=${(x.respell as string | null) ?? '-'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
