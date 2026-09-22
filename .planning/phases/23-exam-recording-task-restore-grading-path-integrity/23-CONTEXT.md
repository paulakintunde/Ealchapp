# Phase 23: Exam Recording-Task Restore & Grading-Path Integrity - Context

**Gathered:** 2026-09-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Two defects surfaced by Phase 7's own BUG-02 device pass, plus one found in this phase's discussion, and nothing more:

- **BUG-04 (presentation):** after a force-kill/relaunch, `ExamSpeakTask`, `ExamInterlocutorTask` and `ExamDebateTask` reset to their idle "start" screen even though `exam-section.tsx` has already restored `spoken[task.id]` / `coverage[task.id]` / `debate[task.id]` from the draft. They must render the answered state instead.
- **BUG-05 (integrity):** `examTasksOfSection()` silently drops unresolved task ids, `submit()` grades only that filtered list, and `sectionStatusFor(sec.taskIds, ...)` reads the unfiltered authored list, so a completed section can report "Not sat". The two must be reconciled, with an honest status when tasks really are missing, and covered by a test that fails today.
- **BUG-06 (added in discussion):** a force-kill DURING a recording loses the whole answer, because answers commit only at `done`. The in-progress transcript must be checkpointed and restored as the task's answer.

Not in scope: resuming a recording mid-conversation, any redo affordance outside the post-restore case, grading-layer/quota failures.

</domain>

<decisions>
## Implementation Decisions

### Carried forward from Phase 7 (still binding)
- Phase 7 D-03: no silent auto-resubmit on relaunch; the candidate presses Submit.
- Phase 7 D-04: the retried `submit()` skips tasks already in the sitting's draft `graded` list.
- Phase 7 D-09: spoken tasks persist transcript + signals only, never `audioUri`.
- Phase 7 D-10: restore is silent, no banner/toast/prompt.

### BUG-04: redo after restore
- **D-01:** Redo depends on `mode`. In **exam** mode a restored task is locked: it shows its answered card and offers no way to record again (a normal sitting never offers a redo, and neither does the real TEF/DELF; a crash must not become a free second attempt). In **practice** mode the restored card offers "Record again".
- **D-02:** "Record again" exists ONLY on a restored card in practice mode. A normal, uninterrupted practice sitting behaves exactly as today (no redo). Adding redo to every finished practice task is out of scope.
- **D-03:** "Record again" asks one confirm before discarding the saved answer ("Record again? Your saved answer will be replaced." with Cancel / Record again), the same shape as the section's existing submit confirm. Copy must follow the no-em-dash rule.
- **D-04:** A restored answer is shown and graded exactly as a finished one, whatever it contains, including a partial answer saved mid-recording (see D-16..D-19).

### BUG-04: what the restored card shows
- **D-05:** Reuse each component's existing `done` card, driven from the restored data: the component mounts directly in `phase = 'done'` when a restored answer is passed in. No new shared "restored" component. The restored view must show the same numbers the grader will receive (the components already hold "the numbers the grader was sent"; do not recompute differently for display).
- **D-06:** The débat's done card grows to show the candidate's transcript plus the delivery summary (like `ExamSpeakTask`'s card), in **both** live and restored sittings, so one card is drawn identically either way. The examiner's dialogue lines are not persisted and are not reconstructed.
- **D-07:** No crash-related wording on the card (D-10 carried forward). The finished card is itself the signal.

### BUG-05: missing-task handling
- **D-08:** On Submit, if any of `section.taskIds` has not resolved, Submit enters a short bounded "Loading the paper" hold and waits for the corpus to supply them. If they still do not resolve, it grades what it has and records the unresolved ids as missing on our side. It never traps the candidate in the section. Exact timeout is Claude's discretion.
- **D-09:** Clock expiry does NOT use the hold. The clock ends the section as it does today: grade what resolved, record the rest as missing, no extension.
- **D-10:** The report gets a new, distinct "ours" status (working copy: "Part of this section didn't load"), ranked with `audio-failed` above the candidate's own states per `sectionStatusFor`'s ours-first rule. It is never rendered as "Not sat" and never as a zero.
- **D-11:** That status offers the same retry the report already gives `not-graded` sections, and the missing task ids are sent through `src/services/errors.ts`'s `report()` seam so a tester has a copyable trace (satisfies success criterion 2's "at minimum logged").
- **D-12:** Criterion 3's automated test reproduces the divergence (an authored task id absent from the loaded corpus) and must fail against today's code before the fix lands.

### Device proof (criterion 4)
- **D-13:** Split as in Phase 7: Claude builds, installs, sets up over adb and reads the screens; Paul supplies the real speech, force-kills, relaunches and submits. No scripted/synthetic speech (Phase 7's false-confidence rule).
- **D-14:** Two passes. (1) A dev build with the two exam-content guards (`refreshFromRemote`'s `if (__DEV__) return`, `adoptedForLaunch(..., __DEV__)`) lifted by a **temporary, uncommitted local patch**, used only to inspect the restored draft in RKStorage via `run-as`; the patch is reverted afterwards and never merged. (2) An EAS `preview` build, the pass that counts, proving the real manifest to cache to merge path end to end. The guards themselves are deliberate and stay.
- **D-15:** The device pass does not try to force the BUG-05 race; D-12's test proves it. The device pass proves only that a restored spoken answer yields a real grade or an honest "grading failed", never "Not sat".
- **D-20:** The device pass also covers BUG-06 (criterion 5): Paul force-kills mid-recording on at least one task (mid-interview is the case Phase 7 hit), relaunches, and the task must open on its finished card with the saved part, then grade as that answer.

### BUG-06: in-progress recording checkpoints (added after the first write, at the user's request: "do not defer, fix this in this phase")
- **D-16:** Today all three components call `onAnswer` only on reaching `done` (`ExamInterlocutorTask.tsx:168`, `ExamDebateTask.tsx:170`, `ExamSpeakTask.tsx:176`), so a kill mid-recording saves nothing. The in-progress answer must now be checkpointed while the candidate speaks, into the same Phase 7 draft (`exam-draft:{attemptId}`), not a new store.
- **D-17:** Save points follow Phase 7 D-01/D-02 (checkpoint at boundaries, never per keystroke/partial): **Interview and débat** checkpoint after every completed candidate turn (the moment `said.current` grows). **Speak** is one long `stt.listen` with only `onPartial`, so it checkpoints the running partial on a throttle (a few seconds; exact value is Claude's discretion) and flushes on app backgrounding/unmount. D-09 still holds: transcript and derived signals only, never audio.
- **D-18:** What is checkpointed must be enough to draw the finished card and grade it: transcript so far plus the signals, interview coverage (`coverageOf(bank, played)`) and débat report (`debateReport(...)`) computed from it. A checkpointed partial must be distinguishable from a committed `done` answer internally (so the live component keeps recording), but on relaunch both restore the same way.
- **D-19:** On relaunch, the saved part IS the task's answer: the task opens on its finished card (D-05) and is graded as-is. There is no "continue where it stopped" (the examiner's conversation state is not resumed). The mode rule applies unchanged: locked in exam mode, "Record again" behind the D-03 confirm in practice. Nothing marks it as interrupted (D-07/D-10); the duration note and coverage count already show a short answer.

### Claude's Discretion
- Speak-task checkpoint throttle interval and how partial vs committed is flagged in the draft.
- Hold timeout length and what "resolved" waits on (corpus store subscription vs polling).
- How the missing marker is stored (a flagged `ExamResult` vs report-time comparison), provided the report can distinguish "ours" from "never attempted".
- Prop shape for passing a restored answer into the three components.
- Exact status key name and final copy for D-10 (no em dash).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Requirements and origin
- `.planning/REQUIREMENTS.md` (BUG-04, BUG-05, BUG-06): the defect statements and root-cause trace
- `.planning/ROADMAP.md` § Phase 23: goal and the four success criteria
- `.planning/phases/07-known-bug-fixes/07-05-SUMMARY.md`: where both defects were found on device, and why scripted speech was rejected
- `.planning/phases/07-known-bug-fixes/07-VALIDATION.md`: Phase 7 validation record cited as source
- `.planning/phases/07-known-bug-fixes/07-CONTEXT.md`: D-03/D-04/D-09/D-10 carried forward

### Code
- `ealch-v2/app/exam-section.tsx`: draft restore (~L160-220), `submit()` (~L255-405), task dispatch by surface (~L505-600)
- `ealch-v2/src/services/content.logic.ts:362`: `examTasksOfSection`'s silent filter
- `ealch-v2/src/store/progress.logic.ts:1465`: `sectionStatusFor`
- `ealch-v2/app/exam-report.tsx`: status rendering (L74, L105, ~L555) and the existing not-graded retry
- `ealch-v2/src/components/ExamSpeakTask.tsx`, `ExamInterlocutorTask.tsx`, `ExamDebateTask.tsx`: `phase` initialised to `'idle'`; done cards
- `ealch-v2/src/services/examDraft.logic.ts`: draft shape and `restoreState`
- `ealch-v2/src/services/content.ts`: corpus starts as SEED (no exam keys), upgrades from cache/remote; the two `__DEV__` guards
- `ealch-v2/src/services/errors.ts`: `report()` seam

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Each recording component's `phase === 'done'` card: the restored view (D-05).
- `exam-section.tsx`'s submit confirm (`confirming` state): the shape for D-03's confirm.
- `exam-report.tsx`'s not-graded retry: reused for the new status (D-11).
- `errors.ts` `report()`: logging seam (D-11).

### Established Patterns
- `sectionStatusFor` ranks "ours" (audio-failed, not-graded) above "theirs"; the new status joins the ours group.
- Tests are colocated `*.logic.test.ts` run by `node --test`; Jest + RNTL exists since Phase 18 for component renders, if a render test of the restored card is wanted.
- `surfaceFor` dispatch is exhaustive with a `never` check; no new surface is needed here.

### Integration Points
- `tasks` is `useMemo`'d on `[section, corpus]`, and the corpus begins as the seed, which has no exams. `submit()`'s guard checks `section` but not whether every authored task resolved, so an early or racing submit grades a short (possibly empty) list and still routes to the report. This is one concrete BUG-05 trigger; the researcher should confirm whether it matches the TEF Canada Exam 3 reproduction.
- The draft restore sets `spoken`/`coverage`/`debate`, but the components receive none of it (only `onAnswer`), which is the entire BUG-04 gap.
- `answeredCount` already counts restored spoken answers correctly (Phase 7 device evidence).

</code_context>

<specifics>
## Specific Ideas

- "Restored = what they saw before the crash": the restored card and the live done card are the same card.
- Practice mode is where study behaviour lives; exam mode stays exam-faithful.

</specifics>

<deferred>
## Deferred Ideas

- **Redo on any finished practice task** (not only after a restore). Declined for this phase as a new practice feature.

</deferred>

---

*Phase: 23-exam-recording-task-restore-grading-path-integrity*
*Context gathered: 2026-09-22*
