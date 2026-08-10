// a1.14.l1 "Les adjectifs de base", the lesson glossary and its reframe.
//
// Split out for the same reason couleurs-terms.ts and mois-terms.ts are: a term
// is defined ONCE and surfaced at every point of use through a section's `terms`
// chips, so a learner meets the same explanation wherever the idea turns up and
// no card carries the definition inline. The renderer shows three chips and
// collapses the rest, so no section names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.13's terms are facts about WHAT MOVES. These are facts about WHERE THE
// WORD GOES and WHICH SHAPE IT TAKES, because a1.13 already answered "does it
// move at all" and answered it for every describing word rather than for
// colours alone. Its own handover note says so: "AGREEMENT IS NOW INTRODUCED.
// a1.14 must NOT teach it as new."
//
// The words « adjectif », « accord », « masculin », « féminin » and
// « invariable » appear nowhere below or anywhere in the lesson. a1.03 taught
// noun gender without naming a grammatical class, a1.13 taught agreement the
// same way, and a learner arriving here has no such label to cash.
// `grammarIntroduced` is addressed to the curriculum and is the right place for
// the precise words. The test pins it.
//
// ── The one term that is a boundary marker ─────────────────────────────────
//
// `whereTheySit` exists because of a structural fact rather than a teaching
// need, and it is the mirror image of a1.13's `afterTheNoun`. a1.16 owns
// "which side of the noun": which adjectives go first, why, the sub-rules, the
// pairs that change meaning by position, and what happens with two of them at
// once. NONE of that is here.
//
// What IS here is the single fact that these six go in front, because all six
// of them do and because the learner has just spent a lesson watching colours
// go behind. Left unsaid, they carry a1.13's pattern straight into « une maison
// grande », which is understood perfectly and marks a beginner in every
// sentence. a1.13 could state its own placement fact and stop, because no
// colour is ever an exception to it. This lesson is the exception set, so the
// fact has to be stated the other way round and then dropped.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in seven, which sits inside the band
 *  a1.01 (eight), a1.08 (seven), a1.09 (eight) and a1.13 (eight) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The learner arrives from a1.13 holding a rule that is about to fail on the
 *  six most frequent describing words in the language, and the failure is
 *  SILENT: « une maison grande » is understood, nobody corrects it, and it
 *  marks a beginner in every sentence they will ever say.
 *
 *      Colours follow the noun. These six come first.
 *
 *  Eight words. It is a CHOICE the learner makes in the moment of speaking
 *  rather than a fact about the language, it is true of all six rather than of
 *  one section, it is verifiable in the next sentence they say, and it bridges
 *  from the lesson they have just finished instead of restating it.
 *
 *  It also does the boundary work for free. By naming colours as the other
 *  case, it says these six are a set rather than the beginning of a system,
 *  which is exactly the claim a1.16 needs left intact.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "Learn the feminine, not the rule" is FALSE of half the set. grand, petit
 *  and mauvais take a plain -e, exactly as a1.13 taught. A reframe that is
 *  wrong about three of six words is worse than none, because the learner who
 *  believes it stops applying the rule they already have.
 *
 *  "These six change more" is not a choice a learner can act on. It describes
 *  the set from outside rather than telling anybody what to do next, and the
 *  same objection killed a1.13's "Half of agreement is silent".
 *
 *  "Adjectives agree" is a1.13's lesson. Taking it would rebuild the previous
 *  lesson with different words, which is precisely what the canDo's second
 *  clause invites and what this lesson must not do.
 *
 *  "You can always hear the feminine here" was the runner-up and it is a real
 *  finding: all six feminines are audible, which INVERTS a1.13, where four of
 *  twelve were silent and two changed nothing at all. It is the better piece of
 *  linguistics and the worse reframe, for the same reason "half of agreement is
 *  silent" lost: it is about perception rather than about the choice the learner
 *  is about to get wrong. It is a term instead. See `alwaysAudible`, and it
 *  gets a mission. */
export const REFRAME = 'Colours follow the noun. These six come first.';

export const ADJECTIFS_TERMS: Record<string, LessonTerm> = {
  whereTheySit: {
    term: 'these six come in front',
    title: 'Not where the last lesson put them',
    body:
      'Colours go after the thing they describe, and you have just spent a lesson on that. These six go in '
      + 'front of it instead. Une grande maison, not une maison grande. That is the English order, which makes '
      + 'it easy to say and easy to forget, because the habit you built last lesson pulls the other way. Nobody '
      + 'will correct you if you get it wrong, since the sentence is perfectly understandable either way, and '
      + 'that is exactly why it is worth fixing now rather than later.',
    examples: [
      { itemId: 'fr.a1.couleurs.001', note: 'A colour, sitting behind the thing, which is where every colour sits.' },
      { itemId: 'fr.a1.adjectifs-essentiels.008', note: 'One phrase carrying both: the size in front, the colour behind.' },
    ],
  },
  theFeminine: {
    term: 'what the feminine does',
    title: 'Three of them follow the rule and three do not',
    body:
      'You already know the rule from last lesson: for the une kind of thing, add an e. Grand becomes grande, '
      + 'petit becomes petite and mauvais becomes mauvaise, and nothing new is being asked of you there. Bon '
      + 'doubles its n first and becomes bonne. Beau and vieux do not add anything at all: they turn into belle '
      + 'and vieille, which are different words to look at. Nothing about the plain form tells you which of the '
      + 'three will happen, so these are six shapes to know rather than one rule to apply.',
    examples: [
      { itemId: 'fr.a1.adjectifs-essentiels.193', note: 'The plain rule, doing what it did all last lesson.' },
      { itemId: 'fr.a1.adjectifs-essentiels.211', note: 'And the one that replaces the word instead of adding to it.' },
    ],
  },
  beforeAVowel: {
    term: 'bel and vieil',
    title: 'A third shape, in front of a vowel',
    body:
      'Beau and vieux each have a form nothing else in this lesson has. In front of a word starting with a '
      + 'vowel sound they become bel and vieil: un bel homme, un vieil ami. It is the same pressure you met in '
      + 'the elision lesson, where two vowel sounds meeting each other is something French will not do. Beau '
      + 'homme and vieux ami both put two vowels together, so the word in front changes shape to stop it. These '
      + 'two are used constantly and they are worth having now.',
    examples: [
      { itemId: 'fr.a1.adjectifs-essentiels.026', note: 'Homme starts with a vowel sound, so beau cannot stand there.' },
      { itemId: 'fr.a1.adjectifs-essentiels.044', note: 'Ami does the same thing to vieux.' },
    ],
  },
  alwaysAudible: {
    term: 'you can hear all six',
    title: 'The opposite of the colours',
    body:
      'Last lesson four of the twelve colours changed sound for the une kind and the rest did not, and on bleu '
      + 'and noir there was nothing to hear at all. These six are the other way round: every one of them sounds '
      + 'different. Grand wakes a d, petit wakes a t, mauvais wakes an s as a z, bon collapses its nasal into a '
      + 'plain n, and beau and vieux become other words entirely. So on these six your ear is worth listening '
      + 'to. The plural is still completely silent, exactly as it was.',
    examples: [
      { itemId: 'fr.sons.nasales.167', note: 'The biggest change of the six, and the nasal lesson already taught why.' },
      { itemId: 'fr.sons.muettes.047', note: 'The silent letters lesson authored this one: the d arrives with the e.' },
    ],
  },
  noPluralChange: {
    term: 'vieux and mauvais, for several things',
    title: 'Two of them already end in the plural letter',
    body:
      'For more than one thing you add an s, and it is silent, which you know. But vieux already ends in an x '
      + 'and mauvais already ends in an s, and French does not stack a second one on top. Un vieux vélo and des '
      + 'vieux vélos are the same word on the page as well as in the air. Vieuxs and mauvaiss are not words and '
      + 'never have been. This is the one place in the lesson where the careful thing to do is nothing.',
    examples: [
      { itemId: 'fr.a1.adjectifs-essentiels.210', note: 'One old grandfather.' },
      { itemId: 'fr.a1.adjectifs-essentiels.212', note: 'Several old friends, and the word has not moved.' },
    ],
  },
};
