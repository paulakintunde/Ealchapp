// The a2.13 corpus: what this lesson authored, what it imports, what it refused
// to touch, and the nine claims its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 30 authored entries below and
// for every respelling a2.13 puts on a screen. The lesson body reads `fr`,
// `ipa`, `respell` and `en` FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE GENERAL PRINCIPLE
//
//  THIS LESSON TEACHES THREE VERBS SO THAT THE LEARNER NEVER HAS TO BE
//  TAUGHT A FOURTH.
//
//  Every infinitive that follows a modal here is IMPORTED from a theme this
//  lesson does not own: `payer`, `commander`, `attendre`, `choisir`, `boire`,
//  `acheter`, `aider`, `chercher`, `conduire`, `arriver`. Not one is authored,
//  because the argument of the lesson is that the second verb comes from
//  somewhere else, and a corpus that authored its own infinitives would be
//  quietly contradicting the thing it teaches.
//
//  `arroser` goes further: it is the UNSEEN verb, it is never released as a
//  card, it appears in no deck and in no term, and the learner meets it for
//  the first time inside a mission that asks them to build the sentence. That
//  mission is the reason this lesson exists.
// ══════════════════════════════════════════════════════════════════════════
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-12 ──────────────────────────
//
// 1. THE REFRAME IT PROPOSES CANNOT SHIP.
//
//      "Conjugate one verb, and every other verb stays in its dictionary form."
//
//    `conjugate` is on the JARGON list in A1-BUILD-INVARIANTS §8, and so is
//    `infinitive`, which the brief's own rejected alternative uses. Both
//    candidates in the brief are unshippable. What ships is REFRAME below.
//
// 2. "SEVEN of the ten `devoir` rows are the NOUN."  NINE of ten are.
//
//    Measured with every article, the way probe-corpus.ts probes: ten rows
//    match `devoir` or `le/la/les/un/des devoir(s)`, NINE carry a gender, and
//    `les devoirs` is an eleventh row the brief did not count. Exactly one row
//    is the verb and it is the one the brief names. The warning is right and
//    its arithmetic is not.
//
// 3. "The corpus has the forms and no minimal pairs." (A2-BRIEF-CORRECTIONS §3,
//    which calls itself "the most reliable single prediction in this file")
//
//    FALSE ON THIS LESSON'S OWN HEADLINE CONTRAST. Two exact pairs exist:
//
//      fr.a1.verbes-du-quotidien.035  Je veux un café, s'il vous plaît.
//      fr.a1.cafe.051                 Je voudrais un café, s'il vous plaît.
//
//      fr.a1.verbes-essentiels.079    Nous voulons réserver une table pour deux.
//      fr.a2.verbes-du-quotidien.073  Nous voudrions réserver une table pour deux.
//
//    Both halves of the first pair are imported. The `nous` echo is recorded in
//    READ_NOT_IMPORTED and left where it is: two polite forms is the ceiling
//    the brief sets and this lesson does not spend it on a repetition.
//
// 4. "628 modal + infinitive sentences" is right, and USELESS AS AN IMPORT POOL.
//
//    Six hundred and twenty-eight sentences hold the shape. TWELVE carry a
//    respelling. A row without one reaches a card the learner cannot say, so
//    the importable pool is not 628 but 12, and seven of those twelve are worth
//    importing. This is why the paradigm is AUTHORED even though the corpus
//    looks rich: the corpus is rich in EVIDENCE and poor in CARDS, and the two
//    are not the same measurement.
//
// 5. "Whether the A1 themes hold enough infinitives to import." (UNVERIFIED)
//
//    They hold 857 distinct ungendered infinitives, 815 of them respelled,
//    across every theme in the corpus. This was never in doubt and it is the
//    one place where the corpus is more generous than any brief assumed.
//
// 6. "`il faut` is in no unit's canDo anywhere in A2." CONFIRMED, AND WORSE.
//
//    No unit at ANY level owns it. It occurs in 319 published sentences and it
//    is the single commonest modal form in the corpus — more frequent than any
//    conjugated form of the three verbs this lesson teaches. See IL_FAUT below
//    for the decision and the gap this raises.
//
// 7. THE HOUSE RESPELLING FOR /ø œ/ IS NOT WHAT THE INVARIANTS SAY.
//
//    A1-BUILD-INVARIANTS §3 gives `EU`. The shipped corpus does not obey it:
//    fr.a1.verbes-essentiels.033 already respells `peux` as `puh`, and
//    fr.a2.verbes-essentiels.041 respells `veut` as `vuh`. `la queue` is
//    `KUH`, `le neveu` is `nuh-VUH`, `nerveux` is `nehr-VUH`.
//
//    This build ships UH, matching practice rather than the document, because
//    inventing a fourth spelling for one sound is exactly what invariants §9
//    records as the mistake made with the ɥ glide. The divergence is reported
//    rather than silently resolved.
//
// 8. A SHIPPED ROW CARRIES U+203F AND WOULD HAVE BROUGHT THE UNDERSCORE BUG IN.
//
//    fr.sons.voyelles.311 respells `neuf heures` as `neu-v‿EUR`, with U+203F
//    UNDERTIE. That glyph renders as a low underscore on a Pixel 6 — the defect
//    already recorded against shipped sons.10 content. Importing the row would
//    have put it on an a2.13 screen. THE ROW IS NOT IMPORTED and the authored
//    `Vous devez payer.` covers the same cell. See READ_NOT_IMPORTED.
//
// 9. "voudrais is a conditional and you are not teaching the conditional."
//
//    Right, and the brief's own containment is looser than it needs to be: it
//    permits `je voudrais` AND `nous voudrions`. Both ship, and NOTHING else —
//    POLITE_FORMS is the closed list and the batch refuses any other
//    conditional form on any surface.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  IDENTITY
 * ═══════════════════════════════════════════════════════════════════════ */

/** The block this build claims, from A2-BATCH-1-LEDGER §2. Thirty of the forty
 *  are used; .371..380 stay free. */
export const OWNED_ID_RANGE = { from: 'fr.a2.verbes.341', to: 'fr.a2.verbes.380' } as const;

/** `fr.a2.verbes` held exactly this many rows when a2.13 claimed .341, which is
 *  the ledger's own figure after a2.12. The batch REFUSES to run against any
 *  other count: the maximum id has been useless since a2.10.l2 took .461..500,
 *  and a printed figure nobody compares is how a1.20 lost a build hour. */
export const ROW_COUNT_BEFORE = 280;

export const THEME = 'verbes';
export const UNIT_ID = 'a2.13';
export const LESSON_ID = 'a2.13.l1';
/** seq 7, so the eyebrow is `A2 · LEÇON 07` (missions.ts:110). */
export const UNIT_SEQ = 7;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE VERBS, AND THE SHAPE THEY SHARE
 * ═══════════════════════════════════════════════════════════════════════ */

export type Modal = 'vouloir' | 'pouvoir' | 'devoir';
export const MODAL_ORDER: readonly Modal[] = ['vouloir', 'pouvoir', 'devoir'] as const;

/** The naming forms, imported not authored. All three are ungendered, all three
 *  carry a respelling, and all three share one theme — which `a2.12`'s three
 *  did not, and which is worth recording because it is the exception. */
export const NAMING_FORMS: Record<Modal, { id: string; respell: string; en: string }> = {
  vouloir: { id: 'fr.sons.verbes-essentiels.007', respell: 'voo-LWAR', en: 'to want' },
  pouvoir: { id: 'fr.sons.verbes-essentiels.006', respell: 'poo-VWAR', en: 'to be able to' },
  devoir: { id: 'fr.sons.verbes-essentiels.008', respell: 'duh-VWAR', en: 'to have to' },
};

/** THE STEM RULE, WHICH IS THE WHOLE OF THE IRREGULARITY.
 *
 *  Each verb has three stems, and the third is DERIVED from the other two: the
 *  `ils` stem is the singular stem plus the consonant of the `nous` stem. That
 *  holds for all three, identically, with no exception — which is why the grid
 *  is one grid and not three tables.
 *
 *      veu + l  -> veul      peu + v  -> peuv      doi + v  -> doiv
 *          voul                  pouv                  dev
 *
 *  The batch DERIVES `ils` from `singular` and `nousStem` rather than trusting
 *  the literal, so a typo in this table fails the build instead of shipping. */
export const STEMS: Record<Modal, { singular: string; nous: string; ils: string }> = {
  vouloir: { singular: 'veu', nous: 'voul', ils: 'veul' },
  pouvoir: { singular: 'peu', nous: 'pouv', ils: 'peuv' },
  devoir: { singular: 'doi', nous: 'dev', ils: 'doiv' },
};

/** The endings, and which of them the learner already owns.
 *
 *  FIVE OF SIX ARE ALREADY THEIRS. `-ons`, `-ez` and `-ent` arrived in a2.01;
 *  the bare singular of `dois/doit` is the a2.11 -RE shape. Exactly ONE thing
 *  in eighteen cells is new, and it is the `-x` on `veux` and `peux`. Saying
 *  that plainly is worth more than eighteen cards. */
export const ENDINGS = [
  { person: 'je', ending: 'x · s', owned: false, since: null },
  { person: 'tu', ending: 'x · s', owned: false, since: null },
  { person: 'il · elle · on', ending: 't', owned: true, since: 'a2.11' },
  { person: 'nous', ending: 'ons', owned: true, since: 'a2.01' },
  { person: 'vous', ending: 'ez', owned: true, since: 'a2.01' },
  { person: 'ils · elles', ending: 'ent', owned: true, since: 'a2.01' },
] as const;

/** The one genuinely new ending, named so a test can assert the lesson says it
 *  once and does not bury it. */
export const THE_NEW_ENDING = 'x';
export const THE_NEW_ENDING_FORMS = ['veux', 'peux'] as const;

/** THE FRAME. One infinitive across three verbs and six persons, which no
 *  earlier lesson in the band managed: a2.02 needed three frames and so did
 *  a2.12. Measured through the real `dicteeMode` on 2026-08-12, all eighteen
 *  rows spell from LETTERS and the longest is exactly 16 letters, which is the
 *  limit. One letter more and the grid would have had to shrink. */
export const FRAME_VERB = 'payer';
export const FRAME_VERB_ID = 'fr.sons.verbes-essentiels.059';
export const FRAME_VERB_RESPELL = 'pay-YAY';

/** The eighteen cells, in reading order: three verbs down, six persons across.
 *  `respell` here is the MODAL ALONE, so the grid can print a cell without
 *  repeating the frame in every box. */
export const PARADIGM: readonly { person: string; forms: Record<Modal, string>; respells: Record<Modal, string> }[] = [
  { person: 'je', forms: { vouloir: 'veux', pouvoir: 'peux', devoir: 'dois' }, respells: { vouloir: 'VUH', pouvoir: 'PUH', devoir: 'DWAH' } },
  { person: 'tu', forms: { vouloir: 'veux', pouvoir: 'peux', devoir: 'dois' }, respells: { vouloir: 'VUH', pouvoir: 'PUH', devoir: 'DWAH' } },
  { person: 'il · elle · on', forms: { vouloir: 'veut', pouvoir: 'peut', devoir: 'doit' }, respells: { vouloir: 'VUH', pouvoir: 'PUH', devoir: 'DWAH' } },
  { person: 'nous', forms: { vouloir: 'voulons', pouvoir: 'pouvons', devoir: 'devons' }, respells: { vouloir: 'voo-LOHⁿ', pouvoir: 'poo-VOHⁿ', devoir: 'duh-VOHⁿ' } },
  { person: 'vous', forms: { vouloir: 'voulez', pouvoir: 'pouvez', devoir: 'devez' }, respells: { vouloir: 'voo-LAY', pouvoir: 'poo-VAY', devoir: 'duh-VAY' } },
  { person: 'ils · elles', forms: { vouloir: 'veulent', pouvoir: 'peuvent', devoir: 'doivent' }, respells: { vouloir: 'VUHL', pouvoir: 'PUHV', devoir: 'DWAHV' } },
];

/** THE HOMOPHONE SET. THREE PERSONS, TWO SPELLINGS, ONE SOUND, in every column
 *  — the same shape a2.12 found in `fais/fais/fait`.
 *
 *  THE ARITHMETIC MATTERS AND THIS BUILD GOT IT WRONG FIRST TIME. `veux/veux/
 *  veut` is not three spellings; `je` and `tu` are IDENTICAL on paper as well as
 *  in the mouth, and only the third cell is spelled differently. A lesson that
 *  said "three spellings" would be teaching a learner to look for a distinction
 *  that is not there. The check derives both figures rather than trusting
 *  either.
 *
 *  `listenChoose` CANNOT test these and a quiz that tried would certify a bug;
 *  the batch refuses it by name. */
export const SINGULAR_TRIPLES: readonly { modal: Modal; forms: readonly string[]; respell: string }[] = MODAL_ORDER.map((m) => ({
  modal: m,
  forms: [PARADIGM[0].forms[m], PARADIGM[1].forms[m], PARADIGM[2].forms[m]],
  respell: PARADIGM[0].respells[m],
}));

/** The two figures the lesson is allowed to state about the singular. Declared
 *  here and DERIVED in the check, so a surface that says "three spellings"
 *  fails rather than ships. */
export const SINGULAR_SPELLINGS = 2;
export const SINGULAR_PERSONS = 3;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE POLITENESS HALF
 * ═══════════════════════════════════════════════════════════════════════ */

/** The ONLY two conditional forms allowed on any surface of this lesson.
 *
 *  Both are taught as fixed forms and both are said to be fixed, in the words
 *  shipped in `modaux-terms.ts`. The batch refuses every other form of the
 *  conditional anywhere, including in a `note` or a `why`. */
export const POLITE_FORMS = ['voudrais', 'voudrions'] as const;

/** Every conditional form that must NOT appear. Checked by name so the failure
 *  message says which one leaked. */
export const FORBIDDEN_CONDITIONAL = [
  'voudrait', 'voudriez', 'voudraient', 'pourrais', 'pourrait', 'pourrions', 'pourriez',
  'pourraient', 'devrais', 'devrait', 'devrions', 'devriez', 'devraient', 'aimerais',
] as const;

/** a1.01 established the register and this lesson is the only place in batch 1
 *  where it returns. Its reframe, read from Postgres rather than assumed:
 *
 *      "Bonjour is the price of entry."
 *
 *  a1.01 ALSO ALREADY PUTS `Je voudrais une baguette.` IN THE LEARNER'S MOUTH,
 *  in the first lesson of the course, with no explanation of what `voudrais`
 *  is. This lesson is where that debt is paid, and it says so. */
export const A1_01_REFRAME = 'Bonjour is the price of entry.';
export const A1_01_UNIT = 'a1.01';

/** The register pair, imported whole. Neither row carried a respelling and this
 *  build adds one to each — see RESPELL_ADDITIONS. */
export const REGISTER_PAIR = {
  blunt: { id: 'fr.a1.verbes-du-quotidien.035', fr: 'Je veux un café, s\'il vous plaît.' },
  polite: { id: 'fr.a1.cafe.051', fr: 'Je voudrais un café, s\'il vous plaît.' },
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE SENSES OF `pouvoir`
 * ═══════════════════════════════════════════════════════════════════════ */

/** English splits these across three words and French does not. A learner who
 *  believes `pouvoir` means only physical ability will reach for something else
 *  when they need to ask permission, and there is nothing else to reach for. */
export const POUVOIR_SENSES = [
  { key: 'permission', english: 'may', gloss: 'asking whether you are allowed', id: 'fr.a2.verbes.359' },
  { key: 'possibility', english: 'might', gloss: 'saying a thing could happen', id: 'fr.a2.verbes.360' },
  { key: 'ability', english: 'can', gloss: 'saying somebody is able', id: 'fr.a2.verbes.361' },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  `il faut`, AND THE CURRICULUM GAP
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE DECISION, RECORDED BECAUSE THE BRIEF ASKS FOR IT EITHER WAY.
 *
 *  `il faut` IS INCLUDED, as ONE context card in the boundary act, with the
 *  naming form and nothing else. It is not conjugated, not drilled, not
 *  quizzed and not given a paradigm.
 *
 *  Measured 2026-08-12: no unit at any level, in any of the 75 curriculum
 *  units, names `il faut` in a canDo, a title or a grammar list. It occurs in
 *  319 published sentences. That is more than any conjugated form of the three
 *  verbs this lesson does teach.
 *
 *  Leaving it out entirely would mean a learner who finishes A2 has met the
 *  commonest way French expresses obligation 319 times and been told nothing
 *  about it. Teaching it properly would give this lesson a fourth paradigm and
 *  make the impersonal, rather than the modal, the thing the learner remembers.
 *  One card is the compromise, and the gap is raised in the build report. */
export const IL_FAUT = {
  included: true as const,
  as: 'one context card in the boundary act' as const,
  sentenceCount: 319,
  ownedByUnits: [] as readonly string[],
  ids: ['fr.a1.cafe.173', 'fr.sons.liaisons.220'] as readonly string[],
};

/** `devoir` also means "to owe". One row of context, in the same act, for the
 *  same reason: a learner who meets `Tu me dois de l'argent.` in the wild and
 *  has only ever seen `devoir` as obligation will misread it. */
export const DEVOIR_OWE_ID = 'fr.a2.verbes.364';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE UNSEEN VERB
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE MISSION THAT IS THE REASON THE LESSON EXISTS.
 *
 *  `arroser` is drawn from `jardinage`, a theme a2.13 names nowhere else. It is
 *  DELIBERATELY NOT IMPORTED as an item: the moment the lesson hands the learner
 *  a card for it, the lesson has taught it, and the claim being tested is that
 *  they can use a verb the lesson never taught.
 *
 *  So the row is recorded here as the source of the respelling, the batch checks
 *  that value against Postgres, and the lesson's `itemIds` must NOT contain it.
 *  All three of those are asserted. */
export const UNSEEN_VERB = {
  fr: 'arroser',
  en: 'to water',
  respell: 'ah-roh-ZAY',
  sourceId: 'fr.a1.jardinage.108',
  sourceTheme: 'jardinage',
  /** The two authored rows that are the answer key for the mission. */
  answerIds: ['fr.a2.verbes.369', 'fr.a2.verbes.370'] as readonly string[],
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS LESSON MUST NOT TOUCH
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.14 (seq 8) declares a2.13 as its prerequisite precisely so it can bring
 *  `pouvoir` back as its contrast. `savoir` is its entire payload and this
 *  lesson does not spend a word of it.
 *
 *  `nager` is here because `je sais nager` is a2.14's headline example, and an
 *  a2.13 mission that used `nager` as its unseen verb would take the sentence
 *  a2.14 needs. That is why the unseen verb is `arroser`. */
export const RESERVED_FOR_NEIGHBOURS = [
  { fr: 'savoir', id: 'fr.sons.verbes-essentiels.009', unit: 'a2.14', why: 'a2.14 owns savoir against connaître outright' },
  { fr: 'nager', id: 'fr.sons.verbes-essentiels.088', unit: 'a2.14', why: 'je sais nager is a2.14\'s headline contrast' },
  { fr: 'connaître', id: null, unit: 'a2.14', why: 'the other half of a2.14' },
] as const;

/** Every unit this lesson names on a learner surface, so a rename breaks a test
 *  rather than leaving a dead reference on a card. */
export const CITED_UNITS = ['a1.01', 'a2.01', 'a2.02', 'a2.11', 'a2.14'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUTHORED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type ModalRow = Omit<Item, 'drills'> & {
  /** Which person this row puts on screen, or null for a row outside the grid. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | null;
  /** Which paradigm this row belongs to, or null. */
  modal: Modal | null;
  /** The infinitive that follows the modal. EVERY authored row has one: a bare
   *  conjugated modal on a card teaches the wrong shape and the batch refuses
   *  it. */
  infinitive: string;
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows the dictée names, and every one is at
 *  or under the 16-letter limit so it spells from LETTERS. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The 30 authored entries, in sequence order. */
export const MODAUX: ModalRow[] = [
  /* ── vouloir, across the frame ────────────────────────────────────────────
   *
   * .341, .342 and .343 CARRY THE SAME RESPELLING once the pronoun is removed.
   * `veux`, `veux` and `veut` are one sound; the batch asserts the three are
   * EQUAL rather than merely present, because a later author "improving" one of
   * them would silently destroy the homophone claim the lesson makes. */
  { id: 'fr.a2.verbes.341', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je veux payer.', en: 'I want to pay.', ipa: '/ʒə vø pe.je/', respell: 'zhuh VUH pay-YAY', person: 'je', modal: 'vouloir', infinitive: 'payer', tags: ['modal', 'vouloir', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'The -x is the one new ending in this lesson. It sounds like nothing at all, exactly as the -s did.' },
  { id: 'fr.a2.verbes.342', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu veux payer.', en: 'You want to pay.', ipa: '/ty vø pe.je/', respell: 'tü VUH pay-YAY', person: 'tu', modal: 'vouloir', infinitive: 'payer', tags: ['modal', 'vouloir', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'The same spelling as the je form and the same sound. Only the pronoun separates them.' },
  { id: 'fr.a2.verbes.343', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il veut payer.', en: 'He wants to pay.', ipa: '/il vø pe.je/', respell: 'eel VUH pay-YAY', person: 'il', modal: 'vouloir', infinitive: 'payer', tags: ['modal', 'vouloir', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'A -t instead of a -x, and still the same sound. Two spellings, three persons, one thing to say.' },
  { id: 'fr.a2.verbes.344', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous voulons payer.', en: 'We want to pay.', ipa: '/nu vu.lɔ̃ pe.je/', respell: 'noo voo-LOHⁿ pay-YAY', person: 'nous', modal: 'vouloir', infinitive: 'payer', tags: ['modal', 'vouloir', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The stem changes to voul- and the ending is the ordinary -ons from a2.01.' },
  { id: 'fr.a2.verbes.345', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous voulez payer.', en: 'You want to pay.', ipa: '/vu vu.le pe.je/', respell: 'voo voo-LAY pay-YAY', person: 'vous', modal: 'vouloir', infinitive: 'payer', tags: ['modal', 'vouloir', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'Same stem as nous, and the ordinary -ez. Nothing here is irregular except the stem itself.' },
  { id: 'fr.a2.verbes.346', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils veulent payer.', en: 'They want to pay.', ipa: '/il vœl pe.je/', respell: 'eel VUHL pay-YAY', person: 'ils', modal: 'vouloir', infinitive: 'payer', tags: ['modal', 'vouloir', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'Take the je stem, add the consonant from the nous stem: veu plus l. The -ent is silent as always.' },

  /* ── pouvoir, the same six cells, the same frame ─────────────────────────
   *
   * Nothing changes but the letters. That is the claim, and putting it on one
   * frame is the only way to make it visible: a learner comparing `Je veux
   * payer` with `Je peux payer` sees a two-letter difference and no more. */
  { id: 'fr.a2.verbes.347', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je peux payer.', en: 'I can pay.', ipa: '/ʒə pø pe.je/', respell: 'zhuh PUH pay-YAY', person: 'je', modal: 'pouvoir', infinitive: 'payer', tags: ['modal', 'pouvoir', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'The same -x ending as veux, on the same kind of stem. Two verbs, one new letter between them.' },
  { id: 'fr.a2.verbes.348', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu peux payer.', en: 'You can pay.', ipa: '/ty pø pe.je/', respell: 'tü PUH pay-YAY', person: 'tu', modal: 'pouvoir', infinitive: 'payer', tags: ['modal', 'pouvoir', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'Identical to the je form on paper and in the mouth.' },
  { id: 'fr.a2.verbes.349', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il peut payer.', en: 'He can pay.', ipa: '/il pø pe.je/', respell: 'eel PUH pay-YAY', person: 'il', modal: 'pouvoir', infinitive: 'payer', tags: ['modal', 'pouvoir', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'A -t, and the same sound again. The pattern is the pattern veux had.' },
  { id: 'fr.a2.verbes.350', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous pouvons payer.', en: 'We can pay.', ipa: '/nu pu.vɔ̃ pe.je/', respell: 'noo poo-VOHⁿ pay-YAY', person: 'nous', modal: 'pouvoir', infinitive: 'payer', tags: ['modal', 'pouvoir', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The stem goes to pouv-, exactly as vouloir went to voul-.' },
  { id: 'fr.a2.verbes.351', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous pouvez payer.', en: 'You can pay.', ipa: '/vu pu.ve pe.je/', respell: 'voo poo-VAY pay-YAY', person: 'vous', modal: 'pouvoir', infinitive: 'payer', tags: ['modal', 'pouvoir', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'This is the form you will use most: it is how you ask a stranger for anything.' },
  { id: 'fr.a2.verbes.352', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils peuvent payer.', en: 'They can pay.', ipa: '/il pœv pe.je/', respell: 'eel PUHV pay-YAY', person: 'ils', modal: 'pouvoir', infinitive: 'payer', tags: ['modal', 'pouvoir', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'peu plus the v from pouv-. Same recipe as veulent, and you can now guess the third one.' },

  /* ── devoir, and by now the learner should be predicting it ──────────────
   *
   * `dois` and `doit` are the a2.11 -RE singular shape, arriving on a verb that
   * is not -RE. That is worth one line and not a mission. */
  { id: 'fr.a2.verbes.353', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je dois payer.', en: 'I have to pay.', ipa: '/ʒə dwa pe.je/', respell: 'zhuh DWAH pay-YAY', person: 'je', modal: 'devoir', infinitive: 'payer', tags: ['modal', 'devoir', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'A plain -s here, not the -x. This is the singular you already met on the -RE verbs in a2.11.' },
  { id: 'fr.a2.verbes.354', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu dois payer.', en: 'You have to pay.', ipa: '/ty dwa pe.je/', respell: 'tü DWAH pay-YAY', person: 'tu', modal: 'devoir', infinitive: 'payer', tags: ['modal', 'devoir', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'The same again. Every one of these three verbs hands you two spellings across three persons, and one sound.' },
  { id: 'fr.a2.verbes.355', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il doit payer.', en: 'He has to pay.', ipa: '/il dwa pe.je/', respell: 'eel DWAH pay-YAY', person: 'il', modal: 'devoir', infinitive: 'payer', tags: ['modal', 'devoir', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'The -t you have seen twice already in this lesson.' },
  { id: 'fr.a2.verbes.356', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous devons payer.', en: 'We have to pay.', ipa: '/nu də.vɔ̃ pe.je/', respell: 'noo duh-VOHⁿ pay-YAY', person: 'nous', modal: 'devoir', infinitive: 'payer', tags: ['modal', 'devoir', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The stem is dev-, and the ending is the one you have had since a2.01.' },
  { id: 'fr.a2.verbes.357', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous devez payer.', en: 'You have to pay.', ipa: '/vu də.ve pe.je/', respell: 'voo duh-VAY pay-YAY', person: 'vous', modal: 'devoir', infinitive: 'payer', tags: ['modal', 'devoir', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'Ordinary -ez. This is the sentence a waiter says to you at the end of a meal.' },
  { id: 'fr.a2.verbes.358', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils doivent payer.', en: 'They have to pay.', ipa: '/il dwav pe.je/', respell: 'eel DWAHV pay-YAY', person: 'ils', modal: 'devoir', infinitive: 'payer', tags: ['modal', 'devoir', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'doi plus the v from dev-. Third verb, third time, same recipe.' },

  /* ── the three senses of pouvoir ─────────────────────────────────────────
   *
   * Three rows, three English words, one French verb. `commander`, `arriver`
   * and `conduire` are all imported, so even the sense mission is built out of
   * verbs this lesson did not teach. */
  { id: 'fr.a2.verbes.359', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je peux commander ?', en: 'May I order?', ipa: '/ʒə pø kɔ.mɑ̃.de/', respell: 'zhuh PUH koh-mahⁿ-DAY', person: 'je', modal: 'pouvoir', infinitive: 'commander', tags: ['modal', 'pouvoir', 'permission'], drills: S, audioRef: null, version: 1, notes: 'Asking to be allowed. The rising voice makes it a question, exactly as it did in a1.19.' },
  { id: 'fr.a2.verbes.360', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il peut arriver demain.', en: 'He might arrive tomorrow.', ipa: '/il pø a.ʁi.ve də.mɛ̃/', respell: 'eel PUH ah-ree-VAY duh-MAⁿ', person: 'il', modal: 'pouvoir', infinitive: 'arriver', tags: ['modal', 'pouvoir', 'possibility', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Nobody is able to do anything here. It says the thing could happen, and English reaches for might.' },
  { id: 'fr.a2.verbes.361', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle peut conduire.', en: 'She can drive.', ipa: '/ɛl pø kɔ̃.dɥiʁ/', respell: 'ell PUH kohⁿ-DWEER', person: 'il', modal: 'pouvoir', infinitive: 'conduire', tags: ['modal', 'pouvoir', 'ability', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Able to. One verb has now carried three English words, and no French speaker felt the difference.' },

  /* ── the polite pair, inside the same frame ──────────────────────────────
   *
   * .362 is .341 with one word changed. That is the entire teaching point and
   * it is why the register contrast uses the frame rather than a fresh
   * situation: the learner has to see that the sentence did not move. */
  { id: 'fr.a2.verbes.362', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je voudrais payer.', en: 'I would like to pay.', ipa: '/ʒə vu.dʁɛ pe.je/', respell: 'zhuh voo-DREH pay-YAY', person: 'je', modal: 'vouloir', infinitive: 'payer', tags: ['modal', 'vouloir', 'polite', 'fixed'], drills: SD, audioRef: null, version: 1, notes: 'Learn this one whole. It is not a present tense and its own name comes much later.' },
  { id: 'fr.a2.verbes.363', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous voudrions payer.', en: 'We would like to pay.', ipa: '/nu vu.dʁi.jɔ̃ pe.je/', respell: 'noo voo-dree-YOHⁿ pay-YAY', person: 'nous', modal: 'vouloir', infinitive: 'payer', tags: ['modal', 'vouloir', 'polite', 'fixed', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The only other one worth carrying. Two fixed forms, and nothing else from this family until later.' },

  /* ── the boundary act: the second sense, and the impersonal ──────────────── */
  { id: 'fr.a2.verbes.364', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu me dois de l\'argent.', en: 'You owe me money.', ipa: '/ty mə dwa də laʁ.ʒɑ̃/', respell: 'tü muh DWAH duh lar-ZHAHⁿ', person: 'tu', modal: 'devoir', infinitive: '', tags: ['modal', 'devoir', 'context', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The same verb with no second verb after it. Here it means owe, and that is the whole of what to know for now.' },

  /* ── modal plus an imported infinitive, in situations ────────────────────
   *
   * Five rows, five imported verbs, five places a learner actually stands. */
  { id: 'fr.a2.verbes.365', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je dois acheter du pain.', en: 'I have to buy some bread.', ipa: '/ʒə dwa aʃ.te dy pɛ̃/', respell: 'zhuh DWAH ahsh-TAY dü PAⁿ', person: 'je', modal: 'devoir', infinitive: 'acheter', tags: ['modal', 'devoir', 'use', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'acheter was never taught here. It came from somewhere else and the modal did not care.' },
  { id: 'fr.a2.verbes.366', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu peux m\'aider ?', en: 'Can you help me?', ipa: '/ty pø mɛ.de/', respell: 'tü PUH meh-DAY', person: 'tu', modal: 'pouvoir', infinitive: 'aider', tags: ['modal', 'pouvoir', 'use'], drills: S, audioRef: null, version: 1, notes: 'Four words, and it works in a shop, a station and a doorway.' },
  { id: 'fr.a2.verbes.367', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous devons attendre le bus.', en: 'We have to wait for the bus.', ipa: '/nu də.vɔ̃ a.tɑ̃dʁ lə bys/', respell: 'noo duh-VOHⁿ ah-TAHⁿ-druh luh BÜS', person: 'nous', modal: 'devoir', infinitive: 'attendre', tags: ['modal', 'devoir', 'use', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'attendre is an -RE verb from a2.11 and it does not conjugate here. After a modal, nothing does.' },
  { id: 'fr.a2.verbes.368', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous voulez choisir ?', en: 'Would you like to choose?', ipa: '/vu vu.le ʃwa.ziʁ/', respell: 'voo voo-LAY shwa-ZEER', person: 'vous', modal: 'vouloir', infinitive: 'choisir', tags: ['modal', 'vouloir', 'use'], drills: S, audioRef: null, version: 1, notes: 'choisir is an -IR verb from a2.10, and it arrives here in its dictionary shape.' },

  /* ── the unseen verb ─────────────────────────────────────────────────────
   *
   * `arroser` is imported by NOBODY in this lesson. There is no card for it, it
   * is in no deck and in no term list. These two rows are the answer key for
   * the mission that hands the learner a word they have never been taught and
   * asks them for the whole sentence. */
  { id: 'fr.a2.verbes.369', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je peux arroser le jardin.', en: 'I can water the garden.', ipa: '/ʒə pø a.ʁo.ze lə ʒaʁ.dɛ̃/', respell: 'zhuh PUH ah-roh-ZAY luh zhar-DAⁿ', person: 'je', modal: 'pouvoir', infinitive: 'arroser', tags: ['modal', 'pouvoir', 'unseen', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Nobody taught you arroser. You did not need to be taught it, and that is the lesson.' },
  { id: 'fr.a2.verbes.370', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu dois arroser le jardin.', en: 'You have to water the garden.', ipa: '/ty dwa a.ʁo.ze lə ʒaʁ.dɛ̃/', respell: 'tü DWAH ah-roh-ZAY luh zhar-DAⁿ', person: 'tu', modal: 'devoir', infinitive: 'arroser', tags: ['modal', 'devoir', 'unseen', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The same unknown verb behind a different modal. Change the front of the sentence and the back holds still.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED FACTS, ASSERTED RATHER THAN PRINTED
 * ═══════════════════════════════════════════════════════════════════════ */

/** Every authored row that belongs to the eighteen-cell grid. */
export const FRAME_ROWS = MODAUX.filter((r) => r.tags?.includes('paradigm'));

/** Every authored row that pairs a modal with an infinitive. This is all of
 *  them but one: `Tu me dois de l'argent.` is the deliberate exception and it
 *  is named, so the guard fires on an accidental second one. */
export const BARE_MODAL_EXCEPTIONS = [DEVOIR_OWE_ID] as const;

/** Rows the dictée names. Every one measured LETTERS mode through the real
 *  `dicteeMode`, because WORD mode hands the learner every word pre-spelled and
 *  a spelling cannot be tested that way. */
export const DICTATION_IDS = MODAUX.filter((r) => r.drills.includes('dictation')).map((r) => r.id);

/** Respellings that DISPLAY a nasal vowel, so the superscript is load-bearing.
 *  Measured: eleven rows, eleven seen by `hasPlainNasalFor`, zero blind. */
export const VISIBLE_NASALS = MODAUX.filter((r) => (r.respell ?? '').includes('ⁿ')).map((r) => r.id);

/** Rows where the checker CANNOT see a missing superscript, so a later author
 *  removing one would ship silently. Measured empty on 2026-08-12 and asserted
 *  empty, which a2.12 was the first in the band to manage and this is the
 *  second. */
export const BLIND_NASALS: readonly string[] = [];

/* ══════════════════════════════════════════════════════════════════════════
 *  CHANGES THIS BUILD MAKES TO ROWS IT DOES NOT OWN
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = { id: string; fr: string; from: string; to: string; why: string };

/** NASAL REPAIRS, applied at display time by `repairedRespell()`.
 *
 *  Three imported rows respell a nasal vowel with a plain n. This lesson puts
 *  all three on a screen next to its own rows, which DO carry the superscript,
 *  and a learner comparing `ah-TAHN-druh` with `ah-TAHⁿ-druh` on one page is
 *  being taught that the mark means nothing. */
export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = [
  { id: 'fr.a1.transports-quotidiens.046', fr: 'attendre', from: 'ah-TAHN-druh', to: 'ah-TAHⁿ-druh', why: 'the -en- of attendre is a nasal vowel, not a vowel plus an n' },
  { id: 'fr.a2.rp-achats.019', fr: 'commander', from: 'koh-mahn-DAY', to: 'koh-mahⁿ-DAY', why: 'the -an- of commander is nasal; the second m IS pronounced and is left alone' },
  { id: 'fr.a1.routines.107', fr: 'conduire', from: 'kohn-DWEER', to: 'kohⁿ-DWEER', why: 'the con- of conduire is a nasal vowel' },
];

/** RESPELLINGS ADDED WHERE THE DATABASE HOLDS NONE.
 *
 *  The register pair is the contrast the brief requires on one screen, and
 *  NEITHER ROW CARRIES A RESPELLING. A card the learner cannot say is not a
 *  contrast, so this build adds one to each. Strictly additive: no existing
 *  value is replaced, and both were null before. */
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [
  { id: 'fr.a1.verbes-du-quotidien.035', fr: 'Je veux un café, s\'il vous plaît.', to: 'zhuh VUH uⁿ kah-FAY seel voo PLEH', why: 'the blunt half of the register pair, put on a speaking screen by this lesson' },
  { id: 'fr.a1.cafe.051', fr: 'Je voudrais un café, s\'il vous plaît.', to: 'zhuh voo-DREH uⁿ kah-FAY seel voo PLEH', why: 'the polite half, and the sentence a1.01 already puts in the learner\'s mouth' },
];

/** Rows released into a new deck that lack the drill the deck runs. */
export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string; why: string }[] = [
  { id: 'fr.a1.verbes-du-quotidien.035', fr: 'Je veux un café, s\'il vous plaît.', add: 'flashcard', why: 'carries dictation ONLY, and this lesson puts it in the register deck, which runs flashcard' },
  { id: 'fr.sons.liaisons.220', fr: 'Il faut aller plus vite.', add: 'flashcard', why: 'carries sentence and review only. This lesson releases it as the second il faut context card, and a released row with no flashcard is a hub entry that cannot be served. Found by the merge, not by reading: the sister row fr.a1.cafe.173 already has one, so the gap was invisible until the pair was checked together.' },
];

/** Imported rows with a respelling this build looked at and did NOT change,
 *  each with the reason, so the next author does not re-litigate it. */
export const NOT_REPAIRED: readonly { id: string; respell: string; why: string }[] = [
  { id: 'fr.a1.verbes-essentiels.033', respell: 'tew puh oov-REER lah fuh-NET seel tuh play', why: 'tew for tu is off house style, and style is not this build\'s repair remit; the nasals are correct' },
  { id: 'fr.a2.verbes-essentiels.041', respell: 'ell vuh duhv-NEER med-SAN', why: 'vuh already agrees with this build\'s UH decision; only the SAN is repaired' },
];

/** The nasal repairs on the two sentence imports, kept separate from the word
 *  repairs because they are partial: one token in a long respelling. */
export const RESPELL_REPAIRS_SENTENCES: readonly Repair[] = [
  { id: 'fr.a2.verbes-essentiels.041', fr: 'Elle veut devenir médecin.', from: 'med-SAN', to: 'med-SAⁿ', why: 'the -in of médecin is a nasal vowel' },
  { id: 'fr.a2.verbes-essentiels.040', fr: 'Nous devons partir avant midi.', from: 'noo duh-VOHN par-TEER ah-VAHN', to: 'noo duh-VOHⁿ par-TEER ah-VAHⁿ', why: 'devons and avant both end in a nasal vowel' },
];

/** Rows read and deliberately NOT imported, with the reason. Silence here is
 *  worth nothing to the next author; a recorded refusal is worth a probe. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.a2.verbes-essentiels.013', fr: 'Je dois étudier pour mon examen demain.', why: 'THE HOUSE CANNOT RESPELL IT. `mon examen` liaises: the vowel of mon stays nasal AND the n is pronounced into the next word, so the correct respelling needs both a superscript and a tie, and the tie is U+203F, which renders as a low underscore on a Pixel 6. `mohn` conflates the two and hasPlainNasalFor flags it however this build repairs the rest of the line. Found by the batch, not by reading.' },
  { id: 'fr.sons.voyelles.311', fr: 'Vous devez arriver au bureau avant neuf heures.', why: 'its respelling carries U+203F UNDERTIE, which renders as a low underscore on a Pixel 6, the defect already recorded against sons.10. The authored Vous devez payer. covers the cell.' },
  { id: 'fr.a1.verbes-essentiels.079', fr: 'Nous voulons réserver une table pour deux.', why: 'the nous half of the second minimal pair. Two polite forms is the ceiling and this lesson spends both on je voudrais and nous voudrions.' },
  { id: 'fr.a2.verbes-du-quotidien.073', fr: 'Nous voudrions réserver une table pour deux.', why: 'the other half of the same pair, left with it' },
  { id: 'fr.sons.verbes-essentiels.009', fr: 'savoir', why: 'a2.14 owns it outright' },
  { id: 'fr.sons.verbes-essentiels.088', fr: 'nager', why: 'je sais nager is a2.14\'s headline contrast' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  SHAPES THE GUARDS MATCH ON
 * ═══════════════════════════════════════════════════════════════════════ */

/** A conjugated modal FOLLOWED BY an infinitive. The shape the lesson owns.
 *
 *  Note `[^a-zà-ÿ]` rather than `\b`: `\b` is ASCII-only in JavaScript and a
 *  guard built on it silently never fires on an accented word. a2.02 shipped
 *  that bug and a2.12 found it. */
export const MODAL_INFINITIVE_SHAPE = /(^|[^a-zà-ÿ])(veux|veut|voulons|voulez|veulent|voudrais|voudrions|peux|peut|pouvons|pouvez|peuvent|dois|doit|devons|devez|doivent|faut)\s+(?:ne\s+|n['’]\s*)?(?:m['’]|t['’]|l['’]|se\s+|s['’])?([a-zà-ÿ]{2,}(?:er|ir|re|oir))(?![a-zà-ÿ])/i;

/** A conjugated modal with NO infinitive after it. Every match must be on the
 *  BARE_MODAL_EXCEPTIONS list or the batch refuses the row. */
export const BARE_MODAL_SHAPE = /(^|[^a-zà-ÿ])(veux|veut|voulons|voulez|veulent|peux|peut|pouvons|pouvez|peuvent|dois|doit|devons|devez|doivent)(?![a-zà-ÿ])/i;

/** `savoir` in any form, on any surface. a2.14's whole payload. */
export const SAVOIR_SHAPE = /(^|[^a-zà-ÿ])(savoir|sais|sait|savons|savez|savent|connaître|connais|connaît|connaissons|connaissez|connaissent)(?![a-zà-ÿ])/i;

/** The conditional beyond the two fixed forms. */
export const FORBIDDEN_CONDITIONAL_SHAPE = new RegExp(
  `(^|[^a-zà-ÿ])(${FORBIDDEN_CONDITIONAL.join('|')})(?![a-zà-ÿ])`, 'i');

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS THE BUILD ASSERTS
 * ═══════════════════════════════════════════════════════════════════════ */

/** Thirty authored, twenty-one imported, eleven source themes. Asserted as
 *  constants rather than printed, per the a2.12 precedent. */
export const EXPECTED_AUTHORED = 30;
export const EXPECTED_IMPORTED = 20;
export const EXPECTED_SOURCE_THEMES = 11;
/** Eighteen cells: three verbs, six persons, one frame. */
export const EXPECTED_FRAME_ROWS = 18;

/** The seed's standing nasal debt, re-measured for this build so the figure is
 *  not carried forward on trust. a2.12 measured 904 of 8787 on 2026-08-12. */
export const SEED_NASAL_DEBT = { flagged: 904, ofRows: 8787, mine: 0, measured: '2026-08-12' } as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  READING THE CORPUS
 *
 *  Every screen reads its French, its gloss and its respelling THROUGH these,
 *  so no card restates a string this file already holds and a correction here
 *  moves every surface that quotes it.
 * ═══════════════════════════════════════════════════════════════════════ */

export const BY_ID: Map<string, ModalRow> = new Map(MODAUX.map((r) => [r.id, r]));

/** A corpus row as the `Item` the database stores. `person`, `modal` and
 *  `infinitive` are authoring metadata and have no column: they exist so the
 *  guards can assert the grid rather than pattern-match the French, and they
 *  must not reach Postgres. Stripped here, in one place, rather than by each
 *  caller remembering to. */
export function toItem(r: ModalRow): Item {
  const { person, modal, infinitive, ...item } = r;
  void person; void modal; void infinitive;
  return item as Item;
}

const must = (id: string): ModalRow => {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a2.13: no authored row ${id}. A screen is quoting a row that does not exist.`);
  return r;
};

/** The French of an authored row. */
export const fr = (id: string): string => must(id).fr;
/** Its English gloss. */
export const en = (id: string): string => must(id).en;
/** Its respelling, bare. */
export const bare = (id: string): string => must(id).respell ?? '';
/** Its respelling in the brackets every card puts round one. */
export const sub = (id: string): string => `[${bare(id)}]`;

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = MODAUX.map((r) => r.id);

/** The eighteen grid ids, in reading order: three verbs down, six persons
 *  across. DERIVED from the rows rather than listed, so a row that loses its
 *  `paradigm` tag falls out of the grid, the deck and the speak deck at once. */
export const PARADIGM_IDS: string[] = FRAME_ROWS.map((r) => r.id);

/** The six ids of one verb's column, in person order. */
export const paradigmIds = (m: Modal): string[] =>
  FRAME_ROWS.filter((r) => r.modal === m).map((r) => r.id);

/** A sentence with its trailing full stop removed, for quoting one INSIDE a
 *  question. Without it `${fr(id)}. And this one?` renders as "Je veux payer..
 *  And this one?", which a2.02 shipped to the seed and which was found by
 *  mutation-testing rather than by any guard. */
export const noStop = (s: string): string => s.replace(/\.$/, '');
