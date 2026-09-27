// b1.11.l1 « Qui et que » — the authored corpus, the imports and the citation
// constants. DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (do not rename; b1.12 and b1.13 import them): REFRAME,
// REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS, ROWS_BY_ACT,
// IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS — B1 Unit 3, sentence expansion, lesson 1 of 3
// ══════════════════════════════════════════════════════════════════════════
//
//   THE RELATIVE CLAUSE ITSELF, and the two pronouns that carry ninety per
//   cent of them:
//
//     qui   the SUBJECT of its own clause     le sac qui est sur la chaise
//     que   the OBJECT of its own clause      le sac que j'ai perdu
//
//   and the seven things an anglophone gets wrong with them:
//
//     1  choosing by antecedent (who for people, which for things)  act 6
//     2  choosing by translation (that / which / who / whom)        act 4
//     3  dropping the pronoun altogether (« the book I read »)      act 7
//     4  eliding qui (« qu'est sur la table »)                      act 5
//     5  forgetting to elide que before a vowel                     act 5
//     6  no participle agreement after a preceding que              act 8
//     7  losing the main verb once the clause is embedded           act 9
//
//   ce qui / ce que is PREVIEWED in act 10 and owned by b1.13. dont and où
//   are b1.12's. Prepositional relatives (avec qui, à qui, chez qui) are
//   named nowhere in this lesson and belong to b1.12/b1.13; see LEAVES in
//   the lesson header.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `pronoms-essentiels` exists (domain fondations, levelRange
//     a1-b2), so nothing is created at import.
//  2. POSTGRES PROBED 2026-09-24 (not the seed):
//        a1  135 rows, max .136      a2  395 rows, max .395
//        b1  138 rows, max .138      b2   25 rows, max .025
//        693 rows across all levels. seed.json shows only 256 of them, and
//        only 21 of the 138 b1 rows. AUTHORED IDS THEREFORE START AT 1000.
//  3. ID BLOCK: b1.11 owns `.1000`-`.1199` and nothing else. b1.12 takes
//     1200-1399, b1.13 takes 1400-1599.
//  4. ROWS THAT ALREADY TEACH THIS, found in Postgres and NOT in the seed:
//        fr.b1.pronoms-essentiels.056  Elle cherche un travail qui lui plaît vraiment.
//        fr.b1.pronoms-essentiels.057  Voici le cadeau que j'ai choisi pour toi.
//        fr.b1.pronoms-essentiels.058  Le restaurant que vous recommandez est excellent.
//     They are TO BE REUSED AT IMPORT, not re-authored. They cannot be named
//     by a section today because `src()` resolves against seed.json and would
//     throw. Flagged as open question 1 for Paul.
//  5. The seed publishes ~50 relative-clause sentences in other themes, which
//     are imported act by act below rather than re-authored. Re-probe the DB
//     at import: the seed is about a quarter of Postgres.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A2. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR
// ══════════════════════════════════════════════════════════════════════════
//
//   `validateDensity`'s nasal rule cannot always tell a real consonant from a
//   nasal vowel. Where it fires on a correct respelling the consonant is
//   doubled, as a2.34 does. In this corpus:
//       dame      DAMM      (a real /m/, a single m in the source)
//       madame    mah-DAMM
//       femme     FAMM      (double m in the source, doubled here too)
//       même      MEMM
//   No U+203F anywhere, in respell or in IPA.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that opens a sentence needs a capital, and the label is built
 *  at interpolation time rather than typed. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.11',
  seq: 11,
  /** English: `content_units` matches it against overview.titleEn. */
  title: 'Qui and Que',
  sub: 'Qui et que',
  canDo: 'Can join two short sentences into one with a relative clause, choosing qui or que by what follows the pronoun rather than by what it refers to, and can agree a past participle with a direct object that has moved in front of the verb',
  prereqUnitIds: ['b1.04'],
} as const;

export const LESSON_ID = 'b1.11.l1';
export const LESSON_TITLE = 'Qui et que';
export const THEME = 'pronoms-essentiels';
export const LEVEL = 'b1' as const;

/** b1.11's block. Nothing outside it. b1.12 takes 1200-1399, b1.13 1400-1599. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. QUOTATIONS AND CITATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** b1.04's ground: the past tense the agreement act sits on. Imported, never
 *  retyped, so a reword there cannot silently diverge here. */
export { REFRAME as B104_REFRAME, REFRAME_EN as B104_REFRAME_EN } from './pc-imparfait-paires-corpus.ts';

/** B1 units have no `seq` in seed.json, so `unitRef` cannot label them. They
 *  are cited by their planned trail position. A2 units use their real seq. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13,
};
function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  if (planned) return `la leçon ${planned} du B1`;
  const m = /^lesson (\d+) in (\w+)$/.exec(unitRef(unitId));
  return m ? `la leçon ${m[1]} de l'${m[2]}` : unitId;
}

export const PC_UNIT = 'a2.05';
export const PARTICIPES_UNIT = 'a2.20';
export const COD_UNIT = 'a2.06';
export const PAIRES_UNIT = 'b1.04';
export const DONT_OU_UNIT = 'b1.12';
export const LEQUEL_UNIT = 'b1.13';

export const PC_REF = refFr(PC_UNIT);
export const PARTICIPES_REF = refFr(PARTICIPES_UNIT);
export const COD_REF = refFr(COD_UNIT);
export const PAIRES_REF = refFr(PAIRES_UNIT);
export const DONT_OU_REF = refFr(DONT_OU_UNIT);
export const LEQUEL_REF = refFr(LEQUEL_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME
 *
 *  The lesson's whole decision, said as a look-right test rather than as
 *  grammar. It is true in one hundred per cent of the sentences this lesson
 *  prints, including the ones where an object pronoun sits between qui and
 *  its verb (« le serveur qui nous apporte l'addition »), which is exactly
 *  where the obvious wording fails.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Derrière qui, pas de sujet. Derrière que, toujours un sujet.';
export const REFRAME_EN = 'Behind qui, no subject. Behind que, always a subject.';

/** The one-line form the drills use as a coach line. */
export const THE_TEST = 'Regarde juste derrière le petit mot : qui est là ?';
export const THE_TEST_EN = 'Look just behind the little word: who is there?';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'qui pour les personnes, que pour les choses.',
    why: 'Flatly false, and it is the anglophone transfer of who / which that act 6 exists to kill. « le sac qui est sur la chaise » and « l\'auteur que je lis » both break it in the first act.',
  },
  {
    text: 'qui est sujet, que est complément d\'objet direct.',
    why: 'True, and useless at the moment of writing: it asks the learner to parse a clause they have not built yet. The lesson teaches a look-right test, not an analysis.',
  },
  {
    text: 'Après qui, le verbe. Après que, un sujet.',
    why: 'False wherever an object pronoun intervenes: « le serveur qui NOUS apporte l\'addition », « la lettre qui M\'attend ». Act 2 prints both, so the reframe had to be about the absence of a subject, not the presence of a verb.',
  },
  {
    text: 'Un seul nom, deux phrases : le petit mot le remplace.',
    why: 'True of the relative clause in general and says nothing about choosing between the two pronouns, which is where every mission of acts 2 to 8 lives.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. IMPORTED ROWS (seed-checked 2026-09-24)
 *
 *  Every id below was read out of `ealch-v2/src/content/seed.json` and its
 *  French is quoted in the trailing comment, so no reader has to open the
 *  seed. Seed-checked only: DB check pending at import.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.famille.010',              // J'ai un demi-frère qui habite en Espagne.  (named only)
    'fr.b1.cafe.089',                 // Le café que j'ai bu ce matin était trop amer.
    'fr.a1.objets.159',               // Le sac que tu portes est joli.  (named only)
  ],
  act2: [
    'fr.b1.maison.070',               // Les voisins qui habitent au-dessus font trop de bruit la nuit.
    'fr.b1.cuisine.071',              // Le chef qui a préparé ce plat utilise des produits locaux.
    'fr.b1.sports-et-loisirs.078',    // Le joueur qui a marqué le but est devenu le héros du match.
    'fr.b1.maison.059',               // C'est le locataire qui doit payer les petites réparations.  (named only)
    'fr.b1.sports-et-loisirs.067',    // C'est ce joueur qui s'entraîne le plus sérieusement.  (named only)
  ],
  act3: [
    'fr.b1.cuisine.075',              // Le restaurant que nous avons visité proposait des plats régionaux.
    'fr.b1.sports-et-loisirs.087',    // Le sport que je préfère demande beaucoup de patience.
    'fr.b1.cafe.093',                 // Le pourboire que nous avons laissé lui a fait plaisir.
    'fr.b1.cuisine.049',              // C'est la recette que ma grand-mère préférait.  (named only)
  ],
  act4: [
    'fr.b1.cafe.082',                 // Le serveur qui nous a servis hier était particulièrement attentionné.
    'fr.b1.cafe.097',                 // Mon ami que tu as rencontré travaille dans ce café.
    'fr.b1.maison.068',               // Le propriétaire refuse de réparer la fuite qui abîme le mur.
    'fr.b1.maison.017',               // La maison que nous visitons demain a été construite il y a vingt ans.  (named only)
  ],
  act5: [
    'fr.b1.pronoms-essentiels.039',   // J'aime ce modèle, celui que tu m'as montré hier.
    'fr.b1.pronoms-essentiels.038',   // Prends celui qui est sur la table.
    'fr.b1.routines.056',             // Ce sont ses habitudes du matin qu'elle ne change jamais.  (named only)
  ],
  act6: [
    'fr.b1.cuisine.090',              // L'ingrédient qui donne du goût à ce plat est le thym.
    'fr.a2.maison.037',               // Mon frère a réparé le robinet qui fuyait.
    'fr.b1.maison.072',               // Elle cherche un appartement qui a une grande cuisine.
    'fr.b1.cuisine.085',              // Le cuisinier qui a créé ce dessert vient de Lyon.
    'fr.b1.pronoms-essentiels.042',   // Prends celle qui te plaît le plus.
    'fr.b1.pronoms-essentiels.050',   // Prends celles qui sont dans la boîte bleue.
  ],
  act7: [
    'fr.b1.cafe.086',                 // C'est une habitude que j'ai gardée depuis mon enfance.
    'fr.b1.cuisine.080',              // La recette que ma grand-mère m'a donnée reste ma préférée.
    'fr.b1.sports-et-loisirs.089',    // Nous avons choisi un gymnase qui propose plusieurs activités.
    'fr.b1.heure-et-date.079',        // Elle est née un vendredi treize, un jour qu'elle n'oubliera jamais.  (named only)
  ],
  act8: [
    'fr.a2.objets.072',               // La montre qu'elle a perdue était neuve.  (named only)
    'fr.a2.objets.073',               // Les clés qu'il a trouvées étaient sous le tapis.  (named only)
    'fr.a2.objets.076',               // La valise que j'ai achetée est très lourde.  (named only)
    'fr.a2.cafe.044',                 // Les cafés qu'elle a commandés étaient froids.  (named only)
    'fr.a2.cuisine.038',              // Elle a préparé la soupe qu'elle a servie chaude.  (named only)
    'fr.a2.cuisine.041',              // Elle a coupé les légumes qu'elle a lavés ce matin.  (named only)
    'fr.a2.sports-et-loisirs.037',    // La joueuse que j'ai vue a marqué un but magnifique.  (named only)
    'fr.a2.sports-et-loisirs.043',    // Les filles que j'ai entraînées ont bien progressé.  (named only)
    'fr.a2.sports-et-loisirs.048',    // Les médailles qu'ils ont gagnées sont dans le salon.  (named only)
    'fr.b1.maison.002',               // La maison qu'ils ont achetée a besoin de gros travaux.  (named only)
    'fr.b2.maison.064',               // Les clés que le locataire nous a rendues étaient rouillées.  (named only)
    'fr.b2.maison.071',               // La décoration qu'elle a choisie correspond parfaitement au salon.  (named only)
  ],
  act9: [
    'fr.b2.maison.060',               // Les meubles que nous avons vendus étaient très anciens.  (named only)
    'fr.b2.maison.069',               // Les travaux que l'entreprise a entrepris coûtent plus cher que prévu.  (named only)
    'fr.a2.sports-et-loisirs.046',    // Les blessures qu'elle a eues étaient graves.  (named only)
  ],
  act10: [
    'fr.b1.maison.009',               // Le loyer augmente chaque année, ce qui inquiète beaucoup de locataires.  (named only)
    'fr.a1.au-restaurant.193',        // Ce n'est pas ce que j'ai commandé.
    'fr.b1.heure-et-date.053',        // On verra bien ce que l'avenir nous réserve.
    'fr.b1.routines.062',             // Chaque matin, elle se demandait ce qu'elle allait préparer pour le dîner.  (named only)
    'fr.b1.maison.014',               // Le déménagement coûte plus cher que ce que nous avions prévu.  (named only)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable by a section, never releasable
 *  through a deck tranche. Checked row by row against seed.json. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b1.famille.010',            // sentence + dictation only
  'fr.a1.objets.159',             // dictation only
  'fr.b1.maison.059',             // dictation only
  'fr.b1.sports-et-loisirs.067',  // dictation only
  'fr.b1.cuisine.049',            // dictation only
  'fr.b1.maison.017',             // sentence + dictation only
  'fr.b1.routines.056',           // dictation only
  'fr.b1.heure-et-date.079',      // dictation only
  'fr.a2.objets.072',             // dictation only
  'fr.a2.objets.073',             // dictation only
  'fr.a2.objets.076',             // dictation only
  'fr.a2.cafe.044',               // dictation only
  'fr.a2.cuisine.038',            // dictation only
  'fr.a2.cuisine.041',            // dictation only
  'fr.a2.sports-et-loisirs.037',  // dictation only
  'fr.a2.sports-et-loisirs.043',  // dictation only
  'fr.a2.sports-et-loisirs.046',  // dictation only
  'fr.a2.sports-et-loisirs.048',  // dictation only
  'fr.b1.maison.002',             // dictation only
  'fr.b2.maison.060',             // dictation only
  'fr.b2.maison.064',             // dictation only
  'fr.b2.maison.069',             // dictation only
  'fr.b2.maison.071',             // dictation only
  'fr.b1.maison.009',             // sentence + dictation only
  'fr.b1.routines.062',           // dictation only
  'fr.b1.maison.014',             // sentence + dictation only
];

/** NOT ONE imported row carries `voiceflash`, so a `practice skill: 'speak'`
 *  section may name none of them. Every import is therefore listed here. */
export const NOT_SPEAKABLE: readonly string[] = [...IMPORT_IDS];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE AUTHORED ROWS
 *
 *  `sent` is a sentence, `phrase` a short unit, `gap` a gapfill card whose
 *  front is the sentence with the relative pronoun removed AND a cue that
 *  names what follows, so the card asks for the pronoun because of the shape
 *  of the clause. `rule` is a grammar card: the prompt is the question, `fr`
 *  is the rule.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const GP = ['relatives-qui-que'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP,
});

/** A gapfill card: the front is the sentence with the pronoun gapped and a
 *  cue in brackets naming what follows. Shape before translation. */
const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  prompt: string, notes: string, tags: string[], drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, cardType: 'gapfill', prompt, notes, grammarPoints: GP,
});

/** A rule card: the prompt is the question, `fr` is the rule. */
const rule = (
  n: number, fr: string, en: string, prompt: string, notes: string, tags: string[],
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en,
  tags, drills: ['flashcard', 'review'] as Item['drills'], version: 1,
  cardType: 'grammar', prompt, notes, grammarPoints: GP,
});

/* ── ACT 1 · DEUX PHRASES, UN SEUL NOM · 1000-1017 ───────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, "J'ai perdu un sac.", 'I lost a bag.',
    '/ʒe pɛʁ.dy ɛ̃ sak/', 'zhay pehr-DÜ uhⁿ SAK', ['scene', 'court']),
  sent(1001, 'Le sac est bleu.', 'The bag is blue.',
    '/lə sak ɛ blø/', 'luh SAK eh BLUH', ['scene', 'court']),
  sent(1002, "Le sac que j'ai perdu est bleu.", 'The bag I lost is blue.',
    '/lə sak kə ʒe pɛʁ.dy ɛ blø/', 'luh sak kuh zhay pehr-DÜ · eh BLUH',
    ['scene', 'que', 'soudure'], FCVDR),
  sent(1003, 'Une dame a trouvé mon sac.', 'A lady found my bag.',
    '/yn dam a tʁu.ve mɔ̃ sak/', 'ün DAMM a troo-vay mohⁿ SAK', ['scene', 'court']),
  sent(1004, 'La dame qui a trouvé mon sac travaille au café.',
    'The lady who found my bag works at the café.',
    '/la dam ki a tʁu.ve mɔ̃ sak tʁa.vaj o ka.fe/',
    'lah damm kee a troo-vay mohⁿ SAK · trah-vahy oh kah-FAY',
    ['scene', 'qui', 'soudure'], FCVDR),
  sent(1005, 'Le bureau ferme à dix-sept heures.', 'The office closes at five.',
    '/lə by.ʁo fɛʁm a di.sɛ.tœʁ/', 'luh bü-ROH FEHRM ah dee-seh-TUHR', ['scene', 'court']),
  sent(1006, 'Le bureau qui garde les objets trouvés ferme à dix-sept heures.',
    'The office that keeps lost property closes at five.',
    '/lə by.ʁo ki ɡaʁd le zɔb.ʒɛ tʁu.ve fɛʁm a di.sɛ.tœʁ/',
    'luh bü-roh kee gard lay zob-zheh troo-VAY · fehrm ah dee-seh-TUHR',
    ['scene', 'qui', 'soudure']),
  sent(1007, 'Voici le manteau que je cherche depuis lundi.',
    'Here is the coat I have been looking for since Monday.',
    '/vwa.si lə mɑ̃.to kə ʒə ʃɛʁʃ də.pɥi lœ̃.di/',
    'vwah-see luh mahⁿ-TOH · kuh zhuh shehrsh duh-püee luhⁿ-DEE', ['lecture', 'que']),
  sent(1008, "L'employée qui m'a reçu s'appelle madame Prévost.",
    'The clerk who dealt with me is called Madame Prévost.',
    '/lɑ̃.plwa.je ki ma ʁə.sy sa.pɛl ma.dam pʁe.vo/',
    'lahⁿ-plwah-YAY kee ma ruh-SÜ · sah-pel mah-damm pray-VOH', ['lecture', 'qui']),
  sent(1009, 'Les clés qui étaient dans le sac ne sont plus là.',
    'The keys that were in the bag are no longer there.',
    '/le kle ki e.tɛ dɑ̃ lə sak nə sɔ̃ ply la/',
    'lay KLAY kee ay-teh dahⁿ luh SAK · nuh sohⁿ plü LAH', ['lecture', 'qui']),
  sent(1010, 'Le formulaire que tu remplis reste au bureau.',
    'The form you fill in stays at the office.',
    '/lə fɔʁ.my.lɛʁ kə ty ʁɑ̃.pli ʁɛst o by.ʁo/',
    'luh for-mü-LEHR kuh tü rahⁿ-PLEE · rest oh bü-ROH', ['lecture', 'que']),
  sent(1011, "J'ai retrouvé le parapluie que j'avais oublié dans le métro.",
    'I got back the umbrella I had left on the metro.',
    '/ʒe ʁə.tʁu.ve lə pa.ʁa.plɥi kə ʒa.vɛ.zu.bli.je dɑ̃ lə me.tʁo/',
    'zhay ruh-troo-vay luh pah-rah-PLÜEE · kuh zhah-veh oo-blee-AY dahⁿ luh may-TROH',
    ['lecture', 'que']),
  sent(1012, 'Le train qui part à midi passe par Laval.',
    'The train that leaves at noon goes through Laval.',
    '/lə tʁɛ̃ ki paʁ a mi.di pas paʁ la.val/',
    'luh TREHⁿ kee par ah mee-DEE · pass par lah-VAL', ['lecture', 'qui']),
  rule(1013, 'Deux phrases, un seul nom : le petit mot remplace le nom.',
    'Two sentences, one shared noun: the little word stands in for the noun.',
    'Que fait une relative ?',
    "On ne répète pas le nom : qui ou que le reprend. EN: the noun is not repeated; qui or que picks it up.",
    ['regle', 'relative']),
  sent(1014, 'Voici la carte que tu cherches.', 'Here is the card you are looking for.',
    '/vwa.si la kaʁt kə ty ʃɛʁʃ/', 'vwah-see lah KART kuh tü SHEHRSH', ['lecture', 'que']),
  sent(1015, "La personne qui a déposé le sac n'a pas laissé son nom.",
    'The person who handed the bag in did not leave a name.',
    '/la pɛʁ.sɔn ki a de.po.ze lə sak na pa lɛ.se sɔ̃ nɔ̃/',
    'lah pehr-SON kee a day-poh-zay luh SAK · na pah leh-say sohⁿ NOHⁿ',
    ['lecture', 'qui']),
  sent(1016, 'Le sac contient un livre et des lunettes.',
    'The bag contains a book and a pair of glasses.',
    '/lə sak kɔ̃.tjɛ̃ ɛ̃ livʁ e de ly.nɛt/',
    'luh sak kohⁿ-tyehⁿ uhⁿ LEEVR · ay day lü-NET', ['scene', 'court']),
  sent(1017, "Le sac que j'ai perdu contient un livre et des lunettes.",
    'The bag I lost contains a book and a pair of glasses.',
    '/lə sak kə ʒe pɛʁ.dy kɔ̃.tjɛ̃ ɛ̃ livʁ e de ly.nɛt/',
    'luh sak kuh zhay pehr-DÜ · kohⁿ-tyehⁿ uhⁿ LEEVR ay day lü-NET',
    ['scene', 'que', 'soudure'], FCVDR),
];

/* ── ACT 2 · QUI, LE SUJET · 1018-1036 ───────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1018, 'Le voisin qui habite au-dessus joue de la guitare.',
    'The neighbour who lives upstairs plays the guitar.',
    '/lə vwa.zɛ̃ ki a.bit o.də.sy ʒu də la ɡi.taʁ/',
    'luh vwah-ZEHⁿ kee ah-beet oh-duh-SÜ · zhoo duh lah ghee-TAR', ['qui', 'sujet']),
  sent(1019, 'Les voisins qui habitent au-dessus jouent de la guitare.',
    'The neighbours who live upstairs play the guitar.',
    '/le vwa.zɛ̃ ki a.bit o.də.sy ʒu də la ɡi.taʁ/',
    'lay vwah-ZEHⁿ kee ah-beet oh-duh-SÜ · zhoo duh lah ghee-TAR',
    ['qui', 'sujet', 'accord-verbe']),
  sent(1020, 'La rue qui mène à la gare est fermée.',
    'The street that leads to the station is closed.',
    '/la ʁy ki mɛn a la ɡaʁ ɛ fɛʁ.me/',
    'lah RÜ kee men ah lah GAR · eh fehr-MAY', ['qui', 'sujet', 'chose']),
  sent(1021, 'Le bus qui passe devant chez moi arrive toutes les dix minutes.',
    'The bus that goes past my place comes every ten minutes.',
    '/lə bys ki pas də.vɑ̃ ʃe mwa a.ʁiv tut le di mi.nyt/',
    'luh BÜSS kee pass duh-vahⁿ shay MWAH · ah-reev toot lay dee mee-NÜT',
    ['qui', 'sujet', 'chose']),
  sent(1022, "C'est moi qui ai rempli le formulaire.", 'I am the one who filled in the form.',
    '/sɛ mwa ki e ʁɑ̃.pli lə fɔʁ.my.lɛʁ/',
    'seh MWAH kee ay rahⁿ-PLEE · luh for-mü-LEHR', ['qui', 'sujet', 'accord-verbe']),
  sent(1023, "C'est toi qui as trouvé le sac.", 'You are the one who found the bag.',
    '/sɛ twa ki a tʁu.ve lə sak/',
    'seh TWAH kee ah troo-VAY · luh SAK', ['qui', 'sujet', 'accord-verbe'], FCVDR),
  sent(1024, 'Le collègue qui me remplace arrive demain.',
    'The colleague who is standing in for me arrives tomorrow.',
    '/lə kɔ.lɛɡ ki mə ʁɑ̃.plas a.ʁiv də.mɛ̃/',
    'luh koh-LEG kee muh rahⁿ-PLASS · ah-reev duh-MEHⁿ', ['qui', 'sujet', 'pronom']),
  sent(1025, 'La chanson qui passe à la radio vient du Sénégal.',
    'The song that is on the radio comes from Senegal.',
    '/la ʃɑ̃.sɔ̃ ki pas a la ʁa.djo vjɛ̃ dy se.ne.ɡal/',
    'lah shahⁿ-SOHⁿ kee pass ah lah rah-DYOH · vyehⁿ dü say-nay-GAL',
    ['qui', 'sujet', 'chose']),
  gap(1026, 'Le garçon qui promène le chien habite en face.',
    'The boy who walks the dog lives across the street.',
    '/lə ɡaʁ.sɔ̃ ki pʁɔ.mɛn lə ʃjɛ̃ a.bit ɑ̃ fas/',
    'luh gar-SOHⁿ kee proh-men luh SHYEHⁿ · ah-beet ahⁿ FASS',
    'Le garçon ___ promène le chien habite en face. (rien derrière : pas de sujet)',
    "Pas de sujet derrière : c'est qui. EN: no subject behind it, so qui.",
    ['qui', 'sujet', 'test']),
  sent(1027, 'Les gens qui attendent depuis une heure commencent à râler.',
    'The people who have been waiting an hour are starting to grumble.',
    '/le ʒɑ̃ ki a.tɑ̃d də.pɥi yn œʁ kɔ.mɑ̃s a ʁa.le/',
    'lay ZHAHⁿ kee ah-tahⁿd duh-püee ün UHR · koh-mahⁿss ah rah-LAY',
    ['qui', 'sujet', 'personne']),
  sent(1028, "Une amie qui travaille à Bruxelles m'a écrit hier.",
    'A friend who works in Brussels wrote to me yesterday.',
    '/y.na.mi ki tʁa.vaj a bʁy.sɛl ma e.kʁi jɛʁ/',
    'ü-nah-MEE kee trah-vahy ah brü-SEL · ma ay-kree YEHR', ['qui', 'sujet', 'personne']),
  sent(1029, "Le paquet qui est arrivé ce matin n'est pas pour toi.",
    'The parcel that arrived this morning is not for you.',
    '/lə pa.kɛ ki ɛ.ta.ʁi.ve sə ma.tɛ̃ nɛ pa puʁ twa/',
    'luh pah-KEH kee eh tah-ree-vay suh mah-TEHⁿ · neh pah poor TWAH',
    ['qui', 'sujet', 'chose']),
  sent(1030, "Je connais quelqu'un qui répare les vélos.",
    'I know someone who repairs bikes.',
    '/ʒə kɔ.nɛ kɛl.kœ̃ ki ʁe.paʁ le ve.lo/',
    'zhuh koh-neh kel-KUHⁿ · kee ray-par lay vay-LOH', ['qui', 'sujet', 'personne']),
  sent(1031, 'Les documents qui manquent sont chez le notaire.',
    'The documents that are missing are at the solicitor.',
    '/le dɔ.ky.mɑ̃ ki mɑ̃k sɔ̃ ʃe lə nɔ.tɛʁ/',
    'lay doh-kü-MAHⁿ kee mahⁿk · sohⁿ shay luh noh-TEHR', ['qui', 'sujet', 'chose']),
  sent(1032, 'Le chien qui aboie la nuit appartient au voisin.',
    'The dog that barks at night belongs to the neighbour.',
    '/lə ʃjɛ̃ ki a.bwa la nɥi a.paʁ.tjɛ̃ o vwa.zɛ̃/',
    'luh SHYEHⁿ kee ah-bwah lah NÜEE · ah-par-tyehⁿ oh vwah-ZEHⁿ',
    ['qui', 'sujet', 'chose'], FCVDR),
  sent(1033, 'Prends le train qui part à sept heures.',
    'Take the train that leaves at seven.',
    '/pʁɑ̃ lə tʁɛ̃ ki paʁ a sɛ.tœʁ/',
    'prahⁿ luh TREHⁿ · kee par ah seh-TUHR', ['qui', 'sujet', 'chose']),
  rule(1034, "qui est le sujet de son verbe, et rien ne se met entre eux, sauf un petit pronom.",
    'qui is the subject of its verb, and nothing comes between them except a short pronoun.',
    'Qu\'est-ce qui suit qui ?',
    "Le serveur qui NOUS apporte l'addition : nous se glisse, mais aucun sujet. EN: an object pronoun may slip in; a subject may not.",
    ['regle', 'qui']),
  sent(1035, "Le serveur qui nous apporte l'addition est très rapide.",
    'The waiter who brings us the bill is very quick.',
    '/lə sɛʁ.vœʁ ki nu.za.pɔʁt la.di.sjɔ̃ ɛ tʁɛ ʁa.pid/',
    'luh sehr-VUHR kee noo-zah-port lah-dee-SYOHⁿ · eh treh rah-PEED',
    ['qui', 'sujet', 'pronom']),
  sent(1036, "La lettre qui m'attend à la maison vient de l'assurance.",
    'The letter waiting for me at home is from the insurance company.',
    '/la lɛtʁ ki ma.tɑ̃ a la mɛ.zɔ̃ vjɛ̃ də la.sy.ʁɑ̃s/',
    'lah LETR kee mah-tahⁿ ah lah meh-ZOHⁿ · vyehⁿ duh lah-sü-RAHⁿSS',
    ['qui', 'sujet', 'pronom']),
];

/* ── ACT 3 · QUE, LE COMPLÉMENT · 1037-1055 ──────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1037, 'Le film que nous regardons ce soir dure trois heures.',
    'The film we are watching tonight lasts three hours.',
    '/lə film kə nu ʁə.ɡaʁ.dɔ̃ sə swaʁ dyʁ tʁwa.zœʁ/',
    'luh FEELM kuh noo ruh-gar-dohⁿ suh SWAHR · dür trwah-ZUHR', ['que', 'complement']),
  sent(1038, "Les photos que tu m'envoies sont magnifiques.",
    'The photos you send me are wonderful.',
    '/le fɔ.to kə ty mɑ̃.vwa sɔ̃ ma.ɲi.fik/',
    'lay foh-TOH kuh tü mahⁿ-VWAH · sohⁿ mah-nyee-FEEK', ['que', 'complement']),
  sent(1039, "Le café que je bois le matin vient d'Éthiopie.",
    'The coffee I drink in the morning comes from Ethiopia.',
    '/lə ka.fe kə ʒə bwa lə ma.tɛ̃ vjɛ̃ de.tjɔ.pi/',
    'luh kah-FAY kuh zhuh bwah luh mah-TEHⁿ · vyehⁿ day-tyoh-PEE',
    ['que', 'complement'], FCVDR),
  sent(1040, 'La chanson que tout le monde connaît vient des années quatre-vingt.',
    'The song everybody knows is from the eighties.',
    '/la ʃɑ̃.sɔ̃ kə tu lə mɔ̃d kɔ.nɛ vjɛ̃ de.za.ne ka.tʁə.vɛ̃/',
    'lah shahⁿ-SOHⁿ kuh too luh mohⁿd koh-NEH · vyehⁿ day-zah-nay ka-truh-VEHⁿ',
    ['que', 'complement']),
  sent(1041, 'Le sac que la dame a rapporté est sur une étagère.',
    'The bag the lady brought back is on a shelf.',
    '/lə sak kə la dam a ʁa.pɔʁ.te ɛ syʁ y.ne.ta.ʒɛʁ/',
    'luh SAK kuh lah damm ah rah-por-TAY · eh sür ü-nay-tah-ZHEHR',
    ['que', 'complement', 'scene']),
  gap(1042, 'La maison que nous louons cet été donne sur la mer.',
    'The house we are renting this summer looks out over the sea.',
    '/la mɛ.zɔ̃ kə nu lu.ɔ̃ sɛ.te.te dɔn syʁ la mɛʁ/',
    'lah meh-ZOHⁿ kuh noo loo-OHⁿ seh-tay-TAY · donn sür lah MEHR',
    'La maison ___ nous louons cet été donne sur la mer. (nous derrière : un sujet)',
    "Un nouveau sujet derrière : c'est que. EN: a new subject behind it, so que.",
    ['que', 'complement', 'test']),
  sent(1043, 'Voici le formulaire que tu dois signer.',
    'Here is the form you have to sign.',
    '/vwa.si lə fɔʁ.my.lɛʁ kə ty dwa si.ɲe/',
    'vwah-see luh for-mü-LEHR · kuh tü dwah see-NYAY', ['que', 'complement', 'scene']),
  sent(1044, 'Les gens que je croise le matin vont tous au marché.',
    'The people I pass in the morning are all going to the market.',
    '/le ʒɑ̃ kə ʒə kʁwaz lə ma.tɛ̃ vɔ̃ tus o maʁ.ʃe/',
    'lay ZHAHⁿ kuh zhuh krwahz luh mah-TEHⁿ · vohⁿ tooss oh mar-SHAY',
    ['que', 'complement', 'personne']),
  sent(1045, 'Le numéro que tu cherches est au dos de la carte.',
    'The number you are looking for is on the back of the card.',
    '/lə ny.me.ʁo kə ty ʃɛʁʃ ɛ o do də la kaʁt/',
    'luh nü-may-ROH kuh tü SHEHRSH · eh oh doh duh lah KART',
    ['que', 'complement', 'chose']),
  sent(1046, "La ville que je préfère au Québec, c'est Trois-Rivières.",
    'My favourite town in Quebec is Trois-Rivières.',
    '/la vil kə ʒə pʁe.fɛʁ o ke.bɛk sɛ tʁwa.ʁi.vjɛʁ/',
    'lah VEEL kuh zhuh pray-FEHR oh kay-BEK · seh trwah-ree-VYEHR',
    ['que', 'complement', 'chose']),
  sent(1047, 'Le train que nous prenons part du quai numéro trois.',
    'The train we are taking leaves from platform three.',
    '/lə tʁɛ̃ kə nu pʁə.nɔ̃ paʁ dy kɛ ny.me.ʁo tʁwa/',
    'luh TREHⁿ kuh noo pruh-nohⁿ · par dü keh nü-may-roh TRWAH',
    ['que', 'complement', 'chose'], FCVDR),
  sent(1048, "L'appartement que mes parents louent donne sur la cour.",
    'The flat my parents rent looks onto the courtyard.',
    '/la.paʁ.tə.mɑ̃ kə me pa.ʁɑ̃ lu dɔn syʁ la kuʁ/',
    'lah-par-tuh-MAHⁿ kuh may pah-rahⁿ LOO · don sür lah KOOR',
    ['que', 'complement', 'chose']),
  sent(1049, "Le livre que tu m'as prêté est vraiment bon.",
    'The book you lent me is really good.',
    '/lə livʁ kə ty ma pʁɛ.te ɛ vʁɛ.mɑ̃ bɔ̃/',
    'luh LEEVR kuh tü ma preh-TAY · eh vreh-mahⁿ BOHⁿ', ['que', 'complement']),
  rule(1050, 'que est le complément, et un nouveau sujet arrive juste derrière.',
    'que is the object, and a new subject arrives right behind it.',
    "Qu'est-ce qui suit que ?",
    "Le film que NOUS regardons : nous est le sujet du verbe. EN: the subject of the clause comes right after que.",
    ['regle', 'que']),
  sent(1051, 'Les mots que personne ne comprend restent au tableau.',
    'The words nobody understands stay on the board.',
    '/le mo kə pɛʁ.sɔn nə kɔ̃.pʁɑ̃ ʁɛst o ta.blo/',
    'lay MOH kuh pehr-son nuh kohⁿ-PRAHⁿ · rest oh tah-BLOH',
    ['que', 'complement', 'chose']),
  sent(1052, 'Le pain que la boulangère met de côté est pour nous.',
    'The bread the baker sets aside is for us.',
    '/lə pɛ̃ kə la bu.lɑ̃.ʒɛʁ mɛ də ko.te ɛ puʁ nu/',
    'luh PEHⁿ kuh lah boo-lahⁿ-zhehr meh duh koh-TAY · eh poor NOO',
    ['que', 'complement', 'chose']),
  sent(1053, 'Le message que tu attends arrivera ce soir.',
    'The message you are waiting for will arrive tonight.',
    '/lə me.saʒ kə ty a.tɑ̃ a.ʁi.və.ʁa sə swaʁ/',
    'luh may-SAZH kuh tü ah-TAHⁿ · ah-ree-vuh-rah suh SWAHR',
    ['que', 'complement', 'chose']),
  sent(1054, 'Le vélo que mon frère répare a vingt ans.',
    'The bike my brother is fixing is twenty years old.',
    '/lə ve.lo kə mɔ̃ fʁɛʁ ʁe.paʁ a vɛ̃.tɑ̃/',
    'luh vay-LOH kuh mohⁿ frehr ray-PAR · ah vehⁿ-TAHⁿ',
    ['que', 'complement', 'chose']),
  sent(1055, 'Le dossier que le bureau garde reste ouvert trente jours.',
    'The file the office keeps stays open for thirty days.',
    '/lə dɔ.sje kə lə by.ʁo ɡaʁd ʁɛst u.vɛʁ tʁɑ̃t ʒuʁ/',
    'luh doh-SYAY kuh luh bü-roh GARD · rest oo-vehr trahⁿt ZHOOR',
    ['que', 'complement', 'scene']),
];

/* ── ACT 4 · LE TEST EN UNE SECONDE · 1056-1074 ──────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1056, 'La femme qui parle au téléphone est ma cheffe.',
    'The woman who is on the phone is my boss.',
    '/la fam ki paʁl o te.le.fɔn ɛ ma ʃɛf/',
    'lah FAMM kee parl oh tay-lay-FON · eh mah SHEF', ['paire', 'qui', 'test']),
  sent(1057, 'La femme que tu vois au téléphone est ma cheffe.',
    'The woman you can see on the phone is my boss.',
    '/la fam kə ty vwa o te.le.fɔn ɛ ma ʃɛf/',
    'lah FAMM kuh tü vwah oh tay-lay-FON · eh mah SHEF', ['paire', 'que', 'test']),
  sent(1058, 'Le colis qui arrive demain vient de Lyon.',
    'The parcel that arrives tomorrow comes from Lyon.',
    '/lə kɔ.li ki a.ʁiv də.mɛ̃ vjɛ̃ də ljɔ̃/',
    'luh koh-LEE kee ah-reev duh-MEHⁿ · vyehⁿ duh LYOHⁿ', ['paire', 'qui', 'test']),
  sent(1059, "Le colis que j'attends vient de Lyon.",
    'The parcel I am waiting for comes from Lyon.',
    '/lə kɔ.li kə ʒa.tɑ̃ vjɛ̃ də ljɔ̃/',
    'luh koh-LEE kuh zhah-TAHⁿ · vyehⁿ duh LYOHⁿ', ['paire', 'que', 'test']),
  sent(1060, 'Le chemin qui monte au parc est plus court.',
    'The path that goes up to the park is shorter.',
    '/lə ʃə.mɛ̃ ki mɔ̃t o paʁk ɛ ply kuʁ/',
    'luh shuh-MEHⁿ kee mohⁿt oh PARK · eh plü KOOR', ['paire', 'qui', 'test']),
  sent(1061, 'Le chemin que nous prenons monte au parc.',
    'The path we are taking goes up to the park.',
    '/lə ʃə.mɛ̃ kə nu pʁə.nɔ̃ mɔ̃t o paʁk/',
    'luh shuh-MEHⁿ kuh noo pruh-NOHⁿ · mohⁿt oh PARK', ['paire', 'que', 'test']),
  sent(1062, "L'étudiante qui pose des questions apprend plus vite.",
    'The student who asks questions learns faster.',
    '/le.ty.djɑ̃t ki poz de kɛs.tjɔ̃ a.pʁɑ̃ ply vit/',
    'lay-tü-DYAHⁿT kee pohz day kes-TYOHⁿ · ah-prahⁿ plü VEET',
    ['paire', 'qui', 'test'], FCVDR),
  sent(1063, "L'étudiante que le prof interroge apprend plus vite.",
    'The student the teacher questions learns faster.',
    '/le.ty.djɑ̃t kə lə pʁɔf ɛ̃.te.ʁɔʒ a.pʁɑ̃ ply vit/',
    'lay-tü-DYAHⁿT kuh luh prof ehⁿ-tay-ROZH · ah-prahⁿ plü VEET',
    ['paire', 'que', 'test'], FCVDR),
  gap(1064, "L'homme qui répare la porte est mon voisin.",
    'The man who is fixing the door is my neighbour.',
    '/lɔm ki ʁe.paʁ la pɔʁt ɛ mɔ̃ vwa.zɛ̃/',
    'LOMM kee ray-PAR lah PORT · eh mohⁿ vwah-ZEHⁿ',
    "L'homme ___ répare la porte est mon voisin. (regarde derrière : personne)",
    "Pas de sujet derrière, donc qui. EN: nothing behind it, so qui.",
    ['test', 'qui']),
  gap(1065, "L'homme que tu vois à la porte est mon voisin.",
    'The man you can see at the door is my neighbour.',
    '/lɔm kə ty vwa a la pɔʁt ɛ mɔ̃ vwa.zɛ̃/',
    'LOMM kuh tü vwah ah lah PORT · eh mohⁿ vwah-ZEHⁿ',
    "L'homme ___ tu vois à la porte est mon voisin. (regarde derrière : tu)",
    "Un sujet derrière, donc que. EN: a subject behind it, so que.",
    ['test', 'que']),
  gap(1066, 'Le gâteau que nous préparons sent déjà bon.',
    'The cake we are making already smells good.',
    '/lə ɡa.to kə nu pʁe.pa.ʁɔ̃ sɑ̃ de.ʒa bɔ̃/',
    'luh gah-TOH kuh noo pray-pah-ROHⁿ · sahⁿ day-zhah BOHⁿ',
    'Le gâteau ___ nous préparons sent déjà bon. (regarde derrière : nous)',
    "Un sujet derrière, donc que. EN: a subject behind it, so que.",
    ['test', 'que']),
  sent(1067, 'Le repas qui nous attend à la maison sent très bon.',
    'The meal waiting for us at home smells very good.',
    '/lə ʁə.pa ki nu.za.tɑ̃ a la mɛ.zɔ̃ sɑ̃ tʁɛ bɔ̃/',
    'luh ruh-PAH kee noo-zah-tahⁿ ah lah meh-ZOHⁿ · sahⁿ treh BOHⁿ',
    ['paire', 'qui', 'pronom']),
  sent(1068, 'Le repas que ma mère prépare sent très bon.',
    'The meal my mother is making smells very good.',
    '/lə ʁə.pa kə ma mɛʁ pʁe.paʁ sɑ̃ tʁɛ bɔ̃/',
    'luh ruh-PAH kuh mah mehr pray-PAR · sahⁿ treh BOHⁿ', ['paire', 'que', 'test']),
  rule(1069, "Regarde juste derrière le petit mot. Personne : qui. Un sujet : que.",
    'Look just behind the little word. Nobody there: qui. A subject there: que.',
    'Comment choisir en une seconde ?',
    "Le test ne demande rien sur le nom devant. EN: the test asks nothing about the noun in front.",
    ['regle', 'test']),
  sent(1070, 'Le voisin qui me dérange met la musique trop fort.',
    'The neighbour who bothers me plays his music too loud.',
    '/lə vwa.zɛ̃ ki mə de.ʁɑ̃ʒ mɛ la my.zik tʁo fɔʁ/',
    'luh vwah-ZEHⁿ kee muh day-RAHⁿZH · meh lah mü-zeek troh FOR',
    ['paire', 'qui', 'pronom']),
  sent(1071, 'Le voisin que je dérange travaille de nuit.',
    'The neighbour I am bothering works nights.',
    '/lə vwa.zɛ̃ kə ʒə de.ʁɑ̃ʒ tʁa.vaj də nɥi/',
    'luh vwah-ZEHⁿ kuh zhuh day-RAHⁿZH · trah-vahy duh NÜEE', ['paire', 'que', 'test']),
  sent(1072, 'Le bus qui vient de passer allait au centre-ville.',
    'The bus that has just gone past was going to the town centre.',
    '/lə bys ki vjɛ̃ də pa.se a.lɛ o sɑ̃tʁ.vil/',
    'luh BÜSS kee vyehⁿ duh pa-SAY · ah-leh oh sahⁿtr-VEEL', ['paire', 'qui']),
  sent(1073, 'Le bus que nous avons manqué allait au centre-ville.',
    'The bus we missed was going to the town centre.',
    '/lə bys kə nu.za.vɔ̃ mɑ̃.ke a.lɛ o sɑ̃tʁ.vil/',
    'luh BÜSS kuh noo-zah-vohⁿ mahⁿ-KAY · ah-leh oh sahⁿtr-VEEL', ['paire', 'que']),
  sent(1074, "L'histoire que tout le monde raconte est vraie.",
    'The story everybody tells is true.',
    '/lis.twaʁ kə tu lə mɔ̃d ʁa.kɔ̃t ɛ vʁɛ/',
    'lees-TWAHR kuh too luh mohⁿd rah-KOHⁿT · eh VREH', ['paire', 'que']),
];

/* ── ACT 5 · QUI NE TOMBE JAMAIS · 1075-1091 ─────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1075, "L'ami qui arrive ce soir vient de Dakar.",
    'The friend who is arriving tonight is from Dakar.',
    '/la.mi ki a.ʁiv sə swaʁ vjɛ̃ də da.kaʁ/',
    'lah-MEE kee ah-reev suh SWAHR · vyehⁿ duh dah-KAR', ['elision', 'qui']),
  sent(1076, "L'ami qu'Awa attend vient de Dakar.",
    'The friend Awa is waiting for is from Dakar.',
    '/la.mi ka.wa a.tɑ̃ vjɛ̃ də da.kaʁ/',
    'lah-MEE kah-wah ah-TAHⁿ · vyehⁿ duh dah-KAR', ['elision', 'que'], FCVDR),
  sent(1077, 'La voiture qui est devant la porte bloque le passage.',
    'The car that is in front of the door is blocking the way.',
    '/la vwa.tyʁ ki ɛ də.vɑ̃ la pɔʁt blɔk lə pa.saʒ/',
    'lah vwah-TÜR kee eh duh-vahⁿ lah PORT · blok luh pah-SAZH',
    ['elision', 'qui'], FCVDR),
  sent(1078, "La voiture qu'on répare appartient au voisin.",
    'The car being repaired belongs to the neighbour.',
    '/la vwa.tyʁ kɔ̃ ʁe.paʁ a.paʁ.tjɛ̃ o vwa.zɛ̃/',
    'lah vwah-TÜR kohⁿ ray-PAR · ah-par-tyehⁿ oh vwah-ZEHⁿ', ['elision', 'que']),
  sent(1079, "Le sac qu'elle a rapporté est derrière le comptoir.",
    'The bag she brought back is behind the counter.',
    '/lə sak kɛ.la ʁa.pɔʁ.te ɛ dɛ.ʁjɛʁ lə kɔ̃.twaʁ/',
    'luh SAK keh-lah rah-por-TAY · eh deh-ryehr luh kohⁿ-TWAHR',
    ['elision', 'que', 'scene']),
  sent(1080, "Le message qu'on attend arrivera ce soir.",
    'The message we are waiting for will arrive tonight.',
    '/lə me.saʒ kɔ̃.na.tɑ̃ a.ʁi.və.ʁa sə swaʁ/',
    'luh may-SAZH kohⁿ-nah-TAHⁿ · ah-ree-vuh-rah suh SWAHR', ['elision', 'que']),
  sent(1081, "Le train qu'ils prennent part à sept heures.",
    'The train they are taking leaves at seven.',
    '/lə tʁɛ̃ kil pʁɛn paʁ a sɛ.tœʁ/',
    'luh TREHⁿ keel pren · par ah seh-TUHR', ['elision', 'que']),
  gap(1082, "Le bus qu'ils attendent a dix minutes de retard.",
    'The bus they are waiting for is ten minutes late.',
    '/lə bys kil.za.tɑ̃d a di mi.nyt də ʁə.taʁ/',
    'luh BÜSS keel-zah-TAHⁿD · ah dee mee-NÜT duh ruh-TAR',
    "Le bus ___ ils attendent a dix minutes de retard. (ils derrière, et une voyelle)",
    "Un sujet derrière, donc que, et il perd son e devant ils. EN: que, elided before a vowel.",
    ['elision', 'que', 'test']),
  rule(1083, "que perd son e devant une voyelle. qui ne le perd jamais.",
    'que drops its e before a vowel. qui never does.',
    'Lequel des deux peut se réduire ?',
    "qu'elle, qu'on, qu'il, qu'Awa : jamais qu'est pour qui est. EN: qui is never shortened.",
    ['regle', 'elision']),
  sent(1084, "Le pull qu'Anne a choisi est trop grand.",
    'The jumper Anne chose is too big.',
    '/lə pyl ka.na ʃwa.zi ɛ tʁo ɡʁɑ̃/',
    'luh PÜL kah-nah shwah-ZEE · eh troh GRAHⁿ', ['elision', 'que']),
  sent(1085, "L'homme qui a ouvert la porte n'a rien dit.",
    'The man who opened the door said nothing.',
    '/lɔm ki a u.vɛʁ la pɔʁt na ʁjɛ̃ di/',
    'LOM kee ah oo-vehr lah PORT · na ryehⁿ DEE', ['elision', 'qui']),
  sent(1086, "L'homme qu'il a vu portait un manteau gris.",
    'The man he saw was wearing a grey coat.',
    '/lɔm ki.la vy pɔʁ.tɛ ɛ̃ mɑ̃.to ɡʁi/',
    'LOM kee-lah VÜ · por-teh uhⁿ mahⁿ-toh GREE', ['elision', 'que']),
  sent(1087, "Le numéro qu'elle m'a donné ne répond pas.",
    'The number she gave me does not answer.',
    '/lə ny.me.ʁo kɛl ma dɔ.ne nə ʁe.pɔ̃ pa/',
    'luh nü-may-ROH kel ma doh-NAY · nuh ray-pohⁿ PAH', ['elision', 'que']),
  sent(1088, 'La question qui embête tout le monde reste sans réponse.',
    'The question that bothers everyone stays unanswered.',
    '/la kɛs.tjɔ̃ ki ɑ̃.bɛt tu lə mɔ̃d ʁɛst sɑ̃ ʁe.pɔ̃s/',
    'lah kes-TYOHⁿ kee ahⁿ-bet too luh MOHⁿD · rest sahⁿ ray-POHⁿSS',
    ['elision', 'qui']),
  sent(1089, "La question qu'elle pose embête tout le monde.",
    'The question she is asking bothers everyone.',
    '/la kɛs.tjɔ̃ kɛl poz ɑ̃.bɛt tu lə mɔ̃d/',
    'lah kes-TYOHⁿ kel POHZ · ahⁿ-bet too luh MOHⁿD', ['elision', 'que'], FCVDR),
  sent(1090, "Le café qu'Awa prépare le matin est très fort.",
    'The coffee Awa makes in the morning is very strong.',
    '/lə ka.fe ka.wa pʁe.paʁ lə ma.tɛ̃ ɛ tʁɛ fɔʁ/',
    'luh kah-FAY kah-wah pray-PAR luh mah-TEHⁿ · eh treh FOR', ['elision', 'que']),
  sent(1091, "Les papiers qu'on demande sont dans l'enveloppe.",
    'The papers being asked for are in the envelope.',
    '/le pa.pje kɔ̃ də.mɑ̃d sɔ̃ dɑ̃ lɑ̃.və.lɔp/',
    'lay pah-PYAY kohⁿ duh-MAHⁿD · sohⁿ dahⁿ lahⁿ-vuh-LOP', ['elision', 'que']),
];

/* ── ACT 6 · DES GENS ET DES CHOSES · 1092-1108 ──────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1092, 'La table qui est près de la fenêtre est libre.',
    'The table that is near the window is free.',
    '/la tabl ki ɛ pʁɛ də la fə.nɛtʁ ɛ libʁ/',
    'lah TABL kee eh preh duh lah fuh-NETR · eh LEEBR', ['antecedent', 'qui', 'chose']),
  sent(1093, 'Le monsieur qui est près de la fenêtre attend depuis une heure.',
    'The gentleman who is near the window has been waiting an hour.',
    '/lə mə.sjø ki ɛ pʁɛ də la fə.nɛtʁ a.tɑ̃ də.pɥi y.nœʁ/',
    'luh muh-SYUH kee eh preh duh lah fuh-NETR · ah-tahⁿ duh-püee ü-NUHR',
    ['antecedent', 'qui', 'personne']),
  sent(1094, 'Le livre que je lis parle de Montréal.',
    'The book I am reading is about Montreal.',
    '/lə livʁ kə ʒə li paʁl də mɔ̃.ʁe.al/',
    'luh LEEVR kuh zhuh LEE · parl duh mohⁿ-ray-AL',
    ['antecedent', 'que', 'chose'], FCVDR),
  sent(1095, "L'auteur que je lis vient de Montréal.",
    'The author I am reading is from Montreal.',
    '/lo.tœʁ kə ʒə li vjɛ̃ də mɔ̃.ʁe.al/',
    'loh-TUHR kuh zhuh LEE · vyehⁿ duh mohⁿ-ray-AL',
    ['antecedent', 'que', 'personne'], FCVDR),
  sent(1096, 'Les arbres qui bordent la rue perdent leurs feuilles en octobre.',
    'The trees that line the street lose their leaves in October.',
    '/le.zaʁbʁ ki bɔʁd la ʁy pɛʁd lœʁ fœj ɑ̃.nɔk.tɔbʁ/',
    'lay-ZARBR kee bord lah RÜ · pehrd luhr FUHY ahⁿ-nok-TOBR',
    ['antecedent', 'qui', 'chose']),
  sent(1097, 'Les enfants qui jouent dans la cour rentrent à cinq heures.',
    'The children who are playing in the yard come in at five.',
    '/le.zɑ̃.fɑ̃ ki ʒu dɑ̃ la kuʁ ʁɑ̃tʁ a sɛ̃.kœʁ/',
    'lay-zahⁿ-FAHⁿ kee zhoo dahⁿ lah KOOR · rahⁿtr ah sehⁿ-KUHR',
    ['antecedent', 'qui', 'personne']),
  rule(1098, 'qui et que servent aux gens et aux choses. Le nom devant ne décide rien.',
    'qui and que serve people and things alike. The noun in front decides nothing.',
    'Le nom devant change-t-il le choix ?',
    "L'anglais change de mot, who ou which. Le français, non. EN: English swaps the word; French does not.",
    ['regle', 'antecedent']),
  sent(1099, "Le sac qui est sur la chaise n'est pas à moi.",
    'The bag that is on the chair is not mine.',
    '/lə sak ki ɛ syʁ la ʃɛz nɛ pa.za mwa/',
    'luh SAK kee eh sür lah SHEHZ · neh pah-zah MWAH',
    ['antecedent', 'qui', 'chose']),
  sent(1100, "La dame qui est sur la photo, c'est ma grand-mère.",
    'The lady in the photo is my grandmother.',
    '/la dam ki ɛ syʁ la fɔ.to sɛ ma ɡʁɑ̃.mɛʁ/',
    'lah damm kee eh sür lah foh-TOH · seh mah grahⁿ-MEHR',
    ['antecedent', 'qui', 'personne']),
  sent(1101, 'La machine que le technicien répare date de deux mille dix.',
    'The machine the technician is repairing dates from twenty ten.',
    '/la ma.ʃin kə lə tɛk.ni.sjɛ̃ ʁe.paʁ dat də dø mil dis/',
    'lah mah-SHEEN kuh luh tek-nee-syehⁿ ray-PAR · dat duh duh meel DEESS',
    ['antecedent', 'que', 'chose']),
  sent(1102, 'Le technicien que nous attendons arrive demain.',
    'The technician we are waiting for arrives tomorrow.',
    '/lə tɛk.ni.sjɛ̃ kə nu.za.tɑ̃.dɔ̃ a.ʁiv də.mɛ̃/',
    'luh tek-nee-SYEHⁿ kuh noo-zah-tahⁿ-DOHⁿ · ah-reev duh-MEHⁿ',
    ['antecedent', 'que', 'personne']),
  sent(1103, "Le fleuve qui traverse la ville s'appelle le Saint-Laurent.",
    'The river that runs through the city is called the Saint Lawrence.',
    '/lə flœv ki tʁa.vɛʁs la vil sa.pɛl lə sɛ̃.lo.ʁɑ̃/',
    'luh FLUHV kee trah-vehrs lah VEEL · sah-pel luh sehⁿ-loh-RAHⁿ',
    ['antecedent', 'qui', 'chose']),
  sent(1104, 'La femme qui traverse la rue porte un grand carton.',
    'The woman crossing the street is carrying a big box.',
    '/la fam ki tʁa.vɛʁs la ʁy pɔʁt ɛ̃ ɡʁɑ̃ kaʁ.tɔ̃/',
    'lah FAMM kee trah-vehrs lah RÜ · port uhⁿ grahⁿ kar-TOHⁿ',
    ['antecedent', 'qui', 'personne']),
  gap(1105, "La voisine que je croise le matin travaille à l'hôpital.",
    'The neighbour I pass in the morning works at the hospital.',
    '/la vwa.zin kə ʒə kʁwaz lə ma.tɛ̃ tʁa.vaj a lo.pi.tal/',
    'lah vwah-ZEEN kuh zhuh KRWAHZ luh mah-TEHⁿ · trah-vahy ah loh-pee-TAL',
    "La voisine ___ je croise le matin travaille à l'hôpital. (une personne, et je derrière)",
    "Une personne ne donne pas qui : c'est je derrière qui donne que. EN: the person changes nothing; the subject behind decides.",
    ['antecedent', 'que', 'test']),
  sent(1106, 'Le mot que je cherche ne me revient pas.',
    'The word I am looking for will not come back to me.',
    '/lə mo kə ʒə ʃɛʁʃ nə mə ʁə.vjɛ̃ pa/',
    'luh MOH kuh zhuh SHEHRSH · nuh muh ruh-vyehⁿ PAH',
    ['antecedent', 'que', 'chose']),
  sent(1107, "La personne que je cherche s'appelle Théo.",
    'The person I am looking for is called Théo.',
    '/la pɛʁ.sɔn kə ʒə ʃɛʁʃ sa.pɛl te.o/',
    'lah pehr-SON kuh zhuh SHEHRSH · sah-pel tay-OH',
    ['antecedent', 'que', 'personne']),
  sent(1108, 'Les chaussures qui font mal restent à la maison.',
    'Shoes that hurt stay at home.',
    '/le ʃo.syʁ ki fɔ̃ mal ʁɛst a la mɛ.zɔ̃/',
    'lay shoh-SÜR kee fohⁿ MAL · rest ah lah meh-ZOHⁿ',
    ['antecedent', 'qui', 'chose']),
];

/* ── ACT 7 · LE MOT QU'ON NE PEUT PAS SAUTER · 1109-1126 ─────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1109, 'Le livre que je lis est passionnant.',
    'The book I am reading is gripping.',
    '/lə livʁ kə ʒə li ɛ pa.sjɔ.nɑ̃/',
    'luh LEEVR kuh zhuh LEE · eh pah-syoh-NAHⁿ', ['motfixe', 'que'], FCVDR),
  sent(1110, 'La ville que nous visitons est très ancienne.',
    'The city we are visiting is very old.',
    '/la vil kə nu vi.zi.tɔ̃ ɛ tʁɛ.zɑ̃.sjɛn/',
    'lah VEEL kuh noo vee-zee-TOHⁿ · eh treh-zahⁿ-SYENN', ['motfixe', 'que']),
  sent(1111, "Les gens que tu connais habitent près d'ici.",
    'The people you know live near here.',
    '/le ʒɑ̃ kə ty kɔ.nɛ a.bit pʁɛ di.si/',
    'lay ZHAHⁿ kuh tü koh-NEH · ah-beet preh dee-SEE', ['motfixe', 'que']),
  sent(1112, 'Le film que tout le monde recommande sort vendredi.',
    'The film everybody recommends comes out on Friday.',
    '/lə film kə tu lə mɔ̃d ʁə.kɔ.mɑ̃d sɔʁ vɑ̃.dʁə.di/',
    'luh FEELM kuh too luh mohⁿd ruh-koh-MAHⁿD · sor vahⁿ-druh-DEE',
    ['motfixe', 'que']),
  gap(1113, 'Le film que je regarde est trop long.',
    'The film I am watching is too long.',
    '/lə film kə ʒə ʁə.ɡaʁd ɛ tʁo lɔ̃/',
    'luh FEELM kuh zhuh ruh-GARD · eh troh LOHⁿ',
    "Le film ___ je regarde est trop long. (l'anglais n'écrit rien ici)",
    "En anglais, the film I watch. En français, le mot reste. EN: English may write nothing here; French may not.",
    ['motfixe', 'que', 'test']),
  gap(1114, 'Les amis que tu invites arrivent ce soir.',
    'The friends you are inviting arrive tonight.',
    '/le.za.mi kə ty ɛ̃.vit a.ʁiv sə swaʁ/',
    'lay-zah-MEE kuh tü ehⁿ-VEET · ah-reev suh SWAHR',
    'Les amis ___ tu invites arrivent ce soir. (the friends you are inviting)',
    "L'anglais saute le mot, le français le garde. EN: English skips it; French keeps it.",
    ['motfixe', 'que', 'test']),
  gap(1115, 'La route que nous prenons longe la rivière.',
    'The road we are taking runs along the river.',
    '/la ʁut kə nu pʁə.nɔ̃ lɔ̃ʒ la ʁi.vjɛʁ/',
    'lah ROOT kuh noo pruh-NOHⁿ · lohⁿzh lah ree-VYEHR',
    'La route ___ nous prenons longe la rivière. (the road we are taking)',
    "Sans le mot, la phrase a deux sujets collés. EN: without it, two subjects sit side by side.",
    ['motfixe', 'que', 'test']),
  rule(1116, "L'anglais peut effacer le mot. Le français ne le peut jamais.",
    'English may delete the word. French may never delete it.',
    "Peut-on sauter que ?",
    "Le livre je lis n'existe pas : deux sujets se percutent. EN: two subjects collide and the sentence stops.",
    ['regle', 'motfixe']),
  sent(1117, "Le café que tu m'as servi était froid.",
    'The coffee you served me was cold.',
    '/lə ka.fe kə ty ma sɛʁ.vi e.tɛ fʁwa/',
    'luh kah-FAY kuh tü ma sehr-VEE · ay-teh FRWAH', ['motfixe', 'que']),
  sent(1118, 'Le chemin que nous avons pris était plus long.',
    'The way we took was longer.',
    '/lə ʃə.mɛ̃ kə nu.za.vɔ̃ pʁi e.tɛ ply lɔ̃/',
    'luh shuh-MEHⁿ kuh noo-zah-vohⁿ PREE · ay-teh plü LOHⁿ', ['motfixe', 'que']),
  sent(1119, "La chanson que j'écoute en ce moment vient d'Abidjan.",
    'The song I am listening to right now is from Abidjan.',
    '/la ʃɑ̃.sɔ̃ kə ʒe.kut ɑ̃ sə mɔ.mɑ̃ vjɛ̃ da.bi.dʒɑ̃/',
    'lah shahⁿ-SOHⁿ kuh zhay-koot ahⁿ suh moh-MAHⁿ · vyehⁿ dah-bee-DZHAHⁿ',
    ['motfixe', 'que', 'elision']),
  sent(1120, 'Les questions que le jury pose sont toujours les mêmes.',
    'The questions the panel asks are always the same.',
    '/le kɛs.tjɔ̃ kə lə ʒy.ʁi poz sɔ̃ tu.ʒuʁ le mɛm/',
    'lay kes-TYOHⁿ kuh luh zhü-ree POHZ · sohⁿ too-zhoor lay MEMM',
    ['motfixe', 'que']),
  sent(1121, 'Le train que nous attendons a vingt minutes de retard.',
    'The train we are waiting for is twenty minutes late.',
    '/lə tʁɛ̃ kə nu.za.tɑ̃.dɔ̃ a vɛ̃ mi.nyt də ʁə.taʁ/',
    'luh TREHⁿ kuh noo-zah-tahⁿ-DOHⁿ · ah vehⁿ mee-nüt duh ruh-TAR',
    ['motfixe', 'que'], FCVDR),
  sent(1122, "Le numéro que tu m'as laissé ne marche pas.",
    'The number you left me does not work.',
    '/lə ny.me.ʁo kə ty ma lɛ.se nə maʁʃ pa/',
    'luh nü-may-ROH kuh tü ma leh-SAY · nuh marsh PAH', ['motfixe', 'que']),
  sent(1123, "L'appartement que nous cherchons doit avoir un balcon.",
    'The flat we are looking for has to have a balcony.',
    '/la.paʁ.tə.mɑ̃ kə nu ʃɛʁ.ʃɔ̃ dwa.ta.vwaʁ ɛ̃ bal.kɔ̃/',
    'lah-par-tuh-MAHⁿ kuh noo shehr-SHOHⁿ · dwah-tah-vwahr uhⁿ bal-KOHⁿ',
    ['motfixe', 'que']),
  sent(1124, 'Le repas que mon père prépare le dimanche prend trois heures.',
    'The meal my father cooks on Sundays takes three hours.',
    '/lə ʁə.pa kə mɔ̃ pɛʁ pʁe.paʁ lə di.mɑ̃ʃ pʁɑ̃ tʁwa.zœʁ/',
    'luh ruh-PAH kuh mohⁿ pehr pray-par luh dee-MAHⁿSH · prahⁿ trwah-ZUHR',
    ['motfixe', 'que']),
  sent(1125, 'Le dossier que tu veux est dans le tiroir du bas.',
    'The file you want is in the bottom drawer.',
    '/lə dɔ.sje kə ty vø ɛ dɑ̃ lə ti.ʁwaʁ dy bɑ/',
    'luh doh-SYAY kuh tü VUH · eh dahⁿ luh tee-rwahr dü BAH', ['motfixe', 'que']),
  sent(1126, "Le vélo que j'utilise tous les jours a dix ans.",
    'The bike I use every day is ten years old.',
    '/lə ve.lo kə ʒy.ti.liz tu le ʒuʁ a di.zɑ̃/',
    'luh vay-LOH kuh zhü-tee-LEEZ too lay ZHOOR · ah dee-ZAHⁿ',
    ['motfixe', 'que', 'elision']),
];

/* ── ACT 8 · L'ACCORD DU PARTICIPE · 1127-1149 ───────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1127, "La lettre que j'ai écrite fait deux pages.",
    'The letter I wrote runs to two pages.',
    '/la lɛtʁ kə ʒe e.kʁit fɛ dø paʒ/',
    'lah LETR kuh zhay ay-KREET · feh duh PAHZH',
    ['accord', 'audible', 'que'], FCVDR),
  sent(1128, "Le mot que j'ai écrit tient sur une ligne.",
    'The note I wrote fits on one line.',
    '/lə mo kə ʒe e.kʁi tjɛ̃ syʁ yn liɲ/',
    'luh MOH kuh zhay ay-KREE · tyehⁿ sür ün LEENY',
    ['accord', 'audible', 'que']),
  sent(1129, "La table que j'ai mise dehors est trop lourde.",
    'The table I put outside is too heavy.',
    '/la tabl kə ʒe miz də.ɔʁ ɛ tʁo luʁd/',
    'lah TABL kuh zhay MEEZ duh-OR · eh troh LOORD',
    ['accord', 'audible', 'que'], FCVDR),
  sent(1130, "Le banc que j'ai mis dehors est trop lourd.",
    'The bench I put outside is too heavy.',
    '/lə bɑ̃ kə ʒe mi də.ɔʁ ɛ tʁo luʁ/',
    'luh BAHⁿ kuh zhay MEE duh-OR · eh troh LOOR',
    ['accord', 'audible', 'que']),
  sent(1131, "Les photos que j'ai prises à Québec sont dans l'album.",
    'The photos I took in Quebec City are in the album.',
    '/le fɔ.to kə ʒe pʁiz a ke.bɛk sɔ̃ dɑ̃ lal.bɔm/',
    'lay foh-TOH kuh zhay PREEZ ah kay-BEK · sohⁿ dahⁿ lal-BOM',
    ['accord', 'audible', 'que'], FCVDR),
  sent(1132, "Les livres que j'ai pris à la bibliothèque sont en retard.",
    'The books I took out of the library are overdue.',
    '/le livʁ kə ʒe pʁi a la bi.bli.jɔ.tɛk sɔ̃.tɑ̃ ʁə.taʁ/',
    'lay LEEVR kuh zhay PREE ah lah bee-blee-oh-TEK · sohⁿ-tahⁿ ruh-TAR',
    ['accord', 'audible', 'que']),
  sent(1133, 'La porte que le gardien a ouverte donne sur la cour.',
    'The door the caretaker opened leads onto the courtyard.',
    '/la pɔʁt kə lə ɡaʁ.djɛ̃ a u.vɛʁt dɔn syʁ la kuʁ/',
    'lah PORT kuh luh gar-dyehⁿ ah oo-VEHRT · don sür lah KOOR',
    ['accord', 'audible', 'que']),
  sent(1134, 'La phrase que la prof a dite est restée dans ma tête.',
    'The sentence the teacher said stayed in my head.',
    '/la fʁaz kə la pʁɔf a dit ɛ ʁɛs.te dɑ̃ ma tɛt/',
    'lah FRAHZ kuh lah prof ah DEET · eh res-tay dahⁿ mah TET',
    ['accord', 'audible', 'que']),
  sent(1135, "Les valises que nous avons faites hier sont dans l'auto.",
    'The cases we packed yesterday are in the car.',
    '/le va.liz kə nu.za.vɔ̃ fɛt jɛʁ sɔ̃ dɑ̃ lo.to/',
    'lay vah-LEEZ kuh noo-zah-vohⁿ FET yehr · sohⁿ dahⁿ loh-TOH',
    ['accord', 'audible', 'que']),
  sent(1136, "La langue que j'ai apprise à l'école, c'est l'espagnol.",
    'The language I learned at school is Spanish.',
    '/la lɑ̃ɡ kə ʒe a.pʁiz a le.kɔl sɛ lɛs.pa.ɲɔl/',
    'lah LAHⁿG kuh zhay ah-PREEZ ah lay-KOL · seh les-pah-NYOL',
    ['accord', 'audible', 'que']),
  sent(1137, 'La voiture que mon oncle a conduite pendant vingt ans roule encore.',
    'The car my uncle drove for twenty years still runs.',
    '/la vwa.tyʁ kə mɔ̃.nɔ̃kl a kɔ̃.dɥit pɑ̃.dɑ̃ vɛ̃.tɑ̃ ʁul ɑ̃.kɔʁ/',
    'lah vwah-TÜR kuh mohⁿ-nohⁿkl ah kohⁿ-DÜEET · pahⁿ-dahⁿ vehⁿ-tahⁿ rool ahⁿ-KOR',
    ['accord', 'audible', 'que']),
  sent(1138, "La lumière que tu as éteinte, c'est celle du couloir.",
    'The light you turned off is the corridor one.',
    '/la ly.mjɛʁ kə ty a e.tɛ̃t sɛ sɛl dy ku.lwaʁ/',
    'lah lü-MYEHR kuh tü ah ay-TEHⁿT · seh sel dü koo-LWAHR',
    ['accord', 'audible', 'que']),
  sent(1139, "La clé que j'ai perdue était dans ma poche.",
    'The key I lost was in my pocket.',
    '/la kle kə ʒe pɛʁ.dy e.tɛ dɑ̃ ma pɔʃ/',
    'lah KLAY kuh zhay pehr-DÜ · ay-teh dahⁿ mah POSH',
    ['accord', 'muet', 'que'], FCVDR),
  sent(1140, "Les clés que j'ai perdues étaient dans ma poche.",
    'The keys I lost were in my pocket.',
    '/le kle kə ʒe pɛʁ.dy e.tɛ dɑ̃ ma pɔʃ/',
    'lay KLAY kuh zhay pehr-DÜ · ay-teh dahⁿ mah POSH',
    ['accord', 'muet', 'que']),
  sent(1141, "La chanson que j'ai écoutée hier vient d'Abidjan.",
    'The song I listened to yesterday is from Abidjan.',
    '/la ʃɑ̃.sɔ̃ kə ʒe e.ku.te jɛʁ vjɛ̃ da.bi.dʒɑ̃/',
    'lah shahⁿ-SOHⁿ kuh zhay ay-koo-TAY yehr · vyehⁿ dah-bee-DZHAHⁿ',
    ['accord', 'muet', 'que']),
  sent(1142, "Les gens que j'ai vus hier m'ont reconnu.",
    'The people I saw yesterday recognised me.',
    '/le ʒɑ̃ kə ʒe vy jɛʁ mɔ̃ ʁə.kɔ.ny/',
    'lay ZHAHⁿ kuh zhay VÜ yehr · mohⁿ ruh-koh-NÜ',
    ['accord', 'muet', 'que']),
  gap(1143, "La carte que j'ai écrite est pour ma grand-mère.",
    'The card I wrote is for my grandmother.',
    '/la kaʁt kə ʒe e.kʁit ɛ puʁ ma ɡʁɑ̃.mɛʁ/',
    'lah KART kuh zhay ay-KREET · eh poor mah grahⁿ-MEHR',
    "La carte que j'ai ___ est pour ma grand-mère. (écrire · la carte est passée devant)",
    "Écrite, et le t se dit. EN: écrite, and the t is heard.",
    ['accord', 'audible', 'test']),
  gap(1144, "Les notes que j'ai prises pendant la réunion sont sur mon bureau.",
    'The notes I took during the meeting are on my desk.',
    '/le nɔt kə ʒe pʁiz pɑ̃.dɑ̃ la ʁe.y.njɔ̃ sɔ̃ syʁ mɔ̃ by.ʁo/',
    'lay NOTT kuh zhay PREEZ pahⁿ-dahⁿ lah ray-ü-NYOHⁿ · sohⁿ sür mohⁿ bü-ROH',
    "Les notes que j'ai ___ pendant la réunion sont sur mon bureau. (prendre · les notes sont devant)",
    "Prises, et le z se dit. EN: prises, and the z is heard.",
    ['accord', 'audible', 'test']),
  gap(1145, "La montre que j'ai perdue était un cadeau.",
    'The watch I lost was a present.',
    '/la mɔ̃tʁ kə ʒe pɛʁ.dy e.tɛ.tɛ̃ ka.do/',
    'lah MOHⁿTR kuh zhay pehr-DÜ · ay-teh-tuhⁿ kah-DOH',
    "La montre que j'ai ___ était un cadeau. (perdre · rien à entendre, tout à écrire)",
    "Perdue se dit comme perdu. Le e est pour l'œil. EN: nothing to hear; the e is for the eye.",
    ['accord', 'muet', 'test']),
  rule(1146, "Avec avoir, le participe s'accorde quand le complément est déjà passé devant.",
    'With avoir, the participle agrees when the object has already moved in front.',
    "Quand le participe change-t-il ?",
    "que fait passer le nom devant le verbe, donc le participe le suit. EN: que moves the noun in front, and the participle follows it.",
    ['regle', 'accord']),
  sent(1147, 'La chaise que tu as prise dans le salon est cassée.',
    'The chair you took from the living room is broken.',
    '/la ʃɛz kə ty a pʁiz dɑ̃ lə sa.lɔ̃ ɛ ka.se/',
    'lah SHEHZ kuh tü ah PREEZ dahⁿ luh sah-LOHⁿ · eh kah-SAY',
    ['accord', 'audible', 'que']),
  sent(1148, "La réponse que le bureau a donnée ne me convient pas.",
    'The answer the office gave does not suit me.',
    '/la ʁe.pɔ̃s kə lə by.ʁo a dɔ.ne nə mə kɔ̃.vjɛ̃ pa/',
    'lah ray-POHⁿSS kuh luh bü-roh ah doh-NAY · nuh muh kohⁿ-vyehⁿ PAH',
    ['accord', 'muet', 'que']),
  sent(1149, 'Les places que nous avons réservées sont au premier rang.',
    'The seats we booked are in the front row.',
    '/le plas kə nu.za.vɔ̃ ʁe.zɛʁ.ve sɔ̃.to pʁə.mje ʁɑ̃/',
    'lay PLASS kuh noo-zah-vohⁿ ray-zehr-VAY · sohⁿ-toh pruh-myay RAHⁿ',
    ['accord', 'muet', 'que']),
];

/* ── ACT 9 · AU MILIEU DE LA PHRASE · 1150-1166 ──────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1150, 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.',
    'My sister, who lives in Sherbrooke, arrives on Friday.',
    '/ma sœʁ ki a.bit a ʃɛʁ.bʁuk a.ʁiv vɑ̃.dʁə.di/',
    'mah SUHR · kee ah-beet ah shehr-BROOK · ah-reev vahⁿ-druh-DEE',
    ['milieu', 'virgule', 'qui'], FCVDR),
  sent(1151, 'Ma sœur qui habite à Sherbrooke arrive vendredi.',
    'The sister of mine who lives in Sherbrooke arrives on Friday.',
    '/ma sœʁ ki a.bit a ʃɛʁ.bʁuk a.ʁiv vɑ̃.dʁə.di/',
    'mah SUHR kee ah-beet ah shehr-BROOK · ah-reev vahⁿ-druh-DEE',
    ['milieu', 'virgule', 'qui']),
  sent(1152, 'Le bureau des objets trouvés, qui ferme à dix-sept heures, est au sous-sol.',
    'The lost property office, which shuts at five, is in the basement.',
    '/lə by.ʁo de.zɔb.ʒɛ tʁu.ve ki fɛʁm a di.sɛ.tœʁ ɛ o su.sɔl/',
    'luh bü-roh day-zob-zheh troo-VAY · kee fehrm ah dee-seh-TUHR · eh oh soo-SOL',
    ['milieu', 'virgule', 'qui']),
  sent(1153, 'Le sac, que la dame a rapporté ce matin, attend derrière le comptoir.',
    'The bag, which the lady brought in this morning, is waiting behind the counter.',
    '/lə sak kə la dam a ʁa.pɔʁ.te sə ma.tɛ̃ a.tɑ̃ dɛ.ʁjɛʁ lə kɔ̃.twaʁ/',
    'luh SAK · kuh lah damm ah rah-por-tay suh mah-TEHⁿ · ah-tahⁿ deh-ryehr luh kohⁿ-TWAHR',
    ['milieu', 'virgule', 'que']),
  sent(1154, 'Mon voisin, qui travaille de nuit, dort toute la journée.',
    'My neighbour, who works nights, sleeps all day.',
    '/mɔ̃ vwa.zɛ̃ ki tʁa.vaj də nɥi dɔʁ tut la ʒuʁ.ne/',
    'mohⁿ vwah-ZEHⁿ · kee trah-vahy duh NÜEE · dor toot lah zhoor-NAY',
    ['milieu', 'virgule', 'qui']),
  rule(1155, 'Deux virgules : un ajout. Pas de virgule : la relative dit lequel.',
    'Two commas: an aside. No commas: the clause says which one.',
    'À quoi servent les virgules ?',
    "Ma sœur, qui habite à Sherbrooke : j'en ai une. Ma sœur qui habite à Sherbrooke : j'en ai plusieurs. EN: commas mean one sister; no commas mean several.",
    ['regle', 'milieu']),
  sent(1156, 'Les gens qui arrivent en retard attendent dehors.',
    'The people who arrive late wait outside.',
    '/le ʒɑ̃ ki a.ʁiv ɑ̃ ʁə.taʁ a.tɑ̃d də.ɔʁ/',
    'lay ZHAHⁿ kee ah-reev ahⁿ ruh-TAR · ah-tahⁿd duh-OR',
    ['milieu', 'virgule', 'qui']),
  sent(1157, 'Les gens, qui arrivent en retard, attendent dehors.',
    'The people, who are arriving late, are waiting outside.',
    '/le ʒɑ̃ ki a.ʁiv ɑ̃ ʁə.taʁ a.tɑ̃d də.ɔʁ/',
    'lay ZHAHⁿ · kee ah-reev ahⁿ ruh-TAR · ah-tahⁿd duh-OR',
    ['milieu', 'virgule', 'qui']),
  sent(1158, 'Le formulaire que tu as rempli ce matin part demain au bureau central.',
    'The form you filled in this morning goes to head office tomorrow.',
    '/lə fɔʁ.my.lɛʁ kə ty a ʁɑ̃.pli sə ma.tɛ̃ paʁ də.mɛ̃ o by.ʁo sɑ̃.tʁal/',
    'luh for-mü-LEHR kuh tü ah rahⁿ-plee suh mah-TEHⁿ · par duh-mehⁿ oh bü-roh sahⁿ-TRAL',
    ['milieu', 'verbe-principal', 'que']),
  sent(1159, "Cette rue, que tout le monde évite le samedi, est pleine de monde aujourd'hui.",
    'This street, which everyone avoids on Saturdays, is packed today.',
    '/sɛt ʁy kə tu lə mɔ̃d e.vit lə sam.di ɛ plɛn də mɔ̃d o.ʒuʁ.dɥi/',
    'set RÜ · kuh too luh mohⁿd ay-veet luh sam-DEE · eh PLENN duh mohⁿd oh-zhoor-DÜEE',
    ['milieu', 'virgule', 'que']),
  gap(1160, 'Mon oncle, qui tient une boulangerie, se lève à quatre heures.',
    'My uncle, who runs a bakery, gets up at four.',
    '/mɔ̃.nɔ̃kl ki tjɛ̃ yn bu.lɑ̃.ʒʁi sə lɛv a ka.tʁœʁ/',
    'moh-NOHⁿKL · kee tyehⁿ ün boo-lahⁿ-ZHREE · suh lev ah kah-TRUHR',
    "Mon oncle, ___ tient une boulangerie, se lève à quatre heures. (je n'ai qu'un oncle)",
    "Deux virgules, donc un ajout, et pas de sujet derrière. EN: an aside, and no subject behind.",
    ['milieu', 'qui', 'test']),
  sent(1161, 'Mon frère, qui vit à Bruxelles, vient nous voir en juillet.',
    'My brother, who lives in Brussels, is coming to see us in July.',
    '/mɔ̃ fʁɛʁ ki vi a bʁy.sɛl vjɛ̃ nu vwaʁ ɑ̃ ʒɥi.jɛ/',
    'mohⁿ FREHR · kee vee ah brü-SEL · vyehⁿ noo vwahr ahⁿ zhüee-YEH',
    ['milieu', 'virgule', 'qui']),
  sent(1162, 'Le train de sept heures, qui part du quai trois, arrive à Laval à huit heures.',
    'The seven o clock train, which leaves from platform three, gets to Laval at eight.',
    '/lə tʁɛ̃ də sɛ.tœʁ ki paʁ dy kɛ tʁwa a.ʁiv a la.val a ɥi.tœʁ/',
    'luh trehⁿ duh seh-TUHR · kee par dü keh TRWAH · ah-reev ah lah-val ah üee-TUHR',
    ['milieu', 'virgule', 'qui']),
  sent(1163, "La dame qui m'a reçu hier n'est pas là aujourd'hui.",
    'The clerk who saw me yesterday is not here today.',
    '/la dam ki ma ʁə.sy jɛʁ nɛ pa la o.ʒuʁ.dɥi/',
    'lah damm kee ma ruh-SÜ yehr · neh pah lah oh-zhoor-DÜEE',
    ['milieu', 'qui', 'verbe-principal']),
  sent(1164, "Un ami que je n'avais pas vu depuis dix ans m'a écrit hier.",
    'A friend I had not seen for ten years wrote to me yesterday.',
    '/ɛ̃.na.mi kə ʒə na.vɛ pa vy də.pɥi di.zɑ̃ ma e.kʁi jɛʁ/',
    'uhⁿ-nah-MEE kuh zhuh nah-veh pah VÜ duh-püee dee-ZAHⁿ · ma ay-kree YEHR',
    ['milieu', 'que', 'verbe-principal'], FCVDR),
  sent(1165, "L'employée, que j'avais eue au téléphone, m'a reconnu tout de suite.",
    'The clerk, whom I had spoken to on the phone, recognised me at once.',
    '/lɑ̃.plwa.je kə ʒa.vɛ y o te.le.fɔn ma ʁə.kɔ.ny tu də sɥit/',
    'lahⁿ-plwah-YAY · kuh zhah-veh Ü oh tay-lay-FON · ma ruh-koh-nü too duh SÜEET',
    ['milieu', 'virgule', 'accord']),
  sent(1166, 'Le dossier que tu cherches, qui date de mars, est chez le notaire.',
    'The file you want, which dates from March, is at the solicitor.',
    '/lə dɔ.sje kə ty ʃɛʁʃ ki dat də maʁs ɛ ʃe lə nɔ.tɛʁ/',
    'luh doh-SYAY kuh tü SHEHRSH · kee dat duh MARSS · eh shay luh noh-TEHR',
    ['milieu', 'double', 'que']),
];

/* ── ACT 10 · CE QUI, CE QUE : UN APERÇU · 1167-1178 ─────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1167, "Ce qui m'inquiète, c'est le prix.", 'What worries me is the price.',
    '/sə ki mɛ̃.kjɛt sɛ lə pʁi/',
    'suh kee mehⁿ-KYET · seh luh PREE', ['neutre', 'qui'], FCVDR),
  sent(1168, "Ce que je cherche, c'est un sac bleu.", 'What I am looking for is a blue bag.',
    '/sə kə ʒə ʃɛʁʃ sɛ.tɛ̃ sak blø/',
    'suh kuh zhuh SHEHRSH · seh-tuhⁿ sak BLUH', ['neutre', 'que'], FCVDR),
  sent(1169, "Je ne sais pas ce qui s'est passé.", 'I do not know what happened.',
    '/ʒə nə sɛ pa sə ki sɛ pa.se/',
    'zhuh nuh seh PAH · suh kee seh pah-SAY', ['neutre', 'qui']),
  sent(1170, 'Je ne sais pas ce que tu veux dire.', 'I do not know what you mean.',
    '/ʒə nə sɛ pa sə kə ty vø diʁ/',
    'zhuh nuh seh PAH · suh kuh tü vuh DEER', ['neutre', 'que']),
  rule(1171, "Sans nom devant, on met ce : ce qui, ce que.",
    'With no noun in front, ce goes first: ce qui, ce que.',
    "Que fait-on quand il n'y a pas de nom devant ?",
    `Le test ne bouge pas, et ${LEQUEL_REF} en fait le tour. EN: the test is unchanged, and lesson 13 covers the whole thing.`,
    ['regle', 'neutre']),
  sent(1172, 'Dis-moi ce qui ne va pas.', 'Tell me what is wrong.',
    '/di mwa sə ki nə va pa/',
    'dee MWAH · suh kee nuh vah PAH', ['neutre', 'qui']),
  sent(1173, 'Dis-moi ce que tu as vu.', 'Tell me what you saw.',
    '/di mwa sə kə ty a vy/',
    'dee MWAH · suh kuh tü ah VÜ', ['neutre', 'que']),
  sent(1174, "Tout ce que je demande, c'est un reçu.",
    'All I am asking for is a receipt.',
    '/tu sə kə ʒə də.mɑ̃d sɛ.tɛ̃ ʁə.sy/',
    'too suh kuh zhuh duh-MAHⁿD · seh-tuhⁿ ruh-SÜ', ['neutre', 'que']),
  sent(1175, 'Tout ce qui reste au bureau part en mars.',
    'Everything left at the office goes in March.',
    '/tu sə ki ʁɛst o by.ʁo paʁ ɑ̃ maʁs/',
    'too suh kee rest oh bü-ROH · par ahⁿ MARSS', ['neutre', 'qui']),
  gap(1176, 'Je ne comprends pas ce qui se passe.', 'I do not understand what is going on.',
    '/ʒə nə kɔ̃.pʁɑ̃ pa sə ki sə pas/',
    'zhuh nuh kohⁿ-prahⁿ PAH · suh kee suh PASS',
    'Je ne comprends pas ce ___ se passe. (pas de sujet derrière)',
    "Le même test qu'avant, avec ce devant. EN: the same test, with ce in front.",
    ['neutre', 'qui', 'test']),
  gap(1177, 'Dis-moi ce que tu veux manger.', 'Tell me what you want to eat.',
    '/di.mwa sə kə ty vø mɑ̃.ʒe/',
    'dee-MWAH · suh kuh tü vuh mahⁿ-ZHAY',
    'Dis-moi ce ___ tu veux manger. (tu derrière)',
    "Un sujet derrière, donc ce que. EN: a subject behind, so ce que.",
    ['neutre', 'que', 'test']),
  sent(1178, 'Il pleut depuis trois jours, ce qui complique le déménagement.',
    'It has been raining for three days, which is making the move difficult.',
    '/il plø də.pɥi tʁwa ʒuʁ sə ki kɔ̃.plik lə de.me.naʒ.mɑ̃/',
    'eel PLUH duh-püee trwah ZHOOR · suh kee kohⁿ-pleek luh day-may-nazh-MAHⁿ',
    ['neutre', 'qui', 'phrase-entiere']),
];

/* ── ACT 11 · FAIRE DES PHRASES LONGUES · 1179-1196 ──────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1179, "J'ai perdu un sac jeudi dernier.", 'I lost a bag last Thursday.',
    '/ʒe pɛʁ.dy ɛ̃ sak ʒø.di dɛʁ.nje/',
    'zhay pehr-DÜ uhⁿ SAK · zhuh-dee dehr-NYAY', ['tache', 'court']),
  sent(1180, "Le sac que j'ai perdu jeudi dernier est un sac à dos bleu.",
    'The bag I lost last Thursday is a blue rucksack.',
    '/lə sak kə ʒe pɛʁ.dy ʒø.di dɛʁ.nje ɛ.tɛ̃ sa.ka do blø/',
    'luh sak kuh zhay pehr-DÜ zhuh-dee dehr-NYAY · eh-tuhⁿ sah-kah doh BLUH',
    ['tache', 'que'], FCVDR),
  sent(1181, 'Le livre qui était dedans appartient à la bibliothèque.',
    'The book that was inside belongs to the library.',
    '/lə livʁ ki e.tɛ də.dɑ̃ a.paʁ.tjɛ̃ a la bi.bli.jɔ.tɛk/',
    'luh LEEVR kee ay-teh duh-DAHⁿ · ah-par-tyehⁿ ah lah bee-blee-oh-TEK',
    ['tache', 'qui']),
  sent(1182, "La personne qui l'a trouvé peut m'appeler.",
    'Whoever found it can call me.',
    '/la pɛʁ.sɔn ki la tʁu.ve pø ma.ple/',
    'lah pehr-SON kee lah troo-VAY · puh mah-PLAY', ['tache', 'qui']),
  sent(1183, "La couleur que je vois sur la photo n'est pas la bonne.",
    'The colour I can see in the photo is not the right one.',
    '/la ku.lœʁ kə ʒə vwa syʁ la fɔ.to nɛ pa la bɔn/',
    'lah koo-LUHR kuh zhuh vwah sür lah foh-TOH · neh pah lah BON',
    ['tache', 'que']),
  sent(1184, "Les papiers que j'ai laissés dedans sont importants.",
    'The papers I left inside matter.',
    '/le pa.pje kə ʒe lɛ.se də.dɑ̃ sɔ̃.tɛ̃.pɔʁ.tɑ̃/',
    'lay pah-PYAY kuh zhay leh-SAY duh-dahⁿ · sohⁿ-tehⁿ-por-TAHⁿ',
    ['tache', 'accord']),
  sent(1185, 'Voici le numéro que tu peux composer entre neuf heures et midi.',
    'Here is the number you can ring between nine and noon.',
    '/vwa.si lə ny.me.ʁo kə ty pø kɔ̃.po.ze ɑ̃tʁ nœ.vœʁ e mi.di/',
    'vwah-see luh nü-may-ROH kuh tü puh kohⁿ-poh-ZAY · ahⁿtr nuh-vuhr ay mee-DEE',
    ['tache', 'que']),
  sent(1186, "L'étiquette qui est sur la poignée porte mon nom.",
    'The label on the handle has my name on it.',
    '/le.ti.kɛt ki ɛ syʁ la pwa.ɲe pɔʁt mɔ̃ nɔ̃/',
    'lay-tee-KET kee eh sür lah pwah-NYAY · port mohⁿ NOHⁿ', ['tache', 'qui']),
  sent(1187, "Le sac, que j'utilise tous les jours, a une poche déchirée.",
    'The bag, which I use every day, has a torn pocket.',
    '/lə sak kə ʒy.ti.liz tu le ʒuʁ a yn pɔʃ de.ʃi.ʁe/',
    'luh SAK · kuh zhü-tee-LEEZ too lay ZHOOR · ah ün posh day-shee-RAY',
    ['tache', 'milieu']),
  sent(1188, "Ce qui compte pour moi, c'est le carnet.",
    'What matters to me is the notebook.',
    '/sə ki kɔ̃t puʁ mwa sɛ lə kaʁ.nɛ/',
    'suh kee KOHⁿT poor MWAH · seh luh kar-NEH', ['tache', 'neutre']),
  sent(1189, "Merci d'avance à la personne qui le rapportera.",
    'Thank you in advance to whoever brings it back.',
    '/mɛʁ.si da.vɑ̃s a la pɛʁ.sɔn ki lə ʁa.pɔʁ.tə.ʁa/',
    'mehr-see dah-VAHⁿSS · ah lah pehr-son kee luh rah-por-tuh-RAH',
    ['tache', 'qui']),
  sent(1190, "L'annonce que j'ai écrite tient en huit lignes.",
    'The notice I wrote fits into eight lines.',
    '/la.nɔ̃s kə ʒe e.kʁit tjɛ̃ ɑ̃ ɥi liɲ/',
    'lah-NOHⁿSS kuh zhay ay-KREET · tyehⁿ ahⁿ üee LEENY',
    ['tache', 'accord'], FCVDR),
  sent(1191, 'Je cherche une valise noire que je ne retrouve plus.',
    'I am looking for a black case I cannot find any more.',
    '/ʒə ʃɛʁʃ yn va.liz nwaʁ kə ʒə nə ʁə.tʁuv ply/',
    'zhuh shehrsh ün vah-leez NWAHR · kuh zhuh nuh ruh-troov PLÜ',
    ['tache', 'que']),
  sent(1192, "Le manteau qui manque est celui que je porte tous les jours.",
    'The missing coat is the one I wear every day.',
    '/lə mɑ̃.to ki mɑ̃k ɛ sə.lɥi kə ʒə pɔʁt tu le ʒuʁ/',
    'luh mahⁿ-TOH kee mahⁿk · eh suh-lüee kuh zhuh port too lay ZHOOR',
    ['tache', 'double']),
  sent(1193, "Le vélo que mon frère m'a prêté a disparu samedi.",
    'The bike my brother lent me disappeared on Saturday.',
    '/lə ve.lo kə mɔ̃ fʁɛʁ ma pʁɛ.te a dis.pa.ʁy sam.di/',
    'luh vay-LOH kuh mohⁿ frehr ma preh-TAY · ah dees-pah-rü sam-DEE',
    ['tache', 'que']),
  sent(1194, "La boutique qui répare les valises ouvre à dix heures.",
    'The shop that mends cases opens at ten.',
    '/la bu.tik ki ʁe.paʁ le va.liz uvʁ a di.zœʁ/',
    'lah boo-TEEK kee ray-par lay vah-LEEZ · oovr ah dee-ZUHR',
    ['tache', 'qui']),
  sent(1195, "La photo que j'ai jointe montre la poche déchirée.",
    'The photo I have attached shows the torn pocket.',
    '/la fɔ.to kə ʒe ʒwɛ̃t mɔ̃tʁ la pɔʃ de.ʃi.ʁe/',
    'lah foh-TOH kuh zhay ZHWEHⁿT · mohⁿtr lah posh day-shee-RAY',
    ['tache', 'accord']),
  sent(1196, "Les deux clés que j'ai fait faire coûtent quarante dollars.",
    'The two keys I had cut cost forty dollars.',
    '/le dø kle kə ʒe fɛ fɛʁ kut ka.ʁɑ̃t dɔ.laʁ/',
    'lay duh KLAY kuh zhay feh FEHR · koot kah-rahⁿt doh-LAR',
    ['tache', 'accord']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Per act, so an act's dictation names only what that act taught. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** Rows a `practice skill: 'speak'` section may name: voiceflash-bearing. */
export const SPEAKABLE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE LONG TEXTS AND THEIR ANSWER KEYS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1's reading: the lost property counter. 168 words. */
export const READING_COMPTOIR =
  "Le bureau des objets trouvés, qui se trouve au sous-sol de la station Mont-Royal, ouvre à neuf heures. " +
  "Ce matin-là, il y avait déjà six personnes devant le comptoir. " +
  "L'employée qui m'a reçu s'appelle madame Prévost. " +
  "Elle m'a tendu un formulaire et elle m'a dit : « Décrivez-moi le sac que vous avez perdu. » " +
  "J'ai commencé mal. J'ai dit : « J'ai perdu un sac. Il est bleu. Je l'ai acheté à Québec. Il contient un livre. » " +
  "Madame Prévost a levé les yeux. Derrière elle, il y avait quatre sacs bleus sur une étagère. " +
  "Alors j'ai recommencé, autrement. « Le sac que j'ai perdu est bleu. Le livre qui est dedans vient de la bibliothèque. " +
  "Et l'étiquette qui est sur la poignée porte mon nom. » " +
  "Elle a souri, elle est allée derrière, et elle est revenue avec mon sac. " +
  "Rien n'avait changé dans les faits. Trois phrases courtes étaient devenues une description.";

/** The six relatives in READING_COMPTOIR, in text order, for the quiz key. */
export const READING_COMPTOIR_QUI = [
  'qui se trouve au sous-sol',
  "qui m'a reçu",
  'qui est dedans',
  'qui est sur la poignée',
] as const;
export const READING_COMPTOIR_QUE = [
  'que vous avez perdu',
  "que j'ai perdu",
] as const;

/** Act 7's reading: the message with the word left out. 156 words. */
export const READING_TRADUCTION =
  "Théo a reçu un courriel de sa cousine Maya, qui vit à Toronto et qui apprend le français depuis deux ans. " +
  "Voici ce qu'elle a écrit : « Salut Théo. Le livre tu m'as envoyé est arrivé lundi. " +
  "La ville nous visitons cet été est Montréal. Les gens je connais là-bas disent que le quartier tu habites est très calme. " +
  "Le train nous prenons part de Union Station à sept heures. »\n\n" +
  "Théo a relu trois fois. Chaque phrase s'arrête au milieu, parce que deux sujets se percutent : le livre et tu, la ville et nous, les gens et je. " +
  "En anglais, les quatre phrases sont parfaites, et Maya n'a rien oublié de son point de vue : the book you sent me, the city we are visiting. " +
  "L'anglais laisse le mot tomber. Le français, jamais. " +
  "Théo lui a répondu une seule ligne : « Remets que partout, et tout se remet en place. »";

/** The four sentences the reading prints without their pronoun, and their
 *  repaired forms. The quiz keys on these, so they live here. */
export const READING_TRADUCTION_MANQUANTS: readonly [string, string][] = [
  ["Le livre tu m'as envoyé est arrivé lundi.", "Le livre que tu m'as envoyé est arrivé lundi."],
  ['La ville nous visitons cet été est Montréal.', 'La ville que nous visitons cet été est Montréal.'],
  ['Les gens je connais là-bas...', 'Les gens que je connais là-bas...'],
  ['Le train nous prenons part de Union Station.', 'Le train que nous prenons part de Union Station.'],
];

/** Act 9's reading: the clause that sits in the middle. 162 words. */
export const READING_ASSURANCE =
  "La lettre de l'assurance, que Théo a trouvée dans sa boîte mardi, tient en huit lignes.\n\n" +
  "« Monsieur, le dossier que vous avez ouvert le douze mars, et qui porte le numéro quatre cent trois, est toujours en cours. " +
  "L'expert, qui doit passer chez vous avant la fin du mois, vous appellera la veille. " +
  "Les objets que vous avez déclarés perdus sont au nombre de trois. " +
  "La valise, que vous décrivez comme noire et de grande taille, n'a pas été retrouvée. " +
  "Le vélo qui manque à votre déclaration ne peut pas être ajouté après coup. »\n\n" +
  "Théo a remarqué deux choses. D'abord, chaque petit groupe entre deux virgules peut disparaître sans casser la phrase : " +
  "« La valise n'a pas été retrouvée » tient debout toute seule. " +
  "Ensuite, une phrase sans virgules ne dit pas la même chose : « le vélo qui manque à votre déclaration » désigne un vélo parmi plusieurs, " +
  "et non pas le seul vélo qu'il possède.";

/** Act 11's model: the notice the learner will imitate. 152 words. */
export const READING_ANNONCE =
  "PERDU : sac à dos bleu\n\n" +
  "Le sac que j'ai perdu jeudi dernier est un sac à dos bleu, de taille moyenne. " +
  "Je l'ai laissé dans le bus qui va de la station Berri au cégep, vers dix-sept heures. " +
  "Le livre qui était dedans appartient à la bibliothèque du quartier, et les papiers que j'ai laissés dans la petite poche sont importants pour moi. " +
  "L'étiquette qui est sur la poignée porte mon nom et mon numéro. " +
  "Le sac, que j'utilise tous les jours, a une poche déchirée sur le côté droit : c'est le détail qui permet de le reconnaître. " +
  "Ce qui compte vraiment pour moi, c'est le carnet noir. " +
  "Voici le numéro que vous pouvez composer entre neuf heures et midi. " +
  "Merci d'avance à la personne qui le rapportera au bureau des objets trouvés.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  `fold()` strips accents, apostrophes, hyphens, commas, case and spacing.
 *  Measured consequences for this lesson:
 *
 *    qui / que                 TYPEABLE, distinct in every case
 *    que / qu'                 ONE STRING once the apostrophe folds, and
 *                              "qu elle" folds onto "quelle" too. A typed
 *                              question may therefore never turn on the
 *                              elision alone: acts 5 and 10 test it with mcq.
 *    écrite / écrit            TYPEABLE: the e is a letter, not an accent
 *    perdue / perdu            TYPEABLE, and this is the whole point of act 8
 *    prises / prise / pris     TYPEABLE
 *    ce qui / ce que           TYPEABLE
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOLD_COLLISIONS: [string, string][] = [
  ["qu'elle", 'quelle'],
  ["qu'il", 'quil'],
  ["qu'on", 'quon'],
];

/** Forms this lesson prints ONLY as a wrong reading (trapDrill promptSound,
 *  commonErrors.wrong). Every one is a real anglophone production. */
export const MEANS_SOMETHING_ELSE = [
  'Le livre je lis est passionnant.',
  "Le sac qu'est sur la chaise est bleu.",
  'La femme qui tu vois au téléphone est ma cheffe.',
  'Le colis que arrive demain vient de Lyon.',
  "La lettre que j'ai écrit fait deux pages.",
  'Le livre que est sur la table est à moi.',
] as const;

/** Banned everywhere on a learner surface (house rules 6.1 to 6.3). */
export const BANNED_SUBSTRINGS = ['honest', '—', '‿'] as const;
