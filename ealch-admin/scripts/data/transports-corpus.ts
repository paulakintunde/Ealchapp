// a2.27.l1 « Les transports » — the corpus, the constants and the decisions.
// Trail seq 26, the THIRD unit of the A2 situations band (seq 24 to 31).
//
// ════════════════════════════════════════════════════════════════════════════
//  WHAT THE PROMPT, THE DESIGN AND THE COLLATION GOT WRONG, MEASURED 2026-08-16
// ════════════════════════════════════════════════════════════════════════════
//
// Doctrine §F asks for this header. Every DB figure the prompt carried was
// flagged UNVERIFIED and asked to be re-measured. Most held exactly. Seven did
// not, and five of the seven are the same failure: a claim of ABSENCE derived
// from a token probe whose shape could not see the thing it was looking for.
//
//  1. « transports-quotidiens 415 published / 5 in seed, next free a2 id .135,
//     deplacements 320/320, la-ville 347/0, rp-voyage 426 » — TRUE, every
//     figure, except rp-voyage which shows 1 in the seed rather than 0. The
//     a2 slice runs to .134 with no gaps, exactly as measured.
//
//  2. « THE SPINE THEME AMENDMENT IS YOURS TO MAKE » — FALSE, ALREADY DONE.
//     The prompt hands this unit a one-line spine edit as its own work.
//     `author-full-curriculum-spine.ts:789` ALREADY reads
//     `themes: ['transports-quotidiens', 'deplacements']`, and so do the
//     Postgres `content_units` row and the seed unit row. Band blocking step 2
//     landed for all eight units before this build started. Nothing was edited
//     here and `spine-drift.test.ts` needed no re-run on this unit's account.
//     `transport` is still absent from `content_themes`, which is what makes
//     it a phantom, and it is still in `SEED_CUT.themes`, which is the single
//     band-level diff this build was told to leave alone.
//
//  3. « imperative direction verbs = 3 in 1,161 rows » — FALSE, it is at least
//     4, and the fourth is the most interesting row in the pre-flight:
//
//       fr.a2.verbes-essentiels.042   Continuez tout droit jusqu'au feu.
//
//     It is a TWO-MOVE CHAIN WITH A JOINT, published, carrying
//     flashcard/voiceflash/sentence/dictation. The design's sweep covered
//     `deplacements`, `la-ville` and `transports-quotidiens` and this row is in
//     `verbes-essentiels`, so the sweep could not see it. It is IMPORTED here
//     rather than re-authored, and it is the only pre-existing multi-move
//     instruction in the product.
//
//  4. « 0 rows use y for a place » — FALSE, AND FALSE INSIDE THIS UNIT'S OWN
//     THEME. `fr.a2.transports-quotidiens.121` is published:
//
//       Puisqu'il faisait beau, j'ai décidé d'y aller à vélo.
//
//     A wider sweep returns 40 published rows using `y` for a place, 11 of them
//     at a1. The design probed the tokens `j'y vais`, `on y va`, `vous y allez`,
//     none of which matches `d'y aller` or `allons-y`, which are the two
//     commonest shapes. The BAN STILL STANDS unchanged (collation C8, and this
//     unit authors zero `y`), but its stated rationale does not: the prompt says
//     "there is nothing to import and nothing to preserve" and "a learner
//     arriving at seq 26 may never have met it". The learner's own transport
//     theme has already published it, and five `j'y vais` rows are in the seed.
//     The ban is a teaching decision, not an absence.
//
//  5. « en/à + transport mode = 20 rows » — TRUE as a substring count and
//     MISLEADING as a coverage claim. Exactly TWO published rows are a bare
//     mode phrase: `fr.a1.rp-voyage.004` (à pied) and `fr.sons.liaisons.176`
//     (en avion). `en bus`, `en voiture`, `en métro` and `à vélo` do not exist
//     as headwords anywhere. Four are authored here, .235 to .238, and the RULE
//     is quoted from `fr.a1.deplacements.014` rather than restated.
//
//  6. « ordinals in a direction = 0 » and « station or airport announcements
//     = 0 in all 48,325 rows » — BOTH TRUE, re-measured directly.
//     `la première à droite` 0, `la deuxième à droite` 0, `la troisième rue` 0,
//     `prenez la deuxième` 0; `à destination de` 0, `en provenance de` 0,
//     `attention au départ` 0, `voie numéro` 0, `voie douze` 0. These two
//     absences are the whole reason this unit authors 26 rows of somebody
//     else's speech.
//
//  7. « sortie versus sorti is an ear trap » (prompt §4, act 4) — FALSE.
//     `sortie` and `sorti` are HOMOPHONES, both /sɔʁ.ti/. Nothing distinguishes
//     them by ear and a listening trap built on them tests nothing. The trap
//     act carries `Tournez`/`Retournez` and `Continuez`/`Contournez` instead,
//     which are genuine minimal pairs that send a learner to a different place.
//
//  8. « a2.07 plans to be the product's first table; if it shipped one, take
//     mission 6 as a table » — a2.07 SHIPPED NO TABLE. Measured across all 67
//     seeded lessons: `table` is still at ZERO. a2.07 used `tapTable` twice.
//     Mission 6 therefore takes the settled fallback, a second `tapTable`,
//     which is pre-approved and needs no device check.
//
//  9. « check the TrapAudioStep hardcoded string on device before authoring » —
//     ANSWERED BY READING, and it is worse than the design guessed.
//     `MissionRich.tsx:870` is a bare JSX literal, "Écoutez la paire. Le R
//     sonne, puis le R se tait.", and 41 SHIPPED stepped trapDrills carry an
//     `audio` step, 38 of them A2 lessons including a2.07 and a2.26. The defect
//     is not a risk this build might create; it is already live everywhere. It
//     is reported, not fixed here: fixing it is a renderer change to shipped
//     content and belongs in its own commit.
//
// ════════════════════════════════════════════════════════════════════════════
//
// WHERE ROWS GO. All new transport rows into `transports-quotidiens` at a2,
// from .135. NOT into `deplacements` (nine A1 grammar lessons draw their
// example nouns from it, and a1.03's gender statistic and a1.11's
// indefinite-article statistic are both measured over its noun population).
// NOT into `la-ville` or `rp-voyage`. The two Quebec rows go into
// `quebec-et-francophonie`, which is the convention a2.07 set and a2.26
// followed, at most two rows, recognition only.
import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const UNIT = {
  id: 'a2.27',
  seq: 26,
  level: 'a2' as const,
  track: 'a2',
  title: 'Transportation',
  sub: 'Les transports',
  canDo: 'Can buy a ticket, ask for directions and follow the answer',
  prereqUnitIds: ['a2.04'],
} as const;

export const LESSON_ID = 'a2.27.l1';

export const THEME = 'transports-quotidiens';
export const QC_THEME = 'quebec-et-francophonie';

/** Measured 2026-08-16, before this build wrote anything. */
export const THEME_ROWS_BEFORE = 415;      // published, all levels
export const THEME_A2_BEFORE = 134;        // published, a2 slice
export const THEME_SEED_BEFORE = 5;        // present in seed.json v49
export const QC_A2_BEFORE = 181;

/** THE ID BLOCK. Scope every guard to the BLOCK, never to the theme prefix: a
 *  prefix filter picks up 281 rows from a1 and b1 that nobody in this band
 *  authored (a2.04 §11 met the same thing at 127 strangers). */
export const ID_FIRST = 135;
export const ID_LAST = 238;
export const QC_FIRST = 201;
export const QC_LAST = 202;

export const T = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;
export const Q = (n: number) => `fr.a2.${QC_THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §A. THE OWNS, AND THE REFRAME
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: runnable in the half-second while the other person is still
 *  speaking. Carried verbatim across eight sections and the roundup. */
export const REFRAME = 'Find the joints, then take one move at a time.';

/** The four move types. Every French direction is built from these, joined by
 *  the five joints below. This is the family, in doctrine §B.5's sense: it
 *  generalises to instructions the lesson never showed. */
export const MOVE_TYPES = ['GO', 'TURN', 'PASS', 'ARRIVE'] as const;
export const JOINTS = ['puis', 'ensuite', 'après', "jusqu'à", 'au bout de'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. a2.07's FROZEN REPAIR BLOCK. This unit authors ZERO repair rows.
 *      Collation §1.6 and `04-REPAIR-MOVE-IDS.md`.
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

/** Where the learner is ASSESSED on the repair move, and has been since the A1
 *  capstone shipped: `a1.30.l2`, quiz round `x12-repair`, "When it goes wrong". */
export const REPAIR_ASSESSED_IN = 'a1.30.l2';

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE UNITS THIS ONE QUOTES RATHER THAN RETEACHES
 * ══════════════════════════════════════════════════════════════════════════ */

export const PLACE_PREP_UNIT = 'a2.04';    // the four-kind sort, chez, sheet.a2.04.lieu
export const A_PLACE_UNIT = 'a1.21';       // à + place-by-name, the full contraction
export const COUNTRY_UNIT = 'a1.22';       // en/au/aux with countries
export const ASK_UNIT = 'a1.20';           // Pardon, où est la gare ? shipped here
export const NUMBERS_UNIT = 'a1.27';       // the numbers inside voie douze
export const MONEY_UNIT = 'a2.26';         // the money transaction; the ticket PRICE is its
export const REGISTER_UNIT = 'a2.29';      // the politeness ladder, once, for all eight
export const MODAL_UNIT = 'a2.13';         // vouloir: je veux against je voudrais

/** The rule row for en/à with transport modes. IMPORTED and quoted, never
 *  restated: the corpus already says it better than a card would.
 *  drills = {flashcard} only, so it is tranche-releasable and NOT practice- or
 *  dictation-eligible. Checked against Postgres. */
export const MODE_RULE_ID = 'fr.a1.deplacements.014';

/** The only pre-existing multi-move instruction in the product. See header §3. */
export const EXISTING_CHAIN_ID = 'fr.a2.verbes-essentiels.042';

/** The two a1 rows that ARE received instructions, named as prior exposure and
 *  imported rather than re-authored. Both carry {sentence,review}. */
export const PRIOR_INSTRUCTIONS = [
  'fr.a1.deplacements.245', // Tournez à gauche après le pont.
  'fr.a1.deplacements.246', // Allez tout droit, puis tournez à droite.
] as const;

/** Published `y`-for-a-place rows, NAMED as evidence that the collation's
 *  rationale for C8 is wrong and left exactly where they are. Not cited. */
export const PRIOR_Y = [
  'fr.a2.transports-quotidiens.121', // Puisqu'il faisait beau, j'ai décidé d'y aller à vélo.
  'fr.a2.pronoms-essentiels.029',    // Je vais à Paris ; j'y vais en train.
  'fr.a1.pronoms-essentiels.098',    // On y va tout de suite.
] as const;

/** Shapes the `y`/`en` guard tests for. Written as PRONOUN shapes rather than
 *  bare letters, because the PREPOSITION `en` is legal here and is one card:
 *  en bus, en face, en provenance de, en gare. */
export const PRONOUN_YEN_SHAPES: readonly RegExp[] = [
  /\bj'y\b/i, /\bon y\b/i, /\bvous y\b/i, /\bnous y\b/i, /\btu y\b/i, /\bil y va\b/i,
  /\bd'y aller\b/i, /\ballons-y\b/i, /\by aller\b/i,
  /\bil y en a\b/i, /\bj'en ai\b/i, /\bon en prend\b/i, /\bj'en veux\b/i, /\bvous en\b/i,
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. WHAT IS IMPORTED. Every id below is published in Postgres and verified
 *      by the apply script before a single row is written.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  /** The direction lexicon. Every one of these exists and is re-authored by
   *  nobody. `deplacements` is a1 and is IMPORT-ONLY for this unit. */
  directions: [
    'fr.a1.deplacements.034', // à gauche
    'fr.a1.deplacements.035', // à droite
    'fr.a1.deplacements.036', // tout droit
    'fr.a1.deplacements.046', // le feu rouge
    'fr.a1.deplacements.047', // le carrefour
    'fr.a1.deplacements.037', // la rue
    'fr.a1.deplacements.140', // le chemin
    'fr.a1.deplacements.121', // prendre à gauche
    'fr.a1.deplacements.122', // prendre à droite
    'fr.a1.deplacements.123', // continuer tout droit
    'fr.a1.deplacements.124', // traverser la rue
    'fr.a1.deplacements.120', // demander son chemin
  ],
  /** The station and the ticket. a1 `deplacements` again. */
  station: [
    'fr.a1.deplacements.003', // la gare
    'fr.a1.deplacements.025', // le quai
    'fr.a1.deplacements.028', // le guichet
    'fr.a1.deplacements.029', // un aller simple
    'fr.a1.deplacements.030', // un aller-retour
    'fr.a1.deplacements.044', // monter
    'fr.a1.deplacements.045', // descendre
    'fr.a1.deplacements.096', // composter le billet
  ],
  /** Landmarks a chain refers to. `la-ville`, import-only. */
  landmarks: [
    'fr.a1.la-ville.105', // la pharmacie
    'fr.a1.la-ville.089', // la poste
    'fr.a1.la-ville.103', // la banque
    'fr.a1.la-ville.110', // le pont
    'fr.a1.la-ville.107', // le parc
    'fr.a1.la-ville.108', // la place
  ],
  /** This unit's own theme, a2 slice, already published. Not one is authored. */
  transport: [
    'fr.a2.transports-quotidiens.009', // l'abonnement
    'fr.a2.transports-quotidiens.011', // le tarif
    'fr.a2.transports-quotidiens.014', // le composteur
    'fr.a2.transports-quotidiens.015', // la correspondance
    'fr.a2.transports-quotidiens.016', // le contrôleur
    'fr.a2.transports-quotidiens.020', // le retard
    'fr.a2.transports-quotidiens.021', // la ligne
    'fr.a2.transports-quotidiens.022', // la direction
    'fr.a2.transports-quotidiens.027', // le coin
    'fr.a2.transports-quotidiens.028', // le rond-point
    'fr.a2.transports-quotidiens.032', // la grève
    'fr.a2.transports-quotidiens.047', // changer de ligne
    'fr.a2.transports-quotidiens.048', // valider son billet
  ],
  /** The received instructions and the rule row. See header §3 and §5. */
  received: [
    EXISTING_CHAIN_ID,
    ...PRIOR_INSTRUCTIONS,
    MODE_RULE_ID,
  ],
  /** a2.07's block, cited by id, authored by nobody here. */
  repair: [...REPAIR_IDS],
  /** The Quebec form that already exists. */
  quebec: ['fr.a2.transports-quotidiens.004'], // l'autobus
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. REGIONAL POLICY. Collation C3, confirmed by Paul 2026-08-15.
 *      France-standard in every scored, drilled and quizzed surface. Quebec is
 *      ONE cardDeck card and two recognition rows carrying no voiceflash.
 *      No brand names, no fare products, no prices: STM and RATP products
 *      change and the card would age badly (design R9).
 * ══════════════════════════════════════════════════════════════════════════ */

export const QUEBEC_FORMS = ['embarquer', 'débarquer', 'la passe', 'char'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE ROWS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Which of the four move types a row is, or what else it is. */
type Bucket =
  | 'move-go' | 'move-turn' | 'move-pass' | 'move-arrive'
  | 'chain2' | 'chain3' | 'chain4'
  | 'ordinal' | 'announcement' | 'counter' | 'repair-targeted' | 'mode' | 'quebec';

/** Whose mouth the row comes out of. Collation §1.5's 40% floor is measured on
 *  this and both the apply script and the test assert it. */
type Voice = 'passerby' | 'announcer' | 'agent' | 'learner' | 'neutral';

export type Row = Item & { bucket: Bucket; voice: Voice; moves: number };

const TAGS = ['a2', 'transports', 'situation'];

/** A spoken card the learner hears and reproduces. */
const PV: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
/** A sentence that also feeds the sentence hub. */
const SV: Item['drills'] = ['flashcard', 'voiceflash', 'sentence', 'review'];
/** A sentence the dictée also takes. */
const SD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'review'];
/** A phrase the dictée also takes. `dictation` on `kind: 'phrase'` is legal:
 *  60 published rows carry it (measured by a2.07). */
const PD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'review'];
/** Recognition only. No voiceflash, so it can never reach a speak drill. */
const RC: Item['drills'] = ['flashcard', 'review'];

const row = (
  id: string, theme: string, fr: string, en: string, ipa: string, respell: string,
  bucket: Bucket, voice: Voice, moves: number,
  kind: Item['kind'], drills: Item['drills'], notes: string,
): Row => ({
  id, kind, level: 'a2', theme, fr, en, ipa, respell,
  tags: [...TAGS, bucket, voice], drills, audioRef: null, version: 1, notes,
  bucket, voice, moves,
});

type Rest = [string, string, string, string, Bucket, Voice, number, Item['kind'], Item['drills'], string];
const R = (n: number, ...a: Rest): Row => row(T(n), THEME, ...a);
const RQ = (n: number, ...a: Rest): Row => row(Q(n), QC_THEME, ...a);

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK A · .135 to .150 — THE FOUR MOVE TYPES, one move each.
 *
 *  This is the frame act 2 installs before any audio arrives. Four verbs mean
 *  "go", which is why "listen for the verbs" was rejected as a reframe: the
 *  verb is the least distinguishing part of a direction.
 * ────────────────────────────────────────────────────────────────────────── */

const A_ROWS: readonly Row[] = [
  // GO
  R(135, 'Continuez tout droit.', 'Keep going straight.', '/kɔ̃.ti.nɥe tu dʁwa/', 'kohⁿ-tee-nü-AY too DRWAH',
    'move-go', 'passerby', 1, 'sentence', SD,
    'The commonest single move in French directions, and the one that needs no landmark. Used whole, as a chunk.'),
  R(136, 'Allez jusqu\'au carrefour.', 'Go as far as the crossroads.', '/a.le ʒys.ko kaʁ.fuʁ/', 'ah-LAY zhüs-koh kar-FOOR',
    'move-go', 'passerby', 1, 'sentence', SV,
    'GO with a stopping point. Jusqu\'à is a joint doing a move\'s work, which is why it sits in both lists.'),
  R(137, 'Remontez la rue.', 'Go back up the street.', '/ʁə.mɔ̃.te la ʁy/', 'ruh-mohⁿ-TAY lah RÜ',
    'move-go', 'passerby', 1, 'sentence', SV,
    'Remonter is up the street rather than upward. Zero published rows use it as an instruction.'),
  R(138, 'Prenez le boulevard en face.', 'Take the boulevard opposite.', '/pʁə.ne lə bul.vaʁ ɑ̃ fas/', 'pruh-NAY luh bool-VAR ahⁿ FAHSS',
    'move-go', 'passerby', 1, 'sentence', SV,
    'Prendre is GO here and TURN at .141. The same verb doing two move types is the reason the frame is taught before the verbs.'),

  // TURN
  R(139, 'Tournez à gauche.', 'Turn left.', '/tuʁ.ne a ɡoʃ/', 'toor-NAY ah GOHSH',
    'move-turn', 'passerby', 1, 'sentence', SV,
    'The bare TURN. a1 published tourner only inside a longer sentence and prendre à gauche as an infinitive.'),
  R(140, 'Tournez à droite au feu.', 'Turn right at the lights.', '/tuʁ.ne a dʁwat o fø/', 'toor-NAY ah DRWAHT oh FEU',
    'move-turn', 'passerby', 1, 'sentence', SD,
    'TURN with a landmark attached. Le feu rouge is a1 vocabulary; au feu on its own is what is actually said.'),
  R(141, 'Prenez la deuxième à droite.', 'Take the second on the right.', '/pʁə.ne la dø.zjɛm a dʁwat/', 'pruh-NAY lah deu-ZYEM ah DRWAHT',
    'move-turn', 'passerby', 1, 'sentence', SD,
    'Zero published rows use an ordinal in a direction. The noun rue is left out, which is what makes the ordinal carry the whole meaning.'),
  R(142, 'Prenez la première à gauche.', 'Take the first on the left.', '/pʁə.ne la pʁə.mjɛʁ a ɡoʃ/', 'pruh-NAY lah pruh-MYEHR ah GOHSH',
    'move-turn', 'passerby', 1, 'sentence', SV,
    'The first half of the deuxième against douzième trap: première is long and stressed, deuxième is not.'),

  // PASS
  R(143, 'Traversez la place.', 'Cross the square.', '/tʁa.vɛʁ.se la plas/', 'trah-vehr-SAY lah PLAHSS',
    'move-pass', 'passerby', 1, 'sentence', SV,
    'Traverser is published as an infinitive at fr.a1.deplacements.124 and as an instruction nowhere.'),
  R(144, 'Passez devant la mairie.', 'Go past the town hall.', '/pa.se də.vɑ̃ la mɛ.ʁi/', 'pah-SAY duh-VAHⁿ lah meh-REE',
    'move-pass', 'passerby', 1, 'sentence', SV,
    `PASS names a landmark you do not act on. Devant is ${unitRef('a2.04')}\'s preposition and is used, not taught.`),
  R(145, 'Longez le parc.', 'Follow the edge of the park.', '/lɔ̃.ʒe lə paʁk/', 'lohⁿ-ZHAY luh PARK',
    'move-pass', 'passerby', 1, 'sentence', SV,
    'Longer has no one-word English equivalent, which is why a learner drops it and loses the whole move.'),
  R(146, 'Continuez jusqu\'au pont.', 'Carry on as far as the bridge.', '/kɔ̃.ti.nɥe ʒys.ko pɔ̃/', 'kohⁿ-tee-nü-AY zhüs-koh POHⁿ',
    'move-pass', 'passerby', 1, 'sentence', SV,
    'The same verb as .135 with a joint on the end. Jusqu\'au is where the move stops, and it is the joint learners miss first.'),

  // ARRIVE
  R(147, 'C\'est juste après la pharmacie.', 'It is just after the chemist.', '/sɛ ʒyst a.pʁɛ la faʁ.ma.si/', 'seh zhüst ah-PREH lah far-mah-SEE',
    'move-arrive', 'passerby', 1, 'sentence', SV,
    'ARRIVE is the only move type with no verb of motion in it, which is why it is easy to hear as an afterthought.'),
  R(148, 'Vous verrez la gare en face.', 'You will see the station opposite.', '/vu vɛ.ʁe la ɡaʁ ɑ̃ fas/', 'voo veh-RAY lah GAHR ahⁿ FAHSS',
    'move-arrive', 'passerby', 1, 'sentence', SV,
    'Vous verrez is a futur simple used as reassurance. Stored whole; nothing about the tense is taught here.'),
  R(149, 'Ça sera sur votre gauche.', 'It will be on your left.', '/sa sə.ʁa syʁ vɔtʁ ɡoʃ/', 'sa suh-RA sür VOH-truh GOHSH',
    'move-arrive', 'passerby', 1, 'sentence', SV,
    'Sur votre gauche, not à gauche: the side of you rather than the direction to turn. The two are one word apart and mean different things.'),
  R(150, 'C\'est au coin, à droite.', 'It is on the corner, on the right.', '/sɛ.to kwɛ̃ a dʁwat/', 'seh-toh KWEHⁿ ah DRWAHT',
    'move-arrive', 'passerby', 1, 'sentence', SV,
    'Le coin is published at fr.a2.transports-quotidiens.027 as a headword and has never been used in an instruction.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK B · .151 to .164 — TWO MOVES, joined. Rung 2 of the chain ladder.
 *  Every row here has exactly one joint and the check names it.
 * ────────────────────────────────────────────────────────────────────────── */

const B_ROWS: readonly Row[] = [
  R(151, 'Continuez tout droit, puis tournez à gauche.', 'Keep going straight, then turn left.', '/kɔ̃.ti.nɥe tu dʁwa pɥi tuʁ.ne a ɡoʃ/', 'kohⁿ-tee-nü-AY too DRWAH pwee toor-NAY ah GOHSH',
    'chain2', 'passerby', 2, 'sentence', SD, 'GO then TURN, joined by puis. The cleanest two-move shape there is.'),
  R(152, 'Prenez la première à droite, puis traversez la place.', 'Take the first on the right, then cross the square.', '/pʁə.ne la pʁə.mjɛʁ a dʁwat pɥi tʁa.vɛʁ.se la plas/', 'pruh-NAY lah pruh-MYEHR ah DRWAHT pwee trah-vehr-SAY lah PLAHSS',
    'chain2', 'passerby', 2, 'sentence', SV, 'TURN then PASS, with an ordinal inside the first move.'),
  R(153, 'Tournez à gauche au feu, ensuite continuez tout droit.', 'Turn left at the lights, then keep going straight.', '/tuʁ.ne a ɡoʃ o fø ɑ̃.sɥit kɔ̃.ti.nɥe tu dʁwa/', 'toor-NAY ah GOHSH oh FEU ahⁿ-SWEET kohⁿ-tee-nü-AY too DRWAH',
    'chain2', 'passerby', 2, 'sentence', SD, 'Ensuite instead of puis. They are interchangeable here and a learner who only knows one loses half the joints.'),
  R(154, 'Allez jusqu\'au carrefour, puis prenez à droite.', 'Go to the crossroads, then turn right.', '/a.le ʒys.ko kaʁ.fuʁ pɥi pʁə.ne a dʁwat/', 'ah-LAY zhüs-koh kar-FOOR pwee pruh-NAY ah DRWAHT',
    'chain2', 'passerby', 2, 'sentence', SV, 'Jusqu\'au inside move one, puis between the two. Two joints, one chain, and only one of them separates moves.'),
  R(155, 'Traversez le pont, ensuite tournez à gauche.', 'Cross the bridge, then turn left.', '/tʁa.vɛʁ.se lə pɔ̃ ɑ̃.sɥit tuʁ.ne a ɡoʃ/', 'trah-vehr-SAY luh POHⁿ ahⁿ-SWEET toor-NAY ah GOHSH',
    'chain2', 'passerby', 2, 'sentence', SD, 'PASS then TURN. The order matters: crossing first and turning first put you on opposite banks.'),
  R(156, 'Remontez la rue, puis prenez la deuxième à droite.', 'Go back up the street, then take the second on the right.', '/ʁə.mɔ̃.te la ʁy pɥi pʁə.ne la dø.zjɛm a dʁwat/', 'ruh-mohⁿ-TAY lah RÜ pwee pruh-NAY lah deu-ZYEM ah DRWAHT',
    'chain2', 'passerby', 2, 'sentence', SV, 'The ordinal sits at the end, unstressed, between two content words. That is where it goes missing.'),
  R(157, 'Longez le parc, ensuite traversez la rue.', 'Follow the park along, then cross the street.', '/lɔ̃.ʒe lə paʁk ɑ̃.sɥit tʁa.vɛʁ.se la ʁy/', 'lohⁿ-ZHAY luh PARK ahⁿ-SWEET trah-vehr-SAY lah RÜ',
    'chain2', 'passerby', 2, 'sentence', SV, 'Two PASS moves in a row. Nothing changes heading, which is what makes them easy to collapse into one.'),
  R(158, 'Passez devant la poste, puis c\'est sur votre droite.', 'Go past the post office, then it is on your right.', '/pa.se də.vɑ̃ la pɔst pɥi sɛ syʁ vɔtʁ dʁwat/', 'pah-SAY duh-VAHⁿ lah POST pwee seh sür VOH-truh DRWAHT',
    'chain2', 'passerby', 2, 'sentence', SV, 'PASS then ARRIVE. Puis in front of an ARRIVE move is the signal the instruction has finished.'),
  R(159, 'Continuez jusqu\'au rond-point, ensuite prenez la sortie à droite.', 'Carry on to the roundabout, then take the right exit.', '/kɔ̃.ti.nɥe ʒys.ko ʁɔ̃.pwɛ̃ ɑ̃.sɥit pʁə.ne la sɔʁ.ti a dʁwat/', 'kohⁿ-tee-nü-AY zhüs-koh rohⁿ-PWEHⁿ ahⁿ-SWEET pruh-NAY lah sor-TEE ah DRWAHT',
    'chain2', 'passerby', 2, 'sentence', SV, 'Le rond-point is published as a headword in four themes and used in an instruction in none of them.'),
  R(160, 'Prenez le boulevard, puis vous verrez la gare.', 'Take the boulevard, then you will see the station.', '/pʁə.ne lə bul.vaʁ pɥi vu vɛ.ʁe la ɡaʁ/', 'pruh-NAY luh bool-VAR pwee voo veh-RAY lah GAHR',
    'chain2', 'passerby', 2, 'sentence', SV, 'GO then ARRIVE, with no TURN at all. A two-move chain does not have to change heading.'),
  R(161, 'Tournez à droite après la banque, puis continuez tout droit.', 'Turn right after the bank, then keep going straight.', '/tuʁ.ne a dʁwat a.pʁɛ la bɑ̃k pɥi kɔ̃.ti.nɥe tu dʁwa/', 'toor-NAY ah DRWAHT ah-PREH lah BAHⁿK pwee kohⁿ-tee-nü-AY too DRWAH',
    'chain2', 'passerby', 2, 'sentence', SV, 'Après inside move one and puis between the moves. Two joints of different jobs in one short chain.'),
  R(162, 'Allez au bout de la rue, puis tournez à gauche.', 'Go to the end of the street, then turn left.', '/a.le o bu də la ʁy pɥi tuʁ.ne a ɡoʃ/', 'ah-LAY oh BOO duh lah RÜ pwee toor-NAY ah GOHSH',
    'chain2', 'passerby', 2, 'sentence', SD, 'Au bout de is a joint of four words. Heard fast it is one syllable and a learner hears only bout.'),
  R(163, 'Traversez la place, ensuite c\'est juste en face.', 'Cross the square, then it is just opposite.', '/tʁa.vɛʁ.se la plas ɑ̃.sɥit sɛ ʒyst ɑ̃ fas/', 'trah-vehr-SAY lah PLAHSS ahⁿ-SWEET seh zhüst ahⁿ FAHSS',
    'chain2', 'passerby', 2, 'sentence', SV, `En face is the preposition en, not the pronoun. ${Cap(unitRef('a2.25'))} owns the pronoun and this unit does not touch it.`),
  R(164, 'Prenez la deuxième à gauche, puis longez le canal.', 'Take the second on the left, then follow the canal.', '/pʁə.ne la dø.zjɛm a ɡoʃ pɥi lɔ̃.ʒe lə ka.nal/', 'pruh-NAY lah deu-ZYEM ah GOHSH pwee lohⁿ-ZHAY luh ka-NAL',
    'chain2', 'passerby', 2, 'sentence', SV, 'The ordinal and the verb with no English equivalent, in one chain. Both are droppable and dropping either loses the route.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK C · .165 to .178 — THREE MOVES. Rung 3, the CO core.
 * ────────────────────────────────────────────────────────────────────────── */

const C_ROWS: readonly Row[] = [
  R(165, 'Continuez tout droit, tournez à gauche, c\'est en face.', 'Keep straight, turn left, it is opposite.', '/kɔ̃.ti.nɥe tu dʁwa tuʁ.ne a ɡoʃ sɛ.tɑ̃ fas/', 'kohⁿ-tee-nü-AY too DRWAH toor-NAY ah GOHSH seh-tahⁿ FAHSS',
    'chain3', 'passerby', 3, 'sentence', SV, 'GO, TURN, ARRIVE with commas doing the joints\' work. A comma is a joint you cannot hear, which is the hardest case.'),
  R(166, 'Prenez la première à droite, traversez la place, puis continuez.', 'Take the first right, cross the square, then carry on.', '/pʁə.ne la pʁə.mjɛʁ a dʁwat tʁa.vɛʁ.se la plas pɥi kɔ̃.ti.nɥe/', 'pruh-NAY lah pruh-MYEHR ah DRWAHT trah-vehr-SAY lah PLAHSS pwee kohⁿ-tee-nü-AY',
    'chain3', 'passerby', 3, 'sentence', SV, 'One spoken joint and one comma. The learner who counts only puis counts two moves and walks two thirds of the route.'),
  R(167, 'Allez jusqu\'au feu, tournez à droite, c\'est après la pharmacie.', 'Go to the lights, turn right, it is after the chemist.', '/a.le ʒys.ko fø tuʁ.ne a dʁwat sɛ.ta.pʁɛ la faʁ.ma.si/', 'ah-LAY zhüs-koh FEU toor-NAY ah DRWAHT seh-tah-PREH lah far-mah-SEE',
    'chain3', 'passerby', 3, 'sentence', SV, 'Après appears here as part of an ARRIVE move rather than as a joint. The same word does both jobs.'),
  R(168, 'Traversez le pont, puis longez le quai jusqu\'à la place.', 'Cross the bridge, then follow the quay to the square.', '/tʁa.vɛʁ.se lə pɔ̃ pɥi lɔ̃.ʒe lə kɛ ʒys.ka la plas/', 'trah-vehr-SAY luh POHⁿ pwee lohⁿ-ZHAY luh KEH zhüs-KA lah PLAHSS',
    'chain3', 'passerby', 3, 'sentence', SV, 'Le quai is a station platform at a1 and a riverside here. Same word, and the context is the only thing that separates them.'),
  R(169, 'Remontez la rue, prenez la deuxième à gauche, c\'est au coin.', 'Go up the street, take the second left, it is on the corner.', '/ʁə.mɔ̃.te la ʁy pʁə.ne la dø.zjɛm a ɡoʃ sɛ.to kwɛ̃/', 'ruh-mohⁿ-TAY lah RÜ pruh-NAY lah deu-ZYEM ah GOHSH seh-toh KWEHⁿ',
    'chain3', 'passerby', 3, 'sentence', SV, 'Three moves, no spoken joint at all. Only the commas separate them and a comma has no sound.'),
  R(170, 'Sortez de la gare, tournez à droite, puis continuez tout droit.', 'Leave the station, turn right, then keep going straight.', '/sɔʁ.te də la ɡaʁ tuʁ.ne a dʁwat pɥi kɔ̃.ti.nɥe tu dʁwa/', 'sor-TAY duh lah GAHR toor-NAY ah DRWAHT pwee kohⁿ-tee-nü-AY too DRWAH',
    'chain3', 'passerby', 3, 'sentence', SV, 'The move a learner standing at a station actually needs first, and it is published nowhere.'),
  R(171, 'Passez devant la mairie, traversez la place, c\'est sur votre gauche.', 'Go past the town hall, cross the square, it is on your left.', '/pa.se də.vɑ̃ la mɛ.ʁi tʁa.vɛʁ.se la plas sɛ syʁ vɔtʁ ɡoʃ/', 'pah-SAY duh-VAHⁿ lah meh-REE trah-vehr-SAY lah PLAHSS seh sür VOH-truh GOHSH',
    'chain3', 'passerby', 3, 'sentence', SV, 'Two PASS moves then ARRIVE. Nothing turns, so a learner listening for a turn hears no instruction at all.'),
  R(172, 'Prenez le pont, ensuite la première à droite, puis tout droit.', 'Take the bridge, then the first right, then straight on.', '/pʁə.ne lə pɔ̃ ɑ̃.sɥit la pʁə.mjɛʁ a dʁwat pɥi tu dʁwa/', 'pruh-NAY luh POHⁿ ahⁿ-SWEET lah pruh-MYEHR ah DRWAHT pwee too DRWAH',
    'chain3', 'passerby', 3, 'sentence', SV, 'Moves two and three have no verb in them at all. The joint is carrying the whole move, which is the strongest argument for counting joints.'),
  R(173, 'Continuez jusqu\'au rond-point, prenez la troisième sortie, c\'est en face.', 'Carry on to the roundabout, take the third exit, it is opposite.', '/kɔ̃.ti.nɥe ʒys.ko ʁɔ̃.pwɛ̃ pʁə.ne la tʁwa.zjɛm sɔʁ.ti sɛ.tɑ̃ fas/', 'kohⁿ-tee-nü-AY zhüs-koh rohⁿ-PWEHⁿ pruh-NAY lah trwah-ZYEM sor-TEE seh-tahⁿ FAHSS',
    'chain3', 'passerby', 3, 'sentence', SV, 'The one place an ordinal counts exits rather than streets, and getting it wrong at a roundabout is a whole different road.'),
  R(174, 'Longez le parc, tournez à gauche au feu, puis vous verrez.', 'Follow the park, turn left at the lights, then you will see it.', '/lɔ̃.ʒe lə paʁk tuʁ.ne a ɡoʃ o fø pɥi vu vɛ.ʁe/', 'lohⁿ-ZHAY luh PARK toor-NAY ah GOHSH oh FEU pwee voo veh-RAY',
    'chain3', 'passerby', 3, 'sentence', SV, 'Vous verrez as a whole ARRIVE move with no place named. It means you cannot miss it, and it names nothing you can check.'),
  R(175, 'Allez tout droit, traversez la rue, c\'est juste après la banque.', 'Go straight, cross the street, it is just after the bank.', '/a.le tu dʁwa tʁa.vɛʁ.se la ʁy sɛ ʒyst a.pʁɛ la bɑ̃k/', 'ah-LAY too DRWAH trah-vehr-SAY lah RÜ seh zhüst ah-PREH lah BAHⁿK',
    'chain3', 'passerby', 3, 'sentence', SV, 'Allez rather than continuez for the same GO move. Four verbs mean go and the choice between them carries nothing.'),
  R(176, 'Tournez à gauche, continuez jusqu\'au bout, c\'est le bâtiment gris.', 'Turn left, carry on to the end, it is the grey building.', '/tuʁ.ne a ɡoʃ kɔ̃.ti.nɥe ʒys.ko bu sɛ lə ba.ti.mɑ̃ ɡʁi/', 'toor-NAY ah GOHSH kohⁿ-tee-nü-AY zhüs-koh BOO seh luh bah-tee-MAHⁿ GREE',
    'chain3', 'passerby', 3, 'sentence', SV, 'Jusqu\'au bout with no noun after it. The joint has swallowed the landmark, which is normal and unteachable from a word list.'),
  R(177, 'Prenez la rue à droite, passez devant l\'école, puis tournez à gauche.', 'Take the street on the right, pass the school, then turn left.', '/pʁə.ne la ʁy a dʁwat pa.se də.vɑ̃ le.kɔl pɥi tuʁ.ne a ɡoʃ/', 'pruh-NAY lah RÜ ah DRWAHT pah-SAY duh-VAHⁿ lay-KOL pwee toor-NAY ah GOHSH',
    'chain3', 'passerby', 3, 'sentence', SV, 'TURN, PASS, TURN. Two changes of heading with a landmark between them, and the landmark is not where you stop.'),
  R(178, 'Descendez à la station suivante, sortez, puis prenez à droite.', 'Get off at the next stop, go out, then turn right.', '/de.sɑ̃.de a la sta.sjɔ̃ sɥi.vɑ̃t sɔʁ.te pɥi pʁə.ne a dʁwat/', 'day-sahⁿ-DAY ah lah stah-SYOHⁿ swee-VAHⁿT sor-TAY pwee pruh-NAY ah DRWAHT',
    'chain3', 'passerby', 3, 'sentence', SV, 'Descendre is get off here and go down at fr.a1.deplacements.045. One of the three commonErrors this unit carries.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK D · .179 to .190 — FOUR MOVES. Rung 4, the holding drill.
 *
 *  DOCTRINE §C CAPS AN A2 SENTENCE AT 14 WORDS AND THIS UNIT'S PREMISE IS
 *  "fourteen words of instruction". The two do not collide, and the resolution
 *  is worth stating: the difficulty of a chain is the NUMBER OF MOVES, not the
 *  number of words. Every row below is four moves in eleven to thirteen words.
 *  The cap was not broken and the Owns did not have to be shrunk to keep it.
 * ────────────────────────────────────────────────────────────────────────── */

const D_ROWS: readonly Row[] = [
  R(179, 'Continuez tout droit, tournez à gauche, traversez la place, c\'est en face.', 'Straight on, turn left, cross the square, it is opposite.', '/kɔ̃.ti.nɥe tu dʁwa tuʁ.ne a ɡoʃ tʁa.vɛʁ.se la plas sɛ.tɑ̃ fas/', 'kohⁿ-tee-nü-AY too DRWAH toor-NAY ah GOHSH trah-vehr-SAY lah PLAHSS seh-tahⁿ FAHSS',
    'chain4', 'passerby', 4, 'sentence', SV, 'One of each move type, in order, with no spoken joint. Twelve words and four things to hold.'),
  R(180, 'Prenez la deuxième à droite, longez le parc, traversez la rue, c\'est là.', 'Second right, follow the park, cross the street, it is there.', '/pʁə.ne la dø.zjɛm a dʁwat lɔ̃.ʒe lə paʁk tʁa.vɛʁ.se la ʁy sɛ la/', 'pruh-NAY lah deu-ZYEM ah DRWAHT lohⁿ-ZHAY luh PARK trah-vehr-SAY lah RÜ seh LAH',
    'chain4', 'passerby', 4, 'sentence', SV, 'C\'est là as the whole ARRIVE move. It names nothing, and a learner who was still translating move one hears it as filler.'),
  R(181, 'Allez jusqu\'au feu, tournez à droite, passez le pont, c\'est après.', 'Go to the lights, turn right, cross the bridge, it is after.', '/a.le ʒys.ko fø tuʁ.ne a dʁwat pa.se lə pɔ̃ sɛ.ta.pʁɛ/', 'ah-LAY zhüs-koh FEU toor-NAY ah DRWAHT pah-SAY luh POHⁿ seh-tah-PREH',
    'chain4', 'passerby', 4, 'sentence', SV, 'C\'est après with nothing after it. The landmark is the bridge you just crossed and the sentence does not say so.'),
  R(182, 'Sortez de la gare, tout droit, deuxième à gauche, c\'est au coin.', 'Out of the station, straight on, second left, on the corner.', '/sɔʁ.te də la ɡaʁ tu dʁwa dø.zjɛm a ɡoʃ sɛ.to kwɛ̃/', 'sor-TAY duh lah GAHR too DRWAH deu-ZYEM ah GOHSH seh-toh KWEHⁿ',
    'chain4', 'passerby', 4, 'sentence', SV, 'Moves two, three and four have no verb. This is what a hurried passer-by actually says and no word list prepares a learner for it.'),
  R(183, 'Traversez la place, remontez la rue, prenez la première à droite, continuez.', 'Cross the square, up the street, first right, carry on.', '/tʁa.vɛʁ.se la plas ʁə.mɔ̃.te la ʁy pʁə.ne la pʁə.mjɛʁ a dʁwat kɔ̃.ti.nɥe/', 'trah-vehr-SAY lah PLAHSS ruh-mohⁿ-TAY lah RÜ pruh-NAY lah pruh-MYEHR ah DRWAHT kohⁿ-tee-nü-AY',
    'chain4', 'passerby', 4, 'sentence', SV, 'Ends on a GO with no destination. The instruction stops before the route does, which is the commonest real shape.'),
  R(184, 'Tournez à gauche, allez jusqu\'au pont, traversez, c\'est sur votre droite.', 'Turn left, go to the bridge, cross, it is on your right.', '/tuʁ.ne a ɡoʃ a.le ʒys.ko pɔ̃ tʁa.vɛʁ.se sɛ syʁ vɔtʁ dʁwat/', 'toor-NAY ah GOHSH ah-LAY zhüs-koh POHⁿ trah-vehr-SAY seh sür VOH-truh DRWAHT',
    'chain4', 'passerby', 4, 'sentence', SV, 'Traversez alone, with no object. The bridge from the move before is what you cross and nothing in the words says it.'),
  R(185, 'Prenez le boulevard, puis la troisième à gauche, traversez, c\'est en face.', 'Take the boulevard, then third left, cross, it is opposite.', '/pʁə.ne lə bul.vaʁ pɥi la tʁwa.zjɛm a ɡoʃ tʁa.vɛʁ.se sɛ.tɑ̃ fas/', 'pruh-NAY luh bool-VAR pwee lah trwah-ZYEM ah GOHSH trah-vehr-SAY seh-tahⁿ FAHSS',
    'chain4', 'passerby', 4, 'sentence', SV, 'One spoken joint out of three. Counting puis gives you two moves and there are four.'),
  R(186, 'Continuez jusqu\'au rond-point, deuxième sortie, longez le canal, c\'est là.', 'On to the roundabout, second exit, follow the canal, it is there.', '/kɔ̃.ti.nɥe ʒys.ko ʁɔ̃.pwɛ̃ dø.zjɛm sɔʁ.ti lɔ̃.ʒe lə ka.nal sɛ la/', 'kohⁿ-tee-nü-AY zhüs-koh rohⁿ-PWEHⁿ deu-ZYEM sor-TEE lohⁿ-ZHAY luh ka-NAL seh LAH',
    'chain4', 'passerby', 4, 'sentence', SV, 'Deuxième sortie with no verb and no article on sortie. Four moves in eleven words.'),
  R(187, 'Descendez ici, traversez la rue, prenez la première à droite, continuez.', 'Get off here, cross the street, first right, carry on.', '/de.sɑ̃.de i.si tʁa.vɛʁ.se la ʁy pʁə.ne la pʁə.mjɛʁ a dʁwat kɔ̃.ti.nɥe/', 'day-sahⁿ-DAY ee-SEE trah-vehr-SAY lah RÜ pruh-NAY lah pruh-MYEHR ah DRWAHT kohⁿ-tee-nü-AY',
    'chain4', 'passerby', 4, 'sentence', SV, 'Said by a driver or another passenger rather than by somebody in the street. Same shape, different speaker.'),
  R(188, 'Passez devant l\'église, tournez à gauche, allez tout droit, c\'est là.', 'Past the church, turn left, go straight, it is there.', '/pa.se də.vɑ̃ le.ɡliz tuʁ.ne a ɡoʃ a.le tu dʁwa sɛ la/', 'pah-SAY duh-VAHⁿ lay-GLEEZ toor-NAY ah GOHSH ah-LAY too DRWAH seh LAH',
    'chain4', 'passerby', 4, 'sentence', SV, 'PASS, TURN, GO, ARRIVE. The landmark comes first here, which is where a learner expects the endpoint.'),
  R(189, 'Remontez la rue, traversez le carrefour, première à droite, c\'est après.', 'Up the street, across the crossroads, first right, it is after.', '/ʁə.mɔ̃.te la ʁy tʁa.vɛʁ.se lə kaʁ.fuʁ pʁə.mjɛʁ a dʁwat sɛ.ta.pʁɛ/', 'ruh-mohⁿ-TAY lah RÜ trah-vehr-SAY luh kar-FOOR pruh-MYEHR ah DRWAHT seh-tah-PREH',
    'chain4', 'passerby', 4, 'sentence', SV, 'Première with no article at all. Under speed the ordinal is one unstressed syllable between two content words.'),
  R(190, 'Allez tout droit, deuxième à gauche, passez la banque, c\'est en face.', 'Straight on, second left, past the bank, it is opposite.', '/a.le tu dʁwa dø.zjɛm a ɡoʃ pa.se la bɑ̃k sɛ.tɑ̃ fas/', 'ah-LAY too DRWAH deu-ZYEM ah GOHSH pah-SAY lah BAHⁿK seh-tahⁿ FAHSS',
    'chain4', 'passerby', 4, 'sentence', SV, 'Twelve words, four moves, no joint you can hear. This is the rung-4 shape the trap drill gates on.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK E · .191 to .200 — ORDINALS IN A DIRECTION.
 *
 *  The unit's second Owns, and ZERO published rows carry it. `sons.nombres`
 *  holds the bare ordinals; nothing anywhere puts one inside an instruction.
 * ────────────────────────────────────────────────────────────────────────── */

const E_ROWS: readonly Row[] = [
  R(191, 'la première à droite', 'the first on the right', '/la pʁə.mjɛʁ a dʁwat/', 'lah pruh-MYEHR ah DRWAHT',
    'ordinal', 'neutral', 1, 'phrase', PV, 'The noun rue is dropped and the ordinal carries it. Zero published rows had this shape.'),
  R(192, 'la deuxième à droite', 'the second on the right', '/la dø.zjɛm a dʁwat/', 'lah deu-ZYEM ah DRWAHT',
    'ordinal', 'neutral', 1, 'phrase', PV, 'Two unstressed syllables between la and à. The half of the pair that goes missing.'),
  R(193, 'la troisième à droite', 'the third on the right', '/la tʁwa.zjɛm a dʁwat/', 'lah trwah-ZYEM ah DRWAHT',
    'ordinal', 'neutral', 1, 'phrase', PV, 'Troisième is longer and survives speed better than deuxième, which is why the confusion runs one way.'),
  R(194, 'la deuxième à gauche', 'the second on the left', '/la dø.zjɛm a ɡoʃ/', 'lah deu-ZYEM ah GOHSH',
    'ordinal', 'neutral', 1, 'phrase', PV, 'The same ordinal with the other side. Getting the ordinal right and the side wrong is a different street.'),
  R(195, 'la première rue à gauche', 'the first street on the left', '/la pʁə.mjɛʁ ʁy a ɡoʃ/', 'lah pruh-MYEHR RÜ ah GOHSH',
    'ordinal', 'neutral', 1, 'phrase', PV, 'With rue put back in. The full form is easier and is not what is said in a hurry.'),
  R(196, 'Ce n\'est pas la première, c\'est la deuxième.', 'It is not the first, it is the second.', '/sə nɛ pa la pʁə.mjɛʁ sɛ la dø.zjɛm/', 'suh neh pah lah pruh-MYEHR seh lah deu-ZYEM',
    'ordinal', 'passerby', 1, 'sentence', SV, `A correction, which is what a passer-by says when they see you set off wrong. Negation is ${unitRef('a1.18')}\'s and is used here, not taught.`),
  R(197, 'Prenez la troisième, pas la deuxième.', 'Take the third, not the second.', '/pʁə.ne la tʁwa.zjɛm pa la dø.zjɛm/', 'pruh-NAY lah trwah-ZYEM pah lah deu-ZYEM',
    'ordinal', 'passerby', 1, 'sentence', SV, 'Both ordinals in one line so the contrast is audible rather than described.'),
  R(198, 'C\'est la deuxième rue, après le feu.', 'It is the second street, after the lights.', '/sɛ la dø.zjɛm ʁy a.pʁɛ lə fø/', 'seh lah deu-ZYEM RÜ ah-PREH luh FEU',
    'ordinal', 'passerby', 1, 'sentence', SV, 'The ordinal is counted from the lights, not from where you stand. Nothing in the sentence says so.'),
  R(199, 'Comptez deux rues, puis tournez à droite.', 'Count two streets, then turn right.', '/kɔ̃.te dø ʁy pɥi tuʁ.ne a dʁwat/', 'kohⁿ-TAY deu RÜ pwee toor-NAY ah DRWAHT',
    'ordinal', 'passerby', 2, 'sentence', SV, 'A cardinal doing an ordinal\'s job. Deux rues then turn is the third street, not the second, and that off-by-one is real.'),
  R(200, 'La première est un sens unique, prenez la deuxième.', 'The first is one way, take the second.', '/la pʁə.mjɛʁ ɛ.tœ̃ sɑ̃s y.nik pʁə.ne la dø.zjɛm/', 'lah pruh-MYEHR eh-tuhⁿ sahⁿss ü-NEEK pruh-NAY lah deu-ZYEM',
    'ordinal', 'passerby', 1, 'sentence', SV, 'Le sens unique is published at fr.a2.transports-quotidiens.008 as a headword and never in a reason.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK F · .201 to .216 — PUBLIC TRANSPORT ANNOUNCEMENTS.
 *
 *  ZERO exist anywhere in 48,325 published rows. Re-measured directly:
 *  `à destination de` 0, `en provenance de` 0, `attention au départ` 0,
 *  `voie numéro` 0, `voie douze` 0. DELF A2's CO syllabus names "annonces dans
 *  un lieu public" as a genre, so this tranche is the band's, not just this
 *  unit's: a2.29 (hotel PA) and a2.31 can lift it whole.
 *
 *  THE GENRE IS SIMULATED, NOT THE DEGRADATION. `tts.speak` takes rate and
 *  voice only: no filter, no EQ, no noise bed, and `SceneSetting.ambience` is
 *  declared and read by nothing. An announcement is recognisable by register
 *  and speed, so these carry a fronted destination, a number read as a block,
 *  and a nominalised delay, and the section plays them at speeds [1.15, 1, 0.75].
 * ────────────────────────────────────────────────────────────────────────── */

const F_ROWS: readonly Row[] = [
  R(201, 'Le train à destination de Lyon partira voie douze.', 'The train for Lyon will depart from platform twelve.', '/lə tʁɛ̃ a dɛs.ti.na.sjɔ̃ də ljɔ̃ paʁ.ti.ʁa vwa duz/', 'luh TREHⁿ ah des-tee-nah-SYOHⁿ duh lee-OHⁿ par-tee-RA vwah DOOZ',
    'announcement', 'announcer', 0, 'sentence', SV, 'The canonical shape: destination fronted, then the platform as a bare number. Zero rows in the corpus had it.'),
  R(202, 'Le train en provenance de Marseille entre en gare.', 'The train from Marseille is arriving.', '/lə tʁɛ̃ ɑ̃ pʁɔv.nɑ̃s də maʁ.sɛj ɑ̃tʁ ɑ̃ ɡaʁ/', 'luh TREHⁿ ahⁿ prov-NAHⁿSS duh mar-SEY ahⁿtr ahⁿ GAHR',
    'announcement', 'announcer', 0, 'sentence', SV, 'En provenance de is arriving and à destination de is leaving. Four syllables apart and opposite platforms.'),
  R(203, 'Attention au départ, voie quatorze.', 'Stand clear, departure from platform fourteen.', '/a.tɑ̃.sjɔ̃ o de.paʁ vwa ka.tɔʁz/', 'ah-tahⁿ-SYOHⁿ oh day-PAR vwah ka-TORZ',
    'announcement', 'announcer', 0, 'sentence', SV, 'The doors-closing warning. Attention here is a warning, not the noun a1 taught.'),
  R(204, 'Le train aura un retard d\'environ vingt minutes.', 'The train will be about twenty minutes late.', '/lə tʁɛ̃ o.ʁa œ̃ ʁə.taʁ dɑ̃.vi.ʁɔ̃ vɛ̃ mi.nyt/', 'luh TREHⁿ oh-RA uhⁿ ruh-TAR dahⁿ-vee-ROHⁿ vehⁿ mee-NÜT',
    'announcement', 'announcer', 0, 'sentence', SV, 'A nominalised delay: aura un retard rather than sera en retard. The noun is what makes it sound official.'),
  R(205, 'Éloignez-vous de la bordure du quai, s\'il vous plaît.', 'Please stand back from the platform edge.', '/e.lwa.ɲe vu də la bɔʁ.dyʁ dy kɛ sil vu plɛ/', 'ay-lwah-NYAY VOO duh lah bor-DÜR dü KEH seel voo PLEH',
    'announcement', 'announcer', 0, 'sentence', SV, 'A safety instruction using the same whole-form shape as a direction. It is an instruction to obey, not a route.'),
  R(206, 'Le train à destination de Bordeaux part dans cinq minutes.', 'The train for Bordeaux leaves in five minutes.', '/lə tʁɛ̃ a dɛs.ti.na.sjɔ̃ də bɔʁ.do paʁ dɑ̃ sɛ̃k mi.nyt/', 'luh TREHⁿ ah des-tee-nah-SYOHⁿ duh bor-DOH par dahⁿ sehⁿk mee-NÜT',
    'announcement', 'announcer', 0, 'sentence', SV, 'The same frame with a time instead of a platform. The frame is fixed and what follows it is not.'),
  R(207, 'Votre correspondance pour Nantes est voie trois.', 'Your connection for Nantes is on platform three.', '/vɔtʁ kɔ.ʁɛs.pɔ̃.dɑ̃s puʁ nɑ̃t ɛ vwa tʁwa/', 'VOH-truh ko-res-pohⁿ-DAHⁿSS poor NAHⁿT eh vwah TRWAH',
    'announcement', 'announcer', 0, 'sentence', SV, 'La correspondance is published as a headword at .015 and appears in an announcement nowhere.'),
  R(208, 'Prochain arrêt, Châtelet. Correspondance ligne quatre.', 'Next stop, Châtelet. Change here for line four.', '/pʁɔ.ʃɛ̃ a.ʁɛ ʃat.lɛ kɔ.ʁɛs.pɔ̃.dɑ̃s liɲ katʁ/', 'pro-SHEHⁿ ah-REH shat-LEH ko-res-pohⁿ-DAHⁿSS leeny KATR',
    'announcement', 'announcer', 0, 'sentence', SV, 'The metro version: two fragments, no verb in either. A line number is read as a bare cardinal.'),
  R(209, 'Ce train ne dessert pas la gare de Massy.', 'This train does not stop at Massy station.', '/sə tʁɛ̃ nə de.sɛʁ pa la ɡaʁ də ma.si/', 'suh TREHⁿ nuh day-SEHR pah lah GAHR duh mah-SEE',
    'announcement', 'announcer', 0, 'sentence', SV, 'Desservir is the announcement word for stopping at. A negative announcement is the one that costs you a journey.'),
  R(210, 'Le train pour Rennes est annoncé avec dix minutes de retard.', 'The train to Rennes is announced ten minutes late.', '/lə tʁɛ̃ puʁ ʁɛn ɛ.ta.nɔ̃.se a.vɛk di mi.nyt də ʁə.taʁ/', 'luh TREHⁿ poor REN eh-tah-nohⁿ-SAY ah-vek dee mee-NÜT duh ruh-TAR',
    'announcement', 'announcer', 0, 'sentence', SV, 'Est annoncé avec is the station\'s formula for a delay and means nothing outside a station.'),
  R(211, 'Terminus, tout le monde descend.', 'End of the line, everybody off.', '/tɛʁ.mi.nys tu lə mɔ̃d de.sɑ̃/', 'ter-mee-NÜSS too luh MOHⁿD day-SAHⁿ',
    'announcement', 'announcer', 0, 'sentence', SV, 'Five words that end a journey. Descend here is the same verb the direction chains use for getting off.'),
  R(212, 'En raison d\'un incident, le trafic est interrompu.', 'Because of an incident, service is suspended.', '/ɑ̃ ʁɛ.zɔ̃ dœ̃ ɛ̃.si.dɑ̃ lə tʁa.fik ɛ.tɛ̃.te.ʁɔ̃.py/', 'ahⁿ reh-ZOHⁿ duhⁿ ehⁿ-see-DAHⁿ luh trah-FEEK eh-tehⁿ-tay-rohⁿ-PÜ',
    'announcement', 'announcer', 0, 'sentence', SV, 'The formula that means your line has stopped. En raison de is the announcement register for parce que.'),
  R(213, 'Le prochain métro passera dans quatre minutes.', 'The next metro will come in four minutes.', '/lə pʁɔ.ʃɛ̃ me.tʁo pa.sə.ʁa dɑ̃ katʁ mi.nyt/', 'luh pro-SHEHⁿ may-TROH pah-suh-RA dahⁿ katr mee-NÜT',
    'announcement', 'announcer', 0, 'sentence', SV, 'Passera rather than arrivera. The train passes through; it does not arrive for you.'),
  R(214, 'Attention à la marche en descendant du train.', 'Mind the step when getting off the train.', '/a.tɑ̃.sjɔ̃ a la maʁʃ ɑ̃ de.sɑ̃.dɑ̃ dy tʁɛ̃/', 'ah-tahⁿ-SYOHⁿ ah lah MARSH ahⁿ day-sahⁿ-DAHⁿ dü TREHⁿ',
    'announcement', 'announcer', 0, 'sentence', SV, 'The French of mind the gap. La marche is the step, not walking, and the two are the same word.'),
  R(215, 'Les portes vont se fermer, éloignez-vous.', 'The doors are closing, stand back.', '/le pɔʁt vɔ̃ sə fɛʁ.me e.lwa.ɲe vu/', 'lay PORT vohⁿ suh fer-MAY ay-lwah-NYAY VOO',
    'announcement', 'announcer', 0, 'sentence', SV, `Two moves in six words, both instructions. The futur proche is ${unitRef('a2.01')}\'s and is used, not taught.`),
  R(216, 'Le train à destination de Lille partira du quai numéro huit.', 'The train for Lille will leave from platform eight.', '/lə tʁɛ̃ a dɛs.ti.na.sjɔ̃ də lil paʁ.ti.ʁa dy kɛ ny.me.ʁo ɥit/', 'luh TREHⁿ ah des-tee-nah-SYOHⁿ duh LEEL par-tee-RA dü KEH nü-may-ROH ÜEET',
    'announcement', 'announcer', 0, 'sentence', SV, 'Quai numéro rather than voie. Both mean platform and a station uses whichever it uses.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK G · .217 to .230 — THE GUICHET, both halves.
 *
 *  a2.26 owns the money transaction. This unit owns the ticket as an object of
 *  a journey, so nothing here counts change or names a price in figures.
 *  a2.29 owns the register ladder, so these are two OPENINGS as two shapes and
 *  not an escalation. `je voudrais` appears once, as unanalysed lexis.
 *  `pourriez-vous` appears nowhere: it is a2.29's.
 * ────────────────────────────────────────────────────────────────────────── */

const G_ROWS: readonly Row[] = [
  // The agent's half. Seven rows, and not one of them existed.
  R(217, 'Vous partez quand ?', 'When are you travelling?', '/vu paʁ.te kɑ̃/', 'voo par-TAY KAHⁿ',
    'counter', 'agent', 0, 'phrase', PV, 'The counter opens with a question about time, not about a ticket. Answering with a destination leaves him waiting.'),
  R(218, 'Aller simple ou aller-retour ?', 'One way or return?', '/a.le sɛ̃pl u a.le ʁə.tuʁ/', 'ah-LAY SEHⁿPL oo ah-lay-ruh-TOOR',
    'counter', 'agent', 0, 'phrase', PV, 'Both halves are published as a1 headwords and neither has ever been asked as a question.'),
  R(219, 'Vous voyagez seul ?', 'Are you travelling alone?', '/vu vwa.ja.ʒe sœl/', 'voo vwah-yah-ZHAY SEUL',
    'counter', 'agent', 0, 'phrase', PV, 'Asked to price the ticket. It sounds personal and it is administrative.'),
  R(220, 'Il y a un train à quatorze heures dix.', 'There is a train at ten past two.', '/i.lja œ̃ tʁɛ̃ a ka.tɔʁz œʁ dis/', 'ee-lyah uhⁿ TREHⁿ ah ka-TORZ eur DEESS',
    'counter', 'agent', 0, 'sentence', SV, `The twenty-four hour clock is ${unitRef('a1.12')}\'s and arrives here inside somebody else\'s turn, at speed.`),
  R(221, 'C\'est complet, il reste des places à seize heures.', 'That one is full, there are seats at four.', '/sɛ kɔ̃.plɛ il ʁɛst de plas a sɛz œʁ/', 'seh kohⁿ-PLEH eel rest day PLAHSS ah sez EUR',
    'counter', 'agent', 0, 'sentence', SV, 'The refusal and the alternative in one breath. A learner listening for oui or non hears neither.'),
  R(222, 'Vous avez une carte de réduction ?', 'Do you have a discount card?', '/vu.za.ve yn kaʁt də ʁe.dyk.sjɔ̃/', 'voo-zah-VAY ün KART duh ray-dük-SYOHⁿ',
    'counter', 'agent', 0, 'phrase', PV, 'La réduction is published at .012 as a headword. The question it belongs to is not.'),
  R(223, 'Le train part voie neuf, dans vingt minutes.', 'The train leaves from platform nine, in twenty minutes.', '/lə tʁɛ̃ paʁ vwa nœf dɑ̃ vɛ̃ mi.nyt/', 'luh TREHⁿ par vwah NEUF dahⁿ vehⁿ mee-NÜT',
    'counter', 'agent', 0, 'sentence', SV, 'The agent says the platform once, quietly, as he hands over the ticket. It is the announcement register spoken at a counter.'),

  // The learner's half. Short, because at a counter it is short.
  R(224, 'Bonjour. Un aller-retour pour Lyon, s\'il vous plaît.', 'Hello. A return to Lyon, please.', '/bɔ̃.ʒuʁ œ̃.na.le ʁə.tuʁ puʁ ljɔ̃ sil vu plɛ/', 'bohⁿ-ZHOOR uhⁿ-nah-lay-ruh-TOOR poor lee-OHⁿ seel voo PLEH',
    'counter', 'learner', 0, 'sentence', SD, 'THE COUNTER OPENING: greeting first, then the transaction, no verb of demand. Said to a passer-by it is nonsense.'),
  R(225, 'Pardon, madame. Je cherche la gare, s\'il vous plaît.', 'Excuse me. I am looking for the station, please.', '/paʁ.dɔ̃ ma.dam ʒə ʃɛʁʃ la ɡaʁ sil vu plɛ/', 'par-DOHⁿ mah-DAM zhuh SHERSH lah GAHR seel voo PLEH',
    'counter', 'learner', 0, 'sentence', SD, 'THE STREET OPENING: apology first, then the goal. Said at a counter it reads as lost rather than transacting.'),
  R(226, 'Un aller simple pour Nantes, s\'il vous plaît.', 'A single to Nantes, please.', '/œ̃.na.le sɛ̃pl puʁ nɑ̃t sil vu plɛ/', 'uhⁿ-nah-LAY SEHⁿPL poor NAHⁿT seel voo PLEH',
    'counter', 'learner', 0, 'sentence', SV, 'Elliptical, with no verb. The counter form is shorter than the street form and that is the whole contrast.'),
  R(227, 'Je voudrais un billet pour demain matin.', 'I would like a ticket for tomorrow morning.', '/ʒə vu.dʁɛ œ̃ bi.jɛ puʁ də.mɛ̃ ma.tɛ̃/', 'zhuh voo-DREH uhⁿ bee-YEH poor duh-MEHⁿ ma-TEHⁿ',
    'counter', 'learner', 0, 'sentence', SV, `Je voudrais, stored whole, as a softer je veux. ${Cap(unitRef('a2.13'))} shipped the form; the family that explains it comes later and not here.`),
  R(228, 'C\'est quel quai, s\'il vous plaît ?', 'Which platform is it, please?', '/sɛ kɛl kɛ sil vu plɛ/', 'seh kel KEH seel voo PLEH',
    'counter', 'learner', 0, 'phrase', PV, `Quel is ${unitRef('a1.20')}\'s question word. The useful part here is that this is the question you ask AFTER he has already told you.`),
  R(229, 'Le prochain train est à quelle heure ?', 'What time is the next train?', '/lə pʁɔ.ʃɛ̃ tʁɛ̃ ɛ.ta kɛ.lœʁ/', 'luh pro-SHEHⁿ TREHⁿ eh-tah keh-LEUR',
    'counter', 'learner', 0, 'sentence', SV, 'Rising intonation on a full sentence. TCF EO caps a candidate who produces only one question form, which is why the scenario carries three.'),
  R(230, 'Pardon, je cherche l\'arrêt du bus quarante-deux.', 'Sorry, I am looking for the number forty-two bus stop.', '/paʁ.dɔ̃ ʒə ʃɛʁʃ la.ʁɛ dy bys ka.ʁɑ̃t dø/', 'par-DOHⁿ zhuh SHERSH lah-REH dü büss ka-rahⁿt-DEU',
    'counter', 'learner', 0, 'sentence', SV, 'The street opening with a bus number in it. A number inside your own question is the one you will have to repeat.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK H · .231 to .234 — THE TARGETED REPAIR. THIS UNIT'S OWN.
 *
 *  a2.07 owns the repair MOVE and this unit authors none of it. What this unit
 *  adds is the state a2.07 does not produce: you caught three moves of four.
 *  A targeted question gets you the missing chunk; a generic one gets you the
 *  whole sentence again at the same speed. These are direction questions built
 *  out of this unit's own ordinal content, not repair formulae.
 *
 *  The apply script proves by FOLD that none of these is one of a2.07's six.
 * ────────────────────────────────────────────────────────────────────────── */

const H_ROWS: readonly Row[] = [
  R(231, 'C\'est la deuxième ou la troisième ?', 'Is it the second or the third?', '/sɛ la dø.zjɛm u la tʁwa.zjɛm/', 'seh lah deu-ZYEM oo lah trwah-ZYEM',
    'repair-targeted', 'learner', 0, 'sentence', SD, 'The unit\'s signature line. It names the one thing you missed and gets back four words instead of fourteen.'),
  R(232, 'À gauche ou à droite, pardon ?', 'Left or right, sorry?', '/a ɡoʃ u a dʁwat paʁ.dɔ̃/', 'ah GOHSH oo ah DRWAHT par-DOHⁿ',
    'repair-targeted', 'learner', 0, 'sentence', SV, `Pardon on the end rather than the front. It is ${unitRef('a2.07')}\'s rung 1 used as a tag, which costs less than using it alone.`),
  R(233, 'Après le pont ou avant ?', 'After the bridge or before?', '/a.pʁɛ lə pɔ̃ u a.vɑ̃/', 'ah-PREH luh POHⁿ oo ah-VAHⁿ',
    'repair-targeted', 'learner', 0, 'sentence', SV, `The joint is what you missed, so the joint is what you ask about. Avant is ${unitRef('a2.18')}\'s and is used here, not taught.`),
  R(234, 'C\'est quelle rue, pardon ?', 'Which street, sorry?', '/sɛ kɛl ʁy paʁ.dɔ̃/', 'seh kel RÜ par-DOHⁿ',
    'repair-targeted', 'learner', 0, 'phrase', PV, 'For when you held the moves and lost the name. Narrower than rung 5 and it does the same job.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK I · .235 to .238 — en/à WITH TRANSPORT MODES.
 *
 *  Measured: exactly TWO bare mode phrases are published anywhere
 *  (`à pied` in rp-voyage, `en avion` in liaisons). These four are the gap.
 *  THE RULE IS NOT RESTATED. `fr.a1.deplacements.014` already says it and is
 *  imported and quoted. a2.04 and a1.21 own the preposition system and are
 *  named rather than reteaught.
 * ────────────────────────────────────────────────────────────────────────── */

const I_ROWS: readonly Row[] = [
  R(235, 'en bus', 'by bus', '/ɑ̃ bys/', 'ahⁿ BÜSS',
    'mode', 'neutral', 0, 'phrase', PV, `A closed vehicle takes en. This is the preposition en; the pronoun en is ${unitRef('a2.25')}\'s and does not appear in this lesson.`),
  R(236, 'en voiture', 'by car', '/ɑ̃ vwa.tyʁ/', 'ahⁿ vwah-TÜR',
    'mode', 'neutral', 0, 'phrase', PV, 'Closed, so en. You are inside it, which is the whole of the rule fr.a1.deplacements.014 states.'),
  R(237, 'à vélo', 'by bike', '/a ve.lo/', 'ah vay-LOH',
    'mode', 'neutral', 0, 'phrase', PV, 'Open, so à. You sit on it rather than in it and the preposition follows.'),
  R(238, 'en métro', 'by metro', '/ɑ̃ me.tʁo/', 'ahⁿ may-TROH',
    'mode', 'neutral', 0, 'phrase', PV, 'Closed, so en, even though the metro is a network rather than a vehicle you own.'),
];

/* ──────────────────────────────────────────────────────────────────────────
 *  BLOCK J · quebec-et-francophonie .201 to .202 — RECOGNITION ONLY.
 *
 *  Collation C3, confirmed by Paul. At most one card, at most two rows, and
 *  NEITHER carries voiceflash, so neither can reach a speak drill even if a
 *  later edit names it in one. `l'autobus` already exists and is imported.
 *  No brand names, no fare products, no prices (design R9).
 * ────────────────────────────────────────────────────────────────────────── */

const QC_ROWS_LIST: readonly Row[] = [
  RQ(201, 'embarquer', 'to board', '/ɑ̃.baʁ.ke/', 'ahⁿ-bar-KAY',
    'quebec', 'neutral', 0, 'word', RC,
    'Quebec for monter. Recognition only: monter is the France form and it is the one every drill in this lesson scores.'),
  RQ(202, 'la passe', 'the transit pass', '/la pas/', 'lah PAHSS',
    'quebec', 'neutral', 0, 'word', RC,
    'Quebec for l\'abonnement. Structural vocabulary rather than a fare product, so it does not age with the operator.'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE EXPORTS
 * ══════════════════════════════════════════════════════════════════════════ */

export const TRANSPORT_ROWS: readonly Row[] = [
  ...A_ROWS, ...B_ROWS, ...C_ROWS, ...D_ROWS,
  ...E_ROWS, ...F_ROWS, ...G_ROWS, ...H_ROWS, ...I_ROWS,
];
export const QC_ROWS: readonly Row[] = QC_ROWS_LIST;
/** Everything measured against the band's voice floor. The Quebec rows are
 *  recognition vocabulary with no speaker and are excluded from both halves. */
export const ROWS: readonly Row[] = TRANSPORT_ROWS;
export const ALL_ROWS: readonly Row[] = [...TRANSPORT_ROWS, ...QC_ROWS];

/** Collation §1.5. The other party is the passer-by, the announcer and the
 *  counter agent. Measured, this build sits at roughly 80%. */
export const OTHER_VOICE_FLOOR = 0.4;
export const OTHER_VOICES: readonly Voice[] = ['passerby', 'announcer', 'agent'];

/** The dictée's six, all word-mode (>16 letters, >1 word) and none carrying an
 *  apostrophe or a hyphen, because `normalizeFr` strips both and an item whose
 *  only difficulty is one tests nothing. */
export const DICTEE_IDS = [T(135), T(140), T(151), T(153), T(155), T(162)];
