// a1.19.l1 "Questions oui / non", the lesson glossary and its reframe.
//
// Split out for the same reason couleurs-terms.ts, mois-terms.ts and
// possessifs-terms.ts are: a term is defined ONCE and surfaced at every point of
// use through a section's `terms` chips, so a learner meets the same explanation
// wherever the idea turns up and no card carries the definition inline. The
// renderer shows three chips and collapses the rest, so no section here names
// more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.17's terms are facts about WHAT YOU ASK. These are facts about WHO YOU ARE
// TALKING TO. Every one of them is a judgement the learner makes about the
// person in front of them rather than about the sentence, which is the thing
// this lesson's canDo names and the thing a table of three forms cannot teach.
//
// The words « interrogation », « inversion », « intonation montante »,
// « registre », « sujet », « verbe » and « proposition » appear nowhere below or
// anywhere on a learner surface. a1.03 taught noun gender without once naming a
// grammatical class and a1.04 taught le/la/les as "the little word in front", so
// a learner arriving here has no such label to cash. `grammarIntroduced` is
// addressed to the curriculum and is better for using the precise words. The
// test pins it.
//
// ── The one term that is really a warning to the author ────────────────────
//
// `theOtherSi` exists because `si` is a TRIPLE HOMOGRAPH: yes-to-a-negative,
// "if", and "so" as in si grand. For the LEARNER it is one card and a small
// relief. For anyone working on this corpus it is a standing hazard, and it
// caught the brief: A1-19-YESNO-QUESTIONS-PROMPT.md says all three published
// `si` headwords are "the other senses", and fr.sons.argot-de-base.037 is
// glossed "yes (contradicting a negative)" in the database. A bare search for
// `si` also returns `aussi`, `ainsi` and `réussis`, which is why every count in
// questions-corpus.ts is taken with an accent-aware boundary check.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in seven of them, which sits inside
 *  the band a1.01 (eight), a1.09 (eight), a1.13 (eight) and a1.17 (eight) set.
 *  The batch's own count is higher than seven because `strings()` also walks the
 *  `reframe` field itself and the quiz `why` lines that quote it; the constant it
 *  asserts against is that total, not the section count.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The brief proposes it and the brief is right, which is worth saying plainly
 *  rather than reaching for something novel.
 *
 *      Est-ce que always works. The other two are choices.
 *
 *  It is a DECISION the learner makes in the moment of speaking rather than a
 *  fact they store. It gives them a SAFE DEFAULT PLUS TWO DELIBERATE UPGRADES
 *  rather than three equal options, so a learner under pressure always has
 *  something correct to reach for and can move up or down the register on
 *  purpose. It is verifiable in the next conversation they have. And it is the
 *  exact answer to the failure the canDo is written against: a learner who
 *  leaves with three forms and no guidance picks at random, and picking
 *  inversion in a café is as marked as picking intonation in a cover letter.
 *
 *  IT IS ALSO TRUE ON THE MEASURED EVIDENCE, which the brief said had never been
 *  taken. Over the 588 genuine yes/no questions in the database, `est-ce que`
 *  is the only one of the three whose share barely moves between casual themes
 *  (7%) and formal ones (4%), while inversion goes 13% to 71% and intonation
 *  goes 79% to 25%. The other two are marked at both ends. Est-ce que is not.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "Three ways to ask a question" is the table of contents rather than the
 *  lesson, and the brief says so. A learner can read it in ten seconds and still
 *  choose wrong every time, because it does not tell them which one to use. That
 *  gap IS this lesson.
 *
 *  "Raise your voice at the end" is one method out of three and the easiest of
 *  them. It would spend the headline on the thing a learner grasps in one
 *  mission and has, in fact, been doing since a1.01 without being told.
 *
 *  "Inversion is formal" is true, it is a term, and as a headline it puts the
 *  weight on the method the learner will use least. It survives as `flipIt`.
 *
 *  "French asks the same question three ways" was the runner-up and it is the
 *  better DESCRIPTION of the two. It was rejected for being about the language
 *  rather than about the learner: it tells them what is happening and not what
 *  to do. It survives as act 1's title, which is where a description belongs. */
export const REFRAME = 'Est-ce que always works. The other two are choices.';

export const QUESTIONS_TERMS: Record<string, LessonTerm> = {
  theSafeDefault: {
    term: 'the one that is never wrong',
    title: 'Est-ce que works everywhere',
    body:
      'Three little words on the front of a sentence and it is a question. Nothing inside moves, nothing '
      + 'swaps places, nothing needs a hyphen. You can say it to a friend, write it to a landlord, or use it '
      + 'in an exam, and it is never the wrong choice in any of them. That is unusual and it is worth '
      + 'leaning on: when you are tired, or thinking about what you actually want to say rather than how to '
      + 'say it, this is the one to reach for. The other two are things you do on purpose when you want to '
      + 'sound a particular way.',
    examples: [
      { itemId: 'fr.a1.questions-du-quotidien.075', note: 'The safe form of the question, and it can be said to anybody.' },
      { itemId: 'fr.a1.questions.367', note: 'The same three words on the front, and the pronoun change cost nothing.' },
    ],
  },
  justTheVoice: {
    term: 'the one you already use',
    title: 'Your voice going up is a question',
    body:
      'Take any statement, let your voice rise on the last syllable, and it is a question. No word changes '
      + 'and no word moves. You have been reading these since your very first lesson without anybody calling '
      + 'it a method: « Vous êtes ici pour la conférence ? » from the être lesson is one, and so is « Tu as '
      + 'froid ? » from avoir. It is the commonest way real French speakers ask a yes-or-no question and it '
      + 'is the most casual. The catch is on the page rather than in the mouth: written down, the only thing '
      + 'separating the question from the statement is the question mark.',
    examples: [
      { itemId: 'fr.a1.questions.368', note: 'A statement. The voice goes down.' },
      { itemId: 'fr.a1.cafe.176', note: 'The same four words with the voice going up, and now it is a question.' },
    ],
  },
  flipIt: {
    term: 'swapping them round',
    title: 'The careful one, and it is a closed list',
    body:
      'Put the verb first, the person second, and a hyphen between them. Es-tu prêt ? As-tu faim ? It sounds '
      + 'careful, and careful is exactly right in a letter, a form or an exam and slightly odd across a '
      + 'kitchen table. Because you can only conjugate two verbs so far, the whole set is twelve short forms '
      + 'and you can learn all of them rather than working them out. Two of the twelve put a t in the middle '
      + 'that means nothing: a-t-il and a-t-elle, where a vowel would otherwise run into a vowel.',
    examples: [
      { itemId: 'fr.a1.questions.352', note: 'The two words swapped, held together by a hyphen that is compulsory.' },
      { itemId: 'fr.a1.questions.359', note: 'The inserted t, which is there for the sound and means nothing at all.' },
    ],
  },
  whoAreYouTalkingTo: {
    term: 'who is in front of you',
    title: 'The choice is about the person, not the sentence',
    body:
      'All three forms ask exactly the same thing and all three are correct French. What separates them is '
      + 'who you are saying it to. A friend across a table gets your voice going up. A stranger, a form, or '
      + 'anything you are being careful about gets the swapped-round one. Everything in between, and '
      + 'everything you are unsure about, gets est-ce que. Getting this wrong does not produce a mistake '
      + 'anybody can point at, which is what makes it hard to notice: the sentence is perfect and the room '
      + 'just goes slightly cooler.',
    examples: [
      { itemId: 'fr.a1.questions.012', note: 'The swapped form, said to one person you know. It reads as careful.' },
      { itemId: 'fr.a1.questions.329', note: 'The same question to somebody you are being polite with, where it fits.' },
    ],
  },
  theSameOldDodge: {
    term: 'two vowels will not meet',
    title: 'Est-ce qu\'il, and the fourth time you have seen this',
    body:
      'Est-ce que loses its e in front of il, elle and on. That is not a new rule to learn, it is the fourth '
      + 'appearance of one you already have. French will not let two vowel sounds run into each other and it '
      + 'has a few ways out. The articles lesson cut the word short: la amie became l\'amie. The possessives '
      + 'lesson swapped the word: ma amie became mon amie. The negation lesson cut it again: ne ai became '
      + 'n\'ai. This one cuts, like the first and third. Same objection, four times, and only three answers '
      + 'between them.',
    examples: [
      { itemId: 'fr.a1.questions.364', note: 'The e of que is gone, and an apostrophe marks where it went.' },
      { itemId: 'fr.a1.questions.310', note: 'The same cut, in a published sentence nobody arranged for this lesson.' },
    ],
  },
  theOtherSi: {
    term: 'the other si',
    title: 'Si is three different words',
    body:
      'When somebody asks you a question with a not in it, and you want to disagree with the not, French '
      + 'does not use oui. It uses si. « Tu n\'es pas prêt ? » gets « Si, je suis prêt. » and that is the only '
      + 'job this si does. The same three letters are also the word for if, which you will meet properly '
      + 'later, and the word for so in front of a description, as in si grand. Nothing connects the three and '
      + 'there is no rule underneath them. It is worth thirty seconds only because you will meet the other '
      + 'two and would otherwise wonder whether you had missed a connection.',
    examples: [
      { itemId: 'fr.a1.questions.372', note: 'A question with a not in it, which is the only place si can answer.' },
      { itemId: 'fr.a1.questions.373', note: 'Not oui. The not in the question is what makes it si.' },
    ],
  },
};
