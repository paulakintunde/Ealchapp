// a2.06.l1 « Pronoms d'objet direct » — the lesson glossary.
//
// A term is defined ONCE and surfaced at every point of use through a section's
// `terms` chips, so a learner meets the same explanation wherever the idea turns
// up and no card carries the definition inline.
//
// THREE CHIPS PER SECTION. The renderer shows three and collapses the rest
// (invariants §2), so a section naming four has authored one into nothing.
//
// ── THE VOCABULARY DECISION THESE TERMS ENFORCE ────────────────────────────
//
// Corpus §5. `pronoun` (233 uses across the shipped seed), `subject` (173) and
// `object` (49) are HOUSE VOCABULARY and are used freely. `object pronoun` has
// never appeared on a learner surface in this product and does not start here;
// `direct object` appears twice in 62 lessons and appears here ONLY in
// `overview.titleEn`, which `content_units` requires to be the unit's English
// name. Everywhere else the plain phrase does the work, and the guard checks the
// RATIO rather than banning a word, which is corrections §14.5's method.

import type { LessonTerm } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
import {
  A, AGREEMENT_RULE, AGREEMENT_SILENT, ARTICLE_UNIT, ELISION_LIMIT, ELISION_UNIT,
  GENDER_UNIT, NEGATION_EXTENSION, NEGATION_RULE, PLAIN_PHRASE, PLAIN_POSITION,
  REFLEXIVE_UNIT, REFRAME, SHAPE_EXTENSION, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
} from './pronoms-direct-corpus.ts';

export const PRONOMS_DIRECT_TERMS: Record<string, LessonTerm> = {
  /* THE OWNS, AS A TERM. Named for the procedure that finds it rather than for
   * what it is, because the procedure is what a learner can run mid-sentence. */
  whatOrWho: {
    term: PLAIN_PHRASE,
    title: 'How to find the word this lesson is about',
    body:
      `Say the verb, then ask what, or who. See what? The film. Know who? Marie. Whatever answers that question is the word this lesson replaces, and in English it sits directly after the verb every time. That position is the only thing you have to give up. ${REFRAME} Not every verb has one. « I sleep » answers nothing, and a verb with no answer to what or who has nothing for a pronoun to stand in place of.`,
    examples: [
      { itemId: A(189), note: 'See what? The film. It is sitting where English always puts it.' },
      { itemId: A(195), note: 'Know who? Marie. A person answers the question exactly as a thing does.' },
    ],
  },

  /* THE POSITION, WHICH IS THE LESSON. */
  inFront: {
    term: PLAIN_POSITION,
    title: 'The one thing that changes, and it changes every time',
    body:
      `English has one place for this word and it is behind the verb. French has one place for it and it is in front. Nothing else about the sentence moves: the subject stays first, the verb keeps its ending, and the word you would have said last is said second instead. ${REFRAME} The reason this is worth a whole lesson rather than a footnote is that word order is the last thing a second language gives up. You will know this rule and still say it the English way under pressure, and the only cure is having said it the French way often enough that it arrives first.`,
    examples: [
      { itemId: A(190), note: 'Three words, and the middle one is the one English would have put last.' },
      { itemId: A(202), note: 'Two words that look alike in a row, and only the second is the verb.' },
    ],
  },

  /* THE §B.7 SHAPE, FIFTH OCCURRENCE. a2.02's string is QUOTED VERBATIM and the
   * unit is named, which is what the doctrine asks for from seq 14 onward. */
  sameWords: {
    term: 'one word, two jobs',
    title: `The shape you have met four times, and ${unitRef(WHAT_FOLLOWS_UNIT)} named it`,
    body:
      `« ${WHAT_FOLLOWS} » is the line ${unitRef(WHAT_FOLLOWS_UNIT)} gave this pattern, and you have met it four times: venir de, il y a, aller, and prendre. This is the fifth and it works slightly differently, so it is worth saying rather than leaving you to notice. ${SHAPE_EXTENSION} In « Je vois le film » the le is holding up a noun and you met it in ${unitRef(ARTICLE_UNIT)}. In « Je le vois » there is no noun for it to hold up, and the word straight after it is a verb. Same three letters, and the thing beside them tells you which job is being done.`,
    examples: [
      { itemId: A(189), note: `The ${unitRef(ARTICLE_UNIT)} job. A noun follows, so it is the article.` },
      { itemId: A(190), note: 'This lesson\'s job. A verb follows, so it is the pronoun.' },
    ],
  },

  /* GENDER: NAMED, LEANED ON, NOT RE-TAUGHT. */
  whichOne: {
    term: 'which of the three',
    title: `A question ${unitRef(GENDER_UNIT)} already answered`,
    body:
      `The choice between le, la and les is not a new decision. It is the noun's gender and number, which is exactly what ${unitRef(GENDER_UNIT)} taught you to store and what ${unitRef(ARTICLE_UNIT)} taught you to say. Plural takes les and the gender is not consulted at all. Singular takes le or la, and if you cannot gender the noun you cannot pick, which is why this lesson keeps the noun visible on every card that asks you to choose. Nothing here re-teaches gender. It simply becomes the thing you are spending, rather than the thing you are learning.`,
    examples: [
      { itemId: A(191), note: 'La photo is feminine, and the card shows you the noun so you are not guessing.' },
      { itemId: A(199), note: 'Plural, so the question never arrives.' },
    ],
  },

  /* TRAP ONE. sons.07 is QUOTED AND TAUGHT NOWHERE. */
  shortened: {
    term: "l'",
    title: `The form that loses the gender, and ${unitRef(ELISION_UNIT)} owns why`,
    body:
      `${ELISION_LIMIT} You have met this before: ${unitRef(ELISION_UNIT)} teaches it properly and at length, and nothing about it is new here. What IS new is what it costs you in this lesson. You spend the first half learning that le is masculine and la is feminine, and then meet a form where that distinction is gone from the sound and gone from the page. « Je l'aime » is him or it is her, and the sentence does not say. Nobody can be tested on it and nobody can hear it. It is not a gap in your French; it is a gap in the language, and the surrounding conversation is what fills it.`,
    examples: [
      { itemId: A(207), note: 'Him or her. The English gloss carries both because the French carries both.' },
      { itemId: A(211), note: 'And the plural does not shorten. Les keeps its shape and adds a z sound, so the plural survives where the two singulars do not.' },
    ],
  },

  /* TRAP TWO. Both inherited strings quoted verbatim, and the extension. */
  theWrap: {
    term: 'the wrap',
    title: 'What ne and pas go round, now that there is an extra word',
    body:
      `« ${NEGATION_RULE} » is the line you have carried since the near future, and it still holds. There is only one verb in these sentences, so the question of which verb never arises. The question that does arise is what counts as the verb, and the answer is that the pronoun has joined it. ${NEGATION_EXTENSION} Ne goes outside both, pas goes after both, and the pronoun never leaves the verb's side. ${Cap(unitRef(REFLEXIVE_UNIT))} taught you the same thing about its own small word one lesson before this, so this is one habit rather than two.`,
    examples: [
      { itemId: A(212), note: 'Ne outside, then the pronoun and the verb together, then pas.' },
      { itemId: A(216), note: 'And the shortened form behaves no differently inside the wrap.' },
    ],
  },

  /* ACT 5. The agreement, and the limit stated in the same breath. */
  theEnding: {
    term: 'the ending you cannot hear',
    title: 'What happens in the past, and why only writing shows it',
    body:
      `${AGREEMENT_RULE} ${AGREEMENT_SILENT} « J'ai vu la photo » names the thing afterwards and nothing happens. « Je l'ai vue » says it first, and an e goes on the end of the second word. Both sentences sound exactly the same, which is not a quirk of these two verbs: vu, vue, vus and vues are one sound, the way you were told endings would be back in the very first A2 lesson. So this is a writing rule, and the only place in this lesson that can prove you have it is the dictée and the one typed question in the exam.`,
    examples: [
      { itemId: A(224), note: 'Named after the verb, so nothing goes on the end.' },
      { itemId: A(225), note: 'Said before the verb, so the e goes on. The respelling is identical to the row above it on purpose.' },
    ],
  },

  /* THE POSITION, IN THE COMPOUND TENSE. The genuinely new positional fact. */
  frontOfBoth: {
    term: 'in front of the first word',
    title: 'Where the pronoun goes when the verb is two words long',
    body:
      `In the past the verb arrives as two words, and there is an obvious place to put a small word: between them. That is the wrong place. The pronoun goes in front of BOTH of them, which is the rule you already have applied to a verb that happens to start earlier than you expected. ${REFRAME} « Je l'ai vu », never « J'ai le vu ». Say the person, say the pronoun, and only then start the verb.`,
    examples: [
      { itemId: A(223), note: 'The pronoun, then ai, then vu. Everything verb-shaped is behind it.' },
      { itemId: A(234), note: 'And with the wrap as well: ne, pronoun, first word, pas, second word.' },
    ],
  },
};
