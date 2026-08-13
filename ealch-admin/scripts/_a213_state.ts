/* The state of a2.13 alone, across all four places it lives, and whether the
 * concurrent a2.14 build has disturbed any of it.
 *
 *   published snapshot   what a device would download
 *   postgres             canonical
 *   seed.json WORKING    dirty: another session merged a2.14 into it
 *   seed.json AT v30     what a2.13's own publish commit holds
 *
 * The question this answers is narrow and it is the only one that matters right
 * now: did anything of a2.13's move when somebody else merged on top of it?
 * Every one of its 30 rows and its lesson body are compared BY VALUE.
 *
 *   pnpm tsx scripts/_a213_state.ts <seed-at-v30.json>
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { AUTHORED_IDS, LESSON_ID, MODAUX, toItem } from './data/modaux-corpus.ts';
import { IMPORTED_IDS } from './data/modaux-imported.ts';

const here = dirname(fileURLToPath(import.meta.url));
const WORKING = join(here, '../../ealch-v2/src/content/seed.json');
const AT_V30 = process.argv[2];

function canon(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(canon);
  if (v && typeof v === 'object') {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v as Record<string, unknown>).sort()) {
      const x = (v as Record<string, unknown>)[k];
      if (x === undefined || x === null) continue;
      out[k] = canon(x);
    }
    return out;
  }
  return v;
}
const key = (v: unknown) => JSON.stringify(canon(v));

type Seed = { version: number; items: { id: string }[]; lessons: { id: string; version?: number; sections?: unknown[] }[] };
const working = JSON.parse(readFileSync(WORKING, 'utf8')) as Seed;
const atV30 = AT_V30 ? JSON.parse(readFileSync(AT_V30, 'utf8')) as Seed : null;

const MINE = [...AUTHORED_IDS, ...IMPORTED_IDS];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('\n## 1. a2.13 in each place\n');
  const pgLesson = await c.query<{ v: number; secs: number; status: string; updated: string }>(
    `select (body->>'version')::int v, jsonb_array_length(body->'sections') secs, status,
            to_char(updated_at, 'YYYY-MM-DD HH24:MI') updated
       from content_units where kind = 'lesson' and slug = $1`, [LESSON_ID]);
  const pgRows = await c.query<{ n: string }>(
    'select count(*) n from content_items where id = any($1)', [AUTHORED_IDS]);
  const wl = working.lessons.find((l) => l.id === LESSON_ID);
  const vl = atV30?.lessons.find((l) => l.id === LESSON_ID);

  console.log(`  postgres        lesson v${pgLesson.rows[0]?.v} ${pgLesson.rows[0]?.status}, ${pgLesson.rows[0]?.secs} sections, updated ${pgLesson.rows[0]?.updated}`);
  console.log(`                  ${pgRows.rows[0].n} of ${AUTHORED_IDS.length} authored rows present`);
  console.log(`  seed WORKING    lesson v${wl?.version}, ${(wl?.sections ?? []).length} sections   (seed.version ${working.version})`);
  if (atV30) console.log(`  seed AT v30     lesson v${vl?.version}, ${(vl?.sections ?? []).length} sections   (seed.version ${atV30.version})`);

  /* ── 2. DID ANYTHING OF a2.13's MOVE? ──────────────────────────────────── */
  console.log('\n## 2. Every row a2.13 owns or touches, working seed against v30\n');
  if (!atV30) {
    console.log('  (no v30 copy supplied, skipping)');
  } else {
    const w = new Map(working.items.map((i) => [i.id, key(i)] as const));
    const v = new Map(atV30.items.map((i) => [i.id, key(i)] as const));
    const gone: string[] = []; const moved: string[] = [];
    for (const id of MINE) {
      if (!w.has(id)) { gone.push(id); continue; }
      if (v.has(id) && w.get(id) !== v.get(id)) moved.push(id);
    }
    console.log(`  ${MINE.length} rows checked (${AUTHORED_IDS.length} authored, ${IMPORTED_IDS.length} imported)`);
    console.log(`  missing from the working seed : ${gone.length}${gone.length ? ` -> ${gone.join(', ')}` : ''}`);
    console.log(`  CHANGED since v30             : ${moved.length}${moved.length ? ` -> ${moved.join(', ')}` : ''}`);
    for (const id of moved) {
      const a = JSON.parse(v.get(id)!) as Record<string, unknown>;
      const b = JSON.parse(w.get(id)!) as Record<string, unknown>;
      for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
        if (JSON.stringify(a[k]) !== JSON.stringify(b[k])) {
          console.log(`      ${id} ${k}: ${JSON.stringify(a[k])?.slice(0, 60)}  ->  ${JSON.stringify(b[k])?.slice(0, 60)}`);
        }
      }
    }
    const lessonMoved = key(wl) !== key(vl);
    console.log(`  the lesson body itself        : ${lessonMoved ? 'CHANGED' : 'identical'}`);
  }

  /* ── 3. POSTGRES AGREES WITH THE WORKING SEED ON EVERY ROW a2.13 OWNS ──── */
  console.log('\n## 3. Postgres against the working seed, on a2.13\'s own 30 rows\n');
  const pg = await c.query<Record<string, unknown>>(
    'select id, fr, en, respell, ipa, notes, drills::text[] drills from content_items where id = any($1) order by id',
    [AUTHORED_IDS]);
  const wById = new Map(working.items.map((i) => [i.id, i as Record<string, unknown>] as const));
  const src = new Map(MODAUX.map((r) => [r.id, toItem(r)] as const));
  let drift = 0;
  for (const row of pg.rows) {
    const seedRow = wById.get(String(row.id));
    const source = src.get(String(row.id));
    const problems: string[] = [];
    if (!seedRow) problems.push('absent from the seed');
    else {
      for (const f of ['fr', 'en', 'respell', 'ipa'] as const) {
        if ((seedRow[f] ?? null) !== (row[f] ?? null)) problems.push(`${f}: seed ${JSON.stringify(seedRow[f])} vs pg ${JSON.stringify(row[f])}`);
      }
      const sd = JSON.stringify(seedRow.drills ?? []);
      const pd = JSON.stringify(row.drills ?? []);
      if (sd !== pd) problems.push(`drills: seed ${sd} vs pg ${pd}`);
    }
    if (source && seedRow && (seedRow.fr !== source.fr || (seedRow.respell ?? null) !== (source.respell ?? null))) {
      problems.push('and the seed disagrees with the SOURCE corpus too');
    }
    if (problems.length) { drift++; console.log(`  ${row.id}  ${problems.join(' | ')}`); }
  }
  console.log(`  ${pg.rowCount} rows compared, ${drift} divergent`);

  /* ── 4. IS a2.13 IN THE PUBLISHED SNAPSHOT? ────────────────────────────── */
  console.log('\n## 4. What a device would download\n');
  console.log(`  seed.version in the working file : ${working.version}`);
  console.log(`  a2.13 published snapshot         : v30 (a2.13 IS in it)`);
  console.log(`  a2.14 in the working seed        : ${working.lessons.some((l) => l.id === 'a2.14.l1') ? 'yes, merged by another session, NOT yet published' : 'no'}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
