// a2.29.l1 « À l'hôtel » — the corpus, the constants and the decisions.
// Trail seq 28, the FIFTH unit of the A2 situations band (seq 24 to 31), and
// the one a2.30, a2.31 and a2.32 cite for the register ladder.
//
// ════════════════════════════════════════════════════════════════════════════
//  THE HEADLINE. THE HOTEL NOUNS ARE FINISHED AND THE ARGUMENT IS MISSING.
// ════════════════════════════════════════════════════════════════════════════
//
// Measured against Postgres 2026-08-16, before this build wrote anything:
//
//   hebergement    312 published /   0 in seed        73 at a2 (.001-.073)
//
// The seed shows ZERO. Anyone measuring this unit against `seed.json` would
// conclude the hotel corpus does not exist and author a hundred duplicate rows.
// It exists, it is finished, and every hotel noun this lesson needs is already
// published: l'hôtel .001, la chambre .002, la réception .003, la clé .015,
// l'ascenseur .016, l'étage .017, le rez-de-chaussée .018, la réservation .019,
// la salle de bain .021, la serviette .027, l'oreiller .028, la climatisation
// .026, le balcon .034, le lavabo .037, la douche .053. This build authors
// ZERO hotel nouns.
//
// What does not exist is the second half of every argument. Measured:
//
//   parler au responsable        0 rows, any level
//   ça ne marche pas             0 rows, any level
//   désolé de vous déranger      0 rows, any level
//   vous avez une réservation    0 rows, any level
//   ce serait possible de        0 rows, any level
//
// Five zero-row claims, five confirmed. The corpus authored the learner's half
// of every situation and left the middle of every argument out. That is what
// this unit is for, and it is why the band cannot be built by importing.
//
// ════════════════════════════════════════════════════════════════════════════
//  FOUR CANONICAL LINES THE PROMPT ASKED ME TO AUTHOR ALREADY EXIST
// ════════════════════════════════════════════════════════════════════════════
//
// The probe found four rows the prompt's own corpus plan would have duplicated.
// All four are IMPORTED rather than authored, and named in IMPORTED below:
//
//   fr.a2.bricolage.041     Il y a un problème avec la douche.
//   fr.a2.hebergement.068   Il y a un problème avec l'eau chaude dans la salle de bain.
//   fr.a2.hebergement.062   Le chauffage ne fonctionne pas bien dans cette pièce.
//   fr.a1.au-restaurant.209 Puis-je avoir une serviette, s'il vous plaît ?
//
// `fr.a2.bricolage.041` matters most: it is the BARE report, and this lesson's
// rung 1 is the SOFTENED one. Importing it beside the authored row turns what
// would have been a duplicate into the lesson's cleanest minimal pair.
//
// ════════════════════════════════════════════════════════════════════════════
//  AND THE QUEBEC CARD AUTHORS ZERO ROWS, WHICH THE PROMPT DID NOT EXPECT
// ════════════════════════════════════════════════════════════════════════════
//
// The prompt budgets ONE authored `word` row for the Quebec divergence. The
// fold sweep found the divergence ALREADY PUBLISHED, in the theme built for it:
//
//   fr.b1.quebec-et-francophonie.025   le déjeuner   breakfast (Quebec usage)
//   fr.b1.quebec-et-francophonie.026   le dîner      lunch (Quebec usage)
//   fr.b1.quebec-et-francophonie.027   le souper     supper (Quebec usage)
//   fr.a2.quebec-et-francophonie.121   Le matin, je prends un déjeuner avec du sirop d'érable.
//
// `le déjeuner` exists FIVE times across five themes. Authoring a sixth is the
// "ninth `la chambre`" hazard by another name. So this build authors ZERO
// Quebec rows: the card carries its own prose and cites
// `fr.a2.quebec-et-francophonie.121`, which is at a2 and therefore leaks no
// level. The b1 trio is named as prior exposure and released by nothing.
//
// ════════════════════════════════════════════════════════════════════════════
//  ONE ROW IS A DELIBERATE CROSS-THEME TWIN, ON a2.07's PRECEDENT
// ════════════════════════════════════════════════════════════════════════════
//
// `Excusez-moi de vous déranger.` already exists as `fr.a1.expressions-frequentes.002`.
// It is imported AND authored here, and that is a decision rather than a miss:
//
//   * the published row carries `drills = {dictation}` and NOTHING else. It
//     cannot be released by a `deckTranche` (which needs `flashcard`) and it
//     cannot be reached by `practice` (which needs `voiceflash`), so it cannot
//     do the rung-1 opener's job.
//   * the ladder is this band's citable block, exactly parallel to a2.07's
//     repair block, and `04-REPAIR-MOVE-IDS.md` settles that such a block must
//     be contiguous, single-theme and single-owner. a2.07 authored six rows
//     with exact twins in other themes for this reason.
//   * cross-theme duplication is settled legal precedent (collation §7.5:
//     `l'addition` exists in both `cafe` and `au-restaurant` and is not to be
//     "fixed"). The rule the flashcard hub enforces is INTRA-theme, and the
//     intra-theme fold sweep is clean.
//
// The twin is named here, imported, and reported. It is not "fixed".
//
// ════════════════════════════════════════════════════════════════════════════
//  THE RESPELLING CONVENTION IN THIS THEME IS THE OLD ONE, AND THIS BUILD
//  DOES NOT FIX IT
// ════════════════════════════════════════════════════════════════════════════
//
// All 53 word rows already published in `hebergement` close their nasals with a
// PLAIN N: `lah SHAHN-bruh`, `lah ray-sehp-SYOHN`, `luh ray-duh-shoh-SAY`.
// The house convention (invariants §3) is the superscript ⁿ, and the A2 band
// authors it. Those rows are published, shipped, and the suite is green on
// them; repairing 53 rows belongs to a repair pass, not to a lesson build, and
// a1.08 and a1.09 both shipped one as its own piece of work.
//
// So: this build authors ⁿ, touches not one existing row, and scopes its nasal
// guard to ITS OWN ids. An absence claim here is about this lesson and never
// about the bundle. Stated rather than papered over, per invariants §7.
//
// WHERE ROWS GO. `hebergement` from .074. NOT ONE ROW INTO `voyage`: it is a
// phantom with 0 rows and no `themeMeta` entry, and the spine re-map (band
// blocking step 2) already points this unit at `hebergement` in all three
// places.
import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export const UNIT = {
  id: 'a2.29',
  seq: 28,
  level: 'a2' as const,
  title: 'At the Hotel',
  sub: "À l'hôtel",
  canDo: 'Can check in, make a request and raise a problem politely',
  prereqUnitIds: ['a2.13'],
} as const;

export const LESSON_ID = 'a2.29.l1';
export const THEME = 'hebergement';

/** Measured 2026-08-16, before this build wrote anything. */
export const THEME_ROWS_BEFORE = 312;  // published, all levels
export const THEME_A2_BEFORE = 73;     // published, a2 slice
export const THEME_SEED_BEFORE = 0;    // present in seed.json v50

/** THE ID BLOCK. Scoped to the BLOCK, never to the theme prefix, and the row
 *  COUNT is re-checked after the apply rather than the maximum: a concurrent
 *  build can land BELOW your top. That is the a1.19 / a1.20 collision and it
 *  has now happened twice. */
export const ID_FIRST = 74;
export const ID_LAST = 132;

export const H = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §A. THE OWNS: THE LADDER, AND THE REFRAME
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: runnable mid-sentence, predicts the error, actionable while
 *  speaking. Carried VERBATIM across five sections and the roundup.
 *
 *  Rejected, and recorded because the report asks for it:
 *    "Name the problem, not the person"  — complaint only, leaves check-in homeless
 *    "Ask twice before you ask for the manager" — advice, not a rule
 *    "The polite word goes at the front" — false: Excusez-moi does, s'il vous plaît does not */
export const REFRAME = 'Take the person out of the sentence.';

/** THE THREE RUNG NAMES. FROZEN, and the contract binds a2.30, a2.31 and a2.32.
 *
 *  They quote these three strings VERBATIM. A paraphrase is a second ladder.
 *  They reuse the rung rows by itemId and author no rung lines of their own.
 *  They may add their own column with their own vocabulary. They may not rename
 *  a rung, add a fourth, or reorder them. */
export const RUNG_1 = 'Ask once, softly.';
export const RUNG_2 = 'Say it again, without the person.';
export const RUNG_3 = 'Ask for the person who can fix it.';
export const RUNGS = [RUNG_1, RUNG_2, RUNG_3] as const;

/** The three MOVES, which are the ladder's columns. */
export const MOVE_REQUEST = 'the request';
export const MOVE_FAULT = 'the fault report';
export const MOVE_ESCALATE = 'the escalation';

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. WHAT THIS UNIT DOES NOT OWN
 * ══════════════════════════════════════════════════════════════════════════ */

/** a2.07 owns the repair move for all eight units (collation §1.6, §7.1).
 *  This unit authors ZERO repair rows and cites these six by itemId. The block
 *  is FROZEN: six rows, `au-restaurant`, contiguous, domain-neutral, ordered by
 *  face cost. `04-REPAIR-MOVE-IDS.md` is the contract. */
export const REPAIR_UNIT = 'a2.07';
export const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
] as const;

/** The six `fr` strings, so a fold sweep can prove this build authored none of
 *  them under different punctuation. */
export const REPAIR_FR = [
  'Pardon ?',
  "Vous pouvez répéter, s'il vous plaît ?",
  "Plus lentement, s'il vous plaît.",
  "Je n'ai pas bien compris.",
  "Qu'est-ce que ça veut dire ?",
  "Vous pouvez me l'écrire, s'il vous plaît ?",
] as const;

export const MODAL_UNIT = 'a2.13';   // vouloir, pouvoir, devoir. This unit's prereq.
export const MONEY_UNIT = 'a2.26';   // price and change reception.
export const TIME_UNIT = 'a2.18';    // depuis. Used, never taught.
export const ALPHABET_UNIT = 'sons.alphabet';

/** a2.32 owns the DIAGNOSTIC vocabulary of a malfunction. It ships at seq 31,
 *  three units after this one, so this unit does NOT cite it forward
 *  (collation §1.3). The citation runs the other way.
 *
 *  THE BOUNDARY, in the words the report must carry so a2.32's builder cannot
 *  reopen it:
 *
 *    a2.29 owns the impersonal complaint frame and the escalation ladder.
 *    a2.32 owns the diagnostic vocabulary of a malfunction (ne s'allume pas,
 *    ça bugue, redémarrer). a2.29 describes a room problem: something is
 *    missing, broken or noisy. It authors no device-fault vocabulary.
 *
 *  Guard the THING, not the letters (a2.14 §6, a2.17 §4). */
export const A2_32_RESERVED = [
  /\bne s['’]allume pas\b/i,
  /\bça bugue\b/i,
  /\bredémarrer\b/i,
  /\bredémarre\b/i,
  /\bplanter?\b(?=[^]*\b(?:ordinateur|écran|téléphone)\b)/i,
] as const;

/** `ne fonctionne pas` is an IMPORT, not an ownership question. 14 published
 *  rows, measured. Both units import it and neither authors the paradigm. */
export const SHARED_MALFUNCTION = 'ne fonctionne pas';

/** Collation C8: no unit in this band may build a teaching move on `y` or `en`
 *  as a PRONOUN, because a2.25 has zero lessons. `en` as a PREPOSITION is
 *  everywhere in the corpus and is legal, so these shapes are written against
 *  the pronoun. MUST_NOT_FIRE lives in the test. */
export const PRONOUN_YEN_SHAPES = [
  /\bj['’]y (?:vais|suis|reste)\b/i,
  /\b(?:je|tu|il|elle|on|nous|vous|ils|elles)\s+en\s+(?:ai|as|a|avons|avez|ont|prends|prend|veux|veut|parle|parlons|parlez)\b/i,
  /\bil y en a\b/i,
  /\ben parler\b/i,
] as const;

/** a2.30 owns job-title feminisation for all eight units. This unit mints none.
 *  `la réceptionniste` is epicene and already published shape; it is not minted
 *  here and does not appear as an authored headword. */
export const FORBIDDEN_FEMININES = [
  'directrice', 'gérante', 'responsable de service', 'réceptionniste',
  'employée', 'serveuse', 'technicienne',
] as const;

/** Collation C3: at most ONE Quebec card, at `layer: 'more'`, and nothing on it
 *  is ever the answer to a scored question. These forms are swept out of every
 *  scored surface. */
export const QUEBEC_FORMS = [
  'déjeuner', 'dîner', 'souper', 'stationnement', 'bienvenue', 'chambreur',
] as const;

/** a2.13 is this unit's PREREQ and it shipped four strings promising the
 *  learner nothing more from the conditional family. Paul accepted option A on
 *  2026-08-15 and the amendment is specified in `05-A2-13-AMENDMENT-SPEC.md`.
 *  It is NOT this build's to write or apply.
 *
 *  What binds THIS lesson: `a2-13-modaux.test.ts:249`'s FORBIDDEN_CONDITIONAL
 *  is asserted over a2.13's OWN strings, not over the seed, so this lesson may
 *  carry `pourriez` and `aimerais` freely. What it may NOT do is name the
 *  family or the tense. The jargon guard bans "conditional" outright. */
export const A2_13_AMENDMENT_APPLIED = false;

/** THE FIVE SOFTENERS, taken as unnamed lexis. Never a family, never a tense,
 *  never a form. `source` is asserted by the test against what this file
 *  authors. */
export const SOFTENERS = [
  { fr: 'je voudrais', source: 'inherited' as const, note: "a2.13's, already the learner's. Not reteached." },
  { fr: 'est-ce que je peux', source: 'inherited' as const, note: "a2.13's permission sense of pouvoir. Present tense." },
  { fr: "j'aimerais", source: 'imported' as const, note: '38 published rows, measured 2026-08-16.' },
  { fr: 'pourriez-vous', source: 'imported' as const, note: '22 published rows, 3 of them in the SONS band the learner meets first.' },
  { fr: 'ce serait possible de', source: 'authored' as const, note: '0 rows at any level. The genuine gap.' },
] as const;

/** `pourriez-vous` is published UPSTREAM of a2.13, in the SONS band, which is
 *  the fact that decided Paul's item 1. Named as prior exposure, cited, and
 *  imported by the softener deck. */
export const SONS_POURRIEZ_IDS = [
  'fr.sons.alphabet.219', 'fr.sons.alphabet.282', 'fr.sons.alphabet.422',
] as const;

/** Metalinguistic rows stored as corpus sentences. Naming either draws a
 *  flashcard that teaches French grammar terminology to an A2 learner, in a
 *  lesson whose own test bans the word. */
export const NOT_RELEASABLE = ['fr.a2.hebergement.011', 'fr.a2.hebergement.012'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE VOICE FLOOR
 * ══════════════════════════════════════════════════════════════════════════ */

/** Collation §1.5: at least 40% of newly authored rows are in the voice of the
 *  person the learner is talking to. Here that is the receptionist. */
export const OTHER_VOICE_FLOOR = 0.4;
export const OTHER_VOICES = ['desk'] as const;
type Voice = 'learner' | 'desk' | 'neutral';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE ROWS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item & { voice: Voice };

const sent = (n: number, fr: string, en: string, voice: Voice, tags: string[], drills: Item['drills']): Row => ({
  id: H(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, tags, drills, version: 1, voice,
});
const phrase = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: H(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1, voice: 'learner',
});
const word = (n: number, fr: string, en: string, respell: string, gender: 'm' | 'f', tags: string[], drills: Item['drills']): Row => ({
  id: H(n), kind: 'word', level: 'a2', theme: THEME, fr, en, respell, gender, tags, drills, version: 1, voice: 'neutral',
});

const FCV = ['flashcard', 'voiceflash'] as Item['drills'];
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVD = ['flashcard', 'voiceflash', 'dictation'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/* ── RUNG 1: ask once, softly. .074-.081 ─────────────────────────────────── */

export const RUNG1_ROWS: Row[] = [
  sent(74, "Est-ce que je peux avoir une serviette, s'il vous plaît ?", 'Could I have a towel, please?', 'learner', ['rung1', 'request', 'ladder'], FCVR),
  sent(75, "Pourriez-vous m'apporter une serviette, s'il vous plaît ?", 'Could you bring me a towel, please?', 'learner', ['rung1', 'request', 'ladder'], FCVR),
  sent(76, 'Excusez-moi, il y a un problème avec la douche.', 'Excuse me, there is a problem with the shower.', 'learner', ['rung1', 'fault', 'ladder', 'impersonal'], FCVR),
  sent(77, 'Excusez-moi de vous déranger.', 'Sorry to bother you.', 'learner', ['rung1', 'opener', 'ladder'], FCVDR),
  sent(78, "Est-ce que ce serait possible d'avoir une autre chambre ?", 'Would it be possible to have a different room?', 'learner', ['rung1', 'request', 'ladder', 'softener'], FCVR),
  sent(79, "J'aimerais changer de chambre, si c'est possible.", 'I would like to change rooms, if possible.', 'learner', ['rung1', 'request', 'ladder', 'softener'], FCVR),
  sent(80, 'Est-ce que je peux avoir un oreiller de plus ?', 'Could I have one more pillow?', 'learner', ['rung1', 'request', 'ladder'], FCVR),
  sent(81, 'Excusez-moi, il y a beaucoup de bruit dans le couloir.', 'Excuse me, there is a lot of noise in the corridor.', 'learner', ['rung1', 'fault', 'ladder', 'impersonal'], FCVR),
];

/* ── RUNG 2: say it again, without the person. .082-.090 ─────────────────── */

export const RUNG2_ROWS: Row[] = [
  sent(82, "C'est toujours le même problème.", 'It is still the same problem.', 'learner', ['rung2', 'restate', 'ladder', 'impersonal'], FCVDR),
  sent(83, 'Ça fait deux fois que je demande.', 'That is twice I have asked.', 'learner', ['rung2', 'restate', 'ladder'], FCVDR),
  sent(84, "Je vous ai demandé une serviette il y a une heure.", 'I asked you for a towel an hour ago.', 'learner', ['rung2', 'restate', 'ladder'], FCVR),
  sent(85, "L'eau chaude ne fonctionne toujours pas.", 'The hot water still is not working.', 'learner', ['rung2', 'fault', 'ladder', 'impersonal'], FCVR),
  sent(86, "Le problème n'est pas réglé.", 'The problem is not sorted out.', 'learner', ['rung2', 'restate', 'ladder', 'impersonal'], FCVR),
  sent(87, 'Ça ne marche toujours pas.', 'It still does not work.', 'learner', ['rung2', 'fault', 'ladder', 'impersonal'], FCVDR),
  sent(88, "J'ai appelé la réception hier soir, et personne n'est venu.", 'I called the front desk last night, and nobody came.', 'learner', ['rung2', 'restate', 'ladder'], FCVR),
  sent(89, 'La climatisation ne marche pas non plus.', 'The air conditioning does not work either.', 'learner', ['rung2', 'fault', 'ladder', 'impersonal'], FCVR),
  sent(90, "C'est la deuxième nuit avec le même bruit.", 'This is the second night with the same noise.', 'learner', ['rung2', 'restate', 'ladder', 'impersonal'], FCVR),
];

/* ── RUNG 3: ask for the person who can fix it. .091-.095 ────────────────── */

export const RUNG3_ROWS: Row[] = [
  sent(91, "Je voudrais parler au responsable, s'il vous plaît.", 'I would like to speak to the manager, please.', 'learner', ['rung3', 'escalate', 'ladder'], FCVDR),
  sent(92, 'Est-ce que quelqu\'un peut venir voir ?', 'Could somebody come and look?', 'learner', ['rung3', 'escalate', 'ladder', 'impersonal'], FCVR),
  sent(93, "Est-ce que je peux parler à quelqu'un d'autre ?", 'Could I speak to somebody else?', 'learner', ['rung3', 'escalate', 'ladder'], FCVR),
  sent(94, 'Qui est-ce que je peux voir pour ce problème ?', 'Who can I see about this problem?', 'learner', ['rung3', 'escalate', 'ladder', 'impersonal'], FCVR),
  sent(95, 'Le responsable est là ce soir ?', 'Is the manager here this evening?', 'learner', ['rung3', 'escalate', 'ladder'], FCVR),
];

/* ── IMPERSONAL COMPLAINT FRAMES. .096-.105 ──────────────────────────────── */

export const FRAME_ROWS: Row[] = [
  sent(96, "La chambre n'a pas été faite.", 'The room has not been made up.', 'learner', ['impersonal', 'fault'], FCVR),
  sent(97, "Il n'y a pas de serviettes dans la salle de bain.", 'There are no towels in the bathroom.', 'learner', ['impersonal', 'fault'], FCVR),
  sent(98, 'La fenêtre ne ferme pas.', 'The window does not close.', 'learner', ['impersonal', 'fault'], FCVDR),
  sent(99, 'Le chauffage est trop fort.', 'The heating is too high.', 'learner', ['impersonal', 'fault'], FCVR),
  sent(100, 'Il fait très froid dans la chambre.', 'It is very cold in the room.', 'learner', ['impersonal', 'fault'], FCVR),
  sent(101, "L'ascenseur ne fonctionne pas.", 'The lift is not working.', 'learner', ['impersonal', 'fault'], FCVR),
  sent(102, 'Les voisins font du bruit toute la nuit.', 'The people next door make noise all night.', 'learner', ['impersonal', 'fault'], FCVR),
  sent(103, 'Il manque une couverture dans la chambre.', 'There is a blanket missing in the room.', 'learner', ['impersonal', 'fault'], FCVR),
  sent(104, 'La clé ne marche pas.', 'The key does not work.', 'learner', ['impersonal', 'fault'], FCVDR),
  sent(105, "Il n'y a plus d'eau chaude.", 'There is no hot water left.', 'learner', ['impersonal', 'fault'], FCVR),
];

/* ── THE RECEPTIONIST. .106-.124. THE VOICE THAT DID NOT EXIST. ──────────── */

export const DESK_ROWS: Row[] = [
  sent(106, 'Bonsoir, vous avez une réservation ?', 'Good evening, do you have a booking?', 'desk', ['desk', 'checkin'], FCVDR),
  sent(107, "C'est à quel nom, s'il vous plaît ?", 'Under what name, please?', 'desk', ['desk', 'checkin'], FCVDR),
  sent(108, "Vous avez une pièce d'identité ?", 'Do you have some ID?', 'desk', ['desk', 'checkin'], FCVR),
  sent(109, 'Voici votre clé, chambre soixante-quinze.', 'Here is your key, room seventy-five.', 'desk', ['desk', 'checkin', 'numbers'], FCVR),
  sent(110, 'Votre chambre est au troisième étage.', 'Your room is on the third floor.', 'desk', ['desk', 'checkin', 'numbers'], FCVDR),
  sent(111, "L'ascenseur est au fond du couloir, à droite.", 'The lift is at the end of the corridor, on the right.', 'desk', ['desk', 'checkin'], FCVR),
  sent(112, 'Le petit déjeuner est servi de sept heures à dix heures.', 'Breakfast is served from seven to ten.', 'desk', ['desk', 'numbers', 'impersonal'], FCVDR),
  sent(113, 'Le petit déjeuner est servi au rez-de-chaussée.', 'Breakfast is served on the ground floor.', 'desk', ['desk', 'impersonal'], FCVR),
  sent(114, 'Votre chambre sera prête à quatorze heures.', 'Your room will be ready at two in the afternoon.', 'desk', ['desk', 'numbers', 'impersonal'], FCVDR),
  sent(115, 'Le départ est avant onze heures.', 'Check-out is before eleven.', 'desk', ['desk', 'numbers', 'impersonal'], FCVR),
  sent(116, 'Vous partez à quelle heure demain ?', 'What time are you leaving tomorrow?', 'desk', ['desk', 'numbers'], FCVR),
  sent(117, "Je suis désolée, c'est complet ce soir.", 'I am sorry, we are full this evening.', 'desk', ['desk', 'refusal'], FCVDR),
  sent(118, 'Je ne peux rien faire ce soir, monsieur.', 'There is nothing I can do this evening, sir.', 'desk', ['desk', 'refusal'], FCVR),
  sent(119, 'Je vais voir ce que je peux faire.', 'I will see what I can do.', 'desk', ['desk', 'deflect'], FCVR),
  sent(120, 'Je vais prévenir le responsable.', 'I will let the manager know.', 'desk', ['desk', 'deflect', 'escalate'], FCVR),
  sent(121, 'Le responsable arrive à huit heures demain.', 'The manager gets in at eight tomorrow.', 'desk', ['desk', 'deflect', 'numbers'], FCVR),
  sent(122, 'Je suis vraiment désolée pour le dérangement.', 'I am very sorry for the trouble.', 'desk', ['desk', 'repairnote'], FCVR),
  sent(123, 'Vous pouvez épeler votre nom, madame ?', 'Could you spell your name, madam?', 'desk', ['desk', 'checkin', 'alphabet'], FCVR),
  sent(124, 'Quelqu\'un va monter dans dix minutes.', 'Somebody will come up in ten minutes.', 'desk', ['desk', 'deflect', 'numbers'], FCVR),
  // The number contrast the second listening mission is built on. An English
  // speaker hears "seventy-five" and "eighty-five" as two unrelated shapes;
  // in French they share `-quinze` / `quatre-vingt-` and arrive at speed.
  sent(125, 'Vous êtes au deuxième étage, chambre quatre-vingt-cinq.', 'You are on the second floor, room eighty-five.', 'desk', ['desk', 'numbers'], FCVDR),
  sent(126, 'Non, quatre-vingt-cinq, pas soixante-quinze.', 'No, eighty-five, not seventy-five.', 'desk', ['desk', 'numbers'], FCVR),
  sent(127, 'Je vous mets dans une chambre plus calme.', 'I am putting you in a quieter room.', 'desk', ['desk', 'deflect'], FCVR),
  sent(128, 'Je note le problème et je préviens quelqu\'un.', 'I am making a note of the problem and telling somebody.', 'desk', ['desk', 'deflect'], FCVR),
  sent(129, "Il y a un autre ascenseur au fond, à gauche.", 'There is another lift at the end, on the left.', 'desk', ['desk', 'checkin'], FCVR),
];

/* ── POLITENESS CHUNKS. .125-.127. ──────────────────────────────────────────
 *
 * `pourriez-vous` and `j'aimerais` are NOT authored: 22 and 38 published rows
 * respectively, and re-authoring the form is what §2 of the brief corrections
 * warns about. `ce serait possible de` is 0 rows at any level and is the
 * genuine gap this unit fills.
 *
 * Nasals here: `dérangement` is the only nasal-bearing token and its respelling
 * closes with ⁿ. `hasPlainNasalFor` has three documented blind spots, so the
 * test asserts the superscript on these BY NAME as well. */

export const CHUNK_ROWS: Row[] = [
  phrase(130, 'ce serait possible de', 'would it be possible to', 'suh suh-REH poh-SEE-bluh duh', ['softener', 'chunk'], FCV),
  phrase(131, 'désolé de vous déranger', 'sorry to bother you', 'day-zoh-LAY duh voo day-rahⁿ-ZHAY', ['softener', 'chunk', 'opener'], FCV),
];

/* ── QUEBEC. ZERO ROWS. ──────────────────────────────────────────────────────
 *
 * Collation C3 allows each unit at most one cardDeck card naming a Quebec
 * divergence. The design wanted four; the prompt cut it to one authored word;
 * the fold sweep cuts it to ZERO authored rows, because the divergence is
 * already published in the theme built for it. See the header.
 *
 * The card carries its own prose, sits at `layer: 'more'`, and nothing on it is
 * ever the answer to a scored question. Its citation is
 * `fr.a2.quebec-et-francophonie.121`, which is at a2 and leaks no level. */

export const QUEBEC_ROWS: Row[] = [];
export const QUEBEC_CITE = 'fr.a2.quebec-et-francophonie.121';
/** Named as prior exposure. Released by nothing: they are b1. */
export const QUEBEC_PRIOR = [
  'fr.b1.quebec-et-francophonie.025',
  'fr.b1.quebec-et-francophonie.026',
  'fr.b1.quebec-et-francophonie.027',
] as const;

/* ── THE ESCALATION BRAKE. .132 ──────────────────────────────────────────────
 *
 * Rung 3 needs a line that is NOT an escalation, so the brake has something to
 * point at: the thing you say instead, when you have only asked once. */

export const BRAKE_ROWS: Row[] = [
  sent(132, 'Je repasse dans une heure, alors.', 'I will come back in an hour, then.', 'learner', ['rung2', 'brake', 'ladder'], FCVR),
];

export const ROWS: Row[] = [
  ...RUNG1_ROWS, ...RUNG2_ROWS, ...RUNG3_ROWS,
  ...FRAME_ROWS, ...DESK_ROWS, ...CHUNK_ROWS, ...QUEBEC_ROWS, ...BRAKE_ROWS,
];
export const ALL_ROWS = ROWS;

/** The ladder rows, in rung order. This is the citable block: a2.30, a2.31 and
 *  a2.32 reuse these by itemId and author no rung lines of their own. */
export const LADDER_ROWS = [...RUNG1_ROWS, ...RUNG2_ROWS, ...RUNG3_ROWS];
export const LADDER_IDS = LADDER_ROWS.map((r) => r.id);

/** THE RUNG-TO-ITEMID TABLE, which is the deliverable the rest of the band
 *  depends on. Prose in a card body does not satisfy it. */
export const RUNG_TABLE: Record<string, { name: string; request: string[]; fault: string[]; escalate: string[] }> = {
  rung1: { name: RUNG_1, request: [H(74), H(75), H(78), H(79), H(80)], fault: [H(76), H(81)], escalate: [H(77)] },
  rung2: { name: RUNG_2, request: [H(83), H(84), H(88)], fault: [H(85), H(87), H(89)], escalate: [H(82), H(86), H(90), H(132)] },
  rung3: { name: RUNG_3, request: [], fault: [], escalate: [H(91), H(92), H(93), H(94), H(95)] },
};

/** THE NINE CELLS, by itemId, ROW BY ROW as the `table` section draws them.
 *  Three rungs across, three moves down, nine cells and stop.
 *
 *  The `table`, the `tapTable` and the `practice` section all resolve to THIS
 *  list and nothing else, so "the same nine, out loud" is true rather than
 *  approximately true. The batch asserts every table cell folds onto one of
 *  these rows, which is what caught the first version: it had `.075` where the
 *  table drew `.084`. */
export const NINE_CELLS: string[][] = [
  // move 1: the request        rung 1     rung 2     rung 3
  [H(74), H(84), H(91)],
  // move 2: the fault report
  [H(76), H(85), H(92)],
  // move 3: when it is still not fixed
  [H(78), H(87), H(93)],
];

/** The same nine, flat, in reading order. */
export const NINE_IDS = NINE_CELLS.flat();

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. IMPORTS. Every one is published; the merge carries them into the seed.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** Hotel nouns. Every one already published in this theme. This build
   *  authors ZERO hotel nouns: `l'hôtel` exists 8 times across 8 themes and
   *  `la chambre` 9 times, and one careless authoring degrades
   *  flashhub-coverage.test.ts. */
  nouns: [
    H(1), H(2), H(3), H(15), H(16), H(17), H(18), H(19),
    H(21), H(26), H(27), H(28), H(53),
  ],
  /** Hotel frames already published in this theme. `.068` and `.062` are the
   *  two the prompt's corpus plan would have duplicated. */
  frames: [H(6), H(9), H(13), H(22), H(23), H(62), H(68)],
  /** The bare fault report, in another theme. Imported so the lesson can put
   *  it beside the softened one. This is the cleanest minimal pair in the
   *  build and it exists because the probe found the row. */
  bareReport: ['fr.a2.bricolage.041'],
  /** a2.13's permission sense, and the request form the learner already met. */
  modal: ['fr.a1.au-restaurant.209'],
  /** The softeners this unit takes as lexis and does NOT author. */
  softeners: [
    'fr.a2.expressions-frequentes.072',
    'fr.a2.expressions-frequentes.077',
    'fr.a1.questions.328',
    'fr.sons.alphabet.219',
    'fr.sons.alphabet.282',
    'fr.sons.alphabet.422',
  ],
  /** Numbers and clock, for the two number-perception missions. Fully
   *  published and fully in the seed, so these cost zero new corpus. */
  numbers: [],
  /** The apology openers already published. `fr.a1.expressions-frequentes.002`
   *  is the exact twin of the authored rung-1 opener H(77); it is imported so
   *  the twin is visible in the seed rather than silently duplicated, and it is
   *  released by nothing (its only drill is `dictation`). */
  openers: ['fr.a1.salutations.353', 'fr.a1.salutations.355', 'fr.a1.expressions-frequentes.002'],
  /** The Quebec divergence, already published at a2. This build authors zero
   *  Quebec rows. */
  quebec: ['fr.a2.quebec-et-francophonie.121'],
  /** Spelling a name aloud is sons.alphabet's and it already did it in a hotel
   *  frame. Called back to, not rebuilt. */
  alphabet: ['fr.sons.alphabet.431'],
  /** a2.07's frozen repair block. Cited, never re-authored. */
  repair: [...REPAIR_IDS],
};

/** Every imported id, flat. */
export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** The dictée items. Word mode, and NOT ONE carries an apostrophe or a hyphen:
 *  `normalizeFr` (`MissionRich.tsx:1385`) strips both, so an item whose only
 *  difficulty is one of them tests nothing. Checked through the real
 *  `dicteeMode` in the batch rather than assumed.
 *
 *  `.107` « C'est à quel nom, s'il vous plaît ? » was the obvious fourth item
 *  and it is disqualified by exactly that rule: two apostrophes and nothing
 *  else hard in it. `.110` replaces it. The guard found this, not the author. */
export const DICTEE_IDS = [H(106), H(110), H(112), H(114)];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. GUARD SHAPES
 * ══════════════════════════════════════════════════════════════════════════ */

/** The rude line the trap is built out of. It is LEGAL in exactly two places:
 *  the scene choice and the errorSpot's prompt. Everywhere else it is the
 *  failure this unit exists to prevent. */
export const RUDE_LINE = 'Vous devez réparer la douche.';
export const IMPERSONAL_LINE = 'Excusez-moi, il y a un problème avec la douche.';

/** "The person as the target of the fault." Written against the SHAPE, so it
 *  survives rewording, and scoped BY SECTION ID rather than by intention. */
export const ACCUSATION_SHAPES = [
  /\bvous devez\s+(?:réparer|changer|nettoyer|refaire|régler)\b/i,
  /\bvous (?:m['’]avez|avez) donné une chambre\b/i,
  /\bc['’]est (?:de )?votre faute\b/i,
  /\bvous (?:n['’]avez pas|avez oublié de) (?:fait|nettoyé|changé|apporté)\b/i,
  /\bvous avez oublié\b/i,
] as const;

/** The two section ids where the rude line is permitted: the scene, where it is
 *  the option that breaks, and the quiz, where it is the errorSpot prompt the
 *  learner repairs. `s15-trap` and `s16-errors` are handled separately in the
 *  batch, by KEY rather than wholesale, so their teaching copy is still
 *  guarded while their `promptSound` and `wrong` fields are not. */
export const RUDE_ALLOWED_SECTIONS = ['s01-scene', 's24-quiz'] as const;

/** Grammar jargon. Banned from every learner surface, INCLUDING `intro` and
 *  `overview` (corrections §9), walked over a display() pass so a cardDeck
 *  card's `sub` is seen (§13), and every entry carries its -s plural.
 *
 *  "conditional" is banned outright: this is a lesson about politeness forms
 *  and it is unusually likely to reach for it. */
export const JARGON = [
  'conditional', 'conditionals', 'conditionnel',
  'subjunctive', 'subjunctives', 'imperative', 'imperatives',
  'paradigm', 'paradigms', 'morphology', 'lexis', 'register marker',
  'modal verb', 'modal verbs', 'auxiliary', 'auxiliaries',
  'infinitive', 'infinitives', 'conjugation', 'conjugations',
  'interrogative', 'interrogatives', 'inversion',
  'pragmatics', 'illocutionary', 'speech act', 'speech acts',
  'mitigator', 'mitigators', 'hedging device', 'hedging devices',
  'tense', 'tenses',
] as const;

/** House copy rules. `honest` is guarded as a SUBSTRING, because the house \b
 *  boundary cannot see "dishonest" (the a2.06 finding) and a complaint lesson
 *  is exactly where an author reaches for it. */
export const BANNED_SUBSTRINGS = ['honest', 'honesty'] as const;

/** Band policy, asserted as an ABSENCE because it is policy and not an
 *  oversight (collation §1.12, decision item 4). */
export const EXAM_POLICY = {
  scenarioExam: false,
  examTaskRows: 0,
  skill: 'PO' as const,
} as const;
