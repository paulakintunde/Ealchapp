/* Regenerates data/adverbes-rows.gen.ts, the recorded read behind a2.17.
 *
 * TWENTY-EIGHT ROWS IMPORTED OUT OF FIVE THEMES, AND TWELVE READ AND REFUSED.
 *
 * NOT ONE OF THE TWENTY-TWO ADVERBS IS AUTHORED. `adverbes-essentiels` holds 325
 * published rows and 120 adverb headwords, and every adverb this lesson teaches
 * is in it. What is authored is the OTHER half of the derivation: four
 * adjectives that do not exist at any status in any theme, two of which are the
 * middle step of the chain the whole lesson is built on.
 *
 * ── THE MEASUREMENT THE LESSON RESTS ON ───────────────────────────────────
 *
 * The feminine is the masculine plus one consonant, and the adverb is the
 * feminine plus -MAHⁿ. For `sérieux` all three cells are somebody else's
 * published data, in two themes, by different authors:
 *
 *   say-RYUH    fr.sons.adjectifs-essentiels.037
 *   say-RYUHZ   fr.a2.adjectifs-essentiels.019     <- a2.03's own authored row
 *   say-ryuhz-MAHN  fr.sons.adverbes-essentiels.021
 *
 * This generator re-reads that arithmetic out of Postgres on every run, so the
 * day any of the three moves the build fails rather than the grid quietly
 * making a claim the corpus no longer supports.
 *
 * ── AND THE SAME WORD IS RESPELLED TWO WAYS IN ONE DATABASE ───────────────
 *
 *   lentement   fr.sons.adverbes-essentiels.001   lahnt-MAHN
 *               fr.sons.nasales.013               ... lahⁿt-MAHⁿ
 *   doucement   fr.sons.adverbes-essentiels.003   doos-MAHN
 *               fr.sons.nasales.014               ... doos-MAHⁿ
 *   bien        fr.sons.mots-essentiels.045       BYAN
 *               fr.sons.nasales.078               ... BYEHⁿ
 *
 * All six rows are imported by this lesson and the halves would sit on one
 * screen, so the headword half is repaired to match. EVERY REPAIRED VALUE IN
 * THIS BUILD WAS READ OFF A PUBLISHED ROW, and this generator checks that the
 * row it was read off still says it.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying a GENDER, which would join a1.03's measured ending population.
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A row carrying U+0153 œ, which the dictée strips from both sides.
 * A row with NO respelling, because a row is imported for its respelling.
 * A row whose `fr` is not the string this file claims it is.
 * A row inside this build's id block that this build does not own.
 * `parfaitement` or `certainement` appearing in the import list, because they
 *   are the two answers to the unseen-adjective questions.
 *
 *     pnpm tsx scripts/_a217_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  ADJ_ORDER, ALL_REPAIRS, AMMENT_ROW, A203_ROWS, CHAIN_ROW, EXTRA_PLACEMENT_ROW,
  FREQUENCY_ROW, ID_BLOCK, IRREGULAR_ADJ_ROW, IRREGULAR_ROW, NOT_REPAIRED,
  PLACEMENT_ROWS, READ_NOT_IMPORTED, RESPELL_ADDITIONS, UNSEEN, has, step,
} from './data/adverbes-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/adverbes-rows.gen.ts');

/** The twenty imported HEADWORDS, in the order the learner meets them: the
 *  chain, then the already-ends-in-e pair, then the three that are not built,
 *  then the two adjectives behind two of them, then the frequency pair, then
 *  the two spellings that are one sound.
 *
 *  `lente` and `douce` are NOT here: they are the two middle steps the corpus
 *  does not hold and the corpus file authors them. */
const NAMING: [string, string][] = [
  ['lent', CHAIN_ROW.lent.masc],
  ['lentement', CHAIN_ROW.lent.adverb],
  ['doux', CHAIN_ROW.doux.masc],
  ['doucement', CHAIN_ROW.doux.adverb],
  ['sérieux', CHAIN_ROW.serieux.masc],
  ['sérieuse', CHAIN_ROW.serieux.fem],
  ['sérieusement', CHAIN_ROW.serieux.adverb],
  ['rapide', 'fr.sons.adjectifs-essentiels.020'],
  ['rapidement', 'fr.sons.adverbes-essentiels.002'],
  ['facile', 'fr.sons.adjectifs-essentiels.018'],
  ['facilement', 'fr.sons.adverbes-essentiels.004'],
  ['bien', IRREGULAR_ROW.bien],
  ['mal', IRREGULAR_ROW.mal],
  ['vite', IRREGULAR_ROW.vite],
  ['bon', IRREGULAR_ADJ_ROW.bon],
  ['mauvais', IRREGULAR_ADJ_ROW.mauvais],
  ['souvent', FREQUENCY_ROW.souvent],
  ['toujours', FREQUENCY_ROW.toujours],
  ['évidemment', AMMENT_ROW['évidemment']],
  ['constamment', AMMENT_ROW.constamment],
];

/** The eight imported SENTENCES. Two of them are a2.03's own rows and the other
 *  six put an adverb after a conjugated verb, all of them already respelled the
 *  house way. */
const EVIDENCE: [string, string][] = [
  ['Il est sérieux.', A203_ROWS.mascSentence],
  ['Elle est sérieuse.', A203_ROWS.femSentence],
  ['Maman chante souvent.', 'fr.sons.nasales.001'],
  ['Il court vite.', 'fr.a2.verbes.477'],
  ['Il réussit toujours.', 'fr.a2.verbes.189'],
  ['Le vent souffle doucement.', 'fr.sons.nasales.014'],
  ['Son nom sonne bien.', 'fr.sons.nasales.078'],
  ["L'enfant mange trop lentement.", EXTRA_PLACEMENT_ROW],
];

const REFUSED: [string, string][] = READ_NOT_IMPORTED.map((r) => [r.fr, r.id]);
const INSPECTED: [string, string][] = NOT_REPAIRED.map((r) => [r.id, r.respell]);

const IMPORTED = [...NAMING, ...EVIDENCE];

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

  /* NO GENDER ON ANYTHING CARRIED. Every row here is an adjective, an adverb or
     a sentence, so this check should never fire and it is here because a1.08
     shipped a hand-rolled endingPopulation and moved two of a1.03's cards. */
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    if (x.gender) {
      console.error(`!! ${id} ${JSON.stringify(label)} carries gender ${JSON.stringify(x.gender)}.`);
      console.error('   A gendered single-word row joins a1.03\'s measured ending population.');
      process.exit(1);
    }
  }

  /* NO U+203F, NO U+0153, AND EVERY CARRIED ROW HAS A RESPELLING. */
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    const respell = String(x.respell ?? '');
    if (!respell) {
      console.error(`!! ${id} ${JSON.stringify(label)} has NO respelling. a2.13 §1: a row without one reaches a card the learner cannot say.`);
      console.error('   This build supplies NONE, deliberately: RESPELL_ADDITIONS is empty and asserted empty.');
      process.exit(1);
    }
    if (respell.includes('‿')) {
      console.error(`!! ${id} ${JSON.stringify(label)} respells with U+203F UNDERTIE: ${JSON.stringify(respell)}`);
      console.error('   That glyph renders as a low underscore on a Pixel 6. Put the row in READ_NOT_IMPORTED.');
      process.exit(1);
    }
    if (/[œŒ]/u.test(String(x.fr)) || /[œŒ]/u.test(respell)) {
      console.error(`!! ${id} ${JSON.stringify(label)} holds U+0153 œ, which the dictée strips from both sides.`);
      process.exit(1);
    }
    if (/\[\[/.test(respell)) {
      console.error(`!! ${id} ${JSON.stringify(label)} respells inside DOUBLE brackets: ${JSON.stringify(respell)}. fr.sons.rythme.180 and .181 do the same and are refused for it.`);
      process.exit(1);
    }
  }

  /* THE TWO UNSEEN ADVERBS ARE NOT IN THE IMPORT LIST, IN BOTH DIRECTIONS.
     They are the answers to the two generalisation questions; importing either
     would put the answer in the lesson's own vocabulary and delete the
     question. And the adjectives must not be imported either. */
  const unseenStrings = new Set(UNSEEN.flatMap((u) => [u.adj, u.fem, u.adverb]));
  for (const [label, id] of IMPORTED) {
    if (unseenStrings.has(label)) {
      console.error(`!! ${id} ${JSON.stringify(label)} is one of the UNSEEN words and is in the import list.`);
      console.error('   Importing it puts the answer in the lesson\'s vocabulary and deletes the generalisation question.');
      process.exit(1);
    }
  }
  /* AND EACH UNSEEN ADVERB STILL EXISTS, because a typeIn whose answer is not a
     French word is a question with no right answer. */
  const unseenAdverbs = await c.query<{ id: string; fr: string }>(
    `select id, fr from content_items where kind <> 'sentence' and fr = any($1)`,
    [UNSEEN.map((u) => u.adverb)]);
  for (const u of UNSEEN) {
    const hit = unseenAdverbs.rows.filter((x) => x.fr === u.adverb);
    if (!hit.length) {
      console.error(`!! the unseen answer ${JSON.stringify(u.adverb)} does not exist in the corpus at any status.`);
      console.error('   The question asks the learner to produce it, so it has to be a real French word somebody has published.');
      process.exit(1);
    }
    console.log(`  unseen: ${u.adj.padEnd(9)} -> ${u.fem.padEnd(9)} -> ${u.adverb.padEnd(13)} answer exists at ${hit.map((x) => x.id).join(', ')}, and none of the three is imported`);
  }

  /* THE ARITHMETIC, RE-READ FROM POSTGRES.
     the feminine = the masculine + one consonant
     the adverb   = the feminine  + -MAHⁿ
     For `sérieux` all three cells are published rows and this build edits one
     character of the third. If any of them moves, the grid stops being true. */
  const pgRespell = (id: string): string => String(by.get(id)?.respell ?? '');
  const repaired = (id: string): string => {
    const rep = ALL_REPAIRS.find((x) => x.id === id);
    const stored = pgRespell(id);
    return rep ? stored.split(rep.from).join(rep.to) : stored;
  };
  for (const a of ADJ_ORDER) {
    const mascId = CHAIN_ROW[a].masc;
    const advId = CHAIN_ROW[a].adverb;
    const femId = CHAIN_ROW[a].fem;
    const m = repaired(mascId);
    const adv = repaired(advId);
    // The feminine is AUTHORED for two of the three, so it is read from the
    // corpus file rather than from Postgres unless it is a2.03's row.
    const f = has(femId) ? '' : repaired(femId);
    console.log(`  chain ${String(step(a, 'masc')).padEnd(9)} ${m.padEnd(10)} -> ${String(step(a, 'fem')).padEnd(9)} ${(f || '(authored)').padEnd(11)} -> ${String(step(a, 'adverb')).padEnd(13)} ${adv}`);
    if (f && !f.startsWith(m)) {
      console.error(`!! ${a}: the feminine ${JSON.stringify(f)} does not start with the masculine ${JSON.stringify(m)}. The arithmetic has moved.`);
      process.exit(1);
    }
  }

  /* THE ROWS THE REPAIRED VALUES WERE READ OFF STILL HOLD THEM.
     A refusal nobody re-checks is a comment, and so is a justification. */
  for (const rep of ALL_REPAIRS) {
    if (!rep.readOff) continue;
    const src = String(by.get(rep.readOff)?.respell ?? '');
    if (!src) { console.error(`!! ${rep.readOff} is not in the manifest read, and ${rep.id}'s repaired value was read off it`); process.exit(1); }
    const core = rep.to.replace(/^[A-Z]/, (x) => x); // the value as written
    if (!src.includes(core)) {
      console.error(`!! ${rep.id} is repaired to ${JSON.stringify(rep.to)} on the grounds that ${rep.readOff} already holds it, and ${rep.readOff} now holds ${JSON.stringify(src)}.`);
      console.error('   The justification has gone stale. Re-read it before regenerating.');
      process.exit(1);
    }
    console.log(`  read off  ${rep.id.padEnd(36)} ${rep.from.padEnd(15)} -> ${rep.to.padEnd(15)} because ${rep.readOff} holds ${JSON.stringify(src)}`);
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

  /* THE FOUR ABSENCES THIS BUILD AUTHORS AGAINST ARE STILL ABSENCES. If somebody
     publishes one first, authoring a second is the flashhub double-serve. */
  const absent = await c.query<{ id: string; fr: string; theme: string }>(
    `select id, fr, theme from content_items where kind <> 'sentence'
       and lower(regexp_replace(fr, '^(le |la |les |un |une |des |l''|l’)', '')) = any($1)`,
    [['lente', 'douce', 'évident', 'constant']]);
  if (absent.rowCount) {
    console.error('!! one of the four adjectives this build authors now EXISTS as a headword:');
    for (const x of absent.rows) console.error(`     ${x.id}  ${x.fr}  (${x.theme})`);
    console.error('   Import that row instead, or the theme serves one card twice.');
    process.exit(1);
  }
  console.log('  `lente`, `douce`, `évident` and `constant` are still absent at every status in every theme');

  /* AND THE GENERATOR REFUSES TO RUN ONCE THE BATCH HAS LANDED. a2.15: the
     manifest is a PRE-BATCH read and has to stay one. */
  for (const rep of ALL_REPAIRS) {
    if (pgRespell(rep.id) === rep.to) {
      console.error(`!! ${rep.id} already holds the repaired value ${JSON.stringify(rep.to)}, so the batch has run.`);
      console.error('   THE MANIFEST IS A PRE-BATCH READ AND MUST STAY ONE. Leave the .gen.ts as committed.');
      process.exit(1);
    }
  }
  if (RESPELL_ADDITIONS.length) {
    console.error(`!! RESPELL_ADDITIONS is not empty and this build supplies no respellings. Every imported row already has one.`);
    process.exit(1);
  }

  /* THE ID BLOCK, WHICH IS A NEW NAMESPACE, SO ANY ROW IN IT IS SOMEBODY ELSE. */
  const mine = await c.query<{ n: string }>(
    "select count(*) n from content_items where id like 'fr.a2.adverbes-essentiels.%'");
  const intruders = await c.query<{ id: string }>(
    'select id from content_items where id between $1 and $2 order by id', [ID_BLOCK.from, ID_BLOCK.to]);
  if (intruders.rowCount) {
    console.error(`!! rows already inside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to}: ${intruders.rows.map((x) => x.id).join(', ')}`);
    console.error('   fr.a2.adverbes-essentiels is a NEW namespace opened by this build. Anything in it is somebody else landing in it.');
    process.exit(1);
  }
  const theme = await c.query<{ n: string }>(
    "select count(*) n from content_items where theme = 'adverbes-essentiels'");

  /* AND `adverbes` (no suffix) IS STILL DEAD, which is the half of ledger §3
     that was right. If somebody has created it, the decision needs re-reading. */
  const deadTheme = await c.query<{ n: string }>(
    "select count(*) n from content_items where theme = 'adverbes'");
  if (Number(deadTheme.rows[0].n) > 0) {
    console.error(`!! the theme \`adverbes\` now holds ${deadTheme.rows[0].n} rows. Ledger §3 recorded it as dead and this build wrote into \`adverbes-essentiels\` on that basis.`);
    process.exit(1);
  }
  console.log('  theme `adverbes` still holds 0 rows, and `adverbes-essentiels` is the live one');

  const stamp = new Date().toISOString().slice(0, 10);
  const themes = new Set(IMPORTED.map(([, id]) => String(by.get(id)!.theme)));

  const body = `// GENERATED by scripts/_a217_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${IMPORTED.length} rows a2.17 imports rather than authors, out of
// ${themes.size} themes, plus ${REFUSED.length} read and refused.
//
// NOT ONE OF THE TWENTY-TWO ADVERBS IS AUTHORED. \`adverbes-essentiels\` holds 325
// published rows and every adverb this lesson teaches is in it. What is authored
// is the other half of the derivation: four ADJECTIVES that do not exist at any
// status in any theme, two of which are the middle step of the chain.
//
// AND FOR \`sérieux\` ALL THREE CELLS OF THE CHAIN ARE SOMEBODY ELSE'S DATA, in
// two themes by different authors, with a2.03's own \`sérieuse\` in the middle.
//
// Regenerate with: pnpm tsx scripts/_a217_manifest.ts

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** The ${NAMING.length} headwords that already exist. \`lente\` and \`douce\` are deliberately
 *  absent: they are the two middle steps the corpus does not hold, and the
 *  corpus file authors them. */
export const IMPORTED_NAMING_ROWS: Item[] = [
${NAMING.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${EVIDENCE.length} published sentences. Two are a2.03's own rows and six put an adverb
 *  after a conjugated verb, every one of them already respelled the house way. */
export const IMPORTED_EVIDENCE_ROWS: Item[] = [
${EVIDENCE.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${REFUSED.length} rows read and refused. READ ONLY: never carried, never released,
 *  never in itemIds, and named on no screen. */
export const READ_ONLY_ROWS: Item[] = [
${REFUSED.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** word -> id, in learner order. The only place this pairing is written. */
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
 *  build repairs nothing it does not also display. The seed is a CUT and
 *  \`adverbes-essentiels\` is outside SEED_CUT.themes, so most of these are not
 *  in it today and a merge that did not carry them would render blank cards. */
export const CARRIED_IDS: string[] = [
${IMPORTED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** The themes the imported rows came out of. */
export const SOURCE_THEMES: string[] = ${JSON.stringify([...themes].sort())};

/** The block, and the row count in it on the day this manifest was generated.
 *  A NEW namespace, so the count is 0 and anything at all inside it is somebody
 *  else's. Ledger §10: the maximum is useless and the COUNT is the only signal. */
export const BLOCK_MEASURED = { rows: ${mine.rows[0].n}, insideBlock: 0, themeRows: ${theme.rows[0].n}, date: ${JSON.stringify(stamp)} };

/** The measurement the lesson rests on, re-taken here so it cannot go stale in a
 *  comment: the same word respelled two ways in one database, with the SENTENCE
 *  half right and the HEADWORD half wrong. */
export const TWO_WAYS_EVIDENCE: { word: string; headword: string; stored: string; sentence: string; published: string }[] = [
${[
  ['lentement', 'fr.sons.adverbes-essentiels.001', 'fr.sons.nasales.013'],
  ['doucement', 'fr.sons.adverbes-essentiels.003', 'fr.sons.nasales.014'],
  ['bien', 'fr.sons.mots-essentiels.045', 'fr.sons.nasales.078'],
].map(([w, hw, sen]) => `  { word: ${JSON.stringify(w)}, headword: ${JSON.stringify(hw)}, stored: ${JSON.stringify(by.get(hw)!.respell)}, sentence: ${JSON.stringify(sen)}, published: ${JSON.stringify(by.get(sen)!.respell)} },`).join('\n')}
];
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${NAMING.length} naming, ${EVIDENCE.length} evidence, ${REFUSED.length} refused, ${INSPECTED.length} inspected`);
  console.log(`  ${IMPORTED.length} imported out of ${themes.size} themes: ${[...themes].sort().join(', ')}`);
  console.log(`  fr.a2.adverbes-essentiels holds ${mine.rows[0].n} rows; the theme holds ${theme.rows[0].n}`);
  console.log(`  ${PLACEMENT_ROWS.length} placement rows, ${ALL_REPAIRS.length} repairs (${ALL_REPAIRS.filter((x) => x.blind).length} of them BLIND to the checker)`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
