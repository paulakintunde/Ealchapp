// a2.19.l1 « Le futur proche » — the lesson glossary, its reframe, and the four
// constants it inherits from a1.18, a2.02, a2.13 and a2.18.
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
// every layer walks it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  A118_NE_DROP, A118_REFRAME, A202_NAMING_FORM, A213_REFRAME, ALLER_UNIT,
  DANS_PAIR, MODAL_UNIT, NEGATION_UNIT, NEGATIVE_EVIDENCE, NE_DROP,
  OTHER_FUTURE, OWNS_CLAIM, PAST_UNIT, PLACE_UNIT, POSITION_CLAIM, TIME_UNIT,
  WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
} from './futur-proche-corpus.ts';

export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };

/** The line this lesson hangs on. Exported so the batch can count it against an
 *  explicit constant and the test can compare seed against source rather than
 *  restating the string. Invariants §5: a derived count compares the content to
 *  itself and passes on any rewording. */
export { REFRAME } from './futur-proche-corpus.ts';

/** What a learner already owns, named by unit, so this lesson's negative is
 *  clearly the same rule rather than a second one. */
export const ALREADY_YOURS =
  `${Cap(unitRef(NEGATION_UNIT))} gave you the two halves and where they go. ${Cap(unitRef(ALLER_UNIT))} gave you the six forms of aller. This lesson is those two facts standing next to each other, and the only new thing is which of two verbs the halves go round.`;

/** The measured margin, as one sentence, so the evidence reaches a screen
 *  rather than living only in a header. Every figure in it is re-measured by
 *  the manifest generator on every regeneration. */
export const EVIDENCE_LINE =
  `${NEGATIVE_EVIDENCE.rows} sentences in this app already put the two halves round aller with another verb behind it, in ${NEGATIVE_EVIDENCE.persons} different people and ${NEGATIVE_EVIDENCE.verbs} different verbs, and every one of them puts the pas in the same place.`;

export const FUTUR_PROCHE_TERMS: Record<string, LessonTerm> = {
  whichVerb: {
    // THE CHIP IS A LABEL AND THE ROW IS 37 CHARACTERS WIDE (a2.03 §3).
    term: 'which verb',
    title: 'The one that moved for you',
    body:
      `${OWNS_CLAIM} ${A118_REFRAME} is what ${unitRef(NEGATION_UNIT)} told you, and it was enough while there was only one verb in the sentence to wrap. Now there are two, and only one of them changed when you picked the person you are talking about. That is the one. The other is sitting there in its naming form and it has not moved at all, so there is nothing about it for the two halves to go round.`,
    examples: [
      { itemId: 'fr.a2.verbes.501', note: 'Aller moved for je. Partir did not.' },
      { itemId: 'fr.a2.verbes.507', note: 'So both halves went round aller, and partir stayed outside them.' },
    ],
  },

  neverChanges: {
    term: 'never changes',
    title: 'The verb behind aller',
    body:
      `${A213_REFRAME} That is ${unitRef(MODAL_UNIT, 'a2')}'s line, about pouvoir and vouloir and devoir, and it is exactly as true here. ${Cap(unitRef(ALLER_UNIT))} said the same thing about what follows de and called it ${A202_NAMING_FORM}. Whatever you put behind aller goes in untouched: it does not agree with anybody, it does not take an ending, and it is the same word in all six rows of the table.`,
    examples: [
      { itemId: 'fr.a2.verbes.347', note: `${Cap(unitRef(MODAL_UNIT, 'a2'))}'s card. Payer, behind a modal.` },
      { itemId: 'fr.a2.verbes.513', note: 'The same payer, behind aller. Nothing about it is different.' },
    ],
  },

  whatNext: {
    term: 'what next',
    title: 'You have had this shape twice',
    body:
      `${Cap(unitRef(WHAT_FOLLOWS_UNIT))} gave this pattern its name on venir de and called it ${WHAT_FOLLOWS}. ${Cap(unitRef(TIME_UNIT))} met it again on il y a. This is the third one and it is on aller: a place behind it is where you are going, and a naming form behind it is what you are going to do. Nothing about the verb changes and nothing ever will, so there is no spelling to learn and no sound to catch. There is only the next word.`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.130', note: 'A place. Where you are going.' },
      { itemId: 'fr.a2.verbes.501', note: 'A naming form. What you are going to do.' },
    ],
  },

  goingTo: {
    term: 'going to',
    title: 'Two words for something ahead',
    body:
      'Aller in the present, then the naming form of whatever you are planning. That is the whole construction and there is nothing else to it: no new endings, no new verb, and the six forms of aller are the ones you already had. English does the same thing with "going to", which is why this is the one piece of French grammar that costs an English speaker nothing at all.',
    examples: [
      { itemId: 'fr.a2.verbes.503', note: 'Aller, then the naming form. Two words and a plan.' },
      { itemId: 'fr.a2.verbes.519', note: `And with a time on the end, which is ${unitRef(TIME_UNIT, 'a2')}'s phrase, unchanged.` },
    ],
  },

  neGoes: {
    term: 'the ne goes',
    title: 'What you will hear',
    body:
      `${NE_DROP} ${Cap(unitRef(NEGATION_UNIT))} said this first and said it the same way: ${A118_NE_DROP} Nothing about where the pas lands changes when the ne disappears. It is still straight after aller, and it is now carrying the entire negative on its own, which is why missing it costs you the meaning of the sentence rather than a mark.`,
    examples: [
      { itemId: 'fr.a2.verbes.521', note: 'Both halves. This is the one you write.' },
      { itemId: 'fr.a2.verbes.522', note: 'The ne is gone. This is the one you hear. Recognise it and keep writing the other.' },
    ],
  },

  laterOn: {
    term: 'later on',
    title: 'There is a second future',
    body:
      `${OTHER_FUTURE} It is one word rather than two and it belongs to the level after this one, so when you meet it in something you are reading, nothing has gone wrong and you were not taught a shortcut. Both are ordinary French. The one in this lesson is the one that comes out of people's mouths.`,
    examples: [
      { itemId: 'fr.a2.verbes.514', note: 'Two words, a naming form, and tomorrow on the end.' },
      { itemId: 'fr.a2.verbes.520', note: 'The same construction with a time phrase rather than a day.' },
    ],
  },

  timeWord: {
    term: 'when',
    title: 'Say when, and the reading is fixed',
    body:
      `« Je vais manger » on its own can be a plan or it can be somebody walking towards a kitchen. Put a time on it and there is nothing left to work out. ${Cap(unitRef(TIME_UNIT))} gave you dans plus a length one lesson ago and taught it with a present-tense verb, which is correct on its own. ${DANS_PAIR.why}`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.172', note: `${Cap(unitRef(TIME_UNIT, 'a2'))}'s sentence. A present tense about something ahead.` },
      { itemId: 'fr.a2.verbes.519', note: 'The same fact with a verb in front of it. Both are right.' },
    ],
  },

  sameShape: {
    term: 'same shape',
    title: 'Where this rule turns up again',
    body:
      `${POSITION_CLAIM} You have already seen it once, behind ${unitRef(MODAL_UNIT, 'a2')}'s three verbs: « je ne peux pas venir » puts the two halves round peux and leaves venir alone. You will see it again in the very next lesson, on a past tense, and it behaves the same way there. One rule, three places, and the third one is ${unitRef(PAST_UNIT)}.`,
    examples: [
      { itemId: 'fr.a2.verbes.509', note: 'Round aller, and partir is outside.' },
      { itemId: 'fr.a2.negation-et-restriction.164', note: 'A published sentence, another verb, and the pas is in the same place.' },
    ],
  },
};

/** The declared chip rows, so the width guard walks a grouping this file owns
 *  rather than guessing which three the renderer will put together. a2.03 §3. */
export const TERM_ROWS: readonly (readonly string[])[] = [
  ['whichVerb', 'neverChanges', 'whatNext'],
  ['goingTo', 'neGoes', 'laterOn'],
  ['timeWord', 'sameShape', 'whichVerb'],
];

export const TERM_ROW_MAX = 37;

export const rowWidth = (keys: readonly string[]): number =>
  keys.reduce((n, k) => n + (FUTUR_PROCHE_TERMS[k]?.term.length ?? 0), 0) + (keys.length - 1) * 2;

/** What this lesson hands forward, by unit id, so the report and the roundup
 *  say the same thing. a2.05 is told to extend the rule and the wording it has
 *  to match is the reframe, which is exported from the corpus. */
export const HANDOVER = {
  [PAST_UNIT]: `The negation rule is the one this lesson states and ${unitRef('a2.05')} extends it to the auxiliary: the two halves go round the verb that changed, and the participle stays outside them exactly as the naming form does here. The wording to match is the reframe.`,
  [PLACE_UNIT]: 'aller plus a place is that lesson\'s and is used here only as the contrast. No preposition is taught.',
} as const;
