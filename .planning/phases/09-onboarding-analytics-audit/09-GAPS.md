# Phase 9 Audit Gaps

Recorded during Plan 09-06. Code gaps were closed by Plan 09-07 and retested; external evidence gaps remain blocking.

| ID | Severity | Reproduction / missing proof | Status / next action |
|---|---|---|---|
| G-09-01 | Critical code | Guest first-lesson claim could fire again after verified new signup. | **Closed:** guest claims transfer before `$identify`; guest-to-new-account and existing-sign-in tests pass. |
| G-09-02 | Critical automated proof | No-quiz completion, exam submission, and purchase success/cancellation lacked direct route assertions. | **Closed:** direct component tests pass, including restored exam sitting with an ungraded answer. |
| G-09-06 | Critical code | Supabase unavailable returned before `signup_started`. | **Closed:** event fires at signup tap; unavailable-service test passes with no signup completion or personal payload. |
| G-09-03 | Critical device/capture proof | `ealch-v2/.env` has no PostHog public test key or analytics-test flag. No configured-build accepted capture is observed. | **Open/blocking:** use disposable project and record each event ID plus accepted response, without storing the key in evidence. |
| G-09-04 | Critical device/store proof | Android debug APK installed, but Play-delivered campaign, iPhone walkthrough, App Store Connect aggregate review, and Android/iPhone sandbox purchases are unobserved. | **Open/blocking:** run `09-DEVICE-EVIDENCE.md` matrix and attach redacted outcomes. |
| G-09-05 | Critical full-suite gate | Earlier B2 image-alt failure and one transient JSON parse error during a concurrent content-seed write. | **Closed:** isolated final full unit rerun passes 5,722/5,722; full component passes 70/70; typecheck passes. |

An offline or rejected analytics response leaves the learner flow working but is a QA failure under D-24. The current capture client records an accepted/rejected diagnostic in configured test builds; this repository has not yet supplied a configured build for live endpoint proof.
