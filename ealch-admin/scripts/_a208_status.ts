// Status across every copy: Postgres, seed.json, the published snapshot.
// Git is read separately. Covers a2.08 and the five lessons built before it.
import './env';
import { readFileSync } from 'node:fs';

const LESSONS = ['a2.08.l1', 'a2.32.l1', 'a2.31.l1', 'a2.30.l1', 'a2.29.l1', 'a2.28.l1'];

async function main() {
  const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'));
  const seedLessons = new Map(seed.lessons.map((l: { id: string; version?: number }) => [l.id, l]));

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const pg = await c.query<{ slug: string; status: string; body: Record<string, unknown>; updated_at: string }>(
      `select slug, status, body, updated_at from content_units where kind='lesson' and slug = any($1::text[])`, [LESSONS]);
    const pgBy = new Map(pg.rows.map((r) => [r.slug, r]));

    // The published snapshots.
    const snaps = await c.query<{ version: number; path: string; counts: Record<string,number>; published_at: string }>(
      `select version, path, checksum, counts, published_at from content_snapshots order by version desc limit 3`);

    console.log(`seed.json      version ${seed.version}   ${seed.lessons.length} lessons   ${seed.items.length} items`);
    for (const s of snaps.rows) {
      console.log();
    }
    const live = snaps.rows[0];
    const liveLessonCount = live?.counts?.lessons ?? 0;

    console.log('\nlesson      PG            seed          published(v' + live?.version + ')');
    for (const id of LESSONS) {
      const p = pgBy.get(id);
      const sl = seedLessons.get(id) as { version?: number } | undefined;
      const pv = (p?.body as { version?: number } | undefined)?.version;
      const pgCell = p ? `${p.status} v${pv}` : 'ABSENT';
      const seedCell = sl ? `present v${sl.version}` : 'ABSENT';
      const pubCell = 'see snapshot count';
      const agree = p && sl && pv === sl.version;
      console.log(`${id.padEnd(11)} ${pgCell.padEnd(13)} ${seedCell.padEnd(13)} ${pubCell.padEnd(10)} ${agree ? 'PG=seed' : 'PG/seed DIFFER'}`);
    }

    // Body equality, not just version equality.
    console.log('\nbody comparison PG vs seed (JSON, key-order independent):');
    const norm = (v: unknown): unknown => {
      if (Array.isArray(v)) return v.map(norm);
      if (v && typeof v === 'object') {
        return Object.fromEntries(Object.entries(v as Record<string, unknown>).sort(([a], [b]) => a.localeCompare(b)).map(([k, x]) => [k, norm(x)]));
      }
      return v;
    };
    for (const id of LESSONS) {
      const p = pgBy.get(id);
      const sl = seedLessons.get(id);
      if (!p || !sl) { console.log(`  ${id.padEnd(11)} cannot compare`); continue; }
      const same = JSON.stringify(norm(p.body)) === JSON.stringify(norm(sl));
      console.log(`  ${id.padEnd(11)} ${same ? 'IDENTICAL' : 'DIFFER'}`);
    }
  } finally {
    c.release();
    await pool.end();
  }
}
main();
