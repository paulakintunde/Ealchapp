# a2.16 build report

`a2.16.l1` **"Beau, nouveau, vieux"**, seq 11, the first lesson of batch 2 and
the payoff a2.03 was told to refuse. Applied to Postgres and merged into
`seed.json` as **v2**. Not published.

Doctrine §F, plus the four things the brief asks for by name.

---

## 0. The short version

**18 rows authored, 12 imported, ONE headword that did not exist.** The brief
predicted three: it said `bel`, `nouvel` and `vieil` "were not probed and are the
Owns", and that their absence "is likely, since they only ever appear before a
vowel". Measured: **`bel` and `vieil` are published, respelled, ungendered rows
in this lesson's own home theme**, and a2.03's own `READ_NOT_IMPORTED` already
listed both as "a2.16's". Only `nouvel` is absent.

**The single most consequential thing this build measured is that the third form
and the feminine are ONE SOUND, and the proof is somebody else's data.**

```
bel      fr.sons.adjectifs-essentiels.314   BEL    /bɛl/
belle    fr.sons.consonnes.138              BEL    /bɛl/
vieil    fr.sons.adjectifs-essentiels.315   VYEY   /vjɛj/
vieille  fr.sons.adjectifs-essentiels.312   VYEY   /vjɛj/
```

Two pairs, respelled by different authors in different themes, agreeing byte for
byte on the respelling AND the IPA. That reshaped the lesson: the brief's Owns
was "the third form, and the sound reason it exists", and the sharper version is
that **the third form is not a new sound at all — it is the feminine, on a
masculine noun, two letters shorter.** Everything the lesson has to teach falls
out of that one fact, including both of the brief's traps.

```
                                     before        after
node --test (whole suite)            3451 pass     3489 pass   (+38)
a1-03-genre.test.ts                    35 pass       35 pass
seed.json                            v33, 8956 items, 52 lessons
                                     v33, 8976 items, 53 lessons  (+20, version untouched)
fr.a2.adjectifs-essentiels               33 rows       51 rows
npx tsc --noEmit  (both packages)       clean         clean
pnpm content:parity          one pre-existing divergence (b2.01.l1, db-only, in_review)
mutation harness             29 mutations, 0 caught by nothing, 0 skipped
```

**`seed.version` is 33 and a2.03's report records 32.** A publish landed between
the two builds. Measure it yourself rather than carrying either figure forward.

---

## 1. Every claim in the brief I measured false

Seven, which is at the top of the three-to-six the corrections file predicts.

**1. "bel, nouvel and vieil were not probed and are the Owns … If they are
absent — which is likely — this lesson authors its three headline forms and that
is the authoring case." FALSE FOR TWO OF THE THREE, and it is the claim the whole
build plan rested on.**

```
bel     fr.sons.adjectifs-essentiels.314   BEL    published, ungendered, HOME THEME
vieil   fr.sons.adjectifs-essentiels.315   VYEY   published, ungendered, HOME THEME
nouvel  0 rows at any status in any theme  ABSENT
```

One headword is authored, not three. And the information was already in the
repository: `accord-adjectifs-corpus.ts`'s `READ_NOT_IMPORTED` lists `.314` as
`bel` and `.315` as `vieil`, both marked "a2.16's". The brief was written without
reading the prerequisite's own corpus file, which is the file doctrine §A.4 sends
every author to first.

**2. "nouvelle is two words … the published rows are mostly the noun, gendered.
Do not import a gendered row." HALF TRUE, AND THE USEFUL HALF IS MISSING.** Two
of the three rows are the gendered noun and the brief is right to refuse them.
The third is a clean ungendered ADJECTIVE, `fr.a1.rencontres.095`, sitting beside
`fr.a1.rencontres.094` `nouveau` as an authored pair. It is imported. **Zero of
the twelve carried rows has a gender**, and that is by construction rather than
luck: see §4.

**3. Corrections §3, "the corpus has forms and no minimal pairs", which the brief
inherits. FALSE HERE, AND IT IS THE FIRST COUNTEREXAMPLE IN THE BAND.** The home
theme already holds the third form of all three adjectives in ONE frame:

```
fr.a1.adjectifs-essentiels.204   C'est un bel arbre.
fr.a1.adjectifs-essentiels.038   C'est un nouvel ami.
fr.a1.adjectifs-essentiels.214   C'est un vieil immeuble.
fr.a1.adjectifs-essentiels.026   C'est un bel homme.
```

What holds is the SECOND half of §3: **not one of the four had a respelling**, so
all four reached a card the learner cannot say (a2.13 §1). This build imports all
four and supplies all four respellings rather than authoring a fifth, sixth and
seventh copy of a frame the corpus already has. The consonant-initial halves do
not exist in that frame, so those three are authored.

**4. "beaux -x, not -s / nouveaux -x, not -s / vieux already ends in -x." TRUE,
AND ONLY ONE THIRD OF IT IS THIS LESSON'S.** `vieux` is owned twice over:
a1.14's grammarIntroduced says "Invariance of the masculine plural on adjectives
already ending in -s or -x: vieux, mauvais" in those words, and a2.03 generalised
it to the class. So the lesson NAMES both and re-teaches neither.

What is genuinely untaught is the **-eaux plural**. Measured across all 52 lesson
bodies and every `grammarIntroduced` string in the seed: `beaux` appears in a1.14
(5), a1.16 (22) and a1.30 (4), `nouveaux` in a1.16 (4), always as an example and
never as a rule, and **no unit at any level claims it.** The manifest generator
re-checks that on every run.

**5. "listenChoose for beau/bel, which is genuinely audible." TRUE, AND IT IS THE
ONLY EAR QUESTION THIS LESSON CAN ASK.** Five written forms collapse into two
sounds, so plain-against-short is the only audible distinction in the whole
paradigm. The brief's own second trap — the invented feminine — is UNHEARABLE by
construction. Both facts are enforced rather than reported: the guard derives the
homophone groups from the respellings, refuses any `listenChoose` whose options
differ only by a homophone, **and requires every ear question to turn on the one
pair that is audible**, because refusing the illegal ones is not enough.

**6. "Your example nouns should be imported, not authored." TRUE, AND THIS BUILD
IMPORTS NONE OF THEM.** Every noun it needs — `appartement`, `immeuble`, `arbre`,
`ami`, `homme`, `sac` — exists, and every one is **gendered**. Importing any of
them would join a1.03's measured ending population. So every noun appears INSIDE
a sentence instead and eleven noun rows are in `READ_NOT_IMPORTED` with the
reason. §4.

**7. "Whether sons.07 shipped with a quotable reframe … the memory of this
project records it as not yet applied to DB or seed." IT IS LIVE.** `sons.07.l1`
is in the seed at v1, 19 sections, unit `sons.07` at seq 8, reframe *"Two vowels
collide, the little word gives way."* Its `grammarIntroduced` is
`["elision", "h-aspire-vs-h-muet"]`, which is what makes `C'est un bel homme.` an
application of a rule the learner already holds rather than an exception.

---

## 2. What this build found that no brief mentions

**8. THE PROJECT HAS BEEN COUNTING THIS RULE FOR TWENTY LESSONS AND NEVER TOLD
THE LEARNER.** a1.20's grammarIntroduced says, in as many words:

> "combien de, and the elision of de to d' before a vowel, **as a fifth instance
> of anti-hiatus**"

Read out of every `grammarIntroduced` in the seed, the instances are a1.03
(le/la), a1.05 (je), a1.09 (de), a1.17 (ma to mon), a1.18 (ne), a1.19 (est-ce
que, and the epenthetic -t-), a1.20 (de), a1.29 (de) and sons.07 (the whole
rule). Nine, on eight different parts of speech.

**And a1.17's is the SAME SHAPE as this one.** Its grammarIntroduced says "mon,
ton and son in front of a feminine noun beginning with a vowel or a mute h", and
it says `mon amie` **fifty-five times** on its learner surfaces. That is not a
deleted letter: it is a form swapped ACROSS GENDER to get a consonant in front of
a vowel, which is exactly what `bel` is in the other direction. `s10-chain` names
it, and it is what turns three exceptions into a family. `anti-hiatus` is jargon
and stays in `grammarIntroduced`; it is in the JARGON ban list for every learner
surface.

**9. THE ONLY RESPELLED THIRD-FORM SENTENCE IN THE CORPUS CANNOT BE IMPORTED.**

```
fr.sons.masterclass.034   C'est un très bel appartement.
                          seh-t‿uhⁿ treh beh-l‿a-par-tuh-MAHⁿ
```

Two U+203F UNDERTIES, which render as low underscores on a Pixel 6 (a2.13 §3,
invariants §2). It is the only one of 27,691 published sentences that respells
the third form at all, and it is unusable. The manifest generator's tie check
fires on it for real, and it re-checks on every run that the row still carries
the glyph — a refusal nobody re-verifies is a comment.

**10. THE HOUSE ALREADY HAD A TIE-FREE NOTATION FOR THIS AND IT IS THE HYPHEN.**
Every `bel`/`nouvel`/`vieil` phrase runs its final consonant into the following
vowel, so every hero row needs the join marked and the glyph for it is banned.
The shipped corpus already writes exactly that join with a plain hyphen: `un ami`
= `uh-nah-MEE` (fr.a1.rencontres.073), `une amie` = `ü-nah-MEE`, `un ordinateur`
= `uh-nor-dee-nah-TUHR`. So `C'est un bel arbre.` is `seh-tuhⁿ beh-LAHRBR` and no
glyph was invented.

**11. THE SHORT FORM'S RESPELLING NEVER APPEARS INTACT IN A PHRASE, AND THAT
ABSENCE IS THE LESSON.** Found by this build's own grid guard, which was written
to check that the phrase respelling CONTAINS the form's respelling and which
failed on the first run against a correct row: `BEL` is not in `seh-tuhⁿ
beh-LAHRBR`, and it must not be. The guard now asserts the JOIN instead — the
final consonant must open a syllable, and the short form must not survive as a
standalone token — which is the thing the form exists to do.

**12. EVERY SUPERSCRIPT IN THIS LESSON IS VISIBLE TO `hasPlainNasalFor`, WHICH IS
A FIRST IN THIS BAND.** 17 superscripts, 17 seen, **0 missed**, measured by
breaking each one back to a plain n. a2.11 missed 11 of 25, a2.14 1 of 14, a2.15
2 of 29, a2.03 2 of 29. It is not luck: every nasal here is `uhⁿ` or `sohⁿ` and
both END a token, which is the one shape corrections §6 says the checker CAN see.
The lesson has no word whose nasal is followed by a consonant inside the token,
because its three adjectives have no nasal in them at all.

**The false-positive path is NOT met, and four candidates were tried** — corrections
§6 asks for the absence to be reported. `beh-LOM` for `un bel homme` is the one
that looks like it should fire and does not: `hasPlainNasal`'s list is
(AH OH EH UH EU AI OU) and a bare `O` is not on it. All four are asserted through
the real function, so a recorded absence cannot go stale.

**a2.14 §1's doubled-nasal blind spot IS met, on one imported row.** `immeuble`
has a doubled m, which switches the whole check off for that row by the `nn|mm`
rescue. It carries no superscript to lose, so nothing is at risk; recorded rather
than discovered later.

---

## 3. The Owns, and how it got the weight

```
CHOSEN     Before a vowel, say the feminine and drop its last two letters.
```

A production rule, doctrine §B.4: twelve words, exactly on `density.logic.ts`'s
`xl` cap, runnable in the half-second between the adjective and the noun, which
is exactly the half-second in which it is needed. It carries the **trigger** (a
vowel is coming), the **sound** (say the feminine) and the **spelling** (drop the
last two letters), and all three are measured true of all three adjectives with
no exception:

```
belle - le = bel      nouvelle - le = nouvel      vieille - le = vieil
```

```
REJECTED
  "The extra form exists so two vowels never meet."
        the brief's candidate, and it is the REASON rather than the rule. It
        tells the learner why the form is there and nothing about how to build
        it. It survives as the act 3 claim, where a reason belongs.
  "beau becomes bel before a vowel."
        the brief records this as the thing to avoid and it is right. The fact
        without the reason, and it is three facts rather than one.
  "The plain form tells you the other three."
        a2.03's, verbatim, and still true — which is why it cannot be this one.
        AGREEMENT_CLAIM quotes it and adds the column.
  "Two vowels collide, the little word gives way."
        sons.07's, verbatim. Quoted in act 3 by unit id; taking it would claim a
        pronunciation lesson's work as this one's.
  "Say the feminine and drop the le."
        one clause shorter and it loses the TRIGGER. The commonest error is
        running the rule at the wrong time rather than running it wrong.
  "When in doubt, put it after."      a1.16's, verbatim.
```

**Act weights: act 3 is SEVEN missions and act 2 is THREE**, asserted in all
three layers. Act 2 is the most defensible cut in the build: a2.03 shipped the
four-form grid at seq 10 and a1.13 and a1.14 before it, so four of these five
columns are the learner's third or fourth sight of them. Act 2's only job is to
put the fifth column beside the four they own, and then stop.

Act 4 is four rather than six because two thirds of the plural belongs to a1.14
and a2.03, both of which are named on the screen rather than re-taught.

**The reason landed as the reason for the form, not as a decoration on a table.**
It has its own mission (`s09-why`, a `teach` at core quoting sons.07 verbatim),
the mission after it is the chain that makes it a family (`s10-chain`, naming
a1.17), and the mission after THAT is the silent h, which is the same rule
applied where the spelling disagrees with the mouth. Three of act 3's seven
missions are the reason. The paradigm act does not mention it.

---

## 4. a1.03's ending population, before and after

**Unchanged, and eleven rows were withdrawn to keep it that way.**

`a1-03-genre.test.ts`: **35 pass before, 35 pass after.** The batch runs the REAL
`endingPopulation` over the theme on both sides rather than a copy (a1.08 shipped
a hand-rolled one carrying a filter the real one lacks and moved two of a1.03's
printed cards).

**Zero gendered rows are authored or carried, and that is by construction.** This
lesson is about the sound at the front of a NOUN, so it needs nouns — and every
noun it needs is a gendered single-word row:

```
un appartement  fr.a1.rp-maison.001    gender m   REFUSED
l'immeuble      fr.a1.la-ville.002     gender m   REFUSED  (its respelling was
                                                  read off for the supplied value)
un ami          fr.a1.rencontres.073   gender m   REFUSED  (the hyphen-join
                                                  notation was read off it)
l'homme         fr.sons.elision.012    gender m   REFUSED
un homme        fr.sons.liaisons.168   ungendered but U+203F   REFUSED
```

So **no noun is imported at all.** Every one appears inside an authored or
imported SENTENCE, which carries no gender. Eleven rows are in
`READ_NOT_IMPORTED` with the reason on each.

---

## 5. Corpus: authored versus imported

```
AUTHORED   18 rows into adjectifs-essentiels   fr.a2.adjectifs-essentiels.041..058
   12   the predicate cells, three adjectives x four forms, ONE frame
    3   the consonant-initial half of each contrast pair, ONE noun
    1   the headword that did not exist anywhere: nouvel
    2   the scene
IMPORTED   12 rows by id, out of THREE themes
   adjectifs-essentiels 10 · consonnes 1 · rencontres 1
REFUSED    12 rows read and left alone, with the reason on each
```

**Eight of the nine forms already existed as headwords.** The three plain forms,
the two short forms the brief said would be absent, and three feminines.

**Two of the twelve carried rows are NOT in the seed** —
`fr.a1.adjectifs-essentiels.038` (the nouveau cell of the grid) and
`fr.a1.rencontres.095` (the feminine it is built from) — so a merge that did not
carry them would render the hero column as two blank cards. That is corrections
§10 in this lesson's own subject matter.

**Transforms on rows this build does not own:**

```
REPAIR     1   nouvelle   noo-VELL -> noo-VEL     fr.a1.rencontres.095
ADDITIONS  4   the four third-form sentences, which had no respelling at all
DRILLS     4   the same four; two carried only `dictation` and could not be
               drawn on a card or spoken
```

The repair needs its own justification because invariants §9 says a variant is
not a violation. What makes this one a violation is a2.03's precedent: **two
halves of one pair that disagree ON THE SAME SCREEN**. The grid prints all six
`/ɛl/` and `/ɛj/` cells at once and claims each pair is one sound; `bel`/`belle`
are both `BEL` and `vieil`/`vieille` are both `VYEY`, written by different
authors in different themes. `nouvelle` was the odd one out. The repair brings
ONE row into line with FOUR rather than inventing a spelling. Authoring `nouvel`
as `noo-VELL` instead was rejected: it puts two conventions for /ɛl/ side by side
on the same screen, which is the defect rather than a way round it.

---

## 6. The dictée, and what could not be tested

**16 targets, all proven LETTERS mode through the real `dicteeMode`.** Three rows
are too long and all three are named on the grid rather than quietly dropped:

```
Elles sont nouvelles.      18 letters   WORD mode
Elles sont vieilles.       17 letters   WORD mode
C'est un vieil immeuble.   19 letters   WORD mode
```

**Two of the three short forms ARE dictée targets**, which mattered enough to
guard: a dictée that could not spell the short form would test everything in this
lesson except its subject, and the short form only exists in rows somebody else
published. `C'est un bel arbre.` (14) and `C'est un nouvel ami.` (15) spell in
letters; `C'est un vieil immeuble.` (19) cannot, and that is a hard limit rather
than a choice.

### Questions I wanted and could not write

- **An ear question on the invented feminine.** It is the trap the brief asks for
  and it is UNHEARABLE by construction: `bel` and `belle` are one sound, so a
  learner who says « une belle appartement » has made the right noise. The exam
  asks it three times as `errorSpot` instead, because a written surface is the
  only thing that can catch it. The guard refuses any `listenChoose` that offers
  it.
- **An ear question on the plural.** `beau`/`beaux`, `nouveau`/`nouveaux` and
  `vieux`/`vieux` are each one sound. There is nothing to hear and nothing to
  ask, exactly as the brief predicted. Both ear questions in the exam ask about
  the plain-against-short contrast, which is the only audible pair in the lesson,
  and the guard requires it.
- **A typed question on a diacritic.** None arose — this lesson's forms carry no
  accents — and the check is in the batch anyway so a later author who adds one
  finds out. Corrections §5.
- **Production inside a mission.** A `groupDrill` check is an mcq (a2.15 §6), so
  `s17-errors` is recognition under pressure and rounds 2 and 3 of the exam are
  the production: nine free-text answers, six of them building a short form.

---

## 7. The lesson

```
24 sections, 6 acts, 30 questions, 30 items, 5 triggers, 10 drills, 1 sheet

act 1  the word that would not come out    3
act 2  five shapes, not four               3
act 3  the short one, and where it comes from   7   <- the Owns
act 4  the two traps                       4
act 5  out loud                            4
act 6  prove it                            3
```

Quiz: **30 questions, 5 rounds** — `typeIn` 12, `mcq` 10, `errorSpot` 6,
`listenChoose` 2. mcq is 33%, inside the half. **Every question has a `why` and a
`ref` naming a real section.** Correct answers spread 4/2/3/3 across the four
option slots (33/17/25/25%), against the validator's 40% cap — the first draft
put 8 of 12 in slot 1 and the density check caught it.

**Section mix**, against the band's measured averages (a2.03 §5): this ships
**2 cardDecks against an average of 4.2** and **1 groupDrill against 4.5**, and
leans on `tapTable` (2), `listening` (2), `examples` (4) and `teach` (1) instead,
because the subject is a CONTRAST rather than a set of words to work through.

---

## 8. Three defects found after every host gate was green

**1. THE FIVE-COLUMN GRID BROKE THREE OF ITS COLUMN HEADERS MID-WORD ON A
PIXEL 6.** v1 → v2.

```
For a woman     ->  For a / woma / n
Several         ->  Severa / l
Several women   ->  Severa / l wom / en
```

Every host gate was green: the strings are valid, the table renders, **all
fifteen cells are on one screen with no horizontal scroll**, and only the WIDTH
is wrong. It is ledger §a2.14-13's finding in a **third** field, after the mission
title and the term chip.

**The measurement is in the failure, and it is a width rather than a count:**
`plain` and `vowel` are five characters and set on one line; `woman` is five and
did not, because `w` and `m` are the two widest lowercase glyphs. So the budget
is **six characters, and at most one w or m past four**, and the batch asserts it.
The first version of that guard was one glyph too strict and rejected `vowel`,
which demonstrably fits.

Headers are now `Plain · Before a vowel · For her · For them · For her, plural`
and every break falls at a space. Re-read off the phone after a cold restart.

**2. THE BATCH'S OWN GRID GUARD FAILED ON A CORRECT ROW**, on its first run,
because it searched for the short form's respelling inside the phrase's. It is
not there and must not be: the consonant has moved into the next word. See §2
item 11. The guard now asserts the join.

**3. A SUBSTRING GUARD FIRED ON THE LESSON'S OWN HERO ROW.** The
short-form-in-a-predicate check used `.includes("Elle est bel")`, which matches
« Elle est belle. » — because **the short form is a PREFIX of the feminine in all
three adjectives.** That is not a corner case here; it is the central fact of the
lesson, so every guard in this build that searches for a short form is
boundary-aware. Invariants §0, and it cost one run.

---

## 9. Device verification: done, on a Pixel 6, and it found the first of those

adb was reachable. Metro on 8082, bundle pre-built on the host (23.2 MiB), cold
restart after the seed change (a dev build never OTA-fetches, so the phone shows
what Metro serves).

**Verified on glass:**

```
the missions hub          24 rows, EVERY title in full including the 27-character
                          house heading, every frSub French, chip column reading
                          MISSION · OBJECTIFS · EXEMPLES · TABLEAU · CARTES ·
                          OREILLE · PIÈGES · ERREURS · GROUPES · BULLES · ÉCRIT ·
                          MICRO · RÉVISION · BILAN · QUIZ · BADGE
the lesson cover          intro renders whole, past the A2 paywall, no jargon
the resume interstitial   act titles "Five shapes, not four" and "The short one,
                          and where it comes from", both clean. This is the screen
                          a2.15 shipped jargon onto.
s04-grid   THE HERO       ALL FIFTEEN CELLS ON ONE SCREEN, five columns, NO
                          horizontal scroll. Headers broke mid-word in v1 and are
                          clean in v2.
s04-grid detail           the four predicate sentences and BOH · BEL · BEL · BOH ·
                          BEL on one line, which is the Owns made visible, plus a
                          playable row
s07-pairs  THE CONTRAST   three rows, plain form then short form, both term chips
                          in full, every word on one line
s07-pairs detail          « C'est un beau sac » then « C'est un bel arbre ».
                          BOH then BEL. The brief's second layout claim.
```

**A MEASURED LIMIT I DID NOT FIX, said plainly.** In the five-column grid the
`nouveau` row's cells wrap mid-word: `nouve|au`, `nouvell|e`, `nouve|aux`,
`nouvell|es`. `beau` and `vieux` are clean. A five-column cell on a Pixel 6 holds
about six characters and `nouvelles` is nine, so this is physical rather than a
choice: the only fixes are dropping to four columns, which would give up the
brief's layout claim, or shortening a word that is the content. The wrap is
consistent down that row and every cell stays inside its box. **a2.17 lands in
the same theme and should know the number before it reaches for five columns.**

**What I did NOT open**, said plainly: the quiz rounds, the dictée in play, the
scenario turns, the speak practice with the mic, `s14-which`'s trapDrill,
`s17-errors`'s groupDrill, `s13-reading`'s glossary, and the reference sheet.
Their content is asserted host-side and their layouts are house shapes this band
has shipped eleven times; they are unverified on glass. **The sheet is the one I
would open next**: a2.03's device pass found that a five-column table inside a
sheet clips and scrolls horizontally, and this one carries six.

---

## 10. Mutation testing

**29 mutations, 0 caught by nothing, 0 skipped.** The five the brief names are
rows 1 to 5 and all five are caught by all three layers.

**Two mutations found a weakness rather than confirming a strength**, and both are
the same bug in two places:

- **Row 15 was caught by NOTHING that mattered.** "Stop naming a1.14 and a2.03 on
  the plural screen" reported the batch as catching it, and reading the MESSAGE
  rather than the column (a2.14 §7) showed it was the version check. The guard
  itself looped over `PLURAL_UNCHANGED_UNITS` and asked whether the section named
  each entry — **which is comparing the content to itself** (invariants §5),
  because the section renders that constant. Renaming it to 'the earlier lessons'
  passed every layer. All three now assert the literal ids.
- **Row 3 walked past two of three layers.** `INVENTED_FEMININES` was a hand list
  of six phrases and did not include « une belle homme », which is exactly the
  mistake the silent-h screen invites. A hand list of a PRODUCTIVE error is a
  list that will always be one short; it is now derived, three feminine forms
  crossed with seven vowel-initial nouns under both articles.

**And the harness found that the merge layer was thinner than the batch on six
checks** — the jargon walk, the act weights, the third-form column position,
placement, the plural owners and the audio brief. None shipped, because the batch
runs first and two of three layers caught each one. A merge that is thinner than
the batch stops being a check, and it is the layer that runs when somebody
re-merges without re-applying. All six are now in it.

Two mutations had to be REWRITTEN because they proved nothing (a2.14 §8): one
carried a placeholder anchor and reported SKIPPED, and one replaced `a1.17` in a
single string when the section names it twice.

---

## 11. Wiring, ids and counts

```
scripts/data/beau-nouveau-corpus.ts        the single source of truth
scripts/data/beau-nouveau-lesson.ts        24 sections, 6 acts
scripts/data/beau-nouveau-terms.ts         7 terms
scripts/data/beau-nouveau-imported.ts      displayRespell() and the accessors
scripts/data/beau-nouveau-rows.gen.ts      GENERATED, a recorded read
scripts/_a216_manifest.ts                  regenerates it
scripts/_a216_probe.ts  _a216_probe2/3/4   the pre-flight, four passes
scripts/author-beau-nouveau-batch.ts       content:beau-nouveau
scripts/merge-beau-nouveau-into-seed.ts
scripts/_a216_mutate.mjs                   29 mutations
ealch-v2/src/content/a2-16-beau-nouveau.test.ts   38 tests
```

**The id block HELD.** `fr.a2.adjectifs-essentiels` held exactly **33** rows when
a2.16 claimed `.041`, which is a2.03's own figure after its apply, and **51**
after, which is 33 plus its 18 and nothing else. **Zero rows were inside
`.041..080`**, the range a2.03 reserved. `.059..080` left free deliberately; ids
are the SRS key.

`a2.16` is a **LEAF**: no unit at any level declares it as a prerequisite,
measured against all 76 units. Four builds in this band, three answers (a2.13 two
dependents, a2.03 three, a2.14/a2.15/a2.16 none).

---

## 12. What I could not verify

- **The eight screens listed in §9.** Named rather than papered over, and the
  reference sheet is the one most likely to hold a defect.
- **Whether the `nouveau` row's cell wrapping is acceptable to a reader.** It is
  a physical limit at five columns and I did not change the layout for it; that
  is a product judgement rather than a content one.
- **Whether six characters is the right header budget for glyph sets other than
  the four I read.** It is a width and I have four data points.
- **The audio.** Seven briefs are written and `CLIP_MANIFEST` is empty by design,
  so every card falls back to device TTS. `pnpm audio:render` was not run. The
  one-take constraint on both contrast pairs is written into `desc` and pinned in
  all three layers, because it becomes invisible the moment the clip exists.

---

## 13. What a2.17 inherits

- **The theme and its id block.** `fr.a2.adjectifs-essentiels.081..120`, reserved
  in ledger §3 and still empty.
- **The feminine forms it is built on are all live and all respelled**, and three
  of them now agree with their short form byte for byte.
- **`-ment` is taught nowhere here**, and the guard that keeps it out is
  stem-based rather than suffix-based, because **this lesson prints
  `appartement` in its scene and four -ment nouns in its reading passage.** The
  guard caught `exactement` in the reading passage on the first run, which is
  what a suffix guard would have missed among them.
- **The five-column grid budget**, §9. `nouvelles` does not fit a five-column
  cell on a Pixel 6.
- **a2.03's test file was scoped to the whole A2 namespace and is now scoped to
  its own block.** See the ledger amendment: a2.17 lands in that namespace too.
