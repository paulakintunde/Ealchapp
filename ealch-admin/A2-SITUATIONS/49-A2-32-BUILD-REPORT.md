# a2.32 « La technologie » — build report

**Seq 31. The eighth and closing unit of the A2 situations band.** Applied to
Postgres and merged into `seed.json` on 2026-08-16. Not published; publishing is
not part of a lesson build.

```
lesson      a2.32.l1, 23 sections, 6 acts, one quiz of 32 in four rounds
theme       internet          336 -> 373 published  (a2 slice 181 -> 218)
authored    37 rows           fr.a2.internet.182 .. .218
imported    85 rows           by itemId, never copied
seed        internet 0 -> 99  THE FIRST UNIT IN THE PRODUCT TO PULL A THEME ACROSS
tests       4,502 -> 4,561    baseline measured today, not carried
mutation    16 of 16 caught   two holes found and closed before the count reached 16
```

---

## 1. The theme decision, and the probe that closed it

The spine said `themes: ['technologie']`. `technologie` is a **domain**
(`domainMeta.ts:89`), not a theme: absent from the 124 keys in `themeMeta.ts`
and 0 published rows. The collation called this unit the true blocking case.

Probes run 2026-08-16, all five:

| theme | published | a2 rows | in seed |
|---|---|---|---|
| **`internet`** | **336** | **181** | 0 |
| `technologie-quotidienne` | 196 | 70 | 0 |
| `appareils` | 321 | 62 | 0 |
| `rp-technologie` | 421 | 111 | 0 |
| `reseaux-sociaux` | 320 | **0** | 0 |

The settled rule is "author into whichever of `internet` and
`technologie-quotidienne` holds the most published rows". **`internet` wins on
the primary rule by 336 to 196 and the tie-break never fired.** NEXT FREE ID was
`fr.a2.internet.182`, exactly the ledger's allocated block start.

### The before and after of the `themes` array is: nothing. It was already done.

**This is the prompt's largest false claim and it is worth stating plainly.**
§1.1 says the array lives in three places, that this build changes it, and gives
a before/after table. All three already read `['internet']`:

```
author-full-curriculum-spine.ts:839    themes: ['internet']
content_units body->>'themes'          ["internet"]
seed.json units[a2.32].themes          ["internet"]
```

a2.07's build applied the re-map on 2026-08-15 under the collation's blocking
step 2 and recorded it in `07-BAND-ID-LEDGER.md` §2, which also pre-closed this
unit's cell to `internet` on the same measurement. The prompt was written in
parallel and never learned it. **This build changed no spine field at all**, and
the batch now fails if the array has moved back, which is the useful half of the
instruction.

---

## 2. The imperative, used untaught. The finding, not a choice.

Paul answered item 2 on 2026-08-15: **option B, nobody owns it.** Path A was
built, Path B is not in the source in any form.

Act 2 is a **chunk inventory**, not a paradigm. `s04-screen` is *what the screen
says / what it means / what you do*, three columns, six rows. No production rule
is stated, taught, drilled or quizzed; no card says a form is made by deleting
anything; the mood is named nowhere. Three guards enforce the three ways it
could have broken, and the mutation test confirms two of them fire.

### The corpus evidence a B1 slot gets opened against

Measured 2026-08-16 with a subjectless-form pattern anchored at a sentence
boundary, so `Vous prenez` (indicative) never counts:

- **114 published rows carry a `vous`-imperative**, across fifteen themes.
- **ZERO of the 114 sit in any of the five technology themes.** "None of them
  tech" is confirmed exactly.
- **Exactly twelve are headwords** (`kind <> 'sentence'`). The design reported
  twelve for the whole corpus; twelve is the headword slice and 114 is the
  corpus. Both figures are now in `technologie-corpus.ts` §G.

```
fr.a1.dictee.129      Excusez-moi.              fr.a1.salutations.014   Excusez-moi
fr.a1.dictee.131      Répétez, s'il vous plaît. fr.a1.salutations.093   Entrez, je vous en prie
fr.a1.dictee.137      Asseyez-vous.             fr.a1.salutations.094   Faites comme chez vous
fr.a1.dictee.140      Écoutez bien.             fr.a1.salutations.110   Passez une bonne journée
fr.a1.dictee.141      Regardez le tableau.      fr.a2.au-restaurant.063 Prenez votre temps pour choisir.
fr.a1.dictee.144      Prenez un stylo.
fr.a1.dictee.145      Sortez une feuille.
```

**a2.27 does the same thing** and declines the form outright rather than
branching. That is a shared-finding note, not a citation: neither unit depends
on the other. The outstanding fix is a B1 slot, and the spine has no B1 array at
all.

---

## 3. How the three voices were reconciled with the France-primary policy

The Owns is **one referent, three voices**, and all three rungs were already
published, which is what made it teachable:

| voice | form | where |
|---|---|---|
| SYSTEM | `une adresse électronique` | `fr.a2.rp-technologie.012` |
| AGENT | `un courriel` | `fr.a2.internet.002`, +9 more headwords |
| FRIEND | `un mail` | **nowhere.** Authored at `fr.a2.internet.182` |

### How `courriel` was filed, which is the answer the next author needs

**As the AGENT voice, drilled receptively, and never as Quebec colour.** C3 rule
3 covers exactly this and it is the one place in the band where the corpus's
silent Quebec lean and the settled France-primary policy actually touch.

Measured: `courriel` is **82 rows corpus-wide** (73 bare + 9 plural) and **ten
of them are headwords**, not five as the design said. It has been ordinary
French in this corpus since A1. Filing it as an aside would have been the C3
rule 3 error in the other direction, so:

- the **scored** form is always the France spoken standard: `un mail`,
  `un ordinateur`. A guard folds every mcq key, every `accept` entry and every
  dictée target against the four non-standard forms and fails on a match.
- the learner is scored on **recognising which voice a form belongs to**, which
  is a register judgement that works in both countries, never on producing a
  Quebec form on demand.
- `un courriel` carries no `quebec` tag, and a test asserts that.

### The `quebec` tag exists, and this build used it rather than proposing it

The design measured "rows carrying a `quebec` tag: **0**" and the prompt forbids
proposing one because "there is no schema field for region". **Both are stale.**
Eight published rows carry it, and two of them are a2.31's, in this band:

```
fr.a2.ecole.027, fr.a2.ecole.028                 a2.31, 2026-08-16
fr.a2.quebec-et-francophonie.197 .. .202         six rows
```

`tags` is a plain text array. So this build **proposed nothing and added no
schema field**: it followed a precedent set eight rows ago and tagged its three
genuinely regional rows `quebec`. `un mél` is deliberately **not** tagged: it is
the French administrative abbreviation printed next to `Tél.`, not a Quebec
form, and filing it as one would be the same error in miniature.

C3 rule 2's one-Quebec-card cap holds: **exactly one card** names a Quebec form,
`s08-map`'s regional tranche. The first draft had a second on the flashcards
deck (`un téléphone intelligent`) and the guard caught it.

---

## 4. How this ladder was kept distinct from a2.29's, in one sentence

**In a2.29 the three are ordered and you climb them; here they are unordered and
you pick one.**

a2.29's axis is HOW HARD YOU PUSH and its rungs escalate. This unit's axis is WHO
YOU IS LISTENING and nothing escalates: all three are equally polite and two of
the three are simply wrong for the listener. The word "rung" appears in no
authored string here and a test asserts it, because a numbered rung belongs to
a2.07's repair move and a named rung to a2.29's ladder; a third ladder in one
band would mean a learner remembers none.

a2.29 is cited by unit id, three of its rows by `itemId`, and **zero rung rows
and zero softener rows were authored.** No authored string escalates a request:
`parler au responsable` and six other markers are guarded against.

a2.07's six frozen repair rows are cited by id, verified string by string
against Postgres, and **zero repair rows were authored.** The unit teaches the
move's *absence*, which is the sharpest thing about it: seven units taught the
learner to say *pardon ?* and this is the one situation with nobody to say it to.

---

## 5. Mission 18: the second `scenario` shipped, and the check had already run

**The device check ran on 2026-08-16 and passed.** `46-DEVICE-CHECK-RESULTS.md`,
Pixel 6 (oriole), names this unit in terms:

> a2.29 and a2.32 are released. Both may author two `scenario` sections as
> designed. Neither needs a fallback.

It was tested by temporarily promoting a2.28's `s20-pharma` back to the
`scenario` it would have been, in `seed.json` only, and the second scenario was
indistinguishable from the first: rail chip, `setting`, first turn, play control,
`YOUR TURN` rail and mission numbering all correct. `ownsLayout` in
`LessonPager.tsx` handles each section independently.

So the `cardDeck` degradation the prompt held in reserve **was not taken**, and
`s18-friend` is a real scenario with five turns. The band's list of exposures
was two entries long and is now four; this one is closed.

---

## 6. `fr.a2.internet.009` and `.010`: flagged, not repaired

Both verified present and `status: published` on 2026-08-16, and `.010` carries
`flashcard`.

```
fr.a2.internet.009  "On dit sur Internet, sans article et avec une majuscule."
fr.a2.internet.010  "Les trois se disent ; courriel est le terme officiel, mail est le plus courant."
```

They are notes **about** French, written **in** French, in a table whose rows are
served as flashcards, dictée sentences and TTS lines. A learner meeting `.010` in
the flashcard hub sees a French sentence explaining French with an English gloss
explaining the explanation. Same shape doctrine §E settled when it ruled a
participle is never a corpus item.

**Demotion proposed and not applied:**

| id | proposal |
|---|---|
| `.009` | a lesson `term` plus a `notes` field. It is the capital-I rule, not an utterance. |
| `.010` | a `commonErrors` card, which is what this lesson does with the material anyway. |

The repair touches shipped published content and belongs in its own reviewed
diff with its own parity check. This lesson teaches **both** points and sources
them from its own strings. A guard scoped **to this lesson** (never to the
bundle) fails if any `internet` row it names has an `fr` that is a sentence about
French, which is cheap and stops the next author reaching for them.

---

## 7. What `SilentCards.tsx` actually calls, closing the hyphen question

`SilentCards.tsx` does **not** call `normalizeFr` — that much of collation §0.3
was true and it was the wrong question. It calls **`matchesAccept`**, which calls
**`fold()` at `answer.logic.ts:32`**, and `fold()` strips accents, case,
punctuation, **hyphens**, the middle dot, **both apostrophes** and **all
whitespace**.

So the quiz was exposed all along, by a second normaliser nobody had read. The
design's risk 4 was right. Verified by running `fold()` over the pairs, both
ways, in the batch and in the test.

**The band finding, which is the reverse of what the prompt's §7.4 used to say:
no scored question may turn on a hyphen.** The two that bite a technology
lesson hardest:

```
e-mail        folds to   email          ONE ANSWER
mot de passe  folds to   motdepasse     ONE ANSWER
```

Both are natural distractors and both are dead. `sur Internet` stays dead on the
capital. **No guard was built**, because the exposure is total and a renderer
guard is the wrong instrument. Three rules replaced it: no dictée turns on a
hyphen (asserted per item), every intended spelling goes in `accept` literally
anyway, and the band rule below.

**Band rule, asserted both directions.** Eleven near-miss pairs are asserted
`fold(a) !== fold(b)`, and nine known collisions are asserted `fold(a) ===
fold(b)` — so the day `fold()` changes, the second list goes red and every scored
item in this lesson gets re-checked rather than silently rotting.

---

## 8. Imported against authored, and the other party's voice

```
authored   37   fr.a2.internet.182 .. .218
imported   85   internet 74, rp-technologie 19 (via groups), au-restaurant 6, hebergement 3
ratio      70% imported
```

"Almost nothing authored" is the expected answer and this is close to it: every
one of the 42 tech headwords the design checked already lived in two or more
themes, `un ordinateur` in seven. Nothing already published was re-authored.

**The other party's voice: 56.8%, against a floor of 40.** For this unit the
other party is three people, which no other unit in the band can say:

| voice | rows |
|---|---|
| the machine (7 interface chunks + 5 menu lines) | 12 |
| the support agent | 6 |
| the friend | 3 |
| **total `other`** | **21 of 37** |

The corpus had authored only the learner's half of every situation. Probed and
confirmed 0 rows at any level before authoring: all six interface strings, the
five menu lines, `ça ne marche pas`, `ça bugue`, `le message dit`, and
`un technicien` as a sentence.

### The plan said ~120 imports and the build landed 85, deliberately

The reachability guard is why. Four screen verbs (`double-cliquer`, `glisser`,
`zoomer`, `dézoomer`) were on the import list because they are in the theme, not
because anything in this lesson says them, and the guard that asserts every
non-deck-able import is *named by a section* caught it. **An import no section
names is a row carried into the seed for nothing.** Padding the count back to 120
would have meant carrying ~35 more of them. Import-dominance, which is the
property that actually matters, holds at 70%.

### The drill trap this theme carries, asserted both ways

`internet`/a2 splits into three drill populations and a section naming the wrong
one draws nothing:

```
.001-.034   flashcard + voiceflash   deck-able AND practice-able
.042-.076   flashcard + review       deck-able, NOT practice-able
.077-.111   voiceflash + review      practice-able, NOT DECK-ABLE
```

The third is the hazard and it is a1.08's failure, which a2.31 met again at
eighteen rows. All ten imported from it are named by `itemId` in `s09-sort` or
`s19-speak` and released by **no** tranche. Both directions are asserted.

### The a2.30 / a2.31 contention was moot, and here is why

`bureau` shares eight headwords with this theme. **Every one already exists in
`internet` as well**, so this build imports them by id and authored none:

```
un ordinateur .042   un clavier .044   une souris .045   une imprimante .050
un chargeur   .054   un courriel .002  taper      .088   recevoir      .082
```

Nothing had to be allocated. a2.30 wrote into `metiers` and a2.31 into `ecole`,
and `internet` ran to `.181` with no gaps on the morning of this build, so
neither landed here. Verified, not assumed.

---

## 9. What was handed to a2.35, and the act that was refused

**Refused: the consolidation act.** No review-of-the-band act, no
cross-situation roundup, no quiz round drawn from another unit. Doctrine §B.5:
a lesson owns one thing, and a consolidation act across the other seven would be
a ninth unit hiding inside the eighth. **Being last is a position, not a job.**
Two tests assert it, over the roundup and over the four quiz round labels.

**Handed over, and all three are pinned by tests:**

1. **A liftable reception bank.** `s11-menu` (5 lines, the automated phone menu)
   and `s07-heard` (4 screen prompts). The menu is the most liftable thing in
   the band: it needs no setup at all. A test asserts no line references a
   section, a mission number or an earlier card, and that no question reprints
   its own line.
2. **A liftable scenario.** `s17-call`, seven turns, no turn depending on
   anything earlier in this lesson, with a `setting` that stands alone.
3. **The register axis, named.** SYSTEM / AGENT / FRIEND, with the three-voice
   ladder as its worked example. a2.35 is the only place a learner meets more
   than one situation in a sitting, which makes it the right place to ask "which
   voice does this one want?" across eight encounters.

---

## 10. Did it read as a vocabulary tour?

**No, and the mission split is the measurement rather than an opinion.**

```
act 2  the machine's voice   4 missions
act 3  THE OWNS              6 missions      <- and a test asserts act3 > act2
```

With 424 importable rows sitting there the pull is real. The defence held: the
Owns act is the heaviest in the lesson, and the only device-noun content is a
single `cardDeck` tranche release plus two cards on the anglicism map, which
teaches the **mechanism** (French borrows, official French translates, Quebec
resists hardest) rather than the list. `un texto` and `le clavardage` are already
dating; the mechanism does not age.

The social-media framing stayed rejected on measurement: `reseaux-sociaux` has
**0 a1 and 0 a2 rows** and starts at b1, so posts, likes and followers would have
been authoring from scratch at a level the theme does not serve. Comparatives
arrive at a2.08, one unit *after* this one, so the learner still cannot say
`plus rapide que`. Nothing here drifts that way, and `.074`/`.075`/`.076`
(`une publication`, `un abonné`, `un réseau social`) were deliberately not
imported.

---

## 11. Every claim measured false

| claim | source | measured |
|---|---|---|
| "This is the one field you change" (`themes`) | prompt §1.1 | **Already `['internet']` in all three places since 2026-08-15.** No spine field changed. |
| `le clavardage` has 1 headword | prompt §8.2 | **0.** One row exists and it is a sentence. All four Quebec forms authored. |
| rows carrying a `quebec` tag: 0 | design §2.6 | **8**, two of them a2.31's in this band. The tag exists; this build follows it. |
| "there is no schema field for region" | prompt §5.2 | True of the *schema*, misleading in effect: `tags` already carries `quebec` as a convention. |
| twelve rows carry a `vous`-imperative | design §2.9 | **114 corpus-wide; twelve is the HEADWORD slice.** Both figures now recorded. |
| `un courriel` is a headword five times | design §2.6 | **Ten**, four of them at a2. |
| run the repeated-`scenario` device check | prompt §0 row 6, §6 | **Already run and passed 2026-08-16**; the file names a2.32 as released. Fallback not taken. |
| mission 13 is "a second groupDrill or a ladder-past-mail deck" | prompt §6 | Neither. It is the register-pair deck, because §7.1's second required layout and §10's paired assertion have no other home. |
| ~120 imports | prompt §8 | **85.** The reachability guard removed four unused; padding would mean carrying rows nothing names. |
| `--count` flag on `corpus:probe` | collation | Confirmed absent. Bare `--theme` reports what it wanted. |

**Confirmed exactly as stated**, and worth saying because most of the table is
corrections: `voiceflash` 61/181, `dictation` 39/181, phrase respell 3/23, word
respell 62/76, all five theme row counts, `reseaux-sociaux` 0 at a1 and a2,
`un mail` 0 headwords, `un mél` 0 rows, `courriel` 82 rows corpus-wide,
`fr.a2.rp-technologie.012` and `fr.a2.internet.002` at the ids claimed,
`content_exam_tasks` 2 rows both `delf_b2` both `in_review`.

---

## 12. A third blind spot in the nasal checker, and it is not the documented one

`hasPlainNasalFor` is known to be blind to a nasal followed by a consonant
inside a token. This build hit that (`KOHⁿT` for `compte`, `fr.a2.internet.210`)
and also hit **a shape that is not written down anywhere**:

> **The doubled-n branch is tested against the WHOLE `fr` string, not against
> the token that produced the flag.**

`Sélectionnez une option` respelled `say-lek-syo-NAY ü-nop-SYON`: the flagged
token is `option`, which has one `n`. `Sélectionnez` has `nn` several words away,
and that clears the whole string. A nasal belonging to a **different word**
suppresses the flag.

`fr.a2.internet.195` takes both holes at once and is the sharpest case: `UHN`
matches the digraph rule at `:210`, which returns early and never consults the
French; `SYON` misses that rule, reaches the lone-vowel branch, and is cleared by
the `nn` in `connexion`. **So repairing only what the checker reports leaves
`SYON` plain and the report comes back clean.**

All three are asserted **by name**, in a `plain` / `half` / `to` table, in both
the batch and the test, so the day the checker improves the list goes red and we
find out rather than carrying it dead.

---

## 13. a1.03 was re-rendered, and the drift went further than expected

**Eleven endings moved, the largest single move any unit has made to a1.03**,
because this is the first unit to pull a whole theme across the cut: 33 rows
joined a1.03's population and **only four were authored**, which is a1.23's carry
finding for the sixth time.

```
-ier  56 -> 58    -et   29 -> 31    -age  30 -> 32,  90% -> 91%
-tion 43 -> 45    -ette 38 -> 39    -e   952 -> 961
-on  153 -> 157,  58% -> 56%        -ant  20 -> 22
-ien  15 -> 17    -ail   7 ->  8    -sion  8 ->  9
```

Remedy 1 (withdraw a carry) did not fit: 29 of the 33 joiners are the lesson's
own device and interface lexicon, released by tranches. So remedy 2 was taken:
counts updated in `genre-endings.ts` with the joiners named in source,
`genre-lesson.ts` bumped **v13 → v14** with the reason, `pnpm content:gender`,
then the merge. `a1-03-genre.test.ts` and `a1-22-pays.test.ts` are green at 118.

**Two accuracies moved in opposite directions**, which is worth keeping. `-age`
rose a point because both joiners are masculine. `-on` fell **two**, its largest
move in the band, and the reason generalises: the `-on` a technology vocabulary
produces is `-tion` and `-xion` (`une connexion`, `l'application`,
`une notification`, `la baladodiffusion`), which is the reliable **feminine**
slice, so every unit like this one drives `-on` further from the masculine
reading a learner would guess. Both stay on the right side of the 90% floor, so
no rule was added, dropped or reclassified.

### And four more stale prose copies, in fields no test reads

v13 fixed two copies of the `-tion` figure. There were **six in the family**:

| where | said | now |
|---|---|---|
| `genre-lesson.ts:750` | "-ier ... all fifty-five here" | fifty-eight |
| `genre-lesson.ts:1078` | "-tion ... Forty-three nouns here" | forty-five |
| `genre-lesson.ts:1190` | "-tion ... across thirty-six nouns" | forty-five — **v13 missed this** |
| `genre-lesson.ts:1222` | "-et ... all twenty-nine of them" | thirty-one |
| `genre-lesson.ts:1248` | "-ier ... all fifty-five of them" | fifty-eight |
| `genre-lesson.ts:1554` | "-tion ... all thirty-six of them" | forty-five — **v13 missed this** |
| `genre-endings.ts:164` | "-ier ... Fifty-five nouns" | fifty-eight — stale since 2026-08-09 |

Plus the `-e` bucket's "across eight hundred nouns", wrong since the count passed
900, now "nine hundred".

`a1-03-genre.test.ts` compares the **constants** to `seed.items` and reads no
rendered body, so every one of these was green while being wrong. **The real fix
is to derive the prose from the constants**, which is a code change with its own
review and not this build's. Filed here so the next author does not find them one
at a time.

---

## 14. The mutation test: two real holes, found and closed

`scripts/_a232_mutate.ts` mutates `seed.json`, runs the one test file, and
restores the **original bytes** in a `finally` — no Postgres, no `git checkout`,
verified byte-for-byte restored on every run. Same shape a2.28's device probe
used.

The first twelve mutations were all caught, which proves less than it looks:
they test what I already knew to check. **The second wave deliberately aimed at
contract lines I suspected I had not asserted, and two of them landed:**

| mutation | result |
|---|---|
| a scenario turn with no `userEn` | **MISSED** — the reveal shows French the learner cannot read |
| a scenario turn with no `alts` | **MISSED** — a conversation reads as a cloze test with one right answer |

Both are §6 mission 17 contract lines and both passed a suite of 56 assertions.
Closed with a test that walks **both** scenarios, twelve turns, checking `ai`,
`en`, `user`, `userEn` and at least two well-formed `alts` on every one.

A third was caught only **by accident** — stripping the reframe tripped the
walk-is-not-empty check rather than a guard — so a proper assertion was added
that the reframe appears verbatim in at least six sections.

**Final: 16 of 16 caught.**

---

## 15. Device verification: NOT DONE, and the reason

**Structurally verified, not eyes-on.** Said plainly because a gap named costs
an hour and a gap papered over costs a session.

The Pixel 6 (`21041FDF600BMN`, oriole) was attached and Metro came up clean on
8082 — `/status` reported `packager-status:running` and the dev manifest returned
**200** with a well-formed multipart body, so this was **not** the manifest-500
trap. The dev client nonetheless died into `DevLauncherErrorActivity` on two
launches, and by the second attempt the phone was in active personal use with
another app in the foreground. Driving it further would have meant repeatedly
interrupting the user's own device, so Metro was stopped and the `adb reverse`
removed.

**What this does and does not leave open.** The two genuinely risky things in
this lesson were already device-verified on this same Pixel 6 on 2026-08-16 and
recorded in `46-DEVICE-CHECK-RESULTS.md`:

- **repeated `scenario`** — PASS, and the file names a2.32 as released
- **`listening.hideLines`** — landed, `MissionRich.tsx:1988`, and four shipped
  lessons assert it

Everything else this lesson uses is approved-without-a-device-test repetition
(`listening`, `cardDeck`, `groupDrill`, `tapTable`, `trapDrill`), or one-per-
lesson and shipped in 52 to 60 lessons each (`scene`, `reading`, `dictation`).
It ships **zero** `table`. **What remains genuinely unseen is cosmetic**: the
xl `cardDeck` at `s08-map` (7 cards, every body inside the 12-word cap), the
37-character chip budget on the term rows, and the `tapTable` header glyph
budget, whose three headers are 7, 8 and 3 characters.

**Known and not re-checked:** `TrapAudioStep` prints a hardcoded R-sound line
above the cards on every stepped `trapDrill` with an `audio` step
(`MissionRich.tsx:870`, 43 shipped sections). `s14-trap` is the 44th. It is
proven by reading, it is not this build's to fix, and it still needs its own
commit.

---

## 16. Exam payload: taught, not tagged

**Zero `ExamTask` rows, zero `ExamSeries` rows, no `Scenario.exam`, and
`delf_a2` was not added to `EXAM_FORMATS`.** The design's §8.5 escalation is
declined: `Scenario.exam` is read by no code anywhere in `ealch-v2/src`,
`EXAM_TASK_TYPES` is a tagging vocabulary with no runner, and
`content_exam_tasks` holds 2 rows, both `delf_b2`, both `in_review`. A test
fails on the string `"exam"` anywhere in the lesson.

The mapping is kept in source (`technologie-corpus.ts` `EXAM_MAPPING`) because
it is what makes the content right and what a future runner will consume:

| exam task | section | what a scorer rewards |
|---|---|---|
| TEF/TCF/DELF **CO** | `s11-menu`, `s07-heard` | catching the operative instruction on ONE hearing |
| TEF/TCF/DELF **CE** | `s12-notice` | locating the actionable clause in a bureaucratic notice |
| TEF EO Section A, TCF PO task 2 | `s17-call` | producing **questions**, not only answers |

`s17-call` has three turns where the learner asks rather than reports, and a
test asserts at least two, because a scenario where the learner only answers is
not Section A.

---

## 17. Files, and the state of the tree

```
ealch-admin/scripts/data/technologie-corpus.ts      37 rows + every citation constant
ealch-admin/scripts/data/technologie-lesson.ts      23 sections, 6 acts
ealch-admin/scripts/data/technologie-terms.ts       6 glossary entries
ealch-admin/scripts/author-technologie-batch.ts     content:technologie
ealch-admin/scripts/merge-technologie-into-seed.ts
ealch-admin/scripts/_a232_mutate.ts                 the mutation harness
ealch-v2/src/content/a2-32-technologie.test.ts      58 tests
ealch-admin/package.json                            "content:technologie"
ealch-admin/scripts/data/genre-endings.ts           a1.03 re-render
ealch-admin/scripts/data/genre-lesson.ts            a1.03 v13 -> v14
ealch-v2/src/content/seed.json
```

**`pnpm -C ealch-admin typecheck` is clean.** None of the five fields that draw
nothing is present: no `sub` on a groupDrill item, no `itemIds` on a cardDeck,
no `canDo` / `track` / `teaches` on the Lesson. None of the six dead audio
fields is authored.

### Two things about the tree the next person needs

1. **`content:publish` is no longer blocked.** `content:parity` reports
   *"Nothing in the seed is at risk from a publish"* — the sons.09 block is
   gone. `b2.01.l1` is database-only and `in_review`, and a publish would ADD
   it. **Not run**: publishing is not part of a lesson build (doctrine §C).
2. **`seed.json` also carries a2.31's uncommitted lesson.** The working tree had
   it before this build started. Committing `seed.json` would sweep a2.31.l1 in
   alongside a2.32.l1, so **nothing has been committed** and that call is Paul's.

The 223,065-line `seed.json` diff was read rather than assumed, and it is
genuine content, not a reformat:

```
items      10,034 -> 10,228   (194 added, 0 removed; 113 of them this build's)
surviving ids that CHANGED INDEX:  0 of 10,034     <- nothing was sorted
surviving ids with a changed body: 37              <- a2.31's carries
lessons added:   a2.31.l1, a2.32.l1
lessons changed: a1.03.l1 (this re-render), a2.29.l1 (a2.31's)
seed.version left at 50, which the publish step owns
```

### Tests

```
before   4,502   measured today, not carried from a file
after    4,561   +59
of which    58   ealch-v2/src/content/a2-32-technologie.test.ts
```

The remaining +1 is not attributable to a file this build wrote and was not
chased; it is most likely a1.03's re-render moving a data-driven count.

---

## 18. What could not be verified

- **Eyes-on device rendering of this lesson.** §15. The two risky section
  behaviours were verified on 2026-08-16 by the band's own check; the cosmetic
  budgets (xl card bodies, chip row width, tapTable headers) are computed and
  not observed.
- **Whether the xl `cardDeck` at `s08-map` reads well at 56pt.** Every card is
  one French unit and every body is inside the 12-word cap, which is what the
  validator enforces, but "inside the cap" and "good at that size" are different
  claims.
- **The `TrapAudioStep` hardcoded line** on `s14-trap`, known by reading and not
  seen.

---

*Written by the a2.32 build, 2026-08-16. Companion files:
`04-REPAIR-MOVE-IDS.md` (a2.07's move, cited here),
`47-LADDER-RUNG-IDS.md` (a2.29's ladder, cited here),
`46-DEVICE-CHECK-RESULTS.md` (the check that released mission 18).
This file is `.md` and therefore gitignored: `git add -f` to track it.*
