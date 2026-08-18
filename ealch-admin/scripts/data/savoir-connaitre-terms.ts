// a2.14.l1 "Irréguliers 4 : savoir & connaître" — the lesson glossary, its
// reframe, and the constants it inherits from a2.01, a2.02 and a2.13.
//
// A term is defined ONCE and surfaced at every point of use via a section's
// `terms` chips, so a learner meets the same explanation wherever the word turns
// up and no card carries the definition inline.
//
// Three chips per section, maximum. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { NOUS_ON } from './verbes-er-terms.ts';
import { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT } from './aller-venir-terms.ts';
import {
  CHROME_DECISION, COMPLEMENTS, CONTRAST_UNIT, FAMILY_MEMBER, FAMILY_UNIT,
  FRAMES, IMPOSSIBLE, PARADIGM, SINGULAR_PERSONS, SINGULAR_SPELLINGS,
  SINGULAR_UNIT, THE_TEST, VERB_ORDER,
} from './savoir-connaitre-corpus.ts';

/** a2.01's nous/on statement, re-exported rather than retyped.
 *
 *  The ledger binds all twenty A2 lessons to one wording. This lesson has its
 *  own reason to quote it: `on connaît` and `on sait` take the `il` form, and
 *  `On connaît Paris.` is one of the few plural-meaning sentences in the lesson
 *  that fits inside the dictée's letter limit — because it is not plural at all
 *  on the page. */
export { NOUS_ON };

/** a2.02's pattern name, imported rather than reinvented, AND THIS LESSON IS THE
 *  CLEANEST INSTANCE OF IT IN THE LEVEL.
 *
 *  a2.02 named the shape as ONE form doing TWO jobs, split by what follows it
 *  (`venir de` plus an action against `venir de` plus a place). a2.14 is the
 *  mirror image: TWO forms doing ONE job, and what follows is again the only
 *  thing that picks between them. The phrase is quoted verbatim rather than
 *  paraphrased, because doctrine §B.7 says the value is in the learner
 *  recognising the repeat. */
export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 *
 *  Declared in the corpus, which is the single source of truth, and re-exported
 *  here so a section imports one thing rather than two.
 * ═══════════════════════════════════════════════════════════════════════ */

export { REFRAME, REFRAME_REJECTED, THE_TEST } from './savoir-connaitre-corpus.ts';
import { REFRAME } from './savoir-connaitre-corpus.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** The claim the Owns act makes. Derived from the paradigm so the figure cannot
 *  drift away from the grid. */
export const CHOICE_CLAIM = `${VERB_ORDER.length} verbs, ${PARADIGM.length * VERB_ORDER.length} forms, and one question that picks between them every time.`;

/** The arithmetic of the singular, stated once. BOTH verbs do what a2.13 named
 *  on all three of its own, so this lesson states it and points rather than
 *  re-deriving it across a mission. */
export const SINGULAR_CLAIM = `${SINGULAR_PERSONS} persons, ${SINGULAR_SPELLINGS} spellings, one sound. ${Cap(unitRef(SINGULAR_UNIT))} found the same thing on three other verbs.`;

/** What English does not give the learner, said plainly once. */
export const NO_INSTINCT = 'English has one verb here and French has two, so nothing you already own tells you which to reach for.';

/** The frames, in words, derived so a change to FRAMES moves the sentence. */
export const FRAME_CLAIM = VERB_ORDER
  .map((v) => `${v} ${FRAMES[v].complement}`)
  .join(' · ');

/** Why the two paradigms do NOT share a frame, which is the design decision of
 *  the lesson and the one place it departs from a2.13's best idea. */
export const TWO_FRAMES = `${Cap(unitRef('a2.13'))} put eighteen sentences on one verb so that nothing at the back would move. Here the back of the sentence is the whole point, so the two sides cannot share one.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GLOSSARY
 * ═══════════════════════════════════════════════════════════════════════ */

export const SAVOIR_CONNAITRE_TERMS: Record<string, LessonTerm> = {
  theChoice: {
    term: 'which of the two',
    title: 'One English verb, two French ones',
    body:
      `${NO_INSTINCT} ${REFRAME} ${THE_TEST} That is the whole lesson, and it is worth more than both sets of forms put together: those take a few minutes and the choice is the thing you will be making in every sentence for the rest of your life in French. A learner who guesses is wrong about half the time, and wrong in a way the other person hears immediately, because the two verbs do not mean nearly the same thing.`,
    examples: [
      { itemId: 'fr.a2.verbes.381', note: 'A verb follows, so the sentence keeps going.' },
      { itemId: 'fr.a2.verbes.387', note: 'A name follows, and the sentence stops there.' },
    ],
  },

  whatFollows: {
    term: WHAT_FOLLOWS,
    title: `You met this shape at ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}`,
    body:
      `${WHAT_FOLLOWS}. ${Cap(unitRef(WHAT_FOLLOWS_UNIT))} named that, on one verb doing two jobs. This lesson is the same shape turned round: two verbs doing one job, and again it is the next word that picks. French does this often enough that it is worth learning the habit rather than the instance. The instinct to decide what a sentence means before it has finished is a hard one to switch off, and it is exactly the instinct that produces the wrong verb here.`,
    examples: [
      { itemId: 'fr.a2.verbes.393', note: 'Keeps going into a whole sentence. savoir.' },
      { itemId: 'fr.a2.verbes.398', note: 'Stops on a thing. connaître.' },
    ],
  },

  savoirReach: {
    term: 'what goes after savoir',
    title: 'A verb, or a whole sentence',
    body:
      `savoir takes ${COMPLEMENTS.savoir.takes}. Je sais nager is a verb; je sais où elle habite is a whole sentence hanging off the first one. Both keep going, and that is what they have in common. The thing savoir does NOT take is ${COMPLEMENTS.savoir.never}: if the only thing left to say is a name, you have reached for the wrong verb. English hides all of this because it says know for every one of them.`,
    examples: [
      { itemId: 'fr.a2.verbes.381', note: 'A verb. I learned how.' },
      { itemId: 'fr.a2.verbes.393', note: 'A whole sentence, and it is about a place.' },
      { itemId: 'fr.a2.verbes.394', note: 'Another whole sentence, this time a fact.' },
    ],
  },

  connaitreReach: {
    term: 'what goes after connaître',
    title: 'A thing, and then it stops',
    body:
      `connaître takes ${COMPLEMENTS.connaître.takes}, and then the sentence is over. It never takes ${COMPLEMENTS.connaître.never}. That is not a tendency or a preference; there is no such sentence in French, and « ${IMPOSSIBLE.wrong} » is not a clumsy way of saying something, it is not a sentence at all. What connaître means underneath all of this is having been there or having met them: you have stood in the place, you have shaken the hand, you have heard the song.`,
    examples: [
      { itemId: 'fr.a2.verbes.387', note: 'A place you have stood in.' },
      { itemId: 'fr.a2.verbes.399', note: 'A person you have met.' },
      { itemId: 'fr.a2.verbes.402', note: 'A song you have heard.' },
    ],
  },

  theImpossible: {
    term: 'the sentence that cannot exist',
    title: 'connaître and a whole sentence',
    body:
      `« ${IMPOSSIBLE.wrong} » is what an English speaker builds by translating word for word, and it is the single commonest thing to get wrong here. ${IMPOSSIBLE.why} The right one is « ${IMPOSSIBLE.right} », and notice that nothing about the meaning changed: it was never a choice between two ways of saying it. Picking the right verb from a list is easy and producing this shape under pressure is not, which is why the exam makes you write it out rather than choose it.`,
    examples: [
      { itemId: 'fr.a2.verbes.393', note: 'The sentence keeps going, so savoir carries it.' },
      { itemId: 'fr.a2.verbes.397', note: 'The same shape in the form you will actually need.' },
      { itemId: 'fr.a2.verbes.408', note: 'The same shape again, with que run into the word after it.' },
    ],
  },

  theThirdVerb: {
    term: 'and the third one',
    title: `${Cap(unitRef(CONTRAST_UNIT))} gave you a verb that also becomes can`,
    body:
      `Je sais nager and je peux nager are both I can swim in English, and they are not the same claim. sais is about having learned: at some point somebody taught you and now you can do it. peux is about nothing standing in the way: the pool is open, the water is warm, nobody has stopped you. ${Cap(unitRef(CONTRAST_UNIT))} built pouvoir in full and this lesson does not build it again; what it does is put the two side by side, because a learner who has these three straight has something most English speakers never fully sort out.`,
    examples: [
      { itemId: 'fr.a2.verbes.381', note: 'Somebody taught me.' },
      { itemId: 'fr.a2.verbes.403', note: 'Nothing is stopping me. It says nothing about lessons.' },
      { itemId: 'fr.a2.verbes.405', note: 'Both at once, and they disagree.' },
    ],
  },

  theSingular: {
    term: 'why je, tu and il sound the same',
    title: SINGULAR_CLAIM,
    body:
      `Je sais, tu sais, il sait. Two of those are spelled identically and the third differs by one silent letter, and all three are one sound in the mouth. connais, connais, connaît does exactly the same thing. ${Cap(unitRef(SINGULAR_UNIT))} spent a whole screen proving it on vouloir, pouvoir and devoir, so this lesson is not going to prove it again: it is simply true of these two as well. In writing you must pick the right one; in speech there is nothing to pick, and the word in front is carrying all of it.`,
    examples: [
      { itemId: 'fr.a2.verbes.381', note: 'sais' },
      { itemId: 'fr.a2.verbes.383', note: 'sait, and not one sound different.' },
    ],
  },

  thePlural: {
    term: 'the double s',
    title: 'Where connaître grows',
    body:
      `The three plural forms of connaître all take a double s: ${PARADIGM[3].forms.connaître}, ${PARADIGM[4].forms.connaître}, ${PARADIGM[5].forms.connaître}. It arrives with nous and it never leaves. savoir does the opposite and gets shorter: ${PARADIGM[3].forms.savoir}, ${PARADIGM[4].forms.savoir}, ${PARADIGM[5].forms.savoir}, and the last of those is four letters. The endings themselves are the ones you have had since ${unitRef('a2.01')} and none of them is new. What is new is which stem they land on.`,
    examples: [
      { itemId: 'fr.a2.verbes.390', note: 'The double s, and the ordinary -ons.' },
      { itemId: 'fr.a2.verbes.392', note: 'The -ent is silent, so what you hear is the double s.' },
    ],
  },

  theCircumflex: {
    term: 'the hat on connaît',
    title: 'One form, one accent, no sound',
    body:
      `Only ${PARADIGM[2].forms.connaître} carries it, and it appears on no other form of either verb. It changes nothing at all about how the word is said. Spelling reform allows the version without it and this course has never used one: every one of the 82 places an -aître word appears in this app spells it with the hat, so that is what you will read and that is what you should write. It is the kind of thing worth deciding once and never thinking about again.`,
    examples: [
      { itemId: 'fr.a2.verbes.389', note: 'The only place it appears.' },
      { itemId: 'fr.a2.verbes.388', note: 'One person earlier, and it is gone.' },
    ],
  },

  theTwoFrames: {
    term: 'why the two sides look different',
    title: 'One verb behind, one name behind',
    body:
      `${TWO_FRAMES} Every sentence on the savoir side of the grid ends in ${FRAMES.savoir.complement} and every sentence on the connaître side ends in ${FRAMES.connaître.complement}, and those two words are doing the teaching as much as the verbs are. Read across a line and the only differences are the verb and what kind of word is behind it. That is the shape you are being asked to notice, and it is the shape you will run in your head every time you build one of these.`,
    examples: [
      { itemId: 'fr.a2.verbes.383', note: `${FRAMES.savoir.complement} is ${FRAMES.savoir.kind}.` },
      { itemId: 'fr.a2.verbes.389', note: `${FRAMES.connaître.complement} is ${FRAMES.connaître.kind}.` },
    ],
  },

  theFamily: {
    term: FAMILY_MEMBER.fr,
    title: 'The same endings, three letters longer',
    body:
      `${FAMILY_MEMBER.fr} [${FAMILY_MEMBER.respell}] means to recognise, and it takes every ending connaître takes: je ${'reconnais'}, nous ${'reconnaissons'}, ils ${'reconnaissent'}. That is all you need from it here, and it is recognition rather than something to produce. What it can take AFTER it is a different question and a more interesting one, and it belongs to ${unitRef(FAMILY_UNIT)}, which is the very next lesson. Do not assume it takes the same things after it, because it does not.`,
    examples: [
      { itemId: FAMILY_MEMBER.id, note: 'The naming form. Recognition only.' },
      { itemId: 'fr.a2.verbes.410', note: 'Same endings. Do not read anything else into it yet.' },
    ],
  },

  theChrome: {
    term: CHROME_DECISION.roundupHeading,
    title: 'You have read this at the end of every lesson',
    body:
      `The heading at the top of this screen is « ${CHROME_DECISION.roundupHeading} », and it has been at the top of the last screen of every lesson you have finished. It is savoir followed by a verb: what you know how to do. Nobody explained it at the time because there was nothing yet to explain it with. Now there is, and you can read it. That is a small thing and it is the kind of small thing that turns a language from a subject into something you are inside of.`,
    examples: [
      { itemId: 'fr.a2.verbes.381', note: 'The same shape, in the first sentence of the lesson.' },
    ],
  },

  nousOn: {
    term: 'on',
    title: 'The we people actually say',
    body: NOUS_ON,
    examples: [{ itemId: 'fr.a2.verbes.404', note: 'on takes the il form, so what follows it here is peut and nothing longer.' }],
  },
};
