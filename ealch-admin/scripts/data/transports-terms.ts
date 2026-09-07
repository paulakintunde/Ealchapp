// a2.27.l1 « Les transports » — the term glossary.
//
// A term chip explains a word the lesson USES in its own copy, so the mission
// body does not have to stop and define it. `MissionSection.tsx` caps the chips
// shown and puts the rest one tap away, so a section declaring four or more
// pushes its content down the screen. Every section here declares two or three.
//
// THE JARGON WALK. A2-BRIEF-CORRECTIONS §13: the guard walks `intro` and
// `overview` as well as the sections, over a display() walk so a cardDeck card's
// `sub` is seen, and it checks the -s plural of every entry. Every
// metalinguistic word this lesson uses is defined here or does not appear.
//
// TWO WORDS ARE DELIBERATELY ABSENT AND THERE IS NO TERM FOR THEM.
// "imperative" and "impératif" appear nowhere in this lesson, in any surface,
// including card bodies, `why` strings and the roundup. Paul settled it on
// 2026-08-15, option B: NOBODY owns the imperative. This unit and a2.32 both
// use the form as unanalysed lexis, in the same terms, and neither cites the
// other for it. Defining a term for it here would be naming the mood with the
// label filed off.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

export const TRANSPORT_TERMS: Record<string, LessonTerm> = {
  move: {
    term: 'a move',
    title: 'One instruction inside a longer one',
    body: 'A direction is not a sentence, it is a sequence. Every move is one of four kinds: go along, change heading, pass a landmark, or arrive. Four verbs mean go, so the verb is not what tells you which kind you just heard.',
    examples: [
      { itemId: 'fr.a2.transports-quotidiens.135', note: 'GO, on its own.' },
      { itemId: 'fr.a2.transports-quotidiens.147', note: 'ARRIVE, with no verb of motion in it.' },
    ],
  },
  joint: {
    term: 'a joint',
    title: 'The word where one move ends',
    body: 'Puis, ensuite, après, jusqu\'à and au bout de. They are short, unstressed, and they are the only thing separating one instruction from the next. A comma does the same job and has no sound at all.',
    examples: [
      { itemId: 'fr.a2.transports-quotidiens.151', note: 'One joint, and you can hear it.' },
      { itemId: 'fr.a2.transports-quotidiens.169', note: 'Three moves and no joint you can hear.' },
    ],
  },
  chain: {
    term: 'a chain',
    title: 'The whole answer, start to finish',
    body: 'Two, three or four moves said in one breath. Three correct moves in the wrong order put you somewhere else entirely, so holding them is not enough on its own.',
    examples: [
      { itemId: 'fr.a2.transports-quotidiens.179', note: 'Four moves in twelve words.' },
      { itemId: 'fr.a2.transports-quotidiens.186', note: 'Four moves in eleven.' },
    ],
  },
  ordinal: {
    term: 'an ordinal',
    title: 'Première, deuxième, troisième',
    body: 'The word that says which street, and the most-missed word in a direction: short, unstressed, and sitting between two content words. Not one published row in the corpus used one inside an instruction before this lesson.',
    examples: [
      { itemId: 'fr.a2.transports-quotidiens.192', note: 'Two unstressed syllables between la and à.' },
      { itemId: 'fr.a2.transports-quotidiens.197', note: 'Both, in one line, so the contrast is audible.' },
    ],
  },
  announcement: {
    term: 'the announcement voice',
    title: 'How a station talks',
    body: 'The destination comes first, the number is read as a block, and a delay becomes a noun. It is recognisable by its shape and its speed rather than by any word being difficult.',
    examples: [
      { itemId: 'fr.a2.transports-quotidiens.201', note: 'Destination fronted, platform as a bare number.' },
      { itemId: 'fr.a2.transports-quotidiens.204', note: 'Aura un retard: the delay as a noun.' },
    ],
  },
  counterForm: {
    term: 'the counter form',
    title: 'What you say to staff',
    body: 'Greeting first, then the transaction, and no verb of demand. It is short because a counter is short. Said to somebody in the street it is nonsense.',
    examples: [
      { itemId: 'fr.a2.transports-quotidiens.224', note: 'Bonjour, then the ticket, then please.' },
      { itemId: 'fr.a2.transports-quotidiens.226', note: 'No verb at all, and complete.' },
    ],
  },
  streetForm: {
    term: 'the street form',
    title: 'What you say to a stranger',
    body: 'Apology first, then the goal. You are interrupting somebody who was not waiting for you, and that is what the apology buys. Used at a counter it reads as lost rather than transacting.',
    examples: [
      { itemId: 'fr.a2.transports-quotidiens.225', note: 'Pardon, madame, then what you are looking for.' },
      { itemId: 'fr.a2.transports-quotidiens.230', note: 'The same shape with a number inside it.' },
    ],
  },
  rung: {
    term: 'a rung',
    title: `One of ${unitRef('a2.07')}\'s six ways to ask again`,
    body: `${Cap(unitRef('a2.07'))} authored six, ordered by what they cost you. Rung 1 gives away nothing; rung 6 concedes that speech has failed and asks to write it down. Reach for the lowest one that will actually fix the problem.`,
    examples: [
      { itemId: 'fr.a2.au-restaurant.132', note: 'Rung 1, and it costs nothing.' },
      { itemId: 'fr.a2.au-restaurant.134', note: 'Rung 3, the first that names the fault.' },
    ],
  },
};
