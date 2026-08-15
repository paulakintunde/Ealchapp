// a2.21.l1 « Le passé composé avec être » — the lesson glossary, and the
// constants it inherits from a2.01, a2.03, a2.05, a2.15, a2.19 and a2.20.
//
// A term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the word turns
// up and no card carries the definition inline.
//
// THREE CHIPS PER SECTION, MAXIMUM. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.
//
// AND THE ROW IS THIRTY-SEVEN CHARACTERS WIDE (a2.03 §3, measured on a Pixel 6).
// Every label here is ten characters or fewer, so the widest declared row is 34
// including its separators, against a budget of 37.
//
// NO CHIP LABEL IS A GRAMMAR WORD. `participle`, `auxiliary` and `agreement` are
// on this band's jargon list; the plain phrases are « the second word », « the
// first word » and « the ending ». a2.17 §5 measured that the house PREFERS the
// plain phrase rather than banning the technical one, so this lesson guards the
// RATIO, which is what lets `overview.titleEn` stay the unit's own English name.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import {
  A201_REFRAME, A203_REFRAME, A205_REFRAME, ADJ_UNIT, AGREEMENT_CREDIT,
  AGREEMENT_RULE, AVOIR_CLAIM, EAR_CLAIM, ER_UNIT, FAMILY_UNIT, IRREGULAR_UNIT,
  MNEMONIC, MNEMONIC_CLAIM, MNEMONIC_GAP_CLAIM, PASSE_UNIT, PATTERN_CLAIM,
  REFLEXIVE_UNIT, REFLEXIVE_PAST_UNIT, REST_CLAIM, TRANSITIVE_CLAIM,
} from './passe-compose-etre-corpus.ts';

export { A201_REFRAME, A203_REFRAME, A205_REFRAME };
export { REFRAME } from './passe-compose-etre-corpus.ts';

/** What a learner already owns, named by unit, so this lesson reads as one new
 *  thing standing on three they have. */
export const ALREADY_YOURS =
  `${PASSE_UNIT} gave you the whole shape two lessons ago and ${IRREGULAR_UNIT} gave you the forms that could not be built. Both of those stay exactly as they were. What is new is which first word you reach for, and what happens to the second one afterwards.`;

/** The measured margin as one sentence, so the evidence reaches a screen. */
export { EVIDENCE_LINE } from './passe-compose-etre-corpus.ts';

export const ETRE_TERMS: Record<string, LessonTerm> = {
  firstWord: {
    term: 'first word',
    title: 'avoir for almost everything, être for fifteen',
    body:
      `${A205_REFRAME} That is ${PASSE_UNIT}'s line and the shape has not moved. What moves is the first word: for fifteen verbs it is a form of être rather than a form of avoir, and there is no way to hear which one a sentence needs until you know the verb.`,
    examples: [
      { itemId: 'fr.a2.verbes.661', note: 'avoir, on a verb that takes it, which is almost all of them.' },
      { itemId: 'fr.a2.verbes.662', note: 'And être, on the same woman going to the same place.' },
    ],
  },

  theEnding: {
    term: 'the ending',
    title: 'The last two letters, and nobody hears them',
    body:
      `${AGREEMENT_RULE} It goes on the second word and only after être. ${AVOIR_CLAIM}`,
    examples: [
      { itemId: 'fr.a2.verbes.652', note: 'A woman, so an e. The sound is identical to the plain form.' },
      { itemId: 'fr.a2.verbes.654', note: 'More than one woman, so both letters. Still identical.' },
    ],
  },

  describing: {
    term: 'describing',
    title: 'The second word is doing an adjective\'s job',
    body: AGREEMENT_CREDIT,
    examples: [
      { itemId: 'fr.a2.verbes.669', note: 'The past form of mourir, and the corpus publishes the same word as an ordinary describing word meaning "dead".' },
      { itemId: 'fr.a2.verbes.670', note: 'And with the e on it, which is where you can hear one for once.' },
    ],
  },

  whoDidIt: {
    term: 'who did it',
    title: 'The subject decides, not the verb',
    body:
      `The ending is not about the verb and not about what happened. It is about who or what the sentence is about: one man, one woman, several people, several women. ${ER_UNIT} said « ${A201_REFRAME} » in the first lesson of this level, and this is the same thing seventeen lessons later.`,
    examples: [
      { itemId: 'fr.a2.verbes.693', note: 'The subject is a glass rather than a person, and the rule is the same: masculine and singular, so nothing goes on.' },
      { itemId: 'fr.a2.verbes.653', note: 'More than one, so the s. The verb has not changed at all.' },
    ],
  },

  movement: {
    term: 'movement',
    title: 'Twelve of them move, and three do not',
    body: `${PATTERN_CLAIM} ${REST_CLAIM}`,
    examples: [
      { itemId: 'fr.a2.verbes.690', note: 'Going in, which is movement of the plainest kind.' },
      { itemId: 'fr.a2.verbes.674', note: 'And staying, which is not movement and takes être anyway.' },
    ],
  },

  oneSound: {
    term: 'one sound',
    title: 'What the ear cannot separate',
    body: EAR_CLAIM,
    examples: [
      { itemId: 'fr.a2.verbes.651', note: 'The plain form.' },
      { itemId: 'fr.a2.verbes.654', note: 'And both endings at once, four letters longer and identical to say.' },
    ],
  },

  theCrutch: {
    term: 'the crutch',
    title: `${MNEMONIC}, and what it is for`,
    body: `${MNEMONIC_CLAIM} ${MNEMONIC_GAP_CLAIM}`,
    examples: [
      { itemId: 'fr.a2.verbes.694', note: 'passer, which the crutch has no letter for and which takes être here.' },
      { itemId: 'fr.a2.verbes.696', note: 'And repartir, which it has no letter for either. Covering the front settles both.' },
    ],
  },

  theObject: {
    term: 'the object',
    title: 'Something after the verb changes the first word',
    body:
      `${TRANSITIVE_CLAIM} When one of them has something after it that is being moved rather than moving itself, the first word is avoir and nothing goes on the end. You will see two of them and you are not asked to produce either.`,
    examples: [
      { itemId: 'fr.a2.verbes.665', note: 'Nothing after the verb, so être and the ordinary meaning.' },
      { itemId: 'fr.a2.verbes.666', note: 'Something after it that is being carried out of the house, so avoir.' },
    ],
  },
};

/** The declared chip rows, so the width guard walks a grouping this file owns
 *  rather than guessing which three the renderer will put together. a2.03 §3.
 *  Every label is ten or fewer, so the widest row here is 34 against 37. */
export const TERM_ROWS: readonly (readonly string[])[] = [
  ['firstWord', 'theEnding', 'whoDidIt'],
  ['theEnding', 'describing', 'whoDidIt'],
  ['movement', 'firstWord', 'theEnding'],
  ['oneSound', 'theEnding', 'whoDidIt'],
  ['theCrutch', 'movement', 'firstWord'],
  ['theObject', 'firstWord', 'movement'],
  ['describing', 'theEnding', 'oneSound'],
  ['firstWord', 'movement', 'theCrutch'],
];

export { TERM_ROW_MAX } from './passe-compose-etre-corpus.ts';

export const rowWidth = (keys: readonly string[]): number =>
  keys.reduce((n, k) => n + (ETRE_TERMS[k]?.term.length ?? 0), 0) + (keys.length - 1) * 2;

/** What this lesson hands forward, by unit id, so the report, the roundup and
 *  the ledger amendment say the same thing. */
export const HANDOVER = {
  [REFLEXIVE_PAST_UNIT]:
    `THE AGREEMENT RULE IS WORDED ONCE AND a2.23 IS TOLD TO INHERIT IT: « ${AGREEMENT_RULE} » It is exported as AGREEMENT_RULE from passe-compose-etre-corpus.ts so that lesson can quote it rather than reword it. Everything a reflexive past needs on top of it is the little word in front of the verb, and the one place the rule does NOT run there — a reflexive with a direct object after it — is a2.23's to state, not this lesson's. No reflexive verb, and no reflexive marker, appears anywhere in a2.21: the batch, the merge and the test all walk the list.`,
  [REFLEXIVE_UNIT]:
    'The present of the pronominal verbs is untouched here and none of the eleven commonest appears on any screen.',
  [ADJ_UNIT]:
    `Its rule is borrowed rather than restated: « ${A203_REFRAME} » is quoted verbatim on the screen where the four endings arrive, and the lesson says in one line that the endings are a2.03's four and the only new thing is that a verb is doing it.`,
  [FAMILY_UNIT]:
    'Its front-covering move is extended ONE STEP FURTHER than a2.20 extended it. a2.20 used it to get the FORM of a compound verb; this lesson uses it to get the FIRST WORD as well, so devenir, revenir and repartir all arrive free, and two of the three are outside the mnemonic.',
} as const;
