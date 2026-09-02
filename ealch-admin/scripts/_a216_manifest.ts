/* Regenerates data/beau-nouveau-rows.gen.ts, the recorded read behind a2.16.
 *
 * TWELVE ROWS IMPORTED OUT OF THREE THEMES, AND TWELVE READ AND REFUSED.
 *
 * The interesting half is that EIGHT OF THE NINE FORMS ALREADY EXIST. The brief
 * predicted that `bel`, `nouvel` and `vieil` would all be absent and that this
 * lesson would author its three headline forms. Measured: `bel` is
 * fr.sons.adjectifs-essentiels.314 and `vieil` is .315, both published, both
 * respelled, both ungendered, both in this lesson's own home theme. Only
 * `nouvel` is absent, and it is authored in the corpus rather than here.
 *
 * And the four third-form SENTENCES exist too, in one frame, in the same theme,
 * written years before this lesson: `C'est un bel arbre.`, `C'est un nouvel
 * ami.`, `C'est un vieil immeuble.`, `C'est un bel homme.` NOT ONE OF THE FOUR
 * HAS A RESPELLING, so all four reach a card the learner cannot say (a2.13 §1),
 * and this build supplies all four.
 *
 * Three consumers need the whole row and not just the id:
 *
 *   1. author-beau-nouveau-batch.ts verifies the manifest field by field before
 *      it opens a transaction, so a stale manifest cannot put the lesson ahead
 *      of rows nobody has looked at.
 *   2. merge-beau-nouveau-into-seed.ts CARRIES them into seed.json. The seed is
 *      a CUT — adjectifs-essentiels shows 133 rows in it and holds 678 in
 *      Postgres — and two of the twelve are NOT in the seed today, so a lesson
 *      that did not carry them would render empty cards on a device.
 *   3. The test reads the seed and compares it against these.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying a GENDER. Zero of the twelve do, and that is not luck: every
 * noun in this lesson appears INSIDE an authored or imported sentence rather
 * than as a headword card, precisely so that nothing gendered is carried.
 * a1.03's ending population is measured over the SEED, so carrying a gendered
 * row that is not in the seed today is what moves its twenty printed figures.
 *
 * A row carrying U+203F UNDERTIE, which renders as a low underscore on a
 * Pixel 6 (a2.13 §3). THIS CHECK FIRES ON A REAL ROW HERE and it is the reason
 * the notation decision went the way it did: fr.sons.masterclass.034 is the
 * only respelled third-form sentence in 27,691 published rows and it carries
 * two of them. READ_NOT_IMPORTED.
 *
 * A row carrying U+0153 œ, which vanishes from the dictée bank AND from the
 * target it is compared against (a2.15 §2).
 *
 * A row whose `fr` is not the string this file claims it is.
 *
 * ── WHAT IT DELIBERATELY DOES NOT REFUSE ──────────────────────────────────
 *
 * A MISSING RESPELLING, on the four rows in RESPELL_ADDITIONS. a2.15's
 * generator refuses any carried row without one, on the reasoning that a row is
 * imported FOR its respelling. That is right for a2.15 and wrong here: these
 * four are the only published rows in the corpus that hold a third form in a
 * frame short enough to teach with, and the alternative is authoring a fifth,
 * sixth and seventh copy of a frame the corpus already has. a2.03 took the same
 * exemption for the same reason. Every other carried row must still have one.
 *
 *     pnpm tsx scripts/_a216_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  ADJ_ORDER, ALL_REPAIRS, NOT_REPAIRED, READ_NOT_IMPORTED, RESPELL_ADDITIONS,
  SILENT_H_ROW, VOWEL_ROW, form,
} from './data/beau-nouveau-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/beau-nouveau-rows.gen.ts');

/** The eight forms that already exist as headwords, in the order the learner
 *  meets them: the three plain forms, the three short forms, then the two
 *  feminines the corpus holds. `nouvel` is NOT here — it is the one absence and
 *  it is authored in the corpus. */
const NAMING: [string, string][] = [
  // The three plain forms, all in the home theme, all respelled, all ungendered.
  ['beau', 'fr.sons.adjectifs-essentiels.005'],
  ['nouveau', 'fr.sons.adjectifs-essentiels.007'],
  ['vieux', 'fr.sons.adjectifs-essentiels.008'],
  // THE TWO SHORT FORMS THE BRIEF SAID WOULD BE ABSENT. Both published, both in
  // the home theme, and a2.03's own READ_NOT_IMPORTED already flagged them as
  // "a2.16's".
  ['bel', 'fr.sons.adjectifs-essentiels.314'],
  ['vieil', 'fr.sons.adjectifs-essentiels.315'],
  // The feminines. `belle` is the one row outside the home theme that this
  // lesson leans on, and its respelling BEL matching `bel`'s BEL — written by
  // different authors in different themes — is the evidence the whole lesson
  // turns on.
  ['belle', 'fr.sons.consonnes.138'],
  ['vieille', 'fr.sons.adjectifs-essentiels.312'],
  // The ungendered `nouvelle`, which the brief said would not exist. Two of the
  // three `nouvelle` rows ARE the gendered noun and are refused; this one is
  // the adjective, and it sits beside fr.a1.rencontres.094 `nouveau` as an
  // authored pair.
  ['nouvelle', 'fr.a1.rencontres.095'],
];

/** THE FOUR PUBLISHED THIRD-FORM SENTENCES, and the measurement that shaped the
 *  lesson. Corrections §3 says the corpus has forms and no minimal pairs, and
 *  it has held for six builds. Here it does not: these four are one frame, one
 *  theme, and they hold the third form of all three adjectives. What holds is
 *  the second half of §3 — NOT ONE HAS A RESPELLING. */
const EVIDENCE: [string, string][] = [
  ["C'est un bel arbre.", VOWEL_ROW.beau],
  ["C'est un nouvel ami.", VOWEL_ROW.nouveau],
  ["C'est un vieil immeuble.", VOWEL_ROW.vieux],
  ["C'est un bel homme.", SILENT_H_ROW],
];

const REFUSED: [string, string][] = READ_NOT_IMPORTED.map((r) => [r.fr, r.id]);

/** Rows inspected and left alone. Not emitted, but VERIFIED: the corpus header
 *  makes a claim about each one's respelling, and a claim that has stopped
 *  being true should fail here rather than sit in a comment. */
const INSPECTED: [string, string][] = NOT_REPAIRED.map((r) => [r.id, r.respell]);

const IMPORTED = [...NAMING, ...EVIDENCE];
const NEEDS_RESPELL_SUPPLIED = new Set(RESPELL_ADDITIONS.map((r) => r.id));

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

  /* NO GENDER ON ANYTHING CARRIED. Zero of the twelve, by construction: every
     noun in this lesson lives inside a sentence rather than on a headword card
     precisely so this check cannot fire. */
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    if (x.gender) {
      console.error(`!! ${id} ${JSON.stringify(label)} carries gender ${JSON.stringify(x.gender)}.`);
      console.error('   A gendered single-word row joins a1.03\'s measured ending population and moves twenty');
      console.error('   printed figures in a1-03-genre.test.ts. Invariants §5: withdraw rather than argue.');
      process.exit(1);
    }
  }

  /* NO U+203F, AND NO U+0153. This check FIRES on a real row in this lesson's
     subject matter and fr.sons.masterclass.034 is in READ_NOT_IMPORTED because
     of it. Corpus header items 9 and 10. */
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

  /* AND THE REFUSED LIST STILL HOLDS THE ROW IT REFUSED FOR THAT REASON.
     If somebody repairs fr.sons.masterclass.034 the refusal stops being true,
     and a refusal nobody re-checks is a comment. */
  const TIE_ROW = 'fr.sons.masterclass.034';
  if (REFUSED.some(([, id]) => id === TIE_ROW)) {
    const stored = String(by.get(TIE_ROW)?.respell ?? '');
    if (!stored.includes('‿')) {
      console.error(`!! ${TIE_ROW} no longer carries U+203F: ${JSON.stringify(stored)}.`);
      console.error('   It is refused BECAUSE of that glyph. Somebody has repaired it and the reason needs re-reading.');
      process.exit(1);
    }
  }

  /* EVERY CARRIED ROW CARRIES A RESPELLING, EXCEPT THE FOUR THIS BUILD SUPPLIES. */
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
     a2.03 §7: an addition may only land on a row whose respelling is EMPTY, so
     a row somebody has respelled since the read is left alone and reported. */
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

  /* THE THIRD FORM AND THE FEMININE ARE ONE SOUND, IN THE STORED ROWS.
     This is the measurement the whole lesson rests on and it is somebody else's
     data rather than this build's: `bel` and `belle` were respelled by
     different authors in different themes and agree byte for byte, and so do
     `vieil` and `vieille`. If either pair ever stops agreeing, the grid is
     making a claim the corpus no longer supports. */
  const PAIRS: [string, string, string][] = [
    ['bel / belle', 'fr.sons.adjectifs-essentiels.314', 'fr.sons.consonnes.138'],
    ['vieil / vieille', 'fr.sons.adjectifs-essentiels.315', 'fr.sons.adjectifs-essentiels.312'],
  ];
  for (const [name, a, b] of PAIRS) {
    const x = by.get(a)!, y = by.get(b)!;
    if (x.respell !== y.respell || x.ipa !== y.ipa) {
      console.error(`!! ${name} no longer agree: ${JSON.stringify(x.respell)}/${JSON.stringify(x.ipa)} against ${JSON.stringify(y.respell)}/${JSON.stringify(y.ipa)}.`);
      console.error('   The lesson claims the short form and the feminine are ONE SOUND and reads that claim off these rows.');
      process.exit(1);
    }
    console.log(`  ${name.padEnd(16)} respell ${JSON.stringify(x.respell)} and ipa ${JSON.stringify(x.ipa)}, in both rows`);
  }

  /* THE ABSENCE THIS BUILD AUTHORS AGAINST IS STILL AN ABSENCE.
     `nouvel` is the one headword this lesson creates. If somebody publishes one
     first, authoring a second is the flashhub double-serve a1.13's brief
     warned about, and it should stop the build rather than ship. */
  const nouvel = await c.query<{ id: string; theme: string }>(
    `select id, theme from content_items where kind <> 'sentence'
       and lower(regexp_replace(fr, '^(le |la |les |un |une |des |l''|l’)', '')) = 'nouvel'`);
  if (nouvel.rowCount) {
    console.error(`!! \`nouvel\` now EXISTS as a headword: ${nouvel.rows.map((x) => `${x.id} (${x.theme})`).join(', ')}.`);
    console.error('   This build authors it. Import that row instead, or the theme serves one card twice.');
    process.exit(1);
  }
  console.log('  `nouvel` is still absent at every status in every theme, so it is authored');

  /* THE -eaux PLURAL IS STILL OWNED BY NOBODY, which is what makes act 4 this
     lesson's rather than a restatement. Corpus header item 4: measured across
     grammarIntroduced, not across the prose, because §7 of the corrections says
     the prose search is the one that gives a false answer. */
  const owners = await c.query<{ id: string; g: string }>(
    `select body->>'id' id, g from content_units, jsonb_array_elements_text(body->'grammarIntroduced') g
      where kind = 'curriculum_unit' and g ~* '(-eaux|beaux|nouveaux)'`);
  if (owners.rowCount) {
    console.error('!! a unit now claims the -eaux plural in grammarIntroduced:');
    for (const o of owners.rows) console.error(`     ${o.id}  ${o.g}`);
    console.error('   Act 4 exists because nobody did. Re-read the scope before regenerating.');
    process.exit(1);
  }
  console.log('  the -eaux plural is claimed by no unit at any level');

  /* AND THE GENERATOR REFUSES TO RUN ONCE THE BATCH HAS LANDED.
     a2.15: the manifest is a PRE-BATCH read and has to stay one. Regenerating
     after the batch records the POST-batch values, and the merge then finds no
     `from` value to replace and dies. */
  for (const rep of ALL_REPAIRS) {
    if (String(by.get(rep.id)?.respell ?? '') === rep.to) {
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

  /* The row count in this build's block, recorded so the batch has a figure to
     refuse against rather than a printed number nobody compares. Ledger §10. */
  const mine = await c.query<{ n: string }>(
    "select count(*) n from content_items where id like 'fr.a2.adjectifs-essentiels.%'");
  const intruders = await c.query<{ id: string }>(
    `select id from content_items
      where id between 'fr.a2.adjectifs-essentiels.041' and 'fr.a2.adjectifs-essentiels.080' order by id`);
  if (intruders.rowCount) {
    console.error(`!! rows already inside this build's block .041..080: ${intruders.rows.map((x) => x.id).join(', ')}`);
    console.error('   a2.03 reserved it. Somebody has landed in it. Amend the ledger before authoring.');
    process.exit(1);
  }

  const body = `// GENERATED by scripts/_a216_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${IMPORTED.length} rows a2.16 imports rather than authors, out of
// ${themes.size} themes, plus ${REFUSED.length} read and refused.
//
// THE POINT OF THIS FILE IS THAT EIGHT OF THE NINE FORMS ALREADY EXISTED. The
// brief said \`bel\`, \`nouvel\` and \`vieil\` were all likely absent and that this
// lesson would author its three headline forms. \`bel\` is
// fr.sons.adjectifs-essentiels.314 and \`vieil\` is .315, both published, both
// respelled, both in the home theme. Only \`nouvel\` is absent.
//
// FOUR ROWS ARE CARRIED WITHOUT A RESPELLING AND THIS BUILD SUPPLIES ONE FOR
// EACH. They are the only published rows in the corpus holding a third form in
// a frame short enough to teach with, and none of them could be said aloud.
//
// Regenerate with: pnpm tsx scripts/_a216_manifest.ts

import type { Item } from '../../ealch-v2/src/content/schema.ts';

/** The ${NAMING.length} forms that already exist as headwords. \`nouvel\` is deliberately
 *  absent: it is the one form the corpus does not hold and the corpus file
 *  authors it. */
export const IMPORTED_NAMING_ROWS: Item[] = [
${NAMING.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${EVIDENCE.length} published sentences that hold a third form in the \`C'est un ___\`
 *  frame. None had a respelling and this build supplies all four. */
export const IMPORTED_EVIDENCE_ROWS: Item[] = [
${EVIDENCE.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${REFUSED.length} rows read and refused. READ ONLY: never carried, never released,
 *  never in itemIds, and named on no screen. */
export const READ_ONLY_ROWS: Item[] = [
${REFUSED.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** form -> id, in learner order. The only place this pairing is written. */
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

/** Every id this lesson may put in \`itemIds\`. */
export const IMPORTABLE_IDS: string[] = [
${IMPORTED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** Every id the merge writes into the seed. Identical to IMPORTABLE_IDS: this
 *  build repairs nothing it does not also display. TWO OF THE TWELVE ARE NOT IN
 *  THE SEED TODAY — fr.a1.adjectifs-essentiels.038 and fr.a1.rencontres.095 —
 *  so a merge that did not carry them would render two empty cards. */
export const CARRIED_IDS: string[] = [
${IMPORTED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** The themes the imported rows came out of. */
export const SOURCE_THEMES: string[] = ${JSON.stringify([...themes].sort())};

/** The block, and the row count in it on the day this manifest was generated.
 *  Ledger §10: the maximum is useless and the COUNT is the only signal. */
export const BLOCK_MEASURED = { rows: ${mine.rows[0].n}, insideBlock: 0, date: ${JSON.stringify(stamp)} };

/** The measurement the lesson rests on, re-taken here so it cannot go stale in
 *  a comment: the short form and the feminine carry the same respelling and the
 *  same IPA, in rows written by different authors in different themes. */
export const ONE_SOUND_EVIDENCE: { pair: string; respell: string; ipa: string }[] = [
${PAIRS.map(([name, a]) => `  { pair: ${JSON.stringify(name)}, respell: ${JSON.stringify(by.get(a)!.respell)}, ipa: ${JSON.stringify(by.get(a)!.ipa)} },`).join('\n')}
];
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${NAMING.length} naming, ${EVIDENCE.length} evidence, ${REFUSED.length} refused, ${INSPECTED.length} inspected`);
  console.log(`  ${IMPORTED.length} imported out of ${themes.size} themes: ${[...themes].sort().join(', ')}`);
  console.log(`  fr.a2.adjectifs-essentiels holds ${mine.rows[0].n} rows, and 0 inside .041..080`);
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    console.log(`    ${String(label).slice(0, 30).padEnd(32)} ${id.padEnd(40)} respell=${(x.respell as string | null) ?? '(SUPPLIED BY THIS BUILD)'}`);
  }
  console.log(`  the five forms of each adjective: ${ADJ_ORDER.map((a) => `${a} -> ${form(a, 'vowel')}`).join(', ')}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
