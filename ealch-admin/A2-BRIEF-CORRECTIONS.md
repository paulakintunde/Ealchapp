# A2 brief corrections

**Read this after `A2-BUILD-DOCTRINE.md` and `A1-BUILD-INVARIANTS.md`, and before
your own brief. Then read your brief knowing which of its sentences are already
known to be wrong.**

Five A2 lessons have shipped: `a2.01` (seq 1), `a2.09` (seq 2), `a2.10.l1` (seq 3),
`a2.10.l2`, `a2.11` (seq 4). Between them they measured **twenty-one brief claims
false**:

```
a2.01   6   verbes-er-corpus.ts header, items 1 to 6
a2.09   5   A2-09-BUILD-REPORT.md §2
a2.10   5   A2-10-BUILD-REPORT.md §3.1 to §3.5  (§3.6 is a ledger error, not the brief's)
a2.11   5   A2-11-BUILD-REPORT.md §3
```

**Almost all of them are one of the shapes in §1 to §7 below.** Not one of the five
builds found a brief wrong about *teaching*; every failure was a fact about the
corpus, the app or the curriculum that nobody had measured when the briefs were
written in one pass.

The per-lesson briefs were written in one pass, before any corpus measurement
existed. They are good on teaching and unreliable on facts. This file is the
delta, measured, with the evidence attached. Where a claim is now settled it is
settled for the whole level and your brief's version of it is superseded.

> **What this file is not.** It does not repeat the doctrine or the invariants,
> and it holds nothing lesson-specific. §11 holds the measurements for all sixteen
> undeveloped lessons, so you do not spend your first hour rediscovering them.

`*.md` is gitignored here. `git add -f` anything you write.

---

## §1. Your identity block is swapped. All sixteen of them are.

**Measured 2026-08-12 for every remaining unit. Not one brief has it right.**

Four briefs in four got this wrong, and it is now confirmed for the other sixteen
by reading `content_units` directly. The pattern is always the same: the brief's
`title` is the database's `sub`, and the brief's `sub` **does not exist anywhere in
the database**.

```
a2.02  brief sub: "the going & coming family"
       db    sub: "Irréguliers 1 : aller, venir, tenir"
       db  title: "Irregular Verbs 1: Aller, Venir, Tenir"
```

**Take your identity block from §11 of this file, or from the probe's unit dump.
Never from your brief.** Several brief `sub` values also carry an em dash, which is
banned in every user-facing string.

`canDo` is the one field the briefs usually get right: `a2.11`'s matched byte for
byte. Check it anyway; it costs one line.

**`seq` is a NUMBER**, not a string. `corpus:probe` stringifies it when it prints,
which is how the ledger came to record it wrongly. Nothing depends on it because
every consumer goes through `String(unit.seq)`.

**Every remaining unit has `lessonIds: []`.** Measured, all sixteen. Unlike `a2.01`
— which the brief said was empty and which actually held a pre-v2 stub — you are
building greenfield and your version counter starts at 1. That is now a fact
rather than an assumption, so do not spend a probe on it.

---

## §2. The vocabulary already exists. You will author almost no headwords.

**Five builds. Five that authored NOT ONE INFINITIVE.**

```
a2.01   30 verbs   30 imported   0 authored
a2.09   17 rows    17 imported   0 authored
a2.10   10 verbs   10 imported   0 authored
a2.10.l2 12 verbs  12 imported   0 authored
a2.11    7 verbs    7 imported   0 authored
```

Every brief said some version of *"probe whether these exist"*, and every time the
answer was "yes, several times over, in themes you did not think to look in".
`a2.01`'s brief said eight infinitives had been placed; forty-four had.

**§11 has the count and the id for every headword the remaining sixteen briefs
name.** Across all of them there are **six absences**, and three of them belong to
one lesson:

```
sportif · sportive     a2.03
Londres                a2.04
remettre               a2.15
battre · combattre     a2.15   ← the unit is titled after battre
il y a                 a2.18   (a phrase, not a headword; expected)
```

**`a2.15` is the first A2 lesson that will have to author its own infinitives.**
Everyone else imports.

Two consequences that have bitten:

- **Import from the row with a home in your theme, a respelling, and NO `gender`.**
  A gendered single-word row joins a1.03's measured ending population and moves
  twenty printed figures in `a1-03-genre.test.ts`. §11 flags the gendered rows.
- **`corpus:probe` does not strip or add accents.** Probe `préférer`, not
  `preferer`, or you will be told a word that exists is absent.

**Do not run `pnpm content:verbes`.** `author-verbes-batch.ts` declares
`fr.a2.verbes.016 = 'les devoirs'` and `.019 = 'le vélo'` while Postgres holds
`rentrer` and `demander` there, and it upserts by id. Ledger §0.

---

## §3. The corpus has forms and no minimal pairs. You will author your paradigm.

**Five builds, five times, without exception.** This is the most reliable single
prediction in this file.

The corpus is full of the forms you want. It contains no two sentences that differ
by one thing. Every published sentence was written for its own theme and carries
its own object, so comparing two of them compares their subject matter as well as
the thing you are teaching.

```
a2.01   je parle 12 · nous parlons 7 · ils parlent 3      authored all 5 paradigm rows
a2.09   nous mangeons 30 · je préfère 40 · je jette 0     authored all 26
a2.10   nous choisissons 9 · vous finissez 0              authored all 6
a2.11   il vend 3 · je vends 0 · tu vends 0               authored all 6
```

**And the forms that are missing are the ones you need.** In three of the four the
zero-count forms were precisely the ones the lesson existed to teach. `a2.11` found
that two of the three members of its headline triple do not occur once in 27,499
published sentences.

So: **budget for authoring your whole paradigm in one frame**, and pick the frame
word by §4 rather than by taste. Reusing a published sentence for one cell of a
paradigm is almost always wrong; `a2.01` is the only build that did it and only
because `fr.a2.verbes.001` happened to fit exactly.

---

## §4. `dicteeMode` picks your frame word, and it is a hard limit

`dicteeMode()` switches to WORD tiles above **16 letters**, and word mode hands
every real word over pre-spelled. **A lesson about a spelling can only be tested in
LETTERS mode.** So every row you want in the dictée must be ≤ 16 letters, and that
constrains the frame word before any other consideration.

```
Il finit tôt.            15   letters   a2.10 chose tôt for this reason
Ils finissent le travail. 21  words     rejected
Ils vendent ici.         13   letters   a2.11 chose ici
Ils vendent des fruits.  19   words     rejected
Ils partent tôt.         13   letters   a2.10.l2 reused a2.10's tôt deliberately
```

Prove it through the real `dicteeMode` in your batch, not by counting characters
by hand. And **reusing a neighbour's frame word is a feature**: `Il finit tôt.`
beside `Il part tôt.` is a cross-lesson claim in two sentences.

---

## §5. What the app cannot test. This reshapes your quiz, not just a footnote.

Measured through the real functions, and it has changed two lessons' whole format
mix.

**No typed, spotted or assembled surface can test an accent or a cedilla.**
`fold()` in `answer.logic.ts` normalises to NFD and strips every combining mark;
`normalizeFr()` in `score.ts`, which is what the DICTÉE and the speech recogniser
compare with, does the same.

```
commençons == commencons        préfère == préfére == prefere
```

A typed question turning on a diacritic **accepts the mistake and tells the learner
they spelled it right**, which is worse than not asking. Only `mcq` and
`listenChoose` can test one, because their options are picked rather than typed.
`a2.09` lost the single most useful production question in its lesson to this and
wrote it as an mcq instead.

**`fold()` also cannot test a capital letter or a space.** `errorSpot` runs the
same path as `typeIn`; both the a1.08 and a1.09 briefs recommended `errorSpot` for
a capital and both were wrong. It **does** keep a final `-e` and `-s`, so agreement,
a doubled consonant and an inserted letter are genuinely testable.

**No ear question may ask between two forms that are one sound.** A `listenChoose`
offering two members of one homophone group has no correct answer and marking one
right certifies a bug. `a2.10` and `a2.11` both enforce this with a
`HOMOPHONE_FORMS` list rather than reporting it, because a sentence in a report
cannot fail. Copy the shape:

```ts
// fires only when two options differ ONLY by a member of one group, so
// « Il vend ici. » against « Je vends ici. » stays legal: the pronouns differ
if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(...)
```

**`practice` with `skill: 'write'` draws no writing surface.** The only surfaces
that make a learner produce are `typeIn`, `errorSpot`, a `groupDrill` check and the
dictée.

**Say which questions you wanted and could not write.** `a2.09` §"Questions I
wanted and could not write" is the model.

---

## §6. The nasal checker is blind to more than the invariants say

> **AMENDED BY §14.** The two-table split this section prescribes is by ROW and
> the shape it needs is by NASAL: a word with a nasal stem AND a nasal ending
> carries one of each kind in ONE string, so it belongs in both tables at once.
> Read §14.1 before you build the table, not after. It matters most for the rows
> §11 hands the participle block.

`A1-BUILD-INVARIANTS.md` §3 records two blind spots. `a2.11` measured the first one
properly and it is **much wider than "word-internal"**.

Every superscript in the lesson was broken back to a plain `n`, one at a time, and
the checker asked whether it noticed: **25 seen, 11 missed.** The eleven have one
shape between them:

> **A nasal followed by any consonant inside the token.** `hasPlainNasalFor` needs
> the `n` or `m` to END a space-delimited token.

That is not a corner case for a verb lesson. Every regular `-RE` stem ends in `d`,
so every plural form and every infinitive was invisible. **§11 flags the same shape
in `prendre` (`PRAHNDR`), `comprendre` (`kohn-PRAHNDR`), `lentement` (`lahnt-MAHN`),
`monter` (`mohn-TAY`), `tomber` (`tohn-BAY`), `entrer` (`ahn-TRAY`) and a dozen
more** that the remaining lessons will import.

**`entendre` is the whole problem on one row.** `ahn-TAHNDR` **is** flagged, because
its first nasal ends a token; `ahⁿ-TAHNDR` is **not**, because its second does not.
Repairing what the checker reports produces a value it then calls clean and which
is still wrong.

### This breaks the repair guard you will inherit

`a2.10`'s guard requires the stored value to be flagged before it accepts a repair.
That is right for a variant somebody is about to overwrite (invariants §9) and it
**rejected four of `a2.11`'s six legitimate repairs**. Split the table:

```
RESPELL_REPAIRS_VISIBLE     the checker flags `from`. Guard through the function,
                            exactly as a2.10 does.
RESPELL_REPAIRS_INVISIBLE   the checker does NOT flag `from`. Guard the opposite
                            way: `from` must be unseen, `to` must be unseen, `to`
                            must carry the superscript, and assert it BY NAME.
```

And assert the blindness itself as a negative, so the day the checker improves you
find out rather than carrying a dead by-name list.

**The other blind spot — the false positive on a real /n/ — is real but rarer.**
`a2.10` met it on `la semaine`; `a2.11` tried four candidates and met it on none,
and said so rather than leaving a silence. Look for it, and report the absence if
you do not find one.

---

## §7. "No unit owns X" is usually an artifact of the query

**This corrects a claim `a2.10` and `a2.11` both made, including mine.**

A curriculum unit body holds nine fields and **no content manifest**:

```
id · seq · title · sub · canDo · level · track · lessonIds · prereqUnitIds
```

So searching all 76 unit bodies for a word returns nothing for almost every word in
the language. Running that query and reporting "no unit at any level owns
`descendre`" is technically true and close to meaningless: `a2.21`'s canDo is *"Can
pick être as the auxiliary where French requires it and agree the participle"*,
which covers `descendre` by topic without naming it.

**The ownership question can only be answered three ways, in this order:**

1. **Read the brief files.** `A2-<ID>-<TOPIC>-PROMPT.md` is where scope actually
   lives. Twenty of them exist.
2. **Read shipped lessons' `grammarIntroduced`.** That field is addressed to the
   curriculum and says what a lesson claims to have taught.
3. **Then, and only then**, the unit-body search — and only for a term that WOULD
   appear in a title, a sub or a canDo if the unit owned it.

`a2.10`'s hole was real because it passed that test: it searched for `-ir` and
`iss`, which a unit owning the class would have named, and cross-checked the
briefs. **`a2.11`'s `descendre` finding did not pass it and is softer than the
report implies.** Do not repeat that shape.

**What §11 does confirm**: every hand-off target unit **exists**, at the seq its
brief claims, with a canDo that covers the topic. Cite the unit by id and move on.

---

## §8. Layout facts that have already cost a build each

- **A `table` at layer `core` is a `table-in-core` density failure.** `a2.01`'s
  brief asked for one in the flow; it is impossible. The in-flow version is a
  `tapTable` and the full table lives in a reference sheet.
- **`tapTable` is not in `ownsLayout()`**, so it renders inside a scrolling page.
  Six rows is the ceiling on a Pixel 6; `a2.11` used three and had room to spare.
- **A `sheetId` resolves only inside the lesson that declares it**
  (`schema.ts:3490`, `lesson-contract.test.ts:91`). **Cross-lesson sheets do not
  exist.** `a2.11`'s brief asked it to extend `a2.01`'s sheet; that was never
  possible at any price. If your sheet would only restate a pattern that already
  has one, ask what it holds that the earlier ones could not.
- **One quiz per lesson.** A second `quiz` section is silently never rendered.
- **`commonErrors` needs `swipe: true`** or it draws a blank screen.
- **Quizzes shuffle, missions do not.** `MissionRich` renders authored order, so
  hand-randomise in-mission and never in the quiz.
- **Three term chips per section.** The renderer shows three.
- **`cheatSheet` inside a reference sheet draws its title and nothing else.**
  `ReferenceSheet.tsx` draws `teach`, `letterGrid` and `table` and nothing else.

---

## §9. The guards you will copy have two holes in them

Both found by mutation-testing, both after the lesson had already been applied.

**The jargon walk does not read `intro`.** `a2.01` through `a2.11` all build their
learner-surface string as `sections + sheets + terms`. **`Lesson.intro` is drawn on
the lesson overview card AND the lesson cover**, and `a2.11` shipped the phrase
"third person" there in v1 while the same `JARGON` list had already caught and
reworded four other occurrences inside the body. Every host-side gate was green;
only a Pixel 6 found it.

```ts
const learnerText = [
  ...strings(L.sections), ...strings(L.sheets ?? []), ...strings(L.terms ?? {}),
  L.intro ?? '', ...strings(L.overview ?? {}),          // ← add these two
].join('\n');
```

Widen it in the batch, the merge **and** the test, and pin `intro` in its own
assertion so a later author who trims it back fails with the reason. Do **not** add
`grammarAssumed` or `grammarIntroduced`: invariants §8 says those are addressed to
the curriculum and may use the precise words.

**A source that throws silently disables half your test file.** Every A2 test wraps
its source import in `try { … } catch {}` and skips ~30 source-derived assertions
when it fails. That is right for a checkout without `ealch-admin` and wrong for a
broken build. Tell the two apart:

```ts
const MISSING = new Set(['ERR_MODULE_NOT_FOUND', 'MODULE_NOT_FOUND', 'ENOENT']);
const srcMerelyAbsent = !!SRC_ERROR && MISSING.has((SRC_ERROR as {code?:string}).code ?? '');
test('the source either imports or is genuinely absent', () => ok(SRC || srcMerelyAbsent, ...));
```

**Mutation-test everything, and expect two of your mutations to find a weakness
rather than confirm a strength.** That is the measured rate: `a2.10.l2` had two of
eleven do it, `a2.11` one of thirteen. A mutation caught only by the batch and not
by the test is a hole in the test.

---

## §10. Process facts that are settled

- **The id block: the maximum is now useless.** `a2.10.l2` took `.461..500`, above
  the whole batch-1 reservation, so `max(id)` has been past every remaining block
  since before any of them was claimed. **The row COUNT is the only signal.** Check
  it before and after; it must be `before + exactly what you applied`.
- **The seed is a CUT and your merge must carry imported rows.** `verbes` shows 119
  in the seed and holds 494 in Postgres. `a2.11` found that **neither** of the two
  rows its lesson leaned on hardest was in the seed. A lesson whose itemIds resolve
  to nothing renders empty cards.
- **Order: Postgres first, seed second.** `content:publish` regenerates the seed
  FROM the database.
- **Never `git checkout seed.json`.** Re-run the merge scripts.
- **A guard firing on your own content is the guard working.** `a2.09` shipped
  `commencions` — the imperfect — as a distractor, its own tense guard went red,
  and the version counter moved rather than the guard being relaxed. Do the same.
- **Move the version counter rather than correcting under the same number.** Two
  different bodies under one version is the drift this project has lost work to
  twice.
- **`content:publish` works and is no longer blocked.** The `sons.09.l1` hazard the
  doctrine records is resolved; `content:parity` reports one pre-existing
  divergence (`b2.01.l1`, database-only, `in_review`) and says nothing is at risk.
  Publishing is still not part of a lesson build unless you are asked.
- **A device pass is not optional and it finds things.** The host half was
  completely green on `a2.11` while `intro` said "third person" on two screens.
  If adb is unreachable, do the host half and **name the gaps**.
- **Device navigation**: the resume interstitial swallows the first tap; horizontal
  swipes drift because deck sections eat them; the reliable route is the missions
  list; inside a `render: 'screens'` scene the beats advance on the card's own
  Continue, not the pager's Next. The deep-link scheme is `ealch://` for routes and
  `exp+wonerock://` for the dev launcher.

---

## §11. The measurements, for all sixteen remaining lessons

Taken 2026-08-12 against Postgres by `scripts/_a2_preflight.ts`. **Re-run it if you
are reading this more than a few days later**; it is one command and it prints
everything below.

### Identity blocks, byte for byte

```
unit    seq  title                                         sub
a2.02    5   Irregular Verbs 1: Aller, Venir, Tenir        Irréguliers 1 : aller, venir, tenir
a2.12    6   Irregular Verbs 2: Faire, Dire, Lire          Irréguliers 2 : faire, dire, lire
a2.13    7   Irregular Verbs 3: Vouloir, Pouvoir, Devoir   Irréguliers 3 : vouloir, pouvoir, devoir
a2.14    8   Irregular Verbs 4: Savoir and Connaître       Irréguliers 4 : savoir & connaître
a2.15    9   Irregular Verbs 5: Prendre, Mettre, Battre    Irréguliers 5 : prendre, mettre, battre
a2.03   10   Adjective Agreement                           L'accord des adjectifs
a2.16   11   Beau, Nouveau, Vieux                          Beau, nouveau, vieux
a2.17   12   Adverbs                                       Les adverbes
a2.04   13   Prepositions of Place, in Depth               Prépositions de lieu
a2.18   14   Prepositions of Time                          Prépositions de temps
a2.19   15   The Near Future                               Le futur proche
a2.05   16   The Passé Composé with Avoir                  Le passé composé avec avoir
a2.20   17   Irregular Past Participles                    Participes passés irréguliers
a2.21   18   The Passé Composé with Être                   Le passé composé avec être
a2.22   19   Pronominal (Reflexive) Verbs                  Les verbes pronominaux
a2.23   20   Pronominal Verbs in the Passé Composé         Pronominaux au passé composé
```

Every one has `lessonIds: []`. The `canDo` values are in each prompt's own
identity block, corrected in place.

### Headwords: what exists

Full output in `scripts/_a2_preflight.ts`. The summary that matters:

**Everything exists except six.** `sportif`, `sportive` (a2.03), `Londres` (a2.04),
`remettre`, `battre`, `combattre` (a2.15), and `il y a` (a2.18, a phrase). Import
the rest.

**Rows carrying a nasal the checker cannot see**, which the remaining lessons will
import and must repair by name:

```
prendre      PRAHNDR            comprendre   kohn-PRAHNDR
apprendre    ah-PRAHNDR         surprendre   sür-PRAHNDR
descendre    day-SAHN-druh      entrer       ahn-TRAY
monter       mohn-TAY           tomber       tohn-BAY
lentement    lahnt-MAHN         constamment  kohns-ta-MAHN
rapidement   ra-peed-MAHN       la France    LAH FRAHⁿSS / la FRAHNS
```

`fr.sons.consonnes.107` already holds the correct `PRAHⁿDR`, so the house form is
in the corpus and you are bringing a theme into line rather than inventing one.

### Themes

```
verbes                494 published    fr.a2.* 226 rows, max .486
verbes-essentiels     535 published    fr.a2.* 60 rows, max .060
routines              339 published    fr.a2.* 65 rows
temps-et-frequence    310 published    fr.a2.* 108 rows
adjectifs               0              THEME DOES NOT EXIST
adverbes                0              THEME DOES NOT EXIST
pays · lieux · temps    0              THEME DOES NOT EXIST
```

**`adjectifs` and `adverbes` do not exist**, so `a2.03`, `a2.16` and `a2.17` cannot
inherit one. The doctrine §D tells you to probe them and the ledger §3 says the
decision is not made. It is still not made. **Creating a theme is product-visible in
the flashcard hub and the Den; probe what `a1.14` and `a1.16` actually used and
amend the ledger before authoring.**

> **CORRECTED BY §14.2, AND THIS PARAGRAPH HAS MISDIRECTED TWO BUILDS.** It is
> true of those exact strings and its conclusion is false. `adjectifs-essentiels`
> holds 645 published rows and `adverbes-essentiels` holds 325; `a2.03` and
> `a2.17` both inherited a live suffixed theme and neither created one. **Probe
> the SUFFIXED name before believing an absence.**

---

## §12. What to report, in addition to doctrine §F

- **Every claim in your brief you measured false**, with the measurement. The rate
  across five builds is three to six per lesson and it has not fallen.
- **Anything in THIS file you found to be wrong or stale.** It is measured, not
  eternal, and the corpus moves.
- **Which of your mutations found a weakness rather than confirming a strength.**
- **Which half of the device verification you did**, and the gaps by name.

---

## §13. What a2.15 found wrong or incomplete in THIS file

§12 asks every build to say what in here it measured wrong. a2.15 found three
things, all in §2, and one addition to §6.

**§2's absence list is INCOMPLETE, in both directions.** It records six absences
for the whole level and gives a2.15 three of them. Measured 2026-08-12 against
every row at every status:

```
also ABSENT and not listed:   reprendre · débattre · abattre
listed as absent, and EXISTS: (none)
NOT listed, and it EXISTS:    admettre   fr.b1.verbes.086, ad-METR, published
```

`admettre` matters, because a2.15's brief names it as one of the two compounds
the exam should give cold, and a build reading §2 would conclude it had to author
it. It must not: it exists, and importing it would delete the mission.

**§2's "you will author almost no headwords" is right for five builds and wrong
for a2.15, which §2 itself predicts.** Worth restating with the measurement:
a2.15 authored THREE infinitives, and `battre` was in its unit title.

**And "absent" is not the same as "nowhere".** `battre` and `combattre` exist as
infinitives inside four published phrases, one of which respells `battre` as
`BATR`. So the house respelling for a verb with no headword was READ OFF a
published row rather than invented. Probe for the word inside a phrase before
concluding a respelling has to be made up.

**§6 has a third shape to record, and it is not about the respelling either.**
`hasPlainNasalFor` is not the only guard with a boundary problem. The JARGON
check every build in this band runs uses `hasPhrase`, which is boundary-exact, so
a list holding `paradigm` does not catch `paradigms`. a2.15 shipped an act title
reading "Three paradigms, eighteen cells" past all three of its layers and it was
found on a Pixel 6, on the resume interstitial. a2.14's list works round it one
word at a time (`infinitive`, `infinitives`). Check the `-s` plural of every
entry.

**And §9's list of holes in the guards you will copy gains a third.** `prose()`
drops NOTATION_KEYS, and `sub` is on that list because on most cards it holds a
respelling. On a `cardDeck` card `sub` holds PROSE, so the house-copy and jargon
checks never see it. a2.15 v1 put a banned word in one and only the seed-wide
`sons-alphabet.test.ts` caught it. Run those checks over a `display()` walk as
well, which keeps `sub` and drops only machine keys.

---

## §14. What a2.17 found wrong or incomplete in THIS file

§12 asks every build to say what in here it measured wrong. a2.17 found two
things that have already cost a build each, plus a fourth hole in §9 and one
piece of advice this file does not give and should.

### 1. §6's SPLIT IS BY ROW AND THE SHAPE IT NEEDS IS BY NASAL

§6 tells you to split the repair table two ways — `RESPELL_REPAIRS_VISIBLE` for
rows the checker flags and `RESPELL_REPAIRS_INVISIBLE` for rows it does not — and
to guard each the opposite way round. **That is a split by ROW, and it assumes a
row holds one nasal.**

A word with a nasal stem AND a nasal suffix holds two, one of each kind, in one
string. Measured through the real `hasPlainNasalFor`:

```
lentement    lahnt-MAHN    FLAGGED       the final MAHN ends a token
             lahnt-MAHⁿ    NOT flagged   and `lahnt` is still wrong
             lahⁿt-MAHⁿ    NOT flagged   and correct
```

A row like that belongs in BOTH of §6's tables at once. An author following §6
literally files it under VISIBLE, repairs what the checker reported, gets a clean
report, and ships a wrong value. §6 does describe this effect — but only about
`entendre`, as a curiosity. **It is the general case for any two-nasal row.**

**AND §11 HANDS THE PARTICIPLE BLOCK EXACTLY THOSE ROWS.** Its own import list
holds `comprendre kohn-PRAHNDR`, `descendre day-SAHN-druh`, `monter mohn-TAY`,
`tomber tohn-BAY`, `entrer ahn-TRAY`. `kohn-PRAHNDR` is MIXED, not blind: `kohn`
ends a token so the checker sees it, and `AHNDR` is nasal-then-consonant so it
does not. §6 currently calls rows like that "blind", which is half right and
produces exactly the half-repair above. a2.05, a2.20 and a2.21 are next.

**The shape that works:** one table, and every entry carries the value you get by
repairing ONLY what the checker reports. Assert all three through the real
function — stored is flagged, half is not, final is not — and assert
`half !== to` on the mixed rows by name, so the day the checker improves you find
out instead of carrying a dead list.

**And it needs a THIRD reason, which neither §6 nor a2.11 has.** a2.17's first
table used one boolean for "half is not the final value" and the batch caught the
conflation immediately, on `bien`:

```
bien   BYAN    FLAGGED, so nothing about it is blind
       BYAⁿ    the minimal repair, and not the house value
       BYEHⁿ   the house value, which four published rows already hold
```

Two different reasons for one symptom: a nasal the checker cannot see, and a
house convention the minimal repair does not reach. Keep them as separate,
mutually exclusive fields and assert `(half !== to) === (blind || house)`.

### 2. §11's THEME TABLE IS TRUE OF THE STRINGS AND FALSE OF THE CONCEPT

§11 lists:

```
adjectifs               0              THEME DOES NOT EXIST
adverbes                0              THEME DOES NOT EXIST
```

and concludes **"`adjectifs` and `adverbes` do not exist, so `a2.03`, `a2.16` and
`a2.17` cannot inherit one."**

Every word is true of those exact strings and the conclusion is false:

```
adjectifs-essentiels   645 published
adverbes-essentiels    325 published, 120 of them adverb headwords
```

**That sentence has now misdirected two builds.** a2.03 found the first and
amended ledger §3; a2.17 found the second and overturned the block §3 then
reserved for it. Both lessons inherited a live suffixed theme and neither created
one.

**So: probe the SUFFIXED name before believing an absence.** `X` holding zero
rows says nothing about `X-essentiels`, and this corpus names its vocabulary
themes with the suffix. The bare names in that table are dead; the suffixed ones
are where the corpus lives.

### 3. §9 GAINS A FOURTH HOLE: THE HOUSE BOUNDARY EXCLUDES AN APOSTROPHE

Every guard in this band uses the same word boundary:

```
(?<![\p{L}\p{N}'’-])   ...   (?![\p{L}\p{N}'’-])
```

**It excludes `'`, so a shape using it cannot see `j'ai`, `n'est`, `qu'il` or
`c'est`.** a2.17 wrote a guard to keep the passé composé out of a lesson four
seq positions ahead of the tense, and it could not see « j'ai bien mangé », which
is the exact phrase its own brief names. Only its MUST_FIRE list caught it.

If your guard has to see anything after an elided article or pronoun, drop the
apostrophe from the left boundary and keep it on the right.

### 4. AND A SHAPE BUILT OUT OF FRENCH MORPHOLOGY WILL FIRE ON THE ENGLISH

Half of a learner surface is English by design (invariants §8), and the two
languages share enough letters that a shape built from French endings reads the
English as French. a2.17's compound-tense guard matched:

> "You did not stall ON A WORD YOU had not learned."

`on` is a French subject pronoun, `a` is a French auxiliary, and `you` ends in a
u. **This is a2.14 §6 in a new place: guard the THING rather than the letters.**
The version that works requires a French subject pronoun AND a participle from a
list. Put the English sentence that broke it in your MUST_NOT_FIRE list, because
the next author will write the same shape.

### 5. `adverb` AND `adjective` ARE NOT JARGON, AND THIS FILE SHOULD SAY SO

Invariants §8 bans grammar jargon from a learner surface and does not say where
the line is, so builds guess, and a2.17's first JARGON list guessed wrong and
banned `adverb`. Measured across all 53 shipped lessons' learner surfaces:

```
verb 2607 · noun 1405 · plural 740 · feminine 350 · masculine 203
adjective 147 · describing word 137 · adverb 3 · adverbs 2
```

`adjective` is on 147 cards, so the part-of-speech names are HOUSE VOCABULARY and
banning one is the build inventing a rule. **What the house actually does is
prefer the plain phrase**: a1.16 runs `describing word` 74 times against
`adjective` 12.

So guard the RATIO rather than the word — the plain phrase must outnumber the
technical one — which also lets `overview.titleEn` stay the unit's own English
name, which `content_units` requires it to match.

### 6. A SECOND SEED-WIDE CONTRACT NO DOCUMENT IN THIS BAND MENTIONS

§9 records that a2.03 was caught by `scenario.logic.test.ts` requiring two `alts`
and a `userEn` on every role-play turn. There is now a second one:
**`lesson-contract.test.ts` requires every A2 `trapDrill` to walk
`rule > cards > audio > drill`**, with `swipe`, an `audio` spec, a `say` and a
GATED drill step. It was added 2026-08-13 after the stacked shape was found on a
device in a2.03 and a2.16, and it caught both of a2.17's traps.

**a2.16 is the lesson a2.17 copied**, so the model carried the defect and the
rule forbidding it landed in between. Two more things that test does NOT check
and the ledger sweep does: `size` comes OFF a stepped trapDrill, and the audio
step plays each card's `fr`, so its `recordingId` must name a take that actually
contains those lines.

**Read the ledger's "The trapDrill shape, swept across seq 1..11" before you
author one.**

---

## §15. What a2.08 found wrong or incomplete in THIS file

§12 asks every build to say what in here it measured wrong. a2.08 found one
thing that is not about the corpus at all, three holes to add to §9's list, and
one correction to a per-lesson brief that is really a warning about all of them.

### 1. THE PROMPT IS NOT A SOURCE OF FACT ABOUT FRENCH

This file exists because the briefs are « good on teaching and unreliable on
facts », and every §1 to §7 shape is a fact about the CORPUS, the APP or the
CURRICULUM. a2.08 found a sixth kind and it is worse, because measuring the
corpus does not catch it: **a brief can be wrong about the language.**

`A2-08-COMPARATIFS-PROMPT.md` trap 3 reads:

> « `Il est plus grand.` is a complete sentence and it is not a comparison.
> English drops the second term freely; French does not. »

The first clause is right and the second is backwards. `plus` is comparative and
there is no reading on which that sentence means « he is tall » — that is
`Il est grand.` It is a comparison with an ELIDED second term, and BOTH
languages allow that when the other thing is recoverable: « Mon frère ? Il est
plus grand. » and « My brother? He's taller. » are the same move.

**a2.08 repeated it in seven places, one of them a SCORED mcq key**, while its
own corpus row `fr.a2.comparaisons.136` glossed itself « He is taller. » the
whole time. A learner who knew French would have answered correctly and been
marked wrong. Every gate was green: the corpus was measured, the guards fired,
the device pass passed.

**Three of those seven were found by reading and FOUR by the guard written to
stop the other three.** So the practice that works is: when a brief states a
fact about the language, write the guard as a banned-string list anchored on a
corpus row's own gloss, and let it sweep. Do not trust a manual pass, including
your own.

### 2. §9 GAINS THREE MORE HOLES, AND ONE IS IN A GUARD THIS FILE PRESCRIBES

**Hole 5: the lesson restates the corpus and nothing checks the two agree.**
A `cardDeck` card and a `tapTable` cell carry INLINE strings, not itemIds, so
the French on a card is a second copy of the row behind it. Invariants §5 says
the corpus is the single source of truth and the lesson reads it; the renderer
makes that impossible from a content build. a2.08's mutation harness moved
`fr.a2.comparaisons.134` out from under the card displaying it, destroyed the
one thing its required layout existed for, and **every guard stayed green.**
Now covered seed-wide by `production-surface.test.ts`.

**Hole 6: a batch's duplicate-`fr` check runs ONE DIRECTION.** Every batch in
this band compares the authored rows against the rows already in the theme and
never against EACH OTHER. `mieux` and `le mieux`, authored in one batch, both
normalise to `mieux` under the flashcard hub's article-stripping norm and broke
the seed-wide `flashhub-coverage.test.ts` while the batch reported clean.

**Hole 7: nothing checks the TENSE of a production surface.** Doctrine §B.3
permits a CORPUS sentence to use a tense the lesson does not teach. A scenario
turn is not a corpus sentence: it is a line the learner is asked to say, and
`alts` are lines they may say instead. a2.08 asked an A2 learner to produce
« Je dormirais mieux dans le second. » The conditional is B1 and arrives nowhere
in the 35-unit A2 trail. Now covered seed-wide.

**AND A WARNING ABOUT THE SHAPES THIS FILE TEACHES YOU TO WRITE.** a2.08's first
subjunctive guard allowed `\s*` between `que` and the verb, which let the
pattern SPLIT A WORD: `avait` matched as av+ait and `serait` as ser+ait. Both
are shipped content (a2.32's scenario, a2.29's trap), so the guard would have
fired on two lessons the day anyone reused it. §14.4 says guard the THING and
not the letters; this is the same lesson one level down. **Require whitespace,
and put the words your shape could split into MUST_NOT_FIRE.**

### 3. NOTHING CHECKS LIAISON, AND FOUR ROWS SHIPPED WITHOUT IT

`hasPlainNasalFor` looks at nasals. `validateDensity` looks at notation
delimiters. The schema looks at neither. **No layer in this project checks that
a respelling carries a liaison the French requires**, and a2.08 authored every
`est aussi` frame as `eh oh-see`, with the t missing, four times.

The house is unambiguous across 109 respelled rows and writes the moving
consonant ONTO THE FOLLOWING SYLLABLE rather than tying it: `SEH TAHN PAHN`,
`EEL EH TÜN UHR`, `day-zay-koo-TUR`. That is also what avoids U+203F, which
renders as a low underscore on a Pixel 6.

The contexts worth a by-name table in any lesson whose frames create one:
`est` + vowel, `plus` + vowel, `moins` + vowel, `des` + vowel.

**And `plus` is THREE sounds, not two**: silent before a consonant, a /z/ before
a vowel, an /s/ with nothing after it. a2.08 shipped a card calling
`plus intéressant` SILENT. An h aspiré blocks the liaison (`plus haut` is
`PLÜ OH`), which is why the rule is worth stating rather than inferring.

### 4. §11'S THEME TABLE NEEDS ONE MORE COLUMN: THE DRILL POPULATION

§11 gives a theme's published count and its `fr.a2.*` slice. Neither says
whether a row can be SERVED. `comparaisons` splits three ways:

```
.001-.056   dictation ONLY            56 sentences
.057-.112   sentence ONLY             56 sentences
.113-.132   flashcard + voiceflash    17 rows
```

**112 of 129 rows can be served by no deck and spoken by no `practice`.** A
`deckTranche` release of one validates, publishes and draws nothing. a2.31 met
this at eighteen rows and a2.32 at ten; here it is 112. Probe the drill
signature, not just the count, before planning a single tranche.

### 5. A SHEET TABLE HAS A COLUMN CEILING AND NOTHING ON THE HOST KNOWS IT

Three columns on a Pixel 6. a2.08 shipped four and the fourth was **cut off at
the screen edge with no affordance**, because a sheet does not scroll sideways.
`validateDensity` exempts a sheet, the schema takes any number of `cols`, and
the seed is correct either way. Only the phone finds it. Sits beside
`tapTable`'s six-row ceiling in §8.

---

## §16. What a2.35 found wrong or incomplete in THIS file

§12 asks every build to say what in here it measured wrong. a2.35 is the
capstone and the first thing to read all thirty-four lessons at once, which is a
different vantage point from a lesson's: what it found is mostly about the
GUARDS the band copies, not about the corpus.

### 1. §13's `display()` WALK HAS NO DEFINITION, AND A RAW ONE OVER-REPORTS 23 TO 0

§13 hole 3 says `prose()` drops `sub`, which holds prose on a `cardDeck` card,
so run the house-copy and jargon checks over a `display()` walk instead. **It
does not say what a `display()` walk keeps OUT**, and every build since has
written its own, most of them raw.

A raw walk over the shipped A2 band reports:

```
paradigm  13 hits   ALL of them: audio.recordingId `rec-a2-10-paradigm` (x5),
                    sheets[].sections[].id `sheet-endings-paradigm`
clitic    10 hits   ALL of them: a quiz round's targets[] `err-wrong-clitic`,
                    drills[].id `drill-pick-clitic`
```

**Twenty-three false positives and zero real ones.** None of those strings is
drawn anywhere. A guard that fails on correct content is how a build comes to
relax a guard that was working.

`bilan-a2-spread.ts` defines the missing half and it is copyable:

```ts
export const MACHINE_KEYS: ReadonlySet<string> = new Set([
  'id', 'ref', 'refs', 'sheetId', 'itemId', 'itemIds', 'targets', 'drill',
  'retest', 'detectOn', 'sections', 'recordingId', 'audioRef', 'imageRef',
  'clip', 'mode', 'voice', 'lang', 'timing', 'ambience', 'format', 'type',
  'kind', 'outcome', 'glyph', 'practiceOn', 'deckTranche', 'restPoints',
  'features', 'level', 'track', 'unitId', 'tag', 'grammarAssumed',
  'grammarIntroduced', 'scoreSegment', 'ipa',
]);
```

Keeps `sub`, which `prose()` drops. Drops the keys above, which a raw walk
keeps. Pinned by a test that probes all three behaviours.

**And `errorTriggers[].description` is NOT a learner surface.** Only
`{ id, drill, retest }` are ever read, by `quizRounds.logic.ts`; `description`
has no reader anywhere in the product. It is documentation, and a jargon walk
should not include it. a2.24 carries `auxiliary` in one and it is correctly
invisible.

**Related, and it is NOT a leak**: `a2.20.l1`'s `overview.titleEn` is
"Irregular Past Participles". §14.5 makes this point about `adjective`; it holds
for a unit title, which `content_units` requires `titleEn` to match.

### 2. FIVE GRAMMAR WORDS WERE LIVE ON DRAWN SURFACES, PAST FIVE JARGON LISTS

Each passed its own lesson's walk, which means five separate JARGON lists each
happened not to hold the word its own lesson reached for. **Fixed in this
build**, with the version counters moved rather than corrected under the same
number:

| unit | was | now | version |
|---|---|---|---|
| a2.28 `cards[].tip` | "De la is the partitive" | "the article that means an amount" | v1 to v2 |
| a2.28 quiz `why` | "with the partitive a1.29 owns" | "with the de la a1.29 owns" | same |
| a2.05 reading `a` | "a little word you conjugate" | "that changes for the person" | v5 to v6 |
| a2.32 `stats[].v` | "three, one referent" | "three, one device" | v2 to v3 |
| a2.24 quiz `why` | "with the same auxiliary" | "with the same first word" | v3 to v4 |

The house's plain register, measured across the band's drawn surfaces, is what
they were reworded into: `verb` 2026 · `plural` 374 · `noun` 326 ·
`pronoun` 313 · `stem` 264 · `feminine` 214 · `tense` 196 · `naming form` 186 ·
`past form` 175 · `describing word` 99. Those are house vocabulary and banning
one is a build inventing a rule (§14.5).

### 3. THE BAND HAS TWO INCOMPATIBLE HOMOPHONE-GUARD SHAPES

§5 gives one and calls it the shape to copy:

```ts
if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(...)   // SWAP
```

**a2.06 uses a different one** and it is not a variant, it is a different claim:

```ts
const hits = opts.filter((o) => g.some((f) => o === f || hasPhrase(o, f)));
if (hits.length > 1) die(...)                                     // WHOLE-OPTION
```

The swap shape asks whether substituting one member for another turns one
option INTO another. The whole-option shape asks whether two options ARE members
of one group. **A group written for one is dead in the other**, which is how
a2.06's

```ts
["Je l'aime.", "Je l'aime."]      // two identical strings
```

reads as inert to anyone holding §5's shape: a repeated form can never satisfy
`x !== y`. It is not inert. Under a2.06's own shape it says *one string is
ambiguous with itself*, because the elided `l'` carries no gender, and that is
exactly what its own header claims. **It is correct where it lives and must not
be deleted.** It was in an earlier draft of a2.35's report as a defect; that was
wrong and is corrected here.

**AND THE SECOND SHAPE MUST TEST EQUALITY, NOT CONTAINMENT.** a2.06 compares
with `hasPhrase`, which is right THERE because all of its groups hold whole
options. Transplanted onto a union whose groups hold bare forms it refuses
almost everything, because an option merely CONTAINING a member says nothing
about whether the ear can separate it from another:

```
« Je parle français. » against « Tu parles français. »   je and tu differ
« le mien » against « les miens »                        le and les differ
« Three times a day » against « Three at a time »        both contain `a`,
                                                         a member of a2.25's a/à
```

All three are answerable and the containment version refused all three. This is
§14.4 one level down: guard the THING, not the letters. `homophoneClashes` in
`bilan-a2-spread.ts` runs both shapes, the second on equality, with a test that
fires each and asserts the three above stay legal.

**Also: the band names the list five different ways.** Thirteen lessons carry
one, as `HOMOPHONE_FORMS`, `HOMOPHONE_GROUPS`, `HOMOPHONE_PAIRS` (which holds
ITEM IDS), `SUFFIX_HOMOPHONES` (which holds SUFFIXES) and `SINGULAR_TRIPLES`.
Anyone told to "assemble the list from the lessons' own lists" is being asked
for more than one grep.

### 4. EVERY `accept` LIST IN THE BAND CARRIES ENTRIES THAT DO NOTHING

a1.30 and every A2 lesson list an accent-free twin beside the real answer:

```ts
accept: ['Enchanté', 'Enchante']
accept: ['J’ai mangé à midi', 'jai mange a midi']
```

`fold()` strips accents, case, punctuation **and all whitespace** before the
comparison, so both entries are one string. They are not merely redundant: they
make a question LOOK as though it tests an accent, which is the misreading §5
exists to prevent. **85 were written into a2.35 and stripped**; the rest of the
band still carries them and they are harmless, so this is a note rather than a
task.

Worth stealing: assert that no `accept` list holds two entries that fold to one.
It costs three lines and it is the check that finds them.

### 5. "NO TYPED SURFACE CAN TEST A DIACRITIC" IS NOT A BANNED-WORD LIST

a2.35's first version of this guard banned five diacritic-carrying words from
any open-format question, and it fired on « Je préfère celui », a legitimate
`errorSpot` whose correction is `celui-ci` and whose accent is incidental. The
mechanical form is general and has no list in it:

```ts
// An errorSpot whose prompt and answer fold to one string is unanswerable:
// the learner can retype the mistake and be marked right.
ok(fold(q.prompt) !== fold(q.answer), ...)
```

That is what §5's sentence means in code, and it covers the capital and the
space as well as the accent, without naming a single word.

### 6. THREE SCRIPTS IN THIS BAND TAKE THREE DIFFERENT DRY-RUN FLAGS, AND AN UNRECOGNISED ONE WRITES

Measured while re-applying four lessons:

```
--dry-run   author-passe-compose, author-pronoms-indirect, author-bilan,
            merge-passe-compose, merge-pronoms-indirect
--dry       author-medecin, author-technologie
(none)      merge-medecin, merge-technologie      they always write
```

`process.argv.includes('--dry')` is an exact match, so **`--dry-run` passed to a
`--dry` script is silently a LIVE RUN.** a2.35 did exactly that to a2.28 and
a2.32 while intending to dry-run them. The damage was nil, because the write was
the one intended a minute later and both reported `+0` corpus rows, but the next
one will not be so lucky.

**A dry-run flag that is not recognised should fail, not write.** Until the band
is made consistent, read the header comment of the script you are about to run
rather than assuming, and check `const DRY_RUN =` before trusting a flag.
