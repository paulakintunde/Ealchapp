// a1.25.l1 "La routine quotidienne", the lesson glossary and its reframe.
//
// Split out for the same reason pays-terms.ts and couleurs-terms.ts are: a term
// is defined ONCE and surfaced at every point of use through a section's `terms`
// chips, so a learner meets the same explanation wherever the idea turns up and
// no card carries the definition inline. The renderer shows three chips and
// collapses the rest, so no section names more than three.
//
// ── No grammar jargon, and the one word that is hardest to avoid ────────────
//
// « pronominal », « réfléchi », « reflexive verb », « conjugation » and
// « paradigm » appear nowhere below or anywhere on a learner surface. The
// corpus itself breaks this rule at fr.a1.routines.009, which stores « Le verbe
// est pronominal, le pronom change avec la personne. » as a learner sentence;
// that row is in WITHDRAWN_IDS and no surface of this lesson can reach it.
//
// What the lesson says instead is that the `se` is part of the verb, the way
// a1.03 said the article is part of the noun. That is a storage instruction
// rather than a description, and it is the only thing an A1 learner can act on
// while a2.22 still owns the table.
//
// `grammarIntroduced` is addressed to the curriculum and uses the precise words.
// The test pins the split.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in seven, inside the band a1.01
 *  (eight), a1.09 (eight), a1.13 (eight), a1.17 (eight) and a1.22 (seven) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The brief proposes it and the brief is right, which is worth saying plainly
 *  rather than reaching for something novel. It is a CHOICE the learner makes in
 *  the moment of speaking, it is true of the whole lesson rather than of one
 *  section, and it is checkable the first time they arrange lunch.
 *
 *      The parts of the day take le. Midi and minuit take nothing.
 *
 *  It is also the only claim in the lesson with counter-evidence strong enough
 *  to state as a fact: « le midi » returns ZERO rows in 27,353 published
 *  sentences, while « à midi » returns 51 and « le matin » returns 134. A rule
 *  with a measured zero behind it is worth a card of its own, and that card is
 *  s07-exception.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  « le matin is every morning, ce matin is this one » is the sharper contrast
 *  and has the most evidence of anything measured for this lesson (`ce matin`
 *  263 published sentences). REJECTED because ce / cet / cette / ces is an A2
 *  unit and teaching the demonstrative here takes its lesson. It survives as one
 *  line of context in the reading passage and is drilled nowhere. NEIGHBOUR_
 *  DEMONSTRATIVES in routine-corpus.ts is the guard.
 *
 *  « Put the time first and the rest of the sentence stays where it is » is true
 *  and corpus-backed (fr.a1.routines.090 fronts « Le matin, » with a comma; so
 *  does fr.a1.nombres.177). REJECTED as the reframe because fronting is OPTIONAL
 *  and a learner who never does it is still speaking correct French. A reframe
 *  has to be a decision that is wrong if you get it wrong. It survives as the
 *  term `fronting` and as the title of act 4.
 *
 *  « Your day is a list » describes the lesson's structure rather than the
 *  learner's decision. A reframe the learner cannot act on is a section title.
 *
 *  « Learn the se with the verb » was the runner-up and is the better parallel
 *  to a1.03's own reframe. REJECTED because it is true of only half the taught
 *  verbs: dormir, travailler, déjeuner, dîner, rentrer and manger carry no se at
 *  all. A line that is false about half the lesson cannot be carried verbatim
 *  through it. It is the term `seIsPartOfTheVerb` instead, which is where a
 *  half-true thing belongs. */
export const REFRAME = 'The parts of the day take le. Midi and minuit take nothing.';

export const ROUTINE_TERMS: Record<string, LessonTerm> = {
  partsTakeLe: {
    term: 'the little word in front',
    title: 'Le matin, and it means every morning',
    body:
      'The morning, the afternoon, the evening and the night all carry a little word in front of them in '
      + 'French, and it is not there for emphasis. It is doing the job English does with a plural: le matin '
      + 'is mornings in general, the ones that keep happening, rather than one particular morning. You have '
      + 'already been given this exact rule once. The days lesson taught that le lundi means every Monday '
      + 'and not this one, and this is the same word doing the same work on a different set of nouns. '
      + 'Nothing new is being asked of you here except to notice that it reaches further than days.',
    examples: [
      { itemId: 'fr.a1.routines.090', note: 'Le matin at the front of a sentence, meaning every morning, in a line nobody wrote to teach it.' },
      { itemId: 'fr.a1.routines.134', note: 'And le soir doing the same job at the other end of the day.' },
    ],
  },
  midiTakesNothing: {
    term: 'the two that take nothing',
    title: 'Midi and minuit go bare',
    body:
      'Two words in the middle of this set refuse the little word entirely. Midi and minuit take nothing at '
      + 'all: you say à midi, never le midi, and the corpus is unusually clear about it. Across 27,353 '
      + 'published French sentences in this app, à midi appears 51 times and le midi appears zero times. '
      + 'That is not a style preference, it is a shape the language does not make. The reason is that midi '
      + 'and minuit are already the names of exact moments rather than stretches of the day, and a moment '
      + 'does not need marking as habitual. Le matin covers four or five hours. Midi is a point.',
    examples: [
      { itemId: 'fr.a1.routines.131', note: 'à midi, with nothing in front of midi, in the corpus\'s own sentence.' },
      { itemId: 'fr.a1.routines.035', note: 'And the word as it is stored: bare, with no article attached to it.' },
    ],
  },
  seIsPartOfTheVerb: {
    term: 'the se belongs to the verb',
    title: 'Store se lever, never lever',
    body:
      'About half the verbs in a French day arrive with a small word stuck to the front of them: se lever, '
      + 'se doucher, s\'habiller, se coucher. That word is not optional and it is not decoration, and the '
      + 'useful thing to do with it at this stage is to store it as part of the verb, exactly the way the '
      + 'noun gender lesson asked you to store the article as part of the noun. When you use one of these '
      + 'about yourself, the se becomes me: je me lève, je me douche, je me couche. Three whole phrases, '
      + 'learned whole. The full set of what that little word does to every person is a lesson of its own, '
      + 'and it is a band away.',
    examples: [
      { itemId: 'fr.a1.routines.003', note: 'The se has become me because the sentence is about you.' },
      { itemId: 'fr.a1.routines.144', note: 'The same change twice in one sentence, which is what the whole phrase buys you.' },
    ],
  },
  everyDayOutLoud: {
    term: 'saying every day out loud',
    title: 'Tous les jours, when the article is not enough',
    body:
      'The little word in front already says that something is habitual, and there are moments when you '
      + 'want to be certain rather than subtle. Tous les jours says it in three words and cannot be missed. '
      + 'It is not a replacement for the article and it does not compete with it: French will happily use '
      + 'both in one sentence, which is worth seeing once so it does not look like a mistake. Reach for it '
      + 'when the article alone feels too quiet, and let the article do the work the rest of the time.',
    examples: [
      { itemId: 'fr.a1.routines.089', note: 'The habit stated twice in one line, and both halves are ordinary French.' },
      { itemId: 'fr.a1.routines.026', note: 'The phrase on its own, as it is stored.' },
    ],
  },
  fronting: {
    term: 'putting the time first',
    title: 'Le matin, and then everything else',
    body:
      'French is comfortable putting the time at the front of a sentence with a comma after it, and it is '
      + 'worth recognising because it looks like a different sentence when it is not. Le matin, je bois un '
      + 'jus d\'orange says exactly what je bois un jus d\'orange le matin says. Nothing moves except the '
      + 'time phrase, and nothing else in the sentence changes to accommodate it. This is a thing to be able '
      + 'to read rather than a thing you have to do. If you never front anything, every sentence you say is '
      + 'still correct.',
    examples: [
      { itemId: 'fr.a1.routines.090', note: 'The time at the front, with its comma, and the rest of the sentence untouched.' },
      { itemId: 'fr.a1.routines.160', note: 'The same meaning with the time at the end instead, and chaque matin in place of the article.' },
    ],
  },
};
