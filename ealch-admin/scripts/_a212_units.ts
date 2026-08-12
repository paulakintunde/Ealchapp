/* The unit measurements behind a2.12's cross-lesson claims, kept so the next
 * author can re-run them rather than trusting the build report.
 *
 * A2-BRIEF-CORRECTIONS §7: "no unit owns X" is usually an artifact of the query,
 * because a curriculum unit body holds nine fields and no content manifest. So
 * this prints the WHOLE identity of every unit a2.12 cites, and the answer to
 * the ownership question is read off the canDo rather than off a string search.
 *
 *     pnpm tsx scripts/_a212_units.ts
 */
import './env';
import { Pool } from 'pg';

/** Accent-aware word-boundary search. Invariants §0: substring matching without
 *  a boundary is confidently wrong. The first version of the scan below used a
 *  plain `includes` and reported that a2.27 "names sport" — it is Transportation
 *  and the hit was inside `les transports`. */
const isWord = (ch: string) => /[\p{L}\p{N}'’-]/u.test(ch);
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

/** Every unit a2.12 names on a screen, and why it names it. */
const CITED: [string, string][] = [
  ['a1.06', 'vous êtes and ils sont: two of the seven club members the learner already had'],
  ['a1.07', 'ils ont'],
  ['a2.02', 'ils vont, and the pattern name `what comes next decides`'],
  ['a1.10', 'the five il fait phrases, taught there as one frozen form'],
  ['a2.26', 'the shopping vocabulary this lesson borrows and does not teach'],
  ['a2.13', 'the next lesson on the trail, three more verbs that will not come apart'],
  ['a2.12', 'this unit'],
];

/** Things this lesson stops short of, checked against every unit body. The
 *  search is WEAK by design and the report says so: a unit body has no content
 *  manifest, so a miss proves very little. */
const BOUNDARIES = ['reported', 'discours', 'indirect', 'sport', 'courses'];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const u = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit'",
  );
  const by = new Map(u.rows.map((r) => [String(r.body.id), r.body]));

  console.log('## The units a2.12 cites, byte for byte\n');
  for (const [id, why] of CITED) {
    const b = by.get(id);
    if (!b) { console.log(`  ${id}  NOT IN content_units`); continue; }
    console.log(`  ${id}  seq ${b.seq}  ${JSON.stringify(b.title)}`);
    console.log(`        sub    ${JSON.stringify(b.sub)}`);
    console.log(`        canDo  ${JSON.stringify(b.canDo)}`);
    console.log(`        lessons ${JSON.stringify(b.lessonIds ?? [])}`);
    console.log(`        cited for: ${why}\n`);
  }

  console.log('## Which units name a boundary term at all (a WEAK search, corrections §7)\n');
  for (const needle of BOUNDARIES) {
    const hits = u.rows
      .filter((r) => hasPhrase(JSON.stringify(r.body), needle))
      .map((r) => `${r.body.id}(seq ${r.body.seq})`);
    console.log(`  ${needle.padEnd(10)} ${hits.length ? hits.join(' ') : 'NO UNIT AT ANY LEVEL'}`);
  }
  console.log('\n  Read that table with corrections §7 in hand: a unit body holds nine fields and');
  console.log('  no content manifest, so a miss here is close to meaningless on its own.');

  console.log('\n## Which units rest on a2.12\n');
  const dep = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? 'a2.12' order by 2",
  );
  console.log(`  ${dep.rowCount ? dep.rows.map((r) => `${r.id}(seq ${r.seq})`).join(' ') : 'NONE. a2.12 is a leaf: a2.13, a2.14 and a2.15 all rest on a2.02.'}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
