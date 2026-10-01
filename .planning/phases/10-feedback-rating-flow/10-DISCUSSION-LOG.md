# Phase 10: Feedback & Rating Flow - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md. This log keeps the alternatives that were considered.

**Date:** 2026-10-01
**Phase:** 10-feedback-rating-flow
**Areas discussed:** Review trigger & cap, Report destination & payload, Report entry points, Le Rapport fix scope, plus a follow-up round on disclosure, retention, triage and iOS

Preceded by `10-PRE-DISCUSSION-AUDIT.md`, which re-specified the phase. The original wording described sentiment gating, which Google Play prohibits.

---

## Review trigger & cap

| Question | Options | Selected |
|---|---|---|
| Trigger | Lesson completed with good score / Streak milestone / Any of several wins / You decide | Lesson completed with good score |
| Tenure | ≥3 lessons + ≥3 days / ≥5 lessons + ≥7 days / No minimum | ≥5 lessons + ≥7 days |
| Cap spacing | 3/365d ≥90 days apart / 3/365d ≥30 days apart / 1 per version max 3/yr | 3/365d, ≥90 days apart |
| Cap storage | Per install local / Per account synced | Per install, local |
| Good score | Quiz ≥80% / Quiz 100% / You decide | Quiz 100% |
| Blockers (multi) | Error this session / Report sent recently / Offline / Paywall or banner just showed | All four |
| Settings rate row | Yes, store listing / No | Yes, store listing |
| Analytics | review_requested event / No | Yes |
| Fallback | Perfect only / ≥80% after 30 days | Perfect only |
| Timing | After leaving result screen / On result screen | After leaving result screen |
| Exclusions (multi) | Guests / Sons lessons / None | Guests, Sons lessons |
| Kill switch | Remote cached flag / No | Remote cached flag |

**Notes:** Paul chose stricter than recommended on tenure and score, preferring fewer and better-timed asks.

---

## Report destination & payload

| Question | Options | Selected |
|---|---|---|
| Destination | Supabase table via edge fn / + email alert / Email only | Supabase table via edge fn |
| Guests | Yes, install ID + tighter limit / Signed-in only | Yes |
| Categories | 6 / 4 / You decide | 6 |
| Reply | Optional contact checkbox / No replies | Optional contact checkbox |
| Metadata (multi) | Version+runtime+OS / Screen+content ID / Error ring / Device+font scale+theme | All four |
| Text limit | 1000 / 500 / 2000 | 1000 |
| Required | Category required, text optional / Both required | Category required, text optional |
| Offline | Queue and retry (D-27 style) / Error, keep text | Queue and retry |

---

## Report entry points

| Question | Options | Selected |
|---|---|---|
| Surfaces (multi) | Crash fallback / STT failure / Grading failure / Content flag | All four |
| Proactive banner | No / Yes after repeated failure | No |
| Form | formSheet / Full screen | formSheet |
| After send | Short thank-you, return / Thank-you screen | Short thank-you |
| Flag scope | Missions + quiz / Everywhere / Quiz only | Missions + quiz |
| Flag look | Header/overflow icon / Long-press only | Header/overflow icon |

---

## Le Rapport fix scope

| Question | Options | Selected |
|---|---|---|
| Exam skew (R2) | Exclude exam-review from headline / Log exam passes too | Exclude from headline |
| Labels (R1) | Name all 13 + test / Group as Other | Name all 13 + test |
| Entry (R3) | Profile / Home or trail / None | Profile |
| Route rename | /report / Keep /feedback | /report |

---

## Follow-up: disclosure, retention, triage, iOS

| Question | Options | Selected |
|---|---|---|
| Disclosure | "What's included" line / Toggle to exclude diagnostics / None | "What's included" line |
| Retention | 12 months / Until resolved + 90d / Indefinite | 12 months |
| Triage | Dashboard + status column / Admin page / PostHog mirror | Dashboard + status column |
| iOS | Prove Android, iOS to pre-App-Store gate / Stay open until iOS proven | Android now, iOS to launch gate |

## Claude's Discretion

- The "recent report" window, the rate-limit numbers, table/function naming and schema, copy, offline detection, and whether there is a shared logic file.

## Deferred Ideas

- Crash reporter (Sentry), admin triage page, proactive trouble banner, flag on other drills, loosening the review threshold.
