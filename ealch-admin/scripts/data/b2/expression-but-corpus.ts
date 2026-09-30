// b2.17.l1 « Le but »: the authored corpus, the imports and the citation
// constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.15 cause-
// consequence and b2.16 concession-avancee), under the B2 rules of
// B2-BUILD-LOG.md (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 17 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   PURPOSE BY SUBJECT, BY REGISTER, AND AGAINST ITS NEIGHBOURS (result,
//   cause). B1 lesson 16 taught the counting gesture (pour / pour que, afin
//   de / afin que); B1 lesson 31 recalled it; this lesson takes purpose to
//   B2 depth and maps every tool by the subject it needs and the register it
//   belongs to.
//
//     viser un but      the reframe; a grant application where every tool
//                       works (act 1)
//     un sujet ou deux  who reaches the goal: the same subject takes the
//                       infinitive, another subject que + subjunctive; the
//                       classic « pour que je réussisse » with one subject;
//                       the infinitive's hidden subject (« je t'ai envoyé le
//                       formulaire pour que tu le remplisses »); a generic
//                       main clause and a passive one (act 2)
//     le registre       pour / pour que (neutral) against afin de / afin que
//                       (soutenu, writing) (act 3)
//     l'intention       dans le but de, dans l'intention de (a person's
//                       intention), en vue de + nom (lesson 10 in B2) and +
//                       infinitif (administrative, criticised by style
//                       guides: afin de is safer), dans ce but, à cette fin
//                       (act 4)
//     la manière        de façon à / de manière à + infinitif (one subject),
//                       de façon que / de manière que / de sorte que +
//                       subjonctif (two subjects); « de façon à ce que »
//                       named as widespread and criticised; the mood carries
//                       the meaning (purpose against result, RECALLED from
//                       lesson 15 in B2, never re-taught) (act 5)
//     le but négatif    pour ne pas + infinitif and its word order (pour ne
//                       pas le déranger, pour ne rien oublier), pour que… ne…
//                       pas, pour que personne ne; « pour ne pas que » named
//                       as SPOKEN (act 6)
//     la crainte        de peur de / de crainte de + infinitif, de peur que /
//                       de crainte que + subjonctif with the optional ne
//                       explétif APPLIED (lesson 18 in B2 owns it), the true
//                       negation « de peur qu'il ne vienne pas »; par peur de
//                       as a cause (act 7)
//     le familier       histoire de + infinitif, que + subjonctif after an
//                       imperative (« viens, que je te voie »), comme ça +
//                       indicatif; the register ladder (act 8)
//     but ou cause      pour + infinitif présent (purpose) against pour +
//                       infinitif passé (cause, lesson 14 in B2); pour + nom,
//                       cause or purpose by context; merci de + infinitif
//                       passé (act 9)
//     les noms du but   le but, l'objectif, la finalité; viser à, avoir pour
//                       but de, chercher à; le but est que + subjonctif;
//                       viser à ce que (act 10)
//     sous charge       three questions at once: what is aimed at, who
//                       reaches it, who will read (act 11)
//     la lettre         the DELF B2 production écrite: a formal letter
//                       requesting funding (act 12)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 16 in B1   pour / pour que, afin de / afin que, the counting
//                       gesture (reframe quoted; rows opinions-et-avis .1496,
//                       .1497, .1518, .1519, .1325)
//     lesson 20 in B1   ne pas before an infinitive (row
//                       negation-et-restriction .1128)
//     lesson 31 in B1   purpose recalled, the conjunction picks the mood
//                       (reframe quoted; rows connecteurs-logiques .1319,
//                       .1321, .1330)
//     lesson 6 in B2    the mood choice (reframe quoted; rows
//                       opinions-et-avis .1901, .1905, .1908)
//     lesson 10 in B2   en vue de + nom (rows langue-soignee .1516, .1528)
//     lesson 14 in B2   pour + infinitif passé = cause (reframe quoted; rows
//                       faits-et-procedures .1255, .1265, .1267)
//     lesson 15 in B2   de sorte que both ways, trop… pour que (reframe
//                       quoted; rows connecteurs-logiques .1915, .1918,
//                       .1921, .1934)
//     lesson 16 in B2   concession (sans que, cited in the recycling round)
//   FORWARD: lesson 18 in B2 (time clauses, the ne explétif in full), cited
//   where the ne explétif is applied; it publishes with this one.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check done read-only 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques` (fondations, a2-b2). Sub-theme « le but »
//     is already in Postgres (read back 2026-09-30, with « les rapports de
//     temps »). Nothing to create at import.
//
//  2. ID BLOCK: `.2200`-`.2399`, assigned by the brief (1000-1599 are B1,
//     1600-2199 are lessons 12, 15 and 16 in B2, 2400-2599 is lesson 18 in
//     B2 written in parallel). A read-only Postgres probe on 2026-09-30
//     found NO row at .2200-.2399 at any level of this theme. Authored:
//     `.2200`-`.2391`, with gaps between act blocks (see the act banners).
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with a published row
//     (the seed holds « afin de », « afin que », « pour que », « de peur
//     que », « de sorte que », « le but » as phrase rows). Every row is a
//     sentence, a gapfill card or a rule card. No row is headed by « avant
//     que », « à moins que » or « il faut que » (lessons 18 to 20 in B2).
//
//  4. REUSED ROWS. The seed plus packs (22,082 items, read 2026-09-30) were
//     probed with real orthography for every tool in this lesson. On-topic
//     rows are reused BY ID (§F), never retyped. The seed and Postgres carry
//     NO « de façon à », « de manière à », « dans le but de », « dans
//     l'intention de », « de crainte », « histoire de » (purpose), « viser
//     à », « avoir pour but », « à cette fin », so those are authored here.
//
//  5. RESPELLINGS. Nasals close with ⁿ everywhere. Spelled for the nasal
//     checker, not the ear: « personne » pehr-SONN, « comprenne » kohⁿ-PRENN,
//     « entraîne » TRENN, « obtienne » TYENN, « vienne » VYENN. « même » is
//     MEM (the seed's). « but » is read [byt] (BÜT), the usual reading today.
//     The word « jeune » is kept out of every row (as lessons 32 in B1 and
//     16 in B2). No U+203F tie anywhere.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL OR CONTESTED SENTENCE IS EVER A ROW. « Je travaille
//     pour que je réussisse », « pour ne pas que tu tombes », « de façon à ce
//     que », « en vue de » + infinitive in the scene, « histoire de » in a
//     formal letter and the other traps live only in the scene's choice,
//     commonErrors.wrong, trapDrill.promptSound and quiz errorSpot prompts.
//
//  8. MOODS THAT LOOK THE SAME. For most -er verbs the present subjunctive
//     and the present indicative sound and spell alike (qu'il trouve). Every
//     item that TESTS the mood uses a verb whose subjunctive is distinct
//     (puisse, soit, fasse, finisses, attende, sache, comprenne, vienne).
//
//  9. NO REAL DATED FACT OR STATISTIC. Every association, grant programme,
//     sum and person is invented. Real places (Rosemont, Limoilou, Lausanne,
//     Dakar, Charlevoix, Liège) are settings only.
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
  id: 'b2.17',
  seq: 17,
  title: 'Purpose',
  sub: 'Le but',
  canDo: 'Can express purpose by subject and register: the infinitive when the subject reaches the goal itself (pour, afin de, dans le but de, de façon à, de peur de), que + subjunctive when someone else does (pour que, afin que, de façon que, de sorte que, de peur que); can state a negative aim (pour ne pas, pour que… ne… pas), choose the register (histoire de, pour, afin de, à cette fin), tell purpose from result and from cause (pour + infinitif passé, pour + nom), and name aims with le but, l\'objectif, viser à and avoir pour but de, in a formal letter requesting funding',
  prereqUnitIds: ['b1.16', 'b1.31', 'b2.06', 'b2.14', 'b2.15'],
} as const;

export const LESSON_ID = 'b2.17.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[2200, 2399]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order. Only B1 1-39, B2
 *  1-16 and 22-26 are cited, plus lesson 18 in B2 where the ne explétif
 *  truly belongs there (it publishes with this lesson).
 * ══════════════════════════════════════════════════════════════════════════ */

export const SUBJ_INF_UNIT = 'b1.16';
export const NEG_UNIT = 'b1.20';
export const SUBORD_UNIT = 'b1.31';
export const MODES_UNIT = 'b2.06';
export const NOMINAL_UNIT = 'b2.10';
export const INF_UNIT = 'b2.14';
export const CAUSE_UNIT = 'b2.15';
export const CONCESSION_UNIT = 'b2.16';
export const TEMPS_UNIT = 'b2.18';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const NEG_REF = refFr(NEG_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const INF_REF = refFr(INF_UNIT);
export const CAUSE_REF = refFr(CAUSE_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const TEMPS_REF = refFr(TEMPS_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B116_REFRAME, REFRAME_EN as B116_REFRAME_EN } from '../b1/subjonctif-infinitif-corpus.ts';
export { REFRAME as B131_REFRAME, REFRAME_EN as B131_REFRAME_EN } from '../b1/subordination-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B214_REFRAME, REFRAME_EN as B214_REFRAME_EN } from './constructions-infinitives-corpus.ts';
export { REFRAME as B215_REFRAME, REFRAME_EN as B215_REFRAME_EN } from './cause-consequence-corpus.ts';
export { REFRAME as B216_REFRAME, REFRAME_EN as B216_REFRAME_EN } from './concession-avancee-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA CIBLE. A purpose is a target ahead: something that has NOT happened
 *  yet. Two questions settle almost every choice. Who reaches the target? If
 *  the subject reaches it itself, the infinitive (pour réussir, afin de,
 *  de façon à, de peur de); if someone else must reach it, que and the
 *  subjunctive (pour que tu réussisses, afin que, de façon que, de peur
 *  que). And has it happened? If it has, it is no longer a purpose: it is a
 *  result (de sorte qu'on l'a entendu, act 5) or a cause (pour avoir menti,
 *  act 9). The register (histoire de, pour, afin de, à cette fin) is only
 *  the way you aim; it never changes the target.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le but vise ce qui n'est pas encore arrivé : un seul sujet, l'infinitif ; deux sujets, que et le subjonctif.";
export const REFRAME_EN = 'A purpose aims at what has not happened yet: one subject, the infinitive; two subjects, que and the subjunctive.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Compte les sujets : deux sujets demandent que, un seul se passe presque toujours de que.',
    why: 'Lesson 16 in B1’s reframe, still true, so it is QUOTED in act 2 rather than replaced. It says nothing about what separates a purpose from a result or a cause (acts 5 and 9), which is where B2 learners actually go wrong.',
  },
  {
    text: 'Pour que et afin que prennent le subjonctif.',
    why: 'A rule of form, true but already owned by lessons 16 in B1 and 6 in B2. It is silent on pour + infinitive, on de façon à, on de peur de, and it would push a learner to « pour que je réussisse » with one subject, the error act 2 is built on.',
  },
  {
    text: 'Afin de, c’est pour, en plus soutenu.',
    why: 'True of register only (act 3). It says nothing about the subject rule, the negative aim or the boundary with cause, and it is false of dans l’intention de (a person’s intention) and of en vue de before an infinitive.',
  },
  {
    text: 'Le subjonctif dit le but, l’indicatif dit le résultat.',
    why: 'True after de sorte que and de façon que (act 5, lesson 15 in B2), but pour + infinitive, de façon à and de peur de state a purpose with no subjunctive at all, and « comme ça tu n’auras pas froid » states one with an indicative future (act 8).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const OA1 = (n: number) => `fr.b1.opinions-et-avis.${n}`;
const CL1 = (n: number) => `fr.b1.connecteurs-logiques.${n}`;
const OA2 = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const CL2 = (n: number) => `fr.b2.connecteurs-logiques.${n}`;
const FP2 = (n: number) => `fr.b2.faits-et-procedures.${n}`;
const LS2 = (n: number) => `fr.b2.langue-soignee.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    OA1(1496),                                 // Je pars tôt pour éviter les embouteillages.  (lesson 16 in B1)
    OA1(1497),                                 // Je pars tôt pour que tu aies la voiture cet après-midi.  (lesson 16 in B1)
    CL1(1321),                                 // Je parle lentement pour que tout le monde comprenne.  (lesson 31 in B1)
    OA2(1901),                                 // La ville ferme la rue pour que les enfants puissent jouer.  (lesson 6 in B2)
    FP2(1267),                                 // Pour + infinitif présent : le but. Pour + infinitif passé : la raison.  (lesson 14 in B2)
  ],
  act3: [
    OA1(1518),                                 // Nous partons tôt afin d’arriver avant la nuit.  (lesson 16 in B1)
    OA1(1519),                                 // Nous partons tôt afin que les enfants dorment un peu.  (lesson 16 in B1)
    CL1(1319),                                 // Elle économise afin d'acheter une maison.  (lesson 31 in B1)
    OA2(1908),                                 // Afin que chacun puisse donner son avis, la réunion aura lieu le soir.  (lesson 6 in B2)
  ],
  act4: [
    LS2(1516),                                 // En vue du déménagement, chacun doit trier ses dossiers.  (lesson 10 in B2)
    LS2(1528),                                 // En vue de l'examen, elle révise tous les soirs.  (lesson 10 in B2)
  ],
  act5: [
    CL1(1330),                                 // Parle plus fort, de sorte que tout le monde t’entende.  (lesson 31 in B1)
    OA2(1905),                                 // Parle lentement, de façon que tout le monde te comprenne.  (lesson 6 in B2)
    CL2(1915),                                 // Range tes dossiers de sorte qu'on puisse les retrouver.  (lesson 15 in B2)
    CL2(1918),                                 // Le guide a parlé lentement, de sorte que tout le groupe a compris.  (lesson 15 in B2)
    CL2(1921),                                 // De sorte que + indicatif : c'est arrivé. De sorte que + subjonctif : on le vise.  (lesson 15 in B2)
  ],
  act6: [
    'fr.b1.negation-et-restriction.1128',      // Pour ne pas rater le bus, je pars tôt.  (lesson 20 in B1)
  ],
  act7: [
    OA1(1325),                                 // Elle range les papiers de peur que quelqu’un les perde.  (lesson 16 in B1)
  ],
  act8: [] as string[],
  act9: [
    FP2(1255),                                 // Il a été sanctionné pour avoir menti.  (lesson 14 in B2)
    FP2(1265),                                 // Il a perdu son permis pour avoir roulé trop vite.  (lesson 14 in B2)
  ],
  act10: [
    'fr.b2.affaires.1216',                     // L’objectif de cette réunion est de nous mettre d’accord sur le prix et le calendrier.  (lesson 26 in B2)
  ],
  act11: [
    CL2(1934),                                 // La salle est trop petite pour que tout le monde puisse entrer.  (lesson 15 in B2)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  FP2(1267),                                   // flashcard, review (a rule card)
  CL2(1921),                                   // flashcard, review (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `gap` a gapfill card whose front gaps the form and
 *  names the cue; `rule` a grammar card. Every row carries fr, en, ipa and
 *  respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const FA = { register: 'familier' as Register };
const GP = ['but'];

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

/* ── ACT 1 · VISER UN BUT (.2200-.2213) ──────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2200, 'Nous demandons cette aide pour ouvrir un atelier le samedi.', 'We are asking for this grant to open a workshop on Saturdays.',
    '/nu də.mɑ̃.dɔ̃ sɛt ɛd puʁ u.vʁiʁ œ̃.na.tə.lje lə sam.di/', 'noo duh-mahⁿ-DOHⁿ set ED | poor oo-VREER | uhⁿ-na-tuh-LYAY luh sam-DEE', ['scene', 'infinitif']),
  sent(2201, 'Notre association vise à prolonger la vie des objets.', 'Our association aims to extend the life of objects.',
    '/nɔ.tʁa.sɔ.sja.sjɔ̃ viz a pʁɔ.lɔ̃.ʒe la vi de.zɔb.ʒɛ/', 'no-tra-so-sya-SYOHⁿ | VEEZ a pro-lohⁿ-ZHAY | la VEE day-zob-ZHEH', ['lecture', 'nom-du-but']),
  sent(2202, 'Afin que chacun puisse réparer lui-même, des bénévoles guideront chaque visiteur.', 'So that everyone can do the repair themselves, volunteers will guide each visitor.',
    '/a.fɛ̃ kə ʃa.kœ̃ pɥis ʁe.pa.ʁe lɥi.mɛm de be.ne.vɔl ɡi.də.ʁɔ̃ ʃak vi.zi.tœʁ/', 'a-fehⁿ kuh sha-KUHⁿ | pwees ray-pa-ray lwee-MEM | day bay-nay-VOL | ghee-duh-ROHⁿ shak vee-zee-TUHR', ['lecture', 'subjonctif'], FCVR, SO),
  sent(2203, 'Nous ouvrirons le samedi, de façon à accueillir les familles.', 'We will open on Saturdays, so as to welcome families.',
    '/nu.zu.vʁi.ʁɔ̃ lə sam.di də fa.sɔ̃ a a.kœ.jiʁ le fa.mij/', 'noo-zoo-vree-ROHⁿ luh sam-DEE | duh fa-SOHⁿ a | a-kuh-YEER lay fa-MEEY', ['lecture', 'maniere']),
  sent(2204, 'Les outils seront rangés de sorte que tout le monde les trouve facilement.', 'The tools will be stored so that everyone finds them easily.',
    '/le.zu.ti sə.ʁɔ̃ ʁɑ̃.ʒe də sɔʁt kə tu lə mɔ̃d le tʁuv fa.sil.mɑ̃/', 'lay-zoo-TEE | suh-rohⁿ rahⁿ-ZHAY | duh sort kuh too luh MOHⁿD | lay troov fa-seel-MAHⁿ', ['lecture', 'maniere']),
  sent(2205, 'Nous prévoyons une courte formation pour ne pas mettre les bénévoles en difficulté.', 'We are planning a short training session so as not to put the volunteers in difficulty.',
    '/nu pʁe.vwa.jɔ̃ yn kuʁt fɔʁ.ma.sjɔ̃ puʁ nə pa mɛtʁ le be.ne.vɔl ɑ̃ di.fi.kyl.te/', 'noo pray-vwa-YOHⁿ | ün koort for-ma-SYOHⁿ | poor nuh pa METR | lay bay-nay-VOL | ahⁿ dee-fee-kül-TAY', ['lecture', 'negatif']),
  sent(2206, "Nous limiterons les places de peur que l'atelier ne soit débordé.", 'We will limit the places for fear the workshop gets overwhelmed.',
    '/nu li.mi.tə.ʁɔ̃ le plas də pœʁ kə la.tə.lje nə swa de.bɔʁ.de/', 'noo lee-mee-tuh-ROHⁿ lay PLASS | duh PUHR kuh la-tuh-LYAY | nuh swa day-bor-DAY', ['lecture', 'crainte'], FCVR, SO),
  rule(2207, REFRAME, REFRAME_EN,
    '/lə byt viz sə ki nɛ pa.zɑ̃.kɔʁ a.ʁi.ve œ̃ sœl sy.ʒɛ lɛ̃.fi.ni.tif dø sy.ʒɛ kə e lə syb.ʒɔ̃k.tif/',
    'luh BÜT veez suh kee neh pa-zahⁿ-kor a-ree-VAY | uhⁿ suhl sü-ZHEH | lehⁿ-fee-nee-TEEF | deu sü-ZHEH | kuh ay luh süb-zhohⁿk-TEEF',
    'Que vise un but, et qui choisit la forme qui suit ?',
    "Un but vise ce qui n'est pas encore arrivé. Si le sujet l'atteint lui-même, l'infinitif ; si quelqu'un d'autre doit l'atteindre, que et le subjonctif.",
    ['reframe']),
  sent(2208, "En vue de l'ouverture, nous avons besoin de trois établis.", 'Ahead of the opening, we need three workbenches.',
    '/ɑ̃ vy də lu.vɛʁ.tyʁ nu.za.vɔ̃ bə.zwɛ̃ də tʁwa.ze.ta.bli/', 'ahⁿ VÜ duh loo-vehr-TÜR | noo-za-vohⁿ buh-ZWEHⁿ | duh trwa-zay-ta-BLEE', ['lecture', 'en-vue-de'], FCVR, SO),
  sent(2209, 'Dans le but de réduire les déchets, nous réparons au lieu de jeter.', 'With the aim of reducing waste, we repair instead of throwing away.',
    '/dɑ̃ lə byt də ʁe.dɥiʁ le de.ʃɛ nu ʁe.pa.ʁɔ̃ o ljø də ʒə.te/', 'dahⁿ luh BÜT | duh ray-DWEER lay day-SHEH | noo ray-pa-ROHⁿ | oh LYEU duh zhuh-TAY', ['lecture', 'dans-le-but'], FCVDR),
  sent(2210, 'Je vous écris afin de solliciter une subvention pour notre association.', 'I am writing to you in order to request a grant for our association.',
    '/ʒə vu.ze.kʁi a.fɛ̃ də sɔ.li.si.te yn syb.vɑ̃.sjɔ̃ puʁ nɔ.tʁa.sɔ.sja.sjɔ̃/', 'zhuh voo-zay-KREE | a-fehⁿ duh so-lee-see-TAY | ün süb-vahⁿ-SYOHⁿ | poor no-tra-so-sya-SYOHⁿ', ['usage', 'afin-de'], FCVR, SO),
  sent(2211, 'Je t\'explique le plan pour que tu puisses me remplacer lundi.', 'I am explaining the plan to you so that you can stand in for me on Monday.',
    '/ʒə tɛk.splik lə plɑ̃ puʁ kə ty pɥis mə ʁɑ̃.pla.se lœ̃.di/', 'zhuh tek-SPLEEK luh PLAHⁿ | poor kuh tü PWEESS | muh rahⁿ-pla-SAY luhⁿ-DEE', ['usage', 'subjonctif']),
  sent(2212, "Viens, que je te présente l'équipe.", 'Come here, let me introduce you to the team.',
    '/vjɛ̃ kə ʒə tə pʁe.zɑ̃t le.kip/', 'VYEHⁿ | kuh zhuh tuh pray-ZAHⁿT lay-KEEP', ['usage', 'familier'], FCVR, FA),
  sent(2213, 'Le but de cette réunion est de répartir les tâches.', 'The aim of this meeting is to share out the tasks.',
    '/lə byt də sɛt ʁe.y.njɔ̃ ɛ də ʁe.paʁ.tiʁ le taʃ/', 'luh BÜT duh set ray-ü-NYOHⁿ | eh duh ray-par-TEER lay TASH', ['usage', 'nom-du-but']),
];

/* ── ACT 2 · UN SUJET OU DEUX (.2216-.2231) ──────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  rule(2216, "Qui atteint le but ? Le sujet lui-même : l'infinitif. Quelqu'un d'autre : que et le subjonctif.", 'Who reaches the goal? The subject itself: the infinitive. Someone else: que and the subjunctive.',
    '/ki a.tɛ̃ lə byt lə sy.ʒɛ lɥi.mɛm lɛ̃.fi.ni.tif kɛl.kœ̃ dotʁ kə e lə syb.ʒɔ̃k.tif/',
    'kee a-TEHⁿ luh BÜT | luh sü-ZHEH lwee-MEM | lehⁿ-fee-nee-TEEF | kel-kuhⁿ DOHTR | kuh ay luh süb-zhohⁿk-TEEF',
    'Comment choisir entre pour + infinitif et pour que + subjonctif ?',
    "Demande-toi qui atteint le but. Je m'entraîne pour réussir : c'est moi. Je t'entraîne pour que tu réussisses : c'est toi.",
    ['sujet']),
  sent(2217, 'Je m\'entraîne tous les soirs pour réussir le concours.', 'I train every evening to pass the competitive exam.',
    '/ʒə mɑ̃.tʁɛn tu le swaʁ puʁ ʁe.y.siʁ lə kɔ̃.kuʁ/', 'zhuh mahⁿ-TRENN too lay SWAR | poor ray-ü-SEER luh kohⁿ-KOOR', ['sujet', 'un-sujet']),
  sent(2218, "Je t'entraîne tous les soirs pour que tu réussisses le concours.", 'I train you every evening so that you pass the competitive exam.',
    '/ʒə tɑ̃.tʁɛn tu le swaʁ puʁ kə ty ʁe.y.sis lə kɔ̃.kuʁ/', 'zhuh tahⁿ-TRENN too lay SWAR | poor kuh tü ray-ü-SEESS luh kohⁿ-KOOR', ['sujet', 'deux-sujets'], FCVDR),
  sent(2219, "Je t'ai envoyé le formulaire pour que tu le remplisses.", 'I sent you the form so that you would fill it in.',
    '/ʒə te ɑ̃.vwa.je lə fɔʁ.my.lɛʁ puʁ kə ty lə ʁɑ̃.plis/', 'zhuh tay ahⁿ-vwa-YAY luh for-mü-LEHR | poor kuh tü luh rahⁿ-PLEESS', ['sujet', 'sujet-cache']),
  sent(2220, 'Pour réussir ce concours, il faut s\'entraîner tous les jours.', 'To pass this exam, you have to train every day.',
    '/puʁ ʁe.y.siʁ sə kɔ̃.kuʁ il fo sɑ̃.tʁɛ.ne tu le ʒuʁ/', 'poor ray-ü-SEER suh kohⁿ-KOOR | eel foh sahⁿ-treh-NAY too lay ZHOOR', ['sujet', 'general']),
  sent(2221, 'Le dossier doit arriver avant lundi pour être examiné en juin.', 'The application must arrive before Monday to be examined in June.',
    '/lə do.sje dwa a.ʁi.ve a.vɑ̃ lœ̃.di puʁ ɛ.tʁɛɡ.za.mi.ne ɑ̃ ʒɥɛ̃/', 'luh do-SYAY dwa a-ree-VAY | a-vahⁿ luhⁿ-DEE | poor eh-treg-za-mee-NAY ahⁿ ZHWEHⁿ', ['sujet', 'passif']),
  sent(2222, 'Elle a appelé la mairie pour obtenir un rendez-vous.', 'She called the town hall to get an appointment.',
    '/ɛ.la a.pə.le la mɛ.ʁi puʁ ɔp.tə.niʁ œ̃ ʁɑ̃.de.vu/', 'eh-la a-puh-LAY la meh-REE | poor op-tuh-NEER uhⁿ rahⁿ-day-VOO', ['sujet', 'un-sujet']),
  sent(2223, 'Elle a appelé la mairie pour que son père obtienne un rendez-vous.', 'She called the town hall so that her father would get an appointment.',
    '/ɛ.la a.pə.le la mɛ.ʁi puʁ kə sɔ̃ pɛʁ ɔp.tjɛn œ̃ ʁɑ̃.de.vu/', 'eh-la a-puh-LAY la meh-REE | poor kuh sohⁿ PEHR | op-TYENN uhⁿ rahⁿ-day-VOO', ['sujet', 'deux-sujets'], FCVDR),
  sent(2224, "Nous partons à l'aube pour éviter la chaleur.", 'We are leaving at dawn to avoid the heat.',
    '/nu paʁ.tɔ̃ a lob puʁ e.vi.te la ʃa.lœʁ/', 'noo par-TOHⁿ a LOHB | poor ay-vee-TAY la sha-LUHR', ['sujet', 'un-sujet']),
  sent(2225, "Nous partons à l'aube pour que les enfants ne souffrent pas de la chaleur.", 'We are leaving at dawn so that the children do not suffer from the heat.',
    '/nu paʁ.tɔ̃ a lob puʁ kə le.zɑ̃.fɑ̃ nə sufʁ pa də la ʃa.lœʁ/', 'noo par-TOHⁿ a LOHB | poor kuh lay-zahⁿ-FAHⁿ | nuh SOOFR pa duh la sha-LUHR', ['sujet', 'deux-sujets']),
  gap(2226, "Je t'aide pour que tu finisses plus tôt.", 'I am helping you so that you finish earlier.',
    '/ʒə tɛd puʁ kə ty fi.nis ply to/', 'zhuh TED | poor kuh tü fee-NEESS plü TOH',
    "Je t'aide pour que tu ___ plus tôt. (finir · deux sujets)",
    "Deux sujets, je et tu : pour que + subjonctif, finisses. EN: two subjects, so the subjunctive.",
    ['sujet', 'deux-sujets'], FCVDR),
  gap(2227, 'Je travaille le soir pour obtenir mon diplôme.', 'I work in the evenings to get my diploma.',
    '/ʒə tʁa.vaj lə swaʁ puʁ ɔp.tə.niʁ mɔ̃ di.plom/', 'zhuh tra-VYE luh SWAR | poor op-tuh-NEER mohⁿ dee-PLOHM',
    'Je travaille le soir pour ___ mon diplôme. (obtenir · un seul sujet)',
    "Un seul sujet, je : pour + infinitif. Pour que j'obtienne serait fautif. EN: one subject, so the infinitive.",
    ['sujet', 'un-sujet']),
  sent(2228, 'Il m\'a prêté sa voiture pour que je puisse déménager.', 'He lent me his car so that I could move house.',
    '/il ma pʁɛ.te sa vwa.tyʁ puʁ kə ʒə pɥis de.me.na.ʒe/', 'eel ma preh-TAY sa vwa-TÜR | poor kuh zhuh PWEESS day-may-na-ZHAY', ['sujet', 'deux-sujets']),
  rule(2229, 'Le même sujet des deux côtés : pour + infinitif, pas pour que.', 'The same subject on both sides: pour + infinitive, not pour que.',
    '/lə mɛm sy.ʒɛ de dø ko.te puʁ ɛ̃.fi.ni.tif pa puʁ kə/', 'luh mem sü-ZHEH | day deu ko-TAY | poor ehⁿ-fee-nee-TEEF | pa poor KUH',
    '« Je travaille pour que je réussisse » : que faut-il corriger ?',
    "Je travaille, je réussis : un seul sujet. Écris je travaille pour réussir.",
    ['sujet', 'erreur']),
  sent(2230, "Je t'explique la règle pour que tu comprennes l'exercice.", 'I am explaining the rule to you so that you understand the exercise.',
    '/ʒə tɛk.splik la ʁɛɡl puʁ kə ty kɔ̃.pʁɛn lɛɡ.zɛʁ.sis/', 'zhuh tek-SPLEEK la REGL | poor kuh tü kohⁿ-PRENN leg-zehr-SEESS', ['sujet', 'deux-sujets']),
  sent(2231, "Ma fille économise pour s'acheter un vélo.", 'My daughter is saving up to buy herself a bike.',
    '/ma fij e.kɔ.nɔ.miz puʁ saʃ.te œ̃ ve.lo/', 'ma FEEY ay-ko-no-MEEZ | poor sash-TAY uhⁿ vay-LOH', ['sujet', 'un-sujet']),
];

/* ── ACT 3 · POUR OU AFIN DE : LE REGISTRE (.2234-.2247) ────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(2234, "Je t'écris pour te donner les horaires de samedi.", "I am writing to give you Saturday's times.",
    '/ʒə te.kʁi puʁ tə dɔ.ne le.zɔ.ʁɛʁ də sam.di/', 'zhuh tay-KREE | poor tuh do-NAY | lay-zo-REHR duh sam-DEE', ['registre', 'pour']),
  sent(2235, 'Je vous écris afin de vous communiquer les horaires de samedi.', "I am writing to you in order to let you have Saturday's times.",
    '/ʒə vu.ze.kʁi a.fɛ̃ də vu kɔ.my.ni.ke le.zɔ.ʁɛʁ də sam.di/', 'zhuh voo-zay-KREE | a-fehⁿ duh voo ko-mü-nee-KAY | lay-zo-REHR duh sam-DEE', ['registre', 'afin-de'], FCVR, SO),
  sent(2236, 'On se retrouve à huit heures pour préparer la salle.', 'We meet at eight to get the room ready.',
    '/ɔ̃ sə ʁə.tʁuv a ɥi.tœʁ puʁ pʁe.pa.ʁe la sal/', 'ohⁿ suh ruh-TROOV a wee-TUHR | poor pray-pa-RAY la SAL', ['registre', 'pour']),
  sent(2237, 'Les bénévoles sont attendus à huit heures afin de préparer la salle.', 'Volunteers are expected at eight in order to prepare the room.',
    '/le be.ne.vɔl sɔ̃.ta.tɑ̃.dy a ɥi.tœʁ a.fɛ̃ də pʁe.pa.ʁe la sal/', 'lay bay-nay-VOL | sohⁿ-ta-tahⁿ-DÜ a wee-TUHR | a-fehⁿ duh pray-pa-RAY la SAL', ['registre', 'afin-de'], FCVR, SO),
  sent(2238, "Je te laisse mon numéro pour que tu m'appelles en cas de problème.", 'I am leaving you my number so that you can call me if there is a problem.',
    '/ʒə tə lɛs mɔ̃ ny.me.ʁo puʁ kə ty ma.pɛl ɑ̃ ka də pʁɔ.blɛm/', 'zhuh tuh LESS mohⁿ nü-may-ROH | poor kuh tü ma-PELL | ahⁿ ka duh pro-BLEM', ['registre', 'pour-que']),
  sent(2239, 'Nous vous laissons notre numéro afin que vous puissiez nous joindre en cas de problème.', 'We are leaving you our number so that you can reach us if there is a problem.',
    '/nu vu lɛ.sɔ̃ nɔtʁ ny.me.ʁo a.fɛ̃ kə vu pɥi.sje nu ʒwɛ̃dʁ ɑ̃ ka də pʁɔ.blɛm/', 'noo voo leh-SOHⁿ notr nü-may-ROH | a-fehⁿ kuh voo pwee-SYAY | noo ZHWEHⁿDR | ahⁿ ka duh pro-BLEM', ['registre', 'afin-que'], FCVDR, SO),
  rule(2240, 'Afin de et afin que disent la même chose que pour et pour que, dans un registre plus soutenu.', 'Afin de and afin que say the same as pour and pour que, in a more formal register.',
    '/a.fɛ̃ də e a.fɛ̃ kə diz la mɛm ʃoz kə puʁ e puʁ kə dɑ̃.zœ̃ ʁə.ʒistʁ ply su.tə.ny/', 'a-fehⁿ duh ay a-fehⁿ KUH | deez la mem SHOHZ | kuh poor ay poor KUH | dahⁿ-zuhⁿ ruh-ZHEESTR | plü soo-tuh-NÜ',
    "Qu'est-ce qui change entre pour que et afin que ?",
    "Ni le sens ni le mode : tous deux prennent le subjonctif. Seul le registre change : afin que convient à une lettre, un rapport ou une consigne officielle.",
    ['registre']),
  sent(2241, "Afin d'éviter toute confusion, merci d'indiquer votre nom sur chaque document.", 'To avoid any confusion, please write your name on each document.',
    '/a.fɛ̃ de.vi.te tut kɔ̃.fy.zjɔ̃ mɛʁ.si dɛ̃.di.ke vɔtʁ nɔ̃ syʁ ʃak dɔ.ky.mɑ̃/', 'a-fehⁿ day-vee-TAY | toot kohⁿ-fü-ZYOHⁿ | mehr-SEE dehⁿ-dee-KAY | votr NOHⁿ | sür shak do-kü-MAHⁿ', ['registre', 'afin-de'], FCVR, SO),
  sent(2242, 'Afin que votre dossier soit complet, joignez une copie de vos statuts.', 'So that your application is complete, attach a copy of your articles of association.',
    '/a.fɛ̃ kə vɔtʁ do.sje swa kɔ̃.plɛ ʒwa.ɲe yn kɔ.pi də vo sta.ty/', 'a-fehⁿ kuh votr do-SYAY | swa kohⁿ-PLEH | zhwa-NYAY ün ko-PEE | duh voh sta-TÜ', ['registre', 'afin-que'], FCVR, SO),
  gap(2243, 'Afin que votre demande soit traitée rapidement, envoyez-la avant le quinze.', 'So that your request is dealt with quickly, send it before the fifteenth.',
    '/a.fɛ̃ kə vɔtʁ də.mɑ̃d swa tʁɛ.te ʁa.pid.mɑ̃ ɑ̃.vwa.je.la a.vɑ̃ lə kɛ̃z/', 'a-fehⁿ kuh votr duh-MAHⁿD | swa treh-TAY ra-peed-MAHⁿ | ahⁿ-vwa-yay-LA a-vahⁿ luh KEHⁿZ',
    'Afin que votre demande ___ traitée rapidement, envoyez-la avant le quinze. (être · deux sujets)',
    "Afin que + subjonctif : soit. EN: afin que takes the subjunctive.",
    ['registre', 'afin-que'], FCVDR, SO),
  gap(2244, 'Nous organisons une réunion afin de répartir les rôles.', 'We are organising a meeting in order to share out the roles.',
    '/nu.zɔʁ.ɡa.ni.zɔ̃ yn ʁe.y.njɔ̃ a.fɛ̃ də ʁe.paʁ.tiʁ le ʁol/', 'noo-zor-ga-nee-ZOHⁿ ün ray-ü-NYOHⁿ | a-fehⁿ duh ray-par-TEER lay ROHL',
    'Nous organisons une réunion ___ répartir les rôles. (afin · un seul sujet)',
    "Un seul sujet, nous : afin de + infinitif. Afin que demanderait un deuxième sujet. EN: one subject, so afin de.",
    ['registre', 'afin-de'], FCVR, SO),
  sent(2245, "La mairie a publié un avis afin d'informer les riverains des travaux.", 'The town hall has published a notice in order to inform residents of the works.',
    '/la mɛ.ʁi a py.bli.je œ̃.na.vi a.fɛ̃ dɛ̃.fɔʁ.me le ʁi.və.ʁɛ̃ de tʁa.vo/', 'la meh-REE a pü-blee-YAY uhⁿ-na-VEE | a-fehⁿ dehⁿ-for-MAY | lay ree-vuh-REHⁿ day tra-VOH', ['registre', 'afin-de'], FCVR, SO),
  sent(2246, 'Pour que la fête soit réussie, chacun apporte un plat.', 'So that the party is a success, everyone brings a dish.',
    '/puʁ kə la fɛt swa ʁe.y.si ʃa.kœ̃ a.pɔʁt œ̃ pla/', 'poor kuh la FET swa ray-ü-SEE | sha-KUHⁿ a-PORT uhⁿ PLA', ['registre', 'pour-que']),
  sent(2247, 'Afin que la fête soit réussie, chaque participant est invité à apporter un plat.', 'So that the event is a success, each participant is asked to bring a dish.',
    '/a.fɛ̃ kə la fɛt swa ʁe.y.si ʃak paʁ.ti.si.pɑ̃ ɛ.tɛ̃.vi.te a a.pɔʁ.te œ̃ pla/', 'a-fehⁿ kuh la FET swa ray-ü-SEE | shak par-tee-see-PAHⁿ | eh-tehⁿ-vee-TAY a a-por-TAY uhⁿ PLA', ['registre', 'afin-que'], FCVR, SO),
];

/* ── ACT 4 · DANS LE BUT DE, EN VUE DE (.2250-.2263) ─────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(2250, "Nous avons créé cette association dans le but de rompre l'isolement des aînés.", 'We set up this association with the aim of breaking the isolation of older people.',
    '/nu.za.vɔ̃ kʁe.e sɛ.ta.sɔ.sja.sjɔ̃ dɑ̃ lə byt də ʁɔ̃pʁ li.zɔl.mɑ̃ de.ze.ne/', 'noo-za-vohⁿ kray-AY | seh-ta-so-sya-SYOHⁿ | dahⁿ luh BÜT duh ROHⁿPR | lee-zol-MAHⁿ day-zay-NAY', ['intention', 'dans-le-but'], FCVDR),
  sent(2251, "Il a pris rendez-vous à la banque dans l'intention de demander un prêt.", 'He made an appointment at the bank intending to ask for a loan.',
    '/i.la pʁi ʁɑ̃.de.vu a la bɑ̃k dɑ̃ lɛ̃.tɑ̃.sjɔ̃ də də.mɑ̃.de œ̃ pʁɛ/', 'ee-la pree rahⁿ-day-VOO a la BAHⁿK | dahⁿ lehⁿ-tahⁿ-SYOHⁿ | duh duh-mahⁿ-DAY uhⁿ PREH', ['intention', 'dans-l-intention']),
  sent(2252, 'En vue de la réunion de lundi, merci de lire le compte rendu.', "Ahead of Monday's meeting, please read the minutes.",
    '/ɑ̃ vy də la ʁe.y.njɔ̃ də lœ̃.di mɛʁ.si də liʁ lə kɔ̃t ʁɑ̃.dy/', 'ahⁿ VÜ duh la ray-ü-NYOHⁿ duh luhⁿ-DEE | mehr-SEE duh LEER | luh kohⁿt rahⁿ-DÜ', ['intention', 'en-vue-de'], FCVR, SO),
  sent(2253, 'Le comité se réunit afin de préparer le budget.', 'The committee is meeting in order to prepare the budget.',
    '/lə kɔ.mi.te sə ʁe.y.ni a.fɛ̃ də pʁe.pa.ʁe lə byd.ʒɛ/', 'luh ko-mee-TAY suh ray-ü-NEE | a-fehⁿ duh pray-pa-RAY luh büd-ZHEH', ['intention', 'afin-de'], FCVR, SO),
  sent(2254, 'Dans ce but, nous avons contacté trois écoles du quartier.', 'To that end, we contacted three schools in the neighbourhood.',
    '/dɑ̃ sə byt nu.za.vɔ̃ kɔ̃.tak.te tʁwa.ze.kɔl dy kaʁ.tje/', 'dahⁿ suh BÜT | noo-za-vohⁿ kohⁿ-tak-TAY | trwa-zay-KOL dü kar-TYAY', ['intention', 'dans-ce-but']),
  sent(2255, 'À cette fin, nous sollicitons une aide de cinq mille euros.', 'To this end, we are requesting a grant of five thousand euros.',
    '/a sɛt fɛ̃ nu sɔ.li.si.tɔ̃ yn ɛd də sɛ̃k mil ø.ʁo/', 'a set FEHⁿ | noo so-lee-see-TOHⁿ | ün ED duh sehⁿk meel eu-ROH', ['intention', 'a-cette-fin'], FCVR, SO),
  sent(2256, "Elle a quitté son poste dans l'intention de reprendre ses études.", 'She left her job with the intention of going back to her studies.',
    '/ɛ.la ki.te sɔ̃ pɔst dɑ̃ lɛ̃.tɑ̃.sjɔ̃ də ʁə.pʁɑ̃dʁ se.ze.tyd/', 'eh-la kee-TAY sohⁿ POST | dahⁿ lehⁿ-tahⁿ-SYOHⁿ | duh ruh-PRAHⁿDR say-zay-TÜD', ['intention', 'dans-l-intention']),
  sent(2257, "Dans le but d'attirer de nouveaux membres, l'association ouvre ses portes le dimanche.", 'With the aim of attracting new members, the association opens its doors on Sundays.',
    '/dɑ̃ lə byt da.ti.ʁe də nu.vo mɑ̃bʁ la.sɔ.sja.sjɔ̃ uvʁ se pɔʁt lə di.mɑ̃ʃ/', 'dahⁿ luh BÜT da-tee-RAY | duh noo-voh MAHⁿBR | la-so-sya-SYOHⁿ OOVR | say PORT luh dee-MAHⁿSH', ['intention', 'dans-le-but']),
  gap(2258, "Nous économisons en vue de l'achat d'un minibus.", 'We are saving up for the purchase of a minibus.',
    '/nu.ze.kɔ.nɔ.mi.zɔ̃ ɑ̃ vy də la.ʃa dœ̃ mi.ni.bys/', 'noo-zay-ko-no-mee-ZOHⁿ | ahⁿ VÜ duh la-SHA | duhⁿ mee-nee-BÜSS',
    "Nous économisons ___ l'achat d'un minibus. (en vue · + nom)",
    "En vue de + nom : en vue de l'achat. Le verbe acheter est devenu un nom, comme à la leçon 10 du B2. EN: en vue de before a noun.",
    ['intention', 'en-vue-de'], FCVR, SO),
  rule(2259, 'En vue de va surtout devant un nom ; devant un infinitif, afin de est plus sûr.', 'En vue de goes mainly before a noun; before an infinitive, afin de is safer.',
    '/ɑ̃ vy də va syʁ.tu də.vɑ̃ œ̃ nɔ̃ də.vɑ̃ œ̃.nɛ̃.fi.ni.tif a.fɛ̃ də ɛ ply syʁ/', 'ahⁿ vü DUH | va sür-TOO duh-VAHⁿ uhⁿ NOHⁿ | duh-vahⁿ uhⁿ-nehⁿ-fee-nee-TEEF | a-fehⁿ DUH | eh plü SÜR',
    '« Le comité se réunit en vue de préparer le budget » : correct ?',
    "On le lit dans les textes administratifs, mais des guides de style le critiquent. En vue de la préparation du budget, ou afin de préparer le budget : les deux sont sûrs.",
    ['en-vue-de', 'registre']),
  rule(2260, "Dans l'intention de parle de ce qu'une personne a en tête.", "Dans l'intention de speaks of what someone has in mind.",
    '/dɑ̃ lɛ̃.tɑ̃.sjɔ̃ də paʁl də sə kyn pɛʁ.sɔn a ɑ̃ tɛt/', 'dahⁿ lehⁿ-tahⁿ-SYOHⁿ DUH | parl duh suh kün pehr-SONN | a ahⁿ TET',
    "Dans l'intention de ou dans le but de : lequel parle de ce qu'une personne a en tête ?",
    "Dans l'intention de : l'intention appartient à quelqu'un. Dans le but de peut aussi parler d'un projet, d'une loi ou d'un service.",
    ['dans-l-intention']),
  sent(2261, "Il est venu à la réunion dans l'intention de proposer un vote.", 'He came to the meeting intending to propose a vote.',
    '/i.lɛ və.ny a la ʁe.y.njɔ̃ dɑ̃ lɛ̃.tɑ̃.sjɔ̃ də pʁɔ.po.ze œ̃ vɔt/', 'ee-leh vuh-NÜ a la ray-ü-NYOHⁿ | dahⁿ lehⁿ-tahⁿ-SYOHⁿ | duh pro-poh-ZAY uhⁿ VOT', ['intention', 'dans-l-intention']),
  sent(2262, 'Les travaux ont commencé en vue de la rentrée de septembre.', 'The works have started ahead of the September return to school.',
    '/le tʁa.vo ɔ̃ kɔ.mɑ̃.se ɑ̃ vy də la ʁɑ̃.tʁe də sɛp.tɑ̃bʁ/', 'lay tra-VOH ohⁿ ko-mahⁿ-SAY | ahⁿ VÜ duh la rahⁿ-TRAY | duh sep-TAHⁿBR', ['intention', 'en-vue-de'], FCVR, SO),
  sent(2263, 'Nous avons ouvert un compte dans le but de recevoir les dons.', 'We opened an account in order to receive donations.',
    '/nu.za.vɔ̃.zu.vɛʁ œ̃ kɔ̃t dɑ̃ lə byt də ʁə.sə.vwaʁ le dɔ̃/', 'noo-za-vohⁿ-zoo-VEHR uhⁿ KOHⁿT | dahⁿ luh BÜT | duh ruh-suh-VWAR lay DOHⁿ', ['intention', 'dans-le-but']),
];

/* ── ACT 5 · DE FAÇON À, DE MANIÈRE QUE (.2266-.2281) ────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(2266, 'Place les tables de façon à voir tous les élèves.', 'Arrange the tables so as to see all the pupils.',
    '/plas le tabl də fa.sɔ̃ a vwaʁ tu le.ze.lɛv/', 'plass lay TABL | duh fa-SOHⁿ a VWAR | too lay-zay-LEV', ['maniere', 'un-sujet']),
  sent(2267, 'Place les tables de façon que tous les élèves voient le tableau.', 'Arrange the tables so that all the pupils can see the board.',
    '/plas le tabl də fa.sɔ̃ kə tu le.ze.lɛv vwa lə ta.blo/', 'plass lay TABL | duh fa-SOHⁿ kuh | too lay-zay-LEV | VWA luh ta-BLOH', ['maniere', 'deux-sujets']),
  sent(2268, "Nous avons étalé les horaires de manière à éviter les files d'attente.", 'We spread out the times so as to avoid queues.',
    '/nu.za.vɔ̃.ze.ta.le le.zɔ.ʁɛʁ də ma.njɛʁ a e.vi.te le fil da.tɑ̃t/', 'noo-za-vohⁿ-zay-ta-LAY lay-zo-REHR | duh ma-NYEHR a ay-vee-TAY | lay feel da-TAHⁿT', ['maniere', 'un-sujet']),
  sent(2269, "Les horaires ont été étalés de manière que personne n'attende trop longtemps.", 'The times were spread out so that nobody would wait too long.',
    '/le.zɔ.ʁɛʁ ɔ̃.te.te.ta.le də ma.njɛʁ kə pɛʁ.sɔn na.tɑ̃d tʁo lɔ̃.tɑ̃/', 'lay-zo-REHR ohⁿ-tay-tay-ta-LAY | duh ma-NYEHR kuh pehr-SONN na-TAHⁿD | troh lohⁿ-TAHⁿ', ['maniere', 'deux-sujets'], FCVR, SO),
  sent(2270, "Parle fort de sorte qu'on t'entende du fond de la salle.", 'Speak loudly so that people can hear you from the back of the room.',
    '/paʁl fɔʁ də sɔʁt kɔ̃ tɑ̃.tɑ̃d dy fɔ̃ də la sal/', 'parl FOR | duh sort kohⁿ tahⁿ-TAHⁿD | dü FOHⁿ duh la SAL', ['maniere', 'but-resultat']),
  sent(2271, "Il a parlé fort, de sorte qu'on l'a entendu du fond de la salle.", 'He spoke loudly, so he was heard from the back of the room.',
    '/i.la paʁ.le fɔʁ də sɔʁt kɔ̃ la ɑ̃.tɑ̃.dy dy fɔ̃ də la sal/', 'ee-la par-lay FOR | duh sort kohⁿ la ahⁿ-tahⁿ-DÜ | dü FOHⁿ duh la SAL', ['maniere', 'but-resultat']),
  rule(2272, 'De façon à, de manière à : un seul sujet, un infinitif. De façon que, de manière que : deux sujets, un subjonctif.', 'De façon à, de manière à: one subject, an infinitive. De façon que, de manière que: two subjects, a subjunctive.',
    '/də fa.sɔ̃ a də ma.njɛʁ a œ̃ sœl sy.ʒɛ œ̃.nɛ̃.fi.ni.tif də fa.sɔ̃ kə də ma.njɛʁ kə dø sy.ʒɛ œ̃ syb.ʒɔ̃k.tif/',
    'duh fa-sohⁿ A | duh ma-nyehr A | uhⁿ suhl sü-ZHEH | uhⁿ-nehⁿ-fee-nee-TEEF | duh fa-sohⁿ KUH | duh ma-nyehr KUH | deu sü-ZHEH | uhⁿ süb-zhohⁿk-TEEF',
    "« Range la classe de façon à ce qu'on circule » : que conseiller à l'écrit ?",
    "De façon à ce que se dit beaucoup, mais des guides le critiquent. À l'écrit soigné : de façon qu'on puisse circuler.",
    ['maniere']),
  sent(2273, "J'écris les consignes au tableau de manière à ne pas les répéter.", 'I write the instructions on the board so as not to repeat them.',
    '/ʒe.kʁi le kɔ̃.siɲ o ta.blo də ma.njɛʁ a nə pa le ʁe.pe.te/', 'zhay-KREE lay kohⁿ-SEENY | oh ta-BLOH | duh ma-NYEHR a nuh PA | lay ray-pay-TAY', ['maniere', 'negatif']),
  sent(2274, "Range la classe de façon qu'on puisse circuler entre les tables.", 'Tidy the classroom so that people can move between the tables.',
    '/ʁɑ̃ʒ la klas də fa.sɔ̃ kɔ̃ pɥis siʁ.ky.le ɑ̃tʁ le tabl/', 'rahⁿzh la KLASS | duh fa-SOHⁿ kohⁿ PWEESS | seer-kü-LAY ahⁿtr lay TABL', ['maniere', 'deux-sujets'], FCVDR),
  sent(2275, "L'examen est organisé de manière que chaque candidat ait le même temps.", 'The exam is organised so that each candidate has the same amount of time.',
    '/lɛɡ.za.mɛ̃ ɛ.tɔʁ.ɡa.ni.ze də ma.njɛʁ kə ʃak kɑ̃.di.da ɛ lə mɛm tɑ̃/', 'leg-za-MEHⁿ eh-tor-ga-nee-ZAY | duh ma-NYEHR kuh | shak kahⁿ-dee-DA EH | luh mem TAHⁿ', ['maniere', 'deux-sujets'], FCVR, SO),
  gap(2276, 'Classe tes notes de façon à les retrouver vite.', 'Sort your notes so as to find them again quickly.',
    '/klas te nɔt də fa.sɔ̃ a le ʁə.tʁu.ve vit/', 'klass tay NOT | duh fa-SOHⁿ a | lay ruh-troo-VAY VEET',
    'Classe tes notes ___ les retrouver vite. (de façon · un seul sujet)',
    "Un seul sujet, tu : de façon à + infinitif. EN: one subject, so de façon à.",
    ['maniere', 'un-sujet'], FCVDR),
  gap(2277, 'Classe les copies de façon que le jury puisse les retrouver vite.', 'Sort the papers so that the examiners can find them again quickly.',
    '/klas le kɔ.pi də fa.sɔ̃ kə lə ʒy.ʁi pɥis le ʁə.tʁu.ve vit/', 'klass lay ko-PEE | duh fa-SOHⁿ kuh luh zhü-REE PWEESS | lay ruh-troo-VAY VEET',
    'Classe les copies de façon que le jury ___ les retrouver vite. (pouvoir · deux sujets)',
    "Deux sujets : de façon que + subjonctif, puisse. EN: two subjects, so the subjunctive.",
    ['maniere', 'deux-sujets']),
  sent(2278, "Les élèves ont révisé ensemble, de sorte qu'ils ont tous réussi.", 'The pupils revised together, so they all passed.',
    '/le.ze.lɛv ɔ̃ ʁe.vi.ze ɑ̃.sɑ̃bl də sɔʁt kil.zɔ̃ tus ʁe.y.si/', 'lay-zay-LEV ohⁿ ray-vee-ZAY ahⁿ-SAHⁿBL | duh sort keel-zohⁿ TOOSS ray-ü-SEE', ['maniere', 'resultat']),
  sent(2279, 'Le professeur répète les consignes de sorte que chacun puisse les noter.', 'The teacher repeats the instructions so that everyone can note them down.',
    '/lə pʁɔ.fɛ.sœʁ ʁe.pɛt le kɔ̃.siɲ də sɔʁt kə ʃa.kœ̃ pɥis le nɔ.te/', 'luh pro-feh-SUHR ray-PET lay kohⁿ-SEENY | duh sort kuh sha-KUHⁿ PWEESS | lay no-TAY', ['maniere', 'but-resultat']),
  sent(2280, 'La salle a été aérée de manière que les candidats puissent se concentrer.', 'The room was aired so that the candidates could concentrate.',
    '/la sal a e.te a.e.ʁe də ma.njɛʁ kə le kɑ̃.di.da pɥis sə kɔ̃.sɑ̃.tʁe/', 'la SAL a ay-tay a-ay-RAY | duh ma-NYEHR kuh lay kahⁿ-dee-DA | PWEESS suh kohⁿ-sahⁿ-TRAY', ['maniere', 'but-resultat'], FCVR, SO),
  sent(2281, 'La salle a été aérée, de manière que les candidats ont pu se concentrer.', 'The room was aired, so the candidates were able to concentrate.',
    '/la sal a e.te a.e.ʁe də ma.njɛʁ kə le kɑ̃.di.da ɔ̃ py sə kɔ̃.sɑ̃.tʁe/', 'la SAL a ay-tay a-ay-RAY | duh ma-NYEHR kuh lay kahⁿ-dee-DA | ohⁿ PÜ suh kohⁿ-sahⁿ-TRAY', ['maniere', 'resultat'], FCVR, SO),
];

/* ── ACT 6 · POUR NE PAS (.2284-.2302) ───────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(2284, 'Je ferme la porte pour ne pas déranger mes collègues.', 'I close the door so as not to disturb my colleagues.',
    '/ʒə fɛʁm la pɔʁt puʁ nə pa de.ʁɑ̃.ʒe me kɔ.lɛɡ/', 'zhuh fehrm la PORT | poor nuh pa day-rahⁿ-ZHAY | may ko-LEG', ['negatif', 'infinitif']),
  sent(2285, 'Je ferme la porte pour ne pas les déranger.', 'I close the door so as not to disturb them.',
    '/ʒə fɛʁm la pɔʁt puʁ nə pa le de.ʁɑ̃.ʒe/', 'zhuh fehrm la PORT | poor nuh pa lay day-rahⁿ-ZHAY', ['negatif', 'pronom'], FCVDR),
  sent(2286, 'Note tout dans le carnet pour ne rien oublier.', 'Write everything in the notebook so as not to forget anything.',
    '/nɔt tu dɑ̃ lə kaʁ.nɛ puʁ nə ʁjɛ̃.nu.bli.je/', 'not TOO dahⁿ luh kar-NEH | poor nuh ryehⁿ-noo-blee-YAY', ['negatif', 'infinitif'], FCVDR),
  sent(2287, 'Il a changé de trajet pour ne plus perdre de temps dans les bouchons.', 'He changed his route so as to stop losing time in traffic jams.',
    '/i.la ʃɑ̃.ʒe də tʁa.ʒɛ puʁ nə ply pɛʁdʁ də tɑ̃ dɑ̃ le bu.ʃɔ̃/', 'ee-la shahⁿ-zhay duh tra-ZHEH | poor nuh plü PEHRDR duh TAHⁿ | dahⁿ lay boo-SHOHⁿ', ['negatif', 'infinitif']),
  sent(2288, "Laisse une clé à l'accueil pour que personne ne reste bloqué dehors.", 'Leave a key at reception so that nobody is stuck outside.',
    '/lɛs yn kle a la.kœj puʁ kə pɛʁ.sɔn nə ʁɛst blɔ.ke də.ɔʁ/', 'less ün KLAY a la-KUHY | poor kuh pehr-SONN nuh rest blo-KAY duh-OR', ['negatif', 'subjonctif']),
  sent(2289, 'Coupe le chauffage le vendredi pour que la facture ne soit pas trop lourde.', 'Turn the heating off on Fridays so that the bill is not too heavy.',
    '/kup lə ʃo.faʒ lə vɑ̃.dʁə.di puʁ kə la fak.tyʁ nə swa pa tʁo luʁd/', 'koop luh sho-FAZH luh vahⁿ-druh-DEE | poor kuh la fak-TÜR | nuh swa pa troh LOORD', ['negatif', 'subjonctif'], FCVDR),
  sent(2290, 'Afin de ne pas perdre de temps, nous commencerons les réunions à l\'heure.', 'So as not to waste time, we will start meetings on time.',
    '/a.fɛ̃ də nə pa pɛʁdʁ də tɑ̃ nu kɔ.mɑ̃s.ʁɔ̃ le ʁe.y.njɔ̃ a lœʁ/', 'a-fehⁿ duh nuh pa PEHRDR duh TAHⁿ | noo ko-mahⁿs-ROHⁿ | lay ray-ü-NYOHⁿ a LUHR', ['negatif', 'afin-de'], FCVR, SO),
  sent(2291, "Préviens les clients afin qu'ils ne se déplacent pas pour rien.", 'Warn the customers so that they do not come for nothing.',
    '/pʁe.vjɛ̃ le kli.jɑ̃ a.fɛ̃ kil nə sə de.plas pa puʁ ʁjɛ̃/', 'pray-vyehⁿ lay klee-YAHⁿ | a-fehⁿ keel nuh suh day-PLASS pa | poor RYEHⁿ', ['negatif', 'afin-que']),
  rule(2292, 'Devant un infinitif, ne pas passe en bloc devant le verbe : pour ne pas le déranger.', 'Before an infinitive, ne pas goes as a block before the verb: pour ne pas le déranger.',
    '/də.vɑ̃ œ̃.nɛ̃.fi.ni.tif nə pa pas ɑ̃ blɔk də.vɑ̃ lə vɛʁb puʁ nə pa lə de.ʁɑ̃.ʒe/', 'duh-vahⁿ uhⁿ-nehⁿ-fee-nee-TEEF | nuh PA | pass ahⁿ BLOK | duh-vahⁿ luh VEHRB | poor nuh pa luh day-rahⁿ-ZHAY',
    'Où vont ne, pas et le pronom devant un infinitif ?',
    "Ne pas ensemble, puis le pronom, puis le verbe : pour ne pas le déranger, pour ne rien oublier, pour ne plus y penser.",
    ['negatif', 'ordre']),
  rule(2293, 'Avec pour que, ne et pas entourent le verbe conjugué : pour que tu ne tombes pas.', 'With pour que, ne and pas go around the conjugated verb: pour que tu ne tombes pas.',
    '/a.vɛk puʁ kə nə e pa ɑ̃.tuʁ lə vɛʁb kɔ̃.ʒy.ɡe puʁ kə ty nə tɔ̃b pa/', 'a-vek poor KUH | nuh ay PA | ahⁿ-toor luh VEHRB kohⁿ-zhü-GAY | poor kuh tü nuh TOHⁿB pa',
    "« Pour ne pas que tu tombes » : à l'oral oui, et à l'écrit ?",
    "À l'oral, on l'entend partout. À l'écrit, on le critique : écris pour que tu ne tombes pas.",
    ['negatif', 'oral']),
  sent(2294, 'Je te tiens la main pour que tu ne tombes pas.', 'I am holding your hand so that you do not fall.',
    '/ʒə tə tjɛ̃ la mɛ̃ puʁ kə ty nə tɔ̃b pa/', 'zhuh tuh TYEHⁿ la MEHⁿ | poor kuh tü nuh TOHⁿB pa', ['negatif', 'subjonctif']),
  sent(2295, 'Tiens la rampe pour ne pas tomber.', 'Hold the rail so as not to fall.',
    '/tjɛ̃ la ʁɑ̃p puʁ nə pa tɔ̃.be/', 'tyehⁿ la RAHⁿP | poor nuh pa tohⁿ-BAY', ['negatif', 'un-sujet'], FCVDR),
  gap(2296, 'Parle doucement pour ne pas le réveiller.', 'Speak softly so as not to wake him.',
    '/paʁl dus.mɑ̃ puʁ nə pa lə ʁe.vɛ.je/', 'parl doos-MAHⁿ | poor nuh pa luh ray-veh-YAY',
    'Parle doucement pour ___ réveiller. (ne pas · le)',
    "Ne pas en bloc, puis le pronom, puis l'infinitif : pour ne pas le réveiller. EN: ne pas, then the pronoun, then the verb.",
    ['negatif', 'pronom'], FCVDR),
  gap(2297, "Je t'écris maintenant pour que tu ne sois pas surprise.", 'I am writing to you now so that you are not taken by surprise.',
    '/ʒə te.kʁi mɛ̃t.nɑ̃ puʁ kə ty nə swa pa syʁ.pʁiz/', 'zhuh tay-KREE mehⁿt-NAHⁿ | poor kuh tü nuh swa pa sür-PREEZ',
    "Je t'écris maintenant pour que tu ne ___ pas surprise. (être · deux sujets)",
    "Deux sujets : pour que + subjonctif, sois, et ne… pas autour du verbe. EN: the subjunctive, with ne… pas around it.",
    ['negatif', 'subjonctif']),
  sent(2298, 'Il a tout noté pour ne pas avoir à redemander.', 'He wrote everything down so as not to have to ask again.',
    '/i.la tu nɔ.te puʁ nə pa.za.vwaʁ a ʁə.də.mɑ̃.de/', 'ee-la too no-TAY | poor nuh pa-za-VWAR | a ruh-duh-mahⁿ-DAY', ['negatif', 'infinitif']),
  sent(2299, "Envoie le rappel la veille pour que personne n'oublie le rendez-vous.", 'Send the reminder the day before so that nobody forgets the appointment.',
    '/ɑ̃.vwa lə ʁa.pɛl la vɛj puʁ kə pɛʁ.sɔn nu.bli lə ʁɑ̃.de.vu/', 'ahⁿ-VWA luh ra-PELL la VEY | poor kuh pehr-SONN noo-BLEE | luh rahⁿ-day-VOO', ['negatif', 'personne']),
  sent(2300, "Nous avons baissé le prix afin que personne ne renonce à l'atelier.", 'We lowered the price so that nobody would give up on the workshop.',
    '/nu.za.vɔ̃ be.se lə pʁi a.fɛ̃ kə pɛʁ.sɔn nə ʁə.nɔ̃s a la.tə.lje/', 'noo-za-vohⁿ beh-SAY luh PREE | a-fehⁿ kuh pehr-SONN nuh ruh-NOHⁿS | a la-tuh-LYAY', ['negatif', 'personne'], FCVR, SO),
  sent(2301, 'Range les dossiers pour que rien ne se perde pendant ton absence.', 'Put the files away so that nothing gets lost while you are away.',
    '/ʁɑ̃ʒ le do.sje puʁ kə ʁjɛ̃ nə sə pɛʁd pɑ̃.dɑ̃ tɔ̃.nap.sɑ̃s/', 'rahⁿzh lay do-SYAY | poor kuh RYEHⁿ nuh suh PEHRD | pahⁿ-dahⁿ tohⁿ-nap-SAHⁿS', ['negatif', 'rien']),
  sent(2302, "J'ai mis un réveil pour ne jamais manquer le début des réunions.", 'I set an alarm so as never to miss the start of meetings.',
    '/ʒe mi œ̃ ʁe.vɛj puʁ nə ʒa.mɛ mɑ̃.ke lə de.by de ʁe.y.njɔ̃/', 'zhay mee uhⁿ ray-VEY | poor nuh zha-MEH mahⁿ-KAY | luh day-BÜ day ray-ü-NYOHⁿ', ['negatif', 'infinitif']),
];

/* ── ACT 7 · DE PEUR DE, DE CRAINTE QUE (.2304-.2318) ────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(2304, "Prends une veste chaude, de peur d'avoir froid au sommet.", 'Take a warm jacket, in case you get cold at the top.',
    '/pʁɑ̃ yn vɛst ʃod də pœʁ da.vwaʁ fʁwa o sɔ.mɛ/', 'prahⁿ ün vest SHOHD | duh PUHR da-VWAR FRWA | oh so-MEH', ['crainte', 'un-sujet'], FCVDR),
  sent(2305, "Le guide vérifie la météo de crainte que l'orage n'éclate pendant la montée.", 'The guide checks the forecast for fear the storm breaks during the climb.',
    '/lə ɡid ve.ʁi.fi la me.te.o də kʁɛ̃t kə lɔ.ʁaʒ ne.klat pɑ̃.dɑ̃ la mɔ̃.te/', 'luh GHEED vay-ree-FEE la may-tay-OH | duh KREHⁿT kuh lo-RAZH nay-KLAT | pahⁿ-dahⁿ la mohⁿ-TAY', ['crainte', 'ne-expletif'], FCVR, SO),
  sent(2306, "Le guide vérifie la météo de peur que l'orage éclate pendant la montée.", 'The guide checks the forecast in case the storm breaks during the climb.',
    '/lə ɡid ve.ʁi.fi la me.te.o də pœʁ kə lɔ.ʁaʒ e.klat pɑ̃.dɑ̃ la mɔ̃.te/', 'luh GHEED vay-ree-FEE la may-tay-OH | duh PUHR kuh lo-RAZH ay-KLAT | pahⁿ-dahⁿ la mohⁿ-TAY', ['crainte', 'deux-sujets']),
  sent(2307, 'Il a baissé la voix de peur de réveiller le bébé.', 'He lowered his voice for fear of waking the baby.',
    '/i.la be.se la vwa də pœʁ də ʁe.vɛ.je lə be.be/', 'ee-la beh-SAY la VWA | duh PUHR duh ray-veh-YAY luh bay-BAY', ['crainte', 'un-sujet']),
  sent(2308, 'Elle n\'a rien dit de crainte de vexer son collègue.', 'She said nothing for fear of offending her colleague.',
    '/ɛl na ʁjɛ̃ di də kʁɛ̃t də vɛk.se sɔ̃ kɔ.lɛɡ/', 'el na ryehⁿ DEE | duh KREHⁿT duh vek-SAY sohⁿ ko-LEG', ['crainte', 'un-sujet'], FCVR, SO),
  rule(2309, "Le ne après de peur que n'est pas une négation : de peur qu'il ne pleuve, c'est la pluie qu'on craint.", "The ne after de peur que is not a negation: de peur qu'il ne pleuve, it is the rain you fear.",
    '/lə nə a.pʁɛ də pœʁ kə nɛ pa.zyn ne.ɡa.sjɔ̃ də pœʁ kil nə plœv sɛ la plɥi kɔ̃ kʁɛ̃/', 'luh NUH a-preh duh PUHR KUH | neh pa-zün nay-ga-SYOHⁿ | duh PUHR keel nuh PLUHV | seh la PLWEE kohⁿ KREHⁿ',
    "« De peur qu'il ne pleuve » : craint-on la pluie ou le soleil ?",
    "La pluie. Ce ne est facultatif et soutenu ; la leçon 18 du B2 l'étudie en détail. Pour une vraie négation : de peur qu'il ne vienne pas.",
    ['crainte', 'ne-expletif']),
  sent(2310, "Nous avons réservé tôt de peur que l'hôtel soit complet.", 'We booked early for fear the hotel would be full.',
    '/nu.za.vɔ̃ ʁe.zɛʁ.ve to də pœʁ kə lo.tɛl swa kɔ̃.plɛ/', 'noo-za-vohⁿ ray-zehr-VAY TOH | duh PUHR kuh loh-TEL | swa kohⁿ-PLEH', ['crainte', 'deux-sujets'], FCVDR),
  sent(2311, "J'ai rappelé le traiteur de peur qu'il n'oublie notre commande.", 'I called the caterer again for fear he would forget our order.',
    '/ʒe ʁa.pə.le lə tʁɛ.tœʁ də pœʁ kil nu.bli nɔtʁ kɔ.mɑ̃d/', 'zhay ra-puh-LAY luh treh-TUHR | duh PUHR keel noo-BLEE | notr ko-MAHⁿD', ['crainte', 'ne-expletif'], FCVR, SO),
  sent(2312, "J'ai rappelé le traiteur de peur qu'il ne vienne pas.", 'I called the caterer again for fear he would not come.',
    '/ʒe ʁa.pə.le lə tʁɛ.tœʁ də pœʁ kil nə vjɛn pa/', 'zhay ra-puh-LAY luh treh-TUHR | duh PUHR keel nuh VYENN pa', ['crainte', 'negation']),
  gap(2313, 'Emporte une carte, de peur de te perdre en forêt.', 'Take a map, in case you get lost in the forest.',
    '/ɑ̃.pɔʁt yn kaʁt də pœʁ də tə pɛʁdʁ ɑ̃ fɔ.ʁɛ/', 'ahⁿ-port ün KART | duh PUHR duh tuh PEHRDR | ahⁿ fo-REH',
    'Emporte une carte, de peur de te ___ en forêt. (perdre · un seul sujet)',
    "Un seul sujet, tu : de peur de + infinitif, avec le pronom te. EN: one subject, so the infinitive.",
    ['crainte', 'un-sujet'], FCVDR),
  gap(2314, 'Il répète son discours de crainte que le public ne le suive pas.', 'He rehearses his speech for fear the audience will not follow him.',
    '/il ʁe.pɛt sɔ̃ dis.kuʁ də kʁɛ̃t kə lə py.blik nə lə sɥiv pa/', 'eel ray-PET sohⁿ dees-KOOR | duh KREHⁿT kuh luh pü-BLEEK | nuh luh SWEEV pa',
    'Il répète son discours de crainte que le public ne le ___ pas. (suivre · deux sujets)',
    "Deux sujets : de crainte que + subjonctif, suive. Ici, ne… pas est une vraie négation. EN: the subjunctive, and a real negation.",
    ['crainte', 'negation'], FCVR, SO),
  sent(2315, "De crainte d'être en retard, elle a pris un taxi.", 'For fear of being late, she took a taxi.',
    '/də kʁɛ̃t dɛ.tʁɑ̃ ʁə.taʁ ɛ.la pʁi œ̃ tak.si/', 'duh KREHⁿT deh-trahⁿ ruh-TAR | eh-la pree uhⁿ tak-SEE', ['crainte', 'un-sujet'], FCVR, SO),
  sent(2316, "Les organisateurs ont prévu des tentes de crainte qu'il ne pleuve.", 'The organisers provided tents in case it rained.',
    '/le.zɔʁ.ɡa.ni.za.tœʁ ɔ̃ pʁe.vy de tɑ̃t də kʁɛ̃t kil nə plœv/', 'lay-zor-ga-nee-za-TUHR | ohⁿ pray-VÜ day TAHⁿT | duh KREHⁿT keel nuh PLUHV', ['crainte', 'ne-expletif'], FCVR, SO),
  rule(2317, 'De peur de, de crainte de : un seul sujet. De peur que, de crainte que : deux sujets et le subjonctif.', 'De peur de, de crainte de: one subject. De peur que, de crainte que: two subjects and the subjunctive.',
    '/də pœʁ də də kʁɛ̃t də œ̃ sœl sy.ʒɛ də pœʁ kə də kʁɛ̃t kə dø sy.ʒɛ e lə syb.ʒɔ̃k.tif/', 'duh PUHR DUH | duh KREHⁿT DUH | uhⁿ suhl sü-ZHEH | duh PUHR KUH | duh KREHⁿT KUH | deu sü-ZHEH | ay luh süb-zhohⁿk-TEEF',
    'De peur ou de crainte : lequel est le plus soutenu ?',
    "De crainte. Les deux disent la même chose : le but est d'éviter ce qu'on craint.",
    ['crainte']),
  sent(2318, "Il n'a pas osé refuser, par peur de décevoir.", 'He did not dare refuse, out of fear of disappointing.',
    '/il na pa.zo.ze ʁə.fy.ze paʁ pœʁ də de.sə.vwaʁ/', 'eel na pa-zoh-ZAY ruh-fü-ZAY | par PUHR duh day-suh-VWAR', ['crainte', 'cause']),
];

/* ── ACT 8 · LE BUT FAMILIER (.2321-.2333) ───────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(2321, "On passe te voir samedi, histoire de t'aider pour les cartons.", 'We will drop by on Saturday, just to help you with the boxes.',
    '/ɔ̃ pas tə vwaʁ sam.di is.twaʁ də tɛ.de puʁ le kaʁ.tɔ̃/', 'ohⁿ pass tuh VWAR sam-DEE | ees-TWAR duh teh-DAY | poor lay kar-TOHⁿ', ['familier', 'histoire-de'], FCVR, FA),
  sent(2322, 'Je suis sorti marcher, histoire de me changer les idées.', 'I went out for a walk, just to take my mind off things.',
    '/ʒə sɥi sɔʁ.ti maʁ.ʃe is.twaʁ də mə ʃɑ̃.ʒe le.zi.de/', 'zhuh swee sor-TEE mar-SHAY | ees-TWAR duh muh shahⁿ-zhay lay-zee-DAY', ['familier', 'histoire-de'], FCVDR, FA),
  sent(2323, "Approche-toi, que je t'explique le plan.", 'Come closer, let me explain the plan to you.',
    '/a.pʁɔʃ.twa kə ʒə tɛk.splik lə plɑ̃/', 'a-prosh-TWA | kuh zhuh tek-SPLEEK luh PLAHⁿ', ['familier', 'imperatif'], FCVR, FA),
  sent(2324, "Parle plus fort, qu'on t'entende au fond.", 'Speak up, so people at the back can hear you.',
    '/paʁl ply fɔʁ kɔ̃ tɑ̃.tɑ̃d o fɔ̃/', 'parl plü FOR | kohⁿ tahⁿ-TAHⁿD oh FOHⁿ', ['familier', 'imperatif'], FCVR, FA),
  sent(2325, 'On a commandé des pizzas, histoire de ne pas cuisiner ce soir.', 'We ordered pizzas, just so we did not have to cook tonight.',
    '/ɔ̃.na kɔ.mɑ̃.de de pid.za is.twaʁ də nə pa kɥi.zi.ne sə swaʁ/', 'ohⁿ-na ko-mahⁿ-DAY day peed-ZA | ees-TWAR duh nuh pa kwee-zee-NAY suh SWAR', ['familier', 'histoire-de'], FCVR, FA),
  rule(2326, "Histoire de + infinitif : un but léger, à l'oral et entre proches, jamais dans une lettre officielle.", 'Histoire de + infinitive: a light purpose, in speech and among friends, never in an official letter.',
    '/is.twaʁ də ɛ̃.fi.ni.tif œ̃ byt le.ʒe a lɔ.ʁal e ɑ̃tʁ pʁɔʃ ʒa.mɛ dɑ̃.zyn lɛtʁ ɔ.fi.sjɛl/', 'ees-TWAR duh ehⁿ-fee-nee-TEEF | uhⁿ BÜT lay-ZHAY | a lo-RAL ay ahⁿtr PROSH | zha-meh dahⁿ-zün LETR o-fee-SYEL',
    '« Je vous écris histoire de demander une aide » : que corriger ?',
    "Histoire de est familier. Dans une lettre : je vous écris afin de solliciter une aide.",
    ['familier', 'histoire-de']),
  rule(2327, "Après un impératif, que + subjonctif peut dire le but : viens, que je te voie. C'est familier.", 'After an imperative, que + subjunctive can express purpose: viens, que je te voie. It is informal.',
    '/a.pʁɛ.zœ̃.nɛ̃.pe.ʁa.tif kə syb.ʒɔ̃k.tif pø diʁ lə byt vjɛ̃ kə ʒə tə vwa sɛ fa.mi.lje/', 'a-preh-zuhⁿ-nehⁿ-pay-ra-TEEF | kuh süb-zhohⁿk-TEEF | peu DEER luh BÜT | VYEHⁿ kuh zhuh tuh VWA | seh fa-mee-LYAY',
    '« Viens, que je te voie » : que veut dire que ici ?',
    "Pour que : viens, pour que je te voie. On l'entend à l'oral, et chez certains écrivains ; dans une lettre officielle, écris afin que.",
    ['familier', 'imperatif']),
  sent(2328, "Mets ton manteau, comme ça tu n'auras pas froid.", 'Put your coat on, that way you will not be cold.',
    '/mɛ tɔ̃ mɑ̃.to kɔm sa ty no.ʁa pa fʁwa/', 'meh tohⁿ mahⁿ-TOH | kom SA | tü noh-ra pa FRWA', ['familier', 'comme-ca']),
  sent(2329, 'Nous passerons samedi afin de vous aider à préparer les cartons.', 'We will come by on Saturday in order to help you pack the boxes.',
    '/nu pa.sə.ʁɔ̃ sam.di a.fɛ̃ də vu.ze.de a pʁe.pa.ʁe le kaʁ.tɔ̃/', 'noo pa-suh-ROHⁿ sam-DEE | a-fehⁿ duh voo-zay-DAY | a pray-pa-RAY lay kar-TOHⁿ', ['familier', 'soutenu'], FCVR, SO),
  sent(2330, "Venez à l'accueil afin que je vous présente l'équipe.", 'Come to reception so that I can introduce you to the team.',
    '/və.ne a la.kœj a.fɛ̃ kə ʒə vu pʁe.zɑ̃t le.kip/', 'vuh-nay a la-KUHY | a-fehⁿ kuh zhuh voo pray-ZAHⁿT lay-KEEP', ['familier', 'soutenu'], FCVR, SO),
  gap(2331, 'Assieds-toi, que je te fasse un café.', 'Sit down, let me make you a coffee.',
    '/a.sje.twa kə ʒə tə fas œ̃ ka.fe/', 'a-syay-TWA | kuh zhuh tuh FASS uhⁿ ka-FAY',
    'Assieds-toi, que je te ___ un café. (faire · après un impératif)',
    "Que + subjonctif après un impératif : fasse. Un but, à l'oral. EN: que + subjunctive after an imperative.",
    ['familier', 'imperatif'], FCVDR, FA),
  sent(2332, 'On a fait un détour, histoire de voir le lac.', 'We took a detour, just to see the lake.',
    '/ɔ̃.na fɛ œ̃ de.tuʁ is.twaʁ də vwaʁ lə lak/', 'ohⁿ-na feh uhⁿ day-TOOR | ees-TWAR duh VWAR luh LAK', ['familier', 'histoire-de'], FCVR, FA),
  sent(2333, "Je te préviens maintenant pour que tu t'organises.", 'I am telling you now so that you can get organised.',
    '/ʒə tə pʁe.vjɛ̃ mɛ̃t.nɑ̃ puʁ kə ty tɔʁ.ɡa.niz/', 'zhuh tuh pray-VYEHⁿ mehⁿt-NAHⁿ | poor kuh tü tor-ga-NEEZ', ['familier', 'courant']),
];

/* ── ACT 9 · POUR : LE BUT OU LA CAUSE (.2336-.2348) ─────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(2336, "L'association a été récompensée pour avoir ouvert un atelier gratuit.", 'The association was rewarded for opening a free workshop.',
    '/la.sɔ.sja.sjɔ̃ a e.te ʁe.kɔ̃.pɑ̃.se puʁ a.vwaʁ u.vɛʁ œ̃.na.tə.lje ɡʁa.tɥi/', 'la-so-sya-SYOHⁿ a ay-TAY ray-kohⁿ-pahⁿ-SAY | poor a-vwar oo-VEHR | uhⁿ-na-tuh-LYAY gra-TWEE', ['cause', 'infinitif-passe']),
  sent(2337, 'Nous sollicitons une aide pour ouvrir un second atelier.', 'We are requesting a grant to open a second workshop.',
    '/nu sɔ.li.si.tɔ̃ yn ɛd puʁ u.vʁiʁ œ̃ sə.ɡɔ̃.ta.tə.lje/', 'noo so-lee-see-TOHⁿ ün ED | poor oo-VREER | uhⁿ suh-gohⁿ-ta-tuh-LYAY', ['cause', 'but'], FCVDR, SO),
  sent(2338, 'Nous remercions la Ville pour son soutien.', 'We thank the City for its support.',
    '/nu ʁə.mɛʁ.sjɔ̃ la vil puʁ sɔ̃ su.tjɛ̃/', 'noo ruh-mehr-SYOHⁿ la VEEL | poor sohⁿ soo-TYEHⁿ', ['cause', 'pour-nom']),
  sent(2339, "La salle est fermée pour travaux jusqu'à la fin du mois.", 'The hall is closed for works until the end of the month.',
    '/la sal ɛ fɛʁ.me puʁ tʁa.vo ʒys.ka la fɛ̃ dy mwa/', 'la SAL eh fehr-MAY | poor tra-VOH | zhüs-ka la FEHⁿ dü MWA', ['cause', 'pour-nom']),
  sent(2340, 'Nous avons besoin de bénévoles pour la fête de quartier.', 'We need volunteers for the neighbourhood party.',
    '/nu.za.vɔ̃ bə.zwɛ̃ də be.ne.vɔl puʁ la fɛt də kaʁ.tje/', 'noo-za-vohⁿ buh-ZWEHⁿ | duh bay-nay-VOL | poor la FET duh kar-TYAY', ['cause', 'pour-nom']),
  sent(2341, 'Merci de nous avoir prêté votre salle.', 'Thank you for lending us your hall.',
    '/mɛʁ.si də nu.za.vwaʁ pʁɛ.te vɔtʁ sal/', 'mehr-SEE | duh noo-za-VWAR preh-TAY | votr SAL', ['cause', 'infinitif-passe'], FCVDR),
  sent(2342, 'Il a reçu un avertissement pour être arrivé en retard trois fois.', 'He received a warning for arriving late three times.',
    '/i.la ʁə.sy œ̃.na.vɛʁ.tis.mɑ̃ puʁ ɛ.tʁa.ʁi.ve ɑ̃ ʁə.taʁ tʁwa fwa/', 'ee-la ruh-SÜ uhⁿ-na-vehr-tees-MAHⁿ | poor eh-tra-ree-VAY ahⁿ ruh-TAR | trwa FWA', ['cause', 'infinitif-passe']),
  sent(2343, 'Nous nous excusons de ne pas avoir répondu plus tôt.', 'We apologise for not having replied sooner.',
    '/nu nu.zɛk.sky.zɔ̃ də nə pa.za.vwaʁ ʁe.pɔ̃.dy ply to/', 'noo noo-zek-skü-ZOHⁿ | duh nuh pa-za-VWAR ray-pohⁿ-DÜ | plü TOH', ['cause', 'infinitif-passe'], FCVR, SO),
  rule(2344, "Devant un nom, pour peut dire la cause ou le but : si tu peux dire parce que, c'est une cause.", 'Before a noun, pour can express cause or purpose: if you can say parce que, it is a cause.',
    '/də.vɑ̃ œ̃ nɔ̃ puʁ pø diʁ la koz u lə byt si ty pø diʁ paʁs kə sɛ.tyn koz/', 'duh-vahⁿ uhⁿ NOHⁿ | poor peu DEER la KOHZ oo luh BÜT | see tü peu DEER pars KUH | seh-tün KOHZ',
    '« Fermé pour travaux » : une cause ou un but ?',
    "Une cause : c'est fermé parce qu'il y a des travaux. Dans « des bénévoles pour la fête », c'est un but : afin que la fête ait lieu.",
    ['cause', 'pour-nom']),
  gap(2345, 'Le club a été félicité pour avoir gagné la coupe régionale.', 'The club was congratulated on winning the regional cup.',
    '/lə klœb a e.te fe.li.si.te puʁ a.vwaʁ ɡa.ɲe la kup ʁe.ʒjɔ.nal/', 'luh KLUHB a ay-tay fay-lee-see-TAY | poor a-vwar ga-NYAY | la KOOP ray-zhyo-NAL',
    "Le club a été félicité pour ___ la coupe régionale. (gagner · c'est fait)",
    "C'est fait : pour + infinitif passé, avoir gagné. Une cause, comme à la leçon 14 du B2. EN: done already, so a cause.",
    ['cause', 'infinitif-passe'], FCVDR),
  gap(2346, "Le club s'entraîne tous les soirs pour gagner la coupe régionale.", 'The club trains every evening to win the regional cup.',
    '/lə klœb sɑ̃.tʁɛn tu le swaʁ puʁ ɡa.ɲe la kup ʁe.ʒjɔ.nal/', 'luh KLUHB sahⁿ-TRENN too lay SWAR | poor ga-NYAY la KOOP ray-zhyo-NAL',
    "Le club s'entraîne tous les soirs pour ___ la coupe régionale. (gagner · c'est à venir)",
    "C'est à venir : pour + infinitif présent, gagner. Un but. EN: still to come, so a purpose.",
    ['cause', 'but']),
  sent(2347, 'Elle a été licenciée pour faute grave.', 'She was dismissed for gross misconduct.',
    '/ɛ.la e.te li.sɑ̃.sje puʁ fot ɡʁav/', 'eh-la ay-TAY lee-sahⁿ-SYAY | poor foht GRAV', ['cause', 'pour-nom']),
  sent(2348, "Elle a pris un congé pour s'occuper de sa mère.", 'She took leave to look after her mother.',
    '/ɛ.la pʁi œ̃ kɔ̃.ʒe puʁ sɔ.ky.pe də sa mɛʁ/', 'eh-la pree uhⁿ kohⁿ-ZHAY | poor so-kü-PAY duh sa MEHR', ['cause', 'but']),
];

/* ── ACT 10 · LES NOMS DU BUT (.2351-.2364) ──────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(2351, 'Ce projet vise à réduire les déchets du quartier.', 'This project aims to reduce waste in the neighbourhood.',
    '/sə pʁɔ.ʒɛ viz a ʁe.dɥiʁ le de.ʃɛ dy kaʁ.tje/', 'suh pro-ZHEH VEEZ a ray-DWEER | lay day-SHEH dü kar-TYAY', ['nom-du-but', 'viser'], FCVDR),
  sent(2352, "L'atelier a pour but de former des lycéens à la réparation.", 'The aim of the workshop is to train secondary-school pupils in repair.',
    '/la.tə.lje a puʁ byt də fɔʁ.me de li.se.ɛ̃ a la ʁe.pa.ʁa.sjɔ̃/', 'la-tuh-LYAY a poor BÜT | duh for-MAY day lee-say-EHⁿ | a la ray-pa-ra-SYOHⁿ', ['nom-du-but', 'avoir-pour-but'], FCVR, SO),
  sent(2353, 'Notre objectif est de réparer mille objets la première année.', 'Our objective is to repair a thousand objects in the first year.',
    '/nɔ.tʁɔb.ʒɛk.tif ɛ də ʁe.pa.ʁe mi.lɔb.ʒɛ la pʁə.mjɛ.ʁa.ne/', 'no-trob-zhek-TEEF | eh duh ray-pa-RAY | mee-lob-ZHEH | la pruh-myeh-ra-NAY', ['nom-du-but', 'objectif']),
  sent(2354, 'Le but est que chaque habitant sache réparer un vélo.', 'The aim is for every resident to know how to repair a bike.',
    '/lə byt ɛ kə ʃa.ka.bi.tɑ̃ saʃ ʁe.pa.ʁe œ̃ ve.lo/', 'luh BÜT eh kuh | sha-ka-bee-TAHⁿ SASH | ray-pa-RAY uhⁿ vay-LOH', ['nom-du-but', 'subjonctif'], FCVDR),
  sent(2355, 'Ce projet a pour objectif la création de deux emplois.', 'The objective of this project is the creation of two jobs.',
    '/sə pʁɔ.ʒɛ a puʁ ɔb.ʒɛk.tif la kʁe.a.sjɔ̃ də dø.zɑ̃.plwa/', 'suh pro-ZHEH a poor ob-zhek-TEEF | la kray-a-SYOHⁿ | duh deu-zahⁿ-PLWA', ['nom-du-but', 'objectif'], FCVR, SO),
  sent(2356, 'La finalité de ce projet est de changer nos habitudes de consommation.', 'The ultimate purpose of this project is to change our consumption habits.',
    '/la fi.na.li.te də sə pʁɔ.ʒɛ ɛ də ʃɑ̃.ʒe no.za.bi.tyd də kɔ̃.sɔ.ma.sjɔ̃/', 'la fee-na-lee-TAY duh suh pro-ZHEH | eh duh shahⁿ-ZHAY | noh-za-bee-TÜD | duh kohⁿ-so-ma-SYOHⁿ', ['nom-du-but', 'finalite'], FCVR, SO),
  sent(2357, 'Le programme vise à ce que chaque élève lise un livre par mois.', 'The programme aims for every pupil to read one book a month.',
    '/lə pʁɔ.ɡʁam viz a sə kə ʃa.ke.lɛv liz œ̃ livʁ paʁ mwa/', 'luh pro-GRAM VEEZ a suh KUH | sha-kay-LEV LEEZ | uhⁿ LEEVR par MWA', ['nom-du-but', 'viser'], FCVR, SO),
  rule(2358, "Le but dit où l'on va ; l'objectif, souvent, combien et quand ; la finalité, pourquoi au fond.", 'The aim says where you are going; the objective, often how much and by when; the ultimate purpose, why, deep down.',
    '/lə byt di u lɔ̃ va lɔb.ʒɛk.tif su.vɑ̃ kɔ̃.bjɛ̃ e kɑ̃ la fi.na.li.te puʁ.kwa o fɔ̃/', 'luh BÜT dee oo lohⁿ VA | lob-zhek-TEEF soo-VAHⁿ | kohⁿ-BYEHⁿ ay KAHⁿ | la fee-na-lee-TAY | poor-KWA oh FOHⁿ',
    '« Réparer mille objets en un an » : un but, un objectif ou une finalité ?',
    "Un objectif : il se mesure. Le but serait de réduire les déchets ; la finalité, de changer nos habitudes.",
    ['nom-du-but']),
  rule(2359, "Viser à, avoir pour but de, chercher à : un infinitif. Le but est que : un subjonctif.", 'Viser à, avoir pour but de, chercher à: an infinitive. Le but est que: a subjunctive.',
    '/vi.ze a a.vwaʁ puʁ byt də ʃɛʁ.ʃe a œ̃.nɛ̃.fi.ni.tif lə byt ɛ kə œ̃ syb.ʒɔ̃k.tif/', 'vee-ZAY A | a-vwar poor BÜT DUH | shehr-SHAY A | uhⁿ-nehⁿ-fee-nee-TEEF | luh BÜT eh KUH | uhⁿ süb-zhohⁿk-TEEF',
    '« Le but est que chacun … réparer » (savoir) : quelle forme ?',
    "Sache : après le but est que, le subjonctif, parce que quelqu'un d'autre doit atteindre le but.",
    ['nom-du-but', 'subjonctif']),
  sent(2360, 'Nous cherchons à rendre la réparation accessible à tous.', 'We are trying to make repair accessible to everyone.',
    '/nu ʃɛʁ.ʃɔ̃ a ʁɑ̃dʁ la ʁe.pa.ʁa.sjɔ̃ ak.se.sibl a tus/', 'noo shehr-SHOHⁿ a RAHⁿDR | la ray-pa-ra-SYOHⁿ | ak-say-SEEBL a TOOSS', ['nom-du-but', 'chercher-a']),
  sent(2361, "L'objectif n'est pas de tout réparer, mais d'apprendre à réparer.", 'The objective is not to repair everything, but to learn how to repair.',
    '/lɔb.ʒɛk.tif nɛ pa də tu ʁe.pa.ʁe mɛ da.pʁɑ̃dʁ a ʁe.pa.ʁe/', 'lob-zhek-TEEF neh PA | duh too ray-pa-RAY | meh da-PRAHⁿDR a ray-pa-RAY', ['nom-du-but', 'objectif']),
  sent(2362, 'Cette formation a pour but de rendre les participants autonomes.', 'The aim of this training is to make participants independent.',
    '/sɛt fɔʁ.ma.sjɔ̃ a puʁ byt də ʁɑ̃dʁ le paʁ.ti.si.pɑ̃ o.to.nɔm/', 'set for-ma-SYOHⁿ a poor BÜT | duh RAHⁿDR | lay par-tee-see-PAHⁿ oh-toh-NOM', ['nom-du-but', 'avoir-pour-but'], FCVR, SO),
  sent(2363, "Quel est le but de cette campagne d'affichage ?", 'What is the aim of this poster campaign?',
    '/kɛ.lɛ lə byt də sɛt kɑ̃.paɲ da.fi.ʃaʒ/', 'keh-leh luh BÜT | duh set kahⁿ-PANY da-fee-SHAZH', ['nom-du-but']),
  sent(2364, 'Les deux associations ont le même but : que personne ne jette ce qui peut encore servir.', 'The two associations share the same aim: that nobody throws away what can still be used.',
    '/le dø.za.sɔ.sja.sjɔ̃ ɔ̃ lə mɛm byt kə pɛʁ.sɔn nə ʒɛt sə ki pø.tɑ̃.kɔʁ sɛʁ.viʁ/', 'lay deu-za-so-sya-SYOHⁿ | ohⁿ luh mem BÜT | kuh pehr-SONN nuh ZHET | suh kee peu-tahⁿ-kor sehr-VEER', ['nom-du-but', 'subjonctif']),
];

/* ── ACT 11 · SOUS CHARGE : LE RÈGLEMENT (.2367-.2378) ───────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(2367, 'Pour déposer votre demande, connectez-vous au portail avant le trente avril.', 'To submit your application, log on to the portal before the thirtieth of April.',
    '/puʁ de.po.ze vɔtʁ də.mɑ̃d kɔ.nɛk.te.vu o pɔʁ.taj a.vɑ̃ lə tʁɑ̃.ta.vʁil/', 'poor day-poh-ZAY votr duh-MAHⁿD | ko-nek-tay-VOO oh por-TYE | a-vahⁿ luh trahⁿ-ta-VREEL', ['charge', 'pour']),
  sent(2368, 'Joignez un budget détaillé afin que le jury puisse évaluer votre projet.', 'Attach a detailed budget so that the panel can assess your project.',
    '/ʒwa.ɲe œ̃ byd.ʒɛ de.ta.je a.fɛ̃ kə lə ʒy.ʁi pɥi.se.va.lɥe vɔtʁ pʁɔ.ʒɛ/', 'zhwa-nyay uhⁿ büd-ZHEH day-ta-YAY | a-fehⁿ kuh luh zhü-REE | pwee-say-va-LWAY votr pro-ZHEH', ['charge', 'afin-que'], FCVDR, SO),
  sent(2369, 'Numérotez les pages de façon à faciliter la lecture.', 'Number the pages so as to make reading easier.',
    '/ny.me.ʁɔ.te le paʒ də fa.sɔ̃ a fa.si.li.te la lɛk.tyʁ/', 'nü-may-ro-TAY lay PAZH | duh fa-SOHⁿ a | fa-see-lee-TAY la lek-TÜR', ['charge', 'maniere']),
  sent(2370, 'Relisez votre dossier pour ne pas oublier de pièce justificative.', 'Reread your application so as not to leave out any supporting document.',
    '/ʁə.li.ze vɔtʁ do.sje puʁ nə pa.zu.bli.je də pjɛs ʒys.ti.fi.ka.tiv/', 'ruh-lee-ZAY votr do-SYAY | poor nuh pa-zoo-blee-YAY | duh PYESS zhüs-tee-fee-ka-TEEV', ['charge', 'negatif']),
  sent(2371, 'Envoyez votre dossier tôt, de peur que le portail ne soit saturé le dernier jour.', 'Send your application early, in case the portal is overloaded on the last day.',
    '/ɑ̃.vwa.je vɔtʁ do.sje to də pœʁ kə lə pɔʁ.taj nə swa sa.ty.ʁe lə dɛʁ.nje ʒuʁ/', 'ahⁿ-vwa-YAY votr do-SYAY TOH | duh PUHR kuh luh por-TYE | nuh swa sa-tü-RAY | luh dehr-nyay ZHOOR', ['charge', 'crainte'], FCVR, SO),
  sent(2372, "L'an dernier, beaucoup de dossiers sont arrivés en retard, de sorte que le jury a dû en refuser vingt.", 'Last year many applications arrived late, so the panel had to turn down twenty.',
    '/lɑ̃ dɛʁ.nje bo.ku də do.sje sɔ̃.ta.ʁi.ve ɑ̃ ʁə.taʁ də sɔʁt kə lə ʒy.ʁi a dy ɑ̃ ʁə.fy.ze vɛ̃/', 'lahⁿ dehr-NYAY | boh-koo duh do-SYAY | sohⁿ-ta-ree-VAY ahⁿ ruh-TAR | duh sort kuh luh zhü-REE a DÜ | ahⁿ ruh-fü-zay VEHⁿ', ['charge', 'resultat']),
  sent(2373, 'Trois associations ont été écartées pour avoir envoyé un dossier incomplet.', 'Three associations were ruled out for sending an incomplete application.',
    '/tʁwa.za.sɔ.sja.sjɔ̃ ɔ̃.te.te.e.kaʁ.te puʁ a.vwaʁ ɑ̃.vwa.je œ̃ do.sje ɛ̃.kɔ̃.plɛ/', 'trwa-za-so-sya-SYOHⁿ | ohⁿ-tay-tay-ay-kar-TAY | poor a-vwar ahⁿ-vwa-YAY | uhⁿ do-SYAY ehⁿ-kohⁿ-PLEH', ['charge', 'cause']),
  sent(2374, "Nous avons ajouté un schéma pour que le jury comprenne le projet d'un coup d'œil.", 'We added a diagram so that the panel grasps the project at a glance.',
    '/nu.za.vɔ̃.za.ʒu.te œ̃ ʃe.ma puʁ kə lə ʒy.ʁi kɔ̃.pʁɛn lə pʁɔ.ʒɛ dœ̃ ku dœj/', 'noo-za-vohⁿ-za-zhoo-TAY uhⁿ shay-MA | poor kuh luh zhü-REE kohⁿ-PRENN | luh pro-ZHEH duhⁿ koo DUHY', ['charge', 'pour-que']),
  rule(2375, 'Trois questions : que vise-t-on, qui atteint le but, et qui va lire ?', 'Three questions: what is the aim, who reaches it, and who will read?',
    '/tʁwa kɛs.tjɔ̃ kə viz.tɔ̃ ki a.tɛ̃ lə byt e ki va liʁ/', 'trwa kes-TYOHⁿ | kuh veez-TOHⁿ | kee a-tehⁿ luh BÜT | ay kee va LEER',
    'Quelles questions poser avant de choisir une tournure de but ?',
    "Si c'est déjà arrivé, c'est un résultat ou une cause. Si le sujet atteint le but, l'infinitif ; sinon, que et le subjonctif. Puis le registre : histoire de, pour, afin de.",
    ['charge']),
  sent(2376, "Nous avons prévu une rampe d'accès pour que les fauteuils roulants puissent entrer.", 'We have planned an access ramp so that wheelchairs can get in.',
    '/nu.za.vɔ̃ pʁe.vy yn ʁɑ̃p dak.sɛ puʁ kə le fo.tœj ʁu.lɑ̃ pɥis ɑ̃.tʁe/', 'noo-za-vohⁿ pray-VÜ | ün rahⁿp dak-SEH | poor kuh lay foh-TUHY roo-LAHⁿ | pwees ahⁿ-TRAY', ['charge', 'pour-que']),
  sent(2377, 'Nous ouvrirons le soir de manière à accueillir ceux qui travaillent.', 'We will open in the evenings so as to welcome those who work.',
    '/nu.zu.vʁi.ʁɔ̃ lə swaʁ də ma.njɛʁ a a.kœ.jiʁ sø ki tʁa.vaj/', 'noo-zoo-vree-rohⁿ luh SWAR | duh ma-NYEHR a a-kuh-YEER | seu kee tra-VYE', ['charge', 'maniere']),
  sent(2378, "Afin de ne pas dépasser le budget, nous avons choisi du matériel d'occasion.", 'So as not to exceed the budget, we chose second-hand equipment.',
    '/a.fɛ̃ də nə pa de.pa.se lə byd.ʒɛ nu.za.vɔ̃ ʃwa.zi dy ma.te.ʁjɛl dɔ.ka.zjɔ̃/', 'a-fehⁿ duh nuh pa day-pa-SAY luh büd-ZHEH | noo-za-vohⁿ shwa-ZEE | dü ma-tay-RYEL do-ka-ZYOHⁿ', ['charge', 'negatif'], FCVDR, SO),
];

/* ── ACT 12 · TA LETTRE DE DEMANDE (.2381-.2391) ─────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(2381, 'Je me permets de vous écrire afin de solliciter votre soutien pour notre projet.', 'I am taking the liberty of writing to you in order to request your support for our project.',
    '/ʒə mə pɛʁ.mɛ də vu.ze.kʁiʁ a.fɛ̃ də sɔ.li.si.te vɔtʁ su.tjɛ̃ puʁ nɔtʁ pʁɔ.ʒɛ/', 'zhuh muh pehr-MEH | duh voo-zay-KREER | a-fehⁿ duh so-lee-see-TAY | votr soo-TYEHⁿ | poor notr pro-ZHEH', ['lettre', 'afin-de'], FCVDR, SO),
  sent(2382, 'Notre projet poursuit un double objectif.', 'Our project has a twofold objective.',
    '/nɔtʁ pʁɔ.ʒɛ puʁ.sɥi œ̃ dubl ɔb.ʒɛk.tif/', 'notr pro-ZHEH poor-SWEE | uhⁿ DOOBL ob-zhek-TEEF', ['lettre', 'objectif'], FCVR, SO),
  sent(2383, "D'une part, nous voulons créer un lieu de rencontre ; d'autre part, nous souhaitons former des bénévoles.", 'On the one hand, we want to create a meeting place; on the other, we wish to train volunteers.',
    '/dyn paʁ nu vu.lɔ̃ kʁe.e œ̃ ljø də ʁɑ̃.kɔ̃tʁ dotʁ paʁ nu swɛ.tɔ̃ fɔʁ.me de be.ne.vɔl/', 'dün PAR | noo voo-lohⁿ kray-AY uhⁿ LYEU duh rahⁿ-KOHⁿTR | dohtr PAR | noo sweh-TOHⁿ for-MAY day bay-nay-VOL', ['lettre', 'sous-objectifs'], FCVR, SO),
  sent(2384, 'Cette somme nous permettrait d\'acheter le matériel nécessaire.', 'This sum would allow us to buy the necessary equipment.',
    '/sɛt sɔm nu pɛʁ.mɛ.tʁɛ daʃ.te lə ma.te.ʁjɛl ne.se.sɛʁ/', 'set SOM | noo pehr-meh-TREH | dash-TAY luh ma-tay-RYEL nay-say-SEHR', ['lettre', 'moyen'], FCVR, SO),
  sent(2385, 'Nous souhaitons éviter que le lieu ne devienne un simple local de stockage.', 'We wish to prevent the place from becoming a mere storage room.',
    '/nu swɛ.tɔ̃.ze.vi.te kə lə ljø nə də.vjɛn œ̃ sɛ̃pl lɔ.kal də stɔ.kaʒ/', 'noo sweh-tohⁿ-zay-vee-TAY | kuh luh LYEU nuh duh-VYENN | uhⁿ sehⁿpl lo-KAL duh sto-KAZH', ['lettre', 'eviter'], FCVR, SO),
  sent(2386, 'Afin que le projet dure, nous formerons deux coordinateurs.', 'So that the project lasts, we will train two coordinators.',
    '/a.fɛ̃ kə lə pʁɔ.ʒɛ dyʁ nu fɔʁ.mə.ʁɔ̃ dø ko.ɔʁ.di.na.tœʁ/', 'a-fehⁿ kuh luh pro-ZHEH DÜR | noo for-muh-ROHⁿ | deu koh-or-dee-na-TUHR', ['lettre', 'afin-que'], FCVR, SO),
  sent(2387, 'Nous nous tenons à votre disposition pour tout renseignement complémentaire.', 'We remain at your disposal for any further information.',
    '/nu nu tə.nɔ̃ a vɔtʁ dis.po.zi.sjɔ̃ puʁ tu ʁɑ̃.sɛɲ.mɑ̃ kɔ̃.ple.mɑ̃.tɛʁ/', 'noo noo tuh-NOHⁿ | a votr dees-poh-zee-SYOHⁿ | poor too rahⁿ-seny-MAHⁿ | kohⁿ-play-mahⁿ-TEHR', ['lettre', 'formule'], FCVR, SO),
  sent(2388, 'Pour que nos ateliers restent gratuits, nous avons besoin de votre aide.', 'So that our workshops stay free, we need your help.',
    '/puʁ kə no.za.tə.lje ʁɛst ɡʁa.tɥi nu.za.vɔ̃ bə.zwɛ̃ də vɔtʁ ɛd/', 'poor kuh noh-za-tuh-LYAY REST gra-TWEE | noo-za-vohⁿ buh-ZWEHⁿ duh votr ED', ['lettre', 'pour-que']),
  sent(2389, 'Nous vous remercions de bien vouloir examiner notre demande.', 'Thank you for kindly considering our application.',
    '/nu vu ʁə.mɛʁ.sjɔ̃ də bjɛ̃ vu.lwaʁ ɛɡ.za.mi.ne nɔtʁ də.mɑ̃d/', 'noo voo ruh-mehr-SYOHⁿ | duh byehⁿ voo-LWAR | eg-za-mee-NAY notr duh-MAHⁿD', ['lettre', 'formule'], FCVR, SO),
  sent(2390, "Nous voulons avant tout éviter de dépendre d'un seul financeur.", 'Above all we want to avoid depending on a single funder.',
    '/nu vu.lɔ̃.za.vɑ̃ tu e.vi.te də de.pɑ̃dʁ dœ̃ sœl fi.nɑ̃.sœʁ/', 'noo voo-lohⁿ-za-vahⁿ TOO | ay-vee-TAY duh day-PAHⁿDR | duhⁿ suhl fee-nahⁿ-SUHR', ['lettre', 'eviter']),
  sent(2391, 'Vous trouverez ci-joint le budget détaillé et le calendrier des travaux.', 'Please find enclosed the detailed budget and the schedule of works.',
    '/vu tʁu.və.ʁe si.ʒwɛ̃ lə byd.ʒɛ de.ta.je e lə ka.lɑ̃.dʁi.je de tʁa.vo/', 'voo troo-vuh-RAY see-ZHWEHⁿ | luh büd-ZHEH day-ta-YAY | ay luh ka-lahⁿ-dree-YAY day tra-VOH', ['lettre', 'formule'], FCVR, SO),
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

/** Act 1: a grant application, Montréal. */
export const LECTURE_DEMANDE =
  "Demande de subvention au programme « Quartiers durables ». Projet : Répar'Tout, un atelier de réparation ouvert à tous, rue Masson, à Montréal. Chaque année, des milliers d'objets finissent à la poubelle alors qu'une vis ou un fil suffirait à les sauver. Notre association vise à prolonger la vie de ces objets et à transmettre les gestes qui permettent de les réparer. Nous demandons cette aide pour ouvrir un atelier le samedi, de façon à accueillir les familles qui travaillent en semaine. Afin que chacun puisse réparer lui-même, des bénévoles guideront chaque visiteur, sans jamais faire le travail à sa place. En vue de l'ouverture, prévue en mars, nous avons besoin de trois établis, d'un jeu d'outils complet et d'une assurance. Les outils seront rangés de sorte que tout le monde les trouve facilement, et chaque poste aura sa fiche illustrée. Dans le but de réduire les déchets du quartier, nous travaillerons aussi avec l'écocentre voisin, qui nous confiera les appareils encore réparables. Nous prévoyons une courte formation pour ne pas mettre les bénévoles en difficulté devant une machine à laver ou un grille-pain capricieux. Enfin, nous limiterons les places à vingt par séance, de peur que l'atelier ne soit débordé. Notre objectif est simple : que dans un an, chaque habitant de Rosemont sache qu'il peut réparer avant de jeter. Nous vous remercions de l'attention que vous porterez à notre demande.";

/** Act 12: the model the learner imitates, a letter requesting support. */
export const LECTURE_MODELE =
  "Lausanne, le 3 mars. Madame, Monsieur, je me permets de vous écrire au nom de l'association Les Jardins de la Côte, afin de solliciter le soutien de votre fondation pour notre projet « Un potager, deux générations ». Notre association vise à rapprocher les habitants d'un quartier où beaucoup de personnes âgées vivent seules. Nous souhaitons aménager un potager partagé au pied de trois immeubles, dans le but de réunir chaque semaine des retraités et des enfants de l'école voisine. Ce projet poursuit un double objectif. D'une part, nous voulons créer un lieu de rencontre, pour que les aînés transmettent leur savoir et que les enfants découvrent d'où viennent les légumes. D'autre part, nous souhaitons former une dizaine de bénévoles, afin que le jardin puisse vivre sans nous. Votre aide, que nous estimons à huit mille francs, nous permettrait d'acheter vingt bacs surélevés, afin que les personnes en fauteuil roulant puissent jardiner elles aussi. Nous tenons aussi à éviter certains écueils. Pour ne pas dépendre d'un seul financeur, nous avons sollicité la commune, qui prendra l'eau en charge. Nous limiterons les groupes à douze personnes, de peur que les plus âgés ne se sentent débordés. Enfin, la finalité de ce projet dépasse le jardinage : nous voulons que personne, dans le quartier, ne reste seul le mercredi après-midi. Vous trouverez ci-joint notre budget détaillé et le calendrier des travaux. Nous nous tenons à votre disposition pour tout renseignement complémentaire et vous remercions de bien vouloir examiner notre demande. Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. Claire Rochat, présidente.";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "Le message de Karine à son équipe de bénévoles, à Sherbrooke. Réécris-le pour la directrice du centre, en registre soutenu, avec afin de ou afin que. « Salut tout le monde ! Je vous écris pour vous donner le programme de samedi. On se retrouve à huit heures pour préparer la salle. Je vous laisse mon numéro pour que vous m'appeliez en cas de problème. Et pour que la fête soit réussie, chacun apporte un plat. Merci ! Karine »";

export const TEXTE_A4 =
  "Le procès-verbal du conseil de l'association Bel Âge, à Liège. Complète avec dans le but de, dans l'intention de, en vue de ou à cette fin. « Le conseil s'est réuni le 12 mai (___) la fête de fin d'année. Mme Lambert est venue (___) proposer un nouveau local : c'était son idée, et elle l'a défendue. L'association souhaite ouvrir le dimanche (___) rompre l'isolement des aînés. (___), elle sollicitera une aide de la commune. »";

export const TEXTE_A5 =
  "La note de M. Diop, principal d'un collège de Dakar, la veille d'un examen blanc. Choisis de façon à ou de façon que, et mets le verbe à la forme qui convient. « Placez les tables (___) pouvoir circuler entre les rangs. Écrivez les consignes au tableau (___) chaque candidat les (voir) bien. Aérez la salle (___) les élèves (pouvoir) se concentrer. Et voici ce qui s'est vraiment passé l'an dernier : nous avions étalé les horaires, de façon que personne n'(attendre) dans la cour. »";

export const TEXTE_A6 =
  "Le mot de Léa à Hugo, qui la remplace pendant ses vacances, dans un bureau de Genève. Remets chaque négation à sa place, et corrige la dernière phrase. « Ferme la porte de la salle (ne pas, pour, les déranger). Note tout dans le carnet (pour, ne rien, oublier). Coupe le chauffage le vendredi pour que la facture (ne pas être) trop lourde. Laisse une clé à l'accueil pour que personne (ne pas rester) bloqué dehors. Et surtout, dors bien le dimanche pour ne pas que tu sois fatigué le lundi. »";

export const TEXTE_A7 =
  "Le message de Mathieu, guide de randonnée, à son groupe, la veille d'une sortie dans Charlevoix. Complète avec de peur de ou de peur que, et mets le verbe à la forme qui convient. « Rendez-vous à six heures : je veux partir tôt, (___) l'orage (éclater) l'après-midi. Prenez une veste chaude, (___) (avoir) froid au sommet. Emportez une carte, (___) vous (perdre) si le groupe se sépare. J'ai réservé le refuge, (___) il (être) complet. À demain ! Mathieu »";

export const TEXTE_A8 =
  "Julien emménage à Lyon. Il a d'abord écrit à ses amis ; il doit maintenant écrire la même chose à Mme Garnier, la gardienne de l'immeuble. Réécris chaque phrase en registre soutenu. « Coucou ! On arrive samedi à neuf heures, histoire d'éviter les bouchons. Descends ouvrir la porte du garage, qu'on puisse garer le camion. Mets un mot sur l'ascenseur, comme ça les voisins sauront qu'il est réservé. »";

export const TEXTE_A9 =
  "Le bilan annuel de l'association Répar'Tout, à Montréal. Pour chaque « pour », dis s'il donne un but ou une cause. « Cette année, notre association a été récompensée pour avoir ouvert un atelier gratuit. Nous remercions la Ville pour son soutien, et nos bénévoles pour leur patience. L'atelier a été fermé deux semaines pour travaux. L'an prochain, nous solliciterons une aide pour ouvrir un second atelier, et nous chercherons des bénévoles pour la fête de quartier. »";

export const TEXTE_A10 =
  "La fiche de présentation d'un incubateur de Dakar, trop répétitive. Réécris chaque phrase avec la tournure indiquée. « Notre programme est là pour aider les artisanes à vendre en ligne (vise à). Il est fait pour former cinquante couturières en un an (notre objectif est de). Nous voulons que chaque participante ouvre sa propre boutique (le but est que). Tout ça, c'est pour réduire le chômage des femmes du quartier (a pour finalité de). »";

export const TEXTE_A11 =
  "Le règlement de l'appel à projets « Quartiers vivants », à Lausanne. Complète chaque blanc et mets chaque verbe à la forme qui convient. « (___) déposer votre demande, connectez-vous au portail avant le trente avril. Joignez un budget détaillé afin que le jury (pouvoir) évaluer votre projet. Relisez votre dossier (___) oublier de pièce justificative. Envoyez-le tôt, de peur que le portail ne (être) saturé le dernier jour. L'an dernier, beaucoup de dossiers sont arrivés en retard, de sorte que le jury (devoir) en refuser vingt. »";
