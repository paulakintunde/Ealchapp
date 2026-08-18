// a2.13.l1 "Irréguliers 3 : vouloir, pouvoir, devoir" — the lesson glossary, its
// reframe, and the constants it inherits from a2.01 and a2.02.
//
// Split out for the same reason verbes-er-terms.ts and modaux-corpus.ts are: a
// term is defined ONCE and surfaced at every point of use via a section's
// `terms` chips, so a learner meets the same explanation wherever the word turns
// up and no card carries the definition inline.
//
// Three chips per section, maximum. The renderer shows three and collapses the
// rest, which is how seven sons.06 sections came to declare chips nobody sees.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { NOUS_ON } from './verbes-er-terms.ts';
import { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT } from './aller-venir-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import {
  A1_01_REFRAME, A1_01_UNIT, ENDINGS, FRAME_VERB, IL_FAUT, MODAL_ORDER,
  POLITE_FORMS, POUVOIR_SENSES, SINGULAR_PERSONS, SINGULAR_SPELLINGS, STEMS,
  THE_NEW_ENDING, THE_NEW_ENDING_FORMS, UNSEEN_VERB,
} from './modaux-corpus.ts';

/** a2.01's nous/on statement, re-exported rather than retyped.
 *
 *  The ledger binds all twenty A2 lessons to one wording. This lesson has its
 *  own reason to quote it: `on` takes the `il` form, so the spoken we says
 *  `on peut` and never `on pouvons` — and `on peut` is the sentence a learner
 *  will hear more often than any other form in this lesson. */
export { NOUS_ON };

/** a2.02's pattern name, imported rather than reinvented.
 *
 *  Doctrine §B.7 names four instances of one form doing two jobs, distinguished
 *  only by what follows it, and tells later lessons to point back at the unit
 *  that named the shape. a2.13 holds the cleanest instance in the band:
 *
 *    dois + a verb     obligation      Je dois payer.
 *    dois + a thing    owing money     Tu me dois de l'argent.
 *
 *  Same verb, same person, two unrelated sentences, and only the next word
 *  separates them. The card quotes a2.02's name verbatim rather than inventing a
 *  fifth phrase for the same idea. */
export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** The line this lesson hangs on.
 *
 *  ── Why this one, and what was rejected ──────────────────────────────────
 *
 *  THE BRIEF'S OWN CANDIDATE CANNOT SHIP, AND NEITHER CAN ITS ALTERNATIVE.
 *
 *    "Conjugate one verb, and every other verb stays in its dictionary form."
 *        `conjugate` is on the JARGON list, A1-BUILD-INVARIANTS §8.
 *
 *    "Modals are followed by the infinitive."
 *        the brief rejects this itself, and it also uses `infinitive`, which is
 *        on the same list. Both candidates in the brief are unshippable.
 *
 *  What ships says the same thing in words a learner already owns, and says the
 *  PAYOFF rather than the rule: the second verb never changes, so the work stops
 *  at the first one. Twelve words, inside the `xl` cap.
 *
 *  Rejected here as well:
 *
 *    "One verb does the work and the next one rests."
 *        pretty, and it does not tell the learner what to DO.
 *    "You only have to change the first verb."
 *        true, and it frames the lesson as a saving rather than as a reach. The
 *        reach is the point: this is the first structure in the level where the
 *        learner uses a verb the course never taught them. */
export const REFRAME = 'One verb changes for the person, and the next one never does.';

/** The claim the Owns act makes, derived so the figure cannot drift. */
export const REACH_CLAIM = `Three verbs here, and every other verb in the language behind them.`;

/** The arithmetic of the singular, stated once and asserted everywhere.
 *
 *  THIS BUILD GOT IT WRONG FIRST TIME and the check caught it. `veux/veux/veut`
 *  is TWO spellings across THREE persons, not three spellings. A lesson that
 *  said three would send a learner looking for a distinction that is not there. */
export const SINGULAR_CLAIM = `${SINGULAR_PERSONS} persons, ${SINGULAR_SPELLINGS} spellings, one sound.`;

/** Five of the six endings are already the learner's. Derived from ENDINGS so
 *  that adding a row to that table moves this sentence too. */
export const OWNED_ENDINGS = ENDINGS.filter((e) => e.owned).length;
export const ENDINGS_CLAIM = `${OWNED_ENDINGS} of the ${ENDINGS.length} endings are ones you already have. One letter here is new.`;

/** The stem recipe, in words, derived from STEMS so a typo in the table breaks
 *  the sentence rather than shipping beside it. */
export const STEM_CLAIM = MODAL_ORDER
  .map((m) => `${STEMS[m].singular} + ${STEMS[m].nous.slice(-1)} = ${STEMS[m].ils}`)
  .join(' · ');

/** What the learner is NOT being asked to learn. The objects in these sentences
 *  belong to other lessons and this one hands them straight back. */
export const NOT_THE_VERBS = 'The second verb in every sentence here belongs to somebody else. What you are learning is the first one.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GLOSSARY
 * ═══════════════════════════════════════════════════════════════════════ */

export const MODAUX_TERMS: Record<string, LessonTerm> = {
  theReach: {
    term: 'what these three unlock',
    title: 'Three verbs, every other verb behind them',
    body:
      `${REFRAME} That is the whole of it, and it is worth more than any list of verbs. Once you can say je veux, je peux and je dois, you can put ANY verb after them in the shape it has in the dictionary, including verbs nobody has taught you and verbs you met once on a sign. Six lessons have been building toward a point where changing the verb stops being necessary, and this is that point.`,
    examples: [
      { itemId: 'fr.a2.verbes.341', note: 'One verb changed. payer did not.' },
      { itemId: 'fr.a2.verbes.369', note: 'And nobody taught you this second one.' },
    ],
  },

  theStems: {
    term: 'the three stems',
    title: 'Two stems, and the third one you can work out',
    body:
      `Each of these verbs has a short stem for je, tu and il, a longer one for nous and vous, and a third for ils. The third is not a new thing to learn: take the short stem and add the last letter of the long one. ${STEM_CLAIM} Three verbs, one recipe, no exceptions. If you can see that, you never have to memorise the ils row again.`,
    examples: [
      { itemId: 'fr.a2.verbes.346', note: 'veu plus the l from voulons.' },
      { itemId: 'fr.a2.verbes.352', note: 'peu plus the v from pouvons.' },
      { itemId: 'fr.a2.verbes.358', note: 'doi plus the v from devons. Same recipe, third time.' },
    ],
  },

  theSingular: {
    term: 'why je, tu and il sound the same',
    title: SINGULAR_CLAIM,
    body:
      `Je veux, tu veux, il veut. Two of those are spelled identically and the third differs by one silent letter, and all three are one sound in the mouth. The same is true of peux, peux, peut and of dois, dois, doit. Nothing separates them when spoken except the word in front, which is why the pronoun is never optional here. In writing you must pick the right one; in speech there is nothing to pick.`,
    examples: [
      { itemId: 'fr.a2.verbes.341', note: 'veux' },
      { itemId: 'fr.a2.verbes.343', note: 'veut, and not one sound different.' },
    ],
  },

  theNewLetter: {
    term: `the -${THE_NEW_ENDING} ending`,
    title: `${THE_NEW_ENDING_FORMS.join(' and ')}, and nothing else in the language you have met`,
    body:
      `${ENDINGS_CLAIM} That letter is the -${THE_NEW_ENDING} on ${THE_NEW_ENDING_FORMS.join(' and ')}. It is silent, exactly as the -s has been silent on every verb since ${unitRef('a2.01')}, so it changes nothing you say and one thing you write. dois takes an ordinary -s instead, which is the singular you already met on the -RE verbs in ${unitRef('a2.11')}.`,
    examples: [
      { itemId: 'fr.a2.verbes.341', note: 'A -x, and you hear nothing.' },
      { itemId: 'fr.a2.verbes.353', note: 'A plain -s here. Same silence.' },
    ],
  },

  theSenses: {
    term: 'the three jobs of pouvoir',
    title: 'One French verb, three English ones',
    body:
      `English splits this across three words and French does not. ${POUVOIR_SENSES.map((s) => `${s.english} is ${s.gloss}`).join('; ')}. All three are pouvoir, and no French speaker feels a difference between them. This matters at the moment you want to ask for something: if you believe pouvoir means only being able, you will look for another verb to ask permission with, and there is not one.`,
    examples: POUVOIR_SENSES.map((s) => ({ itemId: s.id, note: `${s.english}, ${s.gloss}` })),
  },

  thePolite: {
    term: POLITE_FORMS[0],
    title: 'A form to learn whole',
    body:
      `${POLITE_FORMS[0]} is not a present tense and it is not a version of veux you can build. It is one fixed form, and ${POLITE_FORMS[1]} is the only other one worth carrying at this stage. Its proper name and its whole family come much later; for now, learn these two the way you learned bonjour. The reason to bother is not grammar: je veux un café is a demand and ${POLITE_FORMS[0]} un café is a request, and the person behind the counter hears the difference immediately.`,
    examples: [
      { itemId: 'fr.a2.verbes.341', note: 'Correct, and blunt.' },
      { itemId: 'fr.a2.verbes.362', note: 'The same sentence, and now you will be served.' },
    ],
  },

  theRegister: {
    term: 'why the polite one matters',
    title: `${Cap(unitRef(A1_01_UNIT))} already gave you this`,
    body:
      `${A1_01_REFRAME} That was ${unitRef(A1_01_UNIT)}, and it also put ${POLITE_FORMS[0]} in your mouth in the very first lesson without saying what it was. This is where that is paid off. The difference between the blunt form and the polite one is not correctness, because both are correct French. It is whether the interaction goes well, and in a shop, a station or a doorway that is the only thing being measured.`,
    examples: [
      { itemId: 'fr.a1.verbes-du-quotidien.035', note: 'Correct French, and it lands as a demand.' },
      { itemId: 'fr.a1.cafe.051', note: `The sentence ${unitRef('a1.01')} handed you before you could build it.` },
    ],
  },

  theSecondVerb: {
    term: 'the verb that never changes',
    title: NOT_THE_VERBS,
    body:
      `${FRAME_VERB}, commander, attendre, choisir, boire, acheter, aider, chercher, conduire, arriver. Every one of those came from another lesson, and every one arrives here in exactly the shape the dictionary gives it. It does not matter whether it is an -ER verb, an -IR verb or an -RE verb; after one of these three, nothing happens to it at all. That is not a simplification for beginners. That is the rule, and it does not change later.`,
    examples: [
      { itemId: 'fr.a2.verbes.367', note: `attendre is an -RE verb from ${unitRef('a2.11')}, and it does not move.` },
      { itemId: 'fr.a2.verbes.368', note: `choisir is an -IR verb from ${unitRef('a2.10')}, and it does not move either.` },
    ],
  },

  theOwing: {
    term: 'devoir with no verb after it',
    title: 'The same word, owing money',
    body:
      `${WHAT_FOLLOWS}. ${Cap(unitRef('a2.02'))} named that shape and this is another one of it. Put a verb after dois and it means have to. Put a thing after it and it means owe. Tu me dois de l'argent is not about obligation in general; it is about ten euros. You will not need to produce this for a while, and you should recognise it, because the two sentences look identical until the word after the verb.`,
    examples: [
      { itemId: 'fr.a2.verbes.353', note: 'A verb follows. Obligation.' },
      { itemId: 'fr.a2.verbes.364', note: 'A thing follows. Money.' },
    ],
  },

  theImpersonal: {
    term: 'il faut',
    title: 'Nobody is doing it',
    body:
      `This one has no person at all. Il faut réserver does not say who has to book; it says booking is what is required. French reaches for it constantly, far more often than for any single form of the three verbs in this lesson, and you will hear it long before you need to produce it. Two words, one shape, no changes. Recognise it and move on: it is not part of what you are building here.`,
    examples: IL_FAUT.ids.map((id, i) => ({ itemId: id, note: i === 0 ? 'Nobody named, and everybody knows who is meant.' : 'The same two words, doing the same job.' })),
  },

  theUnseen: {
    term: 'a verb nobody taught you',
    title: 'The point of the whole lesson',
    body:
      `${UNSEEN_VERB.fr} means ${UNSEEN_VERB.en}, and this lesson has not taught it, will not drill it, and does not expect you to keep it. It is here to prove something: you did not need the lesson. Put it after je peux or tu dois in the shape it has above, and the sentence is correct. That is true of every verb in the dictionary, which is roughly eleven thousand of them, and it is what these three verbs bought you.`,
    examples: UNSEEN_VERB.answerIds.map((id, i) => ({ itemId: id, note: i === 0 ? 'A verb you met thirty seconds ago.' : 'And behind a different first verb, unchanged.' })),
  },

  whatFollows: {
    term: WHAT_FOLLOWS,
    title: 'One form, two sentences',
    body:
      `${WHAT_FOLLOWS} You met that shape at ${unitRef(WHAT_FOLLOWS_UNIT)}, and this lesson holds the cleanest example of it in the level. dois with a verb after it means having to. dois with a thing after it means owing money. Same verb, same person, nothing to tell them apart until the next word arrives. It is worth knowing that French does this at all, because you will meet it again and the instinct to decide what a word means before the sentence has finished is a hard one to switch off.`,
    examples: [
      { itemId: 'fr.a2.verbes.353', note: 'A verb follows. Obligation.' },
      { itemId: 'fr.a2.verbes.364', note: 'A thing follows. Ten euros.' },
    ],
  },

  nousOn: {
    term: 'on',
    title: 'The we people actually say',
    body: NOUS_ON,
    examples: [{ itemId: 'fr.a2.verbes.349', note: 'on peut takes this form, never on pouvons.' }],
  },
};
