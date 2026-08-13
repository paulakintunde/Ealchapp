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
