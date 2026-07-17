# Ealch — Canonical Decisions & Reconciliation

**Single source of truth.** Where any other planning doc or code comment conflicts with this file, **this file wins.** Created to resolve the cross-document audit (2026-07-15). The master blueprint inherits from here.

---

## 1. The canonical level ladder
**Six content bands:** `sons` (display name **Foundation**; phonics/pronunciation) → `A1` → `A2` → `B1` → `B2` → `C1`.
- **C2 policy:** C2 is **not** a content band. No C2 curriculum, no C2 packs, **no DALF C2** for launch. C2 exists **only as a scoring band** where TCF/TEF report it (so a score screen can display "C2"), never as authored content.
- **Action:** keep `c2` in `schema.ts LEVELS` *for scoring display only*, or move it to a separate `SCORE_BANDS` enum; author-side level pickers and the coverage matrix use the six content bands only.
- **Naming is fixed:** IDs use `sons`; UI displays "Foundation." Retire the loose "A0" alias in prose. "6 content bands," never "7 levels."

## 2. Canonical taxonomy
- **15 domains, 108 themes** (incl. the Exam Preparation domain). Retire "~100 themes / ~14 domains."
- **Themes self-stratify** across a *range* of the six bands (not every theme at every band).
- **Gap to close:** the 108-theme catalogue must become **machine-readable** — a `themes` table/JSON with `slug`, `domain`, `level_range`, `exam_flag`, `immig_flag` — so the OPR tree, generator, and coverage matrix consume it. Prose-only is not enough.

## 3. Content entity model (and the schema gap)
- **A `Pack` is a first-class entity** = one theme × one level, the openable unit of ~60 items across modes. It is **not** today's `Unit`.
- **Terminology, fixed:**
  - **Pack** = theme × level bundle (mode buckets draw from it).
  - **Den lesson** = a level-sequenced *guided narrated* lesson (the 7-stage walkthrough). A different axis from packs.
  - **Legacy `Unit`** (`curriculum.ts` `{title,sub}`, 43 grammar-titled) = feeds the **grammar spine**, not a pack.
- **Schema extension required (blueprint section):** `schema.ts` today has only `Item`, `Lesson`, `Unit`, `Scenario`, and caps `Unit`/`Lesson` IDs to `sons|a1|a2`. The blueprint must add/relax:
  - a **`Pack`** type + `theme` catalogue + `domain`;
  - **lift the `UNIT_ID_RE`/`LESSON_ID_RE` cap** so the Den can hold B1-C1;
  - `Item` fields: `skill` (CO/CE/PO/PE), `register`, `can_do`, `grammar_points`;
  - **exam** entities: `ExamTask`, `ExamSeries`, `format_version`, `rubric`, `model_answer`, `examiner_notes`;
  - **audio segment** map (`[{blockId,startMs,endMs,text}]`) beyond the single `audioRef`;
  - **entitlements** (per-user premium) — the `premium` boolean is fake today;
  - **grammar-spine** fields (grammar a lesson assumes/introduces);
  - **provenance** columns (`model`, `prompt_version`, `generated_by`, `reviewed_by`, `source_refs`).

## 4. Corpus size (derived, retire "750")
- **"~750 packs / 750 scripts" is retired** — it came from `108 × 7` and conflated packs with modes and with Den scripts.
- **Canonical basis:** ~**108 themes** spanning on average ~2-3 bands each → **≈250-300 theme×level packs** (full vision). **Den guided lessons** are a *separate* axis (~130-150 level-sequenced lessons). Item count derives per pack (~60, with heavy cross-pack reuse).
- **Cost/native-review budgets must be derived from these numbers, not "750."** (Directionally the AI-gen cost stays trivial; native review remains the meaningful line.)
- **Launch corpus is a subset** (see §7): B1-B2 themes + the Canada exam banks first, not the whole 250-300.

## 5. Providers (reconciled with the code)
- **TTS = Azure Neural** (fr-FR), one voice = Camille, wired for **both** batch (cached) and live. **Audition 2-3 Azure voices, then lock.** **Keep Fish Audio and ElevenLabs** with the options for the `tts` Edge Function; the Fish research (Google WaveNet remains an optional cost-floor for bulk non-hero audio.)
- **LLM = keep NVIDIA + add cheap tier.** The **coach** keeps its existing resolver chain (NVIDIA retained) and **adds cheap-tier options (Gemini 3 Flash / DeepSeek)** selectable via remote config for cost. **Content-gen** = mid model (Gemini 3.1 Pro / Sonnet 5) with DeepSeek for bulk drafts. **Exam marking** = cheap tier (per Examiner decision C, with calibration mitigation). Reconcile the `claude-sonnet-5` config value and NVIDIA proxy to this.
- **STT = on-device, and it IS installed.** `expo-speech-recognition` + a real `stt.ts` recognizer exist and are the architecture pillar (free at the margin). **`ONBOARDING-FIX-PROMPTS` "no STT installed" is stale and superseded.** Record the reversal in `flags.ts`.

## 6. Home & navigation
- **Home = mode-first** (Den, Flashcards, Voice Flash, Sentences, Role Play, La Dictée, Playlist, Examiner, Smart Review). **The theme-spine-home idea is superseded** — purge residual "theme-first spine / the home" language from the catalogue's header and Part A.
- **Swipe navigation is net-new.** The app is Expo Router **Stack + TabBar** with a known back-stack erosion issue and no gesture pager. The blueprint must spec the swipe container **and** reconcile it with (or replace) the current router/back behavior — not assume it exists.

## 7. Market & content build order
- **Immigration/Canada-first.** Build **B1-B2 content + the Examiner (TEF Canada, TCF Canada, DELF B2)** first — highest willingness to pay and the defensible market gap. Beginner/Africa-PPP breadth follows.
- **Implication:** the content-generation pipeline's first real run targets B1-B2 themes + the Canada exam banks (not the Foundation-heavy catalogue), even though Foundation-A2 is the larger long-term slice. The vertical-slice proof should therefore include at least one B2 pack + one exam task type.

## 8. Open gates (status)
- **Gate D** (exam legal/disclaimer wording): unresolved — needs legal sign-off before exam publish.
- **Gate G** (gloss languages): unresolved — default EN gloss; decide additional L1s.
- **Gate H** (native-reviewer sourcing): unresolved — the real cost line; must be staffed before Sons/A1 + exam content ships.
- **Gate R** (R2 vs Supabase Storage for media): unresolved — pick one for the media library + snapshots.
- **Placement test**, **`goal` onboarding field** (currently read by nothing), **entitlements system**: unresolved — specced in the blueprint.

## 9. Corrected claims
- "Content is **already tagged** theme+level" → **aspirational.** Only the `cafe` seed is tagged; `curriculum.ts` units have no theme/slug/stable id. Stable slugs + tagging are pending work.
- "43 units mostly exist" → **3/43 have wired lessons**; the rest route to a placeholder.

## 10. Reconciliation table
| # | Conflict | Resolution |
|---|---|---|
| 1.1/1.2 | C2 in scope? 6 vs 7 levels | 6 content bands (sons/Foundation→C1); C2 = scoring band only (§1) |
| 1.3/1.12 | Unit/Pack/Lesson; schema caps at A2 | `Pack` = new entity; lift regex cap; extend schema (§3) |
| 1.4 | "750 packs" | Retired; ~250-300 packs derived; Den lessons separate axis (§4) |
| 1.5 | TTS provider | Azure Neural, audition; keep Fish + ElevenLabs (§5) |
| 1.6 | STT "not installed" | Stale; on-device STT is installed and is the pillar (§5) |
| 1.7 | theme-first vs mode-first home | Mode-first; purge theme-spine residuals (§6) |
| 1.8 | LLM provider mismatch | Keep NVIDIA + add cheap tier; content mid-model (§5) |
| 1.9 | 100/14 vs 108/15 | 15 domains, 108 themes (§2) |
| 1.10 | Swipe vs Stack nav | Swipe is net-new; reconcile with router (§6) |
| 1.11 | "already tagged" | Corrected to aspirational (§9) |
