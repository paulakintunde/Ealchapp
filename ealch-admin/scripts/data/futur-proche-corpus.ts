// The a2.19 corpus: what this lesson authors, what it imports, the four
// respellings it SUPPLIES, and the two measurements that decided its shape.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a2.19 puts on a screen. The lesson body (futur-proche-lesson.ts) reads
// them FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE CORPUS PUBLISHED THE NEGATIVE THIS LESSON EXISTS TO TEACH, THIRTEEN
//  TIMES, AND NEVER RESPELLED ONE OF THEM.
// ══════════════════════════════════════════════════════════════════════════
//
//     fr.a2.negation-et-restriction.107  Je ne vais pas sortir ce soir.
//     .108 .109 .148 .152 .157 .158 .159 .161 .164 .166
//     fr.a1.expressions-utiles.220 · fr.b1.projets-et-futur.012
//
// Thirteen published sentences putting `ne ... pas` round a conjugated `aller`
// with an infinitive behind it, eleven of them in one theme, across five
// persons and eleven different verbs, and **not one carries a respelling**.
// Seven carry an IPA. Corrections §3 says the corpus has forms and no minimal
// pairs; a2.18 found the first counterexample and this is the second, in the
// other polarity — and a2.13 §1 is the half that holds: a row without a
// respelling reaches a card the learner cannot say, so the importable pool was
// not thirteen but ZERO.
//
// Four of the thirteen are imported and given the respelling they never had.
// The paradigm itself is authored, because those thirteen share no frame:
// eleven verbs, eleven objects, five persons, and comparing two of them
// compares their subject matter as well as where the `pas` landed.
//
// Measured 2026-08-14 against Postgres by `scripts/_a219_probe.ts` through
// `_a219_probe4.ts`, and against a1.18, a2.02, a2.13 and a2.18 read as shipped.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THE BRIEF GOT WRONG, OR LEFT UNVERIFIED. NINE CLAIMS, MEASURED.
// ══════════════════════════════════════════════════════════════════════════
//
//   1. The identity block. RIGHT, byte for byte, for the first time in this
//      band. `title: The Near Future`, `sub: Le futur proche`, the canDo, the
//      prereq and `lessonIds: []` all match `content_units` exactly. Corrections
//      §1 predicts a swap and §11 had already corrected this one; the brief
//      carries the corrected version and it holds.
//
//   2. "Whether a2.02 shipped the one form, two jobs term. If not, a2.18 may
//      have named the pattern instead; check both."
//
//      BOTH SHIPPED IT AND IT IS THE SAME STRING. `WHAT_FOLLOWS` in
//      `data/aller-venir-terms.ts` is `what comes next decides`, exported with
//      `WHAT_FOLLOWS_UNIT = 'a2.02'` and a comment naming a2.18, a2.19 and
//      a2.15 as the three lessons that will quote it. a2.18 imported both
//      rather than retyping them and so does this file. Nothing was unverified.
//
//   3. "What a1.18 says about dropping ne in speech. Unchecked."
//
//      IT SAYS A GREAT DEAL AND IT IS AN ACT OF THAT LESSON. `grammarIntroduced`
//      carries « ne-drop in colloquial spoken French, introduced for RECEPTION
//      ONLY and produced nowhere », its cards say « In writing, both halves
//      every time. In speech the ne very often goes, and you need to hear it »,
//      and its one dropped-ne row is fr.a1.negation-et-restriction.068.
//      See NE_DROP below: this lesson agrees with it word for word, ships ONE
//      receptive row, and asks for it in exactly one ear question.
//
//   4. "What a2.18 shipped for dans. It was written before this lesson existed."
//
//      IT SHIPPED THE HAND-OFF BY NAME AND ASKED FOR IT BACK.
//      `HANDOVER['a2.19']` in `data/prepositions-temps-terms.ts` reads: *"dans
//      is taught here with the present tense, which is correct on its own. The
//      verb-in-front version is that lesson, and it should name this one."*
//      Its `FUTURE_DEFERRAL` is on four of its screens. This lesson imports its
//      « dans dix minutes » card AND its « Je pars dans dix minutes. » sentence
//      and puts « Je vais partir dans dix minutes. » beside them, so the two
//      halves of one sentence sit on one screen. See DANS_PAIR.
//
//   5. "Whether a2.13 shipped its modal + infinitive structure in a form
//      quotable here."
//
//      IT SHIPPED A REFRAME THAT IS HALF OF THIS LESSON'S RULE:
//      « One verb changes for the person, and the next one never does. »
//      Quoted verbatim and credited by id. Its frame verb is `payer` and its
//      six modal rows are `fr.a2.verbes.341..358`; this lesson imports
//      fr.a2.verbes.347 « Je peux payer. » and authors « Je vais payer. », so
//      the back-reference is two cards with one infinitive rather than a
//      sentence about a neighbouring lesson.
//
//   6. "aller exists (2 rows) and a2.02 conjugates it. You author no headword."
//
//      TRUE, AND THE SECOND HALF UNDERSTATES IT. a2.02 published its whole
//      `aller` paradigm as six sentences in ONE frame — fr.a2.verbes.261..266,
//      « Je vais au parc. » through « Ils vont au parc. » — which is the PLACE
//      job in six persons, respelled, in this lesson's own theme. So the trap's
//      contrast is not two sentences this build wrote: it is a2.02's own
//      paradigm beside this one, same persons, same order. Six imports.
//
//   7. "Je vais à Paris / Je vais partir belong side by side."
//
//      THE FIRST OF THE TWO IS ALREADY A PUBLISHED CARD.
//      fr.a2.prepositions-essentielles.130, a2.04's, respelled
//      `zhuh veh a pa-REE`, one seq position back. It is imported rather than
//      re-authored and the pair differs by exactly what follows `vais`.
//
//   8. "errorSpot is your strongest format, because « je ne vais manger pas » is
//      a whole-sentence word-order error and free-text is the only format that
//      catches it."
//
//      TRUE AND MEASURED THROUGH `fold()`. Word order survives a fold —
//      whitespace is stripped, so `jenevaismangerpas` and `jenevaispasmanger`
//      are different strings — which is what makes this the one production
//      question this lesson can ask that no mcq could. Five errorSpot questions.
//
//   9. "One table for the full construction across all six persons."
//
//      TAKEN, AND IT IS THREE COLUMNS WIDE BECAUSE THAT IS THE MEASURED BUDGET.
//      The in-flow version is a `tapTable` (a `table` at layer `core` is a
//      density failure, corrections §8) with cols « Person · Aller · Then », and
//      the third column is the word `partir` six times. The smallness IS the
//      teaching and the column that never changes is the argument.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE DICTÉE COSTS THE NEGATIVE FIVE LETTERS, AND THAT DECIDES THE FRAME
// ══════════════════════════════════════════════════════════════════════════
//
// `dicteeMode()` switches to WORD tiles above 16 letters and word mode hands
// every real word over pre-spelled, so a lesson about where a two-letter word
// lands can only be tested in LETTERS mode. `ne` and `pas` cost five letters,
// and measured through the real function across the whole paradigm:
//
//     partir     je 12L / 17W   tu 11L / 16L   il 10L / 15L   on 10L / 15L
//                elle 12L / 17W   nous 16L / 20W   vous 15L / 19W   ils 13L / 18W
//
// **The affirmative is spellable in all eight persons and the negative in
// three.** The one the learner most wants to produce — `je` — is one letter
// over, and it stays over for every six-letter infinitive in the language.
// So the dictée frame is `il`, `tu` and `on`, and it is not a taste decision.
// See DICTEE_MATRIX, which is asserted through the real function rather than
// described.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT } from './aller-venir-terms.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  IDENTITY, THE BLOCK, AND THE COUNTS THE BATCH REFUSES TO DISAGREE WITH
 * ═══════════════════════════════════════════════════════════════════════ */

/** The batch-1 home for a verb lesson, and a2.02's. Nine of the ten batch-1
 *  lessons wrote here and this lesson's whole subject is a verb construction
 *  built on a2.02's paradigm, which lives at fr.a2.verbes.261..266. */
export const THEME = 'verbes';

/** The theme this build considered and rejected, kept as a constant so the
 *  guards can assert no row of this lesson lands there. `negation-et-
 *  restriction` holds the eleven published negatives this lesson imports from,
 *  and writing INTO it would put a verb paradigm inside a deck about negation
 *  and restriction, where a1.18 already owns the subject. */
export const REJECTED_THEME = 'negation-et-restriction';

/** Byte for byte from `content_units`, measured 2026-08-14 by
 *  `scripts/_a219_probe.ts`. Corrections §1 says never to take it from the
 *  brief; this one the brief carries correctly, because §11 had already
 *  corrected it, and it was re-read anyway because that costs one line. */
export const UNIT = {
  id: 'a2.19',
  seq: 15,
  title: 'The Near Future',
  sub: 'Le futur proche',
  canDo: 'Can say what they are going to do, and make it negative',
  prereqUnitIds: ['a2.02'],
  lessonIds: [] as string[],
} as const;

export const LESSON_ID = 'a2.19.l1';

/** Ledger §10: the maximum has been useless since a2.10.l2 took `.461..500`,
 *  and it is still `.486`. The row COUNT is the only signal. `fr.a2.verbes`
 *  held exactly this many rows when a2.19 claimed `.501`, which is the ledger's
 *  own figure after a2.15, unchanged because a2.03, a2.16, a2.17, a2.04 and
 *  a2.18 all wrote into other themes. */
export const ROW_COUNT_BEFORE = 374;

/** The whole theme, all levels, all statuses, for the report. */
export const THEME_COUNT_BEFORE = 642;

/** a2.15 reserved `.421..460` and a2.10.l2 took `.461..500`, of which it used
 *  `.461..486`. `.487..500` is a2.10.l2's unused tail and ids are the SRS key:
 *  it is not backfilled. This block opens above the highest reservation. */
export const ID_BLOCK = {
  from: 'fr.a2.verbes.501',
  to: 'fr.a2.verbes.540',
} as const;

/** a2.03's batch claimed a NAMESPACE when it meant a BLOCK and re-running it
 *  failed on eighteen rows a2.16 legitimately owned. `fr.a2.verbes` holds 374
 *  rows belonging to eight other lessons, so every guard here is scoped to the
 *  BLOCK, and a row inside the block that this build does not own is fatal. */
export const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= 501 && n <= 540;
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS, BY UNIT ID, AND WHAT EACH ONE OWNS
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.02, Irréguliers 1, seq 5. THE PREREQUISITE. It conjugates `aller` in six
 *  persons in one frame (fr.a2.verbes.261..266) and its brief forbade it from
 *  using the verb futurally, so the construction arrives here untouched and the
 *  paradigm arrives already taught. It also owns the FIRST instance of doctrine
 *  §B.7's one-form-two-jobs shape and named the pattern so later lessons could
 *  quote it. Imported rather than retyped. */
export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT };
export const ALLER_UNIT = 'a2.02';

/** a2.02's OTHER term, which is half of what this lesson needs and which it
 *  says about `de`: the naming form after it never moves for anybody. Quoted
 *  because the same fact is true behind `aller` and a learner who has met it
 *  once should meet the words again rather than a paraphrase. */
export const A202_NAMING_FORM = 'the form that never changes';

/** a1.18, La négation, shipped. It owns `ne ... pas` and this lesson extends
 *  its rule without re-teaching it. Its own reframe, verbatim from
 *  `data/negation-terms.ts`, so this lesson's cannot contradict it. */
export const NEGATION_UNIT = 'a1.18';
export const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';

/** What a1.18 claims to have taught, quoted from its `grammarIntroduced`. The
 *  word that matters is FINITE: a1.18 already said the two halves go round the
 *  verb that carries the person, in a lesson where there was only ever one. */
export const A118_CLAIM =
  'Standard negation with the discontinuous morpheme ne… pas around a finite verb';

/** a2.13, Irréguliers 3, seq 7. Its reframe is the half of this lesson's rule
 *  that is about the SECOND verb, and it is quoted verbatim and credited by id.
 *  Its frame verb is `payer`, which is why this lesson's back-reference is two
 *  cards with one infinitive rather than a sentence about a neighbour. */
export const MODAL_UNIT = 'a2.13';
export const A213_REFRAME = 'One verb changes for the person, and the next one never does.';

/** a2.18, Prépositions de temps, seq 14, immediately before. It taught `dans`
 *  with the present tense and named this lesson in its own hand-off, which is
 *  quoted below so the loop closes with the words a2.18 used. */
export const TIME_UNIT = 'a2.18';
export const A218_HANDOVER =
  'dans is taught here with the present tense, which is correct on its own. The verb-in-front version is that lesson, and it should name this one.';

/** a2.18's own deferral, verbatim from `data/prepositions-temps-corpus.ts`
 *  FUTURE_DEFERRAL with its unit reference resolved. a2.16 §3: assert the
 *  literal, because a back-reference to a unit id is not a variable. */
export const A218_DEFERRAL =
  `French says « je pars dans dix minutes » with a present tense, and that is correct as it stands. The other way of saying it is ${unitRef('a2.19')}, which is next.`;

/** a2.04, Prépositions de lieu, seq 13. It owns which preposition follows a
 *  verb of movement, and this lesson needs `aller` + place for the trap without
 *  teaching which word goes there. Its own card is imported. */
export const PLACE_UNIT = 'a2.04';

/** a2.05, Le passé composé avec avoir, seq 16, immediately after. It is where
 *  this lesson's rule is used again on a harder structure, and it is told to
 *  extend it. Named forward on a learner surface. */
export const PAST_UNIT = 'a2.05';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: a rule the learner runs while the sentence is already moving.
 *  Eleven words, and its first three are a1.18's first three, deliberately.
 *
 *  a1.18 shipped « Wrap the verb, then ask what the verb was. » in a lesson
 *  where there was only ever one verb to wrap. This lesson adds the half that
 *  only appears when there are two, and it does it without contradicting a
 *  syllable of the earlier rule: you still wrap the verb, and the question is
 *  now WHICH one.
 *
 *  It generalises, which is the whole difference between an A1 statement and an
 *  A2 one. It is a2.13's modals (« je ne peux pas venir »), it is this lesson,
 *  and it is the passé composé at seq 16, where `pas` wraps the auxiliary and
 *  leaves the participle alone. a2.05 is told to extend it and the wording is
 *  exported so the two can be compared rather than remembered. */
export const REFRAME = 'Wrap the verb that changed, not the one carrying the meaning.';

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'Ne...pas goes around aller.',
    why: 'THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right. It is true of this lesson and of nothing else, so a learner who runs it arrives at the passé composé one lesson later with nothing, and at the modals having learned nothing they could have used. It is an A1 statement about one construction where an A2 rule was available for the same number of words.',
  },
  {
    candidate: 'Negation wraps the conjugated verb, not the one carrying the meaning.',
    why: 'The brief\'s own candidate, and the chosen one is it rewritten twice. It opens with a grammar noun where a1.18\'s rule opens with an instruction, and a rule the learner has to run mid-sentence should tell them to do something. `conjugated` is also the technical half of a pair whose plain half — `changed` — is what the rest of this lesson uses, and a2.17 §8 measured that the house prefers the plain phrase.',
  },
  {
    candidate: 'The second verb never moves.',
    why: `True, useful, and already shipped: ${unitRef('a2.13')}\'s reframe is « One verb changes for the person, and the next one never does », which says it better and says it first. Taking it would spend this lesson\'s one carried line restating a neighbour\'s. It is quoted instead, credited by id, and it is the OTHER half of the pair: ${unitRef('a2.13')} owns what happens to the infinitive and this lesson owns what happens to the negative.`,
  },
  {
    candidate: 'Pas goes where the ending went.',
    why: 'Six words, memorable, and false. It is not about endings and a learner cannot check it: in « je ne vais pas partir » both verbs carry an ending and only one of them changed for the person. Rejected because a rule that sounds runnable and is not is worse than a longer one that works.',
  },
];

/** The move, in the imperative, for the roundup and the sheet. */
export const THE_MOVE =
  'Find the verb that moved for the person you are talking about. Both halves of the negative go round that one, and everything after it stays exactly as it is.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CONSTRUCTION: THE FRAME, AND WHY IT IS partir
 * ═══════════════════════════════════════════════════════════════════════ */

/** One infinitive across the whole paradigm, and it is `partir`.
 *
 *  a2.15 §4: ask which half of the sentence your lesson is about. Here the
 *  FRONT is the teaching — which verb the two halves wrap — so the back of the
 *  sentence must not move, and every person is the same six letters.
 *
 *  `partir` rather than `manger`: both are six letters and give the same dictée
 *  arithmetic, and `partir` is the one a2.02 already uses in the same frame
 *  (« Il vient de partir. », fr.a2.verbes.281), so the learner meets the same
 *  infinitive behind `venir de` and behind `aller`. */
export const FRAME_VERB = 'partir';
export const FRAME_VERB_ID = 'fr.sons.consonnes.098';
export const FRAME_VERB_RESPELL = 'par-TEER';

/** The six persons, in a1.05's order, which a2.01 settled for the level: six
 *  rows and not nine, because `il/elle/on` share a form and `ils/elles` share
 *  another and re-deriving that spends missions on an earlier lesson. */
export const PERSONS: readonly { person: string; aller: string; not: string }[] = [
  { person: 'je', aller: 'vais', not: 'ne vais pas' },
  { person: 'tu', aller: 'vas', not: 'ne vas pas' },
  { person: 'il', aller: 'va', not: 'ne va pas' },
  { person: 'nous', aller: 'allons', not: "n'allons pas" },
  { person: 'vous', aller: 'allez', not: "n'allez pas" },
  { person: 'ils', aller: 'vont', not: 'ne vont pas' },
];

/** The claim the grid makes, and it is about the third column. */
export const GRID_CLAIM =
  'One column changes and one column does not. Aller moves for the person you are talking about; the verb behind it is the naming form and it is the same six letters in all six rows.';

/** a2.17 measured a THREE-COLUMN tapTable cell on a Pixel 6 at ELEVEN
 *  characters. Every cell in the in-flow grid is inside it. */
export const GRID_CELL_MAX = 11;

/** The reference sheet's second table carries `n'allons pas`, which is TWELVE.
 *  a2.04 measured the sheet budget as a COLUMN COUNT (three) and nobody has
 *  measured a sheet cell's width, so this is the first row in the band to go
 *  past eleven inside a sheet and it is named here as UNVERIFIED until it has
 *  been read off a phone. It is one character and the alternative is dropping
 *  the `nous` row out of a table whose subject is all six persons. */
export const SHEET_CELL_MAX = 12;
export const SHEET_CELL_UNVERIFIED = "n'allons pas";

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: WHERE THE NEGATION LANDS
 * ═══════════════════════════════════════════════════════════════════════ */

export const OWNS_CLAIM =
  'Two verbs, and only one of them gets wrapped. The two halves go round aller, which is the one that changed for you, and the verb carrying the meaning stays outside them.';

/** Measured 2026-08-14 across every published row, and RE-MEASURED by
 *  `_a219_manifest.ts` on every regeneration. The batch, the merge and the test
 *  all compare these against `MEASURED` in the generated file, so a figure that
 *  drifts fails a build rather than a card printing a number nobody checked.
 *
 *  `respelled` is the one that matters and it is ZERO. It is what makes this
 *  lesson's paradigm authored rather than imported, and it is a2.13 §1 measured
 *  in this lesson's own subject. */
export const NEGATIVE_EVIDENCE = {
  rows: 13,
  respelled: 0,
  inOneTheme: 11,
  persons: 5,
  verbs: 11,
} as const;

/** And the affirmative, counted the same way. 721 sentences and ten cards. */
export const AFFIRMATIVE_EVIDENCE = {
  rows: 721,
  respelled: 10,
} as const;

/** The error, as the learner produces it, and the two ways it comes out.
 *
 *  These are DISPLAY STRINGS and never corpus rows. A row holding one would be
 *  served by the flashcard hub as French, which is the a2.18 rule and the
 *  reason its own wrong forms live in constants rather than in the corpus. */
export const WRONG: readonly { wrong: string; right: string; why: string }[] = [
  {
    wrong: 'Je ne vais manger pas.',
    right: 'Je ne vais pas manger.',
    why: 'The pas has gone past the wrong verb. English puts "not" beside the word carrying the meaning and French puts it beside the word that changed, and those are two different words as soon as there are two verbs.',
  },
  {
    wrong: 'Je vais ne pas partir.',
    right: 'Je ne vais pas partir.',
    why: 'Both halves have travelled together and landed round the naming form. They are not a unit that moves: the ne goes in front of the verb that changed and the pas goes straight after it.',
  },
  {
    wrong: 'Tu vas travailler pas demain.',
    right: 'Tu ne vas pas travailler demain.',
    why: 'The pas arrived after the sentence had already gone past the verb it belongs to, and the ne never arrived at all. A listener hears the front of the sentence, which says you are going to work.',
  },
];

/** THE ERROR THE SCENE IS BUILT ON, AND IT IS NOT ANY OF THE THREE ABOVE.
 *
 *  The expensive version is not a wrong sentence. It is a RIGHT one: the
 *  learner starts « Je vais travailler », goes looking for where the negative
 *  belongs, and the sentence ends before either half arrives. What was said is
 *  perfect French and the opposite of what was meant, and nobody has any reason
 *  to check. Doctrine §B.2 asks for a sentence that died in the middle; this
 *  one dies at the end and is worse, because it does not look like a failure. */
export const SCENE_ERROR = 'Je vais travailler.';
export const SCENE_ERROR_EN = 'I am going to work. (which is the opposite of what was meant)';

/** The shape no correct sentence in this lesson may have: `aller` conjugated,
 *  an infinitive, and then `pas`.
 *
 *  GUARD THE THING, NOT THE LETTERS (a2.14 §6, a2.17 §7). It requires a form of
 *  `aller` in front, so an English sentence cannot match it whatever its
 *  letters do, and the must-not-fire list below holds this lesson's own copy. */
export const PAS_AFTER_INFINITIVE =
  /(?<![\p{L}\p{N}-])(?:vais|vas|va|allons|allez|vont)\s+(?:ne\s+|n['’])?[\p{L}]{3,}(?:er|ir|re|oir)\s+pas(?![\p{L}\p{N}'’-])/iu;

export const PAS_AFTER_MUST_FIRE: readonly string[] = [
  'Je ne vais manger pas.',
  'Tu vas travailler pas demain.',
  'Il ne va partir pas.',
  'Nous allons manger pas.',
  'Elle ne va sortir pas ce soir.',
];

/** a2.17 §4 and a2.14 §6: half a learner surface is English by design and a
 *  shape built out of French morphology reads the English as French. Every
 *  correct line in this lesson that comes anywhere near the shape is here. */
export const PAS_AFTER_MUST_NOT_FIRE: readonly string[] = [
  'Je ne vais pas manger.',
  'Je ne vais pas partir.',
  'Tu ne vas pas travailler demain.',
  'Nous n\'allons pas partir.',
  'Il ne va pas venir ce soir.',
  'Je vais pas sortir.',
  'Je vais partir dans dix minutes.',
  'Wrap the verb that changed, not the one carrying the meaning.',
  'The pas lands after aller and before the verb carrying the meaning.',
  'You are going to leave, and you are not going to stay.',
  'Il vient de partir.',
];

/** The two halves, in the order the learner has to place them, for the cards
 *  and the sheet. Exported so a section names the position rather than
 *  restating it. */
export const POSITION_CLAIM =
  'Ne in front of aller, pas straight after it, and the naming form outside both. Nothing else in the sentence moves at all.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP: aller + INFINITIVE AGAINST aller + PLACE
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.02's term, quoted verbatim and credited by unit id, AND a2.18 named as
 *  the second instance. Doctrine §B.7: from seq 14 onward, name the earlier
 *  instances, and by the third the learner should be predicting the shape.
 *
 *  a2.18 quoted this same string on `il y a` and this lesson is the third of
 *  four; a2.15's `prendre` is the fourth. */
export const PATTERN_CLAIM =
  `The third time. ${Cap(unitRef(WHAT_FOLLOWS_UNIT, 'a2'))} called it ${WHAT_FOLLOWS}, on venir de, and ${unitRef(TIME_UNIT, 'a2')} met it again on il y a.`;

/** The prediction the trap opens on, before it shows anything. A mission that
 *  asks the learner to predict the shape is stronger than one that explains it,
 *  which is what doctrine §B.7 asks for by the third instance. */
export const PATTERN_PREDICTION =
  'Aller has two jobs and the next word decides which. Before you look at the cards: what kind of word do you think you are looking for?';

export const TRAP_RULE =
  'A place after aller is where you are going. A naming form after it is what you are going to do.';

/** The two jobs, as the pairs the trap prints. Every one of these is an
 *  authored or imported row rather than a loose string. */
export const TWO_JOBS: readonly { place: string; action: string; why: string }[] = [
  {
    place: 'Je vais à Paris.',
    action: 'Je vais partir.',
    why: 'Three words in common and the fourth settles it. A place on the left, a naming form on the right, and « je vais » is doing something completely different in the two.',
  },
  {
    place: 'Je vais au parc.',
    action: 'Je vais payer.',
    why: `${Cap(unitRef(WHAT_FOLLOWS_UNIT, 'a2'))}'s own card on the left, from the lesson that conjugated this verb, and this lesson's on the right. Same two words, and nobody has to decide anything until the third arrives.`,
  },
  {
    place: 'Ils vont au parc.',
    action: 'Ils vont partir.',
    why: 'And in the plural, where the two are still one form apart and still separated by nothing but what follows.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECOND FUTURE, NAMED AND NEVER TAUGHT
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE FUTUR SIMPLE IS BEYOND A2 ENTIRELY, AND 206 PUBLISHED SENTENCES ALREADY
 *  HOLD ONE.
 *
 *  Measured 2026-08-14: 206 published rows carry a one-word future. A learner
 *  who meets « je partirai » after this lesson and has not been told it exists
 *  concludes they were taught a simplification, which costs the lesson its
 *  credit for everything else it said. One line prevents that, and the line is
 *  true: this construction is what people actually say. */
export const OTHER_FUTURE_ROWS = 206;
export const OTHER_FUTURE =
  'There is a second future in French, one word instead of two, and it comes after this level. You will see it in writing before anybody teaches it to you. What you have here is the one people actually say.';

/** No form of it may be conjugated anywhere, and the shape guards it.
 *
 *  GUARD THE THING: a French subject pronoun in front, so an English sentence
 *  cannot match. `camera` and three others are excluded by name because `on
 *  camera` is a subject pronoun followed by a word ending in `ra`, which is
 *  a2.17 §4 exactly. `ira` and its family are listed separately: their stem is
 *  one letter and the general branch needs two. */
export const FUTUR_SIMPLE_SHAPE =
  /(?<![\p{L}\p{N}'’-])(?:je|j['’]|tu|il|elle|on|nous|vous|ils|elles)\s+(?!camera|cameras|opéra|extra|ultra)(?:[\p{L}]{2,}(?:rai|ras|ra|rons|rez|ront)|ira|iras|irai|irons|irez|iront)(?![\p{L}\p{N}'’-])/iu;

export const FUTUR_SIMPLE_MUST_FIRE: readonly string[] = [
  'je partirai',
  'tu partiras',
  'il partira demain',
  'nous partirons',
  'vous partirez',
  'ils partiront',
  'Je mangerai plus tard.',
  'Elle sera là.',
  'Il ira à Paris.',
];

/** THE HOUSE GOALS HEADING IS ITSELF A ONE-WORD FUTURE, AND THIS IS THE ONE
 *  LESSON IN THE PROJECT WHERE THAT MATTERS.
 *
 *  FOUND BY THE FIRST DRY RUN. « Ce que vous saurez faire » is `savoir` in the
 *  synthetic future and 36 of the 49 lessons in the seed ship it as the goals
 *  section's `frSub`. a2.14 §4 already settled the question for the level in
 *  the other direction — the chrome is not a collision and every lesson keeps
 *  it — and recorded the rider that matters here: *"The FUTURE form is
 *  contained. `saurez` is permitted in the goals heading and nowhere else."*
 *
 *  It matters more in this lesson than in a2.14, because this is the lesson
 *  that names the one-word future and refuses to conjugate it. So the chrome is
 *  exempted BY THE EXACT STRING, asserted to appear exactly once, and asserted
 *  to be in the goals section's `frSub` and nowhere else. A learner who reads
 *  French chrome will have seen the form before they are told it exists, which
 *  is precisely the thing OTHER_FUTURE is there to prevent, and it is worth
 *  knowing that 36 lessons have been printing it unexplained. */
export const HOUSE_CHROME_FUTURE = 'Ce que vous saurez faire';
export const HOUSE_CHROME_LESSONS = 36;

export const FUTUR_SIMPLE_MUST_NOT_FIRE: readonly string[] = [
  'Je vais partir.',
  'Il va rester ici.',
  'Nous allons partir.',
  'Vous allez payer.',
  'Elle va sortir ce soir.',
  'on camera',
  'il y a',
  'There is a second future in French, one word instead of two, and it comes after this level.',
  'Tu vas travailler demain.',
  'Ils ne vont pas venir à la fête.',
  'On va manger dans une heure.',
  'Wrap the verb that changed, not the one carrying the meaning.',
  'On ne va pas rester.',
  'Elle ne va pas finir le rapport ce soir.',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE PASSÉ COMPOSÉ IS a2.05 AND IT IS NOT CONJUGATED ANYWHERE
 * ═══════════════════════════════════════════════════════════════════════ */

/** What this lesson hands forward, and the reason it matters more here than a
 *  deferral usually does: a2.05 is told to extend THIS lesson's rule, so the
 *  two wordings have to match. The rule is exported and a2.05 can compare it
 *  rather than remember it. */
export const PAST_DEFERRAL =
  `The next lesson puts a past tense in front of a second verb the same way this one puts aller there, and the negative behaves exactly as it does here. That is ${unitRef(PAST_UNIT)}.`;

const PARTICIPLE = '(?:fini|finis|finie|finies|choisi|choisis|dormi|parti|partis|partie|parties|sorti|sortis|servi|senti|v[ée]cu|plu|attendu|vendu|entendu|r[ée]pondu|perdu|rendu|descendu|re[çc]u|aper[çc]u|voulu|pu|d[ûu]|su|connu|lu|relu|vu|revu|venu|revenu|devenu|tenu|couru|bu|cru|eu|[ée]t[ée]|mis|remis|promis|assis|pris|appris|compris|surpris|dit|redit|[ée]crit|d[ée]crit|conduit|produit|construit|fait|refait|ouvert|offert|couvert|d[ée]couvert|souffert|mort|morts|morte)';
const ER_PARTICIPLE = '[\\p{L}]{2,}(?:é|és|ée|ées)';
const ADV = '(?:pas\\s+|jamais\\s+|plus\\s+|bien\\s+|déjà\\s+|toujours\\s+|beaucoup\\s+)?';

/** a2.18's shape, unchanged, which is a2.14 §6 and a2.17 §7: a French subject
 *  pronoun AND a participle from a list, rather than a word that ends in a
 *  vowel. Copied deliberately rather than imported, so a2.18 changing its own
 *  guard cannot silently change this lesson's. */
export const COMPOUND_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:j['’]ai|tu\\s+as|il\\s+a|elle\\s+a|on\\s+a|nous\\s+avons|vous\\s+avez|ils\\s+ont|elles\\s+ont`
  + `|je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+êtes|ils\\s+sont|elles\\s+sont)`
  + `\\s+${ADV}(?:${ER_PARTICIPLE}|${PARTICIPLE})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const COMPOUND_MUST_FIRE: readonly string[] = [
  "J'ai travaillé hier.",
  'Elle a fini le rapport.',
  'Nous avons mangé tôt.',
  'Je suis parti à huit heures.',
  "Tu as pris le train.",
];

export const COMPOUND_MUST_NOT_FIRE: readonly string[] = [
  'You did not stall on a word you had not learned.',
  'Je vais partir.',
  'Il va rester ici.',
  'Elle va finir le rapport ce soir.',
  'A past tense is coming, and it is not this lesson.',
  'Il est midi.',
  'Elle est ici aussi.',
  'On est prêt.',
  'The next lesson puts a past tense on the front of a sentence.',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DROPPED ne, WHICH IS a1.18's AND IS RECEPTION ONLY
 * ═══════════════════════════════════════════════════════════════════════ */

/** a1.18 introduced ne-drop FOR RECEPTION ONLY and produced it nowhere, and it
 *  said so on eight of its own screens. This lesson agrees with it rather than
 *  restating it: one receptive row, shown once, asked about in exactly one ear
 *  question, and in no dictée, no speak list and no typed answer.
 *
 *  The line below is this lesson's, and the second half of it is a1.18's own
 *  claim in a1.18's own words. */
export const NE_DROP =
  'In ordinary speech the ne is very often just not said. « Je vais pas sortir » is what you will hear, and the pas behind aller is carrying the whole negative on its own. Recognise it. In writing, both halves every time.';

/** a1.18's wording, quoted so this lesson cannot contradict it. Verbatim from
 *  its roundup. */
export const A118_NE_DROP =
  'In writing, both halves every time. In speech the ne very often goes, and you need to hear it.';

/** The receptive row is SHOWN and never asked for. Its id is named so the
 *  guards can hold it out of every production surface. */
export const NE_DROP_FR = 'Je vais pas sortir.';
export const NE_DROP_FULL_FR = 'Je ne vais pas sortir.';

/* ══════════════════════════════════════════════════════════════════════════
 *  dans, AND THE LOOP a2.18 ASKED THIS LESSON TO CLOSE
 * ═══════════════════════════════════════════════════════════════════════ */

/** The pair that closes it: a2.18's own published sentence and this lesson's
 *  verb-in-front version of the same thing, on one screen. Both are rows. */
export const DANS_PAIR = {
  theirs: 'Je pars dans dix minutes.',
  theirsId: 'fr.a2.prepositions-essentielles.172',
  mine: 'Je vais partir dans dix minutes.',
  why: `${Cap(unitRef(TIME_UNIT))} taught the left one: a present tense about something ahead, which is ordinary French. The right one is the same fact with a verb in front, and both are correct.`,
} as const;

/** And the second one, which is a2.18's own question turned into a plan. */
export const DANS_PAIR_TWO = {
  theirs: 'On mange dans une heure ?',
  mine: 'On va manger dans une heure.',
} as const;

/** Every question in the exam needs a time frame that makes the future reading
 *  natural, which the brief asks for and which is a real constraint: « je vais
 *  manger » with no time on it is ambiguous between a plan and a movement. The
 *  four this lesson uses, all read off published rows. */
export const TIME_FRAMES: readonly { fr: string; respell: string; readOff: string }[] = [
  { fr: 'ce soir', respell: 'suh SWAR', readOff: 'fr.a2.prepositions-essentielles.151' },
  { fr: 'demain', respell: 'duh-MAⁿ', readOff: 'fr.a2.verbes.360' },
  { fr: 'dans dix minutes', respell: 'dAHⁿ dee mee-NÜT', readOff: 'fr.a2.prepositions-essentielles.184' },
  { fr: 'samedi', respell: 'sam-DEE', readOff: 'fr.sons.jours-et-mois.006' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLING DECISIONS, MEASURED
 * ═══════════════════════════════════════════════════════════════════════ */

/** ONE SPELLING PER WORD ACROSS THE LESSON, and every one of them was READ OFF
 *  a published row rather than invented. a2.17 §3 and a2.16 §7.
 *
 *  Three words in this lesson carry a second published spelling and the second
 *  one is not taken. None of the three is a violation of a stated rule, so
 *  invariants §9 forbids repairing either side, and NOT_REPAIRED records them.
 *
 *      partir       par-TEER    7 rows, including the headword this build takes
 *                   pahr-TEER   1 row, fr.a2.verbes.014, in this lesson's theme
 *      payer        pay-YAY     fr.sons.verbes-essentiels.059 AND a2.13's own
 *                               fr.a2.verbes.347, which this lesson imports
 *                   peh-YAY     3 rows
 *      travailler   trah-vah-YAY  5 rows including fr.a2.verbes.031
 *                   tra-va-YAY    2 rows                                     */
export const RESPELL_CONVENTION =
  'Partir is par-TEER, payer is pay-YAY and travailler is trah-vah-YAY on every screen in this lesson. All three were read off published rows and all three have a second published spelling that is left alone.';

export const AHN = 'AHⁿ';
export const DANS_RESPELL = 'dAHⁿ';

/** THE ONE NASAL IN THIS LESSON THE CHECKER CANNOT SEE.
 *
 *  Corrections §6: `hasPlainNasalFor` needs the n or m to END a token, so a
 *  nasal followed by a consonant INSIDE the token is invisible. Measured over
 *  every superscript this build writes: 16 seen, 1 missed, and the one is
 *  `VYAHⁿD` in « ...manger de viande ce soir. », where a D follows the nasal.
 *
 *  It is asserted BY NAME in all three layers, and the blindness itself is
 *  asserted as a negative so the day the checker improves this build finds out
 *  rather than carrying a dead list. The value was read off fr.a1.cuisine.014,
 *  which publishes `lah VYAHⁿD`; fr.a1.au-restaurant.072 publishes `lah VYAHND`
 *  and is neither repaired nor displayed. */
export const BLIND_NASAL = {
  fr: 'la viande',
  token: 'VYAHⁿD',
  broken: 'VYAHND',
  inRow: 'fr.a2.negation-et-restriction.158',
  readOff: 'fr.a1.cuisine.014',
  why: 'A nasal followed by a consonant inside the token. Corrections §6, and the only one in this lesson: the other sixteen close their nasal at a token boundary, which is the one shape the checker can see.',
} as const;

/** v2: FIFTEEN, NOT SIXTEEN. Dropping the « Non, » off fr.a2.verbes.524 to get
 *  the scene's break card inside its line budget took a `nohⁿ` with it, and the
 *  batch caught the arithmetic on the first dry run after the edit. */
export const EXPECTED_NASALS_SEEN = 15;
export const EXPECTED_NASALS_MISSED = 1;

/** Corrections §6 asks for the false-positive path to be looked for and its
 *  absence reported. FOUR candidates were tried through the real function and
 *  NOT ONE fires. The words with a real /n/ or /m/ in this lesson are `samedi`,
 *  `semaine`, `demain` and `une`, and every one of them is either rescued by a
 *  vowel behind the letter in the French or does not put the letter at the end
 *  of a token at all. Asserted as a negative in all three layers. */
export const FALSE_POSITIVE_CANDIDATES: readonly { fr: string; respell: string }[] = [
  { fr: 'samedi', respell: 'sam-DEE' },
  { fr: 'la semaine prochaine', respell: 'LAH suh-MEN proh-SHEN' },
  { fr: 'une heure', respell: 'ün UHR' },
  { fr: 'la personne', respell: 'lah pehr-SONN' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE MATRIX, MEASURED THROUGH THE REAL FUNCTION
 * ═══════════════════════════════════════════════════════════════════════ */

/** Corrections §4 costing this lesson five of its eight persons.
 *
 *  Every entry is checked through the REAL `dicteeMode` in the batch, the merge
 *  and the test, in both directions: the three that CAN be spelled letter by
 *  letter must be, and the five that cannot must carry no dictation drill.
 *  Written out rather than derived, because a derived table agrees with itself.
 *
 *  `je` is the person a learner most wants to produce and it is one letter over
 *  the limit with any six-letter infinitive. That is the finding, and it is the
 *  reason the dictée is `il`, `tu` and `on`. */
export const DICTEE_MATRIX: readonly { person: string; affirmative: number; negative: number; negativeFits: boolean }[] = [
  { person: 'je', affirmative: 12, negative: 17, negativeFits: false },
  { person: 'tu', affirmative: 11, negative: 16, negativeFits: true },
  { person: 'il', affirmative: 10, negative: 15, negativeFits: true },
  { person: 'on', affirmative: 10, negative: 15, negativeFits: true },
  { person: 'elle', affirmative: 12, negative: 17, negativeFits: false },
  { person: 'nous', affirmative: 16, negative: 20, negativeFits: false },
  { person: 'vous', affirmative: 15, negative: 19, negativeFits: false },
  { person: 'ils', affirmative: 13, negative: 18, negativeFits: false },
];

export const DICTEE_LIMIT = 16;
export const DICTEE_CLAIM =
  'The affirmative spells letter by letter in all eight persons and the negative in three. Ne and pas cost five letters and je is one letter over, for every six-letter naming form in the language.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUTHORED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Role = 'shape' | 'owns' | 'any' | 'when' | 'register' | 'scene' | 'talk';

export type FuturRow = Omit<Item, 'drills'> & {
  drills: string[];
  role: Role;
  /** The person this row is in, where it is part of the paradigm, so a section
   *  names a PERSON rather than an index. Named `person` and not `kind`,
   *  because `Item` already has a `kind` and an intersection of two different
   *  `kind`s reduces to `never` — a2.04 lost a build hour to exactly that. */
  person?: string;
};

const V = (n: number) => `fr.a2.verbes.${n}`;

const S = (
  n: number, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], tags: string[], notes: string, person?: string,
): FuturRow => ({
  id: V(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags, drills, version: 1, role, ...(person ? { person } : {}),
}) as FuturRow;

/** Corrections §4: a row carries `dictation` only where `dicteeMode()` puts it
 *  in LETTERS mode, and the batch runs the REAL function over every row that
 *  carries the drill AND over every row that does not. */
const D = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const NO_D = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** The receptive row: no voiceflash and no dictation, because both are
 *  production surfaces and a1.18 produces the dropped ne nowhere. */
const RECEPTIVE = ['sentence', 'flashcard', 'review'];

const T = ['verbes', 'futur-proche'];
const TN = ['verbes', 'futur-proche', 'negatif'];

/** THE AUTHORED ROWS.
 *
 *  NOT ONE HEADWORD AMONG THEM, and not one gendered single word, so nothing
 *  here can join a1.03's measured ending population by either route — neither
 *  by authoring (invariants §5) nor by the CARRY a2.04 discovered (ledger,
 *  a2.04 §0). The batch proves it against Postgres and the merge against the
 *  seed. */
export const FUTUR_PROCHE: FuturRow[] = [
  /* ── The construction, six persons, one frame ─────────────────────────────
   *
   * Corrections §3 holds for this half: 721 published sentences put a
   * conjugated `aller` in front of an infinitive and TEN of them carry a
   * respelling, none of them in one frame. The paradigm is authored. */
  S(501, 'Je vais partir.', 'I am going to leave.', 'zhuh veh par-TEER', '/ʒə vɛ paʁ.tiʁ/', 'shape', D, T, 'The frame, and twelve letters, so the dictée can take it. Aller in the present and the naming form behind it, untouched.', 'je'),
  S(502, 'Tu vas partir.', 'You are going to leave.', 'tü vah par-TEER', '/ty va paʁ.tiʁ/', 'shape', D, T, 'The person moved and the second verb did not. Eleven letters.', 'tu'),
  S(503, 'Il va partir.', 'He is going to leave.', 'eel vah par-TEER', '/il va paʁ.tiʁ/', 'shape', D, T, 'The shortest of the six, ten letters, and the one the dictée uses for the pair because its negative also fits.', 'il'),
  S(504, 'Nous allons partir.', 'We are going to leave.', 'noo za-lohⁿ par-TEER', '/nu.za.lɔ̃ paʁ.tiʁ/', 'shape', D, T, 'Sixteen letters, exactly at the limit. The liaison pulls a z across into allons and the nasal survives it.', 'nous'),
  S(505, 'Vous allez partir.', 'You are going to leave. (to more than one person, or politely)', 'voo za-lay par-TEER', '/vu.za.le paʁ.tiʁ/', 'shape', D, T, 'The same liaison, and the ending nobody hears any difference in.', 'vous'),
  S(506, 'Ils vont partir.', 'They are going to leave.', 'eel vohⁿ par-TEER', '/il vɔ̃ paʁ.tiʁ/', 'shape', D, T, 'Thirteen letters. The plural of the form the singular already had, and partir has still not moved.', 'ils'),

  /* ── The Owns: where the two halves land ─────────────────────────────────
   *
   * The same six sentences with the negative in them, so the pair differs by
   * one thing and the one thing is the position. Only three of the six can be
   * a dictée target: see DICTEE_MATRIX. */
  S(507, 'Je ne vais pas partir.', 'I am not going to leave.', 'zhuh nuh veh pah par-TEER', '/ʒə nə vɛ pa paʁ.tiʁ/', 'owns', NO_D, TN, 'SEVENTEEN LETTERS, so dicteeMode puts it in WORD mode and it carries no dictation drill. Its affirmative is twelve and does. One letter decides which half of the pair the dictée can test.', 'je'),
  S(508, 'Tu ne vas pas partir.', 'You are not going to leave.', 'tü nuh vah pah par-TEER', '/ty nə va pa paʁ.tiʁ/', 'owns', D, TN, 'Sixteen letters, at the limit, and one of the three negatives the dictée can take.', 'tu'),
  S(509, 'Il ne va pas partir.', 'He is not going to leave.', 'eel nuh vah pah par-TEER', '/il nə va pa paʁ.tiʁ/', 'owns', D, TN, 'Fifteen letters. The pair with row 503 is the one the dictée runs, because both halves of it fit.', 'il'),
  S(510, "Nous n'allons pas partir.", 'We are not going to leave.', 'noo na-lohⁿ pah par-TEER', '/nu na.lɔ̃ pa paʁ.tiʁ/', 'owns', NO_D, TN, 'The ne elides in front of the vowel and the liaison z goes with it: noo na-lohⁿ, not noo za-lohⁿ. Twenty letters.', 'nous'),
  S(511, "Vous n'allez pas partir.", 'You are not going to leave. (to more than one person, or politely)', 'voo na-lay pah par-TEER', '/vu na.le pa paʁ.tiʁ/', 'owns', NO_D, TN, 'The same elision and the same lost liaison. Nineteen letters.', 'vous'),
  S(512, 'Ils ne vont pas partir.', 'They are not going to leave.', 'eel nuh vohⁿ pah par-TEER', '/il nə vɔ̃ pa paʁ.tiʁ/', 'owns', NO_D, TN, 'Eighteen letters. Six persons, one position for the two halves, and the naming form has not moved once.', 'ils'),

  /* ── Any naming form slots in ────────────────────────────────────────────
   *
   * Six sentences, six different verbs, six different people, and a time frame
   * on four of them so the future reading is not left to be guessed. The whole
   * argument of the lesson is that the slot takes anything, so these reach
   * across themes rather than repeating the frame. */
  S(513, 'Je vais payer.', 'I am going to pay.', 'zhuh veh pay-YAY', '/ʒə vɛ pe.je/', 'any', D, T, `The same naming form as ${unitRef(MODAL_UNIT, 'a2')}'s own card « Je peux payer. », behind a different first verb. Eleven letters.`, 'je'),
  S(514, 'Tu vas travailler demain.', 'You are going to work tomorrow.', 'tü vah trah-vah-YAY duh-MAⁿ', '/ty va tʁa.va.je də.mɛ̃/', 'any', NO_D, T, 'A four-syllable naming form, and the slot does not care. Twenty-one letters, so no dictée.', 'tu'),
  S(515, 'Il va venir ce soir.', 'He is going to come tonight.', 'eel va vuh-NEER suh SWAR', '/il va və.niʁ sə swaʁ/', 'any', NO_D, T, `Venir behind aller, which is the other verb ${unitRef(ALLER_UNIT)} taught, and a time frame that fixes the reading.`, 'il'),
  S(516, 'Elle va sortir ce soir.', 'She is going to go out tonight.', 'ehl va sor-TEER suh SWAR', '/ɛl va sɔʁ.tiʁ sə swaʁ/', 'any', NO_D, T, 'The affirmative of a published negative this lesson imports, in another person, so the pair crosses two themes.', 'elle'),
  S(517, 'Nous allons manger tôt.', 'We are going to eat early.', 'noo za-lohⁿ mahⁿ-ZHAY TOH', '/nu.za.lɔ̃ mɑ̃.ʒe to/', 'any', NO_D, T, `Tôt is ${unitRef('a2.10')} and a2.10.l2\'s dictée frame word, reused on purpose: the learner has spelled it twice already.`, 'nous'),
  S(518, 'Je vais rester ici.', 'I am going to stay here.', 'zhuh veh res-TAY ee-SEE', '/ʒə vɛ ʁɛs.te i.si/', 'any', NO_D, T, 'The answer to the question the trap asks, and the one sentence in the set that is about not moving.', 'je'),

  /* ── The time frames, and the loop a2.18 asked for ───────────────────────*/
  S(519, 'Je vais partir dans dix minutes.', 'I am going to leave in ten minutes.', `zhuh veh par-TEER ${DANS_RESPELL} dee mee-NÜT`, '/ʒə vɛ paʁ.tiʁ dɑ̃ di mi.nyt/', 'when', NO_D, T, `The verb-in-front version of ${unitRef(TIME_UNIT, 'a2')}'s own « Je pars dans dix minutes. », which is imported and sits beside it. The respelling of the time phrase is that lesson's, unchanged.`, 'je'),
  S(520, 'On va manger dans une heure.', 'We are going to eat in an hour.', `ohⁿ va mahⁿ-ZHAY ${DANS_RESPELL} zün UHR`, '/ɔ̃ va mɑ̃.ʒe dɑ̃.zyn œʁ/', 'when', NO_D, T, `${Cap(unitRef(TIME_UNIT))} published « On mange dans une heure ? » as a question and this is the same plan with a verb in front. On rather than nous, which is ${unitRef('a2.01')}'s rule for the whole level.`, 'on'),

  /* ── The register pair, and the second one is RECEPTIVE ──────────────────*/
  S(521, NE_DROP_FULL_FR, 'I am not going to go out.', 'zhuh nuh veh pah sor-TEER', '/ʒə nə vɛ pa sɔʁ.tiʁ/', 'register', NO_D, TN, `The written form, both halves, which is what ${unitRef('a1.18')} says to keep.`, 'je'),
  S(522, NE_DROP_FR, 'I am not going to go out. (spoken French, with the ne dropped)', 'zhuh veh pah sor-TEER', '/ʒə vɛ pa sɔʁ.tiʁ/', 'register', RECEPTIVE, [...TN, 'receptive'], `THE ONE RECEPTIVE ROW. Fifteen letters, so the dictée COULD take it and must not: ${unitRef('a1.18')} introduced the dropped ne for reception only and produces it nowhere. No voiceflash, no dictation, no typed answer, and one ear question.`, 'je'),

  /* ── The scene ───────────────────────────────────────────────────────────
   *
   * Doctrine §B.2. He has the first half and goes looking for where the
   * negative belongs; the sentence ends before either half arrives, and what
   * comes out is perfect French meaning the opposite. */
  S(523, 'Tu vas travailler ce soir ?', 'Are you going to work tonight?', 'tü vah trah-vah-YAY suh SWAR', '/ty va tʁa.va.je sə swaʁ/', 'scene', NO_D, T, `Her question, and every word in it is one the learner has had since ${unitRef('a2.01')}. The answer is one word longer than the question.`, 'tu'),
  // v2: THE « Non, » CAME OFF, AND A PIXEL 6 IS THE ONLY REASON WE KNOW.
  // « Non, je ne vais pas travailler. » is 31 characters and WRAPPED to two
  // lines in the scene's break card, which pushed the card's own Continue under
  // the pager bar. That is ledger §7's defect and a2.14 §9.1's measurement
  // exactly: 31 characters wrapped there too. At 26 it is one line, and the
  // sentence is a complete answer to the question she asked without it.
  S(524, 'Je ne vais pas travailler.', 'No, I am not going to work.', 'zhuh nuh veh pah trah-vah-YAY', '/ʒə nə vɛ pa tʁa.va.je/', 'scene', NO_D, TN, 'What he meant, in full. Twenty letters, so it is not a dictée target either.', 'je'),
  S(525, 'Ah, d\'accord. À ce soir, alors.', 'Ah, all right. See you tonight, then.', 'ah da-KOR · a suh SWAR ah-LOR', '/a da.kɔʁ a sə swaʁ a.lɔʁ/', 'scene', NO_D, T, 'She books him in, cheerfully, on the strength of a sentence that was correct. Nobody corrected anything, so nothing was learned and he is now expected.'),

  /* ── The conversation, for the role play ─────────────────────────────────
   *
   * Four turns and every one of them is a plan, which is what this construction
   * is actually for. */
  S(526, 'Tu vas faire quoi ce soir ?', 'What are you going to do tonight?', 'tü vah FEHR kwah suh SWAR', '/ty va fɛʁ kwa sə swaʁ/', 'talk', NO_D, T, 'The commonest question in the language after « ça va ? », and it is this construction with a question word dropped into the slot.', 'tu'),
  S(527, 'Je vais manger avec des amis.', 'I am going to eat with friends.', 'zhuh veh mahⁿ-ZHAY ah-VEK day-za-MEE', '/ʒə vɛ mɑ̃.ʒe a.vɛk de.za.mi/', 'talk', NO_D, T, 'A plan with something after the naming form, which nothing about the rule minds.', 'je'),
  S(528, 'Tu vas venir avec nous samedi ?', 'Are you going to come with us on Saturday?', 'tü vah vuh-NEER ah-VEK noo sam-DEE', '/ty va və.niʁ a.vɛk nu sam.di/', 'talk', NO_D, T, 'The invitation, with the day on the end. Samedi rather than the weekend, which is respelled four different ways in this corpus and is nobody\'s decision to make here.', 'tu'),
  S(529, 'Non, je ne vais pas venir.', 'No, I am not going to come.', 'nohⁿ zhuh nuh veh pah vuh-NEER', '/nɔ̃ ʒə nə vɛ pa və.niʁ/', 'talk', NO_D, TN, 'The refusal, in full, which is the sentence the scene never reached.', 'je'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED SETS
 * ═══════════════════════════════════════════════════════════════════════ */

export const SHAPE_ROWS = FUTUR_PROCHE.filter((r) => r.role === 'shape');
export const OWNS_ROWS = FUTUR_PROCHE.filter((r) => r.role === 'owns');
export const ANY_ROWS = FUTUR_PROCHE.filter((r) => r.role === 'any');
export const WHEN_ROWS = FUTUR_PROCHE.filter((r) => r.role === 'when');
export const REGISTER_ROWS = FUTUR_PROCHE.filter((r) => r.role === 'register');
export const SCENE_ROWS = FUTUR_PROCHE.filter((r) => r.role === 'scene');
export const TALK_ROWS = FUTUR_PROCHE.filter((r) => r.role === 'talk');

export const AUTHORED_IDS: string[] = FUTUR_PROCHE.map((r) => r.id);

/** THE PAIRS THE OWNS ACT RESTS ON: the affirmative and its negative, by id, in
 *  person order. The layout claim the brief asks the test to assert is that
 *  these appear ADJACENT in one section, so the pairing is declared here and
 *  every layer walks it. */
export const PAIRS: readonly { person: string; posId: string; negId: string }[] =
  PERSONS.map((p, i) => ({ person: p.person, posId: V(501 + i), negId: V(507 + i) }));

/** The three the dictée can take, both halves. Derived from DICTEE_MATRIX and
 *  checked against the real `dicteeMode` in all three layers. */
export const DICTEE_PERSONS = DICTEE_MATRIX.filter((d) => d.negativeFits).map((d) => d.person);

/** One authored row by its French. Throws: a card silently missing its row
 *  looks like a card that never wanted one. */
export function row(fr: string): FuturRow {
  const r = FUTUR_PROCHE.find((x) => x.fr === fr);
  if (!r) throw new Error(`a2.19: no authored row for "${fr}".`);
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
  use: 'headword' | 'paradigm' | 'place' | 'modal' | 'time' | 'negative';
  why: string;
};

/** SEVENTEEN ROWS OUT OF FIVE THEMES, AND NOT ONE HEADWORD AUTHORED, which is
 *  corrections §2 holding for the twelfth build in a row.
 *
 *  Six of them are a2.02's `aller` paradigm and four are published negatives
 *  with no respelling at all. */
export const IMPORTED: readonly Import[] = [
  // The verb this lesson is built on, and the six naming forms it puts behind it.
  { id: 'fr.sons.verbes-essentiels.003', fr: 'aller', use: 'headword', why: 'The headword, [ah-LAY], clean. fr.sons.consonnes.143 is a second copy at [a-LAY] and is deliberately not taken: one spelling per word inside one lesson.' },
  { id: 'fr.sons.consonnes.098', fr: 'partir', use: 'headword', why: 'THE FRAME NAMING FORM, [par-TEER], clean, and it carries a dictation drill already. ABSENT FROM THE SEED, so the merge has to carry it or every card in the paradigm draws blank. fr.a2.verbes.014 is a second copy at [pahr-TEER] IN THIS LESSON\'S OWN THEME and is left alone: a variant is not a violation.' },
  { id: 'fr.sons.muettes.037', fr: 'manger', use: 'headword', why: 'Clean at [mahⁿ-ZHAY], from the theme that already went through the nasals. fr.a1.cuisine.041 and fr.a1.rp-repas.013 publish [mahn-ZHAY], which the checker flags, and neither is displayed or repaired.' },
  { id: 'fr.a2.verbes.031', fr: 'travailler', use: 'headword', why: `Clean at [trah-vah-YAY], and already in this lesson\'s own theme, imported by ${unitRef('a2.01')}. Five published rows spell it this way and two spell it [tra-va-YAY].` },
  { id: 'fr.sons.verbes-essentiels.041', fr: 'sortir', use: 'headword', why: 'Clean at [sor-TEER]. fr.a1.amis.025 publishes [sohr-TEER] and is not taken.' },
  { id: 'fr.sons.verbes-essentiels.059', fr: 'payer', use: 'headword', why: `Clean at [pay-YAY], and it is the spelling ${unitRef('a2.13')}\'s own « Je peux payer. » carries, which this lesson imports. Three rows publish [peh-YAY], one of them in this theme, and none is repaired.` },
  { id: 'fr.sons.verbes-essentiels.010', fr: 'venir', use: 'headword', why: `Clean at [vuh-NEER]. The other verb ${unitRef('a2.02')} taught, and the one the role play refuses an invitation with.` },

  // a2.02's OWN PARADIGM, which is the other job of the same verb.
  { id: 'fr.a2.verbes.261', fr: 'Je vais au parc.', use: 'paradigm', why: `${Cap(unitRef(ALLER_UNIT, 'a2'))}'s own card, [zhuh veh oh PARK], in this lesson's theme. The place job in the first person, and the left half of the trap.` },
  { id: 'fr.a2.verbes.266', fr: 'Ils vont au parc.', use: 'paradigm', why: `${Cap(unitRef(ALLER_UNIT, 'a2'))}'s plural, [eel vohⁿ oh PARK]. Two of its six are taken rather than all six: the contrast needs a pair in two persons and the paradigm itself is that lesson's to teach.` },
  { id: 'fr.a2.prepositions-essentielles.130', fr: 'Je vais à Paris.', use: 'place', why: `${Cap(unitRef(PLACE_UNIT, 'a2'))}'s own card, [zhuh veh a pa-REE], published one seq position back. THE BRIEF'S EXACT TRAP SENTENCE, already written, already respelled, and imported rather than authored a second time.` },

  // a2.13's card, so the back-reference is two cards with one naming form.
  { id: 'fr.a2.verbes.347', fr: 'Je peux payer.', use: 'modal', why: `${Cap(unitRef(MODAL_UNIT, 'a2'))}'s own frame row, [zhuh PUH pay-YAY]. Its lesson's rule and this lesson's rule are two halves of one thing, and putting its card beside « Je vais payer. » says so with two cards instead of a sentence about a neighbouring unit.` },

  // a2.18's two, which close the loop it asked for by name.
  { id: 'fr.a2.prepositions-essentielles.184', fr: 'dans dix minutes', use: 'time', why: `${Cap(unitRef(TIME_UNIT, 'a2'))}'s phrase card, [${DANS_RESPELL} dee mee-NÜT]. Every time phrase this lesson prints uses that lesson's spelling, unchanged.` },
  { id: 'fr.a2.prepositions-essentielles.172', fr: 'Je pars dans dix minutes.', use: 'time', why: `${Cap(unitRef(TIME_UNIT, 'a2'))}'s own sentence, [zhuh PAR ${DANS_RESPELL} dee mee-NÜT]. The present tense doing future work, which that lesson taught and named this one for. It sits beside « Je vais partir dans dix minutes. » so both halves of the hand-off are on one screen.` },

  // THE PUBLISHED NEGATIVES. Four of eleven, and every one gets a respelling
  // it never had. See RESPELL_ADDITIONS.
  { id: 'fr.a2.negation-et-restriction.107', fr: 'Je ne vais pas sortir ce soir.', use: 'negative', why: `NO RESPELLING and no IPA. Published with a flashcard and a dictation drill and nothing to say it with, which is ${unitRef('a2.13')} §1 in this lesson\'s own subject. ABSENT FROM THE SEED.` },
  { id: 'fr.a2.negation-et-restriction.152', fr: 'Ils ne vont pas venir à la fête.', use: 'negative', why: `NO RESPELLING. The plural, in a theme this lesson does not write into, with a verb ${unitRef('a2.02')} taught. ABSENT FROM THE SEED.` },
  { id: 'fr.a2.negation-et-restriction.158', fr: 'Je ne vais pas manger de viande ce soir.', use: 'negative', why: 'NO RESPELLING, and it holds the one nasal in this lesson the checker cannot see. See BLIND_NASAL. ABSENT FROM THE SEED.' },
  { id: 'fr.a2.negation-et-restriction.164', fr: 'Elle ne va pas finir le rapport ce soir.', use: 'negative', why: `NO RESPELLING. An -IR verb from ${unitRef('a2.10')} behind the same construction, in a person the paradigm does not use. ABSENT FROM THE SEED.` },
];

export const IMPORTED_IDS: readonly string[] = IMPORTED.map((i) => i.id);
export const EXPECTED_IMPORTED = 17;
export const EXPECTED_AUTHORED = 29;
export const EXPECTED_SOURCE_THEMES = 5;

/** NOT ONE IMPORTED ROW IS A GENDERED SINGLE WORD.
 *
 *  a2.04's ledger amendment §0: a1.03's ending population is measured off THE
 *  SEED, and a CARRY is what puts a row there, so importing a gendered noun
 *  moves a1.03's printed figures even though Postgres already had the row. Every
 *  row above is a verb in its naming form, a phrase or a sentence, and `gender`
 *  is null on all seventeen, measured. */
export const ITEM_IMPORT_IDS: readonly string[] = IMPORTED_IDS;
export const EXPECTED_DISPLAY_ONLY = 0;

/** a1.03's ending population measured off the SEED, through the real function,
 *  against the committed seed at version 37. Nothing this build does may move
 *  it, by either route. */
export const A103_SEED_POPULATION = 1890;

/** SIX OF THE SEVENTEEN ARE ABSENT FROM THE SEED. Corrections §10: the seed is
 *  a CUT and a lesson whose itemIds resolve to nothing renders empty cards.
 *  Measured against the committed seed at version 37, and the merge re-measures
 *  it. `fr.sons.consonnes.098` is the frame naming form and the other five are
 *  four of the published negatives plus nothing else. */
export const ABSENT_FROM_SEED: readonly string[] = [
  'fr.sons.consonnes.098',
  'fr.a2.negation-et-restriction.107',
  'fr.a2.negation-et-restriction.152',
  'fr.a2.negation-et-restriction.158',
  'fr.a2.negation-et-restriction.164',
];

export const importOf = (id: string): Import => {
  const i = IMPORTED.find((x) => x.id === id);
  if (!i) throw new Error(`a2.19: ${id} is not in IMPORTED.`);
  return i;
};

export const importsFor = (use: Import['use']): readonly Import[] => IMPORTED.filter((i) => i.use === use);

/** The four published negatives, in id order, so a section names the set rather
 *  than restating four ids. */
export const PUBLISHED_NEGATIVE_IDS: readonly string[] = importsFor('negative').map((i) => i.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  ROWS READ AND NOT IMPORTED
 * ═══════════════════════════════════════════════════════════════════════ */

export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.a2.negation-et-restriction.157', fr: 'Il ne va pas prendre le train demain.', why: 'NO RESPELLING, and supplying one would need two different spellings of the same vowel in one sentence: `le train` is published TRAHⁿ, TRAHN and TRAN, and `demain` is duh-MAⁿ in this lesson\'s own theme. Also `prendre` is a2.15\'s headline verb. The best of the eleven on its own terms and the one this lesson cannot say.' },
  { id: 'fr.a2.negation-et-restriction.166', fr: "Il ne va pas conduire aujourd'hui.", why: 'NO RESPELLING, and two notation debts on one row: `conduire` is published four times as kohn-DWEER, which the checker flags, and once as kohⁿ-DWEER, and `aujourd\'hui` carries the /ɥ/ glide, which invariants §9 records as already spelled three ways.' },
  { id: 'fr.a2.negation-et-restriction.108', fr: 'Tu ne vas pas aimer cette nouvelle.', why: 'NO RESPELLING, and fr.a2.negation-et-restriction.161 is the same sentence with one more word on it. Importing one of a near-duplicate pair puts half of somebody else\'s decision into this lesson.' },
  { id: 'fr.a2.negation-et-restriction.109', fr: 'Il ne va pas accepter cette offre.', why: 'NO RESPELLING, and fr.a2.negation-et-restriction.148 is the same sentence in another person. Same reason.' },
  { id: 'fr.a1.expressions-utiles.220', fr: 'À mon avis, ce plan ne va pas marcher.', why: 'NO RESPELLING, and its `va` is not a plan at all: « ce plan ne va pas marcher » is a prediction about a thing, which is a third job for this construction and one this lesson does not teach.' },
  { id: 'fr.b1.projets-et-futur.012', fr: "Tant qu'il n'aura pas son visa, il ne va pas pouvoir voyager.", why: 'B1, and it holds `n\'aura pas`, which is the one-word future this lesson names and refuses. The only published sentence in the corpus that puts both futures in one line, and it is the reason the OTHER_FUTURE card exists.' },
  { id: 'fr.a2.verbes.014', fr: 'partir', why: 'A second copy of the frame naming form IN THIS LESSON\'S OWN THEME, at [pahr-TEER] against the [par-TEER] seven other rows carry. Neither is flagged and neither breaks a stated rule, so invariants §9 forbids repairing either; this lesson displays the one the seven agree on.' },
  { id: 'fr.a2.verbes.025', fr: 'payer', why: `The same shape on the other frame verb: [peh-YAY] in this theme against the [pay-YAY] ${unitRef('a2.13')} published on its own card. Not repaired and not displayed.` },
  { id: 'fr.a1.verbes-essentiels.016', fr: 'Le cours commence dans dix minutes.', why: 'FLAGGED at [... dahn dee mee-NEWT], and it spells /y/ as NEW rather than Ü. a2.18 is the lesson that owns `dans` and it did not take this row either.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS THIS BUILD SUPPLIES, AND THE ZERO IT REPAIRS
 *
 *  NOT ONE REPAIR, which a2.14 was the first build in the band to manage and
 *  which is asserted here rather than left as a silence. The reason is the same
 *  one: six of the seven naming forms come out of `verbes-essentiels`,
 *  `muettes` and `consonnes`, which the sons band already went through, and the
 *  three sentence imports were respelled by a2.02, a2.04, a2.13 and a2.18
 *  inside this same band. Every value this lesson displays was already correct.
 *
 *  What the corpus did NOT have is a respelling on any of the eleven published
 *  negatives. Four are supplied. a2.03 §7 built the merge path and the rule
 *  that makes it safe is one line: an addition may only land on a row whose
 *  respelling is EMPTY.
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string; fr: string; from: string; to: string;
  half: string; blind: boolean; house: boolean;
  readOff: string | null; readOffToken: string | null; why: string;
};

export const REPAIRS: readonly Repair[] = [];
export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = REPAIRS.filter((r) => !r.blind);
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = REPAIRS.filter((r) => r.blind);
export const ALL_REPAIRS: readonly Repair[] = REPAIRS;
export const EXPECTED_REPAIRS = 0;

export const NO_REPAIRS_CLAIM =
  'Every respelling this lesson displays was already correct in Postgres. Seven naming forms, three sentences from this band and two phrase cards, and not one of the seventeen needed a repair.';

/** THE FOUR SUPPLIED RESPELLINGS.
 *
 *  Every syllable in each was read off a published row and the row it was read
 *  off is named, so the claim can be checked rather than believed. The manifest
 *  generator re-checks that the source row still holds the token. */
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; readOff: readonly string[]; why: string }[] = [
  {
    id: 'fr.a2.negation-et-restriction.107',
    fr: 'Je ne vais pas sortir ce soir.',
    to: 'zhuh nuh veh pah sor-TEER suh SWAR',
    readOff: ['fr.a2.prepositions-essentielles.130', 'fr.sons.verbes-essentiels.041', 'fr.a2.prepositions-essentielles.151'],
    why: '`zhuh veh` off a2.04\'s « Je vais à Paris. », `sor-TEER` off the sortir headword, `suh SWAR` off a2.04\'s « Tu es chez toi ce soir ? ». Nothing invented.',
  },
  {
    id: 'fr.a2.negation-et-restriction.152',
    fr: 'Ils ne vont pas venir à la fête.',
    to: 'eel nuh vohⁿ pah vuh-NEER a la FEHT',
    readOff: ['fr.a2.verbes.266', 'fr.sons.verbes-essentiels.010', 'fr.a1.famille.093'],
    why: '`eel vohⁿ` off a2.02\'s « Ils vont au parc. », `vuh-NEER` off the venir headword, `FEHT` off « la fête », which five published rows spell that way against three that spell it FET.',
  },
  {
    id: 'fr.a2.negation-et-restriction.158',
    fr: 'Je ne vais pas manger de viande ce soir.',
    to: 'zhuh nuh veh pah mahⁿ-ZHAY duh VYAHⁿD suh SWAR',
    readOff: ['fr.sons.muettes.037', 'fr.a1.cuisine.014', 'fr.a2.prepositions-essentielles.151'],
    why: '`mahⁿ-ZHAY` off the manger headword this lesson imports, `VYAHⁿD` off fr.a1.cuisine.014. THE ONE BLIND NASAL IN THE LESSON is in this string: see BLIND_NASAL.',
  },
  {
    id: 'fr.a2.negation-et-restriction.164',
    fr: 'Elle ne va pas finir le rapport ce soir.',
    to: 'ehl nuh va pah fee-NEER luh ra-POR suh SWAR',
    readOff: ['fr.sons.verbes-essentiels.037', 'fr.a2.bureau.069', 'fr.a2.prepositions-essentielles.151'],
    why: '`fee-NEER` off the finir headword, which two rows agree on, `ra-POR` off « un rapport » in a2\'s bureau theme.',
  },
];

/** Rows found broken and left alone, because this build does not display them.
 *  Repairing a row nobody shows is how a build acquires a defect it cannot
 *  test (a2.18's rule, and a2.17 §1's). */
export const NOT_REPAIRED: readonly { id: string; fr: string; respell: string; why: string }[] = [
  { id: 'fr.a1.cuisine.041', fr: 'manger', respell: 'mahn-ZHAY', why: 'FLAGGED. A second copy of a naming form this lesson imports from `muettes`, where it is already correct.' },
  { id: 'fr.a1.rp-repas.013', fr: 'manger', respell: 'mahn-ZHAY', why: 'FLAGGED. A third copy, same reason.' },
  { id: 'fr.a1.rp-voyage.057', fr: 'demain', respell: 'duh-MAHN', why: 'FLAGGED. This lesson writes `duh-MAⁿ`, which is what a2.12 and a2.13 published in this theme, and it does not display the headword.' },
  { id: 'fr.sons.jours-et-mois.026', fr: 'demain', respell: 'duh-MAN', why: 'FLAGGED, and a second spelling of the same word. Not displayed.' },
  { id: 'fr.a1.au-restaurant.072', fr: 'la viande', respell: 'lah VYAHND', why: 'BLIND rather than flagged: the nasal is followed by a D inside the token, so the checker cannot see it. Not displayed; the value this lesson supplies was read off fr.a1.cuisine.014 instead.' },
  { id: 'fr.a1.deplacements.042', fr: 'conduire', respell: 'kohn-DWEER', why: 'FLAGGED, and three more rows publish the same value. The row that would have needed it is in READ_NOT_IMPORTED.' },
];

export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string[]; why: string }[] = [
  { id: 'fr.a2.negation-et-restriction.152', fr: 'Ils ne vont pas venir à la fête.', add: ['flashcard', 'sentence', 'voiceflash', 'review'], why: 'Carried `dictation` and nothing else, so it could not be released into a deck or spoken.' },
  { id: 'fr.a2.negation-et-restriction.158', fr: 'Je ne vais pas manger de viande ce soir.', add: ['flashcard', 'sentence', 'voiceflash', 'review'], why: 'The same.' },
  { id: 'fr.a2.negation-et-restriction.164', fr: 'Elle ne va pas finir le rapport ce soir.', add: ['flashcard', 'sentence', 'voiceflash', 'review'], why: 'The same.' },
  { id: 'fr.a2.negation-et-restriction.107', fr: 'Je ne vais pas sortir ce soir.', add: ['voiceflash', 'review'], why: 'Carried `flashcard`, `sentence` and `dictation`. Spoken practice draws only from rows carrying voiceflash.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT NO EAR QUESTION MAY ASK
 * ═══════════════════════════════════════════════════════════════════════ */

/** The ear has one job in this lesson and it is the dropped `ne`, which is a
 *  register fact and a listening fact at once. Everything below may NOT be
 *  offered as two options of one item, because the two members are one sound or
 *  one unstressed syllable apart and marking one right certifies a bug. */
export const NO_EAR_QUESTION: readonly (readonly [string, string])[] = [
  ['Je vais partir.', 'Je vais partir'],
  ['vais', 'vais pas'],
  ['il va', 'ils vont'],
  ['tu vas', 'tu ne vas pas'],
];

export const EAR_CLAIM =
  'The full negative and the spoken one differ by one unstressed syllable at the front, and that is the only thing in this lesson worth asking the ear about. Everything else here is word order, which you can see and cannot hear.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE COUNTS THE THREE LAYERS AGREE ON
 * ═══════════════════════════════════════════════════════════════════════ */

export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 30;
export const EXPECTED_TERMS = 8;
export const EXPECTED_TRAP_DRILLS = 2;
export const SHEET_ID = 'sheet.a2.19.futur';

/** THE SIXTH WIDTH DEFECT IN THIS BAND, AND A FIELD NOBODY HAD MEASURED.
 *
 *  FOUND ON A PIXEL 6, v1 to v2. A reference sheet's own title is drawn in the
 *  sheet's HEADER BAR and it ellipsises there while rendering in full on the
 *  card that opens it. v1's title was 48 characters and the header showed 38.
 *
 *  The curve so far, all measured on the same phone:
 *
 *      mission-row title        27 characters   (a2.13, a2.14 §13)
 *      term-chip row            37 characters   (a2.03 §3)
 *      tapTable header           6 at five columns  (a2.16 §2)
 *      tapTable cell             6 at five, 11 at three  (a2.16, a2.17 §4)
 *      reference-sheet table     3 columns       (a2.04 §1)
 *      reference-sheet TITLE    ~37 characters   THIS BUILD
 *
 *  **a2.18's SHEET TITLE IS 44 CHARACTERS AND IS CUT TODAY**, and so is a2.03's
 *  and a2.13's if they are that long: this is house-wide rather than mine, and
 *  it is recorded in the ledger rather than repaired here, because repairing a
 *  neighbour's lesson from inside this build is how a2.16 broke a2.03. */
export const SHEET_TITLE_MAX = 37;
export const SHEET_TITLE_TARGET = 34;

/** The mission-row title ceiling, measured by a2.13 on a Pixel 6 and house-wide
 *  since. a2.14 §13 corrected it to a WIDTH rather than a count, so 26 and 27
 *  with wide glyphs stay unverified until they have been read off the hub. */
export const TITLE_MAX = 27;
export const TITLE_TARGET = 25;

/** a2.04 measured a FOUR-column table inside a reference sheet clipping on a
 *  Pixel 6, after a2.03 had measured five. The budget is THREE. */
export const SHEET_COLS_MAX = 3;

/** The number of missions each half gets, asserted rather than described.
 *  Doctrine §B.5: if the paradigm outweighs the Owns you built the wrong
 *  lesson. The paradigm here is ONE section, because a2.02 taught it. */
export const OWNS_MISSIONS = 5;
export const PARADIGM_MISSIONS = 1;

/** THE BREAK CARD IS THE MOST FRAGILE SCREEN IN AN A2 SCENE, and this build
 *  found the same defect a2.01 and a2.14 found: its own Continue under the
 *  pager bar on first paint.
 *
 *  Ledger §7 measured the budget as LINES rather than words and a2.14 §9.1
 *  narrowed it: a right-hand row carrying an ipa AND a respell is four lines on
 *  its own, so the FRENCH is the only lever, and 31 characters wraps. Three
 *  things went over here at once, which is why v1 clipped and no host gate saw
 *  it: a grep proves a string is in the bundle and nothing about how it sets.
 *
 *  Asserted in all three layers so it cannot come back. */
export const BREAK_BUDGET = {
  heading: 13,
  /** The French on a reading row. 31 wrapped; 26 does not. */
  fr: 28,
  /** The gloss under it. 27 pushed the card over; a2.14 measured 24. */
  en: 24,
  bodyWords: 26,
  coachWords: 12,
} as const;
