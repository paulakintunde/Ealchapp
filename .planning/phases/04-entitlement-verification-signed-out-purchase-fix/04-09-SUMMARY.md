---
phase: 04-entitlement-verification-signed-out-purchase-fix
plan: 09
subsystem: payments
tags: [device-verification, exam-gate, postgres, checkpoint, android]

# Dependency graph
requires:
  - phase: 04-05
    provides: start-exam-attempt's four-input server gate, deployed and curl-proven
  - phase: 04-06
    provides: grade-exam's attempt-validation gate, flag-conditioned on examGateOn
  - phase: 04-07
    provides: exam-paper.tsx's client-side examPaperAllowed + awaited server authorization
  - phase: 04-08
    provides: DEVICE-PROOF-RUNBOOK.md device recipe (adapted here for a Pixel 9, not the Pixel 6 it was written for)
provides:
  - "Live device proof that the whole exam-gate chain works with examGateOn TRUE: free allowance sits and grades (including the LLM round trip via grade-exam on a PE task), paper 2 is refused on its own screen even via a deep-link bypass of the paper-list lock, and a signed-out candidate is routed to sign-in"
  - "D-06's grace window (timingS + 3600s) measured correct against real authored content, not just unit tests"
  - "grade-exam's expires_at predicate proven live→expired→restored directly against Postgres"
  - "ealch-admin/scripts/set-exam-gate.ts — reversible, audited flip tool for Phase 5's real rollout"
  - "A reproducible fix to DEVICE-PROOF-RUNBOOK.md's exam-proof recipe: --no-dev --minify Metro is required for a Pixel 9 dev-client build to fetch/show exam content, and the OTA fetch needs real wall-clock time (26MB snapshot), not a fast force-stop/relaunch cycle"
affects: [phase-05-paywall-expansion, phase-07-known-bug-fixes]

# Tech tracking
tech-stack:
  added: []
  patterns: ["node:sqlite DatabaseSync for reading RKStorage off-device (adb exec-out, not adb shell redirect, to avoid binary corruption)"]

key-files:
  created: []
  modified: []

key-decisions:
  - "Used the account that actually ran the device test (e929b77d…, aking.akint@gmail.com) as the record of truth for Task 3's measurement, not the account originally precondition-checked at the start of Task 2 (5442adaf…, trend@maildrop.cc) — the human created a second account partway through setup. Both were confirmed to hold zero entitlement rows; only the former has exam_attempts rows to measure."
  - "Restarted Metro with --no-dev --minify rather than attempting a release build. DEVICE-PROOF-RUNBOOK.md documents the release-build ninja failure as unresolved; the --no-dev route is the runbook's own recommended workaround and worked without any native build."

requirements-completed: [PAY-03]

# Metrics
duration: ~2h (device/Metro setup including one full diagnostic detour on a false 'no exams' alarm, human device pass, DB measurement, restore)
completed: 2026-09-20
---

# Phase 04 Plan 09: Exam Gate Live Device Exercise Summary

**With `examGateOn: true` on a real Pixel 9, an unentitled account sat and was AI-graded on the free-allowance paper (including the PE/grade-exam LLM round trip), was refused on paper 2's own screen even when deep-linked past the paper-list lock, and a signed-out candidate was routed to sign-in — then the flag was confirmed restored to `false` and D-06's window and grade-exam's expiry predicate were measured correct against real Postgres data.**

## Performance

- **Duration:** ~2h
- **Tasks:** 3 (Task 1 was already complete and committed — `570461c` — before this session)
- **Files modified:** 0 (Task 1's `set-exam-gate.ts` pre-existed; Tasks 2-3 are verification-only)

## Task 1: Flip tool — already built

`ealch-admin/scripts/set-exam-gate.ts` was already committed (`570461c feat(04-09): add reversible set-exam-gate.ts flip tool`) before this session started. Confirmed working (`--show`, `--on --free-papers 1`, `--off` all behave as specified) throughout Tasks 2-3 below. Starting state recorded: `examGateOn=null examFreePapers=null` (the key was never explicitly set on the live row — the client's own default in `config.ts` treats a missing key as `false`, so this is equivalent to the shipped-off state, not a precondition violation).

## Task 2: Device exercise (human-verified checkpoint)

### Device setup notes (Pixel 9, not the Pixel 6 DEVICE-PROOF-RUNBOOK.md was written for)

- Dev build already installed and debuggable (`devlauncher` count 1, `flags=[ DEBUGGABLE HAS_CODE ... ]`).
- Metro was already running on 8082 but **without** `--no-dev` — under that mode the dev build's OTA guards (`refreshFromRemote`'s `if (__DEV__) return`, and `adoptedForLaunch`'s dev-null) block exam content entirely, per the runbook's own §8 warning. Killed it and restarted with `--no-dev --minify` (the runbook's documented workaround for the unresolved `assembleRelease` ninja failure — no native build needed).
- Rebuilt the reverse tunnel (`adb reverse --remove-all` then re-add — `UsbFfs tcp:8082 tcp:8082`), pinned the dev-client launch intent, confirmed `mCurrentFocus` on `MainActivity`, confirmed the bundle served (2203 modules, ~62s).
- **False alarm, diagnosed and corrected:** the exam hub showed "No exams available yet" through two force-stop/relaunch cycles. Root cause was **not** a content bug — `ealch://exam` with no `?format=` query param always renders an empty paper list by design (`app/exam.tsx`'s `papers` memo returns `[]` when `format` is null). Separately, the 26MB snapshot (`v70.json`, confirmed via `curl -I`) needs real wall-clock time to download+verify+cache in the background (`refreshFromRemote` is fire-and-forget); the rapid relaunch cycles were killing the fetch mid-flight every time. Fix: launched once, waited 60s uninterrupted, confirmed the cache landed on-device (`ealch-content-snapshot-meta` in `RKStorage`, read via `adb exec-out run-as ... cat databases/RKStorage` + `node:sqlite` — **`adb shell "run-as ... > file"` silently produces a 0-byte/corrupt file; `exec-out` is required for binary-safe transfer**), then relaunched once more and used `ealch://exam?format=tef_canada`. Content and gate lock state (Exam 1 unlocked, Exam 2/3 locked) then rendered correctly.

### Precondition

Entitlements checked for the account that actually ran the test, `e929b77d…` (`aking.akint@gmail.com`, created 2026-09-20T17:20:07Z): **zero rows** — no `examiner` feature. (The account originally precondition-checked at the top of Task 2, `5442adaf…`/`trend@maildrop.cc`, was also confirmed at zero entitlement rows but was abandoned by the human partway through setup in favor of the second account; noted here since the plan's acceptance criteria ask for this check against the account that actually sits the exam.)

### `--on` output

```
target: postgres aws-0-ca-central-1.pooler.supabase.com:6543/postgres
before: examGateOn=null examFreePapers=null
after: examGateOn=true examFreePapers=1
⚠  the Examiner paywall is now LIVE. Run with --off to restore. Shipped default is OFF.
```

### Paper ids used

- Paper 1 (free): `paper.tef_canada.blanc-01.1`
- Paper 2 (gated): `paper.tef_canada.blanc-02.2`

### Results

| Item | Result | What was seen |
|---|---|---|
| A1 — Paper 1 not locked in the list | **PASS** | `TEF Canada · Exam 1` showed `Start`, no lock icon; Exam 2/3 showed 🔒 |
| A2 — CO sits and submits | **PASS** | Listening sat, submitted, auto-scored (`8/40 · 72 → Below NCLC 4`) — confirms authorized start → row written → objective grading accepted |
| A3 — (subsumed into A2/A4) | **PASS** | — |
| A4 — Real AI band + feedback on a written/spoken épreuve | **PASS** | Writing · Section B graded **A1** with real generated feedback text ("The response fails to address the prompt, provides no position or letter format, and repeats identical sentences about weather without any arguments or examples, indicating a very limited ability to communicate the required content.") — **not** "non corrigé". This is the specific proof that `grade-exam`'s attempt-validation gate (04-06) accepts an authorized PE attempt rather than refusing it. |
| B5 — Paper 2 shown locked in the list | **PASS** | Confirmed visually before the bypass attempt |
| B6 — Deep-link bypass onto paper 2's own screen | Landed on the screen (expected — the list lock doesn't apply to a direct deep link; the gate is enforced on tap-start, not on navigation) | `ealch://exam-paper?paperId=paper.tef_canada.blanc-02.2` opened `TEF Canada · Exam 2` with mode selection and an active-looking `Start` on Listening |
| B7 — Tap start on paper 2 | **PASS** | Routed straight to the real Ealch Première paywall (`Annual CA$99` / `Monthly CA$12.99`, `Continue`, `Restore purchases`) — **no runner opened, no clock started** |
| C8 — Signed-out candidate | **PASS** | Signed out, deep-linked to paper 1, tapped Start → **sign-in screen** (not a spinner, not a crash) |
| C9 — Restore | Done | Signed back in after C8 |

**No A2/A4 or B7 failure occurred** — the two most serious possible failure modes named in the plan (gate refusing inside the free allowance; runner opening before the paywall) did not happen.

### Separate finding, out of scope for this plan (not blocking)

During the Speaking (PO) épreuve, the human reported audio continued playing in the background after navigating away from the screen having already submitted early ("it works within the exam interface" — reproducible while still inside the exam flow, not requiring a full app background). This is adjacent to but more specific than Phase 7's BUG-01 ("audio/TTS playback pauses automatically when backgrounded") — BUG-01 is about OS-level backgrounding; this is about in-app navigation away from an active PO recording/playback screen after early submission. Recorded here for Phase 7 to pick up; not investigated or fixed in this plan (out of scope for PAY-03).

## Task 3: Measurement, expiry proof, and restore

### A. D-06 window measurement (real content, `e929b77d…`'s three rows)

| skill | paper_no | gate_on | entitled | timing_s | window_s | window_s = timing_s + 3600? |
|---|---|---|---|---|---|---|
| PE | 1 | true | false | 3600 | 7200 | ✅ |
| CE | 1 | true | false | 3600 | 7200 | ✅ |
| CO | 1 | true | false | 2400 | 6000 | ✅ |

Every row satisfies `window_s = timing_s + 3600` exactly. Zero `(user_id, paper_id, skill)` duplicate rows (the PK held, and no double-start occurred).

### B. `grade-exam`'s expiry predicate, proven at the database level (PE row)

```
1. live rows (expect 1): 1
   original expires_at: 2026-09-20T19:33:06.833Z
2. rows after expiring (expect 0): 0
3. rows after restoring (expect 1, matching original): 1  2026-09-20T19:33:06.833Z
```

Exactly the live→expired→restored sequence the plan specifies, with the row restored to its original value afterward.

*Note: this write required explicit user approval — Claude Code's auto-mode classifier flagged the `UPDATE` against the live `exam_attempts` table as a shared-resource modification and blocked it until the user confirmed "proceed."*

### C. Flag restored

```
before: examGateOn=true examFreePapers=1
after: examGateOn=false examFreePapers=1
---
before: examGateOn=false examFreePapers=1
```

`examGateOn=false` confirmed as the **final** state.

### D. Post-restore curl (open-position proof, no LLM cost)

```
curl -s -X POST ".../functions/v1/grade-exam" -H 'Content-Type: application/json' -d '{}'
→ {"error":"cannot grade: task has no rubric/modelAnswer"}
```

Matches the expected 400 refusal shape exactly.

### E. `cd ealch-v2 && npm test`

`5351 pass, 0 fail` — full suite green after the device pass.

## Prerequisite for Phase 5 (PAY-02) before examGateOn is flipped

- The offline / `unreachable` limitation from 04-07 is **unclosed**: an attempt begun while the authorization service is unreachable has no `exam_attempts` row and will be refused at grading once `examGateOn` is true. Phase 5 must decide how to handle this (retry UX, offline queuing, or an explicit accepted-risk call) before the real flip.
- `ealch-admin/scripts/set-exam-gate.ts --on --free-papers N` is the supported way to flip the gate live; `--off` is the way back. Both print before/after state; `--on` prints an explicit warning. Never hand-edit `system_config` directly.
- `examFreePapers` is the blast-radius dial: `1` (used throughout this plan's exercise) keeps one full paper per format free for an unentitled candidate. Phase 5 should pick this value deliberately as part of PAY-02's rollout, not inherit `1` by default without a decision.

## Decisions Made

- Measured Task 3 against the account that actually ran the device test rather than re-running Task 2 against the originally-checked account, since re-running would have cost another full OTA-fetch cycle for no additional evidence — both accounts were confirmed unentitled, which is the only precondition that matters.
- Did not attempt an `assembleRelease` release build to work around the "no exams" false alarm; used the runbook's own documented `--no-dev --minify` Metro workaround instead, which needed no native build and no `JAVA_HOME`.

## Deviations from Plan

None affecting scope or acceptance criteria. The device used was a Pixel 9 rather than the Pixel 6 `DEVICE-PROOF-RUNBOOK.md` was written for, and Metro/reverse-tunnel/OTA-timing notes above are additions to that runbook's tribal knowledge, not a deviation from this plan's tasks.

## Issues Encountered

- **"No exams available yet" false alarm** (see Task 2 device-setup notes above) — resolved by diagnosis, not a real defect: missing `?format=` deep-link param plus force-stopping before the 26MB OTA fetch could complete.
- **`adb shell "run-as ... cat ... > /sdcard/file"` silently produces a 0-byte file** on this device/adb version — `adb exec-out run-as ... cat ...` (binary-safe) is required to read `RKStorage` off-device. Recorded per [[ealch-mic-test-pipeline]]'s existing guidance, reconfirmed here.
- Auto-mode classifier blocked the Task 3B `UPDATE` on `exam_attempts` as a shared-resource modification; resolved by explicit user approval before proceeding (see Task 3B note above).
- Separate audio-continues-after-navigation finding during the PO épreuve — logged above for Phase 7, not investigated here.

## Next Phase Readiness

- Phase 4 is now fully device-proven for PAY-03. `examGateOn` confirmed `false` in production by query, matching the shipped-off default.
- Phase 5 (PAY-02) has the flip tool, the `examFreePapers` dial, and the named offline/`unreachable` prerequisite in writing.
- Phase 7 has a new candidate finding (PO audio-continues-after-navigation) to triage alongside BUG-01.

---
*Phase: 04-entitlement-verification-signed-out-purchase-fix*
*Completed: 2026-09-20*
