/* Regenerates data/participes-rows.gen.ts, the recorded read behind a2.20.
 *
 * THIRTY-NINE ROWS IMPORTED, NOT ONE HEADWORD AUTHORED, AND NOT ONE BARE PAST
 * FORM AUTHORED EITHER — which is the split a2.05 settled and this build agrees.
 * See §1 of data/participes-corpus.ts.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * THE SPLIT, over THIS lesson's own thirty-three forms rather than a2.05's
 *   list: how many exist as bare rows, how many of those are glossed AS a past
 *   form, and how many of THOSE carry a respelling. The third figure is zero and
 *   it is the ledger decision's own evidence.
 * The per-form evidence: how many published sentences put each of the
 *   thirty-three behind a first word. The numbers the lesson prints come from
 *   here rather than from a constant somebody typed.
 * a2.13 §1 in this lesson's subject: how many of those thousands carry a
 *   respelling at a1/a2 level. It is TWO and neither is a passé composé, which
 *   is why the whole set is authored.
 * The two forms this lesson derives rather than teaches: `refait` and `aperçu`,
 *   and their naming forms, which must still be absent as headwords.
 * a2.05's block, which must still hold exactly its own thirty-six rows.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A row with NO respelling, unless the corpus declares an addition for it.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A row inside this build's id block that this build does not own, and any row
 *   at all inside a2.05's block.
 * A GENDERED row. a2.04's ledger amendment §0, and this lesson had to refuse
 *   four of them: `le reçu` twice, `été` and two gendered infinitives.
 * A regular past form appearing as a headword, which would reopen the split.
 * A row whose respelling was READ OFF for a repair and no longer holds it.
 *
 *     pnpm tsx scripts/_a220_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  A205_BLOCK, ALL_REPAIRS, AUTHORED_IDS, DERIVED_ONLY, EXPECTED_IMPORTED,
  FORMS, ID_BLOCK, IMPORTED, IMPORTED_IDS, NOT_REPAIRED, PARTICIPLE_DECISION,
  READ_NOT_IMPORTED, RESPELL_ADDITIONS, ROW_COUNT_BEFORE, isA205, isMine,
} from './data/participes-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/participes-rows.gen.ts');

const TIE = '‿';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

/* Postgres `~*` with a bracket class, never a JavaScript `\b`: invariants §0,
 * and a2.17 §9 measured a JS boundary undercounting the same kind of query by
 * four. Single apostrophes throughout, because a2.05 §1 found that a doubled
 * one passed as a PARAMETER survives and makes an elided alternation dead. */

const PAST_FORMS = FORMS.map((f) => f.past);

/** Any first word, then optionally a small word, then one of the thirty-three. */
const AFTER_AUX = (form: string) =>
  `(^|[^[:alpha:]])(ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont)`
  + ` +(pas +|bien +|mal +|déjà +|encore +|toujours +|jamais +|beaucoup +|trop +|tout +)?`
  + `${form}([^[:alpha:]]|$)`;

/** THE REGULAR SET, which must still not exist as headwords. If it ever does,
 *  the split a2.05 settled has been reopened by somebody else. */
const REGULAR_PAST_FORMS = [
  'parlé', 'mangé', 'travaillé', 'regardé', 'écouté', 'aimé', 'joué', 'chanté',
  'dansé', 'visité', 'cherché', 'trouvé', 'demandé', 'donné', 'acheté', 'payé',
  'fini', 'choisi', 'grandi', 'rempli', 'réfléchi',
  'vendu', 'attendu', 'entendu', 'répondu', 'perdu', 'rendu',
];

/** EVERY MEASUREMENT EXCLUDES THIS LESSON'S OWN ROWS. a2.17 §9: after its first
 *  apply a lesson's own sentences match the pattern it is measuring, and the
 *  printed figure grows on every re-apply. This lesson authors forty-three. */
const NOT_MINE = `and id <> all('{${AUTHORED_IDS.join(',')}}')`;

async function main() {
  const c = await pool.connect();

  const ids = [...IMPORTED_IDS];
  if (ids.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${ids.length} distinct rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);

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
    if (isA205(id)) die(`${id} is inside a2.05's block (${A205_BLOCK.from}..${A205_BLOCK.to}).`);
    if (r.gender) die(`${id} carries gender="${String(r.gender)}". A gendered single-word row joins a1.03's ending population when the merge CARRIES it into the seed (a2.04 ledger §0). This build refused four rows for exactly this; see READ_NOT_IMPORTED.`);
  }

  // ── THE ONE REPAIR: the stored value must still be the one being repaired ──
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

  // ══ THE SPLIT, RE-MEASURED OVER THIS LESSON'S OWN THIRTY-THREE ═══════════
  const bareRegular = await c.query(
    `select id, fr from content_items where kind='word' and fr = any($1) order by fr, id`,
    [REGULAR_PAST_FORMS],
  );
  if (bareRegular.rowCount) {
    die(`${bareRegular.rowCount} REGULAR past forms now exist as headwords: `
      + `${(bareRegular.rows as Record<string, string>[]).map((r) => `${r.fr} (${r.id})`).join(', ')}. `
      + 'The split a2.05 settled rests on there being none.');
  }

  const lookalike = await c.query(
    `select id, fr, en, respell from content_items where fr = any($1) and fr !~ ' ' order by fr, id`,
    [PAST_FORMS],
  );
  const looks = lookalike.rows as Record<string, string>[];
  const glossed = looks.filter((r) => /past participle|participle/i.test(String(r.en ?? '')));
  const glossedRespelled = glossed.filter((r) => String(r.respell ?? '') !== '');
  if (glossedRespelled.length !== PARTICIPLE_DECISION.glossedAndRespelled) {
    die(`${glossedRespelled.length} bare rows are glossed AS a past form AND carry a respelling; the corpus file records ${PARTICIPLE_DECISION.glossedAndRespelled}. `
      + 'That figure is the ledger decision\'s own evidence: a bare past form reaches a card the learner cannot say.');
  }

  // ══ THE PER-FORM EVIDENCE ════════════════════════════════════════════════
  const evidence: Record<string, number> = {};
  for (const f of PAST_FORMS) {
    const q = await c.query(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`,
      [AFTER_AUX(f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))],
    );
    evidence[f] = Number((q.rows[0] as Record<string, number>).n);
  }
  const totalEvidence = Object.values(evidence).reduce((a, b) => a + b, 0);
  if (totalEvidence < 500) {
    die(`only ${totalEvidence} published sentences hold any of the thirty-three behind a first word, and the lesson was built on more than a thousand.`);
  }

  // ══ a2.13 §1: HOW MANY OF THOSE ARE CARDS ════════════════════════════════
  const cards = await c.query(
    `select id, fr, respell from content_items
      where status='published' ${NOT_MINE} and respell is not null and respell <> '' and fr ~ ' '
        and level in ('a1','a2') and fr ~* $1 order by id`,
    [AFTER_AUX(`(${PAST_FORMS.join('|')})`)],
  );
  if ((cards.rowCount ?? 0) > 12) {
    die(`${cards.rowCount} published a1/a2 sentences now carry one of the thirty-three behind a first word AND a respelling. `
      + 'This build measured two, and the decision to author the whole set rests on the pool being empty. Somebody has written cards; read them before authoring around them.');
  }

  // ══ THE TWO DERIVED-ONLY FORMS ═══════════════════════════════════════════
  const derived: Record<string, { occurrences: number; verbExists: boolean }> = {};
  for (const d of DERIVED_ONLY) {
    const occ = await c.query(
      `select count(*)::int n from content_items where status='published' ${NOT_MINE}
         and fr ~* ('(^|[^[:alpha:]])' || $1 || '([^[:alpha:]]|$)')`, [d.past]);
    const verb = await c.query("select count(*)::int n from content_items where fr = $1 and kind='word'", [d.verb]);
    derived[d.past] = {
      occurrences: Number((occ.rows[0] as Record<string, number>).n),
      verbExists: Number((verb.rows[0] as Record<string, number>).n) > 0,
    };
    if (derived[d.past]!.verbExists) {
      die(`${d.verb} now exists as a headword, so « ${d.past} » is no longer derived-only and should be taught rather than named on the sheet.`);
    }
  }

  // ══ THE BLOCK, AND a2.05's ═══════════════════════════════════════════════
  const inBlock = await c.query("select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const mine = new Set(AUTHORED_IDS);
  const allIds = (inBlock.rows as Record<string, string>[]).map((r) => r.id);
  const foreign = allIds.filter((id) => isMine(id) && !mine.has(id));
  if (foreign.length) die(`rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this build does not own: ${foreign.join(', ')}`);
  const inA205 = allIds.filter(isA205);
  if (inA205.length !== 36) {
    die(`a2.05's block ${A205_BLOCK.from}..${A205_BLOCK.to} holds ${inA205.length} rows and that lesson applied 36. `
      + 'Neither side may re-author the other\'s rows and the count is how we know.');
  }
  const now = inBlock.rowCount ?? 0;

  const themes = new Set(rows.map((r) => String(r.theme)));

  const topEvidence = Object.entries(evidence).sort((a, b) => b[1] - a[1]).slice(0, 8);

  const header = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a220_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported out of ${themes.size} themes.
// ${READ_NOT_IMPORTED.length} rows read and refused; see READ_NOT_IMPORTED in the corpus file.
// ${ALL_REPAIRS.length} respelling repaired, ${RESPELL_ADDITIONS.length} supplied.
// ${NOT_REPAIRED.length} rows found broken and left alone; ${stillBroken.length} of them still are.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION:
//
//   THE SPLIT              ${bareRegular.rowCount} REGULAR past forms exist as headwords.
//                          ${looks.length} of this lesson's thirty-three exist as bare rows.
//                          ${glossed.length} of those are glossed AS a past form, and
//                          ${glossedRespelled.length} of THOSE carry a respelling.
//                          That last figure is the whole argument: a bare past
//                          form reaches a card the learner cannot say. Settled by
//                          a2.05, agreed here. Corpus file §1.
//
//   the evidence           ${totalEvidence} published sentences put one of the thirty-three
//                          behind a first word. The eight commonest:
${topEvidence.map(([f, n]) => `//     ${f.padEnd(12)} ${String(n).padStart(4)}`).join('\n')}
//
//   a2.13 §1               ${cards.rowCount} of them are CARDS: a1 or a2, respelled, in a
//                          sentence. Evidence is not cards, and the pool this
//                          lesson could import from was ${cards.rowCount}, not ${totalEvidence}.
${(cards.rows as Record<string, string>[]).map((r) => `//     ${r.id.padEnd(38)} « ${r.fr} »`).join('\n')}
//
//   the two derived-only   ${DERIVED_ONLY.map((d) => `${d.past}: ${derived[d.past]!.occurrences} occurrences, naming form absent`).join('\n//                          ')}
//                          Both are named on the reference sheet as members of a
//                          group they were never taught in, and refait is one of
//                          the two forms the exam asks for cold.
//
// THE BLOCK: fr.a2.verbes held ${ROW_COUNT_BEFORE} rows before this build and holds
// ${now} now. Rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this
// build does not own: ${foreign.length === 0 ? 'none' : foreign.join(', ')}.
// a2.05's block ${A205_BLOCK.from}..${A205_BLOCK.to} holds ${inA205.length} rows, which is
// exactly what that lesson applied. Neither side re-authored the other's.

import type { Item } from '../../ealch-v2/src/content/schema.ts';

export const PARTICIPES_ROWS: Record<string, Item> = {
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

/** How many published sentences put each of the thirty-three behind a first
 *  word. The figures the lesson prints come from here rather than from a
 *  constant somebody typed. */
export const EVIDENCE: Record<string, number> = {
${Object.entries(evidence).map(([f, n]) => `  ${JSON.stringify(f)}: ${n},`).join('\n')}
};

/** Re-measured on every regeneration. */
export const MEASURED = {
  bareRegularPastForms: ${bareRegular.rowCount},
  lookalikeRows: ${looks.length},
  glossedAsPastForm: ${glossed.length},
  glossedAndRespelled: ${glossedRespelled.length},
  evidenceTotal: ${totalEvidence},
  evidenceCards: ${cards.rowCount},
  refaitOccurrences: ${derived.refait?.occurrences ?? -1},
  apercuOccurrences: ${derived['aperçu']?.occurrences ?? -1},
  a205BlockRows: ${inA205.length},
  blockCountAtRead: ${now},
} as const;
`;

  writeFileSync(OUT, header + body + footer, 'utf8');
  console.log(`wrote ${OUT}`);
  console.log(`  ${rows.length} rows, ${themes.size} themes`);
  console.log(`  THE SPLIT: ${bareRegular.rowCount} regular past forms as headwords; ${looks.length} of the thirty-three exist bare, ${glossed.length} glossed as a past form, ${glossedRespelled.length} of those respelled`);
  console.log(`  evidence: ${totalEvidence} published sentences, ${cards.rowCount} of them cards`);
  console.log(`  derived-only: ${DERIVED_ONLY.map((d) => `${d.past}=${derived[d.past]!.occurrences}`).join(', ')}`);
  console.log(`  fr.a2.verbes: ${now} rows (was ${ROW_COUNT_BEFORE} before this build)`);
  console.log(`  a2.05's block: ${inA205.length} rows`);
  console.log(`  NOT_REPAIRED still broken: ${stillBroken.length}/${NOT_REPAIRED.length}`);

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
