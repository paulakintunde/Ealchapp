// a2.31.l1 « L'école & les études » — the term glossary.
//
// A term chip explains a word the lesson USES in its own copy. `MissionSection`
// caps the chips shown at THREE, so a section declaring four or more pushes its
// content down the screen. Every section here declares two or three.
//
// THE JARGON WALK. Corrections §9 and §13: the guard walks `intro` and
// `overview` as well as the sections, over a display() pass so a cardDeck
// card's `sub` is seen, and it checks the -s plural of every entry.
//
// THESE BODIES ARE THE LIKELIEST PLACE IN THIS BUILD FOR THE ONE WORD THAT
// MUST NOT APPEAR. This unit is a retrospective account, and the technical name
// for the tense a retrospective account normally uses is one keystroke away.
// `imparfait` is in the JARGON list in the corpus file, it is asserted
// separately by name, and it appears nowhere here.
//
// WHAT HAS NO TERM, DELIBERATELY:
//
//   * no chip for the passé composé. a2.05 owns it, it is this lesson's whole
//     tense budget, and a chip would be a second teaching of a prerequisite.
//   * no chip for `depuis`. a2.18 owns it at seq 14, uncontested in C5. It
//     appears once, inside a contrast, through an imported row.
//   * no chip for a rung name. a2.29 owns the ladder; the three names are
//     quoted verbatim in s18-equiv and nothing here re-explains them.
//   * no chip for `faire de`. fr.a2.matieres.011 already states that rule AS A
//     RULE and the prompt requires this lesson to anchor on it by itemId
//     rather than restate it in the author's own words.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

export const ECOLE_TERMS: Record<string, LessonTerm> = {
  dossier: {
    term: 'the dossier',
    title: 'The four lines somebody writes down about you',
    body: 'What level it was, what you studied, how it went, and what it comes out at here. Every act of this lesson adds one line. By the end you can say all four out loud without stopping, which is the whole thing a registrar is waiting for.',
    examples: [
      { itemId: 'fr.a2.ecole.052', note: 'Line one, and it is the first thing they ask.' },
      { itemId: 'fr.a2.ecole.054', note: 'Line four, and it is the one you have to say for them.' },
    ],
  },

  hedge: {
    term: 'the hedge',
    title: 'What you say when your qualification has no French name',
    body: 'Four short chunks, learned whole. You are not translating the name, because the name has nothing behind it here. You are giving the level and the length, which is what the other person is actually trying to write down.',
    examples: [
      { itemId: 'fr.a2.ecole.016', note: 'The plainest one, and it works for anything.' },
      { itemId: 'fr.a2.ecole.020', note: 'The whole move in one sentence.' },
    ],
  },

  rung: {
    term: 'a rung',
    title: 'One level on the French school ladder',
    body: 'Five of them, from maternelle to université. A rung is named by where it sits, not by what it is called, so the useful question is never what does this word mean but how old are you when you leave it.',
    examples: [
      { itemId: 'fr.a1.ecole.063', note: 'Not a college. Eleven to fifteen.' },
      { itemId: 'fr.a1.ecole.064', note: 'Fifteen to eighteen, and it ends in the bac.' },
    ],
  },

  sit: {
    term: 'to sit an exam',
    title: 'Doing the exam, which is not the same as getting it',
    body: 'French keeps these apart with two different verbs and English uses one word for both. Sitting it is the day you turn up. Getting it is the letter that comes afterwards. Saying the first when you mean the second is a real sentence and nobody will correct you.',
    examples: [
      { itemId: 'fr.a2.ecole.029', note: 'The day you turn up.' },
      { itemId: 'fr.a2.ecole.031', note: 'The letter afterwards.' },
    ],
  },

  outOfTwenty: {
    term: 'out of twenty',
    title: 'French marks run to twenty, and ten is the pass',
    body: 'Ten is the line. Twelve is solid, fourteen is good and anything at sixteen is rare enough that people remember it. Nobody scores twenty. If you report a percentage instead, the number lands with no meaning attached.',
    examples: [
      { itemId: 'fr.a2.ecole.036', note: 'A good result, said the ordinary way.' },
      { itemId: 'fr.a2.ecole.037', note: 'Over the line, and that is all it claims.' },
    ],
  },

  registrar: {
    term: 'the registrar',
    title: 'The person filling in the form about you',
    body: 'Not an employer and not a teacher. They are recording what you did, not judging whether to take you on, and they will use vous from the first word to the last. Their questions are short and they come in an order you cannot predict.',
    examples: [
      { itemId: 'fr.a2.ecole.058', note: 'Short, and it wants one word back.' },
      { itemId: 'fr.a2.ecole.066', note: 'How you know it is over.' },
    ],
  },

  span: {
    term: 'how long it took',
    title: 'pendant for the stretch, en for the finish',
    body: 'Pendant trois ans is the stretch you were in it. En trois ans is how long the whole thing took to finish. Both go with the past, because both are over, and between them they answer the second half of every question in this lesson.',
    examples: [
      { itemId: 'fr.a2.ecole.043', note: 'The stretch.' },
      { itemId: 'fr.a2.ecole.044', note: 'The finish.' },
    ],
  },

  mention: {
    term: 'a mention',
    title: 'The word on the diploma above a plain pass',
    body: 'Three of them, and they sit on the paper itself rather than in anybody memory: assez bien, bien, très bien. A French speaker hears the word and knows the range of marks behind it without being told the number.',
    examples: [
      { itemId: 'fr.a2.ecole.026', note: 'The word itself.' },
      { itemId: 'fr.a2.ecole.038', note: 'Said about your own result.' },
    ],
  },

  strength: {
    term: 'fort, moyen, nul',
    title: 'The three-point scale for a subject',
    body: 'Fort en is good at, moyen en is somewhere in the middle, and nul en is hopeless at. All three take en and none of them takes a preposition English would recognise. The middle one is the one people actually say about themselves.',
    examples: [
      { itemId: 'fr.a2.matieres.009', note: 'The top of the scale, already in the corpus.' },
      { itemId: 'fr.a2.ecole.041', note: 'The bottom, and it is not an insult.' },
    ],
  },

  repairMove: {
    term: 'the repair move',
    title: 'Six ways to say you did not catch that',
    body: `${Cap(unitRef('a2.07'))} taught these once for the whole band, ordered by what each one costs you. Rung one gives away nothing. Rung six admits the spoken channel has failed and asks to change it. Reach for the lowest one that will actually fix the problem.`,
    examples: [
      { itemId: 'fr.a2.au-restaurant.132', note: 'The cheapest thing you can say.' },
      { itemId: 'fr.a2.au-restaurant.137', note: 'The one that changes the medium.' },
    ],
  },
};
