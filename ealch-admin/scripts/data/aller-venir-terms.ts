// a2.02.l1 "Irréguliers 1 : aller, venir, tenir" — the lesson glossary, its
// reframe, and the two constants it inherits from a2.01.
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
import {
  A210_BACKREF, COMPOUNDS, COMPOUND_BASE, FAMILY_UNIT, FUTUR_PROCHE_UNIT,
  PASSE_COMPOSE_DISTANCE, THE_THREE,
} from './aller-venir-corpus.ts';

/** a2.01's nous/on statement, re-exported rather than retyped.
 *
 *  The ledger binds all twenty A2 lessons to one wording, stated by a2.01 in
 *  `s06-nous-on`. This lesson has a reason to quote it that is its own: `on`
 *  takes the `il` form, and on `venir` the `il` form is `vient`, so the commonest
 *  spoken way of saying "we have just done it" is `on vient de` and never
 *  `on venons de`. It is also the shape the scenario needs, because two people
 *  arriving late say it about themselves. */
export { NOUS_ON };

/** THE NAME OF THE PATTERN, AND THREE LATER LESSONS ARE TOLD TO QUOTE IT.
 *
 *  Doctrine §B.7: the same shape appears four times across A2 — one form, two
 *  jobs, distinguished only by what follows it. This unit is the first of the
 *  four, so it does not point backwards; it gives the pattern a name and makes
 *  the name quotable.
 *
 *    venir de + infinitive  vs  venir de + place     seq 5, here
 *    il y a "there is"      vs  il y a "ago"         seq 14, a2.18
 *    aller + infinitive     vs  aller + place        seq 15, a2.19
 *    prendre "take"         vs  prendre in an idiom  seq 9,  a2.15
 *
 *  Exported as a bare string so a later lesson imports it rather than retyping
 *  it, exactly as this lesson imports a2.01's NOUS_ON. The words were chosen to
 *  be true of all four instances rather than of this one: it is always what comes
 *  NEXT that decides, never the form itself and never the context around it.
 *
 *  Rejected: "the fork", which names nothing a learner can act on; "same words,
 *  two meanings", which is a description of the problem rather than of the
 *  method; and "one form, two jobs", which is the doctrine's own phrase and reads
 *  as a heading rather than as an instruction. */
export const WHAT_FOLLOWS = 'what comes next decides';

/** The unit id a later lesson cites when it quotes WHAT_FOLLOWS. Exported so
 *  a2.18, a2.19 and a2.15 point at an id rather than at a title. */
export const WHAT_FOLLOWS_UNIT = 'a2.02';

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
 *    "venir de means to have just done something."
 *        The brief's own rejection and it is right. It is a translation rather
 *        than a rule: it tells the learner what the phrase means once it is
 *        built and gives them nothing at all about how to build it, which is
 *        exactly the half they get wrong. A learner running this rule produces
 *        `je viens de mangé` as readily as `je viens de manger`, because
 *        "something I have just done" is a past in English and the rule does not
 *        say that French wants the naming form there.
 *
 *    "After de, the naming form."
 *        The sharpest instruction in the lesson and REJECTED ANYWAY, because it
 *        is false in half the sentences the learner will meet. `Je viens de
 *        Paris.` has no naming form after de and never will, and 52 of the 80
 *        published `venir de` sentences are that one. A reframe carried verbatim
 *        through eight sections cannot be false in the case the corpus makes
 *        commonest. It survives as the term `theNamingForm` and as the trap
 *        drill's rule card.
 *
 *    "What comes after de decides what the sentence is about."
 *        True of everything and actionable in nothing. It describes the trap
 *        rather than the Owns, and this lesson's Owns is not the trap: the trap
 *        is what the learner has to survive in order to use the Owns. It became
 *        the term name instead, where a description belongs.
 *
 *    "Coming from an action is how French says you just did it."
 *        What survived, and it is the brief's own candidate unchanged. It is
 *        twelve words, which is the ceiling. It is a PRODUCTION rule and runs in
 *        the direction a speaker moves: the learner wants to say "I just ate",
 *        reaches for it, and it tells them to say they are coming FROM the
 *        action — which puts `viens de` in front and an action, not a past, after
 *        it. And it is true in every section it appears in, because it makes no
 *        claim about the place use at all. */
export const REFRAME = 'Coming from an action is how French says you just did it.';

/** The other half, and the sentence that makes this a lesson about the clock
 *  rather than about three tables.
 *
 *  Carried verbatim across the opening act, the Owns act and the roundup, and
 *  asserted by the test. Deliberately NOT the reframe: it is a statement about
 *  what the learner has been handed rather than something they run mid-sentence,
 *  and the doctrine is explicit that those are different things. */
export const TIMELINE = `A past tense, ${PASSE_COMPOSE_DISTANCE} lessons before anybody teaches you one.`;

/** The claim about tenir, carried verbatim so the third verb is never arbitrary. */
export const TENIR_CLAIM = 'tenir is venir with a t on the front, cell for cell.';

export const ALLER_VENIR_TERMS: Record<string, LessonTerm> = {
  noStem: {
    term: 'the ones with no stem',
    title: 'Nothing to cut off',
    body:
      `The three patterns you have are all one move: take the last two letters off the naming form and put the person on what is left. ${THE_THREE[0]} does not work like that. vais, vas, va, allons, allez, vont. Four of the six do not contain a single letter of the naming form, and no rule joins them. This is the first verb in the level you have to hold in your head rather than build, and knowing that is the whole of what makes it easy: you stop looking for the reason.`,
    examples: [
      { itemId: 'fr.a2.verbes.261', note: 'No all- anywhere in it.' },
      { itemId: 'fr.a2.verbes.264', note: 'And here it is, in two cells out of six.' },
    ],
  },
  sameShape: {
    term: 'the pair that match',
    title: 'venir and tenir, cell for cell',
    body:
      `${'tenir is venir with a t on the front, cell for cell.'} viens and tiens, vient and tient, venons and tenons, viennent and tiennent. Six cells, one difference, and it is the first letter every time. That is the only reason the second verb is in this lesson: learning it costs you nothing you have not already paid for, and it turns one irregular verb into a family.`,
    examples: [
      { itemId: 'fr.a2.verbes.269', note: 'The one you learn.' },
      { itemId: 'fr.a2.verbes.275', note: 'And the one you get for nothing.' },
    ],
  },
  vowelBack: {
    term: 'the n that arrives',
    title: 'vient against viennent',
    body:
      `In the singular the vowel is in the nose and no n is said at all: vyaⁿ. In the plural an n arrives at the end of the verb and the vowel comes out of the nose: vyenn. That is the one place in this lesson your ear does the work for you, and it is the same move ${A210_BACKREF} showed you on il part against ils partent, with the vowel changing as well. Three lessons have now put a singular and a plural on the word tôt, and this is the third.`,
    examples: [
      { itemId: 'fr.a2.verbes.269', note: 'One person, and the word stops in the nose.' },
      { itemId: 'fr.a2.verbes.272', note: 'Several, and an n lands at the end.' },
    ],
  },
  justDid: {
    term: 'the thing you just did',
    title: 'venir de, and what it buys you',
    body:
      'Say you are coming from an action and French hears that you have just finished it. Je viens de manger is I have just eaten. It is not a special tense and there is nothing new to build: it is venir, which you now have, plus de, plus the naming form of whatever you did. It is also the only way you can talk about the past for a long time yet, and it covers most of what anybody actually asks you in a day.',
    examples: [
      { itemId: 'fr.a2.verbes.279', note: 'Coming from eating, so the eating is over.' },
      { itemId: 'fr.a2.verbes.281', note: 'And the sentence you will use most: he has gone, a minute ago.' },
    ],
  },
  whatFollows: {
    // THE NAME THREE LATER LESSONS QUOTE. See WHAT_FOLLOWS above.
    term: WHAT_FOLLOWS,
    title: 'Je viens de Paris. Je viens de manger.',
    body:
      'Same three words twice, and two completely different sentences. Nothing in venir de tells you which one you are in: a place after de is where you are from, an action after de is what you have just finished, and there is no third option. So you do not read venir de and then work out the rest. You wait for the next word, and the next word settles it. This will happen to you again with other words later on, and it always works the same way.',
    examples: [
      { itemId: 'fr.a2.verbes.285', note: 'A place. Where you are from.' },
      { itemId: 'fr.a2.verbes.279', note: 'An action. When you did it.' },
    ],
  },
  theNamingForm: {
    term: 'the form that never changes',
    title: 'What goes after de',
    body:
      'The naming form, always, and it does not move for anybody. Je viens de manger, tu viens de manger, ils viennent de manger: the front changes for the person and manger stays exactly as it is. That is the part learners drop, because in English the second verb changes too. Nothing after de ever changes for the person, and nothing after de ever agrees with anything.',
    examples: [
      { itemId: 'fr.a2.verbes.280', note: 'rentrer, untouched.' },
      { itemId: 'fr.a2.verbes.284', note: 'arriver, untouched, with only the de shortened in front of the vowel.' },
    ],
  },
  theFamily: {
    term: 'the ones built on top',
    title: `${COMPOUNDS.join(', ')}`,
    body:
      `${COMPOUNDS[0]} is ${COMPOUND_BASE[COMPOUNDS[0]]} with re- on the front, and it takes exactly the same forms. So do ${COMPOUNDS[1]} and ${COMPOUNDS[2]}. Il revient is Il vient with two letters added and nothing else changed. That is worth knowing here because it is why the two verbs above are worth the trouble at all, and where it stops being a handy coincidence and starts being a rule is ${FAMILY_UNIT}.`,
    examples: [
      { itemId: 'fr.a2.verbes.288', note: 'Il vient tôt, with re- on it.' },
      { itemId: 'fr.a2.verbes.289', note: 'And Il tient la clé, with ob- on it.' },
    ],
  },
  nousOn: {
    term: 'nous and on',
    title: 'The we you will actually hear',
    body:
      `${NOUS_ON} Both are correct and both mean we. on takes the same form as il, which on this verb means on vient and never on venons. So the commonest spoken way of saying we have just done something is On vient de, and it uses the singular form of an irregular verb, which is the one cell of the six you are most likely to need in a hurry.`,
    examples: [
      { itemId: 'fr.a2.verbes.282', note: 'The spoken we, taking the il form.' },
      { itemId: 'fr.a2.verbes.270', note: 'And the written one, with its own ending.' },
    ],
  },
  notYours: {
    term: 'what aller does next',
    title: 'One job of aller is not in this lesson',
    body:
      `aller with a place after it is where you are going, and that is what this lesson uses it for. Put something else after it and it does another job entirely, which is ${FUTUR_PROCHE_UNIT}'s lesson and not this one. Which small word goes in front of the place is a question of its own and it is ${'a2.04'}. Here there is one place and one small word, used six times without variation, so that the only thing on the screen is the verb.`,
    examples: [
      { itemId: 'fr.a2.verbes.263', note: 'A place after it. That is this lesson.' },
      { itemId: 'fr.a2.verbes.266', note: 'The same, in the plural.' },
    ],
  },
};
