// a2.01.l1 "Les verbes en -ER" — the lesson glossary, its reframe, and the one
// sentence nineteen other A2 lessons inherit.
//
// Split out for the same reason etre-terms.ts is: a term is defined ONCE and
// surfaced at every point of use via a section's `terms` chips, so a learner
// meets the same explanation wherever the word turns up and no card carries the
// definition inline.
//
// Three chips per section, maximum. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the batch can count it against an explicit constant and the test
 *  can compare seed against source rather than restating the string.
 *
 *  ── Why this one, and what was rejected ──────────────────────────────────
 *
 *  The doctrine's test for an A2 reframe is whether the learner can apply it in
 *  the half-second between the subject and the verb. Three candidates:
 *
 *    "Endings are silent."
 *        Rejected, and the brief already argued why: it states a fact and does
 *        not say what to do about it. It is also FALSE as stated, because two of
 *        the six are audible, and a reframe carried verbatim through eight
 *        sections cannot have an exception the learner meets in mission five.
 *
 *    "One stem, six endings, and every -er verb comes with it."
 *        Rejected because it is about the paradigm, which is the cheap half. A
 *        learner who has this can WRITE the verb and still cannot hear who is
 *        speaking, which is the exact failure this lesson exists to stop.
 *
 *    "French writes distinctions it does not say."
 *        The closest miss, and the one a2.21 and a2.23 would most like to
 *        inherit. Rejected as the reframe because it is a fact about the
 *        language rather than an instruction, and because it does not name the
 *        pronoun, which is the thing the learner has to actually lean on. It
 *        survives instead as the glossary term `silentEnding`, which those two
 *        lessons can quote without quoting a whole lesson's reframe.
 *
 *  What survived contact is the brief's own candidate, unchanged. It is short
 *  enough to run mid-sentence, true of all six forms rather than four of them,
 *  checkable the first time the learner hears any French, and it tells them what
 *  to do: stop waiting for the verb to say who is speaking, and hold the
 *  pronoun. */
export const REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';

/** The `nous` versus `on` statement, in the wording the rest of A2 inherits.
 *
 *  Doctrine §B.6 and §E: stated once, by a2.01, and consistent across all twenty
 *  lessons. It lives here rather than inline in the section so that a later
 *  lesson quoting it imports a constant instead of retyping a sentence, and so
 *  a2-01-verbes-er.test.ts can assert it appears in exactly ONE section: later
 *  lessons quote it, and an edit that scatters it across three cards would make
 *  "where is this said?" unanswerable.
 *
 *  Two hard constraints shaped it.
 *
 *  It must not hedge. "In informal speech, French speakers often prefer on" is
 *  the version every textbook writes and it leaves the learner with a
 *  probability rather than an instruction.
 *
 *  It must sit ON TOP OF a1.05 rather than beside it. a1.05.l1 already says
 *  "Correct everywhere, and still what you write. Out loud, in most rooms, on
 *  has taken its place. nous is never wrong; it simply sits a register above
 *  where the conversation is." That is this product's existing position and this
 *  lesson does not get to invent a second one. What a2.01 adds is the paradigm
 *  half: which FORM `on` takes, and that it therefore costs nothing to learn. */
export const NOUS_ON = 'nous parlons is what you write. on parle is what you say.';

export const VERBES_ER_TERMS: Record<string, LessonTerm> = {
  infinitive: {
    term: 'the naming form',
    title: 'The form in the dictionary',
    body:
      'parler, regarder, chanter. This is the form a verb is listed under and it is not a form anybody uses in a sentence. Its last two letters are the instruction: cut them off and what is left is the part that never changes. Thirty of the verbs in this lesson end this way, and so do roughly nine in ten French verbs.',
    examples: [
      { itemId: 'fr.a2.verbes.001', note: 'parler, cut back to parl-, with the je ending on it.' },
      { itemId: 'fr.a2.verbes.104', note: 'And the vous ending, which sounds exactly like the naming form itself.' },
    ],
  },
  stem: {
    term: 'the part that stays',
    title: 'What is left when -er comes off',
    body:
      'parler gives parl-. regarder gives regard-. chercher gives cherch-. It does not move, whoever is speaking, so once you have it you have all six forms of that verb and you never have to learn them separately. This is why a regular verb is worked out rather than memorised, and why etre and avoir were the exception rather than the rule.',
    examples: [
      { itemId: 'fr.a2.verbes.110', note: 'cherch- with the tu ending, which makes no sound.' },
      { itemId: 'fr.a2.verbes.114', note: 'The same cherch-, with the nous ending, which does.' },
    ],
  },
  silentEnding: {
    term: 'a silent ending',
    title: 'Letters that are written and not said',
    body:
      '-e, -es and -ent are all silent. il parle and ils parlent are six letters apart on the page and identical in the air. French writes distinctions it does not say, and this is the first place you meet that: the spelling is doing work for the reader that the sound is not doing for the listener. Nothing is dropped or slurred. The letters were never pronounced.',
    examples: [
      { itemId: 'fr.a2.verbes.102', note: 'One person.' },
      { itemId: 'fr.a2.verbes.105', note: 'A whole group, and the same sound exactly.' },
    ],
  },
  audibleTwo: {
    term: 'the two you hear',
    title: '-ons and -ez',
    body:
      'These two are syllables of their own, so they arrive at the ear as clearly as anything else in the sentence. -ons is a nasal vowel, OHⁿ, with no N sound at the end of it. -ez is AY, which means vous parlez and the naming form parler are said exactly the same way. Those two are the whole of what your ear gets from an -er verb.',
    examples: [
      { itemId: 'fr.a2.verbes.103', note: 'The nous ending, audible.' },
      { itemId: 'fr.a2.verbes.104', note: 'The vous ending, audible, and identical to parler.' },
    ],
  },
  nousOn: {
    term: 'nous and on',
    title: 'One meaning, two registers',
    body:
      `${NOUS_ON} Both are correct and both mean we. on takes the same form as il, so it costs you no new ending at all: on parle, on regarde, on cherche. Every table in this level prints nous, and almost every conversation you hear will use on. Writing nous is never wrong; it just sits a register above where the conversation is.`,
    examples: [
      { itemId: 'fr.a2.verbes.106', note: 'The written one, with the ending you can hear.' },
      { itemId: 'fr.a2.verbes.107', note: 'The spoken one, taking the il form.' },
    ],
  },
  flatEnding: {
    term: 'where the weight goes',
    title: 'Nothing to lean on',
    body:
      'English puts weight on the end of a verb: he WALKS, they WALKED. French has nothing there to weigh, because in four of the six forms there is no sound at the end at all. Leaning on the ending is the single most recognisable thing an English speaker does to a French verb, and it is a habit rather than a gap in knowledge. The weight goes at the end of the phrase, not the end of the word.',
    examples: [
      { itemId: 'fr.a2.verbes.105', note: 'Said flat, and the last thing you hear is parl.' },
      { itemId: 'fr.a2.verbes.112', note: 'The weight lands on fort, which is where the phrase ends.' },
    ],
  },
};
