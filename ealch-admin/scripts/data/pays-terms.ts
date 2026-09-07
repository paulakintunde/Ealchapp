// a1.22.l1 "Pays & nationalités", the lesson glossary and its reframe.
//
// Split out for the same reason couleurs-terms.ts and possessifs-terms.ts are: a
// term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline. The renderer shows three chips
// and collapses the rest, so no section here names more than three.
//
// ── No grammar jargon, and one word that looks like an exception ───────────
//
// « préposition », « masculin », « féminin », « accord », « adjectif » and
// « nom propre » appear nowhere below or anywhere on a learner surface. a1.03
// taught noun gender as "the un kind and the une kind", a1.04 taught le/la/les
// as "the little word in front", and this lesson keeps both. What it adds is
// "the la kind" and "the le kind", because a country carries a DEFINITE article
// rather than an indefinite one and « un France » is not a thing anybody says.
//
// `grammarIntroduced` is addressed to the curriculum and uses the precise words.
// The test pins the split.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in seven, which sits inside the band
 *  a1.01 (eight), a1.09 (eight), a1.13 (eight) and a1.17 (eight) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The brief proposes it and the brief is right, which is worth saying plainly
 *  rather than reaching for something novel.
 *
 *      Learn the country with its article. Everything else follows.
 *
 *  It is a HABIT the learner adopts in the moment of learning a word rather than
 *  a rule they apply afterwards, which is the only place this decision can
 *  actually be made: by the time you are mid-sentence and reaching for `en` or
 *  `au`, the fact you needed was stored or it was not.
 *
 *  It makes BOTH prepositional systems fall out of one fact. A learner who
 *  stored `la France` rather than `France` never has to think about en against
 *  au, and never has to think about de against du either. Two systems, one
 *  storage decision, taken weeks earlier.
 *
 *  It is verifiable in the next sentence they say, and it is why a1.03 is
 *  load-bearing here: a1.03's own reframe is "learn the article, not the noun"
 *  and this is that habit applied to a new noun class. Naming the earlier lesson
 *  costs one card and saves a learner concluding the two disagree.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "En for feminine, au for masculine" is the rule stated as grammar and is
 *  exactly what the learner cannot apply, because the gender is the part they do
 *  not have. It also states half the lesson: it says nothing about de and du,
 *  which are the same decision made twice.
 *
 *  "Countries have gender" is a fact rather than a choice. A learner can agree
 *  with it completely and still not know what to say next.
 *
 *  "Nationalities agree" is a1.13's lesson applied and a1.06's rule retested. It
 *  belongs in an act, which is where it is. Making it the headline would spend
 *  the lesson's one repeated line on the part the learner already has.
 *
 *  "Ask the article before the preposition" was the runner-up and it is the
 *  better DESCRIPTION of the two. It was rejected for describing the check
 *  rather than the habit: it tells the learner what to do at the moment it is
 *  already too late, because the article is only available if they stored it.
 *  It survives as the title of act 3. */
export const REFRAME = 'Learn the country with its article. Everything else follows.';

export const PAYS_TERMS: Record<string, LessonTerm> = {
  articleTravels: {
    term: 'the article travels with the word',
    title: 'Store la France, never France',
    body:
      'A country in French is almost never said bare. It is la France, le Canada, les États-Unis, and the '
      + 'little word in front is not decoration: it is the one fact that decides everything else you will '
      + 'ever do with that country. If you learn the word without it you have stored half of it, and the '
      + 'missing half is the half you need. This is the same habit the noun gender lesson asked for, arriving '
      + 'on a set of words where the payoff is immediate rather than eventual: two whole systems fall out of '
      + 'it, and neither of them can be worked out from the word itself.',
    examples: [
      { itemId: 'fr.a1.pays-et-nationalites.254', note: 'la France with its article, in a sentence nobody wrote to teach this.' },
      { itemId: 'fr.a1.pays-et-nationalites.255', note: 'le Canada doing the same, and the article is the only difference between them.' },
    ],
  },
  goingAndComing: {
    term: 'one decision, two systems',
    title: 'The same fact answers both questions',
    body:
      'Going to a country and coming from one look like two things to learn and are one. The la kind takes '
      + 'en and de; the le kind takes au and du; the les kind takes aux and des. Three rows, six words, and '
      + 'the row is chosen by the article you already stored. Nothing about the country itself is consulted '
      + 'twice: you look once, when you learn the word, and both columns are settled from then on. A learner '
      + 'who knows the article gets four words for free, and a learner who does not is guessing on every '
      + 'sentence in both directions.',
    examples: [
      { itemId: 'fr.a1.pays-et-nationalites.310', note: 'en, because France is the la kind.' },
      { itemId: 'fr.a1.presentation-personnelle.029', note: 'de, from the same fact, in the other direction.' },
    ],
  },
  vowelRepair: {
    term: 'en in front of a vowel',
    title: 'Why it is en Iran and not au Iran',
    body:
      'Au Iran would put two vowel sounds hard against each other, and French will not do it. You have '
      + 'watched the language dodge this collision five times already: l\'amie instead of la amie, mon amie '
      + 'instead of ma amie, n\'ai instead of ne ai, est-ce qu\'il instead of est-ce que il, and combien d\'ans '
      + 'instead of combien de ans. This is the sixth, and the repair is the simplest of them: the le kind '
      + 'borrows en for the going-to column and nothing else changes. Coming from, the exception is over: '
      + 'd\'Iran is the ordinary de of a le country, cut short in front of the vowel like every other de.',
    examples: [
      { itemId: 'fr.a1.pays-et-nationalites.313', note: 'A le country taking en, purely to keep two vowels apart.' },
      { itemId: 'fr.a1.pays-et-nationalites.314', note: 'And coming the other way, where the exception does not reach.' },
    ],
  },
  theEndingIsAHint: {
    term: 'the e on the end is a hint',
    title: 'Most la countries end in e, and some le ones do too',
    body:
      'France, Belgique, Espagne, Italie, Allemagne, Chine: the la countries almost all end in an e, which '
      + 'is the same hint the noun gender lesson measured across the whole corpus and found right about '
      + 'seven times in ten. On countries it is better than that and still not a rule. Le Mexique ends in an '
      + 'e and takes le, and so do le Cambodge and le Zimbabwe. Treat the ending as a way of guessing when '
      + 'you have to guess, and never as a way of avoiding storing the article. The countries you will '
      + 'actually use are a short list and you will meet each of them many times.',
    examples: [
      { itemId: 'fr.a1.pays-et-nationalites.315', note: 'Mexique ends in an e and takes au, which is what a hint failing looks like.' },
      { itemId: 'fr.a1.pays-et-nationalites.216', note: 'And du in the other column, from the same article.' },
    ],
  },
  nationalityIsAWord: {
    term: 'the nationality is a different word',
    title: 'A country and a nationality are two things',
    body:
      'La France is a place and français is what you are. They are separate words, they are stored '
      + 'separately, and the small one behaves like the colours lesson said an adjective behaves: it grows an '
      + 'e for a woman, and sometimes that e wakes up a letter that was silent. Français becomes française '
      + 'and you can hear the s arrive; canadien becomes canadienne and the nasal collapses into a plain '
      + 'vowel with a real n after it. Neither of those is new. What is new is the capital letter, which '
      + 'belongs to the person and not to the description.',
    examples: [
      { itemId: 'fr.a1.pays-et-nationalites.199', note: 'The e on the end, and the s waking up behind it.' },
      { itemId: 'fr.a1.pays-et-nationalites.317', note: 'The other shape: the nasal collapses and a real n appears.' },
    ],
  },
};
