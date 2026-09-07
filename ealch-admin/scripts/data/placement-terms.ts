// a1.16.l1 "La place de l'adjectif", the lesson glossary and its reframe.
//
// Split out for the same reason couleurs-terms.ts and adjectifs-terms.ts are: a
// term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline. The renderer shows three chips
// and collapses the rest, so no section names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.13's terms are facts about WHAT MOVES. a1.14's, when it lands, are facts
// about WHICH SHAPE a word takes. These are facts about WHICH SIDE, and that is
// a different kind of knowledge: it is a decision the learner makes in the
// moment of speaking rather than a property of a word they can look up.
//
// The words « adjectif », « antéposé », « épithète » and « attribut » appear
// nowhere below or anywhere on a learner surface. a1.03 taught noun gender
// without naming a grammatical class and a1.13 taught agreement the same way.
// `grammarIntroduced` is addressed to the curriculum and is the right place for
// the precise words. The test pins it.
//
// ── The boundary term, and the one this lesson inherits ────────────────────
//
// a1.13 gave the learner exactly ONE sentence about placement, its `afterTheNoun`
// term: "English puts the colour first and says a green jacket. French puts it
// after and says une veste verte. That order holds for every colour in this
// lesson and every colour you will meet, with nothing to remember and no cases
// to sort out."
//
// READ THAT AGAIN BEFORE WRITING ANYTHING HERE, because it constrains this
// lesson and it does not contradict it. It claims the rule holds for every
// COLOUR, which is true, and it says nothing about any other word. So this
// lesson opens the before/after system without correcting a single thing the
// learner was told. a1.13 did not simplify. It scoped, and it said so.
//
// `whichSide` below is written to be continuous with it rather than corrective:
// it starts from "you already do this with colours" and extends outward.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/* ─── The reframe ───────────────────────────────────────────────────────────
 *
 * Carried verbatim across NINE sections and one reference sheet, measured rather
 * than intended: s01-scene, s03-idea, s06-bothsides, s07-sort, s08-decide,
 * s12-errors, s22-review, s24-quiz and s25-roundup, plus sheet.a1.16.sides.
 * a1.01 uses eight, a1.08 seven, a1.09 eight, and a1.13 shipped its own
 * unchanged.
 *
 * REFRAME_SECTIONS below is the number the test asserts against, and it is an
 * EXPLICIT CONSTANT rather than a figure derived from the lesson. A derived
 * count compares the content to itself and passes on any rewording, which is
 * invariant §5's warning.
 *
 * ── Why this one ──────────────────────────────────────────────────────────
 *
 * It is a DECISION the learner makes while speaking rather than a fact about
 * French, it is true of the whole lesson, it is verifiable in the next sentence
 * they say, and it is statistically right: the set that goes in front is small
 * and closed, the set that goes behind is open and unbounded. A learner applying
 * it is correct far more often than one applying the English habit, and when it
 * is wrong it is wrong in a way a French listener understands anyway.
 *
 * ── What was rejected, and why ────────────────────────────────────────────
 *
 * "BANGS goes before" is a MNEMONIC, not a choice. It hands the learner an
 * English acronym to recall in the middle of a French sentence, and it fails the
 * moment the adjective is not in the acronym: autre, même, premier and dernier
 * all go in front and are in none of the five letters. It survives in this
 * lesson on exactly one card, labelled as a memory aid. See BANGS_LETTER in
 * placement-corpus.ts.
 *
 * "Short and common adjectives go first" is a real generalisation and is the
 * runner-up. It is rejected for being unusable in the moment: the learner has to
 * decide whether a word is common, which is a judgement they do not yet have,
 * and "short" is false of nouveau and mauvais. A reframe the learner cannot
 * execute at speaking speed is a fact rather than a reframe.
 *
 * "The colour comes after" is already a1.13's `afterTheNoun` term. Taking it
 * would be restating a neighbour's lesson as this one's headline.
 *
 * "Word order changes meaning" is the most interesting thing here and it is
 * TRUE OF FOUR WORDS. As a reframe it would promise a systematic effect the
 * language does not have. It is a term instead. See `positionCarriesMeaning`,
 * and it gets a whole act.                                                    */
export const REFRAME = 'When in doubt, put it after.';

/** How many SECTIONS carry the reframe verbatim. Asserted by
 *  a1-16-placement.test.ts against this constant, never against a count taken
 *  from the lesson. */
export const REFRAME_SECTIONS = 9;

/** How many REFERENCE SHEETS carry it. */
export const REFRAME_SHEETS = 1;

export const PLACEMENT_TERMS: Record<string, LessonTerm> = {
  whichSide: {
    term: 'which side of the noun',
    title: 'The describing word usually comes second',
    body:
      'You already do this with colours: une veste verte, the jacket and then its colour. That habit is the '
      + 'general rule, not a rule about colours. Most French describing words sit behind the thing they '
      + 'describe, and English is the odd one out here, because English puts every single one of them in front. '
      + 'So the sentence you are about to build has the words in the opposite order to the one your ear wants, '
      + 'and the fix is not to translate faster. It is to name the thing first and describe it second. Un '
      + 'quartier calme. Une question facile. Un café noir. The thing, then what it is like.',
    examples: [
      { itemId: 'fr.a1.rp-societe.088', note: 'The neighbourhood first, then what it is like.' },
      { itemId: 'fr.a1.adjectifs-essentiels.103', note: 'The same order again, on a word that has nothing to do with colour.' },
    ],
  },

  theShortList: {
    term: 'the ten that go in front',
    title: 'A small closed group, and it does not grow',
    body:
      'Ten words break the pattern and sit in front of the noun instead: petit, grand, gros, jeune, vieux, '
      + 'beau, joli, bon, mauvais, nouveau. They are the words you reach for most often, which is why the '
      + 'exception feels bigger than it is. The useful fact is that this group is closed. New words do not '
      + 'join it. Every describing word you meet from here that is not on this list goes behind the noun, and '
      + 'you can stop wondering about each one as it arrives.',
    examples: [
      { itemId: 'fr.a1.adjectifs-essentiels.005', note: 'grande in front, because grand is one of the ten.' },
      { itemId: 'fr.a1.adjectifs-essentiels.013', note: 'bon in front, for the same reason and no other.' },
    ],
  },

  positionCarriesMeaning: {
    term: 'when the side changes the meaning',
    title: 'Four words that mean two different things',
    body:
      'This is the only place in the course so far where moving a word changes what a sentence means rather '
      + 'than how good it sounds. Un grand homme is a great man and un homme grand is a tall man. Un ancien '
      + 'hôtel used to be a hotel; un hôtel ancien still is one and is simply old. Both versions are correct '
      + 'French, so nobody corrects you and nothing sounds wrong. The other person just understands you to have '
      + 'said the other thing, and the conversation carries on from there. Four words behave this way and you '
      + 'have met all four: grand, ancien, pauvre, propre.',
    examples: [
      { itemId: 'fr.a1.adjectifs-essentiels.332', note: 'In front: about importance.' },
      { itemId: 'fr.a1.adjectifs-essentiels.333', note: 'Behind: about height. The same three words.' },
    ],
  },

  deInFront: {
    term: 'des becomes de',
    title: 'One small word changes when the adjective moves up',
    body:
      'Once one of the ten moves in front of a plural noun, des shortens to de. Ce sont de beaux tableaux, and '
      + 'the longer form is what an English speaker reaches for. You have seen des shorten to de once before, '
      + 'under a negative, in the indefinite '
      + 'articles lesson: je n\'ai pas de voiture. This is a second place it happens and the trigger is '
      + 'different, so it is worth meeting on its own rather than filed with the first. Nothing else in the '
      + 'phrase moves, and the adjective still takes its own plural ending.',
    examples: [
      { itemId: 'fr.a1.adjectifs-essentiels.202', note: 'de, not des, because beaux got in front of the noun.' },
      { itemId: 'fr.a1.adjectifs-essentiels.018', note: 'The same shortening on bons, in an ordinary sentence.' },
    ],
  },

  vowelForm: {
    term: 'bel, vieil, nouvel',
    title: 'Three shapes that exist only in front',
    body:
      'Beau, vieux and nouveau each grow a third form used in front of a word starting with a vowel sound: un '
      + 'bel arbre, un vieil immeuble, un nouvel hôtel. Every one of them is a mouthful to say the other way, '
      + 'which is the whole reason they exist. They are worth noticing here rather than memorising as three odd '
      + 'words, because they can only ever turn up in front of the noun. A describing word sitting behind its '
      + 'noun never needs one, so meeting them is another way of noticing which side you are on.',
    examples: [
      { itemId: 'fr.a1.adjectifs-essentiels.025', note: 'A consonant behind it, so the plain form.' },
      { itemId: 'fr.a1.adjectifs-essentiels.204', note: 'A vowel behind it, and the same word changes shape.' },
    ],
  },

  twoAtOnce: {
    term: 'one on each side',
    title: 'Two describing words, one in each place',
    body:
      'When a phrase carries one word from the short list and one from everywhere else, they simply take their '
      + 'own places and the noun sits between them. Une petite robe rouge. Un petit chien blanc. Nothing new is '
      + 'happening and there is no extra rule to learn: each word goes where it was always going to go. This is '
      + 'worth seeing once, because written down it looks like a third pattern and it is not.',
    examples: [
      { itemId: 'fr.a1.adjectifs-essentiels.008', note: 'petite in front, rouge behind, the dress in the middle.' },
      { itemId: 'fr.a1.adjectifs-essentiels.007', note: 'The same shape again with a different pair of words.' },
    ],
  },
};

/** Named so the batch, the merge and the test can all assert that this lesson
 *  builds no vocabulary act around a1.14's six adjectives and teaches no
 *  agreement rule as new. Written as PHRASES rather than words for the reason
 *  a1.13's PLACEMENT_WORDS comment records: a guard on a single common word
 *  fires on legitimate content and gets deleted rather than fixed.
 *
 *  This lesson is far more exposed than a1.13 was. Its subject IS placement, so
 *  its screens legitimately contain "before the noun" and "goes in front", and
 *  its one BANGS card legitimately contains the word bangs. The guards below
 *  therefore describe AGREEMENT and VOCABULARY teaching, which are the two
 *  things that would actually belong to a neighbour. */
export const AGREEMENT_TEACHING = [
  'add an e for the feminine',
  'adds an e for the feminine',
  'the feminine adds an e',
  'agree with the noun',
  'agrees with the noun',
  'the plural s is never pronounced',
  'change shape to match',
  'changes shape to match',
];

/** Vocabulary teaching that belongs to a1.14: presenting one of the six as a
 *  word to learn rather than as sorting material. */
export const VOCAB_TEACHING = [
  'means big or tall',
  'means small or little',
  'the word for big',
  'the word for small',
  'learn these six',
  'these six adjectives mean',
];
