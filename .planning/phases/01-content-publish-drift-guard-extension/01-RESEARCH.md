# Phase 1: Content-Publish Drift Guard Extension - Research

**Researched:** 2026-09-19
**Domain:** Node/TypeScript content-publish pipeline (Postgres → git-tracked seed.json → Supabase Storage OTA snapshot), single-file CLI tool
**Confidence:** HIGH (every claim below is verified by reading the actual current source — `publish-content.ts` full read, `schema.ts` type-by-type read, `restore-lesson-bodies-from-seed.ts` full read, `apply-paper.ts`/`promote-paper.ts` full read, plus a repo-wide grep confirming exam content never touches `seed.json`)

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Diff report delivery (PUBLISH-02)**
- D-01: The pre-publish diff report is delivered BOTH ways: printed to the terminal during `pnpm content:publish --dry-run` (and the real publish), AND written to a file on disk.
- D-02: The report generates on every publish, not just when something's about to change — build the review habit, don't make it conditional on there being news.
- D-03: The on-disk file is a single, overwritten file (e.g. a `PUBLISH-REPORT.md`-style artifact at a fixed path) — not a timestamped history. Git history is the audit trail if a past report needs to be recovered.

**Block strictness (PUBLISH-01)**
- D-04: All four newly-covered content kinds (units, scenarios, playlists, speak-stages) hard-block on any detected regression, exactly like lessons do today. No warn-only tier for any kind. If a legitimate trim gets blocked, the resolution is the same one the existing guard already supports: push the DB-side change first (the guard has always tolerated Postgres-ahead-of-git; it only refuses git-ahead-of-Postgres).

**Exam content scope**
- D-05: Whether exam papers/tasks (TEF/TCF/DELF) are authored seed-direct the same vulnerable way, and therefore need the same guard, is explicitly undecided by the user — this phase's research/planning must investigate how exam content is actually authored and published, then make the call, rather than assuming either way. **This research question is answered below, with evidence: see "D-05 Investigation Result."**

### Claude's Discretion
- The exact "richness" comparator per content kind (unit → lessonIds.length, scenario/playlist → a size/version field, speak_stage → block count) — per research/ARCHITECTURE.md, this is a data-shape problem with a generalizable pattern from the existing lesson comparator, not something the user needs to weigh in on. Pick comparators consistent with each kind's existing versioning/richness signal. **Verified concretely below per-kind against the actual schema.**
- Exact diff report format/layout (markdown table, plain text, etc.) and the exact fixed file path/name for the on-disk report.

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope. The exam-content question (D-05) is not deferred to a future phase; it is an open investigation *within* this phase that research/planning must resolve before or during implementation.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| PUBLISH-01 | Publishing content blocks overwriting git-newer content across all content kinds (units, scenarios, playlists, speak-stages) — not just lesson bodies | Section "4·0 guard — current shape" (exact code location, lines 588-655) + "Per-Kind Comparator Design" (verified schema fields per kind) + "Common Pitfalls" (Pitfall 6 analysis, directionality) |
| PUBLISH-02 | An author sees a human-readable pre-publish diff report (what changed, size deltas) before publishing | Section "Diff Report — What Already Exists to Build On" (step 7 of publish-content.ts already computes count deltas) + "Architecture Patterns" (where to add file-write, what "size deltas" should mean per kind) |
</phase_requirements>

## Summary

This phase extends code that already exists, is already proven, and is already running in production on every publish. `ealch-admin/scripts/publish-content.ts` step "4·0 RULE no-silent-regression" (lines 560-655) is a directional, version-aware guard: it reads the git-committed `seed.json` via `git show HEAD:...`, compares each committed lesson's version against what Postgres is about to publish, and refuses (`process.exit(1)`) if any lesson would be deleted or reverted. Today it inspects `committed.lessons` only. The fix is mechanical: run the identical committed-vs-about-to-publish comparison for `units`, `scenarios`, `playlists`, and `speakPath`, each already read from Postgres at step 1 of the same script and each already present (or absent, in Unit's case — see below) in the git-committed `seed.json`.

The four kinds are NOT uniform in what "richness" signal they carry. `Scenario`, `Playlist`, and `SpeakStage` each carry their own `version: number` field embedded in the JSON body — exactly like `Lesson.version` — so their comparator can copy the lesson pattern verbatim (git-version > db-version ⇒ block). `Unit`, however, has **no version field of any kind** in its type definition (`ealch-v2/src/content/schema.ts:1713-1747` — `id, track?, level?, seq, title, sub, lessonIds, canDo?, themes?, prereqUnitIds?`, nothing else). A unit's only genuinely comparable richness signal in the committed-seed shape is structural: `lessonIds.length` (and, as a secondary signal, whether `canDo`/`overview`-equivalent fields are present in git but absent in DB — mirroring Pitfall 6's "the incident hit `overview`, not just `body`" lesson). This is not a discretionary style choice; it is dictated by what the type actually contains.

For PUBLISH-02, the diff-report requirement is a smaller lift than it first appears: `publish-content.ts` step 7 ("What changed", lines 1074-1128) **already computes and prints per-kind count deltas** (`domains/themes/units/lessons/items/scenarios/playlists/examTasks/examPapers`) comparing the previous published snapshot's `counts` against the candidate's. What's missing is (a) writing that same output to a fixed on-disk file in addition to the console, and (b) doing so unconditionally, including the noop/dry-run paths, per D-02. This is an additive change to an existing, well-understood code block, not new diffing logic.

The D-05 exam-content question has a clear, evidence-based answer: **exam content structurally cannot suffer this failure mode and does not need the guard.** `ExamTask`/`ExamPaper` are deliberately excluded from `seed.json` (confirmed: neither key appears in any `ealch-v2/src/content/*.json` or is referenced by the `seed` object construction at `publish-content.ts:986-990`; the code comment at lines 209-222 documents this as a deliberate decision — "exams do not ship offline"). Exam content is authored via `apply-paper.ts`, which writes `paper.ts` (a git-tracked TypeScript module) **directly into Postgres** (`content_exam_tasks`/`content_exam_papers`, status `in_review`), then `promote-paper.ts` flips status to `published`. There is no step anywhere that regenerates the git-tracked `paper.ts` source from Postgres — the flow is one-directional (git source → DB), unlike lessons/units/scenarios/playlists/speak-stages where `seed.json` is regenerated FROM Postgres on every publish (`publish-content.ts` step 9, line 1181) and can therefore be clobbered. The guard's entire reason to exist is "step 9 overwrites a git artifact from the DB, so anything git-only and DB-behind gets destroyed." Since exam content is never part of what step 9 writes, that destructive step never touches it. Extending the guard to exam content would be solving a problem that cannot occur for this content kind under the current architecture.

**Primary recommendation:** Generalize the existing step 4·0 block into a small, per-kind comparator loop (reusing the exact `committed vs. live` pattern already proven for lessons), extract the comparator and diff-count logic into a new pure, testable module (`drift-guard.logic.ts`, sibling to the existing `seed-cut.logic.ts`/`prune.logic.ts` pattern) so it can be unit-tested without a live Postgres connection, and extend step 7's existing diff-count computation to also write a fixed-path `PUBLISH-REPORT.md`-style file. Do not extend the guard to exam content — document the D-05 finding as a closed, evidence-based "no" rather than silently omitting exam content from scope.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Drift detection (git-committed seed vs. about-to-publish DB state) | Publish pipeline (Node CLI script, `ealch-admin/scripts/`) | — | Runs entirely server-side/local-dev, before any Storage write or DB mutation; no client, no edge function involved |
| Per-kind richness comparator | Publish pipeline (new `.logic.ts` module) | — | Pure data-shape logic (no I/O), should be extracted for testability exactly as `itemsReferencedBy` was moved to `seed-cut.logic.ts` |
| Diff report generation (counts, deltas) | Publish pipeline | Local filesystem (report file write) | Same script already computes counts at step 7; the extension is "also write to disk," not a new computation tier |
| Manual recovery after a block | Publish pipeline (sibling script, `restore-*-from-seed.ts` pattern) | — | Existing pattern for lessons; extending to new kinds keeps recovery UX consistent, per CONTEXT.md code_context |
| Exam content authoring/publishing | Publish pipeline, but a *separate* sub-flow (`scripts/exam/apply-paper.ts` → Postgres → `promote-paper.ts`) | — | Confirmed to never touch `seed.json`; out of this phase's guard scope (see D-05 finding) |

## D-05 Investigation Result: Exam Content Does NOT Need the Guard

**Question:** Is exam content (TEF/TCF/DELF papers/tasks) authored seed-direct the same vulnerable way as lessons/units/scenarios/playlists/speak-stages?

**Answer: No — verified architecturally, not assumed.**

Evidence, in order of what was checked:

1. **`ExamTask`/`ExamPaper` are read from Postgres at step 1** of `publish-content.ts` (lines 356-366, `content_exam_tasks`/`content_exam_papers`) and mapped onto the full `corpus` object (line 543) that becomes the OTA snapshot. So far this looks the same as lessons/units/etc.

2. **But `ExamTask`/`ExamPaper` are explicitly excluded from the `seed` object** — the object that gets written to `ealch-v2/src/content/seed.json` at step 9 (line 1181). Compare `corpus` (line 543, includes `examTasks, examPapers`) against `seed` (lines 986-990, does NOT include `examTasks`/`examPapers` at all). The code's own comment (lines 209-222) documents why: *"exams do not ship offline (exam-pack decision 11.6). Audio dominates the payload... Exam content reaches the app over the network snapshot only."*

3. **Repo-wide grep confirms**: no `.json` file under `ealch-v2/src/content/` contains an `examTasks` or `examPapers` key (only `schema.ts`/`schema.test.ts`/one test fixture reference the *type*, never actual seed data). `seed.json` — the file the drift guard protects — has never held exam content and cannot be "ahead" on it.

4. **How exam content is actually authored**, traced through `scripts/exam/apply-paper.ts` and `scripts/exam/promote-paper.ts`: a paper is authored as a git-tracked TypeScript module (e.g. `scripts/tef-blanc02/paper.ts`, exporting `PAPER`/`TASKS`/etc.), then `apply-paper.ts` validates it (`validateExamPaper`/`validateExamTask`) and writes it **directly into Postgres** inside one transaction, landing at status `in_review`. `promote-paper.ts` later flips the specific task/paper rows (matched by the paper's own declared `taskIds`, not by format+variant alone — a deliberate fix documented in that file's own header, itself an example of the same "one shared writer, many formats" discipline this phase should follow) to `published`.

5. **The critical asymmetry**: nothing anywhere regenerates `paper.ts` (the git source) from Postgres. The failure mode the drift guard exists to prevent is specifically "step 9 regenerates a git artifact FROM the DB, silently destroying git-only content that predates the DB read." For exam content, there is no step 9 equivalent — the git source (`paper.ts`) is never rewritten by any script. The worst-case failure for exam content is the *opposite* shape: someone edits `paper.ts` and forgets to re-run `apply-paper.ts`, leaving Postgres stale relative to git. That is an authoring-workflow gap (a forgotten manual step), not a publish-time data-destruction hazard — publishing in that scenario ships the *older* DB content, but the git source file itself is never touched or destroyed, unlike the lesson/unit/scenario/playlist/speak-stage case where the git file IS the thing that gets overwritten.

**Recommendation for the planner:** Close D-05 explicitly in the plan's scope statement as "investigated, exam content is architecturally exempt — no guard extension needed for TEF/TCF/DELF," citing this section. Do not add exam papers/tasks to the step 4·0 comparator loop. If a future phase changes how exams are authored (e.g., introduces a seed-direct exam-editing script that bypasses `apply-paper.ts`), that would reopen this question — but no such script exists today (confirmed by grep for `seed.json` writes anywhere under `scripts/exam/` and `scripts/*tef*`/`*tcf*`/`*delf*`: zero matches).

## Standard Stack

No new libraries are needed. This phase is a pure extension of existing, hand-rolled logic in TypeScript, run via `tsx`.

### Core (existing, reused)
| Library | Version | Purpose | Why Standard (for this codebase) |
|---------|---------|---------|-----------------------------------|
| `pg` | ^8.22.0 | Postgres client, already used throughout `publish-content.ts` | No change needed |
| `tsx` | ^4.23.0 | Runs `.ts` scripts directly (`pnpm content:publish`) | Existing script runner |
| Node built-in `node:test` | Node 24.15.0 (verified installed) | Test runner for `*.test.ts` in `scripts/` (`pnpm test` → `node --import tsx --test "scripts/**/*.test.ts"`) | Matches the exact pattern used by `publish-cut.logic.test.ts`/`publish-columns.test.ts` |
| `node:child_process` (`execFileSync`) | built-in | Reads `git show HEAD:...` for the committed seed — already the guard's read mechanism | No change needed |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `node:fs` (`writeFileSync`) | built-in | Already imported in `publish-content.ts` (line 28) for writing `seed.json`; reuse for the new `PUBLISH-REPORT.md`-style file | PUBLISH-02's on-disk report write |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Hand-rolled per-kind comparator loop | A generic JSON-diff library (e.g. `deep-diff`, `fast-json-patch`) | Rejected: the guard needs *directional, version-aware* semantics ("git newer than DB ⇒ block"), not raw structural diffing — a generic diff library would report every DB-ahead publish (the normal case) as "changed," reintroducing exactly the false-positive failure Pitfall 6 warns about. The existing lesson comparator is deliberately narrow (loss/reversion only) and that narrowness is the point. |
| Plain-text/console diff report | A markdown-table-rendering library | Rejected: step 7 already renders counts as plain aligned text with no library; matching that established, dependency-free style keeps the phase's footprint minimal (D-04/D-02 do not require rich formatting, only readability). |

**Installation:** None — no new dependencies to add. `npm install` (ealch-admin uses pnpm) is a no-op for this phase.

**Version verification:** Not applicable — no third-party package versions to verify; only internal code is touched.

## Architecture Patterns

### System Architecture Diagram

```text
┌────────────────────────────────────────────────────────────────────────┐
│ pnpm content:publish [--dry-run]                                       │
│                                                                          │
│  1. Read published rows from Postgres                                  │
│     content_units (kind=unit/lesson/scenario/playlist/speak_stage)     │
│     content_items, content_exam_tasks, content_exam_papers              │
│     content_domains, content_themes                                    │
│         │                                                               │
│         ▼                                                               │
│  4. validateCorpus(corpus)  ── hard gate, unrelated to this phase       │
│         │                                                               │
│         ▼                                                               │
│  4·0 NO-SILENT-REGRESSION GUARD  ◄── THIS PHASE EXTENDS HERE            │
│     ┌──────────────────────────────────────────────────────────┐       │
│     │ git show HEAD:ealch-v2/src/content/seed.json              │       │
│     │        │                                                   │       │
│     │        ▼                                                   │       │
│     │ for each kind in [lesson, unit, scenario, playlist,        │       │
│     │                    speak_stage]:                            │       │
│     │   compare committed[kind] vs. live[kind] by id             │       │
│     │   → missing in DB           = BLOCK (deleted)               │       │
│     │   → richness signal regressed = BLOCK (reverted)            │       │
│     │   → DB has it, git doesn't  = FINE (normal direction)       │       │
│     │        │                                                   │       │
│     │        ▼ (no losses found)                                 │       │
│     │ NEW: write PUBLISH-REPORT.md (fixed path, overwritten)      │       │
│     │      + print same report to terminal                        │       │
│     └──────────────────────────────────────────────────────────┘       │
│         │ (git-ahead-of-DB found)         │ (clean)                    │
│         ▼                                  ▼                            │
│    process.exit(1), NOTHING published   continue to step 5+ (seed cut, │
│    points at restore-*-from-seed.ts     bytes, upload, write seed.json,│
│                                          record version)                │
└────────────────────────────────────────────────────────────────────────┘
                                             │
                                             ▼  (exam content: separate flow,
                                                 never touches seed.json —
                                                 see D-05 finding — no guard
                                                 extension needed here)
```

### Recommended Project Structure

No new directories. Extend in place:

```
ealch-admin/scripts/
├── publish-content.ts              # step 4·0 block generalized (loop over kinds)
│                                    # step 7 block extended (write report file)
├── drift-guard.logic.ts            # NEW — pure comparator functions, one per
│                                    #   kind's richness signal, extracted for
│                                    #   testability (mirrors seed-cut.logic.ts)
├── drift-guard.logic.test.ts       # NEW — unit tests, hand-built fixtures,
│                                    #   no DB required (mirrors publish-cut.logic.test.ts)
├── restore-lesson-bodies-from-seed.ts   # existing lesson recovery script
├── restore-units-scenarios-from-seed.ts # NEW, or extend the existing script —
│                                    #   see "Recovery Script" pattern below
└── seed-cut.logic.ts, prune.logic.ts, snapshot-utils.ts   # existing siblings,
                                     # unchanged, shown for pattern reference
```

### Pattern 1: Directional, Version-Aware Comparator (the proven lesson pattern)

**What:** Compare each committed (git) item against its live (DB) counterpart by id. Block only on loss (missing in DB) or regression (DB richness signal < git richness signal). Never block on mere difference.

**When to use:** For every content kind that (a) is stored in `content_units` and (b) is written into `seed.json` by step 9 — i.e. `lesson` (existing), `curriculum_unit`, `scenario`, `playlist`, `speak_stage`.

**Example (existing, verbatim from `publish-content.ts:614-633` — the pattern to replicate per kind):**
```typescript
// Source: ealch-admin/scripts/publish-content.ts (current, lines 614-633)
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
  // ... losses.length > 0 ⇒ die(), else log success
}
```

### Pattern 2: Per-Kind Comparator Design (verified against actual schema)

This is the concrete answer to the "Claude's Discretion" comparator question in CONTEXT.md, verified against `ealch-v2/src/content/schema.ts`:

| Kind | Has body-embedded `version`? | Verified richness signal | Comparator |
|------|------------------------------|---------------------------|------------|
| `Lesson` (existing) | Yes (`schema.ts:1321`) | `version`, tie-broken by `sections.length` when equal (see `restore-lesson-bodies-from-seed.ts:277-282` for the exact tie-break the recovery script already uses) | `db.version < git.version` ⇒ block |
| `Scenario` | Yes (`schema.ts:1784`) | `version` | `db.version < git.version` ⇒ block (identical pattern to Lesson) |
| `Playlist` | Yes (`schema.ts:1848`) | `version` | `db.version < git.version` ⇒ block (identical pattern to Lesson) |
| `SpeakStage` | Yes (`schema.ts:2654`) | `version` | `db.version < git.version` ⇒ block (identical pattern to Lesson) |
| `Unit` | **No — confirmed absent from the type** (`schema.ts:1713-1747`: `id, track?, level?, seq, title, sub, lessonIds, canDo?, themes?, prereqUnitIds?` — no `version` field exists) | `lessonIds.length` (structural — a unit's declared lesson roster is the only thing that can meaningfully "shrink") | `db.lessonIds.length < git.lessonIds.length` ⇒ block. **Caveat:** step 2 of the publish pipeline (lines 525-534) legitimately prunes a unit's `lessonIds` down to only currently-published lessons — this is EXPECTED and not a regression. The comparator must run against `prunedUnits` (the post-step-2 value, which is what actually becomes `units`/`live`), not raise a false alarm on lessons that are correctly unpublished. This is exactly the same class of false-positive Pitfall 6 warns about, and it is avoidable by comparing against the already-pruned `units` array the script already computes, not by re-deriving pruning logic. |

**Field-scope note (Pitfall 6 compliance):** The 2026-07-31 incident hit `overview` (a `Lesson`-only field), not `body`/`sections` alone. The existing lesson comparator does NOT check `overview` presence explicitly — it relies on `version` as the single source of truth for "is this richer." `restore-lesson-bodies-from-seed.ts:283-285` DOES separately check `db.overview && !git.overview` as an extra guard the publish-time comparator lacks. **This is a real, currently-live gap in the shipped guard**, not something this phase invents: a hypothetical publish where DB version ≥ git version but DB is missing an `overview` git has would currently pass the 4·0 guard undetected. Flagging this for the planner: consider whether closing this specific gap (adding an `overview`-presence check to the lesson comparator, not just the new kinds) belongs in this phase's scope, since PUBLISH-01's stated goal is exactly "not just lesson bodies" and the roadmap's own Success Criterion 4 requires the guard be "regression-tested against the shape of the 2026-07-31 incident (overview collapse, not just body loss)."

### Pattern 3: Diff Report — What Already Exists to Build On

**What:** `publish-content.ts` step 7 (lines 1074-1128, "── 7. What changed ──") already:
- Downloads the previously-published snapshot bytes from Storage and computes a content digest (excluding `version`) to detect a true no-op.
- Prints a `v{previous} → v{version}` block with per-kind count deltas: `domains, themes, units, lessons, items, scenarios, playlists, examTasks, examPapers` (note: `speakPath`/`speak_stage` count is NOT currently included in this delta block — a gap to close for PUBLISH-02's "what changed" to be complete across all five newly-guarded kinds).
- Prints checksums.
- Runs on `--dry-run` too (this block executes before the `DRY_RUN` early-return at line 1147).

**What's missing for PUBLISH-02:**
1. `speakPath`/`speak_stage` is absent from both `counts`/`seedCounts` (lines 1047-1066) and the printed delta block — add it for parity with the four other newly-guarded kinds.
2. The report is printed to console only — never written to a file. D-01/D-03 require also writing to a single, fixed-path, overwritten file.
3. D-02 requires the report to generate "on every publish... build the review habit" — verify the noop path (line 1099-1145) and the first-snapshot path (line 1102-1103) both still produce a report file, not just console output, since both currently return/exit before any file-write step would naturally sit.

**Example (existing, the block to extend — `publish-content.ts:1111-1126`):**
```typescript
// Source: ealch-admin/scripts/publish-content.ts (current, lines 1111-1126)
const p = previous.counts ?? {};
const d = (k: keyof typeof counts) => {
  const delta = counts[k] - (Number(p[k]) || 0);
  return `${counts[k]} (${delta >= 0 ? '+' : ''}${delta})`;
};
console.log(`  v${previous.version} → v${version}`);
console.log(`    domains:    ${d('domains')}`);
console.log(`    themes:     ${d('themes')}`);
console.log(`    units:      ${d('units')}`);
console.log(`    lessons:    ${d('lessons')}`);
console.log(`    items:      ${d('items')}`);
console.log(`    scenarios:  ${d('scenarios')}`);
console.log(`    playlists:  ${d('playlists')}`);
console.log(`    examTasks:  ${d('examTasks')}`);
console.log(`    examPapers: ${d('examPapers')}`);
```
Extending this to also `writeFileSync(REPORT_PATH, reportText, 'utf8')` alongside each `console.log` (or building `reportText` as a string first and both printing and writing it) is the minimal, additive change.

### Pattern 4: Recovery Script Extension

`restore-lesson-bodies-from-seed.ts` is lesson-only (`RESTORE_IDS: string[]` of lesson ids, queries `content_units where kind = 'lesson'`). CONTEXT.md's code_context flags this "may need extending for the newly-covered kinds." Two viable approaches, both consistent with the codebase's own stated pattern of generalizing rather than copy-pasting scripts (see `apply-paper.ts`'s header, which explicitly describes moving from "one writer per format" to "one shared writer" after a copy-paste bug):
- **(a) Generalize in place:** parameterize `restore-lesson-bodies-from-seed.ts` by kind (a `--kind lesson|unit|scenario|playlist|speak_stage` flag), reusing its transaction/insert-or-update/validate structure.
- **(b) Sibling scripts per kind:** faster to write, but risks the exact "two writers, one fixed" bug `apply-paper.ts`'s own header documents from its own history.

Given the codebase's demonstrated preference (evidenced twice: `apply-paper.ts` generalizing from per-format copies, and `itemsReferencedBy` moving to a shared `seed-cut.logic.ts`), **(a) is the pattern-consistent choice**, but this is a genuine judgment call the planner should make explicit rather than defaulting silently — the block message the guard prints (mirroring line 645: `pnpm tsx scripts/restore-lesson-bodies-from-seed.ts`) must point at whatever this phase actually builds.

### Anti-Patterns to Avoid
- **Raw equality diffing ("any difference = block"):** Explicitly the #1 failure mode in PITFALLS.md Pitfall 6 — would false-positive on every normal DB-ahead publish and get bypassed under deadline pressure. The existing lesson comparator already avoids this; do not regress the new kinds to a cruder check.
- **Comparing `units` before step 2's pruning:** would treat the pipeline's own correct, expected `lessonIds` pruning (line 525-534) as a false regression. Compare against `prunedUnits`, the value that is actually about to be written to `seed.json`.
- **A silent, unlogged bypass flag:** PITFALLS.md explicitly calls out "an auditable, not silent" escape hatch. The existing guard has no bypass flag at all today (the only escape hatch is running `restore-*-from-seed.ts` first) — if this phase adds one, it must log the specific unit/kind being force-overwritten, per Pitfall 6's stated mitigation. (Not required by CONTEXT.md's locked decisions, which specify hard-block-only with no warn tier — flagging only in case a future bypass need arises.)
- **Extending the guard to exam content:** would add real engineering cost (new comparator, new test fixtures) for a failure mode that cannot occur given the current architecture — see D-05 finding.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|--------------|-----|
| "Is content A meaningfully richer than content B" | A generic structural/semantic diff algorithm | The existing narrow, per-field comparator pattern already proven for `Lesson` | The domain-specific "richness" signal (version number, or lessonIds count) is simpler and more correct than any generic diff would be — a generic diff cannot know that a DB-ahead publish is fine and a git-ahead one is not; only domain knowledge of the versioning contract can |
| Reading the git-committed seed | A new git-diffing library or `simple-git`-style wrapper | The existing `execFileSync('git', ['show', 'HEAD:...'])` call (already in both `publish-content.ts` and `restore-lesson-bodies-from-seed.ts`) | Already implemented, already handles the no-git-history graceful-skip case correctly; a new implementation risks losing that graceful degradation |
| Pretty-printing the diff report | A markdown table library, a CLI-table library (`cli-table3`, etc.) | Plain aligned `console.log` text, matching the existing step 7 style | Zero new dependencies; the existing style is already legible and consistent with the rest of the script's output |

**Key insight:** Every piece of machinery this phase needs already exists in the codebase in a proven, narrower form. The work is generalization (loop over kinds instead of one kind) and extension (also write to a file), not invention.

## Common Pitfalls

### Pitfall 1: Raw-diff or naive equality checks reintroduce the exact hazard class this guard exists to prevent
**What goes wrong:** A "simpler" implementation that blocks on ANY difference between committed and live content (rather than only losses/regressions) will false-positive on every normal, healthy publish — because Postgres being ahead of git is the expected, constant state of a working pipeline.
**Why it happens:** "Add a diff check" sounds simpler as raw equality than as directional/version-aware comparison; teams build to the specific incident (body-only, lesson-only) rather than the general hazard class.
**How to avoid:** Reuse the exact `db.version < git.version` / `!db` pattern already proven for lessons, for every kind that has a version field. For `Unit` (no version field), use the structural `lessonIds.length` shrink check, computed against POST-pruning `units`, not the raw DB read.
**Warning signs:** The guard's first real-world use blocks a normal, correct publish (Postgres genuinely ahead). If this happens, the directionality logic is wrong and needs fixing immediately, not disabling.
**Source:** `.planning/research/PITFALLS.md` Pitfall 6 (HIGH confidence — first-party, grounded in this repo's own 2026-07-31 incident).

### Pitfall 2: Scoping the extension to `body`/structural fields only, missing non-structural regressions (the `overview` blind spot, recurring)
**What goes wrong:** The 2026-07-31 incident's second failure mode was `overview` collapsing on `sons.01/02/03` + `a1.04` + `a2.01` — a field that doesn't change `sections.length` or trigger a version comparison. The CURRENT lesson comparator in `publish-content.ts` (unlike the separate `restore-lesson-bodies-from-seed.ts` recovery script) does not check `overview` presence at all — only `version`. This same blind spot risks recurring for the new kinds: `Scenario`'s `turns[].alts`/`userEn` enrichment (the 2026-08-09 role-play rebuild incident, documented in `restore-lesson-bodies-from-seed.ts`'s own header) is a real precedent — a same-version, richer-content divergence that no version-only check can see, because the version number wasn't bumped when the content was enriched.
**Why it happens:** Authoring scripts don't always bump `version` when they enrich a field that isn't sections/count-shaped (same root cause project memory calls out in `ealch-a2-25-y-en-build`/`ealch-check-seed-db-parity` blind spots).
**How to avoid:** At minimum, replicate `restore-lesson-bodies-from-seed.ts`'s `db.overview && !git.overview` extra check inside the publish-time guard too (currently only the recovery script has it — a real, pre-existing gap, not something this phase introduces but one it can close while already touching this code). For scenarios specifically, consider whether a same-version-but-fewer-`alts`/missing-`userEn` check is warranted, mirroring the documented 2026-08-09 incident shape.
**Warning signs:** The guard is scoped to exactly the field(s) involved in the ORIGINAL incident and nothing else (PITFALLS.md's own stated warning sign for this exact pitfall).
**Source:** `.planning/research/PITFALLS.md` Pitfall 6; `restore-lesson-bodies-from-seed.ts` lines 91-107 (role-play alts incident); `publish-content.ts` lines 614-633 (current lesson comparator, version-only).

### Pitfall 3: Comparing `units` before step 2's expected pruning produces false positives
**What goes wrong:** Step 2 of `publish-content.ts` (lines 525-534) deliberately prunes each unit's `lessonIds` down to only currently-published lessons — "A unit listing an unpublished lesson is NORMAL." If the new unit comparator runs against the raw `units` array (pre-pruning) instead of `prunedUnits`, or if it runs against the wrong side of the comparison, a perfectly healthy publish where a lesson is legitimately still in review would look like a regression.
**Why it happens:** Copy-pasting the lesson comparator pattern without noticing units go through an extra pruning step lessons don't.
**How to avoid:** Explicitly compare `committed.units[].lessonIds.length` against `prunedUnits.find(...).lessonIds.length` (the value that is actually about to ship), not the pre-prune `units` read at step 1.
**Warning signs:** The guard blocks immediately on a routine publish where a unit's lesson is mid-review — a giveaway the pruning step wasn't accounted for.

### Pitfall 4: Treating exam content as in-scope "because it's also seed-direct-ish" without checking the actual data flow
**What goes wrong:** Extending the guard's comparator loop to `examTasks`/`examPapers` (because they're read from Postgres alongside everything else at step 1) would add real code and test surface for a hazard that architecturally cannot occur — exam content is excluded from `seed.json` and is never regenerated from Postgres, so there's nothing for the guard to protect.
**Why it happens:** Surface-level pattern-matching ("it's content_units-adjacent and Postgres-sourced, so it must have the same hazard") without tracing the actual write path.
**How to avoid:** Trace the specific write to `seed.json` (step 9) and confirm which `Corpus` fields are actually assigned into the `seed` object (not the full `corpus` object) — done in this research, see D-05 section above.
**Source:** Direct code read, `publish-content.ts` lines 543 vs. 986-990.

## Code Examples

### The exact block to generalize (current state, unmodified)
```typescript
// Source: ealch-admin/scripts/publish-content.ts, lines 588-655 (current)
{
  let committed: { lessons?: Lesson[] } | null = null;
  try {
    const { execFileSync } = await import('node:child_process');
    const repoRoot = resolve(process.cwd(), '..');
    committed = JSON.parse(
      execFileSync('git', ['show', 'HEAD:ealch-v2/src/content/seed.json'], {
        cwd: repoRoot,
        maxBuffer: 512 * 1024 * 1024,
        encoding: 'utf8',
      })
    );
  } catch (err) {
    console.log(
      `  ! no-silent-regression: could not read the committed seed (${
        err instanceof Error ? err.message.split('\n')[0] : String(err)
      }) — guard SKIPPED`
    );
  }

  if (committed?.lessons) {
    const live = new Map(lessons.map((l) => [l.id, l]));
    const losses: string[] = [];
    for (const git of committed.lessons) {
      const db = live.get(git.id);
      if (!db) { losses.push(`${git.id}: ... would DELETE it`); continue; }
      if (db.version < git.version) { losses.push(`${git.id}: ... would REVERT it`); }
    }
    if (losses.length) {
      // ... die() with actionable message pointing at restore-lesson-bodies-from-seed.ts
    }
  }
}
```
**Generalization shape (illustrative, not prescriptive — planner/implementer's exact structure is discretionary):** the `{ lessons?: Lesson[] }` committed-seed type widens to `{ lessons?: Lesson[]; units?: Unit[]; scenarios?: Scenario[]; playlists?: Playlist[]; speakPath?: SpeakStage[] }` (matching the actual `Corpus`/seed shape), and the single `if (committed?.lessons)` block becomes a loop (or five near-identical blocks, or a shared helper parameterized by `{ committed: T[], live: Map<string,T>, richness: (t: T) => number, describe: (t: T) => string }`) — the last option is what enables extraction into `drift-guard.logic.ts` for unit testing.

### The existing recovery-script version/richness guard (pattern to extend for new kinds)
```typescript
// Source: ealch-admin/scripts/restore-lesson-bodies-from-seed.ts, lines 271-285
if (git.version < db.version) {
  die(`${id}: reference is v${git.version}, DB is v${db.version}. Refusing to restore an older version over a newer one.`);
}
if (git.version === db.version && git.sections.length < db.sections.length) {
  die(`${id}: same version (v${git.version}) but the reference has FEWER sections (${git.sections.length} vs ${db.sections.length}). Refusing, this would lose content.`);
}
if (db.overview && !git.overview) {
  die(`${id}: DB has an overview and the reference does not. Refusing to restore.`);
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|-------------------|---------------|--------|
| No publish guard at all | Version-aware, lesson-only guard (step 4·0) | Added after the 2026-07-31 incident, hardened again 2026-08-03/2026-08-09 (see `restore-lesson-bodies-from-seed.ts` header history) | Publishes now die loudly instead of silently destroying lesson content; this phase is the next hardening increment in that same lineage, not a new subsystem |
| Diff report: console-only count deltas | (this phase) console + fixed-path file | N/A — this phase | Builds an author review habit per D-02; no functional change to what's computed, only where it's persisted |

**Deprecated/outdated:** None — nothing in this phase replaces or removes existing behavior; it is purely additive (new kinds in the guard loop, new file-write in the diff-report step).

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|----------------|
| A1 | The best "richness" comparator for `Unit` is `lessonIds.length` (structural), because no version field exists on the type | Pattern 2 | LOW — this is directly verified against `schema.ts`, not assumed; included here only because the exact threshold/secondary-signal choice (e.g., whether to also check `canDo`/`themes` presence) is still a judgment call for the planner |
| A2 | Extracting the comparator into a new `drift-guard.logic.ts` module (rather than keeping the logic inline in `publish-content.ts`) is the right structural choice | Recommended Project Structure | LOW-MEDIUM — this is a strong pattern match to `seed-cut.logic.ts`/`prune.logic.ts`/`itemsReferencedBy`'s move history, but the planner could reasonably choose to keep it inline if the team's convention has shifted; if wrong, the cost is "logic stays harder to unit-test," not a functional bug |
| A3 | Generalizing `restore-lesson-bodies-from-seed.ts` in place (Pattern 4, option a) is preferable to writing sibling per-kind recovery scripts | Pattern 4 | LOW-MEDIUM — inferred from the codebase's own stated preference (`apply-paper.ts` header explicitly recounts a copy-paste bug from per-format scripts), not a locked decision; the planner/user could still prefer sibling scripts for a simpler diff/review per PR |

**If this table is empty:** N/A — see above; all three items are judgment calls flagged for the planner, not unverified factual claims about the domain (the underlying facts — schema field presence, code structure, historical incidents — are all directly verified from source).

## Open Questions (RESOLVED)

1. **RESOLVED in plan 01-01.** Should the publish-time lesson comparator also gain the `overview`-presence check that only `restore-lesson-bodies-from-seed.ts` currently has?
   - What we know: The recovery script has this check (line 283-284); the publish-time guard does not. This is a real, pre-existing asymmetry, not something introduced by this phase.
   - What's unclear: Whether closing this gap is in-scope for Phase 1 (it directly serves PUBLISH-01's "not just lesson bodies" framing and the roadmap's Success Criterion 4 about the overview-collapse shape) or should be flagged as a fast-follow.
   - Recommendation: Include it — it's a small, low-risk addition to code already being touched, and the roadmap's own success criteria explicitly reference the overview-collapse incident shape as the regression test target.
   - Decision: Included, as `findPresenceLosses` in `drift-guard.logic.ts` (plan 01-01), wired into the guard in plan 01-02.

2. **RESOLVED in plan 01-03.** Exact on-disk report path/name.
   - What we know: D-03 specifies "a single, overwritten file... e.g. a `PUBLISH-REPORT.md`-style artifact at a fixed path," explicitly left to Claude's discretion.
   - What's unclear: Whether it should live at repo root, inside `ealch-admin/`, or alongside `seed.json` in `ealch-v2/src/content/`.
   - Recommendation: `ealch-admin/PUBLISH-REPORT.md` (co-located with the script that generates it, not with the app content it's reporting on) — but this is genuinely discretionary per CONTEXT.md and the planner should decide and document it as a locked implementation detail.
   - Decision: `ealch-admin/PUBLISH-REPORT.md`, as recommended, with a `.gitignore` negation added (plan 01-03 Task 3) since the repo's blanket `*.md` ignore would otherwise have silently defeated D-03's "git history is the audit trail" rationale.

3. **RESOLVED in plan 01-02.** Does the new unit/scenario/playlist/speak-stage recovery path need a working, tested script in THIS phase, or is documenting the manual Postgres UPDATE sufficient for v1?
   - What we know: `restore-lesson-bodies-from-seed.ts` exists and is actively used (its header shows at least 3 rounds of real incidents it recovered from). CONTEXT.md's code_context says extending it "may need" to happen, not that it must.
   - What's unclear: Whether the roadmap's Phase 1 scope expects a working recovery script for the new kinds, or just the guard + report (with recovery being "push the DB-side change first," per D-04, which for a human-authored unit/scenario edit might mean re-running whatever admin-console action or script originally wrote it, not necessarily a new dedicated restore script).
   - Recommendation: Since D-04 explicitly names "push the DB-side change first" as the escape hatch (not "run a restore script"), and the guard's own block message just needs to point somewhere actionable, the planner should decide whether that "somewhere" is a new/generalized restore script (higher effort, matches the lesson precedent) or a documented manual procedure (lower effort, may be sufficient if seed-direct authoring of units/scenarios/playlists/speak-stages is rarer than lesson seed-direct authoring — this frequency is not verified in this research pass and would need a quick grep of `scripts/author-*` for how many touch `seed.json` directly for these four kinds vs. lessons).
   - Decision: No new recovery script built in this phase. The guard's block message names only the two recovery scripts that already exist (`restore-lesson-bodies-from-seed.ts`, `restore-unit-bodies-from-seed.ts` — the latter discovered during pattern-mapping as already covering units); scenarios/playlists/speak-stages fall back to D-04's "push the DB-side change first" manual path.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|--------------|-----------|---------|----------|
| Node.js | Running `tsx` scripts, `node --test` | ✓ | v24.15.0 | — |
| git CLI | The guard's `git show HEAD:...` read | ✓ | 2.43.0.windows.1 | Already gracefully skips (warns, doesn't block) if unavailable/no history — existing behavior, must be preserved |
| pnpm | `pnpm content:publish`, `pnpm test` | ✓ | 11.1.0 | — |
| Postgres (`DATABASE_URL`) | Reading published content at step 1 | Not probed live (requires credentials) — script itself refuses to run against PGlite/no-`DATABASE_URL` (`die()` at line 300-302) | — | None — this is by design; the script must run against a real Postgres, never a throwaway local DB, per its own existing safety check |

**Missing dependencies with no fallback:** None identified for local development of this phase — all required tooling (Node, git, pnpm) is present. Live Postgres access is required to actually run/test the full `content:publish` flow end-to-end, but the comparator logic itself (once extracted per Pattern 2) can be unit-tested without any DB connection, using hand-built fixtures — this is the intended test strategy (see Validation Architecture below), not a blocker.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Node built-in `node:test`, run via `tsx` (no Jest/Vitest in `ealch-admin`) |
| Config file | None — `package.json` script: `"test": "node --import tsx --test \"scripts/**/*.test.ts\""` |
| Quick run command | `pnpm test -- --test-name-pattern="drift-guard"` (or run the single new test file directly: `node --import tsx --test scripts/drift-guard.logic.test.ts`) |
| Full suite command | `cd ealch-admin && pnpm test` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|---------------------|--------------|
| PUBLISH-01 | Guard blocks when a committed unit/scenario/playlist/speak-stage is git-ahead of Postgres (deleted or reverted) | unit (pure comparator, hand-built fixtures) | `node --import tsx --test scripts/drift-guard.logic.test.ts` | ❌ Wave 0 — new file |
| PUBLISH-01 | Guard does NOT block when Postgres is ahead of git (the normal, routine case) — this is the false-positive regression test Pitfall 6 demands | unit | same file, additional test case | ❌ Wave 0 |
| PUBLISH-01 | Guard correctly ignores the step-2 unit `lessonIds` pruning as a non-regression | unit | same file | ❌ Wave 0 |
| PUBLISH-01 | Regression test reproducing the 2026-07-31 incident shape (overview collapse) generalized across kinds, per roadmap Success Criterion 4 | unit | same file, or a dedicated `drift-guard.incident.test.ts` | ❌ Wave 0 |
| PUBLISH-01 | No-git-history graceful skip still works (unmodified existing behavior) | unit or integration | Existing behavior already covered informally by the try/catch; consider an explicit test asserting the guard doesn't throw/block when `git show` fails | ❌ Wave 0 (currently untested even for the lesson case) |
| PUBLISH-02 | Diff report is written to a fixed path on every publish (including no-op and dry-run) | unit (test the report-building function in isolation) or a small integration check reading the written file after a `--dry-run` invocation against a real (or locally-run) Postgres | `node --import tsx --test scripts/drift-guard.logic.test.ts` for the pure formatting function; end-to-end confirmation is manual (`pnpm content:publish --dry-run` + inspect the file) since full-pipeline integration testing needs a live DB, matching this codebase's existing test posture (`publish-content.ts` itself is never invoked in its test suite — only its exported pure functions are) | ❌ Wave 0 for the pure function; manual for full pipeline, consistent with existing conventions |

### Sampling Rate
- **Per task commit:** `node --import tsx --test scripts/drift-guard.logic.test.ts` (fast, no DB)
- **Per wave merge:** `cd ealch-admin && pnpm test` (full suite, still no DB required — all existing `*.test.ts` files in `scripts/` are DB-free per the established pattern)
- **Phase gate:** Full suite green, PLUS a manual `pnpm content:publish --dry-run` run against a real (dev/staging) Postgres to confirm the guard and report behave correctly end-to-end — this manual step cannot be automated within this codebase's current test infrastructure (no test-Postgres harness exists; `publish-content.ts` explicitly refuses to run against PGlite).

### Wave 0 Gaps
- [ ] `ealch-admin/scripts/drift-guard.logic.ts` — the extracted, pure comparator + report-formatting functions (does not exist yet; today the logic is inline in `publish-content.ts`'s `main()`)
- [ ] `ealch-admin/scripts/drift-guard.logic.test.ts` — unit tests for the above, following the exact style of `publish-cut.logic.test.ts` (hand-built fixtures, `node:test`, no DB)
- [ ] No framework install needed — `node:test` + `tsx` are already the established, installed pattern

## Security Domain

`security_enforcement` is enabled in `.planning/config.json` (`security_asvs_level: 1`), so this section is included per the contract, but almost none of the OWASP ASVS categories apply to a local/CI-run, credential-gated CLI publish script with no network-facing surface, no user input, and no authentication boundary of its own (it inherits whatever access controls exist on `DATABASE_URL`/`SUPABASE_SERVICE_ROLE_KEY`, which are out of this phase's scope to change).

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|----------------|---------|--------------------|
| V2 Authentication | No | Not a network-facing service; runs with whatever local/CI credentials are already configured (`DATABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) — unchanged by this phase |
| V3 Session Management | No | N/A — no sessions |
| V4 Access Control | No | N/A — a local/CI operator script, not a multi-tenant surface |
| V5 Input Validation | Marginally | The guard reads `git show HEAD:...` output and `JSON.parse`s it (existing behavior, unchanged) — a malformed or maliciously crafted committed `seed.json` would already be a supply-chain concern predating this phase (it's git-tracked source, same trust boundary as any other committed file); no new external/untrusted input is introduced by this phase |
| V6 Cryptography | No | N/A — no new cryptographic operations; existing `sha256`/checksum logic (step 6) is untouched by this phase |

### Known Threat Patterns for this stack
| Pattern | STRIDE | Standard Mitigation |
|---------|--------|-----------------------|
| A future silent bypass flag that lets a stale/incomplete guard override without an audit trail | Repudiation | Per PITFALLS.md's explicit mitigation: any bypass mechanism (not required by this phase's locked decisions, which specify hard-block-only) must log which specific unit/kind was force-overwritten, not be a blanket flag |
| Writing the new `PUBLISH-REPORT.md` file with content sourced from `git show` output without sanitizing for path traversal or injection in the write path | Tampering (very low relevance) | The file path is a fixed, hardcoded constant (per D-03) — not derived from any external input — so there is no injection surface here; flagging only for completeness |

## Sources

### Primary (HIGH confidence — direct source reads)
- `ealch-admin/scripts/publish-content.ts` — full read, 1248 lines. Step 4·0 (lines 560-655, the guard to generalize), step 7 (lines 1074-1128, the diff-report block to extend), steps 1-2 (lines 305-534, where units/scenarios/playlists/speak-stages are read and pruned), step 9 (lines 1175-1182, where `seed.json` is written — confirms exactly which `Corpus` fields make it into the committed artifact).
- `ealch-admin/scripts/restore-lesson-bodies-from-seed.ts` — full read, 450 lines. The recovery-script pattern, its version/overview guard (lines 261-285), and its documented incident history (headers, 2026-07-31 through 2026-08-09) used to validate the "same-version divergence" and "overview blind spot" pitfalls above.
- `ealch-v2/src/content/schema.ts` — direct reads of `Lesson` (1307-1400ish), `Unit` (1713-1747), `Scenario`/`ScenarioTurn` (1755-1794), `Playlist`/`PlaylistTrack` (1796-1852), `SpeakStage` (2640-2655), `Corpus`/`EMPTY_CORPUS` (2657-2690) — used to verify exactly which types carry a `version` field and which don't.
- `ealch-admin/scripts/exam/apply-paper.ts` and `ealch-admin/scripts/exam/promote-paper.ts` — full/partial reads confirming the exam-authoring write path is git-source → DB-direct, never round-tripped back to a git artifact.
- `ealch-admin/src/db/schema.ts` (lines 283-330 area) — confirms `content_units.version` is a separate TABLE-level counter (bumped by the ops-console `publishUnit` action) distinct from any body-embedded `version` field; explains why the existing/extended guard must use body-embedded fields (what's actually mirrored into `seed.json`), not the table column.
- `ealch-admin/src/app/admin/content/actions.ts` (lines ~529-585) — confirms `publishUnit()`'s table-level version bump applies uniformly across all `content_units` kinds, and confirms every kind (including `scenario`, `playlist`, `speak_stage`, `lesson`) is initialized with `version: 1` in its body at creation, corroborating the schema read above.
- `ealch-admin/scripts/publish-cut.logic.test.ts`, `ealch-admin/scripts/publish-columns.test.ts` — confirm the established test pattern (pure-function extraction + `node:test`, no live DB) this phase should follow.
- `ealch-admin/scripts/env.ts` — confirms `publish-content.ts` deliberately refuses to run against PGlite/no-`DATABASE_URL`, informing the Environment Availability and Validation Architecture sections.
- `ealch-admin/package.json` — confirms test runner (`node --import tsx --test`) and the absence of Jest/Vitest in this package.
- Repo-wide grep for `seed\.json` and `seed-direct` under `ealch-admin/scripts/exam/` — zero matches, corroborating the D-05 finding.
- Environment probe (`node --version`, `git --version`, `pnpm --version`) — confirms tooling availability.

### Secondary (MEDIUM confidence)
- `.planning/research/ARCHITECTURE.md`, "Fix 1 — Content-publish safety" section — corroborates the integration point and blast-radius analysis; this research pass independently re-verified its claims against current source rather than trusting it at face value, and found it accurate with one addition (the `Unit`-has-no-version-field detail, which ARCHITECTURE.md states as "some size/version field" without specifying which — this research resolves that ambiguity).
- `.planning/research/PITFALLS.md`, Pitfall 6 — the directional/version-aware comparison argument, cross-checked against the actual current guard code and found to still apply (the current guard already follows this advice for lessons; the extension must preserve it for the new kinds).
- `.planning/ROADMAP.md`, Phase 1 section (lines 41-51) — Success Criteria used to shape the Validation Architecture test map and the Open Questions about overview-check scope.

### Tertiary (LOW confidence)
None — this phase's domain is entirely internal, first-party code with no external ecosystem claims requiring web verification.

## Metadata

**Confidence breakdown:**
- Standard Stack: HIGH — no new dependencies; all claims verified against `package.json` and actual imports.
- Architecture: HIGH — every integration point (line numbers, field names, function names) verified by direct source reads, not inferred from prior research summaries.
- D-05 (exam content scope): HIGH — the negative claim ("exam content does not need the guard") is backed by a positive trace of the actual write path (`apply-paper.ts` → DB, never DB → git) plus a repo-wide grep confirming absence, satisfying the "negative claims need verification" discipline.
- Pitfalls: HIGH for Pitfall 6 (first-party, grounded in this repo's documented incidents) and the two new pitfalls found in this pass (the `overview`-check asymmetry between the publish-time guard and the recovery script; the unit-pruning false-positive risk) — both independently verified by direct code comparison, not inference.
- Validation Architecture: MEDIUM-HIGH — the test framework and pattern are directly verified; the exact Wave 0 file names/structure are a reasonable, pattern-matched recommendation rather than a locked requirement.

**Research date:** 2026-09-19
**Valid until:** This research is tied to the current shape of `publish-content.ts`/`schema.ts`; treat as valid until either file is substantially modified by an intervening phase (none are scheduled before Phase 1 per the roadmap, which lists this as Phase 1 with no dependencies).

---
*Phase: 1-Content-Publish Drift Guard Extension*
*Context gathered: 2026-09-19*
