// a2.12.l1 "Irréguliers 2 : faire, dire, lire" — the lesson glossary, its
// reframe, and the constants it inherits from a2.01 and a2.02.
//
// Split out for the same reason verbes-er-terms.ts and aller-venir-terms.ts are:
// a term is defined ONCE and surfaced at every point of use via a section's
// `terms` chips, so a learner meets the same explanation wherever the word turns
// up and no card carries the definition inline.
//
// Three chips per section, maximum. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { NOUS_ON } from './verbes-er-terms.ts';
import { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT } from './aller-venir-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  ALLER_UNIT, AVOIR_UNIT, ETRE_UNIT, EXPRESSION_TARGET, MODAL_UNIT, ONT_CLUB,
  REACH, REACH_ORDER, SHOPPING_UNIT, TES_CLUB, THE_CONTROL, THE_THREE, THE_VERB,
  WEATHER_UNIT,
} from './faire-dire-lire-corpus.ts';

/** a2.01's nous/on statement, re-exported rather than retyped.
 *
 *  The ledger binds all twenty A2 lessons to one wording, stated by a2.01 in
 *  `s06-nous-on`. This lesson has its own reason to quote it: `on` takes the
 *  `il` form, so the spoken we says `on fait` and never `on faisons` — and
 *  `on fait` is the same three letters as the weather's `il fait`, which is the
 *  one place the two halves of this lesson meet. */
export { NOUS_ON };

/** a2.02's pattern name, imported rather than reinvented.
 *
 *  Doctrine §B.7 names four instances of one form doing two jobs, distinguished
 *  only by what follows it, and tells later lessons to point back at the unit
 *  that named the shape. a2.12 is not one of the four, and it holds another
 *  instance anyway:
 *
 *    il fait + how it is    the weather, and nobody is doing anything
 *    il fait + a thing      a person, making a bed
 *
 *  Same two words, two completely different sentences, and only the next word
 *  separates them. The card quotes a2.02's name verbatim rather than inventing a
 *  fifth phrase for the same idea. */
export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };

/** The line this lesson hangs on.
 *
 *  Exported so the batch can count it against an explicit constant and the test
 *  can compare seed against source rather than restating the string.
 *
 *  ── Why this one, and what was rejected ──────────────────────────────────
 *
 *  The doctrine's test for an A2 reframe is whether the learner can apply it in
 *  the half-second between the subject and the verb. Three candidates:
 *
 *    "faire means to do or to make."
 *        The brief's own rejection and it is right. It is the translation the
 *        learner already has, and it is the reason they cannot produce a single
 *        one of the thirty: a learner running it reaches for a French verb
 *        meaning cook, meaning queue, meaning pack, and stops when there is not
 *        one. It tells them what the word means and nothing about when to use
 *        it.
 *
 *    "French does with faire what English does with a different verb each time."
 *        The brief's own candidate, and REJECTED on two counts. It is thirteen
 *        words, over the doctrine's ceiling of twelve, and more importantly it
 *        is a description rather than an instruction: it is true, a learner can
 *        agree with it, and it does not tell them to do anything. A reframe runs
 *        while the sentence is already moving.
 *
 *    "Where English changes the verb, French changes what comes after it."
 *        Sharp, and REJECTED because it is a2.02's pattern name in different
 *        clothes. That unit shipped `what comes next decides` and three later
 *        lessons are told to quote it; this lesson quotes it too, for a
 *        different job. Two near-identical phrases meaning two different things
 *        on one trail is worse than either of them alone.
 *
 *    "French keeps faire where English reaches for a different verb every time."
 *        What survived. Twelve words, which is the ceiling. It runs in the
 *        direction a speaker moves: the learner is at the point of changing
 *        verb, and it says do not. It names the verb they keep and it makes no
 *        claim at all about which noun follows, which is right, because that is
 *        the part they have to learn one by one. */
export const REFRAME = 'French keeps faire where English reaches for a different verb every time.';

/** What the Owns is worth, said to the learner rather than only meant.
 *
 *  Carried verbatim across the opening act, the Owns act and the roundup, and
 *  asserted by the test. Deliberately NOT the reframe: it is a statement about
 *  what the learner has been handed rather than something they run
 *  mid-sentence, and the doctrine is explicit that those are different things.
 *
 *  The number is DERIVED, so an author who drops an expression breaks this
 *  sentence rather than leaving it quietly false. */
export const REACH_CLAIM = `One verb, and ${EXPRESSION_TARGET} everyday things you could not say before.`;

/** The claim about lire, carried verbatim so the third verb is never arbitrary.
 *
 *  The brief asks whether lire earned its place or is carried by the unit title.
 *  This is the answer, and CONTROL_BREAKS in the corpus is the arithmetic behind
 *  it: lire is the measuring stick that shows the other two are the exception. */
export const CONTROL_CLAIM = `${THE_CONTROL} keeps the endings you already have, and that is the whole reason it is here.`;

/** The two closed clubs, as sentences, with their counts derived. A club that
 *  quietly gains or loses a member breaks the prose rather than only the data. */
export const TES_CLAIM = `${TES_CLUB.length} verbs in the language end vous on -tes. Every other verb you will ever meet ends it on -ez.`;
export const ONT_CLAIM = `${ONT_CLUB.length} verbs end ils on -ont, and you already had ${ONT_CLUB.length - 1} of them.`;

/** The boundary sentence about the nouns, which is the general principle the
 *  brief asks to be stated. Carried on the card that hands the neighbours their
 *  subjects back. */
export const NOT_THE_NOUNS = `The word after ${THE_VERB} belongs to somebody else's lesson. What you are learning is the verb in front.`;

export const FAIRE_DIRE_LIRE_TERMS: Record<string, LessonTerm> = {
  theReach: {
    term: 'the reach of faire',
    title: 'One verb, a dozen English ones',
    body:
      `${REFRAME} Do the shopping, make the bed, go swimming, take a trip, be sunny, cook, queue, pretend. Eight English verbs there and one French one, and the work that English gives to the verb is done in French by the noun after it. That is not a list of odd phrases: it is how the language divides up doing, and once you have seen it the thirty stop being thirty separate things to learn.`,
    examples: [
      { itemId: 'fr.a2.courses.018', note: 'English does. French does not.' },
      { itemId: 'fr.a1.famille.136', note: 'And English has a whole verb here, cook.' },
    ],
  },
  theTes: {
    term: 'the two that end in -tes',
    title: 'vous faites, vous dites',
    body:
      `${TES_CLAIM} You have had one of them since ${unitRef(ETRE_UNIT)}: vous êtes. These are the other two, and they are the single most-corrected forms at this level, because every regular pattern you own says the vous form ends in -ez and these two do not. Say faisez to a French person and you will be understood and you will also be heard.`,
    examples: [
      { itemId: 'fr.a2.verbes.305', note: 'Not faisez.' },
      { itemId: 'fr.a2.verbes.311', note: 'Not disez, for the same reason.' },
    ],
  },
  theOnt: {
    term: 'the ones that end in -ont',
    title: 'sont, ont, vont, font',
    body:
      `${ONT_CLAIM} être at ${unitRef(ETRE_UNIT)}, avoir at ${unitRef(AVOIR_UNIT)}, aller at ${unitRef(ALLER_UNIT)}, and now faire. That is the whole list: no other verb in the language ends its ils form that way, so once you have these four you never have to wonder again. It is a closed set and this is the lesson that closes it.`,
    examples: [
      { itemId: 'fr.a2.verbes.306', note: 'The fourth and last one.' },
      { itemId: 'fr.a2.verbes.303', note: 'And the singular it belongs to, which sounds nothing like it.' },
    ],
  },
  theControl: {
    term: 'the one that behaves',
    title: 'lire, beside the other two',
    body:
      `${CONTROL_CLAIM} vous lisez ends in -ez like every verb you have built since ${unitRef('a2.01')}, and ils lisent ends in -ent like every plural you have ever written. Put it beside faites and font and you can see what those two are doing wrong. Without it, irregular reads as a warning about the whole language; with it, it is a short list you can finish.`,
    examples: [
      { itemId: 'fr.a2.verbes.317', note: 'The ordinary ending, in the cell where the other two break.' },
      { itemId: 'fr.a2.verbes.318', note: 'And the ordinary plural.' },
    ],
  },
  nobodyDoingIt: {
    term: 'the il that is nobody',
    title: 'il fait beau',
    body:
      `${Cap(unitRef(WEATHER_UNIT))} gave you this and gave it to you whole, as a phrase with nothing inside it. It is this verb. il fait is the same form as in Il fait le lit, and the difference is that here the il stands for no person at all: nobody is doing the weather. French needs a subject in every sentence, so it puts one there that means nothing. You now know the verb, which means you can hear what that sentence is made of.`,
    examples: [
      { itemId: 'fr.a1.meteo.027', note: 'The one you already had.' },
      { itemId: 'fr.a2.verbes.303', note: 'And the same two words with a person behind them.' },
    ],
  },
  whatFollows: {
    // a2.02's name, quoted rather than reinvented. See the export above.
    term: WHAT_FOLLOWS,
    title: 'Il fait beau. Il fait le lit.',
    body:
      `Two words, twice, and two sentences that have nothing to do with each other. Nothing in il fait tells you which one you are in: a word for how it is outside means the weather, a word for a thing means somebody is doing it, and there is no third option. So you do not read il fait and then work it out. You wait for the next word. You met this shape at ${unitRef(WHAT_FOLLOWS_UNIT)} on a different pair of words, and it works the same way here.`,
    examples: [
      { itemId: 'fr.a1.meteo.029', note: 'How it is outside. Nobody is doing it.' },
      { itemId: 'fr.a2.verbes.303', note: 'A thing. Somebody is.' },
    ],
  },
  notTheNouns: {
    term: 'the words after faire',
    title: 'Which half is this lesson',
    body:
      `${NOT_THE_NOUNS} The weather words belong to ${unitRef(WEATHER_UNIT)}, and the shopping words to ${unitRef(SHOPPING_UNIT)}, and you do not need either of them to use what is here: take each expression as one piece, the way you take a single word, and the noun inside it will make sense later when somebody teaches it to you properly.`,
    examples: [
      { itemId: 'fr.a1.routines.031', note: 'One piece. You are not learning the word for dishes.' },
      { itemId: 'fr.a1.sports-et-loisirs.074', note: 'And one piece here too.' },
    ],
  },
  nousOn: {
    term: 'nous and on',
    title: 'The we you will actually hear',
    body:
      `${NOUS_ON} Both are correct and both mean we. on takes the same form as il, which on this verb means on fait and never on faisons. So the spoken we uses the same three letters as the weather does, and the only thing telling them apart is the word that comes next.`,
    examples: [
      { itemId: 'fr.a2.verbes.304', note: 'The written we, with its own ending.' },
      { itemId: 'fr.a2.verbes.303', note: 'And the form on borrows.' },
    ],
  },
  saySomething: {
    term: 'what dire takes',
    title: 'dire, and one thing at a time',
    body:
      `${THE_THREE[1]} takes a thing: bonjour, the truth, no. Il dit bonjour. Elle dit non. That is all it does in this lesson, and it is most of what it does in a day. There is a second way of using it, for reporting what somebody else said, and it needs machinery you do not have yet; you will not be shown it here and you will not need it. Compare ${unitRef(MODAL_UNIT)}, which is the next lesson and is about three other verbs that will not come apart.`,
    examples: [
      { itemId: 'fr.a2.verbes.309', note: 'A thing, straight after the verb.' },
      { itemId: 'fr.a2.verbes.312', note: 'And the plural, which is ordinary in shape.' },
    ],
  },
};

/** The six group headings, exported so the tapTable, the sheet and the test read
 *  one source. Derived from REACH rather than retyped. */
export const REACH_ROWS = REACH_ORDER.map((k) => ({ key: k, ...REACH[k] }));
