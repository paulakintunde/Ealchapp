---
phase: 09
slug: onboarding-analytics-audit
status: draft
nyquist_compliant: false
wave_0_complete: true
created: 2026-09-29
---

# Phase 9 — Validation Strategy

> This is the execution contract. No implementation or device result has passed merely because this plan exists.

## Test Infrastructure

| Property | Value |
|---|---|
| Framework | Node `--test`, Jest 30 + jest-expo 57 + React Native Testing Library |
| Config | `ealch-v2/package.json`, `ealch-v2/jest.config.js` |
| Quick run | `cd ealch-v2; npm test; npm run typecheck` |
| Full suite | `cd ealch-v2; npm run typecheck; npm test; npm run test:component -- --runInBand` |
| Estimated runtime | Measure at execution; no estimate claimed from planning |

## Sampling Rate

- After each implementation task: run its listed automated command and record exit status.
- After each wave: run the full suite above.
- Before `/gsd-verify-work`: full suite green plus the Plan 06 device and accepted-capture gate.
- Maximum feedback latency: record observed runtime at first run; break out pure tests if full suite is slow.

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure behavior | Test type | Automated command | File exists | Status |
|---|---|---:|---|---|---|---|---|---|---|
| 09-01-01 | 01 | 1 | QA-02 | T-09-01, T-09-02 | Typed allowlist and identity separation | Node/typecheck | `npm test; npm run typecheck` | ❌ W1 | ⬜ pending |
| 09-01-02 | 01 | 1 | QA-02 | T-09-02, T-09-03 | Accepted/rejected capture and verified link | Node/fake HTTP | `npm test; npm run typecheck` | ❌ W1 | ⬜ pending |
| 09-02-01 | 02 | 2 | QA-01, QA-02 | T-09-04, T-09-05 | No credential persistence; one-time milestones | Node/typecheck | `npm test; npm run typecheck` | ❌ W2 | ⬜ pending |
| 09-02-02 | 02 | 2 | QA-01, QA-02 | T-09-04 | Recoverable signup/mic/reminder actions | Jest/typecheck | `npm run test:component -- --runInBand; npm run typecheck` | ❌ W2 | ⬜ pending |
| 09-03-01 | 03 | 2 | QA-01, QA-02 | T-09-06, T-09-07 | Validated attempt restore, safe payload | Node/typecheck | `npm test; npm run typecheck` | ❌ W2 | ⬜ pending |
| 09-03-02 | 03 | 2 | QA-01, QA-02 | T-09-06 | Recoverable skip/load/exit states | Jest/typecheck | `npm run test:component -- --runInBand; npm run typecheck` | ❌ W2 | ⬜ pending |
| 09-04-01 | 04 | 2 | QA-02 | — | Per-install/local-day dedupe | Node/typecheck | `npm test; npm run typecheck` | ❌ W2 | ⬜ pending |
| 09-04-02 | 04 | 2 | QA-02 | T-09-08, T-09-09, T-09-10 | No raw referrer; async safe lookup | Node/typecheck/native build | `npm test; npm run typecheck; npx expo run:android` | ❌ W2 | ⬜ pending |
| 09-05-01 | 05 | 2 | QA-02 | T-09-11 | Lesson event only after content/progress | Node/Jest/typecheck | `npm test; npm run test:component -- --runInBand; npm run typecheck` | ❌ W2 | ⬜ pending |
| 09-05-02 | 05 | 2 | QA-02 | T-09-11, T-09-12 | Safe exam/purchase/streak outcome | Node/Jest/typecheck | `npm test; npm run test:component -- --runInBand; npm run typecheck` | ❌ W2 | ⬜ pending |
| 09-06-01 | 06 | 3 | QA-01, QA-02 | T-09-13, T-09-14 | All event/payload/capture rows audited | Full suite | `npm run typecheck; npm test; npm run test:component -- --runInBand` | ❌ W3 | ⬜ pending |
| 09-06-02 | 06 | 3 | QA-01, QA-02 | T-09-13, T-09-14 | Both-platform accepted capture and sandbox proof | Device + typecheck | `npm run typecheck` plus evidence | ❌ W3 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky. File-exists marks planned test/evidence files that have not been created yet.*

## Wave 0 Requirements

Existing Node, Jest, and TypeScript infrastructure is sufficient. Plan 01 creates the fake HTTP/capture proof seam; no framework install is required. The local Android module and its native build are Plan 04 work, not a hidden prerequisite.

## Manual-Only Verifications

| Behavior | Requirement | Why manual/device | Test instructions |
|---|---|---|---|
| Guest/email wizard and placement skip/result/abandon/resume on Android and iPhone | QA-01 | Native permissions, navigation, process death and screen focus | Follow 09-06 Task 2 and record device/build/outcome. |
| Accepted capture against configured PostHog test project | QA-02 | A mocked `track()` cannot prove endpoint acceptance | Correlate each event ID to HTTP response and ingestion result; no credentials in evidence. |
| Android Play attribution | QA-02 | Sideloading does not prove Play delivery | Use Play internal-test install with campaign link, record parsed fields/status only. |
| iPhone campaign reporting | QA-02 | App Store Connect aggregate view is external | Verify app emits `unavailable`; inspect campaign report separately without person-level inference. |
| Store sandbox purchase | QA-02 | Real Adapty/store callback required | Complete sandbox transaction, check entitlement and accepted purchase event without a charge. |
| Foreground D1 | QA-02 | AppState subscription must work on hardware | Foreground app on device; pair with controlled local-clock boundary test. |

## Validation Sign-Off

- [ ] Every task has an automated check or a device evidence dependency.
- [ ] No three consecutive implementation tasks lack automated feedback.
- [x] Existing infrastructure covers the framework; no Wave 0 install.
- [ ] No watch-mode flags in executed commands.
- [ ] Measured feedback runtime recorded.
- [ ] All critical Android/iPhone and accepted-capture rows pass.
- [ ] `nyquist_compliant: true` set only after passing evidence.

**Approval:** pending execution and device proof.
