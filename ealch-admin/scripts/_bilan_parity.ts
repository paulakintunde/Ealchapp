// Does the a1.30 unit agree between Postgres and seed.json?
//
// check-seed-db-parity.ts answers this for the whole seed and is currently red
// on THREE pre-existing problems that have nothing to do with a1.30. This
// narrows the same question to the unit that was just written, so "the bilan is
// fine and the blocker is elsewhere" is a measured claim rather than a reading
// of somebody else's failure list.
//
// Reads only.
//
//   pnpm tsx scripts/_bilan_parity.ts

import './env';
import { describeTarget } from './env';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Lesson } from '../../ealch-v2/src/content/schema.ts';

/** Stable stringify: jsonb does not preserve key order (it stores keys sorted
 *  by length then bytewise), so a round-tripped lesson comes back with its keys
 *  rearranged and a plain JSON.stringify comparison reports drift on content
 *  that is identical. Arrays keep their order, which is the part that carries
 *  meaning here: round order, section order, option order. */
function canonical(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(canonical);
  if (v && typeof v === 'object') {
    return Object.fromEntries(
      Object.keys(v as Record<string, unknown>)
        .sort()
        .map((k) => [k, canonical((v as Record<string, unknown>)[k])]),
    );
  }
  return v;
}
const same = (a: unknown, b: unknown) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  lessons: Lesson[];
  units: { id: string }[];
};

// Wrapped in main(): these scripts transpile to cjs, where top-level await is
// a build error rather than a runtime one.
async function main() {
const { Pool } = await import('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
const client = await pool.connect();

console.log(`\n→ ${describeTarget()}\n`);
let bad = 0;

try {
  for (const id of ['a1.30.l1', 'a1.30.l2']) {
    const r = await client.query(
      `select body from content_units where kind = 'lesson' and slug = $1`,
      [id],
    );
    const db = r.rows[0]?.body;
    const sd = seed.lessons.find((l) => l.id === id);
    if (!db) { bad++; console.log(`  ✖ ${id} missing from postgres`); continue; }
    if (!sd) { bad++; console.log(`  ✖ ${id} missing from seed.json`); continue; }
    const identical = same(db, sd);
    if (!identical) bad++;
    console.log(
      `  ${identical ? '✓' : '✖'} ${id.padEnd(9)} db ${db.sections.length} sections / seed ${sd.sections.length} sections` +
      `  ${identical ? 'identical' : 'DRIFTED'}`,
    );
  }

  const u = await client.query(
    `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'a1.30'`,
  );
  const su = seed.units.find((x) => x.id === 'a1.30');
  const unitSame = same(u.rows[0]?.body, su);
  if (!unitSame) bad++;
  console.log(`  ${unitSame ? '✓' : '✖'} unit a1.30  ${unitSame ? 'identical' : 'DRIFTED'}`);

  // Nothing else should have moved. A stray a1.30.l3 would render as a card.
  const all = await client.query(
    `select slug from content_units where kind = 'lesson' and slug like 'a1.30.%' order by slug`,
  );
  const slugs = all.rows.map((r) => r.slug);
  const expected = ['a1.30.l1', 'a1.30.l2'];
  if (slugs.join() !== expected.join()) {
    bad++;
    console.log(`  ✖ a1.30 lesson rows are ${JSON.stringify(slugs)}, expected ${JSON.stringify(expected)}`);
  } else {
    console.log(`  ✓ exactly two a1.30 lesson rows`);
  }

  console.log(bad ? `\n✖ a1.30 does NOT agree (${bad})\n` : '\n✓ a1.30 agrees between postgres and seed.json\n');
} finally {
  client.release();
  await pool.end();
}

process.exit(bad ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
