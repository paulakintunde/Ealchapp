# Phase 1: Content-Publish Drift Guard Extension - Pattern Map

**Mapped:** 2026-09-19
**Files analyzed:** 3 (2 new, 1 modified)
**Analogs found:** 3 / 3

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|-----------------|---------------|
| `ealch-admin/scripts/drift-guard.logic.ts` | utility (pure comparator module) | transform (in-memory git-vs-DB comparison, no I/O) | `ealch-admin/scripts/seed-cut.logic.ts` | exact |
| `ealch-admin/scripts/drift-guard.logic.test.ts` | test | transform (hand-built fixtures, no DB) | `ealch-admin/scripts/publish-cut.logic.test.ts` | exact |
| `ealch-admin/scripts/publish-content.ts` (step 4·0 loop + step 7 report) | CLI script / pipeline step (modified, not new) | batch (single-run CLI: read Postgres → validate → guard → write files → upload) | itself — step 4·0 (lines 588-655) is the analog for the loop extension; step 7 (lines 1074-1128) is the analog for the report-write extension | exact (self-analog; this file already contains both patterns to generalize) |

**Also relevant (pre-existing, not to be recreated):**

| Existing File | Role | Relevance |
|---|---|---|
| `ealch-admin/scripts/restore-lesson-bodies-from-seed.ts` | recovery script | The lesson-kind recovery pattern (version + overview guard) the guard's block message points to; extend or mirror for new kinds if the plan decides a recovery script is in scope. |
| `ealch-admin/scripts/restore-unit-bodies-from-seed.ts` | recovery script | **Discovery: this file already exists** (not called out in RESEARCH.md's file list). It already restores `curriculum_unit` bodies from the committed seed into Postgres, with its own structural-diff refusal logic. Scenario/playlist/speak_stage have NO equivalent recovery script yet — that gap (not "generalize restore-lesson-bodies-from-seed.ts by kind") is what Pattern 4 of RESEARCH.md should be read against; option (b) sibling-script is already the codebase's actual, current practice (one script for lessons, a separate one for units), not option (a) as RESEARCH.md speculated. |

## Pattern Assignments

### `ealch-admin/scripts/drift-guard.logic.ts` (utility, transform — NEW)

**Analog:** `ealch-admin/scripts/seed-cut.logic.ts` (full file read, 140 lines)

This is the established "extract inline pipeline logic into a pure, testable sibling module" pattern in this exact codebase, done once already for `itemsReferencedBy`/`cutItems`/`cutDrift`. Copy its shape: header comment explaining WHY the extraction happened (cite the incident), narrow typed helper functions, no I/O, imports only `schema.ts` types.

**Header / provenance-comment pattern** (lines 1-38 of `seed-cut.logic.ts`):
```typescript
// THE SEED CUT RULE, in one place.
//
// ... (explains the rule lived inline in publish-content.ts, only ONE
// consumer knew it, and the move is what let a second consumer — a checker —
// import the rule without importing the publisher) ...
//
// Measured on 2026-08-19: 5,658 of the seed's 10,417 rows — 54% — are in it
// ONLY because their theme is in SEED_CUT.themes. ...
```
For `drift-guard.logic.ts`, the equivalent framing is: the lesson-only comparator in `publish-content.ts:614-633` is the rule; extracting it lets `drift-guard.logic.test.ts` exercise it without a live Postgres connection, exactly as `publish-cut.logic.test.ts` now exercises `itemsReferencedBy` without one.

**Imports pattern** (lines 40-42):
```typescript
import type { Item, Lesson } from '../../ealch-v2/src/content/schema.ts';
import { ITEM_ID_RE } from '../../ealch-v2/src/content/schema.ts';
import { SEED_CUT } from './seed-cut.config.ts';
```
For drift-guard, import `type { Lesson, Unit, Scenario, Playlist, SpeakStage } from '../../ealch-v2/src/content/schema.ts'` — types only, no runtime DB/pg import in this file (keeps it pure and DB-free, matching `seed-cut.logic.ts`'s own constraint).

**Core comparator pattern to generalize — copied verbatim from the guard being extended** (`publish-content.ts:614-633`):
```typescript
if (committed?.lessons) {
  const live = new Map(lessons.map((l) => [l.id, l]));
  const losses: string[] = [];

  for (const git of committed.lessons) {
    const db = live.get(git.id);
    if (!db) {
      losses.push(
        `${git.id}: in the committed seed (v${git.version}, ${git.sections.length} sections) ` +
          `but NOT published in the DB — this publish would DELETE it`
      );
      continue;
    }
    if (db.version < git.version) {
      losses.push(
        `${git.id}: DB is v${db.version}, committed seed is v${git.version} ` +
          `— this publish would REVERT it`
      );
    }
  }
  // losses.length > 0 => die(), else log success
}
```
**Generalization shape** (per RESEARCH.md "Code Examples" — this is the concrete function signature to build in `drift-guard.logic.ts`):
```typescript
export type DriftLoss = { id: string; message: string };

/** One reusable comparator: for any content kind, block on deletion or
 *  version regression. Never blocks on mere difference (DB-ahead is normal).
 *  Mirrors publish-content.ts:614-633, generalized to any versioned kind. */
export function findVersionedLosses<T extends { id: string; version: number }>(
  committed: T[],
  live: Map<string, T>,
  describe: (t: T) => string, // e.g. richness detail for the message ("v${t.version}, N sections")
): DriftLoss[] {
  const losses: DriftLoss[] = [];
  for (const git of committed) {
    const db = live.get(git.id);
    if (!db) {
      losses.push({ id: git.id, message: `${git.id}: in the committed seed (${describe(git)}) but NOT published in the DB — this publish would DELETE it` });
      continue;
    }
    if (db.version < git.version) {
      losses.push({ id: git.id, message: `${git.id}: DB is v${db.version}, committed seed is v${git.version} — this publish would REVERT it` });
    }
  }
  return losses;
}
```
Use `findVersionedLosses` for `lesson`, `scenario`, `playlist`, `speak_stage` (all have body-embedded `version`: `schema.ts:1321`, `1784`, `1848`, `2654`). Write a **separate** `findUnitLosses` for `Unit` (no version field, `schema.ts:1713-1747`) using the structural `lessonIds.length` signal, and — per RESEARCH.md Pitfall 3 — it MUST be called with `prunedUnits` (the post-step-2-pruning array already computed at `publish-content.ts:527-531`), never the raw step-1 `units` read, or a legitimate unpublished-lesson prune will false-positive as a loss.

**Pitfall 2 close-the-gap pattern (recommended in RESEARCH.md, optional but cheap since this file is already being touched)** — copy the `overview` guard from the recovery script into the new pure module so the publish-time guard gains the same check the recovery script already has:
```typescript
// Source: ealch-admin/scripts/restore-lesson-bodies-from-seed.ts, lines 283-284
if (db.overview && !git.overview) {
  die(`${id}: DB has an overview and the reference does not. Refusing to restore.`);
}
```
Adapt as a non-fatal-collecting check inside `findVersionedLosses`'s lesson-specific caller (or a small `findOverviewLosses(committed: Lesson[], live: Map<string, Lesson>)` sibling), pushing a loss message rather than calling `die()` directly (pure functions return data; the CLI script decides to `die()`).

**Also export a report-formatting pure function here** (for PUBLISH-02, so it's testable without touching `console.log`):
```typescript
// Pattern to follow, based on publish-content.ts:1111-1126 (the existing,
// proven count-delta formatter — lift its shape into a pure function that
// RETURNS a string, which the CLI script both console.logs AND writeFileSyncs).
export function formatDiffReport(args: {
  previous?: { version: number; counts: Record<string, number> };
  version: number;
  counts: Record<string, number>; // now must include speakPath, per RESEARCH.md gap #1
  noop: boolean;
  checksum: string;
  contentDigest: string;
}): string {
  // same `d(k)` delta-formatting logic as publish-content.ts:1112-1115,
  // but building a string to return instead of console.log-ing each line.
}
```

---

### `ealch-admin/scripts/drift-guard.logic.test.ts` (test — NEW)

**Analog:** `ealch-admin/scripts/publish-cut.logic.test.ts` (full file read, 75 lines)

**Header comment pattern** (lines 1-14) — explain what broke before and why the test exists, in the same "incident-first" voice as every test file in this codebase:
```typescript
// itemsReferencedBy: everything a lesson needs in the offline bundle.
//
// Publishing v20 cut 60 rows out of seed.json and took referenced ones with
// them, because this function was an ALLOWLIST ... and the list had fallen
// behind the schema. ...
//
// NOTE: importing publish-content.ts must not publish anything. It is guarded
// on `invokedDirectly`, and this file passing at all is that guard working.
```
For `drift-guard.logic.test.ts`, the equivalent framing cites the 2026-07-31 incident (sons.03.l1 20→6 sections, overview collapse on 5 lessons) as the regression this test suite exists to keep closed, generalized across the four new kinds — this directly satisfies RESEARCH.md's Validation Architecture row "Regression test reproducing the 2026-07-31 incident shape."

**Imports pattern** (lines 15-19):
```typescript
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { itemsReferencedBy } from './publish-content.ts';
import type { Lesson } from '../../ealch-v2/src/content/schema.ts';
```
For drift-guard: `import { findVersionedLosses, findUnitLosses, formatDiffReport } from './drift-guard.logic.ts';` plus whatever schema types are needed for hand-built fixtures.

**Core test-case pattern — hand-built fixture, `as unknown as T` cast, one behavior per `test()` block** (lines 20-47):
```typescript
const ID = (n: number) => `fr.a1.cuisine.${String(n).padStart(3, '0')}`;

const lesson = {
  id: 'a1.99.l1',
  itemIds: [ID(1)],
  sections: [ /* ... */ ],
} as unknown as Lesson;

test('it finds items in every place a lesson can name one', () => {
  const found = new Set(itemsReferencedBy(lesson));
  for (const n of [1, 2, 3, 4, 5, 6, 7]) {
    ok(found.has(ID(n)), `${ID(n)} was not found — a walk that misses a site drops the row from the bundle`);
  }
});
```
Apply this same shape for each RESEARCH.md-mandated test case (Phase Requirements → Test Map):
1. Committed unit/scenario/playlist/speak-stage git-ahead of DB (deleted or reverted) → blocks.
2. DB ahead of git (normal case) → does NOT block (the false-positive regression test Pitfall 6 demands — mirror `publish-cut.logic.test.ts`'s "it does not invent item ids out of prose" defensive-negative test style, lines 60-69).
3. Unit `lessonIds` pruning is not mistaken for a regression (construct a fixture where `committed.units[0].lessonIds.length > prunedUnits[0].lessonIds.length` on purpose, and assert no loss is reported — this is testing against the ALREADY-PRUNED array, per Pitfall 3).
4. The 2026-07-31 incident shape reproduced generically: same version, git richer (more sections / has overview) than DB → blocks.
5. No-git-history / unparseable seed → the comparator functions receive `committed = null`/`undefined` and must not throw (the CLI script's own try/catch handles the `git show` failure; the pure function's job is simply to be a no-op when given no committed data — test that shape directly).

---

### `ealch-admin/scripts/publish-content.ts` (modified — step 4·0 loop, step 7 report write)

**Analog:** itself. The file already contains both patterns being generalized; the work is calling into the new `drift-guard.logic.ts` functions instead of the inline lesson-only block, and widening the type read from git.

**Step 4·0 — current inline guard to replace with a loop over kinds** (lines 588-655, already shown in full above under drift-guard.logic.ts's "Core comparator pattern" — this is the exact block being generalized). Key structural elements to preserve:
- The `try { execFileSync('git', ['show', 'HEAD:...']) } catch { console.log(warn); }` graceful-skip pattern (lines 593-612) — untouched, just widen the parsed type from `{ lessons?: Lesson[] }` to `{ lessons?: Lesson[]; units?: Unit[]; scenarios?: Scenario[]; playlists?: Playlist[]; speakPath?: SpeakStage[] }`.
- The `die`-equivalent block-and-exit shape (lines 635-652) — one combined error listing losses across ALL kinds, still pointing at a recovery script in its message (update the pointed-at script per whatever the plan decides for units/scenarios/playlists/speak-stages recovery).
- The success log line (line 653) — extend to report all kinds checked, not just lessons.

**Step 2 — pruned units, the value the new Unit comparator MUST be run against** (lines 515-534):
```typescript
const liveLessons = new Set(lessons.map((l) => l.id));
let prunedRefs = 0;
const prunedUnits: Unit[] = units.map((u) => {
  const keep = (u.lessonIds ?? []).filter((id) => liveLessons.has(id));
  prunedRefs += (u.lessonIds?.length ?? 0) - keep.length;
  return { ...u, lessonIds: keep };
});
```
`prunedUnits` (not `units`) is the array to pass into `findUnitLosses` — this is Pitfall 3's exact fix point.

**Step 7 — current diff-report block to extend with a file write** (lines 1074-1128, full block already shown above under drift-guard.logic.ts). The minimal, additive change RESEARCH.md specifies:
```typescript
// Source: ealch-admin/scripts/publish-content.ts (current, lines 1111-1126)
const p = previous.counts ?? {};
const d = (k: keyof typeof counts) => {
  const delta = counts[k] - (Number(p[k]) || 0);
  return `${counts[k]} (${delta >= 0 ? '+' : ''}${delta})`;
};
console.log(`  v${previous.version} → v${version}`);
console.log(`    domains:    ${d('domains')}`);
// ... one console.log per kind ...
```
Becomes: build the same lines into a string via `formatDiffReport()` (new, in `drift-guard.logic.ts`), `console.log(reportText)` AND `writeFileSync(REPORT_PATH, reportText, 'utf8')`. Per D-02, this write must also happen on the `!previous` (first snapshot, line 1102-1103) and `noop` (line 1104-1105) branches — both currently `return`/`console.log` without falling through to a shared write point, so the write call needs to sit where all three branches converge, not only in the `else` branch.

**File-write mechanics to reuse (already imported, already used for `seed.json`)** — lines 27-28, 1180-1182:
```typescript
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
// ...
const SEED_PATH = resolve(process.cwd(), '../ealch-v2/src/content/seed.json');
// ...
mkdirSync(dirname(SEED_PATH), { recursive: true });
writeFileSync(SEED_PATH, JSON.stringify(seed, null, 2) + '\n', 'utf8');
console.log(`  ✎ ${SEED_PATH}`);
```
Define `REPORT_PATH` the same way (e.g. `resolve(process.cwd(), 'PUBLISH-REPORT.md')` if the planner locks in `ealch-admin/PUBLISH-REPORT.md` per RESEARCH.md Open Question 2), and log its write with the same `✎ ${PATH}` convention for console consistency.

**`counts`/`seedCounts` objects to extend with `speakPath`** (RESEARCH.md gap #1, lines 1047-1066):
```typescript
const counts = {
  domains: (corpus.domains ?? []).length,
  themes: (corpus.themes ?? []).length,
  units: corpus.units.length,
  lessons: corpus.lessons.length,
  items: corpus.items.length,
  scenarios: corpus.scenarios.length,
  playlists: (corpus.playlists ?? []).length,
  examTasks: (corpus.examTasks ?? []).length,
  examPapers: (corpus.examPapers ?? []).length,
  // ADD: speakPath: (corpus.speakPath ?? []).length,
};
```

**Recovery-script pointer message pattern to reuse in the new block's error text** (lines 641-649):
```typescript
console.error(
  '\n  The database does not yet contain content that is committed to git.\n' +
    '  Publishing now would overwrite seed.json and destroy it.\n\n' +
    '  Push the committed bodies into Postgres first:\n' +
    '    pnpm tsx scripts/restore-lesson-bodies-from-seed.ts --dry-run\n' +
    '    pnpm tsx scripts/restore-lesson-bodies-from-seed.ts\n\n' +
    '  Then re-run this publish. When the DB and git agree, a --dry-run\n' +
    '  leaves seed.json byte-identical, which is the proof that nothing\n' +
    '  can be lost.\n'
);
```
Widen to name whichever script(s) cover the losing kind(s) — `restore-lesson-bodies-from-seed.ts` for lessons, `restore-unit-bodies-from-seed.ts` for units (already exists — see "Also relevant" table above), and whatever the plan decides for scenarios/playlists/speak-stages if it builds new recovery scripts in this phase.

---

## Shared Patterns

### `die()` — the CLI's standard fatal-error exit
**Source:** `ealch-admin/scripts/publish-content.ts:120`
```typescript
function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}
```
Already used throughout the file (including by the guard being extended, e.g. `die('No DATABASE_URL...')`). The 4·0 block itself does NOT call `die()` — it calls `await pool.end(); console.error(...); process.exit(1);` directly (lines 636-651) because it needs to close the pool first (`die()` does not). **Preserve this exact deviation** when generalizing: the loop's block-and-exit path must still `await pool.end()` before exiting, matching the existing lesson-only block, not switch to plain `die()`.

### `invokedDirectly` guard — importing a script must never run its `main()`
**Source:** `ealch-admin/scripts/publish-content.ts:1239-1247`
```typescript
const invokedDirectly =
  !!process.argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(process.argv[1]);

if (invokedDirectly) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
```
**Apply to:** N/A for `drift-guard.logic.ts` itself (it has no `main()`, it's pure functions only, same as `seed-cut.logic.ts`). Relevant only if the plan later adds a standalone CLI entry point for a new recovery script (e.g. a hypothetical `restore-scenarios-from-seed.ts`) — those existing recovery scripts (`restore-lesson-bodies-from-seed.ts`, `restore-unit-bodies-from-seed.ts`) call `main()` unconditionally at file end instead (no `invokedDirectly` guard), so match whichever sibling is being extended, not `publish-content.ts`'s own convention.

### `node:test` pure-module test file structure
**Source:** `ealch-admin/scripts/publish-cut.logic.test.ts`, `ealch-admin/scripts/publish-columns.test.ts`
- No test framework config; run via `node --import tsx --test "scripts/**/*.test.ts"` (package.json `"test"` script).
- One `test('description', () => { ... })` per specific behavior, not grouped `describe` blocks — this codebase does not use `describe`.
- Fixtures are hand-built plain objects cast `as unknown as T`, never a factory library or `@faker-js/faker`.
- Assertions use `node:assert`'s `ok`/`strictEqual` directly, not a chai/jest-style expect API.
**Apply to:** `drift-guard.logic.test.ts` in full.

### Git-committed-seed read (the guard's data source)
**Source:** `ealch-admin/scripts/publish-content.ts:593-612` (inline in the guard) and `ealch-admin/scripts/restore-unit-bodies-from-seed.ts:94-104` (same read, factored into a named function `readReferenceSeed()`)
```typescript
const { execFileSync } = await import('node:child_process');
const repoRoot = resolve(process.cwd(), '..');
committed = JSON.parse(
  execFileSync('git', ['show', 'HEAD:ealch-v2/src/content/seed.json'], {
    cwd: repoRoot,
    maxBuffer: 512 * 1024 * 1024,
    encoding: 'utf8',
  })
);
```
**Apply to:** Stays inline in `publish-content.ts`'s step 4·0 (this is I/O, so it does NOT belong in the pure `drift-guard.logic.ts` module — only the comparison logic over the already-parsed `committed` object moves out). If a new recovery script needs the same read, factor it as `restore-unit-bodies-from-seed.ts` did (a named `readReferenceSeed()` function), not copy-pasted inline again.

## No Analog Found

None. Every file in this phase's scope has a direct, strong analog already in the codebase (this is an explicitly additive/generalizing phase per RESEARCH.md — "every piece of machinery this phase needs already exists in the codebase in a proven, narrower form").

## Metadata

**Analog search scope:** `ealch-admin/scripts/` (all `.ts` and `.test.ts` files, targeted reads guided by RESEARCH.md's line-number citations), `ealch-v2/src/content/schema.ts` (type definitions for `Lesson`/`Unit`/`Scenario`/`Playlist`/`SpeakStage`).
**Files scanned:** `publish-content.ts` (targeted, non-overlapping reads: lines 1-60, 200-320, 505-665, 920-980, 980-1180, 1180-1250 ≈ 700 of 1248 lines, covering every section this phase touches), `seed-cut.logic.ts` (full, 140 lines), `publish-cut.logic.test.ts` (full, 75 lines), `publish-columns.test.ts` (full, 87 lines, for test-style corroboration), `restore-lesson-bodies-from-seed.ts` (targeted: header 1-40, guard section 255-295), `restore-unit-bodies-from-seed.ts` (full, 303 lines — new discovery, not in RESEARCH.md's file list), `schema.ts` (targeted: `Lesson` 1307-1327, `Unit` 1713-1733, `Scenario`/`Playlist` 1777-1859, `SpeakStage` 2640-2660).
**Pattern extraction date:** 2026-09-19

---
*Phase: 1-Content-Publish Drift Guard Extension*
*Context gathered: 2026-09-19*
