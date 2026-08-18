// The a2.22 corpus: what this lesson authors, what it imports, and the nine
// measurements that decided its shape.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a2.22 puts on a screen. The lesson body (pronominaux-lesson.ts) reads
// them FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  1. THE BRIEF'S HEADLINE VERB CANNOT CARRY THE LESSON, AND `fold()` IS WHY
// ══════════════════════════════════════════════════════════════════════════
//
// The brief gives the paradigm as `se lever` and prints all six cells of it.
// Measured through the real `fold()` in `answer.logic.ts` on 2026-08-15:
//
//     fold('je me lève') === fold('je me leve')     SAME
//
// `fold()` normalises to NFD and strips every combining mark, so NO typed,
// spotted or assembled surface can tell « lève » from « leve » (corrections §5).
// The brief's own quiz note says *« typeIn is the format, because both the
// pronoun and the verb ending must be produced »*. On `se lever` the app would
// accept the missing accent and tell the learner they spelled it right.
//
// **AND `se lever` IS NOT a2.09's VERB.** The brief says the stem change is
// « a2.09's pattern from seq 2 ». Measured against the shipped `a2.09.l1` body
// and against `THE_SEVENTEEN` in `verbes-er-exceptions-corpus.ts`:
//
//     "lever"  0 occurrences        "lève"  0 occurrences
//     THE_SEVENTEEN:  manger nager voyager ranger partager · commencer lancer
//                     effacer · appeler rappeler jeter · acheter geler ·
//                     préférer espérer répéter protéger
//
// a2.09 owns the MECHANISM — the stem vowel opens when the ending goes silent,
// in the four cells where it does — and it never names this verb. Its nearest
// member is `geler`, which is an -eler verb; `lever` is neither -eler nor -eter
// nor é_er. So the credit this lesson gives is to the mechanism, by name, and
// NOT to a claim that a2.09 taught the learner `lever`. See A209_CREDIT.
//
// **THE FRAME VERB IS `se laver`**, which has no stem change at all, and every
// one of its six cells is distinct under `fold()`:
//
//     je me lave / je me laves      DIFFER      the ending is testable
//     tu te laves / tu te lave      DIFFER
//     ils se lavent / ils se lave   DIFFER
//     je me lave / je lave          DIFFER      THE OWNS is testable
//     nous nous lavons / nous lavons DIFFER     the doubled word is testable
//
// So the whole Owns can be produced and scored. `se lever` becomes the SECOND
// verb, where the stem change is named and credited, and the learner is told in
// one line that two rules are running at once — which is what the brief asked
// for and could not have got from its own frame.
//
// ══════════════════════════════════════════════════════════════════════════
//  2. a1.25 ALREADY SHIPPED THE DOUBLED FORM, AND IT INSTALLED THE ERROR
// ══════════════════════════════════════════════════════════════════════════
//
// The brief says *« nous nous levons deserves its own moment. The doubled word
// is the single most disbelieved form in the lesson »* and treats it as a first
// sighting. Measured against the shipped `a1.25.l1` v2:
//
//     s12-persons  row 4, cell 2:  « Nous nous levons tard le dimanche. »
//     grammarIntroduced:  "Reflexive verbs as whole lexical items in three
//                          attested persons only, with the paradigm reserved
//                          for a2.22"
//
// **THE BODY SHOWS FOUR PERSONS AND THE CURRICULUM FIELD CLAIMS THREE.** The
// doubled form is on a shipped screen, in a tapTable cell, beside `nous prenons`
// which carries no pronoun at all. So this lesson's `nous` moment is a REVEAL of
// something already glimpsed, and it says so rather than pretending otherwise.
//
// **AND a1.25's TERM IS THE MISCONCEPTION THIS LESSON REMOVES.** Its
// `seIsPartOfTheVerb` reads *« About half the verbs in a French day arrive with
// a small word stuck to the front of them ... Learn it as part of the verb »*,
// and its `s11-se` card head is *« It is part of the word, not in front of it »*.
// That is a FIXED PARTICLE, which is exactly the error the brief names as the
// thing the reframe must reject. a1.25 was right to install it — at A1 the three
// attested persons are lexical items — and this lesson is where it is paid for.
//
// a1.25 hands the job over explicitly, on `s11-se`: *« What the small word does
// across every other person is a lesson of its own and it is a whole band from
// here. »* That sentence is quoted on this lesson's opening deck. See A125_HANDOFF.
//
// ══════════════════════════════════════════════════════════════════════════
//  3. THE NEGATION LINE THE BRIEF TELLS YOU TO QUOTE PREDICTS THE ERROR
// ══════════════════════════════════════════════════════════════════════════
//
// **This is the largest finding in the build and every layer guards it.**
//
// The brief says *« Quote whichever wording those lessons settled on »*. Read off
// the shipped bodies on 2026-08-15, and the three agree completely:
//
//     a1.18  reframe   « Wrap the verb, then ask what the verb was. »
//     a2.19  reframe   « Wrap the verb that changed, not the one carrying the
//                        meaning. »                            ← THE LINE
//     a2.05  quotes a2.19's line verbatim, and adds its own
//            « One verb, two words, and the small ones go in between. »
//     a2.21  quotes BOTH verbatim
//
// One string, three lessons, no disagreement. **And applied literally here it
// produces the trap.** a2.05 spells the line out as *« Ne in front of avoir, pas
// straight after it »*. The verb that changed is `lave`. Ne in front of `lave`
// is:
//
//     Je me ne lave pas.        ← the error, derived from the inherited rule
//     Je ne me lave pas.        ← correct
//
// So a lesson that quotes the line and stops has handed the learner a rule that
// generates the mistake. The extension is stated rather than assumed, and it
// falls out of this lesson's own reframe rather than contradicting a2.19:
//
//     NEGATION_EXTENSION
//     « Both words changed for the subject, so both go inside the wrap. »
//
// The pronoun changed for the subject too. That is the reframe, and it is also
// the test for what goes inside the wrap. The inherited line is quoted verbatim
// on the same screen and a2.19, a2.05 and a2.21 are all named.
//
// **A DEFECT FOUND WHILE READING a2.21 FOR THIS.** Its `s12-audible` ships
// « That is That is a2.19's line, quoted by a2.05 and again here. » — a doubled
// « That is » on a learner surface, in v3, past every gate. Reported, not fixed
// here: it is another lesson's body and this build does not own it.
//
// ══════════════════════════════════════════════════════════════════════════
//  4. THE VOCABULARY EXISTS. GRAMMAR ONLY, AND `routine` DOES NOT EXIST EITHER
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §2 predicts it and it holds for the sixth build running: **NOT ONE
// HEADWORD IS AUTHORED.** Every reflexive infinitive the lesson names already
// exists, and it exists FRAMED WITH `se`, which settles the shape question the
// brief left open (doctrine §E):
//
//     se lever      fr.a1.routines.001    [suh luh-VAY]      inSeed=Y
//     se coucher    fr.a1.routines.020    [suh koo-SHAY]     inSeed=Y
//     se laver      fr.a1.routines.028    [suh lah-VAY]      inSeed=Y
//     s'habiller    fr.a1.routines.012    [sah-bee-YAY]      inSeed=Y
//     se réveiller  fr.a1.routines.010    [suh ray-veh-YAY]  inSeed=Y
//     se doucher    fr.a1.routines.011    [suh doo-SHAY]     inSeed=Y
//     se reposer    fr.a1.routines.034    [suh ruh-poh-ZAY]  inSeed=Y
//     se dépêcher   fr.a1.routines.087    [suh day-peh-SHAY] inSeed=Y
//     se souvenir   fr.sons.verbes-essentiels.056  [SUH soov-NEER]
//     s'appeler     fr.a1.rencontres.105  [sah-PLAY]
//
// The bare forms mostly do NOT exist — `coucher`, `habiller`, `réveiller`,
// `dépêcher`, `reposer` are all absent in every article form — so the corpus
// stores these verbs framed and this build does not depart from that.
//
// **THE ONE BARE FORM THAT MATTERS DOES EXIST**, which is what makes the meaning
// contrast real rather than invented: `laver` is published three times, and
// `fr.a1.cuisine.228` « Je lave les légumes avant de cuisiner. » is in the seed.
//
// **THE UNIT DECLARES A THEME THAT HAS ZERO ROWS.** `content_units` for a2.22
// carries `themes: ['routine']`, singular. Measured 2026-08-15:
//
//     routine     0 published, 0 in seed      THEME DOES NOT EXIST
//     routines  339 published, 339 in seed    fr.a1 179 · fr.a2 65 · fr.b1 95
//
// The brief already flagged the name and it is confirmed. **What the brief does
// not say is that the declaration is inert**: `unit.themes` is declared at
// `schema.ts:1697` and validated at `schema.ts:3626`, and NO component reads it.
// It is invariants §1's authored-valid-invisible shape at the unit level. So it
// misleads no learner today and it is wrong, and `spine-drift.test.ts:105`
// pins spine and seed together, so the one-word fix is a two-file change that
// belongs to whoever owns the spine rather than to this lesson. See THEME_DEFECT.
//
// **THIS LESSON WRITES INTO `verbes`, NOT `routines`.** The ledger reserved
// `fr.a2.verbes.721..790` for a2.22, and a2.05, a2.20 and a2.21 all put their
// paradigm sentences there. Pouring forty grammar sentences into `routines`
// would swamp the theme a1.25 owns in the flashcard hub. Every routine word the
// lesson names is an IMPORTED id out of `routines`, and this build authors
// nothing in that theme.
//
// ══════════════════════════════════════════════════════════════════════════
//  5. THE CORPUS HAS FORMS AND NO PARADIGM, AND THE MISSING CELLS ARE THE OWNS
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §3, for the sixth build running, and the zero-count forms are
// again precisely the ones the lesson exists to teach. Measured over 27,925
// published sentences on 2026-08-15:
//
//     je me lève         14        nous nous levons    3
//     tu te lèves         1        vous vous levez     0     ← the pronoun that
//     il se lève          5        ils se lèvent       0     ← proves it moves
//     je me lave          1        je lave             1
//     je ne me lève pas   0        ← the trap has NO published evidence at all
//
// `vous` and `ils` are the two cells that prove the pronoun is not a particle,
// and the corpus has neither. The negative has none in any person. So the whole
// paradigm and the whole trap are authored, in ONE frame each, and the published
// rows are imported as evidence beside them rather than used as paradigm cells.
//
// ══════════════════════════════════════════════════════════════════════════
//  6. WHAT THE DICTÉE CAN TAKE, MEASURED THROUGH THE REAL `dicteeMode`
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §4: word mode hands every real word over pre-spelled, so a lesson
// about a spelling can only be tested in LETTERS mode, and the limit is 16
// letters. `se laver` is short enough that FIVE of the six persons fit and the
// negative fits in three:
//
//     Je me lave.               8   LETTERS      Nous nous lavons.     14  LETTERS
//     Tu te laves.              9   LETTERS      Vous vous lavez.      13  LETTERS
//     Il se lave.               8   LETTERS      Ils se lavent.        11  LETTERS
//     Je ne me lave pas.       13   LETTERS      Il ne se lave pas.    13  LETTERS
//     Nous ne nous lavons pas. 19   words        ← the one that does not fit
//     Nous nous levons tôt.    17   words        ← nor does this
//
// **THE NEGATIVE FITS IN EVERY PERSON THAT MATTERS**, which is the opposite of
// a2.19's finding and better than a2.05's: `ne` does not elide in front of any
// of these, because every form of the pronoun starts on a consonant. a2.05 §2
// needed `reduceNegative()` for the elision and a2.21 inherited it. **THIS
// LESSON NEEDS NEITHER.** `ne` never touches the subject and never elides, so
// the affirmative/negative pair check is a plain strip. That is a simplification
// worth handing forward, and a2.23 will lose it again the moment the auxiliary
// arrives: « je ne me suis pas lavé » elides nothing either, but « il ne s'est
// pas lavé » elides the PRONOUN rather than the `ne`.
//
// ══════════════════════════════════════════════════════════════════════════
//  7. WHAT THE APP CANNOT TEST HERE, AND THE ONE THING IT CAN
// ══════════════════════════════════════════════════════════════════════════
//
// **THE PRONOUN IS FULLY TYPEABLE AND IT IS THE OWNS.** `fold()` keeps every
// letter of `me`, `te`, `se`, `nous` and `vous`, so a dropped pronoun, a wrong
// pronoun and a misplaced `ne` are all distinguishable by a typed surface. This
// lesson gets the production question a2.09 lost.
//
// **NO EAR QUESTION MAY SEPARATE TWO CELLS OF `se laver`.** je/tu/il/ils are
// [zhuh muh LAHV], [tü tuh LAHV], [eel suh LAHV] and [eel suh LAHV]: the VERB is
// one sound in four of the six cells, exactly as a2.01's reframe says, and
// `il se lave` against `ils se lavent` is one sound end to end. `NO_EAR_QUESTION`
// holds every such pair and all three layers walk it (corrections §5).
//
// **THE ONE THING THE EAR CAN DO IS THE OWNS ITSELF.** « Je me lave. » against
// « Je lave. » is [zhuh muh LAHV] against [zhuh LAHV] — a whole syllable, and it
// is the error's own contrast. That is the only job `listenChoose` is given.
//
// ══════════════════════════════════════════════════════════════════════════
//  8. THE RESPELLINGS: ONE NASAL SHAPE, ALL OF IT VISIBLE, AND A FALSE POSITIVE
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §6 and §14.1 warn about a nasal followed by a consonant INSIDE a
// token, which the checker cannot see, and about mixed rows that are half
// visible. Measured through the real `hasPlainNasalFor` over every respelling
// this build authors or imports:
//
//     noo noo lah-VOHN    FLAGGED      noo noo lah-VOHⁿ    ok
//     noo noo luh-VOHN    FLAGGED      noo noo luh-VOHⁿ    ok
//
// **EVERY NASAL IN THIS LESSON IS VISIBLE AND THERE ARE NO MIXED ROWS.** The
// only nasal in the paradigm is the `-ons` ending, which ends a token because
// nothing follows it, so the checker sees all of them. There is no blind table
// and `RESPELL_REPAIRS_INVISIBLE` is asserted EMPTY rather than omitted, so the
// day a blind row arrives the assertion is already there.
//
// **AND THE FALSE POSITIVE IS REAL. CORRECTIONS §6 ASKS FOR THE ABSENCE TO BE
// REPORTED AND THIS BUILD FOUND TWO PRESENCES INSTEAD:**
//
//     fr.sons.verbes-essentiels.101  « se promener »  [suh prohm-NAY]  FLAGGED
//     fr.a1.animaux-domestiques.100  « promener »     [prohm-NAY]      FLAGGED
//
// `promener` is /pʁɔm.ne/. There is NO nasal vowel in it: the o is a real /ɔ/
// and the m is a real /m/, exactly the shape invariants §3 records for `jaune`
// and a2.21 §2 measured on `nous sommes`. A superscript there would teach a
// sound the word does not have. **Neither row is imported and neither is
// repaired** — a2.21 §3 measured that a `FALSE_POSITIVES` table checked against
// the checker's opinion rather than against the fixed value is a hole, and the
// cheapest way not to have the hole is not to carry the rows. `fr.a1.
// deplacements.148` holds the clean `[suh prom-NAY]` and is the row a screen
// would use if this lesson wanted `se promener`, which it does not.
//
// ══════════════════════════════════════════════════════════════════════════
//  9. THE RECIPROCAL DECISION, AND IT IS OWNED BY NOBODY AT ANY LEVEL
// ══════════════════════════════════════════════════════════════════════════
//
// The brief says *« Decide, and report: one line as context is defensible, a
// mission is not. »* Measured over all 76 unit bodies and the twenty A2 briefs
// on 2026-08-15, in corrections §7's order — briefs first, then
// grammarIntroduced, then the unit-body search:
//
//     units naming reflexive / pronominal / each other / reciprocal:
//       a2.22  seq 19   this lesson
//       a2.23  seq 20   the past, and its brief says *« If a2.22 left
//                       reciprocals out, leave them out. »*
//
// **NOBODY OWNS IT, AND a2.23 HAS MADE ITS DECISION DEPEND ON MINE.**
//
// The decision: **ONE LINE, RECEPTIVE, ON ONE CARD, AND NO MISSION.** It is
// named because the forms are identical to the ones being taught, so a learner
// who meets « ils se parlent » with only this lesson will read it as « they talk
// to themselves » and have no way to resolve it. It is not taught because it is
// in no canDo, it needs the indirect object a2.24 owns to be taught properly,
// and a mission on it would take weight off the Owns. Both directions are
// asserted: named exactly once, and reachable by no production surface, no quiz
// question and no drill. See RECIPROCAL and RECIPROCAL_DECISION.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ─── IDENTITY ──────────────────────────────────────────────────────────────
 *
 * Read out of `content_units` on 2026-08-15 by `corpus:probe --unit a2.22`.
 * Corrections §1: never from the brief. This brief had it right, byte for byte,
 * because it had already been corrected in place against the pre-flight.       */

export const UNIT = {
  id: 'a2.22',
  seq: 19,
  title: 'Pronominal (Reflexive) Verbs',
  sub: 'Les verbes pronominaux',
  canDo: 'Can describe their routine with reflexive verbs in the present',
  prereqUnitIds: ['a2.01'],
  /** EMPTY, measured. First build, so the lesson's version counter starts at 1. */
  lessonIds: [] as string[],
} as const;

export const LESSON_ID = 'a2.22.l1';
export const SHEET_ID = 'sheet-a2-22-pronominaux';

/** The unit's `themes` array, measured, and the theme it names. §4 above.
 *  Recorded rather than repaired: no component reads it, and
 *  `spine-drift.test.ts` pins the spine and the seed together, so changing it
 *  is a spine change and not a lesson change. */
export const THEME_DEFECT = {
  declared: 'routine',
  declaredRowsPublished: 0,
  real: 'routines',
  realRowsPublished: 339,
  readBy: 'no component; schema.ts:1697 declares it and schema.ts:3626 validates it',
  fix: "content_units a2.22 body.themes and author-full-curriculum-spine.ts both to ['routines']",
} as const;

/* ─── THE ID BLOCK ──────────────────────────────────────────────────────────
 *
 * Claimed by the a2.21 ledger amendment §0: *« a2.22 and a2.23 should take
 * .721..790 and .791..860. »* Taken as reserved.
 *
 * Ledger §10: the maximum id has been useless since a2.10.l2. THE ROW COUNT IS
 * THE ONLY SIGNAL and it must be `before + exactly what this build applies`.   */

export const ROW_COUNT_BEFORE = 528;
export const ID_BLOCK = { from: 'fr.a2.verbes.721', to: 'fr.a2.verbes.790' } as const;

/** a2.21's, immediately below. A RESERVATION ASSERTION MUST NOT SAY "AND IT IS
 *  EMPTY" (ledger, a2.20 §0). This one says no row of a2.22 is inside it. Its
 *  .697..720 tail is deliberately unbackfilled and this build does not take it. */
export const A221_BLOCK = { from: 'fr.a2.verbes.651', to: 'fr.a2.verbes.720' } as const;
export const A223_BLOCK = { from: 'fr.a2.verbes.791', to: 'fr.a2.verbes.860' } as const;

const idNum = (id: string): number => Number(id.split('.')[3] ?? '-1');
export const isMine = (id: string): boolean =>
  id.startsWith('fr.a2.verbes.') && idNum(id) >= idNum(ID_BLOCK.from) && idNum(id) <= idNum(ID_BLOCK.to);
export const isA221 = (id: string): boolean =>
  id.startsWith('fr.a2.verbes.') && idNum(id) >= idNum(A221_BLOCK.from) && idNum(id) <= idNum(A221_BLOCK.to);

export const THEME = 'verbes';

/* ─── THE NEIGHBOURS, BY UNIT ID ────────────────────────────────────────────
 *
 * Doctrine §B.7: from seq 14 onward, name the earlier instance BY UNIT ID.
 * a2.18 §6, a2.20 §5.4 and a2.21 §4.5: a guard comparing `namesUnit(text, CONST)`
 * renames both sides when the constant moves, so every guard in this build uses
 * a LITERAL and these constants are for the prose only.
 *
 * a2.21 §8: A REFRAME QUOTED FROM A NEIGHBOUR MUST BE READ OFF THE SHIPPED
 * LESSON. Every string below was read out of `seed.json` on 2026-08-15 and the
 * test re-reads all six off the seed rather than trusting this file.           */

/** a2.01, Les verbes en -ER, seq 1. THE PREREQUISITE. Its reframe is the reason
 *  four of the six cells of `se laver` are one sound, and this lesson pays it
 *  off in the place where the pronoun is the only thing left to hear. */
export const ER_UNIT = 'a2.01';
export const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';

/** a2.09, Les verbes en -ER : exceptions, seq 2. It owns the stem change and it
 *  does NOT own `lever`. §1 above. */
export const EXC_UNIT = 'a2.09';
export const A209_REFRAME = 'The spelling changes so the sound does not.';

/** a1.25, La routine quotidienne. It owns the routine vocabulary and the three
 *  attested persons, and it installed the fixed-particle framing this lesson
 *  removes. §2 above. */
export const ROUTINE_UNIT = 'a1.25';
export const A125_REFRAME = 'The parts of the day take le. Midi and minuit take nothing.';

/** a1.25's own hand-off, quoted VERBATIM off `s11-se` in the shipped body. This
 *  is the sentence that makes this lesson the answer to a question the learner
 *  was already told existed. */
export const A125_HANDOFF =
  'What the small word does across every other person is a lesson of its own and it is a whole band from here.';

/** a1.18, La négation, seq 18 of A1. The rule this lesson extends. */
export const NEGATION_UNIT = 'a1.18';
export const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';

/** a2.19, Le futur proche, seq 15. THE NEGATION LINE ORIGINATES HERE and a2.05
 *  and a2.21 both quote it verbatim. §3 above. */
export const FUTUR_UNIT = 'a2.19';
export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';

/** a2.05, Le passé composé avec avoir, seq 16. */
export const PASSE_UNIT = 'a2.05';
export const A205_REFRAME = 'One verb, two words, and the small ones go in between.';

/** a2.21, Le passé composé avec être, seq 18, immediately before. It states that
 *  reflexives take être and reserves them for a2.22 and a2.23 by name. */
export const ETRE_UNIT = 'a2.21';
export const A221_REFRAME = 'After être, the second word ends like a describing word.';

/** a2.23, Pronominaux au passé composé, seq 20, immediately after. The compound
 *  tense is its entire subject and not one form of it appears here. */
export const PAST_UNIT = 'a2.23';

/** a2.06 and a2.24, seq 21 and 22. The object pronouns proper. The forms overlap
 *  almost completely with this lesson's and the system is NOT explained. */
export const DIRECT_OBJECT_UNIT = 'a2.06';
export const INDIRECT_OBJECT_UNIT = 'a2.24';

/** sons.01, L'alphabet français, seq 1 of the sons track and THE FIRST LESSON IN
 *  THE PRODUCT. It ships « Je m'appelle Paul. » Measured: `m'appelle` appears in
 *  sons.01 (2), sons.03 (1), sons.07 (8) and a1.15 (1), and NOT in a1.01, which
 *  is what the brief claimed. The point survives the correction and is stronger:
 *  the learner has been saying a pronominal verb since the alphabet. */
export const ALPHABET_UNIT = 'sons.01';

/* ─── THE REFRAME ───────────────────────────────────────────────────────────
 *
 * Doctrine §B.4: an A2 reframe is a rule the learner runs while the sentence is
 * already moving. Test: could they apply it in the half-second between subject
 * and verb? This one is applied EXACTLY there, and it is also the procedure —
 * you have just said the subject, so say it again in the other shape.          */

export const REFRAME = 'The pronoun changes with the subject, because it is the subject.';

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'Reflexive verbs take an extra pronoun.',
    why: `THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right: it gives the learner a fixed particle, which is the error. It is also what ${unitRef('a1.25')} deliberately taught — « Learn it as part of the verb » — so shipping it here would restate the misconception instead of removing it.`,
  },
  {
    candidate: 'The action comes back to the subject.',
    why: 'True of the meaning and useless as a procedure: it says nothing about which word to say. It is also FALSE of a third of the lesson, because s\'appeler, se souvenir and se dépêcher have no reflexive meaning at all and the pronoun is still obligatory.',
  },
  {
    candidate: 'Store the small word with the verb.',
    why: `${Cap(unitRef('a1.25'))}\'s own term, correct at A1 where three persons are lexical items, and now the obstacle. Naming it as rejected is this lesson\'s opening move rather than a footnote.`,
  },
  {
    candidate: 'Me, te, se, nous, vous, se.',
    why: 'The table read out loud. It is a thing to memorise rather than a rule to run, and it hides the one fact that makes it derivable: the list is the subject pronouns in another shape.',
  },
];

/** How many times the reframe is authored. Invariants §5: assert against an
 *  EXPLICIT CONSTANT, never a figure derived from the lesson, because a derived
 *  count compares the content to itself and passes on any rewording. */
export const REFRAME_COUNT = 8;

/* ─── THE NEGATION EXTENSION ────────────────────────────────────────────────
 *
 * §3 above. The inherited line is quoted verbatim beside it and this is the
 * sentence that stops it generating the trap. It is a cross-lesson contract:
 * a2.23's brief says the negation wording must be the same string as a2.19,
 * a2.05, a2.21 and a2.22, so this pair is what that lesson inherits.           */

export const NEGATION_EXTENSION = 'Both words changed for the subject, so both go inside the wrap.';

/** The clean background a2.23 changes, worded here so that lesson can quote it
 *  rather than re-derive it. Its brief asks for « the agreement-free
 *  present-tense framing » by name. */
export const PRESENT_NO_AGREEMENT =
  'In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.';

/** The stem-change credit. §1: the MECHANISM is a2.09's and the verb is not. */
export const A209_CREDIT =
  `The vowel moves for the reason ${unitRef('a2.09')} gave, in the four cells where the ending goes silent. That is a different rule running at the same time as this one, and it is not part of carrying a pronoun.`;

/* ─── THE AUTHORED ROWS ─────────────────────────────────────────────────────*/

export type Person = 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | 'elle' | 'none';
export type Bucket =
  | 'paradigm' | 'contrast' | 'negative' | 'stem' | 'notreflexive'
  | 'reciprocal' | 'unseen' | 'talk';

export type Row = Omit<Item, 'drills'> & {
  drills: Item['drills'];
  person: Person;
  bucket: Bucket;
  /** The reflexive pronoun this row carries, or null for the two rows that
   *  deliberately carry none. Read by the guards rather than re-parsed. */
  clitic: 'me' | 'te' | 'se' | 'nous' | 'vous' | "m'" | "s'" | null;
};

const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const SR: Item['drills'] = ['sentence', 'roleplay', 'review'];
/** RECEPTIVE ONLY. No flashcard, no voiceflash, no dictation: the reciprocal row
 *  and the two transitive rows must not reach a drill that asks for production. */
const RO: Item['drills'] = ['sentence', 'review'];

const T = ['a2', 'pronominal', 'reflexive', 'present'];

export const PRONOMINAUX: Row[] = [
  /* ── A. THE PARADIGM. se laver, six cells, one frame, nothing else moving.
   *     §1: the frame verb is se laver because every cell is distinct under
   *     fold() and there is no stem change to confound the Owns.             */
  { id: 'fr.a2.verbes.721', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me lave.', en: 'I wash.', ipa: '/ʒə mə lav/', respell: 'zhuh muh LAHV', person: 'je', bucket: 'paradigm', clitic: 'me', tags: [...T, 'paradigm'], drills: SD, audioRef: null, version: 1, notes: 'The frame cell. Eight letters, so the dictée can take it in LETTERS mode.' },
  { id: 'fr.a2.verbes.722', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu te laves.', en: 'You wash.', ipa: '/ty tə lav/', respell: 'tü tuh LAHV', person: 'tu', bucket: 'paradigm', clitic: 'te', tags: [...T, 'paradigm'], drills: SD, audioRef: null, version: 1, notes: 'The verb is the same sound as the je cell. Only the two little words changed.' },
  { id: 'fr.a2.verbes.723', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il se lave.', en: 'He washes.', ipa: '/il sə lav/', respell: 'eel suh LAHV', person: 'il', bucket: 'paradigm', clitic: 'se', tags: [...T, 'paradigm'], drills: SD, audioRef: null, version: 1, notes: 'se is the form the naming word carries, which is why it looks like the default and is not.' },
  { id: 'fr.a2.verbes.724', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous nous lavons.', en: 'We wash.', ipa: '/nu nu la.vɔ̃/', respell: 'noo noo lah-VOHⁿ', person: 'nous', bucket: 'paradigm', clitic: 'nous', tags: [...T, 'paradigm', 'doubled'], drills: SD, audioRef: null, version: 1, notes: `THE DOUBLED WORD. Same word twice, two different jobs. ${Cap(unitRef('a1.25'))} already put it on a screen once.` },
  { id: 'fr.a2.verbes.725', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous vous lavez.', en: 'You wash.', ipa: '/vu vu la.ve/', respell: 'voo voo lah-VAY', person: 'vous', bucket: 'paradigm', clitic: 'vous', tags: [...T, 'paradigm', 'doubled'], drills: SD, audioRef: null, version: 1, notes: 'Doubled again, and the corpus has ZERO published sentences in this person. §5.' },
  { id: 'fr.a2.verbes.726', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils se lavent.', en: 'They wash.', ipa: '/il sə lav/', respell: 'eel suh LAHV', person: 'ils', bucket: 'paradigm', clitic: 'se', tags: [...T, 'paradigm'], drills: SD, audioRef: null, version: 1, notes: 'Identical to the il cell out loud, end to end. Also ZERO published sentences. §5, §7.' },

  /* ── B. THE MEANING CONTRAST. The required layout, and the reason the
   *     pronoun exists at all.                                               */
  { id: 'fr.a2.verbes.727', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je lave la voiture.', en: 'I wash the car.', ipa: '/ʒə lav la vwa.tyʁ/', respell: 'zhuh LAHV lah vwah-TÜR', person: 'je', bucket: 'contrast', clitic: null, tags: [...T, 'contrast', 'no-clitic'], drills: S, audioRef: null, version: 1, notes: 'THE SAME VERB WITH NO PRONOUN. Something else is being washed and it is named. Beside Je me lave. this is the whole meaning of the extra word.' },

  /* ── C. THE NEGATIVE. §3, §6. ne never elides here, in any person.         */
  { id: 'fr.a2.verbes.728', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je ne me lave pas.', en: 'I do not wash.', ipa: '/ʒə nə mə lav pa/', respell: 'zhuh nuh muh lahv PAH', person: 'je', bucket: 'negative', clitic: 'me', tags: [...T, 'negation'], drills: SD, audioRef: null, version: 1, notes: 'THE TRAP. ne goes in front of me, not in front of lave. Thirteen letters, so the dictée can take it.' },
  { id: 'fr.a2.verbes.729', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu ne te laves pas.', en: 'You do not wash.', ipa: '/ty nə tə lav pa/', respell: 'tü nuh tuh lahv PAH', person: 'tu', bucket: 'negative', clitic: 'te', tags: [...T, 'negation'], drills: S, audioRef: null, version: 1, notes: 'The pronoun starts on a consonant in every person, so ne stays whole throughout.' },
  { id: 'fr.a2.verbes.730', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il ne se lave pas.', en: 'He does not wash.', ipa: '/il nə sə lav pa/', respell: 'eel nuh suh lahv PAH', person: 'il', bucket: 'negative', clitic: 'se', tags: [...T, 'negation'], drills: SD, audioRef: null, version: 1, notes: 'Thirteen letters. The dictée runs this one against the affirmative.' },
  { id: 'fr.a2.verbes.731', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous ne nous lavons pas.', en: 'We do not wash.', ipa: '/nu nə nu la.vɔ̃ pa/', respell: 'noo nuh noo lah-vohⁿ PAH', person: 'nous', bucket: 'negative', clitic: 'nous', tags: [...T, 'negation', 'doubled'], drills: S, audioRef: null, version: 1, notes: 'NINETEEN LETTERS, so dicteeMode puts it in word mode and it carries no dictation drill. §6.' },

  /* ── D. THE STEM CHANGE. se lever, six cells, tôt frame. Corrections §4
   *     calls reusing a neighbour's frame word a feature; a2.10, a2.10.l2 and
   *     a2.21 all use tôt.                                                   */
  { id: 'fr.a2.verbes.732', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me lève tôt.', en: 'I get up early.', ipa: '/ʒə mə lɛv to/', respell: 'zhuh muh LEHV TOH', person: 'je', bucket: 'stem', clitic: 'me', tags: [...T, 'stem-change'], drills: S, audioRef: null, version: 1, notes: 'The vowel moved and the pronoun did what it always does. Two rules, one sentence.' },
  { id: 'fr.a2.verbes.733', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu te lèves tôt.', en: 'You get up early.', ipa: '/ty tə lɛv to/', respell: 'tü tuh LEHV TOH', person: 'tu', bucket: 'stem', clitic: 'te', tags: [...T, 'stem-change'], drills: S, audioRef: null, version: 1, notes: `Moved. The ending is silent here, which is the condition ${unitRef('a2.09')} gave.` },
  { id: 'fr.a2.verbes.734', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il se lève tôt.', en: 'He gets up early.', ipa: '/il sə lɛv to/', respell: 'eel suh LEHV TOH', person: 'il', bucket: 'stem', clitic: 'se', tags: [...T, 'stem-change'], drills: S, audioRef: null, version: 1, notes: 'Moved.' },
  { id: 'fr.a2.verbes.735', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous nous levons tôt.', en: 'We get up early.', ipa: '/nu nu lə.vɔ̃ to/', respell: 'noo noo luh-VOHⁿ TOH', person: 'nous', bucket: 'stem', clitic: 'nous', tags: [...T, 'stem-change', 'stem-still'], drills: S, audioRef: null, version: 1, notes: 'STILL. The ending is a syllable of its own, so the stem is not the last thing heard. Seventeen letters, word mode, no dictation drill.' },
  { id: 'fr.a2.verbes.736', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous vous levez tôt.', en: 'You get up early.', ipa: '/vu vu lə.ve to/', respell: 'voo voo luh-VAY TOH', person: 'vous', bucket: 'stem', clitic: 'vous', tags: [...T, 'stem-change', 'stem-still'], drills: SD, audioRef: null, version: 1, notes: 'STILL, and sixteen letters exactly, which is the last value dicteeMode leaves in LETTERS mode.' },
  { id: 'fr.a2.verbes.737', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils se lèvent tôt.', en: 'They get up early.', ipa: '/il sə lɛv to/', respell: 'eel suh LEHV TOH', person: 'ils', bucket: 'stem', clitic: 'se', tags: [...T, 'stem-change'], drills: SD, audioRef: null, version: 1, notes: 'Moved, and identical to the il cell out loud. Fourteen letters.' },

  /* ── E. THE se THAT IS NOT REFLEXIVE. The second trap, and the opener.     */
  { id: 'fr.a2.verbes.738', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous nous dépêchons.', en: 'We are hurrying.', ipa: '/nu nu de.pɛ.ʃɔ̃/', respell: 'noo noo day-peh-SHOHⁿ', person: 'nous', bucket: 'notreflexive', clitic: 'nous', tags: [...T, 'not-reflexive', 'doubled'], drills: S, audioRef: null, version: 1, notes: 'Nobody is hurrying themselves. The pronoun is obligatory and means nothing.' },
  { id: 'fr.a2.verbes.739', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu te dépêches.', en: 'You are hurrying.', ipa: '/ty tə de.pɛʃ/', respell: 'tü tuh day-PESH', person: 'tu', bucket: 'notreflexive', clitic: 'te', tags: [...T, 'not-reflexive'], drills: SD, audioRef: null, version: 1, notes: 'It still moves for the subject even though it carries no meaning, which is the point of the group.' },

  /* ── F. THE RECIPROCAL. ONE ROW, RECEPTIVE ONLY. §9.                       */
  { id: 'fr.a2.verbes.740', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils se parlent tous les jours.', en: 'They talk to each other every day.', ipa: '/il sə paʁl tu le ʒuʁ/', respell: 'eel suh PARL too lay ZHOOR', person: 'ils', bucket: 'reciprocal', clitic: 'se', tags: [...T, 'reciprocal', 'receptive'], drills: RO, audioRef: null, version: 1, notes: 'NAMED, NOT TAUGHT. The third sense of se, in no unit at any level. Receptive drills only; no flashcard, no voiceflash, no dictation.' },

  /* ── G. VERBS THE PARADIGM NEVER SHOWED. Doctrine §B.1: the mission that
   *     makes the learner produce the eleventh form has taught the system.   */
  { id: 'fr.a2.verbes.741', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle se couche tard.', en: 'She goes to bed late.', ipa: '/ɛl sə kuʃ taʁ/', respell: 'ell suh KOOSH TAR', person: 'elle', bucket: 'unseen', clitic: 'se', tags: [...T, 'unseen'], drills: S, audioRef: null, version: 1, notes: 'se coucher, built rather than shown.' },
  { id: 'fr.a2.verbes.742', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous vous couchez tôt.', en: 'You go to bed early.', ipa: '/vu vu ku.ʃe to/', respell: 'voo voo koo-SHAY TOH', person: 'vous', bucket: 'unseen', clitic: 'vous', tags: [...T, 'unseen', 'doubled'], drills: S, audioRef: null, version: 1, notes: 'The doubled shape on a verb the table never carried.' },
  { id: 'fr.a2.verbes.743', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous nous reposons le soir.', en: 'We rest in the evening.', ipa: '/nu nu ʁə.po.zɔ̃ lə swaʁ/', respell: 'noo noo ruh-poh-ZOHⁿ luh SWAHR', person: 'nous', bucket: 'unseen', clitic: 'nous', tags: [...T, 'unseen', 'doubled'], drills: S, audioRef: null, version: 1, notes: 'se reposer, and the time expression is a1.25s.' },
  { id: 'fr.a2.verbes.744', kind: 'sentence', level: 'a2', theme: THEME, fr: "Je m'habille vite.", en: 'I get dressed quickly.', ipa: '/ʒə ma.bij vit/', respell: 'zhuh mah-BEEY VEET', person: 'je', bucket: 'unseen', clitic: "m'", tags: [...T, 'unseen', 'elision'], drills: SD, audioRef: null, version: 1, notes: 'THE PRONOUN ELIDES. me becomes m before a vowel, which is sons.07s rule arriving on a word the learner now has to choose.' },
  { id: 'fr.a2.verbes.745', kind: 'sentence', level: 'a2', theme: THEME, fr: "Ils s'habillent vite.", en: 'They get dressed quickly.', ipa: '/il sa.bij vit/', respell: 'eel sah-BEEY VEET', person: 'ils', bucket: 'unseen', clitic: "s'", tags: [...T, 'unseen', 'elision'], drills: S, audioRef: null, version: 1, notes: 'And se becomes s. The same rule, and it is the only thing the pronoun ever does besides change.' },
  { id: 'fr.a2.verbes.746', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu te réveilles tard.', en: 'You wake up late.', ipa: '/ty tə ʁe.vɛj taʁ/', respell: 'tü tuh ray-VEY TAR', person: 'tu', bucket: 'unseen', clitic: 'te', tags: [...T, 'unseen'], drills: S, audioRef: null, version: 1, notes: `se réveiller, and ${unitRef('a1.25')} taught the je cell of it as a whole phrase.` },

  /* ── H. THE ROLE PLAY. Every user turn is a corpus row, as a2.21's are; the
   *     alternates are rows this lesson has already taught, so a learner can
   *     answer with anything the lesson gave them.                           */
  { id: 'fr.a2.verbes.747', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me réveille à six heures.', en: 'I wake up at six.', ipa: '/ʒə mə ʁe.vɛj a si zœʁ/', respell: 'zhuh muh ray-VEY ah see ZUHR', person: 'je', bucket: 'talk', clitic: 'me', tags: [...T, 'talk'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 1.' },
  { id: 'fr.a2.verbes.748', kind: 'sentence', level: 'a2', theme: THEME, fr: "Je me douche et je m'habille.", en: 'I shower and get dressed.', ipa: '/ʒə mə duʃ e ʒə ma.bij/', respell: 'zhuh muh DOOSH ay zhuh mah-BEEY', person: 'je', bucket: 'talk', clitic: 'me', tags: [...T, 'talk', 'elision'], drills: SR, audioRef: null, version: 1, notes: `Role play turn 2. Two pronominal verbs in one sentence, one of them elided. ${Cap(unitRef('a1.25'))} ships the same shape.` },
  { id: 'fr.a2.verbes.749', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous nous levons à la même heure.', en: 'We get up at the same time.', ipa: '/nu nu lə.vɔ̃ a la mɛm œʁ/', respell: 'noo noo luh-VOHⁿ ah lah mem UHR', person: 'nous', bucket: 'talk', clitic: 'nous', tags: [...T, 'talk', 'doubled'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 3. The doubled form produced rather than read.' },
  { id: 'fr.a2.verbes.750', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Non, je ne me couche pas tard.', en: 'No, I do not go to bed late.', ipa: '/nɔ̃ ʒə nə mə kuʃ pa taʁ/', respell: 'nohⁿ, zhuh nuh muh koosh pah TAR', person: 'je', bucket: 'talk', clitic: 'me', tags: [...T, 'talk', 'negation'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 4. The negative, on a verb the paradigm never carried.' },
  { id: 'fr.a2.verbes.751', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils se dépêchent le matin.', en: 'They hurry in the morning.', ipa: '/il sə de.pɛʃ lə ma.tɛ̃/', respell: 'eel suh day-PESH luh mah-TAHⁿ', person: 'ils', bucket: 'talk', clitic: 'se', tags: [...T, 'talk', 'not-reflexive'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 5, and it is one of the ones that is not reflexive at all.' },
];

/* ─── DERIVED LISTS, so every layer walks one array ─────────────────────────*/

export const BY_ID: ReadonlyMap<string, Row> = new Map(PRONOMINAUX.map((r) => [r.id, r]));
export const AUTHORED_IDS: string[] = PRONOMINAUX.map((r) => r.id);

export const rowById = (id: string): Row => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${Cap(unitRef('a2.22'))}: no authored row ${id}. The corpus file is the source of truth and it does not have this id.`);
  return r;
};

export const bucketIds = (b: Bucket): string[] => PRONOMINAUX.filter((r) => r.bucket === b).map((r) => r.id);
export const personId = (b: Bucket, p: Person): string => {
  const r = PRONOMINAUX.find((x) => x.bucket === b && x.person === p);
  if (!r) throw new Error(`${Cap(unitRef('a2.22'))}: no ${b} row for ${p}.`);
  return r.id;
};

/** THE SIX CELLS, in learner order, for the layout the brief requires the test
 *  to assert form by form. */
export const PERSONS: readonly Person[] = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
export const PARADIGM_IDS: string[] = PERSONS.map((p) => personId('paradigm', p));
export const STEM_IDS: string[] = PERSONS.map((p) => personId('stem', p));

/** The subject pronoun and the reflexive pronoun, side by side. THE REFRAME IS
 *  THIS TABLE: every reflexive form is the subject in another shape, and `nous`
 *  and `vous` do not change at all, which is why they look like typos. */
export const CLITIC_TABLE: readonly { subject: string; clitic: string; same: boolean }[] = [
  { subject: 'je', clitic: 'me', same: false },
  { subject: 'tu', clitic: 'te', same: false },
  { subject: 'il', clitic: 'se', same: false },
  { subject: 'nous', clitic: 'nous', same: true },
  { subject: 'vous', clitic: 'vous', same: true },
  { subject: 'ils', clitic: 'se', same: true },
];

/** The two cells where the word is repeated, which is the disbelieved shape. */
export const DOUBLED: readonly string[] = ['nous', 'vous'];

/* ─── THE FOUR-AND-TWO SPLIT, which is a2.09's condition ────────────────────*/

/** The cells where `lever`'s stem vowel moves, and the two where it does not.
 *  a2.09: the stem opens in the four cells where the ending goes silent. On this
 *  verb those four are exactly je, tu, il and ils. */
export const STEM_MOVED: readonly Person[] = ['je', 'tu', 'il', 'ils'];
export const STEM_STILL: readonly Person[] = ['nous', 'vous'];

/* ─── WHAT NO EAR QUESTION MAY SEPARATE ────────────────────────────────────
 *
 * Corrections §5: a `listenChoose` offering two members of one homophone group
 * has no correct answer, and marking one right certifies a bug. The verb is one
 * sound in four of the six cells of `se laver`, so the pairs below are one sound
 * END TO END and no ear question may offer two of them together.               */

export const HOMOPHONE_GROUPS: readonly (readonly string[])[] = [
  // il and ils are one sound, and so are lave and lavent.
  ['Il se lave.', 'Ils se lavent.'],
  ['Il se lève tôt.', 'Ils se lèvent tôt.'],
  ['Il ne se lave pas.', 'Ils ne se lavent pas.'],
];

/** The one contrast the ear CAN do, and it is the Owns. A whole syllable. */
export const AUDIBLE_CONTRAST = {
  with: 'fr.a2.verbes.721',
  without: 'fr.a2.verbes.727',
  claim: 'One is three syllables and the other is two. This is the only difference in the lesson you can hear, and it is the one that changes what the sentence is about.',
} as const;

/* ─── THE SCENE ────────────────────────────────────────────────────────────
 *
 * Doctrine §B.2: an A2 scene opens on somebody who started a sentence they could
 * not finish. NOT published as corpus rows: `SCENE_ERROR` is wrong French and a
 * published row is a flashcard.
 *
 * a1.25 already ships this error abstractly, on `s16-errors`: « Je lever à sept
 * heures. » against « Je me lève à sept heures. », with the why *« Dropping it
 * leaves a verb that means doing the thing to something else, and a listener
 * will wait for you to say what. »* This scene is that sentence happening, under
 * load, to somebody who knows the rule and loses it mid-utterance. a1.25 is
 * named on the card so it reads as a payoff rather than a repeat.              */

export const SCENE_ERROR = 'Je lève à sept heures.';
export const SCENE_ERROR_EN = 'I lift at seven.';
export const SCENE_RIGHT = 'Je me lève à sept heures.';
export const SCENE_STALL = 'Et après, je... je douche...';
export const SCENE_STALL_EN = 'And then, I... I shower...';

/** What a1.25 already said about this error, quoted so the scene credits it. */
export const A125_ERROR_CLAIM =
  'Dropping it leaves a verb that means doing the thing to something else, and a listener will wait for you to say what.';

/* ─── THE RECIPROCAL DECISION ──────────────────────────────────────────────*/

export const RECIPROCAL_ID = 'fr.a2.verbes.740';
export const RECIPROCAL_DECISION = {
  decision: 'named once, receptive, no mission, no quiz question, no production surface',
  ownedBy: 'nobody, at any level, measured over all 76 unit bodies and the twenty A2 briefs',
  why: `The forms are identical to the ones being taught, so a learner meeting « ils se parlent » with only this lesson reads it as « they talk to themselves » and cannot resolve it. Naming it costs one card. Teaching it needs the indirect object ${unitRef('a2.24')} owns.`,
  handsTo: `${Cap(unitRef('a2.23'))}, whose brief says: if ${unitRef('a2.22')} left reciprocals out, leave them out`,
} as const;

/* ─── WHAT IS DEFERRED, BY UNIT ID ─────────────────────────────────────────*/

/** The compound tense. NOT ONE FORM of it appears anywhere in this lesson, and
 *  the guards walk every surface rather than only the production ones, because
 *  the brief is right that a compound form in an example is still a leak. */
export const PAST_DEFERRAL =
  'Every one of these has a past, and it does something no other verb does. That is the next lesson.';

/** The object pronouns. The forms overlap almost completely and the system is
 *  NOT explained. Scoped to production surfaces, as the brief asks. */
export const OBJECT_DEFERRAL =
  'These same little words do a second job later, standing in for a thing rather than pointing back at the subject. Two lessons cover that and this one does not touch it.';

/** Every string a production surface must not contain, because it would be
 *  explaining the object-pronoun system rather than the reflexive use. */
export const OBJECT_TERMS: readonly string[] = [
  'direct object', 'indirect object', 'object pronoun', 'stands in for',
  'replaces the noun', 'replaces a noun',
];

/* ─── COMPOUND-TENSE MARKERS, for the guard ────────────────────────────────
 *
 * Corrections §14.4: A SHAPE BUILT OUT OF FRENCH MORPHOLOGY WILL FIRE ON THE
 * ENGLISH. a2.17's compound guard matched « ...ON A WORD YOU had not learned »
 * because `on` is a French pronoun and `a` a French auxiliary. So this guard
 * requires a REFLEXIVE AUXILIARY CLUSTER — a pronoun plus a form of être — and
 * not merely an auxiliary-shaped word. The English sentence that broke a2.17 is
 * in the merge's MUST_NOT_FIRE list.
 *
 * Corrections §14.3: the house word boundary excludes the apostrophe, so a shape
 * using it cannot see `s'est` or `m'étais`. These are matched with the
 * apostrophe dropped from the LEFT boundary only.                              */

export const COMPOUND_CLUSTERS: readonly string[] = [
  'me suis', 't\'es', 'tu es lavé', 's\'est', 'nous sommes lavés', 'vous êtes lavés',
  'se sont', 'me suis lavé', 's\'est levé', 'se sont levés', 'nous nous sommes',
  'vous vous êtes', 'je me suis', 'il s\'est', 'elle s\'est', 'ils se sont',
];

/** Past participles of every verb this lesson names. None may appear anywhere. */
export const PARTICIPLES: readonly string[] = [
  'lavé', 'lavée', 'lavés', 'lavées',
  'levé', 'levée', 'levés', 'levées',
  'couché', 'couchée', 'couchés', 'couchées',
  'reposé', 'reposée', 'reposés', 'reposées',
  'habillé', 'habillée', 'habillés', 'habillées',
  'réveillé', 'réveillée', 'réveillés', 'réveillées',
  'dépêché', 'dépêchée', 'dépêchés', 'dépêchées',
  'douché', 'douchée', 'douchés', 'douchées',
  'parlé', 'appelé', 'brossé', 'souvenu',
];

/* ─── THE IMPORTED ROWS ────────────────────────────────────────────────────
 *
 * §4: NOT ONE HEADWORD IS AUTHORED. Every reflexive infinitive this lesson
 * names already exists, framed with `se`, and every routine word on a screen is
 * an imported id out of `routines` or a theme beside it.
 *
 * The brief requires the test to assert *« every routine noun referenced is an
 * imported id, asserted by id »*, so the ids are the contract and they are
 * declared here rather than typed into the lesson body.
 *
 * `inSeed` is what the probe said on 2026-08-15 and it is a PREDICTION. a2.05 §6,
 * a2.20 and a2.21 all mispredicted the cut, in both directions, three builds
 * running. The merge MEASURES the carry rather than trusting this column, and
 * the surprise check is the deliverable.                                       */

export type Imported = {
  id: string;
  fr: string;
  /** Why this lesson needs it on a screen. A row imported for no stated reason
   *  is a row the next author cannot safely remove. */
  why: string;
  inSeed: boolean;
};

/** THE TWELVE HEADWORDS. All infinitives, all framed with `se` except `laver`,
 *  which is the bare form the meaning contrast needs and which exists. */
export const IMPORTED_HEADWORDS: readonly Imported[] = [
  { id: 'fr.a1.routines.028', fr: 'se laver', why: `The frame verb of the whole paradigm. ${Cap(unitRef('a1.25'))} taught it as a whole lexical item.`, inSeed: true },
  { id: 'fr.a1.cuisine.183', fr: 'laver', why: 'THE BARE FORM, and the reason the meaning contrast is real rather than invented. The same verb with nothing in front of it is published and means washing something else.', inSeed: true },
  { id: 'fr.a1.routines.001', fr: 'se lever', why: 'The second verb, where the stem change runs at the same time as the pronoun.', inSeed: true },
  { id: 'fr.a1.routines.020', fr: 'se coucher', why: 'One of the verbs the paradigm never walks, used where the learner builds a form from a verb the lesson did not show.', inSeed: true },
  { id: 'fr.a1.routines.010', fr: 'se réveiller', why: `Same. ${Cap(unitRef('a1.25'))} taught its je cell as a whole phrase.`, inSeed: true },
  { id: 'fr.a1.routines.011', fr: 'se doucher', why: 'Same, and it is in the role play.', inSeed: true },
  { id: 'fr.a1.routines.012', fr: "s'habiller", why: 'THE ELISION. me becomes m and se becomes s in front of a vowel, which is the only other thing the pronoun ever does.', inSeed: true },
  { id: 'fr.a1.routines.034', fr: 'se reposer', why: 'Same as se coucher, and it carries the doubled nous shape.', inSeed: true },
  { id: 'fr.a1.routines.087', fr: 'se dépêcher', why: 'THE se THAT IS NOT REFLEXIVE. Nobody hurries themselves.', inSeed: true },
  { id: 'fr.a1.rencontres.105', fr: "s'appeler", why: `THE OPENER. ${Cap(unitRef('sons.01'))} ships « Je m\'appelle Paul. » and the learner has been saying a pronominal verb since the first lesson in the product.`, inSeed: false },
  { id: 'fr.sons.verbes-essentiels.056', fr: 'se souvenir', why: `The third member of the not-reflexive group. NAMED AS AN INFINITIVE AND NEVER CONJUGATED: its forms follow venir, which is ${unitRef('a2.02')}, and conjugating it here would teach a second paradigm inside a lesson that owns a pronoun.`, inSeed: false },
  { id: 'fr.a1.routines.019', fr: 'se brosser les dents', why: `${Cap(unitRef('a1.25'))}\'s own phrase, and it is the shape with a direct object after the reflexive. Named receptively so a learner does not read « je me lave les mains » as an error; the rule that turns on it is ${unitRef('a2.23')}\'s.`, inSeed: true },
];

/** THE PUBLISHED SENTENCES, imported as evidence beside the authored paradigm
 *  rather than used as paradigm cells. §5: no two of them differ by one thing. */
export const IMPORTED_SENTENCES: readonly Imported[] = [
  { id: 'fr.a1.routines.003', fr: 'Je me lève à sept heures.', why: `The sentence ${unitRef('a1.25')} taught whole. It is the one the learner already owns, and the lesson opens the paradigm by taking it apart.`, inSeed: true },
  { id: 'fr.a1.routines.181', fr: 'Nous nous levons tard le dimanche.', why: `THE DOUBLED FORM, ALREADY SHIPPED. ${Cap(unitRef('a1.25'))} put this exact string on s12-persons, which is why this lesson calls the nous cell a reveal rather than a first sighting. §2.`, inSeed: true },
  { id: 'fr.a1.routines.154', fr: 'Il se lève tout de suite après le réveil.', why: `The third of ${unitRef('a1.25')}\'s three attested persons.`, inSeed: true },
  { id: 'fr.a1.cuisine.228', fr: 'Je lave les légumes avant de cuisiner.', why: 'THE BARE VERB IN A PUBLISHED SENTENCE. Proof that « je lave » is ordinary French rather than a broken version of « je me lave ».', inSeed: true },
  { id: 'fr.a1.corps.209', fr: 'Je me lave les mains avant de manger.', why: `The reflexive with a direct object after it. Receptive only; it is the case ${unitRef('a2.23')} owns.`, inSeed: true },
  { id: 'fr.a1.routines.157', fr: "Tu te douches rapidement avant l'école.", why: `${Cap(unitRef('a1.25'))}\'s tu cell, reused in the role play so the learner meets a shape they have heard.`, inSeed: true },
  { id: 'fr.a1.routines.144', fr: "Je me douche avant de m'habiller.", why: `TWO PRONOMINAL VERBS IN ONE SENTENCE, one of them elided. ${Cap(unitRef('a1.25'))} shipped it and said the rest was a whole band away.`, inSeed: true },
  { id: 'fr.a1.presentation-personnelle.001', fr: "Je m'appelle Sophie.", why: 'The opener in a full sentence, from the theme a learner meets first.', inSeed: false },
];

export const IMPORTED: readonly Imported[] = [...IMPORTED_HEADWORDS, ...IMPORTED_SENTENCES];
export const IMPORTED_IDS: string[] = IMPORTED.map((i) => i.id);
export const EXPECTED_IMPORTED = 20;

/** The routine words a screen names, which the brief requires to be asserted BY
 *  ID rather than by string. No routine vocabulary section exists and this build
 *  authors nothing in `routines`. */
export const ROUTINE_IDS: string[] = IMPORTED.filter((i) => i.id.includes('.routines.')).map((i) => i.id);

/** Rows read and refused, with the reason, so a later author does not have to
 *  rediscover why an obvious import is missing. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.verbes-essentiels.101', fr: 'se promener', why: 'FALSE POSITIVE. [suh prohm-NAY] is flagged and correct; see FALSE_POSITIVES and §8. Not imported and not repaired.' },
  { id: 'fr.a1.animaux-domestiques.100', fr: 'promener', why: 'The same false positive on the bare form.' },
  { id: 'fr.a1.tourisme.006', fr: 'le souvenir', why: `GENDERED single-word row. It would join ${unitRef('a1.03')}\'s measured ending population the moment the merge carried it (${unitRef('a2.04')} ledger §0). The lesson names the verb, not the noun.` },
  { id: 'fr.sons.noms-essentiels.052', fr: 'le souvenir', why: 'The same noun, the same refusal, and it carries a competing respelling besides.' },
  { id: 'fr.a1.verbes-du-quotidien.104', fr: 'se lever', why: 'NO RESPELLING. A row is imported for its respelling and this theme stores none; fr.a1.routines.001 is the row with a home in the lesson\'s own vocabulary theme.' },
  { id: 'fr.sons.elision.041', fr: "s'habiller", why: `A COMPETING RESPELLING, [sa-bee-YAY] against routines\' [sah-bee-YAY]. Invariants §9: a variant is not a violation and only what breaks a stated rule is repaired. The routines row is imported because it is the one ${unitRef('a1.25')} taught from.` },
  { id: 'fr.a2.verbes.050', fr: 'appeler', why: `The bare infinitive, which is ${unitRef('a2.09')}\'s. This lesson needs the framed s\'appeler and takes it from rencontres.` },
];

/* ─── RESPELLING REPAIRS ───────────────────────────────────────────────────
 *
 * §8: this build repairs nothing and supplies nothing, and both tables are
 * asserted EMPTY rather than omitted, so the day a row needs one the shape is
 * already there and corrections §14.1's mixed-row problem cannot arrive
 * unnoticed.                                                                  */

export const RESPELL_REPAIRS_VISIBLE: readonly { id: string; fr: string; from: string; to: string; why: string }[] = [];
export const RESPELL_REPAIRS_INVISIBLE: readonly { id: string; fr: string; from: string; to: string; why: string }[] = [];
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [];

/** The false positives this build MEASURED and deliberately did not carry. §8.
 *  Corrections §6 asks for the absence to be reported; this is a presence. */
export const FALSE_POSITIVES: readonly { id: string; fr: string; stored: string; why: string }[] = [
  {
    id: 'fr.sons.verbes-essentiels.101',
    fr: 'se promener',
    stored: 'suh prohm-NAY',
    why: `promener is /pʁɔm.ne/. The o is a real /ɔ/ and the m is a real /m/, so there is no nasal vowel and a superscript would teach a sound the word does not have. Same shape as jaune in invariants §3 and nous sommes in ${unitRef('a2.21')} §2. NOT IMPORTED and NOT REPAIRED: ${unitRef('a2.21')} §3 measured that a false-positive row checked against the checker rather than against the fixed value is a hole in every layer, and the cheapest way not to have it is not to carry the row.`,
  },
  {
    id: 'fr.a1.animaux-domestiques.100',
    fr: 'promener',
    stored: 'prohm-NAY',
    why: 'The bare form, same word, same false positive. Also not imported.',
  },
];

/* ─── THE MEASUREMENTS, so the report and the guards read one object ───────*/

export const MEASURED = {
  headwordsAuthored: 0,
  headwordsImported: 12,
  rowsAuthored: 31,
  paradigmEvidence: {
    'je me lève': 14, 'tu te lèves': 1, 'il se lève': 5,
    'nous nous levons': 3, 'vous vous levez': 0, 'ils se lèvent': 0,
    'je ne me lève pas': 0,
  },
  themeRoutine: { published: 0, seed: 0 },
  themeRoutines: { published: 339, seed: 339 },
  a209NamesLever: false,
  a125ShowsNousNous: true,
  negationStringsAgree: true,
} as const;

/* ─── THE SHAPE OF THE LESSON, as explicit constants ───────────────────────
 *
 * Invariants §5: assert against an EXPLICIT CONSTANT, never a figure derived
 * from the lesson, because a derived count compares the content to itself and
 * passes on any rewording.                                                    */

export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 30;
export const EXPECTED_AUTHORED = 31;
/** Doctrine §B.5: the Owns must outweigh the paradigm. Seven against two. */
export const OWNS_SECTIONS = 7;
export const PARADIGM_SECTIONS = 2;
/** a2.20 measured a `cardDeck` hint ellipsising at 60 on a Pixel 6. */
export const HINT_MAX = 60;
/** Corrections §4. `dicteeMode` switches above this and word mode hands every
 *  real word over pre-spelled. */
export const DICTEE_MAX_LETTERS = 16;
/** a2.20, found on a Pixel 6: two consecutive dots read as a typo, and they
 *  arrive when a question quotes a corpus row that already ends in one. Three
 *  is an ellipsis and is deliberate in the scene.
 *
 *  WIDENED BY THIS BUILD, ALSO ON A PIXEL 6. The `..` half is what every guard
 *  in this band checks and it is only half the shape. A quoted row landing
 *  mid-sentence produces a stop followed by whatever punctuation the sentence
 *  wanted next, and s06-doubled shipped « ... tard le dimanche., beside a verb
 *  ... » past the batch, the merge, the test and the density validator. The
 *  general defect is A SENTENCE-FINAL STOP WITH PUNCTUATION AFTER IT. */
export const DOUBLE_STOP = /(?<!\.)\.[.,;:](?!\.)/u;

/* ─── THE JARGON LIST ──────────────────────────────────────────────────────
 *
 * Invariants §8 bans grammar jargon from a learner surface. a2.17 §5 measured
 * that the house does NOT ban the part-of-speech names — `adjective` is on 147
 * shipped cards — and that what it actually does is PREFER the plain phrase.
 * So `verb` and `pronoun` are not here; the ratio guard below is what governs
 * them, and it is what lets `overview.titleEn` stay the unit's own English name,
 * which `content_units` requires it to match.
 *
 * a2.15 §3: `hasPhrase` is boundary-exact, so a list holding `paradigm` does not
 * catch `paradigms`. Every entry is checked in its -s plural as well.          */

export const JARGON: readonly string[] = [
  'reflexive pronoun', 'reflexive verb', 'pronominal verb', 'clitic',
  'paradigm', 'conjugation table', 'direct object pronoun',
  'indirect object pronoun', 'first person', 'second person', 'third person',
  'grammatical person', 'valency', 'transitive', 'intransitive',
  'reciprocal', 'inflection', 'preverbal', 'morpheme', 'orthographic',
];

/** THE RATIO GUARD (a2.17 §5). The plain phrase must outnumber the technical
 *  one on a learner surface. Guarding the ratio rather than banning the word is
 *  what the house actually does: a1.16 runs `describing word` 74 times against
 *  `adjective` 12. */
export const PLAIN_OVER_TECHNICAL: readonly { plain: string; technical: string }[] = [
  { plain: 'little word', technical: 'pronoun' },
  { plain: 'the person', technical: 'the subject' },
];

/* ─── THE COMPOUND-TENSE GUARD'S OWN TEST CASES ────────────────────────────
 *
 * Corrections §14.4: a shape built out of French morphology fires on the
 * English, because half a learner surface is English by design and the two
 * languages share enough letters. a2.17's guard matched « ...ON A WORD YOU had
 * not learned » because `on` is a French pronoun and `a` a French auxiliary.
 *
 * So the guard requires a REFLEXIVE CLUSTER — a pronoun plus a form of être —
 * rather than an auxiliary-shaped word, and both lists below are walked so the
 * guard is proved to fire and proved not to.                                   */

export const COMPOUND_MUST_FIRE: readonly string[] = [
  'Je me suis lavé.',
  "Il s'est levé tôt.",
  'Ils se sont couchés tard.',
  'Nous nous sommes reposés.',
  "Elle s'est habillée vite.",
  'Vous vous êtes dépêchés.',
];

export const COMPOUND_MUST_NOT_FIRE: readonly string[] = [
  // The English that broke a2.17's version of this shape.
  'You did not stall ON A WORD YOU had not learned.',
  // Every authored row, in spirit: a present-tense reflexive must pass.
  'Je me lave.',
  'Nous nous lavons.',
  'Il ne se lave pas.',
  "Je m'habille vite.",
  // English prose that happens to contain the French function words.
  'The little word is on a card, and a listener will wait for you to say what.',
  // a1.25's own hand-off sentence, which this lesson quotes verbatim.
  A125_HANDOFF,
];

/* ─── toItem ───────────────────────────────────────────────────────────────*/

export function toItem(r: Row): Item {
  const { person: _p, bucket: _b, clitic: _c, ...item } = r;
  return item;
}

export const AUTHORED_ITEMS: Item[] = PRONOMINAUX.map(toItem);

/* ─── READING HELPERS, used by the lesson so no French is typed twice ──────*/

export const fr = (id: string): string => rowById(id).fr;
export const en = (id: string): string => rowById(id).en;
export const respellOf = (id: string): string => {
  const r = rowById(id).respell;
  if (!r) throw new Error(`${Cap(unitRef('a2.22'))}: ${id} has no respelling and a card wants one.`);
  return r;
};
export const ipaOf = (id: string): string => {
  const r = rowById(id).ipa;
  if (!r) throw new Error(`${Cap(unitRef('a2.22'))}: ${id} has no ipa and a card wants one.`);
  return r;
};
export const sub = (id: string): string => `[${respellOf(id)}]`;

/** Every row that carries the dictation drill, which is what the dictée may
 *  target. Checked against Postgres by the batch, not against the seed. */
export const DICTATION_IDS: string[] = PRONOMINAUX.filter((r) => r.drills.includes('dictation')).map((r) => r.id);
