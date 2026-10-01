# Phase 9 device and capture evidence

Status: **Android preview walkthrough in progress (2026-10-01); release gate pending**. On 2026-09-30, local and EAS preview PostHog key/host/test-flag values were compared without printing the key. The preview host was missing and was set to the valid US ingest URL. A new Android preview build was submitted; its last confirmed status was queued. Three Pixel debug events received accepted HTTP capture responses, and a read-only PostHog API query confirmed their exact IDs and timestamps in test project `637014`. The same query confirmed `first_open` and `install_attribution` for that Pixel install, though their client HTTP responses were not observed. The other critical events remain unverified. This is the execution sheet for Plan 09-06 Task 2; blank results do not count as passes. Record build ID, device model/OS, account kind, event ID, accepted/rejected HTTP status, and outcome. Do not record email, credentials, answers, transcripts, raw referrer URLs, payment details, or the PostHog key.

## Prerequisites (Plan 06 Task 0)

Fill before any device scenario. Status is Ready, Blocked (owner and next step) or Deferred (decision ID).

| Prerequisite | Needed for | Status |
|---|---|---|
| PostHog test project `637014` and key in the build (key never printed) | Every accepted-capture row | Ready for local debug; EAS preview build last seen queued |
| Read-scoped PostHog token | Event ID lookup | Ready (ignored local `.env`) |
| Write-scoped PostHog token, or Paul in the UI | Saving the activation funnel (D-29) | Blocked: owner Paul |
| Android build with `EXPO_PUBLIC_ANALYTICS_TEST_BUILD=true` | `[analytics-capture]` diagnostics | Ready (debug); preview pending |
| Approval to clear app data on the Pixel 6, or an alternative (uninstall and reinstall, or the Pixel 9) | Fresh-install `first_open` and onboarding | Approved for the Pixel 6 on 2026-09-30; waiting for it to be connected. Paul chose not to wipe the Pixel 9. |
| Supabase test email inbox | Verified email signup | Pending check |
| Build under test made from a commit that includes Plan 08 | Every device row (outbox, initial_result, attribution dedupe) | In progress: Plan 08 committed as `2235332`; preview `07271469-38d7-4fbb-bbf1-0a30586d2d9a` building from `085b98d`, which contains it. The earlier preview `7c519ae0` **errored**, not queued: its local fingerprint was computed from another directory (config-plugin paths began `../../../../../Downloads/...`) and did not match EAS. From the main checkout the fingerprint is `514c4cb` with no such paths. |
| Play internal-track upload and a licence tester (purchase only) | Android sandbox purchase; Google Play Billing needs a Play-installed build even though campaign proof is deferred (D-26) | Blocked: owner Paul. Production AAB `75017d7f-81cf-4ab9-9b84-9819f4dadbfb` (versionCode 2) building. Nothing has ever been uploaded to Play and `play-service-account.json` does not exist, so the first upload is manual in Play Console. Also needed: Première monthly/yearly subscriptions in Play Console, the same product IDs on the Adapty `premiere` placement with Play credentials in Adapty, and a licence tester account. |
| Play internal track and campaign link | Campaign attribution | Deferred (D-26, launch checklist) |
| Apple Developer Program, XR registered with EAS, App Store sandbox tester | All iPhone rows | Blocked: G-09-12 |

## iPhone readiness

The available iPhone is an XR. Expo SDK 57 requires iOS 16.4 or later and the XR runs up to iOS 18, so it is supported once updated. Routes:

- **Apple Developer Program, individual.** No D-U-N-S number needed, annual fee. Register the XR with `eas device:create`, then build `eas build --profile preview --platform ios`; works from Windows. Covers every iPhone row including the sandbox purchase. The App Store seller name becomes Paul's personal name; ask Apple whether a later move to an organization membership is possible before relying on it.
- **Apple Developer Program, organization.** Same as above once the D-U-N-S number arrives.
- **Free Apple ID with Xcode on a physical Mac.** Installs a development build on the XR for 7 days at a time. Needs a Mac connected to the phone. Push notifications and the App Store sandbox purchase do not work this way, so it covers onboarding, placement, lessons, exam and streak rows only.
- **Not usable:** Expo Go (the app has native modules such as Adapty and speech recognition), and the iOS simulator (needs a Mac and is not a device).

## Capture setup

1. Use a disposable PostHog project. The local `ealch-v2/.env` configures a Metro development run. On 2026-09-30 the EAS **preview** environment was verified to have the matching PostHog key, valid host, and `EXPO_PUBLIC_ANALYTICS_TEST_BUILD=true`. Android preview build `7c519ae0-62ad-4bf7-9a0c-7efa7365f1a1` was submitted from clean commit `651b1acd8b28eb57424cedf0284c80c7fe84c29f`; it was still `IN_QUEUE` at 18:51 UTC. Do not paste the key into this file or commit `.env`.
2. In device logs, filter `[analytics-capture]`. Each line gives event name, event ID, status, and accepted boolean. Confirm the accepted event ID appears in the disposable project as well. A local `track()` call or a fake HTTP test alone does not prove ingestion.
3. For each critical event in `09-EVENT-AUDIT.md`, record its ID and accepted status. Exercise one offline or rejected capture: the learner flow must continue, and that missing event must be logged as a QA failure.

| Platform | Build ID | Device / OS | Account kind | Capture project / time | Result |
|---|---|---|---|---|---|
| Android | Rebuilt debug APK `1.0.0` (`versionCode=1`), installed 2026-09-30 11:13 local; Metro on `8083`. New EAS preview `7c519ae0-62ad-4bf7-9a0c-7efa7365f1a1` last confirmed queued | Pixel 6 / Android 17 (API 37), ADB connected | Existing local state; fresh guest/email pending | Five same-install events verified by PostHog API; three have HTTP 200/`accepted=true` client diagnostics. See IDs and times below. | Levels, A2 Den, locked-act gate, paywall, and A1 first lesson content rendered; no full walkthrough claimed |
| Android | Installed `app.ealch.mobile` `1.0.0` (`versionCode=1`), installer reported as shell/sideload; build provenance not yet confirmed | Pixel 9, currently connected | Settings displays `Première — Monthly`, managed by Stripe | No purchase or restore events in test project `637014` since 2026-09-28 | B2 Refresher Course list visible. Premium access is present, but this is a separate device and does not satisfy a Play sandbox purchase or Play attribution check. |
| iPhone | Preview not submitted: Apple Developer credentials and registered test device unavailable | User has an iPhone; model/OS pending | guest and email pending | Pending | User cannot register the device yet; walkthrough pending |

### Android debug capture observed 2026-09-30

| Event | Event ID | PostHog UTC timestamp | Client HTTP / accepted | Test-project API |
|---|---|---|---|---|
| `first_open` | `39824bde-2fae-5f37-a677-99f89d08a430` | 2026-09-30 18:41:49 | Not observed | Exact ID found; same install |
| `install_attribution` | `0ed7e387-7306-4f86-af96-812049b5ce18` | 2026-09-30 18:41:50 | Not observed | Exact ID found; same install; `lookup_failed` |
| `gate_blocked` | `e3670eaa-024c-469e-a59c-a1a9a300cbb9` | 2026-09-30 18:46:00 | 200 / true | Exact ID found; same install |
| `paywall_viewed` | `27c4deaf-0fce-46f8-8791-33900a488ccb` | 2026-09-30 18:46:00 | 200 / true | Exact ID found; same install |
| `first_lesson_started` | `7153740f-df71-51fe-aaa0-0877f3af7083` | 2026-09-30 18:57:18 | 200 / true | Exact ID found; same install |

The five events above share both the install and learner identifiers in PostHog; the identifiers themselves are not recorded here. `first_open` occurred at 11:41 local (PDT), after the debug APK update, and `install_attribution` followed about 0.8 seconds later with `lookup_failed`. Because the APK update preserved data, this does not establish a fresh-install test. A separate install had a `first_open`/`install_attribution` pair at 06:47 UTC; it was excluded from this Pixel run. No Play-delivered campaign attribution is established by the sideloaded APK.

For read-only API verification, a PostHog personal token is present in ignored local `.env` files and the two local values match. The user granted read access and the documented `query:read` endpoint returned HTTP 200 for project `637014`. A project-list request returned HTTP 403 because it uses a separate project-read scope; it was not needed for event verification. Keep the personal token out of app builds, logs, and this evidence file. A same-install inventory of the 24 audited/gate event names found only the five rows above for this Pixel install on 2026-09-30; it does not prove that unexercised paths fail to emit events.

A property-name check of those five stored events found no email, password, answer, transcript, raw-referrer, payment-detail, or speech-text fields. Property values were not displayed. This narrow check does not cover the remaining unexercised event types.

The Android debug build was installed with app data preserved. Fresh-install `first_open` and onboarding cannot be inferred from this run. The user has not yet approved clearing local app data for a fresh-install check. A sideloaded APK cannot prove Play-delivered attribution. On 2026-09-30 only Metro's port `8083` was listening, no `8082` listener or competing Gradle/Expo build process was present, and ADB reverse listed only `tcp:8083`. No signed-in PostHog browser view was available to the agent; the user inspected the test project instead.

## Android preview walkthrough 2026-10-01

Build: EAS preview `07271469-38d7-4fbb-bbf1-0a30586d2d9a` (commit `085b98d`, contains Plan 08). Device: Pixel 6, Android 17. The debug build was uninstalled first (approved), so install A (`00a63fc1`) is a true fresh install; install B (`4b429efa`) followed `pm clear` on the same phone. Evidence is the PostHog query API on test project `637014` by event ID; the client `[analytics-capture]` log was read until the logcat stream stopped, after which PostHog is the record. Ingestion lag was one to two minutes. Account kind: guest for both. Not recorded: email, password, answers, transcripts, referrer strings.

Unrelated findings logged under D-30: an IPA string offered as a meaning option in the quick check (G-09-16), an em dash in the lesson tutorial copy (G-09-17), the placement offer card still showing after a completed check (G-09-18). Android's "Allow wireless debugging on this network?" dialog appeared when Wi-Fi returned and swallowed a tap; it is a test-environment artefact.

## Onboarding and placement, on each platform

For every row, record **Pass/Fail**, screen or route, expected versus observed result, and relevant accepted event IDs. Use fresh installs/accounts where the event is a one-time milestone.

| Scenario | Android | iPhone | Expected event or behavior |
|---|---|---|---|
| First launch, guest wizard, Back/edit, force-stop/resume | **Pass** (install A `00a63fc1`, install B `4b429efa`): one `first_open`, one `onboarding_started`, steps 1 to 10 once each; Back to step 4 and a changed answer added no second step-4 event; force-stop on step 5 reopened step 5 with choices kept and no repeat `onboarding_started`. Ordering defect G-09-14 found here | Pending | One `first_open`, `onboarding_started`, each step once, preserved choices |
| Reminders skip, mic denial/failure and skip | Reminders skip **Pass**: no permission dialog, `POST_NOTIFICATIONS` still not granted. Mic no-speech **Pass**: retry and skip shown, `onboarding_mic_failed` `no_speech` (`bc9809a6`). Mic **denied** branch not exercised: `RECORD_AUDIO` showed granted one-time with no dialog observed | Pending | Clear way forward; `onboarding_mic_failed` category where applicable |
| Email signup, service failure with Retry/Continue as guest, verified signup | Service failure (offline) **Pass**: error text, Retry, guest route, both fields kept; `signup_started` (`1159a0db`) queued and delivered after reconnect, no `signup_completed`. Verified signup **Pending** (needs a test inbox) | Pending | `signup_started` on each tap; completion only after verified session |
| Guest completion and existing-account sign-in | Guest completion **Pass**: `onboarding_completed` `52cc8b43` (A), `40963254` (B). Existing-account sign-in **Pending** | Pending | Completion only from first-run wizard; existing sign-in leaves guest journey separate |
| Placement offer dismissal | **Pass** (B): `placement_skipped` `2911eb64` (`offer`); a later check sent `placement_started` `source: later` and `placement_result` `a43bc243` with `initial_result: false`. G-09-07 fix proven on device | Pending | One voluntary `placement_skipped`; lesson remains available |
| Placement all-correct and all-wrong result fixtures | Partial: real results A0 6/9 (`dd28046e`, `initial_result: true`) and A0 3/9; both consistent with the per-band rule (A1 items must pass). Fixed all-correct/all-wrong fixtures not run | Pending | Expected level and one `placement_result` per attempt |
| Placement confirmed exit; force-stop and resume | **Pass**: force-stop on question 3 reopened question 3 with "Quick check resumed"; confirmed End on the retake sent one `placement_abandoned` (`13357ddc`, attempt `4e84adc1`) and returned to the Den | Pending | `placement_abandoned` once on exit; same attempt and answers on resume |
| Empty/unavailable questions, Retry/Continue | Automated only: the device corpus has questions; needs a fixture build | Pending | `placement_load_failed`, distinct from voluntary skip; no dead end |
| Retake placement | **Pass**: retake sent `placement_started` `cc7ee539` with `source: later`; the first result stayed | Pending | First result retained; later attempt/result separate |
| Unlocked lesson, locked A2 paywall, quiz/no-quiz completion | `first_lesson_started` **Pass** (`280f1da6`, `sons.01.l1`): sent when the pager mounted after skipping the first-run tutorial; flashcards and the tutorial sent nothing. Locked A2 gate seen on the earlier debug build. Completion **Pending** | Pending | First lesson only when content opens; completion after progress save |
| Exam with ungraded open answer; new-day practice | `streak_updated` **Pass** (`b2576293`, days 1, from the placement session). Exam **Pending** | Pending | `exam_submitted` outcome counts; one `streak_updated` per practiced local day |

Check focused headings, readable recovery text, and absence of route crashes or dead ends in each run.

## Acquisition and purchase

| Check | Evidence to record | Status |
|---|---|---|
| Android attribution status | Preview installs A and B each sent one accepted `install_attribution`, but as `campaign` with `google-play`/`organic`: Play's default for an install with no campaign. Defect G-09-15, fixed in code (now `no_campaign`); needs a rebuild to observe | Fix pending rebuild |
| Android Play internal-test install via encoded campaign link | Parsed `source`/`medium`/`campaign` with accepted capture | Deferred to launch (D-26) |
| Offline outbox delivery | **Pass** (A): with airplane mode, Wi-Fi and data off, 13 events from the signup attempt through step 10 were recorded `offline` while the wizard carried on; after reconnecting, all arrived in PostHog once, in order, with their original timestamps, followed by `onboarding_completed` | Pass |
| iPhone app attribution | `install_attribution` with `unavailable`, event ID and accepted status | Blocked: G-09-12 |
| App Store Connect campaign report | Aggregate campaign view and date; do not infer a per-person iPhone source | Pending |
| D1 return | Unit tests pass; device **Pass**: `d1_return` `37545f10` on foreground at 01:46 PDT on Oct 1 after first open at 21:46 PDT on Sep 30 (install A) | Pass |
| Android store sandbox | Test product/entitlement outcome and accepted `purchase_started`/terminal event with one attempt ID; no real charge | Pending. The connected Pixel 9 displays a Stripe-managed Première Monthly plan, and no purchase/restore event was found in the PostHog test project; this is not a Google Play sandbox transaction. |
| iPhone store sandbox | Test product/entitlement outcome and accepted `purchase_started`/terminal event with one attempt ID; no real charge | Pending |

## Verdict

QA-01: **Pending**. QA-02: **Pending**. Phase 9 remains incomplete until all critical rows pass. Add any failure with reproducible device/build/event details to `09-GAPS.md`, repair it, then retest the affected row.
