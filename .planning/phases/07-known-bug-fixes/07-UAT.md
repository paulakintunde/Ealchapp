---
status: complete
phase: 07-known-bug-fixes
source: [07-01-SUMMARY.md, 07-02-SUMMARY.md, 07-03-SUMMARY.md, 07-04-SUMMARY.md, 07-05-SUMMARY.md]
started: 2026-09-22T05:15:00Z
updated: 2026-09-22T05:20:00Z
---

## Current Test

[testing complete]

## Tests

### 1. Exam answer survives a force-kill
expected: Start an exam section, answer at least one task, wait ~2 seconds (past the checkpoint debounce), then force-kill the app (not just background it) and relaunch. Reopening the same paper and section restores the answer exactly, silently — no banner, no prompt, nothing auto-submitted.
result: pass

### 2. A retried submit never double-grades
expected: If a section submit leaves one task ungraded (e.g. a grading call fails) and you resubmit later, the already-graded task is not re-graded or duplicated — the report shows one result per task, with the same grade it had before.
result: pass

### 3. TTS pauses on backgrounding, resumes/restarts on foreground
expected: During narration, backgrounding the app silences it immediately on both playback paths. Foregrounding resumes the ElevenLabs remote voice from the same position (not a restart), and restarts the current line from its beginning on the device-engine voice (no doubled/overlapping audio either way).
result: pass

### 4. Voice input never gets stuck listening
expected: Any speaking/dictation task's microphone auto-finalizes as soon as you stop talking — it never waits for a manual stop or hangs in a continuous-listening mode.
result: pass

### 3. TTS pauses on backgrounding, resumes/restarts on foreground
expected: During narration, backgrounding the app silences it immediately on both playback paths. Foregrounding resumes the ElevenLabs remote voice from the same position (not a restart), and restarts the current line from its beginning on the device-engine voice (no doubled/overlapping audio either way).
result: [pending]

### 4. Voice input never gets stuck listening
expected: Any speaking/dictation task's microphone auto-finalizes as soon as you stop talking — it never waits for a manual stop or hangs in a continuous-listening mode.
result: [pending]

## Summary

total: 4
passed: 4
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

[none yet]
