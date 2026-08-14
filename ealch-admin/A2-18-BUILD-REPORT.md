# a2.18 « Prépositions de temps », seq 14 — build report

Shipped 2026-08-14 as `a2.18.l1` **v3** to Postgres and to `seed.json`. Not
published.

```
24 sections · 6 acts · 30 questions · 2 stepped trapDrills · 1 reference sheet
29 authored rows  fr.a2.prepositions-essentielles.169 .. .197
12 imported rows  out of 5 themes, 0 of them gendered
41 itemIds        suite 3601 -> 3644 (+43)
```

---

## 1. The sequencing decision, and the recommendation

The brief opens on a real problem: the canDo promises **"how long ago"**, which
needs the passé composé, which is `a2.05` at seq 16.

**Option 1 is taken.** Everything in the lesson is anchored to the present,
`il y a` for "ago" is receptive only, and exactly ONE authored row holds a
compound tense. It is shown on one screen, marked as receptive on its own card,
and it is in no dictée, no drill, no speak list and no quiz answer. All three
layers assert that.

**The recommendation on option 3 is: KEEP a2.18 AT seq 14 and change the canDo
instead.**

Moving the unit after `a2.05` buys one row of five and costs four:

- **`dans` pairs with the futur proche, which is `a2.19` at seq 15 — ONE LESSON
  AFTER this one.** At seq 17 this lesson would leave a2.19 either teaching
  `dans` itself or using it untaught. That is the strongest argument and the
  brief does not make it.
- **`depuis` needs no past tense at all.** It is the Owns, it is five of the
  twenty-four missions, and it is a present-tense lesson end to end. Deferring
  it two lessons defers the biggest interference point at this level for no
  gain.
- **`a2.05` is easier with `il y a` met than without it.** « il y a trois
  jours » is the commonest way in the language to anchor a passé composé; a2.05
  can hand the learner a tense for a phrase they already recognise rather than
  two new things at once.

What is genuinely wrong is the canDo, which was written without checking what
tense the learner would have:

```
was       Can say how long, how long ago and when with the right time preposition
now       Can say how long something has been going, how long it took and when it
          starts, with the right time preposition
```

**APPLIED 2026-08-14, after the build and on Paul's instruction.** One third of
the original was not producible at this trail position. The lesson was built
against the original and needed no change: it already taught `il y a` receptively
and named a2.05.

Three things the reword turned up that are worth more than the reword:

- **`content:spine` does not own a2.18.** `update-spine.ts` covers 43 older
  units and lists a2.18 among 33 it leaves alone, naming
  `author-full-curriculum-spine.ts` as the owner. A build that ran
  `content:spine` and saw it succeed would conclude the edit had landed.
- **The spine's own dry run cannot confirm a canDo change.** Its summary counts
  created / resequenced / retitled; with the reword staged it still printed
  `0 created · 0 resequenced · 0 retitled`. What confirms it is
  `spine-drift.test.ts`, which compares canDo spine-against-SEED.
- **`CANDO_OVERCLAIM.shipped` read `UNIT.canDo`**, so the record of the wrong
  wording would have become a second copy of the replacement at the exact moment
  it started to matter. It is now a literal, `wasShipped`, with an `applied`
  flag beside it.

---

## 2. THE FIND: the corpus published four fifths of the grid, side by side

Corrections §3 is the most reliable prediction in that file — "the corpus has
forms and no minimal pairs, budget for authoring your whole paradigm in one
frame" — and it is **wrong here**:

```
fr.sons.jours-et-mois.080   dans une heure      DAHN ZÜN UHR
fr.sons.jours-et-mois.081   il y a une heure    EEL EE AH ÜN UHR
fr.sons.jours-et-mois.082   depuis une heure    duh-PWEE ZÜN UHR
fr.sons.jours-et-mois.083   pendant une heure   pahn-DAHN TÜN UHR
                            en une heure        DOES NOT EXIST
```

Four consecutive published phrase cards, four prepositions, one duration, all
respelled. Somebody wrote this lesson's paradigm years ago for a pronunciation
theme. **The fifth row — `en`, the one whose meaning is not "when" but "how
long it took" — was never written, and authoring exactly that row is a fair
description of what this build added to the corpus.**

The manifest generator re-runs the check on every regeneration, so the day
somebody edits one of the four the build fails.

---

## 3. Every claim in the brief measured false. Ten of them.

**1. "temps-et-frequence ... is almost certainly your home."** No. That theme is
about FREQUENCY and the CLOCK, which is a1.08's, a1.09's and a1.12's subject:
« D'habitude, l'équipe se réunit à dix heures », « Elle change souvent son
emploi du temps ». The home is `prepositions-essentielles`, and the evidence is
that **the a2 half of that namespace opens with `durant`** — a time preposition,
`fr.a2.prepositions-essentielles.001` — and already holds eleven `depuis` and
ten `pendant` sentences. a2.04 lands there one seq earlier, so the two halves of
the preposition arc share a deck.

**2. "il y a 0 rows ... it is a PHRASE, not a headword."** Half right. `il y a`
bare is absent. « il y a une heure » is a PUBLISHED PHRASE CARD with a
respelling, and it is the "ago" sense. a2.15 §13's rule for a third time:
**absent is not the same as nowhere.** The respelling was read off, not invented,
and the phrase reaches a card by import.

**3. "the only distinguisher is what follows: a noun means existence, a time
expression means ago."** Not sufficient, and the counterexample is published:
`fr.a1.jours-et-mois.090`, « En mai, il y a plusieurs jours fériés en France »,
is a TIME NOUN behind the phrase and it means "there ARE". What separates them
is whether the measurement is FINISHED. The lesson teaches *"A measurement and
then a full stop means ago. A time word still being described is a thing."* and
the manifest re-checks that the counterexample still reads as quoted.

**4. "Whether a2.02 shipped the term ... UNVERIFIED."** It did.
`WHAT_FOLLOWS = 'what comes next decides'` and `WHAT_FOLLOWS_UNIT = 'a2.02'` are
exported from `data/aller-venir-terms.ts` with a comment naming a2.18, a2.19 and
a2.15 as the three that will quote it. This file imports both rather than
retyping either, and the merge and the test assert the LITERAL — mutation found
that asserting the imported constant compares the content to itself.

**5. "depuis + present is the single biggest interference point."** The corpus
agrees and the margin is measured: **of 560 published `depuis` sentences 31 sit
beside an avoir past; of 447 `pendant` sentences 97 do.** Pendant is 3.9 times
likelier to sit beside a compound tense. The batch refuses anything under 2x.

**6. "pendant ⚠ TWO nasals, one invisible."** Two nasals and **the checker sees
BOTH.** `pahn-DAHN`, `pahⁿ-DAHN` and `pahn-DAHⁿ` are all flagged; only
`pahⁿ-DAHⁿ` passes. Corrections §14.1's `lentement` hides its first nasal
because a **`t` follows it inside the token**; in `pahn-DAHN` a HYPHEN follows,
and a hyphen is not a letter. **The split is not by how many nasals a row holds;
it is by whether a LETTER follows the n inside the token.** See §5.

**7. "en 1 row [AHN] ⚠ nasal."** True, and its stored gloss is « some, of it »,
which is the PRONOUN `en` — neither this lesson's sense nor a2.04's. The row is
imported for the word and its repaired respelling and the card replaces the
gloss.

**8. "Restrict to present-anchored uses ... il y a becomes receptive-only."**
Taken, and it costs less than the brief expects: four of the five are fully
producible with the present at seq 14, all four with published evidence.

**9. "pour as a duration (je pars pour deux semaines)."** **The corpus has
eleven rows and not one of them is that sentence.** Every published `pour` plus
a duration attaches to a PLAN: « Mon visa est valide pour six mois », « Nous
avons loué ce logement pour deux ans ». Against depuis 560, pendant 447 and dans
96 it is a rounding error, and it does not compete with `pendant` in the shape a
learner produces. See §4.

**10. "Whether a1.12 already teaches any duration expression." UNVERIFIED.** It
teaches none: zero `depuis`, zero `pendant`, zero `il y a` across its whole
shipped body. What it DOES own, in its own `grammarIntroduced`, is « à plus a
time, marking when something happens ». So `à huit heures` is a1.12's and `en
mai` is a1.09's, and **this lesson's "when" is the one measured FROM NOW** —
which is the line the goals screen opens on.

---

## 4. The `pour` decision

**Not one of the five. Named exactly once, in a `teach` block on the reference
sheet, and taught nowhere.** In no card, no drill, no tranche and no quiz
question. The guard COUNTS the shape across every learner surface and requires
exactly one, so dropping it and promoting it both fail.

The reason is the measurement in §3.9 plus the shape of the eleven rows: they
attach a length to a plan rather than to an action, so `pour` does not compete
with `pendant` in what a learner produces. A sixth row would also have cost the
grid its three-column budget.

**Effect on how the sub reads:** none. « Prépositions de temps » does not
enumerate, and the canDo names three jobs which the five cover. A learner who
meets « valide pour six mois » in the wild has the one line in the sheet.

---

## 5. `hasPlainNasalFor`: the split is by LETTER-AFTER-N, not by nasal count

Corrections §6 splits the repair table into VISIBLE and INVISIBLE; a2.17 §2
sharpened that to per-NASAL rather than per-ROW. **This build sharpens it once
more, and the predictor is simpler than either:**

> **A nasal is invisible to the checker when a LETTER follows the n or m inside
> the token. A hyphen, a space or the end of the string leaves it visible.**

```
lentement    lahnt-MAHN    first nasal INVISIBLE   `t` follows the n
pendant      pahn-DAHN     both nasals VISIBLE     a hyphen follows the first
```

Two nasals in one row is not the predictor. `pendant` holds two and the checker
reports the row until BOTH are repaired, so the minimal repair converges on the
right value and a half-repair still fails. All five of this build's repairs are
**visible and minimal**, which is a first in this band, and the batch asserts
`RESPELL_REPAIRS_INVISIBLE.length === 0` so the claim can fail.

### The repairs

```
fr.sons.mots-essentiels.028  pendant           pahn-DAHN        -> pahⁿ-DAHⁿ
fr.sons.mots-essentiels.088  en                AHN              -> AHⁿ
fr.sons.jours-et-mois.080    dans une heure    DAHN ZÜN UHR     -> DAHⁿ ZÜN UHR
fr.sons.jours-et-mois.083    pendant une heure pahn-DAHN TÜN UHR-> pahⁿ-DAHⁿ TÜN UHR
fr.sons.questions.040        depuis quand ?    duh-PWEE KAHN    -> duh-PWEE KAHⁿ
```

**Every value was READ OFF a published row.** SEVEN published sentences already
hold `pahⁿ-DAHⁿ` (`fr.sons.nasales.030 .039 .042 .051 .052 .054 .059`) and the
HEADWORD was the outlier — a2.17 §3's finding in a second subject.

`fr.a1.prepositions-essentielles.093` « Il pleut pendant la nuit. » had NO
respelling and got one supplied: it is the only published sentence in this
lesson's own theme putting `pendant` with the PRESENT tense.

### a2.04's `même` false positive is not about `même`

a2.04 measured that `hasPlainNasal`'s first branch has no rescue path and listed
five nouns it expected to bite next: `même`, `comme`, `pomme`, `homme`, `femme`.
**`problème` is not on that list and is the same shape.**

```
proh-BLEHM   FLAGGED     branch 1, no rescue
proh-BLEM    clean       branch 2, rescued by the `ème` in the French
```

Seven published rows split four to three. **The predictor is the SHAPE — a real
/m/ or /n/ after a two-letter house vowel, so every word ending `-ème`, `-ême`,
`-ome`, `-ame`, `-aine` — and not the list.** This build ships `proh-BLEM`, read
off `fr.a2.conflits-reconciliation.090`, repairs nothing, and asserts the false
positive as a negative in all three layers.

### And the decision that cost real content

`depuis` is respelled two ways in the corpus: **`duh-PWEE` on 5 rows including
the headword, `duh-PÜEE` on 9, all of them SENTENCES.** Neither is flagged and
neither breaks a rule, so invariants §9 says repair nothing. But this lesson
prints the word on more screens than any other, and two spellings inside one
lesson teach a difference that is not there.

**Decided: one spelling per word, and it is the headword's. This cost nine
published sentences**, several of them excellent depuis-plus-present evidence
with respellings already on them — `fr.sons.nasales.037` « Ma tante attend le
tramway depuis longtemps. » is the best of them. They are in
`READ_NOT_IMPORTED` with that as the reason.

The same decision on `il y a` cost `fr.sons.alphabet.414` « Il y a deux s dans
mon nom. », which is the best "there is" card in the corpus and spells the three
words `EEL EE A` where `.081` spells them `EEL EE AH`.

---

## 6. What the mutation harness found

**37 mutations, 0 caught by nothing, 0 skipped.** The four the brief names by
name are rows 1 to 4 and all four are caught by all three layers.

**SIX found a weakness rather than confirming a strength**, which is above the
band's measured rate of one to two:

1. **The merge compared the content to its own constant, three times over.**
   Changing a grid cell in the corpus changed both sides of the merge's
   `GRID.forEach` loop, so three separate cell mutations went through it. Fixed
   by writing the five rows out as LITERALS in the merge, which is a2.16 §3 in a
   layer that already knew about a2.16 §3.
2. **Same defect on a2.02's term.** `hasPhrase(learnerText, WHAT_FOLLOWS)` reads
   the imported constant, so paraphrasing it mutated both sides. Fixed with a
   literal, plus an assertion that a2.02 still says what this lesson was written
   against.
3. **Nothing anywhere guarded ONE SPELLING of `il y a`.** Both published values
   are clean through the shared checker and a variant is not a violation, so no
   guard in this band had a reason to compare two respellings of one phrase.
   Added to all three layers.
4. **The deferral to a2.05 was guarded only by "is a2.05 named somewhere"**,
   which the grid row satisfies on its own. Gutting the deferral sentence went
   through the merge and the test. Now asserted by its own wording, in full.
5. **`POUR_TIME_SHAPE` counted, and the count was the guard** — that one worked,
   and the mutation that promoted `pour` to a sixth word revealed that the
   original mutation text was the thing at fault, not the shape.
6. **The `il y a` respelling guard, added in this session to fix (3), had (1)'s
   defect** — it compared `IL_Y_A_RESPELL` against content built from
   `IL_Y_A_RESPELL`. Caught by the very next mutation run and fixed with a
   literal.

### Two mutations the merge still cannot catch, and both are inherent

- **Rewording the reframe in one place.** Under-powered mutation rather than a
  hole: the scene carries it in `closing.text` AND in the break card's `coach`,
  so changing one leaves six sections carrying it. a2.14 §8: one anchor is often
  not enough.
- **Authoring a second copy of a sentence already in the theme.** The batch
  catches it against Postgres; the merge sees only the SEED CUT, and
  `fr.a2.prepositions-essentielles.006` is not in it. That is a real limit of
  the merge layer rather than a fixable gap: it can only ever check the quarter
  of the database it holds.

---

## 7. THE DEVICE PASS FOUND ONE DEFECT, AND IT IS THE KIND NO HOST GATE SEES

**A stepped trapDrill's `cards` step was labelled « Three cards » and held
FOUR.**

The card set went from three to four during the build, when an English gloss
came out of a card's `fr` — the audio step plays that field through a French
voice, so a card cannot use it for English. The step LABEL stayed behind. The
pager draws **one dot per card directly under the label**, so the screen read
`THREE CARDS` over four dots.

Nothing in `schema.ts`, `validateDensity`, `lesson-contract.test.ts` or any
guard in this band compares a step label with the array it labels. **The batch,
the merge and the test now do, and the `say` line is checked with it because it
counts them too.** v2 → v3, and re-verified on the phone: `FOUR CARDS` over four
dots.

### What was verified, by route

Pixel 6, USB, dev client against Metro on 8082, `adb` deep link
`ealch://missions?key=a2.18.l1`.

```
the missions list      all 24 titles and French subs, one line each, no clipping
mission 3, the grid    FIVE ROWS, THREE COLUMNS, every cell on one line, whole
                       grid on one screen with room to spare, three term chips
                       all visible
the reference sheet    BOTH TABLES THREE COLUMNS, no clipping, no horizontal
                       scroll; the teach blocks below read whole
mission 7, the trap    stepped: MISSION 7.1 then 7.2, red eyebrow per step,
                       rule card, four cards with four dots
mission 14, the trap   stepped: MISSION 14.2, FOUR CARDS over four dots
the resume interstitial act milestones render and swallow the first tap as
                       documented
```

**What was NOT verified:** the audio steps play device TTS because
`CLIP_MANIFEST` is empty by design, so the takes briefed in `audio.recorded`
are unheard and the recording briefs are unproven. The quiz was not walked end
to end. The dictée was not typed into.

---

## 8. The corpus

```
authored   29 rows   fr.a2.prepositions-essentielles.169 .. .197
imported   12 rows   5 themes
headwords   0 authored          corrections §2 holds for the eleventh build
gendered    0 authored, 0 imported
```

`fr.a2.prepositions-essentielles` held **153** rows before this build and holds
**182** after, which is 153 plus exactly 29. The block was `.169..208` and
`.198..208` is the unused tail; ids are the SRS key and it is not backfilled.
**The next lesson writing into this namespace opens at `.209`.**

### a1.03's ending population

**Unchanged at 1890, measured off the SEED as well as off Postgres.** a2.04's
ledger §0 is the most expensive thing this band has found and it applies from
the other side here: the manifest generator REFUSES a gendered row outright, so
there is nothing for the carry to add. The merge measures it anyway, because a
claim nobody measures is a claim that stops being true quietly.

### The dictée, and what corrections §4 cost this lesson

**Seven targets, five of them bare phrases.** A duration alone costs twelve to
fifteen letters, so the shortest complete sentence this lesson can build round
one is « Il pleut depuis hier. » at SEVENTEEN — over the sixteen-letter LETTERS
ceiling. Every sentence in the lesson spells in WORD mode, where each real word
is handed over pre-spelled.

The two that DO fit are **the trap pair**, « Il y a un problème. » at 14 and
« Il y a deux jours. » at 13, because their durations are two words rather than
three. They are the only two sentences in the lesson the dictée can test, and
they are the two whose first three words are identical.

One row lost its drill to this: « pendant deux heures » is SEVENTEEN letters and
« depuis deux heures » is sixteen. **One letter decides which half of the pair
the dictée can test.**

---

## 9. The lesson

```
act 1  The question she asked        3   scene · goals · GRID
act 2  Depuis keeps the present      5   THE OWNS
act 3  Still going, or finished      4
act 4  Two points and a length       5
act 5  Out loud                      5
act 6  Prove it                      3
```

**The Owns got FIVE missions and the paradigm got ONE.** Doctrine §B.5 asks for
the Owns to outweigh the paradigm; the paradigm here is a single tapTable,
because four fifths of it was already published. Nineteen of the twenty-four
sections name `depuis`.

**The reframe:** *If it is still happening, French keeps it in the present.*
Eleven words, nine uses across six sections. It is the brief's own candidate.
Rejected, with reasons in `REFRAME_REJECTED`: "depuis means since or for" (the
translation that causes the error), "French keeps the verb in the present far
longer than English does" (true, covers `dans` too, and instructs nothing),
"The clock decides the tense, not the English" (false about `pendant` and `en`),
and "Still going, still present" (the compression takes the instruction out).

The reframe makes ONE claim and does not claim its converse. `dans` is the case
that would break it if it did — « je pars dans dix minutes » is a present about
something that has not started — and the lesson handles it separately and says
so: **two of the five put the verb in the present, for two different reasons.**

**The quiz:** 30 questions, 14 mcq, 9 typeIn, 6 errorSpot, 1 listenChoose. Five
rounds, each leading on a different trigger, all five drills reachable.

The ONE ear question is the trap pair, which differs in every syllable after the
first three words. `NO_EAR_QUESTION` holds five pairs that may not be offered,
and the one the brief does not name is **`dans une heure` against `en une
heure`: both pull an n across into the vowel, so at speed they differ by one
consonant.**

---

## 10. What a2.05 and a2.19 inherit

**a2.05.** `il y a` for "ago" is met here and produced there. 33 published
sentences use it that way, nearly all beside a past tense, and it is the
commonest way in the language to anchor one. The deferral is on a learner
surface in full — *"Il y a for 'ago' wants a past tense, and you do not have one
yet. It arrives in a2.05, and this is the phrase it will arrive holding."* — and
the merge asserts both halves of that sentence. **a2.05 should close the loop by
naming a2.18.**

One authored row holds a passé composé and is flagged for a2.05 in the corpus:
`fr.a2.prepositions-essentielles.174`, « J'ai commencé il y a trois jours. »

**a2.19.** `dans` is taught here with the present tense, which is correct on its
own. The verb-in-front version is a2.19's and this lesson names it. **a2.19
should name a2.18 back.**

**a2.04 kept its side of the bargain**, verified against the shipped lesson: its
`TIME_SHAPE` guard refuses a number behind `en` or `dans` on any of its
surfaces, and it names the deferral on a card. This lesson's `PLACE_SHAPE` is
the mirror.

---

## 11. Baseline

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3601   pass 3601   fail 0     measured 2026-08-14, before a2.18
  tests 3644   pass 3644   fail 0     after (+43)
a1-03-genre.test.ts   35 pass before, 35 pass after; ending population 1890 both
                      ways, measured off the seed
npx tsc --noEmit      0 in ealch-v2 AND 0 in ealch-admin
seed.json             version 37, 9047 items, 55 lessons, 75 units (before)
                      version 37, 9081 items, 56 lessons, 75 units (after,
                        NOT published; the merge left the version alone)
pnpm content:parity   ONE pre-existing divergence (b2.01.l1, database-only,
                        in_review). Nothing in the seed is at risk from a publish.
mutation harness      37 mutations, 0 caught by nothing, 0 skipped, SIX finding a
                        weakness rather than confirming a strength
```

**`ealch-admin` now typechecks at ZERO**, where invariants §6 records five
pre-existing errors. Somebody cleared them between a2.04 and this build; four
errors this build introduced were fixed rather than added to the pile.

`a2.18` is a **LEAF**: no unit declares it as a prerequisite. Reported by the
batch and not fatal.
