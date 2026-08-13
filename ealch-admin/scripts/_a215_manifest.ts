/* Regenerates data/prendre-mettre-rows.gen.ts, the recorded read behind a2.15.
 *
 * TWELVE ROWS IMPORTED, ONE REPAIRED AND CARRIED WITHOUT BEING IMPORTED, AND
 * TWELVE READ AND REFUSED.
 *
 * The refusals are the interesting half and they are not economies. The four
 * best respelled `prendre` sentences in 27,600 published rows are all about a
 * train, a bus, a metro or a bicycle, and every one of them is a2.27's at
 * seq 26; the best `apprennent` sentence carries U+203F; and all three published
 * sentences holding a conjugated `battre` are about eggs or a heartbeat, and the
 * eggs are why this lesson does not use `les œufs` as a frame — see the corpus
 * header, item 7.
 *
 * Three consumers need the whole row and not just the id:
 *
 *   1. author-prendre-mettre-batch.ts verifies the manifest field by field
 *      before it opens a transaction, so a stale manifest cannot put the lesson
 *      ahead of rows nobody has looked at.
 *   2. merge-prendre-mettre-into-seed.ts CARRIES them into seed.json. The seed
 *      is a CUT and a lesson whose itemIds resolve to nothing renders empty
 *      cards on a device.
 *   3. The REPAIR_ONLY group is carried and NOT importable: a row this build
 *      repairs in Postgres has to reach the seed with the repair on it, and
 *      `fr.a1.transports-quotidiens.041` is repaired without being displayed.
 *      The batch asserts it is in no itemId.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying a GENDER, because a gendered single-word noun joins a1.03's
 * measured ending population and moves twenty printed figures in
 * a1-03-genre.test.ts. `fr.a1.ecole.051` (apprendre) carries one, which is why
 * this lesson imports `fr.a2.disciplines.051` instead.
 *
 * A row carrying U+203F UNDERTIE in its respelling, because that glyph renders
 * as a low underscore on a Pixel 6.
 *
 * A row carrying U+0153 œ, because `letterCount()` in dictee.logic.ts strips
 * everything outside [A-Za-zÀ-ÿ] and so does the letter bank in
 * MissionRich.tsx:1343. The ligature vanishes from the exercise and from the
 * answer it is compared against, so the dictée marks a misspelling correct.
 * This check is new in this band and the corpus header explains it.
 *
 * A row whose respelling is missing, because this lesson imports for the
 * respelling and for nothing else.
 *
 * A row whose `fr` is not the string this file claims it is.
 *
 *     pnpm tsx scripts/_a215_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  NAMING_FORMS, NOT_REPAIRED, READ_NOT_IMPORTED, RESPELL_REPAIRS_INVISIBLE,
  RESPELL_REPAIRS_VISIBLE,
} from './data/prendre-mettre-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/prendre-mettre-rows.gen.ts');

/** The eight naming forms, in the order the learner meets them: the three heads
 *  first, then the compounds each one buys, then a2.11's `vendre`, which the
 *  trap contrasts against. */
const NAMING: [string, string][] = [
  ['prendre', NAMING_FORMS.prendre.id],
  ['apprendre', NAMING_FORMS.apprendre.id],
  ['comprendre', NAMING_FORMS.comprendre.id],
  ['surprendre', NAMING_FORMS.surprendre.id],
  ['mettre', NAMING_FORMS.mettre.id],
  ['permettre', NAMING_FORMS.permettre.id],
  ['promettre', NAMING_FORMS.promettre.id],
  ['vendre', NAMING_FORMS.vendre.id],
];

/** THE PUBLISHED EVIDENCE, and the measurement that shaped it.
 *
 *  330 published sentences hold a present-tense form of one of these three
 *  verbs or their compounds. Twenty-four of the prendre family carry a
 *  respelling and eight of the mettre family do; `battre` has ZERO.
 *
 *  Of the twenty-four, four are a2.27's, one is a2.07's, three carry U+203F and
 *  several close a nasal with a plain n. What is left and clean is these four,
 *  and they are worth having: two of them show the family in a row written for a
 *  pronunciation theme years before this lesson existed. */
const EVIDENCE: [string, string][] = [
  ['J\'apprends le français depuis le printemps.', 'fr.sons.nasales.027'],
  ['Maman prend toujours son temps.', 'fr.sons.nasales.020'],
  ['Elle met sa veste et ferme la porte.', 'fr.sons.voyelles.448'],
  ['Tu mets du beurre sur tout, toujours.', 'fr.sons.voyelles.386'],
];

/** REPAIRED AND CARRIED, NEVER IMPORTED. `fr.a1.transports-quotidiens.041` is
 *  flagged by `hasPlainNasalFor` and this build repairs it, so it has to reach
 *  the seed with the repair on it. It is named on no screen and the batch
 *  asserts it is in no itemId. */
const REPAIR_ONLY: [string, string][] = RESPELL_REPAIRS_VISIBLE
  .filter((r) => r.id === 'fr.a1.transports-quotidiens.041')
  .map((r) => [r.fr, r.id] as [string, string]);

/** Rows READ and refused, recorded with the row in front of the reader. */
const REFUSED: [string, string][] = READ_NOT_IMPORTED.map((r) => [r.fr, r.id]);

/** Rows inspected and left alone. Not emitted, but VERIFIED: the corpus header
 *  makes a claim about each one's respelling and a claim that has stopped being
 *  true should fail here rather than sit in a comment. */
const INSPECTED: [string, string][] = NOT_REPAIRED.map((r) => [r.id, r.respell]);

const IMPORTED = [...NAMING, ...EVIDENCE];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const all = [...IMPORTED, ...REPAIR_ONLY, ...REFUSED];
  const ids = all.map(([, id]) => id);
  const dupes = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dupes.length) { console.error(`!! duplicate ids in the manifest: ${dupes.join(', ')}`); process.exit(1); }

  const r = await c.query<Record<string, unknown>>(
    'select *, drills::text[] drills from content_items where id = any($1)',
    [[...ids, ...INSPECTED.map(([id]) => id)]]);
  const by = new Map(r.rows.map((x) => [String(x.id), x]));

  const missing = [...ids, ...INSPECTED.map(([id]) => id)].filter((id) => !by.has(id));
  if (missing.length) { console.error(`!! not in Postgres: ${missing.join(', ')}`); process.exit(1); }

  const unpublished = ids.filter((id) => by.get(id)!.status !== 'published');
  if (unpublished.length) { console.error(`!! not published: ${unpublished.join(', ')}`); process.exit(1); }

  for (const id of ids) {
    const unknown = unknownPopulatedColumns(by.get(id)!);
    if (unknown.length) { console.error(`!! ${id} has populated columns this generator does not emit: ${unknown.join(', ')}`); process.exit(1); }
  }

  /* EVERY ROW IS THE STRING THIS FILE CLAIMS IT IS. */
  for (const [label, id] of all) {
    const x = by.get(id)!;
    if (x.fr !== label) { console.error(`!! ${id} fr is ${JSON.stringify(x.fr)}, expected ${JSON.stringify(label)}`); process.exit(1); }
  }

  const CARRIED = [...IMPORTED, ...REPAIR_ONLY];

  /* NO GENDER ON ANYTHING CARRIED. fr.a1.ecole.051 is the row this exists for. */
  for (const [label, id] of CARRIED) {
    const x = by.get(id)!;
    if (x.gender) { console.error(`!! ${id} ${JSON.stringify(label)} carries gender ${JSON.stringify(x.gender)}. It would join a1.03 ending population.`); process.exit(1); }
  }

  /* NO U+203F, AND NO U+0153. The first renders as a low underscore on a Pixel 6.
     The second vanishes from the dictée bank AND from the target it is compared
     against, so a learner who never spells the ligature is told they are right. */
  for (const [label, id] of CARRIED) {
    const x = by.get(id)!;
    const respell = String(x.respell ?? '');
    if (respell.includes('‿')) {
      console.error(`!! ${id} ${JSON.stringify(label)} respells with U+203F UNDERTIE: ${JSON.stringify(respell)}`);
      console.error('   That glyph renders as a low underscore on a Pixel 6. Put the row in READ_NOT_IMPORTED.');
      process.exit(1);
    }
    if (/[œŒ]/u.test(String(x.fr)) || /[œŒ]/u.test(respell)) {
      console.error(`!! ${id} ${JSON.stringify(label)} holds U+0153 œ.`);
      console.error('   letterCount() strips it and so does the dictée letter bank, so the ligature disappears from');
      console.error('   the exercise and from the answer. Corpus header, item 7.');
      process.exit(1);
    }
  }

  /* EVERY CARRIED ROW CARRIES A RESPELLING. That is why it is carried. */
  for (const [label, id] of CARRIED) {
    if (!String(by.get(id)!.respell ?? '')) {
      console.error(`!! ${id} ${JSON.stringify(label)} has NO respelling. This lesson imports for the respelling; a row without one is a card the learner cannot say.`);
      process.exit(1);
    }
  }

  /* THE INSPECTED ROWS STILL SAY WHAT THE CORPUS HEADER SAYS THEY SAY. */
  for (const [id, claimed] of INSPECTED) {
    const stored = String(by.get(id)!.respell ?? '');
    if (stored !== claimed) {
      console.error(`!! ${id} is recorded in NOT_REPAIRED as ${JSON.stringify(claimed)} and Postgres holds ${JSON.stringify(stored)}.`);
      console.error('   Somebody has changed a row this build decided not to touch. Re-read the reason before regenerating.');
      process.exit(1);
    }
  }

  /* THE battre COUNT, RE-TAKEN, because the whole weight argument rests on it.
     CONJUGATED FORMS ONLY. The first version of this check counted the
     INFINITIVE too and reported four rows, which are `battre les œufs`,
     `battre la mesure` and two b1/b2 sentences using `combattre` after another
     verb. None of them is a conjugated form and none of them is a headword, so
     none of them is evidence that a learner meets battre inflected.
     Boundary-aware: a bare substring query for `bat` reports every `bâtiment`
     and every English `bat` in an en gloss. Invariants §0. */
  /* AND IT EXCLUDES THIS BUILD'S OWN ROWS. a2.13 §5: a check taken BEFORE the
     batch runs will legitimately disagree with Postgres AFTER a successful run,
     and a strict version makes the generator refuse its own second run and call
     it a finding. This one did exactly that: once fr.a2.verbes.436..452 landed,
     `battons`, `battent` and `combattent` existed and the guard reported four
     rows of battre evidence, all of them written by the lesson the figure is
     supposed to justify. */
  const MINE = "id not between 'fr.a2.verbes.421' and 'fr.a2.verbes.454'";
  const battre = await c.query<{ n: string }>(
    `select count(*) n from content_items where status='published' and ${MINE}
       and fr ~* '(^|[^a-zà-ÿ])(bats|battons|battez|battent|combattons|combattez|combattent)([^a-zà-ÿ]|$)'`);
  const prendre = await c.query<{ n: string }>(
    `select count(*) n from content_items where status='published' and kind='sentence' and ${MINE}
       and fr ~* '(^|[^a-zà-ÿ])(prends|prend|prenons|prenez|prennent)([^a-zà-ÿ]|$)'`);
  const mettre = await c.query<{ n: string }>(
    `select count(*) n from content_items where status='published' and kind='sentence' and ${MINE}
       and fr ~* '(^|[^a-zà-ÿ])(mets|met|mettons|mettez|mettent)([^a-zà-ÿ]|$)'`);
  console.log(`  evidence, excluding this build's own rows: prendre cells ${prendre.rows[0].n} published sentences, mettre ${mettre.rows[0].n}, battre ${battre.rows[0].n}`);
  if (Number(battre.rows[0].n) > 0) {
    console.error('!! battre now has published evidence and this build\'s weight argument is measured on it holding none.');
    console.error('   Re-read BATTRE_EVIDENCE in the corpus before regenerating; the two-mission decision may need revisiting.');
    process.exit(1);
  }

  /* AND THE GENERATOR REFUSES TO RUN ONCE THE BATCH HAS LANDED.
   *
   * THE MANIFEST IS A PRE-BATCH READ AND IT HAS TO STAY ONE. Regenerating it
   * after `pnpm content:prendre-mettre` records the POST-batch values, and the
   * merge then finds no `from` value to replace and dies with "the repair
   * expects to find PRAHNDR in it". a2.13 §5 records the same class from the
   * other side: a strict staleness check makes a batch refuse its own second
   * run. This is the third face of it and it is the dangerous one, because the
   * regenerated file looks correct.
   *
   * If you genuinely need to regenerate, revert the five repairs in Postgres
   * first, or drop the RESPELL_REPAIRS entries and say why in the corpus. */
  for (const r of RESPELL_REPAIRS_VISIBLE.concat(RESPELL_REPAIRS_INVISIBLE)) {
    const stored = String(by.get(r.id)?.respell ?? '');
    if (stored === r.to) {
      console.error(`!! ${r.id} already holds the repaired value ${JSON.stringify(r.to)}, so the batch has run.`);
      console.error('   THE MANIFEST IS A PRE-BATCH READ AND MUST STAY ONE. Regenerating now would record the');
      console.error('   post-batch value, and the merge would then find nothing to repair and die on it.');
      console.error('   Leave data/prendre-mettre-rows.gen.ts as committed.');
      process.exit(1);
    }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const themes = new Set(IMPORTED.map(([, id]) => String(by.get(id)!.theme)));
  const carriedThemes = new Set(CARRIED.map(([, id]) => String(by.get(id)!.theme)));

  const body = `// GENERATED by scripts/_a215_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${IMPORTED.length} rows a2.15 imports rather than authors, out of
// ${themes.size} themes, plus ${REPAIR_ONLY.length} repaired and carried without being imported and
// ${REFUSED.length} read and refused.
//
// a2.15 IS THE FIRST A2 BUILD TO AUTHOR AN INFINITIVE. \`battre\`, \`combattre\` and
// \`remettre\` do not exist at any status in any theme, and \`battre\` is in the unit
// title. Five builds in a row before this one authored none.
//
// THE REFUSALS ARE THE INTERESTING HALF. The four best respelled prendre
// sentences in the corpus are all a2.27's, the best apprennent sentence carries
// U+203F, and all three published battre sentences hold U+0153.
//
// Regenerate with: pnpm tsx scripts/_a215_manifest.ts

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** The ${NAMING.length} naming forms this lesson displays. Six are the three heads and the
 *  compounds they buy; \`vendre\` is a2.11's and the trap contrasts against it. */
export const IMPORTED_NAMING_ROWS: Item[] = [
${NAMING.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${EVIDENCE.length} published sentences that survived every refusal. */
export const IMPORTED_EVIDENCE_ROWS: Item[] = [
${EVIDENCE.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** REPAIRED AND CARRIED, NEVER IMPORTED. Named on no screen and in no itemId. */
export const REPAIR_ONLY_ROWS: Item[] = [
${REPAIR_ONLY.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${REFUSED.length} rows read and refused. READ ONLY: never carried, never released,
 *  never in itemIds, and named on no screen. */
export const READ_ONLY_ROWS: Item[] = [
${REFUSED.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** naming form -> id, in learner order. The only place this pairing is written. */
export const NAMING_ROW_IDS: [string, string][] = [
${NAMING.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** evidence sentence -> id. */
export const EVIDENCE_ROW_IDS: [string, string][] = [
${EVIDENCE.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** And the refused pairing, kept apart so nothing can iterate both by accident. */
export const READ_ONLY_ROW_IDS: [string, string][] = [
${REFUSED.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** Every id this lesson may put in \`itemIds\`. The refused rows and the
 *  repair-only row are deliberately absent, and the batch asserts that absence. */
export const IMPORTABLE_IDS: string[] = [
${IMPORTED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** Every id the merge writes into the seed: the importable ones plus the row
 *  this build repairs without displaying. */
export const CARRIED_IDS: string[] = [
${CARRIED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** The themes the imported rows came out of. */
export const SOURCE_THEMES: string[] = ${JSON.stringify([...themes].sort())};
/** And the themes the merge writes into, which is one wider. */
export const CARRIED_THEMES: string[] = ${JSON.stringify([...carriedThemes].sort())};

/** The evidence count, re-measured on the day this manifest was generated. */
export const EVIDENCE_MEASURED = { prendreCells: ${prendre.rows[0].n}, mettreCells: ${mettre.rows[0].n}, battreCells: ${battre.rows[0].n}, date: ${JSON.stringify(stamp)} };
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${NAMING.length} naming, ${EVIDENCE.length} evidence, ${REPAIR_ONLY.length} repair-only, ${REFUSED.length} refused, ${INSPECTED.length} inspected`);
  console.log(`  ${IMPORTED.length} imported out of ${themes.size} themes: ${[...themes].sort().join(', ')}`);
  for (const [label, id] of CARRIED) {
    const x = by.get(id)!;
    console.log(`    ${String(label).slice(0, 44).padEnd(46)} ${id.padEnd(34)} respell=${(x.respell as string | null) ?? '(none)'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
