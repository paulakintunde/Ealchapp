// a1.24.l1 "Le corps", the lesson glossary and its reframe.
//
// Split out for the same reason couleurs-terms.ts and pays-terms.ts are: a term
// is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea
// turns up and no card carries the definition inline.
//
// ── No grammar jargon on a learner surface ────────────────────────────────
//
// « article défini », « possessif », « contraction », « accord », « adjectif »
// and « invariable » appear nowhere below and nowhere on any card. a1.03 taught
// gender as "the un kind and the une kind", a1.04 taught le/la/les as "the
// little word in front", a1.13 taught agreement as "the describing word
// follows the thing", and this lesson keeps all four. `grammarIntroduced` is
// addressed to the curriculum and may use the precise words; the test pins the
// split.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it against an
 *  explicit constant rather than a figure derived from the lesson. The density
 *  validator requires it VERBATIM in at least three sections; this lesson
 *  carries it in seven, inside the band the shipped lessons set (a1.01 eight,
 *  a1.21 eight, a1.14 nine, a1.13 twelve, a1.17 twelve, a1.22 thirteen).
 *
 *  ── Why this one ────────────────────────────────────────────────────────
 *
 *      The person goes in the verb. The body part takes le, la or les.
 *
 *  Both hard clauses of the canDo are the same grammatical move wearing two
 *  coats, and this names the move rather than either coat:
 *
 *      j'ai mal à la tête        the person is in j'ai, the head takes la
 *      il a les yeux marron      the person is in il a, the eyes take les
 *
 *  English does the opposite in both: it carries the person on the noun with a
 *  possessive (my head, his eyes) and puts the state in the verb (hurts, are).
 *  That inversion is the whole unit, and a learner who makes this one choice at
 *  the moment of speaking gets both halves right.
 *
 *  It is a CHOICE, not a rule about the language. It is true across the whole
 *  lesson rather than one section. And it is checkable in the next sentence the
 *  learner says about a body, which is the test the template sets.
 *
 *  ── What was rejected, and why ──────────────────────────────────────────
 *
 *  "Use avoir, not être." True of the describing half, and false of the hurting
 *  half in the form a learner would apply it. It also says nothing about the
 *  article, which is the part they actually get wrong.
 *
 *  "Never use mon with a body part." Negative, and not quite true: `mon dos` is
 *  a perfectly good noun phrase and is only wrong inside the `avoir mal` frame.
 *  A reframe a learner can falsify in a week is worse than no reframe.
 *
 *  "Body parts take the." Half the rule. It leaves the learner with
 *  « la tête a mal », which is not French and which no card here shows.
 *
 *  "Say what you HAVE, not what IS." Closer, and it was the runner-up. It loses
 *  because it does not mention the article at all, and the article is the half
 *  a1.17 has just spent a whole lesson pointing somewhere else.
 */
export const REFRAME = 'The person goes in the verb. The body part takes le, la or les.';

export const CORPS_TERMS: Record<string, LessonTerm> = {
  theFrame: {
    term: 'avoir mal à',
    title: 'How French says something hurts',
    body:
      'French puts the person in the verb and leaves the body part with its ordinary little word. '
      + 'You say the equivalent of "I have pain at the head" rather than "my head hurts". '
      + 'Nothing about it is optional: this is simply how the sentence is built.',
    examples: [
      { itemId: 'fr.a1.corps.007', note: 'The person is in j\'ai. The head keeps la.' },
      { itemId: 'fr.a1.corps.008', note: 'Same shape, different person, and le dos becomes au dos.' },
    ],
  },

  theFourShapes: {
    term: 'à la, au, aux, à l\'',
    title: 'The four shapes of the little word',
    body:
      'You already have these from the prepositions lesson. À plus le becomes au and à plus les '
      + 'becomes aux, while à la and à l\' are left alone. The body part decides which one you get, '
      + 'and you never choose it freely.',
    examples: [
      { itemId: 'fr.a1.corps.008', note: 'le dos, so au dos.' },
      { itemId: 'fr.a1.corps.103', note: 'les dents, so aux dents.' },
      { itemId: 'fr.a1.corps.299', note: "l'oreille, so à l'oreille, with no change at all." },
    ],
  },

  notYours: {
    term: 'not mon, not ma',
    title: 'Where the possessive stops',
    body:
      'You learned mon, ma and mes recently and they are right almost everywhere. This is the place '
      + 'they stop. A body part inside these sentences takes le, la or les, because the person is '
      + 'already carried by the verb and saying it twice is what marks the sentence as foreign.',
    examples: [
      { itemId: 'fr.a1.corps.007', note: 'Not « ma tête fait mal ». The person is in j\'ai.' },
      { itemId: 'fr.a1.corps.104', note: 'Not « mes yeux sont bleus ». The person is in j\'ai.' },
    ],
  },

  describing: {
    term: 'avoir les yeux',
    title: 'Describing someone, the French way',
    body:
      'The same move again. Where English says his eyes are blue, French says he has the blue eyes. '
      + 'The person is in the verb, and the eyes and the hair keep les.',
    examples: [
      { itemId: 'fr.a1.corps.104', note: 'J\'ai, then les yeux. Never « mes yeux sont ».' },
      { itemId: 'fr.a1.corps.106', note: 'Elle a, then les cheveux.' },
    ],
  },

  bothPlural: {
    term: 'les yeux, les cheveux',
    title: 'Two words that are always plural',
    body:
      'Hair is one thing in English and many in French, and so is the pair of eyes. Both take les, '
      + 'and any colour or shape word after them takes an s to match. You cannot hear that s, which '
      + 'is exactly what a1.13 warned you about.',
    examples: [
      { itemId: 'fr.a1.corps.104', note: 'bleus, with an s you never pronounce.' },
      { itemId: 'fr.a1.corps.106', note: 'longs, same silent s.' },
    ],
  },

  leftAlone: {
    term: 'marron, châtain clair',
    title: 'The colours that refuse the s',
    body:
      'You met this in the colours lesson: a colour that started life as something else keeps its '
      + 'own shape. Marron is a chestnut. Châtain clair is two words. Neither ever takes an ending, '
      + 'and the eyes and the hair are where you will meet both.',
    examples: [
      { itemId: 'fr.a1.corps.297', note: 'marron, with nothing added, after a plural les yeux.' },
      { itemId: 'fr.a1.corps.298', note: 'Two words, and neither half changes.' },
    ],
  },
};
