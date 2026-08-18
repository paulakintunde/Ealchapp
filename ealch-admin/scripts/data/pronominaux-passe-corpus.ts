// The a2.23 corpus: what this lesson authors, what it imports, and the nine
// measurements that decided its shape.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a2.23 puts on a screen. The lesson body (pronominaux-passe-lesson.ts)
// reads them FROM HERE and never restates them.
//
// a2.23 is seq 20, THE LAST LESSON OF BATCH 2 and the capstone of the past-tense
// arc. It composes four rules the learner already has and adds exactly one.
//
// ══════════════════════════════════════════════════════════════════════════
//  1. BOTH PREREQUISITES ARE SHIPPED, AND THE BACKGROUND IS CLEAN
// ══════════════════════════════════════════════════════════════════════════
//
// The brief refuses to let this lesson be built against briefs and lists as
// UNVERIFIED whether a2.22 and a2.21 are shipped. Measured 2026-08-15 against
// Postgres and against `seed.json`:
//
//     a2.21   seq 18   lessonIds ['a2.21.l1']   v3   46 rows, .651..696
//     a2.22   seq 19   lessonIds ['a2.22.l1']   v2   31 rows, .721..751
//     a2.23   seq 20   lessonIds []             <- this build
//
// AND NEITHER NEIGHBOUR LEAKED. Walked over both shipped bodies for `me suis`,
// `s'est`, `se sont`, `lavé` and `levé`: **zero occurrences in either**. a2.21
// refused every reflexive across four layers and a2.22 refused every compound
// across four more, so this lesson's whole subject is untouched ground. That is
// the strongest hand-off in the band and both reports promised it.
//
// ══════════════════════════════════════════════════════════════════════════
//  2. THE FIVE NEGATION STATEMENTS ARE NOT ONE STRING. THEY ARE TWO, AND
//     NEITHER HAS DRIFTED
// ══════════════════════════════════════════════════════════════════════════
//
// The brief says *« The negation wording is the same string as a2.19 / a2.05 /
// a2.21 / a2.22. Five lessons, one rule. Assert it »* and asks this build, as
// the fifth and last, to report whether the five agree. **They do not, and the
// disagreement is correct rather than drift.** Measured off the shipped bodies
// in `seed.json` on 2026-08-15:
//
//     a1.18  reframe  « Wrap the verb, then ask what the verb was. »        x13
//            a2.19's line: 0 occurrences
//     a2.19  reframe  « Wrap the verb that changed, not the one carrying
//                       the meaning. »                                      x16
//            a1.18's line: 1 occurrence
//     a2.05  a2.19's line x5,  a1.18's line x0
//     a2.21  a2.19's line x2,  a1.18's line x0
//     a2.22  a2.19's line x8,  a1.18's line x1, its own extension x12
//
// **THE FOUR A2 LESSONS ARE ONE STRING, BYTE FOR BYTE. a1.18 IS A SECOND,
// EARLIER STRING, AND a2.19 AND a2.22 BOTH QUOTE IT.** So the arc holds two
// sentences deliberately: a1.18 said which words to put round the verb, a2.19
// said which verb, and every A2 lesson since has quoted a2.19. Nothing has
// drifted and nobody has reworded anything. The brief's "five lessons, one
// rule" is right about the RULE and wrong about the count of strings, and the
// correct assertion is that BOTH lines are quoted verbatim, which is what this
// build's three layers do.
//
// ══════════════════════════════════════════════════════════════════════════
//  3. THE NEGATIVE NEEDS A THIRD SENTENCE, AND a2.22 PREDICTED IT
// ══════════════════════════════════════════════════════════════════════════
//
// a2.22's extension is « Both words changed for the subject, so both go inside
// the wrap. » Applied here it is still true and it is no longer sufficient,
// because there are now THREE words and only two of them go inside:
//
//     Je   ne   me   suis   pas   levé.
//               └── inside ──┘          the little word and the first word
//                                 └──┘  the second word, OUTSIDE the wrap
//
// A learner running a2.22's sentence literally has no instruction about the
// participle at all, and the shape that looks right is « Je ne me suis levé
// pas. » So the extension is extended, once, and both inherited lines are
// quoted verbatim beside it. See NEGATION_OUTSIDE.
//
// **AND THE ELISION MOVED AGAIN, EXACTLY AS a2.22 SAID IT WOULD.** Its §6 wrote
// *« a2.23 will lose it again the moment the auxiliary arrives: « je ne me suis
// pas lavé » elides nothing either, but « il ne s'est pas lavé » elides the
// PRONOUN rather than the `ne` »*. Measured across all six persons:
//
//     je ne me suis pas       nothing elides      nous ne nous sommes pas   nothing
//     tu ne t'es pas          THE PRONOUN         vous ne vous êtes pas     nothing
//     il ne s'est pas         THE PRONOUN         ils ne se sont pas        nothing
//
// **`ne` NEVER ELIDES IN THIS LESSON, IN ANY PERSON**, because every form of the
// little word opens on a consonant. a2.05 elided `ne` in six of six, a2.21 in
// three of six, a2.22 in none of six, and here it is none of six again — and
// the elision has moved onto a DIFFERENT WORD. That is four lessons and four
// different answers, so `reduceNegative()` is written fresh rather than
// inherited: it has to put `te` and `se` back, and it must not touch `ne`.
//
// ══════════════════════════════════════════════════════════════════════════
//  4. THE VOCABULARY EXISTS. GRAMMAR ONLY, FOR THE SEVENTH BUILD RUNNING
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §2 predicts it and it holds again: **NOT ONE HEADWORD IS
// AUTHORED.** Every reflexive infinitive this lesson names already exists,
// framed with `se`, which a2.22 §7 settled and this build inherits without
// reopening. Probed with the real orthography, 2026-08-15:
//
//     se laver     fr.a1.routines.028   [suh lah-VAY]        3 copies
//     se lever     fr.a1.routines.001   [suh luh-VAY]        3 copies
//     se coucher   fr.a1.routines.020   [suh koo-SHAY]       3 copies
//     se réveiller fr.a1.routines.010   [suh ray-veh-YAY]    2 copies
//     se doucher   fr.a1.routines.011   [suh doo-SHAY]       3 copies
//     s'habiller   fr.a1.routines.012   [sah-bee-YAY]        4 copies
//     se reposer   fr.a1.routines.034   [suh ruh-poh-ZAY]    8 copies
//     se dépêcher  fr.a1.routines.087   [suh day-peh-SHAY]   4 copies
//     laver        fr.a1.cuisine.183    [lah-VAY]            3 copies
//
// **AND NO PARTICIPLE IS A CORPUS ITEM.** Doctrine §E left the question open;
// a2.05 settled it, a2.20 agreed it, a2.21 inherited it and this build inherits
// it too. `lavé`, `levée`, `couchés` are not words in their own right and none
// is authored as a headword here. a2.05 §E is quoted rather than re-argued.
//
// ══════════════════════════════════════════════════════════════════════════
//  5. THE PARADIGM IS ABSENT AND THE ONE-SIDED EVIDENCE IS THE OWNS
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §3, for the seventh build running, and once again the zero-count
// forms are precisely the ones the lesson exists to teach. Measured over 27,956
// published sentences on 2026-08-15:
//
//     THE FRAME VERB, ALL SIX PERSONS:
//     je me suis lavé      0     nous nous sommes lavés   0
//     tu t'es lavé         0     vous vous êtes lavés     0
//     il s'est lavé        0     ils se sont lavés        0
//     elle s'est lavée     0
//
//     THE NEGATIVE:
//     je ne me suis pas    0     ne se sont pas           0
//
//     THE EXCEPTION:
//     elle s'est lavé les mains  0     s'est lavé les     0
//
// **ALL THIRTEEN CELLS OF THE FRAME VERB ARE ZERO.** The construction itself is
// everywhere — `s'est` 219, `se sont` 104, `nous nous sommes` 46, `me suis` 37 —
// and not one published sentence conjugates the verb this lesson teaches from.
// So the whole paradigm, the whole negative and the whole exception are
// authored, in one frame each, and the published rows are imported as evidence
// beside them rather than used as paradigm cells.
//
// **AND THE OTHER HALF OF THE OWNS IS PUBLISHED, WHICH IS THE ASYMMETRY THIS
// LESSON IS BUILT ON.** « j'ai lavé la voiture » exists twice and « je me suis
// lavé » not once. The corpus already teaches the avoir sentence that CAUSES
// the error, and has never once shown the être sentence that corrects it.
//
// ══════════════════════════════════════════════════════════════════════════
//  6. THE EXCEPTION IS ALREADY PUBLISHED, UNAGREED, ON A2 CARDS IN THE SEED
// ══════════════════════════════════════════════════════════════════════════
//
// **This is the largest finding in the build and it decides the brief's biggest
// judgement call for it.**
//
// The brief offers three options for the preceding-direct-object rule and says
// option 3, saying nothing, is not available because a learner will hit
// « se laver les mains » in week one. Measured, it is worse than that: the
// learner has ALREADY hit it, on cards that shipped before this lesson existed.
//
//     fr.a2.corps.001  « Elle s'est cassé le bras en tombant du vélo. »    inSeed=Y
//     fr.a2.corps.002  « Elle s'est cassé la jambe en tombant dans
//                        l'escalier. »                                     inSeed=Y
//     fr.a2.corps.006  « Elle s'est fait mal au genou en courant. »        inSeed=Y
//     fr.a1.corps.209  « Je me lave les mains avant de manger. »           inSeed=Y
//
// Three A2 cards in the cut, feminine subject, **`cassé` and not `cassée`**, and
// forty-nine published `elle s'est` sentences behind them. A lesson that taught
// « after être, agree with the subject » and stopped would contradict three
// cards the learner can already draw, and would teach them to read a correct
// published sentence as a typo.
//
// **SO OPTION 1, AND THE MEASUREMENT MAKES IT THE ONLY ONE.** The exception is
// NAMED RECEPTIVELY: one section, the required side-by-side pair, one published
// row as corroboration, and no production surface anywhere. The REASON — that
// `se` is the indirect object when a direct object follows — is a2.24's and is
// stated nowhere. See OBJECT_DECISION and the guard that scopes it.
//
// ══════════════════════════════════════════════════════════════════════════
//  7. WHAT THE APP CAN TEST HERE, AND IT IS UNUSUAL FOR THIS BAND
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §5: `fold()` strips every accent, so most A2 spelling
// distinctions cannot be typed. **AGREEMENT IS THE EXCEPTION**, because `fold()`
// keeps a final `-e` and `-s`. Measured through the real function:
//
//     Il s'est lavé.      vs  Elle s'est lavée.       DIFFER
//     Elle s'est lavée.   vs  Elles se sont lavées.   DIFFER
//     Ils se sont lavés.  vs  Elles se sont lavées.   DIFFER
//     Je me suis levé.    vs  Je me suis levée.       DIFFER
//     Je me suis levé.    vs  J'ai levé.              DIFFER
//     Je me suis levé.    vs  Je m'ai levé.           DIFFER
//     Je me suis levé.    vs  Je suis me levé.        DIFFER
//     Je ne me suis pas levé. vs Je me ne suis pas levé.  DIFFER
//     Elle s'est lavée.   vs  Elle s'est lavé les mains.  DIFFER
//
// **EVERY PIECE OF THE COMPOSITION IS TYPEABLE**: the little word, its position,
// the auxiliary, and the ending. This lesson gets the typed production question
// a2.09 lost and a2.21 could only half write, and the quiz is built on it.
//
//     AND ONE THING IS NOT:
//     Je me suis levé.    vs  Je me suis leve.        SAME
//
// The é of the participle is invisible to every typed surface, so no question
// may turn on it. Every scored item here turns on the letters AFTER the é.
//
// **NO EAR QUESTION CAN TEST AGREEMENT AT ALL.** lavé, lavée, lavés and lavées
// are one sound, in all four cells, on every verb this lesson uses without
// exception — a2.21 §10 handed that forward, because `mourir` was the one
// audible feminine in the language of that lesson and no reflexive has one.
// `NO_EAR_QUESTION` holds every pair and all three layers walk it.
//
// ══════════════════════════════════════════════════════════════════════════
//  8. THE RESPELLINGS: ONE FALSE POSITIVE, INHERITED, AND NO BLIND ROWS
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §6 and §14.1 warn about a nasal followed by a consonant INSIDE a
// token, which `hasPlainNasalFor` cannot see. Measured through the real function
// over every respelling this build authors:
//
//     eel suh sohⁿ lah-VAY        clean     eel suh sohn lah-VAY      FLAGGED
//     zhay koo-SHAY lay zahⁿ-FAHⁿ clean     ... zahn-FAHN             FLAGGED
//     ehl seh lah-VAY lay MAHⁿ    clean     ... lay MAHN              FLAGGED
//
// **EVERY NASAL IN THIS LESSON IS VISIBLE AND THERE ARE NO MIXED ROWS.** The
// nasals are all word-final (`sont`, `mains`, `dents`, `matin`, `mon`, `non`,
// `temps`, `nom`), so the n or m ends its token and the checker sees all of
// them. `RESPELL_REPAIRS_INVISIBLE` is asserted EMPTY rather than omitted.
//
// **AND a2.21's `nous sommes` FALSE POSITIVE ARRIVES HERE ON FOUR ROWS.**
// a2.21 §2 measured it and a2.21 §3 measured that the guard the whole band runs
// cannot see the repair going wrong. Re-measured here:
//
//     noo noo sohm luh-VAY TOH    FLAGGED
//     noo noo somm luh-VAY TOH    clean, and the house shape
//     noo noo sohⁿm luh-VAY TOH   clean, AND WRONG
//
// `sommes` is /sɔm/ with a real m and no nasal vowel in it, so the superscript
// teaches a sound the word does not have — and **the checker calls the wrong
// value clean**, because its complaint was a false positive to begin with. So
// every layer here asserts the FIXED VALUE by name rather than asking the
// checker's opinion, which is a2.21 §3's fix applied rather than repeated.
//
// ══════════════════════════════════════════════════════════════════════════
//  9. THE RECIPROCAL IS LEFT OUT, AS a2.22 DECIDED AND THIS BRIEF DEFERS TO
// ══════════════════════════════════════════════════════════════════════════
//
// The brief: *« Reciprocal reflexives in the past (ils se sont parlé, which does
// not agree) follow the same indirect-object logic. If a2.22 left reciprocals
// out, leave them out. »* a2.22 §9 named it on exactly one receptive card and
// taught nothing. Measured: « se sont parlé » has ONE published sentence in the
// corpus, at B1, and no unit at any level owns the reciprocal.
//
// **SO IT IS OUT, ENTIRELY, AND MORE STRICTLY THAN a2.22 LEFT IT.** a2.22 could
// name it because its forms were merely ambiguous; here the reciprocal ALSO
// declines to agree, for the same reason the `les mains` case does, and naming
// both in one lesson would be teaching the direct-object rule by the back door.
// Not one reciprocal appears on any surface, and the guards walk the list.
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
 * Read out of `content_units` on 2026-08-15 by `corpus:probe --unit a2.23`.
 * Corrections §1: never from the brief. This brief had it right, byte for byte,
 * because it had already been corrected in place against the pre-flight, and
 * it says so.                                                                 */

export const UNIT = {
  id: 'a2.23',
  seq: 20,
  title: 'Pronominal Verbs in the Passé Composé',
  sub: 'Pronominaux au passé composé',
  canDo: 'Can put reflexive verbs into the past with être and agree them correctly',
  prereqUnitIds: ['a2.22', 'a2.21'],
  /** EMPTY, measured. First build, so the lesson's version counter starts at 1. */
  lessonIds: [] as string[],
} as const;

export const LESSON_ID = 'a2.23.l1';
export const SHEET_ID = 'sheet-a2-23-pronominaux-passe';

/* ─── THE ID BLOCK ──────────────────────────────────────────────────────────
 *
 * Reserved by the a2.21 ledger amendment §0 and confirmed by a2.22's §0:
 * *« a2.23 should take .791..860 »*. Taken as reserved.
 *
 * Ledger §10: the maximum id has been useless since a2.10.l2 took .461..500
 * above the whole batch-1 reservation. THE ROW COUNT IS THE ONLY SIGNAL and it
 * must be `before + exactly what this build applies`.                         */

export const ROW_COUNT_BEFORE = 559;
export const ID_BLOCK = { from: 'fr.a2.verbes.791', to: 'fr.a2.verbes.860' } as const;

/** a2.22's, immediately below, .721..790 with .721..751 used. A RESERVATION
 *  ASSERTION MUST NOT SAY "AND IT IS EMPTY" (ledger, a2.20 §0): a2.05's did and
 *  went red the moment a2.20 filled it. This one says no row of a2.23 is inside
 *  it and that it still holds exactly the 31 rows a2.22 applied. */
export const A222_BLOCK = { from: 'fr.a2.verbes.721', to: 'fr.a2.verbes.790' } as const;
export const A221_BLOCK = { from: 'fr.a2.verbes.651', to: 'fr.a2.verbes.720' } as const;
export const A222_ROWS = 31;
export const A221_ROWS = 46;

const idNum = (id: string): number => Number(id.split('.')[3] ?? '-1');
const inRange = (id: string, r: { from: string; to: string }): boolean =>
  id.startsWith('fr.a2.verbes.') && idNum(id) >= idNum(r.from) && idNum(id) <= idNum(r.to);

export const isMine = (id: string): boolean => inRange(id, ID_BLOCK);
export const isA222 = (id: string): boolean => inRange(id, A222_BLOCK);
export const isA221 = (id: string): boolean => inRange(id, A221_BLOCK);

export const THEME = 'verbes';

/* ─── THE NEIGHBOURS, BY UNIT ID ────────────────────────────────────────────
 *
 * Doctrine §B.7: from seq 14 onward, name the earlier instance BY UNIT ID.
 * a2.18 §6, a2.20 §5.4 and a2.21 §4.5: a guard comparing `namesUnit(text, CONST)`
 * renames both sides when the constant moves, so every guard in this build uses
 * a LITERAL and these constants are for the prose only.
 *
 * a2.21 §8: A REFRAME QUOTED FROM A NEIGHBOUR MUST BE READ OFF THE SHIPPED
 * LESSON. Its own quote of a2.15 was INVENTED and neither the batch nor the
 * merge could see it. Every string below was read out of `seed.json` on
 * 2026-08-15 by `scripts/_a223_probe.ts`, with the occurrence count, and the
 * test re-reads all seven off the seed rather than trusting this file.        */

/** a2.01, Les verbes en -ER, seq 1. THE FAR END OF THE BOOKEND. Its reframe is
 *  why nothing in this lesson can be heard, and a2.21 quoted it for exactly
 *  that. The brief says to quote the same string rather than write a third
 *  version. Read off `a2.01.l1`, where it is the `reframe` field and appears 10
 *  times, and off `a2.21.l1`, where it appears twice. */
export const ER_UNIT = 'a2.01';
export const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';

/** a2.05, Le passé composé avec avoir, seq 16. The two-part structure and where
 *  negation goes. Read off `a2.05.l1`, 11 occurrences. */
export const PASSE_UNIT = 'a2.05';
export const A205_REFRAME = 'One verb, two words, and the small ones go in between.';

/** a2.20, Participes passés irréguliers, seq 17. The forms. Read off
 *  `a2.20.l1`, 7 occurrences. */
export const IRREGULAR_UNIT = 'a2.20';
export const A220_REFRAME = 'Do not build these. Reach for the group it is in.';

/** a2.21, Le passé composé avec être, seq 18. être as auxiliary, and agreement.
 *  Read off `a2.21.l1`, 9 occurrences. */
export const ETRE_UNIT = 'a2.21';
export const A221_REFRAME = 'After être, the second word ends like a describing word.';

/** a2.21's AGREEMENT RULE, WORDED ONCE AND EXPORTED BY THAT LESSON so this one
 *  could quote rather than reword it. Read off `a2.21.l1`, 7 occurrences.
 *  Ledger a2.21 §4.2 says it is a cross-lesson contract and belongs on the same
 *  footing as a2.01's reframe: a LITERAL in all three layers. */
export const AGREEMENT_RULE =
  'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';

/** a2.22, Les verbes pronominaux, seq 19, immediately before. The little word.
 *  Read off `a2.22.l1`, 8 occurrences. */
export const REFLEXIVE_UNIT = 'a2.22';
export const A222_REFRAME = 'The pronoun changes with the subject, because it is the subject.';

/** a2.22's clean background, worded there so this lesson could quote it rather
 *  than re-derive it. Read off `a2.22.l1`, 4 occurrences. It is the sentence
 *  this lesson changes. */
export const PRESENT_NO_AGREEMENT =
  'In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.';

/** a1.18, La négation, seq 18 of A1. §2: this is the FIRST of the two negation
 *  strings and it has not drifted in five lessons. Read off `a1.18.l1`, where it
 *  is the `reframe` field and appears 13 times. */
export const NEGATION_UNIT = 'a1.18';
export const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';

/** a2.19, Le futur proche, seq 15. THE SECOND negation string, and the one every
 *  A2 lesson since has quoted. Read off `a2.19.l1`, where it is the `reframe`
 *  field and appears 16 times. §2. */
export const FUTUR_UNIT = 'a2.19';
export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';

/** a2.22's extension of it, which this lesson inherits and then extends once
 *  more. Read off `a2.22.l1`, 12 occurrences. §3. */
export const NEGATION_EXTENSION = 'Both words changed for the subject, so both go inside the wrap.';

/** a1.25, La routine quotidienne. It owns the routine vocabulary. */
export const ROUTINE_UNIT = 'a1.25';

/** a2.06 and a2.24, seq 21 and 22. The object pronouns proper. a2.24 is where
 *  the reason for the exception this lesson names receptively belongs. */
export const DIRECT_OBJECT_UNIT = 'a2.06';
export const INDIRECT_OBJECT_UNIT = 'a2.24';

/* ─── THE REFRAME ───────────────────────────────────────────────────────────
 *
 * Doctrine §B.4: an A2 reframe is a rule the learner runs while the sentence is
 * already moving. Test: could they apply it in the half-second between subject
 * and verb? This one fires ONE WORD LATER, between the little word and the
 * auxiliary, which is exactly where the decision falls and exactly where the
 * scene's sentence dies.
 *
 * It is deliberately a rule about the PRONOUN rather than about the tense. The
 * brief is right that the pronoun is the thing the learner can see.           */

export const REFRAME = 'If the little word is there, the first word is être.';

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'Reflexive verbs are conjugated with être in the passé composé.',
    why: `THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right: it is a rule about the tense, and a learner mid-sentence has not got a tense in front of them, they have got a little word. It also opens on two grammar nouns, where ${unitRef('a2.17')} §5 measured that the house prefers the plain phrase.`,
  },
  {
    candidate: 'A reflexive verb always takes être, whatever the plain verb takes.',
    why: 'The brief\'s own candidate, and the chosen one is its second half made runnable. It asks the learner to have CLASSIFIED the verb before they start, which is the work rather than the rule; and « whatever the plain verb takes » is the contrast, which belongs on a screen beside the two sentences rather than inside a line said at speed.',
  },
  {
    candidate: 'Use être, and agree the ending with the subject.',
    why: 'Two rules in one, and the second is the one that does not always run: after « elle s\'est lavé les mains » there is nothing to agree with. A reframe carried across eight screens cannot have an exception the lesson then has to name.',
  },
  {
    candidate: 'The little word goes in front of the first word.',
    why: `True, and it is ${unitRef('a2.22')}\'s rule about position moved one tense along rather than this lesson\'s. It says nothing about WHICH first word, and choosing it is the whole Owns.`,
  },
];

/** How many times the reframe is authored. Invariants §5: assert against an
 *  EXPLICIT CONSTANT, never a figure derived from the lesson, because a derived
 *  count compares the content to itself and passes on any rewording. */
export const REFRAME_COUNT = 9;

/* ─── THE NEGATION, EXTENDED ONE MORE TIME ─────────────────────────────────
 *
 * §3. a2.22's extension says both changed words go inside the wrap. Here there
 * are three words and the third one does not, so the sentence that stops the
 * inherited pair generating « Je ne me suis levé pas. » is stated rather than
 * assumed. Both inherited lines are quoted verbatim on the same screen.       */

export const NEGATION_OUTSIDE =
  'The wrap goes round the little word and the first word. The second word sits outside it.';

/* ─── THE COMPOSITION, WHICH IS THE OWNS ───────────────────────────────────
 *
 * The brief: build it as a composition lesson. Four owned rules assembled into
 * one form, and one new fact. These strings are what the assembly missions, the
 * roundup, the report and the test all read, so there is one wording.         */

export const OWNED_ALREADY: readonly { unit: string; what: string }[] = [
  { unit: REFLEXIVE_UNIT, what: 'the little word, and that it changes with the person' },
  { unit: ETRE_UNIT, what: 'être as the first word, and the ending that follows it' },
  { unit: PASSE_UNIT, what: 'the two-part shape, and where the two halves of a negative go' },
  { unit: IRREGULAR_UNIT, what: 'the second word itself, group by group' },
];

/** THE ONE NEW FACT. Everything else on the screen is a recap. */
export const THE_NEW_FACT =
  'Every verb that carries the little word takes être, including the ones that take avoir without it.';

/** THE SLOT ORDER, which is the required layout. Six positions, and the learner
 *  has met all six. Read by the slot section, the sheet and all three guards, so
 *  the diagram and the assertion cannot disagree.
 *
 *  ── `job` IS THE CELL AND IT IS SHORT ON PURPOSE. FOUND ON A PIXEL 6. ──────
 *
 *  v1 put the unit-id credits INSIDE the cells, so `job` ran to 44, 61, 63 and
 *  70 characters. The third column of a three-column `tapTable` is about ELEVEN
 *  characters wide on a Pixel 6, so those wrapped to four, five and six lines
 *  and the six-row diagram spanned TWO FULL SCREENS. Nothing was lost — it
 *  scrolls — but the brief's requirement is all six positions on ONE screen, so
 *  the learner can read « Je ne me suis pas levé » down the page as a sentence.
 *  That is the entire reason the section exists and v1 did not deliver it.
 *
 *  No host gate could see it: the batch, the merge and the test all asserted the
 *  six rows, the six words and the six jobs, and every one of those was true.
 *  Height is invisible to all three.
 *
 *  So `job` is now the CELL — short enough for two lines — and `credit` carries
 *  what used to be crammed in beside it, on the row's `detail` body, which is
 *  where a learner who taps the row already goes. `SLOT_CELL_MAX` is the budget
 *  and all three layers assert it. */
export const SLOTS: readonly { pos: string; word: string; job: string; credit: string }[] = [
  { pos: 'first', word: 'Je', job: 'the person', credit: 'The person the sentence is about, and everything after it agrees with this word.' },
  { pos: 'then', word: 'ne', job: 'the wrap opens', credit: `The first half of the wrap, which is ${unitRef(NEGATION_UNIT, 'a2')}'s and has not moved in five lessons.` },
  { pos: 'then', word: 'me', job: 'the little word', credit: `The little word, and it is the person again, which is ${unitRef(REFLEXIVE_UNIT, 'a2')}'s.` },
  { pos: 'then', word: 'suis', job: 'always être', credit: 'The first word, and it is always être. This is the one new thing in the lesson.' },
  { pos: 'then', word: 'pas', job: 'the wrap shuts', credit: 'The second half of the wrap, and it closes straight after the first word.' },
  { pos: 'last', word: 'levé', job: 'the ending', credit: `The second word, ending for the person, which is ${unitRef(ETRE_UNIT, 'a2')}'s.` },
];

/** The cell budget for the third column of a three-column `tapTable`, measured
 *  on a Pixel 6 by shipping v1 over it. Roughly eleven characters render per
 *  line, so twenty is two lines and the six-row diagram fits one screen. */
export const SLOT_CELL_MAX = 20;

/** The full negative the slot diagram is built from, spelled once. */
export const SLOT_SENTENCE = 'Je ne me suis pas levé.';

/* ─── THE OBJECT DECISION, AND IT IS THE LARGEST CALL IN BATCH 2 ───────────*/

export const OBJECT_DECISION = {
  option: 1,
  taught: false,
  namedReceptively: true,
  reasonStated: false,
  ownedBy: INDIRECT_OBJECT_UNIT,
  why:
    `The brief offers three options and recommends the first. §6 makes it the only one: three A2 cards ALREADY IN THE SEED show « Elle s\'est cassé le bras », feminine subject and an unagreed second word, and forty-nine published « elle s\'est » sentences sit behind them. A lesson teaching « agree with the subject » and stopping would make a learner read three shipped cards as typos. Teaching the full rule costs ${unitRef('a2.24')} its lesson, because the reason is the direct and indirect object distinction and that unit owns it.`,
  handsTo:
    `${Cap(unitRef('a2.24'))}, seq 22. The pattern is named here and the reason is not. That unit explains why se stops being the thing agreed with the moment something follows the second word.`,
} as const;

/** The claim the exception card makes. It describes WHAT happens and never WHY,
 *  and the guards check both halves of that. */
export const OBJECT_CLAIM =
  'When something is named straight after the second word, the ending goes away again. You will meet this and you are not being asked to produce it.';

/** Every string that would be EXPLAINING the object system rather than showing
 *  the pattern. None of these may appear anywhere, on any surface: the reason is
 *  a2.24's and this lesson does not own one word of it. */
export const OBJECT_TERMS: readonly string[] = [
  'direct object', 'indirect object', 'object pronoun', 'preceding object',
  'stands in for', 'replaces the noun', 'replaces a noun', 'receives the action',
  'the object comes before', 'agrees with the object',
];

/* ─── THE RECIPROCAL, LEFT OUT ENTIRELY ────────────────────────────────────*/

export const RECIPROCAL_DECISION = {
  named: false,
  why:
    `${Cap(unitRef('a2.22'))} §9 named it on one receptive card and its brief says: if ${unitRef('a2.22')} left reciprocals out, leave them out. It did leave them out of everything it taught, and here the case is stronger. The reciprocal past ALSO declines to agree (« ils se sont parlé »), for the same reason the les mains case does, so naming it here would be teaching ${unitRef('a2.24')}\'s rule twice over by the back door in a lesson that has already decided not to teach it once.`,
  measured: '« se sont parlé » has ONE published sentence in the whole corpus, at B1. No unit at any level owns the reciprocal.',
} as const;

/** Not one of these may appear on any surface.
 *
 *  NARROWED AFTER THE GUARD FIRED ON ITS OWN LESSON, which is corrections §14.4
 *  in a new place and worth recording: that section is about a shape built from
 *  FRENCH morphology reading the English half of a card as French, and this is
 *  the mirror image — a marker built from an ENGLISH GLOSS firing on ordinary
 *  English prose. The bare phrase « each other » caught an audio brief saying
 *  *« the pair is the teaching and it works when the two sit against each
 *  other »*, which is not teaching a reciprocal to anybody.
 *
 *  The gloss that would actually teach one is « to each other », because that
 *  is how the reading is always given. The bare phrase is not, and the sentence
 *  that broke it is in RECIPROCAL_MUST_NOT_FIRE so the next author does not
 *  widen it back. */
export const RECIPROCAL_MARKERS: readonly string[] = [
  'se sont parlé', 'se sont écrit', 'se sont vus', 'se sont rencontrés',
  'se sont téléphoné', 'nous sommes parlé', 'vous êtes parlé',
  'to each other', 'to one another', 'talk to each other',
];

/** Proved to fire, and proved not to. Both lists are walked in all three
 *  layers, because a marker list that has never been tested against legitimate
 *  content is a marker list that will delete legitimate content. */
export const RECIPROCAL_MUST_FIRE: readonly string[] = [
  'Ils se sont parlé tous les jours.',
  'They talked to each other every day.',
  'Elles se sont écrit.',
];
export const RECIPROCAL_MUST_NOT_FIRE: readonly string[] = [
  // THE SENTENCE THAT BROKE THE FIRST VERSION OF THIS GUARD.
  'The pair is the teaching and it works when the two sit against each other.',
  'Read them at the same pace so the two sound the same as each other.',
  // Every legitimate authored shape.
  'Ils se sont levés tôt.',
  'Ils se sont douchés.',
  'Nous nous sommes levés en même temps.',
];

/* ─── WHAT IS BEYOND THIS LESSON ───────────────────────────────────────────*/

/** The imperfect and any contrast between past tenses. Beyond A2's first twenty
 *  (the brief says so and the doctrine's trail confirms it: seq 21 to 32 are the
 *  pronoun and situational blocks and none of them is a tense). */
export const IMPERFECT_MARKERS: readonly string[] = [
  "c'était", 'était', 'étaient', 'avait', 'avaient', 'faisait', 'imperfect',
  'se levait', 'se levaient', 'me levais', 'used to get up',
];

export const PAST_TENSE_DEFERRAL =
  `This is the only past you need for now. ${Cap(unitRef(IRREGULAR_UNIT))} gave you the second words and ${unitRef(ETRE_UNIT)} gave you the endings, and nothing after this changes either of them.`;

export const OBJECT_DEFERRAL =
  `The same little words do a second job later, standing in for a thing rather than pointing back at the person. That is ${unitRef(DIRECT_OBJECT_UNIT)} and ${unitRef(INDIRECT_OBJECT_UNIT)}, and the reason the ending disappears on this screen is waiting there too.`;

/* ─── THE AUTHORED ROWS ─────────────────────────────────────────────────────*/

export type Person = 'je' | 'tu' | 'il' | 'elle' | 'nous' | 'vous' | 'ils' | 'elles' | 'none';
export type Bucket =
  | 'cell' | 'person' | 'flip' | 'object' | 'avoir' | 'negative'
  | 'unseen' | 'scene' | 'talk' | 'extra';

export type Row = Omit<Item, 'drills'> & {
  drills: Item['drills'];
  person: Person;
  bucket: Bucket;
  /** The auxiliary this row uses, read by the guards rather than re-parsed.
   *  `avoir` is legal ONLY on a `flip` or `avoir` row, where the verb carries no
   *  little word: that is the contrast, not the error. */
  aux: 'etre' | 'avoir';
  /** The ending on the second word: '' for a man on his own, 'e', 's' or 'es'.
   *  `null` where the row has no second word to agree, which is the exception. */
  ending: '' | 'e' | 's' | 'es' | null;
};

/* ─── THE DRILL SETS, IN `DRILL_KINDS` ORDER, AND THAT IS NOT COSMETIC ──────
 *
 * `DRILL_KINDS` is `flashcard · voiceflash · dictation · sentence · roleplay ·
 * review`, and these arrays are written in that order deliberately.
 *
 * THE BATCH WRITES `it.drills` TO POSTGRES VERBATIM and the merge writes
 * `drillOrder(it.drills)` to the seed. `drillOrder()` sorts by `DRILL_KINDS`,
 * so the two copies agree ONLY IF the array is already in that order here.
 * a2.12's trap says the merge must match what the database holds; the fix the
 * band inherited does that only by luck.
 *
 * MEASURED ON THIS BUILD BEFORE THE FIX: 38 of 63 rows had a different drill
 * order in Postgres and in `seed.json`. a2.21 happened to declare its arrays in
 * `DRILL_KINDS` order and diverged on nothing; a2.22 did not, and diverged on
 * all 31 of its rows until a publish regenerated the seed from the database and
 * healed it by accident. Ordering them here fixes it at the source, and the
 * batch asserts it rather than trusting this comment. */
const S: Item['drills'] = ['flashcard', 'voiceflash', 'sentence', 'review'];
const SD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'review'];
const SR: Item['drills'] = ['sentence', 'roleplay', 'review'];
/** RECEPTIVE ONLY. §6: the exception rows are shown and never produced, so they
 *  must not reach a flashcard, a voiceflash or the dictée. */
const RO: Item['drills'] = ['sentence', 'review'];

const T = ['a2', 'pronominal', 'passe-compose', 'etre'];

export const PRONOMINAUX_PASSE: Row[] = [
  /* ── A. THE FOUR CELLS. se laver, bare, one verb, one person shape at a
   *     time, and the last two letters are the whole content of the screen.
   *     a2.21's four cells of aller are the model and the frame is bare for the
   *     same reason: a complement on the end is a second thing for the eye.   */
  { id: 'fr.a2.verbes.791', kind: 'sentence', level: 'a2', theme: THEME, fr: "Il s'est lavé.", en: 'He washed.', ipa: '/il sɛ la.ve/', respell: 'eel seh lah-VAY', person: 'il', bucket: 'cell', aux: 'etre', ending: '', tags: [...T, 'cell', 'laver'], drills: SD, audioRef: null, version: 1, notes: 'The plain form, and the one the other three are built off. Ten letters, so the dictée takes it in LETTERS mode.' },
  { id: 'fr.a2.verbes.792', kind: 'sentence', level: 'a2', theme: THEME, fr: "Elle s'est lavée.", en: 'She washed.', ipa: '/ɛl sɛ la.ve/', respell: 'ehl seh lah-VAY', person: 'elle', bucket: 'cell', aux: 'etre', ending: 'e', tags: [...T, 'cell', 'laver'], drills: SD, audioRef: null, version: 1, notes: 'One letter more and not one sound more. THE HALF OF THE PAIR the exception is set against.' },
  { id: 'fr.a2.verbes.793', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils se sont lavés.', en: 'They washed.', ipa: '/il sə sɔ̃ la.ve/', respell: 'eel suh sohⁿ lah-VAY', person: 'ils', bucket: 'cell', aux: 'etre', ending: 's', tags: [...T, 'cell', 'laver'], drills: SD, audioRef: null, version: 1, notes: 'The first word changes for the plural and so does the second, and neither change is audible.' },
  { id: 'fr.a2.verbes.794', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elles se sont lavées.', en: 'They washed, and they are all women.', ipa: '/ɛl sə sɔ̃ la.ve/', respell: 'ehl suh sohⁿ lah-VAY', person: 'elles', bucket: 'cell', aux: 'etre', ending: 'es', tags: [...T, 'cell', 'laver'], drills: S, audioRef: null, version: 1, notes: 'Both endings at once. SEVENTEEN LETTERS, so dicteeMode puts it in word mode and it carries no dictation drill.' },

  /* ── B. THE SIX PERSONS. se lever, tôt frame. Corrections §4 calls reusing a
   *     neighbour\'s frame word a feature; a2.10, a2.10.l2, a2.21 and a2.22 all
   *     use tôt and this is the fifth.                                        */
  { id: 'fr.a2.verbes.795', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me suis levé tôt.', en: 'I got up early.', ipa: '/ʒə mə sɥi lə.ve to/', respell: 'zhuh muh swee luh-VAY TOH', person: 'je', bucket: 'person', aux: 'etre', ending: '', tags: [...T, 'person', 'lever'], drills: S, audioRef: null, version: 1, notes: 'The first person, and the sentence the whole lesson assembles.' },
  { id: 'fr.a2.verbes.796', kind: 'sentence', level: 'a2', theme: THEME, fr: "Tu t'es levé tôt.", en: 'You got up early.', ipa: '/ty tɛ lə.ve to/', respell: 'tü teh luh-VAY TOH', person: 'tu', bucket: 'person', aux: 'etre', ending: '', tags: [...T, 'person', 'lever', 'elision'], drills: S, audioRef: null, version: 1, notes: 'THE LITTLE WORD ELIDES. te becomes t before es, which is one of only two persons where anything elides at all.' },
  { id: 'fr.a2.verbes.797', kind: 'sentence', level: 'a2', theme: THEME, fr: "Il s'est levé tôt.", en: 'He got up early.', ipa: '/il sɛ lə.ve to/', respell: 'eel seh luh-VAY TOH', person: 'il', bucket: 'person', aux: 'etre', ending: '', tags: [...T, 'person', 'lever', 'elision'], drills: S, audioRef: null, version: 1, notes: 'And se becomes s. The other elided person, and the commonest sentence shape in the corpus.' },
  { id: 'fr.a2.verbes.798', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous nous sommes levés tôt.', en: 'We got up early.', ipa: '/nu nu sɔm lə.ve to/', respell: 'noo noo somm luh-VAY TOH', person: 'nous', bucket: 'person', aux: 'etre', ending: 's', tags: [...T, 'person', 'lever', 'doubled'], drills: S, audioRef: null, version: 1, notes: `THE DOUBLED WORD AND THE FALSE POSITIVE. somm rather than sohm: sommes is a real m and a superscript there teaches a sound the word has not got. ${Cap(unitRef('a2.21'))} §2.` },
  { id: 'fr.a2.verbes.799', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous vous êtes levés tôt.', en: 'You got up early.', ipa: '/vu vu zɛt lə.ve to/', respell: 'voo voo zeht luh-VAY TOH', person: 'vous', bucket: 'person', aux: 'etre', ending: 's', tags: [...T, 'person', 'lever', 'doubled'], drills: S, audioRef: null, version: 1, notes: 'Doubled again, and nothing elides here even though êtes opens on a vowel: vous does not shorten.' },
  { id: 'fr.a2.verbes.800', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils se sont levés tôt.', en: 'They got up early.', ipa: '/il sə sɔ̃ lə.ve to/', respell: 'eel suh sohⁿ luh-VAY TOH', person: 'ils', bucket: 'person', aux: 'etre', ending: 's', tags: [...T, 'person', 'lever'], drills: S, audioRef: null, version: 1, notes: 'ZERO published sentences in the whole corpus, which is §5 for the sixth cell running.' },

  /* ── C. THE AUXILIARY FLIP. THE OWNS, and the required layout. Three pairs,
   *     avoir first because that is the sentence the learner already owns and
   *     the one the error is derived from.                                    */
  { id: 'fr.a2.verbes.801', kind: 'sentence', level: 'a2', theme: THEME, fr: "J'ai lavé la voiture.", en: 'I washed the car.', ipa: '/ʒe la.ve la vwa.tyʁ/', respell: 'zhay lah-VAY lah vwah-TÜR', person: 'je', bucket: 'flip', aux: 'avoir', ending: '', tags: [...T, 'flip', 'avoir', 'laver'], drills: S, audioRef: null, version: 1, notes: 'NO LITTLE WORD, SO avoir. Something is being washed and the sentence names it. This shape is published twice and the reflexive one not at all.' },
  { id: 'fr.a2.verbes.802', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me suis lavé.', en: 'I washed.', ipa: '/ʒə mə sɥi la.ve/', respell: 'zhuh muh swee lah-VAY', person: 'je', bucket: 'flip', aux: 'etre', ending: '', tags: [...T, 'flip', 'etre', 'laver'], drills: SD, audioRef: null, version: 1, notes: 'THE LITTLE WORD ARRIVES AND THE FIRST WORD FLIPS. Same verb, same person, same morning. This is the whole lesson on one card.' },
  { id: 'fr.a2.verbes.803', kind: 'sentence', level: 'a2', theme: THEME, fr: "J'ai couché les enfants.", en: 'I put the children to bed.', ipa: '/ʒe ku.ʃe le zɑ̃.fɑ̃/', respell: 'zhay koo-SHAY lay zahⁿ-FAHⁿ', person: 'je', bucket: 'flip', aux: 'avoir', ending: '', tags: [...T, 'flip', 'avoir', 'coucher'], drills: S, audioRef: null, version: 1, notes: 'Second pair, and coucher without the little word means putting somebody else to bed.' },
  { id: 'fr.a2.verbes.804', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me suis couché.', en: 'I went to bed.', ipa: '/ʒə mə sɥi ku.ʃe/', respell: 'zhuh muh swee koo-SHAY', person: 'je', bucket: 'flip', aux: 'etre', ending: '', tags: [...T, 'flip', 'etre', 'coucher'], drills: SD, audioRef: null, version: 1, notes: 'And it flips again, on a verb where nobody would guess it from the meaning.' },
  { id: 'fr.a2.verbes.805', kind: 'sentence', level: 'a2', theme: THEME, fr: "J'ai réveillé mon frère.", en: 'I woke my brother up.', ipa: '/ʒe ʁe.vɛ.je mɔ̃ fʁɛʁ/', respell: 'zhay ray-veh-YAY mohⁿ FREHR', person: 'je', bucket: 'flip', aux: 'avoir', ending: '', tags: [...T, 'flip', 'avoir', 'reveiller'], drills: S, audioRef: null, version: 1, notes: 'Third pair. Waking somebody else is avoir and it names who.' },
  { id: 'fr.a2.verbes.806', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me suis réveillé.', en: 'I woke up.', ipa: '/ʒə mə sɥi ʁe.vɛ.je/', respell: 'zhuh muh swee ray-veh-YAY', person: 'je', bucket: 'flip', aux: 'etre', ending: '', tags: [...T, 'flip', 'etre', 'reveiller'], drills: SD, audioRef: null, version: 1, notes: 'Three verbs, three flips, and not one of them has anything to do with movement. Sixteen letters, the last value LETTERS mode allows.' },

  /* ── D. THE EXCEPTION. §6, RECEPTIVE ONLY. The required pair, and 792 is its
   *     other half rather than a fifth row.                                   */
  { id: 'fr.a2.verbes.807', kind: 'sentence', level: 'a2', theme: THEME, fr: "Elle s'est lavé les mains.", en: 'She washed her hands.', ipa: '/ɛl sɛ la.ve le mɛ̃/', respell: 'ehl seh lah-VAY lay MAHⁿ', person: 'elle', bucket: 'object', aux: 'etre', ending: null, tags: [...T, 'object', 'receptive'], drills: RO, audioRef: null, version: 1, notes: 'NAMED, NOT TAUGHT. Something is named after the second word and the ending goes. The reason is a2.24s. Receptive drills only: no flashcard, no voiceflash, no dictation.' },
  { id: 'fr.a2.verbes.808', kind: 'sentence', level: 'a2', theme: THEME, fr: "Elle s'est brossé les dents.", en: 'She brushed her teeth.', ipa: '/ɛl sɛ bʁɔ.se le dɑ̃/', respell: 'ehl seh bro-SAY lay DAHⁿ', person: 'elle', bucket: 'object', aux: 'etre', ending: null, tags: [...T, 'object', 'receptive'], drills: RO, audioRef: null, version: 1, notes: `The second of the two shapes ${unitRef('a1.25')} taught, so the learner meets both in week one. Receptive only, for the same reason.` },

  /* ── E. THE OTHER SIDE OF THE AGREEMENT, which is a2.21s rule unchanged.    */
  { id: 'fr.a2.verbes.809', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle a lavé la voiture.', en: 'She washed the car.', ipa: '/ɛl a la.ve la vwa.tyʁ/', respell: 'ehl ah lah-VAY lah vwah-TÜR', person: 'elle', bucket: 'avoir', aux: 'avoir', ending: '', tags: [...T, 'avoir', 'laver'], drills: S, audioRef: null, version: 1, notes: `A WOMAN, avoir, AND NOTHING ON THE END. ${Cap(unitRef('a2.21'))} taught that and this lesson does not touch it. Set against 792, which is the same woman and the same verb.` },

  /* ── F. THE NEGATIVE. §3. ne never elides; the little word does, in two
   *     persons, and the second word sits outside the wrap in all six.        */
  { id: 'fr.a2.verbes.810', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je ne me suis pas levé.', en: 'I did not get up.', ipa: '/ʒə nə mə sɥi pa lə.ve/', respell: 'zhuh nuh muh swee pah luh-VAY', person: 'je', bucket: 'negative', aux: 'etre', ending: '', tags: [...T, 'negation'], drills: S, audioRef: null, version: 1, notes: 'THE SLOT SENTENCE. Six words, six positions, and the learner has met all six. Seventeen letters, so the dictée cannot take this one.' },
  { id: 'fr.a2.verbes.811', kind: 'sentence', level: 'a2', theme: THEME, fr: "Tu ne t'es pas levé.", en: 'You did not get up.', ipa: '/ty nə tɛ pa lə.ve/', respell: 'tü nuh teh pah luh-VAY', person: 'tu', bucket: 'negative', aux: 'etre', ending: '', tags: [...T, 'negation', 'elision'], drills: SD, audioRef: null, version: 1, notes: 'ne WHOLE AND THE LITTLE WORD SHORTENED, which is the opposite of every earlier lesson in the arc. Fourteen letters.' },
  { id: 'fr.a2.verbes.812', kind: 'sentence', level: 'a2', theme: THEME, fr: "Il ne s'est pas levé.", en: 'He did not get up.', ipa: '/il nə sɛ pa lə.ve/', respell: 'eel nuh seh pah luh-VAY', person: 'il', bucket: 'negative', aux: 'etre', ending: '', tags: [...T, 'negation', 'elision'], drills: SD, audioRef: null, version: 1, notes: 'The same again in the third person. Fifteen letters, and the dictée runs it against the affirmative.' },
  { id: 'fr.a2.verbes.813', kind: 'sentence', level: 'a2', theme: THEME, fr: "Elle ne s'est pas levée.", en: 'She did not get up.', ipa: '/ɛl nə sɛ pa lə.ve/', respell: 'ehl nuh seh pah luh-VAY', person: 'elle', bucket: 'negative', aux: 'etre', ending: 'e', tags: [...T, 'negation'], drills: S, audioRef: null, version: 1, notes: 'THE ENDING SITS OUTSIDE THE WRAP and goes on exactly as it would without one. Eighteen letters, so it is not dictated.' },
  { id: 'fr.a2.verbes.814', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous ne nous sommes pas levés.', en: 'We did not get up.', ipa: '/nu nə nu sɔm pa lə.ve/', respell: 'noo nuh noo somm pah luh-VAY', person: 'nous', bucket: 'negative', aux: 'etre', ending: 's', tags: [...T, 'negation', 'doubled'], drills: S, audioRef: null, version: 1, notes: 'Four little words in a row and nothing shortens. Twenty-four letters, the longest row in the lesson.' },
  { id: 'fr.a2.verbes.815', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils ne se sont pas levés.', en: 'They did not get up.', ipa: '/il nə sə sɔ̃ pa lə.ve/', respell: 'eel nuh suh sohⁿ pah luh-VAY', person: 'ils', bucket: 'negative', aux: 'etre', ending: 's', tags: [...T, 'negation'], drills: S, audioRef: null, version: 1, notes: 'ZERO published sentences for this shape in any person. §5.' },

  /* ── G. VERBS THE LESSON NEVER CONJUGATED. Doctrine §B.1: the mission that
   *     makes the learner produce a form from a verb the lesson never showed
   *     them has taught the system.                                           */
  { id: 'fr.a2.verbes.816', kind: 'sentence', level: 'a2', theme: THEME, fr: "Elle s'est habillée.", en: 'She got dressed.', ipa: '/ɛl sɛ ta.bi.je/', respell: 'ehl seh tah-bee-YAY', person: 'elle', bucket: 'unseen', aux: 'etre', ending: 'e', tags: [...T, 'unseen', 'habiller'], drills: SD, audioRef: null, version: 1, notes: 's habiller, built rather than shown, and the ending is on it. Sixteen letters exactly.' },
  { id: 'fr.a2.verbes.817', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous nous sommes dépêchés.', en: 'We hurried.', ipa: '/nu nu sɔm de.pɛ.ʃe/', respell: 'noo noo somm day-peh-SHAY', person: 'nous', bucket: 'unseen', aux: 'etre', ending: 's', tags: [...T, 'unseen', 'depecher', 'doubled'], drills: S, audioRef: null, version: 1, notes: `Nobody hurries themselves and it takes être anyway, because the little word is there. ${Cap(unitRef('a2.22'))} taught that this one means nothing by it.` },
  { id: 'fr.a2.verbes.818', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous vous êtes reposés.', en: 'You rested.', ipa: '/vu vu zɛt ʁə.po.ze/', respell: 'voo voo zeht ruh-poh-ZAY', person: 'vous', bucket: 'unseen', aux: 'etre', ending: 's', tags: [...T, 'unseen', 'reposer', 'doubled'], drills: S, audioRef: null, version: 1, notes: 'The doubled shape on a verb the table never carried, in the past.' },
  { id: 'fr.a2.verbes.819', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils se sont douchés.', en: 'They showered.', ipa: '/il sə sɔ̃ du.ʃe/', respell: 'eel suh sohⁿ doo-SHAY', person: 'ils', bucket: 'unseen', aux: 'etre', ending: 's', tags: [...T, 'unseen', 'doucher'], drills: SD, audioRef: null, version: 1, notes: 'Sixteen letters, so the dictée can ask for the plural ending on a verb that was never conjugated on a screen.' },

  /* ── H. THE SCENE. Doctrine §B.2. SCENE_ERROR is wrong French and is NOT
   *     published: a published row is a flashcard.                            */
  { id: 'fr.a2.verbes.820', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Et ce matin ?', en: 'And this morning?', ipa: '/e sə ma.tɛ̃/', respell: 'ay suh mah-TAHⁿ', person: 'none', bucket: 'scene', aux: 'etre', ending: null, tags: [...T, 'scene'], drills: S, audioRef: null, version: 1, notes: 'Her question, and it asks for nothing the learner has not got.' },
  { id: 'fr.a2.verbes.821', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me suis levé à six heures.', en: 'I got up at six.', ipa: '/ʒə mə sɥi lə.ve a si zœʁ/', respell: 'zhuh muh swee luh-VAY ah see ZUHR', person: 'je', bucket: 'scene', aux: 'etre', ending: '', tags: [...T, 'scene'], drills: S, audioRef: null, version: 1, notes: 'What works, and what the sentence was supposed to be.' },
  { id: 'fr.a2.verbes.822', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu as levé quoi ?', en: 'You lifted what?', ipa: '/ty a lə.ve kwa/', respell: 'tü ah luh-VAY KWAH', person: 'tu', bucket: 'scene', aux: 'avoir', ending: '', tags: [...T, 'scene', 'avoir'], drills: S, audioRef: null, version: 1, notes: 'WHAT THE OTHER FIRST WORD GIVES. She did not hear a mistake. She heard a different sentence and waited for the missing thing.' },
  { id: 'fr.a2.verbes.823', kind: 'sentence', level: 'a2', theme: THEME, fr: "Ah, tu t'es levé. Je comprends.", en: 'Ah, you got up. I see.', ipa: '/a ty tɛ lə.ve ʒə kɔ̃.pʁɑ̃/', respell: 'ah, tü teh luh-VAY. zhuh kohⁿ-PRAHⁿ', person: 'tu', bucket: 'scene', aux: 'etre', ending: '', tags: [...T, 'scene'], drills: S, audioRef: null, version: 1, notes: 'The repair, which costs the story its opening. Nobody was rude and the sentence was told twice.' },

  /* ── I. THE CONVERSATION. Every user turn is a corpus row, as a2.21s and
   *     a2.22s are, and the alternates are rows this lesson has already
   *     taught.                                                               */
  { id: 'fr.a2.verbes.824', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me suis réveillé à sept heures.', en: 'I woke up at seven.', ipa: '/ʒə mə sɥi ʁe.vɛ.je a sɛ tœʁ/', respell: 'zhuh muh swee ray-veh-YAY ah seh TUHR', person: 'je', bucket: 'talk', aux: 'etre', ending: '', tags: [...T, 'talk'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 1.' },
  { id: 'fr.a2.verbes.825', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je me suis douché et je me suis habillé.', en: 'I showered and got dressed.', ipa: '/ʒə mə sɥi du.ʃe e ʒə mə sɥi za.bi.je/', respell: 'zhuh muh swee doo-SHAY ay zhuh muh swee zah-bee-YAY', person: 'je', bucket: 'talk', aux: 'etre', ending: '', tags: [...T, 'talk'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 2. Two of them in one sentence, and the first word is repeated rather than shared.' },
  { id: 'fr.a2.verbes.826', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous nous sommes levés en même temps.', en: 'We got up at the same time.', ipa: '/nu nu sɔm lə.ve ɑ̃ mɛm tɑ̃/', respell: 'noo noo somm luh-VAY ahⁿ mem TAHⁿ', person: 'nous', bucket: 'talk', aux: 'etre', ending: 's', tags: [...T, 'talk', 'doubled'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 3. The doubled form and the plural ending, produced rather than read.' },
  { id: 'fr.a2.verbes.827', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Non, je ne me suis pas couché tard.', en: 'No, I did not go to bed late.', ipa: '/nɔ̃ ʒə nə mə sɥi pa ku.ʃe taʁ/', respell: 'nohⁿ, zhuh nuh muh swee pah koo-SHAY TAR', person: 'je', bucket: 'talk', aux: 'etre', ending: '', tags: [...T, 'talk', 'negation'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 4. The negative, on a verb the six-person walk never carried.' },
  { id: 'fr.a2.verbes.828', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils se sont dépêchés ce matin.', en: 'They hurried this morning.', ipa: '/il sə sɔ̃ de.pɛ.ʃe sə ma.tɛ̃/', respell: 'eel suh sohⁿ day-peh-SHAY suh mah-TAHⁿ', person: 'ils', bucket: 'talk', aux: 'etre', ending: 's', tags: [...T, 'talk'], drills: SR, audioRef: null, version: 1, notes: 'Role play turn 5, on the verb that carries the little word and means nothing by it.' },

  /* ── J. THE GENERALISATION, AND THE REST OF THE DICTÉE.                     */
  { id: 'fr.a2.verbes.829', kind: 'sentence', level: 'a2', theme: THEME, fr: "Elle s'est reposée un peu.", en: 'She rested a little.', ipa: '/ɛl sɛ ʁə.po.ze œ̃ pø/', respell: 'ehl seh ruh-poh-ZAY uhⁿ PUH', person: 'elle', bucket: 'unseen', aux: 'etre', ending: 'e', tags: [...T, 'unseen', 'reposer'], drills: S, audioRef: null, version: 1, notes: 'A fourth verb the lesson never conjugated, with the ending on it.' },
  { id: 'fr.a2.verbes.830', kind: 'sentence', level: 'a2', theme: THEME, fr: "Elle s'est souvenue de mon nom.", en: 'She remembered my name.', ipa: '/ɛl sɛ suv.ny də mɔ̃ nɔ̃/', respell: 'ehl seh soov-NÜ duh mohⁿ NOHⁿ', person: 'elle', bucket: 'unseen', aux: 'etre', ending: 'e', tags: [...T, 'unseen', 'souvenir'], drills: S, audioRef: null, version: 1, notes: 'THE SECOND WORD IS NOT BUILT FROM THE ENDING THIS LESSON USES. souvenue comes off venir, which is a2.20s -u group, and the ending goes on it exactly the same way.' },
  { id: 'fr.a2.verbes.831', kind: 'sentence', level: 'a2', theme: THEME, fr: "Tu t'es couché tard.", en: 'You went to bed late.', ipa: '/ty tɛ ku.ʃe taʁ/', respell: 'tü teh koo-SHAY TAR', person: 'tu', bucket: 'extra', aux: 'etre', ending: '', tags: [...T, 'extra', 'coucher', 'elision'], drills: SD, audioRef: null, version: 1, notes: 'Fifteen letters, and the elided little word in a sentence with nothing else going on.' },
  { id: 'fr.a2.verbes.832', kind: 'sentence', level: 'a2', theme: THEME, fr: "Il s'est douché.", en: 'He showered.', ipa: '/il sɛ du.ʃe/', respell: 'eel seh doo-SHAY', person: 'il', bucket: 'extra', aux: 'etre', ending: '', tags: [...T, 'extra', 'doucher', 'elision'], drills: SD, audioRef: null, version: 1, notes: 'Twelve letters. The singular against 819s plural, and only the writing tells them apart.' },
  { id: 'fr.a2.verbes.833', kind: 'sentence', level: 'a2', theme: THEME, fr: "Elle s'est levée.", en: 'She got up.', ipa: '/ɛl sɛ lə.ve/', respell: 'ehl seh luh-VAY', person: 'elle', bucket: 'extra', aux: 'etre', ending: 'e', tags: [...T, 'extra', 'lever'], drills: SD, audioRef: null, version: 1, notes: 'Thirteen letters, and the one the dictée uses to ask for the e on the verb the six-person walk ran on.' },
];

/* ─── DERIVED LISTS, so every layer walks one array ─────────────────────────*/

export const BY_ID: ReadonlyMap<string, Row> = new Map(PRONOMINAUX_PASSE.map((r) => [r.id, r]));
export const AUTHORED_IDS: string[] = PRONOMINAUX_PASSE.map((r) => r.id);
export const AUTHORED_ITEMS: Item[] = PRONOMINAUX_PASSE.map(toItem);

export function toItem(r: Row): Item {
  const { person: _p, bucket: _b, aux: _a, ending: _e, ...item } = r;
  return item;
}

export const rowById = (id: string): Row => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${Cap(unitRef('a2.23'))}: no authored row ${id}. The corpus file is the source of truth and it does not have this id.`);
  return r;
};

export const bucketIds = (b: Bucket): string[] => PRONOMINAUX_PASSE.filter((r) => r.bucket === b).map((r) => r.id);
export const personId = (b: Bucket, p: Person): string => {
  const r = PRONOMINAUX_PASSE.find((x) => x.bucket === b && x.person === p);
  if (!r) throw new Error(`${Cap(unitRef('a2.23'))}: no ${b} row for ${p}.`);
  return r.id;
};

/** THE FOUR CELLS, in cell order. THE AGREEMENT LAYOUT. */
export const CELL_IDS: readonly string[] = ['fr.a2.verbes.791', 'fr.a2.verbes.792', 'fr.a2.verbes.793', 'fr.a2.verbes.794'];

/** THE SIX PERSONS, in learner order. */
export const PERSONS: readonly Person[] = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
export const PERSON_IDS: string[] = PERSONS.map((p) => personId('person', p));

/** THE AUXILIARY FLIP, as [avoir, être]. THE REQUIRED LAYOUT AND THE OWNS. */
export const FLIP_PAIRS: readonly (readonly [string, string])[] = [
  ['fr.a2.verbes.801', 'fr.a2.verbes.802'],
  ['fr.a2.verbes.803', 'fr.a2.verbes.804'],
  ['fr.a2.verbes.805', 'fr.a2.verbes.806'],
];

/** THE EXCEPTION PAIR, as [agrees, does not]. THE SECOND REQUIRED LAYOUT.
 *  792 is the agreeing half and it is a `cell` row, so the pair reuses it
 *  rather than authoring a fifth copy of the same sentence. */
export const OBJECT_PAIR: readonly (readonly [string, string])[] = [
  ['fr.a2.verbes.792', 'fr.a2.verbes.807'],
  ['fr.a2.verbes.833', 'fr.a2.verbes.808'],
];

/** The avoir/être agreement contrast: the same woman, the same verb, and only
 *  one of them takes an ending. a2.21's rule, unchanged. */
export const AVOIR_PAIR: readonly [string, string] = ['fr.a2.verbes.809', 'fr.a2.verbes.792'];

/** The two persons where the LITTLE WORD elides, and the four where nothing
 *  does. §3: the elision has moved off `ne` and onto the pronoun, and every
 *  layer asserts this by name because a later author will assume it matches
 *  a2.21's. */
export const CLITIC_ELIDES: readonly string[] = ["tu t'es", "il s'est", "elle s'est", "on s'est"];
export const NOTHING_ELIDES: readonly string[] = ['je me suis', 'nous nous sommes', 'vous vous êtes', 'ils se sont', 'elles se sont'];
export const NE_NEVER_ELIDES = true;
export const ELISION_CLAIM =
  `${Cap(unitRef(PASSE_UNIT, 'a2'))} shortened ne for every person and ${unitRef(ETRE_UNIT, 'a2')} for three. Here ne never shortens, and the little word shortens instead, in two.`;

/* ─── THE NEGATIVE, AND THE PAIR CHECK ──────────────────────────────────────*/

/** Strips `ne` and `pas` from a negative and puts back what the elision took,
 *  so a negative row can be compared against its affirmative.
 *
 *  WRITTEN FRESH RATHER THAN INHERITED. a2.05's had to restore `j'ai` from
 *  `je n'ai`, a2.21's had to put a vowel back on the auxiliary, and a2.22 needed
 *  none at all. Here `ne` never elides and the LITTLE WORD does, so this one
 *  only has to leave `ne` alone. §3. */
export function reduceNegative(fr: string): string {
  return fr
    .replace(/(?<![\p{L}\p{N}])ne\s+/giu, '')
    .replace(/\s+pas\b/giu, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/* ─── WHAT NO EAR QUESTION MAY SEPARATE ────────────────────────────────────
 *
 * Corrections §5: a `listenChoose` offering two members of one homophone group
 * has no correct answer, and marking one right certifies a bug. §7: the ending
 * is inaudible on EVERY verb in this lesson without exception, so every set of
 * four cells is one sound end to end and so is every singular/plural pair whose
 * subject is il/ils or elle/elles.                                            */

export const HOMOPHONE_GROUPS: readonly (readonly string[])[] = [
  ["Il s'est lavé.", 'Ils se sont lavés.'],
  ["Elle s'est lavée.", 'Elles se sont lavées.'],
  ["Il s'est levé tôt.", 'Ils se sont levés tôt.'],
  ["Il s'est douché.", 'Ils se sont douchés.'],
  ["Elle s'est levée.", "Elle s'est lavée.", "Elle s'est lavé les mains."],
  ["Il ne s'est pas levé.", 'Ils ne se sont pas levés.'],
];

/** The claim about the ear, in one string. a2.21 §10 handed this forward: its
 *  own audible feminine was `mourir` and no reflexive has one. */
export const EAR_CLAIM =
  `You cannot check this one by listening. All four spellings are the same sound, on every verb here, and ${unitRef(ETRE_UNIT)} had one verb where you could hear it. This lesson has none.`;

/** Every four-cell set that is one sound, for the report and the guards. */
export const EXPECTED_ONE_SOUND_SETS = 6;
export const EXPECTED_AUDIBLE_F = 0;

/* ─── THE SCENE ────────────────────────────────────────────────────────────
 *
 * Doctrine §B.2: an A2 scene opens on somebody who started a sentence they could
 * not finish. NOT published as corpus rows: `SCENE_ERROR` is wrong French and a
 * published row is a flashcard.
 *
 * THE ERROR IS CAUSED BY THE CORRECT SENTENCE STANDING BESIDE IT, which is what
 * makes this the Owns dramatised rather than a generic slip. He has just said
 * « J'ai lavé la voiture » correctly. One question later the same reasoning
 * produces « J'ai levé à six heures », which is not a mistake anybody can hear:
 * it is a different sentence, and she waits for the missing thing.
 *
 * AND IT IS a2.22's SCENE ONE TENSE LATER. That lesson opened on « Je lève à
 * sept heures. » — the same verb, the same dropped little word, the same
 * listener waiting. The resolve beat says so, so the pair reads as a payoff.  */

export const SCENE_STALL = 'Ce matin, je... j\'ai... je me...';
export const SCENE_STALL_EN = 'This morning, I... I... I...';
export const SCENE_ERROR = "J'ai levé à six heures.";
export const SCENE_ERROR_EN = 'I lifted at six.';
export const SCENE_RIGHT = 'Je me suis levé à six heures.';

/** a2.22's own scene error, quoted so this one credits it. Read off `a2.22.l1`
 *  as shipped: it is the `wrong` line of that lesson's scene break. */
export const A222_SCENE_ERROR = 'Je lève à sept heures.';

/** a2.05 §11.2: a scene bubble whose `fr` ends in a SPACED EXCLAMATION MARK
 *  loses its tail on a Pixel 6. Not one bubble here contains « ! ». */
export const SCENE_BANNED_SUBSTRING = '!';

/* ─── THE ERRORS ────────────────────────────────────────────────────────────
 *
 * The four a learner actually makes. Every `wrong` is a string that must not
 * appear outside WRONG_FORM_SECTIONS, and the first is the single most likely
 * real error in the lesson.                                                   */

export const WRONG: readonly { wrong: string; right: string; why: string }[] = [
  {
    wrong: "Je m'ai levé.",
    right: 'Je me suis levé.',
    why: 'avoir on a verb carrying the little word. It comes from having just said « j\'ai levé la main » correctly, and it is the error this whole lesson exists to prevent.',
  },
  {
    wrong: 'Je suis me levé.',
    right: 'Je me suis levé.',
    why: 'The right first word and the little word behind it. The little word goes in front of the first word, never after it, and that has been true since the present tense.',
  },
  {
    wrong: "Elle s'est levé.",
    right: "Elle s'est levée.",
    why: 'The first word right and no ending. Nobody hears this and everybody who reads it sees it, which is why it survives so long.',
  },
  {
    wrong: 'Je ne me suis levé pas.',
    right: 'Je ne me suis pas levé.',
    why: 'The wrap closed round the second word instead of the first. It shuts straight after the first word, and the second word sits outside it.',
  },
];

/** The forms that are NOT French. Any of these outside WRONG_FORM_SECTIONS is a
 *  defect, and all three layers check it. */
export const BUILT_FORMS: readonly string[] = [
  "je m'ai", "j'ai me", "tu t'as", "il s'a", "elle s'a", "ils s'ont", 'nous nous avons',
  "m'ai levé", "m'ai lavé", "s'a levé", 'suis me levé', 'suis se levé', 'est se levé',
  'me suis levé pas', 'me suis pas levé pas', 'suis levé pas', "s'est levé pas",
  "s'est lavée les mains", "s'est brossée les dents", "me suis lavée les mains",
];

/** THE AUXILIARY ERROR, which the trap shows and nothing else may. */
export const AVOIR_TRAP = "Je m'ai levé.";
/** THE POSITION ERROR, the second most likely. */
export const POSITION_TRAP = 'Je suis me levé.';
/** THE NEGATION ERROR, which a2.22's extension does not by itself prevent. */
export const WRAP_TRAP = 'Je ne me suis levé pas.';

/* ─── THE IMPORTED ROWS ────────────────────────────────────────────────────
 *
 * §4: NOT ONE HEADWORD IS AUTHORED, for the seventh build running. Every
 * reflexive infinitive this lesson names already exists framed with `se`, which
 * a2.22 §7 settled.
 *
 * `inSeed` is what the probe said on 2026-08-15 and it is a PREDICTION. a2.05
 * §6, a2.20, a2.21 and a2.22 all mispredicted the cut, in both directions, four
 * builds running. The merge MEASURES the carry rather than trusting this column,
 * and the surprise check is the deliverable.                                   */

export type Imported = {
  id: string;
  fr: string;
  /** Why this lesson needs it on a screen. A row imported for no stated reason
   *  is a row the next author cannot safely remove. */
  why: string;
  inSeed: boolean;
};

/** THE TWELVE HEADWORDS. Eleven infinitives, all framed with `se` except
 *  `laver`, which is the bare form the auxiliary flip needs, plus the two
 *  auxiliaries, because the whole lesson is a choice between them. */
export const IMPORTED_HEADWORDS: readonly Imported[] = [
  { id: 'fr.a1.routines.028', fr: 'se laver', why: `The frame verb of the four cells and of the flip. ${Cap(unitRef('a2.22'))} built its whole paradigm on it.`, inSeed: true },
  { id: 'fr.a1.cuisine.183', fr: 'laver', why: 'THE BARE FORM, and the other half of the flip. The same verb with nothing in front of it takes avoir, and it is published.', inSeed: true },
  { id: 'fr.a1.routines.001', fr: 'se lever', why: 'The six-person walk runs on it, and it is the verb the scene fails on.', inSeed: true },
  { id: 'fr.a1.routines.020', fr: 'se coucher', why: 'The second flip pair, where nothing about the meaning predicts the first word.', inSeed: true },
  { id: 'fr.a1.routines.010', fr: 'se réveiller', why: 'The third flip pair, and the role play opens on it.', inSeed: true },
  { id: 'fr.a1.routines.011', fr: 'se doucher', why: 'One of the verbs the lesson never conjugates on a screen and then asks for.', inSeed: true },
  { id: 'fr.a1.routines.012', fr: "s'habiller", why: 'Same, and the one where the second word carries the ending on a screen.', inSeed: true },
  { id: 'fr.a1.routines.034', fr: 'se reposer', why: 'Same again, in the doubled person.', inSeed: true },
  { id: 'fr.a1.routines.087', fr: 'se dépêcher', why: 'The verb that carries the little word and means nothing by it, and takes être anyway. That is the reframe at its strongest.', inSeed: true },
  { id: 'fr.a1.routines.019', fr: 'se brosser les dents', why: `${Cap(unitRef('a1.25'))}\'s own phrase, and the second of the two shapes the exception turns on.`, inSeed: true },
  { id: 'fr.sons.verbes-essentiels.001', fr: 'être', why: 'The first word this lesson is about, in every sentence it authors.', inSeed: true },
  { id: 'fr.sons.verbes-essentiels.002', fr: 'avoir', why: `The one it is not, so the flip has a card. ${Cap(unitRef('a2.05'))}\'s.`, inSeed: true },
];

/** THE PUBLISHED SENTENCES, imported as evidence beside the authored paradigm
 *  rather than used as paradigm cells. §5: not one of them conjugates the frame
 *  verb, and the ones that exist are the reason the lesson can prove its claim
 *  rather than assert it. */
export const IMPORTED_SENTENCES: readonly Imported[] = [
  { id: 'fr.a2.routines.032', fr: 'Ce matin, je me suis levé tôt pour aller courir.', why: 'THE SHAPE, PUBLISHED AND IN THE SEED. Proof that the sentence the scene could not finish is ordinary French rather than a lesson invention.', inSeed: true },
  { id: 'fr.a2.routines.039', fr: 'Ils se sont couchés très tard hier soir.', why: 'The plural ending in a published sentence, in the seed, with the s nobody says.', inSeed: true },
  { id: 'fr.a2.routines.049', fr: 'Ce matin, je me suis réveillé tôt, puis j\'ai pris une douche.', why: 'BOTH FIRST WORDS IN ONE PUBLISHED SENTENCE. être in front of the reflexive and avoir in front of the plain verb, four words apart, written by somebody who was not teaching this. The flip section leans on it hardest.', inSeed: true },
  { id: 'fr.a1.rp-recits-temps.180', fr: 'Le lendemain matin, elle s\'est levée à cinq heures.', why: 'THE FEMININE ENDING, PUBLISHED. The corpus already agrees these and the learner has had no rule for it until now.', inSeed: false },
  { id: 'fr.a1.rp-recits-temps.199', fr: 'Ce matin, nous nous sommes levés très tôt pour partir.', why: 'The doubled word and the plural ending together, published.', inSeed: false },
  { id: 'fr.a1.rp-recits-temps.066', fr: 'Ce matin, j\'ai lavé la voiture.', why: 'THE AVOIR SIDE OF THE FLIP, PUBLISHED. The sentence the learner already owns, and the one the scene\'s error is derived from.', inSeed: false },
  { id: 'fr.a2.corps.001', fr: 'Elle s\'est cassé le bras en tombant du vélo.', why: 'THE EXCEPTION, ALREADY SHIPPED AND ALREADY UNAGREED. §6: a feminine subject, a second word with no ending, an A2 card in the cut. It is why the exception is named rather than left out.', inSeed: true },
  { id: 'fr.a1.corps.209', fr: 'Je me lave les mains avant de manger.', why: `The same shape in the present, which ${unitRef('a2.22')} imported receptively and said was this lesson\'s. It is, and this is where it is named.`, inSeed: true },
];

export const IMPORTED: readonly Imported[] = [...IMPORTED_HEADWORDS, ...IMPORTED_SENTENCES];
export const IMPORTED_IDS: string[] = IMPORTED.map((i) => i.id);
export const EXPECTED_IMPORTED = 20;

/** The routine words a screen names, asserted BY ID rather than by string. No
 *  routine vocabulary section exists and this build authors nothing in
 *  `routines`; a1.25 owns that theme and a2.22 kept out of it too. */
export const ROUTINE_IDS: string[] = IMPORTED.filter((i) => i.id.includes('.routines.')).map((i) => i.id);

/** Rows read and refused, with the reason, so a later author does not have to
 *  rediscover why an obvious import is missing. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.a2.corps.002', fr: "Elle s'est cassé la jambe en tombant dans l'escalier.", why: 'A SECOND COPY OF THE SAME EVIDENCE. fr.a2.corps.001 makes the point and a second card of a woman breaking a limb is a mood this lesson does not want. Measured and recorded rather than carried.' },
  { id: 'fr.a2.corps.006', fr: "Elle s'est fait mal au genou en courant.", why: 'The same shape again, on `se faire mal`, which is a fixed expression rather than a reflexive with an object after it. It would teach the exception through a construction the lesson never explains.' },
  { id: 'fr.a2.recits-au-passe.075', fr: "J'ai lavé la voiture ce matin.", why: 'The avoir side of the flip, and a second copy of fr.a1.rp-recits-temps.066 with the time expression moved. One is imported and the corpus file records that both exist, which is the §5 measurement.' },
  { id: 'fr.a1.heure-et-date.050', fr: 'Ce matin, je me suis réveillé tôt.', why: 'A shorter copy of fr.a2.routines.049 without the avoir half. The longer one is imported because the flip is what this lesson needs it for.' },
  { id: 'fr.a2.salutations.002', fr: "Nous nous sommes vus hier soir, c'était sympa.", why: 'CARRIES THE IMPERFECT. « c\'était » is a tense beyond A2\'s first twenty, and « vus » is a reciprocal, which §9 leaves out entirely. Two refusals in one row.' },
  { id: 'fr.b1.conflits-reconciliation.018', fr: "Depuis qu'ils se sont parlé, la tension a beaucoup diminué.", why: 'THE ONLY PUBLISHED RECIPROCAL PAST IN THE CORPUS, and it is B1. §9 leaves reciprocals out and this row is the measurement behind that, not a card.' },
  { id: 'fr.a1.corps.001', fr: 'la tête', why: `GENDERED single-word row. It would join ${unitRef('a1.03')}\'s measured ending population the moment the merge carried it (${unitRef('a2.04')} ledger §0). The exception card names the body part inside a sentence and needs no headword for it.` },
  { id: 'fr.sons.elision.041', fr: "s'habiller", why: `A COMPETING RESPELLING, [sa-bee-YAY] against routines\' [sah-bee-YAY]. Invariants §9: a variant is not a violation. ${Cap(unitRef('a2.22'))} refused the same row for the same reason and this build does not reopen it.` },
];

/* ─── RESPELLING REPAIRS ───────────────────────────────────────────────────
 *
 * §8: this build repairs nothing and supplies nothing. Every headword it
 * imports already holds the house value and every published sentence it imports
 * carries no respelling at all, which is normal and is why `imported.ts` throws
 * rather than handing a screen an empty bracket.
 *
 * Both tables are asserted EMPTY rather than omitted, so the day a row needs one
 * the shape is already there and corrections §14.1's mixed-row problem cannot
 * arrive unnoticed.                                                            */

export const RESPELL_REPAIRS_VISIBLE: readonly { id: string; fr: string; from: string; half: string; to: string; blind: boolean; house: boolean; why: string }[] = [];
export const RESPELL_REPAIRS_INVISIBLE: readonly { id: string; fr: string; from: string; to: string; why: string }[] = [];
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [];

/** THE FALSE POSITIVE, INHERITED FROM a2.21 AND ARRIVING ON FOUR AUTHORED ROWS.
 *
 *  a2.21 §3 measured that every respelling guard in this band is phrased the
 *  wrong way round: they all assert « the respelling must not be FLAGGED », and
 *  putting a superscript on `sommes` produces a value the checker CALLS CLEAN,
 *  because its complaint was a false positive to begin with. So the guard here
 *  asserts the FIXED VALUE BY NAME on every row that carries it, and asserts
 *  that the superscript form is BOTH clean and wrong.                          */
export const FALSE_POSITIVES: readonly {
  word: string; flagged: string; superscript: string; fixed: string; ids: readonly string[]; why: string;
}[] = [
  {
    word: 'sommes',
    flagged: 'sohm',
    superscript: 'sohⁿm',
    fixed: 'somm',
    ids: ['fr.a2.verbes.798', 'fr.a2.verbes.814', 'fr.a2.verbes.817', 'fr.a2.verbes.826'],
    why: '`sommes` is /sɔm/ with a real m and NO nasal vowel in it at all, so a superscript teaches a sound the word has not got. Invariants §3 prescribes the doubled consonant for exactly this (`automne` becomes `o-TONN`) and a2.21 §2 applied it here first. The three-way measurement is the point: `sohm` is FLAGGED, `sohⁿm` is CLEAN AND WRONG, and `somm` is clean and right.',
  },
];

/** Candidates tried and NOT met, so the absence is reported rather than left as
 *  a silence. Corrections §6 asks every build to look and to say. */
export const FALSE_POSITIVE_CANDIDATES: readonly string[] = [
  'la voiture', 'les mains', 'les dents', 'la jambe', 'une douche', 'le nom',
];
export const EXPECTED_FALSE_POSITIVES_FOUND = 1;

/* ─── THE MEASUREMENTS, so the report and the guards read one object ───────*/

export const MEASURED = {
  headwordsAuthored: 0,
  headwordsImported: 12,
  rowsAuthored: 43,
  participlesAsCorpusItems: 0,
  /** §5, measured over 27,956 published sentences on 2026-08-15. All thirteen
   *  cells of the frame verb are zero and the construction is everywhere. */
  frameVerbCells: {
    'je me suis lavé': 0, "tu t'es lavé": 0, "il s'est lavé": 0,
    'nous nous sommes lavés': 0, 'vous vous êtes lavés': 0, 'ils se sont lavés': 0,
    "elle s'est lavée": 0, 'ils se sont levés': 0,
    "elle s'est lavé les mains": 0, 'ne me suis pas': 0, 'ne se sont pas': 0,
  },
  constructionWide: {
    "s'est": 219, 'se sont': 104, 'nous nous sommes': 46, 'me suis': 37,
    'vous vous êtes': 0, "elle s'est": 49,
  },
  /** §6. The exception, already published and already unagreed. */
  publishedUnagreed: 3,
  /** §2. Two strings, not one, and neither has drifted. */
  negationStringsDistinct: 2,
  negationStringsDrifted: 0,
  /** §1. Neither prerequisite leaked one form of this lesson's subject. */
  neighbourLeaks: 0,
} as const;

/* ─── THE SHAPE OF THE LESSON, as explicit constants ───────────────────────
 *
 * Invariants §5: assert against an EXPLICIT CONSTANT, never a figure derived
 * from the lesson, because a derived count compares the content to itself and
 * passes on any rewording.                                                    */

export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 30;
export const EXPECTED_AUTHORED = 43;
/** Doctrine §B.5: the Owns must outweigh the paradigm. Seven against two. */
export const OWNS_SECTIONS = 7;
export const PARADIGM_SECTIONS = 2;
/** a2.20 measured a `cardDeck` hint ellipsising at 60 on a Pixel 6. */
export const HINT_MAX = 60;
/** Corrections §4. `dicteeMode` switches above this and word mode hands every
 *  real word over pre-spelled. */
export const DICTEE_MAX_LETTERS = 16;
/** a2.03 §3: three term chips fit if the labels plus separators come to 37. */
export const CHIP_ROW_BUDGET = 37;
/* ─── THE MISSION-ROW TITLE BUDGET, AND IT IS A WIDTH ──────────────────────
 *
 * a2.13 recorded a mission-row title cut at 27 and a2.14 §13 corrected it to a
 * WIDTH. **This build shipped `TITLE_MAX = 27` as a CHARACTER COUNT, asserted
 * it nowhere, and two titles clipped on a Pixel 6.** Measured on the device:
 *
 *     "Build It, One Word At A Time"        28 ch   FITS
 *     "Verbs You Were Never Shown"          26 ch   CLIPPED
 *     "You Already Have Four Of The Five"    33 ch   CLIPPED
 *
 * Twenty-six clips while twenty-eight fits, so a character count cannot model
 * it at all: the difference is that `V Y W N S w` are wide glyphs and
 * `i l t , space` are narrow ones. a2.14 §13 said exactly this and this build
 * carried the number without carrying the meaning.
 *
 * `titleWidth()` is an em estimate with the ordinary proportions of a sans
 * face. It does not have to be exact — it has to separate the three measured
 * cases, and `TITLE_MUST_FIT` and `TITLE_MUST_CLIP` are walked by all three
 * layers so the model is PROVED against the device rather than asserted.       */

const EM: Readonly<Record<string, number>> = {
  i: 0.28, l: 0.28, j: 0.28, I: 0.28, '.': 0.28, ',': 0.28, "'": 0.2, '’': 0.2, ' ': 0.28,
  t: 0.35, f: 0.35, r: 0.35,
  m: 0.85, w: 0.85, W: 0.9, M: 0.9,
  O: 0.72, N: 0.72, Q: 0.72, G: 0.72,
  v: 0.5, s: 0.5, y: 0.5, z: 0.5, c: 0.5, x: 0.5,
};
/** The width of a mission-row title, in ems, on a Pixel 6. */
export const titleWidth = (s: string): number => {
  let w = 0;
  for (const ch of s) w += EM[ch] ?? (ch >= 'A' && ch <= 'Z' ? 0.65 : 0.55);
  return Math.round(w * 100) / 100;
};

/** The budget, set BETWEEN the widest measured pass and the narrowest measured
 *  clip rather than at either.
 *
 *  THE BAND IS NARROW AND THAT IS AN HONEST LIMIT OF THE MODEL. The widest
 *  title measured FITTING is « One Word Changes The Other » at 13.46 and the
 *  narrowest measured CLIPPING is « Verbs You Were Never Shown » at 13.64, so
 *  the true boundary is somewhere in 0.18 em. The first draft of this budget
 *  was 13.20 and it refused `s02-flip`, which the device renders in full —
 *  caught by this guard on its first run, which is the guard doing its job in
 *  the direction nobody plans for.
 *
 *  A title landing inside that band should be checked on a device rather than
 *  trusted either way. */
export const TITLE_WIDTH_MAX = 13.55;

/** The measured cases, all four observed on a Pixel 6. Any change to
 *  `titleWidth` or to the budget that stops separating these has stopped
 *  modelling the device. */
export const TITLE_MUST_FIT: readonly string[] = [
  'Build It, One Word At A Time',
  'One Word Changes The Other',
];
export const TITLE_MUST_CLIP: readonly string[] = [
  'Verbs You Were Never Shown',
  'You Already Have Four Of The Five',
];

/** a2.20 found « peur.. » on a Pixel 6 and a2.22 §4 widened it: the general
 *  defect is A SENTENCE-FINAL STOP WITH PUNCTUATION AFTER IT, which is what a
 *  quoted corpus row produces mid-sentence. An ellipsis still passes.
 *
 *  a2.22 §10 says to widen it BEFORE authoring rather than after, and this build
 *  did, which is why nothing here needed a v2. */
export const DOUBLE_STOP = /(?<!\.)\.[.,;:](?!\.)/u;

/** The frames that do NOT fit the dictée, measured through the real
 *  `dicteeMode`, recorded so a later author does not try them.
 *
 *  THE FOURTH CELL IS THE COST AND IT IS DECLARED RATHER THAN HIDDEN. « Elles
 *  se sont lavées. » is the one cell carrying BOTH endings and it is seventeen
 *  letters, one over. a2.21's four cells all fitted because `est`/`sont` is
 *  shorter than `se sont`; the little word is what pushes this one over, and no
 *  reflexive verb in the language is short enough to get it back. */
export const DICTEE_TOO_LONG: readonly { fr: string; letters: number }[] = [
  { fr: 'Elles se sont lavées.', letters: 17 },
  { fr: 'Vous vous êtes lavées.', letters: 18 },
  { fr: 'Je ne me suis pas levé.', letters: 17 },
  { fr: "Elle ne s'est pas levée.", letters: 18 },
  { fr: 'Nous nous sommes levés tôt.', letters: 22 },
  { fr: 'Vous vous êtes levés tôt.', letters: 20 },
  { fr: 'Ils se sont levés tôt.', letters: 17 },
];

/* ─── THE JARGON LIST ──────────────────────────────────────────────────────
 *
 * Invariants §8 bans grammar jargon from a learner surface. a2.17 §5 measured
 * that the house does NOT ban the part-of-speech names and that what it actually
 * does is PREFER the plain phrase, so `verb` and `pronoun` are not here and the
 * ratio guard below governs them.
 *
 * a2.15 §3: `hasPhrase` is boundary-exact, so a list holding `participle` does
 * not catch `participles`. Every entry is checked in its -s plural as well.
 *
 * `auxiliary` and `past participle` ARE here, because this band has plain
 * phrases for both and uses them: a2.21 runs « the first word » and « the second
 * word » and this lesson inherits the pair.                                    */

export const JARGON: readonly string[] = [
  'past participle', 'participle', 'auxiliary', 'auxiliary verb',
  'compound tense', 'compound past', 'perfect tense', 'present perfect',
  'reflexive pronoun', 'reflexive verb', 'pronominal verb', 'clitic',
  'paradigm', 'conjugation table', 'direct object pronoun',
  'indirect object pronoun', 'first person', 'second person', 'third person',
  'grammatical person', 'valency', 'transitive', 'intransitive',
  'reciprocal', 'inflection', 'preverbal', 'morpheme', 'orthographic',
  'imperfect', 'past participle agreement',
];

/** THE RATIO GUARD (a2.17 §5). The plain phrase must outnumber the technical
 *  one on a learner surface. Guarding the ratio rather than banning the word is
 *  what the house actually does, and it is what lets `overview.titleEn` stay the
 *  unit's own English name, which `content_units` requires it to match. */
export const PLAIN_OVER_TECHNICAL: readonly { plain: string; technical: string }[] = [
  { plain: 'first word', technical: 'auxiliary' },
  { plain: 'second word', technical: 'participle' },
  { plain: 'little word', technical: 'pronoun' },
];

/* ─── THE AVOIR GUARD'S OWN TEST CASES ─────────────────────────────────────
 *
 * THE HARDEST GUARD IN THE BUILD, because this lesson's whole subject is a
 * sentence containing a form of être next to a reflexive pronoun, and the thing
 * it must refuse is the SAME SHAPE with avoir. Corrections §14.4: a shape built
 * out of French morphology fires on the English, so both lists are walked and
 * the guard is proved to fire and proved not to.
 *
 * Corrections §14.3: the house word boundary excludes the apostrophe, so a shape
 * using it cannot see `m'ai` or `s'est`. The apostrophe is dropped from the LEFT
 * boundary only.                                                               */

export const AVOIR_MUST_FIRE: readonly string[] = [
  "Je m'ai levé.",
  "Tu t'as levé.",
  "Il s'a levé tôt.",
  "Elle s'a lavée.",
  "Ils s'ont couchés.",
  'Nous nous avons levés.',
  "Je m'ai lavé les mains.",
];

export const AVOIR_MUST_NOT_FIRE: readonly string[] = [
  // The English that broke a2.17's version of this shape.
  'You did not stall ON A WORD YOU had not learned.',
  // Every legitimate authored shape.
  'Je me suis levé.',
  "Il s'est lavé.",
  'Nous nous sommes levés tôt.',
  "J'ai lavé la voiture.",
  "J'ai couché les enfants.",
  'Elle a lavé la voiture.',
  'Tu as levé quoi ?',
  // The one published sentence with BOTH first words in it.
  "Ce matin, je me suis réveillé tôt, puis j'ai pris une douche.",
  // English prose that happens to contain the French function words.
  'The little word is on a card, and a listener will wait for you to say what.',
  // The inherited lines this lesson quotes verbatim.
  NEGATION_RULE,
  A118_REFRAME,
  AGREEMENT_RULE,
];

/* ─── READING HELPERS, used by the lesson so no French is typed twice ──────*/

export const fr = (id: string): string => rowById(id).fr;
export const en = (id: string): string => rowById(id).en;
export const respellOf = (id: string): string => {
  const r = rowById(id).respell;
  if (!r) throw new Error(`${Cap(unitRef('a2.23'))}: ${id} has no respelling and a card wants one.`);
  return r;
};
export const ipaOf = (id: string): string => {
  const r = rowById(id).ipa;
  if (!r) throw new Error(`${Cap(unitRef('a2.23'))}: ${id} has no ipa and a card wants one.`);
  return r;
};
export const sub = (id: string): string => `[${respellOf(id)}]`;

/** Every row that carries the dictation drill, which is what the dictée may
 *  target. Checked against Postgres by the batch, not against the seed. */
export const DICTATION_IDS: string[] = PRONOMINAUX_PASSE.filter((r) => r.drills.includes('dictation')).map((r) => r.id);

/** Every row whose auxiliary is avoir, which is legal ONLY where the verb
 *  carries no little word. The guards read this rather than re-parsing. */
export const AVOIR_ROW_IDS: string[] = PRONOMINAUX_PASSE.filter((r) => r.aux === 'avoir').map((r) => r.id);
export const ETRE_ROW_IDS: string[] = PRONOMINAUX_PASSE.filter((r) => r.aux === 'etre').map((r) => r.id);
