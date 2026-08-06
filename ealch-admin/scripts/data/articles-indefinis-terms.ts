// a1.11.l1 "Les articles indéfinis" — the lesson glossary and its reframe.
//
// Split out for the same reason salutations-terms.ts is: a term is defined ONCE
// and surfaced at every point of use via a section's `terms` chips, so a learner
// meets the same explanation wherever the idea turns up and no card carries the
// definition inline. The renderer shows three chips and collapses the rest, so
// no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.01's terms define social facts. a1.03's are closer to sons, because the
// hard part of gender is storage. These are neither: every one is a fact about
// WHAT THE LISTENER ALREADY KNOWS, which is not a property of the noun and is
// the reason this lesson is not a gender quiz. Five of the six are therefore
// stated as a contrast rather than as a rule about French.
//
// The words « article défini », « article indéfini » and « partitif » appear
// nowhere in the bodies below or in the lesson. a1.11 declares a prerequisite
// on a1.03, which teaches le and la as part of gender and never names them as a
// category, so a learner arriving here has no such label to cash. a1.02 set the
// precedent of teaching the behaviour plainly instead. The test pins it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight, which is the a1.01 density
 *  and the point at which a line stops being a sentence that happened once.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The canDo has two clauses and only one of them is hard. "Pick un or une" is
 *  gender wearing a different article, and a1.03 already taught gender and ten
 *  predictive endings. What stays wrong for years is which article a sentence
 *  WANTS, and that is not a property of the noun at all: it is a property of
 *  what the person listening already knows.
 *
 *  This line states that in one breath, it is true of every use in the lesson
 *  including the generalisation rule (a generalisation is the ultimate "you
 *  already know what I mean"), and a learner can test it tomorrow: ask for
 *  l'hôtel from someone who does not know which hotel and watch what happens.
 *  That is exactly what the opening scene dramatises.
 *
 *  The rejected alternative was "un for new, le for old", which is shorter and
 *  worse: `new` and `old` sound like properties of the thing, and the whole
 *  point is that they are properties of the conversation. */
export const REFRAME = 'Un introduces it. Le assumes you already know it.';

export const INDEFINIS_TERMS: Record<string, LessonTerm> = {
  introducing: {
    term: 'un / une / des',
    title: 'The article for something new to the listener',
    body:
      'Use these the first time a thing comes into the conversation, when the person you are talking to has no way of knowing which one you mean and does not need to. Un for a masculine noun, une for a feminine one, des for more than one. English does the same thing with a and an, so you already have the instinct. The half English does not give you is des, because English simply leaves the gap empty.',
    examples: [
      { itemId: 'fr.a1.deplacements.304', note: 'Any hotel. That is the point of the question.' },
      { itemId: 'fr.a1.cafe.147', note: 'Croissants she has not mentioned before.' },
    ],
  },
  known: {
    term: 'le / la / les',
    title: 'The article that assumes you both know which one',
    body:
      'Use these once the thing is already in the conversation, or when there is only one of it, or when you are talking about the whole category rather than any particular example. It is a claim about the listener as much as about the noun: le says you can both point at the same thing. Say it too early and you get asked which one you mean.',
    examples: [
      { itemId: 'fr.a1.deplacements.305', note: 'The hotel she just named. Now there is only one.' },
      { itemId: 'fr.a1.cafe.149', note: 'Coffee as a whole. Nobody has to ask which coffee.' },
    ],
  },
  secondMention: {
    term: 'second mention',
    title: 'The moment the article changes',
    body:
      'A thing arrives on un, une or des and stays on le, la or les for the rest of the conversation. Nothing about the noun changed; what changed is that the other person now knows about it. This is why a single sentence cannot show you the rule, and why the passage in this lesson says every noun twice.',
    examples: [
      { itemId: 'fr.a1.deplacements.306', note: 'It arrives.' },
      { itemId: 'fr.a1.deplacements.307', note: 'One line later it is the room, for both of you.' },
    ],
  },
  noArticle: {
    term: 'no article',
    title: 'What a job takes after être',
    body:
      'After je suis, tu es, il est and elle est, a job goes in bare: je suis professeur, elle est avocate. English requires a and French forbids it, so this error is guaranteed and it is audible. The one place the article comes back is after c’est, which points at a person rather than describing one: c’est un professeur.',
    examples: [
      { itemId: 'fr.a1.metiers.244', note: 'Nothing in front of the job.' },
      { itemId: 'fr.a1.metiers.247', note: "The exception, and the only one: c'est takes the article." },
    ],
  },
  deUnderNo: {
    term: 'de',
    title: 'What un, une and des become under a negative',
    body:
      'Say you do not have something and all three collapse into de. J’ai une voiture becomes je n’ai pas de voiture, never pas une voiture. The definite article does not do this: j’aime le café becomes je n’aime pas le café, unchanged. That asymmetry is the whole rule, and it is the fastest way to hear which article you were using.',
    examples: [
      { itemId: 'fr.a1.objets.212', note: 'Une went to de.' },
      { itemId: 'fr.a1.cafe.150', note: 'Le stayed exactly where it was.' },
    ],
  },
  wholeThing: {
    term: 'the whole of it',
    title: 'Liking a thing in general',
    body:
      'J’aime le café is "I like coffee", not "I like the coffee". When you like, love, prefer or hate something, French names the whole of it and that takes le, la or les. English puts nothing there, which is why this is the single most common mistake an English speaker makes with French articles. If the sentence would work with the words "in general" after it, you want le.',
    examples: [
      { itemId: 'fr.a1.cafe.149', note: 'Coffee in general, for the rest of your life.' },
      { itemId: 'fr.a1.marche.200', note: 'Open-air markets as a category, not one market.' },
    ],
  },
};
