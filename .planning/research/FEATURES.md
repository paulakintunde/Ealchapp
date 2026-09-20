# Feature Research

**Domain:** Launch-readiness gaps for an existing mobile language-learning app (monetization/entitlement, retention notifications, accessibility, content-publish safety)
**Researched:** 2026-09-19
**Confidence:** MEDIUM-HIGH (industry patterns HIGH confidence via multiple corroborating sources; specifics of what's "enough" for a solo dev are MEDIUM — judgment call, not a documented standard)

## Scope Note

This is a subsequent-milestone research pass on an app that already ships lessons, quizzes, flashcards, speak-mode practice, and full exam packs (TEF/TCF/DELF). This file does **not** re-cover those shipped features. It covers only the four launch-readiness gaps named in the milestone brief, informed by how comparable consumer language-learning apps and general freemium mobile apps handle them, and codebase-grounded by `.planning/codebase/CONCERNS.md`.

One correction to CONCERNS.md surfaced during this research: `ealch-v2/src/services/purchases.ts` shows the app already migrated from RevenueCat to **Adapty** (2026-07-22, per in-code comment "CF-15... BF-02"), already calls `customerUserId: useStore.getState().userId` on activate (i.e., already identifies the Adapty profile with the Supabase auth uid), and already implements a real `restorePurchases()` that calls Adapty's `restorePurchases()` SDK method and re-derives entitlement. `entitlement.ts`'s file-header comments ("RevenueCat is Phase 10," "There is no entitlement source yet") are stale scaffolding notes predating the Adapty swap, not a description of current behavior. The gap CONCERNS.md is pointing at is real but narrower than "no restore flow exists": it's that (a) only 1 of 12+ eligible lessons is actually gated, so the paywall barely matters yet, and (b) the local `AsyncStorage` cache in `entitlement.ts` (`getCachedEntitlement`/`setCachedEntitlement`) is validated by shape only and is a *cache* of the Adapty-derived truth, not itself synced — which is fine as a pattern (cache-plus-reconcile is correct) as long as `syncIdentity`/`refreshEntitlement` actually fire on every login and foreground, which the code shows they do. Treat "entitlement sync" as **mostly already correct infrastructure** that needs **wider paywall coverage**, not a rebuild.

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = product feels incomplete, untrustworthy, or gets bounced at store review.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Visible "Restore Purchases" control, reachable without contacting support | Apple App Review Guideline 3.1.2 requires a restore mechanism for auto-renewing/non-consumable IAP; Google has an equivalent expectation. Users who reinstall or switch devices expect this to just work. | LOW | `restorePurchases()` already exists and works in `purchases.ts`. Verify it's actually wired to a visible button in `settings.tsx`/`paywall.tsx` and that pressing it gives honest feedback ("restored" vs "no purchases found" — the code already returns that distinction, just confirm the UI uses it). |
| Entitlement survives reinstall/new device for a signed-in user | Table stakes for any subscription app — "I paid, why am I locked out on my new phone" is the single most common subscription support complaint industry-wide. | LOW (mostly done) | Already implemented via Adapty `customerUserId` = auth uid + `syncIdentity()` on login. Remaining work is verification/testing, not new infrastructure. |
| Paywall gates a coherent, meaningful slice of content — not just 1 lesson out of 700+ items | A paywall that gates almost nothing isn't a monetization feature, it's dead UI. Users who never hit a gate never learn there's a "Première" tier to want. Conversely, industry data (RevenueCat 2025 freemium report) shows a common rough guideline of roughly 10% free / most of the rest gated, though the right split is app-specific and usually needs A/B testing that a solo dev won't do — the actionable takeaway is "gate a real, consistent boundary" (e.g., "first lesson of every unit free, rest of the unit gated" or "A1 free, A2+ gated"), not "gate one arbitrary lesson." | MEDIUM | Decide and apply one simple, explainable gating rule across the whole A1/A2/exam catalogue rather than hand-picking lessons. A level-boundary rule (e.g., A1 free, A2 + exams gated) is easiest to reason about and matches how Duolingo-class apps gate by course section. |
| Paywall cannot be dismissed accidentally / bypassed by swipe | Apple/Play review and basic UX expectation — if it's a hard paywall, it must behave like one; if it's a soft prompt, users must be able to back out cleanly. Ambiguity here reads as a bug. | LOW | Check `paywall.tsx` modal presentation config explicitly; this is a one-line config check, not a redesign. |
| Notification toggle in Settings actually does what it says | A toggle that doesn't toggle is a trust-breaking bug, not a missing feature — worse than not having the setting at all. | LOW-MEDIUM | CONCERNS.md: "report"/"nudge" toggles only branch on "daily," no consumers. Wire each toggle to its own scheduling condition. |
| Tapping a notification opens the relevant session (deep link) | Every mainstream app with notifications does this; a notification that opens to a random home screen instead of "the thing it advertised" is a common 1-star-review trigger. | LOW-MEDIUM | Expo Router deep linking is close to free here: url in notification data → matching route file. Add `addNotificationResponseReceivedListener` + handle cold-start buffered URL per Expo's documented pattern. |
| Notification body text renders correctly, no unfilled template placeholders | Literally showing `{t}` and `{name}` to a user is the kind of bug that makes an app look abandoned/broken, independent of whether notifications are a "core" feature. | LOW | CONCERNS.md already has the exact fix: extract a single shared formatting function both the scheduler and `PushBanner` call. |
| Dark mode / "automatic" theme setting actually follows the OS | Users who set `userInterfaceStyle: automatic` and see the native shell change but the JS UI stay stuck dark will read this as broken, not as a missing feature — it's advertised (`app.json`) but not delivered. | LOW | `useColorScheme()` wired to store on mount; documented fix already scoped in CONCERNS.md. |
| Interactive controls are screen-reader operable: role + accessible label on every button/control a user must act on to use the app | This is the actual bar for "not broken" accessibility on mobile — not full WCAG AA certification, but every tap target a TalkBack/VoiceOver user needs to complete a lesson, buy a subscription, or manage settings must be announced and actionable. Increasingly also a legal exposure vector (EAA in the EU took effect June 2025 for apps distributed there; ADA Title II deadlines target government apps specifically, but plaintiffs' firms have targeted consumer apps under general ADA theories regardless). | MEDIUM-HIGH | 353 onPress controls, only 64 announce correctly per CONCERNS.md. Fix at the shared `Press` component level first (adds `accessibilityRole="button"` by default) — this alone likely fixes the majority of the gap in one change, then audit remaining custom/icon-only buttons individually. |
| Font scaling / Dynamic Type doesn't break layout | Already flagged as a real defect (`ealch-font-scale-drops-text.md` in project memory): OS font scale 1.3 drops the last words of cards. This is baseline accessibility, not a stretch feature, and affects low-vision and simply older users. | LOW-MEDIUM | Constrain to specific known-bad components (flashcards, per project memory) rather than a blanket re-layout. |
| Publishing content can never silently destroy unreviewed work | Table stakes for *any* system with two writers to the same artifact (this is the CMS "draft/publish + review gate" pattern, standard since the earliest headless CMS designs). This app has already had a real data-loss incident (2026-07-31) from this exact gap. | LOW | Industry-standard fix shape: a pre-publish diff (DB vs. what's about to be overwritten) that fails/blocks the publish — not a full CMS rebuild. CONCERNS.md already scopes this at "half day." This is the highest-leverage single fix in this whole research pass: cheap, and directly prevents a repeat of a proven, costly incident. |

### Differentiators (Competitive Advantage)

Features that set the product apart or meaningfully improve retention/monetization, but aren't required for a trustworthy launch.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Streak with a genuinely working freeze mechanic | Duolingo's own data (widely cited): users who hit a 7-day streak are ~2.4x more likely to return the next day. The psychological "don't lose what I built" loop is one of the best-evidenced retention mechanics in this category. CONCERNS.md notes the freeze exists in logic but "no writer, so always returns 0 frozen days" — i.e., partially built already. | LOW-MEDIUM (finishing, not building) | High value-to-effort ratio specifically because the hard part (streak state, freeze logic) is already there per the retention audit — this is closing a gap, not new scope. Good candidate for "add after validation" rather than launch-blocking. |
| Personalized notification copy (session name, time-of-day awareness) filled in correctly | Once body-template formatting is fixed (table stakes), going further — e.g., referencing what the user was mid-way through — measurably improves open rates in the pattern Duolingo and similar apps use (mascot-voiced, context-specific copy vs. generic "come back!"). | LOW | Natural follow-on once the shared formatting function exists; same code path, better copy.
| Level-boundary free trial structure (e.g., all of A1 free, A2+/exams gated) as the paywall design | Turns the paywall into an actual growth lever instead of a checkbox: users experience real value before being asked to pay, which RevenueCat's own benchmarking associates with materially better trial-start and retention numbers than either "nothing free" or "one random lesson free." | MEDIUM | This overlaps with the table-stakes "gate a coherent slice" item above — the differentiator layer is *tuning* the boundary (which level, whether exams are separately gated) rather than just having *a* boundary. |
| Automated pre-publish report (not just pass/fail, but a human-readable diff of what changed / what would be overwritten, with size deltas) | Reduces the manual-checklist discipline currently required (per CONCERNS.md, enforcement is "discipline only") to something that's hard to ignore or skip, and gives useful signal beyond "don't destroy things" — e.g., surfaces the snapshot-size creep issue (27MB approaching a 30MB ceiling) in the same report. | LOW-MEDIUM | Natural extension of the table-stakes diff guard; bundling the size-ceiling check into the same pre-publish report is efficient since both read the same snapshot artifact. |

### Anti-Features (Commonly Requested, Often Problematic — Don't Build These Now)

Things that look like reasonable asks but are overkill or actively risky for a solo, budget-conscious developer at this stage.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|------------------|-------------|
| Custom receipt-validation / entitlement backend (rolling your own App Store/Play Store server-side receipt verification) | "We should own our billing infra, not depend on a vendor" | This is exactly the class of infrastructure Adapty (already integrated) exists to remove — building it yourself means owning App Store/Play Store receipt format changes, refund/chargeback webhooks, and subscription-state edge cases indefinitely, solo. High effort, high ongoing maintenance, zero user-facing benefit over what's already wired up. | Keep Adapty as the sole entitlement writer (already the architecture, per `purchases.ts`'s own comment: "the ONLY writer of a non-free entitlement"). Spend effort on paywall coverage and QA of the existing restore flow instead. |
| Real push-campaign backend (win-back email/push sequences, A/B tested send times, segmentation) | "Duolingo does behavioral push campaigns, we should too" | PROJECT.md already flags this correctly as a multi-day build the roadmapper may defer. Duolingo's bandit-algorithm notification system is the output of a dedicated growth/ML team; replicating even a simple version (token registration → backend queue → segmentation) is disproportionate for a solo dev whose actual gap is "the existing local notifications don't even toggle or deep-link correctly yet." | Fix the local, on-device notification scheduling that already exists (toggles, tap handler, body formatting) first. That alone closes most of the trust/functionality gap. Real server-dispatched push campaigns are legitimate future work, not launch-readiness. |
| Acoustic/phoneme-level pronunciation scoring | "We claim to teach pronunciation, so we should grade it for real" | Already flagged in PROJECT.md as a ~2-3 month effort and explicitly not pre-committed to this milestone. Requires a phoneme recognizer or cloud ASR with phoneme feedback, new privacy/GDPR surface (recording and possibly cloud-processing user audio), and is unrelated to the four launch-readiness gaps in scope. | Ship the existing transcription-only scoring with clear onboarding copy about what Speak mode does and doesn't grade (CONCERNS.md already recommends this). Revisit acoustic scoring as its own future milestone. |
| Full formal WCAG 2.1 AA compliance audit / VPAT-style certification process | "Accessibility is a legal requirement now" | The regulatory deadlines found in this research (US ADA Title II April 2026, EU EAA June 2025) target government digital services and larger/regulated entities specifically — not a proportionate bar for a solo indie app's *first* accessibility pass. Chasing formal certification-level compliance before fixing "353 controls, only 64 announce correctly" is solving the wrong problem first. | Fix the concrete, measured gap: shared `Press` component gets a default `accessibilityRole`, icon-only buttons get real labels, dark-mode/font-scale bugs get fixed. That is a genuine, testable improvement in real screen-reader usability — treat formal compliance certification as future scope if/when it becomes a business requirement (e.g., government/enterprise customers). |
| Real-time multi-editor content locking / merge-conflict resolution in the authoring pipeline | "Prevent the class of publish bug we just had, properly, like a real CMS" | Solo-plus-AI-pair-programming means there is realistically one human editor at a time (possibly parallel AI-agent content builds, which CONCERNS.md already flags as an id-collision risk, but that's a different problem). Building live-editing locks, operational-transform merge, or a full draft/review/approve workflow (Contentstack/Strapi-grade CMS features) is solving for a multi-tenant editorial team this project doesn't have. | The cheap, correctly-scoped fix already identified in CONCERNS.md: a pre-publish diff/guard that blocks a publish which would overwrite git-newer content, surfaced as a clear fail with a restore-script pointer. That is the entire "review gate" a solo author needs. |
| Bespoke ML-driven notification send-time optimization (bandit algorithms, per-user model) | Duolingo's system uses this and it's a headline case study | This is a mature-product optimization layered on top of *working* notifications. This app's notifications don't currently toggle, deep-link, or format correctly — optimizing send-time before the basic mechanism works is solving problem 3 before problem 1. | Ship one well-timed, correctly-formatted, correctly-toggleable daily reminder first (matches the "set one well-timed notification" best-practice finding from this research). Revisit send-time optimization only after basic delivery is proven reliable and if data suggests it's worth the effort. |

## Feature Dependencies

```
[Pre-publish content-drift guard]
    └──unblocks confidently──> [Any further content authoring/publishing work this milestone]
                                    (without it, every subsequent publish risks repeating the 2026-07-31 incident)

[Shared Press component accessibilityRole fix]
    └──covers majority of──> [353-control TalkBack gap]
                                 └──residual──> [icon-only button label audit] (smaller, manual pass after the shared fix)

[Notification body-format shared function]
    └──required by──> [Personalized notification copy differentiator]

[Notification toggle wiring] ──independent of──> [Notification tap deep-link] ──independent of──> [Notification body formatting]
    (three separate dead code paths per CONCERNS.md; can be fixed in any order, but all three needed before "notifications feel functional")

[Adapty restore-purchases UI wiring + verification] ──enhances──> [Expanded paywall coverage]
    (expanding what's gated is low-value until restore is confirmed to work — a user who hits a bigger paywall and then can't restore on a new device is a worse experience than today's near-empty paywall)

[Level-boundary paywall gating rule] ──requires──> [Restore purchases confirmed working]
    (don't gate more content until the escape hatch — restore — is verified, or support burden rises with gate coverage)

[Dark mode OS-sync fix] ──independent──> [all other items] (isolated, low-risk, no dependencies)
```

### Dependency Notes

- **Pre-publish guard unblocks confident content work:** every other content-adjacent fix or new authoring pass this milestone carries repeat-incident risk until this exists — it's cheap (per CONCERNS.md, ~half a day) and should land early.
- **Press component fix covers the bulk of the accessibility gap:** because `Press` is the shared wrapper behind most `onPress` controls, one default-prop change likely moves the "64 of 353 announce correctly" number dramatically before any per-screen audit work starts — sequence this before manual audits, not after, to avoid auditing controls that get fixed for free.
- **Restore-purchases verification should precede wider paywall gating:** widening what's gated without confirming the restore path works turns a currently-low-stakes bug (paywall barely matters) into a higher-stakes one (users pay, then can't recover access) — order matters here specifically because of the interaction between two gaps.
- **The three notification defects (toggle, tap, formatting) are independent** and can be parallelized or sequenced by whichever is cheapest to land first; none blocks the others.

## MVP Definition

Framed as "launch-readiness minimum," since this isn't a 0-to-1 product — it's closing the gap between "built" and "safe to submit to app stores and trust with real paying users."

### Launch With (v1 — this milestone)

- [ ] Pre-publish content-drift guard (blocks a publish that would destroy git-newer content) — prevents a proven, costly incident from recurring; cheapest fix in this list relative to its risk reduction
- [ ] Restore Purchases button verified reachable and functioning end-to-end — App Store review expectation (Guideline 3.1.2) and baseline subscription-app trust
- [ ] Paywall gates a coherent, explainable slice of content (not just 1 lesson) — makes monetization real rather than theoretical
- [ ] Notification toggles actually toggle; notification tap deep-links to the right session; notification body renders with no unfilled placeholders — three cheap, high-visibility trust fixes
- [ ] `Press` component default `accessibilityRole` + audit of remaining icon-only controls — closes the majority of the TalkBack gap for the controls users actually need to complete core flows (lesson navigation, purchase, settings)
- [ ] Dark mode "automatic" setting actually follows OS — small, isolated, currently a visible lie in `app.json` vs. behavior
- [ ] Font-scale layout fix on the specific known-bad components (flashcards) — prevents visible text loss for accessibility-relevant users

### Add After Validation (v1.x)

- [ ] Finish the streak-freeze writer so the existing freeze logic actually grants frozen days
- [ ] Personalized notification copy beyond basic template filling (reference the specific session/lesson)
- [ ] Tune the paywall gating boundary based on real conversion data once gating is live and restore is proven solid
- [ ] Automated pre-publish report (human-readable diff + snapshot-size trend), not just a pass/fail guard

### Future Consideration (v2+)

- [ ] Real server-dispatched push-campaign system (token registration, segmentation, win-back sequences) — legitimate future work, explicitly out of scope this milestone per PROJECT.md
- [ ] Acoustic/phoneme pronunciation scoring — 2-3 month effort, separate milestone
- [ ] Formal WCAG AA certification / VPAT — revisit only if a business reason (enterprise/government customer, legal demand letter) makes it necessary
- [ ] ML-driven notification send-time optimization — only worth it once basic notification delivery has a track record

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|----------------------|----------|
| Pre-publish content-drift guard | HIGH (prevents data loss) | LOW | P1 |
| Restore Purchases verification | HIGH (App Store requirement + trust) | LOW | P1 |
| Paywall coverage expansion (coherent rule) | HIGH (revenue) | MEDIUM | P1 |
| Notification toggle/tap/body fixes | MEDIUM-HIGH (trust, retention) | LOW-MEDIUM | P1 |
| `Press` component accessibility default | HIGH (usability, legal exposure) | LOW | P1 |
| Icon-only button label audit (residual) | MEDIUM | MEDIUM | P2 |
| Dark mode OS-sync | LOW-MEDIUM | LOW | P1 (cheap enough to bundle even though value is modest) |
| Font-scale layout fix (flashcards) | MEDIUM | LOW | P1 |
| Streak-freeze writer | MEDIUM (retention) | LOW-MEDIUM | P2 |
| Personalized notification copy | LOW-MEDIUM | LOW | P2 |
| Automated pre-publish diff report | MEDIUM (author UX) | LOW-MEDIUM | P2 |
| Real push-campaign backend | MEDIUM (long-term retention) | HIGH | P3 |
| Acoustic pronunciation scoring | HIGH (differentiator) but out of scope | VERY HIGH | P3 |
| Formal accessibility certification | LOW (no current business driver) | HIGH | P3 |
| ML notification send-time optimization | LOW at current scale | HIGH | P3 |

**Priority key:**
- P1: Must have for a trustworthy launch this milestone
- P2: Should have, natural follow-on once P1 lands
- P3: Explicitly deferred — matches PROJECT.md's Out of Scope reasoning

## Competitor Feature Analysis

| Feature | Duolingo-class apps | General freemium mobile apps | Ealch's approach |
|---------|---------------------|-------------------------------|-------------------|
| Paywall gating boundary | Gates advanced content/features (unlimited hearts, offline, specific courses) behind a clear, consistent line; free tier is functional enough to build a habit | Common rough pattern: small free slice, most value gated, tuned by A/B testing (~10/70/20 as a rough industry reference point, not a rule) | Adopt a single, explainable level-boundary rule (e.g., A1 free / A2+exams gated) rather than one arbitrary gated lesson — matches the "meaningful, consistent boundary" pattern without needing A/B infrastructure a solo dev can't run |
| Restore purchases | Standard, vendor-backed (RevenueCat/Adapty-class SDKs) with account-based entitlement | Same — vendor SDK, not custom-built, is now the default approach industry-wide | Already aligned — Adapty already handles this; work needed is verification/UI wiring, not new build |
| Retention notifications | ML-personalized send-time and copy, mascot-voiced, dual notification types (habit + re-engagement) | Simple daily reminder is standard baseline; personalization is a maturity-stage add-on, not a starting point | Fix the baseline (toggle, tap, formatting) first; treat ML personalization as explicitly future, matching what a mature product added *after* nailing the basics, not before |
| Accessibility | Table-stakes screen reader support on primary flows is standard among major consumer apps at this scale (legal exposure + App Store/Play Store review risk in some markets) | Baseline: every interactive control has a role and label; dynamic type doesn't break layout | Close the measured gap (Press component default, icon-only labels, font-scale bug) — matches baseline, doesn't chase certification |
| Content-authoring safety | Larger competitors run on staged CMS environments (draft → review → publish) with versioning and audit trails, built by dedicated platform teams | Standard modern CMS pattern: draft/publish separation + diff-before-overwrite | A lightweight, solo-appropriate version of the same idea: pre-publish diff guard that blocks unreviewed overwrite, without building a full staging/review CMS |

## Sources

- [The essential guide to mobile paywalls for subscription apps — RevenueCat](https://www.revenuecat.com/blog/growth/guide-to-mobile-paywalls-subscription-apps) — MEDIUM-HIGH confidence (vendor content but widely cited industry reference, corroborated across multiple RevenueCat pages)
- [Hard Paywalls — RevenueCat docs](https://www.revenuecat.com/docs/playbooks/guides/hard-paywall) — restore purchases and paywall-dismissal guidance
- [Implementing cross-device lifetime purchase — RevenueCat Community](https://community.revenuecat.com/general-questions-7/implementing-cross-device-lifetime-purchase-with-future-account-system-integration-5782) — cross-device entitlement pattern (identify by user id)
- [Hard paywall vs. freemium: lessons from a 75% LTV lift — RevenueCat/Sub Club](https://www.revenuecat.com/blog/growth/hard-paywall-vs-freemium) — trial-start and retention comparison data (MEDIUM confidence, single-vendor-reported study)
- [Duolingo has cracked the notifications game — Medium](https://medium.com/@ar_o_ra/duolingo-has-cracked-the-notifications-game-45050e53242f) — MEDIUM confidence, secondary analysis
- [Duolingo's Habit-Forming Reminders: A UX Breakdown](https://www.digia.tech/post/duolingo-habit-forming-reminders-retention-architecture/) — streak/notification architecture analysis, MEDIUM confidence
- [Duolingo — Streak System Detailed Breakdown & Design](https://medium.com/@salamprem49/duolingo-streak-system-detailed-breakdown-design-flow-886f591c953f) — streak retention mechanics, MEDIUM confidence
- [React Native Accessibility docs — reactnative.dev](https://reactnative.dev/docs/accessibility) — HIGH confidence, official framework documentation
- [React Native Accessibility Guide 2026 — BuildWithAccess](https://buildwithaccess.com/blog/react-native-accessibility-guide-2026) — accessibilityLabel/accessibilityHint semantics, regulatory deadline claims (EAA June 2025, ADA Title II April 2026) — MEDIUM confidence, verify specific deadline applicability before treating as a hard compliance requirement for this app
- [Notifications — Expo documentation](https://docs.expo.dev/versions/latest/sdk/notifications/) — HIGH confidence, official SDK docs
- [Expo push notifications setup](https://docs.expo.dev/push-notifications/push-notifications-setup/) — HIGH confidence, official docs; token registration pattern
- [Deep Linking With Expo Push Notifications — Pushbase](https://pushbase.dev/blog/deep-linking-with-expo-push-notifications) — MEDIUM confidence, third-party but Expo-Router-specific and consistent with official docs
- [What Is a Single Source of Truth & How to Build It — Strapi](https://strapi.io/blog/what-is-single-source-of-truth) — MEDIUM confidence, general CMS/data-architecture pattern
- [Headless CMS Security: Best Practices for 2026 — Strapi](https://strapi.io/blog/headless-cms-security) — draft/publish workflow and review-gate pattern, MEDIUM confidence
- Codebase: `ealch-v2/src/services/purchases.ts`, `ealch-v2/src/services/entitlement.ts` — HIGH confidence, direct code read; corrects a stale claim in `.planning/codebase/CONCERNS.md`

---
*Feature research for: Ealch launch-readiness (monetization/entitlement, retention notifications, accessibility, content-publish safety)*
*Researched: 2026-09-19*
