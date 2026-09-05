// This app installs with npm. One lockfile, and it is package-lock.json.
//
// ── What went wrong ────────────────────────────────────────────────────────
//
// A `pnpm-lock.yaml` sat untracked in this directory for a month. It was easy
// to miss and easy to explain away, because pnpm IS the right tool one level
// up: ealch-admin installs with `pnpm install --frozen-lockfile` and tracks its
// pnpm lockfile. This app does not. CI runs `npm ci` here, keyed on
// `cache-dependency-path: ealch-v2/package-lock.json`.
//
// The stray file was also STALE, which is what made it dangerous rather than
// merely untidy. It was missing six dependencies that package.json declares,
// `@supabase/supabase-js` and `@react-native-async-storage/async-storage`
// among them. So `pnpm install --frozen-lockfile` here would have failed, and
// plain `pnpm install` would have silently resolved a tree that CI never sees
// and then rewritten the lockfile to match it.
//
// Nothing failed, because nobody ran pnpm install in this directory. That is
// the whole problem with the class: a second lockfile costs nothing until the
// day it costs a great deal, and the symptom when it lands is a dependency
// version nobody chose.
//
// ── Why a test rather than a .gitignore entry ──────────────────────────────
//
// Ignoring it would hide it. The file would still be on disk, still be stale,
// still be picked up by anyone who typed `pnpm install` out of habit, and now
// invisible to `git status` as well. The point is to NOTICE it, so this fails
// loudly and says which command to run.
import { ok, strictEqual } from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const APP = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

/** Lockfiles for package managers this app does NOT use. */
const FOREIGN = ['pnpm-lock.yaml', 'yarn.lock', 'bun.lockb', 'bun.lock'];

test('the app has exactly one lockfile, and it is npm’s', () => {
  ok(
    existsSync(resolve(APP, 'package-lock.json')),
    'package-lock.json is missing: CI runs `npm ci` against it and would fail'
  );

  const strays = FOREIGN.filter((f) => existsSync(resolve(APP, f)));
  strictEqual(
    strays.join(', '),
    '',
    `ealch-v2 installs with npm, and these belong to another package manager: ` +
      `${strays.join(', ')}. Delete them and run \`npm ci\`. ` +
      `pnpm is correct in ealch-admin and wrong here — see .github/workflows/ci.yml.`
  );
});

test('every dependency package.json declares is pinned in the lockfile', () => {
  // The stale lockfile was undetectable by presence alone: it looked like a
  // lockfile and was missing a quarter of the tree. This is the check that
  // would have caught it, applied to the lockfile we actually keep.
  const pkg = JSON.parse(readFileSync(resolve(APP, 'package.json'), 'utf8')) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  };
  const lock = JSON.parse(readFileSync(resolve(APP, 'package-lock.json'), 'utf8')) as {
    packages?: Record<string, { version?: string }>;
  };

  const declared = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
  const missing = declared.filter((d) => !(`node_modules/${d}` in (lock.packages ?? {})));

  strictEqual(
    missing.join(', '),
    '',
    `package-lock.json does not pin ${missing.length} declared dependency(ies): ` +
      `${missing.join(', ')}. Run \`npm install\` to refresh it — a lockfile that ` +
      `has fallen behind package.json makes \`npm ci\` fail in CI and nowhere else.`
  );
});
