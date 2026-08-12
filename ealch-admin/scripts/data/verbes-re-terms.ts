// a2.11.l1 "Les verbes en -RE" — the lesson glossary, its reframe, and the two
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
import { NOUS_ON } from './verbes-er-terms.ts';
import { THREE_CELLS } from './verbes-re-corpus.ts';

/** a2.01's nous/on statement, re-exported rather than retyped.
 *
 *  The ledger binds all twenty A2 lessons to one wording, stated by a2.01 in
 *  `s06-nous-on`. This lesson has a reason to quote it that is its own: `on`
 *  takes the `il` form, and on a -RE verb the `il` form is the BARE one, so the
 *  most common spoken first-person plural in French is the cell where nothing is
 *  written at all. `on vend` is the shortest complete sentence about several
 *  people the learner will ever produce. */
export { NOUS_ON };

/** The two units this lesson stands on, named by id.
 *
 *  Both, and not one. a2.10 named a2.01 because it was inverting it. This lesson
 *  names BOTH of its predecessors because its headline screen is a three-way
 *  comparison and a comparison with one side unattributed is a table rather than
 *  a teaching: the learner has to know that `il parle` and `il finit` are theirs
 *  already, or the screen reads as three new things instead of two old ones and a
 *  gap.
 *
 *  Derived from THREE_CELLS so a cell that is ever removed takes its citation
 *  with it. */
export const BACKREFS: string[] = THREE_CELLS.map((c) => c.unit).filter((u) => u !== 'a2.11');

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
 *    "-re verbs drop the ending in the third person."
 *        The brief's own rejection and it is right: it describes the same fact as
 *        a deletion, and a learner told to delete will delete somewhere else too.
 *        It is also FALSE about the machine. Nothing is dropped: `vendre` minus
 *        its last two letters is `vend-`, exactly as `parler` gives `parl-` and
 *        `finir` gives `fin-`, and the third person is that stem used whole.
 *
 *    "The stem is the whole word."
 *        The closest miss, and it is true of the cell the lesson owns. Rejected
 *        because it is false in the other five: `je vends`, `nous vendons` and
 *        `ils vendent` are all the stem plus something. A reframe is carried
 *        verbatim through eight sections and cannot be false in five of them.
 *        That is a2.01's reason for rejecting "Endings are silent" and a2.10's
 *        for rejecting "The plural grows a syllable", and it applies here
 *        unchanged.
 *
 *    "The plural is where the D wakes up."
 *        TRUE, SHORT, TEACHABLE, AND REJECTED ANYWAY, and this is the decision
 *        that shaped the lesson. `il vend` is /il vɑ̃/ and `ils vendent` is
 *        /il vɑ̃d/: the stem-final d is silent at the end of a word and said in
 *        the middle of one, so the -RE plural is audible against the singular in
 *        exactly the way the -IR plural is. Which is the problem. a2.10, ONE
 *        LESSON AGO, owns "The plural puts a sound on the end", and it is true
 *        here as well. A lesson built on the ear would be a2.10 again with
 *        different letters, at seq 4, in a run of three consecutive paradigm
 *        lessons. It would also be authoring against the unit's own promise: the
 *        `sub` reads "the vendre model" and the canDo reads "including the il
 *        form that takes no ending", and neither of them is about listening.
 *        The fact survives as the glossary term `theD` and one mission.
 *
 *    "The il form takes nothing, and that is the ending."
 *        What survived, and it is the brief's own candidate unchanged. It names
 *        the one cell the learner cannot derive from the two lessons before this
 *        one. It frames the absence as a POSITIVE FORM rather than as a deletion,
 *        which is the difference between a learner who writes `il vend` and stops
 *        and a learner who worries that something is missing. And it runs in the
 *        half-second it has to: subject is `il`, so write nothing. */
export const REFRAME = 'The il form takes nothing, and that is the ending.';

/** The other half, and the sentence that makes the headline screen a system
 *  rather than a fact about vendre.
 *
 *  Carried verbatim across the opening act, the three-cell mission and the
 *  roundup, and asserted by the test. Deliberately NOT the reframe: it is a
 *  statement about where this lesson sits among its neighbours rather than
 *  something a learner runs mid-sentence, and the doctrine is explicit that those
 *  are different things. */
export const THREE_GROUPS = 'Three groups, three endings on the il form, and one of them is nothing.';

export const VERBES_RE_TERMS: Record<string, LessonTerm> = {
  stem: {
    term: 'the part that stays',
    title: 'What is left when -re comes off',
    body:
      'vendre gives vend-. attendre gives attend-. perdre gives perd-. Take the last two letters off the naming form and what is left does not move, whoever is speaking. That is the same two letters you took off parler and off finir, and the same machine a2.01 gave you. Nothing new has happened to the method. What is new is one of the six things you put on the end of it.',
    examples: [
      { itemId: 'fr.a2.verbes.221', note: 'vend- with the je ending on it.' },
      { itemId: 'fr.a2.verbes.224', note: 'The same vend-, with the nous ending, which you can hear.' },
    ],
  },
  nothing: {
    term: 'the ending that is nothing',
    title: 'il vend, and there is no more of it',
    body:
      'The il form of a regular -re verb is the stem and then the page stops. Not a silent letter you cannot hear, the way -e and -es and -ent are silent: there is no letter. il vend, elle attend, on répond. It looks short because it is short, and the reason it feels wrong is that the two lessons before this one both put something there. Nothing is missing and nothing has been taken away.',
    examples: [
      { itemId: 'fr.a2.verbes.223', note: 'The stem, and then the full stop.' },
      { itemId: 'fr.a2.verbes.231', note: 'The same thing on a second verb, so it is a rule and not a fact about vendre.' },
    ],
  },
  threeGroups: {
    // "the three third persons" was the first draft. `third person` is grammar
    // vocabulary and invariants §8 keeps it off a learner surface; the unit's own
    // canDo already says "the il form", which is the house way of naming this
    // cell without the jargon, so the whole lesson says that instead.
    term: 'the three il forms',
    title: 'il parle, il finit, il vend',
    body:
      'One frame, three verbs, three groups. il parle takes an -e, il finit takes an -it, il vend takes nothing at all. All three endings are inaudible, so this is a page distinction from beginning to end and no recording will ever help you with it. Those three cells are the whole of what the three regular patterns disagree about on the il form, and once you have them there is no fourth group waiting.',
    examples: [
      { itemId: 'fr.a2.verbes.227', note: 'One letter, from the group you met first.' },
      { itemId: 'fr.a2.verbes.223', note: 'And none, from this one.' },
    ],
  },
  theSingularThree: {
    term: 'the three that hide',
    title: 'je vends, tu vends, il vend',
    body:
      'Three spellings and one sound. -s, -s and nothing all arrive as nothing, exactly the way -e, -es and -ent did on an -er verb in a2.01 and -is, -is and -it did on an -ir verb in a2.10. So in the singular the pronoun is still carrying the person on its own, and the only place these three differ is the page. This is why the dictée in this lesson is longer than the listening.',
    examples: [
      { itemId: 'fr.a2.verbes.229', note: 'Ends in -ds.' },
      { itemId: 'fr.a2.verbes.231', note: 'Ends in nothing, and is said exactly the same way.' },
    ],
  },
  theD: {
    term: 'the d you sometimes hear',
    title: 'Silent at the end, said in the middle',
    body:
      'Every one of these verbs has a d at the end of its stem, and a French consonant at the end of a word is not said while the same consonant in the middle of one is. il vend is vahⁿ and ils vendent is vahⁿd, because the -ent puts letters after the d even though the -ent itself is silent. So the three singular forms lose the d and the three plural forms keep it. That is the one thing your ear can do for you here, and it does nothing at all for the three that matter most.',
    examples: [
      { itemId: 'fr.a2.verbes.223', note: 'Nothing after the vowel.' },
      { itemId: 'fr.a2.verbes.226', note: 'The same verb with letters after the d, so the d arrives.' },
    ],
  },
  notThisFamily: {
    term: 'the ones that only look like it',
    title: 'Ending in -re is not enough',
    body:
      'prendre, mettre and battre end in -re and are built another way, and so are apprendre, comprendre, permettre, promettre and combattre. prendre is one of the most common verbs in the language, so you will meet it long before anybody teaches it to you. Run this pattern on it and you produce a form no French speaker says. Knowing that a verb is not in this family is worth as much as building the ones that are, and a2.15 is where the other family is taught.',
    examples: [
      { itemId: 'fr.a2.verbes.223', note: 'This one is in the family, and the il form is the bare stem.' },
      { itemId: 'fr.a2.verbes.240', note: 'And so is this one, whatever the length of the naming form suggests.' },
    ],
  },
  nousOn: {
    term: 'nous and on',
    title: 'The we that writes nothing',
    body:
      `${NOUS_ON} Both are correct and both mean we. on takes the same form as il, which on a -re verb means on vend and never on vendons: the spoken we takes the bare form, so the commonest way of saying we in French lands on the one cell of the six where nothing is written after the stem at all.`,
    examples: [
      { itemId: 'fr.a2.verbes.244', note: 'The written one, with an ending you can hear.' },
      { itemId: 'fr.a2.verbes.243', note: 'The spoken one, taking the il form and writing nothing.' },
    ],
  },
};
