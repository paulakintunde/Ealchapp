# Build a2.29 "At the Hotel"

Trail seq **28** of 35. Fifth of the eight situational units (seq 24 to 31), and the
one the last three cite. You are not building a paradigm lesson. You are building the
missing half of a conversation, and you are building the register ladder that a2.30,
a2.31 and a2.32 will quote instead of inventing their own.

**Your unit WAS blocked on a decision that was Paul's. It is answered.** Item 1 of
`A2-SITUATIONS/12-DECISIONS-FOR-PAUL.md` was accepted on **2026-08-15, option A**: the
a2.13 amendment is approved, so **you build the full ladder, with all five softeners**.
This prompt used to branch into PATH A and PATH R; it does not any more. PATH R is dead
and is kept only as a struck-out note. **Do not build a fallback and do not hold act 3
back for an answer.**

**Read first, in this order:**

1. `ealch-admin/A2-SITUATIONS/10-BAND-COLLATION-AND-DECISIONS.md`. The settled band
   register. It outranks this prompt, and it outranks your design doc.
2. `ealch-admin/A2-SITUATIONS/12-DECISIONS-FOR-PAUL.md`. **All five are answered.**
   Item 1 is yours and it went your way. Then
   `ealch-admin/A2-SITUATIONS/05-A2-13-AMENDMENT-SPEC.md`: **what a2.13 will say once
   the amendment lands**, string by string. Read it so you know what your lesson is
   building on top of. It is not yours to write and not yours to apply.
3. `ealch-admin/A2-SITUATIONS/28-a2.29-hotel-DESIGN.md`. Your design. Good, and wrong
   in four places that are listed at the end of this file.
4. `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`,
   `A2-BRIEF-CORRECTIONS.md`.
5. **`a2.13` as shipped** (seq 7, your prereq: vouloir, pouvoir, devoir). Not its
   brief. The shipped lesson, in `seed.json`, and its test
   `ealch-v2/src/content/a2-13-modaux.test.ts`.
6. **`a2.07` as shipped** (seq 24, the band opener). It owns the repair move and you
   import its rows by id. If a2.07 is not merged, stop: you cannot cite ids that do
   not exist.
7. `ealch-admin/A2-23-PRONOMINAUX-PASSE-PROMPT.md` for the house build shape.

---

## Band consistency pass, 2026-08-15

*Eight prompts were written in parallel by eight agents who could not see each other's
work. These corrections were applied afterwards, across all eight. They overrule
anything below them and anything in the collation that disagrees.*

| # | What changed in THIS prompt | Authority |
|---|---|---|
| 1 | **You were wrong about blocking step 4 and it is the most material change here.** This prompt said step 4 does not gate you while stating in the same sentence that you plan two `scenario` sections. It gates you, twice over: `scenario` x2, and mission 4 is the product's **first `table` of any kind**. See the correction box in the blocking-sequence section, which now carries both checks and a named single-section fallback for each. | collation §1.10 and step 4, both corrected |
| 2 | **The answer fold.** Quiz grading uses `fold()` in `answer.logic.ts:32`, not `normalizeFr`. "An accent, a cedilla or a comma" was incomplete and "hyphens fold only where `normalizeFr` runs" was wrong. Corrected under **Quiz notes**; the ladder is the band's most hyphen- and elision-dense material, so this lands hardest on you. | `03-ANSWER-FOLD-FACT.md` |
| 3 | **BAND RULE, new.** Fold the expected answer and the most plausible wrong answer before authoring any `typeIn`, `errorSpot` or dictée item; **if they collide, move it to `mcq`/`listenChoose`.** | band rule, all eight prompts |
| 4 | **`corpus:probe` has no `--count` flag.** Removed from Pre-flight and §UNVERIFIED. `--theme` already prints the count. | `scripts/probe-corpus.ts` |
| 5 | **`practice` is MANDATORY.** `lesson-contract.test.ts:505` mirrors the publish gate and fails a non-`assessment` lesson with no `practice`, empty `practice.itemIds`, or empty `Lesson.itemIds`. Your mission 20 already says `practice` renders the speaking drill regardless of `skill`; it is also not optional. | `ealch-v2/src/content/lesson-contract.test.ts:505-519`, verified |
| 6 | **Your two a2.13 findings were verified and have been written into `12-DECISIONS-FOR-PAUL.md`.** Four strings across three sections (`s17-polite` x2, `s24-notmine`, `s31-quiz`) is confirmed against `seed.json`; and `a2-13-modaux.test.ts:249`'s `FORBIDDEN_CONDITIONAL` list, asserted over a2.13's own strings, is confirmed to forbid `pourriez` and `aimerais`, so an approved amendment may not name the new forms. Both are now item 1's text, not just yours. | verified by the consistency pass |
| 7 | **The repair-move id file is `04-REPAIR-MOVE-IDS.md`**, not `11-` (taken by `11-DESIGN-MOCK-PROMPT.md`). Contract: six rows, `au-restaurant`, contiguous, domain-neutral, face-cost order, frozen at publication. Absent file means a2.07 has not landed and step 6 is not done. | filename collision |
| 8 | **Your rung names and five-clause citation contract have been propagated verbatim into a2.30, a2.31 and a2.32**, which were written in parallel and could not have quoted them. All three now carry the three rung names and the contract. Nothing changes on your side. | B2, consistency pass |
| 9 | **PAUL ANSWERED ITEM 1 ON 2026-08-15: option A, the amendment is approved. PATH A IS THE PATH.** This prompt branched; it no longer does. PATH R has been struck out and survives only as a one-paragraph note of what was considered and why it is dead. **You are not blocked, you do not choose, and you do not build a fallback.** Blocking step 5 is done. The amendment itself is specified in `05-A2-13-AMENDMENT-SPEC.md` and is **not yours to write or apply**. | Paul, 2026-08-15 |

---

## Before you start: the band's blocking sequence

Collation §6. **All six steps gate you.** Verify each, do not assume:

| step | what | how you check it is done |
|---|---|---|
| 1 | corpus probe on the 17 candidate themes | `hebergement` has a published row count you can quote |
| 2 | theme re-map landed | `author-full-curriculum-spine.ts` a2.29 entry says `themes: ['hebergement']`, `spine-drift.test.ts` green |
| 3 | `listening.hideLines` built | `grep hideLines ealch-v2/src/content/schema.ts` returns a hit. **Measured 2026-08-15: it returns nothing.** |
| **4** | **device check: repeated `scenario`, and `table`** | **see the correction below. This DOES gate you.** |
| ~~5~~ | ~~Paul answered item 1~~ | **DONE, 2026-08-15. Option A, the amendment is approved. You build the full ladder.** |
| 6 | a2.07 merged and its repair-move item ids published | you have the id list to cite |

> ### CORRECTION, 2026-08-15: step 4 gates you, and this prompt said it did not
>
> This prompt originally read: *"Step 4 does not gate you: you plan one `scene` and two
> `scenario` sections, and repeated `scenario` is a2.28's exposure, not yours."* The
> premise contradicts the conclusion. **Two `scenario` sections in one lesson is the
> exposure, whoever authors it.** a2.28 having the same exposure does not transfer
> yours to it; the check is per lesson, because what is untested is the renderer
> drawing a second section of that type in a single `sections` array. The collation's
> blocking step 4 listed only a2.07 and a2.28 and has been corrected to list **a2.07,
> a2.28, a2.29 and a2.32**.
>
> **You have two exposures, not one:**
>
> 1. **`scenario` x2** — missions 17 (check-in, 5 turns) and 18 (the complaint, 6
>    turns). No shipped lesson repeats `scenario`.
> 2. **`table` at all** — mission 4 is **the first `table` section in the product**,
>    across all 64 shipped lessons. You already say this at mission 4. It is not a
>    repetition risk, it is a never-rendered-once risk, which is worse.
>
> **Run the check yourself before you author, about fifteen minutes.** Build a
> throwaway local lesson with two `scenario` sections and one `table` section and
> render it on a Pixel 6. Do not wait on a2.28's result and do not inherit it.
>
> **Single-section fallbacks, and name in your report which you took:**
>
> - **If the second `scenario` does not draw:** merge missions 17 and 18 into **one
>   `scenario` of eight to nine turns**, check-in running straight into the complaint
>   with the same receptionist. The escalation still happens, it happens later in one
>   arc, and the lesson loses a section boundary rather than a teaching move. Keep it
>   linear either way: `ScenarioView` walks turns in order and `alts` is an
>   accepted-answer set, not a branch.
> - **If `table` does not draw:** mission 4 becomes a **`tapTable`**, which ships
>   everywhere, and mission 5 (the audible nine) folds into it as the `detail` on each
>   cell. Three columns is inside the six-column cap (a2.12) and the header glyph
>   budget (a2.16), so the fallback costs one mission, not the ladder.
>
> A failed check is a merge, never a redesign.

If step 3 has not landed when you reach act 1, do not author around it. A `listening`
section without `hideLines` prints `l.fr` and `l.en` beside the play button
(`MissionRich.tsx:1949`), so every listening mission you write is a reading mission,
and your two number-perception missions are the point of the unit's reception half.

---

## Identity

Quoted from `ealch-admin/scripts/author-full-curriculum-spine.ts:794-802`, verified
2026-08-15, and byte-identical to the `a2.29` unit row in `seed.json`:

```
a2.29   seq 28   level a2   track a2
  title:  At the Hotel
  sub:    À l'hôtel
  gloss:  check-in, requests & complaints
  canDo:  Can check in, make a request and raise a problem politely
  themes: ['voyage']        <- WRONG. See below.
  prereqUnitIds: ['a2.13']
  lessonIds:     []          <- first build, version starts at 1
```

The load-bearing word in the `canDo` is the last one. Check-in and requests are shared
with four of the other seven units. **Raise a problem politely** is shared with none of
them, and it is what you own.

### Your theme is a phantom, and yours is one of only two units that has no other

`voyage` holds **zero rows** and has **no `themeMeta` entry**
(`ealch-v2/src/content/themeMeta.ts`, 124 keys, verified). It is not thin. It does not
exist. a2.29 and a2.32 are the two units in the band whose *only* theme is a phantom,
which is why collation §6 step 2 exists.

```
AUTHOR INTO:  hebergement          (has themeMeta: "L'hébergement" / "Accommodation")
IMPORT FROM:  tourisme, deplacements, nombres, heure-et-date, salutations, alphabet
DO NOT CREATE: voyage
```

**The spine needs amending and you do not do it with the spine script.** Edit the
`themes` array in `author-full-curriculum-spine.ts` from `['voyage']` to
`['hebergement']`, let your merge script carry the unit row, and keep
`spine-drift.test.ts` green in the same commit. A naive re-run of the spine script
would revert 74 of 75 unit titles; that is what the drift test is for.

**`hebergement` is 0 rows in `seed.json` and reportedly 312 in Postgres**
(UNVERIFIED, the design agent's figure, the supervisor did not query the DB). Both
halves matter. Anyone who measures this unit against the seed will conclude the hotel
corpus does not exist and author a hundred duplicate rows. Measure against Postgres:

```bash
cd ealch-admin
pnpm corpus:probe -- --theme hebergement
pnpm corpus:probe -- --theme tourisme
pnpm content:parity
```

**There is no `--count` flag.** *(Corrected 2026-08-15 by the band consistency pass;
this prompt copied the collation's version and three agents found it independently.)*
`scripts/probe-corpus.ts` parses exactly `--theme`, `--words`, `--tokens` and `--unit`
and silently ignores the rest, so `--count` was doing nothing rather than failing.
**`--theme` already prints the count** on its first line: `published in postgres: <N>
present in seed: <M>`, then a per-prefix `count=` / `max=` / `NEXT FREE ID` block.

`content:parity` is what tells you whether those rows are `published`. **Interpretation
rule, settled by the collation:** a published row is REACHABLE and must be imported by
`itemId`, never re-authored. An unpublished row is invisible to learners and may be
treated as absent.

---

## The decision this build WAS blocked on, and it is answered

> **ANSWERED 2026-08-15. Paul took option A: the a2.13 amendment is approved.**
> **You build the full ladder. There is one path and it is the one below.**
>
> This section used to branch into PATH A and PATH R and ask you to hold act 3 until
> the answer landed. It does not any more. Build act 3 with the rest of the lesson.

### What a2.13 actually shipped

`12-DECISIONS-FOR-PAUL.md` says three strings in two sections. **Measured in
`seed.json` 2026-08-15: it is four strings across three sections.** Correct the
decision doc rather than working from it:

| section | field | string |
|---|---|---|
| `s17-polite` (groupDrill) | `say` | "Two cards, and that is the whole of this family you are getting. Learn them the way you learned bonjour." |
| `s17-polite` | `check.why` | "No. It belongs to a family this course has not reached and its name comes much later. Two forms, learned as pieces, and nothing else from that family until then." |
| `s24-notmine` (cardDeck) | card body | "You have two forms of it and they are the two you need. The family they belong to, and what it is for, is past the end of this level entirely. Nothing here needs it." |
| `s31-quiz` (quiz) | `typeIn.why` | "The only other one worth carrying. Two fixed forms, and nothing else from that family until much later." |

All four are amended. **The amendment is specified in full in
`05-A2-13-AMENDMENT-SPEC.md`**, which quotes each current string by JSON path,
proposes each replacement, and verifies every one against `a2-13-modaux.test.ts`, the
jargon guard and the density validator. If an amendment described as three strings ever
lands and the fourth is left in place, the lesson still contradicts you: check the four
before you rely on them.

### The fact that decides it

`pourriez-vous` is **already published upstream of a2.13**, in three rows a learner
meets in the SONS band (verified in `seed.json`):

```
fr.sons.alphabet.219   Pourriez-vous confirmer l'orthographe de votre ville de naissance ?
fr.sons.alphabet.282   Pourriez-vous répéter la troisième lettre, s'il vous plaît ?
fr.sons.alphabet.422   Pourriez-vous épeler le nom de la rue pour moi ?
```

a2.13 is not defending a clean boundary. It is describing one that was already false
when it shipped.

### The full ladder — build this, it is the only path

*(This was PATH A while item 1 was open. Item 1 is closed and it is now simply the
instruction.)*

You take five softeners as **unnamed lexis**, never as a family and never as a tense:

```
je voudrais           already the learner's, from a2.13. Inherit, do not reteach.
est-ce que je peux    a2.13's permission sense of pouvoir. Present tense. Legal on any path.
j'aimerais            IMPORT (38 PG rows, UNVERIFIED). Do not author.
pourriez-vous         IMPORT (22 PG rows / 3 in seed, verified above). Do not author.
ce serait possible de AUTHOR (0 rows, UNVERIFIED). Genuine gap.
```

**The amendment is a separate commit, and it is NOT YOURS AT ALL.** It has been
specified for you, in `05-A2-13-AMENDMENT-SPEC.md`: four strings quoted verbatim by
JSON path, four replacements proposed, each verified against the suite. **Do not write
your own wording, do not edit `seed.json`, and do not publish.** Read the spec so you
know exactly what a2.13 will say when your lesson ships, then build against that.

The constraints it was written under, measured from `a2-13-modaux.test.ts`, and the
reason the wording is not free:

- `FORBIDDEN_CONDITIONAL` (line 249) contains `pourriez` and `aimerais`, and the test
  at line 660 runs it over a2.13's own lesson strings. **The amended copy may not name
  any of the new forms.** It may say the learner will meet a couple more pieces like
  these later, at the hotel; it may not write one of them down.
- The same test asserts `voudrais` and `voudrions` are still present. Keep them.
- Line 668 asserts `s17-polite` or `terms.thePolite` still says "fixed form" or
  "learned whole". Keep that framing; it is the thing that made teaching the forms
  legal in the first place.
- Line 719 asserts `s24-notmine` still exists and still names `a2.14`. Edit card 2's
  body only. Do not remove the section or reorder the deck.
- The jargon guard bans "conditional". The amendment may not name the family either.
- No promise string is asserted verbatim by the test, so the four edits above need no
  test change. Verify that before you rely on it.

Amending shipped content means a publish and a snapshot. `content:publish` is
currently blocked (it would delete `sons.09.l1`, which is seed only). Run
`pnpm content:parity` first. Publishing is not part of your build; hand it to whoever
owns the rollout.

### PATH R is DEAD. Do not build it.

*Kept as one paragraph so the reasoning is not lost, and deliberately not kept as
buildable instructions.*

PATH R was the restricted ladder: the same three rungs and the same missions, but with
`pourriez-vous`, `j'aimerais` and `ce serait possible de` dropped, and with
`fr.sons.alphabet.219 / .282 / .422` left unimported so no flashcard this unit answers
for could carry `pourriez-vous`. It existed only because a2.13 might not have been
amended. It cost rung 1 its "ask again, differently" move, leaving a ladder whose first
rung had one shape. **Paul approved the amendment on 2026-08-15, so the reason for PATH
R no longer exists.** If you find yourself reaching for it, something upstream has gone
wrong: stop and escalate rather than shipping the thin lesson.

### There is one path, and everything in it is now required

The rungs, their names, the reframe, the impersonal frame, the escalation scenario, the
trap, the number-perception missions, the corpus gap you fill, the citation contract
below, **and the five softeners above**. Rung 3's canonical line uses `je voudrais`,
which a2.13 already shipped. **Act 3 is no longer held back for an answer.** Build it
in sequence with the rest.

---

## The teaching problem

### Owns: the escalation ladder, for the whole band

Collation §1.2 and C5 give you "the politeness / register ladder for the band", once,
for all eight units. a2.30, a2.31 and a2.32 quote you. That means your rungs have to
be stable and quotable in the way a2.07's repair move is, so specify them exactly and
publish them as ids.

The learner's real failure is not vocabulary. It is that they have two settings,
apologetic and furious, because nobody taught them the middle one. Rung 2 is the
missing rung and it is what the unit exists for.

### The reframe

> **Take the person out of the sentence.**

Repeat it verbatim in at least three sections (the density validator). It covers all
three of the canDo's verbs: the receptionist's formulas have no `je`
(`le petit-déjeuner est servi de sept heures à dix heures`), the request hides the
demand, and the complaint names the room rather than the human.

Rejected, and record them: "Name the problem, not the person" (complaint only, leaves
check-in homeless); "Ask twice before you ask for the manager" (advice, not a rule);
"The polite word goes at the front" (false: `Excusez-moi` does, `s'il vous plaît`
does not).

### THE LADDER, fixed for the band

Three rungs, three moves. The rung names are learner-facing English, no jargon, and
they are the strings the other units quote:

```
Rung 1   Ask once, softly.
Rung 2   Say it again, without the person.
Rung 3   Ask for the person who can fix it.
```

The three moves are the columns: **the request** (asking for a thing), **the fault
report** (naming a room problem), **the escalation** (getting someone else involved).
Nine cells, and stop.

Canonical lines. Every one of these is a corpus row in `hebergement` with an id, and
every card quotes it by `itemId`. This is collation §7.1's rule, generalised from
a2.07: prose in a card body is not reusable, a row with an id is.

```
Rung 1, request        Est-ce que je peux avoir une serviette, s'il vous plaît ?
Rung 1, request        Pourriez-vous m'apporter une serviette, s'il vous plaît ?
Rung 1, fault report   Excusez-moi, il y a un problème avec la douche.
Rung 1, opener         Excusez-moi de vous déranger.

Rung 2, restatement    C'est toujours le même problème.
Rung 2, restatement    Ça fait deux fois que je demande.
Rung 2, restatement    Je vous ai demandé une serviette il y a une heure.
Rung 2, fault report   L'eau chaude ne fonctionne toujours pas.

Rung 3                 Je voudrais parler au responsable, s'il vous plaît.
Rung 3, brake          (the card that says you do not start here)
```

**The citation contract, and it binds a2.30, a2.31 and a2.32:**

1. They quote the three rung names **verbatim**. A paraphrase is a second ladder.
2. They reuse your rung rows by `itemId`. They author no rung lines of their own.
3. They may add their own column, their own move, filled with their own vocabulary.
4. They may not rename a rung, add a fourth, or reorder them.
5. Your build report publishes the rung-to-`itemId` table as a short list they can
   paste, exactly as a2.07 publishes its repair-move ids.

### The corpus gap and the pedagogical gap are the same gap

This is the justification for the unit and it should appear in your report:

| line | rows | measured against |
|---|---|---|
| `parler au responsable` | 0 | seed (supervisor) and DB (agent). **UNVERIFIED on DB** |
| `ça ne marche pas` | 0 | seed (supervisor) and DB (agent). **UNVERIFIED on DB** |
| `désolé de vous déranger` | 0 | seed (supervisor) and DB (agent). **UNVERIFIED on DB** |
| `vous avez une réservation` | 0 | DB (agent). **UNVERIFIED** |
| `ce serait possible de` | 0 | DB (agent). **UNVERIFIED** |

Re-run before you author, and quote the output in the corpus header:

```bash
pnpm corpus:probe -- --tokens "parler au responsable,ça ne marche pas,désolé de vous déranger,vous avez une réservation,ce serait possible de,pourriez-vous,j'aimerais,il y a un problème,ne fonctionne pas"
```

The probe does not strip accents. Probe with real orthography or you will get a false
ABSENT. It also hides existing rows behind a `--tokens` search that a `--theme` search
would show (the a2.12 finding), so run both.

The rung 2 and rung 3 lines being absent is not a coincidence. The corpus authored the
learner's half of every situation and left the middle of every argument out. Collation
§1.5 sets the band minimum: **at least 40 percent of your newly authored rows are in
the voice of the person the learner is talking to.** Here that is the receptionist.

---

## The trap

**English transfer builds a rude sentence out of your own prereq.**

```
Vous devez réparer la douche.        grammatical, built from a2.13's modal frame, and rude
Excusez-moi, il y a un problème avec la douche.
```

This is the best trap available in the band, because the learner produces the wrong
answer *because* of the lesson they were taught four units ago. It is `trapDrill`, and
it uses the **stepped** shape (`rule > cards > audio > drill`, `swipe`, an `audio`
spec, a `say`, and a GATED drill step). The stacked variant hides the gate, the audio
and the sub-mission number. `lesson-contract.test.ts` enforces the stepped shape and
caught both of a2.17's.

Second trap, and it is the reason act 4 needs a listening mission and not another
drill: **the numbers.** `le troisième étage` is the fourth floor because
`le rez-de-chaussée` is not counted; `quatorze heures` is 2pm and an English speaker
hears "fourteen"; `soixante-quinze` against `quatre-vingt-cinq` in a room number.
`nombres` (448 rows, all in seed) and `heure-et-date` (471, all in seed) are fully
available, so this costs zero new corpus.

---

## What is left to neighbours

- **The repair move is a2.07's**, once, for all eight units. Collation §1.6. **You
  author zero repair rows.** Cite a2.07 by unit id in a `cardDeck` and reuse its rows
  by `itemId` from the list its build report publishes. Eight independent authorings
  of "Pardon, vous pouvez répéter ?" would break the flashcard hub's
  one-card-per-`fr`-per-theme assumption.
- **Money and price reception are a2.26's.** The hotel bill moment cites a2.26. You do
  not teach a number arriving at speed as a *price*; your numbers are rooms, floors,
  hours.
- **Fault description is a2.32's.** Settled by collation C5, and this is the boundary
  the a2.32 builder must not be able to contradict, so state it in your report in
  these words:

  > **a2.29 owns the impersonal complaint frame and the escalation ladder. a2.32 owns
  > the diagnostic vocabulary of a malfunction (`ne s'allume pas`, `ça bugue`,
  > `redémarrer`). a2.29 describes a room problem: something is missing, broken or
  > noisy. It authors no device-fault vocabulary.**

  Two consequences your design got wrong and this prompt settles:

  1. **You do not cite a2.32 forward.** It ships at seq 31, three units after you.
     Collation §1.3: a unit cannot quote a unit that ships after it. Where the design
     says "cites a2.32 for the vocabulary of a device fault", say nothing instead. The
     citation runs the other way: a2.32 cites you for the ladder.
  2. **`ne fonctionne pas` is an import, not an ownership question.** It is reportedly
     14 published rows (UNVERIFIED, probe it). Both units import it. Neither authors
     it. There is nothing to hand over.
- **`pouvoir`, `vouloir`, `devoir` are a2.13's, shipped.** Lean on the modal plus
  infinitive frame and the permission sense of `pouvoir`. One recap line. Do not
  reconjugate anything.
- **`depuis` is a2.18's**, seq 14, shipped. Not reteached anywhere in this band.
- **`y` and `en` are a2.25's, which has zero lessons.** Collation C8: **no unit in
  this band may build a teaching move on `y` or `en`.** `j'y vais` style content is
  unanalysed lexis or it is absent.
- **Elision is `sons.07`'s.** Quoted, not taught. `l'hôtel`, `l'ascenseur`,
  `l'addition`.
- **Spelling a name aloud is `sons.alphabet`'s, and it already did it in a hotel
  frame.** Call back to it, do not rebuild it.
- **The imperative is nobody's** (decision item 2, still open). Do not teach it. If
  the receptionist says `Suivez-moi` it is unanalysed lexis in an AI turn.

---

## The phone question: folded, not built

Your design proposed booking by phone as a second lesson or a simulated call. **Both
are out.** One lesson per unit, band-wide (collation C6): `den.tsx:169` pushes
`lessonIds[0]` and a second lesson is unreachable from the Den.

**Folded in** (the strongest third, per C6):

- one `listening` mission framed as a phone call, where the stimulus is the
  receptionist's formulaic speech and the questions are on the numbers;
- one `scenario` turn where the learner spells a name back, calling forward from the
  SONS alphabet rows.

**Dropped:** the telephone audio filter (2 to 3 days of native audio work in `tts.ts`
plus a device pass), `SceneSetting.ambience` (typed, read by nothing:
`ScenePlayer.tsx` never reads it), a no-text turn mode, and a second lesson. Name all
four in the report as dropped, so the decision is legible later.

---

## Corpus plan

**Theme:** `hebergement`. Ids continue from the highest existing row (reportedly
`fr.a2.hebergement.073`, UNVERIFIED, so **probe before you mint**). Take a contiguous
block and **re-check the row COUNT after your apply, not the maximum**. A concurrent
build can land below your top; that is the a1.19 / a1.20 collision and it has now
happened twice.

**Target: roughly 50 to 64 new rows.** Your design said 55 to 70; the repair-move
rows (about 6) come out because a2.07 owns them.

| what | kind | count | note |
|---|---|---|---|
| Ladder rungs 2 and 3 | sentence | ~14 | the genuine gap, and yours |
| Impersonal complaint frames | sentence | ~12 | `il y a un problème` exists; hotel-specific ones do not |
| Politeness chunks not yet published | phrase | ~2 to 4 | `ce serait possible de` and similar. Required, not optional |
| Receptionist formulas | sentence | ~10 | check-in delivery, breakfast hours, floor and room |
| Quebec divergence | word | 1 | see below |
| Hotel nouns | word | **0** | all imported |
| Repair move | sentence | **0** | a2.07's |

**Imports, named in `itemIds` and never re-authored:** the hotel headwords from
`hebergement` 001 to 053, `heure-et-date` and `nombres` for the number missions,
a2.07's repair ids, and these, whose seed status is measured:

```
PRESENT in seed:   fr.a1.salutations.353  "Pardon, pouvez-vous répéter la question ?"
                   fr.a1.salutations.355  "Excusez-moi de vous déranger si tôt."
                   fr.sons.alphabet.431   "Ça s'écrit comment, madame?"
NOT in the seed cut, so probe Postgres before citing:
                   fr.sons.alphabet.016 / .028
                   fr.a2.expressions-frequentes.072 / .073 / .076 / .077
                   fr.a1.questions.328
                   every fr.a2.hebergement.* id your design quotes
```

The seed is a cut. An id missing from it is not an id that does not exist. Your merge
must carry every imported row your lesson references or the cards render empty.

**Do not name `fr.a2.hebergement.011` or `.012`.** `.012` is
"On utilise le conditionnel pour demander poliment.", a metalinguistic rule statement
stored as a corpus sentence. Naming it draws a flashcard that teaches French grammar
terminology to an A2 learner, in a lesson whose test bans the word.

**Do not author a ninth `la chambre` or a fifth `l'hôtel`.** `l'hôtel` reportedly
exists 8 times across 8 themes with 4 different respellings; `la chambre` 9 times with
7. Import every headword the probe returns. One careless authoring degrades
`flashhub-coverage.test.ts`.

**Quebec: one card, layer `more`, never an answer.** Collation C3 allows each unit *at
most one* `cardDeck` card naming a Quebec divergence. Your design wanted four. Take
one, and take `le déjeuner` = breakfast, which is the only one that changes what a
learner does at a hotel. Nothing on that card is ever the answer to a scored question,
and your price and time listening must not require it. If you think this one qualifies
for the a2.26 answer-changing exception (collation §7.6 argues the principle), raise
it with the supervisor. Do not take it unilaterally.

**a1.03 drift:** carried rows join a1.03's measured ending population even when they
were imports rather than authorings (the a1.23 and a1.26 finding). Any `-e` noun you
carry can move a1.03's statistic. Re-measure a1.03 after apply. An import is not inert.

---

## The section plan

22 missions, 6 acts, one quiz. The mission-journey container is kept for three reasons
that are about the machine and not about habit: `den.tsx` opens `lessonIds[0]` and
`MissionPager` walks `sections`, so there is no other container; `deckTranche` is the
only path from a lesson into spaced repetition and it is index-aligned with `acts`; and
the `errorTriggers` to `drills` to `retest` loop is the only remediation the app has,
which a situational lesson needs more than a paradigm lesson does, because there is no
rule to re-read.

**Every section below renders today.** All 35 `SECTION_TYPES` have a live branch:
`MissionSection.tsx` cases 16 of them and falls through at line 647 to `SectionView`
in `LessonSection.tsx`, which cases 18 more. `table`, `tapTable`, `quiz`, `examples`
and `roundup` all draw inside a mission via that fallthrough. Do not mark anything
NEEDS-ENGINEERING.

**Act 1, the encounter that went wrong (1 to 3)**

| # | type | what it does |
|---|---|---|
| 1 | `scene` | Late arrival, no hot water. The learner picks between `Vous devez réparer la douche` and `Excusez-moi, il y a un problème avec la douche`. A `break` beat puts them side by side. Both are grammatical. One is built out of a2.13's own frame, which is why the learner reaches for it. |
| 2 | `goals` | Four outcomes, stated as things done, not forms known. |
| 3 | `listening` | The receptionist's four formulas at speed, questions on the numbers only. **`hideLines: true`.** Each question sets `say` with the French line; never rely on the `opts[correct]` fallback (the a1.25 bug, documented on `QuizQuestion.say`). |

**Act 2, the ladder (4 to 8). This replaces "the paradigm".**

| # | type | what it does |
|---|---|---|
| 4 | `table` | Three rungs by three moves. Nine cells and stop. This will be the **first `table` in the product**: zero `table` sections exist across all 64 shipped lessons, so device-check it on the Pixel 6 before you build on it. If it disappoints, the in-flow version is a `tapTable` and the full grid moves to the reference sheet. |
| 5 | `tapTable` | The same nine, audible. Headers have a glyph budget (a2.16) and the table caps at 6 columns (a2.12). Three columns is inside both; verify anyway. |
| 6 | `groupDrill` | Rung 1 produced against a prompt. Groups named by function: "asking for a thing", "reporting a fault". |
| 7 | `groupDrill` | **Rung 2, the missing rung.** The whole lesson exists for this mission. |
| 8 | `groupDrill` | Rung 3 and its brake: you do not start here. |

**Act 3, the chunks as lexis (9 to 13). The heaviest act, and the one the decision
touches.**

| # | type | what it does |
|---|---|---|
| 9 | `examples` | Four pairs on a2.13's `s16-register` model, extended. Cite a2.13 by unit id so the learner sees the through-line. |
| 10 | `cardDeck` | The softeners, learned whole, never named as a family. **Five cards.** Hint text ellipsises at 60 characters (a2.20). |
| 11 | `groupDrill` | The impersonal frame as a transform: a personal accusation in, an impersonal report out. This is where the reframe earns its keep, and it is path-independent. |
| 12 | `cardDeck` | `Excusez-moi de vous déranger`, and why French front-loads the apology where English tucks it into the middle. |
| 13 | `cardDeck` | Quebec, **one card**, `layer: 'more'`. |

**Act 4, the trap (14 to 16)**

| # | type | what it does |
|---|---|---|
| 14 | `trapDrill` | English-transfer politeness, stepped shape, `rule` as the opening step. |
| 15 | `commonErrors` | Four ways this comes apart. **Must set `swipe`** or it falls to the shared fallback: two blank missions have shipped from exactly this (`MissionSection.tsx:618-635`). |
| 16 | `listening` | Number perception under load: room number, floor, breakfast window, check-in hour. **`hideLines: true`.** |

**Act 5, production (17 to 20)**

| # | type | what it does |
|---|---|---|
| 17 | `scenario` | **Check-in.** 5 turns. Every turn carries `userEn` and 2 to 3 `alts`; `stt.listen()` re-scores the transcript against every accepted answer, best match wins. |
| 18 | `scenario` | **The complaint, escalated.** 6 turns. **Keep it linear.** `ScenarioView` walks turns in order and `alts` is an accepted-answer set, not a branch. The escalation comes out of the learner because the *receptionist* refuses: the AI turn 2 is a refusal ("Je suis désolée, c'est complet" / "je ne peux rien faire ce soir") and turn 4 deflects. That forces rungs 2 and 3 with no branching renderer. This is the mission the unit is for. |
| 19 | `dictation` | The four receptionist formulas, **word mode**. Letter-tile mode is unusable past ~16 letters and these are long. |
| 20 | `practice` | Over the ladder's nine lines. `practice` renders the SPEAKING drill regardless of `skill`, so `skill: 'write'` is silently a lie; author `speak` and give every named item its `voiceflash`. |

**Act 6, measure and close (21 to 22)**

| # | type | what it does |
|---|---|---|
| 21 | `reviewDeck` + `progressCheck` | Leitner close-out, then the standing card. |
| 22 | `quiz` | **One quiz.** 6 rounds by 5, `passMark: 70`, `roundFailThreshold` set, each round `targets` an errorTrigger. Roughly `mcq` 9, `typeIn` 9, `errorSpot` 7, `listenChoose` 5. Every question carries `why` and `ref`. |
| (last) | `roundup` | Closing card. |

Plus, not in `sections`: 6 `errorTriggers`, ~8 `LessonDrill`s, one `ReferenceSheet`
with **no `cheatSheet` inside it** (it draws its title and nothing else), `terms` ~9,
and `deckTranche` in 6 slices index-aligned with the acts.

**Two constraints on your listening and your scenario, from collation §1.4 and §7.2.**
a2.35 (Bilan A2) has a2.27 and a2.32 as prereqs and will lift this band's reception
material. Author every `listening` line so it makes sense **without your lesson's
framing**, and author scenario 18 so it can be run as a standalone role play. This
costs nothing now and is expensive to retrofit.

---

## Layout and scene

- **The two ways to say it belong on one screen**, `Vous devez réparer la douche`
  above `Excusez-moi, il y a un problème avec la douche`. **This is the layout the
  test must assert.** It is the Owns, and split across two screens the lesson becomes
  a vocabulary list.
- **The three rungs belong on one screen, in order**, with the rung names visible.
  Second required layout. A ladder shown one rung per screen is not a ladder.
- **Rung 1 and rung 2 belong adjacent** with the same request in both, so the learner
  sees what changed and what held still.
- **`flex` on a `TX` clips the tail** of a line while the audio speaks it in full. The
  rung table and the scenario bubbles are both long-line surfaces. Put the flex on a
  wrapper `View`, never on the `TX`.
- **The scene bubble tail-clip** fires on a spaced exclamation mark, and hotel copy is
  full of `Excusez-moi !`. Check on device.
- **`U+203F`** renders as a low underscore on the Pixel 6. Do not use the tie in any
  liaison notation here.
- **`hasPlainNasalFor` has three documented blind spots** and will fire on `chambre`
  (`SHAHⁿBR`), `réception` and `climatisation`. Expect noise. Scope any absence claim
  to this lesson, never to the bundle, and do not "fix" other themes' rows from this
  build.

**The scene:** the A2 register, a sentence that dies mid-way. Someone at a front desk
at eleven at night who has already asked once, is not angry, and has no second way of
saying it, so they either apologise again or overshoot. Nobody corrects them. Beats in
a named `SCENE_BEATS` const, prose at `md`, choice and break at `lg`, each with its own
`audio`, break body 24 to 40 words.

---

## Quiz notes

- **What scored surfaces cannot test, corrected 2026-08-15.** *(This prompt said
  "an accent, a cedilla or a comma", then said hyphens fold "only where `normalizeFr`
  runs". The first list was incomplete and the second claim was wrong. Authority:
  `03-ANSWER-FOLD-FACT.md`.)* Quiz `typeIn` and `errorSpot` are graded by
  `matchesAccept`, which calls **`fold()` in `ealch-v2/src/content/answer.logic.ts:32`**
  — a second normaliser nobody had read. `fold()` strips **accents, case, punctuation,
  hyphens, the middle dot, both apostrophes and all whitespace.** So no scored surface
  can test:

  | | always passes |
  |---|---|
  | accent, cedilla | `réservé` = `reserve`, `ça` = `ca` |
  | capital | `Excusez` = `excusez` |
  | hyphen | `Excusez-moi` = `Excusez moi`, `pourriez-vous` = `pourriez vous` |
  | apostrophe, elision | `l'eau` = `leau`, `n'est` = `nest` |
  | word division | `s'il vous plaît` = `silvousplait` |
  | comma, punctuation | `Excusez-moi, il y a...` = `Excusez moi il y a...` |

  **Your ladder is the band's most hyphen- and elision-dense material** —
  `Excusez-moi`, `Excusez-moi de vous déranger`, `pourriez-vous`, `qu'est-ce que`, `il
  y a` — so read this list before you write a single question. The dictée is no looser:
  `normalizeFr` (one render-side caller, `MissionRich.tsx:1385`) strips the same marks,
  so **do not author a dictée whose only difficulty is a hyphen or an apostrophe.** And
  a `typeIn` `accept` array that lists both the hyphenated and unhyphenated form is
  redundant rather than load-bearing; they were already one answer.
- **BAND RULE, and rung 1 against rung 2 is where it bites.** Before authoring any
  `typeIn`, `errorSpot` or dictée item, fold the expected answer **and** the most
  plausible wrong answer. **If they fold to the same string the item tests nothing and
  must be moved to `mcq` or `listenChoose`.** Your rung distinctions are word-choice and
  word-order distinctions, which survive folding, so this should cost you nothing — but
  assert `fold(answer) !== fold(distractor)` over every authored near-miss and prove it.
- **`errorSpot` is your strongest format**, because rudeness is a whole-sentence
  property and free text is the only surface that catches `Vous devez réparer ça`.
- **`typeIn` for producing a rung 2 restatement** from a prompt that says the request
  has already been made once.
- **`listenChoose` needs `say`**, or it speaks the correct option, which means English
  at a French listening question.
- **`errorSpot` and `typeIn` need `prompt` set**, or the learner is asked to fix a
  phrase that never appears on screen (this shipped in a1.16).
- **The quiz shuffles options at runtime; missions render authored order.** Hand
  randomise the mission `groupDrill` checks. Do not bother with the quiz.
- **One quiz per lesson.** A second is silently never rendered.
- Say which questions you wanted and could not write. a2.09's section is the model.

---

## Wiring

```
scripts/author-hotel-batch.ts                  content:hotel
scripts/merge-hotel-into-seed.ts
scripts/data/hotel-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-29-hotel.test.ts
```

Ids from the next free `fr.a2.hebergement.*`, established by probe, not by reading the
seed. Postgres first, seed second. **Never `git checkout seed.json`**: seven other
builders are in that file and reverting it discards their uncommitted work.

The spine `themes` edit ships in the same commit as your merge. `spine-drift.test.ts`
must be green.

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

Always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. The guard holes you will
copy are in `A2-BRIEF-CORRECTIONS.md` §9, §13, §14.1 and §14.3, and all four apply.
Specific to you:

- **The rude line and the impersonal line appear in one section**, adjacent.
- **The three rung names appear in one section, in order**, asserted as exact strings.
  A paraphrase must go red. The other three units inherit these strings.
- **The reframe string appears at least three times**, verbatim.
- **No authored correct line puts the person in the sentence as the target of the
  fault.** Permit `Vous devez...` inside the `scene` choice and inside `errorSpot` as
  the error, and scope the assertion to those two locations by id.
- **Every rung line is an authored corpus row with an id**, asserted by id, and every
  card that shows a rung line resolves it through `itemIds` rather than carrying it as
  prose.
- **Zero repair-move rows are authored**, and a2.07's repair ids are cited by id.
- **`ne s'allume pas`, `ça bugue` and `redémarrer` appear nowhere**, reserving a2.32.
  Guard the thing, not the letters.
- **`y` and `en` as pronouns appear on no teaching surface** (a2.25 has no lesson).
  `en` as a preposition is everywhere in the corpus, so put an innocent sentence in
  your MUST_NOT_FIRE list.
- **The five softeners.** Assert each is present, that each is imported or authored as
  declared, and that **none of them is ever called a family, a tense or a form**.
  (There is no second set of assertions to choose between: PATH R is dead, so do not
  write a test that asserts `pourriez` is absent. Such a test would now go red against
  the lesson you were told to build.)
- **Widen the jargon walk to `intro` and `overview`** (§9) and run it over a
  `display()` walk so a `cardDeck` card's `sub` is seen (§13). Check the `-s` plural of
  every entry. "conditional" is banned outright, and a lesson about politeness forms is
  unusually likely to reach for it.
- **`honest` is banned and the house `\b` boundary cannot see "dishonest"** (the a2.06
  finding). A complaint lesson is exactly where an author reaches for it. Guard the
  substring, not the word.
- **No em dash in any user-facing string.**
- **`commonErrors` sets `swipe`.** Assert it.
- **The `trapDrill` walks `rule > cards > audio > drill` with a gated drill step.**
- **Every dictée item carries the `dictation` drill and every practised item carries
  `voiceflash`**, checked against Postgres, not the seed.
- **No `Scenario.exam` value and no `ExamTask` row exists in this build.** Assert the
  absence, because it is a band policy and not an oversight.

**Mutation-test**: put the person back in a rung 2 line, rename a rung, paraphrase the
reframe, drop `swipe` from `commonErrors`, author a repair row, add a fourth rung, call
a softener a family. Expect two of your mutations to find a weakness rather than
confirm a strength; that is the measured rate.

---

## Settled before you start

- The identity block above, with `themes: ['hebergement']` after the re-map.
- `lessonIds: []`. First build, version 1.
- **One lesson.** `den.tsx:169` opens `lessonIds[0]` and nothing else.
- **One quiz.** A second is silently never rendered.
- **France-standard French is the scored content.** One Quebec card, `layer: 'more'`,
  never an answer.
- **Job-title feminine forms are a2.30's.** You mint none.
- **No timer exists anywhere in the app.** `setInterval` is 0 across
  `MissionSection.tsx`, `LessonSection.tsx`, `MissionRich.tsx` and `LessonRich.tsx`.
  Anything "against the clock" is tap-to-continue.
- **The exam policy, and carry it into your report verbatim:**

  > This unit carries exam value by **teaching what the exam tests** (transactional
  > reception at speed, a request in the right register, a structured 60-second turn),
  > not by producing an `ExamTask` row and not by populating `Scenario.exam`. Do not
  > author `Scenario.exam`. Do not author `ExamTask` rows. Do map each act to a named
  > TEF/TCF/DELF task in the design notes, because that mapping is what makes the
  > content right, and because it is what a future runner will consume.

  Your design's Q6 recommended shipping one `po_interaction` task. **Declined.** Set
  `Lesson.skill = 'PO'` so `dueExamSkills()` can deep-link into the lesson, and keep
  the TEF Section A / TCF tâche 2 / DELF A2 interaction mapping in the notes.
- **`modelPlayback`, `wrongThenRight`, `perSentenceReplay`, `scoreOn` and `autoplay`
  are validated and read by no renderer.** Do not author them believing they do
  something. `maxPlays` is in the same state: a TEF "plays once" condition cannot be
  enforced today, so your listening missions are CO-shaped, not CO-conditions. Say so
  in the report rather than claiming exam fidelity.

## UNVERIFIED

Every Postgres figure in your design doc and in this prompt. The supervisor did not
query Postgres, and the design agent's counts are three weeks of authoring old.

- `hebergement` at 312 published rows, and `.073` as the highest id.
  `pnpm corpus:probe -- --theme hebergement`, then `pnpm content:parity`.
- `pourriez-vous` 22, `j'aimerais` 38, `je souhaiterais` 7, `puis-je` 7.
  `pnpm corpus:probe -- --tokens "..."`.
- Every zero-row claim in "the corpus gap" table.
- `ne fonctionne pas` at 14 rows.
- The 8 respellings of `l'hôtel` and 9 of `la chambre`.
- Whether `fr.sons.alphabet.016` / `.028` and the four
  `fr.a2.expressions-frequentes` ids exist at all. They are absent from the seed cut,
  which decides nothing.
- ~~Whether `a2-13-modaux.test.ts` asserts any of the four promise strings verbatim.~~
  **Resolved 2026-08-15: it does not.** All 1,145 lines were read for
  `05-A2-13-AMENDMENT-SPEC.md` §3.7. It is still worth a re-read at apply time in case
  a pin has appeared since, but that is the amendment's job and not yours.
- Whether a2.07 has shipped and what its repair-move ids are.
- Baseline test count and the current mission-count range. Both move weekly, and the
  24-section shape is a convention that was never measured.

## Where this prompt overrules your design doc

| design said | this prompt says | authority |
|---|---|---|
| Author one `ExamTask` (`po_interaction`), a 50% increase in the bank | Author zero | collation §1.12, decision item 4 |
| ~6 recovery-move rows | Zero. a2.07 owns the repair move and you cite its ids | collation §1.6 |
| Quebec `cardDeck` of four cards | One card | collation C3 |
| a2.29 cites a2.32 for device-fault vocabulary | No forward citation. a2.32 cites you | collation §1.3 and C5 |
| Build `audio.maxPlays` as the band's one engineering item | The band funds `listening.hideLines` instead | collation §3.4 and C2 |
| A2.13's promise is "one card" / "three strings, two sections" | Four strings, three sections | measured in `seed.json`, 2026-08-15 |
| 55 to 70 new rows | 50 to 64 | follows from the repair-move removal |
| The ladder branches on Paul's answer (PATH A / PATH R) | **One path. The full ladder.** PATH R is dead and must not be built | Paul, 2026-08-15, decision item 1, option A |

Everything else in the design stands, including the centre, the reframe, the linear
escalation scenario, the trap and the section plan.

---

## What to report

Doctrine §F, plus:

- **the rung-to-`itemId` table**, as a short list a2.30, a2.31 and a2.32 can paste.
  This is the deliverable the rest of the band depends on, and prose in a card body
  does not satisfy it.
- **whether the a2.13 amendment had been applied when you shipped**, and if not, the
  fact that a2.29 is live against an unamended a2.13 and the amendment is still owed.
  You do not apply it, you do not write it, and you do not publish it; you report the
  state you found. `05-A2-13-AMENDMENT-SPEC.md` is the spec and it names its own apply
  procedure and risks.
- **the a2.29 / a2.32 boundary in the words given above**, so the a2.32 builder cannot
  reopen it.
- **the theme re-map**: the spine before and after, and whether `spine-drift.test.ts`
  needed anything.
- **row count before and after your apply**, not the maximum id, and whether a1.03's
  ending population moved.
- **imported against authored**, with every import's source id. If your id block runs
  short of 50 because more existed than the probe suggested, that is the right outcome.
- **whether `table` worked on device**, since you are the first user of it in the
  product. Whichever way it went, `A2-BUILD-DOCTRINE.md` §B.8 names `table` as the A2
  paradigm surface and 64 lessons have used `tapTable` instead. Your answer settles a
  doctrine question the band has been carrying.
- **whether `hideLines` did what act 1 and act 4 needed**, since you are its first
  content customer.
- **what you folded and what you dropped from the phone sub-situation**, all four
  dropped items named.
