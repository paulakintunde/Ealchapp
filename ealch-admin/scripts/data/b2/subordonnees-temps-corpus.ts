// b2.18.l1 « Les rapports de temps »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.15
// cause-consequence and b2.16 concession-avancee), under the B2 rules of
// B2-BUILD-LOG.md (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, NE_EXPLETIF_RULE, NE_EXPLETIF_RULE_EN.
//
// The slug is `subordonnees-temps`: B1 lesson 31 owns `subordination` and
// lesson 6 in B2 owns `subjonctif-indicatif`. Never rename one to the other.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 18 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE TIME CLAUSE ORGANISED BY THE RELATION AND THE MOOD IT TAKES. Lesson
//   31 in B1 named pendant que, depuis que, lorsque and après que; lesson 6
//   in B2 set avant que against après que in one act; lesson 7 in B2 built
//   dès que + futur antérieur; lesson 14 in B2 built après + infinitif passé.
//   This lesson maps every time word by the place of its event on the line,
//   seen FROM THE MAIN EVENT, and owns the expletive ne.
//
//     la ligne          the three relations (the main event before, during,
//                       after the other) and the one rule under the moods
//                       (acts 1 and 2)
//     avant             avant que + subjunctive (present, and past for an
//                       event finished before the main one), avant de +
//                       infinitive with one subject, avant + noun (act 3)
//     la limite         jusqu'à ce que against jusqu'au moment où, en
//                       attendant que / de, d'ici à ce que (soutenu) and
//                       d'ici que (courant), tant que... ne... pas (act 4)
//     le ne explétif    FULL TEACHING, owned here for B2: after avant que, à
//                       moins que (lesson 19 in B2), de peur que (lesson 17
//                       in B2), craindre que, éviter que and a comparison;
//                       optional, soutenu, NOT a negation; never after sans
//                       que, après que or jusqu'à ce que (act 5)
//     en même temps     quand, lorsque, pendant que, au moment où, comme +
//                       imparfait (time) against comme of cause (act 6)
//     la durée          à mesure que, au fur et à mesure que, chaque fois
//                       que, toutes les fois que, tant que, depuis que,
//                       maintenant que (act 7)
//     alors que         tandis que and alors que in their TIME sense against
//                       their opposition sense (lesson 16 in B2) (act 8)
//     le futur          the future after quand, lorsque, pendant que, tant
//                       que, chaque fois que, au moment où (the English
//                       present is wrong), si keeps the present, and the
//                       future seen from the past becomes a conditional
//                       (act 9)
//     après             après que + indicatif as the norm, « après qu'il
//                       soit parti » as spoken and contested, the ways out:
//                       après + nom, après + infinitif passé (act 10)
//     l'antériorité     dès que, aussitôt que, sitôt que, une fois que: the
//                       compound tense follows the other verb (passé
//                       composé, plus-que-parfait, futur antérieur, passé
//                       antérieur for recognition); une fois + participe
//                       (act 11)
//     le compte rendu   a chronological report, DELF B2 production écrite
//                       (act 12)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 7 in B1    quand + futur (reframe quoted; rows projets-et-futur
//                       .433, .436, .438, .439, .440, .460)
//     lesson 16 in B1   count the subjects (reframe quoted)
//     lessons 14, 15 in B1  rows opinions-et-avis .1065, .1340
//     lesson 31 in B1   the conjunction picks the mood (reframe quoted; rows
//                       .1334, .1335, .1337, .1339, .1242)
//     lesson 32 in B1   tandis que of time, alors que (rows .1524, .1530)
//     lesson 1 in B2    the plus-que-parfait (cited, act 11)
//     lesson 5 in B2    the subjonctif passé (rows emotions .1320, .1321)
//     lesson 6 in B2    avant que against après que (reframe quoted; rows
//                       opinions-et-avis .1937 to .1950)
//     lesson 7 in B2    dès que + futur antérieur (reframe quoted; rows
//                       projets-et-futur .1880, .1882, .1889)
//     lesson 8 in B2    the passé antérieur, recognition (reframe quoted;
//                       no row reused)
//     lesson 9 in B2    row litterature .1280 (avant qu'il ait fini)
//     lesson 12 in B2   one subject: the gérondif (reframe quoted, cited in
//                       act 6; no row reused)
//     lesson 14 in B2   après + infinitif passé (reframe quoted; rows
//                       faits-et-procedures .1211, .1241, .1242)
//     lesson 16 in B2   alors que of opposition (reframe quoted; rows .2171,
//                       .2173)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques` (fondations, a2-b2). Sub-theme « les
//     rapports de temps » is already in Postgres (read back 2026-09-30 with
//     « la coordination », « la subordination », « la concession », « le
//     gérondif », « la cause et la conséquence », « le but »). Nothing to
//     create at import.
//
//  2. ID BLOCK: `.2400`-`.2599`, assigned by the brief (1000-1599 are B1,
//     1600-2199 are lessons 12, 15 and 16 in B2, 2200-2399 is lesson 17 in
//     B2 written in parallel). A read-only Postgres probe on 2026-09-30 found
//     NO row at .2400-.2599 at any level of this theme (highest b2 .2197).
//     Authored: `.2400`-`.2599`, with gaps between act blocks. Nothing
//     outside it.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with a published row or
//     with the parallel lessons 17, 19, 20 and 21 in B2. « De peur que »,
//     « à moins que », « pour que », « afin que » and « il faut que » are
//     NEVER a row's subject here: they appear only in teaching prose, one
//     rule card's list and the act 5 text, each cited to its own lesson.
//
//  4. REUSED ROWS. The seed plus packs (22,082 items, read 2026-09-30) were
//     probed for every time word in this lesson. On-topic rows are reused BY
//     ID (§F), never retyped. The seed carries no d'ici à ce que, d'ici que,
//     toutes les fois que, en attendant de, jusqu'au moment où, sitôt que in
//     a clause of ours, nor a passé antérieur after dès que; those are
//     authored here. Postgres holds a few DB-only rows with à mesure que,
//     sitôt que and « plus… que je ne le pensais »; none is an exact twin of
//     a row here (checked 2026-09-30).
//
//  5. RESPELLINGS. Spelled for the nasal checker, not the ear: « personne »
//     pehr-SONN, « aucune » oh-KÜNN, « vanne » VANN, « panne » PANN,
//     « Lisbonne » lees-BONN, « viennent » VYENN, « cinquantaine »
//     sehⁿ-kahⁿ-TENN, « pharmacienne » far-ma-SYENN. The word « jeune » is
//     kept out of every row (as lessons 32 in B1 and 16 in B2). No U+203F
//     tie.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL OR CONTESTED SENTENCE IS EVER A ROW. « Avant que la
//     fuite a commencé », « après qu'il soit parti », « quand tu arrives
//     demain », « sans qu'on ne l'entende » and the other wrong or contested
//     forms live only in the scene's choice, commonErrors.wrong,
//     trapDrill.promptSound and quiz errorSpot prompts.
//
//  8. THE EXPLETIVE NE IS OPTIONAL. Every typed answer after avant que, à
//     moins que or a comparison accepts the sentence WITH and WITHOUT it.
//     `fold()` strips spaces and apostrophes, never letters, so « ne » and
//     « n' » are two more letters and must be listed in `accept`.
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
  id: 'b2.18',
  seq: 18,
  title: 'Time Clauses',
  sub: 'Les rapports de temps',
  canDo: 'Can order events in a report by placing each subordinate event before, during or after the main one, choosing the mood that relation takes: avant que, jusqu\'à ce que, en attendant que and d\'ici à ce que with the subjunctive (or avant de, en attendant de with an infinitive for one subject); quand, lorsque, pendant que, au moment où, à mesure que, chaque fois que, tant que, depuis que, maintenant que, temporal alors que and tandis que with the indicative; après que with the indicative (après + noun or past infinitive as ways out); dès que, aussitôt que and une fois que with the compound tense that matches the main verb; the future after time words; can read and write the expletive ne and never read it as a negation',
  prereqUnitIds: ['b1.07', 'b1.16', 'b1.31', 'b2.06', 'b2.07'],
} as const;

export const LESSON_ID = 'b2.18.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[2400, 2599]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order. Only B1 1-39 and
 *  B2 1-26 are cited (17 to 21 publish together with this lesson).
 * ══════════════════════════════════════════════════════════════════════════ */

export const FUTUR_USAGE_UNIT = 'b1.07';
export const SI_UNIT = 'b1.10';
export const SUBJ_INF_UNIT = 'b1.16';
export const DISCOURS_UNIT = 'b1.19';
export const SUBORD_UNIT = 'b1.31';
export const PQP_UNIT = 'b2.01';
export const SUBJ_PASSE_UNIT = 'b2.05';
export const MODES_UNIT = 'b2.06';
export const FUT_ANT_UNIT = 'b2.07';
export const PS_UNIT = 'b2.08';
export const NOMINAL_UNIT = 'b2.10';
export const GERONDIF_UNIT = 'b2.12';
export const INF_UNIT = 'b2.14';
export const CONCESSION_UNIT = 'b2.16';
export const BUT_UNIT = 'b2.17';
export const RESTRICTION_UNIT = 'b2.19';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const FUTUR_USAGE_REF = refFr(FUTUR_USAGE_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const SUBJ_PASSE_REF = refFr(SUBJ_PASSE_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const FUT_ANT_REF = refFr(FUT_ANT_UNIT);
export const PS_REF = refFr(PS_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
export const INF_REF = refFr(INF_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const BUT_REF = refFr(BUT_UNIT);
export const RESTRICTION_REF = refFr(RESTRICTION_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B107_REFRAME, REFRAME_EN as B107_REFRAME_EN } from '../b1/futur-usage-corpus.ts';
export { REFRAME as B116_REFRAME, REFRAME_EN as B116_REFRAME_EN } from '../b1/subjonctif-infinitif-corpus.ts';
export { REFRAME as B131_REFRAME, REFRAME_EN as B131_REFRAME_EN } from '../b1/subordination-corpus.ts';
export { REFRAME as B201_REFRAME, REFRAME_EN as B201_REFRAME_EN } from './plus-que-parfait-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B207_REFRAME, REFRAME_EN as B207_REFRAME_EN } from './futur-anterieur-corpus.ts';
export { REFRAME as B208_REFRAME, REFRAME_EN as B208_REFRAME_EN } from './passe-simple-corpus.ts';
export { REFRAME as B212_REFRAME, REFRAME_EN as B212_REFRAME_EN } from './gerondif-corpus.ts';
export { REFRAME as B214_REFRAME, REFRAME_EN as B214_REFRAME_EN } from './constructions-infinitives-corpus.ts';
export { REFRAME as B216_REFRAME, REFRAME_EN as B216_REFRAME_EN } from './concession-avancee-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA LIGNE, VUE DU FAIT PRINCIPAL. Put the two events on one line and
 *  stand on the MAIN one. If the other event has not happened yet at that
 *  point (avant que, jusqu'à ce que, en attendant que, d'ici à ce que), it
 *  is only looked at: subjunctive. If it is happening at that point or has
 *  already happened (quand, pendant que, depuis que, après que, dès que),
 *  it is real there: indicative, in whatever tense the line needs, the
 *  future included (quand tu arriveras: the arrival is real at the moment
 *  of the call). The expletive ne slips in only where the event has not
 *  happened yet, which is why it follows avant que and never après que.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Vu du fait principal, ce qui n'a pas encore eu lieu prend le subjonctif ; ce qui a lieu ou a déjà eu lieu prend l'indicatif.";
export const REFRAME_EN = 'Seen from the main event, what has not happened yet takes the subjunctive; what is happening or has already happened takes the indicative.';

/** The one rule the other wave 6 lessons cite for the expletive ne. */
export const NE_EXPLETIF_RULE = "Le ne explétif ne nie rien : il se glisse, sans obligation, là où le fait n'a pas encore eu lieu.";
export const NE_EXPLETIF_RULE_EN = 'The expletive ne negates nothing: it slips in, optionally, where the event has not happened yet.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Avant que + subjonctif, après que + indicatif.',
    why: 'True, and already the reframe of lesson 6 in B2’s act 9. It is a list, not a reason: it says nothing about jusqu’à ce que, en attendant que or d’ici à ce que, and nothing about why « quand tu arriveras » is indicative although the arrival is still to come.',
  },
  {
    text: 'Ce qui est incertain prend le subjonctif.',
    why: 'False here: « avant que le soleil se couche » is certain and still subjunctive, and « quand tu arriveras » is uncertain and indicative. What decides is where the event sits on the line, seen from the main one.',
  },
  {
    text: 'Le futur ne prend jamais le subjonctif.',
    why: 'Misleading: « jusqu’à ce que tu reviennes » is about the future and takes the subjunctive. The future of the English present is a TENSE question (act 9), the subjunctive a MOOD question.',
  },
  {
    text: 'L’indicatif affirme un fait ; le subjonctif le regarde sans l’affirmer.',
    why: 'Lesson 6 in B2’s reframe, still true and QUOTED in act 2. For time clauses it needs one more step, the point of view: seen from WHICH moment? From the main event, which is what this lesson adds.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;
const OA = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const PF = (n: number) => `fr.b1.projets-et-futur.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    CL(1339),                                  // Après qu'il est parti, nous avons fermé le bureau.  (lesson 31 in B1)
    PF(433),                                   // Dès que tu seras prêt, on partira.  (lesson 7 in B1)
    OA(1938),                                  // Avant que le conseil prenne sa décision, les habitants ont manifesté.  (lesson 6 in B2)
    'fr.b2.faits-et-procedures.1242',          // Après avoir signé le bail, nous avons reçu les clés.  (lesson 14 in B2)
    'fr.b2.projets-et-futur.1880',             // Dès que j'aurai reçu ta réponse, je réserverai.  (lesson 7 in B2)
  ],
  act3: [
    'fr.b2.emotions.1320',                     // Ne signe rien avant qu'on ait relu le contrat ensemble.  (lesson 5 in B2)
    'fr.b1.opinions-et-avis.1065',             // Avant que tu partes, ferme la fenêtre.  (lesson 14 in B1)
    'fr.b2.faits-et-procedures.1241',          // Ne pars pas avant d'avoir fini tes devoirs.  (lesson 14 in B2)
    'fr.b2.litterature.1280',                  // Elle est partie avant qu'il ait fini sa phrase.  (lesson 9 in B2)
  ],
  act4: [
    'fr.b1.opinions-et-avis.1340',             // Attends ici jusqu’à ce que je revienne.  (lesson 15 in B1)
    OA(1942),                                  // En attendant que la mairie réponde, on continue la pétition.  (lesson 6 in B2)
    'fr.b2.emotions.1321',                     // Attends jusqu'à ce que j'aie terminé mon appel.  (lesson 5 in B2)
    OA(1950),                                  // On attendra jusqu'à ce que tout le monde soit assis.  (lesson 6 in B2)
    PF(439),                                   // Tant que tu n’auras pas fini, tu ne sortiras pas.  (lesson 7 in B1)
  ],
  act5: [
    OA(1941),                                  // Finissons avant que le gardien ne parte.  (lesson 6 in B2, soutenu)
    OA(1940),                                  // Finissons avant que le gardien parte.  (lesson 6 in B2)
    'fr.b1.maison.004',                        // Il faut refaire la toiture avant que l'hiver n'arrive.  (no voiceflash)
    'fr.b1.maison.058',                        // Mon voisin est plus bruyant que je ne le pensais.  (dictation only)
  ],
  act6: [
    CL(1337),                                  // Lorsque le train est arrivé, nous sommes montés.  (lesson 31 in B1)
    CL(1334),                                  // Pendant que je dormais, le téléphone a sonné.  (lesson 31 in B1)
    CL(1242),                                  // Comme nous étions en avance, nous avons visité le musée.  (lesson 31 in B1, comme of cause)
    'fr.b1.pronoms-essentiels.1320',           // Au moment où tu arrives, le magasin ferme.
  ],
  act7: [
    CL(1335),                                  // Depuis que j'habite à Montréal, je fais du vélo.  (lesson 31 in B1)
    OA(1944),                                  // Maintenant que le parc est ouvert, les familles reviennent.  (lesson 6 in B2)
    PF(438),                                   // Tant que la pluie continuera, nous resterons à l’intérieur.  (lesson 7 in B1)
    'fr.b2.ecologie.003',                      // Au fur et à mesure que la température grimpe, certaines espèces migrent vers le nord.  (no voiceflash)
  ],
  act8: [
    CL(1530),                                  // Tandis que tu travailles, je fais les courses.  (lesson 32 in B1, time)
    CL(1524),                                  // Il est sorti sans manteau alors qu'il neigeait.  (lesson 32 in B1)
    'fr.b2.connecteurs-logiques.2171',         // Lyon est chère, alors que Saint-Étienne reste abordable.  (lesson 16 in B2)
    'fr.b2.connecteurs-logiques.2173',         // Il est parti en vacances alors qu'il avait promis de finir le dossier.  (lesson 16 in B2)
  ],
  act9: [
    PF(436),                                   // Lorsque nous serons à Genève, nous visiterons le lac.  (lesson 7 in B1)
    PF(440),                                   // Pendant que tu feras les courses, je rangerai la cuisine.  (lesson 7 in B1)
    PF(574),                                   // Après si, le présent ; après quand, le futur.  (lesson 7 in B1, rule)
  ],
  act10: [
    OA(1937),                                  // Après que le conseil a voté, les travaux ont commencé.  (lesson 6 in B2)
    OA(1939),                                  // Après qu'elle est partie, la réunion a continué.  (lesson 6 in B2)
    OA(1945),                                  // Après avoir voté, le conseil a levé la séance.  (lesson 6 in B2)
    'fr.b2.faits-et-procedures.1211',          // Après être arrivée à la maison, elle a ouvert le carton.  (lesson 14 in B2)
  ],
  act11: [
    PF(460),                                   // Dès que la cloche sonnait, tout le monde sortait.  (lesson 7 in B1)
    'fr.b2.projets-et-futur.1889',             // Dès que nous aurons vendu l'appartement, nous déménagerons.  (lesson 7 in B2)
    'fr.b2.projets-et-futur.1882',             // Une fois que tu auras compris le principe, tout ira vite.  (lesson 7 in B2)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b1.maison.058',                          // dictation only
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  'fr.b1.maison.004',                          // sentence, flashcard, review
  'fr.b2.ecologie.003',                        // sentence, flashcard, review
  PF(574),                                     // a rule card
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
const GP = ['subordonnees-temps'];

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

/* ── ACT 1 · METTRE LES FAITS DANS L'ORDRE (.2400-.2413) ──────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2400, "J'ai quitté l'appartement avant que la fuite commence.", 'I left the flat before the leak started.',
    '/ʒe ki.te la.paʁ.tə.mɑ̃ a.vɑ̃ kə la fɥit kɔ.mɑ̃s/', 'zhay kee-TAY la-par-tuh-MAHⁿ | a-vahⁿ kuh la FWEET ko-MAHⁿS', ['scene', 'avant-que'], FCVDR),
  sent(2401, "Lorsque le gardien est arrivé, l'eau coulait déjà dans l'escalier.", 'When the caretaker arrived, water was already running down the stairs.',
    '/lɔʁs.kə lə ɡaʁ.djɛ̃ ɛ.ta.ʁi.ve lo ku.lɛ de.ʒa dɑ̃ lɛs.ka.lje/', 'lors-kuh luh gar-DYEHⁿ | eh-ta-ree-VAY | loh koo-LEH day-ZHA | dahⁿ les-ka-LYAY', ['lecture', 'simultane']),
  sent(2402, "Il a coupé l'eau dès qu'il a trouvé la vanne.", 'He turned the water off as soon as he found the valve.',
    '/i.la ku.pe lo dɛ kil a tʁu.ve la van/', 'ee-la koo-PAY LOH | deh keel a troo-VAY la VANN', ['lecture', 'anteriorite']),
  sent(2403, 'Pendant que les pompiers vidaient la cave, les voisins attendaient dans la cour.', 'While the firefighters were emptying the basement, the neighbours waited in the courtyard.',
    '/pɑ̃.dɑ̃ kə le pɔ̃.pje vi.dɛ la kav le vwa.zɛ̃ a.tɑ̃.dɛ dɑ̃ la kuʁ/', 'pahⁿ-dahⁿ kuh lay pohⁿ-PYAY | vee-deh la KAV | lay vwa-ZEHⁿ | a-tahⁿ-deh dahⁿ la KOOR', ['lecture', 'simultane']),
  sent(2404, "Les locataires ont attendu dans la cour jusqu'à ce que l'électricien vérifie les compteurs.", 'The tenants waited in the courtyard until the electrician checked the meters.',
    '/le lɔ.ka.tɛʁ ɔ̃.ta.tɑ̃.dy dɑ̃ la kuʁ ʒys.ka sə kə le.lɛk.tʁi.sjɛ̃ ve.ʁi.fi le kɔ̃.tœʁ/', 'lay lo-ka-TEHR | ohⁿ-ta-tahⁿ-DÜ dahⁿ la KOOR | zhüs-ka suh kuh lay-lek-tree-SYEHⁿ | vay-ree-FEE lay kohⁿ-TUHR', ['lecture', 'limite'], FCVDR),
  sent(2405, "Après avoir séché les murs, l'entreprise a remplacé le tuyau.", 'After drying the walls, the firm replaced the pipe.',
    '/a.pʁɛ.za.vwaʁ se.ʃe le myʁ lɑ̃.tʁə.pʁiz a ʁɑ̃.pla.se lə tɥi.jo/', 'a-preh-za-VWAR say-SHAY lay MÜR | lahⁿ-truh-PREEZ | a rahⁿ-pla-SAY luh twee-YOH', ['lecture', 'apres']),
  sent(2406, "À mesure que l'eau baissait, on découvrait les dégâts.", 'As the water went down, the damage came to light.',
    '/a mə.zyʁ kə lo bɛ.sɛ ɔ̃ de.ku.vʁɛ le de.ɡa/', 'a muh-zür kuh loh beh-SEH | ohⁿ day-koo-VREH lay day-GA', ['lecture', 'duree']),
  sent(2407, "Personne n'a pu rentrer avant que l'immeuble soit déclaré sûr.", 'Nobody could go back in before the building was declared safe.',
    '/pɛʁ.sɔn na py ʁɑ̃.tʁe a.vɑ̃ kə li.mœbl swa de.kla.ʁe syʁ/', 'pehr-SONN na pü rahⁿ-TRAY | a-vahⁿ kuh lee-MUHBL | swa day-kla-RAY SÜR', ['lecture', 'avant-que']),
  sent(2408, "Depuis que le tuyau a été changé, aucune fuite n'a été signalée.", 'Since the pipe was replaced, no leak has been reported.',
    '/də.pɥi kə lə tɥi.jo a e.te ʃɑ̃.ʒe o.kyn fɥit na e.te si.ɲa.le/', 'duh-pwee kuh luh twee-YOH | a ay-tay shahⁿ-ZHAY | oh-KÜNN FWEET | na ay-tay see-nya-LAY', ['lecture', 'duree']),
  rule(2409, REFRAME, REFRAME_EN,
    '/vy dy fɛ pʁɛ̃.si.pal sə ki na pa.zɑ̃.kɔʁ y ljø pʁɑ̃ lə syb.ʒɔ̃k.tif sə ki a ljø u a de.ʒa y ljø pʁɑ̃ lɛ̃.di.ka.tif/',
    'vü dü FEH prehⁿ-see-PAL | suh kee na pa-zahⁿ-KOR ü LYEU | prahⁿ luh süb-zhohⁿk-TEEF | suh kee a LYEU | oo a day-ZHA ü LYEU | prahⁿ lehⁿ-dee-ka-TEEF',
    'Avant que, pendant que, après que : qu’est-ce qui décide du mode ?',
    "La place du fait sur la ligne, vue du fait principal. S'il n'a pas encore eu lieu à ce moment-là, subjonctif : avant que, jusqu'à ce que. S'il a lieu ou a déjà eu lieu, indicatif : pendant que, après que, dès que.",
    ['reframe', 'ligne']),
  sent(2410, "Quand l'expert passera, il faudra lui montrer les photos.", 'When the assessor comes round, we will have to show him the photos.',
    '/kɑ̃ lɛks.pɛʁ pa.sə.ʁa il fo.dʁa lɥi mɔ̃.tʁe le fɔ.to/', 'kahⁿ leks-PEHR pa-suh-RA | eel foh-DRA lwee mohⁿ-TRAY lay fo-TOH', ['lecture', 'futur'], FCVDR),
  sent(2411, "Au moment où l'alarme a sonné, j'étais déjà dans le métro.", 'At the moment the alarm went off, I was already on the metro.',
    '/o mɔ.mɑ̃ u la.laʁm a sɔ.ne ʒe.tɛ de.ʒa dɑ̃ lə me.tʁo/', 'oh mo-mahⁿ OO la-LARM a so-NAY | zhay-teh day-ZHA | dahⁿ luh may-TROH', ['scene', 'simultane']),
  sent(2412, 'Je vous enverrai les factures dès que je les aurai reçues.', 'I will send you the invoices as soon as I have received them.',
    '/ʒə vu.zɑ̃.ve.ʁe le fak.tyʁ dɛ kə ʒə le.zo.ʁe ʁə.sy/', 'zhuh voo-zahⁿ-veh-RAY lay fak-TÜR | deh kuh zhuh lay-zoh-RAY ruh-SÜ', ['usage', 'anteriorite']),
  sent(2413, 'Nous attendrons votre accord avant de commencer les travaux.', 'We will wait for your approval before starting the work.',
    '/nu.za.tɑ̃.dʁɔ̃ vɔ.tʁa.kɔʁ a.vɑ̃ də kɔ.mɑ̃.se le tʁa.vo/', 'noo-za-tahⁿ-DROHⁿ | vo-tra-KOR | a-vahⁿ duh ko-mahⁿ-SAY lay tra-VOH', ['usage', 'avant-de']),
];

/* ── ACT 2 · LA LIGNE DU TEMPS (.2416-.2429) ─────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  rule(2416, 'Avant, pendant, après : trois places sur la ligne, deux modes.', 'Before, during, after: three places on the line, two moods.',
    '/a.vɑ̃ pɑ̃.dɑ̃ a.pʁɛ tʁwa plas syʁ la liɲ dø mɔd/', 'a-VAHⁿ | pahⁿ-DAHⁿ | a-PREH | trwa PLASS sür la LEENY | deu MOD',
    'Combien de relations de temps, et quels modes ?',
    "Trois. Le fait principal vient avant l'autre : avant que, jusqu'à ce que + subjonctif. En même temps : quand, pendant que + indicatif. Après l'autre : après que, dès que + indicatif.",
    ['ligne']),
  sent(2417, 'Appelle-moi avant que le train parte.', 'Call me before the train leaves.',
    '/a.pɛl.mwa a.vɑ̃ kə lə tʁɛ̃ paʁt/', 'a-pel-MWA | a-vahⁿ kuh luh TREHⁿ PART', ['ligne', 'avant-que'], FCVDR),
  sent(2418, 'Appelle-moi pendant que le train roule.', 'Call me while the train is moving.',
    '/a.pɛl.mwa pɑ̃.dɑ̃ kə lə tʁɛ̃ ʁul/', 'a-pel-MWA | pahⁿ-dahⁿ kuh luh TREHⁿ ROOL', ['ligne', 'simultane']),
  sent(2419, 'Appelle-moi dès que le train sera parti.', 'Call me as soon as the train has left.',
    '/a.pɛl.mwa dɛ kə lə tʁɛ̃ sə.ʁa paʁ.ti/', 'a-pel-MWA | deh kuh luh TREHⁿ | suh-ra par-TEE', ['ligne', 'anteriorite']),
  sent(2420, 'Appelle-moi quand tu seras dans le train.', 'Call me when you are on the train.',
    '/a.pɛl.mwa kɑ̃ ty sə.ʁa dɑ̃ lə tʁɛ̃/', 'a-pel-MWA | kahⁿ tü suh-RA | dahⁿ luh TREHⁿ', ['ligne', 'futur'], FCVDR),
  sent(2421, 'Appelle-moi avant de monter dans le train.', 'Call me before you get on the train.',
    '/a.pɛl.mwa a.vɑ̃ də mɔ̃.te dɑ̃ lə tʁɛ̃/', 'a-pel-MWA | a-vahⁿ duh mohⁿ-TAY | dahⁿ luh TREHⁿ', ['ligne', 'avant-de']),
  sent(2422, 'Appelle-moi après être descendu du train.', 'Call me after you get off the train.',
    '/a.pɛl.mwa a.pʁɛ.zɛ.tʁə de.sɑ̃.dy dy tʁɛ̃/', 'a-pel-MWA | a-preh-zeh-truh day-sahⁿ-DÜ | dü TREHⁿ', ['ligne', 'apres']),
  sent(2423, "Attends sur le quai jusqu'à ce que le train arrive.", 'Wait on the platform until the train arrives.',
    '/a.tɑ̃ syʁ lə kɛ ʒys.ka sə kə lə tʁɛ̃ a.ʁiv/', 'a-TAHⁿ sür luh KEH | zhüs-ka suh kuh luh TREHⁿ a-REEV', ['ligne', 'limite']),
  sent(2424, "Après que le train est parti, le quai s'est vidé.", 'After the train left, the platform emptied.',
    '/a.pʁɛ kə lə tʁɛ̃ ɛ paʁ.ti lə kɛ sɛ vi.de/', 'a-preh kuh luh TREHⁿ | eh par-TEE | luh KEH seh vee-DAY', ['ligne', 'apres']),
  rule(2425, 'Un seul sujet : avant de, après, en attendant de + infinitif.', 'One subject: avant de, après, en attendant de + infinitive.',
    '/œ̃ sœl sy.ʒɛ a.vɑ̃ də a.pʁɛ ɑ̃.na.tɑ̃.dɑ̃ də ɛ̃.fi.ni.tif/', 'uhⁿ SUHL sü-ZHEH | a-vahⁿ DUH | a-PREH | ahⁿ-na-tahⁿ-dahⁿ DUH | ehⁿ-fee-nee-TEEF',
    '« Je relis la lettre avant que je la signe » : que faut-il changer ?',
    "Un seul sujet, je : à l'écrit soigné, je relis la lettre avant de la signer. Avant que demande deux sujets : je relis la lettre avant que tu la signes.",
    ['sujet']),
  gap(2426, 'Avant que le train parte, achète ton billet.', 'Before the train leaves, buy your ticket.',
    '/a.vɑ̃ kə lə tʁɛ̃ paʁt a.ʃɛt tɔ̃ bi.jɛ/', 'a-vahⁿ kuh luh TREHⁿ PART | a-shet tohⁿ bee-YEH',
    'Avant que le train ___, achète ton billet. (partir · pas encore)',
    "Le départ n'a pas encore eu lieu quand tu achètes : subjonctif, parte. EN: not yet: subjunctive.",
    ['ligne', 'avant-que'], FCVDR),
  gap(2427, 'Après que le train est parti, nous sommes rentrés.', 'After the train left, we went home.',
    '/a.pʁɛ kə lə tʁɛ̃ ɛ paʁ.ti nu sɔm ʁɑ̃.tʁe/', 'a-preh kuh luh TREHⁿ eh par-TEE | noo som rahⁿ-TRAY',
    'Après que le train ___ parti, nous sommes rentrés. (être · c’est fait)',
    "Le départ a déjà eu lieu : indicatif, est. À l'oral, on entend soit ; l'écrit garde l'indicatif. EN: already happened: indicative.",
    ['ligne', 'apres']),
  sent(2428, "Tant que le train n'est pas arrivé, reste sur le quai.", 'Until the train has arrived, stay on the platform.',
    '/tɑ̃ kə lə tʁɛ̃ nɛ pa.za.ʁi.ve ʁɛst syʁ lə kɛ/', 'tahⁿ kuh luh TREHⁿ | neh pa-za-ree-VAY | rest sür luh KEH', ['ligne', 'duree']),
  sent(2429, 'Depuis que la ligne est fermée, je prends le bus.', 'Since the line closed, I have been taking the bus.',
    '/də.pɥi kə la liɲ ɛ fɛʁ.me ʒə pʁɑ̃ lə bys/', 'duh-pwee kuh la LEENY eh fehr-MAY | zhuh prahⁿ luh BÜSS', ['ligne', 'duree']),
];

/* ── ACT 3 · AVANT QUE, AVANT DE (.2432-.2447) ────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(2432, 'Avant de préparer une ordonnance, lave-toi les mains.', 'Before preparing a prescription, wash your hands.',
    '/a.vɑ̃ də pʁe.pa.ʁe y.nɔʁ.dɔ.nɑ̃s lav.twa le mɛ̃/', 'a-vahⁿ duh pray-pa-RAY | ü-nor-do-NAHⁿS | lav-TWA lay MEHⁿ', ['avant-de', 'procedure'], FCVDR),
  sent(2433, 'Vérifie la dose avant que le patient reparte.', 'Check the dose before the patient leaves.',
    '/ve.ʁi.fi la doz a.vɑ̃ kə lə pa.sjɑ̃ ʁə.paʁt/', 'vay-ree-FEE la DOHZ | a-vahⁿ kuh luh pa-SYAHⁿ ruh-PART', ['avant-que', 'procedure'], FCVDR),
  sent(2434, 'Range les flacons avant que les clients arrivent.', 'Put the bottles away before the customers arrive.',
    '/ʁɑ̃ʒ le fla.kɔ̃ a.vɑ̃ kə le kli.jɑ̃ a.ʁiv/', 'rahⁿzh lay fla-KOHⁿ | a-vahⁿ kuh lay klee-YAHⁿ a-REEV', ['avant-que', 'procedure']),
  sent(2435, "Ne donne rien avant que la pharmacienne ait relu l'ordonnance.", 'Do not hand anything over before the pharmacist has reread the prescription.',
    '/nə dɔn ʁjɛ̃ a.vɑ̃ kə la faʁ.ma.sjɛn ɛ ʁə.ly lɔʁ.dɔ.nɑ̃s/', 'nuh donn RYEHⁿ | a-vahⁿ kuh la far-ma-SYENN | eh ruh-LÜ lor-do-NAHⁿS', ['avant-que', 'passe'], FCVDR),
  sent(2436, "Avant d'avoir fini son stage, Lucas savait déjà préparer un sirop.", 'Before he had finished his placement, Lucas already knew how to make a syrup.',
    '/a.vɑ̃ da.vwaʁ fi.ni sɔ̃ staʒ ly.ka sa.vɛ de.ʒa pʁe.pa.ʁe œ̃ si.ʁo/', 'a-vahⁿ da-vwar fee-NEE sohⁿ STAZH | lü-KA sa-VEH day-ZHA | pray-pa-ray uhⁿ see-ROH', ['avant-de', 'passe']),
  sent(2437, "Préviens le médecin avant qu'il soit trop tard.", 'Warn the doctor before it is too late.',
    '/pʁe.vjɛ̃ lə med.sɛ̃ a.vɑ̃ kil swa tʁo taʁ/', 'pray-VYEHⁿ luh mayd-SEHⁿ | a-vahⁿ keel swa troh TAR', ['avant-que']),
  rule(2438, "Avant que regarde un fait qui n'a pas encore eu lieu : toujours le subjonctif.", 'Avant que looks at an event that has not happened yet: always the subjunctive.',
    '/a.vɑ̃ kə ʁə.ɡaʁd œ̃ fɛ ki na pa.zɑ̃.kɔʁ y ljø tu.ʒuʁ lə syb.ʒɔ̃k.tif/', 'a-vahⁿ kuh ruh-GARD | uhⁿ FEH kee na pa-zahⁿ-KOR ü LYEU | too-ZHOOR luh süb-zhohⁿk-TEEF',
    'Avant que le patient ___ (repartir) : quel mode, et pourquoi ?',
    "Le subjonctif, reparte : au moment où tu vérifies, le départ n'a pas encore eu lieu. Même dans un récit au passé : il a vérifié avant que le patient reparte.",
    ['avant-que']),
  rule(2439, 'Deux sujets : avant que. Un seul sujet : avant de + infinitif.', 'Two subjects: avant que. One subject: avant de + infinitive.',
    '/dø sy.ʒɛ a.vɑ̃ kə œ̃ sœl sy.ʒɛ a.vɑ̃ də ɛ̃.fi.ni.tif/', 'deu sü-ZHEH | a-vahⁿ KUH | uhⁿ SUHL sü-ZHEH | a-vahⁿ DUH | ehⁿ-fee-nee-TEEF',
    '« Je relis avant que je signe » : que corriger ?',
    "Un seul sujet, je : je relis avant de signer. Avant que ne s'emploie à l'écrit soigné qu'avec un autre sujet : je relis avant que tu signes.",
    ['sujet']),
  sent(2440, 'Je relis toujours avant de signer.', 'I always reread before signing.',
    '/ʒə ʁə.li tu.ʒuʁ a.vɑ̃ də si.ɲe/', 'zhuh ruh-LEE too-ZHOOR | a-vahⁿ duh see-NYAY', ['sujet', 'avant-de'], FCVDR),
  sent(2441, 'Je relis toujours avant que tu signes.', 'I always reread before you sign.',
    '/ʒə ʁə.li tu.ʒuʁ a.vɑ̃ kə ty siɲ/', 'zhuh ruh-LEE too-ZHOOR | a-vahⁿ kuh tü SEENY', ['sujet', 'avant-que']),
  gap(2442, "Avant que je parte en stage, la pharmacienne m'a tout expliqué.", 'Before I left for my placement, the pharmacist explained everything to me.',
    '/a.vɑ̃ kə ʒə paʁ.tɑ̃ staʒ la faʁ.ma.sjɛn ma tu.tɛks.pli.ke/', 'a-vahⁿ kuh zhuh par-tahⁿ STAZH | la far-ma-SYENN | ma too-teks-plee-KAY',
    "Avant que je ___ en stage, la pharmacienne m'a tout expliqué. (partir · récit au passé)",
    "Même dans un récit au passé, avant que garde le subjonctif présent : parte. Deux sujets, je et la pharmacienne, donc avant que. EN: the present subjunctive, even in a past story.",
    ['avant-que', 'passe']),
  gap(2443, 'Lave-toi les mains avant de toucher les médicaments.', 'Wash your hands before touching the medicines.',
    '/lav.twa le mɛ̃ a.vɑ̃ də tu.ʃe le me.di.ka.mɑ̃/', 'lav-TWA lay MEHⁿ | a-vahⁿ duh too-SHAY | lay may-dee-ka-MAHⁿ',
    'Lave-toi les mains ___ toucher les médicaments. (un seul sujet)',
    "Un seul sujet, toi : avant de + infinitif. EN: one subject, avant de.",
    ['sujet', 'avant-de'], FCVDR),
  sent(2444, 'Il est parti avant que je puisse le remercier.', 'He left before I could thank him.',
    '/i.lɛ paʁ.ti a.vɑ̃ kə ʒə pɥis lə ʁə.mɛʁ.sje/', 'ee-leh par-TEE | a-vahⁿ kuh zhuh PWEESS | luh ruh-mehr-SYAY', ['avant-que', 'passe'], FCVDR),
  sent(2445, 'Avant la fermeture, on compte la caisse.', 'Before closing time, we count the till.',
    '/a.vɑ̃ la fɛʁ.mə.tyʁ ɔ̃ kɔ̃t la kɛs/', 'a-vahⁿ la fehr-muh-TÜR | ohⁿ KOHⁿT la KESS', ['avant', 'nom']),
  sent(2446, 'Réfléchis bien avant de répondre au patient.', 'Think carefully before answering the patient.',
    '/ʁe.fle.ʃi bjɛ̃ a.vɑ̃ də ʁe.pɔ̃dʁ o pa.sjɑ̃/', 'ray-flay-SHEE BYEHⁿ | a-vahⁿ duh ray-POHⁿDR oh pa-SYAHⁿ', ['avant-de']),
  sent(2447, 'Le médecin a rappelé avant que nous ayons fermé.', 'The doctor called back before we had closed.',
    '/lə med.sɛ̃ a ʁa.pə.le a.vɑ̃ kə nu.zɛ.jɔ̃ fɛʁ.me/', 'luh mayd-SEHⁿ a ra-puh-LAY | a-vahⁿ kuh noo-zeh-YOHⁿ fehr-MAY', ['avant-que', 'passe']),
];

/* ── ACT 4 · JUSQU'À CE QUE, EN ATTENDANT QUE, D'ICI QUE (.2450-.2465) ────── */

export const ACT4_ROWS: Row[] = [
  sent(2450, "Nous resterons ici jusqu'à ce que le train reparte.", 'We will stay here until the train leaves again.',
    '/nu ʁɛs.tə.ʁɔ̃ i.si ʒys.ka sə kə lə tʁɛ̃ ʁə.paʁt/', 'noo res-tuh-ROHⁿ ee-SEE | zhüs-ka suh kuh luh TREHⁿ ruh-PART', ['limite'], FCVDR),
  sent(2451, 'En attendant que le train reparte, allons prendre un café.', 'While we wait for the train to leave, let us go and have a coffee.',
    '/ɑ̃.na.tɑ̃.dɑ̃ kə lə tʁɛ̃ ʁə.paʁt a.lɔ̃ pʁɑ̃.dʁœ̃ ka.fe/', 'ahⁿ-na-tahⁿ-dahⁿ kuh luh TREHⁿ ruh-PART | a-lohⁿ prahⁿ-druhⁿ ka-FAY', ['limite', 'en-attendant'], FCVDR),
  sent(2452, "En attendant de connaître l'horaire, j'ai prévenu mon client.", 'While waiting to find out the timetable, I warned my client.',
    '/ɑ̃.na.tɑ̃.dɑ̃ də kɔ.nɛ.tʁə lɔ.ʁɛʁ ʒe pʁe.və.ny mɔ̃ kli.jɑ̃/', 'ahⁿ-na-tahⁿ-dahⁿ duh ko-neh-truh lo-REHR | zhay pray-vuh-NÜ mohⁿ klee-YAHⁿ', ['en-attendant', 'sujet']),
  sent(2453, "D'ici à ce que la ligne soit réparée, il faudra prendre le bus.", 'Until the line is repaired, we will have to take the bus.',
    '/di.si a sə kə la liɲ swa ʁe.pa.ʁe il fo.dʁa pʁɑ̃dʁ lə bys/', 'dee-see a suh kuh la LEENY | swa ray-pa-RAY | eel foh-DRA prahⁿdr luh BÜSS', ['limite', 'd-ici'], FCVR, SO),
  sent(2454, "D'ici qu'on nous rembourse, on aura le temps de vieillir.", 'By the time they refund us, we will have grown old.',
    '/di.si kɔ̃ nu ʁɑ̃.buʁs ɔ̃.no.ʁa lə tɑ̃ də vje.jiʁ/', 'dee-see kohⁿ noo rahⁿ-BOORS | ohⁿ-noh-RA luh TAHⁿ duh vyay-YEER', ['limite', 'd-ici']),
  sent(2455, "Le contrôleur a répété l'annonce jusqu'à ce que tout le monde descende.", 'The conductor repeated the announcement until everyone got off.',
    '/lə kɔ̃.tʁo.lœʁ a ʁe.pe.te la.nɔ̃s ʒys.ka sə kə tu lə mɔ̃d de.sɑ̃d/', 'luh kohⁿ-troh-LUHR a ray-pay-TAY la-NOHⁿS | zhüs-ka suh kuh too luh MOHⁿD day-SAHⁿD', ['limite', 'passe'], FCVDR),
  sent(2456, "Nous avons attendu jusqu'au moment où le train est enfin arrivé.", 'We waited until the moment the train finally arrived.',
    '/nu.za.vɔ̃.za.tɑ̃.dy ʒys.ko mɔ.mɑ̃ u lə tʁɛ̃ ɛ.tɑ̃.fɛ̃ a.ʁi.ve/', 'noo-za-vohⁿ-za-tahⁿ-DÜ | zhüs-koh mo-mahⁿ OO | luh TREHⁿ eh-tahⁿ-FEHⁿ a-ree-VAY', ['limite', 'indicatif']),
  rule(2457, "Jusqu'à ce que + subjonctif ; jusqu'au moment où + indicatif.", "Jusqu'à ce que + subjunctive; jusqu'au moment où + indicative.",
    '/ʒys.ka sə kə syb.ʒɔ̃k.tif ʒys.ko mɔ.mɑ̃ u ɛ̃.di.ka.tif/', 'zhüs-ka suh KUH | süb-zhohⁿk-TEEF | zhüs-koh mo-mahⁿ OO | ehⁿ-dee-ka-TEEF',
    "« Nous avons attendu jusqu'à ce que le train … » : quel mode, même au passé ?",
    "Le subjonctif, arrive : vue de l'attente, l'arrivée n'a pas encore eu lieu. Pour poser l'arrivée comme un fait daté, jusqu'au moment où + indicatif : jusqu'au moment où il est arrivé.",
    ['limite']),
  sent(2458, "Reste dans la salle d'attente tant que le train n'est pas annoncé.", 'Stay in the waiting room until the train is announced.',
    '/ʁɛst dɑ̃ la sal da.tɑ̃t tɑ̃ kə lə tʁɛ̃ nɛ pa.za.nɔ̃.se/', 'rest dahⁿ la SAL da-TAHⁿT | tahⁿ kuh luh TREHⁿ | neh pa-za-nohⁿ-SAY', ['tant-que', 'limite'], FCVDR),
  sent(2459, "Reste dans la salle d'attente jusqu'à ce que le train soit annoncé.", 'Stay in the waiting room until the train is announced.',
    '/ʁɛst dɑ̃ la sal da.tɑ̃t ʒys.ka sə kə lə tʁɛ̃ swa.ta.nɔ̃.se/', 'rest dahⁿ la SAL da-TAHⁿT | zhüs-ka suh kuh luh TREHⁿ | swa-ta-nohⁿ-SAY', ['limite', 'paire']),
  rule(2460, "Jusqu'à ce qu'il arrive dit la même chose que tant qu'il n'est pas arrivé.", "Jusqu'à ce qu'il arrive says the same as tant qu'il n'est pas arrivé.",
    '/ʒys.ka sə kil a.ʁiv di la mɛm ʃoz kə tɑ̃ kil nɛ pa.za.ʁi.ve/', 'zhüs-ka suh keel a-REEV | dee la mem SHOHZ | kuh tahⁿ keel neh pa-za-ree-VAY',
    "Réécris avec tant que : « Attends jusqu'à ce qu'il arrive. »",
    "Attends tant qu'il n'est pas arrivé : tant que + négation + indicatif. Sans négation, tant que veut dire aussi longtemps que : tant qu'il pleut, on reste.",
    ['tant-que', 'limite']),
  gap(2461, "Garde ton billet jusqu'à ce que tu sois remboursé.", 'Keep your ticket until you are refunded.',
    '/ɡaʁd tɔ̃ bi.jɛ ʒys.ka sə kə ty swa ʁɑ̃.buʁ.se/', 'gard tohⁿ bee-YEH | zhüs-ka suh kuh tü swa rahⁿ-boor-SAY',
    "Garde ton billet jusqu'à ce que tu ___ remboursé. (être)",
    "Jusqu'à ce que : le remboursement n'a pas encore eu lieu, subjonctif, sois. EN: until: subjunctive.",
    ['limite'], FCVDR),
  gap(2462, 'En attendant que les travaux soient finis, la compagnie propose des bus.', 'Until the works are finished, the company is providing buses.',
    '/ɑ̃.na.tɑ̃.dɑ̃ kə le tʁa.vo swa fi.ni la kɔ̃.pa.ɲi pʁɔ.poz de bys/', 'ahⁿ-na-tahⁿ-dahⁿ kuh lay tra-VOH | swa fee-NEE | la kohⁿ-pa-NYEE pro-POHZ day BÜSS',
    'En attendant que les travaux ___ finis, la compagnie propose des bus. (être)',
    "En attendant que : un fait attendu, pas encore là, subjonctif, soient. EN: until: subjunctive.",
    ['en-attendant']),
  sent(2463, "Il a patienté jusqu'à ce qu'on lui ait donné une réponse.", 'He waited patiently until he had been given an answer.',
    '/i.la pa.sjɑ̃.te ʒys.ka sə kɔ̃ lɥi ɛ dɔ.ne y.nə ʁe.pɔ̃s/', 'ee-la pa-syahⁿ-TAY | zhüs-ka suh kohⁿ lwee eh do-NAY | ü-nuh ray-POHⁿS', ['limite', 'passe']),
  sent(2464, "Tant qu'il y aura des grèves, je prendrai la voiture.", 'As long as there are strikes, I will take the car.',
    '/tɑ̃ kil i o.ʁa de ɡʁɛv ʒə pʁɑ̃.dʁe la vwa.tyʁ/', 'tahⁿ keel ee oh-RA day GREV | zhuh prahⁿ-DRAY la vwa-TÜR', ['tant-que', 'futur']),
  sent(2465, "Jusqu'à nouvel ordre, le guichet reste fermé.", 'Until further notice, the ticket office stays closed.',
    '/ʒys.ka nu.vɛ.lɔʁdʁ lə ɡi.ʃɛ ʁɛst fɛʁ.me/', 'zhüs-ka noo-veh-LORDR | luh gee-SHEH rest fehr-MAY', ['limite', 'nom']),
];

/* ── ACT 5 · LE NE EXPLÉTIF (.2468-.2483) ─────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(2468, 'Signons avant que le notaire ne parte.', 'Let us sign before the notary leaves.',
    '/si.ɲɔ̃ a.vɑ̃ kə lə nɔ.tɛʁ nə paʁt/', 'see-NYOHⁿ | a-vahⁿ kuh luh no-TEHR nuh PART', ['expletif', 'avant-que'], FCVDR, SO),
  sent(2469, 'Signons avant que le notaire parte.', 'Let us sign before the notary leaves.',
    '/si.ɲɔ̃ a.vɑ̃ kə lə nɔ.tɛʁ paʁt/', 'see-NYOHⁿ | a-vahⁿ kuh luh no-TEHR PART', ['expletif', 'paire']),
  sent(2470, "Je crains qu'il ne soit trop tard.", 'I am afraid it may be too late.',
    '/ʒə kʁɛ̃ kil nə swa tʁo taʁ/', 'zhuh KREHⁿ | keel nuh swa troh TAR', ['expletif', 'crainte'], FCVR, SO),
  sent(2471, "Je crains que l'orage n'éclate pendant la cérémonie.", 'I am afraid the storm will break during the ceremony.',
    '/ʒə kʁɛ̃ kə lɔ.ʁaʒ ne.klat pɑ̃.dɑ̃ la se.ʁe.mɔ.ni/', 'zhuh KREHⁿ | kuh lo-RAZH nay-KLAT | pahⁿ-dahⁿ la say-ray-mo-NEE', ['expletif', 'crainte'], FCVR, SO),
  sent(2472, 'Je crains que les témoins ne viennent pas.', 'I am afraid the witnesses will not come.',
    '/ʒə kʁɛ̃ kə le te.mwɛ̃ nə vjɛn pa/', 'zhuh KREHⁿ | kuh lay tay-MWEHⁿ | nuh VYENN PA', ['negation', 'crainte']),
  sent(2473, 'Le trajet a été plus long que je ne le pensais.', 'The journey was longer than I thought.',
    '/lə tʁa.ʒɛ a e.te ply lɔ̃ kə ʒə nə lə pɑ̃.sɛ/', 'luh tra-ZHEH a ay-TAY plü LOHⁿ | kuh zhuh nuh luh pahⁿ-SEH', ['expletif', 'comparaison'], FCVDR),
  sent(2474, "Évitons que la dispute ne s'envenime.", 'Let us keep the argument from turning sour.',
    '/e.vi.tɔ̃ kə la dis.pyt nə sɑ̃.və.nim/', 'ay-vee-TOHⁿ | kuh la dees-PÜT | nuh sahⁿ-vuh-NEEM', ['expletif', 'eviter'], FCVR, SO),
  sent(2475, "Partons tôt, avant qu'il ne fasse nuit.", 'Let us leave early, before it gets dark.',
    '/paʁ.tɔ̃ to a.vɑ̃ kil nə fas nɥi/', 'par-TOHⁿ TOH | a-vahⁿ keel nuh fass NWEE', ['expletif', 'avant-que'], FCVDR, SO),
  rule(2476, NE_EXPLETIF_RULE, NE_EXPLETIF_RULE_EN,
    '/lə nə ɛks.ple.tif nə ni ʁjɛ̃ il sə ɡlis sɑ̃.zɔ.bli.ɡa.sjɔ̃ la u lə fɛ na pa.zɑ̃.kɔʁ y ljø/',
    'luh nuh eks-play-TEEF | nuh nee RYEHⁿ | eel suh GLEESS | sahⁿ-zo-blee-ga-SYOHⁿ | la oo luh FEH | na pa-zahⁿ-KOR ü LYEU',
    '« Signons avant que le notaire ne parte. » Le notaire va-t-il partir ?',
    "Oui, bientôt. Le ne explétif ne nie rien : il marque un registre soutenu, et tu peux l'enlever sans changer le sens. Pour nier, il faut pas, plus ou jamais.",
    ['expletif']),
  rule(2477, 'Le ne explétif peut suivre avant que, à moins que, de peur que, craindre que, éviter que et un comparatif.', 'The expletive ne can follow avant que, à moins que, de peur que, craindre que, éviter que and a comparative.',
    '/lə nə ɛks.ple.tif pø sɥivʁ a.vɑ̃ kə a mwɛ̃ kə də pœʁ kə kʁɛ̃dʁ kə e.vi.te kə e œ̃ kɔ̃.pa.ʁa.tif/',
    'luh nuh eks-play-TEEF | peu SWEEVR | a-vahⁿ KUH | a mwehⁿ KUH | duh puhr KUH | krehⁿdr KUH | ay-vee-tay KUH | ay uhⁿ kohⁿ-pa-ra-TEEF',
    'Après quels mots peut-on trouver un ne explétif ?',
    "Avant que, à moins que, de peur que, de crainte que, craindre que, avoir peur que, éviter que, empêcher que, et après un comparatif : plus long que je ne le pensais. Jamais après sans que, après que ou jusqu'à ce que à l'écrit soigné.",
    ['expletif']),
  rule(2478, "Sans que ne prend pas de ne explétif à l'écrit soigné.", 'Sans que takes no expletive ne in careful writing.',
    '/sɑ̃ kə nə pʁɑ̃ pa də nə ɛks.ple.tif a le.kʁi swa.ɲe/', 'sahⁿ kuh nuh prahⁿ PA | duh nuh eks-play-TEEF | a lay-KREE swa-NYAY',
    "« Elle est entrée sans qu'on ne l'entende » : que corriger à l'écrit ?",
    "Enlève le ne : elle est entrée sans qu'on l'entende. Sans que dit déjà « pas » ; le ne s'entend souvent à l'oral, mais l'écrit soigné l'évite.",
    ['expletif', 'oral']),
  sent(2479, "Elle est entrée sans qu'on l'entende.", 'She came in without anyone hearing her.',
    '/ɛ.lɛ.tɑ̃.tʁe sɑ̃ kɔ̃ lɑ̃.tɑ̃d/', 'eh-leh-tahⁿ-TRAY | sahⁿ kohⁿ lahⁿ-TAHⁿD', ['expletif', 'sans-que'], FCVDR),
  gap(2480, "Réglons ce point avant qu'il ne soit trop tard.", 'Let us settle this point before it is too late.',
    '/ʁe.ɡlɔ̃ sə pwɛ̃ a.vɑ̃ kil nə swa tʁo taʁ/', 'ray-GLOHⁿ suh PWEHⁿ | a-vahⁿ keel nuh swa troh TAR',
    "Réglons ce point avant qu'il ___ trop tard. (être · soutenu, avec ne)",
    "Avant que + subjonctif, ici avec le ne explétif : ne soit. Sans ne, c'est aussi juste : avant qu'il soit trop tard. EN: the ne is optional.",
    ['expletif'], FCVR, SO),
  sent(2481, "Le notaire est arrivé plus tôt que nous ne l'attendions.", 'The notary arrived earlier than we expected.',
    '/lə nɔ.tɛʁ ɛ.ta.ʁi.ve ply to kə nu nə la.tɑ̃.djɔ̃/', 'luh no-TEHR eh-ta-ree-VAY | plü TOH | kuh noo nuh la-tahⁿ-DYOHⁿ', ['expletif', 'comparaison'], FCVR, SO),
  sent(2482, "Avant que l'acte ne soit signé, relisez chaque page.", 'Before the deed is signed, reread every page.',
    '/a.vɑ̃ kə lakt nə swa si.ɲe ʁə.li.ze ʃak paʒ/', 'a-vahⁿ kuh LAKT | nuh swa see-NYAY | ruh-lee-ZAY shak PAZH', ['expletif', 'avant-que'], FCVR, SO),
  sent(2483, 'Elle a peur que son frère ne se fâche.', 'She is afraid her brother will get angry.',
    '/ɛl a pœʁ kə sɔ̃ fʁɛʁ nə sə faʃ/', 'el a PUHR | kuh sohⁿ FREHR nuh suh FASH', ['expletif', 'crainte']),
];

/* ── ACT 6 · QUAND, LORSQUE, PENDANT QUE, AU MOMENT OÙ (.2486-.2501) ──────── */

export const ACT6_ROWS: Row[] = [
  sent(2486, 'Au moment où le feu est passé au vert, une voiture a démarré.', 'At the moment the light turned green, a car pulled away.',
    '/o mɔ.mɑ̃ u lə fø ɛ pa.se o vɛʁ y.nə vwa.tyʁ a de.ma.ʁe/', 'oh mo-mahⁿ OO luh FEU | eh pa-say oh VEHR | ü-nuh vwa-TÜR a day-ma-RAY', ['simultane', 'moment'], FCVDR),
  sent(2487, 'Pendant que le cycliste traversait, la voiture a tourné à droite.', 'While the cyclist was crossing, the car turned right.',
    '/pɑ̃.dɑ̃ kə lə si.klist tʁa.vɛʁ.sɛ la vwa.tyʁ a tuʁ.ne a dʁwat/', 'pahⁿ-dahⁿ kuh luh see-KLEEST tra-vehr-SEH | la vwa-TÜR a toor-NAY a DRWAT', ['simultane', 'pendant'], FCVDR),
  sent(2488, 'Lorsque la police est arrivée, le cycliste était assis sur le trottoir.', 'When the police arrived, the cyclist was sitting on the pavement.',
    '/lɔʁs.kə la pɔ.lis ɛ.ta.ʁi.ve lə si.klist e.tɛ.ta.si syʁ lə tʁɔ.twaʁ/', 'lors-kuh la po-LEESS | eh-ta-ree-VAY | luh see-KLEEST | ay-teh-ta-SEE sür luh tro-TWAR', ['simultane', 'lorsque']),
  sent(2489, "Comme je sortais de la boulangerie, j'ai entendu un choc.", 'Just as I was coming out of the bakery, I heard a crash.',
    '/kɔm ʒə sɔʁ.tɛ də la bu.lɑ̃ʒ.ʁi ʒe ɑ̃.tɑ̃.dy œ̃ ʃɔk/', 'kom zhuh sor-TEH | duh la boo-lahⁿzh-REE | zhay ahⁿ-tahⁿ-DÜ uhⁿ SHOK', ['simultane', 'comme'], FCVDR),
  sent(2490, "Quand j'ai tourné la tête, le vélo était déjà par terre.", 'When I turned my head, the bike was already on the ground.',
    '/kɑ̃ ʒe tuʁ.ne la tɛt lə ve.lo e.tɛ de.ʒa paʁ tɛʁ/', 'kahⁿ zhay toor-NAY la TET | luh vay-LOH ay-teh day-ZHA par TEHR', ['simultane', 'quand']),
  sent(2491, 'Le conducteur téléphonait en conduisant.', 'The driver was on the phone while driving.',
    '/lə kɔ̃.dyk.tœʁ te.le.fɔ.nɛ ɑ̃ kɔ̃.dɥi.zɑ̃/', 'luh kohⁿ-dük-TUHR tay-lay-fo-NEH | ahⁿ kohⁿ-dwee-ZAHⁿ', ['simultane', 'gerondif']),
  rule(2492, "Pendant que : une durée. Au moment où : un instant. Lorsque : le quand de l'écrit.", 'Pendant que: a stretch of time. Au moment où: an instant. Lorsque: the written quand.',
    '/pɑ̃.dɑ̃ kə y.nə dy.ʁe o mɔ.mɑ̃ u œ̃.nɛ̃s.tɑ̃ lɔʁs.kə lə kɑ̃ də le.kʁi/', 'pahⁿ-dahⁿ KUH | ü-nuh dü-RAY | oh mo-mahⁿ OO | uhⁿ-nehⁿs-TAHⁿ | LORS-kuh | luh KAHⁿ duh lay-KREE',
    '« … le feu est passé au vert, une voiture a démarré » : pendant que ou au moment où ?',
    "Au moment où : le passage au vert est un instant. Pendant que demande une action qui dure : pendant que le cycliste traversait.",
    ['simultane']),
  rule(2493, "Comme + imparfait dit un moment ou une raison : c'est le sens qui tranche.", 'Comme + imparfait gives a moment or a reason: the meaning decides.',
    '/kɔm ɛ̃.paʁ.fɛ di œ̃ mɔ.mɑ̃ u y.nə ʁɛ.zɔ̃ sɛ lə sɑ̃s ki tʁɑ̃ʃ/', 'KOM | ehⁿ-par-FEH | dee uhⁿ mo-MAHⁿ | oo ü-nuh reh-ZOHⁿ | seh luh SAHⁿS kee TRAHⁿSH',
    '« Comme je sortais, j’ai entendu un choc » : un moment ou une raison ?',
    "Un moment : le choc tombe pendant que je sors, juste au moment où je sortais. « Comme nous étions en avance, nous avons visité le musée » donne une raison, puisque (la leçon 31 du B1). La forme est la même : c'est le sens qui tranche. Le comme de temps est surtout écrit.",
    ['simultane', 'comme']),
  sent(2494, "Lorsqu'il a vu le cycliste, le conducteur a freiné.", 'When he saw the cyclist, the driver braked.',
    '/lɔʁs.kil a vy lə si.klist lə kɔ̃.dyk.tœʁ a fʁe.ne/', 'lors-keel a VÜ luh see-KLEEST | luh kohⁿ-dük-TUHR a fray-NAY', ['simultane', 'lorsque']),
  sent(2495, "Au moment où j'allais appeler les secours, un passant l'a fait.", 'Just as I was about to call the emergency services, a passer-by did it.',
    '/o mɔ.mɑ̃ u ʒa.lɛ a.pə.le le sə.kuʁ œ̃ pa.sɑ̃ la fɛ/', 'oh mo-mahⁿ OO zha-LEH a-puh-LAY lay suh-KOOR | uhⁿ pa-SAHⁿ la FEH', ['simultane', 'moment']),
  sent(2496, "Pendant que l'agent prenait ma déposition, l'ambulance est repartie.", 'While the officer was taking my statement, the ambulance left again.',
    '/pɑ̃.dɑ̃ kə la.ʒɑ̃ pʁə.nɛ ma de.po.zi.sjɔ̃ lɑ̃.by.lɑ̃s ɛ ʁə.paʁ.ti/', 'pahⁿ-dahⁿ kuh la-ZHAHⁿ pruh-NEH | ma day-po-zee-SYOHⁿ | lahⁿ-bü-LAHⁿS eh ruh-par-TEE', ['simultane', 'pendant'], FCVDR),
  gap(2497, "Lorsque le cycliste est tombé, j'étais au coin de la rue.", 'When the cyclist fell, I was on the street corner.',
    '/lɔʁs.kə lə si.klist ɛ tɔ̃.be ʒe.tɛ o kwɛ̃ də la ʁy/', 'lors-kuh luh see-KLEEST eh tohⁿ-BAY | zhay-TEH oh KWEHⁿ duh la RÜ',
    "Lorsque le cycliste est tombé, j'___ au coin de la rue. (être · la situation autour)",
    "La situation autour de l'instant : imparfait, étais. Lorsque prend l'indicatif, comme quand. EN: the setting: imparfait.",
    ['simultane', 'lorsque']),
  gap(2498, "Au moment où le camion reculait, l'enfant a traversé.", 'Just as the lorry was reversing, the child crossed.',
    '/o mɔ.mɑ̃ u lə ka.mjɔ̃ ʁə.ky.lɛ lɑ̃.fɑ̃ a tʁa.vɛʁ.se/', 'oh mo-mahⁿ OO luh ka-MYOHⁿ ruh-kü-LEH | lahⁿ-FAHⁿ a tra-vehr-SAY',
    "Au moment où le camion ___, l'enfant a traversé. (reculer · une action en cours)",
    "Une action en cours à cet instant : imparfait, reculait. Au moment où prend l'indicatif. EN: an action in progress: imparfait.",
    ['simultane', 'moment']),
  sent(2499, "Quand le feu est rouge, les vélos s'arrêtent aussi.", 'When the light is red, bikes stop too.',
    '/kɑ̃ lə fø ɛ ʁuʒ le ve.lo sa.ʁɛt o.si/', 'kahⁿ luh FEU eh ROOZH | lay vay-LOH sa-RET oh-SEE', ['simultane', 'quand']),
  sent(2500, "Comme nous arrivions au carrefour, l'accident s'est produit sous nos yeux.", 'Just as we were reaching the crossroads, the accident happened before our eyes.',
    '/kɔm nu.za.ʁi.vjɔ̃ o kaʁ.fuʁ lak.si.dɑ̃ sɛ pʁɔ.dɥi su no.zjø/', 'kom noo-za-ree-VYOHⁿ oh kar-FOOR | lak-see-DAHⁿ seh pro-DWEE | soo noh-ZYEU', ['simultane', 'comme']),
  sent(2501, 'Lorsque vous signerez la déposition, relisez-la attentivement.', 'When you sign the statement, read it through carefully.',
    '/lɔʁs.kə vu si.ɲə.ʁe la de.po.zi.sjɔ̃ ʁə.li.ze.la a.tɑ̃.tiv.mɑ̃/', 'lors-kuh voo see-nyuh-RAY | la day-po-zee-SYOHⁿ | ruh-lee-ZAY-la a-tahⁿ-teev-MAHⁿ', ['simultane', 'futur']),
];

/* ── ACT 7 · À MESURE QUE, CHAQUE FOIS QUE, TANT QUE, DEPUIS QUE (.2504-.2519) */

export const ACT7_ROWS: Row[] = [
  sent(2504, 'À mesure que les clients arrivaient, nous augmentions la production.', 'As the customers came in, we stepped up production.',
    '/a mə.zyʁ kə le kli.jɑ̃ a.ʁi.vɛ nu.zo.ɡmɑ̃.tjɔ̃ la pʁɔ.dyk.sjɔ̃/', 'a muh-zür kuh lay klee-YAHⁿ a-ree-VEH | noo-zohg-mahⁿ-TYOHⁿ | la pro-dük-SYOHⁿ', ['duree', 'mesure'], FCVDR),
  sent(2505, "Au fur et à mesure que la boutique grandissait, l'équipe changeait.", 'As the shop grew, the team changed.',
    '/o fy.ʁe.a mə.zyʁ kə la bu.tik ɡʁɑ̃.di.sɛ le.kip ʃɑ̃.ʒɛ/', 'oh fü-ray-a muh-ZÜR | kuh la boo-TEEK grahⁿ-dee-SEH | lay-KEEP shahⁿ-ZHEH', ['duree', 'mesure']),
  sent(2506, "Chaque fois qu'un client revient, je reconnais son visage.", 'Every time a customer comes back, I recognise their face.',
    '/ʃak fwa kœ̃ kli.jɑ̃ ʁə.vjɛ̃ ʒə ʁə.kɔ.nɛ sɔ̃ vi.zaʒ/', 'shak FWA kuhⁿ klee-YAHⁿ ruh-VYEHⁿ | zhuh ruh-ko-NEH sohⁿ vee-ZAZH', ['duree', 'chaque-fois'], FCVDR),
  sent(2507, 'Toutes les fois que je rentrais à Dakar, ma mère me faisait goûter son pain.', 'Every time I went back to Dakar, my mother had me taste her bread.',
    '/tut le fwa kə ʒə ʁɑ̃.tʁɛ a da.kaʁ ma mɛʁ mə fə.zɛ ɡu.te sɔ̃ pɛ̃/', 'toot lay FWA kuh zhuh rahⁿ-TREH a da-KAR | ma MEHR muh fuh-ZEH goo-TAY sohⁿ PEHⁿ', ['duree', 'chaque-fois'], FCVR, SO),
  sent(2508, "Tant que j'aurai de la farine, j'ouvrirai le matin.", 'As long as I have flour, I will open in the mornings.',
    '/tɑ̃ kə ʒo.ʁe də la fa.ʁin ʒu.vʁi.ʁe lə ma.tɛ̃/', 'tahⁿ kuh zhoh-RAY duh la fa-REEN | zhoo-vree-RAY luh ma-TEHⁿ', ['tant-que', 'futur'], FCVDR),
  sent(2509, "Depuis que j'ai ouvert la boulangerie, je me lève à quatre heures.", 'Since I opened the bakery, I have been getting up at four.',
    '/də.pɥi kə ʒe u.vɛʁ la bu.lɑ̃ʒ.ʁi ʒə mə lɛv a ka.tʁœʁ/', 'duh-pwee kuh zhay oo-VEHR la boo-lahⁿzh-REE | zhuh muh LEV a ka-TRUHR', ['depuis'], FCVDR),
  sent(2510, 'Maintenant que mon fils travaille avec moi, je dors un peu plus.', 'Now that my son works with me, I sleep a little more.',
    '/mɛ̃t.nɑ̃ kə mɔ̃ fis tʁa.vaj a.vɛk mwa ʒə dɔʁ œ̃ pø plys/', 'mehⁿt-nahⁿ kuh mohⁿ FEESS | tra-VAHY a-vek MWA | zhuh dor uhⁿ peu PLÜSS', ['maintenant']),
  rule(2511, 'À mesure que : deux faits qui avancent ensemble. Chaque fois que : un fait qui se répète.', 'À mesure que: two facts moving forward together. Chaque fois que: a fact that repeats.',
    '/a mə.zyʁ kə dø fɛ ki a.vɑ̃s.tɑ̃.sɑ̃bl ʃak fwa kə œ̃ fɛ ki sə ʁe.pɛt/', 'a muh-zür KUH | deu FEH kee a-vahⁿs-tahⁿ-SAHⁿBL | shak fwa KUH | uhⁿ FEH kee suh ray-PET',
    '« … les clients arrivaient, nous augmentions la production » : à mesure que ou chaque fois que ?',
    "À mesure que : plus il y avait de clients, plus on produisait ; les deux faits progressent ensemble. Chaque fois que dit une répétition : à chaque retour, la même chose.",
    ['mesure', 'chaque-fois']),
  rule(2512, 'Depuis que : un point de départ. Maintenant que : une situation nouvelle, souvent une raison.', 'Depuis que: a starting point. Maintenant que: a new situation, often a reason.',
    '/də.pɥi kə œ̃ pwɛ̃ də de.paʁ mɛ̃t.nɑ̃ kə y.nə si.tɥa.sjɔ̃ nu.vɛl su.vɑ̃ y.nə ʁɛ.zɔ̃/', 'duh-pwee KUH | uhⁿ PWEHⁿ duh day-PAR | mehⁿt-nahⁿ KUH | ü-nuh see-twa-SYOHⁿ noo-VELL | soo-VAHⁿ ü-nuh reh-ZOHⁿ',
    "« Maintenant que mon fils travaille avec moi » : qu'ajoute maintenant que ?",
    "Une situation nouvelle qui explique la suite : maintenant que dit à la fois le temps et la raison. Depuis que date seulement le début.",
    ['depuis', 'maintenant']),
  sent(2513, "Depuis qu'elle est à la retraite, ma mère voyage beaucoup.", 'Since she retired, my mother has been travelling a lot.',
    '/də.pɥi kɛ.lɛ.ta la ʁə.tʁɛt ma mɛʁ vwa.jaʒ bo.ku/', 'duh-pwee keh-leh-ta la ruh-TRET | ma MEHR vwa-YAZH boh-KOO', ['depuis']),
  sent(2514, "Tant qu'il y a du monde, la boutique reste ouverte.", 'As long as there are people, the shop stays open.',
    '/tɑ̃ kil i a dy mɔ̃d la bu.tik ʁɛs.tu.vɛʁt/', 'tahⁿ keel ee a dü MOHⁿD | la boo-TEEK res-too-VEHRT', ['tant-que']),
  gap(2515, 'Chaque fois que le four est en panne, nous perdons une matinée.', 'Every time the oven breaks down, we lose a morning.',
    '/ʃak fwa kə lə fuʁ ɛ.tɑ̃ pan nu pɛʁ.dɔ̃ y.nə ma.ti.ne/', 'shak FWA kuh luh FOOR | eh-tahⁿ PANN | noo pehr-DOHⁿ ü-nuh ma-tee-NAY',
    'Chaque fois que le four ___ en panne, nous perdons une matinée. (être · une habitude)',
    "Un fait qui se répète, réel à chaque fois : indicatif présent, est. EN: repetition: indicative.",
    ['chaque-fois']),
  gap(2516, 'Tant que tu ne seras pas prêt, nous ne partirons pas.', 'Until you are ready, we will not leave.',
    '/tɑ̃ kə ty nə sə.ʁa pa pʁɛ nu nə paʁ.ti.ʁɔ̃ pa/', 'tahⁿ kuh tü nuh suh-ra pa PREH | noo nuh par-tee-rohⁿ PA',
    'Tant que tu ne ___ pas prêt, nous ne partirons pas. (être · au futur)',
    "Tant que + négation dit jusqu'à ce que. Et c'est l'avenir : le futur, seras. EN: the future after tant que.",
    ['tant-que', 'futur'], FCVDR),
  sent(2517, "À mesure que je vieillis, j'aime davantage le calme.", 'As I get older, I like peace and quiet more and more.',
    '/a mə.zyʁ kə ʒə vje.ji ʒɛm da.vɑ̃.taʒ lə kalm/', 'a muh-zür kuh zhuh vyay-YEE | zhem da-vahⁿ-TAZH luh KALM', ['mesure']),
  sent(2518, 'Depuis que le quartier a changé, les clients sont plus nombreux.', 'Since the neighbourhood changed, there have been more customers.',
    '/də.pɥi kə lə kaʁ.tje a ʃɑ̃.ʒe le kli.jɑ̃ sɔ̃ ply nɔ̃.bʁø/', 'duh-pwee kuh luh kar-TYAY a shahⁿ-ZHAY | lay klee-YAHⁿ sohⁿ plü nohⁿ-BREU', ['depuis']),
  sent(2519, 'Maintenant que la boutique est connue, les gâteaux se réservent la veille.', 'Now that the shop is well known, cakes are booked the day before.',
    '/mɛ̃t.nɑ̃ kə la bu.tik ɛ kɔ.ny le ɡa.to sə ʁe.zɛʁv la vɛj/', 'mehⁿt-nahⁿ kuh la boo-TEEK eh ko-NÜ | lay ga-TOH suh ray-ZEHRV la VEY', ['maintenant']),
];

/* ── ACT 8 · ALORS QUE, TANDIS QUE : LE TEMPS OU L'OPPOSITION (.2522-.2535) ── */

export const ACT8_ROWS: Row[] = [
  sent(2522, "Alors qu'il traversait la place, il a reçu un appel de sa sœur.", 'As he was crossing the square, he got a call from his sister.',
    '/a.lɔʁ kil tʁa.vɛʁ.sɛ la plas i.la ʁə.sy œ̃.na.pɛl də sa sœʁ/', 'a-lor keel tra-vehr-SEH la PLASS | ee-la ruh-SÜ uhⁿ-na-PEL | duh sa SUHR', ['alors-que', 'temps'], FCVDR),
  sent(2523, 'Tandis que les pompiers déroulaient les tuyaux, la foule reculait.', 'While the firefighters were unrolling the hoses, the crowd moved back.',
    '/tɑ̃.di kə le pɔ̃.pje de.ʁu.lɛ le tɥi.jo la ful ʁə.ky.lɛ/', 'tahⁿ-dee kuh lay pohⁿ-PYAY day-roo-LEH lay twee-YOH | la FOOL ruh-kü-LEH', ['tandis-que', 'temps']),
  sent(2524, "Mon colocataire adore le bruit, alors que moi, j'ai besoin de calme.", 'My flatmate loves noise, whereas I need quiet.',
    '/mɔ̃ kɔ.lɔ.ka.ta.tɛʁ a.dɔʁ lə bʁɥi a.lɔʁ kə mwa ʒe bə.zwɛ̃ də kalm/', 'mohⁿ ko-lo-ka-ta-TEHR a-DOR luh BRWEE | a-lor kuh MWA | zhay buh-ZWEHⁿ duh KALM', ['alors-que', 'opposition']),
  sent(2525, 'Tandis que Lyon se réveillait, les boulangers avaient déjà fini leur première fournée.', 'While Lyon was waking up, the bakers had already finished their first batch.',
    '/tɑ̃.di kə ljɔ̃ sə ʁe.vɛ.jɛ le bu.lɑ̃.ʒe a.vɛ de.ʒa fi.ni lœʁ pʁə.mjɛʁ fuʁ.ne/', 'tahⁿ-dee kuh LYOHⁿ suh ray-veh-YEH | lay boo-lahⁿ-ZHAY a-veh day-ZHA fee-NEE | luhr pruh-myehr foor-NAY', ['tandis-que', 'temps']),
  sent(2526, 'Le premier étage était inondé, tandis que le deuxième était resté sec.', 'The first floor was flooded, whereas the second had stayed dry.',
    '/lə pʁə.mje.ʁe.taʒ e.tɛ.ti.nɔ̃.de tɑ̃.di kə lə dø.zjɛm e.tɛ ʁɛs.te sɛk/', 'luh pruh-myay-ray-TAZH | ay-teh-tee-nohⁿ-DAY | tahⁿ-dee kuh luh deu-ZYEM | ay-teh res-tay SEK', ['tandis-que', 'opposition']),
  rule(2527, "Alors que, tandis que : si pendant que convient, c'est le temps ; si en revanche convient, c'est l'opposition.", 'Alors que, tandis que: if pendant que fits, it is time; if en revanche fits, it is opposition.',
    '/a.lɔʁ kə tɑ̃.di kə si pɑ̃.dɑ̃ kə kɔ̃.vjɛ̃ sɛ lə tɑ̃ si ɑ̃ ʁə.vɑ̃ʃ kɔ̃.vjɛ̃ sɛ lɔ.pɔ.zi.sjɔ̃/', 'a-lor KUH | tahⁿ-dee KUH | see pahⁿ-dahⁿ kuh kohⁿ-VYEHⁿ | seh luh TAHⁿ | see ahⁿ ruh-VAHⁿSH kohⁿ-VYEHⁿ | seh lo-po-zee-SYOHⁿ',
    "« Alors qu'il traversait la place, il a reçu un appel » : le temps ou l'opposition ?",
    "Le temps : pendant qu'il traversait. Les deux faits ne s'opposent pas, ils se croisent. Dans les deux sens, l'indicatif.",
    ['alors-que']),
  sent(2528, "Il a quitté la réunion alors qu'elle n'était pas finie.", 'He left the meeting even though it was not over.',
    '/i.la ki.te la ʁe.y.njɔ̃ a.lɔʁ kɛl ne.tɛ pa fi.ni/', 'ee-la kee-TAY la ray-ü-NYOHⁿ | a-lor kel nay-teh pa fee-NEE', ['alors-que', 'concession']),
  sent(2529, "Alors que je rentrais du travail, j'ai vu de la fumée au-dessus des toits.", 'As I was coming home from work, I saw smoke above the roofs.',
    '/a.lɔʁ kə ʒə ʁɑ̃.tʁɛ dy tʁa.vaj ʒe vy də la fy.me o.də.sy de twa/', 'a-lor kuh zhuh rahⁿ-TREH dü tra-VAHY | zhay VÜ duh la fü-MAY | oh-duh-SÜ day TWA', ['alors-que', 'temps'], FCVDR),
  sent(2530, 'Les étudiants veulent une salle de concert, alors que les retraités préfèrent un marché.', 'The students want a concert hall, whereas the retired people would rather have a market.',
    '/le.ze.ty.djɑ̃ vœl y.nə sal də kɔ̃.sɛʁ a.lɔʁ kə le ʁə.tʁɛ.te pʁe.fɛʁ œ̃ maʁ.ʃe/', 'lay-zay-tü-DYAHⁿ vuhl ü-nuh SAL duh kohⁿ-SEHR | a-lor kuh lay ruh-treh-TAY | pray-FEHR uhⁿ mar-SHAY', ['alors-que', 'opposition']),
  gap(2531, 'Tandis que je cuisinais, mon colocataire faisait la vaisselle.', 'While I was cooking, my flatmate was doing the washing-up.',
    '/tɑ̃.di kə ʒə kɥi.zi.nɛ mɔ̃ kɔ.lɔ.ka.ta.tɛʁ fə.zɛ la vɛ.sɛl/', 'tahⁿ-dee kuh zhuh kwee-zee-NEH | mohⁿ ko-lo-ka-ta-TEHR | fuh-ZEH la veh-SELL',
    '___ je cuisinais, mon colocataire faisait la vaisselle. (deux actions au même moment, à l\'écrit)',
    "Tandis que, au sens de pendant que : le temps, à l'imparfait. Alors que irait aussi. EN: tandis que in its time sense.",
    ['tandis-que', 'temps']),
  rule(2532, "Au sens du temps, alors que est suivi d'une action en cours : l'imparfait.", 'In its time sense, alors que is followed by an action in progress: the imparfait.',
    '/o sɑ̃s dy tɑ̃ a.lɔʁ kə ɛ sɥi.vi dy.na.ksjɔ̃ ɑ̃ kuʁ lɛ̃.paʁ.fɛ/', 'oh SAHⁿS dü TAHⁿ | a-lor KUH | eh swee-VEE dü-nak-SYOHⁿ ahⁿ KOOR | lehⁿ-par-FEH',
    "« Alors qu'il ___ la place, il a reçu un appel. » (traverser)",
    "Traversait : une action en cours, croisée par l'appel. Dans un récit au présent, le présent suffit : alors que tu es au téléphone, je sors. Avec deux faits simplement comparés, alors que dirait une opposition.",
    ['alors-que', 'temps']),
  sent(2533, 'Tandis que tu es au téléphone, je vais chercher le courrier.', 'While you are on the phone, I will go and get the post.',
    '/tɑ̃.di kə ty ɛ o te.le.fɔn ʒə vɛ ʃɛʁ.ʃe lə ku.ʁje/', 'tahⁿ-dee kuh tü EH oh tay-lay-FONN | zhuh veh shehr-SHAY luh koo-RYAY', ['tandis-que', 'temps']),
  sent(2534, "Alors que tout le monde dormait, l'alarme s'est déclenchée.", 'While everyone was asleep, the alarm went off.',
    '/a.lɔʁ kə tu lə mɔ̃d dɔʁ.mɛ la.laʁm sɛ de.klɑ̃.ʃe/', 'a-lor kuh too luh MOHⁿD dor-MEH | la-LARM seh day-klahⁿ-SHAY', ['alors-que', 'temps'], FCVDR),
  sent(2535, 'Ma sœur travaille de nuit, tandis que moi, je travaille de jour.', 'My sister works nights, whereas I work days.',
    '/ma sœʁ tʁa.vaj də nɥi tɑ̃.di kə mwa ʒə tʁa.vaj də ʒuʁ/', 'ma SUHR tra-VAHY duh NWEE | tahⁿ-dee kuh MWA | zhuh tra-VAHY duh ZHOOR', ['tandis-que', 'opposition']),
];

/* ── ACT 9 · QUAND TU ARRIVERAS : LE FUTUR APRÈS LE MOT DE TEMPS (.2538-.2553) */

export const ACT9_ROWS: Row[] = [
  sent(2538, 'Quand tu arriveras, la clé sera sous le pot de fleurs.', 'When you arrive, the key will be under the flowerpot.',
    '/kɑ̃ ty a.ʁi.və.ʁa la kle sə.ʁa su lə po də flœʁ/', 'kahⁿ tü a-ree-vuh-RA | la KLAY suh-RA | soo luh POH duh FLUHR', ['futur', 'quand'], FCVDR),
  sent(2539, 'Pendant que je serai à Lisbonne, tu pourras utiliser mon vélo.', 'While I am in Lisbon, you can use my bike.',
    '/pɑ̃.dɑ̃ kə ʒə sə.ʁe a lis.bɔn ty pu.ʁa y.ti.li.ze mɔ̃ ve.lo/', 'pahⁿ-dahⁿ kuh zhuh suh-RAY a lees-BONN | tü poo-RA ü-tee-lee-ZAY mohⁿ vay-LOH', ['futur', 'pendant'], FCVDR),
  sent(2540, "Tant qu'il fera chaud, arrose les tomates tous les soirs.", 'As long as it is hot, water the tomatoes every evening.',
    '/tɑ̃ kil fə.ʁa ʃo a.ʁoz le tɔ.mat tu le swaʁ/', 'tahⁿ keel fuh-ra SHOH | a-ROHZ lay to-MAT | too lay SWAR', ['futur', 'tant-que']),
  sent(2541, 'Chaque fois que tu sortiras, ferme bien la porte du jardin.', 'Every time you go out, shut the garden gate properly.',
    '/ʃak fwa kə ty sɔʁ.ti.ʁa fɛʁm bjɛ̃ la pɔʁt dy ʒaʁ.dɛ̃/', 'shak FWA kuh tü sor-tee-RA | fehrm BYEHⁿ la PORT dü zhar-DEHⁿ', ['futur', 'chaque-fois']),
  sent(2542, 'Lorsque le plombier viendra, montre-lui la salle de bains.', 'When the plumber comes, show him the bathroom.',
    '/lɔʁs.kə lə plɔ̃.bje vjɛ̃.dʁa mɔ̃.tʁə.lɥi la sal də bɛ̃/', 'lors-kuh luh plohⁿ-BYAY vyehⁿ-DRA | mohⁿ-truh-LWEE la sal duh BEHⁿ', ['futur', 'lorsque']),
  sent(2543, 'Au moment où tu partiras, pense à éteindre le chauffe-eau.', 'When you leave, remember to switch off the water heater.',
    '/o mɔ.mɑ̃ u ty paʁ.ti.ʁa pɑ̃s a e.tɛ̃dʁ lə ʃof.o/', 'oh mo-mahⁿ OO tü par-tee-RA | pahⁿs a ay-TEHⁿDR | luh shohf-OH', ['futur', 'moment']),
  rule(2544, "Quand, lorsque, pendant que, tant que, dès que : l'avenir se dit au futur, pas au présent comme en anglais.", 'Quand, lorsque, pendant que, tant que, dès que: the future is said in the future, not in the present as in English.',
    '/kɑ̃ lɔʁs.kə pɑ̃.dɑ̃ kə tɑ̃ kə dɛ kə la.və.niʁ sə di o fy.tyʁ pa.zo pʁe.zɑ̃ kɔ.mɑ̃.nɑ̃.ɡlɛ/', 'KAHⁿ | LORS-kuh | pahⁿ-dahⁿ KUH | tahⁿ KUH | deh KUH | la-vuh-NEER suh dee oh fü-TÜR | pa-zoh pray-ZAHⁿ | ko-mahⁿ-nahⁿ-GLEH',
    '« When you arrive, call me » : quand tu arrives ou quand tu arriveras ?',
    "Quand tu arriveras, appelle-moi. L'arrivée est dans l'avenir : le futur, du côté du mot de temps aussi. Seul si garde le présent : si tu arrives tôt, appelle-moi.",
    ['futur']),
  rule(2545, "Dans un récit au passé, ce futur devient un conditionnel : il a dit qu'il appellerait quand il arriverait.", 'In a past narrative, that future becomes a conditional: he said he would call when he arrived.',
    '/dɑ̃.zœ̃ ʁe.si o pa.se sə fy.tyʁ də.vjɛ̃.tœ̃ kɔ̃.di.sjɔ.nɛl i.la di kil a.pɛ.lə.ʁɛ kɑ̃.til a.ʁi.və.ʁɛ/', 'dahⁿ-zuhⁿ ray-SEE oh pa-SAY | suh fü-TÜR duh-vyehⁿ-tuhⁿ kohⁿ-dee-syo-NELL | ee-la DEE | keel a-pel-uh-REH | kahⁿ-teel a-ree-vuh-REH',
    "« Il a promis : je t'appellerai quand j'arriverai. » Au discours indirect ?",
    "Il a promis qu'il m'appellerait quand il arriverait. Le futur vu du passé, c'est le conditionnel, et il passe aussi après quand.",
    ['futur', 'recit']),
  sent(2546, "Julien a promis qu'il appellerait quand il arriverait à Lisbonne.", 'Julien promised he would call when he got to Lisbon.',
    '/ʒy.ljɛ̃ a pʁɔ.mi kil a.pɛ.lə.ʁɛ kɑ̃.til a.ʁi.və.ʁɛ a lis.bɔn/', 'zhü-LYEHⁿ a pro-MEE | keel a-pel-uh-REH | kahⁿ-teel a-ree-vuh-REH a lees-BONN', ['futur', 'recit'], FCVDR),
  gap(2547, "Quand tu verras Marc, dis-lui que j'ai laissé ses clés.", 'When you see Marc, tell him I left his keys.',
    '/kɑ̃ ty ve.ʁa maʁk di.lɥi kə ʒe le.se se kle/', 'kahⁿ tü veh-RA MARK | dee-LWEE kuh zhay leh-SAY say KLAY',
    "Quand tu ___ Marc, dis-lui que j'ai laissé ses clés. (voir · demain)",
    "Demain : le futur, verras. Jamais le présent pour l'avenir après quand. EN: the future after quand.",
    ['futur', 'quand'], FCVDR),
  gap(2548, 'Tant que les voisins seront absents, relève leur courrier.', 'As long as the neighbours are away, collect their post.',
    '/tɑ̃ kə le vwa.zɛ̃ sə.ʁɔ̃.tap.sɑ̃ ʁə.lɛv lœʁ ku.ʁje/', 'tahⁿ kuh lay vwa-ZEHⁿ | suh-rohⁿ-tap-SAHⁿ | ruh-LEV luhr koo-RYAY',
    'Tant que les voisins ___ absents, relève leur courrier. (être · les deux semaines à venir)',
    "L'avenir : le futur, seront. EN: the future after tant que.",
    ['futur', 'tant-que']),
  sent(2549, 'Si tu as un problème, appelle ma voisine.', 'If you have a problem, call my neighbour.',
    '/si ty a œ̃ pʁɔ.blɛm a.pɛl ma vwa.zin/', 'see tü a uhⁿ pro-BLEM | a-PEL ma vwa-ZEEN', ['futur', 'si']),
  sent(2550, "Quand le colis arrivera, pose-le dans l'entrée.", 'When the parcel comes, put it in the hall.',
    '/kɑ̃ lə kɔ.li a.ʁi.və.ʁa poz.lə dɑ̃ lɑ̃.tʁe/', 'kahⁿ luh ko-LEE a-ree-vuh-RA | POHZ-luh dahⁿ lahⁿ-TRAY', ['futur', 'quand']),
  sent(2551, "Elle m'avait dit qu'elle passerait dès qu'elle aurait fini.", 'She had told me she would come round as soon as she had finished.',
    '/ɛl ma.vɛ di kɛl pa.sə.ʁɛ dɛ kɛl o.ʁɛ fi.ni/', 'el ma-veh DEE | kel pa-suh-REH | deh kel oh-reh fee-NEE', ['futur', 'recit']),
  sent(2552, 'Pendant que tu feras le marché, je préparerai la salade.', 'While you do the market shopping, I will make the salad.',
    '/pɑ̃.dɑ̃ kə ty fə.ʁa lə maʁ.ʃe ʒə pʁe.pa.ʁə.ʁe la sa.lad/', 'pahⁿ-dahⁿ kuh tü fuh-ra luh mar-SHAY | zhuh pray-pa-ruh-RAY la sa-LAD', ['futur', 'pendant']),
  sent(2553, "Quand il fait chaud, j'arrose le soir.", 'When it is hot, I water in the evening.',
    '/kɑ̃.til fɛ ʃo ʒa.ʁoz lə swaʁ/', 'kahⁿ-teel feh SHOH | zha-ROHZ luh SWAR', ['futur', 'habitude']),
];

/* ── ACT 10 · APRÈS QUE, ET COMMENT L'ÉVITER (.2556-.2569) ────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(2556, 'Après que la présidente a ouvert la séance, le trésorier a présenté les comptes.', 'After the chair opened the meeting, the treasurer presented the accounts.',
    '/a.pʁɛ kə la pʁe.zi.dɑ̃t a u.vɛʁ la se.ɑ̃s lə tʁe.zɔ.ʁje a pʁe.zɑ̃.te le kɔ̃t/', 'a-preh kuh la pray-zee-DAHⁿT | a oo-VEHR la say-AHⁿS | luh tray-zo-RYAY a pray-zahⁿ-TAY lay KOHⁿT', ['apres', 'pv'], FCVDR),
  sent(2557, 'Après avoir présenté les comptes, le trésorier a répondu aux questions.', 'After presenting the accounts, the treasurer answered questions.',
    '/a.pʁɛ.za.vwaʁ pʁe.zɑ̃.te le kɔ̃t lə tʁe.zɔ.ʁje a ʁe.pɔ̃.dy o kɛs.tjɔ̃/', 'a-preh-za-VWAR pray-zahⁿ-TAY lay KOHⁿT | luh tray-zo-RYAY a ray-pohⁿ-DÜ oh kes-TYOHⁿ', ['apres', 'sujet']),
  sent(2558, 'Après le vote, la séance a été levée.', 'After the vote, the meeting was closed.',
    '/a.pʁɛ lə vɔt la se.ɑ̃s a e.te lə.ve/', 'a-preh luh VOT | la say-AHⁿS a ay-tay luh-VAY', ['apres', 'nom']),
  sent(2559, "Après qu'il a été élu, le nouveau secrétaire a pris la parole.", 'After he was elected, the new secretary took the floor.',
    '/a.pʁɛ kil a e.te e.ly lə nu.vo sə.kʁe.tɛʁ a pʁi la pa.ʁɔl/', 'a-preh keel a ay-TAY ay-LÜ | luh noo-VOH suh-kray-TEHR | a pree la pa-ROL', ['apres'], FCVDR),
  rule(2560, "Après que + indicatif : le fait a eu lieu. « Après qu'il soit parti » s'entend partout, mais reste critiqué à l'écrit.", "Après que + indicative: the event has happened. « Après qu'il soit parti » is heard everywhere, but is still criticised in writing.",
    '/a.pʁɛ kə ɛ̃.di.ka.tif lə fɛ a y ljø a.pʁɛ kil swa paʁ.ti sɑ̃.tɑ̃ paʁ.tu mɛ ʁɛst kʁi.ti.ke a le.kʁi/', 'a-preh KUH | ehⁿ-dee-ka-TEEF | luh FEH a ü LYEU | a-preh keel swa par-TEE | sahⁿ-tahⁿ par-TOO | meh rest kree-tee-KAY a lay-KREE',
    "« Après que le trésorier ___ parti, nous avons voté. » À l'écrit ?",
    "Est parti : le départ a eu lieu, donc l'indicatif. Le subjonctif vient de l'analogie avec avant que ; à l'oral, on l'entend partout, mais à l'examen il coûte un point.",
    ['apres', 'oral']),
  rule(2561, 'Trois sorties de secours : après + nom, après + infinitif passé, une fois que + indicatif.', 'Three ways out: après + noun, après + past infinitive, une fois que + indicative.',
    '/tʁwa sɔʁ.ti də sə.kuʁ a.pʁɛ nɔ̃ a.pʁɛ ɛ̃.fi.ni.tif pa.se yn fwa kə ɛ̃.di.ka.tif/', 'trwa sor-TEE duh suh-KOOR | a-preh NOHⁿ | a-preh ehⁿ-fee-nee-teef pa-SAY | ün fwa KUH | ehⁿ-dee-ka-TEEF',
    'Comment éviter après que ?',
    "Après son départ ; après être parti, si le sujet est le même ; une fois qu'il est parti. Il n'y a plus de mode à choisir.",
    ['apres', 'sujet']),
  sent(2562, "Après être arrivée en retard, la vice-présidente s'est excusée.", 'After arriving late, the vice-chair apologised.',
    '/a.pʁɛ.zɛ.tʁa.ʁi.ve ɑ̃ ʁə.taʁ la vis.pʁe.zi.dɑ̃t sɛ.tɛk.sky.ze/', 'a-preh-zeh-tra-ree-VAY ahⁿ ruh-TAR | la vees-pray-zee-DAHⁿT | seh-teks-kü-ZAY', ['apres', 'sujet']),
  sent(2563, "Une fois que chacun s'est exprimé, nous avons voté.", 'Once everyone had spoken, we voted.',
    '/yn fwa kə ʃa.kœ̃ sɛ.tɛks.pʁi.me nu.za.vɔ̃ vɔ.te/', 'ün fwa kuh sha-KUHⁿ | seh-teks-pree-MAY | noo-za-vohⁿ vo-TAY', ['apres', 'une-fois'], FCVDR),
  gap(2564, 'Après que le trésorier est parti, nous avons abordé le budget.', 'After the treasurer left, we moved on to the budget.',
    '/a.pʁɛ kə lə tʁe.zɔ.ʁje ɛ paʁ.ti nu.za.vɔ̃.za.bɔʁ.de lə byd.ʒɛ/', 'a-preh kuh luh tray-zo-RYAY eh par-TEE | noo-za-vohⁿ-za-bor-DAY luh büd-ZHEH',
    "Après que le trésorier ___ parti, nous avons abordé le budget. (être · c'est fait)",
    "L'indicatif : est parti. « Soit parti » s'entend, mais l'écrit garde l'indicatif. EN: après que: indicative.",
    ['apres']),
  gap(2565, "Après avoir voté le budget, l'assemblée a élu son bureau.", 'After voting on the budget, the assembly elected its committee.',
    '/a.pʁɛ.za.vwaʁ vɔ.te lə byd.ʒɛ la.sɑ̃.ble a e.ly sɔ̃ by.ʁo/', 'a-preh-za-VWAR vo-TAY luh büd-ZHEH | la-sahⁿ-BLAY a ay-LÜ sohⁿ bü-ROH',
    "Après ___ le budget, l'assemblée a élu son bureau. (voter · même sujet)",
    "Même sujet : après + infinitif passé, avoir voté. EN: after + past infinitive.",
    ['apres', 'sujet']),
  sent(2566, "Après son élection, le secrétaire a remercié l'assemblée.", 'After his election, the secretary thanked the assembly.',
    '/a.pʁɛ sɔ̃.ne.lɛk.sjɔ̃ lə sə.kʁe.tɛʁ a ʁə.mɛʁ.sje la.sɑ̃.ble/', 'a-preh sohⁿ-nay-lek-SYOHⁿ | luh suh-kray-TEHR a ruh-mehr-SYAY la-sahⁿ-BLAY', ['apres', 'nom']),
  sent(2567, "Après qu'on aura fixé la date, nous préviendrons les membres.", 'Once we have set the date, we will notify the members.',
    '/a.pʁɛ kɔ̃.no.ʁa fik.se la dat nu pʁe.vjɛ̃.dʁɔ̃ le mɑ̃bʁ/', 'a-preh kohⁿ-noh-RA feek-SAY la DAT | noo pray-vyehⁿ-DROHⁿ lay MAHⁿBR', ['apres', 'futur']),
  sent(2568, 'Après que les membres avaient voté, on servait toujours un verre.', 'After the members had voted, a drink was always served.',
    '/a.pʁɛ kə le mɑ̃.bʁə.za.vɛ vɔ.te ɔ̃ sɛʁ.vɛ tu.ʒuʁ œ̃ vɛʁ/', 'a-preh kuh lay mahⁿ-bruh-za-VEH vo-TAY | ohⁿ sehr-VEH too-ZHOOR uhⁿ VEHR', ['apres', 'habitude']),
  sent(2569, "Après avoir relu le procès-verbal, la présidente l'a signé.", 'After rereading the minutes, the chair signed them.',
    '/a.pʁɛ.za.vwaʁ ʁə.ly lə pʁɔ.sɛ.vɛʁ.bal la pʁe.zi.dɑ̃t la si.ɲe/', 'a-preh-za-VWAR ruh-LÜ | luh pro-seh-vehr-BAL | la pray-zee-DAHⁿT la see-NYAY', ['apres', 'sujet'], FCVDR),
];

/* ── ACT 11 · DÈS QUE, AUSSITÔT QUE, UNE FOIS QUE : L'ANTÉRIORITÉ (.2572-.2587) */

export const ACT11_ROWS: Row[] = [
  sent(2572, "Dès que j'ai fini mon café, je pars au travail.", 'As soon as I have finished my coffee, I leave for work.',
    '/dɛ kə ʒe fi.ni mɔ̃ ka.fe ʒə paʁ o tʁa.vaj/', 'deh kuh zhay fee-NEE mohⁿ ka-FAY | zhuh PAR oh tra-VAHY', ['anteriorite', 'present'], FCVDR),
  sent(2573, "Dès que j'avais fini mes devoirs, je descendais jouer sur la plage.", 'As soon as I had finished my homework, I would go down and play on the beach.',
    '/dɛ kə ʒa.vɛ fi.ni me də.vwaʁ ʒə de.sɑ̃.dɛ ʒwe syʁ la plaʒ/', 'deh kuh zha-VEH fee-NEE may duh-VWAR | zhuh day-sahⁿ-DEH ZHWAY | sür la PLAZH', ['anteriorite', 'habitude'], FCVDR),
  sent(2574, "Dès que j'aurai fini ce livre, je te le prêterai.", 'As soon as I have finished this book, I will lend it to you.',
    '/dɛ kə ʒo.ʁe fi.ni sə livʁ ʒə tə lə pʁɛ.tə.ʁe/', 'deh kuh zhoh-RAY fee-NEE suh LEEVR | zhuh tuh luh preh-tuh-RAY', ['anteriorite', 'futur']),
  sent(2575, "Dès qu'il eut fini son repas, il sortit sur la terrasse.", 'As soon as he had finished his meal, he went out onto the terrace.',
    '/dɛ kil y fi.ni sɔ̃ ʁə.pa il sɔʁ.ti syʁ la tɛ.ʁas/', 'deh keel ü fee-NEE sohⁿ ruh-PA | eel sor-TEE sür la teh-RASS', ['anteriorite', 'litteraire'], FC, SO),
  sent(2576, 'Aussitôt que la cloche avait sonné, nous courions vers la sortie.', 'As soon as the bell had rung, we would run for the exit.',
    '/o.si.to kə la klɔʃ a.vɛ sɔ.ne nu ku.ʁjɔ̃ vɛʁ la sɔʁ.ti/', 'oh-see-toh kuh la KLOSH a-veh so-NAY | noo koo-RYOHⁿ vehr la sor-TEE', ['anteriorite', 'habitude']),
  sent(2577, "Une fois que la pâte a reposé, on l'étale au rouleau.", 'Once the dough has rested, you roll it out.',
    '/yn fwa kə la pat a ʁə.po.ze ɔ̃ le.tal o ʁu.lo/', 'ün fwa kuh la PAT a ruh-poh-ZAY | ohⁿ lay-TAL oh roo-LOH', ['anteriorite', 'present']),
  sent(2578, 'Sitôt arrivé, mon grand-père allumait la radio.', 'The moment he got home, my grandfather would switch on the radio.',
    '/si.to.ta.ʁi.ve mɔ̃ ɡʁɑ̃.pɛʁ a.ly.mɛ la ʁa.djo/', 'see-toh-ta-ree-VAY | mohⁿ grahⁿ-PEHR a-lü-MEH la ra-DYOH', ['anteriorite', 'participe'], FCVR, SO),
  sent(2579, 'Une fois le repas terminé, nous faisions la sieste.', 'Once the meal was over, we would have a nap.',
    '/yn fwa lə ʁə.pa tɛʁ.mi.ne nu fə.zjɔ̃ la sjɛst/', 'ün FWA luh ruh-PA tehr-mee-NAY | noo fuh-ZYOHⁿ la SYEST', ['anteriorite', 'participe']),
  rule(2580, "Après dès que, le temps composé suit le temps de l'autre verbe.", "After dès que, the compound tense follows the other verb's tense.",
    '/a.pʁɛ dɛ kə lə tɑ̃ kɔ̃.po.ze sɥi lə tɑ̃ də lotʁ vɛʁb/', 'a-preh deh KUH | luh TAHⁿ kohⁿ-poh-ZAY | swee luh TAHⁿ | duh lohtr VEHRB',
    'Présent, imparfait, futur : quel temps composé après dès que ?',
    "Présent : passé composé (dès que j'ai fini, je pars). Imparfait : plus-que-parfait (dès que j'avais fini, je partais). Futur : futur antérieur (dès que j'aurai fini, je partirai). Passé simple, dans les livres : passé antérieur (dès qu'il eut fini, il partit).",
    ['anteriorite']),
  rule(2581, "Le passé antérieur se lit ; aujourd'hui, on écrit dès qu'il a fini.", "The passé antérieur is read; today we write dès qu'il a fini.",
    '/lə pa.se ɑ̃.te.ʁjœʁ sə li o.ʒuʁ.dɥi ɔ̃.ne.kʁi dɛ kil a fi.ni/', 'luh pa-SAY ahⁿ-tay-RYUHR | suh LEE | oh-zhoor-DWEE | ohⁿ-nay-KREE | deh keel a fee-NEE',
    "« Dès qu'il eut fini, il sortit » : comment l'écrire aujourd'hui ?",
    "Dès qu'il a fini, il est sorti. Eut fini, c'est avoir au passé simple et le participe : tu le reconnais, tu ne l'écris pas.",
    ['anteriorite', 'litteraire']),
  gap(2582, 'Dès que nous avions dîné, mon père sortait les cartes.', 'As soon as we had had dinner, my father would get the cards out.',
    '/dɛ kə nu.za.vjɔ̃ di.ne mɔ̃ pɛʁ sɔʁ.tɛ le kaʁt/', 'deh kuh noo-za-vyohⁿ dee-NAY | mohⁿ PEHR sor-TEH lay KART',
    'Dès que nous ___ dîné, mon père sortait les cartes. (avoir · une habitude passée)',
    "Une habitude au passé, et le dîner fini avant : plus-que-parfait, avions dîné. EN: past habit, pluperfect.",
    ['anteriorite', 'habitude'], FCVDR),
  gap(2583, 'Aussitôt que tu auras reçu le paquet, préviens ta grand-mère.', 'As soon as you have received the parcel, let your grandmother know.',
    '/o.si.to kə ty o.ʁa ʁə.sy lə pa.kɛ pʁe.vjɛ̃ ta ɡʁɑ̃.mɛʁ/', 'oh-see-toh kuh tü oh-ra ruh-SÜ luh pa-KEH | pray-VYEHⁿ ta grahⁿ-MEHR',
    'Aussitôt que tu ___ le paquet, préviens ta grand-mère. (recevoir · ce sera fait avant)',
    "L'avenir, et le paquet reçu d'abord : futur antérieur, auras reçu. EN: future, done first: futur antérieur.",
    ['anteriorite', 'futur']),
  sent(2584, "Aussitôt qu'elle fut partie, la maison sembla vide.", 'As soon as she had gone, the house seemed empty.',
    '/o.si.to kɛl fy paʁ.ti la mɛ.zɔ̃ sɑ̃.bla vid/', 'oh-see-toh kel fü par-TEE | la meh-ZOHⁿ sahⁿ-bla VEED', ['anteriorite', 'litteraire'], FC, SO),
  sent(2585, "Quand il avait terminé sa journée, mon grand-père s'asseyait devant la mer.", 'When he had finished his day, my grandfather would sit facing the sea.',
    '/kɑ̃.til a.vɛ tɛʁ.mi.ne sa ʒuʁ.ne mɔ̃ ɡʁɑ̃.pɛʁ sa.sɛ.jɛ də.vɑ̃ la mɛʁ/', 'kahⁿ-teel a-veh tehr-mee-NAY sa zhoor-NAY | mohⁿ grahⁿ-PEHR sa-seh-YEH | duh-vahⁿ la MEHR', ['anteriorite', 'habitude']),
  sent(2586, 'Dès que le soleil se couchait, les pêcheurs rentraient au port.', 'As soon as the sun set, the fishermen came back into harbour.',
    '/dɛ kə lə sɔ.lɛj sə ku.ʃɛ le pe.ʃœʁ ʁɑ̃.tʁɛ o pɔʁ/', 'deh kuh luh so-LEY suh koo-SHEH | lay pay-SHUHR rahⁿ-treh oh POR', ['anteriorite', 'simultane']),
  sent(2587, 'Une fois que tout le monde sera arrivé, nous passerons à table.', 'Once everyone has arrived, we will sit down to eat.',
    '/yn fwa kə tu lə mɔ̃d sə.ʁa.ta.ʁi.ve nu pa.sə.ʁɔ̃ a tabl/', 'ün fwa kuh too luh MOHⁿD | suh-ra-ta-ree-VAY | noo pa-suh-rohⁿ a TABL', ['anteriorite', 'futur'], FCVDR),
];

/* ── ACT 12 · TON COMPTE RENDU (.2590-.2599) ──────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(2590, "Voici, dans l'ordre, le déroulement des faits.", 'Here, in order, is how events unfolded.',
    '/vwa.si dɑ̃ lɔʁdʁ lə de.ʁul.mɑ̃ de fɛ/', 'vwa-SEE | dahⁿ LORDR | luh day-rool-MAHⁿ day FEH', ['rapport', 'plan'], FCVDR),
  sent(2591, "Avant que l'alarme se déclenche, rien ne laissait prévoir l'incident.", 'Before the alarm went off, nothing suggested there would be an incident.',
    '/a.vɑ̃ kə la.laʁm sə de.klɑ̃ʃ ʁjɛ̃ nə lɛ.sɛ pʁe.vwaʁ lɛ̃.si.dɑ̃/', 'a-vahⁿ kuh la-LARM suh day-KLAHⁿSH | RYEHⁿ nuh leh-SEH pray-VWAR | lehⁿ-see-DAHⁿ', ['rapport', 'avant-que']),
  sent(2592, "Au moment où l'alarme a retenti, une cinquantaine de nageurs se trouvaient dans le bassin.", 'When the alarm sounded, about fifty swimmers were in the pool.',
    '/o mɔ.mɑ̃ u la.laʁm a ʁə.tɑ̃.ti y.nə sɛ̃.kɑ̃.tɛn də na.ʒœʁ sə tʁu.vɛ dɑ̃ lə ba.sɛ̃/', 'oh mo-mahⁿ OO la-LARM a ruh-tahⁿ-TEE | ü-nuh sehⁿ-kahⁿ-TENN duh na-ZHUHR | suh troo-VEH dahⁿ luh ba-SEHⁿ', ['rapport', 'simultane']),
  sent(2593, "Pendant que les maîtres-nageurs faisaient sortir le public, j'ai appelé les pompiers.", 'While the lifeguards were getting the public out, I called the fire brigade.',
    '/pɑ̃.dɑ̃ kə le mɛ.tʁə.na.ʒœʁ fə.zɛ sɔʁ.tiʁ lə py.blik ʒe a.pə.le le pɔ̃.pje/', 'pahⁿ-dahⁿ kuh lay meh-truh-na-ZHUHR fuh-ZEH sor-TEER luh pü-BLEEK | zhay a-puh-LAY lay pohⁿ-PYAY', ['rapport', 'simultane'], FCVDR),
  sent(2594, 'Dès que le bâtiment a été vide, nous avons compté les personnes présentes.', 'As soon as the building was empty, we counted the people present.',
    '/dɛ kə lə ba.ti.mɑ̃ a e.te vid nu.za.vɔ̃ kɔ̃.te le pɛʁ.sɔn pʁe.zɑ̃t/', 'deh kuh luh ba-tee-MAHⁿ a ay-tay VEED | noo-za-vohⁿ kohⁿ-TAY | lay pehr-SONN pray-ZAHⁿT', ['rapport', 'anteriorite']),
  sent(2595, "Nous sommes restés sur le parking jusqu'à ce que les pompiers autorisent le retour.", 'We stayed in the car park until the firefighters allowed us back in.',
    '/nu sɔm ʁɛs.te syʁ lə paʁ.kiŋ ʒys.ka sə kə le pɔ̃.pje o.tɔ.ʁiz lə ʁə.tuʁ/', 'noo som res-TAY sür luh par-KEENG | zhüs-ka suh kuh lay pohⁿ-PYAY | oh-to-REEZ luh ruh-TOOR', ['rapport', 'limite'], FCVDR),
  sent(2596, 'Après avoir inspecté la chaufferie, ils ont conclu à une fausse alerte.', 'After inspecting the boiler room, they concluded it was a false alarm.',
    '/a.pʁɛ.za.vwaʁ ɛ̃s.pɛk.te la ʃof.ʁi il.zɔ̃ kɔ̃.kly a y.nə fo.sa.lɛʁt/', 'a-preh-za-VWAR ehⁿs-pek-TAY la shohf-REE | eel-zohⁿ kohⁿ-KLÜ | a ü-nuh foh-sa-LEHRT', ['rapport', 'apres']),
  sent(2597, "Depuis que le détecteur a été remplacé, aucune alarme n'a sonné.", 'Since the detector was replaced, no alarm has gone off.',
    '/də.pɥi kə lə de.tɛk.tœʁ a e.te ʁɑ̃.pla.se o.kyn a.laʁm na sɔ.ne/', 'duh-pwee kuh luh day-tek-TUHR a ay-tay rahⁿ-pla-SAY | oh-KÜNN a-LARM na so-NAY', ['rapport', 'depuis']),
  sent(2598, "Je vous tiendrai informés dès que le rapport de l'installateur me sera parvenu.", "I will keep you informed as soon as the installer's report reaches me.",
    '/ʒə vu tjɛ̃.dʁe ɛ̃.fɔʁ.me dɛ kə lə ʁa.pɔʁ də lɛ̃s.ta.la.tœʁ mə sə.ʁa paʁ.və.ny/', 'zhuh voo tyehⁿ-DRAY ehⁿ-for-MAY | deh kuh luh ra-POR duh lehⁿs-ta-la-TUHR | muh suh-ra par-vuh-NÜ', ['rapport', 'futur'], FCVR, SO),
  sent(2599, 'En attendant que le système soit vérifié, les cours du soir sont suspendus.', 'Until the system has been checked, the evening classes are suspended.',
    '/ɑ̃.na.tɑ̃.dɑ̃ kə lə sis.tɛm swa ve.ʁi.fje le kuʁ dy swaʁ sɔ̃ sys.pɑ̃.dy/', 'ahⁿ-na-tahⁿ-dahⁿ kuh luh sees-TEM | swa vay-ree-FYAY | lay koor dü SWAR | sohⁿ süs-pahⁿ-DÜ', ['rapport', 'en-attendant']),
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
 *  The two long readings (B2: 200 to 350 words) and the nine short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 11. They live
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: an incident report, Montréal. */
export const LECTURE_RAPPORT =
  "Compte rendu d'incident : dégât des eaux dans un immeuble de la rue Saint-Denis, à Montréal. Rédigé par Sylvie Tremblay, gestionnaire de l'immeuble. Le mardi 11 février, vers 7 h 30, une locataire du deuxième étage a signalé de l'eau sous sa porte. Lorsque le gardien est arrivé, l'eau coulait déjà dans l'escalier. Il a coupé l'eau dès qu'il a trouvé la vanne, mais la cave était déjà inondée. Nous avons appelé les pompiers, qui sont arrivés vingt minutes plus tard. Pendant que les pompiers vidaient la cave, les voisins attendaient dans la cour. Par précaution, le courant a été coupé dans tout l'immeuble, et les locataires ont attendu dans la cour jusqu'à ce que l'électricien vérifie les compteurs. Personne n'a pu rentrer avant que l'immeuble soit déclaré sûr, vers midi. À mesure que l'eau baissait, on découvrait les dégâts : trois caves, un ascenseur hors service et le plancher d'un commerce. Le tuyau avait cédé à cause du froid. Le locataire de l'appartement concerné n'y est pour rien : il avait quitté son logement avant que la fuite ne commence. Après avoir séché les murs, l'entreprise a remplacé le tuyau. Depuis que le tuyau a été changé, aucune fuite n'a été signalée. Tant que l'expert de l'assurance ne sera pas passé, nous vous demandons de ne rien jeter. Quand l'expert passera, il faudra lui montrer les photos. Une fois que son rapport sera rendu, les réparations pourront commencer. En attendant que l'ascenseur soit réparé, merci d'utiliser l'escalier B.";

/** Act 12: the model the learner imitates, a report to a board. */
export const LECTURE_MODELE =
  "Compte rendu de l'évacuation de la piscine du centre sportif des Rivages, à Namur, le jeudi 6 mars. Rédigé par Olivier Lemaire, responsable du centre, à l'attention du conseil d'administration. Voici, dans l'ordre, le déroulement des faits. Avant que l'alarme se déclenche, rien ne laissait prévoir l'incident : la séance du soir avait commencé à 18 h, comme d'habitude. Au moment où l'alarme a retenti, à 18 h 40, une cinquantaine de nageurs se trouvaient dans le bassin. Pendant que les maîtres-nageurs faisaient sortir le public, j'ai appelé les pompiers. Les nageurs ont quitté le bâtiment en maillot, avant d'avoir pu reprendre leurs affaires, et nous leur avons distribué des couvertures. Dès que le bâtiment a été vide, nous avons compté les personnes présentes : personne ne manquait. Nous sommes restés sur le parking jusqu'à ce que les pompiers autorisent le retour, vers 19 h 30. Après avoir inspecté la chaufferie, ils ont conclu à une fausse alerte, due à un détecteur défectueux. Le lendemain, l'installateur a remplacé le détecteur. Depuis que le détecteur a été remplacé, aucune alarme n'a sonné. Je vous tiendrai informés dès que le rapport de l'installateur me sera parvenu. En attendant que le système soit vérifié, les cours du soir sont suspendus. Enfin, je propose d'organiser un exercice d'évacuation chaque trimestre : le personnel a bien réagi, mais il peut encore gagner du temps.";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "La fiche de procédure de la pharmacie Keller, à Genève : préparer un sirop. Mets chaque verbe entre parenthèses à la forme qui convient, subjonctif ou infinitif. « Avant de (commencer), lis l'ordonnance en entier. Lave-toi les mains avant de (toucher) les flacons. Ne donne rien avant que la pharmacienne (relire) l'ordonnance. Avant que le patient (repartir), vérifie avec lui la dose et l'heure des prises. Enfin, range le poste de travail avant que le client suivant (arriver). »";

export const TEXTE_A4 =
  "Le courriel de Thomas à sa cheffe, envoyé de la gare de Bruxelles-Midi. Complète avec jusqu'à ce que, en attendant que, en attendant de ou tant que, et mets le verbe au mode qui convient. « Bonjour Anne, mon train pour Paris est annulé. Je resterai à la gare (___) la compagnie (trouver) une solution. (___) (connaître) l'horaire du prochain départ, j'ai prévenu le client. (___) les travaux (être) finis, la compagnie propose des bus. Je ne pourrai rien vous confirmer (___) le train ne (être) pas annoncé. Thomas »";

export const TEXTE_A5 =
  "La lettre de Maître Ousmane Sall, notaire à Dakar, à Awa et Moussa Ndiaye. Pour chaque ne, dis s'il nie ou s'il est explétif. « Madame, Monsieur, je vous propose de signer l'acte le 12 mai, avant que les prix ne changent. Je crains que la banque ne soit en retard pour le prêt ; je vous préviendrai, à moins qu'elle ne confirme la date avant vendredi. Je ne pourrai pas me déplacer le samedi. La maison est en meilleur état que je ne le pensais, et l'acheteur ne demande aucune réduction. Évitons que ce dossier ne traîne. Bien cordialement, Maître Sall »";

export const TEXTE_A6 =
  "La déposition d'Émilie Roy, témoin d'un accident à Québec. Mets les verbes entre parenthèses au temps qui convient, puis choisis le bon mot. « Comme je (sortir) de la boulangerie, j'ai entendu un choc. Pendant que le cycliste (traverser), une voiture a tourné à droite sans le voir. Quand j'ai tourné la tête, le vélo (être) déjà par terre. (Pendant que / Au moment où) le conducteur a vu le cycliste, il a freiné, mais trop tard. Lorsque la police est arrivée, le cycliste (être) assis sur le trottoir et parlait normalement. »";

export const TEXTE_A7 =
  "La biographie de Fatou Camara, sur le site de sa boulangerie à Marseille. Complète avec toutes les fois que, à mesure que, depuis que, maintenant que et tant que, une fois chacun. « Fatou Camara est née à Dakar. (___) elle rentrait au pays, sa mère lui faisait goûter son pain. En 2012, elle ouvre une petite boulangerie à Marseille. (___) les clients arrivaient, l'équipe augmentait la production. (___) elle a ouvert sa boutique, elle se lève à quatre heures. (___) son fils travaille avec elle, Fatou dort un peu plus. Et elle le promet : (___) elle aura de la farine, elle ouvrira le matin. »";

export const TEXTE_A8 =
  "Un fait divers dans un quotidien lyonnais. Pour chaque alors que et chaque tandis que, dis s'il marque le temps ou l'opposition. « Incendie dans un immeuble du 4e arrondissement. Alors que tout le monde dormait, l'alarme s'est déclenchée vers trois heures. Tandis que les pompiers déroulaient les tuyaux, la foule reculait. Le premier étage a été détruit, tandis que le deuxième est resté intact. Un voisin, alors qu'il rentrait du travail, a vu la fumée le premier. Les habitants du rez-de-chaussée veulent rentrer dès demain, alors que les pompiers le déconseillent. »";

export const TEXTE_A9 =
  "Le courriel de Julien à Inès, qui garde sa maison de Toulouse. Mets chaque verbe entre parenthèses au temps qui convient. « Salut Inès, quand tu (arriver), la clé sera sous le pot de fleurs. Pendant que je (être) à Lisbonne, tu pourras utiliser mon vélo. Tant qu'il (faire) chaud, arrose les tomates tous les soirs. Lorsque le plombier (venir), montre-lui la salle de bains. Si tu (avoir) un problème, appelle ma voisine. Je t'appellerai dès que je (arriver) là-bas. Merci encore, Julien »";

export const TEXTE_A10 =
  "Le procès-verbal de l'assemblée d'une association de quartier, à Liège, écrit un peu vite. Réécris les passages entre crochets à l'écrit soigné. « [Après que la présidente ait ouvert la séance], le trésorier a présenté les comptes. [Après que le trésorier a présenté les comptes, le trésorier a répondu aux questions.] [Après qu'il soit parti], nous avons abordé le budget. [Après que nous avons voté], la séance a été levée à 22 h. »";

export const TEXTE_A11 =
  "Un extrait de roman, puis ce que Léa en dit à son grand-père. Trouve les deux passés antérieurs et dis ce qu'on écrirait aujourd'hui. « Dès qu'il eut fini son repas, il sortit sur la terrasse. La nuit tombait. Il regarda longtemps la mer, puis il raccompagna sa fille à la porte. Aussitôt qu'elle fut partie, la maison sembla vide. » Léa : « Tu vois, Papi, c'est comme toi : dès que tu avais fini ta journée, tu t'asseyais devant la mer. »";
