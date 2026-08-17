# a2.31 « L'école & les études » — build report

Trail seq 30, unit 7 of 8 in the A2 situations band. Applied to Postgres and
merged into `seed.json` on 2026-08-16. **Not published**, per doctrine §C.

```
lesson          a2.31.l1, v1, 26 sections, six acts, one quiz of 32
corpus          61 authored rows, fr.a2.ecole.016 .. .076
                66 imported ids across 8 themes
theme           ecole   312 -> 373 published (a2 slice 15 -> 76)
seed            10,034 -> 10,115 items, 71 -> 72 lessons, version left at 50
suite           4,438 -> 4,502 tests, 0 failing
typecheck       ealch-v2 0, ealch-admin 0 — BUT SEE §19: `tsc --noEmit` in
                ealch-v2 EXCLUDES every test file, so "tsc 0" says nothing at
                all about the guard this build shipped
```

---

## 1. THE IMPARFAIT, IN FULL

This is the curriculum-level answer the prompt asks for, and it is the part of
this build worth reading if nothing else is.

### The exposure I measured

```
published a2 rows carrying an imparfait form      306      (the design said 328)
imparfait rows inside theme `ecole`                 2      exactly as reported
```

**306, not 328.** The design's query did not filter on `status`, so it counted
unpublished rows. The two `ecole` rows are exactly the ones named:
`fr.a2.ecole.013` and `fr.a2.ecole.015`. **They are the only two in the theme**,
confirmed by a status-filtered query over all 312 rows.

Both are excluded by id. They are absent from `itemIds`, from every
`deckTranche`, from every `LessonDrill`, and from every scored section, and four
separate assertions say so.

### How the account reads without a background tense

**It reads better than expected, and the reason is not a workaround.**

A completed course of study is a bounded event, and the passé composé is the
tense for a bounded event. `J'ai fait des maths pendant trois ans.`
`J'ai eu quatorze sur vingt.` `J'ai obtenu mon diplôme en juin.` Every one of
those is the sentence a registrar wants, because a registrar is recording
*what happened*, not *what things were like*.

The imparfait is wanted in exactly one place: **the childhood frame.**
`Quand j'étais petite, j'ai voulu devenir médecin.` That is a set opening, not a
paradigm, and it is the only sentence in this lesson that genuinely needs the
tense. Which is why the lexical-approach move works here and would not work in a
unit about, say, describing a childhood home: **the retrospective canDo needs
one formulaic chunk, not a system.**

So the curriculum-level finding is narrower and more useful than "a2.31 could
not have the imparfait":

> A unit that narrates a **bounded** past does not need the imparfait. A unit
> that narrates a **habitual** or **descriptive** past cannot avoid it. a2.31 is
> the first kind and no unit in the spine is yet the second kind. The tense
> stays unowned without cost until somebody writes a unit of the second kind,
> and 306 published rows are already exposing it in the meantime.

### The two exposures, and the contract on them

Exactly two, both receptive, both the same chunk, glossed:

| where | line |
|---|---|
| `s18-listen`, line 1 | « Quand j'étais petit, j'ai détesté l'école. » |
| `s20-read`, sentence 1 | « Quand j'étais petite, j'ai voulu devenir médecin. » |

Glossed in `reading.glossary` as *"when I was small"*, with the note that it is a
set opening the learner will meet again later. **No form is given, no paradigm is
shown, and the word "imparfait" appears in no user-facing string, in
`grammarIntroduced` or in `grammarAssumed`.**

### AND THE GUARD WAS WRONG FIRST. This is the most important line in this report.

The first version of the imparfait guard used an **ASCII `\b`**:

```
/\b(étais|était|étaient|…)\b/i
```

**`\b` cannot fire before `é`.** `é` is not an ASCII word character, so there is
no boundary between the apostrophe and the vowel, and `/\bétais\b/` matches
**nothing**. Every `être` imparfait form — `étais`, `était`, `étaient`,
`étions`, `étiez` — was invisible to the guard that existed to catch them, and
`être` is the commonest imparfait verb in the language.

The guard reported **two** exposures and passed. The real count was **five**:

```
s18-listen  « Quand j'étais petit … »            NOT SEEN
s18-listen  « … en droit ça allait. »            seen  (allait is ASCII)
s20-read    « Quand j'étais petite … »           NOT SEEN
s20-read    « … je voulais devenir médecin. »    seen  (voulais is ASCII)
s20-read    « J'étais nulle en chimie … »        NOT SEEN
```

It counted two by coincidence, from the two accidental exposures, while the
three deliberate ones went unseen. **Invariants §0 names this trap in its first
section and this build reproduced it anyway.** It was found by mutation testing,
not by review: the mutation "write an imparfait into a `typeIn` accept" came back
GREEN.

Fixed to an accent-aware boundary in both the batch and the test:

```
/(?<![\p{L}\p{N}])(ét[ai]i[st]|…)(?![\p{L}\p{N}])/iu
```

and the content corrected so the exposure really is two:
`ça allait` → `j'ai bien réussi`, `je voulais` → `j'ai voulu`,
`j'étais nulle` → `je suis nulle`. A test now pins the boundary itself, so the
next author cannot quietly revert it and re-blind the whole check.

---

## 2. THE REFRAME, VERBATIM

> **They will not know the name of your diploma. Say what it was and how long it took.**

Taken verbatim from the prompt. Carried in **11 sections**; the density validator
requires three.

**Rejected, and recorded because doctrine asks for it:**

- *"Learn the French words for school subjects."* A description of the content,
  and it gives the learner nothing to do differently. It is also false: the words
  already exist in the corpus.
- *"French school levels do not map onto yours."* True, and a fact rather than an
  instruction. It tells you that you have a problem and not what to say.
- *"Translate your diploma."* Actionable and wrong. Translating it is exactly the
  move that fails, because the translation has no referent.

---

## 3. IMPORTED VERSUS AUTHORED, AND THE REGISTRAR RATIO

```
authored      61 rows      fr.a2.ecole.016 .. .076
imported      66 ids       ecole 39 · examens-et-diplomes 9 · rp-travail-etudes 6
                           matieres 3 · au-restaurant 6 · hebergement 3
                           b1.matieres 2 · disciplines 1
```

**Registrar voice: 25 of 61 = 41.0%**, against the band floor of 40%. Measured in
the batch and again in the test, not claimed in prose, and the test additionally
checks that each row filed as the registrar is a question or an instruction and
does not open as the learner.

The registrar's speech is what genuinely did not exist. Measured against
published rows before authoring: `quel est votre dernier diplôme` 0,
`vous avez un relevé de notes` 0, `ça correspond à quel niveau` 0,
`vous avez redoublé` 0.

**Why 61 and not the ~50 the prompt budgeted:** the 40% floor is what drove it.
Twenty-five registrar rows are needed to make the ratio, and the learner's half
cannot be cut below the four dossier layers without losing the canDo.

---

## 4. THE THEME-OWNERSHIP RULE I APPLIED

Collation §8 left this "not ratified, yours to decide and to record". The rule:

> **`ecole` FIRST.** Where a concept exists anywhere in `ecole` at any level,
> `ecole` owns it and the lesson imports the `ecole` row. Only where `ecole`
> genuinely lacks it does the lesson look outward, in this order:
> `examens-et-diplomes` (assessment and credentials) →
> `rp-travail-etudes` (credential recognition) → `matieres` (school life) →
> `disciplines` (academic fields).

**The design proposed a different order and did not put `ecole` first.** Measured
against Postgres, that would have imported the entire school ladder and the
entire subject list from `matieres` when `ecole` already carries both:

```
la maternelle       fr.a1.ecole.065     design would take matieres.069
l'école primaire    fr.a1.ecole.066     design would take matieres.054
le collège          fr.a1.ecole.063     design would take matieres.055
le lycée            fr.a1.ecole.064     design would take matieres.056
l'université        fr.a1.ecole.181     design would take matieres.057
les mathématiques   fr.a1.ecole.130     … and twelve more subjects
étudier             fr.a1.ecole.190
apprendre           fr.a1.ecole.051
enseigner           fr.a1.ecole.191
redoubler           fr.a1.ecole.111
la moyenne          fr.a1.ecole.117
réussir l'examen    fr.a1.ecole.112
échouer à un examen fr.a2.ecole.008
obtenir son diplôme fr.a2.ecole.009
```

**About thirty duplicate cards prevented**, and because `ecole` is 312/312 in the
seed, every one of those imports was already in `seed.json`. The prompt warned
the merge would "pull roughly 143 rows into the seed for the first time and grow
it materially". **It pulled 81.** The seed grew by 0.8%, not by 1.4%, and the
difference is entirely the ownership rule.

**One collision recorded rather than solved silently:** `un cégep` and `un DEC`
are authored as A2 headwords under `ecole` while `quebec-et-francophonie` owns
the cégep sentences at B1. Defensible, deliberate, and written down.

---

## 5. SIX PROMPT CLAIMS MEASURED FALSE

| # | the prompt said | measured |
|---|---|---|
| 1 | `redoubler` "has 13 rows, one at a1, **none at a2**. Author." | The a1 row **is `fr.a1.ecole.111`, in this unit's own theme**, with flashcard+voiceflash, already in the seed. Authoring it would have been an **intra-theme duplicate `fr`** — the exact thing the flashcard hub serves as one card twice. IMPORTED. There is also an a2 sentence, `fr.a2.matieres.133`, which "none at a2" missed. |
| 2 | `une session` is a Quebec word to author | `fr.a2.examens-et-diplomes.033` "une session" is published at A2. IMPORTED. |
| 3 | `équivalence` "has 24 rows; **the only A2 one** is `fr.a2.dictee.114`, a dictée row, not an education row. **Author. This is your Own.**" | **SIX A2 rows**, four of them education rows: `examens-et-diplomes.119`, `.149`, `.174`, and the phrases `recherche-emploi.028` and `rp-travail-etudes.042`. **The noun is finished at A2.** What returns zero is the **hedge** — `ça correspond à`, `c'est l'équivalent de`, `chez nous on appelle ça`, `à peu près comme`, all 0. The Own survives and gets sharper: this unit owns the **move**, not the word. |
| 4 | `disciplines` a2 supplies "university fields: droit, économie, informatique, comptabilité" | `disciplines` at A2 is **science vocabulary** — la planète, une étoile, la cellule, le squelette, l'éclipse. The academic fields live at B1. Two imported from B1, two from a1/a2 rows that already existed. |
| 5 | "`content:parity` **currently reports `sons.09.l1` as seed-only**. That is a known blocker on `content:publish`." | **Gone.** Parity reports one pre-existing divergence, `b2.01.l1`, database-only and `in_review`, and says *"Nothing in the seed is at risk from a publish."* a2.30's build cleared it. |
| 6 | "The rule is **not in `EXAMINER-ENGINE-SPEC.md` at all.** That file's §3 … contains no such sentence." | **False.** `EXAMINER-ENGINE-SPEC.md:76` carries it verbatim: *"**Speaking-first delivery rule (app-wide):** every level touches CO + PO; CE + PE ramp up from B1"*. It is **also** in `CONTENT-CURRICULUM-AND-GENERATION-PLAN.md:38`. **The design's citation was correct and the prompt's correction of it is wrong.** See §9. |

### And a seventh, about the prompt's own pre-flight

**The prompt's pre-flight command cannot find its own headwords.** Its
`corpus:probe --tokens "…"` line mixes six headwords (`un relevé de notes`,
`une licence`, `un master`, `une mention`, `redoubler`, `un cégep`) into a probe
that queries **`kind='sentence'` only** (`probe-corpus.ts:174`). A headword is
never a sentence, so the probe reports `pg=0` for words that exist. `--words` is
the headword probe. **a2.28 found this same shape and it is still live in this
prompt.**

---

## 6. THE DECISION THE PROMPT LEFT OPEN: licence / master / mention

No A2 row exists for any of the three. All three exist at B1/B2, and collation
§1.3's import rule is **not qualified by level**, so this was a real decision.

**Authored at A2 anyway, for a measured reason.** Every published `mention`
respelling is **flagged by the real `hasPlainNasalFor`** as closing a nasal with
a plain n:

```
fr.b1.examens-et-diplomes.021   la mahn-SYOHN    FLAGGED
fr.b1.reseaux-sociaux.073       mahn-SYOHN       FLAGGED
fr.b2.universite.056            la mahn-SYOHN    FLAGGED
```

Importing one would have put a known convention violation on the card carrying
this unit's outcome vocabulary. `licence` already has three competing
respellings and `doctorat` six; authoring at A2 adds a correct form rather than
a fourth variant of a wrong one.

**Imported instead**, because A2 rows existed: `maîtrise`, `doctorat`,
`baccalauréat`, `relevé de notes`, `attestation`, `session`, `moyenne`,
`redoubler`, `réussir l'examen`, `échouer à un examen`, `obtenir son diplôme`.

---

## 7. a1.03's ENDING STATISTIC, BEFORE AND AFTER

**Before:** `a1-03-genre.test.ts` 35 tests, 35 passing, seed v50, a1.03 at v11.

**After the merge, six figures moved:**

| ending | before | after | cause |
|---|---|---|---|
| `-tion` | n=40, 100% | **n=43**, 100% | `une mention` MINTED + `une inscription`, `une session`, `une attestation` carried |
| `-on` | n=149, 59% | **n=153, 58%** | the same four; all feminine, ending predicts masculine |
| `-e` | n=946, 71% | **n=952**, 71% | six joiners, one minted |
| `-ine` | n=30, 97% | **n=31**, 97% | `la médecine` carried |
| `-ise` | n=18, **94%** | **n=19, 95%** | `une maîtrise` carried, feminine |
| `-sion` | n=7, 100% | **n=8**, 100% | `une session` carried |

**a2.31 is the FIRST unit in this band to move this population with an AUTHORED
row rather than only with carries.** a1.23, a2.27, a2.28 and a2.29 all reported
"every joiner is an import". That finding does **not** hold here: `une mention`
is minted.

Reconciled in `genre-endings.ts`, a1.03 re-rendered and re-merged. **Ending at
v13, not v12, and the reason is a second defect found on the way:**

### Two stale strings on the shipped a1.03 card, in two different fields

The `-tion` card's `line` read **"Thirty-six nouns, no exception."** while the
pinned count had already moved to 40 across a2.27 and a2.29. And the review
deck carried **a second copy of the same figure**, "une. Thirty-six nouns here,
no exception.", in a field derived from nothing.

**Nothing caught either.** `a1-03-genre.test.ts` compares the CONSTANTS to
`seed.items` and never reads a rendered body — which is precisely the
"two bodies, one version" drift a2.30's own merge script documents. The second
copy was found by **grepping the served Metro bundle**, not by any test. Both
now read "Forty-three nouns" and a1.03 ships at v13.

**This is a standing hole and it is not mine to close:** any figure a1.03 states
in prose rather than deriving is unguarded, and there is no test that reads the
rendered card. The next author to move an ending population will hit it again.

---

## 8. THE ROW COUNT, NOT THE MAXIMUM ID

Corrections §10: the maximum has been useless since a2.10.l2 took `.461..500`.

```
ecole published    312 -> 373      (+61, authored 61)      MATCHES
ecole a2 slice      15 ->  76      (+61)
seed items      10,034 -> 10,115   (+81 new, 46 updated in place)
```

The +81 is 61 authored plus 20 imports that were not previously in the seed. The
other 46 imports were already there, because `ecole` is not cut.

The batch checks the **whole block** `.016..090` for occupancy rather than the
top of it, because a1.19/a1.20 and a1.14/a1.15 both had a concurrent build land
below a claimed top. It was clear, and the theme moved by exactly what this build
authored.

---

## 9. THE EXAMINER-ENGINE-SPEC MISATTRIBUTION

**The prompt asked me to confirm the rule is NOT in the examiner spec. I cannot:
it is.**

```
EXAMINER-ENGINE-SPEC.md:76
  **Speaking-first delivery rule (app-wide):** every level touches CO + PO;
  CE + PE ramp up from B1 (matches both the exams and the product's
  speaking-first stance).

CONTENT-CURRICULUM-AND-GENERATION-PLAN.md:38
  … Every unit bundle must touch at least CO + PO (this is a speaking-first
  app); CE + PE ramp up from B1 because that's where the exams demand them.
```

**It is in both files.** The design cited the examiner spec and was right; the
prompt's correction is wrong; and the rule is duplicated across two documents,
which is worth knowing because they can now drift.

**On the substance I agree with the prompt.** Read as written it is a coverage
floor ("must touch at least CO + PO") plus a weighting statement ("ramp up from
B1"). It does not forbid A2 written production. **Re-measured for this build**,
the A2 quiz histogram contradicts a strict reading even harder than the design
said:

```
31 A2 lessons with a quiz, 960 questions
mcq 362 · typeIn 312 · errorSpot 161 · listenChoose 91 · tapSilent 17 · speak 17
free text: 473 of 960, 49%
```

The design measured 380 of 707; it is now **473 of 960**. Somebody will cite this
rule again, so: **it is a floor and a weighting, not a prohibition, and half the
A2 band's assessment is already free text.**

---

## 10. THE WRITTEN CLAIM THAT SURVIVED

In the exact wording the prompt requires:

> a2.31 produces **every sentence a written account would need**, at clause
> level, on graded surfaces. It does **not** produce a graded text. The only
> surface in the app that can grade a free composition is `app/exam-task.tsx`
> via `services/examGrader.ts`, it is not inside a lesson, and nothing routes a
> lesson to it.

**The sections that carry it:**

| surface | section | what it grades |
|---|---|---|
| quiz `typeIn` | `s25-quiz` rounds 1, 2, 3, 4 | 8 questions, clause level, through `fold()` |
| quiz `errorSpot` | `s25-quiz` rounds 2 and 3 | 7 questions, and this is the unit's strongest format |
| the dictée | `s22-dictation` | 6 items, LETTER mode, the only surface that can test a spelling |

**Questions I wanted and could not write** (a2.09's section is the model):

- *"Write `baccalauréat` correctly."* `fold()` strips accents, so
  `baccalaureat` passes. Moved to the dictée, where the tile bank can see the
  letters.
- *"Which is capitalised, `Bac` or `bac`?"* `fold()` strips case. Not writable in
  any free-text format, and not worth an mcq.
- *"Is it `relevé de notes` or `relevédenotes`?"* `fold()` strips all whitespace.
  The two are one answer.
- *"Write the whole four-line account."* Two clauses is the ceiling: `fold()`
  strips whitespace and `matchesAccept` needs the answer predicted verbatim in
  `accept[]`, so a composition cannot be graded. It is a `speak` question
  instead, with a concrete `target`.

**And the dictée could not use the two items the prompt names.**
`le baccalauréat` (`fr.a2.examens-et-diplomes.060`) and `un relevé de notes`
(`.081`) carry `voiceflash` and `review` and **not `dictation`**. A dictée naming
them drills nothing. All six dictée items are authored rows, checked through the
real `dicteeMode` for LETTER mode.

---

## 11. DID THE DOSSIER FRAMING HOLD?

**Yes, and the thing that nearly broke it was measured rather than felt.**

The prompt warned: *"With 143 imports available, twelve `cardDeck` sections is
the gravity well. Every act must end in production, not in more nouns."*

The lesson ships **four** `cardDeck` sections, not twelve, and every act ends in
production:

| act | ends in | type |
|---|---|---|
| I | the scene's own choice and break | `scene` |
| II | `s07-place`, a gated trap drill | `trapDrill` |
| III | `s13-say`, producing two joined lines | `groupDrill` |
| IV | `s18-listen`, four reception questions | `listening` |
| V | `s24-check`, the dossier read aloud | `progressCheck` |
| VI | the quiz | `quiz` |

The four dossier layers are named in `s02-goals`, carried as tags on every
authored row, referenced in `s13-say`'s check, and shown assembled in
`s24-check`. The `scenario` defends all four out loud in six turns.

**What nearly broke it:** act 2 was originally two reception screens and a trap
with no production beat, and `s05-credentials` was added to fix it — but the
reason it was added was a **measurement**, not taste. See §12.

---

## 12. THE REACHABILITY DEFECT, AND WHY THE LESSON HAS 26 SECTIONS

**Eighteen of this build's imports carry `voiceflash` and `review` and NOT
`flashcard`.** No deck in the product can serve them, so a `deckTranche` release
of any of them is a line that looks like it works and does nothing. a2.29 found
the same shape on four rows and reported it; eighteen is too many to leave as a
footnote, and every one of them was core vocabulary:

```
l'université · le diplôme · le baccalauréat (both senses) · une maîtrise
un doctorat · un relevé de notes · une attestation · une équivalence de diplôme
un domaine d'études · le droit · étudier · enseigner · réussir · une admission
une épreuve orale · the /20 sentence · the redoubler sentence
```

**Resolved three ways:**

- **9 named by `itemId` in a new `groupDrill`, `s05-credentials`**, which also
  gives act 2 its production beat. `groupDrill` items take an `itemId`, so
  naming them puts them **on a screen** — which is what doctrine §E actually
  requires ("did the learner see it", not "does this id resolve").
- **4 named in `s08-subjects`** as a fourth group.
- **5 dropped from the import list outright**, because no surface could serve
  them: `réussir` (`fr.a1.ecole.112` covers it and has flashcard), `une épreuve
  orale`, `une admission`, and the two sentences the prompt names as its /20 and
  `redoubler` evidence. Those two are **cited in this report as evidence and not
  carried as cards**, which is the honest version of "the corpus already has
  this".

Without this, eighteen imported cards would have been declared, resolved, and
drawn by nothing — **a1.08's failure exactly** (invariants §1).

**So: 26 sections.** The prompt asks for 24 and gets there by telling this build
to "take the merge" of `reviewDeck` into `progressCheck`. **This lesson has no
`reviewDeck`, so there is no merge to take.** A2-BUILD-DOCTRINE §F was corrected
on 2026-08-16 against all 70 shipped lessons: the A2 range is **23 to 32**, median
24, ten of 29 A2 lessons exceed 24, a2.13 ships 32, and a2.07 and a2.29 at 25 are
named as **inside** it. 26 needs no apology.

---

## 13. MUTATION TESTING: 14 RUN, AND TWO FOUND WEAKNESSES

The measured rate is two, and it was two.

| mutation | first run | after the fix |
|---|---|---|
| put `.013` in the dictée | RED | RED |
| **imparfait into a `typeIn` `accept`** | **GREEN — hole** | RED |
| `passer` to mean "to pass" in a correct sentence | RED | RED |
| paraphrase the `faire de` rule instead of quoting `.011` | RED | RED |
| set a `practice` skill to `'write'` | RED | RED |
| add a second `quiz` | RED | RED |
| drop `prompt` from an `errorSpot` | RED | RED |
| **paraphrase a rung name** | **GREEN — hole** | RED |
| author a row duplicating `redoubler` | RED | RED |
| re-type a repair row as our own | RED | RED |
| put Quebec on a scored surface | RED | RED |
| `sub` instead of `note` on a groupDrill item | RED | RED |
| reintroduce the em dash | RED | RED |
| author a dead audio field | RED | RED |

**Hole 1** is the ASCII `\b` bug in §1. **Hole 2 is a shape this band keeps
shipping and it is worth naming again:**

> **A guard comparing a constant to itself cannot fail.** The rung test asserted
> `section.includes(C.RUNG_1)`. Renaming `RUNG_1` changes *both sides*, so
> a2.29's clause 1 ("quote the three rung names VERBATIM; a paraphrase is a
> second ladder") was guarded by an assertion that could not detect a paraphrase.

Both the rung names and a2.07's six frozen strings are now **pinned against
hardcoded literals** on the citing side, matching what a2.29 and a2.07 do on the
owning side, so the band cannot drift from either end.

---

## 14. A FIFTH DEFECT IN THE NASAL CHECKER, AND IT IS IN THE JOIN

`hasPlainNasalFor` opens with `if (hasPlainNasal(respell)) return true`
(`density.logic.ts:210`), and only **after** that does it consult the French
spelling to clear a consonant that is genuinely pronounced — the line at `:226`
whose whole purpose is `aime`, `dame`, `jaune`, `scène`.

**So whenever the respelling uses one of the seven digraphs (AH OH EH UH EU AI
OU) before a token-final N or M, the early return fires and the French repair is
unreachable.**

`diplôme` is exactly that. The ô is a real /o/, the m is a real /m/, the French
carries `ôme`, and `:226` would clear it — but `PLOHM` matches the digraph rule
at `:210` and the function never gets there. **Three published rows already carry
`dee-PLOHM`**, including `fr.a1.ecole.187` in this unit's own theme and
`fr.a2.ecole.009` which this lesson imports.

Invariants §9 says not to add a fourth variant of a word that already has
competing respellings, so this build **keeps the shipped form and files the flag
as the false positive it is**, asserted both ways by name: each row must still be
flagged (so the day the checker is fixed the list goes stale and we find out) and
its French must carry the vowel + n/m + e that proves the consonant real.

**This is a different defect from the four already recorded.** §6 and §14.1
describe blindness *inside* `hasPlainNasal`; this one is the two halves of
`hasPlainNasalFor` being ordered so the second cannot correct the first.

**And a pre-existing violation found and NOT repaired:** `fr.a2.ecole.009`
"obtenir son diplôme" is respelled `ob-tuh-neer sohn dee-PLOHM`. **`sohn` is a
genuine violation** — `son` is /sɔ̃/ and needs `sohⁿ`. It is a published row
outside this build's id block, so repairing it would put two bodies under one
version on somebody else's row. Reported, not touched.

The nasal table this build **does** own follows Corrections §14.1's shape: one
table, three values per row (`plain`, `half`, `to`), all asserted through the
real function, with `half !== to` asserted by name on the mixed rows.
`licence` (`lee-SAHⁿSS`) is blind; `équivalence` and the licence sentence are
**mixed** — the checker sees one of their nasals and not the other, which is
exactly the row shape §6's two-table split gets wrong.

---

## 15. THE BOUNDARIES, HELD

| boundary | owner | what this unit did |
|---|---|---|
| the repair move | **a2.07** | 6 ids cited, **0 rows authored**, strings verified against Postgres before the apply |
| the register ladder | **a2.29** | 3 rung names quoted **verbatim**, 3 rung ids imported, **0 rung and 0 softener rows authored** |
| the interview | **a2.30** | read its shipped `s20-interview` first. Ours is a **registrar with a form**, recording; theirs is an interviewer forming an opinion. A test forbids `embauch`, `recrut`, `salaire`, `cv` in our scenario. |
| the passé composé | **a2.05** | the entire tense budget. One recap line, no re-teaching. |
| `depuis` | **a2.18** | appears **once**, on the third card of `s12-howlong`, through the imported row `fr.a2.matieres.010`, explicitly as the odd one out. Not taught. |
| comparatives | **a2.08** | ships after us. Not used at all. |
| `faire de` | **`fr.a2.matieres.011`** | the rule row is quoted as `s09-fairede`'s first example, character for character. A test asserts the id **and** that the string matches the corpus row. |

**a2.30's `A2_31_RESERVED` list** (diplôme, équivalence, licence, master,
baccalauréat, université, faculté, relevé de notes) is this unit's ground and
a2.30 authored none of it. Symmetrically, this build authors none of a2.30's
(parcours professionnel, entretien d'embauche, embaucher, recruteur, candidature,
lettre de motivation, curriculum vitae), asserted with an apostrophe-aware word
boundary per Corrections §14.3.

**TEF Canada EO section A**, which the prompt flags as under-exploited: **two of
the six scenario turns have the learner ASKING** — "Il vous faut un relevé de
notes ?" and "Ça prend combien de temps ?" — with alts on both.

---

## 16. VERIFICATION: WHICH HALF I DID, AND THE GAPS BY NAME

**adb reported no attached device.** I did the host half and name the gaps.

**Done:**

```
npx tsc --noEmit (ealch-v2)                  0 errors
pnpm -C ealch-admin typecheck                0 errors
node --test (whole suite)                    4,502 tests, 4,502 passing, 0 skipped
pnpm content:parity                          nothing in the seed at risk
Metro bundle served                          http=200, 27,299,640 bytes
```

**Renderer grep — every section type this lesson uses has a live branch:**

```
MissionSection.tsx  case: scene goals groupDrill trapDrill commonErrors
                          listening reading scenario dictation progressCheck
                    type ===: cardDeck practice
LessonSection.tsx   case: cardDeck tapTable examples commonErrors practice
                          quiz roundup
MissionRich.tsx:1988  const masked = s.hideLines === true && …
```

**`listening.hideLines` HAS LANDED** and is read at `MissionRich.tsx:1988`. The
band's one funded engineering item is live, so `s18-listen` really does mask its
lines until every question is answered.

**Bundle grep — new strings present, removed strings gone:**

```
present   a2.31.l1 · s05-credentials · s14-passer · "Passer does not mean passed"
          "ça correspond à" · the reframe · "un cégep" · "Quand j'étais petit"
          "Ask once, softly." · "Forty-three nouns"
gone      "J'avais huit ans" · "en droit ça allait" · "je voulais devenir"
          "Thirty-six nouns"
```

**THE GAPS, NAMED:**

1. **Whether any card fits.** The host half cannot tell me. The exposures are
   `s01-scene`'s break body (24-40 words, at `lg`), `s19-equiv`'s five deck cards
   and `s20-read`'s passage.
2. **Whether `s04-map` and `s15-marks` overflow.** Both are `tapTable` at six
   rows with headers of 6, 3 and 5 glyphs. a2.12 measured the six-row cap and
   a2.16 the header glyph budget, so both are inside known limits — but neither
   was seen.
3. **Whether the two `trapDrill`s render their gate.** Both walk
   `rule > cards > audio > drill` with `swipe`, an audio spec, a `say` and a
   gated drill step, which `lesson-contract.test.ts` enforces. Not seen.
4. **Whether `hideLines` actually masks on a Pixel 6.** The flag is read; the
   render was not observed.
5. **Long-line tail clipping.** `s20-read`'s passage is one block with no
   authored newline and no spaced exclamation mark, and every `flex` is on a
   wrapper. Not observed.

**Not device-gated:** this unit uses exactly one each of `scene`, `scenario`,
`reading` and `dictation` and **zero `table`**, so collation blocking step 4 does
not apply (it names a2.07, a2.28, a2.29 and a2.32). Both `tapTable`s sit **in the
flow at `layer: 'core'`**, never in a `sheet`, because `ReferenceSheet.tsx`
handles only `teach`, `letterGrid` and `table` and nobody has device-checked
`tapTable` there.

---

## 17. WHAT THE COLLATION SETTLED THAT I FOUND WRONG

The collation outranks this build and it also asks for this.

1. **§9's scope statement is now stale in one direction.** It says "NOT verified
   by me: every Postgres row count". Five of the seven DB figures this unit
   depended on were wrong when re-measured (§5), and four of them would have
   changed what got authored. The carried-forward figures are not a safe default.
2. **1.10's untested-repetition set is right, and the a2.31 row of its corrected
   table is right too.** This unit uses one each of four of the five and is
   correctly unblocked. No change needed; confirming it because the table was
   corrected once already.
3. **§7.5's cross-theme duplication precedent held** and was load-bearing here:
   `un cégep`/`un DEC` at A2 under `ecole` alongside `quebec-et-francophonie`'s
   B1 sentences, and `passer un examen` authored at A2 while
   `fr.sons.faux-amis.014` holds the same string in another theme. Both recorded
   rather than "fixed".

---

## 18. NO TEST FILE IN THIS REPO IS TYPECHECKED, AND MINE WAS THE WORST

**Correcting this report's own first draft**, which claimed "tsc 0 in ealch-v2
AND ealch-admin" as though that covered the work. It does not.

```
ealch-v2/tsconfig.json
  "exclude": ["node_modules", "**/*.test.ts", "supabase/functions"]
```

**`tsc --noEmit` in `ealch-v2` typechecks NO test file in the project.** It exits
0 whether the guards compile or not. `a2-31-ecole-etudes.test.ts` was never in
the program, and neither is `a2-30-travail-metiers.test.ts`,
`a2-29-hotel.test.ts` or `a1-03-genre.test.ts` — verified with
`tsc --listFiles`. So the gate a build reports as green is silent about the one
file it just wrote.

**Forced into a program, 40 test files carry type errors.** Measured by
extending the real tsconfig and overriding only `include`/`exclude`:

```
before this fix   139 error lines, 40 files
a2-31             20 errors — THE MOST OF ANY FILE
a2-26             13      a2-03  13      sons-alphabet  10
sons-06            9      a2-13   5      a2-29           3      a1-03  3
```

**All twenty of mine were the same mistake:** `S(id) as Any & { cards: … }`.
A `Section` has none of those properties, so TypeScript calls the cast
"possibly a mistake" (TS2352) and tells you to go through `unknown` first.
Nothing in the repo would ever have said so.

**Fixed**, with two typed accessors that cast through `unknown` once instead of
twenty unsafe casts:

```ts
const sec   = <T>(id: string): Any & T => { … }   // by section id
const secOf = <T>(type: string): Any & T => { … } // by section type
```

`a2-31-ecole-etudes.test.ts` now has **0** type errors under that program, and
its 61 tests still pass. The repo-wide count is down to 119 across 40 files.

**The remaining 119 are not mine and I have not touched them.** But the standing
hole is worth naming for whoever picks it up: **adding `"**/*.test.ts"` to the
typecheck would go red on 40 files today**, which is presumably why it was
excluded, and every lesson build since has been shipping a guard that no
compiler has read.

---

## 19. FILES

```
ealch-admin/scripts/data/ecole-etudes-corpus.ts        61 rows, the constants, the guards
ealch-admin/scripts/data/ecole-etudes-lesson.ts        26 sections, 6 acts, 1 quiz
ealch-admin/scripts/data/ecole-etudes-terms.ts         10 term chips
ealch-admin/scripts/author-ecole-etudes-batch.ts       content:ecole-etudes
ealch-admin/scripts/merge-ecole-etudes-into-seed.ts
ealch-v2/src/content/a2-31-ecole-etudes.test.ts        61 tests
ealch-admin/package.json                               content:ecole-etudes

reconciled, not authored:
ealch-admin/scripts/data/genre-endings.ts              six ending figures
ealch-admin/scripts/data/genre-lesson.ts               a1.03 v11 -> v13, two stale strings
```

**`content:publish` was NOT run.** Doctrine §C: publishing is not part of a
lesson build. Parity is clean and a publish would now be safe, but it is not this
build's call.

---

*Written by the a2.31 build, 2026-08-16. This file is `.md` and therefore
gitignored: `git add -f` to track it.*
