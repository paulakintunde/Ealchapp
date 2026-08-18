// What is left: units with no lesson, and lessons that exist but are not live.
import './env';
import { downloadFromStorage } from './snapshot-utils.ts';
async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const units = await c.query<{ body: { id: string; seq: number; title: string; level: string; lessonIds?: string[] } }>(
      "select body from content_units where kind='curriculum_unit'");
    const empty = units.rows.map((r) => r.body).filter((u) => !(u.lessonIds ?? []).length)
      .sort((a, b) => String(a.level).localeCompare(String(b.level)) || a.seq - b.seq);
    console.log(`\n=== UNITS WITH NO LESSON (${empty.length}) ===`);
    for (const u of empty) console.log(`  ${String(u.level).padEnd(5)} seq ${String(u.seq).padStart(2)}  ${u.id.padEnd(7)} ${u.title}`);

    const lessons = await c.query<{ slug: string; status: string }>(
      "select slug, status from content_units where kind='lesson'");
    const url = process.env.SUPABASE_URL; const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const m = JSON.parse(await downloadFromStorage(url!, key!, 'manifest.json')) as Record<string, unknown>;
    const snap = JSON.parse(await downloadFromStorage(url!, key!, String(m.path))) as { lessons: { id: string }[] };
    const live = new Set(snap.lessons.map((l) => l.id));
    const notLive = lessons.rows.filter((l) => !live.has(l.slug));
    console.log(`\n=== IN POSTGRES, NOT IN THE LIVE SNAPSHOT v${m.version} (${notLive.length}) ===`);
    for (const l of notLive) console.log(`  ${l.slug.padEnd(12)} ${l.status}`);
    console.log(`\n  PG lessons ${lessons.rows.length}   live ${snap.lessons.length}   rollout ${m.rollout ?? 100}%`);
  } finally { c.release(); await pool.end(); }
}
main();
