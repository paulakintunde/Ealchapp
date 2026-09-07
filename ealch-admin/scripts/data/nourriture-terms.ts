// a1.23.l1 "La nourriture", the lesson glossary and its reframe.
//
// Split out for the same reason pays-terms.ts and couleurs-terms.ts are: a term
// is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline. The renderer shows three chips
// and collapses the rest, so no section here names more than three.
//
// ── No grammar jargon ──────────────────────────────────────────────────────
//
// « article partitif », « article défini », « masculin », « féminin »,
// « élision » and « complément » appear nowhere below or anywhere on a learner
// surface. a1.03 taught gender as "the un kind and the une kind", a1.04 taught
// le/la/les as "the little word in front", and a1.29 taught du/de la/des as
// "some of it". This lesson keeps all three and adds nothing new to the
// vocabulary of grammar, because it introduces no new grammar: it introduces
// sixty nouns and one CHOICE between two systems the learner already owns.
//
// `grammarIntroduced` is addressed to the curriculum and uses the precise words.
// The test pins the split.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight, inside the band a1.01
 *  (eight), a1.09 (eight), a1.13 (eight) and a1.17 (eight) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *      Aimer takes the whole thing. Manger takes a part of it.
 *
 *  Every article a food word can take is already taught. a1.03 gave gender,
 *  a1.04 gave le/la/les, a1.11 gave un/une/des, and a1.29 (this lesson's direct
 *  prerequisite) gave du/de la/des. A food lesson that teaches articles is the
 *  fifth lesson running to teach articles, and a learner reads that as the app
 *  running out of ideas.
 *
 *  What is genuinely unowned is the SECOND clause of this unit's own canDo,
 *  "say what they like and eat", and it is unowned because it needs two columns
 *  and no shipped lesson has had both:
 *
 *      J'aime le café.      the whole category
 *      Je bois du café.     some of it, now
 *
 *  The reframe is a choice the learner makes inside a real sentence, it is true
 *  of every verb in both columns rather than of one section, and it is
 *  verifiable at the next meal. It is also a TRAP DEFUSAL: a learner who has
 *  just finished a1.29 has spent a whole lesson being told that uncounted food
 *  takes `du`, and will say « j'aime du pain » on the first try. The lesson
 *  immediately upstream creates the error this line prevents.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "Learn the food with its article" is a1.22's reframe with one noun swapped
 *  ("Learn the country with its article. Everything else follows."), and it is
 *  already true of the corpus, which stores every noun articled. It restates
 *  the storage format rather than naming a decision.
 *
 *  "Du is some of it" is a1.29's own reframe. Repeating the prerequisite's line
 *  is how two lessons quietly become one.
 *
 *  "French names food by gender" is a rule about the language, not a choice.
 *  A learner can agree with it completely and still not know what to say next.
 *  It is a `term`, and it is one, below.
 *
 *  "The article is part of the word" was the runner-up and survives as the
 *  title of act 1. It was rejected as the headline because it is a1.03's habit
 *  restated, and because it says nothing at all about the half of the lesson
 *  the learner actually gets wrong. */
export const REFRAME = 'Aimer takes the whole thing. Manger takes a part of it.';

/** How many sections carry the reframe verbatim. An EXPLICIT constant: a count
 *  derived from the lesson compares the content to itself and passes on any
 *  rewording. Invariant §5. */
export const REFRAME_COUNT = 8;

export const NOURRITURE_TERMS: Record<string, LessonTerm> = {
  articleIsPartOfIt: {
    term: 'the article is part of the word',
    title: 'Store le pain, never pain',
    body:
      'Food words in French are almost never said bare. It is le pain, la pomme, l\'eau, and the little word '
      + 'in front is not decoration. You met this habit with noun gender and again with countries, and it '
      + 'arrives here on the words you will use most often. Nothing about a tomato tells you it is the la '
      + 'kind and nothing about bread tells you it is the le kind. The corpus stores every one of these sixty '
      + 'words with its article for exactly this reason, and the card you are shown is the whole word.',
    examples: [
      { itemId: 'fr.a1.cuisine.002', note: 'le pain, stored the way it is used.' },
      { itemId: 'fr.a1.marche.045', note: 'la pomme, and the article is the only difference between them.' },
    ],
  },
  theApostropheHides: {
    term: 'l\' hides which kind it is',
    title: 'l\'eau and l\'oignon look identical and are not',
    body:
      'In front of a vowel the little word shrinks to l\', and once it has shrunk you cannot see which kind '
      + 'the word is. L\'eau is the la kind. L\'oignon is the le kind. L\'huile is the la kind and l\'ail is '
      + 'the le kind, and nothing on the card or in the sound tells you which is which. These are the words '
      + 'you will still be getting wrong in a month, so they are worth learning as a small list rather than '
      + 'meeting one at a time. When you learn one, learn what it turns into when something follows it.',
    examples: [
      { itemId: 'fr.a1.cuisine.010', note: 'l\'eau is the la kind, and you cannot hear it.' },
      { itemId: 'fr.a1.cuisine.034', note: 'l\'oignon is the le kind, and you cannot hear that either.' },
    ],
  },
  wholeThing: {
    term: 'the whole thing',
    title: 'What you like is all of it, always',
    body:
      'When you say you like something, you are not talking about the piece in front of you. You are talking '
      + 'about bread, everywhere, as an idea. French marks that with the ordinary little word: j\'aime le '
      + 'pain, j\'adore le fromage, je déteste le poisson. This catches almost everybody, because the lesson '
      + 'just before this one spent its whole length teaching you that uncounted food takes du, and that rule '
      + 'is right and does not reach this far. After aimer, adorer, détester and préférer, it is le, la or '
      + 'les, every time, with no exceptions to remember.',
    examples: [
      { itemId: 'fr.a1.cafe.149', note: 'Coffee as a whole idea, not a cup of it.' },
      { itemId: 'fr.a1.cafe.150', note: 'And it survives a negative: still le, not de.' },
    ],
  },
  aPartOfIt: {
    term: 'a part of it',
    title: 'What you are eating is some of it',
    body:
      'Eating and drinking are different. You are not consuming bread as an idea, you are having some, so the '
      + 'word in front changes to the one you already know: je mange du pain, je bois de l\'eau, je prends de '
      + 'la soupe. This is not a new rule and there is nothing to learn here that you have not already been '
      + 'taught. The only new thing is that it is a CHOICE, and that the verb in front is what makes it. Same '
      + 'noun, different verb, different little word.',
    examples: [
      { itemId: 'fr.a1.cuisine.268', note: 'The same coffee, now a quantity of it.' },
      { itemId: 'fr.a1.cuisine.264', note: 'And in a negative it collapses to de, which aimer never does.' },
    ],
  },
  noSingular: {
    term: 'words that only come in plural',
    title: 'les pâtes, les frites, les céréales',
    body:
      'A few foods are plural in French and have no everyday singular. You would not order une pâte or une '
      + 'frite any more than you would ask for a spaghetti in English. They take les, they take des when you '
      + 'are having some, and the words behind them agree. There are only a handful and you have met most of '
      + 'them already, so this is a thing to recognise rather than a thing to study.',
    examples: [
      { itemId: 'fr.a1.cuisine.018', note: 'les pâtes, plural in French and singular in English.' },
      { itemId: 'fr.a1.au-restaurant.069', note: 'les frites, the same shape.' },
    ],
  },
};

/** Which term chips belong on which act. Kept here so a section cannot name a
 *  term this file does not define, and so no section names more than the three
 *  the renderer will actually draw. */
export const TERMS_BY_ACT: Record<number, string[]> = {
  1: ['articleIsPartOfIt', 'theApostropheHides'],
  2: ['articleIsPartOfIt', 'noSingular'],
  3: ['wholeThing'],
  4: ['aPartOfIt'],
  5: ['wholeThing', 'aPartOfIt'],
  6: [],
};
