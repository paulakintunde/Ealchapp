// b2.22.l1 « Le style académique »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md with the WORKSHOP SHAPE
// of B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (and §1.4), under the B2 rules of
// B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b2.23 argumentation may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE ACADEMIC PARAGRAPH, the first B2 writing lesson. It owns:
//
//     l'unité             one idea per paragraph, the topic sentence
//                         (la phrase-clé), the closing sentence
//     la progression      announcing a plan (nous examinerons en premier
//                         lieu, d'une part… d'autre part, il convient de),
//                         following it, passing from one part to the next
//     l'enchaînement      the B2 written connectors (en outre, toutefois,
//                         néanmoins, or, ainsi, au regard de) on top of B1's
//     la nuance           hedged claims (il semble que, il semblerait que,
//                         on peut supposer que, dans une certaine mesure,
//                         tendre à) and the certainty scale, with its moods
//     la cohésion         reprises (ce phénomène, cette tendance, ces
//                         derniers, celle-ci, une telle évolution) and a light
//                         nominalisation (augmenter → la hausse)
//     la voix             the authorial nous, on, the impersonal (il apparaît
//                         que, il importe de)
//     le registre         familiar words in an academic text, and the
//                         opposite trap (« faire savant »)
//
//   NOT OWNED, CITED BY TRAIL POSITION (never re-taught):
//     lesson 15 in B1   il semble que + subjonctif, il me semble que + indicatif
//     lesson 25 in B1   register (reframe quoted)
//     lessons 30 to 32  connectors (three reframes quoted, rows reused by id)
//     lesson 37 in B1   ce dernier, cette dernière in reading (row reused)
//     lesson 39 in B1   one paragraph, one idea (reframe quoted, row reused)
//     lesson 10 in B2   nominalisation in depth (named, not built here)
//     lesson 23 in B2   argumentation: what this lesson prepares
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB probed 2026-09-27
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `universite` (« L'université », education, b1-b2). Sub-themes to
//     set in Postgres at import: « écrire à l'université », « le paragraphe
//     et la progression », « nuancer une affirmation ». Probed live
//     2026-09-27 (read-only): 151 `fr.b1.universite` rows (max 151) and 168
//     `fr.b2.universite` rows (max 168), NOTHING at or above 1000. The seed
//     carries only 16 of them, so every DB-only row (la problématique, la
//     synthèse, la nuance, la citation, l'argumentation, le plan détaillé,
//     la pertinence, le brouillon…) was checked by hand: this corpus authors
//     NO non-sentence row whose headword the theme already has.
//
//  2. ID BLOCK: `.1000`-`.1199`, claimed by the orchestrator's brief.
//     Authored: `.1000`-`.1167`, 168 rows in eleven act blocks, no gaps;
//     .1164-.1167 sit in the act 6 block (lecture lines added last).
//     Nothing outside the block. The ledger line in B2-BUILD-LOG.md is the
//     orchestrator's to write (authors do not edit it).
//
//  3. REUSED ROWS. B1 is live (v76), so the seed carries the rows of
//     lessons 15, 25, 30 to 32, 37, 38 and 39; `src()` resolves them and they
//     are reused BY ID, not twinned: the connectors (cependant, par
//     conséquent, en effet, de plus, or, certes, toutefois, néanmoins), « ce
//     dernier, cette dernière », « d'une part, d'autre part », « il semble
//     que », lesson 39's paragraph rule, lesson 25's register rows. Seed read
//     2026-09-27.
//
//  4. RESPELLINGS SPELLED FOR THE NASAL CHECKER. `hasPlainNasal` flags any
//     AH / OH / EH / UH / EU / AI / OU closed by a plain n or m. « semaine »
//     is suh-MENN, « certaine » sehr-TENN, « phénomène » fay-no-MENN,
//     « personne » pehr-SONN, « prochaines » pro-SHENN, « entraîne »
//     ahⁿ-TRENN, « moyenne » mwa-YENN: the doubled consonant is for the
//     checker, not the ear. No U+203F tie anywhere.
//
//  5. APOSTROPHES. Corpus rows and texts use the straight ' as the seed does.
//     Every `scenario` in the lesson is written with ’ only and never embeds
//     a corpus row, so no scenario mixes the two (scenario.logic).
//
//  6. FACTS. Every figure in the anchor texts (the 412 students, the
//     fifteen-hour threshold, the 300 night users, the survey of 600) belongs
//     to an invented study, report or essay, presented as such. No real
//     institution is quoted as having published a figure.
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
  id: 'b2.22',
  seq: 22,
  title: 'Academic Style',
  sub: 'Le style académique',
  canDo: 'Can write a coherent academic paragraph pair of 180 to 250 words: one idea per paragraph opened by a topic sentence, an announced and followed progression, claims hedged to the strength of the evidence, ideas picked up by reprises rather than repetition, the authorial nous or the impersonal, and no conversational word',
  prereqUnitIds: ['b1.15', 'b1.25', 'b1.30', 'b1.31', 'b1.32', 'b1.37', 'b1.39'],
} as const;

export const LESSON_ID = 'b2.22.l1';
export const THEME = 'universite';
export const LEVEL = 'b2' as const;

/** ONE block. Everything below 1000 is published (§A.1). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan:
 *  a B1 unit id's number IS its trail position (B1_SEQ_FROM_PLAN in every
 *  B1 corpus), and the B2 plan in B2-BUILD-LOG.md numbers b2.01 to b2.34 in
 *  trail order.
 * ══════════════════════════════════════════════════════════════════════════ */

export const SUBJ_DECL_UNIT = 'b1.15';
export const REGISTRES_UNIT = 'b1.25';
export const COORD_UNIT = 'b1.30';
export const SUBORD_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const LECTURE_UNIT = 'b1.37';
export const COURRIELS_UNIT = 'b1.39';
export const NOMINAL_UNIT = 'b2.10';
export const ARGUMENT_UNIT = 'b2.23';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const COORD_REF = refFr(COORD_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);
export const COURRIELS_REF = refFr(COURRIELS_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const ARGUMENT_REF = refFr(ARGUMENT_UNIT);
export const CONNECTEURS_RANGE_REF = 'les leçons 30 à 32 du B1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B130_REFRAME, REFRAME_EN as B130_REFRAME_EN } from '../b1/coordination-corpus.ts';
export { REFRAME as B131_REFRAME, REFRAME_EN as B131_REFRAME_EN } from '../b1/subordination-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';
export { REFRAME as B139_REFRAME, REFRAME_EN as B139_REFRAME_EN } from '../b1/courriels-lettres-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE THREAD. A reader follows an academic text like a thread: one idea per
 *  paragraph (the thread does not fork), a link between the sentences
 *  (connector, reprise, announced plan: the thread does not break), and
 *  claims no stronger than the evidence (the thread does not pull more
 *  than it can hold). Register is the colour of the thread: act 10.
 *
 *  It is NOT « write complicated »: act 8 warns against stacked nouns and
 *  act 10 against « faire savant ».
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Une idée par paragraphe, un fil entre les phrases, et jamais plus sûr que tes preuves.';
export const REFRAME_EN = 'One idea per paragraph, a thread between the sentences, and never surer than your evidence.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Écrire académique, c’est écrire compliqué.',
    why: 'False where acts 8 and 10 have to hold: a chain of stacked nouns (« la mise en œuvre de l’amélioration de la réduction ») and « nonobstant, d’aucuns » are both marked down. The academic register is formal AND clear.',
  },
  {
    text: 'Un texte académique ne dit jamais « je ».',
    why: 'Too blunt for act 9: the authorial « nous » is the norm in French, and a stance still exists. What changes is that an opinion becomes a thesis backed by facts, not that the author disappears.',
  },
  {
    text: 'Nuance tout, et on ne pourra rien te reprocher.',
    why: 'False where act 6 has to hold: a paper where every sentence starts with « peut-être » defends nothing. Hedging is measured against the evidence, in both directions.',
  },
  {
    text: 'Mets un connecteur au début de chaque phrase.',
    why: 'Acts 4 and 7 contradict it: a reprise (« ce phénomène ») links as well as a connector, and a connector with the wrong relation (« or » for « donc ») breaks the thread more than no connector.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

export const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;
export const LS = (n: number) => `fr.b1.langue-soignee.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    'fr.b1.correspondance.1155',             // Un paragraphe, une idée, et un connecteur en tête de chaque étape.  (lesson 39, flashcard rule)
  ],
  act3: [
    'fr.b1.strategies-de-comprehension.1370', // d'une part, d'autre part  (lesson 38)
  ],
  act4: [
    CL(1120),                                 // Il a l'air fatigué. En effet, il a mal dormi.  (lesson 30)
    CL(1119),                                 // Le projet est utile. De plus, il ne coûte pas cher.  (lesson 30)
    CL(1105),                                 // La réunion était prévue à dix heures. Or, personne n'est venu.  (lesson 30)
    CL(1143),                                 // Le test était facile. Cependant, peu d'élèves l'ont réussi.  (lesson 30)
    CL(1206),                                 // Il a tellement neigé que les écoles ont fermé.  (lesson 31)
    CL(1573),                                 // Certes, le projet coûte cher, mais il profite à tout le monde.  (lesson 32)
    CL(103),                                  // par conséquent
    'fr.b2.connecteurs-logiques.041',         // toutefois
    'fr.b2.connecteurs-logiques.040',         // néanmoins
  ],
  act5: [
    'fr.b1.opinions-et-avis.1282',            // il semble que  (lesson 15)
    'fr.b1.opinions-et-avis.1367',            // Il semble que prend le subjonctif, il me semble que ne le prend pas.  (lesson 15, flashcard rule)
  ],
  act6: [] as string[],
  act7: [
    'fr.b1.strategies-de-comprehension.1153', // ce dernier, cette dernière  (lesson 37)
  ],
  act8: [] as string[],
  act9: [] as string[],
  act10: [
    LS(1215),                                 // Aucun registre n'est faux. Chacun va avec une personne et un moment.  (lesson 25, flashcard rule)
    LS(1250),                                 // le boulot  (familier)
    LS(1258),                                 // bosser  (familier)
    LS(1307),                                 // bcp  (review only: named, never released)
    'fr.b1.description-personnes-objets.1134', // cela
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Rows whose French matches a row published in POSTGRES ONLY (the seed does
 *  not carry it, so `src()` cannot reuse it). Probed live 2026-09-27. Each is
 *  in another theme, so the flashcard hub does not clash; the dedupe decision
 *  at import is Paul's (B1-BUILD-LOG, « Twins dedupe to the published row »). */
export const DB_ONLY_TWINS = [
  { dbId: 'fr.b1.connecteurs-logiques.111', fr: 'en outre', twin: E(1057) },
  { dbId: 'fr.sons.mots-de-liaison.022', fr: 'ainsi', twin: E(1059) },
  { dbId: 'fr.b2.opinions-et-avis.039', fr: 'dans une certaine mesure', twin: E(1072) },
];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  LS(1307),                                   // review only (a texting abbreviation)
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  LS(1307),                                   // review only
  'fr.b1.correspondance.1155',                // flashcard only (a rule card)
  'fr.b1.opinions-et-avis.1367',              // flashcard only (a rule card)
  LS(1215),                                   // flashcard only (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
/** Counter-examples: recognised, never produced, never spoken. */
const RECO = ['review'] as Item['drills'];

const F: Register = 'familier';
const C: Register = 'courant';
const S: Register = 'soutenu';

const sent = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, grammarPoints: ['style-academique'], ...extra,
});

const phrase = (
  n: number, register: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE PREMIER JET ──────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, F, "Les cours en ligne, c'est super pratique.", 'Online classes are super handy.', '/le kuʁ ɑ̃ liɲ sɛ sy.pɛʁ pʁa.tik/', 'lay koor ahⁿ LEENY | seh sü-pehr pra-TEEK', ['scene', 'contre-exemple'], RECO),
  sent(1001, F, "Du coup, plein d'étudiants les préfèrent.", 'So loads of students prefer them.', '/dy ku plɛ̃ de.ty.djɑ̃ le pʁe.fɛʁ/', 'dü KOO | plehⁿ day-tü-DYAHⁿ | lay pray-FEHR', ['scene', 'contre-exemple'], RECO),
  sent(1002, C, 'Mon cousin, par exemple, a eu de meilleures notes.', 'My cousin, for example, got better marks.', '/mɔ̃ ku.zɛ̃ paʁ ɛɡ.zɑ̃pl a y də mɛ.jœʁ nɔt/', 'mohⁿ koo-ZEHⁿ | par eg-ZAHⁿPL | a ü duh meh-yuhr NOT', ['scene', 'anecdote'], RECO),
  sent(1003, S, 'Il est prouvé que les cours en ligne font réussir tous les étudiants.', 'It is proven that online classes make every student succeed.', '/i.lɛ pʁu.ve kə le kuʁ ɑ̃ liɲ fɔ̃ ʁe.y.siʁ tu le.ze.ty.djɑ̃/', 'ee-leh proo-VAY | kuh lay koor ahⁿ LEENY | fohⁿ ray-ü-SEER | too lay-zay-tü-DYAHⁿ', ['scene', 'trop-sur'], RECO),
  sent(1004, S, 'Dans une certaine mesure, les cours en ligne semblent favoriser la réussite.', 'To some extent, online classes seem to help students succeed.', '/dɑ̃.zyn sɛʁ.tɛn mə.zyʁ le kuʁ ɑ̃ liɲ sɑ̃bl fa.vɔ.ʁi.ze la ʁe.y.sit/', 'dahⁿ-zün sehr-tenn muh-ZÜR | lay koor ahⁿ LEENY | sahⁿbl fa-vo-ree-ZAY la ray-ü-SEET', ['scene', 'nuance'], FCVDR),
  sent(1005, C, 'Une anecdote ne suffit pas à prouver une idée.', 'One anecdote is not enough to prove an idea.', '/y.na.nɛk.dɔt nə sy.fi pa a pʁu.ve y.ni.de/', 'ü-na-nehk-DOT | nuh sü-fee PA | a proo-VAY ü-nee-DAY', ['preuve']),
  phrase(1006, C, 'le premier jet', 'the first draft', '/lə pʁə.mje ʒɛ/', 'luh pruh-myay ZHEH', ['mot']),
  phrase(1007, C, 'la phrase-clé', 'the topic sentence', '/la fʁaz.kle/', 'la fraz-KLAY', ['mot', 'paragraphe']),
  sent(1008, C, REFRAME, REFRAME_EN, '/yn i.de paʁ pa.ʁa.ɡʁaf œ̃ fil ɑ̃.tʁə le fʁaz e ʒa.mɛ ply syʁ kə te pʁœv/', 'ün ee-DAY par pa-ra-GRAF | uhⁿ FEEL ahⁿ-truh lay FRAZ | ay zha-meh plü SÜR | kuh tay PRUHV', ['rule', 'reframe'], ['flashcard'],
    rule('Les trois exigences du style académique ?', 'Une idée par paragraphe, un fil entre les phrases, et des affirmations à la mesure de tes preuves.')),
  sent(1009, C, 'Votre paragraphe traite de quatre sujets à la fois.', 'Your paragraph deals with four topics at once.', '/vɔ.tʁə pa.ʁa.ɡʁaf tʁɛt də katʁ sy.ʒɛ a la fwa/', 'vo-truh pa-ra-GRAF | treht duh katr sü-ZHEH | a la FWA', ['commentaire']),
  sent(1010, C, "Votre lecteur s'y perd.", 'Your reader gets lost in it.', '/vɔtʁ lɛk.tœʁ si pɛʁ/', 'votr lehk-TUHR | see PEHR', ['commentaire']),
  sent(1011, C, 'Réécrivez ce passage en deux paragraphes, avec une idée chacun.', 'Rewrite this passage as two paragraphs, one idea each.', '/ʁe.e.kʁi.ve sə pa.saʒ ɑ̃ dø pa.ʁa.ɡʁaf a.vɛ.kyn i.de ʃa.kœ̃/', 'ray-ay-kree-VAY suh pa-SAZH | ahⁿ deu pa-ra-GRAF | a-veh-kün ee-DAY sha-KUHⁿ', ['commentaire'], FCVDR),
  phrase(1012, C, 'la chargée de cours', 'the (female) lecturer', '/la ʃaʁ.ʒe də kuʁ/', 'la shar-zhay duh KOOR', ['mot', 'quebec']),
];

/* ── ACT 2 · UNE IDÉE PAR PARAGRAPHE ─────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1013, C, "Le coût du logement pèse d'abord sur le temps d'étude.", 'The cost of housing weighs first of all on study time.', '/lə ku dy lɔʒ.mɑ̃ pɛz da.bɔʁ syʁ lə tɑ̃ de.tyd/', 'luh koo dü lozh-MAHⁿ | pehz da-BOR | sür luh tahⁿ day-TÜD', ['phrase-cle'], FCVDR),
  sent(1014, C, 'En effet, un étudiant qui paie un loyer élevé doit souvent travailler à côté de ses cours.', 'Indeed, a student who pays a high rent often has to work alongside their classes.', '/ɑ̃.ne.fɛ œ̃.ne.ty.djɑ̃ ki pɛ œ̃ lwa.je el.ve dwa su.vɑ̃ tʁa.va.je a ko.te də se kuʁ/', 'ahⁿ-nay-FEH | uhⁿ-nay-tü-DYAHⁿ kee PEH | uhⁿ lwa-yay ayl-VAY | dwa soo-VAHⁿ | tra-va-YAY a ko-tay duh say KOOR', ['developpement']),
  sent(1015, C, "Près d'un étudiant sur deux exerce une activité rémunérée pendant l'année.", 'Nearly one student in two has a paid job during the year.', '/pʁɛ dœ̃.ne.ty.djɑ̃ syʁ dø ɛɡ.zɛʁs y.nak.ti.vi.te ʁe.my.ne.ʁe pɑ̃.dɑ̃ la.ne/', 'preh duhⁿ-nay-tü-DYAHⁿ sür DEU | eg-zehrs ü-nak-tee-vee-TAY ray-mü-nay-RAY | pahⁿ-dahⁿ la-NAY', ['preuve']),
  sent(1016, C, 'Ce premier obstacle est donc financier, mais ses effets sont avant tout académiques.', 'So this first obstacle is financial, but its effects are above all academic.', '/sə pʁə.mje ɔp.stakl ɛ dɔ̃k fi.nɑ̃.sje mɛ se.ze.fɛ sɔ̃.ta.vɑ̃ tu a.ka.de.mik/', 'suh pruh-myay op-STAKL | eh dohⁿk fee-nahⁿ-SYAY | meh say-zay-FEH | sohⁿ-ta-vahⁿ TOO | a-ka-day-MEEK', ['cloture'], FCVDR),
  sent(1017, C, 'La distance entre le logement et le campus constitue un second obstacle.', 'The distance between home and campus is a second obstacle.', '/la dis.tɑ̃s ɑ̃.tʁə lə lɔʒ.mɑ̃ e lə kɑ̃.pys kɔ̃s.ti.ty œ̃ sə.ɡɔ̃ ɔp.stakl/', 'la dees-TAHⁿS | ahⁿ-truh luh lozh-MAHⁿ ay luh kahⁿ-PÜS | kohⁿs-tee-TÜ | uhⁿ suh-gohⁿ op-STAKL', ['phrase-cle'], FCVDR),
  sent(1018, C, "Faute de chambres abordables en ville, de nombreux étudiants s'installent en périphérie.", 'For lack of affordable rooms in town, many students settle on the outskirts.', '/fot də ʃɑ̃.bʁə.za.bɔʁ.dabl ɑ̃ vil də nɔ̃.bʁø.ze.ty.djɑ̃ sɛ̃s.tal ɑ̃ pe.ʁi.fe.ʁi/', 'foht duh shahⁿ-bruh-za-bor-DABL ahⁿ VEEL | duh nohⁿ-breu-zay-tü-DYAHⁿ | sehⁿs-TAL ahⁿ pay-ree-fay-REE', ['developpement']),
  sent(1019, C, "Ainsi, l'étudiant éloigné du campus risque de s'isoler.", 'So the student who lives far from campus risks becoming isolated.', '/ɛ̃.si le.ty.djɑ̃ e.lwa.ɲe dy kɑ̃.pys ʁisk də si.zɔ.le/', 'ehⁿ-SEE | lay-tü-dyahⁿ ay-lwa-NYAY dü kahⁿ-PÜS | reesk duh see-zo-LAY', ['cloture']),
  sent(1020, C, 'Les étudiants dorment en moyenne moins de sept heures par nuit pendant les examens.', 'During exams, students sleep on average less than seven hours a night.', '/le.ze.ty.djɑ̃ dɔʁm ɑ̃ mwa.jɛn mwɛ̃ də sɛ.tœʁ paʁ nɥi pɑ̃.dɑ̃ le.zɛɡ.za.mɛ̃/', 'lay-zay-tü-DYAHⁿ | dorm ahⁿ mwa-YENN | mwehⁿ duh seh-TUHR par NWEE | pahⁿ-dahⁿ lay-zeg-za-MEHⁿ', ['intrus']),
  sent(1021, C, 'Or, le manque de sommeil réduit la capacité de concentration.', 'Yet lack of sleep reduces the ability to concentrate.', '/ɔʁ lə mɑ̃k də sɔ.mɛj ʁe.dɥi la ka.pa.si.te də kɔ̃.sɑ̃.tʁa.sjɔ̃/', 'OR | luh mahⁿk duh so-MEHY | ray-dwee la ka-pa-see-TAY | duh kohⁿ-sahⁿ-tra-SYOHⁿ', ['intrus']),
  sent(1022, C, 'La cafétéria du campus propose désormais des repas végétariens.', 'The campus cafeteria now offers vegetarian meals.', '/la ka.fe.te.ʁja dy kɑ̃.pys pʁɔ.poz de.zɔʁ.mɛ de ʁə.pa ve.ʒe.ta.ʁjɛ̃/', 'la ka-fay-tay-RYA dü kahⁿ-PÜS | pro-POHZ day-zor-MEH | day ruh-pa vay-zhay-ta-RYEHⁿ', ['intrus']),
  sent(1023, C, 'Réviser toute la nuit peut donc nuire aux résultats.', 'So revising all night can harm results.', '/ʁe.vi.ze tut la nɥi pø dɔ̃k nɥiʁ o ʁe.zyl.ta/', 'ray-vee-ZAY toot la NWEE | peu dohⁿk NWEER | oh ray-zül-TA', ['intrus', 'cloture']),
  sent(1024, C, 'Il y a beaucoup de choses à dire sur le logement.', 'There is a lot to say about housing.', '/i.li.ja bo.ku də ʃoz a diʁ syʁ lə lɔʒ.mɑ̃/', 'ee-lee-ya boh-koo duh SHOHZ | a deer sür luh lozh-MAHⁿ', ['contre-exemple'], RECO),
  sent(1025, C, 'Le logement étudiant soulève deux difficultés principales.', 'Student housing raises two main difficulties.', '/lə lɔʒ.mɑ̃ e.ty.djɑ̃ su.lɛv dø di.fi.kyl.te pʁɛ̃.si.pal/', 'luh lozh-mahⁿ ay-tü-DYAHⁿ | soo-LEHV | deu dee-fee-kül-TAY prehⁿ-see-PAL', ['phrase-cle']),
  sent(1026, C, "Un paragraphe, une idée : la phrase-clé l'annonce, les autres la prouvent.", 'One paragraph, one idea: the topic sentence announces it, the others prove it.', '/œ̃ pa.ʁa.ɡʁaf yn i.de la fʁaz.kle la.nɔ̃s le.zotʁ la pʁuv/', 'uhⁿ pa-ra-GRAF | ün ee-DAY | la fraz-KLAY la-NOHⁿS | lay-ZOHTR la PROOV', ['rule', 'paragraphe'], ['flashcard'],
    rule("Que fait chaque phrase d'un paragraphe académique ?", "La phrase-clé annonce l'idée ; les suivantes l'expliquent et la prouvent ; la dernière la referme.")),
  phrase(1027, C, 'la phrase de clôture', 'the closing sentence', '/la fʁaz də klo.tyʁ/', 'la fraz duh kloh-TÜR', ['mot', 'paragraphe']),
  sent(1028, C, 'Au-delà de quinze heures par semaine, le travail rémunéré semble nuire aux études.', 'Beyond fifteen hours a week, paid work seems to harm studies.', '/o.də.la də kɛ̃.zœʁ paʁ sə.mɛn lə tʁa.vaj ʁe.my.ne.ʁe sɑ̃bl nɥiʁ o.ze.tyd/', 'oh-duh-LA duh kehⁿ-ZUHR par suh-MENN | luh tra-vahy ray-mü-nay-RAY | sahⁿbl nweer oh-zay-TÜD', ['mission', 'phrase-cle'], FCVDR),
  sent(1029, C, 'Le travail rémunéré présente aussi des avantages pour certains étudiants.', 'Paid work also has advantages for some students.', '/lə tʁa.vaj ʁe.my.ne.ʁe pʁe.zɑ̃t o.si de.za.vɑ̃.taʒ puʁ sɛʁ.tɛ̃.ze.ty.djɑ̃/', 'luh tra-vahy ray-mü-nay-RAY | pray-zahⁿt oh-SEE | day-za-vahⁿ-TAZH | poor sehr-tehⁿ-zay-tü-DYAHⁿ', ['mission', 'phrase-cle']),
];

/* ── ACT 3 · ANNONCER LE PLAN ────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1030, C, "La question se pose donc de savoir si l'ordinateur favorise l'apprentissage.", 'The question, then, is whether the laptop helps learning.', '/la kɛs.tjɔ̃ sə poz dɔ̃k də sa.vwaʁ si lɔʁ.di.na.tœʁ fa.vɔ.ʁiz la.pʁɑ̃.ti.saʒ/', 'la kehs-TYOHⁿ | suh pohz dohⁿk duh sa-VWAR | see lor-dee-na-TUHR | fa-vo-reez la-prahⁿ-tee-SAZH', ['question']),
  sent(1031, S, "Il convient d'abord de préciser les termes du débat.", 'We should first define the terms of the debate.', '/il kɔ̃.vjɛ̃ da.bɔʁ də pʁe.si.ze le tɛʁm dy de.ba/', 'eel kohⁿ-VYEHⁿ da-BOR | duh pray-see-ZAY | lay tehrm dü day-BA', ['annonce', 'impersonnel'], FCVDR),
  sent(1032, S, "Nous examinerons en premier lieu les avantages de l'ordinateur.", 'We will first examine the advantages of the laptop.', '/nu.zɛɡ.za.mi.nʁɔ̃ ɑ̃ pʁə.mje ljø le.za.vɑ̃.taʒ də lɔʁ.di.na.tœʁ/', 'noo-zeg-za-mee-NROHⁿ | ahⁿ pruh-myay LYEU | lay-za-vahⁿ-TAZH | duh lor-dee-na-TUHR', ['annonce'], FCVDR),
  sent(1033, S, 'En second lieu, nous analyserons les risques de distraction.', 'Secondly, we will analyse the risks of distraction.', '/ɑ̃ sə.ɡɔ̃ ljø nu.za.na.li.zə.ʁɔ̃ le ʁisk də dis.tʁak.sjɔ̃/', 'ahⁿ suh-gohⁿ LYEU | noo-za-na-lee-zuh-ROHⁿ | lay reesk duh dees-trak-SYOHⁿ', ['annonce']),
  sent(1034, S, "Nous verrons enfin dans quelle mesure des règles d'usage permettraient de concilier ces points de vue.", 'Finally, we will see to what extent rules of use could reconcile these points of view.', '/nu vɛ.ʁɔ̃ ɑ̃.fɛ̃ dɑ̃ kɛl mə.zyʁ de ʁɛɡl dy.zaʒ pɛʁ.mɛ.tʁɛ də kɔ̃.si.lje se pwɛ̃ də vy/', 'noo veh-rohⁿ ahⁿ-FEHⁿ | dahⁿ kehl muh-ZÜR | day rehgl dü-ZAZH | pehr-meh-TREH | duh kohⁿ-see-LYAY say pwehⁿ duh VÜ', ['annonce']),
  sent(1035, C, "Ce risque concerne d'une part l'étudiant lui-même, d'autre part ses voisins.", 'This risk concerns the student themselves on the one hand, and their neighbours on the other.', '/sə ʁisk kɔ̃.sɛʁn dyn paʁ le.ty.djɑ̃ lɥi.mɛm do.tʁə paʁ se vwa.zɛ̃/', 'suh reesk kohⁿ-SEHRN | dün PAR | lay-tü-dyahⁿ lwee-MEM | doh-truh PAR | say vwa-ZEHⁿ', ['deux-faces'], FCVDR),
  sent(1036, C, 'Après avoir examiné les avantages, voyons à présent les limites.', 'Having examined the advantages, let us now look at the limits.', '/a.pʁɛ.za.vwaʁ ɛɡ.za.mi.ne le.za.vɑ̃.taʒ vwa.jɔ̃ a pʁe.zɑ̃ le li.mit/', 'a-preh-za-vwar eg-za-mee-NAY | lay-za-vahⁿ-TAZH | vwa-yohⁿ a pray-ZAHⁿ | lay lee-MEET', ['transition'], FCVDR),
  sent(1037, C, "En définitive, tout dépend de l'usage qu'on en fait.", 'In the end, it all depends on how it is used.', '/ɑ̃ de.fi.ni.tiv tu de.pɑ̃ də ly.zaʒ kɔ̃.nɑ̃ fɛ/', 'ahⁿ day-fee-nee-TEEV | too day-PAHⁿ | duh lü-ZAZH | kohⁿ-nahⁿ FEH', ['conclure']),
  sent(1038, F, 'Dans cette partie, on va voir les avantages.', "In this part, we're gonna look at the advantages.", '/dɑ̃ sɛt paʁ.ti ɔ̃ va vwaʁ le.za.vɑ̃.taʒ/', 'dahⁿ seht par-TEE | ohⁿ va VWAR | lay-za-vahⁿ-TAZH', ['contre-exemple'], RECO),
  sent(1039, C, "D'une part, les notes sont plus complètes.", 'On the one hand, the notes are more complete.', '/dyn paʁ le nɔt sɔ̃ ply kɔ̃.plɛt/', 'dün PAR | lay not sohⁿ plü kohⁿ-PLEHT', ['contre-exemple', 'deux-faces'], RECO),
  phrase(1040, C, "l'annonce du plan", 'the outline of the plan', '/la.nɔ̃s dy plɑ̃/', 'la-nohⁿs dü PLAHⁿ', ['mot']),
  phrase(1041, C, 'en premier lieu', 'firstly, in the first place', '/ɑ̃ pʁə.mje ljø/', 'ahⁿ pruh-myay LYEU', ['connecteur']),
  phrase(1042, S, 'il convient de', 'it is advisable to, one should', '/il kɔ̃.vjɛ̃ də/', 'eel kohⁿ-VYEHⁿ DUH', ['impersonnel']),
  sent(1043, C, "Annonce ton plan, puis suis-le dans l'ordre annoncé.", 'Announce your plan, then follow it in the order announced.', '/a.nɔ̃s tɔ̃ plɑ̃ pɥi sɥi.lə dɑ̃ lɔʁ.dʁə a.nɔ̃.se/', 'a-NOHⁿS tohⁿ PLAHⁿ | pwee SWEE-luh | dahⁿ lor-druh a-nohⁿ-SAY', ['rule', 'annonce'], ['flashcard'],
    rule('Tu annonces trois parties dans ton introduction. Que doit trouver ton lecteur ensuite ?', 'Les trois parties, dans le même ordre, chacune ouverte par le mot annoncé.')),
  sent(1044, C, 'Dans un premier temps, nous présenterons les faits.', 'First, we will present the facts.', '/dɑ̃.zœ̃ pʁə.mje tɑ̃ nu pʁe.zɑ̃.tʁɔ̃ le fɛ/', 'dahⁿ-zuhⁿ pruh-myay TAHⁿ | noo pray-zahⁿ-TROHⁿ lay FEH', ['annonce'], FCVDR),
  sent(1045, C, 'Nous nous demanderons ensuite comment réduire ce risque.', 'We will then ask how to reduce this risk.', '/nu nu də.mɑ̃.də.ʁɔ̃ ɑ̃.sɥit kɔ.mɑ̃ ʁe.dɥiʁ sə ʁisk/', 'noo noo duh-mahⁿ-duh-ROHⁿ ahⁿ-SWEET | ko-mahⁿ ray-dweer suh REESK', ['annonce']),
  sent(1046, C, "Ce constat mérite toutefois d'être nuancé.", 'This observation, however, deserves to be qualified.', '/sə kɔ̃s.ta me.ʁit tut.fwa dɛtʁ nɥɑ̃.se/', 'suh kohⁿs-TA | may-reet toot-FWA | dehtr nwahⁿ-SAY', ['transition', 'mission'], FCVDR),
];

/* ── ACT 4 · ENCHAÎNER LES ÉTAPES ────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1047, C, "L'ouverture de la bibliothèque la nuit a été testée en décembre dernier.", 'Opening the library at night was tried out last December.', '/lu.vɛʁ.tyʁ də la bi.bli.jɔ.tɛk la nɥi a e.te tɛs.te ɑ̃ de.sɑ̃bʁ dɛʁ.nje/', 'loo-vehr-TÜR | duh la bee-blee-yo-TEHK la NWEE | a ay-tay tehs-TAY | ahⁿ day-sahⁿbr dehr-NYAY', ['rapport']),
  sent(1048, C, 'En effet, les associations étudiantes la réclamaient depuis plusieurs années.', 'Indeed, the student associations had been asking for it for several years.', '/ɑ̃.ne.fɛ le.za.sɔ.sja.sjɔ̃ e.ty.djɑ̃t la ʁe.kla.mɛ də.pɥi ply.zjœ.ʁza.ne/', 'ahⁿ-nay-FEH | lay-za-so-sya-syohⁿ ay-tü-DYAHⁿT | la ray-kla-MEH | duh-pwee plü-zyuh-za-NAY', ['expliquer'], FCVDR),
  sent(1049, C, "En outre, aucun incident de sécurité n'a été signalé.", 'Moreover, no security incident was reported.', '/ɑ̃.nutʁ o.kœ̃.nɛ̃.si.dɑ̃ də se.ky.ʁi.te na e.te si.ɲa.le/', 'ahⁿ-NOOTR | oh-kuhⁿ-nehⁿ-see-DAHⁿ duh say-kü-ree-TAY | na ay-tay see-nya-LAY', ['ajouter'], FCVDR),
  sent(1050, C, "Certes, l'expérience a un coût.", 'Admittedly, the experiment has a cost.', '/sɛʁt lɛk.spe.ʁjɑ̃s a œ̃ ku/', 'SEHRT | lehk-spay-ryahⁿs a uhⁿ KOO', ['conceder']),
  sent(1051, C, 'Toutefois, ce coût reste modeste au regard du budget total.', 'However, this cost remains modest in relation to the total budget.', '/tut.fwa sə ku ʁɛst mɔ.dɛst o ʁə.ɡaʁ dy byd.ʒɛ tɔ.tal/', 'toot-FWA | suh koo rehst mo-DEHST | oh ruh-gar dü büd-zheh to-TAL', ['opposer'], FCVDR),
  sent(1052, C, 'Or, le sommeil joue un rôle essentiel dans la mémorisation.', 'Yet sleep plays an essential role in memorising.', '/ɔʁ lə sɔ.mɛj ʒu œ̃ ʁol e.sɑ̃.sjɛl dɑ̃ la me.mɔ.ʁi.za.sjɔ̃/', 'OR | luh so-MEHY | zhoo uhⁿ rohl ay-sahⁿ-SYEHL | dahⁿ la may-mo-ree-za-SYOHⁿ', ['or']),
  sent(1053, C, "Il convient donc d'accompagner cette mesure d'une campagne sur le sommeil.", 'This measure should therefore come with a campaign about sleep.', '/il kɔ̃.vjɛ̃ dɔ̃k da.kɔ̃.pa.ɲe sɛt mə.zyʁ dyn kɑ̃.paɲ syʁ lə sɔ.mɛj/', 'eel kohⁿ-vyehⁿ DOHⁿK | da-kohⁿ-pa-NYAY seht muh-ZÜR | dün kahⁿ-PANY sür luh so-MEHY', ['conclure']),
  sent(1054, C, "Par conséquent, le service recommande de reconduire l'ouverture de nuit.", 'Consequently, the department recommends renewing the night opening.', '/paʁ kɔ̃.se.kɑ̃ lə sɛʁ.vis ʁə.kɔ.mɑ̃d də ʁə.kɔ̃.dɥiʁ lu.vɛʁ.tyʁ də nɥi/', 'par kohⁿ-say-KAHⁿ | luh sehr-VEES ruh-ko-MAHⁿD | duh ruh-kohⁿ-DWEER | loo-vehr-tür duh NWEE', ['conclure'], FCVDR),
  sent(1055, F, 'Du coup, la bibliothèque est restée ouverte.', 'So, like, the library stayed open.', '/dy ku la bi.bli.jɔ.tɛk ɛ ʁɛs.te u.vɛʁt/', 'dü KOO | la bee-blee-yo-TEHK | eh rehs-tay oo-VEHRT', ['contre-exemple', 'oral'], RECO),
  sent(1056, F, "En plus, personne n'a eu de problème.", 'Plus, nobody had a problem.', '/ɑ̃ plys pɛʁ.sɔn na y də pʁɔ.blɛm/', 'ahⁿ PLÜS | pehr-SONN na ü duh pro-BLEM', ['contre-exemple', 'oral'], RECO),
  phrase(1057, C, 'en outre', 'moreover, in addition', '/ɑ̃.nutʁ/', 'ahⁿ-NOOTR', ['connecteur']),
  phrase(1058, C, 'au regard de', 'in relation to, in light of', '/o ʁə.ɡaʁ də/', 'oh ruh-GAR DUH', ['connecteur']),
  phrase(1059, C, 'ainsi', 'thus, in this way', '/ɛ̃.si/', 'ehⁿ-SEE', ['connecteur']),
  sent(1060, C, 'Chaque connecteur dit un lien : choisis-le pour ce lien, pas pour la musique.', 'Each connector states a link: choose it for that link, not for the sound.', '/ʃak kɔ.nɛk.tœʁ di œ̃ ljɛ̃ ʃwa.zi.lə puʁ sə ljɛ̃ pa puʁ la my.zik/', 'shak ko-nehk-TUHR | dee uhⁿ LYEHⁿ | shwa-ZEE-luh poor suh LYEHⁿ | pa poor la mü-ZEEK', ['rule', 'connecteur'], ['flashcard'],
    rule('Or, donc, toutefois : comment choisis-tu ?', 'Selon le lien : or introduit un fait qui change la donne, donc une conséquence, toutefois une opposition.')),
  sent(1061, C, 'En outre, les étudiants salariés participent moins à la vie universitaire.', 'Moreover, working students take less part in university life.', '/ɑ̃.nutʁ le.ze.ty.djɑ̃ sa.la.ʁje paʁ.ti.sip mwɛ̃ a la vi y.ni.vɛʁ.si.tɛʁ/', 'ahⁿ-NOOTR | lay-zay-tü-dyahⁿ sa-la-RYAY | par-tee-seep MWEHⁿ | a la vee ü-nee-vehr-see-TEHR', ['mission', 'ajouter']),
  sent(1062, C, 'Toutefois, un emploi de quelques heures peut aider à organiser son temps.', 'However, a job of a few hours can help you organise your time.', '/tut.fwa œ̃.nɑ̃.plwa də kɛl.kə.zœʁ pø e.de a ɔʁ.ɡa.ni.ze sɔ̃ tɑ̃/', 'toot-FWA | uhⁿ-nahⁿ-PLWA duh kehl-kuh-ZUHR | peu ay-DAY | a or-ga-nee-zay sohⁿ TAHⁿ', ['mission', 'opposer'], FCVDR),
];

/* ── ACT 5 · NUANCER UNE AFFIRMATION ─────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1063, C, 'Les résultats suggèrent que le taux de réussite tend à diminuer.', 'The results suggest that the pass rate tends to fall.', '/le ʁe.zyl.ta sy.ɡʒɛʁ kə lə to də ʁe.y.sit tɑ̃ a di.mi.nɥe/', 'lay ray-zül-TA | süg-ZHEHR | kuh luh toh duh ray-ü-SEET | tahⁿ a dee-mee-NWAY', ['nuance'], FCVDR),
  sent(1064, C, "Il semblerait qu'un emploi de quelques heures aide certains étudiants.", 'It would seem that a job of a few hours helps some students.', '/il sɑ̃.blə.ʁɛ kœ̃.nɑ̃.plwa də kɛl.kə.zœʁ ɛd sɛʁ.tɛ̃.ze.ty.djɑ̃/', 'eel sahⁿ-bluh-REH | kuhⁿ-nahⁿ-PLWA duh kehl-kuh-ZUHR | ehd sehr-tehⁿ-zay-tü-DYAHⁿ', ['nuance', 'subjonctif'], FCVDR),
  sent(1065, C, 'On peut donc supposer que certaines heures ont été sous-estimées.', 'We can therefore assume that some hours were underestimated.', '/ɔ̃ pø dɔ̃k sy.po.ze kə sɛʁ.tɛn.zœʁ ɔ̃.te.te su.zɛs.ti.me/', 'ohⁿ peu DOHⁿK sü-po-ZAY | kuh sehr-tenn-ZUHR | ohⁿ-tay-tay soo-zehs-tee-MAY', ['nuance']),
  sent(1066, C, 'Dans une certaine mesure, notre étude confirme les travaux antérieurs.', 'To some extent, our study confirms earlier work.', '/dɑ̃.zyn sɛʁ.tɛn mə.zyʁ nɔ.tʁe.tyd kɔ̃.fiʁm le tʁa.vo.zɑ̃.te.ʁjœʁ/', 'dahⁿ-zün sehr-tenn muh-ZÜR | no-tray-TÜD | kohⁿ-FEERM | lay tra-voh-zahⁿ-tay-RYUHR', ['nuance']),
  sent(1067, C, 'Ces résultats doivent toutefois être interprétés avec prudence.', 'These results must, however, be interpreted with caution.', '/se ʁe.zyl.ta dwav tut.fwa ɛ.tʁɛ̃.tɛʁ.pʁe.te a.vɛk pʁy.dɑ̃s/', 'say ray-zül-TA | dwav toot-FWA | eh-trehⁿ-tehr-pray-TAY | a-vehk prü-DAHⁿS', ['nuance'], FCVDR),
  sent(1068, C, 'Il serait utile de vérifier ces résultats sur un échantillon plus large.', 'It would be useful to check these results on a larger sample.', '/il sə.ʁɛ y.til də ve.ʁi.fje se ʁe.zyl.ta syʁ œ̃.ne.ʃɑ̃.ti.jɔ̃ ply laʁʒ/', 'eel suh-reh ü-TEEL | duh vay-ree-FYAY say ray-zül-TA | sür uhⁿ-nay-shahⁿ-tee-YOHⁿ plü LARZH', ['nuance']),
  sent(1069, C, 'Les étudiants qui travaillent échouent.', 'Students who work fail.', '/le.ze.ty.djɑ̃ ki tʁa.vaj e.ʃu/', 'lay-zay-tü-DYAHⁿ | kee tra-VAHY | ay-SHOO', ['trop-sur', 'contre-exemple'], RECO),
  sent(1070, C, 'Les étudiants qui travaillent beaucoup semblent réussir moins bien.', 'Students who work a lot seem to do less well.', '/le.ze.ty.djɑ̃ ki tʁa.vaj bo.ku sɑ̃bl ʁe.y.siʁ mwɛ̃ bjɛ̃/', 'lay-zay-tü-DYAHⁿ | kee tra-vahy boh-KOO | sahⁿbl ray-ü-SEER | mwehⁿ BYEHⁿ', ['nuance'], FCVDR),
  sent(1071, C, 'Tout le monde sait que le travail nuit aux études.', 'Everyone knows that work harms studies.', '/tu lə mɔ̃d sɛ kə lə tʁa.vaj nɥi o.ze.tyd/', 'too luh MOHⁿD seh | kuh luh tra-VAHY | nwee oh-zay-TÜD', ['trop-sur', 'contre-exemple'], RECO),
  phrase(1072, S, 'dans une certaine mesure', 'to some extent', '/dɑ̃.zyn sɛʁ.tɛn mə.zyʁ/', 'dahⁿ-zün sehr-tenn muh-ZÜR', ['nuance']),
  phrase(1073, C, 'il semblerait que', 'it would seem that', '/il sɑ̃.blə.ʁɛ kə/', 'eel sahⁿ-bluh-REH KUH', ['nuance']),
  phrase(1074, C, 'on peut supposer que', 'we can assume that', '/ɔ̃ pø sy.po.ze kə/', 'ohⁿ peu sü-po-ZAY KUH', ['nuance']),
  phrase(1075, C, 'tendre à', 'to tend to', '/tɑ̃.dʁa/', 'tahⁿ-DRA', ['nuance']),
  sent(1076, C, "Nuancer, ce n'est pas douter : c'est dire jusqu'où va ta preuve.", 'Hedging is not doubting: it is saying how far your evidence goes.', '/nɥɑ̃.se sə nɛ pa du.te sɛ diʁ ʒys.ku va ta pʁœv/', 'nwahⁿ-SAY | suh neh pa doo-TAY | seh DEER | zhüs-koo va ta PRUHV', ['rule', 'nuance'], ['flashcard'],
    rule('Pourquoi nuancer une affirmation ?', 'Pour que ta phrase ne dise pas plus que ta preuve : une étude, un seuil, un échantillon.')),
  sent(1077, C, "Il est probable que le nombre d'heures compte plus que l'emploi lui-même.", 'It is likely that the number of hours matters more than the job itself.', '/i.lɛ pʁɔ.babl kə lə nɔ̃bʁ dœʁ kɔ̃t ply kə lɑ̃.plwa lɥi.mɛm/', 'ee-leh pro-BABL | kuh luh nohⁿbr DUHR | kohⁿt plü kuh lahⁿ-PLWA lwee-MEM', ['nuance', 'mission'], FCVDR),
  sent(1078, C, 'Ce seuil varie sans doute selon les filières.', 'This threshold probably varies from one programme to another.', '/sə sœj va.ʁi sɑ̃ dut sə.lɔ̃ le fi.ljɛʁ/', 'suh SUHY | va-REE | sahⁿ DOOT | suh-lohⁿ lay fee-LYEHR', ['nuance']),
];

/* ── ACT 6 · LE DEGRÉ DE CERTITUDE ───────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  // The lecture, line by line (the hidden listening of act 6).
  sent(1079, C, "Aujourd'hui, nous allons parler d'un défaut fréquent dans vos copies : vous affirmez plus que vous ne pouvez prouver.", 'Today we will talk about a common flaw in your papers: you claim more than you can prove.', '/o.ʒuʁ.dɥi nu.za.lɔ̃ paʁ.le dœ̃ de.fo fʁe.kɑ̃ dɑ̃ vo kɔ.pi vu.za.fiʁm ply kə vu nə pu.ve pʁu.ve/', 'oh-zhoor-DWEE | noo-za-lohⁿ par-LAY | duhⁿ day-foh fray-KAHⁿ dahⁿ voh ko-PEE | voo-za-FEERM plü kuh | voo nuh poo-vay proo-VAY', ['cours']),
  sent(1080, C, "Quand vous écrivez « il est prouvé que », votre lecteur attend une étude, une source, des chiffres.", 'When you write « it is proven that », your reader expects a study, a source, figures.', '/kɑ̃ vu.ze.kʁi.ve i.lɛ pʁu.ve kə vɔtʁ lɛk.tœʁ a.tɑ̃ y.ne.tyd yn suʁs de ʃifʁ/', 'kahⁿ voo-zay-kree-VAY | ee-leh proo-vay KUH | votr lehk-TUHR a-TAHⁿ | ü-nay-TÜD | ün SOORS | day SHEEFR', ['cours']),
  sent(1081, C, "Si vous n'avez qu'un exemple, écrivez plutôt « il semble que » ou « on peut supposer que ».", 'If you only have one example, write « it seems that » or « we can assume that » instead.', '/si vu na.ve kœ̃.nɛɡ.zɑ̃pl e.kʁi.ve ply.to il sɑ̃bl kə u ɔ̃ pø sy.po.ze kə/', 'see voo na-vay kuhⁿ-neg-ZAHⁿPL | ay-kree-vay plü-TOH | eel sahⁿbl KUH | oo ohⁿ peu sü-po-zay KUH', ['cours']),
  sent(1082, C, "Mais attention, l'excès inverse existe aussi.", 'But be careful: the opposite excess exists too.', '/mɛ a.tɑ̃.sjɔ̃ lɛk.sɛ ɛ̃.vɛʁs ɛɡ.zist o.si/', 'meh a-tahⁿ-SYOHⁿ | lehk-seh ehⁿ-VEHRS | eg-zeest oh-SEE', ['cours']),
  sent(1083, C, "Une copie où chaque phrase commence par « peut-être » ne défend plus aucune idée.", 'A paper where every sentence starts with « perhaps » no longer defends any idea.', '/yn kɔ.pi u ʃak fʁaz kɔ.mɑ̃s paʁ pø.tɛtʁ nə de.fɑ̃ ply o.ky.ni.de/', 'ün ko-PEE | oo shak FRAZ ko-MAHⁿS par peu-TEHTR | nuh day-FAHⁿ plü | oh-kü-nee-DAY', ['cours']),
  sent(1084, C, "Pensez à une échelle : en haut, ce qui est établi ; au milieu, ce qui est probable ; en bas, ce qui est seulement possible.", 'Think of a scale: at the top, what is established; in the middle, what is likely; at the bottom, what is only possible.', '/pɑ̃.se a y.ne.ʃɛl ɑ̃ o sə ki ɛ.te.ta.bli o mi.ljø sə ki ɛ pʁɔ.babl ɑ̃ ba sə ki ɛ sœl.mɑ̃ pɔ.sibl/', 'pahⁿ-SAY a ü-nay-SHEHL | ahⁿ OH | suh kee eh-tay-ta-BLEE | oh mee-LYEU | suh kee eh pro-BABL | ahⁿ BA | suh kee eh suhl-mahⁿ po-SEEBL', ['cours']),
  sent(1085, C, "« Les résultats montrent que » se place en haut de l'échelle.", '« The results show that » goes at the top of the scale.', '/le ʁe.zyl.ta mɔ̃tʁ kə sə plas ɑ̃ o də le.ʃɛl/', 'lay ray-zül-ta MOHⁿTR kuh | suh plass ahⁿ OH | duh lay-SHEHL', ['cours']),
  sent(1086, C, "« Il est probable que » et « selon toute vraisemblance » se placent au milieu.", '« It is likely that » and « in all likelihood » go in the middle.', '/i.lɛ pʁɔ.babl kə e sə.lɔ̃ tut vʁɛ.sɑ̃.blɑ̃s sə plas o mi.ljø/', 'ee-leh pro-BABL kuh | ay suh-lohⁿ toot vreh-sahⁿ-BLAHⁿS | suh plass oh mee-LYEU', ['cours']),
  sent(1087, C, "« Il n'est pas exclu que » se place en bas, et il est suivi du subjonctif.", '« It cannot be ruled out that » goes at the bottom, and it takes the subjunctive.', '/il nɛ pa.zɛk.skly kə sə plas ɑ̃ ba e i.lɛ sɥi.vi dy syb.ʒɔ̃k.tif/', 'eel neh pa-zehk-SKLÜ kuh | suh plass ahⁿ BA | ay ee-leh swee-VEE | dü süb-zhohⁿk-TEEF', ['cours']),
  sent(1088, C, 'Votre verbe doit correspondre à la force de vos preuves, ni plus, ni moins.', 'Your verb must match the strength of your evidence, no more, no less.', '/vɔtʁ vɛʁb dwa kɔ.ʁɛs.pɔ̃dʁ a la fɔʁs də vo pʁœv ni plys ni mwɛ̃/', 'votr VEHRB | dwa ko-rehs-POHⁿDR | a la fors duh voh PRUHV | nee PLÜS | nee MWEHⁿ', ['cours']),
  sent(1089, C, "Relisez chaque affirmation et demandez-vous : qu'est-ce qui me permet de dire cela ?", 'Reread each claim and ask yourself: what allows me to say this?', '/ʁə.li.ze ʃa.ka.fiʁ.ma.sjɔ̃ e də.mɑ̃.de.vu kɛs.ki mə pɛʁ.mɛ də diʁ sə.la/', 'ruh-lee-ZAY sha-ka-feer-ma-SYOHⁿ | ay duh-mahⁿ-day-VOO | kehs-kee muh pehr-MEH | duh deer suh-LA', ['cours']),
  // The scale, one example per step.
  sent(1090, C, "Les résultats montrent que le travail long augmente le risque d'abandon.", 'The results show that long working hours increase the risk of dropping out.', '/le ʁe.zyl.ta mɔ̃tʁ kə lə tʁa.vaj lɔ̃ ɔɡ.mɑ̃t lə ʁisk da.bɑ̃.dɔ̃/', 'lay ray-zül-ta MOHⁿTR kuh | luh tra-vahy LOHⁿ | og-MAHⁿT luh reesk da-bahⁿ-DOHⁿ', ['echelle'], FCVDR),
  sent(1091, C, 'Il se peut que les étudiants aient sous-estimé leurs heures.', 'Students may have underestimated their hours.', '/il sə pø kə le.ze.ty.djɑ̃ ɛ su.zɛs.ti.me lœʁ.zœʁ/', 'eel suh PEU | kuh lay-zay-tü-DYAHⁿ | eh soo-zehs-tee-MAY | luhr-ZUHR', ['echelle', 'subjonctif']),
  sent(1092, C, 'Il est peu probable que ce seuil soit le même partout.', 'It is unlikely that this threshold is the same everywhere.', '/i.lɛ pø pʁɔ.babl kə sə sœj swa lə mɛm paʁ.tu/', 'ee-leh peu pro-BABL | kuh suh SUHY | swa luh mem par-TOO', ['echelle', 'subjonctif'], FCVDR),
  sent(1093, S, "Selon toute vraisemblance, le nombre d'heures joue un rôle décisif.", 'In all likelihood, the number of hours plays a decisive role.', '/sə.lɔ̃ tut vʁɛ.sɑ̃.blɑ̃s lə nɔ̃bʁ dœʁ ʒu œ̃ ʁol de.si.zif/', 'suh-lohⁿ toot vreh-sahⁿ-BLAHⁿS | luh nohⁿbr DUHR | zhoo uhⁿ rohl day-see-ZEEF', ['echelle']),
  sent(1094, C, "Il n'est pas exclu que d'autres facteurs jouent un rôle.", 'It cannot be ruled out that other factors play a part.', '/il nɛ pa.zɛk.skly kə do.tʁə fak.tœʁ ʒu œ̃ ʁol/', 'eel neh pa-zehk-SKLÜ | kuh doh-truh fak-TUHR | zhoo uhⁿ ROHL', ['echelle', 'subjonctif']),
  sent(1095, C, 'Il semblerait peut-être que cela puisse éventuellement jouer un rôle.', 'It would perhaps seem that this might possibly play a role.', '/il sɑ̃.blə.ʁɛ pø.tɛtʁ kə sə.la pɥis e.vɑ̃.tɥɛl.mɑ̃ ʒwe œ̃ ʁol/', 'eel sahⁿ-bluh-REH peu-TEHTR | kuh suh-LA PWEES | ay-vahⁿ-twehl-MAHⁿ | zhway uhⁿ ROHL', ['trop-prudent', 'contre-exemple'], RECO),
  sent(1096, C, 'Ton verbe pèse autant que ta preuve, ni plus ni moins.', 'Your verb weighs as much as your evidence, no more, no less.', '/tɔ̃ vɛʁb pɛz o.tɑ̃ kə ta pʁœv ni plys ni mwɛ̃/', 'tohⁿ VEHRB | pehz oh-tahⁿ kuh ta PRUHV | nee PLÜS nee MWEHⁿ', ['rule', 'echelle'], ['flashcard'],
    rule("Tu n'as qu'une enquête sur un petit groupe. Quel verbe choisis-tu ?", "Un verbe du milieu de l'échelle : il semble que, on peut supposer que, les résultats suggèrent que.")),
  phrase(1097, S, 'selon toute vraisemblance', 'in all likelihood', '/sə.lɔ̃ tut vʁɛ.sɑ̃.blɑ̃s/', 'suh-lohⁿ toot vreh-sahⁿ-BLAHⁿS', ['echelle']),
  phrase(1098, C, "il n'est pas exclu que", 'it cannot be ruled out that', '/il nɛ pa.zɛk.skly kə/', 'eel neh pa-zehk-SKLÜ KUH', ['echelle']),
  // Four more lecture lines, added after the first draft so the lecture reaches the B2 200-word floor.
  sent(1164, C, "Prenons un exemple : une enquête menée auprès de trente étudiants de votre groupe ne permet pas de parler de « tous les étudiants ».", 'Take an example: a survey of thirty students in your group does not let you speak of « all students ».', '/pʁə.nɔ̃.zœ̃.nɛɡ.zɑ̃pl y.nɑ̃.kɛt mə.ne o.pʁɛ də tʁɑ̃t e.ty.djɑ̃ də vɔtʁ ɡʁup nə pɛʁ.mɛ pa də paʁ.le də tu le.ze.ty.djɑ̃/', 'pruh-nohⁿ-zuhⁿ-neg-ZAHⁿPL | ü-nahⁿ-KEHT muh-NAY | oh-preh duh trahⁿt ay-tü-DYAHⁿ | duh votr GROOP | nuh pehr-meh PA | duh par-LAY duh too lay-zay-tü-DYAHⁿ', ['cours']),
  sent(1165, C, "Elle permet en revanche d'écrire que, dans ce groupe, une majorité semble préférer les cours en ligne.", 'It does, however, let you write that in this group a majority seems to prefer online classes.', '/ɛl pɛʁ.mɛ ɑ̃ ʁə.vɑ̃ʃ de.kʁiʁ kə dɑ̃ sə ɡʁup y.na.ʒɔ.ʁi.te sɑ̃bl pʁe.fe.ʁe le kuʁ ɑ̃ liɲ/', 'ehl pehr-MEH ahⁿ ruh-VAHⁿSH | day-KREER kuh | dahⁿ suh GROOP | ü-na-zho-ree-TAY | sahⁿbl pray-fay-RAY | lay koor ahⁿ LEENY', ['cours']),
  sent(1166, C, 'Cette différence paraît minime ; elle change pourtant la valeur de toute votre copie.', 'The difference looks tiny; yet it changes the value of your whole paper.', '/sɛt di.fe.ʁɑ̃s pa.ʁɛ mi.nim ɛl ʃɑ̃ʒ puʁ.tɑ̃ la va.lœʁ də tut vɔtʁ kɔ.pi/', 'seht dee-fay-RAHⁿS | pa-reh mee-NEEM | ehl shahⁿzh poor-TAHⁿ | la va-LUHR | duh toot votr ko-PEE', ['cours']),
  sent(1167, C, "Pour la semaine prochaine, reprenez votre premier jet et soulignez chaque verbe d'opinion.", 'For next week, go back to your first draft and underline every opinion verb.', '/puʁ la sə.mɛn pʁɔ.ʃɛn ʁə.pʁə.ne vɔtʁ pʁə.mje ʒɛ e su.li.ɲe ʃak vɛʁb dɔ.pi.njɔ̃/', 'poor la suh-menn pro-SHENN | ruh-pruh-NAY votr pruh-myay ZHEH | ay soo-lee-NYAY | shak vehrb do-pee-NYOHⁿ', ['cours']),
  sent(1099, C, 'Il est probable que ce chiffre est sous-estimé.', 'This figure is probably underestimated.', '/i.lɛ pʁɔ.babl kə sə ʃifʁ ɛ su.zɛs.ti.me/', 'ee-leh pro-BABL | kuh suh SHEEFR | eh soo-zehs-tee-MAY', ['echelle', 'indicatif']),
];

/* ── ACT 7 · REPRENDRE SANS RÉPÉTER ──────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1100, C, "Les outils d'intelligence artificielle se sont répandus très vite dans les universités.", 'Artificial intelligence tools spread very quickly through universities.', '/le.zu.ti dɛ̃.te.li.ʒɑ̃s aʁ.ti.fi.sjɛl sə sɔ̃ ʁe.pɑ̃.dy tʁɛ vit dɑ̃ le.zy.ni.vɛʁ.si.te/', 'lay-zoo-TEE | dehⁿ-tay-lee-ZHAHⁿS ar-tee-fee-SYEHL | suh sohⁿ ray-pahⁿ-DÜ | treh VEET | dahⁿ lay-zü-nee-vehr-see-TAY', ['texte']),
  sent(1101, C, 'Capables de résumer un article en quelques secondes, ils séduisent de nombreux étudiants.', 'Able to summarise an article in a few seconds, they appeal to many students.', '/ka.pabl də ʁe.zy.me œ̃.naʁ.tikl ɑ̃ kɛl.kə sə.ɡɔ̃d il se.dɥiz də nɔ̃.bʁø.ze.ty.djɑ̃/', 'ka-PABL duh ray-zü-MAY | uhⁿ-nar-TEEKL | ahⁿ kehl-kuh suh-GOHⁿD | eel say-DWEEZ | duh nohⁿ-breu-zay-tü-DYAHⁿ', ['pronom'], FCVDR),
  sent(1102, C, 'Ce phénomène inquiète toutefois les enseignants.', 'This phenomenon, however, worries teachers.', '/sə fe.nɔ.mɛn ɛ̃.kjɛt tut.fwa le.zɑ̃.sɛ.ɲɑ̃/', 'suh fay-no-MENN | ehⁿ-KYEHT toot-FWA | lay-zahⁿ-seh-NYAHⁿ', ['nom-resume'], FCVDR),
  sent(1103, C, 'Ces derniers réclament des règles claires.', 'The latter are calling for clear rules.', '/se dɛʁ.nje ʁe.klam de ʁɛɡl klɛʁ/', 'say dehr-NYAY | ray-KLAM | day rehgl KLEHR', ['ce-dernier'], FCVDR),
  sent(1104, C, "Une telle incertitude touche au cœur de l'évaluation universitaire.", 'Such uncertainty strikes at the heart of university assessment.', '/yn tɛ.lɛ̃.sɛʁ.ti.tyd tuʃ o kœʁ də le.va.lɥa.sjɔ̃ y.ni.vɛʁ.si.tɛʁ/', 'ün teh-lehⁿ-sehr-tee-TÜD | toosh oh KUHR | duh lay-va-lwa-SYOHⁿ ü-nee-vehr-see-TEHR', ['nom-resume']),
  sent(1105, C, 'Celle-ci repose en effet sur la confiance.', 'This rests, in fact, on trust.', '/sɛl.si ʁə.poz ɑ̃.ne.fɛ syʁ la kɔ̃.fjɑ̃s/', 'sehl-SEE | ruh-POHZ ahⁿ-nay-FEH | sür la kohⁿ-FYAHⁿS', ['pronom']),
  sent(1106, C, "Les professeurs s'inquiètent, et les professeurs demandent des règles claires.", 'The professors are worried, and the professors are asking for clear rules.', '/le pʁɔ.fɛ.sœʁ sɛ̃.kjɛt e le pʁɔ.fɛ.sœʁ də.mɑ̃d de ʁɛɡl klɛʁ/', 'lay pro-feh-SUHR | sehⁿ-KYEHT | ay lay pro-feh-SUHR | duh-MAHⁿD day rehgl KLEHR', ['repetition', 'contre-exemple'], RECO),
  sent(1107, C, 'La ministre a reçu la rectrice ; cette dernière a promis une réforme.', 'The minister received the rector; the latter promised a reform.', '/la mi.nistʁ a ʁə.sy la ʁɛk.tʁis sɛt dɛʁ.njɛʁ a pʁɔ.mi y.ne.ʁe.fɔʁm/', 'la mee-NEESTR | a ruh-SÜ la rehk-TREES | seht dehr-NYEHR | a pro-MEE ü-nay-ray-FORM', ['ce-dernier'], FCVDR),
  sent(1108, C, 'Cette tendance devrait se confirmer dans les prochaines années.', 'This trend should be confirmed in the coming years.', '/sɛt tɑ̃.dɑ̃s də.vʁɛ sə kɔ̃.fiʁ.me dɑ̃ le pʁɔ.ʃɛn.za.ne/', 'seht tahⁿ-DAHⁿS | duh-VREH | suh kohⁿ-feer-MAY | dahⁿ lay pro-shenn-za-NAY', ['nom-resume']),
  phrase(1109, C, 'ce phénomène', 'this phenomenon', '/sə fe.nɔ.mɛn/', 'suh fay-no-MENN', ['reprise']),
  phrase(1110, C, 'cette tendance', 'this trend', '/sɛt tɑ̃.dɑ̃s/', 'seht tahⁿ-DAHⁿS', ['reprise']),
  phrase(1111, S, 'une telle évolution', 'such a change', '/yn tɛ.le.vɔ.ly.sjɔ̃/', 'ün teh-lay-vo-lü-SYOHⁿ', ['reprise']),
  sent(1112, C, "Reprends l'idée par un pronom ou par un nom qui la résume, jamais par le même mot.", 'Pick the idea up with a pronoun or a noun that sums it up, never with the same word.', '/ʁə.pʁɑ̃ li.de paʁ œ̃ pʁɔ.nɔ̃ u paʁ œ̃ nɔ̃ ki la ʁe.zym ʒa.mɛ paʁ lə mɛm mo/', 'ruh-PRAHⁿ lee-DAY | par uhⁿ pro-NOHⁿ | oo par uhⁿ NOHⁿ kee la ray-ZÜM | zha-meh par luh mem MOH', ['rule', 'reprise'], ['flashcard'],
    rule('Tu vas écrire pour la troisième fois « le travail étudiant ». Que fais-tu ?', 'Tu le reprends : ce phénomène, cette activité, celui-ci, ou un pronom si le sens reste clair.')),
  sent(1113, C, 'Cette activité occupe parfois plus de vingt heures par semaine.', 'This activity sometimes takes up more than twenty hours a week.', '/sɛ.tak.ti.vi.te ɔ.kyp paʁ.fwa ply də vɛ̃.tœʁ paʁ sə.mɛn/', 'seh-tak-tee-vee-TAY | o-KÜP par-FWA | plü duh vehⁿ-TUHR | par suh-MENN', ['mission', 'nom-resume'], FCVDR),
];

/* ── ACT 8 · NOMMER L'ACTION ─────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1114, C, 'La hausse des loyers pousse les étudiants à chercher un logement plus éloigné du campus.', 'Rising rents push students to look for housing further from campus.', '/la os de lwa.je pus le.ze.ty.djɑ̃ a ʃɛʁ.ʃe œ̃ lɔʒ.mɑ̃ ply.ze.lwa.ɲe dy kɑ̃.pys/', 'la OHS day lwa-YAY | poos lay-zay-tü-DYAHⁿ | a shehr-SHAY uhⁿ lozh-MAHⁿ | plü-zay-lwa-NYAY dü kahⁿ-PÜS', ['nom'], FCVDR),
  sent(1115, C, 'Cet éloignement entraîne des retards et des absences répétées.', 'This distance leads to lateness and repeated absences.', '/sɛ.te.lwaɲ.mɑ̃ ɑ̃.tʁɛn de ʁə.taʁ e de.zap.sɑ̃s ʁe.pe.te/', 'seh-tay-lwany-MAHⁿ | ahⁿ-TRENN | day ruh-TAR | ay day-zap-SAHⁿS ray-pay-TAY', ['nom', 'reprise'], FCVDR),
  sent(1116, C, "Face à cette situation, l'université a décidé la construction de deux nouvelles résidences.", 'Faced with this situation, the university decided to build two new residences.', '/fas a sɛt si.tɥa.sjɔ̃ ly.ni.vɛʁ.si.te a de.si.de la kɔ̃s.tʁyk.sjɔ̃ də dø nu.vɛl ʁe.zi.dɑ̃s/', 'fass a seht see-twa-SYOHⁿ | lü-nee-vehr-see-TAY a day-see-DAY | la kohⁿs-trük-SYOHⁿ | duh deu noo-vehl ray-zee-DAHⁿS', ['nom']),
  sent(1117, C, "Leur ouverture n'est pas prévue avant deux ans.", 'They are not due to open for two years.', '/lœ.ʁu.vɛʁ.tyʁ nɛ pa pʁe.vy a.vɑ̃ dø.zɑ̃/', 'luh-roo-vehr-TÜR | neh pa pray-VÜ | a-vahⁿ deu-ZAHⁿ', ['nom']),
  sent(1118, F, "Les loyers ont beaucoup augmenté, et c'est pour ça que les étudiants habitent plus loin.", "Rents have gone up a lot, and that's why students live further away.", '/le lwa.je ɔ̃ bo.ku ɔɡ.mɑ̃.te e sɛ puʁ sa kə le.ze.ty.djɑ̃ a.bit ply lwɛ̃/', 'lay lwa-YAY | ohⁿ boh-koo og-mahⁿ-TAY | ay seh poor SA | kuh lay-zay-tü-DYAHⁿ | a-beet plü LWEHⁿ', ['oral', 'contre-exemple'], RECO),
  sent(1119, C, 'La baisse des inscriptions inquiète la direction.', 'The fall in enrolments worries the management.', '/la bɛs de.zɛ̃s.kʁip.sjɔ̃ ɛ̃.kjɛt la di.ʁɛk.sjɔ̃/', 'la BEHS | day-zehⁿs-kreep-SYOHⁿ | ehⁿ-KYEHT la dee-rehk-SYOHⁿ', ['nom'], FCVDR),
  sent(1120, C, 'Le report de la réforme a surpris les syndicats étudiants.', 'The postponement of the reform surprised the student unions.', '/lə ʁə.pɔʁ də la ʁe.fɔʁm a syʁ.pʁi le sɛ̃.di.ka.ze.ty.djɑ̃/', 'luh ruh-POR | duh la ray-FORM | a sür-PREE | lay sehⁿ-dee-ka-zay-tü-DYAHⁿ', ['nom']),
  phrase(1121, C, 'la hausse des loyers', 'the rise in rents', '/la os de lwa.je/', 'la ohs day lwa-YAY', ['nom']),
  phrase(1122, C, "l'éloignement", 'the distance, living far away', '/le.lwaɲ.mɑ̃/', 'lay-lwany-MAHⁿ', ['nom']),
  phrase(1123, C, 'la nominalisation', 'turning a verb into a noun', '/la nɔ.mi.na.li.za.sjɔ̃/', 'la no-mee-na-lee-za-SYOHⁿ', ['mot']),
  sent(1124, C, 'Un nom peut résumer toute une phrase et devenir le sujet de la suivante.', 'A noun can sum up a whole sentence and become the subject of the next one.', '/œ̃ nɔ̃ pø ʁe.zy.me tu.tyn fʁaz e də.və.niʁ lə sy.ʒɛ də la sɥi.vɑ̃t/', 'uhⁿ NOHⁿ peu ray-zü-MAY | too-tün FRAZ | ay duh-vuh-NEER | luh sü-zheh duh la swee-VAHⁿT', ['rule', 'nom'], ['flashcard'],
    rule('À quoi sert « cet éloignement » après « les étudiants habitent plus loin » ?', 'Le nom reprend toute la phrase précédente en un mot, et il devient le sujet de la suivante.')),
  sent(1125, C, "La mise en œuvre de l'amélioration de la réduction des retards est nécessaire.", 'The implementation of the improvement of the reduction of lateness is necessary.', '/la mi.zɑ̃.nœvʁ də la.me.ljɔ.ʁa.sjɔ̃ də la ʁe.dyk.sjɔ̃ de ʁə.taʁ ɛ ne.se.sɛʁ/', 'la mee-zahⁿ-NUHVR | duh la-may-lyo-ra-SYOHⁿ | duh la ray-dük-SYOHⁿ day ruh-TAR | eh nay-say-SEHR', ['lourd', 'contre-exemple'], RECO),
  sent(1126, C, "L'université doit réduire les retards.", 'The university must reduce lateness.', '/ly.ni.vɛʁ.si.te dwa ʁe.dɥiʁ le ʁə.taʁ/', 'lü-nee-vehr-see-TAY | dwa ray-DWEER | lay ruh-TAR', ['verbe']),
  sent(1127, C, "L'allongement des heures de travail réduit le temps consacré aux études.", 'Longer working hours reduce the time devoted to studying.', '/la.lɔ̃ʒ.mɑ̃ de.zœʁ də tʁa.vaj ʁe.dɥi lə tɑ̃ kɔ̃.sa.kʁe o.ze.tyd/', 'la-lohⁿzh-MAHⁿ | day-zuhr duh tra-VAHY | ray-DWEE luh TAHⁿ | kohⁿ-sa-kray oh-zay-TÜD', ['mission', 'nom'], FCVDR),
];

/* ── ACT 9 · QUI PARLE ? ─────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1128, S, "Nous nous proposons d'examiner ici la question des stages non rémunérés.", 'We propose to examine here the question of unpaid internships.', '/nu nu pʁɔ.po.zɔ̃ dɛɡ.za.mi.ne i.si la kɛs.tjɔ̃ de staʒ nɔ̃ ʁe.my.ne.ʁe/', 'noo noo pro-po-ZOHⁿ | deg-za-mee-NAY ee-SEE | la kehs-TYOHⁿ | day stazh nohⁿ ray-mü-nay-RAY', ['nous'], FCVDR),
  sent(1129, S, "Il apparaît d'abord que ces stages favorisent les étudiants les plus aisés.", 'It appears first of all that these internships favour the better-off students.', '/i.la.pa.ʁɛ da.bɔʁ kə se staʒ fa.vɔ.ʁiz le.ze.ty.djɑ̃ le ply.ze.ze/', 'ee-la-pa-REH da-BOR | kuh say STAZH | fa-vo-REEZ | lay-zay-tü-DYAHⁿ lay plü-zay-ZAY', ['impersonnel'], FCVDR),
  sent(1130, C, 'On observe ensuite que certaines entreprises y recourent pour remplacer des postes salariés.', 'We then observe that some companies use them to replace salaried positions.', '/ɔ̃.nɔp.sɛʁv ɑ̃.sɥit kə sɛʁ.tɛ.nɑ̃.tʁə.pʁiz i ʁə.kuʁ puʁ ʁɑ̃.pla.se de pɔst sa.la.ʁje/', 'ohⁿ-nop-SEHRV ahⁿ-SWEET | kuh sehr-teh-nahⁿ-truh-PREEZ | ee ruh-KOOR | poor rahⁿ-pla-SAY day post sa-la-RYAY', ['on']),
  sent(1131, S, "Il convient donc de s'interroger sur l'équité de ce dispositif.", 'We should therefore question the fairness of this arrangement.', '/il kɔ̃.vjɛ̃ dɔ̃k də sɛ̃.te.ʁɔ.ʒe syʁ le.ki.te də sə dis.pɔ.zi.tif/', 'eel kohⁿ-vyehⁿ DOHⁿK | duh sehⁿ-tay-ro-ZHAY | sür lay-kee-TAY | duh suh dees-po-zee-TEEF', ['impersonnel']),
  sent(1132, S, "Nous montrerons que la rémunération des stages constitue une condition de l'égalité des chances.", 'We will show that paying interns is a condition of equal opportunity.', '/nu mɔ̃.tʁə.ʁɔ̃ kə la ʁe.my.ne.ʁa.sjɔ̃ de staʒ kɔ̃s.ti.ty yn kɔ̃.di.sjɔ̃ də le.ɡa.li.te de ʃɑ̃s/', 'noo mohⁿ-truh-ROHⁿ | kuh la ray-mü-nay-ra-SYOHⁿ day STAZH | kohⁿs-tee-TÜ ün kohⁿ-dee-SYOHⁿ | duh lay-ga-lee-TAY day SHAHⁿS', ['nous', 'these']),
  sent(1133, F, "Moi, je trouve que les stages pas payés, c'est injuste.", 'Me, I think unpaid internships are unfair.', '/mwa ʒə tʁuv kə le staʒ pa pe.je sɛ.tɛ̃.ʒyst/', 'MWA | zhuh troov kuh lay stazh pa pay-YAY | seh-tehⁿ-ZHÜST', ['je', 'contre-exemple'], RECO),
  sent(1134, C, "Je pense qu'on devrait tous les payer.", 'I think they should all be paid.', '/ʒə pɑ̃s kɔ̃ də.vʁɛ tu le pe.je/', 'zhuh PAHⁿS | kohⁿ duh-VREH | too lay pay-YAY', ['je', 'contre-exemple'], RECO),
  sent(1135, S, 'Il importe de distinguer les stages courts des stages longs.', 'It is important to distinguish short internships from long ones.', '/i.lɛ̃.pɔʁt də dis.tɛ̃.ɡe le staʒ kuʁ de staʒ lɔ̃/', 'ee-lehⁿ-PORT | duh dees-tehⁿ-GAY | lay stazh KOOR | day stazh LOHⁿ', ['impersonnel'], FCVDR),
  phrase(1136, C, "le nous d'auteur", "the authorial 'we'", '/lə nu do.tœʁ/', 'luh noo doh-TUHR', ['nous']),
  phrase(1137, S, 'il apparaît que', 'it appears that', '/i.la.pa.ʁɛ kə/', 'ee-la-pa-REH KUH', ['impersonnel']),
  sent(1138, C, "Le nous annonce la démarche, le on constate, l'impersonnel présente les faits.", "The 'nous' announces the approach, the 'on' observes, the impersonal presents the facts.", '/lə nu a.nɔ̃s la de.maʁʃ lə ɔ̃ kɔ̃s.tat lɛ̃.pɛʁ.sɔ.nɛl pʁe.zɑ̃t le fɛ/', 'luh NOO a-nohⁿs la day-MARSH | luh OHⁿ kohⁿs-TAT | lehⁿ-pehr-so-NEHL | pray-zahⁿt lay FEH', ['rule', 'nous'], ['flashcard'],
    rule('Dans un devoir, qui dit « nous » ?', "L'auteur, qui annonce sa démarche : nous examinerons, nous montrerons. Les faits passent par on et par l'impersonnel.")),
  sent(1139, C, "Nous verrons que le nombre d'heures compte davantage que l'emploi lui-même.", 'We will see that the number of hours matters more than the job itself.', '/nu vɛ.ʁɔ̃ kə lə nɔ̃bʁ dœʁ kɔ̃t da.vɑ̃.taʒ kə lɑ̃.plwa lɥi.mɛm/', 'noo veh-ROHⁿ | kuh luh nohⁿbr DUHR | kohⁿt da-vahⁿ-TAZH | kuh lahⁿ-plwa lwee-MEM', ['mission', 'nous'], FCVDR),
  sent(1140, C, 'On constate que les étudiants salariés dorment moins.', 'It can be seen that working students sleep less.', '/ɔ̃ kɔ̃s.tat kə le.ze.ty.djɑ̃ sa.la.ʁje dɔʁm mwɛ̃/', 'ohⁿ kohⁿs-TAT | kuh lay-zay-tü-dyahⁿ sa-la-RYAY | dorm MWEHⁿ', ['on']),
];

/* ── ACT 10 · LE MOT DE TROP ─────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1141, C, 'Les cours en ligne sont particulièrement souples.', 'Online classes are particularly flexible.', '/le kuʁ ɑ̃ liɲ sɔ̃ paʁ.ti.ky.ljɛʁ.mɑ̃ supl/', 'lay koor ahⁿ LEENY | sohⁿ par-tee-kü-lyehr-MAHⁿ SOOPL', ['academique'], FCVDR),
  sent(1142, C, 'Par conséquent, de nombreux étudiants les préfèrent.', 'Consequently, many students prefer them.', '/paʁ kɔ̃.se.kɑ̃ də nɔ̃.bʁø.ze.ty.djɑ̃ le pʁe.fɛʁ/', 'par kohⁿ-say-KAHⁿ | duh nohⁿ-breu-zay-tü-DYAHⁿ | lay pray-FEHR', ['academique'], FCVDR),
  sent(1143, C, 'Cela permet de concilier études et emploi.', 'This makes it possible to combine studies and a job.', '/sə.la pɛʁ.mɛ də kɔ̃.si.lje e.tyd e ɑ̃.plwa/', 'suh-LA pehr-MEH | duh kohⁿ-see-LYAY | ay-tüd ay ahⁿ-PLWA', ['academique']),
  sent(1144, C, 'Il est évident que ce format a des limites.', 'It is obvious that this format has its limits.', '/i.lɛ.te.vi.dɑ̃ kə sə fɔʁ.ma a de li.mit/', 'ee-leh-tay-vee-DAHⁿ | kuh suh for-MA | a day lee-MEET', ['academique', 'trop-sur']),
  sent(1145, F, "C'est clair que plein de gens pensent que c'est un truc énorme.", "It's obvious loads of people think it's a massive thing.", '/sɛ klɛʁ kə plɛ̃ də ʒɑ̃ pɑ̃s kə sɛ.tœ̃ tʁy.ke.nɔʁm/', 'seh KLEHR | kuh plehⁿ duh ZHAHⁿ pahⁿs | kuh seh-tuhⁿ trü-kay-NORM', ['familier', 'contre-exemple'], RECO),
  sent(1146, C, 'De nombreux enseignants jugent ce changement considérable.', 'Many teachers consider this change considerable.', '/də nɔ̃.bʁø.zɑ̃.sɛ.ɲɑ̃ ʒyʒ sə ʃɑ̃ʒ.mɑ̃ kɔ̃.si.de.ʁabl/', 'duh nohⁿ-breu-zahⁿ-seh-NYAHⁿ | zhüzh suh shahⁿzh-MAHⁿ | kohⁿ-see-day-RABL', ['academique'], FCVDR),
  sent(1147, F, 'Les gens bossent trop, du coup ils ratent des cours.', 'People work way too much, so they miss classes.', '/le ʒɑ̃ bɔs tʁo dy ku il ʁat de kuʁ/', 'lay ZHAHⁿ | boss TROH | dü KOO | eel rat day KOOR', ['familier', 'contre-exemple'], RECO),
  sent(1148, C, 'Les étudiants salariés manquent davantage de cours.', 'Working students miss more classes.', '/le.ze.ty.djɑ̃ sa.la.ʁje mɑ̃k da.vɑ̃.taʒ də kuʁ/', 'lay-zay-tü-dyahⁿ sa-la-RYAY | mahⁿk da-vahⁿ-TAZH | duh KOOR', ['academique', 'mission'], FCVDR),
  sent(1149, S, "Nonobstant ce qui précède, d'aucuns pourraient arguer du contraire.", 'Notwithstanding the foregoing, some might argue the contrary.', '/nɔ.nɔp.stɑ̃ sə ki pʁe.sɛd do.kœ̃ pu.ʁɛ.taʁ.ɡɥe dy kɔ̃.tʁɛʁ/', 'no-nop-STAHⁿ suh kee pray-SEHD | doh-KUHⁿ | poo-reh-tar-GWAY | dü kohⁿ-TREHR', ['faire-savant', 'contre-exemple'], RECO),
  phrase(1150, C, 'de nombreux', 'many, numerous', '/də nɔ̃.bʁø/', 'duh nohⁿ-BREU', ['registre']),
  phrase(1151, C, 'la population étudiante', 'the student population', '/la pɔ.py.la.sjɔ̃ e.ty.djɑ̃t/', 'la po-pü-la-syohⁿ ay-tü-DYAHⁿT', ['registre']),
  sent(1152, C, "À l'écrit universitaire, chaque mot de la conversation a un équivalent précis.", 'In academic writing, every conversational word has a precise equivalent.', '/a le.kʁi y.ni.vɛʁ.si.tɛʁ ʃak mo də la kɔ̃.vɛʁ.sa.sjɔ̃ a œ̃.ne.ki.va.lɑ̃ pʁe.si/', 'a lay-KREE ü-nee-vehr-see-TEHR | shak MOH duh la kohⁿ-vehr-sa-SYOHⁿ | a uhⁿ-nay-kee-va-LAHⁿ pray-SEE', ['rule', 'registre'], ['flashcard'],
    rule('« Du coup », « plein de », « ça » : que deviennent-ils dans un devoir ?', 'Par conséquent ou ainsi, de nombreux, cela : le sens reste, le registre change.')),
  sent(1153, C, 'Ce format présente toutefois des limites.', 'This format nevertheless has its limits.', '/sə fɔʁ.ma pʁe.zɑ̃t tut.fwa de li.mit/', 'suh for-MA | pray-zahⁿt toot-FWA | day lee-MEET', ['academique']),
];

/* ── ACT 11 · TA MISSION ─────────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1154, C, "Les cours en ligne offrent d'abord une souplesse que l'enseignement en présence ne permet pas.", 'Online classes offer first of all a flexibility that in-person teaching does not allow.', '/le kuʁ ɑ̃ liɲ ɔfʁ da.bɔʁ yn su.plɛs kə lɑ̃.sɛɲ.mɑ̃ ɑ̃ pʁe.zɑ̃s nə pɛʁ.mɛ pa/', 'lay koor ahⁿ LEENY | ofr da-BOR ün soo-PLEHS | kuh lahⁿ-sehny-MAHⁿ ahⁿ pray-ZAHⁿS | nuh pehr-meh PA', ['modele', 'phrase-cle'], FCVDR),
  sent(1155, C, 'Cette liberté profite en particulier aux étudiants qui occupent un emploi.', 'This freedom benefits in particular students who hold a job.', '/sɛt li.bɛʁ.te pʁɔ.fit ɑ̃ paʁ.ti.ky.lje o.ze.ty.djɑ̃ ki ɔ.kyp œ̃.nɑ̃.plwa/', 'seht lee-behr-TAY | pro-FEET ahⁿ par-tee-kü-LYAY | oh-zay-tü-DYAHⁿ | kee o-küp uhⁿ-nahⁿ-PLWA', ['modele', 'reprise']),
  sent(1156, C, 'Il semble donc que ce format réponde à un besoin réel.', 'So it seems that this format meets a real need.', '/il sɑ̃bl dɔ̃k kə sə fɔʁ.ma ʁe.pɔ̃d a œ̃ bə.zwɛ̃ ʁe.ɛl/', 'eel sahⁿbl DOHⁿK | kuh suh for-MA | ray-POHⁿD | a uhⁿ buh-zwehⁿ ray-EHL', ['modele', 'nuance'], FCVDR),
  sent(1157, C, "Cette souplesse comporte néanmoins un risque, celui de l'isolement.", 'This flexibility nevertheless carries a risk: isolation.', '/sɛt su.plɛs kɔ̃.pɔʁt ne.ɑ̃.mwɛ̃ œ̃ ʁisk sə.lɥi də li.zɔl.mɑ̃/', 'seht soo-PLEHS | kohⁿ-PORT nay-ahⁿ-MWEHⁿ | uhⁿ REESK | suh-lwee duh lee-zol-MAHⁿ', ['modele', 'transition'], FCVDR),
  sent(1158, C, 'Ce phénomène touche surtout les étudiants de première année.', 'This phenomenon mainly affects first-year students.', '/sə fe.nɔ.mɛn tuʃ syʁ.tu le.ze.ty.djɑ̃ də pʁə.mjɛ.ʁa.ne/', 'suh fay-no-MENN | toosh sür-TOO | lay-zay-tü-DYAHⁿ | duh pruh-myeh-ra-NAY', ['modele', 'reprise']),
  sent(1159, C, "Nous pouvons en conclure qu'un format hybride constitue sans doute la solution la plus équilibrée.", 'We can conclude that a hybrid format is probably the most balanced solution.', '/nu pu.vɔ̃ ɑ̃ kɔ̃.klyʁ kœ̃ fɔʁ.ma i.bʁid kɔ̃s.ti.ty sɑ̃ dut la sɔ.ly.sjɔ̃ la ply.ze.ki.li.bʁe/', 'noo poo-VOHⁿ ahⁿ kohⁿ-KLÜR | kuhⁿ for-ma ee-BREED | kohⁿs-tee-TÜ sahⁿ DOOT | la so-lü-SYOHⁿ | la plü-zay-kee-lee-BRAY', ['modele', 'conclure']),
  sent(1160, F, "Le travail étudiant, c'est un gros problème.", 'Student work is a big problem.', '/lə tʁa.vaj e.ty.djɑ̃ sɛ.tœ̃ ɡʁo pʁɔ.blɛm/', 'luh tra-vahy ay-tü-DYAHⁿ | seh-tuhⁿ groh pro-BLEM', ['mission', 'contre-exemple'], RECO),
  sent(1161, C, 'Le travail rémunéré pendant les études soulève une question délicate.', 'Paid work during your studies raises a delicate question.', '/lə tʁa.vaj ʁe.my.ne.ʁe pɑ̃.dɑ̃ le.ze.tyd su.lɛv yn kɛs.tjɔ̃ de.li.kat/', 'luh tra-vahy ray-mü-nay-RAY | pahⁿ-dahⁿ lay-zay-TÜD | soo-lehv ün kehs-TYOHⁿ day-lee-KAT', ['mission'], FCVDR),
  sent(1162, C, "Il ne s'agit donc pas d'interdire cet emploi, mais d'en limiter la durée.", 'So it is not a matter of banning this job, but of limiting its hours.', '/il nə sa.ʒi dɔ̃k pa dɛ̃.tɛʁ.diʁ sɛ.tɑ̃.plwa mɛ dɑ̃ li.mi.te la dy.ʁe/', 'eel nuh sa-zhee dohⁿk PA | dehⁿ-tehr-DEER seh-tahⁿ-PLWA | meh dahⁿ lee-mee-TAY la dü-RAY', ['mission', 'conclure'], FCVDR),
  sent(1163, C, "Selon l'étude, le taux de réussite baisse au-delà de quinze heures par semaine.", 'According to the study, the pass rate falls beyond fifteen hours a week.', '/sə.lɔ̃ le.tyd lə to də ʁe.y.sit bɛs o.də.la də kɛ̃.zœʁ paʁ sə.mɛn/', 'suh-lohⁿ lay-TÜD | luh toh duh ray-ü-SEET | behs oh-duh-LA | duh kehⁿ-ZUHR par suh-MENN', ['mission', 'preuve']),
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
 *  §I. THE ANCHOR TEXTS
 *
 *  Workshop shape: every act meets ONE text first. They live here so the
 *  reading, the quiz and the task cannot drift. B2 length: 200 to 350 words.
 *  Word counts are of the string, measured by the validate script.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: your first draft and the lecturer's comment. */
export const PREMIER_JET_TEXT =
  "Tu es en première année de sociologie à l'Université Laval, à Québec. Pour le cours de méthodologie, tu dois rendre deux paragraphes sur une question : les cours en ligne favorisent-ils la réussite des étudiants ? Voici ton premier jet. « Les cours en ligne, c'est super pratique. Du coup, plein d'étudiants les préfèrent. Moi, je pense que c'est clair qu'ils réussissent mieux, parce qu'ils peuvent revoir les vidéos. Mon cousin, par exemple, a eu de meilleures notes. En plus, les cours en ligne coûtent moins cher à l'université. Les cours en ligne, ça permet aussi de travailler en même temps. Par contre, il y a des gens qui décrochent. Bref, les cours en ligne, c'est l'avenir. » Deux jours plus tard, Mme Gauthier, ta chargée de cours, te rend ta copie avec ce commentaire : « Vos idées sont intéressantes, mais votre lecteur s'y perd. Votre paragraphe traite de quatre sujets à la fois : la réussite, le coût, le travail étudiant et l'abandon. Aucune phrase-clé n'annonce l'idée principale. Vous affirmez que les étudiants réussissent mieux, mais un seul exemple, celui de votre cousin, ne prouve rien. Vous répétez quatre fois « les cours en ligne ». Enfin, plusieurs mots appartiennent à la conversation : « super », « du coup », « plein de ». Réécrivez ce passage en deux paragraphes, avec une idée chacun. »";

/** Act 2: two paragraphs of a second-year essay, Liège. */
export const LOGEMENT_TEXT =
  "Extrait d'une dissertation de deuxième année, Université de Liège. Le sujet : le logement étudiant freine-t-il la réussite ? Le coût du logement pèse d'abord sur le temps d'étude. En effet, un étudiant qui paie un loyer élevé doit souvent travailler à côté de ses cours. Selon une enquête menée auprès de 800 étudiants de l'université, près d'un étudiant sur deux exerce une activité rémunérée pendant l'année. Or, chaque heure passée au travail est une heure retirée à la révision. Ce premier obstacle est donc financier, mais ses effets sont avant tout académiques. La distance entre le logement et le campus constitue un second obstacle. Faute de chambres abordables en ville, de nombreux étudiants s'installent en périphérie. Ils passent alors jusqu'à deux heures par jour dans les transports. Ce temps de trajet réduit non seulement les heures de travail personnel, mais aussi la participation à la vie universitaire : les groupes d'étude, les conférences, les associations. Ainsi, l'étudiant éloigné du campus risque de s'isoler. Ces deux paragraphes suivent le même modèle. Une phrase-clé annonce l'idée, les phrases suivantes l'expliquent et la prouvent, et une dernière phrase la referme. Le lecteur peut résumer chaque paragraphe en une ligne : le coût prend du temps, la distance isole.";

/** Act 3: the introduction of an undergraduate essay, Lausanne. */
export const INTRODUCTION_TEXT =
  "Introduction d'un devoir de licence, Université de Lausanne. Depuis une dizaine d'années, l'ordinateur portable a remplacé le cahier dans la plupart des amphithéâtres. Certaines universités y voient un progrès : les étudiants prennent des notes plus complètes et accèdent aux ressources du cours en temps réel. D'autres, au contraire, s'inquiètent : l'écran ouvert sur les réseaux sociaux semble détourner l'attention de ceux qui l'utilisent, et parfois celle de leurs voisins. La question se pose donc de savoir si l'ordinateur favorise l'apprentissage ou s'il le freine. Le débat dépasse d'ailleurs la salle de cours : il touche à la manière même d'apprendre. Il convient d'abord de préciser les termes du débat. Par « apprentissage », nous entendons ici la compréhension durable d'un contenu, et non la seule prise de notes. Nous examinerons en premier lieu les avantages que les étudiants attribuent à l'ordinateur : la rapidité, l'organisation des notes, l'accès aux documents. En second lieu, nous analyserons les risques de distraction, d'une part pour l'étudiant lui-même, d'autre part pour son entourage. Nous verrons enfin dans quelle mesure des règles d'usage, plutôt qu'une interdiction, permettraient de concilier ces deux points de vue. Cette progression permettra de passer du constat à la proposition, et de répondre à la question posée sans l'éluder.";

/** Act 4: a report extract on the night opening of a library, Sherbrooke. */
export const RAPPORT_TEXT =
  "Extrait du rapport annuel du service de la vie étudiante, Université de Sherbrooke. L'ouverture de la bibliothèque la nuit a été testée en décembre dernier, pendant la session d'examens. Le présent rapport en dresse le bilan et formule une recommandation. En effet, les associations étudiantes la réclamaient depuis plusieurs années. Les résultats de cet essai sont globalement positifs. D'une part, la fréquentation nocturne a dépassé les prévisions : environ trois cents étudiants par nuit. D'autre part, les usagers interrogés se disent satisfaits à quatre-vingt-cinq pour cent. En outre, aucun incident de sécurité n'a été signalé. Certes, l'expérience a un coût. L'ouverture de nuit a exigé deux agents de sécurité supplémentaires et a augmenté la facture d'électricité. Toutefois, ce coût reste modeste au regard du budget total de la bibliothèque. Par ailleurs, l'essai soulève une question de santé. Plusieurs étudiants ont en effet déclaré avoir révisé toute la nuit avant une épreuve. Or, le sommeil joue un rôle essentiel dans la mémorisation. Il convient donc d'accompagner cette mesure d'une campagne sur le sommeil. Par conséquent, le service recommande de reconduire l'ouverture de nuit lors des prochaines sessions, à condition de l'assortir d'un message de prévention. Ainsi, la bibliothèque restera un lieu d'étude, et non un lieu d'épuisement.";

/** Act 5: the abstract of an (invented) article on paid work and success. */
export const RESUME_TEXT =
  "Résumé d'un article publié dans une revue de sciences de l'éducation. Cette étude porte sur le lien entre le travail rémunéré et la réussite en première année d'université. Nous avons suivi, pendant deux sessions, 412 étudiants inscrits dans trois universités québécoises. Les données ont été recueillies par questionnaire, puis complétées par les relevés de notes. Les résultats suggèrent qu'au-delà de quinze heures de travail par semaine, le taux de réussite aux examens tend à diminuer. En deçà de ce seuil, en revanche, aucun effet net n'apparaît ; il semblerait même qu'un emploi de quelques heures aide certains étudiants à mieux organiser leur temps. Ces résultats doivent toutefois être interprétés avec prudence. D'une part, l'échantillon ne comprend que des étudiants volontaires, qui sont peut-être plus motivés que la moyenne. D'autre part, les heures de travail ont été déclarées par les étudiants eux-mêmes. On peut donc supposer que certaines d'entre elles ont été sous-estimées. Dans une certaine mesure, notre étude confirme les travaux antérieurs, qui associaient un emploi long à un risque accru d'abandon. Elle invite cependant à nuancer une idée répandue : ce n'est pas le fait de travailler qui pose problème, mais le nombre d'heures. Il serait utile de vérifier ces résultats sur un échantillon plus large et dans d'autres pays francophones.";

/** Act 7: Chloé's draft, then her revised version, Montréal. */
export const REPRISE_TEXT =
  "Premier jet de Chloé, étudiante en communication à l'Université de Montréal : « Les outils d'intelligence artificielle se sont répandus très vite dans les universités. Les outils d'intelligence artificielle permettent de résumer un article en quelques secondes. Les étudiants utilisent les outils d'intelligence artificielle pour gagner du temps. Mais les professeurs s'inquiètent, et les professeurs demandent des règles claires, parce que les professeurs ne savent plus qui a écrit quoi. » Version revue après l'atelier d'écriture : « Les outils d'intelligence artificielle se sont répandus très vite dans les universités. Capables de résumer un article en quelques secondes, ils séduisent de nombreux étudiants, qui y voient un moyen de gagner du temps. Ce phénomène inquiète toutefois les enseignants. Ces derniers réclament des règles claires, car il leur devient difficile de savoir qui a réellement écrit un devoir. Une telle incertitude touche au cœur de l'évaluation universitaire. Celle-ci repose en effet sur la confiance. » La deuxième version dit la même chose, mais chaque phrase reprend la précédente sans la répéter : un pronom, « ce phénomène », « ces derniers », « une telle incertitude », « celle-ci ». Le lecteur suit le fil sans relire trois fois le même groupe de mots. C'est ce fil qui donne au texte son allure académique, bien plus que les mots rares.";

/** Act 8: two versions of one passage from a briefing note, Dakar. */
export const NOMINAL_TEXT =
  "Deux versions d'un même passage, tirées d'une note de synthèse sur les résidences universitaires de Dakar. Version orale, telle qu'un étudiant la dirait : « Les loyers ont beaucoup augmenté, et c'est pour ça que les étudiants cherchent des chambres plus loin. Comme ils habitent plus loin, ils arrivent en retard, et ils ratent des cours. L'université a décidé de construire deux nouvelles résidences, mais elles ne vont pas ouvrir avant deux ans. » Version écrite, dans la note : « La hausse des loyers pousse les étudiants à chercher un logement plus éloigné du campus. Cet éloignement entraîne des retards et des absences répétées. Face à cette situation, l'université a décidé la construction de deux nouvelles résidences. Leur ouverture n'est pas prévue avant deux ans. » La seconde version transforme plusieurs verbes en noms : augmenter devient la hausse, habiter loin devient l'éloignement, construire devient la construction, ouvrir devient l'ouverture. Le nom permet de reprendre une idée entière en un mot et d'en faire le sujet de la phrase suivante. Attention cependant : une phrase qui empile les noms devient lourde et abstraite. Une nominalisation par phrase suffit souvent, et le verbe reste le moteur de la phrase. Dans une note de synthèse, cette économie compte : le lecteur, souvent pressé, doit saisir l'essentiel en une seule lecture.";

/** Act 9: the same subject in a student blog and in a master's thesis, Rennes. */
export const VOIX_TEXT =
  "Deux paragraphes sur les stages non rémunérés. Le premier vient d'un blogue étudiant, le second d'un mémoire de master soutenu à Rennes. Sur le blogue : « Moi, je trouve que les stages pas payés, c'est injuste. J'en ai fait un l'an dernier, et je me suis senti exploité. Je pense qu'on devrait tous les payer. En plus, je crois que ça favorise ceux qui ont des parents riches. » Dans le mémoire : « Nous nous proposons d'examiner ici la question des stages non rémunérés. Il apparaît d'abord que ces stages favorisent les étudiants les plus aisés, dont la famille peut financer plusieurs mois sans revenu. On observe ensuite que certaines entreprises y recourent pour remplacer des postes salariés. Il convient donc de s'interroger sur l'équité de ce dispositif. Nous montrerons que la rémunération des stages constitue une condition de l'égalité des chances. » Le blogue parle en « je » : l'auteur raconte son expérience et donne son avis. Le mémoire, lui, utilise le « nous » d'auteur pour annoncer sa démarche, le « on » pour ce que chacun peut constater, et des tournures impersonnelles, comme « il apparaît que » ou « il convient de », pour présenter les faits. L'opinion n'a pas disparu : elle est devenue une thèse, et elle s'appuie désormais sur des faits.";

/** Act 10: the lecturer's comment on your second draft. */
export const COMMENTAIRE_TEXT =
  "Commentaire de Mme Gauthier sur ton deuxième jet. « Votre plan est désormais clair, et vos deux paragraphes ont chacun une idée. Il reste un problème de registre. Plusieurs mots viennent de la conversation et affaiblissent votre texte. Vous écrivez que les cours en ligne sont « super pratiques » : un lecteur universitaire attend « très pratiques », ou mieux, un adjectif précis comme « souples ». « Du coup » est une liaison orale ; à l'écrit, préférez « par conséquent » ou « ainsi ». « Plein d'étudiants » devient « de nombreux étudiants ». « Les gens » est trop vague : de qui parlez-vous ? Des étudiants, des enseignants, des familles ? « Ça » se remplace par « cela », ou mieux par un nom qui reprend l'idée. « Un truc » ne dit rien : nommez la chose, un outil, un obstacle, un phénomène. Enfin, « c'est clair que » affirme trop, et trop familièrement ; « il est évident que » affirme encore trop. Si vous n'avez qu'une source, écrivez « il semble que ». Attention toutefois à l'excès inverse : n'écrivez pas « nonobstant » ou « d'aucuns » pour faire savant. Le registre académique est soutenu, mais il reste clair. Relisez votre texte à voix haute : chaque fois qu'une phrase sonne comme une discussion au café, cherchez le mot juste. Pour le prochain jet, gardez votre plan et vos preuves : seul le vocabulaire doit changer. »";

/** Act 11: your final version, the model of the task. */
export const MODELE_TEXT =
  "Ta version finale, rendue à Mme Gauthier. Les cours en ligne favorisent-ils la réussite des étudiants ? Les cours en ligne offrent d'abord une souplesse que l'enseignement en présence ne permet pas. L'étudiant peut en effet revoir une explication autant de fois que nécessaire et organiser son travail selon ses contraintes. Cette liberté profite en particulier aux étudiants qui occupent un emploi ou qui habitent loin du campus. Selon une enquête menée auprès de 600 étudiants de l'université, près de sept sur dix disent revoir les vidéos avant les examens. Il semble donc que ce format réponde à un besoin réel. Cette souplesse comporte néanmoins un risque, celui de l'isolement. Privé du rythme imposé par les séances, l'étudiant doit se discipliner seul, ce qui n'est pas donné à tous. Les enseignants observent ainsi que les abandons sont plus fréquents dans les cours entièrement à distance. Ce phénomène touche surtout les étudiants de première année, qui n'ont pas encore acquis de méthode de travail. Dans une certaine mesure, le succès des cours en ligne dépend donc moins de la technologie que de l'accompagnement proposé. Nous pouvons en conclure qu'un format hybride, qui combine vidéos et séances en petits groupes, constitue sans doute la solution la plus équilibrée.";

/** The weak paragraph the TASK asks the learner to rewrite and extend.
 *  Printed inside the task brief (TaskView has no source field). */
export const PARAGRAPHE_FAIBLE =
  "« Le travail étudiant, c'est un gros problème. Plein d'étudiants bossent, du coup ils ratent des cours et ils ont des mauvaises notes. C'est prouvé. Moi par exemple, je travaille dans un café et je suis crevé. Le travail étudiant, ça peut aussi être bien pour l'argent et pour l'expérience. Mais les étudiants qui travaillent, ils abandonnent plus. Bref, le travail étudiant, il faudrait l'interdire. »";
