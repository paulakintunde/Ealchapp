// a1.02.l1 "Les nombres 1-20" — the lesson glossary and its reframe.
//
// Split out for the same reason salutations-terms.ts is: a term is defined ONCE
// and surfaced at every point of use via a section's `terms` chips, so a learner
// meets the same explanation wherever the idea turns up and no card carries the
// definition inline.
//
// ── What an A1 term is here ────────────────────────────────────────────────
//
// a1.01's terms define SOCIAL facts: what vous costs you, when salut is
// over-familiar. This lesson has one social term (giving a quantity) and five
// that are closer to the sons register, because the hard part of counting to
// twenty is genuinely a sound problem rather than a manners problem.
//
// They stay A1 rather than sons by answering "what does this cost me when I get
// it wrong" instead of "what category is this". A learner does not need to know
// the word liaison to know that dix minutes has no S in it, and being told the
// word instead of the behaviour is how a numbers lesson turns into a phonology
// lesson nobody asked for. Neither `liaison` nor `elision` appears anywhere in
// this lesson: a learner arriving at a1.02 may never have opened the sons track,
// and the unit declares no prerequisites.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight.
 *
 *  Why this one. The obvious candidate was "twenty words, learned once", and it
 *  is worthless: a learner can memorise un to vingt from any list on the
 *  internet in an afternoon, and a lesson whose organising idea is the list has
 *  no reason to exist. The real difficulty, and the one the unit's canDo names
 *  when it says "hear the difference between them", is that a French number
 *  does not have one ending. It has the ending the NEXT word gives it.
 *
 *  It earns its place by covering both of the lesson's hard ideas rather than
 *  one. The consonant that comes and goes (dix minutes against dix ans, neuf
 *  heures, vingt heures) is the obvious half. The other half is un against une,
 *  which is the same claim wearing different clothes: the noun that follows
 *  decides which form of one you say, and you have to know it before you open
 *  your mouth. One sentence, both axes.
 *
 *  It is also testable tomorrow, which is the A1 standard. A learner can stand
 *  at any counter in France, hear "dix minutes", and notice the S is not there. */
export const REFRAME = 'The next word decides how a number ends.';

export const NOMBRES_TERMS: Record<string, LessonTerm> = {
  shift: {
    term: 'the ending that moves',
    title: 'Why the number you learned sounds wrong in a sentence',
    body:
      'Six, huit, dix and vingt each have three sounds and one spelling. Said alone, the final consonant is there. Said before a word starting with a consonant, it vanishes with nothing to mark it. Said before a word starting with a vowel, it comes back and joins onto that word. This is invisible on a written list, which is exactly why a learner who studied the list still cannot hear the number in a sentence.',
    examples: [
      { itemId: 'fr.sons.nombres.009', note: 'Ten, in the three states the whole lesson is built on.' },
      { itemId: 'fr.a1.nombres.060', note: 'Ten before a consonant: the S is gone.' },
      { itemId: 'fr.a1.nombres.124', note: 'Ten before a vowel: the S is back, as a Z.' },
    ],
  },
  linkZ: {
    term: 'the Z that appears',
    title: 'The sound that comes from nowhere',
    body:
      'When a number ending in a written S or X meets a word starting with a vowel, that letter is pronounced as a Z and is said with the next word rather than with the number. Deux heures, trois ans, six euros, dix ans. Nothing on the page tells you this is coming, and the two words end up sounding like one, which is why a learner counting syllables loses the number entirely.',
    examples: [
      { itemId: 'fr.a1.nombres.124', note: 'Dix ans, said as one piece.' },
      { itemId: 'fr.sons.nombres.017', note: 'The same Z, inside a single number.' },
    ],
  },
  teens: {
    term: 'eleven to twenty',
    title: 'Where the pattern starts, and where there is none',
    body:
      'Onze to seize are six separate words with nothing to work out. Trying to derive them wastes the effort they need, so learn them the way you learned English numbers, one at a time. From dix-sept the language starts saying its own arithmetic out loud: ten seven, ten eight, ten nine. Knowing where the break falls is worth more than any mnemonic, because it tells you when to stop looking for a rule.',
    examples: [
      { itemId: 'fr.sons.nombres.010', note: 'Eleven. No pattern in it.' },
      { itemId: 'fr.sons.nombres.016', note: 'Seventeen. Ten and seven, written out.' },
    ],
  },
  unUne: {
    term: 'un / une',
    title: 'The only number with a gender',
    body:
      'One is the single number in French that changes for what it counts: un before a masculine noun, une before a feminine one. Every other number from two upward is the same word whatever follows. It is also the same word as the article a, so un café is both one coffee and a coffee. Saying un where the noun wanted une is the most audible beginner error in this lesson, and it is one letter.',
    examples: [
      { itemId: 'fr.sons.nombres.001', note: 'One, before a masculine noun.' },
      { itemId: 'fr.a1.nombres.235', note: 'One, before a feminine noun. The N is fully said here.' },
    ],
  },
  quantity: {
    term: 'giving an amount',
    title: 'Asking for two of something',
    body:
      'A quantity in French is the number, then the thing, and nothing in between. Deux cafés. Une baguette. Where an amount has a measure it takes de: deux kilos de pommes, never de la or des. The plural S on the noun is silent, so the number in front is the only part of the phrase a listener actually hears carrying the amount. Get the number wrong and nothing else in the sentence corrects it.',
    examples: [
      { itemId: 'fr.a1.cafe.024', note: 'One of something, ordered.' },
      { itemId: 'fr.a1.marche.097', note: 'A measured amount, with de.' },
    ],
  },
  hours: {
    term: 'heures',
    title: 'Where you will hear this every single day',
    body:
      'Heures starts on a vowel sound, so every number in front of it changes: neuf heures, vingt heures, huit heures, dix heures. That makes the clock the place a learner meets the shifting ending most often and recognises it least, because a time is exactly when you are least able to ask for a repeat. France uses the twenty-four hour clock for anything scheduled, so opening hours, trains and cinema times all run past twelve.',
    examples: [
      { itemId: 'fr.a1.nombres.053', note: 'Nine, where the F is said as a V.' },
      { itemId: 'fr.sons.nombres.019', note: 'Twenty, whose silent T wakes up before heures.' },
    ],
  },
};
