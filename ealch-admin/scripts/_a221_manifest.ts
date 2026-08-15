/* Regenerates data/passe-compose-etre-rows.gen.ts, the recorded read behind a2.21.
 *
 * TWENTY-TWO ROWS IMPORTED, NOT ONE INFINITIVE AUTHORED, AND NOT ONE PAST FORM
 * AUTHORED EITHER — the split a2.05 settled, a2.20 agreed, and this build
 * inherits. See §1 of data/passe-compose-etre-corpus.ts.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * THE SPLIT, over THIS lesson's own AGREED cells rather than a2.20's bare forms:
 *   fifty-six cells across fifteen verbs, and none of them may exist as a
 *   headword anywhere. An agreed cell is further from a corpus item than a bare
 *   form and the figure should be zero rather than merely small.
 * THE TRANSITIVE SPLIT, verb by verb: a form of avoir in front of any of the
 *   four cells against a form of être. This is the measurement the largest
 *   judgement call in the lesson rests on, and three of the six are ZERO.
 * THE PARADIGM EVIDENCE: how many published sentences put être in front of an
 *   agreed form, and how many of those carry a respelling. The second figure is
 *   ZERO and it is why the whole paradigm is authored.
 * THE PER-CELL EVIDENCE for the four cells of aller, which the lesson prints.
 * a2.20's block, which must still hold exactly its own forty-three rows, and
 *   a2.05's, which must still hold thirty-six.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A row with NO respelling, unless the corpus declares an addition for it.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A GENDERED row. a2.04's ledger amendment §0; this lesson refused two.
 * A row inside this build's id block that this build does not own, and any row
 *   at all inside a2.20's or a2.05's block.
 * A REFLEXIVE row, because a2.22 and a2.23 own those and a stray import is how
 *   one would reach a screen.
 * An agreed cell existing as a headword, which would reopen the split.
 * A repair target whose stored value is no longer the one being repaired.
 *
 *     pnpm tsx scripts/_a221_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  A205_BLOCK, A220_BLOCK, ALL_REPAIRS, AUTHORED_IDS, ETRE_VERBS,
  EXPECTED_IMPORTED, ID_BLOCK, IMPORTED, IMPORTED_IDS, NOT_REPAIRED,
  PARADIGM_EVIDENCE, PARTICIPLE_DECISION, READ_NOT_IMPORTED, REFLEXIVE_VERBS,
  RESPELL_ADDITIONS, ROW_COUNT_BEFORE, TRANSITIVE, isA205, isA220, isMine,
} from './data/passe-compose-etre-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/passe-compose-etre-rows.gen.ts');

const TIE = '‿';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

/* Postgres `~*` with a bracket class, never a JavaScript `\b` (invariants §0).
 * SINGLE apostrophes throughout: a2.05 §1 found that a doubled one passed as a
 * PARAMETER survives as two characters and makes an elided alternation dead. */

const ETRE_AUX = '(suis|es|est|sommes|êtes|sont)';
const AVOIR_AUX = '(ai|as|a|avons|avez|ont)';

/** THE WHOLE PATTERN IS BUILT IN JAVASCRIPT AND PASSED AS A PARAMETER, never
 *  embedded in a single-quoted SQL literal. a2.05 §1: a2.19's generator wrote
 *  `(ne|n'')` INSIDE a literal and passed it as a parameter, so the `''`
 *  survived as two apostrophes and the elided half could never match. The
 *  apostrophes below reach Postgres as themselves because pg parameterises. */
const afterEtre = (alt: string): string =>
  `(^|[^[:alpha:]])${ETRE_AUX} +(${alt})([^[:alpha:]]|$)`;
const afterAvoir = (alt: string): string =>
  `((^|[^[:alpha:]])${AVOIR_AUX}|j'ai|n'ai|qu'il a|qu'elle a|qu'ils ont) +(${alt})([^[:alpha:]]|$)`;

/** EVERY MEASUREMENT EXCLUDES THIS LESSON'S OWN ROWS. a2.17 §9: after the first
 *  apply a lesson's own sentences match the pattern it is measuring, and the
 *  printed figure grows on every re-apply. */
const NOT_MINE = `and id <> all('{${AUTHORED_IDS.join(',')}}')`;

const ALL_CELLS = ETRE_VERBS.flatMap((v) => v.cells);

/** A newline, as a constant, so a `.join()` inside the header template literal
 *  does not have to carry an escape through two layers of quoting. */
const NL = '\n';

async function main() {
  const c = await pool.connect();

  const ids = [...IMPORTED_IDS];
  if (new Set(ids).size !== ids.length) die('IMPORTED holds a duplicate id.');
  if (ids.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${ids.length} rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);

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
    if (isA220(id)) die(`${id} is inside a2.20's block (${A220_BLOCK.from}..${A220_BLOCK.to}).`);
    if (isA205(id)) die(`${id} is inside a2.05's block (${A205_BLOCK.from}..${A205_BLOCK.to}).`);
    if (r.gender) die(`${id} carries gender="${String(r.gender)}". A gendered single-word row joins a1.03's ending population when the merge CARRIES it (a2.04 ledger §0). This build refused two for exactly this; see READ_NOT_IMPORTED.`);
    if (REFLEXIVE_VERBS.includes(String(r.fr))) die(`${id} is « ${String(r.fr)} », a reflexive verb. a2.22 and a2.23 own those and this lesson may not show one.`);
  }

  // ── THE TWO REPAIRS: the stored value must still be the one being repaired ──
  for (const rp of ALL_REPAIRS) {
    const hit = rows.find((r) => String(r.id) === rp.id);
    if (!hit) die(`${rp.id} is a REPAIRS target and is not imported.`);
    const stored = String(hit!.respell ?? '');
    if (stored !== rp.from && stored !== rp.to) {
      die(`${rp.id} holds "${stored}" and this build was going to repair "${rp.from}" to "${rp.to}". Somebody has changed it; read it before overwriting it.`);
    }
    if (rp.readOff) {
      const q = await c.query('select respell from content_items where id = $1', [rp.readOff]);
      if (!q.rowCount) die(`${rp.id} was read off ${rp.readOff} and that row does not exist.`);
      const v = String((q.rows[0] as Record<string, string>).respell ?? '');
      if (rp.readOffToken && !v.includes(rp.readOffToken)) {
        die(`${rp.id} was read off ${rp.readOff}, which no longer holds "${rp.readOffToken}" (it holds "${v}").`);
      }
    }
  }

  // ── NOT_REPAIRED must still be broken, or somebody has fixed it ───────────
  const nr = await c.query('select id, respell from content_items where id = any($1)', [NOT_REPAIRED.map((x) => x.id)]);
  const stillBroken = NOT_REPAIRED.filter((x) =>
    (nr.rows as Record<string, string>[]).some((r) => r.id === x.id && r.respell === x.respell)).map((x) => x.id);

  // ══ THE SPLIT: NO AGREED CELL MAY BE A HEADWORD ══════════════════════════
  const cellHeadwords = await c.query(
    `select id, fr, en from content_items where kind='word' and fr = any($1) and fr !~ ' ' ${NOT_MINE} order by fr, id`,
    [ALL_CELLS],
  );
  const cellRows = cellHeadwords.rows as Record<string, string>[];
  // `mort` is published as an ordinary describing word and this build imports it
  // deliberately; it is a word in its own right rather than a past form on a
  // card. Every OTHER cell must be absent.
  const unexpected = cellRows.filter((r) => r.fr !== 'mort');
  if (unexpected.length !== PARTICIPLE_DECISION.agreedCellsAsHeadwords) {
    die(`${unexpected.length} agreed cells exist as headwords: `
      + `${unexpected.map((r) => `${r.fr} (${r.id})`).join(', ')}. `
      + 'The split a2.05 settled and a2.20 agreed rests on there being none.');
  }

  // ══ THE TRANSITIVE SPLIT, RE-MEASURED VERB BY VERB ═══════════════════════
  const transitive: Record<string, { avoir: number; etre: number }> = {};
  for (const t of TRANSITIVE) {
    const v = ETRE_VERBS.find((x) => x.verb === t.verb)!;
    const alt = v.cells.join('|');
    const av = await c.query(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`,
      [afterAvoir(alt)],
    );
    const et = await c.query(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`,
      [afterEtre(alt)],
    );
    transitive[t.verb] = {
      avoir: Number((av.rows[0] as Record<string, number>).n),
      etre: Number((et.rows[0] as Record<string, number>).n),
    };
  }
  const zero = TRANSITIVE.filter((t) => transitive[t.verb]!.avoir === 0).map((t) => t.verb);
  if (zero.length < 3) {
    die(`only ${zero.length} of the six transitive candidates now have ZERO published uses with avoir (${zero.join(', ') || 'none'}). `
      + 'The decision to show the split receptively rather than teach it rests on three of six being empty. Re-read §6 before authoring around this.');
  }
  const passer = transitive.passer!;
  if (passer.avoir < passer.etre) {
    die(`passer now has ${passer.avoir} published rows with avoir against ${passer.etre} with être. `
      + 'This build shows it as the one verb whose transitive use is the MAJORITY use, and that is no longer true.');
  }

  // ══ THE PARADIGM EVIDENCE, AND a2.13 §1 ══════════════════════════════════
  const anyCell = ALL_CELLS.join('|');
  const withEtre = await c.query(
    `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`,
    [afterEtre(anyCell)],
  );
  const withEtreRespelled = await c.query(
    `select id, fr, respell from content_items where status='published' ${NOT_MINE}
       and respell is not null and respell <> '' and level in ('a1','a2')
       and fr ~* $1 order by id`,
    [afterEtre(anyCell)],
  );
  const evidenceTotal = Number((withEtre.rows[0] as Record<string, number>).n);
  const cards = withEtreRespelled.rowCount ?? 0;
  if (evidenceTotal < 200) {
    die(`only ${evidenceTotal} published sentences put être in front of an agreed form, and the lesson prints a figure above two hundred.`);
  }
  /* THE FIGURE THAT DECIDED THE BUILD IS NOT `cards`. Four rows are a1/a2 and
     respelled, and none of the four shows an ENDING: two are idioms with no past
     tense in them and two are a2.20's masculine-singular venu and né. What has
     to stay empty is the set of cards showing a second word with an ending on
     it, because that is what this lesson would otherwise import instead of
     authoring. a2.13 §1. */
  const AGREED_ONLY = ETRE_VERBS.flatMap((v) => v.cells.slice(1));
  const showEnding = (withEtreRespelled.rows as Record<string, string>[]).filter((r) =>
    AGREED_ONLY.some((cell) => new RegExp(`(^|[^\\p{L}])${cell}([^\\p{L}]|$)`, 'iu').test(String(r.fr))));
  if (showEnding.length > PARADIGM_EVIDENCE.cardsShowingAnEnding) {
    die(`${showEnding.length} published a1/a2 cards now show a second word WITH AN ENDING after être: `
      + `${showEnding.map((r) => `${r.id} « ${r.fr} »`).join(', ')}. `
      + 'This build measured zero, and the decision to author the whole paradigm rests on that pool being empty. Read them before authoring around them.');
  }
  if (cards > 8) {
    die(`${cards} published a1/a2 sentences now put être in front of one of the cells AND carry a respelling, against the four this build measured.`);
  }

  const themeRows = await c.query(
    `select count(*)::int n from content_items where theme=$1 and status='published'`,
    [PARADIGM_EVIDENCE.theme],
  );

  // ══ THE FOUR CELLS OF aller, PER CELL ════════════════════════════════════
  const perCell: Record<string, number> = {};
  for (const cell of ETRE_VERBS.find((v) => v.verb === 'aller')!.cells) {
    const q = await c.query(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`,
      [afterEtre(cell)],
    );
    perCell[cell] = Number((q.rows[0] as Record<string, number>).n);
  }
  const missing = Object.entries(perCell).filter(([, n]) => n === 0).map(([f]) => f);
  if (missing.length) {
    die(`${missing.join(', ')} no longer occurs in any published sentence with être in front of it. `
      + 'The lesson claims all four cells of aller are already published, which is the evidence line on its own opening deck.');
  }

  // ══ THE BLOCKS ═══════════════════════════════════════════════════════════
  const inTheme = await c.query("select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const mine = new Set(AUTHORED_IDS);
  const allIds = (inTheme.rows as Record<string, string>[]).map((r) => r.id);
  const foreign = allIds.filter((id) => isMine(id) && !mine.has(id));
  if (foreign.length) die(`rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this build does not own: ${foreign.join(', ')}`);
  const inA220 = allIds.filter(isA220);
  if (inA220.length !== 43) {
    die(`a2.20's block ${A220_BLOCK.from}..${A220_BLOCK.to} holds ${inA220.length} rows and that lesson applied 43. `
      + 'No lesson may re-author a neighbour\'s rows and the count is how we know.');
  }
  const inA205 = allIds.filter(isA205);
  if (inA205.length !== 36) {
    die(`a2.05's block ${A205_BLOCK.from}..${A205_BLOCK.to} holds ${inA205.length} rows and that lesson applied 36.`);
  }
  const now = inTheme.rowCount ?? 0;

  const themes = new Set(rows.map((r) => String(r.theme)));
  const absentNote = IMPORTED.filter((i) => /ABSENT FROM THE SEED/.test(i.why)).length;

  const header = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a221_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported out of ${themes.size} themes; ${absentNote} of them declared absent from the seed.
// ${READ_NOT_IMPORTED.length} rows read and refused; see READ_NOT_IMPORTED in the corpus file.
// ${ALL_REPAIRS.length} respellings repaired, ${RESPELL_ADDITIONS.length} supplied.
// ${NOT_REPAIRED.length} rows found broken and left alone; ${stillBroken.length} of them still are.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION:
//
//   THE SPLIT              ${unexpected.length} agreed cells exist as headwords, out of ${ALL_CELLS.length}
//                          cells across ${ETRE_VERBS.length} verbs. « mort » is published as an
//                          ordinary describing word and is imported for that
//                          reason; every other cell is absent. Settled by a2.05,
//                          agreed by a2.20, inherited here.
//
//   THE TRANSITIVE SPLIT   the largest judgement call in the lesson, and the
//                          figures it rests on:
${TRANSITIVE.map((t) => `//     ${t.verb.padEnd(11)} avoir=${String(transitive[t.verb]!.avoir).padStart(3)}   être=${String(transitive[t.verb]!.etre).padStart(3)}`).join('\n')}
//                          ${zero.length} of the six have ZERO published uses with avoir, so
//                          the brief's "group of six" is a group of two. Shown
//                          receptively on sortir and passer; the rule is B1's.
//
//   THE PARADIGM           ${evidenceTotal} published sentences put être in front of one of
//                          the cells. ${cards} of them are a1/a2 cards with a respelling
//                          and ${showEnding.length} of THOSE show a second word with an ending
//                          on it, which is why the whole paradigm is authored.
//                          fr.a1.rp-recits-temps holds ${Number((themeRows.rows[0] as Record<string, number>).n)} published rows and
//                          is laid out as a person walk.
${(withEtreRespelled.rows as Record<string, string>[]).map((r) => `//     ${r.id.padEnd(36)} « ${r.fr} »`).join(NL)}
//
//   THE FOUR CELLS         all four spellings of allé are already published with
//                          être in front of them, which the opening deck claims:
${Object.entries(perCell).map(([f, n]) => `//     ${f.padEnd(12)} ${String(n).padStart(3)}`).join('\n')}
//
// THE BLOCK: fr.a2.verbes held ${ROW_COUNT_BEFORE} rows before this build and holds
// ${now} now. Rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this
// build does not own: ${foreign.length === 0 ? 'none' : foreign.join(', ')}.
// a2.20's block holds ${inA220.length} rows and a2.05's holds ${inA205.length}, which is exactly
// what each of those lessons applied.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export const ETRE_IMPORT_ROWS: Record<string, Item> = {
`;

  const body = rows.map((r) => `  '${String(r.id)}': ${itemLiteral(r)}`).join('\n');

  const footer = `
};

/** What the database said, so a guard can compare a repaired value against the
 *  READ rather than against a second copy of the same string. a2.14 §5. */
export const STORED_RESPELL: Record<string, string> = {
${rows.map((r) => `  '${String(r.id)}': ${JSON.stringify(String(r.respell ?? ''))},`).join('\n')}
};

/** The transitive split, verb by verb, re-measured on every regeneration. */
export const TRANSITIVE_MEASURED: Record<string, { avoir: number; etre: number }> = {
${TRANSITIVE.map((t) => `  ${JSON.stringify(t.verb)}: { avoir: ${transitive[t.verb]!.avoir}, etre: ${transitive[t.verb]!.etre} },`).join('\n')}
};

/** Published sentences putting être in front of each cell of aller. */
export const CELL_EVIDENCE: Record<string, number> = {
${Object.entries(perCell).map(([f, n]) => `  ${JSON.stringify(f)}: ${n},`).join('\n')}
};

/** Re-measured on every regeneration. */
export const MEASURED = {
  agreedCellsAsHeadwords: ${unexpected.length},
  agreedCellsChecked: ${ALL_CELLS.length},
  paradigmEvidence: ${evidenceTotal},
  paradigmEvidenceCards: ${cards},
  paradigmCardsShowingAnEnding: ${showEnding.length},
  recitsTempsRows: ${Number((themeRows.rows[0] as Record<string, number>).n)},
  transitiveZeroCount: ${zero.length},
  a220BlockRows: ${inA220.length},
  a205BlockRows: ${inA205.length},
  blockCountAtRead: ${now},
} as const;
`;

  writeFileSync(OUT, header + body + footer, 'utf8');
  console.log(`wrote ${OUT}`);
  console.log(`  ${rows.length} rows, ${themes.size} themes, ${ALL_REPAIRS.length} repairs`);
  console.log(`  THE SPLIT: ${unexpected.length} of ${ALL_CELLS.length} agreed cells exist as headwords`);
  console.log(`  THE TRANSITIVE SPLIT: ${TRANSITIVE.map((t) => `${t.verb} ${transitive[t.verb]!.avoir}/${transitive[t.verb]!.etre}`).join(', ')}`);
  console.log(`  zero-with-avoir: ${zero.join(', ')}`);
  console.log(`  paradigm: ${evidenceTotal} published sentences, ${cards} of them cards, ${showEnding.length} showing an ending`);
  console.log(`  cells of aller: ${Object.entries(perCell).map(([f, n]) => `${f}=${n}`).join(', ')}`);
  console.log(`  fr.a2.verbes: ${now} rows (was ${ROW_COUNT_BEFORE} before this build)`);
  console.log(`  a2.20's block ${inA220.length}, a2.05's ${inA205.length}`);
  console.log(`  NOT_REPAIRED still broken: ${stillBroken.length}/${NOT_REPAIRED.length}`);

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
