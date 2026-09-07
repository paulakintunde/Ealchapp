# Ealch v2 — Comprehensive Audit

This audit evaluates the codebase (`ealch-v2`, `ealch-admin`, and backend services), highlighting what is complete, what needs fixing, and the roadmap for remaining work. This is based on an independent review of the application state compared against its documented goals.

---

## 1. Major Issues & Missing Features (Priority: High)

### 1.1 Unused Settings Row (Restore Purchases)
**Location:** `ealch-v2/app/settings.tsx`
**Issue:** The "Restore purchases" button code exists but is commented out/non-functional. Since there is currently no active payment gateway (RevenueCat/Stripe) linked in the package, the code is dead weight.
**Fix Required:** Complete integration of `RevenueCat`/`Stripe` (or `Paystack`).

### 1.2 Sign-out Leaks Local Progress Data
**Location:** `ealch-v2/src/store/useStore.ts`
**Issue:** `signOut()` clears user identity but does not clear `useProgress.getState().sessions` or `attempts`. The next account signing into the device will inherit the previous user's streak and review queue.
**Fix Required:** Call `useProgress.getState().eraseProgress()` during `signOut()`.

### 1.3 `player.trackLogged` Double-Log Bug
**Location:** `ealch-v2/app/player.tsx`
**Issue:** The state `logged` prevents double-logging a session when finishing a track. However, it is never reset if a user scrubs back and replays the same track in the same view session.
**Fix Required:** Reset `logged` to `false` when track progress goes below 100%.

### 1.4 Missing Packs (Theme/Level groupings)
**Location:** `ealch-v2/src/content/seed.json`
**Issue:** The schema defines a `Pack` (a theme × level bundle), but `seed.json` currently has `0` packs. This means thematic vocabulary buckets (e.g. Flashcards by theme) won't have real groupings.

---

## 2. Minor Issues & Cleanup (Priority: Medium)

### 2.1 Dead `items` Field in SessionLog
**Location:** `ealch-v2/src/store/progress.logic.ts` (`SessionEntry`)
**Issue:** Drills still pass an `items` count to `logSession()`, but this property is never read by any selector. The new `attempts` log has completely superseded its function for Spaced Repetition (SRS) and weakness tracking.
**Fix Required:** Remove `items` from `SessionEntry` and all `logSession` call sites.

### 2.2 Inconsistent Freeze Copy
**Location:** `ealch-v2/src/i18n/strings.ts`, `ealch-v2/src/store/progress.logic.ts`
**Issue:** The UI copy promises "1 freeze per week" (`T.freezeIdle`), but the engine (`streak()`) only grants 1 static freeze total per unbroken run, refilling only when the streak drops to zero.
**Fix Required:** Either update the copy to say "1 freeze available" or implement a rolling ISO week grant in the streak math.

### 2.3 Profile Memoization
**Location:** `ealch-v2/app/profile.tsx`
**Issue:** The week calendar dots loop evaluates `minutesToday()` repeatedly inside the render body instead of using a `useMemo` block, causing expensive array reconstructions on large session logs.
**Fix Required:** Wrap the calendar math in `useMemo`.



---

## 3. Architecture & Infrastructure Verification

- **STT (Speech-to-Text):** The app successfully relies on native on-device recognition (`expo-speech-recognition`) as its primary driver, correctly falling back to a self-assessment UI when unavailable. It does not fake scores.
- **Progress & SRS:** The architecture strictly splits pure math (`progress.logic.ts`) from React Native persistence (`useProgress.ts`). The `AttemptLog` correctly drives real Smart Review metrics instead of hardcoded approximations.
- **Ops Console (`ealch-admin`):** Fully operational Next.js/Drizzle dashboard. Implements correct RBAC roles, audit logs, dual DB targets (PGlite for dev / Node-postgres for prod), and destructive guards (`assertDestructiveAllowed`).
- **Supabase Functions:** The expected edge functions (`coach`, `tts`, `grade-exam`, `delete-account`, `adapty-webhook`) are present in `supabase/functions/`.

---

## 4. Content State

The `seed.json` file is massive (~4.8MB) and well-structured, containing:
- **Items:** 6914 (Words/Phrases with rich phonetic and metadata fields)
- **Lessons:** 13
- **Units:** 75
- **Scenarios:** 60
- **Playlists:** Managed locally in `content/playlists.ts` (4 curated sets)
- **Exam Banks:** Managed via local data structures or in DB depending on rollout
- **Packs:** 0

**Gaps:** Packs remain to be generated to group vocab items into themes. Exam prep tasks and Playlists have already received foundational implementations.

---

## 5. Roadmap of Actionable Tasks

### Phase 1: Engine Accuracy & Cleanup (Immediate)
1. Hook `signOut` to `eraseProgress()` to fix local data leak.
2. Fix the `trackLogged` variable reset logic in `player.tsx`.
3. Delete the dead `items` field from `SessionEntry`.
4. Fix the loop memoization in `profile.tsx`.
5. Align the "Freeze" feature copy with the actual logic.

### Phase 2: Missing Seed Entities
1. Generate `Packs` (Theme x Level bundles) to populate the vocabulary modules correctly.

### Phase 3: Monetization & Exam Content (Future)
1. Complete integration of `RevenueCat`/`Stripe` (or `Paystack`).
2. Finalize generating the B1-B2 exam task items (TCF/TEF/DELF) through the AI pipeline into the `seed.json` snapshot.
3. Hook up the backend webhooks (`adapty-webhook`) to properly track Premium entitlement gating.
