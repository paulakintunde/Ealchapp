# a2.02.l1 "Irréguliers 1 : aller, venir, tenir" — build report

Trail seq 5. Built 2026-08-12. Doctrine §F, plus the four items the brief asks for
at the end.

**Shipped state:** `a2.02.l1` **v4**, 24 missions, 39 items, applied to Postgres
and merged into `seed.json`. `fr.a2.verbes` 226 → **255 rows**. Suite 3075 → **3135**
(+60), `npx tsc --noEmit` clean in both packages. NOT published; `content:parity`
reports one pre-existing divergence (`b2.01.l1`, database-only) and says nothing in
the seed is at risk.

---

## 1. The name three later lessons are told to quote, verbatim

```
what comes next decides
```

Exported as `WHAT_FOLLOWS` from `scripts/data/aller-venir-terms.ts`, with
`WHAT_FOLLOWS_UNIT = 'a2.02'` beside it. **a2.18, a2.19 and a2.15 should import
both rather than retyping either**, the way this lesson imports a2.01's `NOUS_ON`.
It reaches six sections and the unit id is on `s16-notmine`, so a learner is told
the shape will come back before they are ever shown a second instance.

Rejected: *"the fork"* (names nothing a learner can act on), *"same words, two
meanings"* (a description of the problem, not a method), and *"one form, two jobs"*
(the doctrine's own phrase; reads as a heading rather than an instruction). The
words were chosen to be true of all four instances rather than of this one: it is
always what comes NEXT that decides, never the form and never the surrounding
context.

**One warning for whoever quotes it.** Term names are lowercase by house
convention, and five of the seven places this one is interpolated originally put
it at the START of a sentence. On a Pixel 6 that reads as a typo, not as a quoted
term. Keep it inside its sentence. There is now a guard.

## 2. Missions on venir de against the three paradigms

| | missions | quiz |
|---|---|---|
| the Owns (`venir de`) | act 3 = **6**, plus act 4's trapDrill and commonErrors = **8** | **15 of 30** questions |
| the three paradigms | act 2 = **4** | 15 of 30 |

Act 3 holds the lesson's only `tapTable`, both production groupDrills and the
generation test. The paradigm act carries no `table` of any kind: the single grid
the brief asked for lives in the sheet, because a table at layer `core` is a
`table-in-core` density failure.

The quiz split was not the first draft. My own guard caught it at 12 of 30 and
refused the build, so three paradigm questions were rewritten to test the same
cell INSIDE the construction (`Nous ___ de finir. (venir)` rather than
`Nous ___ tôt.`). That is better teaching as well as a better number.

## 3. Compounds named, and what was left to a2.15

**Three: `revenir`, `devenir`, `obtenir`** — the brief's ceiling exactly. Two carry
an authored sentence apiece and both run on their base verb's own frame, so the
claim is visible in the sentence rather than asserted on a card:

```
Il vient tôt.      →  Il revient tôt.        (fr.a2.verbes.269 → .288)
Il tient la clé.   →  Il obtient la clé.     (fr.a2.verbes.275 → .289)
```

**The family principle is a2.15's and is handed over by unit id on `s07-three`.**
The card shows that these three behave like the verbs inside them; it never says
that compounds in general do. A guard checks for the five obvious phrasings of the
generalisation (`every compound`, `all compounds`, …) and fails if one appears.

`appartenir` is **read from Postgres and named on no screen**, which departs from
the brief's settled block ("all seven headwords are imported"). It would have been
a fourth compound against a ceiling of three, and it is the weakest of the four as
evidence: "to belong" is an abstract relation, so `il appartient` gets no help at
all from `il tient la clé`. It is in the manifest so the decision was taken with
the row in front of it.

## 4. The venir de corpus sentences, flagged for a2.05

**Six past-referring rows in `verbes`, which a2.05 (seq 16) will import from:**

```
fr.a2.verbes.279   Je viens de manger.
fr.a2.verbes.280   Tu viens de rentrer.
fr.a2.verbes.281   Il vient de partir.
fr.a2.verbes.282   On vient de finir.
fr.a2.verbes.283   Nous venons de vendre la maison.
fr.a2.verbes.284   Ils viennent d'arriver.
```

Exported as `RECENT_PAST_IDS`. **None of them is a passé composé**: there is no
auxiliary and no participle anywhere in this build, so a2.05 inherits six
sentences that mean a past and contain none of its machinery. Doctrine §C permits
it; a2.05 should know they are there.

Three more rows put a PLACE after `de` (`ORIGIN_IDS`: .285, .286, .287) and are
not past-referring at all. a2.04 may want them.

---

## 5. Every claim in the brief I measured false

Six, which is the top of the range the corrections file predicts.

**1. "viennent and tiennent are the nasal shape the checker cannot see (nasal
followed by a consonant inside the token)."**

Neither word has a nasal vowel in it at all. `ils viennent` is /vjɛn/ and
`ils tiennent` is /tjɛn/: an ORAL vowel and a real, pronounced /n/. The nasal is in
the SINGULAR (`il vient` /vjɛ̃/), which is the whole audible difference between the
two and the opposite of what the brief describes.

`hasPlainNasalFor` is blind to them for an unrelated reason: `density.logic.ts:215`
short-circuits to `false` on a DOUBLED n or m in the French spelling. Both words
carry `nn`, so the checker returns false for any respelling of them — measured, it
does not flag `eel vyen TOH` either. The house answer is invariants §3's `automne`
answer, a **doubled N** (`VYENN`, `TYENN`), and both directions are asserted by
name.

**2. The genuine word-internal blind spot in this lesson is `Nantes`, and it is
the only one.** `NAHⁿT` is a nasal in front of a consonant inside the token,
exactly the a2.11 shape: `eel vyaⁿ duh NAHnT` sails through the checker. Measured
by breaking all 22 superscripts one at a time: **21 seen, 1 blind.**

**3. "All seven headwords exist and are imported, not authored."** All seven
exist; **six are imported and the seventh is not.** See §3 above.

**4. "Whether any corpus sentence already uses venir de" (marked UNVERIFIED).**

**Eighty do, and the place use is nearly twice as common as the one this lesson
owns.** Across all 27,523 published sentences: 80 hold a form of `venir` followed
by `de`/`du`/`d'`, splitting **28 infinitive against 52 other**, of which 26 are a
country or a city. `fr.a1.pays-et-nationalites` alone holds 19.

That is not a footnote, it is the case for the trapDrill. A learner who has done
a1.22 has met `Je viens du Portugal.` nineteen times over and has never once met
`Je viens de partir.` The reading that has to be displaced is installed by the
corpus, not by English, and that is why the PLACE row is first on `s09-twojobs`.

**5. "a2.10 named venir/tenir as an exception and did not conjugate them."** True,
and now half the story. **The brief predates `a2.10.l2`**, which shipped
2026-08-11, conjugated the other eight verbs of the non-`-iss-` class, declares
`A202_BACKREF = 'a2.02'` in its own terms file, and says on a card that venir and
tenir "run the shedders' mechanism with a vowel change on top". So this lesson is
the payoff of a NAMING (a2.10.l1) and of a MECHANISM (a2.10.l2), and the second is
much the sharper of the two. The loop is closed by showing it, not mentioning it —
see §6.

**6. "the passé composé is eleven lessons away (a2.05, seq 16)."** a2.05 is at seq
16 and this is seq 5, so it is eleven AHEAD, which makes it the twelfth lesson the
learner walks. `PASSE_COMPOSE_DISTANCE` is derived from the two measured `seq`
values rather than typed, so a curriculum reorder moves the prose.

**The identity block was RIGHT**, byte for byte — the first A2 brief that can be
said of. It had already been corrected in place against `A2-BRIEF-CORRECTIONS.md`
§1 before I started. Checked anyway; it costs one query.

## 6. The a2.10 loop, and why it is a listening mission

`s06-tot` plays six lines on one frame word, and four of them are the neighbours'
OWN rows rather than twins:

```
Il finit tôt.   ·  Ils finissent tôt.    a2.10.l1   a syllable is pushed in
Il part tôt.    ·  Ils partent tôt.      a2.10.l2   a consonant comes back
Il vient tôt.   ·  Ils viennent tôt.     here       a consonant comes back AND
                                                    the vowel leaves the nose
```

Both of those builds wrote in their own headers that they chose `tôt` so a later
lesson could hold their pairs beside its own. This is that lesson. Authoring twins
would have put four performances on the screen instead of four cells, which is the
mistake a2.11's corpus header warns about from the other direction. The four rows
are imported whole (`IMPORTED_SENTENCE_ROWS`) and a test fails if any of them ever
falls inside this lesson's own id range.

**This is the first build in the band to import a sentence.** a2.01, a2.09, a2.10,
a2.10.l2 and a2.11 all imported zero.

## 7. The reframe, and what was rejected

```
Coming from an action is how French says you just did it.
```

Twelve words, which is the ceiling. Eight sections, eleven appearances over the
whole object. The brief's own candidate, unchanged.

- *"venir de means to have just done something."* The brief's own rejection and it
  is right: a translation, not a rule. It says what the phrase means once built and
  nothing about how to build it, which is exactly the half learners get wrong.
- *"After de, the naming form."* The sharpest instruction in the lesson and
  **rejected anyway**, because it is false in half the sentences a learner meets:
  `Je viens de Paris.` has no naming form after `de` and 52 of the 80 published
  cases are that one. A reframe carried through eight sections cannot be false in
  the commonest case. It survives as the term `theNamingForm`.
- *"What comes after de decides what the sentence is about."* True of everything,
  actionable in nothing, and it describes the TRAP rather than the Owns. It became
  the term name, where a description belongs.

The surviving line is a PRODUCTION rule that runs in the direction a speaker moves,
and it makes no claim about the place use at all, so it is true everywhere it
appears. A guard fails the build if the reframe ever names a verb form.

## 8. Corpus: authored against imported

**29 authored, 0 infinitives.** Six builds in a row now. All 29 are `sentence`,
`level: 'a2'`, theme `verbes`, no `gender`, ≤ 14 words.

```
aller   6   the au parc frame, all six persons
venir   6   the tôt frame, all six persons
tenir   6   the la clé frame, all six persons
recent  6   THE OWNS: venir de + an infinitive, six subjects
origin  3   venir de + a place, the other half of the trap
family  2   revenir and obtenir, on their base verbs' own frames
```

**The form rule held**: `TENIR_FOLLOWS_VENIR` is derived, not asserted — for all
six cells, tenir's form is venir's with the first letter replaced. If a cell ever
stops matching, the constant empties and the build stops before any prose is read.
That link is the only reason the third verb is in this lesson, and the brief says
so in its test list.

**Ten imported, one read and not imported.** Six naming forms (`aller`, `venir`,
`tenir`, `revenir`, `devenir`, `obtenir`) and four sentences. `appartenir` read
only.

**Why all eighteen paradigm cells are authored.** The corpus has the forms and no
minimal pairs, the same finding as every verb lesson in this band, and it is
sharper for `tenir` than for anything before it:

```
tu tiens 0 · on tient 0 · vous tenez 0 · ils tiennent 0 · elles tiennent 0
nous tenons 6, and every one of them is inside the idiom tenir compte de
```

**Five of tenir's six cells do not occur once in 27,523 published sentences.** The
verb used to prove that venir is a family is a verb the corpus has never
conjugated.

**Zero respelling repairs, and that is a first in the band.** Not one of the six
naming forms carries a nasal vowel: `ah-LAY`, `vuh-NEER`, `tuh-NEER`,
`ruh-vuh-NEER`, `duh-vuh-NEER`, `ohb-tuh-NEER`. The split repair table the
corrections file mandates is kept with both halves empty and the guards still
running, because the next author needs the shape rather than the conclusion.

**Zero drill additions**, measured: all six already carry `flashcard`.

**Two competing respellings found and deliberately left alone** (`NOT_REPAIRED`):
`aller` is `ah-LAY` in `verbes-essentiels` and `a-LAY` in `consonnes`; `obtenir` is
`ohb-tuh-NEER` at a2 and `ob-tuh-NEER` at b1. Neither breaks a stated rule, and
invariants §9 says a variant is not a violation.

**The gendered twin that would have moved a1.03**: `devenir` also exists at
`fr.b2.philosophie.136` as `le devenir`, a NOUN with `gender=m`. Importing that row
instead would have joined a1.03's measured ending population and moved twenty
printed figures. The pre-flight flagged it; the generator refuses a gendered row
outright.

## 9. Lesson shape

24 missions, six acts (3 / 4 / **6** / 3 / 4 / 4), one quiz, five rounds, thirty
questions, **every one with a `why` and a `ref` that resolves**.

Format mix: 10 mcq (a third, under the half cap), 15 typed (11 typeIn, 4
errorSpot), 3 listenChoose, 1 tapSilent, 1 speak. Four typed questions make the
learner supply or keep the `de`, which is the error the lesson exists to stop; the
brief asked for errorSpot and typeIn there because an mcq shows the answer.

One `tapTable` and it is the Owns; one `table`-free flow; one reference sheet.

### Questions I wanted and could not write

- **"Which of these two do you hear, `je viens` or `il vient`?"** Impossible.
  They are one sound. `HOMOPHONE_FORMS` enforces it and the guard is alive:
  mutation-tested with `Tu vas au parc.` against `Tu va au parc.`, it fires; with
  `Il vient tôt.` against `Je viens tôt.` it correctly declines, because the
  pronouns are audibly different and that question is legitimate.
- **"Spell `Je viens de Paris.` with the capital."** `fold()` strips case, so a
  typed surface grades `de paris` correct. It is the one unscorable dictée target
  and it is named in `DICTEE_NEAR_MISS` rather than left to be discovered. Both
  a1.08 and a1.09 recommended `errorSpot` for a capital before it was measured.
- **"`Je viens de ___`"** with no further context. Two valid completions and no
  single answer; the brief says so and a guard now enforces it.
- **A typed question on the `d'` elision in `Ils viennent d'arriver.`** `fold()`
  strips the apostrophe with the rest of the punctuation, so `d arriver` and
  `darriver` both pass. Left as a corpus row and a glossary note.

## 10. The dictée

**15 targets, every one LETTERS mode through the real `dicteeMode`.** Weighted to
the Owns: five are `venir de` or its trap against two cells of aller.

14 of 15 are graded on exactly what the lesson teaches, including
`Je viens de manger.` against **`Je viens manger.`** — the dropped `de`, which is
the error the lesson exists to stop and which is letters all the way down. The
fifteenth is the capital on Paris. Both claims run through the real `normalizeFr`
in both directions, a2.09's shape, so if `fold` is ever fixed the assertion fails
rather than going stale.

## 11. Id block, and the row count

`fr.a2.verbes.261 .. .300`, allocated in the ledger. **It held.**

```
226 rows before   (exactly the ledger's figure after a2.11)
255 rows after    (226 + 29, and nothing else landed)
range .261..300   EMPTY when claimed, checked by selecting the range
```

The maximum is `fr.a2.verbes.486` and was before I started — a2.10.l2 took
`.461..500`, above the whole batch-1 reservation. **The row count is the only
signal and it is what the batch checks.**

I used `.261..289` and left `.290..300` unused, deliberately. Ids are the SRS key;
do not backfill.

## 12. Test, and the mutation testing

`ealch-v2/src/content/a2-02-aller-venir.test.ts`, **60 tests**. Suite 3075 → 3135.

**Mutation-tested in three passes, and the first two passes were the HARNESS being
wrong rather than the guards.**

Pass 1 mutated the source and ran the test, and reported seven mutations as "caught
by the batch only". That was meaningless: the test reads `seed.json`, and a
mutation that never reaches the seed is one it cannot see. Pass 2 ran the real
pipeline and every mutation was stopped by the batch, which is the batch doing its
job and still says nothing about the test. **Pass 3 mutated `seed.json` directly**,
which is the artifact the test guards for as long as the lesson ships.

**19 of 19 caught, none missed**, including all three the brief names (separate the
contrast, teach the futur proche, drop the tenir/venir link) and both listenChoose
directions.

### The three real defects mutation testing found

**1. `PASSE_COMPOSE_SHAPE` never fired.** It ended `(?:é|és|ée|ées)\b`, and `\b` in
JavaScript is ASCII-only, so `é` is not a word character and the boundary never
matched. `Il a mangé.` sailed straight through it — **in the batch, the merge AND
the test**. Invariants §0 records exactly this trap ("/\ben été\b/ matches
nothing") and the guard walked into it anyway. Both ends are explicit character
classes now, and a test pins four known positives and four English near-misses so a
dead regex cannot come back.

**2. Nothing checked the hand-typed `promptSound` values.** A trapDrill card's
`promptSound` is the sound of the sentence the learner is being tempted TOWARDS, so
it is a different row from the card's own `fr` and cannot be derived. All four were
typed by hand and a drifted value taught a respelling the corpus does not hold
while every gate stayed green. Each must now be some authored row's respelling, and
must not be the card's own.

**3. A doubled full stop shipped to the seed.** Four question stems quoted a
sentence and then wrote their own stop, so `s06-tot` read *"Il finit tôt.. What did
the plural do?"*. Fixed with a `noStop()` helper and pinned. **This is what took
the lesson to v2.**

I also wrote one guard that was wrong and fixed it: the doubled-stop check was
`/\.\.(?!\.)/` and fired on the scene's own « Ah, non, merci… », which is a
deliberate trailing-off and the whole register of an A2 scene. A lookbehind fixes
it. Invariants §1 records four ways a false-positive guard has already been deleted
here; that is the fifth avoided.

## 13. Device verification, and the two defects it found

**Full pass on a Pixel 6** (21041FDF600BMN), Metro 8082, bundle pre-built on the
host (200, 23.4 MB). The device already held the A2 entitlement, so nothing was
written to its database.

**Verified on screen:** the lesson overview card; the lesson cover (where `intro`
is drawn a SECOND time — the surface a2.11 was caught on); the missions list, all
24 with their mechanic labels; mission 1 end to end (setting card, bubbles, stage
directions, the choice with BOTH branches and their followUps, the break card);
mission 3's cardDeck; **mission 9, the Owns screen**, and its row detail sheet with
audio; the reference sheet and all three of its tables; the resume interstitial.

Host half also done: the served bundle contains all twelve new strings I checked
for and none of the three that must not be there (`Je vais manger.`, `appartenir`,
the doubled stop).

**Defect 1 → v3. A lowercase term name opening a sentence.** Term names are
lowercase by house convention and `what comes next decides` is interpolated in
seven places; five had it at the start of a sentence. The row detail on the Owns
screen read *"…the same de as the row above. what comes next decides, and there is
no third possibility."* That reads as a typo, not as a quoted term. Every host gate
was green: the string is legal, the term is declared, the density is fine.
Reworded in all seven, and a guard now checks the declared term names specifically
— scoped to term names because the obvious version fired on six legitimate lines
(`venir and tenir are one shape`, `vais is on its own`).

**Defect 2 → v4. The break card's own Continue below the fold on first paint.**
The exact failure a2.01 took three device passes to clear (ledger §7). The body ran
to 33 words against a ~26 budget and the right-hand reading row carried both `ipa`
and `respell` on a sentence that already wrapped to two lines. `ipa` is REQUIRED by
the schema, so the sentence was the only line left to save: the reading rows now
carry the verb phrase alone (`Je mange.` against `Je viens de manger.`) rather than
repeating the shared « Non merci, ». That is a teaching fix as well — printing the
identical refusal twice compared two things that do not differ — and the right row
is now `fr.a2.verbes.279` word for word, so its respell is the corpus respell
rather than a hand-typed copy. Re-verified: Continue sits well above the fold.

### What I did NOT verify on the device, by name

Missions 4 to 8 and 10 to 24 were not opened individually. That means the
`groupDrill` checks, the `trapDrill`'s four steps and its gate, the dictée's
fifteen tiles, the scenario's five turns, the reading passage and its glossary
underlines, the review deck and the quiz were **not** seen on a screen. All are
covered by host-side assertions (the glossary through the real `segmentSentence`,
the dictée through the real `dicteeMode`, the quiz through the real
`matchesAccept`), but none of those can tell me whether a card fits.

**One observation, not a defect.** The sheet's tables are four columns wide and the
last column is off-screen on first paint on a Pixel 6. They scroll horizontally and
nothing is lost — confirmed by swiping to reveal the full `tenir` column — and
a2.11's `sheet-three-groups` ships the same shape. Worth knowing before anyone adds
a fifth column.

## 14. Anything else I could not verify

- **No audio was rendered.** `CLIP_MANIFEST` is empty by design and every card
  falls back to device TTS. The six `recorded` specs carry real `recordingId`s and
  the two that pull in OPPOSITE directions (`rec-a2-02-twojobs` must be
  indistinguishable in its first four words; `rec-a2-02-tot` must be audibly
  different) are pinned by a test, because that constraint becomes invisible the
  moment a clip is delivered. `pnpm audio:render` was not run.
- **The four imported sentences were not re-verified against a2.10's own tests.**
  My merge writes them back from a recorded read and the untouched-rows check
  proves it does not edit any row it does not own, but I did not re-run a2.10's
  test file specifically. The full suite is green, which covers it.
- **`elles viennent` and `elles tiennent` are authored nowhere**, here or anywhere.
  a1.05 taught that `ils`/`elles` share a form and the paradigm prints
  `ils · elles`, so this is deliberate — but no corpus row shows the feminine
  plural of either verb, and the corpus had none before this build either.

## 15. Wiring

```
scripts/_a202_probe.ts                   discovery
scripts/_a202_manifest.ts                the recorded read
scripts/data/aller-venir-rows.gen.ts     generated, do not edit
scripts/data/aller-venir-corpus.ts       29 authored rows, single source of truth
scripts/data/aller-venir-terms.ts        the reframe, WHAT_FOLLOWS, nine terms
scripts/data/aller-venir-imported.ts     the ten carried + the one read
scripts/data/aller-venir-lesson.ts       24 missions, six acts
scripts/author-aller-venir-batch.ts      content:aller-venir
scripts/merge-aller-venir-into-seed.ts
ealch-v2/src/content/a2-02-aller-venir.test.ts    60 tests
```

**There is no `aller-venir-display.ts`.** a2.11 needed one because six of its seven
imported rows were repaired, so the manifest's recorded value and the value on the
screen differed. This build repairs nothing, so the stored value IS the displayed
value and a second function standing between them would be a place for them to
drift. `verbRespell()` lives in `-imported.ts` and reads the row directly.

## 16. For the ledger

Nothing in `A2-BATCH-1-LEDGER.md` needed amending. The block held, the row count
matched its figure exactly, and every §5 decision was inherited without departure:
bare infinitive headwords, sentences-only corpus rows, `je · tu · il · nous · vous
· ils`, a2.01's `nous`/`on` wording verbatim in one home, and the enum-array cast
kept in the batch even though `DRILL_ADDITIONS` is empty.

**Two things for `A2-BRIEF-CORRECTIONS.md`, if it is updated:**

- §6's account of the nasal checker's blind spots is incomplete. There is a THIRD:
  a doubled `nn`/`mm` in the French spelling short-circuits `hasPlainNasalFor` to
  false regardless of the respelling (`density.logic.ts:215`). It is correct
  behaviour and it means the checker cannot police those words at all. `viennent`,
  `tiennent`, `prennent`, `connaissent` and `apprennent` are all this shape — which
  matters for a2.15 at seq 9.
- §10 should record that `\b` must not be used at either end of a guard regex that
  touches an accented character. Invariants §0 says it for search terms; it is
  equally true of a structural guard, and this build shipped one that never fired.
