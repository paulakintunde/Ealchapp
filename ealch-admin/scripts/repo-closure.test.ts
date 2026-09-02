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

import { deepStrictEqual, ok } from 'node:assert';
import { execFileSync } from 'node:child_process';
import { readFileSync, statSync } from 'node:fs';
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

// ── What counts as an import (2026-08-25) ───────────────────────────────────
//
// The first version of this scanner was one regex over the raw source:
//
//     /(?:from|import)\s*\(?\s*['"](\.[^'"]+)['"]/g
//
// It reported five files. All five were false positives, and each was a
// different way of being wrong:
//
//   · a COMMENT quoting an import as prose
//     (_a234_mutate.ts: "the test does `import seed from './seed.json'`")
//   · a prose sentence whose closing quote looked like a specifier's
//     (adverbes-corpus.ts: `...the adjective it is built from". The reasoning`
//     matched `from"` and captured the next thousand characters)
//   · a STRING LITERAL that a codemod writes INTO another file, whose
//     specifier is relative to that other file, not to the codemod
//     (_a2_label_codemod.mjs, _a2_label_testfix.mjs)
//   · a COMPUTED specifier, `import('./data/' + file)`, whose literal prefix
//     resolved to the DIRECTORY scripts/data — and a directory is never in
//     `git ls-files`, so it reported as untracked
//
// Five noisy failures on healthy files is not a strict check, it is a check
// nobody will read. So: comments are stripped, static imports must sit where
// ESM actually allows them (the start of a line), a dynamic import counts only
// when its specifier is a complete literal, and a specifier must resolve to a
// FILE. The bug this test was written for — transitive deps of batch/corpus/
// lesson modules going uncommitted — is a plain top-level import and is still
// caught by all of that.

/** Comments are not code. Quote- and template-aware, so a `//` inside a string
 *  (a URL, say) is left alone. */
function stripComments(src: string): string {
  let out = '';
  let i = 0;
  let quote: string | null = null;
  while (i < src.length) {
    const c = src[i];
    const next = src[i + 1];
    if (quote) {
      if (c === '\\') { out += '  '; i += 2; continue; }
      if (c === quote) quote = null;
      out += c;
      i += 1;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') { quote = c; out += c; i += 1; continue; }
    if (c === '/' && next === '/') {
      while (i < src.length && src[i] !== '\n') i += 1;
      continue; // the newline itself is kept by the next iteration
    }
    if (c === '/' && next === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) {
        if (src[i] === '\n') out += '\n'; // keep line count honest for humans
        i += 1;
      }
      i += 2;
      continue;
    }
    out += c;
    i += 1;
  }
  return out;
}

/** `import ... from './x'` / `export ... from './x'`, at the start of a line —
 *  which is the only place ESM allows them, and which a specifier quoted
 *  inside a string literal can never be. */
const STATIC_IMPORT_RE = /^[ \t]*(?:import|export)\b[^\n]*?\bfrom\s*['"](\.[^'"\n]+)['"]/gm;
/** Side-effect import: `import './x'`. */
const BARE_IMPORT_RE = /^[ \t]*import\s*['"](\.[^'"\n]+)['"]/gm;
/** `import('./x')` with a COMPLETE literal specifier. The closing quote must be
 *  followed by `)`, so `import('./data/' + f)` and template literals are left
 *  alone: their real path is only known at runtime and this check cannot
 *  resolve it without executing the script. */
const DYNAMIC_IMPORT_RE = /\bimport\s*\(\s*['"](\.[^'"\n]+)['"]\s*\)/g;

function importsOf(src: string): string[] {
  const code = stripComments(src);
  const specs: string[] = [];
  for (const re of [STATIC_IMPORT_RE, BARE_IMPORT_RE, DYNAMIC_IMPORT_RE]) {
    for (const m of code.matchAll(re)) if (m[1]) specs.push(m[1]);
  }
  return specs;
}

/** What a specifier actually points at, trying the extensions tsx resolves.
 *  Must be a FILE: `existsSync` is happy with a directory, which is how
 *  `import('./data/' + f)` used to report scripts/data as untracked. */
const isFile = (p: string): boolean => {
  try {
    return statSync(p).isFile();
  } catch {
    return false;
  }
};

function resolveSpecifier(fromFile: string, spec: string): string | null {
  const base = normalize(join(dirname(fromFile), spec));
  const candidates = [base, `${base}.ts`, `${base}.mjs`, `${base}.js`, join(base, 'index.ts')];
  return candidates.find(isFile) ?? null;
}

test('every import in a tracked admin script resolves to a tracked file', () => {
  const tracked = trackedFiles();
  if (!tracked) return;

  const scripts = [...tracked].filter(
    (p) => p.startsWith('ealch-admin/scripts/') && /\.(ts|mjs)$/.test(p) && !p.endsWith('.test.ts'),
  );
  ok(scripts.length > 50, `only ${scripts.length} tracked scripts found — is this check looking in the right place?`);

  const broken: string[] = [];
  let scanned = 0;
  for (const rel of scripts) {
    const abs = resolve(repoRoot, rel);
    let src: string;
    try {
      src = readFileSync(abs, 'utf8');
    } catch {
      continue;
    }
    for (const spec of importsOf(src)) {
      scanned += 1;
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

  // Tightening the scanner (see the note above) is how this check could quietly
  // stop checking: a regex that matches nothing reports no failures and looks
  // like success. Assert it still SEES the graph it is meant to walk.
  ok(scanned > 500, `only ${scanned} relative imports found — the scanner has stopped seeing imports`);

  ok(
    broken.length === 0,
    `a committed script imports something a fresh clone will not have:\n  ${broken.join('\n  ')}\n\n` +
    `Commit the missing file, or the script it belongs to should not be committed either.`,
  );
});

test('the import scanner ignores comments, written-out code and computed paths', () => {
  // Each case here is a real false positive this check reported on 2026-08-25,
  // reduced to one line. Without these, the next person to "simplify" the
  // scanner back to one regex gets a green suite and five bogus failures.
  const seen = (src: string) => importsOf(src);

  // A comment quoting an import as prose.
  deepStrictEqual(seen("// the test does `import seed from './seed.json'`\n"), []);
  deepStrictEqual(seen("/* import x from './gone.ts' */\n"), []);
  // A prose sentence whose closing quote follows the word `from`.
  deepStrictEqual(seen('/* the adjective it is built from". The reasoning is good */\n'), []);
  // A string literal a codemod writes INTO another file: the specifier is
  // relative to that file, not to this one.
  deepStrictEqual(seen(`out = insertAfter(out, "\\nimport { unitRef } from './_unit-ref.ts';");\n`), []);
  // A computed specifier. Its real path is only known at runtime.
  deepStrictEqual(seen("const mod = await import('./data/' + name);\n"), []);
  deepStrictEqual(seen('const mod = await import(`./data/${name}`);\n'), []);

  // ...and it still sees the real thing, which is the whole point.
  deepStrictEqual(seen("import { X } from './data/x-terms.ts';\n"), ['./data/x-terms.ts']);
  deepStrictEqual(seen("export { Y } from './lib/y.ts';\n"), ['./lib/y.ts']);
  deepStrictEqual(seen("import './env';\n"), ['./env']);
  deepStrictEqual(seen("const m = await import('./data/z.ts');\n"), ['./data/z.ts']);
  // A `//` inside a string is not a comment.
  deepStrictEqual(seen("const u = 'https://x.test';\nimport { A } from './a.ts';\n"), ['./a.ts']);
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
