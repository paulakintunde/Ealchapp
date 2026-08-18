// The a2.15 corpus: what this lesson authored, what it imports, what it refused
// to touch, and the claims its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 34 authored entries below and
// for every respelling a2.15 puts on a screen. The lesson body reads `fr`,
// `ipa`, `respell` and `en` FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE GENERAL PRINCIPLE
//
//  THREE PARADIGMS BUY THE LEARNER ABOUT TWENTY VERBS, AND THE PROOF HAS TO BE
//  A VERB THE LESSON NEVER SHOWED THEM.
//
//  The paradigm act is five missions and the family act is eight. If it were
//  the other way round this would be eighteen cells with a story attached, and
//  eighteen cells do not need a lesson. The last mission before the exam hands
//  the learner `reprendre` and `admettre` cold, and the exam makes them type
//  four forms of two verbs that appear on no card, in no deck and in no
//  vocabulary anywhere in this lesson.
//
//  AND THE THREE VERBS ARE NOT EQUAL, WHICH THE LESSON SAYS OUT LOUD.
//  `battre` gets two missions where `prendre` gets eight, and the reason is
//  measured rather than felt: see BATTRE_EVIDENCE.
// ══════════════════════════════════════════════════════════════════════════
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-12 ──────────────────────────
//
// 1. "Four prendre-family respellings are wrong in a way hasPlainNasalFor
//    cannot see. Corrections §6: a2.10's repair guard will reject all four."
//
//    HALF TRUE, AND THE HALF THAT IS FALSE IS THE ONE THE GUARD TURNS ON.
//    Every candidate was run through the real checker:
//
//      PRAHNDR       fr.sons.verbes-essentiels.012    NOT flagged   invisible
//      a-PRAHNDR     fr.a2.disciplines.051            NOT flagged   invisible
//      sür-PRAHNDR   fr.sons.verbes-essentiels.225    NOT flagged   invisible
//      kohn-PRAHNDR  fr.sons.verbes-essentiels.030    FLAGGED       visible
//      PRAHN-druh    fr.a1.transports-quotidiens.041  FLAGGED       visible
//
//    `comprendre` is VISIBLE, because `kohn` ends a token and corrections §6's
//    blind spot needs the nasal to be followed by a consonant INSIDE the token.
//    So the split table is still necessary and the counts are 2 visible and 3
//    invisible, not 0 and 4. A build that put all five in the invisible table
//    would have asserted "the checker does not see this" about two rows it
//    does see, and the assertion would have been false in the direction that
//    hides a real defect.
//
//    There are also FIVE wrong rows and not four: the brief missed
//    fr.a1.transports-quotidiens.041, which a2.11 recorded as a variant it did
//    not import. It is not a variant. It is flagged, and it is repaired here.
//
// 2. "nous mettons — two t throughout, so mettre is the control."
//
//    FALSE AS WRITTEN, AND THE CORRECTION IS THE BETTER TEACHING. `je mets`
//    has ONE t. mettre is not two t throughout; it is one t in the singular and
//    two in the plural, which is exactly what `battre` does too:
//
//      prendre   prend- · pren-  · prenn-     THREE stems
//      mettre    met-   · mett-               TWO
//      battre    bat-   · batt-               TWO
//
//    What makes mettre the control is not that nothing changes. It is that its
//    PLURAL STEM never changes: mettons, mettez, mettent all take mett-, where
//    prendre goes pren-, pren-, prenn-. That is the contrast the lesson is
//    built on and it is sharper than the brief's version.
//
// 3. "Three headwords are genuinely absent and you author them: remettre,
//    battre, combattre."
//
//    TRUE, AND THE SET IS BIGGER THAN THE BRIEF AND CORRECTIONS §2 BOTH SAY.
//    Measured across every row at every status: `reprendre`, `débattre` and
//    `abattre` are ALSO absent, and `admettre` exists (fr.b1.verbes.086,
//    `ad-METR`). Corrections §2 lists six absences for the whole level and
//    a2.15's share as three; the real figure for this lesson's family is six.
//    It does not change the build — `reprendre` and `admettre` must not be
//    authored, because they are the two the exam gives cold — but a later
//    author reading corrections §2 as complete will be wrong.
//
// 4. "listenChoose has one real job: il prend against ils prennent."
//
//    TRUE, AND THERE IS A SECOND: `il met` against `ils mettent`. Both are
//    genuinely audible, both are legal under the homophone rule, and both
//    ship. The rule the guard enforces is unchanged: no ear question may offer
//    two members of one homophone group, and this lesson has THREE such
//    groups, one per verb (prends/prend, mets/met, bats/bat).
//
// 5. "Give them reprendre or admettre cold and require the full form. It
//    should be the last mission before the quiz."
//
//    SHIPPED, AND THE MISSION CANNOT BE THE PRODUCTION SURFACE THE BRIEF
//    IMAGINES. A `groupDrill` check is an mcq: it has `q`, `opts`, `correct`
//    and `why` and nothing else, so the strongest thing a MISSION can do is
//    make the learner pick the correctly built form out of three plausible
//    mis-builds. Free-text production of an unseen compound exists in exactly
//    one place in this app, and it is the quiz. So s26-unseen is the last
//    mission before the exam and it is a cold recognition-under-pressure
//    screen; the four typeIn questions in round 4 are the production. Both are
//    asserted. `practice` with `skill: 'write'` draws no writing surface, and
//    the dictée can only name a corpus row, which `reprendre` deliberately is
//    not.
//
// 6. "prendre le bus / prendre le train is a2.27. je prends un café is a2.07.
//    Both may appear as example sentences."
//
//    TRUE, AND THIS BUILD TAKES NEITHER, WHICH COST IT THE BEST EVIDENCE IN
//    THE CORPUS. The four best respelled prendre sentences in the database are
//    `On prend le train ensemble.`, `Tu prends le bus ou tu marches sous la
//    pluie?`, `Nous prenons le métro tous les jours.` and `Tu prends le vélo ou
//    l'auto ?`. All four are refused; see READ_NOT_IMPORTED. The doctrine's
//    §B.7 table also assigns "prendre take vs prendre in idiom" to seq 9, which
//    is this lesson, and the brief hands both idiom homes away. The brief wins:
//    the roundup names a2.07 and a2.27 by id and prints none of their nouns.
//
// ── WHAT THIS BUILD FOUND THAT NO BRIEF MENTIONS ──────────────────────────
//
// 7. THE DICTÉE CANNOT SEE THE LIGATURE œ, AND IT DROPS IT FROM BOTH SIDES.
//
//    `letterCount()` strips everything outside `[A-Za-zÀ-ÿ]`, and U+0153 is
//    outside it. So is the letter bank in MissionRich.tsx:1343, and so is the
//    target it is compared against:
//
//      "Je bats les œufs."        letterCount 12, real letters 13
//      "Vous battez les œufs."    letterCount 16, real letters 17, LETTERS mode
//      bank and target both       "Jebatslesufs"
//
//    A learner spelling `oeufs` as `ufs` assembles the target exactly and is
//    told they are right. It is the accent problem in a new dimension —
//    corrections §5 — and nobody has recorded it. `battre les œufs` was the
//    natural frame for this lesson and it is the reason it is not used.
//
//    NOTE ALSO that `scripts/_a215_frame.ts`, written before this build, counts
//    letters with `\p{L}` and therefore DISAGREES with the app by one per
//    ligature. Its own output prints "LETTERS 17" for a line the app measures
//    at 16. Invariants §6: run the real function.
//
// 8. THE TWO HEAD VERBS SHARE ONE FRAME AND THE THIRD CANNOT, AND THAT IS THE
//    INVERSE OF a2.14's CHECK.
//
//    a2.14 asserts its two columns use DIFFERENT frames, because the complement
//    was the thing it taught. Here the complement is noise: the stem is the
//    teaching, so the back of the sentence must not move. `la clé` puts all
//    twelve prendre and mettre cells in LETTERS mode, which nothing else tried
//    managed for both verbs. `battre` cannot share it, because you do not beat
//    a key, and that is recorded rather than hidden.
//
// 9. battre HAS NO CORPUS FOOTPRINT AT ALL, AND THAT IS THE ANSWER TO THE
//    BRIEF'S OPEN QUESTION. See BATTRE_EVIDENCE.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Every authored row lands in `verbes`, the batch-1 home. Ledger §2. */
export const THEME = 'verbes';

/** The unit, byte for byte from Postgres on 2026-08-12 via
 *  `scripts/_a2_preflight.ts`. Corrections §1: take it from the probe and never
 *  from the brief. This one was taken from the probe and it matches the brief's
 *  corrected block exactly, which is a first for this band. */
export const UNIT = {
  id: 'a2.15',
  seq: 9,
  title: 'Irregular Verbs 5: Prendre, Mettre, Battre',
  sub: 'Irréguliers 5 : prendre, mettre, battre',
  canDo: 'Can conjugate prendre, mettre and battre and recognise their compounds',
  prereqUnitIds: ['a2.02'] as const,
} as const;

/** fr.a2.verbes held exactly this many rows when a2.15 claimed .421, which is
 *  the ledger's own figure after a2.14. THE MAXIMUM IS USELESS — a2.10.l2 took
 *  .461..500, above the whole batch-1 reservation. Ledger §10: the row COUNT is
 *  the only signal, and ledger §a2.14-12 narrows it: a total that has GROWN by
 *  somebody else's allocation is a report, a total that has SHRUNK is fatal,
 *  and rows inside THIS range that this build does not own stay fatal. */
export const ROW_COUNT_BEFORE = 340;
export const ID_BLOCK = { from: 'fr.a2.verbes.421', to: 'fr.a2.verbes.460' } as const;

export type Verb = 'prendre' | 'mettre' | 'battre';
/** The order the learner meets them, which is also the column order on the
 *  paradigm grid and the order of weight: eight missions, six, two. */
export const VERB_ORDER: readonly Verb[] = ['prendre', 'mettre', 'battre'];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE PARADIGMS
 * ═══════════════════════════════════════════════════════════════════════ */

/** Eighteen cells, in reading order: three verbs across, six persons down.
 *
 *  `respells` is the VERB ALONE so a grid can print a cell without repeating
 *  the frame in every box. Every value here is asserted against the row the
 *  learner is scored on, in all three layers — a2.13 §6.2 shipped `voulent` on
 *  a grid while the cards said `veulent`, and a2.14 §5 found the same shape in
 *  the respelling dimension, where the two copies live in different files. */
export const PARADIGM: readonly {
  person: string;
  forms: Record<Verb, string>;
  respells: Record<Verb, string>;
}[] = [
  { person: 'je', forms: { prendre: 'prends', mettre: 'mets', battre: 'bats' }, respells: { prendre: 'PRAHⁿ', mettre: 'MEH', battre: 'BA' } },
  { person: 'tu', forms: { prendre: 'prends', mettre: 'mets', battre: 'bats' }, respells: { prendre: 'PRAHⁿ', mettre: 'MEH', battre: 'BA' } },
  { person: 'il · elle · on', forms: { prendre: 'prend', mettre: 'met', battre: 'bat' }, respells: { prendre: 'PRAHⁿ', mettre: 'MEH', battre: 'BA' } },
  { person: 'nous', forms: { prendre: 'prenons', mettre: 'mettons', battre: 'battons' }, respells: { prendre: 'pruh-NOHⁿ', mettre: 'meh-TOHⁿ', battre: 'ba-TOHⁿ' } },
  { person: 'vous', forms: { prendre: 'prenez', mettre: 'mettez', battre: 'battez' }, respells: { prendre: 'pruh-NAY', mettre: 'meh-TAY', battre: 'ba-TAY' } },
  { person: 'ils · elles', forms: { prendre: 'prennent', mettre: 'mettent', battre: 'battent' }, respells: { prendre: 'PREN', mettre: 'MET', battre: 'BAT' } },
];

/** THE STEMS, WHICH ARE THE LESSON.
 *
 *  Written out rather than derived, because the whole claim is that prendre has
 *  THREE and the other two have TWO, and a derivation would compare the content
 *  to itself. The batch derives them from PARADIGM as well and refuses any
 *  disagreement, so neither copy can drift alone. */
export const STEMS: Record<Verb, readonly string[]> = {
  prendre: ['prend-', 'pren-', 'prenn-'],
  mettre: ['met-', 'mett-'],
  battre: ['bat-', 'batt-'],
};

/** The number of stems each verb has, stated once. The brief's "mettre is the
 *  control" is TRUE of the plural stem and FALSE of the whole paradigm: `je
 *  mets` has one t. See header item 2. */
export const STEM_COUNT: Record<Verb, number> = { prendre: 3, mettre: 2, battre: 2 };

/** The cell where prendre grows its third stem, and the only doubled consonant
 *  in the whole lesson that arrives rather than staying. */
export const DOUBLING_PERSON = 'ils · elles';
export const DOUBLING_PAIR = { single: 'fr.a2.verbes.427', doubled: 'fr.a2.verbes.429' } as const;

/** THE BACK-REFERENCE THE BRIEF ASKS FOR BY UNIT ID, and the reason it is not a
 *  decoration.
 *
 *  a2.09 (seq 2) taught that when the ending goes silent the stem becomes the
 *  last thing you hear, and that a French stem in that position is written with
 *  a doubled consonant or an accent: appeler gives j'appelle, jeter gives je
 *  jette. `ils prennent` is the same mechanism on a different verb — the -ent is
 *  silent, so there has to be an n left to hear, and the second n is what writes
 *  it. `nous prenons` needs none, because the ending is doing the sounding.
 *
 *  This is the clearest connection available in batch 1 and it is stated in the
 *  section that shows the pair, not in a footnote. An edit that cuts it goes
 *  red in the batch, the merge and the test. */
export const STEM_UNIT = 'a2.09';
export const STEM_PRINCIPLE = `${Cap(unitRef('a2.09', 'a2'))} doubled the l of appeler where the ending went silent. prennent doubles its n for the same reason: the -ent makes no sound, so the stem must end in one.`;

/** a2.09's own reframe, quoted rather than paraphrased. Doctrine §B.7: the
 *  value is in the learner recognising the repeat. */
export const STEM_REFRAME = 'The spelling changes so the sound does not.';

/** THE LOOP a2.11 LEFT OPEN, closed by unit id.
 *
 *  a2.11 (seq 4) named prendre, mettre and battre on one card, refused to
 *  conjugate any of them, and said where they were taught. Its own corpus
 *  records why: run its vendre model on prendre and you get `ils prendent`,
 *  which nobody says, and a learner at seq 4 had nothing to overwrite it with.
 *  A learner at seq 9 does, so this lesson prints the wrong form ONCE, in a
 *  commonErrors card, which is the a2.01 `je parles` shape. */
export const A211_UNIT = 'a2.11';
export const A211_LINE = `${Cap(unitRef('a2.11', 'a2'))} named these three and would not build them, because the model it taught you would have produced a form nobody says. This is the lesson it was waiting for.`;
/** The form the -RE model produces on prendre. Printed in exactly one place. */
export const OVER_GENERALISED = 'ils prendent';
/** The imported -RE verb the trap contrasts against. a2.11 owns it. */
export const RE_MODEL = { fr: 'vendre', id: 'fr.a2.verbes.027', third: 'il vend' } as const;

/** The ear pair, and the unit that met the same shape first. a2.10 separated
 *  `il finit` from `ils finissent` by the -iss-; this lesson separates
 *  `il prend` from `ils prennent` by the n, and `il met` from `ils mettent` by
 *  the t. Same job, same screen type, named by id. */
export const EAR_UNIT = 'a2.10';

/** The pairs no ear question may offer against each other. One per verb: three
 *  persons, two spellings, one sound. A `listenChoose` whose two options differ
 *  ONLY by a member of one group has no correct answer and marking one right
 *  certifies a bug. a2.10, a2.11 and a2.14 all enforce this with a list rather
 *  than a sentence in a report, because a sentence in a report cannot fail. */
export const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ['prends', 'prend'],
  ['mets', 'met'],
  ['bats', 'bat'],
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FRAMES
 * ═══════════════════════════════════════════════════════════════════════ */

/** ONE FRAME ACROSS THE TWO HEAD VERBS, AND THIS IS THE INVERSE OF a2.14.
 *
 *  a2.14's batch asserts that its two columns use DIFFERENT frames, because the
 *  complement was the thing being taught and a shared frame would have deleted
 *  the lesson. Here the complement is noise and the stem is the teaching, so the
 *  back of the sentence must NOT move: a2.13's decision, for a2.13's reason.
 *
 *  `la clé` puts all twelve prendre and mettre cells in LETTERS mode, measured
 *  through the real dicteeMode. `le bus`, `le thé` and `le sel` also clear it
 *  for one verb each; `la clé` is the only object tried that clears it for BOTH,
 *  and `le bus` is a2.27's and `le thé` is a2.07-adjacent.
 *
 *  battre CANNOT share it. You do not beat a key. `Paul` clears the limit at
 *  every cell and is a person, which is what battre takes. The asymmetry is
 *  real and the lesson says so rather than pretending otherwise. */
export const FRAMES: Record<Verb, { complement: string; kind: 'a thing you hold' | 'a person you play' }> = {
  prendre: { complement: 'la clé', kind: 'a thing you hold' },
  mettre: { complement: 'la clé', kind: 'a thing you hold' },
  battre: { complement: 'Paul', kind: 'a person you play' },
};

/** The two verbs that must share a frame, and the one that must not. */
export const SHARED_FRAME_VERBS: readonly Verb[] = ['prendre', 'mettre'];
export const OWN_FRAME_VERB: Verb = 'battre';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FAMILIES
 * ═══════════════════════════════════════════════════════════════════════ */

/** Head to compounds. The number in the lesson's headline claim is derived from
 *  THIS, so a compound removed here moves the claim rather than making it a lie.
 *
 *  Only the compounds this lesson NAMES are here. `reprendre` and `admettre` are
 *  deliberately absent: they are the two the exam gives cold. */
export const FAMILIES: Record<Verb, readonly string[]> = {
  prendre: ['apprendre', 'comprendre', 'surprendre'],
  mettre: ['permettre', 'promettre', 'remettre'],
  battre: ['combattre', 'débattre', 'abattre'],
};

/** HOW MANY VERBS THE THREE PARADIGMS ACTUALLY BUY, derived: three heads plus
 *  nine named compounds.
 *
 *  THE BRIEF SAYS TWENTY-ODD AND THIS LESSON SAYS TWELVE, and the difference is
 *  a brief claim measured false rather than a shortfall. Twenty-odd is roughly
 *  right about FRENCH — the prendre family runs to entreprendre, se méprendre
 *  and more, and the mettre family to soumettre, transmettre, omettre and
 *  compromettre — but it is not a figure this build can count, and a lesson
 *  quoting a number it has not counted is the shape a2.13 §1 warned about in the
 *  other direction. Twelve is what the lesson NAMES, it is derived from
 *  FAMILIES, and the prose says in words that the move works on the rest as
 *  well without putting a figure on them. */
export const VERBS_BOUGHT = VERB_ORDER.length
  + VERB_ORDER.reduce((n, v) => n + FAMILIES[v].length, 0);

/** THE TWO THE LESSON NEVER CONJUGATES AND THE EXAM DEMANDS.
 *
 *  Neither may be a corpus row, an itemId, a deck release, a term or a card in
 *  any teaching mission. They appear in exactly two places: the last mission
 *  before the exam, and round 4. That is asserted by name in all three layers,
 *  because it is the single thing that separates this lesson from a table. */
export const UNSEEN: readonly { infinitive: string; head: Verb; forms: Record<string, string>; en: string }[] = [
  { infinitive: 'reprendre', head: 'prendre', en: 'to take back, to start again', forms: { je: 'reprends', nous: 'reprenons', ils: 'reprennent' } },
  { infinitive: 'admettre', head: 'mettre', en: 'to admit', forms: { je: 'admets', nous: 'admettons', ils: 'admettent' } },
];
export const UNSEEN_INFINITIVES = UNSEEN.map((u) => u.infinitive);
/** Every form of the two, so a guard can refuse them outside their two homes. */
export const UNSEEN_FORMS: readonly string[] = [
  ...UNSEEN_INFINITIVES,
  'reprends', 'reprend', 'reprenons', 'reprenez', 'reprennent',
  'admets', 'admet', 'admettons', 'admettez', 'admettent',
];
/** The two sections in which they may appear. Anywhere else is a build failure. */
export const UNSEEN_HOMES = ['s26-unseen', 's27-quiz'] as const;

/** THE MISSIONS THAT BELONG TO ONE VERB, declared.
 *
 *  Six for prendre, two for mettre, two for battre. Sections that carry all
 *  three — the grid, the sorting table, the exam, the roundup — are in none of
 *  these lists, which is what makes them a measure of WEIGHT rather than of
 *  mention.
 *
 *  mettre and battre have the same number and they do not have the same weight:
 *  mettre runs through the whole lesson as prendre's control, on prendre's own
 *  frame, and it has twelve authored rows against battre's seven. That is the
 *  derived half of the measure and the batch, the merge and the test all assert
 *  it: rowsFor('battre') < rowsFor('mettre') < rowsFor('prendre'), and battre's
 *  paradigm is four cells where the other two are six.
 *
 *  The brief: "Do not pad battre to make the three verbs look equal. A lesson
 *  that spends equal time on an unequal set is teaching the learner that
 *  frequency does not matter, which is false and expensive." */
export const MISSIONS_BY_VERB: Record<Verb, readonly string[]> = {
  prendre: ['s05-doubled', 's06-prendre', 's10-identity', 's11-apprendre', 's16-listening', 's17-notvendre'],
  mettre: ['s07-mettre', 's12-remettre'],
  battre: ['s08-battre', 's14-combattre'],
};

/** WHY battre GETS TWO, MEASURED RATHER THAN FELT, and it is the answer to the
 *  brief's open question.
 *
 *  Every present-tense form of battre and of combattre was counted against
 *  27,600 published rows on 2026-08-12, boundary-aware:
 *
 *      bats 0 · battons 0 · battez 0 · battent 0 · combattons 0 · combattent 0
 *      bat  3, and all three are `le cœur bat` or `elle bat les œufs`
 *      battre, combattre, débattre, abattre: NOT ONE EXISTS AS A HEADWORD
 *
 *  So there is no published row in this corpus in which battre is conjugated the
 *  way this lesson teaches. prendre's cells run to 234 published sentences and
 *  mettre's to 80. The canDo asks only that the learner RECOGNISE battre's
 *  compounds, and two missions is what recognition costs: one to build the
 *  paradigm from the mettre shape it already has, one to name the family and
 *  stop.
 *
 *  THE FIRST VERSION OF THIS MEASUREMENT WAS WRONG IN A WAY WORTH RECORDING. The
 *  manifest's guard counted the INFINITIVE as well and reported four rows, so it
 *  refused its own build. The four are `battre les œufs`, `battre la mesure` and
 *  two sentences that put `combattre` after another verb. An infinitive inside a
 *  fixed phrase is not evidence that anybody meets the verb inflected, and the
 *  guard now counts conjugated forms only.
 *
 *  AND ONE OF THE FOUR IS USEFUL. `fr.a1.cuisine.166` respells `battre les œufs`
 *  as `BATR LAY ZUH`, so the house form for this verb is already published and
 *  this build reads `BATR` off it rather than inventing one — the same move
 *  fr.sons.consonnes.107 makes possible for `PRAHⁿDR`. The row itself is refused
 *  for the ligature; see READ_NOT_IMPORTED. */
export const BATTRE_EVIDENCE = {
  conjugated: { bats: 0, battons: 0, battez: 0, battent: 0, combattons: 0, combattent: 0, bat: 3 },
  infinitiveInPhrases: 4,
  headwordsAbsent: ['battre', 'combattre', 'débattre', 'abattre'],
  respellReadFrom: { id: 'fr.a1.cuisine.166', fr: 'battre les œufs', respell: 'BATR LAY ZUH' },
  prendreCells: 234,
  mettreCells: 80,
  date: '2026-08-12',
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE LINE THIS LESSON HANGS ON.
 *
 *  Doctrine §B.4 asks for a rule the learner can run in the half-second between
 *  subject and verb. This one is a physical instruction and it is what the
 *  learner literally does when `reprennent` arrives: put a thumb over `re-`,
 *  and what is left is a verb they built forty screens ago.
 *
 *  Ten words, so it fits inside an `xl` section's 12-word cap on every string.
 *
 *  NOTE THE VERB. It is `build`, not `conjugate`: `conjugate` is on the jargon
 *  list and the guard would have caught it, but the reframe is the one string
 *  in the lesson that must never be reworded, so it is worth saying why.
 *
 *  ── Rejected, and the next author needs all three ────────────────────────
 *
 *  A. "Learn the head of the family and the rest come free."
 *
 *     The brief's candidate, and it is the CLAIM rather than the reframe. It
 *     promises a payoff instead of telling the learner what to do, and there is
 *     no moment mid-sentence at which it can be run. It ships as FAMILY_CLAIM,
 *     stated once in the opening deck and once in the roundup.
 *
 *  B. "Compounds follow their base verb."
 *
 *     The brief rejects this itself, and correctly: it is the same fact stated
 *     about the language rather than about the learner. It is also the register
 *     the house rules ban from a card.
 *
 *  C. "Every one of these is prendre with something in front."
 *
 *     True, and it only covers one of the three families. A rule that names one
 *     of the verbs it generalises over is not a rule. */
export const REFRAME = 'Cover the front of the verb. Build what is left.';

/** Written out so the report and the next author have them. */
export const REFRAME_REJECTED = [
  { label: 'A, the brief\'s candidate', text: 'Learn the head of the family and the rest come free.', why: 'a promise about the payoff rather than a rule the learner runs. There is no moment mid-sentence at which it can be applied. It ships as FAMILY_CLAIM instead, which is what it is.' },
  { label: 'B, the brief\'s own rejection', text: 'Compounds follow their base verb.', why: 'the same fact stated about the language rather than about what the learner should do with it, and in a register no card in this house uses.' },
  { label: 'C', text: 'Every one of these is prendre with something in front.', why: 'names one of the three verbs it is supposed to generalise over, so it is an example rather than a rule.' },
] as const;

/** What the learner does with the reframe, said once. */
export const THE_MOVE = 'A verb you have never seen? Take the front off it, and what is left is one you built ten minutes ago.';

/** The claim the Owns act makes, derived so a compound removed above moves the
 *  figure rather than leaving a number that is no longer true. */
export const FAMILY_CLAIM = `Three verbs to learn, and ${VERBS_BOUGHT} you can build.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS LESSON MUST NOT TEACH
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE PAST PARTICIPLES ARE a2.20's, AT seq 17, AND THEY ARE AMONG ITS MOST
 *  IMPORTANT.
 *
 *  `pris` and `mis` are the two the brief reserves by name, and this build
 *  flags them here so a2.20 knows the omission was deliberate rather than an
 *  oversight. Both are everywhere in the corpus — 198 published rows hold
 *  `pris` and 81 hold `mis` — so the refusal has to be a guard rather than an
 *  intention. `battu` has 0.
 *
 *  Refused anywhere in the lesson, including inside a `why`, a `note` and the
 *  reference sheet. */
export const RESERVED_FOR = 'a2.20';
export const RESERVED_PARTICIPLES = ['pris', 'mis', 'battu', 'appris', 'compris', 'permis', 'promis', 'admis', 'remis', 'surpris'] as const;
export const RESERVED_MEASURED = { pris: 198, mis: 81, battu: 0, date: '2026-08-12' } as const;

/** THE IDIOMS ARE THEIR OWN UNITS' OPENINGS AND THIS LESSON PRINTS NONE OF
 *  THEM. The brief: "Neither may become a vocabulary or scenario section, or
 *  two later units lose their opening."
 *
 *  Scoped to PRODUCTION SURFACES rather than to every string, because the
 *  roundup has to be able to say where they are taught. A guard written over
 *  every string fires on legitimate context and gets deleted by the next
 *  author; invariants §1 records four ways that has already happened here. */
export const NEIGHBOUR_UNITS = { transport: 'a2.27', restaurant: 'a2.07', classroom: 'a2.31' } as const;
export const NEIGHBOUR_NOUNS = ['le bus', 'le train', 'le métro', 'le vélo', 'un café', 'le café', 'un thé', 'le thé', 'l\'avion', 'le taxi'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NAMING FORMS
 * ═══════════════════════════════════════════════════════════════════════ */

/** IMPORTED, NOT AUTHORED, and the respelling here is the value AFTER this
 *  build's repair. `repairedRespell()` in the imported layer is the only
 *  function a screen may call for one. */
export const NAMING_FORMS: Record<string, { id: string; respell: string; repaired: boolean }> = {
  prendre: { id: 'fr.sons.verbes-essentiels.012', respell: 'PRAHⁿDR', repaired: true },
  apprendre: { id: 'fr.a2.disciplines.051', respell: 'a-PRAHⁿDR', repaired: true },
  comprendre: { id: 'fr.sons.verbes-essentiels.030', respell: 'kohⁿ-PRAHⁿDR', repaired: true },
  surprendre: { id: 'fr.sons.verbes-essentiels.225', respell: 'sür-PRAHⁿDR', repaired: true },
  mettre: { id: 'fr.sons.verbes-essentiels.014', respell: 'METR', repaired: false },
  permettre: { id: 'fr.sons.verbes-essentiels.196', respell: 'pehr-MEHTR', repaired: false },
  promettre: { id: 'fr.sons.verbes-essentiels.191', respell: 'proh-MEHTR', repaired: false },
  vendre: { id: 'fr.a2.verbes.027', respell: 'VAHⁿDR', repaired: false },
};

/** THE THREE THIS BUILD AUTHORS, AND IT IS THE FIRST IN THE BAND TO AUTHOR ONE.
 *
 *  Corrections §2: five A2 builds in a row authored not one infinitive. These
 *  three do not exist at any status, in any theme, anywhere in the database.
 *  Bare infinitives, no article, no gloss frame and NO GENDER — ledger §5, and
 *  a gendered single-word row would join a1.03's measured ending population and
 *  move twenty printed figures in a1-03-genre.test.ts. */
export const AUTHORED_INFINITIVES: Record<string, string> = {
  battre: 'fr.a2.verbes.421',
  combattre: 'fr.a2.verbes.422',
  remettre: 'fr.a2.verbes.423',
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUTHORED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type PmRow = Omit<Item, 'drills'> & {
  /** Which person this row puts on screen, or null for an infinitive. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | null;
  /** Which family this row belongs to. Never null: every authored row is one of
   *  the three, which is what makes the weight measurable. */
  verb: Verb;
  /** The head verb itself, or one of its compounds. Authoring metadata, stripped
   *  by `toItem`: it exists so the guards can assert the family rather than
   *  pattern-match the French. */
  role: 'head' | 'compound' | 'naming';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows measured at or under 16 letters through
 *  the real `dicteeMode`, because WORD mode hands every word over pre-spelled. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
/** A naming form. No `sentence`, because it is not one. */
const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];

/** The 34 authored entries, in sequence order. */
export const PRENDRE_METTRE: PmRow[] = [
  /* ── The three infinitives nobody had written ─────────────────────────────
   *
   * A FIRST FOR THIS BAND. Five A2 builds in a row imported every headword they
   * named; these three do not exist at any status in any theme. `battre` is in
   * the unit title.
   *
   * No gender, no article, no gloss frame, matching all 44 rows already in
   * fr.a2.verbes.013..056. Ledger §5. */
  { id: 'fr.a2.verbes.421', kind: 'word', level: 'a2', theme: THEME, fr: 'battre', en: 'to beat', ipa: '/batʁ/', respell: 'BATR', person: null, verb: 'battre', role: 'naming', tags: ['irregular', 'verb'], drills: W, audioRef: null, version: 1, cardType: 'vocab', notes: 'irregular · je bats, nous battons, ils battent' },
  { id: 'fr.a2.verbes.422', kind: 'word', level: 'a2', theme: THEME, fr: 'combattre', en: 'to fight', ipa: '/kɔ̃batʁ/', respell: 'kohⁿ-BATR', person: null, verb: 'battre', role: 'naming', tags: ['irregular', 'verb', 'family'], drills: W, audioRef: null, version: 1, cardType: 'vocab', notes: 'irregular · takes every ending battre takes' },
  { id: 'fr.a2.verbes.423', kind: 'word', level: 'a2', theme: THEME, fr: 'remettre', en: 'to put back, to hand in', ipa: '/ʁəmɛtʁ/', respell: 'ruh-MEHTR', person: null, verb: 'mettre', role: 'naming', tags: ['irregular', 'verb', 'family'], drills: W, audioRef: null, version: 1, cardType: 'vocab', notes: 'irregular · takes every ending mettre takes' },

  /* ── prendre, across the frame `la clé` ──────────────────────────────────
   *
   * THREE STEMS AND SIX CELLS. prend- in the singular, pren- for nous and vous,
   * prenn- for ils. All six spell from LETTERS, measured: `la clé` is the only
   * object tried that clears sixteen letters for prendre AND for mettre.
   *
   * .424, .425 and .426 CARRY THE SAME RESPELLING. prends, prends and prend are
   * one sound across three persons, which is the shape a2.13 named on all three
   * of its verbs and a2.14 on both of its. The batch asserts the three are EQUAL
   * rather than merely present. */
  { id: 'fr.a2.verbes.424', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je prends la clé.', en: 'I take the key.', ipa: '/ʒə pʁɑ̃ la kle/', respell: 'zhuh PRAHⁿ la KLAY', person: 'je', verb: 'prendre', role: 'head', tags: ['prendre', 'paradigm', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The d is written and not said. What you hear at the end of the verb is the nasal vowel.' },
  { id: 'fr.a2.verbes.425', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu prends la clé.', en: 'You take the key.', ipa: '/ty pʁɑ̃ la kle/', respell: 'tü PRAHⁿ la KLAY', person: 'tu', verb: 'prendre', role: 'head', tags: ['prendre', 'paradigm', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The same spelling as the je form and the same sound. Only the word in front separates them.' },
  { id: 'fr.a2.verbes.426', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il prend la clé.', en: 'He takes the key.', ipa: '/il pʁɑ̃ la kle/', respell: 'eel PRAHⁿ la KLAY', person: 'il', verb: 'prendre', role: 'head', tags: ['prendre', 'paradigm', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'One letter shorter on the page and not one sound different in the mouth.' },
  { id: 'fr.a2.verbes.427', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous prenons la clé.', en: 'We take the key.', ipa: '/nu pʁə.nɔ̃ la kle/', respell: 'noo pruh-NOHⁿ la KLAY', person: 'nous', verb: 'prendre', role: 'head', tags: ['prendre', 'paradigm', 'plural', 'nasal', 'stem'], drills: SD, audioRef: null, version: 1, notes: `The d goes, and there is ONE n. The ending is the ordinary -ons you have had since ${unitRef('a2.01')}.` },
  // NOT A DICTÉE TARGET, and not because it could not be: at 15 letters it
  // spells from LETTERS like the rest. Eleven lines is already a long screen and
  // the two `vous` cells are the two the learner is least likely to write, so
  // they are the two that come out.
  { id: 'fr.a2.verbes.428', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous prenez la clé.', en: 'You take the key.', ipa: '/vu pʁə.ne la kle/', respell: 'voo pruh-NAY la KLAY', person: 'vous', verb: 'prendre', role: 'head', tags: ['prendre', 'paradigm', 'plural', 'stem'], drills: S, audioRef: null, version: 1, notes: 'Same stem as nous, one n again, and the ordinary -ez. Nothing here is irregular.' },
  { id: 'fr.a2.verbes.429', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils prennent la clé.', en: 'They take the key.', ipa: '/il pʁɛn la kle/', respell: 'eel PREN la KLAY', person: 'ils', verb: 'prendre', role: 'head', tags: ['prendre', 'paradigm', 'plural', 'stem', 'doubling'], drills: SD, audioRef: null, version: 1, notes: 'TWO n, and the -ent makes no sound. The second n is there so that something is left to hear.' },

  /* ── mettre, on the same frame ───────────────────────────────────────────
   *
   * THE CONTROL, AND THE BRIEF DESCRIBES IT WRONGLY. `je mets` has ONE t. What
   * makes mettre the control is that its PLURAL stem never moves: mettons,
   * mettez and mettent all take mett-, where prendre takes pren-, pren-, prenn-.
   *
   * Same object, same article, same position, so the only thing a learner can
   * notice between .424 and .430 is the verb. */
  { id: 'fr.a2.verbes.430', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je mets la clé.', en: 'I put the key down.', ipa: '/ʒə mɛ la kle/', respell: 'zhuh MEH la KLAY', person: 'je', verb: 'mettre', role: 'head', tags: ['mettre', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'One t, and the s is silent. Two letters shorter than the infinitive and a completely ordinary sound.' },
  { id: 'fr.a2.verbes.431', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu mets la clé.', en: 'You put the key down.', ipa: '/ty mɛ la kle/', respell: 'tü MEH la KLAY', person: 'tu', verb: 'mettre', role: 'head', tags: ['mettre', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'Identical to the je form on the page and in the mouth, exactly as the prendre pair is.' },
  { id: 'fr.a2.verbes.432', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il met la clé.', en: 'He puts the key down.', ipa: '/il mɛ la kle/', respell: 'eel MEH la KLAY', person: 'il', verb: 'mettre', role: 'head', tags: ['mettre', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'The s goes and nothing else does. Three persons, two spellings, one sound.' },
  { id: 'fr.a2.verbes.433', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous mettons la clé.', en: 'We put the key down.', ipa: '/nu mɛ.tɔ̃ la kle/', respell: 'noo meh-TOHⁿ la KLAY', person: 'nous', verb: 'mettre', role: 'head', tags: ['mettre', 'paradigm', 'plural', 'nasal', 'control'], drills: SD, audioRef: null, version: 1, notes: 'The second t arrives here and it stays for all three plural forms. That is the whole of mettre.' },
  { id: 'fr.a2.verbes.434', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous mettez la clé.', en: 'You put the key down.', ipa: '/vu mɛ.te la kle/', respell: 'voo meh-TAY la KLAY', person: 'vous', verb: 'mettre', role: 'head', tags: ['mettre', 'paradigm', 'plural', 'control'], drills: S, audioRef: null, version: 1, notes: 'Two t again. Where prendre changed its stem between nous and ils, mettre does not.' },
  { id: 'fr.a2.verbes.435', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils mettent la clé.', en: 'They put the key down.', ipa: '/il mɛt la kle/', respell: 'eel MET la KLAY', person: 'ils', verb: 'mettre', role: 'head', tags: ['mettre', 'paradigm', 'plural', 'control', 'ear'], drills: SD, audioRef: null, version: 1, notes: 'The -ent is silent, so the t you have been writing since nous is the thing you now hear.' },

  /* ── battre, on its own frame ────────────────────────────────────────────
   *
   * FOUR CELLS AND NOT SIX, and the missing two are `tu bats` and `vous battez`,
   * which are the two the mettre shape already gives away. This is the weak
   * member and the lesson does not pretend otherwise: see BATTRE_EVIDENCE.
   *
   * `Paul` rather than an object, because battre takes somebody rather than
   * something. `les œufs` was the natural frame and the dictée cannot see the
   * ligature; see header item 7. */
  { id: 'fr.a2.verbes.436', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je bats Paul.', en: 'I beat Paul.', ipa: '/ʒə ba pɔl/', respell: 'zhuh BA POL', person: 'je', verb: 'battre', role: 'head', tags: ['battre', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'One t, silent s. Exactly the shape mettre has, on a verb you met a minute ago.' },
  { id: 'fr.a2.verbes.437', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il bat Paul.', en: 'He beats Paul.', ipa: '/il ba pɔl/', respell: 'eel BA POL', person: 'il', verb: 'battre', role: 'head', tags: ['battre', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'Three letters, and the same sound as the je form. Nothing to learn that mettre did not give you.' },
  { id: 'fr.a2.verbes.438', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous battons Paul.', en: 'We beat Paul.', ipa: '/nu ba.tɔ̃ pɔl/', respell: 'noo ba-TOHⁿ POL', person: 'nous', verb: 'battre', role: 'head', tags: ['battre', 'paradigm', 'plural', 'nasal', 'control'], drills: SD, audioRef: null, version: 1, notes: 'Two t from here on, and they do not move again. Read it beside nous mettons and nothing is new.' },
  { id: 'fr.a2.verbes.439', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils battent Paul.', en: 'They beat Paul.', ipa: '/il bat pɔl/', respell: 'eel BAT POL', person: 'ils', verb: 'battre', role: 'head', tags: ['battre', 'paradigm', 'plural', 'control', 'ear'], drills: SD, audioRef: null, version: 1, notes: 'Silent -ent, audible t. If you can hear this one you can hear ils mettent, which is the same trick.' },

  /* ── the prendre family: the same six endings, three letters in front ────
   *
   * .440 to .445 ARE THE IDENTITY, IN SENTENCES. Each compound takes an object
   * of its own, because apprendre and comprendre do not mean take. What is
   * identical is the verb, and the grid at s10-identity puts the three columns
   * side by side so the learner reads it rather than being told it. */
  { id: 'fr.a2.verbes.440', kind: 'sentence', level: 'a2', theme: THEME, fr: 'J\'apprends le français.', en: 'I am learning French.', ipa: '/ʒa.pʁɑ̃ lə fʁɑ̃.sɛ/', respell: 'zha-PRAHⁿ luh frahⁿ-SEH', person: 'je', verb: 'prendre', role: 'compound', tags: ['prendre', 'family', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'prends with two letters in front of it. The verb did not change at all.' },
  { id: 'fr.a2.verbes.441', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous apprenons le français.', en: 'We are learning French.', ipa: '/nu.za.pʁə.nɔ̃ lə fʁɑ̃.sɛ/', respell: 'noo-za-pruh-NOHⁿ luh frahⁿ-SEH', person: 'nous', verb: 'prendre', role: 'compound', tags: ['prendre', 'family', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'One n, same as nous prenons. The stem does what the head verb does and asks for nothing new.' },
  { id: 'fr.a2.verbes.442', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils apprennent le français.', en: 'They are learning French.', ipa: '/il.za.pʁɛn lə fʁɑ̃.sɛ/', respell: 'eel-za-PREN luh frahⁿ-SEH', person: 'ils', verb: 'prendre', role: 'compound', tags: ['prendre', 'family', 'plural', 'doubling'], drills: S, audioRef: null, version: 1, notes: 'Two n, same as ils prennent, and for the same reason: the -ent has no sound in it.' },
  { id: 'fr.a2.verbes.443', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je comprends la question.', en: 'I understand the question.', ipa: '/ʒə kɔ̃.pʁɑ̃ la kɛs.tjɔ̃/', respell: 'zhuh kohⁿ-PRAHⁿ la kes-TYOHⁿ', person: 'je', verb: 'prendre', role: 'compound', tags: ['prendre', 'family', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'A different front and the same verb behind it. Four letters added and nothing else touched.' },
  { id: 'fr.a2.verbes.444', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous comprenons la question.', en: 'We understand the question.', ipa: '/nu kɔ̃.pʁə.nɔ̃ la kɛs.tjɔ̃/', respell: 'noo kohⁿ-pruh-NOHⁿ la kes-TYOHⁿ', person: 'nous', verb: 'prendre', role: 'compound', tags: ['prendre', 'family', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'One n. If you can build nous prenons you have already built this one.' },
  { id: 'fr.a2.verbes.445', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils comprennent la question.', en: 'They understand the question.', ipa: '/il kɔ̃.pʁɛn la kɛs.tjɔ̃/', respell: 'eel kohⁿ-PREN la kes-TYOHⁿ', person: 'ils', verb: 'prendre', role: 'compound', tags: ['prendre', 'family', 'plural', 'doubling'], drills: S, audioRef: null, version: 1, notes: 'Two n again. Three verbs on this screen and the doubling arrives in the same cell every time.' },
  { id: 'fr.a2.verbes.446', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Le film surprend Marie.', en: 'The film surprises Marie.', ipa: '/lə film syʁ.pʁɑ̃ ma.ʁi/', respell: 'luh FEELM sür-PRAHⁿ ma-REE', person: 'il', verb: 'prendre', role: 'compound', tags: ['prendre', 'family', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The third one in the family, and the ending is prend with nothing changed.' },

  /* ── the mettre family ───────────────────────────────────────────────────
   *
   * .450 AND .451 ARE .430 AND .435 WITH TWO LETTERS IN FRONT. Same object,
   * same article, same everything, and that is the point: `remettre la clé` is
   * `mettre la clé` with a prefix, and a learner reading the two lines together
   * does not need to be told what a compound is. */
  { id: 'fr.a2.verbes.447', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je promets une réponse.', en: 'I promise an answer.', ipa: '/ʒə pʁɔ.mɛ yn ʁe.pɔ̃s/', respell: 'zhuh proh-MEH ün ray-POHⁿS', person: 'je', verb: 'mettre', role: 'compound', tags: ['mettre', 'family', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'mets with a front on it, and one t, exactly as the head verb has one t here.' },
  { id: 'fr.a2.verbes.448', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous promettons une réponse.', en: 'We promise an answer.', ipa: '/nu pʁɔ.mɛ.tɔ̃ yn ʁe.pɔ̃s/', respell: 'noo proh-meh-TOHⁿ ün ray-POHⁿS', person: 'nous', verb: 'mettre', role: 'compound', tags: ['mettre', 'family', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: `Two t, and the ending is the -ons you have written on every verb since ${unitRef('a2.01')}.` },
  { id: 'fr.a2.verbes.449', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils permettent ce choix.', en: 'They allow this choice.', ipa: '/il pɛʁ.mɛt sə ʃwa/', respell: 'eel pehr-MET suh SHWAH', person: 'ils', verb: 'mettre', role: 'compound', tags: ['mettre', 'family', 'plural'], drills: S, audioRef: null, version: 1, notes: 'Two t and a silent -ent, which is ils mettent with four letters in front of it.' },
  { id: 'fr.a2.verbes.450', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je remets la clé.', en: 'I hand the key back.', ipa: '/ʒə ʁə.mɛ la kle/', respell: 'zhuh ruh-MEH la KLAY', person: 'je', verb: 'mettre', role: 'compound', tags: ['mettre', 'family', 'frame'], drills: SD, audioRef: null, version: 1, notes: 'The same sentence as je mets la clé with two letters on the front, and the verb has not moved.' },
  { id: 'fr.a2.verbes.451', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils remettent la clé.', en: 'They hand the key back.', ipa: '/il ʁə.mɛt la kle/', respell: 'eel ruh-MET la KLAY', person: 'ils', verb: 'mettre', role: 'compound', tags: ['mettre', 'family', 'frame', 'plural'], drills: S, audioRef: null, version: 1, notes: 'And the plural of the same. Read it above ils mettent la clé and count what changed.' },

  /* ── the battre family: one sentence, and that is the right amount ───────
   *
   * combattre is the only compound of battre that a learner at this level will
   * meet, and it exists in no published sentence anywhere in the corpus. One
   * row, one card, no drill of its own. */
  { id: 'fr.a2.verbes.452', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils combattent le feu.', en: 'They are fighting the fire.', ipa: '/il kɔ̃.bat lə fø/', respell: 'eel kohⁿ-BAT luh FUH', person: 'ils', verb: 'battre', role: 'compound', tags: ['battre', 'family', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'battent with three letters in front. The only compound of this one you are likely to need.' },

  /* ── the scene, in the learner's own words ───────────────────────────────
   *
   * THE FAILURE IS NOT A WRONG FORM. It is a learner who owns `je prends`
   * completely and treats `apprendre` as a verb they have never met, loses four
   * seconds looking for it, and answers in English. Nothing here is
   * ungrammatical and nobody is corrected; the conversation simply changes
   * language and does not change back.
   *
   * There is no wrong FRENCH sentence in the scene, deliberately. a2.11's
   * argument holds at mission 1: a learner with nothing to overwrite a wrong
   * form with keeps the wrong form. */
  { id: 'fr.a2.verbes.453', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu apprends le français ici ?', en: 'Are you learning French here?', ipa: '/ty a.pʁɑ̃ lə fʁɑ̃.sɛ i.si/', respell: 'tü a-PRAHⁿ luh frahⁿ-SEH ee-SEE', person: 'tu', verb: 'prendre', role: 'compound', tags: ['prendre', 'scene', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The question that stops the scene, and the verb in it is one you can already build.' },
  { id: 'fr.a2.verbes.454', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Oui, j\'apprends le français ici.', en: 'Yes, I am learning French here.', ipa: '/wi ʒa.pʁɑ̃ lə fʁɑ̃.sɛ i.si/', respell: 'wee, zha-PRAHⁿ luh frahⁿ-SEH ee-SEE', person: 'je', verb: 'prendre', role: 'compound', tags: ['prendre', 'scene', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The answer, and it is the question with one letter changed at the front of the verb.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED FACTS, ASSERTED RATHER THAN PRINTED
 * ═══════════════════════════════════════════════════════════════════════ */

/** Every authored row in the eighteen-cell grid. */
export const HEAD_ROWS = PRENDRE_METTRE.filter((r) => r.role === 'head');
/** The compounds, in sentences. */
export const COMPOUND_ROWS = PRENDRE_METTRE.filter((r) => r.role === 'compound');

/** Rows the dictée names. Every one measured LETTERS through the real
 *  `dicteeMode`, and every one free of U+0153; see header item 7. */
export const DICTATION_IDS = PRENDRE_METTRE.filter((r) => r.drills.includes('dictation')).map((r) => r.id);

/** Respellings that DISPLAY a nasal vowel, so the superscript is load-bearing. */
export const VISIBLE_NASALS = PRENDRE_METTRE.filter((r) => (r.respell ?? '').includes('ⁿ')).map((r) => r.id);

/** WHERE `hasPlainNasalFor` CANNOT SEE A DROPPED SUPERSCRIPT.
 *
 *  Corrections §6 asks every build to break each superscript back to a plain n,
 *  one at a time, and record what the checker misses. Measured 2026-08-12:
 *  TWENTY-NINE superscripts, TWENTY-SEVEN seen, TWO missed.
 *
 *  Both misses are the same token in the same word — `ray-POHⁿS` in `réponse` —
 *  and both are corrections §6's recorded shape rather than a new one: the nasal
 *  is followed by a CONSONANT inside the token, so `hasPlainNasalFor` needs the
 *  n to end a space-delimited token and it does not.
 *
 *  THE PREDICTION IN a2.14 §1 WAS RIGHT AND FOR THE RIGHT REASON. It said this
 *  lesson was probably clear of the doubled-nasal blind spot, because `AHⁿ` and
 *  `OHⁿ` are two-letter house spellings that `hasPlainNasal` catches on its
 *  first branch before the French is ever consulted. Measured: every `PRAHⁿ`,
 *  `PREN`, `frahⁿ` and `TOHⁿ` in this lesson IS seen, including on the lines
 *  that contain `prennent` and `apprennent`, which are spelled with nn and would
 *  otherwise have taken the doubled-nasal escape. The blind spot this lesson
 *  meets is the older one. */
export const BLIND_NASALS: readonly string[] = [
  'fr.a2.verbes.447 [zhuh proh-MEH ün ray-POHnS]',
  'fr.a2.verbes.448 [noo proh-meh-TOHⁿ ün ray-POHnS]',
];

/** The rows the blind spot lands on, with their token asserted BY NAME, so a
 *  later author who drops one fails here rather than shipping a value the shared
 *  checker calls clean. Corrections §6's RESPELL_REPAIRS_INVISIBLE shape,
 *  applied to an authored row rather than to a repair. */
export const BLIND_NASAL_ROWS: readonly { id: string; token: string; why: string }[] = [
  { id: 'fr.a2.verbes.447', token: 'ray-POHⁿS', why: 'the -on- of réponse is a nasal vowel and the S after it is inside the same token, so hasPlainNasalFor never reaches it. Corrections §6.' },
  { id: 'fr.a2.verbes.448', token: 'ray-POHⁿS', why: 'the same token in the same word, on the plural row.' },
];

/** THE FALSE-POSITIVE PATH, which corrections §6 asks every build to look for
 *  and to report the absence of if it finds none.
 *
 *  THIS BUILD FINDS NONE, and the reason is worth recording rather than leaving
 *  as a silence: the path needs a token ENDING in a vowel plus a plain n or m,
 *  and the only candidates in this lesson are `PREN`, `MET`, `BAT` and `POL`.
 *  `PREN` is the one that looks like it should fire — a vowel, then a plain N,
 *  at the end of a token — and it does not, because `hasPlainNasal`'s own list
 *  is (AH OH EH UH EU AI OU) and `EN` is not in it, and the second branch is
 *  rescued by the French: `prennent` is spelled with nn. That rescue is a2.14's
 *  blind spot working in this lesson's favour, on a word it was written for. */
export const FALSE_POSITIVE_CANDIDATES: readonly { fr: string; respell: string; flagged: false; why: string }[] = [
  { fr: 'Ils prennent la clé.', respell: 'eel PREN la KLAY', flagged: false, why: 'a real /n/ at the end of a token. The nn in prennent takes the doubled-nasal branch, which is correct here: the n in prennent genuinely sounds.' },
  { fr: 'Ils mettent la clé.', respell: 'eel MET la KLAY', flagged: false, why: 'no nasal anywhere. The -ent is silent so the respelling ends on the /t/ of the stem.' },
  { fr: 'Je bats Paul.', respell: 'zhuh BA POL', flagged: false, why: 'no nasal, and POL ends in a real /l/.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  CHANGES THIS BUILD MAKES TO ROWS IT DOES NOT OWN
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = { id: string; fr: string; from: string; to: string; why: string };

/** NASAL REPAIRS, VISIBLE. `hasPlainNasalFor` flags `from`, so the guard runs
 *  through the shared function exactly as a2.10 does: the stored value must be a
 *  violation the checker can see, and the replacement must be clean.
 *
 *  TWO, and the brief said there would be none of this kind. */
export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = [
  {
    id: 'fr.sons.verbes-essentiels.030',
    fr: 'comprendre',
    from: 'kohn-PRAHNDR',
    to: 'kohⁿ-PRAHⁿDR',
    why: 'TWO nasals in one word and the checker can see the first. `kohn` ends a token, so hasPlainNasalFor flags it; `PRAHN` does not, so repairing only what the checker reports would produce `kohⁿ-PRAHNDR`, which it then calls clean and which is still wrong. Corrections §6 names exactly this on `entendre`.',
  },
  {
    id: 'fr.a1.transports-quotidiens.041',
    fr: 'prendre',
    from: 'PRAHN-druh',
    to: 'PRAHⁿDR',
    why: `FLAGGED, and ${unitRef('a2.11')} recorded it as a variant it did not import. It is not a variant: it closes a nasal vowel with a plain n, which invariants §3 forbids, and it adds a syllable that is not in the word. Repaired to the house form the other two prendre rows now carry. THIS ROW IS NOT IMPORTED — it is repaired and carried and named on no screen.`,
  },
];

/** NASAL REPAIRS, INVISIBLE. `hasPlainNasalFor` does NOT flag `from`, so the
 *  guard has to run the opposite way (corrections §6): `from` unseen, `to`
 *  unseen, `to` carrying the superscript, and asserted BY NAME.
 *
 *  THREE. Every one is the prendre family's word-internal nasal, which is the
 *  shape corrections §6 was written about. */
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = [
  {
    id: 'fr.sons.verbes-essentiels.012',
    fr: 'prendre',
    from: 'PRAHNDR',
    to: 'PRAHⁿDR',
    why: 'the naming form this lesson displays. fr.sons.consonnes.107 already holds PRAHⁿDR, so the house form was read off a published row rather than invented; see READ_NOT_IMPORTED.',
  },
  {
    id: 'fr.a2.disciplines.051',
    fr: 'apprendre',
    from: 'a-PRAHNDR',
    to: 'a-PRAHⁿDR',
    why: `the same nasal one prefix along. This row is imported instead of fr.a1.ecole.051, which carries gender=m and would join ${unitRef('a1.03')} ending population.`,
  },
  {
    id: 'fr.sons.verbes-essentiels.225',
    fr: 'surprendre',
    from: 'sür-PRAHNDR',
    to: 'sür-PRAHⁿDR',
    why: 'the same nasal again. Three rows, one error, and the checker sees none of the three.',
  },
];

/** Every repair a screen may apply, as one list to a caller. */
export const ALL_REPAIRS: readonly Repair[] = [
  ...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE,
];

/** Rows released into a deck that lack the drill the deck runs. a2.13 found this
 *  by checking a pair together rather than by reading: a released row with no
 *  `flashcard` is a hub entry that cannot be served. */
export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string; why: string }[] = [
  { id: 'fr.a2.disciplines.051', fr: 'apprendre', add: 'flashcard', why: 'carries voiceflash and review only. It is this lesson\'s apprendre naming form and it is released into the act-3 deck.' },
  { id: 'fr.sons.nasales.027', fr: 'J\'apprends le français depuis le printemps.', add: 'flashcard', why: 'published evidence, carries sentence and review only.' },
  { id: 'fr.sons.nasales.020', fr: 'Maman prend toujours son temps.', add: 'flashcard', why: 'the same.' },
  { id: 'fr.sons.voyelles.448', fr: 'Elle met sa veste et ferme la porte.', add: 'flashcard', why: 'the same, on the mettre side.' },
  { id: 'fr.sons.voyelles.386', fr: 'Tu mets du beurre sur tout, toujours.', add: 'flashcard', why: 'the same.' },
];

/** RESPELLINGS ADDED WHERE THE DATABASE HOLDS NONE. Empty: every row this lesson
 *  imports already carries one, which is why the evidence list is four rows out
 *  of a candidate pool of 330. */
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [];

/** Imported or inspected rows this build looked at and did NOT change, each with
 *  the reason, so the next author does not re-litigate it. */
export const NOT_REPAIRED: readonly { id: string; respell: string; why: string }[] = [
  { id: 'fr.sons.consonnes.107', respell: 'PRAHⁿDR', why: 'ALREADY THE HOUSE FORM, and the value this build repairs fr.sons.verbes-essentiels.012 TO was read off it. Not imported because .012 sits in verbes-essentiels with the other five naming forms and carries the gloss and the drills this lesson needs; two identical prendre cards would be one card served twice.' },
  { id: 'fr.a1.dictee.095', respell: 'a-PRAHNDR', why: 'a third apprendre row with the same broken nasal. Not imported and not repaired: this build repairs the rows it displays, and repairing a dictée row it never shows would change a1 content for no reader. Recorded so whoever needs it knows it is there.' },
  { id: 'fr.a1.rp-travail-etudes.037', respell: 'ah-PRAHNDR', why: 'a fourth, same shape, same reason.' },
  { id: 'fr.a1.ecole.051', respell: 'ah-PRAHNDR', why: `a fifth, AND IT CARRIES gender=m. A gendered single-word row joins ${unitRef('a1.03')} measured ending population and moves twenty printed figures in a1-03-genre.test.ts. Not imported at any price, and not repaired for the same reason as the two above.` },
  { id: 'fr.b1.verbes.022', respell: 'pair-METR', why: 'a permettre variant that spells the first syllable pair- rather than pehr-. Invariants §9: a variant is not a violation, and there is no nasal in it. Not imported because fr.sons.verbes-essentiels.196 sits with the rest of the family.' },
  { id: 'fr.b1.verbes.086', respell: 'ad-METR', why: 'admettre EXISTS, which corrections §2 does not say. It is deliberately NOT imported: it is one of the two compounds the exam gives cold, and a card for it anywhere in this lesson would delete the only mission that distinguishes this lesson from a table.' },
];

/** Rows read and deliberately NOT imported, with the reason. Silence here is
 *  worth nothing to the next author; a recorded refusal is worth a probe. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.nasales.143', fr: 'On prend le train ensemble.', why: `THE BEST SINGLE PIECE OF EVIDENCE IN THE CORPUS FOR THIS LESSON, and it is ${unitRef('a2.27')}. Clean nasals, no tie, an ordinary sentence nobody wrote for a grammar screen. The brief: prendre le train is ${unitRef('a2.27')} at seq 26 and taking it here costs that unit its opening.` },
  { id: 'fr.sons.voyelles.407', fr: 'Tu prends le bus ou tu marches sous la pluie?', why: `the same, and ${unitRef('a2.27')} again.` },
  { id: 'fr.a1.verbes-essentiels.020', fr: 'Nous prenons le métro tous les jours.', why: `${Cap(unitRef('a2.27'))}, and its respelling closes two nasals with a plain n (noo pruh-NOHN luh may-TROH). Refused on the first ground; the second is recorded so nobody imports it later believing it is clean.` },
  { id: 'fr.sons.voyelles.434', fr: 'Tu prends le vélo ou l\'auto ?', why: `${Cap(unitRef('a2.27'))}.` },
  { id: 'fr.sons.masterclass.043', fr: 'Après le dîner, on prend un verre d\'eau.', why: `${Cap(unitRef('a2.07'))}, and its respelling carries U+203F UNDERTIE, which renders as a low underscore on a Pixel 6.` },
  { id: 'fr.sons.nasales.038', fr: 'Les enfants apprennent une chanson en classe.', why: 'THE ONLY PUBLISHED apprennent SENTENCE WITH A RESPELLING, and it carries U+203F. It would have been the best evidence for the doubled n in a row this lesson did not write.' },
  { id: 'fr.a1.verbes-essentiels.035', fr: 'Je comprends mieux maintenant.', why: 'three plain nasals in one line (zhuh kohn-PRAHN myuh mant-NAHN). Repairable, and this build does not import it: the four evidence rows it does take are already clean, and a repair on a row nobody in this lesson displays is a change with no reader.' },
  { id: 'fr.a2.mots-essentiels.009', fr: 'Prends ton parapluie.', why: 'an imperative. Every quiz question in this lesson fixes person and number with a pronoun, and a bare imperative on an evidence screen invites the learner to read it as tu prends with the pronoun dropped.' },
  { id: 'fr.a2.mots-essentiels.008', fr: 'Mets ton manteau.', why: 'the same, on the mettre side.' },
  { id: 'fr.b1.cuisine.009', fr: 'Elle bat les œufs avant de les incorporer à la pâte.', why: 'ONE OF ONLY THREE PUBLISHED ROWS HOLDING A CONJUGATED battre, and the reason battre les œufs is not this lesson frame. See header item 7: letterCount() strips U+0153, so the dictée bank and its target both read `ufs` and a learner who never spells the ligature is told they are right.' },
  { id: 'fr.sons.voyelles.020', fr: 'Mon cœur bat vite après le jeu.', why: 'the second of the three, same ligature, and `le cœur bat` is a sense of battre this lesson does not teach.' },
  { id: 'fr.a1.noms-essentiels.256', fr: 'Le cœur bat plus vite après la course.', why: 'the third. All three published battre sentences are now accounted for and not one of them is usable here.' },
  { id: 'fr.a1.cuisine.166', fr: 'battre les œufs', why: 'THE ROW THE HOUSE RESPELLING FOR battre WAS READ OFF. It holds `BATR LAY ZUH`, so fr.a2.verbes.421 ships `BATR` rather than inventing one, exactly as fr.sons.consonnes.107 supplies PRAHⁿDR. The row is refused because it holds U+0153 and because it is a fixed cooking phrase rather than a conjugated form.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  SHAPES THE GUARDS MATCH ON
 *
 *  `[^a-zà-ÿ]` rather than `\b` throughout: `\b` is ASCII-only in JavaScript, so
 *  a guard built on it silently never fires on an accented word. a2.02 shipped
 *  that bug and a2.12 found it.
 * ═══════════════════════════════════════════════════════════════════════ */

/** Every present-tense form of one family, head and named compounds together.
 *  Built from PARADIGM and FAMILIES so a cell that changes moves the guard. */
const formsOf = (v: Verb): string[] => {
  const stems = { prendre: ['prend', 'pren'], mettre: ['met'], battre: ['bat'] }[v];
  void stems;
  const heads = PARADIGM.map((p) => p.forms[v]);
  const compounds = FAMILIES[v].flatMap((c) => {
    const prefix = c.slice(0, c.length - v.length);
    return PARADIGM.map((p) => prefix + p.forms[v]);
  });
  return [...new Set([v, ...FAMILIES[v], ...heads, ...compounds])];
};

export const FAMILY_FORMS: Record<Verb, readonly string[]> = {
  prendre: formsOf('prendre'),
  mettre: formsOf('mettre'),
  battre: formsOf('battre'),
};

const shape = (words: readonly string[]) =>
  new RegExp(`(^|[^a-zà-ÿ])(${words.join('|')})(?![a-zà-ÿ])`, 'i');

export const PRENDRE_SHAPE = shape(FAMILY_FORMS.prendre);
export const METTRE_SHAPE = shape(FAMILY_FORMS.mettre);

/** THE battre SHAPE, AND IT DELIBERATELY OMITS `bat` AND `bats`.
 *
 *  a2.11 recorded the reason and it holds here: `bat` and `bats` are ordinary
 *  English words and every instruction line in this lesson is English, so a
 *  guard that counts them fires on prose. The forms that identify battre without
 *  ambiguity are the ones with the doubled t, plus the two infinitives. */
export const BATTRE_SHAPE = shape(['battre', 'combattre', 'débattre', 'abattre',
  'battons', 'battez', 'battent', 'combattons', 'combattez', 'combattent']);

/** The two compounds the exam gives cold, in every form. */
export const UNSEEN_SHAPE = shape(UNSEEN_FORMS);

/** The past participles a2.20 owns. */
export const RESERVED_SHAPE = shape(RESERVED_PARTICIPLES);

/** The neighbours' nouns. */
export const NEIGHBOUR_SHAPE = new RegExp(
  `(^|[^a-zà-ÿ])(${NEIGHBOUR_NOUNS.map((n) => n.replace(/'/g, '[\'’]')).join('|')})(?![a-zà-ÿ])`, 'i');

/** The over-generalised form, which may appear in exactly one place. */
export const OVER_GENERALISED_SHAPE = shape(['prendent', 'prendons', 'prendez', 'metts', 'batts']);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS THE BUILD ASSERTS
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE MISSION-ROW TITLE CEILING, measured on a Pixel 6 by a2.13's device pass
 *  and corrected by a2.14's: it is a rendered WIDTH and the character count is
 *  an approximation. Ledger §a2.14-13 says keep it at 27 and treat 26 to 27 with
 *  wide glyphs as unverified until it has been read off the hub. Every title in
 *  this lesson is 25 or under except the house heading, which 36 lessons ship
 *  and which demonstrably fits. */
export const MISSION_TITLE_MAX = 27;
export const MISSION_TITLE_TARGET = 25;

/** WHAT AN `lg` groupDrill ITEM DRAWS.
 *
 *  a2.13 and a2.14 both shipped cards carrying `respell` and `en` at this size
 *  and neither field reached a screen. e584bd8 fixed that in the RENDERER
 *  (MissionRich now draws both on the second line, `note` winning when present,
 *  across 583 cards in 28 lessons), so refusing the two fields would now block a
 *  legal pattern. What survives the fix is the defect itself: a card must put
 *  SOMETHING under the French, or the learner gets a word and a play button. */
export const GROUPDRILL_LG_RENDERS = ['fr', 'ipa', 'note', 'respell', 'en'] as const;

export const UNIT_ID = UNIT.id;
export const UNIT_SEQ = UNIT.seq;
export const LESSON_ID = 'a2.15.l1';
export const OWNED_ID_RANGE = ID_BLOCK;

export const EXPECTED_AUTHORED = 34;
export const EXPECTED_AUTHORED_INFINITIVES = 3;
export const EXPECTED_IMPORTED = 12;
export const EXPECTED_CARRIED = 13;
export const EXPECTED_SOURCE_THEMES = 5;
/** Eighteen cells minus the two `battre` deliberately does not author. */
export const EXPECTED_HEAD_ROWS = 16;
export const EXPECTED_PERSONS = 6;
export const EXPECTED_VERBS = 3;
export const EXPECTED_EVIDENCE_ROWS = 4;
export const EXPECTED_READ_ONLY = 13;
/** Twenty-eight sections and six acts. The paradigm act is five and the family
 *  act is eight; argued for in the lesson file's header. */
export const EXPECTED_SECTIONS = 28;
export const EXPECTED_ACTS = 6;
export const EXPECTED_TRIGGERS = 6;
export const EXPECTED_DRILLS = 12;
export const EXPECTED_SHEETS = 1;
export const EXPECTED_TAPTABLES = 1;
export const EXPECTED_QUESTIONS = 36;
export const EXPECTED_ROUNDS = 6;
export const EXPECTED_DICTATION = 11;
export const EXPECTED_RESPELL_REPAIRS = 5;
export const EXPECTED_RESPELL_REPAIRS_VISIBLE = 2;
export const EXPECTED_RESPELL_REPAIRS_INVISIBLE = 3;
export const EXPECTED_RESPELL_ADDITIONS = 0;
export const EXPECTED_DRILL_ADDITIONS = 5;
export const EXPECTED_BLIND_NASALS = 2;
export const EXPECTED_SUPERSCRIPTS = 29;
/** The act whose mission count must be the largest, alone. Doctrine §B.5. */
export const OWNS_ACT_ID = 'act3';
/** The act that carries the three paradigms, which must be SMALLER than the
 *  Owns act. If it is not, this is eighteen cells with a story attached. */
export const PARADIGM_ACT_ID = 'act2';
/** The reframe is carried verbatim this many times across the learner surface.
 *  Asserted against THIS constant, never against a figure derived from the
 *  lesson: a derived count compares the content to itself and passes on any
 *  rewording. Invariants §5. */
export const EXPECTED_REFRAME_USES = 16;

/** Every unit this lesson names on a learner surface, so a rename breaks a test
 *  rather than leaving a dead reference on a card. */
/** a2.07, a2.20 AND a2.27 ARE NOT ON THIS LIST, AND NEVER WERE ON A SCREEN.
 *
 *  The merge asserts every entry is NAMED on a learner surface. Measured
 *  against the version this build started from, none of those three appears in
 *  any lesson or term string: a2.20 is the block RESERVED_FOR the participles,
 *  and a2.07 and a2.27 are the NEIGHBOUR_UNITS whose themes lend rows. All
 *  three are recorded for an author in a corpus note, which is not a screen.
 *
 *  They sat on the list because the batch's walk reaches those notes and the
 *  merge's does not, so the two guards disagreed and only the looser one ran. */
export const CITED_UNITS = ['a2.01', 'a2.09', 'a2.10', 'a2.11', 'a2.02'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  READING THE CORPUS
 *
 *  Every screen reads its French, its gloss and its respelling THROUGH these,
 *  so no card restates a string this file already holds and a correction here
 *  moves every surface that quotes it.
 * ═══════════════════════════════════════════════════════════════════════ */

export const BY_ID: Map<string, PmRow> = new Map(PRENDRE_METTRE.map((r) => [r.id, r]));

/** A corpus row as the `Item` the database stores. `person`, `verb` and `role`
 *  are authoring metadata and have no column: they exist so the guards can
 *  assert the family rather than pattern-match the French, and they must not
 *  reach Postgres. Stripped here, in one place. */
export function toItem(r: PmRow): Item {
  const { person, verb, role, ...item } = r;
  void person; void verb; void role;
  return item as Item;
}

const must = (id: string): PmRow => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${Cap(unitRef('a2.15'))}: no authored row ${id}. A screen is quoting a row that does not exist.`);
  return r;
};

/** The French of an authored row. */
export const fr = (id: string): string => must(id).fr;
/** Its English gloss. */
export const en = (id: string): string => must(id).en ?? '';
/** Its respelling, bare. */
export const bare = (id: string): string => must(id).respell ?? '';
/** Its respelling in the brackets every card puts round one. */
export const sub = (id: string): string => `[${bare(id)}]`;

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = PRENDRE_METTRE.map((r) => r.id);

/** The head-verb grid ids, DERIVED from the rows rather than listed, so a row
 *  that loses its `head` role falls out of the grid, the deck and the speak deck
 *  at once. */
export const HEAD_IDS: string[] = HEAD_ROWS.map((r) => r.id);

/** One verb's column, in person order. `battre` returns four and not six, which
 *  is the weight decision made visible in the data. */
export const headIds = (v: Verb): string[] => HEAD_ROWS.filter((r) => r.verb === v).map((r) => r.id);

/** One verb's compound sentences. */
export const compoundIds = (v: Verb): string[] => COMPOUND_ROWS.filter((r) => r.verb === v).map((r) => r.id);

/** Every authored row belonging to one family, in id order. The weight guard
 *  reads THIS rather than counting strings. */
export const rowsFor = (v: Verb): PmRow[] => PRENDRE_METTRE.filter((r) => r.verb === v);

/** A sentence with its trailing full stop removed, for quoting one INSIDE a
 *  question. Without it `${fr(id)}. And this one?` renders as "Je prends la
 *  clé.. And this one?", which a2.02 shipped to the seed and which was found by
 *  mutation-testing rather than by any guard. */
export const noStop = (s: string): string => s.replace(/\.$/, '');
