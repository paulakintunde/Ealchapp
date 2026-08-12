// a2.10.l1 "Les verbes en -IR" — the lesson glossary, its reframe, and the two
// constants it inherits from a2.01.
//
// Split out for the same reason verbes-er-terms.ts is: a term is defined ONCE and
// surfaced at every point of use via a section's `terms` chips, so a learner meets
// the same explanation wherever the word turns up and no card carries the
// definition inline.
//
// Three chips per section, maximum. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { NOUS_ON, REFRAME as A201_REFRAME } from './verbes-er-terms.ts';

/** a2.01's nous/on statement, re-exported rather than retyped.
 *
 *  The ledger binds all twenty A2 lessons to one wording, stated by a2.01 in
 *  `s06-nous-on`. This lesson has a real reason to quote it, and it is not the
 *  reason a2.09 had. `on` takes the `il` form, so `on finit` is the SINGULAR
 *  shape: the most common spoken first-person plural in French grows nothing at
 *  all. A learner running this lesson's reframe on a real conversation will hear
 *  `on finit` and conclude one person, and the only defence is knowing that `on`
 *  is grammatically singular. That is a2.01's sentence doing work here that it
 *  did not do there. */
export { NOUS_ON };

/** a2.01's REFRAME, imported verbatim so this lesson can quote the thing it is
 *  about to invert.
 *
 *  Imported and not retyped for the obvious reason and for a less obvious one:
 *  the whole opening act rests on the two lessons saying opposite things, and if
 *  a2.01's line is ever reworded, this lesson's quotation of it must move with it
 *  or the contrast quietly becomes a misquotation of a lesson the learner
 *  finished twenty minutes ago. */
export { A201_REFRAME };

/** The back-reference this lesson owes a2.01, by unit id.
 *
 *  a2.01 taught that four of six forms are inaudible and the pronoun carries the
 *  person. This lesson is the first place in the level where that stops being
 *  wholly true, and it is also the place where the half of it that IS still true
 *  gets stated again. Naming the unit is not a citation, it is the teaching:
 *  a learner who sees two lessons disagree about the same language, and is told
 *  where the line between them falls, stops treating each lesson as a fresh list.
 *
 *  Exported so the test can assert its presence and an edit that cuts it goes
 *  red. */
export const A201_BACKREF = 'a2.01';

/** The line this lesson hangs on.
 *
 *  Exported so the batch can count it against an explicit constant and the test
 *  can compare seed against source rather than restating the string.
 *
 *  ── Why this one, and what was rejected ──────────────────────────────────
 *
 *  The doctrine's test for an A2 reframe is whether the learner can apply it in
 *  the half-second between the subject and the verb. Four candidates:
 *
 *    "-ir verbs add -iss- in the plural."
 *        The brief's own rejection and it is right: this is the same fact stated
 *        as a spelling rule, and a learner cannot act on it while listening. It
 *        also says nothing about what the ear receives, which is what the canDo
 *        promises.
 *
 *    "The plural grows a syllable."
 *        THE BRIEF'S PREFERRED CANDIDATE, AND IT IS FALSE FOR THE FORM THE LESSON
 *        MOST NEEDS IT TO BE TRUE ABOUT. `il finit` is /il fi.ni/ and
 *        `ils finissent` is /il fi.nis/: the verb is two syllables in both, and
 *        what the plural adds is a final /s/. The syllable claim holds for
 *        `nous finissons` and `vous finissez` and for nothing else. A reframe is
 *        carried verbatim through nine sections and cannot be false in the
 *        mission where the learner meets the headline contrast; that is a2.01's
 *        own reason for rejecting "Endings are silent", and it applies here
 *        unchanged.
 *
 *    "You can hear the plural."
 *        Short, true, and it does not survive `on finit`, which means we and
 *        sounds singular. It also states a capability rather than a rule, so
 *        there is nothing to run: the learner cannot DO "you can hear it".
 *
 *    "The plural puts a sound on the end."
 *        What survived. It is true of all three plural forms rather than two of
 *        them, and it is agnostic about WHICH sound, which is exactly right: /s/
 *        for ils and elles, a whole syllable for nous and vous. It runs in both
 *        directions, which is what makes it worth carrying: listening, a sound at
 *        the end means several; speaking, several means put a sound on the end.
 *        And it leaves the singular alone, which is where a2.01's reframe is
 *        still doing the work. */
export const REFRAME = 'The plural puts a sound on the end.';

/** The other half, and the reason this lesson is one lesson rather than two.
 *
 *  Carried verbatim across the opening act, the payoff mission and the roundup,
 *  and asserted by the test. Deliberately NOT the reframe: it is a statement
 *  about where the boundary falls rather than something a learner runs
 *  mid-sentence, and the doctrine is explicit that those are different things. */
export const BOTH_HALVES = 'The singular hides the person. The plural announces itself.';

export const VERBES_IR_TERMS: Record<string, LessonTerm> = {
  stem: {
    term: 'the part that stays',
    title: 'What is left when -ir comes off',
    body:
      'finir gives fin-. choisir gives chois-. remplir gives rempl-. Take the last two letters off the naming form and what is left does not move, whoever is speaking. That is the same machine a2.01 gave you for -er verbs, and nothing about it has changed. What has changed is the six things you put on the end of it.',
    examples: [
      { itemId: 'fr.a2.verbes.181', note: 'fin- with the je ending on it.' },
      { itemId: 'fr.a2.verbes.184', note: 'The same fin-, with the nous ending, which is longer than you expect.' },
    ],
  },
  theSound: {
    term: 'the extra sound',
    title: 'What the plural puts on the end',
    body:
      'The three plural forms all have -iss- in the spelling and all three reach the ear, but not in the same way. ils finissent adds one sound, an S, right at the end of the verb: fee-NEE becomes fee-NEES and the word is still two syllables. nous finissons and vous finissez add a whole syllable each. What matters at the moment of listening is not which of those you got, it is that you got something at all, because the singular gives you nothing.',
    examples: [
      { itemId: 'fr.a2.verbes.186', note: 'One sound more than the singular, and nothing else.' },
      { itemId: 'fr.a2.verbes.184', note: 'A whole syllable more, and you would not mistake it for anything.' },
    ],
  },
  singularThree: {
    term: 'the three that hide',
    title: 'je finis, tu finis, il finit',
    body:
      'Three spellings and one sound. -is, -is and -it all arrive as nothing, exactly the way -e, -es and -ent did on an -er verb in a2.01, so in the singular the pronoun is still carrying the person on its own. This half of a2.01 has not been taken back and it never will be. What is new is that the plural no longer joins them.',
    examples: [
      { itemId: 'fr.a2.verbes.193', note: 'Ends in -is.' },
      { itemId: 'fr.a2.verbes.195', note: 'Ends in -it, and is said exactly the same way.' },
    ],
  },
  notThisFamily: {
    term: 'the other -ir verbs',
    title: 'Ending in -ir is not enough',
    body:
      'partir, sortir, dormir, servir, sentir, venir, tenir, ouvrir, offrir and courir all end in -ir and not one of them takes -iss- anywhere. Several are more common than any verb in this lesson, so you will meet them early and often. They are not exceptions to this pattern; they are a different pattern, and running the machine on them produces something no French speaker says. Recognising that a verb is not in this family is worth as much as building the ones that are.',
    examples: [
      { itemId: 'fr.a2.verbes.186', note: 'This one is in the family, and the plural says so out loud.' },
      { itemId: 'fr.a2.verbes.205', note: 'And this one is too, even though on makes it sound singular.' },
    ],
  },
  nousOn: {
    term: 'nous and on',
    title: 'The we that sounds singular',
    body:
      `${NOUS_ON} Both are correct and both mean we. on takes the same form as il, which on an -ir verb means on finit and never on finissons: the spoken we takes the short form and puts no sound on the end at all. That is the one place this lesson's rule will not help you, and it is the form you will hear most.`,
    examples: [
      { itemId: 'fr.a2.verbes.184', note: 'The written one, with the ending you can hear.' },
      { itemId: 'fr.a2.verbes.205', note: 'The spoken one, taking the il form, and sounding like one person.' },
    ],
  },
};
