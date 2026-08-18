// a2.25.l1 « Y et EN » — the corpus, the constants and the decisions.
// Trail seq 23, the THIRD and last lesson of the pronoun block (21, 22, 23).
//
// ════════════════════════════════════════════════════════════════════════════
//  WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-15
// ════════════════════════════════════════════════════════════════════════════
//
// Doctrine §F asks for this header. The brief was written against a real probe
// (`_a2_preflight_pronouns.ts`) on the same day, so like a2.06's and a2.24's it
// is far better on facts than the batch-1 and batch-2 briefs were. It is still
// wrong seven times, and the FIRST ONE CHANGES THE SHAPE OF THE LESSON.
//
//  1. « CORRECTIONS §3 HOLDS FOR THE EIGHTH BUILD RUNNING: THE FORMS ARE
//     SCATTERED, NO TWO SENTENCES DIFFER BY ONE THING, AND THE CELLS YOU NEED
//     ARE THE EMPTY ONES. » FALSE, AND MORE COMPLETELY FALSE THAN FOR ANY
//     EARLIER LESSON IN THIS BAND.
//
//     `fr.a2.pronoms-essentiels.028` to `.033` are SIX CONSECUTIVE PUBLISHED
//     ROWS IN THIS LESSON'S OWN THEME, and between them they are this lesson's
//     paradigm, each pairing the named phrase with its pronoun replacement:
//
//       .028  « j'y pense »                                    [zhee PAHNSS]
//       .029  « Je vais à Paris ; j'y vais en train. »
//       .030  « Tu penses à ton examen ? Oui, j'y pense souvent. »
//       .031  « j'en veux »                                    [zhahn VUH]
//       .032  « Tu veux du café ? Oui, j'en veux bien. »
//       .033  « Elle a trois frères ; elle en parle souvent. »
//
//     Two of the six are the à-half and the pronoun-half of one sentence, with
//     a semicolon between them. `.029` carries the contrast this lesson opens
//     on AND the preposition `en` this lesson's largest trap is about, in one
//     published string. Somebody wrote this lesson's opening screen years ago
//     for a pronoun theme.
//
//     This is a2.18's find repeating — four consecutive published time-
//     preposition cards nobody had noticed — and it is the SECOND time §3's
//     "most reliable single prediction in this file" has failed. The rows are
//     imported rather than re-authored, and `zhee` and `zhahⁿ` are READ OFF
//     them rather than invented (a2.15's precedent).
//
//  2. « il y a OCCURS IN 195 PUBLISHED SENTENCES. » It occurs in 245 rows, 223
//     of them as a whole-word match. And the brief's UNVERIFIED question —
//     « whether the 195 il y a rows are usable as imports » — has a sharper
//     answer than either option it offers: 18 of the 223 carry a respelling and
//     no gender, and NOT ONE OF THE 223 IS IN `pronoms-essentiels`. The import
//     has to come from another theme, and the two that fit are a2.18's own.
//
//  3. « THE PRODUCTIVE USES OCCUR ONCE OR TWICE. » True of the five exact
//     frames the probe measured and false of the construction. Measured across
//     all 48,360 published rows:
//
//       j'en   30      n'y   61      j'y   11      n'en  27
//
//     **192 published rows carry an elided y or en pronoun.** a2.06 sharpened
//     §3 by finding a construction that occurs twice and still leaves you
//     authoring every cell; a2.24 sharpened it the other way. This build finds
//     the third case: the construction is COMMON, the frames are absent, and
//     the theme already publishes the paradigm.
//
//  4. « prendre IMPORTS AS PRAHⁿDR ... BRING ANY COMPETING COPY INTO LINE
//     RATHER THAN INVENTING ONE. » THERE IS NO COMPETING COPY. All three
//     published `prendre` rows already hold `PRAHⁿDR`. The brief predicts a
//     repair that does not exist, and it names the one word in the import list
//     that needs nothing.
//
//  5. AND IT MISSES THE ONE THAT DOES. `penser` — the verb behind « j'y pense »,
//     which is the second frame of this lesson — is `pahn-SAY` on BOTH its
//     published rows and both are FLAGGED. The brief's respelling section names
//     four words and not this one. §11.
//
//  6. « J'y vais. IS 7 LETTERS. » It is SIX, measured through the real
//     `dicteeMode` letter count. Immaterial — both are inside the 16 — and
//     recorded because corrections §4 asks for the count to be proved by the
//     function and the brief did it by hand. a2.24's brief made the same slip
//     in the other direction.
//
//  7. « n'y va pas 0 » IS TRUE AND READS AS AN ABSENCE THAT IS NOT THERE. The
//     imperative frame is absent; `n'y` is on 61 published rows and `n'en` on
//     27. The negative of this construction is one of the commonest things in
//     the corpus and the probe asked for the one shape nobody says.
//
// ── AND THE FIND THE BRIEF COULD NOT HAVE PREDICTED ────────────────────────
//
// THE CORPUS SYSTEMATICALLY BREAKS THE NASAL OF THE PRONOUN `en`. Of the 19
// published rows that carry an elided y or en pronoun AND a respelling,
// FOURTEEN are FLAGGED, and every one of them breaks in the same place: the
// nasal of `en` written as a plain `n`. « j'en ai marre » is `zhahn-NAY MAHR`,
// « je t'en prie » is `zhuh tahn PREE`, « il y en a encore » is `EEL YAHN NAH
// ahn-KOR`. This lesson repairs the four it imports and records the ten it does
// not (§11, RESPELL_LEFT_ALONE).
//
// ════════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ═══════════════════════════════════════════════════════════════════════════
 *  §1. IDENTITY, MEASURED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Read out of `content_units` 2026-08-15 by `_a2_preflight_pronouns.ts`.
 *
 *  Corrections §1 holds for the third lesson of this block as it held for the
 *  first two: the spine's `sub` — « the two neutral pronouns — à + thing, de +
 *  thing » — exists NOWHERE in the database and carries an em dash. The `canDo`
 *  matched the spine byte for byte, which the brief also said and which cost one
 *  line to confirm.
 *
 *  The `sub` is three characters and carries no descriptive tail, which is true
 *  of no other unit in the band. Nothing depends on it and it is worth one line
 *  of assertion so that a later author does not "improve" it into a sentence.
 *
 *  `seq` is a NUMBER. `corpus:probe` stringifies it when it prints. */
export const UNIT = {
  id: 'a2.25',
  seq: 23,
  level: 'a2' as const,
  track: 'a2',
  title: 'The Pronouns Y and EN',
  sub: 'Y et EN',
  canDo: 'Can replace a place or a quantity with y and en in the right slot',
  prereqUnitIds: ['a2.24'],
} as const;

export const LESSON_ID = 'a2.25.l1';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §2. THE THEME, AND THE ROW COUNT
 * ══════════════════════════════════════════════════════════════════════════ */

/** The brief lists the home as UNVERIFIED and offers `verbes` (870 published).
 *  `pronoms-essentiels`, INHERITED rather than re-decided for the third time:
 *  a2.06's report §4 settled it for all of seq 21..23 with three reasons, a2.24
 *  re-checked it, and the doctrine's trail table says the same.
 *
 *  Re-checked here, and the case is stronger again than it was for either:
 *  THE SIX ROWS THIS LESSON'S PARADIGM IS BUILT ON ARE ALREADY IN THIS THEME
 *  (header §1). Choosing `verbes` would have meant importing this lesson's own
 *  material across a theme boundary. */
export const THEME = 'pronoms-essentiels';

/** Corrections §10: the maximum has been useless since a2.10.l2 took .461..500.
 *  THE ROW COUNT IS THE ONLY SIGNAL. Measured 2026-08-15 before any apply, after
 *  a2.06's +48 and a2.24's +50. */
export const THEME_ROWS_BEFORE = 584;
export const A2_ROWS_BEFORE = 286;

/** The claimed block. a2.24's report hands over `.287`; measured independently
 *  here, `fr.a2.pronoms-essentiels` runs .001 to .286 with NO GAPS, so .287 is
 *  the next free id in fact rather than in report. */
export const ID_FIRST = 287;
export const ID_LAST = 336;

export const A = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ═══════════════════════════════════════════════════════════════════════════
 *  §3. THE NEIGHBOURS, QUOTED RATHER THAN RESTATED
 * ══════════════════════════════════════════════════════════════════════════ */

/** a2.06, seq 21, the head of the block. ITS POSITION RULE IS QUOTED VERBATIM
 *  AND TAUGHT NOWHERE HERE, for the third lesson running. Read off its build
 *  report §1 rather than paraphrased, and all three layers assert the string so
 *  a rewording goes red. Three lessons, one rule. */
export const DIRECT_UNIT = 'a2.06';
export const POSITION_RULE = 'The pronoun goes in front of the verb, not after it.';

/** a2.06's own frame sentence, IMPORTED rather than re-authored, so the
 *  three-lesson claim is literally a2.06's row. */
export const A206_FRAME_ID = 'fr.a2.pronoms-essentiels.190';

/** a2.24, seq 22, the hard prerequisite. ITS à FRAMING IS QUOTED VERBATIM AND
 *  THIS LESSON COMPLETES IT.
 *
 *  a2.24's report §1.2 says the string was written to survive this lesson's
 *  substitution — « that lesson says the same thing about a THING and gets y, so
 *  both halves have to hold when "a person" changes » — and it exported the half
 *  this lesson replaces as `A_FRAMING_NEXT = 'à plus a thing'`.
 *
 *  So this build is completing a pattern rather than starting one, and the two
 *  strings sit side by side on one card. */
export const INDIRECT_UNIT = 'a2.24';
export const A_FRAMING = 'À plus a person becomes lui or leur, and the à disappears with it.';
export const A_FRAMING_NEXT = 'à plus a thing';
/** This lesson's half of it, written to be the same sentence with one word
 *  changed, because that IS the teaching. */
export const A_FRAMING_MINE = 'À plus a thing becomes y, and the à disappears with it.';
/** And the de half, which has no neighbour to inherit from. */
export const DE_FRAMING = 'De plus a thing becomes en, and the de disappears with it.';

/** a2.24's own two rows, imported, so REQUIRED LAYOUT 2 is a2.24's sentences
 *  rather than copies of them. « Je parle à Marie. » → « Je lui parle. » */
export const A224_NAMED_ID = 'fr.a2.pronoms-essentiels.237';
export const A224_PRONOUN_ID = 'fr.a2.pronoms-essentiels.238';

/** a2.04, Prépositions de lieu, seq 13. `en` IN FRONT OF A COUNTRY, named and
 *  taught nowhere. Its reframe is quoted because the second sentence of it is
 *  about the very word this lesson's largest trap is about. */
export const PLACE_UNIT = 'a2.04';
export const A204_REFRAME = 'À folds the article in. En throws it out. Chez leaves it alone.';
/** a2.04's OWN authored row, imported. « Je vais en France. » is the preposition
 *  of place on the same verb as this lesson's y frame, one word apart. */
export const A204_ROW_ID = 'fr.a2.prepositions-essentielles.131';
/** a2.04's OTHER authored row, and the one the manifest generator found. See
 *  §12: the first draft AUTHORED « Je vais à Paris. » and the generator refused,
 *  because it is already published. The two rows sit one id apart and between
 *  them they carry two of this lesson's three ens on one verb. */
export const A204_CITY_ID = 'fr.a2.prepositions-essentielles.130';

/** a2.18, Prépositions de temps, seq 14. `en` IN FRONT OF A DURATION, and
 *  `il y a` in both its senses. Named, and taught by neither. */
export const TIME_UNIT = 'a2.18';
export const A218_EN_CLAIM =
  'Dans says when it starts. En says how long it took. One of them is a point and the other is a length, and English uses "in" for both.';
/** a2.18's OWN authored rows, imported. */
export const A218_EN_ROW_ID = 'fr.a2.prepositions-essentielles.173';
export const A218_EN_PHRASE_ID = 'fr.a2.prepositions-essentielles.185';
export const A218_ILYA_ROW_ID = 'fr.a2.prepositions-essentielles.186';
export const A218_ILYA_AGO_ID = 'fr.sons.jours-et-mois.081';

/** a2.18's respelling of the frozen phrase. ITS BUILD SHIPPED A GUARD REQUIRING
 *  ONE SPELLING PER LESSON and that guard is scoped to a2.18's own rows, so it
 *  cannot reach here. Checked, rather than assumed, and followed anyway: three
 *  words with two jobs should not also have two spellings, and this lesson has
 *  the same reason a2.18 had. */
export const IL_Y_A_RESPELL = 'EEL EE AH';
export const IL_Y_A_RESPELL_LOWER = 'eel ee ah';

/** a1.29, Les articles partitifs. `en` REPLACES du, de la and des, and the
 *  learner needs them live. Leaned on and re-taught nowhere. */
export const PARTITIVE_UNIT = 'a1.29';
export const A129_REFRAME = 'Un is one of them. Du is some of it.';
/** The published statement « Je bois du café. », found by the manifest the same
 *  way a2.04's city row was. It carries no respelling, which is normal for a
 *  published sentence and is why the pair card that shows it prints the
 *  respelling on the pronoun half only. */
export const PARTITIVE_ROW_ID = 'fr.a1.cuisine.268';

/** a2.02, Irréguliers 1, seq 5. It NAMED the recurring shape and every lesson
 *  from seq 14 onward quotes it by unit id. Doctrine §B.7.
 *
 *  THIS IS THE SEVENTH OCCURRENCE and it is the most extreme instance in the
 *  level: ONE WORD, THREE JOBS, across three lessons of one band. a2.06 was the
 *  fifth and a2.24 the sixth, both one and two lessons ago. */
export const WHAT_FOLLOWS_UNIT = 'a2.02';
export const WHAT_FOLLOWS = 'what comes next decides';
export const SHAPE_EXTENSION =
  'The seventh time, and the first with three answers rather than two.';

/* ─── THE NEGATION ARC ──────────────────────────────────────────────────────
 *
 * a2.23 settled the two-string question on 2026-08-15, a2.06 re-measured it
 * independently and agreed, and a2.24 took it as settled and asserted the
 * NEGATIVE. This build does the same and adds nothing.
 *
 *   a1.18   « Wrap the verb, then ask what the verb was. »      which words
 *   a2.19   « Wrap the verb that changed, not the one carrying the meaning. »
 *                                                                which verb
 *   a2.06   « The wrap goes round the pronoun and the verb together. »
 *   a2.24   quotes a2.06's, unchanged
 *
 * a2.06's sentence is exactly true here: `y` and `en` are in the same cluster
 * and the wrap closes round both words. So this build QUOTES it verbatim and
 * adds nothing, which makes the brief's « the negation string matches a2.24's,
 * which matches a2.06's » true of four lessons rather than three.            */

export const NEGATION_UNIT = 'a1.18';
export const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';
export const FUTUR_UNIT = 'a2.19';
export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';
export const NEGATION_EXTENSION = 'The wrap goes round the pronoun and the verb together.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §4. THE REFRAME
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE LINE, and the brief's candidate taken unchanged.
 *
 *  Doctrine §B.4: could the learner apply it in the half-second between subject
 *  and verb? Yes, and it is the only candidate that does BOTH jobs this lesson
 *  needs at once: it explains what the two words ARE (a preposition with its
 *  object folded in) and it predicts the error (saying the preposition again).
 *
 *  It also survives the substitution that defeats every table-shaped candidate:
 *  it is one sentence about two words rather than two sentences about one word
 *  each, so the learner is not asked to hold a grid while speaking. */
export const REFRAME = 'The preposition goes inside the pronoun, so it does not get said twice.';

/** Invariants §5: assert against an EXPLICIT CONSTANT, never a figure derived
 *  from the lesson.
 *
 *  Counted over the NOT-deduped display walk (a2.22 §3: a Set collapses a short
 *  line authored twice).
 *
 *  FIFTEEN, against a2.06's 17 and a2.24's 13, on a surface of 1,152 strings.
 *  Below a2.06's on purpose and for a reason a2.24 gave and then one more: THIS
 *  LESSON CARRIES THREE RULES ON ITS SURFACE, its own, a2.06's position rule and
 *  a2.24's à framing. a2.06's report records that twenty-three read as a slogan;
 *  three rules at seventeen each would put one of them on every screen twice
 *  over.
 *
 *  15 + 6 + 5 is the split, MEASURED rather than aimed at, and the two borrowed
 *  ones are audibly the quieter. The test asserts both inequalities, so a later
 *  author who leans on a neighbour's line goes red rather than quietly turning
 *  this into a lesson about somebody else's rule. */
export const REFRAME_COUNT = 15;
export const POSITION_RULE_COUNT = 6;
export const A_FRAMING_COUNT = 5;

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'Y replaces à plus a thing and en replaces de plus a thing.',
    why: "THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right: it is the TABLE, not a rule the learner can act on while speaking. It also has to be held as two facts at once, and the half-second between subject and verb is not long enough to look one up. It is a `term` and it is where the table lives.",
  },
  {
    candidate: 'Y is there and en is some.',
    why: 'A gloss, short enough, and it teaches the error the lesson exists to remove. « There » is exactly what English drops in « I am going » and what French cannot drop, so a learner holding this line hears no need for y in a sentence that has no "there" in it. And « some » is not what en means in « j\'en parle ».',
  },
  {
    candidate: 'The pronoun goes in front of the verb, not after it.',
    why: "a2.06's, quoted five times here and taught nowhere. It cannot be this lesson's reframe for the same reason it could not be a2.24's: by seq 23 the learner already does this, and a reframe that repeats the prerequisite adds a slogan rather than a rule. It is also true of these two words unchanged, which is why it is quoted at all.",
  },
  {
    candidate: 'Look for the little word in front of the thing, and swap both.',
    why: `Two instructions, and the second one is the whole lesson while the first is a search. It also says « swap », which invites the learner to build the English sentence and then repair it, which is the slow path this lesson exists to remove. ${Cap(unitRef('a2.06'))} rejected « move it » for the same reason.`,
  },
  {
    candidate: 'En is never optional.',
    why: 'TRUE, AND THE SHARPEST HALF OF THE LESSON, and it is a fact about one of the two words. A reframe that covers en and not y would leave the y half without a rule, and the two halves are one system: the preposition is inside both of them. It is stated on the obligatory screens as its own line rather than as the reframe.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §5. THE OWNS: WHAT THESE TWO REPLACE, WHICH IS NOT A NOUN
 * ══════════════════════════════════════════════════════════════════════════ */

/** a2.06 and a2.24 both replaced a NOUN PHRASE. These two replace a PREPOSITION
 *  AND ITS OBJECT TOGETHER, which is why the learner's instinct produces
 *  « j'y vais à Paris » and « j'en ai des »: they replace the noun and keep the
 *  little word, and the little word is already inside the pronoun.
 *
 *  REQUIRED LAYOUT 1: both rows on ONE screen, with what each replaces, and the
 *  preposition visible inside the pronoun. Separating them makes two small
 *  lessons out of one system. */
export type Replacement = {
  /** `y` or `en`. */
  pro: 'y' | 'en';
  /** The preposition folded inside it. */
  prep: 'à' | 'de';
  /** What the preposition takes: read on the card. */
  takes: string;
  /** The named half, an authored row number. */
  named: number;
  /** The pronoun half. */
  slot: number;
};

export const REPLACES: readonly Replacement[] = [
  { pro: 'y', prep: 'à', takes: 'a thing or a place', named: 287, slot: 288 },
  { pro: 'en', prep: 'de', takes: 'a thing or a quantity', named: 291, slot: 292 },
];

/** And the two published statements that carry the same contrast, imported
 *  rather than authored because the manifest found them. §12. */
export const REPLACES_PUBLISHED: readonly { named: string; slot: number }[] = [
  { named: A204_CITY_ID, slot: 288 },
  { named: PARTITIVE_ROW_ID, slot: 294 },
];

/** The two rows of REQUIRED LAYOUT 1, as they are drawn: the pronoun with its
 *  preposition visible inside it. Read by the guards rather than retyped. */
export const Y_ROW = 'y  =  à + a thing';
export const EN_ROW = 'en  =  de + a thing';

/** THE OBLIGATORY HALF, and the brief says plainly it deserves more weight than
 *  the y half « because y has an English analogue in "there" and en has none ».
 *
 *  Measured through the real `fold()` and the whole exam shape rests on it:
 *
 *      fold("J'en ai.")  !== fold("J'ai.")       so it is TYPEABLE
 *      fold("J'y vais.") !== fold('Je vais.')    so it is TYPEABLE
 *
 *  Both of the things this lesson turns on can be asked for in writing, which is
 *  unusual in this band and is why the exam is free-text heavy. */
/** THE FRENCH IS QUOTED INSIDE THE RULE, and it has to be. a2.24 v3 repaired
 *  four sentences that opened on a lowercase word because a fragment was
 *  interpolated straight after a full stop; here the fragment is a FRENCH
 *  SENTENCE WITH ITS OWN FULL STOP IN THE MIDDLE OF AN ENGLISH ONE, which is the
 *  same defect from the other direction. The batch's lowercase-start guard found
 *  it before the device did. */
export const MUST_RULE = 'French will not let you leave it out. « Oui, j\'ai. » is not a sentence.';
export const MUST_QUESTION = 'Tu as du sucre ?';
export const MUST_RIGHT = "Oui, j'en ai.";
export const MUST_WRONG = "Oui, j'ai.";
export const MUST_ENGLISH = 'Yes, I do.';

/** And the same fact about y, PAIRED rather than taught twice, which is what the
 *  brief asks for: « Same obligatoriness as en, and worth pairing with it rather
 *  than teaching twice. » */
export const MUST_RULE_Y = 'English drops the word here and French keeps it. J\'y vais is I am going.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §6. THE TRAPS
 * ══════════════════════════════════════════════════════════════════════════ */

/** TRAP ONE, AND IT IS THE LARGEST IN THE LEVEL: `en` HAS THREE JOBS, ALL THREE
 *  TAUGHT, ALL THREE IN A2, ACROSS THREE LESSONS.
 *
 *  REQUIRED LAYOUT 3. Both neighbours are named BY ID and taught by neither, and
 *  the distinguisher is the one a2.06 introduced: POSITION. Before a noun it is
 *  a preposition; before a verb it is a pronoun.
 *
 *  Two of the three example rows are the neighbours' OWN authored rows, so the
 *  screen is three lessons' sentences rather than one lesson's illustration. */
export type EnJob = {
  key: 'place' | 'time' | 'pronoun';
  /** The row that shows it: an imported id, or an authored row number. */
  id: string | number;
  /** What the learner sees after the word. */
  after: string;
  /** Which unit owns it. */
  owner: string;
  label: string;
};

export const EN_JOBS: readonly EnJob[] = [
  { key: 'place', id: A204_ROW_ID, after: 'a country', owner: PLACE_UNIT, label: 'a little word in front of a place' },
  { key: 'time', id: A218_EN_ROW_ID, after: 'a length of time', owner: TIME_UNIT, label: 'a little word in front of a length of time' },
  { key: 'pronoun', id: 311, after: 'a verb', owner: UNIT.id, label: 'the word this lesson is about' },
];

export const EN_POSITION_RULE =
  'Before a thing it is a little word. Before a verb it is the pronoun. Nothing else separates them.';

/** TRAP TWO. `il y a` IS FROZEN AND DOES NOT DECOMPOSE.
 *
 *  223 published rows carry it, a2.18 taught it in both its senses, and the `y`
 *  inside it is this lesson's `y`. The brief is right that this is a good moment
 *  and that it goes wrong if the learner is invited to take the phrase to
 *  pieces: somebody who decomposes it says « il en a » for "there is some" and
 *  produces a correct sentence that means "he has some".
 *
 *  ONE MISSION. Shown as containing the y, stated not to come apart, and neither
 *  of a2.18's two senses is re-taught. */
export const FROZEN_UNIT = TIME_UNIT;
export const FROZEN_RULE = 'Il y a is three words that arrived together, and they do not come apart.';
export const FROZEN_ERROR = 'Il en a.';
export const FROZEN_ERROR_WHY =
  'Real French, and it means he has some. The y in il y a is the y on this screen and the phrase still does not come apart.';

/** TRAP THREE. `à` PLUS A PERSON IS a2.24's WORD AND `à` PLUS A THING IS THIS
 *  ONE. The brief calls that split « the cleanest sentence in your lesson » and
 *  it is REQUIRED LAYOUT 2, built out of a2.24's own two rows. */
export const PERSON_ERROR = "J'y parle.";
export const PERSON_ERROR_WHY =
  `A person went into y, and a person never does. That is ${unitRef('a2.24')}\'s word, and this one only takes a thing or a place.`;

/** TRAP FOUR, AND IT IS THE ONE THE REFRAME PREDICTS: the preposition survives.
 *  Permitted inside an errorSpot item as the error, and nowhere else. */
export const KEEPS_A_ERROR = "J'y vais à Paris.";
export const KEEPS_DE_ERROR = "J'en veux du café.";
export const KEEPS_PREP_WHY =
  'The little word is already inside the pronoun, so saying it again says it twice.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §7. THE SLOT-ORDER DECISION, AND THE CURRICULUM GAP
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE canDo SAYS « IN THE RIGHT SLOT » AND THE BRIEF CANNOT DECIDE WHAT THAT
 *  MEANS. It offers three options and recommends the first. TAKEN, unchanged.
 *
 *    1. TEACH y BEFORE en ONLY — the one order this lesson's own two pronouns
 *       can produce, which « Il y en a. » makes worth having — and name
 *       multiple-pronoun order as coming later.       ← TAKEN
 *    2. Teach the full order table for all five sets.
 *    3. Say nothing.
 *
 *  Option 3 fails the canDo. Option 2 is a lesson's worth of content inside a
 *  lesson that already has two hard halves, and it would be the third act of a
 *  lesson whose first two are the hard ones.
 *
 *  MEASURED HERE, INDEPENDENTLY OF THE BRIEF:
 *
 *  - « Il y en a. » is the only two-pronoun sentence this lesson's own material
 *    can build, and the corpus PUBLISHES IT TWICE:
 *      fr.sons.expressions-utiles.158  « il y en a encore »   [respelled]
 *      fr.a2.rp-voyage.007             « Il y en a un à quatorze heures, quai trois. »
 *    Both are imported. The second was written by somebody teaching a train
 *    timetable and its own `notes` read « Il y en a combines il y a with the
 *    pronoun en », which is this lesson's §7 published on a row nobody wrote for
 *    it.
 *  - 29 published rows carry two object pronouns in one clause. All 29 are B1 or
 *    B2 except none; the A-level corpus publishes none of the other combinations
 *    at all. So the temptation is real and the evidence for teaching more of it
 *    at A2 is not.
 *
 *  THE GAP, STATED PLAINLY, BECAUSE IT IS A CURRICULUM FINDING AND NOT A
 *  BUILD DECISION: no A2 unit's title, sub or canDo names pronoun order, no
 *  brief file exists for a2.26..a2.35, and the preflight's own hand-off probe
 *  reports « a2.29 ordre → NO UNIT AT ANY LEVEL ». Either a later A2 unit owns
 *  multiple-pronoun order or a2.35 (Bilan A2) inherits it, and NOBODY HAS
 *  DECIDED. This build names the question on a learner surface and answers none
 *  of it. */
export const ORDER_OPTION = 1 as const;
export const ORDER_RULE = 'When both turn up, y comes first. Il y en a.';
export const ORDER_DEFERRED =
  'Two of these small words in one sentence is a further question, and it is not answered here.';
/** The only multiple-pronoun sequence permitted anywhere in this lesson. */
export const ORDER_PAIR = 'y en';
export const ORDER_ROW = 314;
/** The published rows that carry it, imported rather than invented. */
export const ORDER_PUBLISHED_IDS = ['fr.sons.expressions-utiles.158', 'fr.a2.rp-voyage.007'] as const;

/* ═══════════════════════════════════════════════════════════════════════════
 *  §8. THE JARGON LINE, MEASURED RATHER THAN GUESSED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §14.5: guard the RATIO rather than banning a word, because the
 *  part-of-speech names are house vocabulary and what the house actually does is
 *  prefer the plain phrase. a2.06 measured `pronoun` at 233 uses across the
 *  shipped seed, `subject` at 173 and `object` at 49.
 *
 *  AND THIS UNIT NEEDS NO EXEMPTION AT ALL, WHICH IS NEW IN THIS BLOCK.
 *  a2.06's English name is « Direct Object Pronouns » and a2.24's is « Indirect
 *  Object Pronouns », so both had to exempt `overview.titleEn` and a2.24's had
 *  to exempt BOTH compounds at once. This unit's name is « The Pronouns Y and
 *  EN » and contains no technical compound, so the count of exempt strings here
 *  is ZERO and the guard asserts zero rather than one. */
export const PLAIN_PHRASE = 'the little word inside';
export const PLAIN_TARGET = 'the thing you already said';

export const JARGON_NOUNS: readonly string[] = [
  'adverbial pronoun', 'adverbial pronouns',
  'neutral pronoun', 'neutral pronouns',
  'prepositional object', 'prepositional objects',
  'partitive article', 'partitive articles',
  'direct object', 'direct objects',
  'indirect object', 'indirect objects',
  'object pronoun', 'object pronouns',
  'clitic', 'clitics',
  'antecedent', 'antecedents',
  'anaphora', 'anaphoras',
];

/** Adjectives and mass nouns, which have no plural a learner surface would use.
 *  Corrections §13 asks for the -s plural of every entry and a2.06 §7.2 measured
 *  that the rule cannot be applied to every entry: « accusatives » is not
 *  English. Two lists, and a second guard refuses a countable noun parked on the
 *  adjective list so it cannot become a hiding place. */
export const JARGON_ADJECTIVES: readonly string[] = [
  'locative', 'genitive', 'partitive', 'dative', 'accusative', 'nominative',
  'oblique', 'proclitic', 'enclitic', 'adverbial', 'anaphoric', 'deictic',
  'pronominalisation', 'pronominalization', 'syntax', 'syntactic', 'valency',
];

export const JARGON: readonly string[] = [...JARGON_NOUNS, ...JARGON_ADJECTIVES];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §9. WHAT THE APP CANNOT TEST
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §5: an ear question offering two options that are one sound has
 *  NO CORRECT ANSWER and marking one right certifies a bug.
 *
 *  THE ORDINARY LIST FIRST. Each inner array is one group; two options differing
 *  ONLY by a swap within one group have no answer.
 *
 *  AND THE CHECK IS THE SWAP RATHER THAN THE COUNT, which is a correction to the
 *  shape a2.10, a2.11 and a2.24 all shipped. Those count how many options carry
 *  a member of a group and refuse the question at two, and it works for them
 *  because their groups are `leur`/`leurs` and `vu`/`vue`, which never both
 *  appear in one legal pair. It does NOT work here: « J'y vais. » against « Je
 *  vais. » is this lesson's single most useful ear question, both options carry
 *  `vais`, and a counting check refuses it. Corrections §5 gives the right shape
 *  in its own code sample — `opts[i].replace(x, y) === opts[j]` — and this build
 *  is the first in the band to implement it that way. */
export const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ['pense', 'penses', 'pensent'],
  ['parle', 'parles', 'parlent'],
  ['joue', 'joues', 'jouent'],
  ['répond', 'réponds', 'répondent'],
  ['va', 'vas'],
  ['bois', 'boit'],
  ['veux', 'veut'],
  ['prend', 'prends'],
  ['a', 'à'],
  ['ou', 'où'],
];

/** AND THE ONE THAT IS SPECIFIC TO THIS LESSON AND IS NOT A WORD LIST.
 *
 *  The brief: « Do not build a round on distinguishing en the preposition from
 *  en the pronoun by ear — they are the same sound and the question would have
 *  no correct answer. Enforce it with a HOMOPHONE_FORMS list rather than a
 *  sentence in your report. »
 *
 *  A word list cannot express it, because the two `en`s are THE SAME STRING and
 *  a list of homophonous forms compares different strings. So it is enforced as
 *  a CLASSIFIER instead: an ear question may not offer one option where `en` is
 *  a little word in front of a thing and another where it is the pronoun. That
 *  is the same claim in the only shape that can fail. */
export const EN_JOB_LIMIT =
  'The two ens are one sound, so no listening question in this lesson ever asks you which is which.';

/** No typed surface can test a diacritic. `fold()` normalises to NFD and strips
 *  every combining mark. MEASURED through the real function, both of them:
 *
 *      fold('Je vais à Paris.') === fold('Je vais a Paris.')    TRUE
 *      fold('Où vas-tu ?')      === fold('Ou vas-tu ?')         TRUE
 *
 *  Both are live in this lesson's material — the à this lesson folds into y, and
 *  the où a learner reaches for when a place is involved — and NEITHER can be
 *  asked by typeIn or errorSpot. Written as mcq, exactly as a2.09 and a2.24
 *  did. */
export const ACCENT_LIMIT =
  'The little word here is à with its accent, and the accent is the only thing between it and the verb form a.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §10. THE RESPELLING DECISIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE NASAL OF `en`, READ OFF PUBLISHED ROWS RATHER THAN INVENTED.
 *
 *  a2.04 settled `ahⁿ` for the preposition and read it off a1.22's five feminine
 *  countries and off `fr.sons.nasales.029`. Measured again here across every
 *  published `en + noun` row: twelve clean rows hold `ahⁿ` (`ahⁿ ruh-TAR`,
 *  `ahⁿ na-VAHⁿS`, `ahⁿ TRAⁿ`) against ten flagged rows holding `ahn`.
 *
 *  The PRONOUN is the same vowel and this lesson writes it the same way, which
 *  is the point: the two ens are one sound and a lesson that spelled them
 *  differently would be claiming a difference that is not there. */
export const EN_RESPELL = 'ahⁿ';
export const EN_ELIDED_RESPELL = 'zhahⁿ';

/** `y` AS A PRONOUN, READ OFF THIS THEME'S OWN PUBLISHED ROW.
 *  `fr.a2.pronoms-essentiels.028` « j'y pense » holds `zhee PAHNSS`, so `zhee`
 *  is the corpus's form and this lesson takes it. The second half of that same
 *  row is a §6 BLIND defect and is repaired. §11. */
export const Y_ELIDED_RESPELL = 'zhee';

export const RESPELL_CONVENTION =
  `The pronoun en is ${EN_RESPELL} and j'en is ${EN_ELIDED_RESPELL} on every screen in this lesson, the same value ${unitRef(PLACE_UNIT)} uses for the little word, because the two are one sound. J'y is ${Y_ELIDED_RESPELL}, read off this theme's own published row.`;

/** TWO COMPETING SPELLINGS OF /ø/ THAT THIS BUILD DOES NOT SETTLE, AND THE WAY
 *  IT AVOIDS NEEDING TO.
 *
 *  Measured across every published row: `veux` is `VUH` on twelve rows and `VEU`
 *  on one; `deux` is `DEU` on two and `DUH` on one. Invariants §3 says `/ø œ/` is
 *  `EU`, so the corpus's own majority for `veux` contradicts the stated
 *  convention and the corpus's majority for `deux` follows it.
 *
 *  Repairing either would be one build inventing a convention for the whole
 *  corpus (invariants §9), and printing both in one lesson would put two
 *  spellings of one vowel on adjacent cards. So this build takes `VUH` for
 *  `veux` — the 12-to-1 majority, and the value on the row it imports — and
 *  USES `trois` AND `un` RATHER THAN `deux` wherever a number is needed, which
 *  removes the clash instead of resolving it. Recorded so the next author knows
 *  the question is still open. */
export const OE_UNSETTLED = {
  veux: { VUH: 12, VEU: 1, taken: 'VUH' },
  deux: { DEU: 2, DUH: 1, taken: 'not used' },
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
 *  §11. THE RESPELLING REPAIRS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §14.1: ONE table, every entry carrying the value you get by
 *  repairing ONLY what the checker reports, with two SEPARATE and mutually
 *  exclusive reasons for `half !== to`:
 *
 *    blind   a nasal the checker cannot see, so the minimal repair is the
 *            stored value unchanged
 *    house   a house convention the minimal repair does not reach
 *
 *  MEASURED RESULT: 5 rows across 4 themes. ONE BLIND, ZERO house.
 *
 *  AND THE ONE BLIND ROW IS THE INTERESTING ONE, because the SAME FRENCH WORD
 *  gives a visible nasal in one respelling and an invisible one in another:
 *
 *      penser      pahn-SAY      FLAGGED    `pahn` ends a token
 *      j'y pense   zhee PAHNSS   CLEAN      `PAHNSS` has SS after the N
 *
 *  That is corrections §6's blind spot and §14.1's warning on one word family,
 *  and it is exactly why the split has to be by NASAL rather than by ROW. An
 *  author who filed « j'y pense » as visible, repaired what the checker
 *  reported, and got a green report would have repaired NOTHING.
 *
 *  The brief names neither. It names `prendre`, which needs no repair at all
 *  because all three of its published rows already hold the house value. */
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

export const RESPELL_REPAIRS: readonly RespellRepair[] = [
  {
    id: 'fr.sons.verbes-essentiels.020',
    fr: 'penser',
    from: 'pahn-SAY',
    half: 'pahⁿ-SAY',
    to: 'pahⁿ-SAY',
    blind: false,
    house: false,
    why: 'THE CANONICAL HEADWORD ROW, and the brief does not name it. `pahn` ends a hyphen-delimited token with the vowel directly against the n, so the checker sees it and the minimal repair IS the house value. penser is /pɑ̃se/ and the nasal vowel is real.',
  },
  {
    id: 'fr.b1.verbes.083',
    fr: 'penser',
    from: 'pahn-SAY',
    half: 'pahⁿ-SAY',
    to: 'pahⁿ-SAY',
    blind: false,
    house: false,
    why: 'The second of two, at B1, and the same string. The flashcard hub serves a headword across themes, so two spellings of one word is the defect these repairs exist for.',
  },
  {
    id: 'fr.a2.pronoms-essentiels.028',
    fr: "j'y pense",
    from: 'zhee PAHNSS',
    half: 'zhee PAHNSS',
    to: 'zhee PAHⁿSS',
    blind: true,
    house: false,
    why: 'THE ONE BLIND ROW, AND IT IS THE SAME WORD AS THE TWO ABOVE. `PAHNSS` carries the nasal followed by SS inside the token, which corrections §6 says the checker cannot see, so the minimal repair is the stored value UNCHANGED and `half` equals `from`. This is the row this lesson reads `zhee` off, and repairing what the checker reports would have repaired nothing and reported success.',
  },
  {
    id: 'fr.a2.pronoms-essentiels.031',
    fr: "j'en veux",
    from: 'zhahn VUH',
    half: 'zhahⁿ VUH',
    to: 'zhahⁿ VUH',
    blind: false,
    house: false,
    why: 'THE ROW THIS LESSON READS `zhahⁿ` OFF, and it is a repair target in its own theme. Visible, and the minimal repair is the house value. `VUH` is NOT repaired: it is the 12-to-1 majority for veux and the /ø/ question is unsettled corpus-wide. §10.',
  },
  {
    id: 'fr.sons.expressions-utiles.158',
    fr: 'il y en a encore',
    from: 'EEL YAHN NAH ahn-KOR',
    half: 'EEL YAHⁿ NAH ahⁿ-KOR',
    to: 'EEL YAHⁿ NAH ahⁿ-KOR',
    blind: false,
    house: false,
    why: `THE ONLY PUBLISHED RESPELLING OF THE y-BEFORE-en ORDER ANYWHERE IN THE CORPUS, and it breaks the nasal twice in one string. Both are visible, so the minimal repair is the house value. It is imported AND repaired, which is ${unitRef('a2.24')}\'s envoyer shape for the second time in this block.`,
  },
];

/** THE FALSE POSITIVE, which corrections §6 closes by asking every build to look
 *  for and to report the absence of if it finds none.
 *
 *  a2.06 looked and found none. a2.24 found TWO, one on its headline verb.
 *  THIS BUILD LOOKED AND FOUND NONE IN ITS OWN MATERIAL, and the absence is
 *  reported rather than left as a silence.
 *
 *  Measured through the real function across every word this lesson prints with
 *  a real /n/ or /m/ after a vowel: `une` ÜN, `bureau` bü-ROH, `tennis`
 *  tay-NEESS, `personne` pehr-SON, `téléphone` tay-lay-FON — all clean. The
 *  shape invariants §3 records for `jaune` and `automne` is present in the
 *  corpus (`suh-MEHN` for `la semaine` is still flagged) and NOT on any row this
 *  lesson authors or imports. */
export const FALSE_POSITIVES: readonly { fr: string; flagged: string; used: string; why: string }[] = [];
export const FALSE_POSITIVES_LOOKED_AT: readonly string[] = [
  'une', 'bureau', 'tennis', 'personne', 'assez', 'marché', 'sucre', 'travail', 'merci',
];

/** DELIBERATELY LEFT ALONE, with the reason, because invariants §9 says a
 *  variant is not a violation and only what breaks a STATED rule gets repaired.
 *  a2.15's precedent: repair what you import, record what you did not.
 *
 *  THIS LIST IS THE BIGGEST FINDING IN THE BUILD AND IT IS NOT THIS LESSON'S TO
 *  FIX. Of the 19 published rows carrying an elided y or en pronoun AND a
 *  respelling, FOURTEEN are flagged and every one breaks in the same place. Four
 *  are imported and repaired above. The other ten are here. */
export const RESPELL_LEFT_ALONE: readonly { fr: string; id: string; variant: string; why: string }[] = [
  { fr: "j'en ai marre", id: 'fr.sons.expressions-utiles.130', variant: 'zhahn-NAY MAHR', why: 'FLAGGED, and it is the same nasal this lesson repairs four times. NOT IMPORTED: the phrase means "I am fed up", which is an idiom rather than the construction, and importing it to repair it would widen the merge into a theme this lesson never shows.' },
  { fr: "j'en ai besoin", id: 'fr.sons.expressions-utiles.136', variant: 'ZHAHN NAY buh-ZWUHN', why: 'FLAGGED TWICE, on `ZHAHN` and on `ZWUHN`. The closest published row to this lesson\'s own « J\'en ai besoin. », which is authored here at fr.a2.pronoms-essentiels.332 with `ZHAHⁿ NAY buh-ZWEHⁿ` instead. Not imported, because importing it would mean repairing a second nasal in a word this lesson does not teach.' },
  { fr: "je t'en prie", id: 'fr.sons.expressions-utiles.059', variant: 'zhuh tahn PREE', why: 'FLAGGED. A set phrase for "you are welcome" and not the construction.' },
  { fr: "il n'y a plus de pain", id: 'fr.sons.expressions-utiles.157', variant: 'EEL NYAH PLÜ DUH PUHN', why: 'FLAGGED on `PUHN`, which is `pain` and not the pronoun at all. Out of scope twice over.' },
  { fr: "il n'en demeure pas moins que", id: 'fr.sons.mots-de-liaison.075', variant: 'eel-nahn-duh-MUR-pa-mwan-KUH', why: 'FLAGGED twice. A C1 connector.' },
  { fr: "il n'en est pas question", id: 'fr.sons.expressions-utiles.202', variant: 'eel-nahn-neh-pah-kess-TYOHN', why: 'FLAGGED.' },
  { fr: "je n'en reviens pas", id: 'fr.sons.expressions-utiles.218', variant: 'zhuh-nahn-ruh-vyehn-PAH', why: 'FLAGGED twice.' },
  { fr: "je n'en crois pas mes yeux", id: 'fr.sons.expressions-utiles.219', variant: 'zhuh-nahn-krwah-pah-may-ZYUH', why: 'FLAGGED.' },
  { fr: "ne t'en fais pas", id: 'fr.sons.expressions-utiles.237', variant: 'nuh-tahn-feh-PAH', why: 'FLAGGED.' },
  { fr: "s'en foutre · s'en ficher", id: 'fr.b2.expressions-argot.034 · .035', variant: 'SAHN FOOTR · SAHN fee-SHAY', why: 'FLAGGED, both, and both are B2 slang carrying a vulgarity warning. Named because the pattern is the whole corpus and not one theme.' },
  { fr: 'aller', id: 'fr.sons.consonnes.143', variant: 'a-LAY against ah-LAY (fr.sons.verbes-essentiels.003)', why: 'BOTH CLEAN. The h-in-the-vowel question invariants §9 lists as unsettled, and repairing it would be one build inventing a convention. `ah-LAY` is imported as the canonical headword row.' },
  { fr: 'jouer', id: 'fr.a1.rp-loisirs.035', variant: 'zhoo-AY against ZHWAY (3 rows)', why: 'BOTH CLEAN, and a genuine disagreement about whether /ʒwe/ is one syllable. 3-to-1, and this lesson imports the majority.' },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §12. THE IMPORTED ROWS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §2, holding for the TENTH build running: NOT ONE INFINITIVE IS
 *  AUTHORED. All seven verbs the brief names already exist.
 *
 *  Chosen by the §2 rule — a row with a respelling and NO `gender`. That is not
 *  theoretical here: `des pommes` (fr.a1.cuisine.259) is the obvious partitive
 *  card and it is GENDERED, so the manifest refuses it by name and « du café »
 *  is imported instead. */
export const IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.verbes-essentiels.003', fr: 'aller', why: 'The verb behind the y frame. ah-LAY, the canonical headword row; fr.sons.consonnes.143 says a-LAY and both are clean.' },
  { id: 'fr.sons.verbes-essentiels.020', fr: 'penser', why: 'THE IMPORT THAT IS ALSO A REPAIR. penser à is the second frame, and both published rows are FLAGGED. §11.' },
  { id: 'fr.sons.verbes-essentiels.023', fr: 'jouer', why: 'jouer à a game. ZHWAY on three rows against zhoo-AY on one.' },
  { id: 'fr.sons.verbes-essentiels.007', fr: 'vouloir', why: 'voo-LWAR, the only published row.' },
  { id: 'fr.sons.verbes-essentiels.002', fr: 'avoir', why: 'ah-VWAR. The verb the obligatory en is met on. fr.b1.courses.042 is GENDERED and is refused by name.' },
  { id: 'fr.a1.cuisine.042', fr: 'boire', why: 'BWAHR. Two rows hold it and two more hold no respelling at all.' },
  { id: 'fr.sons.verbes-essentiels.012', fr: 'prendre', why: 'PRAHⁿDR, AND THE BRIEF SAYS TO BRING A COMPETING COPY INTO LINE. There is no competing copy: all three published rows already hold the house value. Header §4.' },
];

/** The respelled PHRASES this lesson reads its own pronoun respellings off,
 *  rather than inventing them. Two are in this lesson's own theme, both carry
 *  the construction, and both were written by somebody not teaching this.
 *
 *  a2.15's precedent, for the fourth build in this band: probe for the word
 *  inside a phrase before concluding a respelling has to be made up. */
export const IMPORTED_PHRASES: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.a2.pronoms-essentiels.028', fr: "j'y pense", why: "THE SOURCE OF `zhee`, and a §6 BLIND repair target. Its own `en` gloss is « I think about it », which is this lesson's second frame published by somebody else." },
  { id: 'fr.a2.pronoms-essentiels.031', fr: "j'en veux", why: 'THE SOURCE OF `zhahⁿ`, and a visible repair target. Its own notes read « En replaces de + a noun already mentioned, often showing a quantity », which is this lesson\'s Owns already published.' },
  { id: 'fr.sons.expressions-utiles.158', fr: 'il y en a encore', why: 'THE ONLY PUBLISHED RESPELLING OF y BEFORE en. Imported and repaired. §7.' },
  { id: A218_EN_PHRASE_ID, fr: 'en deux heures', why: "a2.18's OWN authored phrase, the little word in front of a length of time. One of the three ens, and it is that lesson's row rather than a copy." },
  { id: A218_ILYA_AGO_ID, fr: 'il y a une heure', why: "a2.18's own import, the ago sense of the frozen phrase, respelled EEL EE AH. Shown, not taught." },
  { id: A218_ILYA_ROW_ID, fr: 'il y a trois jours', why: "a2.18's OWN authored phrase, same phrase and same spelling. Two rows from two themes agreeing is what makes EEL EE AH the value rather than a choice." },
  { id: 'fr.a1.cafe.151', fr: 'du café', why: "a1.29's partitive, ungendered, respelled. The thing `en` replaces, leaned on and re-taught nowhere." },
  { id: 'fr.a1.expressions-de-quantite.001', fr: 'beaucoup de', why: 'a1.29\'s quantity expression. The `de` this lesson folds into `en` when a quantity is named.' },
];

/** Published SENTENCES imported as corroboration: written for another lesson, by
 *  somebody not teaching this, and carrying the construction anyway.
 *
 *  SIX OF THE TEN ARE THE PARADIGM ITSELF (header §1), which is the find that
 *  changes this lesson's shape. */
export const IMPORTED_SENTENCES: readonly { id: string; why: string }[] = [
  { id: 'fr.a2.pronoms-essentiels.029', why: '« Je vais à Paris ; j\'y vais en train. » THE OPENING SCREEN, PUBLISHED. The named half and the pronoun half of one sentence, with a semicolon between them, and an `en` preposition in the same string.' },
  { id: 'fr.a2.pronoms-essentiels.030', why: '« Tu penses à ton examen ? Oui, j\'y pense souvent. » The same shape on the second frame verb, as a question and an answer.' },
  { id: 'fr.a2.pronoms-essentiels.032', why: '« Tu veux du café ? Oui, j\'en veux bien. » The de half, and the answer that cannot leave the word out.' },
  { id: 'fr.a2.pronoms-essentiels.033', why: '« Elle a trois frères ; elle en parle souvent. » en for a quantity already named, and the pronoun in front of the verb with a subject that is not je.' },
  { id: 'fr.a2.rp-voyage.007', why: '« Il y en a un à quatorze heures, quai trois. » THE ORDER, PUBLISHED, and its own notes read « Il y en a combines il y a with the pronoun en ». Written for a train timetable by somebody not teaching pronoun order.' },
  { id: A204_ROW_ID, why: "« Je vais en France. » a2.04's OWN authored row, the little word in front of a place, on the same verb as this lesson's y frame. One of the three ens." },
  { id: A218_EN_ROW_ID, why: "« Je finis en deux heures. » a2.18's OWN authored row, the little word in front of a length of time. The second of the three ens." },
  { id: A224_NAMED_ID, why: `« Je parle à Marie. » ${unitRef('a2.24')}\'s row, the à half with a PERSON behind it. REQUIRED LAYOUT 2 is ${unitRef('a2.24')}\'s sentence rather than a copy.` },
  { id: A224_PRONOUN_ID, why: "« Je lui parle. » a2.24's frame, so the person/thing split is that lesson's own pair." },
  { id: A206_FRAME_ID, why: "« Je le vois. » a2.06's frame, so the position rule is quoted beside the sentence a2.06 wrote for it." },
  { id: A204_CITY_ID, why: "« Je vais à Paris. » a2.04's OTHER authored row, and THE MANIFEST FOUND IT. The first draft AUTHORED this sentence and the generator refused, because a frame that already exists as a whole sentence is a re-authoring rather than a build. Importing it makes REQUIRED LAYOUT 1's à half a2.04`s row, beside ${unitRef('a2.04')}`s « Je vais en France. » in the three-ens screen: one lesson, one verb, two of the three jobs." },
  { id: PARTITIVE_ROW_ID, why: "« Je bois du café. » fr.a1.cuisine.268, and the manifest found this one the same way. It carries NO respelling, which is normal for a published sentence and is why the pair card prints the respelling on the pronoun half only." },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §13. THE AUTHORED ROWS
 * ══════════════════════════════════════════════════════════════════════════ */

export type Bucket =
  | 'named' | 'slot' | 'must' | 'quantity' | 'place' | 'three'
  | 'frozen' | 'order' | 'negative' | 'paradigm' | 'past' | 'unseen' | 'talk';

export type Row = Item & {
  bucket: Bucket;
  /** The pronoun the row carries, or null where it deliberately carries none
   *  (the named halves, and the rows that show the little word doing its other
   *  job). Read by the guards rather than re-parsed out of `fr`, which is the
   *  shape corrections §14.4 warns against. */
  pro: 'y' | 'en' | null;
  /** Set where the row's `en` is the PREPOSITION rather than the pronoun. The
   *  guard that refuses a surviving preposition has to know which it is looking
   *  at, and this lesson is the one place in the corpus where both appear on
   *  purpose. */
  prepEn?: true;
};

/* DECLARED IN `DRILL_KINDS` ORDER, WHICH IS NOT COSMETIC. The batch writes
 * `it.drills` to Postgres verbatim and the merge writes `drillOrder(it.drills)`
 * to the seed, so the two copies agree ONLY IF the array is already sorted. */
const S: Item['drills'] = ['flashcard', 'voiceflash', 'sentence', 'review'];
const SD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'review'];
const SR: Item['drills'] = ['flashcard', 'voiceflash', 'sentence', 'roleplay', 'review'];
const SDR: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'roleplay', 'review'];

const T = ['a2', 'pronoun', 'neutral', 'present'];
const TP = ['a2', 'pronoun', 'neutral', 'passe-compose'];

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
  prepEn?: true,
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
  ...(prepEn ? { prepEn } : {}),
});

export const ROWS: readonly Row[] = [
  /* ── THE OWNS. The named half and the pronoun half, twice, and the little
   *    word goes inside rather than staying behind. ─────────────────────── */
  R(287, 'Tu vas à Paris ?', 'Are you going to Paris?', '/ty va a pa.ʁi/', 'tü VAH ah pah-REE',
    'named', null, S, `The à half, as a question, so the pronoun half below is an ANSWER rather than a restatement. Eleven letters. The statement form « Je vais à Paris. » is NOT authored: it is already published as fr.a2.prepositions-essentielles.130, ${unitRef('a2.04')}\'s own row, and the manifest refused the first draft for exactly that reason. It is imported instead, and so is the row beside it, so this lesson\'s opening contrast is ${unitRef('a2.04')}\'s two sentences.`),
  R(288, "J'y vais.", 'I am going.', '/ʒi vɛ/', 'zhee VEH',
    'slot', 'y', SD, 'THE Y FRAME. SIX letters through the real dicteeMode, so the dictée takes it in LETTERS mode; the brief says seven. The English has no word for y in it at all, which is the whole of the second thing this lesson teaches.'),
  R(289, 'Je pense à mon examen.', 'I am thinking about my exam.', '/ʒə pɑ̃s a mɔ̃.n‿ɛɡ.za.mɛ̃/', 'zhuh PAHⁿSS ah mohⁿ nehg-zah-MEHⁿ',
    'named', null, S, 'The à half on a verb where the thing behind à is not a place at all. Seventeen letters, so word mode and no dictation drill. penser à is the second frame and fr.a2.pronoms-essentiels.030 publishes the question form.'),
  R(290, "J'y pense souvent.", 'I think about it often.', '/ʒi pɑ̃s su.vɑ̃/', 'zhee PAHⁿSS soo-VAHⁿ',
    'slot', 'y', SD, 'Fourteen letters. A THING rather than a place, so the learner cannot read y as "there". The bare « J\'y pense. » is NOT authored: it is already the published phrase card fr.a2.pronoms-essentiels.028, and the manifest refused the first draft as a duplicate fr inside this theme, which is the flashcard hub serving one card twice. That row is imported and its respelling repaired instead, and this sentence is the bare form of what fr.a2.pronoms-essentiels.030 already publishes as an answer.'),
  R(291, 'Je parle de mon travail.', 'I talk about my work.', '/ʒə paʁl də mɔ̃ tʁa.vaj/', 'zhuh PARL duh mohⁿ trah-VAHY',
    'named', null, S, `The de half, on ${unitRef('a2.24')}\'s frame verb. Nineteen letters, word mode. Reusing parler across the block is a cross-lesson claim in two sentences: à plus a person gave lui, de plus a thing gives en, same verb.`),
  R(292, "J'en parle.", 'I talk about it.', '/ʒɑ̃ paʁl/', 'zhahⁿ PARL',
    'slot', 'en', SD, `THE EN FRAME. Eight letters. The same verb as ${unitRef('a2.24')}\'s « Je lui parle. », which is why the two lessons can be put side by side without a third sentence in between.`),
  R(293, 'Tu bois du café ?', 'Do you drink coffee?', '/ty bwa dy ka.fe/', 'tü BWAH dü ka-FAY',
    'named', null, S, `The de half again, and this time the de is hiding inside du. Twelve letters. ${Cap(unitRef('a1.29'))} owns du, de la and des and this lesson re-teaches none of them; it only says that en takes all three away. The statement form « Je bois du café. » is fr.a1.cuisine.268 and is IMPORTED rather than re-authored: the manifest refused the first draft, which is the generator working.`),
  R(294, "J'en bois.", 'I drink some.', '/ʒɑ̃ bwa/', 'zhahⁿ BWAH',
    'slot', 'en', SD, 'Seven letters. The English needs "some" and the French does not need anything else, which is the opposite of the sentence two rows down.'),

  /* ── THE OBLIGATORY EN. The heaviest half of the lesson. ──────────────── */
  R(295, 'Tu as du sucre ?', 'Do you have any sugar?', '/ty a dy sykʁ/', 'tü AH dü SÜKR',
    'must', null, S, `The question the scene opens on. Eleven letters. ${Cap(unitRef('a1.19'))} owns the rising question and this borrows it.`),
  R(296, "Oui, j'en ai.", 'Yes, I do.', '/wi ʒɑ̃.n‿e/', 'wee, zhahⁿ NAY',
    'must', 'en', SDR, 'THE OBLIGATORY ANSWER, and the sentence this whole lesson is for. Eight letters. The English is three words and none of them is a translation of en. Measured through the real fold(): it does NOT collapse with « J\'ai. », so this is testable by typing.'),
  R(297, 'Tu prends du sucre ?', 'Do you take sugar?', '/ty pʁɑ̃ dy sykʁ/', 'tü PRAHⁿ dü SÜKR',
    'must', null, S, 'Fifteen letters. A second verb, so the learner does not read the rule as a fact about avoir.'),
  R(298, "Oui, j'en prends.", 'Yes, I do.', '/wi ʒɑ̃ pʁɑ̃/', 'wee, zhahⁿ PRAHⁿ',
    'must', 'en', SD, 'Twelve letters, and the same three English words again. English answers this question with the auxiliary and French answers it with the object.'),
  R(299, 'Tu as des enfants ?', 'Do you have children?', '/ty a de.z‿ɑ̃.fɑ̃/', 'tü AH day zahⁿ-FAHⁿ',
    'must', null, S, `Fourteen letters. des, which ${unitRef('a1.29')} owns, and which en takes away along with the noun.`),
  R(300, "Oui, j'en ai trois.", 'Yes, I have three.', '/wi ʒɑ̃.n‿e tʁwa/', 'wee, zhahⁿ nay TRWAH',
    'quantity', 'en', SDR, 'Thirteen letters. THE NUMBER STAYS AND THE NOUN GOES, which is the shape English has no equivalent for at all: "I have three" says nothing about what three of.'),
  R(301, "J'en ai beaucoup.", 'I have a lot.', '/ʒɑ̃.n‿e bo.ku/', 'zhahⁿ nay boh-KOO',
    'quantity', 'en', SD, `Thirteen letters. beaucoup de is ${unitRef('a1.29')}\'s and the de went inside en with the noun.`),
  R(302, "J'en veux un peu.", 'I want a little.', '/ʒɑ̃ vø œ̃ pø/', 'zhahⁿ VUH uhⁿ PUH',
    'quantity', 'en', SD, 'Twelve letters. VUH rather than VEU: twelve published rows spell veux that way against one, and §10 records that the /ø/ question is unsettled corpus-wide and is not this build\'s to settle.'),
  R(303, "J'en ai assez.", 'I have enough.', '/ʒɑ̃.n‿e a.se/', 'zhahⁿ nay ah-SAY',
    'quantity', 'en', SD, 'Ten letters. assez de, and the de is gone again. Four quantity words and the same disappearance each time.'),

  /* ── Y FOR A PLACE, AND Y FOR A THING. ───────────────────────────────── */
  R(304, 'Tu vas au marché ?', 'Are you going to the market?', '/ty va o maʁ.ʃe/', 'tü VAH oh mar-SHAY',
    'named', null, S, `Thirteen letters. au is à plus le, which ${unitRef('a1.21')} and ${unitRef('a2.04')} own, and y swallows the whole of it.`),
  R(305, "Oui, j'y vais demain.", 'Yes, I am going tomorrow.', '/wi ʒi vɛ də.mɛ̃/', 'wee, zhee VEH duh-MEHⁿ',
    'place', 'y', SDR, 'Fifteen letters. The English answer has no word for the market in it either, so this is the one place the two languages agree.'),
  R(306, 'Je joue au tennis.', 'I play tennis.', '/ʒə ʒu o tɛ.nis/', 'zhuh ZHOO oh tay-NEESS',
    'named', null, S, 'Fourteen letters. jouer à, and the thing behind à is a game rather than a place, which is why y is not "there".'),
  R(307, "J'y joue le samedi.", 'I play on Saturdays.', '/ʒi ʒu lə sam.di/', 'zhee ZHOO luh sam-DEE',
    'place', 'y', SD, 'Fourteen letters. Nothing in the English is y and nothing in it is "there" either. a1.08 owns the days.'),
  R(308, 'Nous y allons ensemble.', 'We go there together.', '/nu.z‿i a.lɔ̃ ɑ̃.sɑ̃bl/', 'noo zee ah-LOHⁿ ahⁿ-SAHⁿBL',
    'place', 'y', S, `Nineteen letters, word mode. A subject that is not je, and the pronoun still sits between it and the verb. ${Cap(unitRef('a2.01'))} owns the nous form.`),
  R(309, 'Tu vas au bureau ?', 'Are you going to the office?', '/ty va o by.ʁo/', 'tü VAH oh bü-ROH',
    'named', null, S, 'Thirteen letters.'),
  R(310, "Oui, j'y vais.", 'Yes, I am.', '/wi ʒi vɛ/', 'wee, zhee VEH',
    'must', 'y', SD, 'Nine letters, and THE Y HALF OF THE OBLIGATORY PAIR. The English is « Yes, I am » with nothing after it; French cannot stop at « Oui, je vais. » any more than it can stop at « Oui, j\'ai. »'),

  /* ── THE THREE ENS. The largest trap in the level. ────────────────────── */
  R(311, 'Elle en parle.', 'She talks about it.', '/ɛl ɑ̃ paʁl/', 'ehl ahⁿ PARL',
    'three', 'en', SD, 'Eleven letters. THE PRONOUN, with a verb straight after it. The row below is the same word with a thing after it, and there is nothing else between them.'),
  R(312, 'Elle habite en France.', 'She lives in France.', '/ɛ.l‿a.bit ɑ̃ fʁɑ̃s/', 'ehl ah-BEET ahⁿ FRAHⁿSS',
    'three', null, S, `THE LITTLE WORD, with a country after it. Eighteen letters, word mode. ${Cap(unitRef('a2.04'))} owns this one and this lesson teaches none of it. The respelling is ${unitRef('a2.04')}\'s own value, ahⁿ, because the two are one sound and spelling them apart would claim a difference that is not there.`, ['preposition'], true),

  /* ── il y a. FROZEN, AND IT DOES NOT COME APART. ──────────────────────── */
  R(313, 'Il y a du pain.', 'There is bread.', '/il i a dy pɛ̃/', 'eel ee ah dü PEHⁿ',
    'frozen', null, S, `Ten letters. The y in the middle is this lesson\'s y and the three words still do not come apart. ${Cap(unitRef('a2.18'))} owns the phrase in both its senses and neither is re-taught here.`, ['frozen']),
  R(314, 'Il y en a.', 'There is some.', '/il i ɑ̃.n‿a/', 'eel ee ahⁿ NAH',
    'order', 'en', SD, 'SIX LETTERS, AND THE ONLY TWO-PRONOUN SENTENCE IN THIS LESSON. y first, en second, and the order is fixed. fr.sons.expressions-utiles.158 and fr.a2.rp-voyage.007 both publish it and this build imports both.', ['frozen']),
  R(315, 'Il y en a trois.', 'There are three.', '/il i ɑ̃.n‿a tʁwa/', 'eel ee ahⁿ nah TRWAH',
    'order', 'en', SD, 'Eleven letters. The frozen phrase, the pronoun and a number, and still nothing says what three of.', ['frozen']),

  /* ── NEGATION. a2.06's sentence, quoted and not extended. ─────────────── */
  R(316, "Je n'y vais pas.", 'I am not going.', '/ʒə ni vɛ pa/', 'zhuh nee VEH PAH',
    'negative', 'y', SD, `Eleven letters. ne outside, pronoun and verb inside, pas after both. Exactly ${unitRef('a2.06')}\'s sentence and no new rule.`, ['negation']),
  R(317, "Je n'en veux pas.", 'I do not want any.', '/ʒə nɑ̃ vø pa/', 'zhuh nahⁿ VUH PAH',
    'negative', 'en', SD, 'Twelve letters. And the English still needs a word French puts inside the pronoun.', ['negation']),
  R(318, "Il n'y pense pas.", 'He does not think about it.', '/il ni pɑ̃s pa/', 'eel nee PAHⁿSS PAH',
    'negative', 'y', SD, 'Twelve letters. A different subject and a different verb, and nothing about the wrap responds to either.', ['negation']),
  R(319, "Nous n'en parlons pas.", 'We do not talk about it.', '/nu nɑ̃ paʁ.lɔ̃ pa/', 'noo nahⁿ par-LOHⁿ PAH',
    'negative', 'en', S, 'Seventeen letters, word mode.', ['negation']),

  /* ── THE PARADIGM ACROSS THE PERSONS. Two words, so it is deliberately
   *    thin: these exist to be practised rather than to be taught. ──────── */
  R(320, 'Tu y vas souvent ?', 'Do you go there often?', '/ty i va su.vɑ̃/', 'tü ee VAH soo-VAHⁿ',
    'paradigm', 'y', SD, `Thirteen letters. The pronoun does not move for a question. ${Cap(unitRef('a1.19'))} owns the rising question.`),
  R(321, 'Elle y va tous les jours.', 'She goes there every day.', '/ɛ.l‿i va tu le ʒuʁ/', 'ehl ee VAH too lay ZHOOR',
    'paradigm', 'y', S, 'Nineteen letters, word mode. A feminine subject, and nothing about y responds to it.'),
  R(322, 'Nous en prenons.', 'We take some.', '/nu.z‿ɑ̃ pʁə.nɔ̃/', 'noo zahⁿ pruh-NOHⁿ',
    'paradigm', 'en', SD, `Thirteen letters. The z is a liaison the learner hears and never writes, which ${unitRef('sons.10')} owns.`),
  R(323, 'Vous en voulez ?', 'Do you want some?', '/vu.z‿ɑ̃ vu.le/', 'voo zahⁿ voo-LAY',
    'paradigm', 'en', SD, 'Twelve letters.'),
  R(324, 'Ils y pensent.', 'They think about it.', '/il i pɑ̃s/', 'eel ee PAHⁿSS',
    'paradigm', 'y', SD, `Eleven letters, and the verb ending is silent, which is ${unitRef('a2.01')}\'s business. pense and pensent are one sound and no listening question here offers you both.`),
  R(325, 'Tu en as ?', 'Do you have any?', '/ty ɑ̃.n‿a/', 'tü ahⁿ NAH',
    'paradigm', 'en', SDR, 'SIX letters, and the question the other person asks in the scene without correcting anybody. fr.a2.entraide.008 publishes the same three words inside a longer sentence.'),

  /* ── THE PAST. The pronoun in front of BOTH words of the verb, which is
   *    a2.06's rule applied to a tense the learner already has. ─────────── */
  R(326, "J'en ai parlé.", 'I talked about it.', '/ʒɑ̃.n‿e paʁ.le/', 'zhahⁿ nay par-LAY',
    'past', 'en', SD, `Ten letters. The pronoun goes in front of both halves of the verb, which is ${unitRef('a2.06')}\'s rule and ${unitRef('a2.05')}\'s tense and neither is new here.`),
  R(327, "Je n'en ai pas parlé.", 'I did not talk about it.', '/ʒə nɑ̃.n‿e pa paʁ.le/', 'zhuh nahⁿ nay pah par-LAY',
    'past', 'en', SD, 'Fifteen letters. The wrap and the past together: ne, pronoun, first word, pas, second word. Both rules, neither of them new.', ['negation']),
  R(328, "J'y ai pensé.", 'I thought about it.', '/ʒi e pɑ̃.se/', 'zhee ay pahⁿ-SAY',
    'past', 'y', SD, `Nine letters. The other pronoun, the same position, and the second word takes nothing at all, which is ${unitRef('a2.24')}\'s rule and holds here too.`),

  /* ── VERBS THIS LESSON NEVER LISTED. Doctrine §B.1: an A2 learner leaves
   *    able to say things the lesson never said. ─────────────────────────── */
  R(329, 'Il en rêve.', 'He dreams about it.', '/i.l‿ɑ̃ ʁɛv/', 'eel ahⁿ REHV',
    'unseen', 'en', SD, 'rêver DE quelque chose, and rêver is on no list in this lesson. Eight letters. English says "dreams ABOUT it", so the learner has a signal and it points at the wrong little word.', ['unseen']),
  R(330, 'Nous en revenons.', 'We are coming back from there.', '/nu.z‿ɑ̃ ʁə.və.nɔ̃/', 'noo zahⁿ ruh-vuh-NOHⁿ',
    'unseen', 'en', SD, 'revenir DE, and the thing behind de is a PLACE, which is the case a learner holding "y is there and en is some" gets wrong every time. Fourteen letters.', ['unseen']),
  R(331, 'Elle y répond.', 'She answers it.', '/ɛ.l‿i ʁe.pɔ̃/', 'ehl ee ray-POHⁿ',
    'unseen', 'y', SD, `THE SHARPEST CASE IN THE LESSON. répondre à is ${unitRef('a2.24')}\'s verb and ${unitRef('a2.24')}\'s answer was lui, because the thing behind à was a person. Here it is a letter, so it is y. Same verb, same little word, two different pronouns, and only the thing behind à decides.`, ['unseen']),
  R(332, "J'en ai besoin.", 'I need it.', '/ʒɑ̃.n‿e bə.zwɛ̃/', 'zhahⁿ nay buh-ZWEHⁿ',
    'unseen', 'en', SD, 'avoir besoin DE, which is a fixed expression rather than a verb and behaves exactly the same. Eleven letters. fr.sons.expressions-utiles.136 publishes the phrase and its respelling is flagged twice; §11 records why it is not imported.', ['unseen']),

  /* ── THE CONVERSATION. ────────────────────────────────────────────────── */
  R(333, "Oui, j'y vais tous les samedis.", 'Yes, I go every Saturday.', '/wi ʒi vɛ tu le sam.di/', 'wee, zhee VEH too lay sam-DEE',
    'talk', 'y', SR, 'Role play turn. Twenty-three letters, word mode, so no dictation drill.'),
  R(334, "Non, je n'en ai plus.", 'No, I do not have any left.', '/nɔ̃ ʒə nɑ̃.n‿e ply/', 'nohⁿ, zhuh nahⁿ nay PLÜ',
    'talk', 'en', SDR, 'Turn. Fourteen letters. The negative and the quantity in one answer, and « Non, je n\'ai plus. » is not a sentence either.', ['negation']),
  R(335, "J'en prends un, merci.", 'I will take one, thanks.', '/ʒɑ̃ pʁɑ̃.z‿œ̃ mɛʁ.si/', 'zhahⁿ PRAHⁿ ZUHⁿ, mehr-SEE',
    'talk', 'en', SDR, 'Turn. SIXTEEN letters, exactly at the dictée limit and still in LETTERS mode. un stays and the noun goes, same as trois.'),
  R(336, "Oui, j'en ai parlé hier.", 'Yes, I talked about it yesterday.', '/wi ʒɑ̃.n‿e paʁ.le jɛʁ/', 'wee, zhahⁿ nay par-LAY YEHR',
    'talk', 'en', SR, 'Turn. Seventeen letters, word mode. The past straight away, because that is what somebody actually answers.'),
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
 *  The brief names the candidate and it is the right one, because it is the only
 *  place in the pronoun block where the sentence genuinely STOPS. a2.06's scene
 *  dies on a sentence that trails off; a2.24's dies on a sentence that finishes
 *  and means something else. THIS ONE DIES ON TWO WORDS THAT HAVE NOWHERE TO GO.
 *
 *  « Oui, j'ai. » is not a sentence in French. It is not wrong in the way a
 *  learner can hear, it is unfinished, and the other person waits for the rest.
 *  And then she says the missing word herself, in a question, without correcting
 *  anybody. */
export const SCENE_QUESTION = 'Tu as du sucre ?';
export const SCENE_QUESTION_EN = 'Do you have any sugar?';
export const SCENE_ERROR = "Oui, j'ai.";
export const SCENE_ERROR_EN = 'Yes, I do.';
export const SCENE_RIGHT = "Oui, j'en ai.";
export const SCENE_RIGHT_EN = 'Yes, I do.';
export const SCENE_WAIT = 'Tu en as ?';
export const SCENE_WAIT_EN = 'You have some?';

/** Break body budget, 24 to 40 words. Counted in the batch. */
export const BREAK_BODY =
  'You had every word you needed and one of them does not exist in your language. Yes I do is a whole answer in English. In French the sentence stops in the middle, and there is nothing to hear.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §15. THE EXPECTED SHAPE
 *
 *  Invariants §5: assert against EXPLICIT constants, never figures derived from
 *  the lesson, because a derived count compares the content to itself and passes
 *  on any rewording. Every one is checked by the batch, the merge and the test.
 * ══════════════════════════════════════════════════════════════════════════ */

export const EXPECTED_AUTHORED = 50;
export const EXPECTED_IMPORTED = 27;
export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 30;

/** Doctrine §B.5: if the paradigm gets more sections than the Owns, the wrong
 *  lesson was built. Counted as SECTIONS BY SUBJECT rather than by act, because
 *  the Owns starts in act 1 and finishes in act 4.
 *
 *  The paradigm here is TWO WORDS and two persons' worth of agreement that does
 *  not happen, so three sections is generous. The Owns takes seven. */
export const OWNS_SECTION_COUNT = 7;
export const PARADIGM_SECTION_COUNT = 3;

/** And the split the brief asks to be reported: the obligatory `en` half against
 *  the `y` half, counted in sections. « y has an English analogue in "there" and
 *  en has none », so en gets the weight. */
export const EN_SECTION_COUNT = 5;
export const Y_SECTION_COUNT = 3;

/** `dicteeMode` switches to WORD tiles above this, and word mode hands every
 *  real word over pre-spelled. A lesson about a SLOT can only be tested in
 *  LETTERS mode. */
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
    wanted: 'A typed question turning on the grave accent in à: « Je vais a Paris. » against « Je vais à Paris. »',
    why: `MEASURED THROUGH THE REAL fold() AND IT CANNOT BE WRITTEN. fold() normalises to NFD and strips every combining mark, so the two are ONE ANSWER and a typed question would accept the mistake and tell the learner they spelled it right. Written as an mcq instead, exactly as ${unitRef('a2.09')} and ${unitRef('a2.24')} did.`,
  },
  {
    wanted: 'A typed question on où against ou, which is the other word a learner reaches for when a place is involved.',
    why: 'THE SAME LIMIT, MEASURED: fold("Où vas-tu ?") === fold("Ou vas-tu ?"). Both of this lesson\'s live diacritics are untestable by typing, which is unusual and is why the exam carries two mcq that would otherwise have been typed. Not written at all, because one accent mcq makes the point and two would spend a slot on the same lesson.',
  },
  {
    wanted: 'An ear question asking whether the en in a sentence is the little word or the pronoun.',
    why: 'IT HAS NO CORRECT ANSWER. They are the same word and the same sound, and the whole distinguisher is what comes after. Marking one right would certify a bug. Enforced by a CLASSIFIER rather than by a homophone list, because a word list compares different strings and these are the same string. §9.',
  },
  {
    wanted: 'A typed question turning on the apostrophe in j\'en against jen.',
    why: 'fold() strips punctuation and all whitespace, so « J\'en ai. », « Jen ai. » and « J en ai. » are one answer. There was no useful question in it anyway; it is recorded because the elision is on every card in this lesson and a later author will think of it.',
  },
  {
    wanted: 'An ear question separating « J\'y pense. » from « Ils y pensent. » beyond the subject.',
    why: `pense and pensent are one sound, so the only audible difference is the subject and the question would be about ${unitRef('a2.01')} rather than about this lesson. HOMOPHONE_FORMS enforces it rather than this paragraph.`,
  },
];
