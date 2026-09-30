// b2.15.l1 « Cause et conséquence »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.12
// gérondif and b2.07 futur antérieur), under the B2 rules of B2-BUILD-LOG.md
// (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 15 of the B2 trail, the first of Unit 3
// ══════════════════════════════════════════════════════════════════════════
//
//   CAUSE AND CONSEQUENCE BEYOND PARCE QUE AND DONC, GRADED BY WHAT THE
//   SPEAKER ASSUMES, DOUBTS OR KNOWS.
//
//     la cause admise   étant donné que, vu que, du fait que (a cause nobody
//                       disputes; B1 only recognised the first two), and
//                       their noun forms étant donné, vu, du fait de;
//                       puisque (shared, often a reproach) against parce que
//                       (the only answer to pourquoi)
//     la raison de plus dans la mesure où (a cause that holds as far as it
//                       goes), d'autant plus que, d'autant que, d'autant
//                       plus + adjective + que; dans la mesure du possible
//                       as the false lead
//     la cause contestée sous prétexte que (a cause the speaker doubts, +
//                       indicative), sous prétexte de + infinitive; non que
//                       + subjunctive, ce n'est pas que + subjunctive, c'est
//                       que + indicative (a rejected cause); ce n'est pas
//                       parce que... que (a rejected inference)
//     dans un nom       à cause de against grâce à (recalled), en raison de
//                       and du fait de, par + bare noun (par peur), à force
//                       de, faute de, sous l'effet de; suite à ruled as in
//                       lesson 10 in B2 (widespread, accepted, criticised by
//                       usage guides; à la suite de in careful writing)
//     dans un verbe     être dû à (dû, due, dus, dues), s'expliquer par,
//                       provenir de, tenir à, venir de; « le retard est à
//                       cause de » as the trap
//     la conséquence    par conséquent and c'est pourquoi (recalled), en
//                       conséquence, de ce fait, d'où + noun, aussi +
//                       inversion, du coup (familier)
//     résultat ou but   si bien que and de sorte que + indicative (result)
//                       against de sorte que / de façon que + subjunctive
//                       (purpose)
//     l'intensité       si / tellement ... que (recalled), tant / tant de ...
//                       que, au point que, au point de, à tel point que, tel
//                       que, trop / assez ... pour que + subjunctive, trop
//                       ... pour + infinitive
//     dans un verbe (2) provoquer, entraîner, causer, susciter, aboutir à
//     la certitude      sans doute (probably) against sans aucun doute, il
//                       semble que + subjunctive, il semblerait que, tout
//                       porte à croire que + indicative, probablement,
//                       vraisemblablement, the journalistic conditionnel
//                       (« l'incendie serait dû à... », « aurait été causé
//                       par... »), selon / d'après
//     le texte          a paragraph that does not repeat parce que and donc
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 30 in B1   donc, car (reframe quoted, rows .1004, .1024, .1221)
//     lesson 31 in B1   parce que, puisque, comme, vu que, étant donné que
//                       (recognition there), à cause de, grâce à, en raison
//                       de, si bien que, de sorte que, si / tellement / tant
//                       que, c'est pourquoi, par conséquent (reframe quoted,
//                       rows reused)
//     lesson 8 in B1    the conditionnel présent (row .762, « Selon la
//                       police, le suspect serait en fuite »)
//     lesson 15 in B1   il semble que + subjunctive (reframe quoted, rows
//                       .1287, .1367)
//     lesson 21 in B1   sans doute and aussi + inversion (reframe quoted,
//                       rows .1164, .1165, .1171)
//     lesson 37 in B1   reported claims (row .1162)
//     lesson 6 in B2    subjunctive against indicative (reframe quoted)
//     lesson 10 in B2   en raison de, faute de, the ruling on suite à
//                       (reframe quoted; its rows are drafts, cited in words)
//     lesson 12 in B2   the gérondif of cause (reframe quoted, in words)
//     lessons 22, 23 in B2  their published rows reused by id
//   FORWARD: purpose on its own (pour, afin de, pour que) is a later lesson,
//   named without a number (its trail position is not occupied in this
//   publish). Concession is lesson 16 in B2 (same publish).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check done read-only 2026-09-29
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques` (fondations, a2-b2). Sub-theme « la cause
//     et la conséquence » set in Postgres (read back 2026-09-29). Postgres
//     holds b2 rows .001-.048 here and NOTHING at 1800-1999 at any level
//     (read-only SELECT, 2026-09-29). B1 lessons 30 to 32 own 1000-1599,
//     b2.12 owns 1600-1799, b2.16 owns 2000-2199: not touched.
//
//  2. ID BLOCK: `.1800`-`.1999`, assigned by the brief. Authored: `.1800`-
//     `.1991` with gaps between act blocks (see the act banners).
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with a published row
//     (the theme holds « étant donné que », « dans la mesure où », « de
//     sorte que », « par conséquent »...). Every row is a sentence, a
//     gapfill card or a rule card.
//
//  4. REUSED ROWS. The probe of the seed plus packs (20,683 items, read
//     2026-09-29) for cause and consequence connectors found the rows in §F;
//     they are reused BY ID, never retyped. `fr.b2.connecteurs-logiques.044`
//     (dans la mesure où) and `.045` (étant donné que) are DB-only and cannot
//     be named.
//
//  5. RESPELLINGS. Nasals close with ⁿ everywhere. Spelled for the nasal
//     checker, not the ear: « pleine » PLENN, « personne » pehr-SONN,
//     « panne » PANN, « scène » SENN. « même » is MEM (the seed's). No
//     U+203F anywhere.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL SENTENCE IS EVER A ROW. « Le retard est à cause de la
//     neige », « d'où ils ont créé », « non qu'il est » and the other traps
//     live only in the scene's choice, commonErrors.wrong, trapDrill
//     .promptSound and quiz errorSpot prompts.
//
//  8. NO REAL DATED FACT OR STATISTIC. Every case (the médiathèque des
//     Tilleuls in Namur, the incident at the résidence Les Érables, the
//     bridge in the scene) is invented and marked as an example on screen.
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
  id: 'b2.15',
  seq: 15,
  title: 'Cause and Consequence',
  sub: 'Cause et conséquence',
  canDo: 'Can express cause and consequence beyond parce que and donc, choosing the connector, preposition or verb by what the speaker assumes (an admitted cause, an added reason, a doubted or rejected cause), telling result from purpose and intensity, grading the certainty of a causal claim (sans doute, il semble que, the journalistic conditional), and writing an analysis of a social phenomenon that does not repeat the same link',
  prereqUnitIds: ['b1.30', 'b1.31', 'b1.15', 'b2.06', 'b2.10'],
} as const;

export const LESSON_ID = 'b2.15.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order.
 * ══════════════════════════════════════════════════════════════════════════ */

export const COND_UNIT = 'b1.08';
export const SUBJ_DECL_UNIT = 'b1.15';
export const INVERSION_UNIT = 'b1.21';
export const COORD_UNIT = 'b1.30';
export const SUBORD_UNIT = 'b1.31';
export const LECTURE_B1_UNIT = 'b1.37';
export const MODES_UNIT = 'b2.06';
export const NOMIN_UNIT = 'b2.10';
export const GERONDIF_UNIT = 'b2.12';
export const CONCESSION_B2_UNIT = 'b2.16';
export const STYLE_UNIT = 'b2.22';
export const ARGU_UNIT = 'b2.23';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const COND_REF = refFr(COND_UNIT);
export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);
export const INVERSION_REF = refFr(INVERSION_UNIT);
export const COORD_REF = refFr(COORD_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const LECTURE_B1_REF = refFr(LECTURE_B1_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const NOMIN_REF = refFr(NOMIN_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
export const CONCESSION_B2_REF = refFr(CONCESSION_B2_UNIT);
export const STYLE_REF = refFr(STYLE_UNIT);
export const ARGU_REF = refFr(ARGU_UNIT);
/** Purpose on its own (pour, afin de, pour que): a later lesson, cited
 *  WITHOUT a number (its trail position is not occupied in this publish). */
export const LATER_REF = 'une leçon suivante';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B108_REFRAME, REFRAME_EN as B108_REFRAME_EN } from '../b1/conditionnel-present-corpus.ts';
export { REFRAME as B115_REFRAME, REFRAME_EN as B115_REFRAME_EN } from '../b1/subjonctif-declencheurs-corpus.ts';
export { REFRAME as B121_REFRAME, REFRAME_EN as B121_REFRAME_EN } from '../b1/inversion-corpus.ts';
export { REFRAME as B130_REFRAME, REFRAME_EN as B130_REFRAME_EN } from '../b1/coordination-corpus.ts';
export { REFRAME as B131_REFRAME, REFRAME_EN as B131_REFRAME_EN } from '../b1/subordination-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B210_REFRAME, REFRAME_EN as B210_REFRAME_EN } from './nominalisation-corpus.ts';
export { REFRAME as B212_REFRAME, REFRAME_EN as B212_REFRAME_EN } from './gerondif-corpus.ts';
export { REFRAME as B223_REFRAME, REFRAME_EN as B223_REFRAME_EN } from './argumentation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE NUANCIER. Parce que and donc are the plain colour: correct, always
 *  available, and silent about everything but the link. Every other link is
 *  a shade of it that says one thing more: that the cause is admitted
 *  (étant donné que), shared (puisque), reinforced (d'autant plus que),
 *  doubted (sous prétexte que), rejected (non que), a lack (faute de), a
 *  repetition (à force de), a result or an aim (de sorte que + mood), an
 *  intensity (au point que), a reaction (susciter), or only probable
 *  (serait dû, sans doute). Choosing the shade is choosing what you tell
 *  the reader you know.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Parce que et donc posent le lien ; les autres le nuancent.';
export const REFRAME_EN = 'Parce que and donc lay the link down; the others shade it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'À l’écrit, évite parce que et donc.',
    why: 'False and harmful: parce que is the only link that answers pourquoi (act 2), and donc is right in any register. The fault is a paragraph that uses nothing else, not the words themselves.',
  },
  {
    text: 'La cause vient avant, la conséquence après.',
    why: 'False for the order of the sentence: « le retard est dû à la neige » puts the effect first, « d’où sa colère » puts the cause first, and parce que can follow its main clause. The relation is fixed; the order is free.',
  },
  {
    text: 'Plus le connecteur est soutenu, meilleur est le texte.',
    why: 'Register is a fit, not a grade: « du fait que » in a text message is as wrong as « du coup » in a report. Act 7 teaches the ladder in both directions.',
  },
  {
    text: 'Tous ces mots veulent dire parce que.',
    why: 'The error the lesson exists to correct: sous prétexte que says the speaker does not believe the cause, non que rejects it, sans doute says it is only probable. Swapping them changes what the writer claims to know.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-29, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;

export const IMPORTED = {
  act1: [
    CL(1302),                                  // Les prix ont augmenté ; par conséquent, nous changeons nos tarifs.  (lesson 31 in B1)
    'fr.b1.projets-et-futur.762',              // Selon la police, le suspect serait en fuite.  (lesson 8 in B1)
  ],
  act2: [
    CL(1024),                                  // Il pleut, donc je prends le bus.  (lesson 30 in B1)
    CL(1221),                                  // Le vol est annulé, car le pilote est malade.  (lesson 30 in B1)
    CL(1231),                                  // Puisque tu as une voiture, tu peux nous conduire.  (lesson 31 in B1)
    CL(1205),                                  // Comme il neigeait, le bureau a fermé à midi.  (lesson 31 in B1)
    CL(1239),                                  // Vu que le train est en retard, on prend un café.  (lesson 31 in B1)
    CL(1240),                                  // Étant donné que les prix augmentent, nous changeons de fournisseur.  (lesson 31 in B1)
  ],
  act3: [] as string[],
  act4: [] as string[],
  act5: [
    CL(1249),                                  // La route est fermée à cause de la neige.  (lesson 31 in B1)
    CL(1251),                                  // J'ai réussi grâce à ton aide.  (lesson 31 in B1)
    CL(1255),                                  // À cause de la grève, le métro ne marche pas.  (lesson 31 in B1)
    CL(1266),                                  // Le musée est fermé en raison des travaux.  (lesson 31 in B1)
    'fr.b2.universite.1018',                   // Faute de chambres abordables en ville, de nombreux étudiants s'installent en périphérie.  (lesson 22 in B2)
  ],
  act6: [
    CL(1370),                                  // Le retard est dû à une panne de courant.  (lesson 31 in B1)
    'fr.b2.opinions-et-avis.1660',             // Le premier argument en faveur de l'interdiction tient à la vulnérabilité des enfants.  (lesson 23 in B2)
  ],
  act7: [
    CL(1004),                                  // Ma mère est malade, donc je ne peux pas partir.  (lesson 30 in B1)
    CL(1301),                                  // Le pont est fermé. C'est pourquoi nous passons par Lévis.  (lesson 31 in B1)
    CL(1308),                                  // C'est pour ça que, c'est pourquoi, par conséquent : du plus familier au plus soutenu.  (grammar card)
    'fr.b1.langue-soignee.1171',               // Aussi en tête de phrase veut dire donc, et il fait inverser.  (lesson 21 in B1, grammar card)
  ],
  act8: [
    CL(1267),                                  // Il a plu toute la nuit, si bien que la rivière a débordé.  (lesson 31 in B1)
    CL(1331),                                  // Elle a parlé fort, de sorte que tout le monde l'a entendue.  (lesson 31 in B1)
    CL(1330),                                  // Parle plus fort, de sorte que tout le monde t’entende.  (lesson 31 in B1)
    CL(1321),                                  // Je parle lentement pour que tout le monde comprenne.  (lesson 31 in B1)
  ],
  act9: [
    CL(1283),                                  // Il faisait tellement froid que le lac a gelé.  (lesson 31 in B1)
    CL(1286),                                  // J'ai tant de travail que je ne dors plus.  (lesson 31 in B1)
    'fr.b2.opinions-et-avis.1911',             // Il fait trop chaud pour que les enfants puissent sortir.  (lesson 6 in B2)
  ],
  act10: [
    'fr.b2.universite.1115',                   // Cet éloignement entraîne des retards et des absences répétées.  (lesson 22 in B2)
    'fr.b2.universite.002',                    // La réforme des bourses suscite un vif débat parmi les étudiants.  (flashcard, no voiceflash)
  ],
  act11: [
    'fr.b2.opinions-et-avis.1677',             // Le manque de sommeil joue sans doute un rôle dans leur anxiété.  (lesson 23 in B2)
    'fr.b1.langue-soignee.1164',               // Sans doute a-t-elle raison.  (lesson 21 in B1)
    'fr.b1.opinions-et-avis.1287',             // Il semble que personne ne connaisse cette rue.  (lesson 15 in B1)
    'fr.b1.opinions-et-avis.1367',             // Il semble que prend le subjonctif, il me semble que ne le prend pas.  (grammar card)
    'fr.b1.strategies-de-comprehension.1162',  // D'après une association, ce chiffre serait plus faible.  (lesson 37 in B1)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  'fr.b2.universite.002',                      // sentence, flashcard, review
  CL(1308),                                    // grammar card, flashcard only
  'fr.b1.langue-soignee.1171',                 // grammar card, flashcard only
  'fr.b1.opinions-et-avis.1367',               // grammar card, flashcard only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `gap` a gapfill card whose front gaps the link and
 *  names the cue; `rule` a grammar card. Every row carries fr, en, ipa and
 *  respell. Corpus respellings carry no brackets. Register is `courant`
 *  unless a row passes SO (soutenu) or FA (familier).
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO: Partial<Item> = { register: 'soutenu' };
const FA: Partial<Item> = { register: 'familier' };
const GP = ['cause-consequence'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes, ...extra });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · AU-DELÀ DE PARCE QUE (.1800-.1811) ────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1800, 'La fermeture du pont serait due à des fissures dans la structure.', 'The closure of the bridge is reportedly due to cracks in the structure.',
    '/la fɛʁ.mə.tyʁ dy pɔ̃ sə.ʁɛ dy a de fi.syʁ dɑ̃ la stʁyk.tyʁ/', 'la fehr-muh-TÜR dü POHⁿ | suh-reh DÜ | a day fee-SÜR | dahⁿ la strük-TÜR', ['scene', 'certitude'], FCVDR),
  sent(1801, 'Étant donné que les travaux dureront six mois, la ville propose une navette.', 'Given that the works will last six months, the city is offering a shuttle.',
    '/e.tɑ̃ dɔ.ne kə le tʁa.vo dy.ʁə.ʁɔ̃ si mwa la vil pʁɔ.poz yn na.vɛt/', 'ay-tahⁿ do-NAY kuh | lay tra-VOH dü-ruh-ROHⁿ see MWA | la VEEL pro-POHZ ün na-VET', ['lecture', 'admise'], FCVR, SO),
  sent(1802, "La médiathèque attire les familles, d'autant plus que les ateliers sont gratuits.", 'The media library draws families, all the more so as the workshops are free.',
    '/la me.dja.tɛk a.tiʁ le fa.mij do.tɑ̃ ply kə le.za.tə.lje sɔ̃ ɡʁa.tɥi/', 'la may-dya-TEK | a-teer lay fa-MEEY | doh-tahⁿ plü KUH | lay-za-tuh-LYAY sohⁿ gra-TWEE', ['lecture', 'renfort']),
  sent(1803, "Faute de place, des lecteurs s'installent dans l'escalier.", 'For lack of space, some readers settle on the stairs.',
    '/fot də plas de lɛk.tœʁ sɛ̃s.tal dɑ̃ lɛs.ka.lje/', 'foht duh PLASS | day lek-TUHR sehⁿs-TAL | dahⁿ les-ka-LYAY', ['lecture', 'nom']),
  sent(1804, "Ce succès s'explique par l'ouverture le dimanche.", 'This success is explained by Sunday opening.',
    '/sə syk.sɛ sɛks.plik paʁ lu.vɛʁ.tyʁ lə di.mɑ̃ʃ/', 'suh sük-SEH | seks-PLEEK | par loo-vehr-TÜR luh dee-MAHⁿSH', ['lecture', 'verbe']),
  sent(1805, "La hausse de la fréquentation a provoqué des files d'attente.", 'The rise in visitor numbers has led to queues.',
    '/la os də la fʁe.kɑ̃.ta.sjɔ̃ a pʁɔ.vɔ.ke de fil da.tɑ̃t/', 'la OHS duh la fray-kahⁿ-ta-SYOHⁿ | a pro-vo-KAY | day feel da-TAHⁿT', ['lecture', 'effet']),
  sent(1806, "Le bruit a tellement augmenté que la direction a créé une salle de silence.", 'The noise went up so much that the management created a silent room.',
    '/lə bʁɥi a tɛl.mɑ̃ o.ɡmɑ̃.te kə la di.ʁɛk.sjɔ̃ a kʁe.e yn sal də si.lɑ̃s/', 'luh BRWEE | a tel-mahⁿ og-mahⁿ-TAY | kuh la dee-rek-SYOHⁿ | a kray-AY ün sal duh see-LAHⁿS', ['lecture', 'intensite']),
  rule(1807, REFRAME, REFRAME_EN,
    '/paʁs kə e dɔ̃k poz lə ljɛ̃ lez otʁ lə nɥɑ̃s/', 'pars KUH | ay DOHⁿK | pohz luh LYEHⁿ | lay-ZOHTR | luh NWAHⁿS',
    'Pourquoi ne pas écrire parce que partout ?',
    "Parce que est juste, mais il ne dit que le lien. Étant donné que, sous prétexte que, d'où ou au point que disent aussi ce que tu sais, ou ce que tu en penses.",
    ['reframe']),
  sent(1808, "Ce n'est pas que les gens lisent davantage, c'est qu'ils cherchent un endroit calme.", 'It is not that people read more, it is that they are looking for a quiet place.',
    '/sə nɛ pa kə le ʒɑ̃ liz da.vɑ̃.taʒ sɛ kil ʃɛʁʃ œ̃.nɑ̃.dʁwa kalm/', 'suh neh PA | kuh lay ZHAHⁿ leez da-vahⁿ-TAZH | seh keel SHEHRSH | uhⁿ-nahⁿ-drwa KALM', ['lecture', 'rejetee']),
  sent(1809, "Il a quitté la réunion sous prétexte qu'il avait un train.", 'He left the meeting on the pretext that he had a train to catch.',
    '/i.la ki.te la ʁe.y.njɔ̃ su pʁe.tɛkst kil a.vɛ œ̃ tʁɛ̃/', 'ee-la kee-TAY la ray-ü-NYOHⁿ | soo pray-TEKST | keel a-veh uhⁿ TREHⁿ', ['usage', 'doute']),
  sent(1810, "Les tensions ont augmenté, d'où la nouvelle charte à l'entrée.", 'Tensions rose, hence the new code of conduct at the entrance.',
    '/le tɑ̃.sjɔ̃ ɔ̃.to.ɡmɑ̃.te du la nu.vɛl ʃaʁt a lɑ̃.tʁe/', 'lay tahⁿ-SYOHⁿ | ohⁿ-tog-mahⁿ-TAY | DOO | la noo-vel SHART | a lahⁿ-TRAY', ['lecture', 'consequence']),
  sent(1811, 'Selon la mairie, ce succès serait dû au nouvel horaire.', 'According to the town hall, this success is said to be due to the new opening hours.',
    '/sə.lɔ̃ la me.ʁi sə syk.sɛ sə.ʁɛ dy o nu.vɛ.lɔ.ʁɛʁ/', 'suh-lohⁿ la may-REE | suh sük-SEH | suh-reh DÜ | oh noo-veh-lo-REHR', ['lecture', 'certitude']),
];

/* ── ACT 2 · LA CAUSE ADMISE (.1812-.1827) ─────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1812, "Étant donné que le budget est serré, nous reportons l'achat des ordinateurs.", 'Given that the budget is tight, we are postponing the purchase of the computers.',
    '/e.tɑ̃ dɔ.ne kə lə byd.ʒɛ ɛ se.ʁe nu ʁə.pɔʁ.tɔ̃ la.ʃa de.zɔʁ.di.na.tœʁ/', 'ay-tahⁿ do-NAY kuh | luh büd-ZHEH eh say-RAY | noo ruh-por-TOHⁿ | la-SHA day-zor-dee-na-TUHR', ['admise'], FCVDR, SO),
  sent(1813, 'Vu que tu as déjà les clés, tu peux ouvrir la salle.', 'Seeing as you already have the keys, you can open the room.',
    '/vy kə ty a de.ʒa le kle ty pø u.vʁiʁ la sal/', 'vü KUH | tü a day-ZHA lay KLAY | tü puh oo-VREER la SAL', ['admise', 'oral']),
  sent(1814, "Du fait que le contrat n'a pas été signé, la commande est suspendue.", 'Since the contract has not been signed, the order is on hold.',
    '/dy fɛ kə lə kɔ̃.tʁa na pa.ze.te si.ɲe la kɔ.mɑ̃d ɛ sys.pɑ̃.dy/', 'dü FEH kuh | luh kohⁿ-TRA | na pa-zay-tay see-NYAY | la ko-MAHⁿD | eh süs-pahⁿ-DÜ', ['admise', 'ecrit'], FCVR, SO),
  sent(1815, 'Puisque tu savais que la réunion était annulée, pourquoi ne m\'as-tu rien dit ?', 'Since you knew the meeting was cancelled, why did you not tell me anything?',
    '/pɥis.kə ty sa.vɛ kə la ʁe.y.njɔ̃ e.tɛ.ta.ny.le puʁ.kwa nə ma.ty ʁjɛ̃ di/', 'pwees-kuh tü sa-VEH | kuh la ray-ü-NYOHⁿ ay-teh-ta-nü-LAY | poor-KWA | nuh ma-tü ryehⁿ DEE', ['puisque', 'reproche']),
  sent(1816, "Étant donné l'heure, nous allons nous arrêter là.", 'Given the time, we are going to stop there.',
    '/e.tɑ̃ dɔ.ne lœʁ nu.za.lɔ̃ nu.za.ʁɛ.te la/', 'ay-tahⁿ do-nay LUHR | noo-za-lohⁿ noo-za-reh-TAY LA', ['admise', 'nom'], FCVDR),
  sent(1817, 'Du fait de la grève, les cours sont suspendus.', 'Because of the strike, classes are suspended.',
    '/dy fɛ də la ɡʁɛv le kuʁ sɔ̃ sys.pɑ̃.dy/', 'dü FEH duh la GREV | lay KOOR sohⁿ süs-pahⁿ-DÜ', ['admise', 'nom'], FCVR, SO),
  sent(1818, "Vu la météo, on reste à l'intérieur.", 'Given the weather, we are staying inside.',
    '/vy la me.te.o ɔ̃ ʁɛst a lɛ̃.te.ʁjœʁ/', 'vü la may-tay-OH | ohⁿ REST | a lehⁿ-tay-RYUHR', ['admise', 'nom']),
  rule(1819, 'Étant donné que, vu que, du fait que : une cause que personne ne discute.', 'Étant donné que, vu que, du fait que: a cause nobody disputes.',
    '/e.tɑ̃ dɔ.ne kə vy kə dy fɛ kə yn koz kə pɛʁ.sɔn nə dis.kyt/', 'ay-tahⁿ do-nay KUH | vü KUH | dü feh KUH | ün KOHZ | kuh pehr-SONN nuh dees-KÜT',
    'Quelle différence avec parce que ?',
    "Parce que apporte la cause, souvent en réponse à pourquoi. Étant donné que la pose comme un fait établi, avant d'en tirer la suite.",
    ['admise']),
  rule(1820, 'Puisque rappelle une cause que tout le monde connaît déjà.', 'Puisque recalls a cause everyone already knows.',
    '/pɥis.kə ʁa.pɛl yn koz kə tu lə mɔ̃d kɔ.nɛ de.ʒa/', 'pwees-KUH ra-PELL | ün KOHZ | kuh too luh MOHⁿD | ko-neh day-ZHA',
    'Puisque tu es là… : qui connaît la cause ?',
    "Les deux personnes. Puisque rappelle une évidence, et il sonne parfois comme un reproche : puisque tu savais, pourquoi… ?",
    ['puisque']),
  sent(1821, 'Pourquoi es-tu en retard ? Parce que mon bus est tombé en panne.', 'Why are you late? Because my bus broke down.',
    '/puʁ.kwa ɛ.ty ɑ̃ ʁə.taʁ paʁs kə mɔ̃ bys ɛ tɔ̃.be ɑ̃ pan/', 'poor-KWA eh-tü ahⁿ ruh-TAR | pars kuh mohⁿ BÜS | eh tohⁿ-BAY ahⁿ PANN', ['pourquoi']),
  sent(1822, 'Comme la salle était réservée, nous nous sommes installés au café.', 'As the room was booked, we settled in the café.',
    '/kɔm la sal e.tɛ ʁe.zɛʁ.ve nu nu sɔm.zɛ̃s.ta.le o ka.fe/', 'kom la SAL ay-teh ray-zehr-VAY | noo noo som-zehⁿs-ta-LAY | oh ka-FAY', ['comme']),
  gap(1823, "Étant donné que les résultats sont incomplets, l'étude sera prolongée.", 'Given that the results are incomplete, the study will be extended.',
    '/e.tɑ̃ dɔ.ne kə le ʁe.zyl.ta sɔ̃.tɛ̃.kɔ̃.plɛ le.tyd sə.ʁa pʁɔ.lɔ̃.ʒe/', 'ay-tahⁿ do-NAY kuh | lay ray-zül-TA sohⁿ-tehⁿ-kohⁿ-PLEH | lay-TÜD suh-ra pro-lohⁿ-ZHAY',
    "___ les résultats sont incomplets, l'étude sera prolongée. (un fait établi, dans un rapport)",
    'Étant donné que pose un fait que personne ne discute, en registre soutenu. Du fait que irait aussi dans un rapport. EN: given that.',
    ['admise'], FCVR, SO),
  sent(1824, "Du fait qu'il parle trois langues, il a été choisi pour ce poste.", 'Because he speaks three languages, he was chosen for this post.',
    '/dy fɛ kil paʁl tʁwa lɑ̃ɡ i.la e.te ʃwa.zi puʁ sə pɔst/', 'dü FEH keel parl trwa LAHⁿG | ee-la ay-tay shwa-ZEE | poor suh POST', ['admise', 'ecrit'], FCVR, SO),
  sent(1825, "Vu qu'il pleut, on annule le pique-nique.", 'Seeing as it is raining, we are cancelling the picnic.',
    '/vy kil plø ɔ̃.na.nyl lə pik.nik/', 'vü keel PLUH | ohⁿ-na-nül luh peek-NEEK', ['admise', 'oral'], FCVDR),
  sent(1826, 'Étant donné que vous êtes nombreux, nous ouvrirons une deuxième salle.', 'Given that there are many of you, we will open a second room.',
    '/e.tɑ̃ dɔ.ne kə vu.zɛt nɔ̃.bʁø nu.zu.vʁi.ʁɔ̃ yn dø.zjɛm sal/', 'ay-tahⁿ do-NAY kuh | voo-zet nohⁿ-BRUH | noo-zoo-vree-ROHⁿ ün deu-ZYEMM SAL', ['admise']),
  sent(1827, 'Je te laisse conduire, puisque tu connais la route.', 'I will let you drive, since you know the way.',
    '/ʒə tə lɛs kɔ̃.dɥiʁ pɥis.kə ty kɔ.nɛ la ʁut/', 'zhuh tuh less kohⁿ-DWEER | pwees-kuh tü ko-NEH la ROOT', ['puisque']),
];

/* ── ACT 3 · LA RAISON QUI PÈSE (.1830-.1844) ──────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1830, 'Dans la mesure où le budget a baissé, certains projets attendront.', 'Insofar as the budget has gone down, some projects will wait.',
    '/dɑ̃ la mə.zyʁ u lə byd.ʒɛ a bɛ.se sɛʁ.tɛ̃ pʁɔ.ʒɛ a.tɑ̃.dʁɔ̃/', 'dahⁿ la muh-ZÜR OO | luh büd-ZHEH a beh-SAY | sehr-tehⁿ pro-ZHEH | a-tahⁿ-DROHⁿ', ['mesure'], FCVDR, SO),
  sent(1831, "Le projet me plaît, d'autant plus qu'il crée des emplois ici.", 'I like the project, all the more so because it creates jobs here.',
    '/lə pʁɔ.ʒɛ mə plɛ do.tɑ̃ ply kil kʁe de.zɑ̃.plwa i.si/', 'luh pro-ZHEH muh PLEH | doh-tahⁿ plü KEEL | kray day-zahⁿ-PLWA ee-SEE', ['autant'], FCVDR),
  sent(1832, "Cette décision est d'autant plus surprenante que personne n'avait été consulté.", 'This decision is all the more surprising since nobody had been consulted.',
    '/sɛt de.si.zjɔ̃ ɛ do.tɑ̃ ply syʁ.pʁə.nɑ̃t kə pɛʁ.sɔn na.vɛ e.te kɔ̃.syl.te/', 'set day-see-ZYOHⁿ | eh doh-tahⁿ plü sür-pruh-NAHⁿT | kuh pehr-SONN na-veh ay-TAY kohⁿ-sül-TAY', ['autant', 'adjectif']),
  sent(1833, "Je te crois, d'autant que tu n'as aucun intérêt à mentir.", 'I believe you, especially as you have nothing to gain by lying.',
    '/ʒə tə kʁwa do.tɑ̃ kə ty na.zo.kœ̃.nɛ̃.te.ʁɛ a mɑ̃.tiʁ/', 'zhuh tuh KRWA | doh-tahⁿ kuh tü na-zoh-kuhⁿ-nehⁿ-tay-REH | a mahⁿ-TEER', ['autant'], FCVR, SO),
  sent(1834, 'Dans la mesure où tu as déjà suivi ce cours, tu peux passer au niveau deux.', 'Insofar as you have already taken this course, you can move up to level two.',
    '/dɑ̃ la mə.zyʁ u ty a de.ʒa sɥi.vi sə kuʁ ty pø pa.se o ni.vo dø/', 'dahⁿ la muh-ZÜR OO | tü a day-zha swee-VEE suh KOOR | tü puh pa-SAY | oh nee-voh DEU', ['mesure']),
  sent(1835, 'Nous refusons cette offre dans la mesure où elle ne garantit aucun emploi.', 'We are turning this offer down insofar as it guarantees no jobs.',
    '/nu ʁə.fy.zɔ̃ sɛ.tɔfʁ dɑ̃ la mə.zyʁ u ɛl nə ɡa.ʁɑ̃.ti o.kœ̃.nɑ̃.plwa/', 'noo ruh-fü-ZOHⁿ se-TOFR | dahⁿ la muh-ZÜR OO | el nuh ga-rahⁿ-TEE | oh-kuhⁿ-nahⁿ-PLWA', ['mesure'], FCVR, SO),
  sent(1836, 'Dans la mesure du possible, réponds avant vendredi.', 'As far as possible, reply before Friday.',
    '/dɑ̃ la mə.zyʁ dy pɔ.sibl ʁe.pɔ̃ a.vɑ̃ vɑ̃.dʁə.di/', 'dahⁿ la muh-zür dü po-SEEBL | ray-POHⁿ | a-vahⁿ vahⁿ-druh-DEE', ['mesure', 'faux']),
  sent(1837, "Il faut partir tôt, d'autant plus qu'on annonce de la neige.", 'We need to leave early, all the more so as snow is forecast.',
    '/il fo paʁ.tiʁ to do.tɑ̃ ply kɔ̃.na.nɔ̃s də la nɛʒ/', 'eel foh par-teer TOH | doh-tahⁿ plü KOHⁿ | na-NOHⁿS duh la NEZH', ['autant'], FCVDR),
  sent(1838, "C'est d'autant plus dommage que le spectacle était gratuit.", 'It is all the more of a pity since the show was free.',
    '/sɛ do.tɑ̃ ply dɔ.maʒ kə lə spɛk.takl e.tɛ ɡʁa.tɥi/', 'seh doh-tahⁿ plü do-MAZH | kuh luh spek-TAKL ay-teh gra-TWEE', ['autant', 'adjectif']),
  rule(1839, "D'autant plus que ajoute une raison qui renforce ce qui vient d'être dit.", "D'autant plus que adds a reason that strengthens what has just been said.",
    '/do.tɑ̃ ply kə a.ʒut yn ʁɛ.zɔ̃ ki ʁɑ̃.fɔʁs sə ki vjɛ̃ dɛtʁ di/', 'doh-tahⁿ plü KUH | a-ZHOOT ün reh-ZOHⁿ | kee rahⁿ-FORS | suh kee vyehⁿ dehtr DEE',
    'Le projet me plaît, d’autant plus qu’il crée des emplois : que fait la deuxième partie ?',
    "Elle ajoute une raison de plus, et plus forte : le projet plaisait déjà, les emplois le rendent encore meilleur.",
    ['autant']),
  rule(1840, "Dans la mesure où : une cause qui vaut jusqu'à un certain point.", 'Dans la mesure où: a cause that holds up to a point.',
    '/dɑ̃ la mə.zyʁ u yn koz ki vo ʒys.ka œ̃ sɛʁ.tɛ̃ pwɛ̃/', 'dahⁿ la muh-ZÜR OO | ün KOHZ | kee VOH | zhüs-ka uhⁿ sehr-tehⁿ PWEHⁿ',
    'Dans la mesure où : parce que, ou si ?',
    "Un peu des deux : la cause est posée comme ce qui justifie la suite, et seulement dans cette limite. Registre soutenu, fréquent dans les rapports.",
    ['mesure']),
  gap(1841, "Il faut réserver, d'autant plus que les places sont limitées.", 'You need to book, all the more so as places are limited.',
    '/il fo ʁe.zɛʁ.ve do.tɑ̃ ply kə le plas sɔ̃ li.mi.te/', 'eel foh ray-zehr-VAY | doh-tahⁿ plü KUH | lay PLASS sohⁿ lee-mee-TAY',
    'Il faut réserver, ___ les places sont limitées. (une raison de plus)',
    "D'autant plus que ajoute une raison qui renforce la première. D'autant que, plus soutenu, irait aussi. EN: all the more so as.",
    ['autant']),
  sent(1842, "Le retard est d'autant plus gênant que le client attendait depuis un mois.", 'The delay is all the more awkward since the client had been waiting for a month.',
    '/lə ʁə.taʁ ɛ do.tɑ̃ ply ʒɛ.nɑ̃ kə lə kli.jɑ̃ a.tɑ̃.dɛ də.pɥi.zœ̃ mwa/', 'luh ruh-TAR | eh doh-tahⁿ plü zheh-NAHⁿ | kuh luh klee-YAHⁿ | a-tahⁿ-deh duh-pwee-zuhⁿ MWA', ['autant', 'adjectif']),
  sent(1843, 'Dans la mesure où personne ne s\'y oppose, la séance est levée.', 'Since no one objects, the meeting is closed.',
    '/dɑ̃ la mə.zyʁ u pɛʁ.sɔn nə si.ɔ.pɔz la se.ɑ̃s ɛ lə.ve/', 'dahⁿ la muh-ZÜR OO | pehr-SONN nuh see-o-POHZ | la say-AHⁿS | eh luh-VAY', ['mesure'], FCVR, SO),
  sent(1844, "La sortie est maintenue, d'autant que la pluie doit s'arrêter vers midi.", 'The outing is going ahead, especially as the rain is due to stop around noon.',
    '/la sɔʁ.ti ɛ mɛ̃t.ny do.tɑ̃ kə la plɥi dwa sa.ʁɛ.te vɛʁ mi.di/', 'la sor-TEE | eh mehⁿt-NÜ | doh-tahⁿ kuh la PLWEE | dwa sa-reh-TAY | vehr mee-DEE', ['autant'], FCVR, SO),
];

/* ── ACT 4 · LA CAUSE QU'ON CONTESTE (.1846-.1861) ─────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1846, "Il a refusé de venir sous prétexte qu'il avait trop de travail.", 'He refused to come on the pretext that he had too much work.',
    '/i.la ʁə.fy.ze də və.niʁ su pʁe.tɛkst ki.la.vɛ tʁo də tʁa.vaj/', 'ee-la ruh-fü-ZAY duh vuh-NEER | soo pray-TEKST | kee-la-veh troh duh tra-VYE', ['pretexte'], FCVDR),
  sent(1847, "Il a changé d'appartement, non qu'il soit mal logé, mais il voulait un jardin.", 'He moved flat, not that he was badly housed, but he wanted a garden.',
    '/i.la ʃɑ̃.ʒe da.paʁ.tə.mɑ̃ nɔ̃ kil swa mal lɔ.ʒe mɛ il vu.lɛ œ̃ ʒaʁ.dɛ̃/', 'ee-la shahⁿ-ZHAY da-par-tuh-MAHⁿ | nohⁿ keel swa mal lo-ZHAY | meh eel voo-LEH uhⁿ zhar-DEHⁿ', ['nonque'], FCVR, SO),
  sent(1848, "Ce n'est pas que je ne veuille pas t'aider, c'est que je n'ai pas le temps.", 'It is not that I do not want to help you, it is that I do not have the time.',
    '/sə nɛ pa kə ʒə nə vœj pa tɛ.de sɛ kə ʒə ne pa lə tɑ̃/', 'suh neh PA | kuh zhuh nuh VUHY pa teh-DAY | seh kuh zhuh nay pa luh TAHⁿ', ['cenestpasque'], FCVDR),
  sent(1849, "Ce n'est pas qu'il soit timide, c'est qu'il ne connaît personne.", 'It is not that he is shy, it is that he does not know anyone.',
    '/sə nɛ pa kil swa ti.mid sɛ kil nə kɔ.nɛ pɛʁ.sɔn/', 'suh neh PA | keel swa tee-MEED | seh keel nuh ko-NEH pehr-SONN', ['cenestpasque']),
  sent(1850, 'Non pas que le film soit mauvais, mais il est trop long.', 'Not that the film is bad, but it is too long.',
    '/nɔ̃ pa kə lə film swa mo.vɛ mɛ i.lɛ tʁo lɔ̃/', 'nohⁿ pa KUH | luh FEELM swa moh-VEH | meh ee-leh troh LOHⁿ', ['nonque'], FCVR, SO),
  sent(1851, "Sous prétexte qu'il pleuvait, ils ont annulé la sortie.", 'On the pretext that it was raining, they cancelled the outing.',
    '/su pʁe.tɛkst kil plø.vɛ il.zɔ̃.ta.ny.le la sɔʁ.ti/', 'soo pray-TEKST | keel pluh-VEH | eel-zohⁿ-ta-nü-LAY la sor-TEE', ['pretexte']),
  sent(1852, "Ils ont annulé la sortie parce qu'il pleuvait.", 'They cancelled the outing because it was raining.',
    '/il.zɔ̃.ta.ny.le la sɔʁ.ti paʁs kil plø.vɛ/', 'eel-zohⁿ-ta-nü-LAY la sor-TEE | pars keel pluh-VEH', ['pretexte', 'neutre']),
  sent(1853, 'Il est parti tôt sous prétexte de préparer sa réunion.', 'He left early on the pretext of preparing his meeting.',
    '/i.lɛ paʁ.ti to su pʁe.tɛkst də pʁe.pa.ʁe sa ʁe.y.njɔ̃/', 'ee-leh par-tee TOH | soo pray-TEKST duh pray-pa-RAY | sa ray-ü-NYOHⁿ', ['pretexte', 'infinitif']),
  rule(1854, "Sous prétexte que : c'est la raison donnée, pas forcément la vraie.", 'Sous prétexte que: it is the reason given, not necessarily the real one.',
    '/su pʁe.tɛkst kə sɛ la ʁɛ.zɔ̃ dɔ.ne pa fɔʁ.se.mɑ̃ la vʁɛ/', 'soo pray-TEKST KUH | seh la reh-ZOHⁿ do-NAY | pa for-say-MAHⁿ la VREH',
    'Avec sous prétexte que, qui doute de la cause ?',
    "Celui qui parle. La personne a donné cette raison ; toi, tu n'y crois pas vraiment. L'indicatif suit, comme après parce que.",
    ['pretexte']),
  rule(1855, 'Non que et ce n\'est pas que écartent une cause : le subjonctif suit.', "Non que and ce n'est pas que set a cause aside: the subjunctive follows.",
    '/nɔ̃ kə e sə nɛ pa kə e.kaʁt yn koz lə syb.ʒɔ̃k.tif sɥi/', 'nohⁿ KUH | ay suh neh pa KUH | ay-KART ün KOHZ | luh süb-zhohⁿk-TEEF SWEE',
    'Pourquoi le subjonctif après non que ?',
    "Parce que la cause est écartée, pas affirmée. La vraie cause vient ensuite, à l'indicatif : c'est que…, mais…",
    ['nonque']),
  gap(1856, "Ce n'est pas que le prix soit trop élevé, c'est que la qualité ne suit pas.", 'It is not that the price is too high, it is that the quality does not match.',
    '/sə nɛ pa kə lə pʁi swa tʁo el.ve sɛ kə la ka.li.te nə sɥi pa/', 'suh neh PA | kuh luh PREE swa troh ayl-VAY | seh kuh la ka-lee-TAY nuh swee PA',
    "Ce n'est pas que le prix ___ trop élevé, c'est que la qualité ne suit pas. (être)",
    "Soit : la cause est écartée, donc le subjonctif. La vraie cause, après c'est que, reste à l'indicatif. EN: soit.",
    ['cenestpasque']),
  sent(1857, "Il est rentré, non parce qu'il avait froid, mais parce qu'il s'ennuyait.", 'He went home, not because he was cold, but because he was bored.',
    '/i.lɛ ʁɑ̃.tʁe nɔ̃ paʁs ki.la.vɛ fʁwa mɛ paʁs kil sɑ̃.nɥi.jɛ/', 'ee-leh rahⁿ-TRAY | nohⁿ pars kee-la-veh FRWA | meh pars keel sahⁿ-nwee-YEH', ['nonque', 'indicatif']),
  sent(1858, 'Le locataire refuse de payer sous prétexte que le chauffage ne marche pas.', 'The tenant refuses to pay on the pretext that the heating does not work.',
    '/lə lɔ.ka.tɛʁ ʁə.fyz də pe.je su pʁe.tɛkst kə lə ʃo.faʒ nə maʁʃ pa/', 'luh lo-ka-TEHR | ruh-füz duh peh-YAY | soo pray-TEKST | kuh luh shoh-FAZH nuh marsh PA', ['pretexte']),
  sent(1859, "Ce n'est pas que je sois contre, c'est que j'ai besoin de réfléchir.", 'It is not that I am against it, it is that I need to think.',
    '/sə nɛ pa kə ʒə swa kɔ̃tʁ sɛ kə ʒe bə.zwɛ̃ də ʁe.fle.ʃiʁ/', 'suh neh PA | kuh zhuh swa KOHⁿTR | seh kuh zhay buh-zwehⁿ duh ray-flay-SHEER', ['cenestpasque'], FCVDR),
  gap(1860, "Elle a refusé le poste, non qu'il soit mal payé, mais il est trop loin.", 'She turned the job down, not that it is badly paid, but it is too far away.',
    '/ɛ.la ʁə.fy.ze lə pɔst nɔ̃ kil swa mal pe.je mɛ i.lɛ tʁo lwɛ̃/', 'eh-la ruh-fü-ZAY luh POST | nohⁿ keel swa mal peh-YAY | meh ee-leh troh LWEHⁿ',
    "Elle a refusé le poste, non qu'il ___ mal payé, mais il est trop loin. (être)",
    'Non que écarte la cause : subjonctif, soit. EN: not that it is.',
    ['nonque'], FCVR, SO),
  sent(1861, "Ce n'est pas parce qu'il est jeune qu'il a tort.", 'Being young does not make him wrong.',
    '/sə nɛ pa paʁs ki.lɛ ʒœn ki.la tɔʁ/', 'suh neh pa pars kee-leh ZHUNN | kee-la TOR', ['nonque', 'inference'], FCVDR),
];

/* ── ACT 5 · LA CAUSE DANS UN NOM (.1862-.1881) ────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1862, "Grâce à la nouvelle ligne de tram, le quartier s'est animé.", 'Thanks to the new tram line, the neighbourhood has come alive.',
    '/ɡʁa.sa la nu.vɛl liɲ də tʁam lə kaʁ.tje sɛ.ta.ni.me/', 'gra-sa la noo-vel LEENY duh TRAMM | luh kar-TYAY seh-ta-nee-MAY', ['grace']),
  sent(1863, 'À cause des travaux, la rue sera fermée tout l\'été.', 'Because of the roadworks, the street will be closed all summer.',
    '/a koz de tʁa.vo la ʁy sə.ʁa fɛʁ.me tu le.te/', 'a KOHZ day tra-VOH | la RÜ suh-ra fehr-MAY | too lay-TAY', ['acause'], FCVDR),
  sent(1864, 'Il a menti par peur de décevoir ses parents.', 'He lied out of fear of disappointing his parents.',
    '/i.la mɑ̃.ti paʁ pœʁ də de.sə.vwaʁ se pa.ʁɑ̃/', 'ee-la mahⁿ-TEE | par PUHR duh day-suh-VWAR | say pa-RAHⁿ', ['par'], FCVDR),
  sent(1865, 'Elle a ouvert la lettre par curiosité.', 'She opened the letter out of curiosity.',
    '/ɛ.la u.vɛʁ la lɛtʁ paʁ ky.ʁjo.zi.te/', 'eh-la oo-VEHR la LETR | par kü-ryo-zee-TAY', ['par']),
  sent(1866, "J'ai pris ton parapluie par erreur.", 'I took your umbrella by mistake.',
    '/ʒe pʁi tɔ̃ pa.ʁa.plɥi paʁ ɛ.ʁœʁ/', 'zhay PREE tohⁿ pa-ra-PLWEE | par eh-RUHR', ['par']),
  sent(1867, 'À force de répéter, il a fini par retenir son texte.', 'By dint of rehearsing, he eventually learned his lines.',
    '/a fɔʁs də ʁe.pe.te i.la fi.ni paʁ ʁə.tə.niʁ sɔ̃ tɛkst/', 'a FORS duh ray-pay-TAY | ee-la fee-NEE par ruh-tuh-NEER sohⁿ TEKST', ['force'], FCVDR),
  sent(1868, 'À force de patience, elle a obtenu ce poste.', 'Through sheer patience, she got this job.',
    '/a fɔʁs də pa.sjɑ̃s ɛ.la ɔp.tə.ny sə pɔst/', 'a FORS duh pa-SYAHⁿS | eh-la op-tuh-NÜ suh POST', ['force']),
  sent(1869, "Faute de temps, nous n'avons pas visité le musée.", 'For lack of time, we did not visit the museum.',
    '/fot də tɑ̃ nu na.vɔ̃ pa vi.zi.te lə my.ze/', 'foht duh TAHⁿ | noo na-vohⁿ pa vee-zee-TAY luh mü-ZAY', ['faute'], FCVDR),
  sent(1870, "Faute d'avoir réservé, nous avons mangé debout.", 'Having failed to book, we ate standing up.',
    '/fot da.vwaʁ ʁe.zɛʁ.ve nu.za.vɔ̃ mɑ̃.ʒe də.bu/', 'foht da-vwar ray-zehr-VAY | noo-za-vohⁿ mahⁿ-zhay duh-BOO', ['faute', 'infinitif'], FCVR, SO),
  sent(1871, "Sous l'effet de la fatigue, il a fait une erreur de calcul.", 'Under the effect of tiredness, he made a calculation error.',
    '/su le.fɛ də la fa.tiɡ i.la fɛ y.nɛ.ʁœʁ də kal.kyl/', 'soo lay-FEH duh la fa-TEEG | ee-la feh ü-neh-RUHR duh kal-KÜL', ['effet']),
  sent(1872, "Sous l'effet de la chaleur, les rails se sont déformés.", 'Under the effect of the heat, the rails buckled.',
    '/su le.fɛ də la ʃa.lœʁ le ʁaj sə sɔ̃ de.fɔʁ.me/', 'soo lay-FEH duh la sha-LUHR | lay RYE suh sohⁿ day-for-MAY', ['effet'], FCVR, SO),
  sent(1873, 'En raison des travaux, la bibliothèque ouvrira à dix heures.', 'Owing to the works, the library will open at ten.',
    '/ɑ̃ ʁɛ.zɔ̃ de tʁa.vo la bi.bli.jɔ.tɛk u.vʁi.ʁa a di.zœʁ/', 'ahⁿ reh-ZOHⁿ day tra-VOH | la bee-blee-yo-TEK | oo-vree-RA a dee-ZUHR', ['raison'], FCVR, SO),
  sent(1874, 'Suite à votre appel, nous avons modifié votre adresse.', 'Following your call, we have changed your address.',
    '/sɥi.ta vɔ.tʁa.pɛl nu.za.vɔ̃ mɔ.di.fje vɔ.tʁa.dʁɛs/', 'swee-TA vo-tra-PELL | noo-za-vohⁿ mo-dee-FYAY | vo-tra-DRESS', ['suite']),
  sent(1875, 'À la suite de votre appel, nous avons modifié votre adresse.', 'Following your call, we have changed your address.',
    '/a la sɥit də vɔ.tʁa.pɛl nu.za.vɔ̃ mɔ.di.fje vɔ.tʁa.dʁɛs/', 'a la SWEET duh vo-tra-PELL | noo-za-vohⁿ mo-dee-FYAY | vo-tra-DRESS', ['suite'], FCVR, SO),
  rule(1876, 'Par + un nom sans article : par peur, par curiosité, par erreur.', 'Par + a bare noun: out of fear, out of curiosity, by mistake.',
    '/paʁ œ̃ nɔ̃ sɑ̃.zaʁ.tikl paʁ pœʁ paʁ ky.ʁjo.zi.te paʁ ɛ.ʁœʁ/', 'par uhⁿ NOHⁿ | sahⁿ-zar-TEEKL | par PUHR | par kü-ryo-zee-TAY | par eh-RUHR',
    'Il a menti par la peur ?',
    "Non : par peur, sans article. Par dit un motif intérieur : un sentiment, une habitude, une erreur.",
    ['par']),
  rule(1877, "À force de : la cause, c'est la répétition ou l'effort.", 'À force de: the cause is the repetition or the effort.',
    '/a fɔʁs də la koz sɛ la ʁe.pe.ti.sjɔ̃ u le.fɔʁ/', 'a FORS duh | la KOHZ | seh la ray-pay-tee-SYOHⁿ | oo lay-FOR',
    'À force de répéter : qu’est-ce qui a produit le résultat ?',
    "La répétition elle-même. À force de se construit avec un infinitif, ou avec un nom sans article : à force de patience.",
    ['force']),
  gap(1878, 'Faute de preuves, le suspect a été relâché.', 'For lack of evidence, the suspect was released.',
    '/fot də pʁœv lə sys.pɛ a e.te ʁə.la.ʃe/', 'foht duh PRUHV | luh süs-PEH | a ay-tay ruh-la-SHAY',
    "___ preuves, le suspect a été relâché. (parce qu'il n'y en avait pas)",
    'Faute de dit le manque, sans article. Par manque de irait aussi. EN: for lack of.',
    ['faute'], FCVR, SO),
  sent(1879, "Par manque de moyens, l'association a réduit ses activités.", 'Through lack of funds, the association has cut back its activities.',
    '/paʁ mɑ̃k də mwa.jɛ̃ la.sɔ.sja.sjɔ̃ a ʁe.dɥi se.zak.ti.vi.te/', 'par MAHⁿK duh mwa-YEHⁿ | la-so-sya-SYOHⁿ | a ray-DWEE say-zak-tee-vee-TAY', ['par', 'faute']),
  gap(1880, 'Elle a réussi à force de travail.', 'She succeeded through hard work.',
    '/ɛ.la ʁe.y.si a fɔʁs də tʁa.vaj/', 'eh-la ray-ü-SEE | a FORS duh tra-VYE',
    'Elle a réussi ___ travail. (en travaillant beaucoup, longtemps)',
    "À force de : l'effort répété produit le résultat. EN: through sheer.",
    ['force']),
  sent(1881, "Grâce à ses conseils, j'ai évité une grosse erreur.", 'Thanks to her advice, I avoided a big mistake.',
    '/ɡʁa.sa se kɔ̃.sɛj ʒe e.vi.te yn ɡʁo.sɛ.ʁœʁ/', 'gra-SA say kohⁿ-SEY | zhay ay-vee-TAY | ün groh-seh-RUHR', ['grace']),
];

/* ── ACT 6 · LA CAUSE DANS LE VERBE (.1882-.1897) ──────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1882, 'Le retard du train est dû à un problème de signalisation.', 'The train delay is due to a signalling problem.',
    '/lə ʁə.taʁ dy tʁɛ̃ ɛ dy a œ̃ pʁɔ.blɛm də si.ɲa.li.za.sjɔ̃/', 'luh ruh-TAR dü TREHⁿ | eh DÜ | a uhⁿ pro-BLEM duh see-nya-lee-za-SYOHⁿ', ['du'], FCVDR),
  sent(1883, 'La panne était due à un câble endommagé.', 'The breakdown was due to a damaged cable.',
    '/la pan e.tɛ dy a œ̃ kabl ɑ̃.dɔ.ma.ʒe/', 'la PANN ay-teh DÜ | a uhⁿ KABL ahⁿ-do-ma-ZHAY', ['du', 'accord'], FCVDR),
  sent(1884, 'Ces erreurs sont dues à un manque de relecture.', 'These errors are due to a lack of proofreading.',
    '/se.ze.ʁœʁ sɔ̃ dy a œ̃ mɑ̃k də ʁə.lɛk.tyʁ/', 'say-zeh-RUHR sohⁿ DÜ | a uhⁿ MAHⁿK duh ruh-lek-TÜR', ['du', 'accord']),
  sent(1885, 'Les retards sont dus aux intempéries.', 'The delays are due to the bad weather.',
    '/le ʁə.taʁ sɔ̃ dy o.zɛ̃.tɑ̃.pe.ʁi/', 'lay ruh-TAR sohⁿ DÜ | oh-zehⁿ-tahⁿ-pay-REE', ['du', 'accord'], FCVR, SO),
  sent(1886, "Cette hausse des prix s'explique par le coût de l'énergie.", 'This price rise is explained by the cost of energy.',
    '/sɛt os de pʁi sɛks.plik paʁ lə ku də le.nɛʁ.ʒi/', 'set OHS day PREE | seks-PLEEK | par luh KOO duh lay-nehr-ZHEE', ['explique'], FCVDR),
  sent(1887, 'Le bruit provient du chantier voisin.', 'The noise comes from the building site next door.',
    '/lə bʁɥi pʁɔ.vjɛ̃ dy ʃɑ̃.tje vwa.zɛ̃/', 'luh BRWEE pro-VYEHⁿ | dü shahⁿ-TYAY vwa-ZEHⁿ', ['provient']),
  sent(1888, "L'erreur provient d'un mauvais calcul.", 'The error stems from a miscalculation.',
    '/lɛ.ʁœʁ pʁɔ.vjɛ̃ dœ̃ mo.vɛ kal.kyl/', 'leh-RUHR pro-VYEHⁿ | duhⁿ moh-veh kal-KÜL', ['provient'], FCVR, SO),
  sent(1889, 'Le succès du film tient à la qualité du scénario.', 'The success of the film comes down to the quality of the script.',
    '/lə syk.sɛ dy film tjɛ̃ a la ka.li.te dy se.na.ʁjo/', 'luh sük-SEH dü FEELM | tyehⁿ a la ka-lee-TAY | dü say-na-RYOH', ['tient'], FCVDR),
  sent(1890, 'Le problème vient de la batterie.', 'The problem comes from the battery.',
    '/lə pʁɔ.blɛm vjɛ̃ də la ba.tʁi/', 'luh pro-BLEM vyehⁿ duh la ba-TREE', ['vient']),
  rule(1891, 'Dû, due, dus, dues : le participe s\'accorde avec le sujet.', 'Dû, due, dus, dues: the participle agrees with the subject.',
    '/dy dy dy dy lə paʁ.ti.sip sa.kɔʁd a.vɛk lə sy.ʒɛ/', 'DÜ | DÜ | DÜ | DÜ | luh par-tee-SEEP | sa-KORD a-vek luh sü-ZHEH',
    '« Ces erreurs sont … à un manque de relecture. »',
    "Dues : le sujet est féminin pluriel. Seul dû, au masculin singulier, garde l'accent circonflexe.",
    ['du', 'accord']),
  rule(1892, 'Avec un verbe de cause, le fait vient en tête et la cause après le verbe.', 'With a verb of cause, the fact comes first and the cause after the verb.',
    '/a.vɛk œ̃ vɛʁb də koz lə fɛ vjɛ̃.tɑ̃ tɛt e la koz a.pʁɛ lə vɛʁb/', 'a-vek uhⁿ VEHRB duh KOHZ | luh FEH vyehⁿ-tahⁿ TET | ay la KOHZ | a-preh luh VEHRB',
    'Dans « La panne était due à un câble », où est la cause ?',
    "Après le verbe : un câble endommagé. Le verbe de cause met le fait en tête de phrase, et la cause à la fin, là où on l'attend.",
    ['verbe']),
  gap(1893, "Cette différence s'explique par l'âge des participants.", 'This difference is explained by the age of the participants.',
    '/sɛt di.fe.ʁɑ̃s sɛks.plik paʁ laʒ de paʁ.ti.si.pɑ̃/', 'set dee-fay-RAHⁿS | seks-PLEEK par LAZH | day par-tee-see-PAHⁿ',
    "Cette différence ___ l'âge des participants. (s'expliquer)",
    "S'expliquer par : le verbe est pronominal, et la cause arrive avec par. EN: is explained by.",
    ['explique'], FCVR, SO),
  sent(1894, "Le malentendu vient d'une traduction trop rapide.", 'The misunderstanding comes from a hasty translation.',
    '/lə ma.lɑ̃.tɑ̃.dy vjɛ̃ dyn tʁa.dyk.sjɔ̃ tʁo ʁa.pid/', 'luh ma-lahⁿ-tahⁿ-DÜ | vyehⁿ dün tra-dük-SYOHⁿ | troh ra-PEED', ['vient']),
  sent(1895, 'La fermeture du magasin est due à la baisse des ventes.', 'The closure of the shop is due to falling sales.',
    '/la fɛʁ.mə.tyʁ dy ma.ɡa.zɛ̃ ɛ dy a la bɛs de vɑ̃t/', 'la fehr-muh-TÜR dü ma-ga-ZEHⁿ | eh DÜ | a la BESS day VAHⁿT', ['du', 'accord'], FCVDR),
  gap(1896, 'L\'odeur provient de la cuisine du restaurant.', 'The smell is coming from the restaurant kitchen.',
    '/lo.dœʁ pʁɔ.vjɛ̃ də la kɥi.zin dy ʁɛs.to.ʁɑ̃/', 'loh-DUHR pro-VYEHⁿ | duh la kwee-ZEEN | dü res-toh-RAHⁿ',
    "L'odeur ___ de la cuisine du restaurant. (provenir, au présent)",
    'Provenir de : venir de, dans un registre plus soigné. EN: comes from.',
    ['provient'], FCVR, SO),
  sent(1897, "Cet écart s'explique en partie par la météo.", 'This gap is partly explained by the weather.',
    '/sɛ.te.kaʁ sɛks.plik ɑ̃ paʁ.ti paʁ la me.te.o/', 'seh-tay-KAR | seks-PLEEK | ahⁿ par-TEE | par la may-tay-OH', ['explique', 'nuance']),
];

/* ── ACT 7 · LA CONSÉQUENCE, EN CONNECTEUR (.1898-.1913) ───────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1898, 'Le fournisseur a doublé ses prix ; en conséquence, nous avons revu notre budget.', 'The supplier doubled its prices; accordingly, we have revised our budget.',
    '/lə fuʁ.ni.sœʁ a du.ble se pʁi ɑ̃ kɔ̃.se.kɑ̃s nu.za.vɔ̃ ʁə.vy nɔtʁ byd.ʒɛ/', 'luh foor-nee-SUHR | a doo-BLAY say PREE | ahⁿ kohⁿ-say-KAHⁿS | noo-za-vohⁿ ruh-VÜ | notr büd-ZHEH', ['enconsequence'], FCVR, SO),
  sent(1899, "Les inscriptions ont explosé, d'où la création d'un deuxième groupe.", 'Enrolments shot up, hence the creation of a second group.',
    '/le.zɛ̃s.kʁip.sjɔ̃ ɔ̃.tɛk.splo.ze du la kʁe.a.sjɔ̃ dœ̃ dø.zjɛm ɡʁup/', 'lay-zehⁿs-kreep-SYOHⁿ | ohⁿ-tek-sploh-ZAY | DOO | la kray-a-SYOHⁿ | duhⁿ deu-zyemm GROOP', ['dou'], FCVDR),
  sent(1900, "Il avait oublié son badge, d'où son retard.", 'He had forgotten his pass, hence his lateness.',
    '/i.la.vɛ.tu.bli.je sɔ̃ badʒ du sɔ̃ ʁə.taʁ/', 'ee-la-veh-too-blee-YAY sohⁿ BADZH | DOO | sohⁿ ruh-TAR', ['dou']),
  sent(1901, 'La route était inondée ; de ce fait, les bus ont été déviés.', 'The road was flooded; as a result, the buses were diverted.',
    '/la ʁut e.tɛ.ti.nɔ̃.de də sə fɛt le bys ɔ̃.te.te de.vje/', 'la ROOT ay-teh-tee-nohⁿ-DAY | duh suh FET | lay BÜS | ohⁿ-tay-tay day-VYAY', ['dcefait'], FCVR, SO),
  sent(1902, 'Le dossier était incomplet. Aussi a-t-il été renvoyé à son auteur.', 'The file was incomplete. It was therefore sent back to its author.',
    '/lə do.sje e.tɛ.tɛ̃.kɔ̃.plɛ o.si a.til e.te ʁɑ̃.vwa.je a sɔ̃.no.tœʁ/', 'luh do-SYAY | ay-teh-tehⁿ-kohⁿ-PLEH | oh-SEE | a-teel ay-TAY | rahⁿ-vwa-YAY | a sohⁿ-noh-TUHR', ['aussi'], FCVR, SO),
  sent(1903, 'Tu connais les risques : agis en conséquence.', 'You know the risks: act accordingly.',
    '/ty kɔ.nɛ le ʁisk a.ʒi ɑ̃ kɔ̃.se.kɑ̃s/', 'tü ko-NEH lay REESK | a-ZHEE | ahⁿ kohⁿ-say-KAHⁿS', ['enconsequence']),
  sent(1904, 'On a raté le dernier métro, du coup on est rentrés à pied.', 'We missed the last metro, so we walked home.',
    '/ɔ̃.na ʁa.te lə dɛʁ.nje me.tʁo dy ku ɔ̃.nɛ ʁɑ̃.tʁe a pje/', 'ohⁿ-na ra-TAY | luh dehr-nyay may-TROH | dü KOO | ohⁿ-neh rahⁿ-TRAY a PYAY', ['ducoup', 'oral'], FCVDR, FA),
  sent(1905, "Les loyers augmentent ; c'est pourquoi beaucoup de familles s'éloignent du centre.", 'Rents are rising; that is why many families are moving away from the centre.',
    '/le lwa.je oɡ.mɑ̃t sɛ puʁ.kwa bo.ku də fa.mij se.lwaɲ dy sɑ̃tʁ/', 'lay lwa-YAY og-MAHⁿT | seh poor-KWA | boh-koo duh fa-MEEY | say-LWANY dü SAHⁿTR', ['cestpourquoi']),
  rule(1906, "D'où + un nom : la conséquence tient en un groupe, sans verbe conjugué.", "D'où + a noun: the consequence fits into a noun group, with no conjugated verb.",
    '/du œ̃ nɔ̃ la kɔ̃.se.kɑ̃s tjɛ̃.tɑ̃.nœ̃ ɡʁup sɑ̃ vɛʁb kɔ̃.ʒy.ɡe/', 'DOO | uhⁿ NOHⁿ | la kohⁿ-say-KAHⁿS | tyehⁿ-tahⁿ-nuhⁿ GROOP | sahⁿ vehrb kohⁿ-zhü-GAY',
    'Les inscriptions ont explosé, d’où… : quoi après d’où ?',
    "Un nom : d'où la création d'un deuxième groupe. Avec un verbe conjugué, écris plutôt c'est pourquoi ou si bien que.",
    ['dou']),
  rule(1907, 'Du coup se dit ; dans un texte, écris donc ou par conséquent.', 'Du coup is for speech; in writing, use donc or par conséquent.',
    '/dy ku sə di dɑ̃.zœ̃ tɛkst e.kʁi dɔ̃k u paʁ kɔ̃.se.kɑ̃/', 'dü KOO suh DEE | dahⁿ-zuhⁿ TEKST | ay-kree DOHⁿK | oo par kohⁿ-say-KAHⁿ',
    'Du coup, dans une lettre de motivation ?',
    "Non : du coup est familier. Donc, c'est pourquoi ou par conséquent conviennent à l'écrit.",
    ['ducoup', 'registre']),
  gap(1908, "Le vol a été annulé, d'où la colère des passagers.", 'The flight was cancelled, hence the passengers’ anger.',
    '/lə vɔl a e.te a.ny.le du la kɔ.lɛʁ de pa.sa.ʒe/', 'luh VOL | a ay-tay a-nü-LAY | DOO | la ko-LEHR day pa-sa-ZHAY',
    'Le vol a été annulé, ___ la colère des passagers. (+ un nom)',
    "D'où, puis un nom : la conséquence tient en un groupe. EN: hence.",
    ['dou'], FCVDR),
  sent(1909, 'Les ventes ont baissé ; la boutique a donc fermé.', 'Sales fell; the shop therefore closed.',
    '/le vɑ̃t ɔ̃ be.se la bu.tik a dɔ̃k fɛʁ.me/', 'lay VAHⁿT ohⁿ beh-SAY | la boo-TEEK | a DOHⁿK fehr-MAY', ['donc']),
  sent(1910, "Aussi avons-nous décidé de reporter l'assemblée.", 'We have therefore decided to postpone the meeting.',
    '/o.si a.vɔ̃.nu de.si.de də ʁə.pɔʁ.te la.sɑ̃.ble/', 'oh-SEE | a-vohⁿ-NOO | day-see-DAY | duh ruh-por-TAY la-sahⁿ-BLAY', ['aussi'], FCVDR, SO),
  sent(1911, 'Ce produit est dangereux. Il doit, en conséquence, être tenu hors de portée des enfants.', 'This product is dangerous. It must therefore be kept out of the reach of children.',
    '/sə pʁɔ.dɥi ɛ dɑ̃ʒ.ʁø il dwa ɑ̃ kɔ̃.se.kɑ̃s ɛtʁ tə.ny ɔʁ də pɔʁ.te de.zɑ̃.fɑ̃/', 'suh pro-DWEE | eh dahⁿzh-RUH | eel DWA | ahⁿ kohⁿ-say-KAHⁿS | ehtr tuh-NÜ | or duh por-TAY day-zahⁿ-FAHⁿ', ['enconsequence'], FCVR, SO),
  sent(1912, "La demande a été mal remplie ; de ce fait, elle n'a pas pu être traitée.", 'The application was filled in wrongly; as a result, it could not be processed.',
    '/la də.mɑ̃d a e.te mal ʁɑ̃.pli də sə fɛt ɛl na pa py ɛtʁ tʁɛ.te/', 'la duh-MAHⁿD | a ay-tay mal rahⁿ-PLEE | duh suh FET | el na pa pü ehtr treh-TAY', ['dcefait'], FCVR, SO),
  sent(1913, 'Le train était complet ; par conséquent, nous avons loué une voiture.', 'The train was full; consequently, we hired a car.',
    '/lə tʁɛ̃ e.tɛ kɔ̃.plɛ paʁ kɔ̃.se.kɑ̃ nu.za.vɔ̃ lwe yn vwa.tyʁ/', 'luh TREHⁿ ay-teh kohⁿ-PLEH | par kohⁿ-say-KAHⁿ | noo-za-vohⁿ LWAY ün vwa-TÜR', ['parconsequent']),
];

/* ── ACT 8 · LE RÉSULTAT OU LE BUT (.1914-.1927) ───────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1914, "Il a parlé fort, si bien que toute la salle l'a entendu.", 'He spoke loudly, so the whole room heard him.',
    '/i.la paʁ.le fɔʁ si bjɛ̃ kə tut la sal la.tɑ̃.dy/', 'ee-la par-lay FOR | see byehⁿ KUH | toot la SAL la-tahⁿ-DÜ', ['resultat']),
  sent(1915, "Range tes dossiers de sorte qu'on puisse les retrouver.", 'Arrange your files so that they can be found again.',
    '/ʁɑ̃ʒ te do.sje də sɔʁt kɔ̃ pɥis le ʁə.tʁu.ve/', 'rahⁿzh tay do-SYAY | duh SORT kohⁿ PWEESS | lay ruh-troo-VAY', ['but', 'subjonctif'], FCVDR),
  sent(1916, "Elle a rangé ses dossiers de sorte qu'on les a retrouvés sans peine.", 'She arranged her files in such a way that they were found easily.',
    '/ɛ.la ʁɑ̃.ʒe se do.sje də sɔʁt kɔ̃ le.za ʁə.tʁu.ve sɑ̃ pɛn/', 'eh-la rahⁿ-ZHAY say do-SYAY | duh SORT | kohⁿ lay-za ruh-troo-VAY | sahⁿ PENN', ['resultat', 'indicatif']),
  sent(1917, 'Le guide parle lentement de sorte que tout le groupe comprenne.', 'The guide speaks slowly so that the whole group understands.',
    '/lə ɡid paʁl lɑ̃t.mɑ̃ də sɔʁt kə tu lə ɡʁup kɔ̃.pʁɛn/', 'luh GEED parl lahⁿt-MAHⁿ | duh SORT kuh | too luh GROOP kohⁿ-PRENN', ['but', 'subjonctif'], FCVDR),
  sent(1918, 'Le guide a parlé lentement, de sorte que tout le groupe a compris.', 'The guide spoke slowly, so the whole group understood.',
    '/lə ɡid a paʁ.le lɑ̃t.mɑ̃ də sɔʁt kə tu lə ɡʁup a kɔ̃.pʁi/', 'luh GEED a par-LAY lahⁿt-MAHⁿ | duh SORT kuh | too luh GROOP a kohⁿ-PREE', ['resultat', 'indicatif'], FCVDR),
  sent(1919, 'Écris lisiblement, de façon que chacun puisse te relire.', 'Write legibly, so that everyone can read you.',
    '/e.kʁi li.zi.blə.mɑ̃ də fa.sɔ̃ kə ʃa.kœ̃ pɥis tə ʁə.liʁ/', 'ay-KREE lee-zee-bluh-MAHⁿ | duh fa-SOHⁿ kuh | sha-KUHⁿ PWEESS tuh ruh-LEER', ['but', 'subjonctif'], FCVR, SO),
  sent(1920, "La réunion a débordé, si bien que j'ai raté mon train.", 'The meeting overran, so I missed my train.',
    '/la ʁe.y.njɔ̃ a de.bɔʁ.de si bjɛ̃ kə ʒe ʁa.te mɔ̃ tʁɛ̃/', 'la ray-ü-NYOHⁿ | a day-bor-DAY | see byehⁿ KUH | zhay ra-TAY mohⁿ TREHⁿ', ['resultat'], FCVDR),
  rule(1921, 'De sorte que + indicatif : c\'est arrivé. De sorte que + subjonctif : on le vise.', 'De sorte que + indicative: it happened. De sorte que + subjunctive: it is the aim.',
    '/də sɔʁt kə ɛ̃.di.ka.tif sɛ.ta.ʁi.ve də sɔʁt kə syb.ʒɔ̃k.tif ɔ̃ lə viz/', 'duh SORT kuh | ehⁿ-dee-ka-TEEF | seh-ta-ree-VAY | duh SORT kuh | süb-zhohⁿk-TEEF | ohⁿ luh VEEZ',
    'De sorte que tout le groupe comprenne : c’est fait ?',
    "Non : c'est le but visé, pas encore atteint. Avec l'indicatif (a compris), c'est un résultat.",
    ['resultat', 'but']),
  rule(1922, 'Si bien que ne prend jamais le subjonctif : il dit toujours un résultat.', 'Si bien que never takes the subjunctive: it always states a result.',
    '/si bjɛ̃ kə nə pʁɑ̃ ʒa.mɛ lə syb.ʒɔ̃k.tif il di tu.ʒuʁ œ̃ ʁe.zyl.ta/', 'see byehⁿ KUH | nuh prahⁿ zha-MEH | luh süb-zhohⁿk-TEEF | eel dee too-ZHOOR | uhⁿ ray-zül-TA',
    'Si bien que + subjonctif ?',
    "Jamais : si bien que dit ce qui est arrivé, donc l'indicatif. Pour un but, de sorte que ou pour que, avec le subjonctif.",
    ['resultat']),
  gap(1923, 'Parle plus lentement, de sorte que tout le monde te suive.', 'Speak more slowly, so that everyone can follow you.',
    '/paʁl ply lɑ̃t.mɑ̃ də sɔʁt kə tu lə mɔ̃d tə sɥiv/', 'parl plü lahⁿt-MAHⁿ | duh SORT kuh | too luh MOHⁿD tuh SWEEV',
    'Parle plus lentement, de sorte que tout le monde te ___. (suivre · un but)',
    "Un but, donc le subjonctif : suive. EN: so that everyone follows.",
    ['but', 'subjonctif']),
  gap(1924, "Il a parlé lentement, de sorte que tout le monde l'a suivi.", 'He spoke slowly, so everyone followed him.',
    '/i.la paʁ.le lɑ̃t.mɑ̃ də sɔʁt kə tu lə mɔ̃d la sɥi.vi/', 'ee-la par-LAY lahⁿt-MAHⁿ | duh SORT kuh | too luh MOHⁿD la swee-VEE',
    "Il a parlé lentement, de sorte que tout le monde l'___ ___. (suivre · un résultat)",
    "Un résultat, donc l'indicatif : l'a suivi. EN: so everyone followed him.",
    ['resultat', 'indicatif']),
  sent(1925, 'Nous avons ouvert plus tôt, de sorte que la file a vite diminué.', 'We opened earlier, so the queue quickly went down.',
    '/nu.za.vɔ̃.zu.vɛʁ ply to də sɔʁt kə la fil a vit di.mi.nɥe/', 'noo-za-vohⁿ-zoo-VEHR plü TOH | duh SORT kuh | la FEEL a veet dee-mee-NWAY', ['resultat', 'indicatif']),
  sent(1926, "Organise la salle de sorte que chacun voie l'écran.", 'Arrange the room so that everyone can see the screen.',
    '/ɔʁ.ɡa.niz la sal də sɔʁt kə ʃa.kœ̃ vwa le.kʁɑ̃/', 'or-ga-NEEZ la SAL | duh SORT kuh | sha-KUHⁿ VWA lay-KRAHⁿ', ['but', 'subjonctif']),
  sent(1927, "Le mur a été repeint, si bien qu'on ne voit plus les fissures.", 'The wall has been repainted, so you can no longer see the cracks.',
    '/lə myʁ a e.te ʁə.pɛ̃ si bjɛ̃ kɔ̃ nə vwa ply le fi.syʁ/', 'luh MÜR a ay-tay ruh-PEHⁿ | see byehⁿ KOHⁿ | nuh vwa plü lay fee-SÜR', ['resultat']),
];

/* ── ACT 9 · L'INTENSITÉ QUI PRODUIT L'EFFET (.1928-.1945) ─────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1928, 'Il a tant plu que la rivière est sortie de son lit.', 'It rained so much that the river burst its banks.',
    '/i.la tɑ̃ ply kə la ʁi.vjɛʁ ɛ sɔʁ.ti də sɔ̃ li/', 'ee-la tahⁿ PLÜ | kuh la ree-VYEHR | eh sor-TEE duh sohⁿ LEE', ['tant'], FCVDR),
  sent(1929, 'Il y avait tant de candidats que le jury a prolongé les entretiens.', 'There were so many candidates that the panel extended the interviews.',
    '/il.ja.vɛ tɑ̃ də kɑ̃.di.da kə lə ʒy.ʁi a pʁɔ.lɔ̃.ʒe le.zɑ̃.tʁə.tjɛ̃/', 'eel-ya-veh tahⁿ duh kahⁿ-dee-DA | kuh luh zhü-REE | a pro-lohⁿ-ZHAY lay-zahⁿ-truh-TYEHⁿ', ['tant']),
  sent(1930, "Elle a tellement travaillé qu'elle a fini par tomber malade.", 'She worked so hard that she ended up falling ill.',
    '/ɛ.la tɛl.mɑ̃ tʁa.va.je kɛ.la fi.ni paʁ tɔ̃.be ma.lad/', 'eh-la tel-mahⁿ tra-va-YAY | keh-la fee-NEE | par tohⁿ-BAY ma-LAD', ['tellement']),
  sent(1931, "Le bruit était si fort qu'on ne s'entendait plus.", 'The noise was so loud that we could no longer hear each other.',
    '/lə bʁɥi e.tɛ si fɔʁ kɔ̃ nə sɑ̃.tɑ̃.dɛ ply/', 'luh BRWEE ay-teh see FOR | kohⁿ nuh sahⁿ-tahⁿ-deh PLÜ', ['si']),
  sent(1932, 'La tension est montée au point que la réunion a été suspendue.', 'Tension rose to the point that the meeting was suspended.',
    '/la tɑ̃.sjɔ̃ ɛ mɔ̃.te o pwɛ̃ kə la ʁe.y.njɔ̃ a e.te sys.pɑ̃.dy/', 'la tahⁿ-SYOHⁿ | eh mohⁿ-TAY | oh PWEHⁿ kuh | la ray-ü-NYOHⁿ | a ay-tay süs-pahⁿ-DÜ', ['aupoint'], FCVDR),
  sent(1933, 'Il était épuisé au point de s\'endormir en réunion.', 'He was exhausted to the point of falling asleep in a meeting.',
    '/i.le.tɛ.te.pɥi.ze o pwɛ̃ də sɑ̃.dɔʁ.miʁ ɑ̃ ʁe.y.njɔ̃/', 'ee-lay-teh-tay-pwee-ZAY | oh PWEHⁿ duh | sahⁿ-dor-MEER | ahⁿ ray-ü-NYOHⁿ', ['aupoint', 'infinitif']),
  sent(1934, 'La salle est trop petite pour que tout le monde puisse entrer.', 'The room is too small for everyone to get in.',
    '/la sal ɛ tʁo pə.tit puʁ kə tu lə mɔ̃d pɥi.sɑ̃.tʁe/', 'la SAL eh troh puh-TEET | poor kuh too luh MOHⁿD | pwee-sahⁿ-TRAY', ['trop', 'subjonctif'], FCVDR),
  sent(1935, 'Il est trop tard pour appeler le service client.', 'It is too late to call customer service.',
    '/i.lɛ tʁo taʁ puʁ a.pə.le lə sɛʁ.vis kli.jɑ̃/', 'ee-leh troh TAR | poor a-puh-LAY | luh sehr-VEESS klee-YAHⁿ', ['trop', 'infinitif']),
  sent(1936, 'Le texte est assez clair pour que chacun le comprenne.', 'The text is clear enough for everyone to understand it.',
    '/lə tɛkst ɛ.ta.se klɛʁ puʁ kə ʃa.kœ̃ lə kɔ̃.pʁɛn/', 'luh TEKST | eh-ta-say KLEHR | poor kuh sha-KUHⁿ | luh kohⁿ-PRENN', ['assez', 'subjonctif']),
  sent(1937, 'Les loyers ont augmenté à tel point que des familles quittent le quartier.', 'Rents have gone up so much that families are leaving the neighbourhood.',
    '/le lwa.je ɔ̃.to.ɡmɑ̃.te a tɛl pwɛ̃ kə de fa.mij kit lə kaʁ.tje/', 'lay lwa-YAY | ohⁿ-tog-mahⁿ-TAY | a tel PWEHⁿ kuh | day fa-MEEY | keet luh kar-TYAY', ['aupoint'], FCVR, SO),
  rule(1938, 'Trop… pour que et assez… pour que appellent le subjonctif.', 'Trop… pour que and assez… pour que call for the subjunctive.',
    '/tʁo puʁ kə e a.se puʁ kə a.pɛl lə syb.ʒɔ̃k.tif/', 'troh poor KUH | ay a-say poor KUH | a-PELL luh süb-zhohⁿk-TEEF',
    'Trop petite pour que tout le monde … entrer ?',
    "Puisse : après trop… pour que, l'effet reste une idée, il n'a pas lieu. Avec un seul sujet, l'infinitif : trop tard pour appeler.",
    ['trop', 'subjonctif']),
  rule(1939, 'Au point que + une phrase ; au point de + un infinitif, avec le même sujet.', 'Au point que + a clause; au point de + an infinitive, with the same subject.',
    '/o pwɛ̃ kə yn fʁaz o pwɛ̃ də œ̃.nɛ̃.fi.ni.tif a.vɛk lə mɛm sy.ʒɛ/', 'oh PWEHⁿ kuh | ün FRAZ | oh PWEHⁿ duh | uhⁿ-nehⁿ-fee-nee-TEEF | a-vek luh MEM sü-ZHEH',
    'Au point que ou au point de ?',
    "Au point que ouvre une phrase avec son propre sujet : au point que la réunion a été suspendue. Au point de + infinitif garde le sujet du verbe principal.",
    ['aupoint']),
  gap(1940, "Elle a tant de dossiers en cours qu'elle refuse les nouveaux clients.", 'She has so many cases on the go that she is turning new clients away.',
    '/ɛl a tɑ̃ də do.sje ɑ̃ kuʁ kɛl ʁə.fyz le nu.vo kli.jɑ̃/', 'el a tahⁿ duh do-SYAY ahⁿ KOOR | kel ruh-FÜZ | lay noo-voh klee-YAHⁿ',
    "Elle a ___ dossiers en cours qu'elle refuse les nouveaux clients. (une grande quantité)",
    'Tant de, ou tellement de, devant un nom, puis que. EN: so many.',
    ['tant']),
  sent(1941, "Le film m'a tellement plu que je l'ai vu deux fois.", 'I liked the film so much that I saw it twice.',
    '/lə film ma tɛl.mɑ̃ ply kə ʒə le vy dø fwa/', 'luh FEELM | ma tel-mahⁿ PLÜ | kuh zhuh lay vü deu FWA', ['tellement']),
  sent(1942, "Il parle trop vite pour qu'on puisse prendre des notes.", 'He talks too fast for anyone to take notes.',
    '/il paʁl tʁo vit puʁ kɔ̃ pɥis pʁɑ̃dʁ de nɔt/', 'eel parl troh VEET | poor kohⁿ PWEESS | prahⁿdr day NOT', ['trop', 'subjonctif']),
  sent(1943, 'La hausse est telle que certains commerçants ont fermé.', 'The rise is such that some shopkeepers have closed.',
    '/la os ɛ tɛl kə sɛʁ.tɛ̃ kɔ.mɛʁ.sɑ̃ ɔ̃ fɛʁ.me/', 'la OHS eh TEL kuh | sehr-tehⁿ ko-mehr-SAHⁿ | ohⁿ fehr-MAY', ['tel'], FCVR, SO),
  sent(1944, 'Elle était émue au point de ne plus pouvoir parler.', 'She was so moved she could no longer speak.',
    '/ɛ.le.tɛ.te.my o pwɛ̃ də nə ply pu.vwaʁ paʁ.le/', 'eh-lay-teh-tay-MÜ | oh PWEHⁿ duh | nuh plü poo-vwar par-LAY', ['aupoint', 'infinitif']),
  gap(1945, 'La valise est trop lourde pour que je puisse la porter seule.', 'The suitcase is too heavy for me to carry on my own.',
    '/la va.liz ɛ tʁo luʁd puʁ kə ʒə pɥis la pɔʁ.te sœl/', 'la va-LEEZ | eh troh LOORD | poor kuh zhuh PWEESS | la por-tay SUHL',
    'La valise est trop lourde pour que je ___ la porter seule. (pouvoir)',
    "Trop… pour que : le subjonctif, puisse. EN: too heavy for me to carry.",
    ['trop', 'subjonctif']),
];

/* ── ACT 10 · LA CONSÉQUENCE DANS LE VERBE (.1946-.1960) ───────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1946, 'Cette réforme a suscité de vives réactions.', 'This reform has sparked strong reactions.',
    '/sɛt ʁe.fɔʁm a sy.si.te də viv ʁe.ak.sjɔ̃/', 'set ray-FORM | a sü-see-TAY | duh veev ray-ak-SYOHⁿ', ['susciter'], FCVDR, SO),
  sent(1947, 'Le verglas a provoqué plusieurs accidents ce matin.', 'Black ice caused several accidents this morning.',
    '/lə vɛʁ.ɡla a pʁɔ.vɔ.ke ply.zjœʁ.zak.si.dɑ̃ sə ma.tɛ̃/', 'luh vehr-GLA | a pro-vo-KAY | plü-zyuhr-zak-see-DAHⁿ | suh ma-TEHⁿ', ['provoquer'], FCVDR),
  sent(1948, "La grève a entraîné l'annulation de nombreux vols.", 'The strike led to the cancellation of many flights.',
    '/la ɡʁɛv a ɑ̃.tʁɛ.ne la.ny.la.sjɔ̃ də nɔ̃.bʁø vɔl/', 'la GREV | a ahⁿ-treh-NAY | la-nü-la-SYOHⁿ | duh nohⁿ-bruh VOL', ['entrainer'], FCVDR),
  sent(1949, "L'orage a causé d'importants dégâts dans le quartier.", 'The storm caused major damage in the neighbourhood.',
    '/lɔ.ʁaʒ a ko.ze dɛ̃.pɔʁ.tɑ̃ de.ɡa dɑ̃ lə kaʁ.tje/', 'lo-RAZH | a koh-ZAY | dehⁿ-por-TAHⁿ day-GA | dahⁿ luh kar-TYAY', ['causer']),
  sent(1950, 'Les négociations ont abouti à un accord.', 'The negotiations resulted in an agreement.',
    '/le ne.ɡɔ.sja.sjɔ̃ ɔ̃.ta.bu.ti a œ̃.na.kɔʁ/', 'lay nay-go-sya-SYOHⁿ | ohⁿ-ta-boo-TEE | a uhⁿ-na-KOR', ['aboutir'], FCVDR),
  sent(1951, 'Sa remarque a provoqué un fou rire général.', 'His remark set off a general fit of giggles.',
    '/sa ʁə.maʁk a pʁɔ.vɔ.ke œ̃ fu ʁiʁ ʒe.ne.ʁal/', 'sa ruh-MARK | a pro-vo-KAY | uhⁿ foo REER | zhay-nay-RAL', ['provoquer']),
  sent(1952, "Ce projet suscite l'intérêt des jeunes.", 'This project is arousing the interest of young people.',
    '/sə pʁɔ.ʒɛ sy.sit lɛ̃.te.ʁɛ de ʒœn/', 'suh pro-ZHEH | sü-SEET | lehⁿ-tay-REH day ZHUNN', ['susciter']),
  sent(1953, 'Un retard de livraison entraîne souvent des frais supplémentaires.', 'A late delivery often leads to extra costs.',
    '/œ̃ ʁə.taʁ də li.vʁɛ.zɔ̃ ɑ̃.tʁɛn su.vɑ̃ de fʁɛ sy.ple.mɑ̃.tɛʁ/', 'uhⁿ ruh-TAR duh lee-vreh-ZOHⁿ | ahⁿ-TREN soo-VAHⁿ | day FREH sü-play-mahⁿ-TEHR', ['entrainer']),
  sent(1954, "Les discussions n'ont abouti à rien.", 'The discussions came to nothing.',
    '/le dis.ky.sjɔ̃ nɔ̃.ta.bu.ti a ʁjɛ̃/', 'lay dees-kü-SYOHⁿ | nohⁿ-ta-boo-TEE a RYEHⁿ', ['aboutir']),
  rule(1955, 'Susciter : une réaction ou un sentiment. Aboutir à : la fin d\'un processus.', "Susciter: a reaction or a feeling. Aboutir à: the end of a process.",
    '/sy.si.te yn ʁe.ak.sjɔ̃ u œ̃ sɑ̃.ti.mɑ̃ a.bu.tiʁ a la fɛ̃ dœ̃ pʁɔ.se.sy/', 'sü-see-TAY | ün ray-ak-SYOHⁿ | oo uhⁿ sahⁿ-tee-MAHⁿ | a-boo-TEER A | la FEHⁿ | duhⁿ pro-say-SÜ',
    'Suscite-t-on un accident ?',
    "Non : on provoque ou on cause un accident. On suscite l'intérêt, la colère, un débat. On aboutit à un accord, après des étapes.",
    ['susciter', 'aboutir']),
  rule(1956, 'Aboutir se construit avec à : les négociations ont abouti à un accord.', 'Aboutir takes à: the negotiations resulted in an agreement.',
    '/a.bu.tiʁ sə kɔ̃s.tʁɥi a.vɛk a le ne.ɡɔ.sja.sjɔ̃ ɔ̃.ta.bu.ti a œ̃.na.kɔʁ/', 'a-boo-TEER | suh kohⁿs-TRWEE a-vek A | lay nay-go-sya-SYOHⁿ | ohⁿ-ta-boo-TEE | a uhⁿ-na-KOR',
    'Les négociations ont abouti un accord ?',
    "Non : aboutir à. Sans complément, aboutir veut dire réussir : le projet a enfin abouti.",
    ['aboutir']),
  gap(1957, 'La hausse des prix a entraîné une baisse de la consommation.', 'The price rise led to a drop in consumption.',
    '/la os de pʁi a ɑ̃.tʁɛ.ne yn bɛs də la kɔ̃.sɔ.ma.sjɔ̃/', 'la OHS day PREE | a ahⁿ-treh-NAY | ün BESS | duh la kohⁿ-so-ma-SYOHⁿ',
    'La hausse des prix a ___ une baisse de la consommation. (une suite logique, presque automatique)',
    "Entraîner : une conséquence qui suit mécaniquement. Provoquer ou causer iraient aussi, sans cette nuance. EN: led to.",
    ['entrainer']),
  sent(1958, "Le projet a enfin abouti après trois ans d'efforts.", 'The project finally succeeded after three years of effort.',
    '/lə pʁɔ.ʒɛ a ɑ̃.fɛ̃ a.bu.ti a.pʁɛ tʁwa.zɑ̃ dɛ.fɔʁ/', 'luh pro-ZHEH | a ahⁿ-FEHⁿ a-boo-TEE | a-preh trwa-ZAHⁿ deh-FOR', ['aboutir']),
  sent(1959, 'Cette décision risque de provoquer la colère des habitants.', 'This decision is likely to provoke the residents’ anger.',
    '/sɛt de.si.zjɔ̃ ʁisk də pʁɔ.vɔ.ke la kɔ.lɛʁ de.za.bi.tɑ̃/', 'set day-see-ZYOHⁿ | reesk duh pro-vo-KAY | la ko-LEHR day-za-bee-TAHⁿ', ['provoquer']),
  gap(1960, 'Le reportage a suscité de nombreuses questions.', 'The report raised many questions.',
    '/lə ʁə.pɔʁ.taʒ a sy.si.te də nɔ̃.bʁøz kɛs.tjɔ̃/', 'luh ruh-por-TAZH | a sü-see-TAY | duh nohⁿ-bruhz kes-TYOHⁿ',
    'Le reportage a ___ de nombreuses questions. (une réaction du public)',
    "Susciter : faire naître une réaction, un sentiment, des questions. Soulever irait aussi. EN: raised.",
    ['susciter'], FCVR, SO),
];

/* ── ACT 11 · DOSER LA CERTITUDE (.1961-.1977) ─────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1961, "L'incendie serait dû à un court-circuit.", 'The fire is thought to be due to a short circuit.',
    '/lɛ̃.sɑ̃.di sə.ʁɛ dy a œ̃ kuʁ.siʁ.kɥi/', 'lehⁿ-sahⁿ-DEE | suh-reh DÜ | a uhⁿ koor-seer-KWEE', ['conditionnel'], FCVDR),
  sent(1962, 'Selon les premiers éléments, le conducteur aurait perdu le contrôle de sa voiture.', 'According to early reports, the driver apparently lost control of his car.',
    '/sə.lɔ̃ le pʁə.mje.ze.le.mɑ̃ lə kɔ̃.dyk.tœʁ o.ʁɛ pɛʁ.dy lə kɔ̃.tʁol də sa vwa.tyʁ/', 'suh-lohⁿ lay pruh-myay-zay-lay-MAHⁿ | luh kohⁿ-dük-TUHR | oh-reh pehr-DÜ | luh kohⁿ-TROL duh sa vwa-TÜR', ['conditionnel', 'passe']),
  sent(1963, 'Le retard est sans doute dû à la neige.', 'The delay is probably due to the snow.',
    '/lə ʁə.taʁ ɛ sɑ̃ dut dy a la nɛʒ/', 'luh ruh-TAR | eh sahⁿ DOOT | dü a la NEZH', ['sansdoute'], FCVDR),
  sent(1964, 'Le retard est sans aucun doute dû à la neige.', 'The delay is undoubtedly due to the snow.',
    '/lə ʁə.taʁ ɛ sɑ̃.zo.kœ̃ dut dy a la nɛʒ/', 'luh ruh-TAR | eh sahⁿ-zoh-kuhⁿ DOOT | dü a la NEZH', ['sansdoute', 'certain']),
  sent(1965, 'Il semble que la panne vienne du réseau.', 'It seems that the outage comes from the network.',
    '/il sɑ̃bl kə la pan vjɛn dy ʁe.zo/', 'eel SAHⁿBL | kuh la PANN | vyenn dü ray-ZOH', ['semble', 'subjonctif']),
  sent(1966, 'Il semblerait que les deux événements soient liés.', 'It would seem that the two events are linked.',
    '/il sɑ̃.blə.ʁɛ kə le dø.ze.vɛn.mɑ̃ swa lje/', 'eel sahⁿ-bluh-REH | kuh lay deu-zay-ven-MAHⁿ | swa LYAY', ['semble', 'subjonctif'], FCVR, SO),
  sent(1967, 'Tout porte à croire que la fuite provient du toit.', 'Everything suggests that the leak is coming from the roof.',
    '/tu pɔʁ.ta kʁwaʁ kə la fɥit pʁɔ.vjɛ̃ dy twa/', 'too por-ta KRWAR | kuh la FWEET | pro-vyehⁿ dü TWA', ['porte', 'indicatif'], FCVDR),
  sent(1968, 'La hausse des prix est probablement liée au coût du transport.', 'The price rise is probably linked to the cost of transport.',
    '/la os de pʁi ɛ pʁɔ.ba.blə.mɑ̃ lje o ku dy tʁɑ̃s.pɔʁ/', 'la OHS day PREE | eh pro-ba-bluh-MAHⁿ LYAY | oh KOO dü trahⁿs-POR', ['probable']),
  sent(1969, "Cette baisse s'explique vraisemblablement par la météo.", 'This drop is most likely explained by the weather.',
    '/sɛt bɛs sɛks.plik vʁɛ.sɑ̃.bla.blə.mɑ̃ paʁ la me.te.o/', 'set BESS | seks-PLEEK | vreh-sahⁿ-bla-bluh-MAHⁿ | par la may-tay-OH', ['probable'], FCVR, SO),
  rule(1970, 'Sans doute veut dire probablement ; pour la certitude, dis sans aucun doute.', 'Sans doute means probably; for certainty, say sans aucun doute.',
    '/sɑ̃ dut vø diʁ pʁɔ.ba.blə.mɑ̃ puʁ la sɛʁ.ti.tyd di sɑ̃.zo.kœ̃ dut/', 'sahⁿ DOOT | vuh deer pro-ba-bluh-MAHⁿ | poor la sehr-tee-TÜD | dee sahⁿ-zoh-kuhⁿ DOOT',
    'Sans doute = without doubt ?',
    "Non : sans doute laisse une petite place au doute. Sans aucun doute, certainement, il est certain que : là, tu es sûr.",
    ['sansdoute']),
  rule(1971, "Le conditionnel des médias : une information qu'on n'a pas encore vérifiée.", 'The media conditional: information not yet verified.',
    '/lə kɔ̃.di.sjɔ.nɛl de me.dja yn ɛ̃.fɔʁ.ma.sjɔ̃ kɔ̃ na pa.zɑ̃.kɔʁ ve.ʁi.fje/', 'luh kohⁿ-dee-syo-NELL day may-DYA | ün ehⁿ-for-ma-SYOHⁿ | kohⁿ na pa-zahⁿ-KOR vay-ree-FYAY',
    "L'incendie serait dû à un court-circuit : c'est confirmé ?",
    "Non : c'est ce qu'on dit, ce n'est pas prouvé. Pour un fait passé : aurait provoqué, aurait été causé par.",
    ['conditionnel']),
  gap(1972, "D'après la police, l'accident aurait été causé par le verglas.", 'According to the police, the accident was reportedly caused by black ice.',
    '/da.pʁɛ la pɔ.lis lak.si.dɑ̃ o.ʁɛ.te.te ko.ze paʁ lə vɛʁ.ɡla/', 'da-preh la po-LEESS | lak-see-DAHⁿ | oh-reh-tay-TAY koh-ZAY | par luh vehr-GLA',
    "D'après la police, l'accident ___ ___ causé par le verglas. (être · une information non confirmée)",
    "Aurait été : le conditionnel passé dit un fait passé qu'on ne garantit pas. EN: was reportedly caused.",
    ['conditionnel', 'passe'], FCVDR),
  sent(1973, "Il est certain que la fermeture de l'usine a pesé sur l'emploi.", "The factory closure has certainly weighed on employment.",
    '/i.lɛ sɛʁ.tɛ̃ kə la fɛʁ.mə.tyʁ də ly.zin a pə.ze syʁ lɑ̃.plwa/', 'ee-leh sehr-TEHⁿ kuh | la fehr-muh-TÜR duh lü-ZEEN | a puh-ZAY sür lahⁿ-PLWA', ['certain']),
  sent(1974, 'La cause exacte de la panne reste inconnue.', 'The exact cause of the outage remains unknown.',
    '/la koz ɛɡ.zakt də la pan ʁɛst ɛ̃.kɔ.ny/', 'la KOHZ eg-ZAKT | duh la PANN | rest ehⁿ-ko-NÜ', ['inconnu']),
  sent(1975, 'On ignore encore si ces deux faits sont liés.', 'It is not yet known whether these two facts are linked.',
    '/ɔ̃.ni.ɲɔʁ ɑ̃.kɔʁ si se dø fɛ sɔ̃ lje/', 'ohⁿ-nee-NYOR ahⁿ-KOR | see say deu FEH sohⁿ LYAY', ['inconnu']),
  gap(1976, "Il semble que les habitants soient partis avant l'orage.", 'It seems the residents left before the storm.',
    '/il sɑ̃bl kə le.za.bi.tɑ̃ swa paʁ.ti a.vɑ̃ lɔ.ʁaʒ/', 'eel SAHⁿBL kuh | lay-za-bee-TAHⁿ | swa par-TEE | a-vahⁿ lo-RAZH',
    "Il semble que les habitants ___ partis avant l'orage. (être)",
    "Il semble que : le subjonctif, ici passé, soient partis. EN: it seems they left.",
    ['semble', 'subjonctif']),
  sent(1977, 'Plusieurs facteurs expliquent sans doute ce phénomène.', 'Several factors probably explain this phenomenon.',
    '/ply.zjœʁ fak.tœʁ ɛks.plik sɑ̃ dut sə fe.nɔ.mɛn/', 'plü-zyuhr fak-TUHR | eks-PLEEK | sahⁿ DOOT | suh fay-no-MENN', ['sansdoute']),
];

/* ── ACT 12 · TON ANALYSE (.1978-.1991) ────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1978, 'De plus en plus de familles quittent les grandes villes pour la campagne.', 'More and more families are leaving the big cities for the countryside.',
    '/də ply.zɑ̃ ply də fa.mij kit le ɡʁɑ̃d vil puʁ la kɑ̃.paɲ/', 'duh plü-zahⁿ PLÜ duh fa-MEEY | keet lay grahⁿd VEEL | poor la kahⁿ-PANY', ['tache', 'phenomene'], FCVDR),
  sent(1979, "Ce départ s'explique d'abord par la hausse des loyers.", 'This departure is explained first of all by rising rents.',
    '/sə de.paʁ sɛks.plik da.bɔʁ paʁ la os de lwa.je/', 'suh day-PAR | seks-PLEEK da-BOR | par la OHS day lwa-YAY', ['tache', 'cause']),
  sent(1980, 'Le télétravail a sans doute accéléré le mouvement.', 'Remote working has probably sped up the trend.',
    '/lə te.le.tʁa.vaj a sɑ̃ dut ak.se.le.ʁe lə muv.mɑ̃/', 'luh tay-lay-tra-VYE | a sahⁿ DOOT | ak-say-lay-RAY | luh moov-MAHⁿ', ['tache', 'certitude']),
  sent(1981, "Étant donné que beaucoup travaillent à distance, vivre loin du bureau n'est plus un obstacle.", 'Given that many people work remotely, living far from the office is no longer an obstacle.',
    '/e.tɑ̃ dɔ.ne kə bo.ku tʁa.vaj a dis.tɑ̃s vivʁ lwɛ̃ dy by.ʁo nɛ ply.zœ̃.nɔp.stakl/', 'ay-tahⁿ do-NAY kuh | boh-koo tra-VYE | a dees-TAHⁿS | veevr lwehⁿ dü bü-ROH | neh plü-zuhⁿ-nop-STAKL', ['tache', 'admise'], FCVR, SO),
  sent(1982, "Ce n'est pas que la ville ait perdu son charme, c'est qu'elle est devenue trop chère.", 'It is not that the city has lost its charm, it is that it has become too expensive.',
    '/sə nɛ pa kə la vil ɛ pɛʁ.dy sɔ̃ ʃaʁm sɛ kɛ.lɛ də.və.ny tʁo ʃɛʁ/', 'suh neh PA | kuh la VEEL eh pehr-DÜ sohⁿ SHARM | seh keh-leh duh-vuh-NÜ troh SHEHR', ['tache', 'rejetee'], FCVDR),
  sent(1983, 'Ce mouvement entraîne une hausse des prix dans les villages.', 'This trend is pushing up prices in the villages.',
    '/sə muv.mɑ̃ ɑ̃.tʁɛn yn os de pʁi dɑ̃ le vi.laʒ/', 'suh moov-MAHⁿ | ahⁿ-TREN ün OHS day PREE | dahⁿ lay vee-LAZH', ['tache', 'effet']),
  sent(1984, "Certains villages renaissent, d'où la réouverture d'écoles et de commerces.", 'Some villages are coming back to life, hence schools and shops reopening.',
    '/sɛʁ.tɛ̃ vi.laʒ ʁə.nɛs du la ʁe.u.vɛʁ.tyʁ de.kɔl e də kɔ.mɛʁs/', 'sehr-tehⁿ vee-LAZH ruh-NESS | DOO | la ray-oo-vehr-TÜR | day-KOL ay duh ko-MEHRS', ['tache', 'consequence'], FCVDR),
  sent(1985, 'Faute de transports en commun, les nouveaux habitants dépendent de la voiture.', 'For lack of public transport, the newcomers depend on the car.',
    '/fot də tʁɑ̃s.pɔʁ.zɑ̃ kɔ.mœ̃ le nu.vo.za.bi.tɑ̃ de.pɑ̃d də la vwa.tyʁ/', 'foht duh trahⁿs-por-zahⁿ ko-MUHⁿ | lay noo-voh-za-bee-TAHⁿ | day-PAHⁿD duh la vwa-TÜR', ['tache', 'nom']),
  sent(1986, 'Les prix ont tellement augmenté que certains habitants ne peuvent plus se loger.', 'Prices have gone up so much that some residents can no longer find housing.',
    '/le pʁi ɔ̃ tɛl.mɑ̃ o.ɡmɑ̃.te kə sɛʁ.tɛ̃.za.bi.tɑ̃ nə pœv ply sə lɔ.ʒe/', 'lay PREE | ohⁿ tel-mahⁿ og-mahⁿ-TAY | kuh sehr-tehⁿ-za-bee-TAHⁿ | nuh puhv plü suh lo-ZHAY', ['tache', 'intensite']),
  sent(1987, 'Ce phénomène suscite des tensions entre anciens et nouveaux habitants.', 'This phenomenon is creating tension between old and new residents.',
    '/sə fe.nɔ.mɛn sy.sit de tɑ̃.sjɔ̃ ɑ̃tʁ ɑ̃.sjɛ̃ e nu.vo.za.bi.tɑ̃/', 'suh fay-no-MENN sü-SEET | day tahⁿ-SYOHⁿ | ahⁿtr ahⁿ-SYEHⁿ | ay noo-voh-za-bee-TAHⁿ', ['tache', 'effet']),
  sent(1988, 'Il semble que le mouvement ralentisse depuis un an.', 'The trend seems to have been slowing down for a year.',
    '/il sɑ̃bl kə lə muv.mɑ̃ ʁa.lɑ̃.tis də.pɥi.zœ̃.nɑ̃/', 'eel SAHⁿBL kuh | luh moov-MAHⁿ | ra-lahⁿ-TEESS | duh-pwee-zuhⁿ-NAHⁿ', ['tache', 'certitude']),
  sent(1989, 'Ce phénomène a des causes multiples et des conséquences contrastées.', 'This phenomenon has many causes and mixed consequences.',
    '/sə fe.nɔ.mɛn a de koz myl.tipl e de kɔ̃.se.kɑ̃s kɔ̃.tʁas.te/', 'suh fay-no-MENN | a day KOHZ mül-TEEPL | ay day kohⁿ-say-KAHⁿS kohⁿ-tras-TAY', ['tache', 'plan']),
  sent(1990, 'Reste à savoir si ce mouvement durera.', 'It remains to be seen whether this trend will last.',
    '/ʁɛst a sa.vwaʁ si sə muv.mɑ̃ dy.ʁə.ʁa/', 'rest a sa-VWAR | see suh moov-MAHⁿ dü-ruh-RA', ['tache', 'conclusion']),
  sent(1991, 'Ces départs profitent aux villages, mais ils posent aussi de nouveaux problèmes.', 'These departures benefit the villages, but they also raise new problems.',
    '/se de.paʁ pʁɔ.fit o vi.laʒ mɛ il poz o.si də nu.vo pʁɔ.blɛm/', 'say day-PAR pro-FEET | oh vee-LAZH | meh eel POHZ oh-SEE | duh noo-voh pro-BLEM', ['tache', 'nuance']),
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
 *  The long readings (B2: 200 to 350 words) and the nine short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 11. Every case
 *  is invented. They live here so the reading, the quiz and the task cannot
 *  drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a local news analysis, Namur (an invented case). */
export const LECTURE_MEDIATHEQUE =
  "Pourquoi la médiathèque des Tilleuls ne désemplit plus. Il y a trois ans, cette médiathèque de Namur fermait à dix-huit heures et attirait surtout des retraités. Aujourd'hui, on y fait la queue le samedi matin. Comment expliquer ce retournement ? D'abord, étant donné que l'entrée est gratuite et que le wifi est rapide, beaucoup d'étudiants viennent y travailler. La médiathèque attire aussi les familles, d'autant plus que les ateliers du samedi sont désormais ouverts aux enfants. Ce succès s'explique également par l'ouverture le dimanche, une première dans la région. Selon la mairie, la hausse de la fréquentation serait due au nouvel horaire. La directrice, elle, avance une autre raison : « Ce n'est pas que les gens lisent davantage, c'est qu'ils cherchent un endroit calme et chauffé. » Certains habitués viennent même sous prétexte de lire le journal, et passent surtout la matinée à discuter. Cette affluence a pourtant des conséquences. Faute de place, des lecteurs s'installent dans l'escalier. Le bruit a tellement augmenté que la direction a créé une salle de silence. La cohabitation a aussi provoqué des tensions entre étudiants et familles, d'où la nouvelle charte affichée à l'entrée. À force de réclamer plus d'espace, les usagers ont obtenu une extension, si bien que les travaux commenceront au printemps. Le lieu a sans doute trouvé son public ; reste à savoir s'il pourra l'accueillir.";

/** Act 6: an incident report, Trois-Rivières (an invented case). */
export const LECTURE_RAPPORT =
  "Rapport d'incident. Résidence Les Érables, Trois-Rivières. Objet : la coupure de chauffage du 14 février. Le 14 février vers six heures, le chauffage s'est arrêté dans les trois bâtiments de la résidence. La température est descendue à quinze degrés dans les appartements avant la remise en marche, vers quatorze heures. La panne était due à une pompe hors d'usage. Selon le technicien, cette usure s'explique par l'âge de l'installation, qui n'avait pas été révisée depuis sept ans. Le bruit signalé par plusieurs locataires la semaine précédente provenait déjà de cette pompe. Le retard de la réparation, lui, tient à deux causes : la pièce de rechange n'était pas en stock, et le technicien de garde était seul pour tout le secteur. Pendant la matinée, plusieurs familles avec de jeunes enfants se sont réfugiées dans la salle commune, que la gérance a chauffée avec des radiateurs d'appoint. Par précaution, deux locataires âgés ont passé la nuit chez des proches. Plusieurs locataires ont contesté la facture d'intervention. Leur colère vient surtout d'un manque d'information : aucun message n'a été envoyé avant midi. Pour éviter un nouvel incident, la gérance prévoit de remplacer les deux pompes restantes au printemps et d'envoyer désormais un message aux locataires dans l'heure qui suit toute panne. Rédigé par la gérance de la résidence.";

/** Act 12: the model the learner imitates, a magazine analysis (invented). */
export const LECTURE_MODELE =
  "Pourquoi tant de jeunes citadins renoncent-ils à la voiture ? Un texte d'exemple, sans chiffres. Dans les grandes villes, beaucoup de jeunes adultes ne passent plus leur permis, ou le passent tard. Ce choix a plusieurs causes, qu'il faut distinguer. La première tient au coût. Étant donné que le prix des leçons, de l'assurance et du stationnement ne cesse d'augmenter, la voiture devient un luxe pour un budget d'étudiant. La deuxième raison est pratique : dans un centre bien desservi, le métro, le vélo et le partage de véhicules suffisent, d'autant plus que les embouteillages rendent la voiture lente. Beaucoup n'ont d'ailleurs jamais pris l'habitude de conduire, faute d'en avoir eu besoin. Certains invoquent aussi l'écologie. Ce n'est pas que tous soient militants, c'est que la pollution est devenue un sujet quotidien. Les conséquences sont nombreuses. Faute de clients, des auto-écoles de quartier ferment. Les villes, elles, transforment des places de stationnement en terrasses, d'où une nouvelle vie dans certaines rues. À force de voir les trottoirs s'élargir, certains parents renoncent même à acheter une deuxième voiture. Le phénomène a toutefois ses limites. Il semble que beaucoup de jeunes reviennent à la voiture à l'arrivée d'un enfant ou d'un emploi en banlieue, si bien que le renoncement serait plutôt un report. On peut sans doute parler d'un changement de génération ; reste à savoir s'il durera quand ces jeunes vieilliront.";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "Le message de la directrice aux parents. Complète chaque blanc avec dans la mesure où ou d'autant plus. « Chers parents, le conseil d'école s'est réuni hier soir. La sortie de fin d'année à Québec est annulée. (1) … le budget des activités a baissé de moitié, le voyage coûterait trop cher aux familles. La décision déçoit les élèves, (2) … qu'ils avaient vendu des gâteaux tout l'hiver pour le financer. Elle est (3) … difficile à accepter que l'école voisine, elle, part en voyage. Nous prévoyons une sortie plus courte au printemps, (4) … les finances le permettront. »";

export const TEXTE_A4 =
  "La lettre de l'association des locataires. Lis-la, puis dis quelle cause l'association croit, laquelle elle met en doute, et laquelle elle écarte. « Madame la gérante, le propriétaire refuse de réparer l'ascenseur sous prétexte que les pièces sont introuvables. Ce n'est pas que nous soyons impatients : l'ascenseur est en panne depuis trois mois. M. Diallo, qui a quatre-vingts ans, ne sort plus, non qu'il soit malade, mais il ne peut pas monter quatre étages. Le propriétaire a aussi augmenté les charges, sous prétexte de travaux que personne n'a vus. Nous demandons une réponse avant la fin du mois. »";

export const TEXTE_A5 =
  "La brève du jardin partagé. Complète chaque blanc avec grâce à, faute de, à force de, par ou sous l'effet de. « Le jardin partagé du quartier existe depuis cinq ans. Cet été, (1) … la chaleur, la terre du jardin partagé s'est fendue. (2) … bénévoles, personne n'a pu arroser en juillet. Mais (3) … l'aide des voisins, une partie des tomates a été sauvée. (4) … réclamer un point d'eau, l'association a obtenu une citerne de la commune. Certains voisins sont venus arroser (5) … solidarité, d'autres (6) … simple curiosité. »";

export const TEXTE_A6 =
  "Le compte rendu du syndic. Réécris chaque phrase avec un verbe de cause (être dû à, s'expliquer par, provenir de, tenir à) à la place de parce que. « Assemblée des copropriétaires du 3 mars. La coupure d'eau de mardi a eu lieu parce qu'une canalisation avait gelé. Il y a une odeur dans le hall parce que le local à poubelles n'est plus aéré. Si les réparations prennent du temps, c'est parce qu'il manque un technicien. Enfin, les plaintes des copropriétaires sont nombreuses parce que l'information circule mal. Le syndic remercie les copropriétaires de leur patience. »";

export const TEXTE_A7 =
  "Le compte rendu de Julien. Il contient quatre fois donc : réécris-le sans répéter ce mot, avec d'où, par conséquent, c'est pourquoi, de ce fait ou aussi. « Réunion de lundi, tous les services présents. Le fournisseur a livré en retard, donc la production s'est arrêtée deux jours. La production s'est arrêtée, donc les commandes ont pris du retard. Les clients ont protesté, donc nous avons offert une remise. Cette remise coûte cher, donc le budget du trimestre sera revu. La prochaine réunion aura lieu dans quinze jours. »";

export const TEXTE_A8 =
  "La note aux bénévoles du festival. Pour chaque verbe entre parenthèses, dis si la phrase annonce un résultat ou un but, puis mets-le au bon mode. « L'an dernier, nous avons ouvert les portes à dix-huit heures, de sorte que la file (bloquer) la rue pendant une heure. Cette année, ouvrez à dix-sept heures, de sorte que le public (pouvoir) entrer sans attendre. Placez un bénévole à chaque entrée, de sorte que personne ne (se perdre). L'an dernier, les panneaux étaient trop petits, si bien que beaucoup de gens (ne pas trouver) les toilettes. »";

export const TEXTE_A9 =
  "Le bilan de la fête de quartier. Relie chaque paire de phrases par une tournure d'intensité : tellement… que, tant de… que, au point que, trop… pour que. « Samedi, la fête de la rue des Lilas a dépassé toutes nos attentes. (1) Beaucoup de monde est venu des rues voisines. Les rues étaient bloquées jusqu'à minuit. (2) La musique était très forte. Les voisins ont appelé la mairie. (3) La fatigue est montée très haut. Deux bénévoles ont quitté leur poste avant la fin. (4) Les bénévoles étaient peu nombreux. On ne pouvait pas tout nettoyer le soir même. »";

export const TEXTE_A10 =
  "La brève du journal du quartier. Complète avec provoquer, entraîner, causer, susciter ou aboutir à, au temps qui convient. « La fermeture de la ligne de bus 12 (1) … la colère des habitants. Elle (2) … des retards quotidiens pour des centaines d'élèves. Les pluies de la semaine dernière (3) … des dégâts sur la route, ce qui explique les travaux. La réunion de lundi avec la société de transport (4) … un compromis : un bus de remplacement. Cette solution (5) … déjà de nombreuses critiques. »";

export const TEXTE_A11 =
  "La brève à corriger. Rien n'est encore confirmé : réécris-la sans rien affirmer, avec le conditionnel, sans doute, il semble que ou selon. « Un incendie a détruit un entrepôt cette nuit, dans la zone industrielle. Le feu est dû à un court-circuit dans le local électrique. Le gardien a donné l'alerte vers deux heures. Personne n'a été blessé. Les dégâts s'élèvent à plusieurs millions d'euros. L'entrepôt appartient à une entreprise de transport. Une enquête a été ouverte ce matin. Le propriétaire a l'intention de reconstruire le bâtiment. »";
