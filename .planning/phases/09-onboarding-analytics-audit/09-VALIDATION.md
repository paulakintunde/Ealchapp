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
| 09-04 first open/D1/referrer and native Android integration | acquisition logic/component tests, Android native build and sideload | Pass for code; Play campaign proof Deferred (D-26) |
| 09-05 lesson/exam/streak/purchase events | engagement logic/component tests | Pass |
| 09-07 guest claim transfer and direct event boundary proof | identity, no-quiz, exam, purchase, signup, placement tests | Pass |
| 09-08 initial_result, offline outbox, attribution dedupe, outdated checkpoint | placement, analytics and acquisition pure and route tests | Pass |
| 09-06 full `npm run typecheck` | TypeScript exit 0 | Pass |
| 09-06 full `npm run test:component -- --runInBand` | 19 suites, 77 tests passed (after Plan 08, 2026-09-30) | Pass |
| 09-06 full `npm test` | 5,733 tests passed, 0 failed (after Plan 08, 2026-09-30) | Pass |

See `09-EVENT-AUDIT.md` for the event-by-event expected and automated observations. The capture client exposes event ID, HTTP status, and accepted boolean in configured test builds without logging event properties or keys.

## Device and service checks

| Gate | Reason | Status |
|---|---|---|
| Android and iPhone guest/email wizard, placement skip/result/abandon/resume, recovery routes | Native permission, navigation, process-death, and focus behavior | Android Levels/A2 gate/paywall/A1 lesson partial; full Android and iPhone paths pending |
| Accepted capture for each critical event against a disposable PostHog project | EAS preview values verified and Android preview last confirmed queued; three Pixel debug captures returned HTTP 200/accepted with exact IDs/timestamps confirmed by PostHog API. `first_open` and `install_attribution` IDs/timestamps were also found for the same install, without client HTTP diagnostics. Other critical events and preview capture are pending. | Pending configured preview capture |
| Android attribution status | A device-observed non-campaign status with accepted capture; Play-delivered campaign proof deferred to launch (D-26) | Pending (status row); campaign Deferred |
| Offline delivery | One milestone captured in airplane mode, queued, then accepted after reconnect with the same event ID (D-27) | Pending |
| Prerequisites (Plan 06 Task 0) | Accounts, testers, builds and approvals confirmed before device rows | Pending |
| iPhone `unavailable` app event and separate App Store Connect aggregate report | Per-install store source is unavailable in app | Blocked on G-09-12 decision |
| Controlled local-clock D1 boundary and device foreground | Prove date logic and AppState integration | Pending device |
| Android store sandbox purchase | Prove store callback, entitlement, and accepted analytics without real charge | Pending |
| iPhone store sandbox purchase | Needs Apple Developer Program and an App Store sandbox tester | Blocked on G-09-12 decision |

The full steps and evidence fields are in `09-DEVICE-EVIDENCE.md`. Missing or rejected capture is a QA failure even when the learner flow continues. Every critical gap remains blocking in `09-GAPS.md` until retested.

## Sign-off

- [x] Each implementation task has automated checks.
- [x] No watch-mode commands were used.
- [x] Full unit suite exits 0 on the final audited tree.
- [ ] Android critical paths pass; iPhone per the G-09-12 decision.
- [ ] Every critical event has accepted capture evidence.
- [ ] Android attribution status, offline outbox, D1, and Android sandbox checks pass (Play campaign proof deferred to launch, D-26).
- [ ] Set `nyquist_compliant: true` only after all above evidence exists.

**QA-01:** Pending. **QA-02:** Pending. **Phase 9:** Incomplete.
