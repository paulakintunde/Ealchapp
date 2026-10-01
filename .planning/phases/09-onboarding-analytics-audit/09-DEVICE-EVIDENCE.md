# Phase 9 device and capture evidence

Status: **partial Android debug proof; release gate pending**. On 2026-09-30, local and EAS preview PostHog key/host/test-flag values were compared without printing the key. The preview host was missing and was set to the valid US ingest URL. A new Android preview build was submitted; its last confirmed status was queued. Three Pixel debug events received accepted HTTP capture responses, and a read-only PostHog API query confirmed their exact IDs and timestamps in test project `637014`. The same query confirmed `first_open` and `install_attribution` for that Pixel install, though their client HTTP responses were not observed. The other critical events remain unverified. This is the execution sheet for Plan 09-06 Task 2; blank results do not count as passes. Record build ID, device model/OS, account kind, event ID, accepted/rejected HTTP status, and outcome. Do not record email, credentials, answers, transcripts, raw referrer URLs, payment details, or the PostHog key.

## Prerequisites (Plan 06 Task 0)

Fill before any device scenario. Status is Ready, Blocked (owner and next step) or Deferred (decision ID).

| Prerequisite | Needed for | Status |
|---|---|---|
| PostHog test project `637014` and key in the build (key never printed) | Every accepted-capture row | Ready for local debug; EAS preview build last seen queued |
| Read-scoped PostHog token | Event ID lookup | Ready (ignored local `.env`) |
| Write-scoped PostHog token, or Paul in the UI | Saving the activation funnel (D-29) | Blocked: owner Paul |
| Android build with `EXPO_PUBLIC_ANALYTICS_TEST_BUILD=true` | `[analytics-capture]` diagnostics | Ready (debug); preview pending |
| Approval to clear app data on the Pixel 6, or an alternative (uninstall and reinstall, or the Pixel 9) | Fresh-install `first_open` and onboarding | Blocked: owner Paul |
| Supabase test email inbox | Verified email signup | Pending check |
| Build under test made from a commit that includes Plan 08 | Every device row (outbox, initial_result, attribution dedupe) | Blocked: Plan 08 not yet committed; preview `7c519ae0` predates it |
| Play internal-track upload and a licence tester (purchase only) | Android sandbox purchase; Google Play Billing needs a Play-installed build even though campaign proof is deferred (D-26) | Blocked: owner Paul (Play Console upload) |
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

## Onboarding and placement, on each platform

For every row, record **Pass/Fail**, screen or route, expected versus observed result, and relevant accepted event IDs. Use fresh installs/accounts where the event is a one-time milestone.

| Scenario | Android | iPhone | Expected event or behavior |
|---|---|---|---|
| First launch, guest wizard, Back/edit, force-stop/resume | Pending | Pending | One `first_open`, `onboarding_started`, each step once, preserved choices |
| Reminders skip, mic denial/failure and skip | Pending | Pending | Clear way forward; `onboarding_mic_failed` category where applicable |
| Email signup, service failure with Retry/Continue as guest, verified signup | Pending | Pending | `signup_started` on each tap; completion only after verified session |
| Guest completion and existing-account sign-in | Pending | Pending | Completion only from first-run wizard; existing sign-in leaves guest journey separate |
| Placement offer dismissal | Pending | Pending | One voluntary `placement_skipped`; lesson remains available |
| Placement all-correct and all-wrong result fixtures | Pending | Pending | Expected level and one `placement_result` per attempt |
| Placement confirmed exit; force-stop and resume | Pending | Pending | `placement_abandoned` once on exit; same attempt and answers on resume |
| Empty/unavailable questions, Retry/Continue | Pending | Pending | `placement_load_failed`, distinct from voluntary skip; no dead end |
| Retake placement | Pending | Pending | First result retained; later attempt/result separate |
| Unlocked lesson, locked A2 paywall, quiz/no-quiz completion | A1 content open and locked A2 gate/paywall observed; completion pending | Pending | First lesson only when content opens; completion after progress save |
| Exam with ungraded open answer; new-day practice | Pending | Pending | `exam_submitted` outcome counts; one `streak_updated` per practiced local day |

Check focused headings, readable recovery text, and absence of route crashes or dead ends in each run.

## Acquisition and purchase

| Check | Evidence to record | Status |
|---|---|---|
| Android attribution status | One device-observed `install_attribution` status with event ID and accepted status. Pixel debug `lookup_failed` ID found in PostHog; client diagnostic pending | Partial |
| Android Play internal-test install via encoded campaign link | Parsed `source`/`medium`/`campaign` with accepted capture | Deferred to launch (D-26) |
| Offline outbox delivery | Airplane mode, trigger a milestone, see it queued with the flow continuing; reconnect and foreground; same event ID accepted | Pending |
| iPhone app attribution | `install_attribution` with `unavailable`, event ID and accepted status | Blocked: G-09-12 |
| App Store Connect campaign report | Aggregate campaign view and date; do not infer a per-person iPhone source | Pending |
| D1 return | Controlled next-local-day boundary test plus real device foreground detection and accepted `d1_return` | Pending |
| Android store sandbox | Test product/entitlement outcome and accepted `purchase_started`/terminal event with one attempt ID; no real charge | Pending. The connected Pixel 9 displays a Stripe-managed Première Monthly plan, and no purchase/restore event was found in the PostHog test project; this is not a Google Play sandbox transaction. |
| iPhone store sandbox | Test product/entitlement outcome and accepted `purchase_started`/terminal event with one attempt ID; no real charge | Pending |

## Verdict

QA-01: **Pending**. QA-02: **Pending**. Phase 9 remains incomplete until all critical rows pass. Add any failure with reproducible device/build/event details to `09-GAPS.md`, repair it, then retest the affected row.
