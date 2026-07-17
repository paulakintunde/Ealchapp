# Ealch v2 — Content Plan Part 4 Blockers: Execution Prompt Pack

**Date:** 2026-07-13 · **Source plan:** `CONTENT-CURRICULUM-AND-GENERATION-PLAN.md` Part 4 (issues 1–13) · **Companions:** `AUDIT-AND-COMPLETION-PLAN.md`, `ONBOARDING-FIX-PROMPTS.md`

Goal of this pack: resolve every Part 4 issue **without breaking the app**, starting with issues that can be **fully closed** by one prompt, then partials, then cheap adjacent completers. Every prompt ends with the same invariant: `npx tsc --noEmit` passes, `npx expo export` bundles, and every screen still works offline with the seed content — no prompt may leave the app in a state where content fails to render.

---

## 0. Code-verified findings that CHANGE the source plan

These were verified against the working tree on 2026-07-13. They materially reduce or re-route the risk the plan doc assumed. Do not skip this section — the prompts below depend on it.

| # | Finding | Evidence | Consequence |
|---|---|---|---|
| F1 | **There is NO persisted per-unit progress anywhere.** `useStore.ts` persists only `streak / reviewDue / reviewCleared / weekDots / freeze`. Den progress is hardcoded UI state: `sons: {done: 2, active: 2}, a1: {done: 3, active: 3}, a2: {done: 0, active: 0}` | `app/den.tsx:27-31`, `src/store/useStore.ts:209-235` (partialize) | Issue 1's feared "migrate users' saved progress keys" has **no data to migrate**. The slug fix touches exactly: `curriculum.ts` (add ids), `den.tsx:180` (`extendedLesson[\`${denTab}-${i}\`]`), and the 3-entry `extendedLesson` map. That's it. Risk drops from HIGH to LOW. |
| F2 | The index-keyed surface is smaller than the plan says. Only artifacts: `extendedLesson` map keys (`'sons-2'`, `'a1-3'`, `'a2-0'`), the key construction at `den.tsx:180`, and `a2Subs` positional alignment to `currA2`. The `lessons` record keys (`sons3`, `a1_4`, `a2_1`) are **content keys passed as a route param** (`/lesson?key=`) — independent of unit identity and safe to leave as-is. | `src/content/curriculum.ts:70-74`, `app/den.tsx:180-185` | The slug migration does NOT need to touch `lessons.ts`, `lesson.tsx`, or any route. |
| F3 | **The client never queries `system_prompts`.** The only prompt consumer is `coach.ask()` which calls a Supabase **Edge Function** (`sb.functions.invoke`) — Edge Functions use the service role and bypass RLS. | `src/services/llm.ts:17-33` | Issue 11 (RLS world-readable prompts) is a **pure SQL change with zero app blast radius**. Even revoking client read entirely cannot break the app. |
| F4 | **`zod` is not in `package.json`.** The plan's "client Zod-validates every payload" implies a package install, which requires Paul's approval (workspace rule). | `ealch-v2/package.json` dependencies | ContentService v1 ships with hand-rolled type guards (zero new packages, no gate). Zod is an optional upgrade behind Gate P below. |
| F5 | `supabase/schema.sql` uses `create table if not exists` but **`create policy` is not idempotent** — re-running the file errors on existing policies. | `supabase/schema.sql:70-76` | All new SQL lands in a **separate additive file** (`supabase/content-schema.sql`); the policy fix for issue 11 uses `drop policy if exists` + recreate. Never re-run the original file. |
| F6 | Placement is a **single hardcoded question** with a fixed `A2` estimate chip and a decorative `Q7 / 58%` progress bar. There is no loop, no scoring, no item bank. | `app/placement.tsx:27-34,88-98` | Issue 8's placement half is **inherently partial**: honest-UI fixes can land now, but a real adaptive test needs the placement item bank (content Wave 2). Don't pretend otherwise. |
| F7 | Voice Flash's icon ceiling is one map: `ICON_MAP: Record<VfIcon, IconName>` in `voiceflash.tsx` + the closed union in `content/index.ts:33`. | `app/voiceflash.tsx:16-20`, `src/content/index.ts:33-42` | Issue 7 is a ~25-line widening (accept emoji strings alongside named icons), fully closable today with graceful fallback. |
| F8 | Two audit fixes are **already in the working tree**: `onRehydrateStorage` hang (A5) is fixed, `userName: ''` + v2 migration landed. But the fake seeds `streak: 14, reviewDue: 23, weekDots: [true,…]` **remain** (audit B3, store-rejection risk). | `src/store/useStore.ts:130-134,197-207,238-241` | Prompt A touches the exact lines adjacent to these seeds — zeroing them there is the cheapest possible completion of that B3 slice (Category C below). |
| F9 | ContentService has a proven in-repo pattern to copy: `config.ts` (module-level `current`, `getConfig()` sync read, `refreshConfig()` async Supabase→cache→defaults chain, never throws). | `src/services/config.ts` | Prompt C is a pattern transplant, not novel architecture. The seed files in `src/content/` stay forever as the zero-config fallback — identical philosophy to `DEFAULTS` in config.ts. |

---

## 1. Classification — every Part 4 issue

**COMPLETE** = one prompt fully closes it, app-safe. **PARTIAL** = prompt closes what code can close; remainder needs content volume, external accounts, or humans. **DECISION** = no code; closed by recording a decision. **Category C** = not strictly Part 4, but adjacent lines make it nearly free to finish.

| Issue | Severity | Class | Closed by | What COMPLETES with the fix | What still BREAKS if skipped | Residual after fix |
|---|---|---|---|---|---|---|
| 1 — No stable content IDs | 🔴 | **COMPLETE** | Prompt A | Every unit gets a permanent slug; `extendedLesson` re-keyed; den keying index-free; store gains slug-keyed progress (empty, honest). DB content, progress sync, and reordering all become safe. | Any DB row, any progress record, any analytics event created before slugs is corrupted by the first curriculum reorder. This is why it's first. | None. |
| 2 — No content tables / ContentService | 🔴 | **COMPLETE** (in 2 halves) | Prompt B (SQL) + Prompt C (app) | Content plane exists (`content_units`, `content_items`, `audio_assets`, `content_releases` + RLS); ContentService with seed fallback; units seeded from curriculum. Generation output has a home; app can read published content. | Issue-4/12 pipeline work has nowhere to write; every generated item would live in throwaway files. | Screens beyond Den/Lesson read seeds until each mode is wired (deliberate, per-mode follow-ups as content arrives). |
| 3 — R2 ↔ Supabase no glue | 🔴 | **COMPLETE** (schema+convention) after Gate R decision | Prompt B | `audio_assets` manifest table, deterministic key convention documented in-schema, download-pack query becomes possible. | Orphaned files, broken URLs, no download packs — exactly as plan warns. | Actual R2 bucket + custom domain creation is console work (Gate R), not code. |
| 4 — LLM French can't be trusted raw | 🔴 | **PARTIAL** | Prompt E | Machine gate (schema validation, typography lint, level heuristics, recycle check, dedupe) + LLM cross-check loop, runnable end-to-end. | Unreviewed French reaches beginners — pedagogically toxic, per plan. | Human 15% sample review (Gate H) is a process, not code; stays open until a reviewer exists. |
| 5 — Exam copyright | 🔴 | **PARTIAL** | Prompt B (schema) + Gate D (text) | `format_version` required for exam payloads; disclaimer string added to `i18n/strings.ts` ready for any exam UI. | Exam banks generated without `format_version` silently rot when TEF/TCF formats change; missing disclaimer = store-listing truthfulness risk. | Visible in-app placement of the disclaimer waits for exam UI to exist (no exam screens today — nothing to attach it to). |
| 6 — Accent multiplies audio cost | 🟠 | **DECISION** | Gate register (§2) | One-accent v1 recorded; `audio_assets.accent` column already designed to hold variants later — nothing to rework. | Accidentally generating N-accent audio multiplies TTS cost ~linearly. | None once recorded. |
| 7 — Voice Flash can't scale | 🟠 | **COMPLETE** | Prompt D | `VfItem` accepts `image_ref` (emoji or named icon) with fallback; generation is no longer capped at 5 icons; existing 5 items render identically. | vf_item generation stays capped at the 5-icon vocabulary. | Optional future: real illustrations in R2 (schema field already carries it). |
| 8 — Fake STT & placement | 🟠 | **PARTIAL — mostly routed elsewhere** | STT: `ONBOARDING-FIX-PROMPTS.md` Prompt 4/Gate 3 (already owns it — do NOT double-edit `stt.ts`). Placement honesty: Prompt A footnote. Real placement: content Wave 2. | Content strategy stays safe: speak_drills authored as honest listen-and-repeat work with or without STT (plan already mandates this). | Fake scoring is an Apple 2.3.1 risk (audit §5-4). | Real adaptive placement needs the item bank; real STT needs the dev-build gate. |
| 9 — Offline volume / AsyncStorage limits | 🟠 | **PARTIAL (design-constraint now, tech later)** | Prompt C design rules | ContentService hard-caps sync to level ±1, text-only, with a serialized-size guard — the constraint is enforced from day one. | Naïve "sync everything" hits Android AsyncStorage limits at Wave 2–3 scale. | expo-sqlite migration decided only if the guard trips (Gate P — package approval). |
| 10 — i18n multiplication | 🟡 | **DECISION** | Gate register (§2) | FR content + EN glosses v1 recorded; schema keeps named gloss fields (`en`) so `es`/`zh` are additive later. | 7× gloss generation/review cost if left ambiguous for the generation prompts. | None once recorded. |
| 11 — `system_prompts` RLS world-readable | 🟡 | **COMPLETE — zero risk (F3)** | Prompt B | Prompt IP no longer publicly readable; client verified untouched. | Master content-gen prompt (competitive IP) is publicly SELECTable by anyone with the anon key. | None. |
| 12 — TTS provider not wired | 🟡 | **PARTIAL** | Prompt E (bake-off harness) + Gate T | 20-sentence bake-off script with dictation-trap test set, provider-agnostic worker interface. | Committing ~10k clips to an untested provider; wrong liaison/number reading at scale. | Provider choice + API keys are Paul's (Gate T); worker isolates it so no regeneration needed either way. |
| 13 — Cost sanity | 🟡 | **DECISION (informational)** | Gate register (§2) | Budget envelope acknowledged (~$50–400 TTS, low-$100s LLM, human review = real cost). | Nothing breaks; unbudgeted human review stalls Wave 1 QA. | None. |

### Category C — adjacent, nearly-free completers (bundled into prompts, flagged in-prompt)

| Adjacent item | Origin | Bundled into | Why nearly free |
|---|---|---|---|
| Zero fake progress seeds (`streak: 14`, `reviewDue: 23`, filled `weekDots`) | Audit B3 (store-rejection family) | Prompt A | Prompt A already edits the exact neighborhood of `useStore.ts`; honest slug-keyed progress makes fake counters *more* visibly wrong, so fixing together avoids a second pass. **Intentional UX change:** fresh installs show real zeros. |
| Replace den's hardcoded `done/active` with store-derived progress | Same B3 family | Prompt A | The slug work rewrites the same `tracks` object in `den.tsx`; deriving from `completedUnits` is ~10 lines more. |
| Placement honesty labels (kill fake `Q7`/`58%`/fixed-estimate implication) | Audit §5-4 | Prompt A (footnote task) | Text/props-only change; no logic. Full rebuild waits for the item bank. |
| `content_version` key in `system_config.config` | Plan §2.2 | Prompt B | One line in the seed JSON + one optional field on `RemoteConfig` — pairs with `content_releases`. |

### Explicitly NOT in this pack (routed, with reasons)

- **`stt.ts` honesty / real STT** — owned by `ONBOARDING-FIX-PROMPTS.md` Prompt 4 + Gate 3. Editing it here would collide with that pack's in-flight scope.
- **Real adaptive placement** — blocked on placement item bank (content Wave 2 per plan §1.3). Tracked, not promptable today.
- **R2 bucket/domain creation, TTS provider account, human reviewer hiring** — console/process work, in the Gate register.
- **Wave 1 generation itself** — starts only after Prompts A–C land and Gates R/T close ("prove the pipe with one bundle" milestone).

---

## 2. Gate register — decisions & approvals that pause work

Same contract as the onboarding pack: a prompt that hits an open gate stops that sub-task, leaves the fallback in place, and reports the gate open. Nothing is silently worked around.

### Gate R — R2 strategy (blocks: Prompt E audio worker; Prompt B proceeds regardless)
- **Decision:** public bucket via R2 custom domain (recommended by plan §2.3 + issue 3: enables CDN caching + offline downloads; content is not secret) **vs** signed URLs.
- **Default if unanswered:** public bucket + custom domain, unguessable content-addressed keys. Prompt B encodes the key convention; only actual bucket creation waits.

### Gate A — Accent v1 (blocks: nothing in code; governs Prompt E generation configs)
- **Decision:** one neutral `fr-FR` accent (1 female + 1 male voice) for all v1 audio. `profiles.accent` field stays; variants deferred to high-value slots later.
- **Default:** yes, one accent. Recording this closes issue 6.

### Gate G — Gloss languages v1 (governs Prompt E job specs)
- **Decision:** FR content + EN glosses only. Additional gloss languages are additive payload fields later, never regeneration.
- **Default:** yes. Recording this closes issue 10.

### Gate D — Exam disclaimer copy (blocks: the string content in Prompt B's i18n task)
- **Needed:** final EN+FR wording of "not affiliated with / endorsed by France Éducation international or CCI Paris Île-de-France."
- **Default:** Prompt B ships a reasonable draft string marked `// TODO: legal review` — visible placement waits for exam UI anyway.

### Gate T — TTS provider + API keys (blocks: Prompt E bake-off *execution*; harness code proceeds)
- **Needed:** pick candidates (Fish Audio — already named in config — vs Azure vs ElevenLabs vs OpenAI TTS) and provide keys for the 20-sentence bake-off. Judge on French liaison quality + cost/character, per issue 12.

### Gate H — Human French reviewer (blocks: issue 4 full closure; everything else proceeds)
- **Needed:** a native/near-native reviewer for the 15% sample gate. Non-negotiable for Sons/A1 and exam model answers (plan §3.5-3). Budget line, not code.

### Gate P — Package approvals [PKG] (blocks: only the optional upgrades)
- `zod` — optional; Prompt C ships hand-rolled guards instead, so **no gate blocks Prompt C**.
- `expo-sqlite` — only if Prompt C's size guard trips at content scale (issue 9).
- Workspace rule: installs require Paul's approval; batch these with the onboarding pack's Gate 2 batch if possible.

### Gate S — Supabase project access (blocks: applying Prompt B's SQL + Prompt C online verification)
- Same as onboarding Gate 1: live project + `.env`. **Prompt B's SQL file and Prompt C's code land now regardless** — the offline seed path is the app's permanent fallback and is fully verifiable without Supabase.

---

## 3. Risk register — what could break, per prompt

| Prompt | Blast radius | Failure modes to guard | Mitigation baked into the prompt | Rollback |
|---|---|---|---|---|
| A | `curriculum.ts`, `den.tsx`, `useStore.ts` (persisted shape) | (1) Wrong slug↔unit pairing silently opens the wrong lesson. (2) New persisted field mishandled on existing installs. (3) Honest zeros look like "lost progress" to testers who saw fake seeds. | (1) Slugs generated *from* current index positions in one mechanical table, with the 3 `extendedLesson` pairings asserted by a self-check. (2) Additive field only — zustand `merge` fills defaults for old snapshots; **no version bump needed**, existing v2 `migrate` untouched. (3) Change-note in output; audit B3 wanted exactly this. | `git checkout -- ealch-v2/src/content/curriculum.ts ealch-v2/app/den.tsx ealch-v2/src/store/useStore.ts` — no data migration to undo (F1). |
| B | New SQL file + 1-line i18n string + config seed JSON. **Zero app-code paths.** | (1) Re-running old `schema.sql` errors on policies (F5). (2) RLS tightening locking out a client read. (3) Breaking the existing `config readable` policy. | (1) All new SQL in `content-schema.sql`, policy fix uses `drop policy if exists`. (2) Verified impossible — F3: no client read exists. (3) File never touches `system_config` policies. | Drop the 4 new tables + restore old prompts policy; nothing in the app references them yet. |
| C | New `content.ts` service + minimal read-path change in `den.tsx`/`lesson.tsx` | (1) Sync blocking launch or throwing at startup. (2) Malformed remote row crashing a screen. (3) Cache poisoning (bad payload persisted, re-read forever). (4) Storage bloat (issue 9). | (1) Copy config.ts contract exactly: sync `get*()` always returns something, async refresh never throws, fired fire-and-forget. (2) Per-row type guards; invalid rows skipped + counted, never rendered. (3) Validate **before** caching; cache key versioned by release. (4) Level ±1 cap + serialized-size guard with a hard log. | Delete `content.ts`, revert the two screen diffs; screens fall back to direct seed imports (kept working the whole time). |
| D | `content/index.ts` types + `voiceflash.tsx` render path | (1) Type widening breaking the 5 existing items. (2) Unknown `image_ref` rendering blank. | Union widened, not replaced — existing literals still typecheck; renderer falls back: named icon → emoji Text → keyword initial. | Revert 2 files. |
| E | New `scripts/content/` + `content-schemas/` — **outside the app bundle entirely** | (1) Accidental import from app code pulling Node deps into Metro. (2) Runner writing `status='published'` rows (skipping QA). (3) Prompt IP committed while RLS still open. | (1) Scripts live outside `ealch-v2/src`; verification step greps app imports. (2) Runner hard-codes `status='review'`; publish is a separate explicit command. (3) Prompt B (RLS) is ordered before E. | Delete the directories; zero app impact. |

**Global invariant (every prompt, non-negotiable):** after completion — `npx tsc --noEmit` = 0 errors · `npx expo export --platform android` succeeds · app boots with NO `.env` and every screen renders seed content · nothing new added to `dependencies` without a closed Gate P.

---

## 4. Run order

```
A (slugs + honest progress)     ── app-only, fully closable today
B (content plane SQL + RLS)     ── parallel-safe with A; apply to live DB when Gate S closes
C (ContentService)              ── needs A's slugs + B's tables (code lands offline-first regardless)
D (Voice Flash image_ref)       ── independent; any time
E (generation + QA + bake-off)  ── after B; execution waits on Gates T/H
      └─► then: "prove the pipe with one bundle" (a1-01) — the milestone everything above serves
```

Start with **A and B** — both are Category COMPLETE, and B is the single safest change in the entire pack (additive SQL, zero app paths, verified by F3).

---

## PROMPT A — Stable slugs + honest unit progress (issues 1 + 8-honesty; Category C: B3 seeds)

```
You are working on the Ealch v2 Expo app at ealch-v2/ (branch build/ealch-v2-expo).
Read CONTENT-CURRICULUM-AND-GENERATION-PLAN.md Part 4 issue 1 and
CONTENT-PART4-FIX-PROMPTS.md §0 findings F1/F2/F8 in the repo root first.
Expo SDK 57 — consult https://docs.expo.dev/versions/v57.0.0/ before writing code.

CONTEXT YOU MUST TRUST (verified): there is NO persisted per-unit progress in this
app. The only index-keyed artifacts are: the extendedLesson map in
src/content/curriculum.ts:70-74, the key construction `${denTab}-${i}` at
app/den.tsx:180, and a2Subs positional alignment. lessons.ts keys (sons3/a1_4/a2_1)
are route params — DO NOT touch lessons.ts or lesson.tsx.

TASKS (in order):

1. src/content/curriculum.ts — give every unit a permanent slug:
   - Change `Unit` to { id: string; title: string; sub: string }.
   - Slug format per the content plan: '{level}-{NN}-{kebab-short-title}', e.g.
     'sons-03-voyelles-nasales', 'a1-04-articles-definis', 'a2-01-verbes-reguliers'.
     NN is the CURRENT 1-based position, frozen forever (future inserts get new
     numbers at the end; position ≠ identity from now on).
   - Generate ids mechanically from the existing arrays. ASCII-only kebab
     (strip accents/apostrophes: "L'élision" → 'elision').
   - Convert a2Subs from a positional string[][] to ids: give each A2 unit a
     `subs: string[]` field on the unit itself (sub-lesson titles unchanged),
     removing the parallel-array coupling. Update the one consumer (den.tsx).
   - Re-key extendedLesson by slug. The three existing pairings MUST map:
     index 'sons-2' (Les voyelles nasales)  → new id of that unit → 'sons3'
     index 'a1-3'  (Les articles définis)   → new id of that unit → 'a1_4'
     index 'a2-0'  (Verbes réguliers)       → new id of that unit → 'a2_1'
   - Add a comment block: ids are permanent contracts shared with the Supabase
     content plane; never renumber, never derive from array position.

2. app/den.tsx — remove all index-keying:
   - Look up extendedLesson by unit.id (not `${denTab}-${i}`).
   - List rows keyed by unit.id (not key={i}).
   - Read sub-lessons from unit.subs (not a2Subs[i]).

3. src/store/useStore.ts — real progress, slug-keyed (additive; DO NOT bump the
   persist version and DO NOT touch the existing v2 migrate):
   - Add `completedUnits: string[]` (default []) + actions
     `completeUnit(id: string)` (idempotent append) and include the field in
     partialize. Old persisted snapshots lack the field — zustand's default merge
     fills it; verify this rather than assuming.
   - [ADJACENT — audit B3, intentional UX change] Zero the fake seeds in the same
     edit: streak: 0, reviewDue: 0, weekDots: all false. Note this in your output
     as a deliberate honesty change, not a regression.

4. app/den.tsx — derive progress from the store instead of the hardcoded
   tracks object: done = units in track whose id ∈ completedUnits;
   active = first non-completed unit's index. Keep the existing visual states
   (done/now/lock) exactly as they render today.

5. [FOOTNOTE — placement honesty, issue 8's promptable slice] app/placement.tsx:
   remove the fake specifics only: the hardcoded 'Q7' label, the fake 58% progress
   fill, and any copy implying multiple adaptive questions were asked. Keep the
   single question working; label the screen truthfully (e.g. 'PREVIEW' tag or
   neutral copy). Do NOT build scoring or an item loop — that is content-blocked.

DO NOT TOUCH: lessons.ts, lesson.tsx, stt.ts (owned by the onboarding prompt pack),
any billing/auth code, package.json.

VERIFY (all must pass, report each):
- npx tsc --noEmit → 0 errors.
- npx expo export --platform android → bundles clean.
- grep: no remaining `${denTab}-${i}` or a2Subs[i] patterns; no key={i} on unit rows.
- Self-check table in your output: the 3 extendedLesson slugs alongside their old
  index keys and unit titles, proving the pairing is unchanged.
- Runtime (web ok: npm run web): Den renders all 3 tabs; the 3 extended lessons
  (Les voyelles nasales, Les articles définis, Verbes réguliers) still open the
  SAME lesson content as before; A2 accordion opens; fresh profile shows 0 done /
  first unit active in every track.
- Report the B3 seed zeroing and placement relabel as intentional changes.
```

---

## PROMPT B — Content plane SQL + RLS fix (issues 2-schema, 3, 11, 5-schema; Category C: content_version)

```
You are working on the Ealch v2 Expo app at ealch-v2/ (branch build/ealch-v2-expo).
Read CONTENT-CURRICULUM-AND-GENERATION-PLAN.md §2.2–2.3 and Part 4 issues 2/3/5/11,
plus CONTENT-PART4-FIX-PROMPTS.md §0 findings F3/F5, before writing anything.

THIS PROMPT TOUCHES ZERO APP CODE PATHS. It creates one new SQL file, adds one i18n
string, and edits one JSON seed blob. Verified (F3): the client never SELECTs
system_prompts — the RLS change cannot break the app.

TASKS (in order):

1. Create ealch-v2/supabase/content-schema.sql — additive content-plane migration,
   header comment explaining it is applied AFTER schema.sql and is safe to re-run
   apart from policies (use `drop policy if exists` before every `create policy`):
   - content_units, content_items, audio_assets, content_releases exactly as
     specified in CONTENT-CURRICULUM-AND-GENERATION-PLAN.md §2.2 (copy the SQL,
     including indexes and the published/ready-only read policies).
   - In the audio_assets header comment, document the R2 key convention from §2.3:
     audio/fr/{voice}/{item_id}/{slot}[-slow].opus — deterministic, content-addressed,
     public-bucket strategy per Gate R default (note the gate).
   - Add a CHECK constraint or trigger-comment requiring exam items to carry
     payload->>'format_version' when exam is not null (issue 5). If a CHECK on
     jsonb is used: `check (exam is null or payload ? 'format_version')`.
   - Issue 11 fix, same file, clearly sectioned:
       drop policy if exists "prompts readable" on public.system_prompts;
       create policy "prompts readable" on public.system_prompts
         for select using (active = true);
     Comment: client verified to never read this table (Edge Functions bypass RLS);
     policy kept for potential future active-prompt reads.

2. system_config seed (in content-schema.sql, additive update statement — do NOT
   edit schema.sql): merge {"contentVersion": "0"} into the active config jsonb.
   Mirror it as an OPTIONAL field on RemoteConfig in src/services/config.ts
   (contentVersion?: string) — additive, no behavior change, DEFAULTS untouched.

3. src/i18n/strings.ts — add exam disclaimer string (EN + FR), key `examDisclaimer`,
   drafted per Gate D default, marked with a `// TODO: legal review (Gate D)`
   comment. It is NOT rendered anywhere yet — that waits for exam UI.

DO NOT: edit supabase/schema.sql (create policy is not idempotent — F5); touch any
screen; add packages; attempt to apply SQL to a live project unless a Supabase
project + credentials are configured (Gate S) — if absent, land the file and report
the gate open.

VERIFY:
- npx tsc --noEmit → 0 errors (config.ts + strings.ts edits are type-additive).
- npx expo export --platform android → bundles clean.
- SQL sanity: if Gate S is closed, apply to the project (or a branch DB) and prove:
  anon SELECT on content_units returns only status='published' rows; anon SELECT on
  system_prompts returns only active=true rows; re-running content-schema.sql does
  not error. If Gate S is open, statically lint the SQL and report the gate.
- Output a table: each Part 4 issue this prompt closes (2-schema, 3, 11, 5-schema)
  with its closing artifact.
```

---

## PROMPT C — ContentService with seed fallback (issue 2-app; issue 9 constraints)

```
You are working on the Ealch v2 Expo app at ealch-v2/ (branch build/ealch-v2-expo).
PREREQUISITES: Prompt A (slugs) and Prompt B (tables) must be merged. Read
CONTENT-CURRICULUM-AND-GENERATION-PLAN.md §2.4 + Part 4 issue 9, and
CONTENT-PART4-FIX-PROMPTS.md findings F4/F9 first.

PATTERN CONTRACT: copy src/services/config.ts exactly — module-level cache,
synchronous getter that ALWAYS returns usable data, async refresh with
Supabase → AsyncStorage cache → in-repo seed fallback, never throws, safe with no
.env. The seed files in src/content/ are the permanent zero-config fallback and
must keep working forever.

TASKS (in order):

1. Create src/services/content.ts:
   - Types: ContentUnit (id, level, block?, position, title, sub, subs?) aligned
     with Prompt A's Unit-with-id shape and the content_units columns.
   - getUnits(level: 'sons'|'a1'|'a2'|...): ContentUnit[] — synchronous; returns
     remote-cached units when present, else units built from the curriculum.ts
     seeds (map currSons/currA1/currA2 to ContentUnit).
   - getLesson(key: string): Lesson | null — cached remote lesson payload for the
     unit if present, else lessons.ts seed, else null.
   - refreshContent(): Promise<void> — reads content_releases latest version; if
     unchanged from cached version, return early. Else pull content_units +
     published content_items for the user's level ±1 ONLY (issue 9), validate,
     cache, update version.
   - VALIDATION (F4 — zod is NOT installed; do not add it): hand-rolled type
     guards per payload type consumed (start with 'lesson' only). Invalid rows are
     skipped and counted; a skip-count > 0 is logged once per sync. Validate
     BEFORE caching so a bad payload can never poison the cache.
   - SIZE GUARD (issue 9): before AsyncStorage.setItem, if the serialized payload
     exceeds 1.5 MB, store nothing beyond the current level's text, log a loud
     warning naming expo-sqlite as the designated escalation (Gate P). Never
     store audio blobs — audio is URL-streamed/downloaded, never in AsyncStorage.

2. Wire the READ PATH ONLY, minimally:
   - app/den.tsx: source unit lists from getUnits() instead of importing
     curriculum arrays directly (rendering identical when offline).
   - app/lesson.tsx: source the lesson via getLesson(key) with unchanged fallback
     behavior for the 3 seed lessons.
   - app/_layout.tsx: fire-and-forget void refreshContent() alongside the existing
     refreshConfig() call, with the same guard pattern (it must be un-awaited and
     exception-proof; check how refreshConfig is invoked and match it).
   - Do NOT wire flashcards/roleplay/dictation/etc. in this prompt — each mode is
     wired as its content arrives (tracked follow-ups), keeping this diff small
     and testable.

3. Export content service from src/services/index.ts consistent with existing
   barrel style (check the sound.ts circular-import warning in useStore.ts:6-8
   before adding imports that could cycle).

DO NOT: add any package (zod is Gate P); change any screen's visual output;
make any synchronous path await network; touch auth/billing/stt.

VERIFY:
- npx tsc --noEmit → 0; npx expo export --platform android → clean.
- OFFLINE (no .env): npm run web — Den + the 3 lessons render EXACTLY as before;
  no network errors surface; refreshContent resolves silently.
- Cache-corruption drill: manually write garbage into the content cache key in
  AsyncStorage (web localStorage), reload — app must render seeds, not crash,
  and repair the cache on next successful sync.
- ONLINE (only if Gate S closed): insert one published test unit row, sync, see it
  appear in Den; then mark it draft, sync, see it disappear. Report if gated.
- Confirm in output: no new dependencies; skip-count logging works (feed one
  malformed row through the guard in a quick unit-style check).
```

---

## PROMPT D — Voice Flash `image_ref` widening (issue 7)

```
You are working on the Ealch v2 Expo app at ealch-v2/ (branch build/ealch-v2-expo).
Read CONTENT-CURRICULUM-AND-GENERATION-PLAN.md Part 4 issue 7 and finding F7 in
CONTENT-PART4-FIX-PROMPTS.md. Small, surgical prompt: two files.

TASKS:
1. src/content/index.ts — widen VfItem: keep the VfIcon union for the 5 named
   icons but add `image_ref?: string` carrying either a named icon, an emoji
   (e.g. '🥐'), or (future) an R2 URL. Existing 5 items unchanged and still
   typechecking.
2. app/voiceflash.tsx — render priority: image_ref that matches ICON_MAP → named
   icon; image_ref that is a short non-ASCII string → render as emoji Text at the
   icon's size; anything else/absent → existing icon behavior; final fallback =
   first letter of `key` in a circle (so no item can ever render blank).
3. Add one temporary 6th seed item using an emoji image_ref (e.g. un croissant 🥐)
   to prove the path, clearly commented as a seed-pipeline demo item.

DO NOT: touch stt/tts calls, scoring flow, or any other screen. No packages.

VERIFY: tsc 0 errors; expo export clean; npm run web → all 6 items cycle, the
emoji item renders at matching visual size, the 5 originals are pixel-identical.
Report that generated vf_items may now use any emoji + the schema's image_ref
field (unblocks issue 7's generation cap).
```

---

## PROMPT E — Generation runner + QA gates + TTS bake-off harness (issues 4, 12; feeds 5/6/10 decisions)

```
You are working in the Ealch repo root (branch build/ealch-v2-expo). Read
CONTENT-CURRICULUM-AND-GENERATION-PLAN.md Parts 3 + 4 (issues 4, 5, 12) and the
Gate register in CONTENT-PART4-FIX-PROMPTS.md §2 (Gates R/A/G/T/H) first.
PREREQUISITE: Prompt B merged (tables exist to write into; RLS already tightened
so the master prompt is not publicly readable).

EVERYTHING IN THIS PROMPT LIVES OUTSIDE THE APP: create scripts/content/ (Node,
its own package.json — NOT ealch-v2's) and ealch-v2/content-schemas/ (pure JSON,
no imports from app code). The app bundle must be provably unaffected.

TASKS (in order):

1. ealch-v2/content-schemas/*.schema.json — one JSON Schema per payload type from
   plan §3.4 (lesson, card, vf_item, roleplay_scenario, dictation_item, sb_puzzle,
   speak_drill, episode, review_seed, exam_task, coach_brief). lesson MUST match
   the existing TS Lesson type in src/content/lessons.ts field-for-field (that
   type is the proven consumer contract). exam_task requires format_version
   (issue 5).

2. scripts/content/ runner skeleton:
   - master-prompt.md: the master prompt verbatim from plan §3.2, plus the Gate
     A/G defaults appended as generation constraints (one fr-FR accent; EN glosses
     only).
   - generate.js: loads a job spec (§3.3 shape), calls the configured LLM
     (model from env; default claude-sonnet-5 to match system_config), validates
     each object against the JSON Schema, writes PASSING rows to content_items
     with status='review' — 'published' must be impossible from this script.
   - qa.js — the machine gate (issue 4): schema re-check; French typography lint
     (accents on capitals, « » pairing, NBSP before !?:;); level heuristics
     (sentence length caps, banned-tense regexes per level, e.g. /rais\b/ at A1);
     recycle-rate ≥30% check; duplicate detection against existing rows.
   - crosscheck.js — the adversarial LLM pass ("hostile DELF examiner") emitting a
     defect list; defective items regenerate, max 2 loops (issue 4).
   - publish.js — separate explicit command: flips a batch review → published and
     bumps content_releases. Prints the human-gate reminder (Gate H: 15% sample,
     mandatory for Sons/A1 and exam model answers) and requires a --confirm flag.
   - bakeoff.js (issue 12): 20 dictation-trap sentences (liaisons, numbers, €,
     homophones ses/ces/c'est) sent to each configured TTS provider; writes WAVs +
     a scoring sheet (per-provider cost/char + a listen checklist). Provider
     adapters behind one interface so the worker choice stays swappable.
   - README.md: run order, required env vars, and which Gate blocks each script
     (T: provider keys; H: human review; S: Supabase creds).

3. Store the master prompt in system_prompts via an insert script
   (key='content-gen', active=true, versioned) — note in README this is safe
   ONLY because Prompt B tightened RLS first.

DO NOT: import anything from ealch-v2/src into scripts/; add packages to
ealch-v2/package.json; call any paid API without keys present (each script exits
with a clear gate message instead); mark anything published without --confirm.

VERIFY:
- ealch-v2 untouched: git status shows no ealch-v2/src or package.json changes
  except content-schemas/ (pure JSON); npx tsc --noEmit and expo export still clean.
- grep proves no app file imports from scripts/ or content-schemas/.
- Dry-run: generate.js against a mock LLM fixture (a canned valid + a canned
  invalid item) → valid row written as 'review', invalid rejected with the schema
  error; qa.js catches a seeded typography error (missing NBSP) and a banned-tense
  A1 sentence.
- Report which gates remain open (T/H, and S if SQL unapplied) and exactly what
  closing each unlocks. Issue 4 is PARTIAL until Gate H closes — say so.
```

---

## 5. After the pack — the milestone this serves

With A–E landed and Gates R/T/S closed: run **"prove the pipe with one bundle"** — generate `a1-01-salutations` end-to-end (generate → qa → crosscheck → human sample → publish → TTS → R2 → visible in the app via ContentService). That single bundle exercises every artifact this pack creates. Nothing scales to Wave 1 until it passes.

Issue-state after the pack, honestly stated:

| | Fully closed | Open remainder |
|---|---|---|
| 1, 2, 3, 7, 11 | ✅ code/schema complete | — |
| 6, 10, 13 | ✅ closed by recorded decisions | — |
| 5 | schema + string ✅ | in-app placement waits for exam UI; legal review of wording (Gate D) |
| 4 | machine + LLM gates ✅ | human 15% sample review (Gate H) |
| 12 | harness ✅ | provider decision + keys (Gate T), then the actual bake-off listen |
| 8 | honesty slices ✅ (A + onboarding pack) | real STT (onboarding Gate 3), real placement (content Wave 2) |
| 9 | constraints enforced ✅ | expo-sqlite only if the size guard ever trips (Gate P) |
