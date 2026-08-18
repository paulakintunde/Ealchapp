// The a2.20 corpus: what this lesson authors, what it imports, the one repair
// it makes, and the six measurements that decided its shape.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a2.20 puts on a screen. The lesson body (participes-lesson.ts) reads them
// FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  1. THE CORPUS SPLIT WITH a2.05 WAS SETTLED BEFORE THIS BUILD STARTED, AND
//     THIS BUILD AGREES IT.
// ══════════════════════════════════════════════════════════════════════════
//
// The brief calls the split "the first thing to settle" and warns that a
// hundred past forms in one theme collide on `fr` in the flashcard hub. a2.05
// settled it on 2026-08-14 (ledger, "a2.05 amendments" §0) and left the
// decision, the reasoning and a reserved id block behind:
//
//     ZERO ROWS ON BOTH SIDES. A past form is a conjugated form, and a2.01
//     already ruled that a conjugated form is never a corpus item. Only
//     infinitives and full sentences.
//
// **THIS BUILD AGREES IT RATHER THAN RE-OPENING IT, AND RE-MEASURES IT.**
// a2.05's report says outright that the one thing it could not verify was
// "whether a2.20's author agrees the split", so agreeing it in writing is half
// this section's job. Measured 2026-08-14 against Postgres over THIS lesson's
// own thirty-three forms rather than over a2.05's list:
//
//     bare rows whose `fr` is one of the thirty-three                  28
//     of those, glossed IN SO MANY WORDS as a past participle           4
//     of those four, carrying a respelling                              0
//
// The four are `fr.sons.voyelles.451`, `.452`, `.453` and `.455`: `su`, `bu`,
// `vu` and `pu`, published to demonstrate a vowel, glossed "known (past
// participle of savoir)" and carrying NOTHING to say them with. **That is the
// ledger decision's own evidence.** The other twenty-four are words in their own
// right — `ouvert` is "open", `couvert` is "overcast", `été` is the season,
// `cru` is "raw", `reçu` is a receipt, `mort` is "dead" — and five of them are
// imported here for exactly that reason. See ALSO_A_WORD.
//
// (a2.05 counted NINE such rows and this build counts FOUR. Both are right: the
// other five are the minimal-pair copies at `.548`, `.550`, `.552`, `.556` and
// `.606`, whose glosses read "drunk", "known", "seen" and "under → known"
// without naming the form. The figure that matters is the third one and it is
// zero either way.)
//
// So this lesson authors **forty-three SENTENCES and not one bare past form**,
// and neither side re-authored the other's rows. Row counts are in §6.
//
// ══════════════════════════════════════════════════════════════════════════
//  2. IT IS NOT FORTY. IT IS THIRTY-THREE, AND THE `sub` NEVER SAID FORTY.
// ══════════════════════════════════════════════════════════════════════════
//
// The brief says "forty items that must be memorised" nine times and asks the
// test to assert "all forty participles ... by name". The database `sub` is
// « Participes passés irréguliers » and says nothing about a number; the `canDo`
// says nothing about a number either. Corrections §1 is the reason: the brief's
// own identity block was the source of the figure, and a2.05 found the same
// thing one seq back where "the sub says sixty" rested on a string that exists
// nowhere in the database.
//
// The list this lesson teaches is THIRTY-THREE, and it is a2.05's own
// `IRREGULAR_PAST` — the thirty-five names that lesson refuses by name and hands
// forward — minus two, both measured:
//
//     refait     `refaire` does not exist as a headword at any level.
//                `refait` occurs twice in 30,000 published rows.
//     aperçu     `apercevoir` does not exist as a headword at any level.
//                `aperçu` occurs ZERO times in the whole published corpus.
//
// Neither is orphaned. Both are DERIVED on the reference sheet from a form this
// lesson teaches (`refait` from `fait`, `aperçu` from `reçu`), and `refait` is
// one of the two forms the exam asks for cold. Every one of a2.05's thirty-five
// names is somewhere in this lesson, and a guard walks the list.
//
// ══════════════════════════════════════════════════════════════════════════
//  3. FOUR GROUPS COVER TWENTY-EIGHT OF THE THIRTY-THREE. FIVE ARE LEFT.
// ══════════════════════════════════════════════════════════════════════════
//
// The brief's grouping was checked against the list rather than assumed, which
// is the order it asks for. It holds, and the residue is five:
//
//     -is    7    pris · mis · appris · compris · remis · promis · assis
//     -it    4    dit · écrit · conduit · construit
//     -u    13    vu · lu · bu · su · pu · voulu · dû · connu · venu · tenu
//                 reçu · couru · cru
//     -ert   4    ouvert · offert · couvert · souffert
//     odd    5    fait · été · eu · né · mort
//
// The brief's own version of the table lists five in `-is` and ten in `-u`. Both
// are short, and the difference is the point of the lesson: `remis` and `promis`
// are `mis` with a front on it, and `reçu`, `couru` and `cru` are ordinary
// members of the biggest group. **The -u group is thirteen of thirty-three and
// it holds the participle of every irregular verb batch 1 taught** — venir and
// tenir from a2.02, lire from a2.12, vouloir, pouvoir and devoir from a2.13,
// savoir and connaître from a2.14. That is the connection that makes the lesson
// worth building and it is `s11-batch1`.
//
// ══════════════════════════════════════════════════════════════════════════
//  4. CORRECTIONS §3 HOLDS, AND HARDER THAN ANYWHERE IN THE BAND SO FAR.
// ══════════════════════════════════════════════════════════════════════════
//
// The corpus is FULL of this lesson's forms — 170 published sentences put `pris`
// behind an auxiliary, 269 put `été`, 132 put `dû`, 105 put `fait` — and it is
// almost empty of cards:
//
//     published a1/a2 sentences carrying one of the thirty-three
//       behind an auxiliary AND carrying a respelling                    2
//     and neither of the two is a passé composé
//       fr.a2.au-restaurant.061   « C'est fait maison ? »
//       fr.a2.expressions-argot.003 « c'est mort »
//
// a2.13 §1 is the half that bites: evidence is not cards, and a row without a
// respelling reaches a card the learner cannot say. So the whole set is
// AUTHORED, in one frame, and the imports are thirty-three infinitives plus the
// five forms that are already published as words in their own right.
//
// ══════════════════════════════════════════════════════════════════════════
//  5. WHAT NO SURFACE IN THIS APP CAN TEST, AND IT COSTS THIS LESSON TWO
//     QUESTIONS IT WANTED.
// ══════════════════════════════════════════════════════════════════════════
//
// `dû` carries a circumflex to keep it apart from `du`, and it is the only form
// in the set where an accent does semantic work. Measured through the REAL
// `fold` and `normalizeFr` rather than asserted in a comment:
//
//     fold('dû') === fold('du')                    true
//     normalizeFr('dû') === normalizeFr('du')      true
//
// So no `typeIn`, no `errorSpot` and no dictée line can test it: all three would
// accept the mistake and tell the learner they spelled it right. And `dû` and
// `du` are one SOUND, so no `listenChoose` can test it either. **It is testable
// by `mcq` and by nothing else in this application**, which is the whole reason
// the circumflex mission is an mcq and the reason the guard below exists.
//
// The same is true of every masculine/feminine pair in the set — `pris/prise`,
// `mis/mise`, `vu/vue`, `dit/dite`, `su/sue` — which is not this lesson's
// business (a2.21 owns agreement) and IS the reason no ear question may offer
// two of them. See NO_EAR_QUESTION.
//
// ══════════════════════════════════════════════════════════════════════════
//  6. THE BLOCK, AND THE ROW COUNT
// ══════════════════════════════════════════════════════════════════════════
//
//     seq  id      block                        status
//     16   a2.05   fr.a2.verbes.541 .. .590     TAKEN, 541-576 used
//     17   a2.20   fr.a2.verbes.591 .. .650     THIS BUILD, 591-633 used
//
// Ledger §10: the maximum has been useless since a2.10.l2 took `.461..500`, so
// the row COUNT is the only signal. `fr.a2.verbes` held exactly 439 rows when
// this build claimed `.591`, which is the ledger's own figure after a2.05, and
// the reservation was measured EMPTY on the same read.
//
// Measured 2026-08-14 against Postgres by `scripts/_a220_probe.ts` and
// `_a220_probe2.ts`, and against a2.05 and a2.15 read as shipped.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  IRREGULAR_PAST as A205_IRREGULAR_PAST,
  REFRAME as A205_REFRAME,
} from './passe-compose-corpus.ts';
import { REFRAME as A215_REFRAME } from './prendre-mettre-corpus.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ══════════════════════════════════════════════════════════════════════════
 *  IDENTITY, THE BLOCK, AND THE COUNTS THE BATCH REFUSES TO DISAGREE WITH
 * ═══════════════════════════════════════════════════════════════════════ */

/** The batch-1 home for a verb lesson, a2.05's one seq back, and the theme this
 *  lesson's whole subject already lives in. */
export const THEME = 'verbes';

/** Considered and rejected, kept as a constant so the guards can assert no row
 *  of this lesson lands there. `verbes-essentiels` holds thirty-one of the
 *  thirty-three infinitives this lesson imports, so writing INTO it would put a
 *  tense paradigm inside the theme that serves the naming forms, where the
 *  flashcard hub would deal both from one deck. */
export const REJECTED_THEME = 'verbes-essentiels';

/** Byte for byte from `content_units`, measured 2026-08-14 by
 *  `scripts/_a220_probe.ts`. Corrections §1 says never to take it from the
 *  brief; this brief carries it correctly because §11 had already corrected it,
 *  and it was re-read anyway because that costs one line. */
export const UNIT = {
  id: 'a2.20',
  seq: 17,
  title: 'Irregular Past Participles',
  sub: 'Participes passés irréguliers',
  canDo: 'Can produce the irregular past participles rather than guessing from the infinitive',
  prereqUnitIds: ['a2.05'],
  lessonIds: [] as string[],
} as const;

export const LESSON_ID = 'a2.20.l1';

/** Ledger §10. `fr.a2.verbes` held exactly this many rows when a2.20 claimed
 *  `.591`, which is the ledger's own figure after a2.05 (403 + 36). */
export const ROW_COUNT_BEFORE = 439;

/** The whole theme, all levels, all statuses. a2.05 recorded 671 before its own
 *  36 landed; this read is 707, which is 671 + 36 exactly. */
export const THEME_COUNT_BEFORE = 707;

/** RESERVED BY a2.05 FOR THIS BUILD, sixty wide, and measured EMPTY on
 *  2026-08-14. This build uses `.591..633` and leaves `.634..650` as its tail.
 *  Ids are the SRS key: the tail is not backfilled. */
export const ID_BLOCK = {
  from: 'fr.a2.verbes.591',
  to: 'fr.a2.verbes.650',
} as const;

/** a2.05's block, so this build's guards can refuse a row inside it, which is
 *  the same courtesy a2.05's guards paid this one. */
export const A205_BLOCK = {
  from: 'fr.a2.verbes.541',
  to: 'fr.a2.verbes.590',
} as const;

/** a2.03's batch claimed a NAMESPACE when it meant a BLOCK and re-running it
 *  failed on eighteen rows a2.16 legitimately owned. `fr.a2.verbes` holds 439
 *  rows belonging to ten other lessons, so every guard here is scoped to the
 *  BLOCK, and a row inside the block that this build does not own is fatal. */
export const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= 591 && n <= 650;
};

/** And a row of THIS build inside a2.05's block is fatal too. */
export const isA205 = (id: string): boolean => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= 541 && n <= 590;
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SPLIT, AS DATA THE GUARDS CAN CHECK
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.05 §0, agreed by this build and re-measured over this lesson's own list.
 *  Written as data rather than as prose in a header, so the batch, the merge and
 *  the test all refuse a build that departs from it without amending the
 *  ledger. */
export const PARTICIPLE_DECISION = {
  isCorpusItem: false,
  settledBy: `${Cap(unitRef('a2.05'))}`,
  agreedBy: `${Cap(unitRef('a2.20'))}`,
  authoredHere: 0,
  authoredByA205: 0,
  rule: `A past form is a conjugated form, and ${unitRef('a2.01')} settled that a conjugated form is never a corpus item. Only infinitives and full sentences.`,
  /** Bare rows whose `fr` is one of the thirty-three, measured over THIS list. */
  lookalikeRows: 28,
  /** Of those, glossed in so many words as a past participle. All four are in
   *  `fr.sons.voyelles` and exist to demonstrate a vowel. */
  glossedAsPastForm: 4,
  /** Of those four, carrying a respelling. THE FIGURE THE DECISION RESTS ON. */
  glossedAndRespelled: 0,
  why: 'A bare past form on a card has nobody attached to it, cannot be said on its own, and the nine rows that already do it carry no respelling at all, so they reach a card the learner cannot say.',
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS, BY UNIT ID, AND WHAT EACH ONE OWNS
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.05, Le passé composé avec avoir, seq 16. THE PREREQUISITE. It owns the
 *  construction, the negative, the gap and the three regular endings, and it
 *  taught them one lesson ago. This lesson gets ONE recap screen and re-teaches
 *  none of it. */
export const PASSE_UNIT = 'a2.05';

/** a2.05's reframe, imported rather than retyped so the two cannot drift, and
 *  asserted as a literal as well (a2.16 §3: a constant whose job is to remember
 *  another lesson's value has to be a literal somewhere). */
export { A205_REFRAME };

/** a2.15, Irréguliers 5 : prendre, mettre, battre, seq 9. THE SHAPE THIS LESSON
 *  BORROWS, and the brief asks for it by unit id. That lesson taught that a
 *  compound verb is its base verb with something in front, in the present. This
 *  lesson runs the same move on the past form, and its own words are quoted. */
export const FAMILY_UNIT = 'a2.15';
export { A215_REFRAME };

/** a2.02, seq 5. venir and tenir, whose past forms are two of the -u group. */
export const ALLER_UNIT = 'a2.02';
/** a2.12, seq 6. faire, dire and lire: `fait`, `dit` and `lu`. */
export const FAIRE_UNIT = 'a2.12';
/** a2.13, seq 7. vouloir, pouvoir and devoir: `voulu`, `pu` and `dû`. */
export const MODAUX_UNIT = 'a2.13';
/** a2.14, seq 8. savoir and connaître: `su` and `connu`. */
export const SAVOIR_UNIT = 'a2.14';

/** The five batch-1 units whose verbs come back here as past forms, in seq
 *  order. Every one of them is named on the screen that hands them back. */
export const BATCH1_UNITS = [ALLER_UNIT, FAIRE_UNIT, MODAUX_UNIT, SAVOIR_UNIT, FAMILY_UNIT] as const;

/** a2.21, Le passé composé avec être, seq 18, THE VERY NEXT LESSON. It owns
 *  which verbs take être and it owns agreement. This lesson teaches the FORM of
 *  `venu`, `né` and `mort` and hands the choice forward in one line. */
export const ETRE_UNIT = 'a2.21';

/** a2.22 and a2.23, seq 19 and 20. Reflexive verbs, and `assis` in a full past
 *  needs both of them plus a2.21. Its form is taught here and nothing else. */
export const REFLEXIVE_UNIT = 'a2.22';

/** a2.06, Direct Object Pronouns, seq 21. a2.05 measured 81 published rows where
 *  a past form DOES agree after avoir, all of them the preceding-direct-object
 *  case. Not here, not a2.21's either. */
export const PRONOUN_UNIT = 'a2.06';

/** a2.31, School and Studies, seq 30. a2.05 found it and no document in this
 *  band names it; its whole canDo is a conversation in this tense. */
export const SCHOOL_UNIT = 'a2.31';

export const DEPENDENTS: readonly string[] = [];

/** MEASURED 2026-08-14: NOT ONE UNIT AT ANY LEVEL DECLARES a2.20 AS A
 *  PREREQUISITE. a2.21 declares a2.05, not this. Corrections §7 says an
 *  ownership claim taken off the unit bodies is usually an artifact of the
 *  query, so this is stated as what it is — a fact about `prereqUnitIds` — and
 *  the teaching hand-off to a2.21 is asserted from that lesson's brief and canDo
 *  instead. */
export const PREREQ_DECLARERS = 0;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: a rule the learner runs while the sentence is already moving.
 *
 *  The moment it runs is exact and it is the moment the lesson exists for. The
 *  learner has said « j'ai », the verb they mean is `prendre`, and a2.05 gave
 *  them a machine that turns an -RE verb into -u. The machine is about to
 *  produce `prendu`, which is not a word. The instruction is: stop the machine.
 *
 *  It is a2.05's rule with a hole cut in it, deliberately: that lesson says
 *  BUILD the second word off the group the verb is in, and this one says there
 *  are thirty-three verbs where the building is what goes wrong. */
export const REFRAME = 'Do not build these. Reach for the group it is in.';

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'These must be memorised.',
    why: 'THE BRIEF NAMES THIS AS THE THING TO REJECT AND IT IS RIGHT, and it is worse than the brief says: it is also FALSE. Twenty-eight of the thirty-three sit in four groups and five do not, so a learner who sorts is doing a different job from a learner who memorises. It is also the sentence that makes the lesson unbuildable — a list of thirty-three cannot honestly fill twenty missions, and a list is what you get if you believe this line.',
  },
  {
    candidate: 'Learn the head of the family and the rest come free.',
    why: `${Cap(unitRef('a2.15'))} REJECTED THIS ITSELF, as a reframe, and was right: it promises a payoff instead of telling the learner what to do, and there is no moment mid-sentence at which it can be run. It ships there as FAMILY_CLAIM and it ships here as the claim of the -is group, quoted with ${unitRef('a2.15')} credited by unit id, which is what it is.`,
  },
  {
    candidate: A215_REFRAME,
    why: `${Cap(unitRef('a2.15'))}\'s own, and taking it would spend this lesson\'s one carried line restating a neighbour\'s. It is quoted verbatim on the screen where the -is compounds arrive, credited by unit id, and it answers a different question: it says how to get the PRESENT of a compound verb, and this lesson says what to do when the past form cannot be built at all.`,
  },
  {
    candidate: A205_REFRAME,
    why: 'The prerequisite\'s, one seq back. It is quoted verbatim on the recap screen and credited, and it is still true: this lesson changes the second word and nothing else. Carrying it would mean this lesson has no rule of its own, which for the lesson that owns the hardest list in A2 would be a lesson-shaped hole.',
  },
  {
    candidate: 'Four groups and five that are not in any of them.',
    why: 'The table said as a sentence. It is the CLAIM the lesson makes and it ships as GROUP_CLAIM, but a learner mid-utterance cannot do anything with a count. It tells them what is true and not what to do.',
  },
  {
    candidate: 'If the ending arrives easily, it is the wrong one.',
    why: 'Runnable, memorable, and false in the direction that costs most. It is true of thirty-three verbs and false of every regular one, and a learner running it produces « j\'ai parlu » out of caution. A rule that fires on the wrong set is worse than a longer one that names its set.',
  },
];

/** The move, in the imperative, for the roundup and the sheet. */
export const THE_MOVE =
  'Say the first word, and while it is out of your mouth ask which of the five groups the verb is in rather than what its ending should be. Four of the groups have an ending and the fifth is five words you have to have.';

/** a2.15's principle, applied to the past form, quoted with its unit credited.
 *  a2.16 §3: a back-reference to another unit\'s line is a literal, not a
 *  variable, so `A215_REFRAME` is imported AND asserted as a string. */
export const A215_CREDIT =
  `${Cap(unitRef(FAMILY_UNIT))} said it about the present: « ${A215_REFRAME} » Cover the front of apprendre and prendre is underneath. The past form works the same way: appris is pris with ap in front, compris is pris with com in front, and remis and promis are mis with a front on them. Four of the seven in this group are free the moment you have the other three.`;

export const GROUP_CLAIM =
  'They are not thirty-three separate facts. Twenty-eight of them fall into four groups by their ending, and five are in no group at all.';

export const ODD_CLAIM =
  'Five of them belong to nothing. Two come from a verb you cannot see in them, one is shorter than its verb, and one is a different word.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LIST, AND THE GROUPING, CHECKED AGAINST THE LIST
 * ═══════════════════════════════════════════════════════════════════════ */

export type Group = '-is' | '-it' | '-u' | '-ert' | 'odd';

export type Form = {
  /** The past form. */
  past: string;
  /** The naming form it comes from. */
  verb: string;
  /** The id of the naming form this lesson imports for it. */
  verbId: string;
  group: Group;
  en: string;
  /** The row this lesson authors for it, or null where the form is taught from
   *  an imported card instead. */
  rowId: string | null;
  /** True where the past form only ever appears with être in real French, so
   *  this lesson teaches the FORM and hands the choice of first word to a2.21. */
  etre?: true;
  /** The batch-1 unit that taught the naming form, where one did. */
  from?: string;
  note: string;
};

const V = (n: number) => `fr.a2.verbes.${n}`;

/** THE THIRTY-THREE, in group order, each with the naming form it comes from and
 *  the row that teaches it.
 *
 *  This is the object every layer walks. The four family sections read their
 *  members off it, the sheet prints it, the tranches release off it and the test
 *  asserts every `past` value BY NAME rather than counting them. */
export const FORMS: readonly Form[] = [
  // ── -is. Seven, and four of them are three with a front on. ──────────────
  { past: 'pris', verb: 'prendre', verbId: 'fr.sons.verbes-essentiels.012', group: '-is', en: 'taken', rowId: V(591), from: FAMILY_UNIT, note: 'The head of the group and the one the regular machine gets most wrong: an -RE verb "should" give prendu, and prendu is not a word.' },
  { past: 'mis', verb: 'mettre', verbId: 'fr.sons.verbes-essentiels.014', group: '-is', en: 'put', rowId: V(592), from: FAMILY_UNIT, note: 'The second head. Mettre is an -RE verb too and it does the same thing, which is what makes the group a group rather than two exceptions.' },
  { past: 'appris', verb: 'apprendre', verbId: 'fr.a2.disciplines.051', group: '-is', en: 'learned', rowId: V(593), from: FAMILY_UNIT, note: `pris with ap in front. ${Cap(unitRef(FAMILY_UNIT))} taught the naming form the same way.` },
  { past: 'compris', verb: 'comprendre', verbId: 'fr.sons.verbes-essentiels.030', group: '-is', en: 'understood', rowId: V(594), from: FAMILY_UNIT, note: 'pris with com in front, and the front changes the meaning and nothing else.' },
  { past: 'remis', verb: 'remettre', verbId: 'fr.a2.verbes.423', group: '-is', en: 'handed back', rowId: V(595), from: FAMILY_UNIT, note: `mis with re in front, on the row ${unitRef(FAMILY_UNIT)} authored itself. It is the only naming form in this lesson that another A2 lesson had to write from scratch.` },
  { past: 'promis', verb: 'promettre', verbId: 'fr.sons.verbes-essentiels.191', group: '-is', en: 'promised', rowId: V(596), from: FAMILY_UNIT, note: 'mis with pro in front, and it has nothing to do with putting anything anywhere. The meaning of the front is a vocabulary question and the ending is not.' },
  { past: 'assis', verb: "s'asseoir", verbId: 'fr.sons.verbes-essentiels.100', group: '-is', en: 'seated', rowId: null, note: `The seventh, and the only one with no sentence of its own here. Its full past needs the little word in front of the verb, which is ${unitRef(REFLEXIVE_UNIT)}, so this lesson teaches the form and stops.` },

  // ── -it. Four, and two of them are the same verb with a front. ───────────
  { past: 'dit', verb: 'dire', verbId: 'fr.sons.verbes-essentiels.005', group: '-it', en: 'said', rowId: V(597), from: FAIRE_UNIT, note: `The head of the group, and ${unitRef(FAIRE_UNIT)} taught the naming form. It is also the same sound as « il dit », which is the present, so the ear cannot separate them.` },
  { past: 'écrit', verb: 'écrire', verbId: 'fr.sons.consonnes.110', group: '-it', en: 'written', rowId: V(598), note: 'Already published as a word in its own right, meaning "written". See ALSO_A_WORD.' },
  { past: 'conduit', verb: 'conduire', verbId: 'fr.a1.routines.107', group: '-it', en: 'driven', rowId: V(599), note: 'Every -uire verb does this: the -re comes off and a t goes on.' },
  { past: 'construit', verb: 'construire', verbId: 'fr.sons.verbes-essentiels.118', group: '-it', en: 'built', rowId: V(600), note: 'The second -uire verb, so the pattern inside the group is visible rather than asserted. Its naming form carries this build\'s one repair.' },

  // ── -u. Thirteen, and every irregular verb batch 1 taught is in here. ────
  { past: 'vu', verb: 'voir', verbId: 'fr.sons.verbes-essentiels.011', group: '-u', en: 'seen', rowId: V(601), note: 'Two letters off a five-letter verb, and there is nothing in voir that predicts the v-u.' },
  { past: 'lu', verb: 'lire', verbId: 'fr.a1.dictee.091', group: '-u', en: 'read', rowId: V(602), from: FAIRE_UNIT, note: `${Cap(unitRef(FAIRE_UNIT, 'a2'))}'s third verb, and its past form is two letters.` },
  { past: 'bu', verb: 'boire', verbId: 'fr.a1.cuisine.042', group: '-u', en: 'drunk', rowId: V(603), note: 'One of the four the corpus already publishes as a bare form with no respelling on it, in a theme about vowels.' },
  { past: 'su', verb: 'savoir', verbId: 'fr.sons.verbes-essentiels.009', group: '-u', en: 'found out', rowId: V(604), from: SAVOIR_UNIT, note: `${Cap(unitRef(SAVOIR_UNIT, 'a2'))}'s first verb. Savoir goes to su and connaître goes to connu, and the two of them stay apart in the past exactly as they did in the present.` },
  { past: 'pu', verb: 'pouvoir', verbId: 'fr.sons.verbes-essentiels.006', group: '-u', en: 'been able to', rowId: V(605), from: MODAUX_UNIT, note: `${Cap(unitRef(MODAUX_UNIT, 'a2'))}'s. Two letters again, and the verb behind it has seven.` },
  { past: 'voulu', verb: 'vouloir', verbId: 'fr.sons.verbes-essentiels.007', group: '-u', en: 'wanted', rowId: V(606), from: MODAUX_UNIT, note: 'The one -oir verb in the group that keeps most of itself: voul- is still there.' },
  { past: 'dû', verb: 'devoir', verbId: 'fr.sons.verbes-essentiels.008', group: '-u', en: 'had to', rowId: V(607), from: MODAUX_UNIT, note: 'THE ONE WITH THE ACCENT, and the only form in the set where an accent does semantic work. See CIRCUMFLEX.' },
  { past: 'connu', verb: 'connaître', verbId: 'fr.sons.verbes-essentiels.048', group: '-u', en: 'known', rowId: V(608), from: SAVOIR_UNIT, note: `${Cap(unitRef(SAVOIR_UNIT, 'a2'))}'s second verb, and the î of the naming form is gone.` },
  { past: 'venu', verb: 'venir', verbId: 'fr.sons.verbes-essentiels.010', group: '-u', en: 'come', rowId: V(620), etre: true, from: ALLER_UNIT, note: `${Cap(unitRef(ALLER_UNIT, 'a2'))}'s. The form is regular for this group and the first word in front of it is not avoir, which is ${unitRef(ETRE_UNIT)}.` },
  { past: 'tenu', verb: 'tenir', verbId: 'fr.sons.verbes-essentiels.052', group: '-u', en: 'held', rowId: V(609), from: ALLER_UNIT, note: `${Cap(unitRef(ALLER_UNIT, 'a2'))}'s other one, and it behaves like venu without the different first word.` },
  { past: 'reçu', verb: 'recevoir', verbId: 'fr.sons.verbes-essentiels.047', group: '-u', en: 'received', rowId: V(610), note: 'The cedilla survives into the past form. Nothing in this app can test a cedilla, so it is never asked for typed.' },
  { past: 'couru', verb: 'courir', verbId: 'fr.sons.verbes-essentiels.045', group: '-u', en: 'run', rowId: V(611), note: `An -IR verb whose past form is NOT -i. This is the one that looks regular from the other direction: ${unitRef('a2.05')} said -IR goes to -i, and courir does not.` },
  { past: 'cru', verb: 'croire', verbId: 'fr.sons.verbes-essentiels.049', group: '-u', en: 'believed', rowId: V(612), note: 'Already published as a word meaning "raw", which is a different word that happens to be spelled the same. See ALSO_A_WORD.' },

  // ── -ert. Four, and all four are -IR verbs that refuse -i. ───────────────
  { past: 'ouvert', verb: 'ouvrir', verbId: 'fr.sons.verbes-essentiels.034', group: '-ert', en: 'opened', rowId: V(613), note: 'The head. An -IR verb whose past form ends in a t, which is as far from -i as the language gets.' },
  { past: 'offert', verb: 'offrir', verbId: 'fr.sons.verbes-essentiels.053', group: '-ert', en: 'given', rowId: V(614), note: 'The same three letters on a verb that has nothing to do with opening.' },
  { past: 'couvert', verb: 'couvrir', verbId: 'fr.sons.verbes-essentiels.157', group: '-ert', en: 'covered', rowId: V(615), note: 'Ouvert with a c on the front, and the corpus already publishes it as a weather word meaning "overcast". See ALSO_A_WORD.' },
  { past: 'souffert', verb: 'souffrir', verbId: 'fr.b1.verbes.054', group: '-ert', en: 'suffered', rowId: V(616), note: 'The fourth, and the group is now closed: these four are all of it in the language a learner meets.' },

  // ── The five that are in no group. ───────────────────────────────────────
  { past: 'fait', verb: 'faire', verbId: 'fr.sons.verbes-essentiels.004', group: 'odd', en: 'done, made', rowId: V(617), from: FAIRE_UNIT, note: `${Cap(unitRef(FAIRE_UNIT, 'a2'))}'s headline verb, and its past form is the same sound as « il fait », which is the present. The commonest verb in the set and it is in no group.` },
  { past: 'été', verb: 'être', verbId: 'fr.sons.verbes-essentiels.001', group: 'odd', en: 'been', rowId: V(618), note: 'From nowhere. There is no route from être to été, and the same three letters are also the word for summer.' },
  { past: 'eu', verb: 'avoir', verbId: 'fr.sons.verbes-essentiels.002', group: 'odd', en: 'had', rowId: V(619), note: 'THE ONE THAT LOOKS NOTHING LIKE IT SOUNDS. Two letters, one sound, and the sound is not the one either letter suggests. See EU.' },
  { past: 'né', verb: 'naître', verbId: 'fr.sons.verbes-essentiels.081', group: 'odd', en: 'born', rowId: V(621), etre: true, note: `Shorter than the verb it comes from, which nothing else in the set is. Its first word is not avoir either, which is ${unitRef(ETRE_UNIT)}.` },
  { past: 'mort', verb: 'mourir', verbId: 'fr.sons.verbes-essentiels.082', group: 'odd', en: 'died', rowId: null, etre: true, note: `A different word entirely, and it is published as an ordinary adjective meaning "dead". Its first word is ${unitRef(ETRE_UNIT, 'a2')}'s, so this lesson shows the form on the published cards and authors no sentence for it.` },
];

export const GROUPS: readonly Group[] = ['-is', '-it', '-u', '-ert', 'odd'];

export const formsOf = (g: Group): readonly Form[] => FORMS.filter((f) => f.group === g);

export const formOf = (past: string): Form => {
  const f = FORMS.find((x) => x.past === past);
  if (!f) throw new Error(`a2.20: ${past} is not one of the thirty-three.`);
  return f;
};

/** THE COUNT, DECLARED. The brief says forty; §2 of this header is why it is
 *  thirty-three, and the number is asserted against this constant in all three
 *  layers rather than derived from FORMS, so a quiet drop goes red. */
export const EXPECTED_FORMS = 33;

/** Twenty-eight in four groups, five in none. The two figures the brief asks the
 *  report to give. */
export const EXPECTED_IN_GROUPS = 28;
export const EXPECTED_ODD = 5;

/** The group sizes, written out rather than derived, for the same reason. */
export const GROUP_SIZES: Readonly<Record<Group, number>> = {
  '-is': 7, '-it': 4, '-u': 13, '-ert': 4, odd: 5,
};

/** THE FORMS THAT TAKE être, FLAGGED FOR a2.21 BY NAME. The brief asks for this
 *  list in the report and it is data here so the guards can use it: no
 *  production surface may ask a learner to choose an auxiliary, and these three
 *  are the only rows in the lesson where être appears at all. */
export const ETRE_FORMS: readonly string[] = FORMS.filter((f) => f.etre).map((f) => f.past);

export const ETRE_DEFERRAL =
  `Three of these put a different word in front instead of avoir, and the form is all this lesson teaches you about them. Which verbs do it, and what happens to the form afterwards, is ${unitRef(ETRE_UNIT)}.`;

/** a2.05's list of thirty-five, imported so the coverage claim can be checked
 *  against the real thing rather than against a second copy of it. */
export { A205_IRREGULAR_PAST };

/** The two of a2.05's thirty-five this lesson does not teach actively, with the
 *  measurement that decided it and the form each is derived from. §2. */
export const DERIVED_ONLY: readonly { past: string; from: string; verb: string; measured: string }[] = [
  { past: 'refait', from: 'fait', verb: 'refaire', measured: 'refaire exists as a headword at no level and refait occurs twice in the whole published corpus. It is re + fait, so the family principle gives it away, and it is one of the two forms the exam asks for cold.' },
  { past: 'aperçu', from: 'reçu', verb: 'apercevoir', measured: 'apercevoir exists as a headword at no level and aperçu occurs ZERO times in the whole published corpus. It is an ordinary member of the -u group and the sheet names it there.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FORMS THAT ARE ALREADY PUBLISHED AS ORDINARY WORDS
 * ═══════════════════════════════════════════════════════════════════════ */

/** FIVE OF THE THIRTY-THREE ARE ALREADY IN THE APP AS HEADWORDS, AND NOT ONE OF
 *  THEM IS GLOSSED AS A PAST FORM.
 *
 *  This is a2.05 §0's measurement narrowed to this lesson's own list, and it is
 *  teaching material rather than a footnote: a learner who has met « le ciel est
 *  couvert » on a weather card already owns half of « j'ai couvert le plat ».
 *
 *  Two more were wanted and refused: `reçu` (fr.sons.accents.058 and
 *  fr.sons.consonnes.086, both `gender=m`) and `été` (fr.sons.accents.002,
 *  `gender=m`; the ungendered copies in `fr.sons.voyelles` carry no respelling).
 *  See READ_NOT_IMPORTED. */
export const ALSO_A_WORD: readonly { past: string; id: string; asWord: string }[] = [
  { past: 'écrit', id: 'fr.a2.examens-et-diplomes.045', asWord: 'written' },
  { past: 'ouvert', id: 'fr.a2.courses.070', asWord: 'open' },
  { past: 'couvert', id: 'fr.a1.meteo.062', asWord: 'overcast' },
  { past: 'cru', id: 'fr.sons.adjectifs-essentiels.082', asWord: 'raw' },
  { past: 'mort', id: 'fr.sons.adjectifs-essentiels.161', asWord: 'dead' },
];

export const ALSO_A_WORD_CLAIM =
  'Five of them are already words you may have met, and none was labelled a past form when you did. A form used often enough stops being a form and becomes a word.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAPS
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE LOOK-DERIVABLE ONES, BESIDE WHAT THE REGULAR MACHINE PRODUCES.
 *
 *  The brief asks for these to be shown AS PAIRS and for the test to assert the
 *  pairing, because « pris » beside a struck-through « prendu » is what stops a
 *  learner producing prendu, and « pris » alone is not.
 *
 *  Every `wrong` here is a DISPLAY STRING and never a corpus row: a row holding
 *  one would be served by the flashcard hub as French. */
export const DERIVABLE: readonly { verb: string; wrong: string; right: string; why: string }[] = [
  { verb: 'prendre', wrong: 'prendu', right: 'pris', why: 'An -RE verb, so the machine says -u and out comes a word that does not exist. It is the commonest wrong past form an English speaker produces, and it comes from following a rule correctly.' },
  { verb: 'mettre', wrong: 'mettu', right: 'mis', why: 'The same machine on the same kind of verb, and the same non-word out of the other end. Mettre and prendre are in one group and the group is -is.' },
  { verb: 'faire', wrong: 'faisu', right: 'fait', why: 'Faire ends in -re, so the machine reaches for -u again. Nothing about fait can be got from faire and it is the commonest verb in the whole set.' },
  { verb: 'ouvrir', wrong: 'ouvri', right: 'ouvert', why: 'An -IR verb, so the machine says -i, and this time the real form ends in a t. Four verbs do this and they are the whole -ert group.' },
  { verb: 'courir', wrong: 'couri', right: 'couru', why: 'Another -IR verb, and the machine says -i again. This one lands in the -u group instead, which is the group that takes members from everywhere.' },
  { verb: 'voir', wrong: 'voiri', right: 'vu', why: `There is no rule at all for an -OIR verb in ${unitRef('a2.05')}, so the machine has nothing to run and the learner guesses. Every -OIR verb in this lesson is in the -u group.` },
];

export const DERIVABLE_CLAIM =
  `The wrong one is on the left of each pair, and it is what you get by doing the thing ${unitRef('a2.05')} taught you. It is not carelessness. It is a rule being applied correctly to a verb it does not cover.`;

/** THE ERRORS, in the shape `commonErrors` wants. The first four are the
 *  derivable ones in a sentence; the fifth is the one that is not about a form
 *  at all. */
export const WRONG: readonly { wrong: string; right: string; why: string }[] = [
  {
    wrong: "J'ai prendu le bus.",
    right: "J'ai pris le bus.",
    why: 'Prendre ends in -re, so the regular rule turns it into -u and hands you this. It was not a regular -RE verb in the present either, and its past form is in the -is group with mis.',
  },
  {
    wrong: "J'ai ouvri la porte.",
    right: "J'ai ouvert la porte.",
    why: 'Ouvrir ends in -ir and the regular rule turns an -IR verb into -i. Four verbs refuse it and take -ert instead, and once you have ouvert you have offert, couvert and souffert as well.',
  },
  {
    wrong: "J'ai avu peur.",
    right: "J'ai eu peur.",
    why: 'There is no route from avoir to its own past form. Eu is two letters, said as a single sound, and it has to be had rather than worked out.',
  },
  {
    wrong: "J'ai du partir.",
    right: "J'ai dû partir.",
    why: 'Without the little roof on the u this is the word for "some", which is a completely different word that happens to be spelled the same way. The two are one sound, so nothing you hear will ever tell you which one it was.',
  },
  {
    wrong: "J'ai prendre le bus.",
    right: "J'ai pris le bus.",
    why: `The naming form has been left behind avoir untouched. This is ${unitRef('a2.05')}\'s error rather than this lesson\'s, and it happens here because the learner has looked for the past form, not found one, and shipped the verb as it stands.`,
  },
];

/** THE ERROR THE SCENE IS BUILT ON, AND IT IS THE FIRST OF THE FIVE.
 *
 *  Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. He has « Samedi, j'ai... » out and committed, the verb he
 *  means is prendre, and what arrives is the output of a rule he learned last
 *  lesson. The sentence does not die because he stopped: it dies because the
 *  word he produced is not a word and the other person cannot parse it. */
export const SCENE_STALL = "Samedi, j'ai... j'ai prendu...";
export const SCENE_ERROR = "J'ai prendu le bus.";
export const SCENE_ERROR_EN = 'I took the bus, except that prendu is not a word.';

/** `eu`, which the brief asks to be given its own mission. */
export const EU = {
  past: 'eu',
  respell: 'Ü',
  why: 'Two letters, one sound, and it is not the sound either letter suggests. The e is silent and the u is the French u, so what comes out is one pure vowel.',
  claim: 'You cannot read this one and get it right. Read it before you have heard it and you will put an o or an uh in it every time, which is the opposite of everything else in this lesson.',
} as const;

/** `dû`, which the brief asks to be given a mission and an assertion so nobody
 *  strips the circumflex. §5 of this header is the measurement. */
export const CIRCUMFLEX = {
  past: 'dû',
  bare: 'du',
  feminine: 'due',
  why: 'The little roof is the only thing keeping the past form of devoir apart from du, which means "some". It is the one accent in this set that changes what a word means.',
  untestable:
    'Nothing in this app can test it. A typed answer, a spot-the-error and the dictée all strip accents before comparing, so all three would accept du and say it was right. The two words are one sound, so no listening question can ask either.',
} as const;

/** THE CIRCUMFLEX, AS AN ASSERTION. The brief asks for `dû` to be asserted by
 *  name with a comment saying it is deliberate, so a future author stripping it
 *  goes red. This is that constant and it is a literal on purpose: derived from
 *  FORMS it would agree with itself. */
export const DU_WITH_CIRCUMFLEX = 'dû';
export const DU_WITHOUT_CIRCUMFLEX = 'du';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SHAPES THE GUARDS RUN
 *
 *  GUARD THE THING, NOT THE LETTERS (a2.14 §6, a2.17 §7). Half of a learner
 *  surface is English by design and a shape built out of French endings reads
 *  the English as French, so every one of these requires a French subject
 *  pronoun or a form of avoir in front, and every one carries a MUST_NOT_FIRE
 *  list holding this lesson's own English.
 *
 *  AND THE LEFT BOUNDARY DROPS THE APOSTROPHE (a2.17 §3): the house boundary
 *  cannot see `j'ai`, which is the first two words of forty sentences here.
 * ═══════════════════════════════════════════════════════════════════════ */

const AUX = "(?:j['’]ai|tu\\s+as|il\\s+a|elle\\s+a|on\\s+a|nous\\s+avons|vous\\s+avez|ils\\s+ont|elles\\s+ont)";
const NEG_AUX = "(?:je\\s+n['’]ai|tu\\s+n['’]as|il\\s+n['’]a|elle\\s+n['’]a|on\\s+n['’]a|nous\\s+n['’]avons|vous\\s+n['’]avez|ils\\s+n['’]ont|elles\\s+n['’]ont)";
const SHORT_ADV = '(?:bien|mal|déjà|encore|toujours|jamais|beaucoup|trop|assez|vite|presque|enfin|tout)';

/** THE ERROR THIS LESSON EXISTS TO PREVENT: the regular machine run on an
 *  irregular verb. Built from the six non-words in DERIVABLE plus the ones the
 *  other groups invite, and it is a LIST rather than a shape because a shape
 *  that matched "any word ending -u after avoir" would fire on every correct
 *  sentence in a2.05. */
export const BUILT_FORMS: readonly string[] = [
  'prendu', 'mettu', 'faisu', 'ouvri', 'offri', 'couvri', 'souffri', 'couri',
  'voiri', 'voiru', 'diru', 'liru', 'boiru', 'savu', 'pouvu', 'devu', 'connaîtru',
  'venu' /* NOT a non-word: see BUILT_FORMS_LEGAL */,
].filter((w) => w !== 'venu');

export const REGULAR_MACHINE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:${AUX}|${NEG_AUX})\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?(?:${BUILT_FORMS.join('|')})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const MACHINE_MUST_FIRE: readonly string[] = [
  "J'ai prendu le bus.",
  "J'ai ouvri la porte.",
  'Il a faisu le ménage.',
  "Nous avons couri vite.",
  "Je n'ai pas prendu le bus.",
  "Elle a bien couvri le plat.",
];

export const MACHINE_MUST_NOT_FIRE: readonly string[] = [
  "J'ai pris le bus.",
  "J'ai ouvert la porte.",
  'Il a fait le ménage.',
  "J'ai couru vite.",
  "Je n'ai pas compris.",
  'Il est venu hier.',
  'Do not build these. Reach for the group it is in.',
  'The machine produces prendu and prendu is not a word.',
  // a2.17 §4's own broken sentence and the shapes this band writes most often.
  // Every one holds `on a` or `il a` followed by an English word, and a
  // letters-only version of this shape fires on all of them.
  'You did not stall on a word you had not learned.',
  'The jargon is on a learner surface.',
  `${Cap(unitRef('a2.19'))} measured it on a Pixel 6.`,
  'Everything on a card comes from the corpus.',
];

/** THE SECOND ERROR: the naming form left behind avoir. a2.05's error, which
 *  arrives here in a new way — the learner looks for the past form, does not
 *  find one, and ships the verb as it stands. A LIST for the same reason. */
const NAMING_FORMS = FORMS.map((f) => f.verb.replace(/^s['’]/, '')).join('|');

export const INFINITIVE_AFTER_AVOIR = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:${AUX}|${NEG_AUX})\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?(?:${NAMING_FORMS})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const INFINITIVE_MUST_FIRE: readonly string[] = [
  "J'ai prendre le bus.",
  "J'ai faire le ménage.",
  'Il a voir Marie.',
  "Nous avons ouvrir la porte.",
  "Je n'ai pas comprendre.",
];

export const INFINITIVE_MUST_NOT_FIRE: readonly string[] = [
  "J'ai pris le bus.",
  "J'ai fait le ménage.",
  "J'ai pu venir.",
  "J'ai voulu partir.",
  "J'ai dû partir.",
  "J'ai promis de venir.",
  'Prendre goes to pris and nothing about the verb says so.',
  'You did not stall on a word you had not learned.',
];

/** THE THIRD: an agreed past form. a2.05 stated its side plainly and this lesson
 *  holds it; a2.21 says the opposite for a short list of verbs and the contrast
 *  only works if this lesson does not blur it. NO AUTHORED SENTENCE HERE AGREES
 *  A PARTICIPLE WITH ANYTHING, including the three être rows, which are all
 *  masculine singular for that reason. */
const AGREED = FORMS
  .map((f) => f.past)
  .filter((p) => !/[éû]$/.test(p))
  .flatMap((p) => [`${p}e`, `${p}s`, `${p}es`])
  .concat(['née', 'nés', 'nées', 'été e', 'morte', 'morts', 'mortes', 'due', 'dus', 'dues'])
  .filter((w) => !/\s/.test(w))
  .join('|');

export const AGREED_PAST_FORM = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:${AUX}|${NEG_AUX}|(?:il|elle|on)\\s+est|(?:ils|elles)\\s+sont|je\\s+suis|tu\\s+es|nous\\s+sommes|vous\\s+êtes)\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?(?:${AGREED})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const AGREED_MUST_FIRE: readonly string[] = [
  "J'ai prise le bus.",
  'Elle a mise la table.',
  'Elle est venue hier.',
  'Elle est née ici.',
  "Ils ont vues Marie.",
];

export const AGREED_MUST_NOT_FIRE: readonly string[] = [
  "J'ai pris le bus.",
  'Elle a mis la table.',
  'Il est venu hier.',
  'Il est né ici.',
  "Ils ont vu Marie.",
  'After avoir the past form does not change for anybody.',
  "J'ai des idées.",
  'on a issues',
  'il a values',
];

/** THE FOURTH, AND IT IS THE BOUNDARY THE BRIEF CALLS GENUINELY AWKWARD.
 *
 *  être in front of a past form is a2.21's subject. This lesson teaches the FORM
 *  of `venu`, `né` and `mort` and says in one line that their first word is
 *  somebody else's. So être is not banned outright — that would mean the three
 *  forms could not be shown at all — it is CONFINED: it may appear only in the
 *  sections named in ETRE_SECTIONS and on the three rows flagged `etre`, and it
 *  may appear on NO PRODUCTION SURFACE. The guard is the confinement rather than
 *  the absence, and the test walks both halves. */
const ETRE_AUX = "(?:je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+êtes|ils\\s+sont|elles\\s+sont|il\\s+n['’]est|elle\\s+n['’]est)";
/** Every past form in this lesson, plus the être set a2.21 owns, AND their
 *  agreed variants: `Elle est partie` is the shape a2.21 teaches and this guard
 *  has to see it in order to keep it out. */
const ETRE_SET = ['allé', 'parti', 'sorti', 'resté', 'arrivé', 'tombé', 'monté', 'entré', 'rentré', 'devenu', 'revenu', 'descendu'];
const ANY_PAST = [...FORMS.map((f) => f.past), ...ETRE_SET]
  .flatMap((p) => (/[éiu]$/.test(p) ? [`${p}es`, `${p}s`, `${p}e`, p] : [`${p}es`, `${p}s`, `${p}e`, p]))
  .join('|');

export const ETRE_AUXILIARY = new RegExp(
  `(?<![\\p{L}\\p{N}-])${ETRE_AUX}\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?(?:${ANY_PAST})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const ETRE_MUST_FIRE: readonly string[] = [
  'Il est venu hier.',
  'Il est né ici.',
  'Je suis allé à Paris.',
  'Elle est partie hier.',
  "Il n'est pas arrivé.",
];

export const ETRE_MUST_NOT_FIRE: readonly string[] = [
  'Il est midi.',
  'Elle est ici aussi.',
  'On est prêt.',
  "J'ai pris le bus.",
  `Three of these put a different word in front instead of avoir.`,
  'Il va partir.',
];

/** THE FIFTH: teaching WHICH auxiliary a verb takes, which is a2.21's whole
 *  canDo and must not appear on any surface here. It is a shape over the ENGLISH
 *  as well as the French, because the way this would leak is an explanation
 *  rather than a sentence. */
/** GUARD THE THING, NOT THE LETTERS (a2.14 §6, a2.17 §7). An earlier draft of
 *  this shape carried `use` on its own and fired on « Three of them do not use
 *  avoir », which is a statement of fact and the exact sentence this lesson has
 *  to be able to make. What is banned is an INSTRUCTION TO CHOOSE, so the shape
 *  needs a choosing verb AND one of the two words within the same clause, or one
 *  of the three mnemonics people teach this rule with. */
export const AUXILIARY_CHOICE =
  /\b(?:which|choose|choosing|pick|picking|decide|deciding|select)\b[^.?!]{0,80}\b(?:avoir|être|auxiliary|first word|helper verb)\b|\b(?:verbs?\s+of\s+motion|house\s+of\s+être|DR\s*MRS\s*VANDERTRAMP)\b/i;

export const CHOICE_MUST_FIRE: readonly string[] = [
  'Choose avoir or être depending on the verb.',
  'You decide which first word the verb takes.',
  'Verbs of motion take être.',
  'Use être for the verbs in the house of être.',
  'Pick the auxiliary that matches the verb.',
];

export const CHOICE_MUST_NOT_FIRE: readonly string[] = [
  'Three of these put a different word in front instead of avoir, and the form is all this lesson teaches you about them.',
  'Three of them do not use avoir.',
  'Which group is it in?',
  'Pick the spelling with the little roof on it.',
  'Do not build these. Reach for the group it is in.',
  `The first word is avoir and you have had it since ${unitRef('a1.07')}.`,
  `Which verbs do it, and what happens to the form afterwards, is ${unitRef('a2.21')}.`,
];

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT NO EAR QUESTION MAY ASK
 * ═══════════════════════════════════════════════════════════════════════ */

/** `dû` against `du` is one sound and there is no correct answer to an ear
 *  question offering both. So is every masculine/feminine pair in the set, which
 *  is a2.21's subject arriving early and invisibly: `pris` and `prise` are one
 *  sound, so a learner will never hear the agreement a2.21 is about to teach.
 *
 *  Enforced rather than reported, in a2.10's and a2.11's shape:
 *
 *      if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(...)
 *
 *  which fires only when two options differ ONLY by a member of one pair, so
 *  « J'ai dû partir. » against « J'ai bu du thé. » stays legal: the rest differs. */
export const NO_EAR_QUESTION: readonly (readonly [string, string])[] = [
  ['dû', 'du'],
  ['pris', 'prise'],
  ['mis', 'mise'],
  ['vu', 'vue'],
  ['dit', 'dite'],
  ['su', 'sue'],
  ['eu', 'eue'],
  ['né', 'née'],
  ['venu', 'venue'],
  ['mort', 'morte'],
];

export const EAR_CLAIM =
  'The ear has one job in this lesson and it is the shape of the second word. What it cannot do is tell you about the accent on dû, because dû and du are one sound, and it cannot tell you about the ending on a form that agrees, because those are one sound too.';

/** The one ear question this lesson can ask, and the brief names it: `eu`, where
 *  the sound and the spelling are furthest apart. The options differ by the
 *  consonant in front of a single pure vowel, which is a real difference. */
export const EAR_QUESTION_SUBJECT = 'the second word, when it is one syllable long';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE, MEASURED THROUGH THE REAL FUNCTION
 * ═══════════════════════════════════════════════════════════════════════ */

/** Written out rather than derived, because a derived table agrees with itself.
 *  Every entry is checked through the REAL `dicteeMode` and `letterCount` in the
 *  batch, the merge and the test, in both directions.
 *
 *  Corrections §4: above sixteen letters `dicteeMode` switches to WORD tiles and
 *  hands every real word over pre-spelled, which for a lesson about the SPELLING
 *  of a form would hand over the answer. Eleven rows fit and they cover all five
 *  groups. */
export const DICTEE_MATRIX: readonly { fr: string; letters: number; group: Group | 'neg' }[] = [
  { fr: "J'ai pris le bus.", letters: 12, group: '-is' },
  { fr: "J'ai mis la table.", letters: 13, group: '-is' },
  { fr: "J'ai dit oui.", letters: 9, group: '-it' },
  { fr: "J'ai vu Marie.", letters: 10, group: '-u' },
  { fr: "J'ai bu un café.", letters: 11, group: '-u' },
  { fr: "J'ai dû partir.", letters: 11, group: '-u' },
  { fr: "J'ai bu du thé.", letters: 10, group: '-u' },
  { fr: "J'ai ouvert la porte.", letters: 16, group: '-ert' },
  { fr: "J'ai fait le ménage.", letters: 15, group: 'odd' },
  { fr: "J'ai eu peur.", letters: 9, group: 'odd' },
  { fr: "Je n'ai pas compris.", letters: 15, group: 'neg' },
];

export const DICTEE_LIMIT = 16;

/** THE NEAR MISS FOR EVERY DICTÉE ROW, in a2.09's shape: the mistake a learner
 *  would actually make, paired with its target, and asserted IN BOTH DIRECTIONS
 *  through the real `normalizeFr`. `canTell: false` means the dictée accepts the
 *  mistake, which is a fact about the app rather than a defect in the row, and
 *  saying which rows are in that state is the point of the table.
 *
 *  THE TWO THAT CANNOT BE TOLD APART ARE THE CIRCUMFLEX AND THE CEDILLA, and
 *  both are stated on the card rather than papered over. */
export const DICTEE_NEAR_MISS: readonly { target: string; miss: string; canTell: boolean; why: string }[] = [
  { target: "J'ai pris le bus.", miss: "J'ai prendu le bus.", canTell: true, why: 'A different word, so the dictée sees it. This is the row that tests the thing the lesson is about.' },
  { target: "J'ai mis la table.", miss: "J'ai mettu la table.", canTell: true, why: 'The same, on the second head of the group.' },
  { target: "J'ai ouvert la porte.", miss: "J'ai ouvri la porte.", canTell: true, why: 'The -IR machine against the -ert group, and the letters differ, so it can be tested.' },
  { target: "J'ai fait le ménage.", miss: "J'ai faisu le ménage.", canTell: true, why: 'The commonest verb in the set, and the non-word the machine gives for it.' },
  { target: "J'ai dû partir.", miss: "J'ai du partir.", canTell: false, why: 'THE CIRCUMFLEX IS STRIPPED BEFORE THE COMPARISON. normalizeFr removes every combining mark, so the dictée marks du right and tells the learner they spelled it correctly. The row is a dictée target for its other letters and the circumflex is asked about by mcq instead, which is the only surface that can.' },
  { target: "J'ai eu peur.", miss: "J'ai u peur.", canTell: true, why: 'A dropped letter survives a fold, so the two-letter spelling of a one-sound word IS testable typed. This is the row that makes the eu mission worth having.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLING DECISIONS, MEASURED
 * ═══════════════════════════════════════════════════════════════════════ */

export const RESPELL_CONVENTION =
  'Every past form ending in -u is spelled Ü, because it is the French u and the house writes that vowel Ü. Eu is Ü on its own, which is the whole of the eu mission. The -is and -it groups end in EE. The -ert group ends in EHR. J\'ai is ZHAY on every screen, read off the twenty published rows that hold it.';

/** Corrections §6, a2.17 §2 and a2.18 §1: a nasal is invisible to
 *  `hasPlainNasalFor` when a LETTER follows the n or m inside the token.
 *
 *  MEASURED OVER EVERY SUPERSCRIPT THIS BUILD WRITES: twelve seen, TWO MISSED,
 *  and both misses are the same shape.
 *
 *      kohⁿs-TRWEE   « J'ai construit un mur. »      an s follows the nasal
 *      ray-POHⁿSS    « J'ai su la réponse. »          an S follows the nasal
 *
 *  a2.05 measured 39 seen and 0 missed and concluded that the house spellings
 *  its frame needed all closed at a token boundary. This lesson's frame needs
 *  two that do not, so the blind spot is exercised here for the first time since
 *  a2.11. Both are asserted BY NAME in all three layers, in both directions, so
 *  the day the checker gains the ability to see them the assertion goes red
 *  rather than the list going quietly dead. */
export const EXPECTED_NASALS_SEEN = 12;
export const EXPECTED_NASALS_MISSED = 2;

export const BLIND_NASALS: readonly { fr: string; respell: string; token: string; why: string }[] = [
  { fr: "J'ai construit un mur.", respell: 'ZHAY kohⁿs-TRWEE uhⁿ MÜR', token: 'kohⁿs', why: 'An s follows the nasal inside the token, so `hasPlainNasalFor` cannot see it. Breaking the superscript to a plain n leaves `kohns-TRWEE`, which the checker calls clean and which is wrong.' },
  { fr: "J'ai su la réponse.", respell: 'ZHAY SÜ la ray-POHⁿSS', token: 'POHⁿSS', why: 'Two S characters follow the nasal, and the same blindness applies. `ray-POHnSS` is not flagged and is wrong.' },
];

/** Corrections §6 asks for the false-positive path to be looked for and its
 *  absence reported. Six candidates from this lesson's own strings were tried
 *  through the real function and NONE fires, and a control that must fire is
 *  carried so the six negatives keep meaning something. */
export const FALSE_POSITIVE_CANDIDATES: readonly { fr: string; respell: string }[] = [
  { fr: "J'ai connu son frère.", respell: 'ZHAY koh-NÜ sohⁿ FREHR' },
  { fr: 'le ménage', respell: 'luh may-NAZH' },
  { fr: 'la porte', respell: 'la PORT' },
  { fr: 'une lettre', respell: 'ün LEHTR' },
  { fr: 'le journal', respell: 'luh zhoor-NAL' },
  { fr: 'la table', respell: 'la TABL' },
];

export const FALSE_POSITIVE_CONTROL = { fr: 'le problème', respell: 'luh proh-BLEHM' } as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUTHORED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Role = 'group' | 'etre' | 'contrast' | 'scene' | 'talk' | 'negative';

export type PCRow = Omit<Item, 'drills'> & {
  drills: string[];
  role: Role;
  /** The past form this row teaches, where it teaches one. Named `form` and not
   *  `kind`, because `Item` already has a `kind` and an intersection of two
   *  different `kind`s reduces to `never`. a2.04 lost a build hour to that. */
  form?: string;
};

const S = (
  n: number, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], tags: string[], notes: string, form?: string,
): PCRow => ({
  id: V(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags, drills, version: 1, role, ...(form ? { form } : {}),
}) as PCRow;

/** Corrections §4: a row carries `dictation` only where `dicteeMode()` puts it
 *  in LETTERS mode, and the batch runs the REAL function over every row that
 *  carries the drill AND over every row that does not. */
const D = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const NO_D = ['sentence', 'flashcard', 'voiceflash', 'review'];

const T = ['verbes', 'participes'];

/** THE FRAME, AND WHY IT IS « J'ai ».
 *
 *  Corrections §3 says to budget for authoring the whole paradigm in one frame
 *  and to pick the frame by §4 rather than by taste. Here the frame is the first
 *  two words rather than a verb, because the variable this lesson teaches IS the
 *  verb: thirty of the forty-three rows open « J'ai » and the second word is the
 *  only thing that changes shape.
 *
 *  THE COMPLEMENT IS NOT CONSTANT AND CANNOT BE. Thirty-three different verbs
 *  need thirty-three different things to be done to, and a frame that forced one
 *  complement onto all of them would produce sentences nobody says. It is kept
 *  to two words wherever possible and it is scenery; the guards check the FIRST
 *  TWO WORDS and the SECOND WORD, which are the parts that are the lesson. */
export const FRAME = "J'ai";
export const FRAME_RESPELL = 'ZHAY';

/** THE AUTHORED ROWS.
 *
 *  NOT ONE HEADWORD AMONG THEM, NOT ONE BARE PAST FORM, and not one gendered
 *  single word, so nothing here can join a1.03's measured ending population by
 *  either route — neither by authoring (invariants §5) nor by the CARRY a2.04
 *  discovered (ledger, a2.04 §0). The batch proves it against Postgres and the
 *  merge against the seed. */
export const PARTICIPES: PCRow[] = [
  /* ── The -is group. Seven forms, six rows: `assis` has none. ──────────────*/
  S(591, "J'ai pris le bus.", 'I took the bus.', 'ZHAY PREE luh BÜSS', '/ʒe pʁi lə bys/', 'group', D, [...T, 'is'], 'The head of the group and the frame row of the lesson. Twelve letters, so the dictée takes it, and its near miss is « prendu », which the dictée CAN see.', 'pris'),
  S(592, "J'ai mis la table.", 'I set the table.', 'ZHAY MEE la TABL', '/ʒe mi la tabl/', 'group', D, [...T, 'is'], 'The second head. Thirteen letters. Mettre and prendre are both -RE verbs and both refuse -u, which is what makes this a group.', 'mis'),
  S(593, "J'ai appris le mot.", 'I learned the word.', 'ZHAY ah-PREE luh MOH', '/ʒe a.pʁi lə mo/', 'group', NO_D, [...T, 'is'], 'pris with ap in front. Fourteen letters, and it is not a dictée target because the group already has two.', 'appris'),
  S(594, "J'ai compris la question.", 'I understood the question.', 'ZHAY kohⁿ-PREE la kehs-TYOHⁿ', '/ʒe kɔ̃.pʁi la kɛs.tjɔ̃/', 'group', NO_D, [...T, 'is'], 'Twenty letters, so WORD mode and no dictation drill. Two nasals, both closing at a token boundary and both seen by the checker.', 'compris'),
  S(595, "J'ai remis la clé.", 'I handed the key back.', 'ZHAY ruh-MEE la KLAY', '/ʒe ʁə.mi la kle/', 'group', NO_D, [...T, 'is'], `mis with re in front, on the naming form ${unitRef(FAMILY_UNIT)} authored itself at fr.a2.verbes.423.`, 'remis'),
  S(596, "J'ai promis de venir.", 'I promised to come.', 'ZHAY proh-MEE duh vuh-NEER', '/ʒe pʁɔ.mi də və.niʁ/', 'group', NO_D, [...T, 'is'], 'mis with pro in front, and the meaning has nothing to do with putting anything anywhere. Sixteen letters, exactly at the limit, and it is left off the dictée because « venir » on the end would be a second thing to spell.', 'promis'),

  /* ── The -it group. Four forms, four rows. ────────────────────────────────*/
  S(597, "J'ai dit oui.", 'I said yes.', 'ZHAY DEE WEE', '/ʒe di wi/', 'group', D, [...T, 'it'], 'Nine letters, the shortest row in the lesson. « J\'ai dit » and « il dit » are the same sound, which is why this one is spelled rather than heard.', 'dit'),
  S(598, "J'ai écrit une lettre.", 'I wrote a letter.', 'ZHAY ay-KREE ün LEHTR', '/ʒe e.kʁi yn lɛtʁ/', 'group', NO_D, [...T, 'it'], 'Seventeen letters, so WORD mode. Écrit is also published as a word in its own right meaning "written".', 'écrit'),
  S(599, "J'ai conduit la voiture.", 'I drove the car.', 'ZHAY kohⁿ-DWEE la vwa-TÜR', '/ʒe kɔ̃.dɥi la vwa.tyʁ/', 'group', NO_D, [...T, 'it'], 'Every -uire verb does this. The naming form is imported from fr.a1.routines.107, which already holds the closed nasal.', 'conduit'),
  S(600, "J'ai construit un mur.", 'I built a wall.', 'ZHAY kohⁿs-TRWEE uhⁿ MÜR', '/ʒe kɔ̃s.tʁɥi ɛ̃ myʁ/', 'group', NO_D, [...T, 'it'], 'THE ROW THE NASAL CHECKER IS BLIND TO. An s follows the nasal inside the token, so `kohns-TRWEE` passes while being wrong. See BLIND_NASALS.', 'construit'),

  /* ── The -u group. Thirteen forms; venu is at 620 with the être rows. ─────*/
  S(601, "J'ai vu Marie.", 'I saw Marie.', 'ZHAY VÜ ma-REE', '/ʒe vy ma.ʁi/', 'group', D, [...T, 'u'], 'Ten letters. Two letters off a five-letter verb, and nothing in voir predicts them.', 'vu'),
  S(602, "J'ai lu le journal.", 'I read the newspaper.', 'ZHAY LÜ luh zhoor-NAL', '/ʒe ly lə ʒuʁ.nal/', 'group', NO_D, [...T, 'u'], `Fourteen letters. ${Cap(unitRef(FAIRE_UNIT, 'a2'))}'s third verb, and its past form is two letters long.`, 'lu'),
  S(603, "J'ai bu un café.", 'I had a coffee.', 'ZHAY BÜ uhⁿ ka-FAY', '/ʒe by ɛ̃ ka.fe/', 'group', D, [...T, 'u'], 'Eleven letters. The corpus already publishes « bu » bare, in a theme about vowels, with no respelling on it at all.', 'bu'),
  S(604, "J'ai su la réponse.", 'I knew the answer.', 'ZHAY SÜ la ray-POHⁿSS', '/ʒe sy la ʁe.pɔ̃s/', 'group', NO_D, [...T, 'u'], 'THE SECOND ROW THE NASAL CHECKER IS BLIND TO: an S follows the nasal inside the token. See BLIND_NASALS.', 'su'),
  S(605, "J'ai pu venir.", 'I was able to come.', 'ZHAY PÜ vuh-NEER', '/ʒe py və.niʁ/', 'group', NO_D, [...T, 'u'], `Ten letters. ${Cap(unitRef(MODAUX_UNIT, 'a2'))}'s verb, and the past form is two letters against the naming form's seven.`, 'pu'),
  S(606, "J'ai voulu partir.", 'I wanted to leave.', 'ZHAY voo-LÜ par-TEER', '/ʒe vu.ly paʁ.tiʁ/', 'group', NO_D, [...T, 'u'], 'The one -oir verb in the group that keeps most of itself.', 'voulu'),
  S(607, "J'ai dû partir.", 'I had to leave.', 'ZHAY DÜ par-TEER', '/ʒe dy paʁ.tiʁ/', 'group', D, [...T, 'u', 'accent'], 'ELEVEN LETTERS AND THE DICTÉE CANNOT TEST ITS ACCENT. normalizeFr strips the circumflex, so « J\'ai du partir. » is marked right. The row is a dictée target for its other letters and the accent is asked about by mcq. See DICTEE_NEAR_MISS.', 'dû'),
  S(608, "J'ai connu son frère.", 'I knew his brother.', 'ZHAY koh-NÜ sohⁿ FREHR', '/ʒe kɔ.ny sɔ̃ fʁɛʁ/', 'group', NO_D, [...T, 'u'], `${Cap(unitRef(SAVOIR_UNIT, 'a2'))}'s second verb, and the circumflex of connaître is gone in the past form.`, 'connu'),
  S(609, "J'ai tenu la porte.", 'I held the door.', 'ZHAY tuh-NÜ la PORT', '/ʒe tə.ny la pɔʁt/', 'group', NO_D, [...T, 'u'], `${Cap(unitRef(ALLER_UNIT, 'a2'))}'s other verb, and it behaves like venu without the different first word.`, 'tenu'),
  S(610, "J'ai reçu ton message.", 'I got your message.', 'ZHAY ruh-SÜ tohⁿ meh-SAHZH', '/ʒe ʁə.sy tɔ̃ me.saʒ/', 'group', NO_D, [...T, 'u'], 'Seventeen letters, so WORD mode. The cedilla survives into the past form and nothing in this app can test a cedilla.', 'reçu'),
  S(611, "J'ai couru vite.", 'I ran fast.', 'ZHAY koo-RÜ VEET', '/ʒe ku.ʁy vit/', 'group', NO_D, [...T, 'u'], `AN -IR VERB WHOSE PAST FORM IS NOT -i. ${Cap(unitRef('a2.05'))} taught -IR to -i and courir is one of the verbs that refuses it.`, 'couru'),
  S(612, "J'ai cru ça.", 'I believed that.', 'ZHAY KRÜ SA', '/ʒe kʁy sa/', 'group', NO_D, [...T, 'u'], 'Eight letters. Cru is also published as a word meaning "raw", which is a different word with the same spelling.', 'cru'),

  /* ── The -ert group. Four forms, four rows. ───────────────────────────────*/
  S(613, "J'ai ouvert la porte.", 'I opened the door.', 'ZHAY oo-VEHR la PORT', '/ʒe u.vɛʁ la pɔʁt/', 'group', D, [...T, 'ert'], 'SIXTEEN LETTERS, exactly at the limit, so it is in LETTERS mode by one character. The head of the group and the one whose near miss « ouvri » the dictée can see.', 'ouvert'),
  S(614, "J'ai offert des fleurs.", 'I gave flowers.', 'ZHAY oh-FEHR day FLEUR', '/ʒe ɔ.fɛʁ de flœʁ/', 'group', NO_D, [...T, 'ert'], 'Eighteen letters, so WORD mode. The same three letters on a verb that has nothing to do with opening.', 'offert'),
  S(615, "J'ai couvert le plat.", 'I covered the dish.', 'ZHAY koo-VEHR luh PLA', '/ʒe ku.vɛʁ lə pla/', 'group', NO_D, [...T, 'ert'], 'Ouvert with a c on the front, and the corpus publishes it as a weather word meaning "overcast".', 'couvert'),
  S(616, "J'ai beaucoup souffert.", 'I suffered a lot.', 'ZHAY boh-KOO soo-FEHR', '/ʒe bo.ku su.fɛʁ/', 'group', NO_D, [...T, 'ert'], `The fourth and last member, with ${unitRef('a2.05')}\'s adverb sitting in the gap where that lesson put it.`, 'souffert'),

  /* ── The five in no group. `mort` has no row: see FORMS. ──────────────────*/
  S(617, "J'ai fait le ménage.", 'I did the housework.', 'ZHAY FEH luh may-NAZH', '/ʒe fɛ lə me.naʒ/', 'group', D, [...T, 'odd'], 'Fifteen letters. The commonest verb in the whole set and it is in no group at all.', 'fait'),
  S(618, "J'ai été malade.", 'I was ill.', 'ZHAY ay-TAY ma-LAD', '/ʒe e.te ma.lad/', 'group', NO_D, [...T, 'odd'], 'From nowhere. There is no route from être to été, and the same three letters are also the word for summer.', 'été'),
  S(619, "J'ai eu peur.", 'I was frightened.', 'ZHAY Ü PUHR', '/ʒe y pœʁ/', 'group', D, [...T, 'odd'], 'NINE LETTERS AND THE HARDEST TWO IN THE LESSON. Eu is one sound, it is not the sound either letter suggests, and a dropped letter survives a fold so the dictée CAN test it.', 'eu'),

  /* ── The three with a different first word. ONE SECTION, and no production
   *    surface anywhere in the lesson asks a learner to choose it. ──────────*/
  S(620, 'Il est venu hier.', 'He came yesterday.', 'eel eh vuh-NÜ YEHR', '/il ɛ və.ny jɛʁ/', 'etre', NO_D, [...T, 'u', 'etre'], `The form is an ordinary member of the -u group. The first word is ${unitRef(ETRE_UNIT, 'a2')}'s and this row carries no dictation drill for that reason.`, 'venu'),
  S(621, 'Il est né ici.', 'He was born here.', 'eel eh NAY ee-SEE', '/il ɛ ne i.si/', 'etre', NO_D, [...T, 'odd', 'etre'], `Shorter than the verb it comes from, which nothing else in the set is. Masculine singular, deliberately: agreement is ${unitRef(ETRE_UNIT, 'a2')}'s and no row here shows one.`, 'né'),

  /* ── The two contrast rows. ───────────────────────────────────────────────*/
  S(622, "J'ai eu froid.", 'I was cold.', 'ZHAY Ü FRWA', '/ʒe y fʁwa/', 'contrast', NO_D, [...T, 'odd'], 'The second eu row, so the ear question has three options that differ by the consonant in front of one pure vowel rather than by the vowel itself.', 'eu'),
  S(623, "J'ai bu du thé.", 'I drank some tea.', 'ZHAY BÜ dü TAY', '/ʒe by dy te/', 'contrast', D, [...T, 'u', 'accent'], 'THE OTHER HALF OF THE CIRCUMFLEX PAIR. « du » here is the word meaning "some" and it is the same sound as « dû ». Ten letters, so the dictée takes it, and the dictée cannot tell the two apart either.'),

  /* ── The scene ───────────────────────────────────────────────────────────
   *
   * Doctrine §B.2. He has « Samedi, j'ai... » out and committed, the verb is
   * prendre, and what arrives is the output of last lesson's rule. The sentence
   * does not stop because he stopped: it stops because the word is not a word. */
  S(624, 'Et samedi, alors ?', 'And on Saturday, then?', 'ay sam-DEE ah-LOR', '/e sam.di a.lɔʁ/', 'scene', NO_D, T, 'Her question, and it holds no verb he can copy a form out of.'),
  S(625, "Samedi, j'ai pris le bus.", 'On Saturday I took the bus.', 'sam-DEE · ZHAY PREE luh BÜSS', '/sam.di ʒe pʁi lə bys/', 'scene', NO_D, [...T, 'is'], 'What he meant, in full, and it is the frame row with a day on the front.'),
  S(626, 'Pardon ? Tu as fait quoi ?', 'Sorry? You did what?', 'par-DOHⁿ · tü a FEH KWA', '/paʁ.dɔ̃ ty a fɛ kwa/', 'scene', NO_D, [...T, 'odd'], 'What she says instead, and it is the point of the scene: she has not been offended and she has not corrected anything. She simply did not receive a word.'),

  /* ── The conversation, for the role play ─────────────────────────────────*/
  S(627, 'Et toi, tu as fait quoi samedi ?', 'And you, what did you do on Saturday?', 'ay TWAH · tü a FEH KWA sam-DEE', '/e twa ty a fɛ kwa sam.di/', 'talk', NO_D, [...T, 'odd'], 'The same colleague, later in the week, with more time. No inversion, which is how it is asked.'),
  S(628, "J'ai vu un film.", 'I saw a film.', 'ZHAY VÜ uhⁿ FEELM', '/ʒe vy ɛ̃ film/', 'talk', NO_D, [...T, 'u'], 'The -u group in the first answer of the conversation.'),
  S(629, 'Tu as lu le journal ?', 'Did you read the paper?', 'tü a LÜ luh zhoor-NAL', '/ty a ly lə ʒuʁ.nal/', 'talk', NO_D, [...T, 'u'], 'A question in the past with no inversion, on a two-letter past form.'),
  S(630, "Non, je n'ai pas eu le temps.", 'No, I did not have time.', 'nohⁿ · zhuh nay pa Ü luh TAHⁿ', '/nɔ̃ ʒə ne pa y lə tɑ̃/', 'talk', NO_D, [...T, 'odd', 'negatif'], 'The negative, in the shape a2.05 taught, round the hardest two letters in the lesson. The `pa` is that lesson\'s value, read off the six published rows it measured.'),
  S(631, 'Tu as ouvert la fenêtre ?', 'Did you open the window?', 'tü a oo-VEHR la fuh-NEHTR', '/ty a u.vɛʁ la fə.nɛtʁ/', 'talk', NO_D, [...T, 'ert'], 'The -ert group in a question.'),
  S(632, "Oui, il a fait très chaud.", 'Yes, it was very hot.', 'WEE · eel a FEH treh SHOH', '/wi il a fɛ tʁɛ ʃo/', 'talk', NO_D, [...T, 'odd'], 'And the closing line, where « il a fait » is the weather rather than a person doing something.'),

  /* ── The one recap of a2.05's negative, with an irregular form in it. ─────*/
  S(633, "Je n'ai pas compris.", 'I did not understand.', 'zhuh nay pa kohⁿ-PREE', '/ʒə ne pa kɔ̃.pʁi/', 'negative', D, [...T, 'is', 'negatif'], `FIFTEEN LETTERS, so the dictée takes it. The gap is ${unitRef('a2.05')}\'s and unchanged; the only thing this lesson has done to it is put a form in the second slot that could not be built.`, 'compris'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED SETS
 * ═══════════════════════════════════════════════════════════════════════ */

export const GROUP_ROWS = PARTICIPES.filter((r) => r.role === 'group');
export const ETRE_ROWS = PARTICIPES.filter((r) => r.role === 'etre');
export const CONTRAST_ROWS = PARTICIPES.filter((r) => r.role === 'contrast');
export const SCENE_ROWS = PARTICIPES.filter((r) => r.role === 'scene');
export const TALK_ROWS = PARTICIPES.filter((r) => r.role === 'talk');
export const NEGATIVE_ROWS = PARTICIPES.filter((r) => r.role === 'negative');

export const AUTHORED_IDS: string[] = PARTICIPES.map((r) => r.id);

export const EXPECTED_AUTHORED = 43;

/** One authored row by its French. Throws: a card silently missing its row looks
 *  like a card that never wanted one. */
export function row(fr: string): PCRow {
  const r = PARTICIPES.find((x) => x.fr === fr);
  if (!r) throw new Error(`a2.20: no authored row for "${fr}".`);
  return r;
}

/** The row that teaches a given past form, or null where the form is taught from
 *  an imported card. `assis` and `mort` are the two. */
export const rowForForm = (past: string): PCRow | null => {
  const f = formOf(past);
  return f.rowId ? PARTICIPES.find((r) => r.id === f.rowId) ?? null : null;
};

/** NOT ONE HEADWORD IS AUTHORED, AND NOT ONE BARE PAST FORM. Asserted as empty
 *  records rather than omitted, so a later author who adds one has to say so and
 *  has to face both a1.03's ending population and the split a2.05 settled. */
export const AUTHORED_HEADWORDS: Record<string, string> = {};
export const AUTHORED_PAST_FORMS: Record<string, string> = {};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE IMPORTED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Import = {
  id: string;
  fr: string;
  use: 'naming' | 'word' | 'phrase';
  why: string;
};

/** THIRTY-NINE ROWS, AND NOT ONE HEADWORD AUTHORED, which is corrections §2
 *  holding for the fifteenth build in a row.
 *
 *  Thirty-three are the naming forms of the thirty-three past forms, five are
 *  past forms already published as ordinary words, and one is a phrase. */
export const IMPORTED: readonly Import[] = [
  ...FORMS.map((f): Import => ({
    id: f.verbId,
    fr: f.verb,
    use: 'naming',
    why: `The naming form of « ${f.past} ». ${f.note}`,
  })),
  ...ALSO_A_WORD.map((w): Import => ({
    id: w.id,
    fr: w.past,
    use: 'word',
    why: `« ${w.past} » PUBLISHED AS AN ORDINARY WORD MEANING "${w.asWord}", ungendered and respelled. Five of the thirty-three are already in the app this way and not one is glossed as a past form.`,
  })),
  {
    id: 'fr.a1.emotions.034',
    fr: 'mort de rire',
    use: 'phrase',
    why: '[MOR duh REER], and the second card for `mort`, which is the only form in the set that is a different word from its verb. It is the one member of the odd group with no authored sentence, because a full past for mourir needs a2.21.',
  },
];

export const IMPORTED_IDS: readonly string[] = [...new Set(IMPORTED.map((i) => i.id))];
export const EXPECTED_IMPORTED = 39;

export const ITEM_IMPORT_IDS: readonly string[] = IMPORTED_IDS;

/** a1.03's ending population measured off the SEED, through the real function,
 *  against the committed seed at version 40. Nothing this build does may move
 *  it, by either route: it authors no single-word row at all, and every carried
 *  single-word row was checked for `gender` before it went on the list. */
export const A103_SEED_POPULATION = 1890;

/** FIFTEEN OF THE THIRTY-NINE ARE ABSENT FROM THE SEED, AND FOUR OF THEM WERE
 *  NOT PREDICTED.
 *
 *  Corrections §10: the seed is a CUT of Postgres and a lesson whose itemIds
 *  resolve to nothing renders empty cards. a2.05 §6 says *predict nothing about
 *  the cut; measure it*, and this build proved the point in the other direction:
 *  its first list was eleven and the merge's surprise check found FOUR MORE. All
 *  four are the already-a-word rows, in themes nobody thinks of as a verb theme
 *  — `examens-et-diplomes`, `courses`, `meteo`, `adjectifs-essentiels` — which
 *  is exactly where a cut is thinnest.
 *
 *  Measured against the committed seed at version 40, and the merge re-measures
 *  it and reports any surprise in either direction on every run. */
export const ABSENT_FROM_SEED: readonly string[] = [
  'fr.a1.emotions.034',
  'fr.a1.meteo.062',
  'fr.a2.courses.070',
  'fr.a2.examens-et-diplomes.045',
  'fr.sons.adjectifs-essentiels.082',
  'fr.sons.adjectifs-essentiels.161',
  'fr.sons.consonnes.110',
  'fr.sons.verbes-essentiels.001',
  'fr.sons.verbes-essentiels.011',
  'fr.sons.verbes-essentiels.047',
  'fr.sons.verbes-essentiels.049',
  'fr.sons.verbes-essentiels.081',
  'fr.sons.verbes-essentiels.082',
  'fr.sons.verbes-essentiels.100',
  'fr.sons.verbes-essentiels.118',
];

export const importOf = (id: string): Import => {
  const i = IMPORTED.find((x) => x.id === id);
  if (!i) throw new Error(`a2.20: ${id} is not in IMPORTED.`);
  return i;
};

export const namingId = (past: string): string => formOf(past).verbId;

/* ══════════════════════════════════════════════════════════════════════════
 *  ROWS READ AND NOT IMPORTED
 * ═══════════════════════════════════════════════════════════════════════ */

export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  {
    id: 'fr.sons.accents.058',
    fr: 'le reçu',
    why: `CARRIES gender=m. « reçu » is one of the seven past forms this lesson wanted as an already-a-word card and both published copies (this and fr.sons.consonnes.086) are gendered. ${Cap(unitRef('a2.04'))} §0: ${unitRef('a1.03')}\'s ending population is measured off the SEED and a CARRY is what puts a row there. Refused, and ALSO_A_WORD is five rather than seven for this reason.`,
  },
  {
    id: 'fr.sons.accents.002',
    fr: 'été',
    why: `CARRIES gender=m, and it is the season rather than the past form. The ungendered copies at fr.sons.voyelles.542 and .576 carry NO RESPELLING, which is ${unitRef('a2.13')} §1: a row without one reaches a card the learner cannot say. So « été » gets no already-a-word card and the fact is stated on the odd-group deck instead.`,
  },
  {
    id: 'fr.a1.ecole.049',
    fr: 'écrire',
    why: 'CARRIES gender=m on a bare infinitive, which is wrong on its own terms and radioactive on ours. fr.sons.consonnes.110 holds the same word ungendered at [ay-KREER] and is the row taken.',
  },
  {
    id: 'fr.a1.ecole.048',
    fr: 'lire',
    why: 'CARRIES gender=m, same shape. fr.a1.dictee.091 holds [LEER] ungendered and is the row taken.',
  },
  {
    id: 'fr.a1.deplacements.042',
    fr: 'conduire',
    why: `FLAGGED at [kohn-DWEER], and it is a genuine violation rather than a false positive. It is NOT repaired, because fr.a1.routines.107 already holds the house value [kohⁿ-DWEER] and that is the row this lesson displays. Repairing a row nobody shows is how a build acquires a defect it cannot test (${unitRef('a2.17')} §1, ${unitRef('a2.18')}\'s rule).`,
  },
  {
    id: 'fr.a1.cafe.112',
    fr: "Nous restons assis à l'intérieur.",
    why: 'NO RESPELLING, and it is the only published sentence in the corpus that shows « assis » without a reflexive pronoun. Supplying one would need values for `restons`, `à l\'intérieur` and the liaison across `assis`, and this build\'s rule is that every token of a supplied respelling is read off a published row. Three of those could not be. « assis » is taught as a form on the -is table instead.',
  },
  {
    id: 'fr.a1.presentation-personnelle.107',
    fr: 'Je suis né à Marseille.',
    why: 'NO RESPELLING, and `Marseille` has no published value to read one off. « Il est né ici. » is authored instead, which keeps every token inside values this lesson already uses.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ONE REPAIR
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string; fr: string; from: string; to: string;
  half: string; blind: boolean; house: boolean;
  readOff: string | null; readOffToken: string | null; why: string;
};

/** ONE REPAIR, AND IT IS VISIBLE.
 *
 *  a2.17 §2's shape: `half` is the value you get by repairing ONLY what the
 *  checker reports, `blind` says the checker cannot see the nasal, `house` says
 *  the minimal repair does not reach the house value, and the two reasons are
 *  mutually exclusive fields rather than one boolean. All three are asserted
 *  through the real function in all three layers, and `(half !== to) ===
 *  (blind || house)` is asserted as well.
 *
 *  `construire` holds ONE nasal, the checker sees it because a hyphen follows,
 *  and the minimal repair IS the house value. So `half === to`, `blind` is false
 *  and `house` is false. */
export const REPAIRS: readonly Repair[] = [
  {
    id: 'fr.sons.verbes-essentiels.118',
    fr: 'construire',
    from: 'kohn-STRWEER',
    to: 'kohⁿ-STRWEER',
    half: 'kohⁿ-STRWEER',
    blind: false,
    house: false,
    readOff: 'fr.sons.verbes-essentiels.030',
    readOffToken: 'kohⁿ',
    why: 'A hyphen follows the n, so a2.18 §1\'s rule says the nasal is VISIBLE and the checker flags it. `comprendre` is published as [kohⁿ-PRAHⁿDR] in the same theme, so the closed form is the house one and the minimal repair reaches it. This lesson displays the row on the -it group screen, which is why it is repaired at all.',
  },
];

export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = REPAIRS.filter((r) => !r.blind);
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = REPAIRS.filter((r) => r.blind);
export const ALL_REPAIRS: readonly Repair[] = REPAIRS;
export const EXPECTED_REPAIRS = 1;

/** No respelling is SUPPLIED by this build. Asserted as an empty list rather
 *  than omitted, so a later author who adds one meets a2.03 §7's merge path and
 *  the rule that makes it safe: an addition may only land on a row whose
 *  respelling is EMPTY. */
export const RESPELL_ADDITIONS: readonly {
  id: string; fr: string; to: string; readOff: readonly string[]; why: string;
}[] = [];

/** Rows found broken and left alone, because this build does not display them. */
export const NOT_REPAIRED: readonly { id: string; fr: string; respell: string; why: string }[] = [
  { id: 'fr.a1.deplacements.042', fr: 'conduire', respell: 'kohn-DWEER', why: 'FLAGGED. fr.a1.routines.107 already holds the house value and is the row displayed.' },
  { id: 'fr.a1.rp-voyage.043', fr: 'conduire', respell: 'kohn-DWEER', why: 'FLAGGED. A third copy, same reason.' },
  { id: 'fr.a1.transports-quotidiens.042', fr: 'conduire', respell: 'kohn-DWEER', why: 'FLAGGED. A fourth copy, same reason.' },
  { id: 'fr.a2.rp-quotidien.010', fr: 'conduire', respell: 'kohn-DWEER', why: 'FLAGGED. A fifth copy, same reason.' },
  { id: 'fr.a1.dictee.109', fr: 'comprendre', respell: 'kohn-PRAHNDR', why: 'MIXED, not blind: `kohn` ends a token so the checker sees it, and `AHNDR` is nasal-then-consonant so it does not. a2.17 §14.1 exactly. This build displays fr.sons.verbes-essentiels.030, which is already [kohⁿ-PRAHⁿDR].' },
  { id: 'fr.a1.ecole.193', fr: 'comprendre', respell: 'kohn-PRAHNDR', why: 'The same, a second copy.' },
  { id: 'fr.a1.dictee.095', fr: 'apprendre', respell: 'a-PRAHNDR', why: 'BLIND: a D follows the nasal inside the token, so the checker cannot see it. This build displays fr.a2.disciplines.051, which is already [a-PRAHⁿDR].' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE COUNTS THE THREE LAYERS AGREE ON
 * ═══════════════════════════════════════════════════════════════════════ */

export const EXPECTED_SECTIONS = 27;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 36;
export const EXPECTED_TERMS = 9;
export const EXPECTED_TRAP_DRILLS = 2;
export const SHEET_ID = 'sheet.a2.20.participes';

/** THE MISSION COUNT IS ABOVE THE CONVENTION AND THIS BUILD SAYS SO.
 *
 *  Doctrine §F gives 19 to 24 and the brief asks outright whether the list can
 *  fill twenty missions without padding. THE ANSWER IS THAT IT FILLS
 *  TWENTY-SEVEN, and the reason is the design the brief asks for rather than an
 *  inflation of it: this is not one mission per form. It is ONE MISSION PER
 *  GROUP, and the groups are five, plus the compound payoff, plus the screen
 *  that hands batch 1's verbs back, plus four traps that each turn on a
 *  different thing.
 *
 *  Ledger §a2.13-0 measured that the 24-section shape came from a2.01, was
 *  copied six times, was never checked against a subject, and that there is no
 *  ceiling in `schema.ts`; a2.13 shipped 32 sections and a2.05 shipped 26. */
export const SECTION_CONVENTION = 24;
export const SECTION_OVERRUN_REASON =
  'Five groups need five screens, because a group whose members are not visible together is a list with a heading on it. On top of those, the compound payoff, the screen that hands back every irregular verb batch 1 taught, and four traps that each turn on something different: a form the regular rule invents, two letters that are one sound, an accent that changes a word, and three forms whose first word belongs to the next lesson.';

/** Doctrine §B.5: if the paradigm outweighs the Owns, the wrong lesson got
 *  built. Here the "paradigm" is the recap of a2.05, and it is TWO sections
 *  against the Owns act's NINE. Asserted rather than described. */
export const OWNS_MISSIONS = 9;
export const PARADIGM_MISSIONS = 2;

/** a2.19 §3: a reference sheet's own title is drawn in the sheet's HEADER BAR
 *  and ellipsises there while rendering in full on the card that opens it. */
export const SHEET_TITLE_MAX = 37;

/** The mission-row title ceiling, measured by a2.13 on a Pixel 6 and house-wide
 *  since. a2.14 §13 corrected it to a WIDTH rather than a count. */
export const TITLE_MAX = 27;
export const TITLE_TARGET = 25;

/** a2.04 measured a FOUR-column table inside a reference sheet clipping on a
 *  Pixel 6. The budget is THREE. */
export const SHEET_COLS_MAX = 3;

/** a2.17 measured a three-column tapTable cell on a Pixel 6 at ELEVEN
 *  characters; a2.19 measured a three-column SHEET cell at TWELVE. The widest
 *  cell in this lesson is `construire`, which is ten. */
export const GRID_CELL_MAX = 11;
export const SHEET_CELL_MAX = 12;

/** a2.19 §4: the break card is the most fragile screen in an A2 scene and the
 *  budget is LINES rather than words. */
export const BREAK_BUDGET = {
  heading: 13,
  fr: 28,
  en: 24,
  bodyWords: 26,
  coachWords: 12,
} as const;

/** a2.03 §3: the term-chip row is thirty-seven characters wide on a Pixel 6. */
export const TERM_ROW_MAX = 37;

/** A SEVENTH WIDTH DEFECT, AND A FIELD NO DOCUMENT IN THIS BAND MEASURES.
 *
 *  FOUND ON A PIXEL 6 by this build, on `s08-front`. A `cardDeck`'s `hint` is
 *  drawn as ONE LINE under the card stack and ellipsises; this lesson shipped
 *  « Swipe. Six cards, and the first one is a sentence you have already read. »
 *  and the phone rendered « ...you have alread… », which loses the sentence
 *  the hint exists to make.
 *
 *  Measured at the cut: sixty-four characters were shown of a seventy-one
 *  character string. The budget is set at SIXTY, which is where the four hints
 *  in this lesson now sit, and it is guarded in all three layers.
 *
 *  a2.13 measured the mission title at 27, a2.03 the chip row at 37, a2.17 the
 *  three-column tapTable cell at 11, a2.19 the sheet title at 37, a2.04 the
 *  four-column sheet table, and a2.19 the break card. This is the seventh and
 *  the only one of them that a host gate could never have found. */
export const HINT_MAX = 60;

/** a2.18 §3: a stepped trapDrill's `cards` step label counts its own array and
 *  nothing in any layer checked that. Found on a Pixel 6 and by nothing else. */
export const STEP_LABEL_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'] as const;
