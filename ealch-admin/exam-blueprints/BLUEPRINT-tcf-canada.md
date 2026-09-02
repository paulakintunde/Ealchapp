# BLUEPRINT — TCF Canada

**Version:** `tcf-canada-2026.01`
**Exam body:** France Éducation international
**Compiled:** 2026-08-24 (phase E0)
**Contains:** structural facts only. No examples, no stems, no options. See [README.md](README.md).

Store this version string in `ExamTask.formatVersion` on every task authored against it.

---

## 1. Format lineage

No format change is reported for TCF Canada across the pages consulted for 2025 or 2026. The version string is dated rather than change-derived: it records *when we last checked*, which for a format with no announced revision is the only thing it can truthfully mean.

Re-check on any France Éducation international announcement, then bump and run the staleness report.

---

## 2. Paper shape

Four compulsory épreuves for Canadian immigration procedures (Entrée Express, PTQF/RSWP), ≈2 h 47 total. Expression orale is usually scheduled separately from the three collective épreuves.

| Order | Épreuve | Skill | Questions / tasks | Duration | Marking |
|---|---|---|---|---|---|
| 1 | Compréhension orale | CO | 39 | 35 min | machine |
| 2 | Compréhension écrite | CE | 39 | 60 min | machine |
| 3 | Expression écrite | EE | 3 tasks | 60 min | human, double blind |
| 4 | Expression orale | EO | 3 tasks | ~12 min | human, face to face |

`ExamPaper.sections` must carry all four in this order.

---

## 3. The defining property: a progressive ramp

TEF is a paper of blocks. **TCF is a paper of a slope.** Both comprehension épreuves run from A1 through C2 inside a single undifferentiated question sequence, getting harder as they go. There are no named exercise blocks.

This is the single most important fact in this file, and the one an author coming from TEF will get wrong. Consequences:

- `QcmItem.band` is **required** for every TCF item. It is not inferred and not optional. The schema enforces this for `tcf_canada` specifically.
- A paper of uniformly B1 items is not a TCF paper, however good the items are.
- Item **order is content**. Shuffling a TCF comprehension section destroys the instrument.
- The NCLC estimate reads off *where on the slope the candidate stopped being right*, which is why the band tag has to be authored rather than guessed at scoring time.

### 3.1 Band distribution — OUR CALIBRATION, not published

France Éducation international states the A1-to-C2 range and the progressive difficulty. It does not publish the item count per band. This distribution is ours, weighted toward B1/B2 because NCLC 7 is the level most Canadian immigration candidates are actually chasing:

| Band | Items per épreuve | Positions |
|---|---|---|
| A1 | 3 | 1–3 |
| A2 | 6 | 4–9 |
| B1 | 10 | 10–19 |
| B2 | 10 | 20–29 |
| C1 | 7 | 30–36 |
| C2 | 3 | 37–39 |
| | **39** | |

Applies identically to CO and CE. Check the distribution before review, not after: it is cheap to verify and expensive to retrofit.

---

## 4. Compréhension orale — 39 questions / 35 minutes

Multiple choice, **4 options**, one correct.

Mechanics:
- Each audio document and its question are heard **once only**. No replay.
- No returning to an earlier question.
- Difficulty rises across the épreuve.

Document families, mapped onto the ramp:

| Family | Typical band | Notes |
|---|---|---|
| Short dialogues | A1–A2 | two speakers, few turns |
| Public announcements | A2–B1 | single voice |
| Interviews | B1–B2 | two speakers, sustained |
| Long discussions and debates | B2–C2 | multiple speakers, argument |

**UNRESOLVED:** the number of distinct audio documents is not published, only the question count. Some documents plainly carry more than one question at the upper end. Authoring assumption: one document per item up to B1, and shared documents carrying 2 to 3 items from B2 upward, giving roughly **30 documents per paper**. This is a production estimate, and it drives the audio budget.

---

## 5. Compréhension écrite — 39 questions / 60 minutes

Multiple choice, **4 options**, one correct, progressive A1 to C2.

Document families, mapped onto the ramp. This ladder is the exam body's own description of what the épreuve tests, restated as document types:

| Band | What the candidate must understand | Document types |
|---|---|---|
| A1 | familiar names, very simple words and sentences in communication situations | short messages, friendly or administrative notes |
| A2 | information in everyday documents | classified ads, leaflets, menus, timetables |
| B1 | information about people, facts or events | personal letters, everyday and workplace texts |
| B2 | authors taking a position on concrete or abstract subjects | opinion articles, reports, commentary |
| C1 | long and complex factual or literary texts, specialist articles | feature journalism, professional and technical writing |
| C2 | abstract or complex extracts from books, specialist articles, literary works | literary and academic prose |

---

## 6. Expression écrite — 3 tasks / 60 minutes

One 60-minute budget across all three tasks. The candidate manages the split themselves; the runner should show one clock for the section, not three.

| Task | Words | What must be produced |
|---|---|---|
| Tâche 1 | 60–120 | A message to one or more **named recipients**, describing, recounting and/or explaining. |
| Tâche 2 | 120–150 | An article, letter or note **for several readers**: an account or report **plus** comment, opinion or argument tied to the purpose. |
| Tâche 3 | 120–180 | Compare **two supplied documents** presenting two viewpoints on a social issue. Identify each position and its reasons, compare them, take a position, conclude. |

Task-shape notes that determine whether an authored task is valid:

- **Tâche 2's dual requirement is the task.** An account with no comment fails it, and so does an opinion with no account. The prompt must demand both.
- **Tâche 3 requires the author to write both source documents**, not just the instruction. They must hold genuinely opposed positions and each must state its reasons. Line-by-line paraphrase of them is an explicit failure mode for the candidate, so the documents must be substantive enough that summarising is not a viable strategy.

Marking: assessed **twice, independently, double blind** by France Éducation international correctors. Criteria are linguistic (lexical range, grammatical accuracy, spelling, degree of sentence elaboration) alongside task-completion criteria. The full descriptor wording is not published; our rubrics are our own construction and must be labelled as such.

---

## 7. Expression orale — 3 tasks / ~12 minutes

Individual, face to face with an examiner.

| Task | Time | Prep | What it tests |
|---|---|---|---|
| Tâche 1 | 2 min | none | **Entretien dirigé.** Can the candidate converse with someone they do not know. |
| Tâche 2 | ~5 min 30 total, of which 2 min prep | 2 min | **Exercice en interaction.** The candidate reads a document (an advert, an offer) and questions the examiner to obtain concrete information: price, hours, availability, conditions. |
| Tâche 3 | ~4 min 30 | none | **Expression d'un point de vue.** Express and defend a position on a given question. |

Authoring consequences:
- Tâche 1 needs the examiner's **question ladder**, not a prompt. It is a conversation.
- Tâche 2 needs the document **and an examiner answer bank** covering every fact a candidate could reasonably ask for. Without the bank, the interaction stalls the moment the candidate asks something unanticipated.
- Tâche 3 needs only a question, but it must be genuinely two-sided. A question with one defensible answer tests nothing.

Tâche 2 is the only task with preparation time, and the runner must clock prep separately from the answer.

---

## 8. Scoring

Comprehension reports on **0–699**. Expression reports on **0–20**.

### 8.1 NCLC conversion

| NCLC | CO /699 | CE /699 | EE /20 | EO /20 |
|---|---|---|---|---|
| 10+ | 549–699 | 549–699 | 16–20 | 16–20 |
| 9 | 523–548 | 524–548 | 14–15 | 14–15 |
| 8 | 503–522 | 499–523 | 12–13 | 12–13 |
| 7 | 458–502 | 453–498 | 10–11 | 10–11 |
| 6 | 398–457 | 406–452 | 7–9 | 7–9 |
| 5 | 369–397 | 375–405 | 6 | 6 |
| 4 | 331–368 | 342–374 | 4–5 | 4–5 |

**It is not possible to score below NCLC 4 or above NCLC 10 on TCF Canada.** The report must clamp to that range rather than extrapolating off either end.

Note that CO and CE do **not** share a boundary table. NCLC 8 starts at 503 on listening and 499 on reading. Two lookup tables, not one.

### 8.2 UNRESOLVED — raw to scaled

39 raw marks report on a 0–699 scale that starts at 100, not 0, and the conversion is not published. As with TEF, it is equated from live sitting data we do not have, and here the item-band ramp means a raw count alone cannot even be interpreted: 20 correct at the bottom of the slope and 20 correct spread across it are different performances.

**Binding consequence:** `SectionScoring.map` is an expert-judged approximation that must take the **band profile** of the correct answers into account, not just the count. `SectionScoring.nclc` carries a range (`nclcLow`/`nclcHigh`, default span 2). Every score surface labels it a practice estimate.

---

## 9. Unresolved list

| # | Gap | Status | Blocks |
|---|---|---|---|
| 1 | Item count per CEFR band is not published | Our calibration adopted (§3.1) | nothing |
| 2 | Number of distinct audio documents per CO paper | ~30 assumed (§4); drives the audio budget | re-estimate after paper 1 |
| 3 | Raw-to-scaled conversion not published, and band profile matters | Band-weighted approximation plus NCLC range (§8.2) | nothing |
| 4 | Official EE and EO grid descriptors | Not published; our rubrics are our own construction | nothing |
| 5 | Exact split of Tâche 2's 5 min 30 between prep and speech | 2 min prep is consistently reported; the remainder is ~3 min 30 | nothing |

---

## 10. Sources

All retrieved 2026-08-24.

- [TCF Canada 2026 : présentation complète](https://www.tcfca.com/tcf-canada/) — the four épreuves, question counts, durations, task word counts, EO timings, score scale
- [TCF Canada : épreuves, structure, durée et format](https://tcfcanadaformation.com/tcf-canada/epreuves) — épreuve structure
- [Compréhension orale TCF Canada](https://tcf-canada.ca/comprehension-orale/) — 39 questions, 4 options, single play, progressive A1 to C2, document families
- [Compréhension écrite TCF Canada](https://www.tcfca.com/se-preparer/tcf-canada-comprehension-ecrite/) — 39 items, progressive difficulty, the band-by-band ladder of what the épreuve tests
- [Expression écrite TCF Canada : les 3 tâches expliquées](https://primo-tcf.cloud/blog/expression-ecrite-tcf-canada-3-taches) — the three tasks, word ranges, and what each must contain
- [Expression écrite TCF Canada](https://tcf-canada.ca/expression-ecrite/) — 60 minutes across three tasks, double-blind independent marking, linguistic criteria
- [Tâche 2 de l'expression orale TCF Canada](https://tcfcad.com/blog/preparer-tache-2-expression-orale-tcf.html) — interaction task shape, 2 min preparation, what the candidate must extract
- [TCF Canada — manuel du candidat (PDF)](https://www.afsf.com/exams/tcf/Manuel_du_candidat_TCF_Canada.pdf) — candidate handbook
- [Niveaux NCLC TCF Canada — tableau de correspondance](https://tcfcad.com/niveaux-nclc-tcf-canada.html) — the NCLC grid, and the NCLC 4 to 10 clamp
- [Correspondance TCF Canada / NCLC (PDF)](https://www.afsf.com/exams/tcf/tcf-canada_nclc.pdf) — France Éducation international correspondence table
