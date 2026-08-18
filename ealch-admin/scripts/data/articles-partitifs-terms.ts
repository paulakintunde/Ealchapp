// a1.29.l1 "Les articles partitifs" — the lesson glossary and its reframe.
//
// Split out for the same reason articles-indefinis-terms.ts is: a term is
// defined ONCE and surfaced at every point of use via a section's `terms` chips,
// so a learner meets the same explanation wherever the idea turns up and no card
// carries the definition inline. The renderer shows three chips and collapses
// the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.01's terms define social facts. a1.11's are facts about what the listener
// already knows. These are facts about THE THING ITSELF: whether it is one of
// something or some of something. That is the only question this lesson asks,
// and every term below is a different answer to it.
//
// The words « article partitif », « article défini », « article indéfini »,
// « masculin » and « féminin » appear nowhere in the bodies below or in the
// lesson. a1.03 taught le and la as part of gender and never named them as a
// category; a1.04 and a1.11 both inherited that and asserted it. A learner
// arriving here has no such label to cash, and naming one buys nothing except a
// second thing to remember. `grammarIntroduced` is addressed to the curriculum
// and is better for using the precise words. The test pins it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight, which is a1.11's density and
 *  the point at which a line stops being a sentence that happened once.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The canDo asks for "an unspecified amount of food or drink", which is the
 *  use case. The difficulty is one layer under it: English does not make you
 *  draw this line at all. « A coffee », « some coffee » and « coffee » are all
 *  available in English and the middle one is usually deleted, so there is no
 *  instinct to transfer. Three French articles arrive on one noun:
 *
 *      un café    one cup, a thing you can put on a table
 *      du café    coffee, the substance, an amount nobody has measured
 *      le café    coffee in general, or the coffee we both know about
 *
 *  This line states the countable/uncountable split in nine words. It is true
 *  of « de la » and « de l' » unchanged, because those are the same word
 *  agreeing with a different noun. And a learner can test it on the next thing
 *  they order, which is what the opening scene dramatises.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  A reframe about NEWNESS is unavailable and would be wrong. a1.11 already
 *  owns "Un introduces it. Le assumes you already know it.", and newness does
 *  not separate un from du: « du café » is every bit as new to the listener as
 *  « un café ». Countability is what separates them, and a reframe that named
 *  the wrong axis would quietly undo a1.11 as well as failing here.
 *
 *  "Count it and it takes un, pour it and it takes du" was the runner-up. It is
 *  more vivid and it fails on the nouns that matter most: you cannot pour
 *  bread, cheese, courage or noise, and all four take du.
 *
 *  "If you can put one on a table it is un" fails the other way, on « du
 *  courage » and « du bruit », and it is fourteen words.
 *
 *  The a1.04 reframe is "When English says nothing, French says le." This one
 *  is deliberately its neighbour rather than its rival: a1.04 answers what to
 *  do about the empty English slot when you mean the whole category, and this
 *  one answers what to do about it when you mean part of one. */
export const REFRAME = 'Un is one of them. Du is some of it.';

export const PARTITIFS_TERMS: Record<string, LessonTerm> = {
  someOfIt: {
    term: "du / de la / de l'",
    title: 'The word for an amount nobody has counted',
    body:
      'Use these when you mean some of a thing rather than a number of them. Du in front of most nouns, de la in front of the ones that take la, and de l apostrophe in front of a word starting with a vowel sound. English usually puts nothing here, or the word "some" when it wants to be careful, so there is nothing in your own language reminding you that French wants a word at all.',
    examples: [
      { itemId: 'fr.a1.cuisine.007', note: 'Bread, not a loaf. Nobody has weighed it.' },
      { itemId: 'fr.a1.cuisine.199', note: "Water, not a bottle. De l apostrophe because eau opens on a vowel sound." },
    ],
  },
  oneOfThem: {
    term: 'un / une',
    title: 'The word for a thing you can count',
    body:
      'Use these when you mean one of something: one cup, one loaf, one apple. This is the half English gives you for free, because English has a and an and uses them in the same place. The trap is that it also works in front of the same nouns: un café and du café are both correct and they are two different orders.',
    examples: [
      { itemId: 'fr.a1.cafe.152', note: 'One cup, on a saucer, at a counter.' },
      { itemId: 'fr.a1.cuisine.262', note: 'One whole loaf, wrapped and paid for.' },
    ],
  },
  namedQuantity: {
    term: 'de',
    title: 'What is left once a quantity is named',
    body:
      'Say how much and the article in front of the noun disappears. Beaucoup de café, un peu de sel, trop de sucre, and never beaucoup du café. Containers behave the same way, because a container is a quantity with a shape: un kilo de tomates, une bouteille d apostrophe eau, une tranche de fromage. This is completely regular and it is the opposite of what an English speaker expects, since English keeps "of the" in "a lot of the coffee".',
    examples: [
      { itemId: 'fr.a1.cuisine.269', note: 'The same sentence as Je bois du café, with a quantity named.' },
      { itemId: 'fr.a1.marche.154', note: 'A kilo is a quantity, so the noun goes in bare behind it.' },
    ],
  },
  deUnderNo: {
    term: 'pas de',
    title: 'What is left once you say no',
    body:
      'Je mange du pain becomes je ne mange pas de pain. You met this rule one lesson ago on un, une and des, and it is the same rule here with nothing added: say no and what was in front of the noun collapses to de. Before a vowel sound it shortens again, to d apostrophe. The one that does not move is le, la and les, which is how you can work out afterwards which word you had used.',
    examples: [
      { itemId: 'fr.a1.cuisine.264', note: 'Du went to de. Not pas du pain, and not pas le pain.' },
      { itemId: 'fr.a1.au-restaurant.189', note: 'The sentence you need on your first day if you do not eat meat.' },
    ],
  },
  otherDu: {
    term: 'du, the other one',
    title: 'The same three letters doing a different job',
    body:
      'Près du lit, le plat du jour, l apostrophe odeur du pain. None of these is about an amount of anything: they are de and le squeezed together, which French does automatically, and you have been reading them since your first lesson. Four out of five of the du in this corpus are this one. The test is whether you could put "some" in front of the English: some bread yes, some the bed no.',
    examples: [
      { itemId: 'fr.a1.objets.165', note: 'Near the bed. There is no amount of bed involved.' },
      { itemId: 'fr.a1.marche.140', note: 'The smell of the bread. The bread is a particular one, on a particular morning.' },
    ],
  },
  inGeneral: {
    term: 'le / la / les',
    title: 'The word for the whole of something',
    body:
      `J'aime le café is I like coffee, all of it, for the rest of your life. That is ${unitRef('a1.04')}'s rule and it is here only so you can see it is not the answer to this lesson's question. Le names the whole category or the particular one you have both been talking about. Du names part of it, right now, on this table. Both look wrong to an English speaker and only one of them is what you meant.`,
    examples: [
      { itemId: 'fr.a1.cafe.153', note: 'Some of what is in the pot, now.' },
      { itemId: 'fr.a1.marche.005', note: 'Buying cheese, so an amount of it, even though aimer is in the sentence.' },
    ],
  },
};
