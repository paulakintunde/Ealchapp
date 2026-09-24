// b1.04.l1 « Passé composé ou imparfait : les paires » — the authored corpus,
// the imports and the citation constants. REBUILD v2, to RICH-LESSON-STANDARD.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json. The
// pilot v1 shape (24 missions) is what this replaces, in place.
//
// STABLE EXPORTS (do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS — the B1 Unit 1 capstone
// ══════════════════════════════════════════════════════════════════════════
//
//   THE SAME VERB SAYS TWO DIFFERENT THINGS IN THE TWO TENSES, and the
//   English verb changes with it.
//
//     je savais       I knew            j'ai su          I found out       act 2
//     je connaissais  I knew (her)      j'ai connu       I met / went through act 3
//     je pouvais      I was able        j'ai pu          I managed to      act 4
//                                       je n'ai pas pu   I failed to
//     je voulais      I wanted          j'ai voulu       I tried, decided  act 5
//                                       je n'ai pas voulu I refused
//     je devais       I was supposed to j'ai dû          I had to, and did act 6
//                                       il a dû oublier  he must have forgotten
//     j'avais peur    I was scared      j'ai eu peur     I got scared      act 7
//     il était malade he was ill        il a été malade  he fell ill       act 7
//     il fallait      it was necessary  il a fallu       and it was done   act 8
//     je croyais que  I thought (wrong) j'ai cru que     I thought for a moment act 8
//
//   Then: the temporal cues at depth, each with its counterexample (act 9),
//   the speaker's CHOICE as style rather than error (act 10), and error
//   analysis where the sentence is grammatical and says the wrong thing
//   (act 11).
//
//   NOBODY ELSE OWNS THIS. `savoir-connaitre-corpus.ts` (a2.14) says the
//   meaning shift is « a2.05's »; a2.05 never teaches it (grepped). a2.20
//   publishes the participles su, pu, dû, voulu, connu for their FORM only.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   b1.01  REFRAME  « Pars de nous, coupe -ons, ajoute la fin. »   act 2
//   b1.02  REFRAME  « À l'imparfait, on regarde le passé. On ne le compte pas. »  act 7
//   b1.03  REFRAME  « L'imparfait pose le décor. Le passé composé fait avancer
//                     le film. »                                  acts 9, 10, 12
//   a2.14  REFRAME  « connaître stops at a thing. savoir keeps going. »  act 3
//
//   b1.03 also fixes the two lens labels used on every learner surface here:
//   « le décor » and « l'action ». This lesson never says « événement ».
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `recits-au-passe` exists in seed `themes` (domain fondations,
//     levelRange a2-b2) and holds ZERO items, so it is not created at import.
//  2. ID BLOCK: b1.04 owns `.301`-`.399` and `.1200`-`.1399`. b1.01 owns
//     001-099 + 401-799, b1.02 owns 101-199 + 800-999, b1.03 owns 201-299 +
//     1000-1199. Used here: .301-.390 and .1200-.1322, with gaps.
//  3. The seed publishes the participles (fr.a2.verbes.604-.619) and a
//     handful of sentences that already make this lesson's points. They are
//     imported, never re-authored. Re-probe the DB at import: the seed is
//     about a quarter of Postgres.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { dicteeMode } from '../../../../ealch-v2/src/content/dictee.logic.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that opens a sentence needs a capital, and the label is built
 *  at interpolation time rather than typed. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.04',
  seq: 4,
  /** English: `content_units` matches it against overview.titleEn. */
  title: 'Passé Composé or Imparfait: Meaning Pairs',
  sub: 'Passé composé ou imparfait : les paires',
  canDo: 'Can choose the past tense of savoir, connaître, pouvoir, vouloir, devoir, avoir, être, falloir and croire for the meaning intended, and read time words as cues rather than rules',
  prereqUnitIds: ['b1.03'],
} as const;

export const LESSON_ID = 'b1.04.l1';
export const LESSON_TITLE = 'Passé composé ou imparfait : les paires';
export const THEME = 'recits-au-passe';
export const LEVEL = 'b1' as const;

/** b1.04's two blocks. Nothing outside them. */
export const ID_RANGES = [[301, 399], [1200, 1399]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. QUOTATIONS AND CITATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';
export { REFRAME as B102_REFRAME, REFRAME_EN as B102_REFRAME_EN } from './imparfait-usage-corpus.ts';
export { REFRAME as B103_REFRAME, REFRAME_EN as B103_REFRAME_EN } from './pc-imparfait-corpus.ts';
export { REFRAME as A214_REFRAME } from '../savoir-connaitre-corpus.ts';

/** B1 units have no `seq` in seed.json, so `unitRef` cannot label them. They
 *  are cited by French title. A2 units are labelled from their real seq. */
export const B101_REF = 'la leçon « L\'imparfait : la formation »';
export const B102_REF = 'la leçon « L\'imparfait : les emplois »';
export const B103_REF = 'la leçon « Passé composé ou imparfait : les bases »';

function refFr(unitId: string): string {
  const m = /^lesson (\d+) in (\w+)$/.exec(unitRef(unitId));
  return m ? `la leçon ${m[1]} de l'${m[2]}` : unitId;
}

export const SAVOIR_UNIT = 'a2.14';
export const MODAUX_UNIT = 'a2.13';
export const PARTICIPES_UNIT = 'a2.20';
export const PC_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';
export const PRONOMINAUX_PC_UNIT = 'a2.23';
export const SAVOIR_REF = refFr(SAVOIR_UNIT);
export const MODAUX_REF = refFr(MODAUX_UNIT);
export const PARTICIPES_REF = refFr(PARTICIPES_UNIT);
export const PC_REF = refFr(PC_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME
 *
 *  About the MEANING SHIFT, so it is not a near-duplicate of b1.03's
 *  « L'imparfait pose le décor. Le passé composé fait avancer le film. »
 *  b1.03 is about the story; this one is about the verb.
 *
 *  Rejected: « À l'imparfait, un état. Au passé composé, quelque chose
 *  arrive. » (pilot v1: too close to b1.03's décor / action), and
 *  « L'imparfait laisse la porte ouverte... » (true of devoir, pouvoir and
 *  vouloir only, and says nothing about savais / su).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un seul verbe, deux temps : deux sens.';
export const REFRAME_EN = 'One verb, two tenses: two meanings.';
/** The question the reframe hands the learner. Used as a drill coach line. */
export const THE_TEST = 'Un état qui dure, ou un moment qui arrive ?';
export const THE_TEST_EN = 'A state that lasts, or a moment that happens?';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. IMPORTED ROWS (seed-checked 2026-09-23)
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  /** a2.20's participle rows: flashcard + voiceflash + review, so they can be
   *  released AND spoken. Read here for their MEANING. .604 and .606 are
   *  being reglossed separately (Paul, 2026-09-22). */
  participles: [
    'fr.a2.verbes.604', // J'ai su la réponse.
    'fr.a2.verbes.605', // J'ai pu venir.
    'fr.a2.verbes.606', // J'ai voulu partir.
    'fr.a2.verbes.607', // J'ai dû partir.
    'fr.a2.verbes.608', // J'ai connu son frère.
    'fr.a2.verbes.612', // J'ai cru ça.
    'fr.a2.verbes.618', // J'ai été malade.
    'fr.a2.verbes.619', // J'ai eu peur.
  ],
  /** Published sentences that already make a point this lesson teaches. */
  sentences: [
    'fr.b1.cafe.094',              // Je ne savais pas que ce café fermait si tôt.
    'fr.b1.cafe.098',              // Je pensais que le service serait plus rapide un dimanche matin.
    'fr.a2.marche.128',            // J'ai oublié mon sac réutilisable, alors j'ai dû en acheter un.
    'fr.a1.heure-et-date.048',     // Hier, il a plu toute la journée.
    'fr.a2.heure-et-date.103',     // Il a plu pendant trois jours.
    'fr.a2.sports-et-loisirs.061', // Comme il pleuvait, nous avons annulé la randonnée.
    'fr.a2.cafe.060',              // Il a plu, donc nous sommes restés à l'intérieur.
    'fr.a2.heure-et-date.106',     // Je le connais depuis longtemps.
    'fr.a2.objets.108',            // Nous avons acheté un nouveau parapluie parce qu'il pleuvait.
    'fr.b1.routines.080',          // Comme il pleuvait, il a préféré prendre le métro plutôt que marcher.
    'fr.b1.routines.085',          // Elle a changé d'habitudes parce qu'elle voulait mieux organiser sa journée.
    'fr.b1.sports-et-loisirs.093', // Puisqu'elle voulait progresser, elle a changé de méthode d'entraînement.
  ],
  /** dictation-only in the seed: no deck can serve them, so they are NAMED
   *  (a term example, a groupDrill line) and never released. */
  namedOnly: [
    'fr.a2.famille.012',           // Ma tante était malade, mais elle est venue au mariage quand même.
    'fr.b1.heure-et-date.083',     // Il a fallu attendre près d'une heure avant que le médecin nous reçoive.
    'fr.a2.deplacements.013',      // Il pleuvait fort, donc nous sommes restés à la maison.
    'fr.a1.nombres.067',           // Pendant deux heures, nous avons marché sans nous arrêter.
  ],
} as const;

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];
export const NOT_DECK_ABLE: readonly string[] = IMPORTED.namedOnly;
/** Imports with voiceflash: only these may appear in `practice skill: speak`. */
export const SPEAKABLE_IMPORTS: readonly string[] = IMPORTED.participles;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE AUTHORED ROWS
 *
 *  `conj` is a conjugation card (front = « savoir · passé composé · je »),
 *  `sent` a sentence and `gap` a gapfill card whose front is the sentence
 *  with the verb removed AND a sense cue, so the card asks for the form
 *  because of what it means. Every row carries fr, en, ipa, respell.
 *
 *  RESPELL reuses the seed's forms where they exist: ZHAY SÜ, ZHAY DÜ,
 *  ZHAY PÜ, ZHAY koh-NÜ, ZHAY Ü PUHR, ZHAY ay-TAY ma-LAD, vuh-NEER,
 *  par-TEER, YEHR, duh-PWEE, üee-TUHR, a-PREH, sam-DEE, tay-lay-FON.
 *  Nasals carry the superscript ⁿ. No U+203F anywhere, including IPA.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type VC = NonNullable<Item['verbCheck']>;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

type Pers = 'je' | 'tu' | 'il' | 'elle' | 'on' | 'nous' | 'vous' | 'ils' | 'elles';
const PN: Record<Pers, [VC['person'], VC['number']]> = {
  je: ['1', 's'], tu: ['2', 's'], il: ['3', 's'], elle: ['3', 's'], on: ['3', 's'],
  nous: ['1', 'p'], vous: ['2', 'p'], ils: ['3', 'p'], elles: ['3', 'p'],
};
type Tense = 'imparfait' | 'passé composé';

const conj = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  inf: string, p: Pers, tense: Tense, tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: [tense === 'imparfait' ? 'imparfait' : 'passe-compose', ...tags], drills, version: 1,
  cardType: 'conjugation', prompt: `${inf} · ${tense} · ${p}`,
  verbCheck: { infinitive: inf, tense, person: PN[p][0], number: PN[p][1] },
  grammarPoints: ['paires-pc-imparfait'],
});

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['paires-pc-imparfait'],
});

/** A gapfill card: the front is the sentence with the verb gapped and a sense
 *  cue in brackets. Meaning before form, on the card itself. */
const gap = (n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, cardType: 'gapfill', prompt, notes,
  grammarPoints: ['paires-pc-imparfait'],
});

/* ── ACT 1 · LE MALENTENDU ──────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  gap(301, 'Je devais venir à la réunion.', 'I was supposed to come to the meeting.',
    '/ʒə də.vɛ və.niʁ a la ʁe.y.njɔ̃/', 'zhuh duh-VEH vuh-NEER ah lah ray-ü-NYOHⁿ',
    'Je ___ venir à la réunion. (devoir · le plan, venu ou pas)',
    "Le plan. La phrase ne dit pas si tu es venu. EN: the plan; the outcome is open.",
    ['scene', 'devoir', 'imparfait'], FCVDR),
  gap(302, "J'ai dû partir à huit heures.", 'I had to leave at eight.',
    '/ʒe dy paʁ.tiʁ a ɥi.tœʁ/', 'ZHAY DÜ par-TEER ah üee-TUHR',
    "J'___ partir à huit heures. (devoir · obligé, et tu es parti)",
    "Obligation, et c'est fait. EN: I had to, and I did.",
    ['scene', 'devoir', 'passe-compose'], FCVDR),
  sent(303, "Je devais venir, mais j'ai dû partir.", 'I was supposed to come, but I had to leave.',
    '/ʒə də.vɛ və.niʁ mɛ ʒe dy paʁ.tiʁ/', 'zhuh duh-VEH vuh-NEER · meh ZHAY DÜ par-TEER', ['scene', 'devoir', 'paire']),
  sent(304, 'Elle devait venir, mais elle a dû partir.', 'She was supposed to come, but she had to leave.',
    '/ɛl də.vɛ və.niʁ mɛ ɛ.la dy paʁ.tiʁ/', 'el duh-VEH vuh-NEER · meh eh-lah DÜ par-TEER', ['scene', 'devoir', 'paire']),
  sent(305, "Je ne savais pas que la réunion était annulée.", "I didn't know the meeting was cancelled.",
    '/ʒə nə sa.vɛ pa kə la ʁe.y.njɔ̃ e.tɛ.ta.ny.le/', 'zhuh nuh sah-VEH pah kuh lah ray-ü-nyohⁿ ay-teh ah-nü-LAY', ['scene', 'savoir', 'imparfait']),
  sent(306, "Finalement, j'ai pu partir en novembre.", 'In the end I managed to leave in November.',
    '/fi.nal.mɑ̃ ʒe py paʁ.tiʁ ɑ̃ nɔ.vɑ̃bʁ/', 'fee-nahl-MAHⁿ · ZHAY PÜ par-TEER ahⁿ noh-VAHⁿBR', ['lecture', 'pouvoir', 'passe-compose']),
  sent(307, "J'ai voulu appeler l'ambassade, mais la ligne était occupée.", 'I tried to call the embassy, but the line was busy.',
    '/ʒe vu.ly a.ple lɑ̃.ba.sad mɛ la liɲ e.tɛ.tɔ.ky.pe/', 'ZHAY voo-LÜ ah-play lahⁿ-bah-SAD · meh lah LEENY ay-teh oh-kü-PAY', ['lecture', 'vouloir', 'passe-compose']),
  sent(308, "J'ai connu Mathieu le premier soir.", 'I met Mathieu on the first evening.',
    '/ʒe kɔ.ny ma.tjø lə pʁə.mje swaʁ/', 'ZHAY koh-NÜ mah-TYEU luh pruh-myay SWAHR', ['lecture', 'connaitre', 'passe-compose']),
];

/* ── ACT 2 · SAVOIR ────────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  conj(311, 'je savais', 'I knew', '/ʒə sa.vɛ/', 'zhuh sah-VEH', 'savoir', 'je', 'imparfait', ['savoir', 'etat']),
  conj(312, 'tu savais', 'you knew', '/ty sa.vɛ/', 'tü sah-VEH', 'savoir', 'tu', 'imparfait', ['savoir', 'etat']),
  conj(313, 'il savait', 'he knew', '/il sa.vɛ/', 'eel sah-VEH', 'savoir', 'il', 'imparfait', ['savoir', 'etat']),
  conj(314, 'nous savions', 'we knew', '/nu sa.vjɔ̃/', 'noo sah-VYOHⁿ', 'savoir', 'nous', 'imparfait', ['savoir', 'etat']),
  conj(315, "j'ai su", 'I found out', '/ʒe sy/', 'ZHAY SÜ', 'savoir', 'je', 'passé composé', ['savoir', 'moment'], FCVDR),
  conj(316, 'il a su', 'he found out', '/i.la sy/', 'ee-lah SÜ', 'savoir', 'il', 'passé composé', ['savoir', 'moment']),
  conj(317, 'nous avons su', 'we found out', '/nu.za.vɔ̃ sy/', 'noo-zah-vohⁿ SÜ', 'savoir', 'nous', 'passé composé', ['savoir', 'moment']),
  gap(318, "Je savais qu'elle partait.", 'I knew she was leaving.',
    '/ʒə sa.vɛ kɛl paʁ.tɛ/', 'zhuh sah-VEH kel par-TEH',
    "Je ___ qu'elle partait. (savoir · tu le savais déjà)",
    "Un état : le savoir était là avant. EN: a state; you already knew.",
    ['savoir', 'etat', 'paire'], FCVDR),
  gap(319, "Hier soir, j'ai su qu'elle partait.", 'Last night I found out she was leaving.',
    '/jɛʁ swaʁ ʒe sy kɛl paʁ.tɛ/', 'YEHR SWAHR · ZHAY SÜ kel par-TEH',
    "Hier soir, j'___ qu'elle partait. (savoir · tu l'as appris hier soir)",
    "La nouvelle arrive à un moment. EN: the news reached you at one moment.",
    ['savoir', 'moment', 'paire'], FCVDR),
  sent(320, 'Je savais où elle habitait.', 'I knew where she lived.',
    '/ʒə sa.vɛ u ɛ.la.bi.tɛ/', 'zhuh sah-VEH oo eh-lah-bee-TEH', ['savoir', 'etat']),
  sent(321, "J'ai su la vérité trop tard.", 'I found out the truth too late.',
    '/ʒe sy la ve.ʁi.te tʁo taʁ/', 'ZHAY SÜ lah vay-ree-TAY troh TAR', ['savoir', 'moment']),
  sent(322, "Je ne savais pas que tu étais malade.", "I didn't know you were ill.",
    '/ʒə nə sa.vɛ pa kə ty e.tɛ ma.lad/', 'zhuh nuh sah-VEH pah kuh tü ay-teh ma-LAD', ['savoir', 'etat', 'negation'], FCVDR),
  sent(323, "Quand j'ai su la nouvelle, j'ai appelé ma sœur.", 'When I heard the news, I called my sister.',
    '/kɑ̃ ʒe sy la nu.vɛl ʒe a.ple ma sœʁ/', 'kahⁿ zhay SÜ lah noo-VEL · zhay ah-play mah SUHR', ['savoir', 'moment']),
  sent(324, 'Il savait déjà tout.', 'He already knew everything.',
    '/il sa.vɛ de.ʒa tu/', 'eel sah-VEH day-zhah TOO', ['savoir', 'etat']),
  sent(325, 'Je savais nager à cinq ans.', 'I could swim at five.',
    '/ʒə sa.vɛ na.ʒe a sɛ̃.kɑ̃/', 'zhuh sah-VEH nah-ZHAY ah sehⁿ-KAHⁿ', ['savoir', 'etat', 'capacite']),
  sent(326, "On l'a su par un collègue.", 'We found out from a colleague.',
    '/ɔ̃ la sy paʁ ɛ̃ kɔ.lɛɡ/', 'ohⁿ lah SÜ par uhⁿ koh-LEG', ['savoir', 'moment']),
  sent(327, "Je ne l'ai jamais su.", 'I never found out.',
    '/ʒə nə le ʒa.mɛ sy/', 'zhuh nuh lay zhah-meh SÜ', ['savoir', 'moment', 'negation']),
  sent(328, "Tout le monde le savait, sauf moi.", 'Everyone knew, except me.',
    '/tu lə mɔ̃d lə sa.vɛ so mwa/', 'too luh MOHⁿD luh sah-VEH · soh MWAH', ['savoir', 'etat']),
];

/* ── ACT 3 · CONNAÎTRE ─────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  conj(331, 'je connaissais', 'I knew', '/ʒə kɔ.nɛ.sɛ/', 'zhuh koh-neh-SEH', 'connaître', 'je', 'imparfait', ['connaitre', 'etat']),
  conj(332, 'tu connaissais', 'you knew', '/ty kɔ.nɛ.sɛ/', 'tü koh-neh-SEH', 'connaître', 'tu', 'imparfait', ['connaitre', 'etat']),
  conj(333, 'nous connaissions', 'we knew', '/nu kɔ.nɛ.sjɔ̃/', 'noo koh-neh-SYOHⁿ', 'connaître', 'nous', 'imparfait', ['connaitre', 'etat']),
  conj(334, 'ils connaissaient', 'they knew', '/il kɔ.nɛ.sɛ/', 'eel koh-neh-SEH', 'connaître', 'ils', 'imparfait', ['connaitre', 'etat']),
  conj(335, "j'ai connu", 'I met', '/ʒe kɔ.ny/', 'ZHAY koh-NÜ', 'connaître', 'je', 'passé composé', ['connaitre', 'moment'], FCVDR),
  conj(336, 'elle a connu', 'she met', '/ɛ.la kɔ.ny/', 'eh-lah koh-NÜ', 'connaître', 'elle', 'passé composé', ['connaitre', 'moment']),
  gap(337, 'Je connaissais déjà sa sœur.', 'I already knew her sister.',
    '/ʒə kɔ.nɛ.sɛ de.ʒa sa sœʁ/', 'zhuh koh-neh-SEH day-ZHAH sah SUHR',
    'Je ___ déjà sa sœur. (connaître · tu la connaissais avant)',
    "Un état : aucune rencontre dans la phrase. EN: a state; no meeting happens.",
    ['connaitre', 'etat', 'paire']),
  gap(338, "J'ai connu sa sœur à Dakar.", 'I met her sister in Dakar.',
    '/ʒe kɔ.ny sa sœʁ a da.kaʁ/', 'ZHAY koh-NÜ sah SUHR ah dah-KAR',
    "J'___ sa sœur à Dakar. (connaître · la première rencontre)",
    "La rencontre a lieu. EN: the meeting happens: met.",
    ['connaitre', 'moment', 'paire']),
  sent(339, 'Je connaissais bien ce quartier.', 'I knew that neighbourhood well.',
    '/ʒə kɔ.nɛ.sɛ bjɛ̃ sə kaʁ.tje/', 'zhuh koh-neh-SEH byehⁿ suh kar-TYAY', ['connaitre', 'etat']),
  sent(340, 'Nous nous sommes connus à Genève.', 'We met in Geneva.',
    '/nu nu sɔm kɔ.ny a ʒə.nɛv/', 'noo noo SOM koh-NÜ ah zhuh-NEV', ['connaitre', 'moment', 'pronominal']),
  sent(341, 'Il a connu des hivers très durs.', 'He went through some very hard winters.',
    '/i.la kɔ.ny de.zi.vɛʁ tʁɛ dyʁ/', 'ee-lah koh-NÜ day-zee-VEHR treh DÜR', ['connaitre', 'periode']),
  sent(342, 'Elle a connu la guerre.', 'She lived through the war.',
    '/ɛ.la kɔ.ny la ɡɛʁ/', 'eh-lah koh-NÜ lah GEHR', ['connaitre', 'periode']),
  sent(343, 'Je ne connaissais personne à Montréal.', 'I knew nobody in Montreal.',
    '/ʒə nə kɔ.nɛ.sɛ pɛʁ.sɔn a mɔ̃.ʁe.al/', 'zhuh nuh koh-neh-SEH pehr-SON ah mohⁿ-ray-AL', ['connaitre', 'etat', 'negation'], FCVDR),
  sent(344, "J'ai connu mon mari au travail.", 'I met my husband at work.',
    '/ʒe kɔ.ny mɔ̃ ma.ʁi o tʁa.vaj/', 'ZHAY koh-NÜ mohⁿ mah-REE oh trah-VAHY', ['connaitre', 'moment']),
  sent(345, "Quand je l'ai connu, il avait vingt ans.", 'When I met him, he was twenty.',
    '/kɑ̃ ʒə le kɔ.ny i.la.vɛ vɛ̃.tɑ̃/', 'kahⁿ zhuh lay koh-NÜ · ee-lah-veh vehⁿ-TAHⁿ', ['connaitre', 'moment', 'paire']),
  sent(346, 'Ce village a connu de grands changements.', 'That village went through big changes.',
    '/sə vi.laʒ a kɔ.ny də ɡʁɑ̃ ʃɑ̃ʒ.mɑ̃/', 'suh vee-LAHZH ah koh-NÜ duh grahⁿ shahⁿzh-MAHⁿ', ['connaitre', 'periode']),
  sent(347, 'Je le connais depuis dix ans.', "I've known him for ten years.",
    '/ʒə lə kɔ.nɛ də.pɥi di.zɑ̃/', 'zhuh luh koh-NEH duh-PWEE dee-ZAHⁿ', ['connaitre', 'present', 'contraste']),
  sent(348, "Je l'ai connu pendant dix ans.", 'I knew him for ten years, and that is over.',
    '/ʒə le kɔ.ny pɑ̃.dɑ̃ di.zɑ̃/', 'zhuh lay koh-NÜ pahⁿ-dahⁿ dee-ZAHⁿ', ['connaitre', 'periode', 'erreur-sens']),
];

/* ── ACT 4 · POUVOIR ───────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  conj(351, 'je pouvais', 'I was able to', '/ʒə pu.vɛ/', 'zhuh poo-VEH', 'pouvoir', 'je', 'imparfait', ['pouvoir', 'etat']),
  conj(352, 'il pouvait', 'he was able to', '/il pu.vɛ/', 'eel poo-VEH', 'pouvoir', 'il', 'imparfait', ['pouvoir', 'etat']),
  conj(353, 'nous pouvions', 'we were able to', '/nu pu.vjɔ̃/', 'noo poo-VYOHⁿ', 'pouvoir', 'nous', 'imparfait', ['pouvoir', 'etat']),
  conj(354, "j'ai pu", 'I managed to', '/ʒe py/', 'ZHAY PÜ', 'pouvoir', 'je', 'passé composé', ['pouvoir', 'moment'], FCVDR),
  conj(355, 'elle a pu', 'she managed to', '/ɛ.la py/', 'eh-lah PÜ', 'pouvoir', 'elle', 'passé composé', ['pouvoir', 'moment']),
  gap(356, "Je pouvais venir, mais je n'avais pas envie.", "I was able to come, but I didn't feel like it.",
    '/ʒə pu.vɛ və.niʁ mɛ ʒə na.vɛ pa ɑ̃.vi/', 'zhuh poo-VEH vuh-NEER · meh zhuh nah-VEH pah ahⁿ-VEE',
    "Je ___ venir, mais je n'avais pas envie. (pouvoir · c'était possible)",
    "Capable, oui. Venu ? La suite le dit. EN: able to; the rest of the sentence gives the outcome.",
    ['pouvoir', 'etat', 'paire']),
  gap(357, "Finalement, j'ai pu venir.", 'In the end I managed to come.',
    '/fi.nal.mɑ̃ ʒe py və.niʁ/', 'fee-nahl-MAHⁿ · ZHAY PÜ vuh-NEER',
    "Finalement, j'___ venir. (pouvoir · tu as réussi)",
    "Tu as réussi, et tu es venu. EN: I managed to, and I came.",
    ['pouvoir', 'moment', 'paire'], FCVDR),
  gap(358, "Je n'ai pas pu venir.", "I couldn't come.",
    '/ʒə ne pa py və.niʁ/', 'zhuh nay pah PÜ vuh-NEER',
    "Je n'___ pas ___ venir. (pouvoir · ça n'a pas marché)",
    "Tu as essayé, et ça a échoué. EN: I failed to come.",
    ['pouvoir', 'moment', 'negation', 'paire'], FCVDR),
  sent(359, "J'ai pu entrer par la fenêtre.", 'I managed to get in through the window.',
    '/ʒe py ɑ̃.tʁe paʁ la fə.nɛtʁ/', 'ZHAY PÜ ahⁿ-TRAY par lah fuh-NEHTR', ['pouvoir', 'moment']),
  sent(360, 'Je pouvais travailler de la maison.', 'I was allowed to work from home.',
    '/ʒə pu.vɛ tʁa.va.je də la mɛ.zɔ̃/', 'zhuh poo-VEH trah-vah-YAY duh lah meh-ZOHⁿ', ['pouvoir', 'etat', 'permission']),
  sent(361, "Elle n'a pas pu finir son rapport.", "She couldn't finish her report.",
    '/ɛl na pa py fi.niʁ sɔ̃ ʁa.pɔʁ/', 'el nah pah PÜ fee-NEER sohⁿ rah-POR', ['pouvoir', 'moment', 'negation']),
  sent(362, 'On a pu changer les billets.', 'We managed to change the tickets.',
    '/ɔ̃.na py ʃɑ̃.ʒe le bi.jɛ/', 'ohⁿ-nah PÜ shahⁿ-ZHAY lay bee-YEH', ['pouvoir', 'moment']),
  sent(363, 'Je ne pouvais pas dormir.', "I couldn't sleep.",
    '/ʒə nə pu.vɛ pa dɔʁ.miʁ/', 'zhuh nuh poo-VEH pah dor-MEER', ['pouvoir', 'etat', 'negation'], FCVDR),
  sent(364, "Je n'ai pas pu dormir cette nuit-là.", "I couldn't get to sleep that night.",
    '/ʒə ne pa py dɔʁ.miʁ sɛt nɥi.la/', 'zhuh nay pah PÜ dor-MEER set nwee-LAH', ['pouvoir', 'moment', 'negation']),
  sent(365, 'Tu pouvais me le dire.', 'You could have told me.',
    '/ty pu.vɛ mə lə diʁ/', 'tü poo-VEH muh luh DEER', ['pouvoir', 'etat', 'reproche']),
  sent(366, 'Nous avons pu visiter le musée.', 'We managed to visit the museum.',
    '/nu.za.vɔ̃ py vi.zi.te lə my.ze/', 'noo-zah-vohⁿ PÜ vee-zee-TAY luh mü-ZAY', ['pouvoir', 'moment']),
  sent(367, 'Il pouvait rester une heure de plus.', 'He was able to stay an hour longer.',
    '/il pu.vɛ ʁɛs.te y.nœʁ də plys/', 'eel poo-VEH res-TAY ü-NUHR duh PLÜSS', ['pouvoir', 'etat']),
  sent(368, "Le magasin était fermé, donc je n'ai pas pu acheter le pain.", "The shop was closed, so I couldn't buy the bread.",
    '/lə ma.ɡa.zɛ̃ e.tɛ fɛʁ.me dɔ̃k ʒə ne pa py aʃ.te lə pɛ̃/', 'luh mah-gah-ZEHⁿ ay-teh fehr-MAY · dohⁿk zhuh nay pah PÜ ahsh-tay luh PEHⁿ', ['pouvoir', 'moment', 'negation']),
];

/* ── ACT 5 · VOULOIR ───────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  conj(371, 'je voulais', 'I wanted', '/ʒə vu.lɛ/', 'zhuh voo-LEH', 'vouloir', 'je', 'imparfait', ['vouloir', 'etat']),
  conj(372, 'il voulait', 'he wanted', '/il vu.lɛ/', 'eel voo-LEH', 'vouloir', 'il', 'imparfait', ['vouloir', 'etat']),
  conj(373, 'nous voulions', 'we wanted', '/nu vu.ljɔ̃/', 'noo voo-LYOHⁿ', 'vouloir', 'nous', 'imparfait', ['vouloir', 'etat']),
  conj(374, "j'ai voulu", 'I tried to', '/ʒe vu.ly/', 'ZHAY voo-LÜ', 'vouloir', 'je', 'passé composé', ['vouloir', 'moment'], FCVDR),
  conj(375, "il n'a pas voulu", 'he refused', '/il na pa vu.ly/', 'eel nah pah voo-LÜ', 'vouloir', 'il', 'passé composé', ['vouloir', 'moment', 'negation']),
  gap(376, "Je voulais t'appeler.", 'I wanted to call you.',
    '/ʒə vu.lɛ ta.ple/', 'zhuh voo-LEH tah-PLAY',
    "Je ___ t'appeler. (vouloir · une envie, un projet)",
    "Une envie. Souvent, ce n'est pas fait. EN: a wish; often it did not happen.",
    ['vouloir', 'etat', 'paire']),
  gap(377, "J'ai voulu t'appeler, mais ton téléphone était éteint.", 'I tried to call you, but your phone was off.',
    '/ʒe vu.ly ta.ple mɛ tɔ̃ te.le.fɔn e.tɛ e.tɛ̃/', 'ZHAY voo-LÜ tah-PLAY · meh tohⁿ tay-lay-FON ay-TEH ay-TEHⁿ',
    "J'___ t'appeler, mais ton téléphone était éteint. (vouloir · tu as essayé)",
    "Tu as pris le téléphone : tu as essayé. EN: you actually tried.",
    ['vouloir', 'moment', 'paire']),
  gap(378, "Il n'a pas voulu signer le contrat.", 'He refused to sign the contract.',
    '/il na pa vu.ly si.ɲe lə kɔ̃.tʁa/', 'eel nah pah voo-LÜ see-NYAY luh kohⁿ-TRAH',
    "Il n'___ pas ___ signer le contrat. (vouloir · il a dit non)",
    "Un refus, à un moment précis. EN: a refusal, not a missing wish.",
    ['vouloir', 'moment', 'negation', 'paire'], FCVDR),
  sent(379, 'Je ne voulais pas te déranger.', "I didn't want to disturb you.",
    '/ʒə nə vu.lɛ pa tə de.ʁɑ̃.ʒe/', 'zhuh nuh voo-LEH pah tuh day-rahⁿ-ZHAY', ['vouloir', 'etat', 'negation'], FCVDR),
  sent(380, "J'ai voulu ouvrir la porte, mais la clé ne tournait pas.", 'I tried to open the door, but the key would not turn.',
    '/ʒe vu.ly u.vʁiʁ la pɔʁt mɛ la kle nə tuʁ.nɛ pa/', 'ZHAY voo-LÜ oo-VREER lah PORT · meh lah KLAY nuh toor-NEH pah', ['vouloir', 'moment']),
  sent(381, 'Elle a voulu changer de travail.', 'She decided to change jobs.',
    '/ɛ.la vu.ly ʃɑ̃.ʒe də tʁa.vaj/', 'eh-lah voo-LÜ shahⁿ-ZHAY duh trah-VAHY', ['vouloir', 'moment', 'decision']),
  sent(382, 'Je voulais devenir médecin.', 'I wanted to be a doctor.',
    '/ʒə vu.lɛ dəv.niʁ med.sɛ̃/', 'zhuh voo-LEH duhv-NEER mayd-SEHⁿ', ['vouloir', 'etat']),
  sent(383, "Ils n'ont pas voulu nous aider.", 'They refused to help us.',
    '/il nɔ̃ pa vu.ly nu.ze.de/', 'eel nohⁿ pah voo-LÜ noo-zay-DAY', ['vouloir', 'moment', 'negation']),
  sent(384, 'Je voulais juste te dire merci.', 'I just wanted to say thank you.',
    '/ʒə vu.lɛ ʒyst tə diʁ mɛʁ.si/', 'zhuh voo-LEH ZHÜST tuh deer mehr-SEE', ['vouloir', 'etat', 'politesse']),
  sent(385, 'On a voulu bien faire.', 'We meant well.',
    '/ɔ̃.na vu.ly bjɛ̃ fɛʁ/', 'ohⁿ-nah voo-LÜ byehⁿ FEHR', ['vouloir', 'moment']),
  sent(386, 'Il voulait partir tôt.', 'He wanted to leave early.',
    '/il vu.lɛ paʁ.tiʁ to/', 'eel voo-LEH par-TEER TOH', ['vouloir', 'etat']),
  sent(387, "Je n'ai pas voulu répondre à sa question.", 'I refused to answer his question.',
    '/ʒə ne pa vu.ly ʁe.pɔ̃dʁ a sa kɛs.tjɔ̃/', 'zhuh nay pah voo-LÜ ray-POHⁿDR ah sah kes-TYOHⁿ', ['vouloir', 'moment', 'negation']),
  sent(388, 'Elle voulait nous aider, mais elle était loin.', 'She wanted to help us, but she was far away.',
    '/ɛl vu.lɛ nu.ze.de mɛ ɛ.le.tɛ lwɛ̃/', 'el voo-LEH noo-zay-DAY · meh eh-lay-teh LWEHⁿ', ['vouloir', 'etat']),
];

/* ── ACT 6 · DEVOIR ────────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  conj(1200, 'je devais', 'I was supposed to', '/ʒə də.vɛ/', 'zhuh duh-VEH', 'devoir', 'je', 'imparfait', ['devoir', 'etat']),
  conj(1201, 'il devait', 'he was supposed to', '/il də.vɛ/', 'eel duh-VEH', 'devoir', 'il', 'imparfait', ['devoir', 'etat']),
  conj(1202, 'nous devions', 'we were supposed to', '/nu də.vjɔ̃/', 'noo duh-VYOHⁿ', 'devoir', 'nous', 'imparfait', ['devoir', 'etat']),
  conj(1203, "j'ai dû", 'I had to, and did', '/ʒe dy/', 'ZHAY DÜ', 'devoir', 'je', 'passé composé', ['devoir', 'moment'], FCVDR),
  conj(1204, 'elle a dû', 'she had to, or she must have', '/ɛ.la dy/', 'eh-lah DÜ', 'devoir', 'elle', 'passé composé', ['devoir', 'moment']),
  gap(1205, 'Je devais rendre le rapport mercredi.', 'I was supposed to hand in the report on Wednesday.',
    '/ʒə də.vɛ ʁɑ̃dʁ lə ʁa.pɔʁ mɛʁ.kʁə.di/', 'zhuh duh-VEH RAHⁿDR luh rah-POR mehr-kruh-DEE',
    'Je ___ rendre le rapport mercredi. (devoir · le plan)',
    "Le plan. Rendu ou pas ? La phrase ne le dit pas. EN: the plan; the outcome is open.",
    ['devoir', 'etat', 'paire']),
  gap(1206, "J'ai dû rendre le rapport en retard.", 'I had to hand the report in late.',
    '/ʒe dy ʁɑ̃dʁ lə ʁa.pɔʁ ɑ̃ ʁə.taʁ/', 'ZHAY DÜ RAHⁿDR luh rah-POR ahⁿ ruh-TAR',
    "J'___ rendre le rapport en retard. (devoir · obligé, et fait)",
    "Obligation, et c'est fait. EN: I had to, and I did.",
    ['devoir', 'moment', 'paire']),
  gap(1207, 'Il a dû oublier.', 'He must have forgotten.',
    '/i.la dy u.bli.je/', 'ee-lah DÜ oo-blee-AY',
    'Il ___ oublier. (devoir · tu le supposes)',
    "Une supposition sur le passé. EN: a guess: he must have forgotten.",
    ['devoir', 'supposition', 'paire'], FCVDR),
  sent(1208, 'Elle a dû se tromper de salle.', 'She must have gone to the wrong room.',
    '/ɛ.la dy sə tʁɔ̃.pe də sal/', 'eh-lah DÜ suh trohⁿ-PAY duh SAL', ['devoir', 'supposition']),
  sent(1209, 'Tu as dû avoir peur.', 'You must have been scared.',
    '/ty a dy a.vwaʁ pœʁ/', 'tü ah DÜ ah-vwar PUHR', ['devoir', 'supposition']),
  sent(1210, 'Nous devions partir à six heures.', 'We were supposed to leave at six.',
    '/nu də.vjɔ̃ paʁ.tiʁ a si.zœʁ/', 'noo duh-VYOHⁿ par-TEER ah see-ZUHR', ['devoir', 'etat']),
  sent(1211, 'Nous avons dû partir plus tôt.', 'We had to leave earlier.',
    '/nu.za.vɔ̃ dy paʁ.tiʁ ply to/', 'noo-zah-vohⁿ DÜ par-TEER plü TOH', ['devoir', 'moment']),
  sent(1212, "Je devais travailler samedi, mais c'était annulé.", 'I was supposed to work on Saturday, but it was cancelled.',
    '/ʒə də.vɛ tʁa.va.je sam.di mɛ se.tɛ a.ny.le/', 'zhuh duh-VEH trah-vah-YAY sam-DEE · meh say-teh ah-nü-LAY', ['devoir', 'etat', 'paire']),
  gap(1213, "Samedi, j'ai dû travailler.", 'On Saturday I had to work.',
    '/sam.di ʒe dy tʁa.va.je/', 'sam-DEE · ZHAY DÜ trah-vah-YAY',
    "Samedi, j'___ travailler. (devoir · et tu as travaillé)",
    "Avec je devais, on peut croire que tu étais libre. EN: dû says you worked.",
    ['devoir', 'moment', 'erreur-sens'], FCVDR),
  sent(1214, 'Il a dû pleuvoir cette nuit.', 'It must have rained last night.',
    '/i.la dy plø.vwaʁ sɛt nɥi/', 'ee-lah DÜ pluh-VWAR set NWEE', ['devoir', 'supposition']),
  sent(1215, 'Le train a dû partir sans nous.', 'The train must have left without us.',
    '/lə tʁɛ̃ a dy paʁ.tiʁ sɑ̃ nu/', 'luh TREHⁿ ah DÜ par-TEER sahⁿ NOO', ['devoir', 'supposition']),
  sent(1216, "Je ne devais pas être là.", "I wasn't supposed to be there.",
    '/ʒə nə də.vɛ pa ɛtʁ la/', 'zhuh nuh duh-VEH pah EHTR LAH', ['devoir', 'etat', 'negation']),
  sent(1217, "J'ai dû attendre deux heures.", 'I had to wait two hours.',
    '/ʒe dy a.tɑ̃dʁ dø.zœʁ/', 'ZHAY DÜ ah-TAHⁿDR duh ZUHR', ['devoir', 'moment']),
  sent(1218, 'Elle devait me rappeler.', 'She was supposed to call me back.',
    '/ɛl də.vɛ mə ʁa.ple/', 'el duh-VEH muh rah-PLAY', ['devoir', 'etat']),
  sent(1219, 'Elle a dû annuler son vol.', 'She had to cancel her flight.',
    '/ɛ.la dy a.ny.le sɔ̃ vɔl/', 'eh-lah DÜ ah-nü-LAY sohⁿ VOL', ['devoir', 'moment']),
];

/* ── ACT 7 · AVOIR PEUR, ÊTRE MALADE ───────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  conj(1220, "j'avais peur", 'I was scared', '/ʒa.vɛ pœʁ/', 'zhah-VEH PUHR', 'avoir', 'je', 'imparfait', ['avoir', 'etat']),
  conj(1221, "j'ai eu peur", 'I got scared', '/ʒe y pœʁ/', 'ZHAY Ü PUHR', 'avoir', 'je', 'passé composé', ['avoir', 'moment'], FCVDR),
  gap(1222, "J'avais peur du chien.", 'I was scared of the dog.',
    '/ʒa.vɛ pœʁ dy ʃjɛ̃/', 'zhah-VEH PUHR dü SHYEHⁿ',
    "J'___ peur du chien. (avoir · un état qui dure)",
    "La peur dure : avant, pendant, après. EN: a lasting fear.",
    ['avoir', 'etat', 'paire']),
  gap(1223, "Quand le chien a aboyé, j'ai eu peur.", 'When the dog barked, I got scared.',
    '/kɑ̃ lə ʃjɛ̃ a a.bwa.je ʒe y pœʁ/', 'kahⁿ luh SHYEHⁿ ah ah-bwah-YAY · ZHAY Ü PUHR',
    "Quand le chien a aboyé, j'___ peur. (avoir · la peur commence)",
    "La peur commence à un moment. EN: I got scared, at that moment.",
    ['avoir', 'moment', 'paire']),
  sent(1224, "J'avais faim, alors j'ai acheté un sandwich.", 'I was hungry, so I bought a sandwich.',
    '/ʒa.vɛ fɛ̃ a.lɔʁ ʒe aʃ.te ɛ̃ sɑ̃d.witʃ/', 'zhah-VEH FEHⁿ · ah-LOR zhay ahsh-tay uhⁿ sahⁿd-WEECH', ['avoir', 'etat']),
  sent(1225, "J'ai eu faim vers midi.", 'I got hungry around noon.',
    '/ʒe y fɛ̃ vɛʁ mi.di/', 'ZHAY Ü FEHⁿ vehr mee-DEE', ['avoir', 'moment']),
  sent(1226, "J'avais mal à la tête toute la journée.", 'I had a headache all day.',
    '/ʒa.vɛ mal a la tɛt tut la ʒuʁ.ne/', 'zhah-VEH mal ah lah TET · toot lah zhoor-NAY', ['avoir', 'etat']),
  sent(1227, "J'ai eu mal au dos après le déménagement.", 'My back started hurting after the move.',
    '/ʒe y mal o do a.pʁɛ lə de.me.naʒ.mɑ̃/', 'ZHAY Ü mal oh DOH · a-PREH luh day-may-nahzh-MAHⁿ', ['avoir', 'moment']),
  sent(1228, "Elle avait envie de partir.", 'She felt like leaving.',
    '/ɛ.la.vɛ ɑ̃.vi də paʁ.tiʁ/', 'eh-lah-VEH ahⁿ-VEE duh par-TEER', ['avoir', 'etat']),
  sent(1229, "Elle a eu envie de partir tout à coup.", 'She suddenly felt like leaving.',
    '/ɛ.la y ɑ̃.vi də paʁ.tiʁ tu.ta ku/', 'eh-lah Ü ahⁿ-VEE duh par-TEER · too-tah KOO', ['avoir', 'moment']),
  sent(1230, 'Nous avions une vieille voiture.', 'We had an old car.',
    '/nu.za.vjɔ̃ yn vjɛj vwa.tyʁ/', 'noo-zah-VYOHⁿ ün vyey vwah-TÜR', ['avoir', 'etat']),
  sent(1231, 'Nous avons eu une amende.', 'We got a fine.',
    '/nu.za.vɔ̃.zy y.na.mɑ̃d/', 'noo-zah-vohⁿ-ZÜ ü-nah-MAHⁿD', ['avoir', 'moment']),
  conj(1232, 'il était malade', 'he was ill', '/i.le.tɛ ma.lad/', 'ee-lay-TEH ma-LAD', 'être', 'il', 'imparfait', ['etre', 'etat']),
  conj(1233, 'il a été malade', 'he fell ill', '/i.la e.te ma.lad/', 'ee-lah ay-TAY ma-LAD', 'être', 'il', 'passé composé', ['etre', 'moment']),
  gap(1234, 'Ce jour-là, il était malade.', 'That day he was ill.',
    '/sə ʒuʁ.la i.le.tɛ ma.lad/', 'suh zhoor-LAH · ee-lay-TEH ma-LAD',
    'Ce jour-là, il ___ malade. (être · le décor du jour)',
    "On décrit la situation. EN: the state of that day.",
    ['etre', 'etat', 'paire']),
  gap(1235, 'Il a été malade après le repas.', 'He fell ill after the meal.',
    '/i.la e.te ma.lad a.pʁɛ lə ʁə.pa/', 'ee-lah ay-TAY ma-LAD · a-PREH luh ruh-PAH',
    'Il ___ malade après le repas. (être · ça commence après le repas)',
    "Il tombe malade, ou la maladie est finie. EN: he fell ill, or was ill for a period now over.",
    ['etre', 'moment', 'paire']),
  sent(1236, "J'étais très timide à l'école.", 'I was very shy at school.',
    '/ʒe.tɛ tʁɛ ti.mid a le.kɔl/', 'zhay-TEH treh tee-MEED ah lay-KOL', ['etre', 'etat']),
  sent(1237, "J'ai été très surpris.", 'I was really surprised.',
    '/ʒe e.te tʁɛ syʁ.pʁi/', 'ZHAY ay-TAY treh sür-PREE', ['etre', 'moment']),
  sent(1238, 'Elle était en retard ce matin-là.', 'She was late that morning.',
    '/ɛ.le.tɛ ɑ̃ ʁə.taʁ sə ma.tɛ̃.la/', 'eh-lay-TEH ahⁿ ruh-TAR · suh mah-tehⁿ-LAH', ['etre', 'etat']),
  sent(1239, 'Elle a été absente toute la semaine.', 'She was away for the whole week.',
    '/ɛ.la e.te ap.sɑ̃t tut la sə.mɛn/', 'eh-lah ay-TAY ap-SAHⁿT · toot lah suh-MEN', ['etre', 'moment', 'periode']),
  sent(1240, "C'était une belle journée.", 'It was a beautiful day.',
    '/se.tɛ yn bɛl ʒuʁ.ne/', 'say-TEH ün bel zhoor-NAY', ['etre', 'etat']),
  sent(1241, "Ça a été difficile, mais on a réussi.", 'It was hard, but we managed.',
    '/sa a e.te di.fi.sil mɛ ɔ̃.na ʁe.y.si/', 'sah ah ay-TAY dee-fee-SEEL · meh ohⁿ-nah ray-ü-SEE', ['etre', 'moment', 'periode']),
];

/* ── ACT 8 · FALLOIR, CROIRE, PENSER ───────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  conj(1242, 'il fallait', 'it was necessary', '/il fa.lɛ/', 'eel fah-LEH', 'falloir', 'il', 'imparfait', ['falloir', 'etat']),
  conj(1243, 'il a fallu', 'it was necessary, and it was done', '/i.la fa.ly/', 'ee-lah fah-LÜ', 'falloir', 'il', 'passé composé', ['falloir', 'moment']),
  gap(1244, 'Il fallait partir tôt.', 'We had to leave early.',
    '/il fa.lɛ paʁ.tiʁ to/', 'eel fah-LEH par-TEER TOH',
    'Il ___ partir tôt. (falloir · le besoin, fait ou pas)',
    "Le besoin. Parti tôt ? La phrase ne le dit pas. EN: the need; the outcome is open.",
    ['falloir', 'etat', 'paire']),
  gap(1245, 'Il a fallu partir tôt.', 'We had to leave early, and we did.',
    '/i.la fa.ly paʁ.tiʁ to/', 'ee-lah fah-LÜ par-TEER TOH',
    'Il ___ partir tôt. (falloir · et on est parti tôt)',
    "Le besoin, et c'est fait. EN: the need was met.",
    ['falloir', 'moment', 'paire']),
  sent(1246, 'Il fallait un visa pour entrer.', 'You needed a visa to get in.',
    '/il fa.lɛ ɛ̃ vi.za puʁ ɑ̃.tʁe/', 'eel fah-LEH uhⁿ vee-ZAH poor ahⁿ-TRAY', ['falloir', 'etat']),
  sent(1247, 'Il a fallu deux heures pour tout ranger.', 'It took two hours to tidy everything.',
    '/i.la fa.ly dø.zœʁ puʁ tu ʁɑ̃.ʒe/', 'ee-lah fah-LÜ duh ZUHR poor too rahⁿ-ZHAY', ['falloir', 'moment']),
  sent(1248, 'Il fallait le dire.', 'You should have said so.',
    '/il fa.lɛ lə diʁ/', 'eel fah-LEH luh DEER', ['falloir', 'etat', 'reproche']),
  conj(1249, 'je croyais', 'I thought', '/ʒə kʁwa.jɛ/', 'zhuh krwah-YEH', 'croire', 'je', 'imparfait', ['croire', 'etat']),
  conj(1250, "j'ai cru", 'I thought for a moment', '/ʒe kʁy/', 'ZHAY KRÜ', 'croire', 'je', 'passé composé', ['croire', 'moment']),
  gap(1251, "Je croyais que c'était fermé.", 'I thought it was closed.',
    '/ʒə kʁwa.jɛ kə se.tɛ fɛʁ.me/', 'zhuh krwah-YEH kuh say-TEH fehr-MAY',
    "Je ___ que c'était fermé. (croire · et c'était faux)",
    "Tu le croyais avant, et tu as appris le contraire. EN: I thought so, wrongly.",
    ['croire', 'etat', 'paire'], FCVDR),
  sent(1252, "J'ai cru que tu étais parti.", 'For a moment I thought you had left.',
    '/ʒe kʁy kə ty e.tɛ paʁ.ti/', 'ZHAY KRÜ kuh tü ay-teh par-TEE', ['croire', 'moment', 'paire']),
  sent(1253, 'Je pensais que tu étais à Montréal.', 'I thought you were in Montreal.',
    '/ʒə pɑ̃.sɛ kə ty e.tɛ a mɔ̃.ʁe.al/', 'zhuh pahⁿ-SEH kuh tü ay-teh ah mohⁿ-ray-AL', ['penser', 'etat'], FCVDR),
  sent(1254, "Je ne pensais pas que c'était si loin.", "I didn't think it was so far.",
    '/ʒə nə pɑ̃.sɛ pa kə se.tɛ si lwɛ̃/', 'zhuh nuh pahⁿ-SEH pah kuh say-teh see LWEHⁿ', ['penser', 'etat', 'negation']),
  sent(1255, 'Je croyais bien faire.', 'I thought I was doing the right thing.',
    '/ʒə kʁwa.jɛ bjɛ̃ fɛʁ/', 'zhuh krwah-YEH byehⁿ FEHR', ['croire', 'etat']),
  sent(1256, 'Elle croyait que la réunion était à dix heures.', 'She thought the meeting was at ten.',
    '/ɛl kʁwa.jɛ kə la ʁe.y.njɔ̃ e.tɛ a di.zœʁ/', 'el krwah-YEH kuh lah ray-ü-nyohⁿ ay-teh ah dee-ZUHR', ['croire', 'etat']),
  sent(1257, "On a cru entendre du bruit.", 'We thought we heard a noise.',
    '/ɔ̃.na kʁy ɑ̃.tɑ̃dʁ dy bʁɥi/', 'ohⁿ-nah KRÜ ahⁿ-TAHⁿDR dü BRWEE', ['croire', 'moment']),
  sent(1258, 'Je pensais à toi hier soir.', 'I was thinking of you last night.',
    '/ʒə pɑ̃.sɛ a twa jɛʁ swaʁ/', 'zhuh pahⁿ-SEH ah TWAH · yehr SWAHR', ['penser', 'etat']),
  sent(1259, "J'ai pensé à toi quand j'ai vu la photo.", 'I thought of you when I saw the photo.',
    '/ʒe pɑ̃.se a twa kɑ̃ ʒe vy la fɔ.to/', 'ZHAY pahⁿ-SAY ah TWAH · kahⁿ zhay vü lah foh-TOH', ['penser', 'moment']),
];

/* ── ACT 9 · LES INDICES ───────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  gap(1260, 'Hier, il pleuvait.', 'Yesterday it was raining.',
    '/jɛʁ il plø.vɛ/', 'YEHR · eel pluh-VEH',
    'Hier, il ___. (pleuvoir · le décor)',
    "hier ne choisit pas le temps. EN: hier does not pick the tense.",
    ['indice', 'hier', 'etat', 'paire']),
  gap(1261, 'Hier, il a plu.', 'Yesterday it rained.',
    '/jɛʁ i.la ply/', 'YEHR · ee-lah PLÜ',
    'Hier, il ___. (pleuvoir · un fait de la journée)',
    "Même mot, autre temps, et les deux sont corrects. EN: same cue, other tense, both correct.",
    ['indice', 'hier', 'moment', 'paire']),
  sent(1262, 'Hier soir, je travaillais encore à minuit.', 'Last night I was still working at midnight.',
    '/jɛʁ swaʁ ʒə tʁa.va.jɛ ɑ̃.kɔʁ a mi.nɥi/', 'yehr SWAHR · zhuh trah-vah-YEH ahⁿ-kor ah mee-NWEE', ['indice', 'hier', 'etat']),
  sent(1263, "Hier soir, j'ai travaillé jusqu'à minuit.", 'Last night I worked until midnight.',
    '/jɛʁ swaʁ ʒe tʁa.va.je ʒys.ka mi.nɥi/', 'yehr SWAHR · zhay trah-vah-YAY zhüs-kah mee-NWEE', ['indice', 'hier', 'moment']),
  gap(1264, 'Il a lu pendant deux heures.', 'He read for two hours.',
    '/i.la ly pɑ̃.dɑ̃ dø.zœʁ/', 'ee-lah LÜ pahⁿ-DAHⁿ duh ZUHR',
    'Il ___ pendant deux heures. (lire · une fois, une durée finie)',
    "Une durée fermée : en général, le passé composé. EN: a closed length of time.",
    ['indice', 'pendant', 'moment', 'paire']),
  gap(1265, 'Tous les soirs, il lisait pendant deux heures.', 'Every evening he read for two hours.',
    '/tu le swaʁ il li.zɛ pɑ̃.dɑ̃ dø.zœʁ/', 'too lay SWAHR · eel lee-ZEH pahⁿ-DAHⁿ duh ZUHR',
    'Tous les soirs, il ___ pendant deux heures. (lire · une habitude)',
    "Le contre-exemple : une habitude ramène l'imparfait. EN: a habit beats the cue.",
    ['indice', 'pendant', 'etat', 'contre-exemple']),
  sent(1266, 'Pendant les vacances, nous allions à la mer.', 'During the holidays we used to go to the sea.',
    '/pɑ̃.dɑ̃ le va.kɑ̃s nu.za.ljɔ̃ a la mɛʁ/', 'pahⁿ-dahⁿ lay vah-KAHⁿSS · noo-zah-lyohⁿ ah lah MEHR', ['indice', 'pendant', 'etat']),
  sent(1267, 'Pendant trois jours, il a neigé sans arrêt.', 'For three days it snowed non-stop.',
    '/pɑ̃.dɑ̃ tʁwa ʒuʁ i.la ne.ʒe sɑ̃.za.ʁɛ/', 'pahⁿ-dahⁿ trwah ZHOOR · ee-lah neh-ZHAY sahⁿ-zah-REH', ['indice', 'pendant', 'moment']),
  sent(1268, 'Il habitait à Québec depuis deux ans quand il a rencontré Léa.', 'He had been living in Quebec City for two years when he met Léa.',
    '/i.la.bi.tɛ a ke.bɛk də.pɥi dø.zɑ̃ kɑ̃ i.la ʁɑ̃.kɔ̃.tʁe le.a/', 'ee-lah-bee-TEH ah kay-BEK duh-PWEE duh-ZAHⁿ · kahⁿ ee-lah rahⁿ-kohⁿ-TRAY lay-AH', ['indice', 'depuis', 'reconnaissance'], ['flashcard', 'review'] as Item['drills']),
  sent(1269, "J'attendais depuis vingt minutes quand le bus est arrivé.", 'I had been waiting twenty minutes when the bus came.',
    '/ʒa.tɑ̃.dɛ də.pɥi vɛ̃ mi.nyt kɑ̃ lə bys ɛ.ta.ʁi.ve/', 'zhah-tahⁿ-DEH duh-PWEE vehⁿ mee-NÜT · kahⁿ luh büs eh-tah-ree-VAY', ['indice', 'depuis', 'reconnaissance'], ['flashcard', 'review'] as Item['drills']),
  sent(1270, 'Ce jour-là, tout allait bien.', 'That day everything was going well.',
    '/sə ʒuʁ.la tu.ta.lɛ bjɛ̃/', 'suh zhoor-LAH · too-tah-LEH byehⁿ', ['indice', 'ce-jour-la', 'etat']),
  sent(1271, 'Ce jour-là, tout a changé.', 'That day everything changed.',
    '/sə ʒuʁ.la tu.ta ʃɑ̃.ʒe/', 'suh zhoor-LAH · too-tah shahⁿ-ZHAY', ['indice', 'ce-jour-la', 'moment']),
  sent(1272, "Quand j'étais étudiant, je travaillais le week-end.", 'When I was a student I used to work at weekends.',
    '/kɑ̃ ʒe.tɛ.ze.ty.djɑ̃ ʒə tʁa.va.jɛ lə wi.kɛnd/', 'kahⁿ zhay-teh-zay-tü-DYAHⁿ · zhuh trah-vah-YEH luh wee-KEND', ['indice', 'quand', 'etat']),
  sent(1273, "Un jour, j'ai trouvé un autre travail.", 'One day I found another job.',
    '/ɛ̃ ʒuʁ ʒe tʁu.ve ɛ̃.no.tʁə tʁa.vaj/', 'uhⁿ ZHOOR · zhay troo-VAY uhⁿ-noh-truh trah-VAHY', ['indice', 'un-jour', 'moment']),
  sent(1274, 'Le matin, je prenais le bus.', 'In the mornings I used to take the bus.',
    '/lə ma.tɛ̃ ʒə pʁə.nɛ lə bys/', 'luh mah-TEHⁿ · zhuh pruh-NEH luh BÜSS', ['indice', 'habitude', 'etat']),
  sent(1275, "Ce matin-là, j'ai pris un taxi.", 'That morning I took a taxi.',
    '/sə ma.tɛ̃.la ʒe pʁi ɛ̃ tak.si/', 'suh mah-tehⁿ-LAH · zhay PREE uhⁿ tak-SEE', ['indice', 'ce-matin-la', 'moment']),
  sent(1276, 'Souvent, nous mangions dehors.', 'We often used to eat outside.',
    '/su.vɑ̃ nu mɑ̃.ʒjɔ̃ də.ɔʁ/', 'soo-VAHⁿ · noo mahⁿ-ZHYOHⁿ duh-OR', ['indice', 'habitude', 'etat']),
  sent(1277, 'Une fois, nous avons mangé au restaurant.', 'Once, we ate at a restaurant.',
    '/yn fwa nu.za.vɔ̃ mɑ̃.ʒe o ʁɛs.to.ʁɑ̃/', 'ün FWAH · noo-zah-vohⁿ mahⁿ-ZHAY oh res-toh-RAHⁿ', ['indice', 'une-fois', 'moment']),
  sent(1278, 'En 2019, je travaillais à Genève.', 'In 2019 I was working in Geneva.',
    '/ɑ̃ dø mil diz.nœf ʒə tʁa.va.jɛ a ʒə.nɛv/', 'ahⁿ duh meel deez-NUHF · zhuh trah-vah-YEH ah zhuh-NEV', ['indice', 'date', 'etat', 'contre-exemple']),
  sent(1279, "En 2019, j'ai changé de travail.", 'In 2019 I changed jobs.',
    '/ɑ̃ dø mil diz.nœf ʒe ʃɑ̃.ʒe də tʁa.vaj/', 'ahⁿ duh meel deez-NUHF · zhay shahⁿ-ZHAY duh trah-VAHY', ['indice', 'date', 'moment']),
];

/* ── ACT 10 · TON CHOIX ────────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  gap(1280, 'Ce soir-là, il neigeait.', 'That evening it was snowing.',
    '/sə swaʁ.la il nɛ.ʒɛ/', 'suh swahr-LAH · eel neh-ZHEH',
    'Ce soir-là, il ___. (neiger · en décor)',
    "Le décor : on attend la suite. EN: background, and correct.",
    ['choix', 'etat', 'paire']),
  gap(1281, 'Ce soir-là, il a neigé.', 'That evening it snowed.',
    '/sə swaʁ.la i.la ne.ʒe/', 'suh swahr-LAH · ee-lah neh-ZHAY',
    'Ce soir-là, il ___. (neiger · en action)',
    "Un fait de la soirée. Correct aussi : c'est ton choix. EN: also correct; a choice.",
    ['choix', 'moment', 'paire']),
  sent(1282, "J'ai habité à Lyon pendant dix ans.", 'I lived in Lyon for ten years.',
    '/ʒe a.bi.te a ljɔ̃ pɑ̃.dɑ̃ di.zɑ̃/', 'zhay ah-bee-TAY ah LYOHⁿ · pahⁿ-dahⁿ dee-ZAHⁿ', ['choix', 'moment', 'periode']),
  sent(1283, "À l'époque, j'habitais à Lyon.", 'At the time, I was living in Lyon.',
    '/a le.pɔk ʒa.bi.tɛ a ljɔ̃/', 'ah lay-POK · zhah-bee-TEH ah LYOHⁿ', ['choix', 'etat']),
  sent(1284, 'La fête était magnifique.', 'The party was wonderful.',
    '/la fɛt e.tɛ ma.ɲi.fik/', 'lah FET ay-teh mah-nyee-FEEK', ['choix', 'etat']),
  sent(1285, 'La fête a été magnifique.', 'The party was wonderful.',
    '/la fɛt a e.te ma.ɲi.fik/', 'lah FET ah ay-tay mah-nyee-FEEK', ['choix', 'moment']),
  sent(1286, 'Le concert a duré deux heures.', 'The concert lasted two hours.',
    '/lə kɔ̃.sɛʁ a dy.ʁe dø.zœʁ/', 'luh kohⁿ-SEHR ah dü-RAY duh ZUHR', ['choix', 'moment']),
  sent(1287, 'Le concert durait encore à minuit.', 'The concert was still going at midnight.',
    '/lə kɔ̃.sɛʁ dy.ʁɛ ɑ̃.kɔʁ a mi.nɥi/', 'luh kohⁿ-SEHR dü-REH ahⁿ-kor ah mee-NWEE', ['choix', 'etat']),
  sent(1288, 'Nous étions très heureux là-bas.', 'We were very happy there.',
    '/nu.ze.tjɔ̃ tʁɛ.zø.ʁø la.ba/', 'noo-zay-TYOHⁿ treh-zuh-RUH lah-BAH', ['choix', 'etat']),
  sent(1289, 'Nous avons été très heureux là-bas.', 'We were very happy there.',
    '/nu.za.vɔ̃.ze.te tʁɛ.zø.ʁø la.ba/', 'noo-zah-vohⁿ-zay-TAY treh-zuh-RUH lah-BAH', ['choix', 'moment', 'periode']),
  sent(1290, 'Il a fait beau toute la semaine.', 'The weather was fine all week.',
    '/i.la fɛ bo tut la sə.mɛn/', 'ee-lah feh BOH · toot lah suh-MEN', ['choix', 'moment', 'periode']),
  sent(1291, 'Il faisait beau ce matin-là.', 'The weather was fine that morning.',
    '/il fə.zɛ bo sə ma.tɛ̃.la/', 'eel fuh-ZEH BOH · suh mah-tehⁿ-LAH', ['choix', 'etat']),
  sent(1292, "Le train est parti à l'heure, et tout le monde était content.", 'The train left on time, and everybody was happy.',
    '/lə tʁɛ̃ ɛ paʁ.ti a lœʁ e tu lə mɔ̃d e.tɛ kɔ̃.tɑ̃/', 'luh TREHⁿ eh par-TEE ah LUHR · ay too luh mohⁿd ay-teh kohⁿ-TAHⁿ', ['choix', 'paire', 'decor-action']),
];

/* ── ACT 11 · CE QUE TU AS VRAIMENT DIT ────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1295, 'Je le connais depuis vingt ans.', "I've known him for twenty years.",
    '/ʒə lə kɔ.nɛ də.pɥi vɛ̃.tɑ̃/', 'zhuh luh koh-NEH duh-PWEE vehⁿ-TAHⁿ', ['erreur-sens', 'connaitre']),
  sent(1296, "J'ai connu ta mère il y a vingt ans.", 'I met your mother twenty years ago.',
    '/ʒe kɔ.ny ta mɛʁ i.lja vɛ̃.tɑ̃/', 'ZHAY koh-NÜ tah MEHR · ee-lyah vehⁿ-TAHⁿ', ['erreur-sens', 'connaitre']),
  sent(1297, "Je savais qu'il était marié.", 'I knew he was married.',
    '/ʒə sa.vɛ ki.le.tɛ ma.ʁje/', 'zhuh sah-VEH kee-lay-teh mah-RYAY', ['erreur-sens', 'savoir'], FCVDR),
  sent(1298, "Je n'ai pas voulu signer.", 'I refused to sign.',
    '/ʒə ne pa vu.ly si.ɲe/', 'zhuh nay pah voo-LÜ see-NYAY', ['erreur-sens', 'vouloir']),
  sent(1299, 'Il a dû oublier la clé.', 'He must have forgotten the key.',
    '/i.la dy u.bli.je la kle/', 'ee-lah DÜ oo-blee-AY lah KLAY', ['erreur-sens', 'devoir']),
  sent(1300, "Quand j'étais petit, j'avais peur des chiens.", 'When I was little I was scared of dogs.',
    '/kɑ̃ ʒe.tɛ pə.ti ʒa.vɛ pœʁ de ʃjɛ̃/', 'kahⁿ zhay-TEH puh-TEE · zhah-VEH PUHR day SHYEHⁿ', ['erreur-sens', 'avoir']),
  sent(1301, "J'ai eu peur une seule fois.", 'I got scared just once.',
    '/ʒe y pœʁ yn sœl fwa/', 'ZHAY Ü PUHR ün suhl FWAH', ['erreur-sens', 'avoir']),
  sent(1302, "Je devais t'appeler, mais je ne l'ai pas fait.", "I was supposed to call you, but I didn't.",
    '/ʒə də.vɛ ta.ple mɛ ʒə nə le pa fɛ/', 'zhuh duh-VEH tah-PLAY · meh zhuh nuh lay pah FEH', ['erreur-sens', 'devoir']),
  sent(1303, "Je ne pouvais pas venir, j'étais malade.", "I couldn't come, I was ill.",
    '/ʒə nə pu.vɛ pa və.niʁ ʒe.tɛ ma.lad/', 'zhuh nuh poo-VEH pah vuh-NEER · zhay-teh ma-LAD', ['erreur-sens', 'pouvoir']),
  sent(1304, "Je n'ai pas pu venir, j'ai eu un imprévu.", "I couldn't come, something came up.",
    '/ʒə ne pa py və.niʁ ʒe y ɛ̃.nɛ̃.pʁe.vy/', 'zhuh nay pah PÜ vuh-NEER · zhay ü uhⁿ-nehⁿ-pray-VÜ', ['erreur-sens', 'pouvoir']),
  sent(1305, "Elle a voulu m'aider, alors elle a appelé son frère.", 'She tried to help me, so she called her brother.',
    '/ɛ.la vu.ly me.de a.lɔʁ ɛ.la a.ple sɔ̃ fʁɛʁ/', 'eh-lah voo-LÜ may-DAY · ah-lor eh-lah ah-play sohⁿ FREHR', ['erreur-sens', 'vouloir']),
  sent(1306, "Elle voulait m'aider, mais elle n'était pas là.", "She wanted to help me, but she wasn't there.",
    '/ɛl vu.lɛ me.de mɛ ɛl ne.tɛ pa la/', 'el voo-LEH may-DAY · meh el nay-teh pah LAH', ['erreur-sens', 'vouloir']),
  sent(1307, 'Il fallait me le dire.', 'You should have told me.',
    '/il fa.lɛ mə lə diʁ/', 'eel fah-LEH muh luh DEER', ['erreur-sens', 'falloir']),
  sent(1308, 'Il a fallu tout recommencer.', 'We had to start everything again.',
    '/i.la fa.ly tu ʁə.kɔ.mɑ̃.se/', 'ee-lah fah-LÜ too ruh-koh-mahⁿ-SAY', ['erreur-sens', 'falloir']),
  sent(1309, "Je ne savais pas qu'il fallait réserver.", "I didn't know you had to book.",
    '/ʒə nə sa.vɛ pa kil fa.lɛ ʁe.zɛʁ.ve/', 'zhuh nuh sah-VEH pah keel fah-leh ray-zehr-VAY', ['erreur-sens', 'savoir', 'falloir'], FCVDR),
];

/* ── ACT 12 · TOUT ENSEMBLE ────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1311, 'Je devais aller à Montréal pour une présentation.', 'I was supposed to go to Montreal for a presentation.',
    '/ʒə də.vɛ a.le a mɔ̃.ʁe.al puʁ yn pʁe.zɑ̃.ta.sjɔ̃/', 'zhuh duh-VEH ah-LAY ah mohⁿ-ray-AL · poor ün pray-zahⁿ-tah-SYOHⁿ', ['tache', 'devoir']),
  sent(1312, "À la gare, j'ai su que le train était annulé.", 'At the station I found out the train was cancelled.',
    '/a la ɡaʁ ʒe sy kə lə tʁɛ̃ e.tɛ a.ny.le/', 'ah lah GAR · zhay SÜ kuh luh trehⁿ ay-teh ah-nü-LAY', ['tache', 'savoir']),
  sent(1313, "J'ai voulu louer une voiture, mais il n'y en avait plus.", 'I tried to rent a car, but there were none left.',
    '/ʒe vu.ly lwe yn vwa.tyʁ mɛ il nja.na.vɛ plys/', 'ZHAY voo-LÜ LWAY ün vwah-TÜR · meh eel nyah-nah-veh PLÜSS', ['tache', 'vouloir']),
  sent(1314, "J'avais un peu peur, parce que le client était exigeant.", 'I was a bit scared, because the client was demanding.',
    '/ʒa.vɛ ɛ̃ pø pœʁ paʁs kə lə kli.jɑ̃ e.tɛ ɛɡ.zi.ʒɑ̃/', 'zhah-VEH uhⁿ puh PUHR · pars kuh luh klee-yahⁿ ay-teh eg-zee-ZHAHⁿ', ['tache', 'avoir']),
  sent(1315, "Finalement, j'ai pu faire la présentation en vidéo.", 'In the end I managed to give the presentation by video.',
    '/fi.nal.mɑ̃ ʒe py fɛʁ la pʁe.zɑ̃.ta.sjɔ̃ ɑ̃ vi.de.o/', 'fee-nahl-MAHⁿ · zhay PÜ fehr lah pray-zahⁿ-tah-SYOHⁿ ahⁿ vee-day-OH', ['tache', 'pouvoir']),
  sent(1316, "Le client n'a pas voulu rester jusqu'à la fin.", 'The client refused to stay until the end.',
    '/lə kli.jɑ̃ na pa vu.ly ʁɛs.te ʒys.ka la fɛ̃/', 'luh klee-YAHⁿ nah pah voo-LÜ res-TAY zhüs-kah lah FEHⁿ', ['tache', 'vouloir']),
  sent(1317, "Il a dû aimer la présentation, parce qu'il a signé.", 'He must have liked the presentation, because he signed.',
    '/i.la dy e.me la pʁe.zɑ̃.ta.sjɔ̃ paʁs kil a si.ɲe/', 'ee-lah DÜ ay-MAY lah pray-zahⁿ-tah-SYOHⁿ · pars keel ah see-NYAY', ['tache', 'devoir', 'supposition']),
  sent(1318, 'Ce matin-là, il neigeait beaucoup.', 'That morning it was snowing hard.',
    '/sə ma.tɛ̃.la il nɛ.ʒɛ bo.ku/', 'suh mah-tehⁿ-LAH · eel neh-ZHEH boh-KOO', ['tache', 'decor']),
  sent(1319, 'Je ne savais pas quoi faire.', "I didn't know what to do.",
    '/ʒə nə sa.vɛ pa kwa fɛʁ/', 'zhuh nuh sah-VEH pah kwah FEHR', ['tache', 'savoir']),
  sent(1320, 'Elle pouvait présenter à ma place.', 'She was able to present in my place.',
    '/ɛl pu.vɛ pʁe.zɑ̃.te a ma plas/', 'el poo-VEH pray-zahⁿ-TAY ah mah PLASS', ['tache', 'pouvoir']),
  sent(1321, 'Elle ne connaissait pas bien le dossier.', "She didn't know the file well.",
    '/ɛl nə kɔ.nɛ.sɛ pa bjɛ̃ lə dɔ.sje/', 'el nuh koh-neh-SEH pah byehⁿ luh doh-SYAY', ['tache', 'connaitre']),
  sent(1322, "Tout s'est bien terminé.", 'It all ended well.',
    '/tu sɛ bjɛ̃ tɛʁ.mi.ne/', 'too seh byehⁿ tehr-mee-NAY', ['tache', 'moment']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Dictée pools. LETTERS MODE ONLY, measured through the app's own dicteeMode:
 *  word mode hands every real word over pre-spelled. */
const dictable = (r: Row) => (r.drills as string[]).includes('dictation') && dicteeMode(r.fr) === 'letters';
export const DICTEE_IDS = ALL_ROWS.filter(dictable).map((r) => r.id);
/** Per act, so an act's dictation names only what that act taught. */
export const dicteeFor = (act: number) => (ROWS_BY_ACT[act - 1] ?? []).filter(dictable).map((r) => r.id);

/** Rows `practice skill: 'speak'` may name: voiceflash-bearing. */
export const SPEAKABLE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() strips accents, apostrophes, hyphens, commas and case. Measured
 *  consequences for this lesson:
 *
 *    savais / su · connaissais / connu · pouvais / pu    TYPEABLE, all distinct
 *    dû / du            ONE STRING (the accent folds). Never key a typed
 *                       question on the circumflex alone; « j'ai dû » is safe
 *                       because the auxiliary is typed too
 *    j'ai pu / j'ai pû  the second is not French and folds onto the first, so
 *                       a typed question cannot catch that spelling
 *    a dû / a du        ONE STRING. mcq only, if the point is the accent
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOLD_COLLISIONS: [string, string][] = [
  ['dû', 'du'],
  ["j'ai dû", "j'ai du"],
  ['a dû', 'a du'],
];

/** Forms this lesson prints ONLY as a wrong reading (trapDrill promptSound,
 *  commonErrors.wrong). None is ungrammatical: every one is correct French
 *  that says the wrong thing, which is what act 11 is about. */
export const MEANS_SOMETHING_ELSE = [
  'Samedi, je devais travailler.',
  "J'ai su qu'il était marié.",
  "Je l'ai connu pendant vingt ans.",
  "Quand j'étais petit, j'ai eu peur des chiens.",
  'Je ne voulais pas signer.',
  'Il devait oublier la clé.',
] as const;

/** Banned everywhere on a learner surface (brief house rules). */
export const BANNED_SUBSTRINGS = ['honest', '—', '‿'] as const;
