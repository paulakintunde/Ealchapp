# Build a2.26 "Shopping and Money" / Les courses & l'argent

Trail seq **25** of 35. Unit **2 of 8** in the A2 situations band, and the second unit
the band builds. You are the band's proof that a reception-weighted situational lesson
works, because you are the only one of the eight where the learner has to decode a
**number** to succeed.

**You are not first. `a2.07` (restaurant, seq 24) ships before you and you depend on it.**
See "The repair move is not yours" below. Do not build this against `a2.07`'s design
document; build it against `a2.07` as shipped.

---

## Read first, in this order

1. **`ealch-admin/A2-SITUATIONS/10-BAND-COLLATION-AND-DECISIONS.md`.** This is the
   settled decision register for the whole band. **It outranks your design document and
   it outranks this prompt where the two disagree.** Read §4 (the decision register)
   and §5 (the theme map) in full.
2. **`ealch-admin/A2-SITUATIONS/25-a2.26-courses-argent-DESIGN.md`**, your unit's design.
   It is good work and most of it survives. The next section lists everything in it the
   collation overruled, so read that section before you read the design, not after.
3. **`ealch-admin/A2-SITUATIONS/01-SUPERVISOR-INPUT.md` Part 0**, the five corrections to
   the brief the design agents worked from.
4. **`ealch-admin/A2-BUILD-DOCTRINE.md`**, `A1-BUILD-INVARIANTS.md`, and
   **`A2-BRIEF-CORRECTIONS.md` in full.** Corrections §5 (what a scored surface can and
   cannot test), §6 as amended by §14.1 (the nasal repair shape), §8 (layout), §9, §13,
   §14.3 and §14.4 (the four holes in the guards you are about to copy) all apply to you.
   Note that `A2-BRIEF-CORRECTIONS.md` has **no entry for `a2.26`**: it predates the
   situational band, so you have no corrected identity block and the spine is the only
   written authority. Re-probe rather than trusting it.
5. **`a1.28.l1` as shipped** (seq 4, Large Numbers). It is your declared prereq and it
   already owns the price shape. **`a1.27.l1` as shipped** (seq 3) and **`a1.29.l1` as
   shipped** (seq 8) for the containers.
6. **`a2.07.l1` as shipped**, for the repair move item ids, for the cashier's register,
   and for the shape of the band's first situational lesson.

---

## Where the collation overruled your design document

Your design is the second of eight and it was written before the band was collated.
Nine things in it are now void or changed. Do not reinstate any of them.

| Design said | Collation settled | Effect on you |
|---|---|---|
| The Owns is reception **and** the repair move (§3.3) | The repair move is **a2.07's**, once, for all eight (1.6, C5) | Your Owns narrows to **price and change reception**. You author **zero** repair rows. |
| Ask 1: `listening.reveal: 'always' \| 'afterAnswer'` plus `plays?: number` (§4.3) | One boolean, `listening.hideLines` (§3.5). `plays` is a later, separate item | Author `hideLines: true`. `reveal` and `plays` do not exist and never will under those names. |
| Three `ExamTask` rows, and `Scenario.exam { format, taskId }` on §20 (§6) | **Zero** ExamTask rows, **zero** `Scenario.exam` values, band-wide (1.12) | Keep the TEF/TCF/DELF mapping in your build report. Author neither field. |
| Add `delf_a2` to `EXAM_FORMATS` (§6, §8 q4) | Approved in principle, **deferred** to the commit that authors the first `delf_a2` task (C1) | Do not touch the enum. |
| A register ladder mission, `je veux` → `je voudrais` → `je prendrais` → `est-ce que je pourrais avoir` (§4 s14) | The register / politeness ladder is **a2.29's**, once, for all eight (C5) | Cut the mission. Keep **one card** contrasting `je veux` and `je voudrais`, quoting `a2.13` by unit id. See below. |
| Naming a `vetements` itemId ships a blank card (§2.2, §7) | **Overruled** (1.2). `SEED_CUT.tracks` includes `a2` and pulls every item a lesson references | The blank-card risk is real but its cause is **your merge script**, not `SEED_CUT`. See "The `vetements` question". |
| Theme: `courses` only (§7) | `courses`, **plus `argent-quotidien` for rows that are about money itself**, subject to one measurement (§5, open cell 2) | Run the probe, then apply the collation's literal split rule. |
| A second lesson is defensible (§3.2 option D, §8 q6) | **One lesson per unit, band-wide** (C6). `den.tsx:169` opens `lessonIds[0]` only | One lesson. Name in your report what you folded and what you dropped; C6 requires it. |
| "Deliberate practice under time pressure", `groupDrill` against the clock | **No timer exists anywhere in the app** (1.9). `setInterval` is 0 across all four render files | Any beat that implies a clock becomes tap-to-continue. Doctrine's "production against the clock" wording is drifted and is not an instruction. |

Two more corrections that are not overrules but change what you write:

- **Nothing in your design "needs engineering" except `s07`.** All 35 `SECTION_TYPES`
  have a live render branch (collation §3.1). `table`, `tapTable`, `quiz`, `examples`,
  `roundup`, `teach` and `audio` render inside a mission through the fallthrough at
  `MissionSection.tsx:647`. Do not mark anything NEEDS-ENGINEERING unless the collation
  says so, and the collation says so about exactly one thing.
- ~~**The hyphen fold is narrower than Part 0 said.**~~ **WITHDRAWN 2026-08-15 by the
  band consistency pass.** It is not narrower. `normalizeFr` (`utils/score.ts:19`) does
  have exactly one render-side caller, `MissionRich.tsx:1385`, the dictée tile check —
  but the quiz has a **second** normaliser that nobody had read. Quiz `typeIn` and
  `errorSpot` are graded by `matchesAccept`, which calls **`fold()` in
  `ealch-v2/src/content/answer.logic.ts:32`**, and `fold()` strips accents, case,
  punctuation, hyphens, **both apostrophes and all whitespace**. The exposure is the
  whole band after all. See the consistency-pass table below and
  `03-ANSWER-FOLD-FACT.md`.

---

## Band consistency pass, 2026-08-15

*Eight prompts were written in parallel by eight agents who could not see each other's
work. These corrections were applied afterwards, across all eight. They overrule
anything below them and anything in the collation that disagrees.*

| # | What changed in THIS prompt | Authority |
|---|---|---|
| 1 | **The answer fold.** The bullet immediately above is withdrawn. No scored surface can test an **accent, cedilla, capital, hyphen, apostrophe or elision, word division, or comma**. Your price work is the band's sharpest case: you already knew `97,30` = `97 30` = `9730`, and you were right for a reason you had not measured. Corrected in §Quiz notes. | `03-ANSWER-FOLD-FACT.md` |
| 2 | **BAND RULE, new.** Before authoring any `typeIn`, `errorSpot` or dictée item, fold the expected answer **and** the most plausible wrong answer. **If they fold to the same string the item tests nothing and must be moved to `mcq` or `listenChoose`.** Assert `fold(answer) !== fold(distractor)` over every authored near-miss in your test file. | band rule, all eight prompts |
| 3 | **`corpus:probe` has no `--count` flag.** You already found this and said so; it is now fixed at source in the collation §1.3 and in a2.07, a2.28 and a2.29. Nothing to change here. | `scripts/probe-corpus.ts` |
| 4 | **`practice` is mandatory, not optional.** `lesson-contract.test.ts:505` mirrors the publish gate and fails any non-`assessment` lesson with no `practice` section, an empty `practice.itemIds`, or an empty `Lesson.itemIds`. Combined with `practice` rendering the speaking drill regardless of `skill`, **every lesson in this band ships exactly one speaking drill and cannot opt out.** | `ealch-v2/src/content/lesson-contract.test.ts:505-519`, verified |
| 5 | **a2.07's repair-move ids are published to `04-REPAIR-MOVE-IDS.md`**, not `11-` (which is taken by the design-mock prompt). Cite that path. | filename collision |
| 6 | **Your device-check status is unchanged.** You use one each of the five untested types, so blocking step 4 does not gate you; you become exposed only via the `s07` fallback, which you already say. The collation's exposed list has been corrected to a2.07, a2.28, a2.29, a2.32. | collation §1.10, corrected |

---

## Identity

From `scripts/author-full-curriculum-spine.ts:764-772` and confirmed against the
`units` row in `seed.json` (both read 2026-08-15, byte for byte identical):

```
a2.26   seq 25   level a2   track a2
  title:  Shopping and Money
  sub:    Les courses & l’argent
  gloss:  shopping, money & prices
  canDo:  Can shop, ask a price, count change and complete a purchase
  themes: ['courses']
  prereqUnitIds: ['a1.28']
  lessonIds:     []          <- first build, version starts at 1
```

**Re-probe the Postgres `content_units` row before you author.** The spine and the
database `title`/`sub` disagree for the batch-1 and batch-2 A2 units, and no correction
exists for this unit. The seed agrees with the spine, which is weak evidence that
Postgres does too, not proof.

**Your prereq is honest.** `a1.28` is seq 4 and has one shipped lesson (collation C8).

**`canDo` says "count change", and nothing in the corpus supports it.** No other unit in
the 75-unit curriculum claims it. Either you honour it with real content or you report
that the published `canDo` overclaims. **Honour it.** The mission list below gives change
reception its own mission for exactly this reason.

**Theme edit, before and after.** Spine `themes` today: `['courses']`. After you:
`['courses']`, or `['courses', 'argent-quotidien']` if the probe sends money rows there.
You are one of only three units in the band whose spine theme is already valid, so the
band's theme re-map (blocking step 2) does not gate you the way it gates `a2.29` and
`a2.32`. Do **not** re-run the spine script to apply any change: edit the `themes` array
in the spine file and let your merge script carry the unit row, exactly as every previous
A2 build did (`spine-drift.test.ts` exists because a naive re-run reverted 74 of 75 unit
titles).

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.26 --theme courses,argent-quotidien,marche,vetements,nombres
pnpm corpus:probe --tokens "ça fait combien,ça vous fait,ça fera,et avec ceci,ce sera tout,vous désirez,je vous rends,vous avez la monnaie,sans contact,la pointure"
pnpm corpus:probe --words "la monnaie,le rendu,le sous-total,le reçu,le ticket de caisse,magasiner,le dépanneur"
pnpm content:parity
```

Three notes on the tooling, because two of them have cost builds before.

- **The probe has no `--count` flag.** The collation §1.3 writes the check as
  `corpus:probe -- --theme <theme> --count`; `scripts/probe-corpus.ts` accepts
  `--theme`, `--words`, `--tokens` and `--unit` only, and `--theme` already reports
  counts. Use the form above.
- **The probe does not strip accents.** `bière`, `café` and `bœuf` have all been reported
  ABSENT by a probe that was fed unaccented spellings. Probe `reçu`, `ça`, `dépanneur`,
  `espèces` with their real orthography.
- **`content:parity` is `scripts/check-seed-db-parity.ts`.** Run it before you author and
  again after your merge.

### Every figure below is UNVERIFIED and here is the check for each

Your design queried Postgres live through the Supabase MCP. The band supervisor did
**not** query Postgres and carried those figures forward unverified. Treat all of them as
claims until your own probe returns.

| Claim (from the design, unverified) | Check that settles it |
|---|---|
| `courses` holds 164 published a2 rows (66 word / 13 phrase / 85 sentence) | `pnpm corpus:probe --theme courses`, then `pnpm content:parity` for `published` vs merely present |
| The seed holds **5** `courses` rows | **VERIFIED here:** `fr.a2.courses.018 faire les courses`, `.020 acheter`, `.063 choisir`, `.070 ouvert`, `.080 servir`. The collation calls `courses` a **thin theme, not a phantom** (1.1), and it has a `themeMeta` entry at `themeMeta.ts:91` |
| `argent-quotidien` holds 70 a2 rows | `pnpm corpus:probe --theme argent-quotidien`. **VERIFIED in the seed:** exactly 1 row, `fr.a1.argent-quotidien.061 acheter`. `themeMeta.ts:144` |
| `vetements` holds 181 published a2 rows and **0** seed rows | Seed side **VERIFIED: 0 rows.** DB side needs `pnpm corpus:probe --theme vetements` plus `content:parity`. See the dedicated section below |
| `marche` holds 343 rows and is fully in the seed | `pnpm corpus:probe --theme marche` and count `marche` in `seed.json` |
| `ça fait combien` is **0 rows in 48,325** | `pnpm corpus:probe --tokens "ça fait combien"`. The collation confirms it against the seed only |
| `nombres` 448 seed rows, `expressions-de-quantite` 18 | Count both sides. These are a1.27 / a1.28 / a1.29 populations and you must not move them |
| `content_exam_tasks` holds 2 rows | Irrelevant to you now. You author zero |

**The interpretation rule, settled by the collation (1.3) and not yours to reopen:** a DB
row that is `published` is REACHABLE and must be **imported by `itemId`, never
re-authored**. A DB row that is not `published` is invisible to learners and may be
treated as absent.

**Id block.** Ids are `fr.a2.courses.<nnn>`. Take a block from the next free id the probe
reports, then **check the row COUNT after your apply, not the maximum**. A concurrent
lesson can land ids *inside* your reserved range and a highest-id check cannot see it;
this has happened twice (`a1.19` took `a1.20`'s range mid-build). `a2.27` and `a2.28` are
authored in parallel with you, in `transports-quotidiens` and `symptomes`, so the direct
collision risk is low, but `a2.07` sits next door in `au-restaurant` and wants some of the
same strings.

---

## The teaching problem

### Owns: price and change reception

Collation §1.2 states your centre and your Owns:

> **The number that arrives once, at speed, and is not repeated.**
> Owns for the band: **price and change reception.** Also: the till transaction.

The information gradient at a till is the steepest in the band. The vendor holds the
prices, the stock, the policy and the initiative. The learner holds intent, four short
formulas, and about eleven seconds. Every other situation in the band permits recovery by
circumlocution. This one does not: either the formula arrives on time or the transaction
fails, and a learner who mis-hears at the doctor gets a fuzzy sentence, while a learner who
mis-hears at the till hands over the wrong note.

### The reframe candidate

> **The number comes once. Asking again is part of the script.**

Take it. Record what you rejected and why. Specifically, do not reuse *"Currency, then the
small number"* or *"The price is one run"* (both `a1.28` §15's) or *"Learn the shape, not
the sum"* (`a1.27`'s, verbatim). Doctrine §B.7 requires you to name the earlier instance by
unit id rather than re-own it.

**The second sentence of the reframe is a citation, not a claim of ownership.** Asking
again is `a2.07`'s move. Carry a `ref` to `a2.07` on every surface where the reframe
appears, so the two units read as one rule and not as two teachings of the same thing.

### What is already built, and what you must not rebuild

Part 0 correction 0.4 is the most important thing in your pre-flight: **the brief's
number-reception premise was half wrong. `a1.27` and `a1.28` already authored price
reception, the price shape and the decimal comma. The gap is renderer, not content.**

Concretely, read these as shipped and lean on them:

- **`a1.28.l1` §15, a `cardDeck` titled "A Price Is One Run".** It already teaches that a
  price is the currency followed by a bare number, that there is no word for centimes in a
  shop, that no `et` joins the halves, and that **the only clue the price has finished is
  that the speaker stops.** Quote it by unit id. Do not teach the price shape again.
- **`a1.28.l1` §17, a `tapTable` titled "What The Label Actually Says".** `1 234` vs
  `1.234`, `1,25` vs `1.25`, `124,80 €` vs `12 480 euros`. **The decimal comma is taught.**
  Do not teach it again, and do not build a scored question whose only difficulty is it.
- **`a1.27.l1` §17, a `listening` titled "Faster Than You Can Add"**, four sentences at
  native pace, including `quatre-vingt-dix-neuf centimes` against `quatre-vingt-quinze
  euros`.
- **`a1.29.l1` §11, an `examples` titled "A Kilo, a Slice, a Bottle"**, shipping
  `un kilo de tomates`, `une tranche de fromage`, `une bouteille d'eau`, `un morceau de
  comté`, `un verre de vin`, `une part de gâteau`, each with a note that the container is
  what kills the article. **`a1.29` owns quantity language outright.** You apply it under
  counter pressure. You never reteach it, and you quote `a1.29` by unit id in the mission
  that uses it (doctrine §B.7).

**So your new contribution is not the price. It is that the price arrives inside somebody
else's turn, once, and that the learner has never been taught what that person says.**

### What the corpus is missing, and it is the band's whole mandate

Collation 1.5: **the corpus authored only the learner's half of every situation. The nouns
are finished. The other party's speech does not exist.**

Your design measured it precisely for this theme. `courses` holds a rich noun inventory
(66 words: `la caisse`, `le rayon`, `un reçu`, `une réduction`, `le montant`, `le prix
unitaire`, `l'horaire d'ouverture`, and so on) plus 13 payment phrases and 85 declarative
third-person sentences *about* shopping. **There is no vendor turn in the entire theme.**
`ça fait combien`, the single most frequent utterance in a French retail transaction,
returns zero rows corpus-wide and exists in the project exactly once, inside the scenario
`sc.a2.questions-du-quotidien.001` ("À la boulangerie"), which is not a `content_items`
row and so has never been taught.

**Band policy, settled (1.5), and it is a hard number you must report against: at least
40 percent of your newly authored rows must be in the voice of the person the learner is
talking to.** For you that is the cashier, the baker, the stallholder. At the 55 to 70 rows
this unit budgets, that is a floor of 22 to 28 vendor rows. State the measured percentage
in your build report.

---

## France and Quebec inside one lesson

**You are the one unit in the band excepted from the France-primary policy, and this is
the hardest design problem in the unit. Do not hand-wave it.**

### Why the exception exists

Collation C3 settles regional policy for the band as **France-primary, with Quebec as a
named non-scored aside**, then excepts you, in these words:

> **The exception: a2.26.** [...] this is the only unit where the regional difference
> changes an *answer* rather than a word: in Quebec, tax is added at the till, so the
> number on the shelf is not the number you pay. a2.26 gets an explicit teaching card on
> this, and its price-reception listening must never require the learner to compute a
> total from a shelf price.

`courriel` versus `mél` changes nothing a learner does. Tax at the till changes what number
a learner expects to hear, and expectation is what reception runs on. A France-trained
learner does not mis-hear a Quebec total because of the accent. They mis-hear it because
they were expecting the label.

### The six rules that make the two regions coexist without ambiguity

The failure mode you are guarding against is a learner who cannot answer a price question
because they do not know which country the question is set in. These six rules remove that
possibility. They are not suggestions.

**1. Every scored surface in this lesson is France, without exception.** The quiz (all four
rounds), the dictée, the `trapDrill`, the `groupDrill`, the reading questions, and every
graded turn of the scenario are set in France, priced in euros, and the number the vendor
says is the number the learner pays. **No scored item anywhere in this lesson is set in
Quebec.** That single rule is what removes the ambiguity: a learner never has to ask which
country they are in to answer a scored question, because the answer is always France.

**2. The currency word is the region flag, and it is always audible.** `a1.28` already
taught that a price is the currency followed by a bare number, so every price string in
this lesson names its currency out loud: `quatre-vingt-dix-sept euros trente` or
`vingt-deux dollars cinquante`. The region is carried inside the audio itself. The learner
never infers it from context and never needs a label on the screen. Combined with rule 1,
hearing `dollars` is a reliable signal that this is the aside and not the test.

**3. Quebec appears in exactly two places, and both are unscored.**
   - **`s15-quebec`**, one `cardDeck` mission of **three cards**, named below.
   - **Two rows of `s13-paying`'s card set**, carrying `magasiner` and `le dépanneur` as
     recognition vocabulary only.

   That is the whole regional footprint. C3 rule 2 caps the other seven units at one
   `cardDeck` card; you are the exception and you get one mission, because the thing you
   are teaching is a reception expectation rather than a vocabulary item, and a single card
   cannot carry the contrast. It is still three cards, not a parallel register.

**4. No item in this lesson, scored or unscored, asks the learner to compute a total from
a shelf price.** This is C3's own constraint and it is also the pedagogy. The Quebec
teaching is an **expectation**, not an arithmetic operation:

   > In France the label is the price. In Quebec the label is not the price, because the
   > taxes go on at the till. Expect the total to be bigger than the number you read, and
   > wait for the till to say the real one.

   That is the whole lesson. There is no "9,20 plus tax, what do you pay". Do not author
   percentages, do not author TPS or TVQ rates, and do not author a card that implies the
   learner should be doing a sum in a queue. The correct behaviour you are teaching is that
   **the till's number is the only number, and the label was never a promise.**

**5. A Quebec form is never the correct answer, and it is never a distractor either.** C3
rule 3 permits `magasiner` and `le dépanneur` as corpus rows and forbids them displacing
the France form in a drill. Extend that one step, and this is the part most likely to be
got wrong: **do not use a Quebec form as a wrong option in an `mcq`.** A Quebec form is not
wrong. It is elsewhere. An option that is correct in Montreal and marked red is a defect a
TEF Canada candidate will notice and will be right about.

**6. The scenario is France, and Quebec appears nowhere in it.** Your design proposed "one
alternate scenario setting" (§3.5). Cut it. Your scenario is the single most liftable
artefact this unit produces: collation §1.4 asks the band to hand `a2.35` a situation
inventory of eight mutually consistent scripts, and §7.3 warns that eight authors with
eight registers is the most likely way this band embarrasses itself. A Quebec setting
inside a France band breaks exactly that. One scenario, France, euros, `vous`.

### `s15-quebec`, specified

Three cards, `cardDeck`, layer `core`, size `lg`, in **act 4** and not in act 3. It must
not sit next to a reception mission, because no dollar figure should ever be adjacent to
the euro figures the learner is being tested on.

| card | content |
|---|---|
| 1 | The label and the till, side by side. Same basket, two countries. France: the label says the price and the till agrees. Quebec: the label says one number and the till says a larger one. **No arithmetic shown, no rate named.** |
| 2 | What that does to your ear. You are not mis-hearing the accent. You were expecting the label, and the expectation is what broke. The move is the same as everywhere else in this lesson: wait for the till, and if you missed it, ask. `ref` to `a2.07`. |
| 3 | Two words, recognition only: `magasiner` for `faire les courses`, `le dépanneur` for the corner shop. Say plainly that this lesson drills the France forms and that these two are here so the learner recognises them, not so they produce them. |

`magasiner` and `le dépanneur` may be authored as `courses` corpus rows (C3 rule 3), or
imported if the probe finds them published: your design measured `magasiner` at 3 rows and
`dépanneur` at 4. Probe before you author. Neither carries `voiceflash` in any drill in
this lesson, and neither appears in the quiz.

---

## The repair move is not yours

Collation 1.6 and C5: **`a2.07` owns the repair move, once, for all eight units.** You
author **zero** repair rows.

The reasoning is not stylistic. Eight independent authorings would put eight rows with the
same `fr` into overlapping themes and break the flashcard hub's one-card-per-`fr`-per-theme
assumption. Collation §7.1 goes further and instructs `a2.07` to author every repair-move
utterance as a **corpus row in `au-restaurant` first**, so that the other seven can cite it
by `itemId` rather than retyping it into a card body.

**So `s11-repair` is a `cardDeck` that quotes `a2.07`'s rows by `itemId` and names `a2.07`
by unit id. It authors nothing.** The three rungs you want are, in `a2.07`'s wording, not
yours: an open-class repair (`Pardon ?`), a restricted repair that names what was missed
(`Combien, s'il vous plaît ?`), and the full request (`Vous pouvez répéter, s'il vous
plaît ?`). Take the strings `a2.07` shipped, whatever they are. If `a2.07` worded a rung
differently, `a2.07` wins.

**Your design's `s12-sayit` (a `groupDrill` producing the three repairs) is cut**, and the
cut is principled rather than budgetary: a card plus a dedicated production drill is
re-teaching a neighbour's Owns, which doctrine §B.7 forbids. Production of the repair
survives in two places that were already in the design: one scenario turn where the only
correct move is a repair, and quiz round 4. That is enough, and it keeps `a2.07` the only
unit that teaches it.

**One thing you may legitimately need to change on `a2.07`'s rows.** If you drill an
imported repair row through the scenario or the quiz `speak` round, it needs `voiceflash`
in its `drills` array (doctrine §E). `drills` is a Postgres enum array and has its own
apply gotcha; read it before the first apply, not after it fails. **Before mutating another
unit's rows, read `a2-07`'s test**: if it asserts the `drills` value on those ids, your
change turns its suite red. Record any drill kind you add, on which id, in your build
report.

### If `a2.07` has not landed

Collation §6 step 6 makes `a2.07` a hard gate: it is authored first, alone, and reviewed
before the other seven start, and "done" includes its repair-move item ids being published
as a short list the other seven prompts can quote. **That list lives at
`ealch-admin/A2-SITUATIONS/04-REPAIR-MOVE-IDS.md`** (renumbered from `11-` on
2026-08-15, because `11-` is `11-DESIGN-MOCK-PROMPT.md`) and is repeated under a fixed
heading in a2.07's build report. **The contract: exactly six rows, all in
`au-restaurant`, contiguous ids, domain-neutral strings, ordered by face cost, and
frozen at publication.** If that file does not exist, a2.07 has not landed.

- **Preferred: stop and say so.** You are second in the sequence. Building against
  `a2.07`'s design document instead of `a2.07` as shipped is exactly the failure this
  prompt's opening line is about.
- **If the band lead overrides and you must proceed:** author `s11-repair` as a `cardDeck`
  whose three utterances live in **card body text only**, with **zero corpus rows** and
  **zero `itemId`s**, and state plainly in your build report that the mission is
  un-drillable and un-audioed until `a2.07`'s ids exist and are wired in a v2. Then add a
  test asserting that **no `courses` row carries a repair `fr`**, so the temporary state
  cannot silently become a permanent duplicate authoring. Do not author the rows "so they
  are ready". That is the duplication 1.6 forbids, wearing a different hat.

---

## The one funded engineering item, and your fallback

Collation §3.5 and blocking step 3: **`listening.hideLines?: boolean`**, roughly half a
day, one schema field and one render branch. It is the band's only funded engineering item
and it is the thing your whole reception design rests on.

**The defect it fixes.** `ListeningView` at `MissionRich.tsx:1949` renders
`<TX role="body">{l.fr}</TX>` and `<TX role="bodySm">{l.en}</TX>` inside every line card,
beside the `PlayDot`. **Every `listening` section in the product is answerable by reading**,
including `a1.28` §16 "Four Prices, Said Once", where the answer to "what does the ticket
cost" is legible in French and in English in the line above the question.
`questionsInModal` (`MissionRich.tsx:1968`) moves the questions behind a modal but leaves
the transcript on the page underneath.

**Specified behaviour when `hideLines` is true:** the line card keeps its `PlayDot` and its
box and replaces the `fr` / `en` text with a neutral placeholder. After the learner has
answered every question, the lines reveal. **The reveal is not gated on getting them
right.** The precedent is `ReadingMission`, which already pages its passage away.

**Author `s07-heard` with `hideLines: true` and `questionsInModal: true`.**

### If `hideLines` has not landed when you reach `s07`

- **Preferred: wait.** It is blocking step 3 for a reason, it is half a day, and
  retrofitting means re-reviewing eight units' worth of listening copy for whether it still
  works unseen.
- **If you must proceed:** do **not** author `s07` as a `listening` section. A `listening`
  section authored today is a reading exercise with a play button, and the `en` gloss on a
  priced line hands the learner the number in English. Instead author `s07` as a
  **`dictation`** on four totals **spelled in words**, which is genuinely audio-only today,
  and move the unit's full CO payload into quiz round 1 (`listenChoose`, the only audio-only
  surface in the app). Then:
  - **This creates a repeated `dictation`** (`s07` plus `s18-dictee`), and `dictation` is in
    the collation's genuinely untested set alongside `scene`, `scenario`, `reading` and
    `table` (1.10). Run the ten-minute device check from blocking step 4 before you author
    it. If it fails, merge the two into one.
  - Say plainly in the build report that the unit shipped **without a mission-level
    comprehension-orale surface**, and reserve `s07` for the retrofit.

**Do not author `modelPlayback`, `wrongThenRight`, `perSentenceReplay`, `scoreOn` or
`autoplay`.** All five validate, publish, and are read by no renderer (collation §3.5). The
seed already carries 31 of them and one test even asserts one is set correctly. `maxPlays`
is in the same state: validated at `schema.ts:834` and `:2465`, resolved at
`lessonAudio.logic.ts:74`, consumed by nothing.

---

## The `vetements` question

Your design measured `vetements` at **181 published a2 rows and 0 seed rows** and concluded
that naming a `vetements` itemId ships a blank card. **The collation overruled the
mechanism** (1.2): `SEED_CUT.tracks` is `['sons','a1','a2']` and pulls in each track's
units, lessons, and **every item those lessons reference**, automatically.
`SEED_CUT.themes` is a separate mechanism for vocabulary bundled *regardless of* which
lesson references it. So a card inside a mission does not render blank because its theme is
outside the cut. What is affected is the theme parcours, the flashcard hub and "By Theme"
browsing.

**But the blank-card risk is real, and it has a different cause: your own merge script.**
Every previous A2 build has had to carry each imported row it references into `seed.json`
explicitly, or the cards render empty. That is a bug in the merge script, not in the cut.

**The check that decides whether this lesson may name a clothing item at all, in order:**

1. `pnpm corpus:probe --theme vetements` and `pnpm content:parity`. If the 181 rows are
   not `published`, they are invisible to learners and the question is closed: treat them
   as absent (collation 1.3's interpretation rule).
2. If they are published, confirm your merge script carries every imported row the lesson
   references into `seed.json`, and **assert it in your test**: read the merged seed and
   check that every `itemId` the lesson names resolves to an item in the same file. That
   assertion is worth having whether or not you touch `vetements`.
3. Only then may a mission name a `vetements` itemId.

**Default, and what I expect you to do: name none.** The clothing shop is dropped as a
teaching block for pedagogical reasons that are independent of the seed (see the fold
below). The two clothing words the transaction actually needs are `la taille` and
`la pointure`, and both are better placed in `courses`: `pointure` returned 3 rows
corpus-wide and `taille` is an unreliable substring probe (it also catches `bataille` and
`détaille`), so measure with real word boundaries before you decide to import either.

---

## One lesson, and what was folded and what was dropped

C6 requires each prompt to name this, so that the decision is legible later.

**Folded into the single lesson.** Your design's answer to the venue-spread question is
already the right one (§3.4): the boulangerie, the market stall and the supermarket till
are the **settings** the same seven-move script is rehearsed in, not teaching blocks. Four
of the five venues are the same seven moves with one slot swapped:

```
boulangerie      greet · request · "ce sera tout ?" · total · tender · close
market stall     greet · request + QUANTITY · "et avec ceci ?" · total · tender · close
supermarket      (no greet) · scan · total · tender · "vous avez la carte ?" · close
clothing shop    greet · request + SIZE · "vous voulez essayer ?" · fitting room · total
```

Teaching them as separate lessons teaches the swap four times and the schema zero times.
Rotate the setting across `s03`, `s07`, `s10`, `s17` and `s20` so the learner abstracts the
script; the venue is a noun swap and it is nearly free.

**Dropped.**
- **The clothing shop as a teaching block.** It survives as one setting and at most two
  words. See above.
- **Returns and exchanges.** It inverts the information gradient: the learner opens with a
  complaint and must hold a position, which needs `parce que` and a justification this level
  does not have. It is B1. It would eat two missions and be the weakest thing in the
  lesson. Note in your report that it is unowned and available.

---

## Lesson architecture

One lesson, `a2.26.l1`, **24 missions**, six acts. This is the a2.2x mission-journey
chassis with **act 2's contents replaced**: there is no paradigm at a till, so the script
takes the paradigm's slot. The chassis itself is enforced by `acts.logic.test.ts`, the
density validator and `LessonPager`'s mission numbering, so do not invent a container.

Act 3 is **7 missions** against act 2's **4**, which is doctrine §B.5's requirement that
the Owns outweigh the paradigm.

### Act 1, the transaction that died at the till (2)

| # | id | type | size | what it does |
|---|---|---|---|---|
| 1 | `s01-scene` | `scene` | md | Boulangerie, 8:40 on a Tuesday. The learner orders correctly. The baker says `Ça fait quatre-vingt-dix-sept euros trente` for a catering order. The learner catches every word except the number. `choice` beat: hand over a fifty and hope, or say `Pardon ?`. `break` beat: what was said against what was heard, in large type. Doctrine §B.2's A2 stakes exactly: nobody is rude, the learner runs out of sentence in public. |
| 2 | `s02-goals` | `goals` | md | Five goals. One of them is "ask a French speaker to say a number again, without apologising for it". |

### Act 2, the script takes the paradigm's slot (4)

| # | id | type | size | what it does |
|---|---|---|---|---|
| 3 | `s03-shape` | `cardDeck` | lg | Seven cards, one per move of the encounter. The shape, not the words. The milestone is that the learner can predict what comes next. |
| 4 | `s04-theirside` | `tapTable` | md | **The lines the learner will HEAR and has never been taught.** `Vous désirez ?` · `Qu'est-ce que je vous sers ?` · `Ce sera tout ?` · `Et avec ceci ?` · `Ça fait…` · `C'est pour offrir ?`. Six rows: `tapTable` caps at six visible rows in some renders (`a2.12`) and its headers have a glyph budget (`a2.16`). A seventh line goes in the reference sheet, not here. |
| 5 | `s05-yourside` | `cardDeck` | lg | The learner's four moves plus one register card. `Bonjour` · `Je voudrais…` · `Ça fait combien ?` · `Par carte, s'il vous plaît`. **Deliberately fewer cards than theirs, and say why: the asymmetry is the point.** The fifth card contrasts `je veux` with `je voudrais`, which is grammatically perfect against socially right, and **quotes `a2.13` by unit id**. No ladder, no third rung, no `pourriez-vous`. |
| 6 | `s06-quantity` | `groupDrill` | xl | `a1.29`'s container rule under counter pressure. The vendor asks; the learner supplies `un kilo de`, `une tranche de`, `un paquet de`, `une douzaine de`. **Quotes `a1.29` by unit id and reteaches nothing.** `SoundGroup.items` carries `itemId` so the drill scores against real rows. |

### Act 3, the Owns, and the heaviest act (7)

| # | id | type | size | what it does |
|---|---|---|---|---|
| 7 | `s07-heard` | `listening`, `hideLines: true`, `questionsInModal: true` | md | **The blind CO mission.** Four totals at native pace, transcript hidden until answered. Depends on the one funded engineering item; fallback above. |
| 8 | `s08-tail` | `tapTable` | md | Where the cents hide. `quatre-vingt-dix-sept euros trente` is 97,30. Six rows. **Names `a1.28` as where this was first met** (doctrine §B.7). |
| 9 | `s09-total` | `cardDeck` | lg | `ça fait` / `ça vous fait` / `ça fera` / `le total` are one move in four costumes, and the learner has to recognise all four to know the number is coming. **No Quebec card here.** It moved to act 4. |
| 10 | `s10-which` | `trapDrill`, stepped, `gate` on the drill step | lg | `quatre-vingt-dix-sept` against `quatre-vingt-sept`, `soixante-quinze` against `soixante-cinq`, `deux euros dix` against `douze euros`. **Honest caveat: `TrapDrillView` prints `promptSay` as text in all four of its render paths**, so this trains discrimination with the text visible. Author it anyway, the contrast is real, but do not describe it as the blind test. |
| 11 | `s11-repair` | `cardDeck` | lg | **`a2.07`'s move, quoted.** Three rungs by `itemId`, `a2.07` named by unit id, plus the card that does the real work: a French speaker repeats without irritation, and the learner's instinct to apologise is what turns a repair into an incident. **Zero authored rows.** |
| 12 | `s12-change` | `tapTable` | md | **What comes back.** The second number that arrives once, and the reason the published `canDo` says "count change". Six rows in the vendor's voice: `Je vous rends…` · `Voilà votre monnaie` · `Vous avez la monnaie ?` · `Vous n'avez pas plus petit ?` · `sur vingt euros` · `le rendu`. Nothing in the corpus covers this today. |
| 13 | `s13-paying` | `cardDeck` | lg | `par carte` · `en espèces` · `sans contact` · `le code` · `le reçu` / `le ticket de caisse`, plus the two Quebec recognition words. Nine of the thirteen `courses` payment phrases are already published, so this mission mostly **arranges existing rows**. |

### Act 4, the ways the counter breaks you (4)

| # | id | type | size | what it does |
|---|---|---|---|---|
| 14 | `s14-refuse` | `cardDeck` | lg | Not buying is also a move. `Je regarde seulement` · `C'est un peu cher pour moi` · `Je vais réfléchir` · `Vous avez ça en 38 ?`. This is fixed lexis, not a register ladder: **do not name a ladder, that is `a2.29`'s.** The refusal script is where a learner without one goes silent and leaves. |
| 15 | `s15-quebec` | `cardDeck` | lg | Three cards, specified above. Unscored, in full. |
| 16 | `s16-errors` | `commonErrors`, **`swipe: true`** | lg | Four errors. **`swipe` is mandatory:** `commonErrors` renders its own deck only when `swipe` is present, and the shared fallback sits after the switch at `MissionSection.tsx:614-648` precisely because a `break` from a conditional case once fell off the end of the function and drew nothing. That shipped twice. |
| 17 | `s17-followup` | `listening` | md | The unscripted question, which is lexical rather than numeric. `Vous avez la monnaie ?` · `C'est pour offrir ?` · `Vous avez la carte du magasin ?` · `Il vous faut un sac ?`. `hideLines` if it exists; this one survives without it better than `s07` does, because the difficulty is not a number the `en` gloss gives away. **Repeated `listening` is approved without a device check** (collation 1.10: it ships in six lessons already, including `a1.27.l1` and `a1.28.l1` at three each). |

### Act 5, production (5)

| # | id | type | size | what it does |
|---|---|---|---|---|
| 18 | `s18-dictee` | `dictation` | md | Write the total. Genuinely audio-only today. **The items must be spelled in words** (`quatre-vingt-dix-sept euros trente`), never in digits: `OneDictationWord` builds the letter-tile bank from the item's `fr`, so `97,30 €` produces a bank of digits, a comma and a currency glyph. Check each string through the real `dicteeMode` function, not by counting characters: it switches to WORD tiles above 16 letters. Every item named needs `dictation` in `drills`. |
| 19 | `s19-receipt` | `reading`, `questionsInModal: true` | md | A till receipt as the passage, `glossary` on `sous-total`, `remise`, `TVA`, `espèces`, `rendu`. `ReadingMission` pages the passage away before the questions, so this is a real CE item and not a scan-back. It is also the DELF A2 CE payload, and `courses` already publishes `l'horaire d'ouverture`, `l'heure de fermeture`, `le prix unitaire` and `la promotion` for it. |
| 20 | `s20-scenario` | `scenario` | md | Ten to twelve turns at the till. **`alts` on every turn**, two to three each. One turn where the vendor gives a total the learner has to repeat back. One turn where the only correct move is a repair. **No `Scenario.exam`.** None of the five existing shopping scenarios carries `alts` and two of them are three turns long; this one sets the pattern for the band. |
| 21 | `s21-review` | `reviewDeck` | md | Leitner close-out. |
| 22 | `s22-progress` | `progressCheck` | md | Authored stats. |

### Act 6, the exam (2)

| # | id | type | size | what it does |
|---|---|---|---|---|
| 23 | `s23-quiz` | `quiz`, `rounds` | md | **Four rounds of eight.** R1 `listenChoose` only, French in `say`, options as digit strings: this is the unit's genuine CO payload and today it is the only place it can live. R2 `mcq` on the script, which move is this. R3 `typeIn` / `errorSpot` on the learner's four moves. R4 `speak` on the repair rungs. **One quiz.** Every question carries `why` and `ref`. |
| 24 | `s24-roundup` | `roundup` | md | |

**Counts: 24 missions. Act 3 is 7, act 2 is 4.** One `scene`, one `scenario`, one
`reading`, one `dictation`, zero `table`. **None of the untested-repetition types repeats**,
so blocking step 4's device check does not apply to you unless you take the `s07` fallback.

`table` renders (collation §3.1) but has never been used in any of the 64 shipped lessons,
while `tapTable` has been used 123 times. Doctrine §B.8 names `table` as the A2 paradigm
surface and is drifted on this point. Use `tapTable`. If you want a `table`, understand that
you would be the first or second in the product and it needs a device check.

---

## Layout and scene

Layout facts that have already cost a build each are in `A2-BRIEF-CORRECTIONS.md` §8.
Specific to you:

- **The label and the till belong on one screen** in `s15-quebec` card 1, adjacent, both
  numbers visible. **This is a layout the test must assert.** Separating them turns the
  Quebec exception into a vocabulary note, which is the thing C3 excepted you from.
- **`ça fait` and the number it introduces belong on one screen** in `s09-total`. The
  learner is being taught to hear the frame arrive and know a number is next.
- **`Ça fait combien ?` and `Ça fait quatre-vingt-dix-sept euros trente` belong side by
  side** in `s05-yourside` or `s09-total`, so the question and the answer shape are one
  picture. Second required layout, and it is the Owns.
- **Long French lines clip their tails.** A `flex` on a `Text` loses the last words while
  the audio speaks them in full; put the flex on a wrapper `View`, never on the `TX`. The
  scene bubble clips on a spaced exclamation mark. Price strings are long: `cent
  vingt-quatre euros quatre-vingts` is 38 characters and it will sit in a scene bubble and
  in `tapTable` cells. Check `s01`, `s04`, `s08`, `s12` on device.
- **`cheatSheet` inside a reference sheet draws its title and nothing else.** If the script
  spine gets a sheet, do not build it out of `cheatSheet`. `a1.13` ships the same defect.
- **A `table` at layer `core` is a density failure.** The in-flow version is a `tapTable`,
  capped at six rows on a Pixel 6.
- If you author a `trapDrill` it must walk `rule > cards > audio > drill` with `swipe`, an
  `audio` spec, a `say` and a **gated** drill step. `lesson-contract.test.ts` has enforced
  it since 2026-08-13 and it caught both of `a2.17`'s. The stacked shape hides the gate, the
  audio and the sub-mission number; the A2 band has one trap shape and it is the stepped
  one.
- **`SCENE_BEATS` goes in a named const.** Prose at `md`, choice and break at `lg`, each
  with its own `audio`, break body 24 to 40 words.

**The scene:** the A2 register, a sentence that dies mid-way, per doctrine §B.2. The
learner has done everything right until the number arrives, and the number is the one
thing they cannot slow down. Nobody is rude. The baker waits. The learner hands over a note
that is obviously wrong and knows it as it leaves their hand.

**Register: the cashier uses `vous`.** Collation §7.3 names cross-unit register drift as
the most likely way this band embarrasses itself. **Read `a2.07`'s waiter as shipped and
match it.** If `a2.07` shipped a canonical form for any of greet, request, ask price, ask
for repetition or close, quote that form rather than writing a second one.

**Liftability, and it costs nothing at authoring time:** collation §1.4 and §7.2 ask this
band to leave `a2.35` a reception bank. **Author every `listening` line so it makes sense
without this lesson's framing**, so `a2.35` and any future exam runner can lift it
directly. This is expensive to retrofit and free now.

---

## Quiz notes

`A2-BRIEF-CORRECTIONS.md` §5 is not a footnote. It decides your format mix.

- **`listenChoose` is your strongest format and it carries the unit's real CO payload.**
  `ListenChooseCard` plays `audio.clip ?? say ?? opts[correct]` and **never prints `say`**,
  which makes it the only genuinely audio-only scored surface in the app. French in `say`,
  options as digit strings. Round 1 is all of it.
- **`typeIn` and `errorSpot` on the learner's four moves**, not on numbers. Note that
  `errorSpot` is free-text, and that `fold()` strips commas: a `typeIn` whose answer is
  `97,30` also accepts `97 30` and `9730`. **Do not build a scored question whose only
  difficulty is the decimal comma**, tempting though it is given `a1.28` taught it, and do
  not build one whose only difficulty is a hyphen, an accent or a cedilla.
- **The full list of what no scored surface can test** *(corrected 2026-08-15; see the
  consistency-pass table at the top)*. `fold()` (`answer.logic.ts:32`) grades quiz
  `typeIn` and `errorSpot` and strips **accents, case, punctuation, hyphens, the middle
  dot, both apostrophes and all whitespace**. So add to the list above: **capitals**
  (`Euros` = `euros`), **apostrophes and elision** (`c'est` = `cest`), and **word
  division** (`quatre-vingt-dix` = `quatrevingtdix` = `quatre vingt dix`). The dictée is
  no looser: `normalizeFr` strips the same marks.
- **BAND RULE.** Before authoring any `typeIn`, `errorSpot` or dictée item, fold the
  expected answer **and** the most plausible wrong answer. **If they fold to the same
  string the item tests nothing and must be moved to `mcq` or `listenChoose`.** Your
  round 1 is `listenChoose` with digit-string options, which is already the right answer
  to this problem for numbers; apply the same test to the four learner moves.
- **Spell every price in words in every scored surface.** Then
  `quatre-vingt-dix-sept euros trente` and `quatre vingt dix sept euros trente` fold to the
  same string, which is correct behaviour rather than a defect, because both are the right
  answer.
- **mcq on the script**, which move is this. This is the only format that tests the schema
  rather than the words.
- **No Quebec form is a correct answer and no Quebec form is a distractor.** Enforce it with
  a named `QUEBEC_FORMS` list asserted against every quiz option, not with a sentence in
  your report. A sentence in a report cannot fail.
- **`practice` renders the SPEAKING drill regardless of `skill`** (Part 0, 0.2, confirmed
  by the collation). `skill` is not passed to `PracticeVFView` and is decorative in every
  authored section. If you author a `practice` section, it speaks. `skill: 'write'` draws no
  writing surface.
- **And `practice` is MANDATORY, which the collation did not say** *(added 2026-08-15)*.
  `ealch-v2/src/content/lesson-contract.test.ts:505` mirrors the `lesson-has-practice`
  publish gate and fails any non-`assessment` lesson that ships no `practice` section, a
  `practice` with empty `itemIds`, or an empty `Lesson.itemIds`. Combined with the bullet
  above: **every lesson in this band carries exactly one `practice` section, it is a
  speaking drill, and there is no opting out.** Set `skill: 'speak'` so the authored
  value matches what renders, and make sure every item it names carries `voiceflash`.
- **The quiz shuffles its options at runtime and missions do not.** `LessonRich` permutes
  `opts`; `MissionRich` renders authored order. Hand-randomise inside missions where order
  would otherwise leak the answer.
- **One quiz per lesson.** A second `quiz` section is silently never rendered. This forced
  `a1.30` into two lessons. Do not try it.

---

## Corpus plan

**Author into `courses`.** Import from `marche`, `nombres` and `expressions-de-quantite`
and author into none of them.

**The `argent-quotidien` split, settled literally by collation §5, open cell 2:** the
transaction (shopping, the till, asking a price) goes in `courses`. Only rows that are
**about money itself** (coins, notes, `j'ai pas de monnaie`) go in `argent-quotidien`. Run
the probe on both. **If `argent-quotidien` is effectively empty in the DB as well as the
seed, put everything in `courses` and note it in your report.** The seed side already tells
you it holds exactly one row, `fr.a1.argent-quotidien.061 acheter`, which is not
encouraging.

**Estimated new rows: 55 to 70, all `a2`.**

| kind | count | what |
|---|---|---|
| `phrase` | 22 to 28 | The vendor's six lines (`s04`), the learner's four moves (`s05`), the four refusals (`s14`), the four payment formulas and the change lines (`s12`, `s13`). **These are formulaic sequences and must be stored whole**, not decomposed: at A2 the learner stores `ça fait combien` as one unanalysed unit, not as ça + faire + combien. `ça fait combien` is the flagship at zero rows. |
| `sentence` | 25 to 32 | Priced and change utterances with the number **spelled in words**, so `s18`'s dictée can build a tile bank and `s07`'s audio is unambiguous. Doctrine §C's fourteen-word budget applies. |
| `word` | 8 to 10 | The genuine gaps only: `la monnaie` as "change" (distinct from the 40 noisy substring matches), `le sans contact`, `le code`, `le rendu`, `le sous-total`, `la pointure`, and `magasiner` and `le dépanneur` if the probe does not find them published. |

**Imports rather than authoring: roughly 40 to 55 existing rows.** `courses` supplies the
noun inventory and nine of the thirteen payment phrases. `marche` supplies the stall and the
vendor nouns (`le marché`, `l'étal`, `le panier`, `le chariot`, `le caissier` /
`la caissière`, `le boulanger`, `le primeur`) and is fully in the seed.
`expressions-de-quantite` supplies `a1.29`'s containers. `nombres` supplies `a1.27`'s and
`a1.28`'s number sentences.

**Do not author a single row into `nombres`, `expressions-de-quantite` or `marche`.** Those
are `a1.27`, `a1.28`, `a1.29` and `a1.23` populations and their tests assert statistics over
them. `a1.11` broke `a1.03`'s `-e` statistic this way; `a1.23` carried rows into `a1.03`'s
ending population and the authored-only guard did not see it, because a **carry moves a
population even when an import does not**. If your merge carries rows into a neighbour's
theme, re-run that neighbour's suite before you call the build done.

**Doctrine §E:** every item a section names must be reachable, anything `practice` or
`groupDrill` speaks needs `voiceflash` in `drills`, and anything the dictée names needs
`dictation`. **Check that against Postgres, not the seed**, and expect to have to add drill
kinds to imported rows. `drills` is a Postgres enum array with its own apply gotcha; read it
before the first apply.

**A participle is never a corpus item** (settled doctrine §E via `a2.05` / `a2.20`). Not
that you should need it here, but `acheté`, `payé` and `rendu` are all in reach and `le
rendu` as a noun is a different thing from the participle.

**Collision watch.** `a2.07` almost certainly wants `ça fait combien` too. Collation C5
settles the boundary: **payment and money are yours; `l'addition` is `a2.07`'s**, because
the bill is a restaurant script move rather than a money move, and `a2.07` hands off to you
at the restaurant's payment moment. So **you author `ça fait combien` and `a2.07` imports
it from you** if it needs it, unless `a2.07` shipped it first, in which case you import.
Check before you author, and record which way it went.

---

## Wiring

```
scripts/author-courses-argent-batch.ts          content:courses-argent
scripts/merge-courses-argent-into-seed.ts
scripts/data/courses-argent-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-26-courses-argent.test.ts
```

Ids from the next free `fr.a2.courses.<nnn>` the probe reports. **Row count after the
apply, not the maximum.**

**The seed is a CUT.** `courses` holds 5 rows in the seed against a claimed 164 in
Postgres, so **your merge must carry every imported row your lesson references** or the
cards render empty. Postgres first, seed second.

- **Never `git checkout seed.json`.** Reverting it discards other authors' uncommitted
  lessons. `a2.07`, `a2.27` and `a2.28` are moving in the same file. Re-run the merge
  scripts instead.
- **Diff the DB bodies against git before any `content:publish`.** `seed.json` runs ahead
  of Postgres during authoring and publish then destroys the difference silently.
- **`content:publish` is currently blocked**: it would DELETE the seed-only `sons.09.l1`.
  Run `content:parity` first. Applying to Postgres and merging into the seed is the end of
  your job.
- **Canonical seed formatting is `JSON.stringify(x, null, 2)`.** A whole-file rewrite is
  safe; a huge git diff on `seed.json` is usually not a reformat, so read it before you
  trust it.
- **The dev content cache outranks the bundled seed on edited ids.** If a device shows old
  content after a merge, that is the cached OTA snapshot, not a stale Metro bundle.
- **A2 is paywalled on the dev build**, so device verification needs an entitlement or a
  flag before you adb deep-link into the lesson. The scheme is `ealch`, not `wonerock`, and
  `screencap` needs a separate call.

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

> **a2.26, THIS IS ALREADY TRUE OF YOUR FILE.** As of 2026-08-15
> `scripts/data/courses-lesson.ts` fails `pnpm -C ealch-admin typecheck` with
> **19 errors**: `beats` typing, **17 groupDrill items carrying `sub`**, and the
> `format: string` drill typing. Seventeen of your second lines are blank on
> device right now and nothing else will tell you. Rename them before you merge.

## Your test

Always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. The four holes in the guards
you will copy are in `A2-BRIEF-CORRECTIONS.md` §9, §13, §14.3 and §14.4, and **all four
apply to you**. In particular the house word boundary excludes the apostrophe, so a guard
built on it cannot see `l'argent`, `c'est` or `qu'est-ce que`: drop the apostrophe from the
left boundary and keep it on the right. And use a real word-boundary regex rather than an
ASCII `\b` in a string literal, which is the bug that made an `a2.02` guard never fire.

Specific to this lesson:

- **No scored item is set in Quebec.** Walk every quiz question, every dictée item, every
  drill item, every reading question and every graded scenario turn, and assert that none
  of them contains `dollar`, `TPS`, `TVQ`, `magasiner` or `dépanneur`. This is the
  assertion that keeps the regional exception from making price questions ambiguous, and it
  is the single most important test in the file.
- **A named `QUEBEC_FORMS` list appears in no quiz option**, correct or distractor.
- **Every price string in the lesson names its currency**, so region is always audible.
- **No item asks the learner to compute a total from a shelf price.** Assert that no
  authored string in the lesson pairs a percentage with a price, and that no `why` or
  `check` text instructs the learner to add anything.
- **The label and the till appear in one section**, adjacent, in `s15-quebec`.
- **`Ça fait combien ?` and a full priced answer appear in one section**, adjacent.
- **Zero repair rows are authored into `courses`.** Assert that no `courses` row this build
  creates carries a repair `fr`, and that `s11-repair` names `a2.07` by unit id and cites
  `a2.07`'s ids. Scope the absence claim to the rows this build authors, not to the bundle:
  scoping an absence claim to the whole seed is how four separate guards have fired on
  legitimate content.
- **No register ladder is named**, reserving `a2.29`. `pourriez-vous` appears nowhere.
  Guard the thing and not the letters, and put an English sentence in your `MUST_NOT_FIRE`
  list.
- **`a1.28`'s price-shape wording is quoted, not paraphrased**, and `a1.29`'s container rule
  is cited by unit id and not restated. Assert the strings; a paraphrase must go red.
- **Every dictée item is spelled in words**, carries `dictation` in `drills` checked against
  Postgres rather than the seed, and passes through the real `dicteeMode` function.
- **`commonErrors` carries `swipe: true`.**
- **Every `itemId` the lesson names resolves to an item in the merged `seed.json`.** This is
  the assertion that makes the `vetements` question and the seed-cut question moot.
- **`Scenario.exam` is absent** and no `ExamTask` row is authored.
- **No `modelPlayback`, `wrongThenRight`, `perSentenceReplay`, `scoreOn`, `autoplay` or
  `maxPlays`** is authored anywhere in the lesson.
- **Widen the jargon walk to include `intro` and `overview`** (§9) and run it over a
  `display()` walk so `sub` on a `cardDeck` card is seen (§13). Check the `-s` plural of
  every JARGON entry. Also walk `Lesson.intro`, which one A2 guard missed.
- **No em dash in any user-facing string.** A lesson about prices reaches for a dash to
  separate a label from a number; use a colon.
- **"honest" and "honesty" appear nowhere.** This is test-enforced across the whole seed by
  `sons-alphabet.test.ts`, and the guard is written as `\bhonest`, which cannot see
  "dishonest". A lesson about money, refusals and being short-changed is unusually likely to
  reach for the word, so check the substring and not the word boundary.
- **Import `hasPlainNasalFor` and assert your respellings through the real function.**
  Budget real time here: this unit's core vocabulary is `vingt`, `cent`, `cinq`, `quinze`,
  `combien`, `argent`, `centime`, `monnaie`, `moins`, `sans`, `en`, and **every price string
  is nasal-dense**. The checker has at least four documented blind spots and one documented
  false-positive class: it misses a nasal followed by a consonant inside a token, it misses
  a nasal that is about the French rather than the respelling, it wrongly flagged `aime`,
  `dame` and `scène` before the vowel-after-m/n fix, and `nous sommes` is a known false
  positive. Expect false positives on `centime`, `monnaie` and `combien` specifically.
  Repair the whole string, not just what the checker reports: a row with a nasal stem and a
  nasal ending holds one visible and one invisible nasal, and repairing only the reported
  half ships a wrong value the checker then calls clean.
- **The house respelling caps ARE phrase-final stress** (245 of 256, zero counterexamples).
  Reuse the notation; do not invent `ˈ`.
- **U+203F is not a liaison tie on a Pixel 6.** It renders as a low underscore, which is
  already visible in shipped `sons.10` content. Do not use it in a price string.

**Mutation-test everything**, and expect two of your mutations to find a weakness rather
than confirm a strength: that is the measured rate. Mutations worth trying here: set a quiz
option in Quebec, price a scored item in dollars, author a repair row into `courses`,
paraphrase `a1.28`'s price-shape string, write a dictée item in digits, drop `swipe` from
`s16`, name a `vetements` itemId the merge does not carry, add a fifth rung to `s05`'s
register card.

---

## Settled before you start

- The identity block, above. `lessonIds: []`, first build, version 1.
- **One lesson.** `den.tsx:169` opens `lessonIds[0]` only.
- **One quiz.** A second is silently never rendered.
- **`a2.07` owns the repair move.** You author zero repair rows.
- **`a2.29` owns the register ladder.** You author one contrast card and no ladder.
- **`a1.29` owns quantity language.** You apply it and never reteach it.
- **`a1.28` owns the price shape and the decimal comma.** Same.
- **`a2.18` owns `depuis`.** Not contested and not yours.
- **You own payment and money for the band.** `a2.07` owns `l'addition` and cites you at
  the restaurant's payment moment.
- **No `y` and no `en` as pronouns anywhere.** `a2.25` has zero lessons, so no unit in this
  band may build a teaching move on either (collation C8). `en` as a preposition is
  everywhere in the corpus, so guard the thing and not the letters.
- **All 35 `SECTION_TYPES` render.** Do not mark a section NEEDS-ENGINEERING.
- **No timer exists in the app.** Anything implying a clock is tap-to-continue.
- **Zero `ExamTask` rows, zero `Scenario.exam` values.** Carry the exam mapping in your
  report instead, verbatim from collation 1.12:

  > This unit carries exam value by **teaching what the exam tests** (transactional
  > reception at speed, a request in the right register, a structured 60-second turn), not
  > by producing an `ExamTask` row and not by populating `Scenario.exam`. Do not author
  > `Scenario.exam`. Do not author `ExamTask` rows. Do map each act to a named
  > TEF/TCF/DELF task in the design notes, because that mapping is what makes the content
  > right, and because it is what a future runner will consume.

  Your design's §6 mapping is good work and it survives as notes: TEF Canada CO plays each
  recording once, which is `s07` and quiz R1; TEF Canada EO section A is asking rather than
  answering, which is `s05` and `s20`; TCF Canada CO is four options, which is already the
  `listenChoose` shape; DELF A2 CE is "documents informatifs", which is `s19`'s receipt;
  DELF A2 PO part 3's canonical interaction is a shop transaction, which is `s20`.

## Still unverified

- **Whether `a2.07` is shipped**, and what its repair-move item ids are. Hard prerequisite.
- **Every Postgres row count in your design document.** The band supervisor did not query
  the database. Re-probe.
- **Whether the DB `content_units` row for `a2.26` matches the spine.** Four shipped A2
  briefs had `title` and `sub` swapped.
- **Whether `vetements`' 181 rows are `published`**, and whether your merge script carries
  imported rows into the seed.
- **Whether `argent-quotidien` holds anything in Postgres.** One row in the seed.
- **Whether `ça fait combien` really is zero rows corpus-wide**, and whether `a2.07` has
  taken it.
- **Whether `listening.hideLines` has landed.** Blocking step 3.
- **Whether `a1.28`'s and `a1.29`'s exact wordings are what the design reported.** Read the
  shipped lessons, not the design's summary of them.
- **Whether `taille` and `pointure` have importable published rows outside `vetements`.**
  `taille` is an unreliable substring probe.
- Baseline test count and the current mission-count range. Both move weekly, and the
  24-section shape is a convention that was never measured.

---

## What to report

Doctrine §F and `A2-BRIEF-CORRECTIONS.md` §12, plus:

- **How France and Quebec ended up coexisting**, concretely: which items carry which
  region, how many Quebec strings shipped, and the result of the "no scored item is set in
  Quebec" assertion. This is the band's only regional exception and collation §7.6 asks
  whether it should become the model rather than the exception, so what you learn here is a
  band finding and not a unit finding.
- **The measured percentage of your newly authored rows that are in the vendor's voice.**
  The floor is 40 percent.
- **The theme decision**, `courses` alone or `courses` plus `argent-quotidien`, with the
  probe output that decided it, and the row count before and after your apply.
- **What you imported against what you authored**, by id, with the source of every import.
- **Whether `ça fait combien` was yours or `a2.07`'s**, and which way the boundary went.
- **Whether `hideLines` existed when you reached `s07`**, and if not, exactly what shipped
  instead. If `s07` is a reading exercise with a play button, say that sentence in the
  report rather than describing it as listening.
- **The `vetements` answer**: intentional cut, merge gap, or bug. Four other units in the
  band are waiting on it.
- **`a2.07`'s cashier register as you matched it**, verbatim, and any canonical form you
  quoted rather than rewrote. Collation §7.3 suggests a shared constants file for the six
  recurring moves (greet, request, ask price, ask for repetition, complain, close). If you
  find yourself writing a second version of a move `a2.07` already shipped, say so: that is
  the evidence for building the shared file.
- **Your respelling repair list**, split by §14.1's shape, and any row you deliberately left
  alone.
- **What the `canDo`'s "count change" turned out to need**, since nothing in the corpus
  supported it and `s12-change` is authored from nothing.
- **Whether the script-first framing held**, or whether the lesson read as a shopping
  vocabulary review with a listening section attached. That is the question the whole band
  is being built to answer, and you are the second unit to answer it.

---

*This file is `.md` and therefore gitignored in this repo. It needs `git add -f` to be
tracked.*
