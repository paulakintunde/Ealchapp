// c2.10.l1 « La synthèse experte et la dissertation avancée » — the lesson.
// DRAFT, third lesson of C2 wave 3. To RICH-LESSON-STANDARD.md (the workshop
// shape, text and task) on top of B1-BUILD-PLAYBOOK.md, with the C2 rules of
// C2-BUILD-PLAN.md and the c2.10 brief in C2-RESEARCH-PLAN.md. Structural
// model: `c2/analyse-litteraire-lesson.ts` (c2.02) for the reading-text /
// model-answer / task / scenario shape; `c1/dissertation-synthese-lesson.ts`
// (c1.10) for the dossier this lesson continues past.
//
// Not imported, not merged into seed.json, not published. No Postgres
// session was opened while authoring this file: c1.10 is cited by REFRAME
// import and by trail position read from the local `seed.json`'s units
// array, never by reusing another lesson's item id.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   ONE THREE-DOCUMENT DOSSIER, READ AS ONE TENSION, WRITTEN AS ONE FUSED
//   TEXT. c1.10 already teaches the synthèse de documents and the essai sur
//   dossier as two separate exercises, on a conversational three-document
//   dossier. This lesson reads a DENSER three-document dossier (an
//   institutional report with statistics, a sociologist's tribune, an HR
//   director's interview, each carrying a statistic or clause that qualifies
//   its own headline claim) once for content, once for the shared stake
//   (acts 1-2), builds the sentence-level fusion of citation and argument
//   that c1.10 never asks for (act 3), keeps that fusion faithful under a
//   tight word budget (act 4) and as a hard line against invention (act 5),
//   chooses a plan the real three-way tension allows rather than a forced
//   pour/contre split (act 6), names the central trap of holding only half
//   the fused genre (act 7), then produces the whole thing, graded (act 8).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · sections)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le problème : un genre      6  Camille's two separate sheets; the
//       à part entière                 fused demand named; recap of c1.10
//    2  Lire trois sources          6  the three-document dossier, read once;
//       denses                         reading by shared stake, not by
//                                      document
//    3  Tenir le fil : citer et     5  the fusion connector, against two
//       trancher                       adjacent but unfused sentences
//    4  La compression : choisir    4  keeping the qualifying statistic
//       ce qui compte                  under a tight word budget
//    5  Ce qu'on ne trahit jamais   4  fidelity extended to statistical
//                                      nuance, a hard line
//    6  Choisir son plan pour       6  c1.10's plan types applied to a real
//       ce dossier                     three-way tension, never pour/contre
//    7  Le piège : la moitié        3  the stepped trap, five ways to hold
//       manquante                      only half the fused genre
//    8  Ta synthèse-dissertation   11  the model, the plan, the rehearsal,
//                                      TASK, quiz, review, roundup
//
//   TOTAL 45 sections, 8 acts (6,6,5,4,4,6,3,11). Corpus: 113 authored rows
//   (.2200-.2312 inside the claimed .2200-.2399 block; .2313-.2399 left free
//   for the pre-review pass). Quiz: 8 rounds of 6 (one round per act).
//   Seven error triggers, seven remediation drills, five reference sheets,
//   six terms. Chapter artwork: `c2-synthese-dissertation-image-prompts.md`,
//   8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Peser les sources, puis trancher, dans la même phrase. »
//   EN: Weigh the sources, then decide, in the same sentence.
//
//   ONE METAPHOR, PESER PUIS TRANCHER. c1.10 handed the learner two separate
//   tools on two separate papers: a scale that weighs sources without ever
//   deciding (the synthèse) and an arrow that decides without ever weighing
//   (the essai). This lesson fuses the two into one gesture, repeated at the
//   sentence level.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the fused genre, one text that synthesises multiple dense
//           sources AND defends a structured personal position, sentence by
//           sentence; reading a dense multi-document dossier by its shared
//           stake rather than document by document; the fusion connector
//           that cites and decides in one clause; keeping a qualifying
//           statistic alive under a tight word budget; fidelity to multiple
//           sources as a hard line; choosing a plan the dossier's real
//           tension allows, against a forced pour/contre split; the stepped
//           "missing half" trap; the app's own fused-genre task.
//   QUOTES  c1.10's reframe (acts 1 and 6), imported from its own corpus
//           file, never retyped.
//   LEAVES  the problématique as a tension or paradox, the plan types
//           themselves (analytical, comparative), the transition-bilan and
//           the conclusion-with-ouverture, and the synthèse's own rules
//           (own words, no opinion, a word range) to c1.10, recapped once by
//           citation, never re-taught as new content.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; Hadrien (the tutor) and Camille use tu with each
//   other. French only on the learner surface; English authored on every
//   `en` field and every trailing « EN: », never shown by default. No em
//   dash, no U+203F tie, never "honnête"/"honest". Typographic ’ throughout.
//   No spaced « ? » or « ! » in a scene or story bubble. Citations by trail
//   position in French words (« la leçon 10 du C1 »), never a raw id.
//   Mission answer slots are spread by `balanceSlots()`; the quiz keeps its
//   authored slots, scattered by hand.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 45 sections, close to c2.06's 44 and under c2.01's 45/c2.02's 50.
//      Every sub-topic in the brief is covered once, fully, with no
//      repeated material. Extend any single act before the phone review, or
//      ship at this size?
//   2. The dossier runs three short, dense excerpts (~300 words total),
//      deliberately on the short side of the C1/C2 reading envelope per this
//      lesson's own risk note (the real multi-source synthesis genre can run
//      very long; both C1-BUILD-PLAN.md for c1.10 and this lesson's own
//      brief leave the exact word/source count open). Confirm this scope, or
//      widen to a fourth document at pre-review?
//   3. The task's word budget (280-400) sits slightly above c1.10's own
//      essai (250-400) and well above c2.02's task (150-280), reflecting
//      "harder, not merely longer". Confirm the band, or tighten it further
//      given the risk note's caution against the heaviest real-exam version?
//   4. The rubric's fifth criterion ("compression") marks word-budget
//      discipline and evidence density rather than a sixth, grammar-shaped
//      criterion, since C2 has no grammar point (C2-BUILD-PLAN.md). Keep, or
//      add a language-register criterion instead?
//   5. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   6. All three dossier documents and every figure they cite are INVENTED
//      for this exercise (§I of the corpus file), the same route c1.10's own
//      task dossier takes. Confirm this is the wanted route, or substitute a
//      verified-reusable real source at pre-review?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion, TrapCard, TrapStep,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  DOSSIER_FULL, DOSSIER_FULL_EN, SOURCE_NOTE,
  MODELE_SYNTHESE_DISSERTATION, MODELE_SYNTHESE_DISSERTATION_EN,
  C110_REF, C110_REFRAME, C110_REFRAME_EN,
} from './synthese-dissertation-corpus.ts';
import { SYNTHESE_DISSERTATION_TERMS } from './synthese-dissertation-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as unknown as SrcItem]));

/** An item’s fr/en. Throws on a typo, so no section can name an id that
 *  does not exist in this lesson’s own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.10: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE COACHING BEAT: a short dialogue between Camille and either Hadrien
 *  (her tutor) or Farah (a fellow candidate), refining the fused genre
 *  mid-lesson. */
function scene(id: string, title: string, bubbles: { from: 'coach' | 'user' | 'narrator'; fr: string; en: string }[]): Sec<'story'> {
  return {
    type: 'story', id, layer: 'core', title, setting: 'La préparation hebdomadaire de Camille au concours, avec Hadrien, son tuteur.',
    bubbles, closing: { fr: REFRAME, en: REFRAME_EN },
    audio: AUDIO, say: REFRAME,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE PROBLÈME : UN GENRE À PART ENTIÈRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'story'> = {
  ...scene('a1-scene', 'Deux feuilles, un seul exercice', [
    { from: 'narrator', fr: src(E(2200)).fr, en: src(E(2200)).en },
    { from: 'coach', fr: src(E(2201)).fr, en: src(E(2201)).en },
    { from: 'coach', fr: src(E(2202)).fr, en: src(E(2202)).en },
    { from: 'coach', fr: src(E(2208)).fr, en: src(E(2208)).en },
    { from: 'user', fr: src(E(2209)).fr, en: src(E(2209)).en },
  ]),
  terms: ['syntheseargumentee'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Lire trois sources denses comme un seul dossier', s: 'Acte 2 : par enjeu, jamais document par document' },
    { t: 'Fondre une citation et une décision dans la même phrase', s: 'Acte 3 : le connecteur qui pèse et qui tranche' },
    { t: 'Compresser sans perdre le chiffre qui nuance', s: 'Acte 4 : sous un nombre de mots serré' },
    { t: 'Rester fidèle, choisir le bon plan, éviter la moitié manquante', s: 'Actes 5 à 8 : la fidélité, le plan, le piège, ta copie' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core', sheetId: 'sheet-genre',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: C110_REFRAME, en: C110_REFRAME_EN, note: `${Cap(C110_REF)} : construire un plan et écrire une synthèse de documents` },
    ex(E(2203), 'peser sans trancher : prudent, mais vide de position'),
    ex(E(2204), 'trancher sans peser : une opinion qui ne doit rien aux documents'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A1_OUTILS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a1-outils', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-genre',
  title: 'Deux outils séparés, un seul geste', frSub: 'La leçon 10 du C1, et ce que cette leçon ajoute',
  hint: 'Trois cartes. Les deux premiers outils existaient déjà, séparés ; le troisième les fond en un seul geste.',
  audio: REC('rec-c2-10-deux-outils'), say: REFRAME, terms: ['syntheseargumentee'],
  cards: [
    { head: 'La synthèse, seule', label: 'ancien outil 1', fr: 'Peser les sources, sans jamais trancher', sub: '[peh-ZAY lay SOORSS]',
      body: `${Cap(C110_REF)} enseignait cet outil sur un dossier séparé : rendre compte des documents, sans opinion personnelle. EN: the C1 lesson taught this tool on a separate dossier: reporting the documents, with no personal opinion.` },
    { head: 'L’essai, seul', label: 'ancien outil 2', fr: 'Trancher une position, sans peser de dossier précis', sub: '[trahⁿ-SHAY ün poh-zee-SYOHⁿ]',
      body: `${Cap(C110_REF)} enseignait aussi cet outil, sur un autre dossier, séparément. EN: the C1 lesson also taught this tool, on another dossier, separately.` },
    { head: 'La synthèse-dissertation', label: 'ce que cette leçon ajoute', fr: 'Peser ET trancher, dans la même phrase', sub: '[peh-ZAY ay trahⁿ-SHAY]',
      body: 'Un seul texte, un seul mouvement : chaque phrase cite un document ET prend position. EN: one single text, one single movement: every sentence cites a document AND takes a position.' },
  ],
};

const A1_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-groupe', layer: 'core', size: 'lg',
  title: 'Peser, ou trancher', frSub: 'Classe chaque idée',
  groups: [
    grp('Peser une source', [
      it(E(2203), 'peser seul : prudent, mais vide'),
      it(E(2205), 'peser une source (la phrase)'),
    ], chk('Ces deux idées parlent de...', ['trancher', 'peser'], 1,
      'Peser, c’est rendre compte d’une source sans encore décider. EN: weighing means reporting a source without yet deciding.')),
    grp('Trancher une position', [
      it(E(2204), 'trancher seul : une opinion qui ne doit rien aux documents'),
      it(E(2206), 'trancher une position (la phrase)'),
    ], chk('Ces deux idées parlent de...', ['peser', 'trancher'], 1,
      'Trancher, c’est décider, sans forcément s’appuyer sur une source. EN: deciding means taking a position, without necessarily leaning on a source.')),
    ctl('La copie de Camille', 'Une copie qui pèse sur une feuille et tranche sur une autre feuille...', ['répond à l’exercice', 'rate l’exercice, même si chaque feuille est juste'], 1,
      'L’exercice demande un seul texte qui fait les deux à la fois. EN: the exercise asks for one single text that does both at once.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le problème de Camille', 'Camille remettait...', ['un seul texte fondu', 'deux feuilles séparées'], 1,
    'Une synthèse neutre, puis, à part, son avis personnel. EN: a neutral synthesis, then, separately, her own opinion.'),
  ctl('Ce que la leçon 10 du C1 enseignait', `${Cap(C110_REF)} enseignait la synthèse et l’essai...`, ['dans un seul texte fondu', 'comme deux exercices séparés'], 1,
    'Jamais fondus en un seul texte. EN: never fused into one single text.'),
  ctl('Le geste de cette leçon', 'Cette leçon ajoute le geste de...', ['peser et trancher, dans la même phrase', 'mémoriser plus de vocabulaire'], 0,
    'Un seul mouvement, pas deux étapes séparées. EN: one single movement, not two separate steps.'),
], ['syntheseargumentee']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le problème : un genre à part entière',
    opener: {
      line: 'Camille remet deux feuilles, une qui pèse, une qui tranche : ici tu apprends à n’en écrire qu’une seule, qui fait les deux à la fois. EN: Camille hands in two sheets, one that weighs, one that decides: here you learn to write only one, that does both at once.',
      imageRef: 'lessons/c2-10-synthese-dissertation/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais que cette leçon fond la synthèse et l’essai en un seul texte, et tu sais pourquoi la leçon 10 du C1 ne les fondait pas. EN: You know this lesson fuses the synthesis and the essay into one single text, and why the C1 lesson did not fuse them.',
    estScreens: 20, restPoints: ['a1-outils'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_ACQUIS, A1_OUTILS, A1_GROUPE, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LIRE TROIS SOURCES DENSES COMME UN SEUL DOSSIER
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Le dossier : le télétravail, cinq ans après', frSub: 'Trois documents, inventés pour l’exercice',
  text: DOSSIER_FULL,
  glossary: [
    { word: 'déclarée', en: 'self-reported', note: 'Donnée par les équipes elles-mêmes, pas mesurée par un tiers. EN: given by the teams themselves, not measured by a third party.' },
    { word: 'aveu', en: 'admission', note: 'Une reconnaissance, souvent présentée comme venant à contrecœur. EN: an admission, often presented as coming reluctantly.' },
    { word: 'diffuse', en: 'diffuse, spread out', note: 'Qui se répand largement, sans un point précis où la saisir. EN: spread widely, with no single precise point to grasp it.' },
    { word: 'fréquentation', en: 'footfall', note: 'Le nombre de personnes qui viennent dans un lieu. EN: the number of people who come to a place.' },
    { word: 'livrables', en: 'deliverables', note: 'Ce qu’un travail produit concrètement, plutôt que le temps qu’il prend. EN: what a piece of work concretely produces, rather than the time it takes.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : les trois documents sont-ils d’accord ou en désaccord sur le télétravail.', a: 'Ni l’un ni l’autre exactement : ils comptent trois choses différentes (des points de productivité, des gestes non transmis, des limites non tenues), pas un simple pour ou contre.' },
    { q: 'Quel chiffre, dans le document 1, empêche de lire le gain de quatre points comme universel.', a: 'Ce gain tombe à moins d’un point chez les salariés arrivés depuis moins de deux ans.' },
    { q: 'Quelle idée le document 3 déplace-t-il, par rapport aux deux premiers documents.', a: 'Il déplace la question du lieu de travail vers la limite entre disponibilité et performance.' },
  ],
  audio: REC('rec-c2-10-dossier'), say: REFRAME, terms: ['lireparenjeu'],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-lecture',
  title: 'Trois documents, ce qu’ils comptent',
  cols: ['Document', 'Ce qu’il affirme', 'Ce qui le nuance'],
  rows: [
    { cells: [src(E(2210)).fr, 'un gain moyen de productivité', src(E(2211)).fr], say: src(E(2211)).fr,
      detail: { title: 'Le document 1', body: 'La moyenne cache une fracture selon l’ancienneté. EN: the average hides a split by seniority.', say: src(E(2210)).fr } },
    { cells: [src(E(2212)).fr, 'un coût social et urbain', src(E(2213)).fr], say: src(E(2213)).fr,
      detail: { title: 'Le document 2', body: 'Ce coût n’apparaît dans aucun tableau de productivité. EN: this cost shows up in no productivity table.', say: src(E(2212)).fr } },
    { cells: [src(E(2214)).fr, 'un problème de limite, pas de lieu', src(E(2215)).fr], say: src(E(2215)).fr,
      detail: { title: 'Le document 3', body: 'Le vrai risque déplace la question loin du lieu de travail. EN: the real risk shifts the question away from the place of work.', say: src(E(2214)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lireparenjeu'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a2-exemples', layer: 'core', title: 'Lire par enjeu',
  examples: [
    ex(E(2216), 'chercher ce qui répond à la même question'),
    ex(E(2217), 'la question commune : ce qui compte, et qui en porte le coût'),
    ex(E(2222), 'une seconde lecture, pour la tension, pas pour le contenu'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lireparenjeu'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'La même question, trois mesures', frSub: 'Lire les trois documents ensemble',
  groups: [
    grp('Ce que chaque document compte', [
      it(E(2218), 'points, gestes, limites : trois mesures différentes'),
      it(E(2228), 'une seule tension, pas trois résumés'),
    ], chk('Les trois documents répondent surtout...', ['à trois questions sans aucun rapport', 'à une seule question commune, comptée différemment'], 1,
      'Ce qui compte, et qui en porte le coût. EN: what counts, and who bears its cost.')),
    grp('La nuance qui disparaît trop vite', [
      it(E(2219), 'la nuance du document 1, facile à perdre'),
      it(E(2227), '« de l’aveu même » : la nuance vient des équipes elles-mêmes'),
    ], chk('Perdre cette nuance en résumant, c’est...', ['gagner de la place sans rien perdre', 'perdre exactement ce qui empêche une lecture univoque'], 1,
      'Un résumé trop court efface souvent cette nuance en premier. EN: an overly short summary often erases this nuance first.')),
    ctl('Farah et Camille', 'Lire le document 1, puis le document 2, puis le document 3, séparément, revient à...', ['lire le dossier une seule fois, efficacement', 'résumer trois fois, sans jamais les lire ensemble'], 1,
      'Camille corrige exactement cette habitude. EN: Camille corrects exactly that habit.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lireparenjeu'],
};

const A2_SCENE: Sec<'story'> = {
  ...scene('a2-scene', 'Lire les trois documents ensemble, pas un par un', [
    { from: 'user', fr: src(E(2223)).fr, en: src(E(2223)).en },
    { from: 'coach', fr: src(E(2224)).fr, en: src(E(2224)).en },
    { from: 'narrator', fr: src(E(2225)).fr, en: src(E(2225)).en },
  ]),
  terms: ['lireparenjeu'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La question commune', 'La question qui traverse les trois documents est...', ['pour ou contre le télétravail', 'qu’est-ce qui compte, et qui en porte le coût'], 1,
    'Jamais un simple pour ou contre. EN: never a simple for or against.'),
  ctl('Le gain du document 1', 'Le gain de quatre points, dans le document 1...', ['vaut pour toutes les équipes également', 'tombe sous un point pour les salariés les plus récents'], 1,
    'Une moyenne qui cache une fracture selon l’ancienneté. EN: an average hiding a split by seniority.'),
  ctl('Lire par enjeu', 'Lire un dossier dense par enjeu, c’est...', ['résumer chaque document séparément', 'chercher la tension qui traverse les trois à la fois'], 1,
    'Jamais trois résumés séparés. EN: never three separate summaries.'),
], ['lireparenjeu']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Lire trois sources denses comme un seul dossier',
    opener: {
      line: 'Trois documents comptent trois choses différentes sur le même sujet : ici tu apprends à les lire comme une seule tension, pas comme trois résumés. EN: Three documents count three different things on the same topic: here you learn to read them as a single tension, not three summaries.',
      imageRef: 'lessons/c2-10-synthese-dissertation/act02.jpg',
    },
    sections: [],
    milestone: 'Tu lis trois documents denses par enjeu commun, et tu repères le chiffre qui nuance avant qu’il ne disparaisse d’un résumé trop rapide. EN: You can read three dense documents by their shared stake, and spot the qualifying figure before it disappears from too quick a summary.',
    estScreens: 26, restPoints: ['a2-lecture', 'a2-table'],
  },
  sections: [A2_LECTURE, A2_TABLE, A2_EXEMPLES, A2_GROUPE, A2_SCENE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — TENIR LE FIL : CITER ET TRANCHER DANS LA MÊME PHRASE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-fusion',
  title: 'Deux phrases, ou une seule fondue', frSub: 'Le connecteur qui pèse et qui tranche',
  hint: 'Deux paires de cartes. Même citation, même idée : seul le connecteur change tout.',
  audio: REC('rec-c2-10-phrase-fondue'), say: REFRAME, terms: ['phrasefondue'],
  cards: [
    { head: 'Fondue', label: 'citer ET trancher', fr: src(E(2229)).fr, sub: '[suh kee mah-MEHN]',
      body: 'Le connecteur « ce qui m’amène à » relie la citation à la décision, dans la même phrase. EN: the connector "which leads me to" links the citation to the decision, in the same sentence.' },
    { head: 'Non fondue', label: 'deux phrases voisines', fr: src(E(2230)).fr, sub: '[zhuh pahⁿss par ee-YUHR]',
      body: 'Même idée, même document cité : mais la citation et l’avis restent deux phrases séparées. EN: same idea, same document cited: but the citation and the opinion stay two separate sentences.' },
    { head: 'Fondue', label: 'citer ET trancher', fr: src(E(2235)).fr, sub: '[püees-kuh luh do-kü-MAHⁿ TRWA]',
      body: 'Le connecteur « règle directement ce point » tranche à l’intérieur même de la citation. EN: the connector "directly addresses that point" decides right inside the citation itself.' },
    { head: 'Non fondue', label: 'deux phrases voisines', fr: src(E(2236)).fr, sub: '[lay lee-vrah-BL sohⁿ ün bohⁿ muh-ZÜR]',
      body: '« À mon avis » ferme la phrase sur elle-même, sans jamais la relier à ce qui précède. EN: "in my opinion" closes the sentence on itself, without ever linking it to what came before.' },
  ],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core', title: 'La règle de la phrase fondue', sheetId: 'sheet-fusion',
  examples: [
    ex(E(2231), 'citer et trancher, dans la même proposition'),
    ex(E(2232), 'les connecteurs qui relient une citation à une décision'),
    ex(E(2237), 'sans connecteur, deux phrases voisines, jamais une seule'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['phrasefondue'],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', size: 'lg',
  title: 'Fondue, ou non fondue', frSub: 'Repère le connecteur, ou son absence',
  groups: [
    grp('Des phrases fondues', [
      it(E(2229), 'cite le document 2 ET décide'),
      it(E(2235), 'cite le document 3 ET décide'),
    ], chk('Ces deux phrases tiennent ensemble parce que...', ['elles sont longues', 'un connecteur relie la citation à la décision'], 1,
      'La longueur ne fait rien : seul le connecteur fond les deux. EN: length does nothing; only the connector fuses the two.')),
    grp('Des phrases non fondues', [
      it(E(2230), 'deux phrases voisines, jamais reliées'),
      it(E(2236), '« à mon avis », qui ferme la phrase sur elle-même'),
    ], chk('Ces deux exemples séparent...', ['le document cité et la décision personnelle', 'le français et l’anglais'], 0,
      'Exactement la faute que l’acte 1 a nommée. EN: exactly the fault act 1 named.')),
    ctl('Le remède', 'Pour fondre une phrase non fondue, il faut surtout...', ['la raccourcir', 'ajouter un connecteur qui relie la citation à la décision'], 1,
      '« Ce qui m’amène à », « ce qui justifie », par exemple. EN: "which leads me to", "which justifies", for example.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['phrasefondue'],
};

const A3_SCENE: Sec<'story'> = {
  ...scene('a3-scene', 'Un bloc qui résume, un bloc qui donne un avis', [
    { from: 'user', fr: src(E(2238)).fr, en: src(E(2238)).en },
    { from: 'coach', fr: src(E(2239)).fr, en: src(E(2239)).en },
    { from: 'narrator', fr: src(E(2240)).fr, en: src(E(2240)).en },
  ]),
  terms: ['phrasefondue'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Une phrase fondue', 'Une phrase fondue cite un document ET...', ['résume ce document une seconde fois', 'tranche une position, dans la même proposition'], 1,
    'Jamais dans deux phrases séparées. EN: never in two separate sentences.'),
  ctl('Le connecteur', 'Sans un connecteur comme « ce qui m’amène à »...', ['la citation et l’avis restent deux phrases voisines', 'la phrase devient automatiquement trop longue'], 0,
    'Le connecteur porte tout le poids de la fusion. EN: the connector carries the whole weight of the fusion.'),
  ctl('La faute de Farah', 'Farah avait écrit une partie qui résume, puis une partie qui donne son avis : c’est exactement...', ['une phrase fondue réussie', 'la moitié manquante que l’acte 7 nommera'], 1,
    'Deux blocs séparés, jamais fondus. EN: two separate blocks, never fused.'),
], ['phrasefondue']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Tenir le fil : citer et trancher dans la même phrase',
    opener: {
      line: 'Même citation, même idée : un connecteur fait toute la différence entre deux phrases voisines et une seule phrase qui pèse et qui tranche. EN: Same citation, same idea: one connector makes the whole difference between two neighbouring sentences and a single one that weighs and decides.',
      imageRef: 'lessons/c2-10-synthese-dissertation/act03.jpg',
    },
    sections: [],
    milestone: 'Tu fonds une citation et une décision dans la même phrase, grâce à un connecteur, plutôt que de les laisser dans deux phrases voisines. EN: You can fuse a citation and a decision in the same sentence, with a connector, rather than leaving them in two neighbouring sentences.',
    estScreens: 20, restPoints: ['a3-groupe'],
  },
  sections: [A3_DECK, A3_EXEMPLES, A3_GROUPE, A3_SCENE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA COMPRESSION : CHOISIR CE QUI COMPTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a4-table', layer: 'core', sheetId: 'sheet-compression',
  title: 'Dense, compressée fidèlement, ou trahie',
  cols: ['Phrase dense', 'Compression fidèle', 'Compression trahie'],
  rows: [
    { cells: [src(E(2244)).fr, src(E(2245)).fr, src(E(2246)).fr], say: src(E(2245)).fr,
      detail: { title: 'Le gain du document 1', body: 'La version fidèle garde la fracture ; la version trahie l’efface. EN: the faithful version keeps the split; the betrayed version erases it.', say: src(E(2246)).fr } },
    { cells: [src(E(2247)).fr, src(E(2248)).fr, src(E(2249)).fr], say: src(E(2248)).fr,
      detail: { title: 'Le coût du document 2', body: 'La version trahie inverse même le sens du document. EN: the betrayed version even reverses the document’s meaning.', say: src(E(2249)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['chiffrequinuance'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core', title: 'Compresser sans trahir',
  examples: [
    ex(E(2250), 'choisir le mot qui porte la nuance'),
    ex(E(2251), 'raccourcir par le mot juste, pas par la suppression'),
    ex(E(2256), 'la contrainte de mots ne justifie jamais de perdre le chiffre qui nuance'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['chiffrequinuance'],
};

const A4_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-groupe', layer: 'core', size: 'lg',
  title: 'Compression fidèle, ou trahie', frSub: 'Repère ce que chaque version a perdu',
  groups: [
    grp('Garder le chiffre qui nuance', [
      it(E(2254), 'pourquoi « moins d’un point » n’est pas un détail'),
      it(E(2255), 'la première phrase qu’une compression paresseuse sacrifie'),
    ], chk('Sous une contrainte de mots, la phrase la plus menacée est...', ['la plus longue', 'celle qui contredit, même en partie, la phrase d’avant'], 1,
      'La nuance disparaît avant la longueur. EN: the nuance disappears before the length.')),
    grp('Reconnaître une trahison', [
      it(E(2246), 'un gain moyen devenu un gain universel'),
      it(E(2249), 'un coût caché devenu aucun coût caché'),
    ], chk('Ces deux versions trahissent leur document source parce qu’elles...', ['sont trop courtes', 'effacent ou inversent une nuance réelle'], 1,
      'La longueur n’est pas le problème ; l’idée perdue l’est. EN: length is not the problem; the lost idea is.')),
    ctl('Avant de couper', 'Avant de couper une phrase trop longue, demande-toi toujours si tu coupes...', ['de la longueur, ou une idée', 'du français, ou de l’anglais'], 0,
      'Coupe la longueur ; ne coupe jamais une idée. EN: cut the length; never cut an idea.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['chiffrequinuance'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Compresser', 'Compresser une phrase dense, c’est choisir...', ['le mot qui porte la nuance', 'les mots les plus courts possibles'], 0,
    'Jamais au prix de la nuance. EN: never at the cost of the nuance.'),
  ctl('Le chiffre qui nuance', 'Sous un nombre de mots serré, ce chiffre est souvent...', ['le premier ajouté', 'le premier sacrifié'], 1,
    'La contrainte ne le justifie jamais. EN: the constraint never justifies it.'),
  ctl('Une bonne compression', 'Une bonne compression tient en peu de mots...', ['moins d’idées que l’original', 'la même idée que l’original, plus court'], 1,
    'Dix mots peuvent tenir ce qu’une mauvaise compression perd en une phrase entière. EN: ten words can hold what a bad compression loses across a whole sentence.'),
], ['chiffrequinuance']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La compression : choisir ce qui compte',
    opener: {
      line: 'La même phrase dense peut devenir plus courte en gardant sa nuance, ou plus courte en la perdant : ici tu apprends à toujours choisir la première voie. EN: The same dense sentence can get shorter while keeping its nuance, or shorter while losing it: here you learn to always choose the first path.',
      imageRef: 'lessons/c2-10-synthese-dissertation/act04.jpg',
    },
    sections: [],
    milestone: 'Tu compresses une phrase dense sous un nombre de mots serré sans jamais perdre le chiffre qui la nuance. EN: You can compress a dense sentence under a tight word count without ever losing the figure that qualifies it.',
    estScreens: 16, restPoints: ['a4-table'],
  },
  sections: [A4_TABLE, A4_EXEMPLES, A4_GROUPE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — CE QU'ON NE TRAHIT JAMAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', title: 'Trois gestes interdits',
  errors: [
    { wrong: src(E(2260)).fr, right: src(E(2261)).fr, why: 'Le document 1 ne donne aucun chiffre sur le changement d’emploi.' },
    { wrong: src(E(2262)).fr, right: src(E(2263)).fr, why: 'Le document 3 ne prend pas position entre bureau et télétravail.' },
    { wrong: src(E(2264)).fr, right: src(E(2265)).fr, why: 'Aucun des trois documents ne parle de santé mentale.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['fideliteserree'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a5-exemples', layer: 'core', title: 'La fidélité, même sous la contrainte',
  examples: [
    ex(E(2259), 'les trois gestes interdits, quelle que soit la contrainte'),
    ex(E(2268), 'attribuer chaque affirmation à son document, par son numéro'),
    ex(E(2270), 'la fidélité ne se négocie pas'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fideliteserree'],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', size: 'lg',
  title: 'Repère la trahison', frSub: 'Inventé, inversé, ou ajouté',
  groups: [
    grp('Un chiffre inventé', [
      it(E(2260), 'un chiffre que le document 1 ne donne pas'),
      it(E(2266), 'inventer un chiffre (la faute)'),
    ], chk('Cette affirmation est fausse parce que le document 1...', ['donne ce chiffre ailleurs dans le texte', 'ne donne aucun chiffre sur ce sujet'], 1,
      'Le document 1 ne porte que sur la productivité et les surfaces de bureau. EN: document 1 covers only productivity and office space.')),
    grp('Une idée absente, ajoutée', [
      it(E(2264), 'une idée qu’aucun des trois documents ne contient'),
      it(E(2267), 'ajouter une idée absente (la faute)'),
    ], chk('Attribuer cette idée au dossier est une faute parce que...', ['elle est vraie en général', 'aucun des trois documents ne la contient'], 1,
      'Une idée vraie ailleurs reste absente de CE dossier. EN: an idea true elsewhere is still absent from THIS dossier.')),
    ctl('La position personnelle', 'Une position personnelle peut aller plus loin que les documents, mais jamais en...', ['citant leur numéro', 'leur prêtant une phrase qu’ils ne contiennent pas'], 1,
      'La fidélité protège autant le lecteur que l’auteur de la copie. EN: fidelity protects the reader as much as the exam-taker.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fideliteserree'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Les trois gestes interdits', 'Quelle que soit la contrainte de mots, il reste interdit de...', ['résumer un document brièvement', 'inventer un chiffre, inverser un document, ajouter une idée absente'], 1,
    'La fidélité ne se négocie jamais. EN: fidelity is never negotiated.'),
  ctl('Le document 3', 'Prétendre que le document 3 préfère le bureau à temps plein est une faute parce qu’il...', ['ne prend pas position entre bureau et télétravail', 'préfère en réalité le télétravail à temps plein'], 0,
    'Il porte sur la confusion entre disponibilité et performance. EN: it is about the confusion between availability and performance.'),
  ctl('Attribuer une affirmation', 'Citer chaque affirmation par le numéro de son document protège...', ['seulement l’auteur de la copie', 'autant le lecteur que l’auteur de la copie'], 1,
    'Le lecteur sait toujours d’où vient chaque idée. EN: the reader always knows where each idea comes from.'),
], ['fideliteserree']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Ce qu’on ne trahit jamais',
    opener: {
      line: 'Inventer un chiffre, inverser un document, ajouter une idée absente : trois gestes qu’aucune contrainte de mots ne justifie jamais. EN: Inventing a figure, reversing a document, adding an absent idea: three moves no word-count constraint ever justifies.',
      imageRef: 'lessons/c2-10-synthese-dissertation/act05.jpg',
    },
    sections: [],
    milestone: 'Tu restes fidèle aux trois documents sous la contrainte de mots, sans jamais inventer, inverser ou ajouter. EN: You stay faithful to the three documents under the word-count constraint, without ever inventing, reversing or adding.',
    estScreens: 16, restPoints: ['a5-groupe'],
  },
  sections: [A5_ERREURS, A5_EXEMPLES, A5_GROUPE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — CHOISIR SON PLAN POUR CE DOSSIER
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_RECAP: Sec<'examples'> = {
  type: 'examples', id: 'a6-recap', layer: 'core', sheetId: 'sheet-plan', title: 'Deux plans déjà connus',
  examples: [
    ex(E(2271), 'le plan analytique et le plan comparatif, déjà enseignés'),
    ex(E(2272), 'un plan dialectique forcerait une opposition absente du dossier'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A6_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-plan',
  title: 'Deux plans, appliqués à ce dossier', frSub: 'Jamais un plan pour ou contre',
  hint: 'Deux cartes. Le même dossier, deux plans possibles, aucun des deux pour/contre.',
  audio: REC('rec-c2-10-deux-plans'), say: REFRAME, terms: ['syntheseargumentee'],
  cards: [
    { head: 'Plan comparatif', label: 'trois manières de compter', fr: src(E(2273)).fr, sub: '[ehⁿ pwahⁿ ehⁿ zhest ehⁿ lee-MEET]',
      body: 'Compare non pas télétravail contre bureau, mais trois mesures différentes de ce qui compte. EN: compares not remote work against the office, but three different measures of what counts.' },
    { head: 'Plan analytique', label: 'constat, causes, enjeu', fr: src(E(2274)).fr, sub: '[ün mwa-YEN kee KASH ün frak-TÜR]',
      body: 'Part d’une moyenne qui cache une fracture, remonte aux causes, ouvre sur qui fixera les règles. EN: starts from an average hiding a split, traces the causes, opens onto who will set the rules.' },
  ],
};

const A6_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-groupe', layer: 'core', size: 'lg',
  title: 'Le bon plan vient du dossier', frSub: 'Jamais du sujet seul',
  groups: [
    ctl('Le plan de Camille', 'Camille choisit son plan à partir...', ['du sujet, tel qu’il est posé', 'des trois documents qu’elle a sous les yeux'], 1,
      'Un plan pour ou contre aurait forcé le document 3 à choisir un camp qu’il refuse. EN: a for-or-against plan would have forced document 3 to pick a side it refuses.'),
    ctl('Le document 3 et le plan dialectique', 'Forcer le document 3 dans un plan thèse/antithèse...', ['respecterait exactement sa position', 'lui ferait perdre sa position réelle'], 1,
      'Il refuse justement le clivage pour/contre. EN: it precisely refuses the for-or-against divide.'),
    ctl('Corriger un plan mal choisi', 'Un plan mal choisi se corrige surtout en...', ['améliorant les phrases qui le composent', 'remontant au dossier lui-même'], 1,
      'La correction vient du dossier, pas du style. EN: the correction comes from the dossier, not the style.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A6_SCENE: Sec<'story'> = {
  ...scene('a6-scene', 'D’où vient ton plan', [
    { from: 'coach', fr: src(E(2278)).fr, en: src(E(2278)).en },
    { from: 'user', fr: src(E(2279)).fr, en: src(E(2279)).en },
  ]),
  terms: ['syntheseargumentee'],
};

const A6_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a6-focus', layer: 'core', title: 'Choisir un plan, sans simplifier le dossier',
  points: [
    'Le bon plan n’est pas celui que le sujet préférerait ; c’est celui que la tension réelle entre les trois documents rend possible.',
    'Un dossier qui refuse le pour/contre n’appelle jamais un plan dialectique, même si le sujet y invite.',
    'Choisir un plan, à ce niveau, c’est d’abord refuser le plan qui simplifierait une tension que le dossier ne simplifie pas lui-même.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Ce dossier', 'Ce dossier appelle...', ['un plan pour ou contre le télétravail', 'un plan comparatif ou analytique, jamais pour/contre'], 1,
    'Les trois documents comptent trois choses différentes, pas deux camps. EN: the three documents count three different things, not two camps.'),
  ctl('Le plan comparatif', 'Ici, un plan comparatif compare...', ['télétravail contre bureau', 'trois manières de compter ce qui compte'], 1,
    'En points, en gestes, en limites. EN: in points, in gestures, in limits.'),
  ctl('Choisir un plan', 'Le bon plan vient...', ['du sujet tel qu’il est posé', 'de la tension réelle entre les documents'], 1,
    'Jamais l’inverse. EN: never the other way round.'),
], ['syntheseargumentee']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Choisir son plan pour ce dossier',
    opener: {
      line: 'Trois documents qui comptent trois choses différentes n’appellent pas un plan pour ou contre : ici tu apprends à choisir un plan que leur vraie tension rend possible. EN: Three documents counting three different things do not call for a for-or-against plan: here you learn to choose a plan their real tension actually allows.',
      imageRef: 'lessons/c2-10-synthese-dissertation/act06.jpg',
    },
    sections: [],
    milestone: 'Tu choisis, pour ce dossier précis, un plan comparatif ou analytique plutôt qu’un plan pour/contre forcé. EN: You can choose, for this specific dossier, a comparative or analytical plan rather than a forced for-or-against one.',
    estScreens: 20, restPoints: ['a6-groupe'],
  },
  sections: [A6_RECAP, A6_DECK, A6_GROUPE, A6_SCENE, A6_FOCUS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE PIÈGE : LA MOITIÉ MANQUANTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_PIEGE_CARDS: TrapCard[] = [
  { promptLabel: 'peser, sans jamais trancher', promptSound: src(E(2283)).fr, fr: 'Puisque les trois documents comptent différemment ce qui compte, je choisis de mesurer les livrables plutôt que les heures.', ipa: '/pɥisk le tʁwa dɔkymɑ̃ kɔ̃t difeʁamɑ̃ sə ki kɔ̃t ʒə ʃwazi də məzyʁe le livʁabl plyto kə lezœʁ/', tip: src(E(2288)).fr },
  { promptLabel: 'trancher, sans jamais peser', promptSound: src(E(2284)).fr, fr: 'Le document 3 montre que la limite, pas le lieu, est le vrai risque, ce qui justifie de fixer des jours communs plutôt qu’un nombre de jours imposé.', ipa: '/lə dɔkymɑ̃ tʁwa mɔ̃tʁ kə la limit pa lə ljø ɛ lə vʁɛ ʁisk sə ki ʒystifi də fikse de ʒuʁ kɔmœ̃/', tip: src(E(2288)).fr },
  { promptLabel: 'une liste, jamais une tension', promptSound: src(E(2285)).fr, fr: 'Les trois documents comptent ce qui compte autrement, ce qui m’amène à proposer une règle commune plutôt qu’un chiffre unique.', ipa: '/le tʁwa dɔkymɑ̃ kɔ̃t sə ki kɔ̃t otʁəmɑ̃ sə ki mamɛn a pʁopoze yn ʁɛgl kɔmyn/', tip: src(E(2288)).fr },
  { promptLabel: 'un avis sans aucune source', promptSound: src(E(2286)).fr, fr: 'Le gain moyen cache une fracture selon l’ancienneté, ce qui m’empêche d’affirmer que le télétravail profite également à toutes les équipes.', ipa: '/lə gɛ̃ mwajɛ̃ kaʃ yn fʁaktyʁ səlɔ̃ lɑ̃sjɛnte sə ki mɑ̃pɛʃ dafiʁme kə lə teletʁavaj pʁɔfit/', tip: src(E(2288)).fr },
  { promptLabel: 'une conclusion vide', promptSound: src(E(2287)).fr, fr: 'Plutôt que de constater la complexité du sujet, je tranche : des jours communs fixes et une mesure par livrables répondent aux trois documents à la fois.', ipa: '/plyto kə də kɔ̃state la kɔ̃plɛksite dy syʒɛ ʒə tʁɑ̃ʃ de ʒuʁ kɔmœ̃ fiks e yn məzyʁ paʁ livʁabl/', tip: src(E(2288)).fr },
];

const A7_STEPS: TrapStep[] = [
  { label: 'Le piège', kind: 'rule', title: 'Le piège' },
  { label: 'Cinq cartes', kind: 'cards', title: 'Cinq moitiés, un seul remède' },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les cinq moitiés' },
  { label: 'À toi', kind: 'drill', title: 'Cinq moitiés, cinq remèdes', gate: true },
];

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'Cinq moitiés, un seul remède',
  rule: {
    title: 'Peser sans trancher, ou trancher sans peser, est le même piège',
    body: `${src(E(2291)).fr} EN: ${src(E(2291)).en}`,
  },
  cards: A7_PIEGE_CARDS,
  drill: [
    { promptSay: 'Compter ce que trois documents comptent, sans jamais ajouter sa propre décision, c’est un piège parce qu’il manque ... .', opts: ['la position personnelle', 'un quatrième document'], correct: 0 },
    { promptSay: 'Trancher une position sans jamais citer un document, c’est un piège parce qu’il manque ... .', opts: ['le poids d’une source réelle', 'un vocabulaire plus soutenu'], correct: 0 },
    { promptSay: 'Résumer document 1, puis document 2, puis document 3, c’est un piège parce qu’il manque ... .', opts: ['la tension qui les traverse tous', 'un quatrième résumé'], correct: 0 },
    { promptSay: 'Affirmer un bénéfice universel, c’est un piège parce qu’il manque ... .', opts: ['le chiffre qui nuance ce bénéfice', 'une traduction en anglais'], correct: 0 },
    { promptSay: 'Conclure en disant seulement que le sujet est complexe, c’est un piège parce qu’il manque ... .', opts: ['la décision que ce constat annonçait', 'une phrase plus longue'], correct: 0 },
    { promptSay: 'Le remède à ces cinq moitiés est le même : relire chaque phrase et vérifier qu’elle ... .', opts: ['pèse ET tranche, les deux à la fois', 'contient au moins dix mots'], correct: 0 },
    { promptSay: 'Une copie qui pèse beaucoup peut sembler complète alors qu’elle...', opts: ['ne tranche jamais', 'cite trop de documents'], correct: 0 },
    { promptSay: 'Le réflexe à corriger n’est pas de mal citer un document, c’est de croire qu’... .', opts: ['une seule des deux moitiés suffit', 'il faut citer les trois documents dix fois'], correct: 0 },
  ],
  steps: A7_STEPS,
  audio: REC('rec-c2-10-cinq-moities'), say: REFRAME, terms: ['moitiemanquante'],
};

const A7_SCENE: Sec<'story'> = {
  ...scene('a7-scene', 'Je ne dis rien', [
    { from: 'user', fr: src(E(2289)).fr, en: src(E(2289)).en },
    { from: 'coach', fr: src(E(2290)).fr, en: src(E(2290)).en },
  ]),
  terms: ['moitiemanquante'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La moitié manquante', 'Une copie qui pèse longuement les trois documents sans jamais décider...', ['réussit l’exercice', 'tient seulement la moitié du genre demandé'], 1,
    'Peser sans trancher reste incomplet. EN: weighing without deciding stays incomplete.'),
  ctl('Le remède', 'Le remède aux cinq moitiés est de relire chaque phrase et de vérifier qu’elle...', ['cite au moins deux documents', 'pèse ET tranche, les deux à la fois'], 1,
    'Le même remède pour les cinq pièges. EN: the same remedy for all five traps.'),
  ctl('Avant de rendre sa copie', 'Avant de rendre sa copie, il faut compter...', ['le nombre exact de phrases', 'si chaque document a été pesé et si la position a été tranchée'], 1,
    'Les deux à la fois, jamais l’un sans l’autre. EN: both at once, never one without the other.'),
], ['moitiemanquante']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le piège : la moitié manquante',
    opener: {
      line: 'Peser longuement sans jamais décider, ou décider sans jamais peser : une copie peut sembler complète en ne tenant qu’une des deux moitiés. EN: Weighing at length without ever deciding, or deciding without ever weighing: an answer can look complete while holding only one of the two halves.',
      imageRef: 'lessons/c2-10-synthese-dissertation/act07.jpg',
    },
    sections: [],
    milestone: 'Tu repères les cinq façons de ne tenir qu’une moitié du genre fondu, et tu corriges chacune par le même remède. EN: You can spot the five ways of holding only half the fused genre, and correct each with the same remedy.',
    estScreens: 14, restPoints: [],
  },
  sections: [A7_PIEGE, A7_SCENE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — TA SYNTHÈSE-DISSERTATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a8-modele', layer: 'core', questionsInModal: true,
  title: 'Une synthèse-dissertation, modèle', frSub: 'Les trois documents, pesés et tranchés',
  text: MODELE_SYNTHESE_DISSERTATION,
  glossary: [
    { word: 'fracture', en: 'split, divide', note: 'Une coupure nette à l’intérieur d’un groupe qu’on croyait uniforme. EN: a clean split inside a group assumed uniform.' },
    { word: 'ronge', en: 'gnaws at', note: 'Use ici au sens figuré : affaiblit peu à peu, de l’intérieur. EN: used figuratively here: weakens little by little, from within.' },
  ],
  questions: [
    { q: 'Combien de documents ce modèle pèse-t-il avant de trancher sa position, et dans quel ordre.', a: 'Les trois, dans l’ordre : document 1 (la fracture derrière le gain moyen), document 2 (le coût invisible), document 3 (la confusion entre disponibilité et performance).' },
    { q: 'Où, précisément, le modèle fond-il une citation et une décision dans la même phrase.', a: '« Fixer des jours communs par équipe, comme le propose le document 3, répond directement au risque que nomme le document 2 » relie deux documents à une décision, dans une seule phrase.' },
    { q: 'La conclusion du modèle ouvre-t-elle une question vide, ou une question qui vient de la position déjà tranchée.', a: 'Elle vient de la position tranchée : qui, sans service de ressources humaines, fera tenir les règles que le texte vient de proposer.' },
  ],
  audio: REC('rec-c2-10-modele'), say: REFRAME, terms: ['syntheseargumentee'],
};

const A8_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a8-plan', layer: 'core', sheetId: 'sheet-plan',
  title: 'Quatre étapes pour ta synthèse-dissertation',
  steps: [
    `1. ${src(E(2293)).fr} EN: ${src(E(2293)).en}`,
    `2. ${src(E(2294)).fr} EN: ${src(E(2294)).en}`,
    `3. ${src(E(2295)).fr} EN: ${src(E(2295)).en}`,
    `4. ${src(E(2296)).fr} EN: ${src(E(2296)).en}`,
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A8_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a8-usages', layer: 'core', title: 'Peser et trancher, phrase après phrase',
  cases: [
    { situation: 'Tu refuses de juger par un seul indicateur', fr: src(E(2297)).fr, en: src(E(2297)).en },
    { situation: 'Tu mesures la réussite autrement que par les heures', fr: src(E(2298)).fr, en: src(E(2298)).en },
    { situation: 'Tu refuses de choisir entre deux coûts différents', fr: src(E(2299)).fr, en: src(E(2299)).en },
    { situation: 'Tu vérifies ta dernière phrase avant de conclure', fr: src(E(2300)).fr, en: src(E(2300)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a8-scenario', layer: 'core', title: 'Tu répètes ta copie à voix haute avec Hadrien',
  setting: 'Avant l’épreuve, Camille répète sa copie à voix haute avec Hadrien, qui joue l’examinateur.',
  turns: [
    {
      ai: 'Et ta première phrase, qu’est-ce qu’elle pèse, qu’est-ce qu’elle tranche.', en: 'And your first sentence, what does it weigh, what does it decide.',
      user: src(E(2301)).fr, userEn: 'Since document 1 shows an average gain falling under one point for recent hires, I refuse from the outset any single-sided reading. (Weighs document 1, decides against a one-sided reading, in the same sentence.)',
      alts: [
        { fr: src(E(2302)).fr, en: 'I would rather open on document 2, because its idea, a cost invisible in the tables, directly frames my final position. (Opens on a different document, same fusion logic.)' },
        { fr: src(E(2303)).fr, en: 'I would rather start with document 3, because its reframing of the problem shapes the rest of my plan. (A third valid opening, built from the reframing document instead.)' },
      ],
    },
    {
      ai: 'Et ta position finale, elle tient sur les trois documents, ou sur un seul.', en: 'And your final position, does it hold across all three documents, or just one.',
      user: src(E(2304)).fr, userEn: 'My position holds on all three documents at once: I fix common days against document 2’s cost, and I measure deliverables against document 3’s confusion. (All three documents fused into one proposal.)',
      alts: [
        { fr: src(E(2305)).fr, en: 'I would rather build a comparative plan: three ways of counting what counts, then the shared rule that answers all three at once. (A comparative-plan strategy.)' },
        { fr: src(E(2306)).fr, en: 'I start from the observation of an average hiding a split, trace the causes, then open onto who will set the rule. (An analytical-plan strategy, a different structure entirely.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

/** THE GRADED TASK. One fused text on the same three-document dossier,
 *  graded on fidelity, tension-based synthesis, a structured position,
 *  sentence-level fusion, and compression under the word budget. */
const A8_MISSION: Sec<'task'> = {
  type: 'task', id: 'a8-mission', title: 'Ta synthèse-dissertation', frSub: 'Épreuve écrite',
  brief: `Ton tuteur te donne le même dossier, pour l’épreuve cette fois. Voici les trois documents. ${DOSSIER_FULL}`,
  briefEn: 'Your tutor gives you the same dossier, this time for the real exercise. The three documents are printed above so you can write with them in front of you.',
  produce: 'Écris un texte unique de 280 à 400 mots qui pèse les trois documents avec fidélité, sans en inventer ni en inverser le sens, et qui tranche, phrase après phrase, une position personnelle structurée par un plan, sans jamais séparer la synthèse et l’avis en deux blocs.',
  responseSpec: { kind: 'text', minWords: 280, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'fidelite', label: 'La fidélité aux trois documents', maxPoints: 4, descriptors: [
        '4 : Les trois documents sont cités avec exactitude, en gardant la nuance de chacun (le gain qui tombe sous un point, le coût invisible, la confusion disponibilité/performance) ; aucun chiffre inventé, aucun sens inversé.',
        '3 : Les trois documents sont cités avec exactitude, mais au moins une nuance clé disparaît du résumé.',
        '2 : Un document est cité de façon approximative, ou une affirmation lui est attribuée sans en être exactement sûre.',
        '1 : Un chiffre est inventé, ou un document est présenté comme disant le contraire de ce qu’il dit.',
      ] },
      { key: 'synthese', label: 'La synthèse organisée par enjeu', maxPoints: 4, descriptors: [
        '4 : Le texte est organisé autour de ce qui est vraiment en tension (ce qui compte, qui en porte le coût) à travers les trois documents, jamais un résumé document par document.',
        '3 : Le texte est surtout organisé par enjeu, mais un paragraphe glisse vers un résumé document par document.',
        '2 : Le texte reste surtout document par document, avec un seul lien explicite entre deux documents.',
        '1 : Résumé document par document, sans tension nommée entre les trois.',
      ] },
      { key: 'these', label: 'Une position structurée, pas un simple constat', maxPoints: 4, descriptors: [
        '4 : Une position personnelle claire, structurée par un plan (comparatif ou analytique, jamais pour/contre forcé), qui répond à la tension des trois documents et s’ouvre sur une question qui découle de cette position.',
        '3 : Une position est donnée, mais reste proche d’une reformulation de la tension plutôt qu’une vraie décision.',
        '2 : Aucune position claire, ou une conclusion qui ne fait que reciter les trois documents.',
        '1 : Aucune position, ou une opinion sans lien avec les trois documents.',
      ] },
      { key: 'fusion', label: 'La citation et la décision dans la même phrase', maxPoints: 4, descriptors: [
        '4 : La plupart des phrases clés fondent une citation d’un document ET une décision personnelle, jamais un bloc synthèse suivi d’un bloc avis séparé.',
        '3 : La fusion existe dans la plupart des paragraphes, mais au moins un paragraphe reste un bloc pur synthèse ou un bloc pur avis.',
        '2 : Le texte se divise visiblement en une moitié synthèse et une moitié avis.',
        '1 : Les deux genres ne sont jamais fondus, exactement la faute nommée à l’acte 1.',
      ] },
      { key: 'compression', label: 'Le choix de ce qui compte, sous contrainte de mots', maxPoints: 4, descriptors: [
        '4 : Chaque fait cité gagne sa place (aucune idée répétée, aucun détail à faible valeur), et le texte reste dans la fourchette de mots demandée.',
        '3 : Le texte reste globalement serré, avec une idée répétée ou un détail à faible valeur qui pourrait être coupé.',
        '2 : Le texte est nettement rempli de redites, ou sort nettement de la fourchette de mots.',
        '1 : Le texte est surtout rempli de redites, ou très loin de la fourchette de mots.',
      ] },
    ],
  },
  scaffold: [
    'Le document … avance …, mais …, ce qui m’amène à …',
    'Ces trois documents ne s’opposent pas sur …, mais sur …',
    'Je défends donc …, car …',
    '… répond directement au risque que nomme le document …',
    'Reste une question que ces trois documents laissent ouverte : …',
  ],
  modelAnswer: MODELE_SYNTHESE_DISSERTATION,
  modelAnswerEn: MODELE_SYNTHESE_DISSERTATION_EN,
  watchFor: [
    { pattern: 'The text splits into one neutral-synthesis block followed by a separate opinion block, with no sentence that fuses a citation and a decision.', criterion: 'fusion', feedback: 'Fonds chaque phrase : cite un document, puis tranche, dans la même proposition. EN: fuse every sentence: cite a document, then decide, in the same clause.', ref: 'a3-deck' },
    { pattern: 'Document 1’s four-point average is cited with no mention of the under-one-point figure for recently hired employees.', criterion: 'fidelite', feedback: 'Garde le chiffre qui nuance ; ne le sacrifie jamais pour gagner de la place. EN: keep the qualifying figure; never sacrifice it to save space.', ref: 'a4-table' },
    { pattern: 'A figure, claim or position is invented, reversed, or attributed to a document that does not contain it.', criterion: 'fidelite', feedback: 'Attribue chaque affirmation à son document, par son numéro, et vérifie-la avant de l’écrire. EN: attribute every claim to its document, by number, and check it before writing it.', ref: 'a5-erreurs' },
    { pattern: 'The response summarises document 1, then document 2, then document 3 in turn, with no paragraph holding more than one document at once.', criterion: 'synthese', feedback: 'Cherche la question commune aux trois documents, jamais trois résumés séparés. EN: look for the shared question across the three documents, never three separate summaries.', ref: 'a2-groupe' },
    { pattern: 'The conclusion only restates that the topic is complex, without taking or defending any personal position.', criterion: 'these', feedback: 'Une conclusion vide est la moitié manquante : ajoute la décision que ton constat annonçait. EN: an empty conclusion is the missing half: add the decision your observation was leading to.', ref: 'a7-piege' },
    { pattern: 'The response is noticeably over or under the word budget, mostly through restated ideas rather than new content.', criterion: 'compression', feedback: 'Coupe la longueur, jamais une idée ; chaque phrase doit gagner sa place. EN: cut length, never an idea; every sentence must earn its place.', ref: 'a4-check' },
  ],
  graderNotes: [
    'Word count: 280 to 400, with 10% tolerance (252 to 440) before length costs points. A title line does not count.',
    'The task marks the FUSION of synthesis and argument, fidelity to the three documents, and a structured position, not the political merit of any particular stance on remote work.',
    'Accept either plan type (comparative or analytical) as long as it is not a forced pour/contre split that misreads document 3’s own refusal of that divide.',
    'Accept any correct, document-grounded position, even one different from the model answer’s, as long as it is argued from the three documents and not disconnected from them.',
    'Do not mark grammar beyond what interferes with comprehension; this task marks fused synthesis-argumentation, not a grammar point (C2 has none, per C2-BUILD-PLAN.md).',
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A8_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a8-parler', layer: 'core', title: 'Dis ta synthèse-dissertation à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-genre',
  title: 'La synthèse-dissertation sur un seul écran',
  rows: [
    { k: 'le geste', v: 'peser une source, puis trancher, dans la même phrase', say: src(E(2202)).fr,
      detail: { title: 'Un seul texte, un seul mouvement', body: 'Jamais deux feuilles séparées. EN: never two separate sheets.', say: src(E(2209)).fr } },
    { k: 'la lecture', v: 'par enjeu commun, jamais document par document', say: src(E(2216)).fr,
      detail: { title: 'La question commune', body: 'Ce qui compte, et qui en porte le coût. EN: what counts, and who bears its cost.', say: src(E(2217)).fr } },
    { k: 'la phrase fondue', v: 'cite un document ET tranche, dans la même proposition', say: src(E(2229)).fr,
      detail: { title: 'Le connecteur qui pèse et qui tranche', body: '« Ce qui m’amène à », par exemple. EN: "which leads me to", for example.', say: src(E(2231)).fr } },
    { k: 'la compression', v: 'garde le chiffre qui nuance, coupe la longueur', say: src(E(2245)).fr,
      detail: { title: 'Jamais perdre la nuance', body: 'La contrainte de mots ne la justifie jamais. EN: the word-count constraint never justifies it.', say: src(E(2256)).fr } },
    { k: 'la moitié manquante', v: 'peser sans trancher, ou trancher sans peser', say: src(E(2291)).fr,
      detail: { title: 'Le remède', body: 'Relis chaque phrase : pèse-t-elle ET tranche-t-elle. EN: reread every sentence: does it weigh AND decide.', say: src(E(2288)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu lis maintenant trois sources denses comme un seul dossier, par enjeu commun plutôt que document par document, et tu écris un seul texte qui pèse chacune avec fidélité tout en tranchant, phrase après phrase, une position personnelle structurée par un plan que la tension réelle du dossier rend possible. Le piège qui reste est toujours le même : tenir une seule des deux moitiés, peser sans trancher, ou trancher sans peser. Avant l’épreuve, reprends un dossier déjà annoté et vérifie, phrase par phrase, que chacune pèse une source et tranche une position. EN: Before any exam, take a dossier you have already annotated and check, sentence by sentence, that each one weighs a source and decides a position.',
  stats: [
    { k: 'La lecture', v: 'par enjeu commun, jamais document par document' },
    { k: 'La phrase', v: 'fondue : une citation ET une décision' },
    { k: 'La compression', v: 'le chiffre qui nuance, gardé, jamais sacrifié' },
    { k: 'La fidélité', v: 'jamais inventée, jamais inversée, jamais ajoutée' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une phrase tient une seule moitié du genre. Récris-la pour tenir les deux. EN: A sentence holds only one half of the genre; rewrite it to hold both.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-genre', label: 'Un genre à part entière', targets: ['deux-textes'],
      questions: [
        mc('Camille remettait à son tuteur...', ['un seul texte fondu', 'deux feuilles séparées'], 1, 'Une synthèse neutre, puis, à part, son avis personnel. EN: a neutral synthesis, then, separately, her own opinion.', 'a1-check'),
        mc(`${Cap(C110_REF)} enseignait la synthèse et l’essai...`, ['dans un seul texte fondu', 'comme deux exercices séparés'], 1, 'Jamais fondus en un seul texte. EN: never fused into one single text.', 'a1-acquis'),
        mc('Le geste que cette leçon ajoute est...', ['peser et trancher, dans la même phrase', 'mémoriser plus de vocabulaire'], 0, 'Un seul mouvement, pas deux étapes. EN: one single movement, not two steps.', 'a1-outils'),
        tI('Complète. Un mot.', 'Une bonne copie pèse les sources, puis ... , dans le même texte.', 'tranche', 'Jamais sur deux feuilles séparées. EN: never on two separate sheets.', 'a1-check'),
        tI('Complète. Un mot.', 'Trancher sans peser laisse une opinion qui ne doit rien aux ... fournis.', 'documents', 'Une opinion déconnectée du dossier. EN: an opinion disconnected from the dossier.', 'a1-acquis'),
        eS('Camille écrit sa synthèse sur une feuille, et son avis sur une autre.', 'Camille écrit un seul texte qui pèse les documents et tranche sa position.', 'Un seul texte, pas deux feuilles. EN: one single text, not two sheets.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-lecture', label: 'Lire trois sources denses', targets: ['lecture-isolee'],
      questions: [
        mc('Lire un dossier dense par enjeu, c’est...', ['résumer chaque document séparément', 'chercher la tension commune aux trois'], 1, 'Jamais trois résumés séparés. EN: never three separate summaries.', 'a2-exemples'),
        mc('Le gain de quatre points, dans le document 1...', ['vaut pour toutes les équipes également', 'tombe sous un point pour les plus récents'], 1, 'Une moyenne qui cache une fracture. EN: an average hiding a split.', 'a2-table'),
        mc('Le document 3 déplace la question vers...', ['la limite entre disponibilité et performance', 'le prix du mètre carré de bureau'], 0, 'Loin du lieu de travail. EN: away from the place of work.', 'a2-lecture'),
        tI('Complète. Un mot.', 'La question commune aux trois documents n’est pas pour ou contre, mais ce qui ... .', 'compte', 'Et qui en porte le coût. EN: and who bears its cost.', 'a2-exemples'),
        tI('Complète. Un mot.', 'Une statistique moyenne cache souvent la sous-catégorie qui la ... en partie.', 'contredit', 'Le gain moyen masque une fracture. EN: the average gain masks a split.', 'a2-groupe'),
        eS('Je résume le document 1, puis le document 2, puis le document 3, chacun à part.', 'Je lis les trois documents ensemble, par la question commune qu’ils posent tous.', 'Jamais trois résumés séparés. EN: never three separate summaries.', 'a2-scene'),
      ],
    },
    {
      id: 'r3-fusion', label: 'Citer et trancher dans la même phrase', targets: ['phrase-non-fondue'],
      questions: [
        mc('Une phrase fondue cite un document ET...', ['le résume une seconde fois', 'tranche une position, dans la même proposition'], 1, 'Jamais dans deux phrases séparées. EN: never in two separate sentences.', 'a3-check'),
        mc('Sans un connecteur comme « ce qui m’amène à »...', ['la citation et l’avis restent deux phrases voisines', 'la phrase devient automatiquement trop longue'], 0, 'Le connecteur porte tout le poids. EN: the connector carries all the weight.', 'a3-exemples'),
        mc('« Le document 2 montre... Je pense par ailleurs que... » est un exemple de...', ['phrase fondue', 'phrases non fondues'], 1, 'Deux phrases voisines, jamais reliées. EN: two neighbouring sentences, never linked.', 'a3-deck'),
        tI('Complète. Un mot.', 'Une phrase fondue ne se repère pas par sa longueur, mais par le ... qui relie la source à la décision.', 'connecteur', 'Le mot qui fond les deux. EN: the word that fuses the two.', 'a3-exemples'),
        tI('Complète. Un mot.', 'Farah avait un bloc qui résume, puis un bloc où elle donne son ... .', 'avis', 'Exactement la faute de l’acte 1. EN: exactly act 1’s fault.', 'a3-scene'),
        eS('Le document 3 déplace le problème vers la limite. Les livrables sont une bonne mesure, à mon avis.', 'Puisque le document 3 déplace le problème vers la limite, mesurer les livrables règle directement ce point.', 'Le connecteur fond citation et décision. EN: the connector fuses citation and decision.', 'a3-groupe'),
      ],
    },
    {
      id: 'r4-compression', label: 'La compression : choisir ce qui compte', targets: ['nuance-perdue'],
      questions: [
        mc('Compresser une phrase dense, c’est choisir...', ['le mot qui porte la nuance', 'les mots les plus courts possibles'], 0, 'Jamais au prix de la nuance. EN: never at the cost of the nuance.', 'a4-check'),
        mc('« Le télétravail augmente la productivité de quatre points » est une compression...', ['fidèle', 'trahie'], 1, 'Elle efface la fracture selon l’ancienneté. EN: it erases the split by seniority.', 'a4-table'),
        mc('Sous un nombre de mots serré, la phrase la plus menacée est...', ['la plus longue', 'celle qui contredit, même en partie, la phrase d’avant'], 1, 'La nuance disparaît avant la longueur. EN: the nuance disappears before the length.', 'a4-groupe'),
        tI('Complète. Un mot.', 'Une bonne compression tient en dix mots ce qu’une mauvaise compression perd en une phrase ... .', 'entière', 'Dix mots peuvent suffire. EN: ten words can be enough.', 'a4-exemples'),
        tI('Complète. Un mot.', 'Avant de couper une phrase, demande-toi si tu coupes de la longueur, ou une ... .', 'idée', 'Coupe la longueur, jamais une idée. EN: cut the length, never an idea.', 'a4-groupe'),
        eS('Le télétravail n’a aucun coût caché.', 'Un coût invisible dans les tableaux peut peser plus, à terme, qu’une économie de bureau visible.', 'La version trahie inverse le sens du document. EN: the betrayed version reverses the document’s meaning.', 'a4-table'),
      ],
    },
    {
      id: 'r5-fidelite', label: 'Ce qu’on ne trahit jamais', targets: ['chiffre-invente'],
      questions: [
        mc('Quelle que soit la contrainte de mots, il reste interdit de...', ['résumer un document brièvement', 'inventer un chiffre, inverser un document, ajouter une idée absente'], 1, 'La fidélité ne se négocie jamais. EN: fidelity is never negotiated.', 'a5-check'),
        mc('Le document 1 donne un chiffre sur...', ['la productivité et les surfaces de bureau', 'le changement d’emploi dans l’année'], 0, 'Il ne porte que sur ces deux points. EN: it covers only these two points.', 'a5-erreurs'),
        mc('Aucun des trois documents ne parle de...', ['santé mentale', 'coût invisible'], 0, 'Attribuer cette idée au dossier ajoute ce qu’il ne contient pas. EN: attributing this idea to the dossier adds what it does not contain.', 'a5-groupe'),
        tI('Complète. Un mot.', 'Attribuer chaque affirmation à son document, par son ... , protège le lecteur.', 'numéro', 'Document 1, 2 ou 3. EN: document 1, 2 or 3.', 'a5-exemples'),
        tI('Complète. Un mot.', 'La fidélité ne se négocie pas contre la contrainte de mots : elle se ... , même la plus serrée.', 'tient', 'Jamais un compromis. EN: never a compromise.', 'a5-check'),
        eS('Selon le document 1, soixante pour cent des salariés en télétravail changent d’emploi dans l’année.', 'Le document 1 ne donne aucun chiffre sur le changement d’emploi.', 'Un chiffre inventé n’est jamais acceptable. EN: an invented figure is never acceptable.', 'a5-erreurs'),
      ],
    },
    {
      id: 'r6-plan', label: 'Choisir son plan pour ce dossier', targets: ['plan-force'],
      questions: [
        mc('Ce dossier appelle...', ['un plan pour ou contre le télétravail', 'un plan comparatif ou analytique, jamais pour/contre'], 1, 'Trois mesures différentes, pas deux camps. EN: three different measures, not two camps.', 'a6-check'),
        mc('Un plan comparatif, ici, compare...', ['télétravail contre bureau', 'trois manières de compter ce qui compte'], 1, 'En points, en gestes, en limites. EN: in points, in gestures, in limits.', 'a6-deck'),
        mc('Forcer le document 3 dans un plan thèse/antithèse lui ferait perdre...', ['sa longueur', 'sa position réelle'], 1, 'Il refuse justement le clivage pour/contre. EN: it precisely refuses the for-or-against divide.', 'a6-groupe'),
        tI('Complète. Un mot.', 'Le bon plan vient de la ... réelle entre les trois documents, jamais du sujet seul.', 'tension', 'La tension, pas le sujet. EN: the tension, not the topic.', 'a6-focus'),
        tI('Complète. Un mot.', 'Un plan mal choisi se corrige en remontant au ... lui-même.', 'dossier', 'Jamais seulement par le style. EN: never only through style.', 'a6-groupe'),
        eS('Je choisis mon plan directement à partir du sujet posé.', 'Je choisis mon plan à partir des trois documents que j’ai sous les yeux.', 'Le plan vient du dossier, pas du sujet seul. EN: the plan comes from the dossier, not the topic alone.', 'a6-scene'),
      ],
    },
    {
      id: 'r7-piege', label: 'La moitié manquante', targets: ['moitie-manquante'],
      questions: [
        mc('Une copie qui pèse longuement sans jamais décider...', ['réussit l’exercice', 'tient seulement la moitié du genre demandé'], 1, 'Peser sans trancher reste incomplet. EN: weighing without deciding stays incomplete.', 'a7-check'),
        mc('Le remède aux cinq moitiés est de vérifier que chaque phrase...', ['cite au moins deux documents', 'pèse ET tranche, les deux à la fois'], 1, 'Le même remède pour les cinq pièges. EN: the same remedy for all five traps.', 'a7-piege'),
        mc('« Ces trois documents montrent bien la complexité du sujet » est un exemple de...', ['conclusion vide', 'position tranchée'], 0, 'Un constat qui ne décide rien. EN: an observation that decides nothing.', 'a7-piege'),
        tI('Complète. Un mot.', 'Une copie qui pèse beaucoup peut sembler complète, en ne tranchant ... .', 'jamais', 'La moitié manquante ne se voit pas toujours. EN: the missing half is not always visible.', 'a7-check'),
        tI('Complète. Un mot.', 'Farah s’arrête : « Mais je ne dis ... . »', 'rien', 'Un constat, sans décision. EN: an observation, with no decision.', 'a7-scene'),
        eS('Je pense que le télétravail est globalement positif pour tout le monde, dans toutes les équipes.', 'Le gain moyen cache une fracture selon l’ancienneté, ce qui m’empêche d’affirmer un bénéfice universel.', 'Un avis sans source reste la moitié manquante. EN: an opinion with no source stays the missing half.', 'a7-piege'),
      ],
    },
    {
      id: 'r8-copie', label: 'Ta synthèse-dissertation', targets: ['moitie-manquante'],
      questions: [
        mc('Le modèle de l’acte 8 pèse les trois documents...', ['séparément, sur trois paragraphes isolés', 'avant de trancher sa position dans le même texte'], 1, 'Dans l’ordre, puis une décision commune. EN: in order, then a shared decision.', 'a8-modele'),
        mc('La mission écrite demande un texte de...', ['150 à 280 mots', '280 à 400 mots'], 1, 'Un budget plus serré que l’exercice au C1, mais pas le plus lourd possible. EN: a tighter budget than the C1 exercise, but not the heaviest possible.', 'a8-mission'),
        mc('La conclusion du modèle ouvre une question qui vient...', ['de nulle part', 'de la position déjà tranchée'], 1, 'Qui fera tenir les règles proposées. EN: who will make the proposed rules hold.', 'a8-modele'),
        tI('Complète. Un mot.', 'Peser les sources, puis ... , dans la même phrase.', 'trancher', 'Le reframe de toute la leçon. EN: the whole lesson’s reframe.', 'a8-progress'),
        tI('Complète. Un mot.', 'Avant l’épreuve, reprends un dossier déjà annoté et vérifie, phrase par phrase, que chacune pèse une source et ... une position.', 'tranche', 'Les deux à la fois. EN: both at once.', 'a8-progress'),
        eS('Ces trois documents montrent bien la complexité du sujet, et je n’ai rien à ajouter.', 'Je défends donc une autre réponse : le télétravail doit rester un outil encadré par des règles précises.', 'Une conclusion doit toujours trancher. EN: a conclusion must always decide.', 'a8-cheat'),
      ],
    },
  ],
};

/** Rotate each quiz question's options together with its `correct` index so
 *  no slot takes more than its share. Changes no text. */
function spreadSlots(quiz: Sec<'quiz'>): void {
  const used = [0, 0, 0, 0];
  for (const r of quiz.rounds ?? []) {
    for (const q of r.questions as (QQ & { opts?: string[]; correct?: number })[]) {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
      const n = q.opts.length;
      let target = 0;
      for (let k = 1; k < n; k++) if (used[k] < used[target]) target = k;
      const shift = (target - q.correct + n) % n;
      q.opts = q.opts.map((_, i) => q.opts![(i - shift + n) % n]);
      q.correct = target;
      used[target]++;
    }
  }
}
spreadSlots(A8_QUIZ);

const A8_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a8-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'weigh a source, then decide', back: 'peser, puis trancher', say: src(E(2202)).fr },
    { front: 'reading three documents by shared stake', back: 'lire par enjeu', say: src(E(2216)).fr },
    { front: 'citing and deciding in the same sentence', back: 'la phrase fondue', say: src(E(2229)).fr },
    { front: 'the qualifying figure a compression must keep', back: 'le chiffre qui nuance', say: src(E(2211)).fr },
    { front: 'never inventing, reversing or adding', back: 'la fidélité, même sous la contrainte', say: src(E(2259)).fr },
    { front: 'the plan the real tension allows', back: 'le plan comparatif ou analytique', say: src(E(2273)).fr },
    { front: 'weighing without deciding, or the reverse', back: 'la moitié manquante', say: src(E(2291)).fr },
    { front: 'one fused text, under a tight word budget', back: 'la synthèse-dissertation', say: src(E(2307)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: 'La synthèse-dissertation, en résumé',
  body: `${REFRAME} Tu lis maintenant plusieurs sources denses comme un seul dossier, et tu écris un seul texte qui les pèse avec fidélité tout en tranchant une position structurée, phrase après phrase. EN: You can now read several dense sources as a single dossier, and write one single text that weighs them faithfully while deciding a structured position, sentence by sentence.`,
  points: [
    'Lire un dossier dense, c’est chercher l’enjeu commun à tous les documents, jamais un résumé document par document.',
    'Une phrase fondue cite un document ET tranche une décision, dans la même proposition, grâce à un connecteur.',
    'Compresser garde toujours le chiffre qui nuance ; il ne se sacrifie jamais contre la contrainte de mots.',
    'Un plan vient de la tension réelle du dossier, jamais d’un pour/contre forcé par le sujet seul.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['syntheseargumentee', 'moitiemanquante'],
};

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ta synthèse-dissertation',
    opener: {
      line: 'Le modèle pèse les trois documents puis tranche sa position, dans le même texte : ici tu lis comment, puis tu écris la même chose, sur le même dossier. EN: The model weighs the three documents then decides its position, in the same text: here you read how, then write the same thing, on the same dossier.',
      imageRef: 'lessons/c2-10-synthese-dissertation/act08.jpg',
    },
    sections: [],
    milestone: 'Tu produis un texte unique qui pèse trois sources denses avec fidélité et tranche une position personnelle structurée, sous un nombre de mots serré. EN: You can produce a single text that weighs three dense sources faithfully and decides a structured personal position, under a tight word count.',
    estScreens: 42, restPoints: ['a8-scenario', 'a8-mission', 'a8-cheat', 'a8-quiz'],
  },
  sections: [A8_MODELE, A8_PLAN, A8_USAGES, A8_SCENARIO, A8_MISSION, A8_PARLER, A8_CHEAT, A8_PROGRESS, A8_QUIZ, A8_REVIEW, A8_ROUNDUP],
  imports: IMPORTED.act8,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its authored slots, scattered by hand (precision-nuance-lesson.ts 6.11). */
function balanceSlots(sections: LessonSection[], drills: LessonDrill[]): void {
  const used: Record<number, number[]> = {};
  const recent: number[] = [];
  const visit = (node: unknown): void => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(visit); return; }
    const o = node as { opts?: unknown; correct?: unknown };
    if (Array.isArray(o.opts) && typeof o.correct === 'number') {
      const opts = o.opts as string[];
      const n = opts.length;
      const u = (used[n] ??= new Array(n).fill(0));
      const order = [...Array(n).keys()].sort((a, b) => u[a] - u[b] || a - b);
      const blocked = recent.length >= 2 && recent[recent.length - 1] === recent[recent.length - 2] ? recent[recent.length - 1] : -1;
      const target = order.find((k) => k !== blocked) ?? order[0];
      const shift = (target - (o.correct as number) + n) % n;
      o.opts = opts.map((_, i) => opts[(i - shift + n) % n]);
      o.correct = target;
      u[target]++;
      recent.push(target);
    }
    for (const v of Object.values(node as Record<string, unknown>)) visit(v);
  };
  for (const s of sections) if (s.type !== 'quiz' && s.type !== 'task') visit(s);
  for (const d of drills) visit(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-genre', title: 'Un seul texte, pas deux feuilles', format: 'mcq' as const, coach: 'Vérifie que ta copie pèse ET tranche, dans le même texte. EN: check that your answer weighs AND decides, in the same text.', q: 'Une copie qui résume dans une partie, puis donne son avis dans une autre, est...', opts: ['l’exercice demandé', 'exactement la faute que cette leçon corrige'], correct: 1, why: 'Jamais deux feuilles séparées. EN: never two separate sheets.', items: [E(2200), E(2202), E(2208)], audio: AUDIO },
  { id: 'd-lecture', title: 'Lire par enjeu, pas par document', format: 'sort' as const, coach: 'Classe chaque fragment : une affirmation d’un document, ou une nuance qui la qualifie. EN: sort each fragment: a document’s claim, or a nuance qualifying it.', buckets: ['affirmation', 'nuance'], items: [E(2210), E(2211), E(2212), E(2213), E(2214), E(2215)], audio: AUDIO },
  { id: 'd-fusion', title: 'Fondre une citation et une décision', format: 'mcq' as const, coach: 'Cherche le connecteur qui relie la source citée à la décision prise. EN: look for the connector linking the cited source to the decision taken.', q: '« Le document 2 montre... Je pense par ailleurs que... » manque...', opts: ['un connecteur qui fond les deux phrases', 'une troisième phrase'], correct: 0, why: 'Sans connecteur, deux phrases voisines, jamais une seule. EN: without a connector, two neighbouring sentences, never one.', items: [E(2229), E(2230), E(2235), E(2236)], audio: AUDIO },
  { id: 'd-compression', title: 'Garder le chiffre qui nuance', format: 'mcq' as const, coach: 'Avant de couper une phrase, vérifie que tu ne coupes pas la nuance qui la qualifie. EN: before cutting a sentence, check you are not cutting the nuance qualifying it.', q: '« Le télétravail augmente la productivité de quatre points » a perdu...', opts: ['la fracture selon l’ancienneté', 'rien d’important'], correct: 0, why: 'La contrainte de mots ne justifie jamais cette perte. EN: the word-count constraint never justifies that loss.', items: [E(2244), E(2245), E(2246)], audio: AUDIO },
  { id: 'd-fidelite', title: 'Ne jamais inventer, inverser ou ajouter', format: 'mcq' as const, coach: 'Vérifie chaque affirmation contre le document qu’elle cite, par son numéro. EN: check every claim against the document it cites, by number.', q: 'Prétendre que les trois documents parlent de santé mentale est une faute parce que...', opts: ['c’est une idée absente des trois sources', 'c’est une idée trop générale'], correct: 0, why: 'Attribuer une idée absente ajoute ce que le dossier ne contient pas. EN: attributing an absent idea adds what the dossier does not contain.', items: [E(2260), E(2262), E(2264), E(2268)], audio: AUDIO },
  { id: 'd-plan', title: 'Un plan que le dossier permet', format: 'mcq' as const, coach: 'Vérifie que ton plan vient de la tension réelle entre les documents, pas du sujet seul. EN: check that your plan comes from the real tension among the documents, not the topic alone.', q: 'Forcer ce dossier dans un plan pour/contre ferait perdre sa position réelle à...', opts: ['document 1', 'document 3'], correct: 1, why: 'Il refuse justement le clivage pour/contre. EN: it precisely refuses the for-or-against divide.', items: [E(2272), E(2277), E(2281)], audio: AUDIO },
  { id: 'd-moitie', title: 'Peser ET trancher, jamais l’un sans l’autre', format: 'mcq' as const, coach: 'Relis chaque phrase et vérifie qu’elle pèse ET qu’elle tranche. EN: reread every sentence and check it weighs AND decides.', q: '« Ces trois documents montrent bien la complexité du sujet » est un exemple de...', opts: ['conclusion vide, qui ne tranche rien', 'conclusion complète'], correct: 0, why: 'Le remède est de relier ce constat à une décision. EN: the remedy is to link this observation to a decision.', items: [E(2283), E(2284), E(2287), E(2288)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'deux-textes', description: 'Writes a neutral synthesis and a separate opinion as two distinct texts or blocks, instead of one fused answer.', detectOn: ['a1-check', 'a1-groupe', 'a8-mission'], drill: 'd-genre', retest: 'd-genre' },
  { id: 'lecture-isolee', description: 'Reads and summarises each document on its own, missing the shared stake or tension running across all three.', detectOn: ['a2-groupe', 'a2-check', 'a8-mission'], drill: 'd-lecture', retest: 'd-lecture' },
  { id: 'phrase-non-fondue', description: 'Keeps a document citation and a personal decision in two adjacent but unconnected sentences, with no connector fusing them.', detectOn: ['a3-groupe', 'a3-check', 'a8-mission'], drill: 'd-fusion', retest: 'd-fusion' },
  { id: 'nuance-perdue', description: 'Compresses a dense sentence by dropping the statistic or clause that qualifies its headline claim, rather than shortening the wording around it.', detectOn: ['a4-groupe', 'a4-check', 'a8-mission'], drill: 'd-compression', retest: 'd-compression' },
  { id: 'chiffre-invente', description: 'Invents a figure, reverses a document’s claim, or attributes an idea to the dossier that none of the three documents actually contains.', detectOn: ['a5-groupe', 'a5-check', 'a8-mission'], drill: 'd-fidelite', retest: 'd-fidelite' },
  { id: 'plan-force', description: 'Forces a pour/contre dialectical plan onto a dossier whose real tension (what counts, who bears the cost) does not support a two-sided split.', detectOn: ['a6-groupe', 'a6-check', 'a8-mission'], drill: 'd-plan', retest: 'd-plan' },
  { id: 'moitie-manquante', description: 'Holds only half the fused genre: weighs the documents at length with no decision, or states a position with no document grounding it.', detectOn: ['a7-piege', 'a7-check', 'a8-mission'], drill: 'd-moitie', retest: 'd-moitie' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-genre', 'La synthèse-dissertation', ['peser', 'trancher', 'un seul texte'], [
    teach('sheet-genre-teach', 'Deux outils fondus en un',
      `${Cap(C110_REF)} enseigne la synthèse (peser, sans trancher) et l’essai (trancher, sans peser forcément les mêmes documents) comme deux exercices séparés. La synthèse-dissertation fond les deux : chaque phrase pèse une source ET tranche une décision, dans un seul texte. EN: The C1 lesson teaches the synthesis (weighing, without deciding) and the essay (deciding, without necessarily weighing the same documents) as two separate exercises. The synthesis-dissertation fuses the two: every sentence weighs a source AND decides, in one single text.`),
    table('sheet-genre-table', 'Ancien outil, nouveau geste', ['Ancien outil', 'Nouveau geste'], [
      ['la synthèse, seule', 'peser ET trancher, dans la même phrase'],
      ['l’essai, seul', 'trancher en s’appuyant toujours sur un document cité'],
      ['deux feuilles séparées', 'un seul texte, un seul mouvement'],
    ]),
  ]),
  sheet('sheet-lecture', 'Lire un dossier dense par enjeu', ['document 1', 'document 2', 'document 3'], [
    teach('sheet-lecture-teach', 'La même question, comptée trois fois',
      'Les trois documents de ce dossier ne s’accordent ni ne s’opposent sur le télétravail lui-même : ils comptent trois choses différentes, en réponse à la même question (ce qui compte, et qui en porte le coût). Lire par enjeu, c’est chercher cette question commune avant de résumer chaque document. EN: The three documents in this dossier neither agree nor disagree on remote work itself: they count three different things, in answer to the same question. Reading by shared stake means looking for that common question before summarising each document.'),
    table('sheet-lecture-table', 'Ce que chaque document compte', ['Document', 'Ce qu’il compte', 'Sa nuance'], [
      ['1, l’Observatoire', 'des points de productivité', 'un gain qui tombe sous un point pour les plus récents'],
      ['2, Aminata Sow', 'des gestes non transmis', 'un coût invisible dans les tableaux'],
      ['3, Karim Belhadj', 'des limites non tenues', 'le vrai risque n’est pas le lieu, c’est la confusion'],
    ]),
  ]),
  sheet('sheet-fusion', 'La phrase fondue', ['connecteurs', 'citer', 'trancher'], [
    teach('sheet-fusion-teach', 'Un connecteur qui porte tout le poids',
      'Une phrase fondue cite un document et prend position dans la même proposition, reliées par un connecteur. Sans ce connecteur, la citation et l’avis restent deux phrases voisines, jamais une seule. EN: A fused sentence cites a document and takes a position in the same clause, linked by a connector. Without that connector, the citation and the opinion stay two neighbouring sentences, never one.'),
    table('sheet-fusion-table', 'Connecteurs qui fondent', ['Connecteur', 'Rôle'], [
      ['ce qui m’amène à', 'relie une citation à une décision'],
      ['ce qui justifie', 'relie une citation à une décision'],
      ['sans renoncer à', 'garde une source visible au moment où la phrase tranche'],
      ['reviendrait à', 'tranche contre une lecture trop simple de la source'],
    ]),
  ]),
  sheet('sheet-compression', 'Compresser sans trahir', ['le chiffre qui nuance', 'compression fidèle'], [
    teach('sheet-compression-teach', 'Couper la longueur, jamais une idée',
      'Sous un nombre de mots serré, la première phrase sacrifiée est souvent celle qui contredit, même en partie, la phrase d’avant. Une bonne compression choisit le mot qui porte la nuance, elle n’efface jamais la nuance pour gagner de la place. EN: Under a tight word count, the first sentence sacrificed is often the one that partly contradicts the sentence before it. A good compression chooses the word that carries the nuance; it never erases the nuance to save space.'),
    table('sheet-compression-table', 'Dense, fidèle, ou trahie', ['Dense', 'Compression fidèle', 'Compression trahie'], [
      ['un gain de quatre points en moyenne, qui tombe sous un point pour les plus récents', 'un gain moyen qui masque un gain proche de zéro', 'le télétravail augmente la productivité de quatre points'],
      ['un coût invisible dans les tableaux, qui coûte plus cher qu’un bureau libéré', 'un coût invisible peut peser plus qu’une économie visible', 'le télétravail n’a aucun coût caché'],
    ]),
  ]),
  sheet('sheet-plan', 'Choisir un plan pour ce dossier', ['plan comparatif', 'plan analytique', 'le plan de ta copie'], [
    teach('sheet-plan-teach', 'Le dossier choisit le plan, jamais le sujet seul',
      `${Cap(C110_REF)} t’a donné deux plans : le plan analytique (constat, causes, enjeux) et le plan comparatif, critère par critère. Ce dossier refuse un plan pour ou contre, parce que le document 3 refuse lui-même le clivage ; le bon plan compare trois manières de compter ce qui compte, ou part d’un constat pour remonter à ses causes. EN: The C1 lesson gave you two plans: the analytical plan and the comparative plan, criterion by criterion. This dossier refuses a for-or-against plan, because document 3 itself refuses that divide; the right plan compares three ways of counting what counts, or starts from an observation and traces its causes.`),
    table('sheet-plan-table', 'Le plan en quatre étapes', ['Étape', 'Formule'], [
      ['lire par enjeu', 'Les trois documents répondent tous à…'],
      ['choisir le plan', 'Ce dossier permet un plan…, jamais un plan pour/contre'],
      ['fondre chaque phrase', 'Puisque le document…, je…'],
      ['conclure en tranchant', 'Je défends donc…, ce qui laisse ouvert…'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ALL_ROWS.some((r) => r.id === id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-10-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-10-deux-outils': 'The two-tool-plus-fusion cardDeck (act 1), ONE VOICE, one take, a measured, explanatory tone, each card read at the same even pace.',
  'rec-c2-10-dossier': 'THE DOSSIER (act 2), THREE VOICES: a neutral administrative reader for the title, the note "Document, institut et chiffres inventés pour l’exercice" and document 1; Aminata Sow, measured, slightly formal; Karim Belhadj, direct, conversational. "DOCUMENT 1 / 2 / 3" as labels. Figures in full words.',
  'rec-c2-10-phrase-fondue': 'The four fusion-contrast cards (act 3), ONE VOICE, one take: the two fused cards read as one continuous, confident sentence; the two unfused cards read with a small pause between the citation and the opinion, audible even without seeing the text.',
  'rec-c2-10-deux-plans': 'The two plan cards (act 6), ONE VOICE, one take, a measured, explanatory tone, each card read at the same even pace.',
  'rec-c2-10-modele': 'The model synthesis-dissertation (act 8), ONE VOICE, one take, a confident exam candidate reading her own finished answer aloud: even pace, no dramatic emphasis.',
  'rec-c2-10-cinq-moities': 'The five trap cards (act 7), ONE VOICE, one take, read plainly, with no corrective or ironic tone on any of the five half-complete claims.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 10',
  intro: 'At C1 you learned to build a plan and write a document synthesis, as two separate exercises, on a conversational three-document dossier. This lesson reads a DENSER three-document dossier (statistics, qualifying clauses, specialist register) as one shared tension rather than three summaries, then fuses the synthesis and the essay into ONE text: every key sentence cites a document AND decides a position, kept faithful under a tight word budget, structured by a plan the dossier’s real tension actually allows, and finally produces that fused text yourself, graded.',
  skill: 'PE',
  grammarAssumed: ['c1.10'],
  grammarIntroduced: [
    'Reading two to three dense documents by their SHARED stake across all of them, rather than summarising document by document',
    'Fusing a document citation and a personal decision inside the SAME sentence, via a connector, rather than keeping a synthesis block and an opinion block separate',
    'Compressing a dense, statistic-bearing sentence under a tight word budget while keeping the qualifying figure that stops its headline claim from being read as universal',
    'Extending fidelity past c1.10’s single-dossier rule into a hard line against inventing a figure, reversing a document’s claim, or attributing an idea to a multi-document dossier that none of its sources actually contains',
    'Choosing a plan (comparative or analytical, from c1.10) that the dossier’s REAL three-way tension allows, refusing a forced pour/contre split the dossier itself does not support, and naming the besetting fault of holding only half the fused genre',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: `Au C1, tu as appris à construire un plan et à écrire une synthèse de documents, comme deux exercices séparés. Cette leçon lit un dossier de trois documents plus denses comme une seule tension, puis fond la synthèse et l’essai en UN SEUL texte : chaque phrase clé cite un document ET tranche une décision, sous un nombre de mots serré, avant de te demander de produire ce texte toi-même.`,
    minutes: 150,
    difficulty: 5,
    glyph: 'balance',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SYNTHESE_DISSERTATION_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (B1 build log, 2026-09-25). Kept, as every lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not
 *  released: every row whose `drills` carries no `flashcard`. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
