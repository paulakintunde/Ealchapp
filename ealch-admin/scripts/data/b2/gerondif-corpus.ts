// b2.12.l1 « Le gérondif »: the authored corpus, the imports and the citation
// constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.07 futur
// antérieur), under the B2 rules of B2-BUILD-LOG.md (form, meaning, choice,
// text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 12 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE GÉRONDIF, BUILT AND USED, ALWAYS AGAINST THE CLAUSE IT REPLACES.
//
//     la forme          en + participe présent, built on the nous stem of the
//                       present (the recipe of lesson 1 in B1, with -ant);
//                       mangeant, commençant; invariable; the three verbs
//                       apart (ayant, étant, sachant); pronominals with the
//                       pronoun of the subject (en me levant); object
//                       pronouns after en (en le voyant, en en parlant);
//                       negation (en ne disant rien) against « sans » +
//                       infinitive; the passé form « en ayant fini », for
//                       RECOGNITION only, against « après avoir fini »
//     en même temps     simultaneity: pendant que, quand, au moment où, with
//                       ONE subject; « tout en » for two things at once
//     comment ?         manner and means (en courant, en travaillant le
//                       soir, c'est en forgeant...), against avec / par + nom
//     si                condition: en partant tôt, tu éviteras = si tu pars
//                       tôt; the main clause in the futur, présent, impératif
//                       or conditionnel (lessons 10 in B1 and 2 in B2)
//     parce que         cause: en voulant aider, il a tout cassé; one form,
//                       several readings, the sentence decides
//     tout en           opposition and concession: tout en sachant = bien
//                       que (lesson 32 in B1), with ONE subject
//     le sujet          subject control: the gérondif takes the main verb's
//                       subject; the dangling gérondif; the two repairs
//                       (change the subject, or switch to quand / pendant
//                       que / si / parce que); « qui sortait » against « en
//                       sortant »; proverbs and letter formulas
//     la place          front with a comma, end without, middle between
//                       commas; register (neutral, everywhere); the fixed
//                       phrases en attendant, soit dit en passant; the false
//                       leads en tout cas, en tant que (NOT gérondifs)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 1 in B1    the nous stem (reframe quoted)
//     lesson 10 in B1   si clauses (reframe quoted, rows .1215 and .1253)
//     lesson 31 in B1   pendant que and the other subordinators (reframe
//                       quoted, rows .1208, .1333, .1334)
//     lesson 32 in B1   bien que (reframe quoted, rows .1404, .1436, .1446)
//     lesson 2 in B2    the conditionnel passé (its row « En partant plus
//                       tôt, tu aurais évité les bouchons »)
//     lesson 6 in B2    subjunctive after bien que against the indicative
//                       (reframe quoted, recycling round only)
//     lessons 23, 24, 26 in B2   their gérondif rows, reused
//   FORWARD: the participe présent WITHOUT en and the verbal adjective belong
//   to a later lesson, named without a number (the trail position is not
//   occupied in this publish).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques` (fondations, a2-b2). Sub-theme for this
//     lesson, « le gérondif », already set in Postgres (brief). The seed
//     plus packs (read 2026-09-29, 20,683 items) hold b1 rows up to .1586
//     and b2 rows .039-.048 here, nothing at or above .1600 at any level.
//     B1 lessons 30 to 32 own 1000-1599: not touched.
//
//  2. ID BLOCK: `.1600`-`.1799`, assigned by the brief. Authored: `.1600`-
//     `.1783` with gaps between act blocks (see the act banners). Nothing
//     outside the block.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with any published row
//     (the theme holds « pendant que », « bien que », « en revanche »...).
//     Every row is a sentence, a conjugation card (cardType conjugation), a
//     gapfill card or a rule card.
//
//  4. REUSED ROWS. The probe of the seed for « en + -ant » found 30 rows; the
//     ones on topic are reused BY ID (§F), never retyped. « En tout cas »
//     (lesson 23 in B1's row) is reused as the false lead.
//
//  5. RESPELLINGS. The -ant ending is AHⁿ everywhere; the liaison of en
//     before a vowel moves the n onto the next syllable (ahⁿ-na-lahⁿ,
//     ahⁿ-nay-koo-TAHⁿ). Spelled for the nasal checker, not the ear:
//     « zone » ZONN, « personne » pehr-SONN. « même » is MEM (the seed's).
//     No U+203F anywhere.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL OR DANGLING SENTENCE IS EVER A ROW. « En sortant du
//     métro, un contrôleur m'a demandé mon billet » and the other dangling
//     gérondifs live only in the scene's choice, commonErrors.wrong,
//     trapDrill.promptSound and quiz errorSpot prompts.
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
  id: 'b2.12',
  seq: 12,
  title: 'The Gerund',
  sub: 'Le gérondif',
  canDo: 'Can build the gérondif (en + present participle, including avoir, être and savoir, pronominal verbs, object pronouns and negation) and use it to express simultaneity, manner and means, condition, cause and, with tout en, opposition, always with the subject of the main verb, switching to quand, pendant que, si, parce que or bien que when the subjects differ, and placing and punctuating it correctly',
  prereqUnitIds: ['b1.01', 'b1.10', 'b1.31', 'b1.32', 'b2.02'],
} as const;

export const LESSON_ID = 'b2.12.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMP_FORM_UNIT = 'b1.01';
export const SI_UNIT = 'b1.10';
export const SUBORD_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const COND_PASSE_UNIT = 'b2.02';
export const MODES_UNIT = 'b2.06';
export const ARGU_UNIT = 'b2.23';
export const LECTURE_UNIT = 'b2.24';
export const NEGO_UNIT = 'b2.26';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const COND_PASSE_REF = refFr(COND_PASSE_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const ARGU_REF = refFr(ARGU_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);
export const NEGO_REF = refFr(NEGO_UNIT);
/** The participe présent without en and the verbal adjective: a later
 *  lesson, cited WITHOUT a number (its trail position is not occupied). */
export const LATER_REF = 'une leçon suivante';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from '../b1/imparfait-formation-corpus.ts';
export { REFRAME as B110_REFRAME, REFRAME_EN as B110_REFRAME_EN } from '../b1/si-clauses-corpus.ts';
export { REFRAME as B131_REFRAME, REFRAME_EN as B131_REFRAME_EN } from '../b1/subordination-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';
export { REFRAME as B202_REFRAME, REFRAME_EN as B202_REFRAME_EN } from './conditionnel-passe-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE SUJET PRÊTÉ. The gérondif has no subject of its own: it borrows the
 *  subject of the main verb, always. That one fact is what makes it
 *  invariable (nothing to agree with), what picks the pronoun of a
 *  pronominal (en ME levant, j'ai vu...), what decides whether a clause can
 *  become a gérondif at all (one subject: yes; two: keep quand, pendant
 *  que, si, parce que, bien que), and what produces the dangling error
 *  (« en entrant, la porte s'est ouverte »: the door came in). The MEANING
 *  (time, manner, means, condition, cause, opposition) is not in the form:
 *  the sentence supplies it.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le gérondif n'a pas de sujet à lui : il prend celui du verbe principal.";
export const REFRAME_EN = 'The gérondif has no subject of its own: it takes the main verb’s.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le gérondif, c’est le -ing de l’anglais.',
    why: 'False both ways, and it drags the English habit in: « I am reading » is je lis, « reading is fun » is lire, and English tolerates the dangling -ing (« Leaving the metro, an inspector stopped me ») that act 9 is built to kill.',
  },
  {
    text: 'En + -ant, c’est pendant que.',
    why: 'True in act 4 only. False for manner and means (act 5), condition (act 6), cause (act 7) and opposition (act 8), and it hides the subject rule: « pendant que tu cuisines, je mets la table » cannot become a gérondif.',
  },
  {
    text: 'Le gérondif dit comment.',
    why: 'The manner reading of act 5. Useless for « en partant tôt, tu éviteras les bouchons » (a condition) or « tout en sachant que c’était risqué » (an opposition).',
  },
  {
    text: 'Le gérondif remplace une subordonnée.',
    why: 'Good for acts 4, 6, 7 and 8, but it says nothing about WHEN it can (one subject only), and « il est entré en courant » replaces no natural clause. The reframe kept names the condition every replacement depends on.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-29, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;
const PF = (n: number) => `fr.b1.projets-et-futur.${n}`;

export const IMPORTED = {
  act1: [
    'fr.b1.journalisme.1066',                  // J’écoute ce balado en marchant.  (lesson 34 in B1)
    CL(1333),                                  // Pendant que tu cuisines, je mets la table.  (lesson 31 in B1: two subjects)
  ],
  act2: [
    'fr.b1.recits-au-passe.460',               // nous voyons  (lesson 1 in B1, conjugation card)
    'fr.b1.recits-au-passe.441',               // nous faisions  (lesson 1 in B1, conjugation card)
  ],
  act3: [
    'fr.b2.affaires.1339',                     // En vous engageant sur deux ans, vous obtiendriez la remise complète.  (lesson 26 in B2)
  ],
  act4: [
    'fr.a1.routines.183',                      // Elle écoute la radio en préparant le repas.  (flashcard, no voiceflash)
    'fr.b1.cafe.005',                          // Elle prend toujours son café en lisant le journal.  (flashcard, no voiceflash)
    CL(1208),                                  // Pendant que je parlais au client, le camion est arrivé.  (lesson 31 in B1)
    'fr.a2.transports-quotidiens.214',         // Attention à la marche en descendant du train.
  ],
  act5: [
    'fr.b2.strategies-de-comprehension.1575',  // Justifiez votre réponse en citant le texte.  (lesson 24 in B2)
    'fr.b2.opinions-et-avis.1783',             // En encadrant l'usage, on responsabilise les élèves.  (lesson 23 in B2)
    'fr.b1.maison.013',                        // Nous voulons agrandir la cuisine en abattant un mur.  (sentence, dictation: named only)
  ],
  act6: [
    PF(1215),                                  // Si tu réserves aujourd'hui, tu paieras moins cher.  (lesson 10 in B1)
    PF(1253),                                  // Si tu appuies deux fois, la machine s’arrête.  (lesson 10 in B1: two subjects)
    'fr.b2.conseils-et-suggestions.1309',      // En partant plus tôt, tu aurais évité les bouchons.  (lesson 2 in B2)
  ],
  act7: [
    'fr.a2.corps.001',                         // Elle s'est cassé le bras en tombant du vélo.  (flashcard, no voiceflash)
    'fr.a2.objets.110',                        // Il a cassé ses lunettes en tombant dans l'escalier.  (flashcard, no voiceflash)
    'fr.b1.expressions-imagees.1062',          // J'ai mis les pieds dans le plat en parlant de son ex.  (lesson 27 in B1)
    'fr.b2.emotions.1249',                     // Il se peut qu'il se soit cassé le poignet en tombant.  (lesson 5 in B2)
  ],
  act8: [
    CL(1446),                                  // Bien que je connaisse le chemin, je prends le GPS.  (lesson 32 in B1)
    CL(1404),                                  // Bien que le projet soit cher, je vote pour.  (lesson 32 in B1: two subjects)
    CL(1436),                                  // Bien que je sois d'accord, j'ai une question.  (lesson 32 in B1)
  ],
  act9: [
    'fr.b1.ecologie.1107',                     // Éteins la lumière en sortant, s'il te plaît.  (the imperative: the subject is tu)
    CL(1334),                                  // Pendant que je dormais, le téléphone a sonné.  (lesson 31 in B1: two subjects)
  ],
  act10: [
    PF(573),                                   // En attendant, je continue comme avant.  (en attendant = meanwhile)
    'fr.b2.opinions-et-avis.1942',             // En attendant que la mairie réponde, on continue la pétition.  (lesson 6 in B2)
    'fr.b1.expressions-de-quantite.1154',      // en tout cas  (lesson 23 in B1: NOT a gérondif)
    'fr.b1.expressions-de-quantite.1144',      // En tout cas, merci d'être venu.
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b1.maison.013',                          // sentence, dictation
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  'fr.a1.routines.183',                        // sentence, flashcard, review
  'fr.b1.cafe.005',                            // sentence, flashcard, review
  'fr.a2.corps.001',                           // sentence, flashcard, review
  'fr.a2.objets.110',                          // sentence, flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `conj` a form card (front « parler · gérondif »);
 *  `gap` a gapfill card whose front gaps the participle and names the cue;
 *  `rule` a grammar card. Every row carries fr, en, ipa and respell. Corpus
 *  respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const GP = ['gerondif'];

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
  cardType: 'conjugation', prompt: `${inf} · gérondif`,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · UN SEUL SUJET, DEUX ACTIONS (.1600-.1613) ─────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1600, "En sortant du métro, j'ai dû passer un contrôle.", 'As I came out of the metro, I had to go through a ticket check.',
    '/ɑ̃ sɔʁ.tɑ̃ dy me.tʁo ʒe dy pa.se œ̃ kɔ̃.tʁol/', 'ahⁿ sor-tahⁿ dü may-TROH | zhay dü pa-SAY uhⁿ kohⁿ-TROL', ['scene', 'sujet'], FCVDR),
  sent(1601, "J'ai appris ces mots en écoutant mes collègues.", 'I learned these words by listening to my colleagues.',
    '/ʒe a.pʁi se mo ɑ̃.ne.ku.tɑ̃ me kɔ.lɛɡ/', 'zhay a-pree say MOH | ahⁿ-nay-koo-TAHⁿ may ko-LEG', ['lecture', 'moyen']),
  sent(1602, "On rencontre plus de monde en sortant qu'en restant chez soi.", 'You meet more people by going out than by staying at home.',
    '/ɔ̃ ʁɑ̃.kɔ̃tʁ ply də mɔ̃d ɑ̃ sɔʁ.tɑ̃ kɑ̃ ʁɛs.tɑ̃ ʃe swa/', 'ohⁿ rahⁿ-KOHⁿTR | plü duh MOHⁿD | ahⁿ sor-TAHⁿ | kahⁿ res-tahⁿ shay SWA', ['lecture', 'moyen']),
  sent(1603, 'En achetant ton manteau en octobre, tu paieras moins cher.', 'If you buy your coat in October, you will pay less.',
    '/ɑ̃.naʃ.tɑ̃ tɔ̃ mɑ̃.to ɑ̃.nɔk.tɔbʁ ty pɛ.ʁa mwɛ̃ ʃɛʁ/', 'ahⁿ-nash-TAHⁿ tohⁿ mahⁿ-TOH | ahⁿ-nok-TOBR | tü peh-RA mwehⁿ SHEHR', ['lecture', 'condition'], FCVDR),
  sent(1604, "J'ai lu dix romans en allant au travail.", 'I read ten novels on my way to work.',
    '/ʒe ly di ʁɔ.mɑ̃ ɑ̃.na.lɑ̃ o tʁa.vaj/', 'zhay lü dee ro-MAHⁿ | ahⁿ-na-lahⁿ oh tra-VYE', ['lecture', 'simultane']),
  sent(1605, "En prenant le métro, j'ai gagné une heure par jour.", 'By taking the metro, I gained an hour a day.',
    '/ɑ̃ pʁə.nɑ̃ lə me.tʁo ʒe ɡa.ɲe y.nœʁ paʁ ʒuʁ/', 'ahⁿ pruh-nahⁿ luh may-TROH | zhay ga-NYAY ü-NUHR par ZHOOR', ['lecture', 'moyen']),
  sent(1606, "Tout en sachant que c'était difficile, je suis restée.", 'Although I knew it was hard, I stayed.',
    '/tu.tɑ̃ sa.ʃɑ̃ kə se.tɛ di.fi.sil ʒə sɥi ʁɛs.te/', 'too-tahⁿ sa-SHAHⁿ | kuh say-teh dee-fee-SEEL | zhuh swee res-TAY', ['lecture', 'opposition']),
  sent(1607, "En y repensant, je suis contente d'être restée.", 'Thinking back on it, I am glad I stayed.',
    '/ɑ̃.ni ʁə.pɑ̃.sɑ̃ ʒə sɥi kɔ̃.tɑ̃t dɛtʁ ʁɛs.te/', 'ahⁿ-nee ruh-pahⁿ-SAHⁿ | zhuh swee kohⁿ-TAHⁿT | dehtr res-TAY', ['lecture', 'simultane']),
  rule(1608, REFRAME, REFRAME_EN,
    '/lə ʒe.ʁɔ̃.dif na pa də sy.ʒɛ a lɥi il pʁɑ̃ sə.lɥi dy vɛʁb pʁɛ̃.si.pal/',
    'luh zhay-rohⁿ-DEEF | na pa duh sü-ZHEH a LWEE | eel prahⁿ suh-lwee dü vehrb prehⁿ-see-PAL',
    'Qui fait l’action du gérondif ?',
    "Toujours le sujet du verbe principal. En sortant du métro, j'ai dû passer un contrôle : c'est moi qui sortais.",
    ['reframe']),
  sent(1609, 'Je révise mes notes en attendant le bus.', 'I go over my notes while waiting for the bus.',
    '/ʒə ʁe.viz me nɔt ɑ̃.na.tɑ̃.dɑ̃ lə bys/', 'zhuh ray-veez may NOT | ahⁿ-na-tahⁿ-dahⁿ luh BÜS', ['simultane']),
  sent(1610, 'Il est entré en courant.', 'He ran in.',
    '/i.lɛ.tɑ̃.tʁe ɑ̃ ku.ʁɑ̃/', 'ee-leh-tahⁿ-TRAY | ahⁿ koo-RAHⁿ', ['maniere'], FCVDR),
  sent(1611, 'En voulant aider, il a tout cassé.', 'In trying to help, he broke everything.',
    '/ɑ̃ vu.lɑ̃ e.de i.la tu ka.se/', 'ahⁿ voo-lahⁿ ay-DAY | ee-la too ka-SAY', ['cause']),
  sent(1612, 'En remplissant le formulaire, vérifie ton adresse.', 'When you fill in the form, check your address.',
    '/ɑ̃ ʁɑ̃.pli.sɑ̃ lə fɔʁ.my.lɛʁ ve.ʁi.fi tɔ̃.na.dʁɛs/', 'ahⁿ rahⁿ-plee-sahⁿ luh for-mü-LEHR | vay-ree-FEE tohⁿ-na-DRESS', ['usage', 'simultane']),
  sent(1613, 'Tu te feras des amis plus vite en parlant avec tes voisins.', 'You will make friends faster by talking to your neighbours.',
    '/ty tə fə.ʁa de.za.mi ply vit ɑ̃ paʁ.lɑ̃ a.vɛk te vwa.zɛ̃/', 'tü tuh fuh-RA day-za-MEE | plü VEET | ahⁿ par-LAHⁿ | a-vek tay vwa-ZEHⁿ', ['usage', 'moyen']),
];

/* ── ACT 2 · LA FORME (.1616-.1638) ───────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  conj(1616, 'en parlant', 'while / by speaking', '/ɑ̃ paʁ.lɑ̃/', 'ahⁿ par-LAHⁿ', 'parler', ['er'], FCVDR),
  conj(1617, 'en finissant', 'while / by finishing', '/ɑ̃ fi.ni.sɑ̃/', 'ahⁿ fee-nee-SAHⁿ', 'finir', ['ir']),
  conj(1618, 'en prenant', 'while / by taking', '/ɑ̃ pʁə.nɑ̃/', 'ahⁿ pruh-NAHⁿ', 'prendre', ['irregulier']),
  conj(1619, 'en faisant', 'while / by doing', '/ɑ̃ fə.zɑ̃/', 'ahⁿ fuh-ZAHⁿ', 'faire', ['irregulier'], FCVDR),
  conj(1620, 'en voyant', 'while / on seeing', '/ɑ̃ vwa.jɑ̃/', 'ahⁿ vwa-YAHⁿ', 'voir', ['irregulier']),
  conj(1621, 'en buvant', 'while / by drinking', '/ɑ̃ by.vɑ̃/', 'ahⁿ bü-VAHⁿ', 'boire', ['irregulier']),
  conj(1622, 'en mangeant', 'while / by eating', '/ɑ̃ mɑ̃.ʒɑ̃/', 'ahⁿ mahⁿ-ZHAHⁿ', 'manger', ['orthographe'], FCVDR),
  conj(1623, 'en commençant', 'while / by starting', '/ɑ̃ kɔ.mɑ̃.sɑ̃/', 'ahⁿ ko-mahⁿ-SAHⁿ', 'commencer', ['orthographe']),
  conj(1624, 'en disant', 'while / by saying', '/ɑ̃ di.zɑ̃/', 'ahⁿ dee-ZAHⁿ', 'dire', ['irregulier']),
  conj(1625, 'en écrivant', 'while / by writing', '/ɑ̃.ne.kʁi.vɑ̃/', 'ahⁿ-nay-kree-VAHⁿ', 'écrire', ['irregulier', 'liaison']),
  conj(1626, 'en allant', 'while / on the way', '/ɑ̃.na.lɑ̃/', 'ahⁿ-na-LAHⁿ', 'aller', ['irregulier', 'liaison']),
  conj(1627, 'en venant', 'while / on coming', '/ɑ̃ və.nɑ̃/', 'ahⁿ vuh-NAHⁿ', 'venir', ['irregulier']),
  sent(1628, 'Elle chante en faisant la vaisselle.', 'She sings while doing the dishes.',
    '/ɛl ʃɑ̃t ɑ̃ fə.zɑ̃ la vɛ.sɛl/', 'el SHAHⁿT | ahⁿ fuh-zahⁿ la veh-SELL', ['phrase'], FCVDR),
  sent(1629, "Il s'est endormi en lisant.", 'He fell asleep reading.',
    '/il sɛ.tɑ̃.dɔʁ.mi ɑ̃ li.zɑ̃/', 'eel seh-tahⁿ-dor-MEE | ahⁿ lee-ZAHⁿ', ['phrase']),
  sent(1630, 'Nous avons discuté en mangeant.', 'We chatted while we ate.',
    '/nu.za.vɔ̃ dis.ky.te ɑ̃ mɑ̃.ʒɑ̃/', 'noo-za-vohⁿ dees-kü-TAY | ahⁿ mahⁿ-ZHAHⁿ', ['phrase', 'orthographe']),
  sent(1631, 'En commençant tôt, tu finiras avant midi.', 'If you start early, you will finish before noon.',
    '/ɑ̃ kɔ.mɑ̃.sɑ̃ to ty fi.ni.ʁa a.vɑ̃ mi.di/', 'ahⁿ ko-mahⁿ-sahⁿ TOH | tü fee-nee-RA a-vahⁿ mee-DEE', ['phrase', 'orthographe']),
  sent(1632, 'Elles sont sorties en riant.', 'They went out laughing.',
    '/ɛl sɔ̃ sɔʁ.ti ɑ̃ ʁi.jɑ̃/', 'el sohⁿ sor-TEE | ahⁿ ree-YAHⁿ', ['phrase', 'invariable'], FCVDR),
  sent(1633, "Je l'ai reconnu en le voyant.", 'I recognised him as soon as I saw him.',
    '/ʒə le ʁə.kɔ.ny ɑ̃ lə vwa.jɑ̃/', 'zhuh lay ruh-ko-NÜ | ahⁿ luh vwa-YAHⁿ', ['phrase', 'pronom']),
  sent(1634, 'Tu progresseras en écrivant un peu chaque jour.', 'You will improve by writing a little every day.',
    '/ty pʁɔ.ɡʁɛ.sə.ʁa ɑ̃.ne.kʁi.vɑ̃ œ̃ pø ʃak ʒuʁ/', 'tü pro-greh-suh-RA | ahⁿ-nay-kree-VAHⁿ | uhⁿ puh shak ZHOOR', ['phrase']),
  rule(1635, 'Pars de nous, coupe -ons, ajoute -ant.', 'Start from nous, cut -ons, add -ant.',
    '/paʁ də nu kup ɔ̃ a.ʒut ɑ̃/', 'par duh NOO | koop OHⁿ | a-zhoot AHⁿ',
    'Comment forme-t-on le participe présent ?',
    "Comme l'imparfait : nous finissons donne finiss-, puis -ant. Le gérondif, c'est en devant : en finissant.",
    ['forme', 'radical']),
  rule(1636, 'Le participe ne change jamais : ni genre, ni nombre.', 'The participle never changes: no gender, no number.',
    '/lə paʁ.ti.sip nə ʃɑ̃ʒ ʒa.mɛ ni ʒɑ̃ʁ ni nɔ̃bʁ/', 'luh par-tee-SEEP | nuh shahⁿzh zha-MEH | nee ZHAHⁿR | nee NOHⁿBR',
    'Elles sont sorties en riant : faut-il accorder riant ?',
    "Non. Le gérondif n'a pas de sujet à lui, donc rien avec quoi s'accorder : en riant, toujours.",
    ['forme', 'invariable']),
  gap(1637, 'Il a appris le métier en voyageant.', 'He learned the trade by travelling.',
    '/i.la a.pʁi lə me.tje ɑ̃ vwa.ja.ʒɑ̃/', 'ee-la a-pree luh may-TYAY | ahⁿ vwa-ya-ZHAHⁿ',
    'Il a appris le métier en ___. (voyager · nous voyageons)',
    "Le e de voyageons reste devant -ant : voyageant garde le son [ʒ]. EN: keep the e before -ant.",
    ['orthographe']),
  gap(1638, 'Elle a répondu en choisissant ses mots.', 'She answered, choosing her words.',
    '/ɛ.la ʁe.pɔ̃.dy ɑ̃ ʃwa.zi.sɑ̃ se mo/', 'eh-la ray-pohⁿ-DÜ | ahⁿ shwa-zee-sahⁿ say MOH',
    'Elle a répondu en ___ ses mots. (choisir · nous choisissons)',
    "Nous choisissons, donc choisissant : le -iss- du nous reste. EN: the -iss- of nous stays.",
    ['ir'], FCVDR),
];

/* ── ACT 3 · TROIS FORMES À PART, ET QUELQUES AJOUTS (.1640-.1659) ────────── */

export const ACT3_ROWS: Row[] = [
  conj(1640, 'en ayant', 'having / by having', '/ɑ̃.nɛ.jɑ̃/', 'ahⁿ-neh-YAHⁿ', 'avoir', ['a-part'], FCVDR),
  conj(1641, 'en étant', 'being / by being', '/ɑ̃.ne.tɑ̃/', 'ahⁿ-nay-TAHⁿ', 'être', ['a-part']),
  conj(1642, 'en sachant', 'knowing / by knowing', '/ɑ̃ sa.ʃɑ̃/', 'ahⁿ sa-SHAHⁿ', 'savoir', ['a-part']),
  sent(1643, 'En ayant un peu de patience, tu y arriveras.', 'With a little patience, you will get there.',
    '/ɑ̃.nɛ.jɑ̃ œ̃ pø də pa.sjɑ̃s ty i a.ʁi.və.ʁa/', 'ahⁿ-neh-yahⁿ uhⁿ puh duh pa-SYAHⁿS | tü ee a-ree-vuh-RA', ['a-part']),
  sent(1644, 'En étant poli, on obtient souvent plus.', 'By being polite, you often get more.',
    '/ɑ̃.ne.tɑ̃ pɔ.li ɔ̃.nɔp.tjɛ̃ su.vɑ̃ plys/', 'ahⁿ-nay-tahⁿ po-LEE | ohⁿ-nop-TYEHⁿ | soo-vahⁿ PLÜS', ['a-part'], FCVDR),
  sent(1645, "En sachant cela, j'aurais agi autrement.", 'Had I known that, I would have acted differently.',
    '/ɑ̃ sa.ʃɑ̃ sə.la ʒo.ʁɛ.za.ʒi o.tʁə.mɑ̃/', 'ahⁿ sa-shahⁿ suh-LA | zhoh-reh-za-ZHEE oh-truh-MAHⁿ', ['a-part', 'condition']),
  sent(1646, "En me levant, j'ai vu la neige.", 'When I got up, I saw the snow.',
    '/ɑ̃ mə lə.vɑ̃ ʒe vy la nɛʒ/', 'ahⁿ muh luh-VAHⁿ | zhay vü la NEHZH', ['pronominal'], FCVDR),
  sent(1647, 'Tu te sentiras mieux en te couchant plus tôt.', 'You will feel better if you go to bed earlier.',
    '/ty tə sɑ̃.ti.ʁa mjø ɑ̃ tə ku.ʃɑ̃ ply to/', 'tü tuh sahⁿ-tee-RA MYUH | ahⁿ tuh koo-shahⁿ plü TOH', ['pronominal']),
  sent(1648, "Il s'est coupé en se rasant.", 'He cut himself shaving.',
    '/il sɛ ku.pe ɑ̃ sə ʁa.zɑ̃/', 'eel seh koo-PAY | ahⁿ suh ra-ZAHⁿ', ['pronominal']),
  sent(1649, 'Nous avons ri en nous rappelant ce voyage.', 'We laughed as we remembered that trip.',
    '/nu.za.vɔ̃ ʁi ɑ̃ nu ʁa.pə.lɑ̃ sə vwa.jaʒ/', 'noo-za-vohⁿ REE | ahⁿ noo ra-puh-LAHⁿ | suh vwa-YAZH', ['pronominal']),
  sent(1650, 'Il est parti en ne disant rien.', 'He left, saying nothing.',
    '/i.lɛ paʁ.ti ɑ̃ nə di.zɑ̃ ʁjɛ̃/', 'ee-leh par-TEE | ahⁿ nuh dee-zahⁿ RYEHⁿ', ['negation'], FCVDR),
  sent(1651, 'Il est parti sans rien dire.', 'He left without a word.',
    '/i.lɛ paʁ.ti sɑ̃ ʁjɛ̃ diʁ/', 'ee-leh par-TEE | sahⁿ ryehⁿ DEER', ['negation', 'contraste']),
  sent(1652, 'En ne sachant pas quoi répondre, elle a souri.', 'Not knowing what to answer, she smiled.',
    '/ɑ̃ nə sa.ʃɑ̃ pa kwa ʁe.pɔ̃dʁ ɛ.la su.ʁi/', 'ahⁿ nuh sa-shahⁿ PA | kwa ray-POHⁿDR | eh-la soo-REE', ['negation', 'a-part']),
  sent(1653, "On s'est perdus en n'écoutant pas le GPS.", 'We got lost by not listening to the GPS.',
    '/ɔ̃ sɛ pɛʁ.dy ɑ̃ ne.ku.tɑ̃ pa lə ʒe.pe.ɛs/', 'ohⁿ seh pehr-DÜ | ahⁿ nay-koo-tahⁿ PA | luh zhay-pay-ESS', ['negation']),
  sent(1654, "En lui parlant, j'ai compris son problème.", 'By talking to him, I understood his problem.',
    '/ɑ̃ lɥi paʁ.lɑ̃ ʒe kɔ̃.pʁi sɔ̃ pʁɔ.blɛm/', 'ahⁿ lwee par-LAHⁿ | zhay kohⁿ-PREE | sohⁿ pro-BLEM', ['pronom']),
  sent(1655, "En en parlant avec elle, j'ai changé d'avis.", 'By talking it over with her, I changed my mind.',
    '/ɑ̃.nɑ̃ paʁ.lɑ̃ a.vɛk ɛl ʒe ʃɑ̃.ʒe da.vi/', 'ahⁿ-nahⁿ par-lahⁿ a-vek EL | zhay shahⁿ-zhay da-VEE', ['pronom']),
  sent(1656, 'En ayant fini plus tôt, elle a pu nous aider.', 'Having finished earlier, she was able to help us.',
    '/ɑ̃.nɛ.jɑ̃ fi.ni ply to ɛ.la py nu.ze.de/', 'ahⁿ-neh-yahⁿ fee-nee plü TOH | eh-la pü noo-zay-DAY', ['passe', 'reconnaissance']),
  sent(1657, 'Après avoir fini, elle nous a aidés.', 'After finishing, she helped us.',
    '/a.pʁɛ.za.vwaʁ fi.ni ɛl nu.za e.de/', 'a-preh-za-vwar fee-NEE | el noo-za ay-DAY', ['passe', 'contraste']),
  rule(1658, 'Avoir, être, savoir : ayant, étant, sachant.', 'Avoir, être, savoir: ayant, étant, sachant.',
    '/a.vwaʁ ɛtʁ sa.vwaʁ ɛ.jɑ̃ e.tɑ̃ sa.ʃɑ̃/', 'a-VWAR | EHTR | sa-VWAR | eh-YAHⁿ | ay-TAHⁿ | sa-SHAHⁿ',
    'Quels sont les trois verbes à part ?',
    "Avoir, être et savoir : ayant, étant, sachant. Pour eux, le nous du présent ne sert pas.",
    ['a-part']),
  gap(1659, "Elle s'est fait mal en se penchant.", 'She hurt herself leaning over.',
    '/ɛl sɛ fɛ mal ɑ̃ sə pɑ̃.ʃɑ̃/', 'el seh feh MAL | ahⁿ suh pahⁿ-SHAHⁿ',
    "Elle s'est fait mal en ___. (se pencher · avec elle)",
    "Le pronom suit le sujet : elle, donc se. EN: the pronoun matches the subject.",
    ['pronominal'], FCVDR),
];

/* ── ACT 4 · EN MÊME TEMPS (.1660-.1674) ──────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1660, 'Ne téléphone jamais en conduisant.', 'Never phone while driving.',
    '/nə te.le.fɔn ʒa.mɛ ɑ̃ kɔ̃.dɥi.zɑ̃/', 'nuh tay-lay-FONN zha-MEH | ahⁿ kohⁿ-dwee-ZAHⁿ', ['simultane'], FCVDR),
  sent(1661, 'Il chante en se douchant.', 'He sings in the shower.',
    '/il ʃɑ̃t ɑ̃ sə du.ʃɑ̃/', 'eel SHAHⁿT | ahⁿ suh doo-SHAHⁿ', ['simultane', 'paire']),
  sent(1662, "Il chante pendant qu'il se douche.", 'He sings while he showers.',
    '/il ʃɑ̃t pɑ̃.dɑ̃ kil sə duʃ/', 'eel SHAHⁿT | pahⁿ-dahⁿ keel suh DOOSH', ['simultane', 'paire', 'clause']),
  sent(1663, "En arrivant à la gare, j'ai acheté un billet.", 'When I got to the station, I bought a ticket.',
    '/ɑ̃.na.ʁi.vɑ̃ a la ɡaʁ ʒe aʃ.te œ̃ bi.jɛ/', 'ahⁿ-na-ree-vahⁿ a la GAR | zhay ash-TAY uhⁿ bee-YEH', ['moment'], FCVDR),
  sent(1664, 'Quand je suis arrivé à la gare, le train était parti.', 'When I got to the station, the train had left.',
    '/kɑ̃ ʒə sɥi.za.ʁi.ve a la ɡaʁ lə tʁɛ̃ e.tɛ paʁ.ti/', 'kahⁿ zhuh swee-za-ree-VAY a la GAR | luh trehⁿ ay-teh par-TEE', ['moment', 'clause']),
  sent(1665, 'En ouvrant la porte, elle a entendu la musique.', 'As she opened the door, she heard the music.',
    '/ɑ̃.nu.vʁɑ̃ la pɔʁt ɛ.la ɑ̃.tɑ̃.dy la my.zik/', 'ahⁿ-noo-vrahⁿ la PORT | eh-la ahⁿ-tahⁿ-DÜ la mü-ZEEK', ['moment']),
  sent(1666, "Je prends des notes en écoutant le cours.", 'I take notes while listening to the lecture.',
    '/ʒə pʁɑ̃ de nɔt ɑ̃.ne.ku.tɑ̃ lə kuʁ/', 'zhuh prahⁿ day NOT | ahⁿ-nay-koo-tahⁿ luh KOOR', ['simultane']),
  sent(1667, 'Pendant que le prof parle, les étudiants prennent des notes.', 'While the teacher talks, the students take notes.',
    '/pɑ̃.dɑ̃ kə lə pʁɔf paʁl le.ze.ty.djɑ̃ pʁɛn de nɔt/', 'pahⁿ-dahⁿ kuh luh PROF PARL | lay-zay-tü-DYAHⁿ | PRENN day NOT', ['simultane', 'clause']),
  sent(1668, 'Elle révise tout en écoutant de la musique.', 'She revises while listening to music.',
    '/ɛl ʁe.viz tu.tɑ̃.ne.ku.tɑ̃ də la my.zik/', 'el ray-VEEZ | too-tahⁿ-nay-koo-TAHⁿ | duh la mü-ZEEK', ['simultane', 'tout-en']),
  sent(1669, 'Nous avons discuté en marchant le long du canal.', 'We chatted as we walked along the canal.',
    '/nu.za.vɔ̃ dis.ky.te ɑ̃ maʁ.ʃɑ̃ lə lɔ̃ dy ka.nal/', 'noo-za-vohⁿ dees-kü-TAY | ahⁿ mar-SHAHⁿ | luh lohⁿ dü ka-NAL', ['simultane'], FCVDR),
  sent(1670, 'En traversant la rue, regarde des deux côtés.', 'When you cross the road, look both ways.',
    '/ɑ̃ tʁa.vɛʁ.sɑ̃ la ʁy ʁə.ɡaʁd de dø ko.te/', 'ahⁿ tra-vehr-sahⁿ la RÜ | ruh-GARD day deu ko-TAY', ['moment', 'imperatif']),
  sent(1671, "Je l'ai croisé en sortant de la boulangerie.", 'I ran into him as I was coming out of the bakery.',
    '/ʒə le kʁwa.ze ɑ̃ sɔʁ.tɑ̃ də la bu.lɑ̃ʒ.ʁi/', 'zhuh lay krwa-ZAY | ahⁿ sor-tahⁿ duh la boo-lahⁿzh-REE', ['moment', 'sujet']),
  gap(1672, 'Elle a pleuré en lisant ta lettre.', 'She cried as she read your letter.',
    '/ɛ.la plœ.ʁe ɑ̃ li.zɑ̃ ta lɛtʁ/', 'eh-la pluh-RAY | ahⁿ lee-zahⁿ ta LETR',
    'Elle a pleuré en ___ ta lettre. (lire · pendant la lecture)',
    "Même sujet, même moment : en lisant. EN: same subject, same time.",
    ['simultane'], FCVDR),
  rule(1673, 'Même sujet, même moment : le gérondif. Deux sujets : pendant que.', 'Same subject, same time: the gérondif. Two subjects: pendant que.',
    '/mɛm sy.ʒɛ mɛm mɔ.mɑ̃ lə ʒe.ʁɔ̃.dif dø sy.ʒɛ pɑ̃.dɑ̃ kə/', 'mem sü-ZHEH | mem mo-MAHⁿ | luh zhay-rohⁿ-DEEF | deu sü-ZHEH | pahⁿ-dahⁿ KUH',
    'Pendant que tu cuisines, je mets la table : peut-on dire en cuisinant ?',
    "Non : tu cuisines, je mets la table. Deux sujets, donc pendant que reste.",
    ['simultane', 'bascule']),
  sent(1674, 'Elle lit le journal en prenant son petit-déjeuner.', 'She reads the paper while having breakfast.',
    '/ɛl li lə ʒuʁ.nal ɑ̃ pʁə.nɑ̃ sɔ̃ pə.ti.de.ʒœ.ne/', 'el lee luh zhoor-NAL | ahⁿ pruh-nahⁿ sohⁿ puh-tee-day-zheu-NAY', ['simultane']),
];

/* ── ACT 5 · COMMENT ? LA MANIÈRE ET LE MOYEN (.1676-.1689) ──────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1676, 'Elle est partie en claquant la porte.', 'She left, slamming the door.',
    '/ɛ.lɛ paʁ.ti ɑ̃ kla.kɑ̃ la pɔʁt/', 'eh-leh par-TEE | ahⁿ kla-kahⁿ la PORT', ['maniere'], FCVDR),
  sent(1677, "J'ai payé mes études en travaillant le soir.", 'I paid for my studies by working in the evenings.',
    '/ʒe pɛ.je me.ze.tyd ɑ̃ tʁa.va.jɑ̃ lə swaʁ/', 'zhay peh-YAY may-zay-TÜD | ahⁿ tra-va-yahⁿ luh SWAR', ['moyen'], FCVDR),
  sent(1678, 'On apprend une langue en la parlant.', 'You learn a language by speaking it.',
    '/ɔ̃.na.pʁɑ̃ yn lɑ̃ɡ ɑ̃ la paʁ.lɑ̃/', 'ohⁿ-na-PRAHⁿ ün LAHⁿG | ahⁿ la par-LAHⁿ', ['moyen', 'pronom']),
  sent(1679, "C'est en forgeant qu'on devient forgeron.", 'Practice makes perfect.',
    '/sɛ.tɑ̃ fɔʁ.ʒɑ̃ kɔ̃ də.vjɛ̃ fɔʁ.ʒə.ʁɔ̃/', 'seh-tahⁿ for-ZHAHⁿ | kohⁿ duh-vyehⁿ for-zhuh-ROHⁿ', ['moyen', 'proverbe'], FCVDR),
  sent(1680, 'Il gagne sa vie en donnant des cours de guitare.', 'He earns his living by giving guitar lessons.',
    '/il ɡaɲ sa vi ɑ̃ dɔ.nɑ̃ de kuʁ də ɡi.taʁ/', 'eel GANY sa VEE | ahⁿ do-nahⁿ day KOOR | duh ghee-TAR', ['moyen']),
  sent(1681, 'Il travaille en écoutant de la musique.', 'He works while listening to music.',
    '/il tʁa.vaj ɑ̃.ne.ku.tɑ̃ də la my.zik/', 'eel tra-VYE | ahⁿ-nay-koo-tahⁿ duh la mü-ZEEK', ['simultane', 'contraste']),
  sent(1682, 'Elle a répondu en souriant.', 'She answered with a smile on her face.',
    '/ɛ.la ʁe.pɔ̃.dy ɑ̃ su.ʁi.jɑ̃/', 'eh-la ray-pohⁿ-DÜ | ahⁿ soo-ree-YAHⁿ', ['maniere']),
  sent(1683, 'Elle a répondu avec un sourire.', 'She answered with a smile.',
    '/ɛ.la ʁe.pɔ̃.dy a.vɛ.kœ̃ su.ʁiʁ/', 'eh-la ray-pohⁿ-DÜ | a-veh-kuhⁿ soo-REER', ['maniere', 'contraste']),
  sent(1684, 'Tu économiseras en cuisinant toi-même.', 'You will save money by cooking for yourself.',
    '/ty e.kɔ.nɔ.miz.ʁa ɑ̃ kɥi.zi.nɑ̃ twa.mɛm/', 'tü ay-ko-no-meez-RA | ahⁿ kwee-zee-NAHⁿ | twa-MEM', ['moyen']),
  sent(1685, 'Comment as-tu trouvé ce logement ? En demandant à tout le monde.', 'How did you find this flat? By asking everyone.',
    '/kɔ.mɑ̃ a ty tʁu.ve sə lɔʒ.mɑ̃ ɑ̃ də.mɑ̃.dɑ̃ a tu lə mɔ̃d/', 'ko-mahⁿ a tü troo-VAY | suh lozh-MAHⁿ | ahⁿ duh-mahⁿ-dahⁿ a too luh MOHⁿD', ['moyen', 'reponse'], FCVDR),
  sent(1686, 'Ils ont traversé le parc en courant.', 'They ran across the park.',
    '/il.zɔ̃ tʁa.vɛʁ.se lə paʁk ɑ̃ ku.ʁɑ̃/', 'eel-zohⁿ tra-vehr-SAY | luh PARK | ahⁿ koo-RAHⁿ', ['maniere']),
  gap(1687, "J'ai perdu trois kilos en allant au travail à vélo.", 'I lost three kilos by cycling to work.',
    '/ʒe pɛʁ.dy tʁwa ki.lo ɑ̃.na.lɑ̃ o tʁa.vaj a ve.lo/', 'zhay pehr-DÜ trwa kee-LOH | ahⁿ-na-lahⁿ oh tra-VYE | a vay-LOH',
    "J'ai perdu trois kilos en ___ au travail à vélo. (aller · le moyen)",
    "Aller : nous allons, donc allant. Le gérondif dit comment. EN: the means.",
    ['moyen']),
  rule(1688, 'Le gérondif répond à la question comment ?', 'The gérondif answers the question how?',
    '/lə ʒe.ʁɔ̃.dif ʁe.pɔ̃ a la kɛs.tjɔ̃ kɔ.mɑ̃/', 'luh zhay-rohⁿ-DEEF | ray-POHⁿ a la kes-TYOHⁿ | ko-MAHⁿ',
    'Comment a-t-il payé ses études ?',
    "En travaillant le soir : le gérondif dit la manière ou le moyen. Par ou avec prennent un nom, pas un verbe.",
    ['moyen', 'maniere']),
  sent(1689, "Elle s'est fait des amis en s'inscrivant au club de course.", 'She made friends by joining the running club.',
    '/ɛl sɛ fɛ de.za.mi ɑ̃ sɛ̃s.kʁi.vɑ̃ o klœb də kuʁs/', 'el seh feh day-za-MEE | ahⁿ sehⁿs-kree-VAHⁿ | oh kluhb duh KOORS', ['moyen', 'pronominal']),
];

/* ── ACT 6 · SI : LA CONDITION (.1694-.1706) ─────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1694, 'En partant tôt, tu éviteras les bouchons.', 'If you leave early, you will avoid the traffic.',
    '/ɑ̃ paʁ.tɑ̃ to ty e.vi.tə.ʁa le bu.ʃɔ̃/', 'ahⁿ par-tahⁿ TOH | tü ay-vee-tuh-RA lay boo-SHOHⁿ', ['condition', 'paire'], FCVDR),
  sent(1695, 'Si tu pars tôt, tu éviteras les bouchons.', 'Leave early and you will avoid the traffic.',
    '/si ty paʁ to ty e.vi.tə.ʁa le bu.ʃɔ̃/', 'see tü par TOH | tü ay-vee-tuh-RA lay boo-SHOHⁿ', ['condition', 'paire', 'clause']),
  sent(1696, "En réservant aujourd'hui, tu paieras moins cher.", 'By booking today, you will pay less.',
    '/ɑ̃ ʁe.zɛʁ.vɑ̃ o.ʒuʁ.dɥi ty pɛ.ʁa mwɛ̃ ʃɛʁ/', 'ahⁿ ray-zehr-vahⁿ oh-zhoor-DWEE | tü peh-RA mwehⁿ SHEHR', ['condition']),
  sent(1697, 'En cherchant bien, tu trouveras un logement.', 'If you look hard, you will find somewhere to live.',
    '/ɑ̃ ʃɛʁ.ʃɑ̃ bjɛ̃ ty tʁu.və.ʁa œ̃ lɔʒ.mɑ̃/', 'ahⁿ shehr-shahⁿ BYEHⁿ | tü troo-vuh-RA uhⁿ lozh-MAHⁿ', ['condition']),
  sent(1698, 'En prenant le train, tu gagnerais deux heures.', 'If you took the train, you would save two hours.',
    '/ɑ̃ pʁə.nɑ̃ lə tʁɛ̃ ty ɡa.ɲə.ʁɛ dø.zœʁ/', 'ahⁿ pruh-nahⁿ luh TREHⁿ | tü ga-nyuh-REH deu-ZUHR', ['condition', 'conditionnel'], FCVDR),
  sent(1699, 'Si tu prenais le train, tu gagnerais deux heures.', 'Were you to take the train, you would save two hours.',
    '/si ty pʁə.nɛ lə tʁɛ̃ ty ɡa.ɲə.ʁɛ dø.zœʁ/', 'see tü pruh-neh luh TREHⁿ | tü ga-nyuh-REH deu-ZUHR', ['condition', 'conditionnel', 'clause']),
  sent(1700, "En t'inscrivant avant vendredi, tu auras une réduction.", 'If you sign up before Friday, you will get a discount.',
    '/ɑ̃ tɛ̃s.kʁi.vɑ̃ a.vɑ̃ vɑ̃.dʁə.di ty o.ʁa yn ʁe.dyk.sjɔ̃/', 'ahⁿ tehⁿs-kree-vahⁿ a-vahⁿ vahⁿ-druh-DEE | tü oh-RA ün ray-dük-SYOHⁿ', ['condition', 'pronominal']),
  sent(1701, "Si tu pars tôt, je t'accompagnerai.", 'If you leave early, I will go with you.',
    '/si ty paʁ to ʒə ta.kɔ̃.pa.ɲə.ʁe/', 'see tü par TOH | zhuh ta-kohⁿ-pa-nyuh-RAY', ['condition', 'deux-sujets', 'clause']),
  sent(1702, 'En appuyant deux fois, tu arrêtes la machine.', 'By pressing twice, you stop the machine.',
    '/ɑ̃.na.pɥi.jɑ̃ dø fwa ty a.ʁɛt la ma.ʃin/', 'ahⁿ-na-pwee-yahⁿ deu FWA | tü a-RET la ma-SHEEN', ['condition', 'sujet']),
  sent(1703, 'En lisant la notice, tu aurais compris.', 'If you had read the instructions, you would have understood.',
    '/ɑ̃ li.zɑ̃ la nɔ.tis ty o.ʁɛ kɔ̃.pʁi/', 'ahⁿ lee-zahⁿ la no-TEESS | tü oh-reh kohⁿ-PREE', ['condition', 'irreel']),
  rule(1704, 'Le gérondif peut dire si, quand le sujet reste le même.', 'The gérondif can mean si, when the subject stays the same.',
    '/lə ʒe.ʁɔ̃.dif pø diʁ si kɑ̃ lə sy.ʒɛ ʁɛst lə mɛm/', 'luh zhay-rohⁿ-DEEF | puh deer SEE | kahⁿ luh sü-ZHEH | rest luh MEM',
    'En partant tôt, tu éviteras les bouchons : quelle conjonction se cache dedans ?',
    "Si : si tu pars tôt. Le verbe principal dit la suite, au futur, au présent, à l'impératif ou au conditionnel.",
    ['condition']),
  gap(1705, 'En arrivant avant huit heures, tu auras une place.', 'If you arrive before eight, you will get a seat.',
    '/ɑ̃.na.ʁi.vɑ̃ a.vɑ̃ ɥi.tœʁ ty o.ʁa yn plas/', 'ahⁿ-na-ree-vahⁿ a-vahⁿ wee-TUHR | tü oh-RA ün PLASS',
    'En ___ avant huit heures, tu auras une place. (arriver · si tu arrives)',
    "Une condition, un seul sujet : en arrivant. EN: a condition, one subject.",
    ['condition'], FCVDR),
  sent(1706, "En t'entraînant tous les jours, tu progresserais vite.", 'If you practised every day, you would improve quickly.',
    '/ɑ̃ tɑ̃.tʁɛ.nɑ̃ tu le ʒuʁ ty pʁɔ.ɡʁɛ.sə.ʁɛ vit/', 'ahⁿ tahⁿ-treh-nahⁿ too lay ZHOOR | tü pro-greh-suh-REH VEET', ['condition', 'conditionnel']),
];

/* ── ACT 7 · PARCE QUE : LA CAUSE (.1710-.1721) ──────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1710, 'En voulant bien faire, il a tout compliqué.', 'By trying to do the right thing, he made it all more complicated.',
    '/ɑ̃ vu.lɑ̃ bjɛ̃ fɛʁ i.la tu kɔ̃.pli.ke/', 'ahⁿ voo-lahⁿ byehⁿ FEHR | ee-la too kohⁿ-plee-KAY', ['cause']),
  sent(1711, "Parce qu'il voulait aider, il a tout cassé.", 'Because he wanted to help, he broke everything.',
    '/paʁs kil vu.lɛ e.de i.la tu ka.se/', 'pars keel voo-leh ay-DAY | ee-la too ka-SAY', ['cause', 'clause']),
  sent(1712, "En oubliant son passeport, elle a raté l'avion.", 'By forgetting her passport, she missed the plane.',
    '/ɑ̃.nu.bli.jɑ̃ sɔ̃ pas.pɔʁ ɛ.la ʁa.te la.vjɔ̃/', 'ahⁿ-noo-blee-yahⁿ sohⁿ pass-POR | eh-la ra-TAY la-VYOHⁿ', ['cause'], FCVDR),
  sent(1713, 'En travaillant trop, il est tombé malade.', 'Working too hard made him ill.',
    '/ɑ̃ tʁa.va.jɑ̃ tʁo i.lɛ tɔ̃.be ma.lad/', 'ahⁿ tra-va-yahⁿ TROH | ee-leh tohⁿ-BAY ma-LAD', ['cause', 'contraste']),
  sent(1714, "En glissant sur le verglas, il s'est cassé la jambe.", 'He slipped on the ice and broke his leg.',
    '/ɑ̃ ɡli.sɑ̃ syʁ lə vɛʁ.ɡla il sɛ ka.se la ʒɑ̃b/', 'ahⁿ glee-sahⁿ sür luh vehr-GLA | eel seh ka-SAY la ZHAHⁿB', ['cause']),
  sent(1715, "En le voyant pâle, j'ai compris qu'il était malade.", 'Seeing how pale he was, I realised he was ill.',
    '/ɑ̃ lə vwa.jɑ̃ pal ʒe kɔ̃.pʁi ki.le.tɛ ma.lad/', 'ahⁿ luh vwa-yahⁿ PAL | zhay kohⁿ-PREE | kee-lay-teh ma-LAD', ['cause', 'moment']),
  sent(1716, "Comme elle avait oublié son passeport, elle a raté l'avion.", 'As she had forgotten her passport, she missed the plane.',
    '/kɔm ɛ.la.vɛ.tu.bli.je sɔ̃ pas.pɔʁ ɛ.la ʁa.te la.vjɔ̃/', 'kom eh-la-veh-too-blee-YAY sohⁿ pass-POR | eh-la ra-TAY la-VYOHⁿ', ['cause', 'clause']),
  sent(1717, 'En criant si fort, tu as réveillé le bébé.', 'By shouting so loudly, you woke the baby.',
    '/ɑ̃ kʁi.jɑ̃ si fɔʁ ty a ʁe.vɛ.je lə be.be/', 'ahⁿ kree-yahⁿ see FOR | tü a ray-veh-YAY luh bay-BAY', ['cause'], FCVDR),
  sent(1718, "En refusant l'offre, ils ont perdu le contrat.", 'By turning down the offer, they lost the contract.',
    '/ɑ̃ ʁə.fy.zɑ̃ lɔfʁ il.zɔ̃ pɛʁ.dy lə kɔ̃.tʁa/', 'ahⁿ ruh-fü-zahⁿ LOFR | eel-zohⁿ pehr-DÜ luh kohⁿ-TRA', ['cause']),
  gap(1719, "Elle s'est brûlé la main en sortant le plat du four.", 'She burned her hand taking the dish out of the oven.',
    '/ɛl sɛ bʁy.le la mɛ̃ ɑ̃ sɔʁ.tɑ̃ lə pla dy fuʁ/', 'el seh brü-LAY la MEHⁿ | ahⁿ sor-tahⁿ luh pla dü FOOR',
    "Elle s'est brûlé la main en ___ le plat du four. (sortir · ce qui a causé la brûlure)",
    "Nous sortons, donc sortant : le geste qui a causé la brûlure. EN: the cause.",
    ['cause'], FCVDR),
  rule(1720, "Un gérondif, plusieurs sens : c'est la phrase qui choisit.", 'One gérondif, several meanings: the sentence chooses.',
    '/œ̃ ʒe.ʁɔ̃.dif ply.zjœʁ sɑ̃s sɛ la fʁaz ki ʃwa.zi/', 'uhⁿ zhay-rohⁿ-DEEF | plü-zyuhr SAHⁿS | seh la FRAZ kee shwa-ZEE',
    "En le voyant pâle, j'ai compris : le temps ou la cause ?",
    "Les deux : quand je l'ai vu, et parce que je l'ai vu pâle. Le contexte tranche, pas la forme.",
    ['cause', 'sens']),
  sent(1721, "En arrivant en retard, tu as manqué l'essentiel.", 'By arriving late, you missed the main part.',
    '/ɑ̃.na.ʁi.vɑ̃ ɑ̃ ʁə.taʁ ty a mɑ̃.ke le.sɑ̃.sjɛl/', 'ahⁿ-na-ree-vahⁿ ahⁿ ruh-TAR | tü a mahⁿ-KAY lay-sahⁿ-SYEL', ['cause']),
];

/* ── ACT 8 · TOUT EN : L'OPPOSITION (.1725-.1736) ────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1725, "Tout en sachant que c'était risqué, il a accepté.", 'Although he knew it was risky, he accepted.',
    '/tu.tɑ̃ sa.ʃɑ̃ kə se.tɛ ʁis.ke i.la ak.sɛp.te/', 'too-tahⁿ sa-shahⁿ kuh say-teh rees-KAY | ee-la ak-sep-TAY', ['opposition'], FCVDR),
  sent(1726, "Bien qu'il sache que c'est risqué, il accepte.", 'Although he knows it is risky, he accepts.',
    '/bjɛ̃ kil saʃ kə sɛ ʁis.ke il ak.sɛpt/', 'byehⁿ keel SASH | kuh seh rees-KAY | eel ak-SEPT', ['opposition', 'clause']),
  sent(1727, "Tout en étant d'accord sur le fond, je conteste la méthode.", 'While I agree on the substance, I dispute the method.',
    '/tu.tɑ̃.ne.tɑ̃ da.kɔʁ syʁ lə fɔ̃ ʒə kɔ̃.tɛst la me.tɔd/', 'too-tahⁿ-nay-tahⁿ da-KOR sür luh FOHⁿ | zhuh kohⁿ-TEST la may-TOD', ['opposition']),
  sent(1728, 'Tout en connaissant le chemin, je prends le GPS.', 'Even though I know the way, I use the GPS.',
    '/tu.tɑ̃ kɔ.nɛ.sɑ̃ lə ʃə.mɛ̃ ʒə pʁɑ̃ lə ʒe.pe.ɛs/', 'too-tahⁿ ko-neh-sahⁿ luh shuh-MEHⁿ | zhuh prahⁿ luh zhay-pay-ESS', ['opposition', 'paire']),
  sent(1729, "Tout en saluant l'effort, le jury a refusé le projet.", 'While praising the effort, the jury turned the project down.',
    '/tu.tɑ̃ sa.lɥɑ̃ le.fɔʁ lə ʒy.ʁi a ʁə.fy.ze lə pʁɔ.ʒɛ/', 'too-tahⁿ sa-lwahⁿ lay-FOR | luh zhü-REE a ruh-fü-ZAY luh pro-ZHEH', ['opposition']),
  sent(1730, 'Elle travaille tout en suivant des cours du soir.', 'She works and takes evening classes at the same time.',
    '/ɛl tʁa.vaj tu.tɑ̃ sɥi.vɑ̃ de kuʁ dy swaʁ/', 'el tra-VYE | too-tahⁿ swee-vahⁿ day koor dü SWAR', ['tout-en', 'simultane']),
  sent(1731, 'Tout en habitant à deux pas, il arrive toujours en retard.', 'Although he lives just round the corner, he is always late.',
    '/tu.tɑ̃.na.bi.tɑ̃ a dø pa i.la.ʁiv tu.ʒuʁ ɑ̃ ʁə.taʁ/', 'too-tahⁿ-na-bee-tahⁿ a deu PA | ee-la-REEV too-zhoor ahⁿ ruh-TAR', ['opposition'], FCVDR),
  sent(1732, "Tout en se disant prêt à négocier, le ministre n'a rien cédé.", 'While saying he was ready to negotiate, the minister gave nothing away.',
    '/tu.tɑ̃ sə di.zɑ̃ pʁɛ a ne.ɡɔ.sje lə mi.nistʁ na ʁjɛ̃ se.de/', 'too-tahⁿ suh dee-zahⁿ PREH | a nay-go-SYAY | luh mee-NEESTR na ryehⁿ say-DAY', ['opposition', 'presse']),
  rule(1733, "Tout en souligne que deux choses vont ensemble, même quand elles s'opposent.", 'Tout en stresses that two things go together, even when they clash.',
    '/tu.tɑ̃ su.liɲ kə dø ʃoz vɔ̃.tɑ̃.sɑ̃bl mɛm kɑ̃.tɛl sɔ.pɔz/', 'too-TAHⁿ soo-LEENY | kuh deu SHOHZ vohⁿ-tahⁿ-SAHⁿBL | mem kahⁿ-tel so-POHZ',
    "Tout en sachant que c'était risqué, il a accepté : quelle conjonction dit la même chose ?",
    "Bien que, avec le subjonctif, ou alors que, avec l'indicatif. Tout en garde un seul sujet.",
    ['opposition']),
  sent(1734, "Il a accepté alors qu'il savait que c'était risqué.", 'He accepted even though he knew it was risky.',
    '/i.la ak.sɛp.te a.lɔʁ kil sa.vɛ kə se.tɛ ʁis.ke/', 'ee-la ak-sep-TAY | a-lor keel sa-VEH | kuh say-teh rees-KAY', ['opposition', 'clause']),
  gap(1735, "Tout en voulant partir, elle est restée jusqu'à la fin.", 'Although she wanted to leave, she stayed until the end.',
    '/tu.tɑ̃ vu.lɑ̃ paʁ.tiʁ ɛ.lɛ ʁɛs.te ʒys.ka la fɛ̃/', 'too-tahⁿ voo-lahⁿ par-TEER | eh-leh res-TAY | zhüs-ka la FEHⁿ',
    "Tout en ___ partir, elle est restée jusqu'à la fin. (vouloir · une opposition)",
    "Nous voulons, donc voulant. Elle voulait partir, et pourtant elle est restée. EN: wanting to, yet staying.",
    ['opposition'], FCVDR),
  sent(1736, 'Tout en critiquant le projet, il a voté pour.', 'While criticising the project, he voted for it.',
    '/tu.tɑ̃ kʁi.ti.kɑ̃ lə pʁɔ.ʒɛ i.la vɔ.te puʁ/', 'too-tahⁿ kree-tee-kahⁿ luh pro-ZHEH | ee-la vo-tay POOR', ['opposition']),
];

/* ── ACT 9 · LE SUJET QUI MANQUE (.1740-.1756) ───────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1740, "En entrant dans le bureau, j'ai vu Marie.", 'As I came into the office, I saw Marie.',
    '/ɑ̃.nɑ̃.tʁɑ̃ dɑ̃ lə by.ʁo ʒe vy ma.ʁi/', 'ahⁿ-nahⁿ-trahⁿ dahⁿ luh bü-ROH | zhay vü ma-REE', ['sujet'], FCVDR),
  sent(1741, "Quand nous sommes entrés, la porte s'est refermée toute seule.", 'When we went in, the door closed by itself.',
    '/kɑ̃ nu sɔm.zɑ̃.tʁe la pɔʁt sɛ ʁə.fɛʁ.me tut sœl/', 'kahⁿ noo som-zahⁿ-TRAY | la PORT seh ruh-fehr-MAY | toot SUHL', ['sujet', 'reparation', 'clause']),
  sent(1742, 'En entrant, nous avons vu la porte se refermer.', 'As we went in, we saw the door close.',
    '/ɑ̃.nɑ̃.tʁɑ̃ nu.za.vɔ̃ vy la pɔʁt sə ʁə.fɛʁ.me/', 'ahⁿ-nahⁿ-TRAHⁿ | noo-za-vohⁿ VÜ | la PORT suh ruh-fehr-MAY', ['sujet', 'reparation']),
  sent(1743, 'En signant le contrat, vous acceptez les conditions.', 'By signing the contract, you accept the terms.',
    '/ɑ̃ si.ɲɑ̃ lə kɔ̃.tʁa vu.zak.sɛp.te le kɔ̃.di.sjɔ̃/', 'ahⁿ see-nyahⁿ luh kohⁿ-TRA | voo-zak-sep-TAY lay kohⁿ-dee-SYOHⁿ', ['sujet', 'reparation'], FCVDR),
  sent(1744, "Si vous signez le contrat, les conditions s'appliquent.", 'If you sign the contract, the terms apply.',
    '/si vu si.ɲe lə kɔ̃.tʁa le kɔ̃.di.sjɔ̃ sa.plik/', 'see voo see-NYAY luh kohⁿ-TRA | lay kohⁿ-dee-SYOHⁿ sa-PLEEK', ['sujet', 'reparation', 'clause']),
  sent(1745, "J'ai croisé Paul en sortant du métro.", 'I ran into Paul as I was coming out of the metro.',
    '/ʒe kʁwa.ze pol ɑ̃ sɔʁ.tɑ̃ dy me.tʁo/', 'zhay krwa-zay POL | ahⁿ sor-tahⁿ dü may-TROH', ['sujet', 'paire'], FCVDR),
  sent(1746, "J'ai croisé Paul qui sortait du métro.", 'I ran into Paul, who was coming out of the metro.',
    '/ʒe kʁwa.ze pol ki sɔʁ.tɛ dy me.tʁo/', 'zhay krwa-zay POL | kee sor-teh dü may-TROH', ['sujet', 'paire', 'relative']),
  sent(1747, "En attendant votre réponse, je vous prie d'agréer mes salutations.", 'I look forward to your reply. Yours faithfully.',
    '/ɑ̃.na.tɑ̃.dɑ̃ vɔtʁ ʁe.pɔ̃s ʒə vu pʁi da.ɡʁe.e me sa.ly.ta.sjɔ̃/', 'ahⁿ-na-tahⁿ-dahⁿ votr ray-POHⁿS | zhuh voo PREE | da-gray-AY may sa-lü-ta-SYOHⁿ', ['sujet', 'formule']),
  sent(1748, "L'appétit vient en mangeant.", 'Appetite comes with eating.',
    '/la.pe.ti vjɛ̃.tɑ̃ mɑ̃.ʒɑ̃/', 'la-pay-TEE | vyehⁿ-tahⁿ mahⁿ-ZHAHⁿ', ['sujet', 'proverbe']),
  sent(1749, "En remplissant le formulaire, j'ai fait une erreur.", 'I made a mistake while filling in the form.',
    '/ɑ̃ ʁɑ̃.pli.sɑ̃ lə fɔʁ.my.lɛʁ ʒe fɛ y.nɛ.ʁœʁ/', 'ahⁿ rahⁿ-plee-sahⁿ luh for-mü-LEHR | zhay feh ü-neh-RUHR', ['sujet', 'reparation']),
  sent(1750, "En arrivant à Montréal, j'ai été hébergée par une amie.", 'When I arrived in Montréal, I was put up by a friend.',
    '/ɑ̃.na.ʁi.vɑ̃ a mɔ̃.ʁe.al ʒe e.te e.bɛʁ.ʒe paʁ y.na.mi/', 'ahⁿ-na-ree-vahⁿ a mohⁿ-ray-AL | zhay ay-TAY ay-behr-ZHAY | par ü-na-MEE', ['sujet', 'reparation']),
  sent(1751, "Quand je suis arrivée à Montréal, une amie m'a hébergée.", 'When I arrived in Montréal, a friend put me up.',
    '/kɑ̃ ʒə sɥi.za.ʁi.ve a mɔ̃.ʁe.al y.na.mi ma e.bɛʁ.ʒe/', 'kahⁿ zhuh swee-za-ree-VAY a mohⁿ-ray-AL | ü-na-MEE ma ay-behr-ZHAY', ['sujet', 'reparation', 'clause'], FCVDR),
  rule(1752, "Deux sujets, c'est une subordonnée : quand, pendant que, si, parce que.", 'Two subjects call for a clause: quand, pendant que, si, parce que.',
    '/dø sy.ʒɛ sɛ.ty.nə syb.ɔʁ.dɔ.ne kɑ̃ pɑ̃.dɑ̃ kə si paʁs kə/', 'deu sü-ZHEH | seh-tün süb-or-do-NAY | KAHⁿ | pahⁿ-dahⁿ KUH | SEE | pars KUH',
    'En entrant, la porte s’est ouverte : comment corriger ?',
    "Change le sujet (en entrant, j'ai vu la porte s'ouvrir) ou passe à une subordonnée (quand je suis entré, la porte s'est ouverte).",
    ['sujet', 'bascule']),
  gap(1753, "En relisant ton courriel, j'ai trouvé deux fautes.", 'Rereading your email, I found two mistakes.',
    '/ɑ̃ ʁə.li.zɑ̃ tɔ̃ ku.ʁjɛl ʒe tʁu.ve dø fot/', 'ahⁿ ruh-lee-zahⁿ tohⁿ koo-RYEL | zhay troo-VAY deu FOHT',
    "En ___ ton courriel, j'ai trouvé deux fautes. (relire · qui relit ?)",
    "Je relis, je trouve : un seul sujet, le gérondif va bien. EN: one subject, so the gérondif works.",
    ['sujet'], FCVDR),
  sent(1754, "Pendant qu'on visitait le musée, il s'est mis à pleuvoir.", 'While we were visiting the museum, it started to rain.',
    '/pɑ̃.dɑ̃ kɔ̃ vi.zi.tɛ lə my.ze il sɛ mi.za plø.vwaʁ/', 'pahⁿ-dahⁿ kohⁿ vee-zee-TEH luh mü-ZAY | eel seh mee-za pluh-VWAR', ['sujet', 'reparation', 'clause']),
  sent(1755, 'En visitant le musée, nous avons vu un tableau de Riopelle.', 'Visiting the museum, we saw a painting by Riopelle.',
    '/ɑ̃ vi.zi.tɑ̃ lə my.ze nu.za.vɔ̃ vy œ̃ ta.blo də ʁjɔ.pɛl/', 'ahⁿ vee-zee-tahⁿ luh mü-ZAY | noo-za-vohⁿ VÜ | uhⁿ ta-BLOH duh ryo-PELL', ['sujet']),
  sent(1756, "En lisant ce rapport, on comprend l'enjeu.", 'Reading this report, you see what is at stake.',
    '/ɑ̃ li.zɑ̃ sə ʁa.pɔʁ ɔ̃ kɔ̃.pʁɑ̃ lɑ̃.ʒø/', 'ahⁿ lee-zahⁿ suh ra-POR | ohⁿ kohⁿ-PRAHⁿ lahⁿ-ZHUH', ['sujet', 'reparation']),
];

/* ── ACT 10 · LA PLACE, LA VIRGULE, LES FAUX AMIS (.1758-.1769) ──────────── */

export const ACT10_ROWS: Row[] = [
  sent(1758, "Je t'appelle en passant devant chez toi.", 'I will call you as I go past your place.',
    '/ʒə ta.pɛl ɑ̃ pa.sɑ̃ də.vɑ̃ ʃe twa/', 'zhuh ta-PELL | ahⁿ pa-sahⁿ duh-vahⁿ shay TWA', ['place', 'passer']),
  sent(1759, "Soit dit en passant, le directeur n'était pas au courant.", 'Incidentally, the director did not know.',
    '/swa di.tɑ̃ pa.sɑ̃ lə di.ʁɛk.tœʁ ne.tɛ pa.zo ku.ʁɑ̃/', 'swa dee-tahⁿ pa-SAHⁿ | luh dee-rek-TUHR | nay-teh pa-zoh koo-RAHⁿ', ['fige']),
  sent(1760, 'Marie, en ouvrant la lettre, a pâli.', 'Marie turned pale as she opened the letter.',
    '/ma.ʁi ɑ̃.nu.vʁɑ̃ la lɛtʁ a pa.li/', 'ma-REE | ahⁿ-noo-vrahⁿ la LETR | a pa-LEE', ['place', 'milieu']),
  sent(1761, 'En ouvrant la lettre, Marie a pâli.', 'Opening the letter, Marie turned pale.',
    '/ɑ̃.nu.vʁɑ̃ la lɛtʁ ma.ʁi a pa.li/', 'ahⁿ-noo-vrahⁿ la LETR | ma-REE a pa-LEE', ['place', 'tete']),
  sent(1762, 'Marie a pâli en ouvrant la lettre.', 'Marie went pale when she opened the letter.',
    '/ma.ʁi a pa.li ɑ̃.nu.vʁɑ̃ la lɛtʁ/', 'ma-REE a pa-LEE | ahⁿ-noo-vrahⁿ la LETR', ['place', 'fin'], FCVDR),
  sent(1763, 'Il est parti en vacances en emportant tout son travail.', 'He went on holiday, taking all his work with him.',
    '/i.lɛ paʁ.ti ɑ̃ va.kɑ̃s ɑ̃.nɑ̃.pɔʁ.tɑ̃ tu sɔ̃ tʁa.vaj/', 'ee-leh par-TEE ahⁿ va-KAHⁿS | ahⁿ-nahⁿ-por-tahⁿ too sohⁿ tra-VYE', ['faux', 'preposition'], FCVDR),
  sent(1764, 'En tant que stagiaire, tu as droit à une carte.', 'As an intern, you are entitled to a card.',
    '/ɑ̃ tɑ̃ kə sta.ʒjɛʁ ty a dʁwa a yn kaʁt/', 'ahⁿ tahⁿ kuh sta-ZHYEHR | tü a DRWA a ün KART', ['faux']),
  rule(1765, "En tout cas n'est pas un gérondif : cas est un nom.", 'En tout cas is not a gérondif: cas is a noun.',
    '/ɑ̃ tu ka nɛ pa.zœ̃ ʒe.ʁɔ̃.dif ka ɛ.tœ̃ nɔ̃/', 'ahⁿ too KA | neh pa-zuhⁿ zhay-rohⁿ-DEEF | KA eh-tuhⁿ NOHⁿ',
    'En tout cas, en tant que, en avant : des gérondifs ?',
    "Non. Un gérondif, c'est en suivi d'un verbe en -ant : en passant, en attendant, en courant.",
    ['faux']),
  rule(1766, 'En tête de phrase, une virgule ; en fin de phrase, souvent aucune.', 'At the start of a sentence, a comma; at the end, often none.',
    '/ɑ̃ tɛt də fʁaz y.nə viʁ.ɡyl ɑ̃ fɛ̃ də fʁaz su.vɑ̃ o.kyn/', 'ahⁿ TET duh FRAZ | ü-nuh veer-GÜL | ahⁿ FEHⁿ duh FRAZ | soo-vahⁿ oh-KÜNN',
    'Il est entré en courant : faut-il une virgule ?',
    "Non : en fin de phrase, le gérondif de manière suit le verbe sans virgule. En tête, il en prend une.",
    ['place', 'virgule']),
  sent(1767, 'En attendant que tu trouves un appartement, tu peux dormir ici.', 'Until you find a flat, you can sleep here.',
    '/ɑ̃.na.tɑ̃.dɑ̃ kə ty tʁuv œ̃.na.paʁ.tə.mɑ̃ ty pø dɔʁ.miʁ i.si/', 'ahⁿ-na-tahⁿ-dahⁿ kuh tü TROOV | uhⁿ-na-par-tuh-MAHⁿ | tü puh dor-meer ee-SEE', ['fige', 'attendre']),
  sent(1768, 'Passe à la boulangerie en rentrant.', 'Stop at the bakery on your way home.',
    '/pas a la bu.lɑ̃ʒ.ʁi ɑ̃ ʁɑ̃.tʁɑ̃/', 'pass a la boo-lahⁿzh-REE | ahⁿ rahⁿ-TRAHⁿ', ['place', 'oral'], FCVDR),
  gap(1769, "C'est en lisant beaucoup qu'on enrichit son vocabulaire.", 'It is by reading a lot that you build your vocabulary.',
    '/sɛ.tɑ̃ li.zɑ̃ bo.ku kɔ̃.nɑ̃.ʁi.ʃi sɔ̃ vɔ.ka.by.lɛʁ/', 'seh-tahⁿ lee-zahⁿ boh-KOO | kohⁿ-nahⁿ-ree-SHEE | sohⁿ vo-ka-bü-LEHR',
    "C'est en ___ beaucoup qu'on enrichit son vocabulaire. (lire · la mise en relief)",
    "C'est en... que met le moyen en valeur, au début de la phrase. EN: c'est en... que highlights the means.",
    ['place', 'relief']),
];

/* ── ACT 11 · TES CONSEILS À UN NOUVEL ARRIVANT (.1775-.1783) ──────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1775, "En t'inscrivant à un cours du soir, tu rencontreras des gens.", 'By signing up for an evening class, you will meet people.',
    '/ɑ̃ tɛ̃s.kʁi.vɑ̃ a œ̃ kuʁ dy swaʁ ty ʁɑ̃.kɔ̃.tʁə.ʁa de ʒɑ̃/', 'ahⁿ tehⁿs-kree-VAHⁿ | a uhⁿ koor dü SWAR | tü rahⁿ-kohⁿ-truh-RA day ZHAHⁿ', ['tache', 'condition'], FCVDR),
  sent(1776, "Apprends le vocabulaire en l'utilisant tout de suite.", 'Learn vocabulary by using it straight away.',
    '/a.pʁɑ̃ lə vɔ.ka.by.lɛʁ ɑ̃ ly.ti.li.zɑ̃ tut.sɥit/', 'a-PRAHⁿ luh vo-ka-bü-LEHR | ahⁿ lü-tee-lee-ZAHⁿ | toot-SWEET', ['tache', 'moyen']),
  sent(1777, 'En sortant de ta zone de confort, tu progresseras plus vite.', 'By stepping out of your comfort zone, you will progress faster.',
    '/ɑ̃ sɔʁ.tɑ̃ də ta zon də kɔ̃.fɔʁ ty pʁɔ.ɡʁɛ.sə.ʁa ply vit/', 'ahⁿ sor-tahⁿ duh ta ZONN duh kohⁿ-FOR | tü pro-greh-suh-RA plü VEET', ['tache', 'condition']),
  sent(1778, "Tout en gardant tes habitudes, ouvre-toi à celles d'ici.", 'While keeping your own habits, open up to the ones here.',
    '/tu.tɑ̃ ɡaʁ.dɑ̃ te.za.bi.tyd u.vʁə.twa a sɛl di.si/', 'too-tahⁿ gar-dahⁿ tay-za-bee-TÜD | oo-vruh-TWA a sel dee-SEE', ['tache', 'opposition'], FCVDR),
  sent(1779, "En regardant des séries en français, j'ai entraîné mon oreille.", 'By watching series in French, I trained my ear.',
    '/ɑ̃ ʁə.ɡaʁ.dɑ̃ de se.ʁi ɑ̃ fʁɑ̃.sɛ ʒe ɑ̃.tʁɛ.ne mɔ̃.nɔ.ʁɛj/', 'ahⁿ ruh-gar-dahⁿ day say-REE | ahⁿ frahⁿ-SEH | zhay ahⁿ-treh-NAY mohⁿ-no-REY', ['tache', 'moyen']),
  sent(1780, 'Tu te sentiras chez toi en fréquentant les cafés du quartier.', 'You will feel at home by going to the neighbourhood cafés.',
    '/ty tə sɑ̃.ti.ʁa ʃe twa ɑ̃ fʁe.kɑ̃.tɑ̃ le ka.fe dy kaʁ.tje/', 'tü tuh sahⁿ-tee-RA shay TWA | ahⁿ fray-kahⁿ-TAHⁿ | lay ka-FAY dü kar-TYAY', ['tache', 'moyen']),
  sent(1781, "N'aie pas peur de te tromper : c'est en te trompant que tu apprendras.", 'Do not be afraid of making mistakes: that is how you will learn.',
    '/nɛ pa pœʁ də tə tʁɔ̃.pe sɛ.tɑ̃ tə tʁɔ̃.pɑ̃ kə ty a.pʁɑ̃.dʁa/', 'neh pa PUHR duh tuh trohⁿ-PAY | seh-tahⁿ tuh trohⁿ-PAHⁿ | kuh tü a-prahⁿ-DRA', ['tache', 'moyen', 'relief'], FCVDR),
  sent(1782, 'En arrivant, ouvre un compte en banque et prends une carte de transport.', 'When you arrive, open a bank account and get a travel card.',
    '/ɑ̃.na.ʁi.vɑ̃ u.vʁœ̃ kɔ̃t ɑ̃ bɑ̃k e pʁɑ̃ yn kaʁt də tʁɑ̃s.pɔʁ/', 'ahⁿ-na-ree-VAHⁿ | oo-vruhⁿ KOHⁿT ahⁿ BAHⁿK | ay prahⁿ ün KART duh trahⁿs-POR', ['tache', 'moment']),
  sent(1783, "Tu gagneras du temps en préparant tes papiers à l'avance.", 'You will save time by getting your papers ready in advance.',
    '/ty ɡa.ɲə.ʁa dy tɑ̃ ɑ̃ pʁe.pa.ʁɑ̃ te pa.pje a la.vɑ̃s/', 'tü ga-nyuh-RA dü TAHⁿ | ahⁿ pray-pa-rahⁿ tay pa-PYAY | a la-VAHⁿS', ['tache', 'moyen']),
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
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a newcomer's blog post, Montréal. */
export const LECTURE_BLOG =
  "Six mois à Montréal : ce que j'ai appris. Quand je suis arrivée de Lyon en mars, je pensais que parler français suffirait. J'avais tort : au Québec, le français a ses propres mots, et je ne les connaissais pas. En écoutant mes collègues à la pause, j'ai découvert tout un vocabulaire : le dépanneur, la fin de semaine, magasiner. J'ai appris la plupart de ces mots en me trompant, ce qui m'a valu quelques fous rires. Mon premier conseil : sortez. On rencontre plus de monde en sortant qu'en restant chez soi devant son téléphone. Mon deuxième conseil concerne l'hiver. En achetant votre manteau dès octobre, vous paierez moins cher et vous aurez le choix. Moi, j'ai attendu janvier, et j'ai grelotté en faisant la queue dans des magasins presque vides. Et en marchant sur les trottoirs glacés, gardez les mains libres : vous tomberez moins souvent. Troisième conseil : prenez les transports en commun. En prenant le métro, j'ai gagné une heure par jour, et j'ai lu dix romans en allant au travail. Enfin, soyez patients avec vous-mêmes. Tout en sachant que l'adaptation prend du temps, j'ai souvent eu envie de tout abandonner. En y repensant aujourd'hui, je suis contente d'être restée. Et si vous me croisez un jour en sortant du métro Mont-Royal, venez me dire bonjour.";

/** Act 7: a news brief, Val-David (Laurentides). */
export const LECTURE_FAITS =
  "Val-David, dans les Laurentides. Samedi après-midi, un retraité de soixante-deux ans a passé deux heures sur le toit de sa maison, bloqué à côté de son chat. Tout a commencé vers quatorze heures. En entendant des miaulements au-dessus de sa tête, Gilles Bédard est sorti dans la cour et a aperçu Pompon, son chat, perché près de la cheminée. En voulant le faire descendre, il a appuyé une vieille échelle contre la gouttière et il est monté. Mais en posant le pied sur le toit, il a fait tomber l'échelle, qui s'est couchée dans la neige. Impossible de redescendre. Il a bien essayé d'attraper une branche en se penchant au-dessus du vide, mais elle était trop loin. Le chat, lui, a sauté sur un arbre et il est rentré tranquillement par la fenêtre du garage. En criant pendant de longues minutes, Gilles a fini par alerter une voisine, qui a appelé les pompiers. Ils sont arrivés en moins de vingt minutes. Ceux-ci l'ont fait descendre en utilisant leur grande échelle, sous les applaudissements d'une dizaine de curieux. « Je me suis senti un peu ridicule », a reconnu le retraité en riant. « Mais tout en sachant que c'était imprudent, je referais la même chose. » Les pompiers rappellent qu'en appelant les secours plus tôt, on évite souvent ce genre de mésaventure.";

/** Act 11: the model the learner imitates, a forum answer to a newcomer. */
export const LECTURE_MODELE =
  "Forum des nouveaux arrivants à Québec. Sujet : comment progresser en français quand on travaille en anglais ? Réponse de Karim, arrivé d'Alger il y a quatre ans. Bonjour Priya, je comprends très bien ta situation : j'ai vécu la même chose en arrivant. Voici ce qui a marché pour moi. D'abord, fais entrer le français dans ton quotidien. En changeant la langue de ton téléphone, tu liras des dizaines de mots utiles chaque jour sans même y penser. Écoute la radio en préparant ton café le matin : au début, tu comprendras peu, puis de plus en plus. Ensuite, parle, même mal. C'est en me trompant devant mes collègues que j'ai retenu mes erreurs les plus fréquentes. En demandant qu'on te corrige, tu montreras aussi que tu veux vraiment apprendre, et les gens t'aideront volontiers. Troisième conseil : trouve une activité qui te plaît. Moi, je me suis inscrit à une chorale ; en chantant, on travaille la prononciation sans s'en rendre compte. Tout en gardant ton anglais au travail, tu peux très bien vivre en français le reste de la journée. Enfin, sois patiente avec toi-même. En comparant tes progrès d'un mois sur l'autre, et non d'un jour sur l'autre, tu verras le chemin parcouru. Et si tu passes par le Vieux-Québec, écris-moi : on prendra un café, et on parlera français, évidemment. Bon courage, Karim.";

/** The eight « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "Mode d'emploi : ta première semaine dans un nouveau bureau. Mets chaque verbe entre parenthèses au gérondif. « Le premier jour, en (avoir) ta pièce d'identité sur toi, tu entreras sans attendre. En (être) à l'heure, tu feras bonne impression. Tu gagneras du temps en (se renseigner) sur les horaires de la cantine. En (ne rien dire) pendant les réunions, tu passeras pour quelqu'un de timide : ose poser une question. En (savoir) écouter, tu comprendras vite qui décide quoi. Et si tu te trompes de salle, ne panique pas : c'est en (se tromper) que tu apprendras le plan de l'étage. »";

export const TEXTE_A4 =
  "Réécris le message de Camille. Là où les deux verbes ont le même sujet, remplace pendant que ou quand par un gérondif ; ailleurs, garde la conjonction. « Hier, pendant que je rentrais du travail, j'ai écouté un balado sur Montréal. Quand je suis arrivée devant chez moi, j'ai vu un camion de déménagement. Pendant que les voisins portaient leurs meubles, leur chien aboyait sans arrêt. Pendant que je les aidais, j'ai appris qu'ils partaient à Québec. Quand ils sont partis, la rue m'a semblé bien vide. »";

export const TEXTE_A5 =
  "Comment j'ai appris l'espagnol en un an. Mets chaque verbe entre parenthèses au gérondif. « J'ai commencé en (télécharger) une application, mais c'est surtout en (parler) avec des gens que j'ai progressé. J'ai trouvé une correspondante en (s'inscrire) à un échange linguistique. Je retenais les mots nouveaux en les (écrire) sur des papillons adhésifs. J'entrais dans la cuisine en (chanter) à tue-tête, au grand désespoir de mes colocataires. Et j'ai payé mon voyage à Séville en (faire) des heures supplémentaires. »";

export const TEXTE_A6 =
  "Conseils pour ton premier hiver à Québec. Réécris avec un gérondif les phrases où c'est possible, et garde si dans les autres. « Si tu achètes tes bottes en septembre, tu auras le choix. Si tu t'habilles en couches, tu auras moins froid. Si la neige tombe fort, les écoles ferment. Si tu prends le bus, tu éviteras de déneiger ta voiture. Si tu sortais davantage, tu apprécierais mieux la saison. Et si tu avais écouté mes conseils l'an dernier, tu n'aurais pas glissé devant chez toi. »";

export const TEXTE_A7 =
  "Brève. Lis-la, puis dis ce que chaque gérondif exprime. « Lyon. Un livreur à vélo a été légèrement blessé jeudi soir, rue de la République. En voulant éviter un piéton, il a freiné brusquement et il est tombé sur la chaussée mouillée. Le piéton, qui traversait en regardant son téléphone, n'a rien vu venir. En appelant immédiatement les secours, une passante a permis une prise en charge rapide. Le livreur s'en tire avec une entorse. La police rappelle qu'en respectant les feux, on évite la plupart de ces accidents. »";

export const TEXTE_A8 =
  "L'avis d'une lectrice sur le futur tramway. Réécris avec tout en les phrases où le sujet est le même ; garde bien que ailleurs. « Bien que je sois favorable aux transports en commun, je trouve ce projet trop cher. Bien que la mairie promette des économies, les impôts vont augmenter. Bien que j'habite à deux pas de la future station, je continuerai à prendre mon vélo. Bien que je reconnaisse les efforts de la ville, je doute du calendrier. »";

export const TEXTE_A9 =
  "Le courriel d'Hugo à sa propriétaire. Trois gérondifs n'ont pas le bon sujet : trouve-les et corrige-les. « Madame, je vous écris au sujet de la fuite d'eau. En rentrant du travail hier soir, le plafond de la salle de bains coulait. En appelant le plombier, il m'a dit qu'il passerait lundi. En attendant son passage, j'ai coupé l'eau et j'ai mis une bassine. En remplissant le formulaire d'assurance, une photo est demandée : pourriez-vous m'envoyer celle de l'état des lieux ? En vous remerciant par avance, je vous prie d'agréer mes salutations. Hugo Martin »";

export const TEXTE_A10 =
  "Le mot que ta colocataire a laissé sur la table. Trouve les vrais gérondifs, puis les faux. « Je suis partie en courant, désolée pour la vaisselle. En tout cas, il reste de la soupe au frigo. En rentrant, pense à sortir les poubelles. En attendant, si le propriétaire appelle, dis-lui que je le rappellerai. Soit dit en passant, il nous doit toujours le chauffage de janvier. En tant que plus ancienne locataire, c'est moi qui lui écris d'habitude, mais en y réfléchissant, je me dis que tu pourrais le faire aussi. Bisous, Léa »";
