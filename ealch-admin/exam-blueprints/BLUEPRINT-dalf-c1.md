# BLUEPRINT — DALF C1

**Version:** `dalf-c1-2026.10`
**Exam body:** France Éducation international (FEI)
**Compiled:** 2026-10-06
**Contains:** structural facts only. No examples, no stems, no options, no passage or script text, no topic from any FEI paper. See [README.md](README.md).

Store this version string in `ExamTask.formatVersion` on every task and in
`ExamSection.blueprintId` on every section authored against it. It is also the
`blueprintId` in `EXAM_FORMAT_FACTS.dalf_c1` (ealch-v2/src/content/examFormats.ts).

---

## 1. Format lineage: one format since 2020, and it is not DELF B2's

Two things a reader coming from the DELF B2 files will get wrong.

**There is no domain choice.** Until March 2020 the DALF C1 candidate chose
between two domains (lettres et sciences humaines, sciences) and the reading,
writing and speaking documents differed by domain. That split is gone. Pre-2020
sample papers on the web still carry it; do not calibrate against them. Every
paper we author is single-track, on general social themes.

**The comprehension épreuves are NOT multiple choice only.** DELF B2's new format
moved to 100% MCQ (BLUEPRINT-delf-b2 §1). DALF C1 did not. Its listening and
reading questions mix three answer modes, and all three appear on the current
demo paper:

| Mode | What the candidate does | Our `QcmItem.kind` |
|---|---|---|
| MCQ | ticks one of **three** options (A / B / C) | `mcq` (absent) |
| Short answer | writes a short answer, often « avec vos propres mots » | `short` (`opts: []`, `correct: -1`, `keywords`, `model`) |
| Vrai / faux justifié | ticks Vrai or Faux AND copies the passage that justifies it | `tfj` (`opts: ['Vrai','Faux']`, `quotes`) |

All three are representable today (acd91d2, shortAnswer.logic.ts). The marking
rule that makes `short` fair is the corrigé's own: spelling and syntax are not
marked unless they wreck the meaning, and the marker accepts the listed answer
and « toute reformulation ou réponse cohérente avec la question posée ». That is
why a short answer is checked by key words first and by the AI grader only when
the key words miss (C1 build log, decision 32). A vrai/faux scores **all or
nothing**: the points need both the right choice and a valid quote.

Re-check on any FEI announcement, then bump the version and run the staleness
report.

---

## 2. Paper shape

Four épreuves. Three are collective and consecutive (4 h in all); Production
orale is individual and scheduled separately.

| Order | Épreuve | Skill | Questions / tasks | Duration | Marks | Marking |
|---|---|---|---|---|---|---|
| 1 | Compréhension de l'oral | CO | 17 questions / 2 parts (ours) | ~40 min | /25 | machine + AI for unsure typed answers |
| 2 | Compréhension des écrits | CE | 12 questions / 1 text (ours) | 50 min | /25 | machine + AI for unsure typed answers |
| 3 | Production écrite | PE | 2 tasks: synthèse, essai | 2 h 30 | /25 (13 + 12) | human (AI-assisted for us) |
| 4 | Production orale | PO | exposé then entretien | ~30 min + 1 h prep | /25 | human (AI-assisted for us) |

`ExamPaper.sections` carries all four in this order, with the clocks of
`EXAM_FORMAT_FACTS.dalf_c1`: CO 2400 s, CE 3000 s, PE 9000 s, PO 1800 s. The
hour of PO preparation lives on the exposé task's `prepS`, not in the section.

**Pass mark: 50/100 overall, with a floor of 5/25 on each épreuve.** Same
instrument as DELF B2 (delf.logic.ts), with production bands marked relative to
the TARGET level c1 (`bandMark(band, 'c1')`), so B2 work does not pass a C1
paper (decision 35).

**Question counts are ours, not published constants.** The FEI sets the count
per paper ("about 10" questions on the long document, "about 12" on the text).
We fix 10 + 7 and 12 because `EXAM_FORMAT_FACTS` prints 17 and 12 on the home
card; paper-rules.ts holds every paper to them.

---

## 3. Compréhension de l'oral — 25 points, ~40 min, 10 min of audio max

| Part | Documents | Plays | Questions | Marks |
|---|---|---|---|---|
| 1 | 1 long (interview, lecture, talk) | **2** | 10 | **18** |
| 2 | 2 or 3 short radio extracts (news flash, poll, advert…) | **1** each | 7 in all | **7** |

**Total recorded duration must not exceed 10 minutes** (« durée maximale des
documents »). Recorded, not played: the long document counts once though it is
heard twice.

### 3.1 Timing model, from the candidate paper

The recording carries its own instructions and pauses. They map onto `ExamPart`:

| | Part 1 | Part 2, per extract |
|---|---|---|
| Read the questions | **3 min** (`readWindowS: 180`) | **50 s** (`readWindowS: 50`) |
| Play | 1st | once |
| Answer | **3 min** | **50 s** |
| Play | 2nd | — |
| Complete answers | **5 min** | — |

`playCount` is **2** for part 1 and **1** for every part-2 extract.

### 3.2 Length

The cover sheet gives the long document as six to eight minutes; the demo's runs
about six. Our band: **360 to 480 s**. The FEI gives no per-extract length;
**60 to 120 s** per extract is our calibration (STANDARD-dalf-c1 §3).

**The ceiling binds before the bands do.** An 8-minute long document leaves two
minutes for every extract, which is two extracts at the 60 s floor. Aim the long
document at 6 to 7 minutes; that leaves room for three extracts.

### 3.3 Point pattern, counted from the current demo paper

| | Questions | Mix | Points per question | Total |
|---|---|---|---|---|
| Part 1 | 10 | 4 MCQ + 6 short | MCQ 1 to 2 (1, 1.5, 1.5, 2); short 2 each | 18 |
| Part 2 | 7 (3 + 4 on two extracts) | 7 MCQ | 1 each | 7 |

Points are printed next to each question and run in half-points; `QcmItem.points`
carries them (settled for DELF, 7118de3). Part 1's long document is the only
place short answers appear in CO; part 2 is MCQ throughout. The demo uses no
vrai/faux in CO.

---

## 4. Compréhension des écrits — 25 points, 50 min

One **text of ideas** (literary or journalistic), **1500 to 2000 words**, and
about 12 questions worth 1 to 3 points each.

| Mode | Count on the demo | Points | Subtotal |
|---|---|---|---|
| MCQ (3 options) | 3 | 1, 2, 2 | 5 |
| Short answer, own words | 5 | 2, 2, 2, 3, 3 | 12 |
| Vrai / faux justifié | 4 | 2 each, all or nothing | 8 |
| **Total** | **12** | | **25** |

The vrai/faux quote can be checked mechanically against the text: the accepted
passages go in `quotes`, and paper-rules.ts refuses a quote the text does not
contain. Several passages may justify one answer; list them all.

Maps to **one `ce_mcq` task with one part** (the text) carrying all 12 items,
mixed kinds, in text order.

---

## 5. Production écrite — 25 points, 2 h 30, two tasks

### 5.1 Synthèse de documents — 13 points

From **several documents totalling about 1000 words** (the demo: two), the
candidate writes **one new text of 200 to 240 words** that groups the documents'
ideas by the common theme, in their own order. Rules printed on the paper:

- one continuous text, not two summaries end to end;
- no idea or information beyond the documents, **no personal comment**;
- key words may be reused, whole sentences and passages may not.

**Word count:** a word is anything between two spaces (« c'est-à-dire » = 1;
« l'ai » = 1). `countWords` in scripts/dalf/paper-rules.ts implements exactly
that, and the grader must use the same rule.

**Length penalty:** 1 point off per band of 20 words outside 200-240. The grid
adds: 99 words or fewer (under 50% of the expected length) scores 0 on every
criterion; 300 words or more cannot reach C1 on task achievement; copying whole
passages for over three quarters of the text zeroes lexique and morphosyntaxe.

Maps to **`pe_short`** (or `pe_essay`) with the dossier as text-only `parts`
(validateDossier, ExamDossier) and `responseSpec: { kind: 'text', minWords: 200,
maxWords: 240 }`.

### 5.2 Essai argumenté — 12 points

**250 words minimum**, no published maximum. A real-world genre written from a
stated role to a stated addressee (the demo: an open letter to a minister), on a
question that grows out of the synthèse dossier's theme. The grid zeroes a
production of 124 words or fewer (under half the minimum).

Maps to **`pe_essay`** with `responseSpec: { kind: 'text', minWords: 250 }`.
Whether the essai task repeats the dossier in its own `parts` is open (§9).

### 5.3 The published grids (cited as descriptor sets; our wording is our own)

| Synthèse criterion | Max on the grid |
|---|---|
| Respect de la consigne de longueur | 0.5 |
| Respect de la règle d'objectivité | 1.5 |
| Réalisation de la tâche : synthèse | 2.5 |
| Cohérence et cohésion | 2.5 |
| Lexique | 3 |
| Morphosyntaxe | 2.5 |

| Essai criterion | Max on the grid |
|---|---|
| Réalisation de la tâche : essai | 2.5 |
| Cohérence et cohésion | 2.5 |
| Adéquation sociolinguistique | 2.5 |
| Lexique | 2.5 |
| Morphosyntaxe | 2.5 |

Each criterion is judged on three levels, « en dessous du niveau ciblé / C1 /
C1+ », plus 0 for no answer. **Each grid totals 12.5**, not 13 and 12 (§9).
Double marking is the published expectation.

---

## 6. Production orale — 25 points, ~30 min + 1 h preparation

The candidate **draws two subjects and chooses one**. A subject is a theme put as
a question plus a dossier of documents (the demo: two per subject, roughly 900
to 1100 words in all). One hour of preparation, then about 30 minutes with a
jury of two, in two phases run straight on:

| Phase | Task | Duration | Our type |
|---|---|---|---|
| 1 | Exposé: an ordered reflection on the theme from the documents, with introduction, announced plan and conclusion | **8 – 10 min** | `po_monologue`, `prepS: 3600`, dossier in `parts`, `responseSpec` audio 480-600 s |
| 2 | Entretien / débat with the jury | **15 – 20 min** | `po_debate`, `responseSpec` audio 900-1200 s |

The entretien reuses the DELF débat bank (decision 33): the jury challenges the
exposé's thesis, and since the thesis is unknown until spoken, the bank must
attack both sides. At 15 to 20 minutes it runs longer than DELF's 10 to 13, so
paper-rules.ts asks for 12 non-retreat moves per side, not 9.

**Draw two, choose one:** author both subjects, so a paper carries four PO tasks
in the order exposé 1, entretien 1, exposé 2, entretien 2.

### 6.1 The published grid

| Criterion | Max |
|---|---|
| Réalisation de la tâche : exposé (8 à 10 min) | 5 |
| Réalisation de la tâche : entretien (15 à 20 min) | 5 |
| Lexique (both phases) | 5 |
| Morphosyntaxe (both phases) | 5 |
| Maîtrise du système phonologique (both phases) | 5 |

Levels 0 / 1 (en dessous) / 3 (C1) / 5 (C1+). Total 25. Two examiners sign.
Our rubrics split the three language criteria across the two tasks so each
subject's pair still totals 25 (STANDARD-dalf-c1 §7).

---

## 7. Scoring

Each épreuve out of 25, total out of 100; pass at 50 **and** at least 5/25 on
every épreuve; diploma for life. No scaled conversion. Comprehension marks are
the items' `points`. Production marks come from the graded band against c1
(`markFromBands(bands, 'c1')`), and a multi-task épreuve averages its bands with
equal weight, which matches the grids' 12.5 + 12.5 rather than the paper's 13 +
12 (§9).

---

## 8. Mapping to our engine

| Épreuve | Tasks | Shape |
|---|---|---|
| CO | `co_mcq` × 2 | part 1: one part, `playCount 2`, `readWindowS 180`, 10 items; part 2: 2-3 parts, `playCount 1`, `readWindowS 50`, 7 items |
| CE | `ce_mcq` × 1 | one part (the text), 12 items of kind mcq / short / tfj |
| PE | `pe_short` (or `pe_essay`) + `pe_essay` | synthèse with dossier `parts`, text 200-240; essai text, min 250 |
| PO | (`po_monologue` + `po_debate`) × 2 subjects | exposé `prepS 3600` + dossier, then the débat bank |

Ids: paper `paper.dalf_c1.blanc-NN.N`, tasks `exam.dalf_c1.blanc-NN.<taskType>.NNN`.
Every task `level: 'c1'`, every comprehension item `band: 'c1'` with `points`.
Stimuli are text and audio only; the schema refuses an image on a dalf_c1 part.
Voice casting is band-keyed on `c1` like DELF (`registerKeyFor`, VOICES-dalf-c1.md).

---

## 9. Unresolved

1. **13 + 12 or 12.5 + 12.5.** The candidate paper prints synthèse 13 and essai
   12; both correction grids total 12.5. The épreuve is 25 either way. We author
   rubrics to the paper (13 and 12) and the app averages the two bands equally,
   which is the grids' weighting. Harmless at the épreuve level; worth one line
   of Paul's attention before the report shows per-task marks.
2. **The length penalty's arithmetic.** « 1 point de moins par tranche de 20 mots
   en plus ou en moins » does not say whether 1 to 20 words outside costs a
   point (started band) or only a full 20 does. Our grader cannot apply a
   mechanical deduction yet in any case: production is marked by band. Until it
   can, the rubric's length criterion carries it.
3. **Does the essai repeat the dossier?** The consigne builds the essai « à partir
   du contenu des documents ». Repeating the synthèse dossier in the essai's
   `parts` gives the grader its stimulus at the cost of duplication; omitting it
   leaves the essai prompt alone. Recommended: repeat it.
4. **Part-2 extract length and count** are not published beyond « plusieurs » and
   the 10-minute ceiling. Our 2-3 extracts at 60-120 s is calibration.
5. **Language criteria in PO** are judged once over both phases on the real grid.
   Splitting them across two rubrics is our modelling choice.

---

## 10. Sources

Retrieved 2026-10-06. FEI's own site (delfdalf.fr / france-education-international.fr)
sits behind an anti-bot check, not bypassed. The same FEI files are hosted openly by
**Fondation Esprit Francophonie**, the Swiss partner linked from delfdalf.ch:
`fondation-esprit-francophonie.ch/fileadmin/files/Ressources/Ressources_DELF/Exemples_d_Examen/DALF_C1/`

- `dalf-c1_sujet-demo-candidat-coll.pdf` (collective épreuves, candidate)
- `dalf-c1_sujet-demo-candidat-indiv.pdf` (individual épreuve, candidate)
- `dalf-c1_sujet-demo-correcteur.pdf` (corrigé et barème)
- `dalf-c1_sujet-demo-examinateur.pdf` (PO subjects, examiner)
- `C1_Grille_PE.pdf`, `C1_Grille_PO.pdf` (grids and performance descriptors)
- `dalf_c1_demo.mp3` (listening, not used for this file)

Also consulted for lineage: the Ministry's 2005 BO table of épreuves and FEI's
2021 kit (C1 build log, « DALF C1 added »).

Read for **format facts, timings, point patterns and marking rules only**, per
the firewall in `EXAM-PACK-REDESIGN.md` §8.1-8.2 and STANDARD-common. FEI
copyright: no text, question, option, topic or document from any of these
reaches an authored paper or this repository.

DALF is a registered trademark of France Éducation international. Named here
descriptively. No endorsement, affiliation or equivalence is claimed or implied.
