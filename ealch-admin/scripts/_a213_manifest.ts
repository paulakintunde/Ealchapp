/* Regenerates data/modaux-rows.gen.ts, the recorded read behind a2.13.
 *
 * a2.13 IMPORTS EVERY VERB THAT IS NOT ONE OF ITS THREE, and that is the shape
 * of the lesson rather than an economy: its Owns is that a modal lets a learner
 * use a verb nobody taught them, so a corpus which authored its own infinitives
 * would be quietly contradicting the thing it teaches.
 *
 * Twenty rows out of eleven themes: three naming forms, ten infinitives, five
 * sentences and two halves of the register pair.
 *
 * Two consumers need the whole row and not just the id:
 *
 *   1. author-modaux-batch.ts verifies the manifest field by field before it
 *      opens a transaction, so a stale manifest cannot put the lesson ahead of
 *      rows nobody has looked at.
 *   2. merge-modaux-into-seed.ts CARRIES them into seed.json. The seed is a CUT
 *      — `jardinage`, `argent-quotidien` and `rp-achats` are outside
 *      SEED_CUT.themes entirely — and a lesson whose itemIds resolve to nothing
 *      renders empty cards on a device.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying a GENDER, because a gendered single-word noun joins a1.03's
 * measured ending population and moves twenty printed figures in
 * a1-03-genre.test.ts. Nine of the ten `devoir` rows in the corpus are the noun
 * and exactly one is the verb.
 *
 * A row carrying U+203F UNDERTIE in its respelling, because that glyph renders
 * as a low underscore on a Pixel 6. fr.sons.voyelles.311 is the row this check
 * exists for; it is in READ_NOT_IMPORTED and the check is here so the next
 * author cannot import it by accident.
 *
 * A row whose `fr` is not the string this file claims it is.
 *
 *     pnpm tsx scripts/_a213_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import { NAMING_FORMS, MODAL_ORDER, READ_NOT_IMPORTED, UNSEEN_VERB } from './data/modaux-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/modaux-rows.gen.ts');

/** The three naming forms, in the order the learner meets them. Unlike a2.12's
 *  three, all three share one theme, which is the exception and not the rule. */
const VERBS: [string, string][] = MODAL_ORDER.map((m) => [m, NAMING_FORMS[m].id]);

/** The ten infinitives this lesson pairs with a modal. NOT ONE IS AUTHORED.
 *
 *  `payer` is the frame verb and carries all eighteen grid cells; the other nine
 *  arrive in the situation rows. Every one is ungendered and respelled, which
 *  the generator re-proves rather than trusting. */
const INFINITIVES: [string, string][] = [
  ['payer', 'fr.sons.verbes-essentiels.059'],
  ['commander', 'fr.a2.rp-achats.019'],
  ['attendre', 'fr.a1.transports-quotidiens.046'],
  ['choisir', 'fr.a2.courses.063'],
  ['boire', 'fr.a1.rp-repas.014'],
  ['acheter', 'fr.a1.argent-quotidien.061'],
  ['aider', 'fr.a1.amis.024'],
  ['chercher', 'fr.a1.rp-achats.004'],
  ['conduire', 'fr.a1.routines.107'],
  ['arriver', 'fr.a1.transports-quotidiens.047'],
];

/** The modal + infinitive SENTENCES that exist whole AND respelled.
 *
 *  THE BRIEF'S 628 IS RIGHT AND USELESS. Six hundred and twenty-eight published
 *  sentences hold the shape; TWELVE carry a respelling, and a row without one
 *  reaches a card the learner cannot say. Of the twelve, SIX were worth having
 *  and one of those six had to be given back: `Je dois étudier pour mon examen
 *  demain.` cannot be respelled in the house notation at all, because `mon
 *  examen` liaises and needs both a superscript and a U+203F tie. The batch
 *  caught it; see READ_NOT_IMPORTED. Three are genuine modal frames and two are
 *  the `il faut` context card. */
const SENTENCES: [string, string][] = [
  ['Elle veut devenir médecin.', 'fr.a2.verbes-essentiels.041'],
  ['Tu peux ouvrir la fenêtre, s\'il te plaît ?', 'fr.a1.verbes-essentiels.033'],
  ['Nous devons partir avant midi.', 'fr.a2.verbes-essentiels.040'],
  ['Il faut réserver.', 'fr.a1.cafe.173'],
  ['Il faut aller plus vite.', 'fr.sons.liaisons.220'],
];

/** The register pair, imported whole. NEITHER ROW CARRIES A RESPELLING and this
 *  build adds one to each — see RESPELL_ADDITIONS in the corpus. They are kept
 *  in their own group because they are the only two rows in the manifest whose
 *  respelling comes from this build rather than from the database. */
const REGISTER: [string, string][] = [
  ['Je veux un café, s\'il vous plaît.', 'fr.a1.verbes-du-quotidien.035'],
  ['Je voudrais un café, s\'il vous plaît.', 'fr.a1.cafe.051'],
];

/** Rows READ and refused, recorded with the row in front of the reader. */
const REFUSED: [string, string][] = READ_NOT_IMPORTED
  .filter((r) => r.id !== UNSEEN_VERB.sourceId)
  .map((r) => [r.fr, r.id]);

/** The unseen verb, in a group of its own so nothing can iterate it with the
 *  imports by accident. IT IS NOT AN IMPORT: the lesson must never put a card
 *  for `arroser` on a screen, because the claim being tested is that the learner
 *  can use a verb the lesson never taught. The row is carried here so the batch
 *  can check the respelling the mission prints against the database. */
const UNSEEN: [string, string][] = [[UNSEEN_VERB.fr, UNSEEN_VERB.sourceId]];

const IMPORTED = [...VERBS, ...INFINITIVES, ...SENTENCES, ...REGISTER];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const all = [...IMPORTED, ...REFUSED, ...UNSEEN];
  const ids = all.map(([, id]) => id);
  const dupes = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dupes.length) { console.error(`!! duplicate ids in the manifest: ${dupes.join(', ')}`); process.exit(1); }

  const r = await c.query<Record<string, unknown>>('select * from content_items where id = any($1)', [ids]);
  const by = new Map(r.rows.map((x) => [String(x.id), x]));

  const missing = ids.filter((id) => !by.has(id));
  if (missing.length) { console.error(`!! not in Postgres: ${missing.join(', ')}`); process.exit(1); }

  const unpublished = ids.filter((id) => by.get(id)!.status !== 'published');
  if (unpublished.length) { console.error(`!! not published: ${unpublished.join(', ')}`); process.exit(1); }

  /* A column carrying real content that this generator does not know how to
     emit is how a2.09's merge stripped `example`, `skill` and `register` from a
     row it carried. See manifest-item.ts. */
  for (const id of ids) {
    const unknown = unknownPopulatedColumns(by.get(id)!);
    if (unknown.length) { console.error(`!! ${id} has populated columns this generator does not emit: ${unknown.join(', ')}`); process.exit(1); }
  }

  /* EVERY ROW IS THE STRING THIS FILE CLAIMS IT IS. */
  for (const [label, id] of all) {
    const x = by.get(id)!;
    if (x.fr !== label) { console.error(`!! ${id} fr is ${JSON.stringify(x.fr)}, expected ${JSON.stringify(label)}`); process.exit(1); }
  }

  /* NO GENDER ON ANYTHING IMPORTED. Nine of ten `devoir` rows are the noun. */
  for (const [label, id] of [...IMPORTED, ...UNSEEN]) {
    const x = by.get(id)!;
    if (x.gender) { console.error(`!! ${id} ${JSON.stringify(label)} carries gender ${JSON.stringify(x.gender)}. It would join a1.03's ending population.`); process.exit(1); }
  }

  /* NO U+203F. fr.sons.voyelles.311 is why this check exists. */
  for (const [label, id] of [...IMPORTED, ...UNSEEN]) {
    const respell = String(by.get(id)!.respell ?? '');
    if (respell.includes('‿')) {
      console.error(`!! ${id} ${JSON.stringify(label)} respells with U+203F UNDERTIE: ${JSON.stringify(respell)}`);
      console.error('   That glyph renders as a low underscore on a Pixel 6. Put the row in READ_NOT_IMPORTED.');
      process.exit(1);
    }
  }

  /* EVERY INFINITIVE REALLY IS ONE, and every naming form really is a verb. */
  for (const [label, id] of [...INFINITIVES, ...UNSEEN]) {
    if (!/^[a-zà-ÿ]+(er|ir|re|oir)$/.test(label)) { console.error(`!! ${id} ${JSON.stringify(label)} is not a single-word infinitive`); process.exit(1); }
    if (by.get(id)!.kind === 'sentence') { console.error(`!! ${id} ${JSON.stringify(label)} is a sentence, not a word`); process.exit(1); }
  }
  for (const [, id] of VERBS) {
    if (!String(by.get(id)!.respell ?? '')) { console.error(`!! ${id} has no respelling; a naming form without one is a card the learner cannot say`); process.exit(1); }
  }

  /* THE REGISTER PAIR REALLY DOES LACK A RESPELLING. If somebody has since
     added one, RESPELL_ADDITIONS would overwrite it and must be re-decided. */
  for (const [label, id] of REGISTER) {
    const respell = by.get(id)!.respell;
    if (respell !== null && respell !== undefined) {
      console.error(`!! ${id} ${JSON.stringify(label)} now HAS a respelling: ${JSON.stringify(respell)}`);
      console.error('   RESPELL_ADDITIONS would overwrite it. Re-decide before regenerating.');
      process.exit(1);
    }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const themes = new Set(IMPORTED.map(([, id]) => String(by.get(id)!.theme)));

  const body = `// GENERATED by scripts/_a213_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${IMPORTED.length} rows a2.13 imports rather than authors, out of
// ${themes.size} themes, plus the ${REFUSED.length} it reads and refuses and the ${UNSEEN.length} it deliberately
// does not release.
//
// NOT ONE INFINITIVE IN THIS LESSON IS AUTHORED. The Owns is that a modal lets a
// learner use a verb nobody taught them, so the corpus demonstrates the same
// claim the missions make.
//
// Two consumers need the whole row rather than the id:
//
//   author-modaux-batch.ts verifies every field against Postgres before it opens
//   a transaction, so a stale manifest cannot put the lesson ahead of rows nobody
//   has looked at.
//
//   merge-modaux-into-seed.ts CARRIES them into seed.json. The seed is a CUT, and
//   jardinage, argent-quotidien and rp-achats sit outside SEED_CUT.themes, so
//   without the carry the situation cards would draw empty on a device.
//
// THE REFUSED ROWS ARE NOT CARRIED AND NOT RELEASED. a2.10 settled the rule: a
// row a lesson does not teach is a display string at most, never a row in the hub.
//
// THE UNSEEN ROW IS NOT CARRIED EITHER, AND FOR A DIFFERENT REASON. \`arroser\` is
// the verb the generalisation mission hands the learner cold. The moment the
// lesson gives them a card for it, the lesson has taught it and the claim being
// tested is gone. It is here so the batch can check the respelling the mission
// prints against the database, and for nothing else.
//
// Regenerate with: pnpm tsx scripts/_a213_manifest.ts

import type { Item } from '../../ealch-v2/src/content/schema.ts';

/** The ${VERBS.length} naming forms this lesson teaches, in learner order. All three share
 *  one theme, which a2.12's three did not. */
export const IMPORTED_VERB_ROWS: Item[] = [
${VERBS.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${INFINITIVES.length} infinitives that follow a modal here. Every one imported. */
export const IMPORTED_INFINITIVE_ROWS: Item[] = [
${INFINITIVES.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${SENTENCES.length} modal frames that already existed whole AND respelled, out of the
 *  628 that hold the shape and the 12 that carry a respelling. */
export const IMPORTED_SENTENCE_ROWS: Item[] = [
${SENTENCES.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The register pair. NEITHER ROW HAS A RESPELLING in the database; this build
 *  adds one to each, and the batch is the only place that happens. */
export const IMPORTED_REGISTER_ROWS: Item[] = [
${REGISTER.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${REFUSED.length} rows read and refused. READ ONLY: never carried, never released,
 *  never in itemIds, and named on no screen. */
export const READ_ONLY_ROWS: Item[] = [
${REFUSED.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The unseen verb. NOT AN IMPORT. Never in itemIds, never in a deck, never a
 *  term. Present so the batch can check what the mission prints. */
export const UNSEEN_VERB_ROW: Item[] = [
${UNSEEN.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** verb -> id, in learner order. The only place this pairing is written down. */
export const VERB_ROW_IDS: [string, string][] = [
${VERBS.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** infinitive -> id, in the order the lesson meets them. */
export const INFINITIVE_ROW_IDS: [string, string][] = [
${INFINITIVES.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** sentence -> id. */
export const SENTENCE_ROW_IDS: [string, string][] = [
${SENTENCES.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** register half -> id. */
export const REGISTER_ROW_IDS: [string, string][] = [
${REGISTER.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** And the refused pairing, kept apart so nothing can iterate both by accident. */
export const READ_ONLY_ROW_IDS: [string, string][] = [
${REFUSED.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** Every id this lesson may put in \`itemIds\`. The unseen verb and the refused
 *  rows are deliberately absent, and the batch asserts that absence. */
export const IMPORTABLE_IDS: string[] = [
${IMPORTED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** The themes these rows came out of. */
export const SOURCE_THEMES: string[] = ${JSON.stringify([...themes].sort())};
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${VERBS.length} naming forms, ${INFINITIVES.length} infinitives, ${SENTENCES.length} sentences, ${REGISTER.length} register, ${REFUSED.length} refused, ${UNSEEN.length} unseen`);
  console.log(`  ${IMPORTED.length} imported out of ${themes.size} themes: ${[...themes].sort().join(', ')}`);
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    console.log(`    ${String(label).slice(0, 42).padEnd(44)} ${id.padEnd(34)} respell=${(x.respell as string | null) ?? '(none)'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
