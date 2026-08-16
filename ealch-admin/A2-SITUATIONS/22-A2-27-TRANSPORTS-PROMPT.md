# Build a2.27 "Les transports"

Trail seq **26** of 35. Unit 3 of the A2 situational band (seq 24 to 31), and the third
of the four units that may run in parallel after `a2.07` lands.

**This is the only unit in the band where the learner's turn is trivial and the reply is
the exam.** `Pardon, où est la gare ?` shipped at a1.20. What comes back at you is
fourteen words of unscripted, spatially sequenced instruction that has to be held,
ordered and acted on. No amount of production practice helps. Build the lesson that
faces that.

**Read first, in this order:**

1. `ealch-admin/A2-SITUATIONS/10-BAND-COLLATION-AND-DECISIONS.md`. The settled decision
   register for the band. It outranks this prompt, and it outranks your design doc.
   Where this prompt and the collation disagree, the collation wins and you report it.
2. `ealch-admin/A2-SITUATIONS/26-a2.27-transports-DESIGN.md`. Your unit's design. Six of
   its recommendations were overruled. §0 below lists all six, so read the design after
   you have read §0, not before.
3. `ealch-admin/A2-BUILD-DOCTRINE.md` (§B, §C, §E, §F) and `A1-BUILD-INVARIANTS.md`.
4. `ealch-admin/A2-BRIEF-CORRECTIONS.md`, then **§0 of this file**, which corrects two
   things the corrections themselves get wrong for you.
5. **`a2.04` as shipped** (seq 13, prepositions of place, your declared prereq, and it
   IS shipped). Read `A2-04-BUILD-REPORT.md` §0, §10, §12 and §13. §13 was written to
   you by name.
6. **`a2.07` as shipped** (seq 24, the band opener). It owns the repair move. You cannot
   author mission 16 until its item ids exist.
7. `ealch-admin/A2-04-PREPOSITIONS-LIEU-PROMPT.md` and `A2-23-PRONOMINAUX-PASSE-PROMPT.md`
   for the house form of a build and its report.

---

## §0. What was overruled, and the two facts you are being handed corrected

Read this before the design doc. Six of its recommendations do not survive the
collation, and reinstating any of them is the most likely way this build goes wrong.

| # | The design proposed | Verdict | What replaces it |
|---|---|---|---|
| 1 | `chainDrill`, a new section type for the four-move rung | **DECLINED** (collation §3.2, C2). The band funds one component and it is not this one. | The chain ladder on today's renderer: two `groupDrill`, one `listening`, one stepped `trapDrill`. Spec in §4. |
| 2 | "a2.27 may use `y` in a corpus sentence" (§2.5) | **WITHDRAWN** (collation C8) | Nothing in this lesson uses `y` for a place, in any surface, including corpus rows. §3.2. |
| 3 | a2.27 owns the counter script, a2.29 cites it (§5, §8.5) | **NOT GRANTED** (collation C5). Your Owns is multi-step direction chains, and ordinals in directions. Nothing else. | You keep the guichet as a scenario setting because your `canDo` says "buy a ticket". You do not teach a general counter script and you do not own register. §5. |
| 4 | 8 authored repair rows in a transport frame (§7.2) | **DELETED** (collation 1.6, 7.1). a2.07 authors the repair move once, in `au-restaurant`, for all eight units. | You author **zero** repair rows and cite a2.07's `itemId`s. §5.3. |
| 5 | `je voudrais` **and** `pourriez-vous` as softeners (§3.4) | **HALF DECLINED.** `pourriez-vous` belongs to a2.29's ladder. (Decision 1 was answered 2026-08-15, option A: a2.29 gets it, you still do not.) | `je voudrais` only, as unanalysed lexis, one line saying it is a softer `je veux`. §5.2. |
| 6 | `listening.hideText` (§4.1) | **RENAMED AND FUNDED** as `listening.hideLines` (collation §3.5) | One optional boolean. Same behaviour. Use the settled name. §4.3. |

**Two corrections to what you have been told about the code. Both measured today.**

**C-1. `fold()` strips hyphens and apostrophes, and the collation says it does not
matter.** Collation 0.3 scopes the hyphen exposure to `normalizeFr` and the dictée, and
concludes "no band-wide hyphen guard is needed". That is right about `normalizeFr` and
wrong about the quiz. `ealch-v2/src/content/answer.logic.ts`, `fold()`:

```
.replace(/[/[\]()«».,!?;:]/g, '')
.replace(/[-·’']/g, '')
.replace(/\s+/g, '')
```

Accents, hyphens, middots, both apostrophes, all punctuation and **all whitespace** go.
`fold()` is what `matchesAccept` uses, and `matchesAccept` is what grades quiz `typeIn`
and `errorSpot`. So in your quiz: `un aller-retour`, `un aller retour` and
`unallerretour` are one answer, and `jusqu'au feu` and `jusquau feu` are one answer.
This is a transport lesson: `aller-retour`, `rond-point`, `jusqu'au`, `l'arrêt`,
`l'abonnement` and `d'environ` are all over your material. Carry the correction into
your report as a band finding, because seven other units are copying 0.3's consequence.

**C-2. `corpus:probe` has no `--count` flag.** The collation's §1.3 and §5 give
`corpus:probe -- --theme <theme> --count`. `scripts/probe-corpus.ts` reads only
`--theme`, `--words`, `--tokens` and `--unit`. It prints the Postgres count and the seed
count for everything, always, by construction. Drop `--count`.

---

## Band consistency pass, 2026-08-15

*Eight prompts were written in parallel by eight agents who could not see each other's
work. The pass below reconciled them. **Both of your §0 corrections were verified and
adopted band-wide**; C-1 in particular overturned the collation's §0.3 and its overrule
of "the whole band is exposed to the hyphen fold", which is now withdrawn. Three things
change for you.*

| # | What changed in THIS prompt | Authority |
|---|---|---|
| 1 | **C-1 is now band doctrine, and it is one item longer than you wrote it.** The fold also kills **capitals** and, because it strips all whitespace, **word division**. Your §11 summary line has been extended. | `03-ANSWER-FOLD-FACT.md` |
| 2 | **BAND RULE, new, applies to your `typeIn`, `errorSpot` and dictée.** Before authoring an item, fold the expected answer **and** the most plausible wrong answer. **If they fold to the same string the item tests nothing and must be moved to `mcq` or `listenChoose`.** Assert `fold(answer) !== fold(distractor)` over every authored near-miss. This is the generalisation of the thing you found: knowing `aller-retour` folds is not enough, you have to check each pair. | band rule, all eight prompts |
| 3 | **`practice` is MANDATORY, which no prompt and not the collation had said.** `lesson-contract.test.ts:505` mirrors the publish gate and fails any non-`assessment` lesson with no `practice` section, an empty `practice.itemIds`, or an empty `Lesson.itemIds`. With 0.2, that means every lesson here ships exactly one speaking drill and cannot opt out. Your mission-table `practice` already satisfies it; do not drop it. | `ealch-v2/src/content/lesson-contract.test.ts:505-519`, verified |
| 4 | **The repair-move id file is `04-REPAIR-MOVE-IDS.md`**, not `11-` (taken by `11-DESIGN-MOCK-PROMPT.md`). Its contract: six rows, `au-restaurant`, contiguous, domain-neutral, face-cost order, frozen at publication. If that file is absent, a2.07 has not landed and §5.3 applies. | filename collision |
| 5 | **Your device-check status is unchanged.** You use one each of the untested types, so blocking step 4 does not gate you. The collation's exposed list was wrong at two entries and now names a2.07, a2.28, a2.29 and a2.32. | collation §1.10, corrected |
| 6 | **PAUL ANSWERED BOTH BLOCKING DECISIONS ON 2026-08-15, and neither changes what you build.** Item 2 went **option B**: nobody owns the imperative, so §3.2 is now settled rather than provisional and a2.32 does exactly what you do. Item 1 went **option A**: a2.13 is amended and a2.29 takes `pourriez-vous`, which is still not yours. **Nothing in your build moves.** What changes is the wording: §3.2 no longer says "whichever way Paul answers", and the hand-off to a2.32 now says explicitly that neither unit cites the other for the form. | Paul, 2026-08-15 |

---

## Identity

Measured against `seed.json` v46 today. The spine agrees with the DB on `title` and
`sub` for this unit, so there is no §1 swap to undo here. That makes a2.27 unusual;
do not assume the same for your neighbours.

```
a2.27   seq 26
  title:  Transportation
  sub:    Les transports
  gloss:  getting around, directions & transport modes
  canDo:  Can buy a ticket, ask for directions and follow the answer
  themes: ['transport', 'deplacements']      <- BROKEN, see below
  prereqUnitIds: ['a2.04']                   <- shipped, 1 lesson, honest
  lessonIds:     []                          <- first build, version starts at 1
```

Spine source: `ealch-admin/scripts/author-full-curriculum-spine.ts` lines 773 to 782.
Downstream: `a2.35` (Bilan A2) names `a2.27` in its `prereqUnitIds`. See §8 for what you
owe it.

### The theme, and the one-line spine amendment that is yours

`transport` is a phantom. Zero rows in Postgres, zero in the seed, no `content_themes`
row, no `themeMeta` entry, and it sits dead inside `SEED_CUT.themes` bundling nothing.
The collation settles the re-map in its §5:

```
before   themes: ['transport', 'deplacements']
after    themes: ['transports-quotidiens', 'deplacements']
```

**AUTHOR INTO** `transports-quotidiens`, level `a2`.
**IMPORT FROM, never author into**: `deplacements`, `la-ville`.

Rules, all of them settled:

- **Edit the `themes` array in the spine file by hand. Do not re-run the spine script.**
  It has a documented drift hazard: a naive re-run would have reverted 74 of 75 unit
  titles, which is why `spine-drift.test.ts` exists. Edit, then let your merge script
  carry the unit row into Postgres and the seed, exactly as every A2 build has.
- `spine-drift.test.ts` must be green after your edit.
- **Do not remove `'transport'` from `SEED_CUT.themes`.** That is a single band-level
  diff someone makes once after the re-map lands and at least one unit is authored. Not
  yours. Say in your report that you left it.
- **Do not author into `deplacements`.** Nine A1 grammar lessons draw their example
  nouns from it, and a1.03's gender statistic and a1.11's indefinite-article statistic
  are both measured over its noun population. a1.11 broke a1.03's `-e` figure once and
  a1.23 joined the same population by carry. a2.04 §12 documents the further mechanism:
  a *carry* can move a population even when you author no row. Your rows are sentences,
  so direct risk is low; the theme is still the wrong home.
- **Do not author into `rp-voyage`.** It is the role-play namespace and its ids are
  consumed by `scenarios`. Your `scenario` section is inline and needs no corpus ids at
  all (`schema.ts` 1205-1208).

---

## Pre-flight, and run it before you write anything

```bash
cd ealch-admin

# The four themes. Prints Postgres AND seed for each, always.
pnpm corpus:probe --theme transports-quotidiens,deplacements,la-ville,rp-voyage
pnpm corpus:probe --unit a2.27

# The nouns you should be importing rather than authoring. Bare forms:
# the probe adds every article for you and reports which form matched.
pnpm corpus:probe --words "quai,guichet,correspondance,composteur,abonnement,tarif,ligne,direction,arrêt,métro,carrefour,feu rouge,rond-point,pharmacie,poste,banque,musée,pont,navette,contrôleur,retard,grève,amende"

# The reception content the unit exists to author. Expect near-zero.
pnpm corpus:probe --tokens "tournez à gauche,prenez la deuxième,continuez tout droit,jusqu'au feu,au bout de la rue,à destination de,en provenance de,voie douze,quai numéro trois,vous verrez"

# Published or merely present. This is what decides import versus author.
pnpm content:parity
```

**Probe with real orthography.** The probe does not strip accents. `arrêt` not `arret`,
`métro` not `metro`, `contrôleur` not `controleur`, or you will get a false ABSENT and
re-author a row that exists. This has cost the project three briefs.

**The interpretation rule, settled by the collation 1.3, and you do not get to
re-decide it:** a DB row that is `published` is REACHABLE and must be imported by
`itemId`, never re-authored. A DB row that is not `published` is invisible to learners
and may be treated as absent.

### What the design measured, all of it UNVERIFIED, with the command that settles each

The supervisor did not query Postgres. Every DB figure below is design agent 3's and is
carried forward unconfirmed. The seed side is confirmed.

| Claim | Figure | Confirmed on | Command that settles it |
|---|---|---|---|
| `deplacements` rows | 320 DB (a1 307, a2 13) | **seed agrees: 320** | `corpus:probe --theme deplacements` |
| `transports-quotidiens` rows | 415 DB (a1 163, a2 134, b1 118) | **seed shows 5** | `corpus:probe --theme transports-quotidiens` |
| `rp-voyage` rows | 426 DB | **seed shows 0** | `corpus:probe --theme rp-voyage` |
| `la-ville` rows | 347 DB | **seed shows 0** | `corpus:probe --theme la-ville` |
| Transport rows in total, before `la-ville` | **1,161** | arithmetic on the three above | the three probes |
| Imperative direction verbs across those 1,161 | **3** | not confirmed | `corpus:probe --tokens "tournez,prenez,continuez,traversez,suivez,longez,remontez"` |
| Multi-step chains (a direction verb AND a joint) | **2** | not confirmed | `corpus:probe --tokens "puis tournez,ensuite prenez,jusqu'au feu,au bout de la rue"` |
| Ordinals used in a direction | **0** | not confirmed | `corpus:probe --tokens "la première à droite,la deuxième à droite,la troisième rue"` |
| `y` standing for a place | **0** | not confirmed | `corpus:probe --tokens "j'y vais,on y va,vous y allez"` |
| Station or airport announcements, in all **48,325** rows | **0** | not confirmed | `corpus:probe --tokens "à destination de,en provenance de,attention au départ,voie numéro"` |
| The three imperatives that do exist | `fr.a1.deplacements.245`, `.246`, `.284` | not confirmed | `corpus:probe --unit a1.??` or read the rows |
| Next free a2 id in `transports-quotidiens` | `.135` (a2 slice runs to `.134`, no gaps) | not confirmed | `corpus:probe --theme transports-quotidiens` |

**The measured position, and it is the whole reason this unit is worth building: the
nouns are finished and the reception content does not exist.** Three received
instructions and zero announcements across a corpus of forty-eight thousand rows. You
are not authoring a transport vocabulary. You are authoring the half of the conversation
that has never been written down.

**If the probe disagrees with any figure above, the probe wins and it goes in your
report as a measured-false claim.** Every A1 build found three to five. These figures
were measured once, by one agent, against a database the supervisor did not open.

### The failure this pre-flight exists to prevent

The seed shows 5 rows in `transports-quotidiens` and Postgres holds 415. Anyone who
measures this unit's vocabulary on the seed concludes the lexicon is missing and authors
four hundred duplicate rows. `flashhub-coverage.test.ts` treats two rows sharing an `fr`
in one theme as one card served twice, so the duplicates would be silent. **Probe
Postgres, never the seed, and probe with accents.** This is the highest-probability,
highest-cost failure in your build.

The A2 slice of `transports-quotidiens` is already a complete transport lexicon: `le
RER`, `la navette`, `l'abonnement`, `la carte de transport`, `le tarif`, `le
distributeur de billets`, `le composteur`, `la correspondance`, `le contrôleur`, `le
retard`, `la ligne`, `la direction`, `le plan du métro`, `le rond-point`, `les
embouteillages`, `la grève`, `l'amende`, `la piste cyclable`, `valider son billet`,
`changer de ligne`, `rater le bus`, plus fourteen passé composé sentences using them.
`deplacements` a1 holds the layer under it: `le train`, `le billet`, `la gare`, `le
quai`, `le guichet`, `un aller simple`, `un aller-retour`, `à gauche`, `à droite`, `tout
droit`, `le feu rouge`, `le carrefour`, `monter`, `descendre`, `composter`. **All of
that is an import.**

---

## §1. Band constraints you inherit, and none of them are negotiable

These are settled for all eight situational units. They are not this unit's to reopen.

**1. Author the other party's speech.** At least **40 percent of your newly authored
rows must be in the voice of the person the learner is talking to**: the passer-by, the
station announcer, the counter agent. This is the band's mandate. For you it is met
easily and you should say by how much: the chains, the ordinals and the announcements
are all the other party, and they are the bulk of your block.

**2. The exam claim, and carry this wording into your report verbatim.**

> This unit carries exam value by **teaching what the exam tests** (transactional
> reception at speed, a request in the right register, a structured 60-second turn),
> not by producing an `ExamTask` row and not by populating `Scenario.exam`. Do not
> author `Scenario.exam`. Do not author `ExamTask` rows. Do map each act to a named
> TEF/TCF/DELF task in the design notes, because that mapping is what makes the
> content right, and because it is what a future runner will consume.

`Scenario.exam` is read by no code anywhere in `ealch-v2/src`. `content_exam_tasks`
holds 2 rows, both `delf_b2`, both `in_review`. `EXAM_FORMATS` has no `delf_a2` and is
not being extended for you.

**3. One lesson.** `den.tsx:169` pushes `lessonIds[0]` and `lessonoverview.tsx:47`
carries a comment confirming it reads that and nothing else. A second lesson is
unreachable. Your design proposed one, so nothing folds and nothing drops; say so.

**4. Regional policy: France-primary, Quebec as colour.** Scored, drilled and quizzed
content is France-standard French. You may carry **at most one** `cardDeck` card naming
Quebec divergence. **Nothing on that card is ever the answer to a scored question.** A
Quebec word may be a corpus row where it is genuinely the more useful form for a TEF
Canada candidate, but it does not displace the France form in any drill. Yours are
`l'autobus` (already a row, `fr.a2.transports-quotidiens.004`), `embarquer` and
`débarquer` for `monter`/`descendre`, and `la passe` for `l'abonnement`. Keep brand
names, fare products and prices out of it: STM and RATP products change and the card
would age badly.

**5. Job-title feminines are a2.30's, band-wide.** You will be tempted by `le
contrôleur`. **Do not mint `la contrôleuse`.** Where a feminine already exists in the
corpus you use that form; where one does not, a2.30 mints it and you take whatever it
lands. This is a band policy in all eight prompts even though one unit exercises it.

**6. No timer exists anywhere in the app.** `setInterval` is zero across
`MissionSection.tsx`, `LessonSection.tsx`, `MissionRich.tsx` and `LessonRich.tsx`. Any
design element phrased as "against the clock" or "under time pressure" is void and must
be re-expressed as tap-to-continue. Doctrine's own §F description of `groupDrill` as
production against the clock is drifted from the build; ignore it.

**7. All 35 `SECTION_TYPES` have a live render branch.** The shared brief told your
design agent to grep the wrong file. `MissionSection.tsx` cases sixteen types and then
falls through, after the switch and deliberately not inside `default:`, to
`SectionView` in `LessonSection.tsx`, which cases eighteen more. `table`, `tapTable`,
`quiz`, `examples`, `roundup`, `teach` and `audio` all draw inside a mission.
**Do not mark anything NEEDS-ENGINEERING.** The one funded engineering item in the whole
band is `listening.hideLines`, and it is not yours to build.

**8. Five audio fields validate, publish, and do nothing.** `modelPlayback`,
`wrongThenRight`, `perSentenceReplay`, `scoreOn` and `autoplay` have zero consumers
outside the schema and the tests, and the seed already authors 31 of them. `maxPlays` is
resolved by `lessonAudio.logic.ts` and consumed by no component. Author none of the six
believing they do something. `speeds` is real but reaches the screen only in
`TrapAudioStep`.

**9. Repeated sections, settled.** Repeated `listening`, `practice`, `trapDrill`,
`examples`, `groupDrill`, `cardDeck` and `tapTable` are approved and need no device
check: they already ship. Only `scene`, `scenario`, `reading`, `dictation` and `table`
are untested repeated, and **your lesson repeats none of them.** You carry two
`listening` and two `trapDrill`, both pre-approved.

---

## §2. The teaching problem

### 2.1 Owns: the chain has joints

Doctrine §B.5 wants exactly one Owns. Yours is a family, and it is this:

> **A spoken direction is not a sentence. It is a sequence of moves, and every French
> direction is built from the same four move types joined by the same five joint words.**

```
GO        Allez · Continuez · Remontez · Prenez            move along
TURN      Tournez · Prenez la deuxième                     change heading
PASS      Traversez · Passez · Longez · Jusqu'à            landmark reference
ARRIVE    C'est · Vous verrez · Ça sera                    the endpoint

joints    puis · ensuite · après · jusqu'à · au bout de
```

It generalises to instructions the lesson never showed, which is what makes it a family
rather than a list. And it passes doctrine §B.4: the reframe is runnable in the
half-second while the other person is still speaking.

**The learner's real problem is holding three or four sequenced moves in working memory
while translating.** Four unrelated items is at the limit; four *chunks* is comfortable.
So the drill teaches chunking, and counting joints *is* chunking, which is how the
lesson delivers the answer without ever saying "working memory".

### 2.2 The reframe

> **Find the joints, then take one move at a time.**

Carry it verbatim across at least six sections and the roundup. Do not write a second
version of it anywhere.

Rejected, and record that you rejected them: "listen for the verbs" (the verbs are the
least distinguishing part, four of them mean *go*); "picture the route" (untestable, and
the app cannot check it); "ask them to repeat" (that is the repair move, which is a2.07's
and is act 4, not the reframe).

### 2.3 The Owns is NOT the preposition system, and you must say so on the card

`a2.04` §13 was written to you: it owns the four-kind sort, `chez`, and
`sheet.a2.04.lieu`, which is a lookup the learner will come back to inside your lesson.
`a1.21` owns `à` plus place-by-name and the full contraction. `a1.22` owns `en`/`au`/`aux`
with countries. **`à la gare`, `au guichet`, `aux quais` and `à pied` as a preposition
question are already taught.** Do not reteach any of it.

What is genuinely unowned is `en` versus `à` for **transport modes**: `en bus`, `en
voiture`, `à pied`, `à vélo`. That is **one card**, and the rule is already stated by a
corpus row you import rather than restate: `fr.a1.deplacements.014`, "On utilise en pour
les transports fermés et à pour les transports ouverts." The card names a2.04 and a1.21
as where the system was taught.

**Read this next sentence twice.** The `en` on that card is the **preposition**. It is
not a2.25's pronoun `en`, and nothing in your lesson may blur the two. See §3.1.

---

## §3. The two things this lesson may not lean on

### 3.1 `y` and `en` the pronouns: banned outright, band-wide

`a2.24` (indirect object pronouns, seq 22) has one lesson and `a2.25` (Y et EN, seq 23)
has **zero**. They are spine prereqs and not shipped ones. The collation settles it in
C8, for every unit in the band:

> **No unit in this band may build a teaching move on `y` or `en`.**

Your design doc said you could still put `y` in a corpus sentence. That is withdrawn.
**Nothing you author uses `y` for a place. Not a corpus row, not a scenario turn, not a
listening line, not an `alts` entry, not a distractor.** A learner arriving at seq 26
may never have met it, and a corpus row is exactly where they would meet it unexplained.

**What replaces it, and the answer is that nothing is lost.** The design measured **0
rows in the three transport themes using `y` for a place**, so there is nothing to
import and nothing to preserve. Concretely:

- Destinations are named in full: `Je vais à la gare`, `On va au musée`. That is
  a2.04's shipped preposition system doing exactly the job it was built for, and using
  it here is the payoff a2.04's report asked you to give it.
- The ARRIVE move type is `C'est` / `Vous verrez` / `Ça sera`, none of which needs `y`.
- Every `listenChoose` option is a short place name, so the answer surface never wanted
  a pronoun.
- `On y va` and `Allons-y` are set phrases and both are still `y`. A learner cannot tell
  a frozen chunk from a live pronoun, and this is the one lesson where they would meet it
  in a place where it looks productive. Use neither.

**The pronoun `en` is banned on the same grounds. The preposition `en` is not, and it is
one card (§2.3).** Your test must be able to tell them apart, so write the assertion
against the pronoun's shapes (`j'y`, `on y`, `vous y`, `il y en a`, `j'en ai`, `on en
prend`) rather than against the bare letters.

### 3.2 The imperative: use it, do not name it

**SETTLED 2026-08-15. Paul took option B on `12-DECISIONS-FOR-PAUL.md` item 2: nobody
owns the imperative.** a2.32 asked for it and did not get it. **Both a2.27 and a2.32
use it as unanalysed lexis, in the same terms**, and a B1 slot is noted for later and
not opened by either of you. **Neither unit cites the other for the form**, because
neither owns it: a2.32's report will name you as the other unit doing the same, and
that is a shared finding, not a dependency in either direction.

Directions need imperatives regardless. `Prenez la deuxième à droite` is what a French
speaker says, and a lesson that avoided the form would be teaching a French nobody
speaks. So:

**You use `Prenez`, `Tournez`, `Continuez`, `Traversez`, `Allez`, `Longez`, `Passez`,
`Remontez`, `Descendez` as whole forms, the way a direction sounds. You do not name the
mood, you do not conjugate it, you do not table it, and you do not explain how it is
formed.**

Specifically forbidden, in every surface including card bodies, `why` strings and the
roundup:

- the words "imperative" and "impératif"
- any sentence of the shape "drop the pronoun from the `vous` form", which is teaching
  the paradigm with the label filed off
- any contrast between `vous prenez` and `prenez` presented as a rule
- any quiz question that asks the learner to *form* one
- any mention of `tu` forms of these verbs

What you *may* do is treat the whole form as a chunk under the GO/TURN/PASS/ARRIVE
heading, which is exactly what the Owns already does. The move types are the frame; the
verbs inside them are lexis.

**This was stable whichever way Paul answered, and it is now simply the rule.** Option
A would have had a2.32 own the imperative at seq 31, five units after you, so you would
have been citing forward, which no unit does. That forward citation is one of the two
reasons option B won. Your behaviour is unchanged from the first draft of this prompt.
**Both of Paul's blocking decisions were answered on 2026-08-15 and neither ever
blocked you**, and you should say so at the top of your report, because it is the
reason you can start.

---

## §4. The lesson architecture

**23 sections, 6 acts, one quiz.** Inside doctrine's 19 to 24 range and one below the
band's reflex of 24, deliberately. Every section ships on today's renderer.

**Where this departs from the a2.2x shape, and the departure is settled band-wide.**
Act 2 in a paradigm lesson is "state the rule, table it, stop". A situational unit has
no paradigm. Act 2 here is **the frame**: give the learner the slots before the audio
arrives, or the audio has nowhere to land. Act 3 stays the heaviest act as doctrine
requires, but it is a listening ladder rather than a form drill.

### Act 1 — the exchange you cannot script (3 missions)

| # | type | render | layer | what it does |
|---|---|---|---|---|
| 1 | `scene` | screens | core | Berri-UQAM. The learner asks a **perfect** question and the reply runs fourteen words past them. `choice` beat: nod and walk, or say `Pardon ?`. The `break` shows the same instruction split into its four moves. |
| 2 | `goals` | screens | core | Four goals. The third is "follow an answer you did not write". |
| 3 | `cardDeck` | deck | core | The two askees: a stranger in the street, and staff behind a counter. Two openings, two shapes. §5.2. |

**The doctrine departure, and take it.** §B.2 says an A2 scene opens on somebody who
started a sentence they could not finish. This one opens on somebody who *finished*
their sentence and could not process the reply. That is the same failure, loss of
fluency under load, relocated from production to reception, and it is the only honest
scene for a unit whose `canDo` ends "and follow the answer". The collation kept this
unit's centre as "the joints are where comprehension fails", which requires it. If eight
situational units all open on a died sentence, eight scenes read as one scene.

**Record it in your report as a named doctrine departure**, with the fallback if a
reviewer rejects it: the learner's own question stalls mid-way and the reply still runs
long. The rest of the design is unaffected either way.

**Device hazard on this section specifically.** French spaced punctuation clips.
`Pardon ?` and `Attention !` carry a space before the mark, and a spaced terminal mark
has made a scene bubble lose its last word while the gloss still translated it in full.
Your scene and your repair card are full of them. Device-check every bubble that ends in
one, and never put the flex on the `TX` itself; put it on a wrapper `View`.

### Act 2 — what the answer is made of (4 missions)

| # | type | render | layer | what it does |
|---|---|---|---|---|
| 4 | `cardDeck` | deck | core | The four move types, one `xl` card each: GO, TURN, PASS, ARRIVE. Density's `xl-single-unit` rule wants one French unit per xl screen, or `pair: true`. |
| 5 | `tapTable` | screens | core | The five joints, audible. Header glyph budget applies: a2.16 measured that `tapTable` headers clip past it. |
| 6 | `table` | sheet | deep | The move verbs against their English. **Three columns maximum.** See the gate below. |
| 7 | `cardDeck` | deck | core | `en` versus `à` with transport modes. One card. Names a2.04 and a1.21 as where the preposition system was taught rather than restating it. Quotes `fr.a1.deplacements.014`. |

**Missions 4 and 5 together are the frame, and they are one assertion in your test:
the four move types and the five joints appear together, in order, in act 2, before any
audio.** That sequencing is the design's argument and it is what stops act 3 being a
memory test.

**The `table` gate on mission 6.** `table` renders, via the fallthrough, but **zero
`table` sections exist across all 64 shipped lessons.** `A2-BUILD-DOCTRINE.md` §B.8
names it as the A2 paradigm surface and the band has used `tapTable` 123 times instead.
a2.07 plans to be the product's first user of `table` and is device-checking it. So:

- If a2.07 shipped a `table` and it rendered on a Pixel 6, take mission 6 as a `table`,
  three columns, fourth column moved to a `teach` block beneath. a2.04 §10 measured a
  four-column table clipping on a Pixel 6 and went to v3 to fix it.
- If a2.07 did not, or it failed, mission 6 becomes a **second `tapTable`**. Repeated
  `tapTable` is proven and pre-approved. Doctrine §B.8's "one tapTable then stop" is a
  rule about the paradigm act, and this unit has no paradigm.
- Either way, say in your report which you shipped and why, and whether you are the
  first or second `table` in the product.

### Act 3 — THE OWNS: the chain ladder (6 missions, the heaviest act)

**This is where `chainDrill` was going to go, and this is how you deliver it without
one.** The rung count climbs 1, 2, 3, 4. The learner hears a chain of N moves and proves
they followed it. At N=4 nobody translates word by word and survives, which is the point.

| # | type | render | layer | rung | what it does |
|---|---|---|---|---|---|
| 8 | `groupDrill` | screens | core | **1 move** | Trivially easy on purpose. It installs the question. |
| 9 | `groupDrill` | screens | core | **2 moves** | Joined by `puis`. The `check` names the joint. |
| 10 | `listening` | screens | core | **3 moves** | Audio, `questionsInModal: true`, four short destinations as options. §4.3. |
| 11 | `trapDrill`, stepped | screens | core | **4 moves** | The holding drill. `rule → cards → audio → drill`, `gate: true` on the drill. §4.2. |
| 12 | `cardDeck` | deck | core | | Ordinals inside a chain: `la première/deuxième/troisième à droite`. Why they are the most-missed word: short, unstressed, and sitting between two content words. **This is your second Owns and zero rows in the corpus carry it.** |
| 13 | `commonErrors` | screens | core | | `à droite` versus `tout droit`; `descendre` meaning both get off and go down; `prendre la deuxième` where English says "take your second left". |

#### 4.1 Rungs 1 and 2, on `groupDrill`

`groupDrill` takes `groups: SoundGroup[]`. Each group has a `label`, an optional
`items[]` and an optional gating `check`. The item shape is
`{ fr, ipa?, note?, itemId?, respell?, en?, silent?, pair? }`, so a group can carry a
real corpus row by `itemId` and score against it.

- **Mission 8, one group, one move per item.** `fr` is the single-move instruction,
  `itemId` joins it to the imported or authored row, `en` is the gloss. The `check`
  question is **"How many moves?"** and the answer is one. It is meant to feel too easy.
  The `why` says what the question is for: from here on, that is the first thing you ask.
- **Mission 9, one or two groups, two moves per item, joined by `puis`.** The `check`
  names the joint: "Which word tells you the first move has ended?" The `why` carries the
  reframe.
- Hand-randomise the option order in both. **Missions render authored order; only the
  quiz shuffles at runtime.**

#### 4.2 Rung 4, on a stepped `trapDrill`, and this is the replacement for `chainDrill`

The collation's prescription is a stepped `trapDrill` plus a `groupDrill`, and the
schema makes it fit exactly. `trapDrill` takes:

```ts
{ type: 'trapDrill';
  title: string;
  rule?: { title: string; body: string };
  cards: TrapCard[];
  drill: { promptSay: string; opts: string[]; correct: number }[];
  steps?: TrapStep[];                     // { label, kind, title?, gate? }
}
```

`TRAP_STEP_KINDS` is `['rule','cards','audio','drill']`, and `gate: true` on a `drill`
step holds the learner until every question is answered.

**Author it like this:**

- `rule` step: the reframe, and the four move types recalled in one line.
- `cards` step: `TrapCard`s whose front is a four-move chain and whose back is the same
  chain split at its joints. `promptLabel` / `promptSound` / `fr` / `ipa` / `tip`.
- `audio` step: the four-move chain heard. This is **the only mission surface in the
  product with a slow replay** (`speedsFor`, Lent and Normal). Use `speeds` here.
- `drill` step, `gate: true`: `promptSay` is the **full four-move French chain**, spoken.
  `opts` are **four written orderings** of the same four moves, in English shorthand
  ("turn, then straight, then cross, then it is on your left"). `correct` is the index.

**Use the stepped shape, never the stacked one.** A2 traps have one shape. The stacked
render hides the gate, the audio and the sub-mission number, which is exactly the three
things this drill is for.

**What this loses against `chainDrill`, said plainly, and it goes in your report.**
`trapDrill` prints `promptSay` on screen, so the learner sees the chain written while
they answer. The pure working-memory element is not recovered here. Two things carry it
instead: the `audio` step precedes the gated drill, so the first encounter is by ear;
and the ten `listenChoose` quiz items are genuinely audio-first, because that card hides
its options until the clip has played. **What survives intact is the Owns**, which is
chunking and ordering, not memory. Three correct moves in the wrong order put you
somewhere else entirely, and the ordering options test exactly that.

**One hazard, unverified, and check it before you author.** `TrapAudioStep`
(`MissionRich.tsx` around 870) is reported to print a hardcoded French line, "Écoutez la
paire. Le R sonne, puis le R se tait.", above the cards on every stepped trapDrill with
an `audio` step, at every level. Over a direction chain it would be visibly wrong. The
design agent did not confirm whether a shipped A2 lesson already hits it.

- **Check it on device before authoring mission 11.** Deep-link into a shipped A2 lesson
  with a stepped trapDrill and look.
- If it prints: the fix is reading it from the section with the current string as the
  default, so the four shipped trapDrills are unchanged. Roughly twenty minutes. Do not
  do it inside this content build without saying so; report it as a renderer defect the
  band did not record.
- If you cannot get the fix landed: drop the `audio` step from mission 11 and lose the
  slow replay. Mission 14 keeps its `audio` step only under the same condition.

#### 4.3 Rung 3, and the one funded engineering item you depend on but do not build

`listening` takes `lines: { fr, en }[]` and `questions: { q, opts, correct, why? }[]`,
plus `questionsInModal`, which is live in `MissionSection.tsx:576` and
`MissionRich.tsx:1970`.

**As shipped, `ListeningView` prints `l.fr` AND `l.en` beside the play dot, so every
listening section in the product is a reading exercise with an audio button.** The band
funds one fix for this, settled in collation §3.5:

```
LessonSection, type 'listening', new optional field:

  hideLines?: boolean
```

When set, the line card keeps its play dot and its box and replaces the text with a
neutral placeholder, then reveals both after the learner has answered every question.
The reveal is not gated on answering correctly. `questionsInModal` is the same idea
applied to the questions and is the naming precedent.

**Blocking step 3 of the band sequence builds this before any unit authors. You do not
build it. You check whether it landed:**

- **If `hideLines` exists:** mission 10 is `listening` with `hideLines: true` and
  `questionsInModal: true`. Three-move chains, four short destination options.
- **If it does not:** mission 10 stays where it is and changes what it claims to be. It
  becomes a **transcript study** of a three-move chain, text visible, questions about
  where the joints fall rather than about where you end up. Drop every claim that it
  carries CO value, and say in your report that the lesson's audio-first work is carried
  entirely by the ten quiz `listenChoose` items. **Do not ship a `listening` section that
  calls itself a comprehension drill while printing its own answer.** Moving it after the
  quiz is not an option: the quiz is act 6 and the ladder is the Owns.

Either way, **author every listening line so it stands alone without your lesson's
framing.** No line may reference "the card before", "the scene" or "the move types". The
band is producing a reception bank that a2.35 (Bilan A2) and any future exam runner will
lift directly, and this costs nothing now and is expensive to retrofit.

### Act 4 — the trap, and the way out (3 missions)

| # | type | render | layer | what it does |
|---|---|---|---|---|
| 14 | `trapDrill`, stepped | screens | core | The ear traps: `deuxième` versus `douzième`, `à droite` versus `tout droit`, `sortie` versus `sorti`. `rule → cards → audio → drill`, `gate: true`. Same hardcoded-string check as mission 11. |
| 15 | `listening`, text visible | screens | more | The announcement genre as a transcript to study. Text visible is **correct** here: the job is recognising a shape, not decoding under pressure. |
| 16 | `cardDeck` | deck | core | **The repair move, armed. Every utterance on it is an imported a2.07 `itemId`.** §5.3. |

**`deuxième` against `douzième` is the single best trap in this unit** and it is the one
that actually costs a learner a street. Under speed, unstressed, between two content
words, they are one sound to an English ear.

**Two trapDrills in one lesson is approved and needs no device check.** `trapDrill`
already repeats in ten shipped lessons.

**Mission 15, the announcement genre, and why you are not simulating degraded audio.**
`tts.speak` accepts `rate` and `voice` only. There is no filter, no EQ, no noise bed and
no reverb. `SceneSetting.ambience` exists in the schema and is referenced by no
component: looping room tone is declared and unimplemented. **Simulate the genre, not
the degradation.** A station announcement is recognisable by register and speed, not by
frequency response: fronted destination (`Le train à destination de Lyon…`), the number
read as a block (`voie douze`), a nominalised delay (`aura un retard d'environ vingt
minutes`), and a delivery around fifteen percent faster than conversational. `speeds:
[1.15, 1, 0.75]` gets most of the way there for zero engineering. A genuinely degraded
clip is a studio job, and it belongs behind the announcement corpus rather than in front
of it.

**DELF A2's CO syllabus names "annonces dans un lieu public" as a genre, and the corpus
holds zero of them across 48,325 rows.** That single fact is the strongest argument for
your announcement tranche, and the tranche serves a2.29 and a2.31 as well as you.

### Act 5 — production (4 missions)

| # | type | render | layer | what it does |
|---|---|---|---|---|
| 17 | `dictation` | screens | core | Word mode over the move verbs and the joints. |
| 18 | `scenario` | screens | core | The guichet. Six to eight turns, `alts` on every turn, `userEn` on every turn. **One turn's correct user move is a repair.** §5.1. |
| 19 | `practice` | screens | core | `skill: 'speak'`. See the correction below. |
| 20 | `reviewDeck` | deck | more | Leitner close-out. |

**Mission 19 corrects the design.** It asked for `skill: 'listen'`. `practice` renders
the **speaking** drill regardless of `skill`: `LessonSection.tsx`'s `case 'practice'`
renders `<PracticeVFView itemIds title onPlay playingId onGrade />` and never passes
`skill` at all. It is decorative in every authored section in the product. Author
`skill: 'speak'`, know you are getting a speaking drill, and per doctrine §E **every
item it names needs `voiceflash` in its `drills` array, checked against Postgres, not
the seed.** `drills` is a Postgres enum array with a documented gotcha; read the
invariants before your first apply, not after it fails.

**Mission 17, and what the dictée can and cannot test.** The dictée tile check is the
one render-side caller of `normalizeFr`, which strips accents, both apostrophes,
hyphens, all punctuation and collapses whitespace. So **no dictée item whose only
difficulty is an accent, an apostrophe or a hyphen**: that rules out `aller-retour`,
`rond-point`, `jusqu'au`, `l'arrêt` and `arrêt` against `arret`. What it can test is
words that differ in letters: `tournez`, `continuez`, `traversez`, `descendez`, `puis`,
`ensuite`, `droite` against `droit`, `bout`, `feu`, `pont`, `gauche`.

### Act 6 — measure and close (3 missions)

| # | type | render | layer | what it does |
|---|---|---|---|---|
| 21 | `progressCheck` | screens | core | Stats before the test. |
| 22 | `quiz` | screens | core | 30 questions, 5 rounds of 6, `roundFailThreshold` set, `why` and `ref` on every question. §6. |
| 23 | `roundup` | screens | core | The reframe, once more, verbatim. |

**One quiz.** A second `quiz` section is silently never rendered.

---

## §5. Register, the scenario, and the two things that belong to other units

### 5.1 The scenario, and the turn that is the design's signature

The guichet, six to eight turns, `vous` throughout, `alts` and `userEn` on every turn.
`ScenarioTurn` is `{ ai, en, user, userEn?, alts? }` and `stt` scores against `user` and
every `alts` entry, best match wins.

**One turn's correct user move is a repair.** The agent's line is deliberately long and
fast, and the model answer is a targeted request for the missing chunk, not a generic
"I did not understand". **Nothing in the product does this**, and it is what makes the
scenario worth authoring rather than adapting `sc.a2.rp-voyage.001`, which is three
turns, no `alts`, no `userEn`, and exactly this situation. Your section is inline
(`schema.ts` 1205-1208), so it collides with that scenario in no way.

**Author the `alts` to carry different question forms for the same meaning.** TCF EO
task 1 caps a candidate who produces only one question form, and rising intonation,
`est-ce que` and inversion all count. So the reveal should show the learner three ways
to ask the same thing. That is a scoring-aware choice and it should be visible in the
build.

**Author it so a2.35 can lift it.** Same standing constraint as the listening lines: the
turns must make sense without your lesson's framing.

### 5.2 Register: the two askees, and what is not yours

This unit has a register axis the other seven do not: **who you are asking.**

```
a stranger in the street   Pardon, madame. Je cherche la gare, s'il vous plaît.
                           apology first, then the goal, no verb of demand
staff behind a counter     Bonjour. Un aller-retour pour Lyon, s'il vous plaît.
                           greeting first, then the transaction, elliptical
```

The failure is not rudeness in the A1 sense. It is using the counter form on a stranger,
where `Un aller-retour pour Lyon` at a passer-by is nonsense, or the street form at a
counter, where `Pardon, je cherche un billet` reads as lost rather than transacting.
English merges both into "Excuse me, could I". **It is also the only unit in the band
where the other party is often not a professional.** A waiter, a receptionist and a shop
assistant are trained to deal with people who do not speak the language well. A
passer-by is not: full speed, gestures, no simplification.

**What is yours:** the two openings, as two shapes, one `cardDeck` (mission 3), and
`vous` throughout both.

**What is not yours, and this is where your design doc overreached:**

- **The register and politeness ladder is a2.29's, once, for the whole band.** Your
  design proposed a2.27 own the counter script and a2.29 cite it. The collation did not
  grant that. Your Owns is direction chains and ordinals in directions. Teach the two
  openings as a contrast in shape; do not build an escalation ladder and do not teach
  softening as a system.
- **`je voudrais` is available and `pourriez-vous` is not.** `voudrais` shipped in a2.13
  as one of two fixed forms, so you may use it as an **unanalysed chunk** with one line
  saying it is a softer `je veux` and the family's name comes later. Doctrine §B.1
  permits it: it is a formulaic sequence, not a paradigm. `pourriez-vous` is the top rung
  of a2.29's ladder. **Decision 1 was answered on 2026-08-15, option A, so a2.29 gets
  it and you still do not: it is a2.29's by ownership, not by blockage. Do not use it
  anywhere.**
- **The money is a2.26's.** It owns price reception, the till and change. `le tarif`, `la
  réduction` and `l'amende` already exist as rows in your own theme and are imports. Your
  scenario may have the price *stated*; the payment moment cites a2.26 by unit id and
  you teach nothing about paying. The ownership line is: **a2.26 owns the money
  transaction, a2.27 owns the ticket as an object of a journey.**
- **The bill, the room complaint and the device fault** are a2.07, a2.29 and a2.32.

### 5.3 The repair move: a2.07 authors it once, you cite it

The repair move is the highest-value situational skill in the band and today it is
*assessed* and never *taught*: `a1.30.l2` ("L'examen A1") carries a quiz round
`id: 'x12-repair'`, "When it goes wrong", which asks what you say when you understood
nothing, and what you ask when the repetition came back at the same speed. That is good
teaching sitting inside an exam round in the A1 capstone, and no lesson has a taught
section on it.

**The collation settles it: a2.07 owns it, authors it once, in `au-restaurant`, as
corpus rows with ids. The other seven cite a2.07 by unit id in a `cardDeck` and reuse
the rows by `itemId`. They author zero repair rows.** Eight independent authorings would
put eight rows with the same `fr` into overlapping themes and break the flashcard hub's
one-card-per-`fr`-per-theme assumption.

**So mission 16 is built like this:**

- `Pardon ?`, `Vous pouvez répéter ?`, `Plus lentement, s'il vous plaît` and whatever
  else a2.07 landed are **imported by `itemId`**. You author none of them and you do not
  retype them into a card body.
- **You cannot author mission 16 until a2.07 has shipped and published its repair-move
  item ids.** That is blocking step 6 of the band sequence and it is the reason a2.07 is
  built first and alone.
- The card names a2.07 by unit id, and names `a1.30.l2` as where the learner will be
  assessed on it.

**What IS yours, and it is the reason this unit is not just a consumer of a2.07's
work.** Your failure mode is partial, not total. In a restaurant you either caught "with
or without cheese" or you did not. Here you routinely catch **three moves of four**, and
there is a correct thing to say in that state:

```
C'est la deuxième ou la troisième ?
```

That is not a repair formula. It is a direction question built out of your own ordinal
content, and it belongs to this unit. **Author it in `transports-quotidiens` as your
own row.** The card's teaching is the contrast: a *targeted* repair gets you the missing
chunk, a generic one gets you the whole sentence again at the same speed. a1.30.l2's
round already makes the second half of that point; you make the first.

Your test must be able to tell these apart, so assert it as: **no authored row of yours
shares an `fr` with any a2.07 repair row**, checked against a2.07's published id list.

---

## §6. Quiz notes

**30 questions, 5 rounds of 6.** Round 5 is **"When it goes wrong"**, deliberately
echoing `a1.30.l2`'s `x12-repair`: four items on the repair move using a2.07's rows, and
one on partial understanding (you caught three moves of four, what do you ask?).

```
listenChoose  10   the chain items, `say` carrying the full instruction
mcq            8   register (which askee), the en/à mode question, the
                   announcement shape, ordinals
typeIn         7   the ask side: producing the question, the targeted repair
errorSpot      4   à droite / tout droit substitutions; en/à with modes
speak          1   one SHORT chain repeated back, scored generously
```

### listenChoose at 10 of 30, and both reasons that survives

The band's shipped maximum is 3 of 30, across four consecutive lessons. You are
inverting it, and there are two independent justifications.

1. **The weight of this unit has to sit on reception**, because the learner's turn is
   trivial and the reply is the exam. That is what makes the unit different from the
   other seven.
2. **`listenChoose` is the only genuinely audio-only surface in the product today.**
   `ListenChooseCard` hides its `opts` behind `heard`, and its own source says why:
   "showing the spellings first lets the eye answer instead of the ear." So **this
   inversion survives even if `listening.hideLines` is never built.** If `hideLines`
   does not land, the ten quiz items are the *entire* audio-first content of the lesson,
   and you say so in your report rather than claiming CO value you did not ship.

### The four rules that make a listenChoose item work here

**1. Every one of the ten needs `say` set explicitly.** `ListenChooseCard`'s play order
is: the question's audio clip, then `say`, then **the correct option**. That third case
is a poor last resort, and where the options are English it speaks English at a French
listening exercise. a1.25 shipped in v22 asking "Is this sentence about a habit or one
particular day?" and playing the words "A habit". Your options are short place names, so
without `say` the card would speak the answer aloud. **Assert all ten.**

**2. Every distractor must occur inside the `say` line.** In a real TEF item the wrong
options are all *mentioned in the recording*, just not as the answer. That single rule
is most of what makes an item feel like the exam rather than like a quiz. So every wrong
destination is a place named somewhere in the chain the learner just heard.

**3. Keep every option to two or three words.** `ListenChooseCard` carries a question, an
audio control and up to four options, and its own source calls it "the tallest in the
quiz": once the explanation reveals, the content runs past the viewport and the last
option gets clipped mid-row. The band has had four width defects and ten of these has
never been rendered on a Pixel 6. **Device-check round 1 before you author rounds 2 and
3.** Destinations, not sentences.

**4. Say the replay divergence out loud rather than pretending.** TCF plays each CO
recording **once**. `ListenChooseCard` allows unlimited replays and there is no cap
field on a quiz question. `maxPlays` exists on `SectionAudio`, is resolved by
`lessonAudio.logic.ts`, and is consumed by no component. Put one line on a card telling
the learner the real exam plays it once. Do not author `maxPlays` believing it does
something.

### Everything else

- **`fold()` strips hyphens, apostrophes and all whitespace** (§0, C-1). No `typeIn` may
  hinge on `aller-retour` against `aller retour`, or `jusqu'au` against `jusquau`. It
  also strips accents and cedillas, so no scored surface can test one. `à droite` and
  `tout droit` remain distinct under the fold, which is why the `errorSpot` round works.
- **`errorSpot` is free text**, graded by the same `matchesAccept`. It is not a
  tap-the-wrong-word surface.
- **The quiz shuffles `opts` at runtime; missions render authored order.** Hand-randomise
  mission options. Do not waste effort hand-randomising quiz options.
- **No question may test forming the imperative** (§3.2), and **no question may involve
  `y` or the pronoun `en`** (§3.1).
- **No question may key on a Quebec form** (§1, band constraint 4).
- **No question may test numbers as a system.** a1.27 and a1.28 own the number system and
  the decimal comma. Yours fail in a specific and narrow way: `voie douze`, `ligne
  quatorze`, `quai numéro trois`, unstressed, short, inside a longer line. Put them
  there, in one round, and reteach nothing.
- **The `speak` item stays short.** STT is reported capped at 7,000 ms, which is
  unverified but plausible; a four-move chain will not fit and `normalizeFr` scoring of a
  fourteen-word chain would produce false negatives that teach the learner nothing about
  listening. **Two moves, not four**, scored generously.
- **Every question needs a `why` and a `ref`.**

---

## §7. Corpus plan

**All new rows into `transports-quotidiens` at level `a2`, from
`fr.a2.transports-quotidiens.135`.** Block `.135` to `.254`, 120 ids for roughly 94
expected in use.

```
ROW_COUNT_BEFORE   134  (a2 slice)      415  (theme, all levels)      UNVERIFIED
```

| kind | shape | rows | note |
|---|---|---|---|
| direction chains, 2 moves | sentence | 14 | rung B |
| direction chains, 3 moves | sentence | 18 | rung C, the CO core |
| direction chains, 4 moves | sentence | 14 | rung D, mission 11 |
| ordinal in a direction | phrase | 10 | **zero exist today** |
| public transport announcements | sentence | 20 | **zero exist in 48,325 rows** |
| counter transaction turns | phrase/sentence | 12 | `rp-voyage` holds three turns' worth |
| the targeted repair question | phrase | 2 | §5.3. NOT the repair move itself |
| Quebec variants | word/phrase | 4 | `embarquer`, `débarquer`, `la passe`. `l'autobus` exists |
| **total authored** | | **~94** | design said 102; the 8 repair rows are a2.07's |

**Sentence budget 14 words** (doctrine §C). A four-move chain is close to that ceiling by
construction; count them.

**The other party's voice:** the chains, the ordinals and the announcements are 76 of
the 94. The band minimum is 40 percent. Report the actual figure.

**Everything else is an import.** The whole noun layer exists: `le quai`, `le guichet`,
`la correspondance`, `le composteur`, `l'abonnement`, `le tarif`, `un aller simple`, `un
aller-retour`, `à gauche`, `à droite`, `tout droit`, `le feu rouge`, `le carrefour`,
`monter`, `descendre`, `valider son billet`, `changer de ligne`. Record every imported id
with its source theme in the corpus header. **If your id block goes half unused, that is
the right outcome.**

`la-ville` (347 DB, **0 in the seed**) is where landmark nouns live. **Probe it before
authoring any of `la pharmacie`, `la poste`, `la banque`, `le musée`, `le pont`, `le
carrefour`, `le feu`.** Unmeasured by anyone. If they are there, import them; if they are
not, they go in your block, not in `la-ville`.

### Collision risks, and scope every guard to the BLOCK

- **Never scope a guard to the theme prefix.** A prefix filter on
  `fr.a2.transports-quotidiens.` picks up 281 rows from three other levels that nobody in
  this band authored. a2.04 met the same thing at 127 strangers. Filter to `.135` through
  `.254`, and watch the **row count**, not the highest id: a concurrent lesson landing
  *below* your top is invisible to a highest-id check, and a1.20 lost a build that way.
- **a2.26 (seq 25) may be running in parallel with you** and owns money. `le tarif`, `la
  réduction` and `l'amende` sit in *your* theme. Agree nothing by assumption: they are
  existing rows, so both of you import them and neither authors a second copy.
- **a2.29 (seq 28) re-maps to `hebergement`**, not to `rp-voyage`, so the counter-script
  collision your design worried about is mostly settled. Register is still theirs.
- **a1.03 and a1.11 ending populations.** Zero exposure if nothing lands in `deplacements`
  and nothing carries a noun. **Assert it in both directions rather than reporting it.**
- **Your theme name contains a banned-ish substring.** Every id you mint contains
  `transports-quotidiens`, which contains `transport`, and the jargon guard walks strings.
  a2.04 hit this thirty times with `prepositions-essentielles`. Filter by id **shape**,
  `^fr\.[a-z0-9]+\.[a-z-]+\.\d+$`, not by key.
- **`hasPlainNasalFor` will false-positive on your announcements.** `à destination de
  Lyon` and `en provenance de Marseille` are nasal-rich, and the checker has three
  documented blind spots plus documented unrepairable false positives. **Assert the false
  positives as negatives in all three layers**, so the day the checker improves the build
  fails loudly rather than carrying a silent workaround. That was a2.04's remedy and it
  worked.
- **If the spine row is left unamended and a batch script reads `unit.themes`**, it will
  try to write to a theme with no `content_themes` row. Whether that fails loudly depends
  on the foreign key, which nobody has checked. **Check before your first apply, not
  after.**
- **U+203F.** If you reach for a liaison tie in an announcement respelling, do not: it
  renders as a low underscore on a Pixel 6 and it is already live in shipped sons.10
  content.

---

## §8. What you hand forward

**To a2.35 (Bilan A2), which names you in its `prereqUnitIds`:**

- **One named situation with a canonical script**: asking directions in the street, and
  buying a ticket at a counter. Consistent in register with the other seven, `vous`
  throughout.
- **A reception bank.** Your listening lines and your scenario turns, authored to stand
  alone without your lesson's framing, so a2.35 can lift them as a mixed-situation CO
  set. You author no a2.35 content; you only carry the constraint.

**To the band:** the announcement tranche. Zero announcements exist anywhere, and a2.29
(hotel PA) and a2.31 both want them. Say in your report that they are there and where.

**To a2.32:** the imperative was used as unnamed lexis here, and it is owned by nobody,
settled by Paul on 2026-08-15. a2.32 does the same thing in the same terms. **This is a
shared finding, not a citation.** Do not cite a2.32 for the form and do not ask it to
cite you; both reports name the other as the second unit using it untaught, and the
outstanding fix is a B1 slot that neither of you opens.

**To whoever runs the `SEED_CUT.themes` diff:** your real row counts, so the diff can be
sized against them.

---

## §9. Wiring

```
scripts/author-transports-batch.ts             content:transports
scripts/merge-transports-into-seed.ts
scripts/data/transports-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-27-transports.test.ts
```

**Check for a collision with `scripts/author-deplacements-pathway-batch.ts`**, which
exists and is not yours. There is no existing `content:transports` script.

- **Never `git checkout` `seed.json`.** Reverting it discards other authors' uncommitted
  lessons. Re-run the merge scripts instead.
- **Diff the DB bodies against git before anyone runs `content:publish`.** git can run
  ahead of Postgres and publish then destroys it silently. This has cost the project a
  session.
- **`content:parity` before `content:publish`, always.** Publish is currently reported
  blocked by a seed-only `sons.09.l1` which it would DELETE.
- **Do not hand-bump `seed.version`.** It is the OTA snapshot number.

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

## §10. Your test

- **The four move types and the five joints appear together in one act, in act 2, before
  any audio section.** Asserted item by item.
- **The chain ladder is four rungs of ascending move count**, in order, in act 3.
  Assert the move count of each rung's content: 1, 2, 3, 4.
- **The reframe string appears verbatim in at least six sections and in the roundup.**
  Paraphrases go red.
- **The imperative is never named.** No authored string anywhere in the lesson contains
  "imperative" or "impératif", explains dropping a pronoun from a `vous` form, or
  contrasts `vous prenez` with `prenez` as a rule. Scoped to the whole lesson, not to
  production surfaces.
- **`y` and the pronoun `en` are absent.** Assert the shapes (`j'y`, `on y`, `vous y`,
  `il y en a`, `j'en`, `on en`) across every authored string and every corpus row this
  lesson authors. **The preposition `en` with a transport mode is permitted and confined
  to exactly one section**; assert that section's id and assert no other section teaches
  a preposition rule.
- **Zero repair rows authored.** Every repair utterance in mission 16 and in quiz round 5
  is an imported a2.07 `itemId`, asserted by id. **No authored `fr` of yours matches any
  a2.07 repair row's `fr`.**
- **No money or payment teaching.** The payment moment names a2.26 by unit id and no
  authored section teaches a price, change or a till.
- **`pourriez-vous` appears nowhere.** `je voudrais` appears with its one-line framing
  and is never conjugated or named as a family.
- **Every noun is an imported id**, asserted by id. **Every authored id begins
  `fr.a2.transports-quotidiens.` and falls inside `.135` to `.254`.** Nothing authored
  into `deplacements`, `la-ville` or `rp-voyage`.
- **a1.03's and a1.11's printed ending figures pass**, reported before and after, and
  asserted in both directions.
- **All ten `listenChoose` questions carry `say`.**
- **Every `listenChoose` distractor occurs inside its own `say` line.**
- **Every quiz question has a `why`.**
- **Every `practice` item carries `voiceflash` and every dictée item carries `dictation`**,
  checked against Postgres, not the seed.
- **No dictée item's only difficulty is an accent, an apostrophe or a hyphen.**
- **At most one Quebec card, and no scored question keys on a Quebec form.**
- **`la contrôleuse` and any other minted job-title feminine are absent.**
- **Every listening line stands alone**: no line references another section, the scene,
  or a card.
- **No em dash and no "honest" or "honesty" in any authored string.** The second is
  enforced across the whole seed by `sons-alphabet.test.ts`; note that its `\bhonest`
  guard cannot see "dishonest", so check by substring.
- **The spine `themes` array reads `['transports-quotidiens', 'deplacements']` and
  `spine-drift.test.ts` is green.**
- Import `hasPlainNasalFor` and assert the announcement false positives as negatives in
  all three layers.

**Mutation-test:** teach `y`, author a repair row, put a chain rung out of order, name
the imperative, author a row into `deplacements`, drop `say` from a `listenChoose`, key a
question on a Quebec form, use `pourriez-vous`, mint `la contrôleuse`.

---

## §11. Settled before you start

- The identity block, and the theme re-map to `transports-quotidiens`.
- **One lesson.** `lessonIds: []`, first build, version 1.
- **`chainDrill` is declined.** The ladder is `groupDrill` x2, `listening`, stepped
  `trapDrill`. §4.
- **No `y`, no pronoun `en`, anywhere.** Nothing is lost: zero rows carry them.
- **The imperative is unnamed lexis**, and that is now settled, not pending: Paul
  answered decision 2 on 2026-08-15, option B, nobody owns it. §3.2.
- **`pourriez-vous` is a2.29's.** Decision 1 was answered the same day, option A, and it
  never blocked you either.
- **The repair move is a2.07's**, cited by `itemId`, zero authored.
- **`listenChoose` at 10 of 30**, justified by reception weighting and by `listenChoose`
  being the only audio-only surface today.
- **France-primary, one Quebec card, never an answer.**
- **Zero `ExamTask` rows and zero `Scenario.exam` values.**
- All 35 section types render. Nothing here is NEEDS-ENGINEERING.
- `practice` renders the speaking drill regardless of `skill`, **and it is mandatory**:
  `lesson-contract.test.ts:505` fails a non-`assessment` lesson without one.
- `fold()` strips accents, cedillas, **capitals**, commas, hyphens, apostrophes and all
  whitespace, so it also kills **word division**.
- Every `typeIn` / `errorSpot` / dictée item passed the band rule: `fold(answer) !==
  fold(distractor)` for its most plausible wrong answer.

## §12. Still unverified, and say so plainly rather than papering over it

- **Every Postgres figure in this file.** The supervisor did not query the database. Run
  the pre-flight and report every claim you measure false.
- **Whether `listening.hideLines` has landed.** It is band blocking step 3 and it is not
  yours to build. Check, and say which world you shipped into.
- **Whether a2.07 has shipped and published its repair-move item ids.** You cannot author
  mission 16 or quiz round 5 without them. If it has not, stop and say so.
- **Whether `TrapAudioStep` prints a hardcoded line about the letter R** over your two
  stepped trapDrills. Device-check before authoring, not after.
- **Whether a2.07 device-proved `table`.** It decides mission 6.
- **Whether the STT cap is really 7,000 ms.** It bounds your `speak` item.
- **Whether `la-ville` holds your landmark nouns.** Nobody measured it. It shows 0 rows in
  the seed and a reported 347 in the DB.
- **Whether writing to a theme with no `content_themes` row fails loudly.** Check before
  your first apply.
- Baseline test count, measured today rather than taken from a file, and the mission range.

---

## §13. What to report

Doctrine §F, plus:

- **That you were blocked by neither of Paul's two decisions, and why.** It is the reason
  this unit could start, and the other seven prompts do not all get to say it.
- **How the chain ladder was delivered without `chainDrill`**, what the four rungs cost in
  sections, and **what was lost**: the pure working-memory element, and what carries it
  instead.
- **How the `y` dependency was removed and what replaced it.** The honest answer is that
  nothing replaced it because zero rows carried it, and a2.04's shipped preposition system
  does the naming work. Say that plainly.
- **Whether `hideLines` landed**, and if it did not, that the lesson's audio-first content
  is the ten quiz items and nothing else.
- **The `fold()` correction (§0, C-1) as a band finding**, with the file and the lines.
  Seven other units are copying collation 0.3's consequence and it is wrong for the quiz.
- **The `--count` correction (§0, C-2).**
- **Every figure in §Pre-flight you measured false.** Expect three to five; every A1 build
  found that many, and these were measured once by one agent.
- **Your id block, whether it held, and the row count after the apply**, not just the
  highest id.
- **Authored versus imported**, in which theme, with ids and source themes. "Almost the
  whole noun layer imported" is the expected answer.
- **The percentage of your authored rows in the other party's voice.**
- **The named doctrine departure in act 1** (the scene opens on failed reception, not a
  died sentence), and whether a reviewer accepted it.
- **Whether mission 6 shipped as a `table` or a second `tapTable`**, and whether you are
  the product's first or second `table`.
- **Whether `TrapAudioStep` prints the R line**, measured on device, and what you did.
- **What you left to a2.32** (the imperative), **to a2.29 and a2.31** (the announcement
  tranche), **to a2.26** (money), and **to a2.35** (the reception bank).
- Which missions you verified on device, by what route, and which half of the verification
  you did if adb was unavailable.
- **Anything you could not verify, said plainly.** A gap you name costs an hour. A gap you
  paper over costs a session, and this project has lost two that way.

No AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the
big one", "listen to the trap", "get those two right", "this is the part that pays",
"here is the catch", and anything of that register.

---

*This file is `.md` and therefore gitignored in this repo. It needs `git add -f` to be
tracked.*
