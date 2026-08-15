// a2.20.l1 « Participes passés irréguliers » — the lesson glossary, and the
// four constants it inherits from a2.02, a2.05, a2.12, a2.13, a2.14 and a2.15.
//
// Split out for the same reason every lesson in this band splits it: a term is
// defined ONCE and surfaced at every point of use through a section's `terms`
// chips, so a learner meets the same explanation wherever the word turns up and
// no card carries the definition inline.
//
// THREE CHIPS PER SECTION, MAXIMUM. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.
//
// AND THE ROW IS THIRTY-SEVEN CHARACTERS WIDE. a2.03 §3 measured the term-chip
// row on a Pixel 6: three chips fit if the three `term` strings plus their
// separators come to 37 or fewer. TERM_ROWS below is the declared grouping and
// every layer walks it. The widest trio here is 33.
//
// NO CHIP LABEL IS A GRAMMAR WORD. `participle` and `auxiliary` are on this
// band's jargon list; the plain phrases this lesson uses instead are « the past
// form » and « the first word ». a2.17 §8 measured that the house prefers the
// plain phrase rather than banning the technical one, and this lesson guards the
// RATIO, which is what lets `overview.titleEn` stay the unit's own English name.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import {
  A205_REFRAME, A215_CREDIT, ALSO_A_WORD_CLAIM, CIRCUMFLEX, ETRE_DEFERRAL,
  ETRE_UNIT, EU, FAMILY_UNIT, GROUP_CLAIM, ODD_CLAIM, PASSE_UNIT,
  PRONOUN_UNIT, REFLEXIVE_UNIT, SCHOOL_UNIT,
} from './participes-corpus.ts';

export { A205_REFRAME };

/** The line this lesson hangs on. Exported so the batch can count it against an
 *  explicit constant and the test can compare seed against source rather than
 *  restating the string. */
export { REFRAME } from './participes-corpus.ts';

/** What a learner already owns, named by unit, so this lesson reads as one new
 *  thing standing on five they have rather than as a list to be memorised. */
export const ALREADY_YOURS =
  `${PASSE_UNIT} gave you the whole shape one lesson ago: a form of avoir, then the second word, and the small ones in the gap. Nothing about that changes here and none of it is taught again. What changes is the second word, for thirty-three verbs, and twenty-eight of the thirty-three fall into four groups by their ending.`;

/** The measured margin, as one sentence, so the evidence reaches a screen rather
 *  than living only in a header. Every figure in it is re-measured by the
 *  manifest generator on every regeneration. */
export const EVIDENCE_LINE =
  'These are not rare. A hundred and seventy sentences in this app already put « pris » behind a first word, and two hundred and sixty-nine put « été ».';

export const PARTICIPES_TERMS: Record<string, LessonTerm> = {
  theGroup: {
    term: 'the group',
    title: 'Five groups, and four of them have an ending',
    body:
      `${GROUP_CLAIM} The four are -is, -it, -u and -ert, and the fifth is the five that belong to nothing. A group is worth having because it is smaller than the list and because it takes new members: once you know that ouvrir goes to ouvert you know offrir, couvrir and souffrir as well, and nobody had to tell you.`,
    examples: [
      { itemId: 'fr.a2.verbes.591', note: 'The head of the -is group, and the one the regular rule gets most wrong.' },
      { itemId: 'fr.a2.verbes.613', note: 'The head of the -ert group, on a verb that ends in -ir and refuses -i.' },
    ],
  },

  pastForm: {
    term: 'past form',
    title: 'The second word, when you cannot build it',
    body:
      `${PASSE_UNIT} showed you how to build the second word out of the group the verb is in: -er to -é, -ir to -i, -re to -u. That is true of almost every verb in the language and false of the thirty-three in this lesson. For these, the second word is not built. It is a word in its own right, and the only thing you can do with it is know it.`,
    // The notes here do NOT print the form the rule invents. A term chip is
    // surfaced at every point of use, so a non-word in one is a non-word a
    // learner meets on nine screens; the invented forms live in the eleven
    // sections where the error is the content and nowhere else.
    examples: [
      { itemId: 'fr.a2.verbes.617', note: 'Faire ends in -re, so the rule reaches for -u. The form is fait.' },
      { itemId: 'fr.a2.verbes.611', note: 'Courir ends in -ir, so the rule reaches for -i. The form is couru.' },
    ],
  },

  theMachine: {
    term: 'the machine',
    title: 'The rule that produces a word that does not exist',
    body:
      `${A205_REFRAME} That is ${PASSE_UNIT}'s line and it still holds: the shape has not changed. What has changed is that for these verbs the second word cannot be worked out from the first. Run the regular rule on prendre and it gives you « prendu », which is not a word; run it on ouvrir and it gives you « ouvri », which is not one either. The rule is not being applied carelessly. It is being applied correctly to verbs it does not cover.`,
    // Both notes name the form the rule gives AND say that it is not a word, in
    // the same string. A term chip is surfaced on every section that declares
    // it, so an unmarked non-word here is one a learner meets on nine screens.
    examples: [
      { itemId: 'fr.a2.verbes.591', note: 'What the rule would have given here is prendu, which is not a word.' },
      { itemId: 'fr.a2.verbes.613', note: 'And here, ouvri, which is not one either. Both are what a careful learner produces.' },
    ],
  },

  theFront: {
    term: 'the front',
    title: 'Cover it, and the rest is free',
    body: A215_CREDIT,
    examples: [
      { itemId: 'fr.a2.verbes.593', note: 'appris. Cover the ap and pris is underneath.' },
      { itemId: 'fr.a2.verbes.595', note: 'remis. Cover the re and mis is underneath, on the naming form a2.15 wrote itself.' },
    ],
  },

  twoLetters: {
    term: 'two letters',
    title: 'Eu, and the sound it is not',
    body: `${EU.why} ${EU.claim}`,
    examples: [
      { itemId: 'fr.a2.verbes.619', note: 'Two letters, one sound, and the sound is a pure French u.' },
      { itemId: 'fr.a2.verbes.622', note: 'The same two letters again, so the ear has something to compare.' },
    ],
  },

  littleRoof: {
    term: 'little roof',
    title: 'Dû, and the only accent here that changes a word',
    body: `${CIRCUMFLEX.why} ${CIRCUMFLEX.untestable}`,
    examples: [
      { itemId: 'fr.a2.verbes.607', note: 'With the roof, and it is the past form of devoir.' },
      { itemId: 'fr.a2.verbes.623', note: 'Without it, and it is the word for "some". One sound, two words.' },
    ],
  },

  oneSound: {
    term: 'one sound',
    title: 'What the ear cannot separate',
    body:
      `Dû and du are one sound. So are « il dit » and « j'ai dit », and « il fait » and « j'ai fait ». And so is every one of these forms against the version of itself that agrees, which is why the change ${ETRE_UNIT} is about to teach you will be invisible when you hear it. The ear is useful in this lesson for the shape of a short second word and for nothing else.`,
    examples: [
      { itemId: 'fr.a2.verbes.607', note: 'The one with the roof.' },
      { itemId: 'fr.a2.verbes.623', note: 'And the one without, in a sentence where nothing else is the same.' },
    ],
  },

  alsoAWord: {
    term: 'also a word',
    title: 'Five of them you may already know',
    body:
      `${ALSO_A_WORD_CLAIM} Ouvert is on shop doors, couvert is on the weather forecast, écrit is on a form, cru is on a menu and mort is an ordinary adjective. Every one of those is the past form of a verb in this lesson, and if you have met the word you already have half of the sentence.`,
    examples: [
      { itemId: 'fr.a2.courses.070', note: 'A shop that is open, and the past form of ouvrir.' },
      { itemId: 'fr.a1.meteo.062', note: 'A covered sky, and the past form of couvrir.' },
    ],
  },

  firstWord: {
    term: 'first word',
    title: 'Three of them do not use avoir',
    body:
      `${ETRE_DEFERRAL} There is nothing to decide here and nothing to learn about it: venu, né and mort have the forms they have, and this lesson shows them the way they actually appear so that you recognise them. ${ODD_CLAIM} You will need all of this again at ${SCHOOL_UNIT}, where the whole conversation is about what you studied and how it went.`,
    examples: [
      { itemId: 'fr.a2.verbes.620', note: 'An ordinary -u form with a first word that is not avoir.' },
      { itemId: 'fr.a2.verbes.621', note: 'And the one that is shorter than the verb it comes from.' },
    ],
  },
};

/** The declared chip rows, so the width guard walks a grouping this file owns
 *  rather than guessing which three the renderer will put together. a2.03 §3.
 *  The widest is 33 against a budget of 37. */
export const TERM_ROWS: readonly (readonly string[])[] = [
  ['theGroup', 'pastForm', 'theFront'],
  ['theMachine', 'theGroup', 'pastForm'],
  ['twoLetters', 'oneSound', 'pastForm'],
  ['littleRoof', 'oneSound', 'pastForm'],
  ['alsoAWord', 'pastForm', 'theGroup'],
  ['firstWord', 'theGroup', 'pastForm'],
  ['theFront', 'theGroup', 'pastForm'],
];

export { TERM_ROW_MAX } from './participes-corpus.ts';

export const rowWidth = (keys: readonly string[]): number =>
  keys.reduce((n, k) => n + (PARTICIPES_TERMS[k]?.term.length ?? 0), 0) + (keys.length - 1) * 2;

/** What this lesson hands forward, by unit id, so the report and the roundup say
 *  the same thing. */
export const HANDOVER = {
  [ETRE_UNIT]:
    'THE FORMS ARE DONE AND THE CHOICE IS NOT TOUCHED. venu, né and mort are taught as forms on one screen, which names a2.21 and says in one line that which verbs take être, and what happens to the form afterwards, is that lesson\'s. No production surface anywhere in a2.20 asks a learner to pick an auxiliary, and no authored sentence agrees a past form with anything: the three être rows are masculine singular deliberately, so a2.21 can introduce agreement against a clean background. And the reason agreement will be hard is stated here rather than there: pris and prise are one sound.',
  [REFLEXIVE_UNIT]:
    '`assis` is the one form in the -is group with no sentence of its own, because a full past for s\'asseoir needs the little word in front of the verb as well as the first word. The form is on the group table and nothing else about it is taught.',
  [PRONOUN_UNIT]:
    'The one case where a past form DOES agree after avoir is the preceding direct object. a2.05 measured 81 published rows holding it and neither that lesson nor this one teaches it.',
  [SCHOOL_UNIT]:
    'a2.05 found this dependent and no other document in this band names it. Its whole canDo is a conversation in this tense, and half the verbs such a conversation needs — appris, compris, écrit, lu, su, dû — are in this lesson rather than in a2.05.',
  [FAMILY_UNIT]:
    'Its family principle is borrowed rather than restated: a2.15\'s own reframe is quoted verbatim on the screen where appris, compris, remis and promis arrive, and the naming form of remettre that this lesson imports is the row a2.15 authored from scratch.',
} as const;
