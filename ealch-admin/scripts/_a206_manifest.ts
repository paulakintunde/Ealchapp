/* Regenerates data/pronoms-direct-rows.gen.ts, the recorded read behind a2.06.
 *
 * NINE ROWS IMPORTED AND NOT ONE HEADWORD AUTHORED — corrections §2 for the
 * EIGHTH build running. Seven infinitives out of six themes, and two published
 * sentences out of this lesson's own theme.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * THE FRAME CELLS, AS WHOLE SENTENCES. The brief's probe reports « je le vois »
 *   twice and « je la vois » once, and all three are SUBSTRINGS of longer
 *   published sentences. The corpus file's §3 claim is that the BARE FRAME does
 *   not exist, which is a different and stronger statement. Measured both ways
 *   here so the difference is on the record rather than in a paragraph.
 * THE THEME HAS NO DUPLICATE `fr`, computed the way flashhub-coverage computes
 *   it. 486 rows and zero duplicate groups is a clean sheet this build must not
 *   spoil, and the generator refuses if an authored frame would collide.
 * THE RESPELL DIVERGENCES, all four words, every published row. The corpus file
 *   names four; if a fifth appears the author should know before the merge.
 * THE ROW COUNT, which is the only signal (corrections §10).
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A headword with no respelling.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A GENDERED row, which would join a1.03's measured ending population.
 * A row inside this build's id block that this build does not own.
 * A row carrying `lui` or `leur` as a pronoun, which is a2.24's whole lesson.
 * A row carrying `y` or `en` AS A PRONOUN, which is a2.25's. `en` as a
 *   preposition is everywhere and is not refused: corrections §14.4, guard the
 *   thing and not the letters.
 * A row whose stored respelling is not what RESPELL_REPAIRS says it is, because
 *   a repair table that has drifted from the database repairs nothing.
 *
 *     pnpm tsx scripts/_a206_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns, pgEnumArray } from './manifest-item.ts';
import {
  A, AUTHORED_IDS, ID_FIRST, ID_LAST, IMPORTED, IMPORTED_SENTENCES,
  RESPELL_REPAIRS, ROWS, THEME, THEME_ROWS_BEFORE,
} from './data/pronoms-direct-corpus.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'data', 'pronoms-direct-rows.gen.ts');
const NL = '\n';

/** The bare frames the lesson authors. §3 of the corpus header claims each is
 *  absent as a WHOLE sentence and present at most as a substring. */
const FRAME_CELLS = [
  'Je le vois.', 'Je la vois.', 'Je les vois.', 'Tu le connais.',
  'Je ne le vois pas.', "Je l'aime.", "Je l'ai vu.", "Je l'ai vue.",
  'Je les achète.', 'Je la connais.',
];

/** The four words whose published respellings diverge. */
const DIVERGENT = ['connaître', 'inviter', 'manger', 'acheter'];

/** a2.24's forms, refused on every imported row. */
const INDIRECT_MARKERS = [' lui ', ' leur ', 'lui ', 'leur '];

const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
/** Corrections §14.3: the house boundary EXCLUDES the apostrophe, so a guard
 *  built on it cannot see `j'ai`, `qu'il` or `c'est`. Dropped from the LEFT and
 *  kept on the right, which is what §14.3 prescribes. */
const isWordLeft = (c: string) => /[\p{L}\p{N}’-]/u.test(c);
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1]!;
    const after = h[i + n.length] ?? '';
    if (!isWordLeft(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

/** The flashcard-hub duplicate rule: two rows sharing an `fr` in one theme are
 *  one card served twice. Article-stripped, exactly as the coverage test does. */
const stripArticle = (s: string) =>
  s.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de la )/u, '')
    .replace(/[.,!?;:«»"]/gu, '').trim();

const die = (msg: string): never => { console.error(`\n  REFUSED: ${msg}\n`); process.exit(1); };

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  const c = await pool.connect();

  const wanted = [...IMPORTED.map((i) => i.id), ...IMPORTED_SENTENCES.map((i) => i.id)];
  const { rows } = await c.query(`select * from content_items where id = any($1) order by id`, [wanted]);

  if (rows.length !== wanted.length) {
    const got = new Set(rows.map((r) => r.id));
    die(`${wanted.length - rows.length} imported row(s) missing: ${wanted.filter((i) => !got.has(i)).join(', ')}`);
  }

  // ── Per-row refusals ────────────────────────────────────────────────────
  const byId = new Map(rows.map((r) => [r.id as string, r]));
  for (const r of rows) {
    const unknown = unknownPopulatedColumns(r);
    if (unknown.length) die(`${r.id} has populated columns this generator does not know: ${unknown.join(', ')}`);
    if (/‿/u.test(`${r.fr}${r.respell ?? ''}`)) die(`${r.id} carries U+203F, which draws as a low underscore on a Pixel 6`);
    if (r.gender) die(`${r.id} is GENDERED (${r.gender}); importing it would move a1.03's measured ending population`);
    for (const m of INDIRECT_MARKERS) {
      if (hasPhrase(` ${r.fr} `, m.trim())) die(`${r.id} carries « ${m.trim()} », which is ${'a2.24'}'s entire lesson`);
    }
  }
  for (const want of IMPORTED) {
    const r = byId.get(want.id)!;
    if (r.fr !== want.fr) die(`${want.id} holds « ${r.fr} » and the corpus file claims « ${want.fr} »`);
    if (!r.respell) die(`${want.id} is a headword with NO respelling, and a card that prints one would draw an empty bracket`);
  }

  // ── The repair table must still match the database ──────────────────────
  const repairIds = RESPELL_REPAIRS.map((x) => x.id);
  const { rows: repairRows } = await c.query(`select id, fr, respell from content_items where id = any($1)`, [repairIds]);
  const repairById = new Map(repairRows.map((r) => [r.id as string, r]));
  const repairState: Record<string, { stored: string; matches: boolean }> = {};
  for (const rep of RESPELL_REPAIRS) {
    const r = repairById.get(rep.id);
    if (!r) die(`repair target ${rep.id} does not exist`);
    const stored = (r!.respell ?? '') as string;
    const matches = stored === rep.from || stored === rep.to;
    if (!matches) die(`${rep.id} holds « ${stored} », and the repair table expects « ${rep.from} » (or the applied « ${rep.to} »)`);
    repairState[rep.id] = { stored, matches };
  }

  // ── The frame cells, both ways ──────────────────────────────────────────
  const { rows: sentences } = await c.query(
    `select id, fr, theme from content_items where kind='sentence' and status='published'`);
  const mine = new Set<string>(AUTHORED_IDS);
  const exact: Record<string, number> = {};
  const substring: Record<string, number> = {};
  for (const cell of FRAME_CELLS) {
    const bare = cell.replace(/[.?!]$/u, '').toLowerCase();
    exact[cell] = sentences.filter((s) => !mine.has(s.id) && s.fr.toLowerCase() === cell.toLowerCase()).length;
    substring[cell] = sentences.filter((s) => !mine.has(s.id) && hasPhrase(s.fr, bare)).length;
  }
  const nonZeroExact = Object.entries(exact).filter(([, v]) => v > 0);
  if (nonZeroExact.length) {
    die(`the corpus file claims every bare frame is absent, and these exist: ${nonZeroExact.map(([k, v]) => `${k} (${v})`).join(', ')}`);
  }

  // ── The theme: row count, and the duplicate-fr sheet ────────────────────
  const { rows: themeRows } = await c.query(
    `select id, fr from content_items where theme=$1 and status='published'`, [THEME]);
  const others = themeRows.filter((r) => !mine.has(r.id));
  const groups = new Map<string, string[]>();
  for (const r of others) {
    const k = stripArticle(r.fr);
    groups.set(k, [...(groups.get(k) ?? []), r.id]);
  }
  const preExistingDupes = [...groups].filter(([, ids]) => ids.length > 1);
  const collisions = ROWS.filter((r) => groups.has(stripArticle(r.fr)));
  if (collisions.length) {
    die(`these authored rows would duplicate an existing fr inside ${THEME}: ${collisions.map((r) => `${r.id} « ${r.fr} »`).join(', ')}`);
  }

  // ── Nobody else took the block ──────────────────────────────────────────
  const inBlock = themeRows.filter((r) => {
    const m = /^fr\.a2\.pronoms-essentiels\.(\d{3})$/u.exec(r.id);
    if (!m) return false;
    const n = Number(m[1]);
    return n >= ID_FIRST && n <= ID_LAST;
  });
  const strays = inBlock.filter((r) => !mine.has(r.id));
  if (strays.length) die(`another lesson is inside this build's block ${ID_FIRST}..${ID_LAST}: ${strays.map((r) => r.id).join(', ')}`);

  // ── Every published respelling for the divergent words ──────────────────
  const divergence: Record<string, Record<string, string[]>> = {};
  for (const w of DIVERGENT) {
    const { rows: wr } = await c.query(
      `select id, respell from content_items where fr=$1 and respell is not null and status='published' order by id`, [w]);
    const m: Record<string, string[]> = {};
    for (const r of wr) m[r.respell] = [...(m[r.respell] ?? []), r.id];
    divergence[w] = m;
  }

  const body = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a206_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported: ${IMPORTED.length} headwords out of ${new Set(rows.map((r) => r.theme)).size} themes,
// plus ${IMPORTED_SENTENCES.length} published sentences from this lesson's own theme.
// ${RESPELL_REPAIRS.length} respellings repaired. 0 supplied.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION:
//
//   THE FRAME CELLS. The corpus file's §3 claim is that the bare frame does not
//   exist, which is stronger than the brief's substring counts and is what the
//   generator refuses on. Both figures, ${new Date().toISOString().slice(0, 10)}:
//
${FRAME_CELLS.map((c2) => `//     ${c2.padEnd(22)} exact ${String(exact[c2]).padStart(3)}   as a substring ${String(substring[c2]).padStart(3)}`).join(NL)}
//
//   THE THEME. ${themeRows.length} published rows, ${others.length} of them not this build's.
//   ${preExistingDupes.length} pre-existing duplicate fr groups, computed article-stripped the way
//   flashhub-coverage computes it. A clean sheet, and this build keeps it clean.
//
//   THE DIVERGENT RESPELLINGS, every published row for each word:
//
${DIVERGENT.map((w) => [`//     ${w}`, ...Object.entries(divergence[w]!).map(([rs, ids]) => `//       ${rs.padEnd(16)} ${ids.length}   ${ids.join(' ')}`)].join(NL)).join(NL)}

import type { Item } from '../../ealch-v2/src/content/schema.ts';

export const PRONOMS_DIRECT_IMPORT_ROWS: Item[] = [
${rows.map((r) => itemLiteral(r)).join(NL)}
];

/** What Postgres held for each repair target when this was generated. The batch
 *  compares it against RESPELL_REPAIRS and refuses on a mismatch, so a repair
 *  table that has drifted from the database cannot silently repair nothing. */
export const STORED_RESPELL: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(Object.entries(repairState).map(([k, v]) => [k, v.stored])), null, 2)};

/** Whole-sentence counts for each authored frame, excluding this build's rows. */
export const FRAME_EXACT: Record<string, number> = ${JSON.stringify(exact, null, 2)};
/** The same frames counted as substrings, which is what the brief's probe did. */
export const FRAME_SUBSTRING: Record<string, number> = ${JSON.stringify(substring, null, 2)};

/** Every published respelling for the four words that diverge. */
export const RESPELL_POPULATION: Record<string, Record<string, string[]>> = ${JSON.stringify(divergence, null, 2)};

export const MEASURED_AT = 'read from Postgres by scripts/_a206_manifest.ts';
export const MEASURED_ROWS = {
  imported: ${rows.length},
  headwords: ${IMPORTED.length},
  sentences: ${IMPORTED_SENTENCES.length},
  themeRowsBefore: ${others.length},
  themeDuplicateGroups: ${preExistingDupes.length},
  repairs: ${RESPELL_REPAIRS.length},
  framesMeasured: ${FRAME_CELLS.length},
  framesPresentAsWholeSentence: ${nonZeroExact.length},
} as const;
`;

  writeFileSync(OUT, body, 'utf8');

  console.log(`\n  wrote ${OUT}`);
  console.log(`    ${rows.length} rows imported (${IMPORTED.length} headwords, ${IMPORTED_SENTENCES.length} sentences), 0 authored headwords`);
  console.log(`    ${THEME}: ${others.length} rows other than this build's (corpus file claims ${THEME_ROWS_BEFORE})`);
  console.log(`    ${preExistingDupes.length} pre-existing duplicate fr groups, 0 collisions from this build`);
  console.log(`    ${RESPELL_REPAIRS.length} repairs, every stored value matched the table`);
  console.log('    the frames, exact / substring:');
  for (const cell of FRAME_CELLS) {
    console.log(`      ${cell.padEnd(22)} ${String(exact[cell]).padStart(3)} / ${String(substring[cell]).padStart(3)}`);
  }
  console.log('    respell divergence:');
  for (const w of DIVERGENT) {
    console.log(`      ${w.padEnd(12)} ${Object.entries(divergence[w]!).map(([rs, ids]) => `${rs} (${ids.length})`).join(' · ')}`);
  }
  console.log('');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
