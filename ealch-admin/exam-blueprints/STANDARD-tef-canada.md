# STANDARD — TEF Canada

**Blueprint:** `tef-canada-2025.09` · **Read first:** [STANDARD-common.md](STANDARD-common.md)
**Compiled:** 2026-08-24 (phase E0)

Derived rules. Every French example was written fresh for this file. See [README.md](README.md).

---

## 1. The character of a TEF paper

TEF is a paper of **named blocks**. Each block has its own document type, its own count, and its own feel, and a candidate who has practised knows which block they are in. The paper does not ramp: block G is not harder than block A, it is *different*.

Difficulty comes from the documents themselves being drawn from adult working life, and from the clock. 40 listening questions in 40 minutes with no replay is the pressure; 40 reading questions in 60 minutes across seven exercise types is the pressure.

Band-wise, a TEF paper is centred on **B1–B2** with A2 at the bottom of each block and C1 at the top. Unlike TCF, the band is not the organising principle and does not have to be tagged per item, though tagging it anyway makes the score map better.

---

## 2. Compréhension orale, block by block

### Block A — Conversations avec dessins (4 questions, 4 image options, 1 play)

**Document.** A two-turn exchange between two speakers, 15–30 seconds, in a concrete everyday setting. Someone asks for something, someone answers.

**Task.** Identify the object, product or situation the exchange is about. **The images are the options.** There is no text option set.

**Authoring.** Each item needs an image brief for all four options and an `imageAlt` for each. The four images must be genuinely confusable: four unrelated pictures make the item free. Vary along one dimension (four different pastries; four different waiting rooms), not four dimensions at once.

**Band.** A1–A2. Keep it there. This block is the paper's on-ramp.

**Trap to build in.** The exchange should mention a plausible wrong object before naming the right one, so a candidate who stops listening early picks the echo (D2).

---

### Block B — Annonces publiques (4 questions, 4 options, 1 play)

**Document.** A single voice, 20–35 seconds, in announcement register: station, airport, shop, building, school. Formal, impersonal, often with `nous vous informons que`, `veuillez`, `en raison de`.

**Task.** The stem asks for the message's **purpose** or its **intended audience** (S1). Not a detail. This block is about recognising what an announcement is *for*.

**Authoring.** Write it as a real announcement: a reason, a consequence, an instruction. The purpose must be inferable from the whole, not stated in a single give-away sentence.

**Band.** A2–B1.

---

### Block C — Micros-trottoirs (6 questions, **3 options**, 1 play)

**Document.** One question is put to people in the street, and each answer is heard. Three speakers per micro-trottoir is the shape, so 6 questions is two micro-trottoirs of three speakers.

**Task.** Match a description to a speaker's opinion. The candidate is deciding *what this person thinks*, not what they said.

**Authoring.**
- The three speakers must hold **genuinely different positions**, not three shades of agreement. One for, one against, one conditional is the workhorse pattern.
- Speech is spontaneous: false starts, `moi je`, `franchement`, `ça dépend`, unfinished clauses. A polished answer here is wrong.
- Each speaker gets 15–25 seconds.
- **Three options, not four.** This is the only block with three, and it changed on 1 Sept 2025. Getting it wrong dates the paper immediately.

**Band.** B1–B2, and this is where stance stems (S4) earn their place.

**Trap to build in.** One speaker states a position and then qualifies it away. The description that matches the *stated* position is the distractor; the one matching the qualification is the key.

---

### Block D — Chroniques radio (2 questions, 4 options, 1 play)

**Document.** A single presenter monologue on a general-interest subject, 45–75 seconds. Scripted-sounding but conversational: a radio column, not a news bulletin.

**Task.** Two questions on one chronicle, or one each on two. Prefer one chronicle with two questions: gist plus stance.

**Band.** B2.

---

### Block E — Interviews (6 questions, 4 options, **1 or 2 plays**)

**Document.** A sustained two-voice interview on an everyday topic, 60–120 seconds. An interviewer who asks and a guest who answers at length.

**Task.** Six questions across the interview. This is the block with room for the full stem range: gist, detail, inference, stance, discourse function.

**Authoring.** Distribute the six questions across the whole interview, not clustered in the first thirty seconds. Give the guest a position that develops: something they concede, something they insist on.

**Plays.** This is the only block permitted two plays. Set `playCount` explicitly per part; do not let it default.

**Band.** B1–C1, rising across the six.

---

### Block F — Reportage (1 question, 4 options, 1 play)

**Document.** A long report, 120–180 seconds: a narrator plus one or two interviewed voices, edited together as a broadcast feature would be.

**Task.** One question, and it must be a **gist** question (S1). One item on three minutes of audio is a global-comprehension probe by design. Asking a detail here would make it a lottery.

**Authoring.** This is the paper's most expensive single item to produce: three voices, the longest transcript, and it earns one mark. Budget for it. Do not economise by making it a monologue.

**Band.** B2–C1.

---

### Block G — Documents divers (17 questions under the `G-elastic` fill rule, 4 options, 1 play)

**Document.** A mixed bag. Per the blueprint's fill rule:

| Sub-type | Questions | Length each |
|---|---|---|
| Short two-turn exchanges | 4 | 15–25 s |
| Voicemail and answering-machine messages | 3 | 20–30 s |
| Short public information messages | 3 | 20–30 s |
| Short interviews or vox-pop follow-ups | 4 | 25–40 s |
| Spoken instructions or directions | 3 | 20–35 s |

**Authoring.** Order so no two consecutive items share a sub-type. Spread the bands A2 through B2 across the seventeen rather than ramping, because TEF does not ramp.

**Why this block matters most.** It is 17 of 40 marks under our fill rule. If it is dull, the paper is dull. Give each sub-type a distinct voice and setting.

---

## 3. Compréhension écrite, block by block

### Block A — Documents de la vie quotidienne (7 documents, 1 question each)

**Document.** 15–50 words: a notice, a sign, a small ad, a menu, a timetable, an SMS exchange, a product label, a handwritten note.

**Task.** One question per document. Purpose or a single retrievable detail (S1/S2).

**Authoring.** These must *look* like the thing they are. A small ad has abbreviations and no verbs. An SMS has no capitals. A notice has a date and an imperative. Rendering matters: the runner draws each document in its own shape, so say which shape in the part label.

**Band.** A1–A2.

---

### Block B — Phrases lacunaires (6 items)

**Document.** One standalone sentence with one gap. No context beyond the sentence. That is what distinguishes B from C.

**Task.** S7 (grammatical form) or S8 (collocation). Never content.

**Authoring.**
- Four options, all the same part of speech, all grammatically possible in isolation. Only one is right *here*.
- Split the six roughly 3 grammar / 3 collocation.
- Grammar items should target things the corpus already teaches: preposition after a verb, relative pronoun, agreement, tense selection after a conjunction, pronoun order.
- **The gap must be resolvable from the sentence alone.** If the candidate needs to imagine a context, the item belongs in block C.

**Band.** A2–B2.

---

### Block C — Textes lacunaires (2 texts, 2 gaps each = 4 items)

**Document.** Two short texts, 80–140 words each, two gaps in each.

**Task.** S9 (cohesive device) mainly, S8 secondarily.

**Authoring.** **The gap must be resolvable only from beyond its own sentence.** That is the entire point of the block and the line between C and B. A connector gap works when the preceding and following sentences establish the relation (concession, consequence, addition) and the sentence itself does not.

**Band.** B1–B2.

---

### Blocks D and E — Lecture rapide de textes et de graphiques (5 items combined)

**Document.** Either a set of 4–6 very short texts (40–70 words each: event listings, course descriptions, job ads, apartment listings) or one data graphic with a caption.

**Task.** Match a statement or a need to the right text, or read a value or trend off the graphic. Speed, not depth.

**Authoring.**
- Split the five roughly 3 texts / 2 graphics.
- For text matching: every text must be a plausible answer to the stated need, differing on one decisive criterion (price, date, location, eligibility).
- For graphics: describe the graphic precisely in the part's `text` so it can be rendered, and give `imageAlt`. A graphic the runner cannot draw is not an item.
- The question must be answerable in under a minute. If it takes careful reading, it belongs in F or G.

**Band.** A2–B1.

---

### Block F — Documents administratifs et professionnels (10 items)

**Document.** 150–300 words: an application form's guidance notes, a procedure, a contract extract, an internal memo, an HR notice, a benefits letter, a service agreement.

**Task.** Detail retrieval under formal register (S2), with some inference about eligibility or obligation (S3).

**Authoring.** This block is where TEF's adult-working-life character lives, and where our `immigration-et-citoyennete`, `droit`, `recherche-emploi` and `systeme-de-sante` corpus themes earn their keep. Write real administrative French: impersonal constructions, nominalisation, `il convient de`, `sous réserve de`, `le cas échéant`, conditions with exceptions.

**The exception clause is the item.** Administrative documents state a rule and then qualify it. The candidate who reads the rule and stops picks the distractor.

**Band.** B1–B2.

---

### Block G — Articles de presse (8 items)

**Document.** 250–450 words of journalism with a stance: a feature, a commentary, a report with quoted voices.

**Task.** The full stem range, weighted to inference, stance and discourse function (S3, S4, S6).

**Authoring.** The article must have a **position**, and the position must be carried by tone and structure rather than announced. Concession followed by rebuttal is the workhorse: `Certes …, mais …`. That structure generates S6 items naturally, because a candidate can be asked what a paragraph is doing.

**Band.** B2–C1. This is the top of the paper.

---

## 4. Expression écrite

### Section A — Fait divers (25 min, 80–120 words)

**What the candidate is given:** a title and the opening of a news item.
**What they must produce:** a coherent continuation supplying details, explanations and new information not in the prompt.

**The task is addition, not continuation of style alone.** Recopying the opening fails. Summarising it fails. The candidate must invent facts that fit.

**Register rules the model answer must demonstrate:**
- Third person, impersonal. No `je`, no address to the reader.
- No opinion, no evaluation, no moral.
- Passé composé for the events, imparfait for circumstances and background.
- Facts before commentary: who, what, where, when, then how it unfolded, then the outcome.
- Sober vocabulary. A fait divers does not use `incroyable` or `heureusement`.

**Authoring what to give the candidate.** Write a title and 25–40 words of opening. The opening must leave real gaps: name the event and the place, withhold the cause, the sequence and the outcome. If the opening already tells the whole story there is nothing to add and the task collapses.

**Rubric shape** (ours, four criteria, from the four assessed dimensions in the blueprint):
1. Pertinence: fit with the subject established by the title and opening
2. Qualité de l'information: genuine new detail, development, illustration
3. Cohérence et langue: text coherence and cohesion, sentence quality, lexical range and accuracy
4. Orthographe et ponctuation

---

### Section B — Lettre argumentée (35 min, 200+ words)

**Task.** State a position on the given subject and defend it.

**What the model answer must show:**
- A position stated in the opening, unambiguously
- At least three distinct arguments, each developed with explanation *and* a concrete example
- Logical connectors carrying the structure, not decorating it
- A conclusion that reaffirms the position and introduces nothing new

**Authoring the prompt.** Give a context, an addressee, and a question with two defensible sides. A prompt with one reasonable answer produces 200 words of agreeing with the prompt. Two-sidedness is the whole design.

**Rubric shape** (ours, five criteria): position and task completion · quality and development of argument · use of example · cohesion and connectors · lexical and grammatical accuracy.

---

## 5. Expression orale

### Section A — Obtenir de l'information (5 min)

**The candidate asks. The examiner answers.** This inverts the usual speaking task and it is the thing candidates practise least.

**Authoring requires two artefacts, not one:**
1. **The document.** An advert or activity announcement, 40–80 words, deliberately incomplete. It should name the thing and leave price, dates, duration, eligibility, what is included, where exactly, and how to book either absent or vague.
2. **The examiner answer bank.** A fact for every question a candidate could reasonably ask, including ones the document does not hint at. Without it the interaction stalls the moment a candidate asks something unanticipated, and the candidate is penalised for our gap.

Wire this task through `Scenario.exam` so the role-play engine drives the interlocutor. The schema already validates that the referenced task is a `po_*` task of the matching format.

**Assessed on coverage.** The blueprint is explicit that Section A is judged partly on whether the questions were *appropriate and complete*. Our rubric must make coverage a named criterion, and the answer bank defines what full coverage is.

**Rubric shape** (ours, four criteria): coverage of the document's angles · question formation and variety · interaction and repair · fluency and range.

---

### Section B — Convaincre (10 min)

**Task.** Present an activity to the interlocutor and persuade them to take part.

**Authoring requires:**
1. **The activity brief**, 40–80 words, with enough substance to be sold.
2. **An objection ladder** for the interlocutor: three or four escalating reasons not to (cost, time, interest, a prior commitment). Without objections there is no persuasion, only description, and the task's whole point disappears.

**Rubric shape** (ours, five criteria): persuasive strategy · argument quality and adaptation to the objection · range and precision of language · fluency and delivery · interaction management.

---

## 6. Paper-level checks

Before a TEF paper goes to review:

- [ ] CO: 40 items, blocks A 4 / B 4 / C 6 / D 2 / E 6 / F 1 / G 17
- [ ] CO: block C items carry exactly 3 options; every other block 4
- [ ] CO: `playCount` set explicitly on every part; only block E is permitted 2
- [ ] CO: block A parts carry four image briefs with `imageAlt`
- [ ] CE: 40 items, blocks A 7 / B 6 / C 4 / D+E 5 / F 10 / G 8
- [ ] CE: block B gaps resolvable within the sentence; block C gaps resolvable only beyond it
- [ ] EE: Section A opening leaves real gaps; Section B prompt is genuinely two-sided
- [ ] EO: Section A has an answer bank; Section B has an objection ladder
- [ ] All four sections carry `SectionScoring` with NCLC **ranges**
- [ ] No topic reused from an earlier TEF paper
- [ ] `formatVersion` is `tef-canada-2025.09` on every task
