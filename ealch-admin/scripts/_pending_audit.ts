/* WHAT IS WHERE: Postgres vs the committed seed vs the LIVE snapshot.
 *
 * Three copies drift, and "pending" means a different thing for each pair:
 *   in Postgres, not in the snapshot   -> authored and UNPUBLISHED
 *   in the snapshot, not in Postgres   -> shipped and since unpublished/removed
 *   in the seed,   not in the snapshot -> merged and unpublished (the usual case)
 *
 *   pnpm tsx scripts/_pending_audit.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { downloadFromStorage } from './snapshot-utils.ts';

const here = dirname(fileURLToPath(import.meta.url));

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.error('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY'); process.exit(1); }

  const manifest = JSON.parse(await downloadFromStorage(url, key, 'manifest.json')) as
    { version: number; path: string; rollout?: number };
  const snap = JSON.parse(await downloadFromStorage(url, key, manifest.path)) as
    { version: number; lessons: { id: string; version?: number }[]; items: { id: string }[] };

  const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as
    { version: number; lessons: { id: string; version?: number }[]; items: { id: string }[] };

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  const dbL = await pool.query<{ id: string; version: number; status: string }>(
    "select body->>'id' id, (body->>'version')::int version, status from content_units where kind='lesson' order by 1");
  const dbI = await pool.query<{ n: string }>(
    "select count(*) n from content_items where status='published'");

  console.log(`\n  LIVE     v${manifest.version} at ${manifest.rollout ?? 100}%   ${snap.lessons.length} lessons, ${snap.items.length} items`);
  console.log(`  SEED     v${seed.version}                ${seed.lessons.length} lessons, ${seed.items.length} items`);
  console.log(`  POSTGRES                        ${dbL.rows.filter((r) => r.status === 'published').length} published lessons, ${dbI.rows[0].n} published items`);

  const snapL = new Map(snap.lessons.map((l) => [l.id, l.version ?? 0]));
  const seedL = new Map(seed.lessons.map((l) => [l.id, l.version ?? 0]));

  console.log('\n  ── AUTHORED AND UNPUBLISHED (in Postgres, not on the wire) ──');
  let n = 0;
  for (const r of dbL.rows) {
    if (r.status !== 'published') continue;
    if (!snapL.has(r.id)) { console.log(`    ${r.id.padEnd(12)} v${r.version}   NOT in v${manifest.version}          ${seedL.has(r.id) ? 'merged into the seed' : 'NOT in the seed either'}`); n += 1; }
    else if (snapL.get(r.id) !== r.version) { console.log(`    ${r.id.padEnd(12)} db v${r.version} vs wire v${snapL.get(r.id)}   body has moved since the publish`); n += 1; }
  }
  if (!n) console.log('    (none — the wire matches Postgres)');

  console.log('\n  ── IN THE SEED BUT NOT ON THE WIRE ──');
  let m = 0;
  for (const [id, v] of seedL) {
    if (!snapL.has(id)) { console.log(`    ${id.padEnd(12)} seed v${v}   absent from v${manifest.version}`); m += 1; }
    else if (snapL.get(id) !== v) { console.log(`    ${id.padEnd(12)} seed v${v} vs wire v${snapL.get(id)}`); m += 1; }
  }
  if (!m) console.log('    (none)');

  console.log('\n  ── NOT PUBLISHED IN POSTGRES (excluded from every publish) ──');
  const held = dbL.rows.filter((r) => r.status !== 'published');
  if (held.length) for (const r of held) console.log(`    ${r.id.padEnd(12)} v${r.version}   status=${r.status}`);
  else console.log('    (none)');

  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
