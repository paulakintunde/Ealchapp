import './env';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

/** Is the seed/DB disagreement ONLY the version field? */
async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8'));
  const r = await c.query(`select slug, body from content_units where kind='lesson'`);
  const db = new Map(r.rows.map((x) => [x.slug, x.body]));

  const norm = (o: Record<string, unknown>) => {
    const copy = { ...o };
    delete copy.version;
    return createHash('md5').update(JSON.stringify(copy)).digest('hex');
  };

  let versionOnly = 0; let identical = 0; const real: string[] = [];
  for (const l of seed.lessons as Record<string, unknown>[]) {
    const d = db.get(l.id as string);
    if (!d) { real.push(`${l.id}: not in Postgres`); continue; }
    if (JSON.stringify(l) === JSON.stringify(d)) { identical++; continue; }
    if (norm(l) === norm(d)) { versionOnly++; continue; }
    real.push(`${l.id}: bodies differ beyond the version field`);
  }
  console.log(`  identical            ${identical}`);
  console.log(`  differ by VERSION ONLY ${versionOnly}`);
  console.log(`  differ for real      ${real.length}`);
  for (const x of real) console.log(`    ${x}`);

  const seedOnly = (seed.lessons as { id: string }[]).filter((l) => !db.has(l.id));
  console.log(`\n  SEED-ONLY lessons a publish would delete: ${seedOnly.length ? seedOnly.map((l) => l.id).join(', ') : 'none'}`);
  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
