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
import { dirname, join, resolve } from 'node:path';
import { canonicalJson, type Lesson } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

type Seed = { lessons: Lesson[]; items: { id: string }[]; units: { id: string; lessonIds?: string[] }[] };

/** A cheap shape fingerprint. Not a deep equality check: the seed is a
 *  PROJECTION of the database (publish-content withholds provenance columns),
 *  so a byte comparison would always differ. What matters is whether the two
 *  sides carry the same TEACHING: same section count, same section types in
 *  the same order, same item count, same quiz size. A drift in any of those is
 *  a real divergence, and the ones that bit us were all visible at this
 *  resolution (20 sections -> 6).
 *
 *  NOT SUFFICIENT ON ITS OWN — see contentDrift() below. This fingerprint is
 *  blind to anything that changes a section's CONTENT without changing its
 *  type or the section count, and on 2026-08-09 that hid 80 authored turns. */
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

/** Canonical comparison lives in schema.ts and is shared with the lesson tests,
 *  which hit the same trap from the other direction: Postgres round-trips jsonb
 *  in its own key order, so a plain JSON.stringify marks every section changed.
 *  It produced 10 false positives out of 16 here before the keys were sorted. */
const canonStr = canonicalJson;

/** What shape() cannot see: a section whose type and position are unchanged but
 *  whose CONTENT differs.
 *
 *  ── WHY THIS EXISTS (2026-08-09) ──────────────────────────────────────────
 *  `apply-scenario-alts.ts` added `userEn` and `alts[]` to the turns of the
 *  `scenario` section in 16 lessons, writing seed.json only and leaving "the
 *  database as a separate step" that nobody took. Section count unchanged,
 *  section types unchanged, version unchanged, overview unchanged. shape()
 *  called all 16 identical. 80 authored turns sat one publish away from being
 *  reverted, and the gate that was supposed to catch exactly this reported
 *  green.
 *
 *  The projection caveat on shape() does NOT apply at section level: publish
 *  withholds provenance columns from the lesson and item ROWS, not from the
 *  section bodies. Measured on all 16 drifted lessons, every non-scenario
 *  section compared byte-identical once keys were sorted. So a section-level
 *  comparison is sound, and any difference it reports is a real one.
 *
 *  Direction is the whole point. A publish rewrites the seed FROM the DB:
 *    · DB richer  -> a publish IMPROVES the seed. Informational.
 *    · seed richer -> a publish DESTROYS the difference. Fatal.
 *  Size is a proxy for richness, which is why an equal-size difference is not
 *  waved through: it is reported as unknown-direction and treated as fatal. */
export type SectionDrift = { ix: number; type: string; seedBytes: number; dbBytes: number };
export function contentDrift(s: Lesson, d: Lesson): SectionDrift[] {
  const out: SectionDrift[] = [];
  for (let i = 0; i < Math.min(s.sections.length, d.sections.length); i++) {
    const a = canonStr(s.sections[i]);
    const b = canonStr(d.sections[i]);
    if (a !== b) out.push({ ix: i, type: s.sections[i].type, seedBytes: a.length, dbBytes: b.length });
  }
  return out;
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
    // Content drift is only reported for lessons whose SHAPE already agrees.
    // A shape-drifted lesson is loud enough on its own; repeating it here would
    // bury the quiet class this check exists to surface.
    const seedRicher: { id: string; secs: SectionDrift[] }[] = [];
    const dbRicher: { id: string; secs: SectionDrift[] }[] = [];
    const unknownDir: { id: string; secs: SectionDrift[] }[] = [];
    for (const id of both) {
      const sl = seedById.get(id)!;
      const dl = dbById.get(id)!.body;
      const s = shape(sl);
      const d = shape(dl);
      if (s !== d) {
        drifted.push({ id, seed: s, db: d });
        continue;
      }
      const secs = contentDrift(sl, dl);
      if (!secs.length) continue;
      const seedBytes = secs.reduce((n, x) => n + x.seedBytes, 0);
      const dbBytes = secs.reduce((n, x) => n + x.dbBytes, 0);
      if (seedBytes > dbBytes) seedRicher.push({ id, secs });
      else if (dbBytes > seedBytes) dbRicher.push({ id, secs });
      else unknownDir.push({ id, secs });
    }
    const fmtSecs = (secs: SectionDrift[]) =>
      secs.map((x) => `${x.type}[${x.ix}] ${x.seedBytes}b/${x.dbBytes}b`).join(', ');

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
    if (seedRicher.length) {
      console.log(`\n  ✗ CONTENT DRIFT, SEED RICHER (same shape — a publish would REVERT this):`);
      for (const c of seedRicher) console.log(`      ${c.id}  ${fmtSecs(c.secs)}`);
    }
    if (unknownDir.length) {
      console.log(`\n  ✗ CONTENT DRIFT, DIRECTION UNKNOWN (same shape, same size, different bytes):`);
      for (const c of unknownDir) console.log(`      ${c.id}  ${fmtSecs(c.secs)}`);
    }
    if (dbRicher.length) {
      console.log(`\n  ! content drift, database richer (a publish would bring the seed UP — informational):`);
      for (const c of dbRicher) console.log(`      ${c.id}  ${fmtSecs(c.secs)}`);
    }
    if (unpublished.length) {
      console.log(`\n  ! NOT PUBLISHED in the database: ${unpublished.join(', ')}`);
    }

    const bad = seedOnly.length + drifted.length + seedRicher.length + unknownDir.length;
    if (bad === 0 && dbOnly.length === 0 && dbRicher.length === 0) {
      console.log('\n✓ seed.json and Postgres agree, shape AND content. A publish is safe.\n');
      return;
    }
    if (bad === 0) {
      console.log('\n✓ Nothing in the seed is at risk from a publish. The database-only lessons and the');
      console.log('  database-richer sections above would be ADDED or brought up by one.\n');
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

// Only run when invoked as a script. `contentDrift` is exported so
// they can be exercised directly against a captured body without opening a
// connection — importing this file must not start a parity run.
const invokedDirectly =
  !!process.argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(process.argv[1]);

if (invokedDirectly) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
