# a2.17 build report

`a2.17.l1` **"Les adverbes"**, seq 12, the second lesson of batch 2 and the one
that turns `a2.03`'s agreement work into something the learner gets paid for.
Applied to Postgres and merged into `seed.json` as **v3**. Not published.

Doctrine §F, plus the five things the brief asks for by name.

---

## 0. The short version

**TWENTY-TWO ADVERBS TAUGHT AND NOT ONE AUTHORED.** `adverbes-essentiels` is a
live theme with 325 published rows and 120 adverb headwords in it, and every
adverb this lesson teaches was already there. What was missing is the OTHER half
of the derivation: four adjectives that do not exist at any status in any theme,
two of which are the middle step of the chain the whole lesson is built on.

**And the most consequential thing this build measured is that the derivation is
AUDIBLE, in respellings other people published:**

```
lent      LAHⁿ        lente     LAHⁿT       lentement     lahⁿt-MAHⁿ     T
doux      DOO         douce     DOOS        doucement     doos-MAHⁿ      S
sérieux   say-RYUH    sérieuse  say-RYUHZ   sérieusement  say-ryuhz-MAHⁿ Z
```

Read the columns rather than the rows. **The feminine is the masculine plus one
consonant, and the long word is the feminine plus -MAHⁿ.** Three adjectives,
three different consonants, no exception, and for `sérieux` all three cells are
somebody else's published data with a2.03's own `sérieuse` in the middle.

So a learner who builds the word off the MASCULINE does not make a spelling
mistake. They make a sound with a consonant missing, and they can hear that they
did. That reshaped the reframe: the brief's candidate was *Take the feminine, add
-ment* and the shipped one is **Say the feminine, then add -ment.** One word, and
it is the word that makes the rule self-checking.

```
                                     before        after
node --test (whole suite)            3489 pass     3550 pass   (+61)
a1-03-genre.test.ts                    35 pass       35 pass
seed.json                            v35, 8976 items, 53 lessons
                                     v35, 9015 items, 54 lessons  (+39, version untouched)
fr.a2.adverbes-essentiels                 0 rows       24 rows   (a NEW namespace)
adverbes-essentiels in the seed            0 rows       31 rows   (it was outside the cut)
npx tsc --noEmit  (both packages)       clean         clean
pnpm content:parity          one pre-existing divergence (b2.01.l1, db-only, in_review)
mutation harness             34 mutations, 0 caught by nothing, 0 skipped
```

**`seed.version` is 35 and a2.16's report records 33.** Two publishes landed
between the two builds. Measure it yourself rather than carrying either figure.

---

## 1. The theme decision, and it contradicts the ledger

**a2.17 writes into `adverbes-essentiels` under a new level namespace,
`fr.a2.adverbes-essentiels.001..040`. `fr.a2.adjectifs-essentiels.081..120` goes
back to the ledger unused.**

Ledger §3 reserved that adjective block for this lesson and gave the reason: *"an
adverb built off a feminine adjective belongs beside the adjective it is built
from"*. The reasoning is good and the premise is wrong, because §3 probed
`adverbes` and **nobody probed `adverbes-essentiels`**:

```
theme adverbes                0 rows        does not exist, and still does not
theme adverbes-essentiels   325 rows        325 published, 120 of them adverbs
  fr.a1.adverbes-essentiels   191 rows      max .191
  fr.sons.adverbes-essentiels 134 rows      max .134
  fr.a2.adverbes-essentiels     0 rows      NEXT FREE = .001
```

It is §3's own opening error one level down. That section begins *"The question
was asked the wrong way round"* about `adjectifs` against `adjectifs-essentiels`;
it was asked the wrong way round twice, about the same two words, eight days
apart.

**The flashcard hub settles it rather than tidiness.** `lentement` already has a
card in `adverbes-essentiels`. Authoring anything beside it in
`adjectifs-essentiels` would put a second card for the same word in a second
deck, which is the shape `flashhub-coverage.test.ts` exists to catch inside a
theme and which nothing catches across two.

**What it means for later adverb work:** every A2 or B1 lesson that teaches an
adverb now has a namespace to open at `fr.a2.adverbes-essentiels.041` and up, and
a theme that already holds the vocabulary. No theme was created. `adverbes` is
still dead, and both the manifest and the batch refuse to run if anybody revives
it.

---

## 2. The -ment respelling convention, settled for the level

Verbatim, because it applies to every derived adverb the level has not authored
yet:

> **The suffix `-ment` is respelled `-MAHⁿ`: stressed, capitalised, closed with
> the superscript nasal, and hyphenated onto whatever the stem ends in. It is
> never `MAHN`.**

It was read off published rows rather than chosen:

```
rows whose respell contains MAHN   499
rows whose respell contains MAHⁿ    79
of the MAHN rows, in adverbes-essentiels alone   109
```

Invariants §3 requires the superscript, so 499 rows break it. **The 79 that do
not include every respelled SENTENCE in the sons themes**, and three of them are
imported by this lesson. This build repairs the TEN rows it displays and leaves
the other 489: repairing a row you do not show is how a build acquires a defect
it cannot test.

---

## 3. Every claim in the brief I measured false

Seven, which is at the top of the three-to-six the corrections file predicts.

**1. "The theme is `adverbes-essentiels`, which exists and holds rows." TRUE, AND
IT CONTRADICTS THE LEDGER, WHICH IS THE DOCUMENT THAT BINDS.** §1 above. The
brief was right and the ledger's reservation was written against a probe of the
wrong string, so the brief's "this is a ledger decision" is the sentence that
mattered.

**2. "All eleven exist." TRUE, AND IT UNDERSTATES IT BY A FACTOR OF THIRTY.**
120 adverb headwords in the home theme and 358 single-word `-ment` rows across
the corpus. Every adverb this lesson teaches is imported and **not one is
authored**. What IS absent is four ADJECTIVES: `lente`, `douce`, `évident` and
`constant`, none of which exists at any status in any theme, and the first two
are the middle step of the chain. Corrections §2 predicts "you will author almost
no headwords" and is right about the half everybody looked at.

**3. "EIGHT OF ELEVEN CARRY A BROKEN NASAL, and this is the largest single repair
set in the level." TRUE, AND THE REAL NUMBER IS 499.** §2 above. The repair set
this build ships is ten, which is every row it displays.

**4. "`kohns-ta-MAHN` has a first nasal the checker cannot see. Split your repair
table." TRUE, AND THE SPLIT DOES NOT GO WHERE CORRECTIONS §6 PUTS IT.** §4 below.

**5. "listenChoose for -emment/-amment, where the ear proves the two spellings
merge." TRUE FOR THE DICTÉE AND FALSE AS WRITTEN FOR THE LISTENING.** The test
list asks for *"at least one listening item [that] requires distinguishing them
by spelling rather than by sound"*, and as literally worded that is a question
with no correct answer, which corrections §5 forbids: the two suffixes ARE one
sound. What is possible, and what shipped, is a question whose ANSWER is that the
ear cannot supply the ending, plus a dictée that makes the learner produce the
letter anyway. The guards enforce both and refuse any `listenChoose` whose
options differ only in the suffix.

And the dictée had to be the BARE WORDS. Measured through the real `dicteeMode`:
« C'est évidemment vrai. » is eighteen letters and « Il travaille constamment. »
is twenty-two, so both spell in WORD mode where every real word is handed over
pre-spelled. `évidemment` is ten and `constamment` is eleven.

**6. "French puts the adverb after the conjugated verb." TRUE, AND IT IS
MEASURABLE RATHER THAN ASSERTABLE.** Across 27,499 published sentences, eleven
common verbs against nine common adverbs:

```
verb + adverb    80 published sentences
adverb + verb     0
```

Zero. The rule is exceptionless in this corpus, the lesson prints the figure on a
learner surface, and the batch re-runs the query on every apply.

**7. "Include at least two adjectives the lesson never lists." TRUE, AND THE TWO
HAD TO BE CHOSEN AGAINST THE CORPUS.** The answer has to be a real French word,
so the unseen adjective's adverb must EXIST while the adjective must not appear:
`parfait` (`fr.sons.adjectifs-essentiels.047`, not imported) → `parfaitement`
(`fr.sons.adverbes-essentiels.014`, not imported), and `certain` (absent at every
status) → `certainement` (`.015`, not imported). Neither adverb is imported,
because importing it would put the answer in the lesson's vocabulary and delete
the question.

---

## 4. Corrections §6's repair split is per-ROW and the real split is per-NASAL

**This is the finding this build exists to protect.**

§6 splits the repair table by row: `RESPELL_REPAIRS_VISIBLE` for rows the checker
flags, `RESPELL_REPAIRS_INVISIBLE` for rows it does not. That works when a row
holds one nasal. **A `-ment` adverb on a nasal stem holds TWO, and the checker
sees one of them:**

```
lentement    lahnt-MAHN    FLAGGED       the final MAHN ends a token
             lahnt-MAHⁿ    not flagged   and `lahnt` is still wrong
             lahⁿt-MAHⁿ    not flagged   and correct
```

Repairing exactly what the checker reports produces a value it calls clean and
which still spells a nasal vowel with a plain n, **on the same row**. That is
corrections §6's `entendre` finding one level in: it is not two kinds of row, it
is two kinds of nasal, and a per-row table cannot express it.

Every repair in this build carries `half`, the value you get by repairing what
the checker reports, and all three values are asserted through the real function
in all three layers. **Two of the ten are blind** (`lentement`, `constamment`)
and both are asserted by name, so the day the checker improves the build fails
rather than carrying a dead list.

### And a third field was needed that neither §6 nor a2.11 has

The first version of the table had one boolean for "half is not to", and the
batch caught the conflation on `bien` at once: `BYAN` is FLAGGED, so the checker
is not blind to it at all, and its minimal repair `BYAⁿ` is still not the house
`BYEHⁿ`. **Two different reasons for one symptom.** `blind` and `house` are now
separate fields and mutually exclusive, and the guard asserts
`(half !== to) === (blind || house)`.

### Every repaired value was read off a published row

Three of the words this lesson teaches are respelled TWICE in Postgres, once as a
headword and once inside a published sentence, and **the sentence half is right
in all three**:

```
lentement   fr.sons.adverbes-essentiels.001   lahnt-MAHN
            fr.sons.nasales.013               ... lahⁿt-MAHⁿ
doucement   fr.sons.adverbes-essentiels.003   doos-MAHN
            fr.sons.nasales.014               ... doos-MAHⁿ
bien        fr.sons.mots-essentiels.045       BYAN
            fr.sons.nasales.078               ... BYEHⁿ
```

All six rows are imported by this lesson and the halves sit on one screen, so the
headword half is repaired to match. a2.16 §7's rule exactly: a variant is not a
violation, but two halves of one pair that disagree ON THE SAME SCREEN are.
Nothing was invented, and the manifest, the batch and the test all re-check that
the row a value was read off still holds it.

### The measured figures

```
54 superscripts, 39 seen by the checker, 15 blind
10 repairs: 8 the checker reported, 2 carrying a second nasal it cannot see,
            1 of the 8 a house convention as well
```

The false-positive path — the checker reading a real /n/ as a nasal — **was
looked for and not met.** `bonne` = `BON` is the obvious candidate, has a doubled
n, and the `nn|mm` rescue switches the check off for it. `mal` = `MAL` and
`toujours` = `too-ZHOOR` have no nasal at all. Reported as an absence, per
corrections §6.

---

## 5. The Owns, and how it got the weight

```
CHOSEN     Say the feminine, then add -ment.
```

Six words, doctrine §B.4, runnable in the half-second before the word comes out.

**`Say`, not `Take`, and that one word is the build.** The brief's candidate was
*Take the feminine, add -ment*. `Take` describes an operation on the page; `say`
describes one in the mouth, and the mouth is where the consonant the long word
keeps actually lives. A learner who TAKES `lente` and adds the ending gets the
right letters. A learner who SAYS it hears the t arrive and knows, half a second
later, whether they built it off the right form. The guards assert the verb.

```
REJECTED
  "Take the feminine, add -ment."
        the brief's, and it is one word away. See above.
  "-ment is the French equivalent of -ly."
        the brief records this as the thing to avoid and it is right: a
        translation, with nothing in it about what to put the ending on.
  "The plain form tells you the other three."
        a2.03's, verbatim, and still true, which is exactly why it cannot be
        this one. The payoff screen quotes it and says what the other three
        were for.
  "Wrap the verb, then ask what the verb was."
        a1.18's, verbatim. Negation is named in one line and re-taught nowhere.
  "The adverb goes after the verb."
        one of the three traps rather than the Owns, and a fact about position
        rather than a rule for building anything. It is act 2.
  "Say the feminine out loud, then put -ment on the end."
        the same rule five words longer, and the extra words are instruction
        rather than content.
```

**Act weights: act 3 is SEVEN missions and act 2 is THREE**, asserted in all
three layers. Act 2 is the most defensible cut in the build: placement is one
fact with no internal structure, there are no sub-cases in a simple tense, and
the corpus measurement is 80 to 0. Everything worth thirty minutes is in act 3.

### Did the a2.03 connection land as a payoff or as a prerequisite check?

**As a payoff, and the corpus is what made the difference.** It is not a line
saying "you learned this in a2.03": the third row of the hero table is `sérieux ·
sérieuse · sérieusement`, and **all three of those cells are published rows this
build did not write**, with a2.03's own authored `fr.a2.adjectifs-essentiels.019`
in the middle. `s09-payoff` is a whole mission that names a2.03, quotes its
reframe verbatim, and shows its two predicate sentences unedited before saying
what the middle word was for. A learner who did seq 10 is looking at their own
card. The guards assert that none of the three is inside this build's block.

### The unseen adjectives used for the derivation test

`parfait` → `parfaite` → `parfaitement`, and `certain` → `certaine` →
`certainement`. **`certain` is the harder of the two and was chosen for it:** it
does not exist in the corpus at any status, so nothing anywhere can have taught
it, and the learner has to run a2.03's rule and then this one on a word neither
lesson lists. Both are asserted absent from every authored row, every imported
row and every screen except the two that ask for them, AND the two questions are
asserted present with the woman form in the stem, because a test that only
checked the absence would pass on a lesson that had quietly dropped them.

---

## 6. The compound-tense deferral, flagged for a2.05

**`a2.05` inherits this, and it is not hypothetical.**

The lesson teaches placement for simple tenses only and says so in one line on a
learner surface:

> *In a past tense the short ones move, and that rule arrives with the tense in
> a2.05. If you meet « j'ai bien mangé » before then, nothing here is wrong: it
> is a rule you have not been given yet.*

**82 published sentences put a short adverb between the auxiliary and the
participle**, and one of them — `fr.a1.adverbes-essentiels.055`, « Franchement,
ce film m'a beaucoup déçu. » — is in this lesson's own theme. A learner who
browses the adverb deck will meet the rule before they meet the tense.

Nothing in the lesson conjugates a compound tense. The guard is a SHAPE, it is in
all three layers, and the deferral line is the one legal place, pinned in both
directions: a compound tense anywhere else is fatal, and a deferral line that has
lost its example fails too. **a2.05 should close the loop by naming a2.17.**

---

## 7. What the guards found that no gate did

**1. THE COMPOUND-TENSE SHAPE FIRED ON ENGLISH PROSE, TWICE, AND ITS OWN MUST
LISTS CAUGHT IT.** The first version matched an auxiliary followed by any word
ending in é, i, is, it, u, us or ue. That matches:

> *"You did not stall ON A WORD YOU had not learned."*

`on` is a French subject pronoun, `a` is a French auxiliary, and `you` ends in a
u. **A learner surface in this course is half English by design** (invariants
§8), so a shape built out of French morphology alone reads the English as French.
The shipped version requires a French subject pronoun AND a participle from a
list, which is a2.14 §6 — guard the thing rather than the letters. Both English
sentences are now in `COMPOUND_MUST_NOT_FIRE`.

It also could not see « j'ai bien mangé », the exact phrase the brief names,
because the house lookbehind `(?<![\p{L}\p{N}'’-])` excludes an apostrophe.

**2. THE BATCH CAUGHT A PASSÉ COMPOSÉ IN MY OWN `frSub`.** `s13-deck` read
« Ceux que vous avez faits ». A compound tense on a learner surface, in a lesson
that defers the tense, found by the guard rather than by a reader.

**3. `adverb` IS NOT JARGON, AND MY FIRST JARGON LIST SAID IT WAS.** Measured
across all 53 shipped lessons' learner surfaces:

```
verb 2607 · noun 1405 · plural 740 · feminine 350 · masculine 203
adjective 147 · describing word 137 · adverb 3 · adverbs 2
```

`adjective` is on 147 cards, so `adverb` is house vocabulary by the house's own
measurement and banning it would have been this build inventing a rule. What the
house DOES is prefer the plain phrase: a1.16 says `describing word` 74 times
against `adjective` 12. **The ban is replaced by a RATIO check** — the plain
phrase must outnumber the technical one — which lets `overview.titleEn` stay
"Adverbs", which is what the unit is called. This lesson runs 57 to 14.

**4. MY OWN PRE-FLIGHT PROBE FELL INTO INVARIANTS §0.** It measured the placement
evidence at 76 verb-then-adverb using a JavaScript regex with `\b`, which is
ASCII-only: `répond`, `écoute` and `marché` sit next to accented characters and
four sentences were silently dropped. Postgres `~*` with `\y` finds 80. The batch
re-measures on every apply and caught it on the first dry run.

**5. AND THE RE-MEASUREMENT COUNTED THIS LESSON'S OWN ROWS.** After the first
apply it went from 80 to 87, because seven of the authored sentences match the
pattern being measured. A lesson that counted itself would print a figure that
grows every time somebody re-applies it, and the claim is about the corpus the
learner has already seen. The query now excludes the block.

**6. `lesson-contract.test.ts` CAUGHT BOTH trapDrills IN THE STACKED SHAPE.**
§8 below.

---

## 8. The seed-wide contract that caught this build, and it is one day old

```
a2.17.l1 mission 11 (s11-unseen): trapDrill steps are "",
and A2 walks rule, cards, audio, drill
```

**No document this band reads mentions it**: not the doctrine, not the
invariants, not the corrections, not §1 to §16 of the ledger. It was added on
2026-08-13 by the sweep at the foot of the ledger, after Paul found the stacked
shape on a device in a2.03 mission 8 and a2.16 mission 14 — **and a2.16 is the
lesson this build was modelled on**. The model carried the defect and the rule
that forbids it landed between reading the model and running the suite.

That is a2.03 §11.1's shape in a second field. The `scenario` `alts` rule was the
first: seed-wide, enforced, and mentioned nowhere this band reads.

What the learner lost while both were stacked: the reflex check sat under the
flip cards in a scrolling page instead of owning a screen, nothing gated them
until they had answered it, the section's declared audio played nowhere, and the
pager header froze on one mission number because `subCount()` returns 1 without
`steps`. v1 → v2.

**And the ledger sweep records a fifth field the contract does NOT check: `size`
comes off.** The stepped branch of `MissionSection` sizes off `steps?.length` and
no stepped trapDrill in the corpus carries a size. v2 stepped both and left
`size: 'lg'` on; v3 took it off. Found by reading the ledger section the contract
came from rather than by a gate, **so the batch now asserts it**, along with the
thing the sweep names as the one step with a cost: the audio step plays each
card's `fr`, so the `recordingId` has to point at a take that actually contains
those lines. Both traps got their own take for that reason, and neither claims
« Wrong, Then Right », because neither is one.

**And the open defect the sweep names is now on two more screens.**
`TrapAudioStep` in `MissionRich.tsx` prints « Écoutez la paire. Le R sonne, puis
le R se tait. » above the audio step of every stepped trapDrill, unconditionally
and untranslated. This lesson adds the fourteenth and fifteenth A2 traps to tell
an English-medium learner about a moving R that none of them teaches. Not fixed
here for the same reason the sweep gave: it is app code and needs a build.

---

## 9. Corpus: authored versus imported

```
AUTHORED   24 rows into adverbes-essentiels   fr.a2.adverbes-essentiels.001..024
    4   the ADJECTIVES that do not exist: lente, douce, évident, constant
    4   two predicate pairs, in a2.03's own frame
    3   the three long words in a frame
    2   the already-ends-in-e pair, same subject and same verb
    1   the frequency sentence the scene lost
    4   the three that are not built, plus a bon sentence
    4   two spellings, one sound
    2   the scene
IMPORTED   28 rows by id, out of FIVE themes
   adverbes-essentiels 9 · adjectifs-essentiels 8 · mots-essentiels 5 · nasales 4 · verbes 2
REFUSED    12 rows read and left alone, with the reason on each
```

**ZERO ADVERBS AUTHORED**, and the batch asserts it by name: any authored
headword ending in `-ment` is fatal, because the theme already holds 120 of them.

**Fifteen of the twenty-eight carried rows were not in the seed**, and
`adverbes-essentiels` held **ZERO** rows in the cut. It is outside
`SEED_CUT.themes` entirely: 325 rows in Postgres and none here. Corrections §10
puts the gap at a fifth for `verbes`; here it is a whole theme, and a merge that
did not carry would have rendered every derived word in the lesson as a blank
card.

**Transforms on rows this build does not own:**

```
REPAIRS    10   nine MAHN -> MAHⁿ and one BYAN -> BYEHⁿ, every value read off a
                published row, two of them carrying a second nasal the checker
                cannot see
ADDITIONS   0   every imported row already had a respelling. A FIRST IN THIS
                BAND: a2.16 supplied four and a2.03 several. Asserted empty.
DRILLS      6   four `nasales` sentences that could not be drawn on a card or
                spoken, and two words that could not be spelled
```

**a1.03's ending population: 0 rows from this theme, before and after.** Adverbs
are invariable and are not nouns, and neither are the four authored adjectives,
so nothing here can join it. Checked through the real `endingPopulation` rather
than argued. `a1-03-genre.test.ts`: 35 pass before, 35 pass after.

**The one gendered row this lesson's subject matter would have reached for is
refused twice over**: `le mieux` (`fr.sons.voyelles.174`) is gendered m AND the
comparative is a2.08's.

---

## 10. The lesson

```
24 sections, 6 acts, 30 questions, 52 items, 5 triggers, 10 drills, 1 sheet

act 1  the order that gave you away    3
act 2  where it goes                   3
act 3  where it comes from             7   <- the Owns
act 4  the ones it does not reach      4
act 5  out loud                        4
act 6  prove it                        3
```

Quiz: **30 questions, 5 rounds** — `typeIn` 13, `mcq` 9, `errorSpot` 6,
`listenChoose` 2. mcq is 30%, well inside the half. **Every question has a `why`
and a `ref` naming a real section.** Correct answers spread 3/4/3/1 across the
four slots (27/36/27/9%) against the validator's 40% cap; the first draft put 9
of 11 in slot 1 and the density check caught it.

Dictée: **21 targets, every one proven LETTERS mode through the real
`dicteeMode`**, and **two of them are bare words** — `évidemment` and
`constamment` — because their sentences are eighteen and twenty-two letters. Both
authored woman forms (`lente`, `douce`) are targets: a dictée that could not
spell the middle step would test everything in the lesson except its subject.

**Section mix**, against the band's measured averages (a2.03 §5): two `tapTable`,
two `listening`, two `trapDrill`, two `cardDeck` against an average of 4.2, and
four `examples`. The subject is a DERIVATION rather than a set of words to work
through, so the weight is on tables that show an operation and on screens that
make the learner run it.

### Questions I wanted and could not write

- **An ear question on the -emment/-amment spelling.** The brief's test list asks
  for one and it cannot exist: the two suffixes are one sound, so a
  `listenChoose` differing only there has no correct answer and marking one right
  certifies a bug. The screen asks what the ear CAN supply instead, and the
  dictée does the rest.
- **An ear question on the woman form against the plain form for `sérieux`.**
  `say-RYUH` against `say-RYUHZ` is audible and would have been a third ear
  question, but its pair is a2.03's own rows, which this build does not
  re-record, and `sérieusement` in a frame is twenty-three letters. The two ear
  questions ask about the verb and about the three that are not built.
- **A typed question on a diacritic.** `évidemment` carries one and the question
  does not turn on it: it turns on `emment` against `amment`, and `fold()` keeps
  both. The batch checks that any accented free-text answer is still separable
  once folded, so a later author who adds one that is not finds out.
- **Production inside a mission.** A `groupDrill` check is an mcq (a2.15 §6), so
  `s17-errors` is recognition under pressure, and the two stepped trapDrills plus
  nineteen free-text exam answers are the production.

---

## 11. Mutation testing

**34 mutations, 0 caught by nothing, 0 skipped.** The four the brief names are
rows 1 to 6 and all are caught by every applicable layer.

**Five mutations found a weakness rather than confirming a strength:**

- **The merge was thinner than the batch on three checks** — the regularised
  irregulars, the chain-adjective count, and the stepped-trapDrill shape. None
  shipped, because the batch runs first, but the merge is the layer that runs
  when somebody re-merges without re-applying. Ledger §a2.16-4, and all three are
  now in it.
- **The test could not see a missing irregular.** Its by-name check looked for
  each word anywhere in the section, and the section's `say` lists all three, so
  swapping out an example row left it green. It now requires each of the three to
  have an example ROW of its own.
- **The test could not see an ungated trapDrill.** It is a seed-wide contract in
  another file; it is now pinned here as well.

**And three mutations reported SKIPPED because a2.16's harness header is wrong
about the line endings.** It states "THESE FILES ARE CRLF" and every multi-line
anchor was written with `\r\n` on that authority. Both `scripts/data/*.ts` and
`seed.json` are **LF**. The harness treats a missing anchor as SKIPPED rather
than as a pass, which is the only reason the mistake was visible instead of
quietly turning three rows green.

Three more mutations had to be REWRITTEN because they proved nothing: two
replaced half a sentence and left the claim standing, and one moved a single
mission between acts, which does not invert the weights and so reported caught on
the version check instead. a2.14 §7 and §8, both live.

---

## 12. Wiring, ids and counts

```
scripts/data/adverbes-corpus.ts          the single source of truth
scripts/data/adverbes-lesson.ts          24 sections, 6 acts
scripts/data/adverbes-terms.ts           9 terms
scripts/data/adverbes-imported.ts        displayRespell(), halfRepaired(), the accessors
scripts/data/adverbes-rows.gen.ts        GENERATED, a recorded read
scripts/_a217_manifest.ts                regenerates it
scripts/_a217_probe.ts  _a217_probe2/3/4 the pre-flight, four passes
scripts/author-adverbes-batch.ts         content:adverbes
scripts/merge-adverbes-into-seed.ts
scripts/_a217_mutate.mjs                 34 mutations
ealch-v2/src/content/a2-17-adverbes.test.ts   60 tests
```

**The id block held, and it is a NEW NAMESPACE.**
`fr.a2.adverbes-essentiels` held **0** rows when this build claimed `.001`, and
**24** after, which is 0 plus its 24 and nothing else. `.025..040` left free
deliberately; ids are the SRS key.

**The batch scopes its pre-flight AND its post-commit read to `ID_BLOCK` from the
start**, which is what the ledger's a2.03 amendment asks for by name: that build
re-ran and failed on eighteen "foreign" rows that were a2.16's, because both
reads took the whole namespace prefix, and the post-commit one fires after the
transaction commits so it reports a clean write as a failure.

**`a2.17` is a LEAF**: no unit at any level declares it as a prerequisite,
measured against every unit in `content_units`.

---

## 13. Device verification

**Done, on a Pixel 6, and it produced the measurement a2.16 asked for by name.**

adb was reachable, eventually: the daemon took over a minute to start and Metro
took about three to accept a connection, so two earlier attempts in this session
reported "no device" and "connection refused" and both were wrong. Metro on 8082,
bundle pre-built on the host (24.5 MiB, http 200), `adb reverse tcp:8082
tcp:8082`, and the package is `app.ealch.mobile`.

**Verified on glass:**

```
the missions hub          24 rows, header A2 · LEÇON 12, title « Les adverbes »,
                          every mission title in full INCLUDING the 27-character
                          house heading, every frSub French, chip column reading
                          MISSION · OBJECTIFS · EXEMPLES · TABLEAU · ERREURS ·
                          CARTES · TABLEAU · OREILLE
the resume interstitial   act titles "Where it comes from" and "Where it goes",
                          both clean. This is the screen a2.15 shipped jargon
                          onto and the one a2.16 checked for the same reason.
s07-chain   THE HERO      ALL NINE CELLS ON ONE SCREEN, three columns, NO
                          horizontal scroll. Headers Plain · For her · How, all
                          on one line. Term chips « the chain » and « you can
                          hear it » both in full on one row.
s04-place                 ALL FIFTEEN CELLS ON ONE SCREEN, five rows, no wrap
                          anywhere, and the columns read Who · Does · How left
                          to right, which is the rule drawn rather than stated.
                          Chip « after the verb » in full.
```

### The measurement, and it is the one a2.16 asked for

a2.16 read a five-column cell at about six characters and wrote *"a2.17 should
know the number before it reaches for five columns"*. This lesson used three
columns, and both of its tapTables were read on the same run:

```
souvent      7 chars    ONE LINE
doucement    9 chars    ONE LINE
lentement    9 chars    ONE LINE
sérieusement 12 chars   BROKE      sérieusemen|t
```

**A three-column tapTable cell on a Pixel 6 holds ELEVEN characters.** The band
now has two points on the curve: six at five columns, eleven at three. It is
recorded as `CHAIN_CELL_MEASURED` and asserted in the batch and the test.

**The wrap is ACCEPTED and named rather than designed around**, which is a2.16's
precedent with `nouvelles`. It falls on one row, it is consistent, the cell stays
inside its box and the word stays legible. The alternative was dropping `sérieux`
for a shorter third adjective — and that row is a2.03's own card in all three
cells. Trading the lesson's best evidence for a line break would be the wrong way
round. `CHAIN_CELL_WRAPS` names it, so a SECOND one cannot arrive quietly, and
the guard also refuses to let the list name a cell the chain has stopped
printing.

**What I did NOT open**, said plainly: the two stepped trapDrills in play
(`s11-unseen`, `s15-bonbien`) — which is the pair this build most wants eyes on,
because they were stacked until the contract caught them and the stepped shape
has never been seen on this lesson; the two listening screens; the quiz rounds;
the dictée in play; the scenario turns; the speak practice with the mic; the
reading passage's glossary; the groupDrill; and the reference sheet. Their
content is asserted host-side and their layouts are house shapes this band has
shipped a dozen times, but they are unverified on glass. **The two trapDrills are
the ones I would open next**, and the reference sheet after them: a2.03's device
pass found that a wide table inside a sheet clips and scrolls horizontally, and
this one's widest is four columns, which is a2.03's own hero width and was clean.

### And the host half, which was done as well

- **The served bundle carries the lesson.** 24.5 MiB, http 200, and it holds
  `a2.17.l1`, the reframe (10 occurrences), `Three Steps, Not Two`, `s07-chain`,
  `s11-unseen`, `parfaitement`, the deferral line and `Vos propres mots`.
- **And it does not carry what was removed**: `Ceux que vous avez faits` and
  `The Order You Will Reach For` are both gone from it.
- **`mieux` is on 0 of this lesson's learner surfaces**, checked against the seed
  rather than against the bundle, which holds 43 from other lessons.
- **`lahnt-MAHN` survives on exactly one row in the whole seed**,
  `fr.a1.dictee.166`, which is in `READ_NOT_IMPORTED` and is not in this lesson's
  `itemIds`. No row a2.17 displays carries a plain-n suffix.
- **Every section type this lesson uses has a renderer `case`**, including
  `table` and `teach` inside `ReferenceSheet.tsx`. Invariants §1: a field with no
  reader is worse than an absent one.

---

## 14. What I could not verify

- **The audio.** Eight takes are briefed and `CLIP_MANIFEST` is empty by design,
  so every card falls back to device TTS. `pnpm audio:render` was not run. The
  one-take constraint on the chain pairs and on the two spellings is written into
  `desc` and pinned in all three layers, because it becomes invisible the moment
  the clip exists.
- **The eleven screens listed in §13.** Named rather than papered over, and the
  two stepped trapDrills are the ones most likely to hold a defect: they were
  stacked until the contract caught them and the stepped shape has never been
  read on this lesson.
- **Whether the plain-phrase ratio is the right guard.** It is measured off the
  house rather than chosen, and 57 to 14 is a long way inside a1.16's 74 to 12.
  A later author who wanted the technical word more often would have a case to
  make, and the guard would make them make it.

---

## 15. What a2.05 and the next adverb build inherit

- **The deferral.** §6. `a2.05` should name `a2.17` when it teaches where the
  short ones go in a compound tense, so the loop closes from both ends.
- **The theme and the namespace.** `adverbes-essentiels`,
  `fr.a2.adverbes-essentiels.025` and up. `fr.a2.adjectifs-essentiels.081..120`
  is released back to the ledger unused.
- **The `-ment` convention**, §2, and the 489 rows this build did not repair.
  A later adverb lesson repairs the ones IT displays, the same way.
- **The per-nasal repair split**, §4, which applies to every `-ment` adverb on a
  nasal stem in the language.
- **`a2.08` is untouched.** `mieux`, `plus vite`, `le mieux` and `moins vite` are
  reserved and asserted absent from every learner surface in this lesson.
