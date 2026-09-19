# Codebase Concerns

**Analysis Date:** 2026-09-19

## Tech Debt

**Seed.json vs Postgres sync hazard — Publish destroys uncommitted content:**
- Issue: Content authored directly to `seed.json` via seed-direct scripts (e.g., `author-lesson-overviews.ts`, mission-journey rewrites) exists only in git, not in the DB. Publishing reads Postgres as source-of-truth and overwrites seed.json, destroying content that git holds. Example: 2026-07-31 incident destroyed 20 sections in `sons.03.l1`, collapsed `sons.01/02/03` + `a1.04` + `a2.01` overviews.
- Files: `ealch-v2/src/content/seed.json`, `ealch-admin/scripts/restore-lesson-bodies-from-seed.ts`, `ealch-admin/scripts/author-lesson-overviews.ts`
- Why: Rapid authoring phase combined with two separate content sources (Postgres and seed.json)
- Impact: Data loss on every publish; content authors must manually reconcile after each publish
- Fix approach: Before every `content:publish`, diff `content_units.body` against git HEAD version. Restore any git-newer lessons to DB first using `restore-lesson-bodies-from-seed.ts`. Document this as pre-publish checklist. Consider making seed-direct scripts write to DB as well.

**Content cache layers (AsyncStorage + Metro) overranking bundled seed:**
- Issue: Three layers load content: bundled seed.json, cached OTA snapshot from AsyncStorage, then network. `mergeCorpus` overlays snapshot over seed, so any id in both favors the cache. Dev guard on `refreshFromRemote()` stops network refresh in dev, but `initContent()` still reads cache unconditionally. A device that ever fetched or ran a release build keeps showing stale content forever.
- Files: `ealch-v2/src/services/content.ts`, `ealch-v2/src/services/content.logic.ts:38-50,538`
- Why: Layered architecture meant to support OTA updates but cache behavior not fully understood
- Impact: Dev builds show wrong content (newly added lessons appear but edited ones don't), requiring `--clear` flag. Production builds can serve old content until app is deleted and reinstalled.
- Fix approach: Partially fixed 2026-08-06 via `adoptedForLaunch(cached, isDev)` returning null in dev. Monitor for similar symptoms: if new lessons appear but edits don't, clear Metro cache with `--clear`.

**Unmetered, unauthenticated TTS endpoint:**
- Issue: `/supabase/functions/tts` (index.ts:190-249) accepts 2,400 chars per call from anyone on the internet with no authentication, no quota, no rate limiting, no caching. Default provider is device TTS (free), but endpoint is live and callable.
- Files: `ealch-admin/supabase/functions/tts/index.ts`, `ealch-v2/src/services/tts.ts:274-295`
- Why: Built as a fallback provider during MVP; never gated or metered
- Impact: Any bot can generate unlimited French TTS speech at $288/1000 requests. Cost unbounded, no visibility into abuse.
- Fix approach: Add authentication (JWT required), implement rate limiting (per-user quota), add monitoring/alerts on request volume. Consider retiring the endpoint entirely since device TTS is the default and works offline.

**Paywall gates only 1 of 12 lessons; entitlement not synced cross-device:**
- Issue: Only `a2.01.l1` (2,659 bytes, 6 items) is gated behind paywall. The bundle contains 762 items at A1+ levels reachable through ungated hub screens. Entitlement cache is plain AsyncStorage JSON, validated by shape only, never synced to Postgres or restored on new device. Entitlement re-checked on `AppState → active` but against local cache.
- Files: `ealch-v2/src/store/entitlement.logic.ts:24-59`, `ealch-v2/src/services/sync.ts` (zero references to entitlement), `ealch-v2/src/services/purchases.ts:230-233`
- Why: Monetization model in transition; paywall built before content volumes existed
- Impact: Ineffective revenue model; no protection for purchased features on new device. A user loses access to `coach.unlimited` and other Premiere features when they switch devices or reinstall.
- Fix approach: Expand paywall to B1/B2 content (currently 0 items B1+). Move entitlement state to Supabase (replicate on login/purchase). Implement sync in `src/services/sync.ts` alongside resume/progress sync.

**Cold start performance — 2.42 MB Hermes bytecode eager-loaded before first paint:**
- Issue: seed.json (4.66 MB on disk, 2.42 MB Hermes bytecode) is module-scope import with `inlineRequires:false` at metro config. Evaluated on JS thread before any layout paints. Bundled splash holds native screen, then hardcoded 2400ms animated splash waits for nothing while bytecode materializes.
- Files: `ealch-v2/src/content/seed.json`, `ealch-v2/src/services/content.ts:20`, `ealch-v2/app/_layout.tsx:22`, `ealch-v2/app/splash.tsx:31`, `ealch-v2/.expo-config/metro.config.js:346`
- Why: Eager import for simplicity; no lazy loading strategy
- Impact: Cold start jank; users see blank screen for 2.4s+ on mid-range devices while bytecode compiles
- Fix approach: Lazy-import seed.json inside `initContent()` after splash renders. Show deterministic progress (load bundle → parse JSON → merge layers) to make wait feel intentional. Profile on real Pixel 6 to measure improvement.

**Snapshot size approaching device limits — 30 MB ceiling vs 6 MB AsyncStorage cap:**
- Issue: Content snapshot ceiling is hardcoded 30 MB (`content.logic.ts:538`). AsyncStorage practical limit is 6 MB. Recent snapshots are up to 27 MB. If snapshot hits 30 MB, new OTA updates fail silently.
- Files: `ealch-v2/src/services/content.logic.ts:538`, `ealch-admin/supabase/functions/content-snapshot/index.ts`
- Why: Rapid content growth without pruning; snapshot includes every version of every lesson
- Impact: OTA updates will fail when snapshot hits ceiling. Users stuck on stale content.
- Fix approach: Implement aggressive snapshot pruning (remove old lesson versions, keep only current). Add monitoring alert at 25 MB. Consider splitting snapshot by level/band (separate A1, A2, B1, etc.) to fit AsyncStorage.

## Known Bugs

**Audio playback doesn't pause on background; speech continues over home screen:**
- Symptoms: User backgrounds app during TTS or audio playback; speech continues audibly while home screen is visible
- Trigger: Press home button or receive call during any tts.speak() or audio playback
- Files: `ealch-v2/src/services/tts.ts`, `ealch-v2/src/services/audio.ts`
- Root cause: No `AppState` listener pauses TTS/audio on background. `expo-audio` runs on default audio mode with no route change handling. No `AudioPlayer` release on suspend.
- Fix approach: Add `AppState.addEventListener('change')` handler in root layout (`app/_layout.tsx`). Call `tts.stop()` and pause audio player on 'inactive'/'background'. Resume on 'active'.

**Exam grading response lost on process death — only stored in useState:**
- Symptoms: User's exam answer and grading state disappear if app crashes or is force-killed during grading
- Trigger: Process death (crash, force-stop, OOM) between user submitting answer and grading completing
- Files: `ealch-v2/app/exam-task.tsx:28,169`, `ealch-v2/src/services/examGrader.ts:41-49`, `ealch-v2/src/i18n/strings.ts:714`
- Root cause: `responseText` held only in React state; never persisted to AsyncStorage or Supabase. On network failure, app says "Your response was saved" but it isn't.
- Workaround: User must retake the section (assuming they retry soon, attempt history is preserved but response is gone)
- Fix approach: On successful capture, write `{ answerId, responseText, timestamp }` to AsyncStorage before submitting grading request. On app reopen, check for orphaned grading requests and resume or display stored response.

**TalkBack accessibility broken — buttons lack role/label; 0 of 353 onPress controls announced properly:**
- Symptoms: Screen reader announces "button" for only 64 of 353 interactive controls; icon-only buttons announce nothing or by hint only
- Trigger: Enable TalkBack (Settings > Accessibility > TalkBack)
- Files: `ealch-v2/src/components/ui.tsx:25-40`, `ealch-v2/src/components/Press.tsx` (shared Press wrapper sets no accessibilityRole)
- Root cause: Shared `Press` component has no `accessibilityRole="button"` prop. Custom button variants never set role. Icon-only buttons use hints instead of labels.
- Fix approach: Add `accessibilityRole="button"` to `Press` default. Audit custom buttons for role/label/hint. Replace icon-only buttons with labels or add label prop.

**Notification body formatting broken — only one template substitution happens:**
- Symptoms: Notification shows `'Your {t} session is waiting: Au Café, 4 min with {name}.'` instead of filled-in values
- Trigger: Receive a practice reminder notification
- Files: `ealch-v2/src/store/useStore.ts:219,237`, `ealch-v2/src/components/PushBanner.tsx:31`, `ealch-v2/src/i18n/strings.ts:768`
- Root cause: Scheduler calls `.replace('{t}', time)` only, missing `.replace('{name}', sessionName)`. Only `PushBanner` does both replaces.
- Fix approach: Extract notification formatting to shared function. Make scheduler call the same function as display code.

**Dark mode toggle config lies — automatic reads OS but JS always stays dark:**
- Symptoms: Setting `userInterfaceStyle: "automatic"` in app.json configures native shell to follow OS, but app stays dark regardless
- Trigger: Change OS dark/light mode (Settings > Display > Light)
- Files: `ealch-v2/app.json:9`, `ealch-v2/src/store/useStore.ts:159`, `ealch-v2/src/theme/palette.ts:36-47`
- Root cause: Nothing reads OS dark mode setting via `useColorScheme()` or `Appearance.getColorScheme()`. Store default hardcoded to `'dark'`. JS never consults OS.
- Fix approach: In root layout, call `useColorScheme()` and sync to store on mount. Remove hardcoded default or use it only as fallback.

**Retention mechanics mostly dead — push campaigns simulated, notification taps unhandled, toggle dead:**
- Symptoms: Push notifications never sent; daily report / nudge toggles in settings have no effect; tapping a notification doesn't open the session it advertises
- Trigger: Enable notifications, miss a day, wait for reminder
- Files: `ealch-v2/src/services/notifications.ts`, `ealch-v2/app/_layout.tsx:50-58`, `ealch-admin/src/lib/workers.ts:3` (header: "push-campaign send queue **simulation**")
- Root cause: No `getExpoPushTokenAsync()` call anywhere; push tokens never registered. Notification `'report'` and `'nudge'` toggles only branch on `'daily'` (`useStore.ts:224-230`), no consumers. No `addNotificationResponseReceivedListener` handler; tapping notification does nothing.
- Fix approach: Implement push token registration (getExpoPushTokenAsync → store in Supabase). Wire notification toggles in `useStore` and `notifications.ts`. Add response listener to deep-link into the session that was notified about.

**STT continuous mode requested but never set — Google ASR always goes to full stop:**
- Symptoms: Speech recognition forces user to pause between utterances instead of allowing continuous input
- Trigger: Speak a sentence with natural pauses and continuation
- Files: `ealch-v2/src/services/stt.ts:295-324`, specifically line 299 `continuous: false`
- Root cause: Hard-coded `continuous: false` in recognizer options. The intent is correct (force user to stop and validate) but named parameter contradicts the intended no-continuous behavior documented in fix commit 8cd0be3
- Fix approach: This is already correct post-fix (8cd0be3). Verify still applied and add test asserting `continuous === false`.

## Security Considerations

**RLS status: Previously mis-audited, now correct:**
- Risk: Audit initially found "31 of 33 admin tables have no RLS"; this was a critical vulnerability claim
- Current mitigation: Independent refutation confirmed via metadata query that all 41 public tables have `rls_enabled: true`. Supabase advisor returns zero policy violations.
- Files: `ealch-admin/supabase/migrations/*`, RLS audit pinned in `ealch-v2/src/store/entitlement.logic.ts:1` via `c6bba58` commit
- Recommendations: Keep the RLS guard test (c6bba58 "pin the RLS facts to a guard"). Quarterly re-run of Supabase advisor. Document that this was verified correct on 2026-09-01.

**Unauthenticated TTS endpoint — Critical cost vector:**
- Risk: Any bot with the endpoint URL can generate unlimited TTS; cost unbounded and unmetered
- Current mitigation: Endpoint is live and callable, but default provider is device TTS (free), so normal users don't trigger it
- Files: `ealch-admin/supabase/functions/tts/index.ts:190-249`
- Recommendations: Implement JWT auth check at function entry (reject if `!auth.user`). Add request rate limiting by `auth.uid` (e.g., 1000 requests/day). Enable request logging and set up alert at $50/month spend. Consider geo-restricting to known user countries only. Short-term: add `Authorization` header requirement and reject requests without it.

**No STT acoustic analysis — Can't verify pronunciation:**
- Risk: App claims to grade pronunciation but only scores word transcription. User cannot be proven to have heard or spoken correctly.
- Current mitigation: Client-side scoring function is transparent about inputs (two strings, no audio analysis). Documentation acknowledges limitation.
- Files: `ealch-v2/src/utils/score.ts:181`, `ealch-v2/src/services/stt.ts:226`, edge function deleted (upload at line 154 references non-existent `grade-stt` function)
- Recommendations: Document in onboarding that Speak mode grades transcription, not pronunciation. If acoustic analysis is a future goal, audit for GDPR/privacy: recording audio locally vs cloud analysis.

## Performance Bottlenecks

**Cold start jank — 2.4s blank screen while 2.42 MB Hermes bytecode materializes:**
- Problem: seed.json eagerly imported on JS thread blocks first paint
- Measurement: ~2400 ms on Pixel 6 (mid-range baseline); 70 ms JSON parse + 145 ms read file overhead on desktop gives lower bound of ~200+ ms on device
- Cause: `inlineRequires:false` in metro config; module-scope import; no lazy loading
- Files: `ealch-v2/.expo-config/metro.config.js:346`, `ealch-v2/src/services/content.ts:20`, `ealch-v2/app/splash.tsx:31` (hardcoded 2400ms wait)
- Improvement path: Lazy-import seed.json inside `initContent()` after native splash is dismissed. Show progressive load states (loading bundle → parsing → merging layers). Use `React.lazy()` or dynamic import. Measure on real device; target <1s total time from app launch to first interactive screen.

**Snapshot size approaching ceiling — No pruning strategy in place:**
- Problem: Content snapshot bloats every publish; no mechanism to drop old versions
- Measurement: Latest snapshot ~27 MB; ceiling is 30 MB; AsyncStorage practical limit 6 MB. Recent publishes v65-v70 show steady growth.
- Cause: Append-only versioning; no cleanup of superseded lesson versions
- Files: `ealch-admin/supabase/functions/content-snapshot/index.ts`, `ealch-v2/src/services/content.logic.ts:538`
- Improvement path: Implement snapshot pruning: keep current version of every lesson, discard old versions. Consider splitting by level (A1, A2, etc.) into separate downloadable snapshots. Add pre-publish check that snapshot doesn't exceed 25 MB, fail if it does.

**Always-on 15s alarm interval at root — Drains battery:**
- Problem: `setInterval(…, 15000)` mounted at app root lifetime in alarm watcher; fires even when app backgrounded (if audio playing)
- Measurement: Continuous network/compute every 15s adds measurable battery drain over hours
- Cause: Early retention design; no cleanup on background
- Files: `ealch-v2/src/hooks/useAlarmWatcher.ts:19-33`
- Improvement path: Move interval inside `AppState` active listener. Stop on background, restart on foreground. Or replace with longer debounce (60s). Audit with battery profiler on real device before/after.

## Fragile Areas

**Content authoring pipeline — Seed-direct scripts bypass DB, git runs ahead:**
- Files: `ealch-admin/scripts/author-lesson-overviews.ts`, `ealch-admin/scripts/restore-lesson-bodies-from-seed.ts`, `ealch-v2/src/content/seed.json`
- Why fragile: Two concurrent writers (DB and git). Scripts can author directly to seed.json without touching Postgres. Publishing overwrites seed.json from DB, destroying uncommitted content. Restore scripts exist but must be run manually.
- Common failures: Publish wipes lesson body; items missing after merge; version numbers reset unexpectedly
- Safe modification: Before any publish, run diff check against DB. After any seed-direct author run, either (a) push DB changes first, or (b) manually restore from seed. Document dependency on restore script in every seed-direct script header.
- Test coverage: Covered by post-publish checks (publish-dryrun-before-done.md rule), but no automated guard

**STT/TTS pipeline — Multiple fallbacks, retry logic, persistent WAV files:**
- Files: `ealch-v2/src/services/stt.ts:136-355`, `ealch-v2/src/services/tts.ts:273-355`, `ealch-v2/src/services/audio.ts:15-19,86-121`
- Why fragile: 3-4 fallback paths per operation (device → remote TTS, recognizer available? → check permission → capture), retry logic, WAV persistence, timeouts, audio mode conflicts
- Common failures: Audio session held by TTS blocking STT (fixed by explicit stop at line 148). STT never starts (permission check, recognizer unavailable). Microphone silent on Android even though app has permission (Hushed silencing pattern documented).
- Safe modification: When adding new audio mode changes, test on real device with external audio plugged in. Check `AppState` handlers don't conflict. Document audio session lifetime.
- Test coverage: 3 of 12 STT event types have tests; TTS device behavior untested on real device

**Entitlement cache — Plain AsyncStorage, shape-only validation, no sync:**
- Files: `ealch-v2/src/store/entitlement.logic.ts:77-100`, `ealch-v2/src/services/purchases.ts:230-233`, `ealch-v2/src/services/sync.ts`
- Why fragile: Cache is mutable JSON in AsyncStorage. Validated only by shape (has keys?), not by signature. Never synced to Postgres. On new device or reinstall, entitlement is lost forever.
- Common failures: Offline purchase check returns stale cache. User logs in on new device, loses Premiere status. Cache corrupted by manual AsyncStorage edit (reported in ealch-device-asyncstorage-edit.md).
- Safe modification: Move to Supabase, query on every login, cache locally for offline. Sign cache with HMAC to detect tampering. Add sync entry point.
- Test coverage: Entitlement logic tested in isolation, but purchase→entitlement→feature access has no E2E test

**Notification system — 5 separate dead code paths (toggle, tap, push token, body format, report toggle):**
- Files: `ealch-v2/src/services/notifications.ts:25-34`, `ealch-v2/app/_layout.tsx:50-58`, `ealch-v2/src/store/useStore.ts:217-244`, `ealch-v2/app/settings.tsx:534` (toggles), `ealch-admin/src/lib/workers.ts:3` (push simulation)
- Why fragile: Scheduled notifications work (8/9 quality score), but everything around them is broken: toggles that don't toggle, tap handlers that don't exist, body formats that don't fill, push campaigns that are simulated.
- Common failures: User disables "Daily Report" but keeps getting notifications (toggle not wired). Notification tap does nothing (no response listener). Notification shows `{t}` and `{name}` placeholders (format not applied).
- Safe modification: Before adding new notification feature, audit whether it touches any of these subsystems. Add E2E test: enable notification → toggle off → verify stops. Tap notification → verify deep link works.
- Test coverage: None of the dead subsystems have tests. Only the scheduler itself is tested (3/10 quality).

## Scaling Limits

**Supabase Free Tier — Approaching limits at ~5,000 users:**
- Current capacity: 500 MB database, 1 GB file storage, 2 GB bandwidth/month, 100,000 monthly function invocations
- Limit: Estimated 5,000 concurrent users before 500 MB DB fills (assuming ~100 KB per user for progress + entitlement + sync state). Bandwidth limited to ~20 GB/month at scale (2 GB free → likely exhausted by 5k users downloading snapshot OTA).
- Symptoms at limit: 429 rate limit errors, publish fails, OTA updates fail
- Scaling path: Upgrade to Pro tier ($25/mo) → 8 GB DB, 100 GB storage. Architect snapshot splits by level to reduce per-download size. Consider CDN for snapshot distribution. Monitor DB growth monthly; alert at 400 MB.

**Unauthenticated TTS endpoint — Unbounded cost scaling:**
- Current capacity: No quota. Cost scales linearly with malicious/accidental usage. ElevenLabs fallback at $288/1000 requests means a 1M-character bot could cost $288k+.
- Limit: Breaks at any sophisticated bot attack or misconfigured client hitting it in a loop
- Symptoms at limit: Bill shock; service disabled by Supabase for cost control
- Scaling path: Implement JWT auth + per-user quota. Switch default provider permanently (no fallback). Monitor spend; set hard limit in Supabase billing config.

**AsyncStorage snapshot size — 6 MB practical ceiling, 30 MB config ceiling:**
- Current capacity: Snapshot ~27 MB on disk. AsyncStorage hard limit is device-dependent, practical limit ~6 MB for reliable persistence.
- Limit: Next large lesson batch (b1.01, b1.02, etc.) will push snapshot past 30 MB. OTA update fails silently when snapshot exceeds ceiling.
- Symptoms at limit: New user downloads old snapshot; returning user can't update; no error message
- Scaling path: Implement snapshot pruning (remove old lesson versions). Split snapshot by curriculum level. Pre-calculate gzip sizes; refuse to publish if compressed snapshot >5 MB.

## Dependencies at Risk

**expo-audio on default audio mode — No interruption or route handling:**
- Risk: No audio focus management; app speech continues during phone calls, alarms, or other audio app foreground
- Impact: Poor UX during calls; violates platform conventions
- Current state: No `interruptionMode` set; app uses platform default (usually "duckAndReemerge" on Android)
- Mitigation: Works in most cases but conflicts with call-in-progress
- Recommendation: Set `interruptionMode: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS` explicitly. Test with incoming call. Add `AppState` listener to pause playback on background.

**google-cloud-speech SDK via expo-speech-recognition — No graceful fallback for unavailable recognizer:**
- Risk: If Google ASR unavailable or offline, app shows error and stops (no retry, no fallback transcription)
- Impact: High-stakes exam grading fails completely instead of degrading
- Current state: `recognizerAvailable()` check at `stt.ts:136-140` returns false and sets error
- Mitigation: Screen shows error message but context is lost
- Recommendation: Add exponential backoff retry. For high-stakes epreuves, fall back to manual transcription (user types response). Log failures for monitoring.

**ElevenLabs speed cap at 0.7-1.2 — Slower speeds not available:**
- Risk: TTS speed flexibility limited; can't slow down further for accessibility. Fast speeds (>1.2x) unavailable for quick review.
- Impact: TCF blanc-01 audio (building note: "ElevenLabs speed caps at 0.7-1.2, punctuation only slows a single voice") means no speeds beyond this range are achievable
- Current mitigation: Working within the cap works for most learners
- Recommendation: If slow speeds needed for accessibility, consider Amazon Polly as fallback provider (supports 0.5-2.0x).

## Missing Critical Features

**Push notification campaigns / win-back email — Simulated only:**
- Problem: No integration with push token registration or backend campaign dispatch. Workers.ts header admits it's simulated. No push tokens collected from users.
- Current workaround: In-app alarm banner fires every 15s while app open (low quality, only reaches active users)
- Blocks: Can't re-engage lapsed users; retention solely dependent on daily active use
- Implementation complexity: Medium (token registration → Supabase table → Expo/OneSignal backend → campaign send). Estimated 3-5 days.

**Acoustic pronunciation scoring — Can't actually grade how something is said:**
- Problem: STT only scores transcription; no phoneme, prosody, or formant analysis. `scoreUtterance` input is two strings, no audio. Studio voice audio pipeline produced zero clips (0 of 6,858 items have `audioRef`).
- Current workaround: Grade based on word transcription; hope user's accent is close enough for ASR to catch it
- Blocks: Can't validate "Say this with French stress/intonation"; can't support pronunciation-specific feedback; "premium voice" feature promised but never delivered
- Implementation complexity: Very High (requires phoneme recognizer, prosody extractor, or cloud ASR with phoneme feedback). Estimated 2-3 months.

**Cross-device entitlement sync — Currently lost on reinstall or new device:**
- Problem: Entitlement stored only in AsyncStorage; not synced to Postgres or restored on login
- Current workaround: Users must repurchase on new device or wait for entitlement cache to re-populate (never does without explicit purchase)
- Blocks: Can't support "once purchased, runs everywhere" model; users feel nickeled-and-dimed
- Implementation complexity: Low (add entitlement columns to `auth.users`, sync on login). Estimated 1 day.

**Automated content drift detection — Publish destroys unreviewed content silently:**
- Problem: No pre-publish guard compares DB against seed.json. No log of what publish will destroy. Dry-run exists but not enforced.
- Current workaround: Standing rule (publish-dryrun-before-done.md) to manually run dry-run; enforced by discipline only
- Blocks: Can't safely scale authoring to multiple concurrent editors
- Implementation complexity: Low (diff DB lesson bodies against seed.json; fail publish if git-newer content found). Estimated half day.

## Test Coverage Gaps

**No component render tests — 844 tests, none render a React component:**
- What's not tested: Screen layouts, visual regression, accessibility rendering (via accessibility tree), user input flows through React
- Risk: Breaking changes to UI are invisible until device testing. Color contrast audited manually (hostile-device.md §1). Accessibility labels missed until TalkBack audit (hostile-device.md §2.11).
- Priority: High (component rendering is your primary API)
- Difficulty to test: Would require React Native Testing Library or similar. Cascade dependencies on Expo test setup.
- Files affected: All `ealch-v2/app/*.tsx`, `ealch-v2/src/components/**`

**Exam grading E2E — 3 papers shipped before any full exam was tested end-to-end:**
- What's not tested: Complete paper submission → server grading → report generation → cross-device sync. Network failures during grading. Response persistence. Section transitions.
- Risk: Exam flow could be broken for entire paper and go unnoticed (has happened; example: "stop apologising for an answer the candidate never gave" fix 851f844). Grading hangs silently if network drops (only tested locally).
- Priority: Critical (exams are revenue-driving feature)
- Difficulty to test: Need exam snapshot loaded, network isolation, state reset between tests. ~5 days to build test infrastructure.
- Files affected: `ealch-admin/supabase/functions/grade-exam/index.ts`, `ealch-v2/app/exam-task.tsx`, `ealch-v2/src/services/examGrader.ts`

**STT + scoring pipeline — Can't test on real device without acoustic input:**
- What's not tested: Real pronunciation variations (accents, speed, background noise). ASR confidence and alternative ranking. Edge cases where expected and heard are similar but not identical.
- Risk: Users report scoring unfairly but can't be diagnosed without device audio logs. Speech recognition behavior on real devices differs from emulator.
- Priority: High (core learning feature; affects pass rates)
- Difficulty to test: Requires device, real audio input, or pre-recorded utterance library. Currently no device testing infrastructure.
- Files affected: `ealch-v2/src/services/stt.ts`, `ealch-v2/src/utils/score.ts`, `ealch-v2/app/speak.tsx`

**Notification delivery and response — Toggles, taps, and body formatting untested:**
- What's not tested: Scheduling → actual notification display → user tap → deep link routing. Toggle state persistence. Body template substitution.
- Risk: Dead notification subsystems (toggle not wired, tap handler missing) went live undetected. Notifications show placeholders instead of user's session name. Users can't re-engage via push.
- Priority: Medium-High (retention feature; partially broken)
- Difficulty to test: Would need device + notification system access, or mocking Expo Notifications. ~3 days to build.
- Files affected: `ealch-v2/src/services/notifications.ts`, `ealch-v2/app/_layout.tsx`, `ealch-v2/src/store/useStore.ts`

**Retention engine delivery mechanisms — Engine 116/116 tests pass, but every output mechanism broken:**
- What's not tested: Review queue actually appears on home (appears; logic tested). Notifications fire with correct text (scheduler works; text formatting broken; tap handler missing). Streaks survive app restart (state persists; freeze not replenishable). Freeze actually buys a day (logic exists; no writer, so always returns 0 frozen days).
- Risk: Retention audit (retention.md) shows 10 of 31 mechanisms either missing or broken. Engine tests all pass but the user never sees the result.
- Priority: Medium (blocking retention roadmap)
- Difficulty to test: Full retention flow requires 14-day run of app, multiple sessions, network sync. E2E test infrastructure needed.
- Files affected: `ealch-v2/src/store/progress.logic.ts`, `ealch-v2/src/services/sync.ts`, `ealch-v2/app/home.tsx`, `ealch-v2/src/services/notifications.ts`

**Content cache / overlay behavior — Symptom detection exists but no proactive tests:**
- What's not tested: Editing seed.json lesson → Metro bundle refresh → device app receives new version. AsyncStorage snapshot overlay → new content appears/old edits blocked. Cache clear remediation.
- Risk: Another similar bug (stale bundle, stale cache overlay) will go undetected until device testing surfaces it
- Priority: Medium (but high severity when it happens)
- Difficulty to test: Requires Metro bundle generation + device runtime checking. ~2 days to build.
- Files affected: `ealch-v2/src/services/content.ts`, `ealch-v2/src/services/content.logic.ts`

---

*Concerns audit: 2026-09-19*
*Update as issues are fixed or new ones discovered. Many of these findings come from AUDIT-EVIDENCE/ (2026-08-04 read-only audit) and standing project memory.*
