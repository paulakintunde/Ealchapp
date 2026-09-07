// a2.29.l1 « À l'hôtel » — the term glossary.
//
// A term chip explains a word the lesson USES in its own copy. `MissionSection`
// caps the chips shown at THREE, so a section declaring four or more pushes its
// content down the screen. Every section here declares two or three.
//
// THE JARGON WALK. Corrections §9 and §13: the guard walks `intro` and
// `overview` as well as the sections, over a display() pass so a cardDeck
// card's `sub` is seen, and it checks the -s plural of every entry. These
// bodies are the likeliest place in the build for the banned word, because
// every one of them is about a politeness form and the technical name for that
// family is one keystroke away.
//
// WHAT HAS NO TERM, DELIBERATELY:
//
//   * no chip for `pourriez-vous`, `j'aimerais` or `ce serait possible de`.
//     They are taught as WHOLE PIECES and a chip that defines one invites the
//     definition to name the family. The softener deck shows them; nothing
//     analyses them.
//   * no chip for `depuis`. a2.18 owns it and this lesson never teaches the
//     tense it wants.
//   * no chip for the article contraction in `parler au responsable`. a1.04
//     and a1.21 own it; this lesson uses `au` and never explains it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

export const HOTEL_TERMS: Record<string, LessonTerm> = {
  rung: {
    term: 'a rung',
    title: 'One step on the ladder',
    body: 'Three of them, and they go in order. Ask once, softly. Say it again, without the person. Ask for the person who can fix it. Most people have only the bottom one and the top one, and the whole of this lesson is the middle.',
    examples: [
      { itemId: 'fr.a2.hebergement.074', note: 'Rung 1, and it costs you nothing.' },
      { itemId: 'fr.a2.hebergement.082', note: 'Rung 2, which is the one nobody taught you.' },
    ],
  },
  move: {
    term: 'a move',
    title: 'What you are actually doing',
    body: 'Asking for a thing, reporting a fault, or getting somebody else involved. Each one can be made at any of the three rungs, and choosing the rung is a separate decision from choosing the move.',
    examples: [
      { itemId: 'fr.a2.hebergement.080', note: 'Asking for a thing.' },
      { itemId: 'fr.a2.hebergement.098', note: 'Reporting a fault.' },
    ],
  },
  impersonal: {
    term: 'taking the person out',
    title: 'The room is the subject, not the human',
    body: 'French complaints put the fault where it happened rather than on the person in front of you. La douche ne marche pas is a fact about a shower. Vous devez réparer la douche is an instruction to a stranger, and it lands like one.',
    examples: [
      { itemId: 'fr.a2.hebergement.076', note: 'The problem has a place, and no owner.' },
      { itemId: 'fr.a2.hebergement.085', note: 'Still no owner, one rung further up.' },
    ],
  },
  softener: {
    term: 'a softener',
    title: 'The words you put in front',
    body: 'Short pieces you learn whole and never take apart, the way you learned bonjour. They go at the front of a request and they buy you room. You get five of them here and you are not expected to build any of them yourself.',
    examples: [
      { itemId: 'fr.a2.hebergement.130', note: 'The one this course had never published.' },
      { itemId: 'fr.a2.expressions-frequentes.072', note: 'This one you have already met, well before now.' },
    ],
  },
  brake: {
    term: 'the brake',
    title: 'Why you do not start at the top',
    body: 'Rung 3 works once. Ask for the manager on your first sentence and you have spent the only move you had, in front of somebody who would have fixed it anyway. Start low, and keep the top rung for when the bottom two have failed.',
    examples: [
      { itemId: 'fr.a2.hebergement.132', note: 'What you say instead, when you have only asked once.' },
      { itemId: 'fr.a2.hebergement.091', note: 'And this is what you keep in reserve.' },
    ],
  },
  desk: {
    term: 'the desk',
    title: 'The half of the conversation you never hear',
    body: 'The person behind the counter speaks in fixed formulas with no je in them, delivered fast because they say them forty times a day. They are not hard French. They are hard because they arrive whole and you were listening for words.',
    examples: [
      { itemId: 'fr.a2.hebergement.112', note: 'A formula, and the numbers are the only part that changes.' },
      { itemId: 'fr.a2.hebergement.117', note: 'The refusal, and it is short.' },
    ],
  },
  repairMove: {
    term: 'asking again',
    title: `${Cap(unitRef('a2.07', 'a2'))}'s six ways to say you did not catch it`,
    body: `${Cap(unitRef('a2.07'))} authored six, ordered by what each one costs you. Rung 1 gives away nothing; the last one concedes that speaking has failed and asks for it in writing. Reach for the lowest one that will actually fix the problem.`,
    examples: [
      { itemId: 'fr.a2.au-restaurant.132', note: 'The cheapest thing you can say.' },
      { itemId: 'fr.a2.au-restaurant.134', note: 'The first one that names what went wrong.' },
    ],
  },
  quebec: {
    term: 'le déjeuner',
    title: 'The word that moves one meal along',
    body: 'In France it is lunch. In Quebec it is breakfast, and the evening meal is le souper. The sign on the dining room door is the same word either side of the Atlantic and it does not mean the same sitting.',
    examples: [
      { itemId: 'fr.a2.quebec-et-francophonie.121', note: 'A Quebec morning, with the maple syrup to prove it.' },
    ],
  },
};
