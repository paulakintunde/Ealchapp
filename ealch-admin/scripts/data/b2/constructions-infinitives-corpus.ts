// b2.14.l1 « Les constructions infinitives »: the authored corpus, the
// imports and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md
// (grammar shape, as b2.12 gérondif and b2.07 futur antérieur), under the B2
// rules of B2-BUILD-LOG.md (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 14 of the B2 trail, the last of Unit 2
// ══════════════════════════════════════════════════════════════════════════
//
//   THE INFINITIVE AS A CLAUSE OF ITS OWN, ALWAYS AGAINST THE FORM IT BEATS.
//
//     l'infinitif passé   avoir / être + participe, the auxiliary of the
//                         passé composé; agreement with être and pronominals
//                         (après être partie, après s'être levés); a pronoun
//                         before avoir (après les avoir lus); ne pas avoir /
//                         n'avoir pas; the passé that looks forward (il faut
//                         avoir fini avant vendredi)
//     après, avant de     après + infinitif passé (après manger only as a
//                         familiar fixed phrase); avant de + présent, avant
//                         d'avoir + participe for « not before it is done »;
//                         avant que and après que with two subjects (lessons
//                         16 in B1 and 7 in B2)
//     pour                pour + présent = the purpose; pour + passé = the
//                         reason, a fault or a merit (sanctionné, félicité,
//                         condamné pour avoir...)
//     sans                sans + présent or passé with one subject; sans que
//                         + subjonctif with two (lesson 16 in B1); sans avoir
//                         rien reçu / sans rien avoir reçu
//     un seul sujet       pushed past lesson 16 in B1: with croire, penser,
//                         dire, affirmer, reconnaître, nier, se souvenir,
//                         espérer, one subject allows the infinitive AND the
//                         que-clause; with vouloir only the infinitive; il
//                         pense partir / il pense que tu pars
//     à, de ou rien       the preposition belongs to the first verb:
//                         commencer à (de), se mettre à, finir de / finir
//                         par, s'attendre à, tenir à, hésiter à (lesson 16 in
//                         B1), oser, compter, il s'agit de, s'efforcer de,
//                         penser à / penser, venir / venir de, commencer par,
//                         empêcher de, obliger à
//     faire, laisser      faire + infinitif (someone else acts), the agent
//                         with à or par, faire faire, laisser + infinitif,
//                         laisser tomber; the pronoun before faire or laisser
//                         (je la fais réparer, je la lui ai fait lire, fais-le
//                         entrer); fait never agrees before an infinitive;
//                         se faire belongs to lesson 18 in B1
//     l'infinitif seul    instructions and notices (Ne pas se pencher au
//                         dehors, Composter avant de monter, s'adresser à
//                         l'accueil, ne pas together in front); the infinitive
//                         as subject (Voyager forme la jeunesse); deliberative
//                         questions (Que faire ? À qui s'adresser ?); noun +
//                         de + infinitif (le droit de, le plaisir de), noun +
//                         à (des factures à payer), le premier à, prêt à,
//                         c'est à toi de; adjective + de (lesson 5 in B2) and
//                         facile à / il est facile de (lesson 22 in B1)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 16 in B1   the subject count, avant de / avant que, sans / sans
//                       que, pour / pour que, bare vouloir (reframe quoted)
//     lesson 17 in B1   the single file of pronouns (reframe quoted)
//     lesson 18 in B1   se faire + infinitif (reframe quoted, rows reused)
//     lesson 22 in B1   facile à / il est facile de (reframe quoted)
//     lesson 5 in B2    de + infinitif passé after a feeling, ne pas avoir
//                       (reframe quoted, rows reused)
//     lesson 7 in B2    après que + indicatif (reframe quoted, row reused)
//     lesson 12 in B2   the gérondif, against après avoir (reframe quoted)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check done read-only on 2026-09-29
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `faits-et-procedures` (fondations, a2-b2). Sub-theme for this
//     lesson, « les constructions infinitives », already set in Postgres.
//     Read-only probe, 2026-09-29: 173 fr.b1 rows (lesson 18 in B1, .1000-
//     .1192), ZERO fr.b2 rows, nothing in .1200-.1399 at any level.
//
//  2. ID BLOCK: `.1200`-`.1399`, assigned by the brief. Authored: `.1200`-
//     `.1397` with gaps between act blocks (see the act banners). Nothing
//     outside the block. 1000-1199 are B1 rows: not touched.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with any published row
//     (lesson 18 in B1 left « se faire voler », « se faire livrer » in this
//     theme). Every row is a sentence, a form card (cardType conjugation), a
//     gapfill card or a rule card.
//
//  4. REUSED ROWS (§F), seed plus packs read 2026-09-29, 20,683 items. The
//     rows of lessons 9 to 12 in B2 are drafts not yet in the seed, so none
//     is reused by id; the gérondif is cited in words.
//
//  5. RESPELLINGS. Nasals close with ⁿ; « après avoir » is a-preh-za-VWAR
//     with the liaison moved onto the next syllable, « sans avoir » sahⁿ-za-
//     VWAR. Spelled for the nasal checker, not the ear: « personne » pehr-
//     SONN, « semaines » suh-MENN, « téléphone » tay-lay-FONN, « panne »
//     PANN. « même » is MEM (the seed's). No U+203F anywhere.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs (lesson 16 in B1 uses ’). The one
//     `scenario` uses ’ only and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL SENTENCE IS EVER A ROW. « Après rendre le travail »,
//     « il a été puni pour mentir », « je fais la réparer », « je les ai
//     faites réparer », « ne se pencher pas » live only in the scene's
//     choice, commonErrors.wrong, trapDrill.promptSound and quiz errorSpot
//     prompts.
//
//  8. REAL-WORLD CLAIMS. The act 12 model letter cites the EU rail rule
//     (Regulation 2021/782 art. 19: compensation of 50% of the ticket price
//     for a delay of 120 minutes or more; worded as « indemnisation », not a
//     refund, since pre-review 2026-09-29) and « le médiateur de la
//     consommation » (France): both hold.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.14',
  seq: 14,
  title: 'Advanced Infinitive Constructions',
  sub: 'Les constructions infinitives',
  canDo: 'Can build and use infinitive constructions with control: the past infinitive with its auxiliary and agreement after après, pour and sans, the infinitive instead of a que-clause when the subject is the same (and both where both are correct), verbs followed by à, de or nothing, faire and laisser + infinitive with their pronouns and the invariable fait, and the infinitive on its own in instructions, as a subject, in questions and after nouns and adjectives, in a formal complaint',
  prereqUnitIds: ['b1.16', 'b1.17', 'b1.18', 'b1.22', 'b2.05', 'b2.07', 'b2.12'],
} as const;

export const LESSON_ID = 'b2.14.l1';
export const THEME = 'faits-et-procedures';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order.
 * ══════════════════════════════════════════════════════════════════════════ */

export const SUBJ_INF_UNIT = 'b1.16';
export const PRONOMS_UNIT = 'b1.17';
export const PASSIF_UNIT = 'b1.18';
export const CEST_UNIT = 'b1.22';
export const SUBJ_PASSE_UNIT = 'b2.05';
export const FUT_ANT_UNIT = 'b2.07';
export const GERONDIF_UNIT = 'b2.12';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const PRONOMS_REF = refFr(PRONOMS_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const CEST_REF = refFr(CEST_UNIT);
export const SUBJ_PASSE_REF = refFr(SUBJ_PASSE_UNIT);
export const FUT_ANT_REF = refFr(FUT_ANT_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
/** The next unit (logical relations): cited WITHOUT a number. */
export const NEXT_REF = 'la leçon suivante';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B116_REFRAME, REFRAME_EN as B116_REFRAME_EN } from '../b1/subjonctif-infinitif-corpus.ts';
export { REFRAME as B117_REFRAME, REFRAME_EN as B117_REFRAME_EN } from '../b1/ordre-pronoms-corpus.ts';
export { REFRAME as B118_REFRAME, REFRAME_EN as B118_REFRAME_EN } from '../b1/voix-passive-corpus.ts';
export { REFRAME as B122_REFRAME, REFRAME_EN as B122_REFRAME_EN } from '../b1/cest-il-est-corpus.ts';
export { REFRAME as B205_REFRAME, REFRAME_EN as B205_REFRAME_EN } from './subjonctif-passe-corpus.ts';
export { REFRAME as B207_REFRAME, REFRAME_EN as B207_REFRAME_EN } from './futur-anterieur-corpus.ts';
export { REFRAME as B212_REFRAME, REFRAME_EN as B212_REFRAME_EN } from './gerondif-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE VERBE SANS PAPIERS: an infinitive carries no person and no date. The
 *  sentence around it supplies both. WHO: the main subject (je crois avoir
 *  compris), somebody else after faire (je fais réparer: the garage), the
 *  reader of a notice (Ne pas se pencher), everyone (Voyager forme la
 *  jeunesse), the speaker deliberating (Que faire ?). WHEN: the présent is
 *  at the same time or after (pour arriver, avant de partir), the passé is
 *  before (après être parti, pour avoir menti), and the main verb anchors
 *  both (il faut avoir fini avant vendredi). The preposition in front (à,
 *  de, rien) is picked by the verb before it, never by the infinitive.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Un infinitif n'a ni personne ni date : il les prend dans la phrase.";
export const REFRAME_EN = 'An infinitive has no person and no date: it takes both from the sentence.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'L’infinitif, c’est le to ou le -ing de l’anglais.',
    why: 'False both ways and it drags the English habit in: « after eating » is après avoir mangé, not après manger; « I had my car repaired » is j’ai fait réparer, with no participle; « Do not lean out » is Ne pas se pencher, with no imperative.',
  },
  {
    text: 'Un seul sujet : l’infinitif ; deux sujets : que.',
    why: 'The reframe of lesson 16 in B1, quoted, not replaced. Act 6 exists because it is too strong at B2: « je crois que j’ai compris » is correct with one subject, and faire, notices and questions have no « que » side at all.',
  },
  {
    text: 'L’infinitif passé, c’est pour le passé.',
    why: 'False where act 2 has to hold: « il faut avoir fini avant vendredi » looks forward. The passé form says « before the other verb », not « in the past ».',
  },
  {
    text: 'Après une préposition, toujours l’infinitif.',
    why: 'Says nothing about which preposition (act 7), or about présent and passé (acts 3 to 5), and it is false after en (lesson 12 in B2: en partant).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-29, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    'fr.b2.emotions.1365',                     // Je suis content d'être venu.  (lesson 5 in B2)
    'fr.b2.emotions.1373',                     // Il est furieux de s'être trompé de train.  (lesson 5 in B2)
    'fr.b2.emotions.1366',                     // Je regrette de ne pas avoir appelé plus tôt.  (lesson 5 in B2)
  ],
  act3: [
    OA(1498),                                  // Elle range la cuisine avant de se coucher.  (lesson 16 in B1)
    OA(1499),                                  // Elle range la cuisine avant que les invités arrivent.  (lesson 16 in B1)
    'fr.b2.projets-et-futur.1883',             // Après que tu seras parti, je fermerai la maison.  (lesson 7 in B2)
    'fr.b2.opinions-et-avis.1945',             // Après avoir voté, le conseil a levé la séance.  (lesson 23 in B2)
  ],
  act4: [
    'fr.b2.maison.021',                        // L'agence immobilière a été mise en cause pour avoir dissimulé des vices cachés.  (sentence, dictation: named only)
  ],
  act5: [
    OA(1514),                                  // Il est sorti sans dire au revoir.  (lesson 16 in B1)
    OA(1515),                                  // Il est sorti sans que personne l’entende.  (lesson 16 in B1)
  ],
  act6: [
    OA(1400),                                  // Je veux partir avant six heures.  (lesson 16 in B1)
    OA(1401),                                  // Je veux que tu partes avant six heures.  (lesson 16 in B1)
    OA(1402),                                  // Nous préférons manger à la maison ce soir.  (lesson 16 in B1)
    OA(1404),                                  // Elle souhaite changer de poste cette année.  (lesson 16 in B1)
    OA(1406),                                  // J’aime travailler tôt le matin.  (lesson 16 in B1)
  ],
  act7: [
    OA(1463),                                  // Elle hésite à demander une augmentation.  (lesson 16 in B1)
    OA(1460),                                  // Nous avons réussi à réserver le gîte.  (lesson 16 in B1)
    OA(1570),                                  // Elle m’a demandé de rappeler ce soir.  (lesson 16 in B1)
    'fr.b1.emotions.1138',                     // J'étais stressée toute la semaine, puis j'ai fini par me calmer.  (lesson 35 in B1)
    'fr.sons.liaisons.049',                    // Tout à coup, il s'est mis à pleuvoir.  (sentence, review: named only)
  ],
  act8: [
    'fr.b1.faits-et-procedures.1164',          // Je me suis fait réparer la voiture.  (lesson 18 in B1)
    'fr.b1.faits-et-procedures.1113',          // Il s'est fait aider par son frère.  (lesson 18 in B1)
    'fr.b1.comparaisons.1172',                 // La propriétaire elle-même m'a fait visiter.  (lesson 24 in B1)
  ],
  act9: [
    'fr.b1.pronoms-essentiels.1196',           // Les deux clés que j'ai fait faire coûtent quarante dollars.  (lesson 11 in B1)
    'fr.b1.rp-etiquette.1105',                 // Excusez-moi, je vous ai fait attendre.  (lesson 26 in B1)
    'fr.b2.emotions.1370',                     // Nous sommes désolés de vous avoir fait attendre.  (lesson 5 in B2)
  ],
  act10: [] as string[],
  act11: [
    'fr.b1.description-personnes-objets.1102', // Il est difficile de trouver un logement à Montréal.  (lesson 22 in B1)
    'fr.b1.description-personnes-objets.1104', // Un logement, c'est difficile à trouver.  (lesson 22 in B1)
    'fr.b1.description-personnes-objets.1107', // Ce formulaire est facile à remplir.  (lesson 22 in B1)
    'fr.b2.emotions.1374',                     // Je suis ravi de t'avoir revue.  (lesson 5 in B2)
  ],
  act12: [
    'fr.b1.correspondance.1102',               // Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.  (lesson 39 in B1)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b2.maison.021',                          // sentence, dictation
  'fr.sons.liaisons.049',                      // sentence, review
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `conj` a form card (front « finir · infinitif
 *  passé »); `gap` a gapfill card whose front gaps the form and names the
 *  cue; `rule` a grammar card. Every row carries fr, en, ipa and respell.
 *  Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';
const GP = ['constructions-infinitives'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const conj = (
  n: number, fr: string, en: string, ipa: string, respell: string, inf: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conjugaison', ...tags], drills, version: 1, register: C, grammarPoints: GP,
  cardType: 'conjugation', prompt: `${inf} · infinitif passé`,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · QUI AGIT, ET QUAND ? (.1200-.1213) ─────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, "J'ai fait réparer le rétroviseur dans un garage.", 'I had the wing mirror repaired at a garage.',
    '/ʒe fɛ ʁe.pa.ʁe lə ʁe.tʁo.vi.zœʁ dɑ̃.zœ̃ ɡa.ʁaʒ/', 'zhay feh ray-pa-RAY | luh ray-troh-vee-ZUHR | dahⁿ-zuhⁿ ga-RAZH', ['scene', 'faire'], FCVDR),
  sent(1201, "Après avoir commandé un canapé en ligne, j'ai attendu six semaines.", 'After ordering a sofa online, I waited six weeks.',
    '/a.pʁɛ.za.vwaʁ kɔ.mɑ̃.de œ̃ ka.na.pe ɑ̃ liɲ ʒe a.tɑ̃.dy si sə.mɛn/', 'a-preh-za-vwar ko-mahⁿ-DAY | uhⁿ ka-na-PAY ahⁿ LEENY | zhay a-tahⁿ-DÜ | see suh-MENN', ['lecture', 'passe']),
  sent(1202, 'Le livreur est reparti sans avoir monté le canapé.', 'The delivery man left again without carrying the sofa upstairs.',
    '/lə li.vʁœʁ ɛ ʁə.paʁ.ti sɑ̃.za.vwaʁ mɔ̃.te lə ka.na.pe/', 'luh lee-VRUHR | eh ruh-par-TEE | sahⁿ-za-vwar mohⁿ-TAY | luh ka-na-PAY', ['lecture', 'sans']),
  sent(1203, 'Je compte demander un remboursement.', 'I intend to ask for a refund.',
    '/ʒə kɔ̃t də.mɑ̃.de œ̃ ʁɑ̃.buʁs.mɑ̃/', 'zhuh KOHⁿT | duh-mahⁿ-DAY | uhⁿ rahⁿ-boors-MAHⁿ', ['lecture', 'preposition'], FCVDR),
  sent(1204, "Il s'agit maintenant de trouver une solution.", 'What matters now is finding a solution.',
    '/il sa.ʒi mɛ̃t.nɑ̃ də tʁu.ve yn sɔ.ly.sjɔ̃/', 'eel sa-ZHEE mehⁿt-NAHⁿ | duh troo-VAY | ün so-lü-SYOHⁿ', ['lecture', 'preposition']),
  sent(1205, "L'entreprise a été condamnée pour avoir trompé ses clients.", 'The company was convicted of misleading its customers.',
    '/lɑ̃.tʁə.pʁiz a e.te kɔ̃.da.ne puʁ a.vwaʁ tʁɔ̃.pe se kli.jɑ̃/', 'lahⁿ-truh-PREEZ | a ay-tay kohⁿ-da-NAY | poor a-vwar trohⁿ-PAY | say klee-YAHⁿ', ['lecture', 'pour']),
  sent(1206, 'Je crois avoir compris le problème.', 'I think I have understood the problem.',
    '/ʒə kʁwa a.vwaʁ kɔ̃.pʁi lə pʁɔ.blɛm/', 'zhuh krwa a-vwar kohⁿ-PREE | luh pro-BLEM', ['lecture', 'sujet']),
  sent(1207, "Que faire quand un colis n'arrive jamais ?", 'What should you do when a parcel never arrives?',
    '/kə fɛʁ kɑ̃.tœ̃ kɔ.li na.ʁiv ʒa.mɛ/', 'kuh FEHR | kahⁿ-tuhⁿ ko-LEE | na-reev zha-MEH', ['lecture', 'question']),
  rule(1208, REFRAME, REFRAME_EN,
    '/œ̃.nɛ̃.fi.ni.tif na ni pɛʁ.sɔn ni dat il le pʁɑ̃ dɑ̃ la fʁaz/',
    'uhⁿ-nehⁿ-fee-nee-TEEF | na nee pehr-SONN | nee DAT | eel lay prahⁿ dahⁿ la FRAZ',
    "Qui fait l'action d'un infinitif, et quand ?",
    "La phrase le dit : le sujet du verbe principal, quelqu'un d'autre après faire, le lecteur d'une consigne. Avoir ou être + participe dit « avant ».",
    ['reframe']),
  sent(1209, "J'ai dû faire venir un technicien.", 'I had to get a technician to come out.',
    '/ʒe dy fɛʁ və.niʁ œ̃ tɛk.ni.sjɛ̃/', 'zhay dü fehr vuh-NEER | uhⁿ tek-nee-SYEHⁿ', ['faire']),
  sent(1210, 'Vérifier le contenu du colis avant de signer.', 'Check the contents of the parcel before signing.',
    '/ve.ʁi.fje lə kɔ̃t.ny dy kɔ.li a.vɑ̃ də si.ɲe/', 'vay-ree-FYAY | luh kohⁿt-NÜ dü ko-LEE | a-vahⁿ duh see-NYAY', ['consigne']),
  sent(1211, 'Après être arrivée à la maison, elle a ouvert le carton.', 'Once she got home, she opened the box.',
    '/a.pʁɛ.zɛ.tʁa.ʁi.ve a la mɛ.zɔ̃ ɛ.la u.vɛʁ lə kaʁ.tɔ̃/', 'a-preh-zeh-tra-ree-VAY | a la meh-ZOHⁿ | eh-la oo-VEHR | luh kar-TOHⁿ', ['passe', 'accord']),
  sent(1212, 'Je tiens à vous remercier de votre patience.', 'I would like to thank you for your patience.',
    '/ʒə tjɛ̃ a vu ʁə.mɛʁ.sje də vɔ.tʁə pa.sjɑ̃s/', 'zhuh TYEHⁿ | a voo ruh-mehr-SYAY | duh vo-truh pa-SYAHⁿS', ['preposition', 'reclamation'], FCVDR, { register: S }),
  sent(1213, 'Laisse-moi faire, je connais la procédure.', 'Let me handle it, I know the procedure.',
    '/lɛs.mwa fɛʁ ʒə kɔ.nɛ la pʁɔ.se.dyʁ/', 'less-mwa FEHR | zhuh ko-NEH | la pro-say-DÜR', ['laisser']),
];

/* ── ACT 2 · L'INFINITIF PASSÉ (.1216-.1235) ────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  conj(1216, 'avoir fini', 'to have finished', '/a.vwaʁ fi.ni/', 'a-vwar fee-NEE', 'finir', ['avoir'], FCVDR),
  conj(1217, 'être parti', 'to have left', '/ɛtʁ paʁ.ti/', 'ehtr par-TEE', 'partir', ['etre']),
  conj(1218, "s'être levé", 'to have got up', '/sɛtʁ lə.ve/', 'sehtr luh-VAY', 'se lever', ['pronominal']),
  conj(1219, 'avoir pris', 'to have taken', '/a.vwaʁ pʁi/', 'a-vwar PREE', 'prendre', ['avoir']),
  conj(1220, 'être venu', 'to have come', '/ɛtʁ və.ny/', 'ehtr vuh-NÜ', 'venir', ['etre']),
  conj(1221, "s'être trompé", 'to have made a mistake', '/sɛtʁ tʁɔ̃.pe/', 'sehtr trohⁿ-PAY', 'se tromper', ['pronominal']),
  sent(1222, 'Après avoir mangé, nous sommes allés marcher.', 'After eating, we went for a walk.',
    '/a.pʁɛ.za.vwaʁ mɑ̃.ʒe nu sɔm.za.le maʁ.ʃe/', 'a-preh-za-vwar mahⁿ-ZHAY | noo som-za-LAY mar-SHAY', ['forme', 'avoir'], FCVDR),
  sent(1223, 'Après être partie, elle a regretté sa décision.', 'After leaving, she regretted her decision.',
    '/a.pʁɛ.zɛtʁ paʁ.ti ɛ.la ʁə.ɡʁɛ.te sa de.si.zjɔ̃/', 'a-preh-zehtr par-TEE | eh-la ruh-greh-TAY | sa day-see-ZYOHⁿ', ['forme', 'etre', 'accord']),
  sent(1224, "Après s'être levés, les enfants ont pris leur petit-déjeuner.", 'Once they were up, the children had breakfast.',
    '/a.pʁɛ sɛtʁ lə.ve le.zɑ̃.fɑ̃ ɔ̃ pʁi lœʁ pə.ti.de.ʒœ.ne/', 'a-preh sehtr luh-VAY | lay-zahⁿ-FAHⁿ | ohⁿ pree luhr puh-tee-day-zheu-NAY', ['forme', 'pronominal', 'accord']),
  sent(1225, "Elles sont contentes d'être arrivées à l'heure.", 'They are glad to have arrived on time.',
    '/ɛl sɔ̃ kɔ̃.tɑ̃t dɛ.tʁa.ʁi.ve a lœʁ/', 'el sohⁿ kohⁿ-TAHⁿT | deh-tra-ree-VAY | a LUHR', ['forme', 'etre', 'accord'], FCVDR),
  sent(1226, 'Il faut avoir fini le dossier avant vendredi.', 'The file has to be finished before Friday.',
    '/il fo a.vwaʁ fi.ni lə do.sje a.vɑ̃ vɑ̃.dʁə.di/', 'eel FOH | a-vwar fee-NEE luh do-SYAY | a-vahⁿ vahⁿ-druh-DEE', ['forme', 'futur']),
  sent(1227, "Il regrette de n'avoir pas prévenu ses collègues.", 'He is sorry he did not warn his colleagues.',
    '/il ʁə.ɡʁɛt də na.vwaʁ pa pʁev.ny se kɔ.lɛɡ/', 'eel ruh-GRET | duh na-vwar pa prayv-NÜ | say ko-LEG', ['forme', 'negation'], FCVR, { register: S }),
  sent(1228, 'Les documents ? Je les ai signés après les avoir lus.', 'The documents? I signed them after reading them.',
    '/le dɔ.ky.mɑ̃ ʒə le.ze si.ɲe a.pʁɛ le.za.vwaʁ ly/', 'lay do-kü-MAHⁿ | zhuh lay-zay see-NYAY | a-preh lay-za-vwar LÜ', ['forme', 'pronom', 'accord']),
  sent(1229, 'Après nous être perdus, nous avons demandé notre chemin.', 'After getting lost, we asked the way.',
    '/a.pʁɛ nu.zɛtʁ pɛʁ.dy nu.za.vɔ̃ də.mɑ̃.de nɔ.tʁə ʃə.mɛ̃/', 'a-preh noo-zehtr pehr-DÜ | noo-za-vohⁿ duh-mahⁿ-DAY | no-truh shuh-MEHⁿ', ['forme', 'pronominal', 'accord']),
  gap(1230, 'Après être rentrée, elle a appelé sa mère.', 'After getting home, she called her mother.',
    '/a.pʁɛ.zɛtʁ ʁɑ̃.tʁe ɛ.la a.pə.le sa mɛʁ/', 'a-preh-zehtr rahⁿ-TRAY | eh-la a-puh-LAY sa MEHR',
    'Après être ___, elle a appelé sa mère. (rentrer · elle)',
    "Être, donc l'accord avec celle qui agit : rentrée. EN: être, so agree with the doer.",
    ['accord', 'etre'], FCVDR),
  gap(1231, "Après s'être reposés, ils sont repartis.", 'Once they had rested, they set off again.',
    '/a.pʁɛ sɛtʁ ʁə.po.ze il sɔ̃ ʁə.paʁ.ti/', 'a-preh sehtr ruh-po-ZAY | eel sohⁿ ruh-par-TEE',
    "Après s'être ___, ils sont repartis. (se reposer · ils)",
    "Un pronominal prend être ; l'accord suit ils : reposés. EN: agree with ils.",
    ['accord', 'pronominal']),
  rule(1232, 'Avoir ou être, comme au passé composé, puis le participe.', 'Avoir or être, as in the passé composé, then the participle.',
    '/a.vwaʁ u ɛtʁ kɔ.mo pa.se kɔ̃.po.ze pɥi lə paʁ.ti.sip/', 'a-VWAR oo EHTR | ko-moh pa-say kohⁿ-po-ZAY | pwee luh par-tee-SEEP',
    "Comment forme-t-on l'infinitif passé ?",
    "Avec l'auxiliaire du passé composé à l'infinitif, puis le participe : avoir mangé, être parti, s'être levé.",
    ['forme']),
  rule(1233, "Avec être, le participe s'accorde avec celui qui agit.", 'With être, the participle agrees with whoever acts.',
    '/a.vɛk ɛtʁ lə paʁ.ti.sip sa.kɔʁd a.vɛk sə.lɥi ki a.ʒi/', 'a-vek EHTR | luh par-tee-SEEP | sa-KORD a-vek suh-LWEE | kee a-ZHEE',
    '« Après être parti », avec elle : quel accord ?',
    "Partie. L'infinitif n'a pas de sujet, mais la phrase dit que c'est elle qui est partie.",
    ['accord']),
  sent(1234, "Merci de m'avoir attendu.", 'Thank you for waiting for me.',
    '/mɛʁ.si də ma.vwaʁ a.tɑ̃.dy/', 'mehr-SEE | duh ma-vwar a-tahⁿ-DÜ', ['forme', 'pronom'], FCVDR),
  sent(1235, 'Tu seras payé après avoir rendu le travail.', 'You will be paid after handing in the work.',
    '/ty sə.ʁa pe.je a.pʁɛ.za.vwaʁ ʁɑ̃.dy lə tʁa.vaj/', 'tü suh-ra peh-YAY | a-preh-za-vwar rahⁿ-DÜ | luh tra-VYE', ['forme', 'futur']),
];

/* ── ACT 3 · APRÈS ET AVANT DE (.1238-.1252) ────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1238, 'Avant de partir, vérifie que les fenêtres sont fermées.', 'Before you leave, check that the windows are shut.',
    '/a.vɑ̃ də paʁ.tiʁ ve.ʁi.fi kə le fə.nɛtʁ sɔ̃ fɛʁ.me/', 'a-vahⁿ duh par-TEER | vay-ree-FEE | kuh lay fuh-NETR sohⁿ fehr-MAY', ['avant'], FCVDR),
  sent(1239, "Après être parti, il s'est rendu compte qu'il avait oublié ses clés.", 'After leaving, he realised he had forgotten his keys.',
    '/a.pʁɛ.zɛtʁ paʁ.ti il sɛ ʁɑ̃.dy kɔ̃t ki.la.vɛ.tu.bli.je se kle/', 'a-preh-zehtr par-TEE | eel seh rahⁿ-dü KOHⁿT | kee-la-veh-too-blee-YAY say KLAY', ['apres']),
  sent(1240, 'Après avoir dîné, ils ont regardé un film.', 'After dinner, they watched a film.',
    '/a.pʁɛ.za.vwaʁ di.ne il.zɔ̃ ʁə.ɡaʁ.de œ̃ film/', 'a-preh-za-vwar dee-NAY | eel-zohⁿ ruh-gar-DAY | uhⁿ FEELM', ['apres']),
  sent(1241, "Ne pars pas avant d'avoir fini tes devoirs.", 'Do not leave before you have finished your homework.',
    '/nə paʁ pa a.vɑ̃ da.vwaʁ fi.ni te də.vwaʁ/', 'nuh par PA | a-vahⁿ da-vwar fee-NEE | tay duh-VWAR', ['avant', 'passe'], FCVDR),
  sent(1242, 'Après avoir signé le bail, nous avons reçu les clés.', 'After signing the lease, we got the keys.',
    '/a.pʁɛ.za.vwaʁ si.ɲe lə baj nu.za.vɔ̃ ʁə.sy le kle/', 'a-preh-za-vwar see-nyay luh BYE | noo-za-vohⁿ ruh-SÜ lay KLAY', ['apres']),
  sent(1243, "Après s'être excusée, la directrice a proposé un geste commercial.", 'After apologising, the manager offered a goodwill gesture.',
    '/a.pʁɛ sɛ.tɛk.sky.ze la di.ʁɛk.tʁis a pʁɔ.po.ze œ̃ ʒɛst kɔ.mɛʁ.sjal/', 'a-preh seh-tek-skü-ZAY | la dee-rek-TREESS | a pro-po-ZAY | uhⁿ zhest ko-mehr-SYAL', ['apres', 'pronominal'], FCVDR),
  sent(1244, 'Lis bien les conditions avant de signer.', 'Read the terms carefully before signing.',
    '/li bjɛ̃ le kɔ̃.di.sjɔ̃ a.vɑ̃ də si.ɲe/', 'lee byehⁿ lay kohⁿ-dee-SYOHⁿ | a-vahⁿ duh see-NYAY', ['avant']),
  sent(1245, 'Après avoir attendu une heure, nous sommes repartis.', 'After waiting an hour, we left again.',
    '/a.pʁɛ.za.vwaʁ a.tɑ̃.dy y.nœʁ nu sɔm ʁə.paʁ.ti/', 'a-preh-za-vwar a-tahⁿ-DÜ ü-NUHR | noo som ruh-par-TEE', ['apres']),
  sent(1246, "Je t'appellerai après avoir parlé au propriétaire.", 'I will call you after I have spoken to the landlord.',
    '/ʒə ta.pɛl.ʁe a.pʁɛ.za.vwaʁ paʁ.le o pʁɔ.pʁi.je.tɛʁ/', 'zhuh ta-pel-RAY | a-preh-za-vwar par-LAY | oh pro-pree-yay-TEHR', ['apres', 'futur']),
  sent(1247, "Elle s'est couchée après avoir éteint toutes les lumières.", 'She went to bed after switching off all the lights.',
    '/ɛl sɛ ku.ʃe a.pʁɛ.za.vwaʁ e.tɛ̃ tut le ly.mjɛʁ/', 'el seh koo-SHAY | a-preh-za-vwar ay-TEHⁿ | toot lay lü-MYEHR', ['apres']),
  gap(1248, "Après avoir ouvert le colis, j'ai constaté les dégâts.", 'After opening the parcel, I noticed the damage.',
    '/a.pʁɛ.za.vwaʁ u.vɛʁ lə kɔ.li ʒe kɔ̃s.ta.te le de.ɡa/', 'a-preh-za-vwar oo-VEHR luh ko-LEE | zhay kohⁿs-ta-TAY lay day-GA',
    "Après ___ le colis, j'ai constaté les dégâts. (ouvrir · d'abord le colis)",
    "Après veut l'infinitif passé : avoir ouvert. EN: après takes the past infinitive.",
    ['apres'], FCVDR),
  gap(1249, 'Avant de valider la commande, compare les prix.', 'Before confirming the order, compare prices.',
    '/a.vɑ̃ də va.li.de la kɔ.mɑ̃d kɔ̃.paʁ le pʁi/', 'a-vahⁿ duh va-lee-DAY la ko-MAHⁿD | kohⁿ-PAR lay PREE',
    'Avant de ___ la commande, compare les prix. (valider · pas encore fait)',
    "Avant de, puis l'infinitif présent : l'action n'a pas encore eu lieu. EN: avant de takes the present infinitive.",
    ['avant']),
  rule(1250, "Après, l'infinitif passé ; avant de, l'infinitif présent.", 'After après, the past infinitive; after avant de, the present infinitive.',
    '/a.pʁɛ lɛ̃.fi.ni.tif pa.se a.vɑ̃ də lɛ̃.fi.ni.tif pʁe.zɑ̃/', 'a-PREH | lehⁿ-fee-nee-teef pa-SAY | a-vahⁿ DUH | lehⁿ-fee-nee-teef pray-ZAHⁿ',
    '« Après manger » ou « après avoir mangé » ?',
    "À l'écrit, après avoir mangé : l'action est finie avant la suite. Après manger ne vit que dans quelques tournures familières.",
    ['apres', 'avant']),
  sent(1251, "Il est interdit de sortir avant d'avoir rendu sa copie.", 'You may not leave before handing in your paper.',
    '/i.lɛ.tɛ̃.tɛʁ.di də sɔʁ.tiʁ a.vɑ̃ da.vwaʁ ʁɑ̃.dy sa kɔ.pi/', 'ee-leh-tehⁿ-tehr-DEE | duh sor-TEER | a-vahⁿ da-vwar rahⁿ-DÜ sa ko-PEE', ['avant', 'passe']),
  sent(1252, 'Après être passés à la poste, nous sommes rentrés.', 'After stopping at the post office, we went home.',
    '/a.pʁɛ.zɛtʁ pa.se a la pɔst nu sɔm ʁɑ̃.tʁe/', 'a-preh-zehtr pa-SAY a la POST | noo som rahⁿ-TRAY', ['apres', 'accord']),
];

/* ── ACT 4 · POUR : LE BUT OU LA FAUTE (.1255-.1268) ────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1255, 'Il a été sanctionné pour avoir menti.', 'He was disciplined for lying.',
    '/i.la e.te sɑ̃k.sjɔ.ne puʁ a.vwaʁ mɑ̃.ti/', 'ee-la ay-TAY sahⁿk-syo-NAY | poor a-vwar mahⁿ-TEE', ['pour', 'raison'], FCVDR),
  sent(1256, 'Il a menti pour obtenir le poste.', 'He lied to get the job.',
    '/i.la mɑ̃.ti puʁ ɔp.tə.niʁ lə pɔst/', 'ee-la mahⁿ-TEE | poor op-tuh-NEER luh POST', ['pour', 'but']),
  sent(1257, 'Elle a été félicitée pour avoir retrouvé le portefeuille.', 'She was congratulated on finding the wallet.',
    '/ɛ.la e.te fe.li.si.te puʁ a.vwaʁ ʁə.tʁu.ve lə pɔʁ.tə.fœj/', 'eh-la ay-TAY fay-lee-see-TAY | poor a-vwar ruh-troo-VAY | luh por-tuh-FUHY', ['pour', 'raison']),
  sent(1258, 'Le conducteur a été arrêté pour avoir brûlé un feu rouge.', 'The driver was stopped for running a red light.',
    '/lə kɔ̃.dyk.tœʁ a e.te a.ʁɛ.te puʁ a.vwaʁ bʁy.le œ̃ fø ʁuʒ/', 'luh kohⁿ-dük-TUHR | a ay-tay a-reh-TAY | poor a-vwar brü-LAY | uhⁿ feu ROOZH', ['pour', 'raison'], FCVDR),
  sent(1259, 'Je vous écris pour signaler un problème de livraison.', 'I am writing to report a delivery problem.',
    '/ʒə vu.ze.kʁi puʁ si.ɲa.le œ̃ pʁɔ.blɛm də li.vʁɛ.zɔ̃/', 'zhuh voo-zay-KREE | poor see-nya-LAY | uhⁿ pro-BLEM duh lee-vreh-ZOHⁿ', ['pour', 'but', 'reclamation'], FCVDR),
  sent(1260, 'La société a été condamnée pour avoir pollué la rivière.', 'The company was convicted of polluting the river.',
    '/la sɔ.sje.te a e.te kɔ̃.da.ne puʁ a.vwaʁ pɔ.lɥe la ʁi.vjɛʁ/', 'la so-syay-TAY | a ay-tay kohⁿ-da-NAY | poor a-vwar po-LWAY | la ree-VYEHR', ['pour', 'raison']),
  sent(1261, 'Merci de nous avoir aidés à déménager.', 'Thank you for helping us move.',
    '/mɛʁ.si də nu.za.vwaʁ e.de a de.me.na.ʒe/', 'mehr-SEE | duh noo-za-vwar ay-DAY | a day-may-na-ZHAY', ['de', 'raison']),
  sent(1262, "Il s'est excusé d'être arrivé en retard.", 'He apologised for arriving late.',
    '/il sɛ.tɛk.sky.ze dɛ.tʁa.ʁi.ve ɑ̃ ʁə.taʁ/', 'eel seh-tek-skü-ZAY | deh-tra-ree-VAY | ahⁿ ruh-TAR', ['de', 'raison']),
  sent(1263, "J'ai appelé le service client pour obtenir un avoir.", 'I called customer service to get a credit note.',
    '/ʒe a.pə.le lə sɛʁ.vis kli.jɑ̃ puʁ ɔp.tə.niʁ œ̃.na.vwaʁ/', 'zhay a-puh-LAY | luh sehr-veess klee-YAHⁿ | poor op-tuh-NEER uhⁿ-na-VWAR', ['pour', 'but', 'reclamation']),
  sent(1264, 'Elle a reçu une médaille pour avoir sauvé un enfant.', 'She was given a medal for saving a child.',
    '/ɛ.la ʁə.sy yn me.daj puʁ a.vwaʁ so.ve œ̃.nɑ̃.fɑ̃/', 'eh-la ruh-SÜ ün may-DYE | poor a-vwar so-VAY | uhⁿ-nahⁿ-FAHⁿ', ['pour', 'raison']),
  gap(1265, 'Il a perdu son permis pour avoir roulé trop vite.', 'He lost his licence for speeding.',
    '/i.la pɛʁ.dy sɔ̃ pɛʁ.mi puʁ a.vwaʁ ʁu.le tʁo vit/', 'ee-la pehr-DÜ sohⁿ pehr-MEE | poor a-vwar roo-LAY troh VEET',
    'Il a perdu son permis pour ___ trop vite. (rouler · la faute)',
    "Une faute déjà commise : pour avoir roulé. EN: a fault already committed.",
    ['pour', 'raison'], FCVDR),
  gap(1266, "J'ai pris un taxi pour arriver à l'heure.", 'I took a taxi to get there on time.',
    '/ʒe pʁi œ̃ tak.si puʁ a.ʁi.ve a lœʁ/', 'zhay pree uhⁿ tak-SEE | poor a-ree-VAY a LUHR',
    "J'ai pris un taxi pour ___ à l'heure. (arriver · le but)",
    "Un but, pas encore atteint : pour arriver. EN: a purpose.",
    ['pour', 'but']),
  rule(1267, 'Pour + infinitif présent : le but. Pour + infinitif passé : la raison.', 'Pour + present infinitive: the purpose. Pour + past infinitive: the reason.',
    '/puʁ lɛ̃.fi.ni.tif pʁe.zɑ̃ lə by puʁ lɛ̃.fi.ni.tif pa.se la ʁɛ.zɔ̃/', 'poor lehⁿ-fee-nee-teef pray-ZAHⁿ | luh BÜ | poor lehⁿ-fee-nee-teef pa-SAY | la reh-ZOHⁿ',
    "« Il a été puni pour mentir » : qu'est-ce qui ne va pas ?",
    "La phrase dirait qu'on l'a puni pour qu'il mente. Pour une faute déjà commise : pour avoir menti.",
    ['pour']),
  sent(1268, 'Le livreur a été sanctionné pour avoir laissé le colis devant la porte.', 'The delivery man was disciplined for leaving the parcel outside the door.',
    '/lə li.vʁœʁ a e.te sɑ̃k.sjɔ.ne puʁ a.vwaʁ lɛ.se lə kɔ.li də.vɑ̃ la pɔʁt/', 'luh lee-VRUHR | a ay-tay sahⁿk-syo-NAY | poor a-vwar leh-SAY luh ko-LEE | duh-vahⁿ la PORT', ['pour', 'raison']),
];

/* ── ACT 5 · SANS (.1271-.1283) ─────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1271, 'Il est parti sans avoir payé.', 'He left without paying.',
    '/i.lɛ paʁ.ti sɑ̃.za.vwaʁ pɛ.je/', 'ee-leh par-TEE | sahⁿ-za-vwar peh-YAY', ['sans', 'passe'], FCVDR),
  sent(1272, 'Elle est entrée sans frapper.', 'She came in without knocking.',
    '/ɛ.lɛ.tɑ̃.tʁe sɑ̃ fʁa.pe/', 'eh-leh-tahⁿ-TRAY | sahⁿ fra-PAY', ['sans']),
  sent(1273, "Ils ont annulé ma commande sans m'avoir prévenue.", 'They cancelled my order without letting me know.',
    '/il.zɔ̃.ta.ny.le ma kɔ.mɑ̃d sɑ̃ ma.vwaʁ pʁev.ny/', 'eel-zohⁿ-ta-nü-LAY ma ko-MAHⁿD | sahⁿ ma-vwar prayv-NÜ', ['sans', 'passe', 'reclamation'], FCVDR),
  sent(1274, 'Ils ont annulé ma commande sans que je sois prévenue.', 'They cancelled my order without my being told.',
    '/il.zɔ̃.ta.ny.le ma kɔ.mɑ̃d sɑ̃ kə ʒə swa pʁev.ny/', 'eel-zohⁿ-ta-nü-LAY ma ko-MAHⁿD | sahⁿ kuh zhuh swa prayv-NÜ', ['sans', 'que']),
  sent(1275, "Nous sommes partis sans que les enfants s'en aperçoivent.", 'We left without the children noticing.',
    '/nu sɔm paʁ.ti sɑ̃ kə le.zɑ̃.fɑ̃ sɑ̃.na.pɛʁ.swav/', 'noo som par-TEE | sahⁿ kuh lay-zahⁿ-FAHⁿ | sahⁿ-na-pehr-SWAV', ['sans', 'que']),
  sent(1276, 'Tu ne peux pas juger sans avoir lu le rapport.', 'You cannot judge without having read the report.',
    '/ty nə pø pa ʒy.ʒe sɑ̃.za.vwaʁ ly lə ʁa.pɔʁ/', 'tü nuh puh pa zhü-ZHAY | sahⁿ-za-vwar LÜ | luh ra-POR', ['sans', 'passe']),
  sent(1277, "J'ai été débité deux fois sans avoir rien reçu.", 'I was charged twice without receiving anything.',
    '/ʒe e.te de.bi.te dø fwa sɑ̃.za.vwaʁ ʁjɛ̃ ʁə.sy/', 'zhay ay-tay day-bee-TAY | deu FWA | sahⁿ-za-vwar ryehⁿ ruh-SÜ', ['sans', 'passe', 'reclamation'], FCVDR),
  sent(1278, 'Il a traversé la ville sans rencontrer personne.', 'He crossed the town without meeting anyone.',
    '/i.la tʁa.vɛʁ.se la vil sɑ̃ ʁɑ̃.kɔ̃.tʁe pɛʁ.sɔn/', 'ee-la tra-vehr-SAY la VEEL | sahⁿ rahⁿ-kohⁿ-TRAY pehr-SONN', ['sans', 'negation']),
  sent(1279, 'Sans avoir vu le film, il le critique déjà.', 'Without even having seen the film, he is already criticising it.',
    '/sɑ̃.za.vwaʁ vy lə film il lə kʁi.tik de.ʒa/', 'sahⁿ-za-vwar VÜ luh FEELM | eel luh kree-TEEK day-ZHA', ['sans', 'passe']),
  gap(1280, 'Elle a quitté la réunion sans dire un mot.', 'She left the meeting without saying a word.',
    '/ɛ.la ki.te la ʁe.y.njɔ̃ sɑ̃ diʁ œ̃ mo/', 'eh-la kee-TAY la ray-ü-NYOHⁿ | sahⁿ deer uhⁿ MOH',
    'Elle a quitté la réunion sans ___ un mot. (dire · elle seule)',
    "Un seul sujet : sans + infinitif. EN: one subject, sans + infinitive.",
    ['sans'], FCVDR),
  gap(1281, "On m'a facturé la réparation sans avoir demandé mon accord.", 'They billed me for the repair without asking my permission.',
    '/ɔ̃ ma fak.ty.ʁe la ʁe.pa.ʁa.sjɔ̃ sɑ̃.za.vwaʁ də.mɑ̃.de mɔ̃.na.kɔʁ/', 'ohⁿ ma fak-tü-RAY | la ray-pa-ra-SYOHⁿ | sahⁿ-za-vwar duh-mahⁿ-DAY | mohⁿ-na-KOR',
    "On m'a facturé la réparation sans ___ mon accord. (demander · une étape qui manquait avant)",
    "La demande aurait dû venir avant : sans avoir demandé. Sans demander se dit aussi. EN: the missing step came first.",
    ['sans', 'passe', 'reclamation']),
  rule(1282, 'Sans + infinitif : un seul sujet. Sans que + subjonctif : deux sujets.', 'Sans + infinitive: one subject. Sans que + subjunctive: two subjects.',
    '/sɑ̃ lɛ̃.fi.ni.tif œ̃ sœl sy.ʒɛ sɑ̃ kə syb.ʒɔ̃k.tif dø sy.ʒɛ/', 'sahⁿ lehⁿ-fee-nee-TEEF | uhⁿ suhl sü-ZHEH | sahⁿ kuh süb-zhohⁿk-TEEF | deu sü-ZHEH',
    '« Il est parti sans que je le voie » : pourquoi que ?',
    "Il part, je ne vois pas : deux sujets. Avec un seul, sans + infinitif, présent ou passé.",
    ['sans', 'que']),
  sent(1283, 'Ne signe rien sans avoir tout relu.', 'Do not sign anything without reading it all through again.',
    '/nə siɲ ʁjɛ̃ sɑ̃.za.vwaʁ tu ʁə.ly/', 'nuh seeny RYEHⁿ | sahⁿ-za-vwar too ruh-LÜ', ['sans', 'passe'], FCVDR),
];

/* ── ACT 6 · UN SEUL SUJET, PLUS LOIN (.1286-.1301) ─────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1286, "Je crois que j'ai compris.", 'I think I have understood.',
    '/ʒə kʁwa kə ʒe kɔ̃.pʁi/', 'zhuh krwa kuh zhay kohⁿ-PREE', ['sujet', 'que']),
  sent(1287, "Elle affirme l'avoir vu devant la banque.", 'She claims she saw him outside the bank.',
    '/ɛ.la.fiʁm la.vwaʁ vy də.vɑ̃ la bɑ̃k/', 'eh-la-FEERM | la-vwar VÜ | duh-vahⁿ la BAHⁿK', ['sujet', 'pronom'], FCVDR),
  sent(1288, "Elle affirme qu'elle l'a vu devant la banque.", 'She claims that she saw him outside the bank.',
    '/ɛ.la.fiʁm kɛl la vy də.vɑ̃ la bɑ̃k/', 'eh-la-FEERM | kel la VÜ | duh-vahⁿ la BAHⁿK', ['sujet', 'que']),
  sent(1289, 'Il pense partir en septembre.', 'He is thinking of leaving in September.',
    '/il pɑ̃s paʁ.tiʁ ɑ̃ sɛp.tɑ̃bʁ/', 'eel pahⁿs par-TEER | ahⁿ sep-TAHⁿBR', ['sujet'], FCVDR),
  sent(1290, 'Il pense que tu pars en septembre.', 'He thinks you are leaving in September.',
    '/il pɑ̃s kə ty paʁ ɑ̃ sɛp.tɑ̃bʁ/', 'eel pahⁿs kuh tü PAR | ahⁿ sep-TAHⁿBR', ['sujet', 'deux-sujets']),
  sent(1291, 'Il dit être malade depuis lundi.', 'He says he has been ill since Monday.',
    '/il di ɛtʁ ma.lad də.pɥi lœ̃.di/', 'eel dee ehtr ma-LAD | duh-pwee luhⁿ-DEE', ['sujet', 'ecrit'], FCVR, { register: S }),
  sent(1292, "Je me souviens d'avoir fermé la porte à clé.", 'I remember locking the door.',
    '/ʒə mə su.vjɛ̃ da.vwaʁ fɛʁ.me la pɔʁt a kle/', 'zhuh muh soo-VYEHⁿ | da-vwar fehr-MAY | la PORT a KLAY', ['sujet', 'passe'], FCVDR),
  sent(1293, 'Le suspect nie avoir volé la voiture.', 'The suspect denies stealing the car.',
    '/lə sys.pɛ ni a.vwaʁ vɔ.le la vwa.tyʁ/', 'luh süs-PEH | nee a-vwar vo-LAY | la vwa-TÜR', ['sujet', 'passe']),
  sent(1294, 'Nous espérons avoir bientôt de vos nouvelles.', 'We hope to hear from you soon.',
    '/nu.zɛs.pe.ʁɔ̃ a.vwaʁ bjɛ̃.to də vo nu.vɛl/', 'noo-zes-pay-ROHⁿ | a-vwar byehⁿ-TOH | duh voh noo-VELL', ['sujet', 'lettre']),
  sent(1295, "Je reconnais m'être trompé.", 'I admit I was wrong.',
    '/ʒə ʁə.kɔ.nɛ mɛtʁ tʁɔ̃.pe/', 'zhuh ruh-ko-NEH | mehtr trohⁿ-PAY', ['sujet', 'pronominal']),
  sent(1296, 'Elle déclare avoir reçu un colis abîmé.', 'She states that she received a damaged parcel.',
    '/ɛl de.klaʁ a.vwaʁ ʁə.sy œ̃ kɔ.li a.bi.me/', 'el day-KLAR | a-vwar ruh-SÜ | uhⁿ ko-LEE a-bee-MAY', ['sujet', 'reclamation'], FCVDR, { register: S }),
  sent(1297, "Vous dites avoir envoyé le remboursement, mais je n'ai rien reçu.", 'You say you sent the refund, but I have received nothing.',
    '/vu dit a.vwaʁ ɑ̃.vwa.je lə ʁɑ̃.buʁs.mɑ̃ mɛ ʒə ne ʁjɛ̃ ʁə.sy/', 'voo DEET | a-vwar ahⁿ-vwa-YAY | luh rahⁿ-boors-MAHⁿ | meh zhuh nay ryehⁿ ruh-SÜ', ['sujet', 'reclamation']),
  gap(1298, 'Je pense arriver vers midi.', 'I expect to arrive around noon.',
    '/ʒə pɑ̃s a.ʁi.ve vɛʁ mi.di/', 'zhuh pahⁿs a-ree-VAY | vehr mee-DEE',
    "Je pense ___ vers midi. (arriver · c'est moi qui arrive)",
    "Un seul sujet : penser + infinitif. Je pense que j'arriverai vers midi est juste aussi. EN: both are correct.",
    ['sujet']),
  rule(1299, "Croire, penser, dire : l'infinitif ou que. Vouloir : l'infinitif seul.", 'Croire, penser, dire: the infinitive or que. Vouloir: the infinitive only.',
    '/kʁwaʁ pɑ̃.se diʁ lɛ̃.fi.ni.tif u kə vu.lwaʁ lɛ̃.fi.ni.tif sœl/', 'KRWAR | pahⁿ-SAY | DEER | lehⁿ-fee-nee-TEEF oo KUH | voo-LWAR | lehⁿ-fee-nee-teef SUHL',
    "Un seul sujet : « je crois que j'ai compris » est-il juste ?",
    "Oui : avec croire, penser, dire, affirmer, les deux se disent. Avec vouloir, jamais : je veux partir, pas je veux que je parte.",
    ['sujet', 'que']),
  sent(1300, 'Il prétend ne rien savoir.', 'He claims to know nothing.',
    '/il pʁe.tɑ̃ nə ʁjɛ̃ sa.vwaʁ/', 'eel pray-TAHⁿ | nuh ryehⁿ sa-VWAR', ['sujet', 'negation']),
  sent(1301, 'Elle reconnaît ne pas avoir lu le contrat.', 'She admits she did not read the contract.',
    '/ɛl ʁə.kɔ.nɛ nə pa.za.vwaʁ ly lə kɔ̃.tʁa/', 'el ruh-ko-NEH | nuh pa-za-vwar LÜ | luh kohⁿ-TRA', ['sujet', 'negation', 'passe']),
];

/* ── ACT 7 · À, DE OU RIEN (.1304-.1323) ────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1304, "Dès qu'il est rentré, il s'est mis à travailler.", 'As soon as he got home, he started working.',
    '/dɛ ki.lɛ ʁɑ̃.tʁe il sɛ mi.za tʁa.va.je/', 'deh kee-leh rahⁿ-TRAY | eel seh mee-za tra-va-YAY', ['a', 'debut']),
  sent(1305, "J'ai fini de ranger le bureau.", 'I have finished tidying the office.',
    '/ʒe fi.ni də ʁɑ̃.ʒe lə by.ʁo/', 'zhay fee-NEE | duh rahⁿ-ZHAY luh bü-ROH', ['de', 'paire'], FCVDR),
  sent(1306, 'Le vendeur a fini par accepter de reprendre le lave-linge.', 'The seller ended up agreeing to take back the washing machine.',
    '/lə vɑ̃.dœʁ a fi.ni paʁ ak.sɛp.te də ʁə.pʁɑ̃dʁ lə lav.lɛ̃ʒ/', 'luh vahⁿ-DUHR | a fee-nee par ak-sep-TAY | duh ruh-PRAHⁿDR | luh lav-LEHⁿZH', ['par', 'paire', 'reclamation'], FCVDR),
  sent(1307, "Je ne m'attendais pas à recevoir une facture aussi élevée.", 'I did not expect to get such a high bill.',
    '/ʒə nə ma.tɑ̃.dɛ pa a ʁə.sə.vwaʁ yn fak.tyʁ o.si el.ve/', 'zhuh nuh ma-tahⁿ-DEH PA | a ruh-suh-VWAR | ün fak-TÜR | oh-see ayl-VAY', ['a', 'reclamation']),
  sent(1308, "Je tiens à préciser que j'ai tout payé à la commande.", 'I would like to point out that I paid in full when ordering.',
    '/ʒə tjɛ̃ a pʁe.si.ze kə ʒe tu pɛ.je a la kɔ.mɑ̃d/', 'zhuh TYEHⁿ | a pray-see-ZAY | kuh zhay too peh-YAY | a la ko-MAHⁿD', ['a', 'reclamation'], FCVDR, { register: S }),
  sent(1309, "Il n'ose pas demander de l'aide.", 'He does not dare ask for help.',
    '/il noz pa də.mɑ̃.de də lɛd/', 'eel NOHZ PA | duh-mahⁿ-DAY duh LED', ['rien']),
  sent(1310, 'Nous comptons partir samedi matin.', 'We intend to leave on Saturday morning.',
    '/nu kɔ̃.tɔ̃ paʁ.tiʁ sam.di ma.tɛ̃/', 'noo kohⁿ-TOHⁿ | par-TEER | sam-DEE ma-TEHⁿ', ['rien'], FCVDR),
  sent(1311, "Il s'agit de remplir ce formulaire avant lundi.", 'The thing to do is fill in this form before Monday.',
    '/il sa.ʒi də ʁɑ̃.pliʁ sə fɔʁ.my.lɛʁ a.vɑ̃ lœ̃.di/', 'eel sa-ZHEE | duh rahⁿ-PLEER | suh for-mü-LEHR | a-vahⁿ luhⁿ-DEE', ['de', 'impersonnel']),
  sent(1312, "L'équipe s'efforce de répondre sous quarante-huit heures.", 'The team does its best to reply within forty-eight hours.',
    '/le.kip sɛ.fɔʁs də ʁe.pɔ̃dʁ su ka.ʁɑ̃t.ɥi.tœʁ/', 'lay-KEEP | seh-FORS | duh ray-POHⁿDR | soo ka-rahⁿt-wee-TUHR', ['de'], FCVR, { register: S }),
  sent(1313, 'Pense à acheter du pain en rentrant.', 'Remember to buy bread on your way home.',
    '/pɑ̃.sa aʃ.te dy pɛ̃ ɑ̃ ʁɑ̃.tʁɑ̃/', 'pahⁿ-sa ash-TAY dü PEHⁿ | ahⁿ rahⁿ-TRAHⁿ', ['a', 'paire']),
  sent(1314, 'Je pense acheter une voiture électrique.', 'I am thinking of buying an electric car.',
    '/ʒə pɑ̃s aʃ.te yn vwa.tyʁ e.lɛk.tʁik/', 'zhuh pahⁿs ash-TAY | ün vwa-TÜR ay-lek-TREEK', ['rien', 'paire']),
  sent(1315, 'Je viens chercher mon colis.', 'I have come to collect my parcel.',
    '/ʒə vjɛ̃ ʃɛʁ.ʃe mɔ̃ kɔ.li/', 'zhuh vyehⁿ shehr-SHAY | mohⁿ ko-LEE', ['rien', 'paire']),
  sent(1316, 'Je viens de recevoir votre courriel.', 'I have just received your email.',
    '/ʒə vjɛ̃ də ʁə.sə.vwaʁ vɔ.tʁə ku.ʁjɛl/', 'zhuh vyehⁿ duh ruh-suh-VWAR | vo-truh koo-RYEL', ['de', 'paire'], FCVDR),
  sent(1317, 'Elle a commencé à apprendre le piano à quarante ans.', 'She started learning the piano at forty.',
    '/ɛ.la kɔ.mɑ̃.se a a.pʁɑ̃dʁ lə pja.no a ka.ʁɑ̃.tɑ̃/', 'eh-la ko-mahⁿ-SAY | a a-PRAHⁿDR luh pya-NOH | a ka-rahⁿ-TAHⁿ', ['a', 'debut']),
  sent(1318, 'Commence par lire les consignes.', 'Start by reading the instructions.',
    '/kɔ.mɑ̃s paʁ liʁ le kɔ̃.siɲ/', 'ko-MAHⁿS | par LEER | lay kohⁿ-SEENY', ['par', 'paire']),
  sent(1319, "Rien ne m'empêche de porter plainte.", 'Nothing stops me from making a formal complaint.',
    '/ʁjɛ̃ nə mɑ̃.pɛʃ də pɔʁ.te plɛ̃t/', 'ryehⁿ nuh mahⁿ-PESH | duh por-tay PLEHⁿT', ['de', 'reclamation']),
  sent(1320, 'Le règlement oblige les locataires à trier les déchets.', 'The rules require tenants to sort their rubbish.',
    '/lə ʁɛ.ɡlə.mɑ̃ ɔ.bliʒ le lɔ.ka.tɛʁ a tʁi.je le de.ʃɛ/', 'luh reh-gluh-MAHⁿ | o-BLEEZH | lay lo-ka-TEHR | a tree-YAY lay day-SHEH', ['a']),
  gap(1321, "Elle n'a pas osé répondre.", 'She did not dare answer.',
    '/ɛl na pa.zo.ze ʁe.pɔ̃dʁ/', 'el na pa-zo-ZAY | ray-POHⁿDR',
    "Elle n'a pas ___ répondre. (oser, avec ou sans préposition ?)",
    "Oser se construit sans préposition : osé répondre. EN: oser takes no preposition.",
    ['rien'], FCVDR),
  gap(1322, 'Le locataire a fini par payer son loyer.', 'The tenant ended up paying his rent.',
    '/lə lɔ.ka.tɛʁ a fi.ni paʁ pɛ.je sɔ̃ lwa.je/', 'luh lo-ka-TEHR | a fee-nee par peh-YAY | sohⁿ lwa-YAY',
    'Le locataire a fini ___ payer son loyer. (au bout du compte)',
    "Finir par : en fin de compte. Finir de, c'est terminer. EN: finir par means to end up.",
    ['par', 'paire']),
  rule(1323, 'La préposition vient du premier verbe, jamais du second.', 'The preposition comes from the first verb, never the second.',
    '/la pʁe.pɔ.zi.sjɔ̃ vjɛ̃ dy pʁə.mje vɛʁb ʒa.mɛ dy sə.ɡɔ̃/', 'la pray-po-zee-SYOHⁿ | vyehⁿ dü pruh-myay VEHRB | zha-MEH dü suh-GOHⁿ',
    'Qui choisit entre à, de et rien ?',
    "Le premier verbe : tenir à, s'efforcer de, oser sans rien. Apprends chaque verbe avec sa préposition.",
    ['preposition']),
];

/* ── ACT 8 · FAIRE FAIRE (.1325-.1338) ──────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1325, 'Je fais réparer ma voiture chez un garagiste du quartier.', 'I am having my car repaired at a local garage.',
    '/ʒə fɛ ʁe.pa.ʁe ma vwa.tyʁ ʃe.zœ̃ ɡa.ʁa.ʒist dy kaʁ.tje/', 'zhuh feh ray-pa-RAY | ma vwa-TÜR | shay-zuhⁿ ga-ra-ZHEEST dü kar-TYAY', ['faire', 'paire'], FCVDR),
  sent(1326, 'Je répare ma voiture moi-même.', 'I repair my car myself.',
    '/ʒə ʁe.paʁ ma vwa.tyʁ mwa.mɛm/', 'zhuh ray-PAR ma vwa-TÜR | mwa-MEM', ['faire', 'paire']),
  sent(1327, 'Nous avons fait installer une nouvelle cuisine.', 'We had a new kitchen fitted.',
    '/nu.za.vɔ̃ fɛ ɛ̃s.ta.le yn nu.vɛl kɥi.zin/', 'noo-za-vohⁿ feh ehⁿs-ta-LAY | ün noo-vell kwee-ZEEN', ['faire']),
  sent(1328, 'Le professeur fait lire le texte aux élèves.', 'The teacher has the pupils read the text.',
    '/lə pʁɔ.fɛ.sœʁ fɛ liʁ lə tɛkst o.ze.lɛv/', 'luh pro-feh-SUHR | feh LEER luh TEKST | oh-zay-LEV', ['faire', 'agent']),
  sent(1329, 'Le professeur fait lire les élèves à voix haute.', 'The teacher gets the pupils to read aloud.',
    '/lə pʁɔ.fɛ.sœʁ fɛ liʁ le.ze.lɛv a vwa ot/', 'luh pro-feh-SUHR | feh LEER lay-zay-LEV | a vwa OHT', ['faire', 'agent']),
  sent(1330, "J'ai fait visiter l'appartement par une agence.", 'I had an agency show people round the flat.',
    '/ʒe fɛ vi.zi.te la.paʁ.tə.mɑ̃ paʁ y.na.ʒɑ̃s/', 'zhay feh vee-zee-TAY | la-par-tuh-MAHⁿ | par ü-na-ZHAHⁿS', ['faire', 'agent']),
  sent(1331, "Ce film m'a fait pleurer.", 'That film made me cry.',
    '/sə film ma fɛ plœ.ʁe/', 'suh FEELM | ma feh pluh-RAY', ['faire', 'cause'], FCVDR),
  sent(1332, 'Il faut faire faire un double des clés.', 'We need to have a spare key cut.',
    '/il fo fɛʁ fɛʁ œ̃ dubl de kle/', 'eel foh fehr FEHR | uhⁿ DOOBL day KLAY', ['faire']),
  sent(1333, 'Faites entrer le client suivant.', 'Show the next customer in.',
    '/fɛt.zɑ̃.tʁe lə kli.jɑ̃ sɥi.vɑ̃/', 'fet-zahⁿ-TRAY | luh klee-yahⁿ swee-VAHⁿ', ['faire', 'imperatif']),
  sent(1334, 'Elle a fait venir un plombier en urgence.', 'She got a plumber in urgently.',
    '/ɛ.la fɛ və.niʁ œ̃ plɔ̃.bje ɑ̃.nyʁ.ʒɑ̃s/', 'eh-la feh vuh-NEER | uhⁿ plohⁿ-BYAY | ahⁿ-nür-ZHAHⁿS', ['faire'], FCVDR),
  gap(1335, "J'ai fait changer les serrures.", 'I had the locks changed.',
    '/ʒe fɛ ʃɑ̃.ʒe le se.ʁyʁ/', 'zhay feh shahⁿ-ZHAY | lay say-RÜR',
    "J'ai ___ changer les serrures. (faire · pas moi-même)",
    "Un serrurier a changé les serrures : j'ai fait changer. EN: someone else did it.",
    ['faire'], FCVDR),
  rule(1336, "Faire + infinitif : quelqu'un d'autre fait l'action.", 'Faire + infinitive: someone else does the action.',
    '/fɛʁ lɛ̃.fi.ni.tif kɛl.kœ̃ do.tʁə fɛ lak.sjɔ̃/', 'fehr lehⁿ-fee-nee-TEEF | kel-kuhⁿ DOHTR | feh lak-SYOHⁿ',
    '« Je fais réparer ma voiture » : qui répare ?',
    "Le garagiste, pas moi. À ou par le nomme si besoin : je fais lire le texte aux élèves.",
    ['faire']),
  sent(1337, 'Tu devrais faire vérifier les freins avant de partir.', 'You should get the brakes checked before you go.',
    '/ty də.vʁɛ fɛʁ ve.ʁi.fje le fʁɛ̃ a.vɑ̃ də paʁ.tiʁ/', 'tü duh-VREH | fehr vay-ree-FYAY lay FREHⁿ | a-vahⁿ duh par-TEER', ['faire', 'conseil']),
  sent(1338, 'Le propriétaire a fait repeindre la façade.', 'The owner had the front repainted.',
    '/lə pʁɔ.pʁi.je.tɛʁ a fɛ ʁə.pɛ̃dʁ la fa.sad/', 'luh pro-pree-yay-TEHR | a feh ruh-PEHⁿDR | la fa-SAD', ['faire']),
];

/* ── ACT 9 · LAISSER, ET LES PRONOMS (.1341-.1353) ──────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1341, "Laisse tomber, ce n'est pas grave.", 'Forget it, it does not matter.',
    '/lɛs tɔ̃.be sə nɛ pa ɡʁav/', 'less tohⁿ-BAY | suh neh pa GRAV', ['laisser', 'fige'], FCVDR),
  sent(1342, 'Il a laissé tomber ses études en deuxième année.', 'He dropped out in his second year.',
    '/i.la lɛ.se tɔ̃.be se.ze.tyd ɑ̃ dø.zjɛ.ma.ne/', 'ee-la leh-say tohⁿ-BAY | say-zay-TÜD | ahⁿ deu-zyeh-ma-NAY', ['laisser', 'fige']),
  sent(1343, "Laissez passer l'ambulance.", 'Let the ambulance through.',
    '/lɛ.se pa.se lɑ̃.by.lɑ̃s/', 'leh-SAY pa-SAY | lahⁿ-bü-LAHⁿS', ['laisser']),
  sent(1344, 'Ma voiture ? Je la fais réparer demain.', 'My car? I am having it repaired tomorrow.',
    '/ma vwa.tyʁ ʒə la fɛ ʁe.pa.ʁe də.mɛ̃/', 'ma vwa-TÜR | zhuh la feh ray-pa-RAY | duh-MEHⁿ', ['pronom', 'faire'], FCVDR),
  sent(1345, 'Ta lettre ? Je la lui ai fait lire hier soir.', 'Your letter? I had him read it last night.',
    '/ta lɛtʁ ʒə la lɥi e fɛ liʁ jɛʁ swaʁ/', 'ta LETR | zhuh la lwee ay feh LEER | yehr SWAR', ['pronom', 'faire', 'accord']),
  sent(1346, 'Ces meubles, je les ai fait livrer mardi.', 'That furniture, I had it delivered on Tuesday.',
    '/se mœbl ʒə le.ze fɛ li.vʁe maʁ.di/', 'say MUHBL | zhuh lay-zay feh lee-VRAY | mar-DEE', ['pronom', 'faire', 'accord'], FCVDR),
  sent(1347, 'Ne me fais pas attendre.', 'Do not keep me waiting.',
    '/nə mə fɛ pa.za.tɑ̃dʁ/', 'nuh muh feh pa-za-TAHⁿDR', ['pronom', 'faire', 'imperatif']),
  sent(1348, 'Fais-le entrer, il est attendu.', 'Show him in, he is expected.',
    '/fɛ.lə ɑ̃.tʁe i.lɛ.ta.tɑ̃.dy/', 'feh-luh ahⁿ-TRAY | ee-leh-ta-tahⁿ-DÜ', ['pronom', 'faire', 'imperatif']),
  sent(1349, 'Je les laisse jouer dans le jardin.', 'I let them play in the garden.',
    '/ʒə le lɛs ʒu.e dɑ̃ lə ʒaʁ.dɛ̃/', 'zhuh lay LESS | zhoo-AY dahⁿ luh zhar-DEHⁿ', ['pronom', 'laisser']),
  sent(1350, "Laisse-la parler jusqu'au bout.", 'Let her finish what she is saying.',
    '/lɛs.la paʁ.le ʒys.ko bu/', 'less-la par-LAY | zhüs-koh BOO', ['pronom', 'laisser', 'imperatif']),
  gap(1351, 'Les documents ? Je les ai fait traduire.', 'The documents? I had them translated.',
    '/le dɔ.ky.mɑ̃ ʒə le.ze fɛ tʁa.dɥiʁ/', 'lay do-kü-MAHⁿ | zhuh lay-zay feh tra-DWEER',
    "Les documents ? Je les ai ___ traduire. (faire · et l'accord ?)",
    "Fait ne s'accorde jamais devant un infinitif : je les ai fait traduire. EN: fait never agrees here.",
    ['pronom', 'accord'], FCVDR),
  rule(1352, "Le pronom se met devant faire ou laisser, pas devant l'infinitif.", 'The pronoun goes before faire or laisser, not before the infinitive.',
    '/lə pʁɔ.nɔ̃ sə mɛ də.vɑ̃ fɛʁ u lɛ.se pa də.vɑ̃ lɛ̃.fi.ni.tif/', 'luh pro-NOHⁿ | suh meh duh-vahⁿ FEHR oo leh-SAY | pa duh-vahⁿ lehⁿ-fee-nee-TEEF',
    '« Je fais la réparer » ou « je la fais réparer » ?',
    "Je la fais réparer : faire et l'infinitif forment un bloc, et le pronom se place devant le bloc.",
    ['pronom']),
  rule(1353, "Devant un infinitif, fait ne s'accorde jamais.", 'Before an infinitive, fait never agrees.',
    '/də.vɑ̃.tœ̃.nɛ̃.fi.ni.tif fɛ nə sa.kɔʁd ʒa.mɛ/', 'duh-vahⁿ-tuhⁿ-nehⁿ-fee-nee-TEEF | feh nuh sa-KORD zha-MEH',
    'Les clés, je les ai fait faire, ou faites faire ?',
    "Fait faire : fait ne bouge pas devant un infinitif, même avec un pronom placé avant.",
    ['accord']),
];

/* ── ACT 10 · LES CONSIGNES (.1356-.1368) ───────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1356, 'Ne pas se pencher au dehors.', 'Do not lean out of the window.',
    '/nə pa sə pɑ̃.ʃe o də.ɔʁ/', 'nuh pa suh pahⁿ-SHAY | oh duh-OR', ['consigne', 'negation'], FCVDR),
  sent(1357, 'Composter son billet avant de monter dans le train.', 'Validate your ticket before boarding the train.',
    '/kɔ̃.pɔs.te sɔ̃ bi.jɛ a.vɑ̃ də mɔ̃.te dɑ̃ lə tʁɛ̃/', 'kohⁿ-pos-TAY sohⁿ bee-YEH | a-vahⁿ duh mohⁿ-TAY | dahⁿ luh TREHⁿ', ['consigne'], FCVDR),
  sent(1358, 'Ne pas laisser les bagages sans surveillance.', 'Do not leave luggage unattended.',
    '/nə pa lɛ.se le ba.ɡaʒ sɑ̃ syʁ.vɛ.jɑ̃s/', 'nuh pa leh-SAY lay ba-GAZH | sahⁿ sür-veh-YAHⁿS', ['consigne', 'negation']),
  sent(1359, 'Préchauffer le four à cent quatre-vingts degrés.', 'Preheat the oven to one hundred and eighty degrees.',
    '/pʁe.ʃo.fe lə fuʁ a sɑ̃ ka.tʁə.vɛ̃ də.ɡʁe/', 'pray-shoh-FAY luh FOOR | a sahⁿ ka-truh-vehⁿ duh-GRAY', ['consigne', 'recette']),
  sent(1360, 'Remplir le formulaire en lettres capitales.', 'Fill in the form in capital letters.',
    '/ʁɑ̃.pliʁ lə fɔʁ.my.lɛʁ ɑ̃ lɛtʁ ka.pi.tal/', 'rahⁿ-PLEER luh for-mü-LEHR | ahⁿ letr ka-pee-TAL', ['consigne']),
  sent(1361, 'Prière de fermer la porte derrière vous.', 'Please close the door behind you.',
    '/pʁi.jɛʁ də fɛʁ.me la pɔʁt dɛ.ʁjɛʁ vu/', 'pree-YEHR | duh fehr-MAY la PORT | deh-ryehr VOO', ['consigne', 'priere'], FCVR, { register: S }),
  sent(1362, 'Ne rien jeter dans les toilettes.', 'Do not throw anything down the toilet.',
    '/nə ʁjɛ̃ ʒə.te dɑ̃ le twa.lɛt/', 'nuh ryehⁿ zhuh-TAY | dahⁿ lay twa-LET', ['consigne', 'negation']),
  sent(1363, 'Agiter avant emploi.', 'Shake before use.',
    '/a.ʒi.te a.vɑ̃.tɑ̃.plwa/', 'a-zhee-TAY | a-vahⁿ-tahⁿ-PLWA', ['consigne', 'notice']),
  sent(1364, "Pour tout renseignement, s'adresser à l'accueil.", 'For any information, please ask at reception.',
    '/puʁ tu ʁɑ̃.sɛɲ.mɑ̃ sa.dʁɛ.se a la.kœj/', 'poor too rahⁿ-seny-MAHⁿ | sa-dreh-SAY a la-KUHY', ['consigne', 'pronominal'], FCVDR),
  sent(1365, 'Veuillez ne pas stationner devant la sortie.', 'Please do not park in front of the exit.',
    '/vœ.je nə pa sta.sjɔ.ne də.vɑ̃ la sɔʁ.ti/', 'vuh-YAY | nuh pa sta-syo-NAY | duh-vahⁿ la sor-TEE', ['consigne', 'veuillez'], FCVR, { register: S }),
  gap(1366, "Ne pas ouvrir la porte avant l'arrêt complet du train.", 'Do not open the door until the train has come to a complete stop.',
    '/nə pa.zu.vʁiʁ la pɔʁt a.vɑ̃ la.ʁɛ kɔ̃.plɛ dy tʁɛ̃/', 'nuh pa-zoo-VREER la PORT | a-vahⁿ la-REH kohⁿ-PLEH | dü TREHⁿ',
    "___ ouvrir la porte avant l'arrêt complet du train. (la négation)",
    "Ne pas, ensemble, devant l'infinitif. EN: ne pas together before the infinitive.",
    ['consigne', 'negation'], FCVDR),
  rule(1367, "Dans une consigne, ne pas se place devant l'infinitif, ensemble.", 'In an instruction, ne pas goes before the infinitive, together.',
    '/dɑ̃.zyn kɔ̃.siɲ nə pa sə plas də.vɑ̃ lɛ̃.fi.ni.tif ɑ̃.sɑ̃bl/', 'dahⁿ-zün kohⁿ-SEENY | nuh PA | suh plass duh-vahⁿ lehⁿ-fee-nee-TEEF | ahⁿ-SAHⁿBL',
    "« Ne se pencher pas au dehors » : qu'est-ce qui ne va pas ?",
    "Pas a quitté ne. Devant un infinitif, ne pas reste soudé et passe avant : ne pas se pencher au dehors.",
    ['consigne', 'negation']),
  sent(1368, 'Conserver au réfrigérateur après ouverture.', 'Keep refrigerated after opening.',
    '/kɔ̃.sɛʁ.ve o ʁe.fʁi.ʒe.ʁa.tœʁ a.pʁɛ.zu.vɛʁ.tyʁ/', 'kohⁿ-sehr-VAY | oh ray-free-zhay-ra-TUHR | a-preh-zoo-vehr-TÜR', ['consigne', 'notice']),
];

/* ── ACT 11 · SUJET, QUESTION, NOM (.1371-.1385) ────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1371, 'Voyager forme la jeunesse.', 'Travel broadens the mind of the young.',
    '/vwa.ja.ʒe fɔʁm la ʒœ.nɛs/', 'vwa-ya-ZHAY | form la zheu-NESS', ['sujet-inf', 'proverbe'], FCVDR),
  sent(1372, 'Apprendre une langue prend du temps.', 'Learning a language takes time.',
    '/a.pʁɑ̃.dʁyn lɑ̃ɡ pʁɑ̃ dy tɑ̃/', 'a-prahⁿ-drün LAHⁿG | prahⁿ dü TAHⁿ', ['sujet-inf']),
  sent(1373, 'Mentir ne sert à rien.', 'Lying gets you nowhere.',
    '/mɑ̃.tiʁ nə sɛʁ a ʁjɛ̃/', 'mahⁿ-TEER | nuh sehr a RYEHⁿ', ['sujet-inf'], FCVDR),
  sent(1374, "À qui s'adresser en cas de problème ?", 'Who should you contact if there is a problem?',
    '/a ki sa.dʁɛ.se ɑ̃ ka də pʁɔ.blɛm/', 'a kee sa-dreh-SAY | ahⁿ ka duh pro-BLEM', ['question']),
  sent(1375, "Où aller ce week-end ? Je n'en ai aucune idée.", 'Where to go this weekend? I have no idea.',
    '/u a.le sə wi.kɛnd ʒə nɑ̃.ne o.ky.ni.de/', 'oo a-LAY suh wee-KEND | zhuh nahⁿ-nay oh-kü-nee-DAY', ['question']),
  sent(1376, 'Je ne sais pas quoi répondre.', 'I do not know what to answer.',
    '/ʒə nə sɛ pa kwa ʁe.pɔ̃dʁ/', 'zhuh nuh seh PA | kwa ray-POHⁿDR', ['question', 'indirecte'], FCVDR),
  sent(1377, "Nous avons le plaisir de vous annoncer l'ouverture de notre magasin.", 'We are pleased to announce the opening of our shop.',
    '/nu.za.vɔ̃ lə plɛ.ziʁ də vu.za.nɔ̃.se lu.vɛʁ.tyʁ də nɔ.tʁə ma.ɡa.zɛ̃/', 'noo-za-vohⁿ luh pleh-ZEER | duh voo-za-nohⁿ-SAY | loo-vehr-TÜR | duh no-truh ma-ga-ZEHⁿ', ['nom', 'de'], FCVR, { register: S }),
  sent(1378, "J'ai eu la chance de travailler avec elle.", 'I was lucky enough to work with her.',
    '/ʒe y la ʃɑ̃s də tʁa.va.je a.vɛk ɛl/', 'zhay ü la SHAHⁿS | duh tra-va-YAY a-vek EL', ['nom', 'de']),
  sent(1379, 'Vous avez le droit de demander un remboursement.', 'You are entitled to ask for a refund.',
    '/vu.za.ve lə dʁwa də də.mɑ̃.de œ̃ ʁɑ̃.buʁs.mɑ̃/', 'voo-za-vay luh DRWA | duh duh-mahⁿ-DAY | uhⁿ rahⁿ-boors-MAHⁿ', ['nom', 'de', 'reclamation'], FCVDR),
  sent(1380, "J'ai encore trois factures à payer.", 'I still have three bills to pay.',
    '/ʒe ɑ̃.kɔʁ tʁwa fak.tyʁ a pɛ.je/', 'zhay ahⁿ-KOR | trwa fak-TÜR | a peh-YAY', ['nom', 'a']),
  sent(1381, 'Elle a été la première à arriver.', 'She was the first to arrive.',
    '/ɛ.la e.te la pʁə.mjɛʁ a a.ʁi.ve/', 'eh-la ay-TAY | la pruh-MYEHR | a a-ree-VAY', ['adjectif', 'a']),
  sent(1382, 'Nous sommes prêts à trouver un arrangement.', 'We are ready to reach an arrangement.',
    '/nu sɔm pʁɛ a tʁu.ve œ̃.na.ʁɑ̃ʒ.mɑ̃/', 'noo som PREH | a troo-VAY | uhⁿ-na-rahⁿzh-MAHⁿ', ['adjectif', 'a', 'reclamation']),
  gap(1383, "C'est à toi de décider.", 'It is up to you to decide.',
    '/sɛ.ta twa də de.si.de/', 'seh-ta TWA | duh day-see-DAY',
    "C'est à toi ___ décider. (à ou de ?)",
    "C'est à quelqu'un de faire quelque chose : c'est son tour ou son rôle. EN: c'est à toi de means it is up to you.",
    ['de'], FCVDR),
  rule(1384, 'Le droit de refuser, mais une facture à payer.', 'The right to refuse, but a bill to pay.',
    '/lə dʁwa də ʁə.fy.ze mɛ y.nə fak.tyʁ a pɛ.je/', 'luh DRWA duh ruh-fü-ZAY | meh ü-nuh fak-TÜR a peh-YAY',
    'Après un nom, de ou à ?',
    "De, le plus souvent : le droit de, le plaisir de, la chance de. À quand la chose reste à faire : une facture à payer, une maison à vendre.",
    ['nom']),
  sent(1385, "Partir en vacances sans téléphone, c'est possible.", 'Going on holiday without a phone is possible.',
    '/paʁ.tiʁ ɑ̃ va.kɑ̃s sɑ̃ te.le.fɔn sɛ pɔ.sibl/', 'par-TEER ahⁿ va-KAHⁿS | sahⁿ tay-lay-FONN | seh po-SEEBL', ['sujet-inf', 'oral']),
];

/* ── ACT 12 · TA RÉCLAMATION (.1388-.1397) ──────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1388, 'Je me permets de vous écrire au sujet de ma commande.', 'I am writing to you about my order.',
    '/ʒə mə pɛʁ.mɛ də vu.ze.kʁiʁ o sy.ʒɛ də ma kɔ.mɑ̃d/', 'zhuh muh pehr-MEH | duh voo-zay-KREER | oh sü-ZHEH duh ma ko-MAHⁿD', ['tache', 'lettre'], FCVDR, { register: S }),
  sent(1389, "Après avoir passé commande le 3 mars, je n'ai reçu aucune confirmation.", 'After placing my order on 3 March, I received no confirmation.',
    '/a.pʁɛ.za.vwaʁ pa.se kɔ.mɑ̃d lə tʁwa maʁs ʒə ne ʁə.sy o.kyn kɔ̃.fiʁ.ma.sjɔ̃/', 'a-preh-za-vwar pa-say ko-MAHⁿD | luh trwa MARS | zhuh nay ruh-SÜ | oh-künn kohⁿ-feer-ma-SYOHⁿ', ['tache', 'passe'], FCVR, { register: S }),
  sent(1390, "J'ai dû faire réparer l'appareil à mes frais.", 'I had to have the appliance repaired at my own expense.',
    '/ʒe dy fɛʁ ʁe.pa.ʁe la.pa.ʁɛj a me fʁɛ/', 'zhay dü fehr ray-pa-RAY | la-pa-REY | a may FREH', ['tache', 'faire'], FCVDR),
  sent(1391, 'Je vous ai écrit deux fois sans avoir reçu de réponse.', 'I have written to you twice without receiving a reply.',
    '/ʒə vu.ze e.kʁi dø fwa sɑ̃.za.vwaʁ ʁə.sy də ʁe.pɔ̃s/', 'zhuh voo-zay ay-KREE | deu FWA | sahⁿ-za-vwar ruh-SÜ | duh ray-POHⁿS', ['tache', 'sans'], FCVDR),
  sent(1392, 'Je vous demande de me rembourser la somme de cent vingt euros.', 'I ask you to refund me the sum of one hundred and twenty euros.',
    '/ʒə vu də.mɑ̃d də mə ʁɑ̃.buʁ.se la sɔm də sɑ̃ vɛ̃.tø.ʁo/', 'zhuh voo duh-MAHⁿD | duh muh rahⁿ-boor-SAY | la SOM duh sahⁿ vehⁿ-teu-ROH', ['tache', 'de'], FCVR, { register: S }),
  sent(1393, 'Je compte sur vous pour régler ce problème rapidement.', 'I am counting on you to sort out this problem quickly.',
    '/ʒə kɔ̃t syʁ vu puʁ ʁe.ɡle sə pʁɔ.blɛm ʁa.pid.mɑ̃/', 'zhuh kohⁿt sür VOO | poor ray-GLAY | suh pro-BLEM | ra-peed-MAHⁿ', ['tache', 'pour']),
  sent(1394, 'Faute de réponse sous quinze jours, je saisirai le médiateur de la consommation.', 'Failing a reply within fifteen days, I will refer the matter to the consumer ombudsman.',
    '/fot də ʁe.pɔ̃s su kɛ̃z ʒuʁ ʒə se.zi.ʁe lə me.dja.tœʁ də la kɔ̃.sɔ.ma.sjɔ̃/', 'foht duh ray-POHⁿS | soo kehⁿz ZHOOR | zhuh say-zee-RAY | luh may-dya-TUHR | duh la kohⁿ-so-ma-SYOHⁿ', ['tache', 'lettre'], FCVR, { register: S }),
  sent(1395, 'Je vous remercie de bien vouloir examiner ma demande.', 'Thank you for kindly looking into my request.',
    '/ʒə vu ʁə.mɛʁ.si də bjɛ̃ vu.lwaʁ ɛɡ.za.mi.ne ma də.mɑ̃d/', 'zhuh voo ruh-mehr-SEE | duh byehⁿ voo-LWAR | eg-za-mee-NAY ma duh-MAHⁿD', ['tache', 'lettre'], FCVDR, { register: S }),
  sent(1397, 'Le technicien est reparti sans avoir réglé la panne.', 'The engineer left without fixing the fault.',
    '/lə tɛk.ni.sjɛ̃ ɛ ʁə.paʁ.ti sɑ̃.za.vwaʁ ʁe.ɡle la pan/', 'luh tek-nee-SYEHⁿ | eh ruh-par-TEE | sahⁿ-za-vwar ray-GLAY | la PANN', ['tache', 'sans']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  The two long readings (B2: 200 to 350 words) and the nine short « dans
 *  un texte » paragraphs (60 to 120 words) that close acts 3 to 11. They
 *  live here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a consumer forum thread, Brussels. */
export const LECTURE_FORUM =
  "Forum des consommateurs, rubrique Livraisons. Sujet : trois mois pour un canapé. Message de Nadia, à Bruxelles. Bonjour à tous, je voudrais vous raconter mon histoire et vous demander conseil. Après avoir commandé un canapé en ligne en janvier, j'ai attendu six semaines. Le jour de la livraison, le livreur est reparti sans avoir monté le canapé : il l'a laissé en bas de l'immeuble, sous la pluie. Après l'avoir porté jusqu'au troisième étage avec mes voisins, j'ai découvert un pied cassé. J'ai appelé le service client pour obtenir un échange. On m'a répondu qu'il s'agissait d'un simple défaut d'aspect et qu'il fallait patienter. J'ai donc fait réparer le pied par un menuisier du quartier, à mes frais. Aujourd'hui, je crois avoir fait tout ce qu'il fallait : je tiens à garder une trace écrite de chaque échange, et je compte demander le remboursement de la réparation. Mais que faire si l'entreprise ne répond pas ? À qui s'adresser ? Une amie affirme avoir obtenu gain de cause en écrivant au médiateur. Une autre m'a conseillé de laisser tomber. Merci d'avance pour vos réponses. Réponse de Marc, à Liège : Nadia, surtout, ne laisse pas tomber. Avant d'écrire au médiateur, envoie une lettre de réclamation en recommandé, avec les photos du pied cassé et la facture du menuisier. C'est souvent la première étape qu'on te demandera. Et n'oublie pas de rappeler la date de ta commande : après avoir attendu six semaines, tu as le droit d'exiger une réponse claire.";

/** Act 12: the model the learner imitates, a complaint to a rail company. */
export const LECTURE_MODELE =
  "Objet : réclamation, train Lyon-Marseille du 12 mai. Madame, Monsieur, je me permets de vous écrire au sujet du voyage que j'ai effectué le 12 mai entre Lyon et Marseille. Après avoir réservé mon billet trois semaines à l'avance, je pensais voyager dans de bonnes conditions. Or, le train est resté bloqué deux heures en gare de Valence sans que les passagers reçoivent la moindre information, et il est arrivé à Marseille avec deux heures et quart de retard. Après être enfin arrivée, j'ai constaté que ma correspondance pour Nice était partie, et j'ai dû acheter un nouveau billet. Le lendemain, j'ai rempli le formulaire en ligne. On m'a promis une réponse sous huit jours. Trois semaines plus tard, je n'ai toujours rien reçu, et votre service client a clôturé mon dossier sans avoir répondu à ma demande. Je tiens à rappeler que la réglementation européenne prévoit, pour un retard de deux heures ou plus, une indemnisation égale à la moitié du prix du billet. Je vous demande donc de me verser la somme de quarante-deux euros, ainsi que le prix du billet pour Nice, soit trente-cinq euros. Vous trouverez ci-joint mes deux billets et le reçu. Faute de réponse sous quinze jours, je me verrai obligée de saisir le médiateur. Je vous remercie de bien vouloir examiner ma demande et vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. Claire Moreau";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "Le récit de Lucas. Mets chaque verbe entre parenthèses à l'infinitif présent ou passé. « Le jour du déménagement, je me suis levé à six heures. Après (prendre) un café, j'ai chargé les derniers cartons. Avant de (partir), j'ai fait le tour de l'appartement vide. Après (rendre) les clés au propriétaire, nous sommes partis vers Namur. Après (arriver), ma sœur et moi avons tout monté au troisième étage. Le soir, après nous (installer) tant bien que mal, nous avons commandé des pizzas. Et avant de (se coucher), je me suis juré de ne plus jamais déménager. »";

export const TEXTE_A4 =
  "Une brève de Genève. Lis-la, puis dis si chaque pour donne un but ou une raison. « Un chauffeur de bus a été récompensé hier pour avoir évité un accident grave. Pour éviter un cycliste, il a freiné brusquement, et aucun passager n'a été blessé. La compagnie l'a félicité pour avoir gardé son calme. Elle rappelle aussi que les cyclistes doivent porter un gilet pour être vus la nuit. Le cycliste, lui, a reçu une amende pour avoir brûlé un feu rouge. »";

export const TEXTE_A5 =
  "Le courriel de Samia à son syndic. Complète avec sans + infinitif, présent ou passé, ou avec sans que + subjonctif. « Monsieur, l'entreprise de peinture est venue mardi sans (prévenir) les locataires. Les ouvriers sont entrés chez moi sans que je (être) là. Ils ont repeint la cuisine sans (protéger) les meubles, puis ils sont repartis sans (nettoyer). Je rappelle que personne n'entre chez un locataire sans que celui-ci (donner) son accord. Je ne signerai rien sans (voir) le devis. Samia Benali »";

export const TEXTE_A6 =
  "Le témoignage de M. Girard, au commissariat. Réécris avec un infinitif les phrases où c'est possible, et garde que ailleurs. « Je crois que j'ai vu l'homme vers vingt heures. Je pense qu'il portait une veste bleue. Ma voisine affirme qu'elle l'a vu entrer dans l'immeuble. Je me souviens que j'ai entendu une porte claquer. Le gardien dit que je me trompe, mais je suis sûr que j'ai raison. »";

export const TEXTE_A7 =
  "Le courriel de Paul à son équipe. Complète avec à, de, par ou rien. « Bonjour à tous, je tiens ___ vous remercier pour ce trimestre. Nous avons commencé ___ recevoir des commandes du Québec, et je compte ___ ouvrir un bureau à Montréal l'an prochain. Il s'agit maintenant ___ trouver deux personnes motivées. N'hésitez pas ___ me proposer des noms. Si personne n'ose ___ se lancer, je finirai ___ publier une annonce. Merci de me répondre avant vendredi. Paul »";

export const TEXTE_A8 =
  "Hélène vend sa maison à Annecy, mais elle ne fait rien elle-même : elle a tout confié à des professionnels. Réécris sa liste avec faire + infinitif, en commençant chaque phrase par « Hélène fait ». « Un peintre repeint la façade. Un électricien vérifie l'installation. Un jardinier taille la haie. Un expert estime la maison. Une agence photographie les pièces et les visiteurs visitent la maison le samedi. »";

export const TEXTE_A9 =
  "Réponds au message de ton colocataire Théo, en remplaçant chaque nom répété par un pronom. « Le chauffe-eau ? Oui, j'ai fait réparer le chauffe-eau lundi. Les clés ? J'ai fait faire les clés au magasin du coin. La facture ? J'ai fait envoyer la facture au propriétaire. Et les enfants des voisins ? Je laisse les enfants jouer dans la cour, ça ne me dérange pas. »";

export const TEXTE_A10 =
  "Le règlement de la salle de sport, rédigé trop vite. Réécris chaque consigne à l'infinitif, comme sur une affiche. « Vous présentez votre carte à l'entrée. Vous ne laissez pas vos affaires dans les vestiaires la nuit. Vous essuyez les machines après usage. Vous rangez les poids à leur place. Vous ne mangez pas dans la salle. Pour réserver un cours, vous vous adressez à l'accueil. »";

export const TEXTE_A11 =
  "Le blog d'Ousmane, de retour de trois mois en Asie. Trouve les infinitifs sujets, les questions à l'infinitif, et les noms suivis de de ou de à. « Partir seul, c'est apprendre à se débrouiller. Voyager sans rien réserver ? Ça ne me fait pas peur. Mais une fois sur place, que faire ? Où dormir ? À qui demander son chemin ? J'ai eu la chance de rencontrer des gens formidables, et j'ai encore mille photos à trier. Voyager forme la jeunesse, dit-on. Je dirais plutôt que ça ouvre les yeux à tout âge. »";
