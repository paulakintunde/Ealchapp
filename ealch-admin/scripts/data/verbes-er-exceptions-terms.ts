// a2.09.l1 "Les verbes en -ER : exceptions" — the lesson glossary and its
// reframe.
//
// Split out for the same reason verbes-er-terms.ts is: a term is defined ONCE and
// surfaced at every point of use via a section's `terms` chips, so a learner
// meets the same explanation wherever the word turns up and no card carries the
// definition inline.
//
// Three chips per section, maximum. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { NOUS_ON } from './verbes-er-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** a2.01's nous/on statement, re-exported rather than retyped.
 *
 *  The ledger binds all twenty A2 lessons to one wording, stated by a2.01 in
 *  `s06-nous-on`. This lesson has a real reason to quote it — the -ger and -cer
 *  change lives in the `nous` cell, which is the cell spoken French rarely uses —
 *  and quoting it means IMPORTING THE CONSTANT, not restating it. A second
 *  wording of the same fact is how a band of lessons comes to read as a band of
 *  products. */
export { NOUS_ON };

/** The line this lesson hangs on.
 *
 *  Exported so the batch can count it against an explicit constant and the test
 *  can compare seed against source rather than restating the string.
 *
 *  ── Why this one, and what was rejected ──────────────────────────────────
 *
 *  The doctrine's test for an A2 reframe is whether the learner can apply it in
 *  the half-second between the subject and the verb. Four candidates:
 *
 *    "Some -er verbs are irregular."
 *        Rejected, and worth naming as FALSE rather than merely weak. Not one
 *        verb in this lesson is irregular. Every single change here is the
 *        regular system doing what it must to keep a sound where it was, and a
 *        learner who leaves believing otherwise has been given permission to stop
 *        looking for the reason. The lesson says so outright in s03-notirregular.
 *
 *    "Four patterns: -ger, -cer, -eler/-eter, é_er."
 *        Rejected because it is a table of contents. It tells the learner what to
 *        memorise and nothing about what to do at the moment of writing, which is
 *        the only moment that matters. It is also the shape of the lesson this
 *        brief exists to prevent.
 *
 *    "Keep the sound, change the letter."
 *        The closest miss. Short enough, and it does name an action. Rejected
 *        because it reads as permission to move letters at will, and because the
 *        agent is wrong: the learner is not keeping the sound, the language is.
 *        What the learner does is stop being surprised.
 *
 *    "The spelling changes so the sound does not."
 *        The brief's own candidate, unchanged. It survives because it is a
 *        statement of cause that the learner can run forwards: seeing an o
 *        arriving after a g, or an ending going silent, is enough to predict what
 *        the page will need. It is true of all four patterns rather than three of
 *        them, and it is checkable the first time the learner reads one aloud. */
export const REFRAME = 'The spelling changes so the sound does not.';

/** The claim underneath the reframe, and the thing that makes this lesson one
 *  lesson rather than four lists.
 *
 *  Carried verbatim across the grid, the payoff card and the roundup, and
 *  asserted by the test. It is deliberately NOT the reframe: it is a fact about
 *  the system rather than something a learner runs mid-sentence, and the doctrine
 *  is explicit that those are different things. */
export const TWO_MECHANISMS = 'Four patterns, two reasons.';

/** The back-reference this lesson owes a2.01, by unit id.
 *
 *  The second half of this lesson rests entirely on a fact a2.01 taught last
 *  lesson: -e, -es and -ent are silent and -ons and -ez are not. Naming the unit
 *  is not a citation, it is the teaching — a learner at seq 2 of 32 who sees the
 *  pieces connect stops treating each lesson as a fresh list.
 *
 *  Exported so the test can assert its presence and an edit that cuts it goes
 *  red. */
export const A201_BACKREF_UNIT = 'a2.01';
/** BY LABEL. This is interpolated straight into card bodies, and a learner has
 *  never seen `a2.01`. The `_UNIT` constant keeps the id for the guards. */
export const A201_BACKREF = unitRef(A201_BACKREF_UNIT, 'a2');

export const VERBES_ER_EXC_TERMS: Record<string, LessonTerm> = {
  softC: {
    term: 'soft and hard',
    title: 'What c and g do in front of a vowel',
    body:
      'c and g each have two sounds, and the vowel after them decides which. In front of e and i they are soft: commence is said with an s, mange with the sound in the middle of measure. In front of a, o and u they go hard: commencons would be said with a k, mangons with the g of gare. Nothing in this lesson changes that rule. What changes is the spelling, so that the rule keeps producing the sound the verb already had.',
    examples: [
      { itemId: 'fr.a2.verbes.143', note: 'A plain c, soft, because the ending starts with e.' },
      { itemId: 'fr.a2.verbes.144', note: 'The same c with a tail, still soft, in front of an o.' },
    ],
  },
  endingWentSilent: {
    term: 'when the ending goes quiet',
    title: 'The stem becomes the last thing you hear',
    body:
      `${Cap(unitRef('a2.01'))} taught that four of the six endings make no sound: -e, -es and -ent. When one of those is on the end, the last sound in the word is the stem, and a French stem in that position takes an open vowel rather than a closed one. That is why je préfère and elle achète move and nous préférons and nous achetons do not. The change is not about the verb. It is about which ending happens to be on it.`,
    examples: [
      { itemId: 'fr.a2.verbes.147', note: 'Silent ending, so fère is the last sound and the vowel opens.' },
      { itemId: 'fr.a2.verbes.148', note: 'Audible ending, so nothing moves.' },
    ],
  },
  doubleOrAccent: {
    term: 'double it or accent it',
    title: 'Two spellings of one sound',
    body:
      'appeler gives j appelle and acheter gives j achète. Both are said with the same open è, and the two verbs end the same way, so nothing in the infinitive tells you which spelling you are going to need. This is the one thing in the lesson that has to be learnt verb by verb rather than worked out, and there are not many of them: appeler, rappeler and jeter double, acheter and geler take the accent.',
    examples: [
      { itemId: 'fr.a2.verbes.153', note: 'Two l, and the è is written by the doubling.' },
      { itemId: 'fr.a2.verbes.155', note: 'Same shape of infinitive, and the è is written as an accent.' },
    ],
  },
  nousCell: {
    term: 'the nous cell',
    title: 'One cell in six, and mostly in writing',
    body:
      `The -ger and -cer change happens in the nous form and in no other. That is one cell out of six, and it is the cell a conversation rarely reaches: ${NOUS_ON} on takes the same form as il, so it never triggers the change at all. Which means this is a spelling you meet on a page far more often than in a room, and it is worth knowing exactly because nothing in a conversation will ever teach it to you.`,
    examples: [
      { itemId: 'fr.a2.verbes.142', note: 'The written form, with the change on it.' },
      { itemId: 'fr.a2.verbes.165', note: 'The spoken one, taking the il form, so the cedilla never arrives.' },
    ],
  },
  stem: {
    term: 'the part that stays',
    title: 'What is left when -er comes off',
    body:
      `manger gives mang-. commencer gives commenc-. appeler gives appel-. ${Cap(unitRef('a2.01'))} taught that the stem does not move, and for the thirty verbs it taught that was exactly true. For the seventeen here it is nearly true: the endings are the same six, the method is the same, and one letter in the stem answers to what the ending is doing. Nothing about ${unitRef('a2.01')} has been taken back.`,
    examples: [
      { itemId: 'fr.a2.verbes.141', note: 'mang- with the je ending, untouched.' },
      { itemId: 'fr.a2.verbes.142', note: 'The same stem with an e added, and only because of the o after it.' },
    ],
  },
};
