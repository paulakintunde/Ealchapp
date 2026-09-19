---
phase: 01-content-publish-drift-guard-extension
reviewed: 2026-09-19T00:00:00Z
depth: standard
files_reviewed: 4
files_reviewed_list:
  - .gitignore
  - ealch-admin/scripts/drift-guard.logic.test.ts
  - ealch-admin/scripts/drift-guard.logic.ts
  - ealch-admin/scripts/publish-content.ts
findings:
  critical: 0
  warning: 3
  info: 1
  total: 4
status: issues_found
---

# Phase 01: Code Review Report

**Reviewed:** 2026-09-19T00:00:00Z
**Depth:** standard
**Files Reviewed:** 4
**Status:** issues_found

## Summary

This phase generalizes the no-silent-regression drift guard from lessons-only
to lessons/units/scenarios/playlists/speak-stages, and extracts the publish
diff report into a pure, unit-tested `formatDiffReport`. The extraction and
comparator design are sound: `findVersionedLosses`, `findUnitLosses`, and
`findPresenceLosses` are pure, well-documented, and the 19 tests in
`drift-guard.logic.test.ts` all pass (`npx tsx --test`), and `tsc --noEmit`
is clean for both files. The unit-loss "don't false-positive on the
publisher's own prune" logic and the version-stripped content digest are
correctly implemented and match their test coverage.

Three issues keep this from being clean: one comparator wired into
production (`publish-content.ts`) has zero test coverage despite the file's
own stated goal of holding every regression surface open with a test; a
loose (type-unenforced) invariant in `formatDiffReport` creates a latent
crash path; and the new audit-trail file (`PUBLISH-REPORT.md`, tracked per
decision D-03) is written to disk before the operations it describes are
confirmed to have succeeded, so a failure partway through publish (e.g. a
Storage upload error) leaves a persisted "Mode: publish" report for a
version that was never actually recorded in the DB or seed.json. None of
these are correctness failures in the comparator logic itself, but the
report-file ordering issue undermines the specific guarantee this phase's
own commentary claims (the file's history "IS this repo's git history").

## Warnings

### WR-01: Unit-level presence-loss guard (canDo/themes) has zero test coverage

**File:** `ealch-admin/scripts/publish-content.ts:659-667`
**Issue:** `publish-content.ts` wires `findPresenceLosses<Unit>` into the
live guard to catch a unit that loses its `canDo` or `themes` field, exactly
the same shape of blind spot the lesson `overview` presence check exists to
catch (`drift-guard.logic.ts:148-160`). But `drift-guard.logic.test.ts` only
tests `findPresenceLosses` once, against a synthetic `Lesson` and the
`overview` field (lines 95-112). There is no test that constructs a `Unit`
missing `canDo`/`themes` and asserts the loss is detected. This is the exact
kind of regression the file's own header claims to guard against ("These
tests are that whole surface, held open") — for this specific production
code path, it is not held open. A future refactor of `findPresenceLosses` or
of how `fields` predicates are supplied could silently break unit-level
detection and nothing would fail.
**Fix:** Add a test mirroring the existing overview test, using a `Unit`
fixture and the same `fields` shape used in `publish-content.ts`:
```ts
test('it blocks a unit that lost its canDo', () => {
  const committed = [{ id: 'a1.04', canDo: 'Can order food' } as unknown as Unit];
  const live = mapOf([{ id: 'a1.04' } as unknown as Unit]);
  const losses = findPresenceLosses({
    kind: 'unit',
    committed,
    live,
    fields: [{ label: 'a canDo', present: (u: Unit) => !!u.canDo }],
  });
  strictEqual(losses.length, 1);
});
```

### WR-02: `formatDiffReport` crashes if `compareNote` is ever set without `previous`

**File:** `ealch-admin/scripts/drift-guard.logic.ts:212-248`
**Issue:** The function signature declares `previous` and `compareNote` as
two independent optional fields — nothing in the type ties them together.
But the implementation assumes the invariant `compareNote implies previous
is non-null` and uses a non-null assertion to act on it:
```ts
if (compareNote) {
  lines.push(`> Could not compare content against v${previous!.version}: ${compareNote}`);
```
Today's only caller (`publish-content.ts:1189-1204`) happens to only ever
set `compareNote` inside the `if (previous)` branch, so the invariant holds
in practice. But nothing in the type system or in this function enforces it,
and this is a pure/exported function other scripts could call directly (the
file is explicitly designed to be testable/importable independent of a live
Postgres connection). A caller that passes `compareNote` for a first-ever
snapshot (`previous: null`) — e.g. "could not check if a prior snapshot
exists" — throws a `TypeError: Cannot read properties of null` instead of
producing the report it exists to always produce.
**Fix:** Guard the assumption instead of asserting past it:
```ts
if (compareNote && previous) {
  lines.push(`> Could not compare content against v${previous.version}: ${compareNote}`);
  lines.push('> Publishing anyway. The counts below are still real; a no-op cannot be ruled out.');
  lines.push('');
}
```

### WR-03: The audit-trail report is written to disk before the publish it describes has actually succeeded

**File:** `ealch-admin/scripts/publish-content.ts:1207-1223` (write) vs. `:1248-1319` (steps 8-10)
**Issue:** `PUBLISH-REPORT.md` is deliberately tracked in git (`.gitignore:16-19`)
specifically because "its audit trail IS this repo's git history" (phase-1
decision D-03, quoted in the file header at `drift-guard.logic.ts:190-199`
and `publish-content.ts:115-118`). The report is built and `writeFileSync`'d
at step 7 (`publish-content.ts:1207-1223`), labelled `Mode: publish` and
naming the new version, **before** step 8 (Storage upload), step 9
(`seed.json` write), and step 10 (the `content_snapshots` insert) run. None
of steps 8-10 are wrapped in a try/catch inside `main()` — a thrown error
(e.g. `uploadToStorage` throwing on an HTTP failure, per
`snapshot-utils.ts:45-47`) propagates straight to the top-level
`main().catch((e) => { console.error(e); process.exit(1); })` and the
process exits non-zero. At that point the working tree already has
`PUBLISH-REPORT.md` overwritten to claim `v{N-1} → v{N}` under `Mode:
publish`, while `seed.json` is untouched and no `content_snapshots` row for
version N exists — i.e. the one committed file that exists specifically to
be a trustworthy record of what was published is, for a few seconds, lying
about what happened. Unlike the seed.json/DB insert ordering two steps
later (which has an explicit "written before the counter on purpose"
rationale at `publish-content.ts:1270-1274` explaining why that particular
inconsistency is harmless), there is no equivalent rationale here, and this
one is not obviously harmless: `git status` after a failed publish shows
only `PUBLISH-REPORT.md` changed, which an operator or a follow-up automated
commit step could plausibly stage and commit without noticing it describes
a publish that never completed.
**Fix:** Move the `writeFileSync(REPORT_PATH, report, ...)` call to after
step 10 succeeds (or wrap steps 8-10 in a try/catch that reverts/annotates
the report on failure). At minimum, only write the persisted file once the
DB insert (or dry-run/no-op return) has actually happened; keep the
`console.log` of the report where it is today for immediate visibility.

## Info

### IN-01: Plural presence-loss fields produce a grammatically wrong message

**File:** `ealch-admin/scripts/drift-guard.logic.ts:181`
**Issue:** `findPresenceLosses`'s message template is hardcoded singular:
`` `${git.id}: the committed seed has ${label} and the DB does not — this
publish would ERASE it` ``. This reads correctly for `publish-content.ts`'s
`'a canDo'` label ("...has a canDo... would ERASE it") but is grammatically
wrong for the `'themes'` label wired in at `publish-content.ts:665`
("...has themes... would ERASE it" — should be "them"). Purely cosmetic
(does not affect detection logic or the pattern-matching tests), but it is
operator-facing CLI output read under pressure during a blocked publish.
**Fix:** Either pluralize the label consistently (`'its themes list'`) or
parameterize the pronoun in the `fields` entry, e.g. add an optional
`plural?: boolean` to the field descriptor and select `'it'`/`'them'`
accordingly.

---

_Reviewed: 2026-09-19T00:00:00Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
