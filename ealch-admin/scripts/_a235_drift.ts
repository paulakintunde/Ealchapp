import './env';
import { readFileSync } from 'node:fs';

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8'));

  const r = await c.query(
    `select slug, body->>'version' as v from content_units where kind='lesson'`);
  const db = new Map(r.rows.map((x) => [x.slug, Number(x.v)]));

  let ahead = 0; let behind = 0; let same = 0;
  for (const l of seed.lessons as { id: string; version: number }[]) {
    const d = db.get(l.id);
    if (d === undefined) { console.log(`  ${l.id}  seed v${l.version}  NOT IN POSTGRES`); ahead++; continue; }
    if (d === l.version) { same++; continue; }
    if (l.version > d) { console.log(`  ${l.id}  seed v${l.version} AHEAD of db v${d}   <- a publish would DELETE this`); ahead++; }
    else { console.log(`  ${l.id}  seed v${l.version} behind db v${d}   <- a publish would raise it`); behind++; }
  }
  console.log(`\n  ${same} lesson(s) agree · ${ahead} seed-ahead · ${behind} seed-behind`);
  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
