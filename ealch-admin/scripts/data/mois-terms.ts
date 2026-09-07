// a1.09.l1 "Les mois de l'année", the lesson glossary and its reframe.
//
// Split out for the same reason jours-terms.ts and avoir-terms.ts are: a term is
// defined ONCE and surfaced at every point of use via a section's `terms` chips,
// so a learner meets the same explanation wherever the idea turns up and no card
// carries the definition inline. The renderer shows three chips and collapses
// the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.01's terms define social facts. a1.08's are facts about HOW OFTEN. These
// are facts about HOW PRECISE: whether the thing being named is a month or a
// day inside one, which is the only question this lesson asks that a month name
// does not answer by itself. The other three are the written habits English
// hands over and French does not want.
//
// The words « préposition », « article défini » and « adjectif ordinal » appear
// nowhere below or in the lesson. a1.04 taught `le` in front of a general noun
// without once naming an article class, and a learner arriving here has no such
// label to cash. `grammarIntroduced` is addressed to the curriculum and is
// better for using the precise words. The test pins it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight of them, which sits inside
 *  the band a1.01 (eight) and a1.08 (seven) set. The batch's own count is
 *  higher than eight because `strings()` also walks the `reframe` field itself
 *  and the quiz `why` lines that quote it; the constant it asserts against is
 *  that total, not the section count.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The unit's canDo has two clauses and, unlike a1.08's, both are real. "Can
 *  name the months" is twelve words with no pattern behind them and no reframe
 *  would help. "And give a date" is where the lesson is, and the whole of it is
 *  which small word goes in front:
 *
 *      en janvier          the month, and no day inside it
 *      le douze mars       one day, inside the month
 *
 *  Seven words cover that, they are mechanically applicable to all twelve
 *  months and all thirty-one days, and a learner can act on them in the next
 *  message they send. The line names BOTH halves rather than forbidding one,
 *  which matters here in a way it did not in a1.08: this lesson's two errors
 *  point in opposite directions, and a learner who has only been told not to
 *  say « en douze mars » will start saying « le janvier ».
 *
 *  It is verifiable the way an A1 reframe has to be. A learner who has it says
 *  « mon vol est le douze juin » and gets met at the airport; a learner without
 *  it says « mon vol est en juin » and does not.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "Months are lowercase" is true, memorable, and covers about a tenth of the
 *  lesson. It is a spelling habit rather than a meaning, nothing depends on it
 *  in speech, and a reframe that only matters in writing cannot be the spine of
 *  a lesson whose canDo is spoken. It is a term instead. See `lowercase`. It is
 *  also a1.08's rule already, and repeating a shipped lesson's point as this
 *  one's headline would waste the position.
 *
 *  "The number comes first" was the runner-up and it is the better half of a
 *  true statement: the date frame flips the English order AND adds a compulsory
 *  article, and naming only the flip leaves the article, which is the part that
 *  cannot be guessed. It is a term. See `dateShape`.
 *
 *  "French has no word for on" is FALSE here and was rejected for being false,
 *  which is the interesting one. It is a1.08's rule, correct about days
 *  (« lundi », nothing in front), and a learner who carries it into months
 *  produces « janvier » for « in January ». Months are the place that rule
 *  stops, and the lesson says so out loud rather than letting it be discovered
 *  as a contradiction. */
export const REFRAME = 'En for a month, le for a date.';

export const MOIS_TERMS: Record<string, LessonTerm> = {
  monthFrame: {
    term: 'en, in front of a month',
    title: 'The frame for a whole month',
    body:
      'Put en in front of a month and you have named the month and nothing smaller. En janvier is somewhere in January, en août is somewhere in August, and which day is either not known or not the point. Nothing else goes with it: no article, no number, and no other small word. This is the frame you want for a birthday month, a holiday, a season of work, and anything where the answer to when is a month rather than a day.',
    examples: [
      { itemId: 'fr.a1.jours-et-mois.046', note: 'A birthday month. Nobody needs the day to send a card in the right week.' },
      { itemId: 'fr.a1.jours-et-mois.251', note: 'A flight somewhere in June, which is not enough for anyone to meet you.' },
    ],
  },
  dateFrame: {
    term: 'le, in front of a date',
    title: 'The frame for one day inside a month',
    body:
      'A day inside a month takes le, then the number, then the month: le douze mars. The le is not optional and it is not decoration, because it is the only thing marking this as one day rather than the whole month. Swapping en for le plus a number is the difference between a month you might travel in and a day somebody can meet you on. Out loud it is two extra syllables, which is a small price for the only precise answer there is.',
    examples: [
      { itemId: 'fr.a1.jours-et-mois.252', note: 'One day in June, and now the plan can happen.' },
      { itemId: 'fr.a1.nombres.052', note: 'Today, given as a date. This is how a French speaker says what the date is.' },
    ],
  },
  firstOnly: {
    term: 'le premier',
    title: 'The first is the only one that counts differently',
    body:
      'The first of a month is le premier: le premier janvier, le premier mai, le premier août. Every other day is a plain counting number, the same word you would use for the number itself. Le deux, le trois, le douze, le trente et un. English does the opposite and puts a first, second, third ending on all of them, so the instinct is to reach for one every time. There is exactly one place in the French month where that instinct is right, and it is the first.',
    examples: [
      { itemId: 'fr.a1.nombres.097', note: 'The first, and the only day of the month that gets its own word.' },
      { itemId: 'fr.a1.jours-et-mois.257', note: 'trois, not troisième. The third of October takes a plain counting number.' },
    ],
  },
  dateShape: {
    term: 'the shape of a date',
    title: 'Number first, and nothing between',
    body:
      'English says March twelfth and French says le douze mars, so the number and the month change places. There is also nothing between them: le douze mars, never le douze de mars. That extra small word is the one Spanish and Portuguese speakers bring with them, because both their languages want it, and it is the error most likely to survive here. Three parts, in this order, with no fourth: le, the number, the month.',
    examples: [
      { itemId: 'fr.a1.jours-et-mois.259', note: 'The number in front of the month, and nothing sitting between the two.' },
      { itemId: 'fr.a1.jours-et-mois.129', note: 'A date inside a longer sentence, and the three parts are still in that order.' },
    ],
  },
  lowercase: {
    term: 'janvier, not Janvier',
    title: 'Months are lowercase in French',
    body:
      'English capitalises the months and French does not. A month name is an ordinary word here and takes a capital only where any word would: at the start of a sentence. You met this on the days a lesson ago and it holds for the months with no change. It is inaudible, which is why it survives for years in the writing of people who speak well, and it is worth fixing now because every message you send is written.',
    examples: [
      { itemId: 'fr.a1.jours-et-mois.134', note: 'Inside the name of a national holiday, and mai still takes a small letter.' },
      { itemId: 'fr.a1.jours-et-mois.136', note: 'A famous date, and novembre is lowercase in the middle of it.' },
    ],
  },
};
