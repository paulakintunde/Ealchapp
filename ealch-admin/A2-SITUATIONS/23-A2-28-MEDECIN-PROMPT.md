# Build a2.28 "At the Doctor's"

Trail seq **27** of 35. Unit 4 of the eight-unit **A2 situations band** (seq 24 to 31).
You are not building a paradigm lesson. You are building the missing half of a
conversation: the corpus authored the learner's lines and never authored the doctor's.

**Your prereq `a1.24` is shipped, and it already owns the grammar this unit looks like it
should teach.** Read §"The boundary that decides this lesson" before you read anything
else in this file. It is the single finding that changes the shape of the build.

**Read first**

1. `ealch-admin/A2-SITUATIONS/10-BAND-COLLATION-AND-DECISIONS.md` — the band's settled
   decision register. **It outranks this prompt, the design doc, and the doctrine**
   wherever they disagree. §4 is the decision register, §5 is the theme re-map, §6 is the
   blocking sequence you sit inside.
2. `ealch-admin/A2-BUILD-DOCTRINE.md` and `A1-BUILD-INVARIANTS.md`.
3. `ealch-admin/A2-BRIEF-CORRECTIONS.md` **in full**. Every A2 build since seq 11 has
   found a claim in it that saved a day.
4. **`a1.24` as shipped** (`a1.24.l1` in `ealch-v2/src/content/seed.json`, plus
   `ealch-v2/src/content/a1-24-corps.test.ts`). Not its brief. Its 28 sections and its
   test file are the wall this lesson must not walk into.
5. **`a2.18` as shipped** (seq 14, prepositions of time). It owns `depuis`.
6. **`a2.07` as shipped** (seq 24, the band opener). It owns the repair move and you
   import its item ids. **If a2.07 is not merged, stop and say so** (collation §6 step 6).
7. `ealch-admin/A2-SITUATIONS/27-a2.28-medecin-DESIGN.md` — your design doc. Good, and
   overruled in four places. They are named in §"Where this prompt overrules the design".

---

## Band consistency pass, 2026-08-15

*Eight prompts were written in parallel by eight agents who could not see each other's
work. These corrections were applied afterwards, across all eight. They overrule
anything below them and anything in the collation that disagrees.*

| # | What changed in THIS prompt | Authority |
|---|---|---|
| 1 | **The answer fold.** Quiz grading uses `fold()` in `answer.logic.ts:32`, not `normalizeFr`. Your "an accent, a cedilla or a comma" line was incomplete and your "the hyphen exposure is narrower" bullet was wrong. Both corrected in place under **Quiz notes**; the real list also includes **capitals, hyphens, apostrophes/elision and word division**. | `03-ANSWER-FOLD-FACT.md` |
| 2 | **BAND RULE, new.** Fold the expected answer and the most plausible wrong answer before authoring any `typeIn`, `errorSpot` or dictée item; **if they collide, move the item to `mcq`/`listenChoose`.** Your `s17-dictation` is a dosage line and is the highest-risk item in the band for this. | band rule, all eight prompts |
| 3 | **`corpus:probe` has no `--count` flag.** Removed from Pre-flight and the claims table. `--theme` already prints the count. | `scripts/probe-corpus.ts` |
| 4 | **`practice` is MANDATORY**, which nothing had said. `lesson-contract.test.ts:505` mirrors the publish gate and fails a non-`assessment` lesson with no `practice`, empty `practice.itemIds`, or empty `Lesson.itemIds`. Your `s18-speak` already satisfies it; do not drop it, and keep `skill: 'speak'` so the authored value matches what renders. | `ealch-v2/src/content/lesson-contract.test.ts:505-519`, verified |
| 5 | **You remain device-gated, and you are no longer one of only two.** The collation's blocking step 4 named a2.07 and you; it now names **a2.07, a2.28, a2.29 and a2.32**. Your two `scenario` sections still need the check before you author, and your existing "10 to 12 turns if the check fails" fold-down is the single-section fallback the band now requires of every exposed unit. Keep it explicit. | collation §1.10 and step 4, corrected |
| 6 | **The repair-move id file is `04-REPAIR-MOVE-IDS.md`**, not `11-` (taken). Contract: six rows, `au-restaurant`, contiguous, domain-neutral, face-cost order, frozen at publication. Your "if it does not exist yet, a2.07 is not merged and you cannot start" instruction now has a filename to check. | filename collision |
| 7 | ~~**Your medical-disclaimer question has been escalated, not answered.** … **Do not invent a position while it is open.** If Paul has not answered when you author, ship without a disclaimer and say so in your report.~~ **SUPERSEDED by row 8. It is answered.** | escalated by the consistency pass |
| 8 | **PAUL ANSWERED ITEM 5 ON 2026-08-15: option B. THE DISCLAIMER IS A BUILD REQUIREMENT, NOT A QUESTION.** You ship **one `cardDeck` card at `layer: 'more'`**, `s14-notmedical`, sitting immediately after `s13-dosetrap`. You are no longer escalating anything and you do not ship without it. **This is now the house position for health-adjacent content**, so the next such unit copies your card rather than re-raising the question. Full requirement below, under "The disclaimer card". | Paul, 2026-08-15 |

---

## Identity

**Measured against `seed.json` 2026-08-15, NOT against Postgres.** The design doc says
the seed row carries an empty `sub`. It does not. Measured:

```
a2.28   seq 27   level a2   track a2
  title:  At the Doctor's
  sub:    Chez le médecin
  canDo:  Can describe a symptom, say what hurts and understand simple medical advice
  themes: ['sante', 'corps']        <- WRONG, see the theme re-map below
  prereqUnitIds: ['a1.24']
  lessonIds:     []                 <- first build, version starts at 1
```

`title`, `sub` and `canDo` match the spine
(`ealch-admin/scripts/author-full-curriculum-spine.ts`, the `a2.28` entry) byte for byte,
so the identity drift that bit four earlier A2 builds is absent here. **Confirm anyway
against Postgres with `pnpm corpus:probe --unit a2.28`** before you write the identity
block into your batch, because the seed is a cut and the database is the authority.

`a1.24` is at seq 27 too, on the a1 track. A cross-track prereq is normal (collation C8).
Do not assume a prereq is numerically earlier.

---

## The theme re-map, and the test it protects

**You author into `symptomes`. You do not author into `sante`. Not one row.**

`sante` is a phantom: zero rows in the seed, zero in Postgres, and **no `themeMeta`
entry** (verified 2026-08-15 against `ealch-v2/src/content/themeMeta.ts`, 124 keys —
`symptomes` is at line 97, `soins` at line 98, `sante` is absent). A card in a theme with
no `themeMeta` cannot be titled or browsed.

And it is pinned. `ealch-v2/src/content/a1-24-corps.test.ts:80-87`:

```ts
test('the dead `sante` theme was dropped rather than populated', () => {
  // It held 0 rows in Postgres AND 0 in the seed, which is the only condition
  // under which a declared theme is dead rather than merely outside the cut.
  deepStrictEqual(unit.themes, ['corps'], 'a1.24 should declare corps only');
  strictEqual(
    items.filter((i) => i.theme === 'sante').length, 0,
    'nothing should have been authored into `sante`: it was dropped, not filled',
  );
});
```

The `items.filter` assertion is **global over the whole seed**, not scoped to a1.24. So:

> **The first row you author into `sante` turns another unit's test red.** The supervisor
> has settled that **nobody edits that test** (collation 1.11 and C7). It is correct.
> `sante` genuinely was dropped in favour of `symptomes`, `corps`, `soins`, `bien-etre`
> and `systeme-de-sante`. The re-map to `symptomes` makes the conflict dissolve. If you
> find yourself reaching for `a1-24-corps.test.ts`, you have taken a wrong turn three
> steps back.

The `deepStrictEqual(unit.themes, ['corps'])` line is about **a1.24's** unit row and is
not affected by your re-map.

**The map (collation §5, SETTLED):**

| | value |
|---|---|
| spine `themes` today | `['sante', 'corps']` |
| **spine `themes` after** | `['symptomes', 'corps']` |
| **AUTHOR INTO** | `symptomes` |
| import from, do not author | `corps` (319 seed rows), `soins`, `systeme-de-sante`, `bien-etre`, `metiers`, `prepositions-essentielles`, `heure-et-date` |

**How the array changes.** Edit the `themes` array for `a2.28` in
`ealch-admin/scripts/author-full-curriculum-spine.ts` by hand, then let your merge script
carry the unit row, exactly as every previous A2 build did. **Do not re-run the spine
script** — `spine-drift.test.ts` exists because a naive re-run would have reverted 74 of
75 unit titles. `spine-drift.test.ts` must be green after your edit.

**Do not touch `SEED_CUT.themes`.** `symptomes` is outside the cut and that is fine:
`SEED_CUT.tracks` includes `a2` and pulls every item your lesson references, so your
cards do not render blank (collation 1.2 overrules the design doc's §7.2 on this). The
cut edit is one reviewed band-level diff, sized after real row counts, and it is not
yours. The design doc's "either `sante` joins the cut or every row is carried
explicitly" is void.

---

## Pre-flight

Everything the design doc measured about health vocabulary was measured **on the seed**,
which is roughly a quarter of Postgres, and `symptomes` has never been in the cut. The
supervisor did not query Postgres either. **Every DB figure below is UNVERIFIED and you
must re-measure it before you author a single row.**

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.28
# --theme already prints the count. There is no --count flag; see the note below.
pnpm corpus:probe --theme symptomes
pnpm corpus:probe --theme corps
pnpm corpus:probe --theme soins
pnpm corpus:probe --theme systeme-de-sante
pnpm corpus:probe --theme bien-etre
pnpm corpus:probe --tokens "la fièvre,la toux,tousser,le rhume,la nausée,l'ordonnance,le comprimé,à jeun,ça vous lance,vous êtes allergique"
pnpm content:parity
```

**`corpus:probe` does not strip accents.** Probe `fièvre`, not `fievre`, or you get a
false ABSENT. This has already cost one build.

**And `corpus:probe` has no `--count` flag.** *(Corrected 2026-08-15 by the band
consistency pass; three agents found this independently and this prompt had copied the
collation's version.)* `scripts/probe-corpus.ts` parses exactly `--theme`, `--words`,
`--tokens` and `--unit`, and silently ignores anything else, so `--count` was never
erroring, it was doing nothing. **`--theme` already prints the count** on its first
line: `published in postgres: <N>   present in seed: <M>`, followed by a per-prefix
`count=` / `max=` / `NEXT FREE ID` block. That block is also how you check the *count*
after your apply rather than the maximum. Drop the flag everywhere.

### The claims you are re-measuring, and what settles each

| claim | source | status | the command that settles it |
|---|---|---|---|
| `symptomes` + `corps` hold 653 DB rows | supervisor input 1.1, agent figure | **UNVERIFIED** | `corpus:probe --theme symptomes`, same for `corps` |
| `symptomes` holds 0 seed rows | measured on seed 2026-08-15 | **CONFIRMED (seed only)** | n/a |
| `corps` holds 319 seed rows, 20 of them `fr.a2.corps.001`-`.020` | measured on seed 2026-08-15 | **CONFIRMED (seed only)** | `corpus:probe --theme corps` for the DB figure |
| No fever, cough, ordonnance, dosage or pharmacy vocabulary exists | design §2.4, seed-scoped regex | **UNVERIFIED, and the most likely thing this build gets wrong** | `corpus:probe --tokens` above |
| The seed holds three doctor scenarios of 3 to 4 turns | measured on seed 2026-08-15: `sc.a1.corps.001` (4), `sc.a1.rp-sante.001` (3), `sc.a2.rp-sante.001` (3) | **CONFIRMED (seed only)** | n/a; standalone scenarios are a separate surface a lesson build does not touch |
| The `sante` playlist in `playlists.ts` holds ten vetted tracks | design §2.5 | **CONFIRMED in CODE** | read `ealch-v2/src/content/playlists.ts` around line 1040 |

**The interpretation rule, settled by the supervisor (collation 1.3):** a DB row that is
`published` is REACHABLE and **must be imported by `itemId`, never re-authored**. A DB
row that is not `published` is invisible to learners and may be treated as absent.
`content:parity` is what tells you which.

**If the probe shows Postgres already holds a health corpus the seed does not show, your
corpus plan collapses from ~75 authored rows to ~25 authored rows plus a long import
list. That is a good outcome and you should report it as the headline.**

---

## The boundary that decides this lesson

### `avoir mal à` is fully owned by a1.24, which is your own prerequisite

This is the largest finding in the design doc and it is correct. `a1.24.l1` "Le corps" is
a shipped 28-section lesson. **Five of its sections** are this material:

```
s08-frame     cardDeck      The Sentence That Changed Shape    <- avoir mal à, card 1 is "J'ai mal à la tête."
s09-four      tapTable      The Four Shapes                    <- au / à la / aux / à l'
s10-contract  groupDrill    Does It Change?                    <- the contraction drill
s12-hear      listening     Au, À La, Or Aux?                  <- the audible contrast
s23-speak     practice      Say Where It Hurts                 <- 15 items
```

plus `s20-reading` "The Waiting Room", which is a clinic passage. And two assertions in
`a1-24-corps.test.ts` pin it:

```
test('the avoir mal a frame is taught with BOTH sides on ONE screen')
test('all four shapes of the little word appear, each by name')
```

> **`avoir mal à` plus the article contraction CANNOT be this lesson's payload.** Not as
> the Owns, not as a "quick recap act", not as a trapDrill, not as a quiz round that
> tests the contraction. Re-teaching it violates doctrine §B.5 (one lesson owns one
> thing) and makes an A2 learner at seq 27 walk a lesson they walked at A1 seq 27.

`avoir mal à` appears in this lesson in exactly one role: **as construction 1 of three,
the one the learner already has, used as the anchor that makes constructions 2 and 3
visible.** Use it, cite `a1.24` by unit id when you do, and never explain the
contraction.

### `depuis` is owned by a2.18, comprehensively

`a2.18` (seq 14) carries **280 occurrences of `depuis`** across 24 sections, including a
dedicated `trapDrill` on the tense `depuis` wants (`s07-tense`) and an `intro` that names
the exact anglophone error: *"English hands you a past tense for a thing that is still
true, and French will not take it."* Collation C5 lists `depuis` as uncontested.

**Your doctor asks `depuis quand ?` constantly. Lean on it, name `a2.18` by unit id, do
not teach it.** No mission, no trapDrill step and no quiz question may have the tense of
`depuis` as its difficulty.

### Reflexive injury is owned by a2.22 and a2.23

`fr.a2.corps.001`, `.002`, `.006`, `.015`, `.018` are already published reflexive-injury
sentences (`Elle s'est cassé le bras en tombant du vélo.`). Import them. Do not teach the
reflexive past.

---

## The teaching problem

### Owns: three French constructions where English has one cue

```
avoir mal à + body part      j'ai mal à la tête, au dos, aux dents      <- a1.24 owns this one
avoir + symptom noun         j'ai de la fièvre, j'ai un rhume
bare verb                    je tousse, je saigne, j'éternue, je vomis
```

Nothing in English predicts which one French takes. *I have a cough* is a noun in English
and a verb in French. *My head hurts* is a verb in English and `avoir mal à` in French.
The learner has to choose in the half-second between `j'ai` and the rest of the sentence.
No shipped unit owns this choice.

**And the second half of the Owns: the repair move, in use.** A doctor asks questions the
learner did not prepare for and uses words the learner does not have (`ça vous lance ?`,
`vous êtes à jeun ?`, `vous avez des antécédents ?`). Every other unit in the band can
hang its vocabulary on a visible noun. A symptom is inside the learner and cannot be
pointed at, so describing around a missing word is not politeness here, it is the only
way the encounter completes.

**But you author ZERO repair rows.** Collation 1.6 and 7.1: **a2.07 owns the repair move,
authored once, in `au-restaurant`, as corpus rows with ids.** The other seven units cite
`a2.07` by unit id and reuse the rows by `itemId`. Eight independent authorings would put
eight rows with the same `fr` into overlapping themes and break the flashcard hub's
one-card-per-`fr`-per-theme assumption.

> Take the repair-move `itemId` list from a2.07's build report. If it does not exist yet,
> a2.07 is not merged and **you cannot start** (collation §6 step 6). Do not author
> `pardon ?` or `vous pouvez répéter, s'il vous plaît ?` as a `symptomes` row "just for
> now". That is exactly the duplication the ownership decision exists to prevent.

### The reframe candidate

> **English gives you one shape for a symptom. French picks one of three, and the choice
> is made before the word arrives.**

Runs mid-sentence, predicts the error, and is a rule the learner can act on while
speaking. Carry it verbatim across six to eight sections (doctrine §B.4). Record what you
rejected: anything of the form "there are three ways to describe a symptom in French" is
the table, not the rule.

### Reception is close to half this lesson, and that is deliberate

Getting a hotel room number wrong is an inconvenience. Getting `trois fois par jour`
wrong is not. **This is the only unit in the band where misunderstanding is worse than
not being understood**, and the weighting follows: two `listening` sections at act 3,
both core; a gated dosage `trapDrill`; two of six quiz rounds on the ear; a document
`reading` with `questionsInModal: true`.

That weighting is not padding and it is not negotiable down. If you find yourself
trimming, trim production, not reception.

---

## The one engineering dependency, and its fallback

The band funds exactly **one** new component: `listening.hideLines` (collation §3.5,
§6 step 3, ~0.5 day). Verified 2026-08-15: **`hideLines` does not exist in
`schema.ts` today.**

```
LessonSection, type 'listening', new optional field:

  hideLines?: boolean
```

It exists because `MissionRich.tsx:1949` `ListeningView` renders `<TX role="body">{l.fr}</TX>`
and `<TX role="bodySm">{l.en}</TX>` in every line card, beside the `PlayDot`. **Every
listening section in the product today is answerable by reading.** When `hideLines` is
true the card keeps its `PlayDot` and its box, replaces the text with a neutral
placeholder, and reveals after the learner has answered every question. The reveal is not
gated on getting them right.

**Your two blind-listening sections depend on it.** State the dependency in your build
report.

**The fallback if it has not landed when you author:** `audio.audioFirst: true`, which
ships today and is already used by 26 of the 63 listening sections in the seed, including
`a1.24`'s own `s12-hear`. It puts the audio before the text; it does not remove the text.
**Author the questions so they still work either way** — ask *how many* and *when*, never
*what did you hear* — and flag in the report that the sections are weaker until
`hideLines` lands and should be revisited, not rewritten.

**Do not author `maxPlays`, `modelPlayback`, `wrongThenRight`, `perSentenceReplay`,
`scoreOn` or `autoplay` believing they do anything.** All six validate, publish, and are
read by no renderer (collation §3.5). The seed already carries 31 of them.

---

## `openPrompt` is not funded. Deliver on today's renderer.

The design doc's `s20-open` proposed a new `openPrompt` section: prompt, mic, countdown,
model answer, self-check list, costed at 1.5 to 2.5 days. Collation §3.2 and C2:
**merged with a2.30's `monologue` into one deferred component, and NOT funded for this
band.** Also void: the countdown inside it. **There is no timer anywhere in the app** —
`setInterval` count is 0 across `MissionSection.tsx`, `LessonSection.tsx`,
`MissionRich.tsx` and `LessonRich.tsx` (collation 1.9).

**Drop `s20-open`. Ship without it.**

**What is lost, and say so in the report:** the lesson has no free-production surface.
`practice` renders the speaking drill regardless of `skill` and reads back sentences the
lesson already supplied; `scenario` gives a model answer per turn. So the TEF Canada
Expression orale section A payload rests entirely on `s10-consult`, `s11-counter` and
`s19-pharma`, which are scripted. The learner is never asked to produce an unscripted
turn about a symptom the lesson did not name. That is a real gap in this unit's exam
value and it is the strongest single argument for building `openPrompt` in the next
band. Write that sentence in the report; it is the evidence the decision gets revisited
against.

**Do not invent a substitute.** Collation §8: if `openPrompt` is not built, all eight
units drop it rather than one unit inventing its own.

---

## Two `scenario` sections: check the device BEFORE you author

You are **one of only two units in the band** exposed to this. The supervisor measured
the seed and overruled the blanket "assume repeated sections fail silently" advice
(collation 1.10): `listening` repeats in 6 shipped lessons, `practice` in 14, `trapDrill`
in 10, `examples` in 15, and `cardDeck` / `tapTable` / `groupDrill` repeat almost
everywhere. All of those are approved without a check.

**The genuinely untested set is `scene`, `scenario`, `reading`, `dictation` and `table`.
None of them repeats in any shipped lesson: 22 A2 lessons carry exactly one `scenario`
each.** a2.07 plans `scene` x2 and you plan `scenario` x2.

**Blocking step 4, and it is a fifteen-minute job:** build a temporary local lesson with
two `scenario` sections and render it on a Pixel 6. `ownsLayout` in `LessonPager.tsx`
handles each section independently, so it should work. Nobody has run it.

- **If both render:** author `s10-consult` (the consultation, 8 turns) and `s19-pharma`
  (the pharmacy counter, 6 turns) as designed.
- **If the second does not render:** merge to **one** `scenario`. Author `s10-consult` at
  ten to twelve turns, ending on the prescription being handed over and the dosage read
  back, and replace `s19-pharma` with a `listening` (the pharmacist's dosage
  instructions) plus a `practice` on the counter lines. Weaker, not fatal. This is the
  design doc's own fallback and it is approved.

**Report which happened.** Six other units are waiting on the answer.

---

## One lesson. The pharmacy is folded, not split.

Collation C6, SETTLED band-wide: **one lesson per unit.** `ealch-v2/app/den.tsx:169`
pushes `{ pathname: '/lessonoverview', params: { key: u.lessonIds[0] } }` and
`lessonoverview.tsx:47` carries a comment confirming it reads `lessonIds[0]` and nothing
else. A second lesson is unreachable from the Den.

The design doc already reached this conclusion and its reasoning is right: the pharmacy
is three moves (state the problem, hand over the ordonnance, understand the dosage), not
a second situation, and the dosage is the payoff of the consultation rather than a
parallel encounter.

**What is folded in:** the counter script (`s11-counter`), the dosage reception
(`s12-dose`, `s13-dosetrap`), the label document (`s15-ordonnance`) and the counter role
play (`s19-pharma`).
**What is dropped:** a pharmacy-specific quiz, the pharmacy vocabulary beyond what those
five sections use, and anything about reimbursement mechanics.
State both lists in the build report so the decision is legible later.

---

## Band policies you inherit, verbatim

These are settled for all eight units and are not yours to revisit.

**The mandate (collation 1.5).** The corpus authored only the learner's half of every
situation. **At least 40 percent of this unit's newly authored rows must be in the voice
of the person the learner is talking to** — the doctor, the receptionist, the pharmacist.
Import the learner's half; author the other half. This is the instruction that makes the
band worth building rather than eight vocabulary reviews.

**The exam claim (collation 1.12). Carry this verbatim in your build report:**

> This unit carries exam value by **teaching what the exam tests** (transactional
> reception at speed, a request in the right register, a structured 60-second turn),
> not by producing an `ExamTask` row and not by populating `Scenario.exam`. Do not
> author `Scenario.exam`. Do not author `ExamTask` rows. Do map each act to a named
> TEF/TCF/DELF task in the design notes, because that mapping is what makes the
> content right, and because it is what a future runner will consume.

The design doc's §6 mapping is good work and survives as notes. `Scenario.exam` is read
by no code in `ealch-v2/src`. Do not add `delf_a2` to `EXAM_FORMATS` (collation C1:
approved in principle, deferred to the commit that authors the first `delf_a2` task).

**Regional policy (collation C3).** Scored, drilled and quizzed content is
**France-standard French**. Each unit may carry **at most one card** naming a Quebec
divergence, as colour, and nothing on that card is ever the answer to a scored question.
**This overrules your design doc**, which planned a whole `examples` section of
France/Quebec service pairs. Collapse it to one card (RAMQ / carte soleil / clinique sans
rendez-vous / 811 are the strongest four, and one card holds them). If you believe you
have found a divergence that changes an **answer** rather than a word — the a2.26 tax
exception is the model, and collation §7.6 names this unit's health system as the likely
second candidate — **escalate it, do not grant yourself the exception.**

**Feminisation of job titles (collation C4).** a2.30 owns this. Where a feminine form
already exists in the corpus, use it. **Do not mint `médecine`, `docteure`, `pharmacienne`
or any other job-title feminine of your own.** You have `un médecin`, `un infirmier`, `un
pharmacien`, `un dentiste` as imports; leave the paradigm alone.

**No unit may build a teaching move on `y` or `en`** (collation C8): `a2.25` has zero
lessons. Unanalysed lexis only.

**Liftable listening (collation §7.2 and 1.4).** `a2.35` (Bilan A2) inherits this band's
listening as a mixed-situation reception bank. **Author every listening line so it makes
sense without your lesson's framing.** A line that only works after the learner has met
your scene is not liftable. This costs nothing now and is expensive to retrofit.

**Scenario consistency (collation §7.3).** Eight units, eight scenarios, eight authors.
Your doctor uses `vous` throughout. If a shared band constants file for the six recurring
moves (greet, request, ask price, ask for repetition, complain, close) exists by the time
you build, quote it rather than inventing a seventh phrasing.

---

## Recommended architecture

**One lesson, `a2.28.l1`. Six acts, 23 to 24 sections, 23 to 25 missions.** *(Was 22 to
23 sections before the disclaimer card became a requirement on 2026-08-15.)* Within
doctrine §F's range.

The six-act chassis stays. It is enforced by `acts.logic.test.ts`, the density validator
and `LessonPager`'s mission numbering, so departing from it is a renderer change and not
an authoring choice. **What changes is act 2's job**: there is no paradigm here, so act 2
is short and carries the frame, and the freed weight moves into act 3, which doctrine
§B.5 says is where the Owns belongs anyway. **Act 3 must have more missions than act 2**
and the build report must show it.

**Every section below SHIPS TODAY.** All 35 `SECTION_TYPES` have a live render branch:
`MissionSection.tsx` cases 16 types plus 3 by `type ===`, then falls through at line 647
to `SectionView` in `LessonSection.tsx`, which cases 18 more. `table`, `tapTable`, `quiz`,
`examples`, `roundup`, `teach` and `audio` all render inside a mission via that
fallthrough. **Do not mark any section NEEDS-ENGINEERING.** The "does not render" folklore
comes from a real bug that was fixed; read the comment block at `MissionSection.tsx:614-646`.

| # | id | type | layer | what it does |
|---|---|---|---|---|
| **Act 1 — the situation and the goal** |||||
| 1 | `s01-scene` | `scene` | core | Walk-in clinic. The learner opens with `j'ai mal à…` and the doctor replies `ça vous lance ou ça vous brûle ?`. The sentence dies mid-utterance. `choice` beat: freeze in English, or `je ne connais pas le mot, c'est comme une brûlure`. The `break` teaches that describing around the word is allowed. |
| 2 | `s02-goals` | `goals` | core | Four can-dos: the spine `canDo` split three ways, plus the repair move. |
| 3 | `s03-three` | `cardDeck` | core | **The Owns, stated.** Three cards, one construction each, English beside each so the merge is visible. `size: 'lg'`. |
| **Act 2 — the frame, and it is short** |||||
| 4 | `s04-slots` | `tapTable` | core | The four slots of a symptom report: what / where / since when / how bad. Tappable to hear a filled example. **Capped at six rows on a Pixel 6.** |
| 5 | `s05-sort` | `groupDrill` | core | Twelve symptoms sorted into the three constructions. **Four of the twelve are words the decks did not teach** — that is the generation test (doctrine §B.1). |
| 6 | `s06-pick` | `trapDrill` | core | Stepped. Tests construction choice only, never the contraction. |
| **Act 3 — the Owns, the heaviest act** |||||
| 7 | `s07-asks` | `listening` | core | `hideLines: true` (fallback `audio.audioFirst: true`). Five doctor questions heard cold. Questions ask **what was asked**, not what was said. Lines must stand alone for a2.35. |
| 8 | `s08-pairs` | `groupDrill` | core | Adjacency pairs: match the doctor's question to the slot it wants. The question predicts the answer, and that is the cheapest reception win in the unit. |
| 9 | `s09-repair` | `cardDeck` | core | **The repair move, imported from `a2.07` by `itemId`, zero rows authored.** Names `a2.07` by unit id. |
| 10 | `s10-consult` | `scenario` | core | The consultation, 8 turns (or 10 to 12 if the device check fails). **Two turns require a repair move** because the doctor uses a word the lesson never taught. Every turn carries `alts` (two or three) and `userEn`; STT scores against all of them, best match wins. Model answers stay **short** — a person with a fever produces short sentences. |
| 11 | `s11-counter` | `cardDeck` | core | The pharmacy counter. `je voudrais quelque chose contre…` / `voici mon ordonnance` / `c'est sur ordonnance ?` / `vous avez le générique ?`. Softeners are **unnamed lexis**: use `je voudrais`, never name or conjugate the conditional (collation 1.8). One card here may carry the Quebec divergence. |
| 12 | `s12-dose` | `listening` | core | `hideLines: true`. **The harm-bar section.** Four dosage instructions heard cold; the questions are "how many" and "when". |
| 13 | `s13-dosetrap` | `trapDrill` | core | Stepped, `gate: true` on the drill step. `trois fois par jour` vs `toutes les trois heures`; `avant` vs `après les repas`; `à jeun`; `pas plus de six par jour`. |
| **14** | **`s14-notmedical`** | **`cardDeck`** | **more** | **REQUIRED. One card. The disclaimer.** Immediately after `s13-dosetrap`, which is the last scored dosage surface, so the learner meets it having just been drilled on `trois fois par jour` and never before the teaching has happened. See "The disclaimer card" below for the exact contract. |
| **Act 4 — the trap** |||||
| 15 | `s15-errors` | `commonErrors` | core | **Must carry `swipe: true` or it renders blank** (pinned by `a1-24-corps.test.ts`). Six: `pour trois jours` (cite `a2.18`), `je suis malade` vs `j'ai mal`, `je suis chaud` for fever, `ma tête fait mal` (cite `a1.24`), `j'ai un mal`, `je me sens mal` vs `je me sens malade`. |
| 16 | `s16-ordonnance` | `reading` | core | `questionsInModal: true`, which pages the passage away and blocks pattern-matching. A pharmacy label plus a short note. `glossary` for the six words the learner will not have. |
| 17 | `s17-quebec` | `cardDeck` | **more** | **One card**, per collation C3. Recognition only, never scored. A France-based learner walks past it. |
| **Act 5 — production** |||||
| 18 | `s18-dictation` | `dictation` | core | The dosage line, written. The only place the learner produces a number. |
| 19 | `s19-speak` | `practice` | core | Symptom-report items by id. **`practice` renders the speaking drill regardless of `skill`** — the field is decorative. Every named item needs a `voiceflash` drill (doctrine §E) or it serves nothing. |
| 20 | `s20-pharma` | `scenario` | core | 6 turns, the counter, ending on the dosage read back correctly. **Subject to the device check above.** |
| **Act 6 — the close** |||||
| 21 | `s21-review` | `reviewDeck` | core | Leitner over the three constructions and the repair moves. |
| 22 | `s22-progress` | `progressCheck` | core | |
| 23 | `s23-quiz` | `quiz` | core | **One quiz.** See below. |
| 24 | `s24-roundup` | `roundup` | core | |

> **Renumbered 2026-08-15, when the disclaimer became a requirement.** The lesson was
> 23 sections; it is **24**. Everything from the old `s14-errors` down has moved by one
> and been renamed to keep the `sNN-` prefix honest: `s14-errors` → **`s15-errors`**,
> `s15-ordonnance` → **`s16-ordonnance`**, `s16-quebec` → **`s17-quebec`**,
> `s17-dictation` → **`s18-dictation`**, `s18-speak` → **`s19-speak`**, `s19-pharma`
> → **`s20-pharma`**, `s20-review` → **`s21-review`**, `s21-progress` →
> **`s22-progress`**, `s22-quiz` → **`s23-quiz`**, `s23-roundup` → **`s24-roundup`**.
> **Nothing is authored yet, so this costs nothing.** Where this prompt still says an
> old id in prose, the new id is the one that ships. Fix any you find and say so in
> your report. Note the old table also carried **two rows numbered 15**, which is
> repaired by the same pass.

**No `table` anywhere in this lesson.** `table` has zero uses across all 64 shipped
lessons; `tapTable` is what the band actually uses, 123 times. a2.07 is trying `table`
first and is device-checking it. You are not the unit to find out.

**No reference `sheet`, and therefore no `cheatSheet`** (it draws its title and nothing
else inside a sheet). **No `deep` layer. No `imageRef`** — a1.24 authors zero and pins it
at zero; make that an explicit decision in your report rather than an omission.

---

## The disclaimer card, `s14-notmedical`

**REQUIRED. Paul answered `12-DECISIONS-FOR-PAUL.md` item 5 on 2026-08-15, option B.**
This is no longer a question you escalate, an option you weigh or a thing you may ship
without. It is a section of the lesson, and **it is now the house position for
health-adjacent content**: the next unit that teaches something a learner could act on
copies this card's shape instead of re-opening the question.

### The contract

| what | value |
|---|---|
| section id | `s14-notmedical` |
| type | `cardDeck` |
| layer | **`more`** |
| cards | **exactly one** |
| position | **immediately after `s13-dosetrap`, immediately before `s15-errors`** |
| scored | **never.** It is not in the quiz, not in `practice`, not in the dictée, not in `reviewDeck`, and no `itemIds` |
| act | act 3, the same act as `s12-dose` and `s13-dosetrap`, so it closes the dosage run rather than opening the trap act |

### Where it sits, and why exactly there

- **After `s12-dose`, not before it.** `s12-dose` is the harm-bar listening: four dosage
  instructions heard cold. A disclaimer in front of it would be a warning about content
  the learner has not met, which reads as alarm and teaches nothing.
- **After `s13-dosetrap`, not between the two.** `s12-dose` and `s13-dosetrap` are one
  teaching move in two parts: hear the dosage, then be caught by
  `trois fois par jour` against `toutes les trois heures`. **Do not put a card between
  them.** The card lands when the learner has just discovered, in the gated drill, that
  they can mishear a dose. That is the one moment in the lesson when the sentence "a
  pharmacist tells you the dose" is information rather than boilerplate.
- **Before `s15-errors`.** Act 4 opens a new move. The card belongs to the dosage run,
  so it closes act 3.
- **`layer: 'more'`, so it never interrupts the teaching path.** A learner on the core
  path walks past it. That is deliberate and it is why option B cost one card rather
  than a redesign.

### What the card says

- **Plain words.** No legal register, no "the publisher accepts no liability", no
  capitals for emphasis. Write it the way the rest of the lesson talks.
- **Two things, and only two.** (i) This lesson teaches you **the French** for a dose,
  which is what lets you follow one. (ii) The person who tells you **what dose to take**
  is the pharmacist or the doctor, and asking them is normal and expected.
- **Frame it as competence, not as a limit on the product.** The learner has just been
  drilled on hearing a dosage correctly; the card's job is to say that understanding the
  sentence and deciding the dose are two different things, and that the second one is
  somebody's job, not a gap in the learner.
- **Give them the French to ask.** A card that ends with the learner able to say
  `c'est combien de fois par jour ?` at a counter is teaching, not a notice. Use rows
  that already exist where they do.
- **No brand names, no real drug at a real dose**, in this card or anywhere else in the
  lesson. Generic instructions only (`un comprimé matin et soir`). That was already the
  defensive rule; it is now permanent.
- **House rules apply as everywhere**: no em dash, no `honest`/`honesty`, no grammar
  jargon, and the respelling conventions hold on any French the card shows.

### Pin it in your test

- **`s14-notmedical` exists, is `layer: 'more'`, is a `cardDeck` and holds exactly one
  card.** A second card is scope creep and the next author will copy it.
- **It sits between `s13-dosetrap` and `s15-errors`** in the section order. Assert the
  neighbours by id, not the index.
- **It is scored nowhere**: its strings appear in no quiz question, it names no
  `itemIds` that the dictée or `practice` also name, and no quiz `ref` points at it.
- **It is the only disclaimer in the lesson.** No second one in the `roundup`, the
  `intro` or the unit description. One card, one place.

### What this does NOT authorise

No schema field, no renderer change, no product-level notice, no onboarding copy, no
store-listing text. Option C was considered and is out of scope for this band. If a
legal review later wants a product-level statement, this card is not a substitute for
it and it is not a blocker to it.

---

## Quiz notes

Rounds, six of eight, 24 questions, `passMark` and `roundFailThreshold` matched to the
band. Every question carries a `why` (doctrine §F).

| round | tests | format |
|---|---|---|
| 1 | which construction | `mcq` |
| 2 | the doctor's question, heard | `listenChoose` |
| 3 | build the symptom report | `typeIn` |
| 4 | the dosage, heard | `listenChoose` |
| 5 | the repair move, in context | `mcq` |
| 6 | the anglophone errors | `errorSpot` |

- **No question may test the `à` contraction, the tense `depuis` wants, or the reflexive
  past.** Those are a1.24, a2.18 and a2.22/a2.23. This is the assertion your test file
  most needs.
- **What no scored question may hinge on, corrected 2026-08-15.** *(This prompt said
  "an accent, a cedilla or a comma" and then said the hyphen exposure was narrower than
  the brief claimed. The first list was incomplete and the second claim was wrong.
  Authority: `03-ANSWER-FOLD-FACT.md`.)* Quiz `typeIn` and `errorSpot` are graded by
  `matchesAccept`, which calls **`fold()` in `ealch-v2/src/content/answer.logic.ts:32`**,
  not `normalizeFr`. `fold()` strips **accents, case, punctuation, hyphens, the middle
  dot, both apostrophes and all whitespace.** So no scored surface can test:

  | | always passes |
  |---|---|
  | accent, cedilla | `fièvre` = `fievre`, `ça` = `ca` |
  | capital | `Docteur` = `docteur` |
  | hyphen | `avant-hier` = `avant hier` |
  | apostrophe, elision | `l'ordonnance` = `lordonnance`, `j'ai` = `jai` |
  | word division | `à jeun` = `ajeun` |
  | comma, punctuation | `trois fois, par jour` = `trois fois par jour` |

  **This matters most in your dosage material**, which is exactly where an author
  reaches for a comma. `trois fois par jour` and `toutes les trois heures` are far apart
  under the fold and are safe to contrast; a numeral written two ways is not.
  The dictée is no looser: `normalizeFr` (`utils/score.ts:19`), whose one render-side
  caller is `MissionRich.tsx:1385`, strips the same marks. **Do not author a dictée
  whose only difficulty is a hyphen, and do not author a `typeIn` whose `accept` array
  relies on a hyphen being folded — it is folded, so the `accept` entry is redundant
  rather than load-bearing.**
- **BAND RULE, and `s17-dictation` and your `typeIn` round both need it.** Before
  authoring an item, fold the expected answer **and** the most plausible wrong answer.
  **If they fold to the same string the item tests nothing and must be moved to `mcq` or
  `listenChoose`.** Assert `fold(answer) !== fold(distractor)` over every authored
  near-miss in your test file.
- `errorSpot` is free text. `listenChoose` falls back to speaking the English options if
  the card is authored wrong — read the card contract, not just the schema.
- At most half `mcq` (a1.24 pins that on itself; treat it as house style).
- **The quiz shuffles options at runtime; missions render authored order.** Hand-randomise
  mission options; do not hand-randomise the quiz.
- **One quiz per lesson.** A second `quiz` section is silently never rendered. If the
  assessment does not fit, that is an escalation, not an authoring decision.

---

## Corpus plan

Roughly **75 to 90 new rows**, and expect the probe to cut that number.

| theme | new rows | kind | content |
|---|---|---|---|
| `symptomes` | 55 to 65 | ~20 word, ~15 phrase, ~30 sentence | symptom nouns (`la fièvre`, `la toux`, `le rhume`, `la nausée`, `un vertige`), symptom verbs (`tousser`, `saigner`, `vomir`, `éternuer`), service nouns (`l'ordonnance`, `le comprimé`, `la clinique sans rendez-vous`), **the doctor's questions as sentences**, **the dosage instructions as sentences** |
| `corps` (a2 band, ids from `.021`) | 12 to 18 | mostly sentence | symptom reports that name a part, and the `avoir mal à` sentences this lesson uses that a1.24 does not already own |
| repair move | **0** | — | imported from `a2.07` by `itemId` |

**At least 40 percent of those rows must be in the doctor's or the pharmacist's voice.**
Tag `Item.skill` (`CO | CE | PO | PE`) on every row — twelve of the twenty existing
`a2.corps` rows already carry it — and `Item.register` (the doctor is `courant` leaning
`soutenu`, the learner `courant`). This costs nothing at authoring time and is what lets
a future Examiner assemble a health CO task from published rows.

**Import, do not author** (verify each against the probe first): `un médecin`
`fr.a1.metiers.001`, `un infirmier` `.002`, `un pharmacien` `.020`, `un dentiste` `.021`,
`la gorge` `fr.a1.corps.027`, `l'estomac` `.036`, `respirer` `.091`,
`Je vais chez le médecin demain.` `fr.a1.prepositions-essentielles.023`,
`J'ai pris rendez-vous chez le médecin.` `fr.a2.heure-et-date.116`, and the whole
`fr.a2.corps.009` to `.020` block.

**The ten-track `sante` playlist** (`ealch-v2/src/content/playlists.ts` ~line 1040) is
already-reviewed French covering exactly this ground (`Depuis quand avez-vous ces
symptômes ?`, `Prenez un comprimé matin et soir.`). Its lines are not corpus rows and have
no ids, so they cannot be referenced by `itemIds`, but they are a vetted source for the
sentences you author, and reusing them makes the playlist and the lesson agree. Note that
`C'est remboursé par la sécurité sociale ?` is France, which is now band policy anyway.

### Collision risks, each with the check that clears it

- **The 294 guard.** `a1-24-corps.test.ts:366` counts every item with `theme === 'corps'`
  and a numeric tail ≥ 294 and expects exactly six (verified: currently exactly six).
  `theme` is band-agnostic, so an `fr.a2.corps.294` would count. **Keep your `corps` ids
  in 021 to 100.** Next free is `.021`.
- **Duplicate `fr` in `corps`.** The same file asserts that no two non-sentence rows in
  `corps` share an `fr`, across bands. `la gorge`, `l'estomac`, `la respiration` and
  `respirer` already exist in `a1.corps`. Do not re-author them as `a2.corps` words.
- **`le sirop` already exists** as `fr.a1.cuisine.121` = syrup, cordial, which is the
  drink. The medicine needs a different headword (`le sirop contre la toux`) or it
  collides on `fr`.
- **Gender statistics.** Three separate A1 builds turned `a1-03-genre.test.ts` red by
  adding or carrying gendered nouns. You add `la fièvre`, `la toux`, `l'ordonnance`, `le
  comprimé`, `la piqûre`. **Run `a1-03-genre.test.ts` before the apply and after it**, and
  note that a carry moves the population even when an import does not.
- **Id range collision.** A highest-id check misses a concurrent build landing below your
  top. **Check the row COUNT, not the maximum.**
- **Form rules.** Symptom noun headwords take the definite article (`la fièvre`), matching
  every other noun in the corpus; the partitive (`j'ai de la fièvre`) lives in the sentence
  rows. Verb headwords are bare infinitives (doctrine §E). Sentence budget 14 words.
- **Respelling** per `RESPELL-CONVENTION.md`; caps mark phrase-final stress, and do not
  invent IPA. `médecin`, `examen`, `comprimé` and `ordonnance` are all nasal-bearing and
  `hasPlainNasalFor` has **three documented blind spots**. Run every respelling through
  the real checker, expect at least one false positive, and pin the exceptions by name in
  one table as a1.24 does for `la jambe`.

---

## Layout and scene

- **The three constructions belong on one screen**, each with its English beside it. **This
  is the layout the test must assert.** It is the Owns, and splitting it across two
  sections makes it two small lessons.
- **The doctor's question and the slot it wants belong side by side.** Second required
  layout, and it is what makes reception teachable rather than merely tested.
- **The dosage pair `trois fois par jour` / `toutes les trois heures` belongs on one
  screen.** Third required layout, and it is the harm bar.
- `commonErrors` needs `swipe: true`. Three term chips per section.
- Any `trapDrill` must walk `rule > cards > audio > drill` with `swipe`, an `audio` spec, a
  `say` and a **gated** drill step (`lesson-contract.test.ts`). `size` comes OFF a stepped
  trapDrill. The audio step plays each card's `fr`, so its `recordingId` must name a take
  containing those lines. **The stacked trapDrill shape hides the gate, the audio and the
  sub-mission number — use the stepped one.**
- **Put `flex` on a wrapper `View`, never on a `TX`.** A flexed `Text` clips its tail: the
  learner loses the last words while the audio speaks them in full. This unit has long
  doctor questions and long dosage instructions, which is exactly where it bites.
- **A spaced exclamation mark clips the scene bubble.** `Appelez une ambulance, s'il vous
  plaît !` is precisely the shape that triggered it. Verify on device or avoid it.
- **The scene:** the A2 register (doctrine §B.2). Someone unwell who opens correctly with
  the phrase they rehearsed, meets one word they do not have, and stops. Nobody corrects
  them; the doctor waits. Beats in a named `SCENE_BEATS` const, prose at `md`, choice and
  break at `lg`, each with its own `audio`, break body 24 to 40 words.
- **Register and length:** the learner is not at their best. Never require a long sentence
  where a short one works. A lesson that models paragraphs is modelling the wrong
  performance.

---

## Wiring

```
scripts/author-medecin-batch.ts                 content:medecin
scripts/merge-medecin-into-seed.ts
scripts/data/medecin-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-28-medecin.test.ts
```

Ids in `symptomes` from `.001`, and in `corps` from `.021`. **Postgres first, seed
second.** The seed is a CUT and must carry every imported row your lesson references, or
the cards render empty.

- **Never `git checkout seed.json`** — it discards other authors' uncommitted lessons.
  Re-run the merge scripts instead.
- **Do not run `content:publish`.** It would delete `sons.09.l1`, which is seed-only.
  Publishing is not part of a lesson build: apply to Postgres, merge into the seed, stop.
- **The dev content cache outranks the seed.** If an edit does not appear on device, clear
  the cache before you debug the content.
- Row count after the apply, in the report.

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

`ealch-v2/src/content/a2-28-medecin.test.ts`. Invariants §6, plus the four holes in the
guards you will copy (Corrections §9: the jargon walk misses `intro` and `overview`, and a
throwing source silently disables ~30 assertions; §13: `prose()` drops `sub`, so walk
`display()`, and check the `-s` plural of every JARGON entry; §14.3: the house word
boundary excludes `'`, so it cannot see `j'ai`, `l'ordonnance`, `c'est`). An ASCII `\b`
made one A2 guard never fire at all.

Specific to this lesson:

- **Zero items carry `theme === 'sante'`.** Assert it in your own file too, so the failure
  points at you rather than at a1.24.
- **The three constructions appear in one section**, each with its English.
- **`a1.24` is named by unit id and the contraction is never explained**, scoped to every
  authored surface: no mission, no drill step, no quiz `why` teaches `au / à la / aux /
  à l'`.
- **`a2.18` is named by unit id and the tense of `depuis` is never taught.**
- **Every repair-move utterance is an imported `a2.07` id.** Assert by id. **Zero repair
  rows authored in `symptomes` or `corps`.**
- **Both `listening` sections carry the blind flag** (`hideLines: true`, or
  `audio.audioFirst: true` if `hideLines` has not landed), and **their questions ask how
  many / when, never what was heard.**
- **Every `listening` line stands alone** without the lesson's framing, so a2.35 can lift
  it. Assert that no line contains a back-reference to a scene or a named section.
- **At least 40 percent of authored rows are in the other party's voice.** Compute it,
  assert the ratio, and print the figure.
- **`commonErrors` carries `swipe: true`.**
- **Every `corps` id is below 294**, and the existing six rows at ≥ 294 are still exactly
  six.
- **No scored question hinges on an accent, a cedilla, a capital, a hyphen, an
  apostrophe, word division or a comma**, and no dictée item's only difficulty is any of
  them. **Every `typeIn`, `errorSpot` and dictée item passes the band rule**:
  `fold(answer) !== fold(distractor)` for its most plausible wrong answer.
- **At most one Quebec card**, at `layer: 'more'`, and nothing on it is the answer to a
  scored question.
- **No `table` section. No second `quiz`. No `Scenario.exam`. No `ExamTask` rows.**
- **The conditional is never named or conjugated**, and no job-title feminine is minted.
- Import `hasPlainNasalFor` and assert your repairs by name in one table, with stored /
  half / final all through the real function.

**Mutation-test**: author a `sante` row, re-teach the contraction, re-author a repair
phrase locally, drop `swipe`, put a `corps` id at 294, hinge a quiz question on an accent,
add a second `quiz`. **Expect two of your mutations to find a weakness rather than confirm
a strength.** A mutation caught by the batch and not the test is a hole in the test.

---

## Settled before you start

- **Theme is `symptomes`.** Nobody edits `a1-24-corps.test.ts`.
- **`avoir mal à` and the contraction are a1.24's.** `depuis` is a2.18's. The repair move
  is a2.07's, imported by id.
- **One lesson.** The pharmacy is folded.
- **`openPrompt` is not funded** and there is no timer anywhere in the app.
- **All 35 section types render.** Nothing here is NEEDS-ENGINEERING.
- **France-standard, one Quebec card, colour only.**
- `lessonIds: []`. First build, version starts at 1.

## UNVERIFIED

- **Every Postgres figure in the design doc and in this prompt.** The supervisor did not
  query the database. Run the probe block above first; the `symptomes` count is the one
  that decides whether you author 75 rows or 25.
- **Whether `a2.07` is merged and its repair-move ids are published.** Hard prerequisite.
  If it is not, stop and say so.
- **Whether `listening.hideLines` has landed.** Verified absent from `schema.ts` on
  2026-08-15. Check before you author; use the `audioFirst` fallback if not.
- **Whether two `scenario` sections render on a device.** Nobody has run it.
- **The identity block against Postgres.** The seed and the spine agree; the database has
  not been asked.
- ~~**Medical-content policy, and it is a genuine gap.**~~ **CLOSED 2026-08-15.** The
  design doc's question 7 was escalated as item 5 and **Paul answered it: option B, one
  in-lesson `cardDeck` card at `layer: 'more'`, and it is the house position for
  health-adjacent content.** It is a build requirement now, specified under "The
  disclaimer card", and it is **not** in the roundup or the unit description. The
  defensive authoring rules stand permanently: no invented or real drug names, no dosage
  that is medically wrong even as an example, generic instructions only
  (`un comprimé matin et soir`). **Nothing here is open and you escalate nothing.**
- Baseline test count and current mission range. The 24-section shape is a convention that
  was never measured.

---

## Where this prompt overrules the design

Say in your report if you disagree with any of these; do not silently reinstate them.

| design doc said | this prompt says | authority |
|---|---|---|
| Author 55 to 65 rows into `sante`, and amend `a1-24-corps.test.ts` to scope its assertion (its §8 q1, recommending option (a)) | Author into `symptomes`. Nobody edits that test. | collation 1.11, C7, §5 |
| `sante` must join `SEED_CUT.themes` or every row must be carried explicitly, else cards render blank offline (its §7.2, §9.8) | Not true. `SEED_CUT.tracks` includes `a2` and pulls every lesson-referenced item. The cost is empty theme browsing, not blank cards, and the cut edit is a separate band-level diff. | collation 1.2 |
| `s20-open`, a new `openPrompt` section with a countdown | Dropped. Not funded, and no timer exists in the app. | collation §3.2, C2, 1.9 |
| `s16-quebec` as an `examples` section of France/Quebec pairs | One card, `layer: 'more'`, never scored. **Now `s17-quebec` after the renumber.** | collation C3 |
| The whole-band absence claims and DB row counts | All unverified. Probe first. | collation §9 |
| The medical disclaimer is an open question to escalate (its q7) | **A required section.** `s14-notmedical`, one `cardDeck` card, `layer: 'more'`, after `s13-dosetrap`. 24 sections, not 23. | Paul, 2026-08-15, decision item 5, option B |

---

## What to report

Doctrine §F and Corrections §12, plus:

- **What the probe actually found in `symptomes`.** If Postgres already holds a health
  corpus the seed never showed, that is the headline of the whole build and it changes
  three other units' assumptions about seed-scoped absence claims.
- **Whether two `scenario` sections render.** Six other units are waiting on this answer,
  and a2.07 is waiting on the same check for `scene`.
- **Whether `listening.hideLines` existed when you authored**, and if not, which sections
  are weaker on the `audioFirst` fallback and should be revisited.
- **How you kept `avoir mal à` inside the lesson without teaching it**, with the section
  ids where it appears and the wording you used to cite `a1.24`. This is the hardest
  judgement call in the build and the next situational unit with a strong prereq will copy
  whatever you land on.
- **The ratio of authored rows in the other party's voice**, as a figure, against the
  40 percent floor.
- **What the missing `openPrompt` cost this unit**, in one paragraph, as evidence for the
  next band's funding decision.
- **The disclaimer card as you shipped it**, quoted in full. Not as an escalation and
  not as a recommendation: it is settled, and your card becomes the template the next
  health-adjacent unit copies. Say where it landed, whether `layer: 'more'` did what it
  was supposed to on a device (a learner on the core path should walk past it), and
  whether closing act 3 with it changed how `s13-dosetrap` reads.
- What you folded from the pharmacy and what you dropped.
- Which of this prompt's claims turned out to be wrong. Every A2 build has found at least
  three.

---

*This file is `.md` and therefore gitignored in this repo. It needs `git add -f` to be
tracked.*
