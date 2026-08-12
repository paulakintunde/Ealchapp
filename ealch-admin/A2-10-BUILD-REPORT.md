# a2.10 build report — Les verbes en -IR

Trail seq 3 of 32. Built 2026-08-11. Applied to Postgres and merged into
`seed.json`; not published, because publishing is not part of a lesson build.

Doctrine §F, plus the three things the brief asked for by name, which are §9, §10
and §11 below.

---

## 1. Identity, and the brief's third consecutive swap

Copied byte for byte from the probe's unit dump, not from the brief:

```
t:      Regular -IR Verbs
sub:    Les verbes en -IR
cando:  Can conjugate regular -ir verbs and hear where the -iss- belongs
seq:    3        -> tag "A2 · LEÇON 03", verified on the device header
prereq: ['a2.01']
lessons: []      -> a FIRST build, probed rather than assumed
```

The brief's identity block gives `title: Les verbes en -IR` and
`sub: the finir model — and the -iss- in the plural`. The title and the sub are
SWAPPED, and the brief's `sub` is in no row of `content_units`. It also carries an
em dash, which is banned in every user-facing string in this product.

**That is three A2 briefs in three.** a2.01 recorded it, a2.09 recorded it, and it
has now happened again. I have amended the ledger's §0 to say so: it should be
treated as certain rather than as a thing each author rediscovers.

---

## 2. What the probe said, and what was imported rather than authored

```
theme verbes              419 published in postgres,  65 in seed
  fr.a2.verbes            151 rows, max .166,  NEXT FREE .167 (gaps .126-.140)
theme verbes-essentiels   535 published in postgres,  25 in seed
```

**Every one of the ten verbs this lesson teaches already existed. Not one was
authored.**

| verb | imported row | respell | action |
|---|---|---|---|
| finir | `fr.sons.verbes-essentiels.037` | fee-NEER | imported |
| choisir | `fr.sons.verbes-essentiels.038` | shwah-ZEER | imported |
| réussir | `fr.sons.verbes-essentiels.112` | ray-ü-SEER | imported |
| réfléchir | `fr.sons.verbes-essentiels.230` | ray-flay-SHEER | imported |
| remplir | `fr.a2.verbes.021` | rahn-PLEER | imported + **respell repaired** |
| grandir | `fr.a2.famille.007` | grahn-DEER | imported + **repaired** + **flashcard added** |
| guérir | `fr.a2.verbes.036` | gay-REER | imported + **flashcard added** |
| obéir | `fr.a2.animaux-domestiques.078` | oh-bay-EER | imported |
| applaudir | `fr.a2.cinema.051` | ah-ploh-DEER | imported |
| ralentir | `fr.a2.transports-quotidiens.043` | rah-lahn-TEER | imported + **repaired** |

Eight of the ten were absent from `seed.json` and are carried through the cut by the
merge, or their cards would have drawn empty.

---

## 3. Every claim in the brief I measured FALSE

Six, and the first one is the reframe.

### 3.1 "The plural grows a syllable" is false for the headline pair

The brief proposes this as the reframe and says of `il finit` / `ils finissent`:
*"one syllable ending"* against *"an extra syllable, clearly audible."*

```
il finit        /il fi.ni/     the verb is TWO syllables
ils finissent   /il fi.nis/    the verb is TWO syllables
```

`finissent` grows a final **/s/**, not a syllable. The syllable claim is true of
`nous finissons` /fi.ni.sɔ̃/ and `vous finissez` /fi.ni.se/ and of nothing else in the
paradigm — including, precisely, the one pair the whole lesson is built on.

A reframe is carried verbatim through nine sections and cannot be false in the
mission where the learner meets it. That is a2.01's own stated reason for rejecting
*"Endings are silent"* (two of its six were audible), and it applies here unchanged.

The pedagogy the brief is reaching for survives completely: what arrives IS a sound,
and the ear does get it. What was wrong was the description of the sound. §4 has the
reframe that replaced it.

### 3.2 The identity block is swapped

§1. Third time.

### 3.3 "author-verbes-batch.ts claims finir and choisir were placed"

Both exist and **neither is in `verbes`**. `finir` is in `verbes-essentiels` and
`rp-travail-etudes`; `choisir` is in `courses`, `marche` and `verbes-essentiels`.
What `verbes` holds is finir SENTENCES — `fr.a2.verbes.003` "Nous finissons nos
devoirs.", `.006` and `.012`. Eight more of the ten also existed, which the brief did
not predict. `pnpm content:verbes` remains a landmine and was not run.

### 3.4 "finissent will meet the validator's false-positive path"

It does not. `hasPlainNasalFor` false-positives on a token ending in vowel + n/m, and
`fee-NEES` contains no n or m at all. The brief pointed at the right hazard and the
wrong word.

The false-positive path is real in this lesson and it lands on **`la semaine`**:
`suh-MEN` matches the checker's token pattern and survives only through the
`[vowel][nm]e` escape hatch in the French spelling. `fr.a2.verbes.204` is asserted
by name in the OPPOSITE direction, so a later author who trusts the checker cannot
"repair" a real /n/ into a nasal that is not there.

The blind spot the lesson actually meets is the other one, the word-internal nasal:
`ahⁿ-SAHⁿBL` for `ensemble`, where the second nasal is followed by `BL` inside the
token and the checker cannot see it. `fr.a2.verbes.196` and `.200` are asserted by
name too.

### 3.5 The non--iss- class is bigger than the brief's list

The brief names seven (`partir, sortir, dormir, servir, venir, tenir, ouvrir`).
`sentir`, `offrir` and `courir` are the same shape and all three already exist as
corpus rows, so a learner meets them. The card names **ten**.

### 3.6 Ledger correction: `seq` is a number

Not the brief's error but the ledger's, and found the same way. §0 said `seq` is
`"1"`, "a STRING, not a number". `jsonb_typeof(body->'seq')` returns `number` for
a2.01, a2.09, a2.10 and a2.11. The ledger was reading `corpus:probe`'s dump, which
stringifies. Nothing depends on it (`String(unit.seq)` is on every path) and the
ledger is amended anyway, because it is stated as a fact somebody might act on.

---

## 4. The reframe: what I chose, what I rejected, and why

**`The plural puts a sound on the end.`**

Rejected, in order of how close they came:

- **`-ir verbs add -iss- in the plural.`** The brief's own rejection and it is right:
  the same fact as a spelling rule, unusable while listening, and silent about the
  ear, which is what the canDo promises.
- **`The plural grows a syllable.`** The brief's preferred candidate. Measurably false
  for `ils finissent`; see §3.1.
- **`You can hear the plural.`** Short and true, and it does not survive `on finit`,
  which means *we* and sounds singular. It also states a capability rather than a
  rule, so there is nothing for the learner to run.

What survived is agnostic about WHICH sound, and that is the point: /s/ for ils and
elles, a whole syllable for nous and vous. It runs in both directions — listening, a
sound at the end means several; speaking, several means put a sound on the end — and
it leaves the singular alone, which is where a2.01's reframe is still working.

Carried verbatim in **nine sections**, ten appearances across the object counting the
`reframe` field. Asserted against explicit constants in the batch, the merge and the
test.

---

## 5. How the Owns got more weight than the paradigm

```
act 1  the lesson that said the opposite   3 missions   s01 s02 s03
act 2  the same machine, six new endings   3 missions   s04 s05 s06
act 3  what the ear gets, and what it does not   7 MISSIONS   s07..s13
act 4  where the family stops              3 missions   s14 s15 s16
act 5  out in the world                    4 missions   s17..s20
act 6  prove it                            4 missions   s21..s24
```

24 missions, top of the 19-24 house range and the same as a2.01 and a2.09.

The Owns act is **seven against the paradigm's three**, and the test asserts
`owns > paradigm * 2` rather than a raw number. The paradigm act is deliberately
thin: a2.01 already taught the method, and re-deriving it here would spend missions
on last week's lesson. What act 2 does is show the six endings once, in the ONE
screen the lesson turns on, and hand over the ten verbs.

Act 3 holds **both `listening` missions**, which is where the canDo's "hear" lives:
8 lines, 8 questions. Beyond that act, the ear carries:

- **6 of 30 quiz questions are `listenChoose`** — a2.09 could justify exactly one and
  said so; this is the only lesson in batch 1 where the format can carry weight.
- **7 of 8 dictée targets** are graded on precisely the distinction the lesson
  teaches (-IS against -IT against -ISSENT is letters all the way down).
- Three of the five quiz rounds are the ear or the singular spelling.

---

## 6. The layout claim, which is the one the brief made a test requirement

`il finit` and `ils finissent` are **rows 3 and 4 of one `tapTable`** (`s05-hear`),
each with its own `say`, so the learner plays one and then the other without leaving
the screen.

That required a deliberate departure. The ledger settles pronoun order as
`je · tu · il · nous · vous · ils`, and scopes it to *"how a paradigm is written in
prose when it is not in a table"*. This table is ordered by **sound**: the three that
give the ear nothing, then the one that answers the third of them, then the two that
carry a whole syllable. In canonical order the two would be rows 3 and 6.

The departure is safe because the canonical nine-pronoun order is one tap away in
`sheet.a2.10.endings`, and both the batch and the test assert that the SHEET has not
also drifted.

The adjacency is checked **by row index**, not by "both strings appear somewhere",
in the batch, in the merge and in the test. On the Pixel all six rows sit above the
fold with room to spare.

One table, one tapTable, then stop, as asked. The `table` at layer `core` is a
`table-in-core` density failure anyway.

---

## 7. How both facts are held at once without confusing the learner

The brief's hardest ask. Four devices, and none of them is "here are two rules".

**1. The contradiction is the opening move, not a footnote.** Mission 3 is
`s03-inverted`, whose first card QUOTES a2.01's reframe verbatim —
*"Four of the six forms sound the same, so the pronoun carries the person."* — and
says the next twenty minutes contradict it. The constant is IMPORTED from
`verbes-er-terms.ts`, so if a2.01 is ever reworded this lesson moves with it rather
than misquoting a lesson the learner finished twenty minutes ago.

**2. The line is a sentence, carried like a second reframe.**
`BOTH_HALVES = 'The singular hides the person. The plural announces itself.'`
It appears in three sections (`s03-inverted`, `s11-both`, `s24-roundup`) and in the
endings sheet, and the test requires at least three. It is deliberately NOT the
reframe: it is a statement about where a boundary falls, not something the learner
runs mid-sentence, and the doctrine is explicit those are different things.

**3. The two halves get separate missions and separate evidence.** The singular is
`s07-onesound` (xl deck, three spellings one sound) and `s12-write` (write what the
recording could not settle); the plural is `s08-grow` and the two ear missions. The
learner is never asked to hold them in one screen except in `s11-both`, whose whole
job is that.

**4. The evidence is in the data, not only in prose.** The singular triple's three
respellings are **one string once the pronoun comes off**, on two different verbs
(`finir` and `remplir`), and the batch and the test assert it as an EQUALITY. That is
a2.01's `.102`/`.105` trick applied to the half of the paradigm where a2.01's fact is
still true.

**And the exception that would otherwise wreck it.** `on` means *we*, takes the `il`
form, and puts NO sound on the end — so the commonest spoken plural in French sounds
singular. A learner running this reframe on a real conversation meets that in the
first minute. It is stated on the third card of `s11-both`, carrying a2.01's
`NOUS_ON` constant verbatim, it is a corpus row (`fr.a2.verbes.205`), it is a
listening question, and it is a quiz question. The test asserts the row still shows
the SHORT form.

---

## 8. Confirmation the contrast clips are briefed as ONE TAKE

Yes, and it is written into `desc` rather than into a comment, because a recording
constraint becomes invisible the moment the clip is delivered.

`rec-a2-10-contrast`, quoted in part:

> IL FINIT AND ILS FINISSENT, ONE CONTINUOUS TAKE, ONE VOICE, RECORDED ADJACENTLY
> AND IN THAT ORDER, WITH NO TEACHING PAUSE BETWEEN THEM. […] The two are one sound
> apart and that sound is a final S, not a syllable […] Do not lengthen the plural,
> do not lean on the ending […] RECORDED APART, IN TWO SESSIONS, THE LEARNER COMPARES
> TWO PERFORMANCES INSTEAD OF TWO FORMS […]

`a2-10-verbes-ir.test.ts` pins four separate substrings of that `desc` (one continuous
take, adjacent, "not a syllable"/"final s", "do not lengthen"/"do not lean"), so
softening it goes red.

Two more recordings carry the same instruction from the other side:

- `rec-a2-10-hidden` — the singular triple, one take, and the three must be
  **INDISTINGUISHABLE**. Do not help, do not let the `t` of `finit` surface. Pinned.
- `rec-a2-10-pairs` — the three number pairs, each pair one take, and in every pair
  the **pronoun must sound identical on both sides**, because it is: `elle`/`elles`
  and `il`/`ils` are one sound. Any difference in the pronoun destroys the pair,
  because the learner will use it instead of the S.

`pnpm audio:render` was NOT run. It spends real ElevenLabs credits and `CLIP_MANIFEST`
is empty by design.

---

## 9. THE CURRICULUM HOLE — say it loudly

**No unit in the curriculum owns `partir`, `sortir`, `dormir`, `servir`, `sentir`,
`ouvrir`, `offrir` or `courir`.**

Measured, not inferred: all **76** curriculum units were read out of `content_units`
and their whole bodies searched for each of those eight verbs. Zero hits. The only
unit whose body contains the string `-ir` or `iss` at all is `a2.10` itself, which
teaches the regular class and excludes them by name. `venir` and `tenir` do have a
home — `a2.02`, seq 5. The other eight have none, at any level.

Why it is worse than a gap in a list:

- **They are more frequent than what IS taught.** `partir` has 8 corpus rows, `dormir`
  6, `sortir` 4, `courir` 4. `finir`, the headline verb of this lesson, has 2.
- **A learner already meets them.** All eight exist as published corpus rows and are
  served by the flashcard hub today, as bare infinitives with no paradigm anywhere.
- **This lesson actively creates the risk.** A learner who leaves a2.10 with a working
  rule and applies it to `partir` produces `ils partissent`, which no French speaker
  says, and nothing else in the product will stop them.

a2.10 does the most a lesson can do: it NAMES all ten on one card (`s16-notmine`),
says they follow a different model, points `venir`/`tenir` at `a2.02` by unit id, and
conjugates none of them anywhere. It cannot teach them — they are not its verbs and
its own claim would collapse if it tried.

**Filling this needs a unit, and that is a curriculum decision, not an author's.**
It is recorded in the ledger under §5 as well as here.

---

## 10. The ear question I did not write, and enforced instead of reporting

The brief: *"Do not write an ear question about which singular form is correct: all
three sound identical and the question would certify a bug. Say so in your report."*

Saying so is not enough, so it is a guard. `HOMOPHONE_FORMS` holds seven groups
(`finis/finit`, `choisis/choisit`, `réussis/réussit`, `remplis/remplit`,
`grandis/grandit`, `guéris/guérit`, `obéis/obéit`) and both the batch and the test
refuse any `listenChoose` whose options **differ only by a member of one group**.

The predicate matters. Checking "two options mention homophones" would fire on round
5's legitimate question, which offers `On finit tôt.` / `Nous finissons tôt.` /
`Il finit tôt.` / `Je finis tôt.` — three of those contain a member of the same group
and they ARE separable, because the pronouns are audibly different and that is what
the learner is being asked to catch. What is refused is the pair where substituting
one group member for another turns option A into option B: `Il finis tôt.` against
`Il finit tôt.`, or a bare `finis` against `finit`.

Mutation-tested: injecting exactly that pair into round 3 goes red.

Where the singular triple IS tested: **typed**. Nine `typeIn` and five `errorSpot`
across the quiz, of which the test requires at least four to turn on the triple, plus
five of the eight dictée targets. Typing and the dictée are the only surfaces in this
app that can score it.

---

## 11. My test, and the ten mutations it survived

`ealch-v2/src/content/a2-10-verbes-ir.test.ts` — **97 tests**, modelled on
`a2-09-er-exceptions.test.ts`. Everything runs the REAL app function
(`validateLesson`, `validateDensity`, `hasPlainNasalFor`, `endingPopulation`,
`dicteeMode`, `matchesAccept`, `normalizeFr`, `segmentSentence`, `glossKeys`,
`quizQuestions`, `canonicalJson`); nothing is reimplemented.

Everything the brief asked for by name is asserted, and each is named rather than
counted:

- the contrast is two **adjacent rows by index** of one tapTable, both with their own
  audio, and their respellings differ by exactly the string `fee-nee` → `fee-nees`
- a listening item that requires distinguishing them, asserted **by the item**
  (the question whose stem plays `« eel fee-NEE »` must answer "One"; the one that
  plays `« eel fee-NEES »` must answer "Several") rather than by a question count
- the non--iss- class is named in full and **no form reaches a production surface**,
  with the over-generalised forms banned everywhere; scoped to production surfaces so
  the hand-over card can still talk about the class
- the singular triple is one string once the pronoun comes off, on both verbs, with
  the a2.01 back-reference present in more than one section and a2.01's reframe
  quoted verbatim
- **each of the ten verbs by name**, not `length === 10`
- `hasPlainNasalFor` imported, plus three respellings asserted by name in BOTH
  directions and the blind spot re-confirmed, so a "fix" to the checker goes red

### The mutations, all confirmed red

| mutation | assertion that fired |
|---|---|
| separate the contrast (rows 3 and 6) | THE CONTRAST IS TWO ADJACENT ROWS OF ONE tapTable |
| conjugate partir (`ils partent` into a quiz option) | NOT ONE FORM OF THE CLASS REACHES A PRODUCTION SURFACE |
| drop the a2.01 back-reference | a2.01's OWN REFRAME IS QUOTED VERBATIM |
| break the singular triple (`fee-NEET`) | THE SINGULAR TRIPLES ARE ONE STRING… |
| drop a verb from the groupDrill | every itemId is on a screen, not merely resolvable |
| "repair" `suh-MEN` into `suh-MEⁿ` | and a real n is not "repaired" into a nasal that is not there |
| strip `ralentir` from every string | ALL TEN VERBS ARE NAMED INDIVIDUALLY |
| print `ils partissent` on the boundary card | and no over-generalised form appears ANYWHERE |
| an ear question between `Il finis` and `Il finit` | NO EAR QUESTION ASKS BETWEEN TWO FORMS THAT ARE ONE SOUND |
| scatter the nous/on statement into a second section | a2.01's nous/on statement appears VERBATIM, in exactly one section |

Each was applied to the seed, run, confirmed red, and undone by re-running the merge.
`git checkout seed.json` was not used at any point.

The batch and the merge carry the same guards independently: the contrast-separation
and partir mutations are both refused by `author-verbes-ir-batch.ts --dry-run` before
it opens a transaction, and by the merge before it writes.

---

## 12. Corpus, and the form rule

**25 authored, `fr.a2.verbes.181` .. `.205`. 10 imported. 0 infinitives authored.**

| family | n | what it is |
|---|---|---|
| paradigm | 6 | the `finir` frame, all six persons, all eight dictée-legal |
| pair | 6 | three singular/plural pairs on choisir, réussir, grandir |
| hidden | 3 | the singular triple on `remplir` |
| apply | 10 | the ten verbs used by a person, across all seven persons |

Every row is `kind: 'sentence'`, `level: 'a2'`, `theme: 'verbes'`, no `gender`, ≤ 14
words, simple present with an explicit subject. `endingPopulation` returns **zero**
joiners over the authored AND carried rows, so none of a1.03's twenty printed figures
moves — proved through the real function in the batch and in the merge.

**Why nothing could be reused for the paradigm.** a2.01 reused `fr.a2.verbes.001` as
the `je` row of its frame. Nothing here fits: Postgres holds 9 `nous choisissons`
sentences, 6 `elle finit`, 4 `nous finissons`, 4 `je choisis`, 3 `on finit`, 1 each of
`il finit` and `ils finissent`, and ZERO for `vous finissez`, `elles finissent`,
`vous choisissez`, `ils choisissent`, `ils réussissent`, `nous réfléchissons`,
`ils grandissent`, `il grandit`, `tu remplis`, `vous remplissez`, `il obéit` and
`ils obéissent`. Every existing one carries its own object, so comparing two of them
compares their subject matter as well as their number.

**Why the frame word is `tôt`.** Measured, not chosen. Every paradigm row has to be a
dictée target because the singular spelling is half the lesson, and `dicteeMode()`
switches to WORD tiles above 16 letters, which hands the whole word over pre-spelled.
`Ils finissent le travail.` is 21 letters and switches. `Ils finissent tôt.` is 15 and
does not. All eight targets spell from LETTERS, proved through the real function.

**What the dictée can and cannot grade**, run through the real `normalizeFr` in both
directions rather than written in a comment: **7 of 8** are graded on exactly what the
lesson teaches. The eighth turns on the circumflex of `tôt`, which `normalizeFr` folds
away. That is the inverse of a2.09, whose subject was diacritics and three of whose
nine targets could not be scored.

**Three respellings repaired**, every `from` flagged by the real `hasPlainNasalFor`
and every `to` clean: `remplir` `rahn-PLEER`→`rahⁿ-PLEER`, `grandir`
`grahn-DEER`→`grahⁿ-DEER`, `ralentir` `rah-lahn-TEER`→`rah-lahⁿ-TEER`. Six further
rows carrying the same broken value in themes this lesson does not display are
recorded in `NOT_REPAIRED` and left alone (invariants §9).

**Two drill additions.** `grandir` and `guérir` arrived with `{voiceflash, review}`
and no `flashcard`, and all ten are released into the hub, so a released row without
it is a card the hub never serves.

---

## 13. Lesson, quiz and the rest of §F

24 missions, 6 acts, act structure above. 35 items, all released by a tranche exactly
once and **all 35 drawn by a section that renders the row** — checked with a1.08's
43-orphan failure in mind, and a2.01's nine.

Quiz: **5 rounds, 30 questions, every one with a `why` and a `ref` naming a live
section.** Format mix:

```
typeIn 9 · mcq 8 · listenChoose 6 · errorSpot 5 · tapSilent 1 · speak 1
```

8/30 mcq, well under the half cap. Answer slots `0:4 1:4 2:3 3:3` over the 14 closed
questions; in-mission slots `0:6 1:6 2:5 3:2` over 19, with no two consecutive
questions in a section sharing a slot, because `MissionRich` does not shuffle. Every
free-text question accepts the answer it displays, through the real `matchesAccept`.
Every gap question carries a naming form and a subject that fixes the number.

Five error triggers, five drills, five retests, and each round leads on a DIFFERENT
trigger, so all five drills are reachable through `drillForRound`.

Two reference sheets, both linked and both holding only `teach` and `table`.

---

## 14. Gates

```
baseline, measured before starting   tests 2773   pass 2773   fail 0
after                                tests 2870   pass 2870   fail 0   (+97)
npx tsc --noEmit   ealch-v2          clean
npx tsc --noEmit   ealch-admin       clean
pnpm content:parity                  exit 0, one PRE-EXISTING divergence
                                     (b2.01.l1 database-only). Not this build's.
```

`fr.a2.verbes` row count **151 before, 176 after** — 151 plus this lesson's 25 and
nothing else, so nobody had landed inside the `.181..220` block. The block held and
`.206..220` is a deliberate hole.

`seed.json` diffed structurally against `HEAD`: version unchanged at 25, 34 items
added (25 authored + 9 carried), **1 item changed** (`fr.a2.famille.007`, which was
already in the seed and took the repair and the drill), 0 removed, 1 lesson added,
0 other lessons touched, 1 unit changed.

`seed.version` was not touched. It is the OTA snapshot number.

### One self-inflicted failure, recorded because a2.01 recorded the same one

v1 was applied to Postgres and then caught by `sons-alphabet.test.ts`: the word
"honest" on the `s16-notmine` card, banned across the whole seed. The batch's version
guard then correctly refused to overwrite v1 with a DIFFERENT v1, so the counter moved
to **v2** rather than the guard being relaxed. a2.01 hit this exact sequence at its
own v3.

---

## 15. Device verification — both halves, on a Pixel 6

**Host half.** Metro on 8082, bundle pre-built on the host before the phone was
pointed at it (23 MB, HTTP 200). The SERVED bundle carries all 14 of this lesson's new
strings (`Ils finissent tôt.`, the reframe, `BOTH_HALVES`, a2.01's quoted reframe,
`eel fee-NEES`, `rahⁿ-PLEER`, `ahⁿ-SAHⁿBL`, `suh-MEN`, `s05-hear`, `s16-notmine`) and
a renderer `case` for all 18 section types the lesson uses.

**Device half, verified by screenshot.** The paywall did NOT appear: the phone already
holds the entitlement a2.01 granted, so no database on it was touched. I have noted
that in the ledger so nobody in batch 2 grants it again, and so nobody assumes they
will be stopped by it.

| screen | result |
|---|---|
| unit overview | eyebrow `A2 · LEÇON 03`, glyph `Ir`, title, sub, both intros, 24 missions, "Prerequisite: Regular -ER Verbs" |
| mission list | all 24 with correct titles, frSubs and mechanic labels; 09 and 10 both `OREILLE`, 05 `TABLEAU`, 18 `ÉCRIT` |
| **mission 5, the contrast** | **all six rows above the fold, `il finit / nothing` and `ils finissent / S` adjacent, each with its own chevron**; three term chips all drawn; `ee-SOHⁿ` superscript renders correctly |
| mission 9, listening | four lines each with a play control, four questions, two term chips, fits |
| mission 2, goals | four goals, fits |
| mission 1, the scene | setting card, all beats, the choice with both options, the "breaks" follow-up |
| **the break card** | **heading one line, both glosses one line, body four lines, coach line, and Continue FULLY ABOVE THE FOLD on first paint** |

The break card is the finding worth recording. a2.01 needed **three** device passes on
its own, each one finding something no test could see, and its measured budget went
into the ledger: heading ≤ ~13 characters, body 24-30 words, coach ≤ 9 words, reading
glosses ≤ ~24 characters. I authored to those figures from the start and the card was
right on the first pass. The budget is now pinned by the test as well as by the ledger.

**Not verified on device:** the dictée keyboard, the mic-scored speak mission, and the
quiz rounds end to end. All three are input surfaces that need a real learner session
rather than `input tap`, and I did not fake one. Their content is asserted by the
suite through the real scoring functions; what a device pass would add is whether the
tile bank and the mic behave, and that gap is named rather than papered over.

---

## 16. Anything I could not verify, plainly

- **The dictée, the mic and the quiz were not walked end to end on the phone.** §15.
- **No audio exists.** `CLIP_MANIFEST` is empty by design and every card falls back to
  device TTS, so the one-take contrast constraint in §8 is a brief to the studio and
  not a thing I could hear. It is the single most important instruction in the lesson
  and it is currently unverifiable by anybody, including the person who will deliver
  the clip. The test pins the words; nothing can pin the take.
- **`fr.a2.verbes.021` (`remplir`) and `fr.a2.famille.007` (`grandir`) are shared
  rows.** This build repaired their respellings and added a `flashcard` drill to two
  rows that belong to other themes' populations. Nothing in the suite went red and the
  merge proves 8,614 rows it does not own came out byte-identical, but the two it does
  touch are touched.
- **`applaudir` carries two competing respellings** in Postgres (`ah-ploh-DEER` and
  `a-ploh-DEER`), and `choisir`, `partir`, `sortir` and `dormir` each carry two as
  well. Invariants §9 says a variant is not a violation, so none was repaired. They
  are still divergences somebody will eventually want to settle.
- **The eight homeless -IR verbs.** §9. Not fixable here.
