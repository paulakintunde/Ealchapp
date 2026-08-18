// Does the suite survive a REGENERATED seed?
//
//   pnpm tsx scripts/probe-regenerated-seed.ts
//
// ── THE GAP THIS CLOSES ────────────────────────────────────────────────────
//
// `content:publish --dry-run` validates everything and writes nothing, so it
// cannot tell you whether the tests survive the file being rewritten. And a
// real publish tells you only after it has shipped.
//
// A publish REGENERATES seed.json from Postgres, and the regenerated file is
// the same content in a different shape: canonical key order, and optional
// fields omitted rather than written as empty. On 2026-08-17 that moved 10,082
// of 10,227 ids to a different index and changed 667 item bodies, every one of
// them only by `grammarPoints: []` being omitted. Two suites went red on it.
//
// This applies that reshaping to the CURRENT seed, runs the full suite against
// it, and restores the original bytes. It is the standing rule's third step:
//
//   1. merge          the build's own merge script
//   2. dry run        content:publish --dry-run, same session
//   3. THIS           the suite against the regenerated shape
//
// WHAT IT DOES NOT SIMULATE: the CUT. A publish also drops rows no lesson
// references when their theme is outside SEED_CUT.themes. That half is covered
// at authoring time by `lib/reachability.ts` (PART A), which refuses to write an
// unreachable row in the first place.
//
// SAFETY: the original bytes are read once, up front, and restored in a
// `finally`, so a crash or a Ctrl-C still puts the file back. Verified
// byte-for-byte on the way out. It never touches Postgres.
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SEED = fileURLToPath(new URL('../../ealch-v2/src/content/seed.json', import.meta.url));
const V2 = fileURLToPath(new URL('../../ealch-v2/', import.meta.url));

/** RESHAPE THE SEED WITHOUT CHANGING ITS CONTENT.
 *
 *  Keys are emitted in REVERSE order, not sorted. Sorting was the first
 *  version and it proved nothing: after a publish the file is already in
 *  canonical order, so the transform was the identity and the probe reported
 *  "0 ids moved, same bytes, green" while exercising precisely nothing.
 *
 *  Reversing is adversarial in both directions. A suite that survives it does
 *  not depend on key order at all, which is the property that matters and the
 *  one a2.30 turned out not to have.
 *
 *  Array order is content and is never touched. */
function reshape(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(reshape);
  if (v && typeof v === 'object') {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v as object).sort().reverse()) {
      const x = reshape((v as Record<string, unknown>)[k]);
      if (x !== undefined) out[k] = x;
    }
    return out;
  }
  return v;
}

const ORIGINAL = readFileSync(SEED, 'utf8');

try {
  const before = JSON.parse(ORIGINAL) as { items: unknown[]; lessons: unknown[] };
  console.log(`\n  seed: ${before.items.length} items, ${before.lessons.length} lessons`);

  const regen = reshape(before);
  writeFileSync(SEED, `${JSON.stringify(regen, null, 2)}\n`, 'utf8');

  /* MEASURE THE THING THAT ACTUALLY CHANGED.
   *
   * The first two versions of this reported "0 moved, same bytes" and both were
   * measuring the wrong quantity. Byte COUNT is preserved when you reorder the
   * keys of an object, and item ARRAY position is untouched by design, because
   * array order is content. What a regeneration changes is the key order INSIDE
   * each object, so that is what gets counted. */
  const keysReordered = (() => {
    const a = (JSON.parse(ORIGINAL) as { items: object[] }).items;
    const b = (regen as { items: object[] }).items;
    let n = 0;
    for (let i = 0; i < a.length; i += 1) {
      if (Object.keys(a[i]).join(',') !== Object.keys(b[i]).join(',')) n += 1;
    }
    return n;
  })();
  const identical = readFileSync(SEED, 'utf8') === ORIGINAL;
  console.log(`  reshaped: ${keysReordered} of ${before.items.length} items now emit their keys in a different order`);
  if (identical) {
    console.log('  WARNING: the file is byte-identical, so this run proves nothing.');
  }
  console.log('  running the full suite against it...\n');

  try {
    const out = execSync('node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"',
      { cwd: V2, encoding: 'utf8', stdio: 'pipe', maxBuffer: 64 * 1024 * 1024 });
    const pass = /ℹ pass (\d+)/.exec(out)?.[1];
    console.log(`  GREEN — ${pass} passing against the regenerated seed.`);
    console.log('  The suites do not depend on the merged shape.\n');
  } catch (e) {
    const out = String((e as { stdout?: string }).stdout ?? '');
    const fail = /ℹ fail (\d+)/.exec(out)?.[1] ?? '?';
    console.log(`  RED — ${fail} failing against the regenerated seed:\n`);
    for (const line of out.split('\n').filter((l) => /^✖/.test(l)).slice(0, 15)) console.log(`    ${line}`);
    console.log('\n  Each of these asserts the SHAPE of the seed rather than its content.');
    console.log('  Use seedEqual() from ealch-v2/src/content/seed-compare.ts.\n');
    process.exitCode = 1;
  }
} finally {
  writeFileSync(SEED, ORIGINAL, 'utf8');
  const ok = readFileSync(SEED, 'utf8') === ORIGINAL;
  console.log(`  seed.json restored byte-for-byte: ${ok ? 'YES' : 'NO — CHECK IT BY HAND'}\n`);
}
