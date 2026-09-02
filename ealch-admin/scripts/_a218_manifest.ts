/* Regenerates data/prepositions-temps-rows.gen.ts, the recorded read behind a2.18.
 *
 * TWELVE ROWS IMPORTED, AND FOUR OF THEM ARE THE PARADIGM.
 *
 * NOT ONE HEADWORD IS AUTHORED, which is corrections §2 holding for the
 * eleventh build in a row. What is new is that CORRECTIONS §3 DOES NOT HOLD:
 * fr.sons.jours-et-mois.080 to .083 are four consecutive published phrase
 * cards — « dans / il y a / depuis / pendant une heure » — one duration, four
 * prepositions, all respelled. The minimal set that §3 says never exists was
 * published years ago. The fifth member, « en une heure », was never written
 * and this lesson authors it.
 *
 * ── THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN ON EVERY REGENERATION ─────
 *
 * `il y a` counted apart: how many published rows use it for existence and how
 *   many for "ago". The lesson teaches that the distinguisher is a measurement
 *   followed by nothing, and the ONE published counterexample
 *   (fr.a1.jours-et-mois.090, « il y a plusieurs jours fériés ») is what forced
 *   that wording rather than the brief's "a time expression means ago".
 * `depuis` against `pendant` beside a compound tense. The lesson's Owns is that
 *   depuis takes the present, and the corpus agrees by a factor of three and a
 *   half. If that margin ever inverts, the build fails rather than the lesson
 *   quietly teaching a rule its own corpus breaks.
 * How many published sentences holding each preposition carry a RESPELLING at
 *   all, which is a2.13 §1 measured in this lesson's own subject: 560 depuis
 *   sentences and 20 cards.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE, which draws as a low underscore on a Pixel 6.
 * A row with NO respelling, UNLESS the corpus file declares an addition for it.
 *   ONE row qualifies: fr.a1.prepositions-essentielles.093, the only published
 *   sentence in this lesson's own theme putting pendant with the present.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A row inside this build's id block that this build does not own.
 * A GENDERED row, and this generator refuses one outright. a2.04's ledger
 *   amendment §0 is the most expensive thing this band has found — a1.03's
 *   ending population is measured off the SEED and a CARRY is what puts a row
 *   there — and unlike a2.04, whose subject was nouns, nothing here needs one.
 * A row in `temps-et-frequence`, the theme this build considered and rejected.
 * A row whose respelling was READ OFF for a repair and no longer holds it.
 *
 *     pnpm tsx scripts/_a218_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  ALL_REPAIRS, AUTHORED_IDS, DEPUIS_EVIDENCE, EXPECTED_IMPORTED, ID_BLOCK,
  IL_Y_A_EVIDENCE, IMPORTED, NOT_REPAIRED, READ_NOT_IMPORTED, REJECTED_THEME,
  RESPELL_ADDITIONS, ROW_COUNT_BEFORE, isMine,
} from './data/prepositions-temps-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/prepositions-temps-rows.gen.ts');

const TIE = '‿';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

/** The duration nouns, as a Postgres alternation, used by both `il y a`
 *  measurements so the two halves cannot drift apart. */
const DUR = '(seconde|minute|heure|jour|semaine|mois|an|ann[ée]e|si[èe]cle|d[ée]cennie)s?';
const NUM = '(un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|quelques|plusieurs|vingt|cent)';

/** EVERY MEASUREMENT EXCLUDES THIS LESSON'S OWN ROWS. a2.17 §9: after its first
 *  apply its placement figure went 80 to 87, because seven of its own authored
 *  sentences matched the pattern it was measuring, and a lesson that counts
 *  itself prints a figure that grows on every re-apply. Written as a SQL
 *  fragment rather than a bound parameter because these queries already use $1
 *  and $2 for the shared alternations and the positions differ between them.
 *  The ids are this file's own constants. */
const NOT_MINE = `and id <> all('{${AUTHORED_IDS.join(',')}}')`;

async function main() {
  const c = await pool.connect();

  const ids = IMPORTED.map((i) => i.id);
  if (ids.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${ids.length} rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
  if (new Set(ids).size !== ids.length) die('IMPORTED holds a duplicate id.');

  const res = await c.query(`select * from content_items where id = any($1) order by id`, [ids]);
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
    if (r.theme === REJECTED_THEME) die(`${id} is in "${REJECTED_THEME}", the theme this build considered and rejected. See THEME in the corpus file.`);
  }

  // ── The repairs: the stored value must still be the one we claim ──────────
  const repairIds = ALL_REPAIRS.map((p) => p.id);
  const rep = await c.query(`select id, fr, respell from content_items where id = any($1)`, [repairIds]);
  for (const p of ALL_REPAIRS) {
    const row = (rep.rows as Record<string, string>[]).find((x) => x.id === p.id);
    if (!row) die(`${p.id} is a repair target and is not in the database.`);
    const ok = row!.respell === p.from || row!.respell === p.to;
    if (!ok) die(`${p.id} holds "${row!.respell}", which is neither the recorded from "${p.from}" nor the repaired to "${p.to}". a2.13 §5: a manifest is a read taken BEFORE the batch runs, so a value equal to the repaired one is this build's own transform and is exempt; anything else is drift.`);
    if (row!.fr !== p.fr) die(`${p.id} says fr="${row!.fr}" and the repair claims "${p.fr}".`);
    if (p.readOff) {
      const token = p.readOffToken;
      if (!token) die(`${p.id} names a readOff row and no readOffToken. A read-off claim nobody can check is a comment.`);
      const src = await c.query(`select respell from content_items where id = $1`, [p.readOff]);
      if (!src.rowCount) die(`${p.id} was read off ${p.readOff} and that row does not exist.`);
      const v = String((src.rows[0] as Record<string, string>).respell ?? '');
      if (!v.toLowerCase().includes(String(token).toLowerCase())) {
        die(`${p.id} claims "${token}" was read off ${p.readOff}, and that row now holds "${v}".`);
      }
      if (!p.to.toLowerCase().includes(String(token).toLowerCase())) {
        die(`${p.id} claims to carry "${token}" and its repaired value is "${p.to}".`);
      }
    }
  }

  // ── The additions: the row must still have NO respelling of its own ───────
  for (const a of RESPELL_ADDITIONS) {
    const found = rows.find((r) => String(r.id) === a.id);
    // `die` returns never and TypeScript only narrows across a never-returning
    // call when the callee is a function DECLARATION or an explicitly typed
    // const. This one is an arrow, so the assertion does the narrowing.
    if (!found) die(`${a.id} is a RESPELL_ADDITIONS target and is not imported.`);
    const row = found!;
    const stored = String(row.respell ?? '');
    if (stored && stored !== a.to) {
      die(`${a.id} now holds a respelling of its own, "${stored}", and this build was going to supply "${a.to}". Somebody has written one; read it before overwriting it.`);
    }
    if (row.fr !== a.fr) die(`${a.id} says fr="${String(row.fr)}" and the addition claims "${a.fr}".`);
  }

  // ── NOT_REPAIRED must still be broken, or somebody has fixed it ───────────
  const nr = await c.query(`select id, respell from content_items where id = any($1)`, [NOT_REPAIRED.map((x) => x.id)]);
  const stillBroken: string[] = [];
  for (const x of NOT_REPAIRED) {
    const row = (nr.rows as Record<string, string>[]).find((r) => r.id === x.id);
    if (row && row.respell === x.respell) stillBroken.push(x.id);
  }

  // ── THE MEASUREMENT: `il y a`, counted apart ──────────────────────────────
  const ilTotal = await c.query(`select count(*)::int as n from content_items where status='published' ${NOT_MINE} and fr ~* '\\yil y a\\y'`);
  const ilAgo = await c.query(
    `select count(*)::int as n from content_items
      where status='published' ${NOT_MINE} and fr ~* ('\\yil y a +' || $1 || ' +' || $2 || '\\y')`, [NUM, DUR],
  );
  const ilAgoBare = await c.query(
    `select count(*)::int as n from content_items
      where status='published' ${NOT_MINE} and fr ~* ('\\yil y a +' || $1 || ' +' || $2 || ' *[.,!?]?$')`, [NUM, DUR],
  );
  const ilExist = await c.query(
    `select count(*)::int as n from content_items
      where status='published' ${NOT_MINE}
        and fr ~* '\\yil y a +(un|une|des|du|de la|le|la|les|beaucoup|trop|plus|moins|peu|plein|encore)\\y'
        and fr !~* ('\\yil y a +' || $1 || ' +' || $2 || ' *[.,!?]?$')`, [NUM, DUR],
  );

  // The counterexample the lesson's wording exists because of.
  const counter = await c.query(
    `select id, fr from content_items where id = $1`, [IL_Y_A_EVIDENCE.theCounterexample],
  );
  if (!counter.rowCount) die(`${IL_Y_A_EVIDENCE.theCounterexample} is the published counterexample the ago rule is worded around, and it is gone.`);
  if (String((counter.rows[0] as Record<string, string>).fr) !== IL_Y_A_EVIDENCE.counterexampleFr) {
    die(`${IL_Y_A_EVIDENCE.theCounterexample} now reads "${String((counter.rows[0] as Record<string, string>).fr)}" and the corpus file quotes "${IL_Y_A_EVIDENCE.counterexampleFr}".`);
  }

  // ── THE MEASUREMENT: depuis against pendant, beside a compound ────────────
  const COMPOUND = `(\\y|'')(ai|as|avons|avez|ont) +(pas +|jamais +|plus +|bien +|d[ée]j[àa] +)?[a-zà-ÿ]{2,}(é|és|ée|ées|i|is|it|u|us|ue)\\y`;
  const dep = await c.query(
    `select count(*)::int as total, count(*) filter (where fr ~* $1)::int as compound
       from content_items where status='published' ${NOT_MINE} and kind='sentence' and fr ~* '\\ydepuis\\y'`, [COMPOUND],
  );
  const pen = await c.query(
    `select count(*)::int as total, count(*) filter (where fr ~* $1)::int as compound
       from content_items where status='published' ${NOT_MINE} and kind='sentence' and fr ~* '\\ypendant\\y'`, [COMPOUND],
  );
  const depRatio = Number(dep.rows[0].compound) / Number(dep.rows[0].total);
  const penRatio = Number(pen.rows[0].compound) / Number(pen.rows[0].total);
  if (!(penRatio > depRatio * 2)) {
    die('THE CORPUS NO LONGER SHOWS pendant SITTING BESIDE A PAST TENSE MORE OFTEN THAN depuis DOES. '
      + `depuis ${dep.rows[0].compound}/${dep.rows[0].total}, pendant ${pen.rows[0].compound}/${pen.rows[0].total}. `
      + 'This lesson\'s Owns rests on that margin. Either the corpus has changed or the claim was never as strong as it looked.');
  }

  // ── THE MEASUREMENT: evidence against cards (a2.13 §1) ────────────────────
  const cards = await c.query(
    `select p.w,
            count(*) filter (where i.fr ~* ('\\y'||p.w||'\\y'))::int as total,
            count(*) filter (where i.fr ~* ('\\y'||p.w||'\\y') and i.respell is not null and i.respell <> '')::int as respelled
       from (values ('depuis'),('pendant'),('dans'),('en'),('il y a')) p(w)
       cross join content_items i
      where i.status='published' and i.kind='sentence' ${NOT_MINE.replace(/id /g, 'i.id ')}
      group by 1 order by 2 desc`,
  );

  // ── THE QUADRUPLE: it must still be four consecutive published cards ──────
  const quad = await c.query(
    `select id, fr, respell from content_items
      where id like 'fr.sons.jours-et-mois.%'
        and split_part(id,'.',4)::int between 80 and 83 order by id`,
  );
  if (quad.rowCount !== 4) die(`fr.sons.jours-et-mois.080..083 is the four-card quadruple this lesson is built on and it now holds ${quad.rowCount} rows.`);

  // ── The block ────────────────────────────────────────────────────────────
  const block = await c.query(
    `select count(*)::int as n from content_items where id like 'fr.a2.prepositions-essentielles.%'`,
  );
  const inBlock = await c.query(
    `select id from content_items where id like 'fr.a2.prepositions-essentielles.%' order by id`,
  );
  const mine = new Set(AUTHORED_IDS);
  const foreign = (inBlock.rows as Record<string, string>[])
    .map((r) => r.id).filter((id) => isMine(id) && !mine.has(id));
  if (foreign.length) die(`rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this build does not own: ${foreign.join(', ')}`);

  const now = Number(block.rows[0].n);

  const header = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a218_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported out of ${new Set(rows.map((r) => String(r.theme))).size} themes.
// ${READ_NOT_IMPORTED.length} rows read and refused; see READ_NOT_IMPORTED in the corpus file.
// ${ALL_REPAIRS.length} respellings repaired, ${RESPELL_ADDITIONS.length} supplied.
// ${NOT_REPAIRED.length} rows found broken and left alone; ${stillBroken.length} of them still are.
//
// THE MEASUREMENTS, RE-RUN ON EVERY REGENERATION:
//
//   il y a          ${ilTotal.rows[0].n} published rows
//                   ${ilExist.rows[0].n} of them "there is"
//                   ${ilAgo.rows[0].n} a number and a duration, ${ilAgoBare.rows[0].n} of those with nothing after it
//                   the counterexample still reads as quoted
//
//   depuis          ${dep.rows[0].compound} of ${dep.rows[0].total} sentences sit beside an avoir past
//   pendant         ${pen.rows[0].compound} of ${pen.rows[0].total} do
//                   ratio ${(penRatio / depRatio).toFixed(2)}x, and the build refuses anything under 2x
//
//   evidence against cards (a2.13 §1), published sentences:
${(cards.rows as Record<string, number | string>[]).map((r) => `//     ${String(r.w).padEnd(9)} ${String(r.total).padStart(4)} sentences, ${String(r.respelled).padStart(3)} carry a respelling`).join('\n')}
//
//   THE QUADRUPLE, still four consecutive published cards:
${(quad.rows as Record<string, string>[]).map((r) => `//     ${r.id}  ${r.fr.padEnd(18)} ${r.respell}`).join('\n')}
//
// THE BLOCK: fr.a2.prepositions-essentielles held ${ROW_COUNT_BEFORE} rows before this
// build and holds ${now} now. Rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that
// this build does not own: ${foreign.length === 0 ? 'none' : foreign.join(', ')}.

import type { Item } from '../../ealch-v2/src/content/schema.ts';

export const PREPOSITIONS_TEMPS_ROWS: Record<string, Item> = {
`;

  // `itemLiteral` already ends its literal with a comma.
  const body = rows.map((r) => `  '${String(r.id)}': ${itemLiteral(r)}`).join('\n');

  const footer = `
};

/** What the database said, so a guard can compare a repair against the read
 *  rather than against a second copy of the same string. An empty string is a
 *  row that had no respelling at all and gets one from RESPELL_ADDITIONS. */
export const STORED_RESPELL: Record<string, string> = {
${rows.map((r) => `  '${String(r.id)}': ${JSON.stringify(String(r.respell ?? ''))},`).join('\n')}
};

/** Re-measured on every regeneration. A figure the lesson prints comes from
 *  here rather than from a constant somebody typed. */
export const MEASURED = {
  ilYaRows: ${ilTotal.rows[0].n},
  ilYaExistence: ${ilExist.rows[0].n},
  ilYaAgo: ${ilAgo.rows[0].n},
  ilYaAgoBare: ${ilAgoBare.rows[0].n},
  depuisSentences: ${dep.rows[0].total},
  depuisWithACompound: ${dep.rows[0].compound},
  pendantSentences: ${pen.rows[0].total},
  pendantWithACompound: ${pen.rows[0].compound},
  depuisSentencesWithARespelling: ${(cards.rows as Record<string, number>[]).find((r) => String(r.w) === 'depuis')?.respelled ?? 0},
  blockCountAtRead: ${now},
} as const;
`;

  writeFileSync(OUT, header + body + footer, 'utf8');
  console.log(`wrote ${OUT}`);
  console.log(`  ${rows.length} rows, ${new Set(rows.map((r) => String(r.theme))).size} themes`);
  console.log(`  il y a: ${ilTotal.rows[0].n} rows, ${ilExist.rows[0].n} existence, ${ilAgo.rows[0].n} ago (${ilAgoBare.rows[0].n} bare)`);
  console.log(`  depuis ${dep.rows[0].compound}/${dep.rows[0].total} beside a past, pendant ${pen.rows[0].compound}/${pen.rows[0].total}, ratio ${(penRatio / depRatio).toFixed(2)}x`);
  console.log(`  corpus file claims depuis ${DEPUIS_EVIDENCE.depuisWithACompound}/${DEPUIS_EVIDENCE.depuisSentences}, pendant ${DEPUIS_EVIDENCE.pendantWithACompound}/${DEPUIS_EVIDENCE.pendantSentences}`);
  console.log(`  fr.a2.prepositions-essentielles: ${now} rows (was ${ROW_COUNT_BEFORE} before this build)`);
  console.log(`  NOT_REPAIRED still broken: ${stillBroken.length}/${NOT_REPAIRED.length}`);

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
