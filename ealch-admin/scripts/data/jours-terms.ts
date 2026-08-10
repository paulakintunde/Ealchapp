// a1.08.l1 "Les jours de la semaine" , the lesson glossary and its reframe.
//
// Split out for the same reason avoir-terms.ts and etre-terms.ts are: a term is
// defined ONCE and surfaced at every point of use via a section's `terms` chips,
// so a learner meets the same explanation wherever the idea turns up and no card
// carries the definition inline. The renderer shows three chips and collapses
// the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.01's terms define social facts. a1.07's are facts about which verb a
// sentence wants. These are facts about HOW OFTEN, which is the only question
// this lesson asks that a day name does not answer by itself, plus the two
// written habits an English speaker brings and keeps.
//
// The words « article défini », « adverbe de fréquence » and « complément
// circonstanciel de temps » appear nowhere below or in the lesson. a1.04 taught
// `le` in front of a general noun without once naming an article class, and this
// lesson is a1.04's rule applied to a day. A learner arriving here has no such
// label to cash. `grammarIntroduced` is addressed to the curriculum and is
// better for using the precise words. The test pins it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in seven, which sits inside the band
 *  a1.01 (eight) and the sons lessons (five to seven) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The unit's canDo has two clauses and they are not equal. "Can name the days"
 *  is seven words with no pattern behind them and no reframe would help; a
 *  learner either knows them or does not, and an afternoon fixes it. "Say what
 *  they do on a given day" is where the lesson is, and the whole of it is one
 *  article.
 *
 *      le lundi     every Monday, as a rule
 *      lundi        one Monday, the one being talked about
 *
 *  Four words cover that, they are mechanically applicable to all seven days,
 *  and a learner can act on them in the next message they send. The line also
 *  says WHY rather than forbidding: `le` is doing a job, and the job is turning
 *  one day into all of them.
 *
 *  It is verifiable the way an A1 reframe has to be. A learner who has it writes
 *  « je suis libre le samedi » and means their weekends; a learner without it
 *  writes « je suis libre samedi » and has accepted an invitation they did not
 *  mean to accept.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "Days are lowercase" is true, memorable and covers about a tenth of the
 *  lesson. It is a spelling habit rather than a meaning, nothing depends on it
 *  in speech, and a reframe that only matters in writing cannot be the spine of
 *  a lesson whose canDo is spoken. It is a term instead. See `lowercase`.
 *
 *  "No preposition" was the runner-up and it is a rule about what NOT to do, so
 *  it tells a learner to delete something rather than giving them anything to
 *  build with. It also collides with the article rule in the one place they meet
 *  (« le lundi » has a word in front of the day, just not the one English wants),
 *  which is exactly where a four-word line has to be unambiguous. It is a term.
 *
 *  "The article makes it plural" is FALSE and was rejected for being false. The
 *  French form is singular: `le lundi`, not `les lundis`. Saying it makes it
 *  plural would hand the learner the exact error the lesson exists to stop. */
export const REFRAME = 'Le makes it every week.';

export const JOURS_TERMS: Record<string, LessonTerm> = {
  everyWeek: {
    term: 'le, in front of a day',
    title: 'The article that means every week',
    body:
      'Put le in front of a day and you have stopped talking about one day and started talking about all of them. Le lundi is every Monday, as a rule, the way your week is arranged. This is the same le you met in front of a general noun a few lessons ago: j\'aime le café is coffee in general rather than one cup, and le lundi is Mondays in general rather than one Monday. It is one idea you already have, pointed at a day.',
    examples: [
      { itemId: 'fr.a1.jours-et-mois.232', note: "Every Monday. It is what your timetable says." },
      { itemId: 'fr.a1.jours-et-mois.242', note: 'Every Saturday. A fact about your week, not a plan.' },
    ],
  },
  oneDay: {
    term: 'a day on its own',
    title: 'The bare day, which is one day',
    body:
      'A day with nothing in front of it is one particular day, and which one is decided by the conversation you are already in. Said on a Wednesday, samedi is this coming Saturday. Said about the past, it is the one just gone. Nothing marks it and nothing needs to, because there is only ever one Saturday close enough to mean. Prochain and dernier are there when you want to be certain: samedi prochain, samedi dernier.',
    examples: [
      { itemId: 'fr.a1.jours-et-mois.243', note: 'This Saturday. An answer to an invitation.' },
      { itemId: 'fr.a1.jours-et-mois.034', note: 'Prochain, when being certain is worth two extra syllables.' },
    ],
  },
  noPreposition: {
    term: 'no word for on',
    title: 'French does not need on',
    body:
      'English needs a preposition in front of a day and French does not. On Monday is lundi, and there is nothing in front of it. Neither sur lundi nor a bare à lundi is a way of saying when something happens: sur means physically on top of, and à lundi is a way of saying goodbye until Monday. The urge to put a small word there is strong and it is the one error in this lesson that produces something a listener cannot repair, because the sentence stops making sense rather than shifting meaning.',
    examples: [
      { itemId: 'fr.a1.jours-et-mois.233', note: 'On Monday, and nothing in front of it.' },
      { itemId: 'fr.a1.jours-et-mois.038', note: 'Two bare days in one sentence, neither with a preposition.' },
    ],
  },
  lowercase: {
    term: 'lundi, not Lundi',
    title: 'Days are lowercase in French',
    body:
      'English capitalises the days and French does not. A day name is an ordinary noun here and takes a capital only where any word would: at the start of a sentence. This is inaudible, which is why it survives for years in the writing of people who speak well. It is worth fixing now rather than later, because every message you send is written and the habit is easier to break in the first week than in the fifth year.',
    examples: [
      { itemId: 'fr.a1.jours-et-mois.001', note: 'A capital, and only because it opens the sentence.' },
      { itemId: 'fr.a1.jours-et-mois.022', note: 'Two days mid-sentence, and both are lowercase.' },
    ],
  },
  weekStartsMonday: {
    term: 'the week starts on Monday',
    title: 'What a French calendar looks like',
    body:
      'A printed French calendar starts its week on Monday and ends it on Sunday, so the two days at the right-hand edge are the weekend. Lundi is le premier jour de la semaine and nobody says so out loud because nobody needs to. It matters the first time you read a timetable, a shop notice or a diary and count the columns from the wrong end, and it is why le week-end sits where it does rather than wrapping around.',
    examples: [
      { itemId: 'fr.sons.jours-et-mois.035', note: 'Next week, which starts on a Monday and not on a Sunday.' },
      { itemId: 'fr.sons.jours-et-mois.040', note: 'Every day, which is the whole row rather than one column of it.' },
    ],
  },
};
