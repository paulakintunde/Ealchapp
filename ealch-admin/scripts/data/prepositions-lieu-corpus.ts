// The a2.04 corpus: what this lesson authors, what it imports, the nine shipped
// respellings it repairs, and the reason its shape is not the one its brief
// describes.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a2.04 puts on a screen. The lesson body (prepositions-lieu-lesson.ts)
// reads them FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE PROBE RAN, AND THE BRIEF'S CENTRAL CLAIM IS WRONG. THREE OF ITS FIVE
//  GRID ROWS ARE a1.22's, SHIPPED, AND THE FOURTH IS a1.21's. BUILDING THE
//  LESSON IT DESCRIBES WOULD REPEAT TWO LESSONS THE LEARNER HAS DONE.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-13 against Postgres by `scripts/_a204_probe.ts`,
// `_a204_probe2.ts`, `_a204_probe3.ts` and `_a204_probe4.ts`, and against the
// two shipped neighbours read in full.
//
//   1. "Owns: the choice mechanism ... en France / au Japon / aux États-Unis /
//      à Paris / chez le médecin ... The five place types belong in one grid."
//
//      THREE OF THE FIVE ARE ALREADY TAUGHT, IN A GRID, BY a1.22 AT seq 25.
//      Read off `pays-lesson.ts` `grammarIntroduced`, byte for byte:
//
//          'en, au and aux with a country name, selected by the country's
//           gender and number'
//          'de, du and des with a country name, selected by the same property'
//          'That the preposition absorbs the definite article, so no article
//           follows it'
//          'en rather than au before a masculine country beginning with a vowel'
//
//      a1.22 ships THE_TWELVE with a `to` and a `from` on every country, a
//      three-row hero grid keyed on `slot` (f · m · pl), the vowel-masculine
//      exception, and `sheet.a1.22.grid` holding both prepositional columns.
//      The brief's grid rows 1 to 3 are that grid.
//
//      AND THE FOURTH ROW IS a1.21's. Its own handover says so in as many
//      words (prepositions-lesson.ts:2220):
//
//          'a1.21 DOES teach `à` + place-by-name (`à Paris`, `à la maison`,
//           `au bureau`) and the full à-contraction.'
//
//      So the only row of the five that no shipped lesson owns is CHEZ, and
//      the only thing left for a lesson at seq 13 is the thing neither
//      predecessor could hold: all four kinds of place at once, and what each
//      word does to the article. See THE OWNS below.
//
//   2. "Four, and check before you teach it: des = de + les was a claim in
//      a1.16's brief. Read what a1.16 and a1.29 actually shipped."
//
//      CHECKED, AND NEITHER OF THEM SHIPPED IT. a1.16 (Adjective Placement)
//      contains no contraction language at all; a1.29 (The Partitive Articles)
//      owns `du`, `de la` and `de l'` as partitives and its canDo does not
//      mention `des`. The unit that owns `des = de + les` is **a1.21**, in a
//      table cell (`['de + les', 'des']`), in a reference sheet, and in
//      `grammarIntroduced`:
//
//          'The contraction of à with the definite article: à + le = au,
//           à + les = aux'
//          'That à + la and à + l' do not contract, which bounds the rule'
//
//      The brief sends the author to the two lessons that do not have it and
//      not to the one that does. a2.04 NAMES a1.21 and does not restate the
//      rule; CONTRACTION_UNIT and CONTRACTION_CLAIM below are the whole of what
//      it says about it.
//
//   3. "Whether a1.21 already covers chez. If it does, this lesson is narrower
//      than described and that goes in your report."
//
//      IT SHOWS IT AND DOES NOT DRILL IT, AND IT HANDS IT FORWARD BY NAME.
//      `PREPOSITIONS` in prepositions-corpus.ts carries `chez` with the comment
//      "Shown, not drilled. `entre` needs a pair and `chez` needs a person, and
//      both are named in the roundup as the two the learner will meet next",
//      and its roundup says:
//
//          'Sur and sous are the only pair here your ear has to work at. Entre
//           needs two things and chez needs a person, and you will meet both
//           again.'
//
//      One cardDeck card, one sheet paragraph, one clause of
//      `grammarIntroduced` ('chez as taking an animate complement'), and no
//      drill, no quiz question and no production surface anywhere. So the
//      lesson is NOT narrower than the brief describes on this point: chez was
//      promised to a later lesson and this is that lesson.
//
//   4. "Londres 0 rows ABSENT."
//
//      TRUE, AND THE BRIEF PICKED THE ONE CITY IN EUROPE THE CORPUS HAS NEVER
//      MENTIONED. `Londres` returns zero at every status in every theme and
//      zero as sentence evidence. It is not needed: measured across every
//      published row,
//
//          Lyon       37 rows put `à` on it, 0 headword rows
//          Montréal   28 rows put `à` on it, 0 headword rows
//          Paris      26 rows put `à` on it, ONE headword (fr.sons.muettes.004)
//          Marseille  10, Bordeaux 2, Toulouse 2, Nice 2, Bruxelles 1
//
//      So the CITY row of the grid has more evidence behind it than any other
//      row, and it needs no new vocabulary at all. `Bordeaux` is a trap worth
//      naming: it exists as a headword and it is a COLOUR
//      (fr.sons.couleurs.016, `bor-DOH`), not a city.
//
//   5. "Assume the vocabulary exists until the probe says otherwise ... If most
//      of your vocabulary is imported, your block may go almost unused, and
//      that is the expected outcome."
//
//      HALF RIGHT, AND THE HALF IT IS WRONG ABOUT IS THE HALF THE LESSON IS
//      BUILT ON. Every NOUN exists. Not one of the PHRASES does, as a card:
//
//          chez le médecin    22 published rows,   0 with a respelling
//          chez le dentiste   21 published rows,   0 with a respelling
//          à Paris            26 published rows,   0 with a respelling
//          en France          30 published rows,   1 with a respelling
//          au Japon            3 published rows,   0 with a respelling
//          chez le boulanger   2 published rows,   0 with a respelling
//
//      a2.13 §1 exactly: the corpus is rich in EVIDENCE and poor in CARDS, and
//      a row without a respelling reaches a card the learner cannot say. 283
//      published rows hold `chez` and TWENTY of them carry a respelling, six of
//      those twenty carry the banned U+203F tie, and not one of the remaining
//      fourteen is `chez` in front of a named person with an article. So this
//      build authors 26 rows and imports 36, and corrections §2's "you will
//      author almost no headwords" is true of headwords and false of the
//      lesson.
//
//   6. "chez the classic trap ... chez la boulangerie is wrong and chez le
//      boulanger is right."
//
//      CONFIRMED, AND THE CORPUS ITSELF NEVER MAKES THE ERROR. Every published
//      row holding `chez` was read and the word after it enumerated: le(59),
//      nous(38), moi(34), mes(16), lui(16), elle(13), ma(9), toi(9), ses(8),
//      les(8), un(7), nos(7), eux(7), des(5), vous(5), sa(4) and a long tail of
//      possessives and proper names. NOT ONE PLACE NOUN. A targeted query for
//      `chez` in front of sixteen building nouns returns 0 rows at ANY status.
//
//      So the error is a learner error and not a corpus one, which is the best
//      possible state: nothing this lesson imports can contradict its own rule,
//      and the guard that forbids it can be absolute rather than exempting
//      published rows.
//
//   7. "Do not build a listenChoose round on preposition identification."
//
//      RIGHT, AND FOR A SECOND REASON THE BRIEF DOES NOT GIVE. `en` and `an`
//      are one sound, so the brief's reason holds. But `chez le` and `chez la`
//      are ALSO one sound in fast speech only if the vowel is reduced, and the
//      pair this lesson most wants to ask about — « chez le boulanger » against
//      « à la boulangerie » — differs in every syllable, so an ear question on
//      it would be free marks rather than a test. Both are stated in the report
//      and NO_EAR_QUESTION below holds the pairs a listenChoose may not offer.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE OWNS: WHAT EACH WORD DOES TO THE ARTICLE
// ══════════════════════════════════════════════════════════════════════════
//
// a1.21 taught that `à` and `de` fold into the definite article. a1.22 taught
// that a country's article decides between `en`, `au` and `aux`. Neither could
// say what the other one knew, and a learner arriving here has two systems that
// both claim the word `au` and no statement anywhere that they are the same
// operation: « au Japon » IS « à + le Japon », and nobody has told them.
//
// Put the three behaviours in one column and the lesson is one screen:
//
//     word    + le       + la      what happened to the article
//     à       au         à la      folded in                     a1.21
//     de      du         de la     folded in                     a1.21
//     en      en         en        thrown away                   a1.22
//     chez    chez le    chez la   nothing at all                THIS LESSON
//
// `chez` is the only place preposition in the language that leaves the article
// alone, and it is the only row of that table no lesson owns. That is why the
// lesson is at seq 13 rather than anywhere else, and it is why the reframe is
// about the article rather than about the place.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ══════════════════════════════════════════════════════════════════════════
 *  IDENTITY, THE BLOCK, AND THE COUNTS THE BATCH REFUSES TO DISAGREE WITH
 * ═══════════════════════════════════════════════════════════════════════ */

export const THEME = 'prepositions-essentielles';

/** Byte for byte from `content_units`, measured 2026-08-13 by
 *  `scripts/_a2_preflight.ts`. Corrections §1: never from the brief. This one
 *  the brief got RIGHT, because it had already been corrected against §11. */
export const UNIT = {
  id: 'a2.04',
  seq: 13,
  title: 'Prepositions of Place, in Depth',
  sub: 'Prépositions de lieu',
  canDo: 'Can pick à, de, en, au, aux and chez, and dodge their classic traps',
  prereqUnitIds: ['a1.21'],
  lessonIds: [] as string[],
} as const;

export const LESSON_ID = 'a2.04.l1';

/** Ledger §10: the maximum has been useless since a2.10.l2 took `.461..500`.
 *  The row COUNT is the only signal. `fr.a2.prepositions-essentielles` held
 *  exactly this many rows when a2.04 claimed `.129`, with max `.128` and one
 *  gap at `.098`. The batch refuses any count that is not this or this plus its
 *  own rows, and a row INSIDE the block that this build does not own is fatal
 *  whatever the total does (ledger §a2.14-13). */
export const ROW_COUNT_BEFORE = 127;

/** The whole theme, all levels, for the report. */
export const THEME_COUNT_BEFORE = 430;

export const ID_BLOCK = {
  from: 'fr.a2.prepositions-essentielles.129',
  to: 'fr.a2.prepositions-essentielles.168',
} as const;

/** a2.03's batch claimed a NAMESPACE when it meant a BLOCK and re-running it
 *  failed on eighteen rows a2.16 legitimately owned. This lesson lands in a
 *  namespace holding 127 rows nobody in this band authored, so the same defect
 *  would fail it on its first dry run rather than on somebody else's build.
 *  Every guard here is scoped to ID_BLOCK. */
export const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.prepositions-essentielles\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= 129 && n <= 168;
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS, BY UNIT ID, AND WHAT EACH ONE OWNS
 * ═══════════════════════════════════════════════════════════════════════ */

/** a1.21, Prepositions of Place. The prerequisite, and the owner of the
 *  contraction. Named on a learner surface rather than restated. */
export const CONTRACTION_UNIT = 'a1.21';

/** a1.22, Countries and Nationalities. The owner of the country system. */
export const COUNTRY_UNIT = 'a1.22';

/** a2.18, Prepositions of Time, seq 14, immediately after this one. It owns
 *  every temporal sense of `en` and `dans` and this lesson touches neither. */
export const TIME_UNIT = 'a2.18';

/** a2.27, Transportation, seq 26. It declares a2.04 as its prerequisite, so
 *  this lesson is NOT a leaf and the strict dependents check is kept. */
export const TRANSPORT_UNIT = 'a2.27';

/** a2.28, At the Doctor's, seq 27, whose `sub` is literally « Chez le
 *  médecin ». It is the only other unit in the curriculum whose body contains
 *  the word, and it USES the rule this lesson teaches. */
export const DOCTOR_UNIT = 'a2.28';

/** a1.29, The Partitive Articles. Named once, because `de` appears in both and
 *  they are different jobs. */
export const PARTITIVE_UNIT = 'a1.29';

/** What a1.21 shipped about the contraction, quoted rather than re-derived, so
 *  this lesson cannot say something a1.21 contradicts. a2.16 §3: assert the
 *  literal, because a back-reference to a unit id is not a variable. */
export const CONTRACTION_CLAIM =
  `À plus le is au and à plus les is aux, and ${unitRef(CONTRACTION_UNIT)} gave you that with de plus le is du and de plus les is des beside it.`;

/** What a1.22 shipped about countries, same treatment. */
export const COUNTRY_CLAIM =
  `A country's article decides between en, au and aux, and ${unitRef(COUNTRY_UNIT)} gave you the whole grid.`;

/** a1.21's own reframe, verbatim from prepositions-terms.ts:83. */
export const A121_REFRAME = 'One word goes straight onto the noun. A phrase needs de first.';

/** a1.22's own reframe, verbatim from pays-terms.ts:71. */
export const A122_REFRAME = 'Learn the country with its article. Everything else follows.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: a rule the learner runs while the sentence is already moving.
 *  Three clauses, one per behaviour, and it sits ON TOP of a1.22's reframe
 *  rather than beside it: a1.22 says learn the article, this says what each
 *  word then does to it. */
export const REFRAME = 'À folds the article in. En throws it out. Chez leaves it alone.';

/** Recorded the way prepositions-terms.ts records its rejections, because the
 *  next author on this track will consider the same four. */
export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'The place decides the preposition, so look at the place first.',
    why: 'THE BRIEF\'S OWN CANDIDATE, and a1.21 already rejected this exact shape under the name "Look at the word after it": diagnostic rather than generative, so it helps you read French and this lesson fixes something that happens while speaking. It is also eleven words that instruct nothing, and three of the branches it points at are a1.22\'s.',
  },
  {
    candidate: 'Five kinds of place, five words.',
    why: `The table of contents. Names the contents, instructs nothing, and three of its five rows are ${unitRef('a1.22')}\'s grid with the labels changed.`,
  },
  {
    candidate: 'Chez is for people.',
    why: 'True, and it is one row of four. That is the size of a term, and it is one.',
  },
  {
    candidate: 'Learn the place with its article.',
    why: `${Cap(unitRef('a1.22'))}\'s reframe with a different noun in it. A learner who has done ${unitRef('a1.22')} would read it as the same sentence and conclude the lesson is a revision.`,
  },
];

/** The move, in the imperative, for the roundup and the sheet. */
export const THE_MOVE =
  'Ask what the place IS before reaching for the word in front. A person takes chez. Everything else is a place, and its article decides the rest.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FOUR KINDS, WHICH ARE THE GRID
 * ═══════════════════════════════════════════════════════════════════════ */

export type Kind = 'person' | 'city' | 'country' | 'building';

export const KIND_ORDER: readonly Kind[] = ['person', 'city', 'country', 'building'];

/** The label a cell prints. a2.17 measured a THREE-COLUMN cell on a Pixel 6 at
 *  ELEVEN characters and a2.16 measured a five-column one at six, so this grid
 *  is three columns and every cell below is inside eleven. */
export const KIND_CELL_MAX = 11;

export const KIND_LABEL: Record<Kind, string> = {
  person: 'a person',
  city: 'a city',
  country: 'a country',
  building: 'a building',
};

/** The word, as the middle column prints it. */
export const KIND_WORD: Record<Kind, string> = {
  person: 'chez',
  city: 'à',
  country: 'en, au',
  building: 'à + le',
};

/** The example, as the right column prints it, and every one of them is an
 *  authored or imported row rather than a loose string. */
export const KIND_EXAMPLE: Record<Kind, string> = {
  person: 'chez Marie',
  city: 'à Paris',
  country: 'en France',
  building: 'au marché',
};

/** Which unit taught this row, so the grid can credit two of its four rows
 *  instead of pretending they are new. `null` is this lesson's own. */
export const KIND_OWNER: Record<Kind, string | null> = {
  person: null,
  city: CONTRACTION_UNIT,
  country: COUNTRY_UNIT,
  building: CONTRACTION_UNIT,
};

export const SORT_CLAIM =
  'Four kinds of place and four answers. Three of them you already have, and the fourth is the one English gives you no help with at all.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ARTICLE TABLE, WHICH IS THE OWNS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Behaviour = 'folds' | 'drops' | 'keeps';

export type ArticleRow = {
  word: string;
  withLe: string;
  withLa: string;
  behaviour: Behaviour;
  /** The unit that taught this row, or null where it is this lesson's. */
  owner: string | null;
  detail: string;
};

/** FOUR ROWS, THREE COLUMNS, EVERY CELL SEVEN CHARACTERS OR FEWER. This is the
 *  table neither predecessor could hold: a1.21 has rows one and two, a1.22 has
 *  row three, and row four is nobody's. */
export const ARTICLE_TABLE: readonly ArticleRow[] = [
  {
    word: 'à', withLe: 'au', withLa: 'à la', behaviour: 'folds', owner: CONTRACTION_UNIT,
    detail: `À and le fold into one word and à and la do not. ${Cap(unitRef(CONTRACTION_UNIT))} gave you both halves of that, and the half that does nothing matters as much as the half that does.`,
  },
  {
    word: 'de', withLe: 'du', withLa: 'de la', behaviour: 'folds', owner: CONTRACTION_UNIT,
    detail: `The same fold coming back, and ${unitRef(CONTRACTION_UNIT)} gave you it on the same screen as the one above. De and le give du, de and les give des. ${Cap(unitRef(PARTITIVE_UNIT))} owns the other du, the one that means some.`,
  },
  {
    word: 'en', withLe: 'en', withLa: 'en', behaviour: 'drops', owner: COUNTRY_UNIT,
    detail: `En does not fold with anything because there is nothing left to fold with: the article goes. « en France », never « en la France ». ${COUNTRY_CLAIM}`,
  },
  {
    word: 'chez', withLe: 'chez le', withLa: 'chez la', behaviour: 'keeps', owner: null,
    detail: 'And this one does nothing at all. Chez le, chez la, chez les, all written out, all separate words. It is the only place word in the language that leaves the article exactly where it found it.',
  },
];

export const ARTICLE_CELL_MAX = 7;

export const ARTICLE_CLAIM =
  'Every one of these words does something different to the article in front of the place, and there are only three things it can do.';

/** The row this lesson owns, by index, so a guard names it rather than counting
 *  from the end. */
export const CHEZ_ROW_INDEX = 3;

/* ══════════════════════════════════════════════════════════════════════════
 *  CHEZ: THE RULE, THE TRAP, AND THE MEASUREMENT BEHIND BOTH
 * ═══════════════════════════════════════════════════════════════════════ */

export const CHEZ_CLAIM =
  'Chez takes a person and never a place. Chez Marie, chez le médecin, chez moi. Never a building, never a shop, never a town.';

/** The pair that is the whole lesson, and the reason it is hard: English has ONE
 *  phrase for both of these and French has two that are not interchangeable. */
export const SHOP_CLAIM =
  'English says the baker\'s for the man and the bakery for the shop and lets you use either. French will not: the man takes chez and the shop takes à.';

/** Measured 2026-08-13 across every published row at every status. The corpus
 *  never makes the error the lesson forbids, so the guard can be absolute. */
export const CHEZ_EVIDENCE = {
  rowsHoldingChez: 283,
  withARespelling: 20,
  carryingTheBannedTie: 6,
  beforeAPlace: 0,
} as const;

/** What the corpus puts after `chez`, in order, from the enumeration. Used by
 *  the term rather than by a card, and asserted so a later author who reads
 *  "chez takes a person" has the count behind it. */
export const CHEZ_FOLLOWERS: readonly (readonly [string, number])[] = [
  ['le', 59], ['nous', 38], ['moi', 34], ['mes', 16], ['lui', 16],
  ['elle', 13], ['ma', 9], ['toi', 9], ['ses', 8], ['les', 8],
];

/** The wrong forms. These are DISPLAY STRINGS and never corpus rows: a row
 *  holding one of them would be served by the flashcard hub as French.
 *
 *  Each is paired with BOTH repairs, because « chez la boulangerie » has two
 *  right answers and picking the wrong one of the two is the second error. */
export const CHEZ_WRONG: readonly {
  wrong: string; person: string; place: string; why: string;
}[] = [
  {
    wrong: 'chez la boulangerie',
    person: 'chez le boulanger',
    place: 'à la boulangerie',
    why: 'The shop is not a person. Chez the baker or à the bakery, and both of them are the same door.',
  },
  {
    wrong: 'chez la banque',
    person: 'chez le banquier',
    place: 'à la banque',
    why: 'Nobody says the first one. The building takes à, and if you mean the person you have to name them.',
  },
  {
    wrong: "chez l'hôpital",
    person: 'chez le médecin',
    place: "à l'hôpital",
    why: 'A hospital is a building and a doctor is a person, and this is the pair where the two are genuinely different places to be going.',
  },
];

/** THE WRONG FORMS AS A SHAPE, NOT AS A LIST.
 *
 *  FOUND BY MUTATION. The first version of the guard was the three strings
 *  above and nothing else, and a mutation putting « chez la gare » into the
 *  reference sheet went through it: `gare` is not one of the three nouns the
 *  list happens to name. A learner error the guard can only see in the three
 *  shapes somebody thought of is not guarded.
 *
 *  So chez in front of a DEFINITE ARTICLE plus any of the place nouns this
 *  lesson prints is refused wherever the error is not the content, and the
 *  three strings above stay as the ones the traps and the errors screen use. */
export const CHEZ_PLACE_SHAPE =
  /(?<![\p{L}\p{N}-])chez\s+(le|la|les|l['’]|un|une|au|aux|du|des)\s*(boulangerie|banque|poste|restaurant|cinéma|cinema|gare|école|ecole|magasin|hôpital|hopital|pharmacie|maison|bureau|parc|musée|musee|hôtel|hotel|piscine|marché|marche|ville|France|Paris|Japon)/iu;

export const CHEZ_PLACE_MUST_FIRE: readonly string[] = [
  'chez la boulangerie',
  'chez la gare',
  "chez l'hôpital",
  'Je vais chez le restaurant.',
  'chez la France',
];

/** a2.17 §4: half of a learner surface is English by design and a shape built
 *  out of French reads it as French. These are the lines that must stay green,
 *  and the last two are this lesson's own copy. */
export const CHEZ_PLACE_MUST_NOT_FIRE: readonly string[] = [
  'chez le boulanger',
  'chez le médecin',
  'chez la dentiste',
  'chez Marie',
  'chez moi',
  'The shop is a building. If you meant the man it is chez le boulanger.',
  'Chez takes a person and never a place.',
];

/** The OTHER chez error, and it is the one a learner who has done a1.21 makes:
 *  they know à + le folds, so they fold this one too. */
export const CHEZ_FOLD_WRONG: readonly { wrong: string; right: string; why: string }[] = [
  { wrong: 'chez au médecin', right: 'chez le médecin', why: 'Nothing folds here. Chez leaves the article alone, so the two words stay two words.' },
  { wrong: 'chez du médecin', right: 'chez le médecin', why: 'Same again, coming from instead of going to, and chez still does nothing to the le.' },
  { wrong: 'au médecin', right: 'chez le médecin', why: `This is what a learner who only has ${unitRef('a1.21')} produces, and it is the sentence the scene stops on.` },
];

/** The generalisation set. Doctrine §B.1: a mission that makes the learner
 *  produce the answer for a word the lesson never showed them has taught the
 *  system rather than the list.
 *
 *  Every one of these is a PUBLISHED French word that this lesson does not
 *  import and does not name anywhere else, and the guards assert that in both
 *  directions. `kind` is the answer. */
export const UNSEEN: readonly { fr: string; en: string; kind: Kind; answer: string }[] = [
  { fr: 'le notaire', en: 'the solicitor', kind: 'person', answer: 'chez le notaire' },
  { fr: 'la piscine', en: 'the swimming pool', kind: 'building', answer: 'à la piscine' },
  { fr: 'Marseille', en: 'Marseille', kind: 'city', answer: 'à Marseille' },
  { fr: 'le Portugal', en: 'Portugal', kind: 'country', answer: 'au Portugal' },
];

export const UNSEEN_CLAIM =
  'Four places this lesson has not shown you, and you can answer all four without being told. That is what a rule is for.';

/** Every word in UNSEEN, so the guards can assert none of them reaches the
 *  vocabulary, the decks or the tranches. */
export const UNSEEN_WORDS: readonly string[] = UNSEEN.flatMap((u) => [u.fr, u.answer]);

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS LESSON MAY NOT SAY
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.18 is seq 14, one place after this one, and it owns every temporal sense
 *  of `en` and `dans`. Named on a learner surface so the learner knows it is
 *  coming rather than thinking it was forgotten. */
export const TIME_DEFERRAL =
  `En also means how long something takes and dans also means how far ahead something is, and both of those are ${unitRef(TIME_UNIT)}, which is the very next lesson.`;

/** The temporal phrases no surface may carry. Guarded as PHRASES rather than as
 *  the bare words, because `en France` and `en deux heures` share a word and
 *  only one of them is this lesson's. a2.17 §7: guard the THING, not the
 *  letters. */
export const TIME_FORBIDDEN: readonly string[] = [
  'en deux heures', 'en une heure', 'en dix minutes', 'en trois jours',
  'dans deux heures', 'dans une heure', 'dans dix minutes', 'dans trois jours',
  'dans une semaine', 'en une semaine', 'en un mois', 'dans un mois',
];

/** Shapes rather than strings, for the same reason. A number word behind `en`
 *  or `dans` is the temporal sense whatever the noun is. */
export const TIME_SHAPE =
  /(?<![\p{L}\p{N}-])(en|dans)\s+(un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|quelques)\s+(seconde|minute|heure|jour|semaine|mois|an|année)/iu;

export const TIME_MUST_FIRE: readonly string[] = [
  'Je finis en deux heures.',
  'Il arrive dans une semaine.',
  'On part dans trois jours.',
];

/** a2.17 §7 measured a guard built from French morphology firing on the English
 *  half of a learner surface, and invariants §8 makes half of every learner
 *  surface English by design. These are the lines that broke the first version
 *  of the shape above and they must stay green. */
export const TIME_MUST_NOT_FIRE: readonly string[] = [
  'Je vais en France.',
  'She lives in France and he lives in Japan.',
  'A person is not a place, and a place is not a person.',
  `Dans is one of the five ${unitRef('a1.21')} gave you and it is not this lesson.`,
  'en Espagne, en Italie, en Belgique',
];

/** a1.21 owns the five simple prepositions of place. This lesson may name them
 *  once, in a recap, and may not teach or drill them. Scoped to PRODUCTION
 *  surfaces by the test rather than to every string, because a roundup that
 *  says "sur and sous were a1.21's" has to be able to say it. */
export const A121_PREPOSITIONS: readonly string[] = ['sur', 'sous', 'dans', 'devant', 'derrière', 'entre'];

/** a1.22 owns countries as vocabulary. This lesson uses four of them as
 *  EXAMPLES and builds no country vocabulary section, and every country it
 *  references is an imported id asserted by id rather than by spelling. */
export const COUNTRY_IDS: readonly string[] = [
  'fr.a1.pays-et-nationalites.001',  // la France
  'fr.a1.pays-et-nationalites.051',  // le Japon
  'fr.a1.pays-et-nationalites.011',  // les États-Unis
];

/** Nationalities, continents and the -e gender rule are all a1.22's and none of
 *  them appears here. Guarded by absence. */
export const COUNTRY_FORBIDDEN: readonly string[] = [
  'français', 'française', 'japonais', 'américain', 'nationalité', 'nationality',
  "l'Europe", "l'Afrique", "l'Asie", "l'Amérique", 'continent',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLING DECISIONS, MEASURED
 * ═══════════════════════════════════════════════════════════════════════ */

/** The preposition `en`, unstressed, in front of a country. Read off a1.22's
 *  `toRespell` for all five of its feminine countries (`[ahⁿ FRAHⁿSS]`,
 *  `[ahⁿ behl-ZHEEK]`) and confirmed by fr.sons.nasales.029, which publishes
 *  `AHⁿ FRAHⁿS` inside a sentence. Never `ahn`. */
export const EN_RESPELL = 'ahⁿ';

/** /ɛ̃/, THE VOWEL OF `médecin`, `copain`, `rien` AND `reviens`, AND THE ONE
 *  DECISION IN THIS BUILD THAT COULD HAVE GONE TWO WAYS.
 *
 *  Measured across every published row: `AHⁿ` 454 (which is /ɑ̃/ and not this
 *  vowel), `EHⁿ` 129, `Aⁿ` 63. For `médecin` specifically the corpus holds two
 *  clean forms and three broken ones:
 *
 *      mayd-SEHⁿ   fr.sons.alphabet.224, fr.sons.nasales.144, fr.sons.voyelles.229
 *      mayd-SAⁿ    fr.a1.metiers.274, fr.a1.metiers.275
 *      mayd-SAN    fr.a2.systeme-de-sante.001, fr.sons.faux-amis.027   BROKEN
 *      med-SAN     fr.a1.rp-sante.001                                  BROKEN
 *      mehd-SAN    fr.b1.soins.032, fr.b2.soins.051                    BROKEN
 *
 *  a1.22 measured that the fr.sons.* rows follow the convention and the fr.a1.*
 *  vocabulary rows do not, nine times out of nine, and that holds here: all
 *  three `SEHⁿ` rows are sons rows and both `SAⁿ` rows are an a1 theme. So the
 *  house value is EHⁿ, it was READ OFF three published rows rather than
 *  invented (a2.16 §7), and it matches `ko-PEHⁿ` in fr.sons.nasales.157 which
 *  this lesson imports and prints on the same screen.
 *
 *  This is a2.17 §2's `house` reason and NOT its `blind` one, and the two are
 *  separate fields in REPAIRS below for exactly that reason. */
export const EN_IN = 'EHⁿ';

export const RESPELL_CONVENTION =
  `The preposition en is ${EN_RESPELL} and the vowel of médecin is ${EN_IN}. Both were read off published rows rather than chosen.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUTHORED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Role = 'sort' | 'phrase' | 'contrast' | 'person' | 'place' | 'scene' | 'talk';

export type PrepRow = Omit<Item, 'drills'> & {
  drills: string[];
  role: Role;
  /** Which of the four kinds this row is evidence for, where it is evidence for
   *  one, so a section names a KIND rather than restating a list of ids.
   *
   *  NAMED placeKind AND NOT kind. `Item` already has a `kind` and it means
   *  word/phrase/sentence; an intersection type with two different `kind`s
   *  reduces to `never` and every read off the row stops compiling. */
  placeKind?: Kind;
};

const P = (n: number) => `fr.a2.prepositions-essentielles.${String(n).padStart(3, '0')}`;

const PH = (
  n: number, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], notes: string, placeKind?: Kind,
): PrepRow => ({
  id: P(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags: ['prepositions', 'lieu'], drills, version: 1, role, ...(placeKind ? { placeKind } : {}),
}) as PrepRow;

const S = (
  n: number, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], tags: string[], notes: string, placeKind?: Kind,
): PrepRow => ({
  id: P(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags, drills, version: 1, role, ...(placeKind ? { placeKind } : {}),
}) as PrepRow;

/** Corrections §4: a row carries `dictation` only where `dicteeMode()` puts it
 *  in LETTERS mode, and the batch runs the REAL function over every row that
 *  carries the drill AND over every row that does not, so a row that could be a
 *  target and is not gets reported rather than quietly dropped. */
const D = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const NO_D = ['sentence', 'flashcard', 'voiceflash', 'review'];
const PD = ['flashcard', 'voiceflash', 'review', 'dictation'];
const PN = ['flashcard', 'voiceflash', 'review'];

/** THE 26 AUTHORED ROWS.
 *
 *  NOT ONE HEADWORD AMONG THEM. Every noun and every person this lesson names
 *  is imported, and what is authored is the PHRASE — the noun with its
 *  preposition and its article, respelled — because that is the unit the lesson
 *  teaches and the corpus holds 283 rows of evidence for it and fourteen usable
 *  cards. Nothing here is a single gendered word, so nothing here can join
 *  a1.03's ending population, and the batch proves it through the real
 *  `endingPopulation` before and after. */
export const PREPOSITIONS_LIEU: PrepRow[] = [
  /* ── The four kinds, in ONE frame ─────────────────────────────────────────
   *
   * Corrections §3, for the ninth time in this band: the corpus is full of the
   * forms and holds no minimal pairs, because every published sentence was
   * written for its own theme and carries its own subject and its own verb.
   * These four differ by ONE thing.
   *
   * The frame was READ OFF fr.a2.verbes.261 (« Je vais au parc. »,
   * `zhuh veh oh PARK`), which a2.02 published at seq 5 and which this lesson
   * imports as a fifth row of the same shape, so the frame is somebody else's
   * rather than this build's invention. */
  S(129, 'Je vais chez le médecin.', "I am going to the doctor's.", `zhuh veh shay luh mayd-S${EN_IN}`, '/ʒə vɛ ʃe lə med.sɛ̃/', 'sort', NO_D, ['prepositions', 'lieu', 'chez'], 'A person, so chez, and the le stays exactly where it was. Nineteen letters, so the dictée takes the short version instead.', 'person'),
  S(130, 'Je vais à Paris.', 'I am going to Paris.', 'zhuh veh a pa-REE', '/ʒə vɛ a pa.ʁi/', 'sort', D, ['prepositions', 'lieu', 'ville'], 'A city has no article to fold with, so à goes straight on. Twelve letters.', 'city'),
  S(131, 'Je vais en France.', 'I am going to France.', `zhuh veh ${EN_RESPELL} FRAHⁿSS`, '/ʒə vɛ ɑ̃ fʁɑ̃s/', 'sort', D, ['prepositions', 'lieu', 'pays'], 'La France has an article and en throws it away. Fourteen letters, and the country half of this is a1.22\'s.', 'country'),
  S(132, 'Je vais au marché.', 'I am going to the market.', 'zhuh veh oh mar-SHAY', '/ʒə vɛ o maʁ.ʃe/', 'sort', D, ['prepositions', 'lieu'], `À and le folded into one word, which is ${unitRef('a1.21')}\'s rule with a shop behind it. Fourteen letters.`, 'building'),

  /* ── The phrases the corpus has evidence for and no cards for ─────────────
   *
   * « chez le médecin » is in twenty-two published sentences and not one of
   * them carries a respelling, so the commonest chez phrase in the language has
   * never reached a card. Five phrases, every one of them ≤ 16 letters and so
   * a dictée target in LETTERS mode. */
  PH(133, 'chez le médecin', "at the doctor's", `shay luh mayd-S${EN_IN}`, '/ʃe lə med.sɛ̃/', 'phrase', PD, 'Three words and they stay three words. This is the phrase the whole lesson is built to produce.', 'person'),
  PH(134, 'chez la dentiste', "at the dentist's", 'shay lah dahⁿ-TEEST', '/ʃe la dɑ̃.tist/', 'phrase', PD, 'The same word with la instead of le, and chez does nothing to that either. Dentiste is the same word for a man and a woman.', 'person'),
  PH(135, 'chez le boulanger', "at the baker's", 'shay luh boo-lahⁿ-ZHAY', '/ʃe lə bu.lɑ̃.ʒe/', 'phrase', PD, 'The man who bakes. Half of the pair this lesson exists for.', 'person'),
  PH(136, 'chez Marie', "at Marie's", 'shay ma-REE', '/ʃe ma.ʁi/', 'phrase', PD, 'A name, so there is no article to leave alone. Nine letters and the shortest thing in the lesson.', 'person'),
  PH(137, 'à la boulangerie', 'at the bakery', 'ah lah boo-lahⁿzh-REE', '/a la bu.lɑ̃ʒ.ʁi/', 'phrase', PD, `The shop where the man works. À and la do not fold, which ${unitRef('a1.21')} measured and this lesson leans on.`, 'building'),

  /* ── The pair, in sentences, and the line that joins them ─────────────────
   *
   * Two sentences that differ in every word except the verb, and a third that
   * says they are the same building. English has one phrase for both. */
  S(138, 'Je vais chez le boulanger.', "I am going to the baker's.", 'zhuh veh shay luh boo-lahⁿ-ZHAY', '/ʒə vɛ ʃe lə bu.lɑ̃.ʒe/', 'contrast', NO_D, ['prepositions', 'lieu', 'chez'], 'The person. Twenty-one letters, so the dictée takes the phrase on its own instead.', 'person'),
  S(139, 'Je vais à la boulangerie.', 'I am going to the bakery.', 'zhuh veh ah lah boo-lahⁿzh-REE', '/ʒə vɛ a la bu.lɑ̃ʒ.ʁi/', 'contrast', NO_D, ['prepositions', 'lieu'], 'The shop. Same errand, same door, and not one word in common with the line above except the first two.', 'building'),
  // `mem` AND NOT `MEHM`, WHICH IS A FALSE POSITIVE THE INVARIANTS DO NOT
  // RECORD. See MEME_FALSE_POSITIVE below: the house two-letter vowel spelling
  // takes the FIRST branch of `hasPlainNasal`, which has no rescue path at all,
  // so `MEHM` is flagged and `mem` is not, and `même` has no nasal vowel in it.
  // The value was read off fr.sons.jours-et-mois.133, « à la même date »
  // [ah lah mem DAHT], which is the same word in the same position.
  S(140, "C'est la même porte.", 'It is the same door.', 'seh lah mem PORT', '/sɛ la mɛm pɔʁt/', 'contrast', D, ['prepositions', 'lieu'], 'Fifteen letters, and it is the sentence that makes the pair worth learning rather than worth memorising.'),

  /* ── chez with a pronoun, which is where a learner meets it first ──────────
   *
   * Short, all four in LETTERS mode, and every one of them a frame the corpus
   * already uses hundreds of times without ever respelling it. */
  S(141, 'Je reste chez moi.', 'I am staying at my place.', 'zhuh REST shay MWAH', '/ʒə ʁɛst ʃe mwa/', 'person', D, ['prepositions', 'lieu', 'chez'], 'Fourteen letters. Chez moi is thirty-four published sentences and this is the first card.'),
  S(142, 'Il est chez lui.', 'He is at his place.', 'eel eh shay LÜEE', '/il ɛ ʃe lɥi/', 'person', D, ['prepositions', 'lieu', 'chez'], 'Twelve letters. The ü and the ee run together into one glide, the way lui always does.'),
  S(143, 'Elle est chez elle.', 'She is at her place.', 'ehl eh shay EHL', '/ɛl ɛ ʃe ɛl/', 'person', D, ['prepositions', 'lieu', 'chez'], 'Fifteen letters, and the reason this row is authored rather than imported is that the only published « chez elle » carries the tie glyph that renders as an underscore on a phone.'),
  S(144, 'On mange chez Marie.', "We are eating at Marie's.", 'ohⁿ MAHⁿZH shay ma-REE', '/ɔ̃ mɑ̃ʒ ʃe ma.ʁi/', 'person', D, ['prepositions', 'lieu', 'chez'], `Sixteen letters, at the limit. On rather than nous, which is ${unitRef('a2.01')}\'s rule and the register this whole level uses.`),

  /* ── The other three kinds, in the same frame as the sort ─────────────────
   *
   * One more country to prove the row is a rule rather than a fact about
   * France, and two buildings where the article does two different things. */
  S(145, 'Je vais au Japon.', 'I am going to Japan.', 'zhuh veh oh zhah-POHⁿ', '/ʒə vɛ o ʒa.pɔ̃/', 'place', D, ['prepositions', 'lieu', 'pays'], 'Thirteen letters. Au here is à plus le Japon, which is the same fold as au marché and nobody has ever said so.', 'country'),
  S(146, 'Je vais à la gare.', 'I am going to the station.', 'zhuh veh ah lah GAHR', '/ʒə vɛ a la ɡaʁ/', 'place', D, ['prepositions', 'lieu'], `Thirteen letters, and à la does not fold. Half of what ${unitRef('a1.21')} gave you is the half where nothing happens.`, 'building'),
  S(147, "Je vais à l'hôpital.", 'I am going to the hospital.', 'zhuh veh ah loh-pee-TAL', '/ʒə vɛ a lɔ.pi.tal/', 'place', D, ['prepositions', 'lieu'], "Fifteen letters, because the apostrophe is not a letter. À l' does not fold either, and this is the building behind the doctor.", 'building'),

  /* ── The scene ───────────────────────────────────────────────────────────
   *
   * Doctrine §B.2: somebody who started a sentence they could not finish. The
   * learner has the noun, has the verb, and stalls on a word of two letters. */
  S(148, 'Tu fais quoi cet après-midi ?', 'What are you doing this afternoon?', 'tü feh KWAH seh-tah-preh-mee-DEE', '/ty fɛ kwa sɛ.ta.pʁɛ.mi.di/', 'scene', NO_D, ['prepositions', 'lieu'], `Her question, and every word in it is one the learner has had since a1. The join between cet and après is a HYPHEN, which is ${unitRef('a2.16')} §7\'s decision for the whole project, because the tie glyph renders as an underscore on a phone.`),
  S(149, 'Ah, chez le médecin. Rien de grave ?', "Ah, the doctor's. Nothing serious?", `ah shay luh mayd-S${EN_IN} · RY${EN_IN} duh GRAHV`, '/a ʃe lə med.sɛ̃ ʁjɛ̃ də ɡʁav/', 'scene', NO_D, ['prepositions', 'lieu', 'chez'], 'She supplies the word and moves straight on, which is what makes it expensive: nothing visibly went wrong.'),
  S(150, 'Non, rien de grave.', 'No, nothing serious.', `nohⁿ RY${EN_IN} duh GRAHV`, '/nɔ̃ ʁjɛ̃ də ɡʁav/', 'scene', D, ['prepositions', 'lieu'], 'Fourteen letters. The answer the learner did have, arriving after the sentence they did not.'),

  /* ── The conversation, for the role play ─────────────────────────────────
   *
   * Four turns that are the whole lesson: a person, then a place, then the
   * choice between them made out loud. */
  S(151, 'Tu es chez toi ce soir ?', 'Are you at your place tonight?', 'tü eh shay TWAH suh SWAR', '/ty ɛ ʃe twa sə swaʁ/', 'talk', NO_D, ['prepositions', 'lieu', 'chez'], 'Seventeen letters, so the dictée cannot take it. Chez toi is the form a friend uses.'),
  S(152, 'Oui, je suis chez moi.', 'Yes, I am at my place.', 'wee zhuh swee shay MWAH', '/wi ʒə sɥi ʃe mwa/', 'talk', D, ['prepositions', 'lieu', 'chez'], 'Sixteen letters, exactly at the limit. The same phrase in the answer, which is how French answers this question.'),
  S(153, 'On se retrouve chez Marie ?', "Shall we meet at Marie's?", 'ohⁿ suh ruh-TROOV shay ma-REE', '/ɔ̃ sə ʁə.tʁuv ʃe ma.ʁi/', 'talk', NO_D, ['prepositions', 'lieu', 'chez'], 'A person, so chez and no article at all, because a name does not have one.'),
  S(154, 'Non, on se retrouve à la gare.', 'No, we are meeting at the station.', 'nohⁿ ohⁿ suh ruh-TROOV ah lah GAHR', '/nɔ̃ ɔ̃ sə ʁə.tʁuv a la ɡaʁ/', 'talk', NO_D, ['prepositions', 'lieu'], 'And a place, so à and the article stays visible. Two turns, two kinds, one decision.'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED SETS
 * ═══════════════════════════════════════════════════════════════════════ */

export const SORT_ROWS = PREPOSITIONS_LIEU.filter((r) => r.role === 'sort');
export const PHRASE_ROWS = PREPOSITIONS_LIEU.filter((r) => r.role === 'phrase');
export const CONTRAST_ROWS = PREPOSITIONS_LIEU.filter((r) => r.role === 'contrast');
export const PERSON_ROWS = PREPOSITIONS_LIEU.filter((r) => r.role === 'person');
export const PLACE_ROWS = PREPOSITIONS_LIEU.filter((r) => r.role === 'place');
export const SCENE_ROWS = PREPOSITIONS_LIEU.filter((r) => r.role === 'scene');
export const TALK_ROWS = PREPOSITIONS_LIEU.filter((r) => r.role === 'talk');

export const AUTHORED_IDS: string[] = PREPOSITIONS_LIEU.map((r) => r.id);

/** One authored row by its French, for a card that names it rather than indexes
 *  it. Throws: a card silently missing its row looks like a card that never
 *  wanted one. */
export function row(fr: string): PrepRow {
  const r = PREPOSITIONS_LIEU.find((x) => x.fr === fr);
  if (!r) throw new Error(`${unitRef('a2.04')}: no authored row for "${fr}".`);
  return r;
}

/** The sort row for a kind, so the grid reads from the cards rather than from a
 *  second copy of the same four sentences. a2.13 §6.2. */
export function sortRow(k: Kind): PrepRow {
  const r = SORT_ROWS.find((x) => x.placeKind === k);
  if (!r) throw new Error(`${unitRef('a2.04')}: no sort row for kind "${k}".`);
  return r;
}

/** NOT ONE HEADWORD IS AUTHORED. Asserted as an empty record rather than
 *  omitted, so a later author who adds one has to say so and has to face
 *  a1.03's ending population while doing it. */
export const AUTHORED_HEADWORDS: Record<string, string> = {};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE IMPORTED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Import = {
  id: string;
  fr: string;
  /** Which job the row does here, so a section names a role. */
  use: 'preposition' | 'person' | 'place' | 'chez-phrase' | 'a-phrase' | 'city' | 'country' | 'frame';
  why: string;
};

/** THIRTY-SEVEN ROWS OUT OF EIGHTEEN THEMES, AND EVERY NOUN AND EVERY PERSON
 *  THIS LESSON NAMES IS ONE OF THEM. Corrections §2 predicted the vocabulary
 *  would exist and it does; what it did not predict is that the PHRASES would
 *  not, which is why the authored count is 26 rather than the "almost unused
 *  block" the brief expects. */
export const IMPORTED: readonly Import[] = [
  // The preposition itself. a1.21 imported this exact row, so the two lessons
  // serve one card rather than two.
  { id: 'fr.sons.muettes.009', fr: 'chez', use: 'preposition', why: `The headword, [SHAY], and the row ${unitRef('a1.21')} imported. fr.sons.mots-essentiels.019 is a second copy in a second theme and is deliberately not taken.` },

  // The people. All six exist, two of them need a repair.
  { id: 'fr.a2.systeme-de-sante.001', fr: 'le médecin', use: 'person', why: 'The person the whole lesson is about. Respelling repaired; see REPAIRS.' },
  { id: 'fr.a2.systeme-de-sante.042', fr: 'le dentiste', use: 'person', why: 'The second, and the noun that is the same for a man and a woman, which is why chez la dentiste is authorable. Repaired.' },
  { id: 'fr.sons.muettes.038', fr: 'boulanger', use: 'person', why: 'ALREADY CORRECT at [boo-lahⁿ-ZHAY]. fr.a1.marche.021 holds a second copy at [luh boo-lahn-JAY] which is broken and which this lesson does not display; see NOT_REPAIRED.' },
  { id: 'fr.a1.animaux-domestiques.108', fr: 'le vétérinaire', use: 'person', why: 'The third person, clean, and the one the corpus already has a chez phrase for.' },
  { id: 'fr.a1.amis.011', fr: 'le copain', use: 'person', why: 'A person who is not a professional, so the rule is about people rather than about jobs. Repaired.' },
  { id: 'fr.a1.famille.025', fr: 'la tante', use: 'person', why: 'And a relative. [LAH TAHⁿT], already correct.' },

  // The places.
  { id: 'fr.a2.courses.024', fr: 'la boulangerie', use: 'place', why: 'The shop half of the pair. Repaired, and the repair is INVISIBLE to the shared checker; see REPAIRS.' },
  { id: 'fr.a1.la-ville.103', fr: 'la banque', use: 'place', why: 'Repaired, also invisible. fr.sons.consonnes.156 already publishes [BAHⁿK] and this row disagreed with it.' },
  { id: 'fr.a1.deplacements.003', fr: 'la gare', use: 'place', why: '[lah GAHR], clean, and the place the role play ends at.' },
  { id: 'fr.a1.la-ville.012', fr: "l'hôpital", use: 'place', why: "[loh-pee-TAL], clean. The building behind the doctor, and the à l' row of the contraction." },
  { id: 'fr.a1.au-restaurant.001', fr: 'le restaurant', use: 'place', why: 'Repaired. A building nobody would ever put chez in front of, which is what makes it a good deck card here.' },
  { id: 'fr.a1.marche.006', fr: 'le marché', use: 'place', why: '[luh mar-SHAY], clean, and the noun behind the fourth sort row.' },
  { id: 'fr.a1.la-ville.105', fr: 'la pharmacie', use: 'place', why: '[far-mah-SEE], clean. The second shop, and the one with no person attached to it in the corpus at all.' },

  // The chez phrases that already reached a card.
  { id: 'fr.a1.pronoms-essentiels.075', fr: 'chez toi', use: 'chez-phrase', why: '[shay twah], clean, and the form the role play uses.' },
  { id: 'fr.a2.pronoms-essentiels.055', fr: 'chez nous', use: 'chez-phrase', why: '[shay noo], clean, and already at a2.' },
  { id: 'fr.a1.amis.030', fr: 'Bienvenue chez moi', use: 'chez-phrase', why: 'Repaired, and the repair is a HOUSE one rather than a blind one; see REPAIRS.' },
  { id: 'fr.a1.amis.059', fr: "passer chez quelqu'un", use: 'chez-phrase', why: 'Repaired. « Somebody » is a person with no name and no article, and it is the third shape chez takes.' },
  { id: 'fr.a1.animaux-domestiques.130', fr: 'aller chez le vétérinaire', use: 'chez-phrase', why: 'ALREADY CORRECT and already carrying the article, so somebody wrote this lesson\'s central shape for an animal lesson years ago.' },
  { id: 'fr.a1.famille.124', fr: 'dormir chez', use: 'chez-phrase', why: 'One of three bare verb-plus-chez frames in one theme, all clean, all with no flashcard drill. See DRILL_ADDITIONS.' },
  { id: 'fr.a1.famille.125', fr: 'rester chez', use: 'chez-phrase', why: 'The second.' },
  { id: 'fr.a1.famille.126', fr: 'venir chez', use: 'chez-phrase', why: 'And the third, which is the verb the role play needs.' },
  { id: 'fr.a1.verbes-essentiels.026', fr: 'Elle reste chez elle ce week-end.', use: 'chez-phrase', why: 'Clean, and the only published chez SENTENCE with a respelling and no tie glyph that a learner at a2 can read whole.' },
  { id: 'fr.sons.nasales.157', fr: 'Vincent invite ses copains chez lui.', use: 'chez-phrase', why: 'Clean, no tie, and the row [ko-PEHⁿ] was read off for the copain repair.' },
  { id: 'fr.sons.voyelles.449', fr: 'Nous mangeons des crêpes sucrées chez ma grand-mère.', use: 'chez-phrase', why: 'Clean, no tie, and chez in front of a possessive plus a relative, which is the commonest shape of all.' },

  // The à phrases that already reached a card.
  { id: 'fr.a1.routines.064', fr: 'aller au marché', use: 'a-phrase', why: '[ah-LAY oh mar-SHAY], clean, and the fold the sort row leans on.' },
  { id: 'fr.a1.routines.063', fr: "aller à l'école", use: 'a-phrase', why: "[ah-LAY ah lay-KOHL], clean, and à l' not folding." },
  { id: 'fr.a1.routines.067', fr: 'rentrer à la maison', use: 'a-phrase', why: 'Repaired on both nasals, both of them visible, and both values read off other published rows.' },
  { id: 'fr.a2.verbes.261', fr: 'Je vais au parc.', use: 'frame', why: `THE FRAME. ${Cap(unitRef('a2.02'))} published it at seq 5 and the four authored sort rows are built on its respelling shape, so the frame is somebody else\'s.` },

  // The cities.
  { id: 'fr.sons.muettes.004', fr: 'Paris', use: 'city', why: 'The only city headword in the corpus, [pa-REE], clean.' },
  { id: 'fr.sons.elision.029', fr: 'de Paris', use: 'city', why: '[duh pa-REE], clean, and the coming-from half for a city, which has no article to fold.' },
  { id: 'fr.sons.elision.062', fr: "J'habite à Lyon.", use: 'city', why: 'Clean, no tie, and a second city so the row is a rule rather than a fact about Paris.' },
  { id: 'fr.a2.verbes.285', fr: 'Je viens de Paris.', use: 'city', why: `${Cap(unitRef('a2.02'))}\'s own row, clean. Its [vyaⁿ] is a variant of the house [VYEHⁿ] and not a violation, so it is imported untouched; invariants §9.` },

  // The countries, all a1.22's, named rather than taught.
  { id: 'fr.a1.pays-et-nationalites.001', fr: 'la France', use: 'country', why: `${Cap(unitRef('a1.22'))}\'s own row, [LAH FRAHⁿSS], repaired by ${unitRef('a1.22')} and clean.` },
  { id: 'fr.a1.pays-et-nationalites.051', fr: 'le Japon', use: 'country', why: `${Cap(unitRef('a1.22'))}\'s, [LUH zhah-POHⁿ], clean, and the masculine country the au row needs.` },
  { id: 'fr.a1.pays-et-nationalites.011', fr: 'les États-Unis', use: 'country', why: `${Cap(unitRef('a1.22'))}\'s, [LAY zay-tah-zü-NEE], clean, and the plural.` },
  { id: 'fr.sons.nasales.029', fr: 'Mon grand frère travaille en France.', use: 'country', why: 'The ONE published sentence in the corpus that puts en in front of a country AND carries a respelling. No tie. It is where EN_RESPELL was confirmed.' },
];

export const IMPORTED_IDS: readonly string[] = IMPORTED.map((i) => i.id);
export const EXPECTED_IMPORTED = 37;
export const EXPECTED_AUTHORED = 26;

/* ══════════════════════════════════════════════════════════════════════════
 *  A CARRY IS AN ADDITION TO THE SEED'S ENDING POPULATION EVEN WHEN IT IS NOT
 *  AN ADDITION TO THE DATABASE'S, AND EVERY GUARD IN THIS BAND MEASURES THE
 *  POPULATION AGAINST POSTGRES
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE ROWS THIS LESSON DISPLAYS AND DOES NOT OWN AS ITEMS.
 *
 *  Fifteen of the thirty-seven imports are GENDERED SINGLE-WORD NOUNS, and
 *  a1.03's `endingPopulation` is measured off THE SEED. Every one of the
 *  fifteen was absent from the seed, so carrying them through the cut ADDED
 *  fifteen rows to that population and moved four of a1.03's printed figures:
 *
 *      -e     904 -> 909      -in   45 -> 47
 *      -ant    18 ->  19      -al   11 -> 12
 *
 *  The batch's own check ran the REAL `endingPopulation` and reported the
 *  population unchanged, and it was right and it was answering a different
 *  question: in POSTGRES these rows already exist, so importing them adds
 *  nothing. In the SEED they did not, and a carry is what puts them there.
 *  Nothing in the doctrine, the invariants, the corrections or the ledger says
 *  this, because no A2 lesson before this one imported a gendered noun: a verb,
 *  an adjective and an adverb never carry one.
 *
 *  a1.22 met the same arithmetic from the other side and RESOLVED IT BY
 *  RE-RENDERING a1.03, because its whole subject was the gender of countries
 *  and there was no country set that left the counts alone. THIS LESSON'S
 *  SUBJECT IS THE WORD IN FRONT OF THE NOUN, and it teaches no noun's gender
 *  anywhere, so the move is avoidable and invariants §5 applies as written:
 *  withdraw rather than argue.
 *
 *  So the fifteen are DISPLAY ROWS. Their French, their gloss and their
 *  repaired respelling are printed on cards out of the manifest, the batch
 *  still repairs them in Postgres, and they are not `itemIds` of this lesson
 *  and not released into any tranche. The vocabulary already has homes:
 *  a1.22 decks the countries and `a2.28` is called « Chez le médecin ». */
export const DISPLAY_ONLY_IDS: readonly string[] = [
  'fr.a1.deplacements.003',          // la gare
  'fr.a1.marche.006',                // le marché
  'fr.sons.muettes.038',             // boulanger
  'fr.a1.famille.025',               // la tante
  'fr.a1.pays-et-nationalites.001',  // la France
  'fr.a1.pays-et-nationalites.051',  // le Japon
  'fr.a1.amis.011',                  // le copain
  'fr.a1.animaux-domestiques.108',   // le vétérinaire
  'fr.a1.au-restaurant.001',         // le restaurant
  'fr.a1.la-ville.012',              // l'hôpital
  'fr.a1.la-ville.103',              // la banque
  'fr.a1.la-ville.105',              // la pharmacie
  'fr.a2.courses.024',               // la boulangerie
  'fr.a2.systeme-de-sante.001',      // le médecin
  'fr.a2.systeme-de-sante.042',      // le dentiste
];

/** The imports this lesson DOES own as items: every one of them a phrase or a
 *  sentence, and not one of them a gendered single word. */
export const ITEM_IMPORT_IDS: readonly string[] = IMPORTED_IDS.filter((id) => !DISPLAY_ONLY_IDS.includes(id));

export const EXPECTED_DISPLAY_ONLY = 15;
export const EXPECTED_ITEM_IMPORTS = 22;

/** Six of the fifteen were ALREADY in the seed before this build, put there by
 *  whoever owns them, so they are already in a1.03's population and this build
 *  neither adds nor removes them. Measured against the committed seed at
 *  version 36 by `scripts/_a204_genre_impact.ts`.
 *
 *  The OTHER NINE are the ones the first run of this merge introduced, and they
 *  are what moved the four printed figures. The merge removes any display-only
 *  row it finds in the seed that is not on this list and that no lesson
 *  references, so a re-merge after this narrowing cleans up after the one
 *  before it. */
export const DISPLAY_ONLY_ALREADY_IN_SEED: readonly string[] = [
  'fr.sons.muettes.038',             // boulanger
  'fr.a1.famille.025',               // la tante
  'fr.a1.deplacements.003',          // la gare
  'fr.a1.marche.006',                // le marché
  'fr.a1.pays-et-nationalites.001',  // la France, put there by a1.22
  'fr.a1.pays-et-nationalites.051',  // le Japon, the same
  // ADDED 2026-08-18, measured against the seed. This lesson would strip these
  // three as its own leftovers, and they are not: a2.27 references .103 and
  // .105 and a2.26 references courses.024, all three carrying a `flashcard`
  // drill, so a strip would blank a card in somebody else's lesson.
  'fr.a1.la-ville.103',              // referenced by a2.27
  'fr.a1.la-ville.105',              // referenced by a2.27
  'fr.a2.courses.024',               // referenced by a2.26
];

/** a1.03's ending population measured off the SEED, through the real function,
 *  against the committed seed at version 36.
 *
 *      1890   baseline
 *      1899   carrying every import          four printed figures move
 *      1890   carrying only what is owned    nothing moves
 */
export const A103_SEED_POPULATION = 1890;

/** The four figures the full carry moved, recorded so the report and the ledger
 *  quote the same numbers the test does. */
export const A103_FIGURES_MOVED = [
  { ending: '-e', from: 904, to: 909 },
  { ending: '-in', from: 45, to: 47 },
  { ending: '-ant', from: 18, to: 19 },
  { ending: '-al', from: 11, to: 12 },
] as const;

/** One imported row by id, for a section that names it. */
export const importOf = (id: string): Import => {
  const i = IMPORTED.find((x) => x.id === id);
  if (!i) throw new Error(`${unitRef('a2.04')}: ${id} is not in IMPORTED.`);
  return i;
};

/** Imported rows by job. */
export const importsFor = (use: Import['use']): readonly Import[] => IMPORTED.filter((i) => i.use === use);

/* ══════════════════════════════════════════════════════════════════════════
 *  ROWS READ AND NOT IMPORTED
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.16 §6 and a2.03 §8: the next author reads this file's header first, so
 *  what was looked at and rejected belongs here rather than in a report. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.liaisons.177', fr: 'chez elle', why: `CARRIES U+203F. [shay-z‿EHL] renders as a low underscore on a Pixel 6 (invariants §2, ${unitRef('a2.13')} §3). It is the only published card-ready « chez elle » and it is why fr.a2.prepositions-essentielles.143 is authored.` },
  { id: 'fr.sons.liaisons.157', fr: 'Nous allons chez ma sœur dimanche.', why: 'CARRIES U+203F, twice.' },
  { id: 'fr.sons.liaisons.059', fr: 'Mon frère travaille aux États-Unis.', why: 'CARRIES U+203F. It is the only card-ready « aux États-Unis » sentence in the corpus, so the plural country row has no importable sentence at all and is shown as a headword only.' },
  { id: 'fr.sons.nasales.109', fr: 'Nous allons chez Yvon pour manger du thon.', why: 'CARRIES U+203F.' },
  { id: 'fr.sons.nasales.075', fr: 'Ils vont à Lyon.', why: 'CARRIES U+203F. fr.sons.elision.062 says the same thing without one.' },
  { id: 'fr.sons.alphabet.455', fr: 'À la banque, on épelle mon nom.', why: 'CARRIES U+203F.' },
  { id: 'fr.sons.nasales.032', fr: "L'étudiant rentre chez lui en chantant.", why: 'Clean and usable, and it holds « en chantant », which is neither a place nor a time but a third sense of en that no unit in the curriculum owns. Importing it would put a fourth en on a screen that says there are two.' },
  { id: 'fr.b2.rp-maison.016', fr: 'se sentir chez soi', why: 'b2, idiomatic, and its respelling closes a nasal with a plain n. The idiom is worth having and it is not worth having here.' },
  { id: 'fr.a1.salutations-de-base.023', fr: 'bienvenue chez nous', why: 'Two faults in one row: [byan-VNEW] has a plain nasal AND spells /y/ as NEW rather than Ü. Repairing two conventions on a row this lesson can do without is scope it did not need. fr.a1.amis.030 says the same thing.' },
  { id: 'fr.a1.amis.070', fr: 'le voisin', why: `FLAGGED at [luh-vwah-ZAN] and there is NO clean published form anywhere: the corpus holds vwah-ZAN, vwah-ZIHN and vwah-ZEHN and not one superscript. Repairing it would mean inventing the value rather than reading it off, which ${unitRef('a2.16')} §7 is against. The lesson uses le copain instead.` },
  { id: 'fr.sons.couleurs.016', fr: 'Bordeaux', why: 'IT IS A COLOUR. The only Bordeaux headword in the corpus is [bor-DOH] in the colours theme, and a lesson looking for French cities will find it and think it has one.' },
  { id: 'fr.a2.pays-et-nationalites.001', fr: "Beaucoup de touristes viennent d'Allemagne et du Japon.", why: 'The a2 country namespace exists and holds seventeen rows about immigration and citizenship. None of it is prepositions of place and none is imported.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLING REPAIRS
 *
 *  ONE TABLE, NOT TWO. Corrections §6 splits it by ROW into VISIBLE and
 *  INVISIBLE and a2.17 §2 measured that the real split is by NASAL: a row can
 *  hold one the checker sees and one it does not, so it belongs in both tables
 *  at once. Every entry carries `half` — the value you get by repairing exactly
 *  what `hasPlainNasalFor` reports — and all three values are asserted through
 *  the real function in the batch, the merge and the test.
 *
 *  `blind` and `house` are separate and mutually exclusive, which a2.17 needed
 *  and corrections §6 does not have: a nasal the checker cannot see and a house
 *  convention the minimal repair does not reach are two different reasons for
 *  one symptom, and the guard asserts `(half !== to) === (blind || house)`.
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string; fr: string; from: string; to: string;
  /** The value you get by repairing only what `hasPlainNasalFor` reports. */
  half: string;
  /** True when the row carries a nasal the checker CANNOT see. */
  blind: boolean;
  /** True when `to` differs from `half` for a house-convention reason. */
  house: boolean;
  /** The published row the repaired value was read off, or null. */
  readOff: string | null;
  /** The exact substring that must still be present in `readOff`'s respelling,
   *  compared case-insensitively.
   *
   *  This field exists because the first version of the manifest compared the
   *  last whitespace-token of `to` against the whole of the read-off row and
   *  refused `la boulangerie`, whose value was read off the BAKER rather than
   *  off the bakery: what was borrowed is the nasal syllable `lahⁿ` and not the
   *  whole word. A read-off claim is about a syllable at least as often as it
   *  is about a word, and a guard that assumes the word is wrong more than half
   *  the time. */
  readOffToken: string | null;
  why: string;
};

export const REPAIRS: readonly Repair[] = [
  {
    id: 'fr.a2.systeme-de-sante.001', fr: 'le médecin',
    from: 'mayd-SAN', half: 'mayd-SAⁿ', to: `mayd-S${EN_IN}`, blind: false, house: true,
    readOff: 'fr.sons.nasales.144', readOffToken: 'mayd-SEHⁿ',
    why: 'FLAGGED, so it is a violation and not a variant. The minimal repair is mayd-SAⁿ and the house value is mayd-SEHⁿ: three sons rows publish it (fr.sons.alphabet.224, fr.sons.nasales.144, fr.sons.voyelles.229) against two a1 rows for SAⁿ, and a1.22 measured that the sons rows follow the convention and the a1 vocabulary rows do not. This is a2.17 §2\'s `house` reason.',
  },
  {
    id: 'fr.a2.systeme-de-sante.042', fr: 'le dentiste',
    from: 'dahn-TEEST', half: 'dahⁿ-TEEST', to: 'dahⁿ-TEEST', blind: false, house: false,
    readOff: null, readOffToken: null,
    why: 'One nasal, visible, because the n is followed by a hyphen rather than by a letter. The minimal repair is the right one.',
  },
  {
    id: 'fr.a2.courses.024', fr: 'la boulangerie',
    from: 'lah boo-lahnzh-REE', half: 'lah boo-lahnzh-REE', to: 'lah boo-lahⁿzh-REE', blind: true, house: false,
    readOff: 'fr.sons.muettes.038', readOffToken: 'lahⁿ',
    why: 'THE CHECKER SEES NOTHING HERE. The n of `lahnzh` is followed by a z inside the token, which is corrections §6 exactly, so the stored value is unflagged AND wrong and a build that trusted the checker would leave it. fr.sons.muettes.038 publishes `boo-lahⁿ-ZHAY` for the man and this row is the shop.',
  },
  {
    id: 'fr.a1.la-ville.103', fr: 'la banque',
    from: 'BAHNK', half: 'BAHNK', to: 'BAHⁿK', blind: true, house: false,
    readOff: 'fr.sons.consonnes.156', readOffToken: 'BAHⁿK',
    why: 'The second blind row. `AHN` followed by a K, so neither branch of the checker fires, and fr.sons.consonnes.156 already publishes BAHⁿK. Bringing one row into line with another is not inventing a spelling.',
  },
  {
    id: 'fr.a1.au-restaurant.001', fr: 'le restaurant',
    from: 'luh rehs-toh-RAHN', half: 'luh rehs-toh-RAHⁿ', to: 'luh rehs-toh-RAHⁿ', blind: false, house: false,
    readOff: null, readOffToken: null,
    why: 'One nasal, visible, at the end of the string.',
  },
  {
    id: 'fr.a1.amis.011', fr: 'le copain',
    from: 'LUH koh-PAN', half: 'LUH koh-PAⁿ', to: `LUH koh-P${EN_IN}`, blind: false, house: true,
    readOff: 'fr.sons.nasales.157', readOffToken: 'PEHⁿ',
    why: 'The same /ɛ̃/ decision as médecin, and the row it is read off is one this lesson imports and prints on the same screen: fr.sons.nasales.157 holds « ses copains » as ko-PEHⁿ.',
  },
  {
    id: 'fr.a1.routines.067', fr: 'rentrer à la maison',
    from: 'rahn-TRAY ah lah meh-ZOHN', half: 'rahⁿ-TRAY ah lah meh-ZOHⁿ', to: 'rahⁿ-TRAY ah lah meh-ZOHⁿ', blind: false, house: false,
    readOff: 'fr.a1.maison.001', readOffToken: 'meh-ZOHⁿ',
    why: 'TWO nasals and the checker sees BOTH, because both are followed by a hyphen or by nothing. fr.a2.verbes.016 publishes rahⁿ-TRAY and fr.a1.maison.001 publishes lah meh-ZOHⁿ, so neither half is this build\'s invention.',
  },
  {
    id: 'fr.a1.amis.059', fr: "passer chez quelqu'un",
    from: 'pah-SAY SHAY kehl-KUHN', half: 'pah-SAY SHAY kehl-KUHⁿ', to: 'pah-SAY SHAY kehl-KUHⁿ', blind: false, house: false,
    readOff: null, readOffToken: null,
    why: 'One nasal, visible, at the end.',
  },
  {
    id: 'fr.a1.amis.030', fr: 'Bienvenue chez moi',
    from: 'byan-vuh-NÜ SHAY MWAH', half: 'byaⁿ-vuh-NÜ SHAY MWAH', to: 'byehⁿ-vuh-NÜ SHAY MWAH', blind: false, house: true,
    readOff: 'fr.sons.nasales.078', readOffToken: 'byehⁿ',
    why: `The third /ɛ̃/ row, and ${unitRef('a2.17')} settled this exact word one lesson ago: bien is BYEHⁿ, read off fr.sons.nasales.078, and ${unitRef('a2.17')} repaired fr.sons.mots-essentiels.045 to match. This row is the same vowel in the same word inside a phrase.`,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  A FALSE POSITIVE NO DOCUMENT IN THIS BAND RECORDS, AND IT IS THE MIRROR
 *  IMAGE OF a2.14 §1
 * ═══════════════════════════════════════════════════════════════════════ */

/** `hasPlainNasal` has TWO branches and only the second one has rescues.
 *
 *      branch 1   /(?:AH|OH|EH|UH|EU|AI|OU)[NM](?![A-Za-zÀ-ÿ])/     NO RESCUE
 *      branch 2   a lone vowel closed by N or M, then two rescues:
 *                 a doubled nasal in the French, and a vowel after the m or n
 *
 *  So the HOUSE TWO-LETTER VOWEL SPELLING CANNOT BE RESCUED. `même` is /mɛm/
 *  with a real /m/ and no nasal vowel anywhere, and:
 *
 *      MEHM   FLAGGED     branch 1, and there is no way back
 *      mem    not flagged branch 2, rescued by the `ême` in the French
 *
 *  Measured 2026-08-13: SEVEN published rows spell it `MEHM` and the checker
 *  flags every one of them, including a2's own fr.a2.expressions-argot.032 and
 *  two `quand même` rows. One row spells it `mem` and passes:
 *  fr.sons.jours-et-mois.133, « à la même date » [ah lah mem DAHT].
 *
 *  a2.14 §1 found the checker MISSING a bare-vowel spelling where it SEES the
 *  two-letter one. This is the same asymmetry pointing the other way, and it is
 *  worse, because a2.14's costs a repair and this one cannot be repaired at all
 *  in the notation the house prefers.
 *
 *  a2.04 takes the invariants §3 remedy for `automne`: choose a form that
 *  avoids the shape and say so. `mem` is that form, it was READ OFF a published
 *  row in the same word and the same position, and NOTHING IS REPAIRED — the
 *  seven `MEHM` rows are correct French and a variant is not a violation. */
export const MEME_FALSE_POSITIVE = {
  word: 'même',
  flagged: 'MEHM',
  clean: 'mem',
  rowsSpellingItFlagged: 7,
  readOff: 'fr.sons.jours-et-mois.133',
  why: 'The first branch of hasPlainNasal matches a two-letter house vowel plus M or N with no rescue path, so a real /m/ after EH cannot pass. The bare-vowel spelling takes the second branch and is rescued by the vowel behind the m in the French.',
} as const;

export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = REPAIRS.filter((r) => !r.blind);
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = REPAIRS.filter((r) => r.blind);
export const ALL_REPAIRS: readonly Repair[] = REPAIRS;

export const EXPECTED_REPAIRS = 9;
export const EXPECTED_REPAIRS_BLIND = 2;
export const EXPECTED_REPAIRS_HOUSE = 3;

/** Rows this build read, found broken and did NOT repair, with the reason.
 *  Invariants §9: repair only what you display. */
export const NOT_REPAIRED: readonly { id: string; fr: string; respell: string; why: string }[] = [
  { id: 'fr.a1.marche.021', fr: 'le boulanger', respell: 'luh boo-lahn-JAY', why: 'FLAGGED, and this lesson displays fr.sons.muettes.038 instead, which is already correct. Repairing a row nobody shows is how a build acquires a defect it cannot test.' },
  { id: 'fr.sons.faux-amis.027', fr: 'le médecin', respell: 'LUH mayd-SAN', why: 'FLAGGED. A second copy of a repaired row in a theme this lesson does not touch.' },
  { id: 'fr.b1.soins.032', fr: 'le médecin', respell: 'luh mehd-SAN', why: 'FLAGGED, b1.' },
  { id: 'fr.b1.soins.051', fr: 'le dentiste', respell: 'dahn-TEEST', why: 'FLAGGED, b1, and identical to the a2 row this build does repair.' },
  { id: 'fr.a1.metiers.001', fr: 'un médecin', respell: 'UHN mayd-SAN', why: 'FLAGGED, twice, and not displayed.' },
  { id: 'fr.a1.rp-sante.001', fr: 'un médecin', respell: 'med-SAN', why: 'FLAGGED, and not displayed.' },
  { id: 'fr.a2.disciplines.023', fr: 'un médecin', respell: 'uhn mayd-SAN', why: 'FLAGGED, twice, and not displayed. Seven rows in the database spell this word with a plain nasal and this build repairs the one it shows.' },
];

/** No row this lesson imports lacks a respelling. Asserted empty rather than
 *  omitted, which is a2.17's precedent. */
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [];

/** Rows that could not be drawn, spoken or spelled with the drills they had. */
export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string[]; why: string }[] = [
  { id: 'fr.a1.famille.124', fr: 'dormir chez', add: ['flashcard'], why: 'Carried only `voiceflash` and `review`, so it could not be released into a deck, and it is one of the three verb frames the chez act shows.' },
  { id: 'fr.a1.famille.125', fr: 'rester chez', add: ['flashcard'], why: 'The same.' },
  { id: 'fr.a1.famille.126', fr: 'venir chez', add: ['flashcard'], why: 'The same, and it is the frame the role play uses.' },
  { id: 'fr.sons.nasales.157', fr: 'Vincent invite ses copains chez lui.', add: ['flashcard', 'voiceflash'], why: 'Carried only `sentence` and `review`, and it is the row ko-PEHⁿ was read off.' },
  { id: 'fr.sons.voyelles.449', fr: 'Nous mangeons des crêpes sucrées chez ma grand-mère.', add: ['flashcard', 'voiceflash'], why: 'The same.' },
  { id: 'fr.sons.nasales.029', fr: 'Mon grand frère travaille en France.', add: ['flashcard', 'voiceflash'], why: 'The same, and it is the only card-ready en-plus-country sentence in the corpus.' },
  { id: 'fr.sons.elision.062', fr: "J'habite à Lyon.", add: ['flashcard', 'voiceflash'], why: 'Carried `sentence` and `review` only.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT NO EAR QUESTION MAY ASK
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.10 and a2.11 both enforce this with a list rather than reporting it,
 *  because a sentence in a report cannot fail. A `listenChoose` offering two
 *  options that differ ONLY by a member of one group has no correct answer.
 *
 *  The brief asks for `en` against its nasal neighbours and it is right. The
 *  pair it does not name is `à` against nothing at all: unstressed `à` in
 *  « je vais à Paris » is close to inaudible, so an ear question asking whether
 *  it was there is asking about a sound the recording may not contain. */
export const NO_EAR_QUESTION: readonly (readonly [string, string])[] = [
  ['en', 'an'],
  ['en', 'em'],
  ['à', ''],
  ['a', 'à'],
  ['au', 'aux'],
  ['du', 'des'],
];

export const NO_EAR_CLAIM =
  'Au and aux are one sound, du and des are close to one, and an unstressed à can vanish altogether. Nothing in this lesson is asked by ear.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE COUNTS THE THREE LAYERS AGREE ON
 * ═══════════════════════════════════════════════════════════════════════ */

export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 30;
export const EXPECTED_REFRAME_USES = 7;
export const EXPECTED_TRAP_DRILLS = 2;
export const EXPECTED_TERMS = 8;
export const SHEET_ID = 'sheet.a2.04.lieu';

/** The mission-row title ceiling, measured by a2.13 on a Pixel 6 and house-wide
 *  since. The hub draws the title beside a type chip and the chip wins. */
export const TITLE_MAX = 27;
export const TITLE_TARGET = 25;
