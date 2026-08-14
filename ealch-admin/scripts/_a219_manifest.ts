/* Regenerates data/futur-proche-rows.gen.ts, the recorded read behind a2.19.
 *
 * SEVENTEEN ROWS IMPORTED, AND NOT ONE HEADWORD AUTHORED, which is corrections
 * §2 holding for the twelfth build in a row. What is new is the other half:
 * ELEVEN PUBLISHED SENTENCES ALREADY PUT `ne ... pas` ROUND A CONJUGATED aller
 * WITH AN INFINITIVE BEHIND IT, AND NOT ONE OF THEM CARRIES A RESPELLING.
 * Corrections §3 says the corpus has forms and no minimal pairs; a2.18 found the
 * first counterexample and this is the second, and a2.13 §1 is the half that
 * holds — a row without a respelling reaches a card the learner cannot say, so
 * the importable pool was not eleven but zero until this build supplied four.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * The published negatives, counted, and how many carry a respelling. The whole
 *   shape of this build rests on that second number being zero.
 * `aller` plus an infinitive, counted against the ones with a respelling, which
 *   is a2.13 §1 in this lesson's own subject: 721 sentences and 10 cards.
 * The one-word future, counted. The lesson names it and refuses to conjugate
 *   it, and the reason it has to be named is that the learner will meet it.
 * a2.02's paradigm, still six consecutive published rows in one frame, because
 *   the trap is built out of them.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A row with NO respelling, UNLESS the corpus declares an addition for it.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A row inside this build's id block that this build does not own.
 * A GENDERED row. a2.04's ledger amendment §0: a1.03's ending population is
 *   measured off the SEED and a CARRY is what puts a row there.
 * A row in `negation-et-restriction` being AUTHORED rather than imported.
 * A row whose respelling was READ OFF for an addition and no longer holds it.
 *
 *     pnpm tsx scripts/_a219_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  ALL_REPAIRS, AUTHORED_IDS, EXPECTED_IMPORTED, ID_BLOCK, IMPORTED,
  NOT_REPAIRED, OTHER_FUTURE_ROWS, READ_NOT_IMPORTED, RESPELL_ADDITIONS,
  ROW_COUNT_BEFORE, isMine,
} from './data/futur-proche-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/futur-proche-rows.gen.ts');

const TIE = '‿';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

/** `aller` conjugated, then an infinitive. Postgres `~*` with `\y`, never a
 *  JavaScript `\b`: invariants §0, and a2.17 §9 measured a JS boundary
 *  undercounting the same kind of query by four. */
const FP = "\\y(vais|vas|va|allons|allez|vont) +(pas +)?[a-zà-ÿ]{3,}(er|ir|re|oir)\\y";
const FP_NEG = "(\\y|'')(ne|n'') +(vais|vas|va|allons|allez|vont) +pas +[a-zà-ÿ]{3,}(er|ir|re|oir)\\y";
const FUTUR_SIMPLE = "\\y[a-zà-ÿ]{3,}(erai|eras|erez|erons|eront|irai|iras|irez|irons|iront)\\y";

/** EVERY MEASUREMENT EXCLUDES THIS LESSON'S OWN ROWS. a2.17 §9: after its first
 *  apply its placement figure went 80 to 87, because its own sentences matched
 *  the pattern it was measuring. This lesson authors TWENTY-NINE sentences that
 *  match FP, so without the exclusion the printed figure would grow by
 *  twenty-nine on every re-apply and the card would be quoting the lesson back
 *  to itself. */
const NOT_MINE = `and id <> all('{${AUTHORED_IDS.join(',')}}')`;

async function main() {
  const c = await pool.connect();

  const ids = IMPORTED.map((i) => i.id);
  if (ids.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${ids.length} rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
  if (new Set(ids).size !== ids.length) die('IMPORTED holds a duplicate id.');

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
    if (!r.respell && !additions.has(id)) die(`${id} has no respelling and no RESPELL_ADDITIONS entry. A row is imported for its respelling.`);
    if (String(r.respell ?? '').includes(TIE)) die(`${id} carries U+203F in its respelling and it draws as an underscore on a phone.`);
    if (r.status !== 'published') die(`${id} is ${String(r.status)} rather than published.`);
    if (isMine(id)) die(`${id} is inside this build's id block and is being imported rather than authored.`);
    if (r.gender) die(`${id} carries gender="${String(r.gender)}". A gendered single-word row joins a1.03's ending population when the merge CARRIES it into the seed (a2.04 ledger §0), and nothing in this lesson needs one.`);
  }

  // ── THIS BUILD REPAIRS NOTHING, AND THE CLAIM HAS TO BE ABLE TO FAIL ──────
  if (ALL_REPAIRS.length !== 0) die(`ALL_REPAIRS holds ${ALL_REPAIRS.length} entries and this build claims to repair nothing.`);

  // ── The additions: the row must still have NO respelling of its own ───────
  for (const a of RESPELL_ADDITIONS) {
    const hit = rows.find((r) => String(r.id) === a.id);
    if (!hit) die(`${a.id} is a RESPELL_ADDITIONS target and is not imported.`);
    const rowA = hit!;
    const stored = String(rowA.respell ?? '');
    if (stored && stored !== a.to) {
      die(`${a.id} now holds a respelling of its own, "${stored}", and this build was going to supply "${a.to}". Somebody has written one; read it before overwriting it.`);
    }
    if (rowA.fr !== a.fr) die(`${a.id} says fr="${String(rowA.fr)}" and the addition claims "${a.fr}".`);
    // EVERY SYLLABLE WAS READ OFF A PUBLISHED ROW, AND THE ROW MUST STILL SAY SO.
    for (const src of a.readOff) {
      const q = await c.query('select respell from content_items where id = $1', [src]);
      if (!q.rowCount) die(`${a.id} was read off ${src} and that row does not exist.`);
      const v = String((q.rows[0] as Record<string, string>).respell ?? '');
      if (!v) die(`${a.id} was read off ${src} and that row has no respelling any more.`);
    }
  }

  // ── NOT_REPAIRED must still be broken, or somebody has fixed it ───────────
  const nr = await c.query('select id, respell from content_items where id = any($1)', [NOT_REPAIRED.map((x) => x.id)]);
  const stillBroken = NOT_REPAIRED.filter((x) =>
    (nr.rows as Record<string, string>[]).some((r) => r.id === x.id && r.respell === x.respell)).map((x) => x.id);

  // ── THE MEASUREMENT: the published negatives, and their respellings ───────
  const neg = await c.query(
    `select count(*)::int as n,
            count(*) filter (where respell is not null and respell <> '')::int as respelled
       from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [FP_NEG]);
  if (Number(neg.rows[0].respelled) > RESPELL_ADDITIONS.length) {
    die(`${neg.rows[0].respelled} published negatives now carry a respelling and this build supplies ${RESPELL_ADDITIONS.length}. `
      + 'The whole shape of this lesson rests on the corpus having published the sentence and never the card; somebody has written one.');
  }

  const negRows = await c.query(
    `select id, theme, fr, respell from content_items
      where status='published' ${NOT_MINE} and fr ~* $1 order by id`, [FP_NEG]);

  // ── THE MEASUREMENT: evidence against cards (a2.13 §1) ────────────────────
  const fp = await c.query(
    `select count(*)::int as total,
            count(*) filter (where respell is not null and respell <> '')::int as respelled
       from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [FP]);
  if (Number(fp.rows[0].total) < 100) {
    die(`only ${fp.rows[0].total} published sentences hold aller plus an infinitive and this lesson was built on hundreds.`);
  }

  // ── THE MEASUREMENT: the one-word future the lesson names and refuses ─────
  const fs = await c.query(
    `select count(*)::int as n from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [FUTUR_SIMPLE]);
  if (Number(fs.rows[0].n) === 0) {
    die('no published sentence holds a one-word future, and this lesson tells the learner they will meet it.');
  }

  // ── a2.02's PARADIGM: still six consecutive published rows in one frame ───
  const par = await c.query(
    `select id, fr, respell from content_items
      where id like 'fr.a2.verbes.%' and split_part(id,'.',4)::int between 261 and 266
        and status='published' order by id`);
  if (par.rowCount !== 6) die(`fr.a2.verbes.261..266 is a2.02's aller paradigm and the trap is built on it; it now holds ${par.rowCount} published rows.`);
  const frames = new Set((par.rows as Record<string, string>[]).map((r) => r.fr.replace(/^\S+\s+\S+\s+/, '')));
  if (frames.size !== 1) die(`a2.02's six rows no longer share one frame: ${[...frames].join(' | ')}`);

  // ── The block ────────────────────────────────────────────────────────────
  const inBlock = await c.query("select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const mine = new Set(AUTHORED_IDS);
  const foreign = (inBlock.rows as Record<string, string>[])
    .map((r) => r.id).filter((id) => isMine(id) && !mine.has(id));
  if (foreign.length) die(`rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this build does not own: ${foreign.join(', ')}`);
  const now = inBlock.rowCount ?? 0;

  const themes = new Set(rows.map((r) => String(r.theme)));

  const header = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a219_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported out of ${themes.size} themes.
// ${READ_NOT_IMPORTED.length} rows read and refused; see READ_NOT_IMPORTED in the corpus file.
// ${ALL_REPAIRS.length} respellings repaired, ${RESPELL_ADDITIONS.length} supplied.
// ${NOT_REPAIRED.length} rows found broken and left alone; ${stillBroken.length} of them still are.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION:
//
//   the published negatives   ${negRows.rowCount} sentences put ne...pas round aller with an
//                             infinitive behind it, and ${neg.rows[0].respelled} of them carry a respelling
${(negRows.rows as Record<string, string>[]).map((r) => `//     ${r.id.padEnd(38)} ${r.respell ? `[${r.respell}]` : 'NO RESPELLING'}`).join('\n')}
//
//   aller + infinitive        ${fp.rows[0].total} published sentences, ${fp.rows[0].respelled} with a respelling
//                             a2.13 §1: evidence is not cards, and the pool was ${fp.rows[0].respelled} not ${fp.rows[0].total}
//
//   the one-word future       ${fs.rows[0].n} published sentences already hold one
//                             (the corpus file records ${OTHER_FUTURE_ROWS})
//
//   a2.02's paradigm, still six consecutive published rows in one frame:
${(par.rows as Record<string, string>[]).map((r) => `//     ${r.id}  ${r.fr.padEnd(22)} ${r.respell}`).join('\n')}
//
// THE BLOCK: fr.a2.verbes held ${ROW_COUNT_BEFORE} rows before this build and holds
// ${now} now. Rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this
// build does not own: ${foreign.length === 0 ? 'none' : foreign.join(', ')}.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export const FUTUR_PROCHE_ROWS: Record<string, Item> = {
`;

  const body = rows.map((r) => `  '${String(r.id)}': ${itemLiteral(r)}`).join('\n');

  const footer = `
};

/** What the database said, so a guard can compare a supplied value against the
 *  READ rather than against a second copy of the same string. a2.14 §5. An
 *  empty string is a row that had no respelling at all. */
export const STORED_RESPELL: Record<string, string> = {
${rows.map((r) => `  '${String(r.id)}': ${JSON.stringify(String(r.respell ?? ''))},`).join('\n')}
};

/** Re-measured on every regeneration. A figure the lesson prints comes from
 *  here rather than from a constant somebody typed. */
export const MEASURED = {
  publishedNegatives: ${negRows.rowCount},
  publishedNegativesRespelled: ${neg.rows[0].respelled},
  allerPlusInfinitive: ${fp.rows[0].total},
  allerPlusInfinitiveRespelled: ${fp.rows[0].respelled},
  oneWordFutureRows: ${fs.rows[0].n},
  blockCountAtRead: ${now},
} as const;
`;

  writeFileSync(OUT, header + body + footer, 'utf8');
  console.log(`wrote ${OUT}`);
  console.log(`  ${rows.length} rows, ${themes.size} themes`);
  console.log(`  published negatives: ${negRows.rowCount}, respelled ${neg.rows[0].respelled}, supplied by this build ${RESPELL_ADDITIONS.length}`);
  console.log(`  aller + infinitive: ${fp.rows[0].total} sentences, ${fp.rows[0].respelled} cards`);
  console.log(`  one-word future: ${fs.rows[0].n} published rows (corpus file says ${OTHER_FUTURE_ROWS})`);
  console.log(`  fr.a2.verbes: ${now} rows (was ${ROW_COUNT_BEFORE} before this build)`);
  console.log(`  NOT_REPAIRED still broken: ${stillBroken.length}/${NOT_REPAIRED.length}`);

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
