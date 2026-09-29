---
phase: 09-onboarding-analytics-audit
plan: "01"
subsystem: analytics
tags: [posthog, supabase, identity, privacy, typescript]
requires:
  - phase: 08-accessibility-retrofit
    provides: verified learner routes for the Phase 9 audit
provides:
  - typed and allowlisted Phase 9 product events
  - separate install and rotatable guest journey IDs
  - verified new-signup linkage and accepted-capture diagnostics
affects: [09-02, 09-03, 09-04, 09-05, 09-06]
tech-stack:
  added: []
  patterns: [nonblocking HTTP capture, verified signup nonce, milestone deduplication]
key-files:
  created:
    - ealch-v2/src/services/analytics.logic.ts
    - ealch-v2/src/services/analytics.logic.test.ts
    - ealch-v2/src/services/analytics.test.ts
    - ealch-v2/__tests__/analytics-phase9.test.tsx
  modified:
    - ealch-v2/src/services/analytics.ts
    - ealch-v2/src/services/auth.ts
    - ealch-v2/src/services/session.ts
    - ealch-v2/src/store/useStore.ts
    - ealch-v2/app/paywall.tsx
key-decisions:
  - "A new guest journey starts separately from the legacy install ID to avoid combining people on shared devices."
  - "A successful signup response remains pending until a Supabase session matches both its user ID and random signup nonce."
  - "Test-build diagnostics store only event ID, event name, status, and accepted flag."
patterns-established:
  - "Product events pass through the typed runtime property allowlist before capture."
  - "PostHog identify uses the matched guest journey as $anon_distinct_id before signup_completed."
requirements-completed: [QA-02]
duration: 35min
completed: 2026-09-29
---

# Phase 9 Plan 01 Summary

Typed product events, guest/account identity boundaries, and observable HTTP capture are in place.

## Performance

- **Duration:** about 35 min
- **Tasks:** 2/2
- **Implementation commit:** `5aacd79`

## Accomplishments

- Added Phase 9 event properties and a runtime allowlist. Raw purchase error text and unrecognized paywall sources no longer enter analytics.
- Persisted install and guest journey IDs separately. First-open and other milestone keys deduplicate local repeats; milestone event IDs are stable. Sign-out rotates the guest journey even when Supabase is unavailable.
- Matched a new email signup by user ID and nonce from the authenticated session before sending PostHog `$identify` and `signup_completed`. An existing-account sign-in does not merge prior guest events.
- Added configured-test-build diagnostics for accepted, rejected, offline, and missing-key capture without retaining event bodies or credentials.

## Verification

- `npm test`: 5,697 passed, 0 failed.
- `npm run typecheck`: passed.
- Targeted Jest `analytics-phase9.test.tsx`: 2 passed, including direct `track()` HTTP 400/offline/200 and identity order.
- `git diff --cached --check`: passed before commit.

## Deviations from Plan

- **Rule 2 — correctness:** Added a local sign-out identity transition in `useStore.ts`; an unconfigured Supabase client cannot emit a session callback, but guest identity must still rotate.
- **Rule 2 — privacy:** Started the new guest journey separately from the legacy install ID because prior guest activity on a shared install could belong to different people.
- **Rule 2 — proof:** Added a direct Jest test and explicit test-build flag so QA can inspect endpoint acceptance without sensitive payloads.

**Total deviations:** 3 necessary correctness/proof additions. The event provider and app behavior remain within plan scope.

## Next Phase Readiness

Plans 09-02 through 09-05 can use the typed `track()` contract. Plan 09-06 still requires disposable PostHog ingestion proof, including any identity merge warning, and physical Android/iPhone capture walkthroughs. An HTTP 2xx proves request acceptance, not final ingestion.

## Self-Check: PASSED

The implementation commit exists; created files, automated tests, and typecheck were verified. External ingestion and device acceptance remain the Phase 9 release gate.
