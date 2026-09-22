---
phase: 7
slug: known-bug-fixes
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-09-21
---

# Phase 7 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `node --test` (Node.js built-in test runner) via `node:test`/`node:assert` |
| **Config file** | none — invoked directly via `ealch-v2/package.json`'s `"test"` script |
| **Quick run command** | `node --test src/services/<changed-file>.test.ts` |
| **Full suite command** | `npm test` (runs `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`, per `ealch-v2/package.json` line 57) |
| **Estimated runtime** | ~5-10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `node --test src/services/<changed-file>.test.ts` (targeted)
- **After every plan wave:** Run `npm test` (full suite)
- **Before `/gsd-verify-work`:** Full suite must be green, PLUS human-verify device checkpoints for BUG-02 (force-kill mid-exam, relaunch, confirm draft restores and retry skips graded tasks) and BUG-01 (background/foreground on both playback paths, using a full reload per the `tts.ts` hot-reload landmine)
- **Max feedback latency:** ~10 seconds (automated); device checkpoints are manual-only, not latency-bound

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 07-01-01 | 01 | 0 | BUG-03 | — | N/A | source-text-assertion | `node --test src/services/<new-stt-regression>.test.ts` | ❌ W0 | ⬜ pending |
| 07-02-01 | 02 | 0 | BUG-02 | — | N/A | source-text-assertion | `node --test src/services/<new-exam-draft-wiring>.test.ts` | ❌ W0 | ⬜ pending |
| 07-03-01 | 03 | 0 | BUG-01 | — | N/A | source-text-assertion | `node --test src/services/<new-tts-appstate>.test.ts` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

*Task IDs above are illustrative — the planner assigns final plan/task IDs; each plan implementing BUG-02/BUG-03/BUG-01 must map to one of the three Wave 0 test files below.*

---

## Wave 0 Requirements

- [ ] New STT regression test file (BUG-03) — under `src/services/`, name/location is Claude's discretion; pins `continuous: false` as hardcoded and unconditional in `stt.ts`
- [ ] New exam-draft structural test file (BUG-02) — asserts `exam-section.tsx` imports `AsyncStorage`, writes at the transition/debounce/backgrounding checkpoints, checks a graded-flag before re-grading in `submit()`, and clears the draft on successful section completion
- [ ] New tts.ts AppState structural test file (BUG-01) — asserts `AppState` is imported, a `change` listener is registered, and the device-path vs. remote-path branch exists
- [ ] No framework install needed — `node --test` is already fully configured via `ealch-v2/package.json`

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions | Outcome |
|----------|-------------|------------|-------------------|---------|
| Force-kill mid-exam, relaunch, draft restores into `exam-section.tsx` state, retried `submit()` skips already-graded tasks | BUG-02 | No component/render-test infra exists yet (TEST-02, later phase); requires actual process death + relaunch | On a device/emulator, start an exam section, answer 1-2 tasks, force-stop the app before hitting submit, relaunch, confirm answers are restored and submit only grades ungraded tasks | ✅ VERIFIED (2026-09-21/22) on a real Pixel 9 via **EAS cloud build** (`preview` profile, build `bdd728a3-e38a-4f31-8617-2ef36566ec90`, commit `40d0e839` — confirmed to contain BUG-02/BUG-01), not the blocked local `gradlew assembleRelease` (see below). TEF Canada Exam 1 · Writing (PE) section: **Part A** — typed a full answer into Section A, waited past the 1500ms debounce, `adb shell am force-stop`, relaunched, reopened the same paper/section: the answer restored word-for-word, silently (no banner/prompt), section still on the answering screen with nothing auto-submitted. **Part B** — typed additional text and force-killed within ~1s (before the debounce): the new text was correctly dropped while the original answer and all other state stayed intact, matching D-01/D-02's documented tradeoff. **Part C** — submitted the section for real grading; Section A graded successfully (`C1` vs target B1, real LLM feedback) while Section B's grading call failed to return ("Grading did not come back... recorded as ungraded" — no fabricated grade, matches `examGrader.ts`'s `{live:false}` guarantee). Reopened the same (still-editable) "Done" section and resubmitted: Le Rapport returned byte-identical results (same `C1`, same feedback text, Section B still ungraded) with no new grading delay and no additional cost — confirms a retry does not re-grade or duplicate an already-graded task. **Part D (PO/speaking transcript restore)** — run by the developer directly on-device (this automated session cannot inject real speech audio into a physical Pixel 9's microphone). Result: the developer completed a full `po_interaction` conversation on TEF Canada Exam 1 · Speaking · Section A, force-killed after reaching the finished summary card, and relaunched — **the data survived** (the section-level "1/2 answered" count stayed accurate across two independent kill/relaunch cycles, confirmed again on a second repeat), but **Section A's screen itself reset to the fresh "Start the interview" button with no indication an answer already existed**, inviting a redo that would silently overwrite the saved answer. Traced to source: `ExamSpeakTask`, `ExamInterlocutorTask`, and `ExamDebateTask` all initialize `phase` to `'idle'` unconditionally on mount, with no prop carrying a restored answer — a gap BUG-02's structural tests (scoped to `exam-section.tsx`'s own state, per 07-02-SUMMARY.md) never covered. Tracked as new requirement **BUG-04** (see `REQUIREMENTS.md`), left unmapped pending a phase-sequencing decision. **Follow-up attempted, inconclusive**: to confirm the restored transcript is actually used by grading (not just held in memory), the developer submitted the Speaking section as-is. Result: "0/2, grading did not come back" for BOTH tasks — Section A's restored answer never got a `Your marking` entry, same as Section B which was never attempted at all. This does NOT confirm a data-wiring defect: `submit()`'s code treats every PO-skill task identically regardless of surface type, with no special-case that would exclude a restored `spoken[task.id]`, so the more likely cause is a real grading-layer failure (this session had already made several live grading calls in quick succession — plausibly a quota/rate-limit ceiling) rather than the interaction surface's restored data failing to reach the grader. Left unresolved; a clean retest after quota resets would settle it either way. |
| Local release build (`gradlew assembleRelease`) is unblocked | (tooling, not a requirement) | N/A | N/A | ⚠️ NOT FIXED, ROUTED AROUND. Retried the one untried, non-admin theory (space-in-path via a `subst`-mapped drive) — CMake still resolved to the real `C:\Users\...\gitbuild appealch\...` path internally, so the theory was not actually tested; build failed identically (`ninja: manifest 'build.ninja' still dirty after 100 tries`). Confirmed Windows Defender real-time protection/behavior monitoring/IOAV are all enabled on this machine and the project sits under `Downloads` (IOAV's prime target) — antivirus remains the live suspect, but verifying/disabling it requires admin rights this non-interactive session does not have. Unblocked BUG-02 verification instead via `eas build --profile preview` (cloud build, bypasses the local Windows toolchain entirely); the resulting APK required `adb uninstall` before install (different signing keystore than the local debug-keystore build already on the test device — expected, not a defect). Next session, if the local build itself needs fixing: try disabling Defender real-time protection entirely for one clean attempt (needs an admin-capable, interactive session). |
| Backgrounding pauses TTS playback, foregrounding resumes (ElevenLabs path) or restarts current line (expo-speech path) | BUG-01 | Requires real audio playback + OS-level backgrounding; also has a documented landmine (editing `tts.ts` breaks Android TTS hot-reload in dev) requiring a full reload to verify, not hot-reload-and-check | On a device, trigger TTS playback on the ElevenLabs path, background the app mid-utterance, foreground it, confirm pause/resume from position; repeat on the expo-speech device-engine path and confirm restart-from-line-start behavior | ✅ VERIFIED (2026-09-21/22) on Pixel 9 via dev-client + Metro (release build not required — no exam content involved). **Device-engine path (default):** backgrounding mid-sentence silences immediately, foregrounding restarts the same line from the beginning per D-06, no doubled/overlapping audio on a sub-half-second background/foreground cycle. **ElevenLabs path:** confirmed genuinely exercised via `adb logcat` showing `ExpoAudioBasicMediaSession` BUFFERING/PLAYING/STOPPED transitions (media3 session only exists on the `expo-audio` remote path, ruling out a silent guest-session fallback to device speech); backgrounding mid-sentence silences immediately, foregrounding resumes from the stopped position (not a restart) and the lesson advances normally afterward. **Leaving the screen (X out) then background/foreground:** stays silent, no replay of an abandoned line. `system_config.ttsProvider` was flipped to `'elevenlabs'` for the test and confirmed restored to `'device'` via read-back (`updated_at: 2026-09-21 15:41:48 UTC`). |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s (automated portion)
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
