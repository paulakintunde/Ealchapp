// The a2.18 corpus: what this lesson authors, what it imports, the five shipped
// respellings it repairs, and the sequencing decision that changed its shape.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a2.18 puts on a screen. The lesson body (prepositions-temps-lesson.ts)
// reads them FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE CORPUS PUBLISHED FOUR FIFTHS OF THIS LESSON'S GRID AS FOUR CONSECUTIVE
//  CARDS, IN ONE FRAME, WITH RESPELLINGS, AND NEVER PUBLISHED THE FIFTH.
// ══════════════════════════════════════════════════════════════════════════
//
//     fr.sons.jours-et-mois.080   dans une heure      DAHN ZÜN UHR
//     fr.sons.jours-et-mois.081   il y a une heure    EEL EE AH ÜN UHR
//     fr.sons.jours-et-mois.082   depuis une heure    duh-PWEE ZÜN UHR
//     fr.sons.jours-et-mois.083   pendant une heure   pahn-DAHN TÜN UHR
//                                 en une heure        DOES NOT EXIST
//
// Four prepositions, one duration, four consecutive ids, all published, all
// carrying a respelling. **Corrections §3 says this never happens** — "the
// corpus has forms and no minimal pairs ... budget for authoring your whole
// paradigm in one frame" — and it is right for five consecutive builds and
// wrong here. The paradigm was already written. What was never written is the
// row for `en`, which is the one whose meaning is not "when" but "how long it
// took", and authoring exactly that row is a fair description of the lesson.
//
// Measured 2026-08-14 against Postgres by `scripts/_a218_probe.ts` through
// `_a218_probe5.ts`, and against a1.12, a1.09 and a2.04 read as shipped.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THE BRIEF GOT WRONG. TEN CLAIMS, MEASURED.
// ══════════════════════════════════════════════════════════════════════════
//
//   1. "temps-et-frequence exists with 310 published rows, 108 of them at
//      fr.a2.*. That is almost certainly your home; probe it before deciding."
//
//      PROBED, AND IT IS NOT. `temps-et-frequence` is a theme about FREQUENCY
//      and the CLOCK, which is a1.08's, a1.09's and a1.12's subject and not
//      this one's. Its first twenty rows are « D'habitude, l'équipe se réunit à
//      dix heures », « Elle change souvent son emploi du temps », « Nous nous
//      voyons une fois par semaine ». The home is `prepositions-essentielles`,
//      and the evidence is that the theme ALREADY HOLDS THE TIME PREPOSITIONS:
//
//          fr.a2.prepositions-essentielles.001   durant        a time word
//          .005  Nous avons attendu pendant une heure à la gare.
//          .006  Elle vit ici depuis trois ans.
//          .024  Depuis son arrivée, elle apprend le français.
//          .036  Depuis lundi, il pleut tout le temps.
//          .047 · .061 · .075 · .097 · .109      eight more depuis rows
//
//      Eleven `depuis` and ten `pendant` rows live there already, and `.001` —
//      the first row anybody ever put in the a2 half of that namespace — is
//      `durant`, which is a preposition of time and nothing else. The theme is
//      not "prepositions of place"; a2.04 was the lesson that made it look that
//      way. See THEME below.
//
//   2. "il y a 0 rows, it is a PHRASE, not a headword — probe it with --tokens"
//
//      HALF RIGHT AND THE HALF THAT MATTERS IS WRONG. `il y a` bare is absent,
//      which corrections §2 also records. But a2.15 §13's rule holds a third
//      time: **absent is not the same as nowhere.** « il y a une heure » is a
//      PUBLISHED PHRASE CARD with a respelling, `EEL EE AH ÜN UHR`, at
//      fr.sons.jours-et-mois.081, and it is the "ago" sense. So the respelling
//      for this lesson's central phrase was READ OFF a published row rather
//      than invented, and the phrase reaches a card by IMPORT.
//
//   3. "the only distinguisher is what follows: a noun means existence, a time
//      expression means ago."
//
//      NOT SUFFICIENT, AND THE COUNTEREXAMPLE IS PUBLISHED. fr.a1.jours-et-
//      mois.090 is « En mai, il y a plusieurs jours fériés en France. » — a
//      TIME NOUN behind `il y a`, and it means "there ARE several public
//      holidays". The word after `il y a` is `plusieurs` and the word after
//      that is `jours`, and it is still existence.
//
//      What separates them is whether the time expression is FINISHED. « il y a
//      trois jours » ends there; « il y a plusieurs jours fériés » is still
//      being described, so `jours` is a thing rather than a measurement. Every
//      published row was read and only two put anything after the duration; one
//      is that sentence and the other starts a new clause with `et`. See
//      AGO_RULE below, which is what the lesson teaches, and IL_Y_A_EVIDENCE
//      for the counts.
//
//   4. "This lesson carries the second instance of doctrine §B.7's recurring
//      shape ... You are the FIRST lesson told to name the earlier instance by
//      unit id ... Read a2.02's report for the name it gave the pattern."
//
//      THE TERM EXISTS AND IS QUOTABLE. `WHAT_FOLLOWS` in
//      `data/aller-venir-terms.ts` is the bare string `what comes next decides`,
//      exported with `WHAT_FOLLOWS_UNIT = 'a2.02'` beside it and a comment
//      naming a2.18, a2.19 and a2.15 as the three lessons that will quote it.
//      This file IMPORTS both rather than retyping either, which is what a2.02
//      built them for. The brief lists this as unverified; it is verified.
//
//   5. "depuis + PRESENT ... depuis + present is the single biggest interference
//      point for an English speaker in the whole A2 level."
//
//      THE CORPUS AGREES AND THE MARGIN IS FOUR TO ONE. Of 560 published
//      `depuis` sentences, 31 hold an avoir passé composé. Of 447 `pendant`
//      sentences, 97 do. So `pendant` is three and a half times likelier to sit
//      beside a compound tense than `depuis` is, measured rather than asserted,
//      and the contrast the lesson teaches is the one the corpus already shows.
//
//   6. "pendant 1 row fr.sons.mots-essentiels.028 [pahn-DAHN] ⚠ TWO nasals, one
//      invisible"
//
//      TWO NASALS AND THE CHECKER SEES BOTH. Measured through the real
//      `hasPlainNasalFor`:
//
//          pahn-DAHN   FLAGGED     pahⁿ-DAHN   FLAGGED
//          pahn-DAHⁿ   FLAGGED     pahⁿ-DAHⁿ   clean
//
//      Corrections §14.1 is about `lentement` → `lahnt-MAHN`, where the first
//      nasal is followed by a `t` INSIDE the token and so is invisible. In
//      `pahn-DAHN` the first nasal is followed by a HYPHEN, which is not a
//      letter, so branch one of the checker fires on it. **The split is not by
//      how many nasals a row holds; it is by whether a letter follows the n
//      inside the token.** See REPAIRS, where `pendant` is a two-visible row.
//
//   7. "en 1 row fr.sons.mots-essentiels.088 [AHN] ⚠ nasal"
//
//      TRUE, and the gloss on that row is `some, of it`, which is the PRONOUN
//      `en` and neither this lesson's sense nor a2.04's. The row is imported for
//      the word and its repaired respelling and its gloss is replaced on the
//      card. Recorded because a later author reading the row alone would think
//      the corpus disagrees with this lesson about what `en` means.
//
//   8. "Restrict to present-anchored uses ... il y a becomes receptive-only."
//
//      TAKEN, AND IT COSTS LESS THAN THE BRIEF EXPECTS. Four of the five are
//      fully producible with the present tense at seq 14: `depuis` requires it,
//      `pendant` takes it (« Il pleut pendant la nuit », published),
//      `dans` takes it with future meaning (96 published rows), and `en` takes
//      it (« Le tramway traverse toute la ville en dix minutes », published).
//      Only `il y a` needs a past. See SEQUENCING below for the recommendation.
//
//   9. "pour as a duration (je pars pour deux semaines)"
//
//      THE CORPUS HAS ELEVEN ROWS AND NOT ONE OF THEM IS THAT SENTENCE. Every
//      published `pour` plus a duration attaches to a PLAN rather than to an
//      action: « Mon visa est valide pour six mois », « Nous avons loué ce
//      logement pour deux ans », « embauchés à l'essai pour trois mois ». So
//      `pour` does not compete with `pendant` in the shape a learner produces,
//      and against depuis 560, pendant 447 and dans 96 it is a rounding error.
//      DECIDED: named once and taught nowhere. See POUR_DECISION.
//
//  10. "Whether a1.12 already teaches any duration expression." UNVERIFIED.
//
//      IT TEACHES NONE. a1.12.l1 v3 holds zero occurrences of `depuis`,
//      `pendant` and `il y a` across its whole body. What it DOES own, in its
//      own `grammarIntroduced`, is « à plus a time, marking when something
//      happens rather than what time it is » — so `à huit heures` is a1.12's and
//      `en mai` is a1.09's, and both are a WHEN. This lesson's when is the one
//      measured FROM NOW, which is the line the goals section opens on.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE SEQUENCING DECISION
// ══════════════════════════════════════════════════════════════════════════
//
// The brief asks for option 1 and a report on option 3, and option 1 is taken.
// The recommendation, which belongs in the report and is recorded here so it
// cannot be lost:
//
//   KEEP a2.18 AT seq 14 AND CHANGE THE canDo INSTEAD.
//
// Moving the unit after a2.05 buys one row of five and costs four. `dans`
// pairs with the futur proche, which is a2.19 at seq 15, ONE LESSON AFTER this
// one; a2.18 at seq 17 would leave a2.19 either teaching `dans` itself or using
// it untaught. And a2.05 is easier with `il y a` met than without it, because
// « il y a trois jours » is the commonest way in the language to anchor a passé
// composé and a2.05 can then hand the learner a tense for a phrase they already
// recognise rather than two new things at once.
//
// What is genuinely wrong is the canDo, which was written without checking the
// tense: **"Can say how long, how long ago and when with the right time
// preposition"** promises production of "how long ago" that no learner at seq 14
// can deliver. A lesson build does not edit `content_units`, so the block is
// used as it stands and the proposed replacement is in CANDO_OVERCLAIM below.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT } from './aller-venir-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  IDENTITY, THE BLOCK, AND THE COUNTS THE BATCH REFUSES TO DISAGREE WITH
 * ═══════════════════════════════════════════════════════════════════════ */

/** DECIDED, against the brief. See header claim 1: the a2 half of this
 *  namespace opens with `durant` and holds twenty-one time-preposition
 *  sentences, and `temps-et-frequence` is a frequency-and-clock theme owned by
 *  a1.08, a1.09 and a1.12. a2.04 lands in the same theme one seq earlier, so
 *  the two halves of the preposition arc share a deck, which is what a learner
 *  reviewing « essential prepositions » would expect to find. */
export const THEME = 'prepositions-essentielles';

/** The theme this build considered and rejected, kept as a constant so the
 *  guards can assert no row of this lesson lands there. */
export const REJECTED_THEME = 'temps-et-frequence';

/** Byte for byte from `content_units`, measured 2026-08-14 by
 *  `scripts/_a2_preflight.ts`. Corrections §1: never from the brief. This one
 *  the brief carries correctly, because it was already corrected against §11. */
export const UNIT = {
  id: 'a2.18',
  seq: 14,
  title: 'Prepositions of Time',
  sub: 'Prépositions de temps',
  canDo: 'Can say how long, how long ago and when with the right time preposition',
  prereqUnitIds: ['a1.12'],
  lessonIds: [] as string[],
} as const;

export const LESSON_ID = 'a2.18.l1';

/** WHAT THE canDo PROMISES AND THIS TRAIL POSITION CANNOT DELIVER.
 *
 *  "how long ago" needs the passé composé, which is a2.05 at seq 16. The
 *  proposed wording keeps all three jobs and moves one of them into the
 *  register the learner actually has. Reported rather than applied: editing a
 *  unit row is a curriculum decision and not a lesson build's. */
export const CANDO_OVERCLAIM = {
  shipped: UNIT.canDo,
  proposed: 'Can say how long something has been going, how long it took and when it starts, with the right time preposition',
  why: 'At seq 14 the learner has the present tense and venir de. "How long ago" needs a past tense and a2.05 is two lessons away, so one third of the shipped canDo is not producible in this lesson at this position.',
} as const;

/** Ledger §10: the maximum has been useless since a2.10.l2 took `.461..500`.
 *  The row COUNT is the only signal. `fr.a2.prepositions-essentielles` held
 *  exactly this many rows when a2.18 claimed `.169`, with max `.154`, which is
 *  a2.04's own figure after its apply. The batch refuses any count that is not
 *  this or this plus its own rows, and a row INSIDE the block that this build
 *  does not own is fatal whatever the total does. */
export const ROW_COUNT_BEFORE = 153;

/** The whole theme, all levels, for the report. */
export const THEME_COUNT_BEFORE = 456;

/** a2.04 reserved `.129..168` and used `.129..154`. Its ledger amendment says
 *  the next lesson opens at `.169` and names this one. `.155..168` is a2.04's
 *  unused tail and ids are the SRS key: it is not backfilled. */
export const ID_BLOCK = {
  from: 'fr.a2.prepositions-essentielles.169',
  to: 'fr.a2.prepositions-essentielles.208',
} as const;

/** a2.03's batch claimed a NAMESPACE when it meant a BLOCK and re-running it
 *  failed on eighteen rows a2.16 legitimately owned; a2.04 landed in a
 *  namespace holding 127 rows nobody in this band authored. This lesson lands
 *  in the same namespace with 153 in it. Every guard here is scoped to the
 *  BLOCK, and a row inside the block that this build does not own is fatal. */
export const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.prepositions-essentielles\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= 169 && n <= 208;
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS, BY UNIT ID, AND WHAT EACH ONE OWNS
 * ═══════════════════════════════════════════════════════════════════════ */

/** a1.12, L'heure. The prerequisite. It owns `à` plus a clock time and teaches
 *  no duration expression at all: zero `depuis`, zero `pendant`, zero
 *  `il y a` across its whole shipped body. */
export const CLOCK_UNIT = 'a1.12';

/** a1.09, Les mois de l'année. It owns `en` in front of a bare month, which is
 *  a third sense of `en` and is neither this lesson's nor a2.04's. */
export const MONTH_UNIT = 'a1.09';

/** a2.04, Prépositions de lieu, seq 13, immediately before. It owns the place
 *  senses of `en` and `dans` and it deferred both temporal senses here by
 *  name, on a learner surface. Verified against the shipped lesson. */
export const PLACE_UNIT = 'a2.04';

/** a2.02, Irréguliers 1, seq 5. It owns the FIRST instance of doctrine §B.7's
 *  one-form-two-jobs shape and it named the pattern so this lesson could quote
 *  it. Imported rather than retyped. */
export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };

/** a2.19, Le futur proche, seq 15, immediately after. `dans` pairs with it and
 *  this lesson uses the present with future meaning instead. */
export const FUTURE_UNIT = 'a2.19';

/** a2.05, Le passé composé avec avoir, seq 16. It is what `il y a` is waiting
 *  for, and it is the unit this lesson hands the loop to. */
export const PAST_UNIT = 'a2.05';

/** What a2.04 shipped about the deferral, quoted so this lesson cannot say
 *  something its predecessor contradicts. Verbatim from
 *  `prepositions-lieu-corpus.ts` TIME_DEFERRAL, with a2.04's own back-reference
 *  resolved. a2.16 §3: assert the literal, because a back-reference to a unit
 *  id is not a variable. */
export const A204_DEFERRAL =
  'En also means how long something takes and dans also means how far ahead something is, and both of those are a2.18, which is the very next lesson.';

/** a2.04's own reframe, verbatim, so the roundup can point back at the lesson
 *  the learner did yesterday without paraphrasing it. */
export const A204_REFRAME = 'À folds the article in. En throws it out. Chez leaves it alone.';

/** What a1.12 shipped, quoted from its `grammarIntroduced`, because this
 *  lesson's canDo says "and when" and a1.12 already owns half of that. */
export const A112_CLAIM = 'à plus a time, marking when something happens rather than what time it is';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: a rule the learner runs while the sentence is already moving.
 *  Ten words, and it is the brief's own candidate unchanged.
 *
 *  It makes ONE claim and it runs in the direction a speaker moves: the learner
 *  wants to say "I have lived here for three years", checks whether they still
 *  live there, and the answer puts the verb in the present. It does NOT claim
 *  the converse, and `dans` is the case that would break it if it did — « je
 *  pars dans dix minutes » is a present tense about something that has not
 *  started. The lesson handles that separately and says so: TWO of the five put
 *  the verb in the present, for two different reasons. */
export const REFRAME = 'If it is still happening, French keeps it in the present.';

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'depuis means since or for.',
    why: 'THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right. It is a translation, and it is the source of the error rather than the fix: a learner running it produces « j\'ai habité ici depuis trois ans », because the English it hands them is a perfect. It instructs nothing about the verb, which is the half they get wrong.',
  },
  {
    candidate: 'French keeps the verb in the present far longer than English does.',
    why: 'True, and it covers depuis AND dans, which the chosen one does not. Rejected because it describes a difference between two languages rather than telling anybody what to do, and the doctrine\'s test is whether it can be applied in the half-second between subject and verb. A learner cannot act on "far longer".',
  },
  {
    candidate: 'The clock decides the tense, not the English.',
    why: 'Nine words and it names the enemy, which is worth something. Rejected because it is false about pendant and en, which take any tense, so a rule carried verbatim through six sections would be wrong in two of them.',
  },
  {
    candidate: 'Still going, still present.',
    why: 'The chosen one compressed to four words, and the compression takes the instruction out. "Still present" reads as a claim about the moment rather than about the verb form, and a learner who has never been told French has a present tense they should be choosing will read it as a truism.',
  },
];

/** The move, in the imperative, for the roundup and the sheet. */
export const THE_MOVE =
  'Before you pick the word, ask whether the thing is still running, finished, ahead of you or behind you. The word follows from the answer and never from the English.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GRID, WHICH IS THE OWNS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Prep = 'depuis' | 'pendant' | 'il y a' | 'dans' | 'en';

/** The order the grid prints and every guard walks. `depuis` first because it
 *  is the Owns and the heaviest act; `il y a` third because it is the trap and
 *  sits between the two that are producible. */
export const PREP_ORDER: readonly Prep[] = ['depuis', 'pendant', 'il y a', 'dans', 'en'];

/** a2.17 measured a THREE-COLUMN cell on a Pixel 6 at ELEVEN characters and
 *  a2.04 measured the reference-sheet table budget at THREE COLUMNS. This grid
 *  is three columns and every cell below is inside eleven. */
export const GRID_CELL_MAX = 11;

export type GridRow = {
  prep: Prep;
  /** The tense the word forces, as the middle column prints it. */
  tense: string;
  /** What it measures, as the right column prints it. */
  measures: string;
  /** The example, which the tap detail titles. Every one of these is an
   *  authored or imported row rather than a loose string. */
  example: string;
  /** True where the learner can PRODUCE this at seq 14. `il y a` cannot. */
  producible: boolean;
  detail: string;
};

/** FIVE ROWS, THREE COLUMNS, EVERY CELL ELEVEN CHARACTERS OR FEWER, and the
 *  example on the row rather than in a fourth column, because a2.04 measured a
 *  fourth column clipping on a Pixel 6 and the sheet budget is three. */
export const GRID: readonly GridRow[] = [
  {
    prep: 'depuis', tense: 'present', measures: 'still going', example: 'depuis une heure',
    producible: true,
    detail: 'A stretch that started in the past and has not stopped. English reaches for a perfect here and French will not follow: the verb stays in the present, because the thing is still true.',
  },
  {
    prep: 'pendant', tense: 'any tense', measures: 'finished', example: 'pendant une heure',
    producible: true,
    detail: 'A stretch with both ends on it. It ran, it stopped, and you are saying how wide it was. That works in any tense, which is why it is the easy one.',
  },
  {
    prep: 'il y a', tense: 'a past', measures: 'behind you', example: 'il y a une heure',
    producible: false,
    detail: `A single point, measured backwards from now. It needs a past tense to sit in, and that tense is ${PAST_UNIT}. You will meet this one here and produce it there.`,
  },
  {
    prep: 'dans', tense: 'present', measures: 'ahead', example: 'dans une heure',
    producible: true,
    detail: 'A single point, measured forwards from now. The present tense again, and for the opposite reason: French uses it for something about to happen, so « je pars dans dix minutes » is a present about a future.',
  },
  {
    prep: 'en', tense: 'any tense', measures: 'how long', example: 'en une heure',
    producible: true,
    detail: 'Not when, and not how wide. How long the whole thing TOOK, start to finish. It is the only one of the five that answers a different question, and it is the one the corpus never made a card for.',
  },
];

export const GRID_CLAIM =
  'Five words, and every one of them wants a different shape of time behind it. Pick the shape first and the word picks itself.';

/** The row this lesson cannot ask the learner to produce, by index, so a guard
 *  names it rather than counting from the end. */
export const IL_Y_A_ROW_INDEX = 2;

export const gridRow = (p: Prep): GridRow => {
  const r = GRID.find((x) => x.prep === p);
  if (!r) throw new Error(`a2.18: no grid row for "${p}".`);
  return r;
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: depuis TAKES THE PRESENT, AND ENGLISH DOES NOT
 * ═══════════════════════════════════════════════════════════════════════ */

export const DEPUIS_CLAIM =
  'English says I have lived here. French says I live here, and adds depuis to say since when. The verb never moves.';

/** The error, written as an English sentence and its two French renderings, so
 *  the learner sees the translation route fail rather than being told it does.
 *  These are DISPLAY STRINGS and never corpus rows: a row holding one of them
 *  would be served by the flashcard hub as French. */
export const DEPUIS_WRONG: readonly { wrong: string; right: string; why: string }[] = [
  {
    wrong: "J'ai habité ici depuis trois ans.",
    right: "J'habite ici depuis trois ans.",
    why: 'The past tense says you have stopped. With depuis in the sentence that is a contradiction, and a listener hears you say you moved out three years ago.',
  },
  {
    wrong: 'Elle a travaillé ici depuis mars.',
    right: 'Elle travaille ici depuis mars.',
    why: 'Same again with a starting point instead of a length. Depuis mars means she started in March and is still here, so the verb has to still be here too.',
  },
  {
    wrong: 'Il a plu depuis ce matin.',
    right: 'Il pleut depuis ce matin.',
    why: 'The rain has not stopped. That is the whole reason you reached for depuis, and the past tense throws it away.',
  },
];

/* ── THE SHAPE, AND THE WORD THAT BROKE THE FIRST VERSION OF IT ─────────────
 *
 * a2.04's CHEZ_PLACE_SHAPE was three strings until a mutation put a fourth
 * wrong form past it, so this one is a shape from the start: an auxiliary and a
 * past participle in a sentence that also holds `depuis`.
 *
 * THE FIRST VERSION MATCHED A PARTICIPLE BY ITS ENDING — `é`, `i`, `u`, `is`,
 * `it` — AND IT FIRED ON THIS LESSON'S OWN CENTRAL SENTENCE:
 *
 *     « Je suis ici depuis six mois. »        suis + ici
 *
 * `ici` ends in `i`, so `ic` plus `i` reads as a participle. So do `aussi`,
 * `ainsi`, `merci`, `midi`, `lundi`, `parmi` and `demi`, and `être` plus any of
 * them is an ordinary French sentence. a2.17 §7 and a2.14 §6 both say the same
 * thing and this is a third instance: GUARD THE THING, NOT THE LETTERS.
 *
 * The `-é` family is kept as a shape, because a French word ending in a bare
 * accented e after two letters is a participle or an adjective made from one.
 * Everything else is an explicit list of the irregular participles a learner at
 * this level has met or will meet, which is the only way to tell `plu` from
 * `plus` and `vu` from `vue`.                                                */

/** The irregular participles, by name. The -ER family is covered by the `é`
 *  shape and is deliberately not listed. */
const PARTICIPLE = '(?:fini|finis|finie|finies|choisi|choisis|dormi|parti|partis|partie|parties|sorti|sortis|servi|senti|v[ée]cu|plu|attendu|vendu|entendu|r[ée]pondu|perdu|rendu|descendu|re[çc]u|aper[çc]u|voulu|pu|d[ûu]|su|connu|lu|relu|vu|revu|venu|revenu|devenu|tenu|couru|bu|cru|eu|[ée]t[ée]|mis|remis|promis|assis|pris|appris|compris|surpris|dit|redit|[ée]crit|d[ée]crit|conduit|produit|construit|fait|refait|ouvert|offert|couvert|d[ée]couvert|souffert|mort|morts|morte)';

/** Two letters or more, ending in a bare accented e. */
const ER_PARTICIPLE = '[\\p{L}]{2,}(?:é|és|ée|ées)';

const AUX = '(?:j[\'’]ai|ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont)';
const ADV = '(?:pas\\s+|jamais\\s+|plus\\s+|bien\\s+|déjà\\s+|toujours\\s+|beaucoup\\s+)?';

export const DEPUIS_PAST_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])${AUX}\\s+${ADV}(?:${ER_PARTICIPLE}|${PARTICIPLE})(?![\\p{L}\\p{N}'’-])[^.!?]*(?<![\\p{L}\\p{N}-])depuis(?![\\p{L}\\p{N}'’-])`
  + `|(?<![\\p{L}\\p{N}-])depuis(?![\\p{L}\\p{N}'’-])[^.!?]*(?<![\\p{L}\\p{N}-])${AUX}\\s+${ADV}(?:${ER_PARTICIPLE}|${PARTICIPLE})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const DEPUIS_PAST_MUST_FIRE: readonly string[] = [
  "J'ai habité ici depuis trois ans.",
  'Elle a travaillé ici depuis mars.',
  'Il a plu depuis ce matin.',
  'Depuis mars, elle a travaillé ici.',
  "J'ai été ici depuis six mois.",
  'Nous avons attendu depuis vingt minutes.',
];

/** a2.17 §4 and a2.14 §6: half of a learner surface is English by design and a
 *  shape built out of French morphology reads the English as French. These are
 *  the lines that broke the first version of the shape above and they must stay
 *  green. The last three are this lesson's own copy, word for word. */
export const DEPUIS_PAST_MUST_NOT_FIRE: readonly string[] = [
  "J'habite ici depuis trois ans.",
  'Elle travaille ici depuis mars.',
  'Il pleut depuis ce matin.',
  // THE LINE THAT BROKE THE FIRST VERSION, and it is this lesson's own answer
  // to its own scene. `ici` ends in an i and an ending-based shape reads it as
  // a participle behind `suis`.
  'Je suis ici depuis six mois.',
  'Tu es ici depuis longtemps ?',
  'Je suis québécois, mais je vis à Paris depuis un an.',
  'On travaille ici depuis mars.',
  'She has lived here for three years and she is still here.',
  'You have a past tense coming, and it is not here yet.',
  'If it is still happening, French keeps it in the present.',
  'depuis une heure',
  'Nous avons attendu pendant une heure.',
  'English says I have lived here. French says I live here, and adds depuis to say since when.',
];

/** Measured 2026-08-14 across every published row. The margin is the evidence
 *  and it is asserted rather than described, because a sentence in a report
 *  cannot fail. */
export const DEPUIS_EVIDENCE = {
  depuisSentences: 560,
  depuisWithACompound: 31,
  pendantSentences: 447,
  pendantWithACompound: 97,
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP: il y a HAS TWO JOBS
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.02's term, quoted verbatim and credited by unit id. Doctrine §B.7: from
 *  seq 14 onward, name the earlier instance, and the recognition is worth more
 *  than the trapDrill. */
export const PATTERN_CLAIM =
  `You have had this shape before. ${WHAT_FOLLOWS_UNIT} called it ${WHAT_FOLLOWS}, on venir de, and it is the same job here.`;

/** What the lesson teaches, as one line, and it is sharper than the brief's
 *  because of the published counterexample in header claim 3. */
export const AGO_RULE =
  'A measurement and then a full stop means ago. A time word still being described is a thing.';

export const IL_Y_A_PAIRS: readonly { existence: string; ago: string; why: string }[] = [
  {
    existence: 'Il y a un problème.',
    ago: 'Il y a deux jours.',
    why: 'A thing on the left, a measurement on the right. Nothing about the three words changes and nothing about them ever will.',
  },
  {
    existence: 'Il y a une heure de retard.',
    ago: 'Il y a une heure.',
    why: 'The same four words on both sides, and the fifth decides. An hour OF something is a thing; an hour and then nothing is a distance back.',
  },
];

/** Measured 2026-08-14 across every published row holding the three words, and
 *  RE-MEASURED by `_a218_manifest.ts` on every regeneration. The batch, the
 *  merge and the test all compare these against `MEASURED` in the generated
 *  file, so a figure that drifts fails a build rather than a card printing a
 *  number nobody checked.
 *
 *  `agoDurationEndsTheSentence` is a subset of `ago`: the other nine put a
 *  comma and a clause after the duration (« Il y a trois ans, j'habitais à
 *  Paris. »), which is still ago. The rule the lesson teaches is about the
 *  measurement being FINISHED, not about the sentence being finished, and the
 *  counterexample below is the row that forced that distinction. */
export const IL_Y_A_EVIDENCE = {
  totalRows: 217,
  existence: 130,
  ago: 33,
  agoDurationEndsTheSentence: 24,
  theCounterexample: 'fr.a1.jours-et-mois.090',
  counterexampleFr: 'En mai, il y a plusieurs jours fériés en France.',
} as const;

/** What the corpus puts after `il y a`, in order, from the enumeration. The
 *  articles are existence and the numbers are ambiguous until the next word. */
export const IL_Y_A_FOLLOWERS: readonly (readonly [string, number])[] = [
  ['un', 41], ['une', 26], ['beaucoup', 22], ['du', 12], ['trop', 10],
  ['des', 8], ['deux', 8], ['trois', 6], ['longtemps', 6], ['dix', 6],
];

/* ══════════════════════════════════════════════════════════════════════════
 *  pendant AGAINST depuis, AND en AGAINST dans
 * ═══════════════════════════════════════════════════════════════════════ */

export const PAIR_CLAIM =
  'Both of these come out as "for" in English and they are not interchangeable in French. Pendant closes the stretch. Depuis leaves it open.';

export const EN_DANS_CLAIM =
  'Dans says when it starts. En says how long it took. One of them is a point and the other is a length, and English uses "in" for both.';

export type Contrast = { left: string; right: string; leftEn: string; rightEn: string; why: string };

export const PENDANT_DEPUIS: readonly Contrast[] = [
  {
    left: 'depuis une heure', right: 'pendant une heure',
    leftEn: 'for an hour, and still going', rightEn: 'for an hour, and it stopped',
    why: 'Two published cards, consecutive ids, one duration. The English is the same four words twice and the French is not.',
  },
  {
    left: "J'habite ici depuis six mois.", right: 'Je lis pendant une heure chaque soir.',
    leftEn: 'I have lived here for six months.', rightEn: 'I read for an hour every evening.',
    why: 'The first is one stretch that has not ended. The second is a stretch with both ends on it, and it happens again tomorrow.',
  },
];

export const EN_DANS: readonly Contrast[] = [
  {
    left: 'dans une heure', right: 'en une heure',
    leftEn: 'in an hour, starting then', rightEn: 'in an hour, that is how long it takes',
    why: 'Four letters between them and they answer different questions. The left one is a time on the clock and the right one is a length on a stopwatch.',
  },
  {
    left: 'Je pars dans dix minutes.', right: 'Je finis en dix minutes.',
    leftEn: 'I am leaving in ten minutes.', rightEn: 'I finish in ten minutes.',
    why: 'The left one is a departure that has not happened. The right one is a job that takes ten minutes from the moment you start it.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  pour: THE SIXTH WORD, NAMED ONCE AND TAUGHT NOWHERE
 * ═══════════════════════════════════════════════════════════════════════ */

/** DECIDED. See header claim 9 for the measurement.
 *
 *  `pour` plus a duration exists in ELEVEN published rows against depuis 560,
 *  pendant 447 and dans 96, and every one of the eleven attaches it to a plan
 *  rather than to an action: a visa valid for six months, a flat rented for two
 *  years, a contract for three months. So it does not compete with `pendant` in
 *  the shape a learner produces, the sub does not name it and the canDo does not
 *  cover it.
 *
 *  It appears ONCE, in a `teach` block under the sheet's grid, and the guard
 *  asserts exactly one occurrence of the shape across every learner surface. It
 *  is in no card, no drill, no tranche and no quiz question. */
export const POUR_DECISION = {
  included: false,
  namedOnce: true,
  publishedRows: 11,
  where: 'the reference sheet, in a teach block under the grid',
} as const;

export const POUR_LINE =
  'You will also meet pour with a length behind it, as in « valide pour six mois ». That one belongs to a plan rather than to something you did, and it is not one of the five.';

/** The shape the guard counts. A duration word behind `pour` is the temporal
 *  sense whatever the noun is; `pour` on its own is an everyday word and this
 *  lesson uses it freely. */
export const POUR_TIME_SHAPE =
  /(?<![\p{L}\p{N}-])pour\s+(?:un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|quelques|plusieurs)\s+(?:seconde|minute|heure|jour|semaine|mois|an|année)/giu;

export const POUR_MUST_FIRE: readonly string[] = [
  'valide pour six mois',
  'Nous avons loué ce logement pour deux ans.',
  'Je pars pour deux semaines.',
];

export const POUR_MUST_NOT_FIRE: readonly string[] = [
  'Nous avons roulé pendant six heures pour arriver à la mer.',
  'pour toi',
  'Il travaille pour une entreprise française.',
  'This is the word for a plan and not for an action.',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS LESSON MAY NOT SAY
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE PASSÉ COMPOSÉ IS a2.05, TWO LESSONS AWAY, AND `il y a` NEEDS IT.
 *
 *  Named on a learner surface so the learner knows it is coming rather than
 *  thinking it was forgotten, which is the shape a2.04 used for its own
 *  deferral and a2.17 used for the adverb one. */
export const PAST_DEFERRAL =
  `Il y a for "ago" wants a past tense, and you do not have one yet. It arrives in ${PAST_UNIT}, and this is the phrase it will arrive holding.`;

/** The one receptive example. It is SHOWN and never asked for, and the guards
 *  assert it appears on exactly one screen and in no drill, no dictée and no
 *  quiz question. */
export const PAST_EXAMPLE_FR = "J'ai commencé il y a trois jours.";
export const PAST_EXAMPLE_EN = 'I started three days ago.';

/** No verb form this lesson asks a learner to PRODUCE may be a compound tense.
 *  a2.17 §7 and a2.14 §6: guard the THING rather than the letters, so this
 *  requires a French subject or the elided `j'` AND a participle, not merely a
 *  word that ends in a vowel. */
export const COMPOUND_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:j['’]ai|tu\\s+as|il\\s+a|elle\\s+a|on\\s+a|nous\\s+avons|vous\\s+avez|ils\\s+ont|elles\\s+ont`
  + `|je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+êtes|ils\\s+sont|elles\\s+sont)`
  + `\\s+${ADV}(?:${ER_PARTICIPLE}|${PARTICIPLE})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const COMPOUND_MUST_FIRE: readonly string[] = [
  "J'ai commencé il y a trois jours.",
  'Nous avons déménagé il y a six mois.',
  'Elle a travaillé ici depuis mars.',
  'Je suis arrivé il y a une heure.',
  "J'ai été ici depuis six mois.",
  'Nous avons attendu pendant une heure.',
];

/** a2.17 §7's own broken sentence is the first entry, kept because the next
 *  author will write the same shape. */
export const COMPOUND_MUST_NOT_FIRE: readonly string[] = [
  'You did not stall on a word you had not learned.',
  'She has lived here for three years and she is still here.',
  "J'habite ici depuis trois ans.",
  'Il pleut depuis ce matin.',
  'On travaille ici depuis deux ans.',
  'A past tense is coming, and it is not this lesson.',
  'Je pars dans dix minutes.',
  // The same `ici` false positive, on the other shape.
  'Je suis ici depuis six mois.',
  'Tu es ici depuis longtemps ?',
  'Elle est ici aussi.',
  'Il est midi.',
];

/** THE FUTUR PROCHE IS a2.19, ONE LESSON AFTER THIS ONE, AND `dans` PAIRS WITH
 *  IT. This lesson uses the present with future meaning and names the handover.
 *  Guarded as a SHAPE: `aller` conjugated plus an infinitive. */
export const FUTURE_DEFERRAL =
  `French says « je pars dans dix minutes » with a present tense, and that is correct as it stands. The other way of saying it is ${FUTURE_UNIT}, which is next.`;

export const FUTUR_PROCHE_SHAPE =
  /(?<![\p{L}\p{N}-])(?:vais|vas|va|allons|allez|vont)\s+(?:pas\s+|bientôt\s+)?[\p{L}]{3,}(?:er|ir|re|oir)(?![\p{L}\p{N}'’-])/iu;

export const FUTUR_PROCHE_MUST_FIRE: readonly string[] = [
  'Je vais partir dans dix minutes.',
  'On va manger dans une heure.',
  'Ils vont finir en deux heures.',
];

export const FUTUR_PROCHE_MUST_NOT_FIRE: readonly string[] = [
  'Je vais à Paris.',
  'Je pars dans dix minutes.',
  'On va bien.',
  'The near future is the next lesson and it is not this one.',
  'Elle va chez le médecin.',
];

/** a2.04 owns the place senses of `en` and `dans` and this lesson touches
 *  neither. Its own TIME_SHAPE guard is the mirror of this one, and where a2.04
 *  refused a number behind the word, this refuses a PLACE behind it.
 *
 *  Scoped to PRODUCTION surfaces by the test rather than to every string,
 *  because a roundup that says "dans a place was a2.04's" has to be able to say
 *  it, and because the one imported sentence this lesson takes for the trap
 *  holds « dans mon nom » and is imported for the other half of its meaning. */
/** FOUND BY THE FIRST RUN OF `_a218_check.ts`, AND IT IS a2.17 §4 IN A THIRD
 *  PLACE. The first version was an article list with no exclusion and it fired
 *  on « dans une heure » and « en une heure », which are two of this lesson's
 *  five cards: `une` is an article and `heure` is a word of three letters, so a
 *  shape built out of French morphology alone cannot tell a place from a time.
 *
 *  The fix is a2.14 §6: guard the THING. A place behind `en` or `dans` means
 *  the noun is a place, so every unit of time is excluded by name. */
const TIME_NOUN = 'secondes?|minutes?|heures?|jours?|semaines?|mois|ans?|années?|matins?|soirs?|soirées?|nuits?|journées?|temps|instants?|moments?';

export const PLACE_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:en|dans)\\s+(?:le|la|les|l['’]|un|une|mon|ma|mes|ton|ta|son|sa|ce|cette)\\s*(?!(?:${TIME_NOUN})(?![\\p{L}]))[\\p{L}]{3,}`
  + `|(?<![\\p{L}\\p{N}-])en\\s+(?:France|Espagne|Italie|Belgique|Allemagne|Suisse|ville|classe|voiture)(?![\\p{L}])`,
  'iu',
);

export const PLACE_MUST_FIRE: readonly string[] = [
  'Je vais en France.',
  'Le livre est dans le sac.',
  'Il y a une table dans le salon.',
  'Elle habite dans cette maison.',
  'Il y a deux s dans mon nom.',
];

export const PLACE_MUST_NOT_FIRE: readonly string[] = [
  'depuis une heure',
  'Je pars dans dix minutes.',
  'Je finis en deux heures.',
  'dans une heure',
  'en une heure',
  'Le film commence dans une heure.',
  'On mange dans une heure ?',
  'Il pleut pendant la nuit.',
  'It rains during the night and the streets are wet.',
  'A place behind dans is a2.04, which you did yesterday.',
];

/** Vocabulary that belongs to the clock and the calendar lessons. This lesson
 *  USES times and durations and teaches nobody how to say them, so none of
 *  these may be taught, drilled or defined here. */
export const CLOCK_FORBIDDEN: readonly string[] = [
  'et quart', 'et demie', 'moins le quart', 'midi', 'minuit',
  'Quelle heure est-il', "Vous avez l'heure",
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLING DECISIONS, MEASURED
 * ═══════════════════════════════════════════════════════════════════════ */

/** The nasal of `pendant`, `dans` and `en`, closed with the superscript.
 *  Measured: 458 published rows use `AHⁿ` and 1615 use `AHN`, and invariants §3
 *  requires the superscript. a2.17 §1 repaired only the rows it displayed and
 *  left the other 489; this build does the same. */
export const AHN = 'AHⁿ';

/** /ɛ̃/, the vowel of `matin` and `quand`... no: the vowel of `matin`. Read off
 *  fr.sons.nasales.118, which publishes `ma-TEHⁿ`, and consistent with a2.04's
 *  EN_IN decision for `médecin` one lesson ago. */
export const IN_VOWEL = 'EHⁿ';

/** THE GLIDE IN `depuis`, AND THE ONE DECISION IN THIS BUILD THAT COST REAL
 *  CONTENT.
 *
 *  /ɥ/ is invariants §9 known debt: it is respelled three ways in shipped
 *  content and the instruction is not to add a fourth. `depuis` carries two of
 *  the three:
 *
 *      duh-PWEE    5 published rows, INCLUDING THE HEADWORD
 *                  fr.sons.mots-essentiels.027, fr.sons.voyelles.208,
 *                  fr.sons.jours-et-mois.082, fr.sons.questions.040 · .144
 *      duh-PÜEE    9 published rows, all of them SENTENCES, all in
 *                  fr.sons.nasales, fr.sons.voyelles and fr.sons.liaisons
 *
 *  Neither is flagged and neither breaks a stated rule, so invariants §9 says
 *  repair nothing. But this lesson prints `depuis` on more screens than any
 *  other word, and two spellings of one word inside one lesson teach a
 *  difference that is not there.
 *
 *  DECIDED: one spelling per word across this lesson's learner surfaces, and it
 *  is the HEADWORD's, because the headword is imported and its card is the one
 *  the flashcard hub serves. **This cost nine published sentences**, several of
 *  them excellent depuis-plus-present evidence with respellings already on them
 *  — fr.sons.nasales.037 « Ma tante attend le tramway depuis longtemps. » is the
 *  best of them — and they are in READ_NOT_IMPORTED with this as the reason.
 *  Nothing is repaired: those rows are correct and they are somebody else's. */
export const DEPUIS_RESPELL = 'duh-PWEE';
export const DEPUIS_VARIANT = 'duh-PÜEE';
export const DEPUIS_VARIANT_ROWS = 9;

/** THE THREE WORDS OF `il y a`, AND THE SECOND VARIANT THIS BUILD HAD TO CHOOSE
 *  BETWEEN.
 *
 *      EEL EE AH   fr.sons.jours-et-mois.081, « il y a une heure »
 *      EEL EE A    fr.sons.alphabet.414 « Il y a deux s dans mon nom. »
 *                  and fr.sons.questions.049 « il y a quoi ? »
 *
 *  Same three words, same lesson if both were taken, and this lesson's whole
 *  trap is that those three words have two jobs. Two respellings two missions
 *  apart would read as marking the two jobs, which is a difference in meaning
 *  claimed by a difference in sound that does not exist.
 *
 *  DECIDED: `EEL EE AH`, read off the row that is already the "ago" sense, and
 *  fr.sons.alphabet.414 is READ AND NOT IMPORTED for that reason alone. It is
 *  otherwise the best "there is" card in the corpus. Nothing is repaired: `A`
 *  for /a/ is house-legal and appears on fr.sons.accents.033. */
export const IL_Y_A_RESPELL = 'EEL EE AH';
export const IL_Y_A_RESPELL_LOWER = 'eel ee ah';
export const IL_Y_A_VARIANT = 'EEL EE A';

/** ONE SPELLING PER LESSON, AND THE GUARD THAT ENFORCES IT.
 *
 *  FOUND BY MUTATION. Changing `IL_Y_A_RESPELL_LOWER` to the other published
 *  value went through the merge and the test untouched: both check that every
 *  respelling is CLEAN and neither checks that two respellings of one phrase
 *  AGREE, and a variant is not a violation (invariants §9), so the shared
 *  checker will never object.
 *
 *  It matters here more than anywhere: this lesson's whole trap is that three
 *  words have two jobs, so two spellings of those three words inside it would
 *  read as marking the two jobs — a difference in meaning claimed by a
 *  difference in sound that does not exist.
 *
 *  Every learner-visible respelling of a row whose French holds `il y a` must
 *  CARRY this value, compared case-insensitively because case marks stress and
 *  `EEL EE AH` and `eel ee ah` are the same spelling. CONTAINS rather than
 *  STARTS WITH, because the phrase is mid-sentence on two of the rows:
 *  « J'ai commencé il y a trois jours. » respells the verb first. */
export const IL_Y_A_ROW_FR = /(?<![\p{L}\p{N}-])il y a(?![\p{L}\p{N}'’-])/iu;
export const ilYaRespellOk = (respell: string): boolean =>
  respell.toUpperCase().includes(IL_Y_A_RESPELL.toUpperCase());

export const RESPELL_CONVENTION =
  `Depuis is ${DEPUIS_RESPELL} and il y a is ${IL_Y_A_RESPELL} on every screen in this lesson. Both were read off published rows, and both had a second published spelling that was left alone.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUTHORED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Role = 'grid' | 'owns' | 'pair' | 'point' | 'trap' | 'scene' | 'talk';

export type TempsRow = Omit<Item, 'drills'> & {
  drills: string[];
  role: Role;
  /** Which preposition this row is evidence for, so a section names a WORD
   *  rather than restating a list of ids. Named `prep` and not `kind`, because
   *  `Item` already has a `kind` and an intersection with two different `kind`s
   *  reduces to `never` — a2.04 lost a build hour to exactly that. */
  prep?: Prep;
};

const P = (n: number) => `fr.a2.prepositions-essentielles.${String(n).padStart(3, '0')}`;

const PH = (
  n: number, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], notes: string, prep?: Prep,
): TempsRow => ({
  id: P(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags: ['prepositions', 'temps'], drills, version: 1, role, ...(prep ? { prep } : {}),
}) as TempsRow;

const S = (
  n: number, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], tags: string[], notes: string, prep?: Prep,
): TempsRow => ({
  id: P(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags, drills, version: 1, role, ...(prep ? { prep } : {}),
}) as TempsRow;

/** Corrections §4: a row carries `dictation` only where `dicteeMode()` puts it
 *  in LETTERS mode, and the batch runs the REAL function over every row that
 *  carries the drill AND over every row that does not.
 *
 *  IN THIS LESSON THAT RULES OUT EVERY SENTENCE. A duration alone costs twelve
 *  to fifteen letters — « depuis trois ans » is fourteen, « dans dix minutes »
 *  fourteen — and the shortest complete sentence this lesson can build round one
 *  is « Il pleut depuis hier. » at seventeen. So the dictée is PHRASES, plus the
 *  two trap sentences, which are the only sentences in the lesson short enough
 *  because their duration is two words rather than three. */
const D = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const NO_D = ['sentence', 'flashcard', 'voiceflash', 'review'];
const PD = ['flashcard', 'voiceflash', 'review', 'dictation'];
const PN = ['flashcard', 'voiceflash', 'review'];

/** THE AUTHORED ROWS.
 *
 *  NOT ONE HEADWORD AMONG THEM, and not one gendered single word, so nothing
 *  here can join a1.03's measured ending population by either route — neither
 *  by authoring (invariants §5) nor by the CARRY that a2.04 discovered
 *  (ledger, a2.04 §0). The batch and the merge both prove it, against Postgres
 *  and against the seed. */
export const PREPOSITIONS_TEMPS: TempsRow[] = [
  /* ── The fifth of the quadruple ───────────────────────────────────────────
   *
   * fr.sons.jours-et-mois.080 to .083 publish « dans / il y a / depuis /
   * pendant une heure » as four consecutive cards. This is the row nobody ever
   * wrote, and it is the one whose meaning is not "when" but "how long it
   * took". Respelled on the pattern of the four it joins: the liaison carries
   * the nasal across, exactly as `DAHⁿ ZÜN UHR` does. */
  PH(169, 'en une heure', 'in an hour, that is how long it takes', `${AHN} NÜN UHR`, '/ɑ̃n yn œʁ/', 'grid', PD, 'The fifth card of a set the corpus published four fifths of. Twelve letters, so the dictée can take it.', 'en'),

  /* ── The five in one frame ────────────────────────────────────────────────
   *
   * One subject, one register, five prepositions, and four of the five in the
   * present tense because that is what the learner has at seq 14. The fifth is
   * the receptive one and it is marked as such on its own card. */
  S(170, "J'habite ici depuis trois ans.", 'I have lived here for three years.', `zha-BEET ee-SEE ${DEPUIS_RESPELL} trwah-Z${AHN}`, '/ʒa.bit i.si də.pɥi tʁwa.zɑ̃/', 'grid', NO_D, ['prepositions', 'temps', 'depuis'], 'The sentence the whole lesson exists to produce. The English is a perfect and the French is a present, and nothing in the French moves.', 'depuis'),
  S(171, 'Je lis pendant une heure.', 'I read for an hour.', `zhuh LEE pahⁿ-D${AHN} tün UHR`, '/ʒə li pɑ̃.dɑ̃ tyn œʁ/', 'grid', NO_D, ['prepositions', 'temps', 'pendant'], 'A stretch with both ends on it, in the present, because it happens every evening. Twenty letters, so the dictée takes the phrase instead.', 'pendant'),
  S(172, 'Je pars dans dix minutes.', 'I am leaving in ten minutes.', `zhuh PAR d${AHN} dee mee-NÜT`, '/ʒə paʁ dɑ̃ di mi.nyt/', 'grid', NO_D, ['prepositions', 'temps', 'dans'], 'A present tense about something that has not happened, which is correct French and not a shortcut. The other way to say it is the next lesson.', 'dans'),
  S(173, 'Je finis en deux heures.', 'I finish in two hours.', `zhuh fee-NEE ${AHN} duh ZUHR`, '/ʒə fi.ni ɑ̃ dø zœʁ/', 'grid', NO_D, ['prepositions', 'temps', 'en'], 'How long the job takes, start to finish. Nineteen letters. Reuses a2.10\'s frame verb on purpose: « Il finit tôt » is that lesson\'s dictée and this is the same verb with a length on it.', 'en'),
  S(174, PAST_EXAMPLE_FR, PAST_EXAMPLE_EN, `zhay ko-mahⁿ-SAY eel ee ah trwah ZHOOR`, '/ʒe kɔ.mɑ̃.se il i a tʁwa ʒuʁ/', 'grid', PN, ['prepositions', 'temps', 'il-y-a', 'receptive'], 'THE ONE RECEPTIVE ROW. It holds a passé composé, which is a2.05 and two lessons away, and it is shown once and asked for nowhere: no dictée, no drill, no quiz question.', 'il y a'),

  /* ── The Owns: depuis takes the present ──────────────────────────────────
   *
   * Six rows, all present tense, all with a different subject, so the rule is
   * about the construction rather than about one person. Corrections §3 says
   * the corpus has no minimal pairs and for THIS half of the lesson it is
   * right: 560 published depuis sentences and every one of them carries its own
   * verb, its own subject and its own theme. */
  S(175, 'Elle habite ici depuis six mois.', 'She has lived here for six months.', `ehl a-BEET ee-SEE ${DEPUIS_RESPELL} see MWAH`, '/ɛl a.bit i.si də.pɥi si mwa/', 'owns', NO_D, ['prepositions', 'temps', 'depuis'], 'The same shape with somebody else in it. Six months is a length rather than a starting point, and depuis takes either.', 'depuis'),
  S(176, 'On travaille ici depuis mars.', 'We have been working here since March.', `ohⁿ tra-VAY ee-SEE ${DEPUIS_RESPELL} MARS`, '/ɔ̃ tʁa.vaj i.si də.pɥi maʁs/', 'owns', NO_D, ['prepositions', 'temps', 'depuis'], 'And a starting point instead of a length, which is the other half of what depuis does. On rather than nous, which is a2.01\'s rule for the whole level.', 'depuis'),
  S(177, 'Il pleut depuis ce matin.', 'It has been raining since this morning.', `eel PLEU ${DEPUIS_RESPELL} suh ma-T${IN_VOWEL}`, '/il plø də.pɥi sə ma.tɛ̃/', 'owns', NO_D, ['prepositions', 'temps', 'depuis'], 'No person in it at all, so the rule cannot be about who is speaking. The rain has not stopped, so the verb has not either.', 'depuis'),
  S(178, 'Depuis quand es-tu ici ?', 'How long have you been here?', `${DEPUIS_RESPELL} K${AHN} eh-TÜ ee-SEE`, '/də.pɥi kɑ̃ ɛ.ty i.si/', 'owns', NO_D, ['prepositions', 'temps', 'depuis'], 'The question that gets asked, and the reason the scene stalls. Depuis quand is two words and the answer needs a present tense.', 'depuis'),
  S(179, 'Je suis ici depuis six mois.', 'I have been here for six months.', `zhuh SWEE ee-SEE ${DEPUIS_RESPELL} see MWAH`, '/ʒə sɥi i.si də.pɥi si mwa/', 'owns', NO_D, ['prepositions', 'temps', 'depuis'], 'The answer to the question above, and the sentence the scene never reached. Être in the present, which is a1.06\'s and the first verb the learner ever had.', 'depuis'),
  PH(180, 'depuis trois ans', 'for three years', `${DEPUIS_RESPELL} trwah-Z${AHN}`, '/də.pɥi tʁwa.zɑ̃/', 'owns', PD, 'Fourteen letters, so the dictée can take it. The liaison carries the s of trois onto ans and the nasal survives it.', 'depuis'),

  /* ── pendant against depuis ──────────────────────────────────────────────
   *
   * The two published cards « depuis une heure » and « pendant une heure » are
   * imported and do the contrast on their own. These are the sentences round
   * them, and the one that says why English is no help. */
  S(181, 'Il pleut pendant deux heures.', 'It rains for two hours.', `eel PLEU pahⁿ-D${AHN} duh ZUHR`, '/il plø pɑ̃.dɑ̃ dø zœʁ/', 'pair', NO_D, ['prepositions', 'temps', 'pendant'], 'The same weather as row 177 and the other word, so the pair differs by one thing. Here the rain stops.', 'pendant'),
  PH(182, 'pendant deux heures', 'for two hours', `pahⁿ-D${AHN} duh ZUHR`, '/pɑ̃.dɑ̃ dø zœʁ/', 'pair', PN, 'SEVENTEEN LETTERS, so `dicteeMode` puts it in WORD mode and it carries NO dictation drill. Its partner « depuis deux heures » is sixteen and does. One letter decides which half of the pair the dictée can test, which is corrections §4 costing this lesson a card.', 'pendant'),
  PH(183, 'depuis deux heures', 'for two hours, and still going', `${DEPUIS_RESPELL} duh ZUHR`, '/də.pɥi dø zœʁ/', 'pair', PD, 'Sixteen letters, at the limit. The same two hours as the row above and the other end left open.', 'depuis'),

  /* ── The two points, and the length ──────────────────────────────────────*/
  PH(184, 'dans dix minutes', 'in ten minutes', `d${AHN} dee mee-NÜT`, '/dɑ̃ di mi.nyt/', 'point', PD, 'Fourteen letters. A point ahead, and the present tense goes in front of it.', 'dans'),
  PH(185, 'en deux heures', 'in two hours, that is how long it took', `${AHN} duh ZUHR`, '/ɑ̃ dø zœʁ/', 'point', PD, 'Twelve letters, and the shortest thing in the lesson. Same two hours as pendant and depuis, and a third answer.', 'en'),
  PH(186, 'il y a trois jours', 'three days ago', `${IL_Y_A_RESPELL} trwah ZHOOR`, '/il i a tʁwa ʒuʁ/', 'point', PN, 'Fourteen letters and NO DICTATION DRILL, because the dictée is a production surface and this phrase needs a tense the learner does not have.', 'il y a'),
  S(187, 'Le film commence dans une heure.', 'The film starts in an hour.', `luh FEELM ko-M${AHN}S d${AHN} zün UHR`, '/lə film kɔ.mɑ̃s dɑ̃.zyn œʁ/', 'point', NO_D, ['prepositions', 'temps', 'dans'], 'Something on a timetable, which is where dans lives. The present tense is doing future work and nobody has to be told.', 'dans'),

  /* ── The trap: il y a has two jobs ───────────────────────────────────────
   *
   * Both of these are in LETTERS mode, which nothing else in the lesson with a
   * verb in it manages, and they are the only two sentences the dictée can
   * take. Their durations are two words rather than three, which is the whole
   * reason. The pair differs by ONE word and that word is the rule. */
  S(188, 'Il y a un problème.', 'There is a problem.', `${IL_Y_A_RESPELL_LOWER} uhⁿ proh-BLEM`, '/il i a œ̃ pʁɔ.blɛm/', 'trap', D, ['prepositions', 'temps', 'il-y-a'], 'Fourteen letters. A thing behind it, so the three words mean there is. `proh-BLEM` and not `proh-BLEHM`: see PROBLEME_FALSE_POSITIVE.', 'il y a'),
  S(189, 'Il y a deux jours.', 'Two days ago.', `${IL_Y_A_RESPELL_LOWER} duh ZHOOR`, '/il i a dø ʒuʁ/', 'trap', D, ['prepositions', 'temps', 'il-y-a'], 'Thirteen letters. A measurement behind it and nothing after that, so the same three words mean ago. No verb in it at all, which is why it can be here.', 'il y a'),
  S(190, 'Il y a une heure de retard.', 'There is an hour of delay.', `${IL_Y_A_RESPELL_LOWER} ün UHR duh ruh-TAR`, '/il i a yn œʁ də ʁə.taʁ/', 'trap', NO_D, ['prepositions', 'temps', 'il-y-a'], 'The sharp one. Four words in common with « il y a une heure » and the fifth turns the hour back into a thing. This is why the rule is about the full stop and not about the noun.', 'il y a'),

  /* ── The scene ───────────────────────────────────────────────────────────
   *
   * Doctrine §B.2: somebody who started a sentence they could not finish. She
   * asks the commonest question anybody asks a foreigner, and he has the
   * number, has the noun, and cannot join them. */
  S(191, 'Tu es ici depuis longtemps ?', 'Have you been here long?', `tü eh ee-SEE ${DEPUIS_RESPELL} lohⁿ-T${AHN}`, '/ty ɛ i.si də.pɥi lɔ̃.tɑ̃/', 'scene', NO_D, ['prepositions', 'temps', 'depuis'], 'Her question, and every word in it is one the learner has had since a1. An earlier draft asked « Tu es en France depuis longtemps ? », which is the more natural line and which put a2.04\'s place sense of en into this lesson\'s scene; PLACE_SHAPE fired on it and the question was rewritten rather than the guard relaxed.', 'depuis'),
  S(192, 'Euh... six mois.', 'Uh... six months.', 'EU · see MWAH', '/ø si mwa/', 'scene', NO_D, ['prepositions', 'temps'], 'What he says. It is not wrong and it is not a sentence, and the pause in front of it is the whole cost of the lesson.'),
  // HER RECOVERY LINE, AND THIS ROW WAS SOMETHING ELSE UNTIL THE MERGE SAW IT.
  //
  // It held « Je suis ici depuis six mois. » — the answer he did not give — and
  // that is BYTE-IDENTICAL to row 179, deliberately, so that the scene would end
  // on the sentence the Owns act opens with. The merge's duplicate-fr check
  // refused it: `flashhub-coverage.test.ts` treats two rows sharing an `fr`
  // inside one theme as ONE CARD SERVED TWICE, and it does not care that the
  // repetition was the point. The scene now reads row 179 directly, which makes
  // the claim literal instead of duplicating it, and this id carries the line
  // that was hard-coded in the scene beats.
  S(193, 'Ah, tu es ici depuis six mois. Et avant ?', 'Ah, you have been here for six months. And before that?', `ah tü eh ee-SEE ${DEPUIS_RESPELL} see MWAH · ay a-V${AHN}`, '/a ty ɛ i.si də.pɥi si mwa e a.vɑ̃/', 'scene', NO_D, ['prepositions', 'temps', 'depuis'], 'She says his sentence back to him, correctly, without noticing she has done it, and moves on. Nobody corrected anything, so nothing was learned.', 'depuis'),

  /* ── The conversation, for the role play ─────────────────────────────────
   *
   * Four turns and every one of them needs a decision made before the verb
   * finishes: how long, still going or finished, and when it starts. */
  S(194, 'Tu travailles ici depuis quand ?', 'How long have you been working here?', `tü tra-VAY ee-SEE ${DEPUIS_RESPELL} K${AHN}`, '/ty tʁa.vaj i.si də.pɥi kɑ̃/', 'talk', NO_D, ['prepositions', 'temps', 'depuis'], 'Depuis quand at the end, which is where a French speaker actually puts it in conversation.', 'depuis'),
  S(195, 'Depuis deux ans. Et toi ?', 'For two years. And you?', `${DEPUIS_RESPELL} duh-Z${AHN} · ay TWAH`, '/də.pɥi dø.zɑ̃ e twa/', 'talk', NO_D, ['prepositions', 'temps', 'depuis'], 'The answer with no verb in it, which is what people say, and the question straight back.', 'depuis'),
  S(196, 'On mange dans une heure ?', 'Shall we eat in an hour?', `ohⁿ M${AHN}ZH d${AHN} zün UHR`, '/ɔ̃ mɑ̃ʒ dɑ̃.zyn œʁ/', 'talk', NO_D, ['prepositions', 'temps', 'dans'], 'A point ahead, in the present, and the third of the five in three turns.', 'dans'),
  S(197, 'Oui, je finis en dix minutes.', 'Yes, I finish in ten minutes.', `wee zhuh fee-NEE ${AHN} dee mee-NÜT`, '/wi ʒə fi.ni ɑ̃ di mi.nyt/', 'talk', NO_D, ['prepositions', 'temps', 'en'], 'And the fourth, in the answer, where the two are one word apart and mean different things. Dans is when she starts eating; en is how long his job takes.', 'en'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED SETS
 * ═══════════════════════════════════════════════════════════════════════ */

export const GRID_ROWS = PREPOSITIONS_TEMPS.filter((r) => r.role === 'grid');
export const OWNS_ROWS = PREPOSITIONS_TEMPS.filter((r) => r.role === 'owns');
export const PAIR_ROWS = PREPOSITIONS_TEMPS.filter((r) => r.role === 'pair');
export const POINT_ROWS = PREPOSITIONS_TEMPS.filter((r) => r.role === 'point');
export const TRAP_ROWS = PREPOSITIONS_TEMPS.filter((r) => r.role === 'trap');
export const SCENE_ROWS = PREPOSITIONS_TEMPS.filter((r) => r.role === 'scene');
export const TALK_ROWS = PREPOSITIONS_TEMPS.filter((r) => r.role === 'talk');

export const AUTHORED_IDS: string[] = PREPOSITIONS_TEMPS.map((r) => r.id);

/** One authored row by its French, for a card that names it rather than indexes
 *  it. Throws: a card silently missing its row looks like a card that never
 *  wanted one. */
export function row(fr: string): TempsRow {
  const r = PREPOSITIONS_TEMPS.find((x) => x.fr === fr);
  if (!r) throw new Error(`a2.18: no authored row for "${fr}".`);
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
  use: 'preposition' | 'quadruple' | 'evidence' | 'question';
  why: string;
};

/** TWELVE ROWS, AND FOUR OF THEM ARE THE PARADIGM.
 *
 *  Corrections §2 predicted the vocabulary would exist and it does, for the
 *  eleventh build in a row: not one headword is authored. What corrections §3
 *  did NOT predict is that the paradigm would exist too. */
export const IMPORTED: readonly Import[] = [
  // The four headwords. Two need a repair.
  { id: 'fr.sons.mots-essentiels.027', fr: 'depuis', use: 'preposition', why: `The headword, [${DEPUIS_RESPELL}], clean, and the row that settles the glide spelling for the whole lesson. fr.sons.voyelles.208 is a second copy in a second theme and is deliberately not taken.` },
  { id: 'fr.sons.mots-essentiels.028', fr: 'pendant', use: 'preposition', why: 'FLAGGED at [pahn-DAHN], TWO nasals and the checker sees both. Repaired to [pahⁿ-DAHⁿ], which seven published sentences already hold.' },
  { id: 'fr.sons.mots-essentiels.013', fr: 'dans', use: 'preposition', why: 'The headword, [DAHⁿ], ALREADY CORRECT. a2.04 named this word as one of the five a1.21 gave the learner in its place sense; this lesson takes the time sense and the card is one card.' },
  { id: 'fr.sons.mots-essentiels.088', fr: 'en', use: 'preposition', why: 'FLAGGED at [AHN], one nasal, visible. Repaired to [AHⁿ]. Its stored gloss is « some, of it », which is the PRONOUN en and neither this lesson\'s sense nor a2.04\'s; the card replaces the gloss and the row keeps it.' },

  // THE QUADRUPLE. Four consecutive published phrase cards, one duration.
  { id: 'fr.sons.jours-et-mois.080', fr: 'dans une heure', use: 'quadruple', why: 'FLAGGED at [DAHN ZÜN UHR]. Repaired to [DAHⁿ ZÜN UHR], read off the headword. First of the four.' },
  { id: 'fr.sons.jours-et-mois.081', fr: 'il y a une heure', use: 'quadruple', why: `Clean at [${IL_Y_A_RESPELL} ÜN UHR], and the row that settles the il y a spelling for the lesson. Corrections §2 lists il y a as absent and a2.15 §13's rule holds: absent is not the same as nowhere.` },
  { id: 'fr.sons.jours-et-mois.082', fr: 'depuis une heure', use: 'quadruple', why: `Clean at [${DEPUIS_RESPELL} ZÜN UHR], and the only published depuis phrase card. It is where the glide decision was confirmed.` },
  { id: 'fr.sons.jours-et-mois.083', fr: 'pendant une heure', use: 'quadruple', why: 'FLAGGED at [pahn-DAHN TÜN UHR], two nasals, both visible. Repaired to [pahⁿ-DAHⁿ TÜN UHR]. Last of the four.' },

  // The sentences that carry a respelling and no tie glyph.
  { id: 'fr.sons.nasales.030', fr: 'Elle danse pendant toute la chanson.', use: 'evidence', why: 'Clean, no tie, and the row [pahⁿ-DAHⁿ] was read off. A bounded stretch with both ends on it, which is exactly what pendant does.' },
  { id: 'fr.sons.nasales.039', fr: 'Pendant l\'hiver, il fait franchement froid ici.', use: 'evidence', why: 'Clean, no tie. Pendant at the front of the sentence, which is the other position it takes, and a second reading of [pahⁿ-DAHⁿ].' },
  { id: 'fr.a1.prepositions-essentielles.093', fr: 'Il pleut pendant la nuit.', use: 'evidence', why: 'NO RESPELLING, and taken anyway, because it is the only published sentence in this lesson\'s own theme that puts pendant with the PRESENT tense, and header claim 8 rests on it. See RESPELL_ADDITIONS.' },
  { id: 'fr.sons.questions.040', fr: 'depuis quand ?', use: 'question', why: 'FLAGGED at [duh-PWEE KAHN]. Repaired to [duh-PWEE KAHⁿ], read off fr.sons.consonnes.151 which publishes [KAHⁿ]. The question the scene turns on, already a card.' },
];

export const IMPORTED_IDS: readonly string[] = IMPORTED.map((i) => i.id);
export const EXPECTED_IMPORTED = 12;
export const EXPECTED_AUTHORED = 29;

/** NOT ONE IMPORTED ROW IS A GENDERED SINGLE WORD.
 *
 *  a2.04's ledger amendment §0 is the most expensive thing this band has found:
 *  a1.03's ending population is measured off THE SEED, and a CARRY is what puts
 *  a row there, so importing a gendered noun moves a1.03's printed figures even
 *  though the row already exists in Postgres. Every row above is a preposition,
 *  a phrase or a sentence and `gender` is null on all twelve, measured. The
 *  guard is kept anyway, in the batch AND in the merge, and it measures off
 *  both stores. */
export const ITEM_IMPORT_IDS: readonly string[] = IMPORTED_IDS;
export const EXPECTED_DISPLAY_ONLY = 0;

/** a1.03's ending population measured off the SEED, through the real function,
 *  against the committed seed at version 37. Nothing this build does may move
 *  it, by either route. */
export const A103_SEED_POPULATION = 1890;

export const importOf = (id: string): Import => {
  const i = IMPORTED.find((x) => x.id === id);
  if (!i) throw new Error(`a2.18: ${id} is not in IMPORTED.`);
  return i;
};

export const importsFor = (use: Import['use']): readonly Import[] => IMPORTED.filter((i) => i.use === use);

/** The four ids of the quadruple, in the order they were published, so a
 *  section names the set rather than restating four ids. */
export const QUADRUPLE_IDS: readonly string[] = importsFor('quadruple').map((i) => i.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  ROWS READ AND NOT IMPORTED
 * ═══════════════════════════════════════════════════════════════════════ */

export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.alphabet.414', fr: 'Il y a deux s dans mon nom.', why: `THE BEST "there is" CARD IN THE CORPUS AND IT IS LEFT ALONE. It respells the three words [${IL_Y_A_VARIANT}] where fr.sons.jours-et-mois.081 respells them [${IL_Y_A_RESPELL}]. Neither is flagged and neither breaks a rule, so invariants §9 forbids repairing either — and this lesson's whole trap is that those three words have two jobs, so two spellings of them inside it would read as marking the two jobs. It also holds « dans mon nom », which is a2.04's place sense.` },
  { id: 'fr.sons.questions.049', fr: 'il y a quoi ?', why: `Same variant, [${IL_Y_A_VARIANT} KWAH], and same reason.` },
  { id: 'fr.sons.nasales.037', fr: 'Ma tante attend le tramway depuis longtemps.', why: `[duh-PÜEE]. THE BEST depuis-PLUS-PRESENT SENTENCE IN THE CORPUS WITH A RESPELLING ON IT, and it is left because of the glide decision: see DEPUIS_RESPELL. Nine rows spell it this way and the headword spells it the other, and one spelling per word inside one lesson was worth more than the sentence.` },
  { id: 'fr.sons.nasales.027', fr: 'J\'apprends le français depuis le printemps.', why: '[duh-PÜEE]. Second of the nine.' },
  { id: 'fr.sons.nasales.053', fr: 'Elle apprend le chant depuis longtemps avec sa tante.', why: '[duh-PÜEE]. Third of the nine.' },
  { id: 'fr.sons.nasales.114', fr: 'On entend le son des cloches depuis la maison.', why: '[duh-PÜEE], and its depuis is the PLACE sense — heard FROM the house — which is a fourth job for a word this lesson gives two.' },
  { id: 'fr.sons.voyelles.341', fr: 'Ma mère habite tout près de la mer depuis toujours.', why: '[duh-PÜEE]. Fifth of the nine, and otherwise a clean depuis-plus-present row.' },
  { id: 'fr.sons.liaisons.053', fr: 'Comment allez-vous depuis la dernière fois ?', why: '[duh-PÜEE], and it CARRIES U+203F, which renders as a low underscore on a Pixel 6.' },
  { id: 'fr.sons.liaisons.057', fr: 'Ils se connaissent depuis vingt ans.', why: '[duh-PÜEE] and U+203F.' },
  { id: 'fr.a2.verbes-essentiels.056', fr: "J'attends le bus depuis vingt minutes.", why: 'FLAGGED twice at [zhah-TAHN ... vant mee-NEWT], and it spells /y/ as NEW rather than Ü. Two conventions to repair on a row the lesson can do without.' },
  { id: 'fr.sons.mots-essentiels.018', fr: 'pour', why: 'The sixth preposition. NOT IMPORTED, because importing the headword would put it in a deck and this lesson names it once and teaches it nowhere. See POUR_DECISION.' },
  { id: 'fr.sons.jours-et-mois.076', fr: 'en avance', why: 'FLAGGED at [AHN na-VAHNS], and it holds a THIRD sense of en — early — which is neither a time preposition nor a place. Importing it would put a third en on a screen that says there are two.' },
  { id: 'fr.a2.recits-au-passe.118', fr: 'il y a deux ans', why: 'NO RESPELLING. A published "ago" phrase card with nothing to say it with, which is a2.13 §1 in this lesson\'s own subject.' },
  { id: 'fr.a2.temps-et-frequence.099', fr: 'il y a une semaine', why: 'NO RESPELLING, and it is in the theme this build rejected.' },
  { id: 'fr.a2.prepositions-essentielles.006', fr: 'Elle vit ici depuis trois ans.', why: 'NO RESPELLING, and it is in this lesson\'s own theme and its own namespace. 560 published depuis sentences and 20 of them carry a respelling: the corpus is rich in evidence and poor in cards (a2.13 §1) and this is the row that proves it closest to home.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLING REPAIRS
 *
 *  ONE TABLE, NOT TWO. Corrections §6 splits it by ROW into VISIBLE and
 *  INVISIBLE and a2.17 §2 measured that the real split is by NASAL. This build
 *  measured it once more and sharpens it: **the split is by whether a LETTER
 *  follows the n inside the token.** `lahnt-MAHN` hides its first nasal because
 *  a `t` follows; `pahn-DAHN` hides neither, because a hyphen follows and a
 *  hyphen is not a letter. Two nasals in one row is not the predictor.
 *
 *  Every entry carries `half` — the value you get by repairing every nasal
 *  `hasPlainNasalFor` can see, iterating until it goes quiet — and all three
 *  values are asserted through the real function in the batch, the merge and
 *  the test. `blind` and `house` stay separate and mutually exclusive and the
 *  guard asserts `(half !== to) === (blind || house)`.
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string; fr: string; from: string; to: string;
  half: string;
  blind: boolean;
  house: boolean;
  readOff: string | null;
  readOffToken: string | null;
  why: string;
};

export const REPAIRS: readonly Repair[] = [
  {
    id: 'fr.sons.mots-essentiels.028', fr: 'pendant',
    from: 'pahn-DAHN', half: 'pahⁿ-DAHⁿ', to: 'pahⁿ-DAHⁿ', blind: false, house: false,
    readOff: 'fr.sons.nasales.039', readOffToken: 'pahⁿ-DAHⁿ',
    why: 'TWO NASALS AND THE CHECKER SEES BOTH, because each n is followed by a hyphen or by nothing rather than by a letter. SEVEN published sentences already hold pahⁿ-DAHⁿ (fr.sons.nasales.030, .039, .042, .051, .052, .054, .059) and the HEADWORD is the outlier, which is a2.17 §3 in a second subject.',
  },
  {
    id: 'fr.sons.mots-essentiels.088', fr: 'en',
    from: 'AHN', half: AHN, to: AHN, blind: false, house: false,
    readOff: 'fr.sons.nasales.029', readOffToken: 'AHⁿ',
    why: 'One nasal, visible, at the end of a two-character string. fr.sons.nasales.029 publishes « travaille en France » as tra-VAY AHⁿ FRAHⁿS, which is the same word unstressed, and a2.04 imported that row one lesson ago and read EN_RESPELL off it.',
  },
  {
    id: 'fr.sons.jours-et-mois.080', fr: 'dans une heure',
    from: 'DAHN ZÜN UHR', half: 'DAHⁿ ZÜN UHR', to: 'DAHⁿ ZÜN UHR', blind: false, house: false,
    readOff: 'fr.sons.mots-essentiels.013', readOffToken: 'DAHⁿ',
    why: 'One nasal, visible, followed by a space. The headword of the same word is already correct at DAHⁿ, so this brings one row into line with another rather than inventing a spelling. The liaison ZÜN is untouched: the nasal survives it and the corpus writes it this way.',
  },
  {
    id: 'fr.sons.jours-et-mois.083', fr: 'pendant une heure',
    from: 'pahn-DAHN TÜN UHR', half: 'pahⁿ-DAHⁿ TÜN UHR', to: 'pahⁿ-DAHⁿ TÜN UHR', blind: false, house: false,
    readOff: 'fr.sons.nasales.030', readOffToken: 'pahⁿ-DAHⁿ',
    why: 'The same two visible nasals as the headword, inside a phrase. The T of TÜN is the liaison consonant of pendant and is right where it is.',
  },
  {
    id: 'fr.sons.questions.040', fr: 'depuis quand ?',
    from: 'duh-PWEE KAHN', half: `${DEPUIS_RESPELL} KAHⁿ`, to: `${DEPUIS_RESPELL} KAHⁿ`, blind: false, house: false,
    readOff: 'fr.sons.consonnes.151', readOffToken: 'KAHⁿ',
    why: 'One nasal, visible, at the end. fr.sons.consonnes.151 publishes quand as KAHⁿ. The depuis half is already the headword spelling and is untouched.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  a2.04's `même` FALSE POSITIVE IS NOT ABOUT `même`
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.04 measured that `hasPlainNasal`'s FIRST branch has no rescue path, so a
 *  real /m/ or /n/ after a two-letter house vowel cannot pass: `MEHM` is
 *  flagged and `mem` is not, and `même` has no nasal vowel anywhere. Its
 *  amendment lists the words it expects to bite next: `même`, `comme`, `pomme`,
 *  `homme`, `femme`.
 *
 *  `problème` is not on that list and it is the same shape, which means the
 *  shape is the predictor and the list is not. Measured 2026-08-14:
 *
 *      proh-BLEHM   FLAGGED     branch 1, no rescue
 *      proh-BLEM    not flagged branch 2, rescued by the `ème` in the French
 *
 *  Seven published rows respell the word and they are split four to three:
 *  fr.a1.rp-societe.046, fr.sons.expressions-utiles.003, fr.sons.noms-
 *  essentiels.011 and one more use BLEHM and are flagged; fr.a2.conflits-
 *  reconciliation.090, fr.a2.expressions-de-quantite.038 and
 *  fr.a2.rp-technologie.045 use BLEM and pass.
 *
 *  THE GENERAL SHAPE IS A REAL /m/ OR /n/ AFTER A TWO-LETTER HOUSE VOWEL, which
 *  is every French word ending `-ème`, `-ême`, `-ome`, `-ame`, `-aine`, and it
 *  is much wider than five nouns. This lesson takes the same remedy a2.04 took:
 *  a form that avoids the shape, READ OFF a published row, nothing repaired,
 *  and the false positive asserted AS A NEGATIVE in all three layers. */
export const PROBLEME_FALSE_POSITIVE = {
  word: 'problème',
  flagged: 'proh-BLEHM',
  clean: 'proh-BLEM',
  rowsFlagged: 4,
  rowsClean: 3,
  readOff: 'fr.a2.conflits-reconciliation.090',
  why: 'The first branch of hasPlainNasal matches a two-letter house vowel plus M or N with no rescue path. The bare-vowel spelling takes the second branch and is rescued by the vowel behind the m in the French. a2.04 found this on même and listed five nouns; the predictor is the SHAPE and not the list.',
} as const;

export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = REPAIRS.filter((r) => !r.blind);
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = REPAIRS.filter((r) => r.blind);
export const ALL_REPAIRS: readonly Repair[] = REPAIRS;

export const EXPECTED_REPAIRS = 5;
export const EXPECTED_REPAIRS_BLIND = 0;
export const EXPECTED_REPAIRS_HOUSE = 0;

/** NOT ONE BLIND ROW AND NOT ONE HOUSE ROW, WHICH IS A FIRST IN THIS BAND, and
 *  it is asserted rather than left as a silence. Corrections §6 predicts blind
 *  rows and a2.17 §2 predicts house ones; this lesson's five words all close
 *  their nasal at a token boundary and all five already have a published house
 *  value to read off, so the minimal repair is the right one every time. The
 *  day that stops being true, the count moves and the batch fails. */
export const NO_BLIND_NO_HOUSE_CLAIM =
  'All five repairs are visible and minimal. No nasal in this lesson hides behind a consonant inside its token, and no minimal repair falls short of a house value.';

export const NOT_REPAIRED: readonly { id: string; fr: string; respell: string; why: string }[] = [
  { id: 'fr.sons.jours-et-mois.076', fr: 'en avance', respell: 'AHN na-VAHNS', why: 'FLAGGED twice, and NOT DISPLAYED. It is four ids from the quadruple this lesson imports, so it will be the first thing the next author sees; it holds a third sense of en and repairing a row nobody shows is how a build acquires a defect it cannot test.' },
  { id: 'fr.sons.mots-essentiels.164', fr: 'pendant que', respell: 'pahn-DAHN KUH', why: 'FLAGGED twice. A conjunction rather than a preposition, so it takes a clause and not a duration, and it is nothing this lesson teaches.' },
  { id: 'fr.sons.mots-essentiels.121', fr: 'dedans', respell: 'duh-DAHN', why: 'FLAGGED. A place adverb, and a2.04\'s subject rather than this one\'s.' },
  { id: 'fr.sons.mots-essentiels.061', fr: 'maintenant', respell: 'mant-NAHN', why: 'FLAGGED, and there is a second copy at fr.a1.rp-voyage.056 [mahn-tuh-NAHN]. Neither is displayed. Worth naming because `mant-NAHⁿ` PASSES the checker and is still wrong in its first syllable, which is corrections §14.1 exactly.' },
  { id: 'fr.b1.verbes-essentiels.010', fr: 'Nous avons dépensé beaucoup pendant le voyage.', respell: 'nooz ah-VOHN day-pahn-SAY boh-KOO pahn-DAHN luh vwah-YAHZH', why: 'FLAGGED three times, b1, and not displayed.' },
  { id: 'fr.sons.jours-et-mois.077', fr: 'tôt le matin', respell: 'TOH LUH ma-TUHN', why: 'FLAGGED, and it spells /ɛ̃/ as UHN where this lesson and a2.04 both use EHⁿ. Not displayed.' },
  { id: 'fr.a1.rp-societe.046', fr: 'un problème', respell: 'uhn-pro-BLEHM', why: 'FLAGGED twice, and one of the two flags is the FALSE POSITIVE described above. Not displayed, and not repairable in the notation the house prefers.' },
];

/** fr.a1.prepositions-essentielles.093 is the only published sentence in this
 *  lesson's own theme that puts `pendant` with the present tense, and it has no
 *  respelling at all. a2.03 §7 built the merge path for this; a2.17 asserted
 *  the list empty. This one is not empty. */
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [
  {
    id: 'fr.a1.prepositions-essentielles.093', fr: 'Il pleut pendant la nuit.',
    to: 'eel PLEU pahⁿ-DAHⁿ LA NÜEE',
    why: 'A row is imported for its respelling and this one has none, so the respelling is added rather than the row being dropped. Every syllable is read off a published row: pahⁿ-DAHⁿ from fr.sons.nasales.030, PLEU from fr.sons.voyelles (the /ø/ convention), and NÜEE is the /ɥ/ glide in the third of the three spellings invariants §9 already records.',
  },
];

export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string[]; why: string }[] = [
  { id: 'fr.sons.nasales.030', fr: 'Elle danse pendant toute la chanson.', add: ['flashcard', 'voiceflash'], why: 'Carried `sentence` and `review` only, so it could not be released into a deck.' },
  { id: 'fr.sons.nasales.039', fr: 'Pendant l\'hiver, il fait franchement froid ici.', add: ['flashcard', 'voiceflash'], why: 'The same.' },
  { id: 'fr.a1.prepositions-essentielles.093', fr: 'Il pleut pendant la nuit.', add: ['voiceflash'], why: 'Carried `sentence`, `flashcard` and `review`. Spoken practice draws only from rows carrying voiceflash.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT NO EAR QUESTION MAY ASK
 * ═══════════════════════════════════════════════════════════════════════ */

/** The brief says listenChoose has little to do here and it is right: the
 *  distinctions are semantic. It is also true for a reason the brief does not
 *  give — `dans` and `en` in front of a vowel BOTH liaise into an /n/, so
 *  « dans une heure » and « en une heure » differ by one syllable at the front
 *  and share the rest, and at speed the difference is /dɑ̃zyn/ against /ɑ̃nyn/,
 *  which is a distinction of consonant rather than of meaning.
 *
 *  The lesson asks ONE ear question and it is the pair that is genuinely far
 *  apart. Everything below may not be offered as two options of one item. */
export const NO_EAR_QUESTION: readonly (readonly [string, string])[] = [
  ['dans une heure', 'en une heure'],
  ['en', 'an'],
  ['en', 'em'],
  ['il y a', 'il y avait'],
  ['deux ans', 'deux heures'],
];

export const NO_EAR_CLAIM =
  'Dans and en both pull an n across into a vowel, so at speed they differ by one consonant. Nothing in this lesson turns on hearing which one it was.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE COUNTS THE THREE LAYERS AGREE ON
 * ═══════════════════════════════════════════════════════════════════════ */

export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 30;
export const EXPECTED_REFRAME_USES = 7;
export const EXPECTED_TRAP_DRILLS = 2;
export const EXPECTED_TERMS = 8;
export const SHEET_ID = 'sheet.a2.18.temps';

/** The mission-row title ceiling, measured by a2.13 on a Pixel 6 and house-wide
 *  since. The hub draws the title beside a type chip and the chip wins. */
export const TITLE_MAX = 27;
export const TITLE_TARGET = 25;

/** a2.04 measured a FOUR-column table inside a reference sheet clipping on a
 *  Pixel 6, after a2.03 had measured five. The budget is THREE and this lesson
 *  does not test it again. */
export const SHEET_COLS_MAX = 3;

/** The number of missions the Owns gets, asserted rather than described, so a
 *  later edit that thins the depuis act fails with the reason. Doctrine §B.5:
 *  if the paradigm outweighs the Owns you built the wrong lesson, and the
 *  paradigm here is ONE section. */
export const OWNS_MISSIONS = 5;
export const PARADIGM_MISSIONS = 1;
