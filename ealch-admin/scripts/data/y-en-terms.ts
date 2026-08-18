// a2.25.l1 « Y et EN » — the lesson glossary.
//
// A term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline.
//
// THREE CHIPS PER SECTION. The renderer shows three and collapses the rest
// (invariants §2), so a section naming four has authored one into nothing.
//
// ── THE VOCABULARY DECISION THESE TERMS ENFORCE ────────────────────────────
//
// Corpus §8. `pronoun`, `subject` and `object` are HOUSE VOCABULARY — a2.06
// measured them at 233, 173 and 49 uses across the shipped seed — and are used
// freely. The technical compounds are refused on EVERY surface without
// exception, and this unit is the first in the block that can do that: its
// English name is « The Pronouns Y and EN » and contains none of them, so unlike
// a2.06 and a2.24 there is no `overview.titleEn` to exempt and the guard asserts
// ZERO exempt strings rather than one.
//
// Everywhere else the plain phrase does the work: « the little word inside ».

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  A, A129_REFRAME, A204_REFRAME, A218_EN_CLAIM, A_FRAMING, A_FRAMING_MINE,
  DE_FRAMING, DIRECT_UNIT, EN_POSITION_RULE, FROZEN_RULE, FROZEN_UNIT,
  INDIRECT_UNIT, MUST_RULE, MUST_RULE_Y, NEGATION_EXTENSION, NEGATION_RULE,
  ORDER_DEFERRED, ORDER_RULE, PARTITIVE_UNIT, PLACE_UNIT, PLAIN_PHRASE,
  PLAIN_TARGET, POSITION_RULE, REFRAME, TIME_UNIT, WHAT_FOLLOWS,
  WHAT_FOLLOWS_UNIT,
} from './y-en-corpus.ts';

export const Y_EN_TERMS: Record<string, LessonTerm> = {
  /* THE OWNS, AS A TERM. Named for the thing the learner can look at rather
   * than for the category, which is the thing they cannot see. */
  inside: {
    term: PLAIN_PHRASE,
    title: 'What these two words are made of',
    body:
      `${REFRAME} ${A_FRAMING_MINE} ${DE_FRAMING} Every pronoun you have met so far stood in for a noun and left everything else alone. These two swallow the little word in front of the noun as well, which is why nothing about them looks like the pronouns you already have. It is also why the mistake everybody makes is saying the little word again: you can hear that something is missing, and the thing that is missing is already there.`,
    examples: [
      { itemId: A(287), note: 'The place is named and the little word is in front of it, where you can see it.' },
      { itemId: A(288), note: 'And now there is no Paris and no à either. Both went into one letter.' },
    ],
  },

  /* THE PARADIGM, WHICH IS TWO WORDS AND IS NOT STRETCHED. */
  twoWords: {
    term: 'y and en',
    title: 'Two words, and which one is decided before you speak',
    body:
      `${A_FRAMING_MINE} ${DE_FRAMING} That is the whole of the choice, and it is made by the little word rather than by the meaning: if the sentence had à in it you want y, and if it had de, du, de la or des in it you want en. Neither word changes for anything. Not for the subject, not for the verb, not for the tense, and not for how many things you are talking about.`,
    examples: [
      { itemId: A(288), note: 'à went in, so y came out.' },
      { itemId: A(292), note: 'de went in, so en came out. Same verb as the lesson before this one, and a different little word in front of it.' },
    ],
  },

  /* a2.06's POSITION, QUOTED AND TAUGHT NOWHERE, FOR THE THIRD LESSON. */
  sameSlot: {
    term: 'the same place',
    title: `The one thing you do not have to learn, and ${unitRef(DIRECT_UNIT)} taught it`,
    body:
      `« ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it is true of these two words without a word changed. Je le vois. Je lui parle. J'y vais. J'en ai. Four sentences, three lessons, one position. That is worth saying out loud rather than leaving you to notice, because a learner who thinks each new pair of small words has its own placement rule ends up with three rules where there is one. There is one, it was learned two lessons ago, and this lesson spends it.`,
    examples: [
      { itemId: A(288), note: 'Subject, word, verb, exactly as it was for le and for lui.' },
      { itemId: A(326), note: 'And in front of BOTH words when the verb arrives as two, which is also not new.' },
    ],
  },

  /* THE HALF THAT IS GENUINELY HARD. */
  mustSayIt: {
    term: 'the word English leaves out',
    title: 'Why the sentence stops without it',
    body:
      `${MUST_RULE} English answers do you have any with two words and neither of them stands for the sugar. French cannot do that: the verb needs something after it and en is the something. ${MUST_RULE_Y} The same is true on the other side, and it catches people less often only because y sounds a little like there. Neither word is decoration and neither is ever optional.`,
    examples: [
      { itemId: A(296), note: 'Three words in English and none of them is en, and French will not accept the two-word version.' },
      { itemId: A(310), note: 'And the same thing on the other word. « Oui, je vais. » is not a sentence either.' },
    ],
  },

  /* THE LARGEST TRAP IN THE LEVEL. */
  threeEns: {
    term: 'the three ens',
    title: 'One word, three jobs, three lessons',
    body:
      `${EN_POSITION_RULE} ${Cap(unitRef(PLACE_UNIT))} taught the one in front of a country and ${unitRef(TIME_UNIT)} taught the one in front of a length of time, and this lesson teaches neither of them again. « ${A204_REFRAME} » is ${unitRef(PLACE_UNIT, 'a2')}'s line and « ${A218_EN_CLAIM} » is ${unitRef(TIME_UNIT, 'a2')}'s. What is new here is only the third one, and the only thing that separates it from the other two is where it sits. « ${WHAT_FOLLOWS} » is ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s name for this shape and you have met it six times before.`,
    examples: [
      { itemId: A(311), note: 'A verb straight after it, so it is the pronoun.' },
      { itemId: A(312), note: 'A country straight after it, so it is the little word, and it is not this lesson.' },
    ],
  },

  /* THE QUANTITY HALF, LEANING ON a1.29. */
  theQuantity: {
    term: PLAIN_TARGET,
    title: 'How much, without saying what of',
    body:
      `« ${A129_REFRAME} » is ${unitRef(PARTITIVE_UNIT, 'a2')}'s line and you have had du, de la and des since then. En takes all three of them away, and it takes the noun with them. What stays is the number or the amount: j'en ai trois, j'en ai beaucoup, j'en veux un peu. English has nothing like this. I have three says nothing at all about what three of, and a French speaker hearing it would still be waiting.`,
    examples: [
      { itemId: A(300), note: 'The number stayed and des enfants went. Nothing in the sentence says children any more.' },
      { itemId: A(301), note: 'beaucoup de, and the de went inside en along with the noun.' },
    ],
  },

  /* THE PHRASE THAT DOES NOT COME APART. */
  frozen: {
    term: 'il y a',
    title: 'The y you have been reading since the beginning',
    body:
      `${FROZEN_RULE} The middle word is the y on these screens, which is a good thing to know and a bad thing to act on. ${Cap(unitRef(FROZEN_UNIT))} taught the phrase in both its jobs and neither of them is re-taught here. What matters for this lesson is only that you can see your own word inside it, and that taking the phrase to pieces produces real French that means something else.`,
    examples: [
      { itemId: A(313), note: 'Three words that arrived together, with your y in the middle of them.' },
      { itemId: A(314), note: 'And the one place they take a passenger: y first, en second, and that order does not move.' },
    ],
  },

  /* NEGATION. a2.06's sentence, quoted and not extended. */
  theWrap: {
    term: 'the wrap',
    title: 'What ne and pas go round, and it has not changed',
    body:
      `« ${NEGATION_RULE} » is the line you have carried since the near future, and there is one verb in these sentences so the question of which verb never arises. ${NEGATION_EXTENSION} That sentence is ${unitRef(DIRECT_UNIT, 'a2')}'s, word for word, and ${unitRef(INDIRECT_UNIT)} quoted it unchanged one lesson ago. It holds here for the same reason it held there: the small word belongs to the verb, so it goes where the verb goes. Ne outside both, pas after both.`,
    examples: [
      { itemId: A(316), note: 'Ne outside, then the pronoun and the verb together, then pas.' },
      { itemId: A(327), note: 'And with a two-word verb: ne, pronoun, first word, pas, second word.' },
    ],
  },

  /* THE ORDER, AND THE QUESTION THIS LESSON DOES NOT ANSWER. */
  theOrder: {
    term: 'y before en',
    title: 'When both of them turn up',
    body:
      `${ORDER_RULE} These are the only two small words this lesson gives you, so this is the only order it can produce, and it is worth having because il y en a is one of the commonest answers in the language. ${ORDER_DEFERRED} You have three sets of these small words now and there are more ways of stacking them than this; that question is somebody else's and it is not answered on any screen here.`,
    examples: [
      { itemId: A(314), note: 'Both of them, in the one order they take.' },
      { itemId: A(315), note: 'And a number after them, which is where the answer usually goes.' },
    ],
  },

  /* THE SPLIT WITH a2.24, WHICH IS THE CLEANEST SENTENCE IN THE LESSON. */
  personOrThing: {
    term: 'a person or a thing',
    title: `What ${unitRef(INDIRECT_UNIT)} left for this lesson`,
    body:
      `« ${A_FRAMING} » is ${unitRef(INDIRECT_UNIT, 'a2')}'s line, from last lesson, and it is only half of what à does. ${A_FRAMING_MINE} Same little word, same disappearance, and the only thing that decides which pronoun comes out is whether what sat behind à was a person or not. Je parle à Marie becomes je lui parle. Je vais à Paris becomes j'y vais. Nothing else in either sentence changed.`,
    examples: [
      { itemId: A(287), note: 'A place behind à, so it will be y.' },
      { itemId: A(331), note: 'And the same verb last lesson used, with a letter behind à instead of a person.' },
    ],
  },
};
