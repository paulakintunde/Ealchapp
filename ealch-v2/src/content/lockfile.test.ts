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
// Nothing had failed, because nobody ran a pnpm install in this directory.
// That is the character of the class: a second lockfile costs nothing until
// the day it costs a great deal, and the symptom when it lands is a dependency
// version nobody chose. One manager per directory is the whole rule.
//
// ── A correction, kept because the mistake is instructive ──────────────────
//
// The commit that removed that file said it was STALE — missing six declared
// dependencies. That was WRONG, and the error is worth knowing about because
// it is easy to repeat.
//
// The check that produced it scraped the lockfile's `importers:` block with
// `/^      ([@a-zA-Z0-9._\/-]+):$/`. pnpm writes scoped names in YAML quotes,
// `'@supabase/supabase-js':`, and that pattern does not allow quotes. This app
// declares exactly six scoped dependencies, so the scrape found all 35
// unscoped names, none of the 6 scoped ones, and reported precisely those six
// as absent. The count matching the scoped count exactly is the tell.
//
// The removal was still right, on the reason above rather than the one given:
// CI installs this app with npm, so a pnpm lockfile here is wrong whatever it
// contains. But "wrong tool for this directory" and "stale and unusable" are
// different claims, and only the first was ever established. The file was
// untracked, so deleting it destroyed the evidence — the second claim can no
// longer be checked either way, which is its own lesson about the order to do
// things in.
//
// ── Why a test rather than a .gitignore entry ──────────────────────────────
//
// Ignoring it would hide it. The file would still be on disk, still picked up
// by anyone who typed `pnpm install` out of habit, and now invisible to
// `git status` as well. The point is to NOTICE it, so this fails loudly and
// says which command to run.
//
// The second test below is the one that would have settled the staleness
// question honestly, applied to the lockfile we actually keep. It parses no
// YAML: package-lock.json is JSON, and `packages` is keyed by path.
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
  // Presence is not enough on its own: a lockfile that has fallen behind
  // package.json looks exactly like one that has not. This is the check that
  // settles it, and unlike the scrape described above it parses no YAML —
  // package-lock.json is JSON and its `packages` map is keyed by path, so
  // there is nothing here to get subtly wrong.
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
