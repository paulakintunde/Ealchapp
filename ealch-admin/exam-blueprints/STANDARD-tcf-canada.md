# STANDARD — TCF Canada

**Blueprint:** `tcf-canada-2026.01` · **Read first:** [STANDARD-common.md](STANDARD-common.md)
**Compiled:** 2026-08-24 (phase E0)

Derived rules. Every French example was written fresh for this file. See [README.md](README.md).

---

## 1. The character of a TCF paper

TEF is a paper of blocks. **TCF is a paper of a slope.** There are no named exercise families in the comprehension épreuves: 39 questions run from A1 to C2, getting harder, and the candidate simply keeps going until they cannot.

Three things follow, and an author arriving from TEF will get all three wrong:

1. **`QcmItem.band` is required on every item.** The schema enforces it for `tcf_canada`. It is authored, never inferred.
2. **Order is content.** Item 4 is A2 because it is item 4. Shuffling the section destroys the instrument, which is why the runner must never permute a TCF comprehension section.
3. **The score is read off where the candidate stopped.** Twenty correct at the bottom of the slope and twenty correct scattered across it are different performances and must not produce the same estimate. `SectionScoring.map` weights by band profile, not raw count.

Target distribution per épreuve, from the blueprint (our calibration, not published):

| Band | Items | Positions |
|---|---|---|
| A1 | 3 | 1–3 |
| A2 | 6 | 4–9 |
| B1 | 10 | 10–19 |
| B2 | 10 | 20–29 |
| C1 | 7 | 30–36 |
| C2 | 3 | 37–39 |

---

## 2. Calibrating the slope

The band of an item is set by the stimulus envelope (STANDARD-common §2) **and** the task together. Here is what actually moves an item up a band, in the order the levers are worth using.

### 2.1 Listening

| Band | What makes an item this band |
|---|---|
| A1 | One speaker or a two-turn exchange. The answer is stated literally, once, in the first or last utterance. ≤110 wpm. No idiom. Concrete referents only. |
| A2 | Short dialogue or announcement. The answer is stated literally but the candidate must ignore one competing fact. ~120 wpm. |
| B1 | The candidate must hold **two facts together** to answer, or track one across a turn change. Redundancy is thinning: the key information is said once, not restated. ~140 wpm. One idiomatic expression permitted. |
| B2 | The answer is **distributed** across the document, or requires reading a speaker's stance rather than their words. Hedging appears (`je dirais que`, `dans une certaine mesure`). Turn-taking is quicker. ~160 wpm. |
| C1 | The answer is **implicit**: a reservation, an irony, a disagreement expressed politely. Specialised lexis. The key is not restated anywhere. ~175 wpm. |
| C2 | Argument across several speakers, allusion, register play. Natural unmodified rate. |

Speech rate is the cheapest lever we control and the most faithful one, because it is what actually changes between a real A2 and a real C1 recording. Use it before reaching for rare vocabulary.

### 2.2 Reading

| Band | What makes an item this band | Document ladder |
|---|---|---|
| A1 | Recognise familiar names and very simple words in a communication situation | short messages, friendly or administrative notes |
| A2 | Locate information in an everyday document | classified ads, leaflets, menus, timetables |
| B1 | Understand information about people, facts or events | personal letters, everyday and workplace texts |
| B2 | Follow an author taking a position on a concrete or abstract subject | opinion articles, reports, commentary |
| C1 | Handle long and complex factual or literary texts, specialist articles | feature journalism, professional and technical writing |
| C2 | Handle abstract or complex extracts from books, specialist articles, literary works | literary and academic prose |

**The commonest calibration error** is writing a B2 text and asking an A2 question of it. The item's band is the harder of the two, and an easy question on a hard text wastes the text. Pair them.

---

## 3. Compréhension orale — authoring the 39

**Documents.** Roughly 30 per paper: one per item up to B1, then shared documents carrying 2 to 3 items from B2 upward. Longer documents at the top is what makes the slope feel like a slope.

| Positions | Band | Document family | Length | Items per doc |
|---|---|---|---|---|
| 1–3 | A1 | very short dialogue, single announcement | 10–20 s | 1 |
| 4–9 | A2 | short dialogue, public announcement | 20–30 s | 1 |
| 10–19 | B1 | dialogue, announcement, short interview | 30–50 s | 1 |
| 20–29 | B2 | interview, discussion | 60–90 s | 2 |
| 30–36 | C1 | discussion, debate, feature | 90–120 s | 2–3 |
| 37–39 | C2 | debate, specialist discussion | 120–150 s | 3 |

**Single play, always.** TCF has no two-play block. Do not copy TEF's block E behaviour here.

**Stem mix** follows STANDARD-common §3.1 by band: detail-heavy at the bottom, inference and stance-heavy at the top.

---

## 4. Compréhension écrite — authoring the 39

| Positions | Band | Document | Length | Items per doc |
|---|---|---|---|---|
| 1–3 | A1 | note, SMS, short sign | 15–40 words | 1 |
| 4–9 | A2 | small ad, menu, timetable, leaflet | 40–90 words | 1 |
| 10–19 | B1 | personal letter, workplace note, everyday article | 110–180 words | 1–2 |
| 20–29 | B2 | opinion article, report | 180–280 words | 2 |
| 30–36 | C1 | feature, professional or technical text | 280–400 words | 2–3 |
| 37–39 | C2 | literary or academic extract | 400+ words | 3 |

**The C2 items are the hardest thing in the paper to author well** and the easiest to fake. A genuinely C2 item is not a B2 item with rare words; it is one where the answer depends on register, implication or the shape of the argument. Three of them per paper. Give them the time.

---

## 5. Expression écrite — 3 tasks, one 60-minute budget

The runner shows **one clock for the section**, not three. The candidate manages the split, and that management is part of what the épreuve measures.

### Tâche 1 — Message (60–120 words)

**Task.** Write to one or more **named recipients**, describing, recounting and/or explaining.

**Authoring the prompt.** Name the recipients and the relationship (a neighbour, a colleague, a landlord, a group of friends). Give a concrete reason to write and two or three things that must be conveyed. No argument is required, and asking for one changes the task into Tâche 2.

**What the model answer shows:** appropriate opening and closing for the relationship, the required content covered, clear organisation, register matched to the recipient. Around 100 words.

**Rubric shape** (ours, four criteria): task completion and content coverage · register and address appropriate to the recipient · organisation and cohesion · lexical and grammatical accuracy.

---

### Tâche 2 — Article, courrier ou note (120–150 words)

**Task.** For **several readers**: an account or report **plus** comment, opinion or argument tied to the purpose.

**The dual requirement is the task.** An account with no comment fails. An opinion with no account fails. The prompt must demand both explicitly, and the rubric must score them separately, or the criterion cannot fail.

**Authoring the prompt.** Give a publication context (a residents' newsletter, a workplace intranet, an association bulletin), an event or situation to report, and a stated purpose the commentary must serve.

**Rubric shape** (ours, five criteria): the account · the comment and its fit to the purpose · appropriateness to the readership · organisation and cohesion · lexical and grammatical accuracy.

---

### Tâche 3 — Comparaison de deux points de vue (120–180 words)

**Task.** Compare two supplied documents on a social issue: identify each position and its reasons, compare them, take a position, conclude.

**Authoring requires writing both source documents**, not just an instruction. Each 90–140 words. Requirements:
- Genuinely **opposed** positions, not two angles on agreement
- Each **states its reasons**, so there is something to extract
- Substantive enough that line-by-line paraphrase is not a viable strategy, since paraphrase is the failure mode the task is designed to punish
- Different registers or sources where possible (a commentary and a letter; an expert and a practitioner), so the comparison has texture

**What the model answer shows:** both positions named with their reasons, an explicit comparison, a stated personal position with a reason of its own, a conclusion. Around 160 words. Crucially: **no sentence-by-sentence retelling of either document.**

**Rubric shape** (ours, five criteria): identification of both positions and their reasons · quality of the comparison · personal position, stated and justified · avoidance of paraphrase · lexical and grammatical accuracy.

---

## 6. Expression orale — 3 tasks, ~12 minutes

### Tâche 1 — Entretien dirigé (2 min, no preparation)

**Task.** Can the candidate converse with someone they do not know.

**Authoring produces a question ladder, not a prompt.** It is a conversation, and the examiner drives it. Write:
- An opening question and three or four follow-ups that deepen naturally
- Two or three branches, so the ladder survives an unexpected answer
- A closing move

Keep it in everyday territory: where the candidate lives, what they do, their routine, their plans. Nothing that requires an opinion. This task is a warm-up and it must feel like one.

**Rubric shape** (ours, three criteria): ability to sustain the exchange · range and accuracy for everyday self-presentation · fluency and audibility.

---

### Tâche 2 — Exercice en interaction (2 min prep + ~3 min 30)

**Task.** The candidate reads a document and **questions the examiner** to obtain concrete information: price, hours, availability, conditions.

**Authoring requires two artefacts:**
1. **The document**, 40–80 words: an advert, an offer, a listing. Deliberately incomplete on the facts a real person would need.
2. **The examiner answer bank**, covering every fact a candidate could reasonably ask, including some the document does not hint at. Without it the interaction stalls and the candidate is penalised for our gap.

Wire through `Scenario.exam` so the role-play engine drives the interlocutor.

**The prep clock is separate from the answer clock.** Two minutes with the document, then the interaction. The runner must show them as two phases.

**Rubric shape** (ours, four criteria): coverage of the information needed · question formation and variety · interaction and repair · fluency and range.

---

### Tâche 3 — Expression d'un point de vue (~4 min 30, no preparation)

**Task.** Express and defend a position on a given question.

**Authoring produces one question**, and its only real requirement is that it be **genuinely two-sided**. A question with one defensible answer produces four minutes of agreeing with the question. Test it: argue the other side yourself in three sentences. If you cannot, rewrite it.

No preparation means the question must be immediately graspable. A question needing a preamble to understand is testing reading, not speaking.

**Rubric shape** (ours, four criteria): clarity of the position · argument development and example · organisation across four minutes · range, accuracy and fluency.

---

## 7. Paper-level checks

Before a TCF paper goes to review:

- [ ] CO: 39 items, band distribution 3/6/10/10/7/3, in position order
- [ ] CE: 39 items, same distribution, in position order
- [ ] Every `QcmItem` carries a `band`
- [ ] Every item's stimulus envelope matches its tagged band (STANDARD-common §2)
- [ ] Stem mix per band matches STANDARD-common §3.1
- [ ] CO: `playCount` is 1 everywhere. No exceptions in this format.
- [ ] CO: speech rate rises across the épreuve and sits in each band's envelope
- [ ] EE: one section clock, not three. Tâche 2's prompt demands account **and** comment. Tâche 3's two source documents are written, opposed, and each states its reasons.
- [ ] EO: Tâche 1 has a question ladder with branches. Tâche 2 has a document **and** an answer bank, with prep clocked separately. Tâche 3's question is two-sided.
- [ ] `SectionScoring.map` weights by band profile, not raw count; `nclc` carries ranges; the estimate clamps to NCLC 4–10
- [ ] CO and CE use **separate** NCLC lookup tables (they do not share boundaries)
- [ ] No topic reused from an earlier TCF paper
- [ ] `formatVersion` is `tcf-canada-2026.01` on every task
