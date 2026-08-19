// Restore lesson versions bumped for a text-only edit, back to what the last
// publish before them shipped.
//
//   pnpm tsx scripts/restore-version-bumps.ts            analyse, write nothing
//   pnpm tsx scripts/restore-version-bumps.ts --apply    source, then Postgres
//
// WHY: `check-version-bumps.ts` has the full account. Short version: the runtime
// reads `Lesson.version` to decide whether to DISCARD a learner's mission
// checkmarks and lesson XP, and that reset is only warranted when the SECTION
// LIST changes. Forty-five lessons were bumped for text-only edits.
//
// HOW IT AVOIDS A BLIND REGEX SWEEP, which is the part that made me delete an
// earlier version of this script:
//
//   1. lessonId -> source file comes from IMPORTING every `*-lesson.ts` and
//      reading the ids off the exported bodies. Nineteen lessons build their id
//      from a constant, so a literal grep finds only half of them.
//   2. Inside a file, the literal to change is found by MATCHING ITS CURRENT
//      VALUE, not by position. A file holding two lessons at different versions
//      disambiguates itself; a file holding two at the SAME version is reported
//      and skipped rather than guessed at.
//   3. Every edit is verified by re-importing the module in a FRESH process and
//      asserting the version is now the target. Any file that fails is restored
//      from its pre-edit text and the run aborts before touching Postgres.
//
// SEQUENCING. Source and Postgres only. The seed is NOT written here: publish
// regenerates it from the database, so the correct order is restore -> verify ->
// `pnpm content:publish`, which is what makes the snapshot and the seed agree.

import './env';
import { execSync, execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const APPLY = process.argv.includes('--apply');
const BASE = process.argv.find((a) => a.startsWith('--base='))?.slice(7) ?? '45aec8a';
const SEED = 'ealch-v2/src/content/seed.json';
const ROOT = join(import.meta.dirname, '../..');
const DATA = join(import.meta.dirname, 'data');

type Lesson = { id: string; version: number; sections: { id: string }[] };
const h = (o: unknown) => createHash('md5').update(JSON.stringify(o)).digest('hex').slice(0, 10);
const sIds = (l: Lesson) => l.sections.map((s) => s.id).join('|');

async function main() {
  const before = JSON.parse(
    execSync(`git show ${BASE}:${SEED}`, { maxBuffer: 1e9, cwd: ROOT }).toString(),
  ) as { lessons: Lesson[] };
  const seed = JSON.parse(readFileSync(join(ROOT, SEED), 'utf8')) as { lessons: Lesson[] };
  const B = new Map(before.lessons.map((l) => [l.id, l]));

  /* ── 1. Which lessons, and to what ─────────────────────────────────── */
  const fixes: { id: string; from: number; to: number }[] = [];
  for (const now of seed.lessons) {
    const was = B.get(now.id);
    if (!was || h(was) === h(now)) continue;
    if (sIds(was) !== sIds(now)) continue;      // structural: the bump is right
    if (now.version <= was.version) continue;
    fixes.push({ id: now.id, from: now.version, to: was.version });
  }

  /* ── 2. Which file holds each ──────────────────────────────────────── */
  const files = readdirSync(DATA).filter((x) => x.endsWith('-lesson.ts'));
  const owner = new Map<string, string>();
  const inFile = new Map<string, { id: string; version: number }[]>();
  for (const f of files) {
    let mod: Record<string, unknown>;
    try { mod = await import(`./data/${f}`) as Record<string, unknown>; } catch { continue; }
    const bodies: Lesson[] = [];
    for (const v of Object.values(mod)) {
      if (Array.isArray(v)) bodies.push(...(v as Lesson[]));
      else if (v && typeof v === 'object') bodies.push(v as Lesson);
    }
    const mine = bodies.filter((b) => b && typeof b.id === 'string'
      && /^(a[12]|b[12]|sons)\.\d+\.l\d$/.test(b.id) && typeof b.version === 'number');
    for (const b of mine) if (!owner.has(b.id)) owner.set(b.id, f);
    if (mine.length) inFile.set(f, mine.map((b) => ({ id: b.id, version: b.version })));
  }

  const ready: { id: string; from: number; to: number; file: string }[] = [];
  const blocked: string[] = [];
  for (const f of fixes) {
    const file = owner.get(f.id);
    if (!file) { blocked.push(`${f.id}: no source file exports it`); continue; }
    const siblings = (inFile.get(file) ?? []).filter((s) => s.id !== f.id && s.version === f.from);
    if (siblings.length) {
      blocked.push(`${f.id}: ${file} holds ${siblings.map((s) => s.id).join(', ')} at the same version ${f.from}; cannot tell the literals apart`);
      continue;
    }
    ready.push({ ...f, file });
  }

  console.log(`\n  baseline ${BASE}`);
  console.log(`  ${fixes.length} text-only bump(s); ${ready.length} safe to rewrite, ${blocked.length} blocked\n`);
  for (const r of ready) console.log(`  ${r.id.padEnd(12)} v${r.from} -> v${r.to}   ${r.file}`);
  if (blocked.length) { console.log('\n  BLOCKED:'); for (const b of blocked) console.log(`    ${b}`); }

  if (!APPLY) { console.log('\n  DRY RUN. Re-run with --apply.\n'); return; }
  if (blocked.length) { console.error('\n✖ refusing to run with blocked lessons; resolve them by hand first.\n'); process.exit(1); }

  /* ── 3. Rewrite, remembering the original text ─────────────────────── */
  const original = new Map<string, string>();
  for (const r of ready) {
    const path = join(DATA, r.file);
    if (!original.has(path)) original.set(path, readFileSync(path, 'utf8'));
    const txt = readFileSync(path, 'utf8');
    const re = new RegExp(`(\\n\\s*)version: ${r.from},`);
    if (!re.test(txt)) { restore(original); console.error(`\n✖ ${r.id}: no "version: ${r.from}," in ${r.file}\n`); process.exit(1); }
    writeFileSync(path, txt.replace(re, `$1version: ${r.to},`), 'utf8');
  }

  /* ── 4. Verify by re-importing in a FRESH process ──────────────────── */
  // A REAL FILE, not `tsx --eval`. The first version passed the probe as an
  // argv string to `--eval`; argv[1] is not the extra argument in that mode and
  // the script read undefined, printed nothing, and every file was restored.
  // The safety net worked and the check still had to be rewritten.
  const want = ready.map((r) => ({ file: r.file, id: r.id, to: r.to }));
  const probePath = join(import.meta.dirname, '_verify-versions.tmp.ts');
  writeFileSync(probePath, `
const WANT = ${JSON.stringify(want)} as { file: string; id: string; to: number }[];
async function run() {
  const bad: string[] = [];
  for (const w of WANT) {
    const mod = await import('./data/' + w.file) as Record<string, unknown>;
    const bodies: { id?: unknown; version?: unknown }[] = [];
    for (const v of Object.values(mod)) {
      if (Array.isArray(v)) bodies.push(...v); else if (v && typeof v === 'object') bodies.push(v as never);
    }
    const b = bodies.find((x) => x && x.id === w.id);
    if (!b) bad.push(w.id + ': vanished from ' + w.file);
    else if (b.version !== w.to) bad.push(w.id + ': is v' + b.version + ', wanted v' + w.to);
  }
  console.log(bad.length ? 'BAD ' + bad.join(' | ') : 'OK');
}
run();
`, 'utf8');

  let out = '';
  try {
    out = execSync(`npx tsx "${probePath}"`, {
      cwd: join(import.meta.dirname, '..'), encoding: 'utf8',
    }).trim();
  } catch (e) {
    out = `probe threw: ${(e as { stdout?: string }).stdout ?? String(e)}`;
  } finally {
    try { execSync(`rm -f "${probePath}"`); } catch { /* best effort */ }
  }
  if (!out.endsWith('OK')) {
    restore(original);
    console.error(`\n✖ verification failed, every file restored: ${out}\n`);
    process.exit(1);
  }
  console.log(`\n  source: ${ready.length} literal(s) rewritten and verified by re-import`);

  /* ── 5. Postgres ───────────────────────────────────────────────────── */
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    await c.query('begin');
    for (const r of ready) {
      const q = await c.query(
        `update content_units set body = jsonb_set(body, '{version}', to_jsonb($2::int)), updated_at = now()
          where kind='lesson' and slug = $1`, [r.id, r.to]);
      if (q.rowCount !== 1) { await c.query('rollback'); throw new Error(`${r.id}: touched ${q.rowCount} rows`); }
    }
    await c.query('commit');
    console.log(`  postgres: ${ready.length} version(s) restored\n`);
    console.log('  NEXT: pnpm content:publish --rollout <n>  (publish rewrites the seed)\n');
  } catch (e) {
    await c.query('rollback').catch(() => {});
    restore(original);
    throw e;
  } finally { c.release(); await pool.end(); }
}

function restore(original: Map<string, string>): void {
  for (const [path, txt] of original) writeFileSync(path, txt, 'utf8');
}

main().catch((e) => { console.error(e); process.exit(1); });
