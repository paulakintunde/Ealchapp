// a2.24.l1 « Pronoms d'objet indirect » — the lesson glossary.
//
// A term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline.
//
// THREE CHIPS PER SECTION. The renderer shows three and collapses the rest
// (invariants §2), so a section naming four has authored one into nothing.
//
// ── THE VOCABULARY DECISION THESE TERMS ENFORCE ────────────────────────────
//
// Corpus §8. `pronoun`, `subject` and `object` are HOUSE VOCABULARY — a2.06
// measured them at 233, 173 and 49 uses across the shipped seed — and are used
// freely. `indirect object` and `object pronoun` appear ONLY in
// `overview.titleEn`, which `content_units` requires to be « Indirect Object
// Pronouns », and which therefore contains BOTH of the phrases a2.06 refused
// outright. The exemption is one exact string and the guard checks it is that
// string, so every other occurrence still fails.
//
// Everywhere else the plain phrase does the work: « the person behind à ».

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  A, A117_TEST, A_FRAMING, DIRECT_UNIT, ENDING_RULE, GENDER_LOST, LEUR_RULE,
  NEGATION_EXTENSION, NEGATION_RULE, PLACE_UNIT, PLAIN_PHRASE, PLAIN_TARGET,
  POSITION_RULE, POSSESSIVE_UNIT, REFRAME, STRESSED_RULE, WHAT_FOLLOWS,
  WHAT_FOLLOWS_UNIT,
} from './pronoms-indirect-corpus.ts';

export const PRONOMS_INDIRECT_TERMS: Record<string, LessonTerm> = {
  /* THE OWNS, AS A TERM. Named for the thing the learner can look at rather
   * than for the grammatical category, which is the thing they cannot see. */
  behindA: {
    term: PLAIN_PHRASE,
    title: 'How to find the word this lesson is about',
    body:
      `Say the verb, then say à, then the person. Je parle à Marie. Je réponds à Paul. If the sentence takes that shape, the person behind à is what lui and leur stand in for. ${REFRAME} The hard part is not the pronoun, it is knowing that the à is there at all, because English says nothing in that position for half these verbs. « I phone my mother » has no little word in it anywhere, and French insists on one. So this is not a rule you can work out from the meaning. It is a property of the verb, and the only way to hold it is to have met the verbs.`,
    examples: [
      { itemId: A(237), note: 'The person is named, and the little word in front of them is the whole signal.' },
      { itemId: A(241), note: 'English answers Paul with nothing in between. French does not, and nothing in the English warned you.' },
    ],
  },

  /* THE PARADIGM, WHICH IS TWO WORDS AND IS NOT STRETCHED. */
  twoWords: {
    term: 'lui and leur',
    title: 'Two words, and the only question is how many people',
    body:
      `${A_FRAMING} One person takes lui and more than one takes leur, and that is the entire choice. ${GENDER_LOST} Everything up to now has taught you that French cares about gender more as you go, not less, so this is worth stopping on: le and la told you which kind of person you meant and lui does not. It is a real loss of information and it is also a real saving. Nothing else about these two words changes for anything: not the subject, not the verb, not the tense.`,
    examples: [
      { itemId: A(238), note: 'One person, so lui, and the sentence does not say whether it is a man or a woman.' },
      { itemId: A(240), note: 'More than one, so leur, and it never takes an s in this position.' },
    ],
  },

  /* a2.06's POSITION, QUOTED AND TAUGHT NOWHERE. */
  sameSlot: {
    term: 'the same place',
    title: `The one thing you do not have to learn, and ${unitRef(DIRECT_UNIT)} taught it`,
    body:
      `« ${POSITION_RULE} » is ${unitRef(DIRECT_UNIT, 'a2')}'s line and it is true of these two words without a word changed. Je le vois. Je lui parle. Same position, same distance from the subject, and the only difference is which set of words you reached into. That is worth saying out loud rather than leaving you to notice, because a learner who thinks each new pair of pronouns has its own placement rule ends up with three rules where there is one. There is one, it was learned last lesson, and this lesson spends it.`,
    examples: [
      { itemId: A(238), note: 'Subject, word, verb, exactly as last lesson.' },
      { itemId: A(268), note: 'And in front of BOTH words when the verb arrives as two, which is also last lesson\'s.' },
    ],
  },

  /* THE TRAP THAT IS TESTABLE ON A TYPED SURFACE. */
  theirWord: {
    term: 'the other leur',
    title: `The word ${unitRef(POSSESSIVE_UNIT)} gave you, doing something else`,
    body:
      `You have had leur since ${unitRef(POSSESSIVE_UNIT)} and it meant their. That word is still there and this is a different one, spelled the same. ${LEUR_RULE} The possessive counts things and takes an s when there are several of them; this one counts nothing and never takes one, no matter how many people you are talking to. ${Cap(unitRef(POSSESSIVE_UNIT))} handed you the test on the last card of its own lesson and it still works: ${A117_TEST}. Leur maison has a thing behind it. Je leur parle has a verb. That is the whole difference and you can see it without knowing a single term.`,
    examples: [
      { itemId: A(258), note: 'A thing behind it, so it is the possessive, and it would take an s if there were several houses.' },
      { itemId: A(260), note: 'Both jobs in one sentence. The first has a verb behind it and can never take an s; the second has a house behind it.' },
    ],
  },

  /* THE SECOND TRAP, AND DOCTRINE §B.7's SIXTH OCCURRENCE. */
  onItsOwn: {
    term: 'lui on its own',
    title: `The sixth time this shape has come round, and ${unitRef(WHAT_FOLLOWS_UNIT)} named it`,
    body:
      `« ${WHAT_FOLLOWS} » is ${unitRef(WHAT_FOLLOWS_UNIT, 'a2')}'s line for this pattern and you have met it five times. Here it is again on lui. ${STRESSED_RULE} Je lui parle has a verb straight after it, so it is this lesson's word. Je parle avec lui has avec straight before it, so it is the other one, and it sits where English would put it rather than in front of the verb. Same three letters, two jobs, and the thing beside it settles which. ${Cap(unitRef(DIRECT_UNIT))} had exactly this one lesson ago, on le and la against the article.`,
    examples: [
      { itemId: A(238), note: 'A verb after it, so it belongs to the verb and goes in front of it.' },
      { itemId: A(261), note: 'Avec before it, so it stands alone and stays at the end, where English puts it.' },
    ],
  },

  /* THE THIRD TRAP. a2.04's à is a different job. */
  theLittleWord: {
    term: 'the à that disappears',
    title: `Not the à ${unitRef(PLACE_UNIT)} taught you`,
    body:
      `${Cap(unitRef(PLACE_UNIT))} spent a whole lesson on à in front of a place. That à stays in the sentence and folds itself into whatever follows. This one marks a person instead, and it does not stay at all. ${A_FRAMING} Je parle à Marie becomes Je lui parle, and there is no à left anywhere. Learners keep it and write Je parle à lui, which is real French and means something else.`,
    examples: [
      { itemId: A(237), note: 'The à is there because the person is named.' },
      { itemId: A(238), note: 'The person is not named any more, and the à went with them.' },
    ],
  },

  /* NEGATION. a2.06's sentence, quoted and not extended. */
  theWrap: {
    term: 'the wrap',
    title: 'What ne and pas go round, and it has not changed',
    body:
      `« ${NEGATION_RULE} » is the line you have carried since the near future, and there is one verb in these sentences so the question of which verb never arises. ${NEGATION_EXTENSION} That sentence is ${unitRef(DIRECT_UNIT, 'a2')}'s, word for word, and it holds here for the same reason: the pronoun belongs to the verb, so it goes where the verb goes. Ne outside both, pas after both. Nothing about this is new and it is on a screen because the sentence is longer now and a longer sentence is where a learner starts wondering whether the rule still applies.`,
    examples: [
      { itemId: A(264), note: 'Ne outside, then the pronoun and the verb together, then pas.' },
      { itemId: A(271), note: 'And with a two-word verb: ne, pronoun, first word, pas, second word.' },
    ],
  },

  /* WHAT a2.23 PROMISED, DELIVERED. */
  noEnding: {
    term: 'the ending that never comes',
    title: 'Why nothing is ever added after lui or leur',
    body:
      `${ENDING_RULE} You met an ending on the second word last lesson, when the thing acted on came before the verb: Je l'ai vue, with an e on the end. That rule is about the thing acted on, and lui and leur are never the thing acted on. They are the person it is done TO, which is a different job, and the second word does not respond to them at all. Je lui ai parlé. Je leur ai parlé. Nothing goes on either one, ever, and there is nothing to remember beyond that. It is the one place in these two lessons where the answer is always the same.`,
    examples: [
      { itemId: A(268), note: 'One person, and parlé is bare.' },
      { itemId: A(269), note: 'Several people, and parlé is still bare. Nothing was ever going to change it.' },
    ],
  },

  /* THE OWNS, STATED AS THE THING THE LEARNER IS ACTUALLY DOING. */
  theTarget: {
    term: PLAIN_TARGET,
    title: 'Ten verbs, and there is no rule behind them',
    body:
      `Six of these ten verbs put a person behind à and English puts nothing at all: phone someone, answer someone, ask someone, tell someone, show someone, give someone. Four of them put a person behind à and English says to, so you get those right without trying. There is no meaning that separates the two groups and no test you can run on the situation; it is a property of each verb, one at a time, and French speakers learned it the same way you are about to. That is the fair description and it is better than a rule that works six times out of ten, because a rule that nearly works is the one you keep applying.`,
    examples: [
      { itemId: A(243), note: 'Phone someone. Nothing in the English tells you an à is coming.' },
      { itemId: A(248), note: 'Write to them. English does tell you, and this is one of the four you already get right.' },
    ],
  },
};
