// a2.23.l1 « Pronominaux au passé composé » — the lesson glossary, and the
// constants it inherits from a1.18, a2.01, a2.05, a2.19, a2.20, a2.21 and a2.22.
//
// A term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the word turns
// up and no card carries the definition inline.
//
// THREE CHIPS PER SECTION, MAXIMUM. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.
//
// AND THE ROW IS THIRTY-SEVEN CHARACTERS WIDE (a2.03 §3, measured on a Pixel 6).
// The widest triple this lesson declares is « little word · first word · the
// ending » at 37 exactly, which is at the budget rather than under it and is
// therefore asserted rather than eyeballed. The three long labels — « little
// word », « first word » and « second word » — come to 38 together and are
// never declared on one section.
//
// NO CHIP LABEL IS A GRAMMAR WORD. This lesson has four moving parts and the
// house already has plain phrases for three of them: a2.22 shipped « little
// word » and a2.21 shipped « first word » and « second word ». Inheriting those
// three is what makes the composition sayable at all, and it is why the jargon
// list here bans `auxiliary` and `past participle` where a2.17 §5 says the
// part-of-speech names are house vocabulary: the house has already chosen, twice,
// in the two lessons this one is built on.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  A118_REFRAME, A201_REFRAME, A205_REFRAME, A220_REFRAME, A221_REFRAME,
  A222_REFRAME, AGREEMENT_RULE, DIRECT_OBJECT_UNIT, EAR_CLAIM, ER_UNIT,
  ETRE_UNIT, FUTUR_UNIT, INDIRECT_OBJECT_UNIT, IRREGULAR_UNIT,
  NEGATION_EXTENSION, NEGATION_OUTSIDE, NEGATION_RULE, NEGATION_UNIT,
  OBJECT_CLAIM, OBJECT_DEFERRAL, PASSE_UNIT, PAST_TENSE_DEFERRAL,
  PRESENT_NO_AGREEMENT, REFLEXIVE_UNIT, REFRAME, ROUTINE_UNIT, THE_NEW_FACT,
} from './pronominaux-passe-corpus.ts';

export {
  A118_REFRAME, A201_REFRAME, A205_REFRAME, A220_REFRAME, A221_REFRAME,
  A222_REFRAME, AGREEMENT_RULE, NEGATION_EXTENSION, NEGATION_OUTSIDE,
  NEGATION_RULE, PRESENT_NO_AGREEMENT, REFRAME, THE_NEW_FACT,
};

/** What a learner already owns, named by unit, so this lesson reads as one new
 *  fact standing on four things they have rather than as a fresh topic. It is
 *  the capstone claim and it is made on the goals screen and again at the end. */
export const ALREADY_YOURS =
  `Four lessons gave you the pieces of this. ${Cap(unitRef(REFLEXIVE_UNIT))} gave you the little word, ${unitRef(ETRE_UNIT)} gave you être and the ending, ${unitRef(PASSE_UNIT)} gave you the two-part shape, and ${unitRef(IRREGULAR_UNIT)} gave you the second words. Nothing here is new except which first word to reach for.`;

/** The measured evidence, as one sentence, so it reaches a screen rather than
 *  living only in the report. Corpus §5. */
export const EVIDENCE_LINE =
  'This shape is everywhere: two hundred and nineteen sentences in this app start a verb with s\'est, and a hundred and four with se sont. Not one of them is a verb you have been shown how to build.';

/** The other half of that measurement, which is the Owns. Corpus §5. */
export const ASYMMETRY_LINE =
  'The app has published « j\'ai lavé la voiture » twice and « je me suis lavé » not once. The sentence that causes the mistake is the one you already own.';

export const PRONOMINAUX_PASSE_TERMS: Record<string, LessonTerm> = {
  littleWord: {
    term: 'little word',
    title: 'The one that decides everything else',
    body:
      `${Cap(unitRef(REFLEXIVE_UNIT))} taught you that about half the verbs in a day carry a small word between the person and the verb, and that it is the person said a second time: « ${A222_REFRAME} » In the past it does one more thing. ${REFRAME} It is the only part of the sentence you have to look at.`,
  },
  firstWord: {
    term: 'first word',
    title: 'It is être, and nothing else decides it',
    body:
      `${Cap(unitRef(PASSE_UNIT))} gave you a past made of two words and ${unitRef(ETRE_UNIT)} gave you the choice between them. ${THE_NEW_FACT} Laver takes avoir on its own and se laver takes être, and the only thing that changed is the little word in front.`,
  },
  secondWord: {
    term: 'second word',
    title: 'It ends for the person, exactly as before',
    body:
      `« ${A221_REFRAME} » is ${unitRef(ETRE_UNIT, 'a2')}'s line and it has not changed here. ${AGREEMENT_RULE} ${Cap(unitRef(IRREGULAR_UNIT))} gave you the second words themselves, group by group: « ${A220_REFRAME} »`,
  },
  theEnding: {
    term: 'the ending',
    title: 'Four spellings, one sound',
    body:
      `${AGREEMENT_RULE} ${EAR_CLAIM} So this is the one thing in the lesson you can only get right in writing, and it is the reason the dictée is the longest part.`,
  },
  silent: {
    term: 'silent',
    title: 'Nothing here can be checked by ear',
    body:
      `« ${A201_REFRAME} » is ${unitRef(ER_UNIT, 'a2')}'s line, from the first lesson of this level, and ${unitRef(ETRE_UNIT)} quoted it for the same reason. Levé, levée, levés and levées are one sound. ${EAR_CLAIM}`,
  },
  theWrap: {
    term: 'the wrap',
    title: 'It closes after the first word',
    body:
      `${Cap(unitRef(NEGATION_UNIT))} gave you two words either side of the verb: « ${A118_REFRAME} » ${unitRef(FUTUR_UNIT)} said which verb: « ${NEGATION_RULE} » ${unitRef(REFLEXIVE_UNIT)} added the little word: « ${NEGATION_EXTENSION} » And now there is a third word. ${NEGATION_OUTSIDE}`,
  },
  afterIt: {
    term: 'after it',
    title: 'Something named after the second word',
    body:
      `${OBJECT_CLAIM} Elle s'est lavée has nothing after it and takes the ending. Elle s'est lavé les mains names something, and it does not. You will read both and only the first one is being asked of you today.`,
  },
  later: {
    term: 'later',
    title: 'What is waiting after this',
    body:
      `${OBJECT_DEFERRAL} ${PAST_TENSE_DEFERRAL}`,
  },
  onlyPast: {
    term: 'the present',
    title: 'What the present did not do',
    body:
      `${PRESENT_NO_AGREEMENT} That is ${unitRef(REFLEXIVE_UNIT, 'a2')}'s sentence, and it is exactly what stops being true here: in the past there is a second word, and it does know. ${Cap(unitRef(ROUTINE_UNIT))} gave you these verbs and neither of those lessons put an ending on one.`,
  },
};

/** THE CHIP BUDGET, asserted rather than eyeballed. a2.03 measured the row at
 *  thirty-seven characters on a Pixel 6, separators included. */
export const CHIP_ROW_BUDGET = 37;
export const chipRowWidth = (labels: readonly string[]): number =>
  labels.reduce((n, l) => n + l.length, 0) + Math.max(0, labels.length - 1) * 3;

/** The one triple that lands exactly ON the budget, and the one that would go
 *  over. Recorded so a later author does not reshuffle chips without measuring:
 *  the three long labels are the three parts of the sentence and the temptation
 *  to declare all three on the assembly section is real. */
export const CHIP_AT_BUDGET = ['little word', 'first word', 'the ending'];
export const CHIP_OVER_BUDGET = ['little word', 'first word', 'second word'];
