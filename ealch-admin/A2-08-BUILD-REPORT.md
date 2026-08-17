# a2.08.l1 « Comparatifs & superlatifs » — build report

Seq 32 of 35 on the A2 trail. Built 2026-08-17 against the prompt
`A2-08-COMPARATIFS-PROMPT.md`, doctrine §F and Corrections §12.

Applied to Postgres and merged into `seed.json`. **Not published**: publishing is
a separate reviewed step and is not part of a lesson build.

```
scripts/data/comparatifs-corpus.ts        31 authored rows, the citations, the guards
scripts/data/comparatifs-lesson.ts        24 missions, 6 acts, 30 questions, 1 sheet
scripts/data/comparatifs-terms.ts         6 glossary chips
scripts/author-comparatifs-batch.ts       content:comparatifs
scripts/merge-comparatifs-into-seed.ts
ealch-v2/src/content/a2-08-comparatifs.test.ts   50 tests
scripts/_a208_probe{,2,3,4,5}.ts          the pre-flight, kept
scripts/_a208_mutate.mjs                  the mutation harness, kept
```

---

## 1. The headline: the prompt's load-bearing claim is false

> « Author only `aussi ... que`, which has zero occurrences and is one of your
> three degrees. Everything else you import. »

`aussi … que` occurs in **seven published rows**, four of them in this very
theme, and the third degree is already published as three phrase cards.

```
fr.a2.comparaisons.004   Ma sœur est aussi grande que moi.
fr.a2.comparaisons.062   Cette table est aussi lourde que la chaise.
fr.a2.comparaisons.076   Cette chambre est aussi propre que la cuisine.
fr.a2.comparaisons.078   Elle parle aussi bien anglais que moi.
fr.b1.comparaisons.020 / .057, and 36 more outside the theme
fr.a2.comparaisons.124   aussi bon        (phrase card)
fr.a2.comparaisons.125   aussi bonne      (phrase card)
fr.a2.comparaisons.132   aussi grand      (phrase card)
```

The prompt probed the exact string `aussi grand que` and read its zero as a zero
for the construction. `.004` is the third degree of this lesson's own headline
frame with the feminine agreement already on it, and it is imported rather than
re-authored.

This is the "does not exist" shape Corrections §2 predicts, and it is the fourth
time in this band a false-absence has come from probing one exact string. The
answer to the prompt's own "not measured, worth one command" question is: yes,
`aussi … que` occurs outside the string probed, 43 times.

---

## 2. Every claim in the prompt measured false

| # | Prompt says | Measured 2026-08-17 |
|---|---|---|
| 1 | `aussi … que` has zero occurrences | 7 rows, 4 in this theme, plus 3 phrase cards |
| 2 | `le meilleur` 16 | **18** |
| 3 | `meilleur` 39 | **46** |
| 4 | `mieux` 291 | **301** |
| 5 | "Two respellings to repair" | **six**, and `moins` is not among the two named |
| 6 | `bien` has two respellings | **three**: `BYEHⁿ`, `BYAN`, and `luh byahn` (fr.b2.philosophie.084) |
| 7 | "Corrections §3 does not apply to you" | It applies. The evidence is rich and holds **no minimal pair**. |
| 8 | "`plus bon` appears only inside an errorSpot" (test list) | Contradicts the prompt's own required layout 2 four paragraphs earlier |

**Confirmed exactly as stated**, which is worth saying because most of the above
is corrections: the identity block byte for byte (the first time in this band
that has happened), the theme at 288 published / `fr.a2.*` 129 rows / max `.132`
/ NEXT FREE `.133`, every one of the ten adjective counts (grand 6, petit 4, bon
3, mauvais 1, bien 4, mal 4, cher 6, rapide 5, facile 4, difficile 5), `plus
grand que` 5, `moins grand que` 1, `aussi grand que` 0, `le plus grand` 11,
`plus bon` 0, and both respelling defects the prompt names.

### And two things the prompt does not know

**`mieux` has never been a headword.** Zero rows in 48,888 published items, in
any theme, at any level. The word the corpus uses 301 times has no card. It is
authored here at `fr.a2.comparaisons.147`.

**The drill trap, and it shaped the whole build.** `fr.a2.comparaisons` splits
into three populations:

```
.001-.056   dictation ONLY            56 sentences
.057-.112   sentence ONLY             56 sentences
.113-.132   flashcard + voiceflash    17 rows
```

**112 of 129 rows can be served by no deck and spoken by no `practice`.** A
`deckTranche` release of any of them validates, publishes and draws nothing,
which is a1.08's failure at ten times a2.32's scale. Every imported sentence
here is reachable by being NAMED by `itemId` instead, and the batch asserts both
directions.

---

## 3. What was imported and what was authored

**51 imports, 31 authored rows.** Zero of the ten adjectives authored, exactly as
the prompt says.

| Group | n | Where |
|---|---|---|
| The 17 deck-able rows | 17 | `fr.a2.comparaisons.113`–`.132`, released by tranches |
| The ten describing words | 12 | `adjectifs-essentiels`, `mots-essentiels`, all ungendered |
| Degrees, superlatives, meilleur/mieux/pire | 22 | named by itemId, released by nothing |

**Authored, and every one a gap the probe found:**

```
.133-.135  the minimal triple            one subject, one word, three middles
.136-.140  the dictée frames             all five LETTERS mode; every published
                                         sentence in the theme is WORD mode
.141-.144  the four-form superlative grid `les plus grandes` was 0 rows ANYWHERE
.145       the comparative twin          required layout 3's other half
.146-.150  meilleur and mieux            incl. `mieux`, 0 headwords in 48,888
.151-.155  the aussi completions         each finishes a published pair
.156-.163  the degree cards              incl. a2.17's four reserved forms
```

Row count after apply: `comparaisons` 288 → 319 (+31). a2 slice 129 → 160.

---

## 4. The Owns, and how it got the weight

**Reframe:** *Pick the middle word and keep the frame.* Carried verbatim in all
24 sections; the density validator's floor is three.

Rejected: *plus, moins, aussi. Pick one.* (names the three and not the frame,
so it does not survive the superlative) and *The article makes it the most.*
(true of half the lesson).

**Mission weight.** Acts 2 and 3 are the frame and the article: **11 missions**.
Acts 1 and 4, the scene and the trap: **7**. The trap is `bon → meilleur`,
`bien → mieux`, which is a lexical fact about two words; a lesson that gave it
more room than the frame would be a lesson about two irregular words.

**The three required layouts:**

- **1. The three degrees, one describing word held constant** → `s03-three`, a
  `tapTable` at three rows, and the FIRST teaching screen in the lesson. Guarded
  by more than "the three words are present": strip the middle word and the three
  sentences must collapse to ONE string, so a version reading `plus grand` /
  `moins rapide` / `aussi cher` fails.
- **2. `meilleur` and `mieux` side by side** → `s15-pair`, cards 1 and 2, and
  genuinely minimal: same subject, same second term, one verb and one word apart.
  `fr.a2.comparaisons.066` is published; `.146` was authored to twin it.
- **3. Comparative and superlative adjacent** → `s10-super`. Same noun, same
  describing word, one article of difference. `.145` and `.141` were authored as
  a pair for it, because the three published superlatives sit on three different
  nouns and setting any two side by side compares the nouns as well.

**The generalisation mission** is `s08-unseen`, whose middle group is a control
page with `items: []` handing over **`poli`**, chosen against the corpus: it is
`fr.sons.adjectifs-essentiels.088`, it appears in ZERO `comparaisons` rows bare
or inflected, and its feminine is the regular `-e` so a2.03 supplies everything
but the frame. `lourd`, `propre`, `court`, `froid` and `lent` were each rejected
by a named row that would have leaked the answer.

---

## 5. The respellings: six repairs, not two

One table, `blind` and `house` as separate fields, all three states asserted
through the real `hasPlainNasalFor` (Corrections §6 as amended by §14.1).

```
id                              fr         stored      half        final
fr.sons.faux-amis.024           grand      GRAHN       GRAHⁿ       GRAHⁿ
fr.b2.ethique.052               le bien    BYAN        BYAⁿ        BYEHⁿ
fr.b2.philosophie.084           le bien    luh byahn   luh byahⁿ   luh BYEHⁿ
fr.sons.mots-essentiels.140     moins      MWAN        MWAⁿ        MWEHⁿ
fr.sons.nombres.099             moins      MWAN        MWAⁿ        MWEHⁿ
fr.sons.expressions-utiles.069  moins vite mwan VEET   mwaⁿ VEET   mwehⁿ VEET
```

Five of the six are `house: true` — the minimal repair is clean and is still not
the house value. **None is `blind`**, which is itself pinned: every nasal in this
lesson's lexicon ends a token, so §6's word-internal blind spot does not fire
here at all. If the checker regresses, the test goes red.

**The house values were read off published rows, not invented.** `MWEHⁿ` is
already in `fr.sons.jours-et-mois.065/.066` and, decisively, in
`fr.sons.voyelles.399` — *« Le chou est moins cher que la laitue. »* →
`LUH SHOO EH MWEHⁿ SHEHR KUH LA leh-TÜ`, which is this lesson's own frame,
published, correctly respelled. The house value for `moins` was never in doubt;
two headword rows simply never got it.

Nine rows are named in `NOT_REPAIRED` with the reason, including three more
plain-nasal defects this build did not display (`sont` SOHN, `long` LOHN,
`intéressant` an-tay-reh-SAHN, `le jardin public` zhahr-DAN).

**Deliberately not repaired, and it is not a defect:** `fr.sons.mots-essentiels.141`
`plus` → `PLÜ` against `fr.sons.nombres.098` `PLÜS`. `plus` genuinely has two
pronunciations and this lesson is the one that teaches the split.

---

## 6. The seed, and the one repair a learner can meet

`comparaisons` held **ZERO rows in `seed.json`**. The theme is entirely outside
the cut, so all 82 referenced ids were pulled across. Seed 10,227 → 10,300 items.

**Five of the six repairs are outside the cut and one is inside it.**
`fr.sons.nombres.099` was in the seed carrying the broken `MWAN` and is fixed
here. The other five are left to the publish step, and that is a decision the
merge's own gendered-carry guard forced: two of them (`fr.b2.ethique.052`,
`fr.b2.philosophie.084`) are **gendered single words** (`le bien`), the shape
that joins a1.03's measured ending population. Carrying two new b2 nouns into
the cut to deliver a respelling for a word no learner meets in the seed would
have moved twenty printed figures in `a1-03-genre.test.ts`. The merge refused to
run until they were separated.

**`a1.03` ending figures: UNMOVED** (population 2014). Zero gendered single words
carried, zero a1 rows carried, zero authored rows gendered.

---

## 7. a2.34's material: eighteen rows, none touched

`A2-TAIL-AUDIT` §6 warned that `fr.a2.comparaisons` holds a2.34's possessive
pronouns. Measured: **18 rows**, all listed by id in `POSSESSIVE_ROWS`.

The prompt allows using them as objects. **This build uses none at all**, which
makes the guard *"no possessive pronoun appears anywhere in this lesson"* rather
than a scoped one, so a later edit cannot weaken it. Two were genuinely wanted
and dropped for it: `.017` « Notre équipe joue mieux que la vôtre. » (the best
`mieux` sentence in the theme) and `.020` « Ma valise est plus lourde que la
tienne. » (a clean feminine frame).

**a2.34 inherits all eighteen untouched, with ids, in `comparatifs-corpus.ts` §D.**

---

## 8. The two hand-offs, closed by name

**a2.17.** `adverbes-corpus.ts:560` reads
`RESERVED_FOR_A208 = ['mieux', 'plus vite', 'le mieux', 'moins vite']` and its
suite asserts `mieux` appears on no learner surface in that lesson. **All four
are taken here**, each by a named row, and the test asserts each pair. Answering
the prompt's question: yes, a2.17 shipped a quotable statement — in its SOURCE
constants, not on any learner surface. Same for a2.03's `COMPARATIVE_FORMS`.

**a2.03.** All five of its reserved forms reach a learner here, which is the
other end of the assertion a2.03's own suite makes.

**a2.14** is named on the roundup: bon/bien is savoir/connaître a second time.
**a1.18** gets the one line `ne … plus` is owed, and a guard proves the shape
fires on « Je ne travaille plus ici. » and spares « It does not mean no longer. »

---

## 9. `mieux`'s 301-to-46 dominance, and what it changed

The prompt says nine to one; measured it is **6.5 to one** (301 against 46). The
direction is what matters and the weighting follows the measurement rather than
the claim:

- `mieux` gets **five** authored surfaces (`.147`, `.148`, `.139`, `.149`,
  `.150`) against **two** for `meilleur` (`.140`, `.146`)
- `mieux` is card **1** of `s15-pair` and `meilleur` is card 2
- `mieux` is drill item **1** of the trapDrill, and the drill runs mieux-first
- the `better` term says so in terms: *"if you can only keep one, keep that one"*

---

## 10. The quiz

30 questions, four rounds of 8/8/7/7, against the measured A2 band:

```
              this build     A2 band
typeIn        12   40%       32%     weighted up, as the prompt asks
mcq            9   30%       38%     well under the half cap
errorSpot      6   20%       17%
listenChoose   3   10%       10%
```

- **typeIn** carries the frame, the unseen word (`poli`, twice, one of them
  production) and **all four superlative forms**, because `fold()` keeps a final
  `-e` and `-s` and no other surface holds the distinction.
- **errorSpot** carries `plus bon`, `plus bien` and the missing `que`. All three
  are whole-sentence errors.
- **mcq** carries `meilleur` against `mieux` with the sentence in the stem.
- **listenChoose** carries `plus` with its s sounded and silent, twice.

### Questions I wanted and could not write

- **`la plus grande` against `les plus grandes` by ear.** They are one sound.
  Enforced by a `HOMOPHONE_FORMS` list rather than remembered, and the guard is
  proved to fire on the pair and spare `mieux`/`meilleure`.
- **`de la ville` against `à la ville`.** `fold()` strips the accent and `a`
  against `à` is one string.
- **A capital on `C'est`.** No typed surface can test one.

### The `plus` listenChoose, and the risk named

The split is real and the corpus encodes it consistently: twelve respelled rows,
no counterexample (`plü FOR`, `plü GRAHN`, `plü puh-TEE` against `PLÜS`, `AHⁿ
PLÜS`, `DUH PLÜS`). **What this build cannot verify is whether Android TTS
renders it.** Both items are therefore answerable from the sentence structure as
well, and the teaching of the split lives in the respellings, which are not
spoken. Named rather than papered over.

---

## 11. Mutation testing: three defects found, two weaknesses in the guards

`scripts/_a208_mutate.mjs`, 25 mutations. **23 caught, 2 green for a stated
reason.**

### Three real defects, found by the test rather than by writing it

1. **`plus vite` was reachable by no learner surface.** a2.17 reserved it and it
   was released by a tranche and displayed nowhere. Three cards added to
   `s09-flash`.
2. **`mieux` and `le mieux` collided under the flashcard hub's norm.** Both
   normalise to `mieux`, which is a **seed-wide** failure of
   `flashhub-coverage.test.ts`, not a local one. `.148` is now `le mieux de
   tous`, which is what a2.17 reserved (a substring), is ordinary French, and
   carries the `de` an adverb superlative takes. **The batch's own duplicate
   check could not see it**: it compared authored rows against the theme and
   never against each other. Fixed, and the mutation now goes red.
3. **Two glossary keys did not appear in the passage.** `la vue` and `le choix`
   were authored with their articles and the passage reads « la plus belle vue »
   and « le meilleur choix », so the article is three words from the noun. A key
   that does not appear underlines nothing.

### The weakness the harness found, and the guard that came out of it

**Every card in this band restates the corpus instead of reading it.** A
`cardDeck` card and a `tapTable` cell carry inline strings, not itemIds, so the
French on a card is a second copy of the row behind it. Moving
`fr.a2.comparaisons.134` from « Il est moins grand que moi. » to « ... moins
rapide ... » destroyed the one thing required layout 1 exists for and **every
guard in the build stayed green**.

Invariants §5 says the corpus is the single source of truth and the lesson reads
it. The renderer makes that impossible from a content build, so `DISPLAY_PARITY`
pins the 21 pairs where the copy IS the teaching, checked against the ROW rather
than against a retyped constant. **a2.32 and every other lesson in this band
carry the same shape unguarded.**

### The two that stayed green, and why

Both are the `adjective` ratio guard Corrections §14.5 prescribes. Swapping the
plain phrase in the terms file alone (5 of 48 occurrences) never flips a ratio,
and correctly so. **What that says about the guard as specified: a ratio detects
a wholesale register change and NOT a slip on one card.** One card saying
`adjective` passes it, by design. That is the right trade — `adjective` is on 147
shipped cards and banning it would be a build inventing a rule — but it should be
said out loud rather than discovered by the next author. Swapping the phrase in
the lesson file (43 of 48) IS caught.

---

## 12. Device verification: full pass on a Pixel 6, and it found one thing

Pixel 6 (21041FDF600BMN), Metro 8082, dev client. `DEV_UNLOCK_A2` in
`entitlement.logic.ts` was flipped true for the pass and **flipped back to false**
(`git diff` on that file is empty); it exists for exactly this and leaves no
device state.

Verified on the phone:

- the lesson cover, `intro` and `overview.introFr` (this is the surface a2.11
  shipped jargon to past every host gate)
- the missions list: **24/24 rows**, correct type labels throughout
  (TABLEAU · CARTES · EXEMPLES · OREILLE · GROUPES · FLASH · LECTURE · PIÈGES ·
  ERREURS · ÉCRIT · BULLES · MICRO · BILAN · QUIZ · RÉVISION · BADGE)
- **mission 3**, required layout 1: three rows, three term chips fitting the row,
  the frame visibly constant with only column one moving, every cell drawn
- **mission 11**, the four-form grid: 4-card deck, full sentences uncut, the
  superscript `ⁿ` rendering correctly in `GRAHⁿ` and `zhar-DEHⁿ`, audio dot,
  body text complete
- **mission 16**, the trapDrill: the STEPPED shape, "THE RULE" as its own
  sub-screen with its own Continue, the rule card complete
- the reference sheet, reached from the header

### The defect the device found, which nothing on the host could see

**The sheet's table shipped four columns and the fourth was cut off at the screen
edge**, with no affordance saying so. A sheet table does not scroll sideways on a
Pixel 6. `validateDensity` exempts a sheet, the schema takes any number of
columns, and the seed was correct either way. Reduced to three columns with the
English gloss moved into `rowDetails`, which opens on tap; re-checked on the
phone and all ten rows now fit. A guard was added to the batch and the test.

### Gaps

- **Missions 13 (reading), 19 (scenario) and 22 (quiz) were not walked
  end to end.** The pager renders them and their section types have renderer
  cases; what is unverified is whether a 60-word reading passage and a six-turn
  scenario fit without clipping. Named rather than claimed.
- **The dictée was not typed through on the phone.** LETTERS mode is asserted
  through the real `dicteeMode` in the batch and the test; what is unverified is
  the tile layout at 16 letters.
- **Whether TTS renders the `plus` s split.** See §10.

Host half, also done: the served bundle carries every new string (`a2.08.l1` ×2,
the reframe ×26, `Ce sont les plus grandes maisons du quartier.` ×4, `MWEHⁿ`
×14), and the renderer has a `case` for every section type used, with
`ReferenceSheet.tsx` confirmed to draw `teach`, `letterGrid` and `table` and
nothing else.

---

## 13. Gates

```
baseline, measured 2026-08-17 before starting   4577 tests, 0 fail
after                                           4627 tests, 0 fail   (+50)
ealch-v2  npx tsc --noEmit                      0 errors
ealch-admin npx tsc --noEmit                    1 error, pre-existing,
                                                scripts/_verify_v51.ts (not mine)
pnpm content:parity                             unchanged: b2.01.l1 database-only,
                                                in_review. Nothing at risk.
```

Every quiz question has a `why` AND a `ref`, and every `ref` resolves.
`seed.version` left at 51.

---

## 14. What in the doctrine and Corrections this build found wrong or stale

- **Corrections §3's exemption does not exist.** The prompt says « the sentence
  evidence is rich, so §3 does not apply ». Rich evidence and a minimal pair are
  different things. Every three-degree set and the whole superlative grid had to
  be authored anyway, for exactly the reason §3 gives.
- **Corrections §14.5's ratio guard is weaker than it reads.** See §11.
- **§9's list of holes in the guards you will copy gains a fifth**, and it is
  not about a string at all: **the lesson restates the corpus and no guard in
  the band checks that the two agree.** See §11.
- **A sheet table has a column budget and nothing on the host knows it.** Three
  on a Pixel 6. Worth adding beside `tapTable`'s six-row ceiling in §8.
- **A batch's duplicate-`fr` check must run authored rows against EACH OTHER**,
  not only against the theme. Every batch in this band checks one direction.

---

## 15. For a2.33, a2.34 and a2.35

- **a2.34**: the eighteen possessive rows in `comparaisons` are listed by id in
  `comparatifs-corpus.ts` §D and this build touched none of them. `.017` and
  `.020` are the two worth having.
- **a2.33**: `celui-là` / `celui-ci` are in this theme too
  (`fr.a2.comparaisons.069`) and this build imported none of them either.
- **a2.35**: `s06-hear`, `s13-read` and `s19-talk` stand alone without this
  lesson's framing and are liftable. There is no consolidation act here: being
  seq 32 is a position, not a job.
- **The theme is now in the seed**, all 70 rows of it, so the next build in
  `comparaisons` inherits a cut that finally has one.
