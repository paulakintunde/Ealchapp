// a1.28.l1 "Les grands nombres" — the lesson glossary and its reframe.
//
// Split out for the same reason nombres21-terms.ts is: a term is defined ONCE
// and surfaced wherever it is used through a section's `terms` chips, so the
// learner meets the same explanation at every point of use and no card carries
// the definition inline. The renderer shows three chips and collapses the rest,
// so no section here names more than three.
//
// ── What these six terms are for ───────────────────────────────────────────
//
// a1.02's terms were about SOUND and a1.27's were about ARITHMETIC. These are
// about GRAMMAR, because that is what is actually hard here. `trois cent
// trente` is three words a learner already has; what they do not have is any
// way to predict that cent takes an S in one position and not the next, that
// mille takes one nowhere, and that million takes one everywhere and drags a
// `de` along with it.
//
// They stay A1 rather than drifting into grammar-for-its-own-sake by answering
// "what does this cost me when I get it wrong" rather than "what category is
// this". The two category words that DO appear (adjective, noun) earn their
// place because they are the reframe: they are the only thing in the lesson
// that predicts a behaviour the learner has not met yet.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight.
 *
 *  ── Why this one, and what it beat ────────────────────────────────────────
 *
 *  The three multiplier words follow three different rules and nothing about
 *  their meaning predicts which:
 *
 *    cent      takes an S when multiplied AND final, loses it when a number
 *              follows, and never has one when it is not multiplied
 *    mille     never takes an S, in any position, ever
 *    million   takes an S like any plural noun, AND takes de before what it
 *              counts
 *
 *  Taught as three facts they are three facts, and a learner remembers two of
 *  them. This sentence turns them into one idea and an exception: an adjective
 *  attaches straight to what it counts and may or may not agree; a noun needs
 *  `de` to reach it and pluralises like every other noun in the language. It
 *  predicts the `de`, which is the rule with no audible signal and the one
 *  most often dropped, and it predicts that cent and mille need nothing after
 *  them. What it does not predict is why mille is invariable where cent agrees,
 *  and the lesson says so rather than pretending otherwise: that is the one
 *  thing here worth memorising outright.
 *
 *  The alternative the brief offered, "A big number is a small number with a
 *  multiplier on it", is true and gentler and predicts nothing at all, which
 *  would have left the three rules exactly as unrelated as they started.
 *
 *  It is testable in a breath, which is the A1 standard: put `de` after cent
 *  and it is wrong, take it out after million and it is wrong, and a learner
 *  can check both on the next price they read. */
export const REFRAME = 'cent and mille are adjectives. million is a noun.';

export const NOMBRES_LARGE_TERMS: Record<string, LessonTerm> = {
  multiplier: {
    term: 'a multiplier',
    title: 'The three words that decide the size of everything in front of them',
    body:
      'cent, mille and million are the only words in French that scale a number. Everything else you have learned counts up to ninety-nine and stops. These three take that ninety-nine and make it a hundred times, a thousand times or a million times larger, and the number in front of them says how many of the multiplier there are. Two of them behave one way and the third behaves another, which is the entire difficulty of this lesson.',
    examples: [
      { itemId: 'fr.sons.nombres.034', note: 'Two hundreds.' },
      { itemId: 'fr.sons.nombres.036', note: 'Two thousands.' },
      { itemId: 'fr.a2.nombres.006', note: 'Two millions, and this one is a noun.' },
    ],
  },
  centS: {
    term: 'the S on cents',
    title: 'A letter that appears only when cent is both multiplied and last',
    body:
      'cent takes an S in exactly one situation: a number stands in front of it AND nothing stands after it. deux cents, trois cents, cinq cents. Put any number behind it and the S is gone, as in deux cent cinquante and trois cent trente. Leave the front empty and there was never one to lose, as in cent mille. Nothing about the sound changes in any of the three, so this is a rule you will only ever meet on paper.',
    examples: [
      { itemId: 'fr.sons.nombres.034', note: 'Multiplied and final, so the S is there.' },
      { itemId: 'fr.a1.nombres.238', note: 'Multiplied, but cinquante follows, so the S has gone.' },
      { itemId: 'fr.sons.nombres.083', note: 'Not multiplied at all, so there was never one.' },
    ],
  },
  invariable: {
    term: 'invariable',
    title: 'mille, which has never taken an S in the history of the language',
    body:
      'mille is spelled the same in every position and every quantity. deux mille, dix mille, cent mille, and a year like mille huit cent quarante. There is no situation, none at all, in which it takes an S. Learners over-generalise the S they just learned on cents and write it anyway, which is the single most common written error in this range, and it is the one thing here that has to be memorised rather than worked out.',
    examples: [
      { itemId: 'fr.sons.nombres.036', note: 'Two thousand, and no S.' },
      { itemId: 'fr.sons.nombres.082', note: 'Ten thousand, and still no S.' },
      { itemId: 'fr.sons.nombres.083', note: 'A hundred thousand, and neither word carries one.' },
    ],
  },
  nounNumber: {
    term: 'the de after million',
    title: 'Why million needs a word to reach what it counts, and cent does not',
    body:
      'million and milliard are nouns, not number-adjectives, so they behave like any other French noun of quantity. They take an S in the plural and they need de before the thing they count: huit millions de visiteurs, deux milliards de bouteilles. In front of a vowel that de becomes d’. cent and mille attach straight to their noun with nothing in between, which is why deux cents habitants has no de in it and huit millions de visiteurs must.',
    examples: [
      { itemId: 'fr.a1.nombres.239', note: 'The de, elided to d’ before a vowel.' },
      { itemId: 'fr.a1.nombres.114', note: 'Eight millions, and then de before what they are.' },
      { itemId: 'fr.a1.nombres.241', note: 'milliard does exactly the same thing.' },
    ],
  },
  bareCents: {
    term: 'the bare cents',
    title: 'How a French price says the part after the comma',
    body:
      'French names the currency and then says the cents as a plain number with nothing in front of them. vingt-deux euros cinquante is 22,50. There is no word for centimes in ordinary speech and no et joining the halves, so the whole price arrives as one run at one speed. Somebody waiting for "euros and fifty cents" will still be waiting when the sentence is over.',
    examples: [
      { itemId: 'fr.a1.nombres.242', note: '124,80. Six words, one price, no pause anywhere in it.' },
    ],
  },
  decimalComma: {
    term: 'the decimal comma',
    title: 'The punctuation mark that means the opposite of what you expect',
    body:
      'French writes the decimal point as a COMMA and separates thousands with a space or a narrow gap. So 1 234,56 is one thousand two hundred thirty-four point five six, and 1,25 is one and a quarter rather than a thousand two hundred fifty. An English speaker reading a shelf label straight off gets the size wrong by a factor of a thousand, in the direction that makes cheap things look expensive. This is reading knowledge and there is nothing to practise: see it once, and check the comma before you check the digits.',
    examples: [
      { itemId: 'fr.a1.nombres.242', note: 'Written 124,80 and said with no comma in it at all.' },
    ],
  },
};
