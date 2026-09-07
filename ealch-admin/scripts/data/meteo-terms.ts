// a1.10.l1 "Les saisons & la météo", the lesson glossary and its reframe.
//
// Split out for the same reason mois-terms.ts and jours-terms.ts are: a term is
// defined ONCE and surfaced at every point of use through a section's `terms`
// chips, so a learner meets the same explanation wherever the idea turns up and
// no card carries the definition inline. The renderer shows three chips and
// collapses the rest, so no section names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.08's terms are facts about HOW OFTEN and a1.09's about HOW PRECISE. These
// are facts about WHO OR WHAT IS HOT, which is the only question this lesson
// asks that an adjective does not answer by itself. Three of the five are the
// three frames; the fourth is the small word in front of a season; the fifth is
// the subject that refers to nobody, which is the thing a learner arriving from
// a1.05 has been taught to read exactly wrong.
//
// The words « préposition », « verbe impersonnel », « sujet » and « adjectif »
// appear nowhere below or in the lesson. a1.09 taught `en` in front of a month
// without once naming a word class, and a learner arriving here has no such
// label to cash. `grammarIntroduced` is addressed to the curriculum and is
// better for using the precise words. The test pins it.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight of them, which sits inside
 *  the band a1.01 (eight), a1.08 (seven) and a1.09 (eight) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *  The unit's canDo has two clauses and the second one is where the lesson is.
 *  "Can name the seasons" is four words with a memory hook behind them.
 *  "And describe today's weather" is a choice between three sentence frames
 *  that English collapses into a single verb:
 *
 *      il fait chaud        it is hot        the weather
 *      j'ai chaud           I am hot         a person
 *      le café est chaud    the coffee is hot  a thing
 *
 *  One adjective, three frames, and English says "is" for all three. There is
 *  nothing to transfer, so the learner defaults to être every time and produces
 *  « je suis chaud », which is the error that actually embarrasses people.
 *
 *  Six words, mechanically applicable, and they decide every sentence in the
 *  lesson including ones it never shows. A learner who has this line can sort a
 *  sentence they have never met by asking only what the sentence is about.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "The il is nobody" is true, it is the sharpest single observation in the
 *  lesson, and it covers act 1 and nothing else. It says nothing about avoir or
 *  être, so a learner carrying it still says « je suis chaud ». It is a term
 *  instead. See `emptyIl`.
 *
 *  "Three seasons take en and one takes au" is the other real rule here and it
 *  is four words of vocabulary rather than a way of thinking. It is a term. See
 *  `seasonIn`.
 *
 *  "Use il fait for the weather" was the runner-up and it is the better third
 *  of a true statement. Naming only the weather column leaves the two the
 *  learner actually gets wrong, and a rule that covers a third of its own lesson
 *  is a rule the learner discovers the limits of by being misunderstood. */
export const REFRAME = 'Weather makes, people have, things are.';

export const METEO_TERMS: Record<string, LessonTerm> = {
  weatherFrame: {
    term: 'il fait, for the weather',
    title: 'The frame the weather uses',
    body:
      'The weather takes il fait and then the word for what it is like: il fait chaud, il fait froid, il fait beau. Nothing in that sentence is a person or a thing, and nothing agrees with anything. Il fait never changes: there is no other form of it anywhere in this frame, so you can learn these two words as one block and reuse them for every kind of weather there is. English uses is here and French does not, which is why this has to be learned rather than worked out.',
    examples: [
      { itemId: 'fr.a1.meteo.008', note: 'Today, described. This is the sentence the whole lesson is built to get right.' },
      { itemId: 'fr.a1.meteo.004', note: 'The same two words, a different season, and nothing else moved.' },
    ],
  },
  personFrame: {
    term: 'avoir, for a person',
    title: 'A person has hot, they are not hot',
    body:
      'When it is a person who is hot or cold, French uses avoir: j\'ai chaud, tu as froid, elle a chaud. You met this in the avoir lesson as one of the fixed expressions and it is unchanged here. What is new is that it now sits beside a weather sentence built on the same adjective, so the two are easy to swap. Saying je suis chaud instead of j\'ai chaud is the error that gets remembered, because it does not mean nothing in French. It means something else.',
    examples: [
      { itemId: 'fr.a1.famille.228', note: 'The person, not the room. Two words, and it is avoir rather than être.' },
      { itemId: 'fr.a1.emotions.096', note: 'A man is cold in an office. This il is a person, and the frame shows it.' },
    ],
  },
  thingFrame: {
    term: 'être, for a thing',
    title: 'A thing is what it is',
    body:
      'A cup of coffee, the wind, the water: an object takes être, exactly the way the être lesson taught it. Le café est chaud. Le vent est froid. This is the one of the three that matches English word for word, which makes it the one a learner reaches for by default and uses in the two places it does not belong. It is correct about things and wrong about both the weather and people, so the useful skill is noticing which of the three you are talking about before you start the sentence.',
    examples: [
      { itemId: 'fr.sons.voyelles.414', note: 'A thing, so être. The same adjective as the weather sentence and a different frame.' },
      { itemId: 'fr.a1.rp-meteo-nature.091', note: 'The wind itself is a thing. Il fait du vent is the weather; le vent est froid is the wind.' },
    ],
  },
  seasonIn: {
    term: 'en, and the one au',
    title: 'Three take en, one takes au',
    body:
      'To say what happens in a season: en été, en automne, en hiver, and au printemps. Three of the four take the same small word and spring takes a different one, with no meaning behind the difference. There is a hook that works for exactly these four: the three that take en all begin with a vowel sound, and printemps is the one that begins on a consonant. That is reliable for these four words and it is not a rule about French generally, so use it to remember the set and nothing wider.',
    examples: [
      { itemId: 'fr.sons.jours-et-mois.122', note: 'The exception, and the only one. Spring is the season you have to remember separately.' },
      { itemId: 'fr.sons.jours-et-mois.120', note: 'The pattern the other three follow. Summer, autumn and winter all take the same word.' },
    ],
  },
  emptyIl: {
    term: 'the il that is nobody',
    title: 'This il refers to nothing at all',
    body:
      'In il fait beau, the il points at no one. Not a man, not a thing, not something mentioned earlier: nothing. It is there because a French sentence needs something in that position, and it carries no meaning of its own. The pronouns lesson taught you that il means he, and that is true everywhere except here. The test is what comes after it: il fait du vent is the weather, and il fait du yoga is a man in a room, and those two sentences are the same four words of shape.',
    examples: [
      { itemId: 'fr.sons.nasales.018', note: 'Nobody is doing anything. This il is a placeholder and the sentence is about the sky.' },
      { itemId: 'fr.a1.sports-et-loisirs.156', note: 'Same opening, and now it is a man. The word after du is the whole difference.' },
    ],
  },
};
