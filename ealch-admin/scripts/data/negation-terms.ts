// a1.18.l1 "La négation", the lesson glossary and its reframe.
//
// Split out for the same reason possessifs-terms.ts and couleurs-terms.ts are: a
// term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline. The renderer shows three chips
// and collapses the rest, so no section here names more than three.
//
// ── What an A1 term is in THIS lesson ──────────────────────────────────────
//
// a1.17's terms are facts about WHAT YOU ASK. These are facts about WHAT YOU DO,
// and in what order. Negation is the first thing in this course that is a
// PROCEDURE rather than a choice: the learner already has the sentence, and the
// lesson is two operations they run on it. So every term below is a step, a
// thing that survives a step, or a thing they will hear but must not write.
//
// The words « négation », « verbe », « conjugaison », « article », « défini »,
// « indéfini » and « partitif » appear nowhere below or anywhere on a learner
// surface. a1.04 taught le/la/les as "the little word in front", a1.11 and a1.29
// kept that, and this lesson keeps it too. `grammarIntroduced` is addressed to
// the curriculum and is better for using the precise words. The test pins it.
//
// ── The term that is really a warning to the author ────────────────────────
//
// `whatYouWillHear` exists because the dropped `ne` is the one thing in this
// lesson that a well-meaning later author will want to promote. It is written
// as a listening fact with an explicit instruction not to produce it, and the
// batch, the merge and the test all check by ID that
// fr.a1.negation-et-restriction.069 reaches no speak mission, no dictée and no
// free-text answer key. The term is the learner-facing half of that; the guards
// are the other half.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';

/** The line this lesson hangs on.
 *
 *  Exported so the scripts can report it and the test can count it rather than
 *  restating the string. The density validator requires it VERBATIM in at least
 *  three sections; this lesson carries it in eight, which sits inside the band
 *  a1.01, a1.09, a1.13 and a1.17 set. The batch's own count is higher than eight
 *  because `strings()` also walks the `reframe` field itself and the quiz `why`
 *  lines that quote it; the constant it asserts against is that total.
 *
 *  ── Why this one ─────────────────────────────────────────────────────────
 *
 *      Wrap the verb, then ask what the verb was.
 *
 *  Two moves, in order, both mechanical, both things the learner physically does
 *  to a sentence they already have. It matches the canDo exactly ("turn any
 *  sentence they know negative"), it is verifiable in the next sentence they
 *  say, and it is the procedure rather than a description of French.
 *
 *  The second half is doing the work, and it is the half the brief's own
 *  candidate does not have. THE VERB IS WHAT DECIDES THE ARTICLE, and that fact
 *  is the only genuinely new thing in this lesson:
 *
 *      J'ai un livre.    ->  Je n'ai pas de livre.     avoir, so un collapses
 *      J'ai le livre.    ->  Je n'ai pas le livre.     le never moves
 *      C'est un livre.   ->  Ce n'est pas un livre.    être, so un survives
 *
 *  One noun, the same article in two of the three, and the answer is different
 *  every time. Nothing separates them except the verb.
 *
 *  ── What was rejected, and why ───────────────────────────────────────────
 *
 *  "Wrap the verb, then fix the article" IS THE BRIEF'S OWN CANDIDATE AND IT IS
 *  ONE STEP SHORT. It is a good line and it prevents the error the brief names
 *  (« Je n'ai pas un frère »), but it presents the second step as unconditional,
 *  and the two screens this lesson is judged on are the two where the article
 *  does NOT change. A learner carrying it produces « Ce n'est pas de livre » and
 *  « Je n'aime pas de café », which are over-applications of the rule they were
 *  just handed and are the third and fourth errors in the brief's own errorSpot
 *  list. Rejecting a brief's reframe needs a reason and this is it: it teaches
 *  the exception wrong by omission.
 *
 *  "ne… pas means not" is a translation rather than a choice, and a learner who
 *  has it still puts the words in the wrong place. The brief says so and is
 *  right.
 *
 *  "Un becomes de after a negative" is one step of two, is FALSE after être, and
 *  has already been taught three times: a1.11's s13-negation, a1.29's
 *  s12-negation and a1.07's s15-negation each carry a section, an errorTrigger,
 *  a drill and a quiz round on it. As a headline it would spend this lesson
 *  repeating the most-taught fact in the band while teaching the exception wrong.
 *
 *  "French needs two words for not" is true, is interesting, and is not
 *  something the learner does. It survives as the opening act's title, which is
 *  where a description belongs.
 *
 *  "The verb decides the article" was the runner-up and is the better STATEMENT
 *  of the finding. It was rejected for being half a procedure: it tells the
 *  learner what governs the second step and nothing at all about the first, so a
 *  learner who has only it does not know to wrap anything. It survives as the
 *  title of act 4 and as `theVerbDecides` below.                              */
export const REFRAME = 'Wrap the verb, then ask what the verb was.';

export const NEGATION_TERMS: Record<string, LessonTerm> = {
  theWrap: {
    term: 'two words, one either side',
    title: 'French puts not in two places at once',
    body:
      'English has one word and it goes after the verb: I am not tired. French has two and they go round it. '
      + 'Ne slots in front of the verb, pas slots in behind it, and the verb sits between them like something in '
      + 'brackets. Je suis fatigué becomes je ne suis pas fatigué. Nothing else in the sentence moves and nothing '
      + 'else needs to. The two halves are not optional and they are not interchangeable: pas on its own in front '
      + 'of the verb is not French, and ne on its own is not either. Find the verb, put one word on each side of '
      + 'it, and the first half of every negative you will ever make is done.',
    examples: [
      { itemId: 'fr.a1.negation-et-restriction.044', note: 'Ne in front of suis, pas behind it, and fatigué has not moved.' },
      { itemId: 'fr.a1.negation-et-restriction.048', note: 'The same two words round a different person of the same verb.' },
    ],
  },
  theVerbDecides: {
    term: 'the verb decides what happens next',
    title: 'The same words, two different answers',
    body:
      'Once the wrap is done, look back at the verb you wrapped, because it decides whether anything else has to '
      + 'change. If it was avoir, a un, une or des in the sentence turns into de. If it was être, nothing turns '
      + 'into anything and every word stays exactly where it was. J\'ai un livre becomes je n\'ai pas de livre. '
      + 'C\'est un livre becomes ce n\'est pas un livre. Same noun, same little word in front of it, and the only '
      + 'thing separating the two answers is which verb was in the sentence. This is the step that is worth the '
      + 'half second, because both versions sound completely ordinary and nobody will stop you.',
    examples: [
      { itemId: 'fr.a1.negation-et-restriction.058', note: 'avoir, so the un collapsed to de.' },
      { itemId: 'fr.a1.negation-et-restriction.062', note: 'être, same noun, same un, and it survived untouched.' },
    ],
  },
  whatNeverMoves: {
    term: 'le, la and les never move',
    title: 'The half that has no exceptions',
    body:
      'Le, la and les come through a negative completely unchanged, whatever the verb was and whatever else is '
      + 'happening. J\'ai le livre becomes je n\'ai pas le livre. There is no version of this where they collapse '
      + 'and no verb that makes them. That is worth knowing for its own sake and it is also useful backwards: if '
      + 'a de turned up, the sentence had a un, une or des in it, and if nothing changed, it did not. This is the '
      + 'same asymmetry a1.11 and a1.29 pointed at, arriving here with a second reason to trust it.',
    examples: [
      { itemId: 'fr.a1.negation-et-restriction.060', note: 'Le survived, and the verb was avoir, which collapses the other kind.' },
      { itemId: 'fr.a1.expressions-utiles.095', note: 'The same survival in an ordinary published sentence.' },
    ],
  },
  whatYouWillHear: {
    term: 'the ne you will not hear',
    title: 'Half of it disappears when people talk',
    body:
      'In ordinary spoken French the ne is very often simply not said. J\'ai pas de chien, c\'est pas grave. This '
      + 'is not slang and it is not carelessness: it is what the language does at conversational speed, and it '
      + 'reaches everybody. The problem it makes for you is one of listening rather than speaking. A negative '
      + 'with its ne gone is one short word away from the positive, and if you miss the pas you will hear '
      + 'agreement where refusal was meant. So learn to hear it. Do not write it, and do not say it yet: the '
      + 'written language keeps the ne every time, and you are still working out which half you would be '
      + 'dropping.',
    examples: [
      { itemId: 'fr.a1.negation-et-restriction.069', note: 'The same sentence as the card above it, said the way it is actually said.' },
      { itemId: 'fr.a1.argot-du-quotidien.042', note: 'Published, and the only place this turns up in the A1 corpus.' },
    ],
  },
  nonAgainstNe: {
    term: 'non against ne',
    title: 'Two words for no, and they do different jobs',
    body:
      'Non answers a question and stands on its own. Ne goes inside a sentence and never stands on its own at '
      + 'all. Tu as un chien ? Non. That is the whole of non. If you then want to say what is not the case, that '
      + 'is a different job and it needs the wrap: non, je n\'ai pas de chien. English uses the same word for '
      + 'both, which is why they get merged, and the merge produces sentences like je non ai pas that stop a '
      + 'conversation. Non answers. Ne wraps. They can sit in one sentence and often do, three words apart.',
    examples: [
      { itemId: 'fr.a1.rp-identite.057', note: 'Both words in one line: non answers, then ne wraps the verb.' },
      { itemId: 'fr.a1.expressions-frequentes.029', note: 'The same shape again, and non is doing nothing to the sentence behind it.' },
    ],
  },
};
