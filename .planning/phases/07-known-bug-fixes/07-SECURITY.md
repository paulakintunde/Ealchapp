---
phase: 07
slug: known-bug-fixes
status: verified
threats_open: 0
asvs_level: 1
created: 2026-09-21
---

# Phase 07 — Security

> Per-phase security contract: threat register, accepted risks, and audit trail.

---

## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| device storage → app process | A previously written `exam-draft:*` AsyncStorage value is read back into exam state after a crash. The value is the user's own prior input, but the process that wrote it died, so the value may be truncated, corrupt, or written by an older build. |
| exam runner → `grade-exam` edge function | Each ungraded task's response body crosses to the server for AI grading; this phase changes how many times that boundary is crossed, not the boundary itself. |
| OS lifecycle → audio service | `AppState` change events drive `tts.ts` playback state via a module-scope listener. Not attacker-controlled in any meaningful sense. |
| developer workstation → production Supabase project | Device verification (07-05) temporarily wrote `system_config.ttsProvider = 'elevenlabs'` to the live `ogbothupjcivwruesgsu` project. |
| release APK ← OTA update channel | The installed verification build could in principle have served a previously published JS bundle instead of the locally compiled one. |

Per each plan's RESEARCH.md Security Domain section, Phase 7 crosses no auth, session, access-control, or cryptography boundary. All draft/audio content is the user's own prior input or their own device's playback state.

---

## Threat Register

| Threat ID | Category | Component | Disposition | Mitigation | Status |
|-----------|----------|-----------|-------------|------------|--------|
| T-07-01 | Tampering | `parseDraft()` in `examDraft.logic.ts` | mitigate | `JSON.parse` wrapped in try/catch returning `null` (`examDraft.logic.ts:108-138`); `v`/`paperId`/`skill` validated before any field is trusted; missing containers normalised to `{}`/`[]`. Re-verified directly against source and against a live `node --test` run: `examDraft.logic.test.ts` tests 5-8 (garbage JSON, null, version mismatch, foreign paperId/skill) all pass — `pass 15/15`. | closed |
| T-07-02 | Information Disclosure | `exam-draft:*` AsyncStorage entry | accept | Unencrypted at rest, same classification as every other AsyncStorage key in this app (`config.ts`, `analytics.ts`, `useProgress.ts`). ASVS L1 does not require at-rest encryption for this classification. Formalised in Accepted Risks Log below. | closed |
| T-07-03 | Information Disclosure | `SpokenAnswer.audioUri` | mitigate | `buildDraft()` (`examDraft.logic.ts:65-97`) drops `audioUri` entirely — not written as `null`, not written as a key. Confirmed live: `grep -c "audioUri" examDraft.logic.ts` (code only) = 1, the single `restoreState` reconstruction. Test 2 (`examDraft.logic.test.ts:52-57`) asserts the serialized string contains neither `rec-1.wav` nor the substring `audioUri` — passes. | closed |
| T-07-04 | Repudiation | `graded: string[]` skip list | accept | A tampered skip list can only cause the user to skip grading their own answers; no privilege gained, no other user affected; `grade-exam`'s own `attemptAuthorized()` remains the server-side boundary. Formalised in Accepted Risks Log below. | closed |
| T-07-05 | Denial of Service (quota exhaustion) | `submit()` retry loop → `examGrader.grade()` → `grade-exam` | mitigate | `if (isGraded(draft, task.id)) continue;` is the first statement of the loop body (`exam-section.tsx:301`), before `scoreClosedTask()` (line 320) and `examGrader.grade()` (line 372). Pinned by `examDraftWiring.test.ts` test 5's `indexOf` ordering assertions (`flushAt < skipAt < closedAt`, `skipAt < gradeAt`) — re-run live, passes. | closed |
| T-07-06 | Repudiation (duplicate result rows) | `useProgress.logExamResult` | mitigate | Same skip check as T-07-05 gates every `logExamResult(` call site in the loop (`exam-section.tsx:333,360,368,392,394`) — all sit after the `isGraded` `continue`. | closed |
| T-07-07 | Tampering | draft read on mount | mitigate | `parseDraft()` validates `v`/`paperId`/`skill` and try/catches the parse (plan 07-01); the mount effect (`exam-section.tsx:194-220`) treats a `null` return as no-draft and proceeds with empty state. The draft value is never used as control-flow authority beyond the skip list (T-07-04). | closed |
| T-07-08 | Information Disclosure | `exam-draft:*` key persisting after a session | accept-with-control | Control: `exam-section.tsx:401-409` calls `AsyncStorage.removeItem(key)` on every clean submit (D-08), confirmed present and unconditional on `key`. Residual: a crash-orphaned draft persists until the same paper+skill is reopened — accepted, same unencrypted-at-rest classification as T-07-02. Formalised in Accepted Risks Log below. | closed |
| T-07-09 | Denial of Service (microphone availability) | `stt.ts` recognition options | mitigate | `continuous: false,` is hardcoded and unconditional at `stt.ts:298` — confirmed by direct read and by a live `node --test` run of `sttContinuous.test.ts` (`pass 2/2`), which was additionally proven to actually bite via 3 recorded mutations (07-03-SUMMARY.md: mutations A/B/C all failed as predicted, `stt.ts` fully restored afterward, `git diff --exit-code` clean). | closed |
| T-07-10 | Tampering (guard integrity) | `sttContinuous.test.ts` itself | mitigate | Comments stripped before every assertion (`sttContinuous.test.ts:28`) so the file's own prose (which quotes `continuous: true`) cannot satisfy its own checks. Exactly-one-`continuous:`-key count assertion (`sttContinuous.test.ts:41`) closes the "second conditional key hides behind the literal" bypass — demonstrated live by mutation C in 07-03-SUMMARY.md (test 1 passes, test 2 fails, as designed). | closed |
| T-07-11 | Information Disclosure | TTS playback continuing while backgrounded | mitigate | `pauseForBackground()` (`tts.ts:497-515`) is called on every non-`'active'` AppState transition via the module-scope listener at `tts.ts:596-599`. Confirmed live: `ttsAppState.test.ts` tests 1-2 (`pass`) pin the listener's module-scope registration and that it wires both `pauseForBackground(`/`resumeFromForeground(` on the `'active'` branch. | closed |
| T-07-12 | Denial of Service (self-inflicted, loss of playback) | resume path vs. `generation` counter | mitigate | `pauseForBackground()` (`tts.ts:497-515`) contains no `generation +=` — confirmed by direct read and by `ttsAppState.test.ts` test 4 (`pass`), which asserts exactly this via a negative regex against the method body. Grace-timer bail at `tts.ts:454,461` includes `paused` in both the early-return and retry conditions, preventing a retry into a backgrounded app. | closed |
| T-07-13 | Tampering | module-scope AppState listener registration | accept | Registered once at import time (`tts.ts:596-599`) in a module that already solely owns `remotePlayer`/`generation`; no external unregister path exists, no cleanup path to leak. Formalised in Accepted Risks Log below. | closed |
| T-07-14 | Tampering (config left in test state) | `system_config.ttsProvider` on the live Supabase project | mitigate | Flip to `'elevenlabs'` paired with restore to `'device'` in the same device-verification session; `07-05-SUMMARY.md` / `07-VALIDATION.md` quote the confirmed read-back (`updated_at: 2026-09-21 15:41:48 UTC`, value `'device'`). | closed |
| T-07-15 | Spoofing (verifying the wrong build) | `expo-updates` on a release-shaped APK | mitigate | Bundled JS was grepped for `exam-draft:` before install; `07-05-SUMMARY.md` records the count as `1` on the installed EAS build, and independently confirms the build's `gitCommitHash` matched local HEAD (`40d0e839...`) including all three Phase 7 fix commits. | closed |
| T-07-16 | Information Disclosure | exam content displayed/spoken during the device-verification sitting | accept | Developer's own device, published mock-exam content they authored, no third-party data. Formalised in Accepted Risks Log below. | closed |

*Status: open · closed*
*Disposition: mitigate (implementation required) · accept (documented risk) · transfer (third-party)*

---

## Automated Re-Verification Performed By This Audit

All four Phase 7 structural/behavioral test files were re-run live (not just cited from prior summaries), from `ealch-v2/`:

```
node --test src/services/examDraft.logic.test.ts src/services/examDraftWiring.test.ts src/services/sttContinuous.test.ts src/services/ttsAppState.test.ts
→ tests 28, pass 28, fail 0
```

This independently confirms T-07-01, T-07-03, T-07-05, T-07-06, T-07-07, T-07-09, T-07-10, T-07-11, T-07-12 are pinned by code that actually runs green today, not merely by a prior session's say-so.

---

## Unregistered Flags

Two new-attack-surface-adjacent gaps were surfaced by this phase's own device-verification work (07-05) and filed as new requirements (`BUG-04`, `BUG-05` in `.planning/REQUIREMENTS.md`), but neither maps to a threat ID in any of the five plans' registers above:

- **BUG-04** — `ExamSpeakTask`, `ExamInterlocutorTask`, and `ExamDebateTask` all initialize `phase` to `'idle'` unconditionally on mount, with no prop reflecting a restored answer. The underlying data survives a crash (confirmed live: the "X/2 answered" count stayed accurate across two kill/relaunch cycles), but the screen invites the candidate to re-record, silently overwriting the restored answer. This does not defeat T-07-05/T-07-06's no-double-grading guarantee (`isGraded()` gates on `task.id`, not on answer content, so a re-recorded-then-resubmitted already-graded task is still skipped) — it is a data-loss/UX risk, not a grading-integrity bypass. Recorded here as informational; not a blocker for this audit.
- **BUG-05** — `content.logic.ts`'s `examTasksOfSection()` silently filters (`.filter(t => !!t)`) any task id that fails to resolve against the currently-loaded corpus, while `exam-report.tsx`'s `sectionStatusFor()` checks against the original, unfiltered, authored task-id list. A divergence between the two can cause `submit()` to silently skip logging a result with no error surfaced, while the report reads the absence as "never attempted." Live-reproduced once during device verification; exact trigger not confirmed. Not a threat this phase's plans registered or scoped to fix (07-05 was a verification-only plan); recorded here as informational, not a blocker.

Both are tracked in `.planning/REQUIREMENTS.md` (unmapped pending Phase 23 per the STATE.md roadmap) and should be re-evaluated for a threat-model entry when the phase that fixes them is planned.

No SUMMARY.md in this phase used a literal `## Threat Flags` heading; the above two items were located by reading each SUMMARY.md's "new requirement surfaced" prose directly, per the audit's standing instruction not to rely on that heading alone.

---

## Process Observation (not a threat, not a blocker)

`07-VALIDATION.md`'s frontmatter (`nyquist_compliant: false`, `wave_0_complete: false`, `status: draft`) and its Validation Sign-Off checklist (all boxes unchecked, `**Approval:** pending`) were not updated to reflect 07-05's completion, despite 07-05-PLAN.md's own success criteria requiring this flip. `07-05-SUMMARY.md` is itself marked `status: partial`. This is a documentation/process completeness gap in the phase's own closing paperwork, not a gap in any of the 16 registered threats' mitigations (all of which were independently re-verified against source and a live test run above). Flagged for the phase owner's attention, not gating this security sign-off.

---

## Accepted Risks Log

| Risk ID | Threat Ref | Rationale | Accepted By | Date |
|---------|------------|-----------|-------------|------|
| R-07-01 | T-07-02 | `exam-draft:*` is unencrypted at rest, at the same classification as every other AsyncStorage key in this app (`config.ts`, `analytics.ts`, `useProgress.ts`). Contents are the candidate's own essay/transcript text on their own device; an attacker with storage access already has the app session. ASVS L1 does not require at-rest encryption for this classification. Reopens if a future phase stores anything more sensitive (credentials, payment data) under the same unencrypted convention. | gsd-security-auditor | 2026-09-21 |
| R-07-02 | T-07-04 | A tampered `graded` skip list can only cause the tampering user to skip grading their own already-attempted task — no privilege is gained and no other user's data or grade is affected. `grade-exam`'s server-side `attemptAuthorized()` remains the real authorization boundary and does not trust this client list for anything beyond a client-side UX convenience. Reopens if a future change makes server-side grading logic trust the client's `graded` list for anything beyond convenience. | gsd-security-auditor | 2026-09-21 |
| R-07-03 | T-07-08 | D-08's `AsyncStorage.removeItem(key)` (`exam-section.tsx:401-409`) deletes the draft on every clean submit; a crash-orphaned draft is the only residual case, and it carries the same unencrypted-at-rest classification as R-07-01 — the candidate's own answer text on their own device, until the same paper+skill is next opened (which re-validates and typically supersedes it). Reopens if a future phase makes an orphaned draft's presence or age externally observable or actionable. | gsd-security-auditor | 2026-09-21 |
| R-07-04 | T-07-13 | The module-scope `AppState` listener in `tts.ts` is registered once at import time in a module that is already the sole owner of `remotePlayer`/`generation` (the same module-lifetime pattern used elsewhere in this file). No external caller can unregister it, and there is no cleanup path to leak — the module lives for the process's lifetime by design. Reopens if `tts.ts` is ever refactored to be instantiated more than once per process. | gsd-security-auditor | 2026-09-21 |
| R-07-05 | T-07-16 | Device verification (07-05) exercised exam content on the developer's own device, using published mock-exam content the developer authored themselves. No third-party or user PII is involved. Reopens if a future device-verification pass uses another user's real exam data. | gsd-security-auditor | 2026-09-21 |

*Accepted risks do not resurface in future audit runs.*

---

## Security Audit Trail

| Audit Date | Threats Total | Closed | Open | Run By |
|------------|---------------|--------|------|--------|
| 2026-09-21 | 16 | 16 | 0 | gsd-security-auditor |

---

## Sign-Off

- [x] All threats have a disposition (mitigate / accept / transfer)
- [x] Accepted risks documented in Accepted Risks Log
- [x] `threats_open: 0` confirmed
- [x] `status: verified` set in frontmatter

**Approval:** verified 2026-09-21
