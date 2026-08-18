// Is every row in an authored block REACHABLE from a lesson?
//
//   pnpm tsx scripts/audit-block-reachability.ts comparaisons 133 163
//   pnpm tsx scripts/audit-block-reachability.ts hebergement 74 132 a2
//   pnpm tsx scripts/audit-block-reachability.ts --all
//
// Doctrine §E: every item must be reachable — named by a section, or released
// by a deckTranche and carrying a `flashcard` drill. An unreachable row is
// invisible to a learner, is DROPPED by the publish cut when its theme is not
// in `SEED_CUT.themes`, and takes any seed-based block count down with it.
//
// This is the check that would have caught `fr.a2.hebergement.086` before it
// shipped. a2.29 authored it, no lesson referenced it, 33 green guards said
// nothing, and it surfaced only when v51 regenerated the seed and
// `a2-29-hotel.test.ts` went red on `MINE.length === 59`.
//
// RUN IT BEFORE A PUBLISH, not after. The proper home for this logic is the
// authoring batch (see PART A of the fix plan); this tool is how you audit what
// has already shipped.
//
// Full plan: ealch-admin/SEED-IS-GENERATED-FIX-PLAN.md
import './env';
import { readFileSync } from 'node:fs';

const ITEM_ID = /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/;

/** Every corpus id any lesson or unit in the seed can put in front of a
 *  learner: itemIds, deckTranche slices, section strings and drill lists. A
 *  plain string walk, because a row is reachable if ANY of those names it. */
function referencedIds(seed: { lessons: unknown; units: unknown }): Set<string> {
  const out = new Set<string>();
  const walk = (v: unknown): void => {
    if (typeof v === 'string') { if (ITEM_ID.test(v)) out.add(v); return; }
    if (Array.isArray(v)) { v.forEach(walk); return; }
    if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(seed.lessons); walk(seed.units);
  return out;
}

const BLOCKS: [string, string, number, number, string][] = [
  ['a2.07', 'au-restaurant', 132, 199, 'a2'],
  ['a2.26', 'courses', 168, 239, 'a2'],
  ['a2.27', 'transports-quotidiens', 135, 206, 'a2'],
  ['a2.28', 'symptomes', 194, 265, 'a2'],
  ['a2.29', 'hebergement', 74, 132, 'a2'],
  ['a2.30', 'metiers', 10, 81, 'a2'],
  ['a2.31', 'ecole', 16, 87, 'a2'],
  ['a2.32', 'internet', 182, 253, 'a2'],
  ['a2.08', 'comparaisons', 133, 163, 'a2'],
];

async function main() {
  const [a, b, c2, d] = process.argv.slice(2);
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8')) as
      { lessons: unknown; units: unknown; items: { id: string }[] };
    const refs = referencedIds(seed);
    const inSeed = new Set(seed.items.map((i) => i.id));

    const targets: [string, string, number, number, string][] = a === '--all' || !a
      ? BLOCKS
      : [['(arg)', a, Number(b), Number(c2), d ?? 'a2']];

    console.log('\n  unit     theme                    block          rows  reachable  UNREACHABLE');
    let bad = 0;
    for (const [unit, theme, lo, hi, level] of targets) {
      const rows = (await c.query<{ id: string }>(
        "select id from content_items where theme=$1 and level::text=$2 and status='published' order by id",
        [theme, level])).rows
        .map((r) => r.id)
        .filter((id) => { const n = Number(id.split('.').pop()); return n >= lo && n <= hi; });
      const orphans = rows.filter((id) => !refs.has(id));
      bad += orphans.length;
      const detail = orphans.length ? orphans.map((id) => `.${id.split('.').pop()}`).join(', ') : 'none';
      console.log(`  ${unit.padEnd(8)} ${theme.padEnd(24)} .${String(lo).padStart(3, '0')}-.${hi}   ${String(rows.length).padStart(6)}  ${String(rows.length - orphans.length).padStart(9)}  ${detail}`);
      for (const id of orphans) {
        console.log(`             ^ ${id}  ${inSeed.has(id) ? 'still in the seed (its theme is in SEED_CUT)' : 'ALREADY DROPPED from the seed'}`);
      }
    }
    if (bad) {
      console.log(`\n  ${bad} unreachable row(s). Doctrine §E: name it in a section, release it in a`);
      console.log('  deckTranche, or do not author it. Until then any seed-based count of that');
      console.log('  block is one publish away from red.\n');
    } else {
      console.log('\n  every row in every block audited is reachable.\n');
    }
  } finally {
    c.release();
    await pool.end();
  }
}

main();
