# a2.34 « Pronoms possessifs » — build report

Built 2026-08-18 against `A2-34-PRONOMS-POSSESSIFS-PROMPT.md`, doctrine §F,
Corrections §12 and A2-TAIL-AUDIT §4.

**Shipped:** `a2.34.l1`, v4, 24 missions, 30 questions, 32 authored rows, 30
imported, 11 respellings repaired. Applied to Postgres and merged into
`seed.json`. Not published.

```
scripts/data/pronoms-possessifs-{corpus,lesson,terms}.ts
scripts/author-pronoms-possessifs-batch.ts        content:pronoms-possessifs
scripts/merge-pronoms-possessifs-into-seed.ts
scripts/_a234_mutate.ts                           36 mutations, by hand
ealch-v2/src/content/a2-34-pronoms-possessifs.test.ts    147 assertions
```

**The filename collision the prompt asks about is real, on all five names.**
`author-possessifs-batch.ts`, `merge-possessifs-into-seed.ts`,
`scripts/data/possessifs-{corpus,lesson,terms}.ts` and the package script
`content:possessifs` are a1.17's and all shipped. Everything here is
`pronoms-possessifs-*`.

---

## 1. The three things the prompt said were "not measured, worth one command"

Answered first, in the order asked, because two of them changed the corpus plan.

**Does importing a b1 row into an a2 lesson trip a level guard?** No. There is
no level guard anywhere in the product. Measured by walking every shipped
lesson's declared ids: four name a foreign-level row, and **`a2.33` names four
`fr.b1.pronoms-essentiels.*` rows in this very theme**, one seq position back,
green across 4,768 tests. This is an ordinary import with a precedent one lesson
old, and it is what makes §2 possible.

**Do the plurals exist as headwords?** Eleven of the twelve do. §2.

**The baseline test count.** 4,768, measured 2026-08-18 before anything was
written, all passing. After this build's own guard landed: **4,909**, +141 and
nothing else moved.

**Final figure 4,972**, all passing — and the extra 60 are not mine. `a2.35`
(the A2 capstone, two lessons) landed from another author partway through my
device pass, taking the seed from 76 lessons to 78. My merge's `MUST_SURVIVE`
check and the seed-wide suite both confirm I did not disturb it, and its arrival
is exactly the concurrent-build hazard doctrine §D warns about.

---

## 2. Every claim in the prompt measured false

Eleven, which is above the three-to-six the corrections file predicts, and the
reason is that the prompt's corpus probe asked about six masculine singulars and
reported the shape of that probe rather than the shape of the corpus.

### 2.1 « Five of the six headwords exist. Import all five and author only `le leur`. »

**EIGHTEEN possessive-pronoun headwords are published, all of them in this
lesson's own home theme**, every one `flashcard + voiceflash + review`:

```
fr.b1.pronoms-essentiels.026 le mien    .027 la mienne   .028 les miens
                        .029 les miennes .031 le tien    .032 la tienne
                        .033 les tiennes .034 le sien    .035 la sienne
fr.b2.pronoms-essentiels.001 les siens  .002 les siennes .004 le nôtre
                        .005 les nôtres .007 le vôtre    .008 les vôtres
                        .010 c'est le leur .011 c'est la leur .012 les leurs
```

This is a2.33 §A.1 one lesson later and in the same theme: the paradigm was
published for a level the learner has not reached and never taught at the level
that needs it. **Seventeen imported, one authored.**

### 2.2 « `le leur` NO HEADWORD. Author only `le leur`. »

True of `le leur` and false as an instruction, twice over.

`le leur` and `la leur` **are** published, as `c'est le leur` and `c'est la
leur`. a2.15 §13 is the rule — *absent is not the same as nowhere* — so the
house respelling for a possessive `leur` was READ OFF `seh luh LUHR` rather than
invented.

And the bare pair cannot be authored at all. §2.3.

The one genuinely absent cell of the eighteen is **`les tiens`**, and it is the
single headword this build authors. `mien` ships four forms, `sien` four,
`tien` three.

### 2.3 The flashcard hub cannot tell `le leur` from `la leur`, and that is why the corpus published them with `c'est` in front

`flashhub-coverage.test.ts` normalises by STRIPPING A LEADING ARTICLE, and the
article is the only thing separating those two. Measured through the real norm:

```
hubNorm('le leur')  -> 'leur'      hubNorm('la leur')  -> 'leur'
hubNorm('le nôtre') -> 'nôtre'     hubNorm('la nôtre') -> 'nôtre'
hubNorm('le vôtre') -> 'vôtre'     hubNorm('la vôtre') -> 'vôtre'
```

So authoring `la nôtre` or `la vôtre` would collide with the PUBLISHED
masculine, and authoring `le leur` and `la leur` in one batch would collide with
each other — a2.08's `mieux` / `le mieux` failure exactly (Corrections §15.2,
hole 6).

**Three forms are therefore absent for a reason and stay absent.** Each is
taught inside a SENTENCE, which the hub check exempts. `mien`, `tien` and `sien`
are untouched by this: their feminine changes the word as well as the article,
so all twelve normalise apart. Asserted against Postgres in both directions, so
the day the collision stops being real the build says so.

### 2.4 Trap 2 is wrong about French — a2.08 §15.1, in a new place

The prompt says:

> « `leur` never takes an `-s`; the article does. `leur` is invariable inside the
> pronoun. The plural is carried by `les`, and the `-s` on `leurs` is the
> article's agreement, not `leur`'s. »

There is no reading of French on which that is true. `les leurs` is the plural
and the `-s` is on BOTH words; there is no `les leur`. The corpus's own gloss
says so: `fr.b2.pronoms-essentiels.012` is « les leurs » = « theirs (pl.) ».

**This is the sixth kind of brief error a2.08 §15.1 names, and measuring the
corpus does not catch it.** The corpus was measured, the guards fired, and the
false claim would have shipped as a scored `errorSpot` key.

a2.24 shipped the TRUE version and it is about a DIFFERENT `leur` — the one in
front of a verb. So its sentence is quoted unchanged and the trap became the
thing that is both true and hard: **there are three `leur`s and exactly one of
them never takes an `-s`**, with all three on one screen and every one of them a
published row, two of them a2.24's own trapDrill cards.

The prompt's four wordings are held in `FALSE_LEUR_CLAIMS` and refused on every
learner surface, because a later author reading the brief will write them. The
guard is anchored on the corpus row's own gloss, which is a2.08 §15.1's own
prescription.

### 2.5 « `les miens` and `les miennes` are one sound » — false, and the corpus is why the prompt believed it

`miens` is /mjɛ̃/ and `miennes` is /mjɛn/: a nasal vowel against an oral vowel
plus a real /n/. They are the same contrast as `le mien` against `la mienne`,
which the prompt itself calls audible and asks for two `listenChoose` items on.

The corpus respells both as `lay myehn`, IDENTICALLY, because all twelve
`mien`/`tien`/`sien` rows close their nasal with a plain n (§3). **The prompt
read a defect in the respelling as a fact about the language.** Following it
would have deleted four legitimate ear questions and shipped the defect.

What IS one sound, measured across all eighteen: **the plural `-s` is silent on
every form**, so the possessive word never marks number to the ear and only the
article does. That is `HOMOPHONE_FORMS`, and it is a2.33's `ce` / `ces` finding
one paradigm along.

### 2.6 « `à moi` occurs 5 times » — exact, and the conclusion drawn from it is not

Five rows on an accent-aware whole-word walk, and FOUR of them are `penser à
moi` or `quant à moi`, which is not possession. The possession sense has ONE
published row at any level (`fr.b1.immigration-et-citoyennete.238`) and it needs
`appartenir` to parse, so it is named and not imported. `à toi` is better
served: `fr.a1.questions.082` « Est-ce que ce stylo est à toi ? » is the
possession sense at A1 and is imported.

### 2.7 The circumflex is worse than the prompt says

« `fold()` strips it, so no typed surface can test it — use mcq. » Exact, and
**the ear cannot test it either.** The corpus respells the adjective `votre` as
`voh-TRUH` (`fr.sons.mots-essentiels.103`) and the pronoun `le vôtre` as
`luh VOH-truh`, so the possessive word is the same noise in both and only the
article separates them. mcq is not the better surface, it is the only one, and
the batch refuses any typed question keyed on either form unless it also accepts
the unaccented spelling.

### 2.8 NEXT FREE had moved

The prompt says `.337` and tells you to check the row count. Checked: a2.33
applied 27 rows on 2026-08-17. Measured 2026-08-18: 661 published in the theme,
363 at `fr.a2.*`, no gaps, **NEXT FREE `.364`**. Block `.364`–`.410` allocated,
`.364`–`.395` used.

### 2.9 The reframe the prompt proposes is a1.17's, reworded

It proposes « It agrees with what is owned, never with who owns it », and a1.17
shipped « Ask what is owned, not who owns it. » The prompt's own instruction
three lines earlier is to « present this as a rule the learner already has ».

A reframe that restates the prerequisite spends the lesson on revision. §4.

### 2.10 and 2.11, both confirmed exactly

`possessifs` holds 0 rows and must not be created — confirmed, 0 rows, not
created. And the identity block is exact byte for byte against `content_units`,
which is the third time in this band (a2.33 and a2.08 were the others), so
Corrections §1's warning has stopped being true for the tail.

---

## 3. The respellings: the largest single finding

**Eleven repairs, and the checker is right about five of them and actively
harmful about six.**

Every one of the twelve published `mien`/`tien`/`sien` rows closes its ending
with a plain `n` and `hasPlainNasalFor` flags all twelve. That much is ordinary.
What is not is that they split into two kinds:

```
le mien      luh myehn   /mjɛ̃/   a genuine nasal vowel   -> luh MYEHⁿ
la mienne    lah myehn   /mjɛn/   a REAL /n/, no nasal    -> lah MYENN
```

Both are flagged. **Repairing the second the way the report implies gives
`lah MYEHⁿ`, which the checker then calls CLEAN and which respells « la
mienne » as « la mien ».** That is invariants §3's `jaune` / `automne` false
positive, and here it would erase the one contrast in the whole paradigm the ear
can settle — the contrast this lesson's only listening mission exists to teach.

Measured through the real checker, all three states of all eleven. Corrections
§14.1's two reasons are both in play and are kept as separate, mutually
exclusive fields:

```
blind   the checker cannot see the defect              FALSE on all eleven
house   the minimal repair is clean and not the house  TRUE on the six feminine
```

`half !== to` on the six and `half === to` on the five, asserted as
`(half !== to) === house`. And the harm is asserted rather than described: on
each feminine row the half-repair is asserted to COLLIDE with the corresponding
masculine's final value, and the final values are asserted not to.

**The house ending was read off published rows, not invented (a2.15 §13).**
Measured across every published `-enne`/`-ienne` headword: 27 write `-YEN` or
`-YENN` and 7 write the flagged `-YEHN`.

```
la chienne  lah shyEN   ·  la gardienne  gar-DYEN
une pharmacienne  far-ma-SYENN  ·  une mécanicienne  ün may-ka-nee-SYENN
```

`-YEHⁿ` for the masculine is Corrections §14.1's own settled value for `bien`,
on four published rows. `mien` is the same rhyme.

**Two rows deliberately NOT repaired, named rather than left silent.**
`fr.a1.jardinage.079` « les gants » `leh GAHN` closes a nasal with a plain n AND
writes `les` as `leh`; it is in a theme this unit does not touch and is not
imported. `fr.sons.mots-essentiels.103` « votre » `voh-TRUH` is identical to
`le vôtre` apart from stress, and that is CORRECT rather than a collision — it
is the measured evidence for §2.7.

**And the liaison, which nothing in this project checks.** This lesson creates
five `est` + vowel frames. Every one is in a by-name table and the respelling
carries the moving consonant onto the following syllable — `seh tah MWAH`,
never a tie. There is not one U+203F anywhere in the build, and the guard caught
one I had written into a scene IPA string.

---

## 4. The reframe

```
Two words, and the thing owned picks them both.
```

**Rejected: the prompt's own.** « It agrees with what is owned, never with who
owns it » is a1.17's reframe reworded, and a1.17 is this unit's declared
prerequisite. a1.17's line is QUOTED instead — verbatim, imported from
`possessifs-terms.ts` so it cannot drift — in `s01-scene`'s break card and
`s05-a117`, and this lesson's reframe covers what a1.17 cannot: there are now
TWO words, and the first of them is the article a1.17 spent a whole lesson
teaching the learner to throw away.

Three more rejected, with reasons, in `REFRAME_REJECTED`. Carried 25 times: 23
section `say` values, the roundup body, and `Lesson.reframe`. `s03-adj` carries
the a2.33 quotation instead, which is why it is 23 and not 24.

---

## 5. How the Owns got more weight than the paradigm

```
act1  Un mot de plus                 3   scene, goals, adjective-vs-pronoun
act2  Ce qui décide la forme         6   the Owns, half one
act3  Là où le français s'arrête     5   the Owns, half two
act4  Les trois leur                 4   the trap
act5  Production                     3
act6  L'examen                       3
                                    24   Owns 11, scene+trap 7
```

The risk in an eighteen-cell lesson is that it becomes a reference document.
**The paradigm gets ONE mission of the eleven** — `s09-table`, the tapTable, six
rows because there are exactly six families and six is the Pixel 6 ceiling. The
other ten are what decides the form, and where the system stops giving you a
fourth cell. Asserted.

**The three required layouts.** Layout 1 (`s04-four`) is all four forms of `le
mien` with the owned noun visible in each, asserted cell by cell with the noun
required to appear exactly once. Layout 2 (`s03-adj`) is `mon sac` beside `le
mien`, four pairs, and it is the FIRST teaching screen because a1.17 is the
prerequisite. Layout 3 (`s17-amoi`) is `C'est le mien` beside `C'est à moi` with
the register marked on BOTH halves — the prompt says "on each", and a card that
marks only the spoken one implies the other is neutral.

---

## 6. Corpus: authored versus imported

**32 authored**, `fr.a2.pronoms-essentiels.364`–`.395`, all `a2`, all in
`pronoms-essentiels`. 31 sentences and one phrase (`les tiens`).

**30 imported**: 18 headwords (b1 ×9, b2 ×9), a2.24's three `leur` rows, and
nine sentences from `comparaisons` (×7), `bureau` and `questions`.

**Not one authored row is gendered**, so none can join a1.03's measured ending
population, and the merge's `measureGenreImpact` reported **unmoved (population
2014)**.

**Row count: 661 → 693 published** in the theme (+31 on the first apply, +1 on
the v2 re-apply). The a2 slice 363 → 395. The row count is the only id signal
and it is the figure checked, not `max(id)`.

**The drill split, which shaped the whole tranche plan.** The eighteen headwords
and the three `leur` rows all carry `flashcard`, so a tranche can release them.
All nine comparative sentences are `dictation`-only or `sentence`-only, so a
release would validate, publish and draw nothing. They are reachable by being
NAMED — in `s05-a117`, `s07-agree`, `s08-unseen`, `s11-three`, the terms and the
drills — and the batch asserts both directions.

**a2.08's hand-off, read as the prompt asks.** `A2-08-BUILD-REPORT.md` §7 and
§15 say it touched none of the eighteen possessive rows in `comparaisons` and
name **`.017` and `.020` as "the two worth having"**, both of which it wanted and
dropped so its own guard could say *nowhere* rather than *scoped*. `.017` is
imported and it is the best row in the corpus for this lesson — « Notre équipe
joue mieux que la vôtre. » carries the adjective and the pronoun of one family
in a single published sentence, with and without the circumflex, which
Corrections §3 says the corpus does not do. **`.020` is NOT imported**, and that
is a deliberate substitution rather than an oversight: `fr.a2.comparaisons.084`
« Ma valise pèse plus que la tienne. » is the same frame on the same noun, two
words shorter, and importing both would put one sentence on two screens.

**Five rows deliberately not imported**, each with the reason, including
`fr.a2.conflits-reconciliation.002` (carries `c'était`, the imparfait, which the
A2 trail never teaches and this is seq 34 of 35) and
`fr.a2.pronoms-essentiels.182`, the row the prompt names as the only place `le
leur` appears — it is two object pronouns in a row, which a2.25 explicitly
reserved as an open curriculum question.

---

## 7. The lesson: shape, quiz, and every question's `why`

24 missions, six acts, one quiz, one sheet, one `tapTable` in the flow, one
`table` in the sheet at three columns.

**30 questions, in four rounds of 8/8/7/7.** Format mix against the measured A2
band (mcq 379 / typeIn 317 / errorSpot 166 / listenChoose 96):

```
typeIn        15    50%    the band's 32%, weighted up as the prompt asks
mcq            7    23%    the band's 38%, well under the half cap
errorSpot      6    20%    the band's 17%
listenChoose   2     7%    the band's 10%
```

The typed weight is forced rather than chosen, and for the opposite reason to
a2.33's. There `fold()` was the only surface that worked; here it is genuinely
good — it keeps a final `-e` and a final `-s`, which is exactly what separates
the four cells, so `lemien`, `lamienne`, `lesmiens` and `lesmiennes` are four
different strings.

**Every question has a `why` and a `ref` that resolves.** Asserted. Every
free-text question accepts the answer it displays, through the real `fold()`.
Every `typeIn` on agreement fixes the owned noun's gender and number in the
stem, which the prompt asks for by name — asserted.

**Correct-answer spread 3/3/3** across the nine closed-format questions. The
first draft ran 6/2/1 and `validateDensity` refused it.

**The generalisation mission is at 8, not "near the end", and that is a
departure worth stating.** The prompt asks for « one mission, near the end ».
`s08-unseen` closes act 2, which is where a2.33 put its own `s08-unseen` and
shipped. The reason it belongs there rather than later is that the form it asks
for is `la mienne` — act 2's material — and by mission 8 the learner has the
four cells, a1.17's rule, the ear contrast and the sort. Act 3 teaches the
families that have three cells rather than four, which the generalisation does
not test. **The scored generalisation item IS near the end**: round 2 of the
quiz, mission 22, and it is the only quiz item using a noun absent from the
lesson's vocabulary.

**The generalisation test:** `la casquette`, feminine, `fr.a2.vetements.060`,
five published rows and ZERO of them carrying any possessive pronoun. Feminine
on purpose: it forces `la mienne`, the one cell of the four where the word
itself moves rather than just the article. Six rejected candidates recorded with
the reason for each. It appears in exactly two sections — the control page and
the quiz — asserted in both directions.

---

## 8. What I wanted to write and could not

Recorded in `WANTED_AND_IMPOSSIBLE`, a2.09's model:

- a `typeIn` keyed on the circumflex in `le nôtre` — `fold()` strips it, so the
  learner is told they spelled it right. Written as an mcq.
- a `listenChoose` between `notre` and `nôtre` — the corpus respells them the
  same, so the ear has no key either. This is the only thing in the lesson that
  is mcq-or-nothing.
- a `listenChoose` between `le mien` and `les miens` — legal but weak: they
  differ only in the article, which is a2.33's material rather than this
  lesson's. The two ear items ask about the stem instead.
- a `typeIn` on the capital in `Ce sont` — `fold()` lowercases.

---

## 9. The stressed-pronoun gap, named as the prompt asks

The prompt: « Stressed pronouns are needed for `à moi` and are owned by no unit.
Use the two or three you need, name the gap in your report, and do not build a
paradigm. »

**The gap is real and it is half-owned.** Corrections §7 says the ownership
question can only be answered by reading the briefs and the shipped
`grammarIntroduced` rather than by searching unit bodies, and both were read:

- no A1 or A2 brief names `moi`, `toi`, `lui`, `elle`, `nous`, `vous`, `eux` or
  `elles` as a stressed set
- **a2.24 shipped `STRESSED_RULE`** — « After a little word like avec, sans or
  pour, lui stands on its own and stays where English puts it. » — as its own
  trap two, which teaches the shape for `lui` and only for `lui`
- published counts: `à toi` 10, `à moi` 5, `à eux` 3, `à elles` 0

So the set is owned by a2.24 for one person and unowned for the other seven.
This build uses **`moi` and `toi`** and builds no paradigm, asserted in both
directions. The gap is recorded in `STRESSED_GAP` so the next author does not
re-derive it.

---

## 10. The three quoted strings, and whether they were available and consistent

All three were available. All four (there are four, not three) are IMPORTED
rather than retyped, so "verbatim" is mechanical: a paraphrase cannot pass and
the owning lesson rewording fails this build.

| quote | owner | consistent? |
|---|---|---|
| `The word lui is him or her. Going from one set to the other you lose the gender, which is one less thing to get right.` | a2.24 `GENDER_LOST` | yes, and it holds here word for word |
| `The leur in front of a verb never takes an s. Ever.` | a2.24 `LEUR_RULE` | **yes, and the prompt is wrong about what it means** |
| `A noun after it means it points. No noun means it replaces.` | a2.33 `REFRAME` | yes, with an extension |
| `Ask what is owned, not who owns it.` | a1.17 `REFRAME` | yes |

**The a2.24 leur rule needed a scope clause.** Its sentence is true of the
object pronoun and false of the possessive, so quoting it and stopping would
teach the prompt's own error. The build requires the words « in front of a
verb » to appear wherever the quotation does, asserted, and the mutation harness
confirms that removing them goes red.

**The a2.33 reframe needed an extension**, exactly as a2.33 itself needed one
for a2.06's. a2.33's line is about pointing; this lesson's is
`Here a noun after it means the one word, and no noun means the two.` The
extension is asserted to appear after the quotation, never before.

**Both a2.24 quotations are asserted to sit on the same card as the unit id**,
which is the hole a2.33's mutation harness found: a section-wide check passes
while the unit id sits on any one of three cards.

**a1.17's test — « a possessive has a thing behind it » — is where this lesson
extends rather than quotes.** a1.17 said a possessive has a thing behind it.
`les leurs` is a possessive with nothing behind it at all, and that is the new
case. It is the third turn of doctrine §B.7's recurring shape (a2.02 → a2.06 →
a2.33 → here).

**And the hand-off is asserted in the direction nobody checks.** a2.33 declared
`POSSESSIVE_FORMS` — twenty-one forms — and asserted every one appears nowhere
in a2.33. This build asserts all twenty-one reach a screen HERE. It also asserts
that a1.17's and a2.33's copies of that list have not drifted apart, because
they are maintained in different files by different builds.

---

## 11. Guards, mutations, and the sixth hole in the shape this band copies

**36 mutations, 34 caught on the first run.** A2-TAIL-AUDIT §4 predicts two
finding a weakness rather than confirming a strength, and it was exactly two:

- a scenario turn with no `userEn`
- a scenario turn with one `alt`

Both are contract lines `scenario.logic.test.ts` enforces seed-wide and both
were things this file simply did not look at. Three assertions added; the two
mutations re-run and both now go red.

**Two more defects the guards found in this build's own content**, before any
mutation:

- `la leur` was printed on the tapTable detail and carried by **no corpus row**.
  The batch's version of that check asked for the bare stem `leur`, which `le
  leur` satisfies; the TEST asked for the full two-word form and caught it. One
  row authored (`.395`), one example added, both checks now at the same
  strength, and the lesson version moved 1 → 2 rather than the body being
  corrected under a number that had already been applied (Corrections §10).
- a U+203F tie in a scene IPA string, which draws as a low underscore on a
  Pixel 6.

### The sixth hole in the guards this band copies

Corrections §14.3 records that the house word boundary **excludes `'` on the
left**, so a shape cannot see `c'est`. The mirror image is also true and nobody
has recorded it: **keeping `'` in the RIGHT-hand class makes « a2.24's line »
invisible to a check for `a2.24`**, and every citation in this band is written
in exactly that shape. It went red on `s15-trap`, where a2.24 is named twice and
both times with an apostrophe after it.

`namesUnit` drops the apostrophe from both sides, and only for a unit id, which
can never be part of an elided French word. Both the batch and the test carry it.

### Three guards that fired on legitimate content, and were narrowed rather than deleted

Every one is the a2.33 « a lesson cannot teach four words it is forbidden to
list » shape:

- the false-leur-claim guard fired on an `errorTrigger.description` that
  DESCRIBED the false claim rather than asserting it. Reworded, not exempted.
- the `les leur` guard fired on the `commonErrors` `wrong` block, which is a
  marked slot. `s16-errors` added to the allowance.
- the bare-possessive guard fired on an mcq distractor in `s08-unseen` and on a
  drill's `opts`. Both are marked slots; `s08-unseen` added to the allowance and
  a drill's `opts` dropped from that one walk **by name**, with a second check
  so the dropped field is not a hole.

And one allowance was **removed** because it was dead: `s15-trap` was on the
bare-form list by analogy with a2.33 and shows no bare possessive, because every
wrong form on it is a `leur` — which is also the adjective and the object
pronoun and is correct with nothing in front of it. A list asserted in both
directions catches that; a list asserted in one does not.

### `errorTrigger.description` is read by no renderer

Grepped 2026-08-18: `quizRounds.logic.ts` consumes only `id`, `drill` and
`retest`. It is therefore curriculum-facing like `grammarIntroduced`, and the
jargon walk arguably should not cover it. **It is kept in the walk and the
description reworded instead**, because narrowing it would be the first step
toward the hole Corrections §9 records for `intro`.

### What the test does NOT cover, said plainly

`grammarIntroduced` and `grammarAssumed` are excluded from the jargon walk, by
name, because invariants §8 says outright that they may use the precise words
and Corrections §9 is explicit that the walk must not be widened to them. Seven
entries live there — `possessum`, `possessor`, `determiner`, `stressed pronoun`
and three more — and no renderer draws any of them.

---

## 12. What in `A2-BRIEF-CORRECTIONS.md` this build found wrong or stale

§12 asks. Three things, and one addition.

**§11's theme table is stale for `pronoms-essentiels`, which is expected and
worth restating with the date.** It records 634 published / 336 at `fr.a2.*`.
Measured 2026-08-18: 661 / 363 before this build, 693 / 395 after. The file is
measured, not eternal, and this is the second lesson in three days to move it.

**§9's list of holes in the guards you will copy gains a FIFTH, and it is the
mirror of §14.3.** The right-hand apostrophe class. §11 above.

**§6 as amended by §14.1 needs one more sentence, and it is not about a nasal
the checker cannot see.** §14.1 splits the reasons into `blind` (the checker
cannot see the defect) and `house` (the minimal repair is clean and not the
house value). Both are about the repair being INSUFFICIENT. This build met a
third case: **the minimal repair is clean and actively WRONG** — it introduces a
nasal vowel the French does not have and collapses two forms the lesson exists
to separate. It files under `house: true`, which is right, but the phrase "not
the house value" understates it. A row where the checker's own report would
teach a sound that is not there is worth naming as its own case, because an
author who trusts the report has no way to notice.

**And a warning §15.1 half-covers.** a2.08 says a brief can be wrong about the
language and that measuring the corpus does not catch it. This build met the
harder version: **the corpus can be wrong about the language, and then the brief
inherits it.** The prompt's homophone claim (§2.5) is false, and the reason it
is in the prompt is that twelve published rows respell two different sounds
identically. Reading the corpus and reading the brief would both have confirmed
it. Only reading the French did not.

---

## 13. Device verification

**Done in full, on a USB Pixel 6 (21041FDF600BMN), Metro on 8082 over `adb
reverse`.** It found one defect no host gate could see, and cleared two things
that looked like defects and are not.

### Getting Metro up at all, which is worth writing down

Every bundle request returned **500 `Cannot read properties of undefined
(reading 'get')` at `DependencyGraph.js:28`**, on a fresh Metro and again after
`--clear`. The stderr had the cause and the HTTP error did not:

```
Failed to construct transformer: Error: Failed to start watch mode.
    at Timeout._onTimeout (@expo/metro-file-map/build/Watcher.js:163:63)
```

The file WATCHER times out, so the file map is never built, so `DependencyGraph`
gets an undefined map and every bundle 500s. **`CI=1` fixes it**: metro-file-map
does a one-shot crawl instead of watching, and the bundle went from 500 to 200
at 27.8 MB.

`ealch-devclient-foreign-metro` records this symptom and attributes it to npx's
nested process tree. That is not the cause here — it reproduced under
`node node_modules/expo/bin/cli start` launched detached from PowerShell, and
the watcher timeout is what the stderr actually says.

**The cost of the fix, and it bit once:** `CI=1` disables reloads, so Metro does
not pick up an edited `seed.json`. The first re-check after the v3 fix showed the
OLD table. Restart Metro after any content edit.

### The host half

The served bundle was grepped for this build's strings. All present, and the
counts are the guards' own figures:

```
Two words, and the thing owned picks them both.      25   = REFRAME_COUNT
Ask what is owned, not who owns it.                  14
The word lui is him or her. …                         7
The leur in front of a verb never takes an s. Ever.  15
A noun after it means it points. …                   26
Here a noun after it means the one word, …            1
a possessive has a thing behind it                   13
Paul a le sien et Marie a le sien.                    4
lah MYENN / luh MYEHⁿ / seh tah MWAH              7 / 8 / 3
la casquette                                          2   = control page + quiz
```

A `case` was confirmed in the renderer for all twenty section and sheet types
this lesson uses.

### The phone half, by screen

| screen | result |
|---|---|
| lesson cover | title, `A2 · LEÇON 34`, full intro, no clipping |
| missions list | all 24 rows, `0 / 24`, every act title correct |
| **mission 4, required layout 1** | four cards, owned noun visible, **`[luh SAK eh luh MYEHⁿ]` — the superscript draws** |
| mission 4.2 | **`[lah vah-LEEZ eh lah MYENN]` — visibly different from the masculine** |
| **mission 9, the tapTable** | six rows, three columns, every cell on one line, all circumflexes correct |
| **mission 15, the trapDrill** | correct STEPPED shape, `THE RULE` step with Continue. Both a2.24 and a1.17 quotations render with the scope clause |
| **mission 17, required layout 3** | both registers marked, and **the liaison renders `[seh tah MWAH]`** — t on the next syllable, no tie |
| mission 24, roundup | reframe verbatim, four points, every cited unit id |
| reference sheet | see below |

**The single most important thing the device proved** is §3: `MYEHⁿ` and `MYENN`
render as visibly different respellings on adjacent cards. Before the eleven
repairs both read `myehn`, and the lesson's only ear mission would have been
asking about a contrast its own cards denied.

### The sheet table: a defect I diagnosed wrong, then corrected

This is the part of the device pass worth reading, because the first conclusion
was wrong and the correction came from the renderer rather than the phone.

**What I saw.** v2 shipped the reference sheet's table with both genders in
every cell. On the phone the third column ran past the screen edge:

```
mine       le mien · la mienne     les miens · les m
yours      le tien · la tienne     les tiens · les tienn
```

**What I concluded, and it was wrong.** Corrections §15.5 says « a sheet does
not scroll sideways » and files a2.08's version of this under COLUMN COUNT. I
took the overflow at face value, decided the real constraint was total row
width, trimmed the cells to the masculine, moved the feminine into `rowDetails`,
and shipped that as **v3** with three new assertions.

**What `ReferenceSheet.tsx` actually says.** Two lines, and they reverse both
halves:

```
// A real table. Horizontally scrollable so a wide row never squashes its
// cells into unreadable columns on a phone.
<ScrollView horizontal nestedScrollEnabled directionalLockEnabled …>

case 'table':
  return <SheetTable cols={section.cols} rows={section.rows} />;
```

1. **The sheet table DOES scroll sideways.** It is wrapped in a horizontal
   `ScrollView`, deliberately, with a comment saying why. The table extending
   past the edge is the design, not a defect. **Corrections §15.5 is false on
   this point, and a2.08 dropped a column over it.**
2. **`rowDetails` is never passed to `SheetTable`.** It has no reader inside a
   reference sheet, exactly like `cheatSheet`. So v3 moved nine forms onto a
   field nothing draws — the fix was the regression.

**Reverted at v4.** The cells carry the whole paradigm again. The guards were
replaced: instead of a width budget, the test now asserts the cells carry all
four forms of every family, and that no sheet section uses a type
`ReferenceSheet` does not draw. The tapTable keeps its budget, because unlike
the sheet it is NOT in a horizontal scroller and its 31-character widest row was
measured rendering on one line on this device.

**What the phone was good for and what it was not.** It showed me the symptom;
it could not tell me whether the symptom was a bug, because a horizontal scroll
view looks exactly like an overflow in a screenshot. The renderer settled it.
That is the invariants' own instruction — « grep the renderer » — applied to a
device finding rather than to an authored field.

### Two things that looked like defects and are not

Both were measured against the whole seed before touching anything.

**Five mission titles are truncated in the list.** `a2.32`'s commit «four
mission titles the rail was cutting» made this look like a defect. Measured:
**125 of 1,840 shipped mission rows exceed the width my widest one does, and the
widest shipped is 58** — `a2.33`'s « Four things that can follow it, and one of
them must », device-checked one lesson ago. Mine top out at 46. Truncation in
the LIST is designed; the full title renders in the mission header, which the
device confirmed on mission 4.

**A card-deck hint is truncated.** Mine is 72 characters; `a2.04` ships 105 and
**60 of 303 shipped hints exceed 55**. Designed behaviour.

**Also measured and cleared:** the «37-character term chip budget» in a2.33's
terms file is an authoring guideline rather than a renderer limit — **444 of
1,324 shipped chip rows exceed it**, widest 126, and my widest is 45. And a
spaced `?` in a scene bubble is ordinary French typography with **108 shipped
instances**; `ealch-scene-bubble-clips-tail` is about the spaced `!`
specifically, and this lesson has none in any bubble.

### What the device pass did NOT cover

- **Audio.** Every `recordingId` resolves to nothing by design, so nothing was
  heard. The one-take constraints live in `desc`.
- **The quiz answered end to end.** Its rendering was confirmed in the missions
  list and by `quizQuestions()` in the suite; no round was played through.
- **The `s13-read` reading passage and `s19-talk` scenario** were not opened on
  the phone. Both are covered by seed-wide contracts (`glossary-resolves`,
  `scenario.logic`) and by this file's own assertions.

---

## 14. The version counter, and why it moved three times

Corrections §10: move the counter rather than correcting under a number that has
already been applied. It moved for three different reasons and all three are
worth separating.

- **v1 → v2.** The guard found `la leur` printed on the tapTable detail and
  carried by no corpus row. The batch's version of the same check asked for the
  bare stem `leur`, which `le leur` satisfies. One row authored (`.395`), one
  example added, both checks brought to the same strength.
- **v2 → v3.** The device pass, and it was **wrong**. See §13.
- **v3 → v4.** Reading `ReferenceSheet.tsx` reverted v3. The sheet table scrolls
  horizontally by design and `rowDetails` is never passed to it, so v3 had moved
  nine forms onto a field with no reader.

v3 was applied to Postgres and merged before it was reverted, which is why there
are four numbers rather than two. Nothing was corrected under a shipped number.

---

## 15. Anything I could not verify

- **Audio.** Every `recordingId` resolves to nothing, which is the correct
  shipping state: `CLIP_MANIFEST` is empty by design and `audio:render` was not
  run. The six `desc` blocks carry the constraints that cannot be recovered once
  a clip is delivered — in particular that the plural `-s` must NOT be audible
  in the listening mission, because the third question measures exactly that.
- **`content:publish` was not run.** Applying to Postgres and merging into the
  seed is the end of a lesson build. `content:parity` before and after reports
  the one pre-existing divergence (`b2.01.l1`, database-only, `in_review`) and
  says nothing in the seed is at risk.
- **`seed.version` left at 53.** It is the OTA snapshot number and belongs to the
  publish step.
