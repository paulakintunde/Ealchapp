// a1.05.l1 "Les pronoms sujets" — the lesson glossary and its reframe.
//
// Split out for the same reason salutations-terms.ts is: a term is defined ONCE
// and surfaced at every point of use via a section's `terms` chips, so a learner
// meets the same explanation wherever the word turns up and no card carries the
// definition inline.
//
// ── What an A1 term is here, and is not ────────────────────────────────────
//
// a1.01's glossary defines SOCIAL FACTS: what vous costs you, what salut
// signals. This lesson's material is a closed grammatical set, so the terms
// have to work harder not to become a textbook margin. Each body below answers
// "what do I do with this in a sentence" rather than "what category is this",
// and every one names the verb form that comes with the pronoun, because the
// pronoun on its own is two letters and decides nothing.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the batch can count it against an explicit constant and the test
 *  can compare seed against source rather than restating the string.
 *
 *  Why this one. The obvious candidate was a register line ("when in doubt,
 *  vous"), and a1.01 already carries that ground and already says it better.
 *  The obvious second was "on means we", which is true, is the canDo's named
 *  item, and is a fact about ONE of the nine rather than about the lesson.
 *
 *  This one is about all nine at once, it is arithmetic rather than advice, and
 *  it is checkable: a learner can count the rows on the table in front of them
 *  and see that it is true. It is also the single most useful thing to be
 *  holding two lessons before a verb table, because it turns conjugation from
 *  nine things to memorise into six, and it is what makes `on` survivable
 *  rather than baffling: `on` is not an exception, it is a third tenant of a
 *  row that already had two. */
export const REFRAME = 'Nine pronouns. Six verb forms.';

export const PRONOMS_TERMS: Record<string, LessonTerm> = {
  subjectPronoun: {
    term: 'subject pronoun',
    title: 'The word that says who is doing it',
    body:
      'The little word in front of the verb that names who the sentence is about. French has nine of them and uses them far more strictly than English does: a French verb almost never stands without one, so leaving it out is not brevity, it is an unfinished sentence. Choosing it is the first decision you make, before the verb exists.',
    examples: [
      { itemId: 'fr.a1.cafe.154', note: 'je, and the form of the verb that comes with it.' },
      { itemId: 'fr.a1.cafe.160', note: 'vous, and a different form again.' },
    ],
  },
  sixForms: {
    term: 'nine and six',
    title: 'Why the nine are not nine',
    body:
      'il, elle and on all take one form of the verb. ils and elles both take another. So nine pronouns sit behind six forms, and two of the six do triple and double duty. That is the arithmetic that makes a verb table learnable, and it is true of every verb in the language rather than only of être.',
    examples: [
      { itemId: 'fr.a1.cafe.156', note: 'il takes est.' },
      { itemId: 'fr.a1.cafe.161', note: 'ils takes sont, and so does elles.' },
    ],
  },
  on: {
    term: 'on',
    title: 'We, said out loud',
    body:
      'In spoken French on has almost entirely replaced nous as the subject. It means we and it takes the form il takes, so a we idea comes out on a he form. Both halves have to be held at once: knowing only the meaning produces « On sommes », and knowing only the form leaves you translating it as one or people.',
    examples: [
      { itemId: 'fr.a1.cafe.158', note: 'The everyday version, and what you will hear.' },
      { itemId: 'fr.a1.cafe.159', note: 'The same sentence with nous, which is what you will write.' },
    ],
  },
  vous: {
    term: 'vous',
    title: 'One word, two jobs',
    body:
      'vous is the polite singular you already know, and it is also the plain plural for any group at all, however close you are to them. French has no plural of tu, so two friends together are vous with nothing polite being signalled. The word alone will not tell you which job it is doing; only the room will.',
    examples: [
      { itemId: 'fr.a1.cafe.177', note: 'One person, kept at a distance.' },
      { itemId: 'fr.a1.cafe.178', note: 'A group. Identical out loud, and the silent S is the only difference.' },
    ],
  },
  ils: {
    term: 'ils / elles',
    title: 'The rule that makes elles rare',
    body:
      'elles is for a group in which every single member is a woman. Add one man, at any group size, and the whole group becomes ils. That is the rule French uses. It is also why elles turns up so seldom: the corpus behind this app holds eighteen sentences with it against ninety-five with ils, and that ratio is the language, not the sample.',
    examples: [
      { itemId: 'fr.a1.cafe.162', note: 'Every one of them a woman.' },
      { itemId: 'fr.a1.cafe.161', note: 'One man among them and it is this.' },
    ],
  },
  impersonalIl: {
    term: 'impersonal il',
    title: 'The il that is nobody',
    body:
      'il y a, il faut, il pleut, il est huit heures. In all of these il refers to no one at all, the way English uses it in "it is raining". A quarter of the il sentences in this app are this kind, so you will meet one within minutes of being told il means he. It takes exactly the same verb form as the il that means he.',
    examples: [
      { itemId: 'fr.a1.maison.005', note: 'There is, there are. The most common frame in the language.' },
      { itemId: 'fr.a1.deplacements.262', note: 'Every clock time in French starts here.' },
    ],
  },
  jApostrophe: {
    term: "j'",
    title: 'je, in front of a vowel',
    body:
      "je drops its e and becomes j' whenever the next word starts on a vowel sound: j'ai, j'attends, j'habite. You already make this drop with le and la, so nothing new is being asked of you. The two words are then said as one, with no gap where the apostrophe is.",
    examples: [
      { itemId: 'fr.a1.cafe.174', note: 'je + ai.' },
      { itemId: 'fr.a1.cafe.175', note: 'je + attends, and the H of an h muet counts as a vowel too.' },
    ],
  },
  etre: {
    term: 'être, here',
    title: 'A carrier, not the lesson',
    body:
      'Every pronoun on these screens arrives with a form of être attached, because a pronoun said on its own proves nothing: il and ils are the same sound and only the verb separates them. Take the forms as vocabulary that comes with the pronoun rather than as a table to learn. être itself is the next lesson, and avoir is the one after it.',
    examples: [
      { itemId: 'fr.a1.cafe.154', note: 'je suis.' },
      { itemId: 'fr.a1.cafe.157', note: 'elle est, the form three of the nine share.' },
    ],
  },
};
