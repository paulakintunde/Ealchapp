// a1.13.l1 "Les couleurs", the lesson glossary and its reframe.
//
// Split out for the same reason mois-terms.ts and jours-terms.ts are: a term is
// defined ONCE and surfaced at every point of use via a section's `terms` chips,
// so a learner meets the same explanation wherever the idea turns up and no card
// carries the definition inline. The renderer shows three chips and collapses
// the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.09's terms are facts about HOW PRECISE. These are facts about WHAT MOVES:
// which word changes shape, what makes it change, and which words are exempt.
// That is the only question this lesson asks that a colour name does not answer
// by itself.
//
// The words « adjectif », « accord », « masculin », « féminin » and
// « invariable » appear nowhere below or anywhere in the lesson. a1.03 taught
// noun gender without once naming a grammatical class and a learner arriving
// here has no such label to cash. `grammarIntroduced` is addressed to the
// curriculum and is better for using the precise words. The test pins it.
//
// ── The one term that is really a boundary marker ──────────────────────────
//
// `afterTheNoun` exists because of a structural fact rather than a teaching
// need: a1.16 owns "which side of the noun", and every colour example in the
// language puts the colour after it, so the learner absorbs the pattern from the
// examples whether it is named or not. The brief's instruction is to "state once
// that colours follow the noun, show it consistently, and teach neither the
// exceptions nor the before/after system." This term IS that one statement. It
// deliberately does not mention that any adjective ever goes first, because that
// is the lesson a1.16 has to teach and there is nothing to gain by half-opening
// it here.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight of them, which sits inside
 *  the band a1.01 (eight) and a1.09 (eight) set. The batch's own count is higher
 *  than eight because `strings()` also walks the `reframe` field itself and the
 *  quiz `why` lines that quote it; the constant it asserts against is that
 *  total, not the section count.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The unit's canDo names three acts and the third is the one learners get
 *  wrong forever: "leave marron and orange alone". Most courses teach those two
 *  as a list of exceptions to memorise, which is a worse lesson than the one
 *  available, because there is a REASON and the corpus is holding it.
 *
 *  marron is a chestnut. orange is a fruit. They are nouns being used as
 *  colours, and a noun borrowed as a colour keeps its own shape, because it is
 *  still a noun underneath. « des chaussures marron » means, underneath, shoes
 *  the colour of a chestnut, and you would not pluralise the chestnut.
 *
 *      Colours agree. Things that became colours do not.
 *
 *  Seven words, it covers both halves of the canDo, and it EXPLAINS rather than
 *  lists. A learner who has it writes « des chaussures marron » and « des
 *  voitures vertes » correctly without memorising a table, and it extends for
 *  free to « bleu clair » and « vert pomme », which are invariable for exactly
 *  the same reason and which this lesson shows on one card rather than teaching.
 *
 *  It is verifiable the way an A1 reframe has to be. The learner writes « des
 *  chaussures marrons » on a form, and the s is the one thing a French reader
 *  notices.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "The colour follows the noun" is true, is shown on every screen, and is not
 *  this lesson's. It is a1.16's whole subject, and taking it as the headline
 *  would spend the position on something the learner absorbs for free from the
 *  examples. It is a term instead. See `afterTheNoun`.
 *
 *  "Half of agreement is silent" was the runner-up and it is the better insight
 *  of the two, but it describes the SOUND rather than the CHOICE. A learner who
 *  has only that still does not know whether to write marron or marrons, which
 *  is the thing they are actually about to get wrong. It is a term. See
 *  `writtenNotHeard`, and it gets a whole act.
 *
 *  "Add an e for feminine, an s for plural" was rejected for being FALSE of two
 *  of the twelve colours taught here, which is the specific failure this lesson
 *  exists to prevent. A rule with a silent exception list is what learners
 *  already arrive with. */
export const REFRAME = 'Colours agree. Things that became colours do not.';

export const COULEURS_TERMS: Record<string, LessonTerm> = {
  agreement: {
    term: 'the colour follows the noun it describes',
    title: 'The describing word changes shape',
    body:
      'This is new. Until now the only words that changed shape were the small ones in front of a noun: un or '
      + 'une, le or la. From here the describing word changes too, and it changes to match the thing it is '
      + 'describing rather than anything about you or the sentence. A bag is masculine, so the colour on it '
      + 'takes the plain form. A jacket is feminine, so the colour takes an e. Two jackets, and it takes an e '
      + 'and an s. Nothing about the colour itself decides this. The noun decides, and the colour follows.',
    examples: [
      { itemId: 'fr.a1.couleurs.259', note: 'A masculine thing, so the colour is in its plain form.' },
      { itemId: 'fr.a1.couleurs.260', note: 'The same colour on a feminine thing, and now it carries an e.' },
    ],
  },
  borrowedNoun: {
    term: 'marron and orange',
    title: 'Two colours that were something else first',
    body:
      'A marron is a chestnut and une orange is a fruit. Both got used as colours, and both kept the shape they '
      + 'had as things. That is why they never take an e or an s when they are describing something: underneath, '
      + 'des chaussures marron means shoes the colour of a chestnut, and you would not put the shoes ending on '
      + 'the chestnut. This is not a pair of exceptions to memorise. It is one idea, and it also covers every '
      + 'colour built out of two words, like bleu clair or vert pomme, which stay unchanged for the same reason.',
    examples: [
      { itemId: 'fr.a1.marche.116', note: 'The fruit, doing its ordinary job, and taking an s like any other thing.' },
      { itemId: 'fr.a1.couleurs.239', note: 'The same word as a colour, in front of a plural, and refusing the s.' },
    ],
  },
  writtenNotHeard: {
    term: 'endings you write and never say',
    title: 'Half of this is invisible to your ear',
    body:
      'The s on a plural colour is never pronounced. Not sometimes, not softly: never. Vert and verts are one '
      + 'sound, and so are verte and vertes. The e for a feminine is heard only when it wakes up a letter that '
      + 'was asleep, which happens on some colours and not others. Vert becomes verte and the t arrives. Bleu '
      + 'becomes bleue and nothing at all changes. So listening will not tell you which ending to write, and no '
      + 'amount of practice will make it tell you. You work it out from the thing being described, then you '
      + 'write it.',
    examples: [
      { itemId: 'fr.a1.couleurs.261', note: 'The s is written here and is not in the sound. This is the singular sound.' },
      { itemId: 'fr.a1.couleurs.264', note: 'The e is written and changes nothing. Say it beside the masculine and hear that.' },
    ],
  },
  wakesUp: {
    term: 'the letter that wakes up',
    title: 'When you CAN hear the feminine',
    body:
      'Some colours end in a letter that stays silent on its own and starts being pronounced once an e is added '
      + 'behind it. Vert ends in a silent t, and verte says that t. Gris ends in a silent s, and grise says it '
      + 'as a z. Violet doubles its t and says it. Blanc does the strangest one and turns into blanche. You met '
      + 'this exact mechanism in the silent letters lesson, where a final consonant sits quiet until something '
      + 'comes along behind it. This is the same thing, and the something is the feminine e.',
    examples: [
      { itemId: 'fr.a1.couleurs.001', note: 'The t at the end of vert is silent until this e turns up behind it.' },
      { itemId: 'fr.a1.couleurs.007', note: 'The silent s of gris comes back as a z sound.' },
    ],
  },
  afterTheNoun: {
    term: 'where the colour sits',
    title: 'The colour comes after the thing',
    body:
      'English puts the colour first and says a green jacket. French puts it after and says une veste verte. '
      + 'That order holds for every colour in this lesson and every colour you will meet, with nothing to '
      + 'remember and no cases to sort out, so it is worth getting used to now rather than translating word by '
      + 'word and then rearranging. When the colour comes after a verb instead, as in ma veste est verte, '
      + 'nothing changes about the ending: it still matches the thing being described.',
    examples: [
      { itemId: 'fr.a1.couleurs.001', note: 'The skirt first, then its colour. English would give you those the other way round.' },
      { itemId: 'fr.a1.couleurs.234', note: 'The shoes, then the colour, and the colour is one that never changes shape.' },
    ],
  },
};
