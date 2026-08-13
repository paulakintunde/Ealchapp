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
