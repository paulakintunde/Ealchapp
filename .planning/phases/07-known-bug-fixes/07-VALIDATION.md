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

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Force-kill mid-exam, relaunch, draft restores into `exam-section.tsx` state, retried `submit()` skips already-graded tasks | BUG-02 | No component/render-test infra exists yet (TEST-02, later phase); requires actual process death + relaunch | On a device/emulator, start an exam section, answer 1-2 tasks, force-stop the app before hitting submit, relaunch, confirm answers are restored and submit only grades ungraded tasks |
| Backgrounding pauses TTS playback, foregrounding resumes (ElevenLabs path) or restarts current line (expo-speech path) | BUG-01 | Requires real audio playback + OS-level backgrounding; also has a documented landmine (editing `tts.ts` breaks Android TTS hot-reload in dev) requiring a full reload to verify, not hot-reload-and-check | On a device, trigger TTS playback on the ElevenLabs path, background the app mid-utterance, foreground it, confirm pause/resume from position; repeat on the expo-speech device-engine path and confirm restart-from-line-start behavior |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s (automated portion)
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
