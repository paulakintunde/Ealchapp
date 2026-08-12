/* Regenerates data/faire-dire-lire-rows.gen.ts, the recorded read behind a2.12.
 *
 * a2.12 imports MORE WIDELY THAN ANY OTHER LESSON IN BATCH 1, and that is the
 * shape of the lesson rather than an accident: its Owns is the reach of `faire`,
 * so its rows are other themes' phrases with `faire` on the front. Twenty-six
 * rows out of ELEVEN themes, against a2.02's ten out of three.
 *
 * Two consumers need the whole row and not just the id:
 *
 *   1. author-faire-dire-lire-batch.ts verifies the manifest field by field
 *      before it opens a transaction, so a stale manifest cannot put the lesson
 *      ahead of rows nobody has looked at.
 *   2. merge-faire-dire-lire-into-seed.ts CARRIES them into seed.json. The seed
 *      is a CUT — `meteo` shows 26 rows against 336 in Postgres, `routines` and
 *      `sports-et-loisirs` are outside SEED_CUT.themes entirely — and a lesson
 *      whose itemIds resolve to nothing renders empty cards on a device.
 *
 * ── THE ROW CHOSEN FOR EACH EXPRESSION ────────────────────────────────────
 *
 * Where several rows hold one expression, the one taken has, in this order:
 * NO `gender`, a respelling if any row has one, and a `flashcard` drill if any
 * row has one. Level is NOT a criterion: a row's level is a fact about where it
 * was authored, not about who may reference it (a2.02 settled that), and four of
 * these are b1 or b2 rows for phrases an A2 learner uses every day.
 *
 * `faire la queue` has two rows and neither is flagged by the nasal checker:
 * fr.b1.courses.023 respells it `fair lah kuh` with no stressed syllable and
 * fr.b1.tourisme.039 respells it `fair la KUH` with one. The second is taken and
 * the first is recorded in NOT_REPAIRED.
 *
 *     pnpm tsx scripts/_a212_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
// ONE implementation of "row -> Item literal", shared with the other manifest
// generators. Do not go back to a hand-listed field set: the version that
// emitted fifteen of an Item's twenty-seven fields is how a2.09's merge stripped
// `example`, `skill` and `register` from fr.a1.dictee.099. See manifest-item.ts.
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/faire-dire-lire-rows.gen.ts');

/** The three naming forms, in the order the learner meets them.
 *
 *  THE BRIEF IS WRONG ABOUT WHERE TWO OF THESE LIVE. It says `lire` has "5 rows
 *  fr.sons.verbes-essentiels.*" and `écrire` the same. Measured 2026-08-12:
 *  NOT ONE of the five `lire` rows is in `verbes-essentiels`, and nor is any of
 *  the five `écrire` rows. `faire` and `dire` are there; `lire` is not, in any
 *  theme that holds a verb.
 *
 *  So the three do not share a theme and this build does not pretend they do.
 *  `lire` is taken from `dictee`, which is the only ungendered row carrying a
 *  respelling: fr.a1.ecole.048 has `gender=m`, and fr.a1.verbes-du-quotidien.112
 *  and fr.a1.rp-loisirs.041 have no respelling between them.
 *
 *  fr.a1.dictee.091 carries {voiceflash, review} and no `flashcard`, and this
 *  lesson releases it into the hub, so the batch adds one. See DRILL_ADDITIONS
 *  in the corpus. */
const VERBS: [string, string][] = [
  ['faire', 'fr.sons.verbes-essentiels.004'],
  ['dire', 'fr.sons.verbes-essentiels.005'],
  ['lire', 'fr.a1.dictee.091'],
];

/** The twenty-three expressions this lesson imports rather than authors, with
 *  the English verb group each one belongs to.
 *
 *  THE BRIEF SAYS THESE ARE "a phrase set, not headwords. Probe them as
 *  --tokens, not --words." That is half right and the half that is wrong costs a
 *  build: twenty-two of the forty-eight candidates probed on 2026-08-12 exist as
 *  full ITEM rows, and `faire la queue` has TEN. A `--tokens` probe reports
 *  sentence evidence only, and `faire la cuisine` returns pg=0 there while
 *  fr.a1.famille.136 has held it as a published phrase all along. */
const EXPRESSIONS: [string, string, string][] = [
  // English "do"
  ['do', 'faire les courses', 'fr.a2.courses.018'],
  ['do', 'faire le ménage', 'fr.a1.routines.030'],
  ['do', 'faire la vaisselle', 'fr.a1.routines.031'],
  ['do', 'faire la lessive', 'fr.a1.routines.032'],
  ['do', 'faire ses devoirs', 'fr.a1.ecole.106'],
  // English "make"
  ['make', 'faire le lit', 'fr.a1.maison.122'],
  ['make', 'faire du bruit', 'fr.b1.voisinage.062'],
  ['make', 'faire un effort', 'fr.b2.rp-achats.004'],
  // English "go" or "play"
  ['go', 'faire du sport', 'fr.b1.bien-etre.035'],
  ['go', 'faire du vélo', 'fr.a1.sports-et-loisirs.109'],
  ['go', 'faire du ski', 'fr.a1.sports-et-loisirs.074'],
  ['go', 'faire de la natation', 'fr.a1.sports-et-loisirs.073'],
  // English "take" or "go for"
  ['take', 'faire une promenade', 'fr.a1.animaux-domestiques.123'],
  // English "be", and these five are a1.10's
  ['be', 'il fait beau', 'fr.a1.meteo.027'],
  ['be', 'il fait chaud', 'fr.a1.meteo.029'],
  ['be', 'il fait froid', 'fr.a1.meteo.028'],
  ['be', 'il fait frais', 'fr.a1.meteo.039'],
  ['be', 'il fait mauvais', 'fr.a1.meteo.037'],
  // English has a verb of its very own
  ['own', 'faire la cuisine', 'fr.a1.famille.136'],
  ['own', 'faire la queue', 'fr.b1.tourisme.039'],
  ['own', 'faire la fête', 'fr.a1.amis.026'],
  ['own', 'faire la sieste', 'fr.a1.routines.043'],
  ['own', 'faire attention', 'fr.a1.dictee.122'],
];

/** Rows this build READS and does not import, so a later author can see the
 *  decision was taken with the row in front of it.
 *
 *  `écrire` is the fourth headword the brief tells this author to probe, and it
 *  reaches no screen. The unit names three verbs; a fourth paradigm would give
 *  the paradigm act more weight than the Owns, which doctrine §B.5 says is the
 *  wrong lesson. Its ungendered rows are recorded here anyway, because "we
 *  looked and chose not to" is worth more to the next author than silence.
 *
 *  `faire son lit` carries `FEHR sohn LEE`, which the shared nasal checker DOES
 *  flag and which this build does not repair, because it does not display it:
 *  the `make` group takes `faire le lit` instead. It is read so the finding is
 *  recorded rather than lost. */
const READ_NOT_IMPORTED: [string, string][] = [
  ['écrire', 'fr.a1.dictee.090'],
  ['faire son lit', 'fr.a1.routines.050'],
  ['faire la queue', 'fr.b1.courses.023'],
];

type Row = Record<string, unknown> & { id: string; fr: string; gender: string | null; status: string };

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const ids = [...VERBS.map((t) => t[1]), ...EXPRESSIONS.map((t) => t[2]), ...READ_NOT_IMPORTED.map((t) => t[1])];
  if (new Set(ids).size !== ids.length) {
    console.error('!! an id appears twice in the manifest lists');
    process.exit(1);
  }
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

  /* EVERY ROW PAIRS WITH THE STRING IT CLAIMS, and NONE carries a gender.
     A gendered single-word row joins a1.03's measured ending population.
     Measured 2026-08-12: none of these twenty-six carries one, and the two
     gendered `il fait <adjective>` rows in meteo (fr.a1.meteo.037 and .039)
     were run through the REAL endingPopulation and do not join, because the
     population admits single-word nouns only. They are imported and the batch
     re-proves it. */
  for (const [label, id] of [...VERBS, ...EXPRESSIONS.map((e) => [e[1], e[2]] as [string, string]), ...READ_NOT_IMPORTED]) {
    const x = by.get(id)!;
    if (x.fr !== label) { console.error(`!! ${id} fr is ${JSON.stringify(x.fr)}, expected ${JSON.stringify(label)}`); process.exit(1); }
  }
  for (const [verb, id] of VERBS) {
    const x = by.get(id)!;
    if (x.gender) { console.error(`!! ${id} "${verb}" carries gender ${JSON.stringify(x.gender)}. A naming form is not a noun.`); process.exit(1); }
  }
  /* EVERY EXPRESSION REALLY IS BUILT ON `faire`. The weather five say `il fait`
     and the rest say `faire`, and nothing else may be in this list: an
     expression that is not a form of faire is a vocabulary item, and this lesson
     teaches no vocabulary. */
  for (const [, label, id] of EXPRESSIONS) {
    if (!/^(faire |il fait )/.test(label)) { console.error(`!! ${id} ${JSON.stringify(label)} is not built on faire`); process.exit(1); }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const body = `// GENERATED by scripts/_a212_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${VERBS.length} naming forms and ${EXPRESSIONS.length} expressions a2.12 imports rather
// than authors, and the ${READ_NOT_IMPORTED.length} rows it reads and refuses. Two consumers need
// the whole row rather than the id:
//
//   author-faire-dire-lire-batch.ts verifies every field against Postgres before
//   it opens a transaction, so a stale manifest cannot put the lesson ahead of
//   rows nobody has looked at.
//
//   merge-faire-dire-lire-into-seed.ts CARRIES them into seed.json. The seed is
//   a CUT — meteo shows 26 rows against 336 in Postgres — so without the carry
//   most of this lesson's thirty expression cards would draw empty.
//
// THE READ-ONLY ROWS ARE NOT CARRIED AND NOT RELEASED. a2.10 settled the rule: a
// row a lesson does not teach is a display string at most, never a row in the hub.
//
// Regenerate with: pnpm tsx scripts/_a212_manifest.ts

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** The ${VERBS.length} naming forms this lesson teaches, in learner order. */
export const IMPORTED_VERB_ROWS: Item[] = [
${VERBS.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${EXPRESSIONS.length} expressions this lesson imports, grouped by the English verb
 *  French does not use. */
export const IMPORTED_EXPRESSION_ROWS: Item[] = [
${EXPRESSIONS.map(([, , id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${READ_NOT_IMPORTED.length} rows read and refused. READ ONLY: never carried, never released,
 *  never in itemIds, and named on no screen. */
export const READ_ONLY_ROWS: Item[] = [
${READ_NOT_IMPORTED.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** verb -> id, in learner order. The only place this pairing is written down. */
export const VERB_ROW_IDS: [string, string][] = [
${VERBS.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** group -> expression -> id, in the order the tapTable renders the groups. */
export const EXPRESSION_ROW_IDS: [string, string, string][] = [
${EXPRESSIONS.map(([g, v, id]) => `  [${JSON.stringify(g)}, ${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** And the read-only pairing, kept apart so nothing can iterate both by accident. */
export const READ_ONLY_ROW_IDS: [string, string][] = [
${READ_NOT_IMPORTED.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${VERBS.length} naming forms, ${EXPRESSIONS.length} expressions, ${READ_NOT_IMPORTED.length} read-only, all published`);
  const themes = new Set([...VERBS, ...EXPRESSIONS.map((e) => [e[1], e[2]] as [string, string])].map(([, id]) => String(by.get(id)!.theme)));
  console.log(`  imported out of ${themes.size} themes: ${[...themes].sort().join(', ')}`);
  for (const [g, v, id] of EXPRESSIONS) {
    const x = by.get(id)!;
    console.log(`    ${g.padEnd(5)} ${v.padEnd(22)} ${id.padEnd(32)} respell=${(x.respell as string | null) ?? '(none)'}  drills=${String(x.drills)}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
