# a2.05 build report

`a2.05.l1` « Le passé composé avec avoir », **seq 16**, the head of the
five-lesson past-tense arc. Applied to Postgres and merged into `seed.json` at
**v4**, after a Pixel 6 pass. Not published.

Doctrine §F, plus the five things the brief asks for by name. The ledger
amendment is `A2-BATCH-1-LEDGER.md`, "a2.05 amendments, 2026-08-14"; everything
there binds the rest of the band and is not repeated here.

---

## 1. THE DECISION THE BRIEF EXISTED TO FORCE: the participle split with a2.20

**Settled: a past participle is NOT a corpus item. ZERO rows on this side and
ZERO on a2.20's.**

The brief and doctrine §E framed this as sixty rows against forty and warned
that a hundred participle rows in one theme collide on `fr`. Neither number
survives contact with the rule a2.01 already set (ledger §5): *a conjugated form
is never a corpus item; only infinitives and full sentences.* **A past participle
is a conjugated form.** `mangé` on a card is `parles` on a card.

Measured against Postgres 2026-08-14 and re-measured by the manifest generator
on every regeneration:

```
regular past participles as bare rows (parlé, mangé, fini, vendu, ...)    0
bare rows that LOOK like participles                                     24
```

All twenty-four are words in their own right. `fermé` and `ouvert` are
adjectives, `été` is the season, `réussi` is "successful", `vu` is the
preposition in `vu que`. The only nine glossed AS participles are in
`fr.sons.voyelles`, exist to demonstrate a vowel, and carry **no respelling at
all**, which is a2.13 §1 making the argument for us: a bare participle reaches a
card the learner cannot say.

**Row counts on each side:**

```
a2.05   36 rows authored, 0 of them participles, 0 of them headwords
a2.20    0 participle rows reserved; forty irregulars arrive as forty SENTENCES

seq  id      block                       status
16   a2.05   fr.a2.verbes.541 .. .590    TAKEN, 541-576 used
17   a2.20   fr.a2.verbes.591 .. .650    RESERVED, sixty wide, empty
     403 rows before, 439 after
```

**Neither side re-authored the other's rows** and neither can: the `fr` collision
the brief feared is impossible once neither authors a headword. The only thing
the two lessons had to split was ids, and the reservation is asserted by this
build's batch, merge and test, all three of which die on a row inside
`.591..650`.

**And "the sub says sixty" rests on a field that does not exist.** The database
`sub` is « Le passé composé avec avoir ». The sixty comes from the `sub` the
brief's own identity block carried, which corrections §1 had already measured as
a string that exists nowhere in the database.

---

## 2. Does it fit 19 to 24 missions? No, and it did not need to be two lessons.

**26 sections, 7 acts, 36 questions.** Declared as a constant
(`SECTION_CONVENTION = 24`), asserted by all three layers, and reported here
rather than hidden.

Ledger §a2.13-0 measured that the 24-section shape came from a2.01, was copied
six times, was never checked against a subject, and that `schema.ts` has no
ceiling; a2.13 shipped 32 sections and 45 questions. This lesson closes **three
deferrals** on top of its own Owns:

```
act 5  s17-inside   a2.17's adverb placement in a compound tense
       s18-ago      a2.18's « il y a » for "ago", in production
act 4  s13/s14      the -er/-é sound contrast a2.19 sits in front of
```

Folding those into 24 turns each into one card, which doctrine §B.5 calls a
reference document with pictures.

**A second lesson was not needed and the boundary question does not arise**,
because §1 removed the "sixty participles" half of the subject. What is left is
one construction, one rule and three endings.

Act weights, asserted: **Owns 6 missions, paradigm 3.**

```
act1  3  the second word          scene · goals · the endings grid
act2  5  what goes in the gap     THE OWNS
act3  4  two words, one you had   paradigm payoff · no agreement · errors
act4  4  a plan or a memory       THE TRAP
act5  2  the two closures
act6  5  out loud
act7  3  prove it
```

---

## 3. a2.19's negation wording, quoted, and no second version

```
Wrap the verb that changed, not the one carrying the meaning.
```

Imported from `data/futur-proche-corpus.ts` as `REFRAME` **and** asserted as a
literal in all three layers, so a change on either side goes red. It is on
`s05-english`, which is the screen where the negative arrives, with a2.19
credited by unit id.

**Confirmed: no second version was written.** A guard refuses
`/wrap the (auxiliary|first word|verb that moved)/` anywhere on a learner
surface, and mutation 3 (paraphrasing it) is caught by all three layers.

The wording was usable as it stands. This lesson's own reframe is a different
claim on top of it: a2.19's says WHICH of two verbs the halves wrap, and this
one says there is now a gap for the wrapping to happen in.

```
REFRAME   One verb, two words, and the small ones go in between.
```

**Rejected, with the reason recorded in `REFRAME_REJECTED`:**

- *"The passé composé is formed with avoir plus the past participle."* — the
  brief names this as the thing to reject and it is right. It describes the
  form, and the form is not what goes wrong.
- *"Two words, and everything else goes between them."* — **THE BRIEF'S OWN
  CANDIDATE, AND IT IS FALSE.** This build authors the counterexample:
  « J'ai mangé une pomme. » puts the object OUTSIDE the two words. A learner
  running the rule as written produces « j'ai une pomme mangé ». Only the SMALL
  words go in the gap. The card that names and breaks the false rule is
  `s11-noagree`, and a guard requires it to be there.
- a2.19's own reframe — quoted rather than taken, so this lesson's carried line
  is its own.
- *"Add -é, -i or -u."* — the ending table said as a sentence, and silent about
  the first word, the negative and the adverb.
- *"The first word changes and the second one never does."* — a2.13's reframe
  with two words swapped, and a2.19 already quoted that one.

---

## 4. Both deferral loops are closed

**a2.17, adverb placement in a compound tense.** `s17-inside`. Its own wording is
quoted verbatim on the screen:

> In a past tense the short ones move, and that rule arrives with the tense in
> a2.05.

a2.17 measured 82 published sentences putting a short adverb between the two
words; **re-measured here at 177**, with three carrying a respelling, and two of
those three are imported and drawn on that screen
(`fr.sons.alphabet.402`, `fr.sons.voyelles.355`). The loop closes with cards
rather than with a claim.

**a2.18, « il y a » for "ago".** `s18-ago`. Its own sentence
(`fr.a2.prepositions-essentielles.174`, the one past-referring row a2.18
authored and flagged) and its phrase card (`.186`) are both on the screen,
beside this build's « On a mangé il y a une heure. » **This is worth more than a
hand-off: a2.18's canDo was reworded on 2026-08-14 because it promised something
that needs this tense.** This lesson delivers a canDo another unit gave up.

Both closures are asserted by section id in all three layers, and mutations 6
and 7 (dropping either) are caught by all three.

---

## 5. Was a2.01's corpus clean for the -er/-é contrast?

**Yes, and the measurement is wider than the claim.**

All 25 of `fr.a2.verbes.101..125` are simple present with an explicit subject.
And across the WHOLE published corpus, **zero rows put a bare -ER infinitive
straight after a form of avoir** — the exact ambiguity a2.01's corpus header
promised to avoid, checked corpus-wide rather than only over a2.01's own rows,
and re-measured by the manifest generator on every regeneration.

Nothing had to be authored around. The one place « j'ai manger » appears is
inside the seven sections where the error is the content.

---

## 6. Claims in the brief measured false. Eleven.

1. **"Four later lessons declare it as a prerequisite."** THREE do: `a2.20`
   (seq 17), `a2.21` (seq 18) and **`a2.31` (seq 30, School and Studies)**,
   which no document in this band names. a2.31's canDo is a conversation in this
   tense fourteen seq positions later, and it is named on a learner surface.
2. **"The sub says sixty."** It does not. §1.
3. **"Two words, and everything else goes between them"** as a reframe
   candidate. False, and this build authors the counterexample. §3.
4. **"a2.01 ... check whether it complied."** It did, and wider. §5.
5. **"a2.02 and a2.18 were both told they may author past-referring corpus
   sentences. Read those headers."** **a2.02 authored NONE.** Its 29 rows are
   present tense throughout, including all six `venir de` rows, which refer to
   the past without a past tense. a2.18 authored exactly one and flagged it.
6. **"il y a ... close that loop in one mission."** Taken, and it is not a
   decoration: a2.18's canDo was reworded because of it. §4.
7. **"a2.17 ... 82 published sentences."** Re-measured at **177**.
8. **"listenChoose for the auxiliary ... the one place in A2 where listenChoose
   tests something genuinely hard."** True, and it is the ONLY ear question this
   lesson can ask. §8.
9. **"Mission count is within 19 to 24. Assert it."** 26, declared. §2.
10. **"This brief suspects [19 to 24] cannot hold it."** The premise went away
    with the sixty. §2.
11. **"avoir ... 2 rows."** True; the second (`fr.b1.courses.042`) carries
    `gender=m` and is deliberately not the one taken.

**And two things in `A2-BRIEF-CORRECTIONS.md` this build found incomplete**, both
recorded in the ledger amendment: §9's list of holes in the guards gains a
SEVENTH (the house-copy walk does not read `audio`), and §6/§14's repair-table
shape gains a case it does not cover (a false positive on an IMPORTED row a
lesson displays).

---

## 7. Corpus: authored against imported, and the form rule

```
authored   36 rows   fr.a2.verbes.541..576, theme `verbes`, level a2
             0 headwords
             0 bare participles          <- the ledger decision
             0 gendered rows
imported   23 rows   out of TEN themes
             0 headwords authored, which is corrections §2 holding for the
             thirteenth build in a row
refused     7 rows   READ_NOT_IMPORTED, with reasons
```

**The form rule held.** Every authored row is a full sentence with a subject; a
guard refuses any row whose `fr` has no whitespace, because the corpus helper
writes `kind: 'sentence'` unconditionally and `kind` alone cannot see a bare
word (mutation 8, ledger §4).

**The one row this build wanted and refused**: `fr.sons.jours-et-mois.036`
« la semaine dernière », which carries `gender=f`. a2.04 §0: a1.03's ending
population is measured off the SEED and a CARRY is what puts a row there. Its
VALUE is read off for two supplied respellings, which does not carry it.

**Respellings.** One repair, four supplied, five found broken and left alone.

```
REPAIRED   fr.sons.jours-et-mois.027  avant-hier
           ah-vahn-TYEHR -> ah-vahⁿ-TYEHR      VISIBLE, minimal, house value
SUPPLIED   fr.a2.negation-et-restriction.113 · .114 · .117 · .142
           four published passé-composé negatives whose ONLY drill was
           `dictation`: published as dictée targets with nothing to say them with
```

Every token of every supplied value was read off a published row and the row is
named; the manifest generator re-checks that each source still holds one.

**`pas` is `pa` in this lesson and `pah` in a2.19**, and the value was read off
rather than inherited: every published respelling of an ELIDED negative round a
form of avoir spells it `pa`, six rows to zero. That is what let this build
import `fr.sons.masterclass.021` instead of refusing it.

---

## 8. The quiz, and the questions I wanted and could not write

36 questions, six rounds of six, each round leading a different error trigger so
all six drills are reachable. **Every question has a `why` and a `ref`.**

```
typeIn      12    errorSpot 8    mcq 15    listenChoose 1
```

Production (typed) outnumbers recognition (picked), which the canDo requires.

**The generalisation test the brief asks for by name is present and asserted**:
at least one `typeIn` asks for a past form the lesson never printed. It is
`grandir` → `grandi`, and the assertion names it.

**No ear question can distinguish `manger` from `mangé`, and that is enforced
rather than reported.** `NO_EAR_QUESTION` holds six one-sound pairs and all
three layers walk every option list in a2.10's and a2.11's shape:

```ts
if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(...)
```

so « J'ai mangé. » against « Je vais manger. » stays legal (the front differs)
and « Je vais manger. » against « Je vais mangé. » does not. Mutation 16 proves
it fires.

**The questions I wanted and could not write:**

- **A typed question on the accent.** `fold()` strips combining marks, so a
  learner who writes « J'ai mange. » is marked right. The `-er`/`-é` contrast IS
  testable typed, because it is a letter difference (`r` against nothing), but
  `é` against `e` is not. The r2 question that asks for `parlé` says so in its
  `why` rather than pretending.
- **An ear question on the participle itself.** There is none, and there cannot
  be one.
- **A question on whether « j'ai mangé » is "I ate" or "I have eaten".** French
  has one form for both; asking would invent a distinction the language does not
  make.

---

## 9. Layouts, and the three the brief asks the test to assert

1. **`J'ai mangé.` and `Je n'ai pas mangé.` adjacent in one section**
   (`s04-pair`), asserted as PAIRS rather than as presence, with the `pas`
   required to sit between the form of avoir and the past form. Three pairs.
2. **The three endings in one grid** (`s03-endings`), one row per group, with
   `parler`/`finir`/`vendre` — a2.01's, a2.10's and a2.11's own frame verbs — and
   all three units named on the payoff screen.
3. **`Je vais manger.` and `J'ai mangé.` as an audible contrast** (`s13-listen`
   plus the `s14-which` trapDrill), and it is a SOUND contrast because the
   trap's audio step plays each card's own `fr`, which is what makes it one take
   with one voice. `rec-a2-05-tense` briefs it and the brief's requirement is
   pinned by an assertion.

Plus the six-person table and the negative table in the reference sheet, three
columns each, widest cell eleven characters.

**The reference sheet** is `sheet.a2.05.passe`, title 32 characters (a2.19 §3
measured the header-bar cut at 37). Three tables and four teach cards, no
`cheatSheet`. The brief calls it the most returned-to sheet in A2; cross-lesson
sheets do not exist, so what a2.20, a2.21 and a2.23 inherit is the rule, and the
sheet holds everything all three of them assume.

---

## 10. Audio

Eight takes briefed, none rendered (`audio:render` spends real credits and the
key is not set). **The two the brief names as single takes are pinned by
assertion in all three layers:**

- `rec-a2-05-pair` — the affirmative and the negative adjacent, one take. Apart,
  the learner compares two performances instead of two small words.
- `rec-a2-05-tense` — « Je vais manger. » against « J'ai mangé. », one take, and
  the last word of all four lines is the same sound and must be.

`rec-a2-05-endings` carries the hardest instruction in the set: `parler` and
`parlé` must be read identically, because the whole dictée exists on their being
one sound.

---

## 11. Verification, and what I could not verify

**Host half: complete and green.**

```
batch dry run            every guard passed
merge dry run            every guard passed, 9098 untouched rows byte-identical
a2-05-passe-compose.test.ts   47 tests, 47 pass
full suite               3683 -> 3730 (+47), 0 fail
npx tsc --noEmit         0 in ealch-v2 AND 0 in ealch-admin
pnpm content:parity      one pre-existing divergence (b2.01.l1), nothing at risk
mutation harness         38 mutations, 0 caught by nothing, 0 skipped
a1-03-genre.test.ts      ending population 1890 before and after
```

**FOUR MUTATIONS FOUND A WEAKNESS RATHER THAN CONFIRMING A STRENGTH**, above
corrections §9's two-in-eleven rate and in line with a2.19's five in thirty-six:

- **8** — a bare participle authored as a row was caught by the batch only on the
  version check and MISSED by the merge. `kind` cannot see it. Fixed in all
  three layers; it is the guard the whole §1 decision rests on.
- **15** — stripping ONE TAKE from an audio brief was pinned by the test and not
  by the merge.
- **21** — the false rule « everything goes in the gap » went into a TERM body,
  which the merge's and the test's walks did not read.
- **37** — the generalisation question was asserted by the batch and the test and
  not by the merge.

**And three mutations reported a layer blind when the layer was correct** (a2.14
§8, one anchor is not enough): 13, 21 and 38 each stated their claim in two,
three and three places respectively. **Budget four anchors for any claim about
what a lesson names.** 38 needed three before it removed the claim at all.

**DEVICE HALF: DONE, on a Pixel 6 over USB against Metro 8082.** The dev build
never OTA-fetches (a2.14 §12), so every content change needed a force-stop and a
cold start before the phone showed it.

**TWO DEFECTS, both invisible to all three layers and to the whole suite.**

**1. The intro named a unit id.** v1 read « ...avoir, which you have had since
a1.07 », and `intro` is drawn on the lesson COVER, before any card has credited
anything. Measured across the seed: **a2.05 was the only one of 58 lessons whose
intro did it.** Doctrine §B.7 asks for unit ids in the teaching BODY, where the
reference has context, and this lesson credits eleven there. Reworded, guarded.

**2. A scene bubble silently lost its own tail, and the first fix was wrong.**
`fr.a2.verbes.572` was authored « Ah, ce soir alors ! » and rendered « Ah, ce
soir » while its gloss still read "Ah, tonight then!". `ScenePlayer.tsx:276`
documents the class with a prior sons.07 instance.

v3 widened the gloss on the theory that the bubble hugs its widest child. **On
the phone the bubble got wider and the French still clipped.** The theory was
also refuted by its own first test: the `you` bubble in the same scene carries a
26-character French against a 21-character gloss and renders in full. Measured
one variable at a time:

```
« Ah, ce soir alors ! »     spaced exclamation   CLIPPED
« Ah, ce soir alors. »      full stop            renders in full
« Et hier soir, alors ? »   spaced question      renders in full
```

The trigger is the **spaced exclamation mark**. It is app code, so this build
does not fix it (the call the ledger made for `TrapAudioStep`); what it controls
is not triggering it, and the guard is one line. v4 ships the full stop, verified
on the phone.

**WHAT THE DEVICE CONFIRMED GOOD**, each a ceiling an earlier build paid for:

```
all 26 mission-row titles in full, including two at 25 characters
the endings tapTable     3 columns, 3 rows, no clipping
term-chip rows           three chips on one row (a2.03 §3's 37)
the pair screen          adjacent pairs, the gap visible, the imported
                         published card inline with its own respelling
the stepped trapDrill    label "FOUR CARDS" over exactly FOUR dots (a2.18 §3),
                         header reading 7.2 / 26
the reference sheet      title uncut at 32 (a2.19 §3's 37), all THREE tables
                         three-column with no horizontal scroll, n'avons pas on
                         one line, and ALL FOUR teach cards rendering their
                         bodies, which is the check the brief asks for by name
the superscript ⁿ        renders correctly everywhere; no U+203F anywhere
```

**Screens not opened:** the quiz's 36 questions, the dictée, the speak mission,
the role play and the reading passage were not stepped through on the phone.
They are the surfaces with the least device-specific risk in this lesson, and
saying so is cheaper than implying a fuller pass than was done.

**Two things I could not verify at all:**

- **Whether a2.20's author agrees the split.** a2.20 has not started. The
  decision is recorded in the ledger, the block is reserved and empty, and every
  layer of this build refuses a row inside it, but it is one author's decision
  written down rather than two authors agreeing.
- **Whether `deuxième` is the last of a2.18 §2's shape this band will meet.** Six
  candidates from this lesson were tried and a control was added; the predictor
  is a real /m/ or /n/ after a two-letter house vowel and nobody has enumerated
  the corpus for it.

---

## 12. Wiring

```
scripts/author-passe-compose-batch.ts        content:passe-compose
scripts/merge-passe-compose-into-seed.ts
scripts/_a205_manifest.ts                    the recorded read
scripts/_a205_mutate.mjs                     38 mutations
scripts/_a205_probe.ts .. _a205_probe4.ts    the pre-flight
scripts/_a205_seedcut.ts                     which imports the cut is missing
scripts/data/passe-compose-corpus.ts
scripts/data/passe-compose-lesson.ts
scripts/data/passe-compose-terms.ts
scripts/data/passe-compose-imported.ts
scripts/data/passe-compose-rows.gen.ts       generated, do not edit
ealch-v2/src/content/a2-05-passe-compose.test.ts
```
