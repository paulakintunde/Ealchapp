/* Regenerates data/pronominaux-rows.gen.ts, the recorded read behind a2.22.
 *
 * TWENTY ROWS IMPORTED AND NOT ONE HEADWORD AUTHORED — corrections §2 for the
 * sixth build running. Twelve infinitives and eight published sentences, out of
 * five themes, and this build authors nothing at all in `routines`.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * THE PARADIGM EVIDENCE, person by person. The lesson's claim is that the two
 *   cells which prove the pronoun moves — `vous` and `ils` — have ZERO published
 *   sentences, and that the negative has zero in every person. If either figure
 *   stops being zero the lesson's reason for authoring its own paradigm has
 *   changed and the author should know before the merge, not after.
 * THE SHAPE THE CORPUS STORES A REFLEXIVE IN: framed with `se`, not bare. The
 *   ledger decision doctrine §E asks for, measured rather than asserted.
 * THE TWO THEMES: `routine` must still hold zero and `routines` must still hold
 *   the rows a1.25 teaches from.
 * a2.21's block, which must still hold exactly its own forty-six rows.
 * THE FALSE POSITIVES, which must still be stored broken, because a table of
 *   rows-we-did-not-repair is only meaningful while they are still that way.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A row with no respelling, unless RESPELL_ADDITIONS declares one.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A GENDERED row (a2.04 ledger §0); this build refused two.
 * A row inside this build's id block that this build does not own, and any row
 *   at all inside a2.21's block or a2.23's reservation.
 * A row carrying a COMPOUND TENSE or a past participle, because a stray import
 *   is how a2.23's whole lesson would reach a screen four days early.
 * A false-positive row appearing in IMPORTED, since the decision was not to
 *   carry them.
 *
 *     pnpm tsx scripts/_a222_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  A221_BLOCK, A223_BLOCK, AUTHORED_IDS, COMPOUND_CLUSTERS, EXPECTED_IMPORTED,
  FALSE_POSITIVES, ID_BLOCK, IMPORTED, IMPORTED_IDS, PARTICIPLES,
  READ_NOT_IMPORTED, RESPELL_ADDITIONS, ROW_COUNT_BEFORE, isA221, isMine,
} from './data/pronominaux-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/pronominaux-rows.gen.ts');

const TIE = '‿';
const NL = '\n';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const idNum = (id: string): number => Number(id.split('.')[3] ?? '-1');
const isA223 = (id: string): boolean =>
  id.startsWith('fr.a2.verbes.') && idNum(id) >= idNum(A223_BLOCK.from) && idNum(id) <= idNum(A223_BLOCK.to);

/* Postgres `~*` with a bracket class, never a JavaScript `\b` (invariants §0).
 * SINGLE apostrophes throughout, passed as PARAMETERS: a2.05 §1 found that a
 * doubled one inside a single-quoted literal survives as two characters and
 * makes an elided alternation dead. Nothing in this lesson elides `ne`, but the
 * pronoun itself elides (`m'habille`, `s'habillent`) and the same trap applies. */

/** EVERY MEASUREMENT EXCLUDES THIS LESSON'S OWN ROWS. a2.17 §9: after the first
 *  apply, a lesson's own sentences match the pattern it is measuring and the
 *  printed figure grows on every re-apply. */
const NOT_MINE = `and id <> all('{${AUTHORED_IDS.join(',')}}')`;

/** A cluster like « je me lève », bounded by non-letters on both sides. */
const cluster = (s: string): string => `(^|[^[:alpha:]])${s}([^[:alpha:]]|$)`;

const PERSON_CELLS: readonly string[] = [
  'je me lève', 'tu te lèves', 'il se lève',
  'nous nous levons', 'vous vous levez', 'ils se lèvent',
  'je me lave', 'tu te laves', 'il se lave',
  'nous nous lavons', 'vous vous lavez', 'ils se lavent',
  'je ne me lève pas', 'je ne me lave pas',
];

async function main() {
  const c = await pool.connect();

  const ids = [...IMPORTED_IDS];
  if (new Set(ids).size !== ids.length) die('IMPORTED holds a duplicate id.');
  if (ids.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${ids.length} rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
  const refused = new Set(READ_NOT_IMPORTED.map((r) => r.id));
  for (const fp of FALSE_POSITIVES) {
    if (ids.includes(fp.id)) die(`${fp.id} is a measured FALSE POSITIVE and it is in IMPORTED. The decision was not to carry these; see corpus §8.`);
    if (!refused.has(fp.id)) die(`${fp.id} is a FALSE POSITIVE and is not in READ_NOT_IMPORTED, so nothing records why it is missing.`);
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
     * SENTENCE mostly does not carry one — measured here, six of the eight do
     * not — and that is not a defect: `imported.ts` refuses to hand a screen a
     * respelling that does not exist, so a card wanting one fails loudly. */
    if (r.kind !== 'sentence' && !r.respell && !additions.has(id)) {
      die(`${id} is a headword with no respelling and no RESPELL_ADDITIONS entry. A headword is imported for its respelling.`);
    }
    if (String(r.respell ?? '').includes(TIE)) die(`${id} carries U+203F in its respelling and it draws as an underscore on a phone.`);
    if (r.status !== 'published') die(`${id} is ${String(r.status)} rather than published.`);
    if (isMine(id)) die(`${id} is inside this build's id block and is being imported rather than authored.`);
    if (isA221(id)) die(`${id} is inside a2.21's block (${A221_BLOCK.from}..${A221_BLOCK.to}).`);
    if (isA223(id)) die(`${id} is inside a2.23's reservation (${A223_BLOCK.from}..${A223_BLOCK.to}).`);
    if (r.gender) die(`${id} carries gender="${String(r.gender)}". A gendered single-word row joins a1.03's ending population when the merge CARRIES it (a2.04 ledger §0). This build refused two for exactly this; see READ_NOT_IMPORTED.`);

    /* NO COMPOUND TENSE MAY ARRIVE BY IMPORT. a2.23 owns the whole of it. */
    const hay = ` ${String(r.fr).toLowerCase()} `;
    for (const cl of COMPOUND_CLUSTERS) {
      if (hay.includes(cl.toLowerCase())) die(`${id} « ${String(r.fr)} » carries the compound cluster « ${cl} », which is a2.23's.`);
    }
    for (const p of PARTICIPLES) {
      if (new RegExp(`(?<![\\p{L}\\p{N}-])${p}(?![\\p{L}\\p{N}-])`, 'iu').test(String(r.fr))) {
        die(`${id} « ${String(r.fr)} » carries the past participle « ${p} », which is a2.23's.`);
      }
    }
  }

  // ══ THE PARADIGM EVIDENCE, person by person ══════════════════════════════
  const cellEvidence: Record<string, number> = {};
  for (const cell of PERSON_CELLS) {
    const q = await c.query<{ n: number }>(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`,
      [cluster(cell)],
    );
    cellEvidence[cell] = Number(q.rows[0]!.n);
  }
  /* THE LESSON'S REASON FOR AUTHORING ITS OWN PARADIGM. If either of these
   * stops being zero, corrections §3 has stopped holding for this lesson. */
  const provingCells = ['vous vous levez', 'ils se lèvent'];
  for (const cell of provingCells) {
    if (cellEvidence[cell] !== 0) {
      console.log(`  NOTE: « ${cell} » now has ${cellEvidence[cell]} published sentences and had 0 on 2026-08-15.`);
    }
  }

  // ══ THE SHAPE: framed with `se`, not bare ════════════════════════════════
  const FRAMED = ['se lever', 'se coucher', 'se laver', "s'habiller", 'se réveiller', 'se doucher', 'se reposer', 'se dépêcher'];
  const BARE = ['lever', 'coucher', 'laver', 'habiller', 'réveiller', 'doucher', 'reposer', 'dépêcher'];
  const framedQ = await c.query<{ fr: string; n: number }>(
    `select fr, count(*)::int n from content_items where kind <> 'sentence' and fr = any($1) ${NOT_MINE} group by fr order by fr`, [FRAMED]);
  const bareQ = await c.query<{ fr: string; n: number }>(
    `select fr, count(*)::int n from content_items where kind <> 'sentence' and fr = any($1) ${NOT_MINE} group by fr order by fr`, [BARE]);
  const framedFound = framedQ.rows.length;
  const bareFound = bareQ.rows.length;
  if (framedFound <= bareFound) {
    die(`${framedFound} of the eight verbs exist framed with se and ${bareFound} exist bare. The corpus file claims the corpus stores them FRAMED and that is the ledger decision this build inherited; re-read doctrine §E before authoring.`);
  }

  // ══ THE TWO THEMES ═══════════════════════════════════════════════════════
  const themeQ = await c.query<{ theme: string; n: number }>(
    "select theme, count(*)::int n from content_items where status='published' and theme in ('routine','routines') group by theme");
  const themeCounts: Record<string, number> = { routine: 0, routines: 0 };
  for (const t of themeQ.rows) themeCounts[t.theme] = Number(t.n);
  if (themeCounts.routine !== 0) {
    die(`the theme « routine » now holds ${themeCounts.routine} rows and it held 0. The unit declares it and the corpus file records the declaration as inert; re-read corpus §4.`);
  }

  // ══ a2.21's BLOCK, and this build's own ══════════════════════════════════
  const blockQ = await c.query<{ id: string }>(
    "select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const allIds = blockQ.rows.map((r) => r.id);
  const inA221 = allIds.filter(isA221);
  const inMine = allIds.filter(isMine);
  if (inA221.length !== 46) die(`a2.21's block holds ${inA221.length} rows and that lesson applied 46.`);
  const strayInMine = inMine.filter((id) => !AUTHORED_IDS.includes(id));
  if (strayInMine.length) die(`rows inside this build's block that this build does not own: ${strayInMine.join(', ')}. Ledger §10: the row COUNT is the only signal and a concurrent lesson can land below your top.`);
  const before = allIds.length - inMine.length;
  if (before !== ROW_COUNT_BEFORE) {
    console.log(`  NOTE: fr.a2.verbes holds ${before} rows other than this build's and the corpus file records ${ROW_COUNT_BEFORE}.`);
  }

  // ══ THE FALSE POSITIVES MUST STILL BE STORED BROKEN ══════════════════════
  const fpQ = await c.query<{ id: string; respell: string | null }>(
    'select id, respell from content_items where id = any($1)', [FALSE_POSITIVES.map((f) => f.id)]);
  const fpNow = new Map(fpQ.rows.map((r) => [r.id, String(r.respell ?? '')] as const));
  const fpChanged = FALSE_POSITIVES.filter((f) => fpNow.get(f.id) !== f.stored);
  if (fpChanged.length) {
    console.log(`  NOTE: ${fpChanged.length} false-positive row(s) no longer hold the value this build measured: `
      + `${fpChanged.map((f) => `${f.id} now ${JSON.stringify(fpNow.get(f.id))}`).join(', ')}`);
  }

  // ══ WRITE ════════════════════════════════════════════════════════════════
  /* `itemLiteral` already ends in a comma. Adding a second one is valid
   * TypeScript for an object literal and it is noise in a generated file. */
  const literals = rows.map((r) => `  '${String(r.id)}': ${itemLiteral(r)}`).join(NL);
  const evidence = Object.entries(cellEvidence)
    .map(([k, v]) => `//     ${k.padEnd(20)} ${String(v).padStart(3)}`).join(NL);
  const framedLine = framedQ.rows.map((r) => `${r.fr} ${r.n}`).join(' · ');
  const bareLine = bareQ.rows.length ? bareQ.rows.map((r) => `${r.fr} ${r.n}`).join(' · ') : '(none)';

  const body = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a222_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported out of ${new Set(rows.map((r) => String(r.theme))).size} themes.
// ${READ_NOT_IMPORTED.length} rows read and refused; see READ_NOT_IMPORTED in the corpus file.
// 0 respellings repaired, 0 supplied. This build repairs nothing.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION:
//
//   THE PARADIGM EVIDENCE, published sentences per person, excluding this
//   lesson's own rows. The two that prove the pronoun moves are the two the
//   corpus does not have, which is why the paradigm is authored:
//
${evidence}
//
//   THE SHAPE. The corpus stores these verbs FRAMED with se, which settles the
//   ledger question doctrine §E left open:
//     framed  ${framedLine}
//     bare    ${bareLine}
//
//   THE THEMES.  routine ${themeCounts.routine} published · routines ${themeCounts.routines} published
//     The unit declares « routine ». It has no rows and no component reads the
//     declaration. Corpus file §4.
//
//   THE BLOCKS.  fr.a2.verbes holds ${before} rows other than this build's.
//     a2.21's ${A221_BLOCK.from}..${A221_BLOCK.to} holds ${inA221.length}.
//     Rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this build does not own: none.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export const PRONOMINAUX_IMPORT_ROWS: Record<string, Item> = {
${literals}
};

/** What each imported row's respelling said on the day of the read, so a repair
 *  or a drift is visible without another database call. */
export const STORED_RESPELL: Record<string, string | null> = {
${rows.map((r) => `  '${String(r.id)}': ${r.respell === null || r.respell === undefined ? 'null' : JSON.stringify(String(r.respell))},`).join(NL)}
};

/** Published sentences per person, excluding this build's own rows. */
export const CELL_EVIDENCE: Record<string, number> = ${JSON.stringify(cellEvidence, null, 2).split(NL).join(NL)};

export const MEASURED_AT = 'read from Postgres by scripts/_a222_manifest.ts';
export const MEASURED_ROWS = {
  imported: ${rows.length},
  themeRoutine: ${themeCounts.routine},
  themeRoutines: ${themeCounts.routines},
  a221BlockRows: ${inA221.length},
  verbesRowsBefore: ${before},
  framedVerbsFound: ${framedFound},
  bareVerbsFound: ${bareFound},
} as const;
`;

  writeFileSync(OUT, body, 'utf8');

  console.log(`\n  wrote ${OUT}`);
  console.log(`    ${rows.length} rows imported, 0 repaired, ${READ_NOT_IMPORTED.length} read and refused`);
  console.log(`    themes: routine ${themeCounts.routine}, routines ${themeCounts.routines}`);
  console.log(`    fr.a2.verbes: ${before} rows other than this build's; a2.21's block ${inA221.length}`);
  console.log(`    shape: ${framedFound} framed, ${bareFound} bare`);
  console.log('    paradigm evidence:');
  for (const [k, v] of Object.entries(cellEvidence)) console.log(`      ${k.padEnd(20)} ${String(v).padStart(3)}`);
  console.log('');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
