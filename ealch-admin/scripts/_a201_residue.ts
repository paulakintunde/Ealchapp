/* Did the pre-v2 a2.01.l1 stub actually get wiped, or is any of it still there?
 *
 * Checks Postgres and seed.json for: a second lesson bound to the unit, the old
 * body's section shapes, the old copy strings, and the rows the stub named that
 * the rebuild dropped.
 *
 *     pnpm tsx scripts/_a201_residue.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  version: number;
  items: { id: string; fr: string; theme: string }[];
  lessons: { id: string; unitId: string; version: number; sections: { type: string; id?: string }[]; itemIds: string[]; title: string }[];
  units: { id: string; lessonIds?: string[] }[];
};

/** Copy that existed ONLY in the stub. If any of it survives anywhere, the wipe
 *  was partial. */
const STUB_ONLY = [
  'Verbes réguliers',
  'Les verbes réguliers',
  'This unit has four sub-lessons',
  'Regular -ER Verbs: One Pattern, Thousands of Verbs',
  'Environ 90% des verbes',
  '-ER Verbs — Spelling Quirks',
  'Regular -ER Verbs — The Full System',
  'parl (silent!)',
  'Nous mangeons',
  'a spelling quirk, see sub-lesson 2',
];
/** The stub's six itemIds. .001 to .005 are shared corpus rows and must SURVIVE;
 *  only the stub's use of them was dropped. */
const STUB_ITEM_IDS = [
  'fr.a2.verbes.001', 'fr.a2.verbes.002', 'fr.a2.verbes.003',
  'fr.a2.verbes.004', 'fr.a2.verbes.005', 'fr.a1.dictee.003',
];

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('\n══ POSTGRES ══════════════════════════════════════════════════\n');

  const lessons = await c.query<{ slug: string; status: string; body: Record<string, unknown> }>(
    "select slug, status, body from content_units where kind = 'lesson' and body->>'unitId' = 'a2.01'",
  );
  console.log(`  lessons bound to unit a2.01: ${lessons.rowCount}`);
  for (const r of lessons.rows) {
    const b = r.body as { version?: number; sections?: { type: string }[]; itemIds?: string[]; title?: string; acts?: unknown[] };
    console.log(`    ${r.slug}  status=${r.status}  v${b.version}  ${b.sections?.length} sections  ${b.itemIds?.length} items  acts=${b.acts?.length ?? 0}  title=${JSON.stringify(b.title)}`);
    const kinds = [...new Set((b.sections ?? []).map((s) => s.type))];
    console.log(`      section types: ${kinds.join(', ')}`);
    const noId = (b.sections ?? []).filter((s) => !(s as { id?: string }).id).length;
    console.log(`      sections with NO id (the v1 shape): ${noId}`);
  }

  // Any lesson row that still holds stub copy, whatever its unit.
  console.log('\n  lesson rows anywhere still holding stub-only copy, PER STRING:');
  for (const s of STUB_ONLY) {
    const hit = await c.query<{ slug: string }>(
      "select slug from content_units where kind = 'lesson' and body::text like $1", [`%${s}%`],
    );
    console.log(`    ${JSON.stringify(s).padEnd(52)} ${hit.rowCount ? hit.rows.map((r) => r.slug).join(', ') : '(none)'}`);
  }

  const unit = await c.query<{ body: { lessonIds?: string[] } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'a2.01'",
  );
  console.log(`\n  unit a2.01 lessonIds: ${JSON.stringify(unit.rows[0]?.body?.lessonIds ?? [])}`);

  const stubRows = await c.query<{ id: string; fr: string; status: string }>(
    'select id, fr, status from content_items where id = any($1) order by id', [STUB_ITEM_IDS],
  );
  console.log(`\n  the stub's six corpus rows (these are SHARED and must survive):`);
  for (const r of stubRows.rows) console.log(`    ${r.id.padEnd(22)} ${r.status.padEnd(10)} ${JSON.stringify(r.fr)}`);

  /* THE COPY NO MERGE CAN REACH. `content_snapshots` is what a RELEASE build
     downloads and overlays on top of the bundled seed, and only content:publish
     writes one. Publishing is blocked, so the newest snapshot still holds
     whatever a2.01.l1 looked like when it was cut. */
  const cols = await c.query<{ column_name: string }>(
    "select column_name from information_schema.columns where table_name = 'content_snapshots'",
  );
  const names = cols.rows.map((r) => r.column_name);
  console.log(`\n  content_snapshots columns: ${names.join(', ')}`);
  const versionCol = names.includes('version') ? 'version' : names[0];
  const snaps = await c.query<{ v: string }>(
    `select ${versionCol}::text v from content_snapshots order by ${versionCol} desc limit 3`,
  );
  console.log(`  latest OTA snapshots: ${snaps.rows.map((s) => `v${s.v}`).join(', ') || '(none)'}`);
  const bodyCol = names.find((n) => ['body', 'payload', 'content', 'data', 'seed'].includes(n));
  if (bodyCol) {
    for (const s of snaps.rows) {
      const has = await c.query<{ stub: boolean; rebuilt: boolean }>(
        `select (${bodyCol}::text like '%Verbes réguliers%') stub,
                (${bodyCol}::text like '%Six Forms, And What You Hear%') rebuilt
           from content_snapshots where ${versionCol}::text = $1`, [s.v],
      );
      console.log(`    v${s.v}: holds the STUB? ${has.rows[0]?.stub ? 'YES' : 'no'}   holds the REBUILD? ${has.rows[0]?.rebuilt ? 'yes' : 'NO'}`);
    }
  } else {
    console.log('    (no body-like column found; inspect by hand)');
  }

  console.log('\n══ SEED.JSON ═════════════════════════════════════════════════\n');
  const inSeed = seed.lessons.filter((l) => l.unitId === 'a2.01');
  console.log(`  lessons bound to unit a2.01: ${inSeed.length}`);
  for (const l of inSeed) {
    console.log(`    ${l.id}  v${l.version}  ${l.sections.length} sections  ${l.itemIds.length} items  title=${JSON.stringify(l.title)}`);
    console.log(`      sections with NO id: ${l.sections.filter((s) => !s.id).length}`);
  }
  const seedUnit = seed.units.find((u) => u.id === 'a2.01');
  console.log(`  unit a2.01 lessonIds: ${JSON.stringify(seedUnit?.lessonIds ?? [])}`);

  const all = strings(seed).join('\n');
  const survivors = STUB_ONLY.filter((s) => all.includes(s));
  console.log(`\n  stub-only copy still anywhere in seed.json: ${survivors.length ? survivors.join(' | ') : 'NONE'}`);

  const seedIds = new Set(seed.items.map((i) => i.id));
  console.log(`\n  the stub's six corpus rows, in the seed:`);
  for (const id of STUB_ITEM_IDS) console.log(`    ${id.padEnd(22)} ${seedIds.has(id) ? 'present' : 'ABSENT'}`);

  const dropped = STUB_ITEM_IDS.filter((id) => !inSeed[0]?.itemIds.includes(id));
  console.log(`\n  stub itemIds the rebuild no longer names: ${dropped.join(', ') || '(none)'}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
