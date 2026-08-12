# Scope: `a2.10.l2` — the -IR verbs that are not regular

Closes the hole reported in `A2-10-BUILD-REPORT.md` §9 and `A2-BATCH-1-LEDGER.md` §5:
eight -IR verbs owned by no unit at any level.

**This is a scope, not a build.** Nothing here is applied. Everything numbered was
measured against Postgres on 2026-08-11.

---

## 1. The decision: a second lesson in a2.10, not a new unit

I first scoped this as a new unit (`a2.36`, the next free id) inserted at `seq 5`.
That was the wrong answer. **It should be `a2.10.l2`.**

### Why the new unit lost

A new unit means a `seq` insert, and a `seq` insert is the expensive kind of edit
here even though ids never move:

- **16 units re-seq'd** (a2.02 and everything after it shift by one).
- **~16 briefs carry a stale `seq`**, plus both trail tables in
  `A2-BUILD-DOCTRINE.md`. The doctrine's own opening line is *"A2 lesson N means
  seq N on the A2 trail"*, so a stale number there is not cosmetic.
- **It would want `author-full-curriculum-spine.ts`, and that script is dangerous.**
  Run dry today it reports **`0 created · 0 resequenced · 74 retitled`**. Of 75
  units it would rewrite the title and sub of 74, reverting a2.10's title from
  `Regular -IR Verbs` back to `Les verbes en -IR` and its sub to a string carrying
  an em dash. It would take the three shipped A2 lessons' tests red on the spot,
  which is the guard working, but the script cannot be used to add a unit until
  somebody reconciles it. That is its own piece of work and it is not this one.

### Why the second lesson wins, and it is a shipped pattern

`a1.30` already ships two lessons and is the only unit that does:

```
UNIT a1.30  seq 30  "A1 Review" / "Bilan A1"
  a1.30.l1  seq 1  tag "A1 · LEÇON 30"  "Bilan A1 : leçon par leçon"   5 sections
  a1.30.l2  seq 2  tag "A1 · EXAMEN"    "L'examen A1"                  4 sections
```

Four things follow from that, all read out of the code rather than assumed:

1. **`lessonsOfUnit` sorts by `Lesson.seq`** (`content.logic.ts:301`), so an
   `a2.10.l2` at `seq: 2` slots in behind l1 deterministically.
2. **`tag` is authored, not derived.** a1.30.l2 carries `A1 · EXAMEN` while its
   sibling carries `A1 · LEÇON 30`, so l2 gets its own eyebrow and the two do not
   collide. (a2.10.l1's batch asserts its tag against `unit.seq`; l2 needs its own
   rule, and a1.30.l2 is the precedent for what that looks like.)
3. **The hand-off already exists and is exactly what you asked for.**
   `lesson.tsx:127` builds `nextL` as
   `content.units(band).flatMap(u => content.lessonsOf(u.id))` and takes the next
   entry. So **finishing a2.10.l1 hands the learner straight into a2.10.l2**, with
   no unit boundary crossed and nothing reordered. It is a continuation of the
   lesson that created the hazard, which is better placement than `seq 5` would
   have bought.
4. **Zero churn.** No unit created, no `seq` moved, no brief edited, no doctrine
   table touched, and the stale spine script stays untouched.

### The two riders. Both must ship WITH the lesson, not after it.

**Rider 1 — the Den opens `lessonIds[0]` and nothing else.**

```
app/den.tsx:169
router.push({ pathname: '/lessonoverview', params: { key: u.lessonIds[0] } });
```

A learner who has already finished a2.10.l1 has **no route to l2 from the Den**.
They would have to replay l1 to its result card. For a1.30 that is survivable, because
the exam follows the review in one sitting. For a2.10.l2, which a learner will want to
return to, it is this project's signature failure: authored, valid, unreachable.

It is a small fix — the Den row offering both lessons when a unit has two, or the
overview carrying a second row — but it is **app work, not content work**, and it has
to be scoped as part of this. Shipping the lesson without it ships an invisible lesson.

**Rider 2 — the unit `canDo` no longer covers the unit.**

```
a2.10.canDo = "Can conjugate regular -ir verbs and hear where the -iss- belongs"
```

l2 is about the -ir verbs that are **not** regular. a1.30's canDo covers both its
lessons in one sentence and this one would have to as well. That is one `jsonb`
update, and it breaks three byte-for-byte assertions that a2.10.l1 already ships
(`author-verbes-ir-batch.ts`, `merge-verbes-ir-into-seed.ts`,
`a2-10-verbes-ir.test.ts`). Small, local, and it must be done deliberately rather
than discovered.

Suggested wording, to be approved rather than assumed:

> Can conjugate regular -ir verbs, hear where the -iss- belongs, and tell them apart
> from the -ir verbs that take no -iss- at all

---

## 2. What the class actually is, and why a2.10 could not teach it

**The eight are not one class.** They are two, plus a leftover, and splitting them by
SOUND rather than by spelling is the whole lesson.

### Group A — the shedding verbs (6)

`partir · sortir · dormir · servir · sentir · mentir`

The stem loses its final consonant in the singular and gets it back in the plural.

```
je pars · tu pars · il part      /paʁ/      nothing at the end
ils partent                      /paʁt/     a T arrives
nous partons /paʁ.tɔ̃/   vous partez /paʁ.te/
```

**That is a2.10's reframe, verbatim: the plural puts a sound on the end.** Same shape,
different spelling machinery — a2.10 inserts `-iss-`, this group restores a consonant
it already had. `dormir` gives /dɔʁ/ → /dɔʁm/, `servir` /sɛʁ/ → /sɛʁv/, `sentir`
/sɑ̃/ → /sɑ̃t/.

### Group B — the -ER impostors (5)

`ouvrir · offrir · couvrir · souffrir · découvrir`

They take **-ER endings**: `j'ouvre, tu ouvres, il ouvre, nous ouvrons, vous ouvrez,
ils ouvrent`.

```
il ouvre     /uvʁ/
ils ouvrent  /uvʁ/     identical
```

**That is a2.01's reframe, verbatim: four spellings, one sound, the pronoun carries
the person.**

### The leftover — `courir`

Group A's endings (`-s -s -t -ons -ez -ent`) on a stem that never sheds:
`je cours` /kuʁ/, `il court` /kuʁ/, `ils courent` /kuʁ/ — singular and plural
identical, so a2.01's rule on the ear and a2.10's neighbours on the page.

`mourir` is excluded: it changes its stem vowel (`je meurs` /mœʁ/ against
`nous mourons` /mu.ʁɔ̃/), which is a different mechanism and a low-value A2 verb.
**It stays homeless and should be recorded as such.**

### The payoff, and the reason this is one lesson and not a list

Every -ir verb in the language runs **one of the two rules the learner already
holds**. Nothing new has to be learned about the ear at all. What has to be learned
is which list a verb is on.

### AND THE SPELLING ONLY HALF-PREDICTS IT — measured

| ending | predicts? | evidence |
|---|---|---|
| `-vrir` / `-frir` | **YES, reliably** | ouvrir, couvrir, découvrir, offrir, souffrir are all Group B, and no regular -iss- verb ends this way |
| `-tir` / `-mir` / `-vir` | **NO** | `ralentir` takes the -iss- and `sentir` does not, and both end `-tir`. So do `bâtir`, `avertir`, `investir`, `garantir` |
| `-rir` | **NO** | `guérir` takes the -iss-; `courir` does not |

Both counterexamples are already inside a2.10's own ten. So: **one reliable spelling
rule and one memorised list of six.** Six is a fair price and it is the only thing in
the lesson that cannot be worked out.

### This is why a2.10 could not do it

a2.10 names the class on one card and conjugates none of it, deliberately. It could
not do more: teaching Group A's paradigm inside a2.10 means teaching a second
mechanism in the lesson whose whole claim is one mechanism, and the boundary card
would have had to become a paradigm. Handing over was correct. What was wrong was
one sentence on that card, which is §6 below.

---

## 3. Corpus state — measured, and it is the strongest argument for building this

**Every verb in the class already exists as a headword.** Zero infinitives to author.

| verb | rows | best row | respell | note |
|---|---|---|---|---|
| partir | 8 | `fr.a2.verbes.014` | pahr-TEER | in `verbes` already |
| sortir | 4 | `fr.a1.verbes-du-quotidien.124` | — | **no respell on the best row**; `fr.sons.verbes-essentiels.041` has `sor-TEER` |
| dormir | 6 | `fr.a1.verbes-du-quotidien.103` | — | **no respell**; `fr.a1.routines.021` has `dor-MEER` |
| servir | 2 | `fr.a1.cuisine.184` | sehr-VEER | |
| sentir | 1 | `fr.sons.verbes-essentiels.074` | sahn-TEER | **nasal violation, needs repair → `sahⁿ-TEER`** |
| mentir | 3 | `fr.sons.verbes-essentiels.204` | mahn-TEER | **nasal violation → `mahⁿ-TEER`** |
| ouvrir | 2 | `fr.sons.verbes-essentiels.034` | oo-VREER | |
| offrir | 3 | `fr.sons.verbes-essentiels.053` | oh-FREER | |
| couvrir | 1 | `fr.sons.verbes-essentiels.157` | koo-VREER | |
| souffrir | 1 | `fr.b1.verbes.054` | soo-FREER | b1 row; fine to reference |
| découvrir | 1 | `fr.sons.verbes-essentiels.158` | day-koo-VREER | |
| courir | 4 | `fr.a1.verbes-du-quotidien.108` | — | **no respell**; other rows exist |

Three verbs have no respelling on their best row and three rows carry a plain-nasal
violation. That is the same shape of work a2.10 did (3 repairs, 2 drill additions) and
should be budgeted for.

### The conjugated forms are ALREADY IN FRONT OF LEARNERS

63 present-tense forms probed against published sentences. **36 are attested.**

```
partir   8/9   je pars:9  tu pars:12  il part:8  on part:12  nous partons:43  ils partent:3
sortir   7/9   il sort:8  nous sortons:7  ils sortent:2
dormir   7/9   je dors:4  il dort:3  ils dorment:2
ouvrir   7/8   j'ouvre:8  tu ouvres:3  il ouvre:4  ils ouvrent:2
courir   4/7   il court:4  nous courons:2
offrir   2/7   il offre:2  on offre:5
sentir   1/7
servir   0/7
```

`nous partons` alone has **43 published sentences**. This is not a gap in a
vocabulary list. **The paradigm is already being shown to learners, in sentences,
with no lesson anywhere that explains it** — and a2.10 now teaches a rule that,
applied to these, produces `ils partissent`.

`servir` (0/7) and `sentir` (1/7) are the two that would need real authoring.

---

## 4. Ids, theme, and the block

Theme: **`verbes`**, per the ledger.

```
fr.a2.verbes  176 rows, max fr.a2.verbes.205
ledger blocks reserved through .460 (a2.15), several tails unused and deliberate
PROPOSED BLOCK FOR a2.10.l2:  fr.a2.verbes.461 .. .500
```

Allocated **above** the whole batch-1 reservation rather than into a2.10's unused
`.206..220` tail, so it cannot collide with a block somebody is holding. Amend
`A2-BATCH-1-LEDGER.md` §2 before authoring.

Estimated authoring: **~26 rows** — Group A's paradigm frame (6), a Group B frame
(6), the two minimal pairs that prove the sort (4), `courir` (2), applied sentences
(8). Every infinitive imported.

---

## 5. The lesson, sketched

**Owns:** *the family* (doctrine §B.5's fourth kind) — sorting a verb into a rule the
learner already holds. Explicitly **not** a paradigm: two paradigms are the
scaffolding, the sort is the lesson.

**Reframe candidate:** `Learn which list, not which rule.`

Five words, runs in the half-second between subject and verb, and it is what the
learner actually does: meeting `partir`, the question is not *how do I build this* but
*which list is it on*, and the answer hands them a rule they already have.

Record as rejected: *"Every -ir verb runs a rule you already have"* (true, and it
states a fact rather than an action); *"-vrir and -frir take -ER endings"* (a spelling
rule covering five verbs out of twelve).

**The reframe is the author's call after their own probe.** This brief proposes; the
build measures.

**Act sketch, 19-24 missions:**

```
act 1  the scene, and the two lists          the sentence that produced a non-word
act 2  Group A: the consonant comes back     a2.10's own rule, new spelling
act 3  Group B: the -ER impostors            a2.01's own rule, and say so by unit id
act 4  THE SORT                              the Owns. ralentir against sentir,
                                             guérir against ouvrir. courir lands here.
act 5  production                            speak, dictée, scenario, reading
act 6  quiz and roundup
```

**The layout claim, the way a2.10 had one:** `il part` and `ils partent` adjacent and
separately audible in one section, and `il ouvre` / `ils ouvrent` adjacent in another
— because the first pair must be heard as *different* and the second as *identical*,
and a learner who meets them a screen apart learns neither.

**Audio:** the same one-take constraint a2.10 used, in both directions. Group A's pairs
recorded adjacently so the arriving consonant is real; Group B's pairs recorded
adjacently so their identity is real. Write it into `desc`.

**Back-references:** to `a2.10` for Group A's rule and `a2.01` for Group B's, both by
unit id, both quoting the imported reframe constant rather than paraphrasing.

---

## 6. A defect in a2.10 that this scoping found, and that is already fixed

Scoping the sound behaviour showed that two strings on a2.10's hand-over card
(`s16-notmine`) overstated the boundary:

- head: *"These take no extra sound at all"* — **false.** `il part` /paʁ/ against
  `ils partent` /paʁt/ puts a consonant on the end. True of Group B and `courir`,
  false of all six Group A verbs.
- *"Ten in this lesson grow the sound and ten on these cards do not"* — **false** for
  the same six, and for `venir`/`tenir`.

Left alone, a2.10 would have taught against its own successor. Fixed and shipped as
**a2.10.l1 v3**: the head now says `None of these takes the -iss-`, which is what the
`sub` already said and is true of all ten, and the sort card now carries the concrete
pair *"ralentir takes the -iss- and sentir does not, and both end in -tir"*.

Applied to Postgres, merged, suite green at **2870 pass / 0 fail**.

---

## 7. UNVERIFIED — measure these before authoring

- **Whether the Den fix (rider 1) is one line or a layout change.** I read
  `den.tsx:169` and confirmed the behaviour; I did not scope the fix.
- **Whether anything else assumes one lesson per unit.** `lessonsOfUnit` and `nextL`
  are fine. `progressOf(u.id)`, the narrated hand-off, the flashcard hub and the
  paywall were not audited for a two-lesson unit.
- **How a1.30.l2 is reached in practice on a device.** The code path exists; nobody
  has confirmed a learner finds it.
- **Whether `venir`/`tenir` should move.** Their mechanism IS Group A's
  (`il vient` /vjɛ̃/ → `ils viennent` /vjɛn/, consonant restored and the vowel
  denasalised). a2.02 owns them at seq 5, which is now BEFORE this lesson. Either
  a2.02 forward-references l2, or l2 names them and hands them on as a2.10 did.
  A curriculum call, not an author's.
- **`servir` has zero attested forms and `sentir` one.** Both need real authoring;
  the other verbs mostly need importing.
- **Baseline test count and the exact `fr.a2.verbes` row count on the day.**

---

## 8. Do not ship until

- [ ] The unit `canDo` is widened and the three byte-for-byte assertions in
      a2.10.l1's batch, merge and test are updated in the same change.
- [ ] **The Den reaches l2.** A lesson nobody can open is the failure this codebase
      keeps having; see `A1-BUILD-INVARIANTS.md` §1.
- [ ] `a2.10.l2` carries `seq: 2` and its own `tag`, and `lessonsOf('a2.10')` returns
      both in order — asserted, not assumed.
- [ ] Group A's contrast and Group B's contrast are each one section with adjacent,
      separately audible rows, asserted by row index.
- [ ] The sort is testable: `ralentir` against `sentir`, `guérir` against `ouvrir`.
- [ ] No form of `venir`, `tenir` or `mourir` on a production surface.
- [ ] The three nasal repairs (`sentir`, `mentir`) and the missing respellings
      (`sortir`, `dormir`, `courir`) are handled through the real
      `hasPlainNasalFor`, both directions.
- [ ] `mourir` recorded as still homeless.
- [ ] Ledger §2 amended with the `.461..500` block before authoring starts.
