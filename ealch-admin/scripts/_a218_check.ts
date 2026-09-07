/* a2.18 corpus self-check. Runs BEFORE the lesson is written, so a row whose
 * dictée flag or respelling is wrong is found while it is still cheap.
 *
 * Everything here runs the REAL app function. Invariants §5: a guard that
 * reimplements the thing it guards is free to drift from it.
 *
 *     pnpm tsx scripts/_a218_check.ts
 */
import './env';
import { Pool } from 'pg';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import {
  ALL_REPAIRS, AUTHORED_IDS, DEPUIS_PAST_MUST_FIRE, DEPUIS_PAST_MUST_NOT_FIRE,
  DEPUIS_PAST_SHAPE, COMPOUND_MUST_FIRE, COMPOUND_MUST_NOT_FIRE, COMPOUND_SHAPE,
  EXPECTED_AUTHORED, EXPECTED_IMPORTED, FUTUR_PROCHE_MUST_FIRE,
  FUTUR_PROCHE_MUST_NOT_FIRE, FUTUR_PROCHE_SHAPE, GRID, GRID_CELL_MAX,
  ID_BLOCK, IMPORTED_IDS, PLACE_MUST_FIRE, PLACE_MUST_NOT_FIRE, PLACE_SHAPE,
  POUR_MUST_FIRE, POUR_MUST_NOT_FIRE, POUR_TIME_SHAPE, PREPOSITIONS_TEMPS,
  PROBLEME_FALSE_POSITIVE, RESPELL_ADDITIONS, ROW_COUNT_BEFORE, THEME, isMine,
} from './data/prepositions-temps-corpus.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const bad: string[] = [];
const note = (s: string) => bad.push(s);

async function main() {
  /* ── 1. dicteeMode, through the real function ─────────────────────────────*/
  console.log('### 1. dicteeMode ON EVERY AUTHORED ROW');
  for (const r of PREPOSITIONS_TEMPS) {
    const mode = dicteeMode(r.fr);
    const has = r.drills.includes('dictation');
    const flag = has && mode !== 'letters' ? '  ✗ HAS dictation AND IS NOT LETTERS'
      : !has && mode === 'letters' ? '  · letters and no dictation drill (deliberate?)' : '';
    console.log(`  ${r.id.slice(-3)} ${mode === 'letters' ? 'LETTERS' : 'words  '} ${String(letterCount(r.fr)).padStart(2)} ${has ? 'D' : ' '} ${r.fr}${flag}`);
    if (has && mode !== 'letters') note(`${r.id} carries dictation and dicteeMode is ${mode}`);
  }

  /* ── 2. the nasal checker over every authored respelling ──────────────────*/
  console.log('\n### 2. hasPlainNasalFor ON EVERY AUTHORED RESPELLING');
  for (const r of PREPOSITIONS_TEMPS) {
    if (hasPlainNasalFor(r.fr, r.respell ?? '')) {
      note(`${r.id} respelling flagged: ${r.respell}`);
      console.log(`  ✗ ${r.id} ${r.fr}  ${r.respell}`);
    }
  }
  console.log('  (nothing above means every authored respelling is clean)');

  /* ── 3. the repairs, all three values through the real function ───────────*/
  console.log('\n### 3. THE REPAIRS');
  for (const r of ALL_REPAIRS) {
    const f = hasPlainNasalFor(r.fr, r.from);
    const h = hasPlainNasalFor(r.fr, r.half);
    const t = hasPlainNasalFor(r.fr, r.to);
    const inv = (r.half !== r.to) === (r.blind || r.house);
    console.log(`  ${r.id.padEnd(32)} from=${f ? 'FLAG' : 'ok  '} half=${h ? 'FLAG' : 'ok  '} to=${t ? 'FLAG' : 'ok  '} blind=${r.blind} house=${r.house} inv=${inv}`);
    if (!r.blind && !f) note(`${r.id} is not blind and its stored value is not flagged`);
    if (r.blind && f) note(`${r.id} is blind and its stored value IS flagged`);
    if (h) note(`${r.id} half is still flagged: ${r.half}`);
    if (t) note(`${r.id} to is flagged: ${r.to}`);
    if (!inv) note(`${r.id} breaks (half !== to) === (blind || house)`);
  }

  /* ── 4. the false positive, asserted as a negative ────────────────────────*/
  console.log('\n### 4. THE problème FALSE POSITIVE');
  const fp = PROBLEME_FALSE_POSITIVE;
  const fpFlag = hasPlainNasalFor(fp.word, fp.flagged);
  const fpClean = hasPlainNasalFor(fp.word, fp.clean);
  console.log(`  ${fp.flagged} flagged=${fpFlag}   ${fp.clean} flagged=${fpClean}`);
  if (!fpFlag) note('PROBLEME_FALSE_POSITIVE.flagged is no longer flagged — the checker improved, update the header');
  if (fpClean) note('PROBLEME_FALSE_POSITIVE.clean is now flagged');

  /* ── 5. the grid, cell widths and shape ───────────────────────────────────*/
  console.log('\n### 5. THE GRID');
  for (const g of GRID) {
    const w = [g.prep, g.tense, g.measures].map((c) => c.length);
    const over = w.some((n) => n > GRID_CELL_MAX);
    console.log(`  ${g.prep.padEnd(9)} ${g.tense.padEnd(11)} ${g.measures.padEnd(12)} widths=${w.join('/')}${over ? '  ✗ OVER ' + GRID_CELL_MAX : ''}  ex="${g.example}"`);
    if (over) note(`grid row ${g.prep} has a cell over ${GRID_CELL_MAX}`);
  }

  /* ── 6. every guard shape, both directions ────────────────────────────────*/
  console.log('\n### 6. THE GUARD SHAPES');
  const shapes: Array<[string, RegExp, readonly string[], readonly string[]]> = [
    ['DEPUIS_PAST', DEPUIS_PAST_SHAPE, DEPUIS_PAST_MUST_FIRE, DEPUIS_PAST_MUST_NOT_FIRE],
    ['COMPOUND', COMPOUND_SHAPE, COMPOUND_MUST_FIRE, COMPOUND_MUST_NOT_FIRE],
    ['FUTUR_PROCHE', FUTUR_PROCHE_SHAPE, FUTUR_PROCHE_MUST_FIRE, FUTUR_PROCHE_MUST_NOT_FIRE],
    ['PLACE', PLACE_SHAPE, PLACE_MUST_FIRE, PLACE_MUST_NOT_FIRE],
    ['POUR_TIME', POUR_TIME_SHAPE, POUR_MUST_FIRE, POUR_MUST_NOT_FIRE],
  ];
  for (const [name, re, must, mustNot] of shapes) {
    const test = (s: string) => { const r = new RegExp(re.source, re.flags.replace('g', '')); return r.test(s); };
    const missed = must.filter((s) => !test(s));
    const wrong = mustNot.filter((s) => test(s));
    console.log(`  ${name.padEnd(14)} must-fire ${must.length - missed.length}/${must.length}   must-not-fire ${mustNot.length - wrong.length}/${mustNot.length}`);
    for (const s of missed) { note(`${name} did not fire on: ${s}`); console.log(`    ✗ did not fire: ${s}`); }
    for (const s of wrong) { note(`${name} fired on: ${s}`); console.log(`    ✗ fired: ${s}`); }
  }

  /* ── 7. the block, the row count, and duplicate fr in the theme ───────────*/
  console.log('\n### 7. POSTGRES');
  const { rows: cnt } = await pool.query(
    `select count(*)::int as n, max(split_part(id,'.',4)::int) as maxid
       from content_items where id like 'fr.a2.prepositions-essentielles.%'`,
  );
  console.log(`  fr.a2.${THEME}: ${cnt[0].n} rows, max .${cnt[0].maxid}   (corpus says ROW_COUNT_BEFORE=${ROW_COUNT_BEFORE})`);
  if (cnt[0].n !== ROW_COUNT_BEFORE) note(`row count is ${cnt[0].n} and the corpus says ${ROW_COUNT_BEFORE}`);

  const { rows: inBlock } = await pool.query(
    `select id, fr from content_items
      where id like 'fr.a2.prepositions-essentielles.%'
        and split_part(id,'.',4)::int between 169 and 208 order by id`,
  );
  console.log(`  rows already inside ${ID_BLOCK.from}..${ID_BLOCK.to}: ${inBlock.length}`);
  for (const r of inBlock) { note(`a foreign row inside the block: ${r.id}`); console.log(`    ✗ ${r.id} ${r.fr}`); }

  const frs = PREPOSITIONS_TEMPS.map((r) => r.fr);
  const { rows: dupes } = await pool.query(
    `select id, fr from content_items where theme = $1 and fr = any($2::text[]) order by id`,
    [THEME, frs],
  );
  console.log(`  authored fr already present in theme "${THEME}": ${dupes.length}`);
  for (const r of dupes) { note(`duplicate fr in theme: ${r.id} "${r.fr}"`); console.log(`    ✗ ${r.id} ${r.fr}`); }

  const { rows: imps } = await pool.query(
    `select id, fr, respell, gender, status from content_items where id = any($1::text[]) order by id`,
    [[...IMPORTED_IDS, ...ALL_REPAIRS.map((r) => r.id), ...RESPELL_ADDITIONS.map((r) => r.id)]],
  );
  const seen = new Set(imps.map((r) => r.id));
  for (const id of IMPORTED_IDS) if (!seen.has(id)) { note(`import missing from Postgres: ${id}`); console.log(`    ✗ missing ${id}`); }
  const gendered = imps.filter((r) => r.gender);
  console.log(`  imported rows carrying a gender: ${gendered.length}   (must be 0 — a2.04 ledger §0)`);
  for (const r of gendered) { note(`imported gendered row: ${r.id}`); console.log(`    ✗ ${r.id} ${r.fr} g=${r.gender}`); }
  const noRespell = imps.filter((r) => IMPORTED_IDS.includes(r.id) && !r.respell
    && !RESPELL_ADDITIONS.some((a) => a.id === r.id));
  for (const r of noRespell) { note(`import with no respelling and no addition: ${r.id}`); console.log(`    ✗ ${r.id}`); }
  const ties = imps.filter((r) => String(r.respell ?? '').includes('‿'));
  for (const r of ties) { note(`import carries U+203F: ${r.id}`); console.log(`    ✗ TIE ${r.id}`); }

  /* ── 8. counts ────────────────────────────────────────────────────────────*/
  console.log('\n### 8. COUNTS');
  console.log(`  authored ${AUTHORED_IDS.length} (expect ${EXPECTED_AUTHORED})   imported ${IMPORTED_IDS.length} (expect ${EXPECTED_IMPORTED})`);
  if (AUTHORED_IDS.length !== EXPECTED_AUTHORED) note(`authored ${AUTHORED_IDS.length} vs EXPECTED_AUTHORED ${EXPECTED_AUTHORED}`);
  if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) note(`imported ${IMPORTED_IDS.length} vs EXPECTED_IMPORTED ${EXPECTED_IMPORTED}`);
  const outside = AUTHORED_IDS.filter((id) => !isMine(id));
  for (const id of outside) { note(`authored id outside the block: ${id}`); console.log(`    ✗ ${id}`); }
  const dupIds = AUTHORED_IDS.filter((id, i) => AUTHORED_IDS.indexOf(id) !== i);
  for (const id of dupIds) note(`duplicate authored id: ${id}`);

  await pool.end();

  console.log('\n────────────────────────────────────────────────────────');
  if (bad.length === 0) { console.log('CLEAN'); return; }
  console.log(`${bad.length} PROBLEM(S):`);
  for (const b of bad) console.log(`  - ${b}`);
  process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
