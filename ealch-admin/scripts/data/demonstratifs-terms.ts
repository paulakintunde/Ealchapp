// a2.33.l1 « Les démonstratifs » — the lesson glossary.
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
// transcription. They are also HOW SIX IMPORTED SENTENCES BECOME REACHABLE:
// every adjective row this lesson imports is `dictation`-only or
// `sentence`-only, so no deckTranche can release one and only a named itemId
// puts it on a screen (corpus §F).
//
// NO TERM USES THE WORD "pronoun". The house prefers the plain phrase
// (Corrections §14.5) and the ratio is guarded; these six definitions are
// where the plain phrase does most of its work.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { E } from './demonstratifs-corpus.ts';

export const DEMONSTRATIFS_TERMS: Record<string, LessonTerm> = {
  /** THE OWNS, half one. */
  point: {
    term: 'points',
    title: 'When the thing is named',
    body: 'ce, cet, cette and ces all sit in front of a noun and none of them can stand without one. They say this one here rather than any old one, which is the whole of what they do. Which of the four you use is decided by the noun, never by you.',
    examples: [
      { itemId: E(337), note: 'one masculine thing' },
      { itemId: E(339), note: 'one feminine thing' },
      { itemId: E(341), note: 'more than one' },
    ],
  },

  /** THE OWNS, half two. */
  replace: {
    term: 'replaces',
    title: 'When the thing is not named',
    body: 'celui, celle, ceux and celles stand where the noun would have been. You still had to know its gender to pick one, so nothing about the choice is easier. The saving is that you do not say the word twice, which is exactly what English does with the one.',
    examples: [
      { itemId: E(338), note: 'the same book, unnamed' },
      { itemId: E(340), note: 'the same dress, unnamed' },
      { itemId: 'fr.b1.pronoms-essentiels.037', note: 'the noun once, then not again' },
    ],
  },

  /** TRAP 3, and the trapDrill. */
  tail: {
    term: 'the tail',
    title: 'Four of them cannot end a sentence',
    body: 'celui, celle, ceux and celles always have something after them: -ci, -là, de plus an owner, or qui plus what it does. English lets that one finish the sentence and French does not, so the half-second where you would stop is exactly the half-second where you add two letters.',
    examples: [
      { itemId: E(352), note: '-là, and it is two letters' },
      { itemId: E(353), note: 'de, and whose it is' },
      { itemId: 'fr.b1.pronoms-essentiels.038', note: 'qui, and what it is doing' },
    ],
  },

  /** TRAP 2, and the reason. */
  vowel: {
    term: 'cet',
    title: 'The one that only exists for the sound',
    body: 'ce becomes cet in front of a word that starts with a vowel sound, and that is the only reason it exists. It is not a different meaning and it is not a different gender: ce homme would put two vowels together and French will not have it. A silent h counts as a vowel, because the rule listens rather than reads.',
    examples: [
      { itemId: E(346), note: 'a vowel, so cet' },
      { itemId: E(347), note: 'a silent h, and still cet' },
      { itemId: E(345), note: 'a consonant, so plain ce' },
    ],
  },

  /** a1.03 applied, not re-taught. */
  gender: {
    term: 'the noun decides',
    title: 'You are spending a1.03 here',
    body: 'a1.03 taught you to store a noun with its gender and this is where you spend it. Nothing in this lesson tells you whether a bag is masculine; it tells you what to do once you know. If the gender is not in your head the eight forms are eight guesses, and that is the one thing worth going back for.',
    examples: [
      { itemId: 'fr.a2.description-personnes-objets.005', note: 'homme is masculine' },
      { itemId: 'fr.a2.description-personnes-objets.006', note: 'femme is feminine' },
      { itemId: E(343), note: 'chaussures is feminine and plural, and ces does not care which' },
    ],
  },

  /** TRAP 1. */
  sound: {
    term: 'one sound',
    title: 'cet and cette are the same noise',
    body: 'Both are said SEHT and your ear will never separate them. The difference is only on the page: cet goes with a masculine noun starting with a vowel, cette goes with any feminine noun. So this is a thing you get right by knowing the noun, and there is no version of it you can get right by listening.',
    examples: [
      { itemId: E(346), note: 'masculine, and a vowel follows' },
      { itemId: E(348), note: 'feminine, and it sounds identical' },
      { itemId: 'fr.a2.questions-du-quotidien.053', note: 'the same SEHT, one more time' },
    ],
  },
};
