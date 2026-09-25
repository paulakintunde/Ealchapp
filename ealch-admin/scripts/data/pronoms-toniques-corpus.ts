// a2.36.l1 « Les pronoms toniques » — the authored corpus and the citation
// constants. **DRAFT.** Nothing here has been applied to Postgres or merged into
// seed.json.
//
//   pnpm tsx scripts/author-pronoms-toniques-batch.ts --dry    guards only
//   (the apply and the merge are for later, and only on Paul's word)
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THIS UNIT EXISTS
// ══════════════════════════════════════════════════════════════════════════
//
// No lesson in the corpus teaches the stressed set. a1.05 « Les pronoms
// sujets » parks it on its reference sheet and promises a lesson that was never
// built (quoted verbatim below as `A105_DEFERRAL`, and the batch reads it out
// of the shipped seed rather than trusting this file). Meanwhile the corpus
// uses the forms everywhere as unexplained chunks, and B1 now assumes them.
//
// ══════════════════════════════════════════════════════════════════════════
//  POSITION: seq 36, AFTER THE BILAN, AND THAT IS PAUL'S CALL, NOT THIS FILE'S
// ══════════════════════════════════════════════════════════════════════════
//
// `a2.36` is the next free A2 id. `seq: 36` puts it after a2.35 « Bilan A2 »
// (seq 35) so it collides with nothing while it is a draft. **The final trail
// position is Paul's decision**, after seeing it on the phone. Moving it is not
// free: every lesson that cites another by label resolves the label through
// `unit.seq`, so a resequence moves printed lesson numbers across the band, and
// a2.35's test asserts the capstone is the LAST A2 unit (see the batch header).
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE JOB PICKS THE SET. A pronoun with a verb right after it is the subject
//   set a1.05 taught. A pronoun with no verb right after it (after a little
//   word, after c'est, alone as an answer, in front for weight, after que, or
//   joined with et) is the stressed set. Four of the eight change shape
//   (je/moi, tu/toi, il/lui, ils/eux) and four do not (elle, nous, vous,
//   elles).
//
//   This is the SEVENTH turn of doctrine §B.7's recurring shape, « what comes
//   next decides » (a2.02's line). a2.24 took the sixth turn on `lui` alone and
//   shipped `STRESSED_RULE` as its trap two; this lesson extends it to all
//   eight and says so.
//
// QUOTED, NEVER TAUGHT (every cited unit was READ in the shipped seed on
// 2026-09-25, and what each one actually owns is recorded next to it):
//
//   a1.05  subject pronouns, lesson 9 in A1. Owns je..elles before a verb. Its
//          sheet `sheet-stressed` names the stressed set and DEFERS it. It
//          says « nous, vous and elles appear in both sets » and leaves out
//          elle, which is also in both. Not corrected there (not this build's
//          file); this lesson says four, and the report says why.
//   a1.01  greetings, lesson 1 in A1. Ships « Et toi ? », « Et vous ? » and
//          « Excusez-moi » as fixed chunks. No rule.
//   a1.18  negation, lesson 21 in A1. OWNS « moi non plus » (card s18-non-plus,
//          and « Moi aussi » only as the contrast). Cited, not re-taught.
//   a2.04  prepositions of place, lesson 13 in A2. OWNS chez + person, and its
//          `CHEZ_CLAIM` names « chez moi » inside it. THE PROMPT DID NOT LIST
//          IT; it is the unit that taught five of the stressed forms first
//          (chez moi, chez toi, chez lui, chez elle, chez nous). Quoted.
//   a2.24  indirect object pronouns, lesson 22 in A2. OWNS lui/leur before the
//          verb, AND shipped `STRESSED_RULE` (lui after avec, sans, pour) plus
//          `A_KEPT_ERROR` « Je parle à lui ». Both its `GENDER_LOST` and
//          `STRESSED_RULE` are quoted. The lui/lui trap is built on them.
//   a2.06  direct object pronouns, lesson 21 in A2. Owns le/la/les before the
//          verb. Nothing about stressed forms and NOTHING about the imperative;
//          named once as the object set that sits in front of the verb.
//   a2.22  pronominal verbs, lesson 19 in A2. Uses « Raconte-moi » as a chunk
//          in a scene and teaches no imperative. Not cited on a card.
//   a2.25  y and en, lesson 23 in A2. Owns y/en. Named once as the third of
//          the small words in front of the verb.
//   a2.08  comparatives, lesson 32 in A2. OWNS « plus grand que moi » (rows
//          fr.a2.comparaisons.133-.135). Cited; one row imported.
//   a2.34  possessive pronouns, lesson 34 in A2. OWNS « C'est à moi » as the
//          spoken register of « C'est le mien » (rows .388-.390). Cited; two rows
//          imported. Its register marks are imported so the band says it one way.
//   a2.01  -er verbs, lesson 1 in A2. Owns the written/said register axis.
//          « Ce sont eux » written against « C'est eux » said sits on it.
//   a2.02  aller/venir/tenir, lesson 5 in A2. Owns « what comes next decides ».
//
// THE IMPERATIVE (Donne-moi, Assieds-toi) HAS NO OWNER. Measured: the word
// « imperative » appears in exactly one shipped lesson body (a2.26, twice, as
// a description), and no A1 or A2 lesson teaches the affirmative imperative
// with a pronoun. The corpus is full of it as chunks (Excusez-moi, Suivez-moi,
// Montrez-moi). This lesson therefore shows three published chunks as
// RECOGNITION only, cites where each was met, and teaches no imperative.
// « Assieds-toi » is reflexive AND imperative and is not used at all.
//
// -MÊME IS b1.24's. It is not mentioned on any learner surface, because B1
// units are not in the shipped seed, so `unitRef('b1.24')` cannot resolve to a
// label and a forward pointer would print a raw id. The batch forbids `-même`.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY, THE THEME AND THE ID BLOCK
 *
 *  Probed read-only against Postgres 2026-09-25 (scratch/_a236_probe*.mts):
 *    - no `curriculum_unit` with id a2.36 and no lesson slug a2.36*
 *    - pronoms-essentiels: 693 published; fr.a2.* runs .001-.395, max .395
 *    - NOTHING at .400-.599 at any level
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'a2.36',
  /** DRAFT POSITION. After the Bilan so it collides with nothing. Paul decides
   *  the final seq after seeing the lesson on a phone. */
  seq: 36,
  title: 'Stressed Pronouns',
  sub: 'Les pronoms toniques',
  canDo: "Can use moi, toi, lui and the rest after a little word, after c'est, alone as an answer and for emphasis",
  level: 'a2',
  track: 'a2',
  prereqUnitIds: ['a1.05', 'a2.24'],
} as const;

export const LESSON_ID = 'a2.36.l1';
export const THEME = 'pronoms-essentiels';

export const THEME_ROWS_BEFORE = 693;
export const THEME_A2_MAX_BEFORE = 'fr.a2.pronoms-essentiels.395';

/** THE BLOCK Paul's brief allocated: .400 to .499. Compared as FULL IDS, never
 *  as numbers (the brief says so, and a2.10.l2 is why). */
export const E = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;
export const ID_FIRST_FULL = E(400);
export const ID_LAST_FULL = E(499);
export const ID_USED_LAST = 436;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE QUOTATIONS, IMPORTED WHERE THE OWNER EXPORTS THEM
 * ══════════════════════════════════════════════════════════════════════════ */

/** a1.05's deferral, VERBATIM from its shipped sheet `sheet-stressed`. Not
 *  exported by a1.05's source, so the batch asserts it against the SEED body
 *  of a1.05.l1: if a1.05 is reworded, this build fails rather than quoting a
 *  sentence that no longer exists. */
export const A105_DEFERRAL = 'worth keeping apart until the stressed set gets its own lesson';
export const SUBJECT_UNIT = 'a1.05';
export const A105_SHEET_ID = 'sheet-stressed';

/** a2.24: its gender line and its stressed-lui rule. Imported, not retyped. */
export { GENDER_LOST, STRESSED_RULE, A_KEPT_ERROR, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT } from './pronoms-indirect-corpus.ts';
export const INDIRECT_UNIT = 'a2.24';

/** THIS LESSON'S EXTENSION OF a2.24's GENDER LINE. a2.24 says lui is him or
 *  her. That is true of the lui in front of a verb and FALSE of the lui after a
 *  little word, which is him only. The extension says the second half. */
export const A236_SHAPE = 'After a little word it gets its gender back: lui is him, and her is elle.';

/** a2.04 owns chez + a person, and its claim already contains « chez moi ». */
export { CHEZ_CLAIM } from './prepositions-lieu-corpus.ts';
export const PLACE_UNIT = 'a2.04';

export const GREETING_UNIT = 'a1.01';
export const NEGATION_UNIT = 'a1.18';
export const COMPARATIVE_UNIT = 'a2.08';
export const POSSESSIVE_PRONOUN_UNIT = 'a2.34';
export const REGISTER_UNIT = 'a2.01';
export const DIRECT_UNIT = 'a2.06';
export const Y_EN_UNIT = 'a2.25';
export const DOCTOR_UNIT = 'a2.28';

/** a2.34's register marks, imported so the band marks the axis one way. */
export { SPOKEN_MARK, WRITTEN_MARK } from './pronoms-possessifs-corpus.ts';

/* ── Labels, resolved through the shipped unit.seq (never typed) ─────────── */

const refOf = (id: string) => unitRef(id);
const possOf = (id: string) => unitRef(id, 'a2');

export const SUBJECT_REF = refOf('a1.05');          // lesson 9 in A1
export const GREETING_REF = refOf('a1.01');         // lesson 1 in A1
export const NEGATION_REF = refOf('a1.18');         // lesson 21 in A1
export const PLACE_REF = refOf('a2.04');            // lesson 13 in A2
export const PLACE_POSS = possOf('a2.04');          // lesson 13
export const INDIRECT_REF = refOf('a2.24');         // lesson 22 in A2
export const INDIRECT_POSS = possOf('a2.24');       // lesson 22
export const COMPARATIVE_REF = refOf('a2.08');      // lesson 32 in A2
export const POSSESSIVE_PRONOUN_REF = refOf('a2.34'); // lesson 34 in A2
export const REGISTER_REF = refOf('a2.01');         // lesson 1 in A2
export const WHAT_FOLLOWS_REF = refOf('a2.02');     // lesson 5 in A2
export const DIRECT_REF = refOf('a2.06');           // lesson 21 in A2
export const Y_EN_REF = refOf('a2.25');             // lesson 23 in A2
export const DOCTOR_REF = refOf('a2.28');           // lesson 27 in A2
export { Cap };

/** Every unit this lesson names on a learner surface. The batch asserts each
 *  one resolves to a label (not a raw id) AND is named somewhere. */
export const CITED_UNITS = [
  SUBJECT_UNIT, GREETING_UNIT, NEGATION_UNIT, PLACE_UNIT, INDIRECT_UNIT,
  COMPARATIVE_UNIT, POSSESSIVE_PRONOUN_UNIT, REGISTER_UNIT, 'a2.02',
  DIRECT_UNIT, Y_EN_UNIT, DOCTOR_UNIT,
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME
 *
 *  Doctrine §B.4: a rule run while the sentence is moving. The learner has
 *  a pronoun in mind and one question to ask: does a verb come straight after?
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'No verb right after it? Then it is moi, not je.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  { text: 'After a preposition, use the stressed pronoun.', why: 'Covers one of the six places and names the category with grammar words. c\'est moi, Moi aussi and Moi, je have no preposition in them.' },
  { text: 'If it stands alone, it is moi.', why: 'Stands alone is true of Qui ? Moi. and false-looking for avec moi, where moi is not alone. The verb test covers both.' },
  { text: 'je needs a verb; moi does not.', why: 'Close, and it is the same rule from the other end. Kept as the s09 table caption idea; the chosen line names the question the learner actually asks mid-sentence.' },
];

/** Invariants §5: an explicit constant, never derived. Counted by hand: the
 *  `say` of 23 of the 24 sections (s03-pairs says a2.02's line instead), the
 *  roundup body, and `Lesson.reframe`. 25, over the raw walk. */
export const REFRAME_COUNT = 25;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE RESPELLINGS
 *
 *  House: stressed syllable in caps, nasal closed with a superscript n, the
 *  moving consonant of a liaison written ONTO the next syllable (never a
 *  U+203F tie, which draws as an underscore on a Pixel 6). /ø/ is UH, read off
 *  a2.08's `MYUH` and this theme's own `ah-VEK uh`.
 *
 *  ONE REPAIR, to a row this lesson imports and prints: `sans lui` closes the
 *  nasal of sans with a plain n. The value is read off a2.24's own row .262
 *  « Je pars sans lui. » `zhuh PAR sahⁿ LWEE`, so the two cards match.
 * ══════════════════════════════════════════════════════════════════════════ */

export type Repair = { id: string; fr: string; from: string; to: string; why: string };

export const RESPELL_REPAIRS: Repair[] = [
  {
    id: 'fr.a2.pronoms-essentiels.049', fr: 'sans lui', from: 'sahn lwee', to: 'sahⁿ LWEE',
    why: "sans is /sɑ̃/, a nasal vowel, closed here with a plain n. a2.24's fr.a2.pronoms-essentiels.262 already respells the same words sahⁿ LWEE.",
  },
];
export const REPAIR_IDS = RESPELL_REPAIRS.map((r) => r.id);
export const REPAIR_SOURCE = { id: 'fr.a2.pronoms-essentiels.262', contains: 'sahⁿ LWEE' } as const;

/** Imported rows whose stored respelling is odd but that this build does NOT
 *  repair, said so the silence is not read as an oversight. */
export const NOT_REPAIRED: readonly { id: string; respell: string; why: string }[] = [
  { id: 'fr.a2.prepositions-essentielles.142', respell: 'eel eh shay LÜEE', why: `a2.04's row. LÜEE for lui disagrees with the LWEE used everywhere else, but it is not a nasal defect, the checker does not flag it, and it is ${unitRef('a2.04')}'s card to change.` },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS
 *
 *  Measured read-only 2026-09-25. THE THEME ALREADY HOLDS A NEAR-COMPLETE
 *  STRESSED SET at fr.a2.pronoms-essentiels.046-.066, published and never
 *  taught: one emphasis sentence per pronoun (Moi, je... through Elles,
 *  elles...) and six preposition phrases. With two a1 phrases in the same
 *  theme (avec moi, chez toi), ALL EIGHT FORMS EXIST AS HEADWORDS. So this
 *  build authors NO headword and imports all eight.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** One preposition phrase per form, all flashcard + voiceflash + review. */
  headwords: [
    'fr.a1.pronoms-essentiels.072',  // avec moi       ah-VEK mwah
    'fr.a1.pronoms-essentiels.075',  // chez toi       shay twah
    'fr.a2.pronoms-essentiels.049',  // sans lui       sahn lwee  <- repaired
    'fr.a2.pronoms-essentiels.052',  // pour elle      poor ehl
    'fr.a2.pronoms-essentiels.055',  // chez nous      shay noo
    'fr.a2.pronoms-essentiels.058',  // avec vous      ah-VEK voo
    'fr.a2.pronoms-essentiels.061',  // avec eux       ah-VEK uh
    'fr.a2.pronoms-essentiels.064',  // avec elles     ah-VEK ehl
  ],
  /** One emphasis sentence per form. flashcard + sentence + review: deck-able,
   *  NOT speakable (no voiceflash), so never named by `practice`. */
  emphasis: [
    'fr.a2.pronoms-essentiels.046',  // Moi, je préfère le thé au café.
    'fr.a2.pronoms-essentiels.047',  // Toi, tu as toujours raison.
    'fr.a2.pronoms-essentiels.051',  // Lui, il arrive toujours en avance.
    'fr.a2.pronoms-essentiels.054',  // Elle, elle adore la montagne en hiver.
    'fr.a2.pronoms-essentiels.057',  // Nous, nous restons ici pour le moment.
    'fr.a2.pronoms-essentiels.060',  // Vous, vous connaissez déjà la réponse.
    'fr.a2.pronoms-essentiels.063',  // Eux, ils habitent à la campagne.
    'fr.a2.pronoms-essentiels.066',  // Elles, elles arrivent toujours en avance.
  ],
  /** The theme's own preposition sentences. */
  prepSentences: [
    'fr.a2.pronoms-essentiels.050',  // Nous partons sans lui ce week-end.
    'fr.a2.pronoms-essentiels.053',  // Ce cadeau est pour elle, pas pour lui.
    'fr.a2.pronoms-essentiels.056',  // Vous venez dîner chez nous vendredi soir ?
    'fr.a2.pronoms-essentiels.062',  // Nous jouons souvent au foot avec eux.
    'fr.a2.pronoms-essentiels.065',  // Je pars en week-end avec elles.
  ],
  /** a2.24's own rows: the object lui and the stressed lui. */
  indirect: [
    'fr.a2.pronoms-essentiels.238',  // Je lui parle.        object, him OR her
    'fr.a2.pronoms-essentiels.261',  // Je parle avec lui.   stressed, him only
    'fr.a2.pronoms-essentiels.262',  // Je pars sans lui.
    'fr.a2.pronoms-essentiels.263',  // C'est pour lui.      the lui cell of s05
  ],
  /** a2.04's chez rows. */
  chez: [
    'fr.a2.prepositions-essentielles.141', // Je reste chez moi.
    'fr.a2.prepositions-essentielles.142', // Il est chez lui.
    'fr.a2.prepositions-essentielles.143', // Elle est chez elle.
  ],
  /** Short answers: a1.18's and a1.01's rows and their neighbours. */
  answers: [
    'fr.a1.expressions-utiles.095',  // Je n'aime pas le café. Moi non plus.   a1.18's, dictation-only
    'fr.a1.rp-identite.014',         // Moi aussi.
    'fr.a2.negation-et-restriction.070', // Elle ne vient pas ce soir, lui non plus.
    'fr.a2.negation-et-restriction.071', // Nous n'avons pas faim, eux non plus.
    'fr.a2.negation-et-restriction.072', // Tu ne comprends pas cette règle ? Moi non plus.
    'fr.a1.salutations.087',         // Et toi ?     a1.01's, voiceflash+review, no flashcard
    'fr.a1.salutations.020',         // Ça va bien, merci, et toi ?
  ],
  /** a2.08's comparison. */
  comparison: [
    'fr.a2.comparaisons.133',        // Il est plus grand que moi.
    'fr.a1.famille.084',             // Ma sœur est plus jeune que moi.   dictation-only
  ],
  /** a2.34's possession. */
  possession: [
    'fr.a2.pronoms-essentiels.388',  // C'est à moi.
    'fr.a2.pronoms-essentiels.389',  // C'est à toi.
  ],
  /** Compound subjects, both dictation-only. */
  compound: [
    'fr.a1.mots-essentiels.181',     // Toi et moi, nous formons une bonne équipe.
    'fr.a1.mots-essentiels.176',     // Toi, tu restes ici, et lui, il part avec moi.
  ],
  /** Requests met as chunks. Recognition only; no imperative is taught. */
  requests: [
    'fr.a1.salutations.014',         // Excusez-moi        a1.01's
    'fr.a2.au-restaurant.141',       // Suivez-moi, je vous prie.   a2.07's
    'fr.a2.symptomes.202',           // Montrez-moi où ça fait mal.  a2.28's
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Themes this unit reads from and never writes to. */
export const IMPORT_ONLY_THEMES = [
  'prepositions-essentielles', 'expressions-utiles', 'rp-identite', 'negation-et-restriction',
  'salutations', 'comparaisons', 'famille', 'mots-essentiels', 'au-restaurant', 'symptomes',
] as const;

/** Imports with NO flashcard drill: a tranche release would draw nothing, so
 *  each is reachable only by being named, and the batch checks both ways. */
export const NOT_DECK_ABLE = [
  'fr.a1.expressions-utiles.095', 'fr.a1.salutations.087', 'fr.a1.famille.084',
  'fr.a1.mots-essentiels.181', 'fr.a1.mots-essentiels.176',
];

/** Imports with no voiceflash: `practice skill:'speak'` must not name them. */
export const NOT_SPEAKABLE = [
  ...IMPORTED.emphasis, ...IMPORTED.prepSentences,
  'fr.a1.expressions-utiles.095', 'fr.a2.negation-et-restriction.070',
  'fr.a2.negation-et-restriction.071', 'fr.a2.negation-et-restriction.072',
  'fr.a1.famille.084', ...IMPORTED.compound,
];

export const NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.a2.pronoms-essentiels.059', fr: 'Je viendrai avec vous à la conférence.', why: 'futur simple, which the A2 trail never teaches. It is the one row of the theme block .046-.066 left behind' },
  { id: 'fr.a2.pronoms-essentiels.048', fr: "C'est à toi de jouer maintenant.", why: "à toi de + infinitive is « your turn », a different job from the possession sense lesson 34 owns. Printing it beside C'est à toi would teach the two as one" },
  { id: 'fr.a2.negation-et-restriction.068', fr: 'toi non plus', why: 'respelled twah nohn ploos: a plain n closing a nasal AND ploos for plus. Not this unit\'s theme to repair, and a1.18 owns the reply' },
  { id: 'fr.a2.rp-etiquette.002', fr: "c'est moi-même", why: 'moi-même is b1.24\'s, and B1 has no label a card could cite' },
  { id: 'fr.a1.jours-et-mois.102', fr: "Ce mois-ci, c'est moi qui organise la fête d'anniversaire.", why: "c'est moi qui is a cleft with a relative clause, which no A2 lesson teaches; it also carries mois beside moi, the one homophone pair this lesson keeps off every ear surface" },
  { id: 'fr.a1.mots-essentiels.184', fr: "C'est lui qui a préparé tout le repas hier soir.", why: 'the same cleft, c\'est lui qui' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, fr.a2.pronoms-essentiels.400 to .436
 *
 *  Every one a SENTENCE: the eight forms already exist as headwords (§F), so
 *  there is nothing a phrase row could add and every phrase row would risk a
 *  flashcard-hub collision. NOT ONE ROW IS GENDERED.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const sent = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,
});
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/* ── REQUIRED LAYOUT 1: THE FOUR THAT CHANGE, subject beside stressed. .400-.407
 *  Same person, and the only thing that moves is whether a verb follows. */
export const PAIR_ROWS: Row[] = [
  sent(400, 'Je suis là.', "I'm here.", 'zhuh swee LAH', ['pair', 'subject', 'je'], FCVR),
  sent(401, "C'est moi.", "It's me.", 'seh MWAH', ['pair', 'stressed', 'moi'], FCVDR),
  sent(402, 'Tu viens ?', 'Are you coming?', 'tü VYEHⁿ', ['pair', 'subject', 'tu'], FCVR),
  sent(403, 'Et toi ?', 'And you?', 'ay TWAH', ['pair', 'stressed', 'toi'], FCVDR),
  sent(404, 'Il part.', "He's leaving.", 'eel PAR', ['pair', 'subject', 'il'], FCVR),
  sent(405, 'On part sans lui.', "We're leaving without him.", 'ohⁿ PAR sahⁿ LWEE', ['pair', 'stressed', 'lui'], FCVDR),
  sent(406, 'Ils arrivent.', "They're arriving.", 'eel zah-REEV', ['pair', 'subject', 'ils'], FCVR),
  sent(407, 'Je dîne avec eux.', "I'm having dinner with them.", 'zhuh DEEN ah-vek UH', ['pair', 'stressed', 'eux'], FCVDR),
];

export const PAIR_CELLS = [
  { subj: E(400), str: E(401), subjForm: 'Je', strForm: 'moi' },
  { subj: E(402), str: E(403), subjForm: 'Tu', strForm: 'toi' },
  { subj: E(404), str: E(405), subjForm: 'Il', strForm: 'lui' },
  { subj: E(406), str: E(407), subjForm: 'Ils', strForm: 'eux' },
] as const;

/* ── REQUIRED LAYOUT 2: ALL EIGHT IN ONE FRAME. .408-.414, plus a2.24's .263
 *  « C'est pour lui. » as the lui cell, so a neighbour's card is part of the
 *  set rather than re-authored. */
export const FRAME_ROWS: Row[] = [
  sent(408, "C'est pour moi.", "It's for me.", 'seh poor MWAH', ['frame', 'moi'], FCVR),
  sent(409, "C'est pour toi.", "It's for you (one friend).", 'seh poor TWAH', ['frame', 'toi'], FCVR),
  sent(410, "C'est pour elle.", "It's for her.", 'seh poor EHL', ['frame', 'elle'], FCVR),
  sent(411, "C'est pour nous.", "It's for us.", 'seh poor NOO', ['frame', 'nous'], FCVR),
  sent(412, "C'est pour vous.", "It's for you (polite, or more than one).", 'seh poor VOO', ['frame', 'vous'], FCVR),
  sent(413, "C'est pour eux.", "It's for them (men, or a mixed group).", 'seh poor UH', ['frame', 'eux'], FCVR),
  sent(414, "C'est pour elles.", "It's for them (all women).", 'seh poor EHL', ['frame', 'elles'], FCVR),
];

export const FRAME_CELLS = [
  { form: 'moi', id: E(408) },
  { form: 'toi', id: E(409) },
  { form: 'lui', id: 'fr.a2.pronoms-essentiels.263' },
  { form: 'elle', id: E(410) },
  { form: 'nous', id: E(411) },
  { form: 'vous', id: E(412) },
  { form: 'eux', id: E(413) },
  { form: 'elles', id: E(414) },
] as const;

/* ── REQUIRED LAYOUT 3: C'EST + PRONOUN, AND THE REGISTER. .415-.421
 *  « Ce sont eux » is what is written, « C'est eux » what is said. Both are
 *  real French; the axis is a2.01's and the marks are a2.34's. */
export const CEST_ROWS: Row[] = [
  sent(415, "C'est lui.", "It's him.", 'seh LWEE', ['cest', 'lui'], FCVDR),
  sent(416, "C'est elle.", "It's her.", 'seh TEHL', ['cest', 'elle'], FCVR),
  sent(417, "C'est nous.", "It's us.", 'seh NOO', ['cest', 'nous'], FCVR),
  sent(418, 'Ce sont eux.', "It's them.", 'suh sohⁿ TUH', ['cest', 'written', 'eux'], FCVR),
  sent(419, "C'est eux.", "It's them.", 'seh TUH', ['cest', 'spoken', 'eux'], FCVR),
  sent(420, 'Ce sont elles.', "It's them (all women).", 'suh sohⁿ TEHL', ['cest', 'written', 'elles'], FCVR),
  sent(421, "C'est elles.", "It's them (all women).", 'seh TEHL', ['cest', 'spoken', 'elles'], FCVR),
];

export const REGISTER_PAIRS = [
  { written: E(418), spoken: E(419), meaning: "It's them." },
  { written: E(420), spoken: E(421), meaning: "It's them (all women)." },
] as const;

/* ── IN FRONT, ALONE, AND JOINED WITH ET. .422-.428 ───────────────────────── */
export const PLACE_ROWS: Row[] = [
  sent(422, 'Moi, je prends le train. Lui, il prend la voiture.', "I'm taking the train. He's taking the car.", 'MWAH zhuh prahⁿ luh TREHⁿ · LWEE eel prahⁿ lah vwah-TÜR', ['front', 'contrast'], FCVR),
  sent(423, 'Moi, je suis prêt.', "Me, I'm ready.", 'MWAH zhuh swee PREH', ['front'], FCVR),
  sent(424, 'Qui veut du café ? Moi.', 'Who wants coffee? Me.', 'kee vuh dü kah-FAY · MWAH', ['alone'], FCVR),
  sent(425, 'Lui aussi.', 'Him too.', 'LWEE oh-SEE', ['alone'], FCVR),
  sent(426, 'Pas moi.', 'Not me.', 'pah MWAH', ['alone'], FCVR),
  sent(427, 'Paul et moi, nous partons demain.', 'Paul and I are leaving tomorrow.', 'POL ay MWAH · noo par-TOHⁿ duh-MEHⁿ', ['et', 'nous'], FCVR),
  sent(428, 'Toi et lui, vous restez ici.', 'You and he are staying here.', 'TWAH ay LWEE · voo res-tay ee-SEE', ['et', 'vous'], FCVR),
];

/** The compound-subject rule, as the batch reads it: two people joined with et
 *  come back as ONE subject pronoun before the verb. */
export const COMPOUND_CELLS = [
  { id: E(427), joined: 'Paul et moi', back: 'nous' },
  { id: E(428), joined: 'Toi et lui', back: 'vous' },
] as const;

/* ── TRAP 1: lui IS HIM ONLY AFTER A LITTLE WORD. .429-.430 ─────────────────
 *  a2.24: « The word lui is him or her. » True of Je lui parle. After avec,
 *  lui is him and her is elle. */
export const LUI_ROWS: Row[] = [
  sent(429, 'Je parle avec elle.', "I'm talking with her.", 'zhuh PARL ah-vek EHL', ['lui-trap', 'elle'], FCVR),
  sent(430, 'Je pars sans elle.', "I'm leaving without her.", 'zhuh PAR sahⁿ ZEHL', ['lui-trap', 'elle'], FCVR),
];

export const LUI_TRAP = {
  objectLui: 'fr.a2.pronoms-essentiels.238',   // Je lui parle.      him or her
  stressedLui: 'fr.a2.pronoms-essentiels.261', // Je parle avec lui. him only
  stressedElle: E(429),                         // Je parle avec elle. her
} as const;

/* ── TRAP 2: eux OR elles. .431-.434 ─────────────────────────────────────── */
export const EUX_ROWS: Row[] = [
  sent(431, 'Je dîne chez eux.', "I'm having dinner at their place.", 'zhuh DEEN shay ZUH', ['eux-trap', 'eux'], FCVDR),
  sent(432, 'Je dîne chez elles.', "I'm having dinner at their place (all women).", 'zhuh DEEN shay ZEHL', ['eux-trap', 'elles'], FCVR),
  sent(433, 'Marc et Julie ? Je pars avec eux.', "Marc and Julie? I'm leaving with them.", 'MARK ay zhü-LEE · zhuh PAR ah-vek UH', ['eux-trap', 'mixed'], FCVR),
  sent(434, 'Léa et Julie ? Je pars avec elles.', "Léa and Julie? I'm leaving with them.", 'lay-AH ay zhü-LEE · zhuh PAR ah-vek EHL', ['eux-trap', 'women'], FCVR),
];

export const EUX_PAIR = { mixed: E(433), women: E(434) } as const;

/* ── THE GENERALISATION FRAME. .435-.436 ────────────────────────────────────
 *  Two little words the learner has had (devant, à côté de) before the one
 *  they have not (derrière, §I). */
export const FRAME_UNSEEN_ROWS: Row[] = [
  sent(435, 'Elle est devant toi.', "She's in front of you.", 'ehl eh duh-VAHⁿ TWAH', ['unseen-frame'], FCVR),
  sent(436, 'Il est à côté de moi.', "He's next to me.", 'eel eh tah koh-TAY duh MWAH', ['unseen-frame'], FCVR),
];

export const ALL_ROWS: Row[] = [
  ...PAIR_ROWS, ...FRAME_ROWS, ...CEST_ROWS, ...PLACE_ROWS,
  ...LUI_ROWS, ...EUX_ROWS, ...FRAME_UNSEEN_ROWS,
].sort((a, b) => a.id.localeCompare(b.id));

/** THE LIAISONS, BY NAME. Nothing in the project checks one (invariants §3).
 *  The batch requires every authored est/sont/chez/sans/ils + vowel frame to be
 *  listed here, and the respelling to carry the moving consonant. */
export const LIAISON_ROWS: readonly { id: string; frame: string; respell: string }[] = [
  { id: E(406), frame: 'Ils arrivent', respell: 'eel zah' },
  { id: E(416), frame: "C'est elle", respell: 'seh TEHL' },
  { id: E(418), frame: 'sont eux', respell: 'sohⁿ TUH' },
  { id: E(419), frame: "C'est eux", respell: 'seh TUH' },
  { id: E(420), frame: 'sont elles', respell: 'sohⁿ TEHL' },
  { id: E(421), frame: "C'est elles", respell: 'seh TEHL' },
  { id: E(430), frame: 'sans elle', respell: 'sahⁿ ZEHL' },
  { id: E(431), frame: 'chez eux', respell: 'shay ZUH' },
  { id: E(432), frame: 'chez elles', respell: 'shay ZEHL' },
  { id: E(436), frame: 'est à', respell: 'eh tah' },
];
export const LIAISON_FRAME_RX = /(?<![\p{L}])(?:est|sont|chez|sans|ils|elles)\s+[aàâeéèêiîoôuûhy]/iu;
export const TIE_GLYPH = '‿';

/* ── THE DICTÉE ────────────────────────────────────────────────────────────
 *  Letters mode only (≤16 letters), proved through the real dicteeMode. No
 *  target ends on elle or elles: they are one sound and a dictée cannot ask
 *  the learner to hear which. */
export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);
export const DICTEE_MODE_EXPECTED = 'letters' as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. WHAT THE EAR AND fold() CAN AND CANNOT TELL APART
 * ══════════════════════════════════════════════════════════════════════════ */

/** ONE SOUND EACH. No ear question may offer two members of one group.
 *    elle / elles    /ɛl/ both. « C'est pour elle » and « C'est pour elles »
 *                    are the same noise, so the number lives in context only.
 *    moi / mois      /mwa/. mois (month) is common in the corpus.
 *    toi / toit      /twa/. toit (roof).
 *    eux / œufs      /ø/. œufs (eggs), plural. */
export const HOMOPHONE_FORMS: readonly string[][] = [
  ['elle', 'elles'],
  ['moi', 'mois'],
  ['toi', 'toit'],
  ['eux', 'œufs'],
];

/** Pairs fold() keeps apart, so a typed question may turn on them. */
export const NEAR_MISSES: [string, string][] = [
  ['avec elle', 'avec elles'],
  ['avec eux', 'avec elles'],
  ["C'est moi", "C'est je"],
  ['avec lui', 'avec il'],
  ['Moi aussi', 'Je aussi'],
];

/** Pairs fold() merges. */
export const FOLD_COLLISIONS: [string, string][] = [
  ["C'est moi", 'Cest moi'],
  ['Je dîne chez eux', 'Je dine chez eux'],
  ['Léa', 'Lea'],
];

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: "a listenChoose between C'est pour elle and C'est pour elles", why: 'one sound; HOMOPHONE_FORMS refuses it. Tested as an mcq about the sound instead, and as typeIn with the number fixed in the stem' },
  { want: 'a dictée of avec elles', why: 'the learner would have to guess the s. The dictée uses eux, which is audible against elles' },
  { want: 'an imperative question (Donne-moi)', why: 'no A1 or A2 lesson teaches the imperative, so a scored question would test an unowned structure. Recognition only, in s17-known' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE GENERALISATION TEST
 *
 *  Doctrine §B.1. The unseen item is a LITTLE WORD, not a noun: `derrière`
 *  (behind). The lesson shows avec, sans, pour, chez, devant, à côté de and
 *  never derrière; the learner has to put moi or toi after it unaided.
 *  Measured: no row this lesson authors or imports contains derrière.
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNSEEN = {
  word: 'derrière',
  en: 'behind',
  answer: 'derrière toi',
  sentence: 'Il est derrière toi.',
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. DISPLAY PARITY: where the copy IS the teaching, the section carries
 *  the row's fr verbatim.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DISPLAY_PARITY: readonly { section: string; itemId: string; why: string }[] = [
  ...PAIR_ROWS.map((r) => ({ section: 's03-pairs', itemId: r.id, why: 'required layout 1' })),
  ...FRAME_ROWS.map((r) => ({ section: 's05-eight', itemId: r.id, why: 'required layout 2' })),
  { section: 's12-cest', itemId: E(418), why: 'required layout 3, the written half' },
  { section: 's12-cest', itemId: E(419), why: 'required layout 3, the said half' },
  { section: 's10-lui', itemId: E(429), why: 'trap 1, her after a little word' },
  { section: 's11-eux', itemId: E(433), why: 'trap 2, a mixed group is eux' },
  { section: 's11-eux', itemId: E(434), why: 'trap 2, all women is elles' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. THE GUARD TABLES
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE ERRORS AN ENGLISH SPEAKER PRODUCES, allowed only where they are marked
 *  as wrong: the scene bubble nobody answers, the trapDrill promptSound, a
 *  commonErrors wrong block, and quiz distractors/prompts. */
export const WRONG_FORMS = [
  "C'est je", 'avec je', 'Je aussi', 'que je.', 'avec il', 'sans il', 'pour il',
  'Et tu ?', 'Moi suis', 'Ils, ils', 'Je et', 'Paul et je', 'Il vient avec je',
] as const;
export const WRONG_ALLOWED_IN = ['s01-scene', 's15-trap', 's16-errors', 's22-quiz'] as const;

export const MUST_FIRE_WRONG = ["C'est je.", 'Il vient avec je.', 'Je aussi.', 'Et tu ?', 'Moi suis prêt.'] as const;
export const MUST_NOT_FIRE_WRONG = ["C'est moi.", 'Je suis là.', 'Et toi ?', 'Moi, je suis prêt.', 'Je pense que je viens.', "Parce que je suis là."] as const;

/** a2.34's possessive pronouns stay a2.34's. */
export const POSSESSIVE_PRONOUNS = ['mien', 'mienne', 'miens', 'miennes', 'tien', 'tienne', 'tiens', 'tiennes', 'sien', 'sienne', 'siens', 'siennes', 'nôtre', 'vôtre', 'nôtres', 'vôtres'] as const;
export const POSSESSIVE_ALLOWED_IN = ['s17-known'] as const;

/** a2.33's demonstrative pronouns. */
export const DEMONSTRATIVE_PRONOUNS = ['celui', 'celle', 'ceux', 'celles'] as const;

export { OUT_OF_BAND_TENSES, PRONOMINAL_EN_Y, FORBIDDEN_CLAIMS, DEAD_AUDIO_FIELDS, DEAD_LESSON_FIELDS } from './pronoms-possessifs-corpus.ts';

/** No grammar jargon on a learner surface. « stressed » is NOT on the list:
 *  it is a1.05's own word for this set on its shipped sheet, and the unit
 *  title. The RATIO is guarded instead. */
export const JARGON = [
  'disjunctive', 'tonic', 'clitic', 'nominative', 'accusative', 'dative',
  'oblique', 'emphatic pronoun', 'paradigm', 'inflection', 'morphology',
  'antecedent', 'coordinate', 'coordination', 'imperative mood',
] as const;
export const TECHNICAL_WORD = 'stressed';
export const PLAIN_PHRASE = 'on its own';

export const BANNED_SUBSTRINGS = ['honest', 'honnête', '—', '-même'] as const;
