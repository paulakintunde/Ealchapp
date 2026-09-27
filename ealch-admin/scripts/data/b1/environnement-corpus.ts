// b1.33.l1 « L'environnement et la société » — the authored corpus, the imports
// and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md, in the VOCAB SHAPE, TOPIC VARIANT, of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 and §2.3.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.34 to b1.36 may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   TOPIC VOCABULARY FOR THE ENVIRONMENT AND SOCIETY, taught as WORD
//   FAMILIES and COLLOCATIONS, never as isolated nouns (shapes doc §2.3):
//
//     act 1   the method: a word comes with its family and its neighbours
//             (économiser l'énergie, faire le tri, réduire ses déchets,
//             prendre les transports en commun); sauver against économiser
//     act 2   climate and weather change: chaud / la chaleur / réchauffer /
//             le réchauffement; sec / la sécheresse; inonder / l'inondation;
//             une canicule, les gaz à effet de serre, un feu de forêt; the
//             verb each phenomenon takes (il fait / il y a)
//     act 3   polluer / la pollution / polluant / pollué / un pollueur;
//             émettre / les émissions; the END OF THE WORD tells the class
//     act 4   trier / le tri; recycler / le recyclage / recyclable; le
//             compost; la consigne; the four bins of four countries (bac
//             bleu Québec, sac PMC Belgique, poubelle jaune France, sac taxé
//             Suisse); déchets against gaspillage
//     act 5   consommer / la consommation / un consommateur; acheter local,
//             de saison, en vrac, de seconde main; gaspiller / le gaspillage;
//             réparer / la réparation / réparable; réutiliser; jetable; le
//             suremballage
//     act 6   energy: les énergies renouvelables, l'éolien, le solaire,
//             l'hydroélectricité (Québec), le nucléaire (France), les
//             énergies fossiles; baisser le chauffage, éteindre (Québec:
//             fermer) la lumière; the calques plante, pouvoir, panel
//     act 7   transport and the city: les transports en commun (Suisse:
//             publics), le covoiturage, la piste cyclable, la voiture
//             électrique, la borne de recharge, la zone à faibles émissions,
//             circuler / la circulation / les bouchons, rouler à vélo
//     act 8   protéger / la protection / protégé; menacer / une menace /
//             menacé; une espèce menacée, en voie de disparition; la
//             biodiversité; la déforestation; la désertification (Sahel);
//             the -é (undergoes) against -ant (acts) contrast
//     act 9   society: who pays and who decides. une taxe carbone, la taxe au
//             sac, manifester / une manifestation / un manifestant, signer
//             une pétition, prendre une décision, les inégalités,
//             l'écoanxiété, le conseil municipal
//     act 10  talking about it: être pour / contre, à mon avis, selon moi,
//             il faudrait, on devrait, je propose de, d'un côté / de l'autre
//     act 11  a message to the town council on one local measure
//
//   NOT OWNED, CITED BY NUMBER ONLY: the conditional (b1.08) behind il
//   faudrait / on devrait / on pourrait; polite formulas (b1.09) in the
//   message; the subjunctive (b1.14 to b1.16), used ONLY after « il faut
//   que » and « je voudrais que » in act 10 and the task, and nowhere else in
//   authored French; connectors (b1.30 coordination, b1.31 subordination,
//   b1.32 concession, written in parallel) used in the message; the passive
//   of notices (b1.18) in the act 1 notice; weather words (a1.10), transport
//   words (a2.27) and shopping words (a2.26) imported as rows.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong form lives in a
//   `commonErrors.wrong`, a `trapDrill.promptSound`, a scene `break.wrong` or
//   a quiz `errorSpot.prompt`. The Québec forms (fermer la lumière, le bac
//   bleu, le conseil de ville) are rows because they are right, and tagged.
//
//   TONE: factual and non-preachy. Every text shows more than one viewpoint
//   (the driver and the cyclist, the fishers and the scientists, the three
//   readers on the bag tax, the shopkeepers on the school street). The
//   learner is never told what to think, only how to say what they think.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `ecologie` exists (« L'écologie », domain nature, levelRange
//     b1-b2). Its sub-themes (l'environnement, la société et
//     l'environnement, agir au quotidien) were set IN POSTGRES ONLY on
//     2026-09-26; `import-seed.ts` would revert them (build log).
//  2. POSTGRES PROBED READ-ONLY 2026-09-26: 319 rows, fr.b1 .001-.154 (154
//     rows), fr.b2 .001-.165, NOTHING at or above 1000 at any level.
//  3. ID BLOCK: b1.33 owns `fr.b1.ecologie.1000`-`.1199` AND NOTHING ELSE.
//     Used: `.1000`-`.1199`, all 200, in eleven act blocks. Compare full ids,
//     never numbers: the level is part of the id.
//  4. THE SEED CARRIES 15 ecologie ROWS (9 fr.b1, 6 fr.b2). The other 145
//     published fr.b1 rows are DB-ONLY and cannot be named here (`src()`
//     resolves against the seed). Many are on topic, so this corpus holds
//     twins, listed in DB_ONLY_TWINS. Dedupe at import (build log open item).
//  5. On-topic seed rows from `ecologie`, `questions-sociales`, `meteo`,
//     `transports-quotidiens`, `la-ville`, `marche`, `cuisine`, `deplacements`
//     and `communaute` were read from seed.json on 2026-09-26; each reused
//     id is in §F with its French. Seed respellings are NEVER printed in a
//     section (some use a plain nasal n: `lahn-vee-rohn-MAHN`), only fr/en.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, all a
//     real /n/ or /m/ written double so `hasPlainNasal` (which returns early
//     on OH/EH/AH + N) cannot fire:
//       environnement  ahⁿ-vee-ronn-MAHⁿ     zone         ZOHNN
//       jaune          ZHOHNN                 éolienne     o-LYEHNN
//       PMC            pay-emm-SAY            carbone      kar-BONN
//       viennent       VYEHNN                 jeunes       ZHUHNN
//       économe        ay-ko-NOMM             centaines    sahⁿ-TEHNN
//       Lausanne       loh-ZANN               panne        PANN
//     « même » is MEM, the house spelling. « problème » is pro-BLEM (a lone
//     E + M, cleared by the source « ème »). No U+203F tie anywhere, in a
//     respelling or an IPA field.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.33',
  seq: 33,
  title: 'Environment and Society',
  sub: "L'environnement et la société",
  canDo: 'Can understand news briefs, notices and forum posts about the environment, and use about sixty collocations and fifteen word families on climate, pollution, waste, consumption, energy, transport, nature and society to give a nuanced opinion on a local measure and propose something in writing',
  prereqUnitIds: ['b1.08', 'b1.14'],
} as const;

export const LESSON_ID = 'b1.33.l1';
export const THEME = 'ecologie';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds fr.b1 .001-.154 and fr.b2 .001-.165; b1.33 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

export const METEO_UNIT = 'a1.10';
export const COURSES_UNIT = 'a2.26';
export const TRANSPORTS_UNIT = 'a2.27';
export const CONDITIONNEL_UNIT = 'b1.08';
export const POLITESSE_UNIT = 'b1.09';
export const SUBJ_FORM_UNIT = 'b1.14';
export const SUBJ_DECL_UNIT = 'b1.15';
export const SUBJ_INF_UNIT = 'b1.16';
export const PASSIF_UNIT = 'b1.18';
export const COORDINATION_UNIT = 'b1.30';
export const SUBORDINATION_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const MEDIAS_UNIT = 'b1.34';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23, 'b1.24': 24,
  'b1.25': 25, 'b1.26': 26, 'b1.27': 27, 'b1.28': 28, 'b1.29': 29, 'b1.30': 30,
  'b1.31': 31, 'b1.32': 32, 'b1.33': 33, 'b1.34': 34,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const METEO_REF = unitRef(METEO_UNIT);
export const COURSES_REF = unitRef(COURSES_UNIT);
export const TRANSPORTS_REF = unitRef(TRANSPORTS_UNIT);
export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const POLITESSE_REF = refFr(POLITESSE_UNIT);
export const SUBJ_FORM_REF = refFr(SUBJ_FORM_UNIT);
export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const COORDINATION_REF = refFr(COORDINATION_UNIT);
export const SUBORDINATION_REF = refFr(SUBORDINATION_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const MEDIAS_REF = refFr(MEDIAS_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  ONE SMALL THING AND ITS RIPPLE. A gesture at home ripples out to the
 *  street, the city, the planet; a word ripples out the same way, to its
 *  family (polluer, la pollution, polluant, un pollueur) and to its
 *  neighbours, the words it always stands next to (faire le tri, économiser
 *  l'énergie, signer une pétition). A learner who knows « l'énergie » alone
 *  says « sauver l'énergie »; one who knows its neighbour says « économiser ».
 *
 *  It is NOT « learn the ecology words »: a list of nouns is exactly what
 *  this lesson refuses (see REFRAME_REJECTED).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Un mot n'arrive jamais seul : il vient avec sa famille et ses voisins.";
export const REFRAME_EN = 'A word never arrives alone: it comes with its family and its neighbours.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "L'écologie, c'est d'abord des petits gestes.",
    why: "A lecture, not a language rule, and false where act 9 has to hold: taxes, votes and petitions are not small gestures. The lesson shows viewpoints; it does not tell the learner what to believe.",
  },
  {
    text: 'Un mot, un verbe : économiser l’énergie, faire le tri.',
    why: "Too narrow. Act 2's phenomena take « il y a » or « il fait », act 3 and act 8 are about families built with suffixes, and act 10's formulas (à mon avis, d'un côté) have no verb partner. « Ses voisins » covers all of them.",
  },
  {
    text: 'Apprends les mots de l’environnement par thème.',
    why: "That is the isolated-noun list the shapes doc (§2.3) forbids. A learner with the list « la pollution, le tri, l'énergie » still cannot say one correct sentence.",
  },
  {
    text: "Le français dit l'environnement comme l'anglais.",
    why: "False on almost every screen: save energy is économiser (not sauver), a power plant is une centrale (not une plante), waste is sometimes les déchets and sometimes le gaspillage, public transport is plural (les transports en commun).",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-26 and its French is in the
 *  trailing comment. `(named only)` rows carry no `flashcard` drill, so no
 *  deckTranche can release them.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.ecologie.001',               // l'environnement
    'fr.b1.ecologie.037',               // les déchets
    'fr.a2.maison.022',                 // sortir la poubelle
  ],
  act2: [
    'fr.b1.ecologie.003',               // le réchauffement climatique
    'fr.a2.meteo.001',                  // Il fait de plus en plus chaud chaque été.
    'fr.a1.meteo.029',                  // il fait chaud
  ],
  act3: [
    'fr.b1.ecologie.036',               // la pollution
    'fr.a2.la-ville.001',               // Il y a beaucoup de circulation aux heures de pointe.
  ],
  act4: [
    'fr.b1.ecologie.002',               // le recyclage
    'fr.a1.objets.098',                 // jeter à la poubelle
    'fr.b1.ecologie.005',               // Si nous recyclions davantage, nous produirions moins de déchets.
    'fr.a2.transports-quotidiens.014',  // le composteur  (the ticket validator: the other composter)
  ],
  act5: [
    'fr.b1.ecologie.039',               // gaspiller
    'fr.b1.cuisine.084',                // Elle estime que le gaspillage alimentaire est un vrai problème.
    'fr.a2.marche.065',                 // acheter des légumes de saison
    'fr.b1.cuisine.076',                // Je trouve que les légumes de saison ont plus de goût.
    'fr.a2.rp-technologie.004',         // faire réparer
    'fr.a2.marche.130',                 // J'ai demandé si les œufs venaient d'une ferme locale.
  ],
  act6: [] as string[],
  act7: [
    'fr.a2.transports-quotidiens.002',  // le covoiturage
    'fr.a1.deplacements.072',           // la piste cyclable
    'fr.a2.transports-quotidiens.003',  // le vélo en libre-service
    'fr.a2.transports-quotidiens.006',  // l'autopartage
    'fr.a2.la-ville.004',               // Le métro est plein aux heures de pointe.
  ],
  act8: [
    'fr.b1.ecologie.006',               // nous protégeons
    'fr.b1.communaute.006',             // Plusieurs associations locales organisent un grand nettoyage du parc ce week-end.  (named only)
  ],
  act9: [
    'fr.b1.questions-sociales.001',     // De plus en plus de gens s’inquiètent pour l’avenir de la planète.  (named only)
    'fr.b1.questions-sociales.002',     // Les inégalités entre riches et pauvres se creusent chaque année.  (named only)
  ],
  act10: [
    'fr.b1.ecologie.004',               // Il faut que nous consommions moins d'énergie.
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.communaute.006',          // sentence, dictation
  'fr.b1.questions-sociales.001',  // dictation
  'fr.b1.questions-sociales.002',  // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. The lesson
 *  file asserts at load that every import NOT listed here has voiceflash. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.ecologie.001',            // flashcard only
  'fr.b1.ecologie.002',            // flashcard only
  'fr.b1.ecologie.003',            // flashcard only
  'fr.b1.ecologie.004',            // flashcard only
  'fr.b1.ecologie.005',            // flashcard only
  'fr.b1.ecologie.006',            // flashcard only
  'fr.a2.meteo.001',               // sentence, flashcard, review
  'fr.a2.la-ville.001',            // sentence, flashcard, review
  'fr.a2.la-ville.004',            // sentence, flashcard, review
  'fr.b1.cuisine.084',             // sentence, flashcard, review
  'fr.b1.cuisine.076',             // sentence, flashcard, review
  'fr.a2.marche.130',              // sentence, flashcard, review
];

/** Published Postgres rows the seed does not carry, so they cannot be named
 *  here; each is twinned by an authored row. Dedupe or keep at import. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.b1.ecologie.038', fr: 'le tri sélectif', twin: E(1052) },
  { dbId: 'fr.b1.ecologie.012', fr: 'Il faut réduire nos déchets pour protéger l’environnement.', twin: E(1007) },
  { dbId: 'fr.b1.ecologie.019', fr: 'Le gouvernement encourage les citoyens à trier leurs déchets.', twin: E(1006) },
  { dbId: 'fr.b1.ecologie.045', fr: "l'énergie renouvelable", twin: E(1093) },
  { dbId: 'fr.b1.ecologie.051', fr: 'la centrale nucléaire', twin: E(1097) },
  { dbId: 'fr.b1.ecologie.052', fr: "l'éolienne", twin: E(1094) },
  { dbId: 'fr.b1.ecologie.053', fr: 'le panneau solaire', twin: E(1095) },
  { dbId: 'fr.b1.ecologie.055', fr: 'la voiture électrique', twin: E(1116) },
  { dbId: 'fr.b1.ecologie.056', fr: 'la piste cyclable', twin: E(1115) },
  { dbId: 'fr.b1.ecologie.057', fr: 'le compost', twin: E(1054) },
  { dbId: 'fr.b1.ecologie.060', fr: 'la consigne', twin: E(1060) },
  { dbId: 'fr.b1.ecologie.063', fr: "l'inondation", twin: E(1020) },
  { dbId: 'fr.b1.ecologie.064', fr: 'la canicule', twin: E(1018) },
  { dbId: 'fr.b1.ecologie.065', fr: 'le gaspillage alimentaire', twin: E(1074) },
  { dbId: 'fr.b1.ecologie.069', fr: 'le sac réutilisable', twin: E(1091) },
  { dbId: 'fr.b1.ecologie.029', fr: 'Beaucoup de commerces proposent maintenant des produits en vrac.', twin: E(1081) },
  { dbId: 'fr.b1.ecologie.117', fr: "Depuis qu'elle habite en ville, elle prend toujours les transports en commun.", twin: E(1008) },
  { dbId: 'fr.b1.ecologie.143', fr: 'Les agriculteurs surveillent la météo de près pendant la sécheresse.', twin: E(1026) },
  { dbId: 'fr.b1.ecologie.016', fr: 'Le réchauffement climatique menace plusieurs espèces animales.', twin: E(1145) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Three kinds of row: a FAMILY row (kind phrase, tag famille: the verb,
 *  the noun, the adjective, the person, in one card), a COLLOCATION row
 *  (kind phrase, tag collocation: the word with its neighbour), and sentence
 *  rows that put them in a real situation. See §A.6 for the respellings.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['ecologie-vocabulaire'];

/** A word family: every member in one card. `members` go in notes. */
const fam = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['famille', ...tags], drills: FCVR, version: 1, register: 'courant', grammarPoints: GP, notes,
});

/** A collocation: the word and its neighbour. */
const col = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register: 'courant', grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'courant', grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · UN MOT N'ARRIVE JAMAIS SEUL ─────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  col(1000, "économiser l'énergie", 'to save energy', '/e.kɔ.nɔ.mi.ze le.nɛʁ.ʒi/', 'ay-ko-no-mee-ZAY lay-nehr-ZHEE', ['energie'], "Pas sauver : sauver, c'est pour une vie."),
  col(1001, 'faire le tri', 'to sort your waste', '/fɛʁ lə tʁi/', 'fehr luh TREE', ['dechets']),
  col(1002, 'réduire ses déchets', 'to cut down on your waste', '/ʁe.dɥiʁ se de.ʃɛ/', 'ray-DWEER say day-SHEH', ['dechets']),
  col(1003, 'prendre les transports en commun', 'to take public transport', '/pʁɑ̃dʁ le tʁɑ̃s.pɔʁ ɑ̃ kɔ.mœ̃/', 'prahⁿdr lay trahⁿs-POR ahⁿ ko-MUHⁿ', ['transport']),
  fam(1004, 'économiser, les économies, économe', 'to save, savings, thrifty', '/e.kɔ.nɔ.mi.ze le.ze.kɔ.nɔ.mi e.kɔ.nɔm/', 'ay-ko-no-mee-ZAY, lay-zay-ko-no-MEE, ay-ko-NOMM', ['energie'], 'Famille : le verbe, le nom, l’adjectif.'),
  sent(1005, "J'essaie toujours d'économiser l'énergie.", 'I always try to save energy.', '/ʒe.sɛ tu.ʒuʁ de.kɔ.nɔ.mi.ze le.nɛʁ.ʒi/', 'zheh-SEH too-ZHOOR day-ko-no-mee-ZAY lay-nehr-ZHEE', ['scene', 'energie'], FCVDR),
  sent(1006, 'Dans cet immeuble, tout le monde fait le tri.', 'In this building, everyone sorts their waste.', '/dɑ̃ sɛ.ti.mœbl tu lə mɔ̃d fɛ lə tʁi/', 'dahⁿ seh-tee-MUHBL too luh MOHⁿD feh luh TREE', ['dechets']),
  sent(1007, 'On essaie de réduire nos déchets.', 'We try to cut down on our waste.', '/ɔ̃.ne.sɛ də ʁe.dɥiʁ no de.ʃɛ/', 'ohⁿ-nay-SEH duh ray-dweer noh day-SHEH', ['dechets']),
  sent(1008, 'Je prends les transports en commun pour aller au travail.', 'I take public transport to get to work.', '/ʒə pʁɑ̃ le tʁɑ̃s.pɔʁ ɑ̃ kɔ.mœ̃ puʁ a.le o tʁa.vaj/', 'zhuh PRAHⁿ lay trahⁿs-POR ahⁿ ko-MUHⁿ poor a-LAY oh tra-VAHY', ['transport'], FCVDR),
  sent(1009, REFRAME, REFRAME_EN, '/œ̃ mo na.ʁiv ʒa.mɛ sœl il vjɛ̃ a.vɛk sa fa.mij e se vwa.zɛ̃/', 'uhⁿ MOH na-REEV zha-meh SUHL | eel vyehⁿ a-vehk sa fa-MEEY ay say vwa-ZEHⁿ', ['rule', 'reframe'], ['flashcard'],
    rule("« L'énergie » : quel voisin pour dire to save ?", "Économiser. Sauver, c'est pour une personne, un animal ou la planète.")),
  sent(1010, "On ne sauve pas l'énergie : on l'économise.", 'You do not rescue energy: you save it.', '/ɔ̃ nə sov pa le.nɛʁ.ʒi ɔ̃ le.kɔ.nɔ.miz/', 'ohⁿ nuh SOHV pa lay-nehr-ZHEE | ohⁿ lay-ko-no-MEEZ', ['energie', 'faux-ami']),
  sent(1011, "Cet hiver, nous avons fait des économies d'énergie.", 'This winter we made energy savings.', '/sɛ.ti.vɛʁ nu.za.vɔ̃ fɛ de.ze.kɔ.nɔ.mi de.nɛʁ.ʒi/', 'seh-tee-VEHR noo-za-vohⁿ FEH day-zay-ko-no-MEE day-nehr-ZHEE', ['energie', 'famille']),
  sent(1012, 'Le lundi, on sort le bac bleu.', 'On Mondays we put out the blue bin.', '/lə lœ̃.di ɔ̃ sɔʁ lə bak blø/', 'luh luhⁿ-DEE ohⁿ SOR luh bak BLUH', ['dechets', 'quebec']),
  sent(1013, 'Ma voisine prend le métro, et moi le vélo.', 'My neighbour takes the metro, and I take the bike.', '/ma vwa.zin pʁɑ̃ lə me.tʁo e mwa lə ve.lo/', 'ma vwa-ZEEN prahⁿ luh may-TROH ay MWA luh vay-LOH', ['transport']),
  sent(1014, "Apprends le verbe, le nom et l'adjectif ensemble.", 'Learn the verb, the noun and the adjective together.', '/a.pʁɑ̃ lə vɛʁb lə nɔ̃ e la.ʒɛk.tif ɑ̃.sɑ̃bl/', 'a-PRAHⁿ luh VEHRB luh NOHⁿ ay la-zhehk-TEEF ahⁿ-SAHⁿBL', ['rule', 'famille'], ['flashcard'],
    rule('Économiser, les économies, économe : qu’est-ce qui les relie ?', 'La même famille : un verbe, un nom, un adjectif.')),
];

/* ── ACT 2 · LE CLIMAT CHANGE ────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  fam(1015, 'chaud, la chaleur, réchauffer, le réchauffement', 'hot, heat, to warm up, warming', '/ʃo la ʃa.lœʁ ʁe.ʃo.fe lə ʁe.ʃof.mɑ̃/', 'SHOH, la sha-LUHR, ray-shoh-FAY, luh ray-shohf-MAHⁿ', ['climat'], 'Famille : l’adjectif, le nom, le verbe, le nom du changement.'),
  col(1016, 'le changement climatique', 'climate change', '/lə ʃɑ̃ʒ.mɑ̃ kli.ma.tik/', 'luh shahⁿzh-MAHⁿ klee-ma-TEEK', ['climat']),
  col(1017, 'les gaz à effet de serre', 'greenhouse gases', '/le ɡaz a e.fɛ də sɛʁ/', 'lay GAZ a eh-FEH duh SEHR', ['climat']),
  col(1018, 'une canicule, une vague de chaleur', 'a heatwave', '/yn ka.ni.kyl yn vaɡ də ʃa.lœʁ/', 'ün ka-nee-KÜL, ün VAG duh sha-LUHR', ['climat'], 'Il y a une canicule ; il fait chaud.'),
  fam(1019, 'sec, sécher, la sécheresse', 'dry, to dry, drought', '/sɛk se.ʃe la se.ʃʁɛs/', 'SEHK, say-SHAY, la saysh-REHSS', ['climat'], 'Il fait sec ; il y a une sécheresse.'),
  fam(1020, 'inonder, une inondation', 'to flood, a flood', '/i.nɔ̃.de y.ni.nɔ̃.da.sjɔ̃/', 'ee-nohⁿ-DAY, ü-nee-nohⁿ-da-SYOHⁿ', ['climat'], 'La rivière inonde ; il y a des inondations.'),
  col(1021, 'un feu de forêt', 'a forest fire, a wildfire', '/œ̃ fø də fɔ.ʁɛ/', 'uhⁿ FUH duh fo-REH', ['climat', 'canada'], 'Famille : le feu, brûler, brûlé.'),
  sent(1022, 'Cet été, il y a eu une canicule à Montréal.', 'This summer there was a heatwave in Montréal.', '/sɛ.te.te il ja y yn ka.ni.kyl a mɔ̃.ʁe.al/', 'seh-tay-TAY eel ya Ü ün ka-nee-KÜL a mohⁿ-ray-AL', ['climat', 'quebec'], FCVDR),
  sent(1023, 'En 2023, les feux de forêt ont brûlé une surface record au Canada.', 'In 2023, wildfires burned a record area in Canada.', '/ɑ̃ dø.mil.vɛ̃t.tʁwa le fø də fɔ.ʁɛ ɔ̃ bʁy.le yn syʁ.fas ʁə.kɔʁ o ka.na.da/', 'ahⁿ deu-meel-vehⁿt-TRWA | lay FUH duh fo-REH ohⁿ brü-LAY ün sür-FASS ruh-KOR oh ka-na-DA', ['climat', 'canada']),
  sent(1024, 'La fumée des feux est arrivée jusqu’à Montréal.', 'The smoke from the fires reached Montréal.', '/la fy.me de fø ɛ.ta.ʁi.ve ʒys.ka mɔ̃.ʁe.al/', 'la fü-MAY day FUH eh-ta-ree-VAY zhüs-KA mohⁿ-ray-AL', ['climat', 'quebec']),
  sent(1025, 'En Belgique, les inondations de 2021 ont détruit des maisons.', 'In Belgium, the 2021 floods destroyed homes.', '/ɑ̃ bɛl.ʒik le.zi.nɔ̃.da.sjɔ̃ də dø.mil.vɛ̃.te.œ̃ ɔ̃ de.tʁɥi de mɛ.zɔ̃/', 'ahⁿ behl-ZHEEK lay-zee-nohⁿ-da-SYOHⁿ duh deu-meel-vehⁿ-tay-UHⁿ | ohⁿ day-TRWEE day meh-ZOHⁿ', ['climat', 'belgique']),
  sent(1026, 'Dans le sud de la France, la sécheresse inquiète les agriculteurs.', 'In the south of France, the drought worries farmers.', '/dɑ̃ lə syd də la fʁɑ̃s la se.ʃʁɛs ɛ̃.kjɛt le.za.ɡʁi.kyl.tœʁ/', 'dahⁿ luh SÜD duh la FRAHⁿSS | la saysh-REHSS ehⁿ-KYEHT lay-za-gree-kül-TUHR', ['climat', 'france'], FCVDR),
  sent(1027, 'Les gaz à effet de serre réchauffent la planète.', 'Greenhouse gases warm the planet.', '/le ɡaz a e.fɛ də sɛʁ ʁe.ʃof la pla.nɛt/', 'lay GAZ a eh-FEH duh SEHR ray-SHOHF la pla-NEHT', ['climat']),
  sent(1028, "Le temps change chaque jour ; le climat, c'est sur trente ans.", 'The weather changes every day; climate is measured over thirty years.', '/lə tɑ̃ ʃɑ̃ʒ ʃak ʒuʁ lə kli.ma sɛ syʁ tʁɑ̃.tɑ̃/', 'luh TAHⁿ shahⁿzh shak ZHOOR | luh klee-MA seh sür trahⁿ-TAHⁿ', ['rule', 'climat'], ['flashcard'],
    rule('Le temps ou le climat : lequel change d’un jour à l’autre ?', 'Le temps, la météo. Le climat, c’est la moyenne sur trente ans.')),
  sent(1029, 'Il y a une canicule, et il fait trente-cinq degrés.', 'There is a heatwave, and it is thirty-five degrees.', '/il ja yn ka.ni.kyl e il fɛ tʁɑ̃t.sɛ̃k də.ɡʁe/', 'eel YA ün ka-nee-KÜL | ay eel feh trahⁿt-sehⁿk duh-GRAY', ['climat']),
  sent(1030, 'Il fait très sec depuis deux mois.', 'It has been very dry for two months.', '/il fɛ tʁɛ sɛk də.pɥi dø mwa/', 'eel feh treh SEHK duh-pwee deu MWA', ['climat']),
  sent(1031, 'La rivière a inondé les rues du village.', 'The river flooded the village streets.', '/la ʁi.vjɛʁ a i.nɔ̃.de le ʁy dy vi.laʒ/', 'la ree-VYEHR a ee-nohⁿ-DAY lay RÜ dü vee-LAZH', ['climat'], FCVDR),
  sent(1032, 'Le réchauffement climatique rend les canicules plus fréquentes.', 'Global warming makes heatwaves more frequent.', '/lə ʁe.ʃof.mɑ̃ kli.ma.tik ʁɑ̃ le ka.ni.kyl ply fʁe.kɑ̃t/', 'luh ray-shohf-MAHⁿ klee-ma-TEEK rahⁿ lay ka-nee-KÜL plü fray-KAHⁿT', ['climat']),
  sent(1033, 'Les pompiers luttent contre un feu de forêt au nord du Québec.', 'Firefighters are fighting a forest fire in northern Québec.', '/le pɔ̃.pje lyt kɔ̃.tʁœ̃ fø də fɔ.ʁɛ o nɔʁ dy ke.bɛk/', 'lay pohⁿ-PYAY LÜT kohⁿ-truhⁿ FUH duh fo-REH oh NOR dü kay-BEHK', ['climat', 'quebec']),
];

/* ── ACT 3 · POLLUER, LA POLLUTION ───────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  fam(1034, 'polluer, la pollution, polluant, un pollueur', 'to pollute, pollution, polluting, a polluter', '/pɔ.lɥe la pɔ.ly.sjɔ̃ pɔ.lɥɑ̃ œ̃ pɔ.lɥœʁ/', 'po-lü-AY, la po-lü-SYOHⁿ, po-lü-AHⁿ, uhⁿ po-lü-UHR', ['pollution'], 'Famille : le verbe, le nom, l’adjectif en -ant, la personne en -eur. Et pollué : ce qui a été sali.'),
  col(1035, "la pollution de l'air", 'air pollution', '/la pɔ.ly.sjɔ̃ də lɛʁ/', 'la po-lü-SYOHⁿ duh LEHR', ['pollution']),
  col(1036, "la qualité de l'air", 'air quality', '/la ka.li.te də lɛʁ/', 'la ka-lee-TAY duh LEHR', ['pollution']),
  fam(1037, 'émettre, les émissions', 'to emit, emissions', '/e.mɛtʁ le.ze.mi.sjɔ̃/', 'ay-MEHTR, lay-zay-mee-SYOHⁿ', ['pollution'], 'On réduit les émissions de gaz à effet de serre.'),
  col(1038, 'le principe pollueur-payeur', 'the polluter-pays principle', '/lə pʁɛ̃.sip pɔ.lɥœʁ pɛ.jœʁ/', 'luh prehⁿ-SEEP po-lü-UHR peh-YUHR', ['pollution', 'societe']),
  col(1039, 'une usine polluante', 'a polluting factory', '/y.ny.zin pɔ.lɥɑ̃t/', 'ü-nü-ZEEN po-lü-AHⁿT', ['pollution']),
  sent(1040, "Les voitures polluent l'air des villes.", 'Cars pollute the air in cities.', '/le vwa.tyʁ pɔ.ly lɛʁ de vil/', 'lay vwa-TÜR po-LÜ LEHR day VEEL', ['pollution']),
  sent(1041, "La pollution de l'air est un problème en ville.", 'Air pollution is a problem in the city.', '/la pɔ.ly.sjɔ̃ də lɛʁ ɛ.tœ̃ pʁɔ.blɛm ɑ̃ vil/', 'la po-lü-SYOHⁿ duh LEHR eh-tuhⁿ pro-BLEM ahⁿ VEEL', ['pollution'], FCVDR),
  sent(1042, 'Cette usine rejette des produits polluants dans la rivière.', 'This factory dumps polluting products into the river.', '/sɛ.ty.zin ʁə.ʒɛt de pʁɔ.dɥi pɔ.lɥɑ̃ dɑ̃ la ʁi.vjɛʁ/', 'seh-tü-ZEEN ruh-ZHEHT day pro-DWEE po-lü-AHⁿ dahⁿ la ree-VYEHR', ['pollution']),
  sent(1043, 'Le principe est simple : le pollueur doit payer.', 'The principle is simple: the polluter must pay.', '/lə pʁɛ̃.sip ɛ sɛ̃pl lə pɔ.lɥœʁ dwa pɛ.je/', 'luh prehⁿ-SEEP eh SEHⁿPL | luh po-lü-UHR dwa peh-YAY', ['pollution', 'societe']),
  sent(1044, "Hier, la qualité de l'air était mauvaise à Montréal.", 'Yesterday, air quality was poor in Montréal.', '/jɛʁ la ka.li.te də lɛʁ e.tɛ mo.vɛz a mɔ̃.ʁe.al/', 'YEHR | la ka-lee-TAY duh LEHR ay-teh moh-VEHZ a mohⁿ-ray-AL', ['pollution', 'quebec'], FCVDR),
  sent(1045, 'Les transports émettent beaucoup de gaz à effet de serre.', 'Transport emits a lot of greenhouse gases.', '/le tʁɑ̃s.pɔʁ e.mɛt bo.ku də ɡaz a e.fɛ də sɛʁ/', 'lay trahⁿs-POR ay-MEHT boh-KOO duh GAZ a eh-FEH duh SEHR', ['pollution']),
  sent(1046, 'La ville veut réduire les émissions de ses autobus.', 'The city wants to reduce its buses’ emissions.', '/la vil vø ʁe.dɥiʁ le.ze.mi.sjɔ̃ də se.zo.to.bys/', 'la VEEL VUH ray-DWEER lay-zay-mee-SYOHⁿ duh say-zo-to-BÜS', ['pollution', 'quebec']),
  sent(1047, "L'eau de ce lac est polluée.", 'The water in this lake is polluted.', '/lo də sə lak ɛ pɔ.lɥe/', 'LOH duh suh LAK eh po-lü-AY', ['pollution']),
  sent(1048, "Avec la fin du mot, tu sais si c'est un nom ou un adjectif.", 'From the end of the word you can tell whether it is a noun or an adjective.', '/a.vɛk la fɛ̃ dy mo ty sɛ si sɛ.tœ̃ nɔ̃ u œ̃.na.ʒɛk.tif/', 'a-vehk la FEHⁿ dü MOH | tü SEH see seh-tuhⁿ NOHⁿ oo uh-na-zhehk-TEEF', ['rule', 'suffixe'], ['flashcard'],
    rule('Pollution, polluant, pollueur : lequel est une personne ?', 'Le pollueur. La fin -eur fait une personne, -tion une chose, -ant un adjectif.')),
  sent(1049, "Un pollueur, c'est une personne ou une entreprise qui pollue.", 'A polluter is a person or a company that pollutes.', '/œ̃ pɔ.lɥœʁ sɛ.tyn pɛʁ.sɔn u y.nɑ̃.tʁə.pʁiz ki pɔ.ly/', 'uhⁿ po-lü-UHR | seh-tün pehr-SONN oo ü-nahⁿ-truh-PREEZ kee po-LÜ', ['pollution']),
  sent(1050, 'Les autobus électriques ne rejettent pas de gaz dans la rue.', 'Electric buses do not release any exhaust into the street.', '/le.zo.to.bys e.lɛk.tʁik nə ʁə.ʒɛt pa də ɡaz dɑ̃ la ʁy/', 'lay-zo-to-BÜS ay-lehk-TREEK nuh ruh-ZHEHT pa duh GAZ dahⁿ la RÜ', ['pollution']),
  sent(1051, "On respire mal quand l'air est pollué.", 'You breathe badly when the air is polluted.', '/ɔ̃ ʁɛs.piʁ mal kɑ̃ lɛʁ ɛ pɔ.lɥe/', 'ohⁿ rehs-PEER MAL | kahⁿ LEHR eh po-lü-AY', ['pollution'], FCVDR),
];

/* ── ACT 4 · TRIER ET RECYCLER ───────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  fam(1052, 'trier, le tri, faire le tri', 'to sort, sorting, to sort your waste', '/tʁi.je lə tʁi fɛʁ lə tʁi/', 'tree-YAY, luh TREE, fehr luh TREE', ['dechets'], 'On trie ses déchets ; on fait le tri.'),
  fam(1053, 'recycler, le recyclage, recyclable', 'to recycle, recycling, recyclable', '/ʁə.si.kle lə ʁə.si.klaʒ ʁə.si.klabl/', 'ruh-see-KLAY, luh ruh-see-KLAZH, ruh-see-KLABL', ['dechets'], 'Recyclable : on peut le recycler. Recyclé : il a déjà été recyclé.'),
  fam(1054, 'le compost, composter', 'compost, to compost', '/lə kɔ̃.pɔst kɔ̃.pɔs.te/', 'luh kohⁿ-POST, kohⁿ-pos-TAY', ['dechets'], 'En France, composter veut aussi dire valider un billet.'),
  col(1055, 'les matières recyclables', 'recyclable materials', '/le ma.tjɛʁ ʁə.si.klabl/', 'lay ma-TYEHR ruh-see-KLABL', ['dechets', 'quebec']),
  col(1056, 'le bac bleu', 'the blue recycling bin (Québec)', '/lə bak blø/', 'luh bak BLUH', ['dechets', 'quebec', 'variante']),
  col(1057, 'le sac PMC', 'the PMC recycling bag (Belgium)', '/lə sak pe.ɛm.se/', 'luh SAK pay-emm-SAY', ['dechets', 'belgique', 'variante'], 'P pour plastiques, M pour métaux, C pour cartons à boissons.'),
  col(1058, 'la poubelle jaune', 'the yellow recycling bin (France)', '/la pu.bɛl ʒon/', 'la poo-behl ZHOHNN', ['dechets', 'france', 'variante']),
  col(1059, 'le sac taxé', 'the taxed rubbish bag (Switzerland)', '/lə sak tak.se/', 'luh SAK tak-SAY', ['dechets', 'suisse', 'variante']),
  col(1060, 'la consigne', 'the bottle deposit', '/la kɔ̃.siɲ/', 'la kohⁿ-SEENY', ['dechets', 'quebec'], 'On récupère la consigne en rapportant la bouteille.'),
  sent(1061, 'À Montréal, le papier et le plastique vont dans le bac bleu.', 'In Montréal, paper and plastic go in the blue bin.', '/a mɔ̃.ʁe.al lə pa.pje e lə plas.tik vɔ̃ dɑ̃ lə bak blø/', 'a mohⁿ-ray-AL | luh pa-PYAY ay luh plas-TEEK vohⁿ dahⁿ luh bak BLUH', ['dechets', 'quebec'], FCVDR),
  sent(1062, 'En Belgique, les bouteilles en plastique vont dans le sac PMC.', 'In Belgium, plastic bottles go in the PMC bag.', '/ɑ̃ bɛl.ʒik le bu.tɛj ɑ̃ plas.tik vɔ̃ dɑ̃ lə sak pe.ɛm.se/', 'ahⁿ behl-ZHEEK | lay boo-TEHY ahⁿ plas-TEEK vohⁿ dahⁿ luh SAK pay-emm-SAY', ['dechets', 'belgique']),
  sent(1063, 'En France, on met les emballages dans la poubelle jaune.', 'In France, packaging goes in the yellow bin.', '/ɑ̃ fʁɑ̃s ɔ̃ mɛ le.zɑ̃.ba.laʒ dɑ̃ la pu.bɛl ʒon/', 'ahⁿ FRAHⁿSS | ohⁿ MEH lay-zahⁿ-ba-LAZH dahⁿ la poo-behl ZHOHNN', ['dechets', 'france']),
  sent(1064, "À Lausanne, on paie chaque sac de déchets : c'est la taxe au sac.", 'In Lausanne, you pay for every rubbish bag: it is the bag tax.', '/a lo.zan ɔ̃ pɛ ʃak sak də de.ʃɛ sɛ la taks o sak/', 'a loh-ZANN ohⁿ PEH shak SAK duh day-SHEH | seh la TAX oh SAK', ['dechets', 'suisse']),
  sent(1065, 'Les épluchures de légumes vont au compost.', 'Vegetable peelings go in the compost.', '/le.ze.ply.ʃyʁ də le.ɡym vɔ̃.to kɔ̃.pɔst/', 'lay-zay-plü-SHÜR duh lay-GÜM vohⁿ-toh kohⁿ-POST', ['dechets'], FCVDR),
  sent(1066, 'Est-ce que ce pot de yaourt est recyclable ?', 'Is this yoghurt pot recyclable?', '/ɛs.kə sə po də ja.uʁt ɛ ʁə.si.klabl/', 'ehs-kuh suh POH duh ya-OORT eh ruh-see-KLABL', ['dechets']),
  sent(1067, 'Je rapporte mes bouteilles vides pour récupérer la consigne.', 'I take my empty bottles back to get the deposit.', '/ʒə ʁa.pɔʁt me bu.tɛj vid puʁ ʁe.ky.pe.ʁe la kɔ̃.siɲ/', 'zhuh ra-PORT may boo-TEHY VEED | poor ray-kü-pay-RAY la kohⁿ-SEENY', ['dechets']),
  sent(1068, 'Chez nous, on a appris à faire le tri en famille.', 'At home, we learned to sort our waste as a family.', '/ʃe nu ɔ̃.na a.pʁi a fɛʁ lə tʁi ɑ̃ fa.mij/', 'shay NOO | ohⁿ-na a-PREE a fehr luh TREE ahⁿ fa-MEEY', ['dechets'], FCVDR),
  sent(1069, "Les déchets, c'est ce qu'on jette ; le gaspillage, c'est ce qu'on perd.", 'Les déchets is what you throw away; le gaspillage is what you waste.', '/le de.ʃɛ sɛ skɔ̃ ʒɛt lə ɡas.pi.jaʒ sɛ skɔ̃ pɛʁ/', 'lay day-SHEH seh skohⁿ ZHEHT | luh gas-pee-YAZH seh skohⁿ PEHR', ['rule', 'faux-ami'], ['flashcard'],
    rule('Waste : les déchets ou le gaspillage ?', 'Les deux. Les déchets : ce que tu jettes. Le gaspillage : ce que tu perds pour rien.')),
  sent(1070, "Composter, c'est aussi valider un billet en France.", 'Composter also means to validate a ticket in France.', '/kɔ̃.pɔs.te sɛ.to.si va.li.de œ̃ bi.jɛ ɑ̃ fʁɑ̃s/', 'kohⁿ-pos-TAY seh-toh-SEE va-lee-DAY uhⁿ bee-YEH ahⁿ FRAHⁿSS', ['faux-ami', 'france']),
];

/* ── ACT 5 · CONSOMMER AUTREMENT ─────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  fam(1071, 'consommer, la consommation, un consommateur', 'to consume, consumption, a consumer', '/kɔ̃.sɔ.me la kɔ̃.sɔ.ma.sjɔ̃ œ̃ kɔ̃.sɔ.ma.tœʁ/', 'kohⁿ-so-MAY, la kohⁿ-so-ma-SYOHⁿ, uhⁿ kohⁿ-so-ma-TUHR', ['consommation'], 'Au café, une consommation, c’est une boisson.'),
  col(1072, 'acheter local', 'to buy local', '/aʃ.te lɔ.kal/', 'ash-TAY lo-KAL', ['consommation']),
  col(1073, 'acheter en vrac', 'to buy loose, without packaging', '/aʃ.te ɑ̃ vʁak/', 'ash-TAY ahⁿ VRAK', ['consommation'], 'En vrac : sans emballage. En gros : en grande quantité.'),
  fam(1074, 'gaspiller, le gaspillage alimentaire', 'to waste, food waste', '/ɡas.pi.je lə ɡas.pi.jaʒ a.li.mɑ̃.tɛʁ/', 'gas-pee-YAY, luh gas-pee-YAZH a-lee-mahⁿ-TEHR', ['consommation'], 'On gaspille ce qui était encore utile.'),
  col(1075, 'acheter de seconde main', 'to buy second-hand', '/aʃ.te də sə.ɡɔ̃d mɛ̃/', 'ash-TAY duh suh-gohⁿd MEHⁿ', ['consommation'], 'Aussi : acheter d’occasion.'),
  fam(1076, 'réparer, la réparation, réparable', 'to repair, repair, repairable', '/ʁe.pa.ʁe la ʁe.pa.ʁa.sjɔ̃ ʁe.pa.ʁabl/', 'ray-pa-RAY, la ray-pa-ra-SYOHⁿ, ray-pa-RABL', ['consommation'], 'To fix : réparer, pas fixer.'),
  col(1077, 'réparer plutôt que jeter', 'to repair rather than throw away', '/ʁe.pa.ʁe ply.to kə ʒə.te/', 'ray-pa-RAY plü-TOH kuh zhuh-TAY', ['consommation']),
  col(1078, 'le suremballage', 'overpackaging', '/lə sy.ʁɑ̃.ba.laʒ/', 'luh sü-rahⁿ-ba-LAZH', ['consommation', 'dechets']),
  col(1079, 'un objet jetable', 'a disposable item', '/œ̃.nɔb.ʒɛ ʒə.tabl/', 'uh-nob-ZHEH zhuh-TABL', ['consommation']),
  sent(1080, "Au marché, j'achète des fruits de saison.", 'At the market, I buy seasonal fruit.', '/o maʁ.ʃe ʒa.ʃɛt de fʁɥi də sɛ.zɔ̃/', 'oh mar-SHAY | zha-SHEHT day FRWEE duh seh-ZOHⁿ', ['consommation'], FCVDR),
  sent(1081, 'Dans cette épicerie, on achète le riz et les pâtes en vrac.', 'In this grocery shop, you buy rice and pasta loose.', '/dɑ̃ sɛ.te.pis.ʁi ɔ̃.na.ʃɛt lə ʁi e le pɑt ɑ̃ vʁak/', 'dahⁿ seh-tay-pees-REE | ohⁿ-na-SHEHT luh REE ay lay PAHT ahⁿ VRAK', ['consommation']),
  sent(1082, 'Le gaspillage alimentaire commence dans le frigo.', 'Food waste starts in the fridge.', '/lə ɡas.pi.jaʒ a.li.mɑ̃.tɛʁ kɔ.mɑ̃s dɑ̃ lə fʁi.ɡo/', 'luh gas-pee-YAZH a-lee-mahⁿ-TEHR ko-MAHⁿSS dahⁿ luh free-GOH', ['consommation']),
  sent(1083, "Mon manteau d'hiver, je l'ai acheté de seconde main.", 'My winter coat, I bought it second-hand.', '/mɔ̃ mɑ̃.to di.vɛʁ ʒə le aʃ.te də sə.ɡɔ̃d mɛ̃/', 'mohⁿ mahⁿ-TOH dee-VEHR | zhuh LAY ash-TAY duh suh-gohⁿd MEHⁿ', ['consommation']),
  sent(1084, 'Au café-réparation, un bénévole a réparé mon grille-pain.', 'At the repair café, a volunteer fixed my toaster.', '/o ka.fe.ʁe.pa.ʁa.sjɔ̃ œ̃ be.ne.vɔl a ʁe.pa.ʁe mɔ̃ ɡʁij.pɛ̃/', 'oh ka-fay-ray-pa-ra-SYOHⁿ | uhⁿ bay-nay-VOL a ray-pa-RAY mohⁿ greey-PEHⁿ', ['consommation', 'suisse'], FCVDR),
  sent(1085, "Les consommateurs veulent moins d'emballages.", 'Consumers want less packaging.', '/le kɔ̃.sɔ.ma.tœʁ vœl mwɛ̃ dɑ̃.ba.laʒ/', 'lay kohⁿ-so-ma-TUHR VUHL mwehⁿ dahⁿ-ba-LAZH', ['consommation']),
  sent(1086, "Trois couches de plastique pour quatre biscuits, c'est du suremballage.", 'Three layers of plastic for four biscuits is overpackaging.', '/tʁwa kuʃ də plas.tik puʁ katʁ bis.kɥi sɛ dy sy.ʁɑ̃.ba.laʒ/', 'trwa KOOSH duh plas-TEEK poor katr bees-KWEE | seh dü sü-rahⁿ-ba-LAZH', ['consommation']),
  sent(1087, 'Ce vieux téléphone est encore réparable.', 'This old phone can still be repaired.', '/sə vjø te.le.fɔn ɛ.tɑ̃.kɔʁ ʁe.pa.ʁabl/', 'suh VYUH tay-lay-FONN eh-tahⁿ-KOR ray-pa-RABL', ['consommation']),
  sent(1088, "Notre consommation d'eau a baissé cette année.", 'Our water consumption went down this year.', '/nɔtʁ kɔ̃.sɔ.ma.sjɔ̃ do a be.se sɛ.ta.ne/', 'notr kohⁿ-so-ma-SYOHⁿ DOH a beh-SAY seh-ta-NAY', ['consommation']),
  sent(1089, "Au café, une consommation, c'est une boisson.", 'In a café, une consommation is a drink.', '/o ka.fe yn kɔ̃.sɔ.ma.sjɔ̃ sɛ.tyn bwa.sɔ̃/', 'oh ka-FAY | ün kohⁿ-so-ma-SYOHⁿ seh-tün bwa-SOHⁿ', ['consommation', 'faux-ami']),
  sent(1090, "J'achète local : les œufs viennent d'une ferme à côté.", 'I buy local: the eggs come from a nearby farm.', '/ʒa.ʃɛt lɔ.kal le.zø vjɛn dyn fɛʁm a ko.te/', 'zha-SHEHT lo-KAL | lay-ZUH VYEHNN dün FEHRM a koh-TAY', ['consommation']),
  sent(1091, "J'apporte toujours un sac réutilisable au marché.", 'I always bring a reusable bag to the market.', '/ʒa.pɔʁt tu.ʒuʁ œ̃ sak ʁe.y.ti.li.zabl o maʁ.ʃe/', 'zha-PORT too-ZHOOR uhⁿ SAK ray-ü-tee-lee-ZABL oh mar-SHAY', ['consommation'], FCVDR),
  fam(1092, 'réutiliser, réutilisable', 'to reuse, reusable', '/ʁe.y.ti.li.ze ʁe.y.ti.li.zabl/', 'ray-ü-tee-lee-ZAY, ray-ü-tee-lee-ZABL', ['consommation'], 'Pas réusable : réutilisable.'),
];

/* ── ACT 6 · L'ÉNERGIE ───────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  col(1093, 'les énergies renouvelables', 'renewable energy', '/le.ze.nɛʁ.ʒi ʁə.nu.vlabl/', 'lay-zay-nehr-ZHEE ruh-noo-VLABL', ['energie'], 'Renouvelable : qui peut se renouveler.'),
  fam(1094, "le vent, l'éolien, une éolienne", 'wind, wind power, a wind turbine', '/lə vɑ̃ le.ɔ.ljɛ̃ y.ne.ɔ.ljɛn/', 'luh VAHⁿ, lay-o-LYEHⁿ, ü-nay-o-LYEHNN', ['energie'], 'Une éolienne, pas un moulin à vent.'),
  fam(1095, 'le soleil, le solaire, un panneau solaire', 'the sun, solar power, a solar panel', '/lə sɔ.lɛj lə sɔ.lɛʁ œ̃ pa.no sɔ.lɛʁ/', 'luh so-LEHY, luh so-LEHR, uhⁿ pa-NOH so-LEHR', ['energie'], 'Un panneau, pas un panel.'),
  fam(1096, "l'eau, un barrage, l'hydroélectricité", 'water, a dam, hydroelectricity', '/lo œ̃ ba.ʁaʒ li.dʁo.e.lɛk.tʁi.si.te/', 'LOH, uhⁿ ba-RAZH, lee-dro-ay-lehk-tree-see-TAY', ['energie', 'quebec'], 'Au Québec, presque toute l’électricité vient de l’eau.'),
  col(1097, 'une centrale nucléaire', 'a nuclear power plant', '/yn sɑ̃.tʁal ny.kle.ɛʁ/', 'ün sahⁿ-TRAL nü-klay-EHR', ['energie', 'france'], 'Power plant : une centrale, pas une plante.'),
  col(1098, 'les énergies fossiles', 'fossil fuels', '/le.ze.nɛʁ.ʒi fɔ.sil/', 'lay-zay-nehr-ZHEE fo-SEEL', ['energie']),
  col(1099, 'baisser le chauffage', 'to turn the heating down', '/be.se lə ʃo.faʒ/', 'beh-SAY luh shoh-FAZH', ['energie', 'geste']),
  col(1100, 'éteindre la lumière', 'to turn off the light', '/e.tɛ̃dʁ la ly.mjɛʁ/', 'ay-tehⁿdr la lü-MYEHR', ['energie', 'geste'], 'Au Québec : fermer la lumière.'),
  sent(1101, "Au Québec, presque toute l'électricité vient de l'eau.", 'In Québec, almost all electricity comes from water.', '/o ke.bɛk pʁɛsk tut le.lɛk.tʁi.si.te vjɛ̃ də lo/', 'oh kay-BEHK | prehsk TOOT lay-lehk-tree-see-TAY vyehⁿ duh LOH', ['energie', 'quebec'], FCVDR),
  sent(1102, "En France, environ deux tiers de l'électricité viennent du nucléaire.", 'In France, about two thirds of electricity comes from nuclear power.', '/ɑ̃ fʁɑ̃s ɑ̃.vi.ʁɔ̃ dø tjɛʁ də le.lɛk.tʁi.si.te vjɛn dy ny.kle.ɛʁ/', 'ahⁿ FRAHⁿSS | ahⁿ-vee-ROHⁿ deu TYEHR duh lay-lehk-tree-see-TAY VYEHNN dü nü-klay-EHR', ['energie', 'france']),
  sent(1103, "Dans la région de Thiès, au Sénégal, des éoliennes produisent de l'électricité.", 'In the Thiès region, in Senegal, wind turbines produce electricity.', '/dɑ̃ la ʁe.ʒjɔ̃ də tjɛs o se.ne.ɡal de.ze.ɔ.ljɛn pʁɔ.dɥiz də le.lɛk.tʁi.si.te/', 'dahⁿ la ray-ZHYOHⁿ duh TYEHSS oh say-nay-GAL | day-zay-o-LYEHNN pro-DWEEZ duh lay-lehk-tree-see-TAY', ['energie', 'senegal']),
  sent(1104, "L'école a installé des panneaux solaires sur son toit.", 'The school put solar panels on its roof.', '/le.kɔl a ɛ̃s.ta.le de pa.no sɔ.lɛʁ syʁ sɔ̃ twa/', 'lay-KOL a ehⁿs-ta-LAY day pa-NOH so-LEHR sür sohⁿ TWA', ['energie']),
  sent(1105, "Le soir, on baisse le chauffage d'un degré.", 'In the evening, we turn the heating down one degree.', '/lə swaʁ ɔ̃ bɛs lə ʃo.faʒ dœ̃ də.ɡʁe/', 'luh SWAR | ohⁿ BEHSS luh shoh-FAZH duhⁿ duh-GRAY', ['energie', 'geste'], FCVDR),
  sent(1106, "Ferme la lumière en sortant, s'il te plaît.", 'Turn off the light when you leave, please. (Québec)', '/fɛʁm la ly.mjɛʁ ɑ̃ sɔʁ.tɑ̃ sil tə plɛ/', 'fehrm la lü-MYEHR ahⁿ sor-TAHⁿ | seel tuh PLEH', ['energie', 'quebec', 'variante']),
  sent(1107, "Éteins la lumière en sortant, s'il te plaît.", 'Turn off the light when you leave, please.', '/e.tɛ̃ la ly.mjɛʁ ɑ̃ sɔʁ.tɑ̃ sil tə plɛ/', 'ay-TEHⁿ la lü-MYEHR ahⁿ sor-TAHⁿ | seel tuh PLEH', ['energie', 'france']),
  sent(1108, 'Le pétrole et le charbon sont des énergies fossiles.', 'Oil and coal are fossil fuels.', '/lə pe.tʁɔl e lə ʃaʁ.bɔ̃ sɔ̃ de.ze.nɛʁ.ʒi fɔ.sil/', 'luh pay-TROL ay luh shar-BOHⁿ sohⁿ day-zay-nehr-ZHEE fo-SEEL', ['energie']),
  sent(1109, 'Le vent et le soleil sont des énergies renouvelables.', 'Wind and sun are renewable energy sources.', '/lə vɑ̃ e lə sɔ.lɛj sɔ̃ de.ze.nɛʁ.ʒi ʁə.nu.vlabl/', 'luh VAHⁿ ay luh so-LEHY sohⁿ day-zay-nehr-ZHEE ruh-noo-VLABL', ['energie']),
  sent(1110, 'Hier soir, il y a eu une panne de courant dans tout le quartier.', 'Last night there was a power cut in the whole neighbourhood.', '/jɛʁ swaʁ il ja y yn pan də ku.ʁɑ̃ dɑ̃ tu lə kaʁ.tje/', 'yehr SWAR | eel ya Ü ün PANN duh koo-RAHⁿ dahⁿ too luh kar-TYAY', ['energie']),
  sent(1111, "Une centrale, c'est une usine qui produit de l'électricité.", 'A power plant is a factory that produces electricity.', '/yn sɑ̃.tʁal sɛ.ty.ny.zin ki pʁɔ.dɥi də le.lɛk.tʁi.si.te/', 'ün sahⁿ-TRAL | seh-tü-nü-ZEEN kee pro-DWEE duh lay-lehk-tree-see-TAY', ['energie', 'faux-ami']),
  sent(1112, "L'énergie la moins chère, c'est celle qu'on ne consomme pas.", 'The cheapest energy is the energy you do not use.', '/le.nɛʁ.ʒi la mwɛ̃ ʃɛʁ sɛ sɛl kɔ̃ nə kɔ̃.sɔm pa/', 'lay-nehr-ZHEE la mwehⁿ SHEHR | seh SEHL kohⁿ nuh kohⁿ-SOMM PA', ['energie', 'geste']),
];

/* ── ACT 7 · SE DÉPLACER EN VILLE ────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  col(1113, 'les transports publics', 'public transport (Switzerland)', '/le tʁɑ̃s.pɔʁ py.blik/', 'lay trahⁿs-POR pü-BLEEK', ['transport', 'suisse', 'variante'], 'En France et au Québec : les transports en commun.'),
  fam(1114, 'covoiturer, le covoiturage', 'to carpool, carpooling', '/ko.vwa.ty.ʁe lə ko.vwa.ty.ʁaʒ/', 'ko-vwa-tü-RAY, luh ko-vwa-tü-RAZH', ['transport'], 'On fait du covoiturage.'),
  col(1115, 'une piste cyclable', 'a bike lane', '/yn pist si.klabl/', 'ün PEEST see-KLABL', ['transport']),
  col(1116, 'une voiture électrique', 'an electric car', '/yn vwa.tyʁ e.lɛk.tʁik/', 'ün vwa-TÜR ay-lehk-TREEK', ['transport']),
  col(1117, 'une borne de recharge', 'a charging station', '/yn bɔʁn də ʁə.ʃaʁʒ/', 'ün BORN duh ruh-SHARZH', ['transport']),
  col(1118, 'une zone à faibles émissions', 'a low-emission zone', '/yn zon a fɛbl e.mi.sjɔ̃/', 'ün ZOHNN a FEHBL ay-mee-SYOHⁿ', ['transport', 'france']),
  fam(1119, 'circuler, la circulation, les bouchons', 'to drive around, traffic, traffic jams', '/siʁ.ky.le la siʁ.ky.la.sjɔ̃ le bu.ʃɔ̃/', 'seer-kü-LAY, la seer-kü-la-SYOHⁿ, lay boo-SHOHⁿ', ['transport'], 'Aussi : les embouteillages. Au Québec, on dit aussi le trafic.'),
  col(1120, 'rouler à vélo', 'to ride a bike', '/ʁu.le a ve.lo/', 'roo-LAY a vay-LOH', ['transport'], 'Ou faire du vélo. Conduire, c’est pour une voiture.'),
  sent(1121, 'Je vais au travail à vélo, par la piste cyclable.', 'I go to work by bike, along the bike lane.', '/ʒə ve o tʁa.vaj a ve.lo paʁ la pist si.klabl/', 'zhuh VEH oh tra-VAHY a vay-LOH | par la PEEST see-KLABL', ['transport'], FCVDR),
  sent(1122, 'On fait du covoiturage avec deux collègues.', 'We carpool with two colleagues.', '/ɔ̃ fɛ dy ko.vwa.ty.ʁaʒ a.vɛk dø kɔ.lɛɡ/', 'ohⁿ FEH dü ko-vwa-tü-RAZH a-vehk deu ko-LEHG', ['transport']),
  sent(1123, 'À Lyon, la zone à faibles émissions fait débat.', 'In Lyon, the low-emission zone is being debated.', '/a ljɔ̃ la zon a fɛbl e.mi.sjɔ̃ fɛ de.ba/', 'a lee-OHⁿ | la ZOHNN a FEHBL ay-mee-SYOHⁿ feh day-BA', ['transport', 'france']),
  sent(1124, 'Dans cette zone, les voitures trop polluantes ne peuvent pas circuler.', 'In this zone, cars that pollute too much are not allowed to drive.', '/dɑ̃ sɛt zon le vwa.tyʁ tʁo pɔ.lɥɑ̃t nə pœv pa siʁ.ky.le/', 'dahⁿ seht ZOHNN | lay vwa-TÜR troh po-lü-AHⁿT nuh puhv pa seer-kü-LAY', ['transport']),
  sent(1125, 'Une voiture électrique coûte cher, mais elle ne rejette pas de gaz dans la rue.', 'An electric car is expensive, but it does not release any exhaust into the street.', '/yn vwa.tyʁ e.lɛk.tʁik kut ʃɛʁ mɛ ɛl nə ʁə.ʒɛt pa də ɡaz dɑ̃ la ʁy/', 'ün vwa-TÜR ay-lehk-TREEK koot SHEHR | meh ehl nuh ruh-ZHEHT pa duh GAZ dahⁿ la RÜ', ['transport']),
  sent(1126, "Il n'y a pas assez de bornes de recharge dans mon quartier.", 'There are not enough charging stations in my neighbourhood.', '/il nja pa.za.se də bɔʁn də ʁə.ʃaʁʒ dɑ̃ mɔ̃ kaʁ.tje/', 'eel NYA pa-za-SAY duh BORN duh ruh-SHARZH dahⁿ mohⁿ kar-TYAY', ['transport']),
  sent(1127, 'À Genève, je prends les transports publics tous les jours.', 'In Geneva, I take public transport every day.', '/a ʒə.nɛv ʒə pʁɑ̃ le tʁɑ̃s.pɔʁ py.blik tu le ʒuʁ/', 'a zhuh-NEHV | zhuh PRAHⁿ lay trahⁿs-POR pü-BLEEK too lay ZHOOR', ['transport', 'suisse'], FCVDR),
  sent(1128, 'Le matin, il y a des bouchons sur le pont.', 'In the morning, there are traffic jams on the bridge.', '/lə ma.tɛ̃ il ja de bu.ʃɔ̃ syʁ lə pɔ̃/', 'luh ma-TEHⁿ | eel YA day boo-SHOHⁿ sür luh POHⁿ', ['transport']),
  sent(1129, "Moins de voitures, c'est moins de bruit et un air plus propre.", 'Fewer cars means less noise and cleaner air.', '/mwɛ̃ də vwa.tyʁ sɛ mwɛ̃ də bʁɥi e œ̃.nɛʁ ply pʁɔpʁ/', 'mwehⁿ duh vwa-TÜR | seh mwehⁿ duh BRWEE ay uh-nehr plü PROPR', ['transport']),
  sent(1130, "Pour moi, la voiture reste nécessaire : j'habite loin du métro.", 'For me, the car is still necessary: I live far from the metro.', '/puʁ mwa la vwa.tyʁ ʁɛst ne.se.sɛʁ ʒa.bit lwɛ̃ dy me.tʁo/', 'poor MWA | la vwa-TÜR rehst nay-say-SEHR | zha-BEET lwehⁿ dü may-TROH', ['transport']),
  sent(1131, 'On ne conduit pas un vélo : on roule à vélo.', 'You do not drive a bike: you ride one.', '/ɔ̃ nə kɔ̃.dɥi pa œ̃ ve.lo ɔ̃ ʁul a ve.lo/', 'ohⁿ nuh kohⁿ-DWEE pa uhⁿ vay-LOH | ohⁿ ROOL a vay-LOH', ['rule', 'transport'], ['flashcard'],
    rule('To ride a bike : quel verbe ?', 'Rouler à vélo, ou faire du vélo. Conduire, c’est pour une voiture.')),
];

/* ── ACT 8 · PROTÉGER LA NATURE ──────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  fam(1132, 'protéger, la protection, protégé', 'to protect, protection, protected', '/pʁɔ.te.ʒe la pʁɔ.tɛk.sjɔ̃ pʁɔ.te.ʒe/', 'pro-tay-ZHAY, la pro-tehk-SYOHⁿ, pro-tay-ZHAY', ['nature'], 'To protect : protéger, pas protecter.'),
  fam(1133, 'menacer, une menace, menacé', 'to threaten, a threat, threatened', '/mə.na.se yn mə.nas mə.na.se/', 'muh-na-SAY, ün muh-NASS, muh-na-SAY', ['nature'], 'Menacé : en danger. Menaçant : qui fait peur.'),
  col(1134, 'une espèce menacée', 'a threatened species', '/y.nɛs.pɛs mə.na.se/', 'ü-nehs-PEHSS muh-na-SAY', ['nature']),
  col(1135, 'en voie de disparition', 'endangered', '/ɑ̃ vwa də dis.pa.ʁi.sjɔ̃/', 'ahⁿ VWA duh dees-pa-ree-SYOHⁿ', ['nature']),
  col(1136, 'la biodiversité', 'biodiversity', '/la bjo.di.vɛʁ.si.te/', 'la byo-dee-vehr-see-TAY', ['nature']),
  fam(1137, 'la forêt, déboiser, la déforestation', 'the forest, to clear trees, deforestation', '/la fɔ.ʁɛ de.bwa.ze la de.fɔ.ʁɛs.ta.sjɔ̃/', 'la fo-REH, day-bwa-ZAY, la day-fo-rehs-ta-SYOHⁿ', ['nature'], 'Le contraire : reboiser, planter des arbres.'),
  fam(1138, 'le désert, la désertification', 'the desert, desertification', '/lə de.zɛʁ la de.zɛʁ.ti.fi.ka.sjɔ̃/', 'luh day-ZEHR, la day-zehr-tee-fee-ka-SYOHⁿ', ['nature', 'sahel'], 'Pas la désertion : ça, c’est abandonner son poste.'),
  col(1139, 'planter des arbres', 'to plant trees', '/plɑ̃.te de.zaʁbʁ/', 'plahⁿ-TAY day-ZARBR', ['nature', 'geste']),
  sent(1140, 'Les bélugas du Saint-Laurent sont une espèce menacée.', 'The St. Lawrence belugas are a threatened species.', '/le be.ly.ɡa dy sɛ̃.lɔ.ʁɑ̃ sɔ̃.ty.nɛs.pɛs mə.na.se/', 'lay bay-lü-GA dü sehⁿ-lo-RAHⁿ | sohⁿ-tü-nehs-PEHSS muh-na-SAY', ['nature', 'quebec'], FCVDR),
  sent(1141, 'Le bruit des bateaux est une menace pour les bélugas.', 'Boat noise is a threat to the belugas.', '/lə bʁɥi de ba.to ɛ.tyn mə.nas puʁ le be.ly.ɡa/', 'luh BRWEE day ba-TOH | eh-tün muh-NASS poor lay bay-lü-GA', ['nature', 'quebec']),
  sent(1142, 'Cette partie du fleuve est une zone protégée.', 'This part of the river is a protected area.', '/sɛt paʁ.ti dy flœv ɛ.tyn zon pʁɔ.te.ʒe/', 'seht par-TEE dü FLUHV | eh-tün ZOHNN pro-tay-ZHAY', ['nature', 'quebec']),
  sent(1143, 'Au Sahel, la Grande Muraille verte veut arrêter la désertification.', 'In the Sahel, the Great Green Wall aims to stop desertification.', '/o sa.ɛl la ɡʁɑ̃d my.ʁaj vɛʁt vø a.ʁɛ.te la de.zɛʁ.ti.fi.ka.sjɔ̃/', 'oh sa-EHL | la grahⁿd mü-RAHY VEHRT vuh a-reh-TAY la day-zehr-tee-fee-ka-SYOHⁿ', ['nature', 'sahel']),
  sent(1144, 'Au Sénégal, des villages plantent des arbres contre le désert.', 'In Senegal, villages plant trees against the desert.', '/o se.ne.ɡal de vi.laʒ plɑ̃t de.zaʁbʁ kɔ̃tʁ lə de.zɛʁ/', 'oh say-nay-GAL | day vee-LAZH PLAHⁿT day-ZARBR kohⁿtr luh day-ZEHR', ['nature', 'senegal'], FCVDR),
  sent(1145, 'La déforestation menace de nombreuses espèces.', 'Deforestation threatens many species.', '/la de.fɔ.ʁɛs.ta.sjɔ̃ mə.nas də nɔ̃.bʁø.zɛs.pɛs/', 'la day-fo-rehs-ta-SYOHⁿ muh-NASS duh nohⁿ-bruh-zehs-PEHSS', ['nature']),
  sent(1146, 'Il faut protéger les zones humides.', 'We must protect the wetlands.', '/il fo pʁɔ.te.ʒe le zon y.mid/', 'eel foh pro-tay-ZHAY lay ZOHNN ü-MEED', ['nature']),
  sent(1147, "Une espèce menacée, pas menaçante : c'est elle qui est en danger.", 'A threatened species, not a threatening one: it is the one in danger.', '/y.nɛs.pɛs mə.na.se pa mə.na.sɑ̃t sɛ.tɛl ki ɛ.tɑ̃ dɑ̃.ʒe/', 'ü-nehs-PEHSS muh-na-SAY | pa muh-na-SAHⁿT | seh-TEHL kee eh-tahⁿ dahⁿ-ZHAY', ['rule', 'nature'], ['flashcard'],
    rule('Une espèce menacée ou menaçante ?', 'Menacée : elle est en danger, elle subit. Menaçante : elle fait peur, elle agit.')),
  sent(1148, "La biodiversité, c'est toute la vie d'un lieu : plantes, animaux, insectes.", 'Biodiversity is all the life of a place: plants, animals, insects.', '/la bjo.di.vɛʁ.si.te sɛ tut la vi dœ̃ ljø plɑ̃t a.ni.mo ɛ̃.sɛkt/', 'la byo-dee-vehr-see-TAY seh toot la VEE duhⁿ LYUH | PLAHⁿT a-nee-MOH ehⁿ-SEHKT', ['nature']),
  sent(1149, 'Des bénévoles nettoient les berges du fleuve chaque printemps.', 'Volunteers clean the riverbanks every spring.', '/de be.ne.vɔl nɛ.twa le bɛʁʒ dy flœv ʃak pʁɛ̃.tɑ̃/', 'day bay-nay-VOL neh-TWA lay BEHRZH dü FLUHV shak prehⁿ-TAHⁿ', ['nature', 'geste']),
  sent(1150, 'Planter des arbres ne suffit pas : il faut aussi les arroser.', 'Planting trees is not enough: they also have to be watered.', '/plɑ̃.te de.zaʁbʁ nə sy.fi pa il fo o.si le.za.ʁo.ze/', 'plahⁿ-TAY day-ZARBR nuh sü-fee PA | eel foh oh-SEE lay-za-ro-ZAY', ['nature', 'sahel']),
];

/* ── ACT 9 · QUI PAIE, QUI DÉCIDE ────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1151, 'une taxe carbone', 'a carbon tax', '/yn taks kaʁ.bɔn/', 'ün TAX kar-BONN', ['societe']),
  fam(1152, 'payer, payant, gratuit', 'to pay, not free, free', '/pɛ.je pɛ.jɑ̃ ɡʁa.tɥi/', 'peh-YAY, peh-YAHⁿ, gra-TWEE', ['societe'], 'On paie la taxe, sans pour.'),
  fam(1153, 'manifester, une manifestation, un manifestant', 'to demonstrate, a demonstration, a protester', '/ma.ni.fɛs.te yn ma.ni.fɛs.ta.sjɔ̃ œ̃ ma.ni.fɛs.tɑ̃/', 'ma-nee-fehs-TAY, ün ma-nee-fehs-ta-SYOHⁿ, uhⁿ ma-nee-fehs-TAHⁿ', ['societe'], 'Demonstration : une manifestation. Une démonstration montre comment une chose marche.'),
  col(1154, 'signer une pétition', 'to sign a petition', '/si.ɲe yn pe.ti.sjɔ̃/', 'see-NYAY ün pay-tee-SYOHⁿ', ['societe']),
  fam(1155, 'décider, une décision, prendre une décision', 'to decide, a decision, to make a decision', '/de.si.de yn de.si.zjɔ̃ pʁɑ̃dʁ yn de.si.zjɔ̃/', 'day-see-DAY, ün day-see-ZYOHⁿ, prahⁿdr ün day-see-ZYOHⁿ', ['societe'], 'On prend une décision, on ne la fait pas.'),
  fam(1156, 'égal, inégal, les inégalités', 'equal, unequal, inequalities', '/e.ɡal i.ne.ɡal le.zi.ne.ɡa.li.te/', 'ay-GAL, ee-nay-GAL, lay-zee-nay-ga-lee-TAY', ['societe'], 'On réduit les inégalités.'),
  col(1157, "l'écoanxiété", 'eco-anxiety', '/le.ko.ɑ̃k.sje.te/', 'lay-ko-ahⁿk-syay-TAY', ['societe']),
  col(1158, 'le conseil municipal', 'the town council', '/lə kɔ̃.sɛj my.ni.si.pal/', 'luh kohⁿ-SEHY mü-nee-see-PAL', ['societe'], 'Au Québec, on dit aussi le conseil de ville.'),
  sent(1159, 'En 2019, des centaines de milliers de personnes ont manifesté pour le climat à Montréal.', 'In 2019, hundreds of thousands of people marched for the climate in Montréal.', '/ɑ̃ dø.mil.diz.nœf de sɑ̃.tɛn də mi.lje də pɛʁ.sɔn ɔ̃ ma.ni.fɛs.te puʁ lə kli.ma a mɔ̃.ʁe.al/', 'ahⁿ deu-meel-deez-NUHF | day sahⁿ-TEHNN duh mee-LYAY duh pehr-SONN | ohⁿ ma-nee-fehs-TAY poor luh klee-MA a mohⁿ-ray-AL', ['societe', 'quebec']),
  sent(1160, 'Beaucoup de manifestants étaient des jeunes.', 'Many of the protesters were young people.', '/bo.ku də ma.ni.fɛs.tɑ̃ e.tɛ de ʒœn/', 'boh-KOO duh ma-nee-fehs-TAHⁿ ay-TEH day ZHUHNN', ['societe'], FCVDR),
  sent(1161, 'Ma sœur a signé une pétition pour sauver le parc du quartier.', 'My sister signed a petition to save the neighbourhood park.', '/ma sœʁ a si.ɲe yn pe.ti.sjɔ̃ puʁ so.ve lə paʁk dy kaʁ.tje/', 'ma SUHR a see-NYAY ün pay-tee-SYOHⁿ | poor soh-VAY luh PARK dü kar-TYAY', ['societe']),
  sent(1162, "Une taxe carbone rend l'essence plus chère.", 'A carbon tax makes petrol more expensive.', '/yn taks kaʁ.bɔn ʁɑ̃ le.sɑ̃s ply ʃɛʁ/', 'ün TAX kar-BONN rahⁿ lay-SAHⁿSS plü SHEHR', ['societe']),
  sent(1163, 'Pour les familles qui habitent loin, cette taxe coûte cher.', 'For families who live far away, this tax is costly.', '/puʁ le fa.mij ki a.bit lwɛ̃ sɛt taks kut ʃɛʁ/', 'poor lay fa-MEEY kee a-BEET LWEHⁿ | seht TAX koot SHEHR', ['societe'], FCVDR),
  sent(1164, 'En France, en 2018, une hausse de la taxe sur les carburants a provoqué la crise des gilets jaunes.', 'In France, in 2018, a rise in the fuel tax set off the yellow vests crisis.', '/ɑ̃ fʁɑ̃s ɑ̃ dø.mil.diz.ɥit yn os də la taks syʁ le kaʁ.by.ʁɑ̃ a pʁɔ.vɔ.ke la kʁiz de ʒi.lɛ ʒon/', 'ahⁿ FRAHⁿSS | ahⁿ deu-meel-deez-WEET | ün OHSS duh la TAX sür lay kar-bü-RAHⁿ | a pro-vo-KAY la KREEZ day zhee-leh ZHOHNN', ['societe', 'france']),
  sent(1165, 'Ce ne sont pas les plus pauvres qui polluent le plus.', 'It is not the poorest who pollute the most.', '/sə nə sɔ̃ pa le ply povʁ ki pɔ.ly lə plys/', 'suh nuh sohⁿ pa lay plü POHVR kee po-LÜ luh PLÜSS', ['societe']),
  sent(1166, 'Pourtant, ce sont souvent eux qui souffrent le plus des canicules.', 'And yet they are often the ones who suffer most from heatwaves.', '/puʁ.tɑ̃ sə sɔ̃ su.vɑ̃ ø ki sufʁ lə plys de ka.ni.kyl/', 'poor-TAHⁿ | suh sohⁿ soo-VAHⁿ UH kee SOOFR luh PLÜSS day ka-nee-KÜL', ['societe']),
  sent(1167, "Beaucoup de jeunes parlent d'écoanxiété.", 'Many young people talk about eco-anxiety.', '/bo.ku də ʒœn paʁl de.ko.ɑ̃k.sje.te/', 'boh-KOO duh ZHUHNN PARL day-ko-ahⁿk-syay-TAY', ['societe']),
  sent(1168, "Le conseil municipal a pris une décision : la rue devant l'école sera piétonne.", 'The council made a decision: the street in front of the school will be pedestrian.', '/lə kɔ̃.sɛj my.ni.si.pal a pʁi yn de.si.zjɔ̃ la ʁy də.vɑ̃ le.kɔl sə.ʁa pje.tɔn/', 'luh kohⁿ-SEHY mü-nee-see-PAL a PREE ün day-see-ZYOHⁿ | la RÜ duh-vahⁿ lay-KOL suh-RA pyay-TONN', ['societe']),
  sent(1169, "Qui décide, et qui paie : c'est souvent la vraie question.", 'Who decides and who pays: that is often the real question.', '/ki de.sid e ki pɛ sɛ su.vɑ̃ la vʁɛ kɛs.tjɔ̃/', 'kee day-SEED ay kee PEH | seh soo-vahⁿ la vreh kehs-TYOHⁿ', ['societe']),
  sent(1170, "Au Québec, on dit aussi le conseil de ville et l'hôtel de ville.", 'In Québec, people also say le conseil de ville and l’hôtel de ville.', '/o ke.bɛk ɔ̃ di o.si lə kɔ̃.sɛj də vil e lo.tɛl də vil/', 'oh kay-BEHK | ohⁿ DEE oh-SEE luh kohⁿ-sehy duh VEEL ay loh-tehl duh VEEL', ['societe', 'quebec', 'variante']),
];

/* ── ACT 10 · DONNER TON AVIS ────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1171, 'être pour, être contre', 'to be for, to be against', '/ɛtʁ puʁ ɛtʁ kɔ̃tʁ/', 'ehtr POOR, ehtr KOHⁿTR', ['avis'], 'Je suis pour cette mesure. Je suis contre.'),
  col(1172, 'à mon avis, selon moi', 'in my opinion, in my view', '/a mɔ̃.na.vi sə.lɔ̃ mwa/', 'a mohⁿ-na-VEE, suh-lohⁿ MWA', ['avis'], 'Pas dans mon opinion.'),
  col(1173, 'il faudrait, on devrait', 'we should, one ought to', '/il fo.dʁɛ ɔ̃ də.vʁɛ/', 'eel foh-DREH, ohⁿ duh-VREH', ['avis', 'conditionnel'], 'Suivis d’un infinitif, sans de.'),
  col(1174, 'je propose de', 'I suggest, I propose to', '/ʒə pʁɔ.poz də/', 'zhuh pro-POZ duh', ['avis'], 'Je propose de + infinitif.'),
  col(1175, "d'un côté, de l'autre", 'on the one hand, on the other', '/dœ̃ ko.te də lotʁ/', 'duhⁿ koh-TAY, duh LOHTR', ['avis', 'connecteur']),
  sent(1176, "À mon avis, la rue piétonne est une bonne idée.", 'In my opinion, the pedestrian street is a good idea.', '/a mɔ̃.na.vi la ʁy pje.tɔn ɛ.tyn bɔ.ni.de/', 'a mohⁿ-na-VEE | la RÜ pyay-TONN eh-tün bo-nee-DAY', ['avis'], FCVDR),
  sent(1177, 'Je suis pour cette mesure, mais pas le samedi.', 'I am for this measure, but not on Saturdays.', '/ʒə sɥi puʁ sɛt mə.zyʁ mɛ pa lə sam.di/', 'zhuh swee POOR seht muh-ZÜR | meh pa luh sam-DEE', ['avis']),
  sent(1178, 'Je suis contre, parce que les commerçants vont perdre des clients.', 'I am against it, because the shopkeepers will lose customers.', '/ʒə sɥi kɔ̃tʁ paʁs.kə le kɔ.mɛʁ.sɑ̃ vɔ̃ pɛʁdʁ de kli.jɑ̃/', 'zhuh swee KOHⁿTR | pars-kuh lay ko-mehr-SAHⁿ vohⁿ pehrdr day klee-YAHⁿ', ['avis']),
  sent(1179, "Il faudrait plus d'arbres dans la cour de l'école.", 'There should be more trees in the schoolyard.', '/il fo.dʁɛ plys daʁbʁ dɑ̃ la kuʁ də le.kɔl/', 'eel foh-DREH plüss DARBR dahⁿ la KOOR duh lay-KOL', ['avis', 'conditionnel']),
  sent(1180, 'On devrait installer des bacs à compost dans le parc.', 'We should put compost bins in the park.', '/ɔ̃ də.vʁɛ ɛ̃s.ta.le de bak a kɔ̃.pɔst dɑ̃ lə paʁk/', 'ohⁿ duh-VREH ehⁿs-ta-LAY day BAK a kohⁿ-POST dahⁿ luh PARK', ['avis', 'conditionnel']),
  sent(1181, "Je propose de fermer la rue seulement aux heures d'école.", 'I suggest closing the street only during school hours.', '/ʒə pʁɔ.poz də fɛʁ.me la ʁy sœl.mɑ̃ o.zœʁ de.kɔl/', 'zhuh pro-POZ duh fehr-MAY la RÜ | suhl-MAHⁿ oh-ZUHR day-KOL', ['avis'], FCVDR),
  sent(1182, 'Il faut que la ville écoute aussi les commerçants.', 'The town needs to listen to the shopkeepers too.', '/il fo kə la vil e.kut o.si le kɔ.mɛʁ.sɑ̃/', 'eel foh kuh la VEEL ay-KOOT oh-SEE lay ko-mehr-SAHⁿ', ['avis', 'subjonctif']),
  sent(1183, "Je voudrais que les enfants puissent aller à l'école à pied.", 'I would like children to be able to walk to school.', '/ʒə vu.dʁɛ kə le.zɑ̃.fɑ̃ pɥis a.le a le.kɔl a pje/', 'zhuh voo-DREH kuh lay-zahⁿ-FAHⁿ PWEESS | a-LAY a lay-KOL a PYAY', ['avis', 'subjonctif']),
  sent(1184, "D'un côté, l'air sera plus propre ; de l'autre, les livraisons seront plus difficiles.", 'On the one hand, the air will be cleaner; on the other, deliveries will be harder.', '/dœ̃ ko.te lɛʁ sə.ʁa ply pʁɔpʁ də lotʁ le li.vʁɛ.zɔ̃ sə.ʁɔ̃ ply di.fi.sil/', 'duhⁿ koh-TAY | LEHR suh-ra plü PROPR | duh LOHTR | lay lee-vreh-ZOHⁿ suh-rohⁿ plü dee-fee-SEEL', ['avis', 'connecteur']),
  sent(1185, 'Même si la mesure coûte cher, elle protège la santé des enfants.', 'Even if the measure is costly, it protects children’s health.', '/mɛm si la mə.zyʁ kut ʃɛʁ ɛl pʁɔ.tɛʒ la sɑ̃.te de.zɑ̃.fɑ̃/', 'MEM see la muh-ZÜR koot SHEHR | ehl pro-TEHZH la sahⁿ-TAY day-zahⁿ-FAHⁿ', ['avis', 'connecteur']),
  sent(1186, 'De plus, les parents pourraient venir à vélo.', 'Moreover, parents could come by bike.', '/də plys le pa.ʁɑ̃ pu.ʁɛ və.niʁ a ve.lo/', 'duh PLÜSS | lay pa-RAHⁿ poo-REH vuh-NEER a vay-LOH', ['avis', 'connecteur']),
  sent(1187, 'Je comprends les deux points de vue.', 'I understand both points of view.', '/ʒə kɔ̃.pʁɑ̃ le dø pwɛ̃ də vy/', 'zhuh kohⁿ-PRAHⁿ lay deu pwehⁿ duh VÜ', ['avis'], FCVDR),
  sent(1188, 'Pour donner ton avis, commence par à mon avis ou selon moi.', 'To give your opinion, start with « à mon avis » or « selon moi ».', '/puʁ dɔ.ne tɔ̃.na.vi kɔ.mɑ̃s paʁ a mɔ̃.na.vi u sə.lɔ̃ mwa/', 'poor do-NAY tohⁿ-na-VEE | ko-MAHⁿSS par a mohⁿ-na-VEE oo suh-lohⁿ MWA', ['rule', 'avis'], ['flashcard'],
    rule('In my opinion : comment le dire ?', 'À mon avis, ou selon moi. Pas dans mon opinion.')),
  sent(1189, 'Selon moi, on pourrait essayer pendant un an.', 'In my view, we could try it for a year.', '/sə.lɔ̃ mwa ɔ̃ pu.ʁɛ e.se.je pɑ̃.dɑ̃.tœ̃.nɑ̃/', 'suh-lohⁿ MWA | ohⁿ poo-REH ay-seh-YAY pahⁿ-dahⁿ-tuh-NAHⁿ', ['avis', 'conditionnel']),
];

/* ── ACT 11 · À TOI DE PROPOSER ──────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1190, "Madame la conseillère, je vous écris au sujet de la rue de l'école.", 'Councillor, I am writing to you about the school street.', '/ma.dam la kɔ̃.se.jɛʁ ʒə vu.ze.kʁi o sy.ʒɛ də la ʁy də le.kɔl/', 'ma-DAM la kohⁿ-seh-YEHR | zhuh voo-zay-KREE oh sü-ZHEH duh la RÜ duh lay-KOL', ['message']),
  sent(1191, 'Je suis pour ce projet, pour trois raisons.', 'I am for this project, for three reasons.', '/ʒə sɥi puʁ sə pʁɔ.ʒɛ puʁ tʁwa ʁɛ.zɔ̃/', 'zhuh swee POOR suh pro-ZHEH | poor trwa reh-ZOHⁿ', ['message'], FCVDR),
  sent(1192, 'D’abord, les enfants respireront un air moins pollué.', 'First, the children will breathe less polluted air.', '/da.bɔʁ le.zɑ̃.fɑ̃ ʁɛs.pi.ʁə.ʁɔ̃ œ̃.nɛʁ mwɛ̃ pɔ.lɥe/', 'da-BOR | lay-zahⁿ-FAHⁿ rehs-pee-ruh-ROHⁿ uh-NEHR mwehⁿ po-lü-AY', ['message', 'connecteur']),
  sent(1193, 'Ensuite, plus de familles viendront à pied ou à vélo.', 'Next, more families will come on foot or by bike.', '/ɑ̃.sɥit plys də fa.mij vjɛ̃.dʁɔ̃ a pje u a ve.lo/', 'ahⁿ-SWEET | plüss duh fa-MEEY vyehⁿ-DROHⁿ a PYAY oo a vay-LOH', ['message', 'connecteur']),
  sent(1194, 'Par contre, il faut penser aux livraisons du matin.', 'On the other hand, we have to think about the morning deliveries.', '/paʁ kɔ̃tʁ il fo pɑ̃.se o li.vʁɛ.zɔ̃ dy ma.tɛ̃/', 'par KOHⁿTR | eel foh pahⁿ-SAY oh lee-vreh-ZOHⁿ dü ma-TEHⁿ', ['message', 'connecteur'], FCVDR),
  sent(1195, "C'est pourquoi je propose une exception pour les commerçants.", 'That is why I suggest an exception for the shopkeepers.', '/sɛ puʁ.kwa ʒə pʁɔ.poz y.nɛk.sɛp.sjɔ̃ puʁ le kɔ.mɛʁ.sɑ̃/', 'seh poor-KWA | zhuh pro-POZ ü-nehk-sehp-SYOHⁿ poor lay ko-mehr-SAHⁿ', ['message', 'connecteur']),
  sent(1196, 'Je vous remercie de votre attention.', 'Thank you for your attention.', '/ʒə vu ʁə.mɛʁ.si də vɔ.tʁa.tɑ̃.sjɔ̃/', 'zhuh voo ruh-mehr-SEE duh vo-tra-tahⁿ-SYOHⁿ', ['message', 'politesse']),
  sent(1197, 'Une mesure, deux côtés, une proposition : voilà ton message.', 'One measure, two sides, one proposal: that is your message.', '/yn mə.zyʁ dø ko.te yn pʁɔ.pɔ.zi.sjɔ̃ vwa.la tɔ̃ me.saʒ/', 'ün muh-ZÜR | deu koh-TAY | ün pro-po-zee-SYOHⁿ | vwa-LA tohⁿ may-SAZH', ['rule', 'message'], ['flashcard'],
    rule('Ton message à la ville : quel plan ?', 'La mesure, les deux côtés, puis ta proposition.')),
  sent(1198, 'Chaque petit geste compte, mais les grandes décisions aussi.', 'Every small action counts, but so do the big decisions.', '/ʃak pə.ti ʒɛst kɔ̃t mɛ le ɡʁɑ̃d de.si.zjɔ̃ o.si/', 'shak puh-tee ZHEHST KOHⁿT | meh lay grahⁿd day-see-ZYOHⁿ oh-SEE', ['message', 'geste']),
  sent(1199, "Je propose aussi un bac à compost devant l'école.", 'I also suggest a compost bin in front of the school.', '/ʒə pʁɔ.poz o.si œ̃ bak a kɔ̃.pɔst də.vɑ̃ le.kɔl/', 'zhuh pro-POZ oh-SEE uhⁿ BAK a kohⁿ-POST duh-vahⁿ lay-KOL', ['message']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** The word families (tag famille) and collocations (tag collocation). */
export const FAMILY_IDS = ALL_ROWS.filter((r) => r.tags.includes('famille') && r.kind === 'phrase').map((r) => r.id);
export const COLLOCATION_IDS = ALL_ROWS.filter((r) => r.tags.includes('collocation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 *  Word counts are measured by the scratch check, not claimed.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a building's welcome notice, Montréal. A municipal-notice style
 *  text, with one passive (b1.18). */
export const AVIS_TEXT =
  "Bienvenue dans l'immeuble ! Voici quelques règles pour bien vivre ensemble. D'abord, les déchets : ici, tout le monde fait le tri. Le papier, le carton, le verre, le plastique et le métal vont dans le bac bleu. Les restes de repas vont dans le bac brun, pour le compost. Le reste va à la poubelle. Les bacs sont ramassés le lundi matin : sortez-les le dimanche soir. Ensuite, l'énergie : le chauffage est électrique et l'hiver est long. Pour économiser l'énergie, baissez le chauffage quand vous partez et fermez bien les fenêtres. Enfin, les déplacements : l'arrêt d'autobus est au coin de la rue et le métro est à cinq minutes à pied. Un stationnement pour vélos se trouve derrière l'immeuble, tout près de la piste cyclable. Merci de votre aide, et bonne installation ! La gestion de l'immeuble";

/** Act 3: a news brief, Montréal under wildfire smoke, June 2023. */
export const FUMEE_TEXT =
  "Montréal sous la fumée. En juin 2023, la qualité de l'air était très mauvaise à Montréal pendant plusieurs jours. La fumée des feux de forêt du nord du Québec est arrivée en ville pendant la nuit. Le matin, le ciel était orange et on sentait une odeur de bois brûlé. Les autorités de santé ont demandé aux personnes âgées et aux enfants de rester à l'intérieur. D'habitude, ce sont les voitures, les camions et les usines qui polluent l'air de la ville. Cette fois, la pollution venait des forêts. Pour beaucoup de scientifiques, ces épisodes vont devenir plus fréquents avec le réchauffement climatique. Nos lecteurs ne sont pas d'accord sur la réponse : certains demandent plus d'arbres en ville, d'autres veulent d'abord réduire les émissions des transports, et d'autres encore pensent qu'on ne peut rien faire contre la fumée.";

/** Act 5: a forum post, Genève, on repair and second-hand. */
export const FORUM_TEXT =
  "Forum Vivre à Genève. Sujet : réparer plutôt que jeter. Bonjour à tous. La semaine dernière, mon grille-pain est tombé en panne. Avant, je le jetais et j'en achetais un neuf, sans réfléchir. Cette fois, une voisine m'a parlé du café-réparation du quartier. J'y suis allée samedi : un bénévole l'a réparé en vingt minutes, et je n'ai rien payé. Dans la même rue, il y a une friperie : mon manteau d'hiver vient de là, il est de seconde main et il est parfait. Je ne suis pas une militante, et je ne veux faire la morale à personne. Je me pose seulement une question : pourquoi tant d'objets sont-ils jetables ? Et vous, vous réparez, vous achetez d'occasion, ou vous trouvez que c'est trop compliqué ? Nadia";

/** Act 6: a school newsletter, Québec, on a visit to a hydro station. Two
 *  sides of hydroelectricity, on purpose. */
export const JOURNAL_TEXT =
  "Le Petit Journal de l'école. Sortie de classe : l'énergie qui vient de l'eau. Mardi dernier, les élèves de troisième secondaire ont visité une centrale hydroélectrique sur la rivière. Ils ont appris qu'au Québec, presque toute l'électricité vient de l'eau. Le guide a expliqué comment un barrage transforme la force de l'eau en électricité. Les élèves ont aussi entendu une autre histoire : pour construire certains grands barrages, on a inondé des terres où vivaient des communautés autochtones. Ces terres ont disparu sous l'eau. De retour à l'école, la classe a parlé des deux côtés de l'hydroélectricité : une énergie renouvelable, mais pas sans conséquences. Prochain projet : un concours d'économies d'énergie entre les classes. On baisse le chauffage, on ferme la lumière, et on compte les kilowattheures. Bonne chance à tous !";

/** Act 8: a news brief on the St. Lawrence belugas. */
export const BELUGAS_TEXT =
  "Les bélugas du Saint-Laurent. Ils sont blancs, ils chantent, et ils sont en danger. Il y a cent ans, des milliers de bélugas vivaient dans le fleuve Saint-Laurent. Aujourd'hui, ils sont moins de deux mille, et le Canada les considère comme une espèce en voie de disparition. Quelles sont les menaces ? La pollution de l'eau, le bruit des bateaux et le manque de nourriture. Pour les protéger, une partie du fleuve est devenue un parc marin, près de Tadoussac. Les bateaux doivent y ralentir et rester loin des baleines. Tout le monde n'est pas d'accord avec ces règles : pour les pêcheurs et les compagnies de croisières, elles coûtent cher. Les scientifiques, eux, rappellent qu'une espèce menacée peut encore se rétablir, si on lui laisse le temps.";

/** Act 9: readers' letters, canton de Vaud, on the bag tax. Three views. */
export const COURRIER_TEXT =
  "Courrier des lecteurs. Plus de dix ans de taxe au sac. Depuis 2013, dans le canton de Vaud, chaque sac poubelle est payant : c'est la taxe au sac. Nous avons demandé à nos lecteurs ce qu'ils en pensent. Martine, 67 ans, Lausanne : « Au début, j'étais contre. Maintenant, je fais le tri, et je sors un sac toutes les deux semaines. C'est moins cher qu'avant. » Yannick, 34 ans, Renens : « Le principe est juste : le pollueur paie. Par contre, une famille avec trois enfants paie plus qu'une personne seule. Ce n'est pas égal. » Aïcha, 19 ans, Morges : « La taxe, c'est bien, mais ça ne suffit pas. Ce sont les entreprises qui produisent les emballages : c'est à elles de payer. Au gymnase, nous avons signé une pétition contre le suremballage. »";

/** Act 11: the model message to a town councillor. Inside the task's own
 *  bounds (110 to 150 words), with the connectors of b1.30 to b1.32. */
export const MESSAGE_TEXT =
  "Madame la conseillère, je vous écris au sujet de la rue de l'école Saint-Jean, que la ville veut fermer aux voitures. Je suis pour ce projet, pour trois raisons. D'abord, les enfants respireront un air moins pollué : le matin, il y a des bouchons et les moteurs tournent devant la porte. Ensuite, plus de familles viendront à pied ou à vélo, et certains parents pourront faire du covoiturage. Enfin, la rue sera plus calme et plus sûre. Par contre, il faut penser aux livraisons du matin et aux commerçants du coin. C'est pourquoi je propose une exception pour les livraisons avant huit heures. On pourrait aussi installer des bacs à compost et planter des arbres devant l'école. À mon avis, chaque petit geste compte, mais les décisions de la ville aussi. Je vous remercie de votre attention. Camille Roy, parent d'élève";

/** The collocations MESSAGE_TEXT uses, in order: the task checklist and
 *  round 11 are built on this list. */
export const MESSAGE_COLLOCATIONS = [
  'fermer aux voitures', 'un air moins pollué', 'des bouchons', 'à pied ou à vélo',
  'faire du covoiturage', 'installer des bacs à compost', 'planter des arbres', 'un petit geste',
] as const;
