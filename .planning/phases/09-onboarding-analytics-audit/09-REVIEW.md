# Phase 9 review: onboarding and analytics

**Reviewed:** 2026-09-29
**Scope:** Source review to guide discussion. Runtime outcomes still require Phase 9 verification.

## Current journey

- `app/index.tsx` sends an install without `onboarded` to `/onboarding`.
- `app/onboarding.tsx` has guest and email account paths, ten numbered steps, an optional microphone check, and a result screen. Its `finish()` action calls `completeOnboarding(level)` and opens `/splash`.
- `app/den.tsx` presents the day-one orientation and placement offer after onboarding. Placement is optional and can also be reopened later.
- `app/placement.tsx` draws real corpus questions, records attempts, grades the result, writes the estimated level, and offers a start lesson action. The existing tests exercise the pure `placementEstimate()` rule, but this review found no full route test that proves the end-to-end placement journey.
- For a free learner graded A2, `Start here` targets an A2 lesson. `app/lesson.tsx` then redirects that locked band to the Première paywall under the ratified Phase 5 rule. The activation event must wait for real lesson content rather than counting this attempted route as a lesson start.

## Analytics gaps against the roadmap

| Roadmap outcome | Current source finding |
|---|---|
| First open, signup, onboarding steps, placement result, first lesson, D1 return | No corresponding event names in `src/services/analytics.ts`; the onboarding and placement routes emit none of these. Placement currently emits only `placement_paywall_offered` for an A2 result. |
| Engagement events | Paywall, purchase, restore, entitlement, and gate events exist. Lesson completion, exam submission, and streak events are absent from the typed event contract. |
| Store listing referrer | No acquisition referrer read or event capture was found in the mobile app source. Platform availability and the unavailable-value rule need research. |
| Anonymous to account continuity | `analytics.ts` uses a persistent anonymous install ID until `useStore.userId` exists, then sends that user ID as `distinct_id`. The service does not connect the two identities, so a cross-signup funnel can split into two people. |
| Event verification | `track()` is intentionally fire-and-forget and becomes a no-op without `EXPO_PUBLIC_POSTHOG_KEY`. A test transport or intercepted capture request is needed to verify payloads and sequence without a real purchase. |
| Payload correctness | Event names are a TypeScript union, but every event accepts the same generic property map. The current type does not require fields such as purchase plan or currency, so payload checks need explicit tests or a stronger event contract. |
| Delivery errors | `send()` catches thrown network errors but does not inspect HTTP status. A rejected capture response is currently invisible to the app; verification needs to distinguish a correctly formed request from an accepted event. |

## Behaviors to decide in discussion

1. Define onboarding completion separately from optional placement and from first lesson activation.
2. Define how the anonymous install and later account relate for funnel counting, including account switching on one device.
3. Define whether an unavailable store referrer is recorded explicitly and which acquisition fields are useful.
4. Decide whether the reminder step needs a clearly named continue-without-reminders action; its current primary action is labeled `Enable reminders` and invokes the permission path when the daily toggle is on.
5. Define what constitutes a passing event proof across guest, email, skip, placement, and purchase flows.

## Existing constraints

- Keep PostHog's current explicit HTTP capture path and the fire-and-forget behavior.
- Preserve placement grading, progress, and purchase authority unless a defect is demonstrated.
- `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-GATING-RULE.md` is the source of truth for the A2 paywall behavior.
- A source review does not establish that onboarding or placement passes on a physical device.
