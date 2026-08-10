// Does what is IN the repository actually run from the repository?
//
// ── Why (2026-08-10) ────────────────────────────────────────────────────────
//
// Thirteen lessons were live and their authoring pipeline had never been
// committed. That got fixed, or so I said: the commit message claimed a fresh
// clone could rebuild them. It could not, for any of the thirteen.
//
// Two mistakes, one check. The dependency list was built by grepping
// `from './data/...'` out of the BATCH files only — but a batch imports a
// corpus and a lesson module, and THOSE import the -terms and -imported files,
// so twenty-two transitive dependencies were never staged. And each build is
// two steps, batch then merge, so fifteen merge-*-into-seed.ts scripts were
// left behind as well. A one-level grep answered a question about a graph.
//
// This is that question asked properly, and it is cheap: every relative import
// in a TRACKED script must resolve to a TRACKED file. An untracked scratch
// probe may import whatever it likes — it is scratch. What the repository
// contains has to stand up on its own.
//
// It would have failed on all thirteen the moment it existed.

import { ok } from 'node:assert';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, normalize, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const adminRoot = resolve(here, '..');
const repoRoot = resolve(adminRoot, '..');

/** Every path git tracks under ealch-admin, repo-relative and slash-separated. */
function trackedFiles(): Set<string> | null {
  try {
    const out = execFileSync('git', ['ls-files', 'ealch-admin'], { cwd: repoRoot, encoding: 'utf8' });
    return new Set(out.split('\n').map((l) => l.trim()).filter(Boolean));
  } catch {
    return null; // not a git checkout: nothing to assert
  }
}

const asRepoPath = (abs: string) => relative(repoRoot, abs).split('\\').join('/');

/** Relative TS/JS imports, including `import x from`, bare `import`, and
 *  `await import(...)`. Extensionless specifiers are resolved below. */
const IMPORT_RE = /(?:from|import)\s*\(?\s*['"](\.[^'"]+)['"]/g;

/** What a specifier actually points at, trying the extensions tsx resolves. */
function resolveSpecifier(fromFile: string, spec: string): string | null {
  const base = normalize(join(dirname(fromFile), spec));
  const candidates = [base, `${base}.ts`, `${base}.mjs`, `${base}.js`, join(base, 'index.ts')];
  return candidates.find((c) => existsSync(c) && !c.endsWith('/')) ?? null;
}

test('every import in a tracked admin script resolves to a tracked file', () => {
  const tracked = trackedFiles();
  if (!tracked) return;

  const scripts = [...tracked].filter(
    (p) => p.startsWith('ealch-admin/scripts/') && /\.(ts|mjs)$/.test(p) && !p.endsWith('.test.ts'),
  );
  ok(scripts.length > 50, `only ${scripts.length} tracked scripts found — is this check looking in the right place?`);

  const broken: string[] = [];
  for (const rel of scripts) {
    const abs = resolve(repoRoot, rel);
    let src: string;
    try {
      src = readFileSync(abs, 'utf8');
    } catch {
      continue;
    }
    for (const m of src.matchAll(IMPORT_RE)) {
      const spec = m[1];
      const target = resolveSpecifier(abs, spec);
      if (!target) {
        // Points at nothing on THIS disk either. A different failure, and a
        // real one, so it is worth saying rather than skipping.
        broken.push(`${rel} -> '${spec}' does not exist`);
        continue;
      }
      const targetRel = asRepoPath(target);
      // Only ealch-admin is this check's business; ealch-v2 is a sibling
      // package with its own tracking and its own tests.
      if (!targetRel.startsWith('ealch-admin/')) continue;
      if (!tracked.has(targetRel)) broken.push(`${rel} -> ${targetRel} is NOT TRACKED`);
    }
  }

  ok(
    broken.length === 0,
    `a committed script imports something a fresh clone will not have:\n  ${broken.join('\n  ')}\n\n` +
    `Commit the missing file, or the script it belongs to should not be committed either.`,
  );
});

test('no tracked source file contains a NUL byte', () => {
  // merge-interrogatifs-into-seed.ts carried one until 2026-08-10, inside a
  // string literal. `file` and grep called the source "data" and git stores
  // such a file as a BINARY blob — no diffs, ever, on a script that writes
  // seed.json. It also meant a guard in it worked only by accident, because the
  // intended `?? ''` would have disabled the check on every run.
  const tracked = trackedFiles();
  if (!tracked) return;

  const offenders: string[] = [];
  for (const rel of tracked) {
    if (!/\.(ts|tsx|mjs|js|json|md)$/.test(rel)) continue;
    const abs = resolve(repoRoot, rel);
    let buf: Buffer;
    try {
      buf = readFileSync(abs);
    } catch {
      continue;
    }
    if (buf.includes(0)) offenders.push(rel);
  }
  ok(offenders.length === 0, `NUL byte(s) in tracked source:\n  ${offenders.join('\n  ')}`);
});
