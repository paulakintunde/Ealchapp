# STANDARD — DALF C1

**Blueprint:** `dalf-c1-2026.10`
**Compiled:** 2026-10-06

What "meets the standard" looks like, as rules an author can follow. Derived
generalisations, not source material: **every illustrative phrasing in this file
is written fresh**, and no FEI text, question, document or topic appears here.
Read [STANDARD-common.md](STANDARD-common.md) first; this file adds to it. The
machine-checkable half of these rules is `scripts/dalf/paper-rules.ts`.

---

## 1. The character of a DALF C1 paper

TEF is blocks, TCF is a slope, DELF B2 is one level tested by MCQ. **DALF C1 is
one level tested by writing.** Even its comprehension épreuves ask the candidate
to put things in their own words, and two of its four épreuves are built on
dossiers the candidate must digest before producing anything.

Three properties follow, each one a trap for an author arriving from DELF B2:

1. **The answer mode is part of the item.** Choosing between MCQ, short answer
   and vrai/faux justifié is not decoration. A short answer tests whether the
   candidate can reformulate; a vrai/faux tests whether they can locate the
   exact evidence; an MCQ tests discrimination between near readings. A paper
   of the wrong mix tests the wrong thing even if every item is good.
2. **Long, dense stimuli.** One listening document of six to seven minutes and
   one text of 1500 to 2000 words carry most of the marks. The difficulty is
   sustained attention to an argument, not obscure vocabulary.
3. **The documents must cross.** The synthèse and the exposé reward a candidate
   who builds their own plan across documents. Two documents that each say one
   thing in isolation leave nothing to cross, and the best possible answer
   becomes two summaries end to end, which the format penalises.

---

## 2. Authoring integrity (the firewall)

Everything in STANDARD-common §6 applies, and these weigh more here than on any
other format because DALF stimuli are long and opinionated:

- **Original texts only.** Every document, transcript, dossier and essai prompt
  is written fresh for Ealch. No adaptation, paraphrase or "inspired by" of an
  FEI paper, a press article, a book or a broadcast.
- **Invented people and outlets.** Speakers, authors, interviewees, magazines,
  radio stations, institutes and towns are all invented (`la revue Ressac`,
  `l'Observatoire Lenhart`, `Radio Cap-Albe`). No real public figure, living or
  dead, is quoted or paraphrased. No real thinker is "summarised" in a
  document: a text of ideas may discuss an idea, never attribute it to a named
  real person.
- **Every figure invented and attributed** to an invented source.
- **No FEI topic.** TOPICS-dalf-c1.md lists the demo's topics as excluded. Do
  not approach them sideways.
- **No real exam-body name inside a stimulus.** The disclaimer carries it.
- No `honnête` family, no em dash in candidate-facing copy, nouns checked by the
  gender gate, corpus probed with real orthography.

---

## 3. Register and stems at C1

The C1 descriptors in one line: follow extended, loosely structured speech and
long complex texts, including implicit relations, irony and stance, and
reformulate them precisely.

| Family | The candidate must | Typical mode | Typical weight |
|---|---|---|---|
| **Locate** | retrieve one stated point among competing ones | MCQ | 1 |
| **Reformulate** | restate a reason, consequence or definition in their own words | short | 2 |
| **Justify** | decide whether a paraphrase is supported, and find the evidence | tfj | 2 |
| **Infer** | combine two stated things into an unstated conclusion | MCQ or short | 2 |
| **Attribute** | separate the author's view from views reported or refuted | MCQ or tfj | 2 |
| **Weigh** | name the function of a move or the arc of the whole argument | short | 3 |

A CE paper should use all six; a CO part 1 at least four. The 3-point questions
belong to Weigh (the whole text's arc, a shift of perspective) and should be at
most two per paper, as on the published pattern.

**Register of the stimuli.** Standard written French of quality press and essay
writing for CE; for CO part 1 a prepared but spoken exchange (a host and an
expert, or a lecture with questions) with real speech features: hesitations,
self-correction, a reformulation the host asks for. Part 2 extracts are radio
genres: a news flash, a short vox pop or poll result, an advert, a brief
chronicle. Each extract must be self-contained, because it is heard once.

**MCQ at C1 has three options.** That makes each distractor carry more: both
must be defensible misreadings (STANDARD-delf-b2 §2.1 still applies: the
stated-but-not-asked, the over-generalised, the reported-not-endorsed, the
modality shift). With three options a giveaway costs half the item, not a third.

**Item order follows the document.** Questions run in the order their answers
appear; the global questions (the theme, the conclusion) open or close.

---

## 4. Short answers: writing `keywords` and `model`

The app marks a typed answer right when it meets **every** keyword group, each
group by **any one** of its words, matched accent- and case-blind from the start
of a word (shortAnswer.logic.ts). An answer that misses goes to the AI grader as
"unsure", never straight to wrong. So keywords exist to say "right" cheaply and
safely, and must never say "right" to a wrong answer.

Rules:

1. **One group per idea the answer needs.** An answer needing a cause and its
   effect has two groups. Do not split one idea into two groups (that fails a
   good paraphrase) or merge two ideas into one group (that passes a half
   answer).
2. **Stems, not words.** `['transmi', 'passer', 'legu']` covers transmettre,
   transmission, passer, léguer. A stem shorter than four letters matches too
   much; `'sol'` hits solide, soleil and solution.
3. **Synonyms inside the group.** Think of three ways a strong candidate would
   say it, and put each one's stem in the group.
4. **Never a word from the question stem.** A candidate who copies the question
   back would pass.
5. **Watch polarity.** Keywords cannot see « ne… pas ». If the wrong answer is
   the contrary of the right one, either add a group for the polarity word
   (`['moins', 'baiss', 'recul']`) or accept that such answers go to the AI.
6. **Numbers both ways.** Candidates type `trois` and `3`; put both in the group.
7. **The `model` is the corrigé**, one or two sentences, complete, and it MUST
   meet its own keywords (paper-rules.ts enforces this: a model that fails them
   means every answer worded like the corrigé would be marked "unsure").
8. Keep the expected answer short. A question that needs three sentences is a
   synthèse question in the wrong épreuve.

## 5. Vrai / faux justifié: writing `quotes`

1. The statement **paraphrases**; it never quotes the text. If the statement
   reuses the text's distinctive word, the item becomes word matching.
2. Every passage that justifies the right answer goes in `quotes`, **verbatim**
   as it stands in the text (paper-rules.ts refuses a quote the text does not
   contain). A candidate may copy any one of them.
3. A quote is a clause, at least five words, short enough to copy in the
   answer box. The matcher accepts a run of four words lifted from a listed
   passage, or most of a passage's words.
4. No passage elsewhere in the text may justify the opposite answer. Check by
   reading the text once looking only for the contrary.
5. Balance the key: a set of four is two Vrai and two Faux, or three and one,
   never four of one.
6. 2 points each, all or nothing, on the paper and in the app.

---

## 6. The dossiers

### 6.1 Synthèse dossier (PE)

- **Two or three documents, 850 to 1150 words in all** (about 1000), each with a
  title and an invented source line.
- **Same theme, different angles.** Each document must contribute at least two
  ideas the other does not, and share at least one the candidate can use to tie
  them. Opposed positions are not required; complementary ones work better than
  a pure for/against pair, which invites two summaries end to end.
- **Recoverable key points.** An author should be able to list six to eight
  information units across the dossier. That list, in the order a good plan
  would use, goes in `examinerNotes` and shapes the model answer.
- **No opinion of the author's in the model.** The model synthèse states the
  common theme in its opening sentence, crosses the documents in a personal
  plan, adds nothing, and counts **200 to 240 words by the FEI rule** (anything
  between two spaces). paper-rules.ts counts it.

### 6.2 Essai prompt (PE)

Built on the dossier's theme but asking a different question: the synthèse
reports, the essai argues. The prompt supplies a **situation, a role, an
addressee with a register, and a purpose**, in a real genre: open letter,
opinion column, contribution to a consultation, letter to an editor, speech to
a committee. Rotate genres across papers. 250 words minimum; the model runs 280
to 350.

### 6.3 Exposé dossier (PO)

- A **theme put as a question** that has no single right answer.
- **Two documents, 800 to 1100 words in all**, different in kind (an interview
  and a column, a report summary and a testimony) so the candidate has material
  for an announced plan of two or three parts.
- The débat bank (`po_debate`) attacks the theme from both sides, with at least
  12 non-retreat moves per side, a concession probe and a retreat move per side
  (paper-rules.ts via the DELF rules). The jury's moves push for precision and
  nuance (« vous dites que…, mais dans le second document… »), widen the debate
  beyond the dossier, and ask for the candidate's experience.

---

## 7. Rubrics

Our own construction. The FEI publishes its grids and descriptors; ours cover
the same ground in our own words, on the same three levels, and every open task
says so in `examinerNotes`. Integer `maxPoints` (the validator requires it), 4
to 6 criteria, each with three descriptors in the order **en dessous du niveau /
C1 / C1+**.

### 7.1 Synthèse — 13 points

| Key | Criterion | Max | What moves it |
|---|---|---|---|
| `longueur` | Longueur | 1 | inside 200-240 by the FEI count; outside costs the point, and the grader notes the band of 20 |
| `objectivite` | Objectivité | 2 | nothing added, nothing judged, nothing distorted |
| `tache` | Thème commun et informations clés | 3 | the common theme stated precisely; the dossier's key points all present, from every document |
| `organisation` | Plan personnel et cohésion | 2 | one text with its own plan that crosses the documents, not juxtaposed summaries; paragraphing and linking that guide |
| `lexique` | Reformulation et lexique | 3 | the documents' ideas restated in the candidate's words, precise abstract vocabulary, no copied sentences |
| `morphosyntaxe` | Morphosyntaxe | 2 | complex structures controlled throughout, varied and supple |

Hard floors, in `examinerNotes`: 99 words or fewer scores 0 throughout; 300 or
more caps `tache` below C1; a text mostly copied scores 0 on `lexique` and
`morphosyntaxe`.

### 7.2 Essai argumenté — 12 points

| Key | Criterion | Max | What moves it |
|---|---|---|---|
| `tache` | Argumentation | 3 | a clear, defended position; developed arguments with concrete examples; persuasive |
| `coherence` | Cohérence et cohésion | 3 | a structured text; varied connectors that carry the argument; logical paragraphs |
| `destinataire` | Adéquation au genre et au destinataire | 2 | the genre's conventions; formality held for the addressee; moves that address and engage the reader |
| `lexique` | Lexique | 2 | broad, precise, concrete and abstract; spelling accurate |
| `morphosyntaxe` | Morphosyntaxe | 2 | high grammatical accuracy; varied complex sentences |

124 words or fewer scores 0 throughout.

### 7.3 Exposé — 13 points, and entretien — 12 points

The real grid judges lexique, morphosyntaxe and phonology once across both
phases. We split each across the two tasks so that **each criterion totals 5
over the pair and the pair totals 25**:

| Key | Criterion | Exposé | Entretien | Pair |
|---|---|---|---|---|
| `tache` | Réalisation de la tâche | 5 | 5 | 10 |
| `lexique` | Lexique | 3 | 2 | 5 |
| `morphosyntaxe` | Morphosyntaxe | 3 | 2 | 5 |
| `phonologie` | Phonologie et prosodie | 2 | 3 | 5 |
| | **Total** | **13** | **12** | **25** |

What `tache` means on each:

- **Exposé:** introduces the theme and the question; announces a plan and keeps
  to it; develops a reflection that uses the dossier's main points AND the
  candidate's own examples; concludes. Below C1: restates the documents with no
  plan. C1+: a clearly signposted plan, arguments supported by examples from the
  dossier and from experience, an apt conclusion.
- **Entretien:** answers every question with development; defends the position,
  then refines and qualifies it under pressure; widens or refocuses the debate.
  Below C1: answers that do not let the discussion go on.

Phonology weighs more in the entretien because unprepared speech is where
rhythm, liaison and intonation show; the exposé is partly rehearsed.

### 7.4 Model answers

At C1, not above it (STANDARD-common §7). The synthèse model inside 200-240; the
essai model 280 to 350 words; the exposé model a transcript of 8 to 9 minutes of
speech (about 1100 to 1300 words at a deliberate pace) with its plan visible.

---

## 8. Paper-level checks

`scripts/dalf/paper-rules.ts` (`dalfPaperViolations`) enforces, and every DALF
paper's own test asserts the list is empty:

1. CO parts worth 18 and 7, CE 25, PE rubrics 13 and 12, each PO subject 25.
2. 10 + 7 questions in CO, 12 in CE.
3. Every item `band: 'c1'` with half-point `points` from 0.5 to 3; MCQ has three
   options; short answers carry keyword groups and a model that meets them;
   vrai/faux carries Vrai/Faux and quotes found in the text.
4. CO uses MCQ and short; CE uses all three kinds; MCQ keys and vrai/faux keys
   scattered.
5. Part 1 one document played twice, `readWindowS 180`, 360-480 s; part 2 two or
   three extracts played once, `readWindowS 50`, 60-120 s; at most 600 s
   recorded; the clock covers every play and window.
6. One CE text of 1500-2000 words.
7. Synthèse dossier of 2+ documents, 850-1150 words, responseSpec 200-240, model
   200-240; essai `pe_essay`, minWords 250, model 250+.
8. Two PO subjects, each `po_monologue` (prepS 3600, dossier, 480-600 s) then
   `po_debate` (900-1200 s, deep two-sided bank).
9. Ids `paper.dalf_c1.blanc-NN.N` and `exam.dalf_c1.blanc-NN.<type>.NNN`, level
   c1, formatVersion and blueprintId `dalf-c1-2026.10`, the four clocks, no
   images.
10. The pack test: no topic spent twice across papers (`topicLedgerViolations`),
    no shared answer-key sequence, no shared task id.

## 9. What this format does NOT need

- **No band ramp.** One level; `band` is constant.
- **No four-option MCQ.** Three.
- **No NCLC conversion.** Pass/fail at 50 with a 5/25 floor.
- **No domain variants.** Gone since 2020.
