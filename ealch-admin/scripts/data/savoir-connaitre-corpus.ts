// The a2.14 corpus: what this lesson authored, what it imports, what it refused
// to touch, and the claims its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 30 authored entries below and
// for every respelling a2.14 puts on a screen. The lesson body reads `fr`,
// `ipa`, `respell` and `en` FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE GENERAL PRINCIPLE
//
//  ENGLISH HAS ONE VERB HERE AND FRENCH HAS TWO, SO THE CHOICE IS THE WHOLE
//  LESSON AND THE PARADIGM IS SCAFFOLDING.
//
//  Two verbs is twelve cells, which is the smallest paradigm in batch 1. That
//  is not a small lesson; it is a lesson whose weight sits somewhere else. The
//  Owns act runs eight missions against the paradigm act's four, and the
//  production act runs five, which the brief asks for by name: "you have room
//  for more production than any other lesson in batch 1."
//
//  AND THE TWO PARADIGMS CANNOT SHARE A FRAME. a2.13 put all eighteen of its
//  cells on `payer` and that was its best single decision. a2.14 must not copy
//  it, because THE COMPLEMENT IS THE THING BEING TAUGHT: savoir takes a verb or
//  a whole sentence, connaître takes a thing, and a shared frame would erase
//  the only difference the lesson exists to show. Two frames, `nager` and
//  `Paris`, chosen so that everything else on the line is equal.
// ══════════════════════════════════════════════════════════════════════════
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-12 ──────────────────────────
//
// 1. "connaissons, connaissez and connaissent meet the nasal validator's
//    FALSE-POSITIVE path."
//
//    FALSE, AND THE MECHANISM IS THE OPPOSITE OF WHAT THE BRIEF DESCRIBES.
//    Every form this lesson prints was run through the real `hasPlainNasalFor`:
//
//      koh-neh-SOHⁿ   koh-neh-SAY   koh-NEHS   koh-NEHTR   koh-NEH
//        -> not one is flagged, and not one should be
//
//    The false-positive path needs a token ENDING in a vowel plus a plain N or
//    M. `koh-NEHS` ends in S and `koh-neh-SAY` in a vowel, so the path is never
//    entered at all. And if it were, `hasPlainNasalFor` checks the FRENCH
//    spelling for a doubled nasal FIRST: `connaître` is written with `nn`, so
//    the function returns false on its first real branch, which is correct
//    rather than lucky. The invariants name `connaissent` alongside `viennent`
//    and `prennent`; `viennent` genuinely is the false-positive shape and
//    `connaissent` is not, because its respelling has no vowel-plus-N anywhere.
//
//    The forms are asserted BY NAME anyway, in the batch, the merge and the
//    test — not because the checker gets them wrong, but so that a later author
//    "fixing" `koh-NEHS` into `koh-NEHⁿ` breaks the build.
//
// 2. "`kon-NETR` (fr.a2.communaute.050) closes a nasal with a plain n and the
//    checker cannot see it."
//
//    FALSE ON BOTH HALVES. `connaître` is /kɔ.nɛtʁ/: the `nn` in the spelling
//    means the vowel is a plain /ɔ/ and the /n/ is genuinely pronounced, so
//    there is no nasal vowel in the word to close. The checker not flagging it
//    is the checker being RIGHT. It is a variant — it puts the syllable break
//    in the wrong place — and invariants §9 says a variant is not a violation.
//    The row is not imported and IT IS NOT REPAIRED. See NOT_REPAIRED.
//
// 3. "reconnaître and paraître follow connaître exactly."
//
//    FALSE FOR SYNTAX, WHICH IS THE HALF THIS LESSON TEACHES. They follow it in
//    their endings. They do NOT follow it in what may come next: `reconnaître`
//    takes a whole sentence after it and `connaître` never does.
//
//      fr.b2.recherche.151     L'auteur reconnaît que son raisonnement ...
//      fr.b2.recits-au-passe.007  Nous avons dû reconnaître que notre ...
//      fr.b2.methode-scientifique.232, fr.c1.discours-dexamen.136,
//      fr.c1.rhetorique.037, fr.a2.conflits-reconciliation.029
//
//    Six published sentences put `reconnaître` immediately before `que`, which
//    is the exact shape this lesson teaches the learner to reject for
//    `connaître`. So `reconnaître` is named ONCE, for its endings only, and the
//    batch refuses to let it near the rule. `paraître` is not named at all.
//
// 4. "connaître never appears before que, où, quand or si in any correct
//    sentence."
//
//    TRUE OF THIS LESSON AND FALSE OF FRENCH, AND THE COUNTEREXAMPLE IS ALREADY
//    PUBLISHED THREE TIMES.
//
//      fr.a2.negation-et-restriction.177   Je ne connais que le centre-ville.
//      fr.b1.negation-et-restriction.068   Je ne connais que le titre de ce livre.
//      fr.b1.negation-et-restriction.283   Elle ne connaît que les grandes lignes ...
//
//    `ne … que` is the restriction, not a sentence-opener, and the thing is
//    still there behind it. THE REFRAME SURVIVES THIS AND THE BRIEF'S PROPOSED
//    ASSERTION DOES NOT, which is one of the reasons the reframe is written the
//    way it is. The guard is therefore scoped to THIS LESSON'S authored strings
//    and says so, and `ne … que` is authored nowhere. A later author who adds
//    `Je ne connais que le centre-ville.` will trip a guard on correct French;
//    the failure message tells them why and points here.
//
// 5. "Whether the project has an existing convention on the circumflex."
//
//    SETTLED, NOT OPEN. Measured across every published row:
//
//      82 rows hold a word ENDING in -aître · 68 of those are one of the verbs
//      WITHOUT the circumflex: 0
//
//    One spelling, no exceptions, in a corpus of 27,600 published sentences.
//    THIS BUILD SHIPS THE CIRCUMFLEX and asserts it, and every flat spelling is
//    refused by the batch, the merge, the manifest and the test.
//
//    AND THE FIRST MEASUREMENT OF THIS WAS WRONG IN THE WAY INVARIANTS §0 SAYS
//    IT WILL BE. A bare substring query reported TWO flat rows; both were
//    `préparait`, which contains `parait`. The figure above is from the
//    boundary-aware query and the manifest now carries only that one.
//
// 6. "a2.13 will have conjugated savoir. Read it before deciding how much
//    paradigm you owe."
//
//    a2.13 DID NOT LEAK IT. Verified against the shipped lesson in BOTH
//    Postgres and the seed, walking the corrections §9 surface (sections +
//    sheets + terms + intro + overview): not one of the twelve forms of savoir
//    or connaître appears anywhere in a2.13.l1, and its own guard is the reason.
//    It went as far as replacing the house chrome to stay clear — see
//    CHROME_DECISION. So a2.14 owes the whole paradigm and owes it from cold.
//
// 7. Corrections §3, "the corpus has the forms and no minimal pairs."
//
//    TRUE HERE, AND WORSE IN THE WAY a2.13 FOUND. The corpus holds 214 published
//    sentences with a connaître form and 16 with savoir plus a verb. THREE of
//    the whole set carry a respelling, and one of those three carries U+203F.
//    A row without a respelling is a card the learner cannot say. So the
//    importable pool is TWO sentences, not 230.
//
// ── WHAT THIS BUILD FOUND THAT NO BRIEF MENTIONS ──────────────────────────
//
// 8. THE CONNAÎTRE PLURAL CANNOT BE DICTATED AT ANY OBJECT LENGTH. `dicteeMode`
//    switches to WORD tiles above 16 letters and word mode hands every word
//    over pre-spelled. `connaissons` is eleven letters on its own:
//
//      Nous connaissons Paris.  20    Nous connaissons Rome.  19
//      Vous connaissez Paris.   19    Ils connaissent Rome.   18
//
//    There is no object short enough. The savoir column spells from LETTERS in
//    all six cells on `nager`; the connaître column manages three of six on any
//    object at all. The dictée is built around that asymmetry rather than
//    pretending it is not there. Measured through the real function.
//
// 9. THE CORPUS ALREADY STATES THE REJECTED REFRAME, IN FRENCH, ON A CARD.
//    fr.a2.collegues.009 reads « Connaître » s'utilise avec une personne ou un
//    lieu, « savoir » avec un fait ou une compétence. That is reframe A almost
//    word for word. It is in READ_NOT_IMPORTED, for two reasons: it is French
//    metalanguage on a learner surface, which invariants §8 forbids, and it
//    teaches the rule this build rejects. See REFRAME_REJECTED.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** Every authored row lands in `verbes`, the batch-1 home. Ledger §2. */
export const THEME = 'verbes';

/** The unit, byte for byte from Postgres on 2026-08-12. Every A2 brief so far
 *  has had `title` and `sub` swapped and a `sub` that is in no database;
 *  corrections §1 says take it from the probe and never from the brief. This
 *  one was taken from the probe. */
export const UNIT = {
  id: 'a2.14',
  seq: 8,
  title: 'Irregular Verbs 4: Savoir and Connaître',
  sub: 'Irréguliers 4 : savoir & connaître',
  canDo: 'Can pick savoir or connaître correctly, the distinction English does not make',
  prereqUnitIds: ['a2.13'] as const,
} as const;

/** fr.a2.verbes held exactly this many rows when a2.14 claimed .381, which is
 *  the ledger's own figure after a2.13. THE MAXIMUM IS USELESS — a2.10.l2 took
 *  .461..500, above the whole batch-1 reservation, so `max` has been past every
 *  remaining block since before any of them was claimed. Ledger §10: the row
 *  COUNT is the only signal left, and the batch refuses any count that is not
 *  this or this plus its own rows. */
export const ROW_COUNT_BEFORE = 310;
export const ID_BLOCK = { from: 'fr.a2.verbes.381', to: 'fr.a2.verbes.420' } as const;

export type Verb = 'savoir' | 'connaître';
/** The order the learner meets them, which is also the order of the two
 *  columns on the grid screen. */
export const VERB_ORDER: readonly Verb[] = ['savoir', 'connaître'];

/** The naming forms, imported. NOT ONE IS AUTHORED — corrections §2, and this
 *  is the sixth A2 build in a row to author no infinitive. */
export const NAMING_FORMS: Record<Verb, { id: string; respell: string }> = {
  savoir: { id: 'fr.sons.verbes-essentiels.009', respell: 'sah-VWAR' },
  // koh-NETR in Postgres. Repaired to koh-NEHTR by RESPELL_REPAIRS_STEM.
  connaître: { id: 'fr.sons.verbes-essentiels.048', respell: 'koh-NEHTR' },
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CIRCUMFLEX
 * ═══════════════════════════════════════════════════════════════════════ */

/** SETTLED BY MEASUREMENT, not by taste. 85 published rows spell an -aître word
 *  and every one carries the circumflex; zero spell it flat. French spelling
 *  reform makes `connaitre` valid and this project has never once used it.
 *
 *  The batch, the merge and the test all refuse every flat spelling by name.
 *  NOTE THAT NO TYPED SURFACE CAN TEST THIS: `fold()` strips combining marks,
 *  so `Il connaît Paris.` and `Il connait Paris.` are one string to `typeIn`,
 *  `errorSpot` and the dictée. Measured. Only `mcq` can ask about it, and the
 *  quiz does exactly once. */
export const CIRCUMFLEX = { on: true as const, measured: { withCircumflex: 82, verbs: 68, without: 0, date: '2026-08-12' } };
export const FLAT_SPELLINGS = ['connaitre', 'connait', 'reconnaitre', 'reconnait', 'paraitre', 'parait'] as const;

/** THE ONE PLACE A FLAT SPELLING MAY BE DISPLAYED, and it is the wrong option of
 *  the one question that can test the accent at all.
 *
 *  `fold()` strips combining marks, so `Il connaît Paris.` and `Il connait
 *  Paris.` are ONE string to `typeIn`, `errorSpot` and the dictée: a typed
 *  question turning on the accent accepts the mistake and tells the learner they
 *  spelled it right. Only `mcq` can ask, because its options are picked rather
 *  than typed, and an mcq that asks has to print the wrong one.
 *
 *  Note that this is a DISPLAY permit. The flat forms also appear inside two
 *  `accept` lists, deliberately and for the same reason: a typed question whose
 *  answer carries the accent must accept the flat form, or it is pretending to
 *  test something it cannot. The guard walks display strings and skips `accept`. */
export const FLAT_PERMITTED = ['Il connait Paris.'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TWO FRAMES
 * ═══════════════════════════════════════════════════════════════════════ */

/** ONE FRAME PER VERB, WHICH IS THE DESIGN DECISION OF THE LESSON.
 *
 *  a2.13 got eighteen cells onto one frame and that was right for a lesson whose
 *  claim was that the back of the sentence never moves. Here the back of the
 *  sentence is the entire teaching, so a shared frame would delete it.
 *
 *  `nager` was RESERVED FOR THIS LESSON BY a2.13, which chose `arroser` as its
 *  own unseen verb specifically so that `je sais nager` would still be free.
 *  See RESERVED_FOR_NEIGHBOURS in modaux-corpus.ts.
 *
 *  Both frames were chosen through the real `dicteeMode`. `nager` puts all six
 *  savoir cells in LETTERS mode; `cuisiner` and `conduire` put only three. */
export const FRAMES: Record<Verb, { complement: string; id: string; kind: 'a verb' | 'a name' }> = {
  savoir: { complement: 'nager', id: 'fr.sons.verbes-essentiels.088', kind: 'a verb' },
  connaître: { complement: 'Paris', id: 'fr.sons.muettes.004', kind: 'a name' },
};

/** The twelve cells, in reading order: two verbs across, six persons down.
 *  `respells` here is the VERB ALONE, so the grid can print a cell without
 *  repeating the frame in every box. */
export const PARADIGM: readonly { person: string; forms: Record<Verb, string>; respells: Record<Verb, string> }[] = [
  { person: 'je', forms: { savoir: 'sais', connaître: 'connais' }, respells: { savoir: 'SEH', connaître: 'koh-NEH' } },
  { person: 'tu', forms: { savoir: 'sais', connaître: 'connais' }, respells: { savoir: 'SEH', connaître: 'koh-NEH' } },
  { person: 'il · elle · on', forms: { savoir: 'sait', connaître: 'connaît' }, respells: { savoir: 'SEH', connaître: 'koh-NEH' } },
  { person: 'nous', forms: { savoir: 'savons', connaître: 'connaissons' }, respells: { savoir: 'sa-VOHⁿ', connaître: 'koh-neh-SOHⁿ' } },
  { person: 'vous', forms: { savoir: 'savez', connaître: 'connaissez' }, respells: { savoir: 'sa-VAY', connaître: 'koh-neh-SAY' } },
  { person: 'ils · elles', forms: { savoir: 'savent', connaître: 'connaissent' }, respells: { savoir: 'SAV', connaître: 'koh-NEHS' } },
];

/** THE FORMS WHOSE RESPELLING IS ASSERTED BY NAME, with the reason, because the
 *  brief predicted the validator would object to them and it does not.
 *
 *  A later author reading `koh-NEHS` next to a rule about superscripts will want
 *  to "fix" it. There is nothing to fix: `connaissent` has no nasal vowel in it
 *  at all, the `nn` in the spelling makes the first vowel a plain /ɔ/, and the
 *  respelling ends in a real /s/. Breaking any of these goes red. */
export const ASSERTED_RESPELLINGS: readonly { form: string; respell: string; why: string }[] = [
  { form: 'connaissons', respell: 'koh-neh-SOHⁿ', why: 'the -ons IS a nasal vowel and carries the superscript. The koh- is a plain /ɔ/ because the French spells nn.' },
  { form: 'connaissez', respell: 'koh-neh-SAY', why: 'no nasal anywhere. The -ez is the ordinary a2.01 ending.' },
  { form: 'connaissent', respell: 'koh-NEHS', why: 'THE ONE THE INVARIANTS NAME AS A BLIND SPOT, AND IT IS NOT ONE. The -ent is silent, so the respelling ends on the /s/ of the stem. There is no nasal vowel in connaissent to mark.' },
  { form: 'connaît', respell: 'koh-NEH', why: 'the naming form minus its last two letters, which is why the naming form is repaired to koh-NEHTR rather than left as koh-NETR.' },
  { form: 'savent', respell: 'SAV', why: 'the -ent is silent, exactly as it has been since a2.01. Nothing is nasal.' },
  { form: 'savons', respell: 'sa-VOHⁿ', why: 'the -ons is nasal and takes the superscript, matching a2.13\'s voulons, pouvons and devons.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SHAPE OF THE SINGULAR, INHERITED RATHER THAN RE-TAUGHT
 * ═══════════════════════════════════════════════════════════════════════ */

/** BOTH VERBS DO THE THING a2.13 ALREADY NAMED: three persons, two spellings,
 *  one sound. sais/sais/sait and connais/connais/connaît.
 *
 *  a2.13 spent a whole `listening` mission establishing it on three verbs. This
 *  lesson pays it ONE LINE and a pointer, because re-deriving a neighbour's
 *  finding is how nine consecutive paradigm lessons decay into one reference
 *  document. Doctrine §B.7: pointing at the repeat is the teaching. */
export const SINGULAR_PERSONS = 3;
export const SINGULAR_SPELLINGS = 2;
export const SINGULAR_UNIT = 'a2.13';

/** The pairs no ear question may offer against each other. A `listenChoose`
 *  whose two options differ ONLY by a member of one group has no correct answer
 *  and marking one right certifies a bug. a2.10 and a2.11 both enforce this
 *  with a list rather than a sentence in a report, because a sentence in a
 *  report cannot fail. */
export const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ['sais', 'sait'],
  ['connais', 'connaît'],
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE LINE THIS LESSON HANGS ON.
 *
 *  This is the brief's candidate B, tightened from a fact into a test. Doctrine
 *  §B.4 asks for a rule the learner can run in the half-second between subject
 *  and verb, and "does my sentence stop here?" is answerable in that time.
 *
 *  Eight words, so it fits inside an `xl` section's 12-word cap on every string.
 *
 *  ── Rejected, and the next author needs both ─────────────────────────────
 *
 *  A. "One is for what you know how to do, one is for who and where you know."
 *
 *     The brief's semantic candidate, and it is ALSO what the corpus already
 *     says on fr.a2.collegues.009. It breaks inside a week, on a sentence the
 *     learner will meet almost immediately:
 *
 *       Je sais où elle habite.     a PLACE, and it takes savoir
 *
 *     `où` is exactly the "where you know" the rule assigns to connaître, and
 *     the rule sends the learner to the wrong verb. It is also eighteen words,
 *     which no card in an xl section can hold.
 *
 *  B, verbatim. "connaître always takes a thing. savoir can take a whole
 *     sentence."
 *
 *     Right, and not yet a test. `can take` describes a permission rather than
 *     asking a question, and it covers only half of savoir: `je sais nager` is
 *     a bare verb rather than a whole sentence. Eleven words.
 *
 *  C. "Two verbs, and the next word picks which."
 *
 *     Six words and it states the problem instead of solving it. A learner who
 *     has not chosen the verb yet has not written the next word either.
 *
 *  WHAT SHIPS keeps B's syntax and makes it runnable: `stops` is the test and
 *  `keeps going` covers both of savoir's complements without naming either. */
export const REFRAME = 'connaître stops at a thing. savoir keeps going.';

/** Written out so the report and the next author have it. */
export const REFRAME_REJECTED = [
  { label: 'A, the semantic split', text: 'One is for what you know how to do, one is for who and where you know.', why: 'breaks on « Je sais où elle habite. », a place that takes savoir. It is also what fr.a2.collegues.009 already says in French, and it is eighteen words.' },
  { label: 'B verbatim, the brief\'s preference', text: 'connaître always takes a thing. savoir can take a whole sentence.', why: 'right, and it describes rather than tests. It also misses « je sais nager », where what follows is a bare verb and not a sentence.' },
  { label: 'C', text: 'Two verbs, and the next word picks which.', why: 'states the problem rather than solving it.' },
] as const;

/** What the learner does with the reframe, said once. */
export const THE_TEST = 'Ask one question before you pick: does my sentence stop here, or does it keep going?';

/** The two shapes, named so that every screen and every guard uses one wording
 *  rather than eight paraphrases of it. */
export const COMPLEMENTS: Record<Verb, { takes: string; never: string }> = {
  savoir: { takes: 'a verb, or a whole sentence', never: 'a plain name on its own' },
  connaître: { takes: 'a thing: a person, a place, a song, a street', never: 'a whole sentence' },
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP, AND WHY THE UNIT SITS WHERE IT DOES
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.14 declares a2.13 as its prerequisite for exactly one reason and this is
 *  it. `pouvoir` is the third leg of a choice English speakers never sort out:
 *
 *      je sais nager     a learned ability
 *      je peux nager     nothing is stopping me
 *
 *  a2.13 owns pouvoir and this lesson does NOT re-teach its paradigm. One recap
 *  line, one imported naming form, and the contrast. The batch refuses any
 *  pouvoir form outside the singular, so a drift into teaching it fails. */
export const CONTRAST_UNIT = 'a2.13';
export const POUVOIR_ID = 'fr.sons.verbes-essentiels.006';
/** The only forms of pouvoir this lesson may print. Anything else is a2.13's. */
export const POUVOIR_ALLOWED = ['peux', 'peut'] as const;
export const POUVOIR_FORBIDDEN = ['pouvons', 'pouvez', 'peuvent', 'pourrais', 'pourrait', 'pourrions', 'pourriez'] as const;

/** THE MINIMAL PAIR, INSIDE THE LESSON'S OWN FRAME. One word changed and
 *  nothing else moved, which is the only way the contrast is visible. */
export const TRAP_PAIR = { skill: 'fr.a2.verbes.381', permission: 'fr.a2.verbes.403' } as const;

/** THE SECOND TRAP: the sentence that cannot exist. Learners produce
 *  « Je connais où il habite. » by translating word for word out of English,
 *  and no amount of selecting the right verb in a multiple choice stops it.
 *  The rejection is drilled as free text, which is the only format that can
 *  catch a structurally wrong sentence a learner would otherwise produce. */
export const IMPOSSIBLE = {
  wrong: 'Je connais où il habite.',
  right: 'Je sais où il habite.',
  why: 'connaître has to land on a thing. « où il habite » is a whole sentence, so it cannot.',
} as const;

/** The clause openers that may never follow a connaître form in an authored
 *  correct sentence. `ne … que` is the published counterexample in real French
 *  and it is authored nowhere here; see the header, item 4. */
export const CLAUSE_OPENERS = ['que', 'où', 'quand', 'si', 'comment', 'pourquoi'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE HOUSE CHROME, AND THE DECISION a2.13 HANDED HERE
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.13 §1.4 and ledger §a2.13-4: the standard goals heading is
 *  `Ce que vous saurez faire` and the standard roundup heading is
 *  `Ce que vous savez faire`. BOTH ARE FORMS OF savoir. a2.13's own guard caught
 *  them, a2.13 replaced both with pouvoir to stay clear of this lesson, and it
 *  said explicitly that a2.14 has to decide whether the chrome is a collision.
 *
 *  THE DECISION: THE CHROME IS NOT A COLLISION, IT IS THE PAYOFF, AND THIS
 *  LESSON SHIPS IT.
 *
 *  Measured in the seed on 2026-08-12: 36 of 49 lessons head their goals with
 *  `Ce que vous saurez faire` and 34 head their roundup with `Ce que vous savez
 *  faire`. A learner reaching seq 8 has read one or the other at the top of
 *  every lesson they have ever finished.
 *
 *  And `Ce que vous savez faire` IS savoir followed by a verb. It is this
 *  lesson's own headline structure, sitting unexplained on a screen the learner
 *  has seen thirty-four times. The roundup names it, in one line, and that is
 *  worth more than any card this build could have written instead.
 *
 *  THE FUTURE FORM IS A DIFFERENT MATTER. `saurez` is a tense this lesson does
 *  not teach and must not appear to. It is permitted in EXACTLY ONE PLACE, the
 *  goals heading, where 36 lessons already put it, and the batch refuses it
 *  anywhere else including inside a `why` or a `note`. */
export const CHROME_DECISION = {
  exempt: false as const,
  shipped: true as const,
  goalsHeading: 'Ce que vous saurez faire',
  roundupHeading: 'Ce que vous savez faire',
  measuredInSeed: { goals: 36, roundup: 34, ofLessons: 49, date: '2026-08-12' },
} as const;

/** The future forms of savoir. Permitted ONLY inside CHROME_DECISION.goalsHeading. */
export const FUTURE_FORMS = ['saurai', 'sauras', 'saura', 'saurons', 'saurez', 'sauront'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS LESSON MUST NOT TEACH
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE PASSÉ COMPOSÉ MEANING SHIFT IS a2.05's, AT seq 16, AND IT IS GENUINELY
 *  INTERESTING, WHICH IS WHY THE GUARD IS BY NAME.
 *
 *      j'ai su      I found out            not "I knew"
 *      j'ai connu   I met                  not "I knew"
 *
 *  Present tense only. Every one of these is refused anywhere in the lesson,
 *  including in a `why`, a `note` and the reference sheet. */
export const PAST_FORMS = ['j\'ai su', 'ai su', 'as su', 'a su', 'avons su', 'avez su', 'ont su',
  'j\'ai connu', 'ai connu', 'as connu', 'a connu', 'avons connu', 'avez connu', 'ont connu',
  'connu', 'su'] as const;

/** The imperfect, which the corpus is full of and this lesson may not print. */
export const IMPERFECT_FORMS = ['savais', 'savait', 'savions', 'saviez', 'savaient',
  'connaissais', 'connaissait', 'connaissions', 'connaissiez', 'connaissaient'] as const;

/** THE FAMILY IS a2.15's, AT seq 9, WHICH IS THE VERY NEXT LESSON.
 *
 *  `reconnaître` is named ONCE, on one card, for its ENDINGS and nothing else.
 *  The principle that a prefix inherits a paradigm is a2.15's whole subject and
 *  this lesson does not touch it — and it must not, because reconnaître does
 *  NOT inherit connaître's syntax: it takes a clause and connaître never does.
 *  Header item 3. */
export const FAMILY_UNIT = 'a2.15';
export const FAMILY_MEMBER = { fr: 'reconnaître', id: 'fr.sons.verbes-essentiels.187', respell: 'ruh-koh-NEHTR' } as const;
/** Named nowhere. Left for a2.15 with reconnaître's principle. */
export const FAMILY_NOT_NAMED = ['paraître', 'apparaître', 'disparaître', 'naître'] as const;

/** Every unit this lesson names on a learner surface, so a rename breaks a test
 *  rather than leaving a dead reference on a card. */
export const CITED_UNITS = ['a2.01', 'a2.13', 'a2.15'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUTHORED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type ScRow = Omit<Item, 'drills'> & {
  /** Which person this row puts on screen, or null for a row outside the grid. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | null;
  /** Which paradigm this row belongs to, or null for the pouvoir rows. */
  verb: Verb | null;
  /** WHAT COMES AFTER THE VERB, which is the entire subject of the lesson.
   *  Authoring metadata, stripped by `toItem`: it exists so the guards can
   *  assert the rule rather than pattern-match the French. */
  complement: 'verb' | 'name' | 'thing' | 'clause' | 'none';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows measured at or under 16 letters through
 *  the real `dicteeMode`, because WORD mode hands every word over pre-spelled. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The 30 authored entries, in sequence order. */
export const SAVOIR_CONNAITRE: ScRow[] = [
  /* ── savoir, across the frame `nager` ─────────────────────────────────────
   *
   * .381, .382 and .383 CARRY THE SAME RESPELLING. sais, sais and sait are one
   * sound and two spellings across three persons, which is the shape a2.13
   * named on all three of its verbs. The batch asserts the three are EQUAL
   * rather than merely present.
   *
   * ALL SIX SPELL FROM LETTERS, measured. `nager` is the only complement tested
   * that manages it. */
  { id: 'fr.a2.verbes.381', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je sais nager.', en: 'I know how to swim.', ipa: '/ʒə sɛ na.ʒe/', respell: 'zhuh SEH nah-ZHAY', person: 'je', verb: 'savoir', complement: 'verb', tags: ['savoir', 'paradigm', 'singular', 'skill'], drills: SD, audioRef: null, version: 1, notes: 'A verb follows, so the sentence keeps going and savoir is the only verb that can carry it.' },
  { id: 'fr.a2.verbes.382', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu sais nager.', en: 'You know how to swim.', ipa: '/ty sɛ na.ʒe/', respell: 'tü SEH nah-ZHAY', person: 'tu', verb: 'savoir', complement: 'verb', tags: ['savoir', 'paradigm', 'singular', 'skill'], drills: S, audioRef: null, version: 1, notes: 'The same spelling as the je form and the same sound. Only the word in front separates them.' },
  { id: 'fr.a2.verbes.383', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il sait nager.', en: 'He knows how to swim.', ipa: '/il sɛ na.ʒe/', respell: 'eel SEH nah-ZHAY', person: 'il', verb: 'savoir', complement: 'verb', tags: ['savoir', 'paradigm', 'singular', 'skill'], drills: SD, audioRef: null, version: 1, notes: 'A -t instead of the -s, and not one sound different. a2.13 met the same shape on three verbs at once.' },
  { id: 'fr.a2.verbes.384', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous savons nager.', en: 'We know how to swim.', ipa: '/nu sa.vɔ̃ na.ʒe/', respell: 'noo sa-VOHⁿ nah-ZHAY', person: 'nous', verb: 'savoir', complement: 'verb', tags: ['savoir', 'paradigm', 'plural', 'nasal', 'skill'], drills: SD, audioRef: null, version: 1, notes: 'The stem goes to sav- and the ending is the ordinary -ons you have had since a2.01.' },
  { id: 'fr.a2.verbes.385', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous savez nager.', en: 'You know how to swim.', ipa: '/vu sa.ve na.ʒe/', respell: 'voo sa-VAY nah-ZHAY', person: 'vous', verb: 'savoir', complement: 'verb', tags: ['savoir', 'paradigm', 'plural', 'skill'], drills: SD, audioRef: null, version: 1, notes: 'Same stem as nous, and the ordinary -ez. Nothing about this form is irregular.' },
  { id: 'fr.a2.verbes.386', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils savent nager.', en: 'They know how to swim.', ipa: '/il sav na.ʒe/', respell: 'eel SAV nah-ZHAY', person: 'ils', verb: 'savoir', complement: 'verb', tags: ['savoir', 'paradigm', 'plural', 'skill'], drills: SD, audioRef: null, version: 1, notes: 'The -ent is silent, so what you hear is the v arriving at the end of the verb.' },

  /* ── connaître, across the frame `Paris` ─────────────────────────────────
   *
   * THE PLURAL CANNOT BE DICTATED AND NO OBJECT FIXES IT. `connaissons` is
   * eleven letters before anything follows it, so .390, .391 and .392 are over
   * the sixteen-letter limit on `Paris`, on `Rome`, and on every shorter object
   * tried. They keep every other drill. Measured through the real dicteeMode.
   *
   * `Paris` is a NAME and carries no gender, which is what makes it usable:
   * a gendered single-word row joins a1.03's measured ending population. */
  { id: 'fr.a2.verbes.387', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je connais Paris.', en: 'I know Paris.', ipa: '/ʒə kɔ.nɛ pa.ʁi/', respell: 'zhuh koh-NEH pa-REE', person: 'je', verb: 'connaître', complement: 'name', tags: ['connaitre', 'paradigm', 'singular', 'place'], drills: SD, audioRef: null, version: 1, notes: 'A name follows and the sentence stops there. That is the whole test.' },
  { id: 'fr.a2.verbes.388', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu connais Paris.', en: 'You know Paris.', ipa: '/ty kɔ.nɛ pa.ʁi/', respell: 'tü koh-NEH pa-REE', person: 'tu', verb: 'connaître', complement: 'name', tags: ['connaitre', 'paradigm', 'singular', 'place'], drills: SD, audioRef: null, version: 1, notes: 'Identical to the je form on paper and in the mouth, exactly as sais and sais are.' },
  { id: 'fr.a2.verbes.389', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il connaît Paris.', en: 'He knows Paris.', ipa: '/il kɔ.nɛ pa.ʁi/', respell: 'eel koh-NEH pa-REE', person: 'il', verb: 'connaître', complement: 'name', tags: ['connaitre', 'paradigm', 'singular', 'place'], drills: SD, audioRef: null, version: 1, notes: 'The circumflex arrives with the -t and changes nothing you say. It is the only place it appears in the paradigm.' },
  { id: 'fr.a2.verbes.390', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous connaissons Paris.', en: 'We know Paris.', ipa: '/nu kɔ.nɛ.sɔ̃ pa.ʁi/', respell: 'noo koh-neh-SOHⁿ pa-REE', person: 'nous', verb: 'connaître', complement: 'name', tags: ['connaitre', 'paradigm', 'plural', 'nasal', 'place'], drills: S, audioRef: null, version: 1, notes: 'A double s arrives in the plural and stays for all three. The circumflex does not.' },
  { id: 'fr.a2.verbes.391', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous connaissez Paris.', en: 'You know Paris.', ipa: '/vu kɔ.nɛ.se pa.ʁi/', respell: 'voo koh-neh-SAY pa-REE', person: 'vous', verb: 'connaître', complement: 'name', tags: ['connaitre', 'paradigm', 'plural', 'place'], drills: S, audioRef: null, version: 1, notes: 'This is the form you will be asked in. Somebody wanting to know whether you have been somewhere says it to you.' },
  { id: 'fr.a2.verbes.392', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils connaissent Paris.', en: 'They know Paris.', ipa: '/il kɔ.nɛs pa.ʁi/', respell: 'eel koh-NEHS pa-REE', person: 'ils', verb: 'connaître', complement: 'name', tags: ['connaitre', 'paradigm', 'plural', 'place'], drills: S, audioRef: null, version: 1, notes: 'The -ent is silent and the double s is what you hear. Nothing here is nasal.' },

  /* ── what savoir reaches: a verb, or a whole sentence ────────────────────
   *
   * .393 IS THE SENTENCE THAT KILLS THE SEMANTIC RULE. « où elle habite » is a
   * PLACE, and the semantic version of this lesson sends the learner to
   * connaître for it. The syntactic version sends them to savoir, correctly,
   * because the sentence keeps going. */
  { id: 'fr.a2.verbes.393', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je sais où elle habite.', en: 'I know where she lives.', ipa: '/ʒə sɛ u ɛl a.bit/', respell: 'zhuh SEH oo ell ah-BEET', person: 'je', verb: 'savoir', complement: 'clause', tags: ['savoir', 'clause', 'place'], drills: S, audioRef: null, version: 1, notes: 'A place, and it takes savoir. What follows is a whole sentence, and that is what decides it.' },
  { id: 'fr.a2.verbes.394', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je sais que c\'est loin.', en: 'I know it is far.', ipa: '/ʒə sɛ kə sɛ lwɛ̃/', respell: 'zhuh SEH kuh seh LWAⁿ', person: 'je', verb: 'savoir', complement: 'clause', tags: ['savoir', 'clause', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'A second sentence hangs off the first one. Only savoir can hold it.' },
  { id: 'fr.a2.verbes.395', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu sais cuisiner ?', en: 'Do you know how to cook?', ipa: '/ty sɛ kɥi.zi.ne/', respell: 'tü SEH kwee-zee-NAY', person: 'tu', verb: 'savoir', complement: 'verb', tags: ['savoir', 'skill'], drills: S, audioRef: null, version: 1, notes: 'A different verb behind savoir and nothing else moves. The rising voice makes it a question, as it did in a1.19.' },
  { id: 'fr.a2.verbes.396', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle sait conduire.', en: 'She knows how to drive.', ipa: '/ɛl sɛ kɔ̃.dɥiʁ/', respell: 'ell SEH kohⁿ-DWEER', person: 'il', verb: 'savoir', complement: 'verb', tags: ['savoir', 'skill', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'English says she can drive, and French does not use its can verb here at all.' },
  { id: 'fr.a2.verbes.397', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous savez où est la gare ?', en: 'Do you know where the station is?', ipa: '/vu sa.ve u ɛ la ɡaʁ/', respell: 'voo sa-VAY oo eh la GAR', person: 'vous', verb: 'savoir', complement: 'clause', tags: ['savoir', 'clause', 'place'], drills: S, audioRef: null, version: 1, notes: 'The single most useful sentence in the lesson, and it is a place taking savoir again.' },

  /* ── what connaître reaches: a thing, and then it stops ──────────────────
   *
   * Every one of these ENDS on its object. That is not a stylistic preference;
   * it is the rule, and the guards check it row by row rather than by reading. */
  { id: 'fr.a2.verbes.398', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je connais ce quartier.', en: 'I know this neighbourhood.', ipa: '/ʒə kɔ.nɛ sə kaʁ.tje/', respell: 'zhuh koh-NEH suh kar-TYAY', person: 'je', verb: 'connaître', complement: 'thing', tags: ['connaitre', 'thing', 'place'], drills: S, audioRef: null, version: 1, notes: 'A place you have walked around in. The sentence lands on it and finishes.' },
  { id: 'fr.a2.verbes.399', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu connais Marie ?', en: 'Do you know Marie?', ipa: '/ty kɔ.nɛ ma.ʁi/', respell: 'tü koh-NEH ma-REE', person: 'tu', verb: 'connaître', complement: 'name', tags: ['connaitre', 'thing', 'person'], drills: SD, audioRef: null, version: 1, notes: 'A person, so it is connaître. This is the question the scene at the start got wrong.' },
  { id: 'fr.a2.verbes.400', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous connaissons ce restaurant.', en: 'We know this restaurant.', ipa: '/nu kɔ.nɛ.sɔ̃ sə ʁɛs.tɔ.ʁɑ̃/', respell: 'noo koh-neh-SOHⁿ suh rehs-toh-RAHⁿ', person: 'nous', verb: 'connaître', complement: 'thing', tags: ['connaitre', 'thing', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'We have eaten there. Knowing a fact about it would be the other verb.' },
  { id: 'fr.a2.verbes.401', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il connaît bien la ville.', en: 'He knows the city well.', ipa: '/il kɔ.nɛ bjɛ̃ la vil/', respell: 'eel koh-NEH byaⁿ la VEEL', person: 'il', verb: 'connaître', complement: 'thing', tags: ['connaitre', 'thing', 'place', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'bien slides in before the thing and changes nothing. The sentence still lands on la ville.' },
  { id: 'fr.a2.verbes.402', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous connaissez cette chanson ?', en: 'Do you know this song?', ipa: '/vu kɔ.nɛ.se sɛt ʃɑ̃.sɔ̃/', respell: 'voo koh-neh-SAY set shahⁿ-SOHⁿ', person: 'vous', verb: 'connaître', complement: 'thing', tags: ['connaitre', 'thing', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'A song is a thing you have heard, so it is connaître. Knowing the words would be too.' },

  /* ── the third leg: pouvoir, from a2.13 ─────────────────────────────────
   *
   * .403 IS .381 WITH ONE WORD CHANGED. That is the entire teaching point of
   * the trap and it is why both sit on `nager`: the learner has to see that
   * nothing else in the sentence moved.
   *
   * Only `peux` and `peut` appear. a2.13 owns the paradigm and the batch
   * refuses every other form. */
  { id: 'fr.a2.verbes.403', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je peux nager.', en: 'I can swim.', ipa: '/ʒə pø na.ʒe/', respell: 'zhuh PUH nah-ZHAY', person: 'je', verb: null, complement: 'verb', tags: ['pouvoir', 'trap', 'permission'], drills: SD, audioRef: null, version: 1, notes: 'Nothing is stopping me. It says nothing at all about whether I ever learned.' },
  { id: 'fr.a2.verbes.404', kind: 'sentence', level: 'a2', theme: THEME, fr: 'On peut nager ici.', en: 'You can swim here.', ipa: '/ɔ̃ pø na.ʒe i.si/', respell: 'ohⁿ PUH nah-ZHAY ee-SEE', person: 'il', verb: null, complement: 'verb', tags: ['pouvoir', 'trap', 'permission', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Swimming is allowed here. Nobody is claiming anybody has been taught.' },
  { id: 'fr.a2.verbes.405', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je sais nager, mais je ne peux pas aujourd\'hui.', en: 'I know how to swim, but I cannot today.', ipa: '/ʒə sɛ na.ʒe mɛ ʒə nə pø pa o.ʒuʁ.dɥi/', respell: 'zhuh SEH nah-ZHAY, meh zhuh nuh puh pa oh-zhoor-DWEE', person: 'je', verb: 'savoir', complement: 'verb', tags: ['savoir', 'pouvoir', 'trap', 'skill'], drills: S, audioRef: null, version: 1, notes: 'Both verbs in one sentence, and they are not saying the same thing about the same swimmer.' },
  { id: 'fr.a2.verbes.406', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je connais ce quartier, mais je ne sais pas où est la gare.', en: 'I know this neighbourhood, but I do not know where the station is.', ipa: '/ʒə kɔ.nɛ sə kaʁ.tje mɛ ʒə nə sɛ pa u ɛ la ɡaʁ/', respell: 'zhuh koh-NEH suh kar-TYAY, meh zhuh nuh SEH pa oo eh la GAR', person: 'je', verb: null, complement: 'thing', tags: ['savoir', 'connaitre', 'trap', 'place'], drills: S, audioRef: null, version: 1, notes: 'One place, both verbs, and the choice is made twice by what comes after each one.' },

  /* ── the scene, in the learner\'s own words ─────────────────────────────
   *
   * THREE CORRECT SENTENCES AND ONE WRONG CONVERSATION. Nothing here is
   * ungrammatical: .408 is perfectly good French that answers a question nobody
   * asked, which is the A2 failure the brief describes.
   *
   * .409 DOES NOT USE AN OBJECT PRONOUN. « Non, je ne la connais pas encore. »
   * is what a French speaker says and it puts the thing IN FRONT of the verb,
   * where the reframe cannot see it. Object pronouns are seq 21 and later, so
   * the full noun is both the honest teaching order and the version that keeps
   * the rule true on every authored line. */
  { id: 'fr.a2.verbes.407', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu connais la nouvelle voisine ?', en: 'Have you met the new neighbour?', ipa: '/ty kɔ.nɛ la nu.vɛl vwa.zin/', respell: 'tü koh-NEH la noo-VELL vwah-ZEEN', person: 'tu', verb: 'connaître', complement: 'thing', tags: ['connaitre', 'scene', 'person'], drills: S, audioRef: null, version: 1, notes: 'A person follows, so it is connaître, and the question is whether you have met her.' },
  { id: 'fr.a2.verbes.408', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Oui, je sais qu\'elle habite ici.', en: 'Yes, I know that she lives here.', ipa: '/wi ʒə sɛ kɛl a.bit i.si/', respell: 'wee, zhuh SEH kell ah-BEET ee-SEE', person: 'je', verb: 'savoir', complement: 'clause', tags: ['savoir', 'scene', 'clause'], drills: S, audioRef: null, version: 1, notes: 'Correct French, and it answers a question nobody asked. It says you have heard about her, not that you have met her.' },
  { id: 'fr.a2.verbes.409', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Non, je ne connais pas encore la voisine.', en: 'No, I have not met the neighbour yet.', ipa: '/nɔ̃ ʒə nə kɔ.nɛ pa ɑ̃.kɔʁ la vwa.zin/', respell: 'nohⁿ, zhuh nuh koh-NEH pa ahⁿ-KOR la vwah-ZEEN', person: 'je', verb: 'connaître', complement: 'thing', tags: ['connaitre', 'scene', 'person', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The answer the question was asking for. It still lands on a person, even with the negative wrapped round the verb.' },

  /* ── the family, one card and no principle ──────────────────────────────
   *
   * a2.15 IS seq 9 AND IT OWNS THE PRINCIPLE. This row exists so the learner
   * recognises the endings when they meet them, and for nothing else. It is not
   * drilled, not quizzed as production, and it never appears in a sentence that
   * states the rule — because reconnaître does NOT obey the rule. */
  { id: 'fr.a2.verbes.410', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je reconnais cette chanson.', en: 'I recognise this song.', ipa: '/ʒə ʁə.kɔ.nɛ sɛt ʃɑ̃.sɔ̃/', respell: 'zhuh ruh-koh-NEH set shahⁿ-SOHⁿ', person: 'je', verb: null, complement: 'thing', tags: ['connaitre', 'family', 'recognition', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Same endings as connais, with three letters in front. What it can take after it is a2.15\'s business, not this lesson\'s.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED FACTS, ASSERTED RATHER THAN PRINTED
 * ═══════════════════════════════════════════════════════════════════════ */

/** Every authored row in the twelve-cell grid. */
export const FRAME_ROWS = SAVOIR_CONNAITRE.filter((r) => r.tags?.includes('paradigm'));

/** Rows the dictée names. Every one measured LETTERS mode through the real
 *  `dicteeMode`. THE CONNAÎTRE PLURAL IS ABSENT AND CANNOT BE ADDED. */
export const DICTATION_IDS = SAVOIR_CONNAITRE.filter((r) => r.drills.includes('dictation')).map((r) => r.id);

/** Respellings that DISPLAY a nasal vowel, so the superscript is load-bearing. */
export const VISIBLE_NASALS = SAVOIR_CONNAITRE.filter((r) => (r.respell ?? '').includes('ⁿ')).map((r) => r.id);

/** Rows where `hasPlainNasalFor` CANNOT see a missing superscript, so a later
 *  author removing one would ship silently. Corrections §6 asks every build to
 *  look for the shape and to assert the blindness itself, so the day the checker
 *  improves you find out rather than carrying a dead by-name list.
 *
 *  ══ A BLIND SPOT NOBODY HAS RECORDED, AND IT IS ABOUT THE FRENCH ══════════
 *
 *  Measured by `scripts/_a214_blindspot.ts`. Every superscript in this lesson
 *  was broken back to a plain n, one at a time, and the checker was asked
 *  whether it noticed: 13 SEEN, 1 MISSED.
 *
 *  The one it misses is `byaⁿ`, in « Il connaît bien la ville. », and the reason
 *  is not the one corrections §6 describes. `hasPlainNasalFor` runs its
 *  doubled-nasal rescue on the WHOLE FRENCH STRING:
 *
 *      if (/(?:nn|mm)/i.test(fr)) return false;
 *
 *  For a WORD that is right — `connaître` has a real /n/ and its respelling may
 *  legitimately end in one. For a SENTENCE it is not: ONE doubled nasal anywhere
 *  in the line switches the check off for every other word in it. And
 *  `connaître` is spelled with nn, so every sentence in this lesson that uses it
 *  is exempt.
 *
 *  It only bites where the respelling puts a BARE VOWEL LETTER before the n
 *  rather than one of the two-letter house spellings, because `hasPlainNasal`'s
 *  own list (AH OH EH UH EU AI OU) catches those on the first branch before the
 *  French is ever consulted. `SOHⁿ` is seen; `byaⁿ` is not.
 *
 *  The proof is one pair, identical but for the doubled n:
 *
 *      Il sait bien nager.        eel SEH byan nah-ZHAY        SEEN
 *      Il connaît bien la ville.  eel koh-NEH byan la VEEL     MISSED
 *
 *  a2.13 is NOT exposed: it uses the same bare-vowel spellings (`PAⁿ`, `MAⁿ`,
 *  `zhar-DAⁿ`) and not one of its French strings contains a doubled nasal. This
 *  is the first lesson in the band whose headline verb is spelled with nn, which
 *  is why it is the first to meet it.
 *
 *  THIS IS WIDER THAN CORRECTIONS §6, which records the blind spot as a nasal
 *  followed by a consonant inside the TOKEN. That shape is a property of the
 *  respelling. This one is a property of the FRENCH and it applies to the whole
 *  line. Both are real and neither implies the other. */
export const BLIND_NASALS: readonly string[] = ['fr.a2.verbes.401 [eel koh-NEH byan la VEEL]'];

/** The row the blind spot lands on, and its superscript asserted BY NAME, so a
 *  later author who drops it fails here rather than shipping a value the shared
 *  checker calls clean. Corrections §6's RESPELL_REPAIRS_INVISIBLE shape, applied
 *  to an authored row rather than to a repair. */
export const BLIND_NASAL_ROWS: readonly { id: string; token: string; why: string }[] = [
  {
    id: 'fr.a2.verbes.401',
    token: 'byaⁿ',
    why: 'the -ien of bien is a nasal vowel. hasPlainNasalFor cannot see it broken, because « connaît » puts an nn in the French and that returns false on the doubled-nasal branch before the per-word check runs.',
  },
];

/** THE FALSE-POSITIVE PATH, WHICH THIS LESSON DOES MEET, ONCE.
 *
 *  Corrections §6 asks every build to look for the other blind spot — a real
 *  /n/ that the checker reads as an unmarked nasal — and to report the absence
 *  if it does not find one. THIS BUILD FOUND ONE, in `la voisine`.
 *
 *      vwah-ZEEN   `voisine` ends in a vowel plus N at a token boundary, which
 *                  is the exact shape that flagged `jaune` and `scène`
 *
 *  It is NOT flagged, and the reason is worth recording: `hasPlainNasalFor`'s
 *  last line checks the FRENCH for a vowel after the n, and `voisine` has `ine`.
 *  The rescue added for `aime` and `dame` is doing its job on a word nobody had
 *  it in mind for. The masculine `le voisin` would be flagged and correctly so,
 *  which is why this lesson prints the feminine. */
export const FALSE_POSITIVE_CANDIDATES: readonly { fr: string; respell: string; flagged: false; why: string }[] = [
  { fr: 'la voisine', respell: 'vwah-ZEEN', flagged: false, why: 'a real /n/ before a silent -e. The vowel-after-n rescue in hasPlainNasalFor catches it correctly.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  CHANGES THIS BUILD MAKES TO ROWS IT DOES NOT OWN
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = { id: string; fr: string; from: string; to: string; why: string };

/** NASAL REPAIRS, VISIBLE. `hasPlainNasalFor` flags `from`, so the guard runs
 *  through the shared function exactly as a2.10 does.
 *
 *  MEASURED EMPTY. Every one of the twelve imported rows was checked and not one
 *  respells a nasal vowel with a plain n. That is unusual in this band and it is
 *  recorded rather than left as a silence: the reason is that eight of the
 *  twelve come from `verbes-essentiels` and `muettes`, which a2.01 and the sons
 *  band already went through. */
export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = [];

/** NASAL REPAIRS, INVISIBLE. `hasPlainNasalFor` does NOT flag `from`, so the
 *  guard has to run the opposite way (corrections §6): `from` unseen, `to`
 *  unseen, `to` carrying the superscript, asserted BY NAME.
 *
 *  ALSO EMPTY, and asserted empty. */
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = [];

/** THE ONE REPAIR THIS BUILD MAKES, AND IT IS NOT A NASAL REPAIR.
 *
 *  Invariants §9 says repair only what breaks a stated rule, and this does not
 *  break one. It is here for a TEACHING reason, which is a higher bar and is
 *  stated so the next author can disagree with it on the merits:
 *
 *  This lesson is the first screen in the corpus that prints the naming form
 *  directly above the conjugated singular. The singular is the naming form with
 *  its last two letters removed:
 *
 *      connaître  ->  connaît          koh-NEHTR  ->  koh-NEH
 *
 *  With the stored `koh-NETR` the respelling shows a vowel changing where the
 *  spelling shows nothing changing, which is the notation contradicting the
 *  paradigm on the same screen. `koh-NEHTR` is also the majority form in the
 *  corpus — 5 of the 8 -aître naming rows use EH, including both other rows for
 *  connaître itself and all three for reconnaître, which this lesson prints on
 *  the same screen. */
export const RESPELL_REPAIRS_STEM: readonly Repair[] = [
  {
    id: 'fr.sons.verbes-essentiels.048',
    fr: 'connaître',
    from: 'koh-NETR',
    to: 'koh-NEHTR',
    why: 'the lesson prints this directly above koh-NEH, and NETR -> NEH shows a vowel change the spelling does not have. koh-NEHTR is also the corpus majority and matches the reconnaître row on the same screen.',
  },
];

/** Every repair a screen may apply, as one list to a caller. */
export const ALL_REPAIRS: readonly Repair[] = [
  ...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE, ...RESPELL_REPAIRS_STEM,
];

/** Rows released into a deck that lack the drill the deck runs. a2.13 found this
 *  by checking a pair together rather than by reading: a released row with no
 *  `flashcard` is a hub entry that cannot be served. */
export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string; why: string }[] = [
  { id: 'fr.sons.nasales.110', fr: 'Tout le monde connaît le nom du champion.', add: 'flashcard', why: 'carries sentence and review only. This lesson releases it as published evidence that connaître lands on a thing, and a released row with no flashcard cannot be served by the hub.' },
  { id: 'fr.sons.voyelles.309', fr: 'Il connaît la vraie raison de son retard ce matin.', add: 'flashcard', why: 'the same, and it is the other half of the only respelled connaître evidence in the corpus.' },
];

/** RESPELLINGS ADDED WHERE THE DATABASE HOLDS NONE. Empty: every row this lesson
 *  imports already carries one, which is why the import list is twelve rows out
 *  of a candidate pool of two hundred and thirty. */
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [];

/** Imported or inspected rows this build looked at and did NOT change, each with
 *  the reason, so the next author does not re-litigate it. */
export const NOT_REPAIRED: readonly { id: string; respell: string; why: string }[] = [
  { id: 'fr.a2.communaute.050', respell: 'kon-NETR', why: 'THE BRIEF CALLS THIS A NASAL VIOLATION THE CHECKER CANNOT SEE. It is neither. connaître is /kɔ.nɛtʁ/ and the nn in the spelling means the vowel is a plain /ɔ/, so there is no nasal to close; hasPlainNasalFor returns false on its doubled-nasal branch, which is correct rather than blind. It is a variant that puts the syllable break one letter late, and invariants §9 says a variant is not a violation. Not imported and not touched.' },
  { id: 'fr.a1.famille.151', respell: 'koh-NEHTR', why: 'already the value this build repairs .048 TO, so nothing to do. Not imported because .048 carries the better gloss, "to know (people, places)", and the flashcard drill this lesson needs.' },
  { id: 'fr.sons.nasales.110', respell: 'TOO LUH MOHⁿD ko-NEH LUH NOHⁿ DÜ shahⁿ-PYOHⁿ', why: 'ko- against this build\'s koh- is a style variant and every nasal in it is already correct. It appears in the evidence act rather than beside the grid, so the two spellings are never on one screen.' },
  { id: 'fr.sons.voyelles.309', respell: 'EEL ko-NEH LA VREH reh-ZOHⁿ DUH SOHⁿ ruh-TAR SUH ma-TEHⁿ', why: 'the same, and every nasal in it carries the superscript already.' },
  { id: 'fr.sons.expressions-utiles.228', respell: 'ohn-nuh-say-zhah-MEH', why: 'GENUINELY BROKEN — `on` is a nasal vowel written with a plain n, and hasPlainNasalFor flags it. This build does not repair it because it does not display it: the phrase is savoir with no complement at all, which is outside the rule the lesson teaches. Recorded here so the next author who does display it knows it needs ohⁿ-nuh-.' },
];

/** Rows read and deliberately NOT imported, with the reason. Silence here is
 *  worth nothing to the next author; a recorded refusal is worth a probe. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.liaisons.057', fr: 'Ils se connaissent depuis vingt ans.', why: 'ITS RESPELLING CARRIES U+203F UNDERTIE, which renders as a low underscore on a Pixel 6 (the defect already recorded against sons.10, and the row a2.13 refused for the same reason). It is otherwise the best row in the corpus for the plural: it holds koh-NEHS, which is the value this build ships, so the house form was read off it before it was refused.' },
  { id: 'fr.a2.collegues.009', fr: '« Connaître » s\'utilise avec une personne ou un lieu, « savoir » avec un fait ou une compétence.', why: 'THE CORPUS ALREADY STATES THE REJECTED REFRAME. Two reasons to refuse it: it is French metalanguage on a learner surface, which invariants §8 forbids (instruction and context are English), and it teaches reframe A, which this build rejects because it sends the learner to connaître for « je sais où elle habite ». Worth knowing it is there.' },
  { id: 'fr.sons.verbes-essentiels.217', fr: 'paraître', why: 'the brief says name ONE of the family and leave the principle to a2.15. reconnaître is named; this is not.' },
  { id: 'fr.sons.expressions-utiles.228', fr: 'on ne sait jamais', why: 'savoir with no complement at all, so it sits outside the rule this lesson teaches, and its respelling closes a nasal with a plain n. Both are reasons to leave it where it is.' },
  { id: 'fr.sons.expressions-utiles.105', fr: 'qui sait', why: 'the same: a fixed phrase with nothing after the verb.' },
  { id: 'fr.a1.verbes-du-quotidien.099', fr: 'Je sais nager.', why: 'THE HEADLINE SENTENCE ALREADY EXISTS AND CARRIES NO RESPELLING, so it is a card the learner cannot say. The authored fr.a2.verbes.381 covers the cell with one. Different theme, so there is no flashcard-hub collision.' },
  { id: 'fr.a1.verbes-essentiels.088', fr: 'Je sais nager depuis mon enfance.', why: 'no respelling, and `depuis` plus a time is a2.18\'s.' },
  { id: 'fr.a1.verbes-essentiels.089', fr: 'Tu sais où sont les clés.', why: 'no respelling. The authored .393 and .397 carry the same shape with one.' },
  { id: 'fr.a1.pronoms-essentiels.086', fr: 'Elle sait où il travaille.', why: 'no respelling.' },
  { id: 'fr.a2.verbes-du-quotidien.041', fr: 'Nous savons que la réponse est correcte.', why: 'no respelling, and `la réponse` is the one object both verbs take, which is precisely the case this lesson does not open.' },
  { id: 'fr.a2.verbes-du-quotidien.042', fr: 'Nous connaissons ce restaurant depuis longtemps.', why: 'no respelling. The authored .400 is the same sentence without the time phrase, which belongs to a2.18.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  SHAPES THE GUARDS MATCH ON
 *
 *  `[^a-zà-ÿ]` rather than `\b` throughout: `\b` is ASCII-only in JavaScript, so
 *  a guard built on it silently never fires on an accented word. a2.02 shipped
 *  that bug and a2.12 found it. It matters more here than anywhere: `connaît`
 *  ends in `t` but `connaître` does not, and every form of both verbs sits
 *  beside an accent somewhere.
 * ═══════════════════════════════════════════════════════════════════════ */

/** Every present-tense form of savoir. */
export const SAVOIR_SHAPE = /(^|[^a-zà-ÿ])(savoir|sais|sait|savons|savez|savent)(?![a-zà-ÿ])/i;
/** Every present-tense form of connaître. NOTE it does not match `reconnaître`:
 *  the leading `[^a-zà-ÿ]` requires a non-letter before the form, and in
 *  `reconnais` the preceding character is `e`. That is deliberate — reconnaître
 *  obeys a different rule and must not be caught by connaître's guard. */
export const CONNAITRE_SHAPE = /(^|[^a-zà-ÿ])(connaître|connais|connaît|connaissons|connaissez|connaissent)(?![a-zà-ÿ])/i;

/** A connaître form followed immediately by a clause opener. THE SHAPE THE
 *  LESSON TEACHES THE LEARNER TO REJECT, and the only place it may appear is
 *  inside the errorSpot item that exists to reject it. */
export const CONNAITRE_CLAUSE_SHAPE = new RegExp(
  `(^|[^a-zà-ÿ])(connaître|connais|connaît|connaissons|connaissez|connaissent)\\s+(${CLAUSE_OPENERS.join('|')}|qu['’])(?![a-zà-ÿ])`, 'i');

/** Any form of pouvoir this lesson may not print. a2.13 owns the paradigm. */
export const POUVOIR_FORBIDDEN_SHAPE = new RegExp(
  `(^|[^a-zà-ÿ])(${POUVOIR_FORBIDDEN.join('|')})(?![a-zà-ÿ])`, 'i');

/** The passé composé of either verb, which is a2.05's at seq 16, and the
 *  imperfect, which nobody in batch 1 owns. */
export const PAST_SHAPE = new RegExp(
  `(^|[^a-zà-ÿ])(${[...IMPERFECT_FORMS, 'connu', 'su'].join('|')})(?![a-zà-ÿ])`, 'i');

/** The flat spellings. */
export const FLAT_SPELLING_SHAPE = new RegExp(
  `(^|[^a-zà-ÿ])(${FLAT_SPELLINGS.join('|')})(?![a-zà-ÿ])`, 'i');

/** The future of savoir, permitted ONLY in the goals heading. */
export const FUTURE_SHAPE = new RegExp(
  `(^|[^a-zà-ÿ])(${FUTURE_FORMS.join('|')})(?![a-zà-ÿ])`, 'i');

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS THE BUILD ASSERTS
 * ═══════════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════════════════
 *  TWO BUDGETS MEASURED ON GLASS, INHERITED FROM a2.13's DEVICE PASS
 *
 *  Neither is derived from any document and neither is visible to the schema,
 *  the density validator or any of this build's three guard layers. a2.13
 *  measured both on a Pixel 6 on 2026-08-12, AFTER its v1 had shipped and been
 *  published, and this lesson was carrying the same two defects until that work
 *  turned up uncommitted in the tree.
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE MISSION-ROW TITLE CEILING.
 *
 *  The missions hub draws the section title and a TYPE CHIP on one row and the
 *  chip wins, so a longer title ellipsises. The same titles render in FULL on
 *  the act checkpoint screen, so this is the hub row alone.
 *
 *  Four of this lesson's twenty-eight titles were over it at v2. */
export const MISSION_TITLE_MAX = 27;

/** THE groupDrill FIELDS THAT DO NOT RENDER AT `lg`.
 *
 *  `MissionRich.tsx:439` draws `fr`, `ipa` and `note` and nothing else, and
 *  `schema.ts:899` says so: `respell`, `en` and `silent` are the XL card's
 *  lines. EVERY groupDrill in this lesson is `lg`.
 *
 *  v2 carried 53 item cards with `respell` and `en` and no `note`, so a learner
 *  saw a bare French sentence with no pronunciation and no meaning on every one
 *  of them. The batch, the merge and the test now refuse both fields at this
 *  size, because their PRESENCE is the trap: a card that carries them looks
 *  complete in the source and renders empty. */
export const GROUPDRILL_LG_RENDERS = ['fr', 'ipa', 'note'] as const;
export const GROUPDRILL_LG_DROPS = ['respell', 'en', 'silent'] as const;
/** Fifty-three item cards across nine sections, all `lg`. */
export const EXPECTED_GROUPDRILL_ITEMS = 53;
export const EXPECTED_GROUPDRILLS = 9;

export const UNIT_ID = UNIT.id;
export const UNIT_SEQ = UNIT.seq;
export const LESSON_ID = 'a2.14.l1';
export const OWNED_ID_RANGE = ID_BLOCK;

export const EXPECTED_AUTHORED = 30;
export const EXPECTED_IMPORTED = 12;
export const EXPECTED_SOURCE_THEMES = 6;
/** Twelve cells: two verbs, six persons, two frames. */
export const EXPECTED_FRAME_ROWS = 12;
/** The two published sentences in the whole corpus that hold a connaître form
 *  AND a respelling AND no U+203F. There were three; one carries the tie. */
export const EXPECTED_EVIDENCE_ROWS = 2;
export const EXPECTED_VERBS = 2;
export const EXPECTED_PERSONS = 6;
export const EXPECTED_READ_ONLY = 11;
export const EXPECTED_SKILL_VERBS = 2;
/** Twenty-eight sections and six acts. Sized to the subject and argued for in
 *  the lesson file's header: four missions on the paradigm, eight on the Owns,
 *  five on production. */
export const EXPECTED_SECTIONS = 28;
export const EXPECTED_ACTS = 6;
export const EXPECTED_TRIGGERS = 6;
export const EXPECTED_DRILLS = 12;
export const EXPECTED_SHEETS = 1;
export const EXPECTED_TAPTABLES = 1;
export const EXPECTED_QUESTIONS = 36;
export const EXPECTED_ROUNDS = 6;
/** Ten dictée targets, every one measured LETTERS through the real dicteeMode.
 *  The connaître plural is absent and cannot be added; see header item 8. */
export const EXPECTED_DICTATION = 10;
export const EXPECTED_RESPELL_REPAIRS = 1;
export const EXPECTED_RESPELL_ADDITIONS = 0;
export const EXPECTED_DRILL_ADDITIONS = 2;
/** The act whose mission count must be the largest, alone. Doctrine §B.5. */
export const OWNS_ACT_ID = 'act3';
/** The reframe is carried verbatim this many times across the learner surface.
 *  Asserted against THIS constant, never against a figure derived from the
 *  lesson: a derived count compares the content to itself and passes on any
 *  rewording. Invariants §5. */
export const EXPECTED_REFRAME_USES = 19;

/** THE SECOND IMPOSSIBLE SENTENCE, in the plural, used by the round-3 errorSpot.
 *
 *  Named here rather than typed into the quiz, because the guard that forbids a
 *  connaître form in front of a clause opener has to permit it and a magic
 *  string in two files is how a permit list rots. */
export const IMPOSSIBLE_PLURAL = {
  wrong: 'Nous connaissons que le train est en retard.',
  right: 'Nous savons que le train est en retard.',
} as const;

/** EVERY PLACE A connaître FORM MAY STAND IN FRONT OF A CLAUSE OPENER, and
 *  there are exactly two strings. Anywhere else in the lesson is a build
 *  failure. See header item 4 for why the rule is stated absolutely here and
 *  is NOT absolute in French. */
export const IMPOSSIBLE_STRINGS: readonly string[] = [IMPOSSIBLE.wrong, IMPOSSIBLE_PLURAL.wrong];

/* ══════════════════════════════════════════════════════════════════════════
 *  READING THE CORPUS
 *
 *  Every screen reads its French, its gloss and its respelling THROUGH these,
 *  so no card restates a string this file already holds and a correction here
 *  moves every surface that quotes it.
 * ═══════════════════════════════════════════════════════════════════════ */

export const BY_ID: Map<string, ScRow> = new Map(SAVOIR_CONNAITRE.map((r) => [r.id, r]));

/** A corpus row as the `Item` the database stores. `person`, `verb` and
 *  `complement` are authoring metadata and have no column: they exist so the
 *  guards can assert the rule rather than pattern-match the French, and they
 *  must not reach Postgres. Stripped here, in one place. */
export function toItem(r: ScRow): Item {
  const { person, verb, complement, ...item } = r;
  void person; void verb; void complement;
  return item as Item;
}

const must = (id: string): ScRow => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.14: no authored row ${id}. A screen is quoting a row that does not exist.`);
  return r;
};

/** The French of an authored row. */
export const fr = (id: string): string => must(id).fr;
/** Its English gloss. */
export const en = (id: string): string => must(id).en;
/** Its respelling, bare. */
export const bare = (id: string): string => must(id).respell ?? '';
/** Its respelling in the brackets every card puts round one. */
export const sub = (id: string): string => `[${bare(id)}]`;

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = SAVOIR_CONNAITRE.map((r) => r.id);

/** The twelve grid ids, DERIVED from the rows rather than listed, so a row that
 *  loses its `paradigm` tag falls out of the grid, the deck and the speak deck
 *  at once. */
export const PARADIGM_IDS: string[] = FRAME_ROWS.map((r) => r.id);

/** The six ids of one verb's column, in person order. */
export const paradigmIds = (v: Verb): string[] =>
  FRAME_ROWS.filter((r) => r.verb === v).map((r) => r.id);

/** Every authored row whose complement is one of these. The guards walk these
 *  rather than re-parsing the French. */
export const rowsTaking = (...kinds: ScRow['complement'][]): ScRow[] =>
  SAVOIR_CONNAITRE.filter((r) => kinds.includes(r.complement));

/** A sentence with its trailing full stop removed, for quoting one INSIDE a
 *  question. Without it `${fr(id)}. And this one?` renders as "Je sais nager..
 *  And this one?", which a2.02 shipped to the seed and which was found by
 *  mutation-testing rather than by any guard. */
export const noStop = (s: string): string => s.replace(/\.$/, '');
