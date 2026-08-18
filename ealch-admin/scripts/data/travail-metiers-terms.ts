// a2.30.l1 « Le travail & les métiers » — the term glossary.
//
// A term chip explains a word the lesson USES in its own copy. `MissionSection`
// caps the chips shown at THREE, so a section declaring four or more pushes its
// content down the screen. Every section here declares two or three.
//
// THE JARGON WALK. Corrections §9 and §13: the guard walks `intro` and
// `overview` as well as the sections, over a display() pass so a cardDeck
// card's `sub` is seen, and it checks the -s plural of every entry.
//
// These bodies are the likeliest place in this build for a banned word, for a
// specific reason: this unit is about the SHAPE of an answer and about
// FEMININE FORMS, and the technical name for each of those families is one
// keystroke away. "Zero article", "copula", "epicene" and "agentive suffix" are
// all in the JARGON list in the corpus file and none of them appears here.
//
// WHAT HAS NO TERM, DELIBERATELY:
//
//   * no chip for the missing `un`. a1.06 owns that rule and this lesson only
//     quotes it. A chip defining it would BE the teaching this unit is not
//     allowed to do, and doctrine §B.5 would leave the lesson owning nothing.
//   * no chip for `depuis`. a2.18 owns it, this lesson uses it, and a chip
//     would have to name the tense it forces — which is a2.18's s07-tense.
//   * no chip for a rung name. a2.29 owns the ladder; the three names are
//     quoted verbatim in s17-register and nothing here re-explains them.
//   * no chip for `parcours` as an exam term. The word is glossed where it is
//     used. A chip calling it a TEF warm-up would be a claim about delivery
//     this lesson is forbidden to make.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

export const TRAVAIL_TERMS: Record<string, LessonTerm> = {
  move: {
    term: 'a move',
    title: 'One of the four things your answer does',
    body: 'Four of them, and they go in order. What you are, for how long, what that means on a normal day, and a question back. Most people have the first one and stop, which is why the room goes quiet.',
    examples: [
      { itemId: 'fr.a2.metiers.020', note: 'Move 1, and on its own it is not an answer.' },
      { itemId: 'fr.a2.metiers.032', note: 'Move 4, which is the one nobody teaches.' },
    ],
  },
  anchor: {
    term: 'the anchor',
    title: 'The sentence everything else hangs off',
    body: `It names the job and nothing else. It is short on purpose, and it is finished in under two seconds, which is exactly why it cannot be the whole turn. ${Cap(unitRef('a1.06'))} taught you how to say it. This lesson is about what comes next.`,
    examples: [
      { itemId: 'fr.a2.metiers.021', note: 'Two words after the verb, and then a decision.' },
      { itemId: 'fr.a2.metiers.023', note: 'Same shape, different kitchen.' },
    ],
  },
  handback: {
    term: 'the hand-back',
    title: 'Turning an answer into a conversation',
    body: 'A short question at the end that puts the turn back on the other person. Without it you have made a statement and they have to think of something. With it you have started something that runs by itself.',
    examples: [
      { itemId: 'fr.a2.metiers.032', note: 'Four words, and the other person is now talking.' },
      { itemId: 'fr.a2.metiers.045', note: 'The interviewer doing it to you, at the end.' },
    ],
  },
  detail: {
    term: 'the detail',
    title: 'What you actually do between nine and five',
    body: 'Not the job title again in longer words. One concrete thing you handle, manage, or are responsible for. This is the half of the answer that tells somebody whether they can picture your day.',
    examples: [
      { itemId: 'fr.a2.metiers.028', note: 'A thing you can point at.' },
      { itemId: 'fr.a2.metiers.030', note: 'And a thing you are answerable for.' },
    ],
  },
  pair: {
    term: 'a pair',
    title: 'The same job, said about a man and about a woman',
    body: 'Most job words in French have two written forms and you only ever need one of them about yourself. Where the corpus already had a form, this lesson uses that one rather than inventing a rival.',
    examples: [
      { itemId: 'fr.a1.metiers.248', note: 'This one the course already had.' },
      { itemId: 'fr.a2.metiers.075', note: 'And this one it did not, so it was built the ordinary way.' },
    ],
  },
  posting: {
    term: 'an offre',
    title: 'What a job advert is made of',
    body: 'A handful of fixed headings that repeat across every advert in the language. Once you can find the hours, the contract and the start date, you can read one you have never seen in about thirty seconds.',
    examples: [
      { itemId: 'fr.a2.metiers.006', note: 'The thing itself.' },
      { itemId: 'fr.a1.metiers.139', note: 'And the heading everybody reads first.' },
    ],
  },
  repairMove: {
    term: 'asking again',
    title: `${Cap(unitRef('a2.07', 'a2'))}'s six ways to say you did not catch it`,
    body: `${Cap(unitRef('a2.07'))} authored six, ordered by what each one costs you. The cheapest gives away nothing; the last one concedes that speaking has failed and asks for it in writing. Reach for the lowest one that will actually fix the problem.`,
    examples: [
      { itemId: 'fr.a2.au-restaurant.132', note: 'The cheapest thing you can say.' },
      { itemId: 'fr.a2.au-restaurant.134', note: 'The first one that names what went wrong.' },
    ],
  },
  poste: {
    term: 'un poste',
    title: 'One word, three completely different things',
    body: 'A position at work, a television set, and a police station. The work sense is the one this lesson means and it is the one you will meet in an advert. Nothing about the word tells you which; the sentence around it does.',
    examples: [
      { itemId: 'fr.a1.metiers.136', note: 'The work sense, which is the one you want.' },
      { itemId: 'fr.a2.metiers.046', note: 'And an interviewer using it about you.' },
    ],
  },
};
