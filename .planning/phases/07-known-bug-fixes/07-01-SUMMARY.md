---
phase: 07-known-bug-fixes
plan: 01
status: complete
completed: 2026-09-21
---

# Plan 07-01 Summary: Pure Draft-Persistence Logic Layer (BUG-02)

## What was built

`ealch-v2/src/services/examDraft.logic.ts` — a pure, zero-runtime-import module implementing the exact ten-symbol export surface the plan specified: `DRAFT_VERSION`, `DRAFT_DEBOUNCE_MS`, `draftKey`, `buildDraft`, `serializeDraft`, `parseDraft`, `restoreState`, `isGraded`, `markGraded`, `hasContent`, plus the `DraftSpoken`/`ExamDraft` types. This is the tested contract that plan 07-02's `exam-section.tsx` wiring will call into for reading/writing/clearing the crash-recovery draft, rather than inventing the shape inline.

`ealch-v2/src/services/examDraft.logic.test.ts` — the colocated behavioral test suite, following the exact `node:test`/`node:assert` + explicit-`.ts`-extension import convention used by `examWeighting.logic.test.ts`.

Three things the module gets right, per the plan's own framing of BUG-02's real risk:

1. **The key never collides across papers/skills.** `draftKey(paperId, skill)` returns `` `exam-draft:${paperId}:${skill}` ``, deliberately NOT keyed on an `attemptId` — `exam_attempts`' primary key is the composite `(user_id, paper_id, skill)` (schema.sql lines 417-435), there is no synthetic id column to key off. `parseDraft` independently re-validates the caller's `paperId`/`skill` against what's stored, so a stale or foreign key can never resurrect another paper's answers (pinned by tests covering both a foreign paperId and a foreign skill).
2. **The recorded audio path never reaches disk (D-09).** `buildDraft` writes `{ transcript, unavailable, signals }` per spoken task and drops `audioUri` entirely — not as `null`, not as a key at all. `signals` (the measured `DeliverySignals`) is kept verbatim, honoring that module's own "a signal exists only if it was measured" doctrine. Pinned by a test asserting the serialized string contains neither the audio filename nor the substring `audioUri`.
3. **A corrupt, foreign, or version-mismatched draft degrades to null, never throws.** `parseDraft` wraps `JSON.parse` in try/catch and validates `v`/`paperId`/`skill` before trusting anything, normalizing missing containers to `{}`/`[]` so a partially-written draft still restores what it has.

## Verification performed

- `node --test src/services/examDraft.logic.test.ts`: **15/15 pass, 0 fail** (13 plan-specified behaviors + 2 extras: a `DRAFT_VERSION` stability check and a `buildDraft` `savedAt`/`now`-default check)
- `npm run typecheck` (`tsc --noEmit`): clean, no output, exit 0
- `npm test` (full suite, `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`): **5434/5434 pass, 0 fail** — confirms this plan is additive-only and broke nothing else
- All plan-specified `grep` acceptance criteria re-verified directly against the final committed file:
  - Zero non-type-only runtime imports
  - Zero `@/` alias imports
  - `exam-draft:${paperId}:${skill}` key format present verbatim
  - Zero case-insensitive occurrences of `attemptid` anywhere in the file (code AND comments)
  - Exactly one `audioUri` reference in code (the `restoreState` reconstruction; `buildDraft` never mentions it)
  - Test file imports via `from './examDraft.logic.ts'` (explicit extension, required for `node --test` ESM resolution)
  - `DRAFT_DEBOUNCE_MS = 1500` present verbatim

## Files created

- `ealch-v2/src/services/examDraft.logic.ts` (created, ~200 lines)
- `ealch-v2/src/services/examDraft.logic.test.ts` (created, ~170 lines)

Both committed in a single atomic commit (`feat(exam): pure draft key/serialize/parse/restore logic for BUG-02 (07-01 task 1)`).

## Deviations from the plan, with rationale

1. **Comment wording changed to avoid the literal substring "attemptId".** The plan's `<action>` block explicitly asked for a comment explaining "Do NOT use an `attemptId`" (citing CONTEXT.md's now-corrected D-07 prose), while the plan's own `<acceptance_criteria>` requires `grep -ci 'attemptid'` to output `0` — a literal contradiction, since writing the word "attemptId" in a comment to warn against it trips that same case-insensitive grep. Resolved by keeping the explanatory comment (citing the schema line range and the composite-PK reasoning) but rewording it to say "a per-attempt row id" instead of the camelCase token, which preserves the intended warning without the contiguous substring "attemptid" appearing anywhere in the file. Verified: `grep -ci 'attemptid'` now outputs `0` and the explanatory comment is still present at lines 45-49.
2. **Test count is 15, not exactly 13.** The plan's `<behavior>` list enumerates 13 required test cases; two additional tests were added (`DRAFT_VERSION is a stable positive integer` and `buildDraft stamps savedAt from the provided now, or Date.now() when omitted`) to directly exercise two exported symbols/behaviors (`DRAFT_VERSION`, and `buildDraft`'s `now` parameter/default) that the 13 listed behaviors touch only indirectly. The plan's own acceptance criterion says "reports `pass 13` or more" — 15 satisfies this.
3. **`node_modules` was missing from this worktree at task start** (fresh worktree checkout, not part of the plan's scope) and required a full `npm install` before `npm run typecheck`/`npm test` could run. Concurrent/overlapping install attempts on this machine's shared resources produced transient `ENOTEMPTY`/`EPERM` errors during the first few tries; resolved by removing `node_modules` and running one single, uncontested `npm install`, which completed cleanly (671 packages, 0 errors). This is an environment-setup step, not a deviation in the delivered code.

## Requirements satisfied

- **BUG-02** (this plan's slice): the pure logic layer is built, tested, and typed. The actual `exam-section.tsx` screen wiring (reading/writing AsyncStorage at the debounce/transition/backgrounding checkpoints, the mount-time restore effect, and `submit()`'s already-graded skip logic) is explicitly out of scope for 07-01 and is plan 07-02's job, per this plan's own objective statement.
