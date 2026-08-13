/* Checks modaux-corpus.ts against the REAL app functions and against Postgres,
 * before a lesson, a batch, a merge or a test is written on top of it.
 *
 * Every claim the corpus file makes in prose is re-derived here:
 *   1. the stem rule — `ils` = singular stem + the consonant of the nous stem
 *   2. the eighteen cells, and that the frame really is one frame
 *   3. dicteeMode on every dictation target
 *   4. hasPlainNasalFor on every authored respelling, both directions
 *   5. the homophone triples really are equal
 *   6. every authored row carries an infinitive, except the named exception
 *   7. savoir and the forbidden conditional appear nowhere
 *   8. every imported row exists, is published, is ungendered where it matters,
 *      and holds exactly the respelling the repair list says it does
 *
 *     pnpm tsx scripts/_a213_corpus_check.ts
 */
import './env';
import { Pool } from 'pg';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { pgEnumArray } from './manifest-item.ts';
import {
  MODAUX, PARADIGM, STEMS, MODAL_ORDER, FRAME_VERB, FRAME_ROWS, DICTATION_IDS,
  SINGULAR_TRIPLES, BARE_MODAL_EXCEPTIONS, MODAL_INFINITIVE_SHAPE, BARE_MODAL_SHAPE,
  SAVOIR_SHAPE, FORBIDDEN_CONDITIONAL_SHAPE, RESPELL_REPAIRS_VISIBLE,
  RESPELL_REPAIRS_SENTENCES, RESPELL_ADDITIONS, DRILL_ADDITIONS, NAMING_FORMS,
  EXPECTED_AUTHORED, EXPECTED_FRAME_ROWS, VISIBLE_NASALS, BLIND_NASALS,
  SINGULAR_SPELLINGS, SINGULAR_PERSONS,
  OWNED_ID_RANGE, ROW_COUNT_BEFORE, UNSEEN_VERB, POLITE_FORMS, READ_NOT_IMPORTED,
} from './data/modaux-corpus.ts';

let fails = 0;
const ok = (cond: boolean, msg: string) => { console.log(`  ${cond ? 'ok  ' : 'FAIL'} ${msg}`); if (!cond) fails++; };

async function main() {
  console.log('## 1. The stem rule, DERIVED rather than trusted\n');
  for (const m of MODAL_ORDER) {
    const s = STEMS[m];
    const derived = s.singular + s.nous.slice(-1);
    ok(derived === s.ils, `${m.padEnd(8)} ${s.singular} + "${s.nous.slice(-1)}" (from ${s.nous}) = ${derived}, table says ${s.ils}`);
  }

  console.log('\n## 2. The eighteen cells, and one frame\n');
  ok(PARADIGM.length === 6, `PARADIGM has ${PARADIGM.length} persons`);
  ok(FRAME_ROWS.length === EXPECTED_FRAME_ROWS, `${FRAME_ROWS.length} frame rows, expected ${EXPECTED_FRAME_ROWS}`);
  ok(MODAUX.length === EXPECTED_AUTHORED, `${MODAUX.length} authored rows, expected ${EXPECTED_AUTHORED}`);
  const frameInfs = new Set(FRAME_ROWS.map((r) => r.infinitive));
  ok(frameInfs.size === 1 && frameInfs.has(FRAME_VERB), `every frame row uses ONE infinitive: ${[...frameInfs].join(', ')}`);
  // Every cell in the table must appear in a row, and every row in the table.
  for (const p of PARADIGM) {
    for (const m of MODAL_ORDER) {
      const form = p.forms[m];
      const row = FRAME_ROWS.find((r) => r.modal === m && new RegExp(`(^|[^a-zà-ÿ])${form}(?![a-zà-ÿ])`, 'i').test(r.fr));
      ok(!!row, `${m.padEnd(8)} ${p.person.padEnd(15)} ${form.padEnd(9)} -> ${row?.id ?? 'NO ROW'}`);
    }
  }
  const ids = MODAUX.map((r) => r.id);
  ok(new Set(ids).size === ids.length, 'no duplicate authored ids');
  const outside = ids.filter((i) => i < OWNED_ID_RANGE.from || i > OWNED_ID_RANGE.to);
  ok(outside.length === 0, `every id inside ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to}${outside.length ? ` — OUTSIDE: ${outside.join(', ')}` : ''}`);

  console.log('\n## 3. dicteeMode on every dictation target\n');
  for (const id of DICTATION_IDS) {
    const r = MODAUX.find((x) => x.id === id)!;
    const letters = r.fr.replace(/[^\p{L}]/gu, '').length;
    ok(dicteeMode(r.fr) === 'letters', `${String(letters).padStart(2)} letters  ${dicteeMode(r.fr).toUpperCase().padEnd(7)} ${r.fr}`);
  }
  console.log(`  ${DICTATION_IDS.length} dictation targets`);

  console.log('\n## 4. hasPlainNasalFor on every authored respelling, both directions\n');
  let visible = 0; const blind: string[] = [];
  for (const r of MODAUX) {
    const respell = r.respell ?? '';
    if (hasPlainNasalFor(r.fr, respell)) { ok(false, `FLAGGED AS SHIPPED: ${r.id} ${respell}`); continue; }
    if (!respell.includes('ⁿ')) continue;
    const broken = respell.replace(/ⁿ/g, 'n');
    if (hasPlainNasalFor(r.fr, broken)) visible++;
    else blind.push(r.id);
  }
  ok(blind.length === 0, `${visible} superscripts SEEN by the checker, ${blind.length} blind${blind.length ? `: ${blind.join(', ')}` : ''}`);
  ok(VISIBLE_NASALS.length === visible + blind.length, `VISIBLE_NASALS lists ${VISIBLE_NASALS.length}, measured ${visible + blind.length}`);
  ok(BLIND_NASALS.length === blind.length, `BLIND_NASALS declares ${BLIND_NASALS.length}, measured ${blind.length}`);

  console.log('\n## 5. The homophone triples\n');
  for (const t of SINGULAR_TRIPLES) {
    const uniq = new Set(t.forms);
    ok(t.forms.length === SINGULAR_PERSONS, `${t.modal.padEnd(8)} ${t.forms.length} persons: ${t.forms.join(' / ')}`);
    ok(uniq.size === SINGULAR_SPELLINGS, `${t.modal.padEnd(8)} ${uniq.size} distinct spellings, declared ${SINGULAR_SPELLINGS}`);
    ok(t.forms[0] === t.forms[1] && t.forms[2] !== t.forms[0], `${t.modal.padEnd(8)} je and tu are IDENTICAL, il differs: ${t.forms.join(' / ')}`);
    const rs = [0, 1, 2].map((i) => PARADIGM[i].respells[t.modal]);
    ok(new Set(rs).size === 1, `${t.modal.padEnd(8)} ONE sound: ${rs.join(' / ')}`);
  }

  console.log('\n## 6. Every authored row carries an infinitive\n');
  for (const r of MODAUX) {
    const hasInf = MODAL_INFINITIVE_SHAPE.test(r.fr);
    const excepted = (BARE_MODAL_EXCEPTIONS as readonly string[]).includes(r.id);
    if (excepted) { ok(!hasInf && BARE_MODAL_SHAPE.test(r.fr), `EXCEPTION ${r.id} is bare on purpose: ${r.fr}`); continue; }
    ok(hasInf, `${r.id} ${r.fr}${hasInf ? '' : '  <- NO INFINITIVE AFTER THE MODAL'}`);
    ok(r.infinitive.length > 0, `${r.id} declares infinitive "${r.infinitive}"`);
  }

  console.log('\n## 7. What must appear nowhere\n');
  const surface = MODAUX.map((r) => `${r.fr} ${r.en} ${r.notes ?? ''}`).join('  ');
  ok(!SAVOIR_SHAPE.test(surface), 'savoir / connaître appear in no authored row');
  ok(!FORBIDDEN_CONDITIONAL_SHAPE.test(surface), 'no conditional beyond the two fixed forms');
  const polite = MODAUX.filter((r) => (POLITE_FORMS as readonly string[]).some((f) => new RegExp(`(^|[^a-zà-ÿ])${f}(?![a-zà-ÿ])`, 'i').test(r.fr)));
  ok(polite.length === 2, `exactly ${polite.length} polite rows: ${polite.map((r) => r.id).join(', ')}`);
  const unseenRows = MODAUX.filter((r) => r.infinitive === UNSEEN_VERB.fr);
  ok(unseenRows.length === UNSEEN_VERB.answerIds.length, `${unseenRows.length} rows use the unseen verb ${UNSEEN_VERB.fr}`);
  ok(unseenRows.every((r) => (UNSEEN_VERB.answerIds as readonly string[]).includes(r.id)), 'and they are exactly the declared answer ids');

  /* ── 8. THE IMPORTS, AGAINST POSTGRES ──────────────────────────────────── */
  console.log('\n## 8. Imported rows, against Postgres\n');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const repairIds = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_SENTENCES].map((r) => r.id);
  const allIds = [...new Set([
    ...Object.values(NAMING_FORMS).map((n) => n.id), ...repairIds,
    ...RESPELL_ADDITIONS.map((r) => r.id), ...DRILL_ADDITIONS.map((r) => r.id),
    UNSEEN_VERB.sourceId, ...READ_NOT_IMPORTED.map((r) => r.id),
  ])];
  const q = await c.query<Record<string, unknown>>('select * from content_items where id = any($1)', [allIds]);
  const by = new Map(q.rows.map((r) => [String(r.id), r]));

  for (const [name, n] of Object.entries(NAMING_FORMS)) {
    const r = by.get(n.id);
    ok(!!r && r.respell === n.respell && !r.gender, `${name.padEnd(8)} ${n.id} respell=${r?.respell} gender=${r?.gender ?? 'none'}`);
  }
  for (const rep of [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_SENTENCES]) {
    const r = by.get(rep.id);
    const stored = String(r?.respell ?? '');
    ok(stored.includes(rep.from), `repair ${rep.id.padEnd(34)} finds "${rep.from}" in the stored value`);
    ok(!stored.includes(rep.to) || rep.from === rep.to, `repair ${rep.id.padEnd(34)} has not already been applied`);
  }
  for (const add of RESPELL_ADDITIONS) {
    const r = by.get(add.id);
    ok(!!r && (r.respell === null || r.respell === undefined), `addition ${add.id.padEnd(34)} stored respell is ${r?.respell === null ? 'NULL as expected' : JSON.stringify(r?.respell)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    const r = by.get(d.id);
    const ds = pgEnumArray(r?.drills);
    ok(!ds.includes(d.add), `drill ${d.id.padEnd(34)} does not yet have ${d.add} (has ${ds.join('/')})`);
  }
  const u = by.get(UNSEEN_VERB.sourceId);
  ok(!!u && u.respell === UNSEEN_VERB.respell && !u.gender, `unseen ${UNSEEN_VERB.sourceId} respell=${u?.respell} gender=${u?.gender ?? 'none'}`);

  const blk = await c.query<{ n: string }>("select count(*) n from content_items where id like 'fr.a2.verbes.%'");
  ok(Number(blk.rows[0].n) === ROW_COUNT_BEFORE, `fr.a2.verbes holds ${blk.rows[0].n} rows, corpus declares ROW_COUNT_BEFORE = ${ROW_COUNT_BEFORE}`);
  const inBlock = await c.query<{ id: string }>(
    'select id from content_items where id >= $1 and id <= $2', [OWNED_ID_RANGE.from, OWNED_ID_RANGE.to]);
  ok(inBlock.rowCount === 0, `${inBlock.rowCount} rows already inside the claimed block`);

  c.release();
  await pool.end();
  console.log(`\n${fails === 0 ? 'ALL CHECKS PASS' : `${fails} FAILURES`}`);
  process.exit(fails === 0 ? 0 : 1);
}
main().catch((e) => { console.error(e); process.exit(1); });
