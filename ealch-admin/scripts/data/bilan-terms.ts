// a1.30.l1 "A1 Review", the lesson glossary and its reframe.
//
// A capstone's terms have a different job from an ordinary lesson's. They do not
// define new ideas, because there are almost none. They name the MOVES a learner
// makes when two lessons have to be used at once, which is the only thing here
// nobody has been taught.
//
// The renderer shows three chips and collapses the rest, so no section names
// more than three.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  ── The first candidate was measured and killed ──────────────────────────
 *
 *  The brief opened with "An exchange is a turn you take and a turn you give
 *  back", on the assumption that A1 teaches sentences and never sustained
 *  turns. Measured 2026-08-08, that is FALSE: all 29 lessons carry a role play,
 *  the band runs 144 turns, and every single one of those turns offers
 *  alternate answers. Turn-taking is not the gap and a reframe built on it
 *  would be teaching something a learner has done twenty-nine times.
 *
 *  ── The same measurement found the real one ──────────────────────────────
 *
 *  Every one of those 29 scenarios is confined to its own lesson's topic. The
 *  food role play is about food. The routine role play is about a day. NOT ONE
 *  TURN IN THE BAND REQUIRES TWO UNITS AT ONCE, and "hold a short everyday
 *  exchange" is exactly the thing that does.
 *
 *      One turn, more than one lesson.
 *
 *  It is a description of what the learner is about to do rather than a rule
 *  about French, which is unusual for a reframe and correct here: a capstone
 *  has no rule of its own to state. It is checkable in the next sentence they
 *  say, and every section of this lesson is built to make it true.
 *
 *  ── Rejected ─────────────────────────────────────────────────────────────
 *
 *  "You already know all of this" is true, deflating, and gives the learner
 *  nothing to do. It is the roundup's line, not the spine.
 *
 *  "When you get lost, say so" is the repair kit stated as a slogan. It is the
 *  best thing in the lesson and it is only ONE act of six, so carrying it
 *  verbatim through the others would be false. It is the term `repairKit`. */
export const REFRAME = 'One turn, more than one lesson.';

export const BILAN_TERMS: Record<string, LessonTerm> = {
  oneTurn: {
    term: 'one turn, more than one lesson',
    title: 'Nothing you say next comes from a single place',
    body:
      'Every lesson so far handed you one thing and then asked you to use it on its own. Somebody asking '
      + 'where you live wants a place and a preposition and probably a number, and those came from three '
      + 'different mornings. That is the only thing this half hour asks of you and it is the only thing the '
      + 'twenty-nine lessons behind it never did. You are not learning anything new here. You are learning '
      + 'to reach for two things at the same time, which is a different skill and it is the one that decides '
      + 'whether a conversation keeps going.',
    examples: [
      { itemId: 'fr.a1.cafe.088', note: 'A verb, an article and a colour, from three separate lessons, in six words.' },
      { itemId: 'fr.a1.cafe.090', note: 'A place, a time of day and a plural verb, in one ordinary sentence.' },
    ],
  },
  repairKit: {
    term: 'what to say when you are lost',
    title: 'The five words that keep a conversation alive',
    body:
      'You have been taught to say things and never once been taught what to do when you have not '
      + 'understood what was said back. That is the moment every real conversation actually breaks, and it '
      + 'has nothing to do with how much vocabulary you have. Excusez-moi. Je ne comprends pas. Vous pouvez '
      + 'répéter ? Plus lentement. Un instant. Five short moves, none of them difficult, and between them '
      + 'they turn a conversation you lost into a conversation that carries on. A learner with a thousand '
      + 'words and none of these loses the first exchange where somebody speaks quickly.',
    examples: [
      { itemId: 'fr.a1.expressions-frequentes.123', note: 'The one the corpus could not supply, and the most useful thing here.' },
      { itemId: 'fr.a1.expressions-frequentes.079', note: 'Both halves together: get their attention, then say what is wrong.' },
    ],
  },
  buyTime: {
    term: 'buying yourself a second',
    title: 'You are allowed to think',
    body:
      'A pause while you assemble a sentence feels much longer to you than it does to the person waiting, '
      + 'and the instinct is to fill it with English or to give up. There is a French move for it and it is '
      + 'one word: un instant. Peut-être does similar work when you are not sure of the answer rather than '
      + 'not sure of the words. Neither of these is a stalling tactic you should feel bad about. They are '
      + 'what people who speak the language do, and using them is what keeps you inside the conversation '
      + 'instead of outside it.',
    examples: [
      { itemId: 'fr.sons.expressions-utiles.044', note: 'One word, and the conversation waits for you.' },
      { itemId: 'fr.a1.expressions-frequentes.118', note: 'For when it is the answer you are unsure of rather than the words.' },
    ],
  },
  keepThemGoing: {
    term: 'keeping them talking',
    title: 'Short words that mean carry on',
    body:
      'A conversation is not only your turns. The other person needs to know you are still with them, and '
      + 'French does that with very short words dropped into the gaps: d\'accord, bien sûr, voilà. They cost '
      + 'nothing, they are almost impossible to get wrong, and leaving them out is what makes a learner '
      + 'sound like they are being interviewed rather than talking. If you only take three things from this '
      + 'lesson, these are cheaper than any of the vocabulary and they do more work.',
    examples: [
      { itemId: 'fr.a1.expressions-frequentes.106', note: 'The most useful of the three, and the one you will say most.' },
      { itemId: 'fr.a1.expressions-frequentes.122', note: 'For when something has just landed or been handed over.' },
    ],
  },
  youAlreadyHave: {
    term: 'you already have this',
    title: 'Twenty-nine lessons, and nothing new in the review half',
    body:
      'Every word in the first five acts of this lesson has been taught to you already, by a lesson you '
      + 'have finished, and you have rated most of them on a flashcard. That is deliberate. If something '
      + 'here looks unfamiliar it is worth going back to the unit that owns it rather than treating this as '
      + 'the place to learn it. What is genuinely new in this half hour is small and it is all in one act: '
      + 'the handful of things to say when you have lost the thread.',
    examples: [
      { itemId: 'fr.a1.routines.103', note: 'Taught by the noun gender lesson, and it turns up in nine other units.' },
      { itemId: 'fr.a1.cafe.151', note: 'The same noun with a third article, from a third lesson.' },
    ],
  },
};
