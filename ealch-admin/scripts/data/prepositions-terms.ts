// a1.21.l1 "Prépositions de lieu", the lesson glossary and its reframe.
//
// Split out for the same reason couleurs-terms.ts and possessifs-terms.ts are:
// a term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline. The renderer shows THREE chips
// and collapses the rest, so no section names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.13's terms are facts about what moves. a1.17's are facts about what you
// ask. These are facts about WHAT SHAPE THE WORD IS, because that is the only
// thing a learner has to notice here: a preposition of place is either one word
// or a phrase ending in `de`, and everything else follows from which.
//
// The words « préposition », « article », « contraction », « masculin »,
// « féminin » and « complément » appear nowhere below or anywhere on a learner
// surface. a1.03 taught noun gender without naming a grammatical class, a1.04
// taught le/la/les as "the little word in front", and a learner arriving here
// has no such label to cash. `grammarIntroduced` is addressed to the curriculum
// and is better for using the precise words. The test pins it.
//
// ── The term that is a warning to the author as much as to the learner ─────
//
// `theOtherDu` exists because a1.29 ALREADY TAUGHT `de + le = du`, in a section
// called "The Other Du", with its own term and its own error trigger, and its
// first card is « près du lit » — a spatial compound preposition. A learner
// reaching a1.21 has met this. Teaching it again as new would tell somebody who
// has already used it correctly that they had not.
//
// So this term NAMES a1.29 and extends it, the way a1.09 opens by naming a1.08.
// It is the shorter of the two explanations on purpose: the work was done.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it against an
 *  explicit constant rather than a figure derived from the lesson. A derived
 *  count compares the content to itself and passes on any rewording.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The brief proposes it and the brief is right, which is worth saying plainly
 *  rather than reaching for something novel.
 *
 *      One word goes straight onto the noun. A phrase needs de first.
 *
 *  It is a DECISION the learner makes in the moment of speaking rather than a
 *  fact they store. It covers every preposition in the lesson INCLUDING the
 *  four beyond the canDo, which is unusual: most reframes on this track stop
 *  working at the edge of the lesson. It is verifiable in the next sentence the
 *  learner says. And it is aimed at the error they will actually make, which is
 *  « à côté la banque » — understood perfectly, never corrected, and invisible
 *  to the speaker because the meaning survives intact.
 *
 *  That last property is what makes it worth a reframe rather than a rule. An
 *  error that stops the conversation gets repaired by the conversation. This one
 *  does not, so it has to be repaired here or it never is.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "Five words for five positions" is the table of contents. It names what the
 *  lesson contains and tells the learner nothing to DO, and it is false as soon
 *  as the sixth word arrives. The brief calls it a table of contents and that is
 *  exactly right.
 *
 *  "À plus le is au" is one contraction. It is true, it is worth knowing, and it
 *  covers four of this lesson's roughly forty screens. A reframe that applies to
 *  a tenth of the lesson is a term, and it is one: see `theContraction`.
 *
 *  "Prepositions tell you where" is a definition rather than a choice. A learner
 *  who has read it cannot do anything differently, which is the test a reframe
 *  has to pass.
 *
 *  "Look at the word after it" was the runner-up and it is the better
 *  DESCRIPTION of the two. It is how you TELL the shapes apart once you already
 *  know there are two, so it is diagnostic rather than generative: it helps a
 *  learner parse French they are reading and does nothing for French they are
 *  about to say. This lesson's error happens in production. Rejected for that,
 *  and it survives as the sorting drill's coach line, which is where a
 *  diagnostic belongs. */
export const REFRAME = 'One word goes straight onto the noun. A phrase needs de first.';

/** Recorded the way couleurs-terms.ts records its rejections, because the next
 *  author on this track will consider the same four and should not have to
 *  re-derive why they were not taken. */
export const REFRAMES_REJECTED: { candidate: string; why: string }[] = [
  { candidate: 'Five words for five positions', why: 'The table of contents. Names the contents, instructs nothing, and is false the moment the sixth word arrives.' },
  { candidate: 'À plus le is au', why: 'One contraction, covering about a tenth of the lesson. That is the size of a term, and it is one.' },
  { candidate: 'Prepositions tell you where', why: 'A definition. A learner who reads it cannot do anything differently.' },
  { candidate: 'Look at the word after it', why: 'The runner-up. Diagnostic rather than generative: it helps you read French, and this lesson fixes an error that happens while speaking. Survives as the sorting drill coach line.' },
];

export const PREPOSITIONS_TERMS: Record<string, LessonTerm> = {
  twoShapes: {
    term: 'one word, or a phrase ending in de',
    title: 'Every preposition of place is one shape or the other',
    body:
      'There are only two kinds here and you can tell them apart by eye. Some are a single word and they sit '
      + 'straight against the noun: sur la table, sous le lit, dans la boîte. Others are two or three words and '
      + 'the last one is always de: à côté de la table, près de la gare, en face de la banque. The de is not '
      + 'decoration and it is not optional. It is the last word of the preposition itself, in the same way that '
      + 'the of in "on top of" is part of the phrase and not something you could drop. Once you have noticed '
      + 'which shape you are holding, the rest of the sentence is the same either way.',
    examples: [
      { itemId: 'fr.a1.prepositions-essentielles.121', note: 'One word, straight onto the noun. Nothing between them.' },
      { itemId: 'fr.a1.prepositions-essentielles.126', note: 'The same cat and the same box, and this one needs the de.' },
    ],
  },
  theDroppedDe: {
    term: 'the de that goes missing',
    title: 'À côté la banque is the error nobody corrects',
    body:
      'This is the most common thing an English speaker gets wrong in this part of French, and the reason it '
      + 'survives is that it works. Say « le café est à côté la banque » and every French speaker in the room '
      + 'understands you perfectly and carries on. Nothing breaks, nobody repeats it back, and you have no way '
      + 'of finding out. It simply marks you as a beginner for as long as you keep saying it. English is what '
      + 'causes it: "next to the bank" has nothing between "to" and "the", so there is no habit to carry over. '
      + 'The fix is to learn the phrase with the de already inside it, as one unit, so there is never a moment '
      + 'where you are deciding whether to add it.',
    examples: [
      { itemId: 'fr.a1.prepositions-essentielles.010', note: 'The de, in published French, exactly where it belongs.' },
      { itemId: 'fr.a1.prepositions-essentielles.020', note: 'A different phrase, the same de, doing the same job.' },
    ],
  },
  theContraction: {
    term: 'à + le becomes au',
    title: 'Two words that will not sit next to each other',
    body:
      'À and le do not appear side by side in French. Where you would expect « à le bureau » you get « au '
      + 'bureau », one word standing in for two, and where you would expect « à les enfants » you get « aux ». '
      + 'This is not something you choose to do and it is not a shortcut: the uncontracted version is simply '
      + 'not written or said. What matters as much as the rule is where it STOPS. À la does not change and à l\' '
      + 'does not change, so « je suis à la maison » is exactly as it looks. Two of the four shapes contract and '
      + 'two do not, and a learner who over-applies this makes more errors than one who has never met it.',
    examples: [
      { itemId: 'fr.a1.prepositions-essentielles.130', note: 'à + le, and the two words are gone.' },
      { itemId: 'fr.a1.prepositions-essentielles.132', note: 'à + la, and nothing has happened at all.' },
    ],
  },
  theOtherDu: {
    term: 'the du you already met',
    title: 'The partitive lesson named this one first',
    body:
      'You have seen du before, and you were told then that most of the du in French is not about an amount of '
      + 'anything. This is that du. De and le will not sit side by side any more than à and le will, so à côté '
      + 'de le lit comes out as à côté du lit, and the du there means of the rather than some. The test you were '
      + 'given still works: try putting "some" in front of the English. Some bread makes sense, so je bois du '
      + 'café is the other one. Some the bed does not, so à côté du lit is this one. Des behaves the same way and '
      + 'collides with the des you use for several things, and the same test separates them.',
    examples: [
      { itemId: 'fr.a1.prepositions-essentielles.134', note: 'de + le, with a place behind it rather than a quantity.' },
      { itemId: 'fr.a1.prepositions-essentielles.100', note: 'The same du in published French, meaning from the.' },
    ],
  },
  surOrSous: {
    term: 'sur against sous',
    title: 'The one pair the ear genuinely struggles with',
    body:
      'These two are opposites and they sound close enough to lose in ordinary speech. Sur ends in the tight '
      + 'ü sound with the tongue high and the lips rounded, and sous is a plain oo with the lips pushed forward. '
      + 'Said slowly they are obviously different. Said at speed inside a sentence, with an unstressed function '
      + 'word carrying no weight of its own, they are the most confusable pair in this lesson. It matters '
      + 'because the two describe opposite places, so mishearing one sends you looking in exactly the wrong '
      + 'spot, and you will not doubt what you heard. Every other pair in the lesson sounds nothing alike.',
    examples: [
      { itemId: 'fr.a1.prepositions-essentielles.142', note: 'On top of the newspaper, where you would see them.' },
      { itemId: 'fr.a1.prepositions-essentielles.143', note: 'Underneath it, where you would not.' },
    ],
  },
  theAccentPair: {
    term: 'à and a',
    title: 'One is a place, the other is has',
    body:
      'À with the mark is the preposition and a without it is the verb: « il a » is he has, and you met that in '
      + 'the avoir lesson. They sound exactly the same, so nobody speaking French is ever choosing between them '
      + 'and nobody listening can tell them apart. This is a writing difference only. What separates them on the '
      + 'page is what comes next: a place or a thing after à, and something being owned after a. « Il a un chat » '
      + 'and « il est à Paris » can never be confused once you look past the single letter. The same is true of '
      + 'sur and sûr, where the mark is the difference between on and sure.',
    examples: [
      { itemId: 'fr.a1.prepositions-essentielles.130', note: 'The preposition, with the mark, and a place behind it.' },
      { itemId: 'fr.a1.prepositions-essentielles.133', note: "The same word before a vowel, and still no contraction." },
    ],
  },
};
