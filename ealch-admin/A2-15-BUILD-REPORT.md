# a2.15 build report

`a2.15.l1` "Irréguliers 5 : prendre, mettre, battre", trail seq 9, the last verb
lesson in batch 1. Applied to Postgres and merged into `seed.json` on 2026-08-12.
Not published.

Doctrine §F, plus the four things the brief asks for by name at the end.

```
lesson      a2.15.l1  v3   28 sections · 6 acts · 36 questions · 46 items
corpus      fr.a2.verbes.421 .. .454   34 authored, 12 imported, 1 repaired and
                                       shown to nobody, 13 read and refused
tests       3333 before  →  3403 after  (+70)
tsc         ealch-v2 0 · ealch-admin 0
parity      one pre-existing divergence (b2.01.l1, database-only, in_review)
mutations   20 run, 0 caught by nothing
device      Pixel 6, one defect found and fixed, four screens read off glass
```

---

## 1. What the probe said, and what I imported rather than authored

**a2.15 IS THE FIRST A2 LESSON TO AUTHOR AN INFINITIVE, and corrections §2 called
it.** Five builds in a row before this one authored none.

```
AUTHORED, because they do not exist at any status in any theme:
  battre       fr.a2.verbes.421   BATR          ← the unit is titled after it
  combattre    fr.a2.verbes.422   kohⁿ-BATR
  remettre     fr.a2.verbes.423   ruh-MEHTR

IMPORTED, 12 rows out of 5 themes:
  prendre      fr.sons.verbes-essentiels.012   repaired PRAHNDR      → PRAHⁿDR
  apprendre    fr.a2.disciplines.051           repaired a-PRAHNDR    → a-PRAHⁿDR
  comprendre   fr.sons.verbes-essentiels.030   repaired kohn-PRAHNDR → kohⁿ-PRAHⁿDR
  surprendre   fr.sons.verbes-essentiels.225   repaired sür-PRAHNDR  → sür-PRAHⁿDR
  mettre       fr.sons.verbes-essentiels.014   clean
  permettre    fr.sons.verbes-essentiels.196   clean
  promettre    fr.sons.verbes-essentiels.191   clean
  vendre       fr.a2.verbes.027                clean (a2.11's, for the contrast)
  4 evidence sentences: fr.sons.nasales.027 · .020 · fr.sons.voyelles.448 · .386

REPAIRED AND CARRIED WITHOUT BEING SHOWN, 1 row:
  prendre      fr.a1.transports-quotidiens.041 repaired PRAHN-druh   → PRAHⁿDR
```

`battre` is not quite absent in the way the brief says. It exists as an
**infinitive inside four published phrases**, one of which is
`fr.a1.cuisine.166` "battre les œufs", respelled `BATR LAY ZUH`. **That is where
this build read the house form from**, so `BATR` is a published value rather than
an invention, exactly as `fr.sons.consonnes.107` supplies `PRAHⁿDR`. What is
genuinely absent is any conjugated form: `bats`, `battons`, `battez`, `battent`,
`combattons` and `combattent` return **zero** across 27,600 published rows.

The seed carried 8 of the 13 rows for the first time, which is corrections §10
again: the cut is roughly a quarter of the database and most imports are not in
it.

---

## 2. Every claim in the brief I measured false

Seven, which is at the top of the three-to-six range corrections §12 records.

**1. "Four prendre-family respellings are wrong in a way `hasPlainNasalFor`
cannot see. a2.10's repair guard will reject all four."**

There are **five** wrong rows, not four, and **two of the five are visible to the
checker**, not zero.

```
PRAHNDR       fr.sons.verbes-essentiels.012    NOT flagged   invisible
a-PRAHNDR     fr.a2.disciplines.051            NOT flagged   invisible
sür-PRAHNDR   fr.sons.verbes-essentiels.225    NOT flagged   invisible
kohn-PRAHNDR  fr.sons.verbes-essentiels.030    FLAGGED       visible
PRAHN-druh    fr.a1.transports-quotidiens.041  FLAGGED       visible
```

`comprendre` is visible because `kohn` ENDS a token, which is the condition
corrections §6's blind spot needs to fail. The fifth row is the one a2.11
recorded as a variant it did not import; it is not a variant, it is flagged, and
this build repairs it. The split table is still necessary and the counts are 2
and 3.

**2. "nous mettons, two t throughout, so mettre is the control."**

`je mets` has ONE t. mettre is one t in the singular and two in the plural, which
is exactly what battre does. The correction is the better teaching and it is what
the lesson is built on:

```
prendre   prend- · pren- · prenn-     THREE stems
mettre    met-   · mett-              TWO
battre    bat-   · batt-              TWO
```

What makes mettre the control is that its PLURAL stem never moves.

**3. "Three headwords are genuinely absent: remettre, battre, combattre."**

True, and the set is bigger than the brief and corrections §2 both say.
`reprendre`, `débattre` and `abattre` are also absent, and **`admettre` EXISTS**
(fr.b1.verbes.086, `ad-METR`). It is deliberately not imported: it is one of the
two the exam gives cold.

**4. "Three paradigms buy the learner twenty-odd verbs."**

Roughly right about French and not a figure this build can count. The lesson
NAMES twelve, derived from `FAMILIES`, and says in words that the move works on
the rest. Every screen and the overview were corrected from twenty to twelve.

**5. "listenChoose has one real job: il prend against ils prennent."**

There is a second, `il met` against `ils mettent`, and both ship. The homophone
rule is unchanged and this lesson has THREE groups, one per verb.

**6. "Give them reprendre or admettre cold and require the full form
[in a groupDrill]."**

A `groupDrill` check is an mcq: `q`, `opts`, `correct`, `why` and nothing else.
The strongest thing a MISSION can do is make the learner pick a correctly built
form out of three plausible mis-builds, and that is what `s26-unseen` does.
**Free-text production of an unseen compound exists in one place in this app and
it is the quiz**: round 4 types four forms of two verbs, plus one errorSpot.
`practice` with `skill: 'write'` draws nothing and a dictée can only name a
corpus row, which `reprendre` deliberately is not.

**7. Doctrine §B.7 assigns "prendre take vs prendre in idiom" to seq 9.**

The brief hands both idiom homes to a2.07 and a2.27 and forbids taking them. The
brief wins: the roundup names both units by id and prints none of their nouns.
The two documents disagree and somebody should reconcile them.

---

## 3. What this build found that no brief mentions

### 3.1 THE DICTÉE CANNOT SEE THE LIGATURE œ, AND IT DROPS IT FROM BOTH SIDES

`letterCount()` in `dictee.logic.ts` strips everything outside `[A-Za-zÀ-ÿ]`, and
U+0153 is outside it. So is the letter bank at `MissionRich.tsx:1343`, and so is
the target it is compared against.

```
"Je bats les œufs."       letterCount 12, real letters 13
"Vous battez les œufs."   letterCount 16, real letters 17, and it spells in LETTERS
bank and target both      "Jebatslesufs"
```

A learner who spells `oeufs` as `ufs` assembles the target exactly and is told
they are right. It is corrections §5 in a new dimension and nobody has recorded
it. `battre les œufs` was the natural frame for this lesson and it is the reason
the frame is `Paul`.

`scripts/_a215_frame.ts`, written before this build, counts letters with `\p{L}`
and therefore disagrees with the app by one per ligature; its own output prints
"LETTERS 17" for a line the app measures at 16. Invariants §6.

### 3.2 THE JARGON GUARD DOES NOT MATCH A PLURAL, AND THIS LESSON SHIPPED ONE

Found on a Pixel 6, on the resume interstitial, at v2. Act 2 was titled
**"Three paradigms, eighteen cells"**. `paradigm` is on the jargon list in the
batch, the merge and the test. None of them fired, because `hasPhrase` is
boundary-exact and the character after the needle is a letter.

a2.14's list works round this one word at a time, carrying `infinitive` AND
`infinitives`. All three layers now check the `-s` plural of every entry, and the
test asserts the singular-only match would NOT have caught it, so the widening
cannot be quietly reverted. **Every A2 lesson before this one has the same hole.**

Three more plurals came out with it, and mission 3's `frSub` still said
« vingt verbes » where the title had been corrected to twelve.

### 3.3 `prose()` DROPS `sub`, AND ON A cardDeck CARD `sub` IS PROSE

v1 put the banned word "honest" in one. Every guard in the batch and the merge was
green; `sons-alphabet.test.ts`, which reads the seed and walks every string, went
red the moment the merge landed. The house-copy and jargon checks now walk
`display()` as well, which keeps `sub` and drops only machine keys.

Nothing in an IPA or a respelling can be an em dash, "honest" or grammar jargon,
so the wider walk costs nothing. This is also a hole every A2 lesson before this
one carries.

### 3.4 THE BLIND SPOT THIS LESSON MEETS IS THE OLD ONE, AND a2.14's PREDICTION HELD

29 superscripts, 27 seen, **2 missed**. Both are the same token in the same word:
`ray-POHⁿS` in `réponse`, where the nasal is followed by a consonant INSIDE the
token. That is corrections §6's recorded shape.

a2.14 §1 predicted this lesson would be clear of ITS blind spot — the
doubled-nasal rescue that runs on the whole French string — because `AHⁿ` and
`OHⁿ` are two-letter house spellings caught on `hasPlainNasal`'s first branch
before the French is consulted. **Measured, and it holds**: six sentences here
carry `prennent` or `apprennent` and every superscript in them is seen. The test
asserts both directions and the a2.14 control case, so the day either mechanism
changes this goes red.

The false-positive path is **not met**, and the candidate that looks like it
should fire is `PREN`: a vowel, a plain N, at a token boundary. It does not,
because `hasPlainNasal`'s own list is (AH OH EH UH EU AI OU) and `EN` is not in
it. Reported as an absence, as corrections §6 asks.

---

## 4. The reframe, and what I rejected

```
SHIPPED   Cover the front of the verb. Build what is left.        10 words
```

Doctrine §B.4 wants a rule the learner runs in the half-second between subject
and verb. This is a physical instruction and it is literally what they do when
`reprennent` arrives. Note the verb: `build`, not `conjugate`, which is on the
jargon list.

```
REJECTED  Learn the head of the family and the rest come free.
          The brief's candidate. It is the CLAIM rather than the reframe: it
          promises a payoff instead of telling the learner what to do, and there
          is no moment mid-sentence at which it can be run. It ships as
          FAMILY_CLAIM, stated in the opening deck and the roundup.

REJECTED  Compounds follow their base verb.
          The brief rejects this itself and is right: the same fact stated about
          the language rather than about the learner.

REJECTED  Every one of these is prendre with something in front.
          Names one of the three verbs it is supposed to generalise over.
```

Carried 16 times by the batch's walk and 17 by the seed-wide one; the difference
is the occurrence in a card's `sub`, which is the same gap that cost v1.

---

## 5. How the Owns outweighs the paradigm

```
act 1  the verb you already had        3 missions
act 2  three paradigms, 18 cells       5
act 3  AND THE ONES THEY COME WITH     8   the heaviest act, alone
act 4  the one that looks regular      3
act 5  out loud                        5
act 6  prove it on one you have never seen  4
```

Five missions on eighteen cells and eight on what the eighteen cells buy. All
three layers refuse a build where the paradigm act is not smaller than the family
act, and where the family act is not the largest alone.

---

## 6. The four things the brief asks for at the end

### Which compound the unseen mission uses, and that it appears nowhere else

**`reprendre` and `admettre`, both of them.** They appear in exactly two
sections, `s26-unseen` and `s27-quiz`, and in no corpus row, no `itemId`, no deck
tranche, no term and on no card. Asserted in both directions in all three layers:
they must be in those two places and they must be nowhere else, and a guard whose
permitted list has quietly emptied is a guard that has stopped guarding.

`admettre` exists in the corpus at `fr.b1.verbes.086` and is deliberately not
imported. The mutation harness confirms that releasing it into a deck is caught.

The exam produces five free-text answers on four distinct cells: `reprenons`,
`reprennent`, `admettons`, `admettent`, plus an errorSpot on
« Nous reprendons la clé. » Four cells rather than one, because one memorised
answer would clear a count of one.

### The weight battre actually got, and whether "recognise" justified it

**Two missions.** `s08-battre` builds its four cells off the mettre shape, and
`s14-combattre` names the family and stops.

The canDo justifies it and so does the corpus. Measured on 2026-08-12,
boundary-aware, across every published row:

```
bats 0 · battons 0 · battez 0 · battent 0 · combattons 0 · combattent 0
bat  3, and all three are `le cœur bat` or `elle bat les œufs`
battre · combattre · débattre · abattre: NOT ONE EXISTS AS A HEADWORD
prendre's cells: 234 published sentences.  mettre's: 80.
```

There is no published row in this course that puts battre into any of the six
forms this lesson teaches. So the answer to the brief's open question is: the
compounds are **not** frequent enough to justify two missions on frequency
grounds, and the canDo's "recognise" is what justifies them. One mission would
have left `combattre` unnamed and the canDo unmet.

The inequality is asserted three ways, all derived: **7 authored rows** against
mettre's 12 and prendre's 15; **4 paradigm cells** against six; and **1
verb-exclusive mission** against prendre's five. That last figure is one and not
two on purpose — `s08-battre` teaches battre by pointing at mettre, so it names a
mettre form and drops out of a verb-exclusive count. That is the cheapest way to
teach the small one and the measure should not punish it; the test says so.

### That pris and mis are flagged as reserved for a2.20

Confirmed, in three places. `RESERVED_PARTICIPLES` in the corpus names ten forms
with `RESERVED_FOR = 'a2.20'` and the measurement (`pris` 198 published rows,
`mis` 81, `battu` 0). The batch, the merge and the test each refuse every one of
them anywhere in the lesson, including inside a `why` and the reference sheet.
The roundup and the `theParticiples` term name a2.20 by id, so the omission reads
as a decision rather than a gap, and a2.20 can see from the corpus header that it
was one.

### Whether the a2.09 connection landed, or read as a digression

**It landed, and it is the best thing in the lesson.** It is not a citation in a
footnote: the mechanism is stated in the section that shows the pair, in the
sentence that explains why the second n is there.

> a2.09 doubled the l of appeler in the cells where the ending went silent.
> prennent doubles its n for the same reason: the -ent makes no sound, so the
> stem has to end in one.

That sentence is a constant, it carries the unit id inside it, and it is asserted
verbatim as well as by id. The mutation harness found why that matters: cutting
a2.09 out of the sentence left the section's own `say` still naming the unit, so
a by-id check passed on a lesson that no longer said WHY. Both anchors now have
to go for the guard to pass, and it does not.

Read on glass, in `s05-doubled`, it sits directly under « Ils prennent la clé. »
and reads as the reason rather than as a reference.

---

## 7. The corpus, the lesson and the quiz

```
corpus    34 authored in `verbes`, 3 of them infinitives (a first in this band)
          16 paradigm cells on TWO frames · 15 compound sentences · 2 scene rows
          la clé for prendre AND mettre, Paul for battre
          0 flagged by hasPlainNasalFor · 0 rows in a1.03's ending population
          0 duplicate fr inside the theme

lesson    28 sections · 6 acts · 12 terms · 6 triggers · 12 drills · 1 sheet
          11 dictée targets, every one LETTERS and none holding the ligature
          8 groupDrills, 52 item cards, every one carrying something under the
          French

quiz      36 questions in 6 rounds, 12 mcq (33%)
          formats: 15 typeIn · 12 mcq · 5 errorSpot · 2 listenChoose · 1 speak
                   · 2 tapSilent
          every question has a `why` and a `ref` that resolves
          every typeIn fixes person and number with a pronoun
          every round leads on a different trigger, so all six drills can fire
```

**The frame decision is the inverse of a2.14's check and it is worth flagging for
whoever copies that file.** a2.14 asserts its two columns use DIFFERENT frames,
because the complement was the thing it taught. Here the stem is the teaching and
the complement is noise, so prendre and mettre must SHARE one: `la clé` is the
only object tried that puts all twelve of their cells in LETTERS mode. battre
cannot join in, because you do not beat a key, and the lesson says so.

### Questions I wanted and could not write

- **A typed question on the circumflex or an accent.** There is none in this
  paradigm, so nothing was lost, but the same limit shaped what the dictée CAN
  test: `fold()` keeps a doubled letter, so the prenons/prennent pair is in the
  dictée on purpose and both halves are asserted to be there.
- **An ear question between two persons of one verb.** `prends`/`prend`,
  `mets`/`met` and `bats`/`bat` are three homophone groups. The two listenChoose
  questions are singular against plural, which is audible on all three verbs, and
  the guard refuses anything else.
- **A free-text production inside a mission.** A groupDrill check is an mcq and
  `practice` with `skill: 'write'` draws nothing, so `s26-unseen` is recognition
  under pressure and the exam is the production. Said plainly rather than papered
  over.

---

## 8. The id block, and the row count

`A2-BATCH-1-LEDGER.md` §2 gives a2.15 `fr.a2.verbes.421 .. .460`.

```
340 rows before  (the ledger's own figure after a2.14)
374 rows after   (340 + exactly 34, nothing else landed)
.421 .. .460     clear before the apply, 421-454 used, 455-460 free
max              .486, and still useless: a2.10.l2 took .461..500
```

The block held. The batch checks the COUNT and, following ledger §a2.14-12, treats
a total that has GROWN by somebody else's allocation as a report and a total that
has SHRUNK as fatal; rows inside this range that the build does not own stay
fatal.

---

## 9. Mutation testing

`scripts/_a215_mutate.mjs`. Twenty mutations, three layers, baseline green first.
**Zero caught by nothing.**

Four rows found a weakness rather than confirming a strength, which is above the
measured rate of two:

1. **The merge had no homophone guard and no listenChoose `say` guard.** The
   batch had both and the merge trusted it. Added.
2. **Neither the merge nor the test compared a cell respelling to the ROW.**
   Changing the grid's `prennent` respelling moved the sheet and the grid
   together, because the sheet renders FROM the grid, so the sheet-vs-grid check
   passed on a lesson whose card said one thing and whose reference said another.
   That is a2.13 §6.2 with a third copy. Added to the merge.
3. **Dropping `reprendre` out of ONE of three checks left the claim true.**
   a2.14 §8 again. All three layers now assert that BOTH unseen compounds are
   named in the cold mission: one cold verb is an example and two is a pattern.
4. **Cutting a2.09 out of the principle sentence left the `say` still naming it.**
   Same shape. All three layers now assert the sentence verbatim as well as the
   id.

Two harness findings worth carrying forward:

- **A missing seed anchor is a skipped LAYER, not a skipped mutation.** The first
  version dropped the whole row when a source edit had no single-line seed
  equivalent, throwing away the batch and merge results with it.
- **One of the twenty was a bad mutation and the guard was right to ignore it.**
  It offered « Je prends la clé. » against « Il prend la clé. », which differ by
  the PRONOUN as well as the form, and je against il is perfectly audible. The
  rule fires only when two options differ ONLY by a homophone, which is the a2.10
  shape and correct. Replaced with the real offence.

---

## 10. Device verification

**Pixel 6, both halves done.** Metro on 8082, bundle pre-built on the host
(200, 24.1 MB), `adb reverse`, dev client, `ealch://missions?key=a2.15.l1`.

**One defect found, and only on glass**: the act title in §3.2, read off the
resume interstitial, which is the first screen a returning learner meets. Fixed
and re-verified.

Screens read:

```
missions hub    all 28 titles, three screenfuls. NONE cut. Longest is the house
                heading at 27, which 36 lessons ship and which fits.
s05-doubled     THE LAYOUT CLAIM. « Nous prenons la clé. » directly above
                « Ils prennent la clé. », a2.09 named in the same card, the two
                mettre control lines below it. Two term chips.
s10-identity    THE SECOND LAYOUT CLAIM. Three verbs on every line, three term
                chips all visible.
s26-unseen      the control-page shape (`items: []` with a check) draws the
                question and four options and no cards, as intended.
s01-scene       every beat, including the choice, the follow-up and the break
                card. The break card's own Continue is FULLY VISIBLE above the
                pager bar, which is ledger §7's hazard and it is clear.
s07-mettre      a groupDrill card drawing `[METR] · to put` under the French,
                which is e584bd8's renderer fix working.
```

The host half grepped the served bundle for every new string and for the strings
that must be absent. As ledger §a2.14-15 says, that proves a string is in the
bundle and nothing about how it sets, which is why the act title had to be found
by eye.

**One cosmetic thing I am leaving as authored, and naming rather than hiding**:
the scene's last bubble is English in both its `fr` and `en` slots, because the
character has switched language. It renders as the same sentence twice, in
italic and then in plain. It is honest content in a field pair that assumes a
translation, and it reads acceptably. If it bothers anybody the fix is a one-line
change to that beat.

---

## 11. What I could not verify

- **The audio.** Eleven `recorded` specs with real `recordingId`s and no clips.
  `CLIP_MANIFEST` is empty by design and every card falls back to device TTS,
  which is the correct shipping state. `pnpm audio:render` was not run and must
  not be.
- **The exam end to end.** I read the exam's first round on the hub and did not
  answer 36 questions on the device. Every question is checked by the suite
  through the real `matchesAccept`, and the two things a device could add are
  whether a long `why` fits and whether the `speak` question scores; neither was
  read off glass.
- **The reference sheet on a device.** The sheet's five tables are asserted
  against the cards in all three layers and were not opened on the phone. a1.13
  ships a `cheatSheet` inside a sheet that draws its title and no rows; this
  sheet holds only `table` and `teach`, which `ReferenceSheet.tsx` does draw, but
  I did not confirm it visually.
- **Whether any of the 26 titles between 26 and 27 characters ellipsise with
  wider glyphs.** Ledger §a2.14-13 says the ceiling is a rendered WIDTH. All 28
  were read off the hub and none was cut, so this is verified for this lesson
  rather than assumed.
