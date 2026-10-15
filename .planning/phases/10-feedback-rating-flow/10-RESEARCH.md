# Phase 10: Feedback & Rating Flow - Research

> **SUPERSEDED (2026-10-15):** parts of this file describe the earlier "recent report" skip and 12-plan layout. `10-CONTEXT.md` is the source of truth (D-06 amended: a report never affects review eligibility; D-34 to D-49). Where this file disagrees, CONTEXT wins.

**Researched:** 2026-10-01
**Domain:** Expo SDK 57 / React Native 0.86 app (npm, `ealch-v2/`), Supabase edge functions, PostHog
**Confidence:** HIGH on codebase seams, MEDIUM on Play/Apple quota behaviour (platform-owned, undisclosed)

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
D-01 only trigger is a completed lesson whose quiz scored 100% (Phase 9 D-18 boundary); lesson without quiz never triggers.
D-02 no looser fallback threshold.
D-03 sheet appears after the learner leaves the result screen and lands on the trail; never covers celebration or score.
D-04 eligibility: at least 5 completed lessons AND at least 7 days since install; Sons lessons do not count and never trigger.
D-05 guests never asked.
D-06 skip WITHOUT spending the cap when: error logged this session (errors.ts ring non-empty); problem report sent recently (planner picks N days); device offline; a paywall or PushBanner kind showed in the same moment.
D-07 max 3 requests per rolling 365 days, at least 90 days apart; cap counts requests.
D-08 counter per install in AsyncStorage; reinstall resets; no server column.
D-09 `review_requested` analytics event each time the request fires, stable ids only (D-21 rules).
D-10 requests behind a remote flag with cached value (examGateOn pattern, `src/services/config.ts`).
D-11 Settings "Rate Ealch" row opens the store listing URL, never the review API.
D-12 reports go to a new Supabase table written only via an edge function with auth + rate limit (Phase 3 TTS pattern); client gets insert only, no select/update/delete.
D-13 guests may report, keyed on Phase 9 install ID, tighter limit (~3/day); signed-in looser; planner sets numbers.
D-14 six categories, one required: Audio or voice / Grading felt wrong / Content mistake / App froze or crashed / Payment or access / Something else.
D-15 free text optional, max 1000 chars.
D-16 auto context: app version, update runtime, platform/OS; current screen + lesson/content/item ID; last 10 errors (message+stack); device model, font scale, theme. Never: answer text, speech transcripts, email (except D-17).
D-17 optional "You can contact me" checkbox, off by default, signed-in only; edge function stores account email server-side; client never sends email.
D-18 unsent report (offline, 429, 5xx) saved and retried on next launch and each foreground, like Phase 9 D-27 outbox; learner sees "Sent" or "Will send when you're back online"; 4xx not retried.
D-19 sheet shows one-line "What's included" that expands to the full D-16 list.
D-20 reports kept 12 months, deleted by scheduled cleanup; delete-account also removes the learner's reports.
D-21 triage in Supabase dashboard via `status` column (new / seen / fixed / wont_fix); no admin UI.
D-22 entry points: Settings; crash fallback (pre-fills crashed); STT hears-nothing/mic failure (pre-fills audio); exam grading failure/ungraded (pre-fills grading); lesson content flag (pre-fills content + item ID).
D-23 content flag on lesson missions and quiz questions only, small icon in header/overflow, screen-reader label, not a long-press.
D-24 no proactive PushBanner offer.
D-25 report UI is `presentation: 'formSheet'`; paint contentStyle bg, top detent <= 0.92, test at font scale 1.3.
D-26 short thank-you then return learner to where they were.
D-27 exam-review attempts out of headline ring and per-drill rows; still feed weak-words; exam passes NOT added to attempt log.
D-28 all 13 `Activity` values get FR and EN names in `drillNames`; test fails when an Activity lacks a name.
D-29 entry from `app/profile.tsx` ("Your report" row); trail/home untouched.
D-30 rename route `/feedback` to `/report`; update `roleplay.tsx`, `speak.tsx`, deep links, analytics screen names; problem sheet uses `/report-problem`.
D-31 R4 component test; R5 ring announces "accuracy, N percent"; R6 weak-item deep links land correctly under Concept C spine.
D-32 build both platforms; close on Android device evidence (review request at trigger, cap holding on repeat, one report per entry-point type reaching the table, offline report delivered late, Le Rapport populated + empty). iOS proof is a named pre-App-Store checklist row.
D-33 `expo-store-review` moves the runtime fingerprint: ship by binary, not OTA; check fingerprint before any `eas update`.

### Claude's Discretion
"Recent report" window (D-06); per-user and per-install rate limits (D-13); edge function and table names, schema, RLS shape; copy (French first, no em dash, no "honest"); how "offline" is detected for D-06; whether report sheet and review request share a small pure logic file (`entitlement.logic.ts` pattern).

### Deferred Ideas (OUT OF SCOPE)
Crash reporter (Sentry); admin triage page; proactive "Having trouble?" banner; flag icon on flashcards/dictation/roleplay/exam items; loosening the review threshold. Sentiment gating is out of scope permanently.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FEEDBACK-01 | Le Rapport labels all activities, no exam-miss skew, component test, device-proven | Activity union has 13 values (`progress.logic.ts:19-27`); jest-expo harness exists in `__tests__/`; patterns below |
| FEEDBACK-02 | Native store review, no pre-question, positive milestone, 3 per 365 days per install | `expo-store-review ~57.0.3`; trigger seam is `onQuizComplete(score,total)` in `LessonPager.tsx:105/914/934 (LessonRich.tsx is only the flat deck's onComplete)`; pure logic file; remote flag |
| FEEDBACK-03 | Report a problem, categorized + free text, reachable from Settings and failure surfaces, private | New `problem_reports` table in `schema.sql`, new `report-problem` edge function modeled on `tts`/`delete-account`, outbox modeled on analytics |
</phase_requirements>

## Summary

Phase 10 is three independent deliverables on top of a mature codebase that already has nearly every seam needed: a remote-plus-cached config (`config.ts`), a per-install id (`analytics.installId()`), a persistent retry outbox (analytics), an error ring (`errors.ts`), a formSheet convention in `_layout.tsx`, an edge function auth pattern (`tts`, `delete-account`), and a jest-expo component test harness. The only new dependency is `expo-store-review`, which is not installed. SDK 57 line is published as 57.0.3 [VERIFIED: npm registry].

Three findings change what the plan should assume. (1) The "migrations under ealch-v2/supabase/migrations" premise is false: that directory does not exist. App-plane tables live in one flat idempotent `ealch-v2/supabase/schema.sql`; the new table goes there, NOT in `ealch-admin/drizzle` [VERIFIED: filesystem + memory note ealch-two-database-planes]. (2) The D-01 trigger needs the quiz score, which exists at `LessonPager.tsx:105/914/934 (LessonRich.tsx is only the flat deck's onComplete)/1488` (`onComplete(score,total)`) but `lesson.tsx:662 onQuizComplete` currently takes no arguments, so the score must be plumbed. Also the lesson screen exit is `router.back()` (finish) or `router.replace('/lesson')` (next lesson), and D-03 requires firing only after landing on the trail. (3) There is no network-state library installed (no NetInfo, no expo-network, no Sentry), so D-06 "offline" must be derived without one.

**Primary recommendation:** Add `expo-store-review ~57.0.3` via `npx expo install`; put eligibility and cap math in one pure `reviewPrompt.logic.ts` (node --test), the persisted state in a thin `reviewPrompt.ts`, arm a pending flag at quiz completion with score 100 and fire it from the trail (home/den) focus handler; build the report as `problem_reports` table in `schema.sql` + `report-problem` edge function (deployed `--no-verify-jwt`, in-body `callerUid()`), with a client outbox copied from the analytics outbox shape.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Review eligibility + cap decision | Browser/Client (pure logic) | — | Per install, local only (D-08); no server column |
| Review kill switch | Database (`system_config`) | Client (cached) | Only post-release pause (D-10) |
| Native review sheet | Client (OS-owned) | — | Play/Apple own UI and quota |
| Report write, auth, rate limit, email attach | API/Backend (edge function) | Database | Email must never come from client (D-17); service role only |
| Report storage, retention, triage | Database (`problem_reports`) | — | RLS no policies; dashboard triage (D-21) |
| Report retry queue | Client (AsyncStorage outbox) | — | D-18 |
| Context assembly (errors ring, screen, theme) | Client | — | Only the client knows it |
| Le Rapport math and labels | Client (pure logic + screen) | — | Local attempt log |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| expo-store-review | ~57.0.3 | Native review request | Official Expo SDK module; Android uses Play In-App Review (`com.google.android.play:review`), iOS uses `AppStore.requestReview(in:)` [CITED: Expo source via Context7 /expo/expo]. 57.0.1, .2, .3 exist [VERIFIED: npm view] |

### Supporting (already installed, reuse)
| Library | Purpose | When to Use |
|---------|---------|-------------|
| @react-native-async-storage/async-storage ^2.2.0 | Cap state, report outbox | all local persistence |
| expo-application ~57.0.2 | `nativeApplicationVersion` for D-16 | report context (already a dependency) |
| expo-constants ~57.0.3 | runtime/app version, `expo-updates` runtime | report context |
| expo-updates ~57.0.11 | `Updates.runtimeVersion`, `updateId` | D-16 "update runtime" |
| jest-expo ~57.0.5 / jest ^30.5.2 | component tests | R4 and report sheet tests (`__tests__/*.test.tsx`) |
| node:test via `npm test` | pure logic tests | `src/**/*.test.ts` and `supabase/functions/**/*.test.ts` |

Device model and OS: `expo-device` is NOT in package.json. Options: `Platform.constants` (Android `Model`, `Release`; iOS `osVersion`) from react-native needs no new native module and avoids a second fingerprint move. Recommend `Platform.constants` [ASSUMED that `Model` is present on Android Platform.constants; verify on device] and font scale via `PixelRatio.getFontScale()`. Do NOT add expo-device.

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `expo-network` / NetInfo for D-06 offline | Offline signal derived from the last failed/successful `refreshConfig()` or a cheap fetch | Adding a native module widens the fingerprint change; the review flow is gated by 5 lessons + 7 days so a stale signal is harmless. Recommend a HEAD-less guard: skip if the config fetch in the last foreground failed, and treat `requestReview` rejection as "not spent" (see Pitfall 4) |
| Sentry | `errors.ts` ring | Deferred by CONTEXT |

**Installation:**
```bash
cd ealch-v2
npx expo install expo-store-review      # npm project; never pnpm here
```
**Version verification:** `npm view expo-store-review@57 version` returned 57.0.1, 57.0.2, 57.0.3 [VERIFIED: npm registry, 2026-10-01]. `npx expo install` picks the SDK-matched one.

## Architecture Patterns

### System Architecture Diagram

```
REVIEW (FEEDBACK-02)
 QuizDeck.pick() ──onComplete(score,total)──> LessonPager ──> lesson.tsx onQuizComplete
                                                                   │ score===total && band!=='sons'
                                                                   ▼
                                                    reviewPrompt.arm(lessonId)   (in-memory + AsyncStorage pending)
 learner taps finish / back  ──router.back()──> trail (home/den) gains focus
                                                                   │
                                  maybeRequestReview(ctx) ──> reviewPrompt.logic.decide()
                          ctx: flagOn, userId, completedCount, installDay, errors ring, recentReport, offline, bannerShown
                                   skip (no spend) │ eligible
                                                   ▼
                              record request (cap state) ─> track('review_requested') ─> StoreReview.requestReview()
                                                                   (OS sheet; nothing from Ealch)

REPORT (FEEDBACK-03)
 entry points (Settings | ErrorScreen inline | STT fail | exam-report | flag icon)
        │ params {category, screen, itemId, lessonId}
        ▼
 /report-problem formSheet ──build payload (pure)──> reportOutbox.send()
        │                                              │ 2xx: "Sent"      │ offline/429/5xx: persist, "Saved"   │ 4xx: inline error, not queued
        ▼                                              ▼
 functions.invoke('report-problem') ──> edge fn: callerUid() or guest(install_id) ─> rate limit (service-role counter)
        ──> validate (category enum, 1000 chars, ids) ──> insert problem_reports (+ email from auth user if contact=true)
 launch + foreground ──> flushReportOutbox() (same cadence as flushAnalyticsOutbox)
```

### Recommended Project Structure
```
ealch-v2/
├── app/report.tsx                       # renamed from feedback.tsx (Le Rapport); keep a /feedback redirect screen
├── app/report-problem.tsx               # formSheet
├── src/services/reviewPrompt.logic.ts   # pure: eligibility, cap, spacing (+ .test.ts, node --test)
├── src/services/reviewPrompt.ts         # AsyncStorage state, flag read, StoreReview call, track()
├── src/services/problemReport.logic.ts  # pure: categories, payload builder, limits, outbox model (+ .test.ts)
├── src/services/problemReport.ts        # invoke, outbox flush
├── supabase/functions/report-problem/   # index.ts + limits.ts + limits.test.ts
└── supabase/schema.sql                  # + problem_reports (idempotent, appended)
```

### Pattern 1: Pure decision file
**What:** All branchy rules in a zero-RN-import `*.logic.ts`, tested with `node --test`, as `entitlement.logic.ts`/`tts/quota.ts` do. Eligibility inputs are a plain object; output is `{ ask: true } | { ask: false, spend: false, reason }`.
**Cap math:** keep an array of request timestamps (ms). Prune those older than 365 days; ask only if `pruned.length < 3` AND (empty OR `now - last >= 90 days`). Persist the pruned array. Fewer than 3 in 365 days with 90 day spacing means the third is at day 180 at the earliest, so the 90 day rule is the binding constraint; the test must cover the window edge (day 364/365/366) and clock moving backward (treat future timestamps as now).
**Counted when:** the moment before `requestReview()` is invoked. Never decrement afterwards (neither platform reports a result).

### Pattern 2: Remote flag with cache
Add `reviewPromptOn: boolean` to `RemoteConfig` and `DEFAULTS` in `config.ts` (default `true` is the shipping decision; `false` would make the shipped feature dormant). Read with `getConfig().reviewPromptOn` at decision time. Cached via the existing `CACHE_KEY` merge, so offline launches still honour the last known value. Note the edge function and ealch-admin console may need the key added to the active `system_config` JSON to be flippable; absent key falls back to DEFAULT.

### Pattern 3: Outbox for reports
Copy the analytics outbox shape (`analytics.ts` `readOutbox/writeOutbox/flushOutbox`, `analytics.logic.ts` `enqueueOutbox/pruneOutbox/validOutbox`): validated read, bounded length, TTL prune, write progress after each entry, stop on first retryable failure. Differences: entry carries a client-generated `report_id` (UUID) used as the server idempotency key (`on conflict (id) do nothing`), so a retry after a timed-out-but-actually-delivered POST cannot duplicate. Retry classification: network error, 429, 5xx retry; other 4xx drop. Flush from the same two call sites that call `flushAnalyticsOutbox()` (launch and foreground in `app/_layout.tsx`).

### Pattern 4: Edge function
Model on `tts/index.ts` + `delete-account/index.ts`: deploy `--no-verify-jwt` (guests must reach it and get a real 4xx body), verify identity in body with `callerUid()` (caller-scoped client + `auth.getUser()`), use a service-role client for all DB access. Guests are accepted: key = `install_id` from the body. Counters follow `tts_bump`: a `problem_report_usage` table (subject_key, day, count) plus an atomic `security definer`-free function with `set search_path = ''`, revoked from public/anon/authenticated. Limits read from `system_config` with 60 s cache and safe defaults (tts `ttsLimits()` pattern), keys e.g. `reportDailyGuest` (3), `reportDailyUser` (10), plus a global per-day ceiling.
Email attach (D-17): when `contact === true` and `callerUid` is non-null, read the email from `auth.getUser()` result server-side and store it in `contact_email`; ignore any client-supplied email field entirely.

### Pattern 5: formSheet registration
`app/_layout.tsx` already registers `fiche` and `preroll` as formSheets; copy that block for `report-problem` per UI-SPEC (single detent 0.92, `contentStyle` painted with the sheet colour, vertical gesture). Read the existing entries before copying; memory note ealch-formsheet-android-verdict records that top detent must be <= 0.92 and font scale 1.3 still drops tails.

### Anti-Patterns to Avoid
- **Any Ealch UI around the review call** (pre-prompt, toast, thank-you). Play guideline forbids questions before/while the card shows [CITED: developer.android.com/guide/playcore/in-app-review, quoted in the audit]. A wrapper component that "explains" the sheet is the regression to prevent.
- **Calling `requestReview` from Settings** (D-11). Use the store URL.
- **Awaiting the review result to decide anything.** The promise only says the flow ran, not that a review was submitted [CITED: Expo Android source via Context7].
- **New Postgres table in `ealch-admin/drizzle`.** Wrong plane.
- **A client-side insert** into `problem_reports` via supabase-js. RLS has no policy; only the service role writes.
- **Putting `email` in the client payload.** Reject unknown keys server-side.
- **Third-party providers in `ErrorScreen.tsx`** (it is provider-free by design, UI-SPEC S3).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Review prompt UI | custom star/emoji sheet | `expo-store-review` `requestReview()` | Policy (Play + Apple 5.6.1) |
| Retry queue | new queue design | analytics outbox model | already encodes ordering, pruning, crash-safe progress |
| Stable per-install id | new UUID store | `installId()` from `analytics.ts` | Phase 9 key `ealch-analytics-id` survives legacy installs |
| Install date (D-04) | new first-launch key | `ealch-acquisition-first-open` record (`acquisition.ts`, `.at` ISO) | already written on first open |
| Remote flag | direct supabase read | `getConfig()` / `refreshConfig()` | cached, offline-safe |
| Rate limiting | in-memory counters in the function | Postgres atomic bump function (tts_bump style) | edge instances are stateless; read-then-write races |
| Retention | app-side deletes | scheduled DB job | see Open Question 2 |
| Error context | new log | `recentErrors()` / `formatForReport()` in `errors.ts` | already a 10-slot ring |
| Android store URL | hardcoded literal in many places | one constant `market://details?id=app.ealch.mobile` with `https://play.google.com/store/apps/details?id=app.ealch.mobile` fallback | package id verified in `app.json` |

**Key insight:** every infrastructure piece exists; the risk is wiring (score plumbing, trigger timing, route rename) not new engineering.

## Runtime State Inventory

This phase includes a route rename (`/feedback` to `/report`), so:

| Category | Items Found | Action Required |
|----------|-------------|------------------|
| Stored data | `attempts.activity` in Postgres and local log carry activity ids, not route names. No data keyed on "feedback" route. PostHog: no `screen` events exist for feedback today (allowlist in `analytics.logic.ts` has no screen event) | None (verified by reading allowlist) |
| Live service config | None found: no external service references the route | None |
| OS-registered state | Notification payloads or deep links that embed `ealch://feedback` could exist on user devices; grep for `feedback` in `notifications.ts`/`notifText.logic.ts` before deleting the route | Keep a one-line `/feedback` redirect screen (UI-SPEC allows) |
| Secrets/env vars | None | None |
| Build artifacts | `ealch-v2/dist` (Metro export) and `android/` contain stale route registrations; rebuilt by next build. Also `strings.ts` keys for Le Rapport stay | Rebuild; no manual action |

Call sites to change (verified by grep): `app/roleplay.tsx:436`, `app/speak.tsx:356`, `app/_layout.tsx:207`. Other files matched "feedback" textually (`lesson.tsx`, `exam-*.tsx`, `strings.ts`, `stt.ts`); most are the English word, but the planner must grep each for route usage. Comments in `supabase/schema.sql` reference `app/feedback.tsx`; update the comment.

## Common Pitfalls

### Pitfall 1: Trigger has no score today
**What goes wrong:** `lesson.tsx:662 onQuizComplete = () =>` ignores `(score,total)`; implementing D-01 off the existing signature fires on any completion.
**How to avoid:** change the handler to `(score, total)` (LessonPager prop type already declares `(score:number,total:number)` at `LessonPager.tsx:105`). Fire eligibility only on `score === total && total > 0`. Beware `QuizRoundsView.tsx` (a second quiz renderer, comment at line 86 references onQuizComplete); confirm whether it routes through the same handler and what "100%" means for rounds.
**Warning signs:** review requested after a 4/5 quiz.

### Pitfall 2: Quiz retry shouldn't re-arm
`QuizDeck` `retry()` resets answers but `completedRef` stays true, and `lesson.tsx` `completedRef` also guards. Keep that: the first completion's score decides. A retry scoring 100% later must not trigger (otherwise a learner can farm the prompt; also contradicts "completion boundary").

### Pitfall 3: D-03 "after leaving the result screen"
After the result card the learner either calls `finish()` (`router.back()`) or `goNextLesson()` (`router.replace('/lesson')` to another lesson, never landing on the trail). Arm a pending flag at completion; only consume it when the trail screen (the screen `router.back()` returns to, home/den per Concept C) is focused. If the learner chains lessons, the pending flag stays armed and is replaced by the next completion (or dropped). Do NOT fire from inside `lesson.tsx`. Clear the pending flag on app foreground after a long gap so it cannot fire days later.

### Pitfall 4: Spending the cap on a request that never ran
`isAvailableAsync()` is true on Android when the Play Store package is installed; on iOS true except TestFlight [CITED: Expo source]. Call `isAvailableAsync()` first; if false, skip without spending. If `requestReview()` rejects (Android `RMTaskException`/`RMUnsuccessfulTaskException`, iOS `MissingCurrentWindowSceneException`), the sheet did not run: record a spend only if it resolved? Tension with D-07 ("count requests"). Recommendation: spend the cap only when the promise resolves or the call was definitively made; do not spend on a thrown rejection. Flag this to Paul as an assumption (A2) since the platforms may silently suppress even on resolve.

### Pitfall 5: Fingerprint and OTA
`runtimeVersion.policy = "fingerprint"` (`app.json:11`); a native module changes it (memory: ealch-fingerprint-includes-eas-config). Any `eas update` published before the new binary exists will target the OLD runtime and will not carry this phase's JS-only pieces that import the module, and a new-runtime update cannot reach old binaries. Plan: ship binary, run the fingerprint check, only then OTA.

### Pitfall 6: Dev client cannot show the Play sheet
Play In-App Review shows real UI only for apps installed from Play (internal testing track counts); sideloaded/debug builds typically skip or show nothing [ASSUMED from Play docs; verify in the D-32 device row]. The Android device evidence requires a Play-delivered build, or accept evidence by the `review_requested` PostHog event plus logcat of the `ReviewManager` flow. Decide this before planning the evidence task; it is the biggest risk to D-32's "review request at the trigger" row. Play also applies undisclosed quotas, so the sheet may not appear on repeat tests even though the request ran [CITED: Play In-App Review quotas, developer.android.com/guide/playcore/in-app-review].

### Pitfall 7: "Completed lessons" count (D-04)
`lessonMissions` in `useProgress` is wiped per lesson on a `Lesson.version` bump (memory: ealch-lesson-version-text-edit-no-bump, markMissionDone docstring) and `eraseProgress` clears it, so deriving the count from it can fall below 5 after content updates. Recommend the review state persists its own set of completed (non-sons) lesson ids, appended at the same site that fires `lesson_completed`. Lesson ids for Sons are `sons.NN.lM` (`lesson.tsx:38`); exclude by `startsWith('sons.')`.

### Pitfall 8: Guests and sign-in flips
Guests are `useStore.getState().userId == null`. A guest who later signs up keeps their install-level cap state (same install), which is correct. A shared device with two accounts shares one cap, which is conservative and fine.

### Pitfall 9: Report sheet at font scale and keyboard
Known traps recorded in memory: formSheet transparent on Android without `contentStyle`, text tails dropped at 1.3, `flex` on a `Text` clips. UI-SPEC already requires a pinned footer with KeyboardAvoidingView; test it on the Pixel 9 with the IME open.

### Pitfall 10: Guest rate limit is spoofable
Guest key is a client-asserted install id; an attacker can rotate it. Add a global ceiling per day in the same counter table and (if available) a per-IP key from `x-forwarded-for` [ASSUMED header is set on Supabase edge; verify]. Cap payload size in the function (reject bodies over a few KB; errors array limited to 10 x bounded length), and validate every field server-side (category enum, `maxLength` 1000, id patterns).

### Pitfall 11: `errors.ts` payload leakage
Stacks and messages can contain learner text if an app error interpolates an answer. D-16 forbids answers. Truncate each message/stack (for example 500/2000 chars) and rely on the "What's included" disclosure; add a unit test that the payload builder drops unknown keys. Note an edge function cannot verify the absence of answers; this is a client-side best effort.

### Pitfall 12: Seeded schema applied manually
`schema.sql` is "paste in SQL editor" (SETUP.md); there is no migration runner for the app plane. The plan needs an explicit manual apply step plus verification via the Supabase MCP or dashboard, and the Supabase project may be paused (memory: ealch-supabase-project-paused) so re-poll live before the device evidence.

## Code Examples

### Review call (client)
```typescript
// Source: Expo StoreReview API (Context7 /expo/expo, StoreReview.ts)
import * as StoreReview from 'expo-store-review';

export async function fireReview(): Promise<boolean> {
  if (!(await StoreReview.isAvailableAsync())) return false;   // no spend
  await StoreReview.requestReview();                           // resolve != rated
  return true;
}
```

### Settings "Rate Ealch" (never the review API)
```typescript
import { Linking } from 'react-native';
const PLAY_APP = 'market://details?id=app.ealch.mobile';
const PLAY_WEB = 'https://play.google.com/store/apps/details?id=app.ealch.mobile';
// iOS: no store URL until an App Store id exists; hide the row on iOS until then, or show it disabled (open question 4)
Linking.openURL(PLAY_APP).catch(() => Linking.openURL(PLAY_WEB).catch(() => {}));
```
`StoreReview.storeUrl()` reads `ios.appStoreUrl`/`android.playStoreUrl` from app config [CITED: Expo docs]; either set those in `app.json` (changes the fingerprint only if it is native-config; it is, in this repo, so do it in the same binary) or use the constants above.

### Cap decision skeleton (pure)
```typescript
const DAY = 86_400_000;
export function decide(i: { flagOn: boolean; guest: boolean; sons: boolean; completed: number;
  installAt: number; now: number; requests: number[]; errorsThisSession: boolean;
  recentReport: boolean; offline: boolean; bannerOrPaywall: boolean }) {
  const skip = (reason: string) => ({ ask: false as const, reason });
  if (!i.flagOn) return skip('flag');
  if (i.guest) return skip('guest');
  if (i.sons) return skip('sons');
  if (i.completed < 5) return skip('lessons');
  if (i.now - i.installAt < 7 * DAY) return skip('install-age');
  if (i.errorsThisSession) return skip('error');
  if (i.recentReport) return skip('report');
  if (i.offline) return skip('offline');
  if (i.bannerOrPaywall) return skip('surface');
  const live = i.requests.filter((t) => i.now - t < 365 * DAY);
  if (live.length >= 3) return skip('cap');
  if (live.length && i.now - Math.max(...live) < 90 * DAY) return skip('spacing');
  return { ask: true as const };
}
```

### Schema (append to `ealch-v2/supabase/schema.sql`)
```sql
create table if not exists public.problem_reports (
  id            uuid primary key,                       -- client report_id (idempotency)
  user_id       uuid references auth.users(id) on delete cascade,  -- null for guests
  install_id    text not null,
  category      text not null check (category in ('audio','grading','content','crash','payment','other')),
  details       text check (details is null or char_length(details) <= 1000),
  screen        text, lesson_id text, item_id text,
  contact_email text,                                   -- only set server-side when contact=true
  context       jsonb not null default '{}'::jsonb,     -- version, runtime, platform, device, fontScale, theme, errors[]
  status        text not null default 'new' check (status in ('new','seen','fixed','wont_fix')),
  created_at    timestamptz not null default now()
);
alter table public.problem_reports enable row level security;   -- NO policies: service role only
create index if not exists problem_reports_created_idx on public.problem_reports (created_at);
```
`on delete cascade` from `auth.users` means `delete-account` needs no code change for signed-in reports (its header says new user-owned tables MUST carry the cascade). Reports a guest filed before signing up remain keyed to `install_id` only; D-20's "delete-account also removes the learner's reports" is satisfied for account-linked rows. Decide whether to also delete by `install_id` (client can send it to delete-account; the function currently takes no body) [Open Question 3].

### Outbox retry classification (pure)
```typescript
export function classify(status: number | null): 'sent' | 'retry' | 'drop' {
  if (status === null) return 'retry';           // network error / offline
  if (status >= 200 && status < 300) return 'sent';
  if (status === 429 || status >= 500) return 'retry';
  return 'drop';                                  // other 4xx, never retried (D-18)
}
```
Note: `supabase.functions.invoke` returns an `error` object (`FunctionsHttpError` with `context` Response) rather than a status number; read `error.context.status`, as `llm.ts:22` does for its turn-cap refusal.

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| In-app "Enjoying X?" gate then store | Direct native request, no pre-question | Gating banned by Play guideline; FTC 16 CFR 465.7 adds risk [CITED: 10-PRE-DISCUSSION-AUDIT.md, original sources developer.android.com, developer.apple.com 5.6.1, FTC] |
| Hand-rolled star dialogs | `AppStore.requestReview(in:)` (iOS 16+) / Play `ReviewManager` | OS decides display; no result signal |

I was not able to re-fetch the Apple and Play pages in this session; the policy wording relied on is the audit's verbatim quotation of Play and the Expo source. Planner should treat policy text as [CITED via audit], re-verifiable at the canonical URLs in CONTEXT.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `Platform.constants.Model` exists on Android and is enough for "device model" | Standard Stack | If absent, need expo-device (second native module, still same binary since store-review already moves fingerprint; low cost) |
| A2 | Spending the cap only when `requestReview()` did not throw (not spending on rejection) | Pitfall 4 | D-07 says count requests; Paul may prefer counting every attempt. Needs confirmation |
| A3 | Play shows the real review UI only for Play-delivered installs; debug/sideload may show nothing | Pitfall 6 | D-32 device evidence design depends on it; verify early with an internal-testing build |
| A4 | `x-forwarded-for` is available in Supabase edge functions for per-IP limiting | Pitfall 10 | If absent, rely on install key + global ceiling |
| A5 | `pg_cron` is available on the Supabase project (extension enable required) for the 12-month cleanup | Open Q2 | If not, use a scheduled edge function or manual quarterly purge |
| A6 | Suggested numbers: guest 3/day per install, signed-in 10/day, global 200/day, "recent report" window 14 days | Pattern 4, D-06 | Discretion items; Paul may want different |
| A7 | `expo-store-review` needs no config plugin entry in `app.json` | Standard Stack | If a plugin is required the build fails fast; check `npx expo install` output and the package's `app.plugin.js` presence |
| A8 | `home`/`den` is the trail screen the lesson returns to under Concept C | Pitfall 3 | Wrong screen means the prompt fires on the wrong focus; confirm from `app/den.tsx`/`home.tsx` and the spine nav |

## Open Questions (RESOLVED)

1. **Play-delivered test build for D-32.** Which track (internal testing) will carry the Pixel 9 evidence build, and is the Play listing/internal track already live? Without it the "sheet appears" row can only be proven by logs. Recommendation: plan an early wave-0 task to confirm.
   RESOLVED: checked in the wave-1 checkpoint plan 10-15 (D-32 amended); 10-11 R-01 uses the Play internal-track build, with a sideload only as a recorded failure path (plans 10-15, 10-11, 10-12)
2. **12-month cleanup mechanism (D-20).** No `cron` usage exists in `schema.sql` (grep found none). Recommendation: `pg_cron` daily `delete from problem_reports where created_at < now() - interval '12 months'`, enabled via the dashboard; fall back to a scheduled edge function. Verify on the live project.
   RESOLVED: problem_reports_purge() is scheduled by pg_cron only if the extension exists (verified live in 10-09); fallback is the edge function's opportunistic daily purge (plans 10-03, 10-09)
3. **Guest reports and delete-account.** Cascade covers account-linked reports only. Recommendation: accept; mention in the closing note. Alternative is sending `install_id` to delete-account.
   RESOLVED: auth.ts sends install_id and delete-account removes that install's guest-era rows where user_id is null (plan 10-03)
4. **iOS Rate row.** No App Store id exists (no Apple developer account). Recommendation: render the Rate row on Android only until an iOS store URL exists.
   RESOLVED: the Rate Ealch row is Android only; the iOS row is a pre-App-Store gate row (plans 10-13, 10-12)
5. **`QuizRoundsView` quizzes.** Does a 100% there count? Confirm whether it shares `onQuizComplete` and has a score concept.
   RESOLVED: QuizRoundsView reports a percent; LessonPager converts it with percentToCorrect so only an exact 100% counts as perfect (plans 10-02, 10-07)
6. **Which screen is "the trail" for focus-triggered firing** (A8) and how to detect "paywall or PushBanner showed in the same moment" (D-06): read `useUI` banner slot state (`bannerSlotWiring.test.ts` shows a single global slot). Recommendation: decision function takes `useUI.getState().banner != null` plus a "paywall visited this session" flag.
   RESOLVED: the request fires from act.tsx and den.tsx focus via useReviewPromptOnFocus; banner via useUI.getState().banner, paywall via notePaywallShown within 10 minutes; the recent-report skip is dropped (D-06 amended) (plan 10-07)

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node / npm | build, tests | yes | project uses npm; `package.json` scripts present | none needed |
| expo-store-review | FEEDBACK-02 | not installed | 57.0.3 on registry | none (required) |
| Supabase project (`ogbothupjcivwruesgsu`) | FEEDBACK-03 | UNVERIFIED live (auto-pauses) | — | re-poll before apply (memory note) |
| Supabase CLI for deploy | edge function | not probed this session | — | dashboard deploy |
| Pixel 9 + adb | D-32 evidence | not probed (device-side) | — | blocking for phase close |
| Play-delivered build | review sheet evidence | not verified | — | log-based evidence (Pitfall 6) |
| EAS build | binary ship | exists per memory (`wonerocks-team/wonerock`) | — | — |
| NetInfo / expo-network / expo-device / Sentry | optional | not installed | — | avoid adding |

**Missing with no fallback:** none blocking research; the Pixel 9 and a Play track are execution-time prerequisites.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | node `--test` for pure logic and edge function logic; jest 30 + jest-expo 57 for component tests |
| Config file | `ealch-v2/jest.config.js` (testMatch `**/__tests__/**/*.test.tsx`); node tests glob in `package.json` `test` script |
| Quick run command | `cd ealch-v2 && node --test src/services/reviewPrompt.logic.test.ts src/services/problemReport.logic.test.ts` |
| Full suite command | `cd ealch-v2 && npm test && npm run test:component` |

(Memory: Node 24 reporter prints `ℹ tests N` not `# tests`; ealch-v2 is npm, never `pnpm test` there.)

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FEEDBACK-01 | All 13 Activity values have FR+EN names, none equal raw id | unit (node) | `node --test src/store/drillNames.test.ts` | Wave 0 |
| FEEDBACK-01 | Headline ring and drill rows exclude `exam-review`; weak list keeps it | unit | `node --test src/store/reportAccuracy.test.ts` | Wave 0 |
| FEEDBACK-01 | Ring a11y label "accuracy, N percent"; empty log state; populated log | component | `npx jest __tests__/report-phase10.test.tsx` | Wave 0 |
| FEEDBACK-01 | `/feedback` redirects; call sites use `/report` | unit (source-grep wiring test, house style like `bannerSlotWiring.test.ts`) | `node --test src/store/reportRouteWiring.test.ts` | Wave 0 |
| FEEDBACK-02 | Eligibility matrix (flag, guest, sons, <5 lessons, <7d, error, report, offline, banner) skips without spending | unit | `node --test src/services/reviewPrompt.logic.test.ts` | Wave 0 |
| FEEDBACK-02 | Cap: 3/365, 90-day spacing, window edges, clock skew | unit | same file | Wave 0 |
| FEEDBACK-02 | Fires only on `score===total` and non-sons; retry does not re-arm | unit/wiring | `node --test src/services/reviewPrompt.wiring.test.ts` | Wave 0 |
| FEEDBACK-02 | No Ealch UI near the call (grep: no component imports `requestReview` except `reviewPrompt.ts`; Settings row uses `Linking`, not `StoreReview`) | wiring test | same | Wave 0 |
| FEEDBACK-02 | `review_requested` in allowlist with stable-id-only props | unit | extend `analytics.logic.test.ts` | extend |
| FEEDBACK-03 | Payload builder: category enum, 1000 cap, drops unknown keys incl. `email`, 10 errors, truncation | unit | `node --test src/services/problemReport.logic.test.ts` | Wave 0 |
| FEEDBACK-03 | Outbox classify/enqueue/prune/validate, idempotent report_id | unit | same | Wave 0 |
| FEEDBACK-03 | Edge fn limits + validation + email-from-token only | unit | `node --test supabase/functions/report-problem/limits.test.ts` | Wave 0 |
| FEEDBACK-03 | Sheet states (idle/sending/sent/queued/4xx), pre-fill, guest hides contact | component | `npx jest __tests__/report-problem-phase10.test.tsx` | Wave 0 |
| FEEDBACK-03 | schema: RLS enabled with zero policies on problem_reports | unit (parse `schema.sql`) | `node --test src/services/problemReportSchema.test.ts` | Wave 0 |
| All | Copy rules: no em dash, no "honest" in new strings | existing | `node --test` (sons-alphabet.test.ts enforces "honest") | exists |
| All | Device rows (D-32): review at trigger, cap holds, one report per entry type in table, offline report late, Le Rapport populated/empty | manual device (Pixel 9) | adb + Supabase query + PostHog query (recipes in memory: ealch-device-deep-link, ealch-device-analytics-proof) | house rule: filled rows, not green tests |

### Sampling Rate
- **Per task commit:** the quick command for the touched logic file.
- **Per wave merge:** `npm test && npm run test:component` in `ealch-v2`, plus `npx tsc --noEmit`.
- **Phase gate:** full suites green, then device evidence rows filled before `/gsd-verify-work`.

### Wave 0 Gaps
- [ ] `src/services/reviewPrompt.logic.test.ts`, `problemReport.logic.test.ts`, `supabase/functions/report-problem/limits.test.ts`
- [ ] `__tests__/report-phase10.test.tsx`, `__tests__/report-problem-phase10.test.tsx` (reuse `__tests__/helpers` and the `settings.test.tsx` render pattern)
- [ ] wiring tests for route rename and "no UI near review call"
- [ ] Framework install: none (jest-expo, node:test present); only `npx expo install expo-store-review`

## Security Domain

### Applicable ASVS Categories
| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | yes | in-body `callerUid()` JWT verification; guests as explicit tier |
| V3 Session Management | no (reuses Supabase session) | — |
| V4 Access Control | yes | RLS enabled with no policies; service role only; no client select/update/delete |
| V5 Input Validation | yes | server-side enum/length/pattern validation, body size cap, unknown keys rejected |
| V6 Cryptography | no | TLS only; no hand-rolled crypto |
| V8 Data Protection | yes | PII minimisation (D-16/D-17), email only server-side and opt-in, 12-month retention |

### Known Threat Patterns
| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Unauthenticated write flood (Phase 3 lesson) | DoS | atomic per-subject daily counter + global ceiling; 429 |
| Spoofed install id to evade guest limit | Spoofing | global ceiling, per-IP key if available |
| Client claims someone else's email / user | Spoofing/Tampering | email and uid come only from verified token, never body |
| Oversized or hostile JSON (stored XSS in dashboard) | Tampering | size cap, length limits; dashboard renders text; escape in any future admin UI |
| PII/answer leakage via error stacks | Information disclosure | truncation, allowlisted payload keys, disclosure copy |
| Reports readable by clients | Information disclosure | RLS with zero policies; revoke default grants if needed |
| Review prompt bypassing consent | n/a (analytics `review_requested` with stable ids only, D-28 consent still open) | follow Phase 9 D-21 payload rules |

## Project Constraints (from CLAUDE.md)

Root `C:\Users\harki\CLAUDE.md` is workspace-level (the agentic workspace), with no coding rules for this repo. Applicable rules from `ealch-v2/CLAUDE.md`/`AGENTS.md` were not read in full during this research (both exist at `ealch-v2/`); the planner must read them. Binding constraints taken from project memory: npm in `ealch-v2` (pnpm only in `ealch-admin`); no em dash and no "honest" in learner-facing copy; new `.md` files need `git add -f`; always use `git commit --only -- <paths>` (shared git index with concurrent sessions); never `git checkout seed.json`; do not bump `Lesson.version` for text edits; phase close needs filled device evidence rows; check the fingerprint before any `eas update`; do not run whole-disk `find`.

## Sources

### Primary (HIGH confidence)
- Context7 `/expo/expo` (expo-store-review): `requestReview`, `isAvailableAsync`, `hasAction`, Android `ReviewManager` module, iOS `AppStore.requestReview(in:)`, resolve-does-not-mean-rated
- npm registry: `expo-store-review` versions (57.0.1-57.0.3, latest 58.0.1)
- Repository files read: `ealch-v2/package.json`, `app.json`, `src/services/{config,errors,analytics,analytics.logic,acquisition}.ts`, `supabase/schema.sql`, `supabase/functions/{tts,delete-account}/index.ts`, `tts/quota.ts`, `app/{lesson,_layout,settings}.tsx`, `src/components/LessonRich.tsx`, `jest.config.js`

### Secondary (MEDIUM confidence)
- `10-PRE-DISCUSSION-AUDIT.md` (verbatim Play guideline quote, Apple 5.6.1, FTC 16 CFR 465.7); not independently re-fetched in this session
- Project memory notes (formSheet, fingerprint, two DB planes, outbox, publish gates)

### Tertiary (LOW confidence, flagged in Assumptions Log)
- Play behaviour on non-Play installs; `x-forwarded-for` availability; `pg_cron` availability; `Platform.constants.Model`.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH, package and API verified; only one new dependency
- Architecture: HIGH for seams (read in code), MEDIUM for focus-based trigger placement (A8)
- Pitfalls: HIGH for code-derived ones (score plumbing, retry flag, lessonMissions wipe), MEDIUM for platform quotas
- Policy wording: MEDIUM (cited via audit, not re-fetched)

**Research date:** 2026-10-01
**Valid until:** 2026-10-31 (Expo SDK 58 already shipped; stay on 57.x line to match installed SDK)
