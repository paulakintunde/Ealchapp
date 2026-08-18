# a2.33.l1 « Les démonstratifs » — build report

Built 2026-08-17 against `A2-33-DEMONSTRATIFS-PROMPT.md`, doctrine §F and
Corrections §12. Seq 33 of 35. Applied to Postgres and merged into `seed.json`;
**not published** (doctrine §C: publishing is not part of a lesson build).

```
lesson      a2.33.l1, v2, 24 missions, 6 acts, 30 quiz questions, 1 sheet
corpus      27 authored, 32 imported, 2 respellings repaired
theme       pronoms-essentiels, fr.a2.*.337–.363
tests       4633 before  →  4761 after   (+128; 111 of them this lesson's guard)
gates       tsc 0/0 · suite green · content:parity clean · publish --dry-run valid
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
`lui`/`leur`/`leurs`, the three that are unambiguously French. Nothing is lost:
this lesson prints no object pronoun of any person. (`lui` is also a substring
of `celui`, which the house boundary handles for free.)

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

**The one gap I did not close:** I did not sit the quiz or the dictée on the
device, so I have not seen a typed answer scored end to end. The `fold()` path
is asserted through the real function in both the batch and the test, and every
free-text item is proved to accept what it displays, but that is host-side.

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
