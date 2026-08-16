# Build a2.30 "Work and Jobs" / Le travail & les métiers

Trail seq **29** of 35. Unit **6 of 8** in the A2 situations band, and the only unit in
that band that is not a transaction with a stranger who wants to help you.

**Two units in this band are hard prerequisites and must be shipped before you start.**

- **`a2.07` (seq 24)** owns the repair move for all eight units. You cite it by unit id
  and reuse its rows by `itemId`. You author zero repair rows.
- **`a2.29` (seq 28)** owns the register and politeness ladder for all eight. You cite it
  by unit id and reuse its rows by `itemId`. You author zero softener rows.

If either is unbuilt, stop and say so. Do not build against their design documents.

**Read first, in this order:**

1. `ealch-admin/A2-SITUATIONS/10-BAND-COLLATION-AND-DECISIONS.md`. This is the settled
   decision register for the band and it **outranks this prompt and outranks the design
   document**. Where I quote it below I give the section number.
2. `ealch-admin/A2-SITUATIONS/12-DECISIONS-FOR-PAUL.md`. Four items. Item 4 is the one
   that constrains you: this band authors no exam artefacts.
3. `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, `A2-BRIEF-CORRECTIONS.md`.
4. `ealch-admin/A2-SITUATIONS/29-a2.30-travail-metiers-DESIGN.md`, your unit's design.
   It is good work and three of its load-bearing pieces have been overruled since it was
   written. The overrules are in §2 below. Read the design after you have read this file,
   not before.
5. **`a1.06.l1` as shipped**, in the seed, in full. It is your prereq and it already owns
   your grammar. **`a2.18.l1` as shipped**, for `depuis`. **`a2.07` and `a2.29` as
   shipped**, for the two moves you quote.

This prompt was written against the repo at commit `4ca3e6c` on 2026-08-15, seed version
46 (9,455 items, 64 lessons, 75 units, 60 scenarios). Figures marked **[SEED]** were
measured by me in `ealch-v2/src/content/seed.json`. Figures marked **[CODE]** were read in
the TypeScript. Figures marked **[UNVERIFIED-DB]** come from the design agent's Postgres
queries, which nobody has re-run. **Every UNVERIFIED-DB figure carries the command that
settles it. Run those commands before you act on the number.**

---

## Band consistency pass, 2026-08-15

*Eight prompts were written in parallel by eight agents who could not see each other's
work. These corrections were applied afterwards, across all eight. They overrule
anything below them and anything in the collation that disagrees.*

| # | What changed in THIS prompt | Authority |
|---|---|---|
| 1 | **Your `practice` finding is now band doctrine.** `lesson-contract.test.ts:505` mirrors the publish gate and fails any non-`assessment` lesson with no `practice` section, empty `practice.itemIds`, or empty `Lesson.itemIds`. Combined with 0.2, every lesson in this band ships exactly one speaking drill and cannot opt out. Verified and propagated to all eight. | `ealch-v2/src/content/lesson-contract.test.ts:505-519` |
| 2 | **The answer fold.** Quiz grading uses `fold()` in `answer.logic.ts:32`, not `normalizeFr`. Collation §0.3's narrowing is withdrawn. Your §7 list has been extended to **accents, cedillas, capitals, hyphens, apostrophes/elision, word division and commas**. **Your own conclusion survives intact**: `fold()` removes marks, not word tokens, so the missing `un` is testable in writing. | `03-ANSWER-FOLD-FACT.md` |
| 3 | **BAND RULE, new.** Fold the expected answer and the most plausible wrong answer before authoring any `typeIn`, `errorSpot` or dictée item; **if they collide, move it to `mcq`/`listenChoose`.** | band rule, all eight prompts |
| 4 | **a2.29's ladder now has a quotable contract and you are bound by it.** Three rung names to quote **verbatim**, five clauses, zero rung lines authored. a2.29 was written in parallel with you and could not hand you the names; they are in §6 now, with a fallback for the case where a2.29 has not landed. | a2.29's prompt, §THE LADDER |
| 5 | **The repair-move id file is `04-REPAIR-MOVE-IDS.md`**, not `11-` (taken by `11-DESIGN-MOCK-PROMPT.md`). Contract: six rows, `au-restaurant`, contiguous, domain-neutral, face-cost order, frozen at publication. **If that file does not exist, a2.07 has not landed:** cite `a2.07` by unit id, carry no repair row, and say so in your report. | filename collision, and the a2.07-not-landed fallback you did not have |
| 6 | **Your theme statement is confirmed and protected.** `metiers` is real, needs no re-map, and a2.31 says the same of `ecole`. Both prompts now state it, so nobody "fixes" either. | collation §5 |
| 7 | **You are not device-gated.** Blocking step 4's exposed list was wrong at two entries and now names **a2.07, a2.28, a2.29, a2.32**. You use one each of the five untested types. Keep it that way. | collation §1.10, corrected |
| 8 | **`corpus:probe` has no `--count` flag.** You never used it; noted so you do not add it. `--theme` already prints the count. | `scripts/probe-corpus.ts` |

---

## Identity

Measured in the spine (`ealch-admin/scripts/author-full-curriculum-spine.ts:804`) and in
the seed unit row. **They agree, byte for byte, including `title` and `sub`.** This unit
does not carry the title/sub swap that the batch-1 and batch-2 A2 briefs all carried.

```
a2.30   seq 29   level a2   track a2
  title:  Work and Jobs
  sub:    Le travail & les métiers
  gloss:  job titles & workplace vocabulary
  canDo:  Can say what they do for a living and describe a workplace
  themes: ['metiers']
  prereqUnitIds: ['a1.06']
  lessonIds:     []          <- first build, version starts at 1
```

Use the block as it stands. Do not edit `prereqUnitIds`: the band's two citation
dependencies (`a2.07` to all seven, `a2.29` to the last three) are citations, not prereqs
(collation §1.3).

---

## Your theme is real. Do not re-map it.

Five of this band's eight units point at a phantom theme and have to be re-mapped before
they can mint an item id. **You are not one of them.**

| | |
|---|---|
| spine `themes` today | `['metiers']` |
| **AUTHOR INTO** | **`metiers`, unchanged** |
| import-from, do not author | `bureau`, `recherche-emploi`, `collegues`, `affaires` |
| status | **SETTLED, no change** (collation §5) |

`metiers` holds **353 rows [SEED]** and has a `themeMeta` entry
(`ealch-v2/src/content/themeMeta.ts:100`, `Les métiers` / `Job titles`) [CODE]. It is one
of the five real themes in the band.

**Say this in your build report and put it in your test, because somebody will try to
"fix" it:** a2.30's theme needs no re-map, its `themes` array in
`author-full-curriculum-spine.ts` is correct as written, and **you must not touch the
spine file**. The other seven units' re-map lands in one reviewed diff that is not yours
(collation §5, blocking step 2). If a re-map diff arrives that changes `a2.30`'s themes,
it is wrong.

### Your theme is also the one place in this project where the seed is not a cut

`metiers` is **353 in the seed and 353 in Postgres** [SEED, and UNVERIFIED-DB for the
Postgres half]. The standing warning that the seed holds roughly a quarter of the database
is true in aggregate and false for this theme. That has one useful consequence: **for
`metiers` only, a seed-side measurement is a corpus-wide measurement**, and the highest-id
check is trustworthy rather than merely indicative.

Confirm it before you rely on it:

```bash
cd ealch-admin
pnpm corpus:probe --theme metiers
pnpm content:parity
```

Everything else you touch is cut-affected and must be measured against Postgres.

---

## §2. What has been overruled since the design document was written

Three of the design's load-bearing pieces are gone. Two of them are structural. Read this
section before you read the design, or you will build the wrong lesson.

### 2.1 `monologue` is not funded, and neither is `openPrompt`. This is the big one.

The design's spine is the learner's own sixty-second `parcours` answer, built in public
across the acts and **delivered twice**, and its delivery surface is a proposed new section
type called `monologue`: a prompt, a thirty-second prep beat, an uncapped speech capture, a
live checklist ticking off the four moves against a partial transcript, and rubric-anchored
feedback through `examGrader`.

**Collation §3.3 merged `monologue` with a2.28's `openPrompt` into one component, cut the
two pieces carrying the unknowns, and then §3.2 ranked the merged component second and
deferred it. The band funds exactly one engineering item and it is `listening.hideLines`.**

Grep confirms none of it is built: `hideLines` and `hideText` return **zero hits across
`ealch-v2/src`** [CODE], so even the funded item has not landed yet.

**Rebuild the spine on today's renderer. §4 below is that rebuild.** Do not author a
`monologue` section. Do not author a `prepS`, a `speakS` or a `checklist` field. Do not
write a card that promises the learner a recording, a countdown, a score or feedback.

### 2.2 The zero-article rule after `être` is fully owned by your own prereq

The design found this and it is the single most important content fact about this unit.
Measured again by me [SEED]: `a1.06.l1` has 26 sections and **37 of its 45 item ids are
`metiers` rows**. The rule is taught in six of them.

| section | type | title | what it does |
|---|---|---|---|
| `s01-scene` | `scene` | **The Word She Left Out** | the whole scene is this rule |
| `s10-jobs` | `examples` | **What A Job Takes After Être** | five worked examples, `terms: ['noArticle']` |
| `s11-joberrors` | `commonErrors` | **Three Ways The Job Goes Wrong** | first card is `Je suis un architecte.` against `Je suis architecte.` |
| `s15-test` | `cardDeck` | **One Test, Not A Feeling** | the `c'est` / `il est` determiner test, five cards |
| `s16-contrast` | `tapTable` | **The Same Person, Twice** | `C'est un médecin.` / `Il est médecin.` on one row |
| `s21`, `s22`, `s23`, `s25` | scenario, reading, reviewDeck, quiz | all re-run it |

String counts inside the serialised `a1.06.l1`: `médecin` 40, `article` 16, `ingénieur` 13,
`Il est médecin` 15, `Je suis un` 4 [SEED]. `a1.11.l1` (indefinite articles) imports ten
more `metiers` rows and names professions as the case it taught first.

**You may quote the rule, you may recruit it, and you may test it. You may not teach it.**
Doctrine §B.5 requires every lesson to own one thing the table does not show. The zero
article is not available to be that thing, and act 2 of this lesson is not allowed to be a
second run at your prereq.

Quote it by naming `a1.06` in the note of every example that uses it. One of a1.06's own
strings is the right thing to lift, and it is short: **"No un. The gap after suis is the
grammar."** (`a1.06.l1` `s10-jobs`, example 1, `note`) [SEED]. Assert the quotation in your
test; a paraphrase must go red.

### 2.3 `depuis` / `pendant` / `il y a` belong to a2.18 at seq 14

`a2.18.l1` is shipped with 24 sections and **247 occurrences of `depuis`** and 87 of
`pendant` in its serialised body [SEED]. Its section list includes `s04-depuis`,
`s05-english`, `s06-quand`, `s07-tense` (a trapDrill on the tense `depuis` forces),
`s09-pendant`, `s10-pair`, `s12-dans`, `s13-ilya`, `s14-twice` [SEED].

**Declare `grammarAssumed: ['a2.18']`, use it, do not teach it, and do not build a
trapDrill about the tense `depuis` takes.** That drill is `a2.18`'s `s07-tense` and yours
would be the second copy.

**What is genuinely yours, and it is narrow:** the *question* form.
`Depuis combien de temps` returns **0 rows [SEED]** and was measured at 3 rows corpus-wide
[UNVERIFIED-DB]. It is what the interviewer asks and it is in the other party's voice,
which is exactly what this band exists to author. Take the question. Leave the paradigm.

```bash
pnpm corpus:probe --tokens "depuis combien de temps,ça fait combien de temps,vous faites quoi,dans la vie"
```

---

## §3. The teaching problem

### Owns: the shape of an extended answer

Every other unit in this band teaches a script that both parties know. Yours has no script.
The other party is forming an opinion rather than serving you, the turn runs sixty seconds
rather than two exchanges, and the content is the learner's own history, so no model
dialogue can carry it.

What the learner can be given is the **shape**. Four moves, in order:

```
1  L'ancrage      what you are            Je suis ingénieur.                  a1.06's rule, quoted
2  La durée       for how long            Je travaille là-bas depuis six ans. a2.18's rule, quoted
3  Le détail      what that means daily   Je m'occupe des dossiers clients.   YOURS
4  L'ouverture    a hook back to them     Et vous, vous faites quoi ?         YOURS
```

Moves 3 and 4 are the Owns. Move 3 is the `describe a workplace` half of the canDo. Move 4
is the half nobody teaches and the half that makes the answer a conversation rather than a
recital.

### The reframe candidate

> **One sentence is an answer. Four is a story, and the fourth one hands the conversation
> back.**

It runs mid-sentence, it names the failure it prevents, and it predicts what the learner
will otherwise do. Record what you rejected. "Structure your answer with an opening, a
duration, a detail and a closing question" is the table, not a rule a learner can act on
while a stranger is waiting.

The density validator requires the reframe verbatim in at least **3** sections
(`LIMITS.reframeMinSections`, `density.logic.ts:76`) [CODE].

### The failure the scene shows

Doctrine §B.2's A2 register of stakes fits this unit exactly and it is not an error scene.
Nobody is rude and nothing is wrong. The learner says four correct words, stops, and the
other person waits. The break beat lands on the **silence**, not on a mistake. That is the
whole unit in one beat and it is the strongest scene in the band.

---

## §4. Rebuilding the parcours spine without the deferred component

This is the largest piece of work in this prompt and the place where an author will be
tempted to paper over a loss. Do not. State the loss in the build report and do not let a
card in the lesson claim otherwise.

### 4.1 What the app can actually hear, measured

| fact | value | where |
|---|---|---|
| longest single capture the app asks for | **7,000 ms** | `app/roleplay.tsx:171`, `stt.listen(line.user, { maxMs: 7000 })` [CODE] |
| the service's own default | 6,000 ms | `src/services/stt.ts:130` [CODE] |
| how a capture is scored | similarity blend against a target string plus its `alts` | `src/utils/score.ts` [CODE] |
| open exam tasks are answered by | **a `TextInput`** | `app/exam-task.tsx:19`, `:246`, `OPEN_TASK_TYPES` includes `po_monologue` [CODE] |
| `timingS` | summed on the series card for a display estimate, nothing else | `app/exam.tsx:57` [CODE] |
| any countdown anywhere | **none**; `setInterval` is 0 across the four render files | collation §1.9 [CODE] |
| `examGrader.grade` callers | one, `app/exam-task.tsx` | [CODE] |

So: a ninety-second turn is nineteen times what the app will hold open, a speaking task
authored as an exam task is answered by typing, and `prepS` would drive nothing.

### 4.2 What is lost. Say all six of these in the build report.

1. **Continuous capture.** The app never hears the four moves as one stretch. It hears four
   captures of up to seven seconds each.
2. **The learner's own content.** `stt.listen` scores against a target string. There is no
   surface that accepts an arbitrary sentence about the learner's real job and says
   anything true about it. What the lesson rehearses is a model parcours with slots, not
   the learner's own.
3. **Feedback.** No band, no rubric, no feedback string. `examGrader` cannot be reached
   from a lesson section.
4. **The prep beat.** Tap-to-continue only. There is no timer to build one from.
5. **The live checklist.** Nothing ticks a move off a partial transcript. The checklist
   becomes something the learner reads and judges themselves against, afterwards.
6. **Evidence of fluency under sustained load.** Nothing in the lesson distinguishes four
   moves said in one breath from four sentences said with long pauses. The unit teaches the
   shape and cannot measure the delivery.

The design says it would rather ship a2.30 late with `monologue` than on time without it.
That call has been made the other way (collation §3.2, §3.4). **Build the lesson.**

### 4.3 How the spine is rebuilt

The artefact survives. Only its delivery surface changes, and it changes into four shipped
surfaces instead of one unbuilt one.

| the move made in public | how it is delivered today | what it costs |
|---|---|---|
| build the answer move by move | unchanged: acts 2 and 3 add one move each, and two cumulative `groupDrill`s join what exists so far | nothing |
| deliver it whole | **the four moves are turns 3 to 6 of the single `scenario`, consecutive and uninterrupted.** The interviewer's turns between them are a nod and nothing more. Each turn is one move, each is inside seven seconds, each carries `alts` | the joins are heard as four captures, not one |
| rehearse it | `practice` over four move-model items carrying `voiceflash` | four separate rehearsals; the learner joins them in their head |
| check it | `progressCheck`, naming the four moves as four things the learner can now do | self-judged, not scored |
| write it | `dictation` (word mode) plus one quiz `typeIn` carrying **two joined moves** | writing is the only surface that reliably sees a missing word (§7) |
| keep it | the reference sheet: a `table` at `layer: 'deep'` with the four moves as slots | it is a reference, not a rehearsal |

**The scenario is the load-bearing piece and it needs authoring care.** The seed's maximum
turn count anywhere is 6 [UNVERIFIED-DB, and consistent with SEED]. You are at that
ceiling, which means the interviewer's opening and the learner's four moves is the whole
budget. Spend it that way: one opening turn from the interviewer, one orientation turn, and
then four consecutive learner moves. Do not spend a turn on small talk.

Author **two to four `alts` per learner turn**, covering different job families, because
`alts` is the only place in the entire lesson where more than one true answer scores. That
is the nearest thing to accepting the learner's own history and it is worth the authoring
time.

### 4.4 Author the swap so it is a one-section diff later

Name the rehearsal section **`s21-deliver`** and give it exactly the four move-model items.
When `openPrompt` is eventually built (collation §3.2 ranks it second, deferred to v2), it
replaces that one section and the four-move checklist moves into it. Say so in the section's
authoring comment so the next person does not have to rediscover the seam.

---

## §5. Feminisation. This unit owns it for the band, and here is the rule.

Collation **C4** settles the policy as **corpus-first, then OQLF**, assigns it to a2.30, and
binds the other seven to whatever you land. This is the unit with more job titles than any
other, so the rule has to be operational rather than a principle.

### What is actually in the corpus

`metiers` word rows: **99 begin `un `, 9 begin `une `** [SEED]. Of the nine, eight are
feminine-by-noun (`une usine`, `une équipe`, `une entreprise`, `une réunion`, `une pause`,
`une profession`, `une secrétaire`, `une hôtesse de l'air`) and exactly one is the feminine
of a masculine headword that also exists: **`une avocate`, `fr.a1.metiers.248`** [SEED].
Counting all kinds rather than words only, `metiers` runs 111 `un ` to 14 `une `.

Feminine job forms that exist somewhere in the seed, with counts [SEED]:

```
infirmière 9 · directrice 5 · avocate 3 · caissière 3 · boulangère 2 · vendeuse 1 · serveuse 1 · agricultrice 1
autrice 0 · auteure 0 · professeure 0 · ingénieure 0 · travailleuse 0 · coiffeuse 0 · actrice 0
```

The design measured a different picture in Postgres: `autrice` 6, `auteure` 2,
`ingénieure` 5, `travailleuse` 4, `professeure` 1 [UNVERIFIED-DB]. **Both pictures matter
and they do not conflict:** the seed is silent on the contested forms and Postgres is not.
Measure Postgres before you mint anything.

```bash
pnpm corpus:probe --words "autrice,auteure,professeure,ingénieure,travailleuse,directrice,vendeuse,serveuse,boulangère,infirmière,coiffeuse,caissière"
```

Use real orthography. `corpus:probe` does not strip accents and will report a false ABSENT
for `boulangère` or `ingénieure` if you probe them unaccented.

### The rule, in the order you apply it

1. **If a feminine form already exists anywhere in the corpus, import that exact form.**
   Any theme, any level. Do not mint a competing variant, and do not "correct" a shipped
   one. This is C4 rule 1 and it is the one that stops eight units drifting apart.
2. **Where two variants both exist, take the more numerous one.** On the design's figures
   that means **`autrice`**, not `auteure`. Re-measure before you commit to it.
3. **Where no feminine exists, mint the OQLF form**, because the exam base is TEF and TCF
   **Canada**:
   - `-teur` becomes `-trice`: `directrice`, `agricultrice`, `traductrice`
   - `-eur` from a live verb stem becomes `-euse`: `vendeuse`, `coiffeuse`, `serveuse`
   - `-ier`, `-ien`, `-er` take the ordinary written feminine: `boulangère`, `pharmacienne`
   - **an epicene noun takes a final `-e` and keeps its shape**: `une ingénieure`,
     `une professeure`, `une auteure` only if rule 1 has not already given you `autrice`
   - **a noun with no feminine takes the article only**: `une médecin`, `un médecin`
4. **Never mint a feminine that is a different word.** `la médecine` is the discipline, not
   the doctor. `la physique` is not a physicist. One card names this trap and it is worth a
   card, because it is the error a learner produces from the pattern.
5. **Pairs only.** Author a feminine only where the masculine already exists as a corpus
   row, so every new row is half of a pair the learner can see. `une avocate` /
   `un avocat` is the shape the corpus already ships; copy its gloss and its `kind`.
6. **Cap it at 8 to 12 new word rows.** This is a card deck, not a wordlist.
7. **State the rule once, in the lesson, in one sentence, in the learner's words**, and
   never as a grammatical lecture. The learner needs to know which form to say about
   themselves, not the history of the debate.

### The hazard this creates, and it has fired four times

A gendered single-word row joins the ending population that `a1.03` (Le genre des noms)
measures, and `a1.11`, `a1.22`, `a1.23` and `a1.26` all broke `a1-03-genre.test.ts` this
way. Adding 8 to 12 feminine job nouns is exactly that shape of change.

**Capture `a1-03-genre.test.ts`'s output BEFORE the apply, not after**, expect to have to
reconcile its printed figures, and prefer importing an existing feminine over minting a new
one wherever rule 1 lets you. Every import you can make instead of an authoring is a figure
you do not move.

---

## §6. Boundaries. Cite these, do not re-author them.

Collation **C5** settles each of these explicitly. The register is that you name the owning
unit **by unit id** in a card, and reuse its rows **by `itemId`**.

| what | owner | what you do |
|---|---|---|
| the repair move ("I did not understand") | **a2.07**, once, for all eight | cite `a2.07`, reuse its `au-restaurant` rows by id, author **zero** repair rows |
| the register / politeness ladder | **a2.29**, once, for all eight | cite `a2.29`, reuse its rows by id, author **zero** softener rows |
| `depuis` / `pendant` / `il y a` | **a2.18**, seq 14, shipped | `grammarAssumed`, use it, do not teach it |
| the zero article after `être` | **a1.06**, your prereq, shipped | quote its string, do not teach it |
| `tu` versus `vous` as a form | **a1.05**, shipped | you own the situational **trigger**, not the form |
| prepositions of place | **a2.04**, shipped | used in move 3, not taught |
| **the interview** | **YOU** | see below |
| the dossier and the study history | **a2.31**, seq 30 | see below |
| money, payment, salary as a transaction | **a2.26** | not yours |

### The interview boundary with a2.31, settled

**The interview is a2.30's. The dossier and the past course of study are a2.31's.**
(Collation §1.2 and C5: "The interview | **a2.30** | The 60-second parcours is its Owns.
a2.31 owns the *dossier and the study history*, which an interview draws on but is not.")

State this in your build report in the following terms, so the a2.31 builder cannot
contradict it:

- **a2.30 authors** the interview scenario, the `parcours professionnel` framing, the
  interviewer's questions and follow-ups, job titles and their feminines, workplace nouns
  and the workday verbs.
- **a2.31 authors no second interview scenario**, no `parcours professionnel` framing, no
  job titles and no job-title feminines. It owns academic equivalence hedging, diplomas,
  and talking about a past course of study, and it draws on the interview without being it.
- **a2.30 authors no diploma, equivalence or subject-of-study rows.** Where your interview
  needs one line of study history, it is one line, it is unanalysed, and it names `a2.31`
  as where that is taught.
- **a2.31 ships after you (seq 30), so you cannot cite it by `itemId`.** A forward citation
  by **unit id** is fine and reads as "that comes next". A forward citation by item id is
  not, because the id does not exist yet.

### One softener paragraph, because the design wanted more

The design opens an "asking for time off" sub-situation and reaches for `je voudrais`,
`j'aimerais` and `pourriez-vous`. **That sub-situation is out of scope for this unit.** It
is a request, requests are `a2.29`'s ladder, and your canDo says nothing about them.
`pourriez-vous` is additionally waiting on Paul (decisions item 1). If a softener is needed
inside your interview scenario, it is one of `a2.29`'s rows by `itemId` and it is not
taught.

### a2.29's ladder, and the contract that binds you to it

*Added 2026-08-15 by the band consistency pass. a2.29 was written in parallel with this
prompt, so it could not have quoted these; they are fixed for the band now.*

a2.29 (seq 28, immediately before you) owns the escalation ladder. **Three rungs, and
these three names are learner-facing strings you quote verbatim:**

```
Rung 1   Ask once, softly.
Rung 2   Say it again, without the person.
Rung 3   Ask for the person who can fix it.
```

**The citation contract, five clauses, and it binds a2.30, a2.31 and a2.32 alike:**

1. You quote the three rung names **verbatim**. A paraphrase is a second ladder.
2. You reuse a2.29's rung rows by `itemId`. **You author no rung lines of your own** and
   **zero softener rows**.
3. You may add your own column, your own move, filled with your own vocabulary. The
   workplace request is a legitimate fourth column on a three-rung ladder.
4. You may **not** rename a rung, add a fourth, or reorder them.
5. a2.29's build report publishes the rung-to-`itemId` table as a short list you paste.

**If a2.29 has not landed when you author:** a2.29 is seq 28 and you are seq 29, so it
should have. If it has not, cite `a2.29` by **unit id only**, carry no rung row and no
rung name, and say plainly in your report that `s17-register`'s ladder reference is a
forward citation awaiting ids. Do not re-type a rung line "so it is ready"; that is the
duplication collation §1.6 forbids, wearing a different hat.

---

## §7. The traps

**One, and it is the one your scene shows: the answer that stops at one sentence.** It is
not a grammar error, which is what makes it hard to drill. Test it by **contrast**: the
same job, twice, one sentence against four, with what moved named in the third column.

**Two: the article that should not be there.** `Je suis un ingénieur.` This is a1.06's
trap, so you are re-testing rather than re-teaching, and it belongs in the trapDrill and in
one `errorSpot`, not in a teaching section.

**A measured fact that decides how you test it.** `normalizeFr` (`src/utils/score.ts:19`)
lowercases, strips combining diacritics, replaces apostrophes and punctuation including
hyphens with spaces, and collapses whitespace. **It removes marks and punctuation. It does
not remove word tokens** [CODE]. So a missing `un` survives the fold in every path, and the
article gap **is** testable in writing.

It is **not** reliably testable by ear. `practice`, the `scenario` and quiz `speak` all
score through the similarity blend in `score.ts`, and a four-word sentence missing one
short word can still land `close`. **Put the article trap on a written surface: the
dictée, a quiz `typeIn`, or an `errorSpot`. Do not build a spoken round on it.**

**Three: `depuis` with a past tense.** `J'ai travaillé là-bas depuis six ans` is the error
and the present is the correct form. a2.18 owns the rule; you own the sentence in which the
learner produces the error, and you name `a2.18` on the card.

**Four, and author one card on it: the polysemy of `un poste`.** It is a job position, a
television set and a police station, and it already carries 20 rows in the seed and 184
corpus-wide [SEED / UNVERIFIED-DB]. Gloss it narrowly or leave it out.

**What no scored surface can test at all** (settled band rule, *corrected and extended
2026-08-15; the old list read "accents, cedillas and commas" and deferred to collation
§0.3, which has since been withdrawn*). Quiz `typeIn` and `errorSpot` are graded by
`matchesAccept`, which calls **`fold()` in `ealch-v2/src/content/answer.logic.ts:32`**,
not `normalizeFr`. `fold()` strips **accents, case, punctuation, hyphens, the middle dot,
both apostrophes and all whitespace.** So:

| | always passes |
|---|---|
| accent, cedilla | `ingénieur` = `ingenieur` |
| capital | `Ingénieur` = `ingénieur` |
| hyphen | `chef-d'équipe` = `chef d'équipe` |
| apostrophe, elision | `d'équipe` = `dequipe`, `j'ai` = `jai` |
| word division | `parcours professionnel` = `parcoursprofessionnel` |
| comma, punctuation | `Ingénieur, en ce moment` = `Ingénieur en ce moment` |

Do not author a dictée or a `typeIn` whose only difficulty is any of them. Collation
§0.3's narrowing has been **withdrawn**: it was true of `normalizeFr` and irrelevant,
because the quiz has its own stricter fold. Authority: `03-ANSWER-FOLD-FACT.md`.

**Your finding above still stands and is the important half.** `fold()` removes marks
and punctuation; **it does not remove word tokens.** A missing `un` survives every fold
in every path, so `Je suis un ingénieur` against `Je suis ingénieur` is testable in
writing, and the article gap is your one safe written trap.

**BAND RULE, new.** Before authoring any `typeIn`, `errorSpot` or dictée item, fold the
expected answer **and** the most plausible wrong answer. **If they fold to the same
string the item tests nothing and must be moved to `mcq` or `listenChoose`.** Assert
`fold(answer) !== fold(distractor)` over every authored near-miss in your test file.

---

## §8. The section plan

**24 core missions in six acts, plus one deep reference sheet.** That sits inside the
doctrine range and matches the band's cluster (collation §1.1: 19 to 25 sections,
clustering at 22 to 24) and the three most recent A2 lessons, all of which run 24
[SEED: a2.06.l1, a2.18.l1, a2.23.l1].

**All 35 `SECTION_TYPES` render** (collation §3.1). `table`, `tapTable`, `quiz`, `examples`,
`roundup`, `teach` and `audio` render inside a mission via the shared fallthrough at
`MissionSection.tsx:647`. **Do not mark anything NEEDS-ENGINEERING.**

### Act 1. The answer that stopped at one sentence (4)

| # | id | type | layer | what it does |
|---|---|---|---|---|
| 1 | `s01-scene` | `scene` | core | The interview. Four correct words, then the silence. The break beat lands on the wait, not on an error. Beats in a named `SCENE_BEATS` const, prose at `md`, choice and break at `lg`, each with its own `audio`, break body 24 to 40 words. |
| 2 | `s02-fourmoves` | `cardDeck` | core | Four cards, one per move, then a fifth showing them joined. This is where the reframe first appears verbatim. |
| 3 | `s03-goals` | `goals` | core | The four moves as four `{t,s}` goals. |
| 4 | `s04-twoanswers` | `tapTable` | core | Three rows: the one-sentence answer, the four-move answer, what moved. **Three columns, short headers.** a2.16 measured a header glyph budget and a2.26's tapTable caps at six rows on a Pixel 6. |

### Act 2. Moves 1 and 2, quoted and not taught (4)

| # | id | type | layer | what it does |
|---|---|---|---|---|
| 5 | `s05-anchor` | `examples` | core | Move 1. Five examples, every note naming `a1.06`, and a1.06's own string quoted verbatim. Recruited to the monologue, not re-explained. |
| 6 | `s06-jobwords` | `groupDrill` | core | The learner finds their own job title. Groups by sector (santé, éducation, bâtiment, bureau, service), every word an imported `metiers` `itemId`. This is where the 179 existing `metiers` word rows get their first real use. |
| 7 | `s07-duration` | `examples` | core | Move 2, credited to `a2.18`. Introduces **`Depuis combien de temps…?`** in the interviewer's voice. |
| 8 | `s08-build2` | `groupDrill` | core | Produce moves 1 and 2 joined, for jobs the lesson has not shown. Doctrine §B.1, the eleventh form. |

### Act 3. Move 3, the Owns, and the heaviest act (6)

| # | id | type | layer | what it does |
|---|---|---|---|---|
| 9 | `s09-daily` | `cardDeck` | core | The five verbs that carry a workday: `s'occuper de`, `gérer`, `travailler avec`, `être responsable de`, `aider`. All lean on shipped grammar (`a2.22` pronominaux, `a2.01` -ER). |
| 10 | `s10-workplace` | `groupDrill` | core | Where and with whom: `dans un bureau`, `à l'hôpital`, `sur un chantier`, `en équipe`, `avec des clients`. Prepositions credited to `a2.04`. This is the `describe a workplace` half of the canDo. |
| 11 | `s11-fem` | `cardDeck` | core | Feminisation, per §5. Pairs only, plus the `la médecine` trap card. |
| 12 | `s12-listen` | `listening` | core | **The follow-up you did not expect.** Six interviewer lines, four questions with `why`. See §9. |
| 13 | `s13-build3` | `groupDrill` | core | Moves 1 + 2 + 3 joined, unseen jobs. |
| 14 | `s14-hook` | `examples` | core | Move 4, the hand-back. `Et vous, vous faites quoi ?` is **0 rows [SEED]** and is newly authored. |

### Act 4. The traps (3)

| # | id | type | layer | what it does |
|---|---|---|---|---|
| 15 | `s15-trap` | `trapDrill` | core | **Stepped, not stacked.** Walks `rule > cards > audio > drill`, `swipe`, an `audio` spec, a `say`, and a **gated** drill step (`lesson-contract.test.ts`, since 2026-08-13). `size` comes OFF a stepped trapDrill. The audio step plays each card's `fr`, so its `recordingId` must name a take containing those lines. Three traps: the article, `depuis` with a past tense, and stopping at one sentence. |
| 16 | `s16-errors` | `commonErrors` | core | **`swipe: true, size: 'lg'`.** Without `swipe` this falls through and has historically drawn nothing (sons.08 mission 22, a1.01 mission 5). Five cards. Three term chips. |
| 17 | `s17-register` | `cardDeck` | core | `tu` at the party, `vous` at the interview. Same four moves, two registers. Names `a1.05` for the form and `a2.29` for the ladder. |

### Act 5. Production (5)

| # | id | type | layer | what it does |
|---|---|---|---|---|
| 18 | `s18-posting` | `reading` | core | A real `offre d'emploi` with **`questionsInModal: true`**, so the passage and its questions become separate pages (`MissionSection.tsx case 'reading'`). `glossary` on six job-ad terms. This is a CE-shaped surface inside a lesson. |
| 19 | `s19-dictation` | `dictation` | core | Word mode. One of only three surfaces that make a learner produce text. Every dictée item must carry the `dictation` drill, checked against **Postgres**, not the seed. |
| 20 | `s20-interview` | `scenario` | core | **Six turns.** Interviewer opens, orients, then the learner's four moves run consecutively. Two to four `alts` per learner turn. `userEn` on every turn. See §4.3. |
| 21 | `s21-deliver` | `practice` | core | The four move-model items, each carrying `voiceflash`. **This section is mandatory**, see §8.1, and it is the seam where `openPrompt` lands later. |
| 22 | `s22-check` | `progressCheck` | core | The four-move checklist that `monologue` would have ticked, as a thing the learner reads and judges themselves against. `progressCheck` is a `PASSAGE_SECTION` (`density.logic.ts:259`) so it is exempt from the core word limit. |

### Act 6. Close (2, plus the sheet)

| # | id | type | layer | what it does |
|---|---|---|---|---|
| 23 | `s23-quiz` | `quiz` | core | Five rounds. **One quiz per lesson**, always the last scored surface. See §10. |
| 24 | `s24-roundup` | `roundup` | core | The four moves, one last time, with the reframe verbatim. |
| sheet | `sheet.a2.30.parcours` | `table` inside a `sheet` | **deep** | The four moves with slots, as the thing a learner screenshots before an exam. |

### 8.1 On dropping the standard tail. Checked, and partly refused.

The design drops `reviewDeck`, `flashcards`, `practice` and `progressCheck` from the
standard tail to fund an extra act. **Two of those four are legal and two are not.**

- **`practice` may NOT be dropped.** `lesson-contract.test.ts:505` asserts that *every*
  non-`assessment` lesson ships at least one `practice` section, that each one has a
  non-empty `itemIds`, and that every id resolves. The comment names it as a mirror of the
  **publish gate**, so a lesson without one does not merely fail a test, it does not ship
  [CODE]. The only exemption is `features: ['assessment']`, and that same test file asserts
  an assessment lesson owns **zero** corpus rows, which this one cannot be.
- **`progressCheck` should not be dropped**, on judgement rather than by rule. It is the
  surface that carries the four-move checklist now that nothing ticks moves off a
  transcript, and it is a declared rest point in a long act. `checkpoint-spacing`
  (`LIMITS.checkpointSpacing = 22`) is measured over act ends and `restPoints`, not over
  section types, so this is a design call and not a validator one [CODE].
- **`reviewDeck` and `flashcards` may be dropped.** Nothing enforces them. But doctrine §E
  requires every authored row to be reachable, so if you drop `flashcards`, every authored
  item must be **named by a section** or **released by a `deckTranche` and carrying a
  `flashcard` drill**. Check that against Postgres, not the seed, and say in the report
  which route each authored row took.

The design's reason for the drop was to fund a `monologue` act. That act no longer exists,
so most of the reason has gone with it. Dropping two rather than four is the right size.

### 8.2 Repeated section types

Collation §1.10 settles this. Repeated `listening`, `practice`, `trapDrill`, `examples`,
`groupDrill`, `cardDeck` and `tapTable` are **approved without a device test**. Repeated
`scene`, `scenario`, `reading`, `dictation` and `table` are untested and require a device
check first, which blocks a2.07 and a2.28 only.

**The plan above uses exactly one `scene`, one `scenario`, one `reading` and one
`dictation`. You are not blocked by step 4 of the blocking sequence. Keep it that way.**

---

## §9. Listening, and the band's one funded engineering item

`listening` is `{ lines: {fr,en}[], questions: {q,opts,correct,why?}[] }`, and
`ListeningView` currently prints both `l.fr` and `l.en` beside the play dot, so every
listening section in the product is answerable by reading (collation §1.4).

The band funds one fix: **`listening.hideLines?: boolean`** (collation §3.5). It hides the
line text, keeps the play dot and the box, and reveals after the learner has answered every
question, not gated on getting them right. **It is not built yet: `hideLines` returns zero
hits across `ealch-v2/src`** [CODE].

Your instructions:

1. **Author `s12-listen` so it works by ear either way.** The difficulty must be in the
   audio, never in whether the text is visible. If `hideLines` has landed by the time you
   build, set it. If it has not, author the same section and set it in a follow-up.
2. **Author the six lines so they stand alone**, without your lesson's framing. Collation
   §7.2: this band's listening sections are the only genuinely audio-only reception content
   in the product, and `a2.35` (Bilan A2) will lift them into a mixed-situation CO set.
   This costs nothing now and is expensive to retrofit.
3. **One question's correct answer is the repair move**, cited to `a2.07` by unit id and
   reused by `itemId`.
4. **Do not author `modelPlayback`, `wrongThenRight`, `perSentenceReplay`, `scoreOn`,
   `autoplay` or `audio.maxPlays` believing they do anything.** All six validate, publish,
   and are read by no renderer (collation §3.5). The seed already authors 31 of them.
5. `listening` has no speed control and no distractor field. Scene beats carry
   `speeds: [1, 0.65]`, so slowed playback exists at the beat level and not here.

---

## §10. Quiz notes

- **One quiz per lesson.** A second is silently never rendered.
- Formats available: `mcq`, `tapSilent`, `listenChoose`, `typeIn`, `speak`, `errorSpot`
  (`schema.ts:1002`) [CODE].
- **`typeIn` for two joined moves.** This is the only format that tests the Owns; every
  recognition format tests one piece. Two moves, not four: four is a paragraph and a
  paragraph typed on a phone is a test of patience.
- **`errorSpot` for the article** (`Je suis un ingénieur.`) and for `depuis` with a past
  tense. Both are whole-sentence errors and both are what learners actually produce.
- **`mcq` for which move is missing**, given a two-sentence answer. That is the unit's real
  assessment and it is a recognition question, which is the right level for it.
- **`listenChoose` for the interviewer's questions**, because it is the only audio-only
  surface in the product today. Note the card falls back to speaking the **English**
  options in some shapes: read the card, not just the schema, before you rely on it.
- **`speak` is available and weak for the article trap.** See §7. Use it for move 4, where
  what is being scored is that the learner said a question at all.
- Every question carries `why` and `ref`, and `ref` must point at a real section
  (`lesson-contract.test.ts`). `quiz-spread` caps any one option slot at 40% of the correct
  answers.
- **Quiz options are permuted at runtime; mission options are not.** Author the mission
  order you want the learner to see and do not hand-randomise the quiz.
- **Say which questions you wanted and could not write.**

---

## §11. Corpus plan

### 11.1 The DB-versus-seed question is answered, and it is good news

The design's blocking question Q3 was whether `bureau`, `recherche-emploi` and
`rp-travail-etudes` are reachable: **1,346 Postgres rows and 0 seed rows between them**
[UNVERIFIED-DB for the Postgres half; the 0 is confirmed [SEED], and I confirmed `collegues`
0 and `affaires` 0 as well].

**Collation §1.2 answers it and overrules the fear.** `SEED_CUT.tracks` is
`['sons','a1','a2']` and a track pulls in its units, its lessons, and **every item those
lessons reference**, automatically. `SEED_CUT.themes` is a separate mechanism for
vocabulary bundled regardless of which lesson references it. **So a card inside your
mission will not render blank because its theme sits outside the cut: your lesson
references the item, so the item is bundled.** What is affected is theme browsing and the
flashcard hub, which is a real product cost, is not yours, and is not blocking.

**Therefore: import freely from `bureau`, `recherche-emploi`, `collegues` and `affaires` by
`itemId`.** One condition, from collation §1.3's settled interpretation rule:

> A DB row that is `published` is REACHABLE and must be imported by `itemId`, never
> re-authored. A DB row that is not `published` is invisible to learners and may be treated
> as absent.

```bash
pnpm corpus:probe --theme metiers,bureau,recherche-emploi,collegues,affaires
pnpm content:parity
```

`content:parity` is the one that tells you `published` versus merely present. Run it. A row
you re-author because the probe showed it exists but you did not check its status is a
duplicate the flashcard hub will serve twice.

### 11.2 Import, do not author

- **Every job title in the `metiers` a1 block.** 179 word rows [SEED], of which 99 begin
  `un `.
- **The workplace nouns**: `une réunion`, `une entreprise`, `une équipe`, `une usine`,
  `une pause` [SEED].
- **From `recherche-emploi` and `bureau`**, the job-ad and workday vocabulary, subject to
  §11.1. Present in strength and importable rather than authorable [UNVERIFIED-DB, seed
  counts in brackets]: `poste` 184 [20], `entretien` 129 [15], `embauche` 59, `congé` 52,
  `démission` 36, `permis de travail` 27, `chômage` 24, `télétravail` 22 [1], `CV` 21 [4].
- **The repair move**, from `a2.07`'s `au-restaurant` ids.
- **The register ladder**, from `a2.29`'s ids.

Probe with real orthography: `ingénieur`, `métier`, `hôpital`, `congé`. `corpus:probe` does
not strip accents and reports a false ABSENT otherwise.

### 11.3 Author, roughly 55 to 70 rows, all `level: 'a2'`, all into `metiers`

**Author into `metiers` only.** Collation §5 gives you `metiers` as the AUTHOR-INTO column
and puts `recherche-emploi` in the import-from column. The design's bucket of six rows
authored into `recherche-emploi` is overruled: import from it, do not write into it.

| bucket | rows | kind | note |
|---|---|---|---|
| the four moves as model sentences | 16 | sentence | four per move, four different jobs |
| **the interviewer's questions and follow-ups** | **14 to 18** | phrase / sentence | see §11.4 |
| the spoken question forms | 6 | phrase | `vous faites quoi` **0 [SEED]**, `dans la vie` 1 row and none in a work theme [SEED], `depuis combien de temps` **0 [SEED]** |
| workday verbs in context | 10 | sentence | `s'occuper de`, `gérer`, `être responsable de` |
| feminised job titles | 8 to 12 | word | pairs only, per §5 |
| workplace prepositional phrases | 8 | phrase | `dans un bureau`, `sur un chantier`, `en équipe` |

Zero repair rows. Zero softener rows. Zero diploma or equivalence rows. Zero rows authored
into any theme but `metiers`.

### 11.4 The band's mandate, and it is 40 percent of your authoring

Collation §1.5, settled band policy, and it applies to you:

> **At least 40 percent of a unit's newly authored rows must be in the voice of the person
> the learner is talking to.**

For you that person is the interviewer and the new acquaintance. `vous faites quoi` is 0
rows [SEED]. `Depuis combien de temps` is 0 [SEED]. `parcours` is 0 [SEED] and was measured
at 22 corpus-wide with 4 in a work theme [UNVERIFIED-DB]. The nouns of work are finished;
the questions of work do not exist. **Author the questions.** That is what makes this a
situational unit rather than a vocabulary review, and it is also what feeds `a2.35`.

### 11.5 Id block

`metiers` a2 rows number **9, maximum `fr.a2.metiers.009`** [SEED], and because this theme
is fully in the seed (§1) that maximum is corpus-wide rather than cut-limited. Confirm
against Postgres anyway.

```
metiers   a2 max .009   ->   request fr.a2.metiers.020 to .089
```

The block starts above the maximum with a gap and is wider than needed. The measured
failure mode is a **concurrent lesson landing below the top of a range while a highest-id
check looks only at the top** (a1.20 and a1.19 collided exactly this way). **Verify by row
COUNT after the apply, not by highest id.**

### 11.6 Collision and duplication

- **The flashcard hub treats two rows sharing an `fr` inside one theme as one card served
  twice.** `une réunion` already exists at `fr.a1.metiers.151` and again in `bureau`;
  `un collègue` exists in `rp-travail-etudes` and again in `bureau` [UNVERIFIED-DB]. Those
  cross-theme duplicates are pre-existing and not yours to fix. **Do not add a third.**
  Probe by `fr` string, not by id, before authoring anything in the workplace-noun bucket.
- **a1.03's gender statistics.** See §5. Capture the test output before the apply.
- **Doctrine §E:** a conjugated form is not a corpus item and a participle is never a corpus
  item. Everything you author is an infinitive, a noun, a phrase or a full sentence.
- **`drills` is a Postgres enum array.** Read the gotcha before the first apply.
- Sentence budget 14 words. Passé composé and futur proche are permitted. **The four moves
  joined run past 14 words, so the joined answer is authored lesson text, never a corpus
  row.**

---

## §12. Exam value, stated truthfully

**This unit has the strongest exam story in the band, and the band delivers no exams.**
Both halves of that sentence go in your report.

### What is true

- **TEF Canada, Expression Orale, Section B.** The career narrative is the canonical raw
  material and "parlez-moi de votre parcours professionnel" is a standard warm-up. Scorers
  reward sustained production, range, followable structure and register.
- **TCF Canada, Expression Orale, tâche 3.** "Parlez-moi de votre parcours professionnel"
  and "Décrivez votre travail" are that task's register exactly.
- **TCF Canada, Compréhension Écrite.** Job postings are stock CE stimulus, which is what
  `s18-posting` is shaped like.
- **DELF A2 monologue suivi** is the closest pedagogic match and **cannot be represented**:
  `EXAM_FORMATS = ['delf_b2','tef_canada','tcf_canada']` (`schema.ts:151`) [CODE].

### What is not true, and what you must not author

- **Nothing routes a lesson to an exam task.** `Scenario.exam` is validated and read by no
  rendering code anywhere in `ealch-v2` (collation §1.12) [CODE].
- **`content_exam_tasks` holds 2 rows** [UNVERIFIED-DB], both `delf_b2`, both `blanc-01`,
  both `in_review`, and **both about work** (a CE passage on `le télétravail` and a PE essay
  prompt about it). They are invisible to every learner for two independent reasons:
  `publish-content.ts` selects `where status = 'published'`, and exam entities are
  deliberately excluded from the seed cut. So the only exam content this project has ever
  authored is already in your subject area and nobody can see it.
  Settle it yourself before you write about it:
  `select id, format, task_type, skill, level, status from content_exam_tasks;`
- **A `po_monologue` authored today is answered by typing** (`app/exam-task.tsx:19`, `:246`)
  [CODE]. Authoring a speaking task graded on typed French is not a thing to ship.
- **`timingS` drives a display estimate and nothing else** [CODE]. The schema's own message,
  "an exam task without a clock is a worksheet", is currently true of every task in the
  system.

### The rule, verbatim, from collation §1.12

> This unit carries exam value by **teaching what the exam tests** (transactional reception
> at speed, a request in the right register, a structured 60-second turn), not by producing
> an `ExamTask` row and not by populating `Scenario.exam`. Do not author `Scenario.exam`.
> Do not author `ExamTask` rows. Do map each act to a named TEF/TCF/DELF task in the design
> notes, because that mapping is what makes the content right, and because it is what a
> future runner will consume.

So: **author zero `ExamTask` rows, zero `ExamSeries` rows, zero `Scenario.exam` values, and
do not add `delf_a2` to `EXAM_FORMATS`.** C1 approves `delf_a2` in principle and defers it
to the same commit as the first `delf_a2` task, which is not this one. Decisions item 4
confirms it: build the runner first, then seed the bank against a thing that runs.
**Paul ACCEPTED item 4 on 2026-08-15: the bank is not seeded, and your offer to seed it
was declined.** That is a decision, not a pending recommendation, so **do not seed the
bank and do not re-raise it in your report**. If the policy is ever reversed, this unit
is still the natural place and the design's §6.2 is still the plan to use, but reversing
it is not your call and it is not this build's work.

**One exam-layer artefact is permitted and it is free:** `Lesson.skill: 'PO'` on
`a2.30.l1`. The field exists (`schema.ts:1303`, validated at `:3311` against `EXAM_SKILLS`)
[CODE] and it is the remediation join that lets a missed PO band resolve back to a lesson.
Nothing at a2 currently sets it, nothing can currently miss a PO band, and setting it breaks
nothing. Set it and say so.

**No learner-facing string in this lesson may claim it is an exam task, an exam rehearsal
under exam conditions, or that the app has scored an exam answer.** Naming the exam as
context is fine ("this is the question a TEF examiner opens with"). Claiming delivery is not.

---

## §13. Layout and scene

- **The four moves belong on one screen, in order, with the joined answer under them.**
  This is the layout the test must assert. It is the Owns and splitting it makes it four
  small vocabulary sections.
- **The one-sentence answer and the four-move answer belong side by side**, with what moved
  named. Second required layout.
- **`Je suis ingénieur.` and `Je suis un ingénieur.` belong side by side once**, in the
  trap, credited to `a1.06`. Not in a teaching section: this is a re-test, not a lesson.
- **A masculine and its feminine belong on one card, never on two.** Third required layout.
- **`table` at `layer: 'core'` is a density failure** (`table-in-core`). In-flow it is a
  `tapTable`, capped at six rows on a Pixel 6; the full table lives in the reference sheet
  at `layer: 'deep'`.
- **Do not put a `cheatSheet` inside the reference sheet.** Inside a sheet render mode a
  `cheatSheet` draws its title and nothing else; a1.13 and a1.17 both ship that defect. Use
  `table`.
- **Put flex on a wrapper `View`, never on a `TX`.** A `TX` with flex loses its last words
  while the audio speaks them in full.
- **Watch the scene bubble tail.** A spaced exclamation mark has made a French line lose its
  last word while the gloss still translated it. Device-verify every bubble that ends in
  `!` or `?`.
- **Three term chips per section.** `commonErrors` needs `swipe: true`.
- **No em dashes anywhere in authored copy.** The density validator has an `em-dash` rule.
- **"honest" and "honesty" are banned in authored content**, enforced across the whole seed.
  The band's existing guard is a `\bhonest` pattern and it cannot see "dishonest"; do not
  copy that hole.

---

## §14. Wiring

```
scripts/author-travail-metiers-batch.ts        content:travail-metiers
scripts/merge-travail-metiers-into-seed.ts
scripts/data/travail-metiers-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-30-travail-metiers.test.ts
```

- Ids from `metiers`, block `.020` to `.089`, above whatever exists at apply time.
- **Postgres first, seed second.** The seed is a cut and must carry every imported row your
  lesson references or the cards render empty.
- **Never `git checkout seed.json`.** It discards other authors' uncommitted lessons. If the
  seed needs repairing, re-run the merge scripts.
- **Diff the DB bodies against git before any publish.** git can run ahead of Postgres and
  publish then overwrites silently.
- **Do not run `pnpm content:verbes`.** The verbes batch is a landmine.
- `content:publish` is blocked upstream by `sons.09.l1` (it would delete it). Run
  `content:parity` first and unblock with `content:masterclass`. Do not treat that as your
  problem to solve inside this build.
- **Do not touch** `author-full-curriculum-spine.ts`, `seed-cut.config.ts`,
  `a1-24-corps.test.ts`, or any other unit's test.

---

## THE ADMIN TYPECHECK, AND THE FIVE FIELDS THAT DRAW NOTHING

**Added 2026-08-15, after a2.07 shipped. This is not advice. Run it.**

```bash
pnpm -C ealch-admin typecheck
```

**It is the ONLY check in this project that sees a field the renderer does not
read.** `validateLesson` tolerates unknown keys, and so does the publish path:
a field that is not in the type is carried into Postgres, into `seed.json`, into
the OTA snapshot, and rendered by nobody. a2.07 shipped, **published in snapshot
v49 at rollout 10**, and passed 4,195 tests with **33 blank lines in it**.

### The five a2.07 got wrong. Do not repeat them.

| you might write | it draws | write instead |
|---|---|---|
| `sub` on a **groupDrill item** | **nothing** | **`note`** — the item type is `{ fr, ipa?, note?, itemId?, respell?, en?, silent?, pair? }` and `GroupDrillView` builds its second line from `note`/`respell`/`en` |
| `itemIds` on a **cardDeck** | **nothing** | release the ids through **`deckTranche`**. Only `practice` reads `itemIds`; a2.07 was the only one of **285** shipped cardDecks carrying it |
| `canDo` on the **Lesson** | **nothing** | it belongs to the **unit**. a2.07 was 1 of 66 |
| `track` on the **Lesson** | **nothing** | drop it. 1 of 66 |
| `teaches` on the **Lesson** | **nothing** | **`grammarIntroduced`** (62 of 66 lessons), and add **`grammarAssumed`** (59 of 66) |

`sub` IS legitimate on a **cardDeck card**. It is not legitimate on a groupDrill
item. The two look identical in a diff and only the typecheck tells them apart.

### The two typing fixes you will also need

```ts
// LessonSection is a UNION and only the scene variant has beats.
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [ ... ];

// LessonDrill.format is a literal union, not string.
import type { LessonDrill } from '../../../ealch-v2/src/content/schema.ts';
const DRILLS: LessonDrill[] = [{ id, title, format: 'flashcard' as const, ... }];
```

### Assert the class, not the instances

Copy both of these into your test file. They cost nothing and they are what
would have caught a2.07:

```ts
test('groupDrill items use note, not sub: sub draws nothing', () => {
  for (const sec of sectionsOf(L!)) {
    if (sec.type !== 'groupDrill') continue;
    for (const g of (sec as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? []) {
      for (const it of g.items ?? []) ok(!('sub' in it), 'a group item carries sub, which draws nothing. Use note.');
    }
  }
});

test('the lesson carries no field the shipped corpus does not', () => {
  const others = seed.lessons.filter((l) => l.id !== LESSON_ID);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const invented = Object.keys(L as unknown as Record<string, unknown>).filter((k) => !known.has(k));
  deepStrictEqual(invented, [], \`carries field(s) no other lesson has: \${invented.join(', ')}\`);
});
```

Full diagnosis: `41-DEAD-FIELDS-WARNING.md`.

---

## §15. Your test

Invariants §6 and the four guard holes in Corrections §9, §13, §14.3 and §14.5, plus:

- **The four moves appear in one section, in order, with the joined answer visible.**
- **a1.06 is named by unit id in every section that uses the zero-article rule**, and
  **a1.06's string "No un. The gap after suis is the grammar." is quoted verbatim.** A
  paraphrase must go red.
- **The zero-article rule is not TAUGHT.** Scope this to teaching surfaces: no `examples`
  note, `cardDeck` body or `commonErrors` `why` in this lesson explains why the article is
  absent. Naming it and testing it are allowed.
- **`a2.18` is named for `depuis`, and no section in this lesson teaches which tense
  `depuis` takes.**
- **`a2.07` is named for the repair move and every repair utterance in this lesson is an
  imported `itemId`.** Assert that this lesson authors zero rows whose `fr` matches the
  repair set.
- **`a2.29` is named for the register ladder and this lesson authors zero softener rows.**
- **Every job title and every workplace noun used is an imported id**, asserted by id.
- **Every feminine job form is either an imported id or a pair whose masculine is an
  imported id.** No orphan feminines. Assert the count of newly authored gendered word rows
  and pin it, so the next author sees the a1.03 exposure in the diff.
- **The scenario runs the four moves as four consecutive learner turns**, and every learner
  turn carries at least two `alts` and a `userEn`.
- **`s21-deliver` exists, is a `practice` section, has a non-empty `itemIds`, and every id
  resolves.** This mirrors the publish gate; assert it locally so it fails in ten seconds
  rather than at apply time.
- **`s16-errors` carries `swipe: true` and `size: 'lg'`.**
- **`s15-trap` is stepped**: `rule > cards > audio > drill`, gated drill step, no `size`.
- **The reference sheet uses `table` and contains no `cheatSheet`.**
- **No `table` sits at `layer: 'core'`.**
- **No section in this lesson carries `Scenario.exam`, and the lesson authors no ExamTask
  id.** Assert the absence, because the temptation here is real and the design recommends
  the opposite.
- **The article trap appears only on written surfaces.** Assert that no `practice` item,
  scenario turn or quiz `speak` question turns on the presence or absence of `un`.
- **The reframe appears verbatim in at least three sections.**
- **The listening lines stand alone**: assert that no line's `fr` contains a pronoun or
  demonstrative whose referent is only in your lesson's framing. A crude assertion is fine;
  the point is that the next person reads the rule.
- Every dictée item carries the `dictation` drill, checked against Postgres, not the seed.
- Import `hasPlainNasalFor` and assert your repairs by name in one table, with stored /
  half / final all through the real function. Note it has three known blind spots and one
  of them is about the French rather than the respelling.

**Mutation-test:** put the article back (`Je suis un ingénieur.` as a correct sentence),
teach the zero-article rule in a note, drop `s21-deliver`, split the four moves across two
sections, author a feminine with no masculine, put the article trap in a `speak` question,
author a repair row, paraphrase a1.06's string, add a second `scenario`. Expect two of your
mutations to find a weakness rather than confirm a strength; a mutation the batch catches
and the test does not is a hole in the test.

---

## §16. Settled before you start

- The identity block, and the theme. **`metiers` is real, needs no re-map, and the spine is
  correct as written.**
- `lessonIds: []`. First build, version 1.
- One lesson, not two (collation C6, `den.tsx:169` opens `lessonIds[0]` only). The design's
  fallback split (l1 small talk, l2 interview) is refused. **What was folded:** the
  interview, as the single `scenario` at `s20`. **What was dropped:** the second delivery of
  the parcours, and the separate exam-task lesson. Say both in your report.
- `monologue` and `openPrompt` are not funded. The spine is rebuilt per §4.
- No `ExamTask` rows, no `Scenario.exam`, no `delf_a2`.
- The interview is yours; the dossier and the study history are a2.31's.
- Feminisation is corpus-first then OQLF, and you own the outcome for the band.
- France-standard French for everything scored. **At most one `cardDeck` card naming a
  Quebec divergence**, as colour, never as the answer to a scored question (collation C3).
  `la job` and `quart de travail` are the candidates; pick one at most.
- Import freely by `itemId` from themes outside `SEED_CUT.themes`. Lesson-referenced items
  bundle automatically (collation §1.2).
- All 35 section types render. Nothing here is NEEDS-ENGINEERING.
- `practice` renders the speaking drill regardless of `skill`; the value is decorative.
  **And it is mandatory**: `lesson-contract.test.ts:505` mirrors the publish gate and
  fails a non-`assessment` lesson with no `practice`, an empty `practice.itemIds`, or an
  empty `Lesson.itemIds`. You found this; it is now band doctrine and in all eight
  prompts.
- No scored surface tests an accent, a cedilla, a capital, a hyphen, an apostrophe,
  word division or a comma. Every `typeIn` / `errorSpot` / dictée item passes the band
  rule: `fold(answer) !== fold(distractor)`.
- The three a2.29 rung names appear verbatim and no rung line is re-typed.

## §17. UNVERIFIED

- **Whether `a2.07` and `a2.29` are shipped.** Both are hard prerequisites. If either is
  not, stop and say so.
- **Their exact repair-move and register-ladder wordings, and their item ids.** Read the
  build reports, not the design documents.
- **Whether `listening.hideLines` has landed.** It had not at commit `4ca3e6c` [CODE].
- **Every Postgres figure in the design document.** Nobody has re-queried the database. The
  ones that change your plan are: `metiers` 353, `bureau` 337, `recherche-emploi` 592,
  `rp-travail-etudes` 417, and the `published` status of all four. Commands in §11.1.
- **The two `content_exam_tasks` rows.** Command in §12.
- **The contested feminine forms** (`autrice` / `auteure`, `professeure`, `ingénieure`).
  Command in §5.
- **Whether `content:publish` is still blocked by `sons.09.l1`.**
- **Whether a2.31 has taken any part of the interview.** It ships after you, so it should
  not have, but check its brief before you assume.
- Baseline test count and current mission range.

---

## §18. What to report

Doctrine §F and Corrections §12, plus:

- **How you rebuilt the parcours spine without `monologue`**, and **all six losses in §4.2
  named plainly.** This is the report item that matters most. The next person to price
  `openPrompt` will read your paragraph, so write it as evidence rather than as an apology.
- **The feminisation rule as you actually landed it**, with the measured counts behind each
  choice and the list of forms you imported against the list you minted. **The other seven
  units are bound by this**, so it has to be quotable in one screen.
- **The interview boundary as you stated it to a2.31**, in the terms of §6, so the a2.31
  builder cannot contradict it.
- **What a1.03's gender test printed before and after**, and what you had to reconcile.
- **How much you imported against how much you authored**, and what fraction of your
  authored rows is in the interviewer's voice. The band policy is 40 percent; report the
  actual number.
- **Whether the `recherche-emploi` and `bureau` rows turned out to be `published`.** Four
  units in this band are waiting on that answer and you are the first to be able to give it.
- **Whether the four-move framing held**, or whether the lesson read as a work-vocabulary
  unit with a scenario stapled to it. That is the question the whole design turns on and you
  are the only person who will be able to answer it.

---

*This file is `.md` and therefore gitignored in this repo. It needs `git add -f` to be
tracked.*
