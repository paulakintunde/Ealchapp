/* a1.25.l1 "La routine quotidienne": the corpus this lesson stands on.
 *
 * ── READ THIS BEFORE THE BRIEF ─────────────────────────────────────────────
 *
 * THE BRIEF WAS RIGHT ABOUT THE THING BRIEFS ARE USUALLY WRONG ABOUT, and it is
 * worth saying plainly. It claimed the unit is bound to a DEAD theme while the
 * real vocabulary sits in a NEAR-IDENTICAL one, and the probe agrees exactly:
 *
 *     theme "routine"    0 in Postgres    0 in the seed     the unit declares this
 *     theme "routines"   338 published    338 in the seed   the vocabulary is here
 *
 * A ONE-LETTER THEME NAME. Not a seed-cut artefact, which is what the last four
 * briefs were caught by. `routines` IS inside SEED_CUT.themes and the manifest
 * generator proves it: 52 rows wanted, 52 REUSED, 0 IMPORTED. That is the
 * inverse of a1.22, where all 40 wanted rows were outside the cut and every one
 * had to be carried, and it makes this merge the simple case.
 *
 * ── SO THIS LESSON AUTHORS ONE ROW ─────────────────────────────────────────
 *
 * `manger`. It is the only headword the unit's own sub names that is absent from
 * `routines`, and it is absent from `routines` alone: it is published in
 * `cuisine`, `rp-repas`, `verbes-du-quotidien` and `sons.muettes`. Those are
 * different themes, so `flashhub-coverage.test.ts`, which keys on `fr` PER
 * THEME, sees no clash.
 *
 * Everything else the lesson displays already exists and is already on a device.
 *
 * ── AND THAT MEANS a1.03 DOES NOT MOVE ─────────────────────────────────────
 *
 * `manger` is a verb: `kind: 'word'`, no `gender`. It does not join a1.03's
 * measured ending population. The 99 gendered single-word nouns in this theme
 * (`le réveil`, `la douche`, `le café`, `la nuit`, `le matin` and the rest) are
 * ALREADY PUBLISHED AND ALREADY COUNTED, so importing them moves nothing.
 *
 * a1.22 moved six of a1.03's twenty-seven printed figures and left the suite red
 * until they were re-measured. THIS BUILD MOVES NONE, and the batch holds the
 * authored gendered-noun count to zero rather than trusting that sentence.
 *
 * ── THE RESPELLING WORK, MEASURED THROUGH THE REAL CHECKER ─────────────────
 *
 * `hasPlainNasalFor` was run over all 34 named headwords on 2026-08-07. It flags
 * THREE. The brief predicted two of them and missed `s'endormir`:
 *
 *     .002  le matin      luh mah-TAN       predicted
 *     .018  rentrer       rahn-TRAY         predicted
 *     .041  s'endormir    sahn-dor-MEER     NOT in the brief, found by running it
 *
 * Five more carry NO RESPELLING AT ALL, which the checker cannot flag because
 * there is nothing to flag. Three of those five also carry no `voiceflash`, so a
 * spoken-practice section naming them would have drawn a card with no audio.
 *
 * Every replacement below was run back through the real `hasPlainNasalFor`
 * before it was written down. None is asserted from the convention alone.
 *
 * ── WHAT THE BRIEF GOT WRONG, AND IT IS SMALL ──────────────────────────────
 *
 * It lists `minuit`, `sonner`, `nettoyer la salle de bain`, `promener le chien`
 * and `nous prenons` as false-positive candidates to verify by hand. Run over
 * the taught set, the checker flags NONE of them. `mee-NWEE` passes cleanly;
 * there was no fight with the validator to have. Only `nous prenons` needed
 * anything, and only because it had no respelling at all.
 */

import type { DrillKind, Item } from '../../../ealch-v2/src/content/schema.ts';

export const THEME = 'routines';
export const LEVEL = 'a1';

/** The one authored row, at the sequence's real NEXT FREE, which the probe
 *  printed as 185 on 2026-08-07 (count 178, max 184, gaps at 121, 141, 149, 152,
 *  162 and 168 which are NOT backfilled: ids are the SRS key and a backfilled id
 *  is a card some learner already rated). */
export const AUTHORED_ITEMS: Item[] = [
  {
    id: 'fr.a1.routines.185',
    kind: 'word',
    level: 'a1',
    theme: 'routines',
    fr: 'manger',
    en: 'to eat',
    ipa: '/mɑ̃ʒe/',
    // mahⁿ-ZHAY, matching fr.sons.muettes.037, NOT fr.a1.cuisine.041's
    // `mahn-ZHAY`. The cuisine row and the rp-repas row both close the nasal
    // with a plain n and both are flagged by the real checker. This row is the
    // corrected one and a later author "fixing" it to match cuisine would be
    // introducing the defect. a1-25-routine.test.ts asserts the exact string.
    respell: 'mahⁿ-ZHAY',
    tags: ['daily', 'verbs'],
    drills: ['flashcard', 'voiceflash'],
    version: 1,
    cardType: 'vocab',
  },
];

/** Bare infinitive for a verb, articled for a noun. That is what `routines`
 *  already does across all 114 of its non-sentence rows and `manger` is a verb,
 *  so it ships bare. Exported so the batch can assert the rule rather than
 *  restating it. */
export const AUTHORED_FORM_RULE = { bareInfinitive: ['manger'], articled: [] as string[] };

export type RespellChange = {
  id: string;
  fr: string;
  from: string | null;
  to: string;
  why: string;
};

/** Rows whose respelling BREAKS THE STATED RULE. Flagged by the real
 *  `hasPlainNasalFor`, not by eye. A variant that merely differs is not a
 *  violation and is in NOT_REPAIRED. */
export const RESPELL_REPAIRS: RespellChange[] = [
  {
    id: 'fr.a1.routines.002',
    fr: 'le matin',
    from: 'luh mah-TAN',
    to: 'luh mah-TAⁿ',
    why: 'matin ends /matɛ̃/, a nasal vowel with no n sound behind it. The stored form teaches an n that '
      + 'is not there, on the single most repeated word in the lesson.',
  },
  {
    id: 'fr.a1.routines.018',
    fr: 'rentrer',
    from: 'rahn-TRAY',
    to: 'rahⁿ-TRAY',
    why: 'rentrer opens /ʁɑ̃/, nasal. Same defect, and this one is shared by fr.a1.deplacements.152 and '
      + 'fr.a2.verbes.016, which are not this build to repair.',
  },
  {
    id: 'fr.a1.routines.041',
    fr: "s'endormir",
    from: 'sahn-dor-MEER',
    to: 'sahⁿ-dor-MEER',
    why: 'THE BRIEF DID NOT PREDICT THIS ONE. Found by running hasPlainNasalFor over the taught set rather '
      + 'than by working from the brief\'s list, which is the whole reason the invariants say to run it.',
  },
];

/** Rows carrying NO respelling at all. The checker cannot flag an absence, so
 *  these were found by the manifest generator counting them. Every value below
 *  was run back through the real checker before it was written. */
export const RESPELL_ADDITIONS: RespellChange[] = [
  {
    id: 'fr.a1.routines.005',
    fr: 'je me réveille',
    from: null,
    to: 'zhuh muh ray-VEY',
    why: 'A published conjugated frame with no transcription and no voiceflash. This lesson shows it, so it '
      + 'gets both.',
  },
  {
    id: 'fr.a1.routines.006',
    fr: 'il dort',
    from: null,
    to: 'eel DOR',
    why: 'The r is pronounced and the t is not, which is the whole information in the row.',
  },
  {
    id: 'fr.a1.routines.007',
    fr: 'nous prenons',
    from: null,
    to: 'noo pruh-NOHⁿ',
    why: 'Ends /nɔ̃/, nasal, so it is written with the superscript from the start rather than added broken '
      + 'and repaired later.',
  },
  {
    id: 'fr.a1.routines.013',
    fr: 'prendre le petit déjeuner',
    from: null,
    to: 'PRAHⁿDR luh puh-tee day-zhuh-NAY',
    why: 'prendre opens on a nasal that the shared checker CANNOT SEE, because its test needs the n to end '
      + 'a token and here it is word-internal. fr.sons.verbes-essentiels.012 ships PRAHNDR and passes while '
      + 'being wrong. Written correctly here and asserted BY NAME in the test, which is the invariants\' '
      + 'stated remedy for that blind spot.',
  },
  {
    id: 'fr.a1.routines.019',
    fr: 'se brosser les dents',
    from: null,
    to: 'suh bro-SAY lay DAHⁿ',
    why: 'dents is /dɑ̃/: one nasal vowel, no n, no t, and no s. Three silent letters in a four-letter '
      + 'ending, which is sons.06 territory arriving on a word a learner uses every day.',
  },
];

/** Three rows the lesson SHOWS that carry no `voiceflash`, so nothing would play
 *  if a spoken-practice section named them. Added by the batch. */
// `add` is a DrillKind, not a string: it is written straight onto Item.drills,
// and a typo ('voiceflashh') would have produced a drill nothing can ever fire
// and no error anywhere. Typing it here is what makes the merge script's write
// type-check rather than needing a cast at the far end.
export const DRILL_ADDITIONS: { id: string; fr: string; add: DrillKind; why: string }[] = [
  {
    id: 'fr.a1.routines.005', fr: 'je me réveille', add: 'voiceflash',
    why: 'Named by s12-persons, which is a card the learner hears.',
  },
  {
    id: 'fr.a1.routines.006', fr: 'il dort', add: 'voiceflash',
    why: 'Named by s12-persons.',
  },
  {
    id: 'fr.a1.routines.007', fr: 'nous prenons', add: 'voiceflash',
    why: 'Named by s12-persons.',
  },
];

/** One named row carries U+203F, which renders as a low underscore on a Pixel 6
 *  and is already in shipped sons.10 content. Repaired because this lesson
 *  DISPLAYS the row; the other 960-odd rows in the seed carrying the glyph are a
 *  corpus migration and are not touched. */
export const IPA_REPAIRS: { id: string; from: string; to: string; why: string }[] = [
  {
    id: 'fr.a1.routines.089',
    from: 'ʒə mə lɛv a sɛ.t‿œʁ tu le ʒuʁ',
    to: 'ʒə mə lɛv a sɛ.t œʁ tu le ʒuʁ',
    why: 'U+203F between the liaison t and œʁ. The invariants say not to introduce a new one; this one is '
      + 'pre-existing and on a row this lesson puts on a screen, so it goes.',
  },
];

/* ── Rows this build FOUND BROKEN AND DID NOT FIX ──────────────────────────
 *
 * Reported rather than repaired, because retiring or rewriting a published row
 * that no section of this lesson displays is a corpus migration and not a lesson
 * build. All three are in the report.                                          */
export const DEFECTS_FOUND: { id: string; fr: string; what: string }[] = [
  {
    id: 'fr.a1.routines.009',
    fr: 'Le verbe est pronominal, le pronom change avec la personne.',
    what: 'A FRENCH GRAMMAR NOTE STORED AS A LEARNER SENTENCE, kind "sentence", in an A1 theme, and '
      + 'therefore servable as a flashcard or a dictée. It also breaks the house rule that instruction is '
      + 'English. Named in WITHDRAWN_IDS so no surface of this lesson can reach it. THE SAME DEFECT CLASS '
      + 'exists at fr.a1.maison.008 ("Le pour le masculin, la pour le féminin, l\' devant une voyelle."), '
      + 'which suggests a pass rather than an accident and is worth someone measuring across the corpus.',
  },
  {
    id: 'fr.a1.routines.027 / fr.a1.cafe.070',
    fr: 'le petit déjeuner / le petit-déjeuner',
    what: 'The same compound with and without its hyphen, in different themes, both published. Different '
      + '`fr` strings so no collision fires, and a learner who reaches both decks sees both. THIS LESSON '
      + 'DISPLAYS THE UNHYPHENATED FORM throughout, because that is what `routines` itself carries at .013 '
      + 'and .027, and consistency inside the theme the learner is in beats consistency with a theme they '
      + 'are not.',
  },
  {
    id: 'fr.a1.routines.008',
    fr: 'Je me réveille à huit heures chaque jour.',
    what: 'Disagrees with .003 and .089 on what time the corpus person gets up. Not wrong, and not teachable '
      + 'beside them. Withdrawn rather than repaired.',
  },
];

/** Rows in this theme the lesson must never reach. The batch, the merge and the
 *  test all check every production surface against this list. */
export const WITHDRAWN_IDS = [
  'fr.a1.routines.009', // the French grammar note
  'fr.a1.routines.008', // a second, disagreeing wake-up hour
  'fr.a1.routines.004', // carries a possessive, which is a1.17's
];

/* ── The boundaries, as forms rather than as prose ─────────────────────────
 *
 * Each list is checked against every production surface: card bodies, deck
 * entries, drill items, quiz stems, quiz options and quiz explanations. Scoped
 * to PRODUCTION rather than to every string in the lesson, which is the a1.09
 * precedent: a guard written over every string fires on legitimate context and
 * gets deleted.                                                                */

/** a2.22 "Les verbes pronominaux" owns the paradigm and the corpus proves the
 *  lesson cannot have it: `vous vous levez` returns 0 rows, `ils se lèvent` 0,
 *  `elles se lèvent` 0, across all 27,353 published sentences. Half a table with
 *  no evidence behind it is a lesson certifying its own gaps. */
export const PARADIGM_FORMS = [
  'vous vous levez', 'ils se lèvent', 'elles se lèvent', 'vous vous couchez',
  'ils se couchent', 'elles se couchent', 'vous vous réveillez', 'ils se réveillent',
];

/** The word for the thing, which belongs to the curriculum and not to a card. */
export const JARGON = ['pronominal', 'pronominaux', 'reflexive verb', 'reflexive pronoun', 'conjugation table'];

/** ce / cet / cette / ces is an A2 unit. `ce matin` has 263 published sentences
 *  behind it and is the sharper contrast; it is still not this lesson's. It may
 *  appear ONCE as context in the scene or the reading passage and nowhere that
 *  produces. */
export const NEIGHBOUR_DEMONSTRATIVES = ['ce matin', 'cet après-midi', 'ce soir', 'cette nuit'];

/** a1.21 owns the prepositions of place and the de-contraction. a1.12 owns the
 *  clock face. Both may be used as context and neither may be taught. */
export const NEIGHBOUR_TEACHING = ['et demie', 'moins le quart', 'et quart', 'en face de', 'à côté de'];

/** The three persons that DO have sentence evidence in `routines`, and the only
 *  three this lesson puts a reflexive pronoun in front of. */
export const ATTESTED_PERSONS = ['je me', 'tu te', 'il se', 'elle se', 'nous nous'];

/** The contrast, as data, so the lesson, the batch and the test all read one
 *  definition. Measured 2026-08-07: `le midi` returns 0 rows in 27,353 published
 *  sentences, while `à midi` returns 51 and `le matin` returns 134. */
export const TAKES_ARTICLE = [
  { id: 'fr.a1.routines.002', fr: 'le matin', en: 'the morning', pg: 134, seed: 46 },
  { id: 'fr.a1.routines.022', fr: "l'après-midi", en: 'the afternoon', pg: 21, seed: 2 },
  { id: 'fr.a1.routines.023', fr: 'le soir', en: 'the evening', pg: 92, seed: 17 },
  { id: 'fr.a1.routines.024', fr: 'la nuit', en: 'the night', pg: 84, seed: 10 },
] as const;

export const TAKES_NOTHING = [
  { id: 'fr.a1.routines.035', fr: 'midi', en: 'noon', withA: 'à midi', pgWithA: 51, pgWithLe: 0 },
  { id: 'fr.a1.routines.036', fr: 'minuit', en: 'midnight', withA: 'à minuit', pgWithA: 15, pgWithLe: 0 },
] as const;

/** The evidence line the lesson is allowed to state as a fact, because it was
 *  measured rather than assumed. Exported so no card retypes the number. */
export const LE_MIDI_ROWS_IN_CORPUS = 0;
export const CORPUS_SENTENCES_MEASURED = 27_353;

/** Where the next author starts. Re-run the probe rather than trusting it. */
export const OWNED_ID_RANGE = { from: 'fr.a1.routines.185', to: 'fr.a1.routines.185' };
export const HANDOVER_NEXT_FREE_ID = 'fr.a1.routines.186';
