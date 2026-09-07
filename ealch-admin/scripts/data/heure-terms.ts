// a1.12.l1 "L'heure" , the lesson glossary and its reframe.
//
// Split out for the same reason jours-terms.ts and avoir-terms.ts are: a term is
// defined ONCE and surfaced at every point of use via a section's `terms` chips,
// so a learner meets the same explanation wherever the idea turns up and no card
// carries the definition inline. The renderer shows three chips and collapses
// the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.01's terms define social facts. a1.08's are facts about how often. These
// are facts about HOW A TIME IS BUILT, which is the only question this lesson
// asks that a number does not answer by itself. The learner arrives from a1.27
// owning every number to a hundred, so nothing here teaches a number: it
// teaches the frame the number is dropped into, and the four ways that frame
// differs from the English one.
//
// The words « complément circonstanciel », « adverbe » and « registre » appear
// nowhere below or in the lesson. `grammarIntroduced` is addressed to the
// curriculum and is better for using the precise words. The test pins it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight, which sits inside the band
 *  a1.01 (eight) and a1.08 (seven) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The unit's canDo has two clauses and the lesson is named after the smaller
 *  one:
 *
 *      "Can ask and tell the time"        il est huit heures
 *      "and make a simple appointment"    à huit heures
 *
 *  Those are two different sentences with two different opening words, and the
 *  error that welds them together is « il est à huit heures », which is what a
 *  learner produces when they have met both frames and been told they are one
 *  topic. Seven words split the canDo down its own seam, and a learner who has
 *  them can answer "what time is it" and arrange to meet someone, which is the
 *  entire unit.
 *
 *  It is a DECISION rather than a rule, which is what the A1 doctrine asks of a
 *  reframe: before opening their mouth the learner picks which of the two jobs
 *  they are doing, and the opening word follows from that. It is also
 *  verifiable tomorrow, which a rule about agreement is not.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "The hour comes first, always" was the runner-up and it is the better
 *  MECHANICAL line: it is true of every form in the lesson (« huit heures et
 *  quart », « huit heures moins le quart », « vingt heures trente ») and it
 *  names the real inversion, since English builds a time minute-first and
 *  French builds it hour-first. It lost because it is a fact about word order
 *  rather than a decision the learner makes, and because it says nothing about
 *  the half of the canDo that is booking. It is a term instead. See `hourFirst`.
 *
 *  "Heures never disappears" is the highest-FREQUENCY error in the lesson and
 *  it is a term for the same reason: it tells the learner not to delete
 *  something, so it hands them nothing to build with. See `heuresStays`.
 *
 *  Note that the brief proposed this reframe on the strength of a corpus split
 *  it measured at 37 to 1 against the telling half. Re-measured against
 *  Postgres that split is 181 to 83, so the evidence for it is much weaker than
 *  the brief thought. It is kept anyway, because the argument that survives is
 *  the one about the canDo and the welding error, not the one about counts. See
 *  the header of heure-corpus.ts. */
export const REFRAME = 'Il est says the time. À books it.';

export const HEURE_TERMS: Record<string, LessonTerm> = {
  heuresStays: {
    term: 'heures, which never goes',
    title: 'The word English throws away',
    body:
      'English says "it is eight" and drops the noun. French cannot: il est huit heures, with the word for hours still in it. There is no shorter version of this sentence, and il est huit is not a sentence at all. The trap is that nothing corrects it, because a learner who leaves it off simply stops early and the listener hears an unfinished line rather than a wrong one. Two smaller rules ride on the same word: une heure is singular because it is one, and everything from two upward is plural.',
    examples: [
      { itemId: 'fr.a1.heure-et-date.060', note: 'One, so the noun is singular. It is the only hour that is.' },
      { itemId: 'fr.a1.heure-et-date.012', note: 'Seven, so heures is plural, and it is still there.' },
    ],
  },
  hourFirst: {
    term: 'the hour, then the rest',
    title: 'French builds a time hour-first',
    body:
      'English puts the minutes in front: quarter past eight, ten to five. French puts the hour first and hangs everything else off the back of it: huit heures et quart, cinq heures moins dix. Read a French time left to right and you always meet the hour before you find out what is being done to it. This is why a learner translating in order arrives at quart huit heures, and why waiting for the whole phrase before deciding what you heard is the habit worth building.',
    examples: [
      { itemId: 'fr.a1.temps-et-frequence.001', note: 'Eight first, the quarter second. English says it the other way round.' },
      { itemId: 'fr.a1.heure-et-date.064', note: 'Five first, and only then that you are taking ten off it.' },
    ],
  },
  noArticleExcept: {
    term: 'et quart, but moins LE quart',
    title: 'One of the four carries an article',
    body:
      'Et quart, et demie and moins dix take nothing in front of the quarter or the number. Moins le quart takes le, and it is the only one of the four that does. There is no rule behind this and inventing one will cost you later: it is a fixed phrase and it is worth learning as a single piece of sound rather than as three words. A learner who has generalised from et quart writes moins quart, which is the most common written error in this lesson.',
    examples: [
      { itemId: 'fr.a1.temps-et-frequence.058', note: 'The article is there, and it belongs to this phrase alone.' },
      { itemId: 'fr.a1.temps-et-frequence.056', note: 'The same shape one hour earlier, and no article at all.' },
    ],
  },
  twoClocks: {
    term: 'two clocks, never mixed',
    title: 'The conversational one and the printed one',
    body:
      'French runs two systems. The one you speak uses one to twelve and bends them with et quart, et demie and moins le quart. The one you read on a timetable, a cinema listing or a ticket uses thirteen to twenty-four and says the minutes as a plain number: vingt heures trente. They do not mix. Vingt heures et demie is the sentence that marks a beginner in a station, because it has taken half of each. Pick which clock you are on before you start the sentence and finish on the same one.',
    examples: [
      { itemId: 'fr.a1.nombres.057', note: 'The printed clock. Twenty hours, thirty, and no et anywhere.' },
      { itemId: 'fr.a1.heure-et-date.032', note: 'The spoken clock. Eight, and a half hung off the back of it.' },
    ],
  },
  demiAgrees: {
    term: 'demie, or demi',
    title: 'The half agrees with what it follows',
    body:
      'Heure is feminine, so after an hour the half is written demie: huit heures et demie. Midi and minuit are masculine, so after either of them it is demi with no e: midi et demi. Nothing is audible here, which is why it survives in writing for years. The trap is that midi looks like it should take the feminine, because every other time expression in this lesson does, and it does not. The same masculine form turns up outside the clock: six ans et demi.',
    examples: [
      { itemId: 'fr.a1.heure-et-date.032', note: 'After heure, which is feminine, so the e is there.' },
      { itemId: 'fr.a1.heure-et-date.036', note: 'After midi, which is not, so the e is gone.' },
    ],
  },
  frozenQuestion: {
    term: 'Quelle heure est-il ?',
    title: 'A question you memorise rather than build',
    body:
      'This is the ordinary way to ask, and the machinery that makes it work is two units further on than you are. Take it whole, the way you took bonjour: four words, one shape, no parts to assemble. Vous avez l\'heure ? is the second form and that one you can see inside, because it is the verb you met a few lessons back with the hour as its object. One memorised and one transparent is both the accurate position and the useful one, and you need an answer to this on your first day.',
    examples: [
      { itemId: 'fr.a1.heure-et-date.002', note: 'The frozen one. Say it as a single piece.' },
      { itemId: 'fr.a1.heure-et-date.003', note: 'The transparent one, built on a verb you already have.' },
    ],
  },
  nobodyIl: {
    term: 'the il that is nobody',
    title: 'There is no he in il est huit heures',
    body:
      'You learned il as he, and here it points at nothing at all. Nothing in the room is eight o\'clock. French wants a subject in front of a verb even when there is nothing to put there, so it uses il as a placeholder and the sentence means what it would mean with no subject in English. The verb itself is one you already have in full, so this is a small thing to accept rather than a new form to learn: only the subject is strange, and it is strange in exactly one way.',
    examples: [
      { itemId: 'fr.a1.temps-et-frequence.052', note: 'No he, no it, nothing. The il is holding a seat.' },
      { itemId: 'fr.a1.heure-et-date.100', note: 'The same placeholder with the verb you already conjugate.' },
    ],
  },
};
