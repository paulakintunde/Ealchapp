// a1.04.l1 "Les articles définis" — the lesson glossary and its reframe.
//
// Split out for the same reason nombres-terms.ts is: a term is defined ONCE and
// surfaced at every point of use via a section's `terms` chips, so a learner
// meets the same explanation wherever the idea turns up and no card carries the
// definition inline.
//
// ── What an A1 term is here ────────────────────────────────────────────────
//
// a1.01's terms define SOCIAL facts. a1.02's are closer to sons, because the
// hard part of counting is a sound problem. This lesson's are neither: they are
// facts about what an English speaker's own language has trained them to leave
// out, which is why five of the six are stated as a contrast with English
// rather than as a rule about French.
//
// The words `liaison` and `élision` appear nowhere in this file or in the
// lesson. a1.04 declares a prerequisite on a1.03, not on the sons track, so a
// learner arriving here may never have opened it. sons.07 and sons.10 teach
// those two properly and at length; naming them here would buy a label the
// learner cannot cash, and a1.02 already set the precedent of teaching the
// behaviour plainly instead. a1-04-articles.test.ts pins that.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in nine.
 *
 *  Why this one. The obvious candidate is a rule about form: "le for masculine,
 *  la for feminine, l' before a vowel, les for plural". That is four cells, it
 *  is learnable in five minutes, it is one hundred percent of what a1.04
 *  shipped, and a learner who has it still writes « J'aime café » on their
 *  first day and every day after.
 *
 *  The error is invisible to them, and that is the whole problem. In English
 *  the bare noun IS the general case: "I like coffee", "cats are independent",
 *  "French is difficult". Nothing in their language marks the place where
 *  French requires a word, so there is no gap for them to notice. It is not a
 *  small mistake either. « J'aime café » is not a sentence.
 *
 *  So the reframe names the moment rather than the rule: it fires at the point
 *  where English offers nothing and French demands something. It is a decision
 *  made before the mouth opens, it is true of every section of this lesson, and
 *  it is testable tomorrow in any sentence the learner writes.
 *
 *  `le` in it is the citation form, standing for whichever of the four the noun
 *  actually takes, and the lesson says so out loud on the card that introduces
 *  the other three rather than leaving the shorthand to be discovered. */
export const REFRAME = 'When English says nothing, French says le.';

export const ARTICLES_TERMS: Record<string, LessonTerm> = {
  zero: {
    term: 'the word English drops',
    title: 'Why the mistake is invisible from the inside',
    body:
      'English has three ways to introduce a noun and French has two. Where English says "the coffee" French says le café, and both languages agree. Where English says "a coffee" French says un café, and they agree again. But where English says plain "coffee", meaning coffee in general, French has no matching form: it still says le café. That third English option is the one with no French equivalent, and because it is the option an English speaker reaches for without thinking, the gap never announces itself. Nothing feels missing. The sentence simply is not French.',
    examples: [
      { itemId: 'fr.a1.dictee.215', note: 'We like French. Four words in English, four in French, and one of them has no English counterpart at all.' },
      { itemId: 'fr.a1.animaux.093', note: 'Cats in general. English marks the general case by removing a word; French marks it by keeping one.' },
    ],
  },
  pick: {
    term: 'the three questions',
    title: 'The order that saves you the gender',
    body:
      'There are four forms and three questions, asked in this order. Is the noun plural? Then it is les, and the gender does not enter into it. Does it start with a vowel sound? Then it is l apostrophe, and again the gender does not enter into it. Only when both answers are no does the third question arrive, and only then do you need to know whether the noun is masculine or feminine. Most courses present this as a two by two grid, which puts gender first and makes it look like the thing every choice depends on. In practice two of the three branches never reach it.',
    examples: [
      { itemId: 'fr.a1.famille.014', note: 'Plural, so the first question already answered it.' },
      { itemId: 'fr.a1.ecole.013', note: 'A vowel sound, so the second one did.' },
      { itemId: 'fr.a1.maison.001', note: 'Neither, so this is the one where the gender is finally needed.' },
    ],
  },
  plural: {
    term: 'les',
    title: 'The form that ignores the question a1.03 taught you to ask',
    body:
      'Les is the plural for everything. Masculine, feminine, mixed, it makes no difference, and this is the one place in the language where the gender you worked to store is simply not consulted. It is also the form you will have met least: this app teaches nouns in the singular almost everywhere, so les gets a fraction of the exposure le does, and a learner can finish several lessons having barely seen it. Worth knowing too that the S on the end of the noun is usually silent, so les is the only part of the phrase a listener hears carrying the plural.',
    examples: [
      { itemId: 'fr.a1.maison.011', note: 'Feminine, and it takes les like everything else.' },
      { itemId: 'fr.a1.ecole.044', note: 'Masculine, and it takes exactly the same word.' },
    ],
  },
  vowelSound: {
    term: 'a vowel sound',
    title: 'Not a vowel letter, which is where the shipped rule was wrong',
    body:
      'Le and la both shorten to l apostrophe in front of a noun that STARTS ON A VOWEL SOUND. The distinction between sound and letter looks pedantic and costs a learner a whole category of nouns, because the letter h is written and never pronounced, so whether it counts depends on the word and not on the spelling. l heure and le hibou are both spelled with an h and only one of them shortens. a1.03 taught you that l apostrophe conceals the gender and that you should convert it to un or une before storing it. This lesson is the other half: how to know it was coming.',
    examples: [
      { itemId: 'fr.a1.cuisine.010', note: 'A vowel letter and a vowel sound, so it shortens.' },
      { itemId: 'fr.sons.elision.016', note: 'An h on the page, a vowel sound in the mouth, so it shortens too.' },
      { itemId: 'fr.a1.animaux.044', note: 'The same letter, and it does not shorten. Nothing on the page says why.' },
    ],
  },
  hSplit: {
    term: 'the two kinds of h',
    title: 'A closed list to recognise, not a rule to work out',
    body:
      'Every French h is silent. What splits them is whether the word behaves as though it begins with a vowel or as though it begins with a consonant, and there is no rule that predicts which: the two groups are a leftover of where the words came from. So this is learned as two lists rather than derived, and the good news is that the article is the only place the difference is ever visible. A learner who has stored le hibou has stored the whole fact, and one who stored hibou on its own has stored nothing they can use.',
    examples: [
      { itemId: 'fr.sons.elision.015', note: 'Behaves like a vowel.' },
      { itemId: 'fr.a1.corps.059', note: 'Behaves like a consonant, and keeps la in full.' },
      { itemId: 'fr.a1.cuisine.095', note: 'Plural and consonant-behaving, and les is unbothered by either.' },
    ],
  },
  storeIt: {
    term: 'the noun and its article',
    title: 'The habit a1.03 started, and what this lesson adds to it',
    body:
      'a1.03 asked you to store every noun with un or une in front of it, because the gender is not recoverable from the word. Keep doing that. What this lesson adds is that the definite article is where the storage gets tested: it is the form you reach for most, it is the one the h words only reveal themselves in, and it is the one English will keep tempting you to leave out. Nearly every noun in this app already carries an article in its own entry, so a card showing you the bare word has quietly taught you to store it bare.',
    examples: [
      { itemId: 'fr.a1.objets.004', note: 'Stored the way you will need it.' },
      { itemId: 'fr.sons.voyelles.008', note: 'And its opposite number, whose gender is just as arbitrary.' },
    ],
  },
};
