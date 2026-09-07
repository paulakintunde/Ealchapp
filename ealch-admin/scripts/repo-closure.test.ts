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
import { readFileSync, readdirSync, statSync } from 'node:fs';
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

// ── The same question, one level over: cited DOCS (2026-09-01) ─────────────
//
// The import check above proves a tracked script's code dependencies are in the
// repository. Its documentation dependencies were never checked, and that cost
// two of them.
//
// `LESSON-CONTENT-STANDARD.md` is cited by author-full-curriculum-spine.ts and
// restore-lesson-bodies-from-seed.ts, both for its §5.3 seed-direct hazard.
// `A1-LESSON-STANDARD.md` is cited by salutations-terms.ts and
// salutations-lesson.ts. Both were written after `*.md` went into .gitignore,
// so neither was ever `git add -f`'d, both lived only on someone's disk, and
// both are now gone — not in git, not on disk, not recoverable. The scripts
// still point at them.
//
// WHY THIS IS NOT "every cited doc must be tracked". Measured on the day it was
// written: 74 distinct docs are cited from tracked scripts and 19 are tracked.
// Requiring all 74 would fail 55 times immediately, and the comment at the top
// of this file is emphatic about what a permanently-failing check is worth.
// Most of the 55 are build prompts and reports — historical provenance for how
// a lesson was authored, deliberately swept out of the tree by f9c0122. Citing
// one is a fact about the past, not a live dependency.
//
// So this asserts the invariant that would actually have SAVED the two: a doc
// that is cited and still EXISTS must be tracked. That fires at authoring time,
// while the file is still on disk and one `git add -f` from being safe, which
// is the only moment the loss was preventable. Measured violations today: 0.

/** Docs cited by an explicit repo path that are already gone. Each is a real
 *  loss, listed so the check below can be strict about every OTHER path
 *  without failing on damage that predates it.
 *
 *  Recoverable — deleted by f9c0122's sweep, still in history:
 *    git show f9c0122^:ealch-admin/SEED-IS-GENERATED-FIX-PLAN.md   (227 lines)
 *    git show f9c0122^:ealch-admin/A2-14-BUILD-REPORT.md           (862 lines)
 *    git show f9c0122^:ealch-admin/A2-SITUATIONS/04-REPAIR-MOVE-IDS.md (157)
 *  Unrecoverable — never tracked, never committed, not on any disk:
 *    LESSON-CONTENT-STANDARD.md, A1-LESSON-STANDARD.md
 *
 *  Restoring one must also remove it from here; the test enforces that, so the
 *  list cannot quietly rot into a permanent excuse. */
const KNOWN_MISSING_DOCS = new Set([
  'ealch-admin/SEED-IS-GENERATED-FIX-PLAN.md',
  'ealch-admin/A2-14-BUILD-REPORT.md',
  'ealch-admin/A2-SITUATIONS/04-REPAIR-MOVE-IDS.md',
  'ealch-admin/LESSON-CONTENT-STANDARD.md',
  'ealch-admin/A1-LESSON-STANDARD.md',
]);

/** A path-ish token ending in .md, from the RAW source.
 *
 *  Deliberately NOT comment-stripped, which is the opposite of importsOf: a doc
 *  citation lives in a comment almost by definition ("Full procedures: X.md"),
 *  and stripping comments would leave this scanner with nothing to read.
 *
 *  It is also deliberately generous, because over-matching here is harmless by
 *  construction: a token that is not a real file is invisible to the on-disk
 *  check, and the explicit-path check only looks at tokens that start with a
 *  real repo directory. Neither can turn a stray word into a failure. */
const DOC_CITATION_RE = /(?:\.{1,2}\/)*[A-Za-z0-9_][A-Za-z0-9._/-]*\.md\b/g;

const docCitationsOf = (src: string): string[] => [...src.matchAll(DOC_CITATION_RE)].map((m) => m[0]);

/** Every .md on disk under ealch-admin, as basename -> repo-relative paths. */
function docsOnDisk(): Map<string, string[]> {
  const byName = new Map<string, string[]>();
  const walk = (dir: string) => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name === 'node_modules' || e.name === '.next' || e.name === '.git') continue;
      const abs = join(dir, e.name);
      if (e.isDirectory()) walk(abs);
      else if (e.name.endsWith('.md')) {
        const rel = asRepoPath(abs);
        byName.set(e.name, [...(byName.get(e.name) ?? []), rel]);
      }
    }
  };
  walk(join(repoRoot, 'ealch-admin'));
  return byName;
}

/** Tracked scripts and source this check reads. */
function citingFiles(tracked: Set<string>): string[] {
  return [...tracked].filter(
    (p) => /^ealch-admin\/(scripts|src)\//.test(p) && /\.(ts|tsx|mjs)$/.test(p) && !p.endsWith('.test.ts'),
  );
}

test('a doc cited by a tracked script, that still exists, is tracked', () => {
  const tracked = trackedFiles();
  if (!tracked) return;

  const onDisk = docsOnDisk();
  const files = citingFiles(tracked);
  ok(files.length > 50, `only ${files.length} tracked files found — is this check looking in the right place?`);

  const untracked: string[] = [];
  let scanned = 0;
  for (const rel of files) {
    let src: string;
    try {
      src = readFileSync(resolve(repoRoot, rel), 'utf8');
    } catch {
      continue;
    }
    for (const cite of docCitationsOf(src)) {
      scanned += 1;
      // Resolve by basename: citations are written bare ('A1-LESSON-STANDARD.md'),
      // prefixed ('ealch-admin/OTA-RUNBOOK.md') and relative
      // ('../exam-blueprints/TOPICS-tef-canada.md') interchangeably, and the
      // question here is about the FILE, not how someone spelled the way to it.
      const base = cite.split('/').pop()!;
      for (const path of onDisk.get(base) ?? []) {
        if (!tracked.has(path)) untracked.push(`${rel} cites ${cite} -> ${path} exists but is NOT TRACKED`);
      }
    }
  }

  // Same failure mode as the import scanner: a regex that stops matching
  // reports nothing and looks like success.
  ok(scanned > 100, `only ${scanned} doc citations found — the scanner has stopped seeing them`);

  ok(
    untracked.length === 0,
    `a tracked script cites a doc that exists but is not in the repository:\n  ${[...new Set(untracked)].join('\n  ')}\n\n` +
    `*.md is gitignored, so a doc a script depends on needs an explicit\n` +
    `  git add -f <file>.md\n` +
    `or it lives on one disk until that disk forgets. LESSON-CONTENT-STANDARD.md\n` +
    `and A1-LESSON-STANDARD.md were lost exactly this way.`,
  );
});

test('a doc cited by an explicit repo path resolves, or is a known loss', () => {
  const tracked = trackedFiles();
  if (!tracked) return;

  // Only citations that name a real repo directory. Someone writing
  // 'ealch-admin/X.md' is stating a path, not mentioning a title in prose, so
  // this can be strict without guessing at intent.
  const broken: string[] = [];
  const cited = new Set<string>();
  for (const rel of citingFiles(tracked)) {
    let src: string;
    try {
      src = readFileSync(resolve(repoRoot, rel), 'utf8');
    } catch {
      continue;
    }
    for (const cite of docCitationsOf(src)) {
      if (!cite.startsWith('ealch-admin/')) continue;
      cited.add(cite);
      if (KNOWN_MISSING_DOCS.has(cite)) continue;
      if (!isFile(resolve(repoRoot, cite))) broken.push(`${rel} -> ${cite} does not exist`);
    }
  }

  ok(cited.size > 0, 'no explicit ealch-admin/*.md citation found — the scanner has stopped seeing them');
  ok(
    broken.length === 0,
    `a tracked script points at a doc that is not there:\n  ${[...new Set(broken)].join('\n  ')}\n\n` +
    `Restore the doc (it may be in history: git log --diff-filter=D -- <path>),\n` +
    `or change the comment to stop citing something that does not exist.`,
  );

  // The allowlist is damage, not policy. If a known-missing doc is restored it
  // must leave this list, or the list slowly becomes a place where real
  // breakage hides.
  const resurrected = [...KNOWN_MISSING_DOCS].filter((p) => isFile(resolve(repoRoot, p)));
  ok(
    resurrected.length === 0,
    `these are back on disk and must be removed from KNOWN_MISSING_DOCS:\n  ${resurrected.join('\n  ')}`,
  );
});

test('the doc scanner reads comments, and its over-matching stays contained', () => {
  // The import scanner had to be TIGHTENED because comments produced false
  // positives. This one is the mirror image and must stay loose: strip comments
  // and it sees nothing, because that is where citations live.
  deepStrictEqual(docCitationsOf('// Full procedures: ealch-admin/OTA-RUNBOOK.md.'), ['ealch-admin/OTA-RUNBOOK.md']);
  deepStrictEqual(docCitationsOf('/* see A1-LESSON-STANDARD.md */'), ['A1-LESSON-STANDARD.md']);
  deepStrictEqual(docCitationsOf("  'ealch-admin/A2-14-BUILD-REPORT.md',"), ['ealch-admin/A2-14-BUILD-REPORT.md']);
  deepStrictEqual(docCitationsOf('// per `A2-SITUATIONS/05-A2-13-AMENDMENT-SPEC.md` (option A)'), ['A2-SITUATIONS/05-A2-13-AMENDMENT-SPEC.md']);
  deepStrictEqual(docCitationsOf('// ../../exam-blueprints/TOPICS-tef-canada.md'), ['../../exam-blueprints/TOPICS-tef-canada.md']);

  // Being loose means it also matches things that are not files. That is safe
  // ONLY because of how the two checks above consume it, so pin the reason:
  // the on-disk check ignores anything absent from disk, and the explicit-path
  // check ignores anything not starting with a real repo directory.
  const noise = docCitationsOf('// a sentence about cmd.md and stuff.md');
  ok(noise.every((c) => !c.startsWith('ealch-admin/')), 'prose must not reach the explicit-path check');
  ok(noise.every((c) => !isFile(resolve(repoRoot, c))), 'prose must not resolve to a real file');

  // Not a doc reference at all.
  deepStrictEqual(docCitationsOf('const x = 1; // nothing here'), []);
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
