# Phase 2 — Content: generation, review, and the first real corpus

**Date:** 2026-07-15 · **Status:** scoping only, no build yet.
**Goal in one line:** the engines are all real now (corpus schema, attempt log, SRS, honest screens) but the tank is nearly empty — Phase 2 fills it with real, human-reviewed content, delivered through the pipeline Phase 1 already built.

This plan **reconciles** two excellent but pre-Phase-1 docs — `CONTENT-CURRICULUM-AND-GENERATION-PLAN.md` (curriculum, the master generation prompt, the QA pipeline) and `OPR-CONTENT-STUDIO-SPEC.md` (the authoring environment vision) — with **what Phase 1 actually shipped**. Where they conflict, Phase 1's built reality wins.

---

## 0. Definition of done, and explicit non-goals

**Phase 2 is done when:**
1. A repeatable **generation → validate → review → publish** loop exists and is proven end-to-end.
2. The **Sons track is complete** (every unit a rich lesson + drills), **A1 lessons 1–4** and **A2 lessons 1–4** are rich, and a **themed vocabulary corpus** (the seed themes) is populated — all **human-reviewed before publish**.
3. That content ships: the deep/first-run set in the bundled `seed.json`, the remainder over the air, and it **renders correctly on device** across every drill.
4. The app stops being a ~15-minute demo.

**Explicit non-goals (deferred, on purpose):**
- **Audio / Cloudflare R2** — locked decision is *device TTS only for now*; real recorded audio is **Phase 7**. Every `Item.audioRef` stays null; TTS speaks `fr`. This removes the single largest cost/complexity line from Phase 2.
- **The full "Content Studio"** (Gutenberg block editor, media library, drag-drop coverage matrix, translation memory, custom-type builder) — that OPR spec is a product in itself. Phase 2 builds a **lean review console**, not that. The Studio is a later, separate track.
- **B1 / B2 / C1 and exam banks (TEF/TCF/DELF)** — later waves. Phase 2 is Sons + A1(1–4) + A2(1–4) + themed vocab.
- **Non-English glosses** — FR content + EN gloss only, matching the app today.

---

## 1. What Phase 1 already gives us (build on this, do not rebuild)

| Foundation piece | State | Consequence for Phase 2 |
|---|---|---|
| Canonical **`schema.ts`** — `Item`, `Lesson`/`LessonSection[]`, `Unit`, `Scenario`, `Corpus`, stable IDs (`fr.<level>.<theme>.<seq>`), validators | Built, tested | Generation must emit **these typed shapes**, validated by the existing `validate*` functions — *not* the jsonb-payload schema the old curriculum doc designed. |
| **`content_items`** table + provenance columns in ealch-admin (Supabase) | Built | Drafts land here. No new schema design needed. |
| **Publish pipeline** (DB → snapshot + manifest → Supabase Storage → git mirror) | Built (`publish-content.ts`) | "Publish" already works. Phase 2 feeds it, doesn't rebuild it. |
| **App content service** (fetch / verify sha256 / cache / merge over seed) | Built (`content.ts` + `content.logic.ts`) | The app already reads whatever we publish. Verified on device. |
| **Ops Console** — draft→in_review→published→archived state machine, RBAC, TOTP, audit log, revision history | Built | The review workflow **spine exists**. Phase 2 adds the typed *editors/review views* on top. |
| Every drill reads the corpus by ID; **attempt log + SRS** consume it | Built | More content → the SRS, Le Rapport and Den get proportionally better *for free*. |

**The gap Phase 2 closes:** there is no **generation entry point** (nothing puts drafts in the DB), and the review surface is a raw `<textarea>` with `JSON.parse` — no human can efficiently review LLM output that way. Those two, plus the content itself, are Phase 2.

---

## 2. Reconciliation — what we adopt from the old docs, what we defer

| From the old docs | Verdict | Why |
|---|---|---|
| The **Master Generation Prompt** (curriculum doc §3.2) | **Adopt**, retargeted to `schema.ts` shapes | It's a strong, examiner-grade pedagogy + French-quality + output-discipline prompt. Reuse it. |
| The **QA pipeline** (§3.5: machine gate → adversarial LLM cross-check → human sample review) | **Adopt** (minus the audio gate) | This is the "don't ship confidently-taught lies" defense. Non-negotiable for Sons/A1. |
| The **curriculum ladder & unit lists** (Part 1) | **Adopt the Sons/A1/A2 portion**; shelve B1/B2/C1/exams | Phase 2's scope is the beginner spine; the rest is later waves. |
| The **content inventory / per-mode quantities** (§2.1) | **Adopt as targets**, minus audio counts | Tells us how many cards/dictations/scenarios per unit. |
| The old doc's **new schema** (content_units/content_items/audio_assets/content_releases jsonb) | **Reject** — superseded | Phase 1 built typed `schema.ts` + `content_items` + snapshot publish. Don't fork the data model. |
| **R2 audio pipeline** (§2.3), accent variants | **Defer to Phase 7** | Device TTS only for now (locked). |
| The **OPR Content Studio** (Gutenberg editor, coverage matrix, media library, translation system, custom types, content-health loop) | **Defer** to "Studio v2" | Massive. Phase 2 ships content with a *lean* console; the full studio is justified only once content volume demands it. |
| The Studio's **"blocks emit tagged Items," native-reviewer gate, publish=snapshot, live device preview** | **Adopt the principles**, implement minimally | These are the right ideas; Phase 2 does the 20% that delivers 80%. |

---

## 3. The content scope for Phase 2 (the actual thing to produce)

### 3a. Sons — complete (the pronunciation foundation, ~9 rich units)
Each = one rich `Lesson` (teach → examples → minimal pairs → common errors → cheat sheet → quiz) + drill `Item`s (dictation + voiceflash) tagged `level: 'sons'`.
1. L'alphabet & les sons de base
2. Les voyelles (a · e · i · o · u · y)
3. Les voyelles nasales (on/om · an/en · in/im · un)
4. Le **e** — muet, é fermé, è/ê ouvert
5. Les semi-voyelles (oi · ui · -ille)
6. Le **R** français
7. Les consonnes finales muettes
8. Les liaisons (obligatoires · interdites · facultatives)
9. L'accent tonique & le rythme du groupe

### 3b. A1 — lessons 1–4, deep
1. Salutations & politesse (bonjour/au revoir, merci/s'il vous plaît, tu vs vous)
2. Se présenter (je m'appelle… · j'ai … ans · je viens de… · j'habite à…)
3. Les nombres 0–100 & l'heure
4. Être & avoir au présent + phrases de base

### 3c. A2 — lessons 1–4, deep
1. Le passé composé avec **avoir**
2. Le passé composé avec **être** (+ accord du participe)
3. Les pronoms objets (direct & indirect)
4. Le futur proche & parler de ses projets

### 3d. Themed vocabulary corpus (the seed themes)
Populate the Phase-1 seed themes — **café, marché, objets, salutations, nombres, transport, dictée** — with real tagged `Item`s (word + sentence kinds) across A1/A2: gender on nouns, IPA, an example sentence, a teaching note, and `drills[]` eligibility (flashcard/voiceflash/dictation/sentence). This is what makes Voice Flash, Flashcards, Dictation, Sentence Builder and Smart Review *substantial* instead of 5–8 items each.

### 3e. Role Play scenarios
2–3 real scenarios per level (A1/A2) beyond the existing "Au marché" — e.g. Au café, À la boulangerie, Demander son chemin — each a `Scenario` with 5–8 turns.

**Volume for Phase 2 (order of magnitude, NOT the eventual 8000):**
| Bucket | Rich lessons | Items | Scenarios |
|---|---|---|---|
| Sons complete | ~9 | ~150 (pairs, dictation) | — |
| A1 1–4 | 4 | ~250 | 2–3 |
| A2 1–4 | 4 | ~250 | 2–3 |
| Themed vocab | — | ~400–700 | — |
| **Phase 2 total** | **~17** | **~1,000–1,300** | **~5** |
Seed cut ships in the binary; the rest arrives OTA. The 8,000-item, B1–C1, exam-bank vision stays the north star for later waves.

---

## 4. Workstream A — the generation pipeline

A Node script in `ealch-admin/scripts/` (alongside the existing `publish-content.ts` / `port-content.ts`), so it runs server-side with the service-role key and writes **draft** rows.

- **Input:** a *job spec* per run — `{ unit/theme, level, kind, quantity, recycle[] }` (the vocab-recycling constraint from the curriculum doc).
- **Prompt:** the **Master Prompt** (adopted from the curriculum doc), retargeted so output validates against `schema.ts` (`Item` / `Lesson` sections / `Scenario`), not the old jsonb schema. Store it versioned in `system_prompts` (server-side only — see Decision D3).
- **Model:** the config already names a content model; pick per Decision D2.
- **Validate at the door:** every generated object runs through `validateItem` / `validateLesson` / `validateScenario`; failures regenerate (max 2 loops). ID assignment follows the `fr.<level>.<theme>.<seq>` convention with collision checks.
- **Write:** valid objects insert as `status: 'draft'` with provenance (generated-by model + prompt version + timestamp).

**Fast-start option:** for the very first slice (one Sons lesson + one theme), the content can be **hand-authored by the model directly to schema-valid rows** to prove the schema→render→device loop in hours, before the automated script is built. Recommended, so we validate quality on real content early.

---

## 5. Workstream B — the lean review console (NOT the full Studio)

The single most important scoping call: **build the 20% of the OPR Studio that lets a human approve LLM drafts efficiently, and defer the other 80%.**

Ship in Phase 2:
- **Typed review forms** per kind — an `Item` form (fr/en/ipa/gender/example/notes/tags/drills), a `Lesson` form that renders the typed `LessonSection[]` (teach/examples/table/errors/quiz…), a `Scenario` form (turns). Replaces the raw `<textarea>` + `JSON.parse`. Inline schema validation, "never a bare noun" and level checks surfaced as warnings.
- **A coverage list** — a simple table of theme × level × kind showing draft / in-review / published counts. (The Studio's drag-drop "coverage matrix" is deferred; a read-only table is enough to drive the build.)
- **Approve / request-changes / bulk-approve**, riding the *existing* state machine + audit log + revision history.
- **Provenance shown** (which model/prompt generated a row) so a reviewer knows what they're checking.
- **Publish = the existing snapshot build** (already works). Optionally a "preview on device" via the deep links we've been using.

Explicitly deferred to Studio v2: Gutenberg block editor, media library, translation memory, live in-editor TTS, restructure-with-migration, custom-type builder, content-health feedback loop.

---

## 6. Workstream C — the content build (the actual authoring)

For each slice (Sons → A1 → A2 → themes), run the loop:
1. **Generate** the batch (Workstream A).
2. **Machine gate:** schema validation + French typography lint (accents on capitals, « » pairs, NBSP before `!?:;`) + level-discipline heuristics (banned tenses per level) + recycle-rate + duplicate detection.
3. **Adversarial LLM cross-check:** a second pass ("find every French error, every level violation, every bare noun") → defects regenerate.
4. **Human review (Paul):** in the lean console. **Sons and A1 require full review** (beginners can't self-correct bad input); themed vocab and A2 can be **spot-checked at ~15%** with the machine+adversarial gates carrying the rest.
5. **Publish** → snapshot → app. **Verify on device** across the affected drills.

---

## 7. Quality bar (the "confidently-taught lie" defense)

Adopted from the curriculum doc §3.5, minus audio. Hard rules the gates enforce:
- Impeccable French: correct gender, agreement, elision, French typography, accents on capitals.
- Every noun carries its article — never a bare noun.
- Register matches the scene (tu/vous), familiar/slang marked explicitly.
- English glosses are natural, not calques.
- Level discipline: every string producible by a learner *at that level* using only grammar/vocab taught so far.
- Quiz distractors plausible (real forms, wrong context).
- **Human sign-off is mandatory** for Sons + A1 before publish.

---

## 8. Sequencing & milestones

| # | Milestone | Delivers | Depends on |
|---|---|---|---|
| M1 | **Prove the loop** — hand-author 1 Sons lesson + 1 theme's items to schema-valid rows → review form → publish → device | The schema→render→publish→device loop verified on real content | Phase 1 (done) |
| M2 | **Generation pipeline** — the script + Master Prompt + validators + provenance | Repeatable batch generation into draft | M1 |
| M3 | **Lean review console** — typed forms + coverage list + approve/bulk | Humans can review efficiently | M1 |
| M4 | **Sons complete** — generate → gate → full review → publish | The pronunciation track is real end-to-end | M2, M3 |
| M5 | **A1 1–4 + A2 1–4** rich lessons | The beginner spine is real | M4 |
| M6 | **Themed vocab corpus** + Role Play scenarios | Voice Flash / Flashcards / Dictation / Sentence / Review become substantial | M4 |
| M7 | **Seed cut + OTA verify** — set the bundled `seed.json` line, confirm the rest streams over the air | Ships; app is no longer a demo | M4–M6 |

M1 is small and high-information — do it first. M2/M3 can proceed in parallel after M1.

---

## 9. Open decisions needed before building

- **D1 — Review depth vs. speed.** Full human review of everything is the safest but slowest (the real cost line). Proposed: full review for Sons + A1; ~15% spot-check for A2 + themed vocab, backed by the machine + adversarial gates. *Confirm.*
- **D2 — Generation model.** The config names a content model (NVIDIA Nemotron / claude-sonnet-5 lineage). For beginner French quality I'd recommend a top-tier model for generation and a *different* model for the adversarial cross-check. *Confirm which.*
- **D3 — Prompt storage.** Keep the master generation prompt **server-side only** (the old `system_prompts` table is world-readable including inactive rows — that would leak it). *Confirm: store in a non-client-readable place.*
- **D4 — Seed cut line.** How much ships in the binary vs OTA. Proposed: Sons complete + A1 1–2 + the café/salutations/nombres themes in the seed; the rest OTA. *Confirm once real sizes are known.*
- **D5 — IPA source.** IPA generated by the LLM is error-prone. Options: accept LLM IPA behind human review, or add a deterministic FR→IPA step. *Decide; low-stakes, can start with reviewed LLM IPA.*
- **D6 — Voice Flash icons.** `voiceflash` items map French words to a small fixed icon set. Scaling needs an icon/emoji mapping. Proposed: cap voiceflash items to the existing icon vocabulary for now; the schema already has an audioRef-style indirection so content isn't re-authored later. *Confirm.*

---

## 10. Honest effort & risk

- **Biggest cost is human review time**, not generation or tokens. The gates exist to shrink it, but Sons + A1 need real eyes.
- **LLM French cannot be trusted raw** — single-pass output will have gender/register/anglicism errors invisible to a beginner. The machine + adversarial + human gates are the whole point; skipping them reships the fabrication problem in a subtler form.
- **Scope creep risk = the Studio.** The OPR spec is seductive and large. Phase 2 must resist building it; the lean console is enough to ship the beginner corpus. Revisit the full Studio only when volume (B1+, exams, 8000 items, multi-locale) actually demands it.
- **This is the phase that makes the app a product.** Everything before it made the app *honest*; this makes it *worth using*.

---

*Supersedes the schema/delivery/audio sections of `CONTENT-CURRICULUM-AND-GENERATION-PLAN.md` (its curriculum, master prompt and QA pipeline are adopted). Scopes down `OPR-CONTENT-STUDIO-SPEC.md` to a lean review console for this phase. Builds entirely on the Phase 1 foundation (see `reconciliation/EALCH-MASTER-BUILD.md`, Phase 1).*
