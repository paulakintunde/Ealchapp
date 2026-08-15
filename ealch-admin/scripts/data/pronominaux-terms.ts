// a2.22.l1 « Les verbes pronominaux » — the lesson glossary, and the constants
// it inherits from a1.18, a1.25, a2.01, a2.09, a2.19, a2.05 and a2.21.
//
// A term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the word turns
// up and no card carries the definition inline.
//
// THREE CHIPS PER SECTION, MAXIMUM. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.
//
// AND THE ROW IS THIRTY-SEVEN CHARACTERS WIDE (a2.03 §3, measured on a Pixel 6).
// Every label here is eleven characters or fewer, so the widest declared row is
// 32 including its separators, against a budget of 37. The first draft was 45
// and the batch refused it.
//
// NO CHIP LABEL IS A GRAMMAR WORD. `reflexive`, `pronoun`, `clitic` and
// `paradigm` are all on this band's jargon list; the plain phrases are « the
// extra word », « same person » and « the wrap ». a2.17 §5 measured that the
// house PREFERS the plain phrase rather than banning the technical one, so this
// lesson guards the RATIO, which is what lets `overview.titleEn` stay the unit's
// own English name — which `content_units` requires it to match.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import {
  A118_REFRAME, A125_HANDOFF, A125_REFRAME, A201_REFRAME, A209_CREDIT,
  A209_REFRAME, A221_REFRAME, A205_REFRAME, ALPHABET_UNIT, DIRECT_OBJECT_UNIT,
  ER_UNIT, ETRE_UNIT, EXC_UNIT, FUTUR_UNIT, INDIRECT_OBJECT_UNIT,
  NEGATION_EXTENSION, NEGATION_RULE, NEGATION_UNIT, OBJECT_DEFERRAL,
  PASSE_UNIT, PAST_DEFERRAL, PAST_UNIT, PRESENT_NO_AGREEMENT, ROUTINE_UNIT,
} from './pronominaux-corpus.ts';

export {
  A118_REFRAME, A125_HANDOFF, A125_REFRAME, A201_REFRAME, A209_REFRAME,
  A205_REFRAME, A221_REFRAME, NEGATION_EXTENSION, NEGATION_RULE,
  PRESENT_NO_AGREEMENT,
};
export { REFRAME } from './pronominaux-corpus.ts';

/** What a learner already owns, named by unit, so this lesson reads as one new
 *  thing standing on things they have rather than as a fresh topic. */
export const ALREADY_YOURS =
  `${ROUTINE_UNIT} gave you these verbs and three of the six people to use them with, and said the rest was a whole band away. This is the rest. Nothing about the endings changes: ${ER_UNIT} still gives you every one of them.`;

/** The measured evidence, as one sentence, so it reaches a screen rather than
 *  living only in the report. */
export const EVIDENCE_LINE =
  'Across every sentence in the app, this verb appears with je fourteen times and with vous and with ils not once. The two people who prove the little word moves are the two nobody had written down.';

export const PRONOMINAUX_TERMS: Record<string, LessonTerm> = {
  extraWord: {
    term: 'extra word',
    title: 'It is the subject again, in a different shape',
    body:
      `About half the verbs in a day carry a second little word between the person and the verb: je ME lave, tu TE laves, il SE lave. ${ROUTINE_UNIT} asked you to store it with the verb, which was the right thing to do while you only needed three of them. It is not a fixed piece of the verb. It is the person you already named, said a second time, and that is why it changes every time they do.`,
  },
  samePerson: {
    term: 'same person',
    title: 'Two words, one person, one job each',
    body:
      'The first one says who is doing it and the second says who it is being done to, and in these sentences those are the same person. That is the whole idea. Je lave la voiture washes something else and names it; je me lave has nothing to name, because the answer is already at the front of the sentence.',
  },
  doubled: {
    term: 'twice',
    title: 'nous nous, and vous vous, are not typos',
    body:
      `Four of the six little words are different from the person in front of them and two are identical. Nous nous levons has the same word twice doing two different jobs, and ${ROUTINE_UNIT} already put that exact sentence on a screen. It looks like a mistake in a way the others do not, and it is the form learners quietly drop.`,
  },
  theWrap: {
    term: 'the wrap',
    title: 'Both little words go inside it',
    body:
      `${NEGATION_UNIT} gave you two words either side of the verb and ${FUTUR_UNIT} said which verb: « ${NEGATION_RULE} » ${PASSE_UNIT} and ${ETRE_UNIT} both quote that line and it has not changed. ${NEGATION_EXTENSION} So the first half goes in front of the little word, not behind it.`,
  },
  notAboutSelf: {
    term: 'no meaning',
    title: 'Some of them point at nothing at all',
    body:
      `S'appeler, se souvenir and se dépêcher carry the little word and mean nothing reflexive by it. Nobody hurries themselves. The word is simply part of how the verb is built, and it still changes for the person, which is the only thing you have to get right. ${ALPHABET_UNIT} taught « Je m'appelle » in the first lesson in the app, so you have been saying one of these all along.`,
  },
  vowelMoves: {
    term: 'the vowel',
    title: 'A second rule, running at the same time',
    body:
      `${A209_REFRAME} ${A209_CREDIT} Se lever is doing both at once: the little word changes for the person, and the vowel in the middle opens in the four people where the ending makes no sound. Se laver does neither, which is why the table uses it.`,
  },
  presentOnly: {
    term: 'today only',
    title: 'Nothing on the end knows who you are',
    body:
      `${PRESENT_NO_AGREEMENT} ${PAST_DEFERRAL}`,
  },
  secondJob: {
    term: 'later',
    title: 'The same words come back doing something else',
    body:
      `${OBJECT_DEFERRAL} ${DIRECT_OBJECT_UNIT} and ${INDIRECT_OBJECT_UNIT} are where that happens. Everything on these screens points back at the person doing it, and that is the only use you need today.`,
  },
  eachOther: {
    term: 'each other',
    title: 'A third thing the same word can mean',
    body:
      `Ils se parlent can mean they talk to each other rather than to themselves, and nothing in the spelling tells you which. It is worth recognising so it does not read as an error, and it is not part of what you are asked to produce. ${PAST_UNIT} and ${INDIRECT_OBJECT_UNIT} are where it gets its own treatment.`,
  },
};

/** THE CHIP BUDGET, asserted rather than eyeballed. a2.03 measured the row at
 *  thirty-seven characters on a Pixel 6, separators included. */
export const CHIP_ROW_BUDGET = 37;
export const chipRowWidth = (labels: readonly string[]): number =>
  labels.reduce((n, l) => n + l.length, 0) + Math.max(0, labels.length - 1) * 3;
