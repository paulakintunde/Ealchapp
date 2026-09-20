// The database rules the app depends on, asserted against schema.sql.
//
// Measured against the LIVE database on 2026-09-10 via the Supabase advisor and
// pg_policy, and re-asserted here against the source of truth so the two cannot
// drift apart silently.
//
// ── What the live audit found ───────────────────────────────────────────────
//
// Every table the app client actually queries has RLS enabled AND a policy:
//
//   system_config   "config readable"                       select using (true)
//   profiles        "own profile"                           auth.uid() = id
//   sessions        "own sessions"                          auth.uid() = user_id
//   resume_state    "own resume_state"                      auth.uid() = user_id
//   attempts        "read own attempts", "insert own attempts"
//
// Thirty-six OTHER tables have RLS enabled with zero policies. That is not a
// hole — RLS with no policy denies everything to anon and authenticated, and
// service_role bypasses RLS — so it is the correct fail-closed shape for tables
// only the edge functions and the admin console touch (entitlements,
// coach_usage, users, subscriptions, payments, learning_sessions, content_*).
// It is recorded because "no policies" reads like a defect in a linter report
// and someone will eventually try to fix it by adding one.
//
// The one real finding was coach_bump's mutable search_path, fixed in the file.
// NOT applied to the live database: that is a deliberate, separate step.
import { test } from 'node:test';
import { ok } from 'node:assert';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const SQL = readFileSync(join(resolve(HERE, '..', '..'), 'supabase', 'schema.sql'), 'utf8');

/** Tables the app's own client queries, from `.from('…')` in src/services. Each
 *  needs RLS on AND a policy, or the query returns nothing at runtime and the
 *  failure looks like a sync bug. */
const CLIENT_TABLES = ['system_config', 'profiles', 'attempts', 'resume_state'] as const;

test('every table the app client queries has RLS enabled and at least one policy', () => {
  for (const t of CLIENT_TABLES) {
    ok(
      new RegExp(`alter table public\\.${t}\\s+enable row level security`).test(SQL),
      `${t} is queried by the app but does not enable RLS`,
    );
    ok(
      // `\s+`, not a single space: the shipped file aligns two of these with a
      // double space, and a guard that only matches one formatting is a guard
      // that reports a missing policy which is right there.
      new RegExp(`create policy "[^"]+"\\s+on public\\.${t}\\b`).test(SQL),
      `${t} has RLS enabled and no policy, so every client query returns nothing`,
    );
  }
});

test('attempts stays append-only at the database, not just by convention', () => {
  // Deliberately select + insert and no update/delete policy: RLS enforces the
  // append-only rule the AttemptLog docs describe. A policy granting `for all`
  // here would quietly undo that.
  ok(/create policy "read own attempts"\s+on public\.attempts for select/.test(SQL), 'attempts lost its select policy');
  ok(/create policy "insert own attempts" on public\.attempts for insert/.test(SQL), 'attempts lost its insert policy');
  ok(
    !/create policy "[^"]*" on public\.attempts for (all|update|delete)/.test(SQL),
    'attempts gained an update/delete policy; it is meant to be append-only',
  );
});

test('every function in schema.sql pins its search_path', () => {
  // The Supabase linter rule (0011). A definer-reachable function that resolves
  // unqualified names through the caller's search_path can be made to touch a
  // shadowed object. Asserted over ALL functions rather than the one that was
  // flagged, so the next function added does not repeat it.
  const missing: string[] = [];
  for (const m of SQL.matchAll(/create (?:or replace )?function\s+(public\.\w+)\(([\s\S]*?)\bas \$\$/g)) {
    if (!/set search_path\s*=/.test(m[2])) missing.push(m[1]);
  }
  ok(missing.length === 0, `functions with a mutable search_path: ${missing.join(', ')}`);
});

test('coach_bump is still service-role only', () => {
  // The search_path fix is hardening on top of this, not a replacement for it:
  // a client that can bump an arbitrary key can exhaust someone else's quota.
  for (const role of ['public', 'anon', 'authenticated']) {
    ok(
      new RegExp(`revoke all on function public\\.coach_bump\\([^)]*\\) from ${role};`).test(SQL),
      `coach_bump is callable by ${role}`,
    );
  }
});
