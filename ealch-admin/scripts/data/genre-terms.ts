// a1.03.l1 "Le genre des noms" — the lesson glossary and its reframe.
//
// Split out for the same reason nombres-terms.ts is: a term is defined ONCE and
// surfaced at every point of use through a section's `terms` chips, so a learner
// meets the same explanation wherever the idea turns up and no card carries the
// definition inline. The renderer shows three chips and collapses the rest, so
// no section here declares a fourth.
//
// ── What an A1 term is in this lesson ──────────────────────────────────────
//
// a1.01's terms define social facts. a1.02's are closer to the sons register
// because counting is a sound problem. These are neither: they are about what
// the learner STORES, which is the third A1 register and the one this unit
// happens to sit in.
//
// They stay A1 by answering "what does this cost me when I get it wrong"
// rather than "what category is this". The word `genre` is never taught as
// vocabulary and the words `masculin` and `féminin` appear only where the
// learner will meet them on a dictionary entry, because a learner who knows
// that armoire takes une does not need to know that une is called feminine.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in seven, across eleven strings.
 *
 *  ── Why this one ────────────────────────────────────────────────────────
 *
 *  The obvious candidate was "nouns have a gender", which is a fact and not a
 *  decision, and a learner cannot do anything differently tomorrow because they
 *  have heard it.
 *
 *  This one is a decision, and it is one the learner makes before they open
 *  their mouth: the thing you commit to memory is `une armoire`, not `armoire`.
 *  It is testable within a day, it is true of every mission in the lesson, and
 *  it survives the hardest mission in the set. When the learner meets `l'` the
 *  article has been deleted from the card, and the reframe is what tells them
 *  that something they were supposed to learn is missing and has to be looked
 *  up. A reframe about gender rather than about the article says nothing there.
 *
 *  It is also a convention this corpus already follows rather than one the
 *  lesson is proposing: 1,583 of the 1,598 a1 gendered word items carry their
 *  article in `fr`. That is the strongest position a reframe can be in, and the
 *  lesson says so out loud in mission 3.
 *
 *  Three units hang off this one (a1.04, a1.11, and a1.29 through a1.04), and
 *  all three assume a learner who can look at a noun and know which article it
 *  takes. A reframe that produced a learner who knows nouns have genders and
 *  cannot pick between le and la would leave a hole in all three.               */
export const REFRAME = 'Learn the article, not the noun.';

export const GENRE_TERMS: Record<string, LessonTerm> = {
  pair: {
    term: 'the noun and its article',
    title: 'Why a noun on its own is only half a word',
    body:
      'A French noun is stored with the word in front of it. Armoire is something you can look up. Une armoire is something you can use, because the choice between un and une is made before you have finished the first syllable and there is no time to work it out mid-sentence. This is not a convention this lesson invented: nearly every noun in this app already carries its article, and a card that shows you the bare noun has quietly taught you to store it bare.',
    examples: [
      { itemId: 'fr.a1.maison.026', note: 'The wardrobe, stored the way you will need it.' },
      { itemId: 'fr.a1.cuisine.010', note: 'Water, where the article has been deleted and you still have to know it.' },
    ],
  },
  endings: {
    term: 'the ten endings',
    title: 'The part you can work out',
    body:
      'Ten endings in French tell you the article, and across the nouns they cover they are right about ninety-seven times in a hundred. Five point to un: -ier, -ment, -et, -eau, -age. Five point to une: -tion, -ure, -ette, -ine, -ise. That is roughly one noun in six. It is a much smaller rule than most courses imply and it is a much better one, because the endings people usually teach are close to a coin toss.',
    examples: [
      { itemId: 'fr.a1.ecole.032', note: 'A board, and the ending says un before you know the word.' },
      { itemId: 'fr.a1.ecole.046', note: 'A question, where -tion has never once been wrong here.' },
    ],
  },
  finalE: {
    term: 'the final e',
    title: 'The rule you were given, measured',
    body:
      'Nouns ending in e are feminine is the first rule most beginners are handed, and over the eight hundred and seventy-one such nouns in this app it is right seven times in ten. Applied confidently it makes you wrong about one noun in three, which is often enough to sound wrong in every second sentence and rarely enough that you never stop trusting it. Le livre, le fromage, le téléphone and le frère all end in e. Keep the rule as a lean, never as a decision.',
    examples: [
      { itemId: 'fr.a1.ecole.029', note: 'Ends in e, takes le. So does its opposite number, la table.' },
      { itemId: 'fr.a1.maison.015', note: 'Ends in e, takes la. Nothing on either card tells you which.' },
    ],
  },
  hidden: {
    term: 'when the article is gone',
    title: 'The two hundred nouns that tell you nothing',
    body:
      'In front of a vowel, un stays un and une stays une, but le and la both shrink to l apostrophe. More than two hundred nouns in this app show up that way, and the card you learn them from carries no information about gender at all. L’armoire is feminine, l’escalier is masculine, and nothing you can see says so. The fix is a habit rather than a rule: the moment you meet l apostrophe, ask which one it really is, because nothing later will ask for you.',
    examples: [
      { itemId: 'fr.a1.maison.026', note: 'Feminine, and the card does not say so.' },
      { itemId: 'fr.a1.maison.019', note: 'Masculine, and the card does not say that either.' },
    ],
  },
  storage: {
    term: 'work it out or store it',
    title: 'Which of the two you are doing',
    body:
      'About one noun in six gives its article away through its ending. The rest do not, and no amount of looking at them will change that, so the strategy that survives contact with real French is: work it out where the ending lets you, and store the article with the word everywhere else. That is uncomfortable to be told and it is what actually works. The alternative is a learner who has memorised a table and still stops mid-sentence, which is the failure this lesson exists to stop.',
    examples: [
      { itemId: 'fr.a1.cuisine.011', note: 'Worked out: -age points at un.' },
      { itemId: 'fr.a1.maison.026', note: 'Stored: no ending in this lesson reaches it, and none ever will.' },
    ],
  },
  agreement: {
    term: 'what depends on this',
    title: 'Why the article is worth the effort now',
    body:
      'Gender is not a label on a noun, it is a choice that spreads. The article you pick is the same choice that decides le or la in the next lesson, du or de la after that, and the ending of every adjective you ever attach to the noun. Get the article stored once and all of those come free. Skip it and each one becomes its own guess, taken under pressure, in the middle of a sentence you are already halfway through.',
    examples: [
      { itemId: 'fr.a1.cafe.012', note: 'Une baguette now, la baguette next, de la baguette after that.' },
      { itemId: 'fr.a1.deplacements.018', note: 'One decision, reused every time the word comes back.' },
    ],
  },
};
