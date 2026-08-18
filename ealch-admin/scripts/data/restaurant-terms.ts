// a2.07.l1 « Au restaurant » — the term glossary.
//
// A term chip explains a word the lesson USES in its own copy, so the mission
// body does not have to stop and define it. `MissionSection.tsx` caps the chips
// shown at CHIP_CAP and puts the rest one tap away, so a section declaring four
// or more pushes its content down the screen; keep a section's `terms` to three
// where the meaning survives it.
//
// THE JARGON WALK. A2-BRIEF-CORRECTIONS §13: the guard must walk `intro` and
// `overview` as well as the sections, and it must run over a display() walk so
// a cardDeck card's `sub` is seen. It must also check the -s plural of every
// entry. Every metalinguistic word this lesson uses is defined here or does not
// appear.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const RESTAURANT_TERMS: Record<string, LessonTerm> = {
  stage: {
    term: 'stage',
    title: 'A stage of the encounter',
    body: 'A restaurant meal runs in a fixed order and each step has its own question. There are eight of them, from the greeting to the bill, and they arrive in the same order almost every time.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.138', note: 'Stage 1, the greeting.' },
      { itemId: 'fr.a2.au-restaurant.147', note: 'Stage 4, the order.' },
      { itemId: 'fr.a2.au-restaurant.161', note: 'Stage 8, the bill.' },
    ],
  },
  hisHalf: {
    term: 'his half',
    title: 'The half you did not learn',
    body: 'Everything the waiter says. You have been taught how to order for twenty-three units; almost nothing has been said about what gets said to you.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.143', note: 'You are being asked, not asking.' },
      { itemId: 'fr.a2.au-restaurant.146', note: 'Two words, no verb.' },
    ],
  },
  rung: {
    term: 'rung',
    title: 'A rung of the repair ladder',
    body: 'Six ways of saying you did not catch that, ordered from the cheapest to the most explicit. Rung 1 costs you nothing. Rung 6 admits the spoken word has failed and asks for it in writing.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.132', note: 'Rung 1, one word.' },
      { itemId: 'fr.a2.au-restaurant.135', note: 'Rung 4, and it says so outright.' },
      { itemId: 'fr.a2.au-restaurant.137', note: 'Rung 6, the last one.' },
    ],
  },
  faceCost: {
    term: 'face cost',
    title: 'What a rung costs you',
    body: 'How much you give away by saying it. Pardon gives away nothing. Je n\'ai pas bien compris says plainly that you did not follow. Neither is rude; one is just more expensive than the other.',
  },
  gradient: {
    term: 'gradient',
    title: 'The ordering gradient',
    body: 'Five ways of saying what you want, from the softest to the flattest. All five are ordinary French. Only one of them, je veux, is the wrong one at a table.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.178', note: 'The softest.' },
      { itemId: 'fr.a2.au-restaurant.179', note: 'The flattest, and still polite.' },
    ],
  },
  secondPart: {
    term: 'second part',
    title: 'The answer that fits',
    body: 'A question and its answer come as a pair. When somebody asks « Et comme boisson ? » a French speaker does not say a sentence; they say a drink. Knowing the pair is faster than building a reply.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.143', note: 'The question.' },
      { itemId: 'fr.a1.au-restaurant.096', note: 'The whole answer.' },
    ],
  },
  deviation: {
    term: 'deviation',
    title: 'When the script breaks',
    body: 'The moment the encounter stops following the order you rehearsed. Something is off the menu, something is wrong, and the sentence you prepared no longer fits.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.168', note: 'The line that breaks it.' },
      { itemId: 'fr.a2.au-restaurant.170', note: 'Handing the choice back.' },
    ],
  },
  handBack: {
    term: 'hand back',
    title: 'Handing the choice back',
    body: 'When you cannot choose, make him choose. It keeps the turn moving and it is what a French speaker does too.',
    examples: [{ itemId: 'fr.a2.au-restaurant.170', note: 'The whole move, in one sentence.' }],
  },
  someOfIt: {
    term: 'some of it',
    title: 'Du, de la, de l\'',
    body: `${Cap(unitRef('a1.29'))} settled this: un is one of them, du is some of it. This lesson only asks you to run it at the moment of ordering, where the two are a syllable apart and mean different things.`,
    examples: [
      { itemId: 'fr.a1.au-restaurant.184', note: 'Some of it.' },
      { itemId: 'fr.a1.au-restaurant.185', note: 'And again, with bread.' },
    ],
  },
  binary: {
    term: 'binary',
    title: 'A two-way question',
    body: 'Plate ou gazeuse ? En terrasse ou à l\'intérieur ? Two options and no frame around them. They are the easiest questions to answer and the easiest to miss, because there is no verb to hold on to.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.146', note: 'Two words.' },
      { itemId: 'fr.a2.au-restaurant.140', note: 'Four, and still no verb you need.' },
    ],
  },
  chunk: {
    term: 'chunk',
    title: 'A whole phrase, learned whole',
    body: 'Some phrases are worth recognising without taking them apart. « Il n\'y en a plus » is one of them: you meet it as a single sound that means there is none left, and the pieces inside it are somebody else\'s lesson.',
    examples: [{ itemId: 'fr.a2.au-restaurant.168', note: 'Recognise it whole.' }],
  },
};
