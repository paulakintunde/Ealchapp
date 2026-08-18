// a2.28.l1 « Chez le médecin » — the corpus, the constants and the decisions.
// Trail seq 27, the FOURTH unit of the A2 situations band (seq 24 to 31).
//
// ════════════════════════════════════════════════════════════════════════════
//  THE HEADLINE. THE PROMPT ASKED FOR THIS FINDING BY NAME AND IT IS THE
//  LARGEST ONE IN THE BUILD.
// ════════════════════════════════════════════════════════════════════════════
//
// The prompt says: "If the probe shows Postgres already holds a health corpus
// the seed does not show, your corpus plan collapses from ~75 authored rows to
// ~25 authored rows plus a long import list. That is a good outcome and you
// should report it as the headline."
//
// **That is what happened.** Measured against Postgres 2026-08-16:
//
//   symptomes           334 published /   0 in seed      193 at a2
//   systeme-de-sante    583 published /   0 in seed      232 at a2
//   soins               322 published /   0 in seed        0 at a2
//   bien-etre           319 published /   1 in seed        0 at a2
//   corps               319 published / 319 in seed       20 at a2
//
// **556 published a2 health rows, and the seed showed 20 of them.** The design
// doc measured on the seed, concluded the health vocabulary did not exist, and
// planned 75 to 90 authored rows. The symptom lexicon is FINISHED:
//
//   nouns      la fièvre .001, la toux .002, un rhume .003, la douleur .013,
//              la grippe .014, la fatigue .016, le vertige .017, la nausée .018,
//              la blessure .019, l'allergie .020, le frisson .021, la migraine .022,
//              la brûlure .028, la coupure .029, l'entorse .031, la piqûre .032,
//              le médicament .069, le sirop .070, les gouttes .071,
//              le comprimé .105, la pommade .106, le pansement .111
//   verbs      éternuer .033, vomir .034, saigner .035, tousser .036,
//              transpirer .061, respirer .062, guérir .064, s'évanouir .098
//   services   la pharmacie .072, l'infirmier .073, les urgences .074,
//              le cabinet médical .075, le pharmacien .108, l'hôpital .109,
//              la salle d'attente .110
//   sentences  roughly 110 of them, .038 to .193
//
// **Four of the prompt's own "verify each against the probe" imports are wrong
// because the row is already in `symptomes` rather than where the prompt looked.**
// `le comprimé` is `fr.a2.symptomes.105`, not absent. The token probe returned
// `le comprimé  pg=0` because `--tokens` searches SENTENCES and .105 is a word
// headword. That is the same probe-shape artifact that produced the design's
// absence claims, and it is the third time this band has met it.
//
// ════════════════════════════════════════════════════════════════════════════
//  WHAT IS GENUINELY MISSING, AND IT IS EXACTLY THE BAND'S MANDATE
// ════════════════════════════════════════════════════════════════════════════
//
// **The doctor does not exist.** Of 193 published a2 `symptomes` rows, TEN are
// second-person or interrogative and every one of them is `tu`:
//
//   .005  Tu as de la fièvre ?              .154  Tu as pris ton médicament ce matin ?
//   .125  Tu as l'air fatigué…              .162  Tu as encore mal au ventre aujourd'hui ?
//   .136  Tu as encore mal au genou… ?      .183  Tu as pris ta température avant de venir ?
//   .192  Tu as encore la nausée ce matin ?
//
// That is a friend or a parent, not a clinician. **Zero a2 rows are a doctor
// addressing a patient as `vous`.** Every `vous` row in the health themes is b1
// or b2 and carries a subjunctive or a conditional this learner has not met.
//
// **And the dosage does not exist at a2.** Measured directly:
//
//   toutes les trois heures    0 rows, ANY level
//   ça vous lance              0 rows
//   vous êtes allergique       0 rows
//   trois fois par jour        3 rows, all b1 or higher
//   à jeun                     2 rows, both b1/b2
//   avant les repas            2 rows, a1 rp-sante and b1
//
// So this unit authors ~34 rows instead of ~85, and almost all of them are the
// other party's speech. The voice ratio is not a constraint here, it is the
// whole content: 24 of 34 authored rows are the doctor or the pharmacist.
//
// ════════════════════════════════════════════════════════════════════════════
//
// WHERE ROWS GO. `symptomes` from .194, and `corps` from .021 (kept far below
// the 294 guard that `a1-24-corps.test.ts:366` pins at exactly six rows).
// NOT ONE ROW INTO `sante`: it is a phantom with no themeMeta entry and
// `a1-24-corps.test.ts` pins it at zero GLOBALLY, so the first row authored
// there turns another unit's test red. Nobody edits that test.
import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const UNIT = {
  id: 'a2.28',
  seq: 27,
  level: 'a2' as const,
  track: 'a2',
  title: "At the Doctor's",
  sub: 'Chez le médecin',
  canDo: 'Can describe a symptom, say what hurts and understand simple medical advice',
  prereqUnitIds: ['a1.24'],
} as const;

export const LESSON_ID = 'a2.28.l1';

export const THEME = 'symptomes';
export const BODY_THEME = 'corps';

/** Measured 2026-08-16, before this build wrote anything. */
export const THEME_ROWS_BEFORE = 334;   // published, all levels
export const THEME_A2_BEFORE = 193;     // published, a2 slice
export const THEME_SEED_BEFORE = 0;     // present in seed.json v50
export const BODY_A2_BEFORE = 20;

/** THE ID BLOCKS. Scoped to the BLOCK, never to the theme prefix. */
export const ID_FIRST = 194;
export const ID_LAST = 227;
export const BODY_FIRST = 21;
export const BODY_LAST = 24;

/** `a1-24-corps.test.ts:366` counts every `corps` row with a numeric tail >= 294
 *  and expects exactly six. `theme` is band-agnostic, so an `fr.a2.corps.294`
 *  would count. Verified: currently exactly six. This build's block is .021-.024. */
export const CORPS_GUARD_FLOOR = 294;
export const CORPS_GUARD_EXPECTED = 6;

export const S = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;
export const B = (n: number) => `fr.a2.${BODY_THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §A. THE OWNS, AND THE REFRAME
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: runnable mid-sentence, predicts the error, actionable while
 *  speaking. Carried verbatim across seven sections and the roundup. */
export const REFRAME = 'English gives you one shape for a symptom. French picks one of three, and the choice is made before the word arrives.';

/** The three constructions. Construction 1 is a1.24's and is used as the ANCHOR
 *  that makes 2 and 3 visible. It is never re-taught and the contraction is
 *  never explained. */
export const CONSTRUCTIONS = [
  { id: 'mal', frame: 'avoir mal à + body part', example: "j'ai mal à la tête", owner: 'a1.24' },
  { id: 'noun', frame: 'avoir + symptom noun', example: "j'ai de la fièvre", owner: 'a2.28' },
  { id: 'verb', frame: 'bare verb', example: 'je tousse', owner: 'a2.28' },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. a2.07's FROZEN REPAIR BLOCK. This unit authors ZERO repair rows.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REPAIR_UNIT = 'a2.07';
export const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
] as const;

/** Quoted so the fold guard can prove this unit re-authored none of them. */
export const REPAIR_FR = [
  'Pardon ?',
  'Vous pouvez répéter, s\'il vous plaît ?',
  'Plus lentement, s\'il vous plaît.',
  'Je n\'ai pas bien compris.',
  'Qu\'est-ce que ça veut dire ?',
  'Vous pouvez me l\'écrire, s\'il vous plaît ?',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE UNITS THIS ONE QUOTES RATHER THAN RETEACHES
 * ══════════════════════════════════════════════════════════════════════════ */

export const BODY_UNIT = 'a1.24';        // avoir mal à AND the à contraction, in 5 sections
export const DEPUIS_UNIT = 'a2.18';      // depuis and the tense it wants, 280 occurrences
export const REFLEXIVE_UNIT = 'a2.22';   // reflexive past, with a2.23
export const REGISTER_UNIT = 'a2.29';    // the politeness ladder, once, for all eight
export const MODAL_UNIT = 'a2.13';       // vouloir: je veux against je voudrais
export const JOBS_UNIT = 'a2.30';        // job-title feminines, once, for all eight

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. WHAT IS IMPORTED. Every id is verified published before a row is written.
 *      This list is LONG on purpose: it is the headline finding made operational.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  /** The three constructions, anchored in published rows. Construction 1 is
   *  a1.24's and is imported rather than restated. */
  constructions: [
    'fr.a2.symptomes.023',  // avoir mal à la tête
    'fr.a2.symptomes.024',  // avoir mal au ventre
    'fr.a2.symptomes.001',  // la fièvre
    'fr.a2.symptomes.002',  // la toux
    'fr.a2.symptomes.003',  // un rhume
    'fr.a2.symptomes.036',  // tousser
    'fr.a2.symptomes.034',  // vomir
    'fr.a2.symptomes.035',  // saigner
    'fr.a2.symptomes.033',  // éternuer
  ],
  /** Symptom nouns for the sort drill. Every one already published. */
  symptomNouns: [
    'fr.a2.symptomes.013',  // la douleur
    'fr.a2.symptomes.014',  // la grippe
    'fr.a2.symptomes.016',  // la fatigue
    'fr.a2.symptomes.017',  // le vertige
    'fr.a2.symptomes.018',  // la nausée
    'fr.a2.symptomes.020',  // l'allergie
    'fr.a2.symptomes.021',  // le frisson
    'fr.a2.symptomes.022',  // la migraine
  ],
  /** Symptom verbs. Four of these are the generation test in s05-sort: the
   *  learner meets them in the drill without a deck having taught them. */
  symptomVerbs: [
    'fr.a2.symptomes.061',  // transpirer
    'fr.a2.symptomes.062',  // respirer
    'fr.a2.symptomes.098',  // s'évanouir
    'fr.a2.symptomes.102',  // se moucher
  ],
  /** The service and pharmacy layer. NOT ONE of these is authored here, and the
   *  prompt's import list named several of them as things to author. */
  service: [
    'fr.a2.symptomes.069',  // le médicament
    'fr.a2.symptomes.070',  // le sirop
    'fr.a2.symptomes.071',  // les gouttes
    'fr.a2.symptomes.072',  // la pharmacie
    'fr.a2.symptomes.105',  // le comprimé   <- the prompt's probe called this absent
    'fr.a2.symptomes.106',  // la pommade
    'fr.a2.symptomes.108',  // le pharmacien
    'fr.a2.symptomes.111',  // le pansement
    'fr.a2.symptomes.074',  // les urgences
    'fr.a2.symptomes.075',  // le cabinet médical
  ],
  /** Learner-voice symptom reports, already published. The learner's half of
   *  this conversation was finished before the build started. */
  learnerReports: [
    'fr.a2.symptomes.039',  // J'ai de la fièvre et je tousse beaucoup.
    'fr.a2.symptomes.006',  // Je tousse depuis trois jours.
    'fr.a2.symptomes.042',  // J'ai mal à la gorge et je n'ai pas faim.
    'fr.a2.symptomes.045',  // Mon nez coule et j'ai mal à la tête.
    'fr.a2.symptomes.158',  // J'ai un peu de fièvre depuis hier soir.
    'fr.a2.symptomes.163',  // J'ai des frissons depuis ce matin.
    'fr.a2.symptomes.144',  // J'ai le nez bouché et je respire mal la nuit.
    'fr.a2.symptomes.120',  // J'ai mal aux dents depuis hier soir.
  ],
  /** `corps` at a2, already published. Reflexive injury is a2.22/a2.23's and is
   *  imported, never taught. */
  body: [
    'fr.a2.corps.001',  // Elle s'est cassé le bras en tombant du vélo.
    'fr.a2.corps.005',  // L'épaule me fait mal depuis hier.
    'fr.a2.corps.006',  // Elle s'est fait mal au genou en courant.
    'fr.a2.corps.016',  // Elle avait très mal à la gorge et elle est allée voir le médecin.
    'fr.a2.corps.018',  // Il s'est foulé la cheville pendant le match de football.
  ],
  /** The appointment and the clinic. `systeme-de-sante` holds 232 a2 rows and
   *  the seed showed none of them. */
  clinic: [
    'fr.a2.systeme-de-sante.015',  // la clinique sans rendez-vous
    'fr.a2.systeme-de-sante.064',  // prendre rendez-vous
    'fr.a2.systeme-de-sante.117',  // J'ai un rendez-vous chez le médecin cet après-midi.
  ],
  /** The professions. a2.30 owns job-title feminisation and NONE is minted here. */
  people: [
    'fr.a1.metiers.001',  // un médecin
    'fr.a1.metiers.002',  // un infirmier
    'fr.a1.metiers.020',  // un pharmacien
    'fr.a1.metiers.021',  // un dentiste
  ],
  /** a2.07's block, cited by id, authored by nobody here. */
  repair: [...REPAIR_IDS],
} as const;

/** SIXTEEN IMPORTED IDS THAT CANNOT BE RELEASED AS CARDS, AND THE REASON IS
 *  THE SAME FINDING AS THE PRACTICE SECTION'S.
 *
 *  A `deckTranche` release only produces a card if the row carries the
 *  `flashcard` drill. These sixteen do not: they carry `dictation`, or
 *  `sentence/review`, or `voiceflash/review`, and a tranche naming them would
 *  release nothing at all. The guard caught every one of them.
 *
 *  **The published health corpus is complete and thinly drilled.** It was
 *  authored for reading and dictation rather than for the SRS, which is why a
 *  unit that imports heavily from it releases fewer cards than its import list
 *  suggests. This build does not widen another lesson's drill arrays to suit
 *  itself, which is the line a2.26 drew over three rows and a2.27 over two.
 *
 *  They stay NAMED in `IMPORTED` as evidence of what exists, and the sections
 *  that quote them still quote them. They are simply not released as cards. */
export const NOT_RELEASABLE = new Set<string>([
  'fr.a2.symptomes.098', 'fr.a2.symptomes.102',
  'fr.a2.symptomes.105', 'fr.a2.symptomes.106', 'fr.a2.symptomes.108', 'fr.a2.symptomes.111',
  'fr.a2.symptomes.039', 'fr.a2.symptomes.158', 'fr.a2.symptomes.163',
  'fr.a2.symptomes.144', 'fr.a2.symptomes.120',
  'fr.a2.corps.005', 'fr.a2.corps.016', 'fr.a2.corps.018',
  'fr.a2.systeme-de-sante.064', 'fr.a2.systeme-de-sante.117',
]);

/** Named as PRIOR EXPOSURE and left exactly where they are, the pattern a2.07
 *  set for the six generic repair rows it found published. Not cited.
 *
 *  `fr.a2.symptomes.011` is the interesting one: it is a RULE row, in French,
 *  stating a1.24's rule ("Pour dire qu'une partie du corps fait mal : avoir mal
 *  à + article défini"). This unit does NOT cite it, because citing it would be
 *  re-teaching the contraction through the corpus. */
export const PRIOR_EXPOSURE = [
  'fr.a2.symptomes.011',  // the avoir-mal-à rule, stated as a corpus row
  'fr.a2.symptomes.012',  // J'ai la crève.  (familier)
  'fr.a1.corps.252',      // Le pharmacien vérifie l'ordonnance avant de donner les médicaments.
  'fr.a1.rp-sante.077',   // Prenez ce médicament avant les repas.
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. BANS, each enforced by a guard rather than by intention
 * ══════════════════════════════════════════════════════════════════════════ */

/** a1.24 owns `avoir mal à` AND the article contraction across five sections,
 *  and two of its tests pin it. Nothing here may explain the contraction. */
export const CONTRACTION_SHAPES: readonly RegExp[] = [
  /\bà\s*\+\s*le\b/i, /\bau\s*=\s*à\s*le\b/i, /\baux\s*=\s*à\s*les\b/i,
  /\bcontraction\b/i, /\bcontracts?\s+(?:to|into)\b/i,
  /\bà\s+la\s+becomes\b/i, /\bau,?\s+à la,?\s+aux\b/i,
];

/** a2.18 owns `depuis` and the tense it wants, with 280 occurrences and a
 *  dedicated trapDrill. The doctor asks `depuis quand ?` constantly; nothing
 *  here may make its TENSE the difficulty. */
export const DEPUIS_TENSE_SHAPES: readonly RegExp[] = [
  /depuis[^.?!]{0,40}\bpresent tense\b/i,
  /\bpresent tense\b[^.?!]{0,40}depuis/i,
  /depuis[^.?!]{0,40}\bnot the past\b/i,
  /\bEnglish hands you a past tense\b/i,
];

/** Collation C8: no unit in this band may build a teaching move on `y` or `en`.
 *  Written against the PRONOUN's shapes; the preposition `en` is legal. */
export const PRONOUN_YEN_SHAPES: readonly RegExp[] = [
  /\bj'y\b/i, /\bon y\b/i, /\bvous y\b/i, /\bnous y\b/i, /\bil y va\b/i,
  /\bd'y aller\b/i, /\ballons-y\b/i, /\by aller\b/i,
  /\bil y en a\b/i, /\bj'en ai\b/i, /\bvous en prenez\b/i,
];

/** a2.30 owns job-title feminisation, band-wide. None is minted here. */
export const FORBIDDEN_FEMININES = ['médecine', 'docteure', 'pharmacienne', 'infirmière praticienne', 'médecin traitante'] as const;

/** Collation C3. At most one card, recognition only, nothing scored. */
export const QUEBEC_FORMS = ['RAMQ', 'carte soleil', 'CLSC', 'Info-Santé'] as const;

/** DEFENSIVE AUTHORING, PERMANENT (collation 1.13 rule 5). No invented or real
 *  drug name may appear anywhere in this lesson, and no dosage that is
 *  medically wrong even as an example. Generic instructions only. */
export const FORBIDDEN_DRUGS = [
  'paracétamol', 'paracetamol', 'ibuprofène', 'ibuprofen', 'aspirine', 'aspirin',
  'amoxicilline', 'doliprane', 'advil', 'tylenol', 'codéine', 'morphine',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE ROWS. ~34, and 24 of them are the other party.
 * ══════════════════════════════════════════════════════════════════════════ */

type Bucket = 'doctor-question' | 'doctor-move' | 'dosage' | 'counter' | 'describe-around' | 'body-report';
/** Whose mouth the row comes out of. Collation §1.5's 40% floor is measured on
 *  this and both the apply script and the test assert it. */
type Voice = 'doctor' | 'pharmacist' | 'learner';

export type Row = Item & { bucket: Bucket; voice: Voice };

const TAGS = ['a2', 'sante-situation', 'situation'];

const PV: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const PD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'review'];
const SV: Item['drills'] = ['flashcard', 'voiceflash', 'sentence', 'review'];
const SD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'review'];

const row = (
  id: string, theme: string, fr: string, en: string, ipa: string, respell: string,
  bucket: Bucket, voice: Voice, kind: Item['kind'], drills: Item['drills'],
  skill: string, register: string, notes: string,
): Row => ({
  id, kind, level: 'a2', theme, fr, en, ipa, respell,
  tags: [...TAGS, bucket, voice], drills, audioRef: null, version: 1, notes,
  skill, register,
  bucket, voice,
} as Row);

type Rest = [string, string, string, string, Bucket, Voice, Item['kind'], Item['drills'], string, string, string];
const R = (n: number, ...a: Rest): Row => row(S(n), THEME, ...a);
const RB = (n: number, ...a: Rest): Row => row(B(n), BODY_THEME, ...a);

/* ──────────────────────────────────────────────────────────────────────────
 *  THE DOCTOR'S QUESTIONS · .194 to .207 — fourteen rows, and ZERO existed.
 *
 *  Every published second-person health row at a2 is `tu`, which is a friend or
 *  a parent. A clinician uses `vous` and asks things the learner did not
 *  prepare for. That gap is this unit's half of the band's mandate.
 *
 *  `depuis quand` appears because a doctor cannot not say it. a2.18 owns it and
 *  the tense it wants; nothing here makes that tense the difficulty.
 * ────────────────────────────────────────────────────────────────────────── */

const DOCTOR_ROWS: readonly Row[] = [
  R(194, 'Qu\'est-ce qui vous amène ?', 'What brings you in?', '/kɛs ki vu.za.mɛn/', 'kess kee voo-zah-MEN',
    'doctor-question', 'doctor', 'phrase', PD, 'CO', 'courant',
    'The consultation opens with this and nothing else. It is not a question about travel and a learner who parses amener loses the whole turn.'),
  R(195, 'Où avez-vous mal exactement ?', 'Where exactly does it hurt?', '/u a.ve vu mal ɛɡ.zak.tə.mɑ̃/', 'oo ah-vay VOO mal eg-zakt-MAHⁿ',
    'doctor-question', 'doctor', 'sentence', SD, 'CO', 'courant',
    `The question that wants construction 1. ${Cap(unitRef('a1.24'))} taught the answer shape; nobody had authored the question that asks for it.`),
  R(196, 'Ça vous lance ou ça vous brûle ?', 'Is it a shooting pain or a burning one?', '/sa vu lɑ̃s u sa vu bʁyl/', 'sa voo LAHⁿSS oo sa voo BRÜL',
    'doctor-question', 'doctor', 'sentence', SV, 'CO', 'courant',
    'Zero rows in the corpus used lancer for pain. This is the question that kills the rehearsed opening, and it is the scene\'s whole point.'),
  R(197, 'Vous avez de la fièvre ?', 'Do you have a fever?', '/vu.za.ve də la fjɛvʁ/', 'voo-zah-VAY duh lah FYEVR',
    'doctor-question', 'doctor', 'sentence', SD, 'CO', 'courant',
    'The vous version of fr.a2.symptomes.005, which is tu. The corpus had the friend and not the clinician.'),
  R(198, 'Vous êtes allergique à quelque chose ?', 'Are you allergic to anything?', '/vu.zɛt a.lɛʁ.ʒik a kɛl.kə ʃoz/', 'voo-zet ah-ler-ZHEEK ah kel-kuh SHOHZ',
    'doctor-question', 'doctor', 'sentence', SV, 'CO', 'courant',
    'Zero rows anywhere. It is asked at every consultation and at every pharmacy counter, and getting it wrong is the one answer that matters medically.'),
  R(199, 'Vous prenez d\'autres médicaments ?', 'Are you taking any other medication?', '/vu pʁə.ne dotʁ me.di.ka.mɑ̃/', 'voo pruh-NAY dohtr may-dee-ka-MAHⁿ',
    'doctor-question', 'doctor', 'sentence', SV, 'CO', 'courant',
    'Le médicament is published at .069 as a headword. The question that uses it was not.'),
  R(200, 'Ça fait mal quand j\'appuie ?', 'Does it hurt when I press?', '/sa fɛ mal kɑ̃ ʒa.pɥi/', 'sa feh MAL kahⁿ zha-PWEE',
    'doctor-question', 'doctor', 'sentence', SV, 'CO', 'courant',
    'Asked while the doctor is already pressing, so the learner answers under a second kind of pressure. Short answers only.'),
  R(201, 'Vous avez mal la nuit aussi ?', 'Does it hurt at night too?', '/vu.za.ve mal la nɥi o.si/', 'voo-zah-VAY mal lah NWEE oh-SEE',
    'doctor-question', 'doctor', 'sentence', SV, 'CO', 'courant',
    `A yes-or-no question that sounds like the previous one and wants a different fact. ${Cap(unitRef('a1.19'))} owns the question form.`),
  R(202, 'Montrez-moi où ça fait mal.', 'Show me where it hurts.', '/mɔ̃.tʁe mwa u sa fɛ mal/', 'mohⁿ-tray MWAH oo sa feh MAL',
    'doctor-move', 'doctor', 'sentence', SD, 'CO', 'courant',
    'An instruction rather than a question, and the one turn where the learner does not have to produce French at all.'),
  R(203, 'Je vais vous examiner.', 'I am going to examine you.', '/ʒə vɛ vu.zɛɡ.za.mi.ne/', 'zhuh veh voo-zeg-za-mee-NAY',
    'doctor-move', 'doctor', 'sentence', SV, 'CO', 'courant',
    `The futur proche is ${unitRef('a2.01')}\'s and is used here, not taught. It signals the talking part is over.`),
  R(204, 'Ce n\'est pas grave.', 'It is nothing serious.', '/sə nɛ pa ɡʁav/', 'suh neh pah GRAHV',
    'doctor-move', 'doctor', 'phrase', PD, 'CO', 'courant',
    'The sentence a patient is listening for, and four words long. Reassurance in French is short and can be missed entirely.'),
  R(205, 'Je vous prescris un traitement.', 'I am prescribing you a course of treatment.', '/ʒə vu pʁɛs.kʁi œ̃ tʁɛt.mɑ̃/', 'zhuh voo press-KREE uhⁿ tret-MAHⁿ',
    'doctor-move', 'doctor', 'sentence', SV, 'CO', 'courant',
    'Un traitement rather than a drug name. No drug is named anywhere in this lesson, at any dose, and that rule is permanent.'),
  R(206, 'Revenez me voir dans une semaine.', 'Come back and see me in a week.', '/ʁə.və.ne mə vwaʁ dɑ̃.zyn sə.mɛn/', 'ruh-vuh-NAY muh VWAR dahⁿ-zün suh-MEN',
    'doctor-move', 'doctor', 'sentence', SV, 'CO', 'courant',
    'The close, and it carries a condition the learner must catch: a week, not a day.'),
  R(207, 'Reposez-vous et buvez beaucoup d\'eau.', 'Rest and drink plenty of water.', '/ʁə.po.ze vu e by.ve bo.ku do/', 'ruh-poh-zay VOO ay bü-VAY boh-koo DOH',
    'doctor-move', 'doctor', 'sentence', SV, 'CO', 'courant',
    'Two instructions in one breath, which is how advice actually arrives. Se reposer is published at .081 and boire beaucoup d\'eau at .117.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  THE DOSAGE · .208 to .217 — ten rows, and this is the HARM BAR.
 *
 *  Measured: `toutes les trois heures` is 0 rows at ANY level. `trois fois par
 *  jour` is 3 rows, all b1 or higher. `à jeun` is 2 rows, both b1/b2. So the
 *  entire dosage register sits above this learner's level or does not exist.
 *
 *  DEFENSIVE AUTHORING, PERMANENT: no drug is named, no dose is medically wrong
 *  even as an example, and every instruction is generic. The guard is a word
 *  list rather than a sentence in a report, because a sentence cannot fail.
 *
 *  THE FOLD DECIDED THE PAIRS. `trois fois par jour` folds to
 *  `troisfoisparjour` and `toutes les trois heures` to `touteslestroisheures`.
 *  Far apart, so the contrast is safe to score. A numeral written two ways
 *  would NOT be, and none is authored.
 * ────────────────────────────────────────────────────────────────────────── */

const DOSAGE_ROWS: readonly Row[] = [
  R(208, 'Un comprimé matin et soir.', 'One tablet morning and evening.', '/œ̃ kɔ̃.pʁi.me ma.tɛ̃ e swaʁ/', 'uhⁿ kohⁿ-pree-MAY ma-TEHⁿ ay SWAR',
    'dosage', 'pharmacist', 'sentence', SD, 'CO', 'courant',
    'The generic instruction the disclaimer card also uses. Le comprimé is published at .105 and the instruction that uses it was not.'),
  R(209, 'Trois fois par jour, avant les repas.', 'Three times a day, before meals.', '/tʁwa fwa paʁ ʒuʁ a.vɑ̃ le ʁə.pa/', 'trwah fwah par ZHOOR ah-vahⁿ lay ruh-PAH',
    'dosage', 'pharmacist', 'sentence', SD, 'CO', 'courant',
    'Three rows in the whole corpus carry this and all three are b1 or higher. Half of the harm-bar pair.'),
  R(210, 'Toutes les trois heures, pas plus.', 'Every three hours, no more than that.', '/tut le tʁwa.zœʁ pa ply/', 'toot lay trwah-ZEUR pah PLÜ',
    'dosage', 'pharmacist', 'sentence', SD, 'CO', 'courant',
    'ZERO rows in the corpus, at any level. The other half of the harm-bar pair, and the two are far apart under the answer fold.'),
  R(211, 'À jeun, une demi-heure avant de manger.', 'On an empty stomach, half an hour before eating.', '/a ʒœ̃ yn də.mi.œʁ a.vɑ̃ də mɑ̃.ʒe/', 'ah ZHUHⁿ ün duh-mee-EUR ah-vahⁿ duh mahⁿ-ZHAY',
    'dosage', 'pharmacist', 'sentence', SV, 'CO', 'courant',
    'Two rows carry à jeun and both are b1/b2. It is two syllables and means the whole instruction changes.'),
  R(212, 'Pas plus de six par jour.', 'No more than six a day.', '/pa ply də sis paʁ ʒuʁ/', 'pah plü duh SEESS par ZHOOR',
    'dosage', 'pharmacist', 'sentence', SD, 'CO', 'courant',
    'The ceiling, and the one number in the lesson the learner has to hold rather than recognise.'),
  R(213, 'C\'est un traitement de sept jours.', 'It is a seven-day course.', '/sɛ.tœ̃ tʁɛt.mɑ̃ də sɛt ʒuʁ/', 'seh-tuhⁿ tret-MAHⁿ duh set ZHOOR',
    'dosage', 'pharmacist', 'sentence', SV, 'CO', 'courant',
    'The duration, which arrives after the frequency and is the part people stop listening for.'),
  R(214, 'Vous avez une ordonnance ?', 'Do you have a prescription?', '/vu.za.ve yn ɔʁ.dɔ.nɑ̃s/', 'voo-zah-VAY ün or-do-NAHⁿSS',
    'counter', 'pharmacist', 'sentence', SD, 'CO', 'courant',
    'The counter opens with it. L\'ordonnance is published in four themes and the question was in none of them.'),
  R(215, 'C\'est sur ordonnance.', 'That one needs a prescription.', '/sɛ syʁ ɔʁ.dɔ.nɑ̃s/', 'seh sür or-do-NAHⁿSS',
    'counter', 'pharmacist', 'phrase', PD, 'CO', 'courant',
    'The refusal, and it is four words. A learner listening for a long explanation misses it entirely.'),
  R(216, 'Vous préférez le générique ?', 'Would you like the generic?', '/vu pʁe.fe.ʁe lə ʒe.ne.ʁik/', 'voo pray-fay-RAY luh zhay-nay-REEK',
    'counter', 'pharmacist', 'sentence', SV, 'CO', 'courant',
    'Asked at every French counter and answerable with one word. Le générique is a category rather than a brand, so it stays inside the no-drug-names rule.'),
  R(217, 'Si ça ne passe pas, revenez me voir.', 'If it does not clear up, come back and see me.', '/si sa nə pas pa ʁə.və.ne mə vwaʁ/', 'see sa nuh pahss PAH ruh-vuh-NAY muh VWAR',
    'counter', 'pharmacist', 'sentence', SV, 'CO', 'courant',
    'The condition on the whole encounter. Ça passe for a symptom clearing is idiomatic and appears in no published row.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  DESCRIBING AROUND A MISSING WORD · .218 to .223 — six rows, the learner's.
 *
 *  This is the half of the Owns a2.07's repair block does NOT cover. A symptom
 *  is inside the learner and cannot be pointed at, so when the word is missing
 *  the only way the encounter completes is to describe around it. a2.07's six
 *  rungs ask the other person to repeat; these say something instead.
 *
 *  ZERO repair rows are authored. The fold guard proves it.
 * ────────────────────────────────────────────────────────────────────────── */

const AROUND_ROWS: readonly Row[] = [
  R(218, 'Je ne connais pas le mot.', 'I do not know the word.', '/ʒə nə kɔ.nɛ pa lə mo/', 'zhuh nuh ko-neh PAH luh MOH',
    'describe-around', 'learner', 'sentence', SD, 'PO', 'courant',
    'Said BEFORE describing rather than instead of it. On its own it stops the conversation; in front of a description it buys patience.'),
  R(219, 'C\'est comme une brûlure.', 'It is like a burning.', '/sɛ kɔ.myn bʁy.lyʁ/', 'seh ko-mün brü-LÜR',
    'describe-around', 'learner', 'sentence', SD, 'PO', 'courant',
    'C\'est comme plus a noun the learner DOES have. La brûlure is published at .028 and was never used this way.'),
  R(220, 'C\'est plutôt une douleur sourde.', 'It is more of a dull ache.', '/sɛ ply.to yn du.lœʁ suʁd/', 'seh plü-TOH ün doo-leur SOORD',
    'describe-around', 'learner', 'sentence', SV, 'PO', 'courant',
    'The answer to ça vous lance ou ça vous brûle ? when neither is right. Plutôt is the hedge that makes an approximate answer acceptable.'),
  R(221, 'Ça fait mal ici.', 'It hurts here.', '/sa fɛ mal i.si/', 'sa feh mal ee-SEE',
    'describe-around', 'learner', 'sentence', PD, 'PO', 'courant',
    'Four words and a finger. It is the answer to montrez-moi où ça fait mal and it needs no body-part noun at all.'),
  R(222, 'C\'est difficile à expliquer.', 'It is hard to explain.', '/sɛ di.fi.sil a ɛks.pli.ke/', 'seh dee-fee-SEEL ah eks-plee-KAY',
    'describe-around', 'learner', 'phrase', PV, 'PO', 'courant',
    'Buys a second attempt rather than ending the turn. A doctor hearing it waits; a doctor hearing silence moves on.'),
  R(223, 'C\'est combien de fois par jour ?', 'How many times a day is that?', '/sɛ kɔ̃.bjɛ̃ də fwa paʁ ʒuʁ/', 'seh kohⁿ-byehⁿ duh fwah par ZHOOR',
    'describe-around', 'learner', 'sentence', SD, 'PO', 'courant',
    `The targeted question the disclaimer card ends on. It asks about the dose specifically rather than asking for the sentence again, which is ${unitRef('a2.07')}\'s move.`),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BODY REPORTS · corps .021 to .024 — four rows, well below the 294 guard.
 *
 *  These name a part AND a construction, which is what makes them the anchor
 *  for the three-way sort. a1.24 owns `avoir mal à` and the contraction; these
 *  USE it and explain nothing.
 * ────────────────────────────────────────────────────────────────────────── */

const BODY_ROWS: readonly Row[] = [
  RB(21, 'J\'ai mal ici, sous les côtes.', 'It hurts here, under the ribs.', '/ʒe mal i.si su le kot/', 'zhay mal ee-SEE soo lay KOHT',
    'body-report', 'learner', 'sentence', SV, 'PO', 'courant',
    `Construction 1 with a location the learner points at. Sous is ${unitRef('a2.04')}\'s preposition and is used, not taught.`),
  RB(22, 'J\'ai mal partout.', 'I ache all over.', '/ʒe mal paʁ.tu/', 'zhay mal par-TOO',
    'body-report', 'learner', 'phrase', PD, 'PO', 'courant',
    `Construction 1 with no body part at all, which is the shape ${unitRef('a1.24')} never showed and the one a feverish person actually produces.`),
  RB(23, 'La douleur descend dans la jambe.', 'The pain goes down into the leg.', '/la du.lœʁ de.sɑ̃ dɑ̃ la ʒɑ̃b/', 'lah doo-leur day-SAHⁿ dahⁿ lah ZHAHⁿB',
    'body-report', 'learner', 'sentence', SV, 'PO', 'courant',
    'A symptom that moves, which none of the three constructions handles and which a doctor asks about directly.'),
  RB(24, 'Ça a commencé il y a trois jours.', 'It started three days ago.', '/sa a kɔ.mɑ̃.se i.lja tʁwa ʒuʁ/', 'sa ah ko-mahⁿ-SAY eel-yah trwah ZHOOR',
    'body-report', 'learner', 'sentence', SD, 'PO', 'courant',
    `The answer to depuis quand ? that AVOIDS depuis entirely. ${Cap(unitRef('a2.18'))} owns depuis and this row lets the slot be filled without touching it.`),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE EXPORTS
 * ══════════════════════════════════════════════════════════════════════════ */

export const SYMPTOM_ROWS: readonly Row[] = [...DOCTOR_ROWS, ...DOSAGE_ROWS, ...AROUND_ROWS];
export const CORPS_ROWS: readonly Row[] = BODY_ROWS;
export const ROWS: readonly Row[] = [...SYMPTOM_ROWS, ...CORPS_ROWS];
export const ALL_ROWS: readonly Row[] = ROWS;

/** Collation §1.5. The other party is the doctor and the pharmacist. */
export const OTHER_VOICE_FLOOR = 0.4;
export const OTHER_VOICES: readonly Voice[] = ['doctor', 'pharmacist'];

/** The dictée's items: the dosage line, written. All word-mode (>16 letters,
 *  >1 word) and none carrying an apostrophe or a hyphen, because `normalizeFr`
 *  strips both and an item whose only difficulty is one tests nothing. */
//
//  `S(202)` « Montrez-moi où ça fait mal. » was the obvious sixth and is NOT
//  here: it carries a hyphen, `normalizeFr` strips it, and the tile bank would
//  hand the learner a difficulty the check cannot see. `S(214)` replaces it.
//  Every id below also carries the `dictation` drill, checked against Postgres.
export const DICTEE_IDS = [S(208), S(209), S(210), S(212), S(197), S(214)];
