// a1.07.l1 "Le verbe avoir" — the lesson glossary and its reframe.
//
// Split out for the same reason etre-terms.ts and articles-partitifs-terms.ts
// are: a term is defined ONCE and surfaced at every point of use via a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline. The renderer shows three chips
// and collapses the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.01's terms define social facts. a1.11's are facts about what the listener
// already knows. a1.06's are facts about a verb with no pattern. These are facts
// about WHICH VERB A SENTENCE WANTS, which is the only question this lesson
// asks, and every term below is a different answer to it.
//
// The words « conjugaison », « auxiliaire », « participe passé », « présent de
// l'indicatif » and « verbe irrégulier » appear nowhere in the bodies below or
// in the lesson. a1.06 taught six forms of être without once naming a tense, and
// a1.05 taught nine pronouns without naming a person or a number. A learner
// arriving here has no such label to cash, and naming one buys nothing except a
// second thing to remember. `grammarIntroduced` is addressed to the curriculum
// and is better for using the precise words. The test pins it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight, which is a1.11's and a1.29's
 *  density and the point at which a line stops being a sentence that happened
 *  once.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The unit brief names three things: the six forms, the age rule, and fourteen
 *  expressions. Shipped as three blocks that is a table, a fact and a word list,
 *  and a learner forgets two of the three by Thursday.
 *
 *  They are not three things. The age rule and eleven of the fourteen are ONE
 *  rule, and it is a rule about English rather than about French:
 *
 *      J'ai faim.        I am hungry.
 *      J'ai vingt ans.   I am twenty.
 *      J'ai froid.       I am cold.
 *      J'ai peur.        I am afraid.
 *
 *  Six words cover all twelve of those at once. The line explains WHY the error
 *  happens rather than forbidding it, which matters because the error it kills
 *  is the loudest one an English speaker makes at A1: « Je suis vingt ans » and
 *  « Je suis faim » are not mildly wrong, they are not sentences. And a learner
 *  can test it on themselves before they finish the first mission.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  A reframe about the paradigm is unavailable and would be wrong twice over.
 *  a1.06 already owns "No pattern. Six forms. Every conversation." one unit
 *  upstream, so a second lesson claiming the same axis would read as a repeat.
 *  And the six forms are the least interesting thing here: they are a closed set
 *  a learner can see on one screen and hold in ten minutes. The difficulty is
 *  not which form, it is WHICH VERB.
 *
 *  "Use avoir where English uses be" was the runner-up and it is an instruction
 *  rather than an explanation, so it tells a learner what to do and leaves them
 *  no way to work out a case nobody listed. It is also eight words and it names
 *  a verb the learner has to look up mid-sentence.
 *
 *  "Hunger is a thing you have" is vivid and covers about half: it works on
 *  faim, soif, sommeil, froid, chaud and peur, and it says nothing at all about
 *  raison, tort, or an age.
 *
 *  The line deliberately does NOT cover the three that take a complement. That
 *  is not a gap, it is the shape of the lesson: eleven behave one way, three
 *  behave another, and a learner who is told the second group exists holds a
 *  shape rather than a list of fourteen. See `withComplement`. */
export const REFRAME = 'French has it. English is it.';

export const AVOIR_TERMS: Record<string, LessonTerm> = {
  haveNotBe: {
    term: 'avoir, not être',
    title: 'The swap English makes you get wrong',
    body:
      'English puts "am" in front of hungry, cold, afraid, right and twenty. French puts "have" in front of all five, and the word after it is a thing rather than a description: hunger, cold, fear, reason, years. So the sentence is not built the way yours is, and translating it word by word gives you something that is not French at all. This is the single most audible beginner error there is, because it lands in the first sentence anyone says about themselves.',
    examples: [
      { itemId: 'fr.a1.famille.227', note: 'Hunger, had. Not hungry, been.' },
      { itemId: 'fr.a1.presentation-personnelle.006', note: 'Twenty years, had. Je suis vingt ans is not a sentence.' },
    ],
  },
  ageRule: {
    term: 'saying an age',
    title: 'Years are something you have',
    body:
      'An age in French is a number of years that belong to you, so it takes avoir and the word ans is never left off. You already own every number you need for this: they were the whole of three earlier lessons, and nothing about counting changes here. What changes is the frame the number sits in, and there is exactly one of them. Ask it with quel âge and answer it with a form of avoir plus a number plus ans.',
    examples: [
      { itemId: 'fr.a1.nombres.026', note: 'The number is the part you already had.' },
      { itemId: 'fr.a1.presentation-personnelle.009', note: 'The question that gets you the answer, in the tu form.' },
    ],
  },
  sixForms: {
    term: 'ai, as, a, avons, avez, ont',
    title: 'Six forms, and three of them join up out loud',
    body:
      'Nine pronouns sit behind six forms, which is the arithmetic you were given two lessons ago and which holds here unchanged. What is new is that four of the six start on a vowel, so the pronoun in front binds to them: nous avons is said as one word with a Z in the middle, and so are vous avez, ils ont and elles ont. That join is not optional and it is the thing that separates ils ont from ils sont.',
    examples: [
      { itemId: 'fr.a1.famille.224', note: 'noo-za-VOHⁿ, one word out loud.' },
      { itemId: 'fr.a1.famille.226', note: 'eel-ZOHⁿ. The S of ils wakes up, exactly as it did in vous êtes.' },
    ],
  },
  withComplement: {
    term: 'besoin de, envie de, mal à',
    title: 'The three that behave differently',
    body:
      'Eleven of these expressions are a straight swap of have for be. These three are not: they land on need, want and hurt rather than on be, and all three carry a little word after them that has to come too. Besoin and envie take de, which shortens to d apostrophe in front of a vowel. Mal takes à, and then the à joins whatever article the body part wants: au dos, à la tête, aux dents. Learn them as a group of three and the other eleven stay simple.',
    examples: [
      { itemId: 'fr.a1.expressions-frequentes.057', note: 'need, and the de that has to come with it.' },
      { itemId: 'fr.a1.corps.008', note: 'hurt, and the à that merged with le to make au.' },
    ],
  },
  pastAmbush: {
    term: "j'ai in front of a verb",
    title: 'When have stops meaning have',
    body:
      'Nearly a quarter of the sentences in this course that open on a form of avoir are not about having anything. J ai perdu mes clés is I lost my keys, not I have lost-keys. When the word after the form of avoir is another verb, the pair is a past tense and the have has gone. You are not learning that tense yet. What you need now is to recognise it on sight, so that a sentence you meet in the wild does not get read as a possession that is not there.',
    examples: [
      { itemId: 'fr.a1.objets.021', note: 'Lost, in the past. There is no having in this sentence.' },
      { itemId: 'fr.a1.famille.232', note: 'A real possession, for comparison. One noun after the form, no second verb.' },
    ],
  },
  noArticleUnderNo: {
    term: 'pas de, and pas on its own',
    title: 'Two ways a negative can land',
    body:
      'Say no to a thing you could count and the word in front of it collapses to de: j ai une voiture becomes je n ai pas de voiture. Say no to one of these expressions and nothing collapses, because there was never an article there to lose: j ai faim becomes je n ai pas faim. Both halves are on the same screen for a reason. Which one you get tells you which kind of sentence you were in, and it is the whole of what the negation unit will ask you to do.',
    examples: [
      { itemId: 'fr.a1.famille.233', note: 'une became de. The rule you met on un, une and des.' },
      { itemId: 'fr.a1.famille.234', note: 'Nothing to collapse, so nothing collapsed. Never pas de faim.' },
    ],
  },
};
