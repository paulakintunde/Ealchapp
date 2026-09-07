// The a2.16 glossary, and the claim constants the lesson body quotes rather
// than restates.
//
// A CLAIM THAT APPEARS ON MORE THAN ONE SCREEN LIVES HERE. a2.13 §6.2 shipped a
// grid that disagreed with the cards the learner was scored on, and a2.14 §5
// found the same shape in the respellings with the two copies one file apart.
// Every constant below is asserted in the batch, the merge and the test.
//
// THREE TERM CHIPS PER SECTION, MAXIMUM, and the ROW is 37 characters wide
// (ledger §a2.03-3, measured off a Pixel 6). The term names here are short for
// that reason and not for taste: a2.03 shipped `words ending in -eux` beside
// `words ending in -if` and the second chip drew as "words ending in", losing
// the only two characters that named the group.
//
// NO GRAMMAR JARGON ON A LEARNER SURFACE. A term is a learner surface. The
// words this lesson most wants and may not have are `pre-vocalic`, `hiatus`,
// `anti-hiatus`, `elision`, `allomorph`, `suppletion` and `paradigm` — and
// `anti-hiatus` is the one that hurts, because a1.20's grammarIntroduced uses it
// and it is the exact name for what act 3 teaches. It stays in
// `grammarIntroduced`, where invariants §8 permits it.
//
// The line for what IS allowed was measured rather than felt, the way a2.03 §7
// asks: `feminine`, `plural`, `masculine`, `noun` and `vowel` are house
// vocabulary for this arc — a1.13 uses `feminine` 71 times and a1.16 uses `noun`
// 115 — and this lesson uses them.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import {
  ADJ_ORDER, AGREEMENT_CLAIM, AGREEMENT_UNIT, ANTI_HIATUS_NAMED, AUDIBLE_CLAIM,
  BASICS_UNIT, BORROW_CLAIM, DROPPED, ELISION_CLAIM, ELISION_REFRAME,
  ELISION_UNIT, FORM_COUNT, FRAME_CLAIM, INVENTED_CLAIM, PLACEMENT_LINE,
  PLURAL_UNCHANGED, PLURAL_UNCHANGED_UNITS, PLURAL_X_CLAIM, PLURAL_X_FORMS, REFRAME,
  SILENT_H_CLAIM, SOUND_CLAIM, SOUND_COUNT, THE_MOVE, POSSESSIVE_CLAIM,
  POSSESSIVE_UNIT, ADVERB_UNIT, cellId, form,
} from './beau-nouveau-corpus.ts';
import { vowelRowId } from './beau-nouveau-imported.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

/** The arithmetic of the whole lesson, in one line. Every other lesson in this
 *  arc has four forms; these three have five, and the fifth is not a fifth
 *  sound. */
export const FORM_ARITHMETIC =
  `${FORM_COUNT} ways to write each of these three, and ${SOUND_COUNT} ways to say them. ${Cap(unitRef(AGREEMENT_UNIT))} gave you four of the five and this is the one it could not.`;

/** The Owns, spelled out, and it is the sentence the whole build turns on.
 *  Quoted on the grid, in act 3, in the sheet and in the roundup. */
export const BORROW_ARITHMETIC =
  `${BORROW_CLAIM} ${ADJ_ORDER.map((a) => `${form(a, 'fem')} without the ${DROPPED} is ${form(a, 'vowel')}`).join(', ')}. Three words, one operation.`;

/** Why the form is there at all, with sons.07 named. This is the REASON, and
 *  the reframe is the RULE; the brief offered the reason as the reframe and
 *  REFRAME_REJECTED records why that was turned down. */
export const REASON_CLAIM =
  `${Cap(unitRef(ELISION_UNIT))} put it this way: ${ELISION_REFRAME} ${ELISION_CLAIM}`;

/** The chain. Nine lessons have taught a version of this and none of them said
 *  it was the same thing. a1.17's is the one that matters, because it swaps a
 *  form rather than dropping a letter, which is what these three do. */
export const CHAIN_CLAIM =
  `${POSSESSIVE_CLAIM} ${ANTI_HIATUS_NAMED.length} of your lessons have made you do it already.`;

/** The plural trap, and the half of it that belongs to somebody else. */
/** SHORT ON PURPOSE, for the same reason as SOUND_CLAIM: it is quoted on two
 *  core screens and PLURAL_X_CLAIM alone is 35 words. The long version is in
 *  the term and in the sheet. */
export const PLURAL_CLAIM =
  `${PLURAL_X_FORMS.join(' and ')} take an x. ${form(PLURAL_UNCHANGED, 'plain')} already ends in one, so it takes nothing at all, and ${PLURAL_UNCHANGED_UNITS.map((u) => unitRef(u)).join(' and ')} both told you so.`;

/** The invented feminine, which is unhearable and therefore only a written
 *  surface can catch it. Short on purpose: it is quoted on two CORE screens and
 *  the density validator caps a core screen at 45 words per string. */
export const INVENTED_ARITHMETIC =
  `${INVENTED_CLAIM} ${FRAME_CLAIM}`;

/** The silent h, and it is sons.07's rule rather than a new one. */
export const SILENT_H_ARITHMETIC =
  `${SILENT_H_CLAIM} ${Cap(unitRef(ELISION_UNIT))} already gave you the two kinds of h and this is the ordinary kind.`;

/** The one-line version of the reframe, for the roundup. */
export const CARRY_FORWARD = `${REFRAME} ${THE_MOVE}`;

/** What is deliberately not here. Named, once, so the learner knows it is
 *  coming rather than thinking it was forgotten. */
export const NEXT_LESSON_LINE =
  `${Cap(unitRef(ADVERB_UNIT))} is next and it is built on the woman form, which you have now used more than any other shape of these three. Nothing here expires when you get there.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GLOSSARY
 * ═══════════════════════════════════════════════════════════════════════ */

export const BEAU_NOUVEAU_TERMS: Record<string, LessonTerm> = {
  fiveForms: {
    // 10 characters. Pairs with `the short one` (13) at 23, and with `a vowel
    // is coming` (18) at 28, both inside the measured 37-character row budget.
    term: 'five forms',
    title: 'Three words that have one more shape than the rest',
    body:
      `${FORM_ARITHMETIC} ${SOUND_CLAIM} The extra shape is the one you use in front of a word that starts with a vowel sound, and it is only ever used about a man or about a masculine thing. Everything else on the grid you already know how to build, because ${unitRef(AGREEMENT_UNIT)} taught you the system these three sit inside.`,
    examples: [
      { itemId: cellId('beau', 'plain'), note: 'The plain one.' },
      { itemId: vowelRowId('beau'), note: 'The extra one, and the reason the other four are not enough.' },
      { itemId: cellId('beau', 'fem'), note: 'And the one the extra one borrows its sound from.' },
    ],
  },

  theShortOne: {
    term: 'the short one',
    title: 'It is the woman form with two letters taken off',
    body:
      `${BORROW_ARITHMETIC} That is why it is worth knowing rather than memorising: you are not learning three new words, you are shortening three you already have. Say the woman form out loud, stop two letters early, and you have said the right thing. ${REFRAME}`,
    examples: [
      { itemId: cellId('beau', 'fem'), note: 'Say this one.' },
      { itemId: vowelRowId('beau'), note: 'Now say it two letters shorter. Same sound, and it is a different word on the page.' },
      { itemId: vowelRowId('vieux'), note: 'Third word, and the same two letters have come off again.' },
    ],
  },

  aVowelIsComing: {
    term: 'a vowel is coming',
    title: 'What sets the whole thing off',
    body:
      `${REASON_CLAIM} ${CHAIN_CLAIM} What decides it is the SOUND at the front of the next word rather than the letter, which is why a silent h counts as a vowel and why you have to listen to the word rather than look at it. Nothing about the thing being described matters here: not what it means, not how long it is, only what noise it starts with.`,
    examples: [
      { itemId: vowelRowId('nouveau'), note: 'A vowel at the front of the next word, so the short form.' },
      { itemId: 'fr.a2.adjectifs-essentiels.054', note: 'A consonant at the front of the next word, so the plain form and nothing to do.' },
      { itemId: 'fr.a1.adjectifs-essentiels.026', note: 'An h on the page and a vowel in the mouth. French listens to the mouth.' },
    ],
  },

  onlyForAMan: {
    term: 'only for a man',
    title: 'There is no woman version of the short one',
    body:
      `${INVENTED_ARITHMETIC} The woman form already ends in a consonant sound, so there is no collision for a short form to prevent and French never made one. Writing « une belle amie » is right and writing « une belle appartement » is not, and the two sound exactly the same, which is the whole difficulty. The only way to catch it is to know which word you are describing.`,
    examples: [
      { itemId: vowelRowId('beau'), note: 'A masculine thing, so the short form.' },
      { itemId: cellId('beau', 'fem'), note: 'And the full woman form, which is what goes in front of anything feminine, vowel or no vowel.' },
      { itemId: vowelRowId('vieux'), note: 'A masculine thing again. If this were feminine the word would be four letters longer and sound identical.' },
    ],
  },

  theXPlural: {
    term: 'the x plural',
    title: 'Two of them take an x and one takes nothing',
    body:
      `${PLURAL_CLAIM} None of the three is audible: an x on the end of a describing word has never been pronounced in French, any more than an s has, so the plural of all three sounds exactly like the singular. That is the half of this you can only get by having seen it written.`,
    examples: [
      { itemId: cellId('beau', 'plainPl'), note: 'An x. Not an s, and not for any reason you could work out.' },
      { itemId: cellId('nouveau', 'plainPl'), note: 'The second one, same ending.' },
      { itemId: cellId('vieux', 'plainPl'), note: `And the third, which is the same four letters as the singular. ${Cap(unitRef(BASICS_UNIT))} told you about this word by name.` },
    ],
  },

  whatYouCanHear: {
    term: 'what you can hear',
    title: 'Five shapes reaching your ear as two',
    body:
      `${AUDIBLE_CLAIM} ${SOUND_CLAIM} So the ear tells you one thing and one thing only: whether the speaker used the plain form or the short one. It will not tell you whether they meant one thing or several, and it will not tell you whether the short form or the woman form came out, because those two are the same noise. Everything else on this grid is a decision you make with your eyes and your grammar rather than your ears.`,
    examples: [
      { itemId: cellId('beau', 'plain'), note: 'One sound.' },
      { itemId: vowelRowId('beau'), note: 'And the other one. This is the whole of what is audible in this lesson.' },
      { itemId: cellId('beau', 'plainPl'), note: 'Back to the first sound. The x makes no more noise than nothing would.' },
    ],
  },

  whereItGoes: {
    term: 'where it goes',
    title: 'Not this lesson, and it is why this lesson exists',
    body:
      `${PLACEMENT_LINE} That is the one thing about placement worth saying here, and it is worth saying because it is the CAUSE: a describing word that comes after the thing never meets the sound that starts it, so it never needs a short form. These three come first, so they do. ${NEXT_LESSON_LINE}`,
    examples: [
      { itemId: 'fr.a2.adjectifs-essentiels.053', note: 'In front of the thing, which is where all three of these live.' },
      { itemId: vowelRowId('nouveau'), note: 'In front of the thing, and now the sound of the thing has changed the word.' },
      { itemId: cellId('nouveau', 'plain'), note: 'After the verb, where nothing follows it and nothing has to happen.' },
    ],
  },
};
