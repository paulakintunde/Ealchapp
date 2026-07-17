# Ealch — Master Vision Blueprint

The single, reconciled vision for Ealch: a speaking-first French learning app with a narrated teacher (Camille), themed practice, spaced repetition, and genuine TEF/TCF/DELF exam simulation, produced by an AI-generation pipeline with a native-review gate and managed from the OPR studio.

**This is the connective document.** Each subsystem has a detailed spec (linked in §12). Where anything conflicts, `CANONICAL-DECISIONS-AND-RECONCILIATION.md` is the single source of truth; this blueprint inherits from it. Two sections here are new and resolve audit gaps: **§6 Schema extension** and **§9 Build sequence**.

---

## 1. Vision & positioning
- **What it is:** a French learning app that *talks you through it* (Camille narrates), lets you practise by theme and by skill, schedules everything with spaced repetition, and prepares you for the exams that change lives (immigration/study).
- **The wedge no competitor fills:** genuine **TEF/TCF/DELF exam simulation** + **purchasing-power pricing for Francophone Africa**. Competitors cluster at ~$7-8/mo with no real exam sim.
- **Lead market:** immigration/Canada-first (B1-B2 + Examiner), highest willingness to pay; beginner/Africa breadth follows.
- **Economic shape:** margin-rich, acquisition-constrained. On-device STT is free, cached audio is one-time, coach LLM is pennies. The real spend is native review; the biggest revenue lever is web-checkout vs app-store 30%.

## 2. Canonical facts (inherited)
- **Level ladder:** 6 content bands — `sons`(Foundation), A1, A2, B1, B2, C1. **C2 = scoring band only** (no C2 content/DALF C2).
- **Taxonomy:** 15 domains, 108 themes (machine-readable catalogue required).
- **Corpus:** ~250-300 theme×level **packs** + ~130-150 **Den lessons** (separate axis). "750" retired.
- **Providers:** TTS = Azure Neural (Camille), with Fish Audio + ElevenLabs kept as resolver options; LLM = NVIDIA coach + cheap-tier (Gemini Flash/DeepSeek) + mid-model content-gen; STT = on-device (installed).
- **Home:** mode-first. **Swipe:** net-new. Full detail in the canonical doc.

## 3. Product architecture (one pool, many views)
- **The tagged pool.** Every learning item is one `Item` tagged `theme` · `level` · `skill` (CO/CE/PO/PE) · `mode` · `register` · `can_do` · `grammar_points` · `modality` (recognise/produce/discriminate). Every surface is a *view* over this pool.
- **Home = mode buckets** (kept): Den, Flashcards, Voice Flash, Sentences, Role Play, La Dictée, Playlist, Examiner, Smart Review.
- **Per-bucket indexing** (index by what drives difficulty in that mode):
  - Vocabulary modes → **theme-first**, level filter inside: Flashcards, Voice Flash, Sentences.
  - Skill/grammar modes → **level-first**, theme/scenario inside: La Dictée, Role Play.
  - **Den** → level-sequenced guided course.
- **Cross-cutting:** Examiner (pulls level-appropriate items into exam shapes) · grammar spine (keeps Den sequence gap-free) · SRS (Smart Review + due prompts).
- Detail: `THEME-CATALOGUE-AND-ARCHITECTURE.md`.

## 4. The learning experience
- **A Pack** = one theme × level, ~60 mixed items, the openable unit inside vocabulary buckets.
- **A Den lesson** = the narrated 7-stage swipe walkthrough: warm/recall → focus/vocab → input/story → practice → produce → check → cheat-sheet. **Guided-autoplay** (Camille drives pace) or **self-pace** (you swipe), over one audio set. Swipe stays inside the lesson; swipe-back = one stage.
- **Drill briefings:** every mode drill opens with a short narrated `instruction` card (goal/objective/how/what-to-expect). The only narration the buckets carry; full narration lives in the Den.
- **Narration engine:** authored text = FIXED (pre-generated in Azure Neural, cached, offline, zero-latency); runtime-generated text = LIVE (coach, feedback, generated roleplay branches). Timestamped segments drive karaoke line-highlight and pause-at-interaction. **Camille = static illustrated character + speech-reactive pulsing orb.** Pace = time-stretch + real slow render for phonics/dictation. Detail: `NARRATION-ENGINE-SPEC.md`.

## 5. Spaced repetition — the keystone (SRS/FSRS spec)
*Called "build first" everywhere but previously unspecced. This resolves it.*
- **Algorithm:** **FSRS-6** (≈20-30% fewer reviews than SM-2 for equal retention).
- **Card key = `(user, item, modality)`** where modality ∈ recognise/produce/discriminate — "I recognise *la gare*" and "I can say *la gare*" are different memories (the voice-first decision).
- **Sibling gating:** a `produce` card is not created until its `recognise` sibling reaches stability ≥ 7 days.
- **Truth = an append-only `AttemptLog`**; `SRSCard`s are *derived* from it (replayable, multi-device-safe by construction).
- **Every Den lesson opens with a `recall` stage** re-testing due items; **Smart Review** is the scheduler surfaced.
- **Leeches:** `lapses ≥ 8` → suspended, routed back to teaching, surfaced as "stuck, not failed."
- **Mastery** = `retention ≥ 0.90 ∧ reps ≥ 3`, never a single quiz. Home metrics read the real log (no fabricated numbers).

## 6. Schema extension (NEW — the structural gap)
`schema.ts` today has only `Item`, `Lesson`, `Unit`, `Scenario`, caps `Unit`/`Lesson` IDs to `sons|a1|a2`, and lacks the entities every spec assumes. Required additions (canonical, zero-runtime-import module so the app, admin, generator, and publish pipeline share it):

- **Levels:** `LEVELS = [sons,a1,a2,b1,b2,c1]` (content); `SCORE_BANDS = [...,c2]` (display only).
- **`Domain`** and a **machine-readable `Theme` catalogue:** `{slug, title, domain, level_range, exam_flag, immig_flag, sub_themes[]}` (× 108).
- **`Pack`** (first-class): `{id: pack.<level>.<theme>, theme, level, mode_targets, goal(can_do), status, provenance}`.
- **`Item` (extend):** add `skill (co|ce|po|pe)`, `register`, `can_do`, `grammar_points[]`, `modality (recognise|produce|discriminate)`.
- **Lift `UNIT_ID_RE`/`LESSON_ID_RE`** to all six bands so the Den holds B1-C1; add `grammar_assumed[]` / `grammar_introduced[]` to `Lesson` (grammar spine).
- **Exam entities:** `ExamFamily → ExamVariant → ExamSeries → Section → ExamTask{section, cefr, format_version, prompt, items|responseSpec, rubric, model_answer, examiner_notes, timing_s, scoring_map}`; `Scenario.exam{}` hook (already present).
- **Audio:** `audio_segments: [{blockId, startMs, endMs, text}]` beyond the single `audioRef`; asset key = `hash(script+voice+provider+renderVersion)`.
- **`AttemptLog`** (append-only) and derived **`SRSCard`**.
- **`Entitlement`** (per-user premium): `{user, plan, features[], source(iap|stripe|paystack), expiry}` — replaces the fake `premium` boolean.
- **Provenance columns** on every generated row: `model, prompt_version, generated_by, reviewed_by, source_refs`.
- **Publish target** stays the **snapshot/OTA** model (app reads a Supabase-Storage snapshot over bundled `seed.json`; RLS closed; never direct table reads).

## 7. Content system
- **Theme catalogue:** 108 themes / 15 domains (incl. Exam Preparation), self-stratified by level. Must ship as data (see §6). Detail: `THEME-CATALOGUE-AND-ARCHITECTURE.md`.
- **Generation pipeline (8 stages):** targets → structured gen → **deterministic gates** (verbecc/mlconjug3 conjugation, Lefff/Lexique/spaCy gender, Phonemizer/espeak-ng IPA, CEFR classifier + Token-Miss-Rate) → adversarial LLM checks → LLM-judge triage → **native review (Gate H)** → audio → publish → feedback loop. Core rule: *schema-valid ≠ correct.* Builds on the research's Master Prompt + job-spec + generation runner. Detail: `CONTENT-GENERATION-PIPELINE-SPEC.md`.
- **OPR Content Studio (port 4000):** Gutenberg-class block authoring that emits tagged Items; curriculum tree + coverage matrix; AI draft + inline Azure TTS; media library; translation; review/roles/workflow-rules; validation-gated publish + scheduling + snapshot build; versioning; SRS-driven content health. Detail: `OPR-CONTENT-STUDIO-SPEC.md`.

## 8. The Examiner
Timed mock engine for TEF/TCF/DELF, 5 equated parallel series per variant, original items in authentic format only (+ disclaimer, `format_version`), AI-marked against human-approved rubrics ("indicative simulation, not official"). Launch = **TEF Canada + TCF Canada + DELF B2**. Speaking marked on transcript content; marking on cheap tier with native-calibration. Reuses the roleplay engine + STT. Scoring cut-points come from official PDFs, not memory. Detail: `EXAMINER-ENGINE-SPEC.md`.

## 9. Build sequence (NEW — dependency-ordered, immigration-first)
*Not calendar dates — a dependency order. Each phase unblocks the next.*

- **Phase 0 — Foundations & truth.** Schema extension (§6) + machine-readable theme catalogue + entitlements entity; fix the `eas.json` env gap (auth in prod builds); wire the admin feature-flags to the mobile app; record the STT decision in `flags.ts`.
- **Phase 1 — The keystone.** FSRS scheduler + `AttemptLog` + `ContentService`; home metrics read the real log (kill fabricated numbers).
- **Phase 2 — The content machine.** Generation runner + deterministic gates + Master Prompt/job-specs + the studio's native-review workflow.
- **Phase 3 — Prove it (vertical slice).** ~3-5 packs **including ≥1 B2 pack + 1 exam task type**, end-to-end: generate → review → Azure audio → publish snapshot → play. Stand up the narration engine (Azure voice + Camille avatar) and the swipe container (reconciling the router/back behavior).
- **Phase 4 — The immigration wedge.** Examiner banks (TEF/TCF Canada + DELF B2) + AI marking; B1-B2 theme content built out.
- **Phase 5 — Monetization live.** Entitlements + web checkout (Stripe/Paystack, IAP fallback) + paywall + Exam tier; feature-flag-gated beta.
- **Phase 6 — Scale.** Fill the catalogue theme-by-theme; Africa PPP tier; ads/affiliate; more exam variants + full 5 series; offline downloads.

**Rationale:** nothing content-heavy is built until the scheduler and pipeline exist (Phases 1-2), and the first real content targets the paying wedge (Phase 4), not the larger-but-slower-to-revenue beginner catalogue.

## 10. Monetization (summary)
Freemium subscription, **web-checkout-first**, PPP-tiered. Free = cached content + on-device drills + capped coach (ad-supported, Tier-1). Premium = unlimited coach, live roleplay, all levels, offline, ad-free ($9.99/mo–$59.99/yr; ~$2-4/mo Africa via Paystack). Premium+Exam = ~$14.99 or an exam-bootcamp pack. Premium gates = exactly the features that cost to serve + the exam sim. Detail: `MONETIZATION-AND-UNIT-ECONOMICS.md`.

## 11. Admin, flags & risks
- **Two systems kept separate:** feature flags (experiment/rollout, built in `ealch-admin`, needs mobile wire) vs entitlements (premium, to build).
- **Open gates:** D (exam legal wording), G (gloss languages), H (native-reviewer staffing — the real cost line), R (R2 vs Supabase Storage). All must close before the content/exam they gate ships.
- **Top risks:** premium-brain coach on free users (mitigate: cheap default + caps); African free-tier drain (convert, don't ad-fund); native-review throughput (the bottleneck); exam scoring accuracy (use official cut-points); web-checkout rules are time-sensitive (re-verify pre-launch).

## 12. Document index
- `CANONICAL-DECISIONS-AND-RECONCILIATION.md` — **source of truth**
- `THEME-CATALOGUE-AND-ARCHITECTURE.md` — themes, IA, packs, Den
- `OPR-CONTENT-STUDIO-SPEC.md` — the port-4000 authoring system
- `CONTENT-GENERATION-PIPELINE-SPEC.md` — the 8-stage AI+review pipeline
- `EXAMINER-ENGINE-SPEC.md` — the mock-exam engine
- `NARRATION-ENGINE-SPEC.md` — Camille's voice + guided playback
- `MONETIZATION-AND-UNIT-ECONOMICS.md` — costs, pricing, gating
- `EALCH-MASTER-BLUEPRINT.md` — this document

---

### What is deliberately deferred
Per the "full vision" scope: detailed UI visual design, exact copy, per-phase calendar/estimates, and the placement-test design are out of scope here and become their own specs. The `goal` onboarding field is either wired in Phase 0 or dropped. Nothing above assumes work that the codebase already contradicts without flagging it as net-new.
