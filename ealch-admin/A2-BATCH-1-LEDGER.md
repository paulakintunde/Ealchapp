# A2 batch 1 ledger

Doctrine §D. Produced 2026-08-11 by the `a2.01` build, which is seq 1 and had to
go first. **Nobody in batch 1 authors until they have read this.** An author whose
block turns out wrong amends this file and says so in their report; they do not
quietly take another range.

Everything here was measured against **Postgres**, not `seed.json`. The seed is a
cut: `verbes` shows 5 rows in the seed and holds 368 in the database.

---

## 0. The two things that will cost you a session if you skip them

**`scripts/author-verbes-batch.ts` DOES NOT DESCRIBE THE DATABASE.** The doctrine
sends every batch-1 author to its header. That header is stale, and the script
body is worse than stale: it declares

```
fr.a2.verbes.016 = 'les devoirs'   Postgres says 'rentrer'
fr.a2.verbes.019 = 'le vélo'       Postgres says 'demander'
```

and it upserts by id. **Running `pnpm content:verbes` today would overwrite two of
the thirty verbs `a2.01` imports with nouns.** Nobody in batch 1 should run it.
Its header's claim that `verbes` holds 5 sentences and 16 new words describes a
state that no longer exists: the theme now holds 368 published rows.

**THE JARGON GUARD MUST WALK `intro` AND `overview`, AND THE ONE YOU WILL COPY
DOES NOT.** Found on a Pixel 6 by `a2.11` on 2026-08-12, after v1 had already been
applied.

`a2.10`'s batch and test both build their learner-surface string as
`sections + sheets + terms`. **`Lesson.intro` is not in that walk and it is drawn
on TWO screens**: the lesson overview card and the lesson cover. `a2.11` shipped
the phrase "third person" there while the same `JARGON` list had already caught
and reworded four other occurrences inside the lesson body. Every host-side gate
was green.

Widen the walk to `+ LESSON.intro + strings(LESSON.overview)` in the batch, the
merge AND the test, and pin `intro` in its own assertion so a later author who
trims it back fails with the reason. **Do NOT add `grammarAssumed` or
`grammarIntroduced`**: invariants §8 says those are addressed to the curriculum
and may use the precise words.

The lesson went to v2 for the fix rather than being corrected under v1. Two
different bodies under one version number is the drift this project has lost work
to twice.

**ONE REFERENCE SHEET PER LESSON IS NOT A RULE, AND CROSS-LESSON SHEETS DO NOT
EXIST.** Settled by `a2.11` on 2026-08-12 because its brief asked for something
impossible and the next author will be asked the same thing.

A `sheetId` resolves ONLY inside the lesson that declares it: `schema.ts:3490`
collects sheet ids from the lesson being validated and fails any section naming
one it does not declare, and `lesson-contract.test.ts:91` re-checks it against
`lesson.sheets`. **No section of one lesson can point at another lesson's sheet.**
So "extend a2.01's sheet rather than making a second one" is not a thing any
lesson in this band can do, at any price.

What a2.11 did instead, and the precedent worth copying: it ships ONE sheet whose
centre is a table **neither predecessor could have held** (all three ending sets at
once), and that sheet NAMES the two earlier units in its own prose so a learner
knows the set is finished. The id and the count are recorded as a constant in the
corpus and asserted, so a later author reaching for a fourth "the -RE endings, in
full" breaks a test rather than shipping a competing reference. If your lesson's
sheet would only restate one pattern that already has a sheet, ask what it holds
that the earlier ones could not.

**The unit spine and the briefs disagree about `title` and `sub`.** The
`A2-01-VERBES-ER-PROMPT.md` identity block gives `title: Les verbes en -ER` and
`sub: the full system, endings & 30 common verbs`. The unit dump says:

```
t:     "Regular -ER Verbs"
sub:   "Les verbes en -ER"
cando: "Can conjugate any regular -er verb in the present and use it in a real sentence"
seq:   "1"          <- see the correction below
```

The title and the sub are swapped in the brief, and the brief's `sub` is not in
the database at all. Probe your own unit and copy from the dump. **This has now
held for three briefs in a row (a2.01, a2.09, a2.10) and should be treated as
certain rather than as a thing to check.** The lesson eyebrow is
`` `${level} · LEÇON ${String(unit.seq).padStart(2, '0')}` `` (missions.ts:110), so
`a2.01`'s tag is `A2 · LEÇON 01`.

**CORRECTION, measured by `a2.10` on 2026-08-11: `seq` is a NUMBER, not a string.**
This section said "a STRING, not a number". That was read off `corpus:probe`'s unit
dump, which stringifies before printing. Queried directly:

```sql
select body->>'id', jsonb_typeof(body->'seq') from content_units
 where kind = 'curriculum_unit' and body->>'id' in ('a2.01','a2.09','a2.10','a2.11');
--  a2.01 number | a2.09 number | a2.10 number | a2.11 number
```

Nothing depends on it, because every consumer goes through `String(unit.seq)`. It is
corrected because the ledger states it as a fact somebody might act on, and because
it is a standing reminder that the probe's dump is a RENDERING and not the row.

---

## 1. Units in flight, and what is already there

```
seq  id      lessonIds already in the unit      state
 1   a2.01   ['a2.01.l1']                       LEGACY STUB, rebuilt by this build to v3
 2   a2.09   probe it                           not started
 3   a2.10   ['a2.10.l1','a2.10.l2']            BUILT x2. l1 v3 24 missions 25 rows;
                                                l2 v1 23 missions 26 rows
 4   a2.11   ['a2.11.l1']                       BUILT. v1, 24 missions, 24 rows,
                                                7 verbs imported and 0 authored
 5   a2.02   ['a2.02.l1']                       BUILT. v4, 24 missions, 29 rows,
                                                6 verbs imported and 0 authored
 6   a2.12   ['a2.12.l1']                       BUILT. v2, 24 missions, 25 rows,
                                                26 rows imported out of 15 THEMES
                                                and 0 headwords authored
 7   a2.13   ['a2.13.l1']                       BUILT. v1, 32 SECTIONS, 30 rows,
                                                20 imported out of 11 THEMES and
                                                0 infinitives authored. The largest
                                                lesson in the corpus. See below.
 8   a2.14   probe it                           not started
 9   a2.15   probe it                           not started
10   a2.03   probe it                           not started
```

**`lessonIds` is not empty for `a2.01`, and the brief said it would be.** `a2.01.l1`
shipped as a seven-section pre-v2 stub: no `id` on any section, no `acts`, no
`reframe`, no `deckTranche`, `practice` with `skill: 'write'` (which draws no
writing surface), and a flat quiz whose questions carry no `why` — which is why
`a2.01.l1` sits on the `why` waiver list in `lesson-contract.test.ts`. This build
rebuilds it in place and takes it off that list. **Assume the same for your unit:
probe before you plan a greenfield build.**

---

## 2. Id blocks

`verbes` is the batch-1 home. Measured 2026-08-11:

```
theme verbes             368 published in postgres,  5 in seed
  fr.a2.verbes           count=100  max=100   NEXT FREE = fr.a2.verbes.101   gaps: none
  fr.b1.verbes           count=268  max=290                                  gaps: 22
theme verbes-essentiels  535 published in postgres,  2 in seed
  fr.a1.verbes-essentiels  count=230  max=230  NEXT FREE = .231
  fr.a2.verbes-essentiels  count=60   max=60   NEXT FREE = .061
  fr.b1.verbes-essentiels  count=15   max=15   NEXT FREE = .016
  fr.sons.verbes-essentiels count=230 max=230  NEXT FREE = .231
```

Forty ids each, non-overlapping, allocated from NEXT FREE. Wide enough that
nobody needs a second block.

```
seq  id      block                                    status
 1   a2.01   fr.a2.verbes.101 .. .140                 TAKEN, 101-125 used, 126-140 free
 2   a2.09   fr.a2.verbes.141 .. .180                 TAKEN, 141-166 used, 167-180 free
 3   a2.10   fr.a2.verbes.181 .. .220                 TAKEN by l1, 181-205 used
 -   a2.10.l2 fr.a2.verbes.461 .. .500                TAKEN, 461-486 used. See below.
 4   a2.11   fr.a2.verbes.221 .. .260                 TAKEN, 221-244 used, 245-260 free
 5   a2.02   fr.a2.verbes.261 .. .300                 TAKEN, 261-289 used, 290-300 free
 6   a2.12   fr.a2.verbes.301 .. .340                 TAKEN, 301-325 used, 326-340 free
 7   a2.13   fr.a2.verbes.341 .. .380                 TAKEN, 341-370 used, 371-380 free
 8   a2.14   fr.a2.verbes.381 .. .420
 9   a2.15   fr.a2.verbes.421 .. .460
10   a2.03   NOT verbes. See §3.
```

**Check the row COUNT after your apply, not just the highest id.** a1.20 lost a
build hour to a concurrent lesson landing *below* the top of its range, where a
highest-id check cannot see it. `fr.a2.verbes` had exactly 100 rows and no gaps
when `a2.01` claimed .101; if your count is not `100 + everything applied since`,
somebody has landed inside a block.

Counts so far, so seq 3 onward has a figure to check against:

```
125 rows   after a2.01 (100 + 25),  max .125,  gaps: none
151 rows   after a2.09 (125 + 26),  max .166,  gaps: .126-.140, .167-.180
176 rows   after a2.10.l1 (151 + 25),  max .205,  gaps: + .206-.220
202 rows   after a2.10.l2 (176 + 26),  max .486,  gaps: + .206-.460 unclaimed tails
226 rows   after a2.11 (202 + 24),     max .486,  gaps: + .245-.260
255 rows   after a2.02 (226 + 29),     max .486,  gaps: + .290-.300
280 rows   after a2.12 (255 + 25),     max .486,  gaps: + .326-.340
310 rows   after a2.13 (280 + 30),     max .486,  gaps: + .371-.380
```

`a2.12`'s block HELD: `fr.a2.verbes` held exactly 255 rows when it claimed `.301`,
which is this table's own figure after a2.02, and 280 after, which is 255 plus its
25 and nothing else. It is the first build in the batch to assert that figure as a
CONSTANT rather than only printing it: `ROW_COUNT_BEFORE` in
`data/faire-dire-lire-corpus.ts`, and the batch refuses any count that is not that
or that plus its own rows. Copy the shape — a printed figure nobody compares is
how a1.20 lost an hour.

`a2.11`'s block HELD: `fr.a2.verbes` held exactly 202 rows when it claimed `.221`,
which is this table's own figure after a2.10.l2, and 226 after, which is 202 plus
its 24 and nothing else.

**FROM a2.11 ONWARD THE MAXIMUM IS NO USE AT ALL.** a2.10.l2 took `.461..500`,
above the whole batch-1 reservation, so `max` has been past every remaining block
since before any of them was claimed. **The row COUNT is the only signal left**, and
seq 5 to 10 should check it and nothing else.

**a2.10.l2 took `.461 .. .500`, ABOVE the whole batch-1 reservation.** It is the
second lesson of an existing unit rather than a new one, so it had no block of its
own; taking one above a2.15's `.421..460` rather than filling a2.10.l1's unused
`.206..220` tail means it cannot collide with a range somebody is still holding.
Both blocks held: 176 was exactly 151 + 25, and 202 is exactly 176 + 26.

The gaps are the unused tails of the claimed blocks and are deliberate. Ids are the
SRS key: do not backfill them.

`a2.10`'s block HELD: `fr.a2.verbes` held exactly 151 rows with max `.166` when it
claimed `.181`, and 176 after, which is 151 plus its 25 and nothing else. Nobody had
landed inside it.

---

## 3. a2.03 has no theme yet, and the doctrine's probe line is wrong

Doctrine §D says to probe `adjectifs,adverbes,routine,pays,lieux,temps`. Measured
2026-08-11:

```
theme adjectifs   0 published in postgres, 0 in seed   THEME DOES NOT EXIST
theme adverbes    0 published in postgres, 0 in seed   THEME DOES NOT EXIST
```

Both are empty. The A1 adjective lessons (a1.14, a1.16) did not write into an
`adjectifs` theme, so `a2.03` and batch 2's `a2.16`/`a2.17` cannot inherit one.
That is a real decision and it is **not made here**: whoever builds `a2.03` probes
what a1.14/a1.16 actually used, and amends this section with the answer before
authoring. Creating a new theme is product-visible in the flashcard hub and the
Den, so it is not a thing to do quietly.

### DECIDED 2026-08-13 by the a2.03 build. The theme is `adjectifs-essentiels`.

**No theme is created and none needs to be.** The question was asked the wrong
way round: it assumed a1.14 and a1.16 had no home, when they had one and it was
never named here. Measured against Postgres:

```
theme adjectifs-essentiels   645 published,  92 in seed
  fr.a1.adjectifs-essentiels    count=330  max=.340   NEXT FREE = .341
  fr.sons.adjectifs-essentiels  count=315  max=.315   NEXT FREE = .316
  fr.a2.adjectifs-essentiels    count=0                NEXT FREE = .001
theme couleurs               339 published,  48 in seed   (a1.13's home)
theme adjectifs                0    theme does not exist, and will not
theme adverbes                 0    theme does not exist
```

The id counts in the three lessons' own corpus files say the same thing:
`adjectifs-corpus.ts` (a1.14) references `fr.a1.adjectifs-essentiels` 61 times
and `fr.sons.adjectifs-essentiels` 32; `placement-corpus.ts` (a1.16) 46 and 31.
`couleurs-corpus.ts` (a1.13) lives in `couleurs`.

**So `a2.03` writes into `adjectifs-essentiels` under a NEW LEVEL NAMESPACE,
`fr.a2.adjectifs-essentiels.001..040`.** Opening a level namespace inside a live
theme is not the product-visible act the question was worried about: the theme
already has a flashcard hub entry and a Den presence with 645 rows in it, and
`fr.a2.description-personnes-objets` (120 rows) is the precedent for an A2
namespace opened inside an A1 theme.

**`a2.16` and `a2.17` inherit this**, and both should take a block from
`fr.a2.adjectifs-essentiels` rather than reviving `adjectifs` or `adverbes`.
`adverbes` is still empty and `a2.17` should not create it either: an adverb
built off a feminine adjective belongs beside the adjective it is built from,
and `a2.17` imports `sérieuse`, `heureuse` and `sportive` from exactly here.

```
seq  id      block                                          status
10   a2.03   fr.a2.adjectifs-essentiels.001 .. .040         TAKEN
11   a2.16   fr.a2.adjectifs-essentiels.041 .. .080         reserved
12   a2.17   fr.a2.adjectifs-essentiels.081 .. .120         reserved
```

`ROW_COUNT_BEFORE` for `fr.a2.adjectifs-essentiels` is **0**, which is the one
case where the ledger's "the maximum is useless, count the rows" rule is easy:
any row at all inside the block that a2.03 does not own is somebody else landing
in it.

---

## 4. The headwords that already exist. Import, do not author.

**Every one of the thirty verbs `a2.01` teaches already exists in Postgres**, most
of them several times over. Nothing in batch 1 should author an infinitive without
probing first. The brief's claim that `author-verbes-batch.ts` "placed eight
infinitives" understates it by a factor of five: `fr.a2.verbes.013` through `.056`
are forty-four infinitives, and `verbes-essentiels` holds hundreds more.

The rows `a2.01` imports, and which are shared with the rest of batch 1:

```
parler      fr.sons.verbes-essentiels.015      regarder    fr.sons.verbes-essentiels.024
écouter     fr.sons.verbes-essentiels.025      aimer       fr.sons.verbes-essentiels.016
habiter     fr.sons.verbes-essentiels.026      travailler  fr.a2.verbes.031
chercher    fr.a2.verbes.017                   trouver     fr.a2.verbes.018
demander    fr.a2.verbes.019                   arriver     fr.a2.verbes.013
rester      fr.a2.verbes.015                   rentrer     fr.a2.verbes.016
gagner      fr.a2.verbes.032                   donner      fr.sons.consonnes.140
aider       fr.a1.amis.024                     porter      fr.sons.verbes-essentiels.141
entrer      fr.sons.verbes-essentiels.043      montrer     fr.sons.verbes-essentiels.054
jouer       fr.a1.amis.023                     chanter     fr.a1.evenements-familiaux.059
danser      fr.a1.evenements-familiaux.060     visiter     fr.sons.verbes-essentiels.129
inviter     fr.a1.amis.019                     étudier     fr.a1.verbes-essentiels.001
adorer      fr.sons.verbes-essentiels.110      détester    fr.sons.verbes-essentiels.109
fermer      fr.sons.verbes-essentiels.035      marcher     fr.a1.routines.108
téléphoner  fr.a1.verbes-essentiels.003        oublier     fr.sons.verbes-essentiels.055
```

Also already present and relevant to later lessons in the batch, so **probe before
you author any of these**: `partir`, `répondre`, `remplir`, `signer`, `envoyer`,
`recevoir`, `payer`, `acheter`, `vendre`, `louer`, `déménager`, `embaucher`,
`économiser`, `dépenser`, `soigner`, `guérir`, `vacciner`, `consulter`, `examiner`,
`prescrire`, `voter`, `déclarer`, `immigrer`, `émigrer`, `s'installer`, `renouveler`,
`confirmer`, `annuler`, `réserver`, `appeler`, `rappeler`, `présenter`,
`accompagner`, `surveiller`, `protéger`, `respecter`, `commencer`, `préférer`,
`manger`, `finir`, `choisir`, `attendre`, `aller`, `venir`, `tenir`, `faire`,
`dire`, `lire`, `vouloir`, `pouvoir`, `devoir`, `savoir`, `connaître`, `prendre`,
`mettre`.

`corpus:probe` **does not strip accents and does not add them**: probe
`préférer`, not `preferer`, or you will be told a word that exists is absent.

---

## 5. Decisions identical across the level (doctrine §E)

Settled here by `a2.01`. Every later lesson in the band inherits them.

**Headword shape for a verb.** The **bare infinitive**, no article, no gloss frame,
no `gender`. Infinitives are not nouns. This matches all 44 rows already in
`fr.a2.verbes.013..056`. A `gender` on a single-word row joins a1.03's measured
ending population and moves twenty printed figures in `a1-03-genre.test.ts`; none
of the thirty carries one, and this was checked row by row rather than assumed.

**Is a conjugated form ever a corpus item?** **No. Only infinitives and full
sentences.** The `verbes` theme already holds conjugation *sentences* and no bare
conjugated forms, and `a2.01` does not depart from that. A bare `parles` as a row
would be served by the flashcard hub as a card with no subject, which is the one
thing this level teaches you not to do.

**Is a past participle a corpus item?** Not decided here. Batch 2, seq 16 to 20.
Left open deliberately: `a2.01` authors no past tense at all.

**How a paradigm is written in prose when it is not in a `table`.** Pronoun order
`je · tu · il · nous · vous · ils`, six rows and not nine (a1.05 already taught
that `il/elle/on` share a form and `ils/elles` share another; re-deriving it spends
missions on last week's lesson). Silent endings are marked **in a column of their
own headed "What you hear"**, never with a strike-through or a bracket inside the
form: the form has to stay copyable.

**Respelling of the silent endings.** A silent ending is written **as nothing**.
`il parle` is `eel parl`, not `eel parl-uh`. `ils parlent` is `eel parl`, the same
string, because that is the fact of the matter. The two audible ones are
`-ons` → `OHⁿ` and `-ez` → `AY`.

Nasal vowels close with a **superscript ⁿ**, never a plain n or m. Import
`hasPlainNasalFor` from `density.logic.ts`; never write your own. Read invariants
§3 for its two blind spots before you trust it. The one that will bite seq 5 to 9
is the word-internal nasal: the checker requires the n or m to end a token, so
`PRAHNDR` and `VYENN` pass while being wrong. `viennent`, `prennent`,
`connaissent` and `apprennent` are all this shape. **Assert those by name as well
as calling the shared checker.**

**MEASURED BY a2.11 ON 2026-08-12, AND IT IS WORSE THAN THIS SECTION SAYS.** Every
superscript in that lesson was broken back to a plain n, one at a time, and the
checker was asked whether it noticed: **25 nasals it can see, 11 it cannot.** The
eleven have one shape between them, and it is not a curiosity — it is every verb
in the lesson:

```
a nasal followed by a CONSONANT inside the token
  vahⁿd  tahⁿd  rahⁿd  sahⁿd          every plural of every regular -RE verb
  VAHⁿDR  TAHⁿDR  POHⁿDR  RAHⁿDR      every -RE infinitive
```

`entendre` is the whole problem on one row. `ahn-TAHNDR` **is** flagged, because
its first nasal ends a token; `ahⁿ-TAHNDR` is **not**, because its second does
not. **A repair that trusts the checker fixes the half it can see, produces a
value it then calls clean, and leaves the wrong half in place.**

**This breaks the repair guard a2.10 wrote and seq 5 to 10 will inherit.** That
guard requires the stored value to be flagged by `hasPlainNasalFor` before it will
accept a repair, which is right for a variant somebody is about to overwrite
(invariants §9) and **rejects four of a2.11's six repairs as "not a violation"**.
a2.11 splits the table into `RESPELL_REPAIRS_VISIBLE` (guarded through the shared
function, exactly as a2.10 does) and `RESPELL_REPAIRS_INVISIBLE` (guarded the
opposite way: the stored value must be UNSEEN, the replacement must be UNSEEN, and
the replacement is asserted BY NAME). **Copy that split rather than the
conclusion.** It will bite `prendre`, `mettre`, `battre`, `comprendre` and
`apprendre` at seq 9, and `venir` and `tenir` at seq 5.

`a2.01` repaired eight rows that broke the stated rule; all eight are listed in
`data/verbes-er-corpus.ts`. If your lesson imports `entrer`, `montrer`, `rentrer`,
`demander`, `chanter`, `danser` or `inviter`, the repaired value is the one in
Postgres now.

**`nous` versus `on`.** Stated once, in `a2.01.l1` section `s06-nous-on`, and
inherited verbatim by the other nineteen:

> **nous parlons is what you write. on parle is what you say.**

Both are correct and both mean *we*. `on` takes the same form as `il`, so it costs
no new ending. a1.05 already said the register half of this (*"nous is never
wrong; it simply sits a register above where the conversation is"*), and this
wording was chosen to sit on top of that rather than contradict it. **Do not teach
`on` as a curiosity in one lesson and use `nous` in every example of the next.**

**`drills` is a Postgres enum array**, `drill_kind[]`, not `text[]`. Concatenating
a `text[]` fails with `operator does not exist: drill_kind[] || text[]` and takes
the whole transaction with it. The only route is the double cast:

```sql
drills = (select array_agg(distinct e order by e)
            from unnest(drills || $2::text[]::drill_kind[]) e)
```

**A MANIFEST THAT CARRIES ROWS MUST CARRY ALL OF THEM.** Fixed 2026-08-11, and
worth knowing because the fix is in shared code you will inherit rather than
write.

`_a201_manifest.ts` and `_a209_manifest.ts` each had their own `itemLiteral()`
emitting a FIXED list of fifteen columns out of the twenty-seven an `Item` has.
Everything else was dropped in silence. Since a merge overwrites the rows it
carries, a2.09's merge replaced `fr.a1.dictee.099` — which had `example`, `skill`
and `register` — with a copy that had none. Six other carried rows arrived
incomplete the same way. Nobody noticed until `content:publish` regenerated the
seed from the database and the fields came back.

Both generators now share `scripts/manifest-item.ts`, which selects `*`, emits
every `Item` field the database holds, and REFUSES to run when it meets a
populated column that is neither an `Item` field nor a known workflow column.
If you add a column to `content_items`, the generators stop and tell you to
classify it. Do not go back to a hand-listed field set.

**A CURRICULUM HOLE, FOUND BY a2.10 AND NOT FIXABLE INSIDE A LESSON.**

`partir`, `sortir`, `dormir`, `servir`, `sentir`, `ouvrir`, `offrir` and `courir`
are owned by NO UNIT AT ANY LEVEL. All 76 curriculum units were read out of
`content_units` on 2026-08-11 and searched for every one of those eight; the only
unit whose body contains the string `-ir` or `iss` at all is `a2.10` itself, which
teaches the regular class and explicitly excludes them. `venir` and `tenir` have a
home at `a2.02`, seq 5. The other eight do not.

That is not a small gap. Several of them are commoner than any verb in `a2.10`'s
regular set, and **36 of their 63 present-tense forms are already published as
sentences** — `nous partons` alone has 43. The paradigm is in front of learners today
with no lesson anywhere that explains it, and a learner who has done `a2.10` and
generalises its pattern onto them produces a form no French speaker says.

**SCOPED 2026-08-11: `A2-10-L2-VERBES-IR-IRREGULIERS-SCOPE.md`.** The answer is a
SECOND LESSON IN a2.10 (`a2.10.l2`), not a new unit. `a1.30` already ships two
lessons, `lessonsOfUnit` sorts by `Lesson.seq`, and `lesson.tsx`'s `nextL` hands a
learner from l1 straight into l2, so it is a continuation rather than a reorder. A
new unit would have needed a `seq` insert across 16 units and ~16 briefs, and would
have wanted `author-full-curriculum-spine.ts`, **which is 74/75 units stale and would
revert every A2 title if run**. Two riders in the scope must ship with it:
`den.tsx:169` opens `lessonIds[0]` only, and this unit's `canDo` has to widen.

**Reachability.** Every item is named by a section or released by a `deckTranche`
and carrying a `flashcard` drill. `practice` with `skill: 'speak'` needs
`voiceflash` on every item it names; `dictation` needs `dictation`. Check against
**Postgres**. Note that many `fr.a2.verbes.*` infinitives carry only
`{flashcard,review}` and no `voiceflash`, so a speak mission that names them
renders cards the mic cannot score. `a2.01` speaks its authored sentences instead.

**The dictée mode is not a free choice.** `dicteeMode()` switches to WORD tiles
above 16 letters, and word mode hands every real word over pre-spelled. **A
silent-ending lesson can only be tested in LETTERS mode**, so every dictée target
in this band must be ≤ 16 letters. All seven of `a2.01`'s are, and all nine of
`a2.09`'s.

**NO SCORED SURFACE IN THIS APP CAN TEST AN ACCENT OR A CEDILLA.** Measured by
`a2.09` on 2026-08-11, and it binds every later lesson in the band that teaches a
diacritic (`a2.03`, `a2.16` and the participle set are the obvious ones).

`fold()` in `answer.logic.ts` normalises to NFD and strips every combining mark,
so for `typeIn` and `errorSpot`:

```
commençons == commencons        préfère == préfére == prefere
```

`normalizeFr()` in `score.ts` does exactly the same, and that is what the DICTÉE
compares with (`MissionRich.tsx`: `normalizeFr(filled) === normalizeFr(target)`)
and what the speech recogniser is scored against.

So a typed question that turns on a diacritic **accepts the mistake and tells the
learner they spelled it right**, which is worse than not asking. Only `mcq` and
`listenChoose` can test one, because their options are picked rather than typed
and `quiz-duplicate-option` compares them exactly. A doubled consonant and an
inserted letter DO survive a fold and are safe for `typeIn`.

`a2.09` runs both claims through the real functions rather than writing them in a
comment: `DICTEE_NEAR_MISS` in its corpus pairs every dictée target with the near
miss a learner would actually make and asserts, in both directions, whether
`normalizeFr` can tell them apart. Copy that shape rather than the conclusion —
if `fold` is ever fixed, the assertion fails instead of quietly going stale.

---

## 6. Baseline

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 2542   pass 2542   fail 0        measured 2026-08-11, before a2.01
  tests 2672   pass 2672   fail 0        measured 2026-08-11, before a2.09
  tests 2773   pass 2773   fail 0        after a2.09 (+101)
  tests 2870   pass 2870   fail 0        after a2.10.l1 (+97)
  tests 2877   pass 2877   fail 0        after the spine reconciliation (+7)
  tests 2951   pass 2951   fail 0        after a2.10.l2 (+74)
  tests 2964   pass 2964   fail 0        measured 2026-08-12, before a2.11
  tests 3075   pass 3075   fail 0        after a2.11 (+111)
  tests 3135   pass 3135   fail 0        measured 2026-08-12, before a2.12
  tests 3195   pass 3195   fail 0        after a2.12 (+60)
seed.json                                version 22, 8524 items, 42 lessons  (before a2.01)
                                         version 23, 8615 items, 43 lessons  (after a2.09)
                                         version 25, 8649 items, 44 lessons  (after a2.10.l1)
                                         version 25, 8687 items, 45 lessons  (after a2.10.l2)
                                         version 27, 8718 items, 46 lessons  (after a2.11,
                                           which was PUBLISHED as OTA snapshot v27)
                                         version 28, 8753 items, 47 lessons  (after a2.02,
                                           which was PUBLISHED as OTA snapshot v28)
                                         version 28, 8787 items, 48 lessons  (after a2.12,
                                           NOT published; the merge left the version alone)
pnpm content:parity                      exits 1 on three PRE-EXISTING divergences
                                         (sons.09.l1 seed-only, b2.01.l1 db-only,
                                          sons.08.l1 shape drift). Not yours.
```

**Parity has improved since that note and the note is now stale.** Measured after
`a2.09` on 2026-08-11, `content:parity` reports ONE divergence, `b2.01.l1`
database-only, and exits saying *"Nothing in the seed is at risk from a publish"*.
`sons.09.l1` and the `sons.08.l1` shape drift are no longer reported. Nobody in
this batch fixed them, so somebody else did; measure it yourself rather than
carrying either figure forward.

`ealch-admin` `npx tsc --noEmit` is also CLEAN as of `a2.09`. The five
pre-existing errors this file recorded are gone. Do not add any.

`content:publish` is **blocked** and publishing is not part of a lesson build.
Applying to Postgres and merging into the seed is the end of your job.

---

## 7. Device verification, and what it costs (measured 2026-08-11 on a Pixel 6)

**A2 is behind the `levels.all` paywall in the dev build.** `app/lesson.tsx` is the
chokepoint and it catches every route in, including deep links. `missions` and
`lessonoverview` do NOT gate, so the overview, the mission list and the mechanic
labels are all verifiable without an entitlement. The 24 cards are not.

To open them, grant a local entitlement and remove it afterwards:

```
adb shell run-as app.ealch.mobile        # the dev build is debuggable
# pull databases/RKStorage, edit with node:sqlite, push back, clear -wal/-shm
key   ealch-entitlement:anon
value {"userId":"anon","plan":"annual","features":["levels.all", ...],"source":"iap"}
```

**`plan` must be one of `free|monthly|annual`.** Anything else fails
`isValidEntitlement` and reads as free with no error, which looks exactly like the
write not landing. Ask before touching anybody's phone.

**AS OF 2026-08-11 THE PIXEL ALREADY HOLDS AN ENTITLEMENT.** `a2.10` opened all
twenty-four of its cards on the device without granting anything, so a2.01's
entitlement write is still in `RKStorage`. Nobody in batch 2 needs to touch the
phone's database, and nobody should assume they will be stopped by the paywall
either: if you meant to verify the FREE path, you will have to remove it first.

**Dev-client deep links.** `exp+wonerock://expo-development-client/?url=…%2F--%2Froute`
does not work: the launcher fetches the manifest at that path and dies with
`Cannot GET /--/route`. Load the app plainly first, then send
`exp+wonerock://<route>?key=<id>` to the running app.

### The break card is the most fragile screen in an A2 scene

Three device passes on `a2.01`'s, each finding something no test could see: the
card's own Continue sat below the fold on first paint. **The budget is LINES, not
words**, and the doctrine's "break body between 24 and 40 words" hides that. What
fits on a Pixel 6, for a break carrying both reading rows:

```
heading            <= ~13 characters      it wraps at ~12, and each line costs ~85px
reading-row gloss  <= ~24 characters      one line each; 39 and 45 chars cost two lines apiece
body               ~26 words              a1.06 ships 25
coach              ~8 words
```

A right-hand row carrying BOTH `ipa` and `respell` is four lines on its own. Budget
for it. Anything you cut from the body goes in a glossary term instead.

---

## a2.13 amendments, 2026-08-12

Written by the `a2.13` build. Seven of the ten batch-1 lessons are now built.

### 0. THE 24-SECTION SHAPE IS A CONVENTION, NOT A RULE, AND IT WAS NEVER MEASURED

Every A2 lesson before `a2.13` shipped exactly 24 sections, 6 acts and 30
questions. That shape came from `a2.01` and was copied six times without anyone
checking it against a subject.

**There is NO ceiling on section count in `schema.ts`.** The only assertion is
`sections must not be empty` (schema.ts:3281). The real limits are per-screen —
45 words on a core screen, 12 on an `xl` — and the corpus has already shipped, on
real devices:

```
most sections   sons.05.l1   31
most questions  a1.30.l1    145
largest body    a1.19.l1    100 KiB
most ids        sons.10.l1  213
```

`a2.13` ships **32 sections, 7 acts and 45 questions** because its subject
carries one Owns and four contexts, and folding those into 24 turns three of them
into a single card each. **Size the lesson to the subject and say why in the
header.** Do not copy 24 because it is there.

### 1. THE CORPUS IS RICH IN EVIDENCE AND POOR IN CARDS, AND THEY ARE NOT THE SAME THING

The single most useful measurement in this build, and it decided the design.

```
sentences holding modal + infinitive        628
                       ... with a respell    12
```

**A row without a respelling reaches a card the learner cannot say.** So the
importable pool was not 628 but 12. Any future brief that quotes a corpus figure
is quoting an EVIDENCE count; before planning around it, re-count with
`respell is not null`.

The same measurement in the other direction: the corpus holds **857 distinct
ungendered infinitives, 815 of them respelled**. Words are abundant, sentences
are not.

### 2. `--tokens` AND `--words` BOTH LIE, IN OPPOSITE DIRECTIONS

`a2.12` recorded that a `--tokens` probe reports sentence evidence and hides rows
that exist as published phrases. The mirror holds: a `--words` probe reports rows
and tells you nothing about whether they are usable on a card.

**Probe with `select ... where respell is not null` when the thing you are about
to build is a card.**

### 3. TWO SHIPPED ROWS CARRY U+203F AND WILL IMPORT THE UNDERSCORE BUG

```
fr.sons.voyelles.311        neu-v‿EUR          refused outright
fr.a2.verbes-essentiels.013 mohn eg-zah-MAN    UNREPAIRABLE, see below
```

U+203F UNDERTIE renders as a low underscore on a Pixel 6, against shipped
`sons.10` content. **Any manifest generator in this band should refuse a row
carrying it**; `_a213_manifest.ts` does, and the check is four lines.

**AND SOME ROWS CANNOT BE RESPELLED IN THE HOUSE NOTATION AT ALL.**
`Je dois étudier pour mon examen demain.` liaises at `mon examen`: the vowel of
`mon` stays nasal AND the n is pronounced into the next word. Correct notation
needs a superscript and a tie, and the tie is banned. `hasPlainNasalFor` flags it
however you repair the rest of the line. There is no fix; the row does not belong
in a lesson that displays respellings. Put it in `READ_NOT_IMPORTED`.

### 4. `Ce que vous savez faire` IS A FORM OF savoir, AND a2.14 OWNS savoir

The house roundup heading in this band is `Ce que vous savez faire` and the goals
heading is `Ce que vous saurez faire`. **Both are savoir.** `a2.14`'s entire
payload is savoir against connaître.

`a2.13` uses `pouvoir` instead (`Ce que vous allez pouvoir faire`,
`Ce que vous pouvez faire maintenant`), which is better copy for that lesson
anyway. **a2.14 has to decide** whether the chrome is exempt or whether every A2
lesson's heading is a collision. It is not a decision a2.13 could take.

### 5. THE MANIFEST STALENESS CHECK MUST EXEMPT YOUR OWN TRANSFORMS

A manifest is a read of Postgres taken BEFORE the batch runs. If your batch
repairs a respelling or supplies one, the manifest will legitimately disagree
with Postgres **after a successful run**, and a strict equality check makes the
batch refuse its own second run and call it staleness.

`a2.12` got this right for repairs by accident (it checked "contains neither the
old nor the new value") and `a2.13` got it wrong for additions. **Exempt the rows
your build transforms and check them separately.** Found by the mutation
harness's baseline step, not by anybody reading the code.

### 6. TWO GUARDS EVERY LATER LESSON SHOULD COPY

**Every itemId must be DRAWN by some section, drill or term.** Being in `itemIds`
makes a row available; it does not put it on a screen. `a1.08` shipped
forty-three ids that resolved perfectly and were rendered by nothing. `a2.13`
shipped one before the guard caught it. Walk sections + drills + terms and
compare against `itemIds`.

**A grid rendered from a table must be compared to the rows it drills.** Changing
the paradigm table from `veulent` to `voulent` was caught by the batch and the
merge and sailed through the test file, because the grid section renders from its
own table and nothing compared that table to the cards the learner is scored on.
A learner would have read one spelling and been graded on another with every gate
green.

### 7. THE MUTATION HARNESS NEEDS A BASELINE STEP, AND CRLF WILL COST YOU ONE

Two harness facts, both learned the hard way here:

- **Run all three layers unmutated first.** If the baseline is not green, every
  row below it is noise. This is what found §5.
- **These files are CRLF.** A multi-line mutation anchor written with `\n`
  matches nothing. Report a missing anchor as SKIPPED rather than treating it as
  a pass, and try the anchor in both line-ending forms.

### 8. `il faut` IS OWNED BY NO UNIT AT ANY LEVEL, AND IT IS THE COMMONEST MODAL FORM

```
il faut     319 published sentences, 0 units naming it
peut 190 · doit 103 · dois 76 · veux/veut 63 · doivent 58
```

More frequent than any conjugated form of the three verbs `a2.13` teaches.
`a2.13` ships **one recognition card** and says so; that is a compromise, not a
fix. The natural home is `a2.19` or `a2.35`, neither of which mentions it.
**Whoever builds those should take it.**

### 9. INVARIANTS §3 AND THE CORPUS DISAGREE ON /ø œ/

§3 gives `EU`. The shipped corpus gives `UH`: `peux` is already `puh`
(fr.a1.verbes-essentiels.033), `veut` is `vuh` (fr.a2.verbes-essentiels.041),
`la queue` is `KUH`, `le neveu` is `nuh-VUH`, `nerveux` is `nehr-VUH`.

`a2.13` ships `UH`, matching practice, because inventing a fourth spelling for
one sound is what invariants §9 records as the ɥ-glide mistake. **The document
and the corpus should be reconciled by somebody**, and this build did not do it.

### 10. a2.13 IS NOT A LEAF, AND THE DEPENDENTS CHECK CAN BE KEPT

`a2.12` had to loosen `a2.02`'s "die when nothing depends on this unit" check to
a report, because it genuinely had no dependents. **`a2.13` has two:**

```
a2.14 (seq 8)    declares a2.13 as a prerequisite so it can bring pouvoir back
a2.29 (seq 28)   At the Hotel
```

So the strict check was kept here. Probe your own unit rather than copying either
decision.

### 11. THE VERB ARC DOES NOT CLOSE IN BATCH 1

Measured against all 35 A2 units: **20 are verb units, 7 are built, 13 are open.**
The verbs run past batch 1 entirely — a2.17, a2.19, a2.05, a2.20, a2.21, a2.22,
a2.23, a2.06, a2.24, a2.27 and a2.35 are all still verb lessons.

The **"Irréguliers 1–5" arc** closes at `a2.15`, which is the right place for a
closing gesture: it is the first lesson that must author its own infinitives, so
the arc ends where importing stops working. Do not write a farewell into a2.13 or
a2.14.

---

## a2.14 amendments, 2026-08-12

Written by the `a2.14` build. Eight of the ten batch-1 lessons are now built.

### 0. THE BLOCK HELD, AND THE ROW COUNT IS THE ONLY REASON WE KNOW

`fr.a2.verbes` held exactly **310** rows when a2.14 claimed `.381`, which is this
file's own figure after a2.13, and **340** after, which is 310 plus its 30 and
nothing else. `.381..420` was clear. The maximum is still `.486` and still tells
you nothing.

```
340 rows   after a2.14 (310 + 30),  max .486,  gaps: + .411-.420
```

Block table, updated:

```
 8   a2.14   fr.a2.verbes.381 .. .420   TAKEN, 381-410 used, 411-420 free
```

### 1. `hasPlainNasalFor` HAS A THIRD BLIND SPOT AND IT IS ABOUT THE FRENCH

Invariants §3 records two. Corrections §6 widens the first one to "a nasal
followed by any consonant inside the TOKEN". **There is a third, it is not a
property of the respelling at all, and any lesson in this band whose sentences
hold a word spelled with `nn` or `mm` will meet it.**

```js
// hasPlainNasalFor, density.logic.ts
if (/(?:nn|mm)/i.test(fr)) return false;
```

That rescue runs on the **WHOLE FRENCH STRING**. For a WORD it is right:
`connaître` has a real /n/ and its respelling may legitimately end in one. **For
a SENTENCE it is not**: ONE doubled nasal anywhere in the line switches the check
off for every other word in it.

It bites only where the respelling puts a BARE VOWEL LETTER before the n, because
`hasPlainNasal`'s own list (`AH OH EH UH EU AI OU`) catches the two-letter house
spellings on the first branch before the French is ever consulted. `SOHⁿ` is
seen; `byaⁿ` is not.

The proof is one pair, identical but for the doubled n:

```
Il sait bien nager.        eel SEH byan nah-ZHAY        SEEN
Il connaît bien la ville.  eel koh-NEH byan la VEEL     MISSED
```

`scripts/_a214_blindspot.ts` isolates it and prints the rule. **a2.13 is not
exposed** — it uses the same bare-vowel spellings (`PAⁿ`, `MAⁿ`, `zhar-DAⁿ`) and
not one of its French strings holds a doubled nasal. a2.14 measured **13 seen, 1
missed** and asserts the missed one by name in all three layers.

**Who this will bite next:** any lesson whose sentences hold `connaître`,
`comment`, `personne`, `femme`, `homme`, `bonne`, `année` or `pomme` AND respell
a nasal with a bare vowel. a2.15's nasals are `AHⁿ`, which the first branch
catches, so it is probably clear — but measure rather than assume.

### 2. THE BRIEFS' NASAL PREDICTIONS ARE UNRELIABLE IN BOTH DIRECTIONS

a2.14's brief said `connaissons`, `connaissez` and `connaissent` meet the
false-positive path. **Measured through the real function: not one of them is
flagged, and not one should be.** The path needs a token ENDING in a vowel plus a
plain n; `koh-NEHS` ends in S and `koh-neh-SAY` in a vowel.

The same brief said `kon-NETR` (fr.a2.communaute.050) "closes a nasal with a
plain n and the checker cannot see it". **Neither half is true.** `connaître` is
/kɔ.nɛtʁ/ and the `nn` makes the vowel a plain /ɔ/, so there is no nasal to
close; the checker returning false is the checker being RIGHT. It is a variant
that puts the syllable break one letter late, and invariants §9 says a variant is
not a violation. It was not imported and it was NOT repaired.

**Run every respelling through `hasPlainNasalFor` before believing any brief
about it, in either direction.** a2.14 shipped ZERO nasal repairs, which is a
first in this band, and the reason is that eight of its twelve imports come out
of `verbes-essentiels` and `muettes`, which the sons band already went through.

### 3. THE CIRCUMFLEX IS SETTLED FOR THE WHOLE PROJECT

Measured 2026-08-12 across every published row:

```
82 rows hold a word ending in -aître     68 of those are one of the verbs
0 spell one flat
```

**One spelling, no exceptions, in 27,600 published sentences.** `connaître`,
`reconnaître`, `paraître`, `naître`, `disparaître`, `apparaître`, `maître`.
Spelling reform allows the flat form and this project has never used it. a2.15,
a2.16 and everyone after them can take this as decided.

**And the first measurement of it was wrong in the way invariants §0 promises.** A
bare substring query reported TWO flat rows; both were `préparait`, which contains
`parait`. Use a boundary-aware query or you will report a defect that is not
there.

**No typed surface can test the accent.** `fold()` strips combining marks, so
`connaît` and `connait` are one string to `typeIn`, `errorSpot` and the dictée.
Only `mcq` can ask.

### 4. THE HOUSE CHROME IS SAVOIR, AND IT SHIPS

a2.13 §1.4 raised this and could not decide it. **DECIDED: the chrome is not a
collision and every lesson keeps it.**

```
Ce que vous saurez faire   goals    36 of the 49 lessons in the seed
Ce que vous savez faire    roundup  34 of 49
```

`Ce que vous savez faire` IS savoir plus a verb, which is a2.14's own headline
structure, and a2.14 names it in the roundup and asks about it in the last
question of the exam rather than dodging it. a2.13's pouvoir versions are fine
where they are and nobody needs to change them back.

**The FUTURE form is contained.** `saurez` is permitted in the goals heading and
nowhere else, and a2.14's guards refuse it anywhere else including inside a
`why`. Any later lesson teaching the future should know that 36 lessons already
print it unexplained.

### 5. TWO INDEPENDENT COPIES OF A RESPELLING IS a2.13 §6.2 IN A NEW DIMENSION

a2.13 found that a grid rendered from its own table can disagree with the cards
the learner is scored on. **The same shape exists for RESPELLINGS and it is
easier to miss**, because the two copies live in different files.

a2.14's reference sheet has a `How to say each one` table rendered from
`PARADIGM.respells`; its cards render from the authored rows' own `respell`
fields. Twelve values, twice, and nothing comparing them. Two mutations that
"corrected" the sheet's copy were caught by the batch and the merge and **missed
by the test**, which reads the seed and was looking at the cards.

**If your lesson prints a respelling in more than one place, compare them.**

### 6. A DISPLAY GUARD MUST NOT READ SECTION IDS OR `accept` LISTS

a2.14's circumflex guard fired on the section id `s07-connaitre`, on the trigger
id `err-connaitre-clause`, and on two `accept` entries that deliberately carry the
flat spelling because `fold()` cannot tell them apart.

Two fixes, and the second is the one worth copying: walk DISPLAY strings and skip
machine keys (`id`, `ref`, `sheetId`, `itemId`, `itemIds`, `targets`, `detectOn`,
`drill`, `retest`, `accept`, `recordingId`), **and rename any identifier that
contains a string a guard is looking for.** A guard with an exception list nobody
can reason about is worse than a rename.

### 7. THE MUTATION HARNESS'S BATCH COLUMN GOES PARTLY UNINFORMATIVE AFTER THE APPLY

The batch compares the source against the stored body through `canonicalJson` and
refuses equal versions with different content. **So once the lesson has been
applied, EVERY content mutation trips the version check**, and the batch reports
"caught" with that message rather than on the guard you meant to test.

a2.14's first run had four of those. **Read the failure MESSAGE, not the column.**
The harness prints the first line of it for exactly this reason.

### 8. `also` MUTATIONS: ONE ANCHOR IS OFTEN NOT ENOUGH

Two of a2.14's twenty-five mutations reported the test as blind when the test was
CORRECT: the claim being attacked was made in three or four strings in one
section, and changing one left it true. A mutation that does not actually remove
the claim proves nothing, and it costs a diagnosis cycle to find that out.

a2.14's harness gained an `also` list per mutation. The measured shape: a section
states its claim in the title, the `say`, a group label and a check `q`, so
budget four anchors for any claim about what a section names.

### 9. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3261   pass 3261   fail 0        measured 2026-08-12, before a2.14
  tests 3325   pass 3325   fail 0        after a2.14 (+64)
seed.json                                version 30, 8832 items, 49 lessons  (before a2.14)
                                         version 30, 8865 items, 50 lessons  (after a2.14,
                                           NOT published; the merge left the version alone)
pnpm content:parity                      ONE pre-existing divergence (b2.01.l1, database-only,
                                           in_review). "Nothing in the seed is at risk."
```

**a2.13's report records seed.version as 29 and it is 30 now.** A publish landed
between the two builds (`399b04a chore(publish): snapshot v30`). Measure it
yourself rather than carrying either figure forward.

### 10. a2.14 IS A LEAF, AND a2.15 IS NOT DOWNSTREAM OF IT

Measured against all 76 curriculum units: **no unit at any level declares `a2.14`
as a prerequisite.** a2.15 (seq 9) rests on `a2.02`, not on this one. The batch
reports that rather than dying on it, the way a2.12 had to and a2.13 did not need
to. Probe your own unit; the three answers in this batch are all different.

### 11. WHAT a2.15 INHERITS

- **`reconnaître` is named ONCE, for its endings only.** The family principle is
  a2.15's, and a2.14 measured something a2.15 needs before it writes it:
  **`reconnaître` does NOT share `connaître`'s complements.** Six published
  sentences put it straight before `que` (fr.b2.recherche.151,
  fr.b2.recits-au-passe.007, fr.b2.methode-scientifique.232,
  fr.c1.discours-dexamen.136, fr.c1.rhetorique.037,
  fr.a2.conflits-reconciliation.029), which is the exact shape a2.14 teaches the
  learner to reject for `connaître`. Verbs in a family share their inflection and
  do not always share what may follow them.
- **`paraître`, `apparaître`, `disparaître` and `naître` are named nowhere** in
  a2.14, and its batch refuses them. They are free.
- **a2.15 is the first A2 lesson that must author its own infinitives.**
  `battre`, `combattre` and `remettre` are three of the six absences corrections
  §2 lists. Every one of the eight lessons before it imported everything.

### 12. TWO BUDGETS THAT ONLY A DEVICE FINDS, AND ONE THE SCHEMA ALREADY TOLD US

Found by the `a2.13` device pass on a Pixel 6, 2026-08-12, **after v1 had shipped
and published with every host gate green**.

**A `lg` groupDrill DRAWS `fr`, `ipa` AND `note`. NOTHING ELSE.**
`MissionRich.tsx:439`. And `schema.ts:899` says so in as many words: "`fr`, `ipa`
and `note` are the shipped shape. The rest are v2 additions FOR A groupDrill
RENDERING AT XL: `itemId` joins the word to the corpus, `respell`, `en` and
`silent` are the XL card's other lines."

a2.13 v1 passed `respell` and `en` on **59 item cards across eight sections**, so
a learner saw a bare French sentence with no pronunciation and no meaning on six
of the teaching missions. Put the respelling and the gloss in **`note`**, and
refuse `respell`/`en` at `lg` outright — their presence is what reads as correct
while doing nothing. Same class as the `cheatSheet` a1.13 ships inside a
reference sheet.

**THE MISSION-ROW TITLE CEILING IS 27 CHARACTERS.** The hub draws the title
beside a TYPE CHIP and the chip wins.

```
FITS  "What You Will Be Able To Do"   27, chip OBJECTIFS (9)
CUT   "Ten Verbs From Other Lessons"  28, chip GROUPES   (7)
```

Ten of a2.13's thirty-two were cut. **The same titles render in full on the act
checkpoint screen**, so it is the hub row layout alone, and it is HOUSE-WIDE:
a2.12's "One Verb, A Dozen English Ones" is 29 and is cut today. Target 25 and
you will never see it.

**AND THE ROW-COUNT DISCIPLINE IN §2 ASSUMES SERIAL BUILDS.** a2.14 applied 30
rows to its own block while a2.13 was being device-tested, taking `fr.a2.verbes`
from 310 to 340, and a2.13's equality check failed a build that was entirely
correct. Narrow it: a total that has GROWN by somebody else's allocation is a
report, a total that has SHRUNK is fatal, and the check that matters — rows
inside YOUR range that you do not own, the a1.20 failure — stays fatal.

**A DEV BUILD NEVER OTA-FETCHES.** `content.ts:255` returns immediately when
`__DEV__`, deliberately, so the published snapshot cannot overlay in-progress
seed edits. The Pixel therefore shows whatever METRO serves, and a cold restart
is needed after a seed change. A deep link that falls through to `/den` means
`content.lesson(id)` was null against a stale bundle, not that the link is wrong.

### 12. a2.14 HAD BOTH OF a2.13's DEVICE-PASS DEFECTS, AND NO GUARD COULD SEE EITHER

Added after a2.14 was finished, green on three layers and mutation-tested to zero
blind spots. It was caught because a2.13's device pass was **sitting uncommitted
in the working tree** when a2.14 came to be committed, and `git status` had to be
read before staging.

**Both budgets are house-wide and every remaining lesson in this band inherits
them.** They are now constants in a2.14's corpus as well as a2.13's, refused by
both builds' batch, merge and test, and mutation-tested in both.

**1. `respell` AND `en` DO NOT RENDER ON A `groupDrill` ITEM AT `lg`.**

`MissionRich.tsx:439` draws `fr`, `ipa` and `note` and nothing else.
`schema.ts:899` records it: `respell`, `en` and `silent` are the XL card's lines.

```
a2.13 v1   59 item cards, 8 lg groupDrills   SHIPPED AND PUBLISHED
a2.14 v2   53 item cards, 9 lg groupDrills   caught before commit
```

In both cases every card was a bare French sentence with no pronunciation and no
meaning, and every host gate was green, because the data is schema-valid and
simply read by nothing. **Put the respelling and the gloss in `note`, and do not
also pass `respell` and `en` — their presence is the trap.** The a1.08 class:
valid data no component reads.

**If your lesson uses `rowCard`-style helpers, check what size your groupDrills
are before you trust them.** a2.15's, a2.03's and every batch-2 lesson's will be
`lg` unless they say otherwise, because `lg` is what this band has copied since
a2.01.

**2. THE MISSION-ROW TITLE CEILING IS 27 CHARACTERS.**

The missions hub draws the section title and a TYPE CHIP on one row and the chip
wins, so a longer title ellipsises. The same titles render in FULL on the act
checkpoint screen, which is why nothing looks wrong anywhere else.

```
a2.13   8 of 32 titles cut in v1
a2.14   4 of 28 titles cut in v2
a2.12   "One Verb, A Dozen English Ones" is 29 and is CUT TODAY
```

**3. WHAT THIS SAYS ABOUT THE HOST HALF, AND IT IS SHARPER THAN INVARIANTS §7.**

a2.14's host half did everything the invariants ask: it served the bundle, grepped
it for every new string and for the strings that must be absent, and grepped the
renderer for a `case` handling every section type. All of it passed. **Every one
of those strings was on a card that would not draw it.**

> A grep proves a string is in the bundle. It proves nothing about whether any
> component reads it.

Three of the four a1.08-class defects in this project are fields that are present,
valid and read by nothing: the second `quiz`, the `cheatSheet` inside a reference
sheet, and now `respell` on an `lg` groupDrill item. **The host half cannot find
this class at all.** Budget a device pass for it, and if there is no device, say
that this specific class is unverified rather than that the host half is done.

### 13. DO NOT DESCRIBE OTA STATE FROM A PUBLISH LOG, AND DO NOT OFFER `rollout 0` AS A FIX

Two messaging errors made by the `a2.13` build, corrected 2026-08-13 after the
claims were checked against the code and against the served bytes.

**`content:rollout 0` STOPS NEW ADOPTERS AND HEALS NOBODY.** a2.13's report and
its commit messages called it "the kill switch" that "halts adoption without a
republish", and offered it as protection against a defect that was already live
at 100%. `set-rollout.ts:13` says the missing half outright: *"What this cannot
do: heal a device that already adopted a bad version. That is content:rollback.
Kill first to stop the bleed, then roll back to heal."* `shouldAdopt`
(content.logic.ts:526) needs `manifestIsNewer` AND `bucket < rollout`, and the
on-device cache only moves FORWARD.

```
content:rollout 0    stop the bleed. Never the fix.
content:rollback     old CONTENT as a NEW version. The only heal that does not
                     ship whatever else is published in Postgres right now.
content:publish      heals, and ships everything else too.
```

`OTA-RUNBOOK.md:44` had it right all along. **A build report is a lossy copy of
the runbook; act on the runbook.**

**AND WHAT A LEARNER SEES CANNOT BE READ OFF A PUBLISH LOG.** The log says what
was uploaded. It does not say what is being SERVED, at what rollout, or what a
lesson body inside it contains. `scripts/_a213_wire.ts` downloads the live
manifest and snapshot and reads a lesson out of them:

```
manifest    v30, rollout 100%, snapshots/v30.json, published 02:20:20Z
a2.13.l1    body v1 — 59 lg groupDrill cards, 0 carrying a note
a2.14.l1    ABSENT
```

That is what proved the defect was real on the served bytes rather than only in
the source, and that holding the publish had in fact kept a2.14 unreleased.
**Quote the wire, not the log.**

### 13. THE MISSION-TITLE CEILING IS A WIDTH, NOT A CHARACTER COUNT

**This corrects §12 and a2.13's own finding, and it was measured on the same
screen at the same font scale.**

```
FITS  "What You Will Be Able To Do"   27 chars   chip OBJECTIFS
CUT   "The One That Does Not Exist"   27 chars   chip EXEMPLES
```

Same count, same screen, one cut. The glyphs differ: the second carries O, D, N,
E, x and s where the first carries W, h, i, l, t and B.

**So a character guard is NECESSARY AND NOT SUFFICIENT.** Keep it at 27 —
lowering it fails the house heading that 36 lessons ship and that demonstrably
fits — and treat 26 to 27 with wide glyphs as UNVERIFIED until it has been read
off the hub. a2.14 read all 28 of its titles off three hub screens; one was cut
and the other 27 fit.

### 14. `frSub` IS THE ONE FIELD THAT IS DELIBERATELY FRENCH, AND A CONSTANT CAN BREAK THAT

a2.14 put `WHAT_FOLLOWS` — a2.02's pattern NAME, "what comes next decides" — into
a section's `frSub`. It is the right phrase to quote and the wrong field to quote
it in: every other sub on the hub is French, so that row was the only lowercase
English line in the column.

Doctrine §B.7 tells later lessons to quote an earlier unit's pattern name
verbatim. **Quote it in the body, the terms and the sheet. Not in `frSub`.**
Invariants §8: English UI chrome, French content, and `frSub` is the one field
that is deliberately French.

Neither the batch, the merge nor the test could see this: the string is valid,
the field is populated, and no guard in the band checks that `frSub` is French.
It is worth one, and a2.14 did not add it.

### 15. WHAT THE a2.14 DEVICE PASS COST, AND WHERE THE HOST HALF'S PREDICTION FAILED

Three defects, v3 → v5, all on screens a learner meets in the first two minutes:

```
9.1  the scene break card's own Continue, clipped under the pager bar
       ledger §7's defect, on mission 1 of 28. One line over budget, and the
       line was the right-hand reading row: ipa is REQUIRED on a break row, so
       the only lever is the French, and 31 characters WRAPPED.
9.2   a cut mission title at 27 characters (see §13)
9.3   an English frSub (see §14)
```

**And the report's own prediction of what would be wrong was right about the
wrong thing.** It flagged the two-column grid hardest, as "the one thing most
likely to be wrong"; the grid was clean. It gave the break card one line; that
was the one. The two hub defects were not anticipated at all.

The general lesson, and it is sharper than invariants §7: **the host half can
tell you a string is in the bundle and cannot tell you anything about how it
sets.** Wrapping, clipping, ellipsis and field-level house rules are all
invisible to it. Budget a device pass; if there is no device, say which of those
four classes is unverified rather than that the host half is done.

---

## a2.15 amendments, 2026-08-12

Written by the `a2.15` build. **Batch 1 is complete except `a2.03` (seq 10),**
which needs the theme decision in §3 above before anybody authors it.

### 0. THE BLOCK HELD, AND THE COUNT IS STILL THE ONLY REASON WE KNOW

`fr.a2.verbes` held exactly **340** rows when a2.15 claimed `.421`, which is this
file's own figure after a2.14, and **374** after, which is 340 plus its 34 and
nothing else. `.421..460` was clear. The maximum is still `.486`.

```
374 rows   after a2.15 (340 + 34),  max .486,  gaps: + .455-.460
 9   a2.15   fr.a2.verbes.421 .. .460   TAKEN, 421-454 used, 455-460 free
```

### 1. THE FIRST A2 BUILD TO AUTHOR AN INFINITIVE, AND CORRECTIONS §2 CALLED IT

`battre`, `combattre` and `remettre` do not exist at any status in any theme.
Five builds in a row before this one authored none.

**Corrections §2's list of six absences for the whole level is incomplete.**
Also absent: `reprendre`, `débattre`, `abattre`. And **`admettre` EXISTS**
(fr.b1.verbes.086, `ad-METR`), which that list implies it does not. None of it
changed the build, because `reprendre` and `admettre` are the two the exam gives
cold and must not be authored, but a later author reading corrections §2 as
complete will be wrong.

**And `battre` is not quite absent.** It appears as an infinitive inside four
published phrases, one of which is `fr.a1.cuisine.166`, respelled `BATR LAY ZUH`.
The house form for a verb nobody had written a headword for was READ OFF a
published row rather than invented, which is the same move
`fr.sons.consonnes.107` makes possible for `PRAHⁿDR`. What is genuinely absent is
any conjugated form: `bats`, `battons`, `battez`, `battent`, `combattons` and
`combattent` are all zero across 27,600 published rows.

### 2. THE DICTÉE CANNOT SEE U+0153, AND IT DROPS IT FROM BOTH SIDES

**New, measured, and it binds every lesson in the level that touches a word with
that ligature in it.**

`letterCount()` in `dictee.logic.ts` strips everything outside `[A-Za-zÀ-ÿ]`, and
U+0153 is outside it. So is the letter bank at `MissionRich.tsx:1343`, and so is
the target it is compared against.

```
"Je bats les œufs."       letterCount 12, real letters 13
"Vous battez les œufs."   letterCount 16, real letters 17, and it spells in LETTERS
bank and target both      "Jebatslesufs"
```

A learner spelling the word without the ligature assembles the target exactly and
is told they are right. It is corrections §5 in a new dimension. `battre les
œufs` was the natural frame for a2.15 and it is the reason that lesson's frame is
`Paul`.

**Any manifest generator in this band should refuse a carried row holding it**,
the way a2.13's refuses U+203F. a2.15's does, and the check is four lines. Words
already in the corpus that will meet this: `le cœur`, `la sœur`, `l'œuf`,
`le bœuf`, `une œuvre`.

### 3. TWO HOLES IN THE GUARDS EVERY A2 LESSON BEFORE THIS ONE CARRIES

Both were found by a device pass and a seed-wide test, after every host gate in
the build was green.

**THE JARGON MATCH DOES NOT COVER A PLURAL.** `hasPhrase` is boundary-exact, so a
list holding `paradigm` does not catch `paradigms`. a2.15 v2 titled act 2 "Three
paradigms, eighteen cells" and an act title is drawn on the RESUME INTERSTITIAL,
which is the first screen a returning learner meets. a2.14's list works round
this one word at a time, carrying `infinitive` AND `infinitives`; the fix is one
line, and all three of a2.15's layers now carry it.

**`prose()` DROPS `sub`, AND ON A cardDeck CARD `sub` IS PROSE.** `sub` is in
NOTATION_KEYS because on most cards it holds a respelling. a2.15 v1 put a banned
word in one; the batch and the merge were green and `sons-alphabet.test.ts` went
red the moment the merge landed. Run the house-copy and jargon checks over
`display()` as well, which keeps `sub` and drops only machine keys. Nothing in an
IPA or a respelling can be an em dash, a banned word or grammar jargon, so the
wider walk costs nothing.

### 4. THE FRAME CHECK IS NOT UNIVERSAL, AND a2.14 IS THE SPECIAL CASE

a2.14's batch asserts its two columns use **different** frames, because the
complement was the thing it taught and a shared frame would have deleted the
lesson. **a2.15 asserts the opposite**, and copying a2.14's check would have
failed a correct build: here the stem is the teaching and the complement is
noise, so the back of the sentence must not move. `la clé` is the only object
tried that puts all twelve prendre and mettre cells in LETTERS mode.

Before copying either, ask which half of the sentence your lesson is about.

### 5. a2.14's BLIND-SPOT PREDICTION HELD, AND THE OLDER ONE BIT INSTEAD

a2.14 §1 predicted a2.15 would be clear of the doubled-nasal blind spot, because
`AHⁿ` and `OHⁿ` are two-letter house spellings that `hasPlainNasal` catches on
its first branch before the French is consulted. **Measured and true**: six of
a2.15's sentences carry `prennent` or `apprennent`, which put a doubled n in the
French, and every superscript in them is still seen.

What bit instead is corrections §6's original shape. 29 superscripts, 27 seen,
**2 missed**, and both are `ray-POHⁿS` in `réponse`, where the nasal is followed
by a consonant INSIDE the token.

The **false-positive path is not met**, and the candidate that looks like it
should fire is `PREN`: a vowel, a plain N, at a token boundary. It does not,
because `hasPlainNasal`'s own list is (AH OH EH UH EU AI OU) and `EN` is not in
it. Reported as an absence, as corrections §6 asks.

### 6. A groupDrill CHECK IS AN mcq, SO A MISSION CANNOT BE A PRODUCTION SURFACE

Worth stating plainly, because three briefs in this band ask for production in a
mission. `check` carries `q`, `opts`, `correct` and `why` and nothing else. The
only surfaces in this app that make a learner produce free text are the quiz's
`typeIn` and `errorSpot`, and the dictée, and a dictée can only name a corpus
row, so it cannot test a word the lesson deliberately does not have a row for.

a2.15 needed a learner to build a verb it never showed them. The mission before
the exam is recognition under pressure and **round 4 of the exam is the
production**: five free-text answers on four distinct cells.

### 7. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3333   pass 3333   fail 0        measured 2026-08-12, before a2.15
  tests 3403   pass 3403   fail 0        after a2.15 (+70)
seed.json                                version 31, 8865 items, 50 lessons  (before)
                                         version 31, 8907 items, 51 lessons  (after,
                                           NOT published; the merge left the version alone)
pnpm content:parity                      ONE pre-existing divergence (b2.01.l1,
                                           database-only, in_review)
```

**a2.14's report records seed.version as 30 and it is 31 now.** A publish landed
between the two builds (`8590a15 chore(publish): snapshot v31`). Measure it
yourself rather than carrying either figure forward.

### 8. a2.15 IS A LEAF, AND SO WAS a2.14

No unit at any level declares `a2.15` as a prerequisite. a2.03 (seq 10) is next
on the trail and rests on a1.14 and a1.16. The batch reports it rather than dying
on it. Three builds in this batch, three different answers; probe your own unit.

### 9. THE MUTATION HARNESS: TWO THINGS TO COPY

- **A missing seed anchor is a skipped LAYER, not a skipped mutation.** The test
  reads `seed.json` and nothing else, so a source mutation it cannot see is n/a
  rather than MISS, and dropping the whole row throws away the batch and merge
  results with it. a2.15's first run called eight correct assertions blind for
  this reason.
- **A bad mutation proves nothing and costs a diagnosis cycle.** One of a2.15's
  twenty offered « Je prends la clé. » against « Il prend la clé. » as a
  homophone offence; they differ by the PRONOUN as well as by the form, and je
  against il is perfectly audible, so the guard was right to ignore it. The rule
  fires only when two options differ ONLY by a homophone.

---

## a2.03 amendments, 2026-08-13

Written by the `a2.03` build. **BATCH 1 IS COMPLETE.** Ten of ten.

Full report: `A2-03-BUILD-REPORT.md`.

### 0. THE THEME DECISION IS MADE. IT IS IN §3 ABOVE, AMENDED IN PLACE.

`adjectifs-essentiels`, and no theme was created. §3 asked the question the wrong
way round: a1.14 and a1.16 had a home and this file never named it. Blocks
reserved there for a2.16 (`.041..080`) and a2.17 (`.081..120`).

### 1. THE ID BLOCK, AND THE ONE EASY CASE IN THIS BATCH

```
10   a2.03   fr.a2.adjectifs-essentiels.001 .. .040   TAKEN, 001-033 used, 034-040 free
     0 rows before, 33 after
```

The namespace did not exist, so unlike `fr.a2.verbes` there is no row-count
arithmetic to get right: **any row inside the block this build does not own is
somebody else landing in it**, full stop. The theme-wide total (645 published,
excluding this build) is checked the way §a2.14-12 asks: growth is a report,
shrinkage is fatal.

### 2. `scenario.logic.test.ts` REQUIRES TWO ALTERNATIVES PER ROLE-PLAY TURN

**New, seed-wide, and mentioned in NO document this band reads** — not the
doctrine, not the invariants, not corrections, not this file.

> *"one accepted answer per turn is the cloze-test failure this content exists to
> fix"*

It also requires `userEn` on every turn. a2.03 v1 shipped three turns with one
alternative apiece; the batch and the merge were both green and the suite went red
the moment the merge landed. Same class as a2.15 §3's banned word in a `cardDeck`
`sub`, and it will bite every remaining lesson in the level, because every one of
them ships a `scenario`. **Budget two alternatives and a `userEn` per turn.**

### 3. A TERM-CHIP ROW BUDGET, WHICH IS A THIRD WIDTH NOBODY HAD MEASURED

§a2.14-13 established that the mission-title ceiling is a WIDTH rather than a
count. **The same is true of the term chips, and the budget is 37.** Read off
three hub screens on a Pixel 6:

```
37   "the ones that never change" + "four shapes"      BOTH FULL
39   "words ending in -eux" + "words ending in -if"    SECOND CHIP CUT
40   three chips on one row                            over
```

The cut chip lost the `-if`, which was the entire distinguishing content of the
term. Every host gate was green: the strings are valid, both chips render, and
only the width is wrong. **A first version of the guard was set at 32 and failed
two screens that are demonstrably fine**, so the number matters: 37, and anything
from 34 up stays unverified until it has been read off the hub.

### 4. THE GUARD WALK MUST INCLUDE THE AUTHORED CORPUS ROWS, NOT JUST THE LESSON

Found by the mutation harness, and it is the only class it found that nothing
caught. Every build in this band walks `sections + sheets + terms + intro +
overview`. Two mutations wrote a neighbouring unit's subject into an authored
row's **`notes`** and all three layers missed them.

`Item.notes` reaches no component today — referenced by `density.logic.ts`,
`schema.ts` and `content.logic.ts`, and by nothing in `src/components` — so
nothing shipped. It is still a hole: the claim a neighbour guard makes is about
what the LESSON teaches, and the corpus rows are content the build authored and
owns. `schema.ts` calls the field "a teaching note, hack or clue" and says the
dictation why-tip lands there, so a renderer arriving later would ship it.
**Add `fr`, `en` and `notes` on every authored row to the walk.** It is one line.

### 5. THE JARGON LINE IS MEASURABLE, AND IT IS EASY TO SET IT TOO HIGH

a2.03's first `JARGON` list banned `adjective`, `masculine`, `feminine` and
`plural` — which would have made it the only lesson in the adjective arc that
avoids them. a1.13 uses `feminine` **71 times** on its learner surfaces and
`plural` 40; a1.16 uses `noun` 115 times.

**The line is what the neighbouring lessons already ship, not what reads as
technical.** `scripts/_a203_jargon.ts` prints the table for any candidate list
across a chosen set of lessons; point it at your own neighbours before writing the
list. What none of the five uses even once is the real ban list, and it is 21
words long.

### 6. A FOURTH INSTANCE OF INVARIANTS §3's FALSE POSITIVE, AND THE FIRST ON A COLOUR

Corrections §6 asks for the false-positive path to be looked for and its absence
reported. **It was found**, on a published row a2.03 imports:

```
crème   /kʁɛm/   a real /m/, NO nasal vowel in the word
        KREHM    FLAGGED       fr.sons.couleurs.032
        KREM     not flagged   and this is the repair
```

`jaune`/`ZHOHN` exactly. Invariants §3 already says the fix is to **drop the H,
never to add a superscript** — there is no nasal vowel to close and a `ⁿ` teaches
a sound that is not there. `KREHMM` also passes by the `nn|mm` rescue and was
rejected: `automne` needs a doubled letter because its spelling forces it and
`crème` does not. After `jaune`, `automne` and `la semaine`, this is the fourth.

**And the nasal PREDICTION was wrong again, in the direction §a2.14-2 records.**
Two rows were listed as blind on the reasoning that the nasal is followed by a
consonant inside the token; the checker sees both. 29 superscripts, 27 seen, 2
missed, and the two are one token. **Measure, never predict.**

### 7. A MERGE PATH FOR `RESPELL_ADDITIONS`, WHICH a2.15's DIES ON

a2.15's merge dies if the table is non-empty, with the note that it "has no path
for them". a2.03's has the path and the difference that makes it safe is one line:
**an addition may only land on a row whose respelling is EMPTY.** A row somebody
has respelled since the manifest read is left alone and the staleness check then
reports it, rather than the merge silently overwriting.

Worth having: a2.13 §1 established that a row without a respelling reaches a card
the learner cannot say, and the two rows carrying the only published evidence of
`sportif` and `sportive` in 27,600 rows had none.

### 8. THE ABSENCE LIST IN CORRECTIONS §2 IS A FLOOR, NOT AN INVENTORY

§2 records six absences for the whole level. a2.15 found three more and one
listed-absent word that exists. a2.03 found a tenth: **`sérieuse`, 0 rows at any
status**, which neither the brief nor §2 names. Probe every form you intend to
display, not just the ones a list gives you.

### 9. a2.03 IS NOT A LEAF, AND ITS THIRD DEPENDENT IS NOT IN ITS BRIEF

```
a2.16 (seq 11)   a2.17 (seq 12)   a2.08 (seq 32)
```

The brief names the first two. `a2.08` "Comparatives and Superlatives" also
declares `a2.03` as a prerequisite. Three builds in this batch, three different
answers to the dependents question; probe your own unit.

### 10. THE SECTION MIX OF THE WHOLE BAND, MEASURED

`scripts/_a203_mix.ts` prints it. Across the ten shipped A2 lessons before a2.03:

```
groupDrill 45 · cardDeck 42   out of 255 sections, 34% between them
tapTable 10 · reading 8 · flashcards 6 · teach 3 · cheatSheet 1
useCases 0 and vocabThemes 0   in ALL TEN
```

a2.03 ships one groupDrill against an average of 4.5, and is the first lesson in
the band to use `useCases` or `vocabThemes`. **Both render**: `MissionSection.tsx`
has no `case` for either and its shared fallback — which lives after the switch so
a `break` lands on it — hands both to `SectionView`. Confirmed on a Pixel 6,
because a grep proves a string is in the bundle and nothing else.

### 11. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3403   pass 3403   fail 0        measured 2026-08-13, before a2.03
  tests 3451   pass 3451   fail 0        after a2.03 (+48)
a1-03-genre.test.ts   35 pass before, 35 pass after, ending population unchanged
seed.json                                version 32, 8906 items, 51 lessons (before)
                                         version 32, 8956 items, 52 lessons (after,
                                           NOT published; the merge left the version alone)
pnpm content:parity                      ONE pre-existing divergence (b2.01.l1,
                                           database-only, in_review)
```

**a2.15's report records seed.version as 31 and it is 32 now.** A publish landed
between the two builds. Measure it yourself rather than carrying either figure
forward.

### 12. WHAT BATCH 2 SHOULD TAKE FROM THE WHOLE OF BATCH 1

The four guard holes this batch found, in the order they were found, are all
"a layer nobody was walking":

```
a2.11   `intro` and `overview`          drawn on two screens, walked by nothing
a2.15   `sub` on a cardDeck card        prose() drops it as notation
a2.15   the -s plural of a jargon term  hasPhrase is boundary-exact
a2.03   `notes` on an authored row      the walk stopped at the lesson
```

Each was found one layer further out than the last. The walk that now holds is
`sections + sheets + terms + intro + overview + acts + drills`, over BOTH
`prose()` and `display()`, plus `fr`/`en`/`notes` on every authored row, with
every jargon entry checked in its plural.

---

## a2.16 amendments, 2026-08-13

Written by the `a2.16` build, which is **seq 11 and the first lesson of BATCH 2**.
It is recorded here rather than in a batch-2 ledger because it takes an id block
this file reserved, and because everything below binds `a2.17` at seq 12.

Full report: `A2-16-BUILD-REPORT.md`.

### 0. THE BLOCK HELD, AND §3's RESERVATION WAS EXACTLY RIGHT

`fr.a2.adjectifs-essentiels` held exactly **33** rows when a2.16 claimed `.041`,
which is a2.03's own figure after its apply, and **51** after, which is 33 plus
its 18 and nothing else. **Zero rows were inside `.041..080`.**

```
11   a2.16   fr.a2.adjectifs-essentiels.041 .. .080   TAKEN, 041-058 used, 059-080 free
12   a2.17   fr.a2.adjectifs-essentiels.081 .. .120   reserved, still empty
     51 rows in the namespace after a2.16
```

### 1. a2.03's TEST FILE CLAIMED THE WHOLE NAMESPACE, AND IT BROKE THIS BUILD

**Four of a2.03's forty-eight tests went red the moment a2.16's merge landed**,
and not one of them was about a2.16. They filtered on
`id.startsWith('fr.a2.adjectifs-essentiels.')` and meant "the rows a2.03
authored" — the same set only while a2.03 is the only lesson in the namespace.
**a2.03's own report reserved `.041..080` for a2.16 and `.081..120` for a2.17**,
so the guards were guaranteed to break on the next lesson in the arc, and to
break it in a way that reads like a defect in the new build.

It is **§a2.14-12 one level up**: the row-count discipline in §2 was narrowed
from "the total must not move" to "nothing may land inside MY range" for exactly
this reason, and the test file never got the same treatment.

Fixed by scoping, not by relaxing: every assertion is byte-identical and only the
filter changed. `a2-03-accord.test.ts` now carries `MY_BLOCK`/`isMine`/`myRows`
and the four tests read `myRows()`. **The duplicate-`fr` check is deliberately
NOT scoped** — `flashhub-coverage.test.ts` counts two rows sharing an `fr` in one
theme as one card served twice, and that is true whoever authored them.

**a2.17 will land in this namespace too.** If its test files filter on the
namespace prefix they will break a2.03 and a2.16 together.

### 2. THE FIFTH WIDTH DEFECT IN THIS BAND, AND THE THIRD FIELD

§a2.14-13 established that the mission-title ceiling is a WIDTH rather than a
count, and §a2.03-3 found the same for the term-chip row. **a2.16 found it in a
third field: a tapTable's COLUMN HEADERS.**

```
For a woman     ->  For a / woma / n
Several         ->  Severa / l
Several women   ->  Severa / l wom / en
```

Every host gate was green — the strings are valid, the table renders, all fifteen
cells sit on one screen with no horizontal scroll — and only the width is wrong.
v1 to v2.

**The measurement is in the failure and it is glyph-based, not length-based:**

```
plain     5 chars, 0 wide glyphs   ONE LINE
vowel     5 chars, 1 wide glyph    ONE LINE
woman     5 chars, 2 wide glyphs   BROKE   woma|n
Several   7 chars, 0 wide glyphs   BROKE   Severa|l
```

So the budget for a five-column header is **six characters, and at most one `w`
or `m` past four**. The first version of the guard was one glyph too strict and
rejected `vowel`, which demonstrably fits.

**AND THE CELLS HAVE A LIMIT THIS BUILD DID NOT FIX.** A five-column cell on a
Pixel 6 holds about six characters, so the `nouveau` row wraps mid-word:
`nouve|au`, `nouvell|e`, `nouve|aux`, `nouvell|es`. `beau` and `vieux` are clean.
The only fixes are dropping to four columns or shortening a word that is the
content. **a2.17 should know the number before it reaches for five columns.**

### 3. A GUARD THAT LOOPS OVER THE CONSTANT THE CONTENT RENDERS IS GUARDING NOTHING

Found by the mutation harness, and it is invariants §5 in a shape that reads as
correct. a2.16's plural screen names the two lessons that already own two thirds
of its trap, and the guard was:

```ts
for (const u of PLURAL_UNCHANGED_UNITS) {         // the section RENDERS this
  if (!strings(section).some((s) => hasPhrase(s, u))) die(...);
}
```

Renaming the constant to `['the earlier lessons']` passed **every layer**, because
the section then rendered the new value and the guard looked for it. The batch
reported "caught" and the message was the version check (§a2.14-7: read the
message, not the column).

**Assert the literal.** A back-reference to a unit id is not a variable.

### 4. THE MERGE LAYER DRIFTS THINNER THAN THE BATCH, AND THE HARNESS IS HOW YOU FIND OUT

Six of a2.16's twenty-nine mutations were caught by the batch and MISSED by the
merge: the jargon walk, the act weights, a column position, the placement ban,
the plural owners and the audio brief. None shipped, because the batch runs first
and two of three layers caught each one.

It is still worth fixing, and the reason is procedural: **the merge is the layer
that runs when somebody re-merges without re-applying.** A merge thinner than the
batch has stopped being a check.

### 5. CORRECTIONS §3 HAS ITS FIRST COUNTEREXAMPLE, AND ONLY HALF OF ONE

"The corpus has forms and no minimal pairs" had held for seven builds. a2.16
found four published rows in ONE frame holding the third form of all three
adjectives, in its own home theme:

```
fr.a1.adjectifs-essentiels.204   C'est un bel arbre.
fr.a1.adjectifs-essentiels.038   C'est un nouvel ami.
fr.a1.adjectifs-essentiels.214   C'est un vieil immeuble.
fr.a1.adjectifs-essentiels.026   C'est un bel homme.
```

**The second half of §3 held completely: not one of the four had a respelling**,
so all four reached a card the learner cannot say. Import and SUPPLY, rather than
authoring a fifth copy of a frame the corpus already has.

### 6. CORRECTIONS §2's ABSENCE LIST IS A FLOOR, AND IT IS ALSO WRONG THE OTHER WAY

§8 of the a2.03 amendments records that the list is a floor. a2.16 found the
opposite error as well: **its brief predicted three absences and two of the three
EXIST**, published and respelled, in the lesson's own home theme.

```
bel     fr.sons.adjectifs-essentiels.314   EXISTS
vieil   fr.sons.adjectifs-essentiels.315   EXISTS
nouvel  ABSENT at any status in any theme
```

**And a2.03's own corpus file already said so**, in `READ_NOT_IMPORTED`, marked
"a2.16's". Doctrine §A.4 sends every author to the newest shipped lesson's corpus
header first; this is the second time in the band that reading it would have
saved the first hour.

### 7. A NOTATION DECISION FOR THE WHOLE PROJECT: THE JOIN IS A HYPHEN

Every `bel`/`nouvel`/`vieil` phrase runs its final consonant into the following
vowel, so the join has to be marked, and U+203F is banned (§a2.13-3). The only
respelled third-form sentence in 27,691 published rows carries **two** of them
(`fr.sons.masterclass.034`) and is unusable.

**The house had already made the decision.** The shipped corpus writes exactly
that join with a plain hyphen: `un ami` = `uh-nah-MEE`, `une amie` = `ü-nah-MEE`,
`un ordinateur` = `uh-nor-dee-nah-TUHR`. So `C'est un bel arbre.` is
`seh-tuhⁿ beh-LAHRBR` and nothing was invented.

**A consequence worth knowing: the short form's respelling never appears intact
in a phrase.** `BEL` is not inside `beh-LAHRBR` and must not be. A guard that
checks a phrase respelling CONTAINS its adjective's respelling will fail on a
correct row; assert the JOIN instead.

### 8. THE NASAL CHECKER SAW EVERYTHING, WHICH IS A FIRST

17 superscripts, **17 seen, 0 missed**. a2.11 missed 11 of 25, a2.14 1 of 14,
a2.15 2 of 29, a2.03 2 of 29. Not luck: every nasal here is `uhⁿ` or `sohⁿ` and
both END a token, which is the one shape corrections §6 says the checker can see.
The false-positive path is **not met** and four candidates were tried, all
asserted through the real function.

a2.14 §1's doubled-nasal blind spot IS met, on one imported row (`immeuble`),
which carries no superscript to lose.

### 9. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3451   pass 3451   fail 0        measured 2026-08-13, before a2.16
  tests 3489   pass 3489   fail 0        after a2.16 (+38)
a1-03-genre.test.ts   35 pass before, 35 pass after, ending population unchanged
seed.json                                version 33, 8956 items, 52 lessons (before)
                                         version 33, 8976 items, 53 lessons (after,
                                           NOT published; the merge left the version alone)
pnpm content:parity                      ONE pre-existing divergence (b2.01.l1,
                                           database-only, in_review)
```

**a2.03's report records seed.version as 32 and it is 33 now.** A publish landed
between the two builds. Measure it yourself rather than carrying either figure
forward.

## The trapDrill shape, swept across seq 1..11, 2026-08-13

**Two of the thirteen trapDrills in the band shipped in the pre-stepping shape,
and nothing anywhere asserted the difference.** Found by Paul on a device:
a2.03.l1 mission 8 (`s08-check`) and a2.16.l1 mission 14 (`s14-which`). The
other eleven, across a2.01, a2.02, a2.09, a2.10 l1 and l2, a2.11, a2.12, a2.13
(two), a2.14 and a2.15, all walk `rule > cards > audio > drill`.

### What the stacked shape costs the learner

`TRAP_STEP_KINDS` in schema.ts says why stepping was introduced: stacking the
jobs "made the cards a column and left the drill permanently below the fold".
Both sections carried exactly that, plus three consequences that are not
obvious from reading the authored data:

| | stacked (what shipped) | stepped (the band) |
|---|---|---|
| the reflex check | under six flip cards, below the fold | owns a screen |
| the gate | none, swipe straight past | `gate: true`, held until answered |
| the declared `audio` | played nowhere at all | a step with both speeds |
| the pager header | frozen on `MISSION 14 / 24` | `14.1` to `14.4` |
| the red eyebrow | hardcoded `LES PIÈGES` | the step's own label |

The header freeze is `subCount()`: it returns 1 for a trapDrill without `steps`,
so there is no sub-position to report and a resume anchor cannot land finer than
the mission's first screen. `ownsLayout` is false for the same reason, which is
what puts the check in a scrolling page.

### The four fields, and the one that is not free

`swipe: true`, `say`, `audio` and `steps`, and `size: 'lg'` comes off (the
stepped branch of MissionSection sizes off `steps?.length`, and no stepped
trapDrill in the corpus carries a size).

The audio step is the one with a cost. It plays each card's `fr` at the
section's speeds, so the `recordingId` must name a take that actually contains
those lines:

- **a2.16** needed nothing new. All six of `s14-which`'s cards are lines
  `rec-a2-16-pairs` already briefs and already carries, so the step points at
  the take the lesson already turns on.
- **a2.03** needed a new one. Every take in that lesson is SENTENCES and the
  trap's twelve words are bare naming forms, so `rec-a2-03-groups` was briefed
  rather than pointing the step at clips it does not contain. Its brief is the
  inverse of the grid takes: nothing in the reading may signal which group a
  word is in.

### The band's audio-step title is a claim, and check it before copying

Ten A2 traps title theirs **« Wrong, Then Right »**, and for those it is true:
`wrongThenRight: true` is set and the take really is a wrong reading followed by
a right one. Neither of these two has such a take, so both got a truthful title
instead (`Hear The Ending, Not The Group`, `Hear The Next Word Decide`) and
neither sets the flag. **`wrongThenRight` is read by nothing** — it is declared
in `SectionAudio` and no component consults it — so it is documentation for the
studio, and setting it where it is false costs nothing today and misleads a
reader later.

### Pinned

`lesson-contract.test.ts`, "an A2 trapDrill walks its jobs one screen at a time":
step kinds exactly `rule>cards>audio>drill`, `swipe`, an `audio` spec, a `say`,
and a gated drill step. **Scoped to `a2.*` deliberately** — sons.02 and sons.05
have no audio step and sons.10 has no rule step, and all three are right for
what those sections do. Proved by mutation: stripping `steps` and `swipe` from
`s14-which` fails it with the section named.

### a2.03's batch claimed a namespace when it meant a block

Re-running `content:accord-adjectifs` failed on eighteen "foreign" rows that are
`fr.a2.adjectifs-essentiels.041..058` — a2.16, sitting exactly where a2.03's own
report reserved it. Both the pre-flight and the post-commit read the whole
`fr.a2.adjectifs-essentiels.%` prefix. The post-commit one is worse: it fires
AFTER the transaction commits, so it reports a clean write as a failure.

Same defect and same fix as `a2-03-accord.test.ts` during the a2.16 build.
Scoped to `ID_BLOCK` (`.001..040`), which the corpus already exported and the
batch never used. **A row inside the block it does not own is still fatal.**
a2.17 lands at `.081..120` in the same theme and its batch must be written this
way from the start, not repaired later.

### Still open

**`TrapAudioStep` hardcodes a French sentence, and it belongs to sons.06.**
`MissionRich.tsx` prints « Écoutez la paire. Le R sonne, puis le R se tait. »
above the audio step of EVERY stepped trapDrill, unconditionally and untranslated
— so all thirteen A2 traps tell an English-medium learner about a moving R that
none of them teaches. Not fixed here: it is app code, so it needs a build rather
than a content snapshot, and it touches every sons lesson using the type. The
fix is an i18n entry and an optional authored override, not a second literal.

### Versions

`a2.03.l1` v3 → **v4**, `a2.16.l1` v2 → **v3**. Both applied to Postgres and
merged. Suite 3489 → **3490** pass, 0 fail. `content:parity` clean (the one
pre-existing b2.01.l1 divergence).

---

## a2.17 amendments, 2026-08-13

Written by the `a2.17` build, which is **seq 12 and the second lesson of BATCH
2**. Recorded here rather than in a batch-2 ledger because it OVERTURNS a
reservation this file made, and because everything below binds the next adverb
lesson and `a2.05`.

Full report: `A2-17-BUILD-REPORT.md`.

### 0. §3's THEME DECISION WAS RIGHT ABOUT ADJECTIVES AND WRONG ABOUT ADVERBS

**§3 reserved `fr.a2.adjectifs-essentiels.081..120` for a2.17 and a2.17 did not
take it.** The reason §3 gave is good and its premise is wrong:

> "`adverbes` is still empty and `a2.17` should not create it either: an adverb
> built off a feminine adjective belongs beside the adjective it is built from"

§3 probed `adverbes` and **nobody probed `adverbes-essentiels`**:

```
theme adverbes                0 rows        does not exist, and still does not
theme adverbes-essentiels   325 rows        325 published, 120 of them adverbs
  fr.a1.adverbes-essentiels   191 rows      max .191
  fr.sons.adverbes-essentiels 134 rows      max .134
  fr.a2.adverbes-essentiels     0 rows      NEXT FREE = .001
```

It is **§3's own opening error one level down**. That section begins "The
question was asked the wrong way round" about `adjectifs` against
`adjectifs-essentiels`. It was asked the wrong way round twice, about the same
two words, eight days apart, and both times the suffixed theme was the live one.

**What settles it is the flashcard hub rather than tidiness.** `lentement`
already has a card in `adverbes-essentiels`. Authoring beside it in
`adjectifs-essentiels` would put a second card for one word in a second deck,
which is the shape `flashhub-coverage.test.ts` catches inside a theme and which
nothing catches across two.

```
seq  id      block                                    status
10   a2.03   fr.a2.adjectifs-essentiels.001 .. .040   TAKEN, 001-033 used
11   a2.16   fr.a2.adjectifs-essentiels.041 .. .080   TAKEN, 041-058 used
12   a2.17   fr.a2.adjectifs-essentiels.081 .. .120   RELEASED, never used
12   a2.17   fr.a2.adverbes-essentiels.001 .. .040    TAKEN, 001-024 used
     0 rows in fr.a2.adverbes-essentiels before, 24 after
```

**The next adverb lesson opens at `fr.a2.adverbes-essentiels.041`.** No theme was
created and `adverbes` is still dead; the manifest and the batch both refuse to
run if anybody revives it.

### 1. THE -ment RESPELLING CONVENTION, SETTLED FOR THE LEVEL

> **The suffix `-ment` is respelled `-MAHⁿ`: stressed, capitalised, closed with
> the superscript nasal, and hyphenated onto whatever the stem ends in. It is
> never `MAHN`.**

```
rows whose respell contains MAHN   499
rows whose respell contains MAHⁿ    79
of the MAHN rows, in adverbes-essentiels alone   109
```

Invariants §3 requires the superscript and 499 rows break it. **The 79 that do
not include every respelled SENTENCE in the sons themes.** a2.17 repaired the TEN
rows it displays and left the other 489: repairing a row you do not show is how a
build acquires a defect it cannot test.

### 2. CORRECTIONS §6's REPAIR SPLIT IS PER-ROW AND THE REAL SPLIT IS PER-NASAL

§6 splits the table by ROW — `RESPELL_REPAIRS_VISIBLE` against
`RESPELL_REPAIRS_INVISIBLE` — and that assumes one nasal per row. **A `-ment`
adverb on a nasal stem carries two in one string and the checker sees one:**

```
lentement    lahnt-MAHN    FLAGGED       the final MAHN ends a token
             lahnt-MAHⁿ    NOT flagged   and `lahnt` is still wrong
             lahⁿt-MAHⁿ    NOT flagged   and correct
```

Repairing exactly what the checker reports produces a value it calls clean and
which is still wrong, **on the same row**. Every repair in a2.17 carries a `half`
field and all three values are asserted through the real function.

**And a THIRD field was needed that neither §6 nor a2.11 has.** The first version
used one boolean for "half is not to" and the batch caught the conflation on
`bien`: `BYAN` is FLAGGED, so nothing is blind about it, and its minimal repair
`BYAⁿ` is still not the house `BYEHⁿ`. Two different reasons for one symptom.
`blind` and `house` are separate and mutually exclusive, and the guard asserts
`(half !== to) === (blind || house)`.

### 3. THE SAME WORD IS RESPELLED TWO WAYS IN ONE DATABASE, AND THE SENTENCE HALF IS RIGHT

```
lentement   fr.sons.adverbes-essentiels.001   lahnt-MAHN
            fr.sons.nasales.013               ... lahⁿt-MAHⁿ
doucement   fr.sons.adverbes-essentiels.003   doos-MAHN
            fr.sons.nasales.014               ... doos-MAHⁿ
bien        fr.sons.mots-essentiels.045       BYAN
            fr.sons.nasales.078               ... BYEHⁿ
```

All six are imported by a2.17 and the halves sit on one screen, so the headword
half was repaired to match. **EVERY REPAIRED VALUE IN THAT BUILD WAS READ OFF A
PUBLISHED ROW**, and the manifest, the batch and the test all re-check that the
row a value was read off still holds it. a2.16 §7's rule, in a second subject.

### 4. THE THREE-COLUMN CELL BUDGET, MEASURED. a2.16 ASKED FOR THIS BY NAME

a2.16 read a FIVE-column cell at about six characters and wrote "a2.17 should
know the number before it reaches for five columns". a2.17 used THREE and read
both of its tapTables on a Pixel 6:

```
souvent      7 chars    ONE LINE
doucement    9 chars    ONE LINE
lentement    9 chars    ONE LINE
sérieusement 12 chars   BROKE      sérieusemen|t
```

**A THREE-COLUMN CELL ON A PIXEL 6 HOLDS ELEVEN CHARACTERS.** The band now has
two points on the curve: six at five columns, eleven at three.

The wrap was ACCEPTED and NAMED rather than designed around — a2.16's precedent
with `nouvelles` — because that row is a2.03's own card in all three cells and
trading the lesson's best evidence for a line break is the wrong way round.
`CHAIN_CELL_WRAPS` holds it, the guard refuses a SECOND one, and it also refuses
to let the list name a cell the table has stopped printing.

### 5. THE trapDrill CONTRACT CAUGHT a2.17 TOO, AND THE SWEEP HAS A FIFTH FIELD

The sweep above landed the same day and `lesson-contract.test.ts` caught both of
a2.17's trapDrills in the stacked shape on the first full-suite run:

```
a2.17.l1 mission 11 (s11-unseen): trapDrill steps are "",
and A2 walks rule, cards, audio, drill
```

**a2.16 is the lesson a2.17 was modelled on**, so the model carried the defect
and the rule forbidding it landed between reading the model and running the
suite. v1 to v2.

**And the sweep's own "`size` comes off" is NOT in the contract.** v2 stepped both
traps and left `size: 'lg'` on; v3 took it off, found by reading this section
rather than by a gate. a2.17's batch now asserts all five fields plus the thing
the sweep names as the one step with a cost: **the audio step plays each card's
`fr`, so the `recordingId` has to point at a take that contains those lines.**
Worth adding to `lesson-contract.test.ts` for the whole band.

**And the open `TrapAudioStep` defect is now on two more screens.** a2.17's two
traps are the fourteenth and fifteenth A2 sections telling an English-medium
learner about a moving R that none of them teaches.

### 6. a2.16's MUTATION HARNESS HEADER IS WRONG ABOUT THE LINE ENDINGS

It states "THESE FILES ARE CRLF" and a2.17 wrote every multi-line anchor with
`\r\n` on that authority. **Both `scripts/data/*.ts` and `seed.json` are LF.**
Three rows reported SKIPPED until the endings were measured. The harness treating
a missing anchor as SKIPPED rather than as a pass is the only reason it was
visible instead of quietly turning three rows green.

### 7. TWO GUARD SHAPES THAT FIRE ON ENGLISH, WHICH IS HALF THE LEARNER SURFACE

A compound-tense shape built out of French morphology alone matches:

> "You did not stall ON A WORD YOU had not learned."

`on` is a French subject pronoun, `a` is a French auxiliary and `you` ends in a
u. **Invariants §8 makes a learner surface half English by design**, so any shape
built from French endings will read the English as French. The fix is a2.14 §6:
guard the THING (a participle from a list, behind a subject pronoun) rather than
the letters. Worth knowing before the participle lessons, which will all want a
shape like this.

And the house lookbehind `(?<![\p{L}\p{N}'’-])` **excludes an apostrophe**, so a
shape using it cannot see `j'ai`, `n'est`, `qu'il` or `c'est`.

### 8. `adverb` IS NOT JARGON, AND NEITHER IS `adjective`. MEASURED

Across all 53 shipped lessons' learner surfaces:

```
verb 2607 · noun 1405 · plural 740 · feminine 350 · masculine 203
adjective 147 · describing word 137 · adverb 3 · adverbs 2
```

a2.17's first JARGON list banned `adverb` and that was the build inventing a
rule: `adjective` is on 147 cards. **What the house does is prefer the plain
phrase** — a1.16 runs `describing word` 74 against `adjective` 12 — so the ban
was replaced by a RATIO check, which also lets `overview.titleEn` stay the unit's
own name. a2.17 runs 57 to 14.

### 9. A JAVASCRIPT `\b` UNDERCOUNTED A CORPUS MEASUREMENT BY FOUR

a2.17's pre-flight measured its placement evidence at 76 verb-then-adverb using a
JS regex with `\b`, which is ASCII-only: `répond`, `écoute` and `marché` sit next
to accented characters and four sentences were dropped. Postgres `~*` with `\y`
finds 80. **Invariants §0 in a third engine**, and the batch's own re-measurement
caught it on the first dry run.

**And a re-measurement must exclude the lesson's own rows.** After the first
apply the figure went 80 to 87, because seven of a2.17's authored sentences match
the pattern it is measuring. A lesson that counts itself prints a figure that
grows on every re-apply.

### 10. WHAT a2.05 INHERITS

**The compound-tense deferral.** a2.17 teaches placement for simple tenses only
and names it on a learner surface: *"In a past tense the short ones move, and
that rule arrives with the tense in a2.05."*

It is not hypothetical: **82 published sentences put a short adverb between the
auxiliary and the participle**, and one of them is in a2.17's own theme
(`fr.a1.adverbes-essentiels.055`, « Franchement, ce film m'a beaucoup déçu. »).
**a2.05 should close the loop by naming a2.17.**

### 11. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3489   pass 3489   fail 0        measured 2026-08-13, before a2.17
  tests 3550   pass 3550   fail 0        after a2.17 (+61)
a1-03-genre.test.ts   35 pass before, 35 pass after; 0 rows from this theme are
                      in the ending population at all
seed.json             version 35, 8976 items, 53 lessons, 75 units (before)
                      version 35, 9015 items, 54 lessons, 75 units (after,
                        NOT published; the merge left the version alone)
pnpm content:parity   ONE pre-existing divergence (b2.01.l1, database-only,
                        in_review). Nothing in the seed is at risk from a publish.
mutation harness      34 mutations, 0 caught by nothing, 0 skipped
```

**a2.16's report records seed.version as 33 and it is 35 now.** Two publishes
landed between the two builds. Measure it yourself.

---

## a2.04 amendments, 2026-08-14

Written by the `a2.04` build, which is **seq 13 and the third lesson of BATCH
2**. Recorded here rather than in a batch-2 ledger because it opens a block
inside a namespace this file has never described, and because two of the
findings below bind every remaining lesson in the band.

Full report: `A2-04-BUILD-REPORT.md`.

### 0. A CARRY IS AN ADDITION TO THE SEED'S ENDING POPULATION EVEN WHEN IT IS NOT AN ADDITION TO THE DATABASE'S

**The most expensive thing this build found, and every guard in this band has
the hole.**

`a2.04.l1` v1 was applied, merged and green on the batch, the merge and its own
test. The full suite then went red on `a1-22-pays.test.ts`:

```
-e     904 -> 909      -in   45 -> 47
-ant    18 ->  19      -al   11 -> 12
```

The batch's own check ran the REAL `endingPopulation` and reported the
population unchanged, **and it was right.** It was answering a different
question. In POSTGRES those rows already exist, so importing them adds nothing.
**a1.03 measures the population off THE SEED, and a CARRY is what puts a row
into the seed.** Fifteen of this lesson's thirty-seven imports are gendered
nouns; nine were absent from the seed and joined the population the moment the
merge carried them.

**No A2 lesson before this one imported a gendered noun**, which is why nobody
has met it: a verb, an adjective and an adverb never carry one. Every manifest
generator in this band REFUSES a gendered row outright for exactly that reason,
and this lesson's subject is nouns so it cannot.

**Two things every remaining lesson should copy:**

- **Measure the population off the SEED in the merge**, before and after, and
  die on any move. The batch's Postgres check is necessary and is not the same
  check.
- **`le médecin` IS A SINGLE WORD to `endingPopulation`.** It strips the
  article, so the brief's "these are multi-word rows (le Japon), so they are
  safe" is false for every gendered noun with an article. a2.04's brief says it
  in as many words and it is the largest thing that brief got wrong.

Resolved by WITHDRAWAL rather than by re-rendering a1.03, which is where this
build differs from a1.22: a1.22's whole subject was the gender of countries and
no country set left the counts alone, and a2.04 teaches no noun's gender at all.
The fifteen are DISPLAY rows — printed on cards out of the manifest, repaired in
Postgres, and not `itemIds` and not in any tranche. **a2.27, a2.28 and a2.29 can
deck any of those nouns freely; a2.04 owns none of them.**

v1 to v2, because Postgres held v1 with 63 itemIds and the seed would have held
v1 with 48.

### 1. A FOUR-COLUMN TABLE INSIDE A REFERENCE SHEET CLIPS ON A PIXEL 6

a2.03's device pass recorded that a FIVE-column table inside a sheet clips at the
right edge and scrolls horizontally per table. This build read four as safe on
that authority and guarded it at four. **Measured on a Pixel 6: four clips too.**

```
THE PLACE  THE WORD  EXAMPLE  TAU…      `TAUGHT IN` cut, `a1.2…` under it
WORD       + LE      + LA     + LE      `+ LES` cut, `aux` and `des` cut
```

It does scroll, and scrolling to reach the fourth column pushes the FIRST column
off the other side, so the two things a lookup exists to be read against each
other are never on screen together. Every host gate was green.

**THE SHEET BUDGET IS THREE COLUMNS.** v2 to v3: both tables are three columns
and each fourth column is a `teach` block underneath, which is the only shape a
sheet has that cannot clip. The guard in the batch, the merge and the test is
`cols.length <= 3`.

**This is the fourth width defect in the band** after the mission-row title
(§a2.14-13), the term-chip row (§a2.03-3) and the tapTable header and cells
(§a2.16-2, §a2.17-4). The curve so far, all measured on the same phone:

```
mission-row title        27 characters
term-chip row            37 characters
tapTable header          6 characters at five columns
tapTable cell            6 at five columns, 11 at three
reference-sheet table    3 columns
```

### 2. `hasPlainNasal`'s FIRST BRANCH HAS NO RESCUE PATH, AND THE HOUSE SPELLING IS THE ONE THAT SUFFERS

Corrections §6 and §14.1 describe the checker's blind spots. Invariants §3
describes its false positive on a real /n/. **Neither says that the two branches
are not equally defended.**

```
branch 1   /(?:AH|OH|EH|UH|EU|AI|OU)[NM](?![A-Za-zÀ-ÿ])/     NO RESCUE
branch 2   a lone vowel closed by N or M, then two rescues:
           a doubled nasal in the French, and a vowel after the m or n
```

So a real /m/ or /n/ after a HOUSE TWO-LETTER VOWEL cannot be rescued. `même` is
/mɛm/ with no nasal vowel anywhere:

```
MEHM   FLAGGED     branch 1, and there is no way back
mem    not flagged branch 2, rescued by the `ême` in the French
```

**SEVEN published rows spell it `MEHM` and the checker flags every one**,
including `fr.a2.expressions-argot.032` and two `quand même` rows. One spells it
`mem` and passes: `fr.sons.jours-et-mois.133`, « à la même date ».

**a2.14 §1 found the checker MISSING a bare-vowel spelling where it SEES the
two-letter one. This is the same asymmetry pointing the other way and it is
worse**, because a2.14's costs a repair and this one cannot be repaired at all in
the notation the house prefers. a2.04 takes the invariants §3 remedy for
`automne` — a form that avoids the shape, READ OFF a published row — repairs
nothing, and asserts the false positive AS A NEGATIVE in all three layers.

**Who this will bite next:** any lesson whose sentences hold `même`, `comme`,
`pomme`, `homme` or `femme` AND respell the vowel with the house two-letter form.
Measured: `femme` and `homme` are clean everywhere (`FAM`, `OM`), `pomme` and
`comme` are split, and `même` is broken on seven rows out of eight.

### 3. §9 GAINS A FIFTH HOLE: `items` HOLDS TWO DIFFERENT THINGS AND A KEY-BASED WALK CANNOT CLASSIFY IT

`LessonDrill.items` holds CORPUS IDS. `groupDrill.items` holds CARD OBJECTS with
`fr`, `ipa` and `note`. One is machine data and one is a learner surface, under
one key.

Every id in this lesson contains its own theme name, so the jargon check fired on
`fr.a2.prepositions-essentielles.133` thirty times over rather than on any copy.

**Filter by SHAPE rather than by key**: `/^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i`.
That also covers the section ids and trigger ids a2.14 §6 had to rename around,
so the rename workaround is no longer needed.

### 4. THE ID BLOCK, AND THE FIRST BAND LESSON TO OPEN ONE INSIDE A POPULATED NAMESPACE

```
seq  id      block                                          status
13   a2.04   fr.a2.prepositions-essentielles.129 .. .168    TAKEN, 129-154 used
     127 rows in the namespace before, 153 after
```

`fr.a2.prepositions-essentielles` already held **127 rows nobody in this band
authored** (`durant`, `au moment de`, `À cause de…`), max `.128`, one gap at
`.098`. Every other A2 block so far opened an empty namespace or one this band
owned.

**So a namespace-prefix filter here would pick up a hundred and twenty-seven
strangers on the first run.** §a2.16-1 records this as a trap that fires when a
SECOND lesson lands; here it fires immediately. The batch, the merge and the test
are all scoped to the BLOCK.

**The next lesson writing into `prepositions-essentielles` opens at
`fr.a2.prepositions-essentielles.169`**, and `a2.18` (Prepositions of Time,
seq 14) is the obvious candidate. `pays-et-nationalites` is untouched by this
build: `fr.a1.*` runs to `.320` and `fr.a2.*` holds 17 rows about immigration,
max `.017`.

### 5. §11's THEME TABLE IS THE SUFFIXED-NAME ERROR A THIRD TIME

§14.2 corrects `adjectifs` and `adverbes`. The same paragraph still lists
`pays`, `lieux` and `temps` as dead. They are, and the live themes are:

```
pays-et-nationalites        337 published    fr.a1.* 320, fr.a2.* 17
prepositions-essentielles   430 published    fr.a1.* 141, fr.a2.* 127, fr.b1.* 86, fr.b2.* 76
mots-essentiels             387 published    where a1.21 put its headwords
deplacements                320 published
transports-quotidiens       415 published
lieux · ville               0                genuinely dead
```

**Probe the suffixed or hyphenated name before believing an absence** now holds
for five theme names rather than two.

### 6. WHAT a2.18 INHERITS, AND IT IS NEXT

- **Both temporal senses of `en` and `dans`, untouched and confirmed.** a2.04
  names the deferral on a learner surface and guards it as a SHAPE with three
  must-fire and five must-not-fire lines. `TIME_SHAPE` in
  `data/prepositions-lieu-corpus.ts` is the guard and a2.18 can invert it.
- **`il y a` is still owned by no unit at any level.** Corrections §11 lists it
  as an absence; the preflight confirms no unit body names it. a2.04 does not
  touch it and a2.18's brief names it.
- **`sheet.a2.04.lieu` is a lookup a learner returns to**, and a sheetId resolves
  only inside the lesson that declares it, so a2.18 cannot link it and should not
  restate it either. What it holds that a2.18 would want is the fold table, and
  the fold is a1.21's rather than a2.04's.

### 7. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3550   pass 3550   fail 0        measured 2026-08-13, before a2.04
  tests 3601   pass 3601   fail 0        after a2.04 (+51)
a1-03-genre.test.ts   35 pass before, 35 pass after; ending population 1890 both
                      ways, AFTER the withdrawal in §0. v1 moved four figures.
seed.json             version 36, 9015 items, 54 lessons, 75 units (before)
                      version 36, 9047 items, 55 lessons, 75 units (after,
                        NOT published; the merge left the version alone)
pnpm content:parity   ONE pre-existing divergence (b2.01.l1, database-only,
                        in_review). Nothing in the seed is at risk from a publish.
mutation harness      26 mutations, 0 caught by nothing, 0 skipped, SIX of them
                        finding a weakness rather than confirming a strength
```

**a2.17's report records seed.version as 35 and it is 36 now.** A publish landed
between the two builds (`c49bf5f chore(publish): snapshot v36`). Measure it
yourself rather than carrying the figure forward.

### 8. AND THE BRIEFS' OWNERSHIP CLAIMS ARE WORSE THAN §7 SAYS

Corrections §7 tells you to read the brief files, then the shipped lessons'
`grammarIntroduced`, and only then the unit bodies. **Doing that in that order is
what found that three of a2.04's five grid rows were a1.22's and the fourth was
a1.21's.**

The unit-body search would have reported `chez` as named by a2.04 and a2.28 and
nothing else, which is true and would have hidden the whole problem. **A brief
can be wrong about what its own lesson OWNS, not only about what the corpus
holds, and no build in this band had found that before.** Every remaining brief
in batch 2 sits downstream of a shipped A1 lesson on the same subject; read that
lesson's `grammarIntroduced` and its handover before you plan an act.

---

## a2.18 amendments, 2026-08-14

Written by the `a2.18` build, which is **seq 14 and the fourth lesson of BATCH
2**. Recorded here rather than in a batch-2 ledger for the same reason a2.04's
is, and because three of the findings below bind every remaining lesson in the
band.

Full report: `A2-18-BUILD-REPORT.md`.

### 0. CORRECTIONS §3 HAS A REAL COUNTEREXAMPLE, AND IT IS A WHOLE PARADIGM

§3 is the most reliable single prediction in the corrections file — five builds,
five times, "the corpus is full of the forms you want and contains no two
sentences that differ by one thing". **Measured false here, and not by one row:**

```
fr.sons.jours-et-mois.080   dans une heure      DAHN ZÜN UHR
fr.sons.jours-et-mois.081   il y a une heure    EEL EE AH ÜN UHR
fr.sons.jours-et-mois.082   depuis une heure    duh-PWEE ZÜN UHR
fr.sons.jours-et-mois.083   pendant une heure   pahn-DAHN TÜN UHR
                            en une heure        NEVER WRITTEN
```

Four consecutive published phrase cards, four prepositions, ONE duration, all
respelled. a2.16 §5 recorded the first half-counterexample to §3; this is a
whole one, and the lesson's grid is four fifths import.

**What generalises: §3 holds for CONJUGATION and breaks for FUNCTION WORDS.**
Every build that met it was a verb lesson looking for one verb in six persons,
and nobody ever wrote those six side by side. A set of small words sharing one
complement is the shape a pronunciation theme naturally produces, because the
complement is the constant that makes the recording useful. **a2.19, a2.24 and
the pronoun block should probe `fr.sons.*` for a consecutive run before
budgeting to author a paradigm.**

### 1. THE NASAL CHECKER'S BLIND SPOT IS ABOUT THE NEXT CHARACTER, NOT THE COUNT

Corrections §6 splits the repair table by ROW. a2.17 §2 sharpened it to
per-NASAL and said a two-nasal row is the danger. **Both are approximations of
one rule:**

> **A nasal is invisible when a LETTER follows the n or m INSIDE the token. A
> hyphen, a space or the end of the string leaves it visible.**

```
lentement   lahnt-MAHN   first nasal INVISIBLE   a `t` follows the n
pendant     pahn-DAHN    BOTH nasals VISIBLE     a hyphen follows the first
```

`pendant` holds two nasals and the checker reports the row until BOTH are
repaired, so the minimal repair converges and a half repair still fails. **Two
nasals in one row is not the predictor and a build that files by count will
mis-file.** All five of this build's repairs are visible and minimal, which is a
first in this band, and it is asserted (`RESPELL_REPAIRS_INVISIBLE.length === 0`)
so the claim can fail.

### 2. a2.04's `même` FALSE POSITIVE IS ABOUT A SHAPE, NOT ABOUT FIVE NOUNS

a2.04 §2 measured that `hasPlainNasal`'s first branch has no rescue path and
listed the words it expected to bite next: `même`, `comme`, `pomme`, `homme`,
`femme`. **`problème` is not on that list and is the same thing:**

```
proh-BLEHM   FLAGGED     branch 1, no rescue
proh-BLEM    clean       branch 2, rescued by the `ème` in the French
```

Seven published rows split four to three. **The predictor is A REAL /m/ OR /n/
AFTER A TWO-LETTER HOUSE VOWEL — every word ending `-ème`, `-ême`, `-ome`,
`-ame`, `-aine` — and the list is a sample of it.** Same remedy as a2.04: a form
that avoids the shape, read off a published row, nothing repaired, and the false
positive asserted AS A NEGATIVE in all three layers.

### 3. A STEP LABEL COUNTS ITS OWN ARRAY, AND NOTHING ANYWHERE CHECKED THAT

**FOUND ON A PIXEL 6 AND BY NOTHING ELSE.** A stepped trapDrill's `cards` step
was labelled « Three cards » and held FOUR, because the card set grew during the
build and the label stayed behind. The pager draws **one dot per card directly
under the label**, so the screen read `THREE CARDS` over four dots.

`schema.ts`, `validateDensity` and `lesson-contract.test.ts` all pass it. This
is the **sixth** device-only defect in the band and the first that is not a
width: the others were the mission-row title, the term-chip row, the tapTable
header and cells, and a2.04's four-column sheet table.

**Every lesson in this band should check it**, and the `say` line with it,
because the `say` counts the cards too. Three lines in the batch:

```ts
const WORD = ['zero','one','two','three','four','five','six','seven','eight'];
const step = (t.steps ?? []).find((s) => s.kind === 'cards');
if (step?.label && !hasPhrase(step.label, WORD[(t.cards ?? []).length])) die(...);
```

### 4. AND THE COROLLARY THE SWEEP DOES NOT STATE: A TRAP CARD'S `fr` IS SPOKEN

The ledger's trapDrill sweep says the audio step plays each card's `fr`, so the
`recordingId` must name a take containing those lines. **The corollary is that
every card's `fr` must be sayable BY THAT VOICE.** A first draft put "I have
lived here for three years." in a card's `fr` to show the English source and the
batch caught it on the take-contents check. The English belongs in `tip`.

### 5. THE ID BLOCK, AND THE THEME DECISION THE BRIEF GOT WRONG

```
seq  id      block                                          status
14   a2.18   fr.a2.prepositions-essentielles.169 .. .208    TAKEN, 169-197 used
     153 rows in the namespace before, 182 after
```

**The brief said `temps-et-frequence` was "almost certainly your home" and it is
not.** That theme is frequency and the clock, which is a1.08's, a1.09's and
a1.12's. `fr.a2.prepositions-essentielles.001` is `durant` — a time preposition,
the first row anybody put in that half of the namespace — and eleven `depuis`
and ten `pendant` sentences live there already.

**The next lesson writing into `prepositions-essentielles` opens at `.209`.**
`.198..208` is this build's unused tail and `.155..168` is a2.04's; ids are the
SRS key and neither is backfilled.

### 6. A GUARD ADDED TO FIX a2.16 §3 HAD a2.16 §3 IN IT

The merge's grid check looped over the constant the content renders and let
three cell mutations through, which is a2.16 §3 exactly. Fixed by writing the
five rows out as literals — and the `il y a` spelling guard added in the SAME
SESSION to close a different hole compared `IL_Y_A_RESPELL` against content
built from `IL_Y_A_RESPELL`, and the next mutation run caught it.

**The rule is not "assert a literal once". It is: any guard whose expected value
comes from the same module as the content is guarding nothing, and that includes
guards you write while fixing this.**

### 7. THE MERGE CAN ONLY EVER CHECK A QUARTER OF THE DATABASE

One mutation the merge cannot catch and no amount of widening will fix:
authoring a duplicate of a row that is in POSTGRES and not in the SEED CUT. The
batch catches it; the merge sees only the cut. Worth knowing before somebody
spends an hour making the merge match the batch line for line — a2.16 §4 asks
for that and this is the boundary of it.

### 8. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3601   pass 3601   fail 0        measured 2026-08-14, before a2.18
  tests 3644   pass 3644   fail 0        after a2.18 (+43)
a1-03-genre.test.ts   35 pass before and after; ending population 1890 both ways,
                      measured off the SEED. 0 gendered rows authored OR imported.
npx tsc --noEmit      0 in ealch-v2 AND 0 in ealch-admin
seed.json             version 37, 9047 items, 55 lessons, 75 units (before)
                      version 37, 9081 items, 56 lessons, 75 units (after, NOT
                        published; the merge left the version alone)
pnpm content:parity   ONE pre-existing divergence (b2.01.l1, database-only)
mutation harness      37 mutations, 0 caught by nothing, 0 skipped, SIX finding a
                        weakness rather than confirming a strength
```

**Invariants §6 says `ealch-admin` carries five pre-existing tsc errors. It now
carries ZERO** — somebody cleared them between a2.04 and this build, so the
"do not add to them" allowance is gone and a new error is the only error.

### 9. WHAT a2.05 AND a2.19 INHERIT, AND ONE THING FOR WHOEVER OWNS THE CURRICULUM

- **a2.05** gets `il y a` for "ago" met and not produced. The deferral is on a
  learner surface in full and the merge asserts both halves of the sentence.
  a2.05 should name a2.18 back. One authored row holds a passé composé and is
  flagged for it: `fr.a2.prepositions-essentielles.174`.
- **a2.19** gets `dans` taught with the present, which is correct on its own.
  The verb-in-front version is a2.19's and this lesson names it.
- **THE canDo OVERCLAIMS BY A THIRD.** « Can say how long, how long ago and when
  with the right time preposition » promises production of "how long ago", which
  needs the passé composé at seq 16. KEEP seq 14 — the main reason being that
  `dans` pairs with a2.19 at seq 15, one lesson AFTER — and change the canDo
  instead. **APPLIED 2026-08-14 on Paul's instruction**; see §10.

### 10. THE canDo REWORD, AND THREE THINGS IT TURNED UP ABOUT THE SPINE

The a2.18 canDo now reads « Can say how long something has been going, how long
it took and when it starts, with the right time preposition ». Applied to
`author-full-curriculum-spine.ts`, to `content_units` and to `seed.json`.

**Three findings that bind anybody who touches a unit row:**

1. **`content:spine` DOES NOT OWN THE A2 BAND.** `update-spine.ts` covers 43
   older units and prints the other 33 as "left untouched", naming
   `author-full-curriculum-spine.ts` as their owner — a2.09 through a2.35, so
   every remaining lesson in this batch. **A build that ran `content:spine`,
   saw it exit clean and concluded its unit edit had landed would be wrong.**
2. **THE SPINE'S DRY RUN CANNOT CONFIRM A canDo CHANGE.** Its summary counts
   created / resequenced / retitled. With the reword staged it still printed
   `0 created · 0 resequenced · 0 retitled`, because the script writes the whole
   `body` in one update and the report does not diff that field. What confirms
   it is `spine-drift.test.ts:97`, which compares canDo SPINE against SEED.
3. **AND THAT MAKES THE SEED HALF NON-OPTIONAL.** The spine script writes
   Postgres only, so between the apply and a publish `spine-drift` is RED. This
   build wrote the one field into `seed.json` with a scoped script
   (`_a218_cando_seed.ts`) that proves nothing else in the file moved, rather
   than cutting an OTA snapshot to fix a curriculum field. A later publish
   regenerates the identical value from the same row.

**A fourth, smaller: `CANDO_OVERCLAIM.shipped` read `UNIT.canDo`.** The field
recording what was WRONG would have become a second copy of the replacement the
moment the replacement landed. Any constant whose job is to remember a previous
value has to be a literal.

---

## a2.19 amendments, 2026-08-14

Written by the `a2.19` build, which is **seq 15 and the fourth lesson of BATCH
2**. Recorded here rather than in a batch-2 ledger because it opens a block above
everything this file reserved, and because four of the findings below bind every
remaining lesson in the band.

Full report: `A2-19-BUILD-REPORT.md`.

### 0. THE BLOCK HELD, AND THE COUNT IS STILL THE ONLY REASON WE KNOW

`fr.a2.verbes` held exactly **374** rows when a2.19 claimed `.501`, which is this
file's own figure after a2.15, unchanged because a2.03, a2.16, a2.17, a2.04 and
a2.18 all wrote into other themes. **403** after, which is 374 plus its 29 and
nothing else. Zero rows were inside `.501..540`. The maximum is still useless.

```
seq  id      block                          status
15   a2.19   fr.a2.verbes.501 .. .540       TAKEN, 501-529 used, 530-540 free
     374 rows before, 403 after
```

`.487..500` is a2.10.l2's unused tail and was NOT backfilled: ids are the SRS key.

### 1. A UNIT ID IN THE POSSESSIVE IS INVISIBLE TO `hasPhrase`, AND EVERY LESSON IN THIS BAND WRITES ONE

**Corrections §9 gains a SIXTH hole, and it is in the guard every lesson from
seq 14 onward has to run.** a2.17 §3 measured that the house boundary excludes
the apostrophe and cannot see `j'ai`, and fixed the LEFT side. The RIGHT side has
the same hole:

```
« a2.04's card »      does NOT match `a2.04`
« a2.13's reframe »   does NOT match `a2.13`
```

The character after the id is an apostrophe and `(?![\p{L}\p{N}'’-])` counts it
as a word character. **Doctrine §B.7 tells every lesson from seq 14 onward to
credit the earlier instances BY UNIT ID, and the natural English for that is
possessive**, so a presence check built on `hasPhrase` reports the credit absent
while it is on the screen. a2.19 names five units and writes four of them
possessively; four of the five read as missing on its second dry run.

The fix is a `namesUnit()` that drops the apostrophe from BOTH boundaries, in the
batch, the merge and the test. **Copy it.** a2.18's own guard has the same shape
and happens to write its references without possessives.

### 2. THE HOUSE GOALS HEADING IS A ONE-WORD FUTURE, AND 36 LESSONS PRINT IT UNEXPLAINED

a2.14 §4 settled that « Ce que vous saurez faire » stays and recorded the rider
that the future form is *"permitted in the goals heading and nowhere else"*.
a2.19 is the lesson where that rider stops being administrative: **it is the
lesson that names the synthetic future and refuses to conjugate it**, and its
first dry run died on its own goals card.

Exempted BY THE EXACT STRING, asserted to appear EXACTLY ONCE, and asserted to be
in the goals `frSub` and nowhere else. **a2.05, a2.20, a2.21, a2.22 and a2.23 all
inherit a guard that will fire on that heading if they write one about tense.**

### 3. THE SIXTH WIDTH DEFECT: A REFERENCE SHEET'S OWN TITLE

Found on a Pixel 6, v1 to v2. **A sheet's title is drawn in the sheet's HEADER
BAR and ellipsises there**, while rendering in full on the card that opens it,
which is why nothing looks wrong anywhere else.

```
mission-row title        27 characters        a2.13, a2.14 §13
term-chip row            37 characters        a2.03 §3
tapTable header           6 at five columns   a2.16 §2
tapTable cell             6 at five, 11 at three   a2.16, a2.17 §4
reference-sheet table     3 columns           a2.04 §1
reference-sheet TITLE   ~37 characters        a2.19
reference-sheet CELL     12 at three columns  a2.19, and it is a CEILING RAISED
```

**a2.18's sheet title is 44 characters and is cut today.** Not repaired from
inside this build: repairing a neighbour's lesson from here is how a2.16 broke
a2.03. Whoever touches a2.18 next should shorten it.

**And the cell measurement went the other way.** a2.17 measured a three-column
tapTable cell at eleven; a three-column SHEET table cell takes **twelve**
(`n'allons pas` renders on one line). The two are different renderers and the
tapTable number does not bind a sheet.

### 4. THE BREAK CARD CLIPPED TWICE, AND THE SECOND TIME WAS TWO CORRECT FIELDS

Ledger §7 and a2.14 §9.1 again: the budget is LINES and a right-hand row carrying
an `ipa` AND a `respell` is four lines on its own, so **the French is the only
lever and 31 characters wraps**. a2.19 v1 had three things over at once (31-char
French, 27-char gloss, 33-word body).

**v2 FIXED ALL THREE AND IT STILL CLIPPED**, which is the part worth having:

> The break's `coach` and the scene's `closing` **both render on that screen**.
> Both held the reframe, so eleven words printed twice one paragraph apart.

Two fields owned by two different objects, each correct on its own, and no gate
in any layer compares them. Invariants §7 names chrome repeated on one screen as
one of the four classes only a device finds. v3 drops the coach. **The guard
worth copying is one line: no string on the break card may equal the scene's
`closing.text`.**

The measured budget, now a constant (`BREAK_BUDGET`):

```
heading            13 characters
reading-row fr     28 characters      31 wrapped
reading-row en     24 characters      27 pushed it over
body               26 words
coach              12 words, and prefer none if the scene closes on the reframe
```

### 5. CORRECTIONS §3 GETS ITS SECOND COUNTEREXAMPLE, IN THE OTHER POLARITY

a2.18 found the first (four published cards in one frame). a2.19 found that
**the corpus published the negative this lesson exists to teach THIRTEEN times
and respelled NONE of them**:

```
ne...pas round a conjugated aller with a naming form   13 published sentences
                                  carrying a respelling  0
eleven of the thirteen in ONE theme, five persons, eleven verbs, seven with an IPA
the affirmative:  721 published sentences, 10 with a respelling
```

**a2.13 §1 is the half that holds**: evidence is not cards, so the importable
pool was zero until this build supplied four respellings. The paradigm is still
authored, because those thirteen share no frame.

**The general shape for the past-tense arc, which is next:** a2.05, a2.20, a2.21
and a2.23 are all about a form the corpus is full of. Count the rows AND the
respellings before planning around either.

### 6. THE DICTÉE COSTS A NEGATIVE FIVE LETTERS

Corrections §4 in a shape the past-tense lessons will meet immediately. `ne` and
`pas` are five letters, so measured through the real `dicteeMode` across all
eight persons with any six-letter naming form:

```
the affirmative spells letter by letter in ALL EIGHT persons
the negative in THREE: tu, il and on
je is SEVENTEEN letters against a limit of sixteen, and stays over for every
   six-letter naming form in the language
```

**The person a learner most wants to produce is the one the dictée cannot test.**
a2.05's auxiliary plus participle will be longer still; budget for the frame
before the content.

### 7. FIVE OF THIRTY-SIX MUTATIONS FOUND A WEAKNESS

Above the two-in-eleven rate corrections §9 records. Four of the five are one
shape: **a claim stated in ONE constant rendered on THREE screens cannot be
guarded by looking for that constant** (a2.16 §3), and **a threshold is not a
location** — the reframe was reworded in one section and eight still carried it,
so a `>= 6` guard passed. Pin the load-bearing half as a LITERAL and pin the
places it must appear.

**And one bad mutation cost a diagnosis cycle** (a2.15 §9): its seed replacement
put the guarded phrase back inside a negative frame, so the test reported MISS
while the assertion was working correctly.

### 8. a2.19 IS A LEAF

No unit at any level declares it as a prerequisite. a2.05 (seq 16) rests on
a2.01 and a1.07. The batch reports it rather than dying on it. Four builds in
this band, four different answers; probe your own unit.

### 9. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3644   pass 3644   fail 0        measured 2026-08-14, before a2.19
  tests 3683   pass 3683   fail 0        after a2.19 (+39)
a1-03-genre.test.ts   ending population 1890 both ways, unchanged
seed.json             version 37, 9081 items, 56 lessons, 75 units (before)
                      version 37, 9115 items, 57 lessons, 75 units (after,
                        NOT published; the merge left the version alone)
pnpm content:parity   ONE pre-existing divergence (b2.01.l1, database-only,
                        in_review). Nothing in the seed is at risk.
mutation harness      36 mutations, 0 caught by nothing, 0 skipped, FIVE of them
                        finding a weakness rather than confirming a strength
```

**a2.04's report records seed.version as 37 and it is still 37.** a2.18 merged
without publishing and so did this build, so TWO lessons are now sitting in the
seed above the last published snapshot.

### 10. WHAT a2.05 INHERITS

- **The negation rule, verbatim**, exported as `REFRAME` from
  `data/futur-proche-corpus.ts`: *"Wrap the verb that changed, not the one
  carrying the meaning."* a2.05 extends it to the auxiliary and the two wordings
  must match. Its first three words are a1.18's first three, deliberately.
- **The compound past is conjugated NOWHERE in a2.19**, guarded as a shape that
  requires a French subject pronoun AND a participle from a list.
- **`il y a` from a2.18 and the futur proche from a2.19 both land in a2.05.**
  a2.18 hands it « il y a trois jours » to anchor a past; a2.19 hands it the
  placement rule and a learner who has already run it on two different first
  verbs.
- **a2.17's compound-tense deferral is still open** and a2.05 is still told to
  close it by naming a2.17.

---

## a2.05 amendments, 2026-08-14

Written by the `a2.05` build, which is **seq 16 and the fifth lesson of BATCH
2**. Recorded here rather than in a batch-2 ledger for the same reason a2.04's
and a2.18's are, and because the first section below is a LEVEL-WIDE DECISION
that doctrine §E left open and that `a2.20`, `a2.21` and `a2.23` all inherit.

Full report: `A2-05-BUILD-REPORT.md`.

### 0. DOCTRINE §E IS SETTLED: A PAST PARTICIPLE IS NOT A CORPUS ITEM

Doctrine §E lists it as undecided and says forty irregular participles are
"either forty new rows or zero". The a2.05 brief claims sixty on top, and
a2.20's brief warns that a hundred participle rows in one theme will collide on
`fr` because the flashcard hub treats two rows sharing an `fr` in one theme as
one card served twice.

**DECIDED: ZERO ON BOTH SIDES, and it is not a compromise. It is the rule a2.01
already set, applied to the form in front of us.** §5 of this file:

> **Is a conjugated form ever a corpus item?** **No. Only infinitives and full
> sentences.** A bare `parles` as a row would be served by the flashcard hub as
> a card with no subject, which is the one thing this level teaches you not to
> do.

A past participle is a conjugated form. `mangé` on a card is `parles` on a card:
a shape with nobody attached to it, unsayable alone, and colliding with the
infinitive it is built from, because `parler` and `parlé` are one sound.

**MEASURED 2026-08-14, and the corpus has been following the rule it never wrote
down:**

```
regular past participles as bare rows (parlé, mangé, fini, vendu, ...)     0
bare rows that LOOK like participles                                      24
```

and every one of the twenty-four is a word in its own right: `fermé` and
`ouvert` are adjectives, `été` is the season, `réussi` is "successful", `vu` is
the preposition in `vu que`. The only ones glossed AS participles are nine rows
in `fr.sons.voyelles` that exist to demonstrate a vowel and carry **no
respelling at all**, which is a2.13 §1 proving the point: a bare participle
reaches a card the learner cannot say.

**WHAT a2.20 INHERITS.** Its forty irregulars arrive as forty short SENTENCES in
one frame rather than forty headwords. The `fr` collision cannot happen, because
neither side authors a headword. What the two lessons did have to split is IDS,
and that is done:

```
seq  id      block                          status
16   a2.05   fr.a2.verbes.541 .. .590       TAKEN, 541-576 used, 577-590 free
17   a2.20   fr.a2.verbes.591 .. .650       RESERVED, sixty wide, empty
     403 rows before, 439 after
```

Sixty wide because a sentence set needs a frame, a negative and contrast rows on
top of the forty. a2.19's `.530..540` is its unused tail and is not backfilled.

**AND THE SIXTY RESTED ON A FIELD THAT DOES NOT EXIST.** The a2.05 brief says
"the sub says sixty". The database `sub` is « Le passé composé avec avoir » and
says nothing of the kind; the sixty comes from the `sub` the brief's own
identity block carried, which corrections §1 had already measured as a string
that exists nowhere. Corrections §1 is worth more than it looks: it does not
only swap two fields, it can delete a design question.

### 1. a2.19's MANIFEST REGEX CANNOT SEE AN ELIDED NEGATIVE, AND MINE WOULD NOT HAVE EITHER

a2.19's generator writes `(ne|n'')` in its measurement patterns and passes them
to Postgres as a **parameter** rather than embedding them in a single-quoted SQL
literal. `''` therefore survives as two apostrophes and the alternation can only
ever match the UN-ELIDED `ne`. Nothing looked wrong there, because all thirteen
of its rows are `ne vais pas`.

**This lesson's negative is elided in every person, `n'ai`, `n'a`, `n'ont`, so
the same shape measures ZERO.** Copied verbatim, it did. It was found on the
first manifest run by an assertion that the `il` row of the paradigm must still
be in the result set, and not by reading the regex.

```
(ne|n'')     as a parameter   13 rows   a2.19, all un-elided
(ne |n'|n’)  as a parameter   90 rows   a2.05
```

**Any lesson in this band whose subject elides `ne` must not copy that pattern.**
a2.21, a2.22 and a2.23 all do: `je ne me suis pas`, `il n'est pas`.

### 2. THE DICTÉE GETS FOUR LETTERS BACK, AND a2.19's PREDICTION IS FALSE

a2.19 §6 measured that `ne` and `pas` cost five letters, that only three of its
eight negatives fit `dicteeMode`'s sixteen-letter LETTERS window, and that `je`,
the person a learner most wants to produce, is one letter over. It closed with
*"a2.05's auxiliary plus participle will be longer still; budget for the frame
before the content."*

**Measured through the real function, false, and by four letters:**

```
Je ne vais pas partir.   17   WORD mode      a2.19, seq 15
Je n'ai pas mangé.       13   LETTERS        a2.05, seq 16

affirmative fits    8 of 8 persons (a2.19: 8 of 8)
negative fits       6 of 8 persons (a2.19: 3 of 8)
```

`ne` elides to `n'` in front of **every** form of avoir, and the elision takes a
letter and a space with it. Only `nous` and `vous` go over. **The person a2.19
could not test is the first one this lesson tests**, and the dictée runs the
whole `je` pair.

**And the elision costs something the pair check did not expect.** « J'ai
mangé. » elides je + ai; « Je n'ai pas mangé. » does not, because the n' is
between them. Every layer in this band checks the affirmative/negative pair by
stripping `ne`, `n'` and `pas` and comparing what is left, which a2.19 could do
in one line because its `ne` never touched the subject. Here it leaves « Je ai
mangé. » and the check dies on a correct lesson. **The first word changes SHAPE
as well as gaining two neighbours, and only in this person.** `reduceNegative()`
puts the elision back; a2.21 and a2.23 will need it.

### 3. THE HOUSE-COPY WALK DOES NOT READ `audio`, AND EVERY LESSON IN THIS BAND HAS THE HOLE

**FOUND BY THE SEED-WIDE `sons-alphabet.test.ts` AFTER ALL THREE OF THIS BUILD'S
LAYERS WERE GREEN**, which is corrections §9's shape in a new place: the jargon
walk did not read `intro`, and this walk does not read `audio`.

Every A2 batch, merge and test builds its house-copy string out of
`sections + sheets + terms + intro + overview + acts + drills` and stops there.
**`Lesson.audio.recorded[].desc` is authored prose that ships in the lesson
body**, and this build put the banned word `honestly` in one of its takes. The
em-dash, `honest`, AI-tell and U+203F checks all walked past it.

The audio briefs get the HOUSE-COPY rules and **not** the jargon or error-shape
ones: a studio brief is read by a recording engineer, so it may legitimately
quote the wrong forms the take contains and may use the precise words.

**And a second seed-wide contract nothing in this band mentions.**
`gloss.logic.test.ts` requires every glossary entry to UNDERLINE something in
its own passage. This build glossed « insister » and « le parapluie » where the
passage holds « insisté » and « mon parapluie », so both pointed at nothing.
Neither the batch, the merge nor the lesson's own test looks at that.

Both went to **v2** rather than being corrected under v1.

### 4. `kind` CANNOT SEE A BARE PARTICIPLE, AND THAT IS THE LEDGER DECISION'S OWN GUARD

Found by mutation 8. Every corpus file in this band builds its rows through a
helper that writes `kind: 'sentence'` unconditionally, so changing an authored
`fr` from « J'ai parlé. » to « parlé » produces a row that is a headword in
everything except the field the guard reads. The batch caught it only on the
version check and the merge missed it entirely.

**A row with no whitespace in its `fr` is a bare word whatever its `kind` says.**
One line, and it is the assertion the whole §0 decision rests on.

### 5. A PUBLISHED ROW THE NASAL CHECKER IS WRONG ABOUT, ON A ROW A LESSON DISPLAYS

a2.04 §2 measured that `hasPlainNasal`'s first branch has no rescue path;
a2.18 §2 sharpened the predictor to **a real /m/ or /n/ after a two-letter house
vowel** and listed `même`, `comme`, `pomme`, `homme`, `femme` and `problème`.

**`deuxième` is the seventh, and the first found on a row a lesson DISPLAYS
rather than on one it authored.**

```
fr.sons.alphabet.402  « J'ai mal entendu la deuxième lettre. »
ZHAY MAL ahⁿ-tahⁿ-DÜ LA deu-ZYEHM LEHTR        FLAGGED
```

/dø.zjɛm/ has no nasal vowel in it at all. Invariants §9: a false positive is
not a violation and the row is **not** repaired. The blanket "every displayed
respelling is clean" guard every lesson in this band runs would have cost this
lesson the card that closes a2.17's loop. Exempted BY NAME, its token named, and
the firing asserted in all three layers so a checker fix goes red.

**And this build asserts the false-positive path in the POSITIVE for the first
time in the band.** Six candidates from its own content do not fire and a
CONTROL (`le problème` / `luh proh-BLEHM`) does. Six silent negatives prove
nothing on their own the day the checker changes.

**a2.14 §1's doubled-nasal blind spot was predicted here and does not bite.**
This lesson authors « J'ai mangé une pomme. » and « Elle a mangé une pomme. »,
which is the exact word a2.14 named as the next victim, and both are measured
clear for the reason a2.14 gave itself: `hasPlainNasal`'s first branch catches
the two-letter house spellings before the French is ever consulted, and `mahⁿ`
is one of them. Asserted in both directions.

**39 nasals seen, 0 missed.** Both repair tables are empty of blind entries and
`RESPELL_REPAIRS_INVISIBLE.length === 0` is asserted, which is the second time
in the band after a2.18.

### 6. avoir IS NOT IN THE SEED CUT

Corrections §10 and a2.11's finding in its sharpest form. Six of this build's
twenty-three imports are absent from the seed at version 38, and one of them is
**`fr.sons.verbes-essentiels.002`, `avoir`**, the headword the whole
construction runs on, the first word of every sentence in the lesson, released
by act 1's tranche. Without the carry the deck opens on a blank card.

**And the row this build PREDICTED would be missing is not.**
`fr.sons.masterclass.021` is in the cut. The prediction was made from the shape
of the row rather than from a read, and the merge's surprise check caught it.
**Predict nothing about the cut; measure it.**

### 7. THE SECTION COUNT IS 26 AND THAT IS DELIBERATE

Doctrine §F gives 19 to 24 and the brief repeats it and asks for an escalation if
the lesson overruns. Ledger §a2.13-0 already measured that the 24-section shape
came from a2.01, was copied six times, was never checked against a subject, and
that there is no ceiling in `schema.ts`; a2.13 shipped 32 sections and 45
questions.

This lesson ships **26 sections, 7 acts, 36 questions** because it closes THREE
deferrals on top of its own Owns: a2.17's adverb placement, a2.18's "ago", and
the -er/-é contrast a2.19 sits immediately in front of. Folding those into 24
turns each of them into a single card. The overrun is declared as a constant,
asserted by all three layers, and reported rather than hidden.

**It did not need a second lesson**, and the reason is §0: once a participle is
not a corpus item, the "sixty participles" half of the subject disappears and
what is left is a construction with one rule and three endings.

### 8. THE BRIEF SAID FOUR DEPENDENTS AND THERE ARE THREE

```
a2.20  seq 17  Irregular Past Participles
a2.21  seq 18  The Passé Composé with Être
a2.31  seq 30  School and Studies      <- no document in this band names it
```

`a2.31`'s canDo is « Can talk about what they studied, which subjects and how it
went », which is a conversation in this tense fourteen seq positions later. It is
named on a learner surface here for that reason.

### 9. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3683   pass 3683   fail 0        measured 2026-08-14, before a2.05
  tests 3730   pass 3730   fail 0        after a2.05 (+47)
a1-03-genre.test.ts   ending population 1890 both ways, measured off the SEED.
                      0 gendered rows authored OR carried; ONE was wanted and
                      refused (fr.sons.jours-et-mois.036, gender=f).
npx tsc --noEmit      0 in ealch-v2 AND 0 in ealch-admin
seed.json             version 38, 9115 items, 57 lessons, 75 units (before)
                      version 38, 9157 items, 58 lessons, 75 units (after, NOT
                        published; the merge left the version alone)
pnpm content:parity   ONE pre-existing divergence (b2.01.l1, database-only,
                        in_review). Nothing in the seed is at risk.
mutation harness      38 mutations, 0 caught by nothing, 0 skipped, FOUR finding
                        a weakness rather than confirming a strength
```

**THREE lessons now sit in the seed above the last published snapshot**: a2.18,
a2.19 and a2.05.


### 11. THE DEVICE PASS, AND THE TWO THINGS ONLY A PIXEL 6 COULD FIND

Done 2026-08-14 on a Pixel 6 over USB against Metro 8082. **The dev build never
OTA-fetches (a2.14 §12), so every content change needs a force-stop and a cold
start before the phone shows it.** Both findings below were invisible to the
batch, the merge, the lesson's own test and the whole 3,729-test suite.

**1. THE INTRO NAMED A UNIT ID, AND a2.05 WAS THE ONLY LESSON IN 58 THAT DID.**

v1's intro read « ...avoir, which you have had since a1.07 ». `intro` is drawn
on the lesson COVER, which is the first screen, before any card has credited
anything, so a bare unit id there is a string with no referent.

```
lesson intros naming a unit id, measured across the seed:   1 of 58
```

Doctrine §B.7 tells every lesson from seq 14 onward to credit earlier instances
BY UNIT ID and this lesson does it eleven times in the body, which is where the
reference has context. Fifty-seven lessons already knew the cover is not that
place. Guarded in all three layers.

**2. A SCENE BUBBLE ENDING IN A SPACED EXCLAMATION MARK LOSES ITS TAIL.**

`fr.a2.verbes.572` was authored « Ah, ce soir alors ! » and the bubble rendered
« Ah, ce soir » while the gloss under it still read "Ah, tonight then!" — a
French line missing a word its own English translates. `ScenePlayer.tsx:276`
documents the class and records a prior instance on sons.07 mission 1
(« Ah, à Lyon. Très bien. » rendering without "bien").

**AND THE FIRST FIX DID NOT WORK, WHICH IS THE PART WORTH HAVING.** v3 widened
the gloss on the theory that the bubble hugs its widest child and squeezes a
French line longer than its English. On the phone the bubble DID get wider and
the French still read « Ah, ce soir ». The theory was also refuted by its own
first test: the `you` bubble in the same scene carries a 26-character French
against a 21-character gloss and renders in full.

Measured, one variable at a time:

```
« Ah, ce soir alors ! »     spaced exclamation   CLIPPED to « Ah, ce soir »
« Ah, ce soir alors. »      full stop            renders in full
« Et hier soir, alors ? »   spaced question      renders in full
```

**The trigger is the spaced exclamation mark.** This is app code and a content
build does not fix app code (the call the ledger already made for
`TrapAudioStep`); what a content build controls is not triggering it, and the
guard is one line: no scene bubble's `fr` may contain `" !"`. **Every lesson in
this band with a scene should check its own bubbles**, and a2.19's
« Ah, d'accord. À ce soir, alors. » is safe because it ends on a full stop.

**WHAT THE DEVICE CONFIRMED GOOD**, and each of these is a ceiling an earlier
build paid for:

```
all 26 mission-row titles render in full, including two at 25 characters
the endings tapTable          3 columns, 3 rows, no clipping
term-chip rows                three chips on one row (a2.03 §3's 37)
the pair screen               adjacent pairs, the gap visible, the imported
                              published card inline with its own respelling
the stepped trapDrill         label "FOUR CARDS" over exactly FOUR dots
                              (a2.18 §3), header reading 7.2 / 26
the reference sheet           title uncut at 32 (a2.19 §3's 37), all THREE
                              tables three-column with no horizontal scroll,
                              n'avons pas on one line, and ALL FOUR teach
                              cards rendering their bodies — which is the
                              check the brief asks for by name
the superscript ⁿ             renders correctly everywhere; no U+203F anywhere
```

### 10. WHAT a2.20 INHERITS, AND IT IS NEXT

- **The corpus split, settled: ZERO rows on both sides.** §0 above. Its forty
  irregulars are forty SENTENCES in one frame, and its block is
  `fr.a2.verbes.591..650`, reserved and empty.
- **The formation and the negative are taught and guarded here.** One recap, not
  a re-teach. `IRREGULAR_PAST` in `data/passe-compose-corpus.ts` is the
  thirty-five-name list this lesson refuses, and it is the list a2.20 owns.
- **Not one irregular participle appears anywhere in a2.05**, asserted by name in
  all three layers, with `fait`, `pris`, `mis`, `vu` and `dit` asserted
  individually. a2.20 is named forward on a learner surface and the fact that
  the forms exist is stated, so a learner who meets « j'ai fait » first does not
  conclude they were taught a simplification.
- **The reference sheet is the object a2.20, a2.21 and a2.23 all assume.**
  Cross-lesson sheets do not exist (ledger §0), so what they inherit is the rule:
  two words, the gap, the three endings, and no agreement after avoir.
- **`reduceNegative()` and the elision finding** (§2) are needed by any lesson
  whose negative elides, which is a2.21, a2.22 and a2.23.
- **Do not copy a2.19's manifest regex** (§1).

---

## a2.20 amendments, 2026-08-14

Written by the `a2.20` build, which is **seq 17 and the sixth lesson of BATCH
2**. Recorded here rather than in a batch-2 ledger for the same reason a2.04's,
a2.18's and a2.05's are.

Full report: `A2-20-BUILD-REPORT.md`.

### 0. THE SPLIT IS AGREED BY BOTH SIDES NOW, AND THAT WAS THE OPEN ITEM

a2.05 §0 settled doctrine §E — a past form is not a corpus item, zero rows on
both sides — and its own report §11 named the one thing it could not verify:
*"Whether a2.20's author agrees the split. a2.20 has not started ... it is one
author's decision written down rather than two authors agreeing."*

**It is two authors agreeing now.** a2.20 re-measured the decision over its own
thirty-three forms rather than over a2.05's list and reached the same answer.

```
                  block                        rows      headwords   bare forms
a2.05  seq 16     fr.a2.verbes.541 .. .590      36           0            0
a2.20  seq 17     fr.a2.verbes.591 .. .650      43           0            0
                  591..633 used, 634..650 the tail, not backfilled
fr.a2.verbes      439 before, 482 after         +43 exactly
```

Re-measured over a2.20's own list rather than a2.05's:

```
bare rows whose fr is one of the thirty-three                  28
of those, glossed IN SO MANY WORDS as a past participle          4
of those four, carrying a respelling                             0
```

a2.05 counted nine such rows and a2.20 counts four; both are right, and the
difference is the five minimal-pair copies whose glosses name no form. **The
figure the decision rests on is the third one and it is zero either way.**

**AND a2.05's OWN TEST WENT RED THE MOMENT a2.20 APPLIED.** Its assertion read
« a2.20's block is reserved and EMPTY », which is a reservation working rather
than failing. It has been AMENDED rather than deleted, to the durable claim a
lesson can actually make about a block it does not own:

- not one row of a2.05 is inside a2.20's block, and
- every row that IS inside it belongs to `a2.20.l1`'s own `itemIds`.

**A reservation assertion should be written that way from the start.** a2.19's
`.530..540` tail and a2.20's `.634..650` tail are the next two that will trip
somebody.

### 1. THE `sub` HAS NOW MISLED TWO CONSECUTIVE BUILDS WITH A NUMBER

a2.05 found "the sub says sixty" resting on a `sub` that exists nowhere in the
database. a2.20's brief says "forty" nine times and asks the test to assert
"all forty participles ... by name". **The database `sub` is « Participes passés
irréguliers » and carries no number. Neither does the `canDo`.**

The real figure is **thirty-three**: a2.05's `IRREGULAR_PAST` (35 names) minus
`refait` and `aperçu`, whose verbs exist as headwords at NO level and which
occur twice and zero times respectively in the whole published corpus. Both are
derived on a2.20's reference sheet from a form it does teach, and `refait` is
one of four the exam asks for cold, so nothing a2.05 handed forward is orphaned.

**Corrections §1 is worth more than it looks, for the second time.** It does not
only swap two fields: on two consecutive lessons it has deleted a design
question that would otherwise have shaped the whole build.

### 2. A SEVENTH WIDTH DEFECT, ON A FIELD NO DOCUMENT IN THIS BAND MEASURES

**FOUND ON A PIXEL 6, and no host gate could ever have found it.**

A `cardDeck`'s `hint` is drawn as ONE LINE under the card stack and ellipsises.
a2.20 shipped « Swipe. Six cards, and the first one is a sentence you have
already read. » and the phone drew « ...you have alread… », losing the sentence
the hint exists to make.

```
64 characters shown of a 71-character string
```

The budget is set at **HINT_MAX = 60**, below the measurement rather than at it,
and guarded in all three layers. The band's measured widths are now:

```
mission-row title       27      a2.13, corrected to a WIDTH by a2.14 §13
term-chip row           37      a2.03 §3
tapTable cell, 3-col    11      a2.17 §4
sheet table cell, 3-col 12      a2.19
sheet title             37      a2.19 §3
break card              lines   a2.19 §4
cardDeck hint           60      a2.20   <- new
```

**Nobody has bisected the real cut**; it is between 64 and 71.

### 3. A QUOTED FRENCH SENTENCE KEEPS ITS OWN FULL STOP

Also found on the phone. a2.20's eu listening asked

> J'ai bu un café. against J'ai eu peur.. What is the difference?

because both quoted lines already end in one. The fix is a `noStop()` helper and
a guard refusing **exactly two** consecutive dots on a learner surface — exactly
two, so a three-dot ellipsis like the scene's « Samedi, j'ai... j'ai prendu... »
is left alone.

**The guard immediately found a second instance** in a card that concatenated
two sentence-length English glosses. Any lesson that quotes a corpus row inside
a question has this shape, and every lesson in this band quotes corpus rows
inside questions.

### 4. THE BLIND NASAL IS EXERCISED FOR THE FIRST TIME SINCE a2.11

a2.05 measured 39 nasals seen and 0 missed and both repair tables empty.
a2.20's frame needs two the checker cannot see, both the same shape:

```
ZHAY kohⁿs-TRWEE uhⁿ MÜR    an s follows the nasal inside the token
ZHAY SÜ la ray-POHⁿSS       two S's follow it
seen 12, missed 2
```

Corrections §6 and a2.17 §14.1. Both are asserted **BY NAME and in both
directions**: the stored value is clean, and breaking the superscript produces a
value the checker STILL calls clean, so the day it improves the assertion goes
red instead of the list going quietly dead.

**And the repair a2.20 expected to make was already made.** Its brief warns that
"several prendre-family respellings are broken in the way Corrections §6
describes", and the house value already exists in every row the lesson displays:
`fr.sons.verbes-essentiels.012` holds `PRAHⁿDR`, `.030` holds `kohⁿ-PRAHⁿDR`,
`fr.a2.disciplines.051` holds `a-PRAHⁿDR`, `fr.a1.routines.107` holds
`kohⁿ-DWEER`. The build made ONE repair, `construire`, which is in no family the
brief names, and recorded seven broken copies it does not display.

### 5. §9's LIST OF HOLES IN THE GUARDS YOU WILL COPY GAINS FOUR MORE

All four found by mutation, all four after the lesson had already been applied,
and all four are the MERGE being thinner than the batch (a2.16 §4):

1. **The carry cannot refuse a row it never sees.** `manifest.filter(id in
   imports)` silently drops an import that is not in the manifest, and the
   manifest is the only layer that refuses a gendered row. Swapping `écrire` for
   its gendered copy made the batch throw and left the merge green. **Assert
   that every import IS in the manifest.**
2. **A pair guard satisfied by one thing.** Setting a trap's `wrong` equal to
   its `right` makes "both on one card" trivially true. A pair of one thing is
   not a pair.
3. **A scene guard that walks every string** passes on a repaired scene, because
   the English gloss still names the error. **Check the FRENCH the scene
   speaks.**
4. **`namesUnit(text, UNIT_CONST)` is a2.18 §6 in a new place.** Renaming the
   constant renames both sides and the guard stays green while the credit
   vanishes from every screen. **Unit ids are literals in a guard.**

### 6. AND a2.14 §8 APPLIES TO THE MUTATION HARNESS, NOT ONLY TO THE CONTENT

Two of a2.20's thirty-eight rows reported a layer BLIND while the layer was
correct, both because the seed half of the mutation did not remove the claim:
one changed a question's capitalisation instead of dropping the form, and one
moved a `q` and left the `accept` list, which is the field the guard reads.

**A mutation that does not remove the claim proves nothing, and it looks exactly
like a hole.** Budget the same three or four anchors in the harness that you
budget in the content, and give the harness an `alsoSeed`/`thirdSeed` path.

Final: **38 mutations, 0 caught by nothing, 0 skipped, FIVE finding a weakness.**

### 7. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3730   pass 3730   fail 0        measured 2026-08-14, before a2.20
  tests 3779   pass 3779   fail 0        after a2.20 (+49)
a1-03-genre.test.ts   ending population 1890 both ways, measured off the SEED.
                      0 gendered rows authored OR carried; FOUR were wanted and
                      refused (le reçu twice, and the gendered copies of écrire
                      and lire).
npx tsc --noEmit      0 in ealch-v2 AND 0 in ealch-admin
seed.json             version 40, 9157 items, 58 lessons, 75 units (before)
                      version 40, 9215 items, 59 lessons, 75 units (after, NOT
                        published; the merge left the version alone)
                      +43 authored, +15 CARRIED through the cut
pnpm content:parity   ONE pre-existing divergence (b2.01.l1, database-only,
                        in_review). Nothing in the seed is at risk.
```

**FOUR lessons now sit in the seed above the last published snapshot**: a2.18,
a2.19, a2.05 and a2.20.

**And the cut was mispredicted by four.** a2.20's first `ABSENT_FROM_SEED` list
held eleven and the merge's surprise check found FIFTEEN; all four extras are
the already-a-word rows, in themes nobody thinks of as verb themes
(`examens-et-diplomes`, `courses`, `meteo`, `adjectifs-essentiels`), which is
exactly where a cut is thinnest. a2.05 §6 says *predict nothing about the cut,
measure it*, and this is that in the other direction.

### 8. WHAT a2.21 INHERITS, AND IT IS NEXT

- **The forms are done and the choice is untouched.** `venu`, `né` and `mort`
  are taught as FORMS on `s14-firstword`, which names a2.21 and says in one line
  that which verbs take être, and what happens to the form afterwards, is that
  lesson's. No production surface in a2.20 asks a learner to pick an auxiliary,
  and a guard refuses an instruction to choose in English or French, including
  the three mnemonics people teach the rule with.
- **The background is clean for agreement.** No authored sentence in a2.20
  agrees a past form with anything, and the two authored être rows are masculine
  singular deliberately. One trap card had to be reworded from « Elle est due. »
  to « la somme due » because the agreement guard refused it, correctly.
- **And the reason agreement will be HARD is stated in a2.20 rather than left to
  a2.21**: `pris` and `prise` are one sound, and so are the other nine pairs in
  `NO_EAR_QUESTION`. A learner will never hear the change a2.21 teaches.
- **`reduceNegative()` and a2.05 §2's elision finding** are still needed by any
  lesson whose negative elides, which is a2.21, a2.22 and a2.23.
- **Do not copy a2.19's manifest regex** (a2.05 §1).
- **The thirty-three, by group, are in `data/participes-corpus.ts`'s `FORMS`**,
  each with its naming form, its import id and the row that teaches it. a2.21
  needs `venu`, `né` and `mort` from it and nothing else.

---

## a2.21 amendments, 2026-08-15

Written by the `a2.21` build, which is **seq 18 and the seventh lesson of BATCH
2**. Recorded here rather than in a batch-2 ledger for the same reason a2.04's,
a2.18's, a2.05's and a2.20's are.

Full report: `A2-21-BUILD-REPORT.md`.

### 0. THE ID BLOCK, CLAIMED HERE BECAUSE NO BATCH-2 LEDGER EXISTS

```
seq  id      block                          status
16   a2.05   fr.a2.verbes.541 .. .590       36 rows, 541-576 used
17   a2.20   fr.a2.verbes.591 .. .650       43 rows, 591-633 used
18   a2.21   fr.a2.verbes.651 .. .720       46 rows, 651-696 used
     482 rows before, 528 after, exactly +46
```

Seventy wide because the paradigm needed four cells of one verb, six persons, two
contrast pairs, two transitive pairs, four cells of the audible one, four
negatives, a scene, a conversation and a generalisation. Forty-six used;
`.697..720` is the tail and is not backfilled.

**a2.22 and a2.23 should take `.721..790` and `.791..860`.** a2.23 is a pronominal
past and will need at least as many rows as this one.

### 1. CORRECTIONS §11's "NASALS THE CHECKER CANNOT SEE" IS WRONG ON FOUR ROWS

§11 lists eleven rows under *"rows carrying a nasal the checker cannot see, which
the remaining lessons will import and must repair by name"*, and four of them are
this lesson's. Measured through the real `hasPlainNasalFor`:

```
monter     mohn-TAY          FLAGGED
tomber     tohn-BAY          FLAGGED
descendre  day-SAHN-druh     FLAGGED
entrer     ahn-TRAY          FLAGGED
rentrer    rahn-TRAY         FLAGGED
```

**ALL FIVE ARE VISIBLE.** The blind shape a2.11 measured is a nasal followed by a
consonant INSIDE a token (`PRAHNDR`); in `mohn-TAY` the n ends the token `mohn`
because a hyphen follows it, so the checker sees it perfectly.

**A build that trusted the list would have shipped an empty INVISIBLE table
believing it had found four**, which is §6's failure mode pointing the other way:
§6 warns that repairing what the checker reports can leave a wrong value, and this
is a document telling an author that a value the checker DOES report is invisible.

**And three of the six the brief names were already repaired**, which is a2.20 §4
for the second build running: `entrer` holds `ahⁿ-TRAY`, `rentrer` holds
`rahⁿ-TRAY`, and a2.11 repaired `descendre` to `day-SAHⁿDR`. Two repairs, not six.

### 2. THE FALSE POSITIVE IS REAL AND `nous sommes` IS A NEW ONE

Invariants §3 records `jaune`, `automne` and `la saison`. Corrections §6 says the
shape is real but rarer and asks builds to report the absence. **This build met
it.**

```
Nous sommes partis tôt.   noo sohm  pahr-TEE TOH   FLAGGED
                          noo som   pahr-TEE TOH   clean
                          noo somm  pahr-TEE TOH   clean, and the house shape
```

`sommes` is /sɔm/ with a real m and **no nasal vowel in it at all**, so a
superscript there teaches a sound the word does not have. The repair is the one
invariants §3 prescribes for `automne`: DOUBLE THE CONSONANT. Four rows carry it,
and every lesson from here to the end of A2 uses `nous sommes`.

**And the single-m form is clean too**, so the trigger is not simply "a vowel then
an m at the end of a token". `som` passes and `sohm` does not, and nobody has
chased why.

### 3. EVERY RESPELLING GUARD IN THIS BAND IS PHRASED THE WRONG WAY ROUND

Found by mutation, and it is the most transferable thing in this build.

Every layer of every lesson in this band asserts *"the respelling must not be
FLAGGED"*. Putting a superscript on `sommes` produces `sohⁿm`, which the checker
calls **clean** — because its complaint about that word was a false positive in
the first place. **It walks through all of them.** Only the lesson's own test,
which pins the string, caught it.

**A false-positive entry needs the ROW checked against the FIXED VALUE, not
against the checker's opinion of it.** Any lesson carrying a `FALSE_POSITIVES`
table has this hole today.

### 4. §9's LIST OF HOLES IN THE GUARDS YOU WILL COPY GAINS FIVE MORE

All five found by mutation, and four of the five are a guard reading a constant
the CONTENT is built from, which is a2.18 §6 spreading rather than being fixed.

1. **THE FOUR-CELL GUARD READ THE WHOLE SECTION.** A `check.why` saying « allés
   and allées are one sound » satisfied the assertion that « allées » is ON A
   CARD, and an option reading « Nothing at all » satisfied the assertion that the
   screen calls them one sound. **One hole with three faces**: dropping the form
   from the card and removing the card from the group both walked through it.
   **Read `groups[].items[].fr`, and read `say` plus `check.why` for a claim,
   never `strings(section)`.** This is a2.20 §5.3 in a new place and it is now the
   third time the same shape has been found.
2. **`AGREEMENT_RULE` COMPARED AGAINST ITSELF.** It is the string a2.23 is told to
   inherit, so it is a cross-lesson contract and belongs on the same footing as
   a2.01's reframe: a LITERAL in all three layers.
3. **THE MERGE'S SCENE GUARD READ `SCENE_ERROR`**, the constant the scene is built
   from. Repairing the French repaired both sides. The batch caught it only
   because its copy was already a literal.
4. **NEITHER LAYER CHECKED THE ROLE PLAY'S ALTERNATIVES.** The only thing that
   does is the seed-wide `scenario.logic.test.ts`, which runs AFTER the merge,
   which is exactly how a2.03 shipped three one-alt turns with every gate green.
   Two lines in each layer.
5. **THE MERGE NEVER CHECKED THE AUDIBLE PAIR'S RESPELLINGS**, which is
   lesson-specific but generalises: a merge that checks a claim is on a screen
   without checking the notation that makes it true is half a guard.

**AND ONE CONTENT DRIFT OF THE SAME SHAPE.** The bookend deck's `hint` hardcoded
`a2.01` while its own cards used `${ER_UNIT}`, so renaming the constant left the
hint still crediting a2.01 and satisfied the guard. **A unit id on a learner
surface comes from the constant, everywhere, including the places that feel too
small to matter.**

### 5. THE MUTATION HARNESS AND CRLF

**Twelve of forty-seven rows reported SKIPPED on the first run and every one of
the anchors was correct.** Every source file in this repo is CRLF and every anchor
in a harness is written with LF, so any multi-line anchor misses.

A skipped row looks exactly like a stale harness, which is the failure mode the
harness header's own point 2 exists to prevent. `pick()` tries the LF form and
then the CRLF form. **Copy it.**

### 6. THE SEED CUT HAS NOW BEEN MISPREDICTED THREE BUILDS RUNNING

```
a2.05   predicted right, and its report says predict nothing
a2.20   predicted 11, measured 15
a2.21   predicted 9,  measured 6
```

Both directions, both times. **The surprise check is the deliverable, not a better
prediction**, and it should stay in every merge in this band.

### 7. a2.11's descendre LOOP CANNOT BE CLOSED BY BACK-REFERENCE

`a2.11.l1` names `descendre` eleven times and names neither auxiliary once, so
there is nothing on that lesson's surfaces to answer. Corrections §7 had already
softened the finding; this measures it.

**Closed FORWARD instead**, which is assertable: `s16-object` names `descendre`,
names `a2.11` by unit id, and states the split. And a2.21's test asserts the
NEGATIVE as well, so if a2.11 ever opens the loop properly this lesson fails and
it gets closed both ways.

**The general point: a brief that says "close the loop by back-reference" is
assuming the earlier lesson opened one on a LEARNER SURFACE. Read the shipped body
before believing it.**

### 8. A REFRAME QUOTED FROM A NEIGHBOUR MUST BE READ OFF THE SHIPPED LESSON

This build's `A215_REFRAME` was **invented**: it quoted « One verb, and everything
in front of it comes along. » and a2.15 shipped « Cover the front of the verb.
Build what is left. »

**Neither the batch nor the merge could see it**, because both compared the
constant to itself. The lesson's own test caught it on its first run, because that
file reads `seed.json` and holds the literal by hand.

Four quotes were literals from the start (a2.01, a2.03, a2.05, a2.19) and two were
not (a2.15, a2.20). **Every quoted line needs a literal on the guard side**, and
the cheapest way to get one is to assert the neighbour's own `reframe` off the
seed, which this lesson's test now does for all six.

### 9. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3779   pass 3779   fail 0        measured 2026-08-14, before a2.21
  tests 3860   pass 3860   fail 0        after a2.21 (+81)
a1-03-genre.test.ts   ending population 1890 both ways, measured off the SEED.
                      0 gendered rows authored OR carried; TWO were wanted and
                      refused (la nature morte, and the gendered copy of tomber).
npx tsc --noEmit      0 in ealch-v2 AND 0 in ealch-admin
seed.json             version 41, 9215 items, 59 lessons, 75 units (before)
                      version 41, 9267 items, 60 lessons, 75 units (after, NOT
                        published; the merge left the version alone)
                      +46 authored, +6 CARRIED through the cut
mutation harness      47 mutations, 0 caught by nothing, 0 skipped, SEVEN finding
                        a weakness rather than confirming a strength
```

**ONE lesson now sits in the seed above the last published snapshot: a2.21.**
v41 carried a2.20 and everything before it.

### 10. WHAT a2.22 AND a2.23 INHERIT, AND a2.22 IS NEXT

- **The agreement rule is worded once and exported** as `AGREEMENT_RULE`. a2.23
  should quote it rather than reword it, and the one place it does NOT run there,
  a reflexive with a direct object after it, is that lesson's to state.
- **No reflexive appears anywhere in a2.21.** Eleven verbs and fifteen markers are
  refused by four layers, and no authored row contains one. The background is
  clean for a2.22 to introduce them and for a2.23 to agree them.
- **The transitive split is NAMED and NOT TAUGHT**, so a2.23 inherits an open
  question rather than a half-taught rule. The measurement is in `TRANSITIVE` and
  the manifest re-runs it.
- **`reduceNegative()` is here and it is plainer than a2.05's**, because `ne`
  elides in only three of the six persons and never touches the subject.
- **The one audible feminine is `mourir` and nothing else**, so a2.23's reflexive
  agreement is inaudible everywhere without exception.
- **The fifteen, with their four cells each, are in `ETRE_VERBS`** in
  `data/passe-compose-etre-corpus.ts`, and `NO_EAR_QUESTION` holds the 86 pairs no
  ear question may separate.

---

## a2.22 amendments, 2026-08-15

Written by the `a2.22` build, which is **seq 19 and the eighth lesson of BATCH
2**. Recorded here rather than in a batch-2 ledger for the same reason a2.04's,
a2.18's, a2.05's, a2.20's and a2.21's are.

Full report: `A2-22-BUILD-REPORT.md`.

### 0. THE ID BLOCK HELD EXACTLY AS a2.21 RESERVED IT

```
seq  id      block                          status
19   a2.22   fr.a2.verbes.721 .. .790       31 rows, 721-751 used
     528 rows before, 559 after, exactly +31
```

`.752..790` is the tail and is not backfilled. **a2.23 should take
`.791..860`**, as a2.21 §0 reserved. a2.21's block still holds exactly 46.

### 1. THE "ACCEPTS THE ANSWER IT DISPLAYS" GUARD IS A TAUTOLOGY, IN EVERY LESSON

The most transferable finding in this build. Every lesson from a2.01 to a2.21
runs some version of

```ts
for (const a of q.accept) ok(matchesAccept(a, q.accept));
```

which asks whether the accept list accepts **itself**. It cannot fail for any
value at all. Mutating an accept entry to a completely different sentence walked
through the batch AND the merge, and was caught only because the mutated lesson
then tripped the version check.

**The check with content is that a multi-word answer is a sentence the lesson
OWNS** — an authored row, or a form it explicitly teaches. Invariants §4's
sentence *"every free-text question must accept the answer it displays"* is
right; the implementation the band copied does not implement it.

### 2. `cards` IS THE ENTIRE LEARNER SURFACE AND MUST NEVER BE A MACHINE KEY

On a `cardDeck`, a `flashcards` section, a `reviewDeck` and a `trapDrill`,
`cards` holds everything the learner reads. This build's first draft listed it as
a machine key and hid every card body from the jargon walk, the compound-tense
guard and the house-copy rules at once.

**It was found by the reframe count refusing to match its own constant**, which
is exactly what invariants §5 says an explicit constant is for, and is the
strongest argument yet for keeping that assertion.

### 3. A COUNT TAKEN OVER A DEDUPED SET UNDER-REPORTS

The reviewDeck card back is the reframe and nothing else, and so is
`Lesson.reframe`. `[...new Set(surface)]` collapses the two, and the count came
out at seven for eight authored occurrences. **Any lesson counting a short quoted
line over a deduped walk has this today.** Counting needs the raw array;
membership tests can keep the Set.

### 4. THE DOUBLE-STOP GUARD IS HALF THE SHAPE, AND THE BAND SHOULD WIDEN IT

a2.20 found « peur.. » on a Pixel 6 and every guard since checks for two
consecutive DOTS. **That is half of it.** A corpus row quoted mid-sentence keeps
its own full stop and the sentence continues with whatever came next, so
`s06-doubled` shipped

> « ... tard le dimanche., beside a verb that carries no little word at all. »

past the batch, the merge, the lesson test and the density validator, and it was
found on a device. The general defect is **a sentence-final stop with punctuation
after it**:

```ts
/(?<!\.)\.[.,;:](?!\.)/u        // ellipsis still passes
```

**a2.05, a2.20 and a2.21 all quote corpus rows inside sentences and should be
swept with this before the next build.**

### 5. `unit.themes` IS DECLARED, VALIDATED AND READ BY NOTHING

`a2.22` is the only unit in batch 2 with a `themes` array and it names
`routine`, which holds **0** rows. `routines` holds 339. The declaration is
inert: `schema.ts:1697` declares it, `schema.ts:3626` validates it, and no
component reads it. Invariants §1's authored-valid-invisible shape at the UNIT
level.

Not repaired here, because `spine-drift.test.ts:105` pins spine and seed together
and it is a spine change. The one-line fix is in `THEME_DEFECT` in
`data/pronominaux-corpus.ts`, and the lesson's test pins the current state so a
fix goes red and the fixer reads the note.

### 6. THE NEGATION LINE IS ONE STRING ACROSS FOUR LESSONS, AND IT PRODUCES THE TRAP HERE

a1.18, a2.19, a2.05 and a2.21 agree completely. Applied literally to a reflexive
it puts `ne` in front of the verb, which is `je me ne lave pas` — the error. The
extension a2.22 shipped, and a2.23 inherits:

> « Both words changed for the subject, so both go inside the wrap. »

**AND a2.21 SHIPS A DOUBLED « That is That is » ON `s04-recap`**, in v3, on a
learner surface. Reported, not fixed: another lesson's body.

### 7. THE CORPUS STORES REFLEXIVES FRAMED WITH `se`. SETTLED.

Doctrine §E's open question, measured: eight of eight exist as `se lever`,
`se coucher`, `se laver`, `s'habiller`, `se réveiller`, `se doucher`,
`se reposer`, `se dépêcher`; two of eight exist bare. **The manifest re-measures
both counts on every regeneration and refuses if the bare set overtakes the
framed one.** a2.23 inherits this without reopening it.

### 8. `fold()` DECIDES THE FRAME VERB, AND IT KILLED THE BRIEF'S

`fold('je me lève') === fold('je me leve')`. No typed surface can test the
accent, so `se lever` cannot carry a lesson whose whole claim is that the learner
PRODUCES the form. `se laver` has no stem change and all six cells are distinct.
**A brief naming a frame verb should be checked against `fold` before anything
else is planned.**

### 9. BASELINE

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3860   pass 3860   fail 0        measured 2026-08-15, before a2.22
  tests 3906   pass 3906   fail 0        after a2.22 (+46)
a1-03-genre.test.ts   ending population 1890 both ways, measured off the SEED.
                      0 gendered rows authored OR carried; two were REFUSED
                      (both copies of « le souvenir »).
npx tsc --noEmit      0 in ealch-v2 AND 0 in ealch-admin
seed.json             version 42, 9267 items, 60 lessons, 75 units (before)
                      version 42, 9301 items, 61 lessons, 75 units (after, NOT
                        published; the merge left the version alone)
                      +31 authored, +3 CARRIED through the cut (predicted 3)
mutation harness      35 mutations, 0 caught by nothing, 0 skipped, SEVEN
                        finding a weakness rather than confirming a strength
```

**TWO lessons now sit in the seed above the last published snapshot: a2.22 at
v2.** v42 carried a2.21 and everything before it.

### 10. WHAT a2.23 INHERITS, AND IT IS NEXT

- **The negation pair**, both literals, five lessons deep. §6.
- **`PRESENT_NO_AGREEMENT`**, worded so it can be quoted rather than re-derived.
  It is the clean background a2.23 changes.
- **The reciprocal is LEFT OUT**, named once receptively on `s13-later`. Its
  brief already says to follow whatever a2.22 did.
- **Not one compound form anywhere in a2.22**, guarded on every surface rather
  than only production, so a2.23's whole subject is untouched.
- **`se laver` is the frame verb**, and `fold` is why — which matters more there,
  since its agreement is orthographic and typed.
- **The `les mains` case is named receptively and not taught**, so a2.23 inherits
  an open question rather than a half-taught rule.
- **`ne` does not elide in the present**, and it will again in the compound past:
  « il ne s'est pas lavé » elides the PRONOUN rather than the `ne`.
- **Widen the double-stop guard (§4) before authoring, not after.**
