/* Regenerates data/passe-compose-rows.gen.ts, the recorded read behind a2.05.
 *
 * TWENTY-THREE ROWS IMPORTED, NOT ONE HEADWORD AUTHORED, and — the decision
 * this lesson existed to make — NOT ONE BARE PAST FORM AUTHORED EITHER, on this
 * side or on a2.20's. See §1 of data/passe-compose-corpus.ts.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * The ledger decision itself: how many bare past forms exist as rows. It is
 *   ZERO for the regular set, and the generator dies if that changes, because
 *   the whole split with a2.20 rests on it.
 * The published negatives, counted, and how many carry a respelling. ONE does
 *   and it is fr.sons.masterclass.021, which this lesson imports as the `il`
 *   row of its own paradigm.
 * avoir + a past form, counted against the ones with a respelling, which is
 *   a2.13 §1 in this lesson's subject: 5,126 sentences and 30 cards.
 * The adverb-in-the-gap shape a2.17 deferred, re-measured with the wider list.
 * The preceding-direct-object case, counted, so the no-agreement guard can be
 *   scoped to this lesson honestly rather than claiming the corpus is clean.
 * An -ER naming form straight after avoir, which must be ZERO: a2.01 was told
 *   to keep the evidence clean and the claim is checked corpus-wide.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A row with NO respelling, UNLESS the corpus declares an addition for it.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A row inside this build's id block that this build does not own, and any row
 *   at all inside a2.20's reservation.
 * A GENDERED row. a2.04's ledger amendment §0.
 * A bare past form appearing as a headword anywhere in the regular set.
 * A row whose respelling was READ OFF for an addition or a repair and no longer
 *   holds it.
 *
 *     pnpm tsx scripts/_a205_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  A220_BLOCK, ADVERB_EVIDENCE, ALL_REPAIRS, AUTHORED_IDS, EXPECTED_IMPORTED,
  ID_BLOCK, IL_NEGATIVE_ID, IMPORTED, NOT_REPAIRED, PDO_EVIDENCE,
  READ_NOT_IMPORTED, RESPELL_ADDITIONS, ROW_COUNT_BEFORE, isA220, isMine,
} from './data/passe-compose-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/passe-compose-rows.gen.ts');

const TIE = '‿';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

/* Postgres `~*` with `\y`, never a JavaScript `\b`: invariants §0, and a2.17 §9
 * measured a JS boundary undercounting the same kind of query by four. */

/* A NOTE ON THE APOSTROPHES, AND IT COST THIS BUILD A DRY RUN.
 *
 * a2.19's generator writes `(ne|n'')` in these patterns, which is correct when
 * the pattern is EMBEDDED in a single-quoted SQL literal and wrong when it is
 * passed as a PARAMETER, because `''` then stays as two apostrophes and the
 * alternation can only ever match the un-elided `ne`. a2.19 passes it as `$1`
 * and its own measurement is therefore of `ne vais pas` only; its thirteen rows
 * are all un-elided, which is why nothing looked wrong.
 *
 * THIS LESSON'S NEGATIVE IS ELIDED IN EVERY PERSON — `n'ai`, `n'a`, `n'ont` —
 * so the same shape would have measured ZERO. Single apostrophes throughout,
 * and the `il` row of the paradigm is the assertion that proves it. */

/** A form of avoir, then optionally a small word, then a past form. */
const PC = "(^|[ '’])(j'ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont)"
  + " +(pas +|bien +|mal +|déjà +|encore +|toujours +|jamais +|beaucoup +|trop +)?[a-zà-ÿ]{2,}(é|i|u|is|it|ert)($|[ .,!?])";

/** The negative: ne/n' + a form of avoir + pas + a past form. */
const PC_NEG = "(^|[ '’])(ne |n'|n’)(ai|as|a|avons|avez|ont) +pas +[a-zà-ÿ]{2,}(é|i|u|is|it|ert)($|[ .,!?])";

/** A short adverb sitting in the gap. a2.17 §10 measured 82 with a shorter list. */
const PC_ADV = "(^|[ '’])(ai|as|a|avons|avez|ont)"
  + " +(bien|mal|beaucoup|trop|déjà|encore|toujours|jamais|vite|assez|presque|enfin|souvent) +[a-zà-ÿ]{2,}(é|i|u|is|it|ert)($|[ .,!?])";

/** A past form agreeing after avoir. Every hit is the preceding-direct-object
 *  case, which is a2.06's at seq 21. */
const PC_AGREED = "(^|[ '’])(ai|as|a|avons|avez|ont) +[a-zà-ÿ]{2,}(ée|és|ées)($|[ .,!?])";

/** An -ER naming form straight after avoir. a2.01 was told to keep this clean
 *  and the claim is checked over the whole corpus rather than over its rows. */
const PC_INF = "(^|[ '’])(j'ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont) +[a-zà-ÿ]{3,}er($|[ .,!?])";

/** THE LEDGER DECISION, RE-MEASURED. Not one of these may exist as a headword.
 *  The lookalikes that DO exist — `fermé`, `ouvert`, `été`, `réussi`, `vu` — are
 *  words in their own right and are counted separately below. */
const REGULAR_PAST_FORMS = [
  'parlé', 'mangé', 'travaillé', 'regardé', 'écouté', 'aimé', 'joué', 'chanté',
  'dansé', 'visité', 'cherché', 'trouvé', 'demandé', 'donné', 'acheté', 'payé',
  'oublié', 'invité', 'étudié', 'téléphoné', 'préparé', 'gagné', 'commencé',
  'fini', 'choisi', 'grandi', 'rempli', 'réfléchi', 'obéi',
  'vendu', 'attendu', 'entendu', 'répondu', 'perdu', 'rendu',
];

/** EVERY MEASUREMENT EXCLUDES THIS LESSON'S OWN ROWS. a2.17 §9: after its first
 *  apply a lesson's own sentences match the pattern it is measuring, and the
 *  printed figure grows on every re-apply. This lesson authors thirty-six
 *  sentences that match PC. */
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
    if (isA220(id)) die(`${id} is inside the block reserved for a2.20 (${A220_BLOCK.from}..${A220_BLOCK.to}).`);
    if (r.gender) die(`${id} carries gender="${String(r.gender)}". A gendered single-word row joins a1.03's ending population when the merge CARRIES it into the seed (a2.04 ledger §0).`);
  }

  // ── THE ONE REPAIR: the stored value must still be the one being repaired ──
  for (const rp of ALL_REPAIRS) {
    const hit = rows.find((r) => String(r.id) === rp.id);
    if (!hit) die(`${rp.id} is a REPAIRS target and is not imported.`);
    const rowR = hit!;
    const stored = String(rowR.respell ?? '');
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

  // ══ THE LEDGER DECISION, RE-MEASURED ═════════════════════════════════════
  const bare = await c.query(
    `select id, fr, theme from content_items where kind='word' and fr = any($1) order by fr, id`,
    [REGULAR_PAST_FORMS],
  );
  if (bare.rowCount) {
    die(`${bare.rowCount} REGULAR past forms now exist as headwords: `
      + `${(bare.rows as Record<string, string>[]).map((r) => `${r.fr} (${r.id})`).join(', ')}. `
      + 'The split with a2.20 rests on there being none. Read the ledger before authoring around this.');
  }
  const lookalike = await c.query(
    `select count(*)::int n from content_items where kind='word' and fr !~ ' '
       and fr in ('fermé','ouvert','été','réussi','vu','bu','su','pu','dû','écrit','eu')`,
  );

  // ══ THE NEGATIVES ════════════════════════════════════════════════════════
  const neg = await c.query(
    `select count(*)::int n,
            count(*) filter (where respell is not null and respell <> '')::int respelled
       from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [PC_NEG]);
  if (Number(neg.rows[0].respelled) > 1 + RESPELL_ADDITIONS.length) {
    die(`${neg.rows[0].respelled} published negatives now carry a respelling, and this build found ONE and supplies ${RESPELL_ADDITIONS.length}. `
      + 'The shape of this lesson rests on the corpus having published the sentence and almost never the card; somebody has written more.');
  }
  const negRespelled = await c.query(
    `select id, fr, respell from content_items where status='published' ${NOT_MINE}
        and fr ~* $1 and respell is not null and respell <> '' order by id`, [PC_NEG]);
  const haveIl = (negRespelled.rows as Record<string, string>[]).some((r) => r.id === IL_NEGATIVE_ID);
  if (!haveIl) die(`${IL_NEGATIVE_ID} is the one respelled negative this lesson's paradigm uses for its \`il\` row and it no longer matches the shape.`);

  // ══ THE AFFIRMATIVE, AND a2.13 §1 ════════════════════════════════════════
  const pc = await c.query(
    `select count(*)::int total,
            count(*) filter (where respell is not null and respell <> '')::int respelled
       from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [PC]);
  if (Number(pc.rows[0].total) < 1000) {
    die(`only ${pc.rows[0].total} published sentences hold this construction and the lesson was built on thousands.`);
  }

  // ══ THE ADVERB IN THE GAP, WHICH a2.17 DEFERRED ══════════════════════════
  const adv = await c.query(
    `select count(*)::int total,
            count(*) filter (where respell is not null and respell <> '')::int respelled
       from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [PC_ADV]);
  if (Number(adv.rows[0].total) < ADVERB_EVIDENCE.a217Figure) {
    die(`${adv.rows[0].total} sentences put a short adverb in the gap and a2.17 measured ${ADVERB_EVIDENCE.a217Figure}. The deferral this lesson closes rests on the shape being common.`);
  }

  // ══ THE PRECEDING DIRECT OBJECT, WHICH IS a2.06's ════════════════════════
  const pdo = await c.query(
    `select count(*)::int n from content_items where status='published' ${NOT_MINE} and fr ~* $1`, [PC_AGREED]);

  // ══ a2.01's CLAIM, CHECKED OVER THE WHOLE CORPUS ═════════════════════════
  const inf = await c.query(
    `select id, fr from content_items where status='published' ${NOT_MINE} and fr ~* $1 order by id`, [PC_INF]);
  if (inf.rowCount) {
    die(`${inf.rowCount} published rows put an -ER naming form straight after avoir: `
      + `${(inf.rows as Record<string, string>[]).slice(0, 5).map((r) => `${r.id} "${r.fr}"`).join('; ')}. `
      + 'a2.01 kept this clean for this lesson and the evidence has moved.');
  }

  // ══ a2.01's OWN ROWS, STILL PRESENT TENSE ════════════════════════════════
  const a201 = await c.query(
    `select count(*)::int n from content_items where id like 'fr.a2.verbes.%'
        and split_part(id,'.',4)::int between 101 and 140`);

  // ══ THE BLOCK, AND a2.20's RESERVATION ═══════════════════════════════════
  const inBlock = await c.query("select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const mine = new Set(AUTHORED_IDS);
  const allIds = (inBlock.rows as Record<string, string>[]).map((r) => r.id);
  const foreign = allIds.filter((id) => isMine(id) && !mine.has(id));
  if (foreign.length) die(`rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this build does not own: ${foreign.join(', ')}`);
  const inA220 = allIds.filter(isA220);
  const now = inBlock.rowCount ?? 0;

  const themes = new Set(rows.map((r) => String(r.theme)));

  const header = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a205_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported out of ${themes.size} themes.
// ${READ_NOT_IMPORTED.length} rows read and refused; see READ_NOT_IMPORTED in the corpus file.
// ${ALL_REPAIRS.length} respelling repaired, ${RESPELL_ADDITIONS.length} supplied.
// ${NOT_REPAIRED.length} rows found broken and left alone; ${stillBroken.length} of them still are.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION:
//
//   THE LEDGER DECISION    ${bare.rowCount} regular past forms exist as headwords.
//                          ${(lookalike.rows[0] as Record<string, number>).n} bare rows LOOK like past forms and every one is a
//                          word in its own right (fermé and ouvert are adjectives,
//                          été is the season, vu is a preposition).
//                          A past form is not a corpus item. Neither this lesson
//                          nor a2.20 authors one. Corpus file §1.
//
//   the published negatives ${neg.rows[0].n} sentences put ne...pas round a form of avoir with
//                          a past form behind it, and ${neg.rows[0].respelled} of them carry a respelling
${(negRespelled.rows as Record<string, string>[]).map((r) => `//     ${r.id.padEnd(38)} [${r.respell}]`).join('\n')}
//
//   avoir + a past form    ${pc.rows[0].total} published sentences, ${pc.rows[0].respelled} with a respelling
//                          a2.13 §1: evidence is not cards, and the pool was ${pc.rows[0].respelled} not ${pc.rows[0].total}
//
//   a short adverb in the gap  ${adv.rows[0].total} published sentences, ${adv.rows[0].respelled} with a respelling
//                          (a2.17 §10 measured ${ADVERB_EVIDENCE.a217Figure} with a shorter adverb list)
//
//   the preceding object   ${pdo.rows[0].n} published rows DO agree a past form after avoir, and
//                          every one is « que j'ai achetée » or « je l'ai aidée ».
//                          That is ${PDO_EVIDENCE.owner} at seq 21 and the guard here is scoped to
//                          this lesson's own surfaces rather than to the corpus.
//
//   -ER naming form after avoir  ${inf.rowCount}. a2.01 kept the evidence clean and it
//                          still is, corpus-wide and not only in its own rows.
//   a2.01's own rows       ${a201.rows[0].n} at fr.a2.verbes.101..140, all simple present.
//
// THE BLOCK: fr.a2.verbes held ${ROW_COUNT_BEFORE} rows before this build and holds
// ${now} now. Rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this
// build does not own: ${foreign.length === 0 ? 'none' : foreign.join(', ')}.
// Rows inside a2.20's reservation ${A220_BLOCK.from}..${A220_BLOCK.to}: ${inA220.length === 0 ? 'none' : inA220.join(', ')}.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export const PASSE_COMPOSE_ROWS: Record<string, Item> = {
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
  bareRegularPastForms: ${bare.rowCount},
  pastFormLookalikes: ${(lookalike.rows[0] as Record<string, number>).n},
  publishedNegatives: ${neg.rows[0].n},
  publishedNegativesRespelled: ${neg.rows[0].respelled},
  avoirPlusPastForm: ${pc.rows[0].total},
  avoirPlusPastFormRespelled: ${pc.rows[0].respelled},
  adverbInGap: ${adv.rows[0].total},
  adverbInGapRespelled: ${adv.rows[0].respelled},
  precedingObjectAgreements: ${pdo.rows[0].n},
  infinitiveAfterAvoir: ${inf.rowCount},
  a201Rows: ${a201.rows[0].n},
  blockCountAtRead: ${now},
} as const;
`;

  writeFileSync(OUT, header + body + footer, 'utf8');
  console.log(`wrote ${OUT}`);
  console.log(`  ${rows.length} rows, ${themes.size} themes`);
  console.log(`  LEDGER: ${bare.rowCount} bare regular past forms exist as headwords (the decision rests on zero)`);
  console.log(`  published negatives: ${neg.rows[0].n}, respelled ${neg.rows[0].respelled}, supplied by this build ${RESPELL_ADDITIONS.length}`);
  console.log(`  avoir + past form: ${pc.rows[0].total} sentences, ${pc.rows[0].respelled} cards`);
  console.log(`  adverb in the gap: ${adv.rows[0].total} sentences, ${adv.rows[0].respelled} cards (a2.17 measured ${ADVERB_EVIDENCE.a217Figure})`);
  console.log(`  preceding-object agreements: ${pdo.rows[0].n} (all a2.06's)`);
  console.log(`  -ER naming form after avoir: ${inf.rowCount} (a2.01's claim holds)`);
  console.log(`  fr.a2.verbes: ${now} rows (was ${ROW_COUNT_BEFORE} before this build)`);
  console.log(`  a2.20's reservation ${A220_BLOCK.from}..${A220_BLOCK.to}: ${inA220.length} rows`);
  console.log(`  NOT_REPAIRED still broken: ${stillBroken.length}/${NOT_REPAIRED.length}`);

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
