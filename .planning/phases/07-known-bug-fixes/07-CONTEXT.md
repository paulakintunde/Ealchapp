# Phase 7: Known Bug Fixes - Context

**Gathered:** 2026-09-21
**Status:** Ready for planning

<domain>
## Phase Boundary

Fix three specific, independent interruption/regression bugs, in priority order:
1. **BUG-02 (highest, revenue-adjacent):** a user's exam response is persisted to storage before grading is requested, so force-stopping/crashing mid-exam does not lose it.
2. **BUG-03:** `continuous: false` STT behavior gets an automated regression test, so the prior fix (commit 8cd0be3) can't silently regress again.
3. **BUG-01 (lowest, cosmetic):** audio/TTS playback pauses when the app is backgrounded and resumes appropriately on foreground.

No new capabilities — this phase clarifies HOW to fix each bug, not whether to add anything beyond what ROADMAP.md/REQUIREMENTS.md already scope.

</domain>

<decisions>
## Implementation Decisions

### BUG-02 — What gets persisted, and when
- **D-01:** Do NOT persist on every keystroke/onChange (bridge thrashing, sluggish typing/transcription). Do NOT wait until final submit either (leaves the user unprotected for the whole exam).
- **D-02:** Persist a structured per-task draft, checkpointed on: (a) step/question-transition (navigating from one exam task to the next), (b) debounced inactivity for long-form typing (~1500ms after the user stops typing), and (c) app backgrounding/component-unmount (flush any pending draft via `AppState`). Keep the active UI on fast `useState`; checkpoint asynchronously at these boundaries — full crash recovery without sacrificing typing/input responsiveness.
- **D-09:** For spoken tasks specifically, persist the transcript text only (what `examGrader.grade()` actually sends to `grade-exam`) — not the `audioUri` from STT's `audioend` event. The device-cache audio file isn't guaranteed to survive a crash/relaunch anyway; treating it as reliably recoverable would be misleading. Transcript-only keeps draft writes small and reliable.

### BUG-02 — Storage location & cleanup
- **D-07:** New, dedicated AsyncStorage key scoped to the `exam_attempts` row id (e.g. `exam-draft:{attemptId}`), holding `{taskId: response}` for the current section — not folded into `useProgress`'s existing persisted zustand store. Attempt-id scoping means a genuinely new attempt never collides with or resurrects a stale draft from a prior attempt at the same paper.
- **D-08:** Delete the draft once every task in the section has been successfully graded (i.e., `submit()` completes normally). A draft only exists on disk between a crash and the user reopening the app to finish.

### BUG-02 — Recovery on relaunch
- **D-03:** On relaunch with an orphaned persisted-but-ungraded draft, restore it into `app/exam-section.tsx`'s state so the user finishes the section normally and hits submit again themselves — do NOT silently auto-resubmit to `grade-exam` in the background. This extends the existing `resumeByMode` "reopen where you left off" pattern (today used for position/identity only, by `lesson.tsx`/`dictation.tsx`/`roleplay.tsx`/etc.) to also carry response content.
- **D-04:** Because `submit()` grades all tasks in a section sequentially in one loop, a crash can leave some tasks already graded (logged via `logExamResult` into `useProgress`) and others not yet attempted. The retried `submit()` must check which tasks are already graded (via `useProgress` / the draft's own per-task status) and skip re-grading them — avoids double-spending the `coach_bump` daily grading quota and avoids a duplicate result in the exam report. Only ungraded, still-drafted tasks get sent to `grade-exam` on the retry.
- **D-10:** Recovery is silent — the exam section just reopens with answers filled in, no banner/toast/extra screen. Matches how `resumeByMode` already restores position silently elsewhere in the app.

### BUG-01 — Pause/resume semantics
- **D-05:** "Resume appropriately on foreground" means a true pause + resume from position, not stop-and-restart, on the path that supports it. `tts.ts`'s ElevenLabs/`expo-audio` path already exposes `AudioPlayer.pause()`/`.play()` internally (only `stop()` is public today) — backgrounding should call pause, foregrounding should call play, continuing from the same position.
- **D-06:** The `expo-speech` device-engine path has no native "resume from this exact word" API. On that path, foreground-resume restarts the current line/sentence from its beginning rather than resuming mid-utterance or staying silently paused forever. Small repeated audio is an acceptable tradeoff for never losing playback entirely. This is the one place BUG-01's two playback paths diverge in behavior — the ElevenLabs path does a true resume, the device-engine path does a line-restart.
- No `AppState` listener exists in `tts.ts` today; add one following the existing pattern (`useReadingBrightness.ts` / `ExamClock.tsx`), calling pause/stop-equivalent + resume/restart on the two paths as decided above.

### BUG-03 — Regression test scope
- **D-11:** Broader scope: re-add a pinned assertion that `continuous: false` is hardcoded in `stt.ts` (matching what the deleted `sttLongForm.test.ts` asserted, adapted to today's code which has no `opts.longForm` branch at all anymore), AND add a second assertion that fails if anyone reintroduces a conditional/flag-driven `continuous` value. This guards against the exact failure mode that happened twice in 13 minutes on this codebase (commit 8cd0be3 fixed it, commit 17f1fc2 reverted the fix along with the feature that caused the mic-access regression it was collateral damage to).
- Test should follow the existing `node --test` / colocated `*.test.ts` / source-text-assertion-via-`readFileSync` convention (see `examAttemptWiring.test.ts` for the pattern) — no Jest/RNTL exists yet (that's TEST-02, a later phase).

### Claude's Discretion
- Exact debounce timing beyond "~1500ms" if a different value proves better in practice.
- New test file name/location for the STT regression test (the old `sttLongForm.test.ts` name may not fit since the long-form-specific branching it tested no longer exists).
- Exact shape of the per-task draft dedupe check in D-04 (reading `useProgress` directly vs. the draft object tracking its own graded/ungraded flags per task).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Roadmap/requirements
- `.planning/ROADMAP.md` § Phase 7 — the 3 success criteria and priority ordering (BUG-02 highest, BUG-03 second, BUG-01 lowest) this phase is scoped against
- `.planning/REQUIREMENTS.md` — BUG-01, BUG-02, BUG-03 (this phase's scope)

### BUG-02 — exam persistence (read in full before touching anything)
- `ealch-v2/app/exam-section.tsx` — the per-section exam runner; `answers`/`texts`/`spoken`/`coverage`/`debate` useState (lines ~92-138) is what needs checkpointing; `submit()` (lines ~149-252) is the sequential per-task grading loop that needs dedupe-on-retry
- `ealch-v2/src/services/examGrader.ts` (lines ~74-88) — `grade()`, calls `grade-exam` via `sb.functions.invoke`; closed/MCQ tasks are scored locally via `scoreClosedTask` and never call this
- `ealch-v2/supabase/functions/grade-exam/index.ts` — server-side grading; `attemptAuthorized()` (lines ~166-181) checks only `expires_at`, no idempotency/dedupe on content today
- `ealch-v2/supabase/schema.sql` (lines ~417-435) — `exam_attempts` table; comment confirms it's audit-only, no answer/response columns, not a resumable-state store
- `ealch-v2/src/store/useProgress.ts` (line ~235) — the existing `persist`-over-`AsyncStorage` zustand store for graded results; `resumeByMode` pattern (see `ealch-v2/app/lesson.tsx` lines ~174-178) is the closest existing "reopen where you left off" precedent, currently position/identity only
- `.planning/phases/04-entitlement-verification-signed-out-purchase-fix/04-CONTEXT.md` D-05/D-06 — confirms `exam_attempts` was deliberately built as authorization-only, not an answer store; consistent with this phase's finding, don't overload that table

### BUG-03 — STT regression (read the full commit history before writing the test)
- `ealch-v2/src/services/stt.ts` (line ~298) — current hardcoded `continuous: false`
- Commit `8cd0be3` ("fix(stt): never ask this recogniser for continuous mode") — the original fix and its now-deleted test, `sttLongForm.test.ts`
- Commit `17f1fc2` ("Revert the speaking capture change: it stops the microphone opening") — reverted 8cd0be3 together with 2fc9244 (the long-form capture feature), deleting the regression test as collateral damage; explains why no `opts.longForm` branch exists in current `stt.ts`
- `ealch-v2/src/services/examAttemptWiring.test.ts` — the source-text-assertion test-writing convention to follow (`node:assert` + `readFileSync`, no component-test infra yet)

### BUG-01 — TTS backgrounding
- `ealch-v2/src/services/tts.ts` (lines ~449-464) — `stop()`, the only public playback-halt method today; dual-path (`expo-speech` device engine, `expo-audio` `AudioPlayer` for ElevenLabs remote)
- `ealch-v2/src/hooks/useReadingBrightness.ts` (lines ~86-92) — the `AppState.addEventListener('change', ...)` pattern to follow, symmetric active/background handling
- `ealch-v2/src/components/ExamClock.tsx` (lines ~54-58) — simpler `AppState` pattern, foreground-only reaction

**Known landmine (from prior-session memory, not this discussion):** editing `tts.ts` breaks Android TTS hot-reload in dev — plan for a full reload during manual verification of this fix, not a hot-reload-and-check loop.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `resumeByMode` (used by `lesson.tsx`, `dictation.tsx`, `flashcards.tsx`, `roleplay.tsx`, `sentence.tsx`, `speak.tsx`, `voiceflash.tsx`) — the pattern BUG-02's recovery extends from position-only to position+response-content
- `useProgress`'s `persist`-over-`AsyncStorage` zustand wrapper — the existing durable-write mechanism graded exam results already use; BUG-02's draft is a deliberately separate, non-persisted-store AsyncStorage key (D-07), not an extension of this store
- `useReadingBrightness.ts` / `ExamClock.tsx` `AppState` patterns — directly adaptable for BUG-01's backgrounding listener

### Established Patterns
- Source-text-assertion tests (`readFileSync` + regex + `node:assert`, no component/render testing) — the only test style currently in this codebase for service-layer logic like `stt.ts`
- Pure "logic file" discipline noted in Phase 4's context (`entitlement.logic.ts`, `tts.logic.ts`, `content.logic.ts`) — zero RN/Deno imports, `node --test`-able; worth following if BUG-02's dedupe-check logic can be extracted similarly

### Integration Points
- `exam-section.tsx`'s task-transition/navigation handlers — where D-02's checkpoint-on-transition attaches
- `exam-section.tsx`'s `submit()` loop — where D-04's already-graded-skip logic attaches
- `tts.ts` — where BUG-01's new `AppState` listener and pause/resume (or restart) logic attaches (see landmine note above re: dev hot-reload)
- `stt.ts` — no code change needed for BUG-03 itself (already `continuous: false`); only a new test file is added

</code_context>

<specifics>
## Specific Ideas

No exact UI copy or visual treatment was specified — recovery is explicitly silent (D-10), so there's no new user-facing text to write for BUG-02. BUG-01 has no new UI at all (pause/resume is playback-only behavior). BUG-03 has no UI surface.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within the three bugs' scope. No scope-creep redirects were needed.

### Reviewed Todos (not folded)
None — `todo.match-phase` returned zero matches for Phase 7.

</deferred>

---

*Phase: 7-Known Bug Fixes*
*Context gathered: 2026-09-21*
