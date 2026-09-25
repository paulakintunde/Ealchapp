// b1.01.l1 « L'imparfait : la formation » — the authored corpus, the imports
// and the citation constants. REBUILD v2, to RICH-LESSON-STANDARD.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json. The
// pilot v1 that Paul saw on the phone is in `_pilot-v1/*.ts.txt`.
//
// STABLE EXPORTS (imported by b1.02, b1.03, b1.04 and _preview-b1.ts; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE IMPARFAIT IS BUILT, NOT MEMORISED. One recipe, and every case where
//   the spelling has to be watched.
//
//     nous parlons  ->  parl-  ->  je parlais · nous parlions      the recipe
//     -ais -ais -ait -ions -iez -aient, four of them one sound     the endings
//     faire, prendre, boire ... vivre: irregular now, regular here  act 4
//     nous sommes   ->  ét-                                        the one exception
//     mangeais / mangions, commençais / commencions                -ger and -cer
//     étudiions, oubliiez, riions, voyions, envoyions, payions     the doubled i
//     il y avait, il fallait, il pleuvait, il neigeait, il faisait  impersonals
//     je me levais, je ne savais pas, il n'y avait personne        pronominal, negation
//     parler / parlé / parlais / parlait / parlaient               spelling against sound
//
//   Usage is NOT owned here. b1.02 teaches what the imparfait is for; this
//   lesson gives it just enough meaning (« avant », « quand j'étais petit »)
//   that the forms are not empty. b1.03 and b1.04 own the contrast with the
//   passé composé. Act 11 hears « j'ai parlé » against « je parlais » as SOUND
//   and SPELLING only, and says so.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   a2.01  REFRAME « Four of the six forms sound the same, so the pronoun
//          carries the person. »  Act 3.
//   a2.01  NOUS_ON « nous parlons is what you write. on parle is what you
//          say. »  Act 2.
//   a2.09  REFRAME « The spelling changes so the sound does not. »  Acts 6, 7.
//
// LEANED ON: a2.10 (-iss-), a2.11 (-re), a2.12 (faire [fə]), a2.15 (prendre,
// mettre), a2.02 (aller, venir), a2.13 (vouloir, pouvoir, devoir), a2.14
// (savoir, connaître), a2.22 (pronominal verbs), a1 negation.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME: `recits-au-passe` (Paul, 2026-09-22). It already exists in seed
//     `themes` (domain fondations, levelRange a2-b2) and holds ZERO items, so
//     it is NOT created at import. Ids are `fr.b1.recits-au-passe.NNN`.
//  2. ID BLOCK: b1.01 owns `.401`-`.799` and `.1401`-`.1499`. Other pilot
//     lessons own `.101`-`.399`. `.001`-`.115` is PUBLISHED IN POSTGRES and is
//     not available: the block that was `.001`-`.071` moved +1400 on
//     2026-09-24. Used here: `.1401`-`.1471` (`.1439` empty)
//     and `.401`-`.550` with gaps.
//  3. SEED IS ABOUT A QUARTER OF POSTGRES. The seed holds no standalone
//     imparfait form except `c'était` (fr.sons.elision.035), imported. The
//     present `nous` rows are published in `fr.a2.verbes.*` and are imported;
//     boire, voir, croire, écrire, dormir, vivre, étudier and oublier have NO
//     published present `nous` row, so this build authors them as présent
//     conjugation cards (.459-.464, .511, .512). Re-probe the DB at import.
//  4. `parler` (fr.sons.muettes.036) and `j'ai parlé` (fr.a2.verbes.552) are
//     published and are imported for act 11, not re-authored.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';
import { dicteeMode } from '../../../../ealch-v2/src/content/dictee.logic.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.01',
  seq: 1,
  title: 'The Imperfect: Formation',
  sub: "L'imparfait : la formation",
  canDo: 'Can build and spell the imparfait of any verb from its present nous form, including être, -ger, -cer, the doubled i, impersonal, pronominal and negative forms',
  prereqUnitIds: ['a2.01', 'a2.09'],
} as const;

export const LESSON_ID = 'b1.01.l1';
export const THEME = 'recits-au-passe';
export const LEVEL = 'b1' as const;

export const ID_RANGES = [[401, 799], [1401, 1499]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  Paul, 2026-09-22: A2 citations use the house English trail label, exactly
 *  as a2.34 does (« lesson 2 in A2 »), resolved through `unitRef` from the
 *  shipped `unit.seq`, never typed and never the raw id.
 * ══════════════════════════════════════════════════════════════════════════ */

export const PRESENT_ER_UNIT = 'a2.01';
export const PRESENT_IR_UNIT = 'a2.10';
export const PRESENT_RE_UNIT = 'a2.11';
export const ER_EXC_UNIT = 'a2.09';
export const FAIRE_UNIT = 'a2.12';
export const PRENDRE_UNIT = 'a2.15';
export const ALLER_UNIT = 'a2.02';
export const MODAUX_UNIT = 'a2.13';
export const SAVOIR_UNIT = 'a2.14';
export const PRONOMINAUX_UNIT = 'a2.22';
export const PC_UNIT = 'a2.05';

export const PRESENT_ER_REF = unitRef(PRESENT_ER_UNIT);
export const ER_EXC_REF = unitRef(ER_EXC_UNIT);
export const FAIRE_REF = unitRef(FAIRE_UNIT);
export const PRESENT_IR_REF = unitRef(PRESENT_IR_UNIT);
export const PRONOMINAUX_REF = unitRef(PRONOMINAUX_UNIT);
export const PC_REF = unitRef(PC_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A201_REFRAME, NOUS_ON } from '../verbes-er-terms.ts';
export { REFRAME as A209_REFRAME } from '../verbes-er-exceptions-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME (unchanged from the pilot; b1.02-b1.04 import it)
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Pars de nous, coupe -ons, ajoute la fin.';
export const REFRAME_EN = 'Start from nous, cut -ons, add the ending.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Prends nous, garde le reste, ajoute la fin.',
    why: "The brief's suggestion. « Garde le reste » never says what to throw away, and -ons is the one thing the learner must remove.",
  },
  {
    text: "L'imparfait, c'est nous moins -ons, plus -ais.",
    why: 'A formula, and it names only one of six endings.',
  },
  {
    text: 'Tout part de nous.',
    why: 'True and short, and it is the title of act 2. It says where to start and nothing about what to do next.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  /** Present `nous`/`vous` rows, all flashcard + voiceflash. */
  presentNous: [
    'fr.a2.verbes.103',  // Nous parlons français.
    'fr.a2.verbes.106',  // Nous regardons la télé.
    'fr.a2.verbes.114',  // Nous cherchons la gare.
    'fr.a2.verbes.119',  // Nous restons à la maison.
    'fr.a2.verbes.184',  // Nous finissons tôt.
    'fr.a2.verbes.196',  // Nous réfléchissons ensemble.
    'fr.a2.verbes.203',  // Nous remplissons les papiers.
    'fr.a2.verbes.239',  // Nous perdons du temps.
    'fr.a2.verbes.244',  // Nous vendons des billets.
    'fr.a2.verbes.104',  // Vous parlez français.
    'fr.a2.verbes.115',  // Vous cherchez la gare.
    'fr.a2.verbes.185',  // Vous finissez tôt.
    'fr.a2.verbes.242',  // Vous répondez vite.
  ],
  presentIrregular: [
    'fr.a2.verbes.427',  // Nous prenons la clé.
    'fr.a2.verbes.304',  // Nous faisons le lit.   [fə]
    'fr.a2.verbes.310',  // Nous disons bonjour.
    'fr.a2.verbes.316',  // Nous lisons le menu.
    'fr.a2.verbes.264',  // Nous allons au parc.
    'fr.a2.verbes.270',  // Nous venons tôt.
    'fr.a2.verbes.356',  // Nous devons payer.
    'fr.a2.verbes.350',  // Nous pouvons payer.
    'fr.a2.verbes.344',  // Nous voulons payer.
    'fr.a2.verbes.384',  // Nous savons nager.
    'fr.a2.verbes.390',  // Nous connaissons Paris.
    'fr.a2.verbes.433',  // Nous mettons la clé.
    'fr.a2.verbes.481',  // Nous sortons ce soir.
  ],
  presentGerCer: [
    'fr.a2.verbes.142',  // Nous mangeons ici.
    'fr.a2.verbes.146',  // Nous voyageons en train.
    'fr.a2.verbes.161',  // Nous partageons une pizza.
    'fr.a2.verbes.166',  // Nous rangeons la cuisine.
    'fr.a2.verbes.144',  // Nous commençons.
  ],
  presentOther: [
    'fr.a2.verbes.735',  // Nous nous levons tôt.
    'fr.a2.marche.004',  // Nous choisissons toujours les fruits les plus mûrs.
  ],
  presentCards: [
    'fr.a1.cuisine.005',       // nous mangeons  (conjugation card, flashcard only)
    'fr.a1.deplacements.009',  // nous prenons   (conjugation card, flashcard only)
    'fr.a1.ecole.008',         // nous avons     (conjugation card, flashcard only)
  ],
  /** Published imparfait sentences with NO passé composé and no conditional. */
  imparfaitSentences: [
    'fr.a2.salutations.043',      // Quand j'étais petit, je disais toujours bonjour à mes grands-parents.
    'fr.b1.sports-et-loisirs.076',// Quand j'étais plus jeune, je jouais au football tous les week-ends.
    'fr.a2.animaux.010',          // J'avais un chat et il dormait toujours sur mon lit.
    'fr.a2.corps.017',            // Quand j'étais enfant, j'avais souvent des otites.
    'fr.b1.cafe.079',             // Quand j'étais étudiant, j'allais souvent au café pour réviser.
    'fr.a2.heure-et-date.109',    // Il y a cinq ans, je ne parlais pas français.
    'fr.b1.routines.059',         // Avant, je prenais le train, mais maintenant je conduis.
    'fr.b1.nombres.009',          // Il y avait une centaine de spectateurs.
    'fr.a1.heure-et-date.051',    // Ce matin, il n'y avait personne au bureau.
    'fr.sons.elision.035',        // c'était
  ],
  /** Act 11: the -er homophones. */
  homophones: [
    'fr.sons.muettes.036',   // parler
    'fr.a2.verbes.552',      // j'ai parlé
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Imports with NO flashcard drill: nameable in a section, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a2.salutations.043',   // sentence, review
  'fr.a2.animaux.010',       // sentence, review
  'fr.a2.corps.017',         // sentence, review
  'fr.b1.routines.059',      // dictation only
];

/** Imports with NO voiceflash: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  ...IMPORTED.presentCards,
  'fr.b1.sports-et-loisirs.076', 'fr.b1.cafe.079', 'fr.a2.heure-et-date.109', 'fr.b1.nombres.009',
  'fr.a1.heure-et-date.051', 'fr.sons.elision.035', 'fr.a2.marche.004',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, final stressed syllable in caps,
 *  ü for French u, nasals with ⁿ.
 *
 *    -ais -ait -aient   [ɛ]    EH      four of six cells, one sound
 *    -ions              [jɔ̃]   YOHⁿ
 *    -iez               [je]   YAY
 *
 *  THE DOUBLED i IS MOSTLY A SPELLING POINT. voyions, croyions, payions,
 *  envoyions are [jjɔ̃] in the dictionary and [jɔ̃] in most mouths, so they are
 *  respelled like the present and the IPA keeps the dictionary [jj].
 *  étudiions and riions carry a real extra syllable [i.jɔ̃] and show it.
 *
 *  NO U+203F anywhere: liaison consonants go onto the next syllable.
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

/** A conjugation card. `prompt` is the card front, house shape of
 *  fr.a1.cuisine.005 (« manger · présent · nous »). */
const conj = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  inf: string, p: Pers, tags: string[], drills: Item['drills'] = FCVR,
  tense: 'imparfait' | 'présent' = 'imparfait',
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: [tense === 'imparfait' ? 'imparfait' : 'present', ...tags], drills, version: 1,
  cardType: 'conjugation', prompt: `${inf} · ${tense} · ${p}`,
  verbCheck: { infinitive: inf, tense, person: PN[p][0], number: PN[p][1] },
  grammarPoints: [tense === 'imparfait' ? 'imparfait' : 'present'],
});

/** A fixed phrase (impersonal or negative chunk) with no single verbCheck. */
const chunk = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['imparfait', ...tags], drills, version: 1, grammarPoints: ['imparfait'],
});

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['imparfait', ...tags], drills, version: 1, grammarPoints: ['imparfait'],
});

/* ── ACT 1 · LE SOUVENIR ────────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  conj(1434, "j'habitais", 'I used to live', '/ʒa.bi.tɛ/', 'zhah-bee-TEH', 'habiter', 'je', ['recipe', 'scene']),
  sent(1440, "Quand j'étais petite, j'habitais chez ma grand-mère.", 'When I was little, I lived at my grandmother’s.', '/kɑ̃ ʒe.tɛ pə.tit ʒa.bi.tɛ ʃe ma ɡʁɑ̃.mɛʁ/', 'kahⁿ zhay-teh puh-TEET zhah-bee-teh shay mah grahⁿ-MEHR', ['scene', 'etre', 'task']),
  sent(1441, 'Ma grand-mère habitait à Dakar.', 'My grandmother lived in Dakar.', '/ma ɡʁɑ̃.mɛ.ʁa.bi.tɛ a da.kaʁ/', 'mah grahⁿ-meh-rah-bee-teh ah dah-KAR', ['scene']),
  sent(1460, "C'était la maison de ma grand-mère.", 'It was my grandmother’s house.', '/se.tɛ la mɛ.zɔ̃ də ma ɡʁɑ̃.mɛʁ/', 'say-teh lah meh-zohⁿ duh mah grahⁿ-MEHR', ['scene', 'etre']),
  sent(1461, "Avant, j'habitais à Dakar.", 'I used to live in Dakar.', '/a.vɑ̃ ʒa.bi.tɛ a da.kaʁ/', 'ah-VAHⁿ zhah-bee-teh ah dah-KAR', ['meaning', 'avant']),
  sent(1462, "Maintenant, j'habite à Montréal.", 'Now I live in Montreal.', '/mɛ̃t.nɑ̃ ʒa.bi.ta mɔ̃.tʁe.al/', 'mehⁿt-NAHⁿ zhah-bee-tah mohⁿ-tray-AL', ['meaning', 'present']),
  // The counterexample for the one cue used: « avant » is not a switch.
  sent(1463, 'Avant de dormir, je lis.', 'Before I go to sleep, I read.', '/a.vɑ̃ də dɔʁ.miʁ ʒə li/', 'ah-vahⁿ duh dor-MEER zhuh LEE', ['meaning', 'avant', 'counterexample']),
];

/* ── ACT 2 · LA BASE : NOUS AU PRÉSENT (-er, -ir -iss-, -re) ────────────── */

export const ACT2_ROWS: Row[] = [
  conj(1406, 'je finissais', 'I used to finish', '/ʒə fi.ni.sɛ/', 'zhuh fee-nee-SEH', 'finir', 'je', ['stem', 'iss']),
  sent(1442, 'Nous parlions français.', 'We used to speak French.', '/nu paʁ.ljɔ̃ fʁɑ̃.sɛ/', 'noo par-lyohⁿ frahⁿ-SEH', ['pair', 'ions'], FCVDR),
  sent(1445, 'Nous finissions tôt.', 'We used to finish early.', '/nu fi.ni.sjɔ̃ to/', 'noo fee-nee-syohⁿ TOH', ['pair', 'iss']),
  conj(401, 'je regardais', 'I used to watch', '/ʒə ʁə.ɡaʁ.dɛ/', 'zhuh ruh-gar-DEH', 'regarder', 'je', ['stem', 'er']),
  conj(402, 'nous cherchions', 'we used to look for', '/nu ʃɛʁ.ʃjɔ̃/', 'noo shehr-SHYOHⁿ', 'chercher', 'nous', ['stem', 'er', 'ions']),
  conj(403, 'ils restaient', 'they used to stay', '/il ʁɛs.tɛ/', 'eel res-TEH', 'rester', 'ils', ['stem', 'er', 'aient']),
  conj(404, 'je choisissais', 'I used to choose', '/ʒə ʃwa.zi.sɛ/', 'zhuh shwah-zee-SEH', 'choisir', 'je', ['stem', 'iss'], FCVDR),
  conj(405, 'ils finissaient', 'they used to finish', '/il fi.ni.sɛ/', 'eel fee-nee-SEH', 'finir', 'ils', ['stem', 'iss', 'aient']),
  conj(406, 'nous réfléchissions', 'we used to think it over', '/nu ʁe.fle.ʃi.sjɔ̃/', 'noo ray-flay-shee-SYOHⁿ', 'réfléchir', 'nous', ['stem', 'iss', 'ions']),
  conj(407, 'je vendais', 'I used to sell', '/ʒə vɑ̃.dɛ/', 'zhuh vahⁿ-DEH', 'vendre', 'je', ['stem', 're']),
  conj(408, 'nous vendions', 'we used to sell', '/nu vɑ̃.djɔ̃/', 'noo vahⁿ-DYOHⁿ', 'vendre', 'nous', ['stem', 're', 'ions']),
  conj(409, "j'attendais", 'I used to wait', '/ʒa.tɑ̃.dɛ/', 'zhah-tahⁿ-DEH', 'attendre', 'je', ['stem', 're']),
  conj(410, 'tu répondais', 'you used to answer', '/ty ʁe.pɔ̃.dɛ/', 'tü ray-pohⁿ-DEH', 'répondre', 'tu', ['stem', 're']),
  conj(411, 'elle perdait', 'she used to lose', '/ɛl pɛʁ.dɛ/', 'el pehr-DEH', 'perdre', 'elle', ['stem', 're']),
  conj(412, 'vous finissiez', 'you used to finish', '/vu fi.ni.sje/', 'voo fee-nee-SYAY', 'finir', 'vous', ['stem', 'iss', 'iez']),
  conj(413, 'vous cherchiez', 'you used to look for', '/vu ʃɛʁ.ʃje/', 'voo shehr-SHYAY', 'chercher', 'vous', ['stem', 'er', 'iez']),
  sent(416, 'Nous regardions la télé le samedi.', 'We used to watch TV on Saturdays.', '/nu ʁə.ɡaʁ.djɔ̃ la te.le lə sam.di/', 'noo ruh-gar-dyohⁿ lah tay-lay luh sam-DEE', ['pair', 'er']),
  sent(417, 'Nous restions à la maison.', 'We used to stay home.', '/nu ʁɛs.tjɔ̃ a la mɛ.zɔ̃/', 'noo res-tyohⁿ ah lah meh-ZOHⁿ', ['pair', 'er']),
  sent(418, 'Mon père vendait des journaux.', 'My father used to sell newspapers.', '/mɔ̃ pɛʁ vɑ̃.dɛ de ʒuʁ.no/', 'mohⁿ pehr vahⁿ-deh day zhoor-NOH', ['re']),
  sent(419, "J'attendais le bus devant l'école.", 'I used to wait for the bus outside the school.', '/ʒa.tɑ̃.dɛ lə bys də.vɑ̃ le.kɔl/', 'zhah-tahⁿ-deh luh büs duh-vahⁿ lay-KOL', ['re']),
  sent(420, 'Vous cherchiez toujours vos clés.', 'You were always looking for your keys.', '/vu ʃɛʁ.ʃje tu.ʒuʁ vo kle/', 'voo shehr-shyay too-zhoor voh KLAY', ['er', 'iez']),
];

/* ── ACT 3 · LES SIX TERMINAISONS ──────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  conj(1401, 'je parlais', 'I used to speak / I was speaking', '/ʒə paʁ.lɛ/', 'zhuh par-LEH', 'parler', 'je', ['recipe', 'e-sound']),
  conj(414, 'tu parlais', 'you used to speak', '/ty paʁ.lɛ/', 'tü par-LEH', 'parler', 'tu', ['recipe', 'e-sound']),
  conj(1402, 'il parlait', 'he used to speak / he was speaking', '/il paʁ.lɛ/', 'eel par-LEH', 'parler', 'il', ['recipe', 'e-sound']),
  conj(421, 'elle parlait', 'she used to speak', '/ɛl paʁ.lɛ/', 'el par-LEH', 'parler', 'elle', ['recipe', 'e-sound']),
  conj(422, 'on parlait', 'we used to speak (spoken)', '/ɔ̃ paʁ.lɛ/', 'ohⁿ par-LEH', 'parler', 'on', ['recipe', 'e-sound', 'on']),
  conj(1403, 'nous parlions', 'we used to speak / we were speaking', '/nu paʁ.ljɔ̃/', 'noo par-LYOHⁿ', 'parler', 'nous', ['recipe', 'ions']),
  conj(1404, 'vous parliez', 'you used to speak / you were speaking', '/vu paʁ.lje/', 'voo par-LYAY', 'parler', 'vous', ['recipe', 'iez']),
  conj(1405, 'ils parlaient', 'they used to speak / they were speaking', '/il paʁ.lɛ/', 'eel par-LEH', 'parler', 'ils', ['recipe', 'e-sound', 'aient'], FCVDR),
  conj(423, 'elles parlaient', 'they (f.) used to speak', '/ɛl paʁ.lɛ/', 'el par-LEH', 'parler', 'elles', ['recipe', 'e-sound', 'aient']),
  conj(1436, 'tu habitais', 'you used to live', '/ty a.bi.tɛ/', 'tü ah-bee-TEH', 'habiter', 'tu', ['recipe']),
  sent(424, 'Tu parlais avec tes voisins.', 'You used to talk with your neighbours.', '/ty paʁ.lɛ a.vɛk te vwa.zɛ̃/', 'tü par-leh ah-vek tay vwah-ZEHⁿ', ['e-sound']),
  sent(425, "On jouait dehors tout l'après-midi.", 'We played outside all afternoon.', '/ɔ̃ ʒu.ɛ də.ɔʁ tu la.pʁɛ.mi.di/', 'ohⁿ zhoo-eh duh-or too lah-preh-mee-DEE', ['e-sound', 'on']),
  sent(426, 'Vous parliez créole à la maison.', 'You used to speak Creole at home.', '/vu paʁ.lje kʁe.ɔl a la mɛ.zɔ̃/', 'voo par-lyay kray-ol ah lah meh-ZOHⁿ', ['iez']),
  sent(1459, 'Les enfants jouaient dans la rue.', 'The children used to play in the street.', '/le.zɑ̃.fɑ̃ ʒu.ɛ dɑ̃ la ʁy/', 'lay zahⁿ-fahⁿ zhoo-eh dahⁿ lah RÜ', ['aient']),
  sent(1470, 'Mes cousins habitaient à Thiès.', 'My cousins lived in Thiès.', '/me ku.zɛ̃.za.bi.tɛ a tjɛs/', 'may koo-zehⁿ-zah-bee-teh ah TYESS', ['aient', 'dakar']),
];

/* ── ACT 4 · IRRÉGULIERS AU PRÉSENT, RÉGULIERS ICI ─────────────────────── */

export const ACT4_ROWS: Row[] = [
  // The present nous forms no A2 row publishes.
  conj(459, 'nous buvons', 'we drink', '/nu by.vɔ̃/', 'noo bü-VOHⁿ', 'boire', 'nous', ['stem-source'], FCVR, 'présent'),
  conj(460, 'nous voyons', 'we see', '/nu vwa.jɔ̃/', 'noo vwah-YOHⁿ', 'voir', 'nous', ['stem-source'], FCVR, 'présent'),
  conj(461, 'nous croyons', 'we believe', '/nu kʁwa.jɔ̃/', 'noo krwah-YOHⁿ', 'croire', 'nous', ['stem-source'], FCVR, 'présent'),
  conj(462, 'nous écrivons', 'we write', '/nu.ze.kʁi.vɔ̃/', 'noo zay-kree-VOHⁿ', 'écrire', 'nous', ['stem-source'], FCVR, 'présent'),
  conj(463, 'nous dormons', 'we sleep', '/nu dɔʁ.mɔ̃/', 'noo dor-MOHⁿ', 'dormir', 'nous', ['stem-source'], FCVR, 'présent'),
  conj(464, 'nous vivons', 'we live', '/nu vi.vɔ̃/', 'noo vee-VOHⁿ', 'vivre', 'nous', ['stem-source'], FCVR, 'présent'),
  // The imparfait forms.
  conj(1408, 'je faisais', 'I used to do / make', '/ʒə fə.zɛ/', 'zhuh fuh-ZEH', 'faire', 'je', ['stem', 'schwa'], FCVDR),
  conj(441, 'nous faisions', 'we used to do / make', '/nu fə.zjɔ̃/', 'noo fuh-ZYOHⁿ', 'faire', 'nous', ['stem', 'schwa']),
  conj(440, 'je prenais', 'I used to take', '/ʒə pʁə.nɛ/', 'zhuh pruh-NEH', 'prendre', 'je', ['stem']),
  conj(1407, 'nous prenions', 'we used to take', '/nu pʁə.njɔ̃/', 'noo pruh-NYOHⁿ', 'prendre', 'nous', ['stem']),
  conj(1409, 'je buvais', 'I used to drink', '/ʒə by.vɛ/', 'zhuh bü-VEH', 'boire', 'je', ['stem']),
  conj(1410, 'je voyais', 'I used to see', '/ʒə vwa.jɛ/', 'zhuh vwah-YEH', 'voir', 'je', ['stem', 'y']),
  conj(1412, 'je croyais', 'I used to believe', '/ʒə kʁwa.jɛ/', 'zhuh krwah-YEH', 'croire', 'je', ['stem', 'y']),
  conj(1414, 'je disais', 'I used to say', '/ʒə di.zɛ/', 'zhuh dee-ZEH', 'dire', 'je', ['stem']),
  conj(1415, "j'écrivais", 'I used to write', '/ʒe.kʁi.vɛ/', 'zhay-kree-VEH', 'écrire', 'je', ['stem']),
  conj(1435, 'je lisais', 'I used to read', '/ʒə li.zɛ/', 'zhuh lee-ZEH', 'lire', 'je', ['stem']),
  conj(430, 'je venais', 'I used to come', '/ʒə və.nɛ/', 'zhuh vuh-NEH', 'venir', 'je', ['stem']),
  conj(442, 'ils venaient', 'they used to come', '/il və.nɛ/', 'eel vuh-NEH', 'venir', 'ils', ['stem', 'aient']),
  conj(431, 'je devais', 'I had to / I was supposed to', '/ʒə də.vɛ/', 'zhuh duh-VEH', 'devoir', 'je', ['stem', 'modal']),
  conj(432, 'je pouvais', 'I could / I was able to', '/ʒə pu.vɛ/', 'zhuh poo-VEH', 'pouvoir', 'je', ['stem', 'modal']),
  conj(443, 'nous pouvions', 'we could', '/nu pu.vjɔ̃/', 'noo poo-VYOHⁿ', 'pouvoir', 'nous', ['stem', 'modal']),
  conj(433, 'je voulais', 'I wanted', '/ʒə vu.lɛ/', 'zhuh voo-LEH', 'vouloir', 'je', ['stem', 'modal']),
  conj(444, 'vous vouliez', 'you wanted', '/vu vu.lje/', 'voo voo-LYAY', 'vouloir', 'vous', ['stem', 'modal', 'iez']),
  conj(434, 'je savais', 'I knew', '/ʒə sa.vɛ/', 'zhuh sah-VEH', 'savoir', 'je', ['stem']),
  conj(445, 'ils savaient', 'they knew', '/il sa.vɛ/', 'eel sah-VEH', 'savoir', 'ils', ['stem', 'aient']),
  conj(1419, "j'avais", 'I had / I used to have', '/ʒa.vɛ/', 'zhah-VEH', 'avoir', 'je', ['avoir']),
  conj(1433, "j'allais", 'I used to go', '/ʒa.lɛ/', 'zhah-LEH', 'aller', 'je', ['stem', 'aller']),
  conj(1437, 'vous alliez', 'you used to go', '/vu.za.lje/', 'voo zah-LYAY', 'aller', 'vous', ['aller', 'iez']),
  conj(435, 'je mettais', 'I used to put / put on', '/ʒə mɛ.tɛ/', 'zhuh meh-TEH', 'mettre', 'je', ['stem']),
  conj(436, 'je connaissais', 'I knew (a person, a place)', '/ʒə kɔ.nɛ.sɛ/', 'zhuh koh-neh-SEH', 'connaître', 'je', ['stem']),
  conj(437, 'je sortais', 'I used to go out', '/ʒə sɔʁ.tɛ/', 'zhuh sor-TEH', 'sortir', 'je', ['stem']),
  conj(438, 'je dormais', 'I used to sleep', '/ʒə dɔʁ.mɛ/', 'zhuh dor-MEH', 'dormir', 'je', ['stem']),
  conj(439, 'je vivais', 'I used to live', '/ʒə vi.vɛ/', 'zhuh vee-VEH', 'vivre', 'je', ['stem']),
  sent(1446, 'Nous faisions le lit.', 'We used to make the bed.', '/nu fə.zjɔ̃ lə li/', 'noo fuh-zyohⁿ luh LEE', ['pair', 'schwa']),
  sent(1447, 'Nous disions bonjour.', 'We used to say hello.', '/nu di.zjɔ̃ bɔ̃.ʒuʁ/', 'noo dee-zyohⁿ bohⁿ-ZHOOR', ['pair']),
  sent(1467, 'Mon grand-père écrivait des lettres.', 'My grandfather used to write letters.', '/mɔ̃ ɡʁɑ̃.pɛ.ʁe.kʁi.vɛ de lɛtʁ/', 'mohⁿ grahⁿ-peh-ray-kree-veh day LETR', ['stem']),
  sent(1468, 'Je buvais du lait tous les matins.', 'I used to drink milk every morning.', '/ʒə by.vɛ dy lɛ tu le ma.tɛ̃/', 'zhuh bü-veh dü leh too lay mah-TEHⁿ', ['stem']),
  sent(1469, "Nous prenions le bus pour aller à l'école.", 'We used to take the bus to school.', '/nu pʁə.njɔ̃ lə bys puʁ a.le a le.kɔl/', 'noo pruh-nyohⁿ luh büs poor ah-lay ah lay-KOL', ['stem']),
  sent(447, 'Je venais ici tous les étés.', 'I used to come here every summer.', '/ʒə və.nɛ i.si tu le.ze.te/', 'zhuh vuh-neh ee-see too lay-zay-TAY', ['stem']),
  sent(448, 'Je devais rentrer avant six heures.', 'I had to be home before six.', '/ʒə də.vɛ ʁɑ̃.tʁe a.vɑ̃ si.zœʁ/', 'zhuh duh-veh rahⁿ-tray ah-vahⁿ see-ZUHR', ['modal']),
  sent(449, 'Nous pouvions jouer dans la rue.', 'We could play in the street.', '/nu pu.vjɔ̃ ʒu.e dɑ̃ la ʁy/', 'noo poo-vyohⁿ zhoo-ay dahⁿ lah RÜ', ['modal']),
  sent(450, 'Je voulais devenir pilote.', 'I wanted to become a pilot.', '/ʒə vu.lɛ də.və.niʁ pi.lɔt/', 'zhuh voo-leh duh-vuh-neer pee-LOT', ['modal']),
  sent(451, 'Je savais nager à cinq ans.', 'I could swim at five.', '/ʒə sa.vɛ na.ʒe a sɛ̃.kɑ̃/', 'zhuh sah-veh nah-zhay ah sehⁿ-KAHⁿ', ['stem']),
  sent(452, 'Je connaissais tous les voisins.', 'I knew all the neighbours.', '/ʒə kɔ.nɛ.sɛ tu le vwa.zɛ̃/', 'zhuh koh-neh-seh too lay vwah-ZEHⁿ', ['stem']),
  sent(453, 'Je mettais mon manteau rouge.', 'I used to wear my red coat.', '/ʒə mɛ.tɛ mɔ̃ mɑ̃.to ʁuʒ/', 'zhuh meh-teh mohⁿ mahⁿ-toh ROOZH', ['stem']),
  sent(454, 'Nous sortions le samedi soir.', 'We used to go out on Saturday nights.', '/nu sɔʁ.tjɔ̃ lə sam.di swaʁ/', 'noo sor-tyohⁿ luh sam-dee SWAR', ['stem']),
  sent(455, 'Le bébé dormait dans ma chambre.', 'The baby used to sleep in my room.', '/lə be.be dɔʁ.mɛ dɑ̃ ma ʃɑ̃bʁ/', 'luh bay-bay dor-meh dahⁿ mah SHAHⁿBR', ['stem']),
  sent(456, 'Nous vivions à Lausanne.', 'We used to live in Lausanne.', '/nu vi.vjɔ̃ a lo.zan/', 'noo vee-vyohⁿ ah loh-ZANN', ['stem']),
  sent(457, 'Je lisais des bandes dessinées.', 'I used to read comics.', '/ʒə li.zɛ de bɑ̃d de.si.ne/', 'zhuh lee-zeh day bahⁿd day-see-NAY', ['stem']),
  sent(458, 'Mon grand-père disait toujours la même chose.', 'My grandfather always said the same thing.', '/mɔ̃ ɡʁɑ̃.pɛʁ di.zɛ tu.ʒuʁ la mɛm ʃoz/', 'mohⁿ grahⁿ-pehr dee-zeh too-zhoor lah mem SHOZ', ['stem']),
];

/* ── ACT 5 · ÊTRE, LA SEULE EXCEPTION ───────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  conj(1416, "j'étais", 'I was / I used to be', '/ʒe.tɛ/', 'zhay-TEH', 'être', 'je', ['etre'], FCVDR),
  conj(465, 'tu étais', 'you were', '/ty e.tɛ/', 'tü ay-TEH', 'être', 'tu', ['etre']),
  conj(466, 'il était', 'he was / it was', '/i.le.tɛ/', 'ee-lay-TEH', 'être', 'il', ['etre']),
  conj(468, 'elle était', 'she was', '/ɛ.le.tɛ/', 'eh-lay-TEH', 'être', 'elle', ['etre']),
  conj(1417, 'nous étions', 'we were / we used to be', '/nu.ze.tjɔ̃/', 'noo zay-TYOHⁿ', 'être', 'nous', ['etre', 'ions']),
  conj(467, 'vous étiez', 'you were', '/vu.ze.tje/', 'voo zay-TYAY', 'être', 'vous', ['etre', 'iez']),
  conj(1418, 'ils étaient', 'they were / they used to be', '/il.ze.tɛ/', 'eel zay-TEH', 'être', 'ils', ['etre', 'aient']),
  sent(1466, 'Nous étions six à la maison.', 'There were six of us at home.', '/nu.ze.tjɔ̃ si.za la mɛ.zɔ̃/', 'noo zay-tyohⁿ see-zah lah meh-ZOHⁿ', ['etre']),
  sent(469, "J'étais très timide à l'école.", 'I was very shy at school.', '/ʒe.tɛ tʁɛ ti.mid a le.kɔl/', 'zhay-teh treh tee-meed ah lay-KOL', ['etre']),
  sent(470, "C'était un petit village.", 'It was a small village.', '/se.tɛ œ̃ pə.ti vi.laʒ/', 'say-teh uhⁿ puh-tee vee-LAZH', ['etre', 'cetait']),
  sent(471, 'Vous étiez voisins à Rosemont.', 'You were neighbours in Rosemont.', '/vu.ze.tje vwa.zɛ̃ a ʁoz.mɔ̃/', 'voo zay-tyay vwah-zehⁿ ah roz-MOHⁿ', ['etre', 'montreal']),
  sent(472, 'Mes parents étaient contents.', 'My parents were happy.', '/me pa.ʁɑ̃ e.tɛ kɔ̃.tɑ̃/', 'may pah-rahⁿ ay-teh kohⁿ-TAHⁿ', ['etre', 'aient']),
  sent(473, 'Tu étais toujours en retard.', 'You were always late.', '/ty e.tɛ tu.ʒuʁ ɑ̃ ʁə.taʁ/', 'tü ay-teh too-zhoor ahⁿ ruh-TAR', ['etre']),
];

/* ── ACT 6 · -GER ──────────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  conj(1420, 'je mangeais', 'I used to eat', '/ʒə mɑ̃.ʒɛ/', 'zhuh mahⁿ-ZHEH', 'manger', 'je', ['ger'], FCVDR),
  conj(1421, 'nous mangions', 'we used to eat', '/nu mɑ̃.ʒjɔ̃/', 'noo mahⁿ-ZHYOHⁿ', 'manger', 'nous', ['ger', 'ions'], FCVDR),
  conj(481, 'vous mangiez', 'you used to eat', '/vu mɑ̃.ʒje/', 'voo mahⁿ-ZHYAY', 'manger', 'vous', ['ger', 'iez'], FCVDR),
  conj(1422, 'ils mangeaient', 'they used to eat', '/il mɑ̃.ʒɛ/', 'eel mahⁿ-ZHEH', 'manger', 'ils', ['ger', 'aient']),
  conj(475, 'je nageais', 'I used to swim', '/ʒə na.ʒɛ/', 'zhuh nah-ZHEH', 'nager', 'je', ['ger'], FCVDR),
  conj(474, 'nous nagions', 'we used to swim', '/nu na.ʒjɔ̃/', 'noo nah-ZHYOHⁿ', 'nager', 'nous', ['ger', 'ions'], FCVDR),
  conj(476, 'tu voyageais', 'you used to travel', '/ty vwa.ja.ʒɛ/', 'tü vwah-yah-ZHEH', 'voyager', 'tu', ['ger']),
  conj(477, 'nous voyagions', 'we used to travel', '/nu vwa.ja.ʒjɔ̃/', 'noo vwah-yah-ZHYOHⁿ', 'voyager', 'nous', ['ger', 'ions']),
  conj(1438, 'ils voyageaient', 'they used to travel', '/il vwa.ja.ʒɛ/', 'eel vwah-yah-ZHEH', 'voyager', 'ils', ['ger', 'aient'], FCVDR),
  conj(478, 'nous partagions', 'we used to share', '/nu paʁ.ta.ʒjɔ̃/', 'noo par-tah-ZHYOHⁿ', 'partager', 'nous', ['ger', 'ions']),
  conj(479, 'il changeait', 'it used to change', '/il ʃɑ̃.ʒɛ/', 'eel shahⁿ-ZHEH', 'changer', 'il', ['ger']),
  conj(480, 'elle bougeait', 'she used to move / fidget', '/ɛl bu.ʒɛ/', 'el boo-ZHEH', 'bouger', 'elle', ['ger']),
  conj(482, 'nous rangions', 'we used to tidy', '/nu ʁɑ̃.ʒjɔ̃/', 'noo rahⁿ-ZHYOHⁿ', 'ranger', 'nous', ['ger', 'ions']),
  sent(1443, 'Nous mangions ici.', 'We used to eat here.', '/nu mɑ̃.ʒjɔ̃ i.si/', 'noo mahⁿ-zhyohⁿ ee-SEE', ['pair', 'ger', 'ions'], FCVDR),
  sent(1457, 'Le dimanche, nous mangions du thiéboudienne.', 'On Sundays, we used to eat thiéboudienne.', '/lə di.mɑ̃ʃ nu mɑ̃.ʒjɔ̃ dy tʃe.bu.dʒɛn/', 'luh dee-MAHⁿSH noo mahⁿ-zhyohⁿ dü chay-boo-JENN', ['ger', 'dakar']),
  sent(483, "L'été, nous nagions dans le lac.", 'In summer, we used to swim in the lake.', '/le.te nu na.ʒjɔ̃ dɑ̃ lə lak/', 'lay-TAY noo nah-zhyohⁿ dahⁿ luh LAK', ['ger', 'suisse']),
  sent(484, 'Mon oncle voyageait beaucoup pour son travail.', 'My uncle used to travel a lot for work.', '/mɔ̃.nɔ̃kl vwa.ja.ʒɛ bo.ku puʁ sɔ̃ tʁa.vaj/', 'moh-nohⁿkl vwah-yah-zheh boh-koo poor sohⁿ trah-VYE', ['ger']),
  sent(485, 'Nous partagions une chambre, mon frère et moi.', 'My brother and I used to share a room.', '/nu paʁ.ta.ʒjɔ̃ yn ʃɑ̃bʁ mɔ̃ fʁɛʁ e mwa/', 'noo par-tah-zhyohⁿ ün shahⁿbr mohⁿ frehr ay MWAH', ['ger']),
  sent(486, 'Le quartier changeait vite.', 'The neighbourhood was changing fast.', '/lə kaʁ.tje ʃɑ̃.ʒɛ vit/', 'luh kar-tyay shahⁿ-zheh VEET', ['ger']),
  sent(487, 'Mon petit frère bougeait tout le temps.', 'My little brother never kept still.', '/mɔ̃ pə.ti fʁɛʁ bu.ʒɛ tu lə tɑ̃/', 'mohⁿ puh-tee frehr boo-zheh too luh TAHⁿ', ['ger']),
];

/* ── ACT 7 · -CER ──────────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  conj(1423, 'je commençais', 'I used to start', '/ʒə kɔ.mɑ̃.sɛ/', 'zhuh koh-mahⁿ-SEH', 'commencer', 'je', ['cer'], FCVDR),
  conj(1424, 'nous commencions', 'we used to start', '/nu kɔ.mɑ̃.sjɔ̃/', 'noo koh-mahⁿ-SYOHⁿ', 'commencer', 'nous', ['cer', 'ions'], FCVDR),
  conj(494, 'vous commenciez', 'you used to start', '/vu kɔ.mɑ̃.sje/', 'voo koh-mahⁿ-SYAY', 'commencer', 'vous', ['cer', 'iez'], FCVDR),
  conj(1425, 'ils commençaient', 'they used to start', '/il kɔ.mɑ̃.sɛ/', 'eel koh-mahⁿ-SEH', 'commencer', 'ils', ['cer', 'aient'], FCVDR),
  conj(489, 'il lançait', 'he used to throw', '/il lɑ̃.sɛ/', 'eel lahⁿ-SEH', 'lancer', 'il', ['cer']),
  conj(488, 'nous lancions', 'we used to throw', '/nu lɑ̃.sjɔ̃/', 'noo lahⁿ-SYOHⁿ', 'lancer', 'nous', ['cer', 'ions'], FCVDR),
  conj(490, 'elle plaçait', 'she used to place', '/ɛl pla.sɛ/', 'el plah-SEH', 'placer', 'elle', ['cer']),
  conj(491, 'nous avancions', 'we used to move forward', '/nu.za.vɑ̃.sjɔ̃/', 'noo zah-vahⁿ-SYOHⁿ', 'avancer', 'nous', ['cer', 'ions']),
  conj(492, 'tu prononçais', 'you used to pronounce', '/ty pʁɔ.nɔ̃.sɛ/', 'tü proh-nohⁿ-SEH', 'prononcer', 'tu', ['cer'], FCVDR),
  conj(495, 'nous prononcions', 'we used to pronounce', '/nu pʁɔ.nɔ̃.sjɔ̃/', 'noo proh-nohⁿ-SYOHⁿ', 'prononcer', 'nous', ['cer', 'ions']),
  conj(493, 'elle annonçait', 'she used to announce', '/ɛ.la.nɔ̃.sɛ/', 'eh-lah-nohⁿ-SEH', 'annoncer', 'elle', ['cer']),
  sent(1444, 'Nous commencions à huit heures.', 'We used to start at eight.', '/nu kɔ.mɑ̃.sjɔ̃ a ɥi.tœʁ/', 'noo koh-mahⁿ-syohⁿ ah wee-TUHR', ['pair', 'cer', 'ions']),
  sent(1458, 'Ma grand-mère commençait sa journée à six heures.', 'My grandmother used to start her day at six.', '/ma ɡʁɑ̃.mɛʁ kɔ.mɑ̃.sɛ sa ʒuʁ.ne a si.zœʁ/', 'mah grahⁿ-mehr koh-mahⁿ-seh sah zhoor-nay ah see-ZUHR', ['cer', 'dakar']),
  sent(1471, "L'école commençait à huit heures.", 'School used to start at eight.', '/le.kɔl kɔ.mɑ̃.sɛ a ɥi.tœʁ/', 'lay-kol koh-mahⁿ-seh ah wee-TUHR', ['cer']),
  sent(496, 'La maîtresse plaçait les élèves par deux.', 'The teacher used to seat the pupils in pairs.', '/la mɛ.tʁɛs pla.sɛ le.ze.lɛv paʁ dø/', 'lah meh-tress plah-seh lay-zay-lev par DEU', ['cer', 'abidjan']),
  sent(497, 'Nous lancions la balle contre le mur.', 'We used to throw the ball against the wall.', '/nu lɑ̃.sjɔ̃ la bal kɔ̃.tʁə lə myʁ/', 'noo lahⁿ-syohⁿ lah bal kohⁿ-truh luh MÜR', ['cer']),
  sent(498, 'Tu prononçais mal mon prénom.', 'You used to mispronounce my first name.', '/ty pʁɔ.nɔ̃.sɛ mal mɔ̃ pʁe.nɔ̃/', 'tü proh-nohⁿ-seh mal mohⁿ pray-NOHⁿ', ['cer']),
  sent(499, 'La radio annonçait la pluie.', 'The radio was forecasting rain.', '/la ʁa.djo a.nɔ̃.sɛ la plɥi/', 'lah rah-dyoh ah-nohⁿ-seh lah PLWEE', ['cer']),
];

/* ── ACT 8 · LE DOUBLE I ───────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  conj(511, 'nous étudions', 'we study', '/nu.ze.ty.djɔ̃/', 'noo zay-tü-DYOHⁿ', 'étudier', 'nous', ['stem-source', 'double-i'], FCVR, 'présent'),
  conj(512, 'nous oublions', 'we forget', '/nu.zu.bli.jɔ̃/', 'noo zoo-blee-YOHⁿ', 'oublier', 'nous', ['stem-source', 'double-i'], FCVR, 'présent'),
  conj(507, "j'étudiais", 'I used to study', '/ʒe.ty.djɛ/', 'zhay-tü-DYEH', 'étudier', 'je', ['double-i']),
  conj(1426, 'nous étudiions', 'we used to study', '/nu.ze.ty.di.jɔ̃/', 'noo zay-tü-dee-YOHⁿ', 'étudier', 'nous', ['double-i'], FCVDR),
  conj(1427, 'vous étudiiez', 'you used to study', '/vu.ze.ty.di.je/', 'voo zay-tü-dee-YAY', 'étudier', 'vous', ['double-i', 'iez'], FCVDR),
  conj(501, 'nous oubliions', 'we used to forget', '/nu.zu.bli.i.jɔ̃/', 'noo zoo-blee-YOHⁿ', 'oublier', 'nous', ['double-i'], FCVDR),
  conj(500, 'vous oubliiez', 'you used to forget', '/vu.zu.bli.i.je/', 'voo zoo-blee-YAY', 'oublier', 'vous', ['double-i', 'iez'], FCVDR),
  conj(1428, 'nous riions', 'we used to laugh', '/nu ʁi.jɔ̃/', 'noo ree-YOHⁿ', 'rire', 'nous', ['double-i'], FCVDR),
  conj(506, 'vous riiez', 'you used to laugh', '/vu ʁi.je/', 'voo ree-YAY', 'rire', 'vous', ['double-i', 'iez'], FCVDR),
  conj(502, 'nous criions', 'we used to shout', '/nu kʁi.jɔ̃/', 'noo kree-YOHⁿ', 'crier', 'nous', ['double-i'], FCVDR),
  conj(1411, 'nous voyions', 'we used to see', '/nu vwa.jjɔ̃/', 'noo vwah-YOHⁿ', 'voir', 'nous', ['stem', 'y', 'double-i'], FCVDR),
  conj(505, 'vous voyiez', 'you used to see', '/vu vwa.jje/', 'voo vwah-YAY', 'voir', 'vous', ['y', 'double-i', 'iez'], FCVDR),
  conj(1413, 'nous croyions', 'we used to believe', '/nu kʁwa.jjɔ̃/', 'noo krwah-YOHⁿ', 'croire', 'nous', ['stem', 'y', 'double-i'], FCVDR),
  conj(1429, 'nous payions', 'we used to pay', '/nu pɛ.jjɔ̃/', 'noo peh-YOHⁿ', 'payer', 'nous', ['double-i', 'y'], FCVDR),
  conj(504, 'vous payiez', 'you used to pay', '/vu pɛ.jje/', 'voo peh-YAY', 'payer', 'vous', ['double-i', 'y', 'iez'], FCVDR),
  conj(503, 'nous envoyions', 'we used to send', '/nu.zɑ̃.vwa.jjɔ̃/', 'noo zahⁿ-vwah-YOHⁿ', 'envoyer', 'nous', ['double-i', 'y'], FCVDR),
  sent(1451, 'Nous étudiions le soir.', 'We used to study in the evening.', '/nu.ze.ty.di.jɔ̃ lə swaʁ/', 'noo zay-tü-dee-yohⁿ luh SWAR', ['double-i'], FCVDR),
  sent(1452, 'Vous étudiiez à Montréal.', 'You used to study in Montreal.', '/vu.ze.ty.di.je a mɔ̃.tʁe.al/', 'voo zay-tü-dee-yay ah mohⁿ-tray-AL', ['double-i', 'iez']),
  sent(1453, 'Nous riions beaucoup.', 'We used to laugh a lot.', '/nu ʁi.jɔ̃ bo.ku/', 'noo ree-yohⁿ boh-KOO', ['double-i']),
  sent(1454, 'Nous voyions la mer.', 'We could see the sea.', '/nu vwa.jjɔ̃ la mɛʁ/', 'noo vwah-yohⁿ lah MEHR', ['double-i', 'y']),
  sent(1455, 'Nous croyions au père Noël.', 'We used to believe in Santa Claus.', '/nu kʁwa.jjɔ̃ o pɛʁ nɔ.ɛl/', 'noo krwah-yohⁿ oh pehr noh-EL', ['double-i', 'y']),
  sent(1456, 'Nous payions le pain au kiosque.', 'We used to pay for bread at the kiosk.', '/nu pɛ.jjɔ̃ lə pɛ̃ o kjɔsk/', 'noo peh-yohⁿ luh pehⁿ oh KYOSK', ['double-i', 'y']),
  sent(508, 'Vous oubliiez toujours vos devoirs.', 'You always used to forget your homework.', '/vu.zu.bli.i.je tu.ʒuʁ vo də.vwaʁ/', 'voo zoo-blee-yay too-zhoor voh duh-VWAR', ['double-i', 'iez']),
  sent(509, 'Nous envoyions des lettres à nos cousins.', 'We used to send letters to our cousins.', '/nu.zɑ̃.vwa.jjɔ̃ de lɛtʁ a no ku.zɛ̃/', 'noo zahⁿ-vwah-yohⁿ day letr ah noh koo-ZEHⁿ', ['double-i', 'y']),
  sent(510, 'Les enfants criaient dans la cour.', 'The children used to shout in the playground.', '/le.zɑ̃.fɑ̃ kʁi.ɛ dɑ̃ la kuʁ/', 'lay zahⁿ-fahⁿ kree-eh dahⁿ lah KOOR', ['single-i']),
];

/* ── ACT 9 · LES IMPERSONNELS ──────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  chunk(1432, 'il y avait', 'there was / there were', '/i.li.ja.vɛ/', 'eel ee ah-VEH', ['impersonal', 'avoir'], FCVDR),
  chunk(1431, 'il fallait', 'you had to / it was necessary', '/il fa.lɛ/', 'eel fah-LEH', ['impersonal']),
  chunk(1430, 'il pleuvait', 'it was raining / it used to rain', '/il plø.vɛ/', 'eel pleu-VEH', ['impersonal']),
  chunk(513, 'il neigeait', 'it was snowing / it used to snow', '/il nɛ.ʒɛ/', 'eel neh-ZHEH', ['impersonal', 'ger'], FCVDR),
  chunk(514, 'il faisait beau', 'the weather was nice', '/il fə.zɛ bo/', 'eel fuh-zeh BOH', ['impersonal', 'schwa']),
  chunk(515, 'il faisait froid', 'it was cold', '/il fə.zɛ fʁwa/', 'eel fuh-zeh FRWAH', ['impersonal', 'schwa']),
  chunk(517, 'il faisait chaud', 'it was hot', '/il fə.zɛ ʃo/', 'eel fuh-zeh SHOH', ['impersonal', 'schwa']),
  chunk(516, 'il valait mieux', 'it was better to', '/il va.lɛ mjø/', 'eel vah-leh MYEU', ['impersonal']),
  sent(1448, 'Il pleuvait souvent en novembre.', 'It often rained in November.', '/il plø.vɛ su.vɑ̃ ɑ̃ nɔ.vɑ̃bʁ/', 'eel pleu-veh soo-vahⁿ ahⁿ noh-VAHⁿBR', ['impersonal']),
  sent(1449, 'Il fallait prendre le bus.', 'We had to take the bus.', '/il fa.lɛ pʁɑ̃dʁ lə bys/', 'eel fah-leh prahⁿdr luh BÜS', ['impersonal']),
  sent(1450, 'Il y avait un grand arbre dans la cour.', 'There was a big tree in the courtyard.', '/i.li.ja.vɛ œ̃ ɡʁɑ̃.taʁbʁ dɑ̃ la kuʁ/', 'eel ee ah-veh uhⁿ grahⁿ-tarbr dahⁿ lah KOOR', ['impersonal', 'scene']),
  sent(1464, 'Dans mon quartier, il y avait un dépanneur au coin.', 'In my neighbourhood, there was a corner store on the corner.', '/dɑ̃ mɔ̃ kaʁ.tje i.li.ja.vɛ œ̃ de.pa.nœʁ o kwɛ̃/', 'dahⁿ mohⁿ kar-TYAY eel ee ah-veh uhⁿ day-pah-nuhr oh KWEHⁿ', ['impersonal', 'montreal']),
  sent(1465, "L'hiver, nous faisions du patin au parc.", 'In winter, we used to skate in the park.', '/li.vɛʁ nu fə.zjɔ̃ dy pa.tɛ̃ o paʁk/', 'lee-VEHR noo fuh-zyohⁿ dü pah-tehⁿ oh PARK', ['schwa', 'montreal']),
  sent(518, 'Il neigeait de novembre à avril.', 'It snowed from November to April.', '/il nɛ.ʒɛ də nɔ.vɑ̃bʁ a a.vʁil/', 'eel neh-zheh duh noh-vahⁿbr ah ah-VREEL', ['impersonal', 'montreal']),
  sent(519, 'Il faisait froid, mais il faisait beau.', 'It was cold, but the weather was nice.', '/il fə.zɛ fʁwa mɛ il fə.zɛ bo/', 'eel fuh-zeh frwah meh eel fuh-zeh BOH', ['impersonal']),
  sent(520, 'Il valait mieux partir tôt.', 'It was better to leave early.', '/il va.lɛ mjø paʁ.tiʁ to/', 'eel vah-leh myeu par-teer TOH', ['impersonal']),
  sent(521, 'Il fallait mettre des bottes.', 'You had to wear boots.', '/il fa.lɛ mɛtʁ de bɔt/', 'eel fah-leh metr day BOT', ['impersonal']),
  sent(522, 'Il y avait de la neige partout.', 'There was snow everywhere.', '/i.li.ja.vɛ də la nɛʒ paʁ.tu/', 'eel ee ah-veh duh lah nezh par-TOO', ['impersonal']),
];

/* ── ACT 10 · PRONOMINAUX ET NÉGATION ──────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  conj(523, 'je me levais', 'I used to get up', '/ʒə mə lə.vɛ/', 'zhuh muh luh-VEH', 'se lever', 'je', ['pronominal'], FCVDR),
  conj(524, 'tu te couchais', 'you used to go to bed', '/ty tə ku.ʃɛ/', 'tü tuh koo-SHEH', 'se coucher', 'tu', ['pronominal']),
  conj(525, 'on se voyait', 'we used to see each other', '/ɔ̃ sə vwa.jɛ/', 'ohⁿ suh vwah-YEH', 'se voir', 'on', ['pronominal', 'on']),
  conj(526, 'nous nous promenions', 'we used to go for walks', '/nu nu pʁɔm.njɔ̃/', 'noo noo prom-NYOHⁿ', 'se promener', 'nous', ['pronominal', 'ions']),
  conj(527, "ils s'amusaient", 'they used to have fun', '/il sa.my.zɛ/', 'eel sah-mü-ZEH', "s'amuser", 'ils', ['pronominal', 'aient']),
  conj(532, "je m'ennuyais", 'I used to get bored', '/ʒə mɑ̃.nɥi.jɛ/', 'zhuh mahⁿ-nwee-YEH', "s'ennuyer", 'je', ['pronominal', 'y']),
  conj(533, 'vous vous disputiez', 'you used to argue', '/vu vu dis.py.tje/', 'voo voo dees-pü-TYAY', 'se disputer', 'vous', ['pronominal', 'iez']),
  chunk(528, 'je ne savais pas', "I didn't know", '/ʒə nə sa.vɛ pa/', 'zhuh nuh sah-veh PAH', ['negation'], FCVDR),
  chunk(529, "il n'y avait personne", 'there was nobody', '/il ni.ja.vɛ pɛʁ.sɔn/', 'eel nee ah-veh pehr-SONN', ['negation', 'impersonal'], FCVDR),
  chunk(530, 'je ne mangeais jamais', 'I never used to eat', '/ʒə nə mɑ̃.ʒɛ ʒa.mɛ/', 'zhuh nuh mahⁿ-zheh zhah-MEH', ['negation', 'ger']),
  chunk(531, 'nous ne sortions pas', "we didn't go out", '/nu nə sɔʁ.tjɔ̃ pa/', 'noo nuh sor-tyohⁿ PAH', ['negation']),
  sent(534, "Je me levais à six heures pour aller à l'école.", 'I used to get up at six to go to school.', '/ʒə mə lə.vɛ a si.zœʁ puʁ a.le a le.kɔl/', 'zhuh muh luh-veh ah see-zuhr poor ah-lay ah lay-KOL', ['pronominal']),
  sent(535, 'Le dimanche, on se voyait chez ma tante.', 'On Sundays, we used to see each other at my aunt’s.', '/lə di.mɑ̃ʃ ɔ̃ sə vwa.jɛ ʃe ma tɑ̃t/', 'luh dee-mahⁿsh ohⁿ suh vwah-yeh shay mah TAHⁿT', ['pronominal', 'on']),
  sent(536, 'Je ne savais pas nager.', "I couldn't swim.", '/ʒə nə sa.vɛ pa na.ʒe/', 'zhuh nuh sah-veh pah nah-ZHAY', ['negation']),
  sent(537, "Il n'y avait personne dans la rue.", 'There was nobody in the street.', '/il ni.ja.vɛ pɛʁ.sɔn dɑ̃ la ʁy/', 'eel nee ah-veh pehr-sonn dahⁿ lah RÜ', ['negation', 'impersonal']),
  sent(538, 'Nous nous promenions au bord de la lagune.', 'We used to walk along the lagoon.', '/nu nu pʁɔm.njɔ̃ o bɔʁ də la la.ɡyn/', 'noo noo prom-nyohⁿ oh bor duh lah lah-GÜN', ['pronominal', 'abidjan']),
  sent(539, 'Mes parents ne se disputaient jamais.', 'My parents never argued.', '/me pa.ʁɑ̃ nə sə dis.py.tɛ ʒa.mɛ/', 'may pah-rahⁿ nuh suh dees-pü-teh zhah-MEH', ['pronominal', 'negation']),
  sent(540, 'Je ne m’ennuyais jamais chez elle.', 'I was never bored at her place.', '/ʒə nə mɑ̃.nɥi.jɛ ʒa.mɛ ʃe.zɛl/', 'zhuh nuh mahⁿ-nwee-yeh zhah-meh shay-ZEL', ['pronominal', 'negation']),
];

/* ── ACT 11 · L'ORTHOGRAPHE CONTRE LE SON ──────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(543, "J'ai parlé avec elle.", 'I talked with her.', '/ʒe paʁ.le a.vɛ.kɛl/', 'zhay par-lay ah-veh-KEL', ['homophone', 'pc-ear']),
  sent(544, 'Je parlais avec elle.', 'I used to talk with her.', '/ʒə paʁ.lɛ a.vɛ.kɛl/', 'zhuh par-leh ah-veh-KEL', ['homophone', 'pc-ear'], FCVDR),
  sent(545, "J'ai mangé à midi.", 'I ate at noon.', '/ʒe mɑ̃.ʒe a mi.di/', 'zhay mahⁿ-zhay ah mee-DEE', ['homophone', 'pc-ear']),
  sent(546, 'Je mangeais à midi.', 'I used to eat at noon.', '/ʒə mɑ̃.ʒɛ a mi.di/', 'zhuh mahⁿ-zheh ah mee-DEE', ['homophone', 'pc-ear', 'ger'], FCVDR),
  sent(547, 'Tu parlais trop vite.', 'You used to talk too fast.', '/ty paʁ.lɛ tʁo vit/', 'tü par-leh troh VEET', ['homophone'], FCVDR),
  sent(548, 'Ils parlaient trop fort.', 'They used to talk too loud.', '/il paʁ.lɛ tʁo fɔʁ/', 'eel par-leh troh FOR', ['homophone', 'aient'], FCVDR),
  sent(549, 'Elle aimait danser.', 'She loved to dance.', '/ɛ.lɛ.mɛ dɑ̃.se/', 'eh-leh-meh dahⁿ-SAY', ['homophone', 'infinitive'], FCVDR),
  sent(550, 'Nous aimions chanter.', 'We loved to sing.', '/nu.zɛ.mjɔ̃ ʃɑ̃.te/', 'noo zeh-myohⁿ shahⁿ-TAY', ['homophone', 'infinitive']),
];

/* ── ALL ─────────────────────────────────────────────────────────────── */

/** Per act, index-aligned with the lesson's acts (act 12 authors no rows). */
export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, [],
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat().sort((a, b) => a.id.localeCompare(b.id));

/** Dictée pools. LETTERS MODE ONLY, measured through the app's own
 *  dicteeMode: word mode hands every real word over pre-spelled, so a spelling
 *  lesson can only dictate in letters. */
const dictable = (r: Row) => (r.drills as string[]).includes('dictation') && dicteeMode(r.fr) === 'letters';

export const DICTEE_IDS = ALL_ROWS.filter(dictable).map((r) => r.id);

/** Per act, so each act's dictation names only what that act taught. */
export const dicteeFor = (act: number) => ROWS_BY_ACT[act - 1].filter(dictable).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() = NFD, strip combining marks, lowercase, strip . , ! ? ; : « » ( ) [ ]
 *  and apostrophes/hyphens, strip whitespace. Measured consequences:
 *
 *    -ais / -ait / -aient     different letters, TYPEABLE     (the ear cannot)
 *    mangeais / mangais       different letters, TYPEABLE
 *    commençais / commencais  ONE STRING: the cedilla folds away. mcq only
 *    étudiions / étudions     different letters, TYPEABLE
 *    parlé / parler / parlais different letters, TYPEABLE, and é folds to e
 *    j'étais / jétais         ONE STRING (apostrophe and accent fold). Fine.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOLD_COLLISIONS: [string, string][] = [
  ['je commençais', 'je commencais'],
  ['ils commençaient', 'ils commencaient'],
  ["j'étais", 'jetais'],
];

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: 'a typeIn on commençais', why: 'fold() strips the cedilla, so « commencais » is marked right. Tested by mcq and by letter-tile dictation instead.' },
  { want: 'a listenChoose between voyons and voyions', why: 'most speakers say both [vwa.jɔ̃]. It is a spelling point and is tested in writing.' },
  { want: 'a listenChoose between parlais and parlait', why: 'one sound, [paʁ.lɛ]. That is why the endings are tested by typing.' },
  { want: 'a listenChoose resting on [e] against [ɛ] alone (parlé / parlais)', why: 'many speakers, in Québec and in Paris, barely separate them at the end of a word. Act 11 teaches the reliable cue instead: j\'ai before the verb.' },
];

/** Error forms the lesson prints on purpose, only where it marks them wrong. */
export const WRONG_FORMS = [
  'mangeions', 'commençions', 'commencais', 'mangais', 'fesais', 'boivais',
  'je sommais', 'ils parlait', 'je finais', 'nous choisions', 'je prendais',
] as const;
