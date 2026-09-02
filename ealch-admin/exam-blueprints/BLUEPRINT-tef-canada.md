# BLUEPRINT — TEF Canada

**Version:** `tef-canada-2025.09`
**Exam body:** CCI Paris Île-de-France / Le français des affaires
**Compiled:** 2026-08-24 (phase E0)
**Contains:** structural facts only. No examples, no stems, no options. See [README.md](README.md).

Store this version string in `ExamTask.formatVersion` on every task authored against it.

---

## 1. Format lineage

| Date | Change |
|---|---|
| 11 Dec 2023 | Major revision. CE and CO both lost questions while keeping their durations. CE dropped text-reordering and synonym-sentence exercises (old sections C and D) and gained sentence-level gap fill and rapid reading with graphics. CO dropped radio-rubric identification and the phonetics section (old sections B and D) and gained a radio reportage. Expression écrite and expression orale were explicitly unchanged. |
| 1 Sept 2025 | CO only. Micro-trottoir items moved from 4 answer options to 3. Certain interview segments may now be played twice. |
| 2026 | No further changes reported. |

**The 11 Dec 2023 date also governs scoring.** IRCC's conversion grid applies to tests taken on or after that date, and candidates read the *Équivalence ancien score* column of their results sheet, not the `/699` column.

---

## 2. Paper shape

Four compulsory épreuves, ≈2 h 55 total, normally the same day for an immigration file.

| Order | Épreuve | Skill | Questions / tasks | Duration | Marking |
|---|---|---|---|---|---|
| 1 | Compréhension orale | CO | 40 | 40 min | machine |
| 2 | Compréhension écrite | CE | 40 | 60 min | machine |
| 3 | Expression écrite | EE | 2 sections | 60 min | human, double |
| 4 | Expression orale | EO | 2 sections | 15 min | human, double, recorded |

`ExamPaper.sections` must carry all four in this order.

---

## 3. Compréhension orale — 40 questions / 40 minutes

Four answer options per question and one point per correct answer, except where noted. No penalty for a wrong or blank answer.

| Block | Published count | Document type | Options | Plays |
|---|---|---|---|---|
| A | 4 | Conversations avec dessins | 4 (images) | 1 |
| B | 4 | Annonces publiques | 4 | 1 |
| C | 6 | Micros-trottoirs | **3** | 1 |
| D | 2 | Chroniques radio | 4 | 1 |
| E | 6 | Interviews | 4 | **1 or 2** |
| F | 1 | Reportage | 4 | 1 |
| G | 10 | Documents divers | 4 | 1 |
| | **33 published** | | | |

### 3.1 UNRESOLVED — the 7 missing questions

The exam body's own preparation page states 40 questions and then itemises a breakdown summing to **33**. The remaining 7 are not allocated anywhere on any page consulted. This is a gap in the published material, not a reading error, and it is reproduced identically across the official page and the prep sites that copy it.

**Fill rule (`G-elastic`), binding until a real paper says otherwise:** hold the six named blocks at their published counts (A 4, B 4, C 6, D 2, E 6, F 1 = 23) and let block G carry the remaining **17**. G is a catch-all by name, so extending it distorts the paper less than inflating a named block.

G's 17 questions are composed as a mix, ordered so no two consecutive items share a document type:

| G sub-type | Questions |
|---|---|
| Short two-turn exchanges | 4 |
| Voicemail and answering-machine messages | 3 |
| Short public information messages | 3 |
| Short interviews or vox-pop follow-ups | 4 |
| Spoken instructions or directions | 3 |

Record the fill rule in `ExamSection.blueprintId` provenance so a later correction can find every affected paper.

### 3.2 Mechanics

- Audio starts automatically. There is no play button in exam conditions.
- A short reading window precedes each recording so the candidate can read the questions.
- No scrub bar, no replay, no return to an earlier question.
- Block C uses 3 options, every other block 4. This is the only per-block option-count variation.
- Block E is the only block permitted 2 plays.

### 3.3 Block A images

Block A presents an audio exchange and an image set; the images *are* the answer options. Each item therefore needs an image brief and an `imageAlt` per option. An image with no alt fails UDL 01 and must not ship.

---

## 4. Compréhension écrite — 40 questions / 60 minutes

Four options per question, one correct, one point each, no penalty. **This section's published breakdown sums exactly to 40 and is fully resolved.**

| Block | Count | Name | Task |
|---|---|---|---|
| A | 7 | Documents de la vie quotidienne | 7 documents, 1 question each |
| B | 6 | Phrases lacunaires | 6 single sentences, 1 gap each |
| C | 4 | Textes lacunaires | 2 short texts, 2 gaps each |
| D+E | 5 | Lecture rapide de textes et de graphiques | match statements to short texts and to graphic data |
| F | 10 | Documents administratifs et professionnels | |
| G | 8 | Articles de presse | |
| | **40** | | |

The exam body groups B and C as "10 questions comportant des phrases et textes lacunaires" and D and E as "5 questions avec une lecture rapide de textes et de graphiques". The finer split (B 6 / C 4, and D/E as two named exercise families) comes from a prep-course breakdown and is treated as the authoring shape.

---

## 5. Expression écrite — 2 sections / 60 minutes

| Section | Time | Task | Length |
|---|---|---|---|
| A | 25 min | Fait divers: continue a news item from a given title and opening | 80–120 words |
| B | 35 min | Lettre argumentée: state and defend a position | 200+ words |

### 5.1 Section A, as the exam body describes it

The candidate is given **a title and the beginning of a text**. They must produce a coherent and relevant continuation supplying *details, explanations and new information not present in the prompt*. Recopying the opening and summarising it both fail the task.

Assessed on four dimensions:
1. Relevance of the information transmitted (fit with the subject)
2. Quality of the information (development, detail, illustration)
3. Coherence and cohesion of the text, sentence quality, lexical range and accuracy
4. Spelling and punctuation

**UNRESOLVED:** the 80–120 word range is reported consistently by prep sources but does not appear on the exam body's own page. Treat it as the authoring target and label it as unofficial in `examinerNotes`.

### 5.2 Section B

State a position, develop at least three distinct arguments, support each with explanation and a concrete example, connect them with logical connectors, and close with a conclusion that reaffirms the position without introducing new material.

### 5.3 Marking

The evaluation grid carries **6 linguistic criteria**, plus communicative criteria specific to Section A and communicative criteria specific to Section B. The precise descriptor wording is not published. Our rubrics are modelled on the four assessed dimensions above plus the linguistic split, and must be labelled as our own construction, not the official grid.

---

## 6. Expression orale — 2 sections / 15 minutes

Face to face with an examiner. Systematically recorded to permit double marking.

| Section | Time | Task |
|---|---|---|
| A | 5 min | **Obtain information.** The candidate questions the examiner about an advert or activity to extract as much detail as possible. The examiner plays the interlocutor. |
| B | 10 min | **Convince.** The candidate presents an activity to the interlocutor and persuades them to take part, offering opinions and supporting examples. |

Section A is assessed partly on whether the questions asked were **appropriate and complete** — whether the candidate covered every angle the document affords.

TEF Canada and TEFAQ take both sections. TEF IRN and TEF carte de résident take Section B only.

---

## 7. Scoring

| Section | Scale |
|---|---|
| Compréhension orale | /360 |
| Compréhension écrite | /300 |
| Expression écrite | /450 |
| Expression orale | /450 |

### 7.1 NCLC conversion (IRCC grid, tests from 10 Dec 2023)

| NCLC | CO /360 | CE /300 | EE /450 | EO /450 |
|---|---|---|---|---|
| 10 | 316–360 | 263–300 | 393–450 | 393–450 |
| 9 | 298–315 | 248–262 | 371–392 | 371–392 |
| 8 | 280–297 | 233–247 | 349–370 | 349–370 |
| 7 | 249–279 | 207–232 | 310–348 | 310–348 |
| 6 | 217–248 | 181–206 | 271–309 | 271–309 |
| 5 | 181–216 | 151–180 | 226–270 | 226–270 |
| 4 | 145–180 | 121–150 | 181–225 | 181–225 |

The candidate's claimable level is set **skill by skill**, and the weakest skill governs the file. The report screen must present it that way.

### 7.2 UNRESOLVED — raw to scaled

CO and CE are 40 raw marks each and report on /360 and /300. The conversion is **not published**, and it is not linear: a flat 9 points and 7.5 points per question would cap the raw maxima at 360 and 300 only by coincidence of scale, and the exam body equates from live sitting data we do not have.

**Binding consequence:** we cannot produce an equated score. `SectionScoring.map` is an expert-judged approximation and `SectionScoring.nclc` must carry a **range** (`nclcLow`/`nclcHigh`, default span 2). Every score surface labels it a practice estimate. Do not publish a point estimate off this section.

---

## 8. Unresolved list

| # | Gap | Status | Blocks |
|---|---|---|---|
| 1 | CO: 7 of 40 questions unallocated in the published breakdown | Fill rule `G-elastic` adopted (§3.1) | nothing |
| 2 | EE Section A word count not on the exam body's page | 80–120 adopted, labelled unofficial | nothing |
| 3 | Raw-to-scaled conversion not published | NCLC range adopted (§7.2) | nothing |
| 4 | Whether TEF Canada's CO block structure differs from the generic TEF page | Assumed identical; the page presents one structure for TEF Canada, TEFAQ and TEF IRN, varying only IRN's total | re-check on any format change |
| 5 | Official EE and EO descriptor wording for the 6 linguistic criteria | Not published; our rubrics are our own construction | nothing |

---

## 9. Sources

All retrieved 2026-08-24.

**Exam body (Le français des affaires):**
- [Se préparer à l'épreuve de compréhension écrite du TEF](https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-de-comprehension-ecrite-du-tef/) — CE total, duration, five-way breakdown summing to 40, scoring rule
- [Prepare for the oral comprehension test of the TEF](https://www.lefrancaisdesaffaires.fr/en/prepare-yourself-for-the-oral-comprehension-test-of-the-tef/) and its [French original](https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-de-comprehension-orale-du-tef/) — CO total, duration, seven-way breakdown summing to 33, single-play mechanics, TEF IRN variant
- [Prepare for the oral expression test of the TEF](https://www.lefrancaisdesaffaires.fr/en/prepare-yourself-for-the-oral-expression-test-of-the-tef/) — EO sections, timings, recording and double marking, IRN variant
- [Le fait divers : préparer la section A de l'expression écrite du TEF](https://www.lefrancaisdesaffaires.fr/le-fait-divers-preparer-la-section-a-de-lexpression-ecrite-du-tef/) — what is given, what must be produced, 25 minutes, the four assessed dimensions
- [Le TEF évolue à partir du lundi 11 décembre 2023](https://www.lefrancaisdesaffaires.fr/evolutions-tef-2023/) — what was removed, modified and added in CE and CO; EE and EO unchanged

**Format detail:**
- [Breakdown of the TEF compréhension écrite](https://learnfrenchwithalexa.substack.com/p/breakdown-of-the-tef-comprehension) — the seven named CE blocks A to G
- [TEF Canada format guide](https://getpenvo.com/blog/tef-canada-format-guide) — paper totals
- [TEF Canada format changes 2026: the listening update](https://www.tcftefprep.com/blog/tef-canada-exam-format-changes-2026) — 1 Sept 2025 CO change
- [TEF Canada expression écrite sections A & B](https://rossielts.com/tef-canada-exam/expression-ecrite/) — 25/35 minute split, word counts
- [Compréhension orale TEF et TEFAQ](https://atfmontreal.ca/2024/07/03/comprehension-orale-tef-tefaq/) — micro-trottoir structure (one question put to three people in the street)

**Scoring:**
- [TEF Canada score chart and NCLC/CLB conversion](https://www.languagenext.com/blog/tef-canada-score-chart/) — the IRCC grid, section maxima, and the *Équivalence ancien score* column rule
