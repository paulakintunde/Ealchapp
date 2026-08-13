# a2.03 build report

`a2.03.l1` **"L'accord des adjectifs"**, seq 10, the last lesson of batch 1 and the
only non-verb lesson in it. Applied to Postgres and merged into `seed.json` as
**v3**. Not published.

Doctrine §F, plus the five things the brief asked for by name.

---

## 0. The short version

**33 rows authored, 23 imported, 3 headwords that did not exist anywhere.** The
brief predicted the lesson would author almost nothing and do its work in the
body. It authored more than that, and the reason is not that the vocabulary was
missing: it is that **the paradigm had to be one frame** and the corpus has no
minimal pairs, which corrections §3 has now predicted correctly six builds
running.

**The single most consequential thing this build measured is that a1.13 and a1.14
already print a four-form grid.** The brief calls the grid "the only thing the
lesson has that a1.14 did not". a1.14 says `grands` twenty times and `grandes`
thirteen; a1.13 says "four shapes" twelve times and has a section called "One
Colour, Four Shapes". So the grid is the learner's THIRD and it is act 2 rather
than the lesson. What is genuinely new, and taught nowhere in the project, is the
two named families: **`heureux` 0, `sportif` 0, `actif` 0 across all three
prerequisites, and `sportif` 0 across all forty-nine lessons in the seed.**

```
                                     before        after
node --test (whole suite)            3403 pass     3451 pass   (+48)
a1-03-genre.test.ts                    35 pass       35 pass
seed.json                            v32, 8906 items, 51 lessons
                                     v32, 8956 items, 52 lessons  (+50, version untouched)
fr.a2.adjectifs-essentiels                0 rows       33 rows
npx tsc --noEmit  (both packages)       clean         clean
pnpm content:parity          one pre-existing divergence (b2.01.l1, db-only, in_review)
mutation harness             26 mutations, 0 caught by nothing, 0 skipped
```

---

## 1. The theme decision, which was the open one

**`adjectifs-essentiels`. No theme is created and none needed to be.**

Ledger §3 and corrections §11 both frame this as "`adjectifs` does not exist, so
a2.03 cannot inherit a theme". The question was asked the wrong way round: a1.14
and a1.16 have a home and the ledger never named it.

```
theme adjectifs-essentiels   645 published,  92 in seed
  fr.a1.adjectifs-essentiels    330 rows   next free .341
  fr.sons.adjectifs-essentiels  315 rows   next free .316
  fr.a2.adjectifs-essentiels      0 rows   next free .001   <- opened by this build
theme couleurs               339 published   (a1.13's home)
theme adjectifs / adverbes     0            do not exist, and will not
```

`adjectifs-corpus.ts` (a1.14) references `fr.a1.adjectifs-essentiels` 61 times and
`fr.sons.adjectifs-essentiels` 32; `placement-corpus.ts` (a1.16) 46 and 31.

Opening `fr.a2.adjectifs-essentiels` is a new LEVEL NAMESPACE inside a live theme,
not a new theme: the hub entry and the Den presence already exist with 645 rows
behind them, and `fr.a2.description-personnes-objets` (120 rows) is the precedent
for an A2 namespace inside an A1 theme. **Ledger §3 amended, with blocks reserved
for a2.16 (`.041..080`) and a2.17 (`.081..120`).** a2.17 should not create
`adverbes` either: an adverb built off a feminine adjective belongs beside the
adjective it is built from, and it imports `sérieuse`, `sportive` and `heureuse`
from exactly here.

---

## 2. Every claim in the brief I measured false

Seven, which is above the three-to-six the corrections file predicts.

**1. "every orange row carries gender... importing one moves a1.03's printed
figures." FALSE, and it is the claim that would have cost the most.**

```
fr.sons.couleurs.009   orange   oh-RAHⁿZH   gender NULL   published
fr.sons.couleurs.011   marron   mah-ROHⁿ    gender NULL   published
```

The gendered rows are the FRUIT: `une orange` (fr.a1.cuisine.022), `l'orange`
(fr.a1.marche.048), plus a second colour row in a theme this lesson does not touch
(fr.sons.consonnes.055). The colour and the fruit are different rows and the brief
collapsed them. Nothing was withdrawn, and the manifest generator refuses any
carried row with a gender rather than the corpus asserting it in a comment.

**2. "The four-form grid is the hero and it is the only thing the lesson has that
a1.14 did not." FALSE IN BOTH HALVES**, and it reshaped the lesson. See §0.

**3. "beau, nouveau, vieux... the temptation is total." THE PROHIBITION IS RIGHT
AND THE REASON IS NOT.** There is no temptation, because both prerequisites
already teach them heavily:

```
string    a1.14   a1.16          string   a1.14   a1.16
beau       107      70           vieux     136      49
belle       58      28           vieille    61       4
bel         39      19           vieil     120      29
                                 nouvel      3      21
```

a1.14's `grammarIntroduced` claims "Irregular feminine formation by suppletion:
beau to belle, vieux to vieille" and "The third masculine form before a vowel: bel
and vieil" in as many words. So **a2.16 at seq 11 is a systematisation of
something taught twice at A1, not a first teach.** The guard ships unchanged; only
the reason in its comment changed.

**4. "the invariable class looks like the rule failing... teach them as a named
category." a1.13 ALREADY DID EXACTLY THIS.** Its reframe is *"Colours agree.
Things that became colours do not."* It says `marron` 176 times, `orange` 115,
`invariable` 18, `chestnut` 27, and ships sections called "The Fruit And The
Colour" and "Marron Is A Chestnut". Act 4 therefore NAMES a1.13, states the rule
with its reason, and moves to four colours a1.13's own 53 itemIds never released:
`kaki`, `crème`, `bleu marine`, `bleu clair`.

**5. "-eux → -euse changes the sound. Almost no other agreement in French does."
TRUE BUT MUCH TOO NARROW.** `grand`/`grande` changes the sound and so does
`-if`/`-ive`. What is true of all three and false of none:

> **The feminine is audible in every family. The plural is audible in none.**

Four written forms and two sounds, three times over, and one of each for the
invariable class. That is the listening act's claim and it bookends a2.01 on a
sharper edge than "these two are the loud ones".

**6. "sportif/sportive are genuinely absent." TRUE FOR HEADWORDS, AND "ABSENT" IS
AGAIN NOT "NOWHERE"** (a2.15 §1). Both plurals are already published:

```
fr.a2.description-personnes-objets.003   "Les jumeaux sont sportifs."     no respell
fr.a2.description-personnes-objets.004   "Les jumelles sont sportives."   no respell
```

Neither had a respelling, so both reached a card the learner cannot say (a2.13
§1). This build imports both and SUPPLIES the respellings rather than authoring a
third and fourth copy.

**7. A THIRD HEADWORD IS ABSENT AND NEITHER THE BRIEF NOR CORRECTIONS §2 LISTS
IT.** `sérieuse`: 0 rows at any status, against `sérieux`'s three. Corrections §2
records six absences for the whole level; a2.15 found three more; this is a
tenth. **The list should be treated as a floor, not an inventory.**

---

## 3. What I authored versus imported, and it is not "almost nothing"

```
AUTHORED   33 rows into adjectifs-essentiels   fr.a2.adjectifs-essentiels.001..033
   16   the grid, four patterns x four cells, ONE frame
    3   headwords absent everywhere: sportif, sportive, sérieuse
    6   the -eux and -if families past their heads
    4   the invariable class on colours a1.13 never released
    2   the contrast pair act 4 turns on
    2   the scene
IMPORTED   23 rows by id, out of SIX themes
   adjectifs-essentiels 9 · couleurs 7 · muettes 3 · consonnes 1 · emotions 1
   description-personnes-objets 2
REFUSED    13 rows read and left alone, with the reason on each
```

The brief said the realistic outcome was "very little corpus". It was more,
**and the reason is corrections §3 rather than absence.** Three of the sixteen
grid cells DO exist somewhere else — `Il est grand.` twice in
`description-personnes-objets`, `Ils sont grands.` once, `Elle est grande.` in
`metiers` — and two of the three have no respelling. A hero grid assembled out of
four themes would have carried three cards the learner cannot say and four
different subjects. `fr.a1.metiers.273` independently respells `Elle est grande.`
as `el eh GRAHⁿD`, which is exactly the value this build authored, so the house
form was CONFIRMED rather than invented.

The home theme also already holds a four-cell `heureux` paradigm at
`fr.a1.adjectifs-essentiels.268..271` — in four different frames (`avec elle`, `de
vivre ici`, `ce matin`, `de leur voyage`) and with no respellings. Corrections §3
exactly: the forms exist and the minimal pair does not.

---

## 4. a1.03's ending population, before and after

**Unchanged, and nothing was withdrawn.**

`a1-03-genre.test.ts`: **35 pass before, 35 pass after.** Zero rows this lesson
authored or imported carry a gender, so zero join the population; the batch runs
the REAL `endingPopulation` over the seed on both sides rather than a copy (a1.08
shipped a hand-rolled one carrying a filter the real one lacks and moved two of
a1.03's printed cards).

The only row that would have joined it is the one the brief warned about, and it
was never a candidate: the ungendered `orange` and `marron` rows exist. **No noun
was authored at all** — this lesson hangs its adjectives on subject pronouns,
which is also what puts fourteen of the sixteen cells in LETTERS mode.

---

## 5. What makes this lesson feel different, in section types

Measured across all ten shipped A2 lesson bodies on 2026-08-13, not asserted:

```
                     the nine verb lessons + a2.03      a2.03
groupDrill           45 of 255 sections   avg 4.50        1
cardDeck             42 of 255            avg 4.20        3
tapTable             10                   avg 1.00        2
useCases              0   in ALL TEN                      2
vocabThemes           0   in ALL TEN                      1
reading               8 of 10                             1
table in the flow     0   (it is a density failure)       0
```

**The two types that make up 34% of the verb band's sections make up 12% of this
one**, and this is the first lesson in the band to use `useCases` or
`vocabThemes` at all. Both were grepped in the renderer before being authored:
`MissionSection.tsx`'s switch has no `case` for either, and its shared fallback —
which lives AFTER the switch precisely so a `break` lands on it — hands both to
`SectionView`, which draws `situation`/`fr`/`en` for a useCases card and
`VocabThemesView` for a vocabThemes hub. **Both were then confirmed drawing on a
Pixel 6**, because a grep proves a string is in the bundle and nothing else.

The mission chip column is where a learner sees it: `TABLEAU · VOCABULAIRE ·
LECTURE · GROUPES · EXEMPLES · USAGES · ERREURS · BULLES · ÉCRIT · MICRO ·
RÉVISION` against nine lessons of `GROUPES` and `CARTES`.

Act weights: **act 3 (the two named groups) is 7 missions and act 2 (the grid) is
5**, asserted in all three layers.

---

## 6. The reframe

```
CHOSEN     The plain form tells you the other three.
```

A production rule, doctrine §B.4: eight words, runnable in the half-second between
the noun and the adjective. Verbatim in 6 sections, 9 uses.

```
REJECTED
  "Every adjective has four forms. Your job is to work out which pattern it
   follows."        the brief's candidate. Two sentences, and the second describes
                    the lesson rather than being a rule anybody can run.
  "The masculine tells you the other three."
                    the same rule, wrong register. The grid columns are `Plain
                    form`, `A woman`, `Several`, `Several women`; a reframe saying
                    "the masculine" gives one idea two names on one screen. NOT a
                    jargon decision — see §7.
  "Adjectives agree with the noun."
                    a1.13's and a1.14's, already taught.
  "When in doubt, put it after."       a1.16's, verbatim.
  "Four forms, two sounds."            the listening act's claim, and false of the
                                       invariable pattern, which has one of each.
```

---

## 7. The jargon line was measured, and my first list was STRICTER than the house

Worth recording because it is the opposite of the usual failure. The first
`JARGON` list banned `adjective`, `masculine`, `feminine` and `plural`, which
would have made a2.03 the only lesson in the adjective arc that avoids them.
Counted on the learner surfaces of the three prerequisites and the two newest A2
lessons, with `grammarAssumed`/`grammarIntroduced` excluded:

```
word         a1.13  a1.14  a1.16  a2.15  a2.01
feminine       71     39      0      0      0
plural         40     30     33     43      2
masculine      15      0      0      0      0
noun            9      9    115      0      0
agreement      13      2      0      0      1
adjective       1      2      8      0      0
invariable      3      0      0      0      0
```

Those seven are **house vocabulary for this arc** and a2.03 uses them. The list
that ships is the 21 none of the five uses even once (`inflection`, `paradigm`,
`declension`, `morpheme`, `attributive`, `suffixation`, `phoneme`, `lexeme`,
`denominal`, `conjugation`, …). `scripts/_a203_jargon.ts` prints the table.

---

## 8. The nasals, and a fourth instance of a class invariants §3 records

Measured by breaking every superscript back to a plain `n` one at a time:
**29 superscripts, 27 seen, 2 MISSED.**

The two are one token in two rows, and the second is a2.11's `entendre` on this
lesson's own hero row:

```
el eh GRAHⁿD      Elle est grande.     BLIND     one nasal, and the checker
                                                 cannot see it
el sohⁿ GRAHⁿD    Elles sont grandes.  seen...   but it fires on sohⁿ. Break only
                                                 the GRAHⁿD and it stays quiet.
```

Both asserted by name in all three layers, and the by-name check asserts the
BLINDNESS too, so the day the checker improves the build fails rather than
carrying a dead list.

**The prediction in the first draft was wrong and the measurement corrected it.**
`aⁿ-pewl-SEEV` and `aⁿ-pewl-SEEF` were listed as blind on the reasoning that the
nasal is followed by a consonant inside the token. The checker sees both.

### The false-positive path IS met, and it is `jaune` again

Corrections §6 asks for it to be looked for and its absence reported. It was
found, on a row this lesson imports:

```
crème   /kʁɛm/   a real /m/, NO nasal vowel anywhere in the word
        KREHM    FLAGGED       fr.sons.couleurs.032, published
        KREM     not flagged   and this is the repair
```

Invariants §3 measured `jaune`/`ZHOHN` as exactly this and said the fix is to
**drop the H, never to add a superscript**, because there is no nasal vowel to
close and a `ⁿ` there teaches a sound that is not in the word. `KREHMM` also
passes, by the `nn|mm` rescue, and was rejected: `automne` needed a doubled letter
because its French spelling forces it and `crème` does not. **This is a fourth
instance after `jaune`, `automne` and `la semaine`, and the first on a colour.**

a2.14 §1's doubled-nasal blind spot is NOT met, measured rather than assumed: not
one French string in this lesson holds `nn` or `mm`.

### Repairs

```
VISIBLE     1   crème        KREHM -> KREM          the false positive above
INVISIBLE   4   dangereux    dahn- -> dahⁿ-         real violations, all the same
                nombreux     nohn- -> nohⁿ-         shape: a nasal followed by a
                impulsif     an-   -> aⁿ-           consonant INSIDE the token
                vert foncé   fohn- -> fohⁿ-
HOUSE       1   heureuse     eu-REUZ -> uh-REUZ     not a nasal at all
ADDITIONS   2   the two sportif sentences, which had no respelling at all
DRILLS      2   the same two, which carried only `dictation`
```

The house repair needs its own table because the guards for the other two turn on
`hasPlainNasalFor`, which has no opinion about it. `heureux` is `uh-RUH` and
`heureuse` was `eu-REUZ`: two spellings of /ø/ in one word, sitting one above the
other on the family screen, where a learner would read the STEM as changing when
only the ending does. Ledger a2.13 §9 measured that the shipped corpus writes
/ø œ/ as `UH`.

**a2.15's merge dies if `RESPELL_ADDITIONS` is non-empty**, with the note that it
"has no path for them". This merge has the path, and the difference that makes it
safe is one line: an addition may only land on a row whose respelling is EMPTY.

---

## 9. The dictée, and what could not be tested

**14 of the 16 grid cells spell in LETTERS mode.** The two that do not:

```
Elles sont sérieuses.   18 letters   WORD mode
Elles sont sportives.   18 letters   WORD mode
```

Both are the feminine plural of a family whose feminine runs to nine letters, and
there is no subject shorter than `Elles sont`. **This is a hard limit rather than
a choice**, it is named on the dictée screen rather than silently dropped, and
both rows are asserted OUT of the dictée in all three layers so a later author
cannot quietly add them.

### The frame contains no liaison, and that picked the head adjective

`Ils sont heureux.` liaises: the `t` of `sont` is pronounced into `heureux`.
Correct notation needs U+203F, which renders as a low underscore on a Pixel 6 and
which invariants §2 forbids introducing. Writing the liaison without the tie on
the hero screen would teach a sound the notation does not mark; dropping it would
teach a pronunciation nobody uses.

So **`sérieux` heads the -eux family rather than `heureux`**: consonant-initial,
already in the home theme, and its feminine did not exist, which is the row a2.17
needs. All sixteen cells are liaison-free and the batch asserts it.

### Questions I wanted and could not write

- **An ear question on the -eux masculine plural.** It is the same word as the
  singular, so there is nothing to hear and nothing to ask. The brief predicted
  this and it holds: every singular/plural pair in this lesson is one sound, which
  is why the three `listenChoose` questions all ask about the FEMININE. The guard
  enforces it with a homophone-group check rather than a comment, because a
  sentence in a report cannot fail.
- **A typed question on the accent in `sérieuse`.** `fold()` strips combining
  marks, so `serieuse` is accepted and the learner is told they spelled it right.
  Corrections §5.
- **Production inside a mission.** A `groupDrill` check is an mcq (a2.15 §6), so
  `s15-cold` is recognition under pressure and round 5 of the exam is the
  production: five free-text answers on three adjectives that appear on no card.

---

## 10. The Owns, and the generalisation test

Three adjectives the lesson NEVER shows: **`courageux` (-eux), `actif` (-if),
`turquoise` (invariable).** All three exist in the corpus, so a learner may have
met the masculine on a flashcard; none is a corpus row, an itemId, a deck
release, a term, a drill or a sheet entry here, and all three are confined to
`s15-cold` and `s24-quiz`. Verified absent from all three prerequisites too
(`active` appears once in a1.14 and it is the English adverb "actively" in an
audio note).

The guard runs in both directions: they must be absent everywhere else **and
still present in those two sections**, because a reservation list that has quietly
emptied has stopped guarding. And per adjective rather than in total — the
mutation harness showed a total-only check passing with four questions on one word
and none on the other two.

---

## 11. Three defects found after every host gate was green

**1. `scenario.logic.test.ts` REQUIRES TWO ALTERNATIVES PER ROLE-PLAY TURN, AND
NOTHING IN THIS BAND'S DOCUMENTATION MENTIONS IT.**

> *"one accepted answer per turn is the cloze-test failure this content exists to
> fix"*

v1 shipped three turns with one apiece. The batch was green, the merge was green,
and the suite went red the moment the merge landed. Same class as a2.15 §3's
banned word in a `cardDeck` sub. **v1 → v2**, and all three layers now check it.

**2. A TERM CHIP CUT ON THE PIXEL 6, LOSING THE PART THAT NAMED THE GROUP.**

`theEuxGroup` and `theIfGroup` were `words ending in -eux` and `words ending in
-if`. On `s13-bank` the two chips share one row and the second drew as **"words
ending in"** — the `-if` is the entire distinguishing content and it is the part
that went. Every host gate was green: the strings are valid, both chips render,
and only the WIDTH is wrong. Ledger §a2.14-13 one field over.

Renamed to `ends in -eux` and `ends in -if`, which is also what `PATTERN_LABEL`
already calls the two groups on the grid. **v2 → v3.**

**3. AND THE GUARD THAT DEFECT PRODUCED FOUND A SECOND INSTANCE BEFORE I OPENED
THE SCREEN.** `s12-ear` declared three chips totalling 40 characters. That is the
argument for turning a device finding into a check rather than a note.

The budget is **37, measured**, and the first version of the guard was set at 32
and was wrong in the direction that fails a correct build:

```
37   "the ones that never change" + "four shapes"      BOTH FULL   (missions 14, 16)
39   "words ending in -eux" + "words ending in -if"    SECOND CUT  (mission 13)
40   three chips on s12-ear                            over
```

**It is a WIDTH, not a count** — 37 of narrow lowercase fits and 39 of wider
glyphs does not — so like the title ceiling it is necessary and not sufficient,
and anything from 34 up wants a look at the phone.

---

## 12. Device verification: done, on a Pixel 6, and it found two of the three above

adb was reachable. Metro on 8082, bundle pre-built on the host (23.0 MiB), cold
restart after the seed change (a dev build never OTA-fetches, so the phone shows
what Metro serves).

**Verified on glass:**

```
the missions hub          25 rows, every title IN FULL including the 27-character
                          house heading, every frSub French
the lesson cover          intro renders whole, past the A2 paywall
the resume interstitial   act title "Four shapes, four groups", clean
s04-grid   THE HERO       ALL SIXTEEN CELLS ON ONE SCREEN, four columns, no
                          clipping and no horizontal scroll. This is the screen
                          the report predicted was most likely to be wrong.
s05-default               [GRAHⁿ] renders as a superscript, not an underscore
s12-ear                   two chips, both full (after the v3 fix)
s13-bank   vocabThemes    both theme hubs drawn with counts; chips fixed and
                          re-read after the cold restart
s14-reading               ONE BLOCK, all five glossary keys underlined and live
s16-never                 « Ses vestes sont vertes. » directly above « Ses vestes
                          sont marron. », the minimal pair visible without
                          scrolling. The brief's second layout claim.
s17-newcolour  useCases   all three lines per card, four cards
the reference sheet       CONTENTS RENDER, not just the title: four tables with
                          real data and two teach blocks
```

**The sheet's five-column tables are clipped at the right edge and scroll
horizontally, per table.** Swiping revealed `ELLE EST / ILS SONT / ELLES SONT`
with every value. So all sixteen cells are reachable and the clipping is the
table's own scroller rather than a defect — but it means **the sheet's grid needs
a swipe where the in-flow `tapTable` does not**, which is the reason the in-flow
version has four columns and short cells.

**What I did NOT open**, said plainly: the quiz rounds, the dictée in play, the
scenario turns, the speak practice with the mic, `s08-check`'s trapDrill and
`s15-cold`'s groupDrill. Their content is asserted host-side and their layouts are
house shapes this band has shipped ten times; they are unverified on glass.

---

## 13. Wiring, ids and counts

```
scripts/data/accord-adjectifs-corpus.ts        the single source of truth
scripts/data/accord-adjectifs-lesson.ts        25 sections, 6 acts
scripts/data/accord-adjectifs-terms.ts         7 terms
scripts/data/accord-adjectifs-imported.ts      displayRespell() and the accessors
scripts/data/accord-adjectifs-rows.gen.ts      GENERATED, a recorded read
scripts/_a203_manifest.ts                      regenerates it
scripts/author-accord-adjectifs-batch.ts       content:accord-adjectifs
scripts/merge-accord-adjectifs-into-seed.ts
scripts/_a203_mutate.mjs                       26 mutations
ealch-v2/src/content/a2-03-accord.test.ts      48 tests
```

**No collision with `author-adjectifs-batch.ts` (a1.14) or
`author-placement-batch.ts` (a1.16).** Both exist, neither is touched, and the new
`content:accord-adjectifs` script is a distinct entry.

**The id block held trivially and it is the one easy case in this batch:**
`fr.a2.adjectifs-essentiels` did not exist, so 0 before and 33 after, and ANY row
inside the block this build does not own is somebody else landing in it. The
theme-wide count is checked the way ledger §a2.14-12 asks — growth is a report,
shrinkage is fatal.

**Row count: 0 before, 33 after, max `.033`.** `.034..040` left free deliberately;
ids are the SRS key.

Quiz: **32 questions, 5 rounds** — `typeIn` 17, `mcq` 8, `errorSpot` 4,
`listenChoose` 3. mcq is 25%, well inside the half. **Every question has a `why`
and a `ref` that names a real section.** Correct answers spread 3/3/3/2 across the
four option slots (27/27/27/18%), against the validator's 40% cap.

---

## 14. Mutation testing

**26 mutations, 0 caught by nothing, 0 skipped.** The four the brief names are
rows 1 to 4 and all four are caught by at least two layers.

Three mutations found a weakness rather than confirming a strength, which is above
the measured rate for this band:

- **Rows 11 and 12 were caught by NOTHING** on the first run. They wrote a2.17's
  `-ment` adverb and a2.08's comparative into an authored row's **`notes`**, and
  all three layers walked the LESSON only, which is what every build in this band
  walks. `Item.notes` reaches no component today — it is referenced by
  `density.logic.ts`, `schema.ts` and `content.logic.ts` and by nothing in
  `src/components` — so nothing shipped to a learner, and it was still a hole,
  because the claim is about what this lesson TEACHES and the notes are content
  this build authored. **All three walks now include `fr`, `en` and `notes` on
  every authored row.**
- **Row 7 exposed a too-loose guard.** "At least three free-text questions produce
  a cold form" passes with four questions on one adjective and none on the other
  two. Tightened to per-adjective in the batch, the merge and the test.
- **Row 26 exposed one a count could never see.** Replacing the `REFRAME` constant
  replaces it everywhere, so the six-section count does not move and the density
  validator's floor of three is still met. What is actually guardable is the
  LENGTH: doctrine §B.4 asks for something runnable mid-sentence, and 12 words is
  the cap `density.logic.ts` puts on an `xl` string. Added to all three layers.

Three mutations also had to be REWRITTEN because they proved nothing (a2.14 §8):
one anchor was not enough where a claim is stated in a label, a `say` and two
`why`s; and one targeted an adjective with two production questions where only one
had a single one.

---

## 15. What I could not verify

- **The eight screens listed in §12.** Named rather than papered over.
- **Whether the sheet's horizontal table scroll is discoverable.** It works and
  there is no affordance on the first paint; that is a product question rather
  than a content one and I did not change anything for it.
- **Whether 34 to 37 characters of term chips fits for glyph sets other than the
  two I read.** The budget is a width and I have three data points.
- **The audio.** Eleven briefs are written and `CLIP_MANIFEST` is empty by design,
  so every card falls back to device TTS. `pnpm audio:render` was not run.

---

## 16. What a2.16 and a2.17 inherit

- **The theme and their id blocks.** `fr.a2.adjectifs-essentiels.041..080` and
  `.081..120`, reserved in ledger §3.
- **`beau`, `nouveau`, `vieux` and all their forms are printed nowhere here**, so
  a2.16 still has a lesson — though it should know that **both prerequisites
  already teach every one of those forms heavily**, so its job is
  systematisation.
- **The feminine forms a2.17 needs are clean and available.** `sérieuse`
  (`fr.a2.adjectifs-essentiels.019`) and `sportive` (`.018`) are newly authored,
  bare, ungendered, respelled; `heureuse` (`fr.sons.muettes.053`) is repaired onto
  the same stem as `heureux`. `-ment` is taught nowhere and the guard that keeps
  it out is stem-based rather than suffix-based, because a suffix guard fires on
  `arrondissement`, `appartement`, `moment`, `comment` and on the unit's own
  English title **`Agreement`**.
- **a2.03 is NOT a leaf.** Three units rest on it: a2.16 (seq 11), a2.17 (seq 12)
  and **a2.08 (seq 32)**, which the brief does not mention. Three builds in this
  batch, three different answers; probe your own unit.
