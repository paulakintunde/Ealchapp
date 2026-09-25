// a2.36.l1 « Les pronoms toniques » — the lesson glossary. DRAFT.
//
// Three chips per section at most, 37-character chip budget on a Pixel 6, and
// every term surfaced by at least one section (the batch asserts it).
//
// `examples` resolve against the corpus by itemId. They are also how two
// dictation-only imports become reachable (corpus §F, NOT_DECK_ABLE).

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import {
  E, Cap, SUBJECT_REF, INDIRECT_REF, PLACE_REF, NEGATION_REF, GREETING_REF,
} from './pronoms-toniques-corpus.ts';

export const PRONOMS_TONIQUES_TERMS: Record<string, LessonTerm> = {
  /** THE OWNS. The verb test. */
  onItsOwn: {
    term: 'on its own',
    title: 'No verb right after it',
    body: `je, tu, il and ils need a verb straight after them. When the person is on its own, after a little word, after c'est, as a one-word answer or out in front, French uses the other set. ${Cap(SUBJECT_REF)} gave you the first set and saved this one for later.`,
    examples: [
      { itemId: E(400), note: 'a verb right after it, so je' },
      { itemId: E(401), note: 'nothing after it, so moi' },
      { itemId: E(424), note: 'a one-word answer' },
    ],
  },

  /** The four that do not change. */
  sameFour: {
    term: 'the four that match',
    title: 'Half of them you already have',
    body: 'elle, nous, vous and elles are the same word in both jobs. Only je, tu, il and ils change: moi, toi, lui, eux. So the choice only ever matters for four people, and those four are the ones people say most.',
    examples: [
      { itemId: E(410), note: 'elle, after a little word' },
      { itemId: E(411), note: 'nous, the same' },
      { itemId: 'fr.a2.pronoms-essentiels.057', note: 'nous twice, one in each job' },
    ],
  },

  /** TRAP 1. */
  himOnly: {
    term: 'lui, him only',
    title: 'The lui that keeps its gender',
    body: `In front of a verb, lui is him or her, and ${INDIRECT_REF} made a point of it. After a little word it is him and nothing else. For her, say elle: avec elle, sans elle, pour elle.`,
    examples: [
      { itemId: 'fr.a2.pronoms-essentiels.238', note: 'in front of the verb, him or her' },
      { itemId: 'fr.a2.pronoms-essentiels.261', note: 'after avec, him' },
      { itemId: E(429), note: 'after avec, her' },
    ],
  },

  /** TRAP 2. */
  euxElles: {
    term: 'eux or elles',
    title: 'One man in the group is enough',
    body: 'eux is them for men, and for any group with a man in it. elles is them only when every person is a woman. It works the way ils and elles already do.',
    examples: [
      { itemId: E(433), note: 'Marc and Julie, so eux' },
      { itemId: E(434), note: 'Léa and Julie, so elles' },
      { itemId: 'fr.a2.pronoms-essentiels.061', note: 'the headword' },
    ],
  },

  /** Layout 3, the register pair. */
  cestEux: {
    term: "c'est eux",
    title: 'What you write, what you say',
    body: "Ce sont eux is what you write. C'est eux is what you will hear, and it is correct French too. With moi, toi, lui, elle, nous and vous there is only c'est.",
    examples: [
      { itemId: E(418), note: 'written' },
      { itemId: E(419), note: 'said' },
      { itemId: E(415), note: "one person, so only c'est" },
    ],
  },

  /** The chunks the learner already has. */
  known: {
    term: 'ones you know',
    title: 'You have been saying these for months',
    body: `Et toi ? since ${GREETING_REF}. Chez moi since ${PLACE_REF}. Moi non plus since ${NEGATION_REF}. Every one of them is this set, and every one follows the same rule: no verb right after it.`,
    examples: [
      { itemId: 'fr.a1.salutations.087', note: 'and you?' },
      { itemId: 'fr.a2.prepositions-essentielles.141', note: 'chez takes a person' },
      { itemId: 'fr.a1.expressions-utiles.095', note: 'the reply to a negative' },
    ],
  },
};
