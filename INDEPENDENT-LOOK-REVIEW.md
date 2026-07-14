# Independent Look Review — Ealch

**Date:** 2026-07-14
**Method:** Code read only. No project `.md` document was used as a source of truth; every claim below is anchored to a file and line. Where this review contradicts an existing planning doc, the code wins.
**Scope:** `ealch-v2` (Expo mobile app, ~12k lines TS), `ealch-admin` (Next.js Ops Console), Supabase project `ogbothupjcivwruesgsu`.

---

## 1. Verdict

Ealch is a **beautifully engineered stage set**. The infrastructure is real and in places genuinely excellent. The product inside it is a demo that a user exhausts in roughly fifteen minutes, and a significant fraction of what is on screen is fabricated data presented to the user as their own.

The three most recent commits (`Home: the honesty pass`, `Store: zero the seeded progress`, `Progress engine: derive the today strip from a real session log`) show this was already understood and the cleanup had begun. That instinct is correct. But the cleanup stopped at Home, and **deleting fake numbers one screen at a time is an infinite regress** unless the engines that would produce those numbers legitimately are built. Building those engines is what this plan is about.

Health signals:

| Signal | State |
|---|---|
| `tsc --noEmit` | Passes clean |
| `npm test` | 37 pass, 0 fail |
| Test coverage | Pure utils only (`score`, `time`, `i18n`, `progress.logic`). No screen or flow coverage. |
| Screens | 25 |
| Real lessons | **3** (behind a UI advertising 43 units) |
| Monetization | **None.** No RevenueCat, Stripe, or IAP in `package.json`. |
| Server sync | **None.** All state is local AsyncStorage. |

---

## 2. What is genuinely good (protect this)

The problem list below is long. It should not obscure that several things here are better than they need to be.

- **`src/services/stt.ts` is the best file in the repo.** Lazy native binding so a missing module cannot take down the bundle; contextual-string biasing toward the target phrase; persisted WAV with an Edge backstop; an explicit `available: false` path so the UI can self-assess rather than fake a score. The header comment — *"This module NEVER invents a transcript"* — is the right philosophy and the code honours it.
- **`src/utils/score.ts`** is a real, tested scoring function: blended normalized-Levenshtein and word coverage, diacritic-folded, with each expected word consumable once.
- **`src/store/progress.logic.ts`** is a clean pure module with careful reasoning about timezones, DST and streak-freeze semantics. It is testable under `node --test` with no React Native imports, and that pattern works. **It is the template for every engine built from here on.**
- **`ealch-admin`** already implements a full `draft → in_review → published → archived` state machine with transactional publish, revision history, an author/approver role split, and an audit log. See §7.
- Auth is real Supabase, not faked. The theme and i18n systems are solid (500 keys, FR/EN).

**The moat is the speech pipeline.** Nothing else in this codebase is hard to replicate.

---

## 3. What is broken

### Tier 1 — The app lies to the user about themselves

These are not bugs. These are fabrications rendered as the user's own data, and each is a refund, a one-star review, or an App Store rejection.

| # | Location | Finding |
|---|---|---|
| 1.1 | `app/speak.tsx:260-267` | Renders a **hardcoded sentence** — `« Je voudrais un café allongé et un croissant, s'il vous plaît. »` — under the label **"YOU SAID"**, regardless of what the user said. It sits directly *below* the real recognizer transcript, so the screen shows a true transcript and a fabricated one, stacked, and the fabricated one gets the prominent label. The `T.liaisonChip` badge beside it is a static pseudo-diagnosis of that fake sentence. **The single worst thing in the app.** |
| 1.2 | `app/roleplay.tsx:73-101` | **The microphone is a prop.** Tapping it waits `1800ms` on a `setTimeout`, then appends the *scripted* user line to the transcript styled as the user's own speech. Nothing is recorded, nothing is scored. It then calls `logSession('roleplay', 3)` — so a user can complete the drill and light their streak with the phone face-down on the table. |
| 1.3 | `app/feedback.tsx` | **"Le Rapport" contains no real data of any kind.** Hardcoded 82% confidence (`:73`), hardcoded skill scores `[74, 86, 68]` (`:52`), hardcoded error critiques including *"A 1.8s pause: you translated in your head."* It is the destination of every drill's result CTA, so three different drills at four levels all produce the identical report. |
| 1.4 | `app/player.tsx:36-49, 64, 87-94` | **The scrubber is a `setInterval` counter.** It fills over ~18s against a hardcoded `2:04` duration while the actual audio is a four-word TTS utterance. Skip-forward, skip-back and the speed control are all dead (`tts.speak` already accepts a `slow` option that is never passed). Logs a session for watching a bar move. |
| 1.5 | `app/profile.tsx:156` | The practice calendar is `done: d < td && d % 4 !== 0` — it **algorithmically fabricates a month of activity**, ignoring the session log entirely. |
| 1.6 | `app/profile.tsx:269-271` | Stat cards hardcode `14,6` hours, `38` conversations, `82` confidence. A brand-new install shows a user 14.6 hours of history they never had. |
| 1.7 | `app/settings.tsx:288-295` | Hardcoded `Visa ····4212` payment method, beside a **"Restore purchases" button with no `onPress` handler**. That combination alone is an App Store rejection. |
| 1.8 | `app/den.tsx:27-31, 256` | Unit progress hardcoded `{sons: done 2, a1: done 3, a2: done 0}` and an inline progress bar literally `pct={55}`. A fresh user sees five completed units. |
| 1.9 | `app/smartreview.tsx:98, 152` | `23` items hardcoded in the ring; `strokeDashoffset={111}` is a hand-tuned arc. Screen promises *"Items return in 1 → 3 → 7 → 21 days"*. **There is no SRS.** |
| 1.10 | `app/downloads.tsx` | **Pure mock.** `TOTAL_MB = 2048`, `catMbs = [420,180,60]`, and initial state claims two collections are already downloaded. No `expo-file-system` anywhere in the repo. No download occurs. |
| 1.11 | `app/chat.tsx:15-18, 60` | Seed message asserts a fake analysis of a session the user never had. `stamp()` returns `'21:0' + (5 + len % 4)` — **every message in every conversation is stamped 21:05–21:08**, at any hour of any day. |
| 1.12 | `app/home.tsx:82` | Review count `'23'` is a string literal. (Carries an honest `TODO(SRS)` — the only fabrication in the app that admits it.) |
| 1.13 | `src/services/auth.ts:141` | **Account deletion is entirely broken.** `deleteAccount()` invokes the `delete-account` Edge Function — **which is not deployed** (verified against the live project, see §6.1). Every deletion attempt fails. This is not the narrow unconfirmed-user bug in `2.4`; it is a **total Apple 5.1.1(v) failure for every user**, in the screen written to satisfy that guideline. |

### Tier 1b — Live infrastructure findings (verified against Supabase `ogbothupjcivwruesgsu`)

| # | Finding |
|---|---|
| 1.14 | **`coach` is a fully open, unauthenticated LLM proxy.** It creates a **service-role** Supabase client (`coach/index.ts:38-40`) and then `Deno.serve`s (`:179`) with **no `getUser()` call, no caller check, and no rate limit of any kind**. The only `Authorization` header it touches is the *outbound* one to NVIDIA (`:69`). Anyone holding the anon key has a free LLM billed to this project. Contrast `delete-account`, which does caller verification correctly. |
| 1.15 | **`verify_jwt: true` is NOT a fix for 1.14, and believing otherwise is the trap.** The Supabase anon key **is itself a valid JWT** (`role: "anon"`, `iss: supabase`) and it **ships inside the app bundle**. A gateway that "requires a valid JWT" therefore accepts the exact key an attacker extracts from the APK. Enabling `verify_jwt` on `coach` would change nothing while creating the appearance of a fix. **The real fix requires a per-user identity** — see 1.17. |
| 1.16 | **`tts` is deployed, open, and has zero callers.** `src/services/tts.ts:21-24` contains a dead `if (provider !== 'device')` branch whose body is a comment. The app has never called the `tts` Edge Function and currently cannot. The function proxies **Fish Audio and ElevenLabs** (both paid; ElevenLabs bills per character) and throws only if no provider key is set. **Action: check Supabase → Edge Functions → Secrets for `ELEVENLABS_API_KEY` / `FISH_AUDIO_API_KEY`.** If either is set, this is a live billable endpoint serving no one. If neither is set, it 502s harmlessly. *Decision (Paul): keep it deployed — it is wanted for Phase 7. Note that undeploying would never have deleted the source, which lives in git regardless.* |
| 1.17 | **The root cause of 1.14 is that guests have no server identity.** `completeOnboarding` sets `signedIn: true` locally for a user who exists nowhere on the server, so `coach` *cannot* demand a real user JWT without breaking guests. This same gap is why nothing syncs and why `signedIn` is never reconciled with Supabase. *Decision (Paul): the guest path will be removed.* Once every user is a real `auth.users` row, `coach` can do a `getUser()` check exactly like `delete-account`, per-user rate limiting becomes possible, and Phase 6 sync gains its precondition. **Removing guests is therefore a security fix, a sync prerequisite, and a simplification in one move.** |
| 1.18 | **The app does not know its own backend is live.** `coach` is `ACTIVE` (v7), yet `llm.ts` silently serves 3 rotating canned replies on any failure and never tells the user. Chat's header meanwhile reads *"your coach · online · UNLIMITED"*. The fallback may be masking a real, fixable integration error rather than an absent backend. **Test the deployed function before assuming the coach is offline.** |

### Tier 2 — Real bugs

| # | Location | Finding |
|---|---|---|
| 2.1 | `app/review.tsx:41` | **`reviewCleared` is a one-way latch.** Set once, never cleared by anything. Finish the 4-card review a single time and Smart Review reads "All caught up" — permanently, forever. |
| 2.2 | `app/onboarding.tsx:158` | **Step 1 can permanently brick itself.** `submitAccount` returns on the `stepRef.current !== 1` guard *before* resetting `acctPending`. Navigate away mid-signup and return: Continue is disabled forever, unrecoverable without an app restart. |
| 2.3 | `app/onboarding.tsx:205` | Identical bug in the mic check. Leave step 9 while recording and return: UI stuck on "recording", mic button can never restart. |
| 2.4 | `src/services/auth.ts:31-33` | **Apple 5.1.1(v) hole in the account-deletion screen itself.** With email confirmation on, `signUp` returns a null session but `attempt()` reports `ok: true`; onboarding marks the user signed in. That user can then never delete their account — `deleteAccount` returns `DELETE_NO_SESSION` and `delete-account.tsx:61-72` refuses to fall through to local erase for non-guests. |
| 2.5 | `app/sentence.tsx:121` | The SAY step runs the recognizer, scores it, and **throws the result away** — `said` / `saidPartial` are never rendered. A denied mic is indistinguishable from a perfect utterance. |
| 2.6 | `app/speak.tsx:135` | Clamps at the last coach line. No completion, no summary, no score. Exiting via the X logs **nothing at all**, however long the user practised. |
| 2.7 | `app/onboarding.tsx` | **Android back-button trap.** The wizard is `useState`, not routes, so the system back gesture pops the entire route and discards all 10 steps. |
| 2.8 | `src/components/Waveform.tsx:23` | **Every waveform in the app is `Math.sin()`.** Meanwhile `stt.ts:56` exposes a real `onVolume` callback, fully wired at `stt.ts:273-293`, that **no screen passes**. The plumbing to make them real already exists and is unused. |
| 2.9 | `app/dictation.tsx:55-65` | Play budget decrements *before* speaking, and `tts.speak` swallows failures. A user with no FR voice spends all 3 plays hearing nothing, then must transcribe a sentence they never heard. |
| 2.10 | `app/dictation.tsx:75` | `addAccent` appends to the end of the string, not at the cursor. Tapping `é` mid-sentence corrupts the answer. |
| 2.11 | `app/_layout.tsx:65,77` | **Hydration race.** Render gates on `useStore.hydrated` only; `useProgress` rehydrates independently and is never awaited, so Home can paint a zero-streak state before the session log loads. |
| 2.12 | `src/services/errors.ts:58-60` | `report()` is an empty function. Every logged crash goes nowhere. |
| 2.13 | flashcards / voiceflash / dictation / player | No unmount cleanup: `tts.stop()` / `stt.abort()` never called, timers never cleared. `sentence.tsx:46-53` does it correctly and is the model. |

### Tier 3 — Structural gaps

- **Content is a demo.** 3 lessons behind a 43-unit tree. 8 flashcards. **One** sentence-builder sentence. 3 role-play lines per level. 3 dictation sentences. 4 static review cards.
- **No SRS exists.** No scheduler, no due dates, no interval store. Every "personalized" surface in the app is therefore a literal.
- **Nothing syncs.** `profiles`, `sessions`, `review_items` (FSRS-shaped, with `stability` / `difficulty` columns) exist in `supabase/schema.sql` and are **never written**. The only PostgREST call in the entire client is `config.ts:43` reading `system_config`. Uninstall the app and the user's whole history is gone.
- **No monetization.** `upgrade()` (`useStore.ts:195`) is the sole writer of `premium`; its sole caller is a free button. **Nothing anywhere gates on `premium`.** It swaps four labels in Settings.
- **The placement test places nobody.** One hardcoded question; `Q7` and a `58%` progress bar are literals; `isA2 = plSel === 0 || plSel === null` — **answering nothing returns A2**. It writes to no store and is not part of onboarding.
- **`level` selects no content.** Derived from a single radio button (`exp`), read in exactly two places, both cosmetic.
- **Dead state:** the accent/region picker (Parisienne etc.) is written in two screens and **read by no service**. Two of the three notification toggles (`report`, `nudge`) control nothing.

---

## 4. Component-by-component: goal vs reality vs premium verdict

| Component | Its actual goal | Reality in code | Premium user reaction |
|---|---|---|---|
| **Speak Mode** | The flagship: talk to Camille, get judged honestly | Real STT, real scoring, then **prints a sentence you never said** under "YOU SAID". No end, no summary. | Refund. This is fraud-adjacent. |
| **Role Play** | Live conversation practice | Mic is a `setTimeout`. Credits progress for silence. | Refund. |
| **Le Rapport** | The premium payoff: your evening report | 100% hardcoded. Same 82% for every human being. | Refund. |
| **Smart Review** | Spaced repetition of *your* mistakes | 4 static cards claiming "missed 2× in Role Play" on a fresh install. No SRS. One-way "caught up" latch. | The single most valuable feature, entirely absent. |
| **Player** | Immersive listening | Fake scrubber, fake duration, three dead transports, ~1.5s of TTS. | Embarrassing. |
| **Downloads** | Offline collections | Zero filesystem code. Claims 0.6 GB already used. | Embarrassing. |
| **Beginners' Den** | The curriculum spine | 3 real lessons of 43 units; 40 fall through to a generic player. | Empty. |
| **Voice Flash** | Say the word you see | **Works.** Best failure handling in the codebase (`:276-320`). Runs out after 5 items. | Good, but a 5-item feature. |
| **Flashcards** | Vocab drilling | **Works.** Real summary, real redo. 8 cards. | Good, but an 8-card feature. |
| **Dictation** | Listening → writing | **Works.** Real score, real done-screen. 3 sentences. | Good, but a 3-item feature. |
| **Sentence Builder** | Construct + say a sentence | Works, but **one sentence exists** and the SAY step discards the mic result. | One sentence. |
| **Coach (chat)** | Unlimited AI tutor | Silently serves 3 rotating canned replies when offline while the header says "online · UNLIMITED". Logs no progress. | Bait and switch. |
| **Onboarding** | Personalize the app | Collects 7 preferences; **`goal`, `pace`, `region` are read by almost nothing**. Mic check is real but discards its result. | Theatre. |
| **Profile** | Your real progress | Streak and week dots are **real**. Calendar and stat cards are **fabricated**. | Mixed, which is worse — it teaches distrust. |

**Would a premium user be happy? No.** They pay for five things and all five are theatre: a coach that listens, review that targets their weaknesses, a report about them, content that does not run out, and progress that is safe. The one mercy: **there is currently no way to pay**, so no one has been sold this yet.

---

## 5. Decisions locked (this review's Q&A)

| Decision | Choice |
|---|---|
| **Monetization** | **LAST.** Deferred entirely to a separate review that will determine what is gated. No paywall, no SDK, no `premium` gating until then. |
| **Content delivery** | Hybrid. Versioned seed pack bundled in the binary (offline, zero-config first run) + Supabase channel for additions and corrections over the air. |
| **Content authoring** | LLM-generated in bulk, **human-reviewed before publish**. Never shipped unreviewed. |
| **Source of truth** | **DB is canonical.** Generator writes `draft` rows to Supabase → review/approve in the Ops Console → `published` → an export step compiles the seed snapshot and commits it to git. The git diff is a *mirror*, never a rival writer. Both review paths (Ops Console + PR) operate on one truth. |
| **Data model** | **One canonical corpus.** New `content_items` table for the ~8000 atomic word/sentence rows (stable IDs — the SRS key). Existing `content_units` keeps holding *documents* (lessons, scenarios, dictée sets) which are what a human reviews as a unit of work. |
| **App read path** | Published **snapshot artifact** + manifest in Supabase Storage. App checks manifest version, downloads the delta, caches it, merges over the bundled seed. One request, works offline, no RLS surface over 8000 rows. |
| **Audio** | **Device TTS only for now.** Real recorded/synthesized audio is deferred until after a real test run reveals where the gaps actually are. |
| **Accent picker** | Real *eventually* (audio generated per accent), but blocked on the audio decision above. Until then it remains dead state — see Open Questions. |
| **Lesson model** | **Unit contains N rich lessons.** New expanded lesson schema with typed sections: teach, steps, examples, use cases, hacks/clues, cheat sheet, common errors, focus, plus explicit read/write/speak/listen practice blocks. Today's `subs[]` are titles with no content behind them. |
| **Curriculum depth** | **Sons: deep and complete** — every lesson a slow learner, a repetition-learner, a use-case learner, a steps learner needs. Sourced from established French pedagogy, multiple sources for validity, covering all four skills. **A1 lessons 1-4 and A2 lessons 1-4 to the same depth.** Remainder ships over the air. |
| **Corpus scale** | Themed vocabulary, dictation, role play, la dictée and flashcards drawing on up to **8000 French words and sentences**, simple through complex. |
| **Facade screens** | **Build all four properly** (Player, Downloads, Placement, Le Rapport). None are deleted; all are useful. Placement must test multiple skills, but its result is **a suggestion only** — the user may proceed to any level regardless. |
| **Ops Console DB access** | Leave as-is (raw Postgres over the pooler, bypasses RLS). Internal, TOTP-protected, fully audit-logged. Revisit before a second admin user exists. |
| **The guest path** | **To be removed.** Today a guest is `signedIn: true` locally while existing nowhere on the server. That single gap causes three separate problems: `coach` cannot demand a real user JWT (`1.14`/`1.17`), nothing can sync (Phase 6), and `signedIn` is never reconciled with Supabase. Removing guests fixes all three at once. |
| **`tts` Edge Function** | **Stays deployed**, wanted for Phase 7. See `1.16` for the one secret to check. |

---

## 6. BLOCKING: the repository is forked in two

There are **two git repositories**, and they diverged from a shared ancestor (`d43e5ae`). **Each holds assets the other lacks. Neither is disposable.**

```
                       d43e5ae  "Implement Ealch v2 design as RN + Expo app"
                      /        \
       A  (working dir)          B  (C:\Users\harki\Ealchapp)
  Downloads\gitbuild appealch\   ├── ealch-admin/   ← the ONLY Ops Console
    ├── ealch-v2/                └── ealch-v2/      ← STALE (still on NativeWind)
                                 
  A has:                         B has:
   · NativeWind removal           · ealch-admin (Next 16, 9 screens, :4000)
   · notifications + audio        · supabase/functions/coach/   ← EXISTS
   · errors.ts                    · supabase/functions/tts/     ← EXISTS
   · delete-account fn            · supabase/seed.sql + SETUP.md
   · progress engine              · NVIDIA provider resolver
   · THE HONESTY PASS             
   → 20bbf0b (HEAD)               → 193a0ae (HEAD)
```

Two consequences worth stating plainly:

1. **The `coach` and `tts` Edge Functions already exist** in repo B. The working copy's `llm.ts` proxies to a `coach` function and `stt.ts:325` says the backstop *"is not deployed yet"* — that may simply be false, because the code lives in the other fork.
2. **Repo B's `ealch-v2` is superseded** and must not receive work. It still carries NativeWind, which A explicitly removed.

**Resolution (Task 0 of Phase 1):** consolidate into a single repository containing `ealch-v2` (A's lineage, which is ahead) and `ealch-admin` (B's, the only copy). Because the histories share `d43e5ae`, this is a genuine merge, not a copy-paste: `ealch-admin/` lands as a pure addition with no conflicts, and conflicts inside `ealch-v2/` are resolved by taking A's side wholesale.

### 6.1 — Task 0 outcome (DONE, commit `d2e602e`)

The merge is complete. One repository now holds `ealch-v2` and `ealch-admin`. `tsc` passes, 37/37 tests pass. `ealch-admin` (157 files) landed as a clean addition; the three conflicts (`tsconfig.json`, `package-lock.json`, `tailwind.config.js`) were all resolved in A's favour, so the NativeWind removal stands.

Two files auto-merged in B's favour and were kept deliberately: `config.ts` and `schema.sql` now default the orchestrator to **NVIDIA Nemotron** rather than `claude-sonnet-5`. That is the matched pair for the `coach` Edge Function that arrived in the same merge, which resolves its provider server-side through an `AI_API_*` → OpenRouter → NVIDIA → Anthropic cascade.

**The Edge Function question is now settled, and the code was wrong in both directions.** Verified against the live project:

| Function | Live status | What the code believed |
|---|---|---|
| `coach` | **ACTIVE (v7)** | `llm.ts` silently falls back to 3 canned replies as if it were absent |
| `tts` | **ACTIVE (v7)** | `tts.ts:21-24` has a dead `if (provider !== 'device')` branch that never calls it |
| `stt` | **NOT DEPLOYED** | `stt.ts:325` says so. **This comment is correct.** |
| `delete-account` | **NOT DEPLOYED** | `auth.ts:141` invokes it as though it exists → finding `1.13` |

Also live: `send-email` (v4), `contact` (v2), `send-email-probe` (v1) — none referenced by the mobile app.

**Database state confirms the review.** 29 tables, RLS enabled on all. `profiles`, `sessions`, `review_items`: **0 rows** — nothing has ever synced. `content_units`: **0 rows** — the Ops Console has never published anything. `system_config`: 1 row, `system_prompts`: 3 rows, `admin_users`: 1 row. Everything else is empty.

### 6.2 — Actions taken and resolved

**✅ `delete-account` is deployed and verified (v1, ACTIVE, `verify_jwt: true`).** Finding `1.13` is closed at the infrastructure level. Probed against the live project:

| Probe | Result |
|---|---|
| `POST`, no `Authorization` header | `401 UNAUTHORIZED_NO_AUTH_HEADER` (gateway) |
| `POST`, anon key only, no user session | `401 invalid-session` (the function's own `getUser()` check refuses to delete) |
| `GET` instead of `POST` | `405 method-not-allowed` |
| `POST`, forged JWT | `401 UNAUTHORIZED_INVALID_JWT_FORMAT` (gateway) |

Account deletion now works. **The code-level half of the Apple 5.1.1(v) problem remains open** — Task 8 item 3, where a user with an unconfirmed email has a null session, is marked signed in, and still cannot delete. That is Phase 1 work.

**Still open, and deliberately not acted on:**

1. **`coach` is an open unauthenticated LLM proxy** (`1.14`). Blocked on removing the guest path (`1.17`), which Paul has decided to do. Not urgent while traffic is dev-only and there are no paying users, but it **must not reach launch**.
2. **`tts` stays deployed** by Paul's decision (`1.16`). **One thing to check:** Supabase → Edge Functions → Secrets. If `ELEVENLABS_API_KEY` or `FISH_AUDIO_API_KEY` is set, this is a live billable endpoint with no callers and no auth. If neither is set, it 502s and is harmless.
3. **Test whether `coach` actually works** (`1.18`) before assuming the chat feature is offline. It is deployed and active; the canned-reply fallback may be hiding a fixable bug, in which case the coach is closer to real than this review assumed.
4. **`DISABLE_TOTP=true`** is set in `ealch-admin/.env`. Correct for local development; **must not reach production.**

---

## 7. The Ops Console is already most of the content tool

`C:\Users\harki\Ealchapp\ealch-admin` — Next.js 16 App Router, Drizzle, Auth.js v5 + TOTP, running on `:4000`. **It already points at the same Supabase project as the mobile app** (`ogbothupjcivwruesgsu`), connecting as a raw Postgres role over the pooler.

**Already built — reuse as-is, zero work:**
- `content_units` with `status: draft | in_review | published | archived` and `kind: scenario | drill | dictation | curriculum_unit`.
- The full state machine in `src/app/admin/content/actions.ts`: `createUnit` → `submitForReview` → `publishUnit` → `archiveUnit`, each gated `auth() → assertCan() → mutate → audit() → revalidate`.
- **Transactional publish**: snapshots the outgoing body into `content_revisions`, bumps `version`, stamps `publishedAt`.
- **Revision history with restore** (`restoreRevision` → new draft).
- **Author/approver separation already exists**: the `content_editor` role has `content.write` but *not* `content.publish`; only `ops` / `super_admin` can publish. Editors see "Publish" disabled with *"Ops approval required."*
- Audit log with before/after JSON on every mutation.
- Content library with kind/status/level/locale filters, plus a learner-flag review queue (`content_flags`).

**Missing — this is the Phase 1/2 build:**
1. `content_items` table (the atomic corpus) and a `lesson` + `vocabulary` addition to the `content_kind` enum.
2. **Typed editors.** `BodyEditor.tsx` is a raw `<textarea>` with `JSON.parse` validation and `content_units.body` is untyped `jsonb`. A human reviewing LLM output needs per-kind forms.
3. **No LLM generation entry point.** `/admin/ai` is model *routing* config, not generation. Content has to land in `draft` from somewhere.
4. **The mobile app cannot read any of it.** `content_units` has **RLS enabled with zero policies** — the anon key can read nothing — and the app has no content fetch layer at all.
5. Provenance columns (generated-by / model / prompt version), a revision diff view, reviewer notes, bulk approve.

---

## 8. Strategic direction

Ealch currently attempts five products at once: Duolingo (the Den tree), Pimsleur (the player), ELSA (pronunciation), ChatGPT (the coach), and Anki (Smart Review) — on three lessons.

**Ealch should be one thing: the app that makes you speak French out loud and tells you the truth about how you did.**

That is the only claim the codebase can actually back, because the speech pipeline is genuinely strong, and it is the thing a free Duolingo account cannot do. Every other surface should exist to feed that loop, not to compete with it.

---

## 9. Build order

Monetization is **last**, by explicit decision, and is out of scope until a separate gating review. Content is the fork that determines everything upstream of it, so its rails come first.

| Phase | Name | Delivers |
|---|---|---|
| **0** | **Repo consolidation** | One repo, `ealch-v2` (A) + `ealch-admin` (B). Folded into Phase 1 as Task 0. |
| **1** | **Foundation: the canonical corpus + the attempt log** | The `Item` and `Lesson` schemas shared by app and admin. `content_items` in Supabase. The snapshot/manifest publish + fetch/cache/merge pipeline. Every drill reads from the corpus by stable ID. Every drill attempt is logged **against an item ID**. **Zero new content, zero new features** — the app renders exactly what it renders today, on real rails. See `PHASE-1-FOUNDATION-PROMPT.md`. |
| **2** | **Content generation + review** | LLM generation into `draft`, typed review editors in the Ops Console, provenance columns. Fill the deep Sons track, A1 1-4, A2 1-4, and the themed corpus. |
| **3** | **The SRS** | A pure scheduler module (modelled on `progress.logic.ts`, testable under `node --test`) over the attempt log. This is what makes "23 due", weak spots, and Smart Review real. |
| **4** | **The honesty pass, completed** | With real engines behind them, every Tier 1 fabrication is replaced by derived data rather than deleted. Le Rapport computes 82% instead of asserting it. |
| **5** | **Rebuild the four screens properly** | Player (real audio position), Downloads (real filesystem), Placement (multi-skill, suggestion-only), Le Rapport (from the attempt log). |
| **6** | **Sync** | Write `profiles` / `sessions` / `review_items`. Progress survives a reinstall — the precondition for charging anyone anything. |
| **7** | **Audio** | Real recorded/synthesized audio where the Phase-5 test run proves TTS is not good enough. Makes the accent picker real. |
| **8** | **Monetization** | Separate review. Gating decisions, RevenueCat, real entitlement checks. |

**Tier 2 bug fixes** (§3) are not a phase. They are cheap, they are independent, and several are ship-blockers on their own (`2.2` bricks onboarding; `2.4` is an Apple compliance failure). Fix them opportunistically, starting with `2.2`, `2.3`, and `2.4`.

---

## 10. Open questions, deferred

1. **The accent picker.** It is dead state today and is written in two screens. Audio per accent is deferred (Phase 7), so until then the picker promises a personalization the app does not perform. Decide: hide it until Phase 7, or leave it visible and accept the dishonesty.
2. **Placement scope.** Agreed it must test multiple skills and that its result is a *suggestion only*. Still to specify: how many questions, which skills, adaptive or fixed-form, and whether it writes `level` at all.
3. **`goal` and `pace`.** Onboarding collects both. `pace` feeds `goalTarget()` and is real. **`goal` is read by nothing.** Either wire it to content selection or stop asking for it.
4. **The 8000-item corpus and the seed pack.** Agreed: the complete Sons track, A1/A2 lessons 1-4, and a core themed vocabulary subset ship in the binary; the rest arrives over the air. The exact seed cut line should be set once the corpus exists and its real size is known.
5. **What is free and what is paid.** Explicitly deferred to the monetization review. Nothing should be gated before then.
