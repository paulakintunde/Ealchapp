// The a2.04 glossary, and the claim constants the lesson body quotes rather
// than restates.
//
// A CLAIM THAT APPEARS ON MORE THAN ONE SCREEN LIVES HERE. a2.13 §6.2 shipped a
// grid that disagreed with the cards the learner was scored on, and a2.14 §5
// found the same shape in the respellings with the two copies one file apart.
// Every constant below is asserted in the batch, the merge and the test.
//
// THREE TERM CHIPS PER SECTION, MAXIMUM, and the ROW is 37 characters wide
// (ledger §a2.03-3, measured off a Pixel 6). The names here are short for that
// reason and not for taste; TERM_ROWS at the foot holds the trios the sections
// actually use and the test measures each of them.
//
// NO GRAMMAR JARGON ON A LEARNER SURFACE, and a2.17 §8 measured where the line
// actually is: the part-of-speech names are house vocabulary and banning one is
// a build inventing a rule. What the house does is prefer the plain phrase, so
// this lesson says `word` and `place word` where it could say `preposition`,
// and the RATIO is guarded rather than the word. `article` is not jargon here:
// a1.03, a1.04, a1.11 and a1.29 all put it on cards and a1.21 puts it on
// fourteen, and this lesson cannot say what it is about without it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import {
  ARTICLE_TABLE, CHEZ_CLAIM, CHEZ_EVIDENCE, CHEZ_FOLLOWERS, CONTRACTION_CLAIM,
  CONTRACTION_UNIT, COUNTRY_CLAIM, COUNTRY_UNIT, DOCTOR_UNIT, KIND_EXAMPLE,
  KIND_LABEL, KIND_ORDER, KIND_OWNER, KIND_WORD, PARTITIVE_UNIT, REFRAME,
  SHOP_CLAIM, SORT_CLAIM, THE_MOVE, TIME_DEFERRAL, TIME_UNIT, TRANSPORT_UNIT,
  UNSEEN_CLAIM,
} from './prepositions-lieu-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

/** The four kinds spelled out, DERIVED from the grid the learner is scored on
 *  so the prose and the cells cannot disagree. a2.13 §6.2. */
export const SORT_ARITHMETIC =
  `${SORT_CLAIM} ${KIND_ORDER.map((k) => `${KIND_LABEL[k]} takes ${KIND_WORD[k]}, as in ${KIND_EXAMPLE[k]}`).join(', ')}.`;

/** The Owns, in one line, derived off ARTICLE_TABLE for the same reason. */
export const ARTICLE_ARITHMETIC =
  `${REFRAME} In front of a le word: ${ARTICLE_TABLE.map((r) => `${r.word} gives ${r.withLe}`).join(', ')}.`;

/** Which of the four rows the learner already owns, and from where. Two of four,
 *  named by unit id, which is the difference between a synthesis and a repeat. */
export const OWED_CLAIM =
  `Two of these four are not new. ${CONTRACTION_UNIT} gave you what à and de do to an article and ${COUNTRY_UNIT} gave you what en does to a country's. What nobody has told you is that they are the same question asked four times.`;

/** The payoff, and the reason this lesson sits at seq 13. */
export const PAYOFF_CLAIM =
  `« au Japon » is « à » plus « le Japon ». ${CONTRACTION_UNIT} taught the fold and ${COUNTRY_UNIT} taught the country, eleven lessons apart, and neither of them said they were the same operation.`;

/** The chez rule with its measurement behind it. */
export const CHEZ_ARITHMETIC =
  `${CHEZ_CLAIM} Out of ${CHEZ_EVIDENCE.rowsHoldingChez.toLocaleString('en-GB')} sentences in this course that use the word, ${CHEZ_EVIDENCE.beforeAPlace} put it in front of a building. Not one.`;

/** What the corpus actually puts after it, top five, for the term body. */
export const CHEZ_FOLLOWERS_LINE =
  CHEZ_FOLLOWERS.slice(0, 5).map(([w, n]) => `${w} ${n} times`).join(', ');

/** The half of chez a learner who has done a1.21 gets wrong for a good reason. */
export const NO_FOLD_CLAIM =
  `À plus le is au and de plus le is du, and ${CONTRACTION_UNIT} gave you both. Chez does none of that: chez le, chez la, chez les, two words every time.`;

/** The one-line version for the roundup. */
export const CARRY_FORWARD = `${REFRAME} ${THE_MOVE}`;

/** What is deliberately not here. Three units named, and each of them owns
 *  something this lesson refuses. */
export const NEXT_LESSON_LINE =
  `${TIME_DEFERRAL} And when you want to ask the way to somewhere rather than say you are going there, that is ${TRANSPORT_UNIT}.`;

/** The unit that USES this rule rather than teaching it, named so the learner
 *  sees the payoff coming. */
export const DOCTOR_LINE =
  `${DOCTOR_UNIT} is called « Chez le médecin » and it is fourteen lessons ahead of you. Its whole title is this lesson's third card.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GLOSSARY
 * ═══════════════════════════════════════════════════════════════════════ */

export const PREPOSITIONS_LIEU_TERMS: Record<string, LessonTerm> = {
  chez: {
    // 4 characters, and it is the word itself.
    term: 'chez',
    title: 'A person, and never a place',
    body:
      `${CHEZ_ARITHMETIC} What the sentences put behind it instead: ${CHEZ_FOLLOWERS_LINE}. Every one of those is a person or a word standing in for one, and that is the whole of the rule. There is no English word for it, which is why it is the one of the four you will have to think about.`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.133', note: 'A job, with its article kept.' },
      { itemId: 'fr.a2.prepositions-essentielles.136', note: 'A name, which never had an article to keep.' },
      { itemId: 'fr.a1.pronoms-essentiels.075', note: 'And a person you are talking to. Somebody wrote this card for a pronoun lesson.' },
    ],
  },

  theArticle: {
    term: 'the article',
    title: 'Three things a word can do to it',
    body:
      `${ARTICLE_ARITHMETIC} That is the whole lesson in one sentence and there is nothing else to it. À and de fold, en throws the article away, and chez leaves it alone. ${OWED_CLAIM}`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.132', note: 'À and le, folded into one word.' },
      { itemId: 'fr.a2.prepositions-essentielles.131', note: 'La France had an article and now it does not.' },
      { itemId: 'fr.a2.prepositions-essentielles.129', note: 'And le, still standing, because chez did nothing to it.' },
    ],
  },

  fourKinds: {
    term: 'four kinds',
    title: 'Look at the place before you look for the word',
    body:
      `${SORT_ARITHMETIC} ${THE_MOVE} A learner who asks what they are DOING gets no help from the answer, because going, arriving, staying and living all take the same word. The place decides it, and the place decides it before the verb has finished.`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.130', note: 'A city, so nothing to fold with.' },
      { itemId: 'fr.a2.prepositions-essentielles.145', note: 'A country with a le, so the le is folded in.' },
      { itemId: 'fr.a2.prepositions-essentielles.146', note: 'And a building with a la, which does not fold.' },
    ],
  },

  manOrShop: {
    term: 'man or shop',
    title: 'English has one phrase for both of these',
    body:
      `${SHOP_CLAIM} Say either in English and nobody notices. Say the wrong one in French and you have said something nobody says, and the reason it is hard is that you were never asked to choose before. When the shop has no person behind it, as a bank or a station does, only one of the two is available and the choice disappears.`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.135', note: 'The man.' },
      { itemId: 'fr.a2.prepositions-essentielles.137', note: 'The shop.' },
      { itemId: 'fr.a2.prepositions-essentielles.140', note: 'And the same doorway.' },
    ],
  },

  aPlusLe: {
    term: 'à plus le',
    title: 'The fold you already have, with a country behind it',
    body:
      `${PAYOFF_CLAIM} ${CONTRACTION_CLAIM} ${PARTITIVE_UNIT} owns the other du, the one that means an amount of something, and its test still separates them: put some in front of the English and see whether it survives.`,
    examples: [
      { itemId: 'fr.a1.routines.064', note: 'À and le marché. Somebody wrote this card for a routine lesson.' },
      { itemId: 'fr.a2.prepositions-essentielles.145', note: 'À and le Japon, which is the same thing with a country in it.' },
      { itemId: 'fr.a1.routines.063', note: "And à l', which does not fold at all." },
    ],
  },

  enDropsIt: {
    term: 'en drops it',
    title: 'The one that leaves nothing behind',
    body:
      `${COUNTRY_CLAIM} En is the only one of the four that gets rid of the article rather than doing something to it, which is why « en la France » is not a mistake anybody has to be corrected out of: there is no version of it. ${COUNTRY_UNIT} is where the gender rule lives and this lesson does not repeat it.`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.131', note: 'The article on la France is simply gone.' },
      { itemId: 'fr.sons.nasales.029', note: 'The same thing in somebody else\'s sentence, written for a pronunciation lesson.' },
      { itemId: 'fr.a1.pays-et-nationalites.001', note: 'And the word with its article, which is how a1.22 asked you to store it.' },
    ],
  },

  noArticle: {
    term: 'no article',
    title: 'Two places that never had one to begin with',
    body:
      'A city has no article and a person\'s name has no article, so there is nothing for the word in front to do. À Paris, chez Marie. That is why those two rows of the grid look the simplest and it is also why they are the two learners overthink: there is no rule to apply, and applying one anyway produces « à la Paris » and « chez la Marie », which are the two errors nobody warns you about.',
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.130', note: 'A city.' },
      { itemId: 'fr.a2.prepositions-essentielles.136', note: 'A name.' },
      { itemId: 'fr.sons.elision.062', note: 'And a second city, so it is a rule rather than a fact about Paris.' },
    ],
  },

  notYet: {
    term: 'not yet',
    title: 'The other en, and the other dans',
    body:
      `${NEXT_LESSON_LINE} Everything on the other screens is about where somebody is or where they are going. ${TIME_UNIT} is the very next lesson and it takes both of those words back and does something else with them, and that is worth knowing now so you do not think you have met them twice. ${DOCTOR_LINE}`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.131', note: 'En with a place, which is this lesson.' },
      { itemId: 'fr.a2.prepositions-essentielles.129', note: 'And chez with a person, which a2.28 is named after.' },
      { itemId: 'fr.a2.prepositions-essentielles.148', note: 'The afternoon in her question is a time and no word in this lesson touches it.' },
    ],
  },
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CHIP ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

/** THREE CHIPS PER SECTION AND A 37-CHARACTER ROW. Every trio a section uses is
 *  listed here and the test measures the joined width, because the renderer
 *  shows three and collapses the rest and the row is what actually breaks. */
export const TERM_ROW_MAX = 37;

export const TERM_ROWS: readonly (readonly string[])[] = [
  ['chez', 'theArticle', 'fourKinds'],
  ['chez', 'manOrShop', 'noArticle'],
  ['theArticle', 'aPlusLe', 'enDropsIt'],
  ['fourKinds', 'noArticle', 'notYet'],
  ['chez', 'manOrShop', 'aPlusLe'],
];

export const rowWidth = (names: readonly string[]): number =>
  names.map((n) => PREPOSITIONS_LIEU_TERMS[n]!.term.length).reduce((a, b) => a + b, 0)
  + (names.length - 1) * 3;

export { REFRAME };
