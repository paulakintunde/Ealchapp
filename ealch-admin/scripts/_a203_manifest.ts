/* Regenerates data/accord-adjectifs-rows.gen.ts, the recorded read behind a2.03.
 *
 * TWENTY-THREE ROWS IMPORTED OUT OF SIX THEMES, AND THIRTEEN READ AND REFUSED.
 *
 * The refusals are the interesting half. Three of the sixteen grid cells already
 * exist somewhere else — `Il est grand.` TWICE in description-personnes-objets,
 * `Ils sont grands.` once, and `Elle est grande.` in metiers — and two of the
 * three have no respelling. Three more are the cold-test adjectives, which
 * importing would delete the mission they are the point of.
 *
 * Three consumers need the whole row and not just the id:
 *
 *   1. author-accord-adjectifs-batch.ts verifies the manifest field by field
 *      before it opens a transaction, so a stale manifest cannot put the lesson
 *      ahead of rows nobody has looked at.
 *   2. merge-accord-adjectifs-into-seed.ts CARRIES them into seed.json. The seed
 *      is a CUT — adjectifs-essentiels shows 92 rows in it and holds 645 in
 *      Postgres — and a lesson whose itemIds resolve to nothing renders empty
 *      cards on a device.
 *   3. The test reads the seed and compares it against these.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying a GENDER, because a gendered single-word row joins a1.03's
 * measured ending population and moves twenty printed figures in
 * a1-03-genre.test.ts. THIS IS THE CHECK THE BRIEF WAS WORRIED ABOUT and it
 * passes: `fr.sons.couleurs.009` (orange) and `fr.sons.couleurs.011` (marron)
 * both carry gender NULL. The gendered `orange` rows are the FRUIT
 * (fr.a1.cuisine.022, fr.a1.marche.048) plus a second colour row in a theme
 * this lesson does not touch (fr.sons.consonnes.055), and none is imported.
 *
 * A row carrying U+203F UNDERTIE, which renders as a low underscore on a
 * Pixel 6 (a2.13 §3).
 *
 * A row carrying U+0153 œ, which vanishes from the dictée bank AND from the
 * target it is compared against (a2.15 §2).
 *
 * A row whose `fr` is not the string this file claims it is.
 *
 * ── WHAT IT DELIBERATELY DOES NOT REFUSE ──────────────────────────────────
 *
 * A MISSING RESPELLING, on the two rows in RESPELL_ADDITIONS. a2.15's generator
 * refuses any carried row without one, on the reasoning that a row is imported
 * FOR its respelling. That is right for a2.15 and wrong here:
 * `fr.a2.description-personnes-objets.003` and `.004` are the only published
 * evidence of `sportif` and `sportive` anywhere in the corpus, and this build
 * SUPPLIES the respellings rather than authoring a third and fourth copy of the
 * same two sentences. Every other carried row must still have one.
 *
 *     pnpm tsx scripts/_a203_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  NOT_REPAIRED, READ_NOT_IMPORTED, RESPELL_ADDITIONS, RESPELL_REPAIRS_HOUSE,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE, UNSEEN,
} from './data/accord-adjectifs-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/accord-adjectifs-rows.gen.ts');

/** The naming forms this lesson displays, in the order the learner meets them:
 *  the four pattern heads first, then the -eux family, then the -if family, then
 *  the invariable colours. */
const NAMING: [string, string][] = [
  // The default pattern's two audible forms. `grand` lives in the home theme.
  ['grand', 'fr.sons.adjectifs-essentiels.001'],
  ['grande', 'fr.sons.muettes.047'],
  // The -eux head, also in the home theme, and the family it stands for.
  ['sérieux', 'fr.sons.adjectifs-essentiels.037'],
  ['heureux', 'fr.a1.emotions.001'],
  ['heureuse', 'fr.sons.muettes.053'],
  ['joyeux', 'fr.sons.adjectifs-essentiels.266'],
  ['curieux', 'fr.sons.adjectifs-essentiels.096'],
  ['généreux', 'fr.sons.adjectifs-essentiels.234'],
  ['dangereux', 'fr.sons.adjectifs-essentiels.052'],
  ['nombreux', 'fr.sons.adjectifs-essentiels.118'],
  // The -if family, which is one row wide in this theme. Corpus header item 8.
  ['impulsif', 'fr.sons.adjectifs-essentiels.261'],
  ['naïf', 'fr.sons.adjectifs-essentiels.256'],
  // The invariable class: the two a1.13 released, then the four it did not.
  ['marron', 'fr.sons.couleurs.011'],
  ['orange', 'fr.sons.couleurs.009'],
  ['kaki', 'fr.sons.couleurs.030'],
  ['crème', 'fr.sons.couleurs.032'],
  ['bleu marine', 'fr.sons.couleurs.026'],
  ['bleu clair', 'fr.sons.couleurs.019'],
  ['vert foncé', 'fr.sons.couleurs.022'],
  // The regular colour that stands beside the invariable one.
  ['vert', 'fr.sons.consonnes.127'],
  ['verte', 'fr.sons.muettes.049'],
];

/** THE PUBLISHED EVIDENCE, and the measurement that shaped it.
 *
 *  `sportif` and `sportive` are absent as headwords, and corrections §2 lists
 *  both. They are not absent as EVIDENCE: a2.15 §1's "absent is not nowhere"
 *  holds again. These two are the only published rows in 27,600 that hold a
 *  plural form of either, they were written for a description theme years before
 *  this lesson existed, and NEITHER HAS A RESPELLING. This build supplies both. */
const EVIDENCE: [string, string][] = [
  ['Les jumeaux sont sportifs.', 'fr.a2.description-personnes-objets.003'],
  ['Les jumelles sont sportives.', 'fr.a2.description-personnes-objets.004'],
];

const REFUSED: [string, string][] = READ_NOT_IMPORTED.map((r) => [r.fr, r.id]);

/** Rows inspected and left alone. Not emitted, but VERIFIED: the corpus header
 *  makes a claim about each one's respelling, and a claim that has stopped being
 *  true should fail here rather than sit in a comment. */
const INSPECTED: [string, string][] = NOT_REPAIRED.map((r) => [r.id, r.respell]);

const IMPORTED = [...NAMING, ...EVIDENCE];
const NEEDS_RESPELL_SUPPLIED = new Set(RESPELL_ADDITIONS.map((r) => r.id));
const ALL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE, ...RESPELL_REPAIRS_HOUSE];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const all = [...IMPORTED, ...REFUSED];
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

  /* NO GENDER ON ANYTHING CARRIED. This is the check the brief predicted would
     fail, and it passes: the ungendered `orange` and `marron` rows exist. */
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    if (x.gender) {
      console.error(`!! ${id} ${JSON.stringify(label)} carries gender ${JSON.stringify(x.gender)}.`);
      console.error('   A gendered single-word row joins a1.03\'s measured ending population and moves twenty');
      console.error('   printed figures in a1-03-genre.test.ts. Invariants §5: withdraw rather than argue.');
      process.exit(1);
    }
  }

  /* NO U+203F, AND NO U+0153. */
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    const respell = String(x.respell ?? '');
    if (respell.includes('‿')) {
      console.error(`!! ${id} ${JSON.stringify(label)} respells with U+203F UNDERTIE: ${JSON.stringify(respell)}`);
      console.error('   That glyph renders as a low underscore on a Pixel 6. Put the row in READ_NOT_IMPORTED.');
      process.exit(1);
    }
    if (/[œŒ]/u.test(String(x.fr)) || /[œŒ]/u.test(respell)) {
      console.error(`!! ${id} ${JSON.stringify(label)} holds U+0153 œ, which the dictée strips from both sides.`);
      process.exit(1);
    }
  }

  /* EVERY CARRIED ROW CARRIES A RESPELLING, EXCEPT THE TWO THIS BUILD SUPPLIES.
     a2.15's generator refuses all of them; that rule is right for a lesson that
     imports FOR the respelling and wrong for one whose only published evidence
     has none. The exemption is by id and it is exactly two. */
  for (const [label, id] of IMPORTED) {
    if (String(by.get(id)!.respell ?? '')) continue;
    if (NEEDS_RESPELL_SUPPLIED.has(id)) {
      console.log(`  (no respelling on ${id}, and this build supplies one — RESPELL_ADDITIONS)`);
      continue;
    }
    console.error(`!! ${id} ${JSON.stringify(label)} has NO respelling and is not in RESPELL_ADDITIONS.`);
    console.error('   a2.13 §1: a row without a respelling reaches a card the learner cannot say.');
    process.exit(1);
  }

  /* AND A ROW THIS BUILD SUPPLIES A RESPELLING FOR MUST NOT ALREADY HAVE ONE.
     Otherwise the addition silently overwrites somebody else's work. */
  for (const a of RESPELL_ADDITIONS) {
    const stored = String(by.get(a.id)?.respell ?? '');
    if (stored && stored !== a.to) {
      console.error(`!! ${a.id} already holds a respelling: ${JSON.stringify(stored)}.`);
      console.error(`   This build is about to write ${JSON.stringify(a.to)} over it. Somebody has supplied one since the read.`);
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

  /* THE THREE COLD ADJECTIVES ARE STILL THERE TO BE HANDED OVER COLD.
     Each one must EXIST in Postgres (so the learner could plausibly have met the
     masculine on a flashcard) and must NOT be imported by this lesson. A guard
     whose reservation list has quietly emptied has stopped guarding. */
  for (const u of UNSEEN) {
    if (!u.liveRow) continue;
    const row = await c.query<{ fr: string }>('select fr from content_items where id = $1', [u.liveRow]);
    if (row.rowCount !== 1 || row.rows[0].fr !== u.masculine) {
      console.error(`!! the cold adjective ${u.masculine} claims to live at ${u.liveRow} and does not.`);
      process.exit(1);
    }
    if (ids.includes(u.liveRow) && !REFUSED.some(([, id]) => id === u.liveRow)) {
      console.error(`!! ${u.liveRow} (${u.masculine}) is imported. It is a cold-test adjective and importing it deletes the mission.`);
      process.exit(1);
    }
  }

  /* THE -EUX AND -IF COUNTS, RE-TAKEN, because the lesson's shape rests on them.
     Boundary-aware, and EXCLUDING THIS BUILD'S OWN ROWS: a2.13 §5 records that a
     check taken before the batch runs will legitimately disagree with Postgres
     after a successful one, and a strict version makes the generator refuse its
     own second run and call it a finding. */
  const MINE = "id not like 'fr.a2.adjectifs-essentiels.%'";
  const eux = await c.query<{ n: string }>(
    `select count(*) n from content_items where status='published' and kind='word' and ${MINE}
       and theme = 'adjectifs-essentiels' and fr ~ 'eux$' and fr !~ ' '`);
  const iff = await c.query<{ n: string }>(
    `select count(*) n from content_items where status='published' and kind='word' and ${MINE}
       and theme = 'adjectifs-essentiels' and fr ~ 'if$' and fr !~ ' '`);
  console.log(`  the two families in the home theme: -eux ${eux.rows[0].n} headwords, -if ${iff.rows[0].n}`);

  /* AND THE GENERATOR REFUSES TO RUN ONCE THE BATCH HAS LANDED.
     a2.15 §manifest: the manifest is a PRE-BATCH read and has to stay one.
     Regenerating after the batch records the POST-batch values, and the merge
     then finds no `from` value to replace and dies. */
  for (const rep of ALL_REPAIRS) {
    const stored = String(by.get(rep.id)?.respell ?? '');
    if (stored === rep.to) {
      console.error(`!! ${rep.id} already holds the repaired value ${JSON.stringify(rep.to)}, so the batch has run.`);
      console.error('   THE MANIFEST IS A PRE-BATCH READ AND MUST STAY ONE. Leave the .gen.ts as committed.');
      process.exit(1);
    }
  }
  for (const a of RESPELL_ADDITIONS) {
    if (String(by.get(a.id)?.respell ?? '') === a.to) {
      console.error(`!! ${a.id} already holds the supplied respelling, so the batch has run. Leave the .gen.ts as committed.`);
      process.exit(1);
    }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const themes = new Set(IMPORTED.map(([, id]) => String(by.get(id)!.theme)));

  const body = `// GENERATED by scripts/_a203_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${IMPORTED.length} rows a2.03 imports rather than authors, out of
// ${themes.size} themes, plus ${REFUSED.length} read and refused.
//
// THE GENDER CHECK IS THE POINT OF THIS FILE. The brief said every \`orange\` row
// carries gender and that importing one would move a1.03's printed figures.
// fr.sons.couleurs.009 and fr.sons.couleurs.011 both carry gender NULL, and the
// generator refuses any carried row that does not.
//
// TWO ROWS ARE CARRIED WITHOUT A RESPELLING AND THIS BUILD SUPPLIES ONE FOR EACH.
// fr.a2.description-personnes-objets.003 and .004 are the only published evidence
// of sportif and sportive in 27,600 rows and neither had one.
//
// Regenerate with: pnpm tsx scripts/_a203_manifest.ts

import type { Item } from '../../ealch-v2/src/content/schema.ts';

/** The ${NAMING.length} naming forms this lesson displays: the four pattern heads, the -eux
 *  family, the one -if headword the theme holds, and the invariable colours. */
export const IMPORTED_NAMING_ROWS: Item[] = [
${NAMING.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${EVIDENCE.length} published sentences that carry sportif and sportive. Neither had a
 *  respelling and this build supplies both. */
export const IMPORTED_EVIDENCE_ROWS: Item[] = [
${EVIDENCE.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
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

/** Every id this lesson may put in \`itemIds\`. The refused rows are deliberately
 *  absent and the batch asserts that absence. */
export const IMPORTABLE_IDS: string[] = [
${IMPORTED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** Every id the merge writes into the seed. Identical to IMPORTABLE_IDS here:
 *  unlike a2.15, this build repairs nothing it does not also display. */
export const CARRIED_IDS: string[] = [
${IMPORTED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** The themes the imported rows came out of. */
export const SOURCE_THEMES: string[] = ${JSON.stringify([...themes].sort())};

/** The family sizes in the home theme, re-measured on the day this manifest was
 *  generated, excluding this build's own rows. Corpus header item 8: the -eux
 *  family is large and the -if family is one row wide, and the lesson's shape
 *  follows that rather than pretending they are equal. */
export const FAMILY_MEASURED = { eux: ${eux.rows[0].n}, if: ${iff.rows[0].n}, date: ${JSON.stringify(stamp)} };
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${NAMING.length} naming, ${EVIDENCE.length} evidence, ${REFUSED.length} refused, ${INSPECTED.length} inspected`);
  console.log(`  ${IMPORTED.length} imported out of ${themes.size} themes: ${[...themes].sort().join(', ')}`);
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    console.log(`    ${String(label).slice(0, 30).padEnd(32)} ${id.padEnd(40)} respell=${(x.respell as string | null) ?? '(SUPPLIED BY THIS BUILD)'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
