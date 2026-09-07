// Which published rows does the seed cut DROP, per theme?
//
//   pnpm tsx scripts/audit-seed-drops.ts                    the usual suspects
//   pnpm tsx scripts/audit-seed-drops.ts internet,ecole     specific themes
//   pnpm tsx scripts/audit-seed-drops.ts --all              every theme with a drop
//
// WHY THIS EXISTS. `seed.json` is written by two different things that produce
// the same content in a different shape:
//
//   merge-<name>-into-seed.ts   appends rows in place, keeps key order
//   publish-content.ts          REGENERATES from Postgres, and applies the cut
//
// The cut keeps a row only if a lesson references it OR its theme is in
// `SEED_CUT.themes`. Everything else is OTA-only: published, shipped in the
// snapshot, absent from the offline binary. That is by design and it is a large
// number — hundreds per theme.
//
// It became worth a tool on 2026-08-17, when v51 was the first publish in a
// week and dropped `fr.a2.hebergement.086` from inside an authored block that
// `a2-29-hotel.test.ts` was COUNTING. The row was referenced by no lesson,
// which doctrine §E already forbids; the test had been masking it by asserting
// seed presence.
//
// So: a drop is normal. A drop INSIDE AN AUTHORED BLOCK is a defect, and the
// companion tool `audit-block-reachability.ts` is the one that finds those.
//
// Full plan: ealch-admin/SEED-IS-GENERATED-FIX-PLAN.md
import './env';
import { readFileSync } from 'node:fs';

const DEFAULT_THEMES = [
  'au-restaurant', 'courses', 'argent-quotidien', 'transports-quotidiens',
  'symptomes', 'hebergement', 'metiers', 'ecole', 'internet', 'pronoms-essentiels',
  'comparaisons',
];

async function main() {
  const arg = process.argv[2];
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8')) as
      { items: { id: string }[]; version: number };
    const inSeed = new Set(seed.items.map((i) => i.id));

    const themes = !arg || arg === '--all'
      ? (await c.query<{ theme: string }>(
        "select distinct theme from content_items where status='published' order by theme")).rows.map((r) => r.theme)
      : arg.split(',');

    console.log(`\n  seed v${seed.version}, ${seed.items.length} items\n`);
    console.log('  theme                      published   in seed   DROPPED (OTA-only)');
    let totalPub = 0; let totalSeed = 0;
    for (const t of themes) {
      const rows = (await c.query<{ id: string }>(
        "select id from content_items where theme=$1 and status='published'", [t])).rows.map((r) => r.id);
      if (!rows.length) continue;
      const kept = rows.filter((id) => inSeed.has(id)).length;
      const dropped = rows.length - kept;
      totalPub += rows.length; totalSeed += kept;
      if (arg === '--all' && dropped === 0) continue;
      const note = dropped === 0 ? '  <- whole theme is in SEED_CUT.themes' : '';
      console.log(`  ${t.padEnd(26)} ${String(rows.length).padStart(6)}   ${String(kept).padStart(7)}   ${String(dropped).padStart(7)}${note}`);
    }
    console.log(`\n  totals: ${totalPub} published, ${totalSeed} in the seed, ${totalPub - totalSeed} OTA-only`);
    console.log('\n  A DROP IS NOT A DEFECT. A drop inside an authored block a test counts IS.');
    console.log('  Run audit-block-reachability.ts for that.\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
