# Ealch — The Examiner (mock-exam engine) Spec

The timed mock-exam engine for **TEF, TCF, and DELF/DALF**: 3 exam families × **5 parallel series each** × 4 skills (listening, reading, speaking, writing), in authentic format, AI-marked against human-approved rubrics. This is the premium/exam-tier wedge of the product.

**Distinction:** the *Examiner* is the exam simulator (timed mocks + marking). The *Exam Preparation* domain (themes 101-108 in the catalogue) is the teaching/strategy content. Prep teaches; the Examiner tests.

**Build status:** not built. Today it's 3 static onboarding chips routing to `speak.tsx`. Reusable foundations that already exist: the roleplay engine, on-device STT + scoring, the AI coach (Camille) for marking, the content schema's exam hooks (`exam_task` payload, `roleplay_scenario.exam{}`), and the OPR studio for authoring.

---

## 1. The hard constraint: original items only

France Éducation international (DELF/DALF, TCF) and CCI Paris / Le français des affaires (TEF) own the past papers (copyright) and the exam names (trademark). Therefore:
- **Author original items in the authentic format.** Never reproduce, paraphrase, or closely imitate real published papers.
- **Non-affiliation disclaimer** required and visible: "not affiliated with, endorsed by, or connected to France Éducation international or CCI Paris" (i18n string `examDisclaimer`, pending legal wording — **Gate D**).
- **Names are descriptive use only** ("practice test in the TEF format"), never implying official status.
- **`format_version` tag on every exam item** (DB CHECK constraint). Exam formats get revised (TCF/TEF have changed recently); versioning lets us retire/refresh items when a format changes without hunting them down.

---

## 2. Exam data model

Extends the existing schema. Every exam item is still a tagged pool item (level + skill), plus exam metadata.

```
ExamFamily        TEF | TCF | DELF/DALF
  ExamVariant     e.g. TEF Canada | TEF IRN | TCF Canada | TCF IRN | DELF B1 | DALF C1
    ExamSeries    1..5  (parallel, equated forms of the same variant)
      Section     CO | CE | EO/PO | EE/PE
        ExamTask  { section, cefr_level, format_version, prompt/stimulus,
                    items[] (QCM) | responseSpec (open speaking/writing),
                    audioRef?, timing_s, rubric, model_answer, examiner_notes[],
                    scoring_map }
```

- **QCM tasks** (CO, CE): stem + options + correct key + rationale (`why`) + optional audio/passage stimulus.
- **Open tasks** (EO/PO speaking, EE/PE writing): prompt + `responseSpec` (min length/time), **rubric**, **model_answer**, **examiner_notes** — the marking is impossible and dishonest without an authored, human-approved rubric.
- **Speaking interaction tasks** (TEF Section B, TCF interaction, DELF exercice en interaction) reuse the **roleplay engine** via `roleplay_scenario.exam{track, section, rubric, model_answer}`.
- **`scoring_map`**: how raw performance converts to the exam's own scale (see §5).

---

## 3. Per-exam format reference (verified, 2026)

Sourced from France Éducation international (TCF/DELF/DALF) and Le français des affaires / CCI Paris (TEF), July 2026. Comprehension is MCQ with **no negative marking**. **`format_version` keeps these current** as formats evolve.

**TEF** — single item bank, delivered in configurations. *EO → reuse the roleplay engine.*

| Variant | CO | CE | EE | EO | Scoring |
|---|---|---|---|---|---|
| **TEF Canada** (launch) | 40 q / 40 min (each recording plays once) | 40 q / 60 min | 2 tasks / 60 min — A: continue a news item ≥80 w (25 min); B: justify a viewpoint ≥200 w (35 min) | 2 sections / 15 min — A: ask questions to get info (5 min); B: argue to convince (10 min) | CO /360 · CE /300 · EE /450 · EO /450 → 7-level scale (A1–C2) → **CLB/NCLC** |
| TEF IRN | ~40 q | ~40 q | 2 tasks | 2 sections | B2 ceiling; ~2 h; language only |
| TEF tout public | 40 q / 40 min | 40 q / 60 min | 2 tasks / 60 min | 2 sections / ~15 min | + **Lexique et structure** 40 q / 30 min module |

**TCF** — calibrated bank, delivered as a **fixed item set** per candidate (not per-answer adaptive), progressive difficulty, 4 options. *EO → roleplay + monologue.*

| Variant | CO | CE | EE | EO | Other | Scoring |
|---|---|---|---|---|---|---|
| **TCF Canada** (launch) | 39 q / 35 min | 39 q / 60 min | 3 tasks / 60 min (msg 60–120 w · article 120–150 w · compare-opinions 120–180 w) | 3 tasks / 12 min (incl. 2 min prep) | — | comp. 100–699 (Canada 331–699) · expression 4–20 → CEFR → NCLC |
| TCF IRN | 25 q / 20 min | 25 q / 35 min | 3 / 30 min | 3 / 10 min | — | evolved 12 May 2025 |
| TCF tout public | 29 q / 25 min | 29 q / 45 min | 3 / 60 min (opt) | 3 / 12 min (opt) | **Maîtrise des structures** 18 q / 15 min | 100–699 bands: A1 100–199 … C2 600–699 |

**DELF/DALF** — per level; **/100, pass 50/100, min 5/25 per skill (below 5 eliminatory)**. New MCQ comprehension format (phased 2020–23) is now standard.

| Level | CO | CE | PE | PO |
|---|---|---|---|---|
| A1 | 4 ex / 20 min | 4 ex / 30 min | form + ~40-w message / 30 min | 3 parts, 5–7 min (+10 prep) |
| A2 | 4 ex / 25 min | 4 ex / 30 min | 2 texts ≥60 w / 45 min | 3 parts, 6–8 min (+10 prep) |
| B1 | 3 ex / 25 min | 2 ex / 45 min | text ≥160 w / 45 min | 3 parts, ~15 min (+10 prep): incl. express a viewpoint |
| **B2** (launch) | 2 ex / 30 min | 2 ex / 60 min | argue a viewpoint ≥250 w / 60 min | ~20 min (+30 prep): **défense d'opinion argumentée** + débat with jury |
| DALF C1 | ~40 min | 50 min | 2 h 30: **synthèse** ~1000 w + essai (choose domain) | exposé from dossier, ~30 min (+1 h prep) |
| DALF C2 | CO+PO combined /50, 30 min (+1 h prep) | CE+PE combined /50, 3 h 30, ≥700 w | (combined) | (combined); min 10/50 per paper |

**⚠ Do not hard-code scoring cut-points:** the exact TEF→CLB/NCLC and TCF /20→CEFR thresholds live in official correspondence PDFs (TEF-NCLC updated Oct 2024) and must be referenced there, not from memory, when building the `scoring_map`. Also: a reported Sept-2025 TEF listening tweak (3-option micro-trottoir, some replays) conflicts with the "plays once" rule — verify before authoring CO items. And note the **1 Jan 2026 naturalisation change to B2** (raises target level for IRN candidates; does not change exam structure).

**Speaking-first delivery rule (app-wide):** every level touches CO + PO; CE + PE ramp up from B1 (matches both the exams and the product's speaking-first stance).

---

## 4. The 5-series design (parallel forms without copying)

Each variant ships **5 equated series** so a learner can sit multiple full mocks without repeats.
- **Parallel forms:** same blueprint (section structure, item counts, difficulty distribution, timing), different content. Authored, not cloned.
- **Difficulty equating:** target the same CEFR distribution per series so scores are comparable across series. Track per-item difficulty from real attempt data (SRS/attempt log) and rebalance.
- **Blueprint-driven authoring:** the OPR studio holds an *exam blueprint* per variant; each series is generated/authored against that blueprint, then human-reviewed. This guarantees 5 genuinely parallel, non-duplicate forms.

**Volume:** 3 families × (multiple variants) × 5 series × 4 skills. Even at one variant per family to start, that's **60 full skill-exams** + their item banks. AI drafts against the blueprint; native reviewers approve (Gate H is mandatory here — exam model answers and rubrics cannot ship unreviewed).

---

## 5. AI marking system (the hard part, done honestly)

Objective skills (CO, CE) are auto-scored against keys. Speaking (EO/PO) and writing (EE/PE) need AI marking, and this is where most exam apps quietly lie.

**Principles:**
1. **No rubric, no marking.** Every open task carries an authored, human-approved rubric + model_answer + examiner_notes. An LLM grading against no rubric marks correct answers wrong at scale, invisibly.
2. **Rubric-anchored evaluation.** The marker (LLM) scores the learner's response *against the rubric criteria* (task achievement, coherence, range, accuracy, pronunciation/fluency for speaking), returns a per-criterion score + evidence + the band.
3. **Speaking pipeline:** on-device STT transcribes → LLM marks the transcript against the rubric for content/structure/range; note that pronunciation/prosody can't be judged from a text transcript, so pronunciation is a **separate, clearly-scoped** signal (the honest three-way verdict, not a fake %), or a cloud pronunciation-assessment provider if we later want a real score.
4. **Honest framing:** results are labelled an **"indicative simulation, not an official score."** Show a band range + confidence, never a false-precision number implying FEI/CCI authority.
5. **Calibration:** periodically check AI marks against native-reviewer marks on a sample; track drift; tune the marking prompt. Store the marking `prompt_version` alongside each result.
6. **Feedback, not just a grade:** every marked response returns the model_answer + examiner_notes + specific "to reach the next band, do X" guidance (this is the product value, and the reason someone pays).

**Scoring conversion:** each family's `scoring_map` turns rubric scores into that exam's own scale (TEF points→CLB/NCLC, TCF 0-699 band, DELF /100 with pass 50 and per-skill minimum), presented with the non-official disclaimer.

---

## 6. Exam-day experience (in-app)

- **Two modes:**
  - **Mock (exam conditions):** full timing, section order, no hints, single attempt per sitting, no pause (or a single documented pause). Produces a full score report.
  - **Practice (learning):** untimed or generous timing, hints/rationale available, per-item feedback immediately, retryable. For building toward the mock.
- **Timed engine:** per-section countdown, auto-advance at time-out, section locking, resume-safe if the app backgrounds (honest handling, no time inflation — matches the progress-engine fix already flagged in the app).
- **Embedded swipe navigation:** within a section, swipe moves between questions and **stays inside the exam** (never exits the app); swipe-back = previous question. Section boundaries are hard (can't swipe back into a timed-out section).
- **Result report:** overall band + per-skill breakdown + strengths/weaknesses + model answers + examiner commentary + a "recommended prep" deep-link back into the Exam Preparation domain / Den for weak skills. Store the sitting in progress/attempt log so the SRS can surface weak areas.

---

## 7. Authoring in the OPR studio

- **Exam blueprint editor:** define a variant's section structure, item counts, difficulty distribution, timing, and scoring_map once.
- **Series builder:** author/generate 5 parallel series against the blueprint; the coverage matrix shows series completeness per skill.
- **Exam-specific block types:** QCM-with-audio, reading-passage-QCM, speaking-prompt (+rubric/model/notes), writing-prompt (+rubric/model/notes), interaction-scenario (roleplay-exam).
- **Mandatory gates on publish (extends the studio's validation checklist):** `format_version` set · rubric + model_answer + examiner_notes present · `examDisclaimer` attached · **native-reviewer sign-off** (Gate H) · legal wording approved (Gate D) · answer keys validated · timing set.
- **AI assist:** draft items/rubrics/model answers against the blueprint; native reviewer edits and approves. Never auto-publish exam content.

---

## 8. Monetization & sequencing tie-in
- The Examiner is the **premium/exam-tier wedge** (see monetization doc): full series + AI marking sit behind the Exam tier (~$14.99 or an exam-bootcamp pack); a free taster (one short diagnostic mock or one skill) drives conversion.
- **Market fit:** the researched gap is exactly this — no major competitor offers genuine TEF/TCF/DELF simulation, and the TEF/TCF-Canada immigration segment has the highest willingness to pay.
- **Sequencing:** heavy (needs the marking pipeline + native review). Recommend building **one variant per family, one full series, speaking+writing marking** as the proof, then scale to 5 series and more variants. (Sequencing lives in the build plan, not this vision doc.)

---

## 9. Resolved decisions
- **A) Launch set = Canada/immigration:** build **TEF Canada + TCF Canada + DELF B2** first (highest willingness to pay, matches the market gap), then scale to other variants and the full 5 series.
- **B) Speaking marks = transcript-based content marking:** on-device STT transcript marked against the rubric for content/structure/range; pronunciation shown as the honest three-way verdict, **not** a score. No per-minute cloud cost. (A real pronunciation sub-score can be added later if the exam tier demands it.)
- **C) Marking model = cheap tier** (user's call, for cost). **Mitigation (important):** marking is quality-critical, so (1) calibrate the cheap-tier marker against native-reviewer marks on a sample and track drift, (2) keep the rubric + model answer + examiner notes rich so the cheap model has strong anchors, (3) be ready to upgrade specific high-stakes tasks (e.g. C1 synthèse, B2 argued essay) to a premium marker if calibration shows the cheap tier is inconsistent. Store `prompt_version` + `model` on every result so a re-mark is possible.
