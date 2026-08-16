# a2.30.l1 « Le travail & les métiers » — build report

**Trail seq 29. Unit 6 of 8 in the A2 situations band.** Applied to Postgres and
merged into `seed.json` on 2026-08-16. NOT published: publishing is not part of a
lesson build. (The sons.09.l1 block is GONE, see §12.)

| | |
|---|---|
| lesson | `a2.30.l1`, 24 sections, 6 acts, one reference sheet |
| authored | 68 rows, `fr.a2.metiers.020`–`.087` |
| imported | 66 ids, by `itemId`, across 12 themes |
| `metiers` | 353 → 421 published (+68) |
| seed | 9,961 → 10,034 items, 70 → 71 lessons, still v50 |
| tests | 4,374 → **4,417, all passing** (+43, this unit's guard) |
| mutations | **10 of 10 caught**, after two holes were found and closed |

**Prerequisites verified before the build started.** a2.07 (seq 24) and a2.29
(seq 28) are both shipped. Their blocks were read back from Postgres string by
string, not assumed.

---

## 1. HOW THE PARCOURS SPINE WAS REBUILT WITHOUT `monologue`

*This is the report item that matters most. The next person to price
`openPrompt` will read it, so it is written as evidence rather than as an
apology.*

The design's spine was the learner's own sixty-second parcours, built in public
across the acts and delivered twice into a proposed section type carrying a
prompt, a thirty-second prep beat, an uncapped speech capture, a live checklist
ticking the four moves off a partial transcript, and rubric-anchored feedback
through `examGrader`. Collation §3.3 merged it with a2.28's `openPrompt`, cut
the two pieces carrying the unknowns, and §3.2 ranked the merged component
second and deferred it.

**The artefact survived. Its delivery surface changed into four shipped
surfaces instead of one unbuilt one.**

| the move made in public | how it is delivered today | what it cost |
|---|---|---|
| build it move by move | unchanged: acts 2 and 3 add one move each; `s08-build2` and `s13-build3` join what exists so far | nothing |
| deliver it whole | the four moves are turns 3–6 of the single scenario, consecutive and uninterrupted; the interviewer's turns between them are a nod and nothing more | the joins are heard as four captures, not one |
| rehearse it | `s21-deliver`, practice over the four move-model items | four separate rehearsals; the learner joins them mentally |
| check it | `s22-check`, progressCheck naming the four moves | self-judged, not scored |
| write it | `s19-dictation` plus one quiz `typeIn` carrying two joined moves | writing is the only surface that reliably sees a missing word |
| keep it | the reference sheet, `table` at `layer: 'deep'` | a reference, not a rehearsal |

**The swap is a one-section diff later.** `s21-deliver` holds exactly the four
move-model items, in move order, and nothing else. When `openPrompt` is built it
replaces that one section and the four-move checklist moves into it from
`s22-check`. The seam is commented in the lesson file so it need not be
rediscovered.

### The six losses, named plainly

1. **Continuous capture.** The app never hears the four moves as one stretch. It
   hears four captures of up to seven seconds each. The longest capture the app
   asks for anywhere is 7,000 ms (`app/roleplay.tsx:171`); the service default is
   6,000 ms (`src/services/stt.ts:130`). A ninety-second turn is nineteen times
   what the app will hold open.
2. **The learner's own content.** `stt.listen` scores against a target string.
   No surface accepts an arbitrary sentence about the learner's real job and says
   anything true about it. What the lesson rehearses is a model parcours with
   slots. The nearest thing to accepting real history is the scenario's `alts`,
   which is why every learner turn carries two to four of them across different
   job families — that is the only place in the entire lesson where more than one
   true answer scores.
3. **Feedback.** No band, no rubric, no feedback string. `examGrader.grade` has
   exactly one caller, `app/exam-task.tsx`, and it cannot be reached from a
   lesson section.
4. **The prep beat.** Tap-to-continue only. `setInterval` is 0 across the four
   render files, so there is no timer to build one from.
5. **The live checklist.** Nothing ticks a move off a partial transcript. It
   became something the learner reads and judges themselves against, afterwards.
6. **Evidence of fluency under sustained load.** Nothing distinguishes four moves
   said in one breath from four sentences said with long pauses. **The unit
   teaches the shape and cannot measure the delivery.**

No card in the lesson claims otherwise. `FORBIDDEN_CLAIMS` is asserted over
every authored string: no promise of a recording, a countdown, a score or
feedback.

**One correction to the brief:** §9 and §17 said `listening.hideLines` had not
landed. **It has** — `MissionRich.tsx:1976-1988`, and a2.07 already ships it. So
`s12-listen` sets it for real and no follow-up is needed.

---

## 2. FEMINISATION — THE RULE AS IT ACTUALLY LANDED

*Collation C4 assigns this to a2.30 and binds the other seven units to it. It is
quotable in one screen and it is asserted in `a2-30-travail-metiers.test.ts`
rather than described.*

> 1. **Import before you mint.** If a feminine already exists ANYWHERE in the
>    corpus, import that exact form. Any theme, any level. Do not mint a rival
>    and do not "correct" a shipped one.
> 2. **Where two variants both exist, take the more numerous one.**
> 3. **Where none exists, mint the OQLF form** (the exam base is TEF/TCF Canada):
>    `-teur`→`-trice`; `-eur` from a live verb stem→`-euse`; `-ier`/`-ien`/`-er`
>    take the ordinary written feminine; an epicene noun takes a final `-e`; a
>    noun with no feminine takes **the article only**.
> 4. **Never mint a feminine that is a different word.** `la médecine` is the
>    discipline, not the doctor.
> 5. **Pairs only.** Author a feminine only where the masculine already exists as
>    a corpus row.
> 6. **Cap it.** A card deck, not a wordlist.
> 7. **Say it once, in the learner's words.**

### The measured counts behind each choice

**The design's Postgres figures were wrong in four cases of five.** Re-queried
2026-08-16:

| form | design said | actual | outcome |
|---|---|---|---|
| `autrice` | 6 | **0** | absent |
| `auteure` | 2 | **0** | absent |
| `travailleuse` | 4 | **0** | absent |
| `ingénieure` | 5 | **1** | `fr.b2.decouvertes.152`, imported |
| `professeure` | 1 | 1 | `fr.a2.examens-et-diplomes.058`, imported |

**The band's contested case never arose, and rule 5 is why.** Rule 2 was written
for `autrice`/`auteure` and is moot: neither exists. And `metiers` carries `un
écrivain`, not `un auteur` — the only `auteur` in the corpus is
`fr.b1.litterature.030`, which is B1 and out of level. **No masculine anchor, so
no feminine, and this unit does not settle a debate it never had.** If a future
unit acquires `un auteur` at A2, rule 3 gives `une auteure`, because rule 1 will
still have given nothing. `travailleuse` was skipped for the same reason plus a
polysemy risk: `travailleur` at A2 is more often the adjective.

### Imported (10) against minted (8)

**Imported** — every one an a1.03 figure this build did not have to move:
`une avocate` (already in `metiers`), `une employée`, `une pharmacienne`,
`une infirmière`, `la caissière`, `la vendeuse`, `l'agricultrice`,
`la directrice`, plus `une ingénieure` and `une professeure`.

**Minted**, `.074`–`.081`, each half of a pair whose masculine is an imported
`metiers` row, with **zero orphans**: `une coiffeuse`, `une traductrice`,
`une informaticienne`, `une ouvrière`, `une mécanicienne`, `une pâtissière`,
`une jardinière`, `une factrice`. Three carry a second everyday sense
(dressing table, window box, maker) and their `en` is written narrow for it.

---

## 3. THE INTERVIEW BOUNDARY, STATED SO a2.31 CANNOT CONTRADICT IT

> **a2.30 authors** the interview scenario, the parcours professionnel framing,
> the interviewer's questions and follow-ups, job titles and their feminines,
> workplace nouns and the workday verbs.
>
> **a2.31 authors** no second interview scenario, no parcours professionnel
> framing, no job titles and no job-title feminines. It owns academic
> equivalence hedging, diplomas, and talking about a past course of study, and it
> draws on the interview without being it.
>
> **a2.30 authors no diploma, equivalence or subject-of-study rows.** Enforced by
> `A2_31_RESERVED` in the batch and by a test, as a whole-word check in both
> files. The job advert in `s18-posting` is written around that boundary
> deliberately.

a2.31 ships after this unit, so it is cited **by unit id only**. A forward
citation by item id would name an id that does not exist; the test asserts none
exists.

---

## 4. WHAT a1.03's GENDER TEST PRINTED, BEFORE AND AFTER

**Before the apply:** `a1-03-genre.test.ts` 35 tests, 35 passing, seed v50.
Whole suite 4,374 passing.

**After the merge:** one failure, `-ure: card says 26 nouns, corpus says 28`.

I simulated this **before** applying anything and the prediction was exact —
same three endings, same numbers:

| ending | pinned | live | cause |
|---|---|---|---|
| `-ure` (ENDING_RULES) | n=26, 100% | **n=28**, 100% | `professeure` + `ingénieure`, **carried, not minted** |
| `-e` (WORTHLESS) | n=933, 70% | **n=946, 71%** | 8 minted + 5 carried feminines, all ending `-e` |
| `-euse` (MORE_ENDINGS) | n=7, 100% | **n=8**, 100% | `une coiffeuse`, minted |

**3 of 27 pinned endings moved.** `genre-endings.ts` was reconciled with a dated
note on each, matching the convention a2.26/a2.27/a2.28 already left in that
file. a1.03 back to **35/35**.

Two things worth carrying forward:

- **A carry moves a population even when an authoring does not.** Two thirds of
  the `-ure` movement came from rows this build never wrote — it merely
  *referenced* them, and the merge had to carry them out of Postgres. That is
  the a1.23 hazard, met for the fourth time.
- `-e` is the only figure that moved by more than a count. It went 70% → 71%
  because all thirteen new rows are feminine. It is still 19 points under the
  90% floor, so it stays correctly filed as worthless and a1.03's claim about it
  is unchanged.

---

## 5. IMPORTED AGAINST AUTHORED, AND THE OTHER-VOICE FRACTION

**68 authored, 66 imported.** The merge pulled 134 referenced rows out of
Postgres; 18 land in themes this unit does not own (`au-restaurant`, `cafe`,
`collegues`, `decouvertes`, `ecole`, `examens-et-diplomes`, `hebergement`,
`marche`, `rp-sante`).

**Other-voice: 28 of 68 = 41.2%.** The band floor is 40% and the test measures
it against the live rows rather than trusting this sentence.

That fraction is the point of the unit. The nouns of work were **finished** —
353 published rows, 179 of them single words — and the **questions** of work did
not exist: `vous faites quoi` 0 rows, `Depuis combien de temps` 0,
`parcours` 0 in the seed. Authoring the questions is what makes this a
situational unit rather than a vocabulary review, and it is what feeds a2.35's
mixed-situation CO set. The six `s12-listen` lines were written to stand alone
without this lesson's framing for exactly that reason.

---

## 6. THE ANSWER FOUR OTHER UNITS ARE WAITING ON

**`recherche-emploi` and `bureau` rows ARE published.** Measured 2026-08-16:

| theme | published in Postgres | in seed before this build |
|---|---|---|
| `bureau` | 337 | 0 |
| `recherche-emploi` | 592 | 0 |
| `collegues` | 317 | 0 |
| `affaires` | 316 | 0 |

By collation §1.3 every one of those rows is **REACHABLE and must be imported by
`itemId`, never re-authored.** The design's blocking question Q3 is answered and
its fear is overruled: a card inside a mission does not render blank because its
theme sits outside the cut, because the lesson references the item and the item
is therefore bundled. What is affected is theme browsing and the flashcard hub,
which is a real product cost, is not this unit's, and is not blocking.

**The design's instruction to author six rows into `recherche-emploi` was
overruled and not followed.** Every authored row landed in `metiers`.

---

## 7. DID THE FOUR-MOVE FRAMING HOLD?

*The question the whole design turns on.*

**Yes, and the reason is that the framing is load-bearing in five different
places rather than announced once.** The four moves are the scene's break beat,
the deck in `s02`, the three columns of `s04`, the two cumulative group drills,
the four consecutive scenario turns, the four practice items and the four
checklist rows. A learner cannot get through the lesson without meeting the
shape seven times in seven different shapes.

Where it was **at risk** of reading as a work-vocabulary unit with a scenario
stapled on was act 3, which is the heaviest act and contains the two sections
with the least to do with the Owns: `s11-fem` and `s10-workplace`. Both are
genuinely vocabulary. They survive because move 3 needs them — you cannot say
what you handle daily without the workday verbs and the prepositional phrases —
but an author revisiting this unit should watch act 3 first.

The single strongest piece is the scene, and the brief was right about why: the
break beat lands on the **silence**, not on a mistake. Nobody is rude and
nothing is wrong; the learner says four correct words and stops. That is the
whole unit in one beat, and it is what let act 1 teach the shape without
teaching any grammar at all.

**The reframe** — `The first sentence is the anchor, not the answer.` — appears
verbatim in four sections. Rejected candidates are recorded in the corpus file,
including the design's own "structure your answer with an opening, a duration, a
detail and a closing question", which is the table rather than a rule a learner
can act on while a stranger is waiting.

---

## 8. EXAM VALUE, STATED TRUTHFULLY

**This unit has the strongest exam story in the band, and the band delivers no
exams. Both halves of that are true.**

What is true: the career narrative is canonical TEF Canada EO section B material
and "Parlez-moi de votre parcours professionnel" is TCF Canada EO tâche 3
verbatim; job postings are stock TCF CE stimulus, which is what `s18-posting` is
shaped like. Each act is mapped to a named task in `EXAM_MAPPING` in the corpus
file, because that mapping is what makes the content right and what a future
runner will consume.

What was **not** authored, per collation §1.12 and decisions item 4 which Paul
accepted on 2026-08-15: **zero `ExamTask` rows, zero `ExamSeries` rows, zero
`Scenario.exam` values, and no `delf_a2` added to `EXAM_FORMATS`.** The test
asserts all four absences, because the temptation here is real and the design
recommends the opposite. DELF A2 *monologue suivi* is the closest pedagogic
match and cannot be represented at all.

`content_exam_tasks` was measured rather than guessed: **2 rows, both
`delf_b2`, both `blanc-01`, both `in_review`, and both about work** (a CE passage
on `le télétravail` and a PE essay prompt about it). They are invisible to every
learner for two independent reasons — `publish-content.ts` selects
`where status = 'published'`, and exam entities are excluded from the seed cut.
**The only exam content this project has ever authored is already in this unit's
subject area and nobody can see it.**

**One exam-layer artefact was set, and it is free:** `Lesson.skill: 'PO'`. The
field is declared in `schema.ts:1303`, validated at `:3311`, and read by
`dueExamSkills()` at `store/progress.logic.ts:1281`. a2.29 was the first lesson
in the product to set it; **a2.30 is the second.**

---

## 9. WHAT THE GUARDS CAUGHT IN THIS BUILD'S OWN WORK

Four, and they are the argument for writing the guard before the content.

1. **`"The honest one"`** in a `cardDeck` body. The banned-word rule is
   deliberately a plain substring test in both directions rather than the band's
   `\bhonest` pattern, which cannot see `dishonest` — the hole a2.06 found.
2. **`"zero article"` on the reference sheet**, in front of a learner. The
   jargon walk covers `intro`, `overview` and the sheets, not just the sections.
3. **`Je suis professeur.` already existed** at `fr.a1.metiers.244`, caught by
   the batch's intra-theme duplicate guard **on the dry run**. Authoring it would
   have made one flashcard the hub serves twice. It became an import — rule 1
   doing exactly what it exists for — and `.022` now carries `Je suis
   comptable.`, which the corpus genuinely lacked. The row COUNT did not change:
   `.022` simply carries a different job, and the professeur anchor is now an
   import on top of the 68.
4. **Four teaching sections used a1.06's rule without naming a1.06.** Fixed in
   `s04`, `s11`, `s13` and `s17`.

### The mutation test found the two holes it was supposed to

§15 predicted two mutations would expose a weakness rather than confirm a
strength. Exactly two did.

- **The article could be presented as correct.** The written-only check guarded
  only *spoken* surfaces, so an `examples` entry could have taught
  `Je suis un ingénieur.` as a model sentence — a2.30 contradicting its own
  prerequisite — with every test passing. Closed with a field-aware walk: the
  article form is now legal only under `wrong`, `promptSound`, `promptSay`,
  `prompt` or `opts`.
- **The joined card's role was unpinned**, only its string. Closed by asserting
  the label, that each card carries its move's model sentence, and that
  `JOINED_ANSWER` literally contains all four.

After closing both: **10 of 10 mutations caught**, including a renamed a2.29
rung, an authored repair row, a paraphrased a1.06 string, a dropped
`s21-deliver`, an orphan feminine and a second scenario.

---

## 10. THE ONE NEIGHBOURING FILE THIS BUILD TOUCHED, AND WHY

§14 forbids touching another unit's test. **One edit was made, to
`a2-29-hotel.test.ts`, and it is the case that rule does not cover.**

a2.29 carried `const NEW_BUT_READ = new Set(['skill'])` and a companion test
whose own comment reads: *"If another lesson later sets `skill`, this goes red
and the allowlist above should be emptied rather than left to hide a real
invention."* a2.30 sets `skill: 'PO'`, so it went red exactly as designed. The
set was emptied.

**That edit makes a2.29's guard stricter, not weaker** — its first test now
flags any invented field with no exemption at all. It is a hand-off a2.29
anticipated and wrote instructions for, not a neighbour's guard being weakened to
make this build pass.

---

## 11. WHAT WAS FOLDED, WHAT WAS DROPPED

**One lesson, not two** (collation C6; `den.tsx:169` opens `lessonIds[0]` only).
The design's fallback split (l1 small talk, l2 interview) was refused.

- **Folded:** the interview, as the single `scenario` at `s20`.
- **Dropped:** the second delivery of the parcours, and the separate exam-task
  lesson.

**From the standard tail:** `reviewDeck` and `flashcards` were dropped — nothing
enforces them — and every authored row is instead released through
`deckTranche`, asserted row by row. **`practice` was NOT dropped and could not
be:** `lesson-contract.test.ts:505-519` mirrors the publish gate and a
non-assessment lesson without one does not ship. `progressCheck` was kept on
judgement rather than by rule, because it is the surface carrying the four-move
checklist now that nothing reads a transcript.

**Not device-gated.** The unit uses exactly one each of `scene`, `scenario`,
`reading` and `dictation`, so collation §1.10's blocking step 4 does not apply.
A test pins that so it stays true.

---

## 12. STILL OPEN

- **Not published, but NO LONGER BLOCKED.** §17 listed "whether `content:publish`
  is still blocked by `sons.09.l1`" as unverified. **It is not.**
  `pnpm content:parity` run after this merge reports *"Nothing in the seed is at
  risk from a publish"*, with no seed-only lessons at all: `sons.09.l1` is now in
  both sides. The only divergence left is `b2.01.l1`, which is database-only and
  `in_review`, so a publish would ADD rather than delete. **Publishing was still
  not run** — it is not part of a lesson build and the decision to cut a snapshot
  is not this build's to make — but the standing warning that has blocked it
  since the sons.09 incident no longer applies, and the next person does not need
  `content:masterclass` to get past it.
- **No device verification.** Every bubble ending in `!` or `?` is a tail-clip
  risk and the three question-final scene bubbles were kept short for it, but
  none of this has been on a Pixel 6.
- **`s15-trap`'s audio step** plays each card's `fr` via TTS. No studio take was
  briefed, so `recordingId` names nothing yet and the step falls back to TTS.
- **Act 3 is the heaviest act** and contains the two sections least connected to
  the Owns. See §7.
- **The `-e` bucket** now sits at 71%. It has moved 70 → 71 across four builds;
  if it keeps climbing, a1.03's claim that it is worthless will eventually need
  re-examining, though at 19 points under the floor that is not soon.

---

*Written by the a2.30 build, 2026-08-16. Companion files:
`04-REPAIR-MOVE-IDS.md` (a2.07's frozen block), `46-A2-29-BUILD-REPORT.md`
(the rung table), `03-ANSWER-FOLD-FACT.md` (what a scored surface can test).
This file is `.md` and therefore gitignored: `git add -f` to track it.*
