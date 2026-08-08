// a1.24.l1 "Le corps", the corpus this lesson sequences.
//
// ── Read this before you believe anything about this theme ─────────────────
//
// `corps` is the largest already-populated theme any A1 lesson has been handed,
// and it is INSIDE `SEED_CUT.themes` (scripts/seed-cut.config.ts:68). Measured
// 2026-08-07 with `pnpm corpus:probe --unit a1.24 --theme "corps,sante"`:
//
//     corps    313 published in postgres    313 in the seed
//     sante      0 published                  0 in the seed
//
// For this one theme the seed is NOT a cut and its numbers can be trusted
// directly. That is unusual here and it is worth saying out loud, because the
// four briefs before a1.10 all reasoned from an absence that was an artefact of
// the cut and every one of them would have failed the build.
//
// `fr.a1.corps` holds 293 rows with NO GAPS. NEXT FREE ID is .294, which is
// where this lesson starts. `fr.a2.corps` holds a further 20 and belongs to
// a2.28 "At the Doctor's"; nothing here touches them.
//
// ── So this lesson IMPORTS. It does not author a vocabulary list. ──────────
//
// Of the 36 describing-a-person headwords probed, exactly TWO came back absent
// in every article form: `blond` and `frisé`. Everything else already exists
// somewhere. `grand`, `petit`, `jeune`, `vieux`, `mince` and `gros` all live in
// `description-personnes-objets` with no respellings, they are a1.14's and
// a1.16's, and pulling them into `corps` would put a second card for each into
// the flashcard hub. They are named in prose here and imported by nothing.
//
// ── What the probe found that changed the plan ────────────────────────────
//
// Three sentences this lesson is built on DO NOT EXIST, measured against
// Postgres rather than the seed:
//
//     "les yeux marron"     pg=0  seed=0     the invariable colour on the eyes
//     "châtain clair"       pg=0  seed=0     the invariable compound on the hair
//     "mal à l'oreille"     pg=0  seed=0     the à l' contraction
//
// Those three are the entire teaching load of acts 3 and 4 and the corpus was
// holding none of them. They are authored below, and they are the reason this
// file exists at all rather than the lesson simply naming existing ids.
//
// `les yeux` is the fourth: it is the one headword central to this lesson that
// `corps` does not own. `fr.a1.corps.014 les cheveux` sits right beside the
// hole. It is authored at .294.
//
// ── Why authoring `les yeux` cannot move a1.03's printed figures ──────────
//
// The brief requires this checked through the REAL function rather than argued.
// `endingPopulation` (ealch-v2/src/content/gender.logic.ts:100) filters on
//
//     (gender === 'm' || gender === 'f') && kind === 'word'
//     && !isPluralOnly(fr) && !isNotANoun(row) && !/\s/.test(bareNoun(fr))
//
// and `isPluralOnly` tests for a leading `les `/`des `. `les yeux` carries one,
// so it is excluded from the population before gender is ever consulted, and
// a1-03-genre.test.ts cannot see it. `blond` and `frisé` are adjectives: they
// carry no gender AND are tagged 'adjective', which `isNotANoun` reads, so they
// are excluded twice over. No row below joins that population.
//
// ── The respelling repair list, and why it is two defects not one ─────────
//
// `corps` uses two conventions for the article, split by authoring date: 47
// rows carry an UPPERCASE article (LAH TEHT, ids 001-062) and 82 carry a
// lowercase one (la BARB, ids 063 onward). All in one theme, so the flashcard
// hub shows a learner both. §3 of the invariants says the stressed syllable is
// capitalised, and an unstressed article is not the stressed syllable, so the
// lowercase form is correct and the uppercase rows are the defect.
//
// SEPARATELY: not one of the 191 respelled `corps` rows carries the superscript
// nasal. Run through the real `hasPlainNasalFor` on 2026-08-07, 50 of them are
// flagged. That is a corpus-wide condition of the whole `fr.a1.*` import wave
// (objets 46 flagged, maison 18) and not a defect this lesson introduced. The
// suite is green at 2302 tests, which tells you no test runs that checker over
// the whole bundle: it runs per lesson, over the rows the lesson names.
//
// So the rule this file follows is precise: REPAIR EVERY ROW THIS LESSON NAMES,
// leave every row it does not. 13 of the 14 core parts need one or both fixes.
// `l'oreille` needs neither and is deliberately left exactly as it is; the test
// asserts that, so a future author's "consistency fix" goes red.
//
// ONE of the repairs is invisible to the shared checker, and it is asserted BY
// NAME in a1-24-corps.test.ts. Measured, not assumed:
//
//     la main     [LAH MAN]        flagged        caught
//     la dent     [LAH DAHN]       flagged        caught
//     le ventre   [LUH VAHN-truh]  flagged        caught, because VAHN ends a
//                                                 token at the hyphen
//     la jambe    [LAH ZHAHNB]     NOT flagged    INVISIBLE: the token ends in
//                                                 B and the checker needs the
//                                                 n or m last
//
// A first draft of this file asserted the opposite pair from the shape of the
// word rather than from the checker's answer, and was wrong about both. That is
// why REPAIRS_INVISIBLE_TO_CHECKER is DERIVED by calling `hasPlainNasalFor` on
// the old form instead of being written down.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
// The REAL checker, not a copy of it. RESPELL_REPAIRS asks it which repairs it
// can see rather than inferring that from the repair's own description.
import { hasPlainNasalFor } from '../../../ealch-v2/src/content/density.logic.ts';

const C = (n: string) => `fr.a1.corps.${n}`;

/* ─── Display ──────────────────────────────────────────────────────────────
 *
 * The single source of truth for every French string, respelling, IPA and
 * gloss this lesson shows. The lesson file reads them through the helpers at
 * the foot of this file and never restates one, so a repair here reaches every
 * screen at once.                                                            */

export type Part = {
  id: string;
  /** The headword as the corpus stores it, article included. */
  fr: string;
  /** The bare noun, for the sorting drill and the article grid. */
  bare: string;
  article: 'le' | 'la' | "l'" | 'les';
  gender: 'm' | 'f';
  en: string;
  ipa: string;
  /** The REPAIRED respelling. See the header. */
  respell: string;
  /** What the row held before this lesson, when it differs. */
  wasRespell?: string;
  /** Why the repair was made, for the batch's report and the test. */
  repair?: 'article-case' | 'article-case+nasal' | 'nasal-word-internal';
  /** The `à` form this part takes inside `avoir mal à`. */
  hurt: string;
};

/** The fourteen parts this lesson teaches by name.
 *
 *  Fourteen rather than the theme's hundred. The corpus holds tibia, omoplate,
 *  rétine and pharynx; naming them would make a longer deck and a worse lesson.
 *  These are the ones an A1 learner needs in order to say where something hurts
 *  and what somebody looks like, which is what the canDo asks for. */
export const THE_FOURTEEN: Part[] = [
  {
    id: C('001'), fr: 'la tête', bare: 'tête', article: 'la', gender: 'f',
    en: 'the head', ipa: '/tɛt/',
    respell: 'lah TEHT', wasRespell: 'LAH TEHT', repair: 'article-case',
    hurt: "j'ai mal à la tête",
  },
  {
    id: C('002'), fr: 'le bras', bare: 'bras', article: 'le', gender: 'm',
    en: 'the arm', ipa: '/bʁa/',
    respell: 'luh BRAH', wasRespell: 'LUH BRAH', repair: 'article-case',
    hurt: "j'ai mal au bras",
  },
  {
    id: C('003'), fr: 'la main', bare: 'main', article: 'la', gender: 'f',
    en: 'the hand', ipa: '/mɛ̃/',
    respell: 'lah MAⁿ', wasRespell: 'LAH MAN', repair: 'article-case+nasal',
    hurt: "j'ai mal à la main",
  },
  {
    id: C('004'), fr: 'le dos', bare: 'dos', article: 'le', gender: 'm',
    en: 'the back', ipa: '/do/',
    respell: 'luh DOH', wasRespell: 'LUH DOH', repair: 'article-case',
    hurt: "j'ai mal au dos",
  },
  {
    id: C('005'), fr: 'le ventre', bare: 'ventre', article: 'le', gender: 'm',
    en: 'the stomach', ipa: '/vɑ̃tʁ/',
    respell: 'luh VAHⁿ-truh', wasRespell: 'LUH VAHN-truh', repair: 'article-case+nasal',
    hurt: "j'ai mal au ventre",
  },
  {
    id: C('006'), fr: 'le genou', bare: 'genou', article: 'le', gender: 'm',
    en: 'the knee', ipa: '/ʒənu/',
    respell: 'luh zhuh-NOO', wasRespell: 'LUH zhuh-NOO', repair: 'article-case',
    hurt: "j'ai mal au genou",
  },
  {
    id: C('014'), fr: 'les cheveux', bare: 'cheveux', article: 'les', gender: 'm',
    en: 'the hair', ipa: '/le ʃəvø/',
    respell: 'lay shuh-VUH', wasRespell: 'LAY shuh-VUH', repair: 'article-case',
    hurt: 'les cheveux never take mal',
  },
  {
    id: C('018'), fr: 'le nez', bare: 'nez', article: 'le', gender: 'm',
    en: 'the nose', ipa: '/lə ne/',
    respell: 'luh NAY', wasRespell: 'LUH NAY', repair: 'article-case',
    hurt: "j'ai mal au nez",
  },
  {
    id: C('019'), fr: 'la bouche', bare: 'bouche', article: 'la', gender: 'f',
    en: 'the mouth', ipa: '/la buʃ/',
    respell: 'lah BOOSH', wasRespell: 'LAH BOOSH', repair: 'article-case',
    hurt: "j'ai mal à la bouche",
  },
  {
    id: C('021'), fr: 'la dent', bare: 'dent', article: 'la', gender: 'f',
    en: 'the tooth', ipa: '/la dɑ̃/',
    respell: 'lah DAHⁿ', wasRespell: 'LAH DAHN', repair: 'article-case+nasal',
    hurt: "j'ai mal aux dents",
  },
  {
    // The one row in the fourteen that needs NO repair. Left exactly as it is,
    // and asserted so by name in the test.
    id: C('023'), fr: "l'oreille", bare: 'oreille', article: "l'", gender: 'f',
    en: 'the ear', ipa: '/lɔʁɛj/',
    respell: 'loh-RAY',
    hurt: "j'ai mal à l'oreille",
  },
  {
    id: C('026'), fr: 'le cou', bare: 'cou', article: 'le', gender: 'm',
    en: 'the neck', ipa: '/lə ku/',
    respell: 'luh KOO', wasRespell: 'LUH KOO', repair: 'article-case',
    hurt: "j'ai mal au cou",
  },
  {
    id: C('037'), fr: 'la jambe', bare: 'jambe', article: 'la', gender: 'f',
    en: 'the leg', ipa: '/la ʒɑ̃b/',
    respell: 'lah ZHAHⁿB', wasRespell: 'LAH ZHAHNB', repair: 'nasal-word-internal',
    hurt: "j'ai mal à la jambe",
  },
  {
    id: C('040'), fr: 'le pied', bare: 'pied', article: 'le', gender: 'm',
    en: 'the foot', ipa: '/lə pje/',
    respell: 'luh PYAY', wasRespell: 'LUH PYAY', repair: 'article-case',
    hurt: "j'ai mal au pied",
  },
];

/** The two appearance nouns this lesson names, already lowercase and already
 *  correct. Imported, not repaired, and not part of the fourteen. */
export const APPEARANCE: Part[] = [
  {
    id: C('063'), fr: 'la barbe', bare: 'barbe', article: 'la', gender: 'f',
    en: 'the beard', ipa: '/la baʁb/', respell: 'la BARB',
    hurt: 'a beard does not hurt',
  },
  {
    id: C('064'), fr: 'la moustache', bare: 'moustache', article: 'la', gender: 'f',
    en: 'the moustache', ipa: '/la mus.taʃ/', respell: 'la moos-TASH',
    hurt: 'a moustache does not hurt',
  },
];

/** Every part the lesson can look up, keyed by its bare noun. */
const BY_BARE = new Map<string, Part>(
  [...THE_FOURTEEN, ...APPEARANCE].map((p) => [p.bare, p]),
);
const BY_ID = new Map<string, Part>(
  [...THE_FOURTEEN, ...APPEARANCE].map((p) => [p.id, p]),
);

/** A part by its bare noun. Throws rather than returning undefined, so a typo
 *  in the lesson file is a build failure instead of an "undefined" on a card. */
export function part(bare: string): Part {
  const p = BY_BARE.get(bare);
  if (!p) throw new Error(`corps-corpus: no part named "${bare}"`);
  return p;
}

/** The bracketed respelling a lesson section's `respell` field wants.
 *  density.logic.ts requires the brackets (isDelimitedRespell). */
export function sub(bare: string): string {
  return `[${part(bare).respell}]`;
}

/** The slashed IPA a lesson section's `ipa` field wants. */
export function ipaOf(bare: string): string {
  return part(bare).ipa;
}

export const THE_FOURTEEN_IDS = THE_FOURTEEN.map((p) => p.id);
export const APPEARANCE_IDS = APPEARANCE.map((p) => p.id);

/** The rows whose respelling this lesson repairs, with both forms, so the
 *  batch can report the change and the test can assert it landed. */
export type RespellRepair = {
  id: string;
  fr: string;
  from: string;
  to: string;
  kind: NonNullable<Part['repair']>;
  /** Whether the shared checker can see this one. The two that it cannot are
   *  the reason the test asserts them by name as well. */
  caughtByChecker: boolean;
};

export const RESPELL_REPAIRS: RespellRepair[] = THE_FOURTEEN
  .filter((p) => p.repair && p.wasRespell)
  .map((p) => ({
    id: p.id,
    fr: p.fr,
    from: p.wasRespell!,
    to: p.respell,
    kind: p.repair!,
    // ASKED OF THE REAL CHECKER, not inferred from `kind`.
    //
    // A first draft of this file derived the flag from the repair kind and got
    // it backwards on both rows that matter. `le ventre` [LUH VAHN-truh] IS
    // caught, because VAHN ends a token at the hyphen; `la jambe` [LAH ZHAHNB]
    // is NOT, because the token ends in B and the checker needs the n or m
    // last. Deriving it from `hasPlainNasalFor` cannot drift from the thing it
    // describes, which is the rule in §5 of the invariants.
    caughtByChecker: hasPlainNasalFor(p.fr, p.wasRespell!),
  }));

/** Does this repair touch a nasal at all? Read off the repaired form rather
 *  than off the `kind` label, so the two cannot disagree. */
const isNasalRepair = (r: RespellRepair) => r.to.includes('ⁿ');

/** The NASAL repairs the shared checker is blind to.
 *
 *  Both halves of the filter matter. Without `isNasalRepair` this list also
 *  collects every pure article-case row, because `hasPlainNasalFor` returns
 *  false for a respelling that never had a nasal defect in the first place,
 *  and "the checker cannot see it" would then be true of ten rows in a
 *  meaningless way. What the test needs by name is the row that carries a real
 *  nasal defect the checker still passes: `la jambe`. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS
  .filter((r) => isNasalRepair(r) && !r.caughtByChecker)
  .map((r) => r.fr);

/** Every nasal repair, visible or not. */
export const NASAL_REPAIRS = RESPELL_REPAIRS.filter(isNasalRepair).map((r) => r.fr);

/** The row inside the fourteen that is deliberately NOT repaired. Asserted, so
 *  a future author cannot "fix" it into the uppercase convention. */
export const NOT_REPAIRED = [C('023')];

/* ─── The authored rows ────────────────────────────────────────────────────
 *
 * Six, starting at the probe's NEXT FREE ID. Every one of them was verified
 * absent in Postgres, not merely absent from the seed.                       */

export type AuthoredRow = Omit<Item, 'drills'> & {
  drills: Item['drills'];
  /** What this row is for, so the lesson can name a group rather than an id
   *  list and the test can assert coverage by role. */
  role: 'headword' | 'hair' | 'invariable' | 'compound' | 'contraction';
  /** Why it was authored rather than imported. Printed by the batch. */
  why: string;
};

const V = 1;

export const AUTHORED: AuthoredRow[] = [
  {
    id: C('294'),
    kind: 'word',
    level: 'a1',
    theme: 'corps',
    fr: 'les yeux',
    en: 'the eyes',
    ipa: '/le zjø/',
    // The liaison form. fr.a1.mots-essentiels.002 stores it as YUH without the
    // liaison and fr.a1.rp-sante.036 as lay-ZYUH with it. This lesson uses the
    // liaison form, because it is what a learner hears and because every
    // sentence in the lesson puts `les` in front of it. Written into the audio
    // desc so it is not silently normalised later.
    respell: 'lay ZYUH',
    gender: 'm',
    tags: ['body', 'face', 'senses', 'liaison'],
    drills: ['flashcard', 'voiceflash'],
    audioRef: null,
    version: V,
    cardType: 'vocab',
    role: 'headword',
    why: 'the theme teaches the eye parts and not the eyes. l\'œil (.017) is singular and does not collide.',
  },
  {
    id: C('295'),
    kind: 'word',
    level: 'a1',
    theme: 'corps',
    fr: 'blond',
    en: 'blond, fair',
    ipa: '/blɔ̃/',
    respell: 'BLOHⁿ',
    // No gender: an adjective. Tagged so isNotANoun() excludes it from a1.03's
    // ending population twice over.
    tags: ['adjective', 'hair', 'describing-people'],
    drills: ['flashcard', 'voiceflash'],
    audioRef: null,
    version: V,
    cardType: 'vocab',
    role: 'hair',
    why: 'ABSENT in every article form across the whole corpus. Probed 2026-08-07.',
  },
  {
    id: C('296'),
    kind: 'word',
    level: 'a1',
    theme: 'corps',
    fr: 'frisé',
    en: 'curly',
    ipa: '/fʁi.ze/',
    respell: 'free-ZAY',
    tags: ['adjective', 'hair', 'describing-people'],
    drills: ['flashcard', 'voiceflash'],
    audioRef: null,
    version: V,
    cardType: 'vocab',
    role: 'hair',
    why: 'ABSENT in every article form across the whole corpus. Probed 2026-08-07.',
  },
  {
    id: C('297'),
    kind: 'sentence',
    level: 'a1',
    theme: 'corps',
    fr: 'Il a les yeux marron.',
    en: 'He has brown eyes.',
    ipa: '/il a le zjø ma.ʁɔ̃/',
    tags: ['describing-people', 'invariable-colour', 'avoir-plus-article'],
    drills: ['sentence', 'flashcard', 'review', 'dictation'],
    audioRef: null,
    version: V,
    role: 'invariable',
    why: '"les yeux marron" returns pg=0. The single most common brown-eye sentence in French and the corpus did not hold it.',
  },
  {
    id: C('298'),
    kind: 'sentence',
    level: 'a1',
    theme: 'corps',
    fr: 'Elle a les cheveux châtain clair.',
    en: 'She has light brown hair.',
    ipa: '/ɛl a le ʃə.vø ʃa.tɛ̃ klɛʁ/',
    tags: ['describing-people', 'invariable-colour', 'compound-colour'],
    drills: ['sentence', 'flashcard', 'review', 'dictation'],
    audioRef: null,
    version: V,
    role: 'compound',
    why: '"châtain clair" returns pg=0. a1.13 taught the compound rule; this is the one place an A1 learner meets it on a person.',
  },
  {
    id: C('299'),
    kind: 'sentence',
    level: 'a1',
    theme: 'corps',
    fr: "J'ai mal à l'oreille.",
    en: 'My ear hurts.',
    ipa: '/ʒe mal a lɔ.ʁɛj/',
    tags: ['avoir-mal-a', 'contractions', 'elision'],
    drills: ['sentence', 'flashcard', 'review', 'dictation'],
    audioRef: null,
    version: V,
    role: 'contraction',
    why: '"mal à l\'oreille" returns pg=0. The fourth contraction had no evidence at all; corps.207 only has the plural aux oreilles.',
  },
];

export const AUTHORED_IDS = AUTHORED.map((a) => a.id);

export const authoredIds = (role: AuthoredRow['role']): string[] =>
  AUTHORED.filter((a) => a.role === role).map((a) => a.id);

/** An authored row as a plain corpus Item, with the authoring metadata off. */
export function toItem(a: AuthoredRow): Item {
  const { role: _role, why: _why, ...item } = a;
  return item;
}

/** The id range this lesson owns, and where the next author starts. */
export const OWNED_ID_RANGE = { from: C('294'), to: C('299') };
export const HANDOVER_NEXT_FREE_ID = C('300');

/* ─── The imported sentences ───────────────────────────────────────────────
 *
 * Already published, already correct, and shown rather than rewritten. Grouped
 * by the job they do so the lesson names a GROUP.                            */

/** The `avoir mal à` frame, one row per contraction the corpus already had. */
export const HURT_IDS = [
  C('007'), // J'ai mal à la tête.          à la
  C('008'), // Elle a mal au dos.           au
  C('103'), // J'ai mal aux dents depuis hier soir.   aux
  C('105'), // Mon frère a mal au dos.      au, third person
];

/** The `avoir` + definite article + description frame. */
export const LOOK_IDS = [
  C('104'), // J'ai les yeux bleus.
  C('106'), // Elle a les cheveux longs.
];

/** Named on the reference sheet as the neighbouring vocabulary a learner will
 *  meet, and drilled by nothing. a2.28 owns the consultation. */
export const SYMPTOM_CONTEXT_IDS = [
  C('122'), // la fièvre
  C('129'), // la douleur
];

/** `l'œil`, shown once beside `les yeux` so the singular/plural pair is on one
 *  screen, and never drilled on its own. */
export const SINGULAR_EYE_ID = C('017');

export const IMPORTED_IDS = [
  ...THE_FOURTEEN_IDS,
  ...APPEARANCE_IDS,
  ...HURT_IDS,
  ...LOOK_IDS,
  ...SYMPTOM_CONTEXT_IDS,
  SINGULAR_EYE_ID,
];

/* ─── What this lesson must not teach ──────────────────────────────────────
 *
 * Asserted against PRODUCTION SURFACES in a1-24-corps.test.ts (decks, vocab,
 * drills, quiz), never against every string. A guard written over every string
 * fires on the reading passage's legitimate context and gets deleted by the
 * next author, which is worse than not writing it.                           */

/** a2.28 "At the Doctor's" declares `corps` and `sante` exactly as a1.24 does.
 *  Its vocabulary may appear as reading context and may not be taught. */
export const A2_CLINIC_FORMS = [
  'ordonnance', 'consultation', 'traitement', 'symptôme', 'pharmacien',
  'salle d\'attente', 'rendez-vous', 'stéthoscope', 'radiographie',
];

/** a1.25 "Daily Routine" owns the reflexives. corps.209 and corps.212 are
 *  exactly this shape and are reading context only. */
export const A1_25_REFLEXIVE_FORMS = [
  'se laver', 'se brosser', 'je me lave', 'elle se brosse', 'se coucher',
];

/** a1.14 and a1.16 own these. Named in prose, imported by nothing. */
export const NEIGHBOUR_ADJECTIVES = [
  'grand', 'petit', 'jeune', 'vieux', 'mince', 'gros',
];

/** The possessive is the WRONG answer in this lesson and is taught as such.
 *  a1.17 taught that a possessive excludes the article; this is where French
 *  takes the slot back. These forms appear in commonErrors and as quiz
 *  distractors and nowhere else as correct. */
export const POSSESSIVE_ERROR_FORMS = [
  'mon dos fait mal',
  'ses yeux sont bleus',
  'ma tête fait mal',
];

/** `marron` must never carry an ending anywhere in this lesson. The single
 *  highest-value assertion in the test. */
export const FORBIDDEN_FORMS = [
  'marrons',
  'marronne',
  'châtains',
  'châtain clairs',
];

/** Colours on `les yeux` and `les cheveux` all take the plural -s, because both
 *  nouns are masculine plural. Asserted by name so a future author cannot
 *  "fix" one to the singular. */
export const PLURAL_COLOUR_FORMS = ['bleus', 'verts', 'noirs', 'blonds', 'longs'];

/** The colours that refuse it, for the same reason a1.13 gave. */
export const INVARIABLE_COLOUR_FORMS = ['marron', 'châtain clair'];
