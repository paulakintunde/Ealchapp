// a1.20.l1 "Les mots interrogatifs", the lesson glossary and its reframe.
//
// Split out for the same reason possessifs-terms.ts and couleurs-terms.ts are: a
// term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline. The renderer shows three chips
// and collapses the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.13's terms are facts about WHAT MOVES. a1.17's are facts about WHAT YOU
// ASK. These are facts about WHERE A WORD GOES, and there are only five of them
// because seven of the eight words in this lesson behave identically and the
// interesting content is all in the two that do not.
//
// The words « interrogatif », « pronom », « adjectif », « accord », « sujet »
// and « complément » appear nowhere below or anywhere on a learner surface.
// a1.03 taught noun gender without naming a grammatical class and a1.17 taught a
// whole paradigm the same way. `grammarIntroduced` is addressed to the
// curriculum and is better for using the precise words. The test pins it.
//
// ── The term that changed name mid-build, and why that is worth recording ──
//
// It was called `borrowedFrame` for most of this build, because a1.19 "Yes/No
// Questions" is this lesson's declared prerequisite and had NOT been built.
// With a1.19 absent the learner would have arrived with no question frame at
// all, « Où » on its own is a word rather than a question, and the plan was to
// borrow exactly one frame and say on the card that it was borrowed.
//
// A1.19 LANDED WHILE THIS FILE WAS BEING WRITTEN. Its own handover says the
// est-ce que block is built, that the learner already has the elision to
// est-ce qu', and, in as many words, that a1.20 "can introduce « Qu'est-ce que
// tu fais ? » as the block you already have with a question word bolted in
// front of it rather than as a new four-word idiom".
//
// So nothing is borrowed. The term is now about CREDITING a lesson the learner
// has done, which is what a1.09 does with a1.08, and the card names a1.19
// rather than apologising for taking something from it. The register system is
// still a1.19's and is still taught nowhere here.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it against an
 *  explicit constant rather than a figure derived from the lesson. The density
 *  validator requires it VERBATIM in at least three sections; this lesson
 *  carries it in seven, which sits inside the band a1.01 (eight), a1.09 (eight),
 *  a1.13 (eight) and a1.17 (eight) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *      Your word, then est-ce que. That always works.
 *
 *  The brief proposes it and the brief is right, which is worth saying plainly
 *  rather than reaching for something novel.
 *
 *  It is a DECISION the learner makes in the moment of speaking rather than a
 *  fact they store. It is true of every word in the lesson without exception.
 *  It converts what looks like seven grammars into seven words in one known
 *  slot, so a learner who has it can ask any question they can think of on the
 *  day they finish rather than after the next three lessons. And it chains
 *  directly to a1.19's own reframe, "Est-ce que always works", so whichever of
 *  the two lands second finds the other already agreeing with it.
 *
 *  The second half is deliberately "that always works" rather than "it always
 *  works": the thing that always works is the WHOLE MOVE, word plus frame, not
 *  the frame on its own. The frame on its own is a1.19's claim and not this
 *  lesson's to make.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "The question word goes first" is TRUE OF ALL SEVEN AND IS NOT A CHOICE. A
 *  reframe has to be something the learner decides; this is something the
 *  language decided for them. It survives as `firstWordCarries`, which is where
 *  a fact belongs.
 *
 *  "Seven words to ask anything" is the table of contents read out loud. It
 *  tells the learner what is in the lesson and nothing about what to do, and a
 *  learner can recite all seven and still not produce a question.
 *
 *  "Quel agrees" is one word out of seven and would spend the headline on the
 *  narrowest thing in the lesson. It is act 3 and the term `quelTakesANoun`.
 *
 *  "Ask the right word or get a confident wrong answer" was the runner-up and it
 *  is the better DESCRIPTION of the stakes. It was rejected for being about the
 *  consequence rather than about the move: it tells a learner why to care and
 *  not what to say. It survives as the opening scene, which is where a
 *  consequence belongs. */
export const REFRAME = 'Your word, then est-ce que. That always works.';

/** The two places the reframe needs an adjustment, named on the SAME SCREEN as
 *  the reframe itself rather than three acts later.
 *
 *  A rule a learner disproves on their own is a language they decide is
 *  arbitrary. Both of these are things they will meet within a week: every
 *  French course opens with « Qu'est-ce que c'est ? », and « Quelle heure
 *  est-il ? » is already shipped in a1.12. So both are said out loud in act 1,
 *  and the test asserts that the section carrying the reframe also carries
 *  both. */
export const REFRAME_ADJUSTMENTS = [
  'que joins the frame instead of standing in front of it, and the two become qu\'est-ce que',
  'quel brings a thing with it, so what goes in front of the frame is two words rather than one',
];

export const INTERROGATIFS_TERMS: Record<string, LessonTerm> = {
  firstWordCarries: {
    term: 'the first word carries the question',
    title: 'Everything after it can stay the same',
    body:
      'Where, when, why and how are four completely different questions in English and four completely '
      + 'different answers in French, and the sentences that ask them can be identical from the second word '
      + 'on. That is not a trick of this lesson, it is how the language is built: the word at the front says '
      + 'what you want and the rest of the sentence says what you are asking about. So you are not learning '
      + 'seven ways to build a question. You are learning seven words that all drop into one.',
    examples: [
      { itemId: 'fr.a1.questions.374', note: 'Where. The last four words of this are the same as the next one.' },
      { itemId: 'fr.a1.questions.375', note: 'When. One word changed and the whole question did.' },
    ],
  },
  frameYouAlreadyHave: {
    term: 'est-ce que, which you have',
    title: 'The block from the last lesson, doing more work',
    body:
      'You met est-ce que asking yes and no questions, and you already know the two things that matter about '
      + 'it: it goes on the front of an ordinary sentence and moves nothing inside it, and it shortens to '
      + 'est-ce qu before a vowel. Nothing about it changes here. All that happens is that a word goes in '
      + 'front of it, and the answer stops being yes or no. A question word on its own is not a question: ou '
      + 'is just the word for where until something carries it.',
    examples: [
      { itemId: 'fr.a1.questions.401', note: 'The frame with nothing in front of it, which is a yes or no question.' },
      { itemId: 'fr.a1.questions.035', note: 'The same frame carrying a question word, published long before this lesson.' },
    ],
  },
  onlyThePageKnows: {
    term: 'differences you read and never hear',
    title: 'Your ear is not the problem here',
    body:
      'Two things in this lesson are invisible to listening and both of them matter. Ou and ou with an '
      + 'accent are one sound: one means or and the other means where, and only the mark tells you which. '
      + 'And the four shapes of quel are one sound as well, all four of them, so the ending you write is '
      + 'never the ending you say. This is the same idea the colours lesson called endings you write and '
      + 'never say, arriving somewhere it changes the meaning rather than just the spelling. If you find '
      + 'yourself listening harder, stop. There is nothing in the recording to find.',
    examples: [
      { itemId: 'fr.a1.questions.393', note: 'Where, with the accent on it.' },
      { itemId: 'fr.a1.questions.394', note: 'Or, without one. Same sound, and the accent is the whole difference.' },
    ],
  },
  quelTakesANoun: {
    term: 'quel leans on a thing',
    title: 'The one that is not a question word like the others',
    body:
      'Six of these words stand on their own and never change. Quel does neither. It has to have a thing '
      + 'straight behind it, and it takes the shape of that thing exactly the way a colour does: quel train, '
      + 'quelle valise, quels trains, quelles valises. You have done this three times already, with colours, '
      + 'with the six adjectives that come first, and with where a describing word sits. This is the fourth, '
      + 'and it is the easiest of the four, because all four shapes are pronounced identically.',
    examples: [
      { itemId: 'fr.a1.questions.397', note: 'A train is the un kind, so quel.' },
      { itemId: 'fr.a1.questions.398', note: 'A valise is the une kind, so quelle. Out loud these two are the same word.' },
    ],
  },
  deAfterCombien: {
    term: 'combien brings de with it',
    title: 'And de gets cut in front of a vowel',
    body:
      'Combien on its own asks how much something costs or weighs. The moment you name the thing you are '
      + 'counting, de arrives between them: combien de valises, combien de temps. And when the thing starts '
      + 'with a vowel, de loses its own vowel and becomes d apostrophe, which is the fifth time you have '
      + 'watched French refuse to let two vowels meet. Le became l apostrophe, ma became mon, ne became n '
      + 'apostrophe, and est-ce que becomes est-ce qu. One pressure, five rules, and now you only have to '
      + 'remember the pressure.',
    examples: [
      { itemId: 'fr.a1.questions.395', note: 'A consonant follows, so de keeps its vowel.' },
      { itemId: 'fr.a1.questions.396', note: 'A vowel follows, so de loses it. The same repair as l\'ami.' },
    ],
  },
};
