# a2.23 build report — « Pronominaux au passé composé »

**seq 20. The last lesson of batch 2 and the capstone of the past-tense arc.**
Built 2026-08-15. Applied to Postgres and merged into `seed.json`. Not published.

Doctrine §F, corrections §12, and the four questions the brief asks by name.

---

## 0. THE HEADLINE

Four rules the learner already had, one new fact, and the new fact is about the
pronoun rather than about the tense:

> **`If the little word is there, the first word is être.`**

Everything else on every screen is a recap, and the lesson says so on its fourth
mission rather than pretending otherwise.

```
authored     43 rows, fr.a2.verbes.791..833      559 before, 602 after, exactly +43
imported     20 rows, 0 headwords authored        7th build running with none
lesson       a2.23.l1 v1, 24 sections, 6 acts, 30 questions, 63 items
the Owns     7 sections against the positions' 2
tests        3906 before, 3950 after (+44), 0 fail
tsc          0 in ealch-v2 AND 0 in ealch-admin
mutations    41, 0 caught by nothing, 0 skipped, SEVEN finding a weakness
```

---

## 1. BOTH PREREQUISITES WERE SHIPPED, AND I CHECKED RATHER THAN ASSUMED

The brief lists as UNVERIFIED whether a2.22 and a2.21 are shipped and says to
stop and say so if either is not. Measured against Postgres and `seed.json`:

```
a2.21   seq 18   lessonIds ['a2.21.l1']   v3   46 rows, .651..696
a2.22   seq 19   lessonIds ['a2.22.l1']   v2   31 rows, .721..751
```

**And neither leaked.** Walked over both shipped bodies for `me suis`, `s'est`,
`se sont`, `lavé` and `levé`: **zero occurrences in either.** a2.21 refused every
reflexive across four layers and a2.22 refused every compound across four more,
so this lesson's whole subject was untouched ground. Both reports promised that
and both delivered it, which is the cleanest hand-off in the band.

The check is now permanent rather than a one-off: the batch reads both
prerequisites' `lessonIds` out of `content_units` and refuses if either is empty,
the merge does the same against the seed, and the test asserts it.

---

## 2. THE NEGATION QUESTION THE BRIEF ASKED ME TO SETTLE

> *« whether the five negation statements across a1.18, a2.19, a2.05, a2.21 and
> a2.22 are actually one string. You are the fifth and the last to find out. »*

**THEY ARE NOT ONE STRING. THEY ARE TWO, AND NEITHER HAS DRIFTED.** Measured off
the shipped bodies in `seed.json` on 2026-08-15:

```
a1.18  reframe  « Wrap the verb, then ask what the verb was. »          x13
       a2.19's line: 0 occurrences
a2.19  reframe  « Wrap the verb that changed, not the one carrying
                  the meaning. »                                        x16
       a1.18's line: 1 occurrence
a2.05  a2.19's line x5,  a1.18's line x0
a2.21  a2.19's line x2,  a1.18's line x0
a2.22  a2.19's line x8,  a1.18's line x1, its own extension x12
```

The four A2 lessons are one string, byte for byte. **a1.18 is a second, earlier
string, and a2.19 and a2.22 both quote it.** So the arc deliberately holds two
sentences: a1.18 said which words go round the verb, a2.19 said which verb, and
every A2 lesson since has quoted a2.19 without rewording anything.

**This is a finding about the arc rather than about this lesson, and the brief's
"five lessons, one rule" is right about the RULE and wrong about the count of
strings.** The correct assertion — the one all three of this build's layers now
make — is that BOTH lines are quoted verbatim and that they are still *different
from each other*. That negative matters: if somebody ever "harmonises" them, the
arc loses the distinction between which words and which verb.

### And the arc needed a third sentence

a2.22's extension is « Both words changed for the subject, so both go inside the
wrap. » Applied here it is still true and no longer sufficient, because there are
now three words and only two go inside:

```
Je   ne   me   suis   pas   levé.
          └── inside ──┘          the little word and the first word
                            └──┘  the second word, OUTSIDE the wrap
```

A learner running a2.22's sentence literally has no instruction about the
participle, and the shape that looks right is « Je ne me suis levé pas. » So:

> **`The wrap goes round the little word and the first word. The second word sits outside it.`**

Authored five times, with both inherited lines quoted verbatim beside it.

### The elision moved onto a different word, exactly as a2.22 predicted

a2.22 §6 wrote that this lesson would lose its simplification the moment the
auxiliary arrived. It did, and in the direction that lesson called:

```
je ne me suis pas       nothing elides      nous ne nous sommes pas   nothing
tu ne t'es pas          THE PRONOUN         vous ne vous êtes pas     nothing
il ne s'est pas         THE PRONOUN         ils ne se sont pas        nothing
```

**`ne` NEVER elides here, in any person**, because every form of the little word
opens on a consonant — and the little word itself elides in two. a2.05 elided
`ne` in six of six, a2.21 in three of six, a2.22 in none, and here it is none
again with the elision on a **different word**. Four lessons, four answers, so
`reduceNegative()` is written fresh rather than inherited.

---

## 3. THE DIRECT-OBJECT DECISION, WHICH IS THE LARGEST CALL IN BATCH 2

**OPTION 1: the pattern is named receptively and the reason is not given.**

The brief recommends it and says option 3 is unavailable because the learner will
hit `se laver les mains` in week one. **Measured, it is worse than that: the
learner has already hit it, on cards that shipped before this lesson existed.**

```
fr.a2.corps.001  « Elle s'est cassé le bras en tombant du vélo. »     inSeed=Y
fr.a2.corps.002  « Elle s'est cassé la jambe en tombant dans
                   l'escalier. »                                      inSeed=Y
fr.a2.corps.006  « Elle s'est fait mal au genou en courant. »         inSeed=Y
fr.a1.corps.209  « Je me lave les mains avant de manger. »            inSeed=Y
```

Three A2 cards **in the cut**, feminine subject, **`cassé` and not `cassée`**,
with 51 published `elle s'est` sentences behind them. A lesson that taught
« after être, agree with the subject » and stopped would contradict three cards
the learner can already draw, and would teach them to read correct published
French as a typo.

**So option 1 is not a compromise here, it is the only defensible answer**, and
the measurement is what makes it so rather than the brief's recommendation.

### What that means concretely

- **One section** (`s11-object`), three cards, both required pairs on one screen,
  plus `fr.a2.corps.001` as published corroboration: *written for a different
  lesson, by somebody who was not teaching this, and the ending is absent.*
- **The reason is stated nowhere.** `OBJECT_TERMS` — `direct object`, `indirect
  object`, `preceding object`, `receives the action`, `agrees with the object`
  and five more — is refused on **every surface**, which is wider than the brief
  asked. The brief says to scope it to production surfaces; half-explaining the
  rule on a reading card is exactly how a2.24 would lose its subject.
- **Recognition is tested, production never is.** The brief draws the line there
  and it is the right place: one mcq asks whether « Elle s'est lavé les mains. »
  is correct French, and no typed answer, no dictée line, no speak item, no role
  play turn and no drill contains one. The rows carry `sentence` and `review`
  only.
- **The manifest re-measures the three published rows on every regeneration** and
  refuses if any of them has been "corrected" into agreement, because the whole
  argument for option 1 rests on their still being unagreed.

### FOR a2.24, WHICH OWNS WHAT IS LEFT

The pattern is named and the reason is entirely yours. `s11-object` says the
ending goes away when something is named after the second word, and it says
nothing about why. **`a2.24` is named on that screen and in two terms**, so a
learner who wants the reason is pointed at you rather than left with a rule that
looks arbitrary. Nothing about the direct and indirect object distinction appears
anywhere in this lesson, and a guard in all three layers keeps it that way.

### And the reciprocal is out entirely, which is stricter than a2.22 left it

a2.22 §9 named it on one receptive card; its brief and mine both say to follow
whatever it did. **I left it out completely**, and the case is stronger here:
the reciprocal past ALSO declines to agree (`ils se sont parlé`), for the same
reason the `les mains` case does, so naming both in one lesson would teach
a2.24's rule twice over by the back door in a lesson that has already decided not
to teach it once. Measured: `se sont parlé` has **one** published sentence in the
whole corpus, at B1, and no unit at any level owns the reciprocal.

---

## 4. HOW MUCH WAS IMPORTED VERSUS AUTHORED

**"Almost nothing authored" is the expected answer and it is the right one.**

```
headwords authored     0        7th build running, corrections §2
headwords imported    12        11 infinitives + laver bare, all framed with se
sentences imported     8        every one of them published and none respelled
rows authored         43        grammar sentences only, all into `verbes`
rows in `routines`     0        a1.25 owns that theme; a2.22 kept out and so did I
participles as items   0        doctrine §E, settled by a2.05, agreed by a2.20/a2.21
respellings repaired   0
rows read and REFUSED  8        with the reason recorded for each
```

Every verb the lesson names is an imported id, asserted by id in all three
layers. The participles are the other half of the brief's requirement and they
are asserted by **absence**: no authored row is a bare word, no authored row is
kind `word`, and the test walks the lesson's own `itemIds` for bare participle
forms.

### The corpus asymmetry that the whole Owns rests on

Measured over 27,956 published sentences. **All thirteen cells of the frame verb
are zero:**

```
je me suis lavé      0     nous nous sommes lavés   0
tu t'es lavé         0     vous vous êtes lavés     0
il s'est lavé        0     ils se sont lavés        0
elle s'est lavée     0     ils se sont levés        0
elle s'est lavé les mains  0     ne me suis pas  0     ne se sont pas  0
```

**And the construction itself is everywhere:** `s'est` 224, `se sont` 104,
`nous nous sommes` 46, `me suis` 38, `elle s'est` 51. The shape is common and the
verb has never once been built.

**The other half is the lesson's opening move.** « j'ai lavé la voiture » is
published twice and « je me suis lavé » not once, so *the corpus already teaches
the sentence that causes the error and has never shown the one that corrects it.*
That asymmetry is why the scene opens on a correct sentence rather than a wrong
one, and the manifest re-measures both figures on every regeneration.

---

## 5. THE REFRAME, WHAT I REJECTED, AND WHY

**Chosen:** `If the little word is there, the first word is être.`

Doctrine §B.4 asks whether the learner could run it in the half-second between
subject and verb. This one fires one word later than that — between the little
word and the auxiliary — which is exactly where the decision falls and exactly
where the scene's sentence dies. Authored **9 times**, against an explicit
constant.

**Rejected, and recorded in `REFRAME_REJECTED` with the reason:**

1. *« Reflexive verbs are conjugated with être in the passé composé. »* The brief
   names this as the thing to reject and it is right: it is a rule about the
   TENSE, and a learner mid-sentence has not got a tense in front of them, they
   have got a little word.
2. *« A reflexive verb always takes être, whatever the plain verb takes. »* The
   brief's own candidate. The chosen line is its second half made runnable: this
   version asks the learner to have CLASSIFIED the verb before they start, which
   is the work rather than the rule, and « whatever the plain verb takes » is the
   contrast — which belongs on a screen beside the two sentences.
3. *« Use être, and agree the ending with the subject. »* Two rules in one, and
   the second is the one that does not always run. A reframe carried across nine
   screens cannot have an exception the lesson then has to name.
4. *« The little word goes in front of the first word. »* a2.22's rule about
   position moved one tense along. It says nothing about WHICH first word, and
   choosing it is the whole Owns.

---

## 6. HOW THE OWNS GOT MORE WEIGHT THAN THE POSITIONS

**Seven sections against two**, asserted in all three layers and by the act
shape `[4, 2, 7, 3, 4, 4]`.

```
act 2, the positions   2 sections    the slot diagram, and the six persons
act 3, the Owns        7 sections    assembly · the four endings · the ear ·
                                     verbs never shown · the exception ·
                                     it is not about the meaning · what is next
```

The positions act is deliberately the lightest in the lesson **because there is
no paradigm to learn**: the six forms of être are a1.06's and the six little
words are a2.22's, and that act only puts them in one order. That is what makes
this a composition lesson rather than a fourth past-tense drill.

### Did the composition framing hold?

**Yes, and the measurement that says so is the section count above plus one
more:** the lesson introduces exactly **one** new fact and states so on a screen
(`s04-recap`, four cards, one per owned rule, none of them new). The
`progressCheck` prints « New rules: 1 » and « Rules you already had: 4 ».

It did **not** read as a fourth past-tense drill, and the reason is structural
rather than tonal: the three required layouts are all *contrasts between two
things the learner already owns* — avoir against être, an ending against no
ending, a wrap that closes early against one that closes late. There is no new
paradigm anywhere in the lesson to drill.

The one place it came close was the six-person walk, which is genuinely a
recap and nothing else. It is two cards in the lightest act and its own `say`
says so: *« Nothing here is new: it is a1.06's six forms of être with a2.22's six
little words in front of them. »*

---

## 7. WHAT THE APP CAN TEST HERE, AND IT IS UNUSUAL FOR THIS BAND

**Agreement IS testable by typeIn**, which the brief flagged and which is the
exception in a band where most spelling distinctions are not. Measured through
the real `fold()`:

```
Il s'est lavé.      vs  Elle s'est lavée.       DIFFER
Elle s'est lavée.   vs  Elles se sont lavées.   DIFFER
Je me suis levé.    vs  J'ai levé.              DIFFER
Je me suis levé.    vs  Je m'ai levé.           DIFFER
Je me suis levé.    vs  Je suis me levé.        DIFFER
Je ne me suis pas levé. vs Je me ne suis pas levé.  DIFFER
Elle s'est lavée.   vs  Elle s'est lavé les mains.  DIFFER
```

**Every piece of the composition is typeable** — the little word, its position,
the auxiliary and the ending — so the exam is built on it: **16 typed questions
of 30**, and 14 multi-word answers, every one of them a sentence the lesson owns.

**And one thing is not:**

```
Je me suis levé.    vs  Je me suis leve.        SAME
```

The é is invisible to every typed surface, so no scored item turns on it. Every
one turns on the letters **after** the é. Both halves are pinned by tests.

### NO EAR QUESTION CAN TEST AGREEMENT, AND I AM SAYING SO AS THE BRIEF ASKS

`lavé`, `lavée`, `lavés` and `lavées` are one sound, on **every verb in this
lesson without exception**. a2.21 §10 handed that forward: its own audible
feminine was `mourir` and no reflexive has one. `HOMOPHONE_GROUPS` holds six sets
and all three layers walk it.

The two ear questions this lesson does ask are both on the **auxiliary**, which
is a whole extra word and genuinely audible, and the second one's `why` says out
loud that a question between two endings would have had no right answer at all.

### The dictée is the heaviest section, and it declares what it cannot reach

Thirteen lines, all LETTERS mode through the real `dicteeMode`, and it is the
only surface that can prove the ending.

**THE FOURTH CELL IS THE COST AND IT IS DECLARED RATHER THAN HIDDEN.**
« Elles se sont lavées. » is the one cell carrying BOTH endings and it is
**seventeen letters, one over**. a2.21's four cells all fitted because
`est`/`sont` is shorter than `se sont`; the little word is what pushes this one
over, and no reflexive verb in the language is short enough to get it back. Seven
frames are recorded in `DICTEE_TOO_LONG`, and the test asserts that the fourth
cell is *still* word mode, so the day that changes somebody finds out.

The dictée reaches three of the four endings and the test asserts all three.

### Questions I wanted and could not write

- **An ear question on the ending.** Impossible on every verb here. Named above.
- **A typed question on the é of the participle.** `fold()` strips it, so the app
  would accept `leve` and tell the learner they spelled it right.
- **A typed question on the exception.** Possible, and deliberately not written:
  option 1 tests recognition and never production.

---

## 8. EVERY CLAIM IN MY BRIEF I MEASURED FALSE

The rate across the band is three to six per lesson. This brief had already been
corrected in place against the pre-flight, so it was much better than its
predecessors — **four false claims, and one of them is the arc-level finding in
§2.**

**1. « The negation wording is the same string as a2.19 / a2.05 / a2.21 /
a2.22. Five lessons, one rule. Assert it. »** The rule is one; the STRINGS are
two. §2. Asserting "one string" would have been asserting something false.

**2. « Reciprocal reflexives in the past (ils se sont parlé, which does not
agree) follow the same indirect-object logic. If a2.22 left reciprocals out,
leave them out. »** a2.22 did NOT leave them out — it named one receptively on
`s13-later`, which its own report records as the decision. Following the brief
literally would have meant naming one here too. I left them out entirely and the
reason is in §3: the reciprocal's agreement behaviour depends on the very
distinction option 1 declines to explain.

**3. « Take option 1. Option 3 is not available — se laver les mains and se
brosser les dents are exactly the routine verbs a2.22 taught, so the learner will
hit it in week one. »** Right conclusion, understated premise. The learner has
**already** hit it: three A2 cards in the seed ship the shape unagreed. §3.

**4. The identity block's `lessonIds: []` and « version starts at 1 ».** True,
and the brief also says to re-run the pre-flight if reading it more than a few
days after 2026-08-12. I did, on 2026-08-15, and every field matched byte for
byte — the first brief in this band whose identity block needed nothing.

**And one claim in the brief that I could not test:** *« Read a2.22's corpus
header for what it imported from routine and what it authored. You import the
same items; you do not author a second set. »* a2.22 imported **twelve**
headwords and I import **twelve**, but they are not the same twelve: a2.22 needed
`s'appeler` and `se souvenir` for its not-reflexive group and I need `être`,
`avoir` and `laver` bare for the auxiliary flip. Nine overlap. The instruction's
spirit held (nothing re-authored); its letter did not.

---

## 9. WHAT I FOUND WRONG OR INCOMPLETE IN `A2-BRIEF-CORRECTIONS.md`

Corrections §12 asks every build to say. **Three things, and two of them are new
holes in guards the whole band copies.**

### 9.1 §14.3's APOSTROPHE FIX HAS A MIRROR IMAGE ON THE RIGHT, AND NOBODY HAS RECORDED IT

§14.3 records that the house word boundary excludes `'` on the LEFT, so a shape
cannot see `j'ai`, `n'est` or `c'est`. **The same exclusion on the RIGHT makes
every `hasPhrase(surface, '<unit id>')` check in this band blind to the
possessive** — and « a2.01's line » is how this band names a neighbour almost
every time. Measured through the real boundary:

```
"That is a2.01's line."          hasPhrase(_, 'a2.01')   BLIND
"That is a2.01 and nothing."     hasPhrase(_, 'a2.01')   MATCH
"a2.24's lesson owns it."        hasPhrase(_, 'a2.24')   BLIND
"« Wrap the verb. » is a1.18's." hasPhrase(_, 'a1.18')   BLIND
```

So a check that a neighbour is credited passes **only by accident**, on whichever
screen happens to name it without a possessive. Found here by this lesson's own
test going red on a card reading « That is a2.01's line » while the batch's
version of the same check — which used `.includes()` — passed.

**The fix is `namesUnit()`: the same boundary with the apostrophe dropped from
the RIGHT and kept on the left**, which is the exact opposite of §14.3's fix and
right for the same reason. It is in all three layers here. **Every lesson in this
band that checks a unit is credited should be swept with it.**

### 9.2 §14.4 RUNS THE OTHER WAY ROUND TOO: AN ENGLISH GLOSS FIRES ON ENGLISH

§14.4 records that a shape built out of FRENCH morphology reads the English half
of a card as French. **The mirror is also real.** My first reciprocal marker list
held the bare phrase `each other`, and it refused an audio brief reading:

> *« The pair is the teaching and it works when the two sit against each other. »*

which is not teaching a reciprocal to anybody. The gloss that would actually
teach one is **`to each other`**, because that is how the reading is always
given. Narrowed, and both `RECIPROCAL_MUST_FIRE` and `RECIPROCAL_MUST_NOT_FIRE`
are walked in all three layers, with the sentence that broke it pinned by name.

### 9.0 `drillOrder()` DOES NOT DO WHAT ITS COMMENT SAYS, AND THE WHOLE BAND COPIES IT

**Found while preparing the commit, after every gate was already green. It is
the most consequential thing in this report.**

a2.12's trap, quoted in every merge in this band, says `drills` is a Postgres
enum array ordered by DECLARATION and that a merge sorting it as strings ships a
different order into the seed from the one the database holds. The inherited fix
is `drillOrder()`, which sorts by `DRILL_KINDS`.

**It only matches the database by luck.** The batch writes `it.drills` to
Postgres **verbatim**, so the database holds whatever order the corpus file
declared. The merge then writes `drillOrder(it.drills)`. The two agree only if
the declaration was already in `DRILL_KINDS` order.

Measured on this build before the fix:

```
63 rows checked (43 authored + 20 imported)
25 identical in Postgres and the seed
38 DIVERGED
```

And it is not confined to this lesson:

```
a2.21   declared its arrays in DRILL_KINDS order, so it diverged on nothing
a2.22   did not, and diverged on ALL 31 of its rows — healed only when the
        v43 publish regenerated the seed from the database, by accident
a2.23   declared sentence-first, and diverged on 38 of 63
```

**And the second half is worse: `drillOrder()` was also being applied to the
CARRIED rows.** The manifest IS a recorded read of Postgres, so those arrays
already hold exactly what the database holds — sorting them can only break the
match, never make it. It was rewriting `fr.a2.corps.001` and
`fr.a2.routines.049`, two rows this build does not own the content of, from
« sentence, flashcard, review » to « flashcard, sentence, review ».

**Two fixes, both at the source rather than in the repair:**

1. The drill sets in the corpus file are written in `DRILL_KINDS` order, and the
   **batch asserts it** — where the array is written, rather than leaving the
   merge to patch it afterwards.
2. **The carry is byte-faithful to the recorded read.** `drillOrder()` is not
   applied to an imported row at all, and the merge refuses if the carried array
   differs from the recorded one.

After: **63 of 63 rows identical in Postgres and the seed, 0 diverging.**

**Anyone touching this band should sweep for it.** The symptom is invisible to
every existing gate — `content:parity` does not compare item drill order, no test
does, and a publish silently heals it, which is why it has survived.

### 9.3 §14.5's RATIO ANSWER DOES NOT COVER A UNIT TITLE THAT IS ITSELF JARGON

§14.5 says to guard the RATIO rather than ban a part-of-speech name, *« which
also lets `overview.titleEn` stay the unit's own English name, which
`content_units` requires it to match »*. That works when the technical word is
avoidable elsewhere. **It does not work here.**

a2.23's English title is **« Pronominal Verbs in the Passé Composé »**. The phrase
`pronominal verb` is unambiguously jargon on a card, and it is contractually
fixed in that one field. A ratio guard would either let it onto every card or
refuse the title.

The shape that works is a **narrow exemption plus an equality assertion**: one
string, checked to BE `UNIT.title`, with a second assertion that the title's own
jargon appears **nowhere else**. Both are in all three layers, and mutating
`titleEn` away from the unit title fails immediately.

*(a2.22 has the same title shape and did not hit this, because « Pronominal
(Reflexive) Verbs » puts a bracket between the two words and `hasPhrase` is
boundary-exact. It is latent there, not absent.)*

---

## 10. THE MUTATION HARNESS

`scripts/_a223_mutate.mjs`, 41 mutations including the five the brief names.

```
41 mutations   0 caught by NOTHING   0 skipped   0 with the seed layer n/a
SEVEN found a weakness rather than confirming a strength
```

The measured rate across the band is two or so per build; a2.21 and a2.22 both
found seven. **Seven again, and six of them were the merge being thinner than the
batch**, which is a2.16 §4's shape for the fifth build running.

**1. THE ONE INHERITED LINE THAT WAS NOT A LITERAL.** Every quoted neighbour
string was a literal on the guard side except `PRESENT_NO_AGREEMENT`, and
paraphrasing that constant renamed both sides and walked past the batch AND the
merge. It was caught only by the batch's version check and by the lesson's own
test, which holds the string by hand. **a2.18 §6 and a2.21 §4.2 for the sixth
time in this band, and it happened on the one line I did not think of as
inherited.** Both layers now hold it as a literal.

**2 to 6. FIVE MERGE HOLES**, all caught by the batch and missed by the merge:

```
give the exception a production drill        the merge did not read its drills
stop naming a2.24                            the merge did not check at all
author a headword instead of importing it    the merge had no kind check
author a participle as a corpus item         nor the whitespace rule
take the error off the trap's first card     the merge had no literal for it
```

It matters procedurally: **the merge is the layer that runs when somebody
re-merges without re-applying.** All five are closed.

**7. A MUTATION THAT LOOKED LIKE A HOLE AND WAS NOT** — harness note 5. Dropping
a1.18's line from the negative card left it standing in the `theWrap` term, so
the claim was not removed and both content layers were right to pass. Removing it
from BOTH is the mutation that tests the guard, and it is caught.

Also worth recording: **the anchors that mattered most were the ones the TEST
holds by hand.** This lesson's three required layouts are built from
`FLIP_PAIRS`, `OBJECT_PAIR` and `SLOTS`, and the batch reads the same constants —
so several rows are catchable *only* because the test writes every pair out as a
literal. That is the argument for the test importing nothing, made concrete.

---

## 11. VERIFICATION, AND THE HALF I DID NOT DO

**HOST HALF: DONE.**

```
node --test          3906 before, 3950 after (+44), 0 fail
npx tsc --noEmit     0 in ealch-v2, 0 in ealch-admin
content:parity       clean; the only divergence is the known pre-existing
                     b2.01.l1 (database-only, in_review), which is corrections §10
renderer grep        every one of the 17 section types this lesson uses has a
                     `case` in a renderer; teach/table/letterGrid all in
                     ReferenceSheet.tsx
served bundle        25,687,872 bytes off Metro on 8082, and every new string is
                     in it: a2.23.l1, the reframe (9), the slot sentence (34),
                     the exception (5), the flip (14), the trap (8), a2.21's
                     agreement rule (21), a2.01's reframe (25)
```

**DEVICE HALF: NOT DONE. `adb devices` returned an empty list — no phone was
attached at any point in this build.**

Naming the gaps rather than papering over them, per invariants §7 and
corrections §10:

- **Whether the slot diagram fits.** It is six rows of a three-column `tapTable`,
  which is exactly the Pixel 6 ceiling corrections §8 records, and the third
  column holds the longest strings in the lesson (« the little word, and it is
  the person again, which is a2.22's »). **This is the single most likely place
  this lesson has a layout defect and I could not look at it.**
- **Whether the two `pair()` cards wrap well.** `s02-flip` and `s11-object` put
  two French sentences on one card joined by ` · `; the longest is « J'ai
  réveillé mon frère · Je me suis réveillé ». a2.05 §11.2 and a2.22 §4 both found
  clipping on exactly this kind of line.
- **Whether the trapDrill's four steps walk cleanly**, which `lesson-contract`
  checks structurally and no host gate can check visually.
- **The resume interstitial and the mission list**, which is where a2.15 found a
  jargon defect that three host layers had passed.

The host half is what caught a2.11's `intro` defect and it is not nothing, but
a2.21 §10 is right that a completely green host does not mean a clean screen.

---

## 12. WHAT a2.24 AND WHOEVER TAKES seq 21 INHERIT

- **The exception is NAMED and the reason is entirely a2.24's.** §3. `a2.24` is
  on a learner surface so the hand-off is visible rather than only in a report,
  and `OBJECT_TERMS` is refused on every surface in three layers.
- **The reciprocal is absent from everything**, so a2.24 can introduce it clean.
- **`namesUnit()` (§9.1) should be swept across the band.** Every existing check
  that a neighbour is credited is blind to the possessive.
- **The negation arc is two strings and both are pinned** (§2), including the
  negative assertion that they are still different from each other.
- **The id block: a2.23 took `fr.a2.verbes.791..833`, 43 of 70.** `.834..860` is
  the tail and is not backfilled. **The next lesson in `verbes` should take
  `.861..930`.** Row count 559 before, 602 after.
- **`sommes` is a false positive and the checker calls the WRONG fix clean**
  (a2.21 §3). Four rows here carry it and all four are asserted BY NAME. Any
  lesson in this band using `nous sommes` has this today.
- **The seed cut prediction held exactly**, which is the first time in five
  builds — a2.05, a2.20, a2.21 and a2.22 all missed theirs in both directions.
  The surprise check stays in the merge regardless; one hit is not a method.

---

## 13. WHAT IS NOT DONE

- **Not published.** `content:publish` is not part of a lesson build and nobody
  asked for one. Parity is clean and a publish would be safe, but the seed
  already moved from v42 to v43 under this session by somebody else's publish
  and that is worth a look before another one.
- **Not committed.** The files are written and applied; `*.md` here is gitignored
  and needs `git add -f`.
- **No audio rendered.** Briefs only, per invariants §10. Thirteen `recorded`
  entries with real `recordingId`s and full `desc` instructions; `CLIP_MANIFEST`
  is empty by design and every card falls back to device TTS.

---

## v2, 2026-08-15 — the device pass, and the two defects it found

The build shipped v1 with the device half undone, said so, and named `s05-slots`
as the most likely place a defect was hiding. A Pixel 6 became available after
the publish. **Both named risks were real and one of them was the section the
brief exists to require.**

### 1. THE SLOT DIAGRAM SPANNED TWO SCREENS

v1 put the unit-id credits INSIDE the table cells, so `job` ran to 44, 61, 63 and
70 characters. The third column of a three-column `tapTable` is about ELEVEN
characters wide on a Pixel 6, so those wrapped to four, five and six lines.

Nothing was lost — it scrolls, all six rows are there — but the brief requires
all six positions on ONE screen so the learner reads « Je ne me suis pas levé »
down the page as a sentence. That is the only reason the section exists.

**AND EVERY HOST LAYER PASSED.** The batch, the merge and the test each assert
the six rows, the six words and the six jobs, cell by cell, and every one of
those assertions was TRUE. **HEIGHT IS INVISIBLE TO ALL OF THEM.** The nearest a
host gate can get is a length budget on the cell, which is what v2 adds
(`SLOT_CELL_MAX = 20`), with the credits moved to the row's `detail` body where
a learner who taps the row already goes.

### 2. TWO MISSION TITLES CLIPPED, AND A CHARACTER COUNT CANNOT MODEL IT

a2.13 recorded a mission-row title cut at 27 and **a2.14 §13 corrected it to a
WIDTH**. This build carried the number as `TITLE_MAX = 27`, a CHARACTER COUNT,
and asserted it nowhere. Measured on the device:

```
"Build It, One Word At A Time"        28 ch   13.05 em   FITS
"One Word Changes The Other"          26 ch   13.46 em   FITS
"Verbs You Were Never Shown"          26 ch   13.64 em   CLIPPED
"You Already Have Four Of The Five"   33 ch   16.01 em   CLIPPED
```

**Twenty-six clips while twenty-eight fits.** `V Y W N S w` are wide glyphs and
`i l t , space` are narrow ones, so no count can separate these. v2 ships
`titleWidth()`, an em estimate, with all four measured cases walked as
calibration in three layers: a change to the model or the budget that stops
separating them fails.

**AND THE FIRST BUDGET WAS TOO TIGHT AND THE GUARD CAUGHT ITSELF.** 13.20
refused `s02-flip`, which the device renders in full. The band between the widest
measured pass (13.46) and the narrowest measured clip (13.64) is 0.18 em, so the
budget sits at 13.55 and a title landing inside that band should be checked on a
device rather than trusted either way. That is an honest limit, not a solved
problem.

### 3. WHAT WAS FINE, WHICH IS MOST OF IT

The trail card, the overview and intro, the missions list, the term chips, the
resume interstitial, the superscript `ⁿ` — and **both other required layouts are
perfect**: `s02-flip` (the Owns) and `s11-object` (the exception) each put their
pair on one card with nothing clipped.

### 4. WHAT v2 COULD NOT VERIFY

**The fixed screens were never seen on the device.** The Pixel locked between the
publish and the re-check and the keyguard cannot be cleared over adb. The fix is
verified by its guards — cells at or under 20, every title under budget, the four
calibration cases separating — and by nothing on a phone.

**So v2 carries exactly the gap v1 did, one step smaller**: v1 had never been
opened at all, v2 has been opened and its repair has not. The next person with
the phone unlocked should open mission 5 and confirm the six rows sit on one
screen.

### 5. THE GENERAL POINT

a2.21 §10 says a completely green host does not mean a clean screen. This is the
sharpest instance yet: **three layers, forty-four mutations, 3950 passing tests
and two `tsc` at zero, and the lesson's central layout did not do the one thing
it was built to do.** Both defects were geometry, and geometry is the class of
defect this project's gates cannot see. Budget the things that stand in for it —
cell length, title width, hint length, chip-row width — and treat every one of
them as a proxy that has to be re-measured on a device, not a rule.
