// a2.28.l1 « Chez le médecin » — the term glossary.
//
// A term chip explains a word the lesson USES in its own copy. `MissionSection`
// caps the chips shown, so a section declaring four or more pushes its content
// down the screen. Every section here declares two or three.
//
// THE JARGON WALK. Corrections §13: the guard walks `intro` and `overview` as
// well as the sections, over a display() walk so a cardDeck card's `sub` is
// seen, and it checks the -s plural of every entry.
//
// WHAT HAS NO TERM, DELIBERATELY. There is no chip for the article
// contraction, because a1.24 owns it and this lesson never explains it. There
// is no chip for `depuis`, because a2.18 owns it and this lesson never teaches
// the tense it wants. Defining either would be re-teaching a neighbour's Owns
// through the glossary, which is the quietest way to do it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

export const MEDECIN_TERMS: Record<string, LessonTerm> = {
  construction: {
    term: 'a construction',
    title: 'Which shape the symptom takes',
    body: 'French has three and English has one. Avoir mal à a body part, avoir plus a symptom noun, or a bare verb. Nothing in the English predicts which one French will take, and you choose before the word arrives.',
    examples: [
      { itemId: 'fr.a2.symptomes.023', note: 'avoir mal à, and a1.24 owns this one.' },
      { itemId: 'fr.a2.symptomes.036', note: 'A bare verb, where English uses a noun.' },
    ],
  },
  slot: {
    term: 'a slot',
    title: 'What a symptom report is made of',
    body: 'What, where, since when, how bad. A doctor asks for them in almost any order, and knowing which slot a question wants is most of understanding the question.',
    examples: [
      { itemId: 'fr.a2.symptomes.195', note: 'This one wants where.' },
      { itemId: 'fr.a2.symptomes.196', note: 'This one wants how bad, and it is the one that stops people.' },
    ],
  },
  dosage: {
    term: 'the dosage',
    title: 'How much, how often, and for how long',
    body: 'Three separate facts said in one breath, and the frequency is the one that matters most. Trois fois par jour and toutes les trois heures sound similar in English and are not the same instruction.',
    examples: [
      { itemId: 'fr.a2.symptomes.209', note: 'Three times a day.' },
      { itemId: 'fr.a2.symptomes.210', note: 'Every three hours, which is eight times.' },
    ],
  },
  describeAround: {
    term: 'describing around',
    title: 'Saying it without the word',
    body: 'A symptom is inside you and you cannot point at it, so when the word is missing you say what it is like instead. C\'est comme une brûlure gets you further than stopping does, and a doctor will wait for it.',
    examples: [
      { itemId: 'fr.a2.symptomes.219', note: 'Like something you already have a word for.' },
      { itemId: 'fr.a2.symptomes.220', note: 'When neither of the doctor\'s two options fits.' },
    ],
  },
  rung: {
    term: 'a rung',
    title: 'One of a2.07\'s six ways to ask again',
    body: 'a2.07 authored six, ordered by what they cost you. Rung 1 gives away nothing; rung 6 asks for it in writing. Reach for the lowest one that will actually fix the problem.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.132', note: 'Rung 1, and it costs nothing.' },
      { itemId: 'fr.a2.au-restaurant.134', note: 'Rung 3, the first that names the fault.' },
    ],
  },
  ordonnance: {
    term: "l'ordonnance",
    title: 'The prescription, as a piece of paper',
    body: 'What the doctor writes and the pharmacist reads. Sur ordonnance means the pharmacist cannot hand it over without one, and it is four words long, so it goes past easily.',
    examples: [
      { itemId: 'fr.a2.symptomes.214', note: 'The counter opens with this.' },
      { itemId: 'fr.a2.symptomes.215', note: 'The refusal, and it is short.' },
    ],
  },
};
