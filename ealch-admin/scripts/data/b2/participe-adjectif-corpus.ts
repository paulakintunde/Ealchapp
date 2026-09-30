// b2.13.l1 « Participe présent ou adjectif verbal »: the authored corpus, the
// imports and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar
// shape, as b2.12 gérondif and b2.07 futur antérieur), under the B2 rules of
// B2-BUILD-LOG.md (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 13 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE -ANT FORM WITHOUT EN, IN ITS TWO JOBS, ALWAYS SIDE BY SIDE.
//
//     le participe      the present participle without en: invariable, it
//                       replaces qui + verbe (les étudiants ayant réussi
//                       l'examen = qui ont réussi), keeps its object, its
//                       adverb and its negation (n'ayant pas reçu)
//     le registre       the participle is the form of notices, forms, job
//                       adverts and the press; speech says qui + verbe (lesson
//                       18 in B1's « sur l'affiche / dans ta bouche », quoted)
//     la cause          the participle at the head of a sentence, usually a
//                       cause: « Ne sachant que faire, il a appelé sa sœur »
//                       = comme il ne savait pas (lesson 31 in B1)
//     ayant fini        the participe composé: ayant / étant + participe
//                       passé, the same auxiliary as the passé composé, the
//                       être agreement (étant arrivée); après avoir as the
//                       everyday alternative
//     l'adjectif        the verbal adjective: a quality, it agrees (des
//                       histoires passionnantes, une soirée fatigante), takes
//                       très, follows être, sometimes goes before the noun
//     les tests         très ? qui + verbe ? an object, an adverb after it, a
//                       negation ? then a participle
//     les paires        the spellings that split: fatiguant / fatigant,
//                       convainquant / convaincant, provoquant / provocant,
//                       suffoquant / suffocant, communiquant / communicant;
//                       précédant / précédent, différant / différent,
//                       négligeant / négligent, excellant / excellent,
//                       influant / influent, équivalant / équivalent,
//                       adhérant / adhérent; and the nouns among them (un
//                       adhérent, un fabricant, un président, un précédent)
//     le sujet          the contrast with the gérondif of lesson 12 in B2 (en
//                       sortant = the subject of the verb; sortant du métro
//                       attaches to the noun it touches); the dangling
//                       participle and its repairs; the absolute participle
//                       with its own subject (le musée étant fermé)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 12 in B2   the -ant form itself (nous stem, ayant, étant,
//                       sachant) and the subject rule of the gérondif
//                       (reframe quoted; rows .1745 .1746 .1652 of its
//                       corpus reused BY ID, so this lesson imports with it)
//     lesson 11 in B1   qui + verbe (reframe quoted, row .1109 reused)
//     lesson 18 in B1   the passive on the notice, on in the mouth (reframe
//                       quoted: the same split of register)
//     lesson 25 in B1   the three registers (reframe quoted)
//     lesson 31 in B1   comme, parce que (reframe quoted)
//     lesson 10 in B2   nominalisation, the other tool of the compact
//                       written style (reframe quoted, recycling round)
//     lessons 22, 23, 24 in B2, 35 in B1   their -ant rows, reused
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked (seedPlusPacks), DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `langue-soignee` (fondations, a2-b2). Sub-theme for this lesson,
//     « le participe présent et l'adjectif verbal », already set in Postgres
//     (brief). The seed plus packs (read 2026-09-30, 20,683 items) hold b1
//     rows 1000-1392 here (lessons 21 and 25 in B1) and no b2 row; lesson 10
//     in B2 (draft) owns .1400-.1599. Nothing at or above .1600 at any level.
//
//  2. ID BLOCK: `.1600`-`.1799`, assigned by the brief. Authored: `.1600`-
//     `.1786` with gaps between act blocks (see the act banners). Nothing
//     outside the block.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored: every row is a sentence, a
//     gapfill card or a rule card, so the flashcard hub's headword rule
//     (theme + headword) cannot clash with any published row. The seed's own
//     -ant words (« fatigant », « passionnant », « décevant », « convaincant »,
//     « fabricant », « précédent ») are REUSED BY ID where they sit in a
//     sentence (§F); no exact French twin of a seed row, or of a row of lessons
//     9 to 12 in B2, is authored (probed 2026-09-30).
//
//  4. REUSED ROWS FROM A DRAFT. Three rows of lesson 12 in B2 (gérondif,
//     `fr.b2.connecteurs-logiques.1745`, `.1746`, `.1652`) are reused by id
//     for the gérondif contrast of acts 4 and 10. They are not in the seed
//     yet, so the lesson resolves them from `gerondif-corpus.ts`: this lesson
//     must import with lesson 12 in B2 or after it.
//
//  5. RESPELLINGS. House style. The -ant ending is AHⁿ everywhere; the
//     spelling pairs sound the same (fatiguant and fatigant are both
//     fa-tee-GAHⁿ): that is the point of act 8. Spelled for the nasal checker
//     rather than the ear: « Lausanne » loh-ZANN, « personne » pehr-SONN,
//     « panne » PANN, « semaine » suh-MENN, « scène » SENN, « centaine »
//     sahⁿ-TENN. No U+203F anywhere.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL SENTENCE IS EVER A ROW. The agreed participles
//     (« parlants »), the swapped spellings (« une journée fatiguante ») and
//     the dangling participles (« Habitant loin, le bus est pratique ») live
//     only in the scene's choice, commonErrors.wrong, trapDrill.promptSound,
//     the « dans un texte » exercises and quiz errorSpot prompts.
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
  id: 'b2.13',
  seq: 13,
  title: 'Present Participle or Verbal Adjective',
  sub: 'Participe présent ou adjectif verbal',
  canDo: 'Can use the present participle without en in place of a relative clause and at the head of a sentence to give a cause, including the perfect form with ayant and étant, in the written register of notices, adverts and the press; can use the verbal adjective to describe and judge, with agreement; can tell the two apart with the très, qui and complement tests, spell the pairs that differ (fatigant, convaincant, précédent, excellent…) and recognise the nouns among them; and can attach every participle to the right noun, unlike the gérondif',
  prereqUnitIds: ['b1.11', 'b1.18', 'b1.25', 'b1.31', 'b2.12'],
} as const;

export const LESSON_ID = 'b2.13.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/** A row of lesson 12 in B2 (gérondif), reused by id. */
export const G = (n: number) => `fr.b2.connecteurs-logiques.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order.
 * ══════════════════════════════════════════════════════════════════════════ */

export const QUI_QUE_UNIT = 'b1.11';
export const PASSIF_UNIT = 'b1.18';
export const REGISTRES_UNIT = 'b1.25';
export const SUBORD_UNIT = 'b1.31';
export const EMOTIONS_UNIT = 'b1.35';
export const NOMINAL_UNIT = 'b2.10';
export const GERONDIF_UNIT = 'b2.12';
export const STYLE_UNIT = 'b2.22';
export const ARGU_UNIT = 'b2.23';
export const LECTURE_UNIT = 'b2.24';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const QUI_QUE_REF = refFr(QUI_QUE_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const EMOTIONS_REF = refFr(EMOTIONS_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
export const STYLE_REF = refFr(STYLE_UNIT);
export const ARGU_REF = refFr(ARGU_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B111_REFRAME, REFRAME_EN as B111_REFRAME_EN } from '../b1/qui-que-corpus.ts';
export { REFRAME as B118_REFRAME, REFRAME_EN as B118_REFRAME_EN } from '../b1/voix-passive-corpus.ts';
export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B131_REFRAME, REFRAME_EN as B131_REFRAME_EN } from '../b1/subordination-corpus.ts';
export { REFRAME as B210_REFRAME, REFRAME_EN as B210_REFRAME_EN } from './nominalisation-corpus.ts';
export { REFRAME as B212_REFRAME, REFRAME_EN as B212_REFRAME_EN } from './gerondif-corpus.ts';
export { ALL_ROWS as GERONDIF_ROWS } from './gerondif-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE VERBE OU LA QUALITÉ. One -ant form, two jobs. When it still works as
 *  a verb (it has an object, an adverb after it, a negation, it can be
 *  replaced by qui + verbe, it gives a cause or an earlier action), it is
 *  the participle: invariable, and spelled like the verb (fatiguant,
 *  précédant). When it only names a quality of the noun (très fatigante,
 *  une semaine précédente), it is the verbal adjective: it agrees, and a
 *  dozen of them change their spelling. The same metaphor explains the
 *  nouns (a quality that became a person: un adhérent, un président) and
 *  the subject rule (a verb needs a doer: the participle takes the noun it
 *  touches).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le participe présent reste un verbe et ne s'accorde pas ; l'adjectif verbal dit une qualité et s'accorde.";
export const REFRAME_EN = 'The present participle stays a verb and does not agree; the verbal adjective names a quality and agrees.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Sans en, une forme en -ant est un adjectif.',
    why: 'False for acts 2 to 5 and 10: « les étudiants ayant réussi l’examen », « Ne sachant que faire, il… » have no en and are participles. It is the error of « des candidats parlants anglais ».',
  },
  {
    text: 'Le participe présent, c’est qui + verbe.',
    why: 'True in acts 2 and 3 only. « Ne sachant que faire, il a appelé sa sœur » is a cause (comme), and « ayant fini » an earlier action: no qui fits. It also says nothing about the adjective.',
  },
  {
    text: 'Un complément derrière : participe. Rien derrière : adjectif.',
    why: 'One test of three (act 7). « Une femme charmante avec tout le monde » has a complement and is an adjective; « Ne voulant pas déranger, nous… » has a negation and no object. The reframe names what the tests test.',
  },
  {
    text: 'Participe en -ant, adjectif en -ent.',
    why: 'Only for a dozen pairs (acts 8 and 9). Passionnant, fatigant and convaincant are adjectives ending in -ant; the rule would make learners write « passionnent ».',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.description-personnes-objets.1078', // Travailler de nuit, c'est fatigant.  (adjective, lesson 22 in B1)
    'fr.b2.entraide.003',                      // Cette plateforme met en relation des bénévoles et des personnes ayant besoin d'un soutien ponctuel.  (sentence, dictation: named only)
  ],
  act2: [
    'fr.b1.pronoms-essentiels.1109',           // Le livre que je lis est passionnant.  (lesson 11 in B1)
    'fr.b2.universite.1070',                   // Les étudiants qui travaillent beaucoup semblent réussir moins bien.  (lesson 22 in B2)
  ],
  act3: [] as string[],
  act4: [
    'fr.b1.connecteurs-logiques.1240',         // Étant donné que les prix augmentent, nous changeons de fournisseur.  (a fixed locution, lesson 31 in B1)
    G(1652),                                   // En ne sachant pas quoi répondre, elle a souri.  (lesson 12 in B2, draft)
  ],
  act5: [] as string[],
  act6: [
    'fr.sons.nasales.052',                     // Mon grand-père raconte des histoires passionnantes pendant le souper.  (sentence, review: named only)
    'fr.b1.emotions.1039',                     // Ce film était vraiment décevant.  (lesson 35 in B1)
    'fr.b1.strategies-de-comprehension.1101',  // Le trajet me prend deux heures par jour : c'est épuisant.
  ],
  act7: [
    'fr.b1.recits-au-passe.1314',              // J'avais un peu peur, parce que le client était exigeant.
  ],
  act8: [
    'fr.b2.opinions-et-avis.1615',             // Plus fort, ce n'est pas plus convaincant.  (lesson 23 in B2)
  ],
  act9: [
    'fr.b1.maison.076',                        // Le locataire précédent a laissé la maison très sale.  (flashcard, no voiceflash)
    'fr.b2.strategies-de-comprehension.1402',  // L’étude a été financée par un fabricant de capsules de repos.  (lesson 24 in B2)
  ],
  act10: [
    G(1745),                                   // J'ai croisé Paul en sortant du métro.  (lesson 12 in B2, draft)
    G(1746),                                   // J'ai croisé Paul qui sortait du métro.  (lesson 12 in B2, draft)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b2.entraide.003',                        // sentence, dictation
  'fr.sons.nasales.052',                       // sentence, review
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  'fr.b1.maison.076',                          // sentence, flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence (register courant); `ecrit` a sentence in the written
 *  register of notices, adverts and the press (register soutenu); `gap` a
 *  gapfill card whose front gaps the -ant form and names the verb and the
 *  cue; `rule` a grammar card. Every row carries fr, en, ipa and respell.
 *  Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';
const GP = ['participe-adjectif'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const ecrit = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { register: S });

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · « PARLANT », SANS S (.1600-.1613) ────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  ecrit(1600, 'Nous recherchons deux assistantes parlant anglais et espagnol.', 'We are looking for two assistants who speak English and Spanish.',
    '/nu ʁə.ʃɛʁ.ʃɔ̃ dø.za.sis.tɑ̃t paʁ.lɑ̃ ɑ̃.ɡlɛ e ɛs.pa.ɲɔl/', 'noo ruh-shehr-SHOHⁿ | deu-za-sees-TAHⁿT | par-LAHⁿ ahⁿ-GLEH ay es-pa-NYOL', ['scene', 'participe', 'annonce'], FCVDR),
  sent(1601, "C'est un poste exigeant, avec beaucoup de déplacements.", 'It is a demanding job, with a lot of travel.',
    '/sɛ.tœ̃ pɔst ɛɡ.zi.ʒɑ̃ a.vɛk bo.ku də de.plas.mɑ̃/', 'seh-tuhⁿ POST eg-zee-ZHAHⁿ | a-vek boh-KOO duh day-plass-MAHⁿ', ['adjectif', 'annonce']),
  ecrit(1602, 'Nous proposons un poste exigeant de la rigueur et de la patience.', 'We are offering a job that calls for rigour and patience.',
    '/nu pʁɔ.pɔ.zɔ̃ œ̃ pɔst ɛɡ.zi.ʒɑ̃ də la ʁi.ɡœʁ e də la pa.sjɑ̃s/', 'noo pro-po-ZOHⁿ uhⁿ POST | eg-zee-zhahⁿ duh la ree-GUHR | ay duh la pa-SYAHⁿS', ['participe', 'complement', 'annonce']),
  ecrit(1603, "Les candidats ayant une expérience à l'étranger seront prioritaires.", 'Candidates with experience abroad will be given priority.',
    '/le kɑ̃.di.da ɛ.jɑ̃ y.nɛk.spe.ʁjɑ̃s a le.tʁɑ̃.ʒe sə.ʁɔ̃ pʁi.jɔ.ʁi.tɛʁ/', 'lay kahⁿ-dee-DA | eh-yahⁿ ü-nek-spay-RYAHⁿS | a lay-trahⁿ-ZHAY | suh-rohⁿ pree-yo-ree-TEHR', ['participe', 'annonce']),
  sent(1604, "Les candidats qui ont une expérience à l'étranger seront prioritaires.", 'Candidates who have experience abroad will be given priority.',
    '/le kɑ̃.di.da ki ɔ̃ y.nɛk.spe.ʁjɑ̃s a le.tʁɑ̃.ʒe sə.ʁɔ̃ pʁi.jɔ.ʁi.tɛʁ/', 'lay kahⁿ-dee-DA | kee ohⁿ ü-nek-spay-RYAHⁿS | a lay-trahⁿ-ZHAY | suh-rohⁿ pree-yo-ree-TEHR', ['relative', 'paire']),
  sent(1605, "L'équipe est jeune, souriante et accueillante.", 'The team is young, cheerful and welcoming.',
    '/le.kip ɛ ʒœn su.ʁjɑ̃t e a.kœ.jɑ̃t/', 'lay-KEEP eh ZHUHN | soo-RYAHⁿT | ay a-kuh-YAHⁿT', ['adjectif', 'accord'], FCVDR),
  ecrit(1606, 'Les personnes souhaitant postuler enverront leur dossier avant la fin du mois.', 'Anyone wishing to apply should send their file before the end of the month.',
    '/le pɛʁ.sɔn swɛ.tɑ̃ pɔs.ty.le ɑ̃.vɛ.ʁɔ̃ lœʁ dɔ.sje a.vɑ̃ la fɛ̃ dy mwa/', 'lay pehr-SONN | sweh-tahⁿ pos-tü-LAY | ahⁿ-veh-ROHⁿ luhr do-SYAY | a-vahⁿ la FEHⁿ dü MWA', ['participe', 'annonce']),
  sent(1607, 'Le premier jour a été passionnant, mais fatigant.', 'The first day was fascinating, but tiring.',
    '/lə pʁə.mje ʒuʁ a e.te pa.sjɔ.nɑ̃ mɛ fa.ti.ɡɑ̃/', 'luh pruh-myay ZHOOR a ay-TAY pa-syo-NAHⁿ | meh fa-tee-GAHⁿ', ['adjectif', 'paire']),
  rule(1608, REFRAME, REFRAME_EN,
    '/lə paʁ.ti.sip pʁe.zɑ̃ ʁɛst œ̃ vɛʁb e nə sa.kɔʁd pa lad.ʒɛk.tif vɛʁ.bal di y.nə ka.li.te e sa.kɔʁd/',
    'luh par-tee-seep pray-ZAHⁿ | rest uhⁿ VEHRB | ay nuh sa-KORD PA | lad-zhek-teef vehr-BAL | dee ü-nuh ka-lee-TAY | ay sa-KORD',
    'Parlant ou parlants, dans « deux assistantes parlant anglais » ?',
    "Parlant, sans accord : il a un complément (anglais), c'est un verbe. Une équipe souriante, elle, s'accorde : c'est une qualité.",
    ['reframe']),
  ecrit(1609, 'Les employés travaillant de nuit ont droit à une prime.', 'Employees who work nights are entitled to a bonus.',
    '/le.zɑ̃.plwa.je tʁa.va.jɑ̃ də nɥi ɔ̃ dʁwa a y.nə pʁim/', 'lay-zahⁿ-plwa-YAY | tra-va-yahⁿ duh NWEE | ohⁿ DRWA a ü-nuh PREEM', ['participe']),
  sent(1610, 'Les horaires sont variables et parfois fatigants.', 'The hours are variable and sometimes tiring.',
    '/le.zɔ.ʁɛʁ sɔ̃ va.ʁjabl e paʁ.fwa fa.ti.ɡɑ̃/', 'lay-zo-REHR sohⁿ va-RYABL | ay par-fwa fa-tee-GAHⁿ', ['adjectif', 'accord']),
  sent(1611, "Ne parlant pas espagnol, je n'ai pas postulé.", 'As I do not speak Spanish, I did not apply.',
    '/nə paʁ.lɑ̃ pa.zɛs.pa.ɲɔl ʒə ne pa pɔs.ty.le/', 'nuh par-lahⁿ pa-zes-pa-NYOL | zhuh nay pa pos-tü-LAY', ['participe', 'cause', 'negation']),
  sent(1612, 'Une annonce convaincante attire les bons candidats.', 'A convincing advert attracts the right candidates.',
    '/y.na.nɔ̃s kɔ̃.vɛ̃.kɑ̃t a.tiʁ le bɔ̃ kɑ̃.di.da/', 'ü-na-NOHⁿS kohⁿ-vehⁿ-KAHⁿT | a-teer lay bohⁿ kahⁿ-dee-DA', ['adjectif', 'paires']),
  ecrit(1613, 'Nous accueillons des stagiaires venant du monde entier.', 'We welcome interns from all over the world.',
    '/nu.za.kœ.jɔ̃ de sta.ʒjɛʁ və.nɑ̃ dy mɔ̃.dɑ̃.tje/', 'noo-za-kuh-YOHⁿ day sta-ZHYEHR | vuh-nahⁿ dü mohⁿ-dahⁿ-TYAY', ['participe', 'annonce']),
];

/* ── ACT 2 · QUI + VERBE, SANS ACCORD (.1616-.1633) ───────────────────────── */

export const ACT2_ROWS: Row[] = [
  ecrit(1616, "Les étudiants ayant réussi l'examen recevront leur diplôme en juin.", 'Students who have passed the exam will receive their diploma in June.',
    '/le.ze.ty.djɑ̃ ɛ.jɑ̃ ʁe.y.si lɛɡ.za.mɛ̃ ʁə.sə.vʁɔ̃ lœʁ di.plom ɑ̃ ʒɥɛ̃/', 'lay-zay-tü-DYAHⁿ | eh-yahⁿ ray-ü-SEE leg-za-MEHⁿ | ruh-suh-VROHⁿ luhr dee-PLOM | ahⁿ ZHWEHⁿ', ['participe', 'paire'], FCVDR),
  sent(1617, "Les étudiants qui ont réussi l'examen recevront leur diplôme en juin.", 'The students who passed the exam will get their diploma in June.',
    '/le.ze.ty.djɑ̃ ki ɔ̃ ʁe.y.si lɛɡ.za.mɛ̃ ʁə.sə.vʁɔ̃ lœʁ di.plom ɑ̃ ʒɥɛ̃/', 'lay-zay-tü-DYAHⁿ | kee ohⁿ ray-ü-SEE leg-za-MEHⁿ | ruh-suh-VROHⁿ luhr dee-PLOM | ahⁿ ZHWEHⁿ', ['relative', 'paire']),
  ecrit(1618, 'Je cherche une personne sachant conduire.', 'I am looking for someone who can drive.',
    '/ʒə ʃɛʁ.ʃy.nə pɛʁ.sɔn sa.ʃɑ̃ kɔ̃.dɥiʁ/', 'zhuh shehr-shü-nuh pehr-SONN | sa-shahⁿ kohⁿ-DWEER', ['participe', 'paire']),
  sent(1619, 'Je cherche une personne qui sait conduire.', 'I am looking for somebody who knows how to drive.',
    '/ʒə ʃɛʁ.ʃy.nə pɛʁ.sɔn ki sɛ kɔ̃.dɥiʁ/', 'zhuh shehr-shü-nuh pehr-SONN | kee seh kohⁿ-DWEER', ['relative', 'paire']),
  sent(1620, 'Elle a une fille vivant à Dakar.', 'She has a daughter who lives in Dakar.',
    '/ɛ.la y.nə fij vi.vɑ̃ a da.kaʁ/', 'eh-la ü-nuh FEEY | vee-vahⁿ a da-KAR', ['participe']),
  ecrit(1621, 'Les voyageurs possédant un billet électronique peuvent embarquer.', 'Passengers holding an e-ticket may board.',
    '/le vwa.ja.ʒœʁ pɔ.se.dɑ̃ œ̃ bi.jɛ e.lɛk.tʁɔ.nik pœv ɑ̃.baʁ.ke/', 'lay vwa-ya-ZHUHR | po-say-dahⁿ uhⁿ bee-YEH ay-lek-tro-NEEK | puhv ahⁿ-bar-KAY', ['participe']),
  sent(1622, "Les clientes attendant depuis une heure commencent à s'impatienter.",'The customers who have been waiting for an hour are getting impatient.',
    '/le kli.jɑ̃t a.tɑ̃.dɑ̃ də.pɥi y.nœʁ kɔ.mɑ̃s a sɛ̃.pa.sjɑ̃.te/', 'lay klee-YAHⁿT | a-tahⁿ-dahⁿ duh-pwee ü-NUHR | ko-MAHⁿS a sehⁿ-pa-syahⁿ-TAY', ['participe', 'invariable'], FCVDR),
  ecrit(1623, "J'ai reçu une lettre annonçant la fermeture de l'agence.", 'I received a letter announcing the closure of the branch.',
    '/ʒe ʁə.sy y.nə lɛtʁ a.nɔ̃.sɑ̃ la fɛʁ.mə.tyʁ də la.ʒɑ̃s/', 'zhay ruh-SÜ ü-nuh LETR | a-nohⁿ-sahⁿ la fehr-muh-TÜR duh la-ZHAHⁿS', ['participe']),
  sent(1624, 'Des bénévoles connaissant bien le quartier guideront les visiteurs.', 'Volunteers who know the area well will guide the visitors.',
    '/de be.ne.vɔl kɔ.nɛ.sɑ̃ bjɛ̃ lə kaʁ.tje ɡi.də.ʁɔ̃ le vi.zi.tœʁ/', 'day bay-nay-VOL | ko-neh-sahⁿ byehⁿ luh kar-TYAY | ghee-duh-ROHⁿ lay vee-zee-TUHR', ['participe', 'adverbe']),
  sent(1625, 'Nous cherchons un appartement donnant sur la cour.', 'We are looking for a flat overlooking the courtyard.',
    '/nu ʃɛʁ.ʃɔ̃ œ̃.na.paʁ.tə.mɑ̃ dɔ.nɑ̃ syʁ la kuʁ/', 'noo shehr-SHOHⁿ | uhⁿ-na-par-tuh-MAHⁿ | do-nahⁿ sür la KOOR', ['participe', 'paire'], FCVDR),
  sent(1626, 'Nous cherchons un appartement qui donne sur la cour.', 'We want a flat that looks onto the courtyard.',
    '/nu ʃɛʁ.ʃɔ̃ œ̃.na.paʁ.tə.mɑ̃ ki dɔn syʁ la kuʁ/', 'noo shehr-SHOHⁿ | uhⁿ-na-par-tuh-MAHⁿ | kee DONN sür la KOOR', ['relative', 'paire']),
  rule(1627, "Le participe présent remplace qui + verbe, et il ne s'accorde pas.", 'The present participle replaces qui + verb, and it does not agree.',
    '/lə paʁ.ti.sip pʁe.zɑ̃ ʁɑ̃.plas ki plys vɛʁb e il nə sa.kɔʁd pa/', 'luh par-tee-seep pray-ZAHⁿ | rahⁿ-PLASS kee plüs VEHRB | ay eel nuh sa-KORD PA',
    'Les étudiants ayant réussi : que remplace ayant réussi ?',
    "Qui ont réussi. Le participe garde son complément (l'examen) et ne prend ni e ni s, même après des étudiantes.",
    ['participe', 'relative']),
  rule(1628, "Le participe présent, c'est la forme du gérondif sans en.", 'The present participle is the gérondif form without en.',
    '/lə paʁ.ti.sip pʁe.zɑ̃ sɛ la fɔʁm dy ʒe.ʁɔ̃.dif sɑ̃.zɑ̃/', 'luh par-tee-seep pray-ZAHⁿ | seh la FORM dü zhay-rohⁿ-DEEF | sahⁿ-ZAHⁿ',
    'Comment forme-t-on le participe présent ?',
    "Comme dans la leçon 12 du B2 : le radical du nous et -ant (parlant, finissant), avec ayant, étant, sachant à part. Mais sans en devant.",
    ['forme']),
  gap(1629, 'Les enfants ayant moins de six ans entrent gratuitement.', 'Children under six get in free.',
    '/le.zɑ̃.fɑ̃ ɛ.jɑ̃ mwɛ̃ də si.zɑ̃ ɑ̃tʁ ɡʁa.tɥit.mɑ̃/', 'lay-zahⁿ-FAHⁿ | eh-yahⁿ mwehⁿ duh see-ZAHⁿ | AHⁿTR gra-tweet-MAHⁿ',
    'Les enfants ___ moins de six ans entrent gratuitement. (avoir · qui ont)',
    "Avoir donne ayant, sans accord : ayant moins de six ans. EN: ayant, never ayants.",
    ['participe'], FCVDR),
  gap(1630, 'Une dame portant un grand chapeau est entrée.', 'A lady wearing a big hat came in.',
    '/y.nə dam pɔʁ.tɑ̃ œ̃ ɡʁɑ̃ ʃa.po ɛ.tɑ̃.tʁe/', 'ü-nuh DAM | por-tahⁿ uhⁿ grahⁿ sha-POH | eh-tahⁿ-TRAY',
    'Une dame ___ un grand chapeau est entrée. (porter · qui portait)',
    "Portant, sans e : le participe ne s'accorde pas avec dame. EN: portant stays as it is.",
    ['participe', 'invariable']),
  ecrit(1631, 'Les employés partant à la retraite cette année seront fêtés en décembre.', 'Staff retiring this year will be celebrated in December.',
    '/le.zɑ̃.plwa.je paʁ.tɑ̃ a la ʁə.tʁɛt sɛ.ta.ne sə.ʁɔ̃ fɛ.te ɑ̃ de.sɑ̃bʁ/', 'lay-zahⁿ-plwa-YAY | par-tahⁿ a la ruh-TRET | seh-ta-NAY | suh-rohⁿ feh-TAY ahⁿ day-SAHⁿBR', ['participe']),
  ecrit(1632, "Les participantes n'ayant pas reçu de badge doivent passer à l'accueil.", 'Participants who have not received a badge must go to reception.',
    '/le paʁ.ti.si.pɑ̃t nɛ.jɑ̃ pa ʁə.sy də badʒ dwav pa.se a la.kœj/', 'lay par-tee-see-PAHⁿT | neh-yahⁿ pa ruh-SÜ duh BADZH | dwav pa-SAY a la-KUHY', ['participe', 'negation', 'invariable']),
  sent(1633, 'Il a trouvé un portefeuille contenant deux cents euros.', 'He found a wallet containing two hundred euros.',
    '/i.la tʁu.ve œ̃ pɔʁ.tə.fœj kɔ̃t.nɑ̃ dø sɑ̃.zø.ʁo/', 'ee-la troo-VAY | uhⁿ por-tuh-FUHY | kohⁿt-nahⁿ deu sahⁿ-zeu-ROH', ['participe'], FCVDR),
];

/* ── ACT 3 · L'AVIS, LE FORMULAIRE, LA DÉPÊCHE (.1636-.1649) ──────────────── */

export const ACT3_ROWS: Row[] = [
  ecrit(1636, 'Les voyageurs souhaitant descendre à Lausanne doivent changer de train.', 'Passengers wishing to get off at Lausanne must change trains.',
    '/le vwa.ja.ʒœʁ swɛ.tɑ̃ de.sɑ̃dʁ a lo.zan dwav ʃɑ̃.ʒe də tʁɛ̃/', 'lay vwa-ya-ZHUHR | sweh-tahⁿ day-SAHⁿDR a loh-ZANN | dwav shahⁿ-ZHAY duh TREHⁿ', ['registre', 'avis', 'paire'], FCVDR),
  sent(1637, 'Ceux qui veulent descendre à Lausanne doivent changer de train.', 'Anyone who wants to get off at Lausanne has to change trains.',
    '/sø ki vœl de.sɑ̃dʁ a lo.zan dwav ʃɑ̃.ʒe də tʁɛ̃/', 'suh kee VUHL | day-SAHⁿDR a loh-ZANN | dwav shahⁿ-ZHAY duh TREHⁿ', ['registre', 'oral', 'paire']),
  ecrit(1638, "Tout objet ne portant pas d'étiquette sera détruit.", 'Any item without a label will be destroyed.',
    '/tu.tɔb.ʒɛ nə pɔʁ.tɑ̃ pa de.ti.kɛt sə.ʁa de.tʁɥi/', 'too-tob-ZHEH | nuh por-tahⁿ pa day-tee-KET | suh-RA day-TRWEE', ['registre', 'avis', 'negation']),
  ecrit(1639, 'Le conducteur, roulant trop vite, a perdu le contrôle de sa voiture.', 'The driver, who was going too fast, lost control of his car.',
    '/lə kɔ̃.dyk.tœʁ ʁu.lɑ̃ tʁo vit a pɛʁ.dy lə kɔ̃.tʁol də sa vwa.tyʁ/', 'luh kohⁿ-dük-TUHR | roo-lahⁿ troh VEET | a pehr-DÜ luh kohⁿ-TROL | duh sa vwa-TÜR', ['registre', 'presse', 'adverbe'], FCVDR),
  ecrit(1640, 'Les résidents désirant un second bac doivent remplir ce formulaire.', 'Residents who would like a second bin must fill in this form.',
    '/le ʁe.zi.dɑ̃ de.zi.ʁɑ̃ œ̃ sə.ɡɔ̃ bak dwav ʁɑ̃.pliʁ sə fɔʁ.my.lɛʁ/', 'lay ray-zee-DAHⁿ | day-zee-rahⁿ uhⁿ suh-gohⁿ BAK | dwav rahⁿ-PLEER suh for-mü-LEHR', ['registre', 'formulaire']),
  ecrit(1641, 'Une manifestation réunissant trois mille personnes a eu lieu samedi.', 'A demonstration bringing together three thousand people took place on Saturday.',
    '/y.nə ma.ni.fɛs.ta.sjɔ̃ ʁe.y.ni.sɑ̃ tʁwa mil pɛʁ.sɔn a y ljø sam.di/', 'ü-nuh ma-nee-fes-ta-SYOHⁿ | ray-ü-nee-sahⁿ trwa meel pehr-SONN | a ü LYUH sam-DEE', ['registre', 'presse']),
  ecrit(1642, 'Tout dossier arrivant après la date limite sera refusé.', 'Any application arriving after the deadline will be rejected.',
    '/tu do.sje a.ʁi.vɑ̃ a.pʁɛ la dat li.mit sə.ʁa ʁə.fy.ze/', 'too do-SYAY | a-ree-vahⁿ a-preh la dat lee-MEET | suh-RA ruh-fü-ZAY', ['registre', 'avis', 'paire'], FCVDR),
  sent(1643, 'Les gens qui arrivent en retard ne pourront pas entrer.', 'People who arrive late will not be able to get in.',
    '/le ʒɑ̃ ki a.ʁiv ɑ̃ ʁə.taʁ nə pu.ʁɔ̃ pa.zɑ̃.tʁe/', 'lay ZHAHⁿ kee a-REEV ahⁿ ruh-TAR | nuh poo-rohⁿ pa-zahⁿ-TRAY', ['registre', 'oral', 'paire']),
  rule(1644, "À l'écrit, le participe ; à l'oral, qui + verbe.", 'In writing, the participle; in speech, qui + verb.',
    '/a le.kʁi lə paʁ.ti.sip a lɔ.ʁal ki plys vɛʁb/', 'a lay-KREE | luh par-tee-SEEP | a lo-RAL | kee plüs VEHRB',
    '« Les voyageurs souhaitant descendre » : comment le dit-on à l’oral ?',
    "Ceux qui veulent descendre. Le participe présent est la forme des avis, des formulaires et de la presse ; à l'oral, il sonne raide.",
    ['registre']),
  gap(1645, 'Les locataires possédant un animal doivent le déclarer.', 'Tenants who own a pet must declare it.',
    '/le lɔ.ka.tɛʁ pɔ.se.dɑ̃ œ̃.na.ni.mal dwav lə de.kla.ʁe/', 'lay lo-ka-TEHR | po-say-dahⁿ uhⁿ-na-nee-MAL | dwav luh day-kla-RAY',
    'Les locataires ___ un animal doivent le déclarer. (posséder · qui possèdent)',
    "Nous possédons, donc possédant, sans accord. C'est la phrase d'un règlement. EN: a rule in a lease.",
    ['registre', 'formulaire'], FCVDR),
  ecrit(1646, 'Un rapport publié hier, citant plusieurs experts, critique le projet.', 'A report published yesterday, quoting several experts, criticises the project.',
    '/œ̃ ʁa.pɔʁ py.bli.je jɛʁ si.tɑ̃ ply.zjœʁ.zɛk.spɛʁ kʁi.tik lə pʁɔ.ʒɛ/', 'uhⁿ ra-POR pü-blee-YAY YEHR | see-tahⁿ plü-zyuhr-zek-SPEHR | kree-TEEK luh pro-ZHEH', ['registre', 'presse']),
  ecrit(1647, "Hier, les pompiers ont secouru un randonneur souffrant d'une fracture.", 'Yesterday firefighters rescued a hiker suffering from a fracture.',
    '/jɛʁ le pɔ̃.pje ɔ̃ sə.ku.ʁy œ̃ ʁɑ̃.dɔ.nœʁ su.fʁɑ̃ dyn fʁak.tyʁ/', 'YEHR | lay pohⁿ-PYAY ohⁿ suh-koo-RÜ | uhⁿ rahⁿ-do-NUHR | soo-frahⁿ dün frak-TÜR', ['registre', 'presse']),
  ecrit(1648, 'Veuillez joindre un document attestant votre adresse.', 'Please attach a document proving your address.',
    '/vœ.je ʒwɛ̃dʁ œ̃ dɔ.ky.mɑ̃ a.tɛs.tɑ̃ vɔ.tʁa.dʁɛs/', 'vuh-YAY ZHWEHⁿDR | uhⁿ do-kü-MAHⁿ | a-tes-tahⁿ vo-tra-DRESS', ['registre', 'formulaire']),
  ecrit(1649, 'Les passagers voyageant avec un enfant peuvent embarquer en premier.', 'Passengers travelling with a child may board first.',
    '/le pa.sa.ʒe vwa.ja.ʒɑ̃ a.vɛ.kœ̃.nɑ̃.fɑ̃ pœv ɑ̃.baʁ.ke ɑ̃ pʁə.mje/', 'lay pa-sa-ZHAY | vwa-ya-zhahⁿ a-veh-kuhⁿ-nahⁿ-FAHⁿ | puhv ahⁿ-bar-KAY ahⁿ pruh-MYAY', ['registre', 'avis']),
];

/* ── ACT 4 · EN TÊTE : LA CAUSE (.1652-.1667) ────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1652, 'Ne sachant que faire, il a appelé sa sœur.', 'Not knowing what to do, he called his sister.',
    '/nə sa.ʃɑ̃ kə fɛʁ i.la a.pə.le sa sœʁ/', 'nuh sa-shahⁿ kuh FEHR | ee-la a-puh-LAY sa SUHR', ['cause', 'tete', 'paire'], FCVDR),
  sent(1653, 'Comme il ne savait pas quoi faire, il a appelé sa sœur.', 'As he did not know what to do, he called his sister.',
    '/kɔ.mil nə sa.vɛ pa kwa fɛʁ i.la a.pə.le sa sœʁ/', 'ko-meel nuh sa-veh pa kwa FEHR | ee-la a-puh-LAY sa SUHR', ['cause', 'clause', 'paire']),
  sent(1654, 'Étant malade, je ne pourrai pas venir demain.', 'Being ill, I will not be able to come tomorrow.',
    '/e.tɑ̃ ma.lad ʒə nə pu.ʁe pa və.niʁ də.mɛ̃/', 'ay-tahⁿ ma-LAD | zhuh nuh poo-RAY pa vuh-NEER duh-MEHⁿ', ['cause', 'tete']),
  sent(1655, 'Habitant loin du centre, elle prend sa voiture tous les jours.', 'Living far from the centre, she takes her car every day.',
    '/a.bi.tɑ̃ lwɛ̃ dy sɑ̃tʁ ɛl pʁɑ̃ sa vwa.tyʁ tu le ʒuʁ/', 'a-bee-tahⁿ lwehⁿ dü SAHⁿTR | el prahⁿ sa vwa-TÜR | too lay ZHOOR', ['cause', 'tete'], FCVDR),
  sent(1656, 'Ne voulant pas déranger, nous sommes partis sans bruit.', 'Not wanting to disturb anyone, we left quietly.',
    '/nə vu.lɑ̃ pa de.ʁɑ̃.ʒe nu sɔm paʁ.ti sɑ̃ bʁɥi/', 'nuh voo-lahⁿ pa day-rahⁿ-ZHAY | noo som par-TEE sahⁿ BRWEE', ['cause', 'tete', 'negation']),
  ecrit(1657, 'Craignant la pluie, les organisateurs ont déplacé le concert.', 'Fearing rain, the organisers moved the concert.',
    '/kʁɛ.ɲɑ̃ la plɥi le.zɔʁ.ɡa.ni.za.tœʁ ɔ̃ de.pla.se lə kɔ̃.sɛʁ/', 'kreh-nyahⁿ la PLWEE | lay-zor-ga-nee-za-TUHR | ohⁿ day-pla-SAY luh kohⁿ-SEHR', ['cause', 'tete', 'presse', 'paire'], FCVDR),
  sent(1658, "Parce qu'ils craignaient la pluie, les organisateurs ont déplacé le concert.", 'Because they were afraid of rain, the organisers moved the concert.',
    '/paʁs kil kʁɛ.ɲɛ la plɥi le.zɔʁ.ɡa.ni.za.tœʁ ɔ̃ de.pla.se lə kɔ̃.sɛʁ/', 'pars keel kreh-NYEH la PLWEE | lay-zor-ga-nee-za-TUHR | ohⁿ day-pla-SAY luh kohⁿ-SEHR', ['cause', 'clause', 'paire']),
  sent(1659, 'Connaissant bien la ville, Karim nous a servi de guide.', 'Knowing the city well, Karim acted as our guide.',
    '/kɔ.nɛ.sɑ̃ bjɛ̃ la vil ka.ʁim nu.za sɛʁ.vi də ɡid/', 'ko-neh-sahⁿ byehⁿ la VEEL | ka-REEM noo-za sehr-VEE duh GHEED', ['cause', 'tete']),
  sent(1660, "Voyant l'heure, j'ai pris un taxi.", 'Seeing the time, I took a taxi.',
    '/vwa.jɑ̃ lœʁ ʒe pʁi œ̃ tak.si/', 'vwa-yahⁿ LUHR | zhay pree uhⁿ tak-SEE', ['cause', 'tete']),
  rule(1661, 'En tête de phrase, le participe dit souvent la cause.', 'At the head of a sentence, the participle often gives the cause.',
    '/ɑ̃ tɛt də fʁaz lə paʁ.ti.sip di su.vɑ̃ la koz/', 'ahⁿ TET duh FRAZ | luh par-tee-SEEP | dee soo-vahⁿ la KOHZ',
    'Ne sachant que faire, il a appelé sa sœur : pourquoi a-t-il appelé ?',
    "Parce qu'il ne savait pas quoi faire. Le participe en tête vaut comme ou parce que, et il prend le sujet du verbe principal : il.",
    ['cause', 'sujet']),
  gap(1662, "Étant fatiguée, elle s'est couchée tôt.", 'Being tired, she went to bed early.',
    '/e.tɑ̃ fa.ti.ɡe ɛl sɛ ku.ʃe to/', 'ay-tahⁿ fa-tee-GAY | el seh koo-SHAY TOH',
    "___ fatiguée, elle s'est couchée tôt. (être · comme elle était)",
    "Être donne étant, qui reste invariable ; fatiguée, lui, s'accorde avec elle. EN: étant never changes.",
    ['cause', 'tete']),
  sent(1663, "Ne connaissant personne à Genève, il s'est inscrit à un club de randonnée.", 'Not knowing anyone in Geneva, he joined a hiking club.',
    '/nə kɔ.nɛ.sɑ̃ pɛʁ.sɔn a ʒə.nɛv il sɛ.tɛ̃s.kʁi a œ̃ klœb də ʁɑ̃.dɔ.ne/', 'nuh ko-neh-sahⁿ pehr-SONN a zhuh-NEV | eel seh-tehⁿs-KREE | a uhⁿ kluhb duh rahⁿ-do-NAY', ['cause', 'tete', 'negation'], FCVDR),
  sent(1664, "Sachant cela, j'ai changé mes plans.", 'Knowing that, I changed my plans.',
    '/sa.ʃɑ̃ sə.la ʒe ʃɑ̃.ʒe me plɑ̃/', 'sa-shahⁿ suh-LA | zhay shahⁿ-zhay may PLAHⁿ', ['cause', 'tete', 'gerondif']),
  sent(1665, 'Souffrant du dos, mon père a dû annuler son voyage.', 'Suffering from back pain, my father had to cancel his trip.',
    '/su.fʁɑ̃ dy do mɔ̃ pɛʁ a dy a.ny.le sɔ̃ vwa.jaʒ/', 'soo-frahⁿ dü DOH | mohⁿ PEHR a dü a-nü-LAY | sohⁿ vwa-YAZH', ['cause', 'tete']),
  ecrit(1666, "Manquant d'expérience, la jeune avocate a préféré se taire.", 'Lacking experience, the young lawyer preferred to keep quiet.',
    '/mɑ̃.kɑ̃ dɛk.spe.ʁjɑ̃s la ʒœ.na.vɔ.kat a pʁe.fe.ʁe sə tɛʁ/', 'mahⁿ-kahⁿ dek-spay-RYAHⁿS | la zhuh-na-vo-KAT | a pray-fay-RAY suh TEHR', ['cause', 'tete']),
  sent(1667, 'Ne trouvant pas ses clés, Julie a appelé un serrurier.', 'Unable to find her keys, Julie called a locksmith.',
    '/nə tʁu.vɑ̃ pa se kle ʒy.li a a.pə.le œ̃ se.ʁy.ʁje/', 'nuh troo-vahⁿ pa say KLAY | zhü-LEE a a-puh-LAY | uhⁿ say-rü-RYAY', ['cause', 'tete', 'negation']),
];

/* ── ACT 5 · AYANT FINI, ÉTANT ARRIVÉE (.1670-.1683) ─────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1670, 'Ayant fini son rapport, elle est partie en week-end.', 'Having finished her report, she went away for the weekend.',
    '/ɛ.jɑ̃ fi.ni sɔ̃ ʁa.pɔʁ ɛ.lɛ paʁ.ti ɑ̃ wi.kɛnd/', 'eh-yahⁿ fee-NEE sohⁿ ra-POR | eh-leh par-TEE ahⁿ wee-KEND', ['compose', 'avoir', 'paire'], FCVDR),
  sent(1671, 'Étant arrivée en retard, elle a manqué le début du film.', 'Having arrived late, she missed the start of the film.',
    '/e.tɑ̃.ta.ʁi.ve ɑ̃ ʁə.taʁ ɛ.la mɑ̃.ke lə de.by dy film/', 'ay-tahⁿ-ta-ree-VAY ahⁿ ruh-TAR | eh-la mahⁿ-KAY | luh day-BÜ dü FEELM', ['compose', 'etre', 'paire'], FCVDR),
  sent(1672, 'Comme elle était arrivée en retard, elle a manqué le début du film.', 'As she had arrived late, she missed the beginning of the film.',
    '/kɔ.mɛ.le.tɛ.ta.ʁi.ve ɑ̃ ʁə.taʁ ɛ.la mɑ̃.ke lə de.by dy film/', 'ko-meh-lay-teh-ta-ree-VAY ahⁿ ruh-TAR | eh-la mahⁿ-KAY | luh day-BÜ dü FEELM', ['compose', 'clause', 'paire']),
  sent(1673, "Ayant perdu mes clés, j'ai dormi chez une amie.", 'Having lost my keys, I slept at a friend’s place.',
    '/ɛ.jɑ̃ pɛʁ.dy me kle ʒe dɔʁ.mi ʃe.zy.na.mi/', 'eh-yahⁿ pehr-dü may KLAY | zhay dor-MEE | shay-zü-na-MEE', ['compose', 'avoir']),
  sent(1674, 'Étant partis tôt, nous avons évité les bouchons.', 'Having left early, we avoided the traffic.',
    '/e.tɑ̃ paʁ.ti to nu.za.vɔ̃.ze.vi.te le bu.ʃɔ̃/', 'ay-tahⁿ par-tee TOH | noo-za-vohⁿ-zay-vee-TAY | lay boo-SHOHⁿ', ['compose', 'etre', 'accord']),
  sent(1675, 'Après avoir fini son rapport, elle est partie en week-end.', 'After finishing her report, she went away for the weekend.',
    '/a.pʁɛ.za.vwaʁ fi.ni sɔ̃ ʁa.pɔʁ ɛ.lɛ paʁ.ti ɑ̃ wi.kɛnd/', 'a-preh-za-vwar fee-NEE sohⁿ ra-POR | eh-leh par-TEE ahⁿ wee-KEND', ['compose', 'oral', 'paire']),
  ecrit(1676, "Les candidats n'ayant pas été retenus recevront une réponse par courriel.", 'Candidates who have not been selected will receive an answer by email.',
    '/le kɑ̃.di.da nɛ.jɑ̃ pa.ze.te ʁə.tə.ny ʁə.sə.vʁɔ̃ y.nə ʁe.pɔ̃s paʁ ku.ʁjɛl/', 'lay kahⁿ-dee-DA | neh-yahⁿ pa-zay-TAY ruh-tuh-NÜ | ruh-suh-VROHⁿ ü-nuh ray-POHⁿS | par koo-RYEL', ['compose', 'negation', 'annonce']),
  sent(1677, "S'étant trompée de salle, l'étudiante est arrivée en retard.", 'Having gone to the wrong room, the student arrived late.',
    '/se.tɑ̃ tʁɔ̃.pe də sal le.ty.djɑ̃t ɛ.ta.ʁi.ve ɑ̃ ʁə.taʁ/', 'say-tahⁿ trohⁿ-PAY duh SAL | lay-tü-DYAHⁿT | eh-ta-ree-VAY ahⁿ ruh-TAR', ['compose', 'pronominal', 'accord']),
  sent(1678, "Ayant vécu dix ans à Québec, il connaît bien l'hiver.", 'Having lived in Québec City for ten years, he knows winter well.',
    '/ɛ.jɑ̃ ve.ky di.zɑ̃ a ke.bɛk il kɔ.nɛ bjɛ̃ li.vɛʁ/', 'eh-yahⁿ vay-KÜ dee-ZAHⁿ a kay-BEK | eel ko-NEH byehⁿ lee-VEHR', ['compose', 'avoir'], FCVDR),
  rule(1679, "Ayant ou étant + participe passé : une action finie avant l'autre.", 'Ayant or étant + past participle: an action finished before the other.',
    '/ɛ.jɑ̃ u e.tɑ̃ plys paʁ.ti.sip pa.se y.nak.sjɔ̃ fi.ni a.vɑ̃ lotʁ/', 'eh-YAHⁿ oo ay-TAHⁿ | plüs par-tee-seep pa-SAY | ü-nak-SYOHⁿ fee-NEE | a-vahⁿ LOHTR',
    'Ayant fini, étant arrivée : quel auxiliaire choisir ?',
    "Le même qu'au passé composé : j'ai fini, donc ayant fini ; je suis arrivée, donc étant arrivée. Avec étant, le participe passé s'accorde avec le sujet.",
    ['compose']),
  gap(1680, "Ayant lu la lettre, elle a appelé son avocat.", 'Having read the letter, she called her lawyer.',
    '/ɛ.jɑ̃ ly la lɛtʁ ɛ.la a.pə.le sɔ̃.na.vɔ.ka/', 'eh-yahⁿ lü la LETR | eh-la a-puh-LAY | sohⁿ-na-vo-KA',
    '___ la lettre, elle a appelé son avocat. (lire · avant d’appeler)',
    "J'ai lu, donc ayant lu : la lecture est finie avant l'appel. EN: avoir in the passé composé, so ayant.",
    ['compose', 'avoir'], FCVDR),
  gap(1681, "S'étant levés tôt, les enfants dormaient déjà à neuf heures.", 'Having got up early, the children were already asleep at nine.',
    '/se.tɑ̃ lə.ve to le.zɑ̃.fɑ̃ dɔʁ.mɛ de.ʒa a nœ.vœʁ/', 'say-tahⁿ luh-vay TOH | lay-zahⁿ-FAHⁿ | dor-meh day-ZHA a nuh-VUHR',
    '___ tôt, les enfants dormaient déjà à neuf heures. (se lever · avant le soir)',
    "Ils se sont levés, donc s'étant levés : être, et l'accord avec les enfants. EN: être, and the agreement.",
    ['compose', 'pronominal', 'accord']),
  sent(1682, 'Ayant tout oublié, il a dû tout recommencer.', 'Having forgotten everything, he had to start again from scratch.',
    '/ɛ.jɑ̃ tu.tu.bli.je i.la dy tu ʁə.kɔ.mɑ̃.se/', 'eh-yahⁿ too-too-blee-YAY | ee-la dü too ruh-ko-mahⁿ-SAY', ['compose', 'avoir']),
  sent(1683, 'Étant restée seule, elle a tout rangé.', 'Having been left on her own, she tidied everything up.',
    '/e.tɑ̃ ʁɛs.te sœl ɛ.la tu ʁɑ̃.ʒe/', 'ay-tahⁿ res-tay SUHL | eh-la too rahⁿ-ZHAY', ['compose', 'etre', 'accord']),
];

/* ── ACT 6 · L'ADJECTIF VERBAL : UNE QUALITÉ (.1686-.1701) ────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1686, 'Les chapitres sont courts et passionnants.', 'The chapters are short and gripping.',
    '/le ʃa.pitʁ sɔ̃ kuʁ e pa.sjɔ.nɑ̃/', 'lay sha-PEETR sohⁿ KOOR | ay pa-syo-NAHⁿ', ['adjectif', 'accord'], FCVDR),
  sent(1687, "C'était une soirée fatigante, mais réussie.", 'It was a tiring evening, but a successful one.',
    '/se.tɛ.ty.nə swa.ʁe fa.ti.ɡɑ̃t mɛ ʁe.y.si/', 'say-teh-tü-nuh swa-RAY | fa-tee-GAHⁿT | meh ray-ü-SEE', ['adjectif', 'accord', 'paires'], FCVDR),
  sent(1688, 'Ces chiffres sont très inquiétants.', 'These figures are very worrying.',
    '/se ʃifʁ sɔ̃ tʁɛ.zɛ̃.kje.tɑ̃/', 'say SHEEFR | sohⁿ treh-zehⁿ-kyay-TAHⁿ', ['adjectif', 'tres']),
  sent(1689, 'Nous avons été reçus par une hôtesse souriante.', 'We were welcomed by a smiling hostess.',
    '/nu.za.vɔ̃.ze.te ʁə.sy paʁ y.nɔ.tɛs su.ʁjɑ̃t/', 'noo-za-vohⁿ-zay-TAY ruh-SÜ | par ü-no-TESS soo-RYAHⁿT', ['adjectif', 'accord', 'paire']),
  sent(1690, 'Une hôtesse souriant à chaque client distribuait les badges.', 'A hostess smiling at every customer was handing out the badges.',
    '/y.nɔ.tɛs su.ʁi.jɑ̃ a ʃak kli.jɑ̃ dis.tʁi.by.ɛ le badʒ/', 'ü-no-TESS | soo-ree-yahⁿ a shak klee-YAHⁿ | dees-tree-bü-EH lay BADZH', ['participe', 'complement', 'paire']),
  sent(1691, 'Ma voisine a une voix apaisante.', 'My neighbour has a soothing voice.',
    '/ma vwa.zi.na y.nə vwa a.pɛ.zɑ̃t/', 'ma vwa-ZEEN a ü-nuh VWA | a-peh-ZAHⁿT', ['adjectif', 'accord']),
  sent(1692, 'Les premières semaines ont été stimulantes.', 'The first weeks were stimulating.',
    '/le pʁə.mjɛʁ sə.mɛn ɔ̃.te.te sti.my.lɑ̃t/', 'lay pruh-myehr suh-MENN | ohⁿ-tay-TAY stee-mü-LAHⁿT', ['adjectif', 'accord']),
  sent(1693, "C'est une ville vivante, où l'on sort tard.", 'It is a lively city, where people go out late.',
    '/sɛ.ty.nə vil vi.vɑ̃t u lɔ̃ sɔʁ taʁ/', 'seh-tü-nuh VEEL vee-VAHⁿT | oo lohⁿ sor TAR', ['adjectif', 'paire'], FCVDR),
  ecrit(1694, "C'est une ville vivant surtout du tourisme.", 'It is a town that lives mainly on tourism.',
    '/sɛ.ty.nə vil vi.vɑ̃ syʁ.tu dy tu.ʁism/', 'seh-tü-nuh VEEL | vee-vahⁿ sür-TOO dü too-REESM', ['participe', 'complement', 'paire']),
  rule(1695, "L'adjectif verbal s'accorde : une soirée fatigante, des chapitres passionnants.", 'The verbal adjective agrees: a tiring evening, gripping chapters.',
    '/lad.ʒɛk.tif vɛʁ.bal sa.kɔʁd y.nə swa.ʁe fa.ti.ɡɑ̃t de ʃa.pitʁ pa.sjɔ.nɑ̃/', 'lad-zhek-teef vehr-BAL sa-KORD | ü-nuh swa-RAY fa-tee-GAHⁿT | day sha-PEETR pa-syo-NAHⁿ',
    'Passionnantes, dans « des histoires passionnantes » : pourquoi -es ?',
    "Parce que c'est un adjectif : il dit une qualité des histoires et s'accorde avec elles, comme longues ou belles.",
    ['adjectif', 'accord']),
  gap(1696, 'Ces deux dernières semaines ont été vraiment épuisantes.', 'These last two weeks have been really exhausting.',
    '/se dø dɛʁ.njɛʁ sə.mɛn ɔ̃.te.te vʁɛ.mɑ̃ e.pɥi.zɑ̃t/', 'say deu dehr-NYEHR suh-MENN | ohⁿ-tay-TAY vreh-MAHⁿ | ay-pwee-ZAHⁿT',
    'Ces deux dernières semaines ont été vraiment ___. (épuiser · une qualité)',
    "Une qualité des semaines : l'adjectif s'accorde au féminin pluriel, épuisantes. EN: feminine plural.",
    ['adjectif', 'accord'], FCVDR),
  gap(1697, 'Il nous a raconté une histoire émouvante.', 'He told us a moving story.',
    '/il nu.za ʁa.kɔ̃.te y.nis.twaʁ e.mu.vɑ̃t/', 'eel noo-za ra-kohⁿ-TAY | ü-nees-TWAR ay-moo-VAHⁿT',
    'Il nous a raconté une histoire ___. (émouvoir · une qualité)',
    "Nous émouvons, donc émouvant ; ici un adjectif, accordé avec histoire : émouvante. EN: émouvante.",
    ['adjectif', 'accord']),
  sent(1698, "Elle a fait une brillante carrière à l'étranger.", 'She had a brilliant career abroad.',
    '/ɛl a fɛ y.nə bʁi.jɑ̃t ka.ʁjɛʁ a le.tʁɑ̃.ʒe/', 'el a FEH | ü-nuh bree-yahⁿt ka-RYEHR | a lay-trahⁿ-ZHAY', ['adjectif', 'place']),
  sent(1699, "Des lumières clignotantes m'empêchaient de dormir.", 'Flashing lights kept me awake.',
    '/de ly.mjɛʁ kli.ɲɔ.tɑ̃t mɑ̃.pɛ.ʃɛ də dɔʁ.miʁ/', 'day lü-MYEHR | klee-nyo-TAHⁿT | mahⁿ-peh-SHEH duh dor-MEER', ['adjectif', 'accord']),
  sent(1700, 'Ce sont des voisins très arrangeants.', 'They are very accommodating neighbours.',
    '/sə sɔ̃ de vwa.zɛ̃ tʁɛ.za.ʁɑ̃.ʒɑ̃/', 'suh sohⁿ day vwa-ZEHⁿ | treh-za-rahⁿ-ZHAHⁿ', ['adjectif', 'tres']),
  sent(1701, 'Le spectacle était drôle, mais la fin, un peu décevante.', 'The show was funny, but the ending a little disappointing.',
    '/lə spɛk.takl e.tɛ dʁol mɛ la fɛ̃ œ̃ pø de.sə.vɑ̃t/', 'luh spek-TAKL ay-teh DROHL | meh la FEHⁿ | uhⁿ puh day-suh-VAHⁿT', ['adjectif', 'accord', 'critique']),
];

/* ── ACT 7 · LES TROIS TESTS (.1704-.1717) ────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1704, 'Les enfants, obéissant à leur mère, sont allés se coucher.', 'The children, obeying their mother, went to bed.',
    '/le.zɑ̃.fɑ̃ o.be.i.sɑ̃ a lœʁ mɛʁ sɔ̃.ta.le sə ku.ʃe/', 'lay-zahⁿ-FAHⁿ | oh-bay-ee-sahⁿ a luhr MEHR | sohⁿ-ta-LAY suh koo-SHAY', ['test', 'complement', 'paire']),
  sent(1705, 'Ce sont des enfants très obéissants.', 'They are very obedient children.',
    '/sə sɔ̃ de.zɑ̃.fɑ̃ tʁɛ.zo.be.i.sɑ̃/', 'suh sohⁿ day-zahⁿ-FAHⁿ | treh-zoh-bay-ee-SAHⁿ', ['test', 'tres', 'paire'], FCVDR),
  sent(1706, 'Une étudiante travaillant le soir a peu de temps libre.', 'A student who works in the evenings has little free time.',
    '/y.ne.ty.djɑ̃t tʁa.va.jɑ̃ lə swaʁ a pø də tɑ̃ libʁ/', 'ü-nay-tü-DYAHⁿT | tra-va-yahⁿ luh SWAR | a puh duh tahⁿ LEEBR', ['test', 'qui']),
  sent(1707, 'Des touristes ne parlant pas français nous ont demandé la route.', 'Some tourists who did not speak French asked us the way.',
    '/de tu.ʁist nə paʁ.lɑ̃ pa fʁɑ̃.sɛ nu.zɔ̃ də.mɑ̃.de la ʁut/', 'day too-REEST | nuh par-lahⁿ pa frahⁿ-SEH | noo-zohⁿ duh-mahⁿ-DAY la ROOT', ['test', 'negation'], FCVDR),
  sent(1708, 'Des élèves travaillant régulièrement réussissent mieux.', 'Pupils who work regularly do better.',
    '/de.ze.lɛv tʁa.va.jɑ̃ ʁe.ɡy.ljɛʁ.mɑ̃ ʁe.y.sis mjø/', 'day-zay-LEV | tra-va-yahⁿ ray-gü-lyehr-MAHⁿ | ray-ü-sees MYUH', ['test', 'adverbe']),
  sent(1709, 'Ce sont des films très amusants.', 'They are very funny films.',
    '/sə sɔ̃ de film tʁɛ.za.my.zɑ̃/', 'suh sohⁿ day FEELM | treh-za-mü-ZAHⁿ', ['test', 'tres']),
  rule(1710, "Si tu peux ajouter très, c'est un adjectif ; sinon, si tu peux dire qui + verbe, c'est un participe.", 'If you can add très, it is an adjective; otherwise, if you can say qui + verb, it is a participle.',
    '/si ty pø a.ʒu.te tʁɛ sɛ.tœ̃.nad.ʒɛk.tif si.nɔ̃ si ty pø diʁ ki plys vɛʁb sɛ.tœ̃ paʁ.ti.sip/', 'see tü puh a-zhoo-tay TREH | seh-tuhⁿ-nad-zhek-TEEF | see-NOHⁿ | see tü puh deer kee plüs VEHRB | seh-tuhⁿ par-tee-SEEP',
    'Une soirée fatigante : adjectif ou participe ?',
    "Adjectif : une soirée très fatigante marche, et le mot s'accorde. Pose très en premier : une soirée qui fatigue se dit aussi, donc qui + verbe seul ne tranche pas. Le participe, lui, a un complément : les enfants fatiguant leur mère.",
    ['test', 'tres']),
  rule(1711, "Un complément d'objet, un adverbe après ou une négation : c'est un participe.", 'An object, an adverb after it or a negation: it is a participle.',
    '/œ̃ kɔ̃.ple.mɑ̃ dɔb.ʒɛ œ̃.nad.vɛʁb a.pʁɛ u y.nə ne.ɡa.sjɔ̃ sɛ.tœ̃ paʁ.ti.sip/', 'uhⁿ kohⁿ-play-mahⁿ dob-ZHEH | uhⁿ-nad-VEHRB a-PREH | oo ü-nuh nay-ga-SYOHⁿ | seh-tuhⁿ par-tee-SEEP',
    'Des élèves travaillant régulièrement : participe ou adjectif ?',
    "Participe : l'adverbe vient après, comme après un verbe conjugué. Des élèves qui travaillent régulièrement. Attention : quelques adjectifs ont aussi un complément (excellente en maths, une somme équivalente à…) ; là, les deux formes sont justes.",
    ['test', 'adverbe']),
  sent(1712, 'Une chanson entraînante passait à la radio.', 'A catchy song was playing on the radio.',
    '/y.nə ʃɑ̃.sɔ̃ ɑ̃.tʁɛ.nɑ̃t pa.sɛ a la ʁa.djo/', 'ü-nuh shahⁿ-SOHⁿ | ahⁿ-treh-NAHⁿT | pa-SEH a la ra-DYOH', ['test', 'adjectif', 'paire'], FCVDR),
  sent(1713, "Les jeunes, entraînant leurs parents sur la piste, ont dansé jusqu'à minuit.", 'The young people, dragging their parents onto the dance floor, danced until midnight.',
    '/le ʒœn ɑ̃.tʁɛ.nɑ̃ lœʁ pa.ʁɑ̃ syʁ la pist ɔ̃ dɑ̃.se ʒys.ka mi.nɥi/', 'lay ZHUHN | ahⁿ-treh-nahⁿ luhr pa-RAHⁿ sür la PEEST | ohⁿ dahⁿ-SAY zhüs-ka mee-NWEE', ['test', 'complement', 'paire']),
  gap(1714, 'Les guides, parlant trois langues, accueillent les groupes.', 'The guides, who speak three languages, welcome the groups.',
    '/le ɡid paʁ.lɑ̃ tʁwa lɑ̃ɡ a.kœj le ɡʁup/', 'lay GHEED | par-lahⁿ trwa LAHⁿG | a-KUHY lay GROOP',
    'Les guides, ___ trois langues, accueillent les groupes. (parler · un complément)',
    "Un complément (trois langues) : c'est un participe, sans accord. EN: an object, so a participle.",
    ['test', 'complement'], FCVDR),
  gap(1715, 'Ce sont des résultats très encourageants.', 'These are very encouraging results.',
    '/sə sɔ̃ de ʁe.zyl.ta tʁɛ.zɑ̃.ku.ʁa.ʒɑ̃/', 'suh sohⁿ day ray-zül-TA | treh-zahⁿ-koo-ra-ZHAHⁿ',
    'Ce sont des résultats très ___. (encourager · très)',
    "Très devant : un adjectif, accordé au masculin pluriel. Le e de encourageons reste. EN: très, so an adjective.",
    ['test', 'tres']),
  ecrit(1716, 'Des mesures encourageant le vélo seront votées en mars.', 'Measures encouraging cycling will be voted on in March.',
    '/de mə.zyʁ ɑ̃.ku.ʁa.ʒɑ̃ lə ve.lo sə.ʁɔ̃ vɔ.te ɑ̃ maʁs/', 'day muh-ZÜR | ahⁿ-koo-ra-zhahⁿ luh vay-LOH | suh-rohⁿ vo-TAY ahⁿ MARS', ['test', 'complement']),
  sent(1717, "Une remarque blessante l'a fait pleurer.", 'A hurtful remark made her cry.',
    '/y.nə ʁə.maʁk blɛ.sɑ̃t la fɛ plœ.ʁe/', 'ü-nuh ruh-MARK bleh-SAHⁿT | la feh pluh-RAY', ['test', 'adjectif']),
];

/* ── ACT 8 · -QUANT OU -CANT, -GUANT OU -GANT (.1720-.1735) ──────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1720, 'Ces longs trajets en bus sont fatigants.', 'These long bus journeys are tiring.',
    '/se lɔ̃ tʁa.ʒɛ ɑ̃ bys sɔ̃ fa.ti.ɡɑ̃/', 'say lohⁿ tra-ZHEH ahⁿ BÜS | sohⁿ fa-tee-GAHⁿ', ['paires', 'gant'], FCVDR),
  sent(1721, 'Fatiguant tout le monde avec ses questions, il a fini par se taire.', 'Wearing everyone out with his questions, he eventually went quiet.',
    '/fa.ti.ɡɑ̃ tu lə mɔ̃d a.vɛk se kɛs.tjɔ̃ i.la fi.ni paʁ sə tɛʁ/', 'fa-tee-GAHⁿ too luh MOHⁿD | a-vek say kes-TYOHⁿ | ee-la fee-NEE par suh TEHR', ['paires', 'guant']),
  sent(1722, 'Ses arguments étaient très convaincants.', 'His arguments were very convincing.',
    '/se.zaʁ.ɡy.mɑ̃ e.tɛ tʁɛ kɔ̃.vɛ̃.kɑ̃/', 'say-zar-gü-MAHⁿ | ay-teh treh kohⁿ-vehⁿ-KAHⁿ', ['paires', 'cant'], FCVDR),
  ecrit(1723, 'Convainquant les derniers indécis, le maire a fait voter le budget.', 'Winning over the last waverers, the mayor got the budget passed.',
    '/kɔ̃.vɛ̃.kɑ̃ le dɛʁ.nje.zɛ̃.de.si lə mɛʁ a fɛ vɔ.te lə byd.ʒɛ/', 'kohⁿ-vehⁿ-kahⁿ lay dehr-nyay-zehⁿ-day-SEE | luh MEHR a feh vo-TAY luh büd-ZHEH', ['paires', 'quant', 'presse']),
  sent(1724, 'Sa tenue était un peu provocante.', 'Her outfit was a little provocative.',
    '/sa tə.ny e.tɛ œ̃ pø pʁɔ.vɔ.kɑ̃t/', 'sa tuh-NÜ | ay-teh uhⁿ puh pro-vo-KAHⁿT', ['paires', 'cant']),
  ecrit(1725, "La tempête, provoquant des coupures d'électricité, a paralysé la région.", 'The storm, causing power cuts, paralysed the region.',
    '/la tɑ̃.pɛt pʁɔ.vɔ.kɑ̃ de ku.pyʁ de.lɛk.tʁi.si.te a pa.ʁa.li.ze la ʁe.ʒjɔ̃/', 'la tahⁿ-PET | pro-vo-kahⁿ day koo-PÜR day-lek-tree-see-TAY | a pa-ra-lee-ZAY la ray-ZHYOHⁿ', ['paires', 'quant', 'presse'], FCVDR),
  sent(1726, 'Il faisait une chaleur suffocante dans le métro.', 'It was stiflingly hot in the metro.',
    '/il fə.zɛ y.nə ʃa.lœʁ sy.fɔ.kɑ̃t dɑ̃ lə me.tʁo/', 'eel fuh-ZEH | ü-nuh sha-LUHR sü-fo-KAHⁿT | dahⁿ luh may-TROH', ['paires', 'cant']),
  ecrit(1727, "Suffoquant sous la fumée, les habitants ont quitté l'immeuble.", 'Choking in the smoke, the residents left the building.',
    '/sy.fɔ.kɑ̃ su la fy.me le.za.bi.tɑ̃ ɔ̃ ki.te li.mœbl/', 'sü-fo-kahⁿ soo la fü-MAY | lay-za-bee-TAHⁿ | ohⁿ kee-TAY lee-MUHBL', ['paires', 'quant', 'presse']),
  sent(1728, "L'appartement a deux chambres communicantes.", 'The flat has two connecting bedrooms.',
    '/la.paʁ.tə.mɑ̃ a dø ʃɑ̃bʁ kɔ.my.ni.kɑ̃t/', 'la-par-tuh-MAHⁿ | a deu SHAHⁿBR | ko-mü-nee-KAHⁿT', ['paires', 'cant'], FCVDR),
  ecrit(1729, 'Les services, communiquant peu entre eux, perdent du temps.', 'The departments, which communicate little with each other, waste time.',
    '/le sɛʁ.vis kɔ.my.ni.kɑ̃ pø ɑ̃.tʁø pɛʁd dy tɑ̃/', 'lay sehr-VEESS | ko-mü-nee-kahⁿ PUH ahⁿ-TRUH | PEHRD dü TAHⁿ', ['paires', 'quant']),
  rule(1730, "Le participe garde le -qu- et le -gu- du verbe ; l'adjectif les perd.", 'The participle keeps the -qu- and -gu- of the verb; the adjective loses them.',
    '/lə paʁ.ti.sip ɡaʁd lə ky e lə ɡy dy vɛʁb lad.ʒɛk.tif le pɛʁ/', 'luh par-tee-SEEP | GARD luh KÜ ay luh GÜ dü VEHRB | lad-zhek-TEEF lay PEHR',
    'Fatiguant ou fatigant ?',
    "Le participe garde le radical du verbe : nous fatiguons, fatiguant. L'adjectif le perd : une journée fatigante. De même convainquant et convaincant, provoquant et provocant.",
    ['paires']),
  gap(1731, 'Ses explications étaient très convaincantes.', 'Her explanations were very convincing.',
    '/se.zɛk.spli.ka.sjɔ̃ e.tɛ tʁɛ kɔ̃.vɛ̃.kɑ̃t/', 'say-zek-splee-ka-SYOHⁿ | ay-teh treh kohⁿ-vehⁿ-KAHⁿT',
    'Ses explications étaient très ___. (convaincre · très)',
    "Très devant : un adjectif, donc -cant, accordé : convaincantes. EN: the adjective drops the -qu-.",
    ['paires', 'cant'], FCVDR),
  gap(1732, "Une panne provoquant d'importants retards a touché la ligne verte.", 'A breakdown causing major delays hit the green line.',
    '/y.nə pan pʁɔ.vɔ.kɑ̃ dɛ̃.pɔʁ.tɑ̃ ʁə.taʁ a tu.ʃe la liɲ vɛʁt/', 'ü-nuh PANN | pro-vo-kahⁿ dehⁿ-por-tahⁿ ruh-TAR | a too-SHAY la LEENY VEHRT',
    "Une panne ___ d'importants retards a touché la ligne verte. (provoquer · un complément)",
    "Un complément : c'est un participe, qui garde le -qu- et ne s'accorde pas. EN: provoquant.",
    ['paires', 'quant']),
  sent(1733, 'Ce voyage de nuit a été très fatigant.', 'This night journey was very tiring.',
    '/sə vwa.jaʒ də nɥi a e.te tʁɛ fa.ti.ɡɑ̃/', 'suh vwa-YAZH duh NWEE | a ay-TAY treh fa-tee-GAHⁿ', ['paires', 'gant']),
  ecrit(1734, 'Ne communiquant que par courriel, les deux équipes se comprennent mal.', 'Communicating only by email, the two teams misunderstand each other.',
    '/nə kɔ.my.ni.kɑ̃ kə paʁ ku.ʁjɛl le dø.ze.kip sə kɔ̃.pʁɛn mal/', 'nuh ko-mü-nee-kahⁿ kuh par koo-RYEL | lay deu-zay-KEEP | suh kohⁿ-PRENN MAL', ['paires', 'quant', 'negation']),
  sent(1735, "C'est le principe des vases communicants.", 'It is the principle of communicating vessels.',
    '/sɛ lə pʁɛ̃.sip de vaz kɔ.my.ni.kɑ̃/', 'seh luh prehⁿ-SEEP | day VAZ ko-mü-nee-KAHⁿ', ['paires', 'cant', 'fige']),
];

/* ── ACT 9 · -ANT OU -ENT, ET LES NOMS (.1738-.1757) ─────────────────────── */

export const ACT9_ROWS: Row[] = [
  ecrit(1738, "La semaine précédant les examens, la bibliothèque ouvre jusqu'à minuit.", 'In the week before the exams, the library is open until midnight.',
    '/la sə.mɛn pʁe.se.dɑ̃ le.zɛɡ.za.mɛ̃ la bi.bli.jɔ.tɛk uvʁ ʒys.ka mi.nɥi/', 'la suh-MENN | pray-say-dahⁿ lay-zeg-za-MEHⁿ | la bee-blee-yo-TEK | OOVR zhüs-ka mee-NWEE', ['ent', 'participe', 'paire'], FCVDR),
  sent(1739, "J'ai revu mes notes de la semaine précédente.", 'I went over my notes from the previous week.',
    '/ʒe ʁə.vy me nɔt də la sə.mɛn pʁe.se.dɑ̃t/', 'zhay ruh-VÜ may NOT | duh la suh-MENN pray-say-DAHⁿT', ['ent', 'adjectif', 'paire']),
  ecrit(1740, 'Nos avis, différant sur ce point, ont retardé la décision.', 'Our opinions, which differed on this point, delayed the decision.',
    '/no.za.vi di.fe.ʁɑ̃ syʁ sə pwɛ̃ ɔ̃ ʁə.taʁ.de la de.si.zjɔ̃/', 'noh-za-VEE | dee-fay-rahⁿ sür suh PWEHⁿ | ohⁿ ruh-tar-DAY la day-see-ZYOHⁿ', ['ent', 'participe', 'paire']),
  sent(1741, 'Nous avons des avis très différents.', 'We have very different opinions.',
    '/nu.za.vɔ̃ de.za.vi tʁɛ di.fe.ʁɑ̃/', 'noo-za-VOHⁿ | day-za-VEE treh dee-fay-RAHⁿ', ['ent', 'adjectif', 'paire'], FCVDR),
  sent(1742, 'Négligeant ses études, il a raté son année.', 'Neglecting his studies, he failed his year.',
    '/ne.ɡli.ʒɑ̃ se.ze.tyd i.la ʁa.te sɔ̃.na.ne/', 'nay-glee-zhahⁿ say-zay-TÜD | ee-la ra-TAY sohⁿ-na-NAY', ['ent', 'participe', 'paire']),
  sent(1743, "Un employé négligent peut coûter cher à l'entreprise.", 'A careless employee can cost the company dearly.',
    '/œ̃.nɑ̃.plwa.je ne.ɡli.ʒɑ̃ pø ku.te ʃɛʁ a lɑ̃.tʁə.pʁiz/', 'uhⁿ-nahⁿ-plwa-YAY nay-glee-ZHAHⁿ | puh koo-tay SHEHR a lahⁿ-truh-PREEZ', ['ent', 'adjectif', 'paire']),
  sent(1744, "Excellant en mathématiques, elle a choisi une école d'ingénieurs.", 'Excelling at maths, she chose an engineering school.',
    '/ɛk.se.lɑ̃ ɑ̃ ma.te.ma.tik ɛ.la ʃwa.zi y.ne.kɔl dɛ̃.ʒe.njœʁ/', 'ek-say-lahⁿ ahⁿ ma-tay-ma-TEEK | eh-la shwa-ZEE | ü-nay-KOL dehⁿ-zhay-NYUHR', ['ent', 'participe', 'paire']),
  sent(1745, "Elle a obtenu d'excellents résultats.", 'She got excellent results.',
    '/ɛ.la ɔp.tə.ny dɛk.se.lɑ̃ ʁe.zyl.ta/', 'eh-la op-tuh-NÜ | dek-say-lahⁿ ray-zül-TA', ['ent', 'adjectif', 'paire'], FCVDR),
  sent(1746, "C'est un homme politique très influent.", 'He is a very influential politician.',
    '/sɛ.tœ̃.nɔm pɔ.li.tik tʁɛ.zɛ̃.fly.ɑ̃/', 'seh-tuhⁿ-NOM po-lee-TEEK | treh-zehⁿ-flü-AHⁿ', ['ent', 'adjectif', 'paire']),
  ecrit(1747, 'Le prix du pétrole, influant sur tous les autres prix, inquiète les ménages.', 'The price of oil, which affects every other price, worries households.',
    '/lə pʁi dy pe.tʁɔl ɛ̃.fly.ɑ̃ syʁ tu le.zotʁ pʁi ɛ̃.kjɛt le me.naʒ/', 'luh PREE dü pay-TROL | ehⁿ-flü-ahⁿ sür too lay-ZOHTR PREE | ehⁿ-KYET lay may-NAZH', ['ent', 'participe', 'paire']),
  ecrit(1748, 'Une somme équivalant à deux mois de salaire lui a été versée.', 'A sum equivalent to two months’ salary was paid to him.',
    '/y.nə sɔm e.ki.va.lɑ̃ a dø mwa də sa.lɛʁ lɥi a e.te vɛʁ.se/', 'ü-nuh SOM | ay-kee-va-lahⁿ a deu MWA duh sa-LEHR | lwee a ay-tay vehr-SAY', ['ent', 'participe', 'paire']),
  sent(1749, 'Ces deux diplômes sont équivalents.', 'These two degrees are equivalent.',
    '/se dø di.plom sɔ̃.te.ki.va.lɑ̃/', 'say deu dee-PLOM | sohⁿ-tay-kee-va-LAHⁿ', ['ent', 'adjectif', 'paire'], FCVDR),
  ecrit(1750, "Les personnes adhérant à l'association avant juin paieront moitié prix.", 'People joining the association before June will pay half price.',
    '/le pɛʁ.sɔn a.de.ʁɑ̃ a la.sɔ.sja.sjɔ̃ a.vɑ̃ ʒɥɛ̃ pɛ.ʁɔ̃ mwa.tje pʁi/', 'lay pehr-SONN | a-day-rahⁿ a la-so-sya-SYOHⁿ | a-vahⁿ ZHWEHⁿ | peh-ROHⁿ mwa-tyay PREE', ['ent', 'participe', 'nom']),
  sent(1751, 'Les adhérents reçoivent la revue chaque trimestre.', 'Members receive the magazine every quarter.',
    '/le.za.de.ʁɑ̃ ʁə.swav la ʁə.vy ʃak tʁi.mɛstʁ/', 'lay-za-day-RAHⁿ | ruh-SWAV la ruh-VÜ | shak tree-MESTR', ['ent', 'nom'], FCVDR),
  sent(1752, 'Ce fabricant de vélos emploie deux cents personnes.', 'This bicycle manufacturer employs two hundred people.',
    '/sə fa.bʁi.kɑ̃ də ve.lo ɑ̃.plwa dø sɑ̃ pɛʁ.sɔn/', 'suh fa-bree-KAHⁿ duh vay-LOH | ahⁿ-PLWA deu sahⁿ pehr-SONN', ['nom', 'cant', 'paire']),
  ecrit(1753, 'Une entreprise fabriquant des vélos cherche un comptable.', 'A company that makes bicycles is looking for an accountant.',
    '/y.nɑ̃.tʁə.pʁiz fa.bʁi.kɑ̃ de ve.lo ʃɛʁʃ œ̃ kɔ̃.tabl/', 'ü-nahⁿ-truh-PREEZ | fa-bree-kahⁿ day vay-LOH | SHEHRSH uhⁿ kohⁿ-TABL', ['participe', 'quant', 'paire']),
  ecrit(1754, "La présidente, présidant sa dernière réunion, a remercié toute l'équipe.",'The chair, presiding over her last meeting, thanked the whole team.',
    '/la pʁe.zi.dɑ̃t pʁe.zi.dɑ̃ sa dɛʁ.njɛʁ ʁe.y.njɔ̃ a ʁə.mɛʁ.sje tut le.kip/', 'la pray-zee-DAHⁿT | pray-zee-dahⁿ sa dehr-NYEHR ray-ü-NYOHⁿ | a ruh-mehr-SYAY toot lay-KEEP', ['ent', 'nom', 'participe']),
  rule(1755, "Le participe garde -ant ; l'adjectif et le nom prennent parfois -ent.", 'The participle keeps -ant; the adjective and the noun sometimes take -ent.',
    '/lə paʁ.ti.sip ɡaʁd ɑ̃ lad.ʒɛk.tif e lə nɔ̃ pʁɛn paʁ.fwa ɑ̃/', 'luh par-tee-SEEP GARD AHⁿ | lad-zhek-TEEF ay luh NOHⁿ | PRENN par-FWA AHⁿ',
    'Précédant ou précédent ?',
    "Le participe garde toujours -ant : la semaine précédant les examens. L'adjectif et le nom changent : la semaine précédente, un précédent. De même différent, négligent, excellent, influent, équivalent, adhérent.",
    ['ent']),
  gap(1756, 'Les adhérents ont voté pour le nouveau bureau.', 'The members voted for the new committee.',
    '/le.za.de.ʁɑ̃ ɔ̃ vɔ.te puʁ lə nu.vo by.ʁo/', 'lay-za-day-RAHⁿ | ohⁿ vo-tay poor luh noo-voh bü-ROH',
    'Les ___ ont voté pour le nouveau bureau. (adhérer · des personnes)',
    "Ici un nom, les membres : il prend -ent, adhérents. Le participe, lui, serait adhérant. EN: the noun takes -ent.",
    ['ent', 'nom']),
  gap(1757, 'Ils ont des goûts très différents.', 'They have very different tastes.',
    '/il.zɔ̃ de ɡu tʁɛ di.fe.ʁɑ̃/', 'eel-zohⁿ day GOO | treh dee-fay-RAHⁿ',
    'Ils ont des goûts très ___. (différer · très)',
    "Très devant : un adjectif, donc -ent, accordé : différents. EN: the adjective takes -ent.",
    ['ent', 'adjectif'], FCVDR),
];

/* ── ACT 10 · LE PARTICIPE, LE GÉRONDIF ET LE SUJET (.1760-.1772) ────────── */

export const ACT10_ROWS: Row[] = [
  sent(1760, "J'ai croisé Paul sortant du métro.", 'I ran into Paul as he was coming out of the metro.',
    '/ʒe kʁwa.ze pol sɔʁ.tɑ̃ dy me.tʁo/', 'zhay krwa-zay POL | sor-tahⁿ dü may-TROH', ['sujet', 'gerondif', 'paire'], FCVDR),
  sent(1761, "Sortant du métro, j'ai croisé Paul.", 'Coming out of the metro, I ran into Paul.',
    '/sɔʁ.tɑ̃ dy me.tʁo ʒe kʁwa.ze pol/', 'sor-tahⁿ dü may-TROH | zhay krwa-zay POL', ['sujet', 'tete', 'paire']),
  ecrit(1762, "Ayant reçu votre lettre, nous l'avons lue avec attention.", 'Having received your letter, we read it carefully.',
    '/ɛ.jɑ̃ ʁə.sy vɔtʁ lɛtʁ nu la.vɔ̃ ly a.vɛ.ka.tɑ̃.sjɔ̃/', 'eh-yahⁿ ruh-SÜ votr LETR | noo la-vohⁿ LÜ | a-veh-ka-tahⁿ-SYOHⁿ', ['sujet', 'reparation', 'compose'], FCVDR),
  ecrit(1763, 'Nous avons bien reçu votre lettre, qui a retenu toute notre attention.', 'We have received your letter, which has received our full attention.',
    '/nu.za.vɔ̃ bjɛ̃ ʁə.sy vɔtʁ lɛtʁ ki a ʁə.tə.ny tut nɔ.tʁa.tɑ̃.sjɔ̃/', 'noo-za-vohⁿ byehⁿ ruh-SÜ votr LETR | kee a ruh-tuh-NÜ | toot no-tra-tahⁿ-SYOHⁿ', ['sujet', 'reparation', 'relative']),
  ecrit(1764, 'Le musée étant fermé le lundi, nous irons mardi.', 'As the museum is closed on Mondays, we will go on Tuesday.',
    '/lə my.ze e.tɑ̃ fɛʁ.me lə lœ̃.di nu.zi.ʁɔ̃ maʁ.di/', 'luh mü-ZAY | ay-tahⁿ fehr-MAY luh luhⁿ-DEE | noo-zee-ROHⁿ mar-DEE', ['sujet', 'absolu']),
  ecrit(1765, 'La pluie ne cessant pas, le match a été reporté.', 'As the rain would not stop, the match was postponed.',
    '/la plɥi nə sɛ.sɑ̃ pa lə matʃ a e.te ʁə.pɔʁ.te/', 'la PLWEE | nuh seh-sahⁿ PA | luh MATCH a ay-tay ruh-por-TAY', ['sujet', 'absolu', 'negation'], FCVDR),
  sent(1766, 'Habitant loin, je trouve le bus pratique.', 'Living far away, I find the bus handy.',
    '/a.bi.tɑ̃ lwɛ̃ ʒə tʁuv lə bys pʁa.tik/', 'a-bee-tahⁿ LWEHⁿ | zhuh troov luh BÜS pra-TEEK', ['sujet', 'reparation']),
  sent(1767, "Comme j'habite loin, le bus est pratique pour moi.", 'As I live far away, the bus is handy for me.',
    '/kɔm ʒa.bit lwɛ̃ lə bys ɛ pʁa.tik puʁ mwa/', 'kom zha-beet LWEHⁿ | luh BÜS eh pra-TEEK poor MWA', ['sujet', 'reparation', 'clause'], FCVDR),
  rule(1768, "Le gérondif s'accroche au sujet ; le participe, au nom qu'il touche.", 'The gérondif hooks onto the subject; the participle, onto the noun it touches.',
    '/lə ʒe.ʁɔ̃.dif sa.kʁɔʃ o sy.ʒɛ lə paʁ.ti.sip o nɔ̃ kil tuʃ/', 'luh zhay-rohⁿ-DEEF | sa-KROSH oh sü-ZHEH | luh par-tee-SEEP | oh NOHⁿ keel TOOSH',
    "J'ai croisé Paul sortant du métro : qui sortait ?",
    "Paul : le participe se rattache au nom le plus proche. Avec en sortant, c'est toi, le sujet, comme dans la leçon 12 du B2.",
    ['sujet', 'gerondif']),
  rule(1769, 'Un participe sans le bon nom : donne-lui son sujet, ou passe à comme.', 'A participle with no proper noun to attach to: give it its subject, or switch to comme.',
    '/œ̃ paʁ.ti.sip sɑ̃ lə bɔ̃ nɔ̃ dɔn lɥi sɔ̃ sy.ʒɛ u pa.sa kɔm/', 'uhⁿ par-tee-SEEP | sahⁿ luh bohⁿ NOHⁿ | DONN lwee sohⁿ sü-ZHEH | oo pa-sa KOM',
    'Habitant loin, le bus est pratique : que corriger ?',
    "Le bus n'habite pas loin. Écris : habitant loin, je trouve le bus pratique ; ou : comme j'habite loin, le bus est pratique.",
    ['sujet', 'reparation']),
  sent(1770, 'On voyait des enfants courant dans la cour.', 'You could see children running in the playground.',
    '/ɔ̃ vwa.jɛ de.zɑ̃.fɑ̃ ku.ʁɑ̃ dɑ̃ la kuʁ/', 'ohⁿ vwa-YEH | day-zahⁿ-FAHⁿ | koo-rahⁿ dahⁿ la KOOR', ['sujet', 'objet']),
  gap(1771, 'Voyant son train partir, elle a couru sur le quai.', 'Seeing her train leave, she ran along the platform.',
    '/vwa.jɑ̃ sɔ̃ tʁɛ̃ paʁ.tiʁ ɛ.la ku.ʁy syʁ lə kɛ/', 'vwa-yahⁿ sohⁿ trehⁿ par-TEER | eh-la koo-RÜ | sür luh KEH',
    '___ son train partir, elle a couru sur le quai. (voir · c’est elle qui voit)',
    "En tête, le participe prend le sujet du verbe principal : elle voit, elle court. EN: she is the one seeing.",
    ['sujet', 'tete']),
  ecrit(1772, 'Les invités étant partis, nous avons rangé le salon.', 'Once the guests had left, we tidied the living room.',
    '/le.zɛ̃.vi.te e.tɑ̃ paʁ.ti nu.za.vɔ̃ ʁɑ̃.ʒe lə sa.lɔ̃/', 'lay-zehⁿ-vee-TAY | ay-tahⁿ par-TEE | noo-za-vohⁿ rahⁿ-ZHAY luh sa-LOHⁿ', ['sujet', 'absolu', 'compose']),
];

/* ── ACT 11 · TA CRITIQUE OU TON ANNONCE (.1776-.1786) ───────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1776, "C'est un premier roman captivant, qu'on lit d'une traite.", 'It is a gripping first novel that you read in one go.',
    '/sɛ.tœ̃ pʁə.mje ʁɔ.mɑ̃ kap.ti.vɑ̃ kɔ̃ li dy.nə tʁɛt/', 'seh-tuhⁿ pruh-myay ro-MAHⁿ kap-tee-VAHⁿ | kohⁿ lee dü-nuh TRET', ['tache', 'critique', 'adjectif'], FCVDR),
  ecrit(1777, "L'exposition, réunissant une centaine d'œuvres, se visite en une heure.", 'The exhibition, bringing together about a hundred works, takes an hour to see.',
    '/lɛk.spo.zi.sjɔ̃ ʁe.y.ni.sɑ̃ y.nə sɑ̃.tɛn dœvʁ sə vi.zi.ta.ny.nœʁ/', 'lek-spo-zee-SYOHⁿ | ray-ü-nee-sahⁿ ü-nuh sahⁿ-TENN DUHVR | suh vee-zee-ta-nü-NUHR', ['tache', 'critique', 'participe']),
  sent(1778, "La fin, un peu décevante, n'enlève rien au plaisir.", 'The ending, a little disappointing, takes nothing away from the pleasure.',
    '/la fɛ̃ œ̃ pø de.sə.vɑ̃t nɑ̃.lɛv ʁjɛ̃ o plɛ.ziʁ/', 'la FEHⁿ | uhⁿ puh day-suh-VAHⁿT | nahⁿ-LEV ryehⁿ oh pleh-ZEER', ['tache', 'critique', 'adjectif']),
  sent(1779, 'Les personnages, doutant de tout, finissent par se retrouver.', 'The characters, doubting everything, end up finding each other again.',
    '/le pɛʁ.sɔ.naʒ du.tɑ̃ də tu fi.nis paʁ sə ʁə.tʁu.ve/', 'lay pehr-so-NAZH | doo-tahⁿ duh TOO | fee-NEESS par suh ruh-troo-VAY', ['tache', 'critique', 'participe'], FCVDR),
  sent(1780, 'Les dialogues sont vifs et les images, saisissantes.', 'The dialogue is lively and the images striking.',
    '/le dja.lɔɡ sɔ̃ vif e le.zi.maʒ sɛ.zi.sɑ̃t/', 'lay dya-LOG sohⁿ VEEF | ay lay-zee-MAZH | seh-zee-SAHⁿT', ['tache', 'critique', 'adjectif']),
  sent(1781, 'Un film émouvant, dont les acteurs sont excellents.', 'A moving film, whose actors are excellent.',
    '/œ̃ film e.mu.vɑ̃ dɔ̃ le.zak.tœʁ sɔ̃.tɛk.se.lɑ̃/', 'uhⁿ FEELM ay-moo-VAHⁿ | dohⁿ lay-zak-TUHR | sohⁿ-tek-say-LAHⁿ', ['tache', 'critique', 'paires'], FCVDR),
  sent(1782, 'Je recommande ce livre aux lecteurs aimant les longues sagas familiales.', 'I recommend this book to readers who love long family sagas.',
    '/ʒə ʁə.kɔ.mɑ̃d sə livʁ o lɛk.tœʁ ɛ.mɑ̃ le lɔ̃ɡ sa.ɡa fa.mi.ljal/', 'zhuh ruh-ko-MAHⁿD suh LEEVR | oh lek-TUHR | eh-mahⁿ lay lohⁿg sa-GA fa-mee-LYAL', ['tache', 'critique', 'participe']),
  ecrit(1783, 'Poste à pourvoir immédiatement, exigeant une grande disponibilité.', 'Position to be filled immediately, requiring a high degree of availability.',
    '/pɔst a puʁ.vwaʁ i.me.dja.tə.mɑ̃ ɛɡ.zi.ʒɑ̃ y.nə ɡʁɑ̃d dis.pɔ.ni.bi.li.te/', 'POST a poor-VWAR ee-may-dya-tuh-MAHⁿ | eg-zee-zhahⁿ ü-nuh grahⁿd dees-po-nee-bee-lee-TAY', ['tache', 'annonce', 'participe']),
  ecrit(1784, 'Nous offrons un cadre de travail stimulant et une équipe accueillante.', 'We offer a stimulating work environment and a welcoming team.',
    '/nu.zɔ.fʁɔ̃ œ̃ kadʁ də tʁa.vaj sti.my.lɑ̃ e y.ne.kip a.kœ.jɑ̃t/', 'noo-zo-FROHⁿ uhⁿ KADR duh tra-VYE stee-mü-LAHⁿ | ay ü-nay-KEEP a-kuh-YAHⁿT', ['tache', 'annonce', 'adjectif'], FCVDR),
  sent(1785, 'Une mise en scène audacieuse et des acteurs convaincants.', 'A bold production and convincing actors.',
    '/y.nə mi.zɑ̃ sɛn o.da.sjøz e de.zak.tœʁ kɔ̃.vɛ̃.kɑ̃/', 'ü-nuh mee-zahⁿ SENN oh-da-SYUHZ | ay day-zak-TUHR kohⁿ-vehⁿ-KAHⁿ', ['tache', 'critique', 'paires']),
  ecrit(1786, 'Les candidatures ne respectant pas ces critères ne seront pas étudiées.', 'Applications that do not meet these criteria will not be considered.',
    '/le kɑ̃.di.da.tyʁ nə ʁɛs.pɛk.tɑ̃ pa se kʁi.tɛʁ nə sə.ʁɔ̃ pa.ze.ty.dje/', 'lay kahⁿ-dee-da-TÜR | nuh res-pek-tahⁿ pa say kree-TEHR | nuh suh-rohⁿ pa-zay-tü-DYAY', ['tache', 'annonce', 'negation']),
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

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  The long readings (B2: 200 to 350 words) and the eight short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 10. They live
 *  here so the reading, the quiz and the task cannot drift. Every place and
 *  organisation in them is invented, except the cities.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a job advert, Montréal (invented venue). */
export const LECTURE_ANNONCE =
  "Offre d'emploi : chargé ou chargée de projets culturels. La Maison de la culture des Érables, à Montréal, cherche une personne dynamique pour rejoindre son équipe dès septembre. Le poste. Vous coordonnerez une programmation variée : expositions, concerts, ateliers pour les familles. Vous travaillerez avec des artistes venant de tous les horizons et avec des bénévoles connaissant bien le quartier. C'est un poste exigeant, comprenant des soirées et quelques fins de semaine, mais c'est aussi un poste passionnant, au cœur de la vie du quartier. Le profil. Nous recherchons une personne ayant au moins trois ans d'expérience dans un milieu culturel et sachant gérer un budget. Les candidates et les candidats parlant anglais ou espagnol seront avantagés : notre public est très varié. Vous êtes organisé, curieux, et vous savez trouver des arguments convaincants face à nos partenaires. Ce que nous offrons. Un cadre de travail stimulant, une équipe souriante et accueillante, et un salaire correspondant à votre expérience. Pour postuler. Les personnes souhaitant poser leur candidature enverront un CV et une lettre de motivation avant le 10 juin. Les dossiers arrivant après cette date ne seront pas étudiés. Les entretiens auront lieu la semaine précédant la fête nationale du 24 juin. Les personnes n'ayant pas reçu de réponse le 30 juin pourront considérer que leur candidature n'a pas été retenue.";

/** Act 6: a book review (invented novel and author). */
export const LECTURE_CRITIQUE =
  "« La Maison des marées », de Clémence Aubry : un premier roman saisissant. Il y a des livres qu'on referme à regret. Le premier roman de Clémence Aubry, jeune autrice vivant à Saint-Malo, en fait partie. L'histoire est simple : trois sœurs, ne s'étant pas parlé depuis dix ans, se retrouvent dans la maison familiale pour la vendre. Pendant une semaine, sous une pluie battante, les souvenirs reviennent, les reproches aussi. Ce qui frappe d'abord, c'est l'écriture : des phrases courtes, précises, parfois coupantes, et des dialogues d'une vérité étonnante. Les personnages, doutant sans cesse d'eux-mêmes, sont attachants sans jamais être caricaturaux. La plus jeune, Lise, cachant un secret que le lecteur devine peu à peu, porte tout le roman. Tout n'est pas parfait. Le milieu du livre, un peu lent, pourra fatiguer certains lecteurs, et quelques retours en arrière, précédant les grandes scènes, cassent le rythme. Mais la dernière partie est bouleversante, et la fin, loin d'être décevante, laisse une impression durable. Ayant lu beaucoup de sagas familiales ces dernières années, je m'attendais à un récit convenu : c'est tout le contraire. Voilà un roman exigeant, intelligent et émouvant, que je recommande à tous les lecteurs aimant les histoires de famille et la mer. On attend déjà le suivant.";

/** Act 11: the model the learner imitates, an exhibition review (invented venue). */
export const LECTURE_MODELE =
  "Exposition : « Le fleuve en partage », au Centre d'art de la Pointe, à Québec, jusqu'au 15 mars. Ceux qui connaissent mal le Saint-Laurent auront une belle surprise. L'exposition, réunissant une centaine d'œuvres de photographes et de peintres, raconte le fleuve de sa source jusqu'à la mer. Le parcours, divisé en cinq salles, est clair et très vivant. On passe de grandes photographies saisissantes, montrant les glaces du printemps, à de petites aquarelles d'une douceur étonnante. Les textes accompagnant les œuvres sont courts et convaincants, sans jargon. La quatrième salle, consacrée aux communautés vivant sur les rives, est la plus émouvante : des portraits de pêcheurs et de familles, aux visages souriants ou fatigués, regardent le visiteur droit dans les yeux. Seul regret : la dernière salle, un peu vide, paraît moins aboutie que les précédentes, et l'éclairage, trop faible, rend certaines photos difficiles à lire. Ayant visité l'exposition un samedi, j'ai aussi trouvé la foule fatigante ; mieux vaut venir en semaine. Mais l'ensemble reste une réussite, intelligente et accessible. Je la recommande aux familles, aux amateurs de photo et à tous les visiteurs cherchant à mieux comprendre ce fleuve qui fait vivre toute une région. Tarif réduit pour les étudiants et les adhérents du Centre.";

/** The eight « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "Le message de la gardienne. Transforme-le en avis écrit pour le hall : remplace chaque qui + verbe par un participe présent. « Bonjour à tous. Les gens qui ont une voiture dans le garage doivent la sortir avant jeudi, parce qu'on repeint le sol. Ceux qui veulent une place provisoire peuvent venir me voir. Les personnes qui n'ont pas encore leur nouveau badge doivent passer à la loge. Et les vélos qui restent dans le couloir après vendredi seront enlevés. Merci à tous. »";

export const TEXTE_A4 =
  "L'histoire d'Inès, arrivée à Bordeaux l'an dernier. Réécris chaque phrase en commençant par un participe présent, et vérifie qui fait l'action. « Comme elle ne connaissait personne, Inès s'est inscrite à une chorale. Parce qu'elle avait peur de chanter faux, elle restait au dernier rang. Comme le chef de chœur voyait son talent, il lui a proposé un solo. Comme elle ne voulait pas le décevoir, elle a accepté. Le soir du concert, parce qu'elle tremblait un peu, elle a fermé les yeux et elle a chanté. »";

export const TEXTE_A5 =
  "Le parcours de Lucie. Mets chaque verbe entre parenthèses au participe composé, avec ayant ou étant, et accorde s'il le faut. « (finir) ses études en juin, Lucie est partie au Sénégal. (arriver) à Dakar un dimanche, elle a dormi chez une amie. (trouver) un poste dans une école, elle a loué un studio près de la mer. (se perdre) le premier jour, elle est arrivée en retard. Aujourd'hui, (vivre) trois ans là-bas, elle parle un peu wolof et ne veut plus rentrer. »";

export const TEXTE_A6 =
  "Carte postale de Marseille. Accorde les adjectifs verbaux entre parenthèses. « Nous avons passé une semaine (fatigant) mais (passionnant) à Marseille. Les ruelles du Panier sont (charmant), les marchés (vivant), et les habitants, très (accueillant), nous ont donné des conseils (étonnant). Au coucher du soleil, les calanques sont d'une beauté (saisissant). Le seul point noir : des nuits (étouffant) dans un petit hôtel sans climatisation. On revient quand même l'an prochain. »";

export const TEXTE_A7 =
  "La plainte des voisins. Participe ou adjectif ? Choisis la forme juste entre les deux. « Les soirées (dansant ou dansantes) du vendredi attirent beaucoup de monde. Des jeunes (arrivant ou arrivants) de tout le quartier s'y retrouvent, et une musique (entraînant ou entraînante) passe jusqu'à deux heures. Les voisins, ne (supportant ou supportants) plus le bruit, ont écrit au maire, (demandant ou demandants) des horaires (respectant ou respectants) leur sommeil. »";

export const TEXTE_A8 =
  "Le compte rendu de Samia. Cinq formes sont fausses : trouve-les et corrige-les. « La réunion d'hier a été fatiguante. Le directeur, convaincant les derniers sceptiques, a fait voter le projet. Pourtant, ses chiffres n'étaient pas très convainquants. Une remarque provoquante a fâché l'équipe, et la chaleur suffoquante de la salle n'a rien arrangé. Heureusement, les deux bureaux sont communicants : on a pu ouvrir la porte. »";

export const TEXTE_A9 =
  "La lettre du club de randonnée. Choisis entre les deux formes. « Le club compte cette année deux cents (adhérants ou adhérents). La semaine (précédant ou précédent) l'assemblée, le (présidant ou président) a envoyé l'ordre du jour. Les membres (adhérant ou adhérent) au club avant mars paient moins cher. Les avis sont souvent (différants ou différents), mais le bureau, (négligeant ou négligent) rarement l'avis des membres, trouve toujours une solution. »";

export const TEXTE_A10 =
  "La réponse du service client à Mme Diallo. Trois participes ou gérondifs n'ont pas le bon sujet : trouve-les et corrige-les. « Madame, ayant bien reçu votre réclamation, celle-ci a été transmise à notre service livraison. Habitant au cinquième étage sans ascenseur, votre canapé sera livré par deux personnes. En appelant notre entrepôt, un nouveau créneau vous sera proposé. Restant à votre disposition, nous vous prions d'agréer, Madame, nos salutations distinguées. Le service client »";
