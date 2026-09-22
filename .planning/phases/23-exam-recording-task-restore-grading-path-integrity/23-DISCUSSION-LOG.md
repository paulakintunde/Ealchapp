# Phase 23: Exam Recording-Task Restore & Grading-Path Integrity - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md; this log preserves the alternatives considered.

**Date:** 2026-09-22
**Phase:** 23-exam-recording-task-restore-grading-path-integrity
**Areas discussed:** Redo after restore, What the summary shows, Missing-task handling, Device proof for criterion 4

---

## Redo after restore

| Option | Description | Selected |
|--------|-------------|----------|
| No, locked | Matches a normal sitting and the real exam | |
| Yes, behind a confirm | "Record again" with a replace warning | |
| Depends on mode | Locked in exam, allowed in practice | ✓ |

Partial restore: "Same as a finished one" selected. Later found moot: answers commit only at `done`, so no partial state is ever persisted.

Practice redo scope: "Only after a restore" (vs "Any finished practice task").
Confirm: "One confirm step" (vs "No confirm").

---

## What the summary shows

| Option | Description | Selected |
|--------|-------------|----------|
| Reuse each done card | Mount in `done` from restored data | ✓ |
| One shared restored card | New common component | |

Débat: "Transcript + signals" (vs "Same as today's done card"). Follow-up: applies to live sittings too, so one card either way.
Wording: "Nothing, stay silent" (vs "Small 'Answer saved' line").

---

## Missing-task handling

| Option | Description | Selected |
|--------|-------------|----------|
| Hold, then fall back | Bounded wait, then grade what exists and flag the rest | ✓ |
| Block until resolved | Submit disabled until all resolve | |
| Submit now, flag the rest | No wait | |

Report: "New 'ours' status" (vs "Reuse 'not graded'").
Clock expiry: "No wait, grade and flag" (vs "Same hold as Submit").
Follow-up: "Retry + errors.report()" (vs "Retry only", "Log only, no retry").

---

## Device proof for criterion 4

Speech: "You speak, I drive the rest" (vs "You run the whole pass").
Build: first chose "Dev build with guards lifted". Claude flagged that memory records both dev guards as deliberate incident fixes, and that a patched loading path is a weaker proof for a corpus-timing bug. Re-asked; user chose "Both" (dev pass with a temporary uncommitted patch for state inspection, then EAS preview as the pass that counts).
BUG-05 on device: "No, the test proves it" (vs "Yes, try to force it").

---

## Claude's Discretion

- Hold timeout and wait mechanism
- Missing-marker storage shape
- Restored-answer prop shape
- Final status key and copy

## Deferred Ideas

- ~~Persist in-progress spoken transcripts~~: initially deferred, then pulled INTO scope by the user as BUG-06 ("do not defer, fix this in this phase")
- Redo on any finished practice task

---

## BUG-06: mid-recording kill (added after the first context write)

The user rejected deferring it: "please do not defer, fix this in this phase". Filed as BUG-06, mapped to Phase 23, success criterion 5 added.

| Option | Description | Selected |
|--------|-------------|----------|
| Saved part = the answer | Reopen on the finished card, grade as-is, mode rule unchanged | ✓ |
| Continue where it stopped | Resume recording; needs examiner state persisted | |
| Mode-dependent | Exam locked; practice chooses keep vs restart | |

Cut-off mark: "Nothing extra" (vs "One quiet line").
