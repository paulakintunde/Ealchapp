// a2.34.l1 « Pronoms possessifs » — the lesson glossary.
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
// transcription. They are also HOW FIVE IMPORTED SENTENCES BECOME REACHABLE:
// every row this lesson imports from `comparaisons`, `bureau` and `questions`
// is `dictation`-only or `sentence`-only, so no deckTranche can release one and
// only a named itemId puts it on a screen (corpus §F).
//
// NO TERM USES THE WORD "possessive" MORE THAN THE PLAIN PHRASE. The house
// prefers the plain phrase (Corrections §14.5) and the ratio is guarded; these
// six definitions are where the plain phrase does most of its work.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { E } from './pronoms-possessifs-corpus.ts';

export const POSSESSIFS_PRONOMS_TERMS: Record<string, LessonTerm> = {
  /** THE OWNS. Two words where a1.17 had one, and the first of the two is the
   *  article a1.17 taught the learner to throw away. */
  twoWords: {
    term: 'two words',
    title: 'An article, and then the rest',
    body: 'mon sac is one word and a noun. le mien is two words and no noun at all. The article is the part that surprises people, because lesson 20 in A1 spent a whole lesson teaching that a possessive goes where le goes. It still does. It just brings le back with it when the noun leaves.',
    examples: [
      { itemId: E(364), note: 'one word, and the bag is named' },
      { itemId: E(365), note: 'two words, and it is not' },
      { itemId: E(372), note: 'both, in one sentence' },
    ],
  },

  /** a1.17 applied, not re-taught. LOAD-BEARING: the rule is already the
   *  learner's and this lesson only extends its reach. */
  owned: {
    term: 'the thing owned',
    title: 'It was never about you',
    body: 'A bag is masculine, so a man and a woman both say le mien about it. A suitcase is feminine, so both say la mienne. Nothing in the sentence changes for who is speaking, which is the opposite of what English does with his and hers. Lesson 20 in A1 gave you this rule and this lesson spends it on two words instead of one.',
    examples: [
      { itemId: E(372), note: 'sac is masculine, whoever owns it' },
      { itemId: E(373), note: 'valise is feminine, whoever owns it' },
      { itemId: E(378), note: 'two owners, one form, and only the English moves' },
    ],
  },

  /** TRAP 1, and it is a2.24's finding one paradigm along. */
  third: {
    term: 'his or hers',
    title: 'The one place French tells you less',
    body: 'le sien is his and it is also hers. There is no third-person form that says which, and everything up to now has taught you that French cares about gender more as you go rather than less. It is a real loss of information and it is also one less thing to get wrong. Lesson 22 in A2 met the same collapse with lui.',
    examples: [
      { itemId: E(376), note: 'the bag is his, or hers' },
      { itemId: E(378), note: 'Paul and Marie, same three words' },
      { itemId: 'fr.a2.comparaisons.018', note: "and here it is somebody's idea" },
    ],
  },

  /** TRAP 2. Three words spelled the same, and only one of them never grows. */
  threeLeurs: {
    term: 'the three leurs',
    title: 'Same four letters, three jobs',
    body: 'leur in front of a verb is lesson 22 in A2 and never takes an s. leur in front of a noun is lesson 20 in A1 and takes one when there are several things. le leur is this lesson, and its plural puts an s on both words: les leurs. Lesson 20 in A1 handed you the test and it still sorts the first two: a possessive has a thing behind it. This one has nothing behind it at all, which is the new case.',
    examples: [
      { itemId: 'fr.a2.pronoms-essentiels.240', note: 'a verb behind it, so never an s' },
      { itemId: 'fr.a2.pronoms-essentiels.259', note: 'keys behind it, and there are several' },
      { itemId: E(384), note: 'nothing behind it, and the s is on both words' },
    ],
  },

  /** TRAP 3, and the register axis a2.01 set for the level. */
  spoken: {
    term: 'what people say',
    title: 'C\'est à moi',
    body: "You will hear C'est à moi long before you hear C'est le mien, and both are correct. The à version does not change for what the thing is, which is why it is easier and why people reach for it. The two-word version is what you write and what you need when the thing has already been named. Learn both and know which is which.",
    examples: [
      { itemId: E(388), note: 'said, constantly' },
      { itemId: E(365), note: 'written, and named on the page' },
      { itemId: 'fr.a1.questions.082', note: 'published at A1, and it is a question about a pen' },
    ],
  },

  /** TRAP 4, and the one thing no surface but mcq can test. */
  accent: {
    term: 'the little hat',
    title: 'notre and nôtre',
    body: 'notre valise is our suitcase and la nôtre is ours. The accent is the only thing on the page that separates them, and it is not a sound: your ear will never catch it and neither will anything you type, because the app strips accents before it marks you. So this is the one thing in the lesson you can only ever be shown rather than tested on.',
    examples: [
      { itemId: E(386), note: 'the one with a noun behind it, and no hat' },
      { itemId: E(380), note: 'the one with nothing behind it, and a hat' },
      { itemId: 'fr.a2.comparaisons.017', note: 'both of them in one published sentence' },
    ],
  },
};
