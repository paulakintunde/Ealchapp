// a2.18.l1 « Prépositions de temps » — the lesson glossary, its reframe, and
// the two constants it inherits from a2.02 and a2.04.
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
// the guard walks it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  AGO_RULE, DEPUIS_CLAIM, DEPUIS_EVIDENCE, EN_DANS_CLAIM, FUTURE_UNIT,
  GRID, IL_Y_A_EVIDENCE, PAIR_CLAIM, PAST_UNIT, PLACE_UNIT, POUR_LINE,
  WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, gridRow,
} from './prepositions-temps-corpus.ts';

export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };

/** The line this lesson hangs on. Exported so the batch can count it against an
 *  explicit constant and the test can compare seed against source rather than
 *  restating the string. Invariants §5: a derived count compares the content to
 *  itself and passes on any rewording. */
export { REFRAME } from './prepositions-temps-corpus.ts';

/** The claim the whole level should read the same way about the two languages,
 *  carried verbatim through the opening act, the Owns act and the roundup.
 *  Deliberately NOT the reframe: it is a statement about what English does to
 *  the learner rather than something they run mid-sentence, and the doctrine is
 *  explicit that those are different things. */
export const ENGLISH_CLAIM = DEPUIS_CLAIM;

/** The measured margin, as one sentence, so the evidence reaches a screen
 *  rather than living only in a header. */
export const EVIDENCE_LINE =
  `Across every published French sentence in this app, ${DEPUIS_EVIDENCE.depuisSentences} hold depuis and ${DEPUIS_EVIDENCE.depuisWithACompound} of those sit beside a past tense. ${DEPUIS_EVIDENCE.pendantSentences} hold pendant and ${DEPUIS_EVIDENCE.pendantWithACompound} do.`;

/** What the learner already owns, named by unit, so this lesson's "when" is
 *  clearly a different one rather than a third pass over the clock. */
export const ALREADY_YOURS =
  'The clock and the calendar gave you when on a dial and when on a page. These five give you when measured from right now, forwards and backwards, and how wide a stretch was.';

export const PREPOSITIONS_TEMPS_TERMS: Record<string, LessonTerm> = {
  stillRunning: {
    // THE CHIP IS A LABEL AND THE ROW IS 37 CHARACTERS WIDE (a2.03 §3).
    // Every term string here was shortened after the batch measured a row at 43.
    term: 'still going',
    title: 'The question you ask before you pick',
    body:
      'Every one of these five words wants a different shape of time behind it, and the fastest way to the right one is to ask what the thing is doing right now. Still running, and you want depuis. Finished, and you want pendant. Behind you, il y a. Ahead of you, dans. And if the question is not when but how long it took, en. You are not translating; you are checking a fact about the world, and the fact picks the word.',
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.180', note: 'Started three years ago and has not stopped.' },
      { itemId: 'fr.a2.prepositions-essentielles.182', note: 'Started, ran two hours, stopped.' },
    ],
  },

  presentNotPerfect: {
    term: 'the present',
    title: 'The verb does not move',
    body:
      `${DEPUIS_CLAIM} That is the whole of it, and it is the single place at this level where translating word for word produces something a French listener cannot decode. « J'ai habité ici depuis trois ans » does not sound like a mistake to them; it sounds like you moved out three years ago, which is the opposite of what you meant. ${EVIDENCE_LINE}`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.170', note: 'Present in French, perfect in English, same three years.' },
      { itemId: 'fr.a2.prepositions-essentielles.177', note: 'No person in it at all, and the verb still stays put.' },
    ],
  },

  theTwoFors: {
    term: 'two fors',
    title: 'Pendant closes it, depuis leaves it open',
    body:
      `${PAIR_CLAIM} The English word is no help, because English uses one word for both and lets the tense carry the difference. French does the opposite: the preposition carries it and the tense follows. So « depuis deux heures » is two hours you are still inside, and « pendant deux heures » is two hours you came out the other side of.`,
    examples: [
      { itemId: 'fr.sons.jours-et-mois.082', note: 'Still inside the hour.' },
      { itemId: 'fr.sons.jours-et-mois.083', note: 'Out the other side of it.' },
    ],
  },

  whatComesNext: {
    // The CHIP is short and a2.02's term is quoted VERBATIM in the body and in
    // the trap's rule title, which is what doctrine §B.7 asks for. A 23-character
    // chip would put every row it appears in over the measured budget.
    term: 'what next',
    title: 'You have had this shape before',
    body:
      `${Cap(unitRef(WHAT_FOLLOWS_UNIT))} gave this pattern its name on venir de: one form, two jobs, and the word after it settles which. Here it is three words instead of two. « Il y a » with a thing behind it says that thing exists. « Il y a » with a measurement behind it, and nothing after the measurement, says how far back. Nothing about the three words changes and nothing ever will, so there is no spelling to learn and no sound to catch. There is only the next word.`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.188', note: 'A thing. So it exists.' },
      { itemId: 'fr.a2.prepositions-essentielles.189', note: 'A measurement, and then a full stop. So it is a distance back.' },
    ],
  },

  measurementThenStop: {
    term: 'then a stop',
    title: 'Where the rule is exact',
    body:
      `${AGO_RULE} That last clause is not a decoration. « Il y a une heure » is an hour ago and « il y a une heure de retard » is an hour of delay, and the first four words are identical. In this app's published French, ${IL_Y_A_EVIDENCE.ago} sentences use it for ago and ${IL_Y_A_EVIDENCE.existence} use it for there is, and only two put anything at all after the measurement.`,
    examples: [
      { itemId: 'fr.sons.jours-et-mois.081', note: 'An hour, and then nothing. An hour ago.' },
      { itemId: 'fr.a2.prepositions-essentielles.190', note: 'An hour, and then of delay. So the hour is a thing again.' },
    ],
  },

  aTenseComing: {
    term: 'not yet',
    title: 'Il y a is waiting for something',
    body:
      `Ago points at a moment behind you, so the sentence around it has to be in a past tense, and you do not have one. That is not an oversight: the past tense is ${unitRef(PAST_UNIT)}, two lessons from here. You will meet il y a in this lesson, recognise it when you hear it, and pick it up to use on the day the tense arrives. Everything else here you can say today.`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.174', note: 'Shown once, asked for nowhere. Read it and move on.' },
      { itemId: 'fr.a2.prepositions-essentielles.186', note: 'The phrase on its own, which needs no verb and is yours now.' },
    ],
  },

  pointAhead: {
    term: 'ahead',
    title: 'Dans, and a present tense doing future work',
    body:
      `${gridRow('dans').detail} So « le film commence dans une heure » is a present tense about something that has not happened, and no French speaker hears it as odd. There is another way to say it, with a verb in front, and that is ${unitRef(FUTURE_UNIT)}, which is the very next lesson. ${Cap(unitRef(PLACE_UNIT))} owns dans in front of a place, which you did yesterday, and this is the other job.`,
    examples: [
      { itemId: 'fr.sons.jours-et-mois.080', note: 'One hour from now, and the film has not started.' },
      { itemId: 'fr.a2.prepositions-essentielles.187', note: 'The verb is present and the event is not.' },
    ],
  },

  howLongItTook: {
    term: 'how long',
    title: 'En answers a different question',
    body:
      `${EN_DANS_CLAIM} Four of these five words tell you WHEN. En tells you how wide the whole job was, from the moment it started to the moment it finished. « Je pars dans dix minutes » is a departure time. « Je finis en dix minutes » is a stopwatch. And this is the one card the app's published French never made: the other four exist, side by side, and this one had to be written.`,
    examples: [
      { itemId: 'fr.a2.prepositions-essentielles.169', note: 'The row that did not exist until this lesson.' },
      { itemId: 'fr.a2.prepositions-essentielles.185', note: 'The same two hours as depuis and pendant, answering a third question.' },
    ],
  },
};

/** The declared chip rows, so the width guard walks a grouping this file owns
 *  rather than guessing which three the renderer will put together. a2.03 §3. */
export const TERM_ROWS: readonly (readonly string[])[] = [
  ['stillRunning', 'presentNotPerfect', 'theTwoFors'],
  ['whatComesNext', 'measurementThenStop', 'aTenseComing'],
  ['pointAhead', 'howLongItTook'],
];

export const TERM_ROW_MAX = 37;

export const rowWidth = (keys: readonly string[]): number =>
  keys.reduce((n, k) => n + (PREPOSITIONS_TEMPS_TERMS[k]?.term.length ?? 0), 0) + (keys.length - 1) * 2;

/** The five words, as the roundup lists them, derived from the grid so a row
 *  that leaves the grid leaves this line too. */
export const FIVE_LINE = GRID.map((g) => g.prep).join(', ');

/** What this lesson hands forward, by unit id, so the report and the roundup
 *  say the same thing. */
export const HANDOVER = {
  [PAST_UNIT]: `il y a for "ago" is met here and produced there. ${IL_Y_A_EVIDENCE.ago} published sentences use it, nearly all of them beside a past tense, and it is the commonest way in the language to anchor one.`,
  [FUTURE_UNIT]: 'dans is taught here with the present tense, which is correct on its own. The verb-in-front version is that lesson, and it should name this one.',
} as const;

/** The sixth word, said once. See POUR_DECISION in the corpus for the
 *  measurement behind leaving it out. */
export { POUR_LINE };
