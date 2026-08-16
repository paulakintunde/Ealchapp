# Build a2.31 "School and Studies"

Trail seq **30** of 35, and **unit 7 of 8 in the A2 Situations band** (seq 24 to 31).
You are the retrospective one. The other seven units transact something that is
happening now; yours is an account of something that already finished, given on
request, with an evaluation attached. The failure mode is not "the transaction breaks
down", it is **"the listener cannot place you"**.

**Build order.** The collation's blocking sequence (§6) puts you in the last wave:
`a2.07` first and alone, then `a2.26`/`a2.27`/`a2.28`, then `a2.29`, then **you with
`a2.30` and `a2.32`**. You cite `a2.07` (the repair move) and `a2.29` (the register
ladder) by unit id and by `itemId`. **Those ids cannot be quoted before they exist.**
If either is unbuilt when you start, stop and say so.

---

## Read first, in this order

1. **`ealch-admin/A2-SITUATIONS/10-BAND-COLLATION-AND-DECISIONS.md`** in full. It is
   the settled decision register for this band and **it outranks this prompt and it
   outranks your design document**. Where this file and the collation disagree, the
   collation wins and you report the disagreement.
2. `ealch-admin/A2-SITUATIONS/30-a2.31-ecole-etudes-DESIGN.md`, your unit's design.
   Its shape is adopted. Several of its conclusions are overruled below; the overrules
   are listed in one place in "What the collation overruled in your design".
3. `ealch-admin/A2-SITUATIONS/01-SUPERVISOR-INPUT.md` **Part 0**, the corrections to
   the facts the design agents were given. Two of the five bear directly on you.
4. `ealch-admin/A2-BUILD-DOCTRINE.md` (§B, §C, §E, §F), `A1-BUILD-INVARIANTS.md`, and
   **`A2-BRIEF-CORRECTIONS.md` in full**. Twenty-three A2 lessons have shipped since
   the briefs were written and that file holds what they measured wrong. §4, §5, §8,
   §9, §10 and §14.3 all bind you.
5. `ealch-admin/A2-23-PRONOMINAUX-PASSE-PROMPT.md` and `A2-06-PRONOMS-OBJET-DIRECT-PROMPT.md`
   for the house form of a build prompt, and their build reports for what shipping
   actually looked like.
6. **`a2.05` as shipped** (seq 16, the passé composé with `avoir`). It is your only
   declared prereq, it is shipped, and it is the entire tense budget of this lesson.
   Read what it settled, do not re-derive it.
7. **`a2.30` as shipped** (seq 29, immediately before you). It owns the interview.
   Read its `s19-interview` scenario before you write yours, so the two do not read as
   the same conversation twice.
8. `ealch-admin/Lesson-Architechture-V2.md` (render / layer / size),
   `ealch-admin/LESSON-CONTENT-STANDARD.md`, `ealch-admin/RESPELL-CONVENTION.md`.

---

## Band consistency pass, 2026-08-15

*Eight prompts were written in parallel by eight agents who could not see each other's
work. These corrections were applied afterwards, across all eight. They overrule
anything below them and anything in the collation that disagrees.*

| # | What changed in THIS prompt | Authority |
|---|---|---|
| 1 | **The answer fold.** Collation §0.3's re-scoping, which you relayed in §4, is **withdrawn**. The quiz has its own stricter normaliser, `fold()` in `answer.logic.ts:32`. Your list of what a question may not turn on now reads **accent, cedilla, capital, hyphen, apostrophe/elision, word division, comma**. **Your §4 conclusion survives and is strengthened**: the dictée tile bank really is the only surface that can test a spelling. | `03-ANSWER-FOLD-FACT.md` |
| 2 | **BAND RULE, new.** Fold the expected answer and the most plausible wrong answer before authoring any `typeIn`, `errorSpot` or dictée item; **if they collide, move it to `mcq`/`listenChoose`.** Your two-clause `typeIn` ceiling makes this cheap to check and expensive to skip. | band rule, all eight prompts |
| 3 | **`practice` is MANDATORY, not just speaking-only.** You already say `skill` other than `'speak'` is a lie; `lesson-contract.test.ts:505` additionally fails any non-`assessment` lesson with **no** `practice` section, an empty `practice.itemIds`, or an empty `Lesson.itemIds`. Found by the a2.30 agent, verified, and now in all eight. | `ealch-v2/src/content/lesson-contract.test.ts:505-519` |
| 4 | **a2.29's ladder now has a quotable contract and you are bound by it.** Three rung names to quote **verbatim**, five clauses, zero rung and zero softener rows authored. a2.29 was written in parallel with you and could not hand you the names; they are in §6 now, with a fallback if a2.29 has not landed. | a2.29's prompt, §THE LADDER |
| 5 | **The repair-move id file is `04-REPAIR-MOVE-IDS.md`**, not `11-` (taken by `11-DESIGN-MOCK-PROMPT.md`). Contract: six rows, `au-restaurant`, contiguous, domain-neutral, face-cost order, frozen at publication. §6 now also carries the **a2.07-has-not-landed** fallback you did not have. | filename collision |
| 6 | **Your theme statement is confirmed and protected.** `ecole` is real, needs no re-map, and a2.30 says the same of `metiers`. Both prompts state it, so nobody "fixes" either. | collation §5 |
| 7 | **You are not device-gated, and your "one of each of those five" claim is confirmed.** Blocking step 4's exposed list was wrong at two entries and now names **a2.07, a2.28, a2.29, a2.32**. | collation §1.10, corrected |
| 8 | **`corpus:probe` has no `--count` flag.** You already found this and said so at §Pre-flight. Fixed at source in the collation and in a2.07, a2.28 and a2.29. Nothing to change here. | `scripts/probe-corpus.ts` |
| 9 | **The interview boundary is stated in both prompts and they agree.** a2.30 owns the interview; you own the dossier and the study history. a2.30's report is required to state the boundary to you in its own terms. | collation C5 |

---

## Identity

From `ealch-admin/scripts/author-full-curriculum-spine.ts` L814 to L822, read directly
and quoted byte for byte. Corrections §1 (the swapped `title`/`sub` that all sixteen
briefs carried) **does not apply here**: this block came from the spine, not from a
brief.

```
a2.31   seq 30   level a2   track a2
  title:  School and Studies
  sub:    L'école & les études
  gloss:  subjects, grades & academic vocabulary
  canDo:  Can talk about what they studied, which subjects and how it went
  themes: ['ecole']
  prereqUnitIds: ['a2.05']
  lessonIds:     []          <- first build, version starts at 1
```

**Re-verify `canDo` against Postgres before you author.** The spine is the authority
for what it *should* be; the `content_units` row is what the learner sees. Corrections
§1 exists because sixteen briefs got this wrong in the other direction.

**The prereq is real, not aspirational.** Collation C8 checked all eight units of this band: `a2.05` is
at seq 16 and has one shipped lesson. You may lean on it fully. You may not lean on
`y` or `en` (`a2.25` has zero lessons), and you have no reason to.

---

## Your theme is REAL. Do not re-map it.

**This is the first thing to get right, because five of the band's eight units need a
re-map and you are not one of them.**

The collation's §4 1.1 table, measured on `seed.json`:

```
ecole      312 seed rows     has a themeMeta entry     REAL
```

Collation §5, the literal re-map table, row `a2.31`:

| unit | spine `themes` today | **AUTHOR INTO** | import-from | status |
|---|---|---|---|---|
| **a2.31** | `ecole` | **`ecole`** (unchanged) | `matieres`, `universite`, `examens-et-diplomes`, `disciplines` | **SETTLED, no change** |

**You change nothing in `author-full-curriculum-spine.ts`.** You do not touch
`SEED_CUT.themes`. You do not edit `a1-24-corps.test.ts`. Blocking step 2 of the
collation (the theme re-map) is somebody else's diff and it does not gate you; the only
thing it must not do is touch your row. If a later reader opens this prompt and thinks
`ecole` looks like the phantom themes `nourriture`, `sante`, `voyage`, `technologie`
and `transport`, it is not: those five have zero rows and no `themeMeta` entry, and
`ecole` has 312 and an entry. **Nobody "fixes" `ecole`.**

Your item ids are `fr.a2.ecole.<nnn>`.

---

## Pre-flight

```bash
cd ealch-admin

# your own theme: count, max and NEXT FREE ID in one line of output
pnpm corpus:probe --theme ecole
pnpm corpus:probe --unit a2.31 --theme ecole

# the four import themes, which are the whole corpus plan
pnpm corpus:probe --theme matieres,examens-et-diplomes,disciplines,rp-travail-etudes
pnpm corpus:probe --theme universite,quebec-et-francophonie

# probe with REAL orthography. Corrections §14.2 and the accent-probe caution:
# corpus:probe does not strip accents, so `baccalaureat` returns a false ABSENT.
pnpm corpus:probe --tokens "le baccalauréat,un relevé de notes,le collège,le lycée,une licence,un master,une mention,redoubler,un cégep,passer un examen,réussir un examen,sur vingt,ça correspond à,c'est l'équivalent de"

# does the seed agree with Postgres? Run before anything that publishes.
pnpm content:parity
```

**Two notes on the commands themselves, because both have bitten someone.**

- The collation §1.3 names `corpus:probe -- --theme <theme> --count`. **`--count` is
  not a flag.** `scripts/probe-corpus.ts` accepts `--theme`, `--words`, `--tokens` and
  `--unit` only (its own usage string, L94), and it already prints
  `count=… max=… NEXT FREE ID = …` for every theme you name. Drop the flag.
- `content:parity` (`scripts/check-seed-db-parity.ts`) reads only and takes no flags.
  It is documented as the thing to run **before** anything that publishes, and it
  currently reports `sons.09.l1` as seed-only. That is a known blocker on
  `content:publish` and it is not yours to clear.

### Every DB figure below is UNVERIFIED

The supervisor did not query Postgres (collation §9, "NOT verified by me"), and the
design agent's figures were taken on 2026-08-15 against project
`ogbothupjcivwruesgsu`. **Treat every number in the next three sections as a claim to
re-measure, not as a fact.** Each one names the command that settles it. If a figure
comes back different, that is a finding for your report, not a reason to stop.

---

## What already exists, and the premise that is half false

### The claim you were given

> Education vocabulary is a gap. The education-system mismatch is unaddressed.

**Half of that is false, and building on the false half would waste most of your
budget.** Measured by the design agent against Postgres (UNVERIFIED, settle with
`pnpm corpus:probe --theme matieres,examens-et-diplomes,disciplines,rp-travail-etudes`):

| theme | a2 rows | in seed |
|---|---|---|
| `examens-et-diplomes` | 200 | 2 |
| `matieres` | 179 | 0 |
| `rp-travail-etudes` | 111 | 0 |
| `disciplines` | 80 | 1 |
| `ecole` | 15 (plus 297 at a1) | 312 |

**570 A2-level education rows exist outside `ecole`, and three of them are in the
seed.** This is collation 1.3 (large DB-versus-seed drift) in its sharpest form, and
the collation's interpretation rule settles what to do with them:

> A DB row that is `published` is REACHABLE and must be imported by `itemId`, never
> re-authored. A DB row that is not `published` is invisible to learners and may be
> treated as absent.

So: run the probe, read the published counts, and **import**. The nouns are finished.

### The nouns that already exist at A2, so you do not author them

UNVERIFIED, from the design's §2.5. Settle each with
`pnpm corpus:probe --tokens "…"` using real orthography.

- `examens-et-diplomes` a2 already carries `le baccalauréat` (.060),
  `un relevé de notes` (.081), `un brevet` (.011), `une attestation` (.062),
  `une convocation` (.019), `une épreuve écrite` (.018), `une épreuve orale` (.067),
  `un jury` (.032), `un examinateur` (.082), `un brouillon` (.084), `un sujet` (.085),
  `une admission` (.065), `un concours` (.006), `avoir le trac` (.100),
  `le jour J` (.098), `bon courage` (.048).
- `matieres` a2 already carries the whole school ladder: `l'école primaire` (.054),
  `le collège` (.055), `le lycée` (.056), `l'université` (.057), `la maternelle` (.069),
  `la garderie` (.070), `le trimestre` (.062), `le semestre` (.063),
  `la rentrée scolaire` (.059), `la scolarité` (.064).

**`le collège` and `le lycée` are published A2 rows.** If a passage in your design
reads as though the French school ladder needs inventing, it does not. It needs
teaching, which is a different job.

### Three of the design's grammar candidates are already published rows

Cite them. Do not re-author them, and do not write a second rule card that says the
same thing in different words. UNVERIFIED; settle with
`pnpm corpus:probe --theme matieres` and read the three ids.

| id | what it holds | what you do with it |
|---|---|---|
| `fr.a2.matieres.011` | **"Pour une matière, on utilise « faire de » : faire des maths, faire de l'anglais."** The `faire de` rule, written as a rule and not as an example. | **Anchor your `faire de` section on this row by `itemId`.** Your job is to make it reachable and to drill the gender and plural variation around it, not to restate it. |
| `fr.a2.matieres.009` | "Je suis fort en géographie." | Import. `fort en` exists at A2. |
| `fr.a2.matieres.010` | "J'étudie l'espagnol depuis deux ans." | Import as an example. **`depuis` is `a2.18`'s, at seq 14, uncontested (collation C5).** You do not teach it. You may contrast it inside a card that is about `pendant` and `en`. |

**What is NOT written anywhere, and is therefore yours:** the three-way contrast
between `étudier` (a subject), `apprendre` (a skill) and `enseigner` (what somebody
does to you). All three exist as headwords; nothing states the contrast.

### The genuine gap: this is where your ~50 authored rows go

UNVERIFIED, all four measured DB-wide by the design agent. These are the only places
where authoring adds something that does not already exist:

| gap | measured | your move |
|---|---|---|
| **Quebec education** | `cégep\|CEGEP\|DEC` returns **4 rows DB-wide, all b1**, all in `quebec-et-francophonie`. There is no A2 Quebec education content at all. | Colour, not a second answer set. See "Regional policy" below. At most one card. |
| **The /20 scale** | `sur vingt\|sur 20\|/20` returns **8 rows DB-wide**, of which one is A2 education (`fr.a2.matieres.160`) and one is A1 numbers. | Author it. Reporting a result is half of "how it went", which is half of your `canDo`. |
| **`licence` / `master` at A2** | `licence\|master\|maîtrise\|doctorat\|BTS\|DUT\|prépa\|amphi` returns 40 rows, **only two at A2** (`fr.a2.rp-travail-etudes.040` `une maîtrise`, `.041` `un doctorat`). `licence` and `master` have **no A2 row at all**. | Author both. They are the two credentials a learner will actually need to name. |
| **`mention`, `redoubler` at A2, `nul en`** | `mention (très \|assez )?bien` exists only at b1/b2. `redoubler` has 13 rows, one at a1, none at a2. `nul en` returns **zero rows anywhere**. | Author. Small, and each fills a real hole. |
| **The equivalence hedge** | `équivalence` has 24 rows; the only A2 one is `fr.a2.dictee.114`, a dictée row, not an education row. | **Author. This is your Own.** See below. |
| **`passer` versus `réussir`** | Documented at B1 only (`fr.b1.universite.008`). At A2 the construction appears inside sentences (`fr.a2.examens-et-diplomes.141`) with no headword and no explanation. | **Author. This is your other Own.** |

---

## THE IMPARFAIT. Read this section twice.

**This is the single most likely way this build goes wrong, and it will not announce
itself. It will arrive as a sentence that sounds better than the one you were allowed
to write.**

### The facts

1. **No unit anywhere in the 75-unit spine teaches the imparfait.** The design agent
   grepped `author-full-curriculum-spine.ts` for `imparfait|imperfect|impft` across
   every `title`, `gloss` and `canDo` and matched zero. The file declares three level
   arrays only, `SONS`, `A1` and `A2`. **There is no B1 array.** So the tense has not
   been taught, is not scheduled to be taught, and has no defined home anywhere.
2. **328 A2 corpus rows already use imparfait forms** (UNVERIFIED; the design's regex
   over `content_items` at `level='a2'`). **Two of them are in your own fifteen-row A2
   theme:**
   - `fr.a2.ecole.013` "Quand j'étais petite, j'aimais beaucoup l'école."
   - `fr.a2.ecole.015` "Quand il était petit, il oubliait souvent son cartable."
   Plus `fr.a2.disciplines.068` and `.079`.
3. **The collation settled it, at 1.8:** *"imparfait: SETTLED out of band. Agent 7's
   own design (§4.4) handles a2.31 without teaching it. 328 A2 rows already use it
   incidentally; that is exposure, not ownership. **Do not open it here.**"*

### Why it is tempting, and why the temptation is the danger

Your `canDo` is retrospective: *what they studied and how it went*. Every natural
sentence about a school career wants a background tense. `J'étais fort en maths`,
`on avait deux heures de sport`, `le prof était sévère`. Those sentences are better
French than the ones you are allowed to write, and you will feel that while writing.

**Write the worse sentence.** The lesson runs on the **passé composé alone**, from
`a2.05`, which is shipped and is your declared prereq. `J'ai fait des maths pendant
trois ans`, `j'ai eu quatorze sur vingt`, `j'ai obtenu mon diplôme en 2019`,
`j'ai redoublé la seconde`. A completed course of study is a bounded event, and the
passé composé is the right tense for a bounded event. This is not a workaround. It is
the correct analysis, and the account it produces is the account the exam wants.

You also cannot reach for the two escapes a lesson at this seq would normally use:

- **Comparatives are `a2.08`, which comes AFTER you.** No `j'étais meilleur en maths
  qu'en histoire`, and no comparative frame at all.
- **The conditional is settled out of band** (collation 1.8, and Paul's decision 1 in
  `12-DECISIONS-FOR-PAUL.md` concerns `a2.29`, not you). No `je voudrais faire`.

### The three rules that bind you

Taken from the design's §4.4, which the collation endorsed by name, and tightened:

1. **The imparfait never appears in a scored surface.** Not in the quiz, not in a
   `groupDrill`, not in a `trapDrill` drill step, not in a `scenario` `user` line, not
   in a `dictation` item, not in a `practice` `itemIds` list, not inside any
   `accept[]` array.
2. **It appears at most twice, receptively, as an unanalysed chunk**, once in the
   `listening` model text and once in the `reading` passage, both as
   `quand j'étais petit(e)`, glossed in `reading.glossary` as "when I was small", with
   a note that this is a set opening the learner will meet again later. **No form is
   given, no paradigm is shown, and the word "imparfait" never appears in a
   user-facing string.** This is the lexical-approach move: a formulaic sequence is not
   a paradigm.
3. **`grammarIntroduced` does not list it and `grammarAssumed` does not list it.** A
   lesson that claims a tense it does not teach corrupts the curriculum checkability
   the two-list design exists for.

### The trap that is already laid for you

`fr.a2.ecole.013` and `.015` are **two of the fifteen A2 rows in your own theme**. A
naive "name every A2 row in `ecole`" import pass puts them straight into a `practice`
or a `dictation`, which is rule 1 broken on the first commit, silently, by a helper
loop. **Exclude `.013` and `.015` by id, and ship a test that asserts they are absent
from every scored section of `a2.31.l1`.**

Report the imparfait exposure figure you actually measure. You are the first unit in
the band with a reason to count it.

---

## The teaching problem

### The centre: the dossier

Adopted from the design's §3.3 option E, and the collation names it in §1.2 as your
unique Own: *"the dossier, and the equivalence hedge"*.

The lesson's through-line is **one document**: the learner's own education, assembled
in layers, then defended.

```
layer 1   the ladder      what level was it
layer 2   the content     what did you study
layer 3   the outcome     how did it go
layer 4   the translation say it so a French speaker can place you
```

Every act adds a line to the same document. The `progressCheck` shows it filling up.
The `scenario` defends it out loud. That is what makes this a situational lesson rather
than a vocabulary review, and it is the reason the acts are ordered the way they are.

### The reframe, one line, the thing the learner carries out

> **They will not know the name of your diploma. Say what it was and how long it took.**

Record what you rejected. Anything of the shape "learn the French words for school
subjects" is a description of the vocabulary and gives the learner nothing to do
differently. Doctrine §B.4 asks for a production rule runnable in the half-second
before you speak; this one is.

### Owns: two things, and they are both lexical

The collation §1.2 gives you **"Talking about a past course of study"**, and C5 gives
you **"Academic equivalence hedging"** explicitly ("Nobody else needs it"). Concretely
that is two moves, and **nothing in the corpus teaches either**:

**1. The `passer` false friend.**

```
passer un examen      to SIT it
réussir un examen     to pass it
rater / échouer à     to fail it
```

This is the only item in the whole band that inverts the learner's meaning while
staying perfectly grammatical. A learner who says *"j'ai passé mon examen"* meaning
*"I passed"* produces a confidently wrong sentence that nobody will correct, because it
is a sentence. Documented at B1 only (`fr.b1.universite.008`). **Take it. It is the
unit's signature trap and it belongs in a `trapDrill`.**

**2. The equivalence hedge.**

```
ça correspond à …
c'est l'équivalent de …
chez nous, on appelle ça …
à peu près comme …
```

Four chunks, taught whole. The learner's credential has no French name; the hedge is
how you make it placeable anyway. This is the move the design calls schema substitution
and it is the reason the France/Quebec map is teaching rather than an appendix.

**Together these two are the unit's distinctive claim. If the finished lesson could
have its `passer` act and its hedge act removed and still read as complete, you have
built a vocabulary review and the build has failed.**

### Act structure

Adopted from the design's §4.1. The six-act chassis is kept for the reason the
collation gives in §1.1: it is enforced by `acts.logic.test.ts`, by the density
validator and by `LessonPager`'s mission numbering, and what changes in a situational
unit is what act 2 *contains*, not how many acts there are.

| act | title | what it makes true |
|---|---|---|
| I | The box you cannot fill | The learner sees their own instinct fail on a real form field |
| II | The ladder | They can place any French school level, and their own, on one scale |
| III | What you did there | They can name subjects and say they did them, with `faire de` and `fort en` |
| IV | How it went | They can report a result without the `passer` trap, on the /20 scale |
| V | Saying it so it lands | They can give the whole account aloud, including the equivalence hedge |
| VI | Check and close | One quiz, one roundup |

**Act 3 is the heaviest act** (doctrine, and all eight designs converged on it), and
**acts 3 and 4 carry the Owns**. Act 2's job is not "state the rule". There is no
paradigm here to state.

**Section count: 24, including the roundup.** The collation §1.1 records the band at 19
to 25, clustering at 22 to 24. The design listed 25 rows and offered to merge
`reviewDeck` into `progressCheck` if a hard 24 is wanted. **Take the merge.** If your
count runs over anyway, drop a `cardDeck`, never a production section.

---

## What is left to neighbours

Cite these by unit id. Do not re-author any of them. Several are enforced by the
collation's C5 ownership table, which is settled.

- **The interview is `a2.30`'s** (seq 29, immediately before you). C5: *"The interview:
  **a2.30**. The 60-second parcours is its Owns. a2.31 owns the dossier and the study
  history, which an interview draws on but is not."* Your design agent asked this
  question (its §8 item 2) and this is the answer. **Your `scenario` is an admissions
  or registrar conversation, not a recruitment interview.** Concretely: your
  interlocutor asks what you studied in order to *record* it, not in order to *hire*
  you. Read `a2.30`'s shipped `s19-interview` and make sure your six turns do not read
  as the same conversation. If they do, change yours, not theirs.
- **The repair move is `a2.07`'s**, once, for all eight units (collation 1.6, and 7.1).
  a2.07 authors it as corpus rows in `au-restaurant`; you quote it in a `cardDeck`
  **by `itemId`** and author **zero** repair rows. Do not re-type
  "Vous pouvez répéter, s'il vous plaît ?" into a card body: that is exactly the
  duplication that breaks the flashcard hub's one-card-per-`fr`-per-theme assumption.
  **The ids live at `ealch-admin/A2-SITUATIONS/04-REPAIR-MOVE-IDS.md`**, renumbered
  from `11-` on 2026-08-15 because `11-` is `11-DESIGN-MOCK-PROMPT.md`, and repeated
  under a fixed heading in a2.07's build report. Its contract: **exactly six rows, all
  in `au-restaurant`, contiguous ids, domain-neutral strings, ordered by face cost, and
  frozen at publication.** **If that file does not exist, a2.07 has not landed** and
  collation §6 step 6 is not done: stop and say so. If a band lead overrides and you
  must proceed, author the `cardDeck` with the utterances in card body text only, zero
  corpus rows and zero `itemId`s, state in your report that the mission is un-drillable
  and un-audioed until a v2 wires the ids, and add a test asserting **no `ecole` row
  carries a repair `fr`** so the temporary state cannot become a permanent duplicate.
- **The register and politeness ladder is `a2.29`'s** (seq 28), once, for the band
  (C5). You cite it. Your own register is stable and needs no teaching: an admissions
  officer or a registrar is always `vous`, throughout, with no `tu`/`vous` decision to
  make. The child-framed `tu` scenario that already exists (`sc.a1.ecole.001`) belongs
  to the A1 layer.

  > **a2.29's ladder, and the contract that binds you to it.** *Added 2026-08-15 by the
  > band consistency pass. a2.29 was written in parallel with this prompt, so it could
  > not have handed you these strings; they are fixed for the band now.*
  >
  > **Three rungs, and these three names are learner-facing strings you quote
  > verbatim:**
  >
  > ```
  > Rung 1   Ask once, softly.
  > Rung 2   Say it again, without the person.
  > Rung 3   Ask for the person who can fix it.
  > ```
  >
  > **Five clauses, binding a2.30, a2.31 and a2.32 alike:**
  >
  > 1. Quote the three rung names **verbatim**. A paraphrase is a second ladder.
  > 2. Reuse a2.29's rung rows by `itemId`. Author **no rung lines of your own** and
  >    **zero softener rows**.
  > 3. You may add your own column, your own move, filled with your own vocabulary.
  > 4. You may **not** rename a rung, add a fourth, or reorder them.
  > 5. a2.29's build report publishes the rung-to-`itemId` table as a short list you
  >    paste.
  >
  > Because your register is stable, the lightest correct use is a single reference in
  > your `cardDeck` or `roundup` naming `a2.29` by unit id and quoting the rung names as
  > they stand. **If a2.29 has not landed when you author**, cite `a2.29` by unit id
  > only, carry no rung row and no rung name, and say in your report that the reference
  > is forward and awaiting ids.
- **`depuis` is `a2.18`'s** (seq 14, shipped, 280 occurrences, uncontested in C5). You
  may show it inside a contrast card against `pendant` and `en`; you do not teach it and
  you do not own it.
- **The passé composé with `avoir` is `a2.05`'s**, shipped, your prereq. One recap line.
  Lean on it; do not re-teach it.
- **Comparatives are `a2.08`**, which ships AFTER you. Not available, not even as a
  passing phrase.
- **Price and number reception is `a2.26`'s.** Your /20 scale is a mark, not a price,
  and it does not need number-reception training.
- **Job-title feminisation is `a2.30`'s** (C4). If you need a feminine job or academic
  title, use the form `a2.30` landed. Do not mint one. Where a feminine form already
  exists in the corpus, use that form.
- **The imparfait, the conditional and the imperative are nobody's.** Collation 1.8.
  Two are settled out of band and the third is Paul's call about `a2.32`. None of them
  is yours in any form.

---

## Written production. Be truthful about this, in the file.

**The design wanted this unit to be the band's home for written output.** Its §5 item 5
calls it "the closest thing in the band to a writing unit, and therefore the natural
place to prove out the PE pathway for the other seven". **That ambition is not funded
and most of it cannot ship. Say so plainly rather than shipping a section that looks
like writing and is not.**

### What is measured, and confirmed twice

- **`practice` renders the SPEAKING drill regardless of `skill`.** Supervisor input
  Part 0 §0.2, **CONFIRMED** by the collation §2: `LessonSection.tsx` `case 'practice'`
  renders `<PracticeVFView itemIds title onPlay playingId onGrade />` and **`skill` is
  never passed**. The shared brief's weaker claim ("draws no writing surface") is
  understated. `skill: 'write'` does not draw a weak writing surface; it draws a
  Voice Flash speaking pass. **Every authored `practice` skill value other than `speak`
  is silently wrong today.**
- **`reading.questions` is not a written answer surface either.** `MissionRich.tsx`
  `ReadingView` renders each question as a `Press` that toggles the answer into view.
  Tap to reveal. Nothing is typed and nothing is scored.
- **`openPrompt` is deferred and NOT funded.** Collation §3.2 rank 2, §3.3 and C2: the
  band funds exactly one component, the listening text-hiding flag, and `openPrompt`
  (merged with agent 6's `monologue`) is explicitly deferred to v2. `monologue` as a
  distinct type is not funded at all. **You may not design a section around either.**
- **No timer exists anywhere in the app.** Collation 1.9: `setInterval` count is **0**
  across `MissionSection.tsx`, `LessonSection.tsx`, `MissionRich.tsx` and
  `LessonRich.tsx`. Any "against the clock" framing, any prep countdown, is void and
  must be re-expressed as tap-to-continue.

### What actually carries written production in this lesson

Exactly three surfaces, and you should name them in your build report:

1. **Quiz `typeIn`.** A real `TextInput`, graded by `matchesAccept` in
   `ealch-v2/src/content/answer.logic.ts` through `fold()`. **Clause length only.**
   `fold()` strips **all whitespace**, so a two-clause answer has to be predicted
   verbatim in `accept[]` to pass. This is the ceiling and it is hard: the quiz can
   grade a sentence, it cannot grade a composition.
2. **Quiz `errorSpot`.** A real `TextInput` over a wrong sentence you supply. This is
   your **strongest** written format, because the `passer`/`réussir` inversion is a
   whole-sentence meaning error and free text is the only surface that catches it.
   **Every `errorSpot` needs `prompt` as well as `q`**: `q` is the instruction,
   `prompt` is the wrong text. a1.16 shipped two unanswerable questions by putting the
   sentence in only one of them.
3. **The dictée.** `dictation` builds letter tiles or word tiles from the item's `fr`
   (`MissionRich.tsx` `buildTileBank` / `buildWordBank`). This is transcription, not
   composition, and it is **the only surface in the product that can test a spelling**,
   because the quiz fold strips accents. Spelling `baccalauréat` and
   `relevé de notes` is a real form-filling skill. Use it for exactly that.

**Corrections §4 binds your dictée frame word:** `dicteeMode` switches to WORD tiles
above 16 letters, and a lesson about spelling a credential needs LETTER mode. **Check
each candidate through the real function, do not count characters by eye.**
`relevé de notes` is close to the boundary and `baccalauréat` is not.

> **CORRECTED 2026-08-15 by the band consistency pass.** This paragraph used to relay
> collation §2's re-scoping of Part 0 §0.3 and conclude that the band-wide hyphen
> exposure was narrower than reported. **That re-scoping has been withdrawn and the
> conclusion is wrong.** `normalizeFr` does have exactly one render-side caller,
> `MissionRich.tsx:1385`, the dictée tile check, and the quiz does not call it — but
> the quiz has its **own, stricter** normaliser that nobody had read. Quiz `typeIn`
> and `errorSpot` are graded by `matchesAccept`, which calls **`fold()` in
> `ealch-v2/src/content/answer.logic.ts:32`**. `fold()` strips **accents, case,
> punctuation, hyphens, the middle dot, both apostrophes and all whitespace.**
> Authority: `03-ANSWER-FOLD-FACT.md`.
>
> **What this changes for you, and it makes your §4 argument stronger, not weaker.**
> No scored surface can test:
>
> | | always passes |
> |---|---|
> | accent, cedilla | `baccalauréat` = `baccalaureat` |
> | capital | `Baccalauréat` = `baccalauréat` |
> | hyphen | `sciences-po` = `sciences po` |
> | apostrophe, elision | `j'ai` = `jai`, `l'université` = `luniversite` |
> | word division | `relevé de notes` = `relevedenotes` |
> | comma, punctuation | any |
>
> **The dictée tile bank remains the only surface in the product that can test a
> spelling**, which was your §4 conclusion and is now doubly true: the quiz fold kills
> more than accents. But the dictée is graded by `normalizeFr`, which strips the same
> marks, so it can only test the *letters the learner lays down*, tile by tile, not
> a normalised final string. **Do not author a dictée whose only difficulty is a
> hyphen or an apostrophe**, and note that a `typeIn` `accept` array listing both the
> hyphenated and unhyphenated form is redundant rather than load-bearing: they were
> already one answer.
>
> **BAND RULE, new.** Before authoring any `typeIn`, `errorSpot` or dictée item, fold
> the expected answer **and** the most plausible wrong answer. **If they fold to the
> same string the item tests nothing and must be moved to `mcq` or `listenChoose`.**
> Assert `fold(answer) !== fold(distractor)` over every authored near-miss.

### The truthful statement of this unit's written claim

Put this in the lesson's build report, in these terms:

> a2.31 produces **every sentence a written account would need**, at clause level, on
> graded surfaces. It does **not** produce a graded text. The only surface in the app
> that can grade a free composition is `app/exam-task.tsx` via
> `services/examGrader.ts`, it is not inside a lesson, and nothing routes a lesson to
> it.

That is the design's own §4.5 fallback, and it is the one that ships.

---

## The exam claim, and what the "PE ramps from B1" rule actually says

**You were asked to check whether `EXAMINER-ENGINE-SPEC`'s "PE ramps up from B1" rule
limits this unit's exam claim. It was checked, and the design's citation is wrong in a
way that matters.**

**The rule is not in `EXAMINER-ENGINE-SPEC.md` at all.** That file's §3 is the per-exam
format reference and it contains no such sentence. The rule lives in
**`CONTENT-CURRICULUM-AND-GENERATION-PLAN.md` §1.1, design principle 3**:

> Four skills per level, always. ... Every unit bundle must touch **at least CO + PO**
> (this is a speaking-first app); CE + PE **ramp up from B1** because that's where the
> exams demand them.

Read as written, that is a **coverage floor plus a weighting statement**, not a
prohibition. It says every unit must carry CO and PO; it says written work gets heavier
from B1. It does not forbid A2 written production, and the A2 quiz histogram already
contradicts a strict reading: 380 of 707 A2 quiz questions across 22 shipped lessons are
free text (`typeIn` 261, `errorSpot` 119). **So the design's §6.3 worry, that its PE
recommendation is "out of policy", rests on a misattributed rule and on a stricter
reading than the rule supports.** Report that correction.

**It does not change what you build, because a different decision already does.**
Collation 1.12, and every prompt in this band must carry it verbatim:

> This unit carries exam value by **teaching what the exam tests** (transactional
> reception at speed, a request in the right register, a structured 60-second turn),
> not by producing an `ExamTask` row and not by populating `Scenario.exam`. Do not
> author `Scenario.exam`. Do not author `ExamTask` rows. Do map each act to a named
> TEF/TCF/DELF task in the design notes, because that mapping is what makes the
> content right, and because it is what a future runner will consume.

So, concretely, and this **overrules the design's §4.5**:

- **You author zero `ExamTask` rows.** The design's three-task proposal is declined.
- **You author zero `Scenario.exam` values.** It is read by no rendering code:
  grepping `.exam` across `ealch-v2/src/components` and `ealch-v2/src/app` returns
  nothing.
- **You do not add `delf_a2` to `EXAM_FORMATS`.** C1: approved in principle, deferred
  in practice, to be added in the same commit as the first `delf_a2` task. No unit in
  this band is blocked by its absence.
- **You do keep the mapping in your notes**, because it makes the content right:

| exam | section | your section |
|---|---|---|
| TCF Canada EE, tâche 1, a message of 60 to 120 words | writing | your quiz rounds 2 and 3 carry the sentence-level half; the composition half is not carried |
| TCF Canada EO, tâche 1, information exchange | speaking | your `scenario`, with `alts` |
| TEF Canada EO section A, ask questions to get information | speaking | **under-exploited.** Your scenario has the learner answering. Give at least two turns where the learner **asks**: about a course, a registration, a deadline. This is a real fit and it costs one turn design decision. |
| DELF A2 PO part 1, entretien dirigé, asks about your studies | speaking | your `scenario` |
| All three, CO | listening | your `listening` section, written to the `co_mcq` shape: four options, one right, distractors that are true of the passage but do not answer the question |

Figures above are from `EXAMINER-ENGINE-SPEC.md` §3's format table, which was read
directly. Note that the same table records **TEF Canada CO plays each recording once**.
That is what the funded listening flag is for.

---

## Listening, and the one component the band funds

**Collation §3.5 and blocking step 3: the funded engineering item for the whole band is
`listening.hideLines`.**

```
LessonSection, type 'listening', new optional field:

  hideLines?: boolean
```

Today `ListeningView` (`MissionRich.tsx:1949`) renders `<TX role="body">{l.fr}</TX>` and
`<TX role="bodySm">{l.en}</TX>` in every line card beside the play button, so **every
listening section in the product is answerable by reading**. With the flag true, the
line card keeps its `PlayDot` and its box, replaces the text with a neutral
placeholder, and reveals after the learner has answered every question. The reveal is
not gated on getting them right.

**What this means for you:**

- **Author your `listening` lines to work unseen.** If the flag has not landed when you
  author, author them that way anyway: it lands later with no content change.
- **Author them to stand alone**, without your lesson's framing (collation 7.2). This
  band will produce the only genuinely audio-only reception bank in the product, and
  `a2.35` (Bilan A2) is meant to lift them directly as a mixed-situation CO set. It
  costs nothing now and is expensive to retrofit.
- **Do not author `modelPlayback`, `wrongThenRight`, `perSentenceReplay`, `scoreOn` or
  `autoplay`.** All five validate, publish and are read by no renderer
  (`schema.ts:829-838`). The seed already authors 31 of them. Do not author a
  thirty-second one believing it does something.
- `audio.maxPlays` is in the same category: validated, resolved, consumed by nothing.
  Not built, not yours.
- **Repeated `listening` is proven shipped** in six lessons (collation 1.10), so a
  second listening section is allowed if you want one. **Repeated `scene`, `scenario`,
  `reading`, `dictation` and `table` are the untested set.** Your design uses exactly
  one of each of those five, so no device check blocks you. Keep it that way.

---

## Regional policy: France-primary. Quebec is colour.

**Collation C3 is SETTLED** and it is the answer to your design's Quebec material:

1. The scored, drilled, quizzed content is **France-standard French**.
2. Each unit may carry **at most one** `cardDeck` card naming Quebec divergence, as
   colour. **Nothing on that card is ever the answer to a scored question.**
3. Where a Quebec word is genuinely more useful for a TEF/TCF Canada candidate, it may
   be authored as a corpus row, but it does not displace the France form in the drill.
4. The one exception is `a2.26` (tax at the till), and it is not you.

**So `cégep`, `DEC` and `session` are one card, and they are not answers.** Your
France/Quebec/your-country map still earns its place, because it is the teaching move
(schema substitution) rather than a reference appendix, but the France column is the
one that gets drilled.

One collision to record as a ledger decision, not to solve silently: authoring
`un cégep` and `un DEC` as A2 headwords under `ecole` sits alongside
`quebec-et-francophonie` owning the cégep sentences at B1. That is defensible; make it
a written decision rather than an accident.

---

## Layout and scene

Layout facts that have already cost a build each are in Corrections §8. Specific to you:

- **The learner's own credential and its French hedge belong on one screen**, adjacent,
  with the hedge visible as the bridge between them. **This is the layout the test must
  assert.** It is the Own, and separating it turns the lesson into a list of nouns.
- **`j'ai passé mon examen` and `j'ai réussi mon examen` belong side by side**, with the
  English of each under it, so the inversion is visible in one glance. **Second
  required layout.** This is the trap and it cannot be taught in prose.
- **The ladder belongs on one screen as one scale**, French rungs and the learner's own
  system on the same axis. Third required layout.
- **`table` is at zero across all 64 shipped lessons** (collation 1.9), even though
  doctrine §B.8 names it as the A2 paradigm surface. It renders; it has simply never
  been used. **`tapTable` is what the band actually uses** (123 sections). Use
  `tapTable` in the flow.
- **The France/Quebec map: do not send a `tapTable` to a `sheet` without a device
  check.** `ReferenceSheet.tsx` handles `teach`, `letterGrid` and `table` **only**,
  which is why `cheatSheet` in a sheet draws its title and nothing else. `tapTable` is
  in the same position and nobody has verified it. **The collation did not settle
  this.** Two safe routes: put the map in the flow as a `tapTable` at `layer: 'core'`,
  or put it in the sheet as a plain `table` at `layer: 'deep'`, which `ReferenceSheet`
  does handle. **Do not mark it NEEDS-ENGINEERING**: collation §3.1 measured all 35
  `SECTION_TYPES` as having a live render branch, and the issue is the sheet render
  mode, not the type.
- **`tapTable` caps at six rows** (a2.12) and **its headers have a glyph budget**
  (a2.16). The /20 band table stays at six rows with short headers.
- **`commonErrors` needs `swipe: true`** or it draws a blank screen.
- **A `trapDrill` must walk `rule > cards > audio > drill`** with `swipe`, an `audio`
  spec, a `say` and a GATED drill step. `lesson-contract.test.ts` has enforced it since
  2026-08-13 and it caught both of `a2.17`'s. **The A2 trap has one shape and the
  stacked one hides a gate, the audio and the sub-mission number.** Read the ledger's
  "The trapDrill shape, swept across seq 1..11" before authoring one, and you are
  authoring two.
- **Long French lines lose their tail.** Two prior incidents: `flex` on a `TX` clips the
  last words while the audio speaks them in full, and a spaced exclamation mark in a
  scene bubble drops the final word. Your exposure is the scene beats and the reading
  passage. Keep bubble `fr` short and put `flex` on wrapper `View`s only.
- **U+203F renders as a low underscore on a Pixel 6.** Not expected here, but the
  respelling of `baccalauréat` and `l'université` will want liaison marks. Use the house
  convention (`RESPELL-CONVENTION.md`, caps mark phrase-final stress) and invent no IPA.

**The scene:** doctrine §B.2's A2 register, which is breakdown and not rudeness. An
online application form, field *Dernier diplôme obtenu*. The learner types the name of
their own credential, in their own language, because it is the only name it has. The
form does not understand it. Nobody is rude; the sentence simply does not land. The
`choice` beat offers the credential's own name against "l'équivalent du bac, plus trois
ans", and the `break` shows which one the form can act on. Beats in a named
`SCENE_BEATS` const, prose at `md`, choice and break at `lg`, each with its own `audio`,
break body 24 to 40 words.

---

## The band mandate you share with the other seven

**Collation 1.5, SETTLED, and it is what makes this band worth building:**

> The corpus authored only the learner's half of every situation. The nouns are
> finished. The other party's speech does not exist. **At least 40 percent of a unit's
> newly authored rows must be in the voice of the person the learner is talking to.**

For you that person is the **registrar, the admissions officer, the form**. Their
speech is what you author:

```
Quel est votre dernier diplôme ?
Vous avez fait ça pendant combien de temps ?
Ça correspond à quel niveau chez nous ?
Vous avez un relevé de notes ?
Il nous faut une attestation, vous l'avez ?
Et vous avez obtenu la mention ?
```

Measure the ratio and report it. Import the learner's half; author the other half.

---

## Quiz notes

Corrections §5 decides your format mix; it is not a footnote.

- **32 questions, `rounds` form, four rounds of eight**, each round tied to one act,
  with `roundFailThreshold` set. Adopted from the design's §4.3.
  1. the ladder and the map: 4 `mcq`, 2 `typeIn`, 2 `listenChoose`
  2. subjects, `faire de`, `fort en`: 3 `typeIn`, 3 `errorSpot`, 2 `mcq`
  3. `passer`/`réussir`, marks, outcomes: 4 `errorSpot`, 2 `typeIn`, 2 `mcq`
  4. the whole account: 3 `typeIn`, 2 `speak`, 3 `mcq`
- **`errorSpot` is your strongest format**, and round 3 is where the unit is won.
  `j'ai passé mon examen` presented as meaning "I passed" is a meaning error inside a
  grammatical sentence, and free text is the only surface that catches it.
- **No question may turn on an accent, a cedilla, a capital, a hyphen, an apostrophe,
  word division or a comma** *(list corrected 2026-08-15; see §4)*. `fold()` strips
  diacritics, case, punctuation, hyphens, both apostrophes and all whitespace, so
  `baccalaureat` passes a `typeIn` keyed on `baccalauréat` and so does `Baccalauréat`.
  Spelling is testable **only** in the dictée tile bank. Say in your report which questions you
  wanted and could not write; `a2.09`'s section is the model.
- **No question may turn on a comma or an apostrophe**, both stripped.
- **No `typeIn` longer than one clause**, because whitespace is stripped and a longer
  answer must be predicted verbatim.
- **Every `errorSpot` carries `prompt` as well as `q`.**
- **Every question carries a `why`** (doctrine §F).
- **`listenChoose` needs `say`** whenever the heard line is not one of the options, or
  the card speaks the answer aloud.
- **Do not hand-randomise quiz options**: `LessonRich` permutes them at runtime. **Do**
  hand-randomise mission options: `MissionRich` renders authored order.
- **No imparfait form appears in any question, any option, any `accept[]` entry or any
  `why`.**
- **One quiz per lesson.** A second `quiz` section is silently never rendered, and the
  temptation is real in a unit with four distinct acts of content.

---

## Corpus plan

### Strategy: import heavily, author narrowly

570 A2 education rows exist in Postgres and three are in the seed. **The wrong move is
to author a fresh `fr.a2.ecole.016+` block that duplicates `matieres` and
`examens-et-diplomes`.** Name the existing rows; author only the gap.

| source theme | approx rows named | for |
|---|---|---|
| `matieres` a2 | ~55 | the ladder, subjects, the `faire de` anchor, `fort en` |
| `examens-et-diplomes` a2 | ~35 | credentials, exam-room nouns, dictée targets |
| `disciplines` a2 | ~15 | university fields: droit, économie, informatique, comptabilité |
| `ecole` a1 | ~20 | the classroom furniture the scene and reading need |
| `ecole` a2 | **13 of 15**, excluding `.013` and `.015` | |
| `rp-travail-etudes` a2 | ~5 | `une maîtrise`, `un doctorat` |
| **imported** | **~143** | |

| theme | kind | count | what |
|---|---|---|---|
| `ecole` a2 | phrase | ~14 | the four equivalence hedges, `nul en`, `moyen en`, the `pendant X ans` / `en X ans` frames |
| `ecole` a2 | sentence | ~26 | the parcours sentences, the `passer`/`réussir` contrast pairs, the /20 reporting sentences, **and the registrar's half** |
| `ecole` a2 | word | ~10 | `redoubler` at A2, `abandonner`, `une mention`, `une licence`, `un master`, `un cégep`, `un DEC`, `une session` |
| **authored** | | **~50** | |

**Id block: `fr.a2.ecole.016` onwards.** The design measured the current max at `.015`
in both seed and DB (UNVERIFIED). **Take the block from whatever
`pnpm corpus:probe --theme ecole` prints as `NEXT FREE ID`, not from this file.**

### Reachability, checked against Postgres and not the seed

Doctrine §E requires every named item to be reachable. **`practice` with `skill:'speak'`
needs `voiceflash` on every item it names; `dictation` needs the `dictation` drill.**
`drills` is a **Postgres enum array** and it has its own gotcha, documented in the
invariants; read it before your first apply. **Four of your six import themes are
absent from `seed.json` entirely**, so a seed-side check will report nothing useful.
Check Postgres.

### Collision risk, and it is high

1. **`matieres` and `examens-et-diplomes` overlap each other heavily already.** Both
   carry `un examen`, `une note`, `un cours`, `un devoir`, `une leçon`, `un élève`,
   `un étudiant`, `une salle de classe`, `une université`, `réussir`, `échouer`,
   `étudier`, `réviser`, `l'inscription`, `le diplôme`, `le résultat`. **Naming both in
   one lesson will surface duplicate cards.** `disciplines` duplicates `matieres` on
   the same nouns again.
   **Pick one theme per concept and write the choice into the ledger.** The design's
   proposal, which is sound and which the collation did **not** ratify, so it is your
   decision to take and record: `matieres` = school life, `examens-et-diplomes` =
   assessment and credentials, `disciplines` = academic fields. **Report the rule you
   applied**, because the next unit that touches education inherits it.
2. **Adding nouns to `ecole` moves `a1.03`'s measured ending statistic.** Two prior
   builds (a1.11, a1.23) broke that claim by adding corpus nouns with articles, and you
   are adding about ten. **Run `a1.03`'s test before and after your apply** and report
   both numbers.
3. **The A2 id block is shared and two other units are in flight.** a1.19/a1.20 and
   a1.14/a1.15 both had a concurrent build take ids inside a range another author had
   claimed. **Claim `fr.a2.ecole.016` upward in the ledger before the first insert, and
   verify the row COUNT after the apply, not just the highest id** (Corrections §10: the
   maximum has been useless since `a2.10.l2` took `.461..500`).

### Wiring

```
scripts/author-ecole-etudes-batch.ts            content:ecole-etudes
scripts/merge-ecole-etudes-into-seed.ts
scripts/data/ecole-etudes-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-31-ecole-etudes.test.ts
```

**The seed is a CUT.** Four of your six import themes hold zero seed rows, so **your
merge must carry every imported row the lesson references** or the cards render empty
(Corrections §10, and the memory "Seed is a cut of the DB"). Postgres first, seed
second. Merging this lesson will pull roughly 143 rows into the seed for the first time
and grow it materially; that is expected, say so in the report.

**Do not run `content:publish` as part of this build.** Doctrine §C: publishing is not
part of a lesson build, and `content:parity` currently reports `sons.09.l1` as
seed-only, which a publish would delete.

**Never `git checkout seed.json`.** With three other situational units in flight,
reverting it discards other authors' uncommitted work. Re-run the merge scripts
instead.

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

## Your test

Always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. The guards you will copy
have four known holes: Corrections §9 (two), §13 and §14.3. **§14.3 applies to you**:
the house word boundary excludes an apostrophe, so a guard built on it cannot see
`l'université`, `l'école` or `c'est l'équivalent de`. Drop the apostrophe from the left
boundary and keep it on the right.

**Scope every absence assertion to this lesson, never to the bundle.** Four prior builds
shipped guards that fired on legitimate content elsewhere because the assertion was
written against the whole seed. You are especially exposed: the imparfait exists in
about 328 A2 rows, and a seed-wide "no imparfait" assertion would go red on content that
is none of your business.

Specific to this lesson:

- **The imparfait guard, and it is the one that matters.**
  - `fr.a2.ecole.013` and `fr.a2.ecole.015` are named by **no** scored section:
    not `quiz`, `dictation`, `practice`, `groupDrill`, `trapDrill` drill steps, or any
    `scenario` `user` line.
  - No imparfait form appears in any `accept[]` entry, any quiz `q`, `prompt`, option or
    `why`, or any `dictation` item, **scoped to `a2.31.l1`**.
  - The imparfait appears at most twice in the whole lesson, both receptive, both in the
    `listening` or `reading` text.
  - The string "imparfait" appears in no user-facing string, and in neither
    `grammarIntroduced` nor `grammarAssumed`.
  - Put a legitimate imparfait sentence from another lesson in your MUST_NOT_FIRE list,
    so the guard proves it is scoped.
- **The credential and its hedge appear in one section**, adjacent.
- **`j'ai passé mon examen` and `j'ai réussi mon examen` appear as a pair in one
  section**, each with its English.
- **No authored correct sentence uses `passer un examen` to mean "to pass".** Permit it
  inside an `errorSpot` item as the error, and scope the assertion to allow that one
  location.
- **`fr.a2.matieres.011` is imported by id and the `faire de` rule is not restated in
  the author's own words.** Assert the id.
- **No `practice` section carries `skill` other than `'speak'`.** It would render a
  speaking drill regardless and pass every validator.
- **Exactly one `quiz` section.**
- **Every item named by the `practice` section carries the `voiceflash` drill; every
  item named by the `dictation` section carries `dictation`.** Checked against
  **Postgres**, not the seed.
- **Every `errorSpot` carries `prompt`; every question carries `why`.**
- **No `Scenario.exam` value and no `ExamTask` row is authored** by this build.
- **The interview boundary holds:** no `scenario` turn is a recruitment question, and
  `a2.30`'s owns are not re-taught. Assert whatever wording `a2.30` shipped is quoted
  and not paraphrased if you quote it at all.
- **The repair-move rows are `a2.07`'s ids**, not re-typed strings. Assert by id.
- **At least 40 percent of newly authored rows are in the registrar's voice.** Compute
  it in the test rather than claiming it in the report; a sentence in a report cannot
  fail.
- **No user-facing string contains an em dash**, and **the word "honest" appears
  nowhere** in authored content. Note that the band's inherited `\bhonest` guard cannot
  see "dishonest"; use a substring check, not a word boundary.
- **Widen the jargon walk to include `intro` and `overview`** (Corrections §9) and run
  it over a `display()` walk so `sub` on a `cardDeck` card is seen (§13). Check the `-s`
  plural of every JARGON entry. Remember §14.5: `adjective` and `adverb` are house
  vocabulary, not jargon; guard the ratio instead.
- Import `hasPlainNasalFor` and assert any respelling repair by name, through the real
  function, with the half-repair asserted as still unseen (Corrections §6 as amended by
  §14.1). Your exposure is `en`-final and nasal-stem education words.

**Mutation-test everything**, and expect two of your mutations to find a weakness rather
than confirm a strength; that is the measured rate. Mutations to run: put `.013` in the
dictée; write an imparfait into a `typeIn` `accept`; use `passer` to mean "to pass" in a
correct sentence; paraphrase the `faire de` rule instead of importing `.011`; set a
`practice` skill to `'write'`; add a second `quiz`; drop `prompt` from an `errorSpot`.

---

## What the collation overruled in your design

Listed in one place so none of it is reinstated. Each is settled; do not re-argue it,
and if you think one is wrong, say so in the report rather than building against it.

| the design said | the collation settled | where |
|---|---|---|
| Ship three A2 `ExamTask` rows (§4.5) | **No ExamTask rows, no `Scenario.exam`, band-wide** | 1.12, and Paul's decision 4 |
| Add `delf_a2` to `EXAM_FORMATS` (§8 item 3) | Approved in principle, **deferred** to the commit that authors the first such task | C1 |
| The single-play listening gate is the component to fund (§4.6) | Right instinct, and the funded item is **`listening.hideLines`**, which is the text-hiding flag rather than a play budget. `maxPlays` is a separate later item. | §3.5, C2 |
| `s04-map` may be NEEDS-ENGINEERING (§4.2 caveat) | **All 35 `SECTION_TYPES` render.** The open question is the `sheet` render mode, not the type. Device-check or use `table` at `deep`. | §3.1 |
| "production against the clock" in the `groupDrill` (§3.2) | **No timer exists in the app.** Re-express as tap-to-continue. | 1.9 |
| Two lessons, or a second quiz | **One lesson per unit, band-wide.** `den.tsx:169` opens `lessonIds[0]` only. | C6 |
| a2.31 may drift toward the interview (§3.3 option C, §8 item 2) | **a2.30 owns the interview.** You own the dossier and the study history. | C5 |
| The recovery move might be shared (§3.4, §8 item 7) | **a2.07 owns it, once, for all eight.** You author zero repair rows. | 1.6, 7.1 |
| The theme cluster ownership needs ratifying (§8 item 8) | **Not ratified.** It is yours to decide and to record in the ledger. | (open) |

---

## Settled before you start

- The identity block above, subject to one re-read against Postgres.
- **`ecole` is your theme and it is real.** No re-map, no spine edit, no `SEED_CUT` edit.
- `lessonIds: []`. First build, version 1. One lesson, `a2.31.l1`.
- **The lesson runs on the passé composé alone.** No imparfait, no conditional, no
  comparatives.
- One quiz, at the end, `rounds` form.
- France-primary; Quebec is at most one card and never an answer.
- Zero `ExamTask` rows, zero `Scenario.exam` values.
- Written production is `typeIn`, `errorSpot` and the dictée. Nothing else.
- The six-act chassis, 24 sections including the roundup.
- At least 40 percent of newly authored rows in the other party's voice.
- Listening lines authored to work unseen and to stand alone.

## UNVERIFIED

- **Every Postgres row count in this file.** The 570, the 328, the 312, the 200/179/111/80,
  the four-row Quebec figure, the eight-row /20 figure, the `.015` id ceiling. All were
  measured by one design agent on 2026-08-15 and none was re-run by the supervisor.
  Named commands are in Pre-flight.
- **Whether `a2.07` and `a2.29` are shipped.** You cite both by unit id and `a2.07` by
  `itemId`. If either is unbuilt, stop and say so.
- **Whether `a2.30` shipped, and what its scenario actually asks.** Read the shipped
  lesson, not its design document.
- **Whether `listening.hideLines` has landed.** If not, author for it anyway.
- **Whether `tapTable` renders inside a `sheet`.** Nobody has device-checked it.
  `cheatSheet` is the known casualty in the same position.
- **Which theme owns which education concept.** Your decision; record it.
- **Whether the A2 `content_units` row for `a2.31` matches the spine.** Corrections §1.
- Baseline test count and the current mission-count range. Both move weekly, and the
  24-section shape is a convention that was never measured (ledger, a2.13 §0).

---

## What to report

Doctrine §F and Corrections §12, plus:

- **The imparfait, in full.** The exposure count you measured, whether `.013` and `.015`
  were the only two in your theme, and how the account reads without a background tense.
  You are the first unit in the curriculum forced to answer this and the answer is
  curriculum-level information, not lesson-level.
- **The reframe as you worded it**, verbatim.
- **What you imported versus what you authored**, and the registrar-voice ratio, both
  measured.
- **The theme-ownership rule you applied** across `matieres`, `examens-et-diplomes` and
  `disciplines`, and how many duplicate cards it prevented.
- **`a1.03`'s ending statistic before and after your apply.**
- **The row COUNT before and after**, not the max id.
- **Which written-production claim survived**, in the exact wording given above, and
  which sections carry it.
- **The `EXAMINER-ENGINE-SPEC` misattribution**: whether you confirm that the
  "CE + PE ramp up from B1" rule lives in `CONTENT-CURRICULUM-AND-GENERATION-PLAN.md`
  §1.1 and not in the examiner spec, and whether you agree it is a coverage floor rather
  than a prohibition. Somebody will cite it again.
- **Whether the dossier framing held**, or whether the lesson read as a vocabulary list
  with a scenario attached. With 143 imports available, twelve `cardDeck` sections is the
  gravity well. Every act must end in production, not in more nouns.
- **Anything the collation settled that you found to be wrong**, with the measurement.
  The collation outranks you, and it also says to report where the repo disagrees with it.
