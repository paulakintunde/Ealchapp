// a2.26.l1 « Les courses & l'argent » — the term glossary.
//
// A term chip explains a word the lesson USES in its own copy, so the mission
// body does not have to stop and define it. `MissionSection.tsx` caps the chips
// shown at CHIP_CAP and puts the rest one tap away, so a section declaring four
// or more pushes its content down the screen. Every section here declares two
// or three.
//
// THE JARGON WALK. A2-BRIEF-CORRECTIONS §13: the guard must walk `intro` and
// `overview` as well as the sections, over a display() walk so a cardDeck
// card's `sub` is seen, and it must check the -s plural of every entry. Every
// metalinguistic word this lesson uses is defined here or does not appear.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

export const COURSES_TERMS: Record<string, LessonTerm> = {
  total: {
    term: 'the total',
    title: 'The number you have to catch',
    body: 'What you owe, said once, at the speed the cashier says everything else. It arrives inside her turn rather than as an announcement, and nothing stops before it.',
    examples: [
      { itemId: 'fr.a2.courses.181', note: 'Ninety-seven euros thirty, in one run.' },
      { itemId: 'fr.a2.courses.184', note: 'The supermarket screen version.' },
    ],
  },
  frame: {
    term: 'the frame',
    title: 'The words in front of the number',
    body: 'The short run that tells you a figure is next. Ça fait, ça vous fait, ça fera and le total est de are four costumes for one move, and catching any of them buys you half a second.',
    examples: [
      { itemId: 'fr.a2.courses.182', note: 'The frame with vous inside it.' },
      { itemId: 'fr.a2.courses.183', note: 'The same move in a future tense.' },
    ],
  },
  change: {
    term: 'change',
    title: 'The second number',
    body: 'The coins and notes handed back. It is a second figure, said faster than the first, and the corpus had it only in the third person before this lesson.',
    examples: [
      { itemId: 'fr.a2.argent-quotidien.071', note: 'Two euros sixty, said to you.' },
      { itemId: 'fr.a2.argent-quotidien.076', note: 'The word printed on the receipt.' },
    ],
  },
  theirHalf: {
    term: 'her half',
    title: 'The half nobody taught you',
    body: 'Everything the person behind the counter says. This corpus holds two hundred and thirty rows about shopping and not one of them is in her voice.',
    examples: [
      { itemId: 'fr.a2.courses.168', note: 'She starts. You answer.' },
      { itemId: 'fr.a2.courses.171', note: 'No verb and no noun in it at all.' },
    ],
  },
  bareCents: {
    term: 'the bare cents',
    title: 'The number after the currency',
    body: 'In a shop the cents are said as a plain number with no word in front of them and no et joining the halves. a1.28 taught this; here it arrives at speed inside somebody else\'s sentence.',
    examples: [
      { itemId: 'fr.a2.courses.186', note: 'Six euros, then ninety-five.' },
      { itemId: 'fr.a2.courses.189', note: 'Pile means there are no cents coming.' },
    ],
  },
  container: {
    term: 'a container',
    title: 'A quantity with a shape',
    body: 'Un kilo, une tranche, un paquet, une douzaine. a1.29 owns these outright. Here they are what you have to produce when the stallholder asks how much, with a queue behind you.',
    examples: [
      { itemId: 'fr.a2.courses.003', note: 'A kilo of tomatoes, at the stall.' },
      { itemId: 'fr.a2.courses.175', note: 'The question the container answers.' },
    ],
  },
  theLabel: {
    term: 'the label',
    title: 'The number on the shelf',
    body: 'What is printed next to the goods. In France it is what you pay. In Quebec it is not, because the taxes go on at the till, and that changes what your ear should be expecting.',
    examples: [
      { itemId: 'fr.a2.quebec-et-francophonie.200', note: 'The whole of the Quebec exception.' },
    ],
  },
  rung: {
    term: 'a rung',
    title: 'A rung of the repair ladder',
    body: 'One of six ways of saying you did not catch that, ordered from the cheapest to the most explicit. a2.07 teaches them. This lesson is where the thing you missed was a number.',
    examples: [
      { itemId: 'fr.a2.au-restaurant.132', note: 'Rung 1, and it costs you nothing.' },
      { itemId: 'fr.a2.au-restaurant.134', note: 'Rung 3, the first that names the fault.' },
    ],
  },
  exactMoney: {
    term: 'the exact money',
    title: 'L\'appoint',
    body: 'The coins that come to the figure exactly, so no change is needed. Being asked for it is being asked to do arithmetic in a queue, which is why the phrase has to be recognised fast.',
    examples: [
      { itemId: 'fr.a2.argent-quotidien.077', note: 'The noun.' },
      { itemId: 'fr.a2.argent-quotidien.078', note: 'The request, and it is polite.' },
    ],
  },
};
