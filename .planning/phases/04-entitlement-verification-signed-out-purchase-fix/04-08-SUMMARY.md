---
phase: 04-entitlement-verification-signed-out-purchase-fix
plan: 08
subsystem: payments
tags: [device-verification, adapty, purchases, offline, checkpoint]

# Dependency graph
requires:
  - phase: 04-03
    provides: entitlement_downgraded firing from setEntitlement only (D-08)
  - phase: 04-04
    provides: shared restoreOutcome() consumed by both Settings and the paywall
provides:
  - "Real-device verification record for PAY-01/PAY-03's device-observable success criteria — partial: restore-copy parity CONFIRMED, purchase-dependent scenarios NOT RUN with a precise, reproducible blocker"
  - "A genuine technical finding: Adapty's native SDK keeps its own local profile cache, independent of this app's AsyncStorage layer, which defeats cache-injection as a way to simulate a premium user for offline testing"
affects: [phase-05-paywall-expansion, any future device-verification plan touching purchases]

# Tech tracking
tech-stack:
  added: []
  patterns: []

key-files:
  created: []
  modified: []

key-decisions:
  - "Did not fabricate a premium entitlement via AsyncStorage cache injection once it was proven not to work (Adapty's own SDK-level profile cache overwrites the injected value via apply()->setEntitlement() on every launch, independent of true network state). Recorded as a genuine finding rather than silently abandoning the attempt."
  - "Confirmed A1 (Adapty identify()->getProfile() freshness) and the signed-out-purchase-merge remain UNRESOLVED/NOT RUN — both require a real completed purchase, which requires a Play-installed (even internal-testing-track) build. Sideloading via adb install cannot exercise real Play Billing purchase/restore flows for this account, even though purchasesStatus() reads 'ready' and price fetch succeeds."

requirements-completed: []  # PAY-01's restore-copy-parity is confirmed; PAY-01's restored/none branches and PAY-03's signed-out-purchase-merge and offline-cold-start-of-a-premium-user remain unverified — see NOT RUN items below.

# Metrics
duration: ~90min (device setup, dev-build install, Metro, restore verification, offline-cache-injection investigation)
completed: 2026-09-20
---

# Phase 04 Plan 08: Device Verification Summary

**Real Pixel 9 device testing found: restore-copy parity between Settings and the paywall is confirmed (04-04's shared function works correctly); but every restore attempt fails with `T.restoreFail` regardless of purchase history, because this sideloaded debug build cannot reach real Play Billing; and the premium-user scenarios (offline cold start, signed-out-purchase-merge) could not be tested at all — not because of a code defect, but because there is no way to get this device into a genuine "premium" state without a real completed purchase, and AsyncStorage cache-injection was tried and proven not to substitute for one.**

## Task 1: Build/Device Classification

Device: Pixel 9 (`tokay`), connected via USB, `adb devices` shows `device` state (authorized).

- **Installed build (before):** a release build (`devlauncher` count 0, `flags=0x0`) — signed with a different key than the local debug keystore (`INSTALL_FAILED_UPDATE_INCOMPATIBLE` on `adb install -r`). Uninstalled (wiped local app data — streak, settings, cache, session) and installed the local debug APK (`android/app/build/outputs/apk/debug/app-debug.apk`, built 2026-07-31).
- **After:** `devlauncher` count 1, `DEBUGGABLE` confirmed.
- Metro started per `DEVICE-PROOF-RUNBOOK.md` (direct `node` in a real console window, port 8082), `adb reverse tcp:8082 tcp:8082` (`UsbFfs`), pin-launched the dev client. `mCurrentFocus` confirmed `app.ealch.mobile/.MainActivity` (never `DevLauncherErrorActivity`). First bundle: 2367 modules, ~55s. Client JS logs confirmed execution (`[tts] 19 usable fr-FR voice(s)...`).
- `EXPO_PUBLIC_ADAPTY_KEY`: **set**. `EXPO_PUBLIC_POSTHOG_KEY`: **not set** (the `entitlement_downgraded`-absence claim below is UI-only evidence, not PostHog-confirmed).
- `purchasesStatus()` classification: **`'ready'`** — the SDK activated without error and the paywall renders real store prices (CA$99 annual / CA$12.99 monthly), so this is not the `'unavailable'`/`'no-key'` case the plan anticipated. However, every `restorePurchases()` call fails at the actual store layer (see Task 2A) — a sideloaded (non-Play-installed) app can query product/pricing metadata but Google Play Billing's purchase/restore machinery itself is not reachable this way, even with a Google account signed in and general internet connectivity confirmed working. This is a **narrower, more specific** blocker than the plan's anticipated "status is unavailable" case, but has the identical practical consequence: the `restored`/`none` restore branches and the whole purchase-dependent test surface are **not runnable** on this build.
- **Runnable:** the restore-copy-parity check (Task 2A/B) and the `failed` branch. **Not runnable:** `restored`/`none` branches, Task 2C (offline cold start of a premium user), Task 3 (signed-out-purchase-merge) — all need a Play-installed internal-testing build with a licensed tester account.

## Task 2: Restore Feedback + Offline Cold Start

**A. Restore on Settings** (`ealch://settings`):

Tapped Restore twice (reproducible). Result both times:
> "Restore purchases — Could not reach the store. Try again"

This is `T.restoreFail` verbatim (`src/i18n/strings.ts:1085`), returned **without** the device being in airplane mode — i.e., the `failed` outcome is the *only* reachable outcome on this build, for the reason in Task 1. **FAIL relative to the plan's literal expectation** (a `'ready'` build with no purchase history "should" show `T.restoreNone`, not `T.restoreFail`) — but this is not a defect in 04-04's wiring; `restoreOutcome()` is correctly mapping whatever `restorePurchases()` actually returns, and what it actually returns is a store-unreachable failure caused by the sideload, not by app logic.

**B. Restore on the paywall** (`ealch://paywall`):

Tapped the "Restore purchases" text link at the bottom. Result:
> "Could not reach the store. Try again" — **identical** to Settings.

**PASS** — this is exactly what 04-04 was meant to guarantee: the two surfaces cannot drift apart, and they didn't, even under this off-nominal store state.

**A3 (airplane mode variant):** not separately run — the store-unreachable failure already reproduces without airplane mode, so an airplane-mode-specific repeat would exercise the identical code path (`restorePurchases()` rejecting) for a different underlying reason (no network at all, vs. no Play Billing entitlement resolution) and was judged not to add information.

**`restored` / `none` branches:** NOT RUN. Blocker: needs a Play-installed (internal-testing track is sufficient) build, with the test Google account added as a licensed tester, and a completed sandbox purchase to reach the `restored` case (or a licensed-but-never-purchased account for `none`).

**C. Offline cold start of a premium user (ROADMAP Success Criterion 3):** **NOT RUN.**

Attempted to reach this state without a real purchase, using AsyncStorage cache injection:
1. Force-stopped the app, pulled `RKStorage` (the AsyncStorage-backing SQLite DB) via `run-as`, wrote a premium `Entitlement` JSON (`plan: "annual"`, `features: [levels.all, coach.unlimited, roleplay.unlimited]`, future `expiry`) into the `ealch-entitlement:anon` key, pushed it back.
2. Relaunched with live network still on (to verify the injection basics first) — confirmed it **did not stick**: Settings showed "Essential — Free" again within seconds. The real Adapty profile (free, no purchase) reconciled over the network and `apply()` → `setEntitlement()` overwrote the cache, exactly per `useEntitlement.ts`'s own documented authority chain.
3. Re-injected, this time disabling WiFi and mobile data *before* relaunching (`adb shell cmd wifi set-wifi-enabled disabled`, `adb shell cmd phone data disable` — the `AIRPLANE_MODE` broadcast itself is blocked on this Android build with `SecurityException: Permission Denial`, a shell-permission restriction, not an app issue). Verified via `dumpsys connectivity` that no general-internet-capable network remained (only a voice-only IMS link, which apps cannot use for data).
4. Cold-launched fully offline. **The cache injection still did not stick** — Settings showed "Essential — Free" immediately, even with confirmed zero network connectivity.

**Finding:** Adapty's native SDK keeps its **own** local profile cache, separate from this app's `ealch-entitlement:*` AsyncStorage key. `initPurchases()`/`refreshEntitlement()` calls `A.getProfile()`, which appears to return Adapty's last-known local profile near-instantly (not gated on network reachability), and `apply()` writes that (free) profile straight over whatever was in AsyncStorage — every time, online or offline. This is **not a bug in this phase's code**: it is the intended authority chain (Adapty is the runtime authority; the AsyncStorage cache is explicitly documented as secondary), and the plan's own C5-C9 steps already required a *real* prior purchase for exactly this reason. It does mean AsyncStorage-injection is not a viable shortcut for this test on this codebase: nothing short of a real completed purchase can be observed as "premium" surviving an offline cold start.

Device network state was restored (WiFi + mobile data re-enabled) and the original `RKStorage` snapshot was restored afterward, so the device is back to its pre-test state (still the debug build, still with wiped data from the earlier release→debug swap).

## Task 3: Signed-Out Purchase Merge (D-02 / Assumption A1)

**NOT RUN.** Per Task 1's finding, this build cannot complete a real purchase at all — the same blocker that made Task 2's `restored`/`none` branches and Task 2C unrunnable applies here with no workaround available (unlike 2C, there is no cache-injection angle to even attempt, since this scenario is specifically about a *real* Adapty `identify()`/`getProfile()` sequence following a *real* purchase).

**RESEARCH.md assumption A1 (Adapty `identify()` → `getProfile()` freshness): UNRESOLVED** — not run. Requires the build named above.

## Summary Table

| Item | Result | Note |
|---|---|---|
| A1 — Restore on Settings | **FAIL** (relative to plan's literal expectation) | `T.restoreFail`, not `T.restoreNone` — sideload/Play-Billing limitation, not an app defect |
| A2 — Restore on Settings, active sub | NOT RUN | needs Play-installed build + real purchase |
| A3 — Restore on Settings, airplane mode | NOT RUN (subsumed) | A1 already reproduces the `failed` outcome without airplane mode |
| B4 — Restore on paywall matches Settings | **PASS** | identical copy, confirms 04-04's shared function |
| C5-C9 — Offline cold start, premium user | **NOT RUN** | no way to reach a genuine premium state on this build; cache-injection attempted and found not to work (Adapty SDK's own cache overrides it) |
| Task 3 steps 1-9 — signed-out-purchase merge | **NOT RUN** | same blocker as C5-C9, no workaround available |
| Assumption A1 resolution | **UNRESOLVED** | not run |

## What Would Unblock the Remaining Items

A Play Console internal-testing track for `app.ealch.mobile`, with the test Google account(s) added as license testers, and the app uploaded to that track (not sideloaded). Once installed from that track:
- Task 2's `restored`/`none` branches become reachable (make/don't make a sandbox purchase).
- Task 2C becomes reachable (complete a real purchase, force-stop, go offline, cold-launch).
- Task 3 becomes reachable (buy signed out, sign in, observe).

This is genuinely new setup work (Play Console configuration), not a code change, and not something this session attempted given it touches production distribution channels.

## Self-Check: PASSED (as a verification record — see NOT RUN items above for what remains unverified)

- CONFIRMED: dev build installed and running from Metro on a real device (`mCurrentFocus` = `MainActivity`, bundle served, client logs present)
- CONFIRMED: Restore on Settings and the paywall return byte-identical text for the same store state
- CONFIRMED: the AsyncStorage cache-injection technique does not produce an observable premium state, with the mechanism identified (Adapty's own SDK-level profile cache)
- CONFIRMED: device network state and AsyncStorage restored to pre-test condition
- No key material, store credential, or Adapty/Supabase secret appears above

---
*Phase: 04-entitlement-verification-signed-out-purchase-fix*
*Completed: 2026-09-20 — partial verification; purchase-dependent items NOT RUN pending Play Console setup*
