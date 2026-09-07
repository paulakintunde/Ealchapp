// a2.32.l1 « La technologie » — the lesson glossary.
//
// Defined once, surfaced wherever used. A section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Every key here is short for that reason, and every one is
// surfaced by at least one section — an unsurfaced term is a definition
// nobody can reach, which the test asserts against.
//
// `examples` resolve against the corpus by itemId, so a term never restates a
// transcription.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { E } from './technologie-corpus.ts';

export const TECHNOLOGIE_TERMS: Record<string, LessonTerm> = {
  /** THE OWNS, defined once. Called "voice" and never "rung": a numbered rung
   *  belongs to a2.07's repair move, a named rung to a2.29's ladder, and this
   *  unit's three are voices because nothing escalates between them. */
  voice: {
    term: 'voice',
    title: 'Who the word is talking to',
    body: 'One object, more than one name, and the name you pick says who you think you are speaking to. A screen, a support agent and a friend do not use the same word for the same thing. Nothing here is more polite than anything else; two of the three are simply wrong for the person in front of you.',
    examples: [
      { itemId: 'fr.a2.rp-technologie.012', note: 'What a form calls it.' },
      { itemId: 'fr.a2.internet.002', note: 'What an agent says, and what Canada writes.' },
      { itemId: E(182), note: 'What a friend in France says.' },
    ],
  },

  /** §8.5, and it earns its chip: an English speaker says why-fye and is not
   *  understood. `fr.a2.internet.018` already carries the note; this surfaces
   *  it to the learner, which is where it was never reaching. */
  wifi: {
    term: 'wifi',
    title: 'Said weefee, not why-fye',
    body: 'French took the word and not the pronunciation. It is two clean syllables, wee then fee, with the stress on the second. Say it the English way to a French technician and the sentence stops there, which is a strange way to lose a conversation about a router.',
    examples: [{ itemId: 'fr.a2.internet.018', note: 'The respelling is the whole lesson.' }],
  },

  /** The mechanism, not the list (design risk 12). `un texto` and
   *  `le clavardage` are already dating; the mechanism does not age. */
  borrowed: {
    term: 'borrowed',
    title: 'Taken, translated, or both',
    body: 'French borrows an English tech word, official French translates it, and Quebec resists hardest. Some words go one way only. Some have both a borrowed and a translated form, and then which one you use is a regional signal rather than a matter of being right.',
    examples: [
      { itemId: 'fr.a2.internet.018', note: 'Taken whole, sound and all.' },
      { itemId: 'fr.a2.internet.042', note: 'Translated, and the English word is not used.' },
    ],
  },

  /** The machine's half of the unit, named. It is what makes this unit the
   *  only one in the band with nobody on the other side of the counter. */
  screen: {
    term: 'screen',
    title: 'What a screen says to you',
    body: 'An interface tells you to do things. It does not ask, it does not explain, and it will not say it again differently if you did not follow. These are fixed strings: learn each one whole, with what it means you should do next, the way you learned bonjour.',
    examples: [
      { itemId: E(188), note: 'It wants the code, now, in that box.' },
      { itemId: E(190), note: 'Do nothing. It is working.' },
    ],
  },

  /** The phone menu, named so mission 11 can chip it. TEF/TCF CO plays each
   *  recording once, and a menu is the purest form of that. */
  menu: {
    term: 'menu',
    title: 'The recorded menu',
    body: 'A list of options read out by a machine, each one ending in a number to press. It plays once at its own speed and there is nobody to ask. Listen for the number and for the one word that tells you which option is yours, not for the whole sentence.',
    examples: [
      { itemId: E(195), note: 'The word is connexion. The number is 1.' },
      { itemId: E(197), note: 'The word is technicien. The number is 3.' },
    ],
  },

  /** The support call, and the thing that makes it hard. Named so the two
   *  production sections can chip it. */
  invisible: {
    term: 'invisible',
    title: 'They cannot see your screen',
    body: 'In a shop you can point. On a support line the other person has nothing but what you say, so you have to give four things nobody asks you for: what happened, when it started, what you already tried, and what the message said. That is the whole call.',
    examples: [
      { itemId: E(199), note: 'When.' },
      { itemId: E(201), note: 'What the message said.' },
    ],
  },
};
