/* Regenerates data/pronominaux-passe-rows.gen.ts, the recorded read behind a2.23.
 *
 * TWENTY ROWS IMPORTED AND NOT ONE HEADWORD AUTHORED — corrections §2 for the
 * seventh build running. Twelve infinitives and eight published sentences, out
 * of six themes, and this build authors nothing at all in `routines`.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * THE FRAME VERB'S CELLS, all thirteen. The lesson's claim is that NOT ONE of
 *   them is published, which is why the whole paradigm is authored. If any of
 *   them stops being zero, corpus §5 has stopped holding and the author should
 *   know before the merge rather than after.
 * THE CONSTRUCTION ITSELF, which is everywhere. `s'est` 219, `se sont` 104.
 *   The pair of figures is the Owns: the shape is common and the verb is not.
 * THE ASYMMETRY. « j'ai lavé la voiture » published, « je me suis lavé » not.
 * THE EXCEPTION, ALREADY PUBLISHED AND ALREADY UNAGREED. Corpus §6. The three
 *   `corps` rows must still be stored WITHOUT an ending, because the whole
 *   reason the exception is named receptively is that they are.
 * a2.21's and a2.22's blocks, which must still hold exactly 46 and 31.
 * THE FALSE POSITIVE, which must still be stored the way a2.21 left it.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A headword with no respelling, unless RESPELL_ADDITIONS declares one.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A GENDERED row (a2.04 ledger §0); this build refused one.
 * A row inside this build's id block that this build does not own, and any row
 *   at all inside a2.21's or a2.22's block.
 * A row where AVOIR IS THE FIRST WORD OF A REFLEXIVE, which is the error this
 *   whole lesson exists to prevent and which must never arrive by import.
 * A row carrying the IMPERFECT, which is beyond A2's first twenty.
 * A row carrying a RECIPROCAL, which corpus §9 leaves out entirely.
 * A row that AGREES the second word with something named after it, which is the
 *   exception being taught wrongly.
 *
 *     pnpm tsx scripts/_a223_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  A221_BLOCK, A221_ROWS, A222_BLOCK, A222_ROWS, AUTHORED_IDS,
  BUILT_FORMS, EXPECTED_IMPORTED, FALSE_POSITIVES, ID_BLOCK, IMPORTED,
  IMPORTED_IDS, IMPERFECT_MARKERS, READ_NOT_IMPORTED, RECIPROCAL_MARKERS,
  RESPELL_ADDITIONS, ROW_COUNT_BEFORE, isA221, isA222, isMine,
} from './data/pronominaux-passe-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/pronominaux-passe-rows.gen.ts');

const TIE = '‿';
const NL = '\n';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

/* Postgres `~*` with a bracket class, never a JavaScript `\b` (invariants §0).
 * SINGLE apostrophes throughout, passed as PARAMETERS: a2.05 §1 found that a
 * doubled one inside a single-quoted literal survives as two characters and
 * makes an elided alternation dead. EVERY CELL THIS LESSON MEASURES ELIDES, so
 * that trap is live here in a way it was not in a2.22. */

/** EVERY MEASUREMENT EXCLUDES THIS LESSON'S OWN ROWS. a2.17 §9: after the first
 *  apply, a lesson's own sentences match the pattern it is measuring and the
 *  printed figure grows on every re-apply. */
const NOT_MINE = `and id <> all('{${AUTHORED_IDS.join(',')}}')`;

/** A cluster bounded by non-letters on both sides. */
const cluster = (s: string): string => `(^|[^[:alpha:]])${s}([^[:alpha:]]|$)`;

/** THE THIRTEEN CELLS OF THE FRAME VERB, plus the two shapes the lesson's
 *  negative and its exception turn on. Corpus §5 says all of them are zero. */
const FRAME_CELLS: readonly string[] = [
  'je me suis lavé', "tu t'es lavé", "il s'est lavé",
  'nous nous sommes lavés', 'vous vous êtes lavés', 'ils se sont lavés',
  "elle s'est lavée", 'elles se sont lavées',
  'ils se sont levés', 'vous vous êtes levés',
  "elle s'est lavé les mains", 'ne me suis pas', 'ne se sont pas',
];

/** THE CONSTRUCTION, which is everywhere. The pair of figures IS the Owns. */
const CONSTRUCTION: readonly string[] = [
  "s'est", 'se sont', 'nous nous sommes', 'me suis', 'vous vous êtes', "elle s'est",
];

/** THE ASYMMETRY, corpus §5. The avoir side is published and the être side is
 *  not, and the lesson's opening move depends on it. */
const ASYMMETRY: readonly string[] = ["j'ai lavé la voiture", 'je me suis lavé'];

/** The rows corpus §6 rests on. They must still be stored WITHOUT an ending. */
const UNAGREED_ROWS: readonly { id: string; must: string; mustNot: string }[] = [
  { id: 'fr.a2.corps.001', must: "s'est cassé le bras", mustNot: "s'est cassée" },
  { id: 'fr.a2.corps.002', must: "s'est cassé la jambe", mustNot: "s'est cassée" },
  { id: 'fr.a2.corps.006', must: "s'est fait mal", mustNot: "s'est faite" },
];

const has = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);

async function main() {
  const c = await pool.connect();

  const ids = [...IMPORTED_IDS];
  if (new Set(ids).size !== ids.length) die('IMPORTED holds a duplicate id.');
  if (ids.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${ids.length} rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
  const refused = new Set(READ_NOT_IMPORTED.map((r) => r.id));
  for (const id of ids) {
    if (refused.has(id)) die(`${id} is both imported and in READ_NOT_IMPORTED.`);
  }

  const res = await c.query('select * from content_items where id = any($1) order by id', [ids]);
  const rows = res.rows as Record<string, unknown>[];
  const found = new Set(rows.map((r) => String(r.id)));
  for (const id of ids) if (!found.has(id)) die(`${id} is in IMPORTED and not in the database.`);

  const additions = new Set(RESPELL_ADDITIONS.map((a) => a.id));

  for (const r of rows) {
    const id = String(r.id);
    const claimed = IMPORTED.find((i) => i.id === id)!;
    const unknown = unknownPopulatedColumns(r);
    if (unknown.length) die(`${id} has populated columns this generator does not classify: ${unknown.join(', ')}`);
    if (r.fr !== claimed.fr) die(`${id} says fr="${String(r.fr)}" and the corpus file claims "${claimed.fr}".`);
    /* A HEADWORD is imported FOR its respelling and must have one. A published
     * SENTENCE mostly does not carry one — measured here, all eight do not —
     * and that is not a defect: `imported.ts` refuses to hand a screen a
     * respelling that does not exist, so a card wanting one fails loudly. */
    if (r.kind !== 'sentence' && !r.respell && !additions.has(id)) {
      die(`${id} is a headword with no respelling and no RESPELL_ADDITIONS entry. A headword is imported for its respelling.`);
    }
    if (String(r.respell ?? '').includes(TIE)) die(`${id} carries U+203F in its respelling and it draws as an underscore on a phone.`);
    if (r.status !== 'published') die(`${id} is ${String(r.status)} rather than published.`);
    if (isMine(id)) die(`${id} is inside this build's id block and is being imported rather than authored.`);
    if (isA221(id)) die(`${id} is inside a2.21's block (${A221_BLOCK.from}..${A221_BLOCK.to}).`);
    if (isA222(id)) die(`${id} is inside a2.22's block (${A222_BLOCK.from}..${A222_BLOCK.to}).`);
    if (r.gender) die(`${id} carries gender="${String(r.gender)}". A gendered single-word row joins a1.03's ending population when the merge CARRIES it (a2.04 ledger §0). This build refused one for exactly this; see READ_NOT_IMPORTED.`);

    const fr = String(r.fr);
    /* AVOIR AS THE FIRST WORD OF A REFLEXIVE. The error, by import. */
    for (const b of BUILT_FORMS) {
      if (has(fr, b)) die(`${id} « ${fr} » carries « ${b} », which is not French and is the error this lesson exists to prevent.`);
    }
    /* THE IMPERFECT, which is beyond A2's first twenty. */
    for (const m of IMPERFECT_MARKERS) {
      if (has(fr, m)) die(`${id} « ${fr} » carries « ${m} ». The imperfect and any contrast between past tenses is beyond A2's first twenty.`);
    }
    /* THE RECIPROCAL, which corpus §9 leaves out entirely. */
    for (const m of RECIPROCAL_MARKERS) {
      if (has(fr, m)) die(`${id} « ${fr} » carries the reciprocal « ${m} », which a2.22 left out and corpus §9 leaves out too.`);
    }
  }

  // ══ THE FRAME VERB'S CELLS: all thirteen, and all of them zero ═══════════
  const cellEvidence: Record<string, number> = {};
  for (const cell of FRAME_CELLS) {
    const q = await c.query<{ n: number }>(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`,
      [cluster(cell)],
    );
    cellEvidence[cell] = Number(q.rows[0]!.n);
  }
  const nonZero = Object.entries(cellEvidence).filter(([, n]) => n !== 0);
  if (nonZero.length) {
    console.log(`  NOTE: ${nonZero.length} frame-verb cell(s) are no longer zero and all thirteen were on 2026-08-15: `
      + `${nonZero.map(([k, n]) => `« ${k} » ${n}`).join(', ')}. Corpus §5 needs re-reading.`);
  }

  // ══ THE CONSTRUCTION, WHICH IS EVERYWHERE ════════════════════════════════
  const construction: Record<string, number> = {};
  for (const s of CONSTRUCTION) {
    const q = await c.query<{ n: number }>(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [cluster(s)]);
    construction[s] = Number(q.rows[0]!.n);
  }
  if (construction["s'est"]! < 100 || construction['se sont']! < 50) {
    die(`the construction is published ${construction["s'est"]} + ${construction['se sont']} times and the lesson's claim is that it is everywhere. `
      + 'If those figures have collapsed, something has been deleted and the Owns needs re-reading.');
  }

  // ══ THE ASYMMETRY ════════════════════════════════════════════════════════
  const asymmetry: Record<string, number> = {};
  for (const s of ASYMMETRY) {
    const q = await c.query<{ n: number }>(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [cluster(s)]);
    asymmetry[s] = Number(q.rows[0]!.n);
  }
  if (asymmetry['je me suis lavé'] !== 0) {
    console.log(`  NOTE: « je me suis lavé » now has ${asymmetry['je me suis lavé']} published sentences and had 0. `
      + 'The asymmetry the Owns rests on has changed.');
  }

  // ══ THE EXCEPTION, STILL PUBLISHED AND STILL UNAGREED ════════════════════
  const unagreedQ = await c.query<{ id: string; fr: string }>(
    'select id, fr from content_items where id = any($1)', [UNAGREED_ROWS.map((u) => u.id)]);
  const unagreedNow = new Map(unagreedQ.rows.map((r) => [r.id, r.fr] as const));
  for (const u of UNAGREED_ROWS) {
    const now = unagreedNow.get(u.id);
    if (!now) die(`${u.id} is gone. Corpus §6 rests on three published rows that show the exception already unagreed.`);
    if (!now!.includes(u.must)) die(`${u.id} is « ${now} » and no longer contains « ${u.must} ». Corpus §6 needs re-reading.`);
    if (now!.includes(u.mustNot)) {
      die(`${u.id} is « ${now} » and now AGREES the second word. Corpus §6's whole argument is that the corpus already publishes these unagreed; `
        + 'if somebody has "corrected" them, the exception decision has to be reopened.');
    }
  }
  const unagreedCount = unagreedNow.size;

  // ══ THE NEIGHBOURS' BLOCKS, AND THIS BUILD'S OWN ═════════════════════════
  const blockQ = await c.query<{ id: string }>(
    "select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const allIds = blockQ.rows.map((r) => r.id);
  const inA221 = allIds.filter(isA221);
  const inA222 = allIds.filter(isA222);
  const inMine = allIds.filter(isMine);
  if (inA221.length !== A221_ROWS) die(`a2.21's block holds ${inA221.length} rows and that lesson applied ${A221_ROWS}.`);
  if (inA222.length !== A222_ROWS) die(`a2.22's block holds ${inA222.length} rows and that lesson applied ${A222_ROWS}.`);
  const strayInMine = inMine.filter((id) => !AUTHORED_IDS.includes(id));
  if (strayInMine.length) die(`rows inside this build's block that this build does not own: ${strayInMine.join(', ')}. Ledger §10: the row COUNT is the only signal and a concurrent lesson can land below your top.`);
  const before = allIds.length - inMine.length;
  if (before !== ROW_COUNT_BEFORE) {
    console.log(`  NOTE: fr.a2.verbes holds ${before} rows other than this build's and the corpus file records ${ROW_COUNT_BEFORE}.`);
  }

  // ══ THE FALSE POSITIVE, AS a2.21 LEFT IT ═════════════════════════════════
  /* This build authors the rows carrying it rather than importing them, so what
   * is checked is that a2.21's four rows still hold the doubled-consonant shape
   * and that nobody has "repaired" one with a superscript. a2.21 §3: the
   * checker CALLS THE SUPERSCRIPT FORM CLEAN, so no automated sweep would have
   * noticed. */
  const fpQ = await c.query<{ id: string; respell: string | null }>(
    "select id, respell from content_items where id like 'fr.a2.verbes.%' and respell ~* 'somm|sohm'");
  const fpRows = fpQ.rows.filter((r) => !AUTHORED_IDS.includes(r.id));
  const fpBroken = fpRows.filter((r) => /soh[mⁿ]/u.test(String(r.respell ?? '')));
  if (fpBroken.length) {
    console.log(`  NOTE: ${fpBroken.length} neighbouring row(s) respell « sommes » with a superscript or a plain h-m, which a2.21 §2 measured as WRONG: `
      + `${fpBroken.map((r) => `${r.id} ${JSON.stringify(r.respell)}`).join(', ')}`);
  }

  // ══ WRITE ════════════════════════════════════════════════════════════════
  const literals = rows.map((r) => `  '${String(r.id)}': ${itemLiteral(r)}`).join(NL);
  const cellLines = Object.entries(cellEvidence)
    .map(([k, v]) => `//     ${k.padEnd(28)} ${String(v).padStart(3)}`).join(NL);
  const conLines = Object.entries(construction)
    .map(([k, v]) => `//     ${k.padEnd(28)} ${String(v).padStart(3)}`).join(NL);
  const asymLines = Object.entries(asymmetry)
    .map(([k, v]) => `//     ${k.padEnd(28)} ${String(v).padStart(3)}`).join(NL);

  const body = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a223_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported out of ${new Set(rows.map((r) => String(r.theme))).size} themes.
// ${READ_NOT_IMPORTED.length} rows read and refused; see READ_NOT_IMPORTED in the corpus file.
// 0 respellings repaired, 0 supplied. This build repairs nothing.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION:
//
//   THE FRAME VERB'S CELLS, published sentences per cell, excluding this
//   lesson's own rows. ALL THIRTEEN WERE ZERO on 2026-08-15, which is why the
//   whole paradigm, the whole negative and the whole exception are authored:
//
${cellLines}
//
//   AND THE CONSTRUCTION ITSELF IS EVERYWHERE. That pair of figures is the
//   Owns: the shape is common and the verb has never been built:
//
${conLines}
//
//   THE ASYMMETRY. The avoir sentence that causes the error is published and
//   the être sentence that corrects it is not:
//
${asymLines}
//
//   THE EXCEPTION.  ${unagreedCount} published rows still show a feminine subject with an
//     unagreed second word (« Elle s'est cassé le bras »). Corpus §6: that is
//     why the exception is named receptively rather than left out.
//
//   THE BLOCKS.  fr.a2.verbes holds ${before} rows other than this build's.
//     a2.21's ${A221_BLOCK.from}..${A221_BLOCK.to} holds ${inA221.length}.
//     a2.22's ${A222_BLOCK.from}..${A222_BLOCK.to} holds ${inA222.length}.
//     Rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this build does not own: none.

import type { Item } from '../../ealch-v2/src/content/schema.ts';

export const PRONOMINAUX_PASSE_IMPORT_ROWS: Record<string, Item> = {
${literals}
};

/** What each imported row's respelling said on the day of the read, so a repair
 *  or a drift is visible without another database call. */
export const STORED_RESPELL: Record<string, string | null> = {
${rows.map((r) => `  '${String(r.id)}': ${r.respell === null || r.respell === undefined ? 'null' : JSON.stringify(String(r.respell))},`).join(NL)}
};

/** Published sentences per cell of the frame verb, excluding this build's own
 *  rows. Corpus §5 claims every one of these is zero. */
export const CELL_EVIDENCE: Record<string, number> = ${JSON.stringify(cellEvidence, null, 2).split(NL).join(NL)};

/** The construction, which is everywhere, and the asymmetry, which is the Owns. */
export const CONSTRUCTION_EVIDENCE: Record<string, number> = ${JSON.stringify(construction, null, 2).split(NL).join(NL)};
export const ASYMMETRY_EVIDENCE: Record<string, number> = ${JSON.stringify(asymmetry, null, 2).split(NL).join(NL)};

export const MEASURED_AT = 'read from Postgres by scripts/_a223_manifest.ts';
export const MEASURED_ROWS = {
  imported: ${rows.length},
  unagreedPublished: ${unagreedCount},
  a221BlockRows: ${inA221.length},
  a222BlockRows: ${inA222.length},
  verbesRowsBefore: ${before},
  frameCellsMeasured: ${FRAME_CELLS.length},
  frameCellsNonZero: ${nonZero.length},
} as const;
`;

  writeFileSync(OUT, body, 'utf8');

  console.log(`\n  wrote ${OUT}`);
  console.log(`    ${rows.length} rows imported, 0 repaired, ${READ_NOT_IMPORTED.length} read and refused`);
  console.log(`    fr.a2.verbes: ${before} rows other than this build's`);
  console.log(`    a2.21's block ${inA221.length}, a2.22's block ${inA222.length}`);
  console.log(`    the exception: ${unagreedCount} published rows still unagreed`);
  console.log('    frame-verb cells (all should be 0):');
  for (const [k, v] of Object.entries(cellEvidence)) console.log(`      ${k.padEnd(28)} ${String(v).padStart(3)}`);
  console.log('    the construction:');
  for (const [k, v] of Object.entries(construction)) console.log(`      ${k.padEnd(28)} ${String(v).padStart(3)}`);
  console.log('    the asymmetry:');
  for (const [k, v] of Object.entries(asymmetry)) console.log(`      ${k.padEnd(28)} ${String(v).padStart(3)}`);
  console.log('');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
