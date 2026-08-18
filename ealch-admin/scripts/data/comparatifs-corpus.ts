// a2.08.l1 « Comparatifs & superlatifs » — the authored corpus and the citation
// constants.
//
//   pnpm content:comparatifs              (author-comparatifs-batch.ts)
//   pnpm tsx scripts/merge-comparatifs-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   ONE FRAME, AND ONLY THE MIDDLE WORD MOVES.
//
//     plus  + describing word + que      more … than
//     moins + describing word + que      less … than
//     aussi + describing word + que      as … as
//
//   The superlative is the same frame with the article in front: `le plus
//   grand`, `la plus grande`, `les plus grands`. A learner who has the frame
//   can compare anything with any describing word they own, INCLUDING ones
//   this lesson never lists, and `s08-unseen` is the mission that requires
//   exactly that.
//
// QUOTED, NEVER TAUGHT:
//
//   a2.03  agreement. One recap, applied inside the frame, never re-taught.
//          Its corpus file reserves `plus grand`, `moins grand`, `le plus
//          grand`, `aussi grand` and `meilleur` for this unit by name
//          (`accord-adjectifs-corpus.ts:413`, COMPARATIVE_UNIT = 'a2.08').
//   a2.17  adverbs and -ment. `mieux` is ours; -ment formation is not. Its
//          corpus file reserves `mieux`, `le mieux`, `plus vite` and `moins
//          vite` for this unit by name (`adverbes-corpus.ts:560`,
//          RESERVED_FOR_A208). ALL FOUR ARE TAKEN HERE.
//   a2.14  savoir/connaître. The same shape as bon/bien: English merges what
//          French splits. Named by unit id, its content untouched.
//   a2.34  possessive pronouns, seq 34. `la mienne`, `le tien` and `le mien`
//          sit INSIDE this theme. See §D: this build touches NONE of them.
//   a1.18  `ne … plus`. A different word doing a different job. Named in one
//          line on the roundup, taught nowhere.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. WHAT THE PROMPT GOT WRONG, MEASURED 2026-08-17 AGAINST POSTGRES
// ══════════════════════════════════════════════════════════════════════════
//
//  1. « Author only `aussi ... que`, which has zero occurrences. » FALSE, AND
//     IT IS THE PROMPT'S LOAD-BEARING CLAIM. The prompt probed the exact string
//     `aussi grand que` and read its zero as a zero for the construction.
//     `aussi … que` occurs in SEVEN published rows, FOUR of them in this very
//     theme:
//
//       fr.a2.comparaisons.004   Ma sœur est aussi grande que moi.
//       fr.a2.comparaisons.062   Cette table est aussi lourde que la chaise.
//       fr.a2.comparaisons.076   Cette chambre est aussi propre que la cuisine.
//       fr.a2.comparaisons.078   Elle parle aussi bien anglais que moi.
//       fr.b1.comparaisons.020 / .057 / fr.b2.* and 36 more outside the theme
//
//     `.004` is the third degree of this lesson's own headline frame, with the
//     feminine agreement already on it. And `aussi bon` (.124), `aussi bonne`
//     (.125) and `aussi grand` (.132) are PUBLISHED PHRASE CARDS. The degree
//     the prompt called absent is the one the theme already teaches as cards.
//
//  2. THREE OF THE FOUR SENTENCE-EVIDENCE FIGURES ARE LOW. Measured with the
//     accent-aware whole-word walk `probe-corpus.ts` uses:
//
//       prompt says   measured        prompt says   measured
//       le meilleur 16 -> 18          meilleur 39 -> 46
//       mieux      291 -> 301         le plus grand 11 -> 11  (right)
//       plus grand que 5 -> 5 (right) moins grand que 1 -> 1  (right)
//
//     The direction of the error does not change any decision: `mieux` still
//     outweighs `meilleur`, by 6.5 to 1 rather than the prompt's 9 to 1, and
//     the weighting §C fixes follows the measured ratio.
//
//  3. « TWO RESPELLINGS TO REPAIR. » THERE ARE SIX, and the two the prompt
//     names are not the two that matter most. `moins` — one of the three
//     degree words this lesson exists to teach — ships as `MWAN` on BOTH its
//     bare headwords, which the real `hasPlainNasalFor` flags. See §E.
//
//  4. `bien` HAS A THIRD RESPELLING, NOT TWO. The prompt names `BYEHⁿ`
//     (fr.sons.mots-essentiels.045) and `BYAN` (fr.b2.ethique.052).
//     `fr.b2.philosophie.084` holds `luh byahn`, which is also flagged. Both
//     b2 rows are `le bien`, the NOUN, not the adverb; the sound is the same
//     and the house value is the same, so both are repaired.
//
//  5. « ALL TEN ADJECTIVES EXIST AS HEADWORDS. YOU AUTHOR NONE. » TRUE, and
//     the counts are right to the row (grand 6, petit 4, bon 3, mauvais 1,
//     bien 4, mal 4, cher 6, rapide 5, facile 4, difficile 5). What the prompt
//     does not say is that **`mieux` does not exist as a headword ANYWHERE**:
//     zero rows in 48,888, in any theme, at any level. The word the corpus
//     uses 301 times has never been a card. It is authored here, at E(147).
//
//  6. A DRILL TRAP THE PROMPT DOES NOT MENTION, AND IT SHAPES THE WHOLE BUILD.
//     `fr.a2.comparaisons` splits into three populations:
//
//       .001-.056   dictation ONLY          112 sentences that NO deck can
//       .057-.112   sentence ONLY           serve and NO practice can speak
//       .113-.132   flashcard + voiceflash  17 rows, the only deck-able ones
//
//     So a `deckTranche` release of ANY imported sentence in this theme draws
//     nothing, and `practice skill: 'speak'` cannot name one. Every imported
//     sentence here is reachable by being NAMED by itemId instead, and the
//     batch asserts it in both directions.
//
//  7. Corrections §3 SAID IT WOULD NOT APPLY AND IT APPLIES ANYWAY. The prompt
//     says « the sentence evidence is rich, which is unusual — Corrections §3
//     does not apply to you ». The evidence IS rich. It still holds no minimal
//     pair: `.001` and `.004` differ by subject, adjective form AND middle
//     word, so setting them side by side compares three things. Every three-
//     degree set and the four-form superlative grid are authored here for
//     exactly the reason §3 gives.
//
//  Confirmed EXACTLY as stated: the identity block byte for byte, the theme at
//  288 published / `fr.a2.*` 129 rows / max .132 / NEXT FREE .133, `plus bon`
//  at 0 rows, and both respelling defects the prompt names.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Read from Postgres 2026-08-17 by `corpus:probe --unit a2.08`, not from the
 *  spine and not from the prompt. It agreed with the prompt's block byte for
 *  byte, which is the first time in this band that has happened. */
export const UNIT = {
  id: 'a2.08',
  seq: 32,
  title: 'Comparatives and Superlatives',
  sub: 'Comparatifs & superlatifs',
  canDo: 'Can compare two things and say which is the most or the least',
  prereqUnitIds: ['a2.03'],
} as const;

export const LESSON_ID = 'a2.08.l1';
export const THEME = 'comparaisons';

/* ── MEASURED AGAINST POSTGRES 2026-08-17 ─────────────────────────────────── */

export const THEME_ROWS_BEFORE = 288;   // published, all levels
export const THEME_A2_BEFORE = 129;     // fr.a2.comparaisons.*, max .132
export const THEME_B1_BEFORE = 111;
export const THEME_B2_BEFORE = 48;
export const THEME_SEED_BEFORE = 0;     // A CUT. This build pulls the theme across.

/** The gaps in the a2 sequence, left alone. Ids are the SRS key and a gap is
 *  somebody's deleted row, not free space. NEXT FREE is the maximum plus one. */
export const THEME_GAPS = [126, 127, 128] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. THE ID BLOCK
 *
 *  NEXT FREE ID on the morning of the build was `fr.a2.comparaisons.133`.
 *  `.133`–`.180` allocated, `.133`–`.163` used.
 *
 *  CHECK THE ROW COUNT AFTER THE APPLY, NOT THE MAXIMUM ID (Corrections §10).
 *  a1.19/a1.20 and a1.14/a1.15 both had a concurrent lesson land BELOW the top
 *  of a range while a highest-id guard reported clean.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ID_FIRST = 133;
export const ID_LAST = 180;      // allocated
export const ID_USED_LAST = 163;

export const E = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE REFRAME, AND HOW `mieux` GOT ITS WEIGHT
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: a production rule short enough to run in the half-second
 *  between the subject and the describing word. Carried verbatim across nine
 *  sections; the density validator's floor is three. */
export const REFRAME = 'Pick the middle word and keep the frame.';

/** The three middles. One frame, three words, and nothing else moves. */
export const MIDDLES = ['plus', 'moins', 'aussi'] as const;

/** MEASURED, not taken from the prompt. `mieux` outweighs `meilleur` 301 to
 *  46 across all published rows, which is 6.5 to 1 rather than the prompt's
 *  nine. The teaching follows the measured ratio: this build authors FIVE
 *  `mieux` surfaces (E147, E148, E139, E149, E150) against TWO for `meilleur`
 *  (E140, E146), and the trapDrill runs `mieux` first. */
export const MIEUX_ROWS = 301;
export const MEILLEUR_ROWS = 46;
export const LE_MEILLEUR_ROWS = 18;
export const LE_PLUS_GRAND_ROWS = 11;

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE ONE CROSS-LESSON COLLISION IN THE TAIL
 *
 *  `A2-TAIL-AUDIT.md` §6: `fr.a2.comparaisons` holds a2.34's material, because
 *  comparing possessions is the natural frame for both units.
 *
 *  EIGHTEEN ROWS, MEASURED 2026-08-17. THIS BUILD IMPORTS NONE OF THEM.
 *
 *  The prompt allows using them as objects (« Use them as objects if you need
 *  to; teach none of them »). They are not used at all, which is a stronger
 *  answer than a scoped one: the guard becomes « no possessive pronoun appears
 *  anywhere in this lesson », which cannot be weakened by a later edit, and
 *  a2.34 inherits the list below untouched.
 *
 *  Two of them were genuinely wanted and were dropped for this:
 *    .017  Notre équipe joue mieux que la vôtre.   — the best `mieux` sentence
 *    .020  Ma valise est plus lourde que la tienne. — a clean feminine frame
 * ══════════════════════════════════════════════════════════════════════════ */

export const POSSESSIVE_UNIT = 'a2.34';

/** Every `fr.a2.comparaisons` row carrying a possessive pronoun. Handed to
 *  a2.34 whole. NOT ONE is imported, released or named by this lesson, and the
 *  batch and the test both assert it. */
export const POSSESSIVE_ROWS: readonly { id: string; pronoun: string; fr: string }[] = [
  { id: E(3), pronoun: 'la mienne', fr: 'Cette voiture est moins rapide que la mienne.' },
  { id: E(7), pronoun: 'la nôtre', fr: "Cette ville a plus d'habitants que la nôtre." },
  { id: E(10), pronoun: 'la mienne', fr: 'Cette tarte est meilleure que la mienne.' },
  { id: E(11), pronoun: 'les nôtres', fr: 'Ses résultats sont pires que les nôtres.' },
  { id: E(13), pronoun: 'le tien', fr: 'Mon chien est plus obéissant que le tien.' },
  { id: E(16), pronoun: 'le tien', fr: 'Ce café est moins fort que le tien.' },
  { id: E(17), pronoun: 'la vôtre', fr: 'Notre équipe joue mieux que la vôtre.' },
  { id: E(18), pronoun: 'la sienne', fr: 'Ton idée est plus originale que la sienne.' },
  { id: E(20), pronoun: 'la tienne', fr: 'Ma valise est plus lourde que la tienne.' },
  { id: E(24), pronoun: 'la mienne', fr: 'Cette chambre est plus claire que la mienne.' },
  { id: E(25), pronoun: 'le tien', fr: 'Mon voisin est moins bavard que le tien.' },
  { id: E(64), pronoun: 'le mien', fr: 'Son appartement est moins grand que le mien.' },
  { id: E(70), pronoun: 'le tien', fr: 'Mon chat est plus calme que le tien.' },
  { id: E(74), pronoun: 'la mienne', fr: 'Cette valise est plus légère que la mienne.' },
  { id: E(75), pronoun: 'le mien', fr: 'Ton café est plus chaud que le mien.' },
  { id: E(77), pronoun: 'le tien', fr: 'Mon vélo est moins neuf que le tien.' },
  { id: E(80), pronoun: 'le tien', fr: 'Mon jardin est plus petit que le tien.' },
  { id: E(84), pronoun: 'la tienne', fr: 'Ma valise pèse plus que la tienne.' },
];

/** Every possessive-pronoun form, for the guard. It fires on a SUBSTRING of
 *  the learner surface as well as on the import list, because the shape that
 *  matters is « does this word reach a learner », not « is this id imported ». */
export const POSSESSIVE_FORMS = [
  'le mien', 'la mienne', 'les miens', 'les miennes',
  'le tien', 'la tienne', 'les tiens', 'les tiennes',
  'le sien', 'la sienne', 'les siens', 'les siennes',
  'le nôtre', 'la nôtre', 'les nôtres',
  'le vôtre', 'la vôtre', 'les vôtres',
  'le leur', 'la leur', 'les leurs',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE RESPELLINGS. SIX REPAIRS, ONE TABLE, THREE STATES EACH.
 *
 *  Corrections §6 AS AMENDED BY §14.1. §6 tells you to split the repair table
 *  by ROW — VISIBLE where the checker flags the stored value, INVISIBLE where
 *  it does not — and §14.1 says that split assumes a row holds one nasal and
 *  produces a half-repair that reports clean and is still wrong.
 *
 *  So: ONE table. Every entry carries `half`, the value you get by repairing
 *  ONLY WHAT THE CHECKER REPORTS, and all three states are asserted through
 *  the real `hasPlainNasalFor`:
 *
 *      stored   IS flagged      (every one of these six is visible)
 *      half     is NOT flagged
 *      to       is NOT flagged
 *
 *  and `half !== to` exactly where `house` is true.
 *
 *  §14.1 also demands the third field: `blind` (the checker cannot see the
 *  nasal) and `house` (the minimal repair does not reach the house value) are
 *  two different reasons for one symptom and must not be conflated into one
 *  boolean. Five of these six are `house`, and NONE is `blind`, which is worth
 *  recording: every nasal in this lesson's lexicon ends a token, so the
 *  word-internal blind spot §6 documents does not fire here at all.
 *
 *  THE HOUSE VALUES ARE READ OFF PUBLISHED ROWS, NOT INVENTED (a2.15 §13):
 *
 *    GRAHⁿ    four published rows already hold it, against one that does not
 *    BYEHⁿ    fr.sons.mots-essentiels.045, the bare headword
 *    MWEHⁿ    fr.sons.jours-et-mois.065 « moins le quart » -> MWEHⁿ luh KAR
 *             fr.sons.jours-et-mois.066 « moins dix »      -> MWEHⁿ DEES
 *             fr.sons.voyelles.399 « Le chou est moins cher que la laitue. »
 *                                  -> LUH SHOO EH MWEHⁿ SHEHR KUH LA leh-TÜ
 *
 *  That third one is this lesson's own frame, published, and correctly
 *  respelled. The house value for `moins` was never in doubt; two headword
 *  rows simply never got it.
 * ══════════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string;
  fr: string;
  from: string;
  /** The value the checker's own report produces. */
  half: string;
  to: string;
  /** The checker cannot see the nasal at all. */
  blind: boolean;
  /** The minimal repair is clean and is still not the house value. */
  house: boolean;
  why: string;
};

/** NOT `as const`: with literal types the admin typecheck proves `half !== to`
 *  can never be false and rejects the comparison as unintentional, which would
 *  leave the assertion looking like a guard and being one only by accident. */
export const RESPELL_REPAIRS: Repair[] = [
  {
    id: 'fr.sons.faux-amis.024', fr: 'grand', from: 'GRAHN', half: 'GRAHⁿ', to: 'GRAHⁿ',
    blind: false, house: false,
    why: 'The one `grand` row out of six that closes the nasal with a plain n. The other five already hold GRAHⁿ, so the minimal repair IS the house value and half === to. Named by the prompt.',
  },
  {
    id: 'fr.b2.ethique.052', fr: 'le bien', from: 'BYAN', half: 'BYAⁿ', to: 'BYEHⁿ',
    blind: false, house: true,
    why: 'Named by the prompt. The minimal repair BYAⁿ is clean and is not the house value: /ɛ̃/ is written EHⁿ across 99 rows of fr.sons.nasales. This is a2.17 §14.1\'s `bien` case a second time, in a different theme.',
  },
  {
    id: 'fr.b2.philosophie.084', fr: 'le bien', from: 'luh byahn', half: 'luh byahⁿ', to: 'luh BYEHⁿ',
    blind: false, house: true,
    why: 'THE THIRD `bien` RESPELLING, which the prompt does not know about. Same word, same defect, and it also lacks the house stress capital. Found by corpus:probe, which reports competing respellings.',
  },
  {
    id: 'fr.sons.mots-essentiels.140', fr: 'moins', from: 'MWAN', half: 'MWAⁿ', to: 'MWEHⁿ',
    blind: false, house: true,
    why: 'THE BARE HEADWORD OF ONE OF THIS LESSON\'S THREE DEGREE WORDS, and the prompt does not name it. This build authors MWEHⁿ in three rows; leaving the headword at MWAN would have the lesson contradict the corpus on its own middle word.',
  },
  {
    id: 'fr.sons.nombres.099', fr: 'moins', from: 'MWAN', half: 'MWAⁿ', to: 'MWEHⁿ',
    blind: false, house: true,
    why: 'The second bare `moins` headword, in `nombres` (the minus sign). Repaired with the first because the flashcard hub can serve either, and a learner meeting the wrong one has met the wrong one.',
  },
  {
    id: 'fr.sons.expressions-utiles.069', fr: 'moins vite', from: 'mwan VEET', half: 'mwaⁿ VEET', to: 'mwehⁿ VEET',
    blind: false, house: true,
    why: '`moins vite` is one of the four forms a2.17 reserved for this unit by name, and this lesson teaches it. Repaired because it is displayed.',
  },
];

export const REPAIR_IDS = RESPELL_REPAIRS.map((r) => r.id);

/** Rows read during the build and deliberately LEFT ALONE, with the reason.
 *
 *  a2.17's precedent: « 499 rows in this corpus end in MAHN and a build that
 *  repaired all of them would be a migration rather than a lesson. » Repair
 *  what you display; NAME the rest so the next author knows the word is
 *  respelled in more than one place. */
export const NOT_REPAIRED: readonly { id: string; fr: string; respell: string; why: string }[] = [
  { id: 'fr.sons.mots-essentiels.126', fr: 'au moins', respell: 'OH MWAN', why: 'A third `moins` row, and a fixed expression this lesson does not display. `au moins` means "at least", not "less than", and importing it would put a different sense of the word on a comparison card.' },
  { id: 'fr.sons.mots-essentiels.169', fr: 'à moins que', respell: 'AH MWAN KUH', why: 'A conjunction, not a degree word. Same reason.' },
  { id: 'fr.sons.expressions-utiles.099', fr: 'plus ou moins', respell: 'plü-zoo-MWAN', why: 'Not displayed, and its `plü-zoo` half is CORRECT and is the liaison evidence `s07-plus` teaches from. Repairing the tail would leave a row half-owned by this lesson.' },
  { id: 'fr.b1.negation-et-restriction.044', fr: 'ni plus ni moins', respell: 'nee ploos nee mwan', why: 'A b1 fixed expression in a theme this unit does not touch.' },
  { id: 'fr.sons.mots-de-liaison.075', fr: "il n'en demeure pas moins que", respell: 'eel-nahn-duh-MUR-pa-mwan-KUH', why: 'b2 register, seven words, and two separate defects. Not this lesson\'s to fix.' },
  { id: 'fr.sons.alphabet.117', fr: 'sont', respell: 'SOHN', why: '`sont` closes its nasal with a plain n, and this build authors `suh SOHⁿ` in two rows. Not displayed here: alphabet.117 is a spelling-lesson row and repairing it reaches into sons.01.' },
  { id: 'fr.sons.adjectifs-essentiels.010', fr: 'long', respell: 'LOHN', why: 'The same defect on `long`. This lesson uses the FEMININE `longue`, whose row (fr.sons.muettes.052, LOHⁿG) is already correct, so `long` is never displayed.' },
  { id: 'fr.sons.adjectifs-essentiels.169', fr: 'intéressant', respell: 'an-tay-reh-SAHN', why: 'TWO plain nasals in one row, and E(153) authors the correct `ahⁿ-tay-reh-SAHⁿ`. Not imported, so not displayed, so not repaired. Named because the two values now disagree in the corpus and a later author should know which is house.' },
  { id: 'fr.a2.communaute.026', fr: 'le jardin public', respell: 'LUH zhahr-DAN pü-BLEEK', why: 'The corpus\'s only `jardin` respelling, and it is broken. E(141) and E(143) author `zhar-DEHⁿ`, derived from the house /ɛ̃/ = EHⁿ that 99 fr.sons.nasales rows use and from `zhar-` in fr.a1.metiers.026. Not displayed here.' },
  { id: 'fr.sons.mots-essentiels.141', fr: 'plus', respell: 'PLÜ', why: 'NOT A DEFECT, AND NOT A VARIANT TO SETTLE. `plus` genuinely has two pronunciations and this lesson is the one that teaches the split: PLÜ before a describing word, PLÜSS with nothing after it. fr.sons.nombres.098 and fr.sons.muettes.060 hold PLÜS and are equally right.' },
  { id: 'fr.a2.comparaisons.113', fr: 'plus', respell: '(none)', why: 'ALL SEVENTEEN deck-able rows in this theme carry a NULL respelling and this build fills none of them. For `plus` a respelling would have to pick between PLÜ and PLÜSS, and the whole of `s07-plus` is that it is both. Filling the other sixteen and leaving that one would be worse than filling none.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE ROWS
 *
 *  Doctrine §E as settled by a2.05 and a2.20: a conjugated form is never a
 *  corpus item and a participle is never one. Everything here is a fixed
 *  chunk or a full sentence, plus ONE bare word (`mieux`) that is an adverb
 *  and therefore has no gender.
 *
 *  Sentence budget 14 words. Nothing here reaches nine.
 *
 *  NOT ONE ROW IS GENDERED. `gender` is set on no row this build authors, so
 *  none of them can join a1.03's measured ending population. The imports are
 *  checked the same way in the merge.
 *
 *  WHY THESE AND NOT MORE. The theme already publishes 129 rows and this build
 *  authors 31. Every one of the 31 is a gap the probe found:
 *
 *    the minimal triple      the corpus has the degrees and no minimal pair
 *    the dictée frames       every published sentence is WORD mode; a lesson
 *                            about an agreement can only be tested in LETTERS
 *    the four-form grid      `les plus grandes` is 0 rows anywhere, and the
 *                            other three cells sit on three different nouns
 *    `mieux`, `le mieux`     0 headword rows in 48,888
 *    the `aussi` completions each one finishes a published pair
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const sent = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,
});
const phrase = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,
});
const word = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'word', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,
});

/** Every authored row carries BOTH `flashcard` and `voiceflash`.
 *  `flashhub-coverage.test.ts` strands any a1/a2 word or phrase missing either
 *  unless its drill signature is exactly one of the separate-pool ones, and
 *  this theme's own `.113`-`.132` are `flashcard+voiceflash`. Sentences are
 *  exempt from that check and carry both anyway, because `practice` needs
 *  voiceflash and every deckTranche release needs flashcard, and the 112
 *  published sentences in this theme have NEITHER. */
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/* ── THE MINIMAL TRIPLE. .133-.135 ─────────────────────────────────────────
 *  One subject, one describing word, three middles. Corrections §3: the corpus
 *  has the forms and no minimal pair, and it holds here even though the
 *  evidence is rich. `.001` is `Mon frère est plus grand que moi.` and `.004`
 *  is `Ma sœur est aussi grande que moi.`; putting those two side by side
 *  changes the subject, the gender and the middle word at once.               */

export const TRIPLE_ROWS: Row[] = [
  sent(133, 'Il est plus grand que moi.', 'He is taller than me.', 'EEL EH plü GRAHⁿ kuh MWAH', ['triple', 'plus'], FCVR),
  sent(134, 'Il est moins grand que moi.', 'He is less tall than me.', 'EEL EH mwehⁿ GRAHⁿ kuh MWAH', ['triple', 'moins'], FCVR),
  sent(135, 'Il est aussi grand que moi.', 'He is as tall as me.', 'EEL EH toh-see GRAHⁿ kuh MWAH', ['triple', 'aussi'], FCVR),
];

/* ── THE DICTÉE. .136-.140 ─────────────────────────────────────────────────
 *  ALL FIVE RESOLVE TO LETTERS MODE through the real `dicteeMode`, asserted in
 *  the batch rather than counted by eye.
 *
 *  Corrections §4: word mode hands every real word over pre-spelled, so a
 *  lesson about a written distinction can only be tested in LETTERS. This
 *  lesson's written distinctions are the middle word and the article, and
 *  `Il est plus grand.` beside `Il est le plus grand.` makes the article's
 *  arrival a thing the learner has to type.
 *
 *  Every published sentence in this theme is word mode: the shortest,
 *  `Il fait moins froid qu'hier.`, is 22 letters. Not one of them could have
 *  been used.
 *
 *  E(136) IS ALSO TRAP 3. `Il est plus grand.` is a complete French sentence
 *  and it is not a comparison. `s17-errors` and the quiz both turn on it.    */

export const DICTEE_ROWS: Row[] = [
  sent(136, 'Il est plus grand.', 'He is taller.', 'EEL EH plü GRAHⁿ', ['dictee', 'no-que'], FCVDR),
  sent(137, 'Il est moins grand.', 'He is less tall.', 'EEL EH mwehⁿ GRAHⁿ', ['dictee', 'moins'], FCVDR),
  sent(138, 'Il est le plus grand.', 'He is the tallest.', 'EEL EH luh plü GRAHⁿ', ['dictee', 'super'], FCVDR),
  sent(139, 'Il travaille mieux.', 'He works better.', 'EEL trah-VAHY MYUH', ['dictee', 'mieux'], FCVDR),
  sent(140, 'Il est meilleur.', 'He is better.', 'EEL EH meh-YUHR', ['dictee', 'meilleur'], FCVDR),
];

/* ── THE FOUR-FORM SUPERLATIVE GRID. .141-.144 ─────────────────────────────
 *  ONE FRAME, FOUR CELLS. Trap 2: the superlative agrees and the article
 *  carries it. That is a2.03's four-form grid inside this lesson's frame, and
 *  the learner has the rule and will not think to apply it here.
 *
 *  The corpus publishes three of the four cells on THREE DIFFERENT NOUNS
 *  (`bâtiment`, `fenêtre`, `arbres`) and the fourth, `les plus grandes`, is
 *  ZERO ROWS ANYWHERE. So the grid did not exist in any form.
 *
 *  `jardin` and `maison` were chosen over `arbre` and `fenêtre` because
 *  `grand arbre` liaises and the liaison tie U+203F renders as a low
 *  underscore on a Pixel 6. `grand jardin` has no liaison at all.            */

export const GRID_ROWS: Row[] = [
  sent(141, "C'est le plus grand jardin du quartier.", "It's the biggest garden in the neighbourhood.", 'SEH luh plü GRAHⁿ zhar-DEHⁿ dü kar-TYAY', ['grid', 'ms'], FCVR),
  sent(142, "C'est la plus grande maison du quartier.", "It's the biggest house in the neighbourhood.", 'SEH la plü GRAHⁿD meh-ZOHⁿ dü kar-TYAY', ['grid', 'fs'], FCVR),
  sent(143, 'Ce sont les plus grands jardins du quartier.', 'They are the biggest gardens in the neighbourhood.', 'suh SOHⁿ lay plü GRAHⁿ zhar-DEHⁿ dü kar-TYAY', ['grid', 'mp'], FCVR),
  sent(144, 'Ce sont les plus grandes maisons du quartier.', 'They are the biggest houses in the neighbourhood.', 'suh SOHⁿ lay plü GRAHⁿD meh-ZOHⁿ dü kar-TYAY', ['grid', 'fp'], FCVR),
];

/** The four cells, as the test reads them. Asserted CELL BY CELL, by name, so
 *  a dropped form fails with the form it dropped rather than with a count. */
export const GRID_CELLS = [
  { form: 'le plus grand', id: E(141), gender: 'm', number: 'singular' },
  { form: 'la plus grande', id: E(142), gender: 'f', number: 'singular' },
  { form: 'les plus grands', id: E(143), gender: 'm', number: 'plural' },
  { form: 'les plus grandes', id: E(144), gender: 'f', number: 'plural' },
] as const;

/* ── THE ARTICLE ARRIVES. .145 ─────────────────────────────────────────────
 *  The comparative twin of E(141), same noun, same frame, one article of
 *  difference. Required layout 3 is these two adjacent.                      */

export const ADJACENT_ROWS: Row[] = [
  sent(145, "Ce jardin est plus grand que l'autre.", 'This garden is bigger than the other one.', 'suh zhar-DEHⁿ eh plü GRAHⁿ kuh LOHTR', ['adjacent', 'plus'], FCVR),
];

/* ── meilleur AND mieux. .146-.150 ─────────────────────────────────────────
 *  Required layout 2, and the trapDrill.
 *
 *  E(146) IS THE MINIMAL PAIR'S OTHER HALF. `fr.a2.comparaisons.066` is
 *  « Il travaille mieux que son collègue. » and it is published; the adjective
 *  twin in the same frame did not exist. Together they differ by exactly the
 *  verb and the word, so the part of speech is visible rather than asserted:
 *
 *      Il EST      meilleur que son collègue.    est   -> describing word
 *      Il TRAVAILLE mieux    que son collègue.   verb  -> the other one
 *
 *  E(147) FILLS A HOLE IN THE WHOLE CORPUS. `mieux` appears in 301 published
 *  sentences and has NEVER been a headword, in any theme, at any level. The
 *  only near miss is `fr.sons.voyelles.174` « le mieux », which a2.17 read and
 *  refused to import because it is gendered `m` and would join a1.03's ending
 *  population. E(148) is that phrase authored cleanly, with no gender.
 *
 *  `plus bon` IS NOT HERE AND NEVER WILL BE. It is not French. It appears in
 *  exactly one place in this build, as the ERROR half of an errorSpot item,
 *  and the guard is scoped to allow that one location.                        */

export const BETTER_ROWS: Row[] = [
  sent(146, 'Il est meilleur que son collègue.', 'He is better than his colleague.', 'EEL EH meh-YUHR kuh sohⁿ koh-LEHG', ['better', 'meilleur'], FCVR),
  word(147, 'mieux', 'better (after a verb)', 'MYUH', ['better', 'mieux'], FCVR),
  // `le mieux de tous`, NOT the bare `le mieux`, AND THE TEST FOUND IT.
  // `flashhub-coverage.test.ts` dedupes per theme on the article-stripped `fr`,
  // so `le mieux` normalises to `mieux` and would have collided with E(147),
  // which is a seed-wide failure and not a local one. The longer form is what
  // a2.17 reserved (`le mieux` is a substring of it), it is ordinary French,
  // and it carries the `de` that follows an adverb superlative as well, which
  // the bare phrase could not show.
  phrase(148, 'le mieux de tous', 'the best of all (after a verb)', 'luh MYUH duh TOOS', ['better', 'mieux'], FCVR),
  sent(149, 'Elle parle mieux que moi.', 'She speaks better than me.', 'EL PARL MYUH kuh MWAH', ['better', 'mieux'], FCVR),
  sent(150, 'Elle cuisine mieux que moi.', 'She cooks better than me.', 'EL kwee-ZEEN MYUH kuh MWAH', ['better', 'mieux'], FCVR),
];

/* ── THE `aussi` COMPLETIONS. .151-.155 ────────────────────────────────────
 *  §A.1: the prompt was wrong that `aussi … que` has zero occurrences, and it
 *  was right that it is the thin degree. Thirteen rows in this theme carry
 *  `aussi` against dozens for `plus`.
 *
 *  EACH OF THESE FIVE FINISHES A PUBLISHED SET, one word of difference from a
 *  row already in the theme:
 *
 *    E(151) E(152)  <- .014  Cette rue est plus longue que l'avenue.
 *    E(153)         <- .005  Ce livre est plus intéressant que le film.
 *    E(154)         <- .006  Il fait moins froid qu'hier.
 *    E(155)         <- .083  Ce fromage sent plus fort que l'autre.
 *
 *  E(151) and E(152) are also the FEMININE frame: `longue` agrees, and it does
 *  so in exactly the position `grand` does not move in. That is a2.03 applied
 *  inside the frame rather than re-taught.                                    */

export const AUSSI_ROWS: Row[] = [
  sent(151, "Cette rue est moins longue que l'avenue.", 'This street is shorter than the avenue.', 'set RÜ eh mwehⁿ LOHⁿG kuh lav-NÜ', ['aussi-gap', 'moins', 'fem'], FCVR),
  sent(152, "Cette rue est aussi longue que l'avenue.", 'This street is as long as the avenue.', 'set RÜ eh toh-see LOHⁿG kuh lav-NÜ', ['aussi-gap', 'aussi', 'fem'], FCVR),
  sent(153, 'Ce livre est aussi intéressant que le film.', 'This book is as interesting as the film.', 'suh LEEVR eh toh-see ahⁿ-tay-reh-SAHⁿ kuh luh FEELM', ['aussi-gap', 'aussi'], FCVR),
  sent(154, "Il fait aussi froid qu'hier.", 'It is as cold as yesterday.', 'EEL FEH oh-see FRWAH KYEHR', ['aussi-gap', 'aussi'], FCVR),
  sent(155, 'Ce café est aussi fort que le thé.', 'This coffee is as strong as the tea.', 'suh ka-FAY eh toh-see FOR kuh luh TAY', ['aussi-gap', 'aussi'], FCVR),
];

/* ── THE DEGREE CARDS. .156-.163 ───────────────────────────────────────────
 *  The theme publishes seventeen deck-able cards and they are an incomplete
 *  set: `plus grand` and `aussi grand` with no `moins grand`, `plus rapide`
 *  alone, `moins cher` and `plus cher` with no `aussi cher`. These eight
 *  finish three triples and add the adverb one.
 *
 *  .161-.163 ARE a2.17'S RESERVATION, TAKEN. `adverbes-corpus.ts:560` reads
 *  `RESERVED_FOR_A208 = ['mieux', 'plus vite', 'le mieux', 'moins vite']` and
 *  asserts that none of the four appears on any learner surface in a2.17. All
 *  four land here: `mieux` at E(147), `le mieux` at E(148), `plus vite` at
 *  E(161) and `moins vite` at E(162). `aussi vite` completes that triple too.
 *
 *  `plus mauvais` at E(160) is the asymmetry that makes `plus bon` teachable.
 *  `bon` has no `plus bon`; `mauvais` has BOTH `pire` and `plus mauvais`, and
 *  both are ordinary French. A learner told only « never say plus + the word »
 *  has been taught a rule that is false one word later.                       */

export const DEGREE_ROWS: Row[] = [
  phrase(156, 'moins grand', 'less big', 'mwehⁿ GRAHⁿ', ['card', 'moins'], FCVR),
  phrase(157, 'aussi cher', 'just as expensive', 'oh-see SHEHR', ['card', 'aussi'], FCVR),
  phrase(158, 'moins rapide', 'slower', 'mwehⁿ rah-PEED', ['card', 'moins'], FCVR),
  phrase(159, 'aussi rapide', 'just as fast', 'oh-see rah-PEED', ['card', 'aussi'], FCVR),
  phrase(160, 'plus mauvais', 'worse', 'plü moh-VEH', ['card', 'plus', 'asymmetry'], FCVR),
  phrase(161, 'plus vite', 'faster', 'plü VEET', ['card', 'adverb', `${Cap(unitRef('a2.17'))}`], FCVR),
  phrase(162, 'moins vite', 'more slowly', 'mwehⁿ VEET', ['card', 'adverb', `${Cap(unitRef('a2.17'))}`], FCVR),
  phrase(163, 'aussi vite', 'just as fast', 'oh-see VEET', ['card', 'adverb', `${Cap(unitRef('a2.17'))}`], FCVR),
];

export const ALL_ROWS: Row[] = [
  ...TRIPLE_ROWS, ...DICTEE_ROWS, ...GRID_ROWS, ...ADJACENT_ROWS,
  ...BETTER_ROWS, ...AUSSI_ROWS, ...DEGREE_ROWS,
];

export const DICTEE_IDS = DICTEE_ROWS.map((r) => r.id);
export const DICTEE_MODE_EXPECTED = 'letters' as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE IMPORTS, AND THE DRILL TRAP THAT DECIDES WHERE EACH ONE GOES
 *
 *  §A.6: `fr.a2.comparaisons` splits into three drill populations and only one
 *  of the three can be released by a deckTranche.
 *
 *      .001-.056   drills = {dictation}            56 rows
 *      .057-.112   drills = {sentence}             56 rows
 *      .113-.132   drills = {flashcard,voiceflash} 17 rows
 *
 *  A `deckTranche` release of anything from the first two populations
 *  validates, publishes and serves no card — a1.08's failure, which a2.31 met
 *  again at eighteen rows and a2.32 at ten. Here it would be at 112.
 *
 *  So: the seventeen are released by tranches. EVERY IMPORTED SENTENCE IS
 *  REACHABLE BY BEING NAMED BY itemId — in a `groupDrill` item, a lesson
 *  `term` example or a `LessonDrill` — and the batch asserts both directions:
 *  a release that would draw nothing, and an import nothing names.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** THE SEVENTEEN DECK-ABLE ROWS. `flashcard + voiceflash`, the only
   *  population in this theme that a deck can serve and `practice` can speak.
   *  All seventeen are released. */
  deck: [
    E(113), E(114), E(115), E(116), E(117), E(118), E(119),
    E(120), E(121), E(122), E(123), E(124), E(125),
    E(129), E(130), E(131), E(132),
  ],

  /** THE TEN DESCRIBING WORDS THE PROMPT LISTS, every one already a headword
   *  with a house respelling. ZERO AUTHORED, exactly as the prompt says.
   *  All `flashcard + voiceflash`, all ungendered, so all deck-able and none
   *  of them can move a1.03's ending population. */
  words: [
    'fr.sons.adjectifs-essentiels.001',   // grand      GRAHⁿ
    'fr.sons.adjectifs-essentiels.002',   // petit      pə-TEE
    'fr.sons.adjectifs-essentiels.003',   // bon        BOHⁿ
    'fr.sons.adjectifs-essentiels.004',   // mauvais    moh-VEH
    'fr.sons.adjectifs-essentiels.018',   // facile     fah-SEEL
    'fr.sons.adjectifs-essentiels.019',   // difficile  dee-fee-SEEL
    'fr.sons.adjectifs-essentiels.020',   // rapide     rah-PEED
    'fr.sons.adjectifs-essentiels.176',   // cher       SHEHR
    'fr.sons.adjectifs-essentiels.062',   // meilleur   meh-YUHR
    'fr.sons.adjectifs-essentiels.063',   // pire       PEER
    'fr.sons.mots-essentiels.045',        // bien       BYEHⁿ   <- the house value
    'fr.sons.mots-essentiels.046',        // mal        MAL
  ],

  /** THE THREE DEGREES AS PUBLISHED EVIDENCE. Named by `s08-unseen` and by the
   *  terms, never released: every one is `dictation`-only or `sentence`-only. */
  degrees: [
    E(1),     // Mon frère est plus grand que moi.        the anchor
    E(4),     // Ma sœur est aussi grande que moi.        THE ROW THE PROMPT SAID DID NOT EXIST
    E(5),     // Ce livre est plus intéressant que le film.   pairs with E(153)
    E(6),     // Il fait moins froid qu'hier.                 pairs with E(154)
    E(14),    // Cette rue est plus longue que l'avenue.      pairs with E(151)/E(152)
    E(63),    // Le train est plus rapide que le bus.
    E(83),    // Ce fromage sent plus fort que l'autre.       pairs with E(155)
  ],

  /** THE SUPERLATIVE AS PUBLISHED EVIDENCE. Same reachability rule. */
  superlatives: [
    E(29),    // C'est le plus grand bâtiment de la ville.
    E(31),    // Ce sont les plus grands arbres du parc.
    E(55),    // C'est la plus grande fenêtre de la pièce.
    E(41),    // C'est le moins cher des deux hôtels.
    E(86),    // Elle est la plus jeune de la famille.
    E(88),    // Il est le plus rapide de l'équipe.
    E(103),   // C'est la question la plus difficile de l'examen.
  ],

  /** meilleur / mieux / pire, AS PUBLISHED. E(66) is the minimal pair's other
   *  half and E(92) is the only published `le mieux` sentence. */
  better: [
    E(9),     // Ce gâteau est meilleur que l'autre.
    E(34),    // C'est le meilleur restaurant du quartier.
    E(35),    // C'est la meilleure boulangerie de la rue.
    E(36),    // Ce sont les meilleurs joueurs de l'équipe.
    E(66),    // Il travaille mieux que son collègue.     <- the pair with E(146)
    E(92),    // Elle chante le mieux de toute la classe.
    E(37),    // C'est le pire moment pour partir.
    E(78),    // Elle parle aussi bien anglais que moi.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Themes this unit reads from and never writes to. Both are cut-affected and
 *  the merge prints their seed population before it runs. */
export const IMPORT_ONLY_THEMES = ['adjectifs-essentiels', 'mots-essentiels'] as const;

/** The two populations in this theme that NO deck can serve. Restated as a
 *  list the batch can assert against `deckTranche` rather than as a comment
 *  nobody runs. Everything imported outside `IMPORTED.deck` and
 *  `IMPORTED.words` is in it. */
export const NOT_DECK_ABLE = [
  ...IMPORTED.degrees, ...IMPORTED.superlatives, ...IMPORTED.better,
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G.1. DISPLAY PARITY, AND THE WEAKNESS THE MUTATION TEST FOUND
 *
 *  Invariants §5: « The corpus file is the single source of truth for every
 *  `fr`, `ipa`, `respell` and `en` the lesson displays; the lesson reads them
 *  through helpers and never restates them. »
 *
 *  EVERY SHIPPED LESSON IN THIS BAND BREAKS THAT, INCLUDING a2.32, AND SO DOES
 *  THIS ONE. A `cardDeck` card and a `tapTable` cell carry inline strings, not
 *  itemIds, so the French on a card is a SECOND COPY of the row behind it. The
 *  mutation harness proved the consequence: changing `fr.a2.comparaisons.134`
 *  from « Il est moins grand que moi. » to « Il est moins rapide que moi. »
 *  destroyed the one thing required layout 1 exists for, and EVERY GUARD IN
 *  THIS BUILD STAYED GREEN, because the tapTable still said what it had always
 *  said and the corpus row it claimed to show had walked away.
 *
 *  The renderer cannot be changed from a content build. What CAN be done is
 *  pin the pairs where the copy matters: the section must carry the row's `fr`
 *  VERBATIM, checked against the row rather than against a retyped constant.
 *  A corpus edit that the card does not follow now fails.
 *
 *  Scoped to the strings that ARE the teaching. A card quoting a sentence in
 *  passing is not on this list; the four-form grid and the three degrees are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DISPLAY_PARITY: readonly { section: string; itemId: string; why: string }[] = [
  { section: 's03-three', itemId: E(133), why: 'required layout 1, the plus row' },
  { section: 's03-three', itemId: E(134), why: 'required layout 1, the moins row' },
  { section: 's03-three', itemId: E(135), why: 'required layout 1, the aussi row' },
  { section: 's08-unseen', itemId: E(133), why: 'the generalisation mission opens on the triple' },
  { section: 's08-unseen', itemId: E(134), why: 'the same' },
  { section: 's08-unseen', itemId: E(135), why: 'the same' },
  { section: 's10-super', itemId: E(145), why: 'required layout 3, the comparative half' },
  { section: 's10-super', itemId: E(141), why: 'required layout 3, the superlative half' },
  { section: 's11-four', itemId: E(141), why: 'the four-form grid, masculine singular' },
  { section: 's11-four', itemId: E(142), why: 'the four-form grid, feminine singular' },
  { section: 's11-four', itemId: E(143), why: 'the four-form grid, masculine plural' },
  { section: 's11-four', itemId: E(144), why: 'the four-form grid, feminine plural' },
  { section: 's14-sort', itemId: E(141), why: 'the sort names it by itemId AND prints it' },
  { section: 's14-sort', itemId: E(143), why: 'the same' },
  { section: 's14-sort', itemId: E(142), why: 'the same' },
  { section: 's14-sort', itemId: E(144), why: 'the same' },
  { section: 's15-pair', itemId: E(146), why: 'required layout 2, the meilleur half of the minimal pair' },
  { section: 's15-pair', itemId: E(66), why: 'required layout 2, the published mieux half' },
  { section: 's09-flash', itemId: E(133), why: 'the frame, from the English' },
  { section: 's09-flash', itemId: E(134), why: 'the same' },
  { section: 's09-flash', itemId: E(135), why: 'the same' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE GENERALISATION TEST
 *
 *  Doctrine §B.1: an A2 learner leaves able to say things the lesson never
 *  said. The prompt states it in terms: « Build at least one mission that
 *  requires exactly that — hand them a describing word from
 *  `adjectifs-essentiels` that you do not teach and require the full
 *  comparison. »
 *
 *  `poli` was chosen AGAINST THE CORPUS, not by taste:
 *
 *    - it is `fr.sons.adjectifs-essentiels.088`, respelled `poh-LEE`, so the
 *      learner may already have met it and the question still works
 *    - it appears in ZERO rows of `comparaisons` at any level, bare or
 *      inflected, so nothing this lesson imports can leak the answer
 *    - its feminine is the regular `-e`, so a2.03 supplies everything the
 *      learner needs and this lesson supplies only the frame
 *
 *  `lourd`, `propre`, `court` and `froid` were all rejected for the same
 *  reason: each appears inside a `comparaisons` sentence this lesson would
 *  otherwise have imported, which would put the answer in the lesson's own
 *  vocabulary and delete the question. `lent` was rejected because
 *  `fr.b2.comparaisons.044` is « légèrement plus lent ».
 *
 *  NOT IMPORTED, NOT AUTHORED, AND NAMED BY NO SECTION except the two that
 *  ASK for it. The test asserts its absence from the lesson's vocabulary by
 *  name, in both directions.
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNSEEN = {
  adj: 'poli',
  fem: 'polie',
  en: 'polite',
  id: 'fr.sons.adjectifs-essentiels.088',
  respell: 'poh-LEE',
  answer: 'Il est plus poli que moi.',
} as const;

/** Rejected candidates, with the row that disqualified each. Kept so the next
 *  author does not re-run the search. */
export const UNSEEN_REJECTED = [
  { adj: 'lourd', why: 'fr.a2.comparaisons.062 « Cette table est aussi lourde que la chaise. »' },
  { adj: 'propre', why: 'fr.a2.comparaisons.076 « Cette chambre est aussi propre que la cuisine. »' },
  { adj: 'court', why: 'fr.a2.comparaisons.102 « C\'est le jour le plus court de l\'année. »' },
  { adj: 'froid', why: 'fr.a2.comparaisons.006, .047 and .060 all carry it, and E(154) authors a fourth.' },
  { adj: 'lent', why: 'fr.b2.comparaisons.044 « légèrement plus lent »' },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE CITATIONS, BY UNIT ID
 * ══════════════════════════════════════════════════════════════════════════ */

export const AGREEMENT_UNIT = 'a2.03';
export const ADVERB_UNIT = 'a2.17';
export const SPLIT_UNIT = 'a2.14';       // savoir/connaître — the same shape
export const NEGATION_UNIT = 'a1.18';    // ne … plus. Named once, taught nowhere.

/** a2.03's own file reserves these for this unit (`COMPARATIVE_FORMS`,
 *  accord-adjectifs-corpus.ts:414) and asserts they appear nowhere in it.
 *  Quoted here so the hand-off is checkable from both ends. */
export const A203_RESERVED = ['plus grand', 'moins grand', 'le plus grand', 'aussi grand', 'meilleur'] as const;

/** a2.17's own file reserves these (`RESERVED_FOR_A208`,
 *  adverbes-corpus.ts:560) and asserts `mieux` appears on NO learner surface
 *  in that lesson. ALL FOUR ARE TAKEN HERE, and the test names the row that
 *  takes each one. */
export const A217_RESERVED = ['mieux', 'plus vite', 'le mieux', 'moins vite'] as const;
export const A217_TAKEN_BY: Record<string, string> = {
  mieux: E(147),
  'le mieux': E(148),
  'plus vite': E(161),
  'moins vite': E(162),
};

/** a2.17 read `fr.sons.voyelles.174` « le mieux » and refused it because it is
 *  gendered `m` and importing it would join a1.03's ending population. This
 *  build reaches the same conclusion independently and authors E(148) instead,
 *  ungendered. Named so the reason survives. */
export const MIEUX_ROW_NOT_IMPORTED = {
  id: 'fr.sons.voyelles.174', fr: 'le mieux', respell: 'myuh', gender: 'm',
  why: 'Gendered `m` on a single-word noun, which is the shape that joins a1.03\'s measured ending population. a2.17 refused it for the same reason. E(148) is the clean row.',
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE THREE TRAPS
 * ══════════════════════════════════════════════════════════════════════════ */

/** TRAP 1, and the trapDrill. English has one "better"; French has two and the
 *  split is by part of speech. This is a2.14's savoir/connaître shape a second
 *  time and the roundup names that unit. */
export const PLUS_BON = 'plus bon';
export const PLUS_BIEN = 'plus bien';

/** WHERE `plus bon` AND `plus bien` MAY APPEAR, BY SECTION ID.
 *
 *  THE PROMPT'S TEST LIST CONTRADICTS ITS OWN REQUIRED LAYOUT AND THIS IS THE
 *  RESOLUTION. The test list says « `plus bon` appears only inside an
 *  `errorSpot` item as the error, and the assertion is scoped to allow that one
 *  location. » Required layout 2, four paragraphs earlier, says « `meilleur`
 *  and `mieux` side by side, WITH `plus bon` SHOWN AS WHAT FRENCH REFUSES »,
 *  which puts it on a cardDeck card. And the scene the prompt specifies is
 *  somebody « reaching `plus bon`, hearing it land wrong, and abandoning the
 *  sentence », which puts it in a bubble, a choice option and a break.
 *
 *  One location was never possible. What IS possible, and is stronger, is to
 *  pin EVERY location by id: a sixth one fails, and so does the disappearance
 *  of any of these five.
 *
 *      s01-scene    the failure itself, which is the lesson's reason to exist
 *      s15-pair     required layout 2
 *      s16-trap     the wrong reading each trap card corrects
 *      s17-errors   the two error cards
 *      s22-quiz     two errorSpot prompts and two mcq distractors
 *
 *  `d-better` is a LessonDrill rather than a section and is allowed by name in
 *  the batch, for the same reason `s16-trap` is: its distractor IS the error.
 *
 *  Checked as a SUBSTRING, so `plus bonne` is caught by the `plus bon` entry.
 *  `moins bon` and `aussi bon` are ordinary French and are NOT on this list. */
export const REFUSED_FORMS = [PLUS_BON, PLUS_BIEN] as const;
export const REFUSED_ALLOWED_IN = ['s01-scene', 's15-pair', 's16-trap', 's17-errors', 's22-quiz'] as const;
export const REFUSED_ALLOWED_DRILL = 'd-better';

/* TRAP 3, RESTATED AFTER THE AUDIT, BECAUSE THE PROMPT'S VERSION IS HALF WRONG.
 *
 * The prompt says: « `Il est plus grand.` is a complete sentence and it is not
 * a comparison. English drops the second term freely; French does not. »
 *
 * The first half is right and the second is backwards. `Il est plus grand.` IS
 * a comparison: `plus` is comparative and there is no reading of that sentence
 * on which it means « he is tall » (that is `Il est grand.`). What it is, is a
 * comparison with an ELIDED second term, and BOTH languages allow that when the
 * other thing is recoverable from context: « Mon frère ? Il est plus grand. »
 * and « My brother? He's taller. » are the same move.
 *
 * The first version of this lesson took the prompt at its word and taught, in
 * four places including a SCORED mcq key, that the sentence means « he is
 * tall ». A learner who knew French would have answered correctly and been
 * marked wrong. E(136) glosses itself « He is taller. », so the lesson was
 * contradicting its own corpus row.
 *
 * WHAT IS ACTUALLY TRUE AND TEACHABLE, and what the lesson now says:
 *   - the second term hangs off `que` and off nothing else; you can never put
 *     it straight after the describing word
 *   - without it the sentence is grammatical and UNFINISHED, and the listener's
 *     next words are `plus grand que qui ?`
 */
export const QUE_PAIR = { without: E(136), with: E(133) } as const;

/** The claim the first version made, kept as a banned string so it cannot come
 *  back. Checked as a SUBSTRING over every learner surface, because it was
 *  phrased six different ways across four sections and a quiz key. */
export const GLOSS_CONTRADICTIONS = [
  'it means he is tall',
  'it simply says he is tall',
  'says he is tall',
  'is not a comparison',
  'no comparison has been made',
] as const;

/** And the row those strings contradicted, so the guard is anchored to a fact
 *  rather than to a list of phrasings: whatever the lesson says E(136) means,
 *  it must agree with the row's own gloss. */
export const GLOSS_ANCHOR = { id: E(136), en: 'He is taller.' } as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J.1. TENSES THE LEARNER DOES NOT HAVE AT SEQ 32
 *
 *  Doctrine §B.3: « Corpus sentences may use tenses the lesson body may not
 *  teach. Your lesson body is bound by the trail position; the theme is not. »
 *
 *  A SCENARIO TURN IS NOT A CORPUS SENTENCE. It is a line the learner is asked
 *  to say, and `alts` are lines they may say instead. The first version of
 *  `s19-talk` had them produce « Je dormirais mieux dans le second. » and asked
 *  « si tu devais choisir, tu prendrais lequel ? » The conditional is B1 and
 *  arrives nowhere in the 35-unit A2 trail.
 *
 *  Found by the audit, not by any gate: no shipped guard in this band checks
 *  the tense of a production surface. a2.17 wrote one for the passé composé and
 *  scoped it to that lesson.
 * ══════════════════════════════════════════════════════════════════════════ */

/** By seq 32 the learner has: present (a2.01, a2.02, a2.12, a2.13), passé
 *  composé (a2.05, a2.20, a2.21), futur proche (a2.19), imparfait (a2.31) and
 *  the pronominals (a2.22, a2.23). Not the conditional and not the subjunctive.
 *
 *  Anchored on a FRENCH SUBJECT plus the ending rather than on the ending
 *  alone: Corrections §14.4, a shape built out of French morphology reads the
 *  English as French, and `-rait` is inside `portrait`, `-rais` inside a dozen
 *  English words. */
export const OUT_OF_BAND_TENSES = [
  { name: 'conditional', shape: /(?<![\p{L}\p{N}-])(je|tu|il|elle|on|nous|vous|ils|elles)\s+\w*(rais|rait|rions|riez|raient)(?![\p{L}\p{N}'’-])/iu },
  // ANCHORED ON `que`, WITH UP TO THREE WORDS BETWEEN. The first version
  // required a subject pronoun immediately after `que` and could not see
  // « Il faut que ce soit plus grand. », which is the commonest shape there is.
  // Its own MUST_FIRE list caught that, which is the point of having one.
  { name: 'subjunctive', shape: /(?<![\p{L}\p{N}-])(que|qu['’])[\p{L}\p{N}'’ -]{0,24}?\s+(soit|soient|sois|ait|aies|aient|puisse|puisses|puissent|fasse|fasses|fassent|aille|ailles|sache|sachent|veuille|veuillent)(?![\p{L}\p{N}'’-])/iu },
];

export const TENSE_MUST_FIRE = [
  'Je dormirais mieux dans le second.',
  'Bon. Et si tu devais choisir, tu prendrais lequel ?',
  'Il faut que ce soit plus grand.',
] as const;

/** The English half of a learner surface, and the French this lesson actually
 *  ships. A guard that fires on any of these is reading letters, not French. */
export const TENSE_MUST_NOT_FIRE = [
  'Il est plus grand que moi.',
  "C'est le plus grand jardin du quartier.",
  'On dort mieux dans le second, il est plus calme.',
  'Nous avons visité deux appartements samedi.',
  'The first is nicer, quite simply.',
  'She sings the best in the whole class.',
  'You will reach for it first.',
  'A portrait of the frame, and it never moves.',
  // THE TWO THE FIRST SHAPE GOT WRONG. It allowed `\s*` before the verb, which
  // let the pattern split a word: `avait` matched as av+ait and `serait` as
  // ser+ait. Both are shipped A2 content (a2.32's scenario and a2.29's trap),
  // so the guard would have fired on two lessons the day anyone reused it.
  // Found by generalising this guard seed-wide, not by using it here.
  'Que le code avait expiré. Super.',
  "Est-ce que ce serait possible d'avoir une autre chambre ?",
] as const;

/** a2.33, seq 33, ONE AHEAD OF THIS LESSON. `celui`, `celle`, `ceux`, `celles`
 *  and their `-ci`/`-là` forms are its material and `fr.a2.comparaisons.069`
 *  carries one. Same treatment as a2.34's possessives: imported nowhere, said
 *  nowhere, and the guard covers `alts` because an alt is a line the learner
 *  may produce. The first version had one in a scenario alt. */
export const DEMONSTRATIVE_UNIT = 'a2.33';
export const DEMONSTRATIVE_FORMS = [
  'celui', 'celle', 'ceux', 'celles',
  'celui-ci', 'celui-là', 'celle-ci', 'celle-là',
  'ceux-ci', 'ceux-là', 'celles-ci', 'celles-là',
] as const;
export const DEMONSTRATIVE_MUST_FIRE = [
  'Non, celle du premier est plus petite.',
  'Ce sac est aussi lourd que celui-là.',
] as const;
/** `cette`, `ce` and `ces` are demonstrative ADJECTIVES, which a1 owns and this
 *  lesson uses in eleven sentences. A guard that catches them forbids half the
 *  corpus. */
export const DEMONSTRATIVE_MUST_NOT_FIRE = [
  "Cette rue est moins longue que l'avenue.",
  'Ce livre est aussi intéressant que le film.',
  'Ce sont les plus grands jardins du quartier.',
  'Ces exercices sont plus faciles que les précédents.',
] as const;

/** `ne … plus` is a different word doing a different job. ONE LINE on the
 *  roundup, taught nowhere, and no scored surface anywhere in this lesson
 *  contains it. */
export const NE_PLUS_SHAPES = [/\bne\s+\w+\s+plus\b/i, /\bn['’]\w+\s+plus\b/i];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. THE FOLD, AND WHAT THIS LESSON CAN AND CANNOT TEST
 *
 *  `fold()` strips accents, case, punctuation, hyphens, apostrophes and ALL
 *  whitespace. It KEEPS a final `-e` and a final `-s`, which is the whole
 *  reason the agreement on `la plus grande` is testable at all: the four
 *  superlative forms of `grand` are TWO sounds and FOUR spellings, so the ear
 *  cannot separate them and writing can.
 *
 *  What this lesson wanted to test and cannot:
 *    - `la plus grande` against `le plus grand` BY EAR. /gʁɑ̃/ against /gʁɑ̃d/
 *      is audible; /le ply gʁɑ̃/ against /le ply gʁɑ̃/ for the two plurals is
 *      not. Every plural item is `typeIn`.
 *    - `à` in `le plus grand DE la ville` against a wrong `à`. fold() strips
 *      the accent and `a` against `à` is one string.
 * ══════════════════════════════════════════════════════════════════════════ */

export const NEAR_MISSES: [string, string][] = [
  ['le plus grand', 'la plus grande'],
  ['les plus grands', 'les plus grandes'],
  ['le plus grand', 'les plus grands'],
  ['plus grand', 'plus grande'],
  ['meilleur', 'mieux'],
  ['meilleur', 'meilleure'],
  ['Il est plus grand.', 'Il est plus grand que moi.'],
  ['Il est le plus grand.', 'Il est plus grand.'],
  ['aussi grand que', 'plus grand que'],
  ['moins grand que', 'plus grand que'],
];

/** THE PAIRS THAT DO COLLIDE. Each folds to ONE string, so each is banned from
 *  every scored surface. Asserted the other way round, so the day fold()
 *  changes this list goes stale loudly instead of silently. */
export const FOLD_COLLISIONS: [string, string][] = [
  ['meilleur', 'Meilleur'],
  ['le plus âgé', 'le plus age'],
  ["l'autre", 'lautre'],
  ['plus grand que moi', 'plusgrandquemoi'],
  ['de la ville', 'De La Ville'],
  ['aussi', 'AUSSI'],
];

/** Two members of one homophone group can never be the two options of an ear
 *  question: there is no correct answer and marking one right certifies a bug.
 *  In this lesson the group is the SUPERLATIVE PLURALS, which is precisely the
 *  thing the prompt says cannot be tested by ear. Enforced as a list rather
 *  than reported in prose, because a sentence in a report cannot fail. */
export const HOMOPHONE_FORMS: readonly string[][] = [
  ['le plus grand', 'les plus grands'],
  ['la plus grande', 'les plus grandes'],
  ['meilleur', 'meilleure', 'meilleurs', 'meilleures'],
  ['plus grand', 'plus grands'],
  ['plus grande', 'plus grandes'],
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. `plus`, AND THE ONE THING IN THIS LESSON THE EAR CAN DO
 *
 *  The prompt asks for two `listenChoose` items on `plus` with its final
 *  consonant sounded or silent, « which is a real audible distinction ». It
 *  is, and the corpus has been encoding it consistently for a long time.
 *  Measured across every respelled row containing `plus`:
 *
 *    BEFORE A DESCRIBING WORD, silent            WITH NOTHING AFTER IT, sounded
 *      plü FOR          plus fort                  PLÜS    fr.sons.nombres.098
 *      plü GRAHN        plus grand                 PLÜS    fr.sons.muettes.060
 *      plü KLEHR        plus clair                 AHN PLÜS   en plus
 *      plü MÜR          plus mûrs                  DUH PLÜS   de plus
 *      plü puh-TEE      plus petit                 ah plooss  à plus
 *      plü lahⁿt-MAHⁿ   plus lentement             plü-zoo-   plus ou moins (liaison)
 *
 *  Twelve rows, no counterexample. So this is READ OFF THE CORPUS rather than
 *  asserted, and `s07-plus` teaches it from the corpus's own respellings.
 *
 *  THE RISK, NAMED RATHER THAN PAPERED OVER: the two items are spoken by
 *  device TTS, and whether Android's French voice actually renders the split
 *  is not something this build can verify on the host. Both items are
 *  therefore answerable from the sentence structure as well as from the sound,
 *  and the teaching of the split lives in the respellings, which are not
 *  spoken at all.
 * ══════════════════════════════════════════════════════════════════════════ */

/* CORRECTED BY THE AUDIT: THE SPLIT IS THREE WAYS, NOT TWO.
 *
 * The first version of this section said « silent in front of a describing
 * word, sounded with nothing after it » and put `plus intéressant` on a card
 * as a SILENT example. It is not: `plus` in front of a VOWEL liaises and the s
 * comes back as a /z/. The corpus says so and had said so all along
 * (`plus ou moins` -> `plü-zoo-MWAN`, `qui plus est` -> `kee-plooz-AY`), and
 * this build's own pre-flight probe tested `plü-zahⁿ-tay-reh-SAHⁿ` and got it
 * right before the card was written with the wrong value.
 *
 * The exception, which is real and is NOT taught here: an h aspiré blocks it.
 * `péter plus haut que son derrière` is `pay-TAY PLÜ OH`, with no z.
 */
export const PLUS_SILENT = 'plü';        // in front of a consonant
export const PLUS_LIAISON = 'plü-z';     // in front of a vowel
export const PLUS_SOUNDED = 'PLÜSS';     // with nothing after it
export const PLUS_EVIDENCE = [
  { id: 'fr.sons.expressions-utiles.068', fr: 'plus fort', respell: 'plü FOR', kind: 'silent' },
  { id: 'fr.a2.argent-quotidien.074', fr: "Vous n'avez pas plus petit ?", respell: 'voo na-vay pah plü puh-TEE', kind: 'silent' },
  { id: 'fr.a2.marche.068', fr: 'choisir les fruits les plus mûrs', respell: 'shwah-ZEER lay frwee lay plü MÜR', kind: 'silent' },
  { id: 'fr.sons.expressions-utiles.099', fr: 'plus ou moins', respell: 'plü-zoo-MWAN', kind: 'liaison' },
  { id: 'fr.sons.mots-de-liaison.067', fr: 'qui plus est', respell: 'kee-plooz-AY', kind: 'liaison' },
  { id: 'fr.sons.nombres.098', fr: 'plus', respell: 'PLÜS', kind: 'sounded' },
  { id: 'fr.sons.mots-de-liaison.002', fr: 'en plus', respell: 'AHN PLÜS', kind: 'sounded' },
  { id: 'fr.sons.mots-de-liaison.003', fr: 'de plus', respell: 'DUH PLÜS', kind: 'sounded' },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §L.1. LIAISON, AND THE FOUR ROWS THAT SHIPPED WITHOUT IT
 *
 *  `est` in front of a vowel liaises: /ɛ.t‿o.si/. Every one of this build's
 *  `est aussi` frames was authored `eh oh-see`, with the t missing, and no gate
 *  saw it. The house is unambiguous across 109 respelled rows and writes the
 *  moving consonant ONTO THE FOLLOWING SYLLABLE rather than tying it:
 *
 *      c'est en panne      SEH TAHN PAHN
 *      il est une heure    EEL EH TÜN UHR
 *      c'est à qui ?       seh-TAH KEE
 *      des écouteurs       day-zay-koo-TUR
 *
 *  That is also what avoids U+203F, which renders as a low underscore on a
 *  Pixel 6 and is live in shipped sons.10 content.
 *
 *  Asserted BY NAME, with the value that shipped wrong, so the day somebody
 *  reverts one the failure says which row and which liaison.
 * ══════════════════════════════════════════════════════════════════════════ */

export const LIAISON_ROWS: readonly { id: string; context: string; wrong: string; carries: string }[] = [
  { id: E(135), context: 'est aussi', wrong: 'EEL EH oh-see GRAHⁿ kuh MWAH', carries: 'toh-see' },
  { id: E(152), context: 'est aussi', wrong: 'set RÜ eh oh-see LOHⁿG kuh lav-NÜ', carries: 'toh-see' },
  { id: E(153), context: 'est aussi', wrong: 'suh LEEVR eh oh-see ahⁿ-tay-reh-SAHⁿ kuh luh FEELM', carries: 'toh-see' },
  { id: E(155), context: 'est aussi', wrong: 'suh ka-FAY eh oh-see FOR kuh luh TAY', carries: 'toh-see' },
];

/** Every liaison context this lesson's frames can create, as a shape the batch
 *  runs over every authored row. `moins` + vowel is here even though no row
 *  makes one, so a later author who writes `moins agréable` is caught. */
export const LIAISON_CONTEXTS = [
  { name: 'est + vowel', fr: /(?<![\p{L}\p{N}-])est\s+[aeiouéèêàâîôûùïüy](?![\p{L}]*\s*$)/iu, expect: /t/i },
  { name: 'plus + vowel', fr: /(?<![\p{L}\p{N}-])plus\s+[aeiouéèêàâîôûùïüy]/iu, expect: /z/i },
  { name: 'moins + vowel', fr: /(?<![\p{L}\p{N}-])moins\s+[aeiouéèêàâîôûùïüy]/iu, expect: /z/i },
  { name: 'des + vowel', fr: /(?<![\p{L}\p{N}-])des\s+[aeiouéèêàâîôûùïüy]/iu, expect: /z/i },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §M. THE GUARDS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine's jargon rule. The walk covers `Lesson.intro` and
 *  `Lesson.overview` as well as the sections (Corrections §9), runs over a
 *  `display()` walk so `sub` on a cardDeck card is seen (§13), and checks the
 *  `-s` plural of every entry (§13: `hasPhrase` is boundary-exact, so a list
 *  holding `paradigm` does not catch `paradigms`).
 *
 *  `adjective` AND `adverb` ARE NOT ON THIS LIST, and Corrections §14.5 is why:
 *  `adjective` is on 147 shipped cards, so the part-of-speech names are HOUSE
 *  VOCABULARY and banning one would be this build inventing a rule. What the
 *  house does is PREFER THE PLAIN PHRASE, and that is guarded as a RATIO
 *  below rather than as a ban.
 *
 *  `comparative` and `superlative` are not on it either, for the same reason
 *  and one more: `overview.titleEn` must match the unit's English name, which
 *  is « Comparatives and Superlatives ». */
export const JARGON = [
  'paradigm', 'inflection', 'inflectional', 'morpheme', 'lexeme', 'suppletive',
  'suppletion', 'periphrastic', 'analytic form', 'synthetic form',
  'degree of comparison', 'positive degree', 'comparative degree',
  'attributive', 'predicative', 'predicate adjective', 'gradable',
  'part of speech', 'lexical category', 'modifier', 'head noun',
  'agreement feature', 'concord', 'allomorph', 'conjugation',
] as const;

/** Corrections §14.5: guard the RATIO, not the word. The plain phrase must
 *  outnumber the technical one across the learner surface. a1.16 runs
 *  `describing word` 74 times against `adjective` 12. */
export const PLAIN_PHRASE = 'describing word';
export const TECHNICAL_WORD = 'adjective';

/** House style, enforced across the whole seed.
 *
 *  A PLAIN SUBSTRING TEST IN BOTH DIRECTIONS, DELIBERATELY NOT WORD-BOUNDED:
 *  the band's inherited `\bhonest` guard cannot see "dishonest" (a2.06 found
 *  it and every A2 lesson before it carries the broken shape). */
export const BANNED_SUBSTRINGS = ['honest', 'honesty'] as const;

/** Claims the app cannot deliver. There is no timer anywhere in the app
 *  (`setInterval` is zero across all four render files), `reading.questions`
 *  render as a Press that toggles the answer into view and score nothing, and
 *  `practice` with `skill: 'write'` draws no writing surface at all. */
export const FORBIDDEN_CLAIMS = [
  'against the clock', 'you have 30 seconds', 'time yourself', 'countdown',
  'as fast as you can', 'beat the timer', 'before time runs out',
  'type your answer below', 'we will mark your text', 'write it in the box below',
  'say it out loud and we will score', 'your writing will be marked',
] as const;

/** Six audio fields validate, publish and are read by NO renderer. The seed
 *  already carries 31 of them. This build authors none. */
export const DEAD_AUDIO_FIELDS = [
  'modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays',
] as const;

/** Three fields a2.07 shipped on a Lesson that draw NOTHING. `pnpm -C
 *  ealch-admin typecheck` is the only check in this project that sees them. */
export const DEAD_LESSON_FIELDS = ['canDo', 'track', 'teaches'] as const;

/** THE HOUSE WORD BOUNDARY EXCLUDES AN APOSTROPHE (Corrections §14.3), so a
 *  guard built on it cannot see `l'autre`, `c'est`, `qu'hier` or `qu'il`. This
 *  lesson's lexicon elides in five authored rows. Drop the apostrophe from the
 *  LEFT boundary and keep it on the right. */
export const APOSTROPHE_EXPOSED = ["l'autre", "c'est", "qu'hier", "qu'il", "d'habitants"] as const;

/** Corrections §14.4: a shape built out of French morphology reads the English
 *  as French. Half of a learner surface is English by design. Every guard in
 *  this file that looks for a French form is proved against BOTH lists. */
export const MUST_FIRE = {
  refused: ['Ce gâteau est plus bon.', 'Elle chante plus bien.'],
  noQue: ['Il est plus grand.', 'Elle est moins rapide.'],
  possessive: ['Mon chien est plus obéissant que le tien.', 'Ma valise est plus lourde que la tienne.'],
  nePlus: ["Je ne travaille plus ici.", "Il n'habite plus à Lyon."],
} as const;

export const MUST_NOT_FIRE = {
  refused: ['Ce gâteau est meilleur.', 'Elle chante mieux.', 'Ce fromage est plus fort.', 'plus mauvais'],
  noQue: ['Il est plus grand que moi.', "Ce jardin est plus grand que l'autre.", "C'est le plus grand jardin du quartier."],
  possessive: ['Il est plus grand que moi.', 'Elle parle mieux que moi.', 'le mieux', 'les plus grandes maisons du quartier'],
  // The English sentences that break a shape built from French letters. `plus`
  // is a French word AND an English one, `on` is a French pronoun, and
  // `no longer` is what `ne … plus` MEANS, so a guard looking for the meaning
  // rather than the form fires on every card that explains it.
  nePlus: [
    'It does not mean no longer.',
    'Pick the middle word and keep the frame.',
    'plus is more, and it is the one you will reach for first',
    'You did not stall on a word you had not learned.',
  ],
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §N. WHAT THIS BUILD COULD NOT VERIFY
 *
 *  Named rather than papered over. Doctrine §F: « A gap you name costs an
 *  hour. A gap you paper over costs a session, and this project has lost two
 *  that way. »
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNVERIFIED = [
  'Whether Android device TTS renders the plus /ply/ against /plys/ split at all. Both listenChoose items are answerable from the sentence structure as well, and the teaching lives in the respellings, which are not spoken.',
  'Whether a 24-mission lesson with two groupDrill sections and a reading passage fits its checkpoint spacing on a Pixel 6 in practice, as opposed to in estScreens.',
] as const;
