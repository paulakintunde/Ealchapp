// The a2.03 glossary, and the claim constants the lesson body quotes rather than
// restates.
//
// A CLAIM THAT APPEARS ON MORE THAN ONE SCREEN LIVES HERE. a2.13 §6.2 shipped a
// grid that disagreed with the cards the learner was scored on, and a2.14 §5
// found the same shape in the respellings with the two copies one file apart.
// Every constant below is asserted in the batch, the merge and the test.
//
// THREE TERM CHIPS PER SECTION, MAXIMUM. The renderer shows three and collapses
// the rest; sons.06 ships seven sections that declare more.
//
// NO GRAMMAR JARGON ON A LEARNER SURFACE. A term is a learner surface. The words
// this lesson most wants and may not have are `masculine`, `feminine`,
// `singular`, `plural`, `adjective`, `agreement`, `inflection` and `paradigm` —
// and the whole subject is those words, which is what makes the copy hard. The
// house solution is the one a1.13 and a1.14 already use: `the one for a man`,
// `more than one`, `the word that describes`, `changes shape`.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  A113_REFRAME, A201_REFRAME, ADVERB_UNIT, BEAU_UNIT, EAR_CLAIM, EAR_UNIT,
  FORM_COUNT, IDENTICAL_CLAIM, IDENTICAL_UNIT, INVARIABLE_RULE,
  INVARIABLE_UNIT, NEW_INVARIABLES, PATTERN_ORDER, PLACEMENT_LINE, REFRAME,
  SOUND_COUNT, THE_MOVE, cellId, form,
} from './accord-adjectifs-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

/** The arithmetic of the whole lesson, in one line. Four patterns, and the last
 *  of them has one form where the others have four. */
export const PATTERN_ARITHMETIC =
  `${PATTERN_ORDER.length} patterns. Three of them have ${FORM_COUNT.default} written forms and ${SOUND_COUNT.default} sounds. The fourth has one of each.`;

/** What the masculine ending actually tells you, spelled out. Quoted on the
 *  grid, in the sheet and in the roundup. */
export const ENDING_CLAIM =
  `${form('eux', 'm.sg')} ends in x, ${form('if', 'm.sg')} ends in f, ${form('invariable', 'm.sg')} is a chestnut, and ${form('default', 'm.sg')} is none of those. Four endings, four patterns, and you can see all four without hearing a word.`;

/** The -eux oddity, which is the assertion that stops a future author adding an
 *  s. It names a1.14, which owns the fact for two specific words, and says what
 *  this lesson does with it. */
export const IDENTICAL_ARITHMETIC =
  `${Cap(unitRef(IDENTICAL_UNIT))} told you ${form('eux', 'm.sg')} and mauvais do not change in the plural. It is not about those two words. It is about the letter they end in, and there are twenty-five more of them.`;

/** The default pattern's contrast with the other two, said once. Kept under
 *  thirty words because it is quoted on two core screens and one quiz `why`,
 *  and the core cap is 45 for the whole string. */
export const DEFAULT_CLAIM =
  `${form('default', 'm.sg')} to ${form('default', 'f.sg')} adds a letter and wakes a sound up. ${form('eux', 'm.sg')} and ${form('if', 'm.sg')} swap one letter for another. All three end somewhere you can hear.`;

/** The invariable class as a class, with a1.13 named.
 *
 *  SHORT ON PURPOSE. This one is quoted on four CORE screens and the density
 *  validator caps a core screen at 45 words per string; the first version put
 *  INVARIABLE_RULE inside it and went to 55 on all four at once. The long
 *  version lives in the term and in the sheet, both of which are exempt. */
export const INVARIABLE_CLAIM =
  `${Cap(unitRef(INVARIABLE_UNIT))} put it this way: ${A113_REFRAME} A colour borrowed from a thing keeps the thing’s shape.`;

/** And what act 4 adds to it, which is the part a1.13 could not do. */
export const INVARIABLE_NEW_CLAIM =
  `You met ${form('invariable', 'm.sg')} and orange as two words that behave oddly. They are not two words. ${NEW_INVARIABLES.join(', ')} and every other colour borrowed from a thing do exactly the same, and you have never been shown any of them.`;

/** The a2.01 bookend, quoted by unit id as doctrine §B.7 asks. */
export const EAR_BOOKEND =
  `${Cap(unitRef(EAR_UNIT))} said it about verbs: ${A201_REFRAME} ${EAR_CLAIM}`;

/** The one-line version of the reframe, for the roundup. */
export const CARRY_FORWARD =
  `${REFRAME} ${THE_MOVE}`;

/** What is deliberately not here. Named, once, so the learner knows it is coming
 *  rather than thinking it was forgotten. */
export const NEXT_LESSON_LINE =
  `Three adjectives break every rule on this screen and they are the three you use most. ${Cap(unitRef(BEAU_UNIT))} is next and it is about nothing else. The lesson after that, ${unitRef(ADVERB_UNIT)}, is built on the feminine forms you have just learned to make.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GLOSSARY
 * ═══════════════════════════════════════════════════════════════════════ */

export const ACCORD_ADJECTIFS_TERMS: Record<string, LessonTerm> = {
  fourShapes: {
    term: 'four shapes',
    title: 'One word, four ways to write it',
    body:
      `${PATTERN_ARITHMETIC} A describing word takes a different shape depending on what it is describing: one thing or several, and a man or a woman, a bag or a jacket. You have seen this twice before, on colours and on six common words. What is new is that the shapes are not learned one word at a time. They come in ${PATTERN_ORDER.length} groups, and the last two letters of the word tell you which group you are in.`,
    examples: [
      { itemId: cellId('default', 'm.sg'), note: 'The shape you start from.' },
      { itemId: cellId('default', 'f.sg'), note: 'And the same word, describing a woman.' },
      { itemId: cellId('default', 'f.pl'), note: 'Both changes at once, and they stack in that order.' },
    ],
  },

  theMasculine: {
    term: 'the plain form',
    title: 'The one the other three come out of',
    body:
      `${REFRAME} ${THE_MOVE} This is the whole lesson and it is worth more than the grid, because a grid only holds the words that are on it. Somebody says a word you have never met and you have half a second to describe a woman with it: you do not need to have seen its other shapes, you need to have seen its last two letters. ${ENDING_CLAIM}`,
    examples: [
      { itemId: cellId('eux', 'm.sg'), note: 'Ends in x, so it is in the second group.' },
      { itemId: cellId('if', 'm.sg'), note: 'Ends in f, so it is in the third.' },
      { itemId: cellId('invariable', 'm.sg'), note: 'And this one is a chestnut, so it is in the fourth and it does nothing at all.' },
    ],
  },

  theEuxGroup: {
    // `words ending in -eux` and `words ending in -if` were the first names and
    // they DO NOT FIT SIDE BY SIDE. On s13-bank the two chips share one row and
    // the second was drawn as "words ending in", losing the two characters that
    // name the group; s12-ear declares three chips and would have been worse.
    // Found on a Pixel 6 and invisible to every host gate: the strings are
    // valid, the chips render, and only the width is wrong. Ledger §a2.14-13's
    // class, one field over. `ends in -eux` is also what PATTERN_LABEL already
    // calls this group on the grid, so the shorter name is the consistent one.
    term: 'ends in -eux',
    title: 'The group with a buzz on the end',
    body:
      `${form('eux', 'm.sg')} becomes ${form('eux', 'f.sg')}: the x goes and se arrives, and you can hear it happen. There are twenty-five of these words in this course and every one of them does the same thing, so it is one rule rather than twenty-five. ${IDENTICAL_CLAIM} ${IDENTICAL_ARITHMETIC}`,
    examples: [
      { itemId: cellId('eux', 'm.sg'), note: 'The plain form.' },
      { itemId: cellId('eux', 'f.sg'), note: 'The x has become se, and the ending buzzes.' },
      { itemId: cellId('eux', 'm.pl'), note: 'And this is the same word as the first one. Deliberately.' },
    ],
  },

  theIfGroup: {
    term: 'ends in -if',
    title: 'The group where f becomes v',
    body:
      `${form('if', 'm.sg')} becomes ${form('if', 'f.sg')}. The f turns into a v and nothing else in the word moves, which makes it the easiest of the ${PATTERN_ORDER.length} to spot and the easiest to get wrong in writing, because the two letters sound so alike in English. This group is small in this course and large in French; ${form('if', 'm.sg')} itself did not exist here until this lesson, which is why the exam hands you another one you have never seen and asks for it anyway.`,
    examples: [
      { itemId: cellId('if', 'm.sg'), note: 'Ends in f, and the f is said out loud.' },
      { itemId: cellId('if', 'f.sg'), note: 'The f has become a v. Say both and you will hear it.' },
      { itemId: cellId('if', 'f.pl'), note: 'The v first, then the s. Always that order.' },
    ],
  },

  theOnesThatNeverChange: {
    term: 'the ones that never change',
    title: 'A class, not a list of exceptions',
    body:
      `${INVARIABLE_CLAIM} ${INVARIABLE_RULE} ${INVARIABLE_NEW_CLAIM} Put one beside an ordinary colour on the same noun and the difference is the whole thing: green grows an e and an s, and brown does not grow anything, ever, in any sentence you will ever write.`,
    examples: [
      { itemId: cellId('invariable', 'm.sg'), note: 'The word.' },
      { itemId: cellId('invariable', 'f.pl'), note: 'And the word again, describing several women\'s jackets. Six letters both times.' },
      { itemId: 'fr.a2.adjectifs-essentiels.030', note: 'The control. Same jackets, ordinary colour, both endings present.' },
    ],
  },

  whatYouCanHear: {
    term: 'what you can hear',
    title: 'The half of this that reaches your ear',
    body:
      `${EAR_BOOKEND} That is worth knowing before you sit any listening test in French. Somebody says a sentence and you can tell from the sound whether they meant a man or a woman; you cannot tell whether they meant one or several. The number is carried by the words in front of the noun, and it is carried in writing by an s that has never been pronounced in the history of the language.`,
    examples: [
      { itemId: cellId('default', 'f.sg'), note: 'The d has woken up. This one your ear gets for free.' },
      { itemId: cellId('default', 'm.pl'), note: 'An s on the end, and it sounds exactly like the first row of the grid.' },
      { itemId: cellId('eux', 'f.pl'), note: 'The buzz is audible and the s is not, in the same word.' },
    ],
  },

  whereItGoes: {
    term: 'where it goes',
    title: 'Not this lesson, and it has not changed',
    body:
      `${PLACEMENT_LINE} Everything on these screens is about the SHAPE of the word rather than its place in the sentence, and the two are independent: a word that goes in front of the noun takes exactly the same four shapes as one that goes after it. ${NEXT_LESSON_LINE}`,
    examples: [
      { itemId: cellId('default', 'm.sg'), note: 'After the verb, which is where every example in this lesson sits.' },
      { itemId: 'fr.a2.adjectifs-essentiels.030', note: 'After the noun it describes, which is the ordinary case.' },
      { itemId: 'fr.a2.adjectifs-essentiels.031', note: 'And the same position for one that refuses to change.' },
    ],
  },
};
