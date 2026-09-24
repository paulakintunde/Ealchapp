// sons.01.l1, sons.02.l1, sons.03.l1, sons.04.l1 — acts, section ids and
// deckTranche — merge into ealch-v2/src/content/seed.json. Phase 07.1, D-31.
//
//   pnpm tsx scripts/merge-sons-acts-into-seed.ts
//
// Reads the three patched fields FROM POSTGRES, not from the data module, so
// the seed can never run ahead of the database — `author-sons-acts-batch.ts`
// must have applied first, or this refuses. Patches only
// `sections[i].id`, `acts` and `deckTranche` on the same four lessons the
// batch touched; nothing else in any of the four lesson bodies, and nothing
// elsewhere in the seed.
//
// NEVER discard or revert seed.json with git to undo this. Other authors are
// in that file (a B1 wave was mid-flight when this was written) and
// reverting it discards their uncommitted lessons. Re-run this merge
// instead.
//
// DO NOT hand-bump seed.version. It is the OTA snapshot number and belongs to
// the publish step, which is not part of this build.
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { SONS_ACTS } from './data/sons-acts.ts';
import { validateLesson, type Lesson } from '../../ealch-v2/src/content/schema.ts';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

const LESSON_IDS = Object.keys(SONS_ACTS) as (keyof typeof SONS_ACTS)[];

type Seed = { version: number; lessons: Lesson[]; [k: string]: unknown };

async function main() {
  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
  console.log(`\n  seed v${seed.version}: ${seed.lessons.length} lessons`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  let fromDb: Map<string, Lesson & Record<string, unknown>>;
  try {
    const r = await c.query<{ id: string; body: Lesson & Record<string, unknown> }>(
      "select slug as id, body from content_units where kind='lesson' and slug = any($1::text[])",
      [LESSON_IDS],
    );
    const missing = LESSON_IDS.filter((id) => !r.rows.some((x) => x.id === id));
    if (missing.length) die(`${missing.length} lesson(s) not in Postgres at all: ${missing.join(', ')}. Run \`pnpm content:sons-acts\` FIRST.`);

    fromDb = new Map(r.rows.map((x) => [x.id, x.body]));
    for (const id of LESSON_IDS) {
      const plan = SONS_ACTS[id];
      const body = fromDb.get(id)!;
      if (!Array.isArray(body.acts) || body.acts.length !== plan.acts.length) {
        die(`${id} in Postgres does not yet carry the ${plan.acts.length} acts this build expects. Run \`pnpm content:sons-acts\` FIRST.`);
      }
      if (!Array.isArray(body.deckTranche) || body.deckTranche.length !== plan.deckTranche.length) {
        die(`${id} in Postgres does not yet carry a matching deckTranche. Run \`pnpm content:sons-acts\` FIRST.`);
      }
      const idsInDb = (body.sections as { id?: string }[]).map((s) => s.id);
      if (JSON.stringify(idsInDb) !== JSON.stringify(plan.sectionIds)) {
        die(`${id} in Postgres carries different section ids than this build expects. Run \`pnpm content:sons-acts\` FIRST.`);
      }
    }
  } finally {
    c.release();
    await pool.end();
  }

  // Upsert the same three fields onto the seed's copy of each lesson. Not
  // sorted, and not rewritten when unchanged — a merge that reorders or
  // touches an already-correct lesson body produces an unreviewable diff on
  // a file several builds are writing to concurrently (the house rule, per
  // every other merge-*-into-seed.ts in this repo).
  const orderInsensitiveEqual = (a: unknown, b: unknown): boolean => {
    if (a === b) return true;
    if (Array.isArray(a) || Array.isArray(b)) {
      if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
      return a.every((x, i) => orderInsensitiveEqual(x, b[i]));
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const ka = Object.keys(a as object), kb = Object.keys(b as object);
      if (ka.length !== kb.length) return false;
      return ka.every((k) => k in (b as object)
        && orderInsensitiveEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]));
    }
    return false;
  };

  let touched = 0;
  for (const id of LESSON_IDS) {
    const plan = SONS_ACTS[id];
    const li = seed.lessons.findIndex((l) => l.id === id);
    if (li < 0) die(`${id} is not in the seed at all — this build only patches an existing lesson`);
    const shipped = seed.lessons[li] as Lesson & Record<string, unknown>;

    if (!Array.isArray(shipped.sections) || shipped.sections.length !== plan.sectionIds.length) {
      die(`${id} in the seed has ${Array.isArray(shipped.sections) ? shipped.sections.length : 'no'} sections; this build is index-keyed to ${plan.sectionIds.length}.`);
    }
    const originalVersion = shipped.version;

    const patched: Lesson & Record<string, unknown> = JSON.parse(JSON.stringify(shipped));
    patched.sections = (patched.sections as Record<string, unknown>[]).map((s, i) => ({ ...s, id: plan.sectionIds[i] }));
    patched.acts = plan.acts;
    patched.deckTranche = plan.deckTranche;

    if (patched.version !== originalVersion) die(`${id}: merge would move version from ${originalVersion} to ${patched.version} — refusing (D-25)`);

    const issues = validateLesson(patched, id);
    if (issues.length) die(`${id} fails validateLesson after merging into the seed:\n${issues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);

    if (orderInsensitiveEqual(shipped, patched)) {
      console.log(`  ${id} already matches; left untouched (no key-order churn)`);
      continue;
    }
    seed.lessons[li] = patched;
    touched++;
    console.log(`  ${id} merged: ${plan.acts.length} acts, deckTranche [${plan.deckTranche.map((t) => t.length).join(',')}], version unchanged at ${patched.version}`);
  }

  if (!touched) {
    console.log('\n  nothing to write; the seed already matches Postgres for all four lessons.\n');
    return;
  }

  const before = readFileSync(SEED, 'utf8');
  writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
  const after = readFileSync(SEED, 'utf8');
  console.log(`\n  seed.json byte delta: ${before.length} -> ${after.length} (${after.length - before.length >= 0 ? '+' : ''}${after.length - before.length})`);

  // READ BACK AND PROVE IT.
  const reread = JSON.parse(after) as Seed;
  for (const id of LESSON_IDS) {
    const plan = SONS_ACTS[id];
    const l = reread.lessons.find((x) => x.id === id) as Lesson & Record<string, unknown>;
    if (!l) die(`${id} is missing from the seed after the write`);
    const idsBack = (l.sections as { id?: string }[]).map((s) => s.id);
    if (JSON.stringify(idsBack) !== JSON.stringify(plan.sectionIds)) die(`${id} reads back the wrong section ids`);
    if ((l.acts as unknown[]).length !== plan.acts.length) die(`${id} reads back the wrong act count`);
    const issues = validateLesson(l, id);
    if (issues.length) die(`${id} reads back failing validateLesson:\n${issues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);
  }
  console.log(`  read-back clean for: ${LESSON_IDS.join(', ')}`);
  console.log(`  seed.version left at ${reread.version} (the publish step owns it)\n`);
}

main();
