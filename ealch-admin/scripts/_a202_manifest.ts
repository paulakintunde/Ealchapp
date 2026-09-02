/* Regenerates data/aller-venir-rows.gen.ts, the recorded read behind a2.02.
 *
 * a2.02 authors NO infinitive. All six it teaches already exist in Postgres, and
 * so does the seventh its brief names and this build does not import. Two things
 * need the whole row rather than the id:
 *
 *   1. author-aller-venir-batch.ts verifies the manifest field by field before it
 *      opens a transaction, because a stale manifest puts the lesson ahead of
 *      rows nobody has looked at.
 *   2. merge-aller-venir-into-seed.ts has to CARRY these rows into seed.json. The
 *      seed is a CUT: `verbes` shows a fraction of what Postgres holds, and
 *      `verbes-essentiels` shows 39 against 535. A lesson whose itemIds resolve
 *      to nothing renders empty cards on a device.
 *
 * FOUR SENTENCES ARE IMPORTED TOO, and they are the whole of act 2's payoff:
 * `Il finit tôt.` and `Ils finissent tôt.` are a2.10.l1's, `Il part tôt.` and
 * `Ils partent tôt.` are a2.10.l2's, and this lesson authors `Il vient tôt.` and
 * `Ils viennent tôt.` on the SAME frame word. Three lessons, one frame, three
 * different things happening to the plural.
 *
 *     pnpm tsx scripts/_a202_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
// ONE implementation of "row -> Item literal", shared with the other manifest
// generators. Do not go back to a hand-listed field set: the version that emitted
// fifteen of an Item's twenty-seven fields is how a2.09's merge stripped
// `example`, `skill` and `register` from fr.a1.dictee.099. See manifest-item.ts.
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/aller-venir-rows.gen.ts');

/** verb -> the row this lesson imports, in the order the learner meets them.
 *
 *  Chosen the way a2.01, a2.09, a2.10 and a2.11 chose: a home in
 *  `verbes-essentiels` where one exists, a respelling present, and NO `gender` —
 *  a gendered single-word row joins a1.03's measured ending population and moves
 *  twenty printed figures in a1-03-genre.test.ts.
 *
 *  NOT ONE OF THESE SIX NEEDS A RESPELLING REPAIR, which is the first build in
 *  the band that can say so. None of the six carries a nasal vowel at all:
 *  `vuh-NEER`, `tuh-NEER`, `ruh-vuh-NEER`, `duh-vuh-NEER`, `ohb-tuh-NEER` and
 *  `ah-LAY` are all consonant-and-vowel throughout. The nasal work in this lesson
 *  is entirely in the AUTHORED sentences.
 *
 *  `devenir` has a second row at fr.b2.philosophie.136 which is `le devenir`, a
 *  NOUN carrying gender=m. It is not imported and the pre-flight flagged it.
 *  `obtenir` has a second at fr.b1.verbes.058, which is level b1; the a2 row is
 *  taken instead even though it lives outside the verb themes. */
const VERBS: [string, string][] = [
  ['aller', 'fr.sons.verbes-essentiels.003'],
  ['venir', 'fr.sons.verbes-essentiels.010'],
  ['tenir', 'fr.sons.verbes-essentiels.052'],
  ['revenir', 'fr.sons.verbes-essentiels.084'],
  ['devenir', 'fr.sons.verbes-essentiels.083'],
  ['obtenir', 'fr.a2.examens-et-diplomes.038'],
];

/** The verb this lesson's brief lists as a seventh headword and which this build
 *  NAMES NOWHERE and therefore does not import.
 *
 *  READ, NOT IMPORTED. The brief's own test list caps the compounds at three, and
 *  three is what the family card carries. `appartenir` would be a fourth, and it
 *  is also the one of the four whose meaning ("to belong") does nothing to show
 *  that a compound of `tenir` conjugates like `tenir`. It is read so the batch can
 *  prove the row exists and so a later author can see the decision was taken with
 *  the row in front of it. a2.10 settled the rule for the band: a verb this lesson
 *  does not teach is a display string at most, never a released row. */
const NAMED_NOT_TAUGHT: [string, string][] = [
  ['appartenir', 'fr.sons.verbes-essentiels.218'],
];

/** Sentences this lesson teaches FROM rather than teaching.
 *
 *  FOUR, and this is the first build in the band to import any. a2.01, a2.09,
 *  a2.10 and a2.11 all found the corpus had no minimal pairs and authored their
 *  whole paradigm; that is true here as well (see the corpus header). What is
 *  different is that TWO NEIGHBOURS ALREADY AUTHORED MINIMAL PAIRS ON THIS
 *  LESSON'S FRAME WORD, deliberately, and said so in their own headers:
 *
 *    fr.a2.verbes.183/.186   a2.10.l1   Il finit tôt.  ·  Ils finissent tôt.
 *    fr.a2.verbes.463/.464   a2.10.l2   Il part tôt.   ·  Ils partent tôt.
 *
 *  Authoring twins of those would compare four performances instead of four
 *  cells, which is the exact mistake a2.11's corpus header warns about in the
 *  other direction. So they are imported whole and this lesson adds the third
 *  pair on the same frame. */
const REUSED_SENTENCES: string[] = [
  'fr.a2.verbes.183',
  'fr.a2.verbes.186',
  'fr.a2.verbes.463',
  'fr.a2.verbes.464',
];

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
  for (const id of REUSED_SENTENCES) {
    const x = by.get(id)!;
    if (x.kind !== 'sentence') { console.error(`!! ${id} is kind ${JSON.stringify(x.kind)}, and the reused rows are sentences`); process.exit(1); }
    if (!/\btôt\b/.test(String(x.fr))) { console.error(`!! ${id} "${x.fr}" is not on the tôt frame, and that frame is the whole reason it is imported`); process.exit(1); }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const body = `// GENERATED by scripts/_a202_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${VERBS.length} verb rows a2.02 imports rather than authors, the
// ${NAMED_NOT_TAUGHT.length} it reads and does not import, and the ${REUSED_SENTENCES.length} published sentences it teaches
// FROM. Two consumers need the whole row and not just the id:
//
//   author-aller-venir-batch.ts verifies every field against Postgres before it
//   opens a transaction, so a stale manifest cannot put the lesson ahead of rows
//   nobody has looked at.
//
//   merge-aller-venir-into-seed.ts CARRIES them into seed.json. The seed is a
//   CUT, so without the carry the verb cards and the cross-lesson screen would
//   draw empty.
//
// THE READ-ONLY ROW IS NOT CARRIED AND NOT RELEASED. a2.10 settled the rule: a
// verb a lesson does not teach is a display string, not a row in the hub.
//
// THE FOUR SENTENCES ARE a2.10.l1's AND a2.10.l2's, ON THIS LESSON'S FRAME WORD.
// Both of those builds chose \`tôt\` deliberately so a later lesson could hold
// their pairs beside its own. This is that lesson.
//
// Regenerate with: pnpm tsx scripts/_a202_manifest.ts

import type { Item } from '../../ealch-v2/src/content/schema.ts';

/** The ${VERBS.length} infinitives this lesson teaches, in learner order. */
export const IMPORTED_VERB_ROWS: Item[] = [
${VERBS.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${NAMED_NOT_TAUGHT.length} it reads and does not import. READ ONLY: never carried, never
 *  released, never in itemIds, and named on no screen. */
export const READ_ONLY_VERB_ROWS: Item[] = [
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

/** And the read-only pairing, kept apart so nothing can iterate both by accident. */
export const READ_ONLY_ROW_IDS: [string, string][] = [
${NAMED_NOT_TAUGHT.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${VERBS.length} verbs imported, ${NAMED_NOT_TAUGHT.length} read-only, ${REUSED_SENTENCES.length} sentences, all published, none carrying a gender`);
  for (const [verb, id] of VERBS) {
    const x = by.get(id)!;
    console.log(`    ${verb.padEnd(11)} ${id.padEnd(34)} respell=${(x.respell as string | null) ?? '-'}  drills=${String(x.drills)}`);
  }
  for (const id of REUSED_SENTENCES) {
    const x = by.get(id)!;
    console.log(`    (sentence) ${id.padEnd(24)} "${x.fr}" respell=${(x.respell as string | null) ?? '-'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
