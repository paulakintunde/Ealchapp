# a2.33.l1 « Les démonstratifs » — build report

Built 2026-08-17 against `A2-33-DEMONSTRATIFS-PROMPT.md`, doctrine §F and
Corrections §12. Seq 33 of 35. Applied to Postgres and merged into `seed.json`;
**not published** (doctrine §C: publishing is not part of a lesson build).

```
lesson      a2.33.l1, v3, 24 missions, 6 acts, 30 quiz questions, 1 sheet
corpus      27 authored, 32 imported, 2 respellings repaired
theme       pronoms-essentiels, fr.a2.*.337–.363
tests       4633 before  →  4768 after   (+135; 118 of them this lesson's guard)
gates       tsc 0/0 · suite green · content:parity clean · publish --dry-run valid

v3 is the self-audit in §13: four content defects and one false claim, none of
which any gate in this build had an opinion about.
```

---

## 1. The probe, and what it said

`corpus:probe --unit a2.33 --theme demonstratifs,pronoms-essentiels,mots-essentiels`
plus three purpose-written probes (`_a233_preflight.ts`, `_a233_eu.ts`,
`_a233_unseen.ts`) over all **48,919 published rows**.

**Confirmed exactly as the prompt states:** the identity block byte for byte;
`demonstratifs` at 0 rows and not created; `pronoms-essentiels` at 634 published
with `fr.a2.*` 336 rows, max `.336`, NEXT FREE `.337`, no gaps; all eight
headwords present in `mots-essentiels`, ungendered, respelled,
`flashcard + voiceflash`; `cet homme` 12, `cette femme` 8, `ces gens` 2;
`celui-ci` 3 and `celle-là` 0.

**Imported or authored, per the prompt's instruction "you author no headwords":**

| | authored | imported |
|---|---|---|
| headwords | **0** | 8 (`mots-essentiels`) |
| `-ci`/`-là` cards | 4 | 4 (`fr.b1.pronoms-essentiels`) |
| pronoun sentences | 6 | 8 (b1) |
| adjective evidence | 0 | 12 (seven other themes) |
| the eight-cell grid, the `Regarde` frame, the both-jobs rows | 17 | 0 |

---

## 2. Every claim in the prompt I measured false

Nine, which is above the three-to-six rate Corrections §12 records.

**2.1 — The load-bearing one. « PRONOUN celui-ci 3 · celle-là 0 → thin, author. »
True of those two strings and false of the construction.** 104 published rows
carry a demonstrative pronoun, and **sixteen of them are a complete,
deliberately authored teaching block sitting in this lesson's own home theme**:
`fr.b1.pronoms-essentiels.036–.051`, four `-ci`/`-là` phrase headwords with
`flashcard + voiceflash` and twelve sentences, one per tail. They are at b1,
which is why an a2-shaped probe did not find them. By level: b1 52 · b2 28 ·
c1 11 · sons 8 · a2 3 · a1 2.

The correct reading is that the paradigm was published for a level the learner
has not reached and has never been taught at the level that needs it. Twelve of
the sixteen are imported here; §3 says which four are not.

Five shipped A2 lessons already import a b1 or b2 row (`a2.10.l2`, `a2.12`,
`a2.20`, `a2.30`, `a2.31`), so this is an ordinary import rather than a
precedent.

**2.2 — `ce livre` is 38, not 37.** Three of the four adjective figures are
exact; that one is one low.

**2.3 — Corrections §3 says the corpus never holds a minimal pair, and here it
holds two.** First build in the band to find one.

```
fr.a2.description-personnes-objets.005  Cet homme a l'air fatigué.
fr.a2.description-personnes-objets.006  Cette femme a l'air fatiguée.

fr.a2.description-personnes-objets.015  Ces hommes sont bruyants le matin.
fr.a2.description-personnes-objets.016  Ces femmes sont bruyantes le soir.
```

The first pair **is trap 1** — `cet` against `cette`, one sound, two spellings —
published, in one frame, differing by the demonstrative and the noun's gender
and nothing else. Both pairs are imported; the first is `s05-gender`'s first two
examples. §3 remains right about paradigms and is wrong that it has no
exceptions.

**2.4 — The unmeasured tails, measured.** `celui de` 11, `celui qui` 3,
`celle de` 1, `celle qui` 1, `celles-là` 1, `ceux-ci` 0, `celle-là` 0. The `de`
and `qui` tails exist and the `-ci`/`-là` tails barely do, which is the reverse
of what a lesson would guess, and it is why the `-ci`/`-là` rows here are
authored and the `de`/`qui` rows are imported.

**2.5 — The prompt misquotes a2.06.** It says a2.06's shape is « an article
leans on a noun, a pronoun leans on **nothing** ». a2.06 shipped:

> « Here the word after it decides, and so does where it sits: an article leans
> on a noun, a pronoun leans on **a verb**. »
> — `pronoms-direct-corpus.ts:201`, `SHAPE_EXTENSION`

a2.06's pronouns are `le`, `la`, `les`, which sit in front of the verb, so that
ending is true of a2.06 and **false here**: `celui-ci` touches no verb at all.
Quoting the prompt's paraphrase would be a paraphrase; quoting a2.06 unchanged
and stopping would teach a rule that does not hold.

So the build does what a2.06 itself did when a2.22's extension was the right
shape and false word for word: quotes the neighbour VERBATIM, attributes it,
and adds one sentence cut to the same pattern. Both are on `s04-grid` card 0,
and the quotation is **imported from a2.06's own file** rather than retyped, so
"verbatim" is mechanical and a2.06 rewording fails this build.

**2.6 — « Two respellings are already identical and that is not an error » is
right, and `A1-BUILD-INVARIANTS.md` §3 is wrong about why.** The invariants say
the house writes `/ø œ/` as `EU`. Measured across all 48,919 published rows:
**1,882 respellings contain `UH` and 16 contain `EU`.**

```
deux DUH · vieux VYUH · peu PUH · bleu BLUH · mieux MYUH · eux UH
```

So `ceux → SUH` is the house value, `ce → SUH` is the house value for the
schwa, and their collision is a property of the scheme rather than a defect in
two rows. `RESPELL-CONVENTION.md` already says « eu ø/œ → EU / UH », i.e. both;
the invariants quote half of it. **Nothing in that family was repaired.**

**2.7 — `cet ami`, which the prompt uses as its example, is zero rows.** `cet
homme` is 12 and `cet hôtel` is 4. The vowel evidence is imported from the two
that exist.

**2.8 — The prompt's Test list asks for one bare-form location and needs four.**
It says « Permit the bare form only inside an `errorSpot` item as the error,
scoped to that one location », and three paragraphs earlier asks for a scene in
which somebody « produces it bare » and makes trap 3 the `trapDrill`. A scene
that opens on the error and a trapDrill that corrects it both have to print it.
The allowance is four sections — `s01-scene`, `s15-trap`, `s16-errors`,
`s22-quiz` — every one a place where the form is marked wrong, asserted in both
directions.

**2.9 — And one the prompt could not have known: a2.08's corpus file says
« `cette`, `ce` and `ces` are demonstrative ADJECTIVES, which a1 owns ». A1 does
not own them.** `A1-25-DAILY-ROUTINE-PROMPT.md:184` rejected teaching `ce matin`
as a demonstrative precisely because « `ce / cet / cette / ces` belongs to an A2
unit », and `A1-05-SUBJECT-PRONOUNS-PROMPT.md:111` says « `ce` as in `c'est` is
a demonstrative, owned by `a2.33` ». No shipped lesson's `grammarIntroduced`
claims any of it. **This unit is the first to teach them anywhere in the
product.** a2.08's comment is wrong about ownership and right about everything
that follows from it, so nothing needs changing there.

---

## 3. What I found in `A2-BRIEF-CORRECTIONS.md` and the doctrine

Corrections §12 asks for this.

- **§3's "no minimal pairs" has exceptions.** Two, both published, both in one
  theme. See 2.3.
- **Invariants §3's `EU` is the minority form by roughly 100:1.** See 2.6.
- **§6's repair table shape assumes the defect is a nasal.** This build's two
  repairs are `/ɛ/` written as English orthography, and `hasPlainNasalFor` is
  silent on all three states of both. The table keeps `blind`/`house`/`half`
  and asserts the silence **as a negative**, so the day the checker grows an
  `/ɛ/` rule the build says so rather than carrying a dead list.
- **§14.5's ratio guard needs one more exemption than it names.** It says
  guarding the ratio « also lets `overview.titleEn` stay the unit's own English
  name ». For this unit that name is *Demonstrative Adjectives and Pronouns* —
  two words on any sane jargon list — so `titleEn` has to be excluded from the
  walk outright, not merely counted. It is excluded and asserted equal to
  `UNIT.title` instead.

---

## 4. The Owns, the reframe and the acts

**Owns: one root, two jobs, and the noun tells you which.**

```
REFRAME   A noun after it means it points. No noun means it replaces.
```

Twelve words, runnable in the half-second before the word leaves your mouth,
carried 25 times (24 section `say`s plus `Lesson.reframe`; it appears in no card
body). Four rejected candidates are recorded with reasons in corpus §D — the
sharpest rejection is « A noun after it points. No noun, and it never stands
alone », which merges the Owns and trap 3 into a sentence with room for one.

**Acts, and the Owns outweighing everything else (doctrine §B.5):**

```
act1  Deux mots, une racine            3   scene · goals · the eight forms
act2  Quand le nom suit                5   the pointing half
act3  Quand il n'y a pas de nom        6   the replacing half
act4  Le mot qui ne finit pas la phrase 4  the trap
act5  Production                       3
act6  L'examen                         3
                                      ──
                        Owns = 11  vs  scene + trap = 7
```

---

## 5. The three required layouts

1. **`s03-both`** — the four adjectives and the four pronouns, one `tapTable`,
   two rows, all eight forms. **Three columns, not five, and a device
   measurement is why:** `TapTableView` gives every column `flex: 1` inside a
   card padded 16 each side, with a 14dp chevron and 12dp gaps. At four columns
   that is roughly 67dp per column on a Pixel 6, about eight characters of
   `bodySm` a line, and `ceux · celles` is thirteen. At three it is ~95dp and
   every cell fits on one line. Verified on the device: it does.
2. **`s04-grid`** — `ce livre` beside `celui-ci`, four cards, each one sentence
   twice. The guard asserts the SHAPE, not the strings: each card must open on a
   pointing form plus a noun, and that noun must be **absent** from the second
   half.
3. **`s06-vowel`** — `cet homme` beside `ce livre`, `hideLines: true`, adjacent
   and in that order. **ONE TAKE, ONE VOICE, RECORDED ADJACENTLY** is written
   into `rec-a2-33-vowel`'s `desc` and asserted phrase by phrase, because a rule
   about how something is recorded becomes invisible once the clip is delivered.

---

## 6. The four traps

**1. `cet` and `cette` are one sound.** Both ship as `SEHT`, measured.
`HOMOPHONE_FORMS` holds four groups, three of which this build found:
`celle/celles`, `celle-ci/celles-ci`, `celle-là/celles-là`. The distinction is
tested by `typeIn` and by the dictée, which is the only surface that can:
`fold()` keeps a final `-e`.

**The prompt's version of the rule is one word too wide.** It asks that « no
quiz OPTION PAIR differs only by a member of it ». The rule that is true, and
the one Corrections §5 states, is that no **ear** question may. On an mcq the
options are read. `cet aéroport` against `cette aéroport` is the single best
question in the lesson — the stem states the gender, so one option falls to the
gender and the other to the sound — and written wide the guard deletes it. So
the guard is absolute on anything the learner hears and takes a **named,
single-entry, mcq-only** exception list for anything they read, and an unused
entry fails the build.

**2. `cet` exists to stop two vowels colliding.** `s07-why` is three cards,
three lessons, one pressure: sons.07 deletes a vowel, a2.16 borrows a consonant
from the feminine, this one swaps a whole word. Both neighbours' reframes are
**imported** from their own corpus files. `cet hôtel` carries the silent h,
which is the proof the rule is about sound. Not one of a2.16's three adjectives
is taught: `bel` appears once, on that card, and `nouvel` and `vieil` nowhere.

**3. `celui` cannot stand alone** — the scene, the trapDrill, `commonErrors` and
six quiz items. See §8; the guard took five checks.

**4. `c'est` and `ce sont` are a third job.** Named in exactly one place
(`s24-roundup`) and appearing in no other section, no authored row and no
imported row. Two b1 rows that would have been useful were left behind for it
(`.043`, `.051`), which is a stronger answer than a scoped allowance because it
cannot be weakened by a later edit.

---

## 7. The corpus

**27 authored rows, `.337`–`.363`, none gendered, none past eight words.**

- `.337`–`.344` the eight-cell grid: one frame, the same referent named and
  unnamed, in all four cells
- `.345`–`.349` the `Regarde` frame: all four pointing forms in one sentence
  shape, plus the silent h
- `.350`–`.354`, `.359` the tails
- `.355`–`.358` **the four `-ci`/`-là` cells that did not exist anywhere, at any
  level.** The corpus published `celui-ci`, `celle-là`, `ceux-ci` and
  `celles-là` and never their opposite numbers; the paradigm is now whole
- `.360`–`.363` both jobs in one sentence, four cells

**Two respellings repaired**, both b1 rows in this lesson's own theme:

```
fr.b1.pronoms-essentiels.040  celle-là    sell-LAH -> sehl-LAH
fr.b1.pronoms-essentiels.048  celles-là   sell-LAH -> sehl-LAH
```

`RESPELL-CONVENTION.md` writes `/ɛ/` as `EH`; `sell` is English orthography that
happens to sound right. The house value was **read off published rows**
(`fr.sons.mots-essentiels.106` and `.108`, both `SEHL`, both imported here), not
invented. This lesson prints all four on adjacent cards, so a learner would
otherwise meet two spellings of one syllable inside one deck.

**One row named and deliberately NOT imported.** `fr.sons.voyelles.441` is the
only respelled `cet hôtel` sentence in the corpus and it reads
`seh-t‿oh-TEHL` — **U+203F, which invariants §2 records as drawing as a low
underscore on a Pixel 6.** `GroupDrillView` builds an item's second line from
`note`/`respell`/`en`, so importing it into the mission that needs it would put
`seh-t_oh-TEHL` on the screen. `fr.a1.nombres.076` carries the silent-h evidence
instead. Every authored `cet` respelling runs the t into the next syllable —
`seh-TOM`, `seh-toh-TEL` — exactly as a2.16 did with `beh-LAHRBR`, and a guard
asserts no U+203F reaches any surface **and** that `.441` still carries one, so
the reason it was excluded cannot silently evaporate.

**Row count after the apply, not the maximum id:** `pronoms-essentiels`
634 → 661, `fr.a2.*` slice 336 → 363. Exactly the 27 written. The id block held.

**a1.03's ending figures: unmoved (population 2014).** Six a1 rows were carried;
not one is a gendered single word, asserted both in the batch (against Postgres)
and in the merge (against what is about to be written).

---

## 8. The guard, and what mutation testing found

**111 assertions in `a2-33-demonstratifs.test.ts`; the batch carries an
equivalent of nearly all of them.**

**The harness itself was the first defect it found.** Its first run reported
**18/18 red**, which is the tell: the measured rate is about two in thirteen
finding a weakness. Its cwd was built as
`new URL('..', import.meta.url).pathname`, which on Windows yields
`/C:/Users/harki/Downloads/gitbuild%20appealch/…` — URL-encoded — so every child
process failed to start. A control mutation that edits only a comment caught it,
and the control now runs first. A second run then reported 18/18 red again for a
different reason: the batch's own first-build guard refuses a re-apply, so every
`--dry` exited 1. **Two ways to get a perfect score by testing nothing, both
inside twenty minutes.**

With a verified control, **19 mutations, 3 weaknesses, all resolved:**

**REAL HOLE — the bare-pronoun shape could not see a French clause inside an
English card body.** The version at the time asked whether the WHOLE STRING
looked English and skipped it if so. A card body is English prose with French
quoted inside, so that skipped exactly the place the error would appear. The
harness put « `Je prends celui.` This one, the one nearer you. » into a body and
the guard stayed green. It is now evaluated **one clause at a time**: the first
sentence is French and fires, the second is English and does not. Both strings
are in `MUST_FIRE.bare`.

**WEAK MUTATION, then a real tightening — a2.16 named per section rather than
per card.** The mutation blanked the unit id from the card `head` only, and the
body still named it, so green was correct. Sharpened to blank both, it goes red.
The guard was tightened anyway: the unit that owns a quotation must now be named
**on the same card**, because a section-wide check passes while the id sits on
any one of three.

**WEAK MUTATION — the ONE TAKE constraint.** `String.replace` replaced the first
occurrence, which was in a doc comment, leaving the actual `desc` intact.
Re-anchored uniquely, it goes red.

**The bare-pronoun shape took five checks, and each one after the first was
added because the version before it fired on correct content:**

1. the house boundary keeps `-` on the right, so `celui` inside `celui-ci` is
   not a whole word — that handles both attached tails free
2. is the next word one of `de`/`du`/`des`/`d'`/`que`/`qu'`/`qui`/`dont`/`où`
3. **does the sentence actually stop there** — without this it fired on the
   goals card, « Act 3: celui, celle, ceux, celles, and what has to follow
   them », and a lesson cannot teach four words it is forbidden to list
4. **is the whole string just the forms** — a `cardDeck` card headed `celui` is
   a heading, and check 3 alone cannot tell it from a sentence stopping early
5. **is this clause French at all** — « Why celle and not celui? » is English
   prose MENTIONING two French words, which is half of every teaching surface

Fourteen strings are in `MUST_NOT_FIRE.bare`, every one a real string off this
lesson's own surfaces that broke a version of the guard.

**And one more guard narrowed for the same reason.** `OBJECT_FORMS` started as
seven and fired on « Take the one you like best, and tell **me** which » —
English, on a learner surface. `me`, `te` and `se` cannot be told from English
by any shape built out of French morphology, so the list is now
`lui`/`leur`/`leurs`, the three that are unambiguously French. (`lui` is also a
substring of `celui`, which the house boundary handles for free.)

**What that narrowing costs, measured by the audit rather than asserted.** The
first version of this report said « nothing is lost: this lesson prints no
object pronoun of any person ». **That was false.** Two imported published rows
carry one — `fr.b1.pronoms-essentiels.042` has `te`, `.039` has `m'` — used and
taught nowhere. The true statement is the narrower one: **this lesson AUTHORS
no object pronoun**, in any of its 27 rows. Both halves are now asserted, the
two rows are named by id, and a2.24 and a2.25 were added to `grammarAssumed`,
which is the field that gap belonged in. See §13.

---

## 9. The quiz

30 questions, four rounds of 8/8/7/7, every one with a `why` and a resolving
`ref`, every free-text item accepting the answer it displays through the real
`fold()`.

```
typeIn        14   47%   band 32%   the split, the four forms, the tail
mcq            8   27%   band 38%   the accent, the generalisation
errorSpot      6   20%   band 17%   the bare form, the wrong half of a pair
listenChoose   2    7%   band 10%   ce against ces, the one audible contrast
```

**The typed weight is the highest in the band and it is forced rather than
chosen.** Almost nothing here is audible: `cet`/`cette` are one sound,
`celle-ci`/`celles-ci` are one sound, `ce`/`ceux` are one respelling. What
`fold()` can see is a final `-e`, a final `-s` and the presence of a tail — and
all three are exactly what this lesson teaches.

**Questions I wanted and could not write**, recorded in
`WANTED_AND_IMPOSSIBLE` and asserted non-empty:

- a typed question on the hyphen in `celui-ci` — `fold()` strips `-`, so
  « celui ci » is accepted and the learner is told they spelled it right
- a typed question on the accent in `celle-là` — `fold()` strips every combining
  mark. Written as an mcq, and a guard forbids any typed item keying on it
- a `listenChoose` between `cet` and `cette`, and between `celle-ci` and
  `celles-ci` — one sound each
- anything on the capital in `Ce sont` — and no question asks about it at all,
  because trap 4 is named and not taught

The correct-answer spread is 4/3/3 across ten closed items, which is the best
possible at that count; a first draft put five in slot 1 and `validateDensity`
refused it.

---

## 10. Device verification — done, on a Pixel 6, both halves

**Host half:** the served bundle (27.7 MB, HTTP 200) carries every new string
and none of the removed ones; `sehl-LAH` present, `sell-LAH` absent; every one
of the twenty section types this lesson uses has a `case` in a renderer file.

**Device half:** A2 is paywalled on this dev build, so `DEV_UNLOCK_A2` in
`entitlement.logic.ts` — the documented one-line `__DEV__`-only switch added for
exactly this — was flipped for the pass and **restored to `false` afterwards**
(`git diff` on that file is empty).

Verified on the phone:

- **the lesson cover** — `A2 · LEÇON 33`, title, `intro`, no jargon
- **mission 3, required layout 1** — both rows, all eight forms, every cell on
  one line, three term chips, no clipping. The three-column decision was right;
  a fourth column would have wrapped `ceux · celles`
- **its row detail** — modal opens, body draws in full, `SpeakRow` present
- **mission 4, required layout 2** — `Je prends ce livre. / Je prends celui-ci.`,
  the superscript `ⁿ` rendering correctly, the full a2.06 quotation followed by
  this lesson's extension, four-card pager dots
- **mission 6, required layout 3** — four lines correctly showing as *Hidden*
  with play dots, questions below
- **mission 15, the trapDrill** — the **stepped** shape, "THE RULE" then
  Continue, not the stacked one a2.17 warned about
- **the reference sheet** — `teach` body and the eight-row three-column table,
  every cell on one line, no horizontal clipping

**Missions walked:** 3, 4, 6 and 15 plus the reference sheet on the first pass;
**12 and 19 on the audit pass** (§13), which is every section this build or the
audit touched structurally.

**The gap that remains:** the quiz and the dictée were not sat, so no typed
answer has been scored end to end on a device. The `fold()` path is asserted
through the real function in both the batch and the test, and every free-text
item is proved to accept what it displays — but that is host-side.

**One observation, not a defect of this lesson:** the floating dev gear button
overlaps body text on every screen, including the sheet. It is app chrome and
predates this build.

---

## 11. Gates

```
npx tsc --noEmit         ealch-v2 0 errors · ealch-admin 0 errors
node --test              4633 -> 4761, 0 failures
a2-33-demonstratifs      111 assertions, all green
pnpm content:parity      clean; one pre-existing divergence (b2.01.l1, db-only,
                         in_review), not mine
pnpm content:publish --dry-run
                         ✓ dry run — valid, nothing written
```

The publish dry-run was run because the seed is merged-shape until a publish
regenerates it, and that difference broke two suites on v51. It is clean.
**`seed.version` was left at 52; the publish step owns it.**

---

## 12. Anything I could not verify, said plainly

- **The quiz and dictée were not sat on the device.** Named above.
- **`seed.json` moved under me mid-build.** It read version 51 at my first probe
  and 52 twenty minutes later, and Metro was already listening on 8082 when I
  went to start it. Another author is live in this tree. My merge is
  upsert-by-id, does not sort, and names the six lessons it must not disturb
  rather than counting them; all six survived. **Anyone reading this later
  should re-run the merge rather than assume the seed is where I left it.**
- **The batch's theme-count guard now warns rather than dies on re-apply**,
  because the theme legitimately moved between the measurement and the second
  apply. The row-delta check still dies outside `--reapply`.
- **The lesson is v2, not v1.** v1 was applied, the guard then found `a1.04`
  declared in `grammarAssumed` and named on no learner surface, and the fix is
  one sentence in the reference sheet. Corrections §10: move the counter rather
  than correcting under the same number.
- **`ce` and `ceux` share a respelling and I did not repair it.** §2.6 has the
  measurement. They are never offered against each other by ear and are never in
  contrast in real French, because one takes a noun and the other refuses one.
- **Audio is briefed, not rendered.** `pnpm audio:render` was not run. Three
  `recordingId`s carry specs; `CLIP_MANIFEST` is empty by design and device TTS
  is the correct shipping state.

---

## 13. The self-audit, after the lesson was applied

Run against the shipped v2. **Four content defects and one false claim, none of
which any gate in the build had an opinion about.** Every guard, the
111-assertion test and the 19-mutation harness were green through all of them,
because every one of those was pointed at *this lesson's own material* and none
at the band it sits in. The lesson is now **v3**.

**13.1 — The worst one: a demonstrative pronoun with no antecedent, inside the
lesson that teaches it cannot happen.** The reading passage read
« Il touche celui de gauche, puis **celle** de sa femme », and every noun in the
passage was masculine — `deux sacs`, `le comptoir`, `cet homme`. `celle` stood
in for nothing. Worse, the answer key *rationalised* it: « a noun the passage
never actually says. »

Fixed by introducing `une valise` two sentences earlier, so `celle` has the only
feminine referent in the shop and the switch from `celui` is readable rather
than asserted. The question is now a real comprehension question — *which noun
does `celle` stand in for* — and a new guard asserts a feminine antecedent
appears **before** the pronoun in the passage.

**13.2 — The imparfait, on the scenario.** « Et vous **vouliez** autre chose ? »
A2 covers the présent, the passé composé, the futur proche and the imperative,
and teaches the imparfait at no seq. This is seq 33 of 35, so nothing downstream
rescues it. Now « Et avec ça ? », which is what a French shop says.

**13.3 — The pronominal `en`, on the same scenario.** « **J'en** ai deux comme
ça. » `en` is a2.25's, and this lesson's own reading passage had *already* been
rewritten during the build to remove one — so the build knew the rule and
applied it in one place and not the other. Now « Bien sûr. »

**13.4 — A teaching claim about a numeral.** The last scenario turn was
« Oui, je prends ces trois. » with `userEn` reading *(A noun-like word follows,
so it points.)* `trois` is not a noun-like word, and `ces trois` is awkward
French on its own. Replaced with « Oui, je prends celui-ci, ceux-là et
celle-là. » — the whole canDo in one line, three genders and numbers produced,
and not one noun among them.

**13.5 — Two respellings capitalised a syllable that is not group-final.**
`.350` and `.351` read `PAH suh-lwee-SEE …`. « Pas celui-ci » is one rhythmic
group and its stress falls on `SEE`. Read off the corpus rather than reasoned:
`pah duh proh-BLEHM`, `pah MAHL`, `pah dü TOO`, `suh neh pah GRAHV`. Now `pah`.

**13.6 — The false claim,** corrected in §8 and in the corpus: *prints* no
object pronoun → **authors** none.

### What the audit changed about the guards

The two scenario defects are one class — **the band's ceiling, which nothing in
the build was watching** — so the fix is a guard rather than an edit:

- **`OUT_OF_BAND_TENSES`** — imparfait, futur simple, conditionnel, anchored on
  verb **stems** rather than endings, run over French-bearing fields only.
  Endings alone match `Parfait`; the audit script's own first version did
  exactly that, and its pronoun shape matched `te` inside `cette`, `me` inside
  `homme` and `lui` inside `celui`. **A2-TAIL-AUDIT §4 in the audit tool
  itself.**
- **`PRONOMINAL_EN_Y`** — shaped as `en` plus a verb, never a bare `en`, because
  `en cuir` and `en toile` are the preposition and the passage uses and glosses
  both.
- Both carry MUST_FIRE / MUST_NOT_FIRE tables whose MUST_NOT_FIRE entries are
  real strings off this lesson's surfaces, and both were **mutation-tested by
  putting the two original defects back**: both go red.
- An **authored-vs-imported** split on the object-pronoun claim, asserted in
  both directions and by id.

### And one more, found by an assertion failing on itself

The new `OBJECT_IN_IMPORTS` check used `hasWord(fr, "m'")` and reported that
`fr.b1.pronoms-essentiels.039` does not carry `m'` — a row that plainly does.
**Corrections §14.3 again:** the house boundary excludes `'` on both sides, so
`m` inside `m'as` is not a whole word by it. An elided form needs a left
boundary only. That is the fourth time in this build the apostrophe boundary has
bitten, and the first time it bit an assertion rather than a guard.

### Gates after the audit

```
npx tsc --noEmit         ealch-v2 0 · ealch-admin 0
node --test              4768 pass, 0 fail   (a2.33 guard: 111 -> 118)
pnpm content:parity      clean; the same one pre-existing divergence
pnpm content:publish --dry-run   ✓ dry run — valid, nothing written
device                   missions 12 and 19 re-walked on a Pixel 6, both confirmed
```

### The device re-check RAN, and both fixed sections are confirmed

Re-run once the machine had room. **Both v3 sections were walked on a Pixel 6 —
and they are exactly the two missions the original build never reached, so this
closes that gap as well as the audit's.**

**Mission 12, the reading passage.** The card renders and the fix is visible:
« À côté des deux sacs, il y a **une valise** qui n'est pas à vendre », then
« Il touche celui de gauche, puis **celle** de sa femme ». All seven glossary
keys underline, including the new `une valise`, so `segmentSentence` resolves
every one against the passage's own tokens. Six per-line audio buttons and the
« Text understood » gate draw.

**The passage grew in v3 and I checked what that cost.** On first paint the last
line sits under the card's bottom edge. **The card scrolls** — scrolling reveals
« …Elle enveloppe le sac en toile. » and the card's own bottom border, and the
« Text understood », Back and Next buttons do not move. So the growth is safe;
this is not the sized-by-guessing overflow invariants §7 warns about.

**Mission 19, the scenario.** All three fixed turns confirmed live:

```
turn 2   « Bien sûr. Le brun ou le noir ? »            the pronominal en is gone
turn 3   « …Vous voulez autre chose ? »                the imparfait is gone
turn 6   « Oui, je prends celui-ci, ceux-là et celle-là. »
         "…(Three things, and not one noun among them.)"
```

Every turn draws its model reply, its gloss and both alts, each with its own
play button, and the last one ends on « End the scene ».

### Two things the device pass taught, worth keeping

**The cold manifest takes 81 seconds and the dev launcher gives up first.** The
bundle endpoint served 200 / 27.7 MB while `/` timed out at 30s, which looks
exactly like a wedged Metro and is not one: a plain `curl` with a four-minute
timeout returned 200 in **81.7s**, and the app then loaded first try. **Warm the
manifest from the host before pointing the phone at Metro** — invariants §7 says
this about the bundle and it is truer of the manifest.

**A red warning toast covers the pager's Next button.** « Can't perform a React
state update on a component… » was already on the home screen before this lesson
opened, so it is not a2.33's, but it swallows taps at the bottom of the screen
and has to be dismissed before the pager can be driven at all.

### What is still not verified

The quiz and the dictée were not sat, so no typed answer has been scored end to
end on a device. That path is asserted through the real `fold()` in the batch
and the test, and every free-text item is proved to accept what it displays —
but that is host-side.

### One more thing the audit disturbed, and put back

`DEV_UNLOCK_A2` in `ealch-v2/src/store/entitlement.logic.ts` was `true` when the
audit started, carrying a comment that is **not mine**:

```
const DEV_UNLOCK_A2 = true;   // TEMPORARY: a2.32 device verification, 2026-08-18. FLIP BACK.
```

The other author had flipped it for their own a2.32 pass. My restore step set it
back to `false` underneath them, which would have started failing their
in-flight verification at the paywall with no obvious cause. **It has been put
back to `true`, exactly as I found it, and it is deliberately NOT staged in my
commit.** Whoever owns a2.32 should flip it back when they are done; the flag is
`__DEV__`-only and `entitlement.test.ts` pins that the flag alone is never
enough, so nothing reaches a paying customer either way.
