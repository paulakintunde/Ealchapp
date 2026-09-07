// a1.26.l1 "La maison", the lesson glossary and its reframe.
//
// A term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline. The renderer shows three chips
// and collapses the rest, so no section names more than three.
//
// ── No grammar jargon ──────────────────────────────────────────────────────
//
// « préposition », « genre », « masculin », « féminin », « composé » and
// « substantif » appear nowhere below and nowhere on a learner surface. a1.03
// taught noun gender as "the un kind and the une kind" and a1.04 taught le/la/les
// as "the little word in front"; this lesson keeps both and adds nothing.
//
// `grammarIntroduced` is addressed to the curriculum and uses the precise words.
// The test pins the split.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in seven, inside the band a1.01
 *  (eight), a1.09 (eight), a1.15 (seven) and a1.22 (seven) set.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *      Never say "room". Say which room.
 *
 *  It is a CHOICE THE LEARNER MAKES in the moment of speaking, not a rule about
 *  the language they can agree with and still be stuck. By the time you are at
 *  somebody's front door and need the toilet, the fact you needed was stored or
 *  it was not, and the sentence that comes out is decided by whether you reach
 *  for a bilingual word or for the room itself.
 *
 *  It is true of the WHOLE lesson rather than one section. It governs the room
 *  set, it governs the furniture organised by the room it lives in, it is the
 *  hinge of the opening scene, it is what the reading passage's « 3 pièces »
 *  turns on, and it is what the role play tests.
 *
 *  It is verifiable tomorrow. Anybody who has been in a French home once can
 *  check it.
 *
 *  ── What was rejected, and why, so nobody re-litigates it ────────────────
 *
 *  "Learn the noun with its article" is true, is a1.03's and a1.04's lesson,
 *  and a1.22 already spent a whole reframe on it four units ago ("Learn the
 *  country with its article"). Repeating it here teaches nothing new and makes
 *  the track read as circular.
 *
 *  "Everything at home has a gender" is a fact rather than a choice. A learner
 *  can agree with it completely and still not know what to say next.
 *
 *  "Put the thing in the room" is a1.21's reframe wearing furniture. a1.21's own
 *  is "One word goes straight onto the noun. A phrase needs de first," and this
 *  lesson is forbidden from teaching that rule at all.
 *
 *  "Learn the word with the room it lives in" was the runner-up and it is the
 *  better DESCRIPTION of how the decks are built. It was rejected for not being
 *  a decision anybody makes under pressure: it is a study habit rather than a
 *  thing you do mid-sentence. It survives as the shape of act 3 and of the
 *  reference sheet. */
export const REFRAME = 'Never say "room". Say which room.';

export const MAISON_TERMS: Record<string, LessonTerm> = {
  whichRoom: {
    term: 'English has one word and French has three',
    title: 'chambre, pièce, salle',
    body:
      'English says room for all of them and lets the sentence sort it out. French makes you choose before '
      + 'you open your mouth. A chambre is a bedroom and only ever a bedroom. A pièce is a room as a unit, '
      + 'the thing a listing counts when it says trois pieces. A salle is a room named by what happens in '
      + 'it, and it almost never turns up on its own: it arrives already attached, as salle de bain or salle '
      + 'a manger. None of the three is a translation of the others, and picking the wrong one is not a '
      + 'small error in a sentence that is otherwise fine. It is the sentence.',
    examples: [
      { itemId: 'fr.a1.maison.002', note: 'The one that means bedroom, and nothing else.' },
      { itemId: 'fr.a1.maison.157', note: 'The counting one, in the sentence a listing would actually print.' },
    ],
  },
  twoRooms: {
    term: 'the bath and the toilet are two rooms',
    title: 'Where the towel comes from',
    body:
      'In most French homes the bath is in one room and the toilet is in another, and the two have separate '
      + 'names because they are separate places. La salle de bain has the bath, the shower and the basin in '
      + 'it. Les toilettes has the toilet. Asking for the first when you want the second is understood '
      + 'perfectly and sends you to the wrong door, and the person helping you will assume you meant what '
      + 'you said. Note the s on the end of toilettes as well: this one is always plural and there is no '
      + 'singular of it, which is unlike every other room in the lesson.',
    examples: [
      { itemId: 'fr.a1.maison.010', note: 'The room with the bath in it.' },
      { itemId: 'fr.a1.maison.011', note: 'The other room, always plural, never shortened.' },
    ],
  },
  roomByRoom: {
    term: 'store the thing with the room it lives in',
    title: 'A kitchen word is easier than a house word',
    body:
      'Sixty words about a house is a list and nobody remembers a list. The same sixty words sorted into the '
      + 'four rooms they belong to is four short sets, each of which you can walk through in your head '
      + 'because you have stood in the room. The fridge, the oven and the plates go together because they '
      + 'are in one place, not because they are alphabetically near each other. This is also how you will '
      + 'meet them: nobody hands you the whole house at once, they show you one room at a time.',
    examples: [
      { itemId: 'fr.a1.maison.105', note: 'A kitchen word, learned in the kitchen set.' },
      { itemId: 'fr.a1.maison.141', note: 'And a living room one, in a sentence that puts it there.' },
    ],
  },
  machinesAreMasculine: {
    term: 'a machine named after its job is masculine',
    title: 'The one place gender is predictable',
    body:
      'A1 has told you many times that you cannot work out whether a word is the le kind or the la kind, and '
      + 'that is true almost everywhere. Here is the exception. When French names a machine by what it does, '
      + 'it glues a verb onto a noun and the result is always the le kind: le lave-vaisselle washes dishes, '
      + 'le seche-linge dries laundry, le micro-ondes does the waves. That is a rule you can apply to a word '
      + 'you have never met. It stops the moment the name is not a compound: la machine a laver is a machine '
      + 'for washing rather than a wash-thing, and la cuisiniere is not built that way either, so both go '
      + 'back to being stored.',
    examples: [
      { itemId: 'fr.a1.maison.109', note: 'Verb plus noun, glued, so the le kind without being told.' },
      { itemId: 'fr.a1.maison.110', note: 'Not a compound, so the rule does not reach it.' },
    ],
  },
  youAlreadyHaveThis: {
    term: 'you already know how to say where it is',
    title: 'Nothing new here, on purpose',
    body:
      'The last unit gave you the whole set of words for where a thing is, and it gave you what happens when '
      + 'one of them meets a le word. That has not changed and none of it is retaught here. What is new is '
      + 'that you now have something to put in the sentence: the rooms and the furniture. A learner who '
      + 'finished the last unit and could not name a single room could say where nothing was. This is the '
      + 'other half of that, and the only work left is choosing the right room word.',
    examples: [
      { itemId: 'fr.a1.maison.152', note: 'Last unit\'s rule, this unit\'s words, in a published sentence.' },
      { itemId: 'fr.a1.maison.134', note: 'The same again, with a room this lesson taught you to pick.' },
    ],
  },
};
