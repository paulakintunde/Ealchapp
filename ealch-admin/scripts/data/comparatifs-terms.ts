// a2.08.l1 « Comparatifs & superlatifs » — the lesson glossary.
//
// Defined once, surfaced wherever used. A section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Every key here is short for that reason, and every one is
// surfaced by at least one section: an unsurfaced term is a definition nobody
// can reach, which the test asserts against.
//
// `examples` resolve against the corpus by itemId, so a term never restates a
// transcription. They are also HOW SEVEN IMPORTED SENTENCES BECOME REACHABLE:
// every published sentence in `comparaisons` is `dictation`-only or
// `sentence`-only, so no deckTranche can release one and only a named itemId
// puts it on a screen (corpus §G).
//
// NO TERM USES THE WORD "adjective". The house prefers the plain phrase and
// the ratio is guarded; these six definitions are where the plain phrase does
// most of its work.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { E } from './comparatifs-corpus.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const COMPARATIFS_TERMS: Record<string, LessonTerm> = {
  /** THE OWNS, defined once. */
  frame: {
    term: 'frame',
    title: 'The part that never moves',
    body: 'Something, then a middle word, then a describing word, then que, then the thing you are comparing it to. Those five slots stay where they are for every comparison you will ever make in French. You are never building a new sentence shape, only dropping different words into the same one.',
    examples: [
      { itemId: E(133), note: 'more' },
      { itemId: E(134), note: 'less' },
      { itemId: E(135), note: 'the same' },
    ],
  },

  /** The middle word, which is the whole of the choice. */
  middle: {
    term: 'middle',
    title: 'The one word that changes',
    body: 'plus, moins or aussi. Three words, and picking one of them is the entire decision. Everything before it and everything after it stays exactly as it was, which is why you can do this at speed with a describing word you have only just learned.',
    examples: [
      { itemId: E(1), note: 'plus, in the corpus long before this lesson' },
      { itemId: E(4), note: 'aussi, and the describing word agrees' },
    ],
  },

  /** Trap 3, and it is the one that reads as finished and is not. */
  than: {
    term: 'than',
    title: 'que, and it is not optional',
    // CORRECTED BY THE AUDIT. The first version said Il est plus grand. « means
    // he is tall, not that he is taller than anybody », which is not something
    // the sentence can mean: plus is comparative and nothing overrides that. The
    // corpus row E(136) glosses itself « He is taller. » and this definition was
    // contradicting it. What is actually true, and is the teachable thing, is
    // that the second term hangs off que and off nothing else.
    body: 'que is what the second thing hangs off, and nothing else does that job: you can never put it straight after the describing word. Il est plus grand. on its own is grammatical and unfinished, exactly the way taller is in English. Say it to somebody who does not already know what you are comparing to, and the first thing they ask is plus grand que qui.',
    examples: [
      { itemId: E(136), note: 'grammatical, and half a sentence' },
      { itemId: E(133), note: 'the same sentence, finished' },
    ],
  },

  /** Trap 2. The article is where the superlative lives. */
  most: {
    term: 'most',
    title: 'The article does the work',
    body: 'Put le, la or les in front of the same frame and you have gone from more than that one to more than all of them. Nothing else changes. The article is also what carries the agreement, so it is the word to pick first and the word that decides the ending.',
    examples: [
      { itemId: E(145), note: 'bigger than the other one' },
      { itemId: E(141), note: 'the biggest of the lot' },
      { itemId: E(37), note: 'and it works for the worst as well' },
    ],
  },

  /** a2.03 applied, not re-taught. */
  agree: {
    term: 'agree',
    title: 'The ending still follows the noun',
    body: `${Cap(unitRef('a2.03'))} taught that a describing word matches what it describes. Nothing about the frame suspends that. le plus grand jardin, la plus grande maison, les plus grands jardins, les plus grandes maisons: four spellings, and two of them sound identical, so this is a thing you can only get right in writing.`,
    examples: [
      { itemId: E(142), note: 'one house' },
      { itemId: E(144), note: 'several houses' },
      { itemId: E(35), note: 'and meilleure agrees the same way' },
    ],
  },

  /** Trap 1, and the trapDrill. */
  better: {
    term: 'better',
    title: 'Two words for one English one',
    body: 'English has one better and French splits it. meilleur goes with a noun and behaves like any describing word, with four endings. mieux goes with a verb and never changes. The corpus says mieux about six and a half times as often as meilleur, so if you can only keep one, keep that one.',
    examples: [
      { itemId: E(146), note: 'with est: meilleur' },
      { itemId: E(66), note: 'with travaille: mieux' },
      { itemId: E(92), note: 'with chante, and the article in front: le mieux' },
    ],
  },
};
