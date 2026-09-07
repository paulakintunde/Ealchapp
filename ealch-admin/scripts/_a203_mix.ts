/* The section-type mix of every shipped A2 lesson, so a2.03 can measure how
 * different it actually is rather than claiming it.
 */
import './env';
import { Pool } from 'pg';

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  const r = await pool.query(
    `select body->>'id' as id, body from content_units
      where kind='lesson' and body->>'id' like 'a2.%' order by 1`);
  const tally: Record<string, number> = {};
  for (const row of r.rows) {
    const secs = (row.body.sections ?? []) as { type: string }[];
    const t: Record<string, number> = {};
    for (const s of secs) { t[s.type] = (t[s.type] ?? 0) + 1; tally[s.type] = (tally[s.type] ?? 0) + 1; }
    console.log(String(row.id).padEnd(10), String(secs.length).padStart(2),
      Object.entries(t).sort((a, b) => b[1] - a[1]).map(([k, v]) => (v > 1 ? `${k}x${v}` : k)).join(' '));
  }
  console.log('\nBATCH 1 TOTAL: ' + Object.entries(tally).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(' '));
  const nLessons = r.rows.length;
  console.log(`\nper-lesson average across ${nLessons} A2 lessons:`);
  for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1]))
    console.log(`  ${k.padEnd(16)} ${(v / nLessons).toFixed(2)}   (in ${r.rows.filter((x: { body: { sections?: { type: string }[] } }) => (x.body.sections ?? []).some((s) => s.type === k)).length}/${nLessons} lessons)`);
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
