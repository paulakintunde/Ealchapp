// a2.05.l1 « Le passé composé avec avoir » — the lesson glossary, and the six
// constants it inherits from a1.07, a1.18, a2.01, a2.10, a2.11, a2.17, a2.18
// and a2.19.
//
// Split out for the same reason every lesson in this band splits it: a term is
// defined ONCE and surfaced at every point of use through a section's `terms`
// chips, so a learner meets the same explanation wherever the word turns up and
// no card carries the definition inline.
//
// THREE CHIPS PER SECTION, MAXIMUM. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.
//
// AND THE ROW IS THIRTY-SEVEN CHARACTERS WIDE. a2.03 §3 measured the term-chip
// row on a Pixel 6: three chips fit if the three `term` strings plus their
// separators come to 37 or fewer. TERM_ROWS below is the declared grouping and
// every layer walks it. The widest trio here is 36.
//
// NO CHIP LABEL IS A GRAMMAR WORD. `participle` and `auxiliary` are on this
// band's jargon list, and the plain phrases this lesson uses instead are
// « the past form » and « avoir ». a2.17 §8 measured that the house prefers the
// plain phrase rather than banning the technical one, and the ratio is guarded.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  A217_DEFERRAL, A219_REFRAME, ADVERB_UNIT, AVOIR_UNIT, ER_UNIT, ETRE_UNIT,
  FUTUR_UNIT, IR_UNIT, IRREGULAR_UNIT, NEGATION_UNIT, NEGATIVE_EVIDENCE,
  OWNS_CLAIM, POSITION_CLAIM, PRONOUN_UNIT, RE_UNIT, SCHOOL_UNIT, SOUND_CLAIM,
  TENSE_CONTRAST_CLAIM, TIME_CLAIM, TIME_UNIT,
} from './passe-compose-corpus.ts';

export { A219_REFRAME };

/** The line this lesson hangs on. Exported so the batch can count it against an
 *  explicit constant and the test can compare seed against source rather than
 *  restating the string. */
export { REFRAME } from './passe-compose-corpus.ts';

/** What a learner already owns, named by unit, so this lesson reads as three
 *  things they have standing next to each other rather than a new tense. */
export const ALREADY_YOURS =
  `${Cap(unitRef(AVOIR_UNIT))} gave you all six forms of avoir and you do not learn one new one here. ${Cap(unitRef(ER_UNIT))}, ${unitRef(IR_UNIT)} and ${unitRef(RE_UNIT)} gave you the three groups, and the three past endings run one per group. ${Cap(unitRef(NEGATION_UNIT))} gave you the two halves of the negative and ${unitRef(FUTUR_UNIT)} told you which verb they go round. The only new thing in this lesson is that there is now a gap between two words, and what is allowed to sit in it.`;

/** The measured margin, as one sentence, so the evidence reaches a screen
 *  rather than living only in a header. Every figure in it is re-measured by the
 *  manifest generator on every regeneration. */
export const EVIDENCE_LINE =
  `${NEGATIVE_EVIDENCE.rows} sentences in this app already put the two halves round avoir with a past form behind it. Every one puts the pas in the same place, in every person and with every verb.`;

export const PASSE_COMPOSE_TERMS: Record<string, LessonTerm> = {
  twoWords: {
    term: 'two words',
    title: 'The verb is two words now',
    body:
      `Every verb you have met so far has been one word: je parle, il finit, nous vendons. From here on the past is TWO: a form of avoir for whoever you are talking about, and then the past form of the verb that carries the meaning. ${Cap(unitRef(AVOIR_UNIT))} already gave you all six forms of avoir, so there is nothing new to learn about the first word. Everything that is hard about this tense comes from the fact that there are two of them and there is a gap in between.`,
    examples: [
      { itemId: 'fr.a2.verbes.541', note: 'Avoir for je, then the past form. Two words and a finished evening.' },
      { itemId: 'fr.a2.verbes.546', note: 'Avoir moved for ils. The second word did not.' },
    ],
  },

  pastForm: {
    term: 'past form',
    title: 'The second word, and where it comes from',
    body:
      `The second word is built off the naming form and the group decides how. An -ER verb ends in -é, an -IR verb ends in -i, an -RE verb loses its ending and takes -u. That is the whole regular system and it is the same three groups ${unitRef(ER_UNIT)}, ${unitRef(IR_UNIT)} and ${unitRef(RE_UNIT)} taught you. It never changes for the person: the same five letters sit in all six rows of the table.`,
    examples: [
      { itemId: 'fr.a2.verbes.552', note: `-ER, so -é. ${Cap(unitRef(ER_UNIT, 'a2'))}'s own verb.` },
      { itemId: 'fr.a2.verbes.553', note: `-IR, so -i. ${Cap(unitRef(IR_UNIT, 'a2'))}'s own verb, one tense later.` },
    ],
  },

  inBetween: {
    term: 'in between',
    title: 'The gap, and what lives in it',
    body:
      `${OWNS_CLAIM} ${POSITION_CLAIM} A short adverb goes there too: bien, mal, déjà, beaucoup, encore. What does NOT go there is the thing the sentence is about. « J'ai mangé une pomme », never « j'ai une pomme mangé », because the gap is one word wide and an object is not a small word.`,
    examples: [
      { itemId: 'fr.a2.verbes.547', note: 'Pas in the gap, and mangé outside it.' },
      { itemId: 'fr.a2.verbes.568', note: 'And the apple, which stays outside because it is not a small word.' },
    ],
  },

  whichVerb: {
    term: 'which verb',
    title: 'The one that moved for you',
    body:
      `${A219_REFRAME} That is ${unitRef(FUTUR_UNIT, 'a2')}'s line, from one lesson ago, and it was about « je ne vais pas partir ». It is exactly as true here: avoir is the word that changed when you picked the person, so both halves go round avoir, and the past form is left where it is. Nothing about this rule is new. What is new is that the word it aims at is now the FIRST of two rather than the only one there is.`,
    examples: [
      { itemId: 'fr.a2.verbes.541', note: 'Avoir moved for je. Mangé did not.' },
      { itemId: 'fr.sons.masterclass.021', note: 'So both halves went round avoir. This card was in the app years before this lesson.' },
    ],
  },

  oneSound: {
    term: 'one sound',
    title: 'Manger and mangé',
    body:
      `${SOUND_CLAIM} Manger and mangé are /mɑ̃.ʒe/, parler and parlé are /paʁ.le/, travailler and travaillé are /tʁa.va.je/. The difference is real and it is entirely on paper, which is why this lesson has a dictée and why the ear questions in it are about the little word in front instead.`,
    examples: [
      { itemId: 'fr.a2.verbes.566', note: `${Cap(unitRef(FUTUR_UNIT, 'a2'))}'s construction. The last word is the naming form.` },
      { itemId: 'fr.a2.verbes.541', note: 'This lesson. The last word is the past form, and it is the same sound.' },
    ],
  },

  noAgree: {
    term: 'no agreement',
    title: 'It does not change for anybody',
    body:
      `After avoir the past form is one shape and it stays that shape. Not mangée for a woman, not mangés for a group, not mangées for a group of women. Elle a mangé, ils ont mangé, elles ont mangé. This is worth saying plainly because ${unitRef(ETRE_UNIT)}, two lessons from here, says the opposite for a short list of verbs that use être instead, and the contrast only works if you have this side of it cleanly first. There is one case where a past form does agree with avoir and it needs object pronouns, which is ${unitRef(PRONOUN_UNIT)}, five lessons after this one.`,
    examples: [
      { itemId: 'fr.a2.verbes.569', note: 'A feminine subject, a feminine object, and not a letter has moved.' },
      { itemId: 'fr.a2.verbes.561', note: 'And elle again, with something in the gap. Répondu is still répondu.' },
    ],
  },

  whenWord: {
    term: 'when',
    title: 'Say when, and it settles',
    body:
      `${TIME_CLAIM} English keeps two pasts apart, "I ate" and "I have eaten", and French runs both of them through this one form, so for a while your ear will want a signal that French is not sending. Hier, avant-hier, la semaine dernière, il y a trois jours. ${Cap(unitRef(TIME_UNIT))} gave you « il y a » for a length of time behind you and could not finish the job, because saying how long ago something happened needs this tense.`,
    examples: [
      { itemId: 'fr.a2.verbes.562', note: 'Yesterday, and there is nothing left to work out.' },
      { itemId: 'fr.a2.prepositions-essentielles.174', note: `${Cap(unitRef(TIME_UNIT, 'a2'))}'s own card, and it already holds this tense.` },
    ],
  },

  endings: {
    term: 'endings',
    title: 'Three groups, three endings',
    body:
      `-ER goes to -é, -IR goes to -i, -RE goes to -u. Three groups you have had since ${unitRef(ER_UNIT)}, and the past form runs one ending per group with no exceptions inside the regular set. Give it a verb you have never met and you can still build it: if it ends in -er the past form ends in -é, and that is the whole of the decision.`,
    examples: [
      { itemId: 'fr.a2.verbes.554', note: `-RE, so -u. ${Cap(unitRef(RE_UNIT, 'a2'))}'s own verb, and the group where the ending is furthest from the naming form.` },
      { itemId: 'fr.a2.verbes.555', note: '-IR, so -i, on a verb the endings grid does not use.' },
    ],
  },

  laterOn: {
    term: 'later on',
    title: 'What is still coming',
    body:
      `Two things are deliberately not in this lesson. About forty verbs have a past form you could not have guessed, and they are ${unitRef(IRREGULAR_UNIT)}, which is next. A short list of verbs uses être rather than avoir for the first word, and their past form does change to match the person, and that is ${unitRef(ETRE_UNIT)}. Neither of them changes anything you have learned here: the shape stays two words with a gap in it. You will need all of this again at ${unitRef(SCHOOL_UNIT)}, where the whole conversation is about what you studied and how it went.`,
    examples: [
      { itemId: 'fr.a2.verbes.543', note: 'The shape. It survives both of the next two lessons unchanged.' },
      { itemId: 'fr.a2.verbes.551', note: 'And the gap, which survives them too.' },
    ],
  },
};

/** The declared chip rows, so the width guard walks a grouping this file owns
 *  rather than guessing which three the renderer will put together. a2.03 §3.
 *  The widest is 36 against a budget of 37. */
export const TERM_ROWS: readonly (readonly string[])[] = [
  ['twoWords', 'pastForm', 'inBetween'],
  ['whichVerb', 'inBetween', 'twoWords'],
  ['oneSound', 'whenWord', 'twoWords'],
  ['noAgree', 'pastForm', 'twoWords'],
  ['endings', 'pastForm', 'twoWords'],
  ['laterOn', 'pastForm', 'twoWords'],
];

export { TERM_ROW_MAX } from './passe-compose-corpus.ts';

export const rowWidth = (keys: readonly string[]): number =>
  keys.reduce((n, k) => n + (PASSE_COMPOSE_TERMS[k]?.term.length ?? 0), 0) + (keys.length - 1) * 2;

/** What this lesson hands forward, by unit id, so the report and the roundup say
 *  the same thing. a2.20 is the one that had to agree the corpus split and the
 *  answer is written into the first entry. */
export const HANDOVER = {
  [IRREGULAR_UNIT]:
    `The corpus split is settled and the answer is ZERO ROWS ON BOTH SIDES: a past form is a conjugated form and ${unitRef('a2.01')} already ruled that a conjugated form is never a corpus item. So ${unitRef('a2.20')} authors no bare past forms either, and its forty irregulars arrive as forty short SENTENCES in one frame, which also fixes the thing the nine fr.sons.voyelles rows demonstrate — a bare past form reaches a card nobody can say. Its id block is reserved at fr.a2.verbes.591..650. The formation and the negative are taught here and need one recap, not a re-teach.`,
  [ETRE_UNIT]:
    'This lesson states its side of the agreement question plainly and holds it: after avoir the past form does not change for anybody, asserted as a shape in all three layers. The être verbs are named as a short list and not one of them is conjugated here.',
  [PRONOUN_UNIT]:
    'The one case where a past form DOES agree with avoir is the preceding direct object, and 81 published rows hold it. It needs object pronouns, so it is that lesson\'s, and this one neither teaches it nor pretends it is not there.',
  [SCHOOL_UNIT]:
    'The third dependent, fourteen seq positions away, and no document in this band names it. Its whole canDo is a conversation in this tense.',
  [ADVERB_UNIT]:
    `The compound-tense deferral is CLOSED. Its own wording, « ${A217_DEFERRAL} », is quoted on the screen that closes it, and the two published cards that prove the shape are imported rather than restated.`,
  [TIME_UNIT]:
    'The "ago" deferral is CLOSED, and it is worth more than a hand-off: a2.18\'s canDo was reworded on 2026-08-14 because it promised something that needs this tense. Its own sentence and its phrase card are both on the screen that closes it.',
} as const;
