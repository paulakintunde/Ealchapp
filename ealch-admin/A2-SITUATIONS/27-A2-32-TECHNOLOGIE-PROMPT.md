# Build a2.32 "Technology"

Trail seq **31** of 35. The eighth and **closing** unit of the A2 situations band, and
the last thing a learner meets before the trail returns to grammar at `a2.08`
(Comparatives, seq 32). Everything the band has done arrives here and then hands on to
`a2.35` (Bilan A2), which names you as one of its four prereqs.

You are the only unit in the band whose situation has **no counter, no queue and no
person on the other side of it** for half its length. That is not a hole in the design.
It is the unit.

**Read first, in this order:**

1. `ealch-admin/A2-SITUATIONS/10-BAND-COLLATION-AND-DECISIONS.md` — the settled decision
   register. **It outranks this file, and this file outranks your design doc.**
2. `ealch-admin/A2-SITUATIONS/12-DECISIONS-FOR-PAUL.md` **item 2, which is about you**.
3. `ealch-admin/A2-SITUATIONS/31-a2.32-technologie-DESIGN.md` — your design. Good work,
   and §0 below lists the six places it has been overruled or corrected.
4. `ealch-admin/A2-BUILD-DOCTRINE.md` (§B.2, §B.4, §B.5, §B.7, §B.8, §C, §E, §F) and
   `A1-BUILD-INVARIANTS.md`.
5. **`a2.07` as shipped** (seq 24) — it owns the repair move and you cite its item ids.
6. **`a2.29` as shipped** (seq 28) — it owns the register ladder for the band and you
   cite it. See §5.3, which is the boundary you are most likely to cross by accident.
7. **`a2.01` as shipped** (seq 1) — your declared prereq, and the reason the imperative
   is cheap if you are given it.
8. `ealch-admin/RESPELL-CONVENTION.md` before you author a single respelling.

You are in the final parallel group with **a2.30** and **a2.31**, both of which touch
`bureau`, which shares eight headwords with your theme. Read §8.4 before you mint an id.

---

## 0. What changed since your design doc

Six items. Four are supervisor rulings, two are measurement corrections. Do not
reinstate any of them from the design.

| # | Design said | Now |
|---|---|---|
| 1 | `uiScreen` specified at 2-4 days, author recommends against | **DECLINED** (collation §3.2). Deliver the screen-as-situation on shipping components exactly as your own §3.3(a) proposed. That solution is kept whole. |
| 2 | "The whole band is exposed to the hyphen fold"; risk 4 wants a hyphen guard | ~~OVERRULED~~ → **REINSTATED 2026-08-15 by the band consistency pass. Your design was right.** The overrule rested on `SilentCards.tsx` not calling `normalizeFr`, which is true and was the wrong question: the quiz calls `matchesAccept` → **`fold()` (`answer.logic.ts:32`)**, which strips hyphens, both apostrophes and all whitespace. The whole band **is** exposed. Collation §0.3 and its overrule table are corrected. **Still do not build the hyphen guard**: a renderer guard is the wrong instrument. See §7.4, rewritten, and §7.3's band rule. |
| 3 | Mission 7 is `practice` with `skill: 'listen'` | **VOID.** `practice` renders the SPEAKING drill regardless of `skill` (collation §2, 0.2 — `skill` is not even passed to `PracticeVFView`). Mission 7 becomes a second short `listening`. See §6. |
| 4 | Mission 9's `groupDrill` is "production against the clock" | **VOID.** `setInterval` is 0 across all four render files. There is no timer anywhere in the app (collation 1.9). Re-express as gated, tap-to-continue. Do not write "against the clock" into any authored string. |
| 5 | Several sections implicitly flagged as untested render paths | **PHANTOM.** All 35 `SECTION_TYPES` have a live branch; the brief named the wrong dispatcher. `table`, `tapTable`, `quiz`, `examples`, `roundup`, `teach` and `audio` all draw inside a mission via the `SectionView` fallthrough (collation §3.1). **Do not mark any section NEEDS-ENGINEERING.** |
| 6 | Two `scenario` sections (mission 17) flagged for device verification | **CONFIRMED, and FIXED at source 2026-08-15.** You were right that blocking step 4 did not list you. It listed a2.07 (`scene` x2) and a2.28 (`scenario` x2) only. The consistency pass read all eight mission tables and found a **fourth** exposure you could not see: **a2.29** plans `scenario` x2 *and* the product's first `table`, while its own prompt said step 4 did not gate it. Collation §1.10 and step 4 now name **a2.07, a2.28, a2.29 and a2.32**, and every exposed unit is required to carry a single-section fallback. **Yours is already in mission 17/18: author it as `cardDeck` instead of a second `scenario` if the check fails.** Run the check, take the fallback if it fails, and report which. |

**One engineering item is funded for the whole band and it is yours to use:**
`listening.hideLines?: boolean` (collation §3.5). When true, the line card keeps its
`PlayDot` and its box and replaces the `fr`/`en` text with a neutral placeholder;
the lines reveal after the learner has answered every question, not conditional on
getting them right. **Confirm it has landed before you author a listening section.** If
it has not, stop and say so rather than authoring three listening sections that are
reading sections.

---

## 0b. Band consistency pass, 2026-08-15

*Eight prompts were written in parallel by eight agents who could not see each other's
work. These corrections were applied afterwards, across all eight. They overrule
anything below them and anything in the collation that disagrees. **Two of your §0
entries were vindicated**: row 2 is reinstated and row 6 is fixed at source.*

| # | What changed in THIS prompt | Authority |
|---|---|---|
| 1 | **Row 2 reinstated: your design's risk 4 was right.** The quiz calls `matchesAccept` → `fold()` (`answer.logic.ts:32`), a second normaliser nobody had read, which strips hyphens, both apostrophes and all whitespace. The whole band is exposed. §7.4 has been rewritten and the collation's §0.3 and overrule table corrected. **Still no hyphen guard**, for a better reason. | `03-ANSWER-FOLD-FACT.md` |
| 2 | **Your untestable-list gains hyphens, apostrophes/elision and word division.** You had accents, cedillas, commas and capitals. The two additions bite a technology lesson hardest: **`e-mail` = `email`** and **`mot de passe` = `motdepasse`** are each one answer. §7.3 corrected. | same |
| 3 | **BAND RULE, new.** Fold the expected answer and the most plausible wrong answer before authoring any `typeIn`, `errorSpot` or dictée item; **if they collide, move it to `mcq`/`listenChoose`.** | band rule, all eight prompts |
| 4 | **Row 6 fixed at source, and there was a fourth exposure.** Blocking step 4 now names **a2.07, a2.28, a2.29, a2.32**. a2.29 was the one nobody had caught: `scenario` x2 plus the product's first `table`, while asserting step 4 did not gate it. Your `cardDeck` alternative at mission 17/18 is your single-section fallback; keep it. | collation §1.10 and step 4, corrected |
| 5 | **`practice` is MANDATORY**, not merely speaking-only. `lesson-contract.test.ts:505` mirrors the publish gate and fails a non-`assessment` lesson with no `practice`, empty `practice.itemIds`, or empty `Lesson.itemIds`. Your row 3 already voids the design's `practice skill:'listen'`; mission 18/19 must survive as a real `practice` with real `itemIds`. | `ealch-v2/src/content/lesson-contract.test.ts:505-519`, verified |
| 6 | **a2.29's ladder now has quotable rung names and a five-clause contract**, and **the word "rung" has been settled band-wide**. Numbered `rung N` belongs to a2.07's repair move; a2.29's ladder is cited by rung *name*; **your three are voices, not rungs**: SYSTEM, AGENT, FRIEND. §5.3 carries the contract and the collision note. Your §5.3 distinction itself is kept whole; it was the clearest statement of it in the band. | a2.29's prompt, §THE LADDER; collision settled by the consistency pass |
| 7 | **The repair-move id file is `04-REPAIR-MOVE-IDS.md`**, not `11-` (taken by `11-DESIGN-MOCK-PROMPT.md`). Contract: six rows, `au-restaurant`, contiguous, domain-neutral, face-cost order, frozen at publication. **If that file does not exist, a2.07 has not landed:** cite `a2.07` by unit id, author zero repair rows, and say so in your report. | filename collision, and the a2.07-not-landed fallback you did not have |
| 8 | ~~**Your Path A / Path B structure is confirmed correct and no other prompt silently depends on Paul's imperative decision.** a2.27 is the only other unit that wants the imperative and it declines it outright rather than branching. Keep building Path A until told otherwise in writing.~~ **SUPERSEDED by row 10.** | B6, checked across all eight |
| 10 | **PAUL ANSWERED ITEM 2 ON 2026-08-15: option B. YOU DO NOT TAKE THE IMPERATIVE. PATH A IS THE PATH.** The branch is gone: Path B has been struck out and survives only as a one-paragraph note of what was considered and why it is dead. Act 2 is a chunk inventory, not a paradigm, and the three-voice ladder is your Owns and nothing else. **You are not blocked, you do not choose, and you do not build Path B "in case".** The B1 slot (option C) is noted for later and is not opened by you. | Paul, 2026-08-15 |
| 9 | **`corpus:probe` has no `--count` flag.** You already found this and said so at §1. Fixed at source in the collation and in a2.07, a2.28 and a2.29. Nothing to change here. | `scripts/probe-corpus.ts` |

---

## 1. Two things block you, and one of them is Paul's

### 1.1 YOUR THEME DOES NOT EXIST, AND YOU MAY NOT MINT AN ID UNTIL A PROBE CLEARS

The spine says `themes: ['technologie']`. `technologie` is a **domain**
(`ealch-v2/src/content/domainMeta.ts:89`), not a theme. It is absent from the 124 keys
in `ealch-v2/src/content/themeMeta.ts` and holds **zero rows in the seed**. You are one
of two units in the band (with a2.29) whose **only** theme is a phantom, which is why
the collation calls you the true blocking case.

The re-map (collation §5) sends you to **`internet`**, and marks your cell
**NEEDS-MEASUREMENT** — the only two open cells in the whole table are yours and
a2.26's. **Treat `internet` as provisional until this runs:**

```bash
cd ealch-admin
pnpm corpus:probe --theme internet
pnpm corpus:probe --theme technologie-quotidienne
pnpm corpus:probe --theme appareils
pnpm corpus:probe --theme rp-technologie
pnpm corpus:probe --theme reseaux-sociaux
```

`--theme` prints, per theme: the published row count, the max id, the **NEXT FREE ID**
and how many of those rows are already in the seed. There is no `--count` flag; the
collation's `--count` is a typo and the bare `--theme` already reports what it wanted.

**The rule, settled by the collation and not yours to change:** author into whichever of
`internet` and `technologie-quotidienne` holds the most **published** rows; if
`technologie-quotidienne` is empty, take `internet`. A row that is `published` is
reachable over the air and must be **imported by `itemId`, never re-authored**. A row
that is not `published` is invisible to learners and may be treated as absent.

Then, and only then:

```bash
pnpm content:parity      # says whether the DB rows are published or merely present
```

**No item id is minted before both commands have run and the cell is closed.** An id is
`fr.a2.<theme>.<nnn>`; there is no `<theme>` yet.

**What must change mechanically.** The `themes` array lives in three places:
`author-full-curriculum-spine.ts` (the authority), the `content_units` row in Postgres,
and the unit object in `seed.json`. **Do not re-run the spine script** — `spine-drift.test.ts`
exists because a naive re-run would have reverted 74 of 75 unit titles. Edit the array in
the spine file, then let your merge script carry the unit row, as every previous A2 build
did.

```
a2.32 themes   before: ['technologie']
               after:  ['internet']          <- or whatever the probe closes it to
```

Do **not** touch `SEED_CUT.themes` in your diff. The collation moved that edit off the
blocking sequence deliberately (§1.2): `SEED_CUT.tracks` includes `a2` and pulls in every
item your lesson references, so **your cards will not render blank offline**. What is
affected is theme browsing and the flashcard hub, which is a separate reviewed diff
someone else sizes after real row counts exist.

### 1.2 THE IMPERATIVE IS SETTLED: YOU DO NOT TAKE IT

> **ANSWERED 2026-08-15. Paul took option B on `12-DECISIONS-FOR-PAUL.md` item 2.**
> **Nobody owns the imperative. You and a2.27 both use it as unanalysed lexis.**
> **Build Path A in §5.4. Path B is dead.**

Your design made the imperative this unit's grammar payload (§3.6), priced at two
deletions off what a2.01 taught, and argued that no unit in the 75-unit curriculum owns
it. Both of those are almost certainly right, and it is still not yours.

**The reasoning, kept because it is the record of why.** It is a curriculum-shape call,
not a linguistic one: the band is eight situational units with no new grammar, and
giving you the imperative makes you the band's one grammar unit wearing a situational
coat, which is the thing the original mandate said not to do. There is also a
forward-citation smell: a2.27 needs the form at seq 26 and you ship at seq 31, so a2.27
would have been citing a unit that arrives five later, which no unit currently does.
**Option B removes that problem rather than managing it**, which is the other reason it
won.

**What you use instead, and it is the same thing a2.27 uses.** You use `Cliquez`,
`Saisissez`, `Appuyez`, `Sélectionnez`, `Réessayez`, `Connectez-vous`, `Veuillez` as
whole forms, the way a screen says them. **You do not name the mood, you do not
conjugate it, you do not table it, and you do not explain how it is formed.** a2.27
§3.2 states the same rule in the same terms for directions. Neither unit cites the
other for the form, because neither owns it.

**The B1 slot is noted, not opened.** Option C (a B1 unit that owns the imperative) is
the correct long-term home and is out of scope for this band; the spine has no B1 array
at all. **Your report is the evidence that slot gets opened against**, which is why
§5.4 Path A asks you to name the corpus rows that already carry the form.

---

## Identity

**From `author-full-curriculum-spine.ts`, lines 823-831, read 2026-08-15. This block is
correct as it stands; unlike four of the shipped A2 briefs, nothing here is swapped.**

```
a2.32   seq 31   level a2   track a2
  title:  Technology
  sub:    La technologie
  gloss:  smartphone, internet & digital life
  canDo:  Can talk about their phone, the internet and everyday digital tasks
  themes: ['technologie']    <- PHANTOM. See §1.1. This is the one field you change.
  prereqUnitIds: ['a2.01']
  lessonIds:     []          <- first build, version starts at 1
```

Confirmed present and `status: published` in `content_units` (slug `a2.32`,
`kind: curriculum_unit`, a 256-byte shell with no `lessonIds`) — **carried from the
design, not re-queried by the supervisor.** Re-check it with your own preflight.

`prereqUnitIds: ['a2.01']` is **honest**: a2.01 is at seq 1 and has one shipped lesson
(collation C8, verified on SEED). Every declared prereq in this band is shipped.

---

## 2. Pre-flight

```bash
cd ealch-admin

# 1. the theme cell (§1.1). Nothing else may run before this.
pnpm corpus:probe --theme internet
pnpm corpus:probe --theme technologie-quotidienne
pnpm corpus:probe --theme appareils
pnpm content:parity

# 2. the ladder's three rungs, in real orthography
pnpm corpus:probe --words "une adresse électronique,un courriel,un mail,un mél,le clavardage,un téléphone intelligent,la baladodiffusion"

# 3. the machine's voice, which is what you are here to author
pnpm corpus:probe --tokens "Veuillez patienter,Saisissez votre code,Réessayez plus tard,Appuyez sur Entrée,Sélectionnez une option,Mot de passe oublié"

# 4. the fault half
pnpm corpus:probe --tokens "ça ne marche pas,ça bugue,une panne,un technicien,redémarrer,le message dit"

# 5. what a2.30 and a2.31 are about to take from under you
pnpm corpus:probe --words "un ordinateur,un clavier,une souris,une imprimante,un chargeur,un courriel,taper,recevoir" --theme bureau,internet,appareils
```

**Probe with real orthography.** `corpus:probe` does not strip accents: probing
`electronique` or `reessayez` will report ABSENT for rows that exist. This has cost a
build before.

### Every number below is UNVERIFIED

The supervisor **did not query Postgres**. Every DB figure in your design doc and every
figure repeated here is design-agent measurement carried forward. The command that
verifies each one is named beside it. If a figure comes back different, the figure is
wrong and this prompt is wrong; report it and proceed on what you measured.

| claim | figure | verify with |
|---|---|---|
| `internet` total / a2 rows | 336 / 181 | `corpus:probe --theme internet` |
| `appareils` total / a2 | 321 / 62 | `corpus:probe --theme appareils` |
| `rp-technologie` total / a2 | 421 / 111 | `corpus:probe --theme rp-technologie` |
| `technologie-quotidienne` total / a2 | 196 / 70, **sentence-only, 0 `voiceflash` at any level** | `corpus:probe --theme technologie-quotidienne` |
| **`reseaux-sociaux` a1 + a2 rows** | **0 and 0. It starts at b1.** | `corpus:probe --theme reseaux-sociaux` |
| A2 rows importable across the four themes | 424 | the four probes above |
| `courriel` rows corpus-wide | 82 | `corpus:probe --words "un courriel"` |
| `mail` as a headword | **0**; appears only inside sentences | `corpus:probe --words "un mail"` |
| `mél` / rows tagged `quebec` | 0 / 0 | `corpus:probe --words "un mél"` |
| within-theme duplicate `fr` across the four tech themes | 0 | flashhub coverage check + the probe's own duplicate warning |
| `voiceflash` coverage, `internet`/a2 | 61 of 181 | `corpus:probe --theme internet` (prints drills per row) |
| `dictation` coverage, `internet`/a2 | 39 | as above |
| respelled `internet`/a2 `phrase` rows | **3 of 23** | as above |
| `content_exam_tasks` | 2 rows, both `delf_b2`, both `in_review` | out of scope, see §9 |

**`reseaux-sociaux` deserves a second reading.** It has zero a1 and zero a2 rows. Any
social-media framing in this lesson is **authoring from scratch, at a level the theme
does not yet serve**, not importing. Your design already rejected "digital life as
opinions about technology" on that measurement and on two others (the opinion language
is B1; comparatives arrive at a2.08, one unit after you, so the learner cannot yet say
`plus rapide que`). Hold that rejection. If a draft starts drifting toward posts, likes
and followers, it has left the corpus behind and the scope is being underestimated.

---

## 3. Where you sit in the band

### 3.1 What you inherit and must cite, not reteach

| thing | owner | how you use it |
|---|---|---|
| **The repair move** (`Pardon, vous pouvez répéter ?`) | **a2.07**, once, for all eight | **Cite a2.07's `itemId`s from its build report. Author zero repair rows.** Eight independent authorings would put eight rows with the same `fr` into overlapping themes and break the flashcard hub's one-card-per-`fr`-per-theme assumption. |
| **The register / politeness ladder** | **a2.29**, once, for all eight | Cite `a2.29` by unit id. See §5.3 — your three-voice ladder is a different object and the two must not collide. |
| **Price, change, payment** | a2.26 | Untouched by you. `un forfait mobile` is a plan, not a transaction; do not build a payment moment. |
| **Room and service complaints** | a2.29 | a2.29 describes a room problem and cites **you** for the vocabulary of a device fault. Fault description is yours (collation C5). |
| **Job-title feminisation** | a2.30 | Band policy C4: where a feminine form already exists in the corpus, use it; do not mint a competing variant. **This is live for you**: `un technicien` is on your import list. Use whatever form a2.30 lands and mint nothing. |
| **The -ER present** | a2.01 | Quote it by unit id in your reframe (doctrine §B.7). It is the reason your imperative chunks are readable. |
| `depuis` | a2.18 | Used, never taught. `Ça fait deux jours que ça ne marche plus` is a duration and a2.18 owns the frame. |

**The repair move is also the sharpest thing about your unit, and you teach its
absence.** Seven units have taught the learner to say *pardon ?*. You are the one
situation where there is nobody to say it to. That contrast is worth one card and it is
free: cite a2.07's rows for the support-call half, and state plainly that against the
machine the move is unavailable and the only recovery is to read again.

### 3.2 What you hand to a2.35 (Bilan A2), and what you do not

`a2.35` sits at seq 35 with `lessonIds: []` and
`prereqUnitIds: ['a2.21','a2.25','a2.27','a2.32']`. **You are one of its four prereqs,
and one of the two from this band.** As the closing unit you carry three obligations and
refuse a fourth.

1. **A liftable reception bank.** Every `listening` line you author must **stand alone
   without your lesson's framing**, so a2.35 can lift it into a mixed-situation CO set.
   This costs nothing at authoring time and is expensive to retrofit (collation §7.2).
   Your automated phone menu is the single most liftable thing in the band: it needs no
   setup at all.
2. **A liftable scenario.** Same rule for your support call. If a turn only makes sense
   after mission 8, rewrite the turn.
3. **The register axis.** a2.35 is the only place a learner meets more than one
   situation in one sitting, so it is the right place to ask "which voice does this one
   want?" across eight encounters. Hand it the axis, named, with your three rungs as its
   worked example. Say so in your roundup and in your report.

**You refuse the consolidation act.** Your design (§8.7) proposed exactly two hand-offs
and no summary, and the supervisor agrees: doctrine §B.5 says a lesson owns one thing,
and a consolidation act across the other seven would be a ninth unit hiding inside the
eighth. **Do not author a review-of-the-band act, a cross-situation roundup, or a quiz
round drawn from other units' content.** Being last is a position, not a job.

### 3.3 Band constants

If the band's shared constants file exists by the time you build (collation §7.3 — the
canonical form of greet, request, ask price, ask for repetition, complain, close),
**quote it rather than inventing a seventh phrasing**. Your support agent uses the
band's `vous`, your friend uses the band's `tu`, and your opening and closing moves are
the band's. Eight units reading as one world is worth more here than anywhere, because
you are the one a learner reaches last.

---

## 4. The exam policy, verbatim, and it is not negotiable

Every prompt in this band carries this string:

> This unit carries exam value by **teaching what the exam tests** (transactional
> reception at speed, a request in the right register, a structured 60-second turn),
> not by producing an `ExamTask` row and not by populating `Scenario.exam`. Do not
> author `Scenario.exam`. Do not author `ExamTask` rows. Do map each act to a named
> TEF/TCF/DELF task in the design notes, because that mapping is what makes the
> content right, and because it is what a future runner will consume.

Your design's §6 mapping is good and it survives whole. Its escalation (§8.5, wiring
mission 16 to `Scenario.exam`) is **declined**: `Scenario.exam` is read by no code
anywhere in `ealch-v2/src`, `EXAM_TASK_TYPES` is a tagging vocabulary with no runner,
and `delf_a2` is not in `EXAM_FORMATS` and is deliberately not being added until the
first `delf_a2` task exists. Keep the mapping in the report; author none of it.

---

## 5. The teaching problem

### 5.1 Owns: one referent, three voices

> **Every tech object in French has more than one name, and which name you use says who
> you are talking to.**

The flagship case, and **all three rungs are already published**, which is what makes
this teachable rather than aspirational:

| voice | form | where it lives (UNVERIFIED, probe it) |
|---|---|---|
| the system, official written | `une adresse électronique` | `fr.a2.rp-technologie.012` |
| the agent, Canadian standard | `un courriel` | `fr.a2.internet.002`, plus four more |
| the friend, spoken France | `un mail` | inside `fr.sons.alphabet.012` / `.041` / `.046` — **not a headword anywhere** |

**This is the only error in the band that is wrong in both directions.** Everywhere else
a learner who is too formal is merely stiff, and over-politeness is safe. Here, a learner
who says `un email` in Montreal is marked, and a learner who says `un courriel` to a
Parisian friend is marked the other way. Keep that claim; it is the unit's distinctive
one and no other unit can make it.

**The anglicism map is the lexical evidence for the Owns, not a second Owns.** Three
tranches:

- **taken as-is:** `le wifi` (said *weefee*), `un smartphone`, `un texto`, `un emoji`,
  `cliquer`, `scanner`, `zoomer`
- **translated:** `un ordinateur`, `un logiciel`, `une application`, `télécharger`,
  `une pièce jointe`, `un moteur de recherche`
- **both, and the choice is regional:** `mail`/`courriel`, `podcast`/`balado`,
  `smartphone`/`téléphone intelligent`, `chat`/`clavardage`

**Teach the mechanism, not the list** (design risk 12, and it is right): French borrows,
official French translates, Quebec resists hardest. `un texto` and `clavardage` are
already dating. The mechanism does not age and the list does.

### 5.2 Reconciling the ladder with the band's regional policy

C3 is settled and you do not get to reopen it: **the band is France-primary, Quebec is a
named non-scored aside, and a2.26 is the single exception** because tax at the till
changes an answer rather than a word.

Your three-voice ladder is not a contradiction of that policy, but it will read as one
if you author it carelessly. Three rules keep it inside C3:

1. **The scored answer is always the France-standard form.** In a `typeIn`, an `mcq`
   key, a dictée, a `groupDrill` gate: `un mail` and `un ordinateur`. Never `un mél`.
2. **The ladder is taught as a receptive and a register fact, not as a scored lexical
   choice.** A learner is scored on *recognising which voice a form belongs to*, which
   is a register judgement and works in both countries, and never on *producing the
   Quebec form on demand*. C3 rule 2 caps Quebec-naming at one `cardDeck` card per unit
   as colour; your anglicism map's third tranche **is** that card, so it is your one, and
   you get no second.
3. **`un courriel` is not a Quebec aside and must not be filed as one.** 82 published
   rows carry it, five as a headword, and the corpus has been serving it as ordinary
   French since A1. C3's rule 3 covers exactly this: where a form is genuinely the more
   useful one for a TEF/TCF Canada candidate it may be a corpus row, and it does not
   displace the France form in the drill. So `courriel` is the AGENT rung, drilled
   receptively, and `mail` is the FRIEND rung and the produced one.

Rule 3 is the reconciliation and it is worth stating in your report, because it is the
one place where the corpus's silent Quebec lean (82 `courriel`, 0 `mél`) and the band's
France-primary policy actually touch. **Do not propose a `quebec` tag.** Your design's
§8.3 asked for one; there is no schema field for region, adding one is engineering
nobody has costed, and C3 settled the question without it.

### 5.3 How your ladder differs from a2.29's, and why they do not collide

They are two different objects and a reader who conflates them will think the band
teaches the same thing twice.

```
a2.29's ladder    ESCALATION, one referent, one voice, rising force
                  « Il y a un problème » → « Pourriez-vous ... ? » → « Je voudrais
                  parler au responsable »
                  The axis is HOW HARD YOU PUSH. Its framing is "take the person out
                  of the sentence."

your ladder       REGISTER, one referent, three voices, no rising force
                  « une adresse électronique » / « un courriel » / « un mail »
                  The axis is WHO YOU ARE TALKING TO. Nothing escalates. All three are
                  equally polite; two of the three are simply wrong for the listener.
```

**Cite a2.29 by unit id and take its softeners as lexis if it shipped them.** Do not
re-teach escalation, do not build a complaint arc, and do not put `parler au responsable`
in your support call. Your support agent is being asked for help, not pushed.

> ### a2.29's rung names, and the word "rung" itself
>
> *Added 2026-08-15 by the band consistency pass. a2.29 was written in parallel with
> this prompt, so it could not have handed you these strings. Your §5.3 distinction is
> right and is kept whole; this adds the contract and settles a naming collision the
> collation was silent on.*
>
> **a2.29's three rungs, and these names are learner-facing strings you quote
> verbatim if you quote them at all:**
>
> ```
> Rung 1   Ask once, softly.
> Rung 2   Say it again, without the person.
> Rung 3   Ask for the person who can fix it.
> ```
>
> **The five-clause citation contract, binding a2.30, a2.31 and a2.32 alike:**
>
> 1. Quote the three rung names **verbatim**. A paraphrase is a second ladder.
> 2. Reuse a2.29's rung rows by `itemId`. Author **no rung lines of your own** and
>    **zero softener rows**.
> 3. You may add your own column, your own move, filled with your own vocabulary.
> 4. You may **not** rename a rung, add a fourth, or reorder them.
> 5. a2.29's build report publishes the rung-to-`itemId` table as a short list you
>    paste.
>
> **THE NAMING COLLISION, and how it is settled.** Three things in this band were
> called ladders with rungs by three agents who could not see each other: a2.07's
> **six numbered repair rungs**, a2.29's **three named escalation rungs**, and your
> **three voices**. Two of them number their rungs, which is one too many.
>
> **Settled: a numbered `rung N` belongs to a2.07's repair move and to nothing else.**
> a2.29's ladder is cited **by rung name**, never by number — which is why its contract
> makes the names the quotable strings. **Your ladder does not use the word "rung" at
> all.** Call your three what §5.1 already calls them: **the SYSTEM voice, the AGENT
> voice and the FRIEND voice**. They are voices, not rungs, nothing escalates between
> them, and the vocabulary should say so. Sweep any stray "rung" out of your authored
> strings and out of your section titles before you merge; a learner meeting three
> different ladders in one band will remember none of them.
>
> **If a2.29 has not landed when you author** (it is seq 28, you are seq 31, so it
> should have): cite `a2.29` by unit id only, carry no rung row and no rung name, and
> say in your report that the reference is forward and awaiting ids. Do not re-type a
> rung line "so it is ready".

Under a2.29's own constraint the softener family is **unnamed lexis only** and its
availability depends on Paul's item 1. If a2.29 shipped without `pourriez-vous`, you use
`vous pouvez` and say so.

### 5.4 The grammar question, SETTLED

**Read §1.2 first. Paul answered on 2026-08-15: option B, nobody owns the imperative.
Path A below is the instruction. Path B is dead and must not be built.**

#### PATH A — the imperative is not owned. THIS IS THE LESSON.

Act 2 has **no paradigm**. It has a **chunk inventory**: the six things a French
interface actually says, learned whole, with what each one means you should do.

- The learner obeys `Saisissez votre code` without being told the form has a name,
  exactly as the band handles the conditional.
- Mission 4's `tapTable` is **what the screen says / what it means / what you do** —
  three columns, six rows. It is not infinitive-to-form.
- **No production rule is stated, taught, drilled or quizzed.** No `typeIn` asks the
  learner to build a form from an infinitive. No card says a form is made by deleting
  anything.
- The Owns is the three-voice ladder **and nothing else**, which is the cleanest reading
  of doctrine §B.5 this unit can have.
- The mission freed from act 2 goes to act 3, which makes the Owns act six missions
  against three on the machine's voice. That ratio is the defence against the unit
  reading as a vocabulary tour.
- **Avoid pronoun-attached forms in all scored material.** `Connectez-vous`,
  `Abonnez-vous`, `Envoyez-le-moi` attach a pronoun after the verb, and a2.06 (seq 21,
  shipped) taught the preverbal position only. They are whole chunks in a `cardDeck`,
  never a form the learner builds. (This constraint was written for Path B and it
  survives it: the forms are on your screens either way.)
- **Your report must state that the imperative was used untaught, name the twelve corpus
  rows that already carry a `vous`-imperative, and name a2.27 as the other unit doing
  the same.** That is the curriculum finding, and it is the thing a B1 slot will be
  opened against later. **Naming a2.27 here is a shared-finding note, not a citation:**
  you do not depend on a2.27 and a2.27 does not depend on you.

#### PATH B is DEAD. Do not build it.

*Kept as one paragraph so the reasoning is not lost, and deliberately not kept as
buildable instructions.*

Path B was the imperative taught as this unit's paradigm: act 2 becomes an
infinitive-to-form table, the rule is stated as two deletions off what a2.01 already
gave the learner, three screen irregulars ship as three cards, and the technical term
stays off every learner surface. It was cheap and linguistically sound. It died on two
things. **First, curriculum shape**: it would have made a2.32 the band's one grammar
unit wearing a situational coat, which the original mandate forbade. **Second, the
forward citation it could not fix**: a2.27 ships at seq 26 and needs the form, so a2.27
would have been leaning on a unit five places later, which no unit in the product does.
**Paul took option B on 2026-08-15**, so act 2 has no paradigm. If you find yourself
building a table of forms, you have taken the dead path: stop.

**Nothing outside act 2 was ever affected.** The scene, the ladder, the anglicism map,
the phone menu, the portal notice, the traps, both production sections, the quiz's
other three rounds and the roundup are what they always were.

---

## 6. The lesson shape

**One lesson, `a2.32.l1`, 23 missions, 6 acts.** *(22 in the first draft, which counted
the dead Path B. See the numbering note under the mission table.)* `den.tsx:169` pushes
`lessonIds[0]` and `lessonoverview.tsx:47` reads it and nothing else, so a second lesson
is unreachable from the Den. One lesson is band-wide settled (collation C6). Sections
19-25, missions 22-24, act 3 heaviest: you are inside doctrine §F and inside the band's
measured cluster.

**Reframe**, carried verbatim across at least six sections per doctrine §B.4:

> *L'écran vous donne un ordre, l'agent vous pose une question, l'ami vous parle.
> Trois voix, un seul appareil.*

The English working title from your design (**Le même appareil, trois voix**) is a
working title. The final French title is the builder's call.

| # | act | type | what it does | ~~path~~ |
|---|---|---|---|---|
| 1 | 1 L'incident | `scene` | The lockout. Per doctrine §B.2 the A2 scene opens on someone who started a sentence they could not finish: he is on the phone to support, the screen said something, and he cannot report what. The `choice` beat commits the learner between *« Ça ne marche pas »* and *« Le site refuse mon mot de passe »*; both are plausible and one is useless to somebody who cannot see the screen. The `break` beat is the reframe. | both |
| 2 | 1 | `goals` | Four goals, one per act 2-5. | both |
| 3 | 1 | `cardDeck` | Three cards, one per voice, same referent. The Owns stated before it is taught. | both |
| 4 | 2 La voix de la machine | `tapTable` | **What the screen says / what it means / what you do**, 6 rows x 3 cols. Not infinitive-to-form: act 2 has no paradigm (§5.4). Audible per row. **`tapTable`, not `table`** — `table` has never shipped in any of the 64 lessons and this is not the build to prove it. Headers have a glyph budget; keep them short. | required |
| 5 | 2 | `cardDeck` | Six real interface strings, one per card, each with its literal gloss and what it actually means you should do: `Cliquez sur…`, `Saisissez votre code`, `Appuyez sur Entrée`, `Veuillez patienter`, `Sélectionnez une option`, `Réessayez plus tard`. | both |
| 6 | 2 | `cardDeck` | **The screen as the situation, on today's renderer.** A French app's settings screen, one menu row per card: `Paramètres` › `Notifications`, `Confidentialité`, `Mode avion`, `Stockage`, `Compte`, `Se déconnecter`. Front is the French label alone; back is what it does. This is half of what `uiScreen` would have bought, at zero engineering. | both |
| 7 | 2 | `listening` `hideLines: true` | **Replaces the design's `practice skill:'listen'`, which renders a speaking drill.** Four screen prompts heard once, four questions on what to do. Short. | both |
| 8 | 3 **the Owns** | `cardDeck` `size: xl` | The anglicism map, three tranches (§5.1). The regional tranche is your one Quebec card under C3; you get no second. | both |
| 9 | 3 | `groupDrill` | Three gated groups: SYSTEM words, AGENT words, FRIEND words. The learner sorts a word into the voice it belongs to; the third group does not open until the second is right. **Gated, not timed** — there is no timer in the app. | both |
| 10 | 3 | `flashcards` | The ladder as recall: English referent on the front, all three French forms on the back, tagged by voice. | both |
| 11 | 3 | `listening` `hideLines: true` | **The automated phone menu.** `lines` are the recorded menu (`Pour le service technique, tapez 3`), `questions` are MCQ on what to press and why. TEF/TCF CO plays each recording **once**, so ask *what to press*, not *what was the third option*. Every question carries a `why`. **The most liftable thing you author** — see §3.2. | both |
| 12 | 3 | `reading` `questionsInModal: true` | **The portal notice.** A short service-unavailable or account-verification notice of the kind a government portal posts, with a tappable `glossary` on the eight hard words. The passage holds the screen; questions follow on a second page so the learner cannot pattern-match against visible text. TEF/TCF CE, and it carries the immigration relevance your design wanted from digital admin without colliding with a2.29's booking or a2.26's payment. | both |
| 13 | 3 | *one extra mission* | **Required.** Act 2 loses a mission to act 3, because act 2 has no paradigm: a second `groupDrill` or a `cardDeck` on the ladder past `mail` (`podcast`/`balado`, `chat`/`clavardage`). The mission numbers below are the ones that count; the old Path B numbering is gone. | required |
| 14 | 4 Le piège | `trapDrill` **stepped** | Two traps in one drill. **(i)** which of these is the screen telling you to do something, and which is describing what you did. **(ii)** register mismatch, which of these would you say to the support agent. **Stepped shape only** (`rule` > cards > audio > gated drill, with `swipe`, an `audio` spec and a `say`). The stacked shape hides the gate, the audio and the sub-mission number. `size` comes OFF a stepped `trapDrill`. | required |
| 15 | 4 | `commonErrors` `swipe: true, size: 'lg'` | Marked in both directions. Five cards: `un email` said in Montreal; `un courriel` said to a Parisian friend; `je vais downloader`; `mon computer`; `Ça marche pas` said to a support agent. (The sixth, a statement used as an instruction, was Path B's and is gone with it.) Each `why` explains why the wrong version was a reasonable thing to have said. **`swipe: true` is mandatory** — three shipped lessons omit it and lose the deck. | required |
| 16 | 4 | `dictation` | Write what the machine said. `itemIds` must name rows carrying the `dictation` drill, checked against **Postgres**, not the seed. See §7.4 for the two spelling rules. | both |
| 17 | 5 Production | `scenario` | **The support call, `vous`.** The agent cannot see the screen. Turns force the learner to produce what happened, when it started, what they already tried and what the message said, and to **ask** as well as report (`C'est quoi, le délai ?`, `Je dois faire quoi maintenant ?`) — TEF EO Section A scores elicitation. `alts` on every turn so more than one phrasing is accepted; `userEn` on every turn. Must be liftable by a2.35 (§3.2). | both |
| 18 | 5 | `scenario` **or** `cardDeck` | **The same fault told to a friend, `tu`.** Same content, other voice: `mail` not `courriel`, `ça bugue` not `cela dysfonctionne`, `ordi` not `ordinateur`. The contrast IS the Owns being produced. **Two `scenario` sections in one lesson has no precedent in any shipped lesson**, and the collation's device-check step (blocking step 4) names a2.07 and a2.28 but **not you**. Either ride a2.28's check if it has run, or run the same ten-minute check yourself, or ship the `cardDeck` of paired utterances. **Decide before authoring, and report which and why.** | both |
| 19 | 5 | `practice` `skill: 'speak'` | Voiceflash on the fault-description phrases. **Every named item must carry the `voiceflash` drill.** `technologie-quotidienne` has zero `voiceflash` rows at any level (UNVERIFIED, probe it): a section naming one of its rows renders a mic that scores nothing. | both |
| 20 | 5 | `progressCheck` | Where the learner stands before the quiz. | required |
| 21 | 6 L'examen | `quiz` (rounds) | **ONE quiz.** A second quiz section is silently never rendered. See §7. | required |
| 22 | 6 | `reviewDeck` | Leitner close on the ladder. | required |
| 23 | 6 | `roundup` | The reframe one last time, plus the hand-off to a2.35 (§3.2). **Not a summary of the band.** | required |

> **Numbering corrected 2026-08-15, when the paths collapsed.** This table carried a
> dual `Path B / Path A` mission number in every row from 13 down, and a flat `22` on
> the roundup that only ever described Path B. With Path B dead, the Path A number is
> the number: **the lesson is 23 missions, not 22**, because act 2 loses a mission to
> act 3 and act 3 gains one. §6's opening line has been corrected to match. Mission 18
> is the repeated-`scenario` exposure; it was called "mission 17" under the old
> numbering and §6, §7.1 and §13 have been corrected to say 18.
>
> **The last column is dead.** It said which path a mission belonged to. With one path
> left, `both` and `required` both mean **required**, and there is nothing to opt out
> of. Every row in this table ships. The column is struck out rather than deleted so a
> reader comparing against an older copy can see what happened to it.

**Repetition is safe here.** Repeated `listening`, `practice`, `trapDrill`, `examples`,
`groupDrill`, `cardDeck` and `tapTable` are approved without a device test —
`listening` repeats in six shipped lessons at up to three per lesson (collation 1.10).
Only `scene`, `scenario`, `reading`, `dictation` and `table` are genuinely untested, and
you use one each of four of them and none of the fifth. Mission 18 is your only exposure.

---

## 7. Layout, scene, and the quiz

### 7.1 Required layouts, and the test asserts them

- **The three rungs belong on one screen with the same referent visible**, so the reader
  sees one object and three names. This is the Owns and splitting it makes it two small
  lessons. **First required layout.**
- **The support call's phrasing and the friend's phrasing belong side by side**, the
  same fault in two voices. **Second required layout**, whichever way mission 18 lands.
  If it degrades to a `cardDeck`, the pairs are the cards.
- **What the screen says and what you do belong in one row**, not in two sections.
- Three term chips per section at most, and the chip row has a 37-character budget on a
  Pixel 6. Every declared term must be surfaced by a section.
- `sheetId` resolves only inside its own lesson. You cannot extend anyone else's sheet,
  and a `cheatSheet` inside a reference sheet draws its title and nothing else.

### 7.2 The scene

The A2 register (doctrine §B.2). **The setting is the incident, not a place.**
`SceneSetting` is a required field and this unit has no counter: write
*"Il est 21 h. Le site ne le reconnaît plus."* Naming an office or a café would be a lie
about where this happens and would make the unit read as a workplace lesson, which is
a2.30's.

Beats in a named `SCENE_BEATS` const, prose at `md`, choice and break at `lg`, each with
its own `audio`, break body 24 to 40 words.

Watch the bubble: a spaced exclamation mark in a French line has made the scene lose its
last word on a Pixel 6 while the gloss still translated it, and interface strings are
full of them (`Réessayez plus tard !`). Put the flex on a wrapper `View`, never on the
`TX`.

### 7.3 Quiz notes

**One quiz per lesson.** A second `quiz` section is silently never rendered.

- Rounds of 8, `roundFailThreshold` set so a failed round fires its drill.
- **`mcq` for the register choice.** This is the Owns and the only format that can test
  "which voice does this belong to" with enough context to be determinable.
- **`listenChoose` needs an explicit `say` on every question.** Without it the card
  speaks the answer, and on an English-option question it speaks English at a listening
  exercise.
- **`errorSpot` is free text** and runs whole-sentence. Use it for the register mismatch
  (`un courriel` said to a friend), which is a real error learners produce.
- **`typeIn`** tests the fault description or the interface chunk as a whole string.
  **No question builds a form from an infinitive at all**, because act 2 has no
  paradigm. (Path B would have allowed it. Path B is dead.)
- **The quiz shuffles its options at runtime; missions do not.** Do not hand-randomise
  quiz options, and do author mission options in the order you want them read.
- **The complete list of what no scored surface can test** *(extended 2026-08-15 by the
  band consistency pass; you had four of the six)*. Quiz `typeIn` and `errorSpot` are
  graded by `matchesAccept`, which calls **`fold()` in
  `ealch-v2/src/content/answer.logic.ts:32`**. `fold()` strips **accents, case,
  punctuation, hyphens, the middle dot, both apostrophes and all whitespace**:

  | | always passes |
  |---|---|
  | accent, cedilla | `réessayez` = `reessayez`, `télécharger` = `telecharger`, `ça` = `ca` |
  | **capital** | `sur Internet` = `sur internet` — you had this, and you were right |
  | **hyphen** | `mot-de-passe` = `mot de passe`, `e-mail` = `email` |
  | **apostrophe, elision** | `l'écran` = `lecran`, `j'ai` = `jai`, `qu'est-ce` = `questce` |
  | **word division** | `sur Internet` = `surinternet` |
  | comma, punctuation | any |

  The two you were missing are the two that bite a technology lesson hardest:
  **`e-mail` against `email` is one answer**, and **`mot de passe` written as one word
  is one answer**. Both are natural distractors and both are dead. `sur Internet` stays
  killed as a scored item for the reason you gave. Teach any of it in a card if you
  want; do not quiz it.
- **BAND RULE, new.** Before authoring any `typeIn`, `errorSpot` or dictée item, fold
  the expected answer **and** the most plausible wrong answer. **If they fold to the
  same string the item tests nothing and must be moved to `mcq` or `listenChoose`.**
  Assert `fold(answer) !== fold(distractor)` over every authored near-miss in your test
  file. Your interface strings are full of near-misses that fold together; this rule is
  how you catch them before a learner does not.
- Every question carries `why` **and** `ref`.
- **Say which questions you wanted and could not write.**

### 7.4 The two spelling rules that replace the design's hyphen guard

> **RESOLVED 2026-08-15 by the band consistency pass. Your design's risk 4 was right
> and the supervisor's overrule of it has been withdrawn.** The grep this section asked
> you to run has been run. `SilentCards.tsx` does not call `normalizeFr` — that much of
> collation §0.3 was true — **but it calls `matchesAccept`, which calls `fold()` in
> `ealch-v2/src/content/answer.logic.ts:32`, and `fold()` strips hyphens, both
> apostrophes and all whitespace.** So the quiz was exposed all along, by a second
> normaliser nobody had read. The collation's §0.3 and its overrule-table row have both
> been corrected; the entry now records that agent 8's conclusion was right.
> Authority: `03-ANSWER-FOLD-FACT.md`.

The design's risk 4 wanted a band-wide guard against hyphen-bearing answers. **The
guard is still not built, but for a different reason.** It is not that the exposure is
narrow; it is that the exposure is total and a renderer guard is the wrong instrument
for it. Three rules replace it:

1. **Do not author a dictée whose only difficulty is a hyphen.** `Connectez-vous` and
   `connectez vous` are the same string to the dictée check, so a tile exercise that
   turns on the hyphen cannot be got wrong or right.
2. **Do not author a `typeIn` whose `accept` array relies on the hyphen being folded.**
   Corrected: on that surface it **is** folded, so such an `accept` entry is redundant
   rather than load-bearing. Put every spelling you intend to accept into `accept`
   literally anyway; it costs nothing and it survives a future change to `fold()`.
3. **The band rule** (§7.3): fold the expected answer and the most plausible wrong
   answer, and if they collide move the item to `mcq` or `listenChoose`. This is what
   risk 4 was reaching for, expressed as authoring discipline plus one assertion instead
   of a renderer change.

**Do write "no scored question may turn on a hyphen" into your report as a band
finding**, which is the reverse of what this section used to tell you. Seven other
units were copying the narrow reading and all seven prompts have been corrected.

---

## 8. Corpus plan

**Import-dominant: roughly 30 rows authored, roughly 120 imported.** Every one of the 42
tech headwords the design checked already lives in two or more themes. `un ordinateur`
exists seven times. **If you author `un mot de passe` fresh you have created an eighth
home for a word that already has seven.**

### 8.1 The forty percent rule, which is what the band is for

> **At least 40 percent of this unit's newly authored rows must be in the voice of the
> person the learner is talking to.**

The corpus authored only the learner's half of every situation. The nouns are finished;
the other party's speech does not exist. For you the other party is three people: the
machine, the support agent and the friend. On the ~30-row plan below that means at least
12 rows, and the plan clears it comfortably: the six interface strings and the five menu
lines are the machine's voice on their own.

### 8.2 Rows to author (~30)

| what | kind | count | why it does not exist |
|---|---|---|---|
| `un mail` as a headword, register-noted | word | 1 | exists only inside sentences; the ladder needs all three rungs as headwords |
| `un mél`, `le clavardage`, `la baladodiffusion`, `un téléphone intelligent` | word | 4 | 0, 1, 0 and 0 headwords respectively (UNVERIFIED) |
| the six interface strings as fixed chunks | phrase | 6 | twelve `vous`-imperative rows exist repo-wide and none is tech |
| support-call fault descriptions (`Ça s'est bloqué ce matin`, `J'ai déjà essayé de redémarrer`, `Le message dit que le code a expiré`, `Ça fait deux jours que ça ne marche plus`) | sentence | 8 | act 5 needs turns the corpus does not hold |
| peer-register counterparts (`ça bugue`, `mon ordi rame`, `je te l'envoie par mail`) | phrase/sentence | 6 | the `tu` half of the ladder is entirely unauthored |
| the automated menu lines for mission 11 | sentence | 5 | none exist |

Sentence budget 14 words (doctrine §C). Passé composé and futur proche are permitted in
corpus sentences and you need both (`ça s'est bloqué`, `je vais réessayer`).

### 8.3 Rows to import (~120)

All from `fr.a2.internet.*`, plus a handful from `fr.a2.rp-technologie.*` for the fault
vocabulary (`une panne`, `un technicien`, `redémarrer`, `faire réparer`,
`un code de vérification`, `une capture d'écran`) and `fr.a1.rp-technologie.*` for base
verbs the learner already has. **A named import by `itemId`, never a copy.**

**Do not import, cite, display or build on `fr.a2.internet.009` and `.010`.** They are
metalinguistic commentary stored as corpus rows:

```
fr.a2.internet.009   fr: "On dit sur Internet, sans article et avec une majuscule."
fr.a2.internet.010   fr: "Les trois se disent ; courriel est le terme officiel, mail est le plus courant."
```

They are notes about French, written in French, sitting in a table whose rows are served
as flashcards, dictée sentences and TTS lines, and `.010` carries `flashcard` in its
drills. A learner meeting `.010` in the flashcard hub sees a French sentence explaining
French with an English gloss explaining the explanation. This is the same shape doctrine
§E settled when it ruled that a participle is never a corpus item.

**They are a defect and you flag them; the repair is not part of this build.** They are
published rows and `content:publish` is blocked (it would delete `sons.09.l1`, which is
seed-only). Demoting them to `notes`, a lesson `term` or a `commonErrors` card touches
shipped content and belongs in its own reviewed diff with its own parity check. **Report
them by id, with the demotion proposed and not applied.** The material itself is good and
you should teach it: put the capital-I rule and the three-forms note in your own cards,
sourced from your own strings, not from those two rows.

Add one guard while you are here: **no `internet` row your lesson names may have an `fr`
that is a sentence about French.** That is cheap, it is scoped to your lesson, and it
stops the next author reaching for them.

### 8.4 Id range, and the collision that is actually live

Take your block from the batch ledger after the probe closes §1.1, and **check the row
COUNT after the apply, not the highest id.** A highest-id check cannot see a concurrent
lesson landing below your top, and this has cost two builds.

**a2.30 and a2.31 are being built in the same parallel group as you**, and `bureau`
holds `un ordinateur`, `un clavier`, `une souris`, `une imprimante`, `un chargeur`,
`taper`, `recevoir` and `un courriel`. **The ledger must allocate the device nouns to
exactly one of the three before any of you authors.** Do not resolve it by authoring
first.

### 8.5 Backfill this build must do

- **Respellings, roughly 20.** `internet`/a2 `word` rows are 62 of 76 respelled but
  `phrase` rows are **3 of 23** (UNVERIFIED). Any imported phrase you show with a
  respell sub-line needs one authored. Follow `RESPELL-CONVENTION.md`: the house caps
  mark phrase-final stress, and you do not invent IPA.
- **`le wifi` is said *weefee*.** An English speaker will say *why-fye* and be
  misunderstood. One `term`, and it earns its chip.
- **Watch the respelling guards for false positives.** `wifi`, `Internet` capitalised
  mid-sentence, `un ordi`, `SIM`, `USB`, `GPS` and `emoji` will all look wrong to a
  checker built for ordinary French orthography. Whitelist the acronym set explicitly and
  document why. Scope every absence claim to **this lesson**, never to the bundle.
- **`hasPlainNasalFor` has three documented blind spots** and your lexicon is full of
  nasals: `un lien`, `une connexion`, `un identifiant`, `un abonnement`, `un onglet`.
  Import the real function, assert your repairs by name in one table, and run stored /
  half / final all through it rather than reimplementing.

### 8.6 Collisions to re-check after the apply

| against | risk | what you do |
|---|---|---|
| **`a1.03`** (noun gender) | **Medium and real.** Three prior A1 builds moved its measured `-e` ending population by importing nouns, and a *carried* row moves that population even when nothing is authored. `internet` has 0 a1 rows so a1-scoped statistics should be untouched. **Verify, do not assume.** | re-run `a1-03-genre.test.ts` after the apply |
| **`a2.01`** (-ER verbs) | **Low**, now that the imperative is not taught here. | quote a2.01 by unit id in the reframe |
| **a2.30 / a2.31** | Medium, and concurrent. | §8.4 |
| **`a2.13`** (modaux) | Low. `Il faut redémarrer` is modal territory. | use `Il faut` sparingly |
| **`a2.06`** (direct object pronouns) | Low. Pronoun-attached forms sit outside the preverbal position it taught. | §5.4, and keep them out of scored material |
| **`a2.29`** (register ladder) | Medium. §5.3. | cite, do not re-teach |

---

## 9. Wiring

```
scripts/author-technologie-batch.ts             content:technologie
scripts/merge-technologie-into-seed.ts
scripts/data/technologie-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-32-technologie.test.ts
```

**The seed carries none of these themes today.** `internet`, `appareils`,
`rp-technologie`, `technologie-quotidienne`, `reseaux-sociaux` and `journalisme` are all
absent from `seed.json`'s 77 theme slugs. Every prior A2 build merged into a theme the
seed already had; **you are the first to pull one across.** Write the merge to add the
theme, not just the rows, and verify the **item count** in the seed after the merge
rather than the highest id.

**Postgres first, seed second, and that is the end of the job** (doctrine §C).

- **Do not run `content:publish`.** It is blocked: it would delete `sons.09.l1`, which
  is seed-only. Run `content:parity` first, always.
- **Never `git checkout seed.json`.** Reverting it discards other authors' uncommitted
  lessons, and three units are in flight beside you. Re-run the merge instead.
- `seed.json` is canonical `JSON.stringify(x, null, 2)`. A whole-file rewrite is safe; a
  huge diff is usually not a reformat, so read it.
- **Diff the DB bodies against git before anyone publishes anything.** git has run ahead
  of Postgres before and a publish then destroyed it silently.
- Images are **not** a content-only change: `ealch-v2/src/content/lessonImages.ts`
  enumerates every `require()` statically because Metro resolves them at build time. A
  bundled screenshot of a French interface would be a code change plus an asset. It
  ships over OTA but not with a content publish. **Out of scope for this build.**
- Do not author `Scenario.exam`. Do not author `ExamTask` rows. Do not add `delf_a2` to
  `EXAM_FORMATS`.
- Do not author `modelPlayback`, `wrongThenRight`, `perSentenceReplay`, `scoreOn`,
  `autoplay` or `maxPlays` believing they do anything. All six validate, publish and are
  read by no renderer. The seed already carries 31 of them.

---

## THE ADMIN TYPECHECK, AND THE FIVE FIELDS THAT DRAW NOTHING

**Added 2026-08-15, after a2.07 shipped. This is not advice. Run it.**

```bash
pnpm -C ealch-admin typecheck
```

**It is the ONLY check in this project that sees a field the renderer does not
read.** `validateLesson` tolerates unknown keys, and so does the publish path:
a field that is not in the type is carried into Postgres, into `seed.json`, into
the OTA snapshot, and rendered by nobody. a2.07 shipped, **published in snapshot
v49 at rollout 10**, and passed 4,195 tests with **33 blank lines in it**.

### The five a2.07 got wrong. Do not repeat them.

| you might write | it draws | write instead |
|---|---|---|
| `sub` on a **groupDrill item** | **nothing** | **`note`** — the item type is `{ fr, ipa?, note?, itemId?, respell?, en?, silent?, pair? }` and `GroupDrillView` builds its second line from `note`/`respell`/`en` |
| `itemIds` on a **cardDeck** | **nothing** | release the ids through **`deckTranche`**. Only `practice` reads `itemIds`; a2.07 was the only one of **285** shipped cardDecks carrying it |
| `canDo` on the **Lesson** | **nothing** | it belongs to the **unit**. a2.07 was 1 of 66 |
| `track` on the **Lesson** | **nothing** | drop it. 1 of 66 |
| `teaches` on the **Lesson** | **nothing** | **`grammarIntroduced`** (62 of 66 lessons), and add **`grammarAssumed`** (59 of 66) |

`sub` IS legitimate on a **cardDeck card**. It is not legitimate on a groupDrill
item. The two look identical in a diff and only the typecheck tells them apart.

### The two typing fixes you will also need

```ts
// LessonSection is a UNION and only the scene variant has beats.
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [ ... ];

// LessonDrill.format is a literal union, not string.
import type { LessonDrill } from '../../../ealch-v2/src/content/schema.ts';
const DRILLS: LessonDrill[] = [{ id, title, format: 'flashcard' as const, ... }];
```

### Assert the class, not the instances

Copy both of these into your test file. They cost nothing and they are what
would have caught a2.07:

```ts
test('groupDrill items use note, not sub: sub draws nothing', () => {
  for (const sec of sectionsOf(L!)) {
    if (sec.type !== 'groupDrill') continue;
    for (const g of (sec as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? []) {
      for (const it of g.items ?? []) ok(!('sub' in it), 'a group item carries sub, which draws nothing. Use note.');
    }
  }
});

test('the lesson carries no field the shipped corpus does not', () => {
  const others = seed.lessons.filter((l) => l.id !== LESSON_ID);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const invented = Object.keys(L as unknown as Record<string, unknown>).filter((k) => !known.has(k));
  deepStrictEqual(invented, [], \`carries field(s) no other lesson has: \${invented.join(', ')}\`);
});
```

Full diagnosis: `41-DEAD-FIELDS-WARNING.md`.

---

## 10. Your test

Invariants §6, plus the four holes every guard in this band still carries:

- **The jargon walk must cover `Lesson.intro` and `overview`.** `prose()` drops `sub`,
  so run the checks over a `display()` walk, and check the `-s` plural of every `JARGON`
  entry. A throwing source silently disables about thirty assertions.
- **The house word-boundary excludes `'`**, so it cannot see `j'ai`, `l'écran`,
  `d'accord`. Drop the apostrophe from the left boundary and keep it on the right.
- **`\bhonest` cannot see "dishonest".** Phrase the banned-word guard so it fires on the
  substring, not the word.
- **The double-stop guard is half the shape.** Check for a sentence-final stop followed
  by any punctuation, not for two dots.

Specific to this lesson:

- **The three rungs appear in one section with the same referent visible.**
- **The support-call phrasing and the friend phrasing appear as a pair in one section.**
- **`a2.29` is cited by unit id and its ladder is not re-taught**; assert that no
  authored string escalates a request.
- **a2.07's repair-move `itemId`s are cited and no repair row is authored by you.**
  Assert by id.
- **Every item named by a `practice` section carries the `voiceflash` drill, and every
  dictée item carries `dictation`, checked against Postgres and not the seed.**
- **`commonErrors` carries `swipe === true`.** Pin it.
- **The `trapDrill` is the stepped shape**: `rule` > cards > audio > gated drill, with
  `swipe`, an `audio` spec whose `recordingId` names a take containing those lines, a
  `say`, and no `size`.
- **No authored string states a rule for forming an order, and no scored question
  builds a form from an infinitive.** Scope it to production surfaces and assert it.
  This is the assertion that pins decision item 2 into the build, so make it exact and
  make its failure message say why. Assert too that **the mood is never named**: neither
  "imperative" nor "impératif" on any learner surface, and no sentence of the shape
  "drop the little word from the `vous` form", which is the paradigm with the label
  filed off. a2.27's suite carries the same pair.
- **No `internet` row this lesson names has an `fr` that is a sentence about French**,
  and `fr.a2.internet.009` and `.010` are named by neither the lesson nor the corpus
  file.
- **The France-standard form is the key of every scored register question**; assert that
  no `mcq` answer, `typeIn` `accept` entry or dictée target is a Quebec-only form.
- **At most one card names Quebec divergence** (C3 rule 2).
- **No question turns on an accent, a cedilla, a comma or a capital.**
- **Exactly one `quiz` section**, and no `Scenario.exam` and no `ExamTask` anywhere in
  the diff.
- **The listening lines stand alone.** Assert that no `listening` line references a
  section, a mission number or an earlier card by name. This is what makes them liftable
  by a2.35 and it is cheap to pin now and expensive later.
- **No em dash anywhere.** No `honest` or `honesty` in any authored string.
- **Acronym whitelist is explicit and documented** in the respelling guard.

**Mutation-test**: put a Quebec form in a scored key; drop `swipe` from `commonErrors`;
name a `technologie-quotidienne` row in the `practice` section; state the order rule;
name the mood; make a dictée turn on a hyphen; write a listening line that says "as you
saw in the last card"; author a second `quiz`. Expect at least one of these to find a
weakness rather than confirm a strength. A mutation the batch catches and the test does
not is a hole in the test.

---

## 11. Settled before you start

- The identity block, with `themes` as the one field that changes.
- One lesson. `lessonIds: []`, version 1.
- All 35 section types render. Nothing in this lesson needs engineering beyond
  `listening.hideLines`, which is funded and built band-first.
- `uiScreen` is declined. Missions 6 and 12 are the delivery.
- `practice` renders the speaking drill whatever `skill` says.
- No timer exists in the app.
- Regional policy: France-primary, Quebec as one non-scored card, a2.26 excepted, no
  region tag, no schema change.
- The repair move is a2.07's; the register ladder is a2.29's; fault description is yours.
- Exam value is taught, not tagged. Zero exam rows.
- No consolidation act.

## 12. UNVERIFIED

- **Every Postgres figure in this file and in the design.** The supervisor did not query
  the database. Named probes are in §2.
- **Which theme you write into.** `internet` is the recommendation and the cell is open
  until the probe runs.
- **Whether `listening.hideLines` has landed.** Check before authoring any listening
  section. If it has not, stop.
- ~~**Paul's answer on the imperative.**~~ **Resolved 2026-08-15: option B, nobody owns
  it. Path A is the build and Path B is dead.** Nothing here is open.
- **Whether a2.07 and a2.29 are shipped, and their exact item ids and wordings.** Both
  are citation dependencies. Read their build reports, not their designs. If a2.07 has
  not shipped, you have no repair ids to cite and must say so rather than authoring your
  own.
- **Whether two `scenario` sections render.** No shipped lesson has ever carried two, and
  the band's device-check step does not list you.
- **Which normaliser `SilentCards.tsx` calls** (§7.4).
- **Whether a2.30 or a2.31 has taken the device nouns.** Ledger, before you author.
- Baseline test count and current mission range.

---

## 13. What to report

Doctrine §F, plus:

- **The theme decision**, with the probe output that closed it, and the before and after
  of the `themes` array. You are one of two units that could not exist until this
  resolved.
- **The imperative, used untaught.** State it plainly, name the corpus rows that already
  carry a `vous`-imperative, name a2.27 as the other unit doing the same, and say that a
  B1 slot is the outstanding fix. **This is not a choice you report; it is a finding you
  file**, and it is the evidence the B1 slot gets opened against. Do not report "which
  path I built": there is one path.
- **How the three-voice ladder was reconciled with the France-primary policy**, and
  specifically how `courriel` was filed. This is the one place in the band where the
  corpus's silent Quebec lean and the settled policy touch, and the next author needs
  your answer.
- **How your ladder was kept distinct from a2.29's**, in one sentence a reader can check.
- **Mission 18** (mission 17 under the pre-2026-08-15 numbering): what you shipped,
  whether the device check ran, and what it showed. The
  band has three exposures to repeated sections and its list of them has two entries.
- **`fr.a2.internet.009` and `.010`**, by id, with the demotion proposed and not applied.
- **What `SilentCards.tsx` actually calls**, closing the hyphen question the design
  opened and the supervisor scoped.
- **How much you imported against how much you authored**, and the percentage of authored
  rows in the other party's voice. "Almost nothing authored" is the expected answer to
  the first and 40 percent is the floor on the second.
- **What you handed a2.35**, listed: the liftable listening lines by section id, the
  liftable scenario, and the register axis. And confirm you refused the consolidation act.
- Whether the unit read as a vocabulary tour anyway. With 424 importable rows sitting
  there the pull is strong, and the mission split is the defence: if a draft ends with
  more missions on device nouns than on the register ladder, it is the wrong lesson.

---

*This file is `.md` and therefore gitignored in this repo. It needs `git add -f` to be
tracked. Nothing here has been committed.*
