import './env';
import { describeTarget } from './env';

async function main() {
const { Pool } = await import('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
const c = await pool.connect();
console.log(describeTarget());

const units = await c.query(
  `select body from content_units where kind='curriculum_unit' and body->>'track'='a2' order by (body->>'seq')::int`);
console.log('\n=== A2 UNITS (' + units.rowCount + ') ===');
for (const r of units.rows) {
  const b = r.body;
  console.log(`seq ${String(b.seq).padStart(2)}  ${b.id.padEnd(6)}  lessons=${JSON.stringify(b.lessonIds ?? [])}  | ${b.title} | ${b.sub}`);
}

const a35 = units.rows.find((r) => r.body.id === 'a2.35');
console.log('\n=== a2.35 FULL ===');
console.log(JSON.stringify(a35 ? a35.body : null, null, 2));

const les = await c.query(
  `select slug, body->>'version' v, jsonb_array_length(body->'sections') secs, status
     from content_units where kind='lesson' and slug like 'a2.%' order by slug`);
console.log('\n=== A2 LESSON ROWS (' + les.rowCount + ') ===');
console.log(les.rows.map((r)=>`${r.slug} v${r.v} ${r.secs}s ${r.status}`).join('  |  '));

c.release(); await pool.end();
}
main().catch((e)=>{console.error(e);process.exit(1);});
