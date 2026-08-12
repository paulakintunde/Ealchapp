// a2.10.l2 "Les autres verbes en -IR" — the glossary, the reframe, and the two
// constants it inherits from the lessons it rests on.
//
// Three chips per section, maximum. The renderer shows three.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { REFRAME as A201_REFRAME } from './verbes-er-terms.ts';
import { REFRAME as A210_REFRAME, BOTH_HALVES } from './verbes-ir-terms.ts';

/** a2.01's and a2.10.l1's reframes, imported verbatim.
 *
 *  This lesson's entire claim is that its two families run rules the learner
 *  already holds, so it QUOTES both rather than restating either. Imported so
 *  that rewording one of them moves this lesson with it instead of leaving it
 *  misquoting a lesson the learner finished twenty minutes ago. */
export { A201_REFRAME, A210_REFRAME, BOTH_HALVES };

/** The back-references this lesson owes, by unit id. a2.01 for the -ER-ending
 *  family, a2.10 for the shedders, a2.02 for venir and tenir, a2.11 for the -RE
 *  verbs whose mechanism is the shedders'. */
export const A201_BACKREF = 'a2.01';
export const A210_BACKREF = 'a2.10';
export const A202_BACKREF = 'a2.02';
export const A211_BACKREF = 'a2.11';

/** The line this lesson hangs on.
 *
 *  ── Why this one, and what was rejected ──────────────────────────────────
 *
 *  The doctrine's test is whether the learner can run it in the half-second
 *  between the subject and the verb. What actually happens in that half-second
 *  is a learner meeting `partir`, reaching for the machine a2.10.l1 gave them,
 *  and producing `ils partissent`. The reframe has to interrupt exactly that.
 *
 *    "Learn which list, not which rule."
 *        Rejected. True, and it is study advice rather than a mid-sentence
 *        action: there is nothing to DO with it while a sentence is moving.
 *
 *    "Every -ir verb runs a rule you already have."
 *        Rejected for the same reason and more so. It is the lesson's thesis,
 *        which is a fact about the system, not an instruction. It survives as
 *        BOTH_RULES below, which is where a thesis belongs.
 *
 *    "-vrir and -frir take -ER endings."
 *        Rejected: a spelling rule that covers five verbs out of twelve, and the
 *        lesson's hardest half is the seven it does not cover.
 *
 *    "Check the family before you build."
 *        What survived. It is an instruction, it fires at the moment the error
 *        would be made, and it is agnostic about which family — which is right,
 *        because the answer is a recall and not a derivation. */
export const REFRAME = 'Check the family before you build.';

/** The thesis, carried verbatim and asserted, and deliberately NOT the reframe.
 *
 *  It is what makes this one lesson instead of two more paradigms: nothing new
 *  has to be learned about the ear at all. */
export const BOTH_RULES = 'Two families, and you already know both rules.';

export const VERBES_IR_FAM_TERMS: Record<string, LessonTerm> = {
  theFamilies: {
    term: 'the two families',
    title: 'Which rule this verb runs',
    body:
      'Every verb ending in -ir is in one of three groups. The ones from the last lesson add -iss- in the plural. Six shed a consonant in the singular and give it back in the plural: partir, sortir, dormir, servir, sentir, mentir. Five take the endings of an -er verb outright: ouvrir, offrir, couvrir, decouvrir, souffrir. Knowing which group a verb is in is the whole job, because each group runs a rule you already have.',
    examples: [
      { itemId: 'fr.a2.verbes.464', note: 'A shedder: the t comes back and you hear it.' },
      { itemId: 'fr.a2.verbes.470', note: 'An -er-ending verb: nothing comes back and nothing is heard.' },
    ],
  },
  shedding: {
    term: 'the consonant that comes back',
    title: 'partir, sortir, dormir',
    body:
      'Take the last two letters off partir and you have part-. In the singular the t goes too, so je pars, tu pars and il part are all just par. In the plural it returns: ils partent ends on a t you can hear, and nous partons and vous partez bring a whole syllable. That is the same shape as finir from the last lesson, arriving by a different route: finir puts an -iss- in, and these give back a letter they already had.',
    examples: [
      { itemId: 'fr.a2.verbes.463', note: 'Nothing after par.' },
      { itemId: 'fr.a2.verbes.464', note: 'One consonant more, and it is the only thing saying several.' },
    ],
  },
  erEndings: {
    term: 'the ones that are -er verbs',
    title: 'ouvrir, offrir, couvrir',
    body:
      'These five end in -ir and take the endings of an -er verb: -e, -es, -e, -ons, -ez, -ent. So je couvre, tu couvres, il couvre and ils couvrent are four spellings and one sound, exactly as je parle and ils parlent were. Their infinitives all end in -vrir or -frir, and no verb from the last lesson does, so this is the one group you can spot from the spelling alone.',
    examples: [
      { itemId: 'fr.a2.verbes.469', note: 'One person.' },
      { itemId: 'fr.a2.verbes.470', note: 'Several, and not one sound has changed.' },
    ],
  },
  wakingS: {
    term: 'the s that wakes up',
    title: 'When the plural is audible anyway',
    body:
      'ouvrir and offrir begin with a vowel, and the silent s of ils wakes up in front of a vowel. So il ouvre is ee-loovr and ils ouvrent is eel-zoovr: the verb is identical and the little word in front is not. The plural is audible after all, and it is the link doing it rather than the ending. These two are the most common verbs of their group, so this is the version you will meet first.',
    examples: [
      { itemId: 'fr.a2.verbes.473', note: 'The l of il links onto the vowel.' },
      { itemId: 'fr.a2.verbes.474', note: 'The s of ils arrives as a z, and that is the whole difference.' },
    ],
  },
  endingLies: {
    term: 'what the ending hides',
    title: 'The last four letters decide nothing',
    body:
      'ralentir takes the -iss- and sentir does not, and both end in -tir. guerir takes it and courir does not, and both end in -rir. So the infinitive cannot be read off for the answer, and the six that shed have to be held as a list rather than worked out. Six is not many, and they are worth it: partir, sortir and dormir are among the first verbs anybody needs.',
    examples: [
      { itemId: 'fr.a2.verbes.476', note: 'sentir, and the t comes back.' },
      { itemId: 'fr.a2.verbes.478', note: 'courir, where nothing comes back at all.' },
    ],
  },
};
