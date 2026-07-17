# Ealch — Content-Generation Pipeline Spec

How Ealch produces its whole content library — ~108 themes across levels and modes, plus the exam banks — at scale and at quality, via AI generation with a native-review gate. This is the engine behind the OPR studio's "AI draft → gates → publish" flow.

**Decisions this builds on:** AI-generated + native-French human-review gate (Gate H); content atoms are tagged `Item`s (`schema.ts`); the studio adopts a block editor; pre-generate + cache audio before publish; the research already drafted a **Master Prompt + job-spec system** (`CONTENT-CURRICULUM-AND-GENERATION-PLAN.md`) and a **generation runner** (`CONTENT-PART4-FIX-PROMPTS.md`) — the pipeline builds on those, it does not replace them.

**Principle:** generation is not "write me a lesson." It is *emit validated, tagged schema entities that pass deterministic correctness gates and a native-review gate, with full provenance.* Everything below serves that.

> Grounded in 2025-26 best practice (structured generation, deterministic factuality gates, LLM-as-judge, HITL — sources in §Tooling). **The defining lesson: schema-valid ≠ correct.** Perfectly-shaped JSON can be pedagogically wrong, so structure is enforced cheaply (Stage 1) and *correctness is a separate gate* (Stages 2-5). A cross-document inconsistency reconciliation is being folded in via a second agent.

---

## The pipeline at a glance

```
0 Targets → 1 Generate → 2 Deterministic gates → 3 Adversarial LLM checks →
4 Auto-eval (LLM-judge) → 5 Native review (Gate H) → 6 Audio gen → 7 Publish → 8 Feedback loop
   (any gate fail routes the item back to Stage 1 for targeted regeneration)
```

Every item carries **provenance** end to end: `job_id`, `prompt_version`, `model`, `schema_version`, `format_version` (exam), `generated_at`, `reviewed_by`, `status`.

---

## Stage 0 — Targets & job specs
- **Source of truth = the curriculum tree + coverage matrix** (studio). Each empty (theme × level × mode) cell is a unit of work.
- A **job spec** per pack: theme, level, modes, target-vocabulary list, grammar scope for the level, quantities (e.g. 12–16 flashcards, 6–10 dictations, 1 episode), the can-do `goal`, and the register.
- The **Master Prompt** (from the research) supplies the standing rules: LEVEL DISCIPLINE (tense scope + word-length caps per level), **never a bare noun** (always a determiner), **≥30% vocabulary recycled** from earlier units, **≤8 new lexical items** per batch, comprehensible-input constraints.
- **Style guide** injected: no em dash in user-facing copy; tu/vous and register per task.

## Stage 1 — Generation (structured, not prose)
- LLM emits **validated schema entities** (`Item`, `Lesson`/`LessonSection`, `Scenario`, `exam_task`), not prose, via a **three-layer reliability stack**: (1) **Zod/Pydantic** schema as source of truth, closed enums (`gender: m|f`, `cefr: A1..C2`) so a novel value can't be emitted; (2) an **Instructor-style re-ask** that feeds the exact validation error back and retries; (3) **provider strict mode** (OpenAI Structured Outputs) or **constrained decoding** (XGrammar/Guidance) underneath if self-hosting. Cap retries at 2-3, then **dead-letter to human review** — never silently drop.
- **Emit fields, not sentences:** `ipa`, `lemma`, `tense`, `person`, `gender`, `distractor_rationale` as separate slots, so each is independently checkable in Stage 2.
- Per-block AI actions (distractors, examples, gloss, *draft* IPA, model answers) — drafts, all subject to the gates.
- **Model tiers:** mid model (Gemini 3.1 Pro / Sonnet 5) for quality drafts; ultra-cheap (DeepSeek) for bulk/first drafts. Whole-corpus text-gen ~$60 one-time, so the quality tier is affordable.
- **Cache** the shared instruction prefix across packs (~90% input-cost cut). Stamp provenance on every item.

## Stage 2 — Deterministic gates (non-LLM, the anti-hallucination layer)
These are the defense against a "confidently taught lie." For the error classes below, a deterministic tool is *decidable* and therefore authoritative — the LLM only ever proposes a candidate. (No single French toolkit bundles these; you assemble them, and each has edge cases worth sample-auditing.)
- **Schema + referential integrity** (audioRef resolves, itemId valid, quiz links, no orphans).
- **Verb conjugation** — assert every conjugated form matches its `lemma`+`tense`+`person` via **verbecc** or **mlconjug3** (both handle novel verbs). Mismatch → auto-reject.
- **Noun gender + morphology** — cross-check `gender`/agreement against a gold lexicon: **Lefff**, **Lexique.org**, or **spaCy** French morphology. Mismatch → flag for human.
- **IPA** — generate deterministically with **Phonemizer / espeak-ng** and treat the LLM's IPA as a candidate to overwrite/diff (espeak-ng French has liaison/proper-noun edge cases → sample-audit).
- **CEFR level fit** — score generated text with a **CEFR classifier** (CELL / Ace-CEFR for dialogue) to confirm it hits the target band; note prompt-level level-control degrades on small models, so use a classifier gate, not prompt hope.
- **Vocabulary/comprehensible-input discipline (deterministic set ops, not prompt requests):** compute **Token Miss Rate** (% of tokens above the taught set) and reject/regenerate above threshold; enforce ≤N new items and ≥30% recycled vocab by **diffing item tokens against the allowed lexicon**.
- **Never-a-bare-noun** — determiner present on every noun item/gloss/option.
- Fail → route back to Stage 1 (regenerate the failing slot) or flag for human.

## Stage 3 — Adversarial LLM cross-checks
LLM-as-critic (use a **different model family than the generator** to avoid shared blind spots), producing warnings + confidence, not a hard gate alone:
- **Distractor check** — are the wrong options actually wrong, and is the key unambiguously correct? (The gap constrained decoding cannot catch.)
- **Contradiction / entailment** across a dialogue or dictation to catch internal inconsistency.
- **Cultural claims** should be **RAG-grounded** (retrieve a source), not free-generated; unsourced factual claims → review-required.

## Stage 4 — Auto-eval (LLM-as-judge) — *triage, not authority*
- Score each pack against a **pedagogy rubric** (level fit, clarity, task achievement, naturalness, exam-format fidelity), calibrated against a **native-verified golden set**, to **prioritize human review and catch regressions on batch regenerations** — not as the pass/fail gate for exam items.
- **Bias mitigations (documented, and some survive naive fixes):** run **both option orderings and require agreement** (position bias); use a **different-family judge** (self-preference); **penalize verbosity** in the rubric; and **calibrate to human ratings continuously** — ensembling/order-reversal fix variance but *not* biases shared across judges, so humans stay authoritative on high-stakes.
- **Tooling:** promptfoo (YAML tests in-repo, CI), DeepEval, lm-evaluation-harness; Braintrust/LangSmith for tracing + PR-triggered eval gates. Re-run the golden set on every prompt/model version; alert on score deltas (drift). Store the judge's `prompt_version`.

## Stage 5 — Native review (Gate H, the real cost line)
- **Multi-critic consensus first, human on disagreement:** items where the deterministic checkers + adversarial critics all agree auto-pass (low-stakes); disagreement escalates to a human.
- **Triage by stakes:**
  - **100% review:** Sons/A0 + A1, all **exam model answers + rubrics + answer keys**, cultural claims, and anything a checker/judge flagged.
  - **Sampling:** lower-stakes B1+ vocabulary (~10–20%), with **escalation to 100%** if the sample error rate exceeds a threshold.
- **Reliability discipline:** target **IRR ≥ 0.80** (Cohen's κ ≥ 0.65 / Krippendorff's α ≥ 0.70), 3+ raters on calibration sets, **senior adjudication on disagreement**, and **blinded calibration items seeded into review queues** to monitor drift. Trained reviewers score ~15-20% higher IRR — so train them.
- **Review UI (studio):** surface the **deterministic-checker verdicts + judge score + provenance next to the item** so the human *confirms* rather than re-derives. Per-block approve/request-changes, comments, sign-off recorded (RBAC).
- Cost/throughput: native review is the bottleneck and the real spend (~$3–5k launch coverage). Size the reviewer FTE against (high-stakes item count) + (sample rate × low-stakes volume) + (dead-letter queue).

## Stage 6 — Audio generation (fixed narration)
- Only **after text is approved** (never voice unreviewed text).
- **Batch TTS** in Camille's single neural voice → segment maps + timestamps → media library → approve.
- **Genuine slow renders** for phonics/dictation; time-stretch handles other speeds.

## Stage 7 — Publish
- The studio **validation checklist** must be green: all gates passed, `format_version` (exam), disclaimer attached (exam), audio present + approved, IPA present, required translations complete.
- **Publish = build the OTA content snapshot** → staged/percentage rollout via the feature-flag system → device pulls it. Versioned and rollback-able.

## Stage 8 — Feedback loop (content improves from real use)
- SRS/attempt data surfaces **leeches, high-lapse, and confusing items** → flagged in the content-health view → fixed/regenerated → re-reviewed → republished.
- Closes the loop: the corpus gets better from usage, not guesswork.

---

## Cross-cutting concerns
- **Provenance & traceability:** every item knows how it was made and by whom; enables targeted re-generation.
- **Versioning:** prompts/schemas/exam-formats are **versioned artifacts (treated like code — repo, diff, roll back)**. A change to any of them, or to a checker/lexicon, marks affected items **stale by version hash** and enqueues **only those** for regen + re-review (never the whole corpus).
- **Orchestration:** a **generation runner** (queue + workers, resumable) with an **idempotency key = hash(prompt_version + schema_version + inputs)**; caching on that key means an unrelated change regenerates nothing, and only hash-changed items re-run — a large cost lever. Builds on the runner sketched in `CONTENT-PART4-FIX-PROMPTS.md` and the existing `port-content.ts` / `publish-content.ts` scripts.
- **SRS-ready card design (pedagogy):** target **FSRS-6** (≈20-30% fewer reviews than SM-2); generate to **minimum-information / one-fact-per-card**, and **select the best ~10-15 sentences per unit, not every unknown word** — bake this selectivity into the generator instructions *and* a post-filter.
- **Roles:** curriculum/prompt designer (owns job specs + Master Prompt), generation engineer (runner + gates), native reviewers (Gate H), editor/publisher.
- **Cost (from the monetization doc):** text-gen ~$60 one-time; fixed audio ~$50–150 one-time; **native review ~$3–5k** (the meaningful line). Generation is cheap enough to regenerate the whole corpus many times during iteration.

## Tooling & sources (2025-26)
- **Structured gen:** Zod/Pydantic + Instructor (retry), OpenAI Structured Outputs / XGrammar / Guidance. Caveat: *schema-valid ≠ correct.*
- **Deterministic French checkers:** verbecc / mlconjug3 (conjugation), Lefff / Lexique.org / spaCy (gender+morphology), Phonemizer / espeak-ng (IPA). No unified toolkit; each has edge cases → sample-audit.
- **Level/vocab:** CEFR classifiers (CELL, Ace-CEFR), Token Miss Rate filter.
- **Eval/judge:** promptfoo, DeepEval, lm-evaluation-harness, Braintrust/LangSmith; judge biases (position/self-preference/verbosity/systematic) survive naive fixes → calibrate to humans, keep humans authoritative on exam items.
- **HITL:** risk-based triage + sampling; IRR ≥ 0.80 (κ ≥ 0.65 / α ≥ 0.70), 3+ raters, adjudication, blinded calibration items; multi-critic consensus, human on disagreement.
- **SRS:** FSRS-6; minimum-information cards.

## Prove-it-first: the vertical slice
Before scaling to the full library, run the entire pipeline (Stages 0–7) on a **small vertical slice — ~3–5 packs × 3 levels × all modes**, including native review and audio. This validates the gates, the review cost/throughput, the Master Prompt's level discipline, and the audio pipeline before committing to 108 themes and the exam banks. Then scale theme-by-theme and exam-track by exam-track.

## Open decisions (to confirm)
- **A) Generation model tier** — mid (Gemini 3.1 Pro / Sonnet) for all drafts vs cheap (DeepSeek) first-draft then mid-model polish on high-stakes only.
- **B) Sampling rates for low-stakes review** — how aggressive (e.g. 10% vs 20%) before escalation; sets the review budget.
- **C) Which deterministic tools** to standardize on for French conjugation / gender / IPA (affects build).
