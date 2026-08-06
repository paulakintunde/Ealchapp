// a1.01.l1 "Les salutations" — the lesson glossary and its reframe.
//
// Split out for the same reason elision-terms.ts is: a term is defined ONCE and
// surfaced at every point of use via a section's `terms` chips, so a learner
// meets the same explanation wherever the word turns up and no card carries the
// definition inline.
//
// ── What an A1 term is, and is not ─────────────────────────────────────────
//
// The sons glossaries define NOTATION and PHONOLOGY: what IPA is, what an h
// aspiré does, what a nasal vowel is. Those are facts about the language.
//
// An A1 term defines a SOCIAL FACT the learner has to act on. "vous" is not a
// pronoun to be parsed, it is a decision about distance that gets made before
// the sentence starts. So each body below answers "what does this cost me if I
// get it wrong", not "what category does this belong to". That is the split the
// A1 standard turns on; see A1-LESSON-STANDARD.md.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the merge script can report it and the test can count it rather
 *  than restating the string. The density validator requires it VERBATIM in at
 *  least three sections; this lesson carries it in seven, which is the sons
 *  house density and the point at which a line stops being a sentence that
 *  happened once.
 *
 *  Why this one and not the register split: both are real, and only one is
 *  something a learner can test tomorrow. A learner cannot verify "vous is
 *  safer" without a month of French. They can verify this on their first
 *  morning, in any shop in France, and the result is unmistakable. It is also
 *  what the opening scene actually dramatises. The register split is the
 *  lesson's second axis and is carried by `grammarIntroduced` and by the paired
 *  items, not by the reframe. */
export const REFRAME = 'Bonjour is the price of entry.';

export const SALUTATIONS_TERMS: Record<string, LessonTerm> = {
  register: {
    term: 'register',
    title: 'The choice you make before you speak',
    body:
      'Register is how close you are to the person you are talking to, expressed in the words you pick. English carries it in tone: you say the same words to a friend and to a stranger and let your voice do the work. French carries it in the words themselves, so the choice is made before you open your mouth and it is visible in every sentence. This lesson teaches both settings of the switch.',
  },
  vous: {
    term: 'vous',
    title: 'The form for distance',
    body:
      'Use vous for anyone you do not know, anyone older, anyone serving you, anyone at work, and any group of people. It is not stiff and it is not cold. It is the setting French leaves on by default, and using it with someone who expected tu reads as polite. Using tu with someone who expected vous does not.',
    examples: [
      { itemId: 'fr.a1.salutations.015', note: 'The vous form of "how are you".' },
      { itemId: 'fr.a1.salutations.010', note: 'Please, in the vous form. The one to reach for in a shop.' },
    ],
  },
  tu: {
    term: 'tu',
    title: 'The form for closeness',
    body:
      'Use tu with friends, family, children, animals, and people your own age once you have been invited to. That invitation is a real moment and it has a verb: on se tutoie, we use tu with each other. Until somebody offers it, you are not being distant by staying on vous, you are being correct.',
    examples: [
      { itemId: 'fr.a1.salutations.079', note: 'The tu form of the same question.' },
      { itemId: 'fr.a1.salutations.011', note: 'Please, in the tu form. One word swapped.' },
    ],
  },
  titles: {
    term: 'madame / monsieur',
    title: 'The word that goes after bonjour',
    body:
      'French adds the title far more often than English adds "sir" or "madam", and it is warm rather than formal. Bonjour madame in a bakery is ordinary; bonjour on its own is slightly bare. There is no surname attached and none is expected. Mademoiselle has fallen out of use for adults, so madame covers every woman you are addressing.',
    examples: [
      { itemId: 'fr.a1.salutations.111', note: 'Any woman you are addressing.' },
      { itemId: 'fr.a1.salutations.112', note: 'Any man you are addressing.' },
    ],
  },
  salut: {
    term: 'salut',
    title: 'The greeting with a guest list',
    body:
      'Salut is the one greeting here that runs both ways, hello and goodbye, and the only one restricted by who rather than by the clock. It belongs to people you tutoie. Said to a shopkeeper or anyone older it does not read as friendly, it reads as over-familiar, and that lands harder than being too formal ever does. If you are unsure whether you may say salut, you may not yet.',
    examples: [
      { itemId: 'fr.a1.salutations.003', note: 'Hello and goodbye, but only with people you tutoie.' },
    ],
  },
  bonsoir: {
    term: 'bonsoir / bonne soirée',
    title: 'Same part of the day, opposite doors',
    body:
      'Bonsoir is hello after dark. Bonne soirée is goodbye after dark. They sound close and they are not interchangeable: walking into a restaurant on bonne soirée wishes the room a good evening on your way in, which is the wrong door. Bonne nuit is a third thing again and means sleep well, so it belongs only where sleep is next.',
    examples: [
      { itemId: 'fr.a1.salutations.002', note: 'Arriving, once the light has gone.' },
      { itemId: 'fr.a1.salutations.037', note: 'Leaving, once the light has gone.' },
    ],
  },
  caVa: {
    term: 'ça va',
    title: 'Two words doing three jobs',
    body:
      'Rising tone and it asks. Flat tone and it answers. It is also the everyday alternative to the fuller comment allez-vous, which is why you will hear it more than any other question in this lesson. The part learners drop is the hand-back: answer and stop, and you have closed the exchange down. Add et vous or et toi and it stays a conversation.',
    examples: [
      { itemId: 'fr.a1.salutations.016', note: 'Asking.' },
      { itemId: 'fr.a1.salutations.081', note: 'Answering.' },
      { itemId: 'fr.a1.salutations.083', note: 'Answering when the answer is not "fine".' },
    ],
  },
  deRien: {
    term: 'de rien',
    title: 'The half of politeness that gets left out',
    body:
      'Courses teach merci and stop there, which leaves you silent at the exact moment someone thanks you. De rien is the everyday answer, literally "of nothing". Je vous en prie is the same move one register up and is what you will hear from anyone serving you. Answering merci with merci leaves the thanks hanging in the air.',
    examples: [
      { itemId: 'fr.a1.salutations.013', note: 'The everyday reply.' },
      { itemId: 'fr.a1.salutations.052', note: 'The same reply, one register up.' },
    ],
  },
  enchante: {
    term: 'enchanté',
    title: 'The one word an introduction needs',
    body:
      'Said on being introduced, and it is enough on its own. A man writes enchanté and a woman writes enchantée; the extra e agrees with the speaker and changes nothing about how the word sounds, so the two are identical out loud and only ever differ on paper.',
    examples: [
      { itemId: 'fr.a1.salutations.017', note: 'Pleased to meet you.' },
    ],
  },
};
