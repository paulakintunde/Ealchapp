// a1.06.l1 "Le verbe être" — the lesson glossary and its reframe.
//
// Split out for the same reason pronoms-sujets-terms.ts is: a term is defined
// ONCE and surfaced at every point of use via a section's `terms` chips, so a
// learner meets the same explanation wherever the word turns up and no card
// carries the definition inline.
//
// Three chips per section, maximum. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }


/** The line this lesson hangs on.
 *
 *  Exported so the batch can count it against an explicit constant and the test
 *  can compare seed against source rather than restating the string.
 *
 *  Why this one. The candidates were all true and only one of them tells the
 *  learner what to DO:
 *
 *    "The verb of introductions"        a topic label, not an instruction
 *    "If there is a little word, c'est" the best rule in the lesson, and a rule
 *                                       about ONE act rather than about the verb
 *    "No pattern. Six forms. Every conversation."
 *
 *  The third is chosen because it is the only one that changes the learner's
 *  behaviour on the first screen. Every other verb they will ever meet has a
 *  stem and endings, and the correct strategy there is to find the pattern.
 *  Here there is no stem: suis, es, est, sommes, êtes and sont share almost no
 *  letters, and a learner quietly waiting for the rule to arrive in mission 12
 *  is doing worse than one who was told in mission 2 that there is no rule.
 *
 *  It is also checkable, which a reframe has to be: the learner can look at the
 *  six forms and see for themselves that nothing derives from anything. And it
 *  pays: "every conversation" is the compensation for "no pattern", and it is
 *  literally true, because être is the most used verb in the language.
 *
 *  It carries forward, too. a1.05 hands over "Nine pronouns. Six verb forms.";
 *  this picks up the same six and says what they cost and what they buy. a1.07
 *  can then say the same thing about avoir without contradicting anything: the
 *  two most irregular verbs in French are irregular BECAUSE they are the most
 *  used. */
export const REFRAME = 'No pattern. Six forms. Every conversation.';

export const ETRE_TERMS: Record<string, LessonTerm> = {
  etre: {
    term: 'être',
    title: 'The verb with no stem',
    body:
      'To be, and the first verb worth memorising outright. Every regular verb hands you a stem and a set of endings, so parler gives parl- plus six endings and with it come hundreds of other verbs. être gives you nothing to build on: the six forms are six separate words. Learn them as six words and the cost is paid once.',
    examples: [
      { itemId: 'fr.a1.metiers.249', note: 'suis, the form you will say most.' },
      { itemId: 'fr.a1.metiers.252', note: 'sommes, which shares no letters with it at all.' },
    ],
  },
  sixForms: {
    term: 'the six forms',
    title: 'suis, es, est, sommes, êtes, sont',
    body:
      `Six forms for nine pronouns, because il, elle and on share one and ils and elles share another. That collapse is ${unitRef('a1.05')}\'s and it holds for every verb in the language. What is particular to être is that the six cannot be derived from each other, so this is the one table you memorise rather than work out.`,
    examples: [
      { itemId: 'fr.a1.metiers.251', note: 'est, the form three of the nine pronouns take.' },
      { itemId: 'fr.a1.metiers.254', note: 'sont, the form the other two share.' },
    ],
  },
  determinerTest: {
    term: 'the little word',
    title: "How to choose between c'est and il est",
    body:
      'Look at what comes after the verb. If there is a little word in front of the noun, a un, une, le, la, mon or ma, the sentence takes c\'est. If the noun stands bare, or if what follows is an adjective, it takes il est or elle est. A name is already as specified as a word can be, so it counts as having one: c\'est Marc.',
    examples: [
      { itemId: 'fr.a1.metiers.274', note: 'un in front of the noun, so c\'est.' },
      { itemId: 'fr.a1.metiers.275', note: 'The same doctor with nothing in front, so il est.' },
    ],
  },
  noArticle: {
    term: 'the missing article',
    title: 'What a job takes after être',
    body:
      `Nothing. Je suis professeur, elle est avocate, il est boulanger. English requires a word there and French forbids it, which makes this the one grammatical error a beginner produces out loud in the first minute of every introduction. You met this in ${unitRef('a1.11')} as a rule about professions; it is really a rule about what follows être.`,
    examples: [
      { itemId: 'fr.a1.metiers.260', note: 'No un before architecte.' },
      { itemId: 'fr.a1.metiers.244', note: `${Cap(unitRef('a1.11'))}'s sentence, and the one c'est is the exception to.` },
    ],
  },
  originShapes: {
    term: 'the two origins',
    title: 'français against de Lyon',
    body:
      'Where you are from has two shapes and they behave differently. A nationality is an adjective and agrees with you: français for a man, française for a woman. de plus a place is a preposition and never moves at all, whoever is speaking. Both answer the same question and only one of them can be got wrong.',
    examples: [
      { itemId: 'fr.a1.metiers.265', note: 'The adjective, agreeing, and audibly so.' },
      { itemId: 'fr.a1.metiers.268', note: 'The preposition, which is the same for everyone.' },
    ],
  },
  vousLiaison: {
    term: 'vous êtes',
    title: 'The join you cannot hear yourself miss',
    body:
      'The one form in the six where the pronoun and the verb bind out loud. The silent s of vous wakes up in front of the vowel and the two words are said as one: voo-ZET, with no gap. Saying them separately is understood and marks you immediately, and it is the kind of error a learner cannot hear in their own mouth.',
    examples: [
      { itemId: 'fr.a1.metiers.253', note: 'The paradigm row, with the join in it.' },
      { itemId: 'fr.a1.cafe.160', note: `${Cap(unitRef('a1.05'))}\'s question, which you have already heard in a restaurant.` },
    ],
  },
  silentAgreement: {
    term: 'silent agreement',
    title: 'An e you write and never say',
    body:
      `An adjective after être agrees with whoever it describes, and often that agreement makes no sound. fatigué and fatiguée are one word out loud and two on the page, exactly like enchanté and enchantée in ${unitRef('a1.01')}. Sometimes it is audible instead: the e in grande wakes the d, and the one in française wakes the s.`,
    examples: [
      { itemId: 'fr.a1.metiers.272', note: 'Written agreement, no sound.' },
      { itemId: 'fr.a1.metiers.273', note: 'The same rule, and here you can hear it.' },
    ],
  },
};
