// The a2.17 glossary, and the claim constants the lesson body quotes rather
// than restates.
//
// A CLAIM THAT APPEARS ON MORE THAN ONE SCREEN LIVES HERE. a2.13 §6.2 shipped a
// grid that disagreed with the cards the learner was scored on, and a2.14 §5
// found the same shape in the respellings with the two copies one file apart.
// Every constant below is asserted in the batch, the merge and the test.
//
// THREE TERM CHIPS PER SECTION, MAXIMUM, and the ROW is 37 characters wide
// (ledger §a2.03-3, measured off a Pixel 6). The term names here are short for
// that reason and not for taste.
//
// NO GRAMMAR JARGON ON A LEARNER SURFACE. A term is a learner surface. The words
// this lesson most wants and may not have are `adverb`, `derivation`,
// `suffixation`, `adverbial`, `manner adverb` and `stem` — and `adverb` is the
// one that hurts, because it is the unit's own English title. Invariants §8 says
// `grammarIntroduced` may use the precise words and a card may not, so the title
// keeps it and every card says "the word for how somebody does something".
//
// The line for what IS allowed was measured rather than felt, the way a2.03 §7
// asks: `feminine`, `plural`, `masculine`, `noun`, `verb` and `vowel` are house
// vocabulary for this arc — a1.16 uses `noun` 115 times and a1.13 `feminine` 71
// — and this lesson uses them.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import {
  ADJ_ORDER, AGREEMENT_CLAIM, AGREEMENT_UNIT, ALREADY_E, ALREADY_E_CLAIM,
  AMMENT, AMMENT_CLAIM, AMMENT_RULE_CLAIM, AUDIBLE_CLAIM, BON_BIEN_CLAIM,
  CHAIN_CLAIM, COMPARATIVE_UNIT, CONSONANT_CLAIM, DEFERRAL_LINE, IRREGULARS,
  IRREGULAR_CLAIM, IRREGULAR_FROM, NEGATION_LINE, PASSE_UNIT, PLACEMENT_CLAIM,
  PLACEMENT_EVIDENCE, PREVIOUS_UNIT, REFRAME, SOUND_CLAIM, THE_MOVE,
  UNSEEN_CLAIM, addedConsonant, step,
} from './adverbes-corpus.ts';
import { chainId } from './adverbes-imported.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

/** The arithmetic of the whole lesson, in one line, derived off the CHAIN so it
 *  cannot disagree with the cells the learner is scored on. */
export const CHAIN_ARITHMETIC =
  `${SOUND_CLAIM} ${ADJ_ORDER.map((a) => `${step(a, 'masc')} becomes ${step(a, 'fem')} becomes ${step(a, 'adverb')}`).join(', ')}.`;

/** The Owns, spelled out, and it is the sentence the whole build turns on. The
 *  consonants are DERIVED from the respellings rather than listed. */
export const SOUND_ARITHMETIC =
  `${CONSONANT_CLAIM} ${ADJ_ORDER.map((a) => `${step(a, 'masc')} has no ${addedConsonant(a).toLowerCase()} and ${step(a, 'fem')} does`).join(', ')}.`;

/** The a2.03 payoff, and it is the reason this lesson is at seq 12 rather than
 *  anywhere else. */
export const PAYOFF_CLAIM =
  `${AGREEMENT_CLAIM} The middle word of every row here is a card you already own.`;

/** Placement, with the measurement rather than an assertion. */
export const PLACEMENT_ARITHMETIC =
  `${PLACEMENT_CLAIM} Out of ${PLACEMENT_EVIDENCE.of.toLocaleString('en-GB')} sentences in this course, ${PLACEMENT_EVIDENCE.verbThenAdverb} put it after the verb and ${PLACEMENT_EVIDENCE.adverbThenVerb} put it in front.`;

/** The three that are not built, and what they replace. */
export const IRREGULAR_ARITHMETIC =
  `${IRREGULAR_CLAIM} ${IRREGULARS.map((w) => (IRREGULAR_FROM[w] ? `${IRREGULAR_FROM[w]} gives ${w}` : `${w} comes from nothing at all`)).join(', ')}.`;

/** Two spellings, one sound, and the half the brief leaves out. */
export const AMMENT_ARITHMETIC =
  `${AMMENT_CLAIM} ${AMMENT.map((x) => `${x.adj} ends ${x.adjEnding} and gives ${x.adverb}`).join(', ')}. ${AMMENT_RULE_CLAIM}`;

/** The already-ends-in-e case, which is the rule working rather than an
 *  exception to it. */
export const ALREADY_E_ARITHMETIC =
  `${ALREADY_E_CLAIM} ${ALREADY_E.map((x) => `${x.adj} gives ${x.adverb}`).join(' and ')}.`;

/** The one-line version of the reframe, for the roundup. */
export const CARRY_FORWARD = `${REFRAME} ${THE_MOVE}`;

/** What is deliberately not here. Named, once, so the learner knows it is coming
 *  rather than thinking it was forgotten. Two lessons are named and both of them
 *  own something this lesson refuses. */
export const NEXT_LESSON_LINE =
  `${DEFERRAL_LINE} And when you want to say somebody does it BETTER than somebody else, that is ${COMPARATIVE_UNIT} and it is a long way off.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GLOSSARY
 * ═══════════════════════════════════════════════════════════════════════ */

export const ADVERBES_TERMS: Record<string, LessonTerm> = {
  theChain: {
    // 9 characters. Pairs with `you can hear it` (15) at 25 and with `already an
    // e` (12) at 22, both inside the measured 37-character row budget.
    term: 'the chain',
    title: 'Three steps, and the middle one is the one people skip',
    body:
      `${CHAIN_ARITHMETIC} ${REFRAME} A learner who goes straight from the plain form to the ending gets it right for the words that already end in an e and wrong for every other word in the language, and ${AGREEMENT_UNIT} already gave them the step they are skipping.`,
    examples: [
      { itemId: chainId('lent', 'masc'), note: 'Step one, and the t on the end of it makes no sound.' },
      { itemId: chainId('lent', 'fem'), note: 'Step two. Now it does.' },
      { itemId: chainId('lent', 'adverb'), note: 'And step three, which keeps it.' },
    ],
  },

  youCanHearIt: {
    term: 'you can hear it',
    title: 'The consonant that comes back',
    body:
      `${SOUND_ARITHMETIC} That is what makes this rule worth running rather than memorising: build the word off the wrong form and you have not made a spelling mistake, you have made a sound that is missing something, and you will hear it half a second after you say it. ${AUDIBLE_CLAIM}`,
    examples: [
      { itemId: chainId('doux', 'masc'), note: 'No s at the end of this one, whatever the page says.' },
      { itemId: chainId('doux', 'fem'), note: 'And here it is. Say both out loud, one after the other.' },
      { itemId: chainId('doux', 'adverb'), note: 'The s is now in the middle of the word and it is the same s.' },
    ],
  },

  afterTheVerb: {
    term: 'after the verb',
    title: 'Where it goes, and English disagrees',
    body:
      `${PLACEMENT_ARITHMETIC} There is no version of this you have to weigh up. The word goes after the verb, every time, and the only thing that makes it hard is that your first language will offer you the other order first. ${NEGATION_LINE}`,
    examples: [
      { itemId: 'fr.a2.adverbes-essentiels.014', note: 'Verb, then the word for how often.' },
      { itemId: 'fr.sons.nasales.001', note: 'Verb, then the same word. Somebody else wrote this sentence years ago.' },
      { itemId: 'fr.a2.adverbes-essentiels.009', note: 'And a long one, in exactly the same place.' },
    ],
  },

  theThreeOdd: {
    term: 'bien, mal, vite',
    title: 'The three the rule does not reach',
    body:
      `${IRREGULAR_ARITHMETIC} ${BON_BIEN_CLAIM} There is no way to work any of these out and no reason to try. They are three words and you already know all three.`,
    examples: [
      { itemId: 'fr.a2.adverbes-essentiels.015', note: 'Not bonnement. There is no such word.' },
      { itemId: 'fr.a2.adverbes-essentiels.016', note: 'And not mauvaisement either.' },
      { itemId: 'fr.a2.adverbes-essentiels.017', note: 'This one has no describing word behind it at all.' },
    ],
  },

  twoSpellings: {
    term: 'two spellings',
    title: 'One sound and two ways to write it',
    body:
      `${AMMENT_ARITHMETIC} So this is the one pair in the lesson where listening will not help you at all, and it is the reason two lines of the dictée are single words rather than sentences.`,
    examples: [
      { itemId: 'fr.a2.adverbes-essentiels.019', note: 'Ends in -ent.' },
      { itemId: 'fr.a2.adverbes-essentiels.020', note: 'Ends in -ant, and out loud that is the same ending.' },
      { itemId: 'fr.sons.adverbes-essentiels.018', note: 'And the word it gives, spelled with an e and said with an a.' },
    ],
  },

  alreadyE: {
    term: 'already an e',
    title: 'When step two changes nothing',
    body:
      `${ALREADY_E_ARITHMETIC} This is not a second rule and it is worth being clear about that: the rule ran, it looked for the woman form, and the woman form was the word it started with. Treat it as an exception and you have two things to remember instead of one.`,
    examples: [
      { itemId: 'fr.a2.adverbes-essentiels.012', note: 'Rapide, and there was nothing to change.' },
      { itemId: 'fr.a2.adverbes-essentiels.013', note: 'Facile, same thing, same subject and same verb.' },
      { itemId: chainId('lent', 'fem'), note: 'And this one, where there was.' },
    ],
  },

  notFromHer: {
    term: 'not from her',
    title: 'The two that do not use the woman form',
    body:
      `${AMMENT_RULE_CLAIM} The ending on the describing word comes off and a different one goes on, so there is no point looking for the woman form here. It is the only place in this lesson where the rule you have just been given is not the answer, and it is worth knowing that it has a boundary.`,
    examples: [
      { itemId: 'fr.a2.adverbes-essentiels.003', note: 'The describing word.' },
      { itemId: 'fr.sons.adverbes-essentiels.018', note: 'And the word it gives. Nothing in between.' },
      { itemId: 'fr.sons.adverbes-essentiels.045', note: 'The same story with an a on the page.' },
    ],
  },

  notYet: {
    term: 'not yet',
    title: 'What moves in a past tense, and where it goes',
    body:
      `${NEXT_LESSON_LINE} Everything on the other screens is about a sentence happening now, which is every sentence you can currently make. When ${PASSE_UNIT} gives you the past, the short words move and the long ones do not, and you will be told so then. ${PREVIOUS_UNIT} is the lesson you have just come from and its first two columns are the first two of this one.`,
    examples: [
      { itemId: 'fr.a2.adverbes-essentiels.014', note: 'Happening now, and the word sits after the verb.' },
      { itemId: 'fr.a2.adverbes-essentiels.015', note: 'The same, with one of the three that are not built.' },
      { itemId: 'fr.a2.adverbes-essentiels.009', note: 'And a long one, which does not move even when the tense does.' },
    ],
  },

  unseen: {
    term: 'a word you own',
    title: 'The rule works on words this lesson never showed you',
    body:
      `${UNSEEN_CLAIM} That is the whole point of learning a rule rather than a list. You have met dozens of describing words in this course and you can now build the matching word for how something is done out of every single one of them, including the ones nobody has taught you here. ${THE_MOVE}`,
    examples: [
      { itemId: chainId('serieux', 'masc'), note: 'You met this one in the last lesson but one.' },
      { itemId: chainId('serieux', 'fem'), note: 'And this is the card you were given then.' },
      { itemId: chainId('serieux', 'adverb'), note: 'Nobody had to teach you this. You built it.' },
    ],
  },
};
