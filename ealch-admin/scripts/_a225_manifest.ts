/* Regenerates data/y-en-rows.gen.ts, the recorded read behind a2.25.
 *
 * TWENTY-FIVE ROWS IMPORTED AND NOT ONE HEADWORD AUTHORED — corrections §2 for
 * the TENTH build running. Seven infinitives, eight respelled phrases and ten
 * published sentences.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * THE SIX-ROW SET. `fr.a2.pronoms-essentiels.028..033` is this lesson's paradigm
 *   already published, and the corpus file's header §1 rests on it. The
 *   generator re-reads all six and refuses if any has moved, because the whole
 *   argument for importing rather than authoring them is that they say what they
 *   say today.
 * THE FRAME CELLS, AS WHOLE SENTENCES. Every authored frame is absent as a whole
 *   sentence. That is the claim the generator refuses on; the substring figure
 *   is what the brief's probe measured and it is weaker.
 * THE CONSTRUCTION, which the brief calls rare and which is not: `j'en`, `n'y`,
 *   `j'y` and `n'en` across every published row.
 * THE il y a POPULATION and how much of it is importable, because the brief
 *   lists that as UNVERIFIED and the answer is that none of it is in this theme.
 * THE RESPELL POPULATION for every divergent word, every published row.
 * THE BROKEN-NASAL SWEEP: every published row carrying an elided y or en
 *   pronoun and a respelling, with the count the real `hasPlainNasalFor` flags.
 *   Four are repaired and the rest are recorded in RESPELL_LEFT_ALONE.
 * THE ROW COUNT, which is the only signal (corrections §10).
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A headword or phrase with no respelling.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A GENDERED row. Not theoretical: « des pommes » (fr.a1.cuisine.259) is the
 *   obvious partitive card and it is feminine, so the refusal is what keeps
 *   « du café » imported instead.
 * A row inside this build's id block that this build does not own.
 * A row carrying TWO OBJECT PRONOUNS other than `y en`, which is §7's decision:
 *   this lesson teaches one order and reserves the rest.
 * A row whose stored respelling is not what RESPELL_REPAIRS says it is.
 *
 *     pnpm tsx scripts/_a225_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  AUTHORED_IDS, FALSE_POSITIVES, ID_FIRST, ID_LAST, IMPORTED, IMPORTED_PHRASES,
  IMPORTED_SENTENCES, RESPELL_REPAIRS, ROWS, THEME, THEME_ROWS_BEFORE,
} from './data/y-en-corpus.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'data', 'y-en-rows.gen.ts');
const NL = '\n';

const FRAME_CELLS = ROWS.map((r) => r.fr);

/** Every word whose published respellings this build inspected. */
const DIVERGENT = ['aller', 'penser', 'jouer', 'vouloir', 'avoir', 'boire', 'prendre'];

/** THE SIX-ROW SET the corpus header rests on, with the string each must still
 *  hold. If one has moved, the header's §1 is no longer true of the database. */
const SIX_ROW_SET: readonly (readonly [string, string])[] = [
  ['fr.a2.pronoms-essentiels.028', "j'y pense"],
  ['fr.a2.pronoms-essentiels.029', 'Je vais à Paris ; j\'y vais en train.'],
  ['fr.a2.pronoms-essentiels.030', 'Tu penses à ton examen ? Oui, j\'y pense souvent.'],
  ['fr.a2.pronoms-essentiels.031', "j'en veux"],
  ['fr.a2.pronoms-essentiels.032', 'Tu veux du café ? Oui, j\'en veux bien.'],
  ['fr.a2.pronoms-essentiels.033', 'Elle a trois frères ; elle en parle souvent.'],
];

/** The pronoun shapes, guarded as the THING and not the letters (§14.4). */
const Y_ELIDED = /(?<![\p{L}\p{N}-])(j|n|m|t|s)['’]y(?![\p{L}\p{N}'’-])/iu;
const EN_ELIDED = /(?<![\p{L}\p{N}-])(j|n|m|t|s|qu)['’]en(?![\p{L}\p{N}'’-])/iu;
const Y_EN = /(?<![\p{L}\p{N}'’-])y\s+en(?![\p{L}\p{N}'’-])/iu;

/** TWO OBJECT PRONOUNS IN ONE CLAUSE. `y en` is DELIBERATELY ABSENT from this
 *  shape: §7 takes option 1 and teaches exactly that one order, so it is the one
 *  pair this lesson is allowed to carry.
 *
 *  `nous` and `vous` are absent from the first set for a2.24's reason: they are
 *  subject and object with the same spelling, so a version holding them fires on
 *  « Nous en prenons. », which carries exactly one pronoun. */
const TWO_PRONOUNS =
  /(?<![\p{L}\p{N}'’-])((le|la|les)\s+(lui|leur)|(me|te|se)\s+(le|la|les|y|en)|(le|la|les|lui|leur)\s+(y|en))(?![\p{L}\p{N}'’-])\s+\p{L}/iu;

const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
/** Corrections §14.3: the house boundary EXCLUDES the apostrophe, so a shape
 *  using it cannot see `j'y`, `j'en` or `n'y` — WHICH IS MOST OF THIS LESSON.
 *  Dropped from the LEFT and kept on the right. */
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

const stripArticle = (s: string) =>
  s.toLowerCase().replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/u, '')
    .replace(/[.,!?;:«»"]/gu, '').trim();

const die = (msg: string): never => { console.error(`\n  REFUSED: ${msg}\n`); process.exit(1); };

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  const c = await pool.connect();

  const headwords = [...IMPORTED, ...IMPORTED_PHRASES];
  const wanted = [...headwords.map((i) => i.id), ...IMPORTED_SENTENCES.map((i) => i.id)];
  if (new Set(wanted).size !== wanted.length) die('an id is imported twice');
  const { rows } = await c.query('select * from content_items where id = any($1) order by id', [wanted]);

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
    if (TWO_PRONOUNS.test(r.fr)) die(`${r.id} « ${r.fr} » carries two object pronouns other than « y en », which §7 reserves`);
  }
  for (const want of headwords) {
    const r = byId.get(want.id)!;
    if (r.fr !== want.fr) die(`${want.id} holds « ${r.fr} » and the corpus file claims « ${want.fr} »`);
    if (!r.respell) die(`${want.id} is a headword or phrase with NO respelling, and a card that prints one would draw an empty bracket`);
  }

  // ── THE SIX-ROW SET, which the whole header rests on ────────────────────
  const sixRow: Record<string, string> = {};
  for (const [id, fr] of SIX_ROW_SET) {
    const { rows: q } = await c.query('select id, fr from content_items where id = $1', [id]);
    if (!q.length) die(`${id} is one of the six consecutive rows the corpus header rests on and it is not published`);
    if (q[0]!.fr !== fr) {
      die(`${id} now holds « ${q[0]!.fr} » and the corpus header quotes « ${fr} ». `
        + 'The six-row find is a measurement of the database and it has moved.');
    }
    sixRow[id] = q[0]!.fr;
  }

  // ── The repair table must still match the database ──────────────────────
  const repairIds = RESPELL_REPAIRS.map((x) => x.id);
  const { rows: repairRows } = await c.query('select id, fr, respell from content_items where id = any($1)', [repairIds]);
  const repairById = new Map(repairRows.map((r) => [r.id as string, r]));
  const repairState: Record<string, string> = {};
  for (const rep of RESPELL_REPAIRS) {
    const r = repairById.get(rep.id);
    if (!r) die(`repair target ${rep.id} does not exist`);
    const stored = (r!.respell ?? '') as string;
    if (stored !== rep.from && stored !== rep.to) {
      die(`${rep.id} holds « ${stored} », and the repair table expects « ${rep.from} » (or the applied « ${rep.to} »)`);
    }
    if (r!.fr !== rep.fr) die(`${rep.id} holds fr « ${r!.fr} » and the repair table says « ${rep.fr} »`);
    repairState[rep.id] = stored;
  }

  // ── The false positives. THERE ARE NONE and §6 asks for the absence ─────
  for (const fp of FALSE_POSITIVES) {
    if (!hasPlainNasalFor(fp.fr, fp.flagged)) die(`${fp.fr}: « ${fp.flagged} » is no longer FLAGGED`);
    if (hasPlainNasalFor(fp.fr, fp.used)) die(`${fp.fr}: the value this lesson uses « ${fp.used} » is FLAGGED`);
  }

  // ── The frame cells, both ways ──────────────────────────────────────────
  const { rows: sentences } = await c.query(
    "select id, fr, theme from content_items where kind='sentence' and status='published'");
  const mine = new Set<string>(AUTHORED_IDS);
  const exact: Record<string, number> = {};
  const substring: Record<string, number> = {};
  for (const cell of FRAME_CELLS) {
    const bare = cell.replace(/\s*[.?!]$/u, '').toLowerCase();
    exact[cell] = sentences.filter((s) => !mine.has(s.id) && s.fr.toLowerCase() === cell.toLowerCase()).length;
    substring[cell] = sentences.filter((s) => !mine.has(s.id) && hasPhrase(s.fr, bare)).length;
  }
  const nonZeroExact = Object.entries(exact).filter(([, v]) => v > 0);
  if (nonZeroExact.length) {
    die(`the corpus file claims every authored frame is absent as a whole sentence, and these exist: ${nonZeroExact.map(([k, v]) => `${k} (${v})`).join(', ')}`);
  }

  // ── THE CONSTRUCTION, which the brief calls rare ────────────────────────
  const { rows: all } = await c.query(
    "select id, fr, theme, respell, gender from content_items where status='published'");
  const CONSTRUCTION = ["j'y", "j'en", "n'y", "n'en", 'il y a', 'il y en a', 'y aller'];
  const construction: Record<string, number> = {};
  for (const p of CONSTRUCTION) {
    construction[p] = all.filter((s) => !mine.has(s.id) && s.fr.toLowerCase().includes(p)).length;
  }
  const pronounRows = all.filter((r) => !mine.has(r.id) && (Y_ELIDED.test(r.fr) || EN_ELIDED.test(r.fr)));

  // ── il y a: how much of it is importable, and how much is in this theme ─
  const ILYA = /(?<![\p{L}\p{N}-])il y a(?![\p{L}\p{N}'’-])/iu;
  const ilya = all.filter((r) => ILYA.test(r.fr));
  const ilyaImportable = ilya.filter((r) => r.respell && !r.gender);
  const ilyaInTheme = ilyaImportable.filter((r) => r.theme === THEME);

  // ── THE BROKEN-NASAL SWEEP ──────────────────────────────────────────────
  const respelled = all.filter((r) => r.respell && (Y_ELIDED.test(r.fr) || EN_ELIDED.test(r.fr) || Y_EN.test(r.fr)));
  const flaggedPronounRows = respelled.filter((r) => hasPlainNasalFor(r.fr, r.respell!));

  // ── The theme: row count, and the duplicate-fr sheet ────────────────────
  const { rows: themeRows } = await c.query(
    "select id, fr from content_items where theme=$1 and status='published'", [THEME]);
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
      "select id, respell from content_items where fr=$1 and respell is not null and status='published' order by id", [w]);
    const m: Record<string, string[]> = {};
    for (const r of wr) m[r.respell] = [...(m[r.respell] ?? []), r.id];
    divergence[w] = m;
  }
  const flaggedByWord: Record<string, number> = {};
  for (const w of DIVERGENT) {
    flaggedByWord[w] = Object.entries(divergence[w]!)
      .filter(([rs]) => hasPlainNasalFor(w, rs))
      .reduce((n, [, ids]) => n + ids.length, 0);
  }

  const body = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a225_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported: ${IMPORTED.length} headwords, ${IMPORTED_PHRASES.length} respelled phrases and
// ${IMPORTED_SENTENCES.length} published sentences, out of ${new Set(rows.map((r) => r.theme)).size} themes. 0 headwords authored.
// ${RESPELL_REPAIRS.length} respellings repaired, ${RESPELL_REPAIRS.filter((r) => r.blind).length} of them BLIND to the checker.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION, ${new Date().toISOString().slice(0, 10)}:
//
//   THE SIX-ROW SET, which the corpus header's §1 rests on and which the
//   generator refuses on if any of them has moved:
//
${SIX_ROW_SET.map(([id, fr]) => `//     ${id.padEnd(30)} « ${fr} »`).join(NL)}
//
//   THE CONSTRUCTION, which the brief calls rare and which is not:
//
${CONSTRUCTION.map((p) => `//     ${p.padEnd(12)} ${String(construction[p]).padStart(4)}`).join(NL)}
//     ${'elided total'.padEnd(12)} ${String(pronounRows.length).padStart(4)}   rows carrying j'y / j'en / n'y / n'en
//
//   il y a. THE BRIEF LISTS ITS USABILITY AS UNVERIFIED:
//
//     ${String(ilya.length).padStart(4)} published rows carry it
//     ${String(ilyaImportable.length).padStart(4)} of those have a respelling and no gender
//     ${String(ilyaInTheme.length).padStart(4)} of those are in ${THEME}
//
//   THE BROKEN-NASAL SWEEP. Every published row carrying an elided y or en
//   pronoun AND a respelling:
//
//     ${String(respelled.length).padStart(4)} rows, ${String(flaggedPronounRows.length).padStart(4)} FLAGGED by the real hasPlainNasalFor
${flaggedPronounRows.map((r) => `//       ${r.id.padEnd(40)} [${r.respell}]`).join(NL)}
//
//   THE FRAME CELLS. Every one is absent as a WHOLE SENTENCE, which is the
//   claim the generator refuses on. The substring column is what the brief's
//   probe measured and it is a weaker statement.
//
${FRAME_CELLS.map((c2) => `//     ${c2.padEnd(32)} exact ${String(exact[c2]).padStart(3)}   as a substring ${String(substring[c2]).padStart(3)}`).join(NL)}
//
//   THE THEME. ${themeRows.length} published rows, ${others.length} of them not this build's.
//   ${preExistingDupes.length} pre-existing duplicate fr groups, computed article-stripped the way
//   flashhub-coverage computes it, and this build adds none.
//
//   THE RESPELL POPULATION, every published row for each word, with the count
//   the real hasPlainNasalFor flags:
//
${DIVERGENT.map((w) => [`//     ${w}   (${flaggedByWord[w]} flagged)`, ...Object.entries(divergence[w]!).map(([rs, ids]) => `//       ${rs.padEnd(18)} ${String(ids.length).padStart(2)}   ${ids.join(' ')}`)].join(NL)).join(NL)}
//
//   THE FALSE POSITIVES. Corrections §6 asks every build to look for the real
//   /n/ false positive and to report the ABSENCE if it finds none. a2.06 found
//   none, a2.24 found two. THIS BUILD FOUND ${FALSE_POSITIVES.length}.

import type { Item } from '../../ealch-v2/src/content/schema.ts';

export const Y_EN_IMPORT_ROWS: Item[] = [
${rows.map((r) => itemLiteral(r)).join(NL)}
];

/** What Postgres held for each repair target when this was generated. The batch
 *  compares it against RESPELL_REPAIRS and refuses on a mismatch, so a repair
 *  table that has drifted from the database cannot silently repair nothing. */
export const STORED_RESPELL: Record<string, string> = ${JSON.stringify(repairState, null, 2)};

/** The six consecutive published rows the corpus header's §1 rests on, as they
 *  read on the day this was generated. */
export const SIX_ROW_SET: Record<string, string> = ${JSON.stringify(sixRow, null, 2)};

/** Whole-sentence counts for each authored frame, excluding this build's rows. */
export const FRAME_EXACT: Record<string, number> = ${JSON.stringify(exact, null, 2)};
/** The same frames counted as substrings, which is what the brief's probe did. */
export const FRAME_SUBSTRING: Record<string, number> = ${JSON.stringify(substring, null, 2)};
/** The CONSTRUCTION, which the brief calls rare. Header §3. */
export const CONSTRUCTION_COUNT: Record<string, number> = ${JSON.stringify(construction, null, 2)};

/** Every published respelling for the seven verbs this build imports. */
export const RESPELL_POPULATION: Record<string, Record<string, string[]>> = ${JSON.stringify(divergence, null, 2)};

/** Every published row carrying an elided y or en pronoun AND a respelling that
 *  the real checker flags. Four are repaired; the rest are in
 *  RESPELL_LEFT_ALONE with the reason. */
export const FLAGGED_PRONOUN_ROWS: readonly string[] = ${JSON.stringify(flaggedPronounRows.map((r) => r.id), null, 2)};

export const MEASURED_AT = 'read from Postgres by scripts/_a225_manifest.ts';
export const MEASURED_ROWS = {
  imported: ${rows.length},
  headwords: ${IMPORTED.length},
  phrases: ${IMPORTED_PHRASES.length},
  sentences: ${IMPORTED_SENTENCES.length},
  themeRowsBefore: ${others.length},
  themeDuplicateGroups: ${preExistingDupes.length},
  repairs: ${RESPELL_REPAIRS.length},
  blindRepairs: ${RESPELL_REPAIRS.filter((r) => r.blind).length},
  falsePositives: ${FALSE_POSITIVES.length},
  framesMeasured: ${FRAME_CELLS.length},
  framesPresentAsWholeSentence: ${nonZeroExact.length},
  elidedPronounRows: ${pronounRows.length},
  respelledPronounRows: ${respelled.length},
  flaggedPronounRows: ${flaggedPronounRows.length},
  ilYaRows: ${ilya.length},
  ilYaImportable: ${ilyaImportable.length},
  ilYaInTheme: ${ilyaInTheme.length},
} as const;
`;

  writeFileSync(OUT, body, 'utf8');

  console.log(`\n  wrote ${OUT}`);
  console.log(`    ${rows.length} rows imported (${IMPORTED.length} headwords, ${IMPORTED_PHRASES.length} phrases, ${IMPORTED_SENTENCES.length} sentences), 0 authored headwords`);
  console.log(`    ${THEME}: ${others.length} rows other than this build's (corpus file claims ${THEME_ROWS_BEFORE})`);
  console.log(`    ${preExistingDupes.length} pre-existing duplicate fr groups, 0 collisions from this build`);
  console.log(`    ${RESPELL_REPAIRS.length} repairs (${RESPELL_REPAIRS.filter((r) => r.blind).length} blind, ${RESPELL_REPAIRS.filter((r) => r.house).length} house), every stored value matched the table`);
  console.log(`    ${FRAME_CELLS.length} frames measured, ${nonZeroExact.length} present as a whole sentence`);
  console.log(`    the six-row set: all six still read as the header quotes them`);
  console.log(`    the construction the brief calls rare: ${pronounRows.length} published rows carry an elided y or en`);
  console.log(`    il y a: ${ilya.length} rows, ${ilyaImportable.length} importable, ${ilyaInTheme.length} in this theme`);
  console.log(`    broken nasals: ${flaggedPronounRows.length} of ${respelled.length} respelled pronoun rows are FLAGGED`);
  console.log('    respell divergence:');
  for (const w of DIVERGENT) {
    console.log(`      ${w.padEnd(10)} ${flaggedByWord[w]} flagged · ${Object.entries(divergence[w]!).map(([rs, ids]) => `${rs} (${ids.length})`).join(' · ')}`);
  }
  console.log('');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
