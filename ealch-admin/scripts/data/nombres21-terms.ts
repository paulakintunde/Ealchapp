// a1.27.l1 "Les nombres 21-100" — the lesson glossary and its reframe.
//
// Split out for the same reason nombres-terms.ts is: a term is defined ONCE and
// surfaced wherever it is used via a section's `terms` chips, so the learner
// meets the same explanation at every point of use and no card carries the
// definition inline.
//
// ── What these six terms are for ───────────────────────────────────────────
//
// a1.02's terms were about SOUND, because counting to twenty is a sound
// problem. These are about ARITHMETIC and SPELLING, because counting to a
// hundred is not. Above sixty-nine French stops naming numbers and starts
// calculating them out loud, and the two written rules that fall out of that
// (where `et` appears, and the S on quatre-vingts) are the two most common
// written errors in the whole range.
//
// They stay A1 rather than drifting into grammar by answering "what does this
// cost me when I get it wrong" rather than "what category is this". A learner
// does not need the word `vigesimal` to know that ninety-two is four twenties
// and twelve, and being handed the word instead of the behaviour is how a
// numbers lesson turns into a history lesson nobody asked for.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in nine.
 *
 *  ── Why this one, and what it beat ────────────────────────────────────────
 *
 *  The brief offered two candidates. The first, "Above sixty-nine, French does
 *  the arithmetic out loud", is true and is a fact about the language rather
 *  than an instruction to the learner, and it is false of the 21 to 69 block
 *  that opens the lesson. A reframe that is only true of half the material
 *  cannot carry the other half, and the density validator would still have
 *  passed it, which is exactly the failure mode a verbatim count exists to
 *  catch.
 *
 *  The second, "Stop calculating. Learn the shape", is the useful one, and this
 *  is it compressed into one sentence so it can be dropped inside a longer line
 *  without breaking.
 *
 *  It earns its place by being true of the whole range rather than of the hard
 *  end. `quarante-cinq` has no sum in it and is still learned as one shape;
 *  `quatre-vingt-douze` has three operations in it and is learned as one shape
 *  too. The learner's job does not change at seventy. What changes is how
 *  expensive it is to get the job wrong.
 *
 *  It is also testable tomorrow, which is the A1 standard. A learner can take a
 *  French phone number, which is read as five two-digit shapes and never as ten
 *  digits, and find out within one breath whether they are recognising or
 *  computing. */
export const REFRAME = 'Learn the shape, not the sum.';

export const NOMBRES21_TERMS: Record<string, LessonTerm> = {
  arith: {
    term: 'the sum out loud',
    title: 'Where French stops naming numbers and starts adding them',
    body:
      'Up to sixty-nine every ten has its own word. From seventy it does not. Seventy is sixty-ten, eighty is four-twenties, ninety is four-twenties-ten, and the language expects you to hear the total rather than the parts. The cost is not difficulty, it is time: a listener who computes ninety-two has already missed the next thing the speaker said.',
    examples: [
      { itemId: 'fr.sons.nombres.027', note: 'Seventy. Sixty, then ten.' },
      { itemId: 'fr.sons.nombres.029', note: 'Eighty. Four twenties.' },
      { itemId: 'fr.sons.nombres.031', note: 'Ninety. Four twenties and ten.' },
    ],
  },
  etRule: {
    term: 'the et',
    title: 'The one place French writes the word and',
    body:
      'A number ending in one takes the word et, and loses its hyphens with it: vingt et un, trente et un, quarante et un, cinquante et un, soixante et un. Seventy-one takes it too, as soixante et onze, because eleven is standing where one would. Eighty-one and ninety-one do not: quatre-vingt-un, quatre-vingt-onze. That inconsistency is the most common written error in this range.',
    examples: [
      { itemId: 'fr.sons.nombres.020', note: 'Twenty-one, with et and no hyphens.' },
      { itemId: 'fr.sons.nombres.028', note: 'Seventy-one. Eleven is standing where one would.' },
      { itemId: 'fr.sons.nombres.030', note: 'Eighty-one, with no et at all.' },
    ],
  },
  theS: {
    term: 'the S on eighty',
    title: 'A letter that appears and disappears in writing only',
    body:
      'Quatre-vingts takes an S when it stands as exactly four twenties, and loses it the moment another number follows: quatre-vingts euros, but quatre-vingt-un and quatre-vingt-dix. Nothing about the sound changes either way, so this is a rule you will only ever meet on paper: a form, an address, a cheque.',
    examples: [
      { itemId: 'fr.sons.nombres.029', note: 'Eighty on its own, with the S.' },
      { itemId: 'fr.sons.nombres.030', note: 'Eighty-one, where the S has gone.' },
    ],
  },
  teensBack: {
    term: 'the teens, again',
    title: 'Two thirds of the hard range is something you already have',
    body:
      'Seventy-one to seventy-nine are sixty plus onze through dix-neuf. Ninety-one to ninety-nine are quatre-vingt plus the same nine words. Nothing new is invented for either: a learner who knows eleven to nineteen already holds twenty of the thirty numbers above sixty-nine, which turns a wall into a pattern.',
    examples: [
      { itemId: 'fr.sons.nombres.115', note: 'Seventy-two. Sixty, then douze.' },
      { itemId: 'fr.sons.nombres.123', note: 'Ninety-two. Four twenties, then douze.' },
    ],
  },
  chunks: {
    term: 'two digits at a time',
    title: 'Why this range is the one you need for a phone number',
    body:
      'A French phone number is said as five two-digit numbers, not as ten digits. Zéro six, quatre-vingt-douze, soixante-quinze, and so on. Someone who cannot catch quatre-vingt-douze at speed cannot write down a number in France, which makes this range the difference between taking a contact and asking for it in writing.',
    examples: [
      { itemId: 'fr.a1.nombres.236', note: 'A real number, said the way it is really said.' },
      { itemId: 'fr.sons.nombres.123', note: 'Ninety-two, the chunk most people lose.' },
    ],
  },
  regional: {
    term: 'septante, nonante',
    title: 'The simpler forms you will hear outside France',
    body:
      'Belgium and Switzerland use septante for seventy and nonante for ninety, and parts of Switzerland use huitante for eighty. They mean exactly what they look like and they are standard where they are used. You do not need to produce them. You do need to have been told they exist, because meeting one with no warning sounds like a word you misheard.',
    examples: [
      { itemId: 'fr.sons.nombres.027', note: 'The France-standard form of seventy.' },
      { itemId: 'fr.sons.nombres.031', note: 'And of ninety.' },
    ],
  },
};
