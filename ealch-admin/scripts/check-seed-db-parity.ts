// Does seed.json agree with Postgres? Run this BEFORE anything that publishes.
//
// ── Why ─────────────────────────────────────────────────────────────────────
//
// seed.json and Postgres are two copies of the same content and they drift.
// `pnpm content:publish` regenerates the seed FROM the database, so any lesson
// that exists only in the seed is silently deleted by a publish. That has cost
// real work twice:
//
//   2026-07-31  sons.03.l1 published from a stale database: 20 sections -> 6,
//               and five lessons lost their `overview` block.
//   2026-08-03  sons.07.l1 (elision) was written to the seed by one process and
//               erased by someone else's publish. It survived only because its
//               source files were intact.
//
// Both were findable in advance by the same question: does every lesson in the
// seed exist in the database, and the reverse? Nobody asked it, because asking
// it meant writing this script. So here it is.
//
// It reads. It never writes, and it takes no flags that would let it.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/check-seed-db-parity.ts
//
// Exit 0 = the two agree and a publish is safe.
// Exit 1 = they diverge; the report names which side each lesson is missing
//          from, and a publish would destroy the seed-only ones.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import type { Lesson } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

type Seed = { lessons: Lesson[]; items: { id: string }[]; units: { id: string; lessonIds?: string[] }[] };

/** A cheap shape fingerprint. Not a deep equality check: the seed is a
 *  PROJECTION of the database (publish-content withholds provenance columns),
 *  so a byte comparison would always differ. What matters is whether the two
 *  sides carry the same TEACHING: same section count, same section types in
 *  the same order, same item count, same quiz size. A drift in any of those is
 *  a real divergence, and the ones that bit us were all visible at this
 *  resolution (20 sections -> 6). */
function shape(l: Lesson): string {
  const quizzes = l.sections
    .filter((s) => s.type === 'quiz')
    .map((s) => {
      const q = s as { questions?: unknown[]; rounds?: { questions?: unknown[] }[] };
      return q.rounds?.length ? q.rounds.reduce((n, r) => n + (r.questions?.length ?? 0), 0) : (q.questions?.length ?? 0);
    });
  return [
    `v${l.version}`,
    `${l.sections.length}sec`,
    `${l.itemIds.length}items`,
    `quiz:${quizzes.join('+') || 'none'}`,
    `acts:${(l as Lesson & { acts?: unknown[] }).acts?.length ?? 0}`,
    l.overview ? 'overview' : 'no-overview',
    l.sections.map((s) => s.type).join('>'),
  ].join(' ');
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    console.error('\n✗ No DATABASE_URL. Parity can only be checked against the canonical database.\n');
    process.exit(1);
  }

  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const res = await client.query<{ slug: string; status: string; body: Lesson }>(
      `select slug, status, body from content_units where kind = 'lesson'`,
    );

    const dbById = new Map(res.rows.map((r) => [r.body?.id ?? r.slug, r]));
    const seedById = new Map(seed.lessons.map((l) => [l.id, l]));

    const seedOnly = [...seedById.keys()].filter((id) => !dbById.has(id)).sort();
    const dbOnly = [...dbById.keys()].filter((id) => !seedById.has(id)).sort();
    const both = [...seedById.keys()].filter((id) => dbById.has(id)).sort();

    const drifted: { id: string; seed: string; db: string }[] = [];
    for (const id of both) {
      const s = shape(seedById.get(id)!);
      const d = shape(dbById.get(id)!.body);
      if (s !== d) drifted.push({ id, seed: s, db: d });
    }

    const unpublished = res.rows.filter((r) => r.status !== 'published').map((r) => `${r.slug} (${r.status})`);

    console.log(`\n  seed.json:  ${seed.lessons.length} lessons, ${seed.items.length} items`);
    console.log(`  postgres:   ${res.rows.length} lessons`);
    console.log(`  in both:    ${both.length}`);

    if (seedOnly.length) {
      console.log(`\n  ✗ SEED ONLY (a publish would DELETE these):`);
      for (const id of seedOnly) {
        const l = seedById.get(id)!;
        console.log(`      ${id}  ${l.sections.length} sections, ${l.itemIds.length} items`);
      }
    }
    if (dbOnly.length) {
      console.log(`\n  ! DATABASE ONLY (absent from the seed, so no learner has them):`);
      for (const id of dbOnly) console.log(`      ${id}`);
    }
    if (drifted.length) {
      console.log(`\n  ✗ SHAPE DRIFT (present in both, teaching a different lesson):`);
      for (const d of drifted) {
        console.log(`      ${d.id}`);
        console.log(`        seed: ${d.seed}`);
        console.log(`        db:   ${d.db}`);
      }
    }
    if (unpublished.length) {
      console.log(`\n  ! NOT PUBLISHED in the database: ${unpublished.join(', ')}`);
    }

    const bad = seedOnly.length + drifted.length;
    if (bad === 0 && dbOnly.length === 0) {
      console.log('\n✓ seed.json and Postgres agree. A publish is safe.\n');
      return;
    }
    if (bad === 0) {
      console.log('\n✓ Nothing in the seed is at risk from a publish. The database-only lessons above would be ADDED by one.\n');
      return;
    }
    console.error(
      `\n✗ The two copies disagree. Apply the missing lessons to Postgres BEFORE publishing,` +
      `\n  or a publish will regenerate the seed without them.\n`,
    );
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
