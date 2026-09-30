---
phase: 09
slug: onboarding-analytics-audit
status: executing
nyquist_compliant: false
wave_0_complete: true
created: 2026-09-29
---

# Phase 9 validation

The automated code and route checks are separate from the configured capture and real-device release gate. A local `track()` assertion, fake HTTP 2xx, or sideloaded Android build does not satisfy QA-02. `nyquist_compliant` remains false until every critical row in `09-DEVICE-EVIDENCE.md` passes.

## Automated checks

| Plan | Evidence | Status |
|---|---|---|
| 09-01 typed identity, safe payloads, accepted/rejected/offline fake HTTP | `analytics.logic.test.ts`, `analytics-phase9.test.tsx`, typecheck | Pass |
| 09-02 wizard milestones, resume, signup and mic recovery | `onboarding-phase9.test.tsx`, `signup-phase9.test.tsx` | Pass |
| 09-03 persisted placement attempt, skip/result/abandon/load failure | placement logic and component tests | Pass |
| 09-04 first open/D1/referrer and native Android integration | acquisition logic/component tests, Android native build and sideload | Pass for code; Play delivery pending |
| 09-05 lesson/exam/streak/purchase events | engagement logic/component tests | Pass |
| 09-07 guest claim transfer and direct event boundary proof | identity, no-quiz, exam, purchase, signup, placement tests | Pass |
| 09-06 full `npm run typecheck` | TypeScript exit 0 | Pass |
| 09-06 full `npm run test:component -- --runInBand` | 19 suites, 70 tests passed | Pass |
| 09-06 full `npm test` | Isolated rerun: 5,722 tests passed, 0 failed | Pass |

See `09-EVENT-AUDIT.md` for the event-by-event expected and automated observations. The capture client exposes event ID, HTTP status, and accepted boolean in configured test builds without logging event properties or keys.

## Device and service checks

| Gate | Reason | Status |
|---|---|---|
| Android and iPhone guest/email wizard, placement skip/result/abandon/resume, recovery routes | Native permission, navigation, process-death, and focus behavior | Pending both devices |
| Accepted capture for each critical event against a disposable PostHog project | Fake HTTP verifies code behavior, not project ingestion | Pending test configuration |
| Play-delivered encoded Android campaign; no-campaign and lookup-failure cases | A sideload cannot prove Play Install Referrer | Pending |
| iPhone `unavailable` app event and separate App Store Connect aggregate report | Per-install store source is unavailable in app | Pending |
| Controlled local-clock D1 boundary and device foreground | Prove date logic and AppState integration | Pending device |
| Android and iPhone store sandbox purchase | Prove store callback, entitlement, and accepted analytics without real charge | Pending |

The full steps and evidence fields are in `09-DEVICE-EVIDENCE.md`. Missing or rejected capture is a QA failure even when the learner flow continues. Every critical gap remains blocking in `09-GAPS.md` until retested.

## Sign-off

- [x] Each implementation task has automated checks.
- [x] No watch-mode commands were used.
- [x] Full unit suite exits 0 on the final audited tree.
- [ ] Android and iPhone critical paths pass.
- [ ] Every critical event has accepted capture evidence.
- [ ] Play, App Store aggregate, D1, and store sandbox checks pass.
- [ ] Set `nyquist_compliant: true` only after all above evidence exists.

**QA-01:** Pending. **QA-02:** Pending. **Phase 9:** Incomplete.
