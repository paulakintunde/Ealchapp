// a2.24.l1 « Pronoms d'objet indirect » — the corpus, the constants and the
// decisions. Trail seq 22, the SECOND lesson of the pronoun block (21, 22, 23).
//
// ════════════════════════════════════════════════════════════════════════════
//  WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-15
// ════════════════════════════════════════════════════════════════════════════
//
// Doctrine §F asks for this header. The brief was written against a real probe
// on the same day, so it is far better on facts than the batch-1 and batch-2
// briefs were. It is still wrong six times, and FIVE of the six are about the
// respellings, which is the one area where reasoning about the checker is no
// substitute for running it.
//
//  1. « THE CONSTRUCTION IS ALMOST ABSENT, WHICH IS CORRECTIONS §3 FOR THE
//     SEVENTH BUILD RUNNING. » TRUE OF THE BARE FRAMES AND FALSE OF THE
//     CONSTRUCTION, AND THIS IS THE FIRST BUILD IN THE BAND WHERE THE
//     DIFFERENCE MATTERS.
//
//     The brief's own figures are je lui parle 1 · je leur parle 1 · je lui
//     donne 0 · il lui téléphone 0 · je ne lui parle pas 0. Measured against all
//     28,047 published sentences rather than five probes:
//
//       je lui   7      lui parle   6      il lui     5
//       je leur  6      leur parle  2      elle lui   3
//
//     and, far more to the point, THE THEME ALREADY PUBLISHES THIS LESSON'S OWN
//     TEACHING NOTES ON ROWS SOMEBODY ELSE WROTE:
//
//       fr.a2.pronoms-essentiels.017  « lui parler »  [lwee par-LAY]
//         notes: "Lui replaces à lui or à elle; as an indirect object it never
//                 changes for gender."
//       fr.a2.pronoms-essentiels.025  « leur parler » [luhr par-LAY]
//         notes: "Leur means to them; do not confuse it with the possessive
//                 leur, which means their."
//       fr.a1.pronoms-essentiels.126  « Je leur parle chaque matin. »
//         notes: "The indirect object pronoun 'leur' never takes an s, unlike
//                 the possessive adjective 'leurs'."
//       fr.a1.verbes-essentiels.003   « téléphoner »
//         notes: "Followed by à: téléphoner à quelqu'un."
//
//     THE TRAP THIS BRIEF CALLS THE LESSON'S CENTRE IS ALREADY ANNOTATED ON A
//     PUBLISHED ROW, and so is the Owns, on the headword row of the verb that
//     makes the point best. a2.06 sharpened §3 by finding that a construction
//     can occur twice and still leave you authoring every cell. This build
//     sharpens it the other way: THE FRAMES ARE STILL ALL ABSENT — 0 of 51
//     exist as whole sentences — and the CLAIM is not new to the corpus at all.
//     Those rows are imported rather than re-authored, and the two respelled
//     phrases are where this lesson's `lui` and `leur` respellings are READ OFF
//     rather than invented (a2.15's precedent).
//
//  2. « répondre HAS A NASAL THAT ENDS A TOKEN AND A NASAL FOLLOWED BY A
//     CONSONANT, ONE VISIBLE AND ONE INVISIBLE, IN ONE STRING. » FALSE. It has
//     ONE nasal and it is invisible. Measured through the real function:
//
//       ray-POHNDR   CLEAN      ray-POHⁿDR   clean
//
//     `ray` carries no nasal at all, so there is nothing visible to repair.
//     répondre is a PURE §6 BLIND ROW, not a §14.1 mixed one, and the practical
//     consequence is the opposite of the brief's: repairing what the checker
//     reports changes NOTHING and reports success. `half === from` on all six.
//
//     THIS BUILD THEREFORE HAS SIX BLIND ROWS WHERE a2.06 HAD ZERO, and
//     corrections §6's warning is live here rather than reported as an absence.
//
//  3. THE REPAIR LIST IS INCOMPLETE IN EVERY LINE, AND ONE ENTRY IS INVERTED.
//     The brief names two rows per word. Measured across every published row:
//
//       répondre   SEVEN rows. SIX hold ray-POHNDR and ONE holds the correct
//                  ray-POHⁿDR. The brief names one of the six.
//       demander   FIVE rows. FOUR flagged, one correct. The brief names two.
//       montrer    TWO rows, as the brief says. The only line it gets right.
//       envoyer    FOUR rows and NOT ONE OF THEM IS CORRECT. The brief offers
//                  « ahn-vwah-YAY vs ahn-vwa-YAY » as a choice between a right
//                  and a wrong value; BOTH are flagged, and there is no correct
//                  published respelling of envoyer anywhere in the corpus. This
//                  build therefore has to repair the row it imports, which no
//                  earlier build in the band has had to do.
//
//  4. « Je lui parle. IS 12 LETTERS. » It is 10, measured through the real
//     `dicteeMode` letter count. Immaterial — both are inside the 16 — and worth
//     recording because §4 asks for the count to be proved by the function
//     rather than done by hand, and the brief did it by hand.
//
//  5. « SIX OF THOSE HAVE NO ENGLISH PREPOSITION. » FIVE of the six do. The
//     brief's own table annotates `parler à quelqu'un` as « talk TO someone »
//     and then counts it among the six that give the learner no signal. The
//     miscount matters because the split between the verbs English marks and the
//     verbs it does not IS the shape of this lesson's Owns, and it is 4 and 6
//     rather than 4 and 6 with parler on the wrong side. §7.
//
//  6. « THE RESPELLING REPAIR LIST STARTS HERE » NAMES FOUR WORDS AND MISSES THE
//     ONE THAT MATTERS MOST, which is not a competing respelling at all.
//     `téléphone` — the conjugated form this lesson prints on nine cards —
//     FALSE-POSITIVES through `hasPlainNasalFor`. /te.le.fɔn/ has NO nasal vowel;
//     the n is a real /n/, and `tay-lay-FOHN` is flagged exactly the way
//     invariants §3 records for `jaune` and `automne`. Corrections §6 closes by
//     asking builds to look for this and report the absence if they do not find
//     one. a2.06 looked and found none. THIS BUILD FOUND ONE, ON ITS OWN
//     HEADLINE VERB, and a second on `donne`. §8.
//
// ── AND ONE THING THE BRIEF LISTS AS UNVERIFIED THAT IS ALREADY DECIDED ──────
//
// « Whether a1.17's possessive wording is compatible with calling leur a second
// job. » It is more than compatible: a1.17 SHIPPED THE HAND-OFF. The last card
// of its s16-leur reads « There is a second leur and it is not a possessive. It
// sits in front of a verb rather than in front of a thing. You will meet it
// later. The test is the same as always: a possessive has a thing behind it. »
// That test is quoted here verbatim rather than restated. §9.
//
// ════════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §1. IDENTITY, MEASURED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Read out of `content_units` 2026-08-15 by `_a2_preflight_pronouns.ts`, not
 *  taken from the brief and not taken from the spine.
 *
 *  Corrections §1 holds for this unit as it has held for every other: the
 *  spine's `sub` — « lui, leur — the verbs that take à » — exists NOWHERE in the
 *  database and carries an em dash, which is banned in every user-facing string.
 *  The `canDo` matched the spine byte for byte, which the brief also said and
 *  which cost one line to confirm.
 *
 *  `seq` is a NUMBER. `corpus:probe` stringifies it when it prints. */
export const UNIT = {
  id: 'a2.24',
  seq: 22,
  level: 'a2' as const,
  track: 'a2',
  title: 'Indirect Object Pronouns',
  sub: "Pronoms d'objet indirect",
  canDo: 'Can replace an indirect object with lui or leur and knows which verbs take à',
  prereqUnitIds: ['a2.06'],
} as const;

export const LESSON_ID = 'a2.24.l1';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §2. THE THEME, AND THE ROW COUNT
 * ══════════════════════════════════════════════════════════════════════════ */

/** The brief lists the home as UNVERIFIED and offers `verbes`, which holds 870
 *  published rows. `pronoms-essentiels`, and this is an INHERITED decision
 *  rather than a fresh one: a2.06 settled it for all three of seq 21..23 in its
 *  build report §4, gave three reasons, and the doctrine's own trail table says
 *  the same. Re-checked here and nothing has changed:
 *
 *  1. It is the semantic home, and more strongly than it was for a2.06: FIFTY
 *     FIVE rows of this theme already carry `lui`, `leur` or `leurs`, including
 *     the two respelled phrases this lesson reads its own respellings off.
 *  2. a2.22 and a2.23 wrote into `verbes` because they are VERB lessons whose
 *     rows conjugate. This lesson's rows turn on two words that are not verbs.
 *  3. Splitting the block would hand a2.25 a decision it has no reason to
 *     revisit, and its brief already tells it to take ids from here.
 *
 *  Consequence accepted, and it is worse here than it was for a2.06: the seed
 *  cut for this theme was TWO rows out of 486 before a2.06 landed. The merge
 *  carries every imported row by name. */
export const THEME = 'pronoms-essentiels';

/** Corrections §10: the maximum has been useless since a2.10.l2 took .461..500.
 *  THE ROW COUNT IS THE ONLY SIGNAL. Measured 2026-08-15 before any apply, after
 *  a2.06's +48. */
export const THEME_ROWS_BEFORE = 534;
export const A2_ROWS_BEFORE = 236;

/** The claimed block. a2.06's report hands over `.237`; measured independently
 *  here, `fr.a2.pronoms-essentiels` runs .001 to .236 with NO GAPS, so .237 is
 *  both the next free id and the next free id in fact rather than in report. */
export const ID_FIRST = 237;
export const ID_LAST = 286;

export const A = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ═══════════════════════════════════════════════════════════════════════════
 *  §3. THE NEIGHBOURS, QUOTED RATHER THAN RESTATED
 * ══════════════════════════════════════════════════════════════════════════ */

/** a2.06, seq 21, the hard prerequisite and the lesson this one is the contrast
 *  to. ITS POSITION RULE IS QUOTED VERBATIM AND TAUGHT NOWHERE HERE. Read off
 *  its build report §1 rather than paraphrased, and the test asserts the string
 *  so a rewording goes red. Three lessons, one rule. */
export const DIRECT_UNIT = 'a2.06';
export const POSITION_RULE = 'The pronoun goes in front of the verb, not after it.';

/** a2.06's own frame sentence and its feminine partner, IMPORTED rather than
 *  re-authored. « Je le vois. » beside « Je lui parle. » is a cross-lesson claim
 *  in two sentences, and importing the row makes it literally a2.06's sentence
 *  rather than a copy of one. */
export const A206_FRAME_ID = 'fr.a2.pronoms-essentiels.190';
export const A206_KNOW_ID = 'fr.a2.pronoms-essentiels.196';

/** a1.17, Les adjectifs possessifs, seq 17 of A1. THE SOURCE OF THE TRAP.
 *
 *  The brief lists as UNVERIFIED whether a1.17's wording is compatible with
 *  calling leur a second job. Read as shipped: a1.17's `s16-leur` ends on a card
 *  headed « A different word you will meet later » which says the second leur
 *  exists, says it sits in front of a verb, and hands the learner a test. That
 *  is not merely compatible, it is a hand-off, and the test is quoted verbatim
 *  here so the two lessons run one rule between them.
 *
 *  a1.17 also guards `OBJECT_PRONOUN_FRAMES` — « leur parle », « je leur » and
 *  a dozen more — against its OWN production surfaces. Checked: the guard is
 *  scoped to a1.17 through `productionSurfaces()`, so this lesson cannot trip
 *  it. Worth confirming rather than assuming, because a seed-wide version of
 *  that guard would have made this lesson unbuildable. */
export const POSSESSIVE_UNIT = 'a1.17';
export const A117_TEST = 'a possessive has a thing behind it';

/** a2.04, Prépositions de lieu, seq 13. THE OTHER JOB OF à, named and taught
 *  nowhere. Its reframe is about which article `à` folds in front of a PLACE;
 *  this lesson's `à` marks a person and folds nothing, because the pronoun
 *  swallows the preposition whole. */
export const PLACE_UNIT = 'a2.04';
export const A204_REFRAME = 'À folds the article in. En throws it out. Chez leaves it alone.';

/** a2.02, Irréguliers 1, seq 5. It NAMED the recurring shape and every lesson
 *  from seq 14 onward quotes it by unit id. Doctrine §B.7. */
export const WHAT_FOLLOWS_UNIT = 'a2.02';
export const WHAT_FOLLOWS = 'what comes next decides';

/** THE SIXTH OCCURRENCE OF THE SHAPE, and a2.06 was the fifth one lesson ago.
 *
 *  a2.06's instance was an article against a pronoun and its own report says the
 *  distinguisher was in what follows AND where the word sits. This one is the
 *  same machinery on a different pair:
 *
 *      Je lui parle.        a verb follows        object pronoun, before it
 *      Je parle avec lui.   a preposition is before it   stressed pronoun
 *
 *  Named as the sixth, and a2.06 named beside it, because a learner who watches
 *  the shape repeat stops believing French is arbitrary. */
export const SHAPE_EXTENSION =
  'The sixth time, and the same test as the fifth: look at what sits beside the word.';

/** a2.22, Les verbes pronominaux, seq 19, and a2.23, seq 20. a2.23 SHIPPED A
 *  LEARNER SURFACE POINTING AT THIS UNIT and this build has to honour it. §10. */
export const REFLEXIVE_UNIT = 'a2.22';
export const REFLEXIVE_PAST_UNIT = 'a2.23';
/** Verbatim from a2.23's shipped body. The promise this lesson keeps. */
export const A223_POINTER_TAIL = 'the reason the ending disappears on this screen is waiting there too';

/** a2.25, seq 23, immediately after. It inherits THIS LESSON'S à framing (§6)
 *  and reserves y, en and multiple-pronoun order. Not one pronominal `y` or
 *  `en`, and not one two-pronoun sentence, appears on any surface here. */
export const Y_EN_UNIT = 'a2.25';

/* ─── THE NEGATION ARC ──────────────────────────────────────────────────────
 *
 * a2.23 settled this on 2026-08-15 and a2.06 re-measured it independently one
 * lesson later and agreed. It is settled, not UNVERIFIED, and this build takes
 * it as settled rather than measuring it a third time — but it DOES assert the
 * negative, because the value of the finding is that the two strings are still
 * two.
 *
 *   a1.18   « Wrap the verb, then ask what the verb was. »      which words
 *   a2.19   « Wrap the verb that changed, not the one carrying the meaning. »
 *                                                                which verb
 *   a2.06   quotes both, and adds THE WRAP GOES ROUND THE PRONOUN AND THE VERB
 *           TOGETHER, because a2.22's extension is true of the behaviour here
 *           and false of the cause.
 *
 * a2.06's sentence is exactly true of this lesson: `lui` and `leur` are in the
 * same cluster and the wrap closes round both words. So this build QUOTES
 * a2.06's extension verbatim and adds nothing. Three lessons, one sentence, and
 * a2.25's brief asks for the same string again.                              */

export const NEGATION_UNIT = 'a1.18';
export const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';

export const FUTUR_UNIT = 'a2.19';
export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';

/** a2.06's, QUOTED AND NOT EXTENDED. The brief asks that the negation string
 *  match a2.06's, which matches a2.22's. It does, exactly. */
export const NEGATION_EXTENSION = 'The wrap goes round the pronoun and the verb together.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §4. THE REFRAME
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE LINE. Doctrine §B.4: could the learner apply it in the half-second
 *  between subject and verb?
 *
 *  This one is a TEST rather than a description, and the thing it tests is the
 *  one thing the learner can check: where the person sits in the sentence they
 *  were about to say. « I phone my mother » gives no signal at all in English;
 *  « je téléphone À ma mère » gives one, and the whole lesson is teaching which
 *  verbs put the à there.
 *
 *  It deliberately does NOT carry the position, because a2.06 owns the position
 *  and its rule is quoted here unchanged. One rule from the neighbour, one rule
 *  of its own, and the learner runs both. */
export const REFRAME = 'If the person sits behind à, the pronoun is lui or leur.';

/** Invariants §5: assert against an EXPLICIT CONSTANT, never a figure derived
 *  from the lesson.
 *
 *  Counted over the NOT-deduped display walk, which is what a2.22 §3 requires: a
 *  Set collapses a short line authored twice and under-reports every reframe
 *  short enough to appear in both a `say` and a card body.
 *
 *  Thirteen, against a2.06's measured 17, a2.19's 16 and a2.22's 8. Lower than
 *  a2.06's ON PURPOSE: this lesson carries TWO rules on its surface, its own and
 *  a2.06's position rule, and running both at seventeen would put one or the
 *  other on every screen. a2.06's report records that twenty-three read as a
 *  slogan rather than a rule; two rules at seventeen each would be worse than
 *  that. Thirteen and eight is the split, and the seven is deliberately the
 *  quieter of the two because it is not this lesson's to teach. */
export const REFRAME_COUNT = 13;

/** a2.06's position rule, QUOTED RATHER THAN TAUGHT, and counted for the same
 *  reason: it is the one line in this lesson somebody could quietly delete
 *  without breaking a sentence, and deleting it would make three lessons look
 *  like three rules. Eight, against this lesson's own thirteen, so the borrowed
 *  rule stays audibly the quieter of the two. */
export const POSITION_RULE_COUNT = 8;

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'lui and leur replace an indirect object.',
    why: "THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right, for a reason worth stating precisely: it requires the learner to already know what an indirect object is, and that is the thing they cannot see. It is also the technical compound this build keeps off every learner surface except the unit's own English name. §9.",
  },
  {
    candidate: 'Use lui for one person and leur for more than one.',
    why: 'True, and it is the small half. Two pronouns is a very small paradigm and the doctrine says not to stretch it; a learner holding this line still says « je téléphone lui », because it answers WHICH word and the lesson exists to answer WHETHER. The verb list is the lesson and this sentence has nothing in it about verbs.',
  },
  {
    candidate: 'The pronoun goes in front of the verb, not after it.',
    why: "a2.06's, quoted here seven times and taught nowhere. It cannot be this lesson's reframe because it is already true and already learned: a reframe that repeats the prerequisite adds a slogan rather than a rule. Doctrine §B.4 asks what the learner does differently, and by seq 22 they already do this.",
  },
  {
    candidate: 'lui means to him or to her.',
    why: 'A gloss rather than a rule, and the word it leans on is the word English does not say. Six of the ten verbs here have no English preposition at all, so a learner translating « to him » finds nothing to translate and reaches for le or la instead. The gloss teaches the error.',
  },
  {
    candidate: 'Ask who receives it.',
    why: 'Short enough and it is a semantic test, which is exactly what this lesson has to refuse. Nothing is received in « je lui téléphone » or « je lui réponds », and a learner running a meaning test on those two verbs gets the wrong answer. The choice is LEXICAL: it is a property of the verb, not of the situation, and the reframe has to point at the verb.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §5. THE OWNS: THE VERBS THAT PUT A PERSON BEHIND à
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE VERB-LIST SIZE DECISION, WHICH THE BRIEF LEAVES OPEN.
 *
 *  « Whether the à-taking verb list should run to ten or to six. The tapTable
 *  ceiling is six rows on a Pixel 6 and the canDo says "knows which verbs take
 *  à" without a number. »
 *
 *  TEN, SPLIT 6 + 4, and the split is the teaching rather than a workaround for
 *  the ceiling.
 *
 *  A six-verb list under-delivers on a canDo whose whole content is a list, and
 *  four of the ten are the ones an English speaker gets RIGHT by accident —
 *  which is worth a screen, because a learner who only meets the hard six comes
 *  away believing French is arbitrary rather than believing English is
 *  unreliable. So:
 *
 *    THE SIX      no English preposition at all. The tapTable, exactly at the
 *                 Pixel 6 ceiling, one row per verb with the English gloss
 *                 showing the gap. These are the ones that produce the error.
 *    THE FOUR     English says "to", so the learner has a signal and mostly
 *                 uses it. A separate section, because their job is to make the
 *                 six look like the exception they are.
 *    ALL TEN      the reference sheet, at layer deep, where a table is legal.
 *
 *  The brief's own count of the six is wrong: it annotates `parler à quelqu'un`
 *  as « talk TO someone » in its own table and then counts parler among the six
 *  with no English preposition. Measured against ordinary English, it is five
 *  and one, and moving parler to the four is what makes the tapTable exactly six
 *  rather than seven. Header §5. */
export type AVerb = {
  fr: string;
  /** The infinitive's imported row. NOT ONE IS AUTHORED. */
  id: string;
  /** « téléphoner à quelqu'un » */
  frame: string;
  /** « phone someone » */
  en: string;
  /** What English puts in front of the person, or null where it puts nothing. */
  englishPrep: string | null;
  /** The authored row that shows the verb with a pronoun. */
  row: number;
};

/** THE SIX. English gives the learner NO signal, so the à is invisible until
 *  somebody says it out loud. These are the tapTable, and six is the ceiling. */
export const A_VERBS_SILENT: readonly AVerb[] = [
  { fr: 'téléphoner', id: 'fr.a1.verbes-essentiels.003', frame: 'téléphoner à quelqu\'un', en: 'phone someone', englishPrep: null, row: 243 },
  { fr: 'répondre', id: 'fr.a2.verbes.020', frame: 'répondre à quelqu\'un', en: 'answer someone', englishPrep: null, row: 242 },
  { fr: 'demander', id: 'fr.a2.verbes.019', frame: 'demander à quelqu\'un', en: 'ask someone', englishPrep: null, row: 244 },
  { fr: 'dire', id: 'fr.sons.verbes-essentiels.005', frame: 'dire à quelqu\'un', en: 'tell someone', englishPrep: null, row: 245 },
  { fr: 'montrer', id: 'fr.sons.verbes-essentiels.054', frame: 'montrer à quelqu\'un', en: 'show someone', englishPrep: null, row: 246 },
  { fr: 'offrir', id: 'fr.sons.verbes-essentiels.053', frame: 'offrir à quelqu\'un', en: 'give someone', englishPrep: null, row: 247 },
];

/** THE FOUR. English says "to", so the learner has a signal and usually takes
 *  it. Their job on the screen is to make the six above look like an exception
 *  in ENGLISH rather than a rule in French. */
export const A_VERBS_MARKED: readonly AVerb[] = [
  { fr: 'parler', id: 'fr.sons.verbes-essentiels.015', frame: 'parler à quelqu\'un', en: 'talk to someone', englishPrep: 'to', row: 238 },
  { fr: 'écrire', id: 'fr.a1.dictee.090', frame: 'écrire à quelqu\'un', en: 'write to someone', englishPrep: 'to', row: 248 },
  { fr: 'envoyer', id: 'fr.sons.verbes-essentiels.046', frame: 'envoyer à quelqu\'un', en: 'send to someone', englishPrep: 'to', row: 249 },
  { fr: 'donner', id: 'fr.sons.verbes-essentiels.013', frame: 'donner à quelqu\'un', en: 'give to someone', englishPrep: 'to', row: 250 },
];

export const A_VERBS: readonly AVerb[] = [...A_VERBS_SILENT, ...A_VERBS_MARKED];

/** The ceiling, from corrections §8, asserted rather than remembered. */
export const TAPTABLE_MAX_ROWS = 6;

/** THE à FRAMING, AND a2.25 INHERITS IT VERBATIM.
 *
 *  a2.25's brief: « a2.24 was told to teach that à Marie becomes lui and the à
 *  disappears. Quote its à framing. » So this string is written to be quotable
 *  by a lesson that will say the same thing about a THING rather than a person,
 *  and the two halves have to survive that substitution. */
export const A_FRAMING = 'À plus a person becomes lui or leur, and the à disappears with it.';

/** And the half of it a2.25 replaces. Kept separate so the hand-off card can say
 *  what changes without this lesson teaching any of it. */
export const A_FRAMING_NEXT = 'à plus a thing';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §6. THE DISTINCTION THE LEARNER LOSES
 * ══════════════════════════════════════════════════════════════════════════ */

/** Going from direct to indirect, the gender disappears. Everything in French so
 *  far has taught the learner that gender gets MORE marked, not less, so this
 *  has to be named rather than left to be noticed. It is also a mercy and the
 *  card says so: one less thing to get right. */
export const GENDER_LOST =
  'The word lui is him or her. Going from one set to the other you lose the gender, which is one less thing to get right.';

export const DIRECT_SET = 'le · la · les';
export const INDIRECT_SET = 'lui · lui · leur';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §7. THE TRAPS
 * ══════════════════════════════════════════════════════════════════════════ */

/** TRAP ONE, AND IT IS THE trapDrill. a1.17 shipped the possessive and the
 *  learner has had « leur maison » since seq 17 of A1.
 *
 *      Je leur parle.        pronoun, invariable, NEVER takes -s
 *      Voici leur maison.    possessive, singular thing
 *      Voici leurs clés.     possessive, plural things, agrees
 *
 *  MEASURED, AND THE BRIEF'S CLAIM HOLDS: `fold()` keeps a final -s, so
 *  « Je leur parle. » and « Je leurs parle. » do NOT fold together. This is a
 *  rare A2 lesson whose central trap is fully testable on a typed surface, and
 *  the quiz is shaped around it. */
export const LEURS_ERROR = 'Je leurs parle.';
export const LEUR_RULE = 'The leur in front of a verb never takes an s. Ever.';

/** TRAP TWO. `lui` is also the stressed pronoun, and doctrine §B.7's recurring
 *  shape for the SIXTH time. */
export const STRESSED_CONTRAST_A = 238; // Je lui parle.
export const STRESSED_CONTRAST_B = 261; // Je parle avec lui.
export const STRESSED_RULE =
  'After a little word like avec, sans or pour, lui stands on its own and stays where English puts it.';

/** TRAP THREE. The à of a2.04 is a preposition of place and survives into the
 *  sentence; this à marks a person and does not survive at all. Learners keep it
 *  and write « je parle à lui », which is grammatical and means something else. */
export const A_KEPT_ERROR = 'Je parle à lui.';
export const A_KEPT_WHY =
  'Grammatical, and it is the stressed pronoun doing a different job: it singles the person out, the way English does with « I talk to HIM ».';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §8. THE JARGON LINE, MEASURED RATHER THAN GUESSED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §14.5: guard the RATIO rather than banning a word, because the
 *  part-of-speech names are house vocabulary and what the house actually does is
 *  prefer the plain phrase. a2.06 measured `pronoun` at 233 uses across the
 *  shipped seed, `subject` at 173 and `object` at 49, and settled the rule this
 *  build inherits: the technical compound appears ONLY where `content_units`
 *  forces it, which is `overview.titleEn`.
 *
 *  This unit's English name is « Indirect Object Pronouns », so the exempt
 *  string here contains `indirect object` and `object pronoun` — BOTH of the
 *  entries a2.06 refused outright. The exemption is checked to BE that exact
 *  string, so every other occurrence still fails. */
export const PLAIN_PHRASE = 'the person behind à';
export const PLAIN_TARGET = 'the person you are talking to';

export const JARGON_NOUNS: readonly string[] = [
  'indirect object', 'indirect objects',
  'object pronoun', 'object pronouns',
  'clitic', 'clitics',
  'antecedent', 'antecedents',
  'anaphora', 'anaphoras',
  'possessive adjective', 'possessive adjectives',
  'possessive determiner', 'possessive determiners',
];

/** Adjectives and mass nouns, which have no plural a learner surface would use.
 *  Corrections §13 asks for the -s plural of every entry and a2.06 §7.2 measured
 *  that the rule cannot be applied to every entry: « accusatives » is not
 *  English. Two lists, and a second guard refuses a countable noun parked on the
 *  adjective list so it cannot become a hiding place. */
export const JARGON_ADJECTIVES: readonly string[] = [
  'dative', 'accusative', 'nominative', 'oblique', 'proclitic', 'enclitic',
  'ditransitive', 'transitive', 'intransitive', 'preverbal', 'postverbal',
  'disjunctive', 'tonic', 'syntax', 'syntactic', 'valency',
];

export const JARGON: readonly string[] = [...JARGON_NOUNS, ...JARGON_ADJECTIVES];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §9. WHAT THE APP CANNOT TEST
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §5: an ear question offering two members of one homophone group
 *  has NO CORRECT ANSWER and marking one right certifies a bug.
 *
 *  THE GROUP THAT MATTERS IS NEW TO THIS BAND AND IT IS THE LESSON'S OWN TRAP:
 *  `leur` and `leurs` are one sound, so an ear item offering both has no answer.
 *  The brief asks for this to be enforced with a list rather than a sentence in
 *  a report, « because a sentence in a report cannot fail ».
 *
 *  Each inner array is one group. Two options differing ONLY by a swap within
 *  one group have no answer; two options differing by anything else are legal,
 *  so « Je lui parle. » against « Je leur parle. » stays askable, and that pair
 *  is the one honest job an ear question has here. */
export const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ['leur', 'leurs'],
  ['parlé', 'parlée', 'parlés', 'parlées'],
  ['écrit', 'écrite', 'écrits', 'écrites'],
  ['répondu', 'répondue', 'répondus', 'répondues'],
];

/** No typed surface can test the grave on à. `fold()` normalises to NFD and
 *  strips every combining mark, so « à Marie » and « a Marie » are one answer.
 *  MEASURED, not assumed. This is the single most tempting question in the
 *  lesson and it can only be an mcq, exactly as a2.09 found. */
export const ACCENT_LIMIT =
  'The little word here is à with its accent, and the accent is the whole difference between it and the verb form a.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §10. THE ENDING THAT NEVER COMES — a2.23's SHIPPED POINTER, HONOURED
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE PRECEDING-DIRECT-OBJECT DECISION, AS IT ACTUALLY LANDED.
 *
 *  The brief says: « a2.23's brief flagged this for you. a2.06's brief
 *  recommends it belongs to a2.06, not you. Read a2.06's build report for what
 *  it actually decided, and if it refused the topic, say so rather than silently
 *  absorbing it. »
 *
 *  a2.06 DID NOT REFUSE IT. Its report §2 splits the question in two and takes
 *  half:
 *
 *    RULE B   « Je l'ai vue. » — when the thing acted on is said before the
 *             verb, the second word takes its ending.       TAKEN BY a2.06.
 *    RULE A   « Elle s'est lavé les mains. » has NO ending because `se` there is
 *             not the thing washed.                          « still yours ».
 *
 *  And a2.23 SHIPPED A LEARNER SURFACE POINTING HERE, which settles it: its
 *  roundup reads « … and the reason the ending disappears on this screen is
 *  waiting there too. » A learner who reaches this lesson and finds nothing has
 *  been sent somewhere that does not exist.
 *
 *  SO RULE A IS TAKEN, IN ONE SECTION, RECOGNITION ONLY, and it is stated as the
 *  simplest true thing rather than as the full paradigm: the second word never
 *  answers to lui or leur. That is one fact, it is always true, and it is the
 *  reason a2.23's card has no ending. The reflexive case is shown ON a2.23's OWN
 *  ROW, imported rather than re-authored.
 *
 *  THE LIMIT, enforced rather than promised:
 *  - ONE section, in act 5, against the Owns' six.
 *  - Recognition only. No typed production, because there is nothing to type:
 *    the rule here is that NOTHING is added.
 *  - No ear question near it. The participle forms are one sound and
 *    HOMOPHONE_FORMS enforces it.
 *  - a2.06's RULE B is quoted and taught nowhere. */
export const ENDING_OWNER = UNIT.id;
export const ENDING_RULE = 'The second word never answers to lui or leur. Nothing is added.';
export const A206_AGREEMENT_RULE = 'When the pronoun comes before the verb, the second word takes its ending.';
/** a2.23's own row, imported. The reflexive case, named and not explained. */
export const A223_ROW_ID = 'fr.a2.verbes.807';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §11. THE RESPELLING REPAIRS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §14.1: ONE table, every entry carrying the value you get by
 *  repairing ONLY what the checker reports, with two SEPARATE and mutually
 *  exclusive reasons for `half !== to`:
 *
 *    blind   a nasal the checker cannot see, so the minimal repair is not the
 *            whole repair — and where the checker sees NOTHING, the minimal
 *            repair is the stored value unchanged
 *    house   a house convention the minimal repair does not reach
 *
 *  MEASURED RESULT, AND IT IS THE OPPOSITE OF a2.06's:
 *
 *      15 rows across 9 themes.  SIX BLIND.  TWO HOUSE.
 *
 *  a2.06 reported zero blind rows and said §14.1's warning did not bite. It
 *  bites here, on `répondre`, six times: `ray-POHNDR` is CLEAN through the real
 *  function, so an author who repairs what the checker reports repairs nothing
 *  and gets a green report. The brief predicted this defect and predicted the
 *  wrong shape for it — it calls répondre a mixed row with one visible nasal and
 *  one invisible one, and it has exactly one nasal and no visible one. Header §2.
 *
 *  AND ONE WORD HAS NO CORRECT PUBLISHED VALUE ANYWHERE. All four `envoyer` rows
 *  are flagged, so the row this lesson IMPORTS is itself a repair target. No
 *  earlier build in the band has had to do that: a2.06's rule was « import the
 *  correct one, repair the ones that are wrong », and here there is no correct
 *  one to import. */
export type RespellRepair = {
  id: string;
  fr: string;
  /** What Postgres holds today. */
  from: string;
  /** What repairing ONLY what the checker reports would give. */
  half: string;
  /** The house value this build writes. */
  to: string;
  /** `from` carries a nasal the checker cannot see. */
  blind: boolean;
  /** The minimal repair is clean and still not the house value. */
  house: boolean;
  why: string;
};

const RESPELL_REPONDRE = (id: string, why: string): RespellRepair => ({
  id, fr: 'répondre', from: 'ray-POHNDR', half: 'ray-POHNDR', to: 'ray-POHⁿDR',
  blind: true, house: false, why,
});
const RESPELL_DEMANDER = (id: string, why: string): RespellRepair => ({
  id, fr: 'demander', from: 'duh-mahn-DAY', half: 'duh-mahⁿ-DAY', to: 'duh-mahⁿ-DAY',
  blind: false, house: false, why,
});

export const RESPELL_REPAIRS: readonly RespellRepair[] = [
  /* ── répondre. SIX ROWS, ALL BLIND, and the correct value already exists on a
   *    seventh (fr.a2.verbes.020) which this lesson imports. ─────────────── */
  RESPELL_REPONDRE('fr.sons.verbes-essentiels.031',
    'THE CANONICAL ROW FOR THE HEADWORD, and it is wrong. `ray-POHNDR` is CLEAN through hasPlainNasalFor: the nasal is POHN followed by D inside the token, which corrections §6 says the checker cannot see. The minimal repair is therefore the stored value UNCHANGED, which is why blind is true and half equals from. répondre is /ʁe.pɔ̃dʁ/ and the nasal vowel is real.'),
  RESPELL_REPONDRE('fr.a1.dictee.108', 'Second of six. Same string, different theme; the flashcard hub serves the headword across themes and six spellings of one word is the defect this repair exists for.'),
  RESPELL_REPONDRE('fr.a1.douane-et-immigration.075', 'Third of six.'),
  RESPELL_REPONDRE('fr.a2.disciplines.055', 'Fourth of six.'),
  RESPELL_REPONDRE('fr.a2.examens-et-diplomes.089', 'Fifth of six. The brief names this one and calls it the visible half of a mixed row. There is no visible half.'),
  RESPELL_REPONDRE('fr.a2.internet.083', 'Sixth of six, and NOT NAMED BY THE BRIEF.'),

  /* ── demander. FOUR ROWS, all VISIBLE, half === to. ────────────────────── */
  RESPELL_DEMANDER('fr.sons.verbes-essentiels.018',
    'The straightforward case and the one the brief names. `mahn` ends a hyphen-delimited token with the vowel directly against the n, so the checker sees it and the minimal repair IS the house value. blind and house are both false, and the guard requires the stored value to be flagged, which it is.'),
  RESPELL_DEMANDER('fr.a1.douane-et-immigration.076', 'Second of four, NOT NAMED BY THE BRIEF.'),
  RESPELL_DEMANDER('fr.a2.bureau.088', 'Third of four, NOT NAMED BY THE BRIEF.'),
  RESPELL_DEMANDER('fr.sons.faux-amis.022', 'Fourth of four. The brief names this theme.'),

  /* ── montrer. The one line of the brief's list that is complete. ───────── */
  {
    id: 'fr.a1.douane-et-immigration.059',
    fr: 'montrer',
    from: 'mohn-TRAY',
    half: 'mohⁿ-TRAY',
    to: 'mohⁿ-TRAY',
    blind: false,
    house: false,
    why: 'Visible, and the minimal repair is the house value, which fr.sons.verbes-essentiels.054 already holds and this lesson imports. The only word on the brief\'s list where both the count and the shape are right.',
  },

  /* ── envoyer. FOUR ROWS AND NOT ONE OF THEM IS CORRECT. ────────────────── */
  {
    id: 'fr.sons.verbes-essentiels.046',
    fr: 'envoyer',
    from: 'ahn-vwah-YAY',
    half: 'ahⁿ-vwah-YAY',
    to: 'ahⁿ-vwah-YAY',
    blind: false,
    house: false,
    why: 'THE ROW THIS LESSON IMPORTS, AND IT IS A REPAIR TARGET. a2.06\'s rule was to import the correct row and repair the wrong ones; here there is no correct row anywhere in 28,047 published sentences, so the import and the repair are the same row. Visible, and the minimal repair is the house value.',
  },
  {
    id: 'fr.a2.verbes.023',
    fr: 'envoyer',
    from: 'ahn-vwah-YAY',
    half: 'ahⁿ-vwah-YAY',
    to: 'ahⁿ-vwah-YAY',
    blind: false,
    house: false,
    why: 'Second of the two rows carrying the majority spelling of the second syllable.',
  },
  {
    id: 'fr.a1.rp-technologie.043',
    fr: 'envoyer',
    from: 'ahn-vwa-YAY',
    half: 'ahⁿ-vwa-YAY',
    to: 'ahⁿ-vwah-YAY',
    blind: false,
    house: true,
    why: 'THE §14.1 `bien` SHAPE. Flagged, so the nasal is visible, but the minimal repair gives `ahⁿ-vwa-YAY` and the two rows above say `vwah`. Two different reasons for one symptom, and a guard using one boolean for both would file this with the four plain rows. The tie is broken the way a2.06 broke connaître: the verbes-essentiels row is the corpus\'s canonical entry for a headword and it says `vwah`.',
  },
  {
    id: 'fr.a2.internet.081',
    fr: 'envoyer',
    from: 'ahn-vwa-YAY',
    half: 'ahⁿ-vwa-YAY',
    to: 'ahⁿ-vwah-YAY',
    blind: false,
    house: true,
    why: 'Second of the two, and NOT NAMED BY THE BRIEF AT ALL.',
  },
];

/** THE FALSE POSITIVE, which corrections §6 closes by asking every build to look
 *  for and to report the absence of if it finds none. a2.06 looked and found
 *  none. THIS BUILD FOUND TWO, AND ONE IS ON ITS HEADLINE VERB.
 *
 *  `hasPlainNasalFor` false-positives on a real /n/ after a vowel — invariants
 *  §3's `jaune`, `automne` and `la saison` case. Measured through the real
 *  function:
 *
 *      téléphone   tay-lay-FOHN   FLAGGED   /te.le.fɔn/ has NO nasal vowel
 *                  tay-lay-FON    clean     and it is the house form
 *      donne       DOHN           FLAGGED   /dɔn/ has no nasal vowel either
 *                  DON            clean
 *
 *  Repairing either with a superscript would teach a sound that is not there, so
 *  the fix is the vowel rather than the nasal, exactly as invariants §3
 *  prescribes for `jaune` → `ZHON`.
 *
 *  AND THE VALUE WAS READ OFF PUBLISHED ROWS RATHER THAN INVENTED, which is
 *  a2.15's precedent: `tay-lay-FON` is on five published rows
 *  (fr.a1.appareils.001, fr.a1.objets.006, fr.sons.alphabet.202,
 *  fr.sons.consonnes.163, fr.sons.nasales.134) and `DON`-shaped /ɔn/ is the
 *  corpus's ordinary form for `bonne`, `personne` and `son`.
 *
 *  Kept as a named list so that if the checker is ever fixed this build finds
 *  out rather than carrying a dead workaround. */
export const FALSE_POSITIVES: readonly { fr: string; flagged: string; used: string; why: string }[] = [
  {
    fr: 'téléphone',
    flagged: 'tay-lay-FOHN',
    used: 'tay-lay-FON',
    why: 'téléphone is /te.le.fɔn/. The n is a real consonant and there is no nasal vowel, so a superscript would teach a sound that is not in the word. Five published rows already hold tay-lay-FON. fr.a1.rp-technologie.001 holds the flagged tay-lay-FOHN and is NOT repaired here: this lesson does not import it and the defect belongs to whoever next touches that theme.',
  },
  {
    fr: 'donne',
    flagged: 'DOHN',
    used: 'DON',
    why: 'donne is /dɔn/, the same shape. No published row respells the conjugated form, so the value is taken from the corpus\'s ordinary treatment of /ɔn/ — `bon`, `pehr-SON`, `ZHON` — rather than invented.',
  },
];

/** DELIBERATELY LEFT ALONE, with the reason, because invariants §9 says a
 *  variant is not a violation and only what breaks a STATED rule gets repaired.
 *  Reported rather than silently skipped. */
export const RESPELL_LEFT_ALONE: readonly { fr: string; variants: string; why: string }[] = [
  {
    fr: 'parler',
    variants: 'par-LAY (5 rows) · pahr-LAY (1, fr.a1.rp-travail-etudes.042)',
    why: 'NOT NAMED BY THE BRIEF, and both are clean through the real function. The difference is whether the vowel is written with an h, which is the same unsettled question invariants §9 records for acheter, and repairing it here would be one build inventing a convention for the whole corpus. par-LAY is the 5-to-1 majority and this lesson imports it.',
  },
  {
    fr: 'donner',
    variants: 'doh-NAY (2 rows) · do-NAY (1, fr.a2.rp-societe.055)',
    why: 'NOT NAMED BY THE BRIEF, both clean, same class as parler. The infinitive is left alone; the conjugated form this lesson authors is a different question and is settled in FALSE_POSITIVES.',
  },
  {
    fr: '« sans lui »',
    variants: 'fr.a2.pronoms-essentiels.049 [sahn lwee], FLAGGED',
    why: 'A genuine defect, in this lesson\'s own theme, and OUT OF SCOPE: this build does not import it and authors its own « Je pars sans lui. » instead. a2.15\'s precedent is repair what you import and record what you did not. Recorded here so the next build in this theme has it.',
  },
  {
    fr: 'téléphone, inside a phrase',
    variants: 'fr.a1.rp-technologie.001 [tay-lay-FOHN], FLAGGED',
    why: 'The false-positive shape on a row this lesson does not import. Naming it costs a line; repairing it would widen the merge into a theme this lesson never shows.',
  },
  {
    fr: 'demander, inside a phrase',
    variants: 'fr.a1.deplacements.120 · fr.a2.marche.066 · fr.a2.marche.078, all [duh-mahn-DAY …], all FLAGGED',
    why: "FOUND BY GREPPING THE SERVED BUNDLE rather than by the probe, which is why it is worth recording how. The four repairs above target the HEADWORD rows (fr = 'demander'); these three are phrase rows whose first syllable carries the same wrong nasal, and a probe that queries by exact `fr` cannot see them. Out of scope on a2.15's precedent — repair what you import, record what you did not — and the two `marche` rows carry a second flagged nasal each (`ah-vahn`, `ahn`) which belongs to whoever next touches that theme.",
  },
  {
    fr: 'parler and écrire, with no respelling at all',
    variants: 'fr.a1.verbes-du-quotidien.109 · fr.a1.verbes-du-quotidien.113',
    why: 'Both hold a NULL respell. That is an absence rather than a divergence, and authoring a value onto somebody else\'s row is a different act from repairing one. Not touched; recorded.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §12. THE IMPORTED ROWS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §2, holding for the NINTH build running: NOT ONE INFINITIVE IS
 *  AUTHORED. All ten à-taking verbs already exist, several times over.
 *
 *  Chosen by the §2 rule — a row with a respelling and NO `gender`, which keeps
 *  a1.03's measured ending population still. `écrire` has FIVE published rows
 *  and one of them (fr.a1.ecole.049) is GENDERED; the manifest refuses it by
 *  name so the choice cannot drift back. */
export const IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.verbes-essentiels.015', fr: 'parler', why: 'The frame verb. par-LAY, the 5-to-1 majority, and clean.' },
  { id: 'fr.a2.verbes.020', fr: 'répondre', why: 'THE ONE ROW OF SEVEN that already holds ray-POHⁿDR. The other six are repaired to match it rather than it being brought down to them.' },
  { id: 'fr.a2.verbes.019', fr: 'demander', why: 'THE ONE ROW OF FIVE that already holds duh-mahⁿ-DAY. Same reasoning.' },
  { id: 'fr.a1.verbes-essentiels.003', fr: 'téléphoner', why: 'Clean, and its own `notes` already read « Followed by à: téléphoner à quelqu\'un », which is this lesson\'s Owns written on a row somebody else published.' },
  { id: 'fr.sons.verbes-essentiels.005', fr: 'dire', why: 'DEER. The only published row for it.' },
  { id: 'fr.sons.verbes-essentiels.054', fr: 'montrer', why: 'The house value mohⁿ-TRAY, and the repair target for fr.a1.douane-et-immigration.059.' },
  { id: 'fr.sons.verbes-essentiels.053', fr: 'offrir', why: 'oh-FREER on all three published rows, no divergence.' },
  { id: 'fr.a1.dictee.090', fr: 'écrire', why: 'Chosen over fr.a1.ecole.049 BECAUSE that row is GENDERED and importing it would move a1.03\'s measured ending population. Same value, ay-KREER.' },
  { id: 'fr.sons.verbes-essentiels.046', fr: 'envoyer', why: 'THE IMPORT THAT IS ALSO A REPAIR. All four published rows are flagged, so there is no correct one to prefer, and this is the canonical headword row. §11.' },
  { id: 'fr.sons.verbes-essentiels.013', fr: 'donner', why: 'doh-NAY, the 2-to-1 majority, clean.' },
];

/** The two respelled PHRASES this lesson reads its own pronoun respellings off,
 *  rather than inventing them. Both are in this lesson's own theme, both carry
 *  the construction, and both were written by somebody not teaching this.
 *
 *  `lwee` follows the corpus's existing treatment of the /ɥ/ glide as a w —
 *  invariants §9 records `WEET`, `NWEE` and `LÜEE` as the three shipped forms
 *  and says not to add a fourth. `lwee` is the `NWEE` form, not a fourth. */
export const IMPORTED_PHRASES: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.a2.pronoms-essentiels.017', fr: 'lui parler', why: 'THE SOURCE OF `lwee`. Its own notes read « Lui replaces à lui or à elle; as an indirect object it never changes for gender », which is this lesson\'s §6 already published.' },
  { id: 'fr.a2.pronoms-essentiels.025', fr: 'leur parler', why: 'THE SOURCE OF `luhr`, and a1.17 independently ships LUHR for the possessive. Its notes read « Leur means to them; do not confuse it with the possessive leur, which means their », which is this lesson\'s trap already published.' },
];

/** Published SENTENCES imported as corroboration: written for another lesson, by
 *  somebody not teaching this, and carrying the construction anyway. The
 *  strongest evidence a rule is real rather than a courseware invention.
 *
 *  a2.06's two frames are here for the cross-lesson claim — « Je le vois. »
 *  beside « Je lui parle. » is a2.06's actual row rather than a copy of it. */
export const IMPORTED_SENTENCES: readonly { id: string; why: string }[] = [
  { id: A206_FRAME_ID, why: '« Je le vois. » a2.06\'s frame, imported so the contrast is its sentence and not a copy of one.' },
  { id: A206_KNOW_ID, why: '« Je la connais. » a2.06\'s feminine cell, for the six-word contrast where the gender is still there.' },
  { id: 'fr.a1.pronoms-essentiels.126', why: '« Je leur parle chaque matin. » Published at A1, in this theme, and its own notes state this lesson\'s central trap: leur the pronoun never takes an s.' },
  { id: 'fr.a2.pronoms-essentiels.020', why: '« Elle lui demande son avis sur le projet. » demander with a person behind à, published, and nobody wrote it to prove that.' },
  { id: 'fr.a2.pronoms-essentiels.026', why: '« Je leur écris chaque semaine. » écrire, the plural, same theme.' },
  { id: A223_ROW_ID, why: '« Elle s\'est lavé les mains. » a2.23\'s OWN receptive row, imported rather than re-authored, because §10 is honouring a2.23\'s shipped pointer and the row it points at should be the row it wrote.' },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §13. THE AUTHORED ROWS
 * ══════════════════════════════════════════════════════════════════════════ */

export type Bucket =
  | 'named' | 'slot' | 'verb' | 'paradigm' | 'possessive'
  | 'stressed' | 'negative' | 'past' | 'unseen' | 'talk';

export type Row = Item & {
  bucket: Bucket;
  /** The pronoun the row carries, or null where it deliberately carries none
   *  (the à halves of the contrast pairs, and the possessive rows). Read by the
   *  guards rather than re-parsed out of `fr`. */
  pro: 'lui' | 'leur' | null;
  /** Whether the row's `leur` is the POSSESSIVE rather than the pronoun. The
   *  guard that refuses a stray -s has to know which it is looking at, and
   *  parsing that out of the French is exactly the shape corrections §14.4
   *  warns against. */
  possessive?: true;
};

/* DECLARED IN `DRILL_KINDS` ORDER, WHICH IS NOT COSMETIC. The batch writes
 * `it.drills` to Postgres verbatim and the merge writes `drillOrder(it.drills)`
 * to the seed, so the two copies agree ONLY IF the array is already sorted. */
const S: Item['drills'] = ['flashcard', 'voiceflash', 'sentence', 'review'];
const SD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'review'];
const SR: Item['drills'] = ['sentence', 'roleplay', 'review'];
/** RECEPTIVE ONLY. Rows the learner reads and is never asked to produce. */
const RO: Item['drills'] = ['sentence', 'review'];

const T = ['a2', 'pronoun', 'indirect', 'present'];
const TP = ['a2', 'pronoun', 'indirect', 'passe-compose'];

const R = (
  n: number,
  fr: string,
  en: string,
  ipa: string,
  respell: string,
  bucket: Bucket,
  pro: Row['pro'],
  drills: Item['drills'],
  notes: string,
  extraTags: string[] = [],
  possessive?: true,
): Row => ({
  id: A(n),
  kind: 'sentence',
  level: 'a2',
  theme: THEME,
  fr,
  en,
  ipa,
  respell,
  tags: [...(bucket === 'past' ? TP : T), ...extraTags],
  drills,
  audioRef: null,
  version: 1,
  notes,
  bucket,
  pro,
  ...(possessive ? { possessive } : {}),
});

export const ROWS: readonly Row[] = [
  /* ── The à halves and the pronoun halves. THE FRAMING a2.25 INHERITS: the
   *    person is named behind à, and then the à goes with the person. ───── */
  R(237, 'Je parle à Marie.', 'I talk to Marie.', '/ʒə paʁl a ma.ʁi/', 'zhuh PARL ah mah-REE',
    'named', null, S, 'The à half. The person is named and the little word in front of them is what this lesson is about. English says "to" here too, which is why parler is one of the four rather than one of the six.'),
  R(238, 'Je lui parle.', 'I talk to him.', '/ʒə lɥi paʁl/', 'zhuh lwee PARL',
    'slot', 'lui', SD, 'THE FRAME. Ten letters through the real dicteeMode, so the dictée takes it in LETTERS mode. The brief says twelve.'),
  R(239, 'Je parle à mes parents.', 'I talk to my parents.', '/ʒə paʁl a me pa.ʁɑ̃/', 'zhuh PARL ah may pah-RAHⁿ',
    'named', null, S, 'The plural à half. More than one person, so the pronoun that replaces them will be the other one.'),
  R(240, 'Je leur parle.', 'I talk to them.', '/ʒə lœʁ paʁl/', 'zhuh luhr PARL',
    'slot', 'leur', SD, 'The plural. Eleven letters. This is also the sentence a1.17 warned the learner about: same four letters as the possessive and a completely different job.'),
  R(241, 'Je réponds à Paul.', 'I answer Paul.', '/ʒə ʁe.pɔ̃ a pɔl/', 'zhuh ray-POHⁿ ah POHL',
    'named', null, S, 'THE ONE THAT SHOWS THE PROBLEM. English answers Paul with nothing in between; French puts à there and the learner has no signal that it is coming.'),
  R(242, 'Je lui réponds.', 'I answer him.', '/ʒə lɥi ʁe.pɔ̃/', 'zhuh lwee ray-POHⁿ',
    'slot', 'lui', SD, 'And the pronoun. Twelve letters. English "I answer him" has nothing lui could be a translation of, which is exactly why this verb is on the tapTable.'),

  /* ── THE SIX. English gives no signal at all. ─────────────────────────── */
  R(243, 'Je lui téléphone.', 'I phone her.', '/ʒə lɥi te.le.fɔn/', 'zhuh lwee tay-lay-FON',
    'verb', 'lui', SD, 'Fourteen letters. Respelled tay-lay-FON rather than tay-lay-FOHN: the second is FLAGGED by hasPlainNasalFor and it is a false positive, because /te.le.fɔn/ has no nasal vowel. Five published rows already hold FON. §11.'),
  R(244, 'Je lui demande.', 'I ask him.', '/ʒə lɥi də.mɑ̃d/', 'zhuh lwee duh-MAHⁿD',
    'verb', 'lui', SD, 'Twelve letters. "I ask him" is another English sentence with nothing between the verb and the person.'),
  R(245, 'Je lui dis bonjour.', 'I say hello to her.', '/ʒə lɥi di bɔ̃.ʒuʁ/', 'zhuh lwee dee bohⁿ-ZHOOR',
    'verb', 'lui', SD, 'Fifteen letters. dire needs something said, so bonjour is here to make the sentence complete rather than to be taught.'),
  R(246, 'Je leur montre la photo.', 'I show them the photo.', '/ʒə lœʁ mɔ̃tʁ la fɔ.to/', 'zhuh luhr MOHⁿTR lah foh-TOH',
    'verb', 'leur', S, 'Nineteen letters, so word mode and NO dictation drill. montrer needs a thing shown as well as a person shown it, and the thing is an ordinary noun sitting where nouns sit.'),
  R(247, 'Il lui offre un café.', 'He buys her a coffee.', '/il lɥi ɔfʁ œ̃ ka.fe/', 'eel lwee OFR uhⁿ kah-FAY',
    'verb', 'lui', SD, 'Sixteen letters, exactly at the dictée limit and still in LETTERS mode. The English gloss says "buys", which is what an English speaker actually says here and is a fifth verb with no preposition in it.'),

  /* ── THE FOUR. English says "to", and the learner mostly uses it. ─────── */
  R(248, 'Je leur écris.', 'I write to them.', '/ʒə lœʁ e.kʁi/', 'zhuh luhr ay-KREE',
    'verb', 'leur', SD, 'Eleven letters. English says "to them", so this is one of the four the learner gets right by accident, and its job on the screen is to make the six look like an exception in English rather than a rule in French.'),
  R(249, 'Je lui envoie une carte.', 'I send her a card.', '/ʒə lɥi ɑ̃.vwa yn kaʁt/', 'zhuh lwee ahⁿ-VWAH ün KART',
    'verb', 'lui', S, 'Nineteen letters, word mode. English can say "send her a card" OR "send a card to her", so the signal is there and it is optional, which is the fair description of these four.'),
  R(250, 'Je leur donne les clés.', 'I give them the keys.', '/ʒə lœʁ dɔn le kle/', 'zhuh luhr DON lay KLAY',
    'verb', 'leur', S, 'Eighteen letters, word mode. donne is respelled DON, not DOHN: the second is FLAGGED and it is the same false positive as téléphone. §11.'),

  /* ── The paradigm. TWO WORDS, and the doctrine says not to stretch it, so
   *    these exist to be practised rather than to be taught. ─────────────── */
  R(251, 'Tu lui parles.', 'You talk to her.', '/ty lɥi paʁl/', 'tü lwee PARL',
    'paradigm', 'lui', S, 'Eleven letters. The subject changed and the pronoun did not, which was a whole section in a2.06 and is one line here because the learner has already had it.'),
  R(252, 'Il lui répond.', 'He answers her.', '/il lɥi ʁe.pɔ̃/', 'eel lwee ray-POHⁿ',
    'paradigm', 'lui', S, 'Eleven letters. Two words beginning with l in a row and only the second one is the verb\'s.'),
  R(253, 'Elle lui écrit.', 'She writes to him.', '/ɛl lɥi e.kʁi/', 'ehl lwee ay-KREE',
    'paradigm', 'lui', S, 'Twelve letters. A feminine subject and lui standing for a man: the pronoun takes nothing at all from the subject, and it does not take a gender from the person either.'),
  R(254, 'Nous leur parlons.', 'We talk to them.', '/nu lœʁ paʁ.lɔ̃/', 'noo luhr par-LOHⁿ',
    'paradigm', 'leur', S, 'Fifteen letters. The nous form, which a2.01 owns and this lesson borrows.'),
  R(255, 'Vous leur écrivez.', 'You write to them.', '/vu lœʁ e.kʁi.ve/', 'voo luhr ay-kree-VAY',
    'paradigm', 'leur', S, 'Fifteen letters.'),
  R(256, 'Ils lui téléphonent.', 'They phone him.', '/il lɥi te.le.fɔn/', 'eel lwee tay-lay-FON',
    'paradigm', 'lui', S, 'Seventeen letters, word mode. The verb ending is silent, which is a2.01\'s business and not this lesson\'s.'),
  R(257, 'Je lui écris.', 'I write to her.', '/ʒə lɥi e.kʁi/', 'zhuh lwee ay-KREE',
    'paradigm', 'lui', SD, 'Ten letters. The same word as fr.a2.pronoms-essentiels.253 and a woman this time, which is the whole of what lui does about gender: nothing.'),

  /* ── THE TRAP. a1.17's possessive against this lesson's pronoun. ──────── */
  R(258, 'Voici leur maison.', 'This is their house.', '/vwa.si lœʁ mɛ.zɔ̃/', 'vwah-SEE luhr meh-ZOHⁿ',
    'possessive', null, SD, 'THE POSSESSIVE, singular thing. Fifteen letters. a1.17 owns this word and this lesson does not re-teach one syllable of it; it is here so the learner can see that the pronoun and the possessive are four identical letters.', ['possessive'], true),
  R(259, 'Voici leurs clés.', 'Here are their keys.', '/vwa.si lœʁ kle/', 'vwah-SEE luhr KLAY',
    'possessive', null, SD, 'THE POSSESSIVE, plural thing, and it takes the s. Fourteen letters, so the dictée can ask for it. a1.17\'s rule and a1.17\'s alone: the s counts the things, never the owners.', ['possessive'], true),
  R(260, 'Je leur montre leur maison.', 'I show them their house.', '/ʒə lœʁ mɔ̃tʁ lœʁ mɛ.zɔ̃/', 'zhuh luhr MOHⁿTR luhr meh-ZOHⁿ',
    'possessive', 'leur', S, 'BOTH JOBS IN ONE SENTENCE, twenty-two letters. The first leur is in front of a verb and can never take an s; the second is in front of a thing and would take one if there were more than one house. a1.17\'s test settles both without a new rule.', ['possessive'], true),

  /* ── The stressed pronoun. Doctrine §B.7, sixth occurrence. ───────────── */
  R(261, 'Je parle avec lui.', 'I talk with him.', '/ʒə paʁl a.vɛk lɥi/', 'zhuh PARL ah-vek LWEE',
    'stressed', null, S, 'THE SAME WORD, THE OTHER JOB. Fourteen letters. After avec the word stands on its own and stays where English puts it, and the only signal is what sits beside it.', ['stressed']),
  R(262, 'Je pars sans lui.', 'I am leaving without him.', '/ʒə paʁ sɑ̃ lɥi/', 'zhuh PAR sahⁿ LWEE',
    'stressed', null, S, 'Thirteen letters. A second little word in front, so the learner does not read the rule as a fact about avec.', ['stressed']),
  R(263, "C'est pour lui.", 'It is for him.', '/sɛ puʁ lɥi/', 'seh poor LWEE',
    'stressed', null, S, 'Eleven letters, and a third. Three prepositions and the same behaviour, which is what makes it a rule rather than an idiom.', ['stressed']),

  /* ── Negation. a2.06's sentence, quoted and not extended. ─────────────── */
  R(264, 'Je ne lui parle pas.', 'I do not talk to him.', '/ʒə nə lɥi paʁl pa/', 'zhuh nuh lwee parl PAH',
    'negative', 'lui', SD, 'Fifteen letters. ne outside, pronoun and verb inside, pas after both. Exactly a2.06\'s sentence and no new rule.', ['negation']),
  R(265, 'Je ne leur parle pas.', 'I do not talk to them.', '/ʒə nə lœʁ paʁl pa/', 'zhuh nuh luhr parl PAH',
    'negative', 'leur', SD, 'Sixteen letters, exactly at the dictée limit. The plural inside the wrap and still no s.', ['negation']),
  R(266, 'Il ne lui répond pas.', 'He does not answer her.', '/il nə lɥi ʁe.pɔ̃ pa/', 'eel nuh lwee ray-pohⁿ PAH',
    'negative', 'lui', S, 'Sixteen letters. A different subject and a different verb, and nothing about the wrap responds to either.', ['negation']),
  R(267, 'Je ne leur écris pas.', 'I do not write to them.', '/ʒə nə lœʁ e.kʁi pa/', 'zhuh nuh luhr ay-kree PAH',
    'negative', 'leur', S, 'Sixteen letters.', ['negation']),

  /* ── The past. §10: the second word never answers to lui or leur. ─────── */
  R(268, 'Je lui ai parlé.', 'I talked to him.', '/ʒə lɥi e paʁ.le/', 'zhuh lwee ay par-LAY',
    'past', 'lui', SD, 'Twelve letters. The pronoun goes in front of BOTH words of the verb, which is a2.06\'s rule applied to a tense the learner already has. And the second word is bare.'),
  R(269, 'Je leur ai parlé.', 'I talked to them.', '/ʒə lœʁ e paʁ.le/', 'zhuh luhr ay par-LAY',
    'past', 'leur', SD, 'Thirteen letters. Plural, and still nothing on the end of parlé. THIS IS THE POINT OF THE SECTION: the second word never answers to lui or leur.'),
  R(270, 'Je lui ai écrit.', 'I wrote to her.', '/ʒə lɥi e e.kʁi/', 'zhuh lwee ay ay-KREE',
    'past', 'lui', SD, 'Twelve letters. A second verb, so the learner does not read the rule as a fact about parler.'),
  R(271, 'Je ne lui ai pas parlé.', 'I did not talk to him.', '/ʒə nə lɥi e pa paʁ.le/', 'zhuh nuh lwee ay pah par-LAY',
    'past', 'lui', S, 'Seventeen letters, word mode. The wrap and the past together: ne, pronoun, first word, pas, second word. Both rules, neither of them new here.', ['negation']),

  /* ── Verbs this lesson never listed. Doctrine §B.1: an A2 learner leaves
   *    able to say things the lesson never said. ─────────────────────────── */
  R(272, 'Je lui prête un stylo.', 'I lend him a pen.', '/ʒə lɥi pʁɛt œ̃ sti.lo/', 'zhuh lwee PREHT uhⁿ stee-LOH',
    'unseen', 'lui', S, 'prêter is on no list in this lesson. English says "lend him" with nothing in between, so it belongs with the six and the learner has to work that out from the rule rather than from the table.', ['unseen']),
  R(273, 'Elle leur explique.', 'She explains to them.', '/ɛl lœʁ ɛks.plik/', 'ehl luhr ehks-PLEEK',
    'unseen', 'leur', S, 'expliquer, and fr.a2.pronoms-essentiels.027 already publishes it in a longer sentence. English says "to them" here, so it belongs with the four.', ['unseen']),
  R(274, 'Il lui promet.', 'He promises her.', '/il lɥi pʁɔ.mɛ/', 'eel lwee proh-MEH',
    'unseen', 'lui', S, 'promettre, an irregular verb from another lesson entirely, and nothing about carrying a pronoun is different for it.', ['unseen']),
  R(275, 'Nous lui obéissons.', 'We obey him.', '/nu lɥi ɔ.be.i.sɔ̃/', 'noo lwee oh-bay-ee-SOHⁿ',
    'unseen', 'lui', S, 'obéir à quelqu\'un, and it is the sharpest case in the lesson: English "obey him" has no preposition at all and French will not accept the direct version. A verb the lesson never showed, obeying the rule it did.', ['unseen']),

  /* ── The conversation. Every turn is about a person who is not in the room,
   *    which is the only situation this whole lesson is for. ─────────────── */
  R(276, 'Oui, je lui ai parlé hier.', 'Yes, I talked to him yesterday.', '/wi ʒə lɥi e paʁ.le jɛʁ/', 'wee, zhuh lwee ay par-LAY YEHR',
    'talk', 'lui', SR, 'Role play turn 1, and the past straight away, because that is what somebody actually answers.'),
  R(277, "Non, je ne leur ai pas écrit.", 'No, I have not written to them.', '/nɔ̃ ʒə nə lœʁ e pa e.kʁi/', 'nohⁿ, zhuh nuh luhr ay pah zay-KREE',
    'talk', 'leur', SR, 'Turn 2, the negative and the plural in one answer.', ['negation']),
  R(278, 'Je vais lui téléphoner.', 'I am going to phone her.', '/ʒə vɛ lɥi te.le.fɔ.ne/', 'zhuh veh lwee tay-lay-foh-NAY',
    'talk', 'lui', SR, 'Turn 3. a2.19 owns the futur proche and this borrows it: the pronoun goes in front of the infinitive, which is still the verb it belongs to. fr.a2.pronoms-essentiels.179 publishes the negative version of exactly this shape.'),
  R(279, 'Je leur montre les photos.', 'I am showing them the photos.', '/ʒə lœʁ mɔ̃tʁ le fɔ.to/', 'zhuh luhr MOHⁿTR lay foh-TOH',
    'talk', 'leur', SR, 'Turn 4. A thing after the verb and a person in front of it, so the two jobs are visibly different positions rather than different words.'),
  R(280, 'Oui, je leur parle souvent.', 'Yes, I talk to them often.', '/wi ʒə lœʁ paʁl su.vɑ̃/', 'wee, zhuh luhr PARL soo-VAHⁿ',
    'talk', 'leur', SR, 'Turn 5.'),
  R(281, 'Je lui demande demain.', 'I will ask him tomorrow.', '/ʒə lɥi də.mɑ̃d də.mɛ̃/', 'zhuh lwee duh-MAHⁿD duh-MAHⁿ',
    'talk', 'lui', SR, 'Turn 6, and the present used for something not yet done, which is what French does here and English does with "will".'),
  R(282, 'Tu lui as répondu ?', 'Did you answer him?', '/ty lɥi a ʁe.pɔ̃.dy/', 'tü lwee ah ray-pohⁿ-DÜ',
    'talk', 'lui', SR, 'Turn 7, and the learner asks rather than answers. a1.19 owns the rising question and this borrows it without teaching it.'),
  R(283, 'Elle leur a parlé.', 'She talked to them.', '/ɛl lœʁ a paʁ.le/', 'ehl luhr ah par-LAY',
    'past', 'leur', SD, 'Fourteen letters. A third person in the past, and the second word is bare again.'),
  R(284, 'Je lui ai donné les clés.', 'I gave him the keys.', '/ʒə lɥi e dɔ.ne le kle/', 'zhuh lwee ay doh-NAY lay KLAY',
    'past', 'lui', S, 'Twenty letters, word mode. A thing after the verb and a person in front of it, in the past, and nothing goes on the end of donné.'),
  R(285, 'Tu leur téléphones ?', 'Are you phoning them?', '/ty lœʁ te.le.fɔn/', 'tü luhr tay-lay-FON',
    'paradigm', 'leur', SD, 'Sixteen letters, LETTERS mode, and the dictée can take it. A question, and the pronoun does not move for one. a1.19 owns the rising question.'),
  R(286, 'Je lui réponds toujours.', 'I always answer her.', '/ʒə lɥi ʁe.pɔ̃ tu.ʒuʁ/', 'zhuh lwee ray-POHⁿ too-ZHOOR',
    'paradigm', 'lui', S, 'Twenty letters, word mode. Something after the verb that is not the person, so the pronoun is visibly not just "the word before the full stop".'),
];

/** Sanity, enforced in the batch rather than trusted: the ids are exactly the
 *  claimed block, in order, with no gaps and no strays. */
export const AUTHORED_IDS: readonly string[] = ROWS.map((r) => r.id);

/* ═══════════════════════════════════════════════════════════════════════════
 *  §14. THE SCENE
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. Nobody is rude, nobody is corrected, nothing is
 *  mispronounced. The learner runs out of sentence in public.
 *
 *  The brief asks for someone trying to say they phoned a person — the most
 *  everyday sentence in the lesson — who translates the English directly,
 *  produces something with the pronoun in the wrong role, and stalls when the
 *  listener does not react the way they expected. Nobody corrects them.
 *
 *  The error is « Je l'ai téléphoné. » It is chosen over « Je téléphone lui. »
 *  for a reason that is the whole lesson: « je téléphone lui » sounds foreign
 *  and gets corrected; « je l'ai téléphoné » sounds FRENCH and does not. Every
 *  word is in the right place, the position rule from last lesson was applied
 *  perfectly, and the wrong set of words was used. So the listener hears a
 *  complete sentence, believes something else happened, and answers the question
 *  that was not asked. */
export const SCENE_QUESTION = 'Tu as des nouvelles de Théo ?';
export const SCENE_QUESTION_EN = 'Any news from Théo?';
export const SCENE_ERROR = "Oui, je l'ai téléphoné hier.";
export const SCENE_ERROR_EN = 'Yes, I phoned him yesterday.';
export const SCENE_RIGHT = 'Oui, je lui ai téléphoné hier.';
export const SCENE_RIGHT_EN = 'Yes, I phoned him yesterday.';
export const SCENE_WAIT = 'Ah bon ? Tu as téléphoné quoi ?';
export const SCENE_WAIT_EN = 'Really? You phoned what?';

/** Break body budget, 24 to 40 words. Counted in the batch. */
export const BREAK_BODY =
  'You did everything last lesson taught you. The word went in front of the verb, the sentence came out whole, and it was the wrong word, because English never told you there was a choice to make.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §15. THE EXPECTED SHAPE
 *
 *  Invariants §5: assert against EXPLICIT constants, never figures derived from
 *  the lesson, because a derived count compares the content to itself and passes
 *  on any rewording. Every one is checked by the batch, the merge and the test.
 * ══════════════════════════════════════════════════════════════════════════ */

export const EXPECTED_AUTHORED = 50;
export const EXPECTED_IMPORTED = 18;
export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 30;

/** Doctrine §B.5: if the paradigm gets more sections than the Owns, the wrong
 *  lesson was built. Counted as SECTIONS BY SUBJECT rather than by act. The
 *  paradigm here is TWO WORDS and the brief says explicitly not to stretch it,
 *  so three sections is already generous and the Owns takes six. */
export const OWNS_SECTION_COUNT = 6;
export const PARADIGM_SECTION_COUNT = 3;

/** `dicteeMode` switches to WORD tiles above this, and word mode hands every
 *  real word over pre-spelled. A lesson whose central trap is a written -s can
 *  only be tested in LETTERS mode. */
export const DICTEE_MAX_LETTERS = 16;

/** Is this id inside the claimed block? */
export const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.pronoms-essentiels\.(\d{3})$/u.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= ID_FIRST && n <= ID_LAST;
};

/* ═══════════════════════════════════════════════════════════════════════════
 *  §16. WHAT COULD NOT BE TESTED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §5 asks for this by name and a2.09's section is the model.
 *  Reported rather than discovered later. */
export const UNTESTABLE: readonly { wanted: string; why: string }[] = [
  {
    wanted: 'A typed question turning on the grave accent in à: « Je parle a Marie. » against « Je parle à Marie. »',
    why: 'THE SINGLE MOST TEMPTING QUESTION IN THE LESSON AND IT CANNOT BE WRITTEN. `fold()` normalises to NFD and strips every combining mark, so « a Marie » and « à Marie » are ONE ANSWER and a typed question would accept the mistake and tell the learner they spelled it right. Measured through the real function. Written as an mcq instead, exactly as a2.09 did.',
  },
  {
    wanted: 'An ear question separating « Je leur parle. » from « Je leurs parle. », or the pronoun leur from the possessive leur.',
    why: 'ONE SOUND, all of them. leur and leurs are homophones and the whole trap is that the difference exists only on the page. An ear item offering both has no correct answer and marking one right certifies a bug. HOMOPHONE_FORMS enforces it rather than this paragraph.',
  },
  {
    wanted: 'An ear question asking which gender lui carries.',
    why: 'IT HAS NO ANSWER, in any format. This is not a fold() limitation, it is the language: lui is him or her and the sentence does not say. It is a card rather than a question, which is the same shape a2.06 met on the elided l\'.',
  },
  {
    wanted: 'A typed question on the past participle after lui: « Je lui ai parlé. » against « Je lui ai parlée. »',
    why: 'Typeable, and REFUSED. `fold()` does keep the final -e so the app could mark it, but the question would teach the learner that the ending is a live choice after lui, and §10\'s whole claim is that nothing is ever added. Asking it would install the doubt the section exists to remove. An mcq asking WHY there is no ending does the job instead.',
  },
  {
    wanted: 'A typed question on the space in « quelqu\'un » or on the capital in « Marie ».',
    why: 'fold() strips all whitespace and cannot test a capital letter. Both the a1.08 and a1.09 briefs recommended errorSpot for a capital and both were wrong. Neither was worth an mcq slot here.',
  },
];
