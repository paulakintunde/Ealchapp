// a2.33.l1 « Les démonstratifs » — the authored corpus and the citation
// constants.
//
//   pnpm content:demonstratifs           (author-demonstratifs-batch.ts)
//   pnpm tsx scripts/merge-demonstratifs-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   ONE ROOT, TWO JOBS, AND THE NOUN TELLS YOU WHICH.
//
//     ce · cet · cette · ces          a noun follows        ce livre
//     celui · celle · ceux · celles   no noun follows       celui-ci
//
//   Same root, same four cells, and the only question is whether the thing
//   being pointed at is named out loud. A learner who can answer that question
//   can produce all eight forms for a noun this lesson never showed them, and
//   `s08-unseen` is the mission that requires exactly that.
//
// QUOTED, NEVER TAUGHT:
//
//   a2.06  the article against the pronoun, seq 21. Its SHAPE_EXTENSION is
//          IMPORTED rather than retyped, so "verbatim" is mechanical rather
//          than a promise. See §C.
//   a2.02  « what comes next decides », the recurring shape doctrine §B.7
//          names. a2.06 carried it fifth; this is its next turn.
//   a2.16  bel, nouvel, vieil, seq 11. The same phonological pressure that
//          produces `cet`. Named by unit id, its content untouched.
//   sons.07  elision. Its reframe is quoted verbatim, once, as the reason.
//   a1.03  gender. LOAD-BEARING: a learner who cannot gender a noun cannot
//          pick `ce` or `cette`. Leaned on, never re-taught.
//   a2.24 · a2.25  the object pronouns. `celui` is not one of them and does
//          not sit in front of the verb. One line, in the roundup.
//   a2.34  possessive pronouns, seq 34, immediately after. `le mien` has the
//          same article-plus-form shape. Named as next; not one form appears.
//   a2.08  comparatives, seq 32, immediately before. It reserved
//          `fr.a2.comparaisons.069` for this unit by name and this build
//          imports it.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. WHAT THE PROMPT GOT WRONG, MEASURED 2026-08-17 AGAINST POSTGRES
//      48,919 published rows, by `scripts/_a233_preflight.ts`.
// ══════════════════════════════════════════════════════════════════════════
//
//  1. « PRONOUN celui-ci 3 · celle-là 0 — thin, author. » TRUE OF THOSE TWO
//     STRINGS AND FALSE OF THE CONSTRUCTION, AND IT IS THE PROMPT'S
//     LOAD-BEARING CLAIM. 104 published rows carry a demonstrative pronoun.
//     Sixteen of them are a COMPLETE, DELIBERATELY AUTHORED TEACHING BLOCK
//     SITTING IN THIS LESSON'S OWN HOME THEME:
//
//       fr.b1.pronoms-essentiels.036   celui-ci     phrase, flashcard+voiceflash
//       fr.b1.pronoms-essentiels.040   celle-là     phrase, flashcard+voiceflash
//       fr.b1.pronoms-essentiels.044   ceux-ci      phrase, flashcard+voiceflash
//       fr.b1.pronoms-essentiels.048   celles-là    phrase, flashcard+voiceflash
//       .037 .038 .039 .041 .042 .043 .045 .046 .047 .049 .050 .051
//                                      twelve sentences, one per tail
//
//     They are at b1, one level above this lesson, which is why the prompt's
//     a2-shaped probe did not find them. Five shipped A2 lessons already
//     import a b1 or b2 row (a2.10.l2, a2.12, a2.20, a2.30, a2.31), so this is
//     an ordinary import rather than a precedent. TWELVE of the sixteen are
//     imported here; §F says which four are not and why.
//
//     BY LEVEL: b1 52 · b2 28 · c1 11 · sons 8 · a2 3 · a1 2. So the prompt's
//     "thin" is right about A2 and wrong about the corpus, and the correct
//     reading is that the paradigm was published for a level the learner has
//     not reached and has never been taught at the level that needs it.
//
//  2. « ADJECTIVE ce livre 37 · cet homme 12 · cette femme 8 · ces gens 2 »
//     THREE OF FOUR EXACT. `ce livre` is 38, not 37. Measured with the
//     accent-aware whole-word walk `probe-corpus.ts` uses.
//
//  3. Corrections §3 SAYS THE CORPUS NEVER HOLDS A MINIMAL PAIR AND HERE IT
//     HOLDS TWO. This is the first build in the band to find one.
//
//       fr.a2.description-personnes-objets.005  Cet homme a l'air fatigué.
//       fr.a2.description-personnes-objets.006  Cette femme a l'air fatiguée.
//
//       fr.a2.description-personnes-objets.015  Ces hommes sont bruyants le matin.
//       fr.a2.description-personnes-objets.016  Ces femmes sont bruyantes le soir.
//
//     The first pair is trap 1 — `cet` against `cette`, one sound and two
//     spellings — published, in one frame, differing by the demonstrative and
//     the noun's gender and nothing else. Both pairs are imported and both are
//     a required layout. Corrections §3 remains right about paradigms and is
//     wrong that it has no exceptions.
//
//  4. « `celui de` and `celui qui` NOT MEASURED. » Measured: `celui de` 11,
//     `celui qui` 3, `celle de` 1, `celle qui` 1, `celles-là` 1, `ceux-ci` 0,
//     `celle-là` 0. The `de` and `qui` tails therefore exist and the `-ci`/`-là`
//     tails barely do, which is the reverse of what a lesson would guess, and
//     it is why the `-ci`/`-là` rows here are authored and the `de`/`qui` rows
//     are imported.
//
//  5. « Whether a2.06 shipped a quotable article-against-pronoun string. Read
//     the lesson. » IT DID, AND THE PROMPT MISQUOTES IT. §C.
//
//  6. « Two respellings are already identical and that is not an error. »
//     TRUE, AND THE INVARIANTS ARE WRONG ABOUT WHY. `A1-BUILD-INVARIANTS.md`
//     §3 says the house writes `/ø œ/` as `EU`. Measured across all 48,919
//     published rows: 1,882 respellings contain `UH` and 16 contain `EU`.
//
//       deux DUH · vieux VYUH · peu PUH · bleu BLUH · mieux MYUH · eux UH
//
//     So `ceux -> SUH` is the HOUSE value and `ce -> SUH` is the house value
//     for the schwa, and their collision is a property of the scheme rather
//     than a defect in two rows. `RESPELL-CONVENTION.md` already says
//     « eu ø/œ -> EU / UH », i.e. both; the invariants quote half of it.
//     THIS BUILD REPAIRS NOTHING IN THAT FAMILY. See §E for the two it does
//     repair, which are a different rule.
//
//  7. `cet ami`, WHICH THE PROMPT USES AS AN EXAMPLE, IS ZERO ROWS. `cet
//     homme` is 12 and `cet hôtel` is 4. The vowel evidence is imported from
//     the two that exist.
//
//  8. THE PROMPT SAYS `demonstratifs` HOLDS 0 ROWS AND MUST NOT BE CREATED,
//     AND THAT `pronoms-essentiels` IS THE HOME AT NEXT FREE `.337`. BOTH
//     CONFIRMED EXACTLY, along with the identity block byte for byte.
//
//  9. AND ONE THE PROMPT COULD NOT HAVE KNOWN: a2.08's own corpus file says
//     « `cette`, `ce` and `ces` are demonstrative ADJECTIVES, which a1 owns ».
//     A1 DOES NOT OWN THEM. `A1-25-DAILY-ROUTINE-PROMPT.md:184` rejected
//     teaching `ce matin` as a demonstrative precisely because « `ce / cet /
//     cette / ces` belongs to an A2 unit », and `A1-05-SUBJECT-PRONOUNS-
//     PROMPT.md:111` says « `ce` as in `c'est` is a demonstrative, owned by
//     `a2.33` ». No shipped lesson's `grammarIntroduced` claims any of it.
//     This unit is the first to teach them anywhere in the product.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { SHAPE_EXTENSION as A206_SHAPE_LOCAL } from './pronoms-direct-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY, THE THEME AND THE ID BLOCK
 *
 *  Read from Postgres 2026-08-17 by `corpus:probe --unit a2.33`, not from the
 *  spine and not from the prompt. It agreed with the prompt's measured block
 *  byte for byte, which is now the second time in this band.
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'a2.33',
  seq: 33,
  title: 'Demonstrative Adjectives and Pronouns',
  sub: 'Démonstratifs',
  canDo: 'Can point something out with ce and cette and replace it with celui and celle',
  prereqUnitIds: ['a1.03'],
} as const;

export const LESSON_ID = 'a2.33.l1';
export const THEME = 'pronoms-essentiels';

/* ── MEASURED AGAINST POSTGRES 2026-08-17 ─────────────────────────────────── */

export const THEME_ROWS_BEFORE = 634;   // published, all levels
export const THEME_A2_BEFORE = 336;     // fr.a2.pronoms-essentiels.*, max .336
export const THEME_B1_BEFORE = 138;
export const THEME_SEED_BEFORE = 163;

/** NEXT FREE on the morning of the build was `fr.a2.pronoms-essentiels.337`,
 *  with NO gaps in the a2 sequence. `.337`–`.390` allocated, `.337`–`.363`
 *  used.
 *
 *  CHECK THE ROW COUNT AFTER THE APPLY, NOT THE MAXIMUM ID (Corrections §10).
 *  `max(id)` has been useless since `a2.10.l2` took `.461..500`, and a1.19/a1.20
 *  and a1.14/a1.15 both had a concurrent lesson land BELOW the top of a range
 *  while a highest-id guard reported clean. */
export const ID_FIRST = 337;
export const ID_LAST = 390;      // allocated
export const ID_USED_LAST = 363;

export const E = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE QUOTATION, AND WHERE THE PROMPT MISQUOTES IT
 *
 *  The prompt says:
 *
 *    « This is exactly a2.06's article-against-pronoun shape — an article
 *      leans on a noun, a pronoun leans on NOTHING. Quote its wording verbatim
 *      and name the unit. »
 *
 *  a2.06 shipped this, and the last two words are different:
 *
 *    « Here the word after it decides, and so does where it sits: an article
 *      leans on a noun, a pronoun leans on A VERB. »
 *
 *  a2.06's pronouns are `le`, `la`, `les`, which sit in front of the verb, so
 *  "leans on a verb" is true of a2.06 and FALSE HERE: `celui-ci` leans on the
 *  thing you hang off it and touches no verb at all. Quoting the prompt's
 *  paraphrase would be a paraphrase; quoting a2.06's sentence unchanged and
 *  stopping there would teach a learner a rule that does not hold.
 *
 *  So this build does what a2.06 itself did when a2.22's extension was the
 *  right shape and false word for word (`pronoms-direct-corpus.ts:250`): it
 *  quotes the neighbour's sentence VERBATIM, attributes it, and adds one more
 *  sentence cut to the same pattern asserting only what is true here.
 *
 *  AND IT IS IMPORTED RATHER THAN RETYPED. `participes-corpus.ts:161` and
 *  `passe-compose-corpus.ts:235` both import a neighbour's reframe as a bare
 *  string for exactly this reason. A retyped quotation is a copy that is free
 *  to drift; an imported one fails the build the day a2.06 rewords.
 * ══════════════════════════════════════════════════════════════════════════ */

export { SHAPE_EXTENSION as A206_SHAPE, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT } from './pronoms-direct-corpus.ts';

/** a2.06, Direct Object Pronouns, seq 21. Shipped. */
export const OBJECT_UNIT = 'a2.06';

/** THIS LESSON'S SENTENCE, cut to a2.06's pattern and true of these pronouns.
 *  It is the second half of the quotation and never appears without the first.
 *
 *  SHORT ON PURPOSE. The card that carries the pair is at `layer: 'core'` and
 *  `validateDensity` caps a core string at 45 WORDS. a2.06's sentence is 24 of
 *  them on its own, so the first draft of this one ran the card to 51 and the
 *  batch refused it. Twelve words, and the pattern survives the cut. */
export const A233_SHAPE =
  'Here it leans on nothing at all until you hang something off the end.';

/** The sanity check that keeps the pair honest. If a2.06 ever reworded to say
 *  what the prompt claims, the extension above would be redundant rather than
 *  necessary, and this build would be quoting a sentence it no longer needs. */
export const A206_ENDS_ON_A_VERB = A206_SHAPE_LOCAL.trimEnd().endsWith('a pronoun leans on a verb.');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME
 *
 *  Doctrine §B.4: a production rule short enough to run in the half-second
 *  between deciding what to point at and opening your mouth. The decision it
 *  encodes is the only decision this lesson asks for, and it is answerable
 *  from the sentence the learner is already building rather than from a table.
 *
 * *  Carried verbatim across all twenty-four sections; the density validator floor is
 *  three and the good lessons use six to eight.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'A noun after it means it points. No noun means it replaces.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Say the noun and it points. Drop the noun and it replaces.',
    why: 'Reads as an instruction to drop a noun the learner has already said, which is not the move. The choice happens BEFORE the noun exists in the sentence, not after.',
  },
  {
    text: 'A noun after it points. No noun, and it never stands alone.',
    why: 'Merges the Owns and trap 3 into one line, which looked economical and is two rules in a sentence that has room for one. Trap 3 has a whole trapDrill; the reframe does not have to carry it.',
  },
  {
    text: 'If the noun follows, use ce. If it does not, use celui and add to it.',
    why: 'Fifteen words, and it names two of the eight forms, so a learner running it on a feminine plural has to translate it first. A reframe that needs translating is a term.',
  },
  {
    text: 'One root, two jobs.',
    why: 'A description of the lesson rather than a rule the learner can run. Doctrine §B.4: it tells them what is true and nothing about what to do. It survives as the act 2 title.',
  },
];

/** Invariants §5: assert against an EXPLICIT CONSTANT, never a figure derived
 *  from the lesson, because a derived count compares the content to itself and
 *  passes on any rewording.
 *
 *  TWENTY-FIVE: the `say` of all twenty-four sections, plus `Lesson.reframe`
 *  itself. Counted over the NOT-deduped raw walk, which is what a2.22 §3
 *  requires — a Set collapses a line authored twice and under-reports every
 *  reframe short enough to appear in both a `say` and a card body.
 *
 *  a2.06 trimmed its own from 23 to 17 on the grounds that at 23 it reads as a
 *  slogan rather than a rule. That judgement was about a line inside card
 *  BODIES; this one is only ever the section `say`, which is the coach line
 *  rather than the page, and a2.08 shipped it on all twenty-four the same way.
 *  It appears in no card body anywhere in this lesson. */
export const REFRAME_COUNT = 25;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE RESPELLINGS
 *
 *  TWO REPAIRS, AND NEITHER IS A NASAL. This is the first build in the band
 *  whose repair table has no nasal row at all, and §A.6 records the
 *  measurement that ruled the obvious candidates out.
 *
 *  What IS broken is `/ɛ/`. `RESPELL-CONVENTION.md` states « è/ê ɛ -> EH »
 *  and gives 328 items as its evidence base. Two rows in this lesson's own
 *  home theme write it as English orthography instead:
 *
 *    fr.b1.pronoms-essentiels.040   celle-là    sell-LAH
 *    fr.b1.pronoms-essentiels.048   celles-là   sell-LAH
 *
 *  `sell` is an English word that happens to sound right. It is not the house
 *  scheme, and the two rows sit beside `fr.sons.mots-essentiels.106` and
 *  `.108`, which respell the identical syllable `SEHL`. This lesson prints all
 *  four on adjacent cards, so a learner would meet two spellings of one
 *  syllable inside one deck.
 *
 *  Corrections §6 as amended by §14.1 asks for ONE table carrying `half` — the
 *  value you get by repairing only what the checker reports — with all three
 *  states asserted through the real `hasPlainNasalFor`. Neither of these rows
 *  holds a nasal, so `hasPlainNasalFor` is silent on all three states of both,
 *  and THAT IS ASSERTED AS A NEGATIVE rather than left as a silence: the day
 *  the checker grows an /ɛ/ rule, this table stops being invisible to it and
 *  the build says so.
 *
 *  THE HOUSE VALUE IS READ OFF PUBLISHED ROWS, NOT INVENTED (a2.15 §13):
 *  `SEHL` is `fr.sons.mots-essentiels.106` and `.108`, both published, both
 *  the bare headwords this lesson imports.
 *
 *  NOT REPAIRED, AND SAID RATHER THAN LEFT SILENT:
 *
 *    fr.sons.voyelles.106   ce   `suh`   lowercase where `.089` has `SUH`.
 *      The convention CAPS a group-final syllable and a one-syllable group
 *      entirely, so an all-lowercase monosyllable looks wrong — and the corpus
 *      writes `myuh`, `lyuh`, `tahbl` and `luh BLUH` the same way whenever the
 *      word is a clitic rather than a stressed form. A variant, not a
 *      violation (invariants §9), and it is in `voyelles`, which this unit
 *      does not touch.
 * ══════════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string;
  fr: string;
  from: string;
  /** The value the checker's own report produces. Here it equals `from`,
   *  because the checker reports nothing at all. */
  half: string;
  to: string;
  /** The checker cannot see the defect. TRUE on both, and for a new reason:
   *  it is not a nasal, so `hasPlainNasalFor` has no opinion about it. */
  blind: boolean;
  /** The minimal repair is clean and is still not the house value. FALSE on
   *  both: there is no minimal repair, because there is no report. */
  house: boolean;
  why: string;
};

/** NOT `as const`: with literal types the admin typecheck proves `half !== to`
 *  can never be false and rejects the comparison as unintentional. */
export const RESPELL_REPAIRS: Repair[] = [
  {
    id: 'fr.b1.pronoms-essentiels.040', fr: 'celle-là', from: 'sell-LAH', half: 'sell-LAH', to: 'sehl-LAH',
    blind: true, house: false,
    why: 'RESPELL-CONVENTION writes the open e as EH. `sell` is English orthography, and fr.sons.mots-essentiels.106 respells the identical syllable SEHL.',
  },
  {
    id: 'fr.b1.pronoms-essentiels.048', fr: 'celles-là', from: 'sell-LAH', half: 'sell-LAH', to: 'sehl-LAH',
    blind: true, house: false,
    why: 'The same row one plural along, and fr.sons.mots-essentiels.108 respells it SEHL. The two are homophones and now say so.',
  },
];

export const REPAIR_IDS = RESPELL_REPAIRS.map((r) => r.id);

/** The published rows the house values were READ OFF, named so the next author
 *  does not have to re-derive them. */
export const REPAIR_SOURCES = ['fr.sons.mots-essentiels.106', 'fr.sons.mots-essentiels.108'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS
 *
 *  Doctrine §D and Corrections §2: import rather than author. This build
 *  authors NOT ONE HEADWORD, exactly as the prompt says, and it also imports
 *  most of the pronoun evidence the prompt expected to be authored (§A.1).
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** THE EIGHT HEADWORDS. Every one exists in `mots-essentiels`, ungendered,
   *  respelled, `flashcard + voiceflash`, and NOT ONE is re-authored. The
   *  prompt is exactly right about all eight and the batch asserts them BY ID
   *  rather than by count. */
  headwords: [
    'fr.sons.mots-essentiels.089',   // ce      SUH
    'fr.sons.mots-essentiels.090',   // cet     SEHT
    'fr.sons.mots-essentiels.091',   // cette   SEHT
    'fr.sons.mots-essentiels.092',   // ces     SAY
    'fr.sons.mots-essentiels.105',   // celui   suh-LWEE
    'fr.sons.mots-essentiels.106',   // celle   SEHL
    'fr.sons.mots-essentiels.107',   // ceux    SUH
    'fr.sons.mots-essentiels.108',   // celles  SEHL
  ],

  /** THE FOUR PUBLISHED `-ci`/`-là` CARDS, in this lesson's own theme at b1.
   *  `flashcard + voiceflash + review`, so unlike almost everything else here
   *  they ARE deck-able and a tranche can release them. §A.1. */
  pronounCards: [
    'fr.b1.pronoms-essentiels.036',  // celui-ci
    'fr.b1.pronoms-essentiels.040',  // celle-là    <- repaired, §E
    'fr.b1.pronoms-essentiels.044',  // ceux-ci
    'fr.b1.pronoms-essentiels.048',  // celles-là   <- repaired, §E
  ],

  /** THE EIGHT PUBLISHED PRONOUN SENTENCES THIS LESSON USES. Every one carries
   *  `flashcard`, so unlike a2.08's theme these can be released as well as
   *  named. `.037` is the single best row in the corpus for this Owns: the
   *  noun is named once, then replaced, inside one sentence. */
  pronounSentences: [
    'fr.b1.pronoms-essentiels.037',  // Ce sac est joli, mais celui de Marie est plus grand.
    'fr.b1.pronoms-essentiels.038',  // Prends celui qui est sur la table.
    'fr.b1.pronoms-essentiels.039',  // J'aime ce modèle, celui que tu m'as montré hier.
    'fr.b1.pronoms-essentiels.041',  // Cette robe est belle, mais celle de ma sœur est unique.
    'fr.b1.pronoms-essentiels.042',  // Prends celle qui te plaît le plus.
    'fr.b1.pronoms-essentiels.045',  // Ces livres sont anciens, mais ceux de la bibliothèque sont neufs.
    'fr.b1.pronoms-essentiels.049',  // Ces chaussures sont confortables, mais celles-là sont plus légères.
    'fr.b1.pronoms-essentiels.050',  // Prends celles qui sont dans la boîte bleue.
  ],

  /** THE ADJECTIVE EVIDENCE, which the prompt asks to be imported rather than
   *  authored and which is genuinely rich. TWO PUBLISHED MINIMAL PAIRS are in
   *  here (§A.3) and both are a required layout.
   *
   *  NONE of these is deck-able: every one is `dictation`-only or
   *  `sentence`-only. They are reachable by being NAMED — in `s08-unseen`,
   *  `s13-sort`, a lesson `term` or a `LessonDrill` — and the batch asserts
   *  both directions. */
  adjectives: [
    'fr.a2.description-personnes-objets.005',  // Cet homme a l'air fatigué.        <- pair
    'fr.a2.description-personnes-objets.006',  // Cette femme a l'air fatiguée.     <- pair
    'fr.a2.description-personnes-objets.015',  // Ces hommes sont bruyants le matin. <- pair
    'fr.a2.description-personnes-objets.016',  // Ces femmes sont bruyantes le soir. <- pair
    'fr.a2.questions-du-quotidien.053',        // Qui est cet homme là-bas ?
    'fr.a1.nombres.076',                       // Cet hôtel a cent cinquante chambres.
    'fr.a1.mots-essentiels.159',               // Vous habitez dans cet immeuble depuis longtemps ?
    'fr.a1.noms-essentiels.041',               // Cet endroit est vraiment magnifique.
    'fr.a1.adjectifs-essentiels.102',          // Cet exercice est facile.
    'fr.a1.questions.048',                     // Pourquoi choisis-tu ce livre ?
    'fr.a1.questions-du-quotidien.009',        // Qui sont ces gens ?
    'fr.a2.comparaisons.069',                  // Ce sac est aussi lourd que celui-là.  <- a2.08's handover
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Themes this unit reads from and never writes to. All are cut-affected and
 *  the merge prints their seed population before it runs. */
export const IMPORT_ONLY_THEMES = [
  'mots-essentiels', 'description-personnes-objets', 'questions-du-quotidien',
  'nombres', 'noms-essentiels', 'adjectifs-essentiels', 'questions', 'comparaisons',
] as const;

/** The imports NO deck can serve: `dictation`-only or `sentence`-only, so a
 *  `deckTranche` release of any of them would validate, publish and draw
 *  nothing. Restated as a list the batch asserts against `deckTranche` rather
 *  than as a comment nobody runs. */
export const NOT_DECK_ABLE = [...IMPORTED.adjectives];

/* ── THE FOUR b1 ROWS DELIBERATELY LEFT BEHIND ────────────────────────────── */

/** Trap 4 is « `ce` in `c'est` and `ce sont` is a third job. Name it in one
 *  line, teach it nowhere. » The strongest reading of "teach it nowhere" is
 *  a2.08's: imported nowhere is a stronger answer than a scoped one, because
 *  the guard cannot then be weakened by a later edit.
 *
 *  So the two b1 rows that would have been useful and that carry the
 *  impersonal `ce` are NOT imported, and neither are the two whose vocabulary
 *  is above this lesson. Named here so the next author does not re-run the
 *  search, and asserted absent in both the batch and the test. */
export const B1_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.b1.pronoms-essentiels.043', fr: "Cette chanson, c'est celle que j'écoute tout le temps.", why: "carries c'est, which is trap 4's third job" },
  { id: 'fr.b1.pronoms-essentiels.051', fr: "Ce sont celles que j'ai achetées hier.", why: 'carries ce sont, which is trap 4 outright, plus a preceding-direct-object agreement that belongs to a2.06' },
  { id: 'fr.b1.pronoms-essentiels.046', fr: 'Choisis ceux qui te semblent les plus utiles.', why: 'sembler is not A2 vocabulary and the sentence needs it to parse' },
  { id: 'fr.b1.pronoms-essentiels.047', fr: 'Parmi tous les élèves, ceux qui travaillent réussissent.', why: 'parmi is b1, and the sentence is generic rather than deictic, which is the opposite of what a demonstrative does' },
];

/** The one respelled `cet hôtel` sentence in the corpus, AND IT CANNOT BE
 *  IMPORTED. `fr.sons.voyelles.441` reads:
 *
 *      Cet hôtel est près de la mer.     seh-t‿oh-TEHL EH PREH DUH LA MEHR
 *
 *  That tie is U+203F, which invariants §2 records as RENDERING AS A LOW
 *  UNDERSCORE ON A PIXEL 6. `GroupDrillView` builds an item's second line from
 *  `note`/`respell`/`en`, so importing it into the mission that needs it would
 *  put `seh-t_oh-TEHL` on the screen. It is named here instead, and
 *  `fr.a1.nombres.076` carries the silent-h evidence in its place.
 *
 *  This is also why every authored `cet` respelling below runs the t into the
 *  next syllable — `seh-TOM`, `seh-toh-TEL` — exactly as a2.16 did with
 *  `beh-LAHRBR` for `bel arbre`. No new tie is introduced anywhere. */
export const TIE_ROW = 'fr.sons.voyelles.441';
export const TIE_GLYPH = '‿';

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS
 *
 *  Sentence budget 14 words. Nothing here reaches nine.
 *
 *  NOT ONE ROW IS GENDERED. `gender` is set on no row this build authors, so
 *  none of them can join a1.03's measured ending population, and the four
 *  `phrase` rows are hyphenated compounds rather than nouns. The imports are
 *  checked the same way in the merge.
 *
 *  WHY THESE AND NOT MORE. The theme already publishes 634 rows and this build
 *  authors 27. Every one of the 27 is a gap the probe found:
 *
 *    the eight-cell grid      one frame, the same referent named and unnamed.
 *                             Corrections §3, and the corpus has nothing like
 *                             it: `.037` is the nearest and it changes the
 *                             owner as well as the form
 *    the `Regarde` frame      `ce`/`cet`/`cette`/`ces` in ONE sentence shape,
 *                             so the vowel collision is the only variable, and
 *                             every one of the five is LETTERS mode
 *    the four missing cards   the corpus published `celui-ci`, `celle-là`,
 *                             `ceux-ci` and `celles-là` and never their
 *                             opposite numbers. Four of the eight cells of the
 *                             `-ci`/`-là` paradigm did not exist
 *    the both-jobs sentences  the noun named, then replaced, in one line, at
 *                             A2 length and in all four cells
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const sent = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,
});
const phrase = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,
});

/** Every authored row carries BOTH `flashcard` and `voiceflash`.
 *  `flashhub-coverage.test.ts` strands any a1/a2 word or phrase missing either
 *  unless its drill signature is exactly one of the separate-pool ones, and
 *  this theme's own `.325`–`.336` are `flashcard+voiceflash+…`. Sentences are
 *  exempt from that check and carry both anyway, because `practice` needs
 *  voiceflash and every deckTranche release needs flashcard. */
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/* ── THE EIGHT-CELL GRID. .337-.344 ────────────────────────────────────────
 *  ONE FRAME, EIGHT CELLS, AND THE ONLY VARIABLE IS WHETHER THE NOUN IS SAID.
 *  Four rows name the thing; the four beside them replace it. Read down, it is
 *  the gender-and-number paradigm; read across, it is the Owns.
 *
 *  Corrections §3 in its ordinary form: the corpus holds both halves and no
 *  sentence where only that one thing moves. `fr.b1.pronoms-essentiels.037`
 *  comes closest and it changes the owner of the bag as well.
 *
 *  `Je prends` because it is what a person actually says at a counter, and
 *  because it is the sentence the scene's learner fails to finish.           */

export const GRID_ROWS: Row[] = [
  sent(337, 'Je prends ce livre.', "I'll take this book.", 'zhuh PRAHⁿ suh LEEVR', ['grid', 'points', 'ms'], FCVDR),
  sent(338, 'Je prends celui-ci.', "I'll take this one.", 'zhuh PRAHⁿ suh-lwee-SEE', ['grid', 'replaces', 'ms'], FCVDR),
  sent(339, 'Je prends cette robe.', "I'll take this dress.", 'zhuh PRAHⁿ seht ROB', ['grid', 'points', 'fs'], FCVR),
  sent(340, 'Je prends celle-ci.', "I'll take this one.", 'zhuh PRAHⁿ sehl-SEE', ['grid', 'replaces', 'fs'], FCVDR),
  sent(341, 'Je prends ces gants.', "I'll take these gloves.", 'zhuh PRAHⁿ say GAHⁿ', ['grid', 'points', 'mp'], FCVR),
  sent(342, 'Je prends ceux-ci.', "I'll take these.", 'zhuh PRAHⁿ suh-SEE', ['grid', 'replaces', 'mp'], FCVR),
  sent(343, 'Je prends ces chaussures.', "I'll take these shoes.", 'zhuh PRAHⁿ say shoh-SÜR', ['grid', 'points', 'fp'], FCVR),
  sent(344, 'Je prends celles-ci.', "I'll take these.", 'zhuh PRAHⁿ sehl-SEE', ['grid', 'replaces', 'fp'], FCVR),
];

/** The eight cells as the test reads them. Asserted CELL BY CELL, by name, so
 *  a dropped form fails with the form it dropped rather than with a count. */
export const GRID_CELLS = [
  { form: 'ce', job: 'points', id: E(337), gender: 'm', number: 'singular' },
  { form: 'celui-ci', job: 'replaces', id: E(338), gender: 'm', number: 'singular' },
  { form: 'cette', job: 'points', id: E(339), gender: 'f', number: 'singular' },
  { form: 'celle-ci', job: 'replaces', id: E(340), gender: 'f', number: 'singular' },
  { form: 'ces', job: 'points', id: E(341), gender: 'm', number: 'plural' },
  { form: 'ceux-ci', job: 'replaces', id: E(342), gender: 'm', number: 'plural' },
  { form: 'ces', job: 'points', id: E(343), gender: 'f', number: 'plural' },
  { form: 'celles-ci', job: 'replaces', id: E(344), gender: 'f', number: 'plural' },
] as const;

/* ── THE `Regarde` FRAME. .345-.349 ────────────────────────────────────────
 *  ALL FOUR ADJECTIVE FORMS IN ONE SENTENCE SHAPE, plus the silent h.
 *
 *  Trap 2: `cet` exists only to stop two vowels colliding, and `cet hôtel` is
 *  the proof that the rule is about SOUND and not spelling. That is a2.16's
 *  reason for `bel`, `nouvel` and `vieil` and sons.07's reason for elision.
 *
 *  REQUIRED LAYOUT 3 is `.346` beside `.345`, audible, one tap each, ONE TAKE.
 *  The `desc` on `rec-a2-33-vowel` says so, because a rule about how something
 *  is recorded becomes invisible the moment the clip is delivered.
 *
 *  ALL FIVE RESOLVE TO LETTERS MODE through the real `dicteeMode`, asserted in
 *  the batch rather than counted by eye. `Regarde cette robe.` is 16 letters
 *  and the limit is « more than 16 », so it is the last one that fits;
 *  `Regarde cette maison.` was the first draft's fourth row and is 18.        */

export const VOWEL_ROWS: Row[] = [
  sent(345, 'Regarde ce livre.', 'Look at this book.', 'ruh-GARD suh LEEVR', ['vowel', 'ce'], FCVDR),
  sent(346, 'Regarde cet homme.', 'Look at this man.', 'ruh-GARD seh-TOM', ['vowel', 'cet'], FCVDR),
  sent(347, 'Regarde cet hôtel.', 'Look at this hotel.', 'ruh-GARD seh-toh-TEL', ['vowel', 'cet', 'silent-h'], FCVR),
  sent(348, 'Regarde cette robe.', 'Look at this dress.', 'ruh-GARD seht ROB', ['vowel', 'cette'], FCVDR),
  sent(349, 'Regarde ces gants.', 'Look at these gloves.', 'ruh-GARD say GAHⁿ', ['vowel', 'ces'], FCVR),
];

/** REQUIRED LAYOUT 3, named so the section and the audio spec cannot drift
 *  from each other. `.345` is the consonant, `.346` is the vowel, and the pair
 *  is the whole of trap 2. */
export const VOWEL_PAIR = { consonant: E(345), vowel: E(346), silentH: E(347) } as const;

/* ── THE TAIL. .350-.354 AND .359 ──────────────────────────────────────────
 *  Trap 3: `celui` cannot stand alone. English "that one" works alone, so the
 *  learner produces the bare form, and the corpus measured `celui-ci` at 3 and
 *  `celle-là` at 0 while `celui de` is 11. So the tails that exist are
 *  imported and the tails that do not are authored.
 *
 *  `Je veux celui.` IS NOT HERE AND NEVER WILL BE. It is not French. It
 *  appears in exactly three places in this build — one trapDrill `promptSound`,
 *  one `commonErrors` `wrong` and one `errorSpot` `prompt` — and the guard is
 *  scoped to those three sections by id.                                      */

export const TAIL_ROWS: Row[] = [
  // `pah` LOWERCASE, AND THE AUDIT CAUGHT IT AS `PAH`. The convention caps the
  // GROUP-FINAL syllable and lower-cases everything else; a one-syllable group
  // is capped only when it IS the group. « Pas celui-ci » is one rhythmic group
  // and its stress falls on SEE, so `pas` is not capped. Read off the corpus
  // rather than reasoned: `pah duh proh-BLEHM`, `pah MAHL`, `pah dü TOO`,
  // `suh neh pah GRAHV`, `seh pah gah-NYAY`.
  sent(350, 'Pas celui-ci, celui-là.', 'Not this one, that one.', 'pah suh-lwee-SEE suh-lwee-LAH', ['tail', 'ci-la'], FCVR),
  sent(351, 'Pas celle-ci, celle-là.', 'Not this one, that one.', 'pah sehl-SEE sehl-LAH', ['tail', 'ci-la'], FCVR),
  sent(352, 'Je veux celui-là.', 'I want that one.', 'zhuh VUH suh-lwee-LAH', ['tail', 'la'], FCVDR),
  sent(353, 'Je veux celui de Marie.', "I want Marie's one.", 'zhuh VUH suh-lwee duh ma-REE', ['tail', 'de'], FCVR),
  sent(354, 'Je préfère celles-là.', 'I prefer those.', 'zhuh pray-FEHR sehl-LAH', ['tail', 'la'], FCVR),
  sent(359, 'Je préfère ceux-là.', 'I prefer those.', 'zhuh pray-FEHR suh-LAH', ['tail', 'la'], FCVR),
];

/** The four things that may follow the pronoun, and the row that shows each.
 *  Two are authored and two are imported, which is the measured shape of the
 *  corpus rather than a preference. */
export const TAILS = [
  { tail: '-ci', example: E(338), authored: true },
  { tail: '-là', example: E(352), authored: true },
  { tail: 'de', example: 'fr.b1.pronoms-essentiels.037', authored: false },
  { tail: 'qui', example: 'fr.b1.pronoms-essentiels.038', authored: false },
] as const;

/* ── THE FOUR MISSING CARDS. .355-.358 ─────────────────────────────────────
 *  The corpus published `celui-ci`, `celle-là`, `ceux-ci` and `celles-là` as
 *  phrase headwords and NEVER their opposite numbers. Four of the eight cells
 *  of the `-ci`/`-là` paradigm did not exist anywhere, at any level.
 *
 *  Authored here, ungendered, `flashcard + voiceflash`, so the deck is whole.
 *  NONE of them collides with the four b1 rows under the flashcard hub's own
 *  norm, which strips a leading article and nothing else, and the batch checks
 *  the authored rows against each other as well as against the theme —
 *  a2.08 shipped `mieux` and `le mieux` past every local gate and failed a
 *  seed-wide test.
 *
 *  `celle-ci` and `celles-ci` are ONE SOUND, and so are `celle-là` and
 *  `celles-là`. Both pairs are in HOMOPHONE_FORMS.                            */

export const CARD_ROWS: Row[] = [
  phrase(355, 'celui-là', 'that one (masculine)', 'suh-lwee-LAH', ['card', 'la'], FCVR),
  phrase(356, 'celle-ci', 'this one (feminine)', 'sehl-SEE', ['card', 'ci'], FCVR),
  phrase(357, 'ceux-là', 'those (masculine)', 'suh-LAH', ['card', 'la'], FCVR),
  phrase(358, 'celles-ci', 'these (feminine)', 'sehl-SEE', ['card', 'ci'], FCVR),
];

/** The eight `-ci`/`-là` cells, four imported and four authored. Asserted by
 *  name so a dropped cell fails with the cell it dropped. */
export const CI_LA_CELLS = [
  { form: 'celui-ci', id: 'fr.b1.pronoms-essentiels.036', authored: false },
  { form: 'celui-là', id: E(355), authored: true },
  { form: 'celle-ci', id: E(356), authored: true },
  { form: 'celle-là', id: 'fr.b1.pronoms-essentiels.040', authored: false },
  { form: 'ceux-ci', id: 'fr.b1.pronoms-essentiels.044', authored: false },
  { form: 'ceux-là', id: E(357), authored: true },
  { form: 'celles-ci', id: E(358), authored: true },
  { form: 'celles-là', id: 'fr.b1.pronoms-essentiels.048', authored: false },
] as const;

/* ── BOTH JOBS IN ONE SENTENCE. .360-.363 ──────────────────────────────────
 *  The deepest form of the Owns: the noun is named once, and the second time
 *  it is not. Four cells, one shape, at A2 length.
 *
 *  The corpus has this shape only at b1 (`.037`, `.041`, `.045`, `.049`) and
 *  every one of those four is longer and changes the owner or the location as
 *  well as the form. These four change nothing but the colour.                */

export const BOTH_ROWS: Row[] = [
  sent(360, 'Ce sac est petit, mais celui-là est grand.', 'This bag is small, but that one is big.', 'suh SAK eh puh-TEE meh suh-lwee-LAH eh GRAHⁿ', ['both', 'ms'], FCVR),
  sent(361, 'Cette robe est bleue, mais celle-là est noire.', 'This dress is blue, but that one is black.', 'seht ROB eh BLUH meh sehl-LAH eh NWAR', ['both', 'fs'], FCVR),
  sent(362, 'Ces gants sont noirs, mais ceux-là sont blancs.', 'These gloves are black, but those are white.', 'say GAHⁿ sohⁿ NWAR meh suh-LAH sohⁿ BLAHⁿ', ['both', 'mp'], FCVR),
  sent(363, 'Ces chaussures sont neuves, mais celles-là sont vieilles.', 'These shoes are new, but those are old.', 'say shoh-SÜR sohⁿ NUHV meh sehl-LAH sohⁿ VYEY', ['both', 'fp'], FCVR),
];

/** The both-jobs rows, by cell, so the required layout can be asserted on the
 *  SHAPE rather than on a count: each one must contain a pointing form AND a
 *  replacing form, and they must refer to the same noun. */
export const BOTH_CELLS = [
  { id: E(360), points: 'Ce', replaces: 'celui-là', noun: 'sac' },
  { id: E(361), points: 'Cette', replaces: 'celle-là', noun: 'robe' },
  { id: E(362), points: 'Ces', replaces: 'ceux-là', noun: 'gants' },
  { id: E(363), points: 'Ces', replaces: 'celles-là', noun: 'chaussures' },
] as const;

export const ALL_ROWS: Row[] = [
  ...GRID_ROWS, ...VOWEL_ROWS, ...TAIL_ROWS, ...CARD_ROWS, ...BOTH_ROWS,
].sort((a, b) => a.id.localeCompare(b.id));

/* ── THE DICTÉE ────────────────────────────────────────────────────────────
 *  Corrections §4: `dicteeMode` switches to WORD tiles above 16 letters and
 *  word mode hands every real word over pre-spelled, so a lesson about a
 *  written distinction can only be tested in LETTERS.
 *
 *  This lesson's written distinctions are `cet` against `cette` — which
 *  `fold()` CAN separate, because it keeps a final `-e` — and the tail, which
 *  `fold()` can also see because `celui` and `celuici` are different strings.
 *  So the dictée is where both live, and all six targets are ≤16 letters.
 *
 *  MEASURED, not counted by eye, and the batch proves it through the real
 *  function:
 *
 *    Je prends ce livre.    15   Regarde ce livre.     14
 *    Je prends celui-ci.    15   Regarde cet homme.    15
 *    Je prends celle-ci.    15   Regarde cette robe.   16
 *    Je veux celui-là.      13
 *
 *  EVERY PUBLISHED SENTENCE IN THIS THEME THAT CARRIES A DEMONSTRATIVE IS WORD
 *  MODE. The shortest, `Prends celui qui est sur la table.`, is 27 letters. Not
 *  one could have been used, which is why all seven targets are authored.     */

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);
export const DICTEE_MODE_EXPECTED = 'letters' as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. WHAT THE APP CANNOT TEST, AND WHAT IT CAN
 *
 *  Corrections §5 and A2-TAIL-AUDIT §4, measured through the real functions
 *  rather than assumed. This lesson is unusually well served by `fold()` and
 *  unusually badly served by the ear, and the quiz follows the measurement.
 * ══════════════════════════════════════════════════════════════════════════ */

/** TRAP 1, AS A LIST RATHER THAN A SENTENCE IN A REPORT. No ear question may
 *  offer two members of one group: there is no correct answer and marking one
 *  right certifies a bug.
 *
 *  `cet`/`cette` is the prompt's group and it is measured — both ship as
 *  `SEHT` on their bare headwords. The other three were found by this build:
 *  the plural is silent on `celle`/`celles` and on both of their tailed forms,
 *  exactly the way the corpus's own `sell-LAH` twins are. */
export const HOMOPHONE_FORMS: readonly string[][] = [
  ['cet', 'cette'],
  ['celle', 'celles'],
  ['celle-ci', 'celles-ci'],
  ['celle-là', 'celles-là'],
];

/** AND THE PROMPT'S VERSION OF THE RULE IS ONE WORD TOO WIDE.
 *
 *  It asks that « no quiz OPTION PAIR differs only by a member of it ». The
 *  rule that is actually true, and the one Corrections §5 states, is that no
 *  EAR question may: « a listenChoose offering two members of one homophone
 *  group has no correct answer and marking one right certifies a bug ».
 *
 *  On an mcq the options are READ. `cet aéroport` against `cette aéroport` is
 *  fully distinguishable on the page, and it is the single best question this
 *  lesson has: the stem states the gender, so the learner rejects one option
 *  from the gender and the other from the sound, which is the whole of the
 *  Owns in one item. Written wide, the guard deletes it.
 *
 *  So the guard is strict on anything the learner hears and takes a NAMED
 *  exception list for anything they read. One entry, and it is asserted to be
 *  an mcq — never `listenChoose`, never free text — so the exception cannot
 *  quietly spread to a surface where it would be a bug. */
export const HOMOPHONE_WRITTEN_ALLOWED: readonly { stem: string; why: string }[] = [
  {
    stem: 'This airport is',
    why: 'the generalisation question. Both distractors are the two errors the rule rules out, the stem supplies the gender, and every option is read rather than heard.',
  },
];

/** WHAT THE EAR CAN ACTUALLY DO HERE, and it is one thing. `ce` is SUH and
 *  `ces` is SAY, which is a genuine vowel contrast the corpus has been
 *  encoding all along. The prompt asks for two `listenChoose` items on exactly
 *  this and there are two.
 *
 *  `ce` and `ceux` are BOTH `SUH` in the house scheme (§A.6) and are never
 *  offered against each other, for the same reason `cet` and `cette` are not:
 *  the scheme merges them, so an ear question between them has no key. They
 *  are also never in contrast in real French, because one takes a noun and the
 *  other refuses one. */
export const AUDIBLE_PAIR = ['ce', 'ces'] as const;
export const AUDIBLE_CLAIM =
  'ce and ces are the one pair here your ear can settle. Everything else on this page is a spelling.';

/** NEAR MISSES THAT DO NOT COLLIDE, so they are legal on a scored surface.
 *  Asserted the other way round too, so the day `fold()` changes this list
 *  goes stale loudly rather than silently. */
export const NEAR_MISSES: [string, string][] = [
  ['cet', 'cette'],
  ['ce', 'ces'],
  ['celui', 'celui-ci'],
  ['celle', 'celles'],
  ['celui-ci', 'celui-là'],
  ['Je prends ce livre.', 'Je prends celui-ci.'],
];

/** THE PAIRS THAT DO COLLIDE under `fold()`. Each folds to ONE string, so each
 *  is banned from every scored surface. THE FIRST THREE ARE THE FINDING: the
 *  hyphen and the accent both vanish, so no typed, spotted or assembled
 *  surface can test either, and `celle-là` in particular can only be an mcq. */
export const FOLD_COLLISIONS: [string, string][] = [
  ['celui-ci', 'celui ci'],
  ['celle-là', 'celle-la'],
  ['celles-là', 'celles la'],
  ['cet', 'CET'],
  ['ce livre', 'celivre'],
  ["c'est", 'cest'],
];

/** The questions this build wanted and could not write (a2.09's model). */
export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: 'a typed question turning on the hyphen in celui-ci', why: "fold() strips '-' entirely, so « celui ci » is accepted as « celui-ci » and the learner is told they spelled it right" },
  { want: 'a typed question turning on the accent in celle-là', why: 'fold() strips every combining mark, so « celle-la » folds to the same string. Written as an mcq instead' },
  { want: 'a listenChoose between cet and cette', why: 'one sound, two spellings. HOMOPHONE_FORMS forbids it and the batch enforces it on every option pair' },
  { want: 'a listenChoose between celle-ci and celles-ci', why: 'the plural is silent, which is the same defect one paradigm along' },
  { want: 'a typed question on the capital in Ce sont', why: 'fold() lowercases, and only mcq can test a capital. The impersonal ce is named and not taught, so no question asks about it at all' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE CITATIONS, BY UNIT ID
 * ══════════════════════════════════════════════════════════════════════════ */

/** a1.03, Le genre des noms. THE DECLARED PREREQUISITE AND LOAD-BEARING: a
 *  learner who cannot gender a noun cannot pick `ce` or `cette`. Named, leaned
 *  on, and every card that needs a gender shows the noun so the gender is
 *  derivable. NOT re-taught. */
export const GENDER_UNIT = 'a1.03';

/** a1.04, Les articles définis. The four-form shape `ce/cet/cette/ces` copies.
 *  One recap line and a pointer. */
export const ARTICLE_UNIT = 'a1.04';

/** sons.07, L'élision, seq 8 on the sons trail. Its reframe is quoted VERBATIM
 *  and IMPORTED rather than retyped. It owns the rule; this lesson teaches
 *  none of it and quotes it once, as the reason `cet` exists. */
export { ELISION_REFRAME, REFRAME as A216_REFRAME } from './beau-nouveau-corpus.ts';
export const ELISION_UNIT = 'sons.07';

/** a2.16, Beau, nouveau, vieux, seq 11. THE SAME PHONOLOGICAL PRESSURE, and
 *  the prompt asks for it BY UNIT ID. Its reframe is imported so the citation
 *  cannot drift, and NOT ONE of its three adjectives is taught here.
 *
 *  Three lessons, one pressure, and this is the third: sons.07 deletes a
 *  vowel, a2.16 borrows a consonant from the feminine, and this one swaps a
 *  whole word. Doctrine §B.7 asks for the earlier instance to be named from
 *  seq 14 onward; this is seq 33 and names two. */
export const VOWEL_UNIT = 'a2.16';
export const VOWEL_FORMS = ['bel', 'nouvel', 'vieil'] as const;
export const VOWEL_CLAIM =
  `${VOWEL_UNIT} swapped a whole form so a consonant would land in front of the vowel. This swaps a whole word for the same reason, and ${ELISION_UNIT} deleted one.`;

/** a2.24 and a2.25, seq 22 and 23, both shipped. `celui` is NOT an object
 *  pronoun and does not sit in front of the verb, and the learner has just
 *  spent three lessons putting pronouns there. Said in one line, on the
 *  roundup, and not one indirect object pronoun and not one pronominal `y` or
 *  `en` appears on any surface here. */
export const INDIRECT_UNIT = 'a2.24';
export const Y_EN_UNIT = 'a2.25';

/** THREE FORMS, NOT SEVEN, AND A2-TAIL-AUDIT §4 IS WHY. The first version of
 *  this list held `me`, `te` and `se` as well, and it fired on
 *
 *      « Take the one you like best, and tell me which. »
 *
 *  which is English, on a learner surface, exactly as half of every card in
 *  the product is. `me` is a French object pronoun and an English one, and a
 *  shape built from French morphology cannot tell them apart. `se` has the
 *  same problem inside `se` compounds and belongs to a2.22 rather than here.
 *
 *  So the guard keeps the three that are unambiguously French, and the English
 *  sentence that broke it stays in MUST_NOT_FIRE because the next author will
 *  write the same shape.
 *
 *  WHAT THE NARROWING ACTUALLY COSTS, MEASURED BY THE AUDIT RATHER THAN
 *  ASSERTED. An earlier draft of this comment said « this lesson prints no
 *  object pronoun of any person ». THAT WAS FALSE. Two IMPORTED published rows
 *  carry one:
 *
 *      fr.b1.pronoms-essentiels.042   Prends celle qui TE plaît le plus.
 *      fr.b1.pronoms-essentiels.039   J'aime ce modèle, celui que tu M'as montré hier.
 *
 *  Both are used and neither is taught, which is what `grammarAssumed` naming
 *  a2.24 and a2.25 records. The true statement is the narrower one: **this
 *  lesson AUTHORS no object pronoun**, in any of its 27 rows, and the guard
 *  covers the three forms a2.24's paradigm turns on.
 *
 *  `lui` is also a substring of `celui`, which the house boundary handles for
 *  free: the `l` is preceded by an `e`, so it is not a whole word. */
export const OBJECT_FORMS = ['lui', 'leur', 'leurs'] as const;

/** The two imported rows that carry an object pronoun, named so the claim above
 *  cannot drift back to the false version, and asserted by id. */
export const OBJECT_IN_IMPORTS: readonly { id: string; form: string }[] = [
  { id: 'fr.b1.pronoms-essentiels.042', form: 'te' },
  { id: 'fr.b1.pronoms-essentiels.039', form: "m'" },
];
export const NOT_AN_OBJECT_CLAIM =
  `${OBJECT_UNIT}, ${INDIRECT_UNIT} and ${Y_EN_UNIT} all put a small word in front of the verb. This one is not that word and it does not go there.`;

/** a2.34, Pronoms possessifs, seq 34, IMMEDIATELY AFTER. `le mien` has the
 *  same article-plus-form shape as `celui`. Named as coming next and NOT ONE
 *  form appears anywhere in this lesson, which is the same absolute answer
 *  a2.08 gave and for the same reason: a guard that says "nowhere" cannot be
 *  weakened by a later edit. */
export const POSSESSIVE_UNIT = 'a2.34';
export const POSSESSIVE_FORMS = [
  'le mien', 'la mienne', 'les miens', 'les miennes',
  'le tien', 'la tienne', 'les tiens', 'les tiennes',
  'le sien', 'la sienne', 'les siens', 'les siennes',
  'le nôtre', 'la nôtre', 'les nôtres',
  'le vôtre', 'la vôtre', 'les vôtres',
  'le leur', 'la leur', 'les leurs',
] as const;

/** a2.08, Comparatifs & superlatifs, seq 32, immediately before. It reserved
 *  the demonstrative pronouns for this unit by name
 *  (`comparatifs-corpus.ts:945`, DEMONSTRATIVE_UNIT = 'a2.33') and asserted
 *  they appear nowhere in it. `fr.a2.comparaisons.069` is the row it named,
 *  and it is imported here.
 *
 *  Its own MUST_NOT_FIRE list is the other half of the handover: `ce`, `cette`
 *  and `ces` appear in eleven of its sentences and a guard that caught them
 *  would have forbidden half its corpus. */
export const COMPARATIVE_UNIT = 'a2.08';
export const COMPARATIVE_HANDOVER = 'fr.a2.comparaisons.069';

/* ── TRAP 4 ──────────────────────────────────────────────────────────────── */

/** « `ce` in `c'est` and `ce sont` is a third job. Name it in one line, teach
 *  it nowhere. » 641 published rows carry `c'est` and 42 carry `ce sont`, so a
 *  learner who has met `c'est` since a1.01 will fold it into the rule unless
 *  told not to.
 *
 *  It is named in ONE place — `s24-roundup` — and appears on no other learner
 *  surface, in no authored row, in no imported row, and on no scored surface
 *  at all. `a1.05`'s own brief says `ce` as in `c'est` is a demonstrative owned
 *  by this unit and asks that it be left fixed; it is left fixed. */
export const IMPERSONAL_FORMS = ["c'est", 'ce sont'] as const;
export const IMPERSONAL_ALLOWED_IN = 's24-roundup';
/** BOTH FORMS ARE NAMED, not just the common one. The batch asserts each of
 *  `IMPERSONAL_FORMS` appears here, because a claim that names `c'est` and
 *  leaves `ce sont` out is the one a learner meets cold on 42 published rows. */
export const IMPERSONAL_CLAIM =
  "You have said c'est since your first week, and ce sont is its plural. That ce is a third job, it never takes a noun, and this lesson is not about it.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE GENERALISATION TEST
 *
 *  Doctrine §B.1: an A2 learner leaves able to say things the lesson never
 *  said. Here the generalisation is sharper than usual, because the form the
 *  learner must produce is `cet`, which they can only reach by hearing that
 *  the noun starts with a vowel.
 *
 *  `aéroport` was chosen AGAINST THE CORPUS, not by taste. Measured across all
 *  48,919 published rows:
 *
 *    - 43 rows carry it, so the learner may already own the word
 *    - it is a headword six times over (`fr.a1.deplacements.027` and five
 *      others), masculine on every one
 *    - ZERO of the 43 carries any demonstrative, so nothing this lesson
 *      imports can leak the answer
 *    - it is masculine AND vowel-initial, so it is the one combination that
 *      forces `cet` rather than `ce` or `cette`
 *
 *  `orage`, `ascenseur`, `escalier`, `immeuble`, `exercice`, `endroit`,
 *  `arbre` and `ordinateur` were all rejected: each appears inside a published
 *  sentence that already carries a demonstrative, and three of them
 *  (`immeuble`, `endroit`, `exercice`) are in this lesson's own import list,
 *  which would put the answer in its vocabulary and delete the question.
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNSEEN = {
  noun: 'aéroport',
  article: 'un aéroport',
  en: 'an airport',
  gender: 'm',
  id: 'fr.a1.deplacements.027',
  answer: 'cet aéroport',
} as const;

export const UNSEEN_REJECTED = [
  { noun: 'orage', why: "fr.a1.noms-essentiels.290 « L'orage a réveillé toute la ville cette nuit. » and three more" },
  { noun: 'ascenseur', why: "fr.a2.voisinage.008 « L'ascenseur est en panne depuis ce matin. »" },
  { noun: 'escalier', why: "fr.a2.voisinage.064 « J'ai croisé ma voisine ce matin dans l'escalier. »" },
  { noun: 'immeuble', why: 'fr.a1.mots-essentiels.159, WHICH THIS LESSON IMPORTS. It carries « cet immeuble » and is the answer' },
  { noun: 'endroit', why: 'fr.a1.noms-essentiels.041, WHICH THIS LESSON IMPORTS. « Cet endroit est vraiment magnifique. »' },
  { noun: 'exercice', why: 'fr.a1.adjectifs-essentiels.102, WHICH THIS LESSON IMPORTS. « Cet exercice est facile. »' },
  { noun: 'arbre', why: 'fr.a1.nombres.199 « Cet arbre majestueux mesure vingt mètres de hauteur. »' },
  { noun: 'ordinateur', why: 'ten rows carry it with a demonstrative, including fr.a1.questions.180 « Combien coûte ce nouvel ordinateur ? »' },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. DISPLAY PARITY
 *
 *  Invariants §5: the corpus file is the single source of truth for every
 *  string the lesson displays. EVERY SHIPPED LESSON IN THIS BAND BREAKS THAT
 *  and so does this one, because a `cardDeck` card and a `tapTable` cell carry
 *  inline strings rather than itemIds.
 *
 *  a2.08's mutation harness proved the consequence: changing a corpus row
 *  destroyed the thing a required layout existed for and every guard stayed
 *  green, because the card still said what it had always said.
 *
 *  So the pairs where the copy IS the teaching are pinned: the section must
 *  carry the row's `fr` VERBATIM, checked against the row rather than against
 *  a retyped constant.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DISPLAY_PARITY: readonly { section: string; itemId: string; why: string }[] = [
  { section: 's04-grid', itemId: E(337), why: 'required layout 2, the noun named' },
  { section: 's04-grid', itemId: E(338), why: 'required layout 2, the same noun unnamed' },
  { section: 's04-grid', itemId: E(339), why: 'the feminine half of the same pair' },
  { section: 's04-grid', itemId: E(340), why: 'the same' },
  { section: 's06-vowel', itemId: E(345), why: 'required layout 3, the consonant half' },
  { section: 's06-vowel', itemId: E(346), why: 'required layout 3, the vowel half' },
  { section: 's06-vowel', itemId: E(347), why: 'the silent h, which is the proof the rule is about sound' },
  { section: 's09-both', itemId: E(360), why: 'both jobs in one sentence, masculine singular' },
  { section: 's09-both', itemId: E(361), why: 'both jobs in one sentence, feminine singular' },
  { section: 's09-both', itemId: E(362), why: 'both jobs in one sentence, masculine plural' },
  { section: 's09-both', itemId: E(363), why: 'both jobs in one sentence, feminine plural' },
  { section: 's11-tail', itemId: E(352), why: 'the -là tail' },
  { section: 's11-tail', itemId: E(353), why: 'the de tail' },
  { section: 's08-unseen', itemId: E(345), why: 'the generalisation mission opens on the Regarde frame' },
  { section: 's08-unseen', itemId: E(346), why: 'the same' },
  { section: 's08-unseen', itemId: E(348), why: 'the same' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. THE GUARD TABLES
 *
 *  A2-TAIL-AUDIT §4: guard the THING, not the letters, and put the sentence
 *  that broke an earlier version in the MUST_NOT_FIRE list, because the next
 *  author will write the same shape.
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE BARE PRONOUN. `Je veux celui.` is not French, and it is the error
 *  learners actually produce, so it has to appear — as the error, in exactly
 *  three marked places and nowhere else.
 *
 *  The shape has to see a pronoun with NO tail, which means it has to know
 *  what a tail looks like. A naive `\bcelui\b` fires on nothing useful,
 *  because A2-TAIL-AUDIT §4 records that THE HOUSE WORD BOUNDARY EXCLUDES `'`
 *  AND `-`: `(?![\p{L}\p{N}'’-])` refuses to match before a hyphen, so `celui`
 *  inside `celui-ci` is not a whole word by that boundary. That half is
 *  convenient here and it is not enough on its own, because `celui de Marie`
 *  and `celui qui est là` are legal and the boundary sees a whole word in
 *  both. So the guard asks separately whether a legal tail follows.
 *
 *  Both halves are in MUST_FIRE / MUST_NOT_FIRE below. */
export const BARE_PRONOUNS = ['celui', 'celle', 'ceux', 'celles'] as const;

/** What may follow a demonstrative pronoun. A pronoun with none of these after
 *  it is the trap. `-ci` and `-là` are attached with a hyphen; `de`, `que`,
 *  `qui`, `dont` and `où` are separate words. */
export const LEGAL_TAILS = ['-ci', '-là', 'de', 'des', "d'", 'du', 'que', "qu'", 'qui', 'dont', 'où'] as const;

/** THE FOUR SECTIONS THE BARE FORM IS ALLOWED IN, BY ID — AND THE PROMPT ASKS
 *  FOR ONE.
 *
 *  It says: « Permit the bare form only inside an `errorSpot` item as the
 *  error, scoped to that one location. » That is one sentence too tight and
 *  the prompt contradicts it three paragraphs earlier, where it asks for a
 *  scene in which somebody « reaches for `celui`, produces it bare, and is
 *  handed the wrong item », and again where it makes trap 3 the `trapDrill`.
 *  A scene that opens on the error and a trapDrill that corrects it both have
 *  to print it.
 *
 *  So the allowance is four sections rather than one, every one of them a
 *  place where the form is MARKED as wrong — a scene `wrong` block, a
 *  trapDrill `promptSound`, a `commonErrors` `wrong`, an `errorSpot` `prompt`
 *  — and the batch asserts in both directions: nowhere else may print it, and
 *  every one of the four must, or the allowance is dead. */
export const BARE_ALLOWED_IN = ['s01-scene', 's15-trap', 's16-errors', 's22-quiz'] as const;

/* ── THE DEFECT CLASS NO GUARD IN THIS BUILD CAUGHT ───────────────────────
 *
 *  A self-audit after the lesson was applied found TWO authored French strings
 *  that no gate anywhere had an opinion about, both on the same scenario:
 *
 *      « Et vous VOULIEZ autre chose ? »        the imparfait, which A2 never
 *                                               teaches at any seq
 *      « J'EN ai deux comme ça. »               the pronominal `en`, a2.25's,
 *                                               and this lesson's own reading
 *                                               passage had already been
 *                                               rewritten to remove one
 *
 *  Both are fixed. What matters more is that thirty-odd guards, a 111-assertion
 *  test and a 19-mutation harness all stayed green through them, because every
 *  one of those guards was pointed at THIS lesson's material and none was
 *  pointed at the band's tense ceiling.
 *
 *  A2 covers the présent, the passé composé, the futur proche and the
 *  imperative. It does not cover the imparfait, the futur simple, the
 *  conditionnel or the subjonctif, and seq 33 is two units from the end of the
 *  band, so nothing downstream rescues a form that slips in here.
 *
 *  ANCHORED ON VERB STEMS, NOT ON ENDINGS. The audit script's own first version
 *  used `/\b\w+(ais|ait|iez)\b/` and matched « Parfait ». An ending alone reads
 *  half the French lexicon as a verb.                                        */
export const OUT_OF_BAND_TENSES: readonly { name: string; stems: readonly string[]; endings: readonly string[] }[] = [
  {
    name: 'imparfait',
    stems: ['voul', 'pouv', 'dev', 'sav', 'fais', 'dis', 'ét', 'av', 'all', 'prena', 'vena', 'croy', 'voy', 'regard', 'parl', 'habit', 'cherch', 'coût'],
    endings: ['ais', 'ait', 'aient', 'iez', 'ions'],
  },
  {
    name: 'futur simple / conditionnel',
    stems: ['ser', 'aur', 'ir', 'viendr', 'prendr', 'voudr', 'pourr', 'devr', 'saur', 'fer', 'mettr'],
    endings: ['ai', 'as', 'a', 'ons', 'ez', 'ont', 'ais', 'ait', 'aient', 'ions', 'iez'],
  },
];

/** The pronominal `en` and `y`, which belong to a2.25. Shaped as `en` plus a
 *  verb rather than as a bare `en`, because `en cuir`, `en toile` and `en
 *  France` are the preposition and this lesson's reading passage uses two of
 *  them. */
export const PRONOMINAL_EN_Y: readonly string[] = [
  "j'en", 'en ai', 'en as', 'en avons', 'en avez', 'en ont', 'en veux', 'en veut',
  'en prends', 'en prend', 'en voit', 'en reste', 'en parle',
  'y vais', 'y va', 'y suis', 'y est', 'y ai', 'y pense',
];

export const MUST_FIRE: Record<string, readonly string[]> = {
  tense: [
    'Et vous vouliez autre chose ?',
    'Je prendrais celui-ci.',
    'Elle voulait celle-là.',
    'Nous serons là demain.',
  ],
  enY: [
    "J'en ai deux comme ça.",
    'Il en veut un autre.',
    'Oui, j\'y vais tous les samedis.',
  ],
  bare: [
    'Je veux celui.',
    'Je prends celui.',
    'Elle préfère celle.',
    'Prends ceux.',
    'Je voudrais celles.',
    // THE MUTATION HARNESS FOUND THIS ONE, and the guard was green on it for
    // three drafts. A card body is English prose with French quoted inside, so
    // a whole-string "does this look English" test skips exactly the place the
    // error would actually appear. Evaluated one clause at a time it fires on
    // the first sentence and leaves the second alone.
    'Je prends celui. This one, the one nearer you. Two letters and a hyphen.',
    'Nobody says this. Je veux celle. And yet the sentence feels finished in English.',
  ],
  possessive: [
    'Ce sac est plus grand que le mien.',
    'Cette robe est moins chère que la tienne.',
  ],
  object: [
    'Je lui donne ce livre.',
    'Nous leur avons montré cette robe.',
  ],
  impersonal: [
    'Ce sont les plus grands arbres du parc.',
    "C'est le livre que je voulais.",
  ],
};

export const MUST_NOT_FIRE: Record<string, readonly string[]> = {
  /** The tense guard must not read a noun or an adjective as a verb. Every one
   *  of these is a real string off this lesson's own surfaces, and the first
   *  two broke the audit script that found the defect. */
  tense: [
    "Parfait. Alors le sac, les gants et l'écharpe.",
    'Je vais chez le médecin cet après-midi.',
    'Ce sac est petit, mais celui-là est grand.',
    'Cette robe est bleue, mais celle-là est noire.',
    'Elle a posé deux sacs sur le comptoir.',
    'Vous avez choisi ?',
    'Regarde cet homme.',
  ],
  /** The en/y guard must not read the PREPOSITION `en`, which this lesson's
   *  reading passage uses twice and glosses twice. */
  enY: [
    'Ce sac est en cuir et celui-là est en toile.',
    "Il finit par montrer celui en toile et il dit deux mots.",
    'Nous voulons visiter Paris et Lyon cet été.',
  ],
  /** The bare-pronoun guard must NOT fire on a pronoun that has a tail, and
   *  the four shapes below are the four legal tails. The last two are the
   *  English half of a learner surface: A2-TAIL-AUDIT §4 records that a shape
   *  built from French morphology reads English as French, and « the one that
   *  is on the table » has no French in it at all. */
  bare: [
    // The two attached tails, which the word boundary handles on its own.
    'Je prends celui-ci.',
    'Ces chaussures sont confortables, mais celles-là sont plus légères.',
    // The two detached ones, which it does not.
    'Je veux celui de Marie.',
    'Prends celui qui est sur la table.',
    "J'aime ce modèle, celui que tu m'as montré hier.",
    // THE ENUMERATION, AND IT BROKE THE THIRD VERSION OF THIS GUARD. A lesson
    // cannot teach four words it is forbidden to list, and every one of these
    // is a real string off this lesson's own surfaces.
    'Act 3: celui, celle, ceux, celles, and what has to follow them',
    'celui, celle, ceux and celles always carry something after them.',
    'If you have said celui, celle, ceux or celles and the sentence is about to stop, it is not going to.',
    // THE LABEL, AND IT BROKE THE FOURTH. A card headed with the form is the
    // form as a heading, not a sentence that stopped early.
    'celui',
    'celui · celle',
    'ceux · celles',
    // THE MENTION, AND IT BROKE THE FIFTH. English prose naming a French word
    // ends on that word exactly the way a French sentence stopping early does,
    // and half of every teaching surface in this product is English by design.
    'Then he touches celle de sa femme. Why celle and not celui?',
    'The feminine of the four that replace is celle.',
    'ceux and celles. Going in the plural stops asking about gender.',
    // The English half of a learner surface. A2-TAIL-AUDIT §4: a shape built
    // from French morphology reads English as French.
    'Read the noun that follows. If there is one, it points.',
    'The one on the table, and the one you showed me yesterday.',
  ],
  /** The possessive guard must not read a French possessive ADJECTIVE — `mon`,
   *  `ma`, `son`, `leur` used before a noun — as a possessive pronoun. a1.17
   *  owns those, the learner has had them since A1, and two imported rows
   *  carry them. */
  possessive: [
    'Cette robe est belle, mais celle de ma sœur est unique.',
    "J'aime ce modèle, celui que tu m'as montré hier.",
    // fr.a1.mots-essentiels.192, published. `son avis` is a possessive
    // ADJECTIVE, which a1.17 owns and the learner has had since A1, and
    // `celui des autres` is this lesson's own material. The first draft of
    // this list used « Elle donne son avis et je donne le mien plus tard. »,
    // which contains an actual possessive pronoun and would have made the
    // MUST_NOT_FIRE entry a lie the guard was right to reject.
    'Elle donne son avis mais elle respecte celui des autres.',
  ],
  /** The object-pronoun guard must not fire on the English word « me », nor on
   *  the English « the one », nor on a French sentence that merely contains
   *  the letters. */
  object: [
    'Vous habitez dans cet immeuble depuis longtemps ?',
    'Nous prenons ceux-ci.',
    'Take the one you like best, and tell me which.',
    'The noun tells you which one, so read it before you choose.',
  ],
  /** The impersonal guard must not fire on `ce` doing THIS lesson's job, which
   *  is the whole of its corpus. a2.08's own DEMONSTRATIVE_MUST_NOT_FIRE list
   *  makes the same point in the other direction. */
  impersonal: [
    'Ce sac est petit, mais celui-là est grand.',
    'Ces chaussures sont neuves, mais celles-là sont vieilles.',
    'Ce livre est aussi lourd que celui-là.',
    'Regarde ce livre.',
  ],
};

/* ── HOUSE COPY ───────────────────────────────────────────────────────────── */

/** No grammar jargon on a learner surface (invariants §8). `grammarIntroduced`
 *  is addressed to the curriculum and is exempt.
 *
 *  Corrections §14.5: `adjective` and `adverb` are NOT jargon — `adjective` is
 *  on 147 shipped cards — so the RATIO is guarded instead, and the plain phrase
 *  must outnumber the technical one.
 *
 *  Corrections §13: `hasPhrase` is boundary-exact, so a list holding `pronoun`
 *  does not catch `pronouns`. The `-s` plural of every entry is checked. */
export const JARGON = [
  'demonstrative', 'determiner', 'deictic', 'anaphoric', 'antecedent',
  'proform', 'nominal', 'substantive', 'referent', 'clitic',
  'relative clause', 'paradigm', 'inflection', 'morphology',
  'noun phrase', 'head noun', 'elision', 'hiatus', 'epenthetic',
] as const;

/** The house prefers the plain phrase. Measured across all 53 shipped lessons'
 *  learner surfaces: `adjective` 147, `describing word` 137. This lesson's
 *  plain phrase is `the word`, against the technical `pronoun`. */
export const TECHNICAL_WORD = 'pronoun';
export const PLAIN_PHRASE = 'the word';

export const BANNED_SUBSTRINGS = ['honest', '—'] as const;

/** AI-tell phrasing, doctrine §F. */
export const FORBIDDEN_CLAIMS = [
  'falls fast', 'trip up', 'half of everything', 'this is the big one',
  'listen to the trap', 'get those two right', 'this is the part that pays',
  'here is the catch',
] as const;

/** Fields that validate, publish and are read by NO renderer. */
export const DEAD_AUDIO_FIELDS = ['modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays'] as const;
export const DEAD_LESSON_FIELDS = ['teaches', 'canDo', 'track'] as const;
