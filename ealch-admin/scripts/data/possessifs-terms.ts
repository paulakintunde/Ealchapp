// a1.17.l1 "Les adjectifs possessifs", the lesson glossary and its reframe.
//
// Split out for the same reason couleurs-terms.ts and mois-terms.ts are: a term
// is defined ONCE and surfaced at every point of use through a section's `terms`
// chips, so a learner meets the same explanation wherever the idea turns up and
// no card carries the definition inline. The renderer shows three chips and
// collapses the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.13's terms are facts about WHAT MOVES. These are facts about WHAT YOU ASK.
// Every one of them is a question the learner has to answer in the half second
// before a noun comes out of their mouth, and the answer to all five is a
// property of the THING rather than of the speaker. That is the only question
// this lesson asks that the grid does not answer by itself.
//
// The words « adjectif », « possessif », « accord », « masculin », « féminin »
// and « déterminant » appear nowhere below or anywhere on a learner surface.
// a1.03 taught noun gender without once naming a grammatical class, a1.04
// taught le/la/les as "the little word in front", and a learner arriving here
// has no such label to cash. `grammarIntroduced` is addressed to the curriculum
// and is better for using the precise words. The test pins it.
//
// ── The one term that is really a warning to the author ────────────────────
//
// `theOtherSon` exists because `son` also means "sound" and this app has an
// entire track called Sons. For the LEARNER it is one card and a small relief,
// because they have already met `le son` in a1's cinema vocabulary and will
// wonder. For anyone working on this corpus it is a standing hazard: a bare
// search for `son` returns the phonetics vocabulary of eleven lessons, and every
// count in possessifs-corpus.ts was taken on the possessive-plus-noun shape for
// that reason. The term is the learner-facing half of a fact the corpus header
// carries the other half of.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight of them, which sits inside
 *  the band a1.01 (eight), a1.09 (eight) and a1.13 (eight) set. The batch's own
 *  count is higher than eight because `strings()` also walks the `reframe` field
 *  itself and the quiz `why` lines that quote it; the constant it asserts
 *  against is that total, not the section count.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The brief proposes it and the brief is right, which is worth saying plainly
 *  rather than reaching for something novel.
 *
 *      Ask what is owned, not who owns it.
 *
 *  It is a DECISION the learner makes in the moment of speaking rather than a
 *  fact they store. It resolves every one of the eighteen cells in the grid,
 *  including the nine where the answer is "it does not matter". It is verifiable
 *  in the next sentence they say. And it is the exact inversion of the English
 *  habit that causes the error, which is what makes it worth eight repetitions:
 *  an English speaker picks the possessive from the owner's sex, produces
 *  « sa père » for her father, and is not corrected because everyone understood.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "Possessives agree with the noun" is the same fact stated as grammar rather
 *  than as a choice. It is true, it is what a textbook says, and a learner
 *  cannot ACT on it mid-sentence: agreeing with something is a description of
 *  what has already happened, not an instruction for what to do next. It is also
 *  three words of jargon in a lesson that is allowed none.
 *
 *  "Six owners, three forms" is the table rather than the lesson. A learner can
 *  read the table in ninety seconds and still get every sentence wrong, because
 *  the table does not tell them which column to enter. That gap IS this lesson.
 *
 *  "Mon before a vowel" is one rule out of three and would spend the headline on
 *  the narrowest of them. It is a term instead. See `beforeAVowel`.
 *
 *  "French marks the thing, English marks the owner" was the runner-up and it is
 *  the better DESCRIPTION of the two. It was rejected for being about the two
 *  languages rather than about the learner: it tells them what is happening and
 *  not what to do. It survives as the opening act's title and as the first card
 *  of `whatIsOwned`, which is where a description belongs. */
export const REFRAME = 'Ask what is owned, not who owns it.';

export const POSSESSIFS_TERMS: Record<string, LessonTerm> = {
  whatIsOwned: {
    term: 'the thing decides, not the owner',
    title: 'English marks the owner. French marks the thing.',
    body:
      'In English the word changes with the person: his bag, her bag. In French it changes with the bag. '
      + 'Son sac is his bag and it is also her bag, and nothing in those two words tells you which. That is '
      + 'not French being vague, it is French answering a different question. English asks who, French asks '
      + 'what. So the moment before you speak, look at the thing you are about to name: is it the un kind or '
      + 'the une kind, and is there one of it or several? Those two answers pick the word for you, and who '
      + 'owns it never comes into it.',
    examples: [
      { itemId: 'fr.a1.famille.276', note: 'A man is talking, and the word is sa because a sister is the une kind.' },
      { itemId: 'fr.a1.famille.277', note: 'A woman is talking, and the word has not moved. Only the English had to.' },
    ],
  },
  beforeAVowel: {
    term: 'mon in front of a vowel',
    title: 'Why mon amie is not a mistake',
    body:
      'Ma amie is not French. Two vowel sounds meeting head on is something the language will not do, and it '
      + 'has two ways out of it. You have seen the first one twice already: la amie becomes l\'amie, and the '
      + 'little word in front gets cut short. This is the second way, and instead of cutting anything it '
      + 'swaps the word: ma becomes mon, ta becomes ton, sa becomes son. The thing has not changed kind. Une '
      + 'amie is still the une kind and everything else about her still agrees that way. Only this one word '
      + 'borrowed the other shape, and only to keep two vowels apart. It happens before a vowel and before a '
      + 'silent h, and it reaches mon, ton and son and nothing else.',
    examples: [
      { itemId: 'fr.a1.famille.279', note: 'Two things of the same kind, one taking ma and one taking mon.' },
      { itemId: 'fr.sons.liaisons.081', note: 'The same swap on a word the learner met in the liaison lesson.' },
    ],
  },
  oneOrSeveral: {
    term: 'leur against leurs',
    title: 'The s counts the things, not the people',
    body:
      'By the time you reach leur there are already several owners, every time, without exception: it is the '
      + 'word for a group. So the s on the end cannot be about them, because they were already plural before '
      + 'it arrived. It counts what is owned. Leur fille is one daughter belonging to several people. Leurs '
      + 'filles is more than one daughter belonging to the same several people. This is the same question the '
      + 'whole lesson asks, arriving in the one place where it looks like a different question. Out loud the '
      + 'two are identical in front of a consonant, so this is a difference you read and write rather than '
      + 'one you hear.',
    examples: [
      { itemId: 'fr.a1.famille.282', note: 'Several owners, one daughter, and no s.' },
      { itemId: 'fr.a1.famille.283', note: 'The same owners, more than one daughter, and the s arrives.' },
    ],
  },
  theSlot: {
    term: 'it stands where le would have stood',
    title: 'There is no le mon livre',
    body:
      'A possessive takes the place of le, la and les rather than sitting beside them. Le livre is the book '
      + 'and mon livre is my book, and there is no way to say both at once: le mon livre is not a sentence '
      + 'anybody would finish. English is the odd one here, because the my in my book is not replacing '
      + 'anything you can see. The practical effect is small and saves a whole class of error: once you have '
      + 'chosen mon, you are done, and there is nothing else to put in front of the noun.',
    examples: [
      { itemId: 'fr.a1.famille.284', note: 'Nothing in front of mon, and nothing missing either.' },
      { itemId: 'fr.a1.famille.258', note: 'The same slot, filled the same way, with a different owner.' },
    ],
  },
  theOtherSon: {
    term: 'the other son',
    title: 'son is also a noise',
    body:
      'Un son is a sound. It is the same three letters as the son in son frère and it is a completely '
      + 'different word, which you can tell apart every time without thinking about it: a possessive always '
      + 'has a thing behind it. Son frère, son sac, son adresse. On its own, or after le, it is the noise: '
      + 'le son de la télé. Nothing about the two is related and there is no rule to learn here. It is worth '
      + 'thirty seconds only because you have met le son already and would otherwise wonder whether you had '
      + 'missed a connection.',
    examples: [
      { itemId: 'fr.a1.famille.264', note: 'A possessive, because there is a thing straight behind it.' },
      { itemId: 'fr.a1.famille.266', note: 'The plural of the same word, and still nothing to do with sound.' },
    ],
  },
};
