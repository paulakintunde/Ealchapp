# Phase 7: Known Bug Fixes - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-21
**Phase:** 7-Known Bug Fixes
**Areas discussed:** Exam response persistence granularity/trigger, exam crash recovery, re-grade dedupe on retry, exam draft storage/keying, draft cleanup, spoken-response draft scope, recovery UX, TTS pause/resume semantics, TTS device-engine fallback, STT regression test scope

---

## Exam persistence — what & when

| Option | Description | Selected |
|--------|-------------|----------|
| Every answer, on change | Write each response the moment it's captured (per-keystroke/onChange) | |
| Whole section, right before submit | Only write once, at submit/clock-expiry | |
| Other (user's own answer) | Checkpoint on step/question transition, debounced inactivity (~1500ms) for long-form typing, and AppState background/unmount flush — not per-keystroke, not submit-only | ✓ |

**User's choice:** Free-text — explicitly rejected both offered options, reasoning that per-keystroke causes bridge thrashing/sluggish input and submit-only leaves the user unprotected the whole exam. Landed on transition/debounce/lifecycle checkpointing.
**Notes:** Captured verbatim as D-01/D-02.

---

## Exam recovery on relaunch

| Option | Description | Selected |
|--------|-------------|----------|
| Auto re-submit for grading on relaunch | Silently retry grade-exam for orphaned responses | |
| Restore into the exam UI so the user finishes normally | Repopulate exam-section.tsx state, extend resumeByMode pattern | ✓ |
| Other | | |

**User's choice:** Restore into the exam UI so the user finishes normally.
**Notes:** Captured as D-03.

---

## TTS resume semantics

| Option | Description | Selected |
|--------|-------------|----------|
| True pause + resume from position | Real pause/resume on the ElevenLabs/expo-audio path | ✓ |
| Stop on background, replay from start on foreground | Reuse existing tts.stop(), no auto-resume | |
| Other | | |

**User's choice:** True pause + resume from position (recommended).
**Notes:** Captured as D-05. Raised the follow-up that expo-speech (device engine) has no native resume-from-position API — resolved separately below.

---

## STT regression test scope

| Option | Description | Selected |
|--------|-------------|----------|
| Narrow: pin continuous:false only | Re-add just the one deleted assertion | |
| Broader: also guard against reintroducing the reverted long-form branch | Pinned assertion + a second assertion against any conditional/flag-driven continuous value | ✓ |
| Other | | |

**User's choice:** Broader scope.
**Notes:** Captured as D-11. Rationale: this exact failure mode (fix + collateral revert) happened twice within 13 minutes in this codebase's history (8cd0be3 → 17f1fc2).

---

## TTS fallback (device-engine path)

| Option | Description | Selected |
|--------|-------------|----------|
| Restart the current line/sentence from its beginning | expo-speech re-speaks from position 0 on foreground | ✓ |
| Stay paused until the user manually presses play again | No auto-resume on device-engine path | |
| Other | | |

**User's choice:** Restart the current line/sentence from its beginning (recommended).
**Notes:** Captured as D-06. This is the one place BUG-01's two playback paths diverge in behavior.

---

## Re-grade dedupe on retried submit

| Option | Description | Selected |
|--------|-------------|----------|
| Skip already-graded tasks on the retried submit | Check useProgress/draft status before re-grading | ✓ |
| Re-grade everything on retry, no dedupe | Simpler, risks duplicate results and double quota spend | |
| Other | | |

**User's choice:** Skip already-graded tasks (recommended).
**Notes:** Captured as D-04. Motivated by the `coach_bump` daily grading quota and avoiding duplicate exam-report entries.

---

## Exam draft storage location & keying

| Option | Description | Selected |
|--------|-------------|----------|
| New AsyncStorage key, scoped to the exam_attempts row id | Dedicated exam-draft:{attemptId} key | ✓ |
| New slice inside the existing useProgress store | Reuse the same persisted zustand store | |
| Other | | |

**User's choice:** New AsyncStorage key, scoped to the exam_attempts row id (recommended).
**Notes:** Captured as D-07.

---

## Exam draft cleanup timing

| Option | Description | Selected |
|--------|-------------|----------|
| Delete once every task in the section is graded | Clear draft on successful submit() completion | ✓ |
| Delete when exam_attempts.expires_at passes, whichever comes first | Same + a time-based abandonment fallback | |
| Other | | |

**User's choice:** Delete once every task in the section is graded (recommended).
**Notes:** Captured as D-08.

---

## Spoken-task draft content

| Option | Description | Selected |
|--------|-------------|----------|
| Transcript text only | Persist only what grade-exam actually receives | ✓ |
| Transcript + audioUri, best-effort | Also persist the device cache file path | |
| Other | | |

**User's choice:** Transcript text only (recommended).
**Notes:** Captured as D-09.

---

## Recovery UX

| Option | Description | Selected |
|--------|-------------|----------|
| Silent restore — just reopens with answers filled in | No banner/toast | ✓ |
| Brief one-line notice on restore | Small inline "answers were recovered" message | |
| Other | | |

**User's choice:** Silent restore (recommended).
**Notes:** Captured as D-10.

---

## Claude's Discretion

- Exact debounce timing beyond "~1500ms" if a different value proves better in practice.
- New test file name/location for the STT regression test (old `sttLongForm.test.ts` name may not fit since the long-form branching it tested no longer exists).
- Exact shape of the per-task draft dedupe check (reading `useProgress` directly vs. the draft object tracking its own graded/ungraded flags per task).

## Deferred Ideas

None — discussion stayed within the three bugs' scope for the entire session.
