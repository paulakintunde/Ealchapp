// a2.15.l1 "Irréguliers 5 : prendre, mettre, battre" — the lesson glossary, its
// reframe, and the constants it inherits from a2.01, a2.09 and a2.11.
//
// A term is defined ONCE and surfaced at every point of use via a section's
// `terms` chips, so a learner meets the same explanation wherever the word turns
// up and no card carries the definition inline.
//
// Three chips per section, maximum. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { NOUS_ON } from './verbes-er-terms.ts';
import { REFRAME as A209_REFRAME } from './verbes-er-exceptions-terms.ts';
import {
  A211_LINE, A211_UNIT, DOUBLING_PERSON, EAR_UNIT, FAMILIES, FAMILY_CLAIM,
  FRAMES, NEIGHBOUR_UNITS, PARADIGM, RESERVED_FOR, STEMS, STEM_COUNT,
  STEM_PRINCIPLE, STEM_UNIT, THE_MOVE, VERBS_BOUGHT, VERB_ORDER,
} from './prendre-mettre-corpus.ts';

/** a2.01's nous/on statement, re-exported rather than retyped.
 *
 *  The ledger binds all twenty A2 lessons to one wording. This lesson has its
 *  own reason to quote it: `on prend` takes the `il` form, so the whole of the
 *  three-stem problem disappears in the spoken plural and reappears the moment
 *  anybody writes anything down. */
export { NOUS_ON };

/** a2.09's reframe, quoted rather than reinvented, AND THIS LESSON IS THE
 *  SECOND HALF OF IT.
 *
 *  a2.09 (seq 2) taught that a French spelling moves so a sound will not, and it
 *  taught the doubling that writes an open vowel where the ending goes silent:
 *  appeler gives j'appelle, jeter gives je jette. `ils prennent` is that
 *  mechanism seven lessons later on a verb nobody would have guessed it applied
 *  to. Doctrine §B.7: pointing at the repeat is the teaching. */
export { A209_REFRAME };

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 *
 *  Declared in the corpus, which is the single source of truth, and re-exported
 *  here so a section imports one thing rather than two.
 * ═══════════════════════════════════════════════════════════════════════ */

export { REFRAME, REFRAME_REJECTED, THE_MOVE, FAMILY_CLAIM } from './prendre-mettre-corpus.ts';
import { REFRAME } from './prendre-mettre-corpus.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/** The arithmetic of the family, derived so a compound removed from FAMILIES
 *  moves the sentence rather than leaving a figure that is no longer true. */
export const FAMILY_ARITHMETIC = `${VERB_ORDER.length} verbs to learn, ${VERBS_BOUGHT} you can build.`;

/** The three stems, stated once, in the one wording every screen uses. */
export const STEM_CLAIM = `${STEMS.prendre.join(' ')} for prendre. ${STEMS.mettre.join(' ')} for mettre and ${STEMS.battre.join(' ')} for battre.`;

/** What separates prendre from the other two. Derived from STEM_COUNT so a
 *  change to the paradigm moves the claim. */
export const ODD_ONE_OUT = `prendre keeps ${STEM_COUNT.prendre} stems where the other two keep ${STEM_COUNT.mettre}.`;

/** The control, stated correctly. The brief said mettre has two t throughout and
 *  it does not: `je mets` has one. What never moves is the PLURAL stem. */
export const CONTROL_CLAIM = 'mettre and battre change once and stop. prendre changes twice.';

/** The line the doubling screen hangs on, and the a2.09 back-reference lives
 *  inside it rather than in a footnote. */
export const DOUBLING_CLAIM = `One n for nous, two for ${DOUBLING_PERSON.split(' · ')[0]}. ${STEM_PRINCIPLE}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GLOSSARY
 * ═══════════════════════════════════════════════════════════════════════ */

export const PRENDRE_METTRE_TERMS: Record<string, LessonTerm> = {
  theFamily: {
    term: 'the family',
    title: 'One verb, and the ones that come with it',
    body:
      `${FAMILY_CLAIM} ${REFRAME} A verb with something stuck on the front of it takes every ending the verb underneath it takes, without exception and without a single new form to learn. ${FAMILIES.prendre.join(', ')} all run on prendre; ${FAMILIES.mettre.join(', ')} all run on mettre. That is the largest return on memorisation anywhere in this level, and it is the reason the last four lessons were worth the time.`,
    examples: [
      { itemId: 'fr.a2.verbes.427', note: 'The head verb, in the plural.' },
      { itemId: 'fr.a2.verbes.441', note: 'A compound, and the verb behind it has not moved.' },
      { itemId: 'fr.a2.verbes.453', note: 'The question at the start of the lesson, and the verb in it is one of these.' },
    ],
  },

  coverTheFront: {
    term: 'cover the front',
    title: 'What to do when a new one arrives',
    body:
      `${REFRAME} ${THE_MOVE} It is a thing you do with your eye rather than a rule you recall, which is why it survives being needed halfway through a sentence. Somebody says remettre and you have never seen it: put a thumb over the re, read mettre, and every one of its six forms is already yours. Put the re back on the front and you are finished. Nothing else in this lesson is worth as much as that.`,
    examples: [
      { itemId: 'fr.a2.verbes.430', note: 'The verb underneath.' },
      { itemId: 'fr.a2.verbes.450', note: 'And the same verb with a front on it.' },
      { itemId: 'fr.a2.verbes.454', note: 'The answer the scene wanted, built out of a verb you already had.' },
    ],
  },

  threeStems: {
    term: 'the three stems',
    title: 'Where prendre keeps changing',
    body:
      `${STEM_CLAIM} ${ODD_ONE_OUT} In the singular the d is written and never said, so ${PARADIGM[0].forms.prendre}, ${PARADIGM[1].forms.prendre} and ${PARADIGM[2].forms.prendre} are one sound. For nous and vous the d goes and an ordinary ending arrives. For ils a second n turns up. Three shapes in six cells is more than any verb you have met so far, and it is the only genuinely hard thing here.`,
    examples: [
      { itemId: 'fr.a2.verbes.426', note: 'The d is there and you do not say it.' },
      { itemId: 'fr.a2.verbes.427', note: 'The d has gone and there is one n.' },
      { itemId: 'fr.a2.verbes.429', note: 'And now there are two.' },
    ],
  },

  theDoubling: {
    term: 'the second n',
    title: `Why ${PARADIGM[5].forms.prendre} has two`,
    body:
      `${DOUBLING_CLAIM} ${Cap(unitRef(STEM_UNIT))} said it first, about a different verb: ${A209_REFRAME} When the ending makes no sound, the stem is the last thing anybody hears, so there has to be something left in it to hear. ${PARADIGM[3].forms.prendre} does not need a second n because the -ons is doing the sounding. ${PARADIGM[5].forms.prendre} does, because the -ent is doing nothing at all. Two lessons, one reason, and it is the same reason both times.`,
    examples: [
      { itemId: 'fr.a2.verbes.427', note: 'The ending sounds, so one n is enough.' },
      { itemId: 'fr.a2.verbes.429', note: 'The ending is silent, so the n has to carry the end of the word.' },
    ],
  },

  theControl: {
    term: 'the other two',
    title: 'mettre and battre change once',
    body:
      `${CONTROL_CLAIM} Both of them lose a t in the singular and get it back for the whole plural: ${PARADIGM[0].forms.mettre}, then ${PARADIGM[3].forms.mettre}, ${PARADIGM[4].forms.mettre}, ${PARADIGM[5].forms.mettre}, and not one of those three is different from the others. That is worth noticing because it is what prendre does NOT do, and reading the two side by side is the fastest way to see what makes prendre the difficult one.`,
    examples: [
      { itemId: 'fr.a2.verbes.430', note: 'One t.' },
      { itemId: 'fr.a2.verbes.433', note: 'Two, and they stay for all three.' },
      { itemId: 'fr.a2.verbes.438', note: 'battre does the same thing on the same cell.' },
    ],
  },

  notVendre: {
    term: 'not a regular one',
    title: `What ${unitRef(A211_UNIT)} would not do`,
    body:
      `${A211_LINE} prendre ends in -re and it is not one of those verbs. Run the regular pattern on it and the plural comes out with a d in it, which is a sound no French speaker makes in this word. Look at ${PARADIGM[3].forms.prendre} beside the regular plural and the difference is a whole letter that has left the building. This is the second time you have been shown a verb that looks like a group it is not in, and it will not be the last.`,
    examples: [
      { itemId: 'fr.a2.verbes.427', note: 'The d is gone.' },
      { itemId: 'fr.a2.verbes.429', note: 'And here it is replaced by a second n.' },
    ],
  },

  theEar: {
    term: 'hearing the plural',
    title: `${PARADIGM[2].forms.prendre} against ${PARADIGM[5].forms.prendre}`,
    body:
      `The singular ends on a nasal vowel and the plural ends on an n, and those are two completely different sounds. That makes this one of the few plurals in French you can hear without being told. ${Cap(unitRef(EAR_UNIT))} had the same gift on a different verb, where the plural grew a whole syllable in the middle. mettre and battre give you the same thing with a t: ${PARADIGM[2].forms.mettre} has nothing at the end and ${PARADIGM[5].forms.mettre} finishes on a hard consonant. Three verbs, three audible plurals, and it is the only place in this lesson the ear is on your side.`,
    examples: [
      { itemId: 'fr.a2.verbes.426', note: 'Ends on the nasal vowel.' },
      { itemId: 'fr.a2.verbes.429', note: 'Ends on an n, and nothing else about the line moved.' },
    ],
  },

  theFrame: {
    term: 'the same key',
    title: 'Why every sentence ends the same way',
    body:
      `Every prendre sentence and every mettre sentence on these screens ends in ${FRAMES.prendre.complement}. That is deliberate and it is doing as much teaching as the verbs are: if the back of the sentence never moves, everything you notice is happening to the verb. Read down a column and the only thing changing is the middle. battre cannot join in, because you do not beat a key, and it takes ${FRAMES.battre.complement} instead. That is the one place the pattern breaks and it breaks for a reason you can see.`,
    examples: [
      { itemId: 'fr.a2.verbes.424', note: 'Take it.' },
      { itemId: 'fr.a2.verbes.430', note: 'Put it down. Same four words behind the verb.' },
      { itemId: 'fr.a2.verbes.436', note: 'And the one that cannot use them.' },
    ],
  },

  battreSmall: {
    term: 'the small one',
    title: 'battre is not the same size as the other two',
    body:
      `It is here because it finishes the set and because ${FAMILIES.battre[0]} is worth recognising, and it is not here in the same quantity as the other two. There is no sentence anywhere in this course that puts battre into one of its six forms, and there are two hundred and thirty-four holding a form of prendre. Learn its shape from mettre, which it copies exactly, keep ${FAMILIES.battre[0]} for recognition, and spend the time you saved on the first two. A course that gave all three equal weight would be teaching you that frequency does not matter.`,
    examples: [
      { itemId: 'fr.a2.verbes.421', note: 'The naming form, and it did not exist until this lesson.' },
      { itemId: 'fr.a2.verbes.438', note: 'Two t in the plural, exactly like mettre.' },
    ],
  },

  theCompoundMeaning: {
    term: 'what the front does',
    title: 'The front changes the meaning, not the endings',
    body:
      're- usually means again or back, so remettre is to put back. com- and ap- and sur- do other things and none of it is predictable, so what a verb MEANS is a vocabulary question and you look it up. The endings are not a vocabulary question. They are settled the moment you can see which verb is underneath, and they are settled for every verb in the family that exists, including the ones nobody has taught you.',
    examples: [
      { itemId: 'fr.a2.verbes.443', note: 'com- plus prendre, and it means to understand.' },
      { itemId: 'fr.a2.verbes.446', note: 'sur- plus prendre, and it means to surprise.' },
      { itemId: 'fr.a2.verbes.452', note: 'com- plus battre, and it means to fight.' },
    ],
  },

  theParticiples: {
    term: 'the past of these',
    title: `${Cap(unitRef(RESERVED_FOR, 'a2'))} takes that`,
    body:
      `These three have past forms that nothing about the present tells you, and they are among the most useful in the language. They are not in this lesson and that is deliberate rather than an omission: ${unitRef(RESERVED_FOR, 'a2')} is built around them and it comes after the two lessons that give you the tense they live in. What you have here is the present, in all six persons, for three families of verbs. That is enough to be going on with.`,
    examples: [
      { itemId: 'fr.a2.verbes.424', note: 'The present, which is what this lesson is.' },
    ],
  },

  theIdioms: {
    term: 'the other prendre',
    title: 'Where the fixed expressions are taught',
    body:
      `prendre turns up in a great many set phrases where it has stopped meaning take at all, and English does not use take in any of them. Those belong to two later units and they are the whole opening of both: ${unitRef(NEIGHBOUR_UNITS.transport, 'a2')} for the ones about getting somewhere and ${unitRef(NEIGHBOUR_UNITS.restaurant, 'a2')} for the ones about ordering something. Nothing in this lesson teaches them, on purpose. What this lesson gives you is the six forms, which is what you will need on the day either of those arrives.`,
    examples: [
      { itemId: 'fr.a2.verbes.424', note: 'The plain meaning, which is the one being built here.' },
    ],
  },

  nousOn: {
    term: 'on',
    title: 'The we people actually say',
    body: NOUS_ON,
    examples: [{ itemId: 'fr.a2.verbes.426', note: 'on takes the il form, so on prend is this row with one word changed and no new spelling to learn.' }],
  },
};
