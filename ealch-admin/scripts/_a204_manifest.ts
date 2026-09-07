/* Regenerates data/prepositions-lieu-rows.gen.ts, the recorded read behind a2.04.
 *
 * THIRTY-SEVEN ROWS IMPORTED OUT OF EIGHTEEN THEMES, AND TWELVE READ AND
 * REFUSED.
 *
 * NOT ONE HEADWORD IS AUTHORED. Every noun and every person this lesson names
 * already exists, which is corrections §2 holding for the tenth build in a row.
 * What does NOT exist is the PHRASE: 283 published rows hold `chez`, twenty of
 * them carry a respelling, six of those twenty carry the banned U+203F tie, and
 * « chez le médecin » — the commonest chez phrase in the language, in
 * twenty-two published sentences — has never reached a card. a2.13 §1: the
 * corpus is rich in evidence and poor in cards, and the two are not the same
 * thing.
 *
 * ── THE MEASUREMENT THE LESSON RESTS ON ───────────────────────────────────
 *
 * The corpus NEVER puts chez in front of a place. Every published row holding
 * the word was read and the word after it enumerated: le(59), nous(38),
 * moi(34), mes(16), lui(16), elle(13) and a long tail of possessives and proper
 * names, and not one place noun among them. A targeted query for chez in front
 * of sixteen building nouns returns zero rows at any status.
 *
 * This generator re-runs that query on every run, so the day somebody publishes
 * « chez la boulangerie » the build fails rather than the lesson quietly
 * teaching a rule its own corpus breaks.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying U+203F UNDERTIE in its respelling, which draws as a low
 *   underscore on a Pixel 6. SIX of this lesson's candidates carry one,
 *   including the only card-ready « chez elle » and the only card-ready
 *   « aux États-Unis » sentence.
 * A row with NO respelling, because a row is imported for its respelling.
 * A row whose `fr` is not the string the corpus file claims it is.
 * A row inside this build's id block that this build does not own.
 * A row whose respelling was READ OFF for a repair and no longer holds it.
 * Any of the four UNSEEN words appearing in the import list, because they are
 *   the four answers to the generalisation drill and importing one deletes its
 *   question.
 *
 * GENDER IS NOT REFUSED HERE, and it is in every other manifest in this band.
 * a2.17 and a2.16 refuse a gendered row because a gendered single-word row
 * joins a1.03's measured ending population, and an adjective or an adverb never
 * needs one. THIS lesson's subject is nouns: `le médecin`, `la boulangerie` and
 * `la gare` are gendered and have to be. They are IMPORTED, so they are already
 * in that population and importing them moves nothing; what would move it is
 * AUTHORING one, and the corpus file authors zero headwords and the batch
 * proves the population is unchanged through the real function.
 *
 *     pnpm tsx scripts/_a204_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  ALL_REPAIRS, EXPECTED_IMPORTED, ID_BLOCK, IMPORTED, NOT_REPAIRED,
  READ_NOT_IMPORTED, RESPELL_ADDITIONS, ROW_COUNT_BEFORE, UNSEEN_WORDS, isMine,
} from './data/prepositions-lieu-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/prepositions-lieu-rows.gen.ts');

const TIE = '‿';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

async function main() {
  const c = await pool.connect();

  const ids = IMPORTED.map((i) => i.id);
  if (ids.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${ids.length} rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
  if (new Set(ids).size !== ids.length) die('IMPORTED holds a duplicate id.');

  const res = await c.query(`select * from content_items where id = any($1) order by id`, [ids]);
  const rows = res.rows as Record<string, unknown>[];

  const found = new Set(rows.map((r) => String(r.id)));
  for (const id of ids) if (!found.has(id)) die(`${id} is in IMPORTED and not in the database.`);

  for (const r of rows) {
    const id = String(r.id);
    const claimed = IMPORTED.find((i) => i.id === id)!;
    const unknown = unknownPopulatedColumns(r);
    if (unknown.length) die(`${id} has populated columns this generator does not classify: ${unknown.join(', ')}`);
    if (r.fr !== claimed.fr) die(`${id} says fr="${String(r.fr)}" and the corpus file claims "${claimed.fr}".`);
    if (!r.respell) die(`${id} has no respelling and a row is imported for its respelling.`);
    if (String(r.respell).includes(TIE)) die(`${id} carries U+203F in its respelling and it draws as an underscore on a phone.`);
    if (r.status !== 'published') die(`${id} is ${String(r.status)} rather than published.`);
    if (isMine(id)) die(`${id} is inside this build's id block and is being imported rather than authored.`);
  }

  // The four generalisation answers must not be imported under any id.
  for (const row of rows) {
    for (const w of UNSEEN_WORDS) {
      if (String(row.fr).toLowerCase() === w.toLowerCase()) {
        die(`${String(row.id)} is "${w}", which is one of the four answers to the generalisation drill.`);
      }
    }
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

  // ── NOT_REPAIRED must still be broken, or it has been fixed by somebody ───
  const nr = await c.query(`select id, respell from content_items where id = any($1)`, [NOT_REPAIRED.map((x) => x.id)]);
  const stillBroken: string[] = [];
  for (const x of NOT_REPAIRED) {
    const row = (nr.rows as Record<string, string>[]).find((r) => r.id === x.id);
    if (row && row.respell === x.respell) stillBroken.push(x.id);
  }

  // ── THE MEASUREMENT: does the corpus ever put chez before a place? ────────
  const bad = await c.query(
    `select id, fr, status from content_items
      where fr ~* $q$\ychez\s+(le|la|les|un|une|l['’])\s*(boulangerie|banque|poste|restaurant|cinema|cinéma|gare|ecole|école|magasin|hopital|hôpital|pharmacie|maison|bureau|parc|musee|musée|hotel|hôtel|piscine|marche|marché)\y$q$`,
  );
  if (bad.rowCount) {
    die(`THE CORPUS NOW PUTS chez IN FRONT OF A PLACE, in ${bad.rowCount} row(s): `
      + (bad.rows as Record<string, string>[]).map((r) => `${r.id} "${r.fr}"`).join(', ')
      + '. a2.04 teaches that this never happens and its guard is absolute. Either the row is wrong or the lesson is.');
  }

  const chezTotal = await c.query(`select count(*)::int as n from content_items where status = 'published' and fr ~* '\\ychez\\y'`);
  const chezCard = await c.query(`select count(*)::int as n from content_items where status = 'published' and respell is not null and fr ~* '\\ychez\\y'`);

  // ── The block ────────────────────────────────────────────────────────────
  const block = await c.query(
    `select count(*)::int as n from content_items where id like 'fr.a2.prepositions-essentielles.%'`,
  );
  const inBlock = await c.query(
    `select id from content_items where id like 'fr.a2.prepositions-essentielles.%' order by id`,
  );
  const foreign = (inBlock.rows as Record<string, string>[]).map((r) => r.id).filter((id) => isMine(id));

  const now = Number(block.rows[0].n);

  const header = `// A RECORDED READ OF POSTGRES. Generated by scripts/_a204_manifest.ts.
// DO NOT EDIT BY HAND. Re-run the generator instead.
//
// ${rows.length} rows imported out of ${new Set(rows.map((r) => String(r.theme))).size} themes.
// ${READ_NOT_IMPORTED.length} rows read and refused; see READ_NOT_IMPORTED in the corpus file.
// ${ALL_REPAIRS.length} respellings repaired, ${RESPELL_ADDITIONS.length} supplied.
// ${NOT_REPAIRED.length} rows found broken and left alone; ${stillBroken.length} of them still are.
//
// THE MEASUREMENT, RE-RUN ON EVERY REGENERATION:
//   ${chezTotal.rows[0].n} published rows hold \`chez\`
//   ${chezCard.rows[0].n} of them carry a respelling and can reach a card
//   ${bad.rowCount} of them put it in front of a place
//
// THE BLOCK: fr.a2.prepositions-essentielles held ${ROW_COUNT_BEFORE} rows before this
// build and holds ${now} now. Rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that
// this build does not own: ${foreign.length === 0 ? 'none' : foreign.join(', ')}.

import type { Item } from '../../ealch-v2/src/content/schema.ts';

export const PREPOSITIONS_LIEU_ROWS: Record<string, Item> = {
`;

  // `itemLiteral` already ends its literal with a comma.
  const body = rows.map((r) => `  '${String(r.id)}': ${itemLiteral(r)}`).join('\n');

  const footer = `
};

/** What the database said, so a guard can compare a repair against the read
 *  rather than against a second copy of the same string. */
export const STORED_RESPELL: Record<string, string> = {
${rows.map((r) => `  '${String(r.id)}': ${JSON.stringify(String(r.respell))},`).join('\n')}
};

/** Re-measured on every regeneration. */
export const MEASURED = {
  chezRows: ${chezTotal.rows[0].n},
  chezCardReady: ${chezCard.rows[0].n},
  chezBeforeAPlace: ${bad.rowCount},
  blockCountAtRead: ${now},
} as const;
`;

  writeFileSync(OUT, header + body + footer, 'utf8');
  console.log(`wrote ${OUT}`);
  console.log(`  ${rows.length} rows, ${new Set(rows.map((r) => String(r.theme))).size} themes`);
  console.log(`  chez: ${chezTotal.rows[0].n} published, ${chezCard.rows[0].n} card-ready, ${bad.rowCount} before a place`);
  console.log(`  fr.a2.prepositions-essentielles: ${now} rows (was ${ROW_COUNT_BEFORE} before this build)`);
  console.log(`  rows inside the block this build does not own: ${foreign.length === 0 ? 'none' : foreign.join(', ')}`);
  console.log(`  NOT_REPAIRED still broken: ${stillBroken.length}/${NOT_REPAIRED.length}`);

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
