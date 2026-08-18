// a1.15.l1 "La famille", the lesson glossary and its reframe.
//
// Split out for the same reason couleurs-terms.ts and mois-terms.ts are: a term
// is defined ONCE and surfaced at every point of use via a section's `terms`
// chips, so a learner meets the same explanation wherever the idea turns up and
// no card carries the definition inline. The renderer shows three chips and
// collapses the rest, so no section names more than three.
//
// The words « possessif », « génitif », « complément du nom », « masculin » and
// « féminin » appear nowhere below or anywhere in the lesson. a1.03 taught noun
// gender without once naming a grammatical class. `grammarIntroduced` is
// addressed to the curriculum and may use the precise words; cards may not.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it against an
 *  explicit constant rather than a figure derived from the lesson. The density
 *  validator requires it VERBATIM in at least three sections.
 *
 *  ── Why this one, and what it beat ───────────────────────────────────────
 *
 *  The unit's canDo is "Can introduce their family and say who is who", and the
 *  second half is the harder one. Saying who is who needs a way to attach a
 *  person to a relationship, and the learner's English does it with an
 *  apostrophe that French does not have.
 *
 *      French has no apostrophe. Turn it around.
 *
 *  Seven words. It is a DECISION THE LEARNER MAKES IN THE MOMENT OF SPEAKING,
 *  it applies mechanically to every relationship in the lesson, it is
 *  verifiable in the next sentence they say, and it delivers "say who is who"
 *  without borrowing a1.17's grammar.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "With people, le and la match the person" was the runner-up and it is the
 *  better INSIGHT. After a1.03 taught that gender mostly has to be memorised,
 *  twelve words where the article matches the actual human being is a genuine
 *  relief. But it is a PERMISSION rather than a PROCEDURE: a learner who has it
 *  still cannot build a sentence, and a reframe that does not survive contact
 *  with speaking is a fact. It is `matchesThePerson` below, it gets a whole act
 *  to itself, and it is not the headline.
 *
 *  "Learn the twenty family words" is a deck with a lesson wrapped around it,
 *  and the learner has already met a third of them in a1.03 and a1.11.
 *
 *  "Mon, ma, mes" is a1.17's lesson. Its canDo says "and their kin" explicitly.
 *  Taking it as the headline would be stealing, and this lesson takes exactly
 *  three words and hands the system over in writing.
 *
 *  ── The one thing the reframe does not say, deliberately ─────────────────
 *
 *  It does not say "de means of". a1.29 already taught `de` for QUANTITY
 *  (« une bouteille d'eau », « beaucoup d'eau ») and a learner who maps the two
 *  onto one English word gets « la bouteille de Paul » right and « le père de
 *  Paul » right for the wrong reason. The term `deOwner` names the difference. */
export const REFRAME = 'French has no apostrophe. Turn it around.';

export const FAMILLE_TERMS: Record<string, LessonTerm> = {
  deOwner: {
    term: 'de, and who it points at',
    title: 'De marks the owner, and the owner comes second.',
    body:
      'English marks the owner with an apostrophe and puts them first: Paul\'s mother. French has no '
      + 'apostrophe at all, so it names the relationship first and hangs the owner off the back of it with '
      + 'de: la mère de Paul. The two names come out in the opposite order, and that is the whole '
      + 'mechanism. Whatever sits immediately after de is the one who owns, and whatever sits in front of '
      + 'de is the relationship. That is why la sœur de Paul and le frère de Marie can describe the same '
      + 'two people and still say different things. You have met de before, in a bottle of water and a lot '
      + 'of water, where it was doing a different job: there it measured out a quantity, and here it names '
      + 'a person. The order rule is the same in both, which is the useful part. Say the thing, then de, '
      + 'then whose it is.',
    examples: [
      { itemId: 'fr.a1.famille.241', note: 'De points at Paul, so Paul is the one with a sister.' },
      { itemId: 'fr.a1.famille.242', note: 'The same two people, and de now points at Marie instead.' },
    ],
  },

  matchesThePerson: {
    term: 'le and la, for once, match',
    title: 'With people, the article follows the actual person.',
    body:
      `${Cap(unitRef('a1.03'))} asked you to learn the article with the noun, because for most words nothing about the word `
      + 'tells you which one it takes. Family is the one corner of the language where it does. Le père and '
      + 'la mère, le frère and la sœur, le fils and la fille, l\'oncle and la tante, le cousin and la '
      + 'cousine, le neveu and la nièce. Twelve words, six pairs, and you never have to guess at one of '
      + 'them: if the person is a man the word takes le, and if she is a woman it takes la. That is a real '
      + 'saving and it is worth using. It is also worth knowing exactly where it stops, because it does. '
      + 'Le bébé stays masculine for a baby girl, l\'enfant stays masculine for any child, and les parents, '
      + 'les enfants and les grands-parents are all masculine plurals covering a mixed group. Those are not '
      + 'exceptions somebody forgot to fix: they are the ordinary French rule showing through in the one '
      + 'place the friendly version runs out.',
    examples: [
      { itemId: 'fr.a1.famille.001', note: 'A man, so the word takes le. Nothing had to be memorised.' },
      { itemId: 'fr.a1.famille.019', note: 'And where it stops: le bébé stays masculine for a baby girl.' },
    ],
  },

  frozenPossessive: {
    term: 'mon, ma, mes',
    title: 'Three words to use now. The system arrives next lesson.',
    body:
      'You need to say my father and my mother before you need to know how the whole set works, so take '
      + 'three words and use them. Mon goes with the words that take le, ma goes with the words that take '
      + 'la, and mes goes with anything plural whichever kind of word it is. Mon père, ma mère, mes '
      + 'parents. That is enough to introduce your own family and it is all this lesson asks of you. There '
      + 'is more to it, and the next lesson is where it arrives: the full set covers your, his, hers, ours '
      + 'and theirs, and there is one wrinkle in the ma column that nobody can guess and that is not worth '
      + 'meeting today. If you find yourself wanting to say whose something is and mon, ma and mes will not '
      + 'reach, use de and a name instead. That always works and you already have it.',
    examples: [
      { itemId: 'fr.a1.famille.248', note: 'Père takes le, so it takes mon.' },
      { itemId: 'fr.a1.famille.250', note: 'Plural, so mes, and the kind of word stops mattering.' },
    ],
  },

  doubleDuty: {
    term: 'two words, two meanings each',
    title: 'La femme is woman and wife. La fille is girl and daughter.',
    body:
      'Two of the most common words here mean two things, and French does not separate them. La femme is '
      + 'the word for woman and also the word for wife. La fille is the word for girl and also the word for '
      + 'daughter. Nothing in the spelling or the sound tells them apart, and the person listening picks '
      + 'one without noticing they chose. That matters more than it sounds, because the wrong reading '
      + 'usually still makes sense, so nobody corrects it and you never find out. What decides is the '
      + 'company the word keeps. Une femme is a woman, because une says one of many. La femme, standing on '
      + 'its own in a conversation about people you both know, is a wife. La fille de Paul is his daughter, '
      + 'because de and a name make it a relationship. Une fille is a girl. If you want to be certain, add '
      + 'the thing that fixes it rather than hoping the context will.',
    examples: [
      { itemId: 'fr.a1.famille.018', note: 'On its own with la, this is a wife far more often than a woman.' },
      { itemId: 'fr.a1.famille.252', note: 'De and a name settle it: this is his daughter, not a girl.' },
    ],
  },

  fossilised: {
    term: 'grand-mère, stuck that way',
    title: 'Grand-mère never takes an e. The form stopped moving centuries ago.',
    body:
      'Grand-mère is written grand-mère whoever she is, and the e you would expect on the first half is '
      + 'not a spelling anyone uses. This looks like a '
      + 'mistake and it is not: the two halves were welded together a very long time ago, before the '
      + 'language settled into its current habits, and the pair has been carried forward as a single frozen '
      + 'item ever since. The same is true of grand-père and of les grands-parents, where the s lands on '
      + 'grands and nowhere else. Treat all three as single words you have learned whole, the way you learned '
      + 'aujourd\'hui, rather than as two words you assemble. There is nothing to work out and nothing to '
      + 'apply elsewhere. Learn the spelling with the word and you will never have to think about it again.',
    examples: [
      { itemId: 'fr.a1.famille.021', note: 'One frozen word, and the first half never moves.' },
      { itemId: 'fr.a1.famille.023', note: 'The s lands on grands and nowhere else.' },
    ],
  },
};
